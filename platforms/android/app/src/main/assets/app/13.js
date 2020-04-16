(global["webpackJsonp"] = global["webpackJsonp"] || []).push([[13],{

/***/ "./app/settings/settings-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsRoutingModule", function() { return SettingsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("nativescript-angular/router");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _settings_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/settings/settings.component.ts");



var routes = [
    { path: "", component: _settings_component__WEBPACK_IMPORTED_MODULE_2__["SettingsComponent"] }
];
var SettingsRoutingModule = /** @class */ (function () {
    function SettingsRoutingModule() {
    }
    SettingsRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"].forChild(routes)],
            exports: [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"]]
        })
    ], SettingsRoutingModule);
    return SettingsRoutingModule;
}());



/***/ }),

/***/ "./app/settings/settings.component.html":
/***/ (function(module, exports) {

module.exports = "<ActionBar class=\"actionBarSignalement\">\r\n    <!-- \r\n    Use the NavigationButton as a side-drawer button in Android\r\n    because ActionItems are shown on the right side of the ActionBar\r\n    -->\r\n    <NavigationButton ios:visibility=\"collapsed\" icon=\"res://menu\" (tap)=\"onDrawerButtonTap()\"></NavigationButton>\r\n    <!-- \r\n    Use the ActionItem for IOS with position set to left. Using the\r\n    NavigationButton as a side-drawer button in iOS is not possible,\r\n    because its function is to always navigate back in the application.\r\n    -->\r\n    <ActionItem icon=\"res://menu\" android:visibility=\"collapsed\" (tap)=\"onDrawerButtonTap()\"\r\n        ios.position=\"left\">\r\n    </ActionItem>\r\n    <Label class=\"blackPage\" text=\"CARNET DE SANTE\"></Label>\r\n</ActionBar>\r\n<ScrollView>\r\n<GridLayout class=\"settings__page__content\">\r\n        <StackLayout>\r\n            <GridLayout columns=\"auto, *\">\r\n                <ContentView col=\"0\" id=\"myView\" width=\"300px\" height=\"300px\" ></ContentView>\r\n                <Label col=\"1\" text=\"Pierre THOMAIN\" class=\"nomPrenom_carnet\"></Label>\r\n                <Label col=\"1\" text=\"39 ans\" class=\"age_carnet\"></Label>\r\n            </GridLayout>\r\n            <GridLayout columns=\"auto, *\">\r\n                <Label col=\"0\" class=\"groupe_sanguin\" text=\"Groupe sanguin :\"></Label>\r\n                <Label col=\"1\" text=\"&#xf043;\" class=\"nt-icon fas\" id=\"goutte_de_sang\"></Label>\r\n            </GridLayout>\r\n            <GridLayout columns=\"auto, *\">\r\n                <Label col=\"0\" class=\"groupe_sanguin\" text=\"Taille (cm) :\"></Label>\r\n                <Label col=\"1\" text=\"180\" class=\"groupe_sanguin\"></Label>\r\n            </GridLayout>\r\n            <GridLayout columns=\"auto, *\">\r\n                <Label col=\"0\" class=\"groupe_sanguin\" text=\"Poids (kg) :\"></Label>\r\n                <Label col=\"1\" text=\"85\" class=\"groupe_sanguin\"></Label>\r\n            </GridLayout>\r\n            <GridLayout columns=\"auto, *\">\r\n                <Label col=\"0\" class=\"groupe_sanguin\" text=\"Donneur d'organe :\"></Label>\r\n                <Label col=\"1\" text=\"OUI\" class=\"groupe_sanguin\"></Label>\r\n            </GridLayout>\r\n            <GridLayout columns=\"auto, *\">\r\n                <Label col=\"0\" class=\"groupe_sanguin\" text=\"Allergie(s) :\"></Label>\r\n                <Label col=\"1\" text=\"Aucunes\" class=\"groupe_sanguin\"></Label>\r\n            </GridLayout>\r\n            <GridLayout columns=\"auto, *\">\r\n                <Label col=\"0\" class=\"groupe_sanguin\" text=\"Pathologie(s)(s) :\"></Label>\r\n                <Label col=\"1\" text=\"Aucunes\" class=\"groupe_sanguin\"></Label>\r\n            </GridLayout>\r\n            <GridLayout columns=\"auto, *\">\r\n                <Label col=\"0\" class=\"groupe_sanguin\" text=\"Traitement(s) :\"></Label>\r\n                <Label col=\"1\" text=\"Aucuns\" class=\"groupe_sanguin\"></Label>\r\n            </GridLayout>\r\n            <GridLayout columns=\"auto, *\">\r\n                <Label col=\"0\" class=\"groupe_sanguin\" text=\"Personne à contacter :\"></Label>\r\n                <Label col=\"1\" text=\"Guillaume Thomain\" textWrap=\"true\" class=\"groupe_sanguin\"></Label>\r\n            </GridLayout>\r\n            <GridLayout columns=\"auto, *\">\r\n                <Label col=\"0\" class=\"groupe_sanguin\" text=\"Téléphone contact :\"></Label>\r\n                <Label col=\"1\" text=\"0673876546\" textWrap=\"true\" class=\"groupe_sanguin\"></Label>    \r\n            </GridLayout>\r\n            <GridLayout>\r\n                <Button row=\"0\" text=\"RENSEIGNER MON CARNET\" class=\"btn btn-warning\" id=\"button_health_book\"></Button> \r\n            </GridLayout>\r\n        </StackLayout>\r\n    </GridLayout>\r\n </ScrollView>            \r\n            \r\n            <BottomNavigation class=\"bottomNav\" height=\"100%\">\r\n                <StackLayout class=\"hr\" height=\"160px\"></StackLayout>\r\n                <TabStrip>\r\n                    <TabStripItem>\r\n                        <Label col=\"0\" text=\"&#xf05a;\" class=\"nt-icon fas\"></Label>\r\n                    </TabStripItem>\r\n                    <TabStripItem>\r\n                        <Label col=\"1\" text=\"&#xf041;\" class=\"nt-icon fas\"></Label>\r\n                    </TabStripItem>\r\n                    <TabStripItem>\r\n                        <Label col=\"2\" text=\"&#xf3c5;\" class=\"nt-icon fas\"></Label>\r\n                    </TabStripItem>\r\n                </TabStrip>\r\n            </BottomNavigation>\r\n \r\n\r\n"

/***/ }),

/***/ "./app/settings/settings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tns_core_modules_application__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("tns-core-modules/application");
/* harmony import */ var tns_core_modules_application__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_application__WEBPACK_IMPORTED_MODULE_1__);


var SettingsComponent = /** @class */ (function () {
    function SettingsComponent() {
        // Use the component constructor to inject providers.
    }
    SettingsComponent.prototype.ngOnInit = function () {
        // Init your component properties here.
    };
    SettingsComponent.prototype.onDrawerButtonTap = function () {
        var sideDrawer = tns_core_modules_application__WEBPACK_IMPORTED_MODULE_1__["getRootView"]();
        sideDrawer.showDrawer();
    };
    SettingsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "Settings",
            template: __webpack_require__("./app/settings/settings.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], SettingsComponent);
    return SettingsComponent;
}());



/***/ }),

/***/ "./app/settings/settings.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsModule", function() { return SettingsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("nativescript-angular/common");
/* harmony import */ var nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _settings_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/settings/settings-routing.module.ts");
/* harmony import */ var _settings_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/settings/settings.component.ts");




var SettingsModule = /** @class */ (function () {
    function SettingsModule() {
    }
    SettingsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1__["NativeScriptCommonModule"],
                _settings_routing_module__WEBPACK_IMPORTED_MODULE_2__["SettingsRoutingModule"]
            ],
            declarations: [
                _settings_component__WEBPACK_IMPORTED_MODULE_3__["SettingsComponent"]
            ],
            schemas: [
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["NO_ERRORS_SCHEMA"]
            ]
        })
    ], SettingsModule);
    return SettingsModule;
}());



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvc2V0dGluZ3Mvc2V0dGluZ3Mtcm91dGluZy5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NldHRpbmdzL3NldHRpbmdzLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC9zZXR0aW5ncy9zZXR0aW5ncy5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NldHRpbmdzL3NldHRpbmdzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF5QztBQUU4QjtBQUVkO0FBRXpELElBQU0sTUFBTSxHQUFXO0lBQ25CLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUscUVBQWlCLEVBQUU7Q0FDN0MsQ0FBQztBQU1GO0lBQUE7SUFBcUMsQ0FBQztJQUF6QixxQkFBcUI7UUFKakMsOERBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRSxDQUFDLG9GQUF3QixDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNwRCxPQUFPLEVBQUUsQ0FBQyxvRkFBd0IsQ0FBQztTQUN0QyxDQUFDO09BQ1cscUJBQXFCLENBQUk7SUFBRCw0QkFBQztDQUFBO0FBQUo7Ozs7Ozs7O0FDZGxDLHE4Q0FBcThDLHlzRkFBeXNGLDBLQUEwSywwS0FBMEssd0o7Ozs7Ozs7O0FDQWwrSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBa0Q7QUFFRTtBQU1wRDtJQUVJO1FBQ0kscURBQXFEO0lBQ3pELENBQUM7SUFFRCxvQ0FBUSxHQUFSO1FBQ0ksdUNBQXVDO0lBQzNDLENBQUM7SUFFRCw2Q0FBaUIsR0FBakI7UUFDSSxJQUFNLFVBQVUsR0FBa0Isd0VBQWUsRUFBRSxDQUFDO1FBQ3BELFVBQVUsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBYlEsaUJBQWlCO1FBSjdCLCtEQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsVUFBVTtZQUNwQix1RUFBd0M7U0FDM0MsQ0FBQzs7T0FDVyxpQkFBaUIsQ0FjN0I7SUFBRCx3QkFBQztDQUFBO0FBZDZCOzs7Ozs7Ozs7QUNSOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUEyRDtBQUNZO0FBRUw7QUFDVDtBQWN6RDtJQUFBO0lBQThCLENBQUM7SUFBbEIsY0FBYztRQVoxQiw4REFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFO2dCQUNMLG9GQUF3QjtnQkFDeEIsOEVBQXFCO2FBQ3hCO1lBQ0QsWUFBWSxFQUFFO2dCQUNWLHFFQUFpQjthQUNwQjtZQUNELE9BQU8sRUFBRTtnQkFDTCw4REFBZ0I7YUFDbkI7U0FDSixDQUFDO09BQ1csY0FBYyxDQUFJO0lBQUQscUJBQUM7Q0FBQTtBQUFKIiwiZmlsZSI6IjEzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcclxuXHJcbmltcG9ydCB7IFNldHRpbmdzQ29tcG9uZW50IH0gZnJvbSBcIi4vc2V0dGluZ3MuY29tcG9uZW50XCI7XHJcblxyXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcclxuICAgIHsgcGF0aDogXCJcIiwgY29tcG9uZW50OiBTZXR0aW5nc0NvbXBvbmVudCB9XHJcbl07XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgaW1wb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JDaGlsZChyb3V0ZXMpXSxcclxuICAgIGV4cG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGVdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTZXR0aW5nc1JvdXRpbmdNb2R1bGUgeyB9XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gXCI8QWN0aW9uQmFyIGNsYXNzPVxcXCJhY3Rpb25CYXJTaWduYWxlbWVudFxcXCI+XFxyXFxuICAgIDwhLS0gXFxyXFxuICAgIFVzZSB0aGUgTmF2aWdhdGlvbkJ1dHRvbiBhcyBhIHNpZGUtZHJhd2VyIGJ1dHRvbiBpbiBBbmRyb2lkXFxyXFxuICAgIGJlY2F1c2UgQWN0aW9uSXRlbXMgYXJlIHNob3duIG9uIHRoZSByaWdodCBzaWRlIG9mIHRoZSBBY3Rpb25CYXJcXHJcXG4gICAgLS0+XFxyXFxuICAgIDxOYXZpZ2F0aW9uQnV0dG9uIGlvczp2aXNpYmlsaXR5PVxcXCJjb2xsYXBzZWRcXFwiIGljb249XFxcInJlczovL21lbnVcXFwiICh0YXApPVxcXCJvbkRyYXdlckJ1dHRvblRhcCgpXFxcIj48L05hdmlnYXRpb25CdXR0b24+XFxyXFxuICAgIDwhLS0gXFxyXFxuICAgIFVzZSB0aGUgQWN0aW9uSXRlbSBmb3IgSU9TIHdpdGggcG9zaXRpb24gc2V0IHRvIGxlZnQuIFVzaW5nIHRoZVxcclxcbiAgICBOYXZpZ2F0aW9uQnV0dG9uIGFzIGEgc2lkZS1kcmF3ZXIgYnV0dG9uIGluIGlPUyBpcyBub3QgcG9zc2libGUsXFxyXFxuICAgIGJlY2F1c2UgaXRzIGZ1bmN0aW9uIGlzIHRvIGFsd2F5cyBuYXZpZ2F0ZSBiYWNrIGluIHRoZSBhcHBsaWNhdGlvbi5cXHJcXG4gICAgLS0+XFxyXFxuICAgIDxBY3Rpb25JdGVtIGljb249XFxcInJlczovL21lbnVcXFwiIGFuZHJvaWQ6dmlzaWJpbGl0eT1cXFwiY29sbGFwc2VkXFxcIiAodGFwKT1cXFwib25EcmF3ZXJCdXR0b25UYXAoKVxcXCJcXHJcXG4gICAgICAgIGlvcy5wb3NpdGlvbj1cXFwibGVmdFxcXCI+XFxyXFxuICAgIDwvQWN0aW9uSXRlbT5cXHJcXG4gICAgPExhYmVsIGNsYXNzPVxcXCJibGFja1BhZ2VcXFwiIHRleHQ9XFxcIkNBUk5FVCBERSBTQU5URVxcXCI+PC9MYWJlbD5cXHJcXG48L0FjdGlvbkJhcj5cXHJcXG48U2Nyb2xsVmlldz5cXHJcXG48R3JpZExheW91dCBjbGFzcz1cXFwic2V0dGluZ3NfX3BhZ2VfX2NvbnRlbnRcXFwiPlxcclxcbiAgICAgICAgPFN0YWNrTGF5b3V0PlxcclxcbiAgICAgICAgICAgIDxHcmlkTGF5b3V0IGNvbHVtbnM9XFxcImF1dG8sICpcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8Q29udGVudFZpZXcgY29sPVxcXCIwXFxcIiBpZD1cXFwibXlWaWV3XFxcIiB3aWR0aD1cXFwiMzAwcHhcXFwiIGhlaWdodD1cXFwiMzAwcHhcXFwiID48L0NvbnRlbnRWaWV3PlxcclxcbiAgICAgICAgICAgICAgICA8TGFiZWwgY29sPVxcXCIxXFxcIiB0ZXh0PVxcXCJQaWVycmUgVEhPTUFJTlxcXCIgY2xhc3M9XFxcIm5vbVByZW5vbV9jYXJuZXRcXFwiPjwvTGFiZWw+XFxyXFxuICAgICAgICAgICAgICAgIDxMYWJlbCBjb2w9XFxcIjFcXFwiIHRleHQ9XFxcIjM5IGFuc1xcXCIgY2xhc3M9XFxcImFnZV9jYXJuZXRcXFwiPjwvTGFiZWw+XFxyXFxuICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxcclxcbiAgICAgICAgICAgIDxHcmlkTGF5b3V0IGNvbHVtbnM9XFxcImF1dG8sICpcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8TGFiZWwgY29sPVxcXCIwXFxcIiBjbGFzcz1cXFwiZ3JvdXBlX3Nhbmd1aW5cXFwiIHRleHQ9XFxcIkdyb3VwZSBzYW5ndWluIDpcXFwiPjwvTGFiZWw+XFxyXFxuICAgICAgICAgICAgICAgIDxMYWJlbCBjb2w9XFxcIjFcXFwiIHRleHQ9XFxcIiYjeGYwNDM7XFxcIiBjbGFzcz1cXFwibnQtaWNvbiBmYXNcXFwiIGlkPVxcXCJnb3V0dGVfZGVfc2FuZ1xcXCI+PC9MYWJlbD5cXHJcXG4gICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XFxyXFxuICAgICAgICAgICAgPEdyaWRMYXlvdXQgY29sdW1ucz1cXFwiYXV0bywgKlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxMYWJlbCBjb2w9XFxcIjBcXFwiIGNsYXNzPVxcXCJncm91cGVfc2FuZ3VpblxcXCIgdGV4dD1cXFwiVGFpbGxlIChjbSkgOlxcXCI+PC9MYWJlbD5cXHJcXG4gICAgICAgICAgICAgICAgPExhYmVsIGNvbD1cXFwiMVxcXCIgdGV4dD1cXFwiMTgwXFxcIiBjbGFzcz1cXFwiZ3JvdXBlX3Nhbmd1aW5cXFwiPjwvTGFiZWw+XFxyXFxuICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxcclxcbiAgICAgICAgICAgIDxHcmlkTGF5b3V0IGNvbHVtbnM9XFxcImF1dG8sICpcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8TGFiZWwgY29sPVxcXCIwXFxcIiBjbGFzcz1cXFwiZ3JvdXBlX3Nhbmd1aW5cXFwiIHRleHQ9XFxcIlBvaWRzIChrZykgOlxcXCI+PC9MYWJlbD5cXHJcXG4gICAgICAgICAgICAgICAgPExhYmVsIGNvbD1cXFwiMVxcXCIgdGV4dD1cXFwiODVcXFwiIGNsYXNzPVxcXCJncm91cGVfc2FuZ3VpblxcXCI+PC9MYWJlbD5cXHJcXG4gICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XFxyXFxuICAgICAgICAgICAgPEdyaWRMYXlvdXQgY29sdW1ucz1cXFwiYXV0bywgKlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxMYWJlbCBjb2w9XFxcIjBcXFwiIGNsYXNzPVxcXCJncm91cGVfc2FuZ3VpblxcXCIgdGV4dD1cXFwiRG9ubmV1ciBkJ29yZ2FuZSA6XFxcIj48L0xhYmVsPlxcclxcbiAgICAgICAgICAgICAgICA8TGFiZWwgY29sPVxcXCIxXFxcIiB0ZXh0PVxcXCJPVUlcXFwiIGNsYXNzPVxcXCJncm91cGVfc2FuZ3VpblxcXCI+PC9MYWJlbD5cXHJcXG4gICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XFxyXFxuICAgICAgICAgICAgPEdyaWRMYXlvdXQgY29sdW1ucz1cXFwiYXV0bywgKlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxMYWJlbCBjb2w9XFxcIjBcXFwiIGNsYXNzPVxcXCJncm91cGVfc2FuZ3VpblxcXCIgdGV4dD1cXFwiQWxsZXJnaWUocykgOlxcXCI+PC9MYWJlbD5cXHJcXG4gICAgICAgICAgICAgICAgPExhYmVsIGNvbD1cXFwiMVxcXCIgdGV4dD1cXFwiQXVjdW5lc1xcXCIgY2xhc3M9XFxcImdyb3VwZV9zYW5ndWluXFxcIj48L0xhYmVsPlxcclxcbiAgICAgICAgICAgIDwvR3JpZExheW91dD5cXHJcXG4gICAgICAgICAgICA8R3JpZExheW91dCBjb2x1bW5zPVxcXCJhdXRvLCAqXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPExhYmVsIGNvbD1cXFwiMFxcXCIgY2xhc3M9XFxcImdyb3VwZV9zYW5ndWluXFxcIiB0ZXh0PVxcXCJQYXRob2xvZ2llKHMpKHMpIDpcXFwiPjwvTGFiZWw+XFxyXFxuICAgICAgICAgICAgICAgIDxMYWJlbCBjb2w9XFxcIjFcXFwiIHRleHQ9XFxcIkF1Y3VuZXNcXFwiIGNsYXNzPVxcXCJncm91cGVfc2FuZ3VpblxcXCI+PC9MYWJlbD5cXHJcXG4gICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XFxyXFxuICAgICAgICAgICAgPEdyaWRMYXlvdXQgY29sdW1ucz1cXFwiYXV0bywgKlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxMYWJlbCBjb2w9XFxcIjBcXFwiIGNsYXNzPVxcXCJncm91cGVfc2FuZ3VpblxcXCIgdGV4dD1cXFwiVHJhaXRlbWVudChzKSA6XFxcIj48L0xhYmVsPlxcclxcbiAgICAgICAgICAgICAgICA8TGFiZWwgY29sPVxcXCIxXFxcIiB0ZXh0PVxcXCJBdWN1bnNcXFwiIGNsYXNzPVxcXCJncm91cGVfc2FuZ3VpblxcXCI+PC9MYWJlbD5cXHJcXG4gICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XFxyXFxuICAgICAgICAgICAgPEdyaWRMYXlvdXQgY29sdW1ucz1cXFwiYXV0bywgKlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxMYWJlbCBjb2w9XFxcIjBcXFwiIGNsYXNzPVxcXCJncm91cGVfc2FuZ3VpblxcXCIgdGV4dD1cXFwiUGVyc29ubmUgw6AgY29udGFjdGVyIDpcXFwiPjwvTGFiZWw+XFxyXFxuICAgICAgICAgICAgICAgIDxMYWJlbCBjb2w9XFxcIjFcXFwiIHRleHQ9XFxcIkd1aWxsYXVtZSBUaG9tYWluXFxcIiB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCIgY2xhc3M9XFxcImdyb3VwZV9zYW5ndWluXFxcIj48L0xhYmVsPlxcclxcbiAgICAgICAgICAgIDwvR3JpZExheW91dD5cXHJcXG4gICAgICAgICAgICA8R3JpZExheW91dCBjb2x1bW5zPVxcXCJhdXRvLCAqXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPExhYmVsIGNvbD1cXFwiMFxcXCIgY2xhc3M9XFxcImdyb3VwZV9zYW5ndWluXFxcIiB0ZXh0PVxcXCJUw6lsw6lwaG9uZSBjb250YWN0IDpcXFwiPjwvTGFiZWw+XFxyXFxuICAgICAgICAgICAgICAgIDxMYWJlbCBjb2w9XFxcIjFcXFwiIHRleHQ9XFxcIjA2NzM4NzY1NDZcXFwiIHRleHRXcmFwPVxcXCJ0cnVlXFxcIiBjbGFzcz1cXFwiZ3JvdXBlX3Nhbmd1aW5cXFwiPjwvTGFiZWw+ICAgIFxcclxcbiAgICAgICAgICAgIDwvR3JpZExheW91dD5cXHJcXG4gICAgICAgICAgICA8R3JpZExheW91dD5cXHJcXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiByb3c9XFxcIjBcXFwiIHRleHQ9XFxcIlJFTlNFSUdORVIgTU9OIENBUk5FVFxcXCIgY2xhc3M9XFxcImJ0biBidG4td2FybmluZ1xcXCIgaWQ9XFxcImJ1dHRvbl9oZWFsdGhfYm9va1xcXCI+PC9CdXR0b24+IFxcclxcbiAgICAgICAgICAgIDwvR3JpZExheW91dD5cXHJcXG4gICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxyXFxuICAgIDwvR3JpZExheW91dD5cXHJcXG4gPC9TY3JvbGxWaWV3PiAgICAgICAgICAgIFxcclxcbiAgICAgICAgICAgIFxcclxcbiAgICAgICAgICAgIDxCb3R0b21OYXZpZ2F0aW9uIGNsYXNzPVxcXCJib3R0b21OYXZcXFwiIGhlaWdodD1cXFwiMTAwJVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwiaHJcXFwiIGhlaWdodD1cXFwiMTYwcHhcXFwiPjwvU3RhY2tMYXlvdXQ+XFxyXFxuICAgICAgICAgICAgICAgIDxUYWJTdHJpcD5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxUYWJTdHJpcEl0ZW0+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNvbD1cXFwiMFxcXCIgdGV4dD1cXFwiJiN4ZjA1YTtcXFwiIGNsYXNzPVxcXCJudC1pY29uIGZhc1xcXCI+PC9MYWJlbD5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvVGFiU3RyaXBJdGVtPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPFRhYlN0cmlwSXRlbT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY29sPVxcXCIxXFxcIiB0ZXh0PVxcXCImI3hmMDQxO1xcXCIgY2xhc3M9XFxcIm50LWljb24gZmFzXFxcIj48L0xhYmVsPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9UYWJTdHJpcEl0ZW0+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8VGFiU3RyaXBJdGVtPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjb2w9XFxcIjJcXFwiIHRleHQ9XFxcIiYjeGYzYzU7XFxcIiBjbGFzcz1cXFwibnQtaWNvbiBmYXNcXFwiPjwvTGFiZWw+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L1RhYlN0cmlwSXRlbT5cXHJcXG4gICAgICAgICAgICAgICAgPC9UYWJTdHJpcD5cXHJcXG4gICAgICAgICAgICA8L0JvdHRvbU5hdmlnYXRpb24+XFxyXFxuIFxcclxcblxcclxcblwiIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyXCI7XHJcbmltcG9ydCAqIGFzIGFwcCBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvblwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJTZXR0aW5nc1wiLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9zZXR0aW5ncy5jb21wb25lbnQuaHRtbFwiXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTZXR0aW5nc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgLy8gVXNlIHRoZSBjb21wb25lbnQgY29uc3RydWN0b3IgdG8gaW5qZWN0IHByb3ZpZGVycy5cclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgICAgICAvLyBJbml0IHlvdXIgY29tcG9uZW50IHByb3BlcnRpZXMgaGVyZS5cclxuICAgIH1cclxuXHJcbiAgICBvbkRyYXdlckJ1dHRvblRhcCgpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBzaWRlRHJhd2VyID0gPFJhZFNpZGVEcmF3ZXI+YXBwLmdldFJvb3RWaWV3KCk7XHJcbiAgICAgICAgc2lkZURyYXdlci5zaG93RHJhd2VyKCk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvY29tbW9uXCI7XHJcblxyXG5pbXBvcnQgeyBTZXR0aW5nc1JvdXRpbmdNb2R1bGUgfSBmcm9tIFwiLi9zZXR0aW5ncy1yb3V0aW5nLm1vZHVsZVwiO1xyXG5pbXBvcnQgeyBTZXR0aW5nc0NvbXBvbmVudCB9IGZyb20gXCIuL3NldHRpbmdzLmNvbXBvbmVudFwiO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGltcG9ydHM6IFtcclxuICAgICAgICBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUsXHJcbiAgICAgICAgU2V0dGluZ3NSb3V0aW5nTW9kdWxlXHJcbiAgICBdLFxyXG4gICAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICAgICAgU2V0dGluZ3NDb21wb25lbnRcclxuICAgIF0sXHJcbiAgICBzY2hlbWFzOiBbXHJcbiAgICAgICAgTk9fRVJST1JTX1NDSEVNQVxyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2V0dGluZ3NNb2R1bGUgeyB9XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=