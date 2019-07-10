sap.ui.define([
    "sap/m/Text",
    "sap/m/Link"

], 
function (Text,Link){
    "use strict";
    
    new Text({
		text: "Hello World"
	}).placeAt("content_1");
	new Link({
        text: "Testlink",
        href: "www.google.com"
    }).placeAt("content_2");

});