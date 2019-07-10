sap.ui.define([
    "sap/m/Text",
    "sap/m/Link"

], function (Text) {
	"use strict";

	new Text({
		text: "Hello World"
	}).placeAt("content_1");

},
function (Link){
	"use strict";

	new Link({
        text: "Testlink",
        href: "www.google.com"
    }).placeAt("content_2");

});