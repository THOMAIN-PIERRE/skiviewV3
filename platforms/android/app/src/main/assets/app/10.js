(global["webpackJsonp"] = global["webpackJsonp"] || []).push([[10],{

/***/ "./app/featured/featured-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeaturedRoutingModule", function() { return FeaturedRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("nativescript-angular/router");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _featured_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/featured/featured.component.ts");



var routes = [
    { path: "", component: _featured_component__WEBPACK_IMPORTED_MODULE_2__["FeaturedComponent"] }
];
var FeaturedRoutingModule = /** @class */ (function () {
    function FeaturedRoutingModule() {
    }
    FeaturedRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"].forChild(routes)],
            exports: [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"]]
        })
    ], FeaturedRoutingModule);
    return FeaturedRoutingModule;
}());



/***/ }),

/***/ "./app/featured/featured.component.html":
/***/ (function(module, exports) {

module.exports = "<ActionBar class=\"actionBarSos\">\r\n    <!-- \r\n    Use the NavigationButton as a side-drawer button in Android\r\n    because ActionItems are shown on the right side of the ActionBar\r\n    -->\r\n    <NavigationButton ios:visibility=\"collapsed\" icon=\"res://menu\" (tap)=\"onDrawerButtonTap()\"></NavigationButton>\r\n    <!-- \r\n    Use the ActionItem for IOS with position set to left. Using the\r\n    NavigationButton as a side-drawer button in iOS is not possible,\r\n    because its function is to always navigate back in the application.\r\n    -->\r\n    <ActionItem icon=\"res://menu\" android:visibility=\"collapsed\" (tap)=\"onDrawerButtonTap()\"\r\n        ios.position=\"left\">\r\n    </ActionItem>\r\n    <Label class=\"greyPage\" text=\"SOS : Poste de secours\"></Label>\r\n</ActionBar>\r\n<GridLayout class=\"search__page__content\">\r\n    <Label class=\"greyPage\" id=\"vousEtes\" text=\"Vous êtes\"></Label>\r\n    <Label class=\"greyPage\" id=\"redVictime\" width=\"150\" height=\"150\" backgroundColor=\"#FF0000\"></Label>\r\n    <Label class=\"greyPage\" id=\"victime\" text=\"VICTIME\"></Label>\r\n    <Label class=\"greyPage\" id=\"greenTemoin\" width=\"150\" height=\"150\" backgroundColor=\"#106D0E\"></Label>\r\n    <Label class=\"greyPage\" id=\"temoin\" text=\"TEMOIN\"></Label>\r\n</GridLayout>\r\n\r\n"

/***/ }),

/***/ "./app/featured/featured.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeaturedComponent", function() { return FeaturedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tns_core_modules_application__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("tns-core-modules/application");
/* harmony import */ var tns_core_modules_application__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_application__WEBPACK_IMPORTED_MODULE_1__);


var FeaturedComponent = /** @class */ (function () {
    function FeaturedComponent() {
        // Use the component constructor to inject providers.
    }
    FeaturedComponent.prototype.ngOnInit = function () {
        // Init your component properties here.
    };
    FeaturedComponent.prototype.onDrawerButtonTap = function () {
        var sideDrawer = tns_core_modules_application__WEBPACK_IMPORTED_MODULE_1__["getRootView"]();
        sideDrawer.showDrawer();
    };
    FeaturedComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "Featured",
            template: __webpack_require__("./app/featured/featured.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], FeaturedComponent);
    return FeaturedComponent;
}());



/***/ }),

/***/ "./app/featured/featured.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeaturedModule", function() { return FeaturedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("nativescript-angular/common");
/* harmony import */ var nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _featured_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/featured/featured-routing.module.ts");
/* harmony import */ var _featured_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/featured/featured.component.ts");




var FeaturedModule = /** @class */ (function () {
    function FeaturedModule() {
    }
    FeaturedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1__["NativeScriptCommonModule"],
                _featured_routing_module__WEBPACK_IMPORTED_MODULE_2__["FeaturedRoutingModule"]
            ],
            declarations: [
                _featured_component__WEBPACK_IMPORTED_MODULE_3__["FeaturedComponent"]
            ],
            schemas: [
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["NO_ERRORS_SCHEMA"]
            ]
        })
    ], FeaturedModule);
    return FeaturedModule;
}());



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvZmVhdHVyZWQvZmVhdHVyZWQtcm91dGluZy5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2ZlYXR1cmVkL2ZlYXR1cmVkLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC9mZWF0dXJlZC9mZWF0dXJlZC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2ZlYXR1cmVkL2ZlYXR1cmVkLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF5QztBQUU4QjtBQUVkO0FBRXpELElBQU0sTUFBTSxHQUFXO0lBQ25CLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUscUVBQWlCLEVBQUU7Q0FDN0MsQ0FBQztBQU1GO0lBQUE7SUFBcUMsQ0FBQztJQUF6QixxQkFBcUI7UUFKakMsOERBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRSxDQUFDLG9GQUF3QixDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNwRCxPQUFPLEVBQUUsQ0FBQyxvRkFBd0IsQ0FBQztTQUN0QyxDQUFDO09BQ1cscUJBQXFCLENBQUk7SUFBRCw0QkFBQztDQUFBO0FBQUo7Ozs7Ozs7O0FDZGxDLGcxQzs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBa0Q7QUFFRTtBQU1wRDtJQUVJO1FBQ0kscURBQXFEO0lBQ3pELENBQUM7SUFFRCxvQ0FBUSxHQUFSO1FBQ0ksdUNBQXVDO0lBQzNDLENBQUM7SUFFRCw2Q0FBaUIsR0FBakI7UUFDSSxJQUFNLFVBQVUsR0FBa0Isd0VBQWUsRUFBRSxDQUFDO1FBQ3BELFVBQVUsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBYlEsaUJBQWlCO1FBSjdCLCtEQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsVUFBVTtZQUNwQix1RUFBd0M7U0FDM0MsQ0FBQzs7T0FDVyxpQkFBaUIsQ0FjN0I7SUFBRCx3QkFBQztDQUFBO0FBZDZCOzs7Ozs7Ozs7QUNSOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUEyRDtBQUNZO0FBRUw7QUFDVDtBQWN6RDtJQUFBO0lBQThCLENBQUM7SUFBbEIsY0FBYztRQVoxQiw4REFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFO2dCQUNMLG9GQUF3QjtnQkFDeEIsOEVBQXFCO2FBQ3hCO1lBQ0QsWUFBWSxFQUFFO2dCQUNWLHFFQUFpQjthQUNwQjtZQUNELE9BQU8sRUFBRTtnQkFDTCw4REFBZ0I7YUFDbkI7U0FDSixDQUFDO09BQ1csY0FBYyxDQUFJO0lBQUQscUJBQUM7Q0FBQTtBQUFKIiwiZmlsZSI6IjEwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcclxuXHJcbmltcG9ydCB7IEZlYXR1cmVkQ29tcG9uZW50IH0gZnJvbSBcIi4vZmVhdHVyZWQuY29tcG9uZW50XCI7XHJcblxyXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcclxuICAgIHsgcGF0aDogXCJcIiwgY29tcG9uZW50OiBGZWF0dXJlZENvbXBvbmVudCB9XHJcbl07XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgaW1wb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JDaGlsZChyb3V0ZXMpXSxcclxuICAgIGV4cG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGVdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGZWF0dXJlZFJvdXRpbmdNb2R1bGUgeyB9XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gXCI8QWN0aW9uQmFyIGNsYXNzPVxcXCJhY3Rpb25CYXJTb3NcXFwiPlxcclxcbiAgICA8IS0tIFxcclxcbiAgICBVc2UgdGhlIE5hdmlnYXRpb25CdXR0b24gYXMgYSBzaWRlLWRyYXdlciBidXR0b24gaW4gQW5kcm9pZFxcclxcbiAgICBiZWNhdXNlIEFjdGlvbkl0ZW1zIGFyZSBzaG93biBvbiB0aGUgcmlnaHQgc2lkZSBvZiB0aGUgQWN0aW9uQmFyXFxyXFxuICAgIC0tPlxcclxcbiAgICA8TmF2aWdhdGlvbkJ1dHRvbiBpb3M6dmlzaWJpbGl0eT1cXFwiY29sbGFwc2VkXFxcIiBpY29uPVxcXCJyZXM6Ly9tZW51XFxcIiAodGFwKT1cXFwib25EcmF3ZXJCdXR0b25UYXAoKVxcXCI+PC9OYXZpZ2F0aW9uQnV0dG9uPlxcclxcbiAgICA8IS0tIFxcclxcbiAgICBVc2UgdGhlIEFjdGlvbkl0ZW0gZm9yIElPUyB3aXRoIHBvc2l0aW9uIHNldCB0byBsZWZ0LiBVc2luZyB0aGVcXHJcXG4gICAgTmF2aWdhdGlvbkJ1dHRvbiBhcyBhIHNpZGUtZHJhd2VyIGJ1dHRvbiBpbiBpT1MgaXMgbm90IHBvc3NpYmxlLFxcclxcbiAgICBiZWNhdXNlIGl0cyBmdW5jdGlvbiBpcyB0byBhbHdheXMgbmF2aWdhdGUgYmFjayBpbiB0aGUgYXBwbGljYXRpb24uXFxyXFxuICAgIC0tPlxcclxcbiAgICA8QWN0aW9uSXRlbSBpY29uPVxcXCJyZXM6Ly9tZW51XFxcIiBhbmRyb2lkOnZpc2liaWxpdHk9XFxcImNvbGxhcHNlZFxcXCIgKHRhcCk9XFxcIm9uRHJhd2VyQnV0dG9uVGFwKClcXFwiXFxyXFxuICAgICAgICBpb3MucG9zaXRpb249XFxcImxlZnRcXFwiPlxcclxcbiAgICA8L0FjdGlvbkl0ZW0+XFxyXFxuICAgIDxMYWJlbCBjbGFzcz1cXFwiZ3JleVBhZ2VcXFwiIHRleHQ9XFxcIlNPUyA6IFBvc3RlIGRlIHNlY291cnNcXFwiPjwvTGFiZWw+XFxyXFxuPC9BY3Rpb25CYXI+XFxyXFxuPEdyaWRMYXlvdXQgY2xhc3M9XFxcInNlYXJjaF9fcGFnZV9fY29udGVudFxcXCI+XFxyXFxuICAgIDxMYWJlbCBjbGFzcz1cXFwiZ3JleVBhZ2VcXFwiIGlkPVxcXCJ2b3VzRXRlc1xcXCIgdGV4dD1cXFwiVm91cyDDqnRlc1xcXCI+PC9MYWJlbD5cXHJcXG4gICAgPExhYmVsIGNsYXNzPVxcXCJncmV5UGFnZVxcXCIgaWQ9XFxcInJlZFZpY3RpbWVcXFwiIHdpZHRoPVxcXCIxNTBcXFwiIGhlaWdodD1cXFwiMTUwXFxcIiBiYWNrZ3JvdW5kQ29sb3I9XFxcIiNGRjAwMDBcXFwiPjwvTGFiZWw+XFxyXFxuICAgIDxMYWJlbCBjbGFzcz1cXFwiZ3JleVBhZ2VcXFwiIGlkPVxcXCJ2aWN0aW1lXFxcIiB0ZXh0PVxcXCJWSUNUSU1FXFxcIj48L0xhYmVsPlxcclxcbiAgICA8TGFiZWwgY2xhc3M9XFxcImdyZXlQYWdlXFxcIiBpZD1cXFwiZ3JlZW5UZW1vaW5cXFwiIHdpZHRoPVxcXCIxNTBcXFwiIGhlaWdodD1cXFwiMTUwXFxcIiBiYWNrZ3JvdW5kQ29sb3I9XFxcIiMxMDZEMEVcXFwiPjwvTGFiZWw+XFxyXFxuICAgIDxMYWJlbCBjbGFzcz1cXFwiZ3JleVBhZ2VcXFwiIGlkPVxcXCJ0ZW1vaW5cXFwiIHRleHQ9XFxcIlRFTU9JTlxcXCI+PC9MYWJlbD5cXHJcXG48L0dyaWRMYXlvdXQ+XFxyXFxuXFxyXFxuXCIiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXIgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLXNpZGVkcmF3ZXJcIjtcclxuaW1wb3J0ICogYXMgYXBwIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIkZlYXR1cmVkXCIsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2ZlYXR1cmVkLmNvbXBvbmVudC5odG1sXCJcclxufSlcclxuZXhwb3J0IGNsYXNzIEZlYXR1cmVkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICAvLyBVc2UgdGhlIGNvbXBvbmVudCBjb25zdHJ1Y3RvciB0byBpbmplY3QgcHJvdmlkZXJzLlxyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgICAgIC8vIEluaXQgeW91ciBjb21wb25lbnQgcHJvcGVydGllcyBoZXJlLlxyXG4gICAgfVxyXG5cclxuICAgIG9uRHJhd2VyQnV0dG9uVGFwKCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IHNpZGVEcmF3ZXIgPSA8UmFkU2lkZURyYXdlcj5hcHAuZ2V0Um9vdFZpZXcoKTtcclxuICAgICAgICBzaWRlRHJhd2VyLnNob3dEcmF3ZXIoKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9jb21tb25cIjtcclxuXHJcbmltcG9ydCB7IEZlYXR1cmVkUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL2ZlYXR1cmVkLXJvdXRpbmcubW9kdWxlXCI7XHJcbmltcG9ydCB7IEZlYXR1cmVkQ29tcG9uZW50IH0gZnJvbSBcIi4vZmVhdHVyZWQuY29tcG9uZW50XCI7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgaW1wb3J0czogW1xyXG4gICAgICAgIE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSxcclxuICAgICAgICBGZWF0dXJlZFJvdXRpbmdNb2R1bGVcclxuICAgIF0sXHJcbiAgICBkZWNsYXJhdGlvbnM6IFtcclxuICAgICAgICBGZWF0dXJlZENvbXBvbmVudFxyXG4gICAgXSxcclxuICAgIHNjaGVtYXM6IFtcclxuICAgICAgICBOT19FUlJPUlNfU0NIRU1BXHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGZWF0dXJlZE1vZHVsZSB7IH1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==