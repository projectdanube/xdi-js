window.xdi = (function () {

	/*
	 * Statement, Segment, Subsegment
	 */

	function Statement(subject, predicate, object) {

		this.subject = subject;
		this.predicate = predicate;
		this.object = object;
		
		this.string = this.subject + "/" + this.predicate + "/" + this.object;
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

	Graph.prototype.statement = function(statement) {

		var context = this._root.context(statement.subject);
		
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
		else this.statement = new Statement(this.parent.xri, "()", this.arc);
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
	
	Context.prototype.context = function(arc) {

		var context = this._contexts[arc];
		
		if (context === undefined) {
			
			context = new Context(this.graph, this, arc);
			this._contexts[arc] = context;
		}
		
		return context;
	};

	Context.prototype.relations = function() {
		
		return this._relations;
	};

	Context.prototype.relation = function(arc, target) {

		var relation = this._relations[arc] === undefined ? null : this._relations[arc][target];

		if (relation === null) {

			relation = new Relation(this.graph, this, arc, target);
			if (this._relations[arc] === undefined) this._relations[arc] = { };
			this._relations[arc][target] = relation;
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

		this.statement = new Statement(this.parent.xri, this.arc, this.target);
	}

	function Literal(graph, parent, data) {

		this.graph = graph;
		this.parent = parent;
		this.data = data;

		this.statement = new Statement(this.parent.xri, "!", xdi.util.toDataSegment(this.data));
	}

	/*
	 * Message class
	 */

	function Message() {

	}

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

				statement: function(string) {
				
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

					var parts = temp.split("/");
					if (parts.length != 3) return null;
					var split0 = parts[0].length;
					var split1 = parts[1].length;
					
					var subject = string.substr(0, split0);
					var predicate = string.substr(split0 + 1, split1);
					var object = string.substr(split0 + split1 + 2);
					
					return new Statement(subject, predicate, object);
				}
			},
			
			graph: function() {
			
				return new Graph();
			}
	};

	return xdi;
}());
