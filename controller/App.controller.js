sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox",
    "sap/ui/model/json/JSONModel"
 ], function (Controller, MessageBox, JSONModel) {
    "use strict";
    return Controller.extend("hts.itq2017.walkthrough.controller.App", {
        onInit : function () {
            // set data model on view
            var oData = {
               recipient : {
                  name : "World"
               }
            };
            var oModel = new JSONModel(oData);
            this.getView().setModel(oModel);
         },
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