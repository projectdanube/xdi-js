window.xdi = (function () {

	/*
	 * Statement, Segment, Subsegment
	 */

	function Statement(subject, predicate, object) {

		this.subject = subject;
		this.predicate = predicate;
		this.object = object;

		this.string = this.subject.string + "/" + this.predicate.string + "/" + this.object.string;
	}

	function Segment(subsegments) {

		this.subsegments = subsegments;

		this.string = ""; for (i in this.subsegments) this.string += this.subsegments[i];
	}
 
	function Subsegment(string) {

		this.string = string;
	}

	/*
	 * Graph, Context, Relation, Literal, Statement classes
	 */

	function Graph() {

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

		var context = this._root.context(statement.subject.string);

		if (statement.predicate == "()") context.context(statement.object);
		else if (statement.predicate == "!") context.literal(xdi.util.fromDataSegment(statement.object));
		else context.relation(statement.predicate, statement.object);
	};

	function Context(graph, parent, arc) {

		this.graph = graph;
		this.parent = parent;
		this.arc = arc;
		this._contexts = { };
		this._relations = { };
		this._literal = null;

		this.xri = arc;
		while (parent !== null && parent.arc !== null) { this.xri = parent.arc + this.xri; parent = parent.parent; }
		if (this.xri === null) this.xri = "()";

		if (this.parent === null) this.statement = null;
		else this.statement = new Statement(xdi.parser.parseSegment(this.parent.xri), xdi.parser.parseSegment("()"), xdi.parser.parseSegment(this.arc));
	}

	Context.prototype.statements = function() {

		var statements = [];

		if (this.statement !== null) statements.push(this.statement);

		for (c in this._contexts) statements = statements.concat(this._contexts[c].statements());
		for (r in this._relations) for (rr in this._relations[r]) statements.push(this._relations[r][rr].statement);
		if (this._literal !== null) statements.push(this._literal.statement);

		return statements;
	};

	Context.prototype.contexts = function() {

		return this._contexts;
	};

	Context.prototype.context = function(arcsString, create) {

		create = typeof create !== 'undefined' ? create : true;
		
		var arcXris = xdi.parser.parseSegment(arcsString);
		var context = this;

		for (var i=0; i<arcXris.subsegments.length; i++) {
		
			var arcXri = arcXris.subsegments[i];
			
			context = context._contexts[arcXri];

			if (typeof context === 'undefined') {
	
				if (! create) return null;
				
				context = new Context(this.graph, this, arcXri);
				this._contexts[arcXri] = context;
			}
		}

		return context;
	};

	Context.prototype.relations = function() {

		return this._relations;
	};

	Context.prototype.relation = function(arcXri, targetXri, create) {

		create = typeof create !== 'undefined' ? create : true;

		var relation = typeof this._relations[arcXri] === 'undefined' ? null : this._relations[arcXri][targetXri];

		if (relation === null) {

			relation = new Relation(this.graph, this, arcXri, targetXri);
			if (typeof this._relations[arcXri] === 'undefined') this._relations[arcXri] = { };
			this._relations[arcXri][targetXri] = relation;
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

		this.graph = graph;
		this.parent = parent;
		this.arc = arc;
		this.target = target;

		this.statement = new Statement(xdi.parser.parseSegment(this.parent.xri), xdi.parser.parseSegment(this.arc), xdi.parser.parseSegment(this.target));
	}

	function Literal(graph, parent, data) {

		this.graph = graph;
		this.parent = parent;
		this.data = data;

		this.statement = new Statement(xdi.parser.parseSegment(this.parent.xri), xdi.parser.parseSegment("!"), xdi.parser.parseSegment(xdi.util.toDataSegment(this.data)));
	}

	/*
	 * Message class
	 */

	function Message(sender) {

		this.sender = sender;

		this.graph = new Graph();

	}

	Message.prototype.linkcontract = function(linkcontract) {

	};

	/*
	 * Client class
	 */

	function Client() {

	}

	/*
	 * Library object
	 */

	var xdi = {

			util: {

				fromDataSegment: function(dataSegment) {

					var pattern = /^\(data:,(.*)\)$/;
					var match = pattern.exec(dataSegment);

					return match[1];
				},

				toDataSegment: function(data) {

					return "(data:," + encodeURIComponent(data) + ")";
				}
			},

			parser: {

				parseStatement: function(string) {

					var temp = xdi.parser.stripParens(string);

					var parts = temp.split("/");
					if (parts.length != 3) throw "Invalid statement: " + string + " (wrong number of segments: " + parts.length + ")";
					var split0 = parts[0].length;
					var split1 = parts[1].length;

					var subject = xdi.parser.parseSegment(string.substr(0, split0));
					var predicate = xdi.parser.parseSegment(string.substr(split0 + 1, split1));
					var object = xdi.parser.parseSegment(string.substr(split0 + split1 + 2));

					return new Statement(subject, predicate, object);
				},

				parseSegment: function(string) {

					var start = 0, pos = 0, parens = 0;
					var subsegments = [ ];

					while (pos < string.length) {

						if (pos + 1 < string.length && xdi.parser.isGcs(string.charAt(pos)) && xdi.parser.isLcs(string.charAt(pos + 1))) pos += 2;
						else if (xdi.parser.isGcs(string.charAt(pos))) pos++;
						else if (xdi.parser.isLcs(string.charAt(pos))) pos++;

						if (pos < string.length && string.charAt(pos) == '(') { parens = 1; pos++; }

						while (pos < string.length) {

							if (xdi.parser.isGcs(string.charAt(pos)) && parens == 0) break;
							if (xdi.parser.isLcs(string.charAt(pos)) && parens == 0) break;
							if (string.charAt(pos) == '(' && parens == 0) break;
							if (string.charAt(pos) == '(') parens++;
							if (string.charAt(pos) == ')' && parens == 0) throw "Invalid segment: " + string + " (wrong closing parentheses at position " + pos + ")"; 
							if (string.charAt(pos) == ')') parens--;
							if (string.charAt(pos) == ')' && parens == 0) { pos++; break; }

							pos++;
						}

						subsegments.push(xdi.parser.parseSubSegment(string.substring(start, pos)));

						start = pos;
					}
					
					return new Segment(subsegments);
				},

				parseSubSegment: function(string) {

					return string;
				},

				stripParens: function(string) {

					var pattern = /\([^()]*\)/;

					var temp = string;

					while (true) {

						var match = pattern.exec(temp);
						if (match === null) break;

						var newtemp = "";
						newtemp += temp.substr(0, match.index);
						for (var i=0; i<match[0].length; i++) newtemp += " ";
						newtemp += temp.substr(match.index + match[0].length);

						temp = newtemp;
					}

					return temp;
				},
				
				isGcs: function(char) {
					
					return char == '=' || char == '@' || char == '+' || char == '$';
				},
				
				isLcs: function(char) {
					
					return char == '*' || char == '!';
				}
			},

			graph: function() {

				return new Graph();
			}
	};

	return xdi;

}());
