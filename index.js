sap.ui.define([
    "sap/m/Text",
    "sap/m/Link"

], function (Text) {
	"use strict";

	new Text({
		text: "Hello World"
	}).placeAt("content");

},
function (Link){
	"use strict";

	var test = new Link({
        sId: "testlink"
    });
    test.href="www.google.com"
    test.placeAt("content");

});