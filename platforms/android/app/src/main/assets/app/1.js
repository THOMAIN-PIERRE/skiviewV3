(global["webpackJsonp"] = global["webpackJsonp"] || []).push([[1],{

/***/ "./app/confirmation/confirmation-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmationRoutingModule", function() { return ConfirmationRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("nativescript-angular/router");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _confirmation_confirmation_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/confirmation/confirmation/confirmation.component.ts");



var routes = [
    { path: "", component: _confirmation_confirmation_component__WEBPACK_IMPORTED_MODULE_2__["ConfirmationComponent"] }
];
var ConfirmationRoutingModule = /** @class */ (function () {
    function ConfirmationRoutingModule() {
    }
    ConfirmationRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"].forChild(routes)],
            exports: [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"]]
        })
    ], ConfirmationRoutingModule);
    return ConfirmationRoutingModule;
}());



/***/ }),

/***/ "./app/confirmation/confirmation.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmationModule", function() { return ConfirmationModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _confirmation_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./app/confirmation/confirmation-routing.module.ts");
/* harmony import */ var nativescript_angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("nativescript-angular/common");
/* harmony import */ var nativescript_angular_common__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_common__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _confirmation_confirmation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/confirmation/confirmation/confirmation.component.ts");




var ConfirmationModule = /** @class */ (function () {
    function ConfirmationModule() {
    }
    ConfirmationModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_confirmation_confirmation_component__WEBPACK_IMPORTED_MODULE_3__["ConfirmationComponent"]],
            imports: [
                _confirmation_routing_module__WEBPACK_IMPORTED_MODULE_1__["ConfirmationRoutingModule"],
                nativescript_angular_common__WEBPACK_IMPORTED_MODULE_2__["NativeScriptCommonModule"]
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NO_ERRORS_SCHEMA"]]
        })
    ], ConfirmationModule);
    return ConfirmationModule;
}());



/***/ }),

/***/ "./app/confirmation/confirmation/confirmation.component.css":
/***/ (function(module, exports) {

module.exports = "/* Add mobile styles for the component here.  */\n"

/***/ }),

/***/ "./app/confirmation/confirmation/confirmation.component.html":
/***/ (function(module, exports) {

module.exports = "<ActionBar>\n    <Label class=\"blackPage\" text=\"SIGNALEMENT ENVOYE !\"></Label>\n</ActionBar>\n<GridLayout rows=\"260, 360\">\n\n    <ContentView row=\"0\" class=\"danger_button\" text=\"\" width=\"600px\" height=\"600px\" backgroundColor=\"#FF7F00\"></ContentView> \n\n    <Label row=\"1\" text=\"MERCI pour votre contribution active au programme de signalement partricipatif mis en place par la station. \n\nVous pouvez suivre l’évolution de votre signalement dans la rubrique “Mes signalements”\" textWrap=\"true\" class=\"message_confirmation\"></Label>\n    \n</GridLayout>\n\n<StackLayout>\n    <BottomNavigation height=\"100%\">\n        <TabStrip>\n            <TabStripItem>\n                <Label col=\"0\" text=\"&#xf015;\" class=\"nt-icon fas\"></Label>\n            </TabStripItem>\n            <!-- <TabStripItem>\n                <Label col=\"0\" text=\"Accueil\" class=\"nt-icon fas\"></Label>\n            </TabStripItem> -->\n            <TabStripItem>\n                <Label col=\"2\" text=\"&#xf573;\" class=\"nt-icon fas\"></Label>\n            </TabStripItem>\n            <!-- <TabStripItem>\n                <Label col=\"0\" text=\"Mes signalements\" class=\"nt-icon fas\"></Label>\n            </TabStripItem> -->\n        </TabStrip>\n    </BottomNavigation>\n</StackLayout>"

/***/ }),

/***/ "./app/confirmation/confirmation/confirmation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmationComponent", function() { return ConfirmationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);

var ConfirmationComponent = /** @class */ (function () {
    function ConfirmationComponent() {
    }
    ConfirmationComponent.prototype.ngOnInit = function () {
    };
    ConfirmationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ns-confirmation',
            template: __webpack_require__("./app/confirmation/confirmation/confirmation.component.html"),
            styles: [__webpack_require__("./app/confirmation/confirmation/confirmation.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ConfirmationComponent);
    return ConfirmationComponent;
}());



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvY29uZmlybWF0aW9uL2NvbmZpcm1hdGlvbi1yb3V0aW5nLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9hcHAvY29uZmlybWF0aW9uL2NvbmZpcm1hdGlvbi5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbmZpcm1hdGlvbi9jb25maXJtYXRpb24vY29uZmlybWF0aW9uLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbmZpcm1hdGlvbi9jb25maXJtYXRpb24vY29uZmlybWF0aW9uLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC9jb25maXJtYXRpb24vY29uZmlybWF0aW9uL2NvbmZpcm1hdGlvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBeUM7QUFFOEI7QUFDTztBQUc5RSxJQUFNLE1BQU0sR0FBVztJQUNyQixFQUFDLElBQUksRUFBQyxFQUFFLEVBQUUsU0FBUyxFQUFDLDBGQUFxQixFQUFDO0NBQzNDLENBQUM7QUFNRjtJQUFBO0lBQXlDLENBQUM7SUFBN0IseUJBQXlCO1FBSnJDLDhEQUFRLENBQUM7WUFDUixPQUFPLEVBQUUsQ0FBQyxvRkFBd0IsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDcEQsT0FBTyxFQUFFLENBQUMsb0ZBQXdCLENBQUM7U0FDcEMsQ0FBQztPQUNXLHlCQUF5QixDQUFJO0lBQUQsZ0NBQUM7Q0FBQTtBQUFKOzs7Ozs7Ozs7QUNkdEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUEyRDtBQUVlO0FBQ0g7QUFDTztBQVc5RTtJQUFBO0lBQWtDLENBQUM7SUFBdEIsa0JBQWtCO1FBUjlCLDhEQUFRLENBQUM7WUFDUixZQUFZLEVBQUUsQ0FBQywwRkFBcUIsQ0FBQztZQUNyQyxPQUFPLEVBQUU7Z0JBQ1Asc0ZBQXlCO2dCQUN6QixvRkFBd0I7YUFDekI7WUFDRCxPQUFPLEVBQUUsQ0FBQyw4REFBZ0IsQ0FBQztTQUM1QixDQUFDO09BQ1csa0JBQWtCLENBQUk7SUFBRCx5QkFBQztDQUFBO0FBQUo7Ozs7Ozs7O0FDZi9CLHFFOzs7Ozs7O0FDQUEsa3ZCQUFrdkIsZ1NBQWdTLDBSOzs7Ozs7OztBQ0FsaEM7QUFBQTtBQUFBO0FBQUE7QUFBa0Q7QUFPbEQ7SUFFRTtJQUFnQixDQUFDO0lBRWpCLHdDQUFRLEdBQVI7SUFDQSxDQUFDO0lBTFUscUJBQXFCO1FBTGpDLCtEQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsaUJBQWlCO1lBQzNCLDRGQUE0Qzs7U0FFN0MsQ0FBQzs7T0FDVyxxQkFBcUIsQ0FPakM7SUFBRCw0QkFBQztDQUFBO0FBUGlDIiwiZmlsZSI6IjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVzIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBDb25maXJtYXRpb25Db21wb25lbnQgfSBmcm9tICcuL2NvbmZpcm1hdGlvbi9jb25maXJtYXRpb24uY29tcG9uZW50JztcblxuXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcbiAge3BhdGg6XCJcIiwgY29tcG9uZW50OkNvbmZpcm1hdGlvbkNvbXBvbmVudH1cbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQocm91dGVzKV0sXG4gIGV4cG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGVdXG59KVxuZXhwb3J0IGNsYXNzIENvbmZpcm1hdGlvblJvdXRpbmdNb2R1bGUgeyB9XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDb25maXJtYXRpb25Sb3V0aW5nTW9kdWxlIH0gZnJvbSAnLi9jb25maXJtYXRpb24tcm91dGluZy5tb2R1bGUnO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IENvbmZpcm1hdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vY29uZmlybWF0aW9uL2NvbmZpcm1hdGlvbi5jb21wb25lbnQnO1xuXG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW0NvbmZpcm1hdGlvbkNvbXBvbmVudF0sXG4gIGltcG9ydHM6IFtcbiAgICBDb25maXJtYXRpb25Sb3V0aW5nTW9kdWxlLFxuICAgIE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZVxuICBdLFxuICBzY2hlbWFzOiBbTk9fRVJST1JTX1NDSEVNQV1cbn0pXG5leHBvcnQgY2xhc3MgQ29uZmlybWF0aW9uTW9kdWxlIHsgfVxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIi8qIEFkZCBtb2JpbGUgc3R5bGVzIGZvciB0aGUgY29tcG9uZW50IGhlcmUuICAqL1xcblwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxBY3Rpb25CYXI+XFxuICAgIDxMYWJlbCBjbGFzcz1cXFwiYmxhY2tQYWdlXFxcIiB0ZXh0PVxcXCJTSUdOQUxFTUVOVCBFTlZPWUUgIVxcXCI+PC9MYWJlbD5cXG48L0FjdGlvbkJhcj5cXG48R3JpZExheW91dCByb3dzPVxcXCIyNjAsIDM2MFxcXCI+XFxuXFxuICAgIDxDb250ZW50VmlldyByb3c9XFxcIjBcXFwiIGNsYXNzPVxcXCJkYW5nZXJfYnV0dG9uXFxcIiB0ZXh0PVxcXCJcXFwiIHdpZHRoPVxcXCI2MDBweFxcXCIgaGVpZ2h0PVxcXCI2MDBweFxcXCIgYmFja2dyb3VuZENvbG9yPVxcXCIjRkY3RjAwXFxcIj48L0NvbnRlbnRWaWV3PiBcXG5cXG4gICAgPExhYmVsIHJvdz1cXFwiMVxcXCIgdGV4dD1cXFwiTUVSQ0kgcG91ciB2b3RyZSBjb250cmlidXRpb24gYWN0aXZlIGF1IHByb2dyYW1tZSBkZSBzaWduYWxlbWVudCBwYXJ0cmljaXBhdGlmIG1pcyBlbiBwbGFjZSBwYXIgbGEgc3RhdGlvbi4gXFxuXFxuVm91cyBwb3V2ZXogc3VpdnJlIGzigJnDqXZvbHV0aW9uIGRlIHZvdHJlIHNpZ25hbGVtZW50IGRhbnMgbGEgcnVicmlxdWUg4oCcTWVzIHNpZ25hbGVtZW50c+KAnVxcXCIgdGV4dFdyYXA9XFxcInRydWVcXFwiIGNsYXNzPVxcXCJtZXNzYWdlX2NvbmZpcm1hdGlvblxcXCI+PC9MYWJlbD5cXG4gICAgXFxuPC9HcmlkTGF5b3V0PlxcblxcbjxTdGFja0xheW91dD5cXG4gICAgPEJvdHRvbU5hdmlnYXRpb24gaGVpZ2h0PVxcXCIxMDAlXFxcIj5cXG4gICAgICAgIDxUYWJTdHJpcD5cXG4gICAgICAgICAgICA8VGFiU3RyaXBJdGVtPlxcbiAgICAgICAgICAgICAgICA8TGFiZWwgY29sPVxcXCIwXFxcIiB0ZXh0PVxcXCImI3hmMDE1O1xcXCIgY2xhc3M9XFxcIm50LWljb24gZmFzXFxcIj48L0xhYmVsPlxcbiAgICAgICAgICAgIDwvVGFiU3RyaXBJdGVtPlxcbiAgICAgICAgICAgIDwhLS0gPFRhYlN0cmlwSXRlbT5cXG4gICAgICAgICAgICAgICAgPExhYmVsIGNvbD1cXFwiMFxcXCIgdGV4dD1cXFwiQWNjdWVpbFxcXCIgY2xhc3M9XFxcIm50LWljb24gZmFzXFxcIj48L0xhYmVsPlxcbiAgICAgICAgICAgIDwvVGFiU3RyaXBJdGVtPiAtLT5cXG4gICAgICAgICAgICA8VGFiU3RyaXBJdGVtPlxcbiAgICAgICAgICAgICAgICA8TGFiZWwgY29sPVxcXCIyXFxcIiB0ZXh0PVxcXCImI3hmNTczO1xcXCIgY2xhc3M9XFxcIm50LWljb24gZmFzXFxcIj48L0xhYmVsPlxcbiAgICAgICAgICAgIDwvVGFiU3RyaXBJdGVtPlxcbiAgICAgICAgICAgIDwhLS0gPFRhYlN0cmlwSXRlbT5cXG4gICAgICAgICAgICAgICAgPExhYmVsIGNvbD1cXFwiMFxcXCIgdGV4dD1cXFwiTWVzIHNpZ25hbGVtZW50c1xcXCIgY2xhc3M9XFxcIm50LWljb24gZmFzXFxcIj48L0xhYmVsPlxcbiAgICAgICAgICAgIDwvVGFiU3RyaXBJdGVtPiAtLT5cXG4gICAgICAgIDwvVGFiU3RyaXA+XFxuICAgIDwvQm90dG9tTmF2aWdhdGlvbj5cXG48L1N0YWNrTGF5b3V0PlwiIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbnMtY29uZmlybWF0aW9uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NvbmZpcm1hdGlvbi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2NvbmZpcm1hdGlvbi5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQ29uZmlybWF0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICB9XG5cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=