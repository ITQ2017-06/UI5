sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel"
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
            // set i18n model on view
            var i18nModel = new ResourceModel({
                bundleName: "sap.ui.demo.walkthrough.i18n.i18n"
            });
             this.getView().setModel(i18nModel, "i18n");
         },
       onShowHello : function () {
        // read msg from i18n model
         var oBundle = this.getView().getModel("i18n").getResourceBundle();
         var sRecipient = this.getView().getModel().getProperty("/recipient/name");
         var sMsg = oBundle.getText("helloMsg", [sRecipient]);
         // show message
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