(global["webpackJsonp"] = global["webpackJsonp"] || []).push([[0],{

/***/ "./app/bienvenue/bienvenue-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BienvenueRoutingModule", function() { return BienvenueRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("nativescript-angular/router");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _bienvenue_bienvenue_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/bienvenue/bienvenue/bienvenue.component.ts");



var routes = [
    { path: "", component: _bienvenue_bienvenue_component__WEBPACK_IMPORTED_MODULE_2__["BienvenueComponent"] }
];
var BienvenueRoutingModule = /** @class */ (function () {
    function BienvenueRoutingModule() {
    }
    BienvenueRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"].forChild(routes)],
            exports: [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"]]
        })
    ], BienvenueRoutingModule);
    return BienvenueRoutingModule;
}());



/***/ }),

/***/ "./app/bienvenue/bienvenue.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BienvenueModule", function() { return BienvenueModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bienvenue_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./app/bienvenue/bienvenue-routing.module.ts");
/* harmony import */ var nativescript_angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("nativescript-angular/common");
/* harmony import */ var nativescript_angular_common__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_common__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _bienvenue_bienvenue_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/bienvenue/bienvenue/bienvenue.component.ts");




var BienvenueModule = /** @class */ (function () {
    function BienvenueModule() {
    }
    BienvenueModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_bienvenue_bienvenue_component__WEBPACK_IMPORTED_MODULE_3__["BienvenueComponent"]],
            imports: [
                _bienvenue_routing_module__WEBPACK_IMPORTED_MODULE_1__["BienvenueRoutingModule"],
                nativescript_angular_common__WEBPACK_IMPORTED_MODULE_2__["NativeScriptCommonModule"]
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NO_ERRORS_SCHEMA"]]
        })
    ], BienvenueModule);
    return BienvenueModule;
}());



/***/ }),

/***/ "./app/bienvenue/bienvenue/bienvenue.component.css":
/***/ (function(module, exports) {

module.exports = "/* Add mobile styles for the component here.  */\n"

/***/ }),

/***/ "./app/bienvenue/bienvenue/bienvenue.component.html":
/***/ (function(module, exports) {

module.exports = "<ActionBar>\n    <!-- \n    Use the NavigationButton as a side-drawer button in Android\n    because ActionItems are shown on the right side of the ActionBar\n    -->\n    <NavigationButton ios:visibility=\"collapsed\" icon=\"res://menu\" (tap)=\"onDrawerButtonTap()\"></NavigationButton>\n    <!-- \n    Use the ActionItem for IOS with position set to left. Using the\n    NavigationButton as a side-drawer button in iOS is not possible,\n    because its function is to always navigate back in the application.\n    -->\n    <ActionItem icon=\"res://menu\" android:visibility=\"collapsed\" (tap)=\"onDrawerButtonTap()\"\n        ios.position=\"left\" >\n    </ActionItem>\n    <Label class=\"pageLabel\" text=\"\"></Label>\n</ActionBar>\n<StackLayout>\n<GridLayout class=\"page__content\">\n\n    <GridLayout rows=\"400\">\n        <image row=\"0\" src=\"https://pngimage.net/wp-content/uploads/2018/06/mountain-silhouette-png-3.png\"></image>\n    </GridLayout>\n    <GridLayout rows=\"850\">\n        <ContentView row=\"0\" id=\"cache_noir\" width=\"1500px\" height=\"1000px\" backgroundColor=\"#000000\"></ContentView>\n        <ContentView row=\"1\" id=\"message_accueil\" width=\"1000px\" height=\"550px\" backgroundColor=\"#433B3B\" ></ContentView>\n        <Label row=\"2\" class=\"entete2\" text=\"Bienvenue !\"></Label>\n        <!-- <ContentView row=\"2\" id=\"message_accueil\" width=\"1000px\" height=\"550px\" backgroundColor=\"#433B3B\" ></ContentView> -->\n        <Label row=\"3\" class=\"entete3\" text=\"Créez votre compte et profitez en toute liberté des fonctionnalités de votre application Skiview\" textWrap=\"true\"></Label>\n        <Button row=\"4\" text=\"CREER UN COMPTE\" class=\"btn_creer_un_compte\"></Button> \n\n\n\n        <!-- <Label row=\"1\" class=\"entete\" text=\"Skier en toute sécurité\"></Label>\n         <Label row=\"2\" text=\"&#xf002;\" class=\"nt-icon-3\"></Label>\n        <ContentView row=\"2\" id=\"champs_choix_station\" width=\"800px\" height=\"150px\" ></ContentView>\n    </GridLayout> -->\n\n\n\n\n\n\n\n\n\n\n\n\n    <!-- <GridLayout>\n       \n\n    </GridLayout>\n    <GridLayout rows=\"400\">\n        <Slider value=\"10\" minValue=\"0\" maxValue=\"100\" backgroundColor=\"green\"color=\"red\" />\n        <image row=\"0\" src=\"https://pngimage.net/wp-content/uploads/2018/06/mountain-silhouette-png-3.png\"></image>\n    </GridLayout>\n    <GridLayout rows=\"700\">\n        <image row=\"0\" src=\"https://colorate.azurewebsites.net/SwatchColor/000000\"></image>\n        <Label row=\"1\" class=\"entete\" text=\"Bienvenue !\"></Label>\n        <Label row=\"2\" class=\"entete\" text=\"Créez votre compte et profitez en toute liberté des fonctionnalités de votre application Skiview\"></Label>\n        <ContentView row=\"3\" id=\"champs_choix_station\" width=\"1000px\" height=\"270px\" ></ContentView>\n    </GridLayout> -->\n    <!-- <GridLayout rows=\"1000\">\n        <image row=\"0\" src=\"https://colorate.azurewebsites.net/SwatchColor/000000\"></image> \n        <Button row=\"1\" text=\"CREER UN COMPTE\" class=\"btn btn-warning\"></Button>  --> -->\n        \n\n \n    </GridLayout>\n</GridLayout>\n</StackLayout>\n<StackLayout class=\"hr\" height=\"1505px\"></StackLayout>\n<StackLayout>\n    <BottomNavigation height=\"1900px\">\n        <TabStrip>\n            <TabStripItem>\n                <Label col=\"0\" text=\"&#xf05a;\" class=\"nt-icon fas\"></Label>\n            </TabStripItem>\n            <TabStripItem>\n                <Label col=\"1\" text=\"&#xf041;\" class=\"nt-icon fas\"></Label>\n            </TabStripItem>\n            <TabStripItem>\n                <Label col=\"2\" text=\"&#xf3c5;\" class=\"nt-icon fas\"></Label>\n            </TabStripItem>\n        </TabStrip>\n    </BottomNavigation>\n</StackLayout>\n\n\n\n\n<!-- <ScrollView orientation=\"vertical\" class=\"coverImage\">\n    <GridLayout rows=\"300 300 300 300\">\n        <Label class=\"SEVERE\" row=\"0\" text=\"BLESSURE SEVERE\" textWrap=\"true\"></Label>\n        <Label class=\"SERIEUSE\" row=\"1\" text=\"BLESSURE SERIEUSE\" textWrap=\"true\"></Label>\n        <ContentView class=\"cadre_choix\" row=\"1\"  text=\"\" width=\"300px\" height=\"300px\" color=\"black\" backgroundColor=\"\"></ContentView>\n        <Label class=\"MODEREE\" row=\"2\" text=\"BLESSURE MODEREE\" textWrap=\"true\"></Label>\n        <Label class=\"LEGERE\" row=\"3\" text=\"BLESSURE LEGERE\" textWrap=\"true\"></Label>\n        \n    </GridLayout>\n</ScrollView> -->"

/***/ }),

/***/ "./app/bienvenue/bienvenue/bienvenue.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BienvenueComponent", function() { return BienvenueComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);

var BienvenueComponent = /** @class */ (function () {
    function BienvenueComponent() {
    }
    BienvenueComponent.prototype.ngOnInit = function () {
    };
    BienvenueComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ns-bienvenue',
            template: __webpack_require__("./app/bienvenue/bienvenue/bienvenue.component.html"),
            styles: [__webpack_require__("./app/bienvenue/bienvenue/bienvenue.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BienvenueComponent);
    return BienvenueComponent;
}());



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvYmllbnZlbnVlL2JpZW52ZW51ZS1yb3V0aW5nLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9hcHAvYmllbnZlbnVlL2JpZW52ZW51ZS5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2JpZW52ZW51ZS9iaWVudmVudWUvYmllbnZlbnVlLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL2JpZW52ZW51ZS9iaWVudmVudWUvYmllbnZlbnVlLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC9iaWVudmVudWUvYmllbnZlbnVlL2JpZW52ZW51ZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBeUM7QUFFOEI7QUFDRjtBQUdyRSxJQUFNLE1BQU0sR0FBVztJQUNyQixFQUFDLElBQUksRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFDLGlGQUFrQixFQUFDO0NBQ3pDLENBQUM7QUFNRjtJQUFBO0lBQXNDLENBQUM7SUFBMUIsc0JBQXNCO1FBSmxDLDhEQUFRLENBQUM7WUFDUixPQUFPLEVBQUUsQ0FBQyxvRkFBd0IsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDcEQsT0FBTyxFQUFFLENBQUMsb0ZBQXdCLENBQUM7U0FDcEMsQ0FBQztPQUNXLHNCQUFzQixDQUFJO0lBQUQsNkJBQUM7Q0FBQTtBQUFKOzs7Ozs7Ozs7QUNkbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUEyRDtBQUVTO0FBQ0c7QUFDRjtBQVdyRTtJQUFBO0lBQStCLENBQUM7SUFBbkIsZUFBZTtRQVIzQiw4REFBUSxDQUFDO1lBQ1IsWUFBWSxFQUFFLENBQUMsaUZBQWtCLENBQUM7WUFDbEMsT0FBTyxFQUFFO2dCQUNQLGdGQUFzQjtnQkFDdEIsb0ZBQXdCO2FBQ3pCO1lBQ0QsT0FBTyxFQUFFLENBQUMsOERBQWdCLENBQUM7U0FDNUIsQ0FBQztPQUNXLGVBQWUsQ0FBSTtJQUFELHNCQUFDO0NBQUE7QUFBSjs7Ozs7Ozs7QUNmNUIscUU7Ozs7Ozs7QUNBQSwwMkRBQTAyRCwrK0NBQSsrQyw0SUFBNEksNElBQTRJLHl6Qjs7Ozs7Ozs7QUNBam5IO0FBQUE7QUFBQTtBQUFBO0FBQWtEO0FBT2xEO0lBRUU7SUFBZ0IsQ0FBQztJQUVqQixxQ0FBUSxHQUFSO0lBQ0EsQ0FBQztJQUxVLGtCQUFrQjtRQUw5QiwrREFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGNBQWM7WUFDeEIsbUZBQXlDOztTQUUxQyxDQUFDOztPQUNXLGtCQUFrQixDQU85QjtJQUFELHlCQUFDO0NBQUE7QUFQOEIiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEJpZW52ZW51ZUNvbXBvbmVudCB9IGZyb20gJy4vYmllbnZlbnVlL2JpZW52ZW51ZS5jb21wb25lbnQnO1xuXG5cbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xuICB7cGF0aDogXCJcIiwgY29tcG9uZW50OkJpZW52ZW51ZUNvbXBvbmVudH1cbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQocm91dGVzKV0sXG4gIGV4cG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGVdXG59KVxuZXhwb3J0IGNsYXNzIEJpZW52ZW51ZVJvdXRpbmdNb2R1bGUgeyB9XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBCaWVudmVudWVSb3V0aW5nTW9kdWxlIH0gZnJvbSAnLi9iaWVudmVudWUtcm91dGluZy5tb2R1bGUnO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEJpZW52ZW51ZUNvbXBvbmVudCB9IGZyb20gJy4vYmllbnZlbnVlL2JpZW52ZW51ZS5jb21wb25lbnQnO1xuXG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW0JpZW52ZW51ZUNvbXBvbmVudF0sXG4gIGltcG9ydHM6IFtcbiAgICBCaWVudmVudWVSb3V0aW5nTW9kdWxlLFxuICAgIE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZVxuICBdLFxuICBzY2hlbWFzOiBbTk9fRVJST1JTX1NDSEVNQV1cbn0pXG5leHBvcnQgY2xhc3MgQmllbnZlbnVlTW9kdWxlIHsgfVxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIi8qIEFkZCBtb2JpbGUgc3R5bGVzIGZvciB0aGUgY29tcG9uZW50IGhlcmUuICAqL1xcblwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxBY3Rpb25CYXI+XFxuICAgIDwhLS0gXFxuICAgIFVzZSB0aGUgTmF2aWdhdGlvbkJ1dHRvbiBhcyBhIHNpZGUtZHJhd2VyIGJ1dHRvbiBpbiBBbmRyb2lkXFxuICAgIGJlY2F1c2UgQWN0aW9uSXRlbXMgYXJlIHNob3duIG9uIHRoZSByaWdodCBzaWRlIG9mIHRoZSBBY3Rpb25CYXJcXG4gICAgLS0+XFxuICAgIDxOYXZpZ2F0aW9uQnV0dG9uIGlvczp2aXNpYmlsaXR5PVxcXCJjb2xsYXBzZWRcXFwiIGljb249XFxcInJlczovL21lbnVcXFwiICh0YXApPVxcXCJvbkRyYXdlckJ1dHRvblRhcCgpXFxcIj48L05hdmlnYXRpb25CdXR0b24+XFxuICAgIDwhLS0gXFxuICAgIFVzZSB0aGUgQWN0aW9uSXRlbSBmb3IgSU9TIHdpdGggcG9zaXRpb24gc2V0IHRvIGxlZnQuIFVzaW5nIHRoZVxcbiAgICBOYXZpZ2F0aW9uQnV0dG9uIGFzIGEgc2lkZS1kcmF3ZXIgYnV0dG9uIGluIGlPUyBpcyBub3QgcG9zc2libGUsXFxuICAgIGJlY2F1c2UgaXRzIGZ1bmN0aW9uIGlzIHRvIGFsd2F5cyBuYXZpZ2F0ZSBiYWNrIGluIHRoZSBhcHBsaWNhdGlvbi5cXG4gICAgLS0+XFxuICAgIDxBY3Rpb25JdGVtIGljb249XFxcInJlczovL21lbnVcXFwiIGFuZHJvaWQ6dmlzaWJpbGl0eT1cXFwiY29sbGFwc2VkXFxcIiAodGFwKT1cXFwib25EcmF3ZXJCdXR0b25UYXAoKVxcXCJcXG4gICAgICAgIGlvcy5wb3NpdGlvbj1cXFwibGVmdFxcXCIgPlxcbiAgICA8L0FjdGlvbkl0ZW0+XFxuICAgIDxMYWJlbCBjbGFzcz1cXFwicGFnZUxhYmVsXFxcIiB0ZXh0PVxcXCJcXFwiPjwvTGFiZWw+XFxuPC9BY3Rpb25CYXI+XFxuPFN0YWNrTGF5b3V0PlxcbjxHcmlkTGF5b3V0IGNsYXNzPVxcXCJwYWdlX19jb250ZW50XFxcIj5cXG5cXG4gICAgPEdyaWRMYXlvdXQgcm93cz1cXFwiNDAwXFxcIj5cXG4gICAgICAgIDxpbWFnZSByb3c9XFxcIjBcXFwiIHNyYz1cXFwiaHR0cHM6Ly9wbmdpbWFnZS5uZXQvd3AtY29udGVudC91cGxvYWRzLzIwMTgvMDYvbW91bnRhaW4tc2lsaG91ZXR0ZS1wbmctMy5wbmdcXFwiPjwvaW1hZ2U+XFxuICAgIDwvR3JpZExheW91dD5cXG4gICAgPEdyaWRMYXlvdXQgcm93cz1cXFwiODUwXFxcIj5cXG4gICAgICAgIDxDb250ZW50VmlldyByb3c9XFxcIjBcXFwiIGlkPVxcXCJjYWNoZV9ub2lyXFxcIiB3aWR0aD1cXFwiMTUwMHB4XFxcIiBoZWlnaHQ9XFxcIjEwMDBweFxcXCIgYmFja2dyb3VuZENvbG9yPVxcXCIjMDAwMDAwXFxcIj48L0NvbnRlbnRWaWV3PlxcbiAgICAgICAgPENvbnRlbnRWaWV3IHJvdz1cXFwiMVxcXCIgaWQ9XFxcIm1lc3NhZ2VfYWNjdWVpbFxcXCIgd2lkdGg9XFxcIjEwMDBweFxcXCIgaGVpZ2h0PVxcXCI1NTBweFxcXCIgYmFja2dyb3VuZENvbG9yPVxcXCIjNDMzQjNCXFxcIiA+PC9Db250ZW50Vmlldz5cXG4gICAgICAgIDxMYWJlbCByb3c9XFxcIjJcXFwiIGNsYXNzPVxcXCJlbnRldGUyXFxcIiB0ZXh0PVxcXCJCaWVudmVudWUgIVxcXCI+PC9MYWJlbD5cXG4gICAgICAgIDwhLS0gPENvbnRlbnRWaWV3IHJvdz1cXFwiMlxcXCIgaWQ9XFxcIm1lc3NhZ2VfYWNjdWVpbFxcXCIgd2lkdGg9XFxcIjEwMDBweFxcXCIgaGVpZ2h0PVxcXCI1NTBweFxcXCIgYmFja2dyb3VuZENvbG9yPVxcXCIjNDMzQjNCXFxcIiA+PC9Db250ZW50Vmlldz4gLS0+XFxuICAgICAgICA8TGFiZWwgcm93PVxcXCIzXFxcIiBjbGFzcz1cXFwiZW50ZXRlM1xcXCIgdGV4dD1cXFwiQ3LDqWV6IHZvdHJlIGNvbXB0ZSBldCBwcm9maXRleiBlbiB0b3V0ZSBsaWJlcnTDqSBkZXMgZm9uY3Rpb25uYWxpdMOpcyBkZSB2b3RyZSBhcHBsaWNhdGlvbiBTa2l2aWV3XFxcIiB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCI+PC9MYWJlbD5cXG4gICAgICAgIDxCdXR0b24gcm93PVxcXCI0XFxcIiB0ZXh0PVxcXCJDUkVFUiBVTiBDT01QVEVcXFwiIGNsYXNzPVxcXCJidG5fY3JlZXJfdW5fY29tcHRlXFxcIj48L0J1dHRvbj4gXFxuXFxuXFxuXFxuICAgICAgICA8IS0tIDxMYWJlbCByb3c9XFxcIjFcXFwiIGNsYXNzPVxcXCJlbnRldGVcXFwiIHRleHQ9XFxcIlNraWVyIGVuIHRvdXRlIHPDqWN1cml0w6lcXFwiPjwvTGFiZWw+XFxuICAgICAgICAgPExhYmVsIHJvdz1cXFwiMlxcXCIgdGV4dD1cXFwiJiN4ZjAwMjtcXFwiIGNsYXNzPVxcXCJudC1pY29uLTNcXFwiPjwvTGFiZWw+XFxuICAgICAgICA8Q29udGVudFZpZXcgcm93PVxcXCIyXFxcIiBpZD1cXFwiY2hhbXBzX2Nob2l4X3N0YXRpb25cXFwiIHdpZHRoPVxcXCI4MDBweFxcXCIgaGVpZ2h0PVxcXCIxNTBweFxcXCIgPjwvQ29udGVudFZpZXc+XFxuICAgIDwvR3JpZExheW91dD4gLS0+XFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuICAgIDwhLS0gPEdyaWRMYXlvdXQ+XFxuICAgICAgIFxcblxcbiAgICA8L0dyaWRMYXlvdXQ+XFxuICAgIDxHcmlkTGF5b3V0IHJvd3M9XFxcIjQwMFxcXCI+XFxuICAgICAgICA8U2xpZGVyIHZhbHVlPVxcXCIxMFxcXCIgbWluVmFsdWU9XFxcIjBcXFwiIG1heFZhbHVlPVxcXCIxMDBcXFwiIGJhY2tncm91bmRDb2xvcj1cXFwiZ3JlZW5cXFwiY29sb3I9XFxcInJlZFxcXCIgLz5cXG4gICAgICAgIDxpbWFnZSByb3c9XFxcIjBcXFwiIHNyYz1cXFwiaHR0cHM6Ly9wbmdpbWFnZS5uZXQvd3AtY29udGVudC91cGxvYWRzLzIwMTgvMDYvbW91bnRhaW4tc2lsaG91ZXR0ZS1wbmctMy5wbmdcXFwiPjwvaW1hZ2U+XFxuICAgIDwvR3JpZExheW91dD5cXG4gICAgPEdyaWRMYXlvdXQgcm93cz1cXFwiNzAwXFxcIj5cXG4gICAgICAgIDxpbWFnZSByb3c9XFxcIjBcXFwiIHNyYz1cXFwiaHR0cHM6Ly9jb2xvcmF0ZS5henVyZXdlYnNpdGVzLm5ldC9Td2F0Y2hDb2xvci8wMDAwMDBcXFwiPjwvaW1hZ2U+XFxuICAgICAgICA8TGFiZWwgcm93PVxcXCIxXFxcIiBjbGFzcz1cXFwiZW50ZXRlXFxcIiB0ZXh0PVxcXCJCaWVudmVudWUgIVxcXCI+PC9MYWJlbD5cXG4gICAgICAgIDxMYWJlbCByb3c9XFxcIjJcXFwiIGNsYXNzPVxcXCJlbnRldGVcXFwiIHRleHQ9XFxcIkNyw6lleiB2b3RyZSBjb21wdGUgZXQgcHJvZml0ZXogZW4gdG91dGUgbGliZXJ0w6kgZGVzIGZvbmN0aW9ubmFsaXTDqXMgZGUgdm90cmUgYXBwbGljYXRpb24gU2tpdmlld1xcXCI+PC9MYWJlbD5cXG4gICAgICAgIDxDb250ZW50VmlldyByb3c9XFxcIjNcXFwiIGlkPVxcXCJjaGFtcHNfY2hvaXhfc3RhdGlvblxcXCIgd2lkdGg9XFxcIjEwMDBweFxcXCIgaGVpZ2h0PVxcXCIyNzBweFxcXCIgPjwvQ29udGVudFZpZXc+XFxuICAgIDwvR3JpZExheW91dD4gLS0+XFxuICAgIDwhLS0gPEdyaWRMYXlvdXQgcm93cz1cXFwiMTAwMFxcXCI+XFxuICAgICAgICA8aW1hZ2Ugcm93PVxcXCIwXFxcIiBzcmM9XFxcImh0dHBzOi8vY29sb3JhdGUuYXp1cmV3ZWJzaXRlcy5uZXQvU3dhdGNoQ29sb3IvMDAwMDAwXFxcIj48L2ltYWdlPiBcXG4gICAgICAgIDxCdXR0b24gcm93PVxcXCIxXFxcIiB0ZXh0PVxcXCJDUkVFUiBVTiBDT01QVEVcXFwiIGNsYXNzPVxcXCJidG4gYnRuLXdhcm5pbmdcXFwiPjwvQnV0dG9uPiAgLS0+IC0tPlxcbiAgICAgICAgXFxuXFxuIFxcbiAgICA8L0dyaWRMYXlvdXQ+XFxuPC9HcmlkTGF5b3V0PlxcbjwvU3RhY2tMYXlvdXQ+XFxuPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJoclxcXCIgaGVpZ2h0PVxcXCIxNTA1cHhcXFwiPjwvU3RhY2tMYXlvdXQ+XFxuPFN0YWNrTGF5b3V0PlxcbiAgICA8Qm90dG9tTmF2aWdhdGlvbiBoZWlnaHQ9XFxcIjE5MDBweFxcXCI+XFxuICAgICAgICA8VGFiU3RyaXA+XFxuICAgICAgICAgICAgPFRhYlN0cmlwSXRlbT5cXG4gICAgICAgICAgICAgICAgPExhYmVsIGNvbD1cXFwiMFxcXCIgdGV4dD1cXFwiJiN4ZjA1YTtcXFwiIGNsYXNzPVxcXCJudC1pY29uIGZhc1xcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgICA8L1RhYlN0cmlwSXRlbT5cXG4gICAgICAgICAgICA8VGFiU3RyaXBJdGVtPlxcbiAgICAgICAgICAgICAgICA8TGFiZWwgY29sPVxcXCIxXFxcIiB0ZXh0PVxcXCImI3hmMDQxO1xcXCIgY2xhc3M9XFxcIm50LWljb24gZmFzXFxcIj48L0xhYmVsPlxcbiAgICAgICAgICAgIDwvVGFiU3RyaXBJdGVtPlxcbiAgICAgICAgICAgIDxUYWJTdHJpcEl0ZW0+XFxuICAgICAgICAgICAgICAgIDxMYWJlbCBjb2w9XFxcIjJcXFwiIHRleHQ9XFxcIiYjeGYzYzU7XFxcIiBjbGFzcz1cXFwibnQtaWNvbiBmYXNcXFwiPjwvTGFiZWw+XFxuICAgICAgICAgICAgPC9UYWJTdHJpcEl0ZW0+XFxuICAgICAgICA8L1RhYlN0cmlwPlxcbiAgICA8L0JvdHRvbU5hdmlnYXRpb24+XFxuPC9TdGFja0xheW91dD5cXG5cXG5cXG5cXG5cXG48IS0tIDxTY3JvbGxWaWV3IG9yaWVudGF0aW9uPVxcXCJ2ZXJ0aWNhbFxcXCIgY2xhc3M9XFxcImNvdmVySW1hZ2VcXFwiPlxcbiAgICA8R3JpZExheW91dCByb3dzPVxcXCIzMDAgMzAwIDMwMCAzMDBcXFwiPlxcbiAgICAgICAgPExhYmVsIGNsYXNzPVxcXCJTRVZFUkVcXFwiIHJvdz1cXFwiMFxcXCIgdGV4dD1cXFwiQkxFU1NVUkUgU0VWRVJFXFxcIiB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCI+PC9MYWJlbD5cXG4gICAgICAgIDxMYWJlbCBjbGFzcz1cXFwiU0VSSUVVU0VcXFwiIHJvdz1cXFwiMVxcXCIgdGV4dD1cXFwiQkxFU1NVUkUgU0VSSUVVU0VcXFwiIHRleHRXcmFwPVxcXCJ0cnVlXFxcIj48L0xhYmVsPlxcbiAgICAgICAgPENvbnRlbnRWaWV3IGNsYXNzPVxcXCJjYWRyZV9jaG9peFxcXCIgcm93PVxcXCIxXFxcIiAgdGV4dD1cXFwiXFxcIiB3aWR0aD1cXFwiMzAwcHhcXFwiIGhlaWdodD1cXFwiMzAwcHhcXFwiIGNvbG9yPVxcXCJibGFja1xcXCIgYmFja2dyb3VuZENvbG9yPVxcXCJcXFwiPjwvQ29udGVudFZpZXc+XFxuICAgICAgICA8TGFiZWwgY2xhc3M9XFxcIk1PREVSRUVcXFwiIHJvdz1cXFwiMlxcXCIgdGV4dD1cXFwiQkxFU1NVUkUgTU9ERVJFRVxcXCIgdGV4dFdyYXA9XFxcInRydWVcXFwiPjwvTGFiZWw+XFxuICAgICAgICA8TGFiZWwgY2xhc3M9XFxcIkxFR0VSRVxcXCIgcm93PVxcXCIzXFxcIiB0ZXh0PVxcXCJCTEVTU1VSRSBMRUdFUkVcXFwiIHRleHRXcmFwPVxcXCJ0cnVlXFxcIj48L0xhYmVsPlxcbiAgICAgICAgXFxuICAgIDwvR3JpZExheW91dD5cXG48L1Njcm9sbFZpZXc+IC0tPlwiIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbnMtYmllbnZlbnVlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2JpZW52ZW51ZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2JpZW52ZW51ZS5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQmllbnZlbnVlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICB9XG5cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=