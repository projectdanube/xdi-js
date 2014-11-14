require(["../xdi"], function(xdi) {

  var xri = '=pascalo';
  var serviceTypes = '<$https><$connect><$xdi>';

  xdi.discovery(

    xri,
    function(discovery) {

      $("#discoveryresult").html("");
      $("#discoveryresult").append("<p class='segment'>CLOUD NUMBER: " + discovery.cloudNumber() + "</p>");
      $("#discoveryresult").append("<p class='segment'>XDI ENDPOINT: " + discovery.xdiEndpoint() + "</p>");
      for (var i in discovery.services()) {
        $("#discoveryresult").append("<p class='segment'>SERVICE: " + i + " --> " + discovery.services()[i] + "</p>");
      }
    },
    function(errorText) {
      console.log(errorText);
    },
    serviceTypes ? serviceTypes.split(" ") : [],
    "https://xdidiscoveryservice.xdi.net/"
  );

});