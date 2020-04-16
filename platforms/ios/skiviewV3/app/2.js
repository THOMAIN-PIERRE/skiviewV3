(global["webpackJsonp"] = global["webpackJsonp"] || []).push([[2],{

/***/ "./app/home/home-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function() { return HomeRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("nativescript-angular/router");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/home/home.component.ts");



var routes = [
    { path: "", component: _home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] }
];
var HomeRoutingModule = /** @class */ (function () {
    function HomeRoutingModule() {
    }
    HomeRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"].forChild(routes)],
            exports: [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"]]
        })
    ], HomeRoutingModule);
    return HomeRoutingModule;
}());



/***/ }),

/***/ "./app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<ActionBar>\r\n    <!-- \r\n    Use the NavigationButton as a side-drawer button in Android\r\n    because ActionItems are shown on the right side of the ActionBar\r\n    -->\r\n    <NavigationButton ios:visibility=\"collapsed\" icon=\"res://menu\" (tap)=\"onDrawerButtonTap()\"></NavigationButton>\r\n    <!-- \r\n    Use the ActionItem for IOS with position set to left. Using the\r\n    NavigationButton as a side-drawer button in iOS is not possible,\r\n    because its function is to always navigate back in the application.\r\n    -->\r\n    <ActionItem icon=\"res://menu\" android:visibility=\"collapsed\" (tap)=\"onDrawerButtonTap()\"\r\n        ios.position=\"left\" >\r\n    </ActionItem>\r\n    <Label class=\"pageLabel\" text=\"ACCUEIL\"></Label>\r\n</ActionBar>\r\n<GridLayout class=\"page__content\">\r\n    <GridLayout rows=\"400\">\r\n        <image row=\"0\" src=\"https://pngimage.net/wp-content/uploads/2018/06/mountain-silhouette-png-3.png\"></image>\r\n    </GridLayout>\r\n    <GridLayout rows=\"700\">\r\n        <image row=\"0\" src=\"https://colorate.azurewebsites.net/SwatchColor/000000\"></image>\r\n    </GridLayout>\r\n    <GridLayout rows=\"1000\">\r\n        <image row=\"0\" src=\"https://colorate.azurewebsites.net/SwatchColor/000000\"></image>\r\n    </GridLayout>\r\n</GridLayout>\r\n<StackLayout class=\"hr\" height=\"1505px\"></StackLayout>\r\n<StackLayout>\r\n    <BottomNavigation height=\"1900px\">\r\n        <TabStrip>\r\n            <TabStripItem>\r\n                <Label col=\"0\" text=\"&#xf05a;\" class=\"nt-icon fas\"></Label>\r\n            </TabStripItem>\r\n            <TabStripItem>\r\n                <Label col=\"1\" text=\"&#xf041;\" class=\"nt-icon fas\"></Label>\r\n            </TabStripItem>\r\n            <TabStripItem>\r\n                <Label col=\"2\" text=\"&#xf041;\" class=\"nt-icon fas\"></Label>\r\n            </TabStripItem>\r\n        </TabStrip>\r\n    </BottomNavigation>\r\n</StackLayout>\r\n"

/***/ }),

/***/ "./app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tns_core_modules_application__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("tns-core-modules/application");
/* harmony import */ var tns_core_modules_application__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_application__WEBPACK_IMPORTED_MODULE_1__);


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        // Use the component constructor to inject providers.
    }
    HomeComponent.prototype.ngOnInit = function () {
        // Init your component properties here.
    };
    HomeComponent.prototype.onDrawerButtonTap = function () {
        var sideDrawer = tns_core_modules_application__WEBPACK_IMPORTED_MODULE_1__["getRootView"]();
        sideDrawer.showDrawer();
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "Home",
            template: __webpack_require__("./app/home/home.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./app/home/home.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("nativescript-angular/common");
/* harmony import */ var nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/home/home-routing.module.ts");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/home/home.component.ts");




var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1__["NativeScriptCommonModule"],
                _home_routing_module__WEBPACK_IMPORTED_MODULE_2__["HomeRoutingModule"]
            ],
            declarations: [
                _home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
            ],
            schemas: [
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["NO_ERRORS_SCHEMA"]
            ]
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvaG9tZS9ob21lLXJvdXRpbmcubW9kdWxlLnRzIiwid2VicGFjazovLy8uL2FwcC9ob21lL2hvbWUuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL2hvbWUvaG9tZS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2hvbWUvaG9tZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBeUM7QUFFOEI7QUFFdEI7QUFFakQsSUFBTSxNQUFNLEdBQVc7SUFDbkIsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSw2REFBYSxFQUFFO0NBQ3pDLENBQUM7QUFNRjtJQUFBO0lBQWlDLENBQUM7SUFBckIsaUJBQWlCO1FBSjdCLDhEQUFRLENBQUM7WUFDTixPQUFPLEVBQUUsQ0FBQyxvRkFBd0IsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDcEQsT0FBTyxFQUFFLENBQUMsb0ZBQXdCLENBQUM7U0FDdEMsQ0FBQztPQUNXLGlCQUFpQixDQUFJO0lBQUQsd0JBQUM7Q0FBQTtBQUFKOzs7Ozs7OztBQ2Q5Qix3aERBQXdoRCxrSkFBa0osa0pBQWtKLHlJOzs7Ozs7OztBQ0E1ekQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWtEO0FBRUU7QUFNcEQ7SUFFSTtRQUNJLHFEQUFxRDtJQUN6RCxDQUFDO0lBRUQsZ0NBQVEsR0FBUjtRQUNJLHVDQUF1QztJQUMzQyxDQUFDO0lBRUQseUNBQWlCLEdBQWpCO1FBQ0ksSUFBTSxVQUFVLEdBQWtCLHdFQUFlLEVBQUUsQ0FBQztRQUNwRCxVQUFVLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDNUIsQ0FBQztJQWJRLGFBQWE7UUFKekIsK0RBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNO1lBQ2hCLCtEQUFvQztTQUN2QyxDQUFDOztPQUNXLGFBQWEsQ0FjekI7SUFBRCxvQkFBQztDQUFBO0FBZHlCOzs7Ozs7Ozs7QUNSMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUEyRDtBQUNZO0FBRWI7QUFDVDtBQWNqRDtJQUFBO0lBQTBCLENBQUM7SUFBZCxVQUFVO1FBWnRCLDhEQUFRLENBQUM7WUFDTixPQUFPLEVBQUU7Z0JBQ0wsb0ZBQXdCO2dCQUN4QixzRUFBaUI7YUFDcEI7WUFDRCxZQUFZLEVBQUU7Z0JBQ1YsNkRBQWE7YUFDaEI7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsOERBQWdCO2FBQ25CO1NBQ0osQ0FBQztPQUNXLFVBQVUsQ0FBSTtJQUFELGlCQUFDO0NBQUE7QUFBSiIsImZpbGUiOiIyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcclxuXHJcbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tIFwiLi9ob21lLmNvbXBvbmVudFwiO1xyXG5cclxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXHJcbiAgICB7IHBhdGg6IFwiXCIsIGNvbXBvbmVudDogSG9tZUNvbXBvbmVudCB9XHJcbl07XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgaW1wb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JDaGlsZChyb3V0ZXMpXSxcclxuICAgIGV4cG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGVdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBIb21lUm91dGluZ01vZHVsZSB7IH1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxBY3Rpb25CYXI+XFxyXFxuICAgIDwhLS0gXFxyXFxuICAgIFVzZSB0aGUgTmF2aWdhdGlvbkJ1dHRvbiBhcyBhIHNpZGUtZHJhd2VyIGJ1dHRvbiBpbiBBbmRyb2lkXFxyXFxuICAgIGJlY2F1c2UgQWN0aW9uSXRlbXMgYXJlIHNob3duIG9uIHRoZSByaWdodCBzaWRlIG9mIHRoZSBBY3Rpb25CYXJcXHJcXG4gICAgLS0+XFxyXFxuICAgIDxOYXZpZ2F0aW9uQnV0dG9uIGlvczp2aXNpYmlsaXR5PVxcXCJjb2xsYXBzZWRcXFwiIGljb249XFxcInJlczovL21lbnVcXFwiICh0YXApPVxcXCJvbkRyYXdlckJ1dHRvblRhcCgpXFxcIj48L05hdmlnYXRpb25CdXR0b24+XFxyXFxuICAgIDwhLS0gXFxyXFxuICAgIFVzZSB0aGUgQWN0aW9uSXRlbSBmb3IgSU9TIHdpdGggcG9zaXRpb24gc2V0IHRvIGxlZnQuIFVzaW5nIHRoZVxcclxcbiAgICBOYXZpZ2F0aW9uQnV0dG9uIGFzIGEgc2lkZS1kcmF3ZXIgYnV0dG9uIGluIGlPUyBpcyBub3QgcG9zc2libGUsXFxyXFxuICAgIGJlY2F1c2UgaXRzIGZ1bmN0aW9uIGlzIHRvIGFsd2F5cyBuYXZpZ2F0ZSBiYWNrIGluIHRoZSBhcHBsaWNhdGlvbi5cXHJcXG4gICAgLS0+XFxyXFxuICAgIDxBY3Rpb25JdGVtIGljb249XFxcInJlczovL21lbnVcXFwiIGFuZHJvaWQ6dmlzaWJpbGl0eT1cXFwiY29sbGFwc2VkXFxcIiAodGFwKT1cXFwib25EcmF3ZXJCdXR0b25UYXAoKVxcXCJcXHJcXG4gICAgICAgIGlvcy5wb3NpdGlvbj1cXFwibGVmdFxcXCIgPlxcclxcbiAgICA8L0FjdGlvbkl0ZW0+XFxyXFxuICAgIDxMYWJlbCBjbGFzcz1cXFwicGFnZUxhYmVsXFxcIiB0ZXh0PVxcXCJBQ0NVRUlMXFxcIj48L0xhYmVsPlxcclxcbjwvQWN0aW9uQmFyPlxcclxcbjxHcmlkTGF5b3V0IGNsYXNzPVxcXCJwYWdlX19jb250ZW50XFxcIj5cXHJcXG4gICAgPEdyaWRMYXlvdXQgcm93cz1cXFwiNDAwXFxcIj5cXHJcXG4gICAgICAgIDxpbWFnZSByb3c9XFxcIjBcXFwiIHNyYz1cXFwiaHR0cHM6Ly9wbmdpbWFnZS5uZXQvd3AtY29udGVudC91cGxvYWRzLzIwMTgvMDYvbW91bnRhaW4tc2lsaG91ZXR0ZS1wbmctMy5wbmdcXFwiPjwvaW1hZ2U+XFxyXFxuICAgIDwvR3JpZExheW91dD5cXHJcXG4gICAgPEdyaWRMYXlvdXQgcm93cz1cXFwiNzAwXFxcIj5cXHJcXG4gICAgICAgIDxpbWFnZSByb3c9XFxcIjBcXFwiIHNyYz1cXFwiaHR0cHM6Ly9jb2xvcmF0ZS5henVyZXdlYnNpdGVzLm5ldC9Td2F0Y2hDb2xvci8wMDAwMDBcXFwiPjwvaW1hZ2U+XFxyXFxuICAgIDwvR3JpZExheW91dD5cXHJcXG4gICAgPEdyaWRMYXlvdXQgcm93cz1cXFwiMTAwMFxcXCI+XFxyXFxuICAgICAgICA8aW1hZ2Ugcm93PVxcXCIwXFxcIiBzcmM9XFxcImh0dHBzOi8vY29sb3JhdGUuYXp1cmV3ZWJzaXRlcy5uZXQvU3dhdGNoQ29sb3IvMDAwMDAwXFxcIj48L2ltYWdlPlxcclxcbiAgICA8L0dyaWRMYXlvdXQ+XFxyXFxuPC9HcmlkTGF5b3V0PlxcclxcbjxTdGFja0xheW91dCBjbGFzcz1cXFwiaHJcXFwiIGhlaWdodD1cXFwiMTUwNXB4XFxcIj48L1N0YWNrTGF5b3V0PlxcclxcbjxTdGFja0xheW91dD5cXHJcXG4gICAgPEJvdHRvbU5hdmlnYXRpb24gaGVpZ2h0PVxcXCIxOTAwcHhcXFwiPlxcclxcbiAgICAgICAgPFRhYlN0cmlwPlxcclxcbiAgICAgICAgICAgIDxUYWJTdHJpcEl0ZW0+XFxyXFxuICAgICAgICAgICAgICAgIDxMYWJlbCBjb2w9XFxcIjBcXFwiIHRleHQ9XFxcIiYjeGYwNWE7XFxcIiBjbGFzcz1cXFwibnQtaWNvbiBmYXNcXFwiPjwvTGFiZWw+XFxyXFxuICAgICAgICAgICAgPC9UYWJTdHJpcEl0ZW0+XFxyXFxuICAgICAgICAgICAgPFRhYlN0cmlwSXRlbT5cXHJcXG4gICAgICAgICAgICAgICAgPExhYmVsIGNvbD1cXFwiMVxcXCIgdGV4dD1cXFwiJiN4ZjA0MTtcXFwiIGNsYXNzPVxcXCJudC1pY29uIGZhc1xcXCI+PC9MYWJlbD5cXHJcXG4gICAgICAgICAgICA8L1RhYlN0cmlwSXRlbT5cXHJcXG4gICAgICAgICAgICA8VGFiU3RyaXBJdGVtPlxcclxcbiAgICAgICAgICAgICAgICA8TGFiZWwgY29sPVxcXCIyXFxcIiB0ZXh0PVxcXCImI3hmMDQxO1xcXCIgY2xhc3M9XFxcIm50LWljb24gZmFzXFxcIj48L0xhYmVsPlxcclxcbiAgICAgICAgICAgIDwvVGFiU3RyaXBJdGVtPlxcclxcbiAgICAgICAgPC9UYWJTdHJpcD5cXHJcXG4gICAgPC9Cb3R0b21OYXZpZ2F0aW9uPlxcclxcbjwvU3RhY2tMYXlvdXQ+XFxyXFxuXCIiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXIgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLXNpZGVkcmF3ZXJcIjtcclxuaW1wb3J0ICogYXMgYXBwIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIkhvbWVcIixcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vaG9tZS5jb21wb25lbnQuaHRtbFwiXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICAvLyBVc2UgdGhlIGNvbXBvbmVudCBjb25zdHJ1Y3RvciB0byBpbmplY3QgcHJvdmlkZXJzLlxyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgICAgIC8vIEluaXQgeW91ciBjb21wb25lbnQgcHJvcGVydGllcyBoZXJlLlxyXG4gICAgfVxyXG5cclxuICAgIG9uRHJhd2VyQnV0dG9uVGFwKCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IHNpZGVEcmF3ZXIgPSA8UmFkU2lkZURyYXdlcj5hcHAuZ2V0Um9vdFZpZXcoKTtcclxuICAgICAgICBzaWRlRHJhd2VyLnNob3dEcmF3ZXIoKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9jb21tb25cIjtcclxuXHJcbmltcG9ydCB7IEhvbWVSb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vaG9tZS1yb3V0aW5nLm1vZHVsZVwiO1xyXG5pbXBvcnQgeyBIb21lQ29tcG9uZW50IH0gZnJvbSBcIi4vaG9tZS5jb21wb25lbnRcIjtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBpbXBvcnRzOiBbXHJcbiAgICAgICAgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlLFxyXG4gICAgICAgIEhvbWVSb3V0aW5nTW9kdWxlXHJcbiAgICBdLFxyXG4gICAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICAgICAgSG9tZUNvbXBvbmVudFxyXG4gICAgXSxcclxuICAgIHNjaGVtYXM6IFtcclxuICAgICAgICBOT19FUlJPUlNfU0NIRU1BXHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBIb21lTW9kdWxlIHsgfVxyXG4iXSwic291cmNlUm9vdCI6IiJ9