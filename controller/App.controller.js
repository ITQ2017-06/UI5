sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox"
 ], function (Controller, MessageBox) {
    "use strict";
    return Controller.extend("hts.itq2017.walkthrough.controller.App", {
       onShowHello : function () {
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