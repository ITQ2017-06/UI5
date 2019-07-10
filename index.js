sap.ui.define([
    "sap/m/Text",
    "sap/m/Link"

], 
function (Text,Link){
    "use strict";
    
    new Text({
		text: "Hello World"
	}).placeAt("content");
	new Link({
        text: "Testlink",
        href: "https://www.google.com/"
    }).placeAt("content");

});