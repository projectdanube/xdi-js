(function (window) {

	"use strict";

	/*
	 * Statement, Segment, Subsegment, Xref classes
	 */

	function Statement(string, subject, predicate, object) {

		if (! (this instanceof Statement)) return new Statement(string, subject, predicate, object);

		this.string = string;
		this.subject = subject;
		this.predicate = predicate;
		this.object = object;

		if (this.string === null) {
			
			this.string = "";
			this.string += this.subject.string + "/";
			this.string += this.predicate.string + "/";
			this.string += (this.object.string || JSON.stringify(this.object));
		}
	}

	Statement.prototype.isContextNodeStatement = function() {

		return this.predicate.string === xdi.constants.xri_context.string;
	};

	Statement.prototype.isRelationStatement = function() {

		return (! this.isContextNodeStatement()) && (! this.isLiteralStatement());
	};

	Statement.prototype.isLiteralStatement = function() {

		return this.predicate.string === xdi.constants.xri_literal.string;
	};

	Statement.prototype.innerRootNotationStatement = function() {
		
		if (! this.isRelationStatement()) return null;

		var innerrootnotationxref = this.object.subsegments[0].xref;
		if (innerrootnotationxref === null) return null;

		var innerrootnotationstatement = innerrootnotationxref.statement;
		if (innerrootnotationstatement === null) return null;

		return innerrootnotationstatement;
	};

	Statement.prototype.isInnerRootNotation = function() {

		return this.innerRootNotationStatement() !== null;
	};

	Statement.prototype.fromInnerRootNotation = function() {
		
		var innerrootnotationstatement = this.innerRootNotationStatement();
		if (innerrootnotationstatement === null) return this;
		
		if (innerrootnotationstatement.isInnerRootNotation()) {
	
			throw "Not implemented";
		} else {
			
			var innerrootsubsegment = new Subsegment(null, null, false, false, null, new Xref(null, xdi.constants.xs_root, null, null, this.subject, this.predicate, null, null));
			var innerrootsegment = new Segment(null, [ innerrootsubsegment ]);

			var statement = xdi.util.concatStatement(innerrootsegment, innerrootnotationstatement, true);

			return statement;
		}
	};
	
	Statement.prototype.toInnerRootNotation = function() {
		
		throw "Not implemented";
	};
	
	function Segment(string, subsegments) {

		if (! (this instanceof Segment)) return new Segment(string, subsegments);

		this.string = string;
		this.subsegments = subsegments;

		if (this.string === null) {
			
			this.string = "";
			for (var i in this.subsegments) this.string += this.subsegments[i].string;
		}
	}

	function Subsegment(string, cs, classxs, attributexs, literal, xref) {

		if (! (this instanceof Subsegment)) return new Subsegment(string, cs, classxs, attributexs, literal, xref);

		this.string = string;
		this.cs = cs;
		this.classxs = classxs;
		this.attributexs = attributexs;
		this.literal = literal;
		this.xref = xref;

		if (this.string === null) {
			
			this.string = "";
			if (this.cs !== null) this.string += this.cs;
			if (this.classxs) this.string += xdi.constants.xs_class.charAt(0);
			if (this.attributexs) this.string += xdi.constants.xs_attribute.charAt(0);
			if (this.literal !== null) this.string += this.literal;
			if (this.xref !== null) this.string += this.xref.string;
			if (this.attributexs) this.string += xdi.constants.xs_attribute.charAt(1);
			if (this.classxs) this.string += xdi.constants.xs_class.charAt(1);
		}
	}

	function Xref(string, xs, segment, statement, partialsubject, partialpredicate, iri, literal) {

		if (! (this instanceof Xref)) return new Xref(string, xs, segment, statement, partialsubject, partialpredicate, iri, literal);

		this.string = string;
		this.xs = xs;
		this.segment = segment;
		this.statement = statement;
		this.partialsubject = partialsubject;
		this.partialpredicate = partialpredicate;
		this.iri = iri;
		this.literal = literal;

		if (this.string === null) {
			
			this.string = "";
			if (this.xs !== null) this.string += this.xs.charAt(0);
			if (this.segment) this.string += this.segment.string;
			if (this.statement) this.string += this.statement.string;
			if (this.partialsubject !== null && this.partialpredicate !== null) this.string += this.partialsubject.string + "/" + this.partialpredicate.string;
			if (this.iri) this.string += this.iri;
			if (this.literal) this.string += this.literal;
			if (this.xs !== null) this.string += this.xs.charAt(1);
		}
	}

	/*
	 * Graph, Context, Relation, Literal, Statement classes
	 */

	function Graph() {

		if (! (this instanceof Graph)) return new Graph(string);

		this._root = new Context(this, null, null);
	}

	Graph.prototype.root = function() {

		return this._root;
	};

	Graph.prototype.statements = function() {

		return this._root.statements();
	};

	Graph.prototype.statement = function(xri) {

		var statement = xdi.parser.parseStatement(xri);

		statement = statement.fromInnerRootNotation(statement);

		var context = (statement.subject.string === xdi.constants.xri_root.string) ? this._root : this._root.context(statement.subject.string);

		if (statement.isContextNodeStatement()) context.context(statement.object.string);
		else if (statement.isLiteralStatement()) context.literal(statement.object);
		else context.relation(statement.predicate.string, statement.object.string);
	};

	function Context(graph, parent, arc) {

		if (! (this instanceof Context)) return new Context(graph, parent, arc);

		this.graph = graph;
		this.parent = parent;
		this.arc = arc;
		this._contexts = { };
		this._relations = { };
		this._literal = null;

		var xristring = arc === null ? null : arc.string;
		while (parent !== null && parent.arc !== null) { xristring = parent.arc.string + xristring; parent = parent.parent; }
		if (xristring === null) xristring = "()";
		this.xri = xdi.parser.parseSegment(xristring);

		if (this.parent === null) this.statement = null;
		else this.statement = new Statement(null, this.parent.xri, xdi.parser.parseSubsegment("()"), this.arc);
	}

	Context.prototype.statements = function() {

		var statements = [];

		if (this.statement !== null) statements.push(this.statement);

		for (var c in this._contexts) statements = statements.concat(this._contexts[c].statements());
		for (var r in this._relations) for (var rr in this._relations[r]) statements.push(this._relations[r][rr].statement);
		if (this._literal !== null) statements.push(this._literal.statement);

		return statements;
	};

	Context.prototype.contexts = function() {

		return this._contexts;
	};

	Context.prototype.context = function(arcsString, create) {

		create = typeof create !== 'undefined' ? create : true;

		var arcs = xdi.parser.parseSegment(arcsString);
		var context = this;

		for (var i=0; i<arcs.subsegments.length; i++) {

			var arc = arcs.subsegments[i];
			var arcString = arc.string;

			var newcontext = context._contexts[arcString];

			if (typeof newcontext === 'undefined') {

				if (! create) return null;

				newcontext = new Context(this.graph, context, arc);
				context._contexts[arcString] = newcontext;

				if (arc.xref !== null && arc.xref.partialsubject !== null && arc.xref.partialpredicate !== null) {

					this.context(arc.xref.partialsubject.string, true).relation(arc.xref.partialpredicate.string, newcontext.xri.string);
				}
			}

			context = newcontext;
		}

		return context;
	};

	Context.prototype.relations = function() {

		return this._relations;
	};

	Context.prototype.relation = function(arcString, targetString, create) {

		create = typeof create !== 'undefined' ? create : true;

		var arc = xdi.parser.parseSegment(arcString);
		var target = xdi.parser.parseSegment(targetString);
		var relation = typeof this._relations[arcString] === 'undefined' ? undefined : this._relations[arcString][targetString];

		if (typeof relation === 'undefined') {

			if (! create) return null;

			this.graph.root().context(targetString);

			relation = new Relation(this.graph, this, arc, target);
			if (typeof this._relations[arcString] === 'undefined') this._relations[arcString] = { };
			this._relations[arcString][targetString] = relation;
		}

		return relation;
	};

	Context.prototype.literal = function(data) {

		var literal = this._literal;

		if (literal === null) {

			literal = new Literal(this.graph, this, data);
			this._literal = literal;
		}

		return literal;
	};

	function Relation(graph, parent, arc, target) {

		if (! (this instanceof Relation)) return new Relation(graph, parent, arc, target);

		this.graph = graph;
		this.parent = parent;
		this.arc = arc;
		this.target = target;

		this.statement = new Statement(null, this.parent.xri, this.arc, this.target);
	}

	function Literal(graph, parent, data) {

		if (! (this instanceof Literal)) return new Literal(graph, parent, data);

		this.graph = graph;
		this.parent = parent;
		this.data = data;

		this.statement = new Statement(null, this.parent.xri, xdi.constants.xri_literal, this.data);
	}

	/*
	 * Message class
	 */

	function Message(sender) {

		if (! (this instanceof Message)) return new Message(sender);

		this.sender = sender;

		this.graph = new Graph();

	}

	Message.prototype.linkcontract = function(linkcontract) {

	};

	/*
	 * Client class
	 */

	function Client() {

		if (! (this instanceof Client)) return new Client();
	}

	/*
	 * Library object
	 */

	var xdi = {};

	xdi = {

			constants: {

				cs_equals: "=",
				cs_at: "@",
				cs_plus: "+",
				cs_dollar: "$",
				cs_star: "*",
				cs_bang: "!",
				cs_order: "#",
				cs_value: "&",
				cs_array: [ "=", "@", "+", "$", "*", "!", "#", "&" ],
				xs_root: "()",
				xs_variable: "{}",
				xs_class: "[]",
				xs_attribute: "<>",
				xri_root: null,
				xri_context: null,
				xri_value: null,
				xri_literal: null,
				xri_variable: null
			},

			graph: function() {

				return new Graph();
			},

			util: {

				concatSegments: function(segment1, segment2) {

					var buffer = "";
					if (segment1 !== null && segment1.string !== xdi.constants.xri_root.string) buffer += segment1.string;
					if (segment2 !== null && segment2.string !== xdi.constants.xri_root.string) buffer += segment2.string;

					if (buffer === "") buffer = xdi.constants.xri_root.string;

					return xdi.parser.parseSegment(buffer);
				},

				concatStatement: function(segment, statement, concatTargetContextNodeXri) {

					if (statement.isInnerRootNotation()) throw "Cannot concat statement in inner root notation.";

					var subject = xdi.util.concatSegments(segment, statement.subject);
					var predicate = statement.predicate;
					
					var object;
					
					if (statement.isRelationStatement() && concatTargetContextNodeXri) {
						
						object = xdi.util.concatSegments(segment, statement.object);
					} else {
						
						object = statement.object;
					}
					
					return new Statement(null, subject, predicate, object);
				}
			},

			io: {

				read: function(string) {

					var graph = xdi.graph();
					var lines = string.split("\n");

					for (var i in lines) {

						if (lines[i].trim() === "") continue;
						graph.statement(lines[i]);
					}

					return graph;
				},

				write: function(graph) {

					var statements = graph.statements();
					var buffer = "";

					for (var i in statements) buffer += statements[i].string + "\n";

					return buffer;
				}
			},

			parser: {

				cs: function(char) {

					for (var i in xdi.constants.cs_array) if (xdi.constants.cs_array[i] === char) return xdi.constants.cs_array[i];

					return null;
				},

				cla: function(char) {

					if (xdi.constants.xs_class.charAt(0) === char) return xdi.constants.xs_class;

					return null;
				},

				att: function(char) {

					if (xdi.constants.xs_attribute.charAt(0) === char) return xdi.constants.xs_attribute;

					return null;
				},

				xs: function(char) {

					if (xdi.constants.xs_root.charAt(0) === char) return xdi.constants.xs_root;
					if (xdi.constants.xs_variable.charAt(0) === char) return xdi.constants.xs_variable;

					return null;
				},

				parseStatement: function(string) {

					var temp = xdi.parser.stripXs(string);

					var parts = temp.split("/");
					if (parts.length !== 3) throw "Invalid statement: " + string + " (wrong number of segments: " + parts.length + ")";
					var split0 = parts[0].length;
					var split1 = parts[1].length;

					var subject = xdi.parser.parseSegment(string.substring(0, split0));
					var predicate = xdi.parser.parseSegment(string.substring(split0 + 1, split0 + split1 + 1));

					if (xdi.constants.cs_value === predicate.string) {

						var object = JSON.parse(string.substring(split0 + split1 + 2));

						return new Statement(string, subject, predicate, object);
					} else if (xdi.constants.xs_context === predicate.string) {

						var object = parse.parseSubsegment(string.substring(split0 + split1 + 2));

						return new Statement(string, subject, predicate, object);
					} else {

						var object = xdi.parser.parseSegment(string.substring(split0 + split1 + 2));

						return new Statement(string, subject, predicate, object);
					}
				},

				parseSegment: function(string) {

					var start = 0, pos = 0;
					var pair = null;
					var pairs = [];
					var subsegments = [];

					while (pos < string.length) {

						// parse beginning of subsegment

						if (pos < string.length && (pair = xdi.parser.cla(string.charAt(pos))) !== null) { pairs.push(pair); pos++; }
						if (pos < string.length && (pair = xdi.parser.att(string.charAt(pos))) !== null) { pairs.push(pair); pos++; }
						if (pos < string.length && xdi.parser.cs(string.charAt(pos)) !== null) pos++;
						if (pos < string.length && (pair = xdi.parser.xs(string.charAt(pos))) !== null) { pairs.push(pair); pos++; }

						// parse to the end of the subsegment

						while (pos < string.length) {

							// no open pairs?

							if (pairs.length === 0) {

								// reached beginning of the next subsegment

								if (xdi.parser.cla(string.charAt(pos)) !== null) break;
								if (xdi.parser.att(string.charAt(pos)) !== null) break;
								if (xdi.parser.cs(string.charAt(pos)) !== null) break;
								if (xdi.parser.xs(string.charAt(pos)) !== null) break;
							}

							// at least one pair still open?

							if (pairs.length > 0) {

								// new pair being opened?

								pair = xdi.parser.cla(string.charAt(pos));
								if (pair === null) pair = xdi.parser.att(string.charAt(pos));
								if (pair === null) pair = xdi.parser.xs(string.charAt(pos));

								if (pair !== null) {

									pairs.push(pair);
									pos++;
									continue;
								}

								// pair being closed?

								if (string.charAt(pos) === pairs[pairs.length - 1].charAt(1)) {

									pairs.pop();
									pos++;
									continue;
								}
							}

							pos++;
						}

						if (pairs.length > 0) throw "Missing closing character '" + pairs[pairs.length - 1].charAt(1) + "'.";

						subsegments.push(xdi.parser.parseSubsegment(string.substring(start, pos)));

						start = pos;
					}

					return new Segment(string, subsegments);
				},

				parseSubsegment: function(string) {

					var pos = 0, len = string.length;
					var cs = null;
					var cla = null;
					var att = null;
					var literal = null;
					var xref = null;

					// extract class pair

					if (pos < len && (cla = xdi.parser.cla(string.charAt(pos))) !== null) {

						if (string.charAt(len - 1) !== cla.charAt(1)) throw "Invalid subsegment: " + string + " (invalid closing '" + cla.charAt(1) + "' character for class)";

						pos++; len--;
					}

					// extract attribute pair

					if (pos < len && (att = xdi.parser.att(string.charAt(pos))) !== null) {

						if (string.charAt(len - 1) !== att.charAt(1)) throw "Invalid subsegment: " + string + " (invalid closing '" + att.charAt(1) + "' character for attribute)";

						pos++; len--;
					}

					// extract cs

					if (pos < len && (cs = xdi.parser.cs(string.charAt(pos))) !== null) {

						pos++;
					}

					// parse the rest, either xref or literal

					if (pos < len) {

						if (xdi.parser.xs(string.charAt(pos)) !== null) {

							xref = xdi.parser.parseXref(string.substring(pos, len));
						} else {

							if (pos === 0) throw "Invalid subsegment: " + string + " (no cs, xref)";
							literal = xdi.parser.parseLiteral(string.substring(pos, len));
						}
					}

					// done

					return new Subsegment(string, cs, cla !== null, att !== null, literal, xref);
				},

				parseXref: function(string) {

					var xs = xdi.parser.xs(string.charAt(0));
					if (xs === null) throw "Invalid xref: " + string + " (no opening delimiter)";
					if (string.charAt(string.length - 1) !== xs.charAt(1)) throw "Invalid xref: " + string + " (invalid closing '" + xs.charAt(1) + "' character)";
					if (string.length === 2) return new Xref(string, xs, null, null, null, null, null, null);

					var value = string.substring(1, string.length - 1);

					var temp = xdi.parser.stripXs(value);

					var segment = null;
					var statement = null;
					var partialsubject = null;
					var partialpredicate = null;
					var iri = null;
					var literal = null;

					if (xdi.parser.isIri(temp)) {

						iri = value;
					} else {

						var segments = temp.split("/").length;

						if (segments === 3) {

							statement = xdi.parser.parseStatement(value);
						} else if (segments === 2) {

							var parts = temp.split("/");
							var split0 = parts[0].length;

							partialsubject = xdi.parser.parseSegment(value.substring(0, split0));
							partialpredicate = xdi.parser.parseSegment(value.substring(split0 + 1));
						} else if (xdi.parser.cs(value.charAt(0)) !== null || xdi.parser.cla(value.charAt(0)) || xdi.parser.att(value.charAt(0)) || xdi.parser.xs(value.charAt(0))) {

							segment = xdi.parser.parseSegment(value);
						} else {

							literal = value;
						}
					}

					// done

					return new Xref(string, xs, segment, statement, partialsubject, partialpredicate, iri, literal);
				},

				stripXs: function(string) {

					string = xdi.parser.stripPattern(string, /\([^\(\)]*\)/);
					string = xdi.parser.stripPattern(string, /\{[^\(\)]*\}/);
					string = xdi.parser.stripPattern(string, /\"[^\"]*\"/);

					return string;
				},

				stripPattern: function(string, pattern) {

					var temp = string;

					while (true) {

						var match = pattern.exec(temp);
						if (match === null) break;

						var newtemp = "";
						newtemp += temp.substring(0, match.index);
						for (var i=0; i<match[0].length; i++) newtemp += " ";
						newtemp += temp.substring(match.index + match[0].length);

						temp = newtemp;
					}

					return temp;
				},

				isIri: function(string) {

					var indexColon = string.indexOf(":");
					var indexEquals = string.indexOf(xdi.constants.cs_equals);
					var indexAt = string.indexOf(xdi.constants.cs_at);
					var indexPlus = string.indexOf(xdi.constants.cs_plus);
					var indexDollar = string.indexOf(xdi.constants.cs_dollar);
					var indexStar = string.indexOf(xdi.constants.cs_star);
					var indexBang = string.indexOf(xdi.constants.cs_bang);

					if (indexColon === -1) return false;

					if (indexEquals !== -1 && indexEquals < indexColon) return false;
					if (indexAt !== -1 && indexAt < indexColon) return false;
					if (indexPlus !== -1 && indexPlus < indexColon) return false;
					if (indexDollar !== -1 && indexDollar < indexColon) return false;
					if (indexStar !== -1 && indexStar < indexColon) return false;
					if (indexBang !== -1 && indexBang < indexColon) return false;

					return true;
				},

				parseLiteral: function(string) {

					string = decodeURIComponent(string);

					for (var pos=0; pos<string.length; pos++) {

						var c = string.charCodeAt(pos);

						if (c >= 0x41 && c <= 0x5A) continue;
						if (c >= 0x61 && c <= 0x7A) continue;
						if (c >= 0x30 && c <= 0x39) continue;
						if (c === "-".charCodeAt(0)) continue;
						if (c === ".".charCodeAt(0)) continue;
						if (c === ":".charCodeAt(0)) continue;
						if (c === "_".charCodeAt(0)) continue;
						if (c === "~".charCodeAt(0)) continue;
						if (c >= 0xA0 && c <= 0xD7FF) continue;
						if (c >= 0xF900 && c <= 0xFDCF) continue;
						if (c >= 0xFDF0 && c <= 0xFFEF) continue;

						throw "Invalid character '" + c + "' at position " + pos + " of literal " + string;
					}

					return string;
				}
			}
	};

	xdi.constants.xri_root = xdi.parser.parseSegment("()");
	xdi.constants.xri_context = xdi.parser.parseSegment("()");
	xdi.constants.xri_value = xdi.parser.parseSegment("&");
	xdi.constants.xri_literal = xdi.parser.parseSegment("&");
	xdi.constants.xri_variable = xdi.parser.parseSegment("{}");

	/*
	 * Assign global 'xdi' object
	 */

	window.xdi = xdi;

})(window || this);
