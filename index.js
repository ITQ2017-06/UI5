sap.ui.define([
    "sap/m/Text",
    "sap/m/Link",
    "sap/ui/core/mvc/XMLView"
], 
function (Text, Link, XMLView){
    "use strict";
    
    new Text({
		text: "Hello World"
	}).placeAt("content");
	new Link({
        text: "Testlink",
        href: "https://google.com/"
    }).placeAt("content");
    XMLView.create({
		viewName: "sap.ui.demo.walkthrough.view.App"
	}).then(function (oView) {
		oView.placeAt("content");
	});

});