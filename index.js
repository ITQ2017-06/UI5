sap.ui.define([
    "sap/m/Text",
    "sap/m/Link"

], function (Text) {
	"use strict";

	new Text({
		text: "Hello World"
	}).placeAt("content");

},
function (Link) {
	"use strict";

	new Link({
        sId: "www.google.com"
	}).placeAt("content");

});