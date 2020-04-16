(global["webpackJsonp"] = global["webpackJsonp"] || []).push([[9],{

/***/ "./app/browse/browse-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrowseRoutingModule", function() { return BrowseRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("nativescript-angular/router");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _browse_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/browse/browse.component.ts");



var routes = [
    { path: "", component: _browse_component__WEBPACK_IMPORTED_MODULE_2__["BrowseComponent"] }
];
var BrowseRoutingModule = /** @class */ (function () {
    function BrowseRoutingModule() {
    }
    BrowseRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"].forChild(routes)],
            exports: [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"]]
        })
    ], BrowseRoutingModule);
    return BrowseRoutingModule;
}());



/***/ }),

/***/ "./app/browse/browse.component.html":
/***/ (function(module, exports) {

module.exports = "<ActionBar>\r\n    <!-- \r\n    Use the NavigationButton as a side-drawer button in Android\r\n    because ActionItems are shown on the right side of the ActionBar\r\n    -->\r\n    <NavigationButton ios:visibility=\"collapsed\" icon=\"res://menu\" (tap)=\"onDrawerButtonTap()\"></NavigationButton>\r\n    <!-- \r\n    Use the ActionItem for IOS with position set to left. Using the\r\n    NavigationButton as a side-drawer button in iOS is not possible,\r\n    because its function is to always navigate back in the application.\r\n    -->\r\n    <ActionItem icon=\"res://menu\" android:visibility=\"collapsed\" (tap)=\"onDrawerButtonTap()\"\r\n        ios.position=\"left\" >\r\n    </ActionItem>\r\n    <Label class=\"pageLabel\" text=\"BIENVENUE !\"></Label>\r\n</ActionBar>\r\n<StackLayout>\r\n<GridLayout class=\"page__content\">\r\n    <GridLayout>\r\n       \r\n        <!-- <image src=\"~/images/localisation.png\" stretch=\"aspectFit\"></image> -->\r\n    </GridLayout>\r\n    <GridLayout rows=\"400\">\r\n        <image row=\"0\" src=\"https://pngimage.net/wp-content/uploads/2018/06/mountain-silhouette-png-3.png\"></image>\r\n    </GridLayout>\r\n    <GridLayout rows=\"850\">\r\n        <ContentView row=\"0\" id=\"cache_noir\" width=\"1500px\" height=\"950px\" backgroundColor=\"#000000\"></ContentView>\r\n        <Label row=\"1\" class=\"entete\" text=\"Skier en toute sécurité\"></Label>\r\n         <!-- <Label row=\"2\" text=\"&#xf002;\" class=\"nt-icon-3\"></Label> -->\r\n        <ContentView row=\"2\" id=\"champs_choix_station\" width=\"800px\" height=\"150px\" ></ContentView>\r\n    </GridLayout>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n    <!-- <GridLayout rows=\"700\">\r\n        <image row=\"0\" src=\"https://colorate.azurewebsites.net/SwatchColor/000000\"></image>\r\n        <Label row=\"1\" class=\"entete\" text=\"Skier en toute sécurité\"></Label>\r\n         <Label row=\"2\" text=\"&#xf002;\" class=\"nt-icon-3\"></Label> -->\r\n        <!-- <ContentView row=\"2\" id=\"champs_choix_station\" width=\"800px\" height=\"150px\" ></ContentView>\r\n    </GridLayout>\r\n    <GridLayout rows=\"1000\">\r\n        <image row=\"0\" src=\"https://colorate.azurewebsites.net/SwatchColor/000000\"></image>  \r\n    </GridLayout> -->\r\n</GridLayout>\r\n</StackLayout>\r\n    <StackLayout class=\"hr\" height=\"1485px\"></StackLayout>\r\n<StackLayout>\r\n    <BottomNavigation height=\"100%\">\r\n        <TabStrip>\r\n            <TabStripItem>\r\n                <Label col=\"0\" text=\"&#xf05a;\" class=\"nt-icon fas\"></Label>\r\n            </TabStripItem>\r\n            <TabStripItem>\r\n                <Label col=\"1\" text=\"&#xf041;\" class=\"nt-icon fas\"></Label>\r\n            </TabStripItem>\r\n            <TabStripItem>\r\n                <Label col=\"2\" text=\"&#xf3c5;\" class=\"nt-icon fas\"></Label>\r\n            </TabStripItem>\r\n        </TabStrip>\r\n    </BottomNavigation>\r\n</StackLayout>\r\n\r\n\r\n\r\n\r\n<!-- <StackLayout>\r\n<GridLayout class=\"page__content\" >\r\n   \r\n    <Label class=\"page__content-placeholder\" text=\"Conditions generals d'utilisations\" row=\"0\" color=\"black\"></Label>\r\n    <label class=\"page__content-placeholder\" text=\"j'accepte les conditions générales d'utilisations\" color=\"black\"\r\n        row=\"1\"></label> \r\n    \r\n        <Button  [visibility]=\"elementModel.valid ? 'visible' : 'collapse'\" text=\"Creer Mon Compte\"\r\n            class=\"boutoncompte\"></Button>\r\n\r\n</GridLayout>\r\n</StackLayout> -->\r\n\r\n\r\n\r\n<!-- <StackLayout>\r\n<GridLayout rows=\"50, 50\">\r\n    <Label row=\"0\" text=\"Pierre\" class=\"p-r-10\"></Label>\r\n    <Label row=\"1\" text=\"Thomain\" class=\"p-r-10\"></Label>\r\n</GridLayout>\r\n\r\n\r\n\r\n<Button text=\"Créer mon compte\" class=\"bouton\"></Button> \r\n\r\n</StackLayout> -->"

/***/ }),

/***/ "./app/browse/browse.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrowseComponent", function() { return BrowseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tns_core_modules_application__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("tns-core-modules/application");
/* harmony import */ var tns_core_modules_application__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_application__WEBPACK_IMPORTED_MODULE_1__);


var BrowseComponent = /** @class */ (function () {
    function BrowseComponent() {
        // Use the component constructor to inject providers.
    }
    BrowseComponent.prototype.ngOnInit = function () {
        // Init your component properties here.
    };
    BrowseComponent.prototype.onDrawerButtonTap = function () {
        var sideDrawer = tns_core_modules_application__WEBPACK_IMPORTED_MODULE_1__["getRootView"]();
        sideDrawer.showDrawer();
    };
    BrowseComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "Browse",
            template: __webpack_require__("./app/browse/browse.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], BrowseComponent);
    return BrowseComponent;
}());



/***/ }),

/***/ "./app/browse/browse.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrowseModule", function() { return BrowseModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("nativescript-angular/common");
/* harmony import */ var nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _browse_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/browse/browse-routing.module.ts");
/* harmony import */ var _browse_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/browse/browse.component.ts");




var BrowseModule = /** @class */ (function () {
    function BrowseModule() {
    }
    BrowseModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1__["NativeScriptCommonModule"],
                _browse_routing_module__WEBPACK_IMPORTED_MODULE_2__["BrowseRoutingModule"]
            ],
            declarations: [
                _browse_component__WEBPACK_IMPORTED_MODULE_3__["BrowseComponent"]
            ],
            schemas: [
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["NO_ERRORS_SCHEMA"]
            ]
        })
    ], BrowseModule);
    return BrowseModule;
}());



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvYnJvd3NlL2Jyb3dzZS1yb3V0aW5nLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9hcHAvYnJvd3NlL2Jyb3dzZS5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hcHAvYnJvd3NlL2Jyb3dzZS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2Jyb3dzZS9icm93c2UubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXlDO0FBRThCO0FBRWxCO0FBRXJELElBQU0sTUFBTSxHQUFXO0lBQ25CLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsaUVBQWUsRUFBRTtDQUMzQyxDQUFDO0FBTUY7SUFBQTtJQUFtQyxDQUFDO0lBQXZCLG1CQUFtQjtRQUovQiw4REFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFLENBQUMsb0ZBQXdCLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3BELE9BQU8sRUFBRSxDQUFDLG9GQUF3QixDQUFDO1NBQ3RDLENBQUM7T0FDVyxtQkFBbUIsQ0FBSTtJQUFELDBCQUFDO0NBQUE7QUFBSjs7Ozs7Ozs7QUNkaEMsaThDQUFpOEMsZ2RBQWdkLG9sQkFBb2xCLGtKQUFrSixrSkFBa0oscWdDOzs7Ozs7OztBQ0F6d0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWtEO0FBRUU7QUFNcEQ7SUFFSTtRQUNJLHFEQUFxRDtJQUN6RCxDQUFDO0lBRUQsa0NBQVEsR0FBUjtRQUNJLHVDQUF1QztJQUMzQyxDQUFDO0lBRUQsMkNBQWlCLEdBQWpCO1FBQ0ksSUFBTSxVQUFVLEdBQWtCLHdFQUFlLEVBQUUsQ0FBQztRQUNwRCxVQUFVLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDNUIsQ0FBQztJQWJRLGVBQWU7UUFKM0IsK0RBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLG1FQUFzQztTQUN6QyxDQUFDOztPQUNXLGVBQWUsQ0FjM0I7SUFBRCxzQkFBQztDQUFBO0FBZDJCOzs7Ozs7Ozs7QUNSNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUEyRDtBQUNZO0FBRVQ7QUFDVDtBQWNyRDtJQUFBO0lBQTRCLENBQUM7SUFBaEIsWUFBWTtRQVp4Qiw4REFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFO2dCQUNMLG9GQUF3QjtnQkFDeEIsMEVBQW1CO2FBQ3RCO1lBQ0QsWUFBWSxFQUFFO2dCQUNWLGlFQUFlO2FBQ2xCO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLDhEQUFnQjthQUNuQjtTQUNKLENBQUM7T0FDVyxZQUFZLENBQUk7SUFBRCxtQkFBQztDQUFBO0FBQUoiLCJmaWxlIjoiOS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVzIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XHJcblxyXG5pbXBvcnQgeyBCcm93c2VDb21wb25lbnQgfSBmcm9tIFwiLi9icm93c2UuY29tcG9uZW50XCI7XHJcblxyXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcclxuICAgIHsgcGF0aDogXCJcIiwgY29tcG9uZW50OiBCcm93c2VDb21wb25lbnQgfVxyXG5dO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGltcG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQocm91dGVzKV0sXHJcbiAgICBleHBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQnJvd3NlUm91dGluZ01vZHVsZSB7IH1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxBY3Rpb25CYXI+XFxyXFxuICAgIDwhLS0gXFxyXFxuICAgIFVzZSB0aGUgTmF2aWdhdGlvbkJ1dHRvbiBhcyBhIHNpZGUtZHJhd2VyIGJ1dHRvbiBpbiBBbmRyb2lkXFxyXFxuICAgIGJlY2F1c2UgQWN0aW9uSXRlbXMgYXJlIHNob3duIG9uIHRoZSByaWdodCBzaWRlIG9mIHRoZSBBY3Rpb25CYXJcXHJcXG4gICAgLS0+XFxyXFxuICAgIDxOYXZpZ2F0aW9uQnV0dG9uIGlvczp2aXNpYmlsaXR5PVxcXCJjb2xsYXBzZWRcXFwiIGljb249XFxcInJlczovL21lbnVcXFwiICh0YXApPVxcXCJvbkRyYXdlckJ1dHRvblRhcCgpXFxcIj48L05hdmlnYXRpb25CdXR0b24+XFxyXFxuICAgIDwhLS0gXFxyXFxuICAgIFVzZSB0aGUgQWN0aW9uSXRlbSBmb3IgSU9TIHdpdGggcG9zaXRpb24gc2V0IHRvIGxlZnQuIFVzaW5nIHRoZVxcclxcbiAgICBOYXZpZ2F0aW9uQnV0dG9uIGFzIGEgc2lkZS1kcmF3ZXIgYnV0dG9uIGluIGlPUyBpcyBub3QgcG9zc2libGUsXFxyXFxuICAgIGJlY2F1c2UgaXRzIGZ1bmN0aW9uIGlzIHRvIGFsd2F5cyBuYXZpZ2F0ZSBiYWNrIGluIHRoZSBhcHBsaWNhdGlvbi5cXHJcXG4gICAgLS0+XFxyXFxuICAgIDxBY3Rpb25JdGVtIGljb249XFxcInJlczovL21lbnVcXFwiIGFuZHJvaWQ6dmlzaWJpbGl0eT1cXFwiY29sbGFwc2VkXFxcIiAodGFwKT1cXFwib25EcmF3ZXJCdXR0b25UYXAoKVxcXCJcXHJcXG4gICAgICAgIGlvcy5wb3NpdGlvbj1cXFwibGVmdFxcXCIgPlxcclxcbiAgICA8L0FjdGlvbkl0ZW0+XFxyXFxuICAgIDxMYWJlbCBjbGFzcz1cXFwicGFnZUxhYmVsXFxcIiB0ZXh0PVxcXCJCSUVOVkVOVUUgIVxcXCI+PC9MYWJlbD5cXHJcXG48L0FjdGlvbkJhcj5cXHJcXG48U3RhY2tMYXlvdXQ+XFxyXFxuPEdyaWRMYXlvdXQgY2xhc3M9XFxcInBhZ2VfX2NvbnRlbnRcXFwiPlxcclxcbiAgICA8R3JpZExheW91dD5cXHJcXG4gICAgICAgXFxyXFxuICAgICAgICA8IS0tIDxpbWFnZSBzcmM9XFxcIn4vaW1hZ2VzL2xvY2FsaXNhdGlvbi5wbmdcXFwiIHN0cmV0Y2g9XFxcImFzcGVjdEZpdFxcXCI+PC9pbWFnZT4gLS0+XFxyXFxuICAgIDwvR3JpZExheW91dD5cXHJcXG4gICAgPEdyaWRMYXlvdXQgcm93cz1cXFwiNDAwXFxcIj5cXHJcXG4gICAgICAgIDxpbWFnZSByb3c9XFxcIjBcXFwiIHNyYz1cXFwiaHR0cHM6Ly9wbmdpbWFnZS5uZXQvd3AtY29udGVudC91cGxvYWRzLzIwMTgvMDYvbW91bnRhaW4tc2lsaG91ZXR0ZS1wbmctMy5wbmdcXFwiPjwvaW1hZ2U+XFxyXFxuICAgIDwvR3JpZExheW91dD5cXHJcXG4gICAgPEdyaWRMYXlvdXQgcm93cz1cXFwiODUwXFxcIj5cXHJcXG4gICAgICAgIDxDb250ZW50VmlldyByb3c9XFxcIjBcXFwiIGlkPVxcXCJjYWNoZV9ub2lyXFxcIiB3aWR0aD1cXFwiMTUwMHB4XFxcIiBoZWlnaHQ9XFxcIjk1MHB4XFxcIiBiYWNrZ3JvdW5kQ29sb3I9XFxcIiMwMDAwMDBcXFwiPjwvQ29udGVudFZpZXc+XFxyXFxuICAgICAgICA8TGFiZWwgcm93PVxcXCIxXFxcIiBjbGFzcz1cXFwiZW50ZXRlXFxcIiB0ZXh0PVxcXCJTa2llciBlbiB0b3V0ZSBzw6ljdXJpdMOpXFxcIj48L0xhYmVsPlxcclxcbiAgICAgICAgIDwhLS0gPExhYmVsIHJvdz1cXFwiMlxcXCIgdGV4dD1cXFwiJiN4ZjAwMjtcXFwiIGNsYXNzPVxcXCJudC1pY29uLTNcXFwiPjwvTGFiZWw+IC0tPlxcclxcbiAgICAgICAgPENvbnRlbnRWaWV3IHJvdz1cXFwiMlxcXCIgaWQ9XFxcImNoYW1wc19jaG9peF9zdGF0aW9uXFxcIiB3aWR0aD1cXFwiODAwcHhcXFwiIGhlaWdodD1cXFwiMTUwcHhcXFwiID48L0NvbnRlbnRWaWV3PlxcclxcbiAgICA8L0dyaWRMYXlvdXQ+XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuICAgIDwhLS0gPEdyaWRMYXlvdXQgcm93cz1cXFwiNzAwXFxcIj5cXHJcXG4gICAgICAgIDxpbWFnZSByb3c9XFxcIjBcXFwiIHNyYz1cXFwiaHR0cHM6Ly9jb2xvcmF0ZS5henVyZXdlYnNpdGVzLm5ldC9Td2F0Y2hDb2xvci8wMDAwMDBcXFwiPjwvaW1hZ2U+XFxyXFxuICAgICAgICA8TGFiZWwgcm93PVxcXCIxXFxcIiBjbGFzcz1cXFwiZW50ZXRlXFxcIiB0ZXh0PVxcXCJTa2llciBlbiB0b3V0ZSBzw6ljdXJpdMOpXFxcIj48L0xhYmVsPlxcclxcbiAgICAgICAgIDxMYWJlbCByb3c9XFxcIjJcXFwiIHRleHQ9XFxcIiYjeGYwMDI7XFxcIiBjbGFzcz1cXFwibnQtaWNvbi0zXFxcIj48L0xhYmVsPiAtLT5cXHJcXG4gICAgICAgIDwhLS0gPENvbnRlbnRWaWV3IHJvdz1cXFwiMlxcXCIgaWQ9XFxcImNoYW1wc19jaG9peF9zdGF0aW9uXFxcIiB3aWR0aD1cXFwiODAwcHhcXFwiIGhlaWdodD1cXFwiMTUwcHhcXFwiID48L0NvbnRlbnRWaWV3PlxcclxcbiAgICA8L0dyaWRMYXlvdXQ+XFxyXFxuICAgIDxHcmlkTGF5b3V0IHJvd3M9XFxcIjEwMDBcXFwiPlxcclxcbiAgICAgICAgPGltYWdlIHJvdz1cXFwiMFxcXCIgc3JjPVxcXCJodHRwczovL2NvbG9yYXRlLmF6dXJld2Vic2l0ZXMubmV0L1N3YXRjaENvbG9yLzAwMDAwMFxcXCI+PC9pbWFnZT4gIFxcclxcbiAgICA8L0dyaWRMYXlvdXQ+IC0tPlxcclxcbjwvR3JpZExheW91dD5cXHJcXG48L1N0YWNrTGF5b3V0PlxcclxcbiAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcImhyXFxcIiBoZWlnaHQ9XFxcIjE0ODVweFxcXCI+PC9TdGFja0xheW91dD5cXHJcXG48U3RhY2tMYXlvdXQ+XFxyXFxuICAgIDxCb3R0b21OYXZpZ2F0aW9uIGhlaWdodD1cXFwiMTAwJVxcXCI+XFxyXFxuICAgICAgICA8VGFiU3RyaXA+XFxyXFxuICAgICAgICAgICAgPFRhYlN0cmlwSXRlbT5cXHJcXG4gICAgICAgICAgICAgICAgPExhYmVsIGNvbD1cXFwiMFxcXCIgdGV4dD1cXFwiJiN4ZjA1YTtcXFwiIGNsYXNzPVxcXCJudC1pY29uIGZhc1xcXCI+PC9MYWJlbD5cXHJcXG4gICAgICAgICAgICA8L1RhYlN0cmlwSXRlbT5cXHJcXG4gICAgICAgICAgICA8VGFiU3RyaXBJdGVtPlxcclxcbiAgICAgICAgICAgICAgICA8TGFiZWwgY29sPVxcXCIxXFxcIiB0ZXh0PVxcXCImI3hmMDQxO1xcXCIgY2xhc3M9XFxcIm50LWljb24gZmFzXFxcIj48L0xhYmVsPlxcclxcbiAgICAgICAgICAgIDwvVGFiU3RyaXBJdGVtPlxcclxcbiAgICAgICAgICAgIDxUYWJTdHJpcEl0ZW0+XFxyXFxuICAgICAgICAgICAgICAgIDxMYWJlbCBjb2w9XFxcIjJcXFwiIHRleHQ9XFxcIiYjeGYzYzU7XFxcIiBjbGFzcz1cXFwibnQtaWNvbiBmYXNcXFwiPjwvTGFiZWw+XFxyXFxuICAgICAgICAgICAgPC9UYWJTdHJpcEl0ZW0+XFxyXFxuICAgICAgICA8L1RhYlN0cmlwPlxcclxcbiAgICA8L0JvdHRvbU5hdmlnYXRpb24+XFxyXFxuPC9TdGFja0xheW91dD5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG48IS0tIDxTdGFja0xheW91dD5cXHJcXG48R3JpZExheW91dCBjbGFzcz1cXFwicGFnZV9fY29udGVudFxcXCIgPlxcclxcbiAgIFxcclxcbiAgICA8TGFiZWwgY2xhc3M9XFxcInBhZ2VfX2NvbnRlbnQtcGxhY2Vob2xkZXJcXFwiIHRleHQ9XFxcIkNvbmRpdGlvbnMgZ2VuZXJhbHMgZCd1dGlsaXNhdGlvbnNcXFwiIHJvdz1cXFwiMFxcXCIgY29sb3I9XFxcImJsYWNrXFxcIj48L0xhYmVsPlxcclxcbiAgICA8bGFiZWwgY2xhc3M9XFxcInBhZ2VfX2NvbnRlbnQtcGxhY2Vob2xkZXJcXFwiIHRleHQ9XFxcImonYWNjZXB0ZSBsZXMgY29uZGl0aW9ucyBnw6luw6lyYWxlcyBkJ3V0aWxpc2F0aW9uc1xcXCIgY29sb3I9XFxcImJsYWNrXFxcIlxcclxcbiAgICAgICAgcm93PVxcXCIxXFxcIj48L2xhYmVsPiBcXHJcXG4gICAgXFxyXFxuICAgICAgICA8QnV0dG9uICBbdmlzaWJpbGl0eV09XFxcImVsZW1lbnRNb2RlbC52YWxpZCA/ICd2aXNpYmxlJyA6ICdjb2xsYXBzZSdcXFwiIHRleHQ9XFxcIkNyZWVyIE1vbiBDb21wdGVcXFwiXFxyXFxuICAgICAgICAgICAgY2xhc3M9XFxcImJvdXRvbmNvbXB0ZVxcXCI+PC9CdXR0b24+XFxyXFxuXFxyXFxuPC9HcmlkTGF5b3V0PlxcclxcbjwvU3RhY2tMYXlvdXQ+IC0tPlxcclxcblxcclxcblxcclxcblxcclxcbjwhLS0gPFN0YWNrTGF5b3V0PlxcclxcbjxHcmlkTGF5b3V0IHJvd3M9XFxcIjUwLCA1MFxcXCI+XFxyXFxuICAgIDxMYWJlbCByb3c9XFxcIjBcXFwiIHRleHQ9XFxcIlBpZXJyZVxcXCIgY2xhc3M9XFxcInAtci0xMFxcXCI+PC9MYWJlbD5cXHJcXG4gICAgPExhYmVsIHJvdz1cXFwiMVxcXCIgdGV4dD1cXFwiVGhvbWFpblxcXCIgY2xhc3M9XFxcInAtci0xMFxcXCI+PC9MYWJlbD5cXHJcXG48L0dyaWRMYXlvdXQ+XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuPEJ1dHRvbiB0ZXh0PVxcXCJDcsOpZXIgbW9uIGNvbXB0ZVxcXCIgY2xhc3M9XFxcImJvdXRvblxcXCI+PC9CdXR0b24+IFxcclxcblxcclxcbjwvU3RhY2tMYXlvdXQ+IC0tPlwiIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyXCI7XHJcbmltcG9ydCAqIGFzIGFwcCBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvblwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJCcm93c2VcIixcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vYnJvd3NlLmNvbXBvbmVudC5odG1sXCJcclxufSlcclxuZXhwb3J0IGNsYXNzIEJyb3dzZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgLy8gVXNlIHRoZSBjb21wb25lbnQgY29uc3RydWN0b3IgdG8gaW5qZWN0IHByb3ZpZGVycy5cclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgICAgICAvLyBJbml0IHlvdXIgY29tcG9uZW50IHByb3BlcnRpZXMgaGVyZS5cclxuICAgIH1cclxuXHJcbiAgICBvbkRyYXdlckJ1dHRvblRhcCgpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBzaWRlRHJhd2VyID0gPFJhZFNpZGVEcmF3ZXI+YXBwLmdldFJvb3RWaWV3KCk7XHJcbiAgICAgICAgc2lkZURyYXdlci5zaG93RHJhd2VyKCk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvY29tbW9uXCI7XHJcblxyXG5pbXBvcnQgeyBCcm93c2VSb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vYnJvd3NlLXJvdXRpbmcubW9kdWxlXCI7XHJcbmltcG9ydCB7IEJyb3dzZUNvbXBvbmVudCB9IGZyb20gXCIuL2Jyb3dzZS5jb21wb25lbnRcIjtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBpbXBvcnRzOiBbXHJcbiAgICAgICAgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlLFxyXG4gICAgICAgIEJyb3dzZVJvdXRpbmdNb2R1bGVcclxuICAgIF0sXHJcbiAgICBkZWNsYXJhdGlvbnM6IFtcclxuICAgICAgICBCcm93c2VDb21wb25lbnRcclxuICAgIF0sXHJcbiAgICBzY2hlbWFzOiBbXHJcbiAgICAgICAgTk9fRVJST1JTX1NDSEVNQVxyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQnJvd3NlTW9kdWxlIHsgfVxyXG4iXSwic291cmNlUm9vdCI6IiJ9