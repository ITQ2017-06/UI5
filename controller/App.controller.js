sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/m/MessageBox"
 ], function (Controller, MessageToast) {
    "use strict";
    return Controller.extend("hts.itq2017.walkthrough.controller.App", {
       onShowHello : function () {
          MessageToast.show("Hello World");
          MessageBox.show(
			"This message should appear in the message box.", {
				icon: MessageBox.Icon.INFORMATION,
				title: "My message box title",
				actions: [MessageBox.Action.YES, MessageBox.Action.NO],
				onClose: function(oAction) { / * do something * / }
			}
		);
       }
    });
 });