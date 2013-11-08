<a href="http://projectdanube.org/" target="_blank"><img src="http://projectdanube.github.com/xdi-js/images/projectdanube_logo.png" align="right"></a>
<img src="http://projectdanube.github.com/xdi-js/images/logo64.png"><br>

[XDI-js](http://github.com/projectdanube/xdi-js) is an XDI client library for JavaScript, intended to be used by browser-based applications
to communicate with XDI servers.

A sample deployment of XDI-js is available at http://xdi-js.projectdanube.org.

### Usage

#### Parser

```
var statement = xdi.parser.parseStatement('=markus<+email>&/&/"Markus"');
for (var i in statement.subject.subsegments) alert(statement.subject.subsegments[i]);
```

#### Graph

```
var graph = xdi.graph();
graph.root().context("=markus", true).context("<+email>", true).context("&", true).literal("markus.sabadello@gmail.com");
graph.root().context("=markus", true).relation("+friend", "=joe", true);
graph.root().context("=markus", true).relation("+friend", "=drummond", true);
graph.root().context("=markus", true).context("+first", true).context("<+name>", true).context("&", true).literal("Markus");
graph.statement("=markus+last<+name>&/&/\"Sabadello\"");
graph.statement("=x/+y/(=a/+b/=c)");
```

#### Serialization and Deserialization

```
var graph = xdi.io.read(string);
alert(xdi.io.write(graph));
```

#### Client

```
var message = xdi.message(sender);
message.toAddress(toAddress);
message.linkContract(linkContract);
message.operation(operation, target);
message.send(endpoint);
```

#### Discovery

```
TODO
```

### Community

Google Group: http://groups.google.com/group/xdi2
