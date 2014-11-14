var xdi = require('../xdi');

var xri = '=pascalo';
var serviceTypes = '<$https><$connect><$xdi>';

xdi.discovery(

  xri,
  function(discovery) {
    console.log(discovery);
  },
  function(errorText) {
    console.log(errorText);
  },
  serviceTypes ? serviceTypes.split(" ") : [],
  "https://xdidiscoveryservice.xdi.net/"
);