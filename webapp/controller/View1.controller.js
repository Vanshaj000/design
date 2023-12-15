sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("project3.controller.View1", {
            onInit: function () {
              
            },
            onView1() {
                const oRouter = this.getOwnerComponent().getRouter();
                oRouter.navTo("RouteView2");
            },
            onView2() {
                const oRouter = this.getOwnerComponent().getRouter();
                oRouter.navTo("RouteView3");
            },
            // onContractTypeChange: function(oEvent) {
            //     var sSelectedContractType = oEvent.getParameter("selectedItem").getKey();
            //     var oDynamicContentBox = this.byId("dynamicContentBox");
          
            //     // Remove existing content
            //     oDynamicContentBox.destroyItems();
          
            //     // Load the corresponding view dynamically
            //     var sViewName = "project3.controller.View2" + sSelectedContractType + "View";
            //     XMLView.create({
            //       viewName: sViewName,
            //       controller: this
            //     }).then(function(oXMLView) {
            //       oDynamicContentBox.addItem(oXMLView);
            //     });
                
          
            //     // Show the right content
            //     this.byId("rightContent").setVisible(true);
            //   }
        });
    });
