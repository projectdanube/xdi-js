(function (window) {

	'use strict';

	/*
	 * Statement, Segment, Subsegment, Xref classes
	 */

	function Statement(string, subject, predicate, object) {

		if (! (this instanceof Statement)) return new Statement(string, subject, predicate, object);

		this._string = string;
		this._subject = subject;
		this._predicate = predicate;
		this._object = object;

		if (this._string === null) {

			this._string = '';
			this._string += this._subject.string() + '/';
			this._string += this._predicate.string() + '/';
			this._string += (this._object instanceof Segment || this._object instanceof Subsegment ? this._object.string() : JSON.stringify(this._object));
		}
	}

	Statement.prototype.string = function() {

		return this._string;
	};

	Statement.prototype.subject = function() {

		return this._subject;
	};

	Statement.prototype.predicate = function() {

		return this._predicate;
	};

	Statement.prototype.object = function() {

		return this._object;
	};

	Statement.prototype.isContextNodeStatement = function() {

		return this.predicate().string() === xdi.constants.xri_context;
	};

	Statement.prototype.isRelationStatement = function() {

		return (! this.isContextNodeStatement()) && (! this.isLiteralStatement());
	};

	Statement.prototype.isLiteralStatement = function() {

		return this.predicate().string() === xdi.constants.xri_literal;
	};

	Statement.prototype.innerRootNotationStatement = function() {

		if (! this.isRelationStatement()) return null;

		var innerrootnotationxref = this.object().subsegments()[0].xref();
		if (innerrootnotationxref === null) return null;

		var innerrootnotationstatement = innerrootnotationxref.statement();
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

			throw 'Not implemented';
		} else {

			var innerrootsubsegment = new Subsegment(null, null, false, false, null, new Xref(null, xdi.constants.xs_root, null, null, this.subject(), this.predicate(), null, null));
			var innerrootsegment = new Segment(null, [ innerrootsubsegment ]);

			var statement = xdi.util.concatStatement(innerrootsegment, innerrootnotationstatement, true);

			return statement;
		}
	};

	Statement.prototype.toInnerRootNotation = function() {

		throw 'Not implemented';
	};

	function Segment(string, subsegments) {

		if (! (this instanceof Segment)) return new Segment(string, subsegments);

		this._string = string;
		this._subsegments = subsegments;

		if (this._string === null) {

			this._string = '';
			for (var i in this._subsegments) this._string += this._subsegments[i].string();
		}
	}

	Segment.prototype.string = function() {

		return this._string;
	};

	Segment.prototype.subsegments = function() {

		return this._subsegments;
	};

	function Subsegment(string, cs, classxs, attributexs, literal, xref) {

		if (! (this instanceof Subsegment)) return new Subsegment(string, cs, classxs, attributexs, literal, xref);

		this._string = string;
		this._cs = cs;
		this._classxs = classxs;
		this._attributexs = attributexs;
		this._literal = literal;
		this._xref = xref;

		if (this._string === null) {

			this._string = '';
			if (this._cs !== null) this._string += this._cs;
			if (this._classxs) this._string += xdi.constants.xs_class.charAt(0);
			if (this._attributexs) this._string += xdi.constants.xs_attribute.charAt(0);
			if (this._literal !== null) this._string += this._literal;
			if (this._xref !== null) this._string += this._xref._string;
			if (this._attributexs) this._string += xdi.constants.xs_attribute.charAt(1);
			if (this._classxs) this._string += xdi.constants.xs_class.charAt(1);
		}
	}

	Subsegment.prototype.string = function() {

		return this._string;
	};

	Subsegment.prototype.cs = function() {

		return this._cs;
	};

	Subsegment.prototype.classxs = function() {

		return this._classxs;
	};

	Subsegment.prototype.attributexs = function() {

		return this._attributexs;
	};

	Subsegment.prototype.literal = function() {

		return this._literal;
	};

	Subsegment.prototype.xref = function() {

		return this._xref;
	};

	function Xref(string, xs, segment, statement, partialsubject, partialpredicate, iri, literal) {

		if (! (this instanceof Xref)) return new Xref(string, xs, segment, statement, partialsubject, partialpredicate, iri, literal);

		this._string = string;
		this._xs = xs;
		this._segment = segment;
		this._statement = statement;
		this._partialsubject = partialsubject;
		this._partialpredicate = partialpredicate;
		this._iri = iri;
		this._literal = literal;

		if (this._string === null) {

			this._string = '';
			if (this._xs !== null) this._string += this._xs.charAt(0);
			if (this._segment) this._string += this._segment.string();
			if (this._statement) this._string += this._statement.string();
			if (this._partialsubject !== null && this._partialpredicate !== null) this._string += this._partialsubject.string() + '/' + this._partialpredicate.string();
			if (this._iri) this._string += this._iri;
			if (this._literal) this._string += this._literal;
			if (this._xs !== null) this._string += this._xs.charAt(1);
		}
	}

	Xref.prototype.string = function() {

		return this._string;
	};

	Xref.prototype.xs = function() {

		return this._xs;
	};

	Xref.prototype.segment = function() {

		return this._segment;
	};

	Xref.prototype.statement = function() {

		return this._statement;
	};

	Xref.prototype.partialsubject = function() {

		return this._partialsubject;
	};

	Xref.prototype.partialpredicate = function() {

		return this._partialpredicate;
	};

	Xref.prototype.iri = function() {

		return this._iri;
	};

	Xref.prototype.literal = function() {

		return this._literal;
	};

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

	Graph.prototype.statement = function(statement) {

		statement = statement instanceof Statement ? statement : xdi.parser.parseStatement(statement);

		statement = statement.fromInnerRootNotation(statement);

		var context = (statement.subject().string() === xdi.constants.xri_root) ? this._root : this._root.context(statement.subject().string(), true);

		if (statement.isContextNodeStatement()) context.context(statement.object().string(), true);
		else if (statement.isLiteralStatement()) context.literal(statement.object());
		else context.relation(statement.predicate().string(), statement.object().string(), true);
	};

	Graph.prototype.serializeXDIDISPLAY = function() {

		var statements = this.statements();
		var buffer = '';

		for (var i in statements) buffer += statements[i].string() + '\n';

		return buffer;
	};

	Graph.prototype.deserializeXDIDISPLAY = function(string) {

		var statements = string.split('\n');

		for (var i in statements) {

			if (statements[i].replace(/\s/g, '') === '') continue;
			this.statement(statements[i]);
		}
	};

	Graph.prototype.serializeXDIJSON = function(pretty) {

		var process = function(context, object) {

			var contexts = context.contexts();
			var relations = context.relations();
			var literal = context.literal();
	
			for (var i in contexts) {

				var index = context.xri().string() + '/';
	
				if (typeof object[index] === 'undefined') object[index] = new Array();
				object[index].push(contexts[i].arc().string());

				process(contexts[i], object);
			}
	
			for (var i in relations) {
	
				var index = context.xri().string() + '/' + relations[i].arc().string();
	
				if (typeof object[index] === 'undefined') object[index] = new Array();
				object[index].push(relations[i].target().string());
			}
	
			if (literal !== null) {
	
				var index = context.xri().string() + '/' + '&';
	
				if (typeof literal.data() !== 'undefined') object[index] = literal.data();
			}
		};

		var object = new Object();

		process(this._root, object);
		
		return JSON.stringify(object, null, pretty === true ? '\t' : null);
	};

	Graph.prototype.deserializeXDIJSON = function(string) {
		
		var object = JSON.parse(string);
		
		for (var i in object) {

			var value = object[i];
			
			if (Object.prototype.toString.call(value) === '[object Array]') {
				
				for (var ii in value) {
				
					if (typeof value[ii] !== 'string') throw 'Invalid value under ' + i;
					
					this.statement(i + '/' + value[ii]);
				}
			} else if (Object.prototype.toString.call(value) === '[object Object]') {
					
				throw "Inner Root not implemented";
			} else {
				
				if (i.slice(-1) !== '&') throw 'Invalid key ' + i;

				this.statement(i + '/' + JSON.stringify(value));
			}
		}
	};

	function Context(graph, parent, arc) {

		if (! (this instanceof Context)) return new Context(graph, parent, arc);

		this._graph = graph;
		this._parent = parent;
		this._arc = arc;

		this._contexts = { };
		this._relations = { };
		this._literal = null;

		if (this._parent === null) {

			this._xri = xdi.parser.parseSegment(xdi.constants.xri_root);
			this._statement = null;
		} else {

			var xristring = this._arc.string();
			while (parent !== null && parent.arc() !== null) { xristring = parent.arc().string() + xristring; parent = parent.parent(); }

			this._xri = xdi.parser.parseSegment(xristring);
			this._statement = new Statement(null, this._parent.xri(), xdi.parser.parseSegment(xdi.constants.xri_root), this._arc);
		}
	}

	Context.prototype.graph = function() {

		return this._graph;
	};

	Context.prototype.parent = function() {

		return this._parent;
	};

	Context.prototype.arc = function() {

		return this._arc;
	};

	Context.prototype.xri = function() {

		return this._xri;
	};

	Context.prototype.dereference = function() {

		var context = this;

		while (true) {

			var relation;

			relation = context.relation(xdi.constants.xri_ref);
			if (relation !== null) { context = relation.follow(); continue; }

			relation = context.relation(xdi.constants.xri_rep);
			if (relation !== null) { context = relation.follow(); continue; }
			break;
		}

		return context;
	};

	Context.prototype.statements = function() {

		var statements = [];

		if (this._statement !== null) statements.push(this._statement);

		for (var c in this._contexts) statements = statements.concat(this._contexts[c].statements());
		for (var r in this._relations) for (var rr in this._relations[r]) statements.push(this._relations[r][rr].statement());
		if (this._literal !== null) statements.push(this._literal.statement());

		return statements;
	};

	Context.prototype.contexts = function() {

		return this._contexts;
	};

	Context.prototype.context = function(arcs, create) {

		arcs = typeof arcs === 'undefined' ? arcs : ( arcs instanceof Segment ? arcs : xdi.parser.parseSegment(arcs) );
		create = typeof create === 'undefined' ? false : create;

		var context = this;

		for (var i=0; i<arcs.subsegments().length; i++) {

			var arc = arcs.subsegments()[i];
			var arcString = arc.string();

			var newcontext = context._contexts[arcString];

			if (typeof newcontext === 'undefined') {

				if (! create) return null;

				newcontext = new Context(this._graph, context, arc);
				context._contexts[arcString] = newcontext;

				if (arc.xref() !== null && arc.xref().partialsubject() !== null && arc.xref().partialpredicate() !== null) {

					this.context(arc.xref().partialsubject().string(), true).relation(arc.xref().partialpredicate().string(), newcontext.xri().string(), true);
				}
			}

			context = newcontext;
		}

		return context;
	};

	Context.prototype.relations = function(arc, target) {

		arc = typeof arc === 'undefined' ? arc : ( arc instanceof Segment ? arc : xdi.parser.parseSegment(arc) );
		target = typeof target === 'undefined' ? target : ( target instanceof Segment ? target : xdi.parser.parseSegment(target) );

		var arcString = typeof arc === 'undefined' ? arc : ( arc.string() );
		var targetString = typeof target === 'undefined' ? target : ( target.string() );

		var relations = [];

		if (typeof arcString === 'undefined') {

			for (var i in this._relations) {

				for (var ii in this._relations[i]) {

					relations.push(this._relations[i][ii]);
				}
			}
		} else {

			if (typeof targetString === 'undefined') {

				if (typeof this._relations[arcString] !== 'undefined') {

					for (var ii in this._relations[arcString]) {

						relations.push(this._relations[arcString][ii]);
					}
				}
			} else {

				if (typeof this._relations[arcString] !== 'undefined' && typeof this._relations[arcString][targetString] !== 'undefined') {

					relations.push(this._relations[arcString][targetString]);
				}
			}
		}

		return relations;
	};

	Context.prototype.relation = function(arc, target, create) {

		arc = typeof arc === 'undefined' ? arc : ( arc instanceof Segment ? arc : xdi.parser.parseSegment(arc) );
		target = typeof target === 'undefined' ? target : ( target instanceof Segment ? target : xdi.parser.parseSegment(target) );
		create = typeof create === 'undefined' ? false : create;

		var arcString = typeof arc === 'undefined' ? arc : arc.string();
		var targetString = typeof target === 'undefined' ? target : target.string();

		if (! create) {

			var relations = this.relations(arc, target);
			if (typeof relations[0] === 'undefined') return null;

			return relations[0];
		}

		var relation = typeof this._relations[arcString] === 'undefined' ? this._relations[arcString] : this._relations[arcString][targetString];

		if (typeof relation === 'undefined') {

			if (! create) return null;

			this._graph.root().context(targetString, true);

			relation = new Relation(this._graph, this, arc, target);
			if (typeof this._relations[arcString] === 'undefined') this._relations[arcString] = { };
			this._relations[arcString][targetString] = relation;
		}

		return relation;
	};

	Context.prototype.literal = function(data) {

		if (typeof data !== 'undefined') this._literal = new Literal(this._graph, this, data);

		return this._literal;
	};

	function Relation(graph, parent, arc, target) {

		if (! (this instanceof Relation)) return new Relation(graph, parent, arc, target);

		this._graph = graph;
		this._parent = parent;
		this._arc = arc;
		this._target = target;

		this._statement = new Statement(null, this._parent.xri(), this._arc, this._target);
	}

	Relation.prototype.graph = function() {

		return this._graph;
	};

	Relation.prototype.parent = function() {

		return this._parent;
	};

	Relation.prototype.arc = function() {

		return this._arc;
	};

	Relation.prototype.target = function() {

		return this._target;
	};

	Relation.prototype.statement = function() {

		return this._statement;
	};

	Relation.prototype.follow = function() {

		return this._graph.root().context(this._target.string());
	};

	function Literal(graph, parent, data) {

		if (! (this instanceof Literal)) return new Literal(graph, parent, data);

		this._graph = graph;
		this._parent = parent;
		this._data = data;

		this._statement = new Statement(null, this._parent.xri(), xdi.parser.parseSegment(xdi.constants.xri_literal), this._data);
	}

	Literal.prototype.graph = function() {

		return this._graph;
	};

	Literal.prototype.parent = function() {

		return this._parent;
	};

	Literal.prototype.data = function(data) {

		if (typeof data !== 'undefined') this._data = data;

		return this._data;
	};

	Literal.prototype.statement = function() {

		return this._statement;
	};

	/*
	 * MessageEnvelope and Message classes
	 */

	function MessageEnvelope() {

		if (! (this instanceof MessageEnvelope)) return new MessageEnvelope(sender);

		this._graph = new Graph();
		this._messages = [];
	}

	MessageEnvelope.prototype.graph = function() {

		return this._graph;
	};

	MessageEnvelope.prototype.message = function(sender) {

		if (typeof sender === 'undefined') sender = xdi.constants.xri_anon;

		var context = this._graph.root().context(sender, true).context('[' + xdi.constants.xri_msg + ']', true).context('!:uuid:' + xdi.util.guid(), true);
		var message = new Message(context, this);

		this._messages.push(message);

		return message;
	};

	MessageEnvelope.prototype.messages = function() {

		return this._messages;
	};

	function Message(context, messageEnvelope) {

		if (! (this instanceof Message)) return new Message(sender);

		this._context = context;
		this._messageEnvelope = messageEnvelope;

		this._operationsContext = context.context(xdi.constants.xri_do, true);
	}

	Message.prototype.context = function() {

		return this._context;
	};

	Message.prototype.messageEnvelope = function() {

		return this._messageEnvelope;
	};

	Message.prototype.toAddress = function(toAddress) {

		if (typeof toAddress === 'undefined') {

			var relation = this._context.relation(xdi.constants_xri_is_context);

			return relation === null ? null : relation.target;
		}

		this._context.relation(xdi.constants.xri_is_context, toAddress, true);

		return this;
	};

	Message.prototype.linkContract = function(linkContract) {

		if (typeof linkContract === 'undefined') {

			var relation = this._context.relation(xdi.constants_xri_do);

			return relation === null ? null : relation.target;
		}

		this._context.relation(xdi.constants.xri_do, linkContract, true);

		return this;
	};

	Message.prototype.secretToken = function(secretToken) {

		if (typeof secretToken === 'undefined') {

			var context = this._context.context(xdi.constants.xri_secret_token);
			var literal = context === null ? null : context.literal();

			return literal === null ? null : literal.data();
		}

		this._context.context(xdi.constants.xri_secret_token, true).literal(secretToken);

		return this;
	};

	Message.prototype.operation = function(operation, target) {

		operation = typeof operation === 'undefined' ? operation : ( operation instanceof Segment ? operation : xdi.parser.parseSegment(operation) );

		if (typeof target === 'string') {

			try {

				target = xdi.parser.parseStatement(target);
			} catch (ex) {
				
				target = xdi.parser.parseSegment(target);
			}
		}
		
		if (target instanceof Statement) {
			
			var innerRoot = xdi.parser.parseSegment("(" + this._operationsContext.xri().string() + "/" + operation.string() + ")");
			
			target = target.fromInnerRootNotation();
			target = xdi.util.concatStatement(innerRoot, target, true);

			this._operationsContext.graph().statement(target);
		} else if (target instanceof Segment) {

			this._operationsContext.relation(operation, target, true);
		} else {
			
			throw "Invalid target: " + target;
		}

		return this;
	};

	Message.prototype.send = function(endpoint, success, error) {

		if (typeof endpoint === 'undefined') throw 'No endpoint given.';

		var request = new XMLHttpRequest();
		request.open('POST', endpoint, true);
		request.setRequestHeader('Content-Type', 'text/xdi');
		request.setRequestHeader('Accept', 'text/xdi');

		request.onreadystatechange = function() {

			if (request.readyState === 4) {

				if (request.status === 200) {

					var response;

					try {

						response = xdi.io.read(request.responseText);
					} catch (ex) {

						var errorText = 'Received invalid response from server: ' + ex;

						if (typeof error === 'function') error(errorText);
						return;
					}

					if (response.root().context(xdi.constants.xri_error) !== null) {

						var errorText = 'Received error from server: ' + response.root().context(xdi.constants.xri_error).context(xdi.constants.xri_value).literal().data();

						if (typeof error === 'function') error(errorText);
						return;
					} else {

						if (typeof success === 'function') success(response);
						return;
					}
				} else {

					var errorText = 'Received error while sending: ' + request.statusText;

					if (typeof error === 'function') error(errorText);
					return;
				}
			}
		};

		request.send(xdi.io.write(this.messageEnvelope().graph()));
	};

	/*
	 * Discovery class
	 */

	function Discovery(cloudNumber, xdiEndpoint, response) {

		if (! (this instanceof Discovery)) return new Discovery();

		this._cloudNumber = cloudNumber;
		this._xdiEndpoint = xdiEndpoint;
		this._response = response;
	}

	Discovery.prototype.cloudNumber = function() {

		return this._cloudNumber;
	};

	Discovery.prototype.xdiEndpoint = function() {

		return this._xdiEndpoint;
	};

	Discovery.prototype.response = function() {

		return this._response;
	};

	/*
	 * Library object
	 */

	var xdi = {};

	xdi = {

			constants: {

				cs_equals: '=',
				cs_at: '@',
				cs_plus: '+',
				cs_dollar: '$',
				cs_star: '*',
				cs_bang: '!',
				cs_order: '#',
				cs_value: '&',
				cs_array: [ '=', '@', '+', '$', '*', '!', '#', '&' ],
				xs_root: '()',
				xs_variable: '{}',
				xs_class: '[]',
				xs_attribute: '<>',
				xri_root: '',
				xri_context: '',
				xri_value: '&',
				xri_literal: '&',
				xri_variable: '{}',
				xri_anon: '$anon',
				xri_msg: '$msg',
				xri_is_context: '$is()',
				xri_ref: '$ref',
				xri_rep: '$rep',
				xri_secret_token: '<$secret><$token>&',
				xri_do: '$do',
				xri_public_do: '$public$do',
				xri_xdi_uri: '<$xdi><$uri>',
				xri_error: '<$false>',
				uri_default_discovery_endpoint: 'http://mycloud.neustar.biz:12220/'
			},

			graph: function() {

				return new Graph();
			},

			messageEnvelope: function() {

				return new MessageEnvelope();
			},

			message: function(sender) {

				return xdi.messageEnvelope().message(sender);
			},

			discovery: function(target, success, error, endpoint) {

				endpoint = endpoint || xdi.constants.uri_default_discovery_endpoint;

				var message = xdi.message();
				message.operation('$get', '(' + target + ')');
				message.linkContract(xdi.constants.xri_public_do);

				message.send(

						endpoint, 
						function(response) {

							var cloudNameContext = response.root().context('(' + target + ')');

							if (cloudNameContext === null) {

								var errorText = 'Could not find cloud name in discovery result.';

								if (typeof error === 'function') error(errorText);
								return;
							}

							var cloudNumberRelation = cloudNameContext.relation(xdi.constants.xri_ref);

							var cloudNumber;

							if (cloudNumberRelation !== null) {

								cloudNumber = cloudNumberRelation.target().string().substring(1, cloudNumberRelation.target().string().length - 1);
							} else {

								cloudNumber = target;
							}

							var xdiEndpointContext = response.root().context('(' + cloudNumber + ')' + xdi.constants.xri_xdi_uri);

							if (xdiEndpointContext === null) {

								var errorText = 'Could not find XDI endpoint in discovery result.';

								if (typeof error === 'function') error(errorText);
								return;
							}

							xdiEndpointContext = xdiEndpointContext.dereference();

							var xdiEndpoint = xdiEndpointContext.context(xdi.constants.xri_value).literal().data();

							success(new Discovery(cloudNumber, xdiEndpoint, response));
						}, 
						error);
			},

			util: {

				concatSegments: function(segment1, segment2) {

					var buffer = '';
					if (segment1 !== null && segment1.string() !== xdi.constants.xri_root) buffer += segment1.string();
					if (segment2 !== null && segment2.string() !== xdi.constants.xri_root) buffer += segment2.string();

					if (buffer === '') buffer = xdi.constants.xri_root;

					return xdi.parser.parseSegment(buffer);
				},

				concatStatement: function(segment, statement, concatTargetContextNodeXri) {

					if (statement.isInnerRootNotation()) throw 'Cannot concat statement in inner root notation.';

					var subject = xdi.util.concatSegments(segment, statement.subject());
					var predicate = statement.predicate();

					var object;

					if (statement.isRelationStatement() && concatTargetContextNodeXri) {

						object = xdi.util.concatSegments(segment, statement.object());
					} else {

						object = statement.object();
					}

					return new Statement(null, subject, predicate, object);
				},

				guid: function() {

					var s4 = function() { return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1); };

					return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
				}
			},

			io: {

				read: function(string) {

					var graph = xdi.graph();
					var lines = string.split('\n');

					for (var i in lines) {

						if (lines[i].trim() === '') continue;

						graph.statement(lines[i]);
					}

					return graph;
				},

				write: function(graph) {

					var statements = graph.statements();
					var buffer = '';

					for (var i in statements) buffer += statements[i].string() + '\n';

					return buffer;
				}
			},

			parser: {

				parseStatement: function(string) {

					var temp = xdi.parser.stripXs(string);

					var parts = temp.split('/', -1);
					if (parts.length !== 3) throw 'Invalid statement: ' + string + ' (wrong number of segments: ' + parts.length + ')';
					var split0 = parts[0].length;
					var split1 = parts[1].length;

					var subject = xdi.parser.parseSegment(string.substring(0, split0));
					var predicate = xdi.parser.parseSegment(string.substring(split0 + 1, split0 + split1 + 1));

					if (xdi.constants.cs_value === predicate.string()) {

						var object = JSON.parse(string.substring(split0 + split1 + 2));

						return new Statement(string, subject, predicate, object);
					} else if (xdi.constants.xs_context === predicate.string()) {

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
					var pairs = new Array();
					var subsegments = new Array();

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

						if (pairs.length > 0) throw 'Missing closing character "' + pairs[pairs.length - 1].charAt(1) + '" at position ' + pos + '.';

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

						if (string.charAt(len - 1) !== cla.charAt(1)) throw 'Invalid subsegment: ' + string + ' (invalid closing "' + cla.charAt(1) + '" character for class at position ' + pos + ')';

						pos++; len--;
					}

					// extract attribute pair

					if (pos < len && (att = xdi.parser.att(string.charAt(pos))) !== null) {

						if (string.charAt(len - 1) !== att.charAt(1)) throw 'Invalid subsegment: ' + string + ' (invalid closing "' + att.charAt(1) + '" character for attribute at position ' + pos + ')';

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

							if (pos === 0) throw 'Invalid subsegment: ' + string + ' (no context symbol or cross reference)';
							literal = xdi.parser.parseLiteral(string.substring(pos, len));
						}
					}

					// done

					return new Subsegment(string, cs, cla !== null, att !== null, literal, xref);
				},

				parseXref: function(string) {

					var xs = xdi.parser.xs(string.charAt(0));
					if (xs === null) throw 'Invalid cross reference: ' + string + ' (no opening delimiter)';
					if (string.charAt(string.length - 1) !== xs.charAt(1)) throw 'Invalid cross reference: ' + string + ' (invalid closing "' + xs.charAt(1) + '" delimiter)';
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

						var segments = temp.split('/').length;

						if (segments === 3) {

							statement = xdi.parser.parseStatement(value);
						} else if (segments === 2) {

							var parts = temp.split('/');
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

				stripXs: function(string) {

					string = xdi.parser.stripPattern(string, /\([^\(\)]*\)/);
					string = xdi.parser.stripPattern(string, /\{[^\{\}]*\}/);
					string = xdi.parser.stripPattern(string, /\"[^\"]*\"/);

					return string;
				},

				stripPattern: function(string, pattern) {

					var temp = string;

					while (true) {

						var match = pattern.exec(temp);
						if (match === null) break;

						var newtemp = '';
						newtemp += temp.substring(0, match.index);
						for (var i=0; i<match[0].length; i++) newtemp += ' ';
						newtemp += temp.substring(match.index + match[0].length);

						temp = newtemp;
					}

					return temp;
				},

				isIri: function(string) {

					var indexColon = string.indexOf(':');
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
						if (c === '-'.charCodeAt(0)) continue;
						if (c === '.'.charCodeAt(0)) continue;
						if (c === ':'.charCodeAt(0)) continue;
						if (c === '_'.charCodeAt(0)) continue;
						if (c === '~'.charCodeAt(0)) continue;
						if (c >= 0xA0 && c <= 0xD7FF) continue;
						if (c >= 0xF900 && c <= 0xFDCF) continue;
						if (c >= 0xFDF0 && c <= 0xFFEF) continue;

						throw 'Invalid character "' + c + '" at position ' + pos + ' of literal ' + string;
					}

					return string;
				}
			}
	};

	/*
	 * Assign classes
	 */

	xdi.Statement = Statement;
	xdi.Segment = Segment;
	xdi.Subsegment = Subsegment;
	xdi.Xref = Xref;
	xdi.Graph = Graph;
	xdi.Context = Context;
	xdi.Relation = Relation;
	xdi.Literal = Literal;
	xdi.MessageEnvelope = MessageEnvelope;
	xdi.Message = Message;
	xdi.Discovery = Discovery;

	/*
	 * Assign global 'xdi' object
	 */

	window.xdi = xdi;

})(window || this);
