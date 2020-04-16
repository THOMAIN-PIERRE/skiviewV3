(global["webpackJsonp"] = global["webpackJsonp"] || []).push([[7],{

/***/ "./app/signalement/signalement-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignalementRoutingModule", function() { return SignalementRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("nativescript-angular/router");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _signalement_signalement_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/signalement/signalement/signalement.component.ts");



var routes = [
    { path: "", component: _signalement_signalement_component__WEBPACK_IMPORTED_MODULE_2__["SignalementComponent"] }
];
var SignalementRoutingModule = /** @class */ (function () {
    function SignalementRoutingModule() {
    }
    SignalementRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"].forChild(routes)],
            exports: [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"]]
        })
    ], SignalementRoutingModule);
    return SignalementRoutingModule;
}());



/***/ }),

/***/ "./app/signalement/signalement.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignalementModule", function() { return SignalementModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _signalement_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./app/signalement/signalement-routing.module.ts");
/* harmony import */ var nativescript_angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("nativescript-angular/common");
/* harmony import */ var nativescript_angular_common__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_common__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _signalement_signalement_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/signalement/signalement/signalement.component.ts");




var SignalementModule = /** @class */ (function () {
    function SignalementModule() {
    }
    SignalementModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_signalement_signalement_component__WEBPACK_IMPORTED_MODULE_3__["SignalementComponent"]],
            imports: [
                _signalement_routing_module__WEBPACK_IMPORTED_MODULE_1__["SignalementRoutingModule"],
                nativescript_angular_common__WEBPACK_IMPORTED_MODULE_2__["NativeScriptCommonModule"]
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NO_ERRORS_SCHEMA"]]
        })
    ], SignalementModule);
    return SignalementModule;
}());



/***/ }),

/***/ "./app/signalement/signalement/signalement.component.css":
/***/ (function(module, exports) {

module.exports = "/* Add mobile styles for the component here.  */\n"

/***/ }),

/***/ "./app/signalement/signalement/signalement.component.html":
/***/ (function(module, exports) {

module.exports = "<ActionBar class=\"actionBarSignalement\">\n    <!-- \n    Use the NavigationButton as a side-drawer button in Android\n    because ActionItems are shown on the right side of the ActionBar\n    -->\n    <NavigationButton ios:visibility=\"collapsed\" icon=\"res://menu\" (tap)=\"onDrawerButtonTap()\"></NavigationButton>\n    <!-- \n    Use the ActionItem for IOS with position set to left. Using the\n    NavigationButton as a side-drawer button in iOS is not possible,\n    because its function is to always navigate back in the application.\n    -->\n    <ActionItem icon=\"res://menu\" android:visibility=\"collapsed\" (tap)=\"onDrawerButtonTap()\"\n        ios.position=\"left\">\n    </ActionItem>\n    <Label class=\"blackPage\" text=\"MES SIGNALEMENTS\"></Label>\n    </ActionBar>\n\n    <GridLayout>\n        <ScrollView>\n            <StackLayout>\n                <StackLayout class=\"hr\"></StackLayout>\n                <GridLayout columns=\"auto, *\" class=\"mes_signalements\">\n                    <Label col=\"0\" text=\"FICHE N° 00001\" class=\"numero_fiche\"></Label>\n                    <Label col=\"1\" text=\"20/04/2019 11:35\" class=\"date_heure\"></Label>\n                </GridLayout>\n                <GridLayout columns=\"auto, 200\">\n                    <ContentView col=\"0\" id=\"myDanger1\" width=\"300px\" height=\"300px\" ></ContentView>\n                    <Label col=\"1\" text=\"SIGNALER DANGER\" class=\"declaration\"></Label>\n                    <Label col=\"1\" text=\"Element sur la piste\" class=\"categorie\"></Label>\n                    <Label col=\"1\" text=\"STATUT : PRIS EN COMPTE\" class=\"statut\"></Label>\n                </GridLayout>\n                <StackLayout class=\"hr\"></StackLayout>\n                <GridLayout columns=\"auto, *\" class=\"mes_signalements\">\n                    <Label col=\"0\" text=\"FICHE N° 00002\" class=\"numero_fiche\"></Label>\n                    <Label col=\"1\" text=\"24/09/2019 15:45\" class=\"date_heure\"></Label> \n                </GridLayout>\n                <GridLayout columns=\"auto, *\">\n                    <ContentView col=\"0\" id=\"myDanger2\" width=\"300px\" height=\"300px\" ></ContentView>\n                    <Label col=\"1\" text=\"SIGNALER DANGER\" class=\"declaration\"></Label>\n                    <Label col=\"1\" text=\"Signalétique\" class=\"categorie\"></Label>\n                    <Label col=\"1\" text=\"STATUT : PRIS EN COMPTE\" class=\"statut\"></Label>\n                </GridLayout>\n                <StackLayout class=\"hr\"></StackLayout>\n            </StackLayout>\n        </ScrollView>\n    </GridLayout>\n<!-- <StackLayout>\n    <BottomNavigation height=\"1900px\">\n        <TabStrip>\n            <TabStripItem>\n                <Label col=\"0\" text=\"&#xf015;\" <class=\"nt-icon fas\"> id=\"goutte_de_sang\"></Label>\n            </TabStripItem>\n        </TabStrip>\n    </BottomNavigation>\n</StackLayout> -->"

/***/ }),

/***/ "./app/signalement/signalement/signalement.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignalementComponent", function() { return SignalementComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);

var SignalementComponent = /** @class */ (function () {
    function SignalementComponent() {
    }
    SignalementComponent.prototype.ngOnInit = function () {
    };
    SignalementComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ns-signalement',
            template: __webpack_require__("./app/signalement/signalement/signalement.component.html"),
            styles: [__webpack_require__("./app/signalement/signalement/signalement.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SignalementComponent);
    return SignalementComponent;
}());



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvc2lnbmFsZW1lbnQvc2lnbmFsZW1lbnQtcm91dGluZy5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NpZ25hbGVtZW50L3NpZ25hbGVtZW50Lm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9hcHAvc2lnbmFsZW1lbnQvc2lnbmFsZW1lbnQvc2lnbmFsZW1lbnQuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9hcHAvc2lnbmFsZW1lbnQvc2lnbmFsZW1lbnQvc2lnbmFsZW1lbnQuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NpZ25hbGVtZW50L3NpZ25hbGVtZW50L3NpZ25hbGVtZW50LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF5QztBQUU4QjtBQUNJO0FBRzNFLElBQU0sTUFBTSxHQUFXO0lBQ3JCLEVBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsdUZBQW9CLEVBQUM7Q0FDNUMsQ0FBQztBQU1GO0lBQUE7SUFBd0MsQ0FBQztJQUE1Qix3QkFBd0I7UUFKcEMsOERBQVEsQ0FBQztZQUNSLE9BQU8sRUFBRSxDQUFDLG9GQUF3QixDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNwRCxPQUFPLEVBQUUsQ0FBQyxvRkFBd0IsQ0FBQztTQUNwQyxDQUFDO09BQ1csd0JBQXdCLENBQUk7SUFBRCwrQkFBQztDQUFBO0FBQUo7Ozs7Ozs7OztBQ2RyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTJEO0FBRWE7QUFDRDtBQUNJO0FBVzNFO0lBQUE7SUFBaUMsQ0FBQztJQUFyQixpQkFBaUI7UUFSN0IsOERBQVEsQ0FBQztZQUNSLFlBQVksRUFBRSxDQUFDLHVGQUFvQixDQUFDO1lBQ3BDLE9BQU8sRUFBRTtnQkFDUCxvRkFBd0I7Z0JBQ3hCLG9GQUF3QjthQUN6QjtZQUNELE9BQU8sRUFBRSxDQUFDLDhEQUFnQixDQUFDO1NBQzVCLENBQUM7T0FDVyxpQkFBaUIsQ0FBSTtJQUFELHdCQUFDO0NBQUE7QUFBSjs7Ozs7Ozs7QUNmOUIscUU7Ozs7Ozs7QUNBQSx1d0ZBQXV3Rix5Sjs7Ozs7Ozs7QUNBdndGO0FBQUE7QUFBQTtBQUFBO0FBQWtEO0FBT2xEO0lBRUU7SUFBZ0IsQ0FBQztJQUVqQix1Q0FBUSxHQUFSO0lBQ0EsQ0FBQztJQUxVLG9CQUFvQjtRQUxoQywrREFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGdCQUFnQjtZQUMxQix5RkFBMkM7O1NBRTVDLENBQUM7O09BQ1csb0JBQW9CLENBT2hDO0lBQUQsMkJBQUM7Q0FBQTtBQVBnQyIsImZpbGUiOiI3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgU2lnbmFsZW1lbnRDb21wb25lbnQgfSBmcm9tICcuL3NpZ25hbGVtZW50L3NpZ25hbGVtZW50LmNvbXBvbmVudCc7XG5cblxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXG4gIHtwYXRoOiBcIlwiLCBjb21wb25lbnQ6IFNpZ25hbGVtZW50Q29tcG9uZW50fVxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JDaGlsZChyb3V0ZXMpXSxcbiAgZXhwb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZV1cbn0pXG5leHBvcnQgY2xhc3MgU2lnbmFsZW1lbnRSb3V0aW5nTW9kdWxlIHsgfVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgU2lnbmFsZW1lbnRSb3V0aW5nTW9kdWxlIH0gZnJvbSAnLi9zaWduYWxlbWVudC1yb3V0aW5nLm1vZHVsZSc7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgU2lnbmFsZW1lbnRDb21wb25lbnQgfSBmcm9tICcuL3NpZ25hbGVtZW50L3NpZ25hbGVtZW50LmNvbXBvbmVudCc7XG5cblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbU2lnbmFsZW1lbnRDb21wb25lbnRdLFxuICBpbXBvcnRzOiBbXG4gICAgU2lnbmFsZW1lbnRSb3V0aW5nTW9kdWxlLFxuICAgIE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZVxuICBdLFxuICBzY2hlbWFzOiBbTk9fRVJST1JTX1NDSEVNQV1cbn0pXG5leHBvcnQgY2xhc3MgU2lnbmFsZW1lbnRNb2R1bGUgeyB9XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiLyogQWRkIG1vYmlsZSBzdHlsZXMgZm9yIHRoZSBjb21wb25lbnQgaGVyZS4gICovXFxuXCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPEFjdGlvbkJhciBjbGFzcz1cXFwiYWN0aW9uQmFyU2lnbmFsZW1lbnRcXFwiPlxcbiAgICA8IS0tIFxcbiAgICBVc2UgdGhlIE5hdmlnYXRpb25CdXR0b24gYXMgYSBzaWRlLWRyYXdlciBidXR0b24gaW4gQW5kcm9pZFxcbiAgICBiZWNhdXNlIEFjdGlvbkl0ZW1zIGFyZSBzaG93biBvbiB0aGUgcmlnaHQgc2lkZSBvZiB0aGUgQWN0aW9uQmFyXFxuICAgIC0tPlxcbiAgICA8TmF2aWdhdGlvbkJ1dHRvbiBpb3M6dmlzaWJpbGl0eT1cXFwiY29sbGFwc2VkXFxcIiBpY29uPVxcXCJyZXM6Ly9tZW51XFxcIiAodGFwKT1cXFwib25EcmF3ZXJCdXR0b25UYXAoKVxcXCI+PC9OYXZpZ2F0aW9uQnV0dG9uPlxcbiAgICA8IS0tIFxcbiAgICBVc2UgdGhlIEFjdGlvbkl0ZW0gZm9yIElPUyB3aXRoIHBvc2l0aW9uIHNldCB0byBsZWZ0LiBVc2luZyB0aGVcXG4gICAgTmF2aWdhdGlvbkJ1dHRvbiBhcyBhIHNpZGUtZHJhd2VyIGJ1dHRvbiBpbiBpT1MgaXMgbm90IHBvc3NpYmxlLFxcbiAgICBiZWNhdXNlIGl0cyBmdW5jdGlvbiBpcyB0byBhbHdheXMgbmF2aWdhdGUgYmFjayBpbiB0aGUgYXBwbGljYXRpb24uXFxuICAgIC0tPlxcbiAgICA8QWN0aW9uSXRlbSBpY29uPVxcXCJyZXM6Ly9tZW51XFxcIiBhbmRyb2lkOnZpc2liaWxpdHk9XFxcImNvbGxhcHNlZFxcXCIgKHRhcCk9XFxcIm9uRHJhd2VyQnV0dG9uVGFwKClcXFwiXFxuICAgICAgICBpb3MucG9zaXRpb249XFxcImxlZnRcXFwiPlxcbiAgICA8L0FjdGlvbkl0ZW0+XFxuICAgIDxMYWJlbCBjbGFzcz1cXFwiYmxhY2tQYWdlXFxcIiB0ZXh0PVxcXCJNRVMgU0lHTkFMRU1FTlRTXFxcIj48L0xhYmVsPlxcbiAgICA8L0FjdGlvbkJhcj5cXG5cXG4gICAgPEdyaWRMYXlvdXQ+XFxuICAgICAgICA8U2Nyb2xsVmlldz5cXG4gICAgICAgICAgICA8U3RhY2tMYXlvdXQ+XFxuICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwiaHJcXFwiPjwvU3RhY2tMYXlvdXQ+XFxuICAgICAgICAgICAgICAgIDxHcmlkTGF5b3V0IGNvbHVtbnM9XFxcImF1dG8sICpcXFwiIGNsYXNzPVxcXCJtZXNfc2lnbmFsZW1lbnRzXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjb2w9XFxcIjBcXFwiIHRleHQ9XFxcIkZJQ0hFIE7CsCAwMDAwMVxcXCIgY2xhc3M9XFxcIm51bWVyb19maWNoZVxcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjb2w9XFxcIjFcXFwiIHRleHQ9XFxcIjIwLzA0LzIwMTkgMTE6MzVcXFwiIGNsYXNzPVxcXCJkYXRlX2hldXJlXFxcIj48L0xhYmVsPlxcbiAgICAgICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XFxuICAgICAgICAgICAgICAgIDxHcmlkTGF5b3V0IGNvbHVtbnM9XFxcImF1dG8sIDIwMFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8Q29udGVudFZpZXcgY29sPVxcXCIwXFxcIiBpZD1cXFwibXlEYW5nZXIxXFxcIiB3aWR0aD1cXFwiMzAwcHhcXFwiIGhlaWdodD1cXFwiMzAwcHhcXFwiID48L0NvbnRlbnRWaWV3PlxcbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNvbD1cXFwiMVxcXCIgdGV4dD1cXFwiU0lHTkFMRVIgREFOR0VSXFxcIiBjbGFzcz1cXFwiZGVjbGFyYXRpb25cXFwiPjwvTGFiZWw+XFxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY29sPVxcXCIxXFxcIiB0ZXh0PVxcXCJFbGVtZW50IHN1ciBsYSBwaXN0ZVxcXCIgY2xhc3M9XFxcImNhdGVnb3JpZVxcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjb2w9XFxcIjFcXFwiIHRleHQ9XFxcIlNUQVRVVCA6IFBSSVMgRU4gQ09NUFRFXFxcIiBjbGFzcz1cXFwic3RhdHV0XFxcIj48L0xhYmVsPlxcbiAgICAgICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XFxuICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwiaHJcXFwiPjwvU3RhY2tMYXlvdXQ+XFxuICAgICAgICAgICAgICAgIDxHcmlkTGF5b3V0IGNvbHVtbnM9XFxcImF1dG8sICpcXFwiIGNsYXNzPVxcXCJtZXNfc2lnbmFsZW1lbnRzXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjb2w9XFxcIjBcXFwiIHRleHQ9XFxcIkZJQ0hFIE7CsCAwMDAwMlxcXCIgY2xhc3M9XFxcIm51bWVyb19maWNoZVxcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjb2w9XFxcIjFcXFwiIHRleHQ9XFxcIjI0LzA5LzIwMTkgMTU6NDVcXFwiIGNsYXNzPVxcXCJkYXRlX2hldXJlXFxcIj48L0xhYmVsPiBcXG4gICAgICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxcbiAgICAgICAgICAgICAgICA8R3JpZExheW91dCBjb2x1bW5zPVxcXCJhdXRvLCAqXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxDb250ZW50VmlldyBjb2w9XFxcIjBcXFwiIGlkPVxcXCJteURhbmdlcjJcXFwiIHdpZHRoPVxcXCIzMDBweFxcXCIgaGVpZ2h0PVxcXCIzMDBweFxcXCIgPjwvQ29udGVudFZpZXc+XFxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY29sPVxcXCIxXFxcIiB0ZXh0PVxcXCJTSUdOQUxFUiBEQU5HRVJcXFwiIGNsYXNzPVxcXCJkZWNsYXJhdGlvblxcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjb2w9XFxcIjFcXFwiIHRleHQ9XFxcIlNpZ25hbMOpdGlxdWVcXFwiIGNsYXNzPVxcXCJjYXRlZ29yaWVcXFwiPjwvTGFiZWw+XFxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY29sPVxcXCIxXFxcIiB0ZXh0PVxcXCJTVEFUVVQgOiBQUklTIEVOIENPTVBURVxcXCIgY2xhc3M9XFxcInN0YXR1dFxcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxcbiAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcImhyXFxcIj48L1N0YWNrTGF5b3V0PlxcbiAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgICAgICA8L1Njcm9sbFZpZXc+XFxuICAgIDwvR3JpZExheW91dD5cXG48IS0tIDxTdGFja0xheW91dD5cXG4gICAgPEJvdHRvbU5hdmlnYXRpb24gaGVpZ2h0PVxcXCIxOTAwcHhcXFwiPlxcbiAgICAgICAgPFRhYlN0cmlwPlxcbiAgICAgICAgICAgIDxUYWJTdHJpcEl0ZW0+XFxuICAgICAgICAgICAgICAgIDxMYWJlbCBjb2w9XFxcIjBcXFwiIHRleHQ9XFxcIiYjeGYwMTU7XFxcIiA8Y2xhc3M9XFxcIm50LWljb24gZmFzXFxcIj4gaWQ9XFxcImdvdXR0ZV9kZV9zYW5nXFxcIj48L0xhYmVsPlxcbiAgICAgICAgICAgIDwvVGFiU3RyaXBJdGVtPlxcbiAgICAgICAgPC9UYWJTdHJpcD5cXG4gICAgPC9Cb3R0b21OYXZpZ2F0aW9uPlxcbjwvU3RhY2tMYXlvdXQ+IC0tPlwiIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbnMtc2lnbmFsZW1lbnQnLFxuICB0ZW1wbGF0ZVVybDogJy4vc2lnbmFsZW1lbnQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zaWduYWxlbWVudC5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgU2lnbmFsZW1lbnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gIH1cblxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==