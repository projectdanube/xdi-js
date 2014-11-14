<a href="http://projectdanube.org/" target="_blank"><img src="http://projectdanube.github.com/xdi-js/images/projectdanube_logo.png" align="right"></a>
<img src="http://projectdanube.github.com/xdi-js/images/logo64.png"><br>

[xdi.js](http://github.com/projectdanube/xdi-js) is an XDI client library for JavaScript, intended to be used by browser-based applications
to communicate with XDI servers.

xdi.js can be imported as a NodeJS module, AMD / RequireJS module, or included directly into a web page via &lt;script&gt; tag.

A sample deployment of xdi.js is available at http://xdi-js.projectdanube.org.

### Usage

#### Parser

```
var statement = xdi.parser.parseStatement('=markus<#email>&/&/"Markus"');
for (var i in statement.subject().subsegments()) alert(statement.subject().subsegments()[i]);
```

#### Graph

```
var graph = xdi.graph();
graph.root().context("=markus", true).context("<#email>", true).context("&", true).literal("markus.sabadello@gmail.com");
graph.root().context("=markus", true).relation("#friend", "=joe", true);
graph.root().context("=markus", true).relation("#friend", "=drummond", true);
graph.root().context("=markus", true).context("<#first>", true).context("<#name>", true).context("&", true).literal("Markus");
graph.statement("=markus<#last><#name>&/&/\"Sabadello\"");
graph.statement("=x/#y/(=a/#b/=c)");
```

#### Serialization and Deserialization

```
var graph = xdi.io.read(string);
alert(xdi.io.write(graph));
```

#### Client

```
var message = xdi.message("$anon");
message.toAddress("([+]!:uuid:8888)");
message.linkContract("$public$do");
message.operation("$get", "[+]!:uuid:8888<#name>");

message.send(
	"http://xdi.csp.org/myxdiendpoint",
	function(response) {
		alert(xdi.io.write(response));
	},
	function(errorText) {							// OPTIONAL
		alert(errorText);
	}
);
```

#### Discovery

```
xdi.discovery(
	"+acmebread",
	function(discovery) {
		alert(discovery.cloudNumber());
		alert(discovery.xdiEndpoint());
		alert(discovery.services());
	},
	function(errorText) {							// OPTIONAL
		alert(errorText);
	},
	['<$https><$connect><$xdi>'],					// OPTIONAL
	'https://xdidiscoveryserviceote.xdi.net/'		// OPTIONAL
);
```

### Community

Google Group: http://groups.google.com/group/xdi2

IRC: irc://irc.freenode.net:6667/xdi
