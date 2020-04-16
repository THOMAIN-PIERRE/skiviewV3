(global["webpackJsonp"] = global["webpackJsonp"] || []).push([[6],{

/***/ "./app/media2/media2-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Media2RoutingModule", function() { return Media2RoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("nativescript-angular/router");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _media2_media2_media2_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/media2/media2/media2.component.ts");



var routes = [
    { path: "", component: _media2_media2_media2_component__WEBPACK_IMPORTED_MODULE_2__["Media2Component"] }
];
var Media2RoutingModule = /** @class */ (function () {
    function Media2RoutingModule() {
    }
    Media2RoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"].forChild(routes)],
            exports: [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"]]
        })
    ], Media2RoutingModule);
    return Media2RoutingModule;
}());



/***/ }),

/***/ "./app/media2/media2.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Media2Module", function() { return Media2Module; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _media2_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./app/media2/media2-routing.module.ts");
/* harmony import */ var nativescript_angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("nativescript-angular/common");
/* harmony import */ var nativescript_angular_common__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_common__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _media2_media2_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/media2/media2/media2.component.ts");




var Media2Module = /** @class */ (function () {
    function Media2Module() {
    }
    Media2Module = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_media2_media2_component__WEBPACK_IMPORTED_MODULE_3__["Media2Component"]],
            imports: [
                _media2_routing_module__WEBPACK_IMPORTED_MODULE_1__["Media2RoutingModule"],
                nativescript_angular_common__WEBPACK_IMPORTED_MODULE_2__["NativeScriptCommonModule"]
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NO_ERRORS_SCHEMA"]]
        })
    ], Media2Module);
    return Media2Module;
}());



/***/ }),

/***/ "./app/media2/media2/media2.component.css":
/***/ (function(module, exports) {

module.exports = "/* Add mobile styles for the component here.  */\n"

/***/ }),

/***/ "./app/media2/media2/media2.component.html":
/***/ (function(module, exports) {

module.exports = "<ActionBar class=\"actionBarCarnet\">\n    <!-- \n    Use the NavigationButton as a side-drawer button in Android\n    because ActionItems are shown on the right side of the ActionBar\n    -->\n    <NavigationButton ios:visibility=\"collapsed\" icon=\"res://menu\" (tap)=\"onDrawerButtonTap()\"></NavigationButton>\n    <!-- \n    Use the ActionItem for IOS with position set to left. Using the\n    NavigationButton as a side-drawer button in iOS is not possible,\n    because its function is to always navigate back in the application.\n    -->\n    <ActionItem icon=\"res://menu\" android:visibility=\"collapsed\" (tap)=\"onDrawerButtonTap()\"\n        ios.position=\"left\" >\n    </ActionItem>\n    <Label class=\"blackPage\" text=\"MEDIA\"></Label>\n</ActionBar>\n\n<GridLayout rows=\"100, 460\">\n    <ContentView row=\"0\" width=\"2000px\" backgroundColor=\"#000000\" class=\"bandeau_photo\"></ContentView>\n    <Image row=\"1\" src=\"https://www.telegraph.co.uk/content/dam/Travel/ski/Crans-Montana-avalanche-skiers-KEYSTONE-ANTHONY%20ANEX.jpg?imwidth=450\"  width=\"800px\" stretch=\"aspectFit\"></Image>\n    <Label row=\"2\" text=\"&#xf1f8;\" class=\"nt-icon fas\" id=\"bin\"></Label>\n    <ContentView row=\"3\" id=\"circle\" width=\"300px\" height=\"300px\" ></ContentView>\n    <!-- <Label row=\"3\" text=\"&#xf1f8;\" class=\"nt-icon fas\" id=\"bin\"></Label> -->\n</GridLayout>\n<FlexboxLayout  flexDirection=\"row\" justifyContent=\"space-around\" align-items=\"center\" class=\"numberPictures\">\n    <Label text=\"&#xf030;\" class=\"nt-icon fas\"></Label>\n    <Label text=\"1/3\"></Label>\n</FlexboxLayout>      \n<FlexboxLayout flexDirection=\"row\" justifyContent=\"space-around\">\n    <BottomNavigation height=\"100%\">\n        <TabStrip>\n            <TabStripItem>\n                <Label text=\"&#xf053;\" class=\"nt-icon fas\" id=\"slider\"></Label>\n            </TabStripItem>\n            <TabStripItem>\n                <Label text=\"PRECEDENT\" id=\"slider\"></Label>\n            </TabStripItem>\n            <TabStripItem>\n                <Label text=\"SUIVANT\" id=\"slider\"></Label>\n            </TabStripItem>\n            <TabStripItem>\n                <Label text=\"&#xf054;\" class=\"nt-icon fas\" id=\"slider\"></Label>\n            </TabStripItem>\n        </TabStrip>\n    </BottomNavigation>\n</FlexboxLayout>"

/***/ }),

/***/ "./app/media2/media2/media2.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Media2Component", function() { return Media2Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);

var Media2Component = /** @class */ (function () {
    function Media2Component() {
    }
    Media2Component.prototype.ngOnInit = function () {
    };
    Media2Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ns-media2',
            template: __webpack_require__("./app/media2/media2/media2.component.html"),
            styles: [__webpack_require__("./app/media2/media2/media2.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], Media2Component);
    return Media2Component;
}());



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvbWVkaWEyL21lZGlhMi1yb3V0aW5nLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9hcHAvbWVkaWEyL21lZGlhMi5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL21lZGlhMi9tZWRpYTIvbWVkaWEyLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL21lZGlhMi9tZWRpYTIvbWVkaWEyLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC9tZWRpYTIvbWVkaWEyL21lZGlhMi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBeUM7QUFFOEI7QUFDSDtBQUdwRSxJQUFNLE1BQU0sR0FBVztJQUNyQixFQUFDLElBQUksRUFBQyxFQUFFLEVBQUUsU0FBUyxFQUFDLCtFQUFlLEVBQUM7Q0FDckMsQ0FBQztBQU1GO0lBQUE7SUFBbUMsQ0FBQztJQUF2QixtQkFBbUI7UUFKL0IsOERBQVEsQ0FBQztZQUNSLE9BQU8sRUFBRSxDQUFDLG9GQUF3QixDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNwRCxPQUFPLEVBQUUsQ0FBQyxvRkFBd0IsQ0FBQztTQUNwQyxDQUFDO09BQ1csbUJBQW1CLENBQUk7SUFBRCwwQkFBQztDQUFBO0FBQUo7Ozs7Ozs7OztBQ2RoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTJEO0FBRUc7QUFDUztBQUNYO0FBVzVEO0lBQUE7SUFBNEIsQ0FBQztJQUFoQixZQUFZO1FBUnhCLDhEQUFRLENBQUM7WUFDUixZQUFZLEVBQUUsQ0FBQyx3RUFBZSxDQUFDO1lBQy9CLE9BQU8sRUFBRTtnQkFDUCwwRUFBbUI7Z0JBQ25CLG9GQUF3QjthQUN6QjtZQUNELE9BQU8sRUFBRSxDQUFDLDhEQUFnQixDQUFDO1NBQzVCLENBQUM7T0FDVyxZQUFZLENBQUk7SUFBRCxtQkFBQztDQUFBO0FBQUo7Ozs7Ozs7O0FDZnpCLHFFOzs7Ozs7O0FDQUEsa3BDQUFrcEMsa0xBQWtMLG1OQUFtTixrU0FBa1Msb1lBQW9ZLDZJOzs7Ozs7OztBQ0E3ckU7QUFBQTtBQUFBO0FBQUE7QUFBa0Q7QUFPbEQ7SUFFRTtJQUFnQixDQUFDO0lBRWpCLGtDQUFRLEdBQVI7SUFDQSxDQUFDO0lBTFUsZUFBZTtRQUwzQiwrREFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFdBQVc7WUFDckIsMEVBQXNDOztTQUV2QyxDQUFDOztPQUNXLGVBQWUsQ0FPM0I7SUFBRCxzQkFBQztDQUFBO0FBUDJCIiwiZmlsZSI6IjYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVzIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBNZWRpYTJDb21wb25lbnQgfSBmcm9tICcuLi9tZWRpYTIvbWVkaWEyL21lZGlhMi5jb21wb25lbnQnO1xuXG5cbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xuICB7cGF0aDpcIlwiLCBjb21wb25lbnQ6TWVkaWEyQ29tcG9uZW50fVxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JDaGlsZChyb3V0ZXMpXSxcbiAgZXhwb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZV1cbn0pXG5leHBvcnQgY2xhc3MgTWVkaWEyUm91dGluZ01vZHVsZSB7IH1cbiIsImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE1lZGlhMlJvdXRpbmdNb2R1bGUgfSBmcm9tICcuL21lZGlhMi1yb3V0aW5nLm1vZHVsZSc7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTWVkaWEyQ29tcG9uZW50IH0gZnJvbSAnLi9tZWRpYTIvbWVkaWEyLmNvbXBvbmVudCc7XG5cblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbTWVkaWEyQ29tcG9uZW50XSxcbiAgaW1wb3J0czogW1xuICAgIE1lZGlhMlJvdXRpbmdNb2R1bGUsXG4gICAgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlXG4gIF0sXG4gIHNjaGVtYXM6IFtOT19FUlJPUlNfU0NIRU1BXVxufSlcbmV4cG9ydCBjbGFzcyBNZWRpYTJNb2R1bGUgeyB9XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiLyogQWRkIG1vYmlsZSBzdHlsZXMgZm9yIHRoZSBjb21wb25lbnQgaGVyZS4gICovXFxuXCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPEFjdGlvbkJhciBjbGFzcz1cXFwiYWN0aW9uQmFyQ2FybmV0XFxcIj5cXG4gICAgPCEtLSBcXG4gICAgVXNlIHRoZSBOYXZpZ2F0aW9uQnV0dG9uIGFzIGEgc2lkZS1kcmF3ZXIgYnV0dG9uIGluIEFuZHJvaWRcXG4gICAgYmVjYXVzZSBBY3Rpb25JdGVtcyBhcmUgc2hvd24gb24gdGhlIHJpZ2h0IHNpZGUgb2YgdGhlIEFjdGlvbkJhclxcbiAgICAtLT5cXG4gICAgPE5hdmlnYXRpb25CdXR0b24gaW9zOnZpc2liaWxpdHk9XFxcImNvbGxhcHNlZFxcXCIgaWNvbj1cXFwicmVzOi8vbWVudVxcXCIgKHRhcCk9XFxcIm9uRHJhd2VyQnV0dG9uVGFwKClcXFwiPjwvTmF2aWdhdGlvbkJ1dHRvbj5cXG4gICAgPCEtLSBcXG4gICAgVXNlIHRoZSBBY3Rpb25JdGVtIGZvciBJT1Mgd2l0aCBwb3NpdGlvbiBzZXQgdG8gbGVmdC4gVXNpbmcgdGhlXFxuICAgIE5hdmlnYXRpb25CdXR0b24gYXMgYSBzaWRlLWRyYXdlciBidXR0b24gaW4gaU9TIGlzIG5vdCBwb3NzaWJsZSxcXG4gICAgYmVjYXVzZSBpdHMgZnVuY3Rpb24gaXMgdG8gYWx3YXlzIG5hdmlnYXRlIGJhY2sgaW4gdGhlIGFwcGxpY2F0aW9uLlxcbiAgICAtLT5cXG4gICAgPEFjdGlvbkl0ZW0gaWNvbj1cXFwicmVzOi8vbWVudVxcXCIgYW5kcm9pZDp2aXNpYmlsaXR5PVxcXCJjb2xsYXBzZWRcXFwiICh0YXApPVxcXCJvbkRyYXdlckJ1dHRvblRhcCgpXFxcIlxcbiAgICAgICAgaW9zLnBvc2l0aW9uPVxcXCJsZWZ0XFxcIiA+XFxuICAgIDwvQWN0aW9uSXRlbT5cXG4gICAgPExhYmVsIGNsYXNzPVxcXCJibGFja1BhZ2VcXFwiIHRleHQ9XFxcIk1FRElBXFxcIj48L0xhYmVsPlxcbjwvQWN0aW9uQmFyPlxcblxcbjxHcmlkTGF5b3V0IHJvd3M9XFxcIjEwMCwgNDYwXFxcIj5cXG4gICAgPENvbnRlbnRWaWV3IHJvdz1cXFwiMFxcXCIgd2lkdGg9XFxcIjIwMDBweFxcXCIgYmFja2dyb3VuZENvbG9yPVxcXCIjMDAwMDAwXFxcIiBjbGFzcz1cXFwiYmFuZGVhdV9waG90b1xcXCI+PC9Db250ZW50Vmlldz5cXG4gICAgPEltYWdlIHJvdz1cXFwiMVxcXCIgc3JjPVxcXCJodHRwczovL3d3dy50ZWxlZ3JhcGguY28udWsvY29udGVudC9kYW0vVHJhdmVsL3NraS9DcmFucy1Nb250YW5hLWF2YWxhbmNoZS1za2llcnMtS0VZU1RPTkUtQU5USE9OWSUyMEFORVguanBnP2ltd2lkdGg9NDUwXFxcIiAgd2lkdGg9XFxcIjgwMHB4XFxcIiBzdHJldGNoPVxcXCJhc3BlY3RGaXRcXFwiPjwvSW1hZ2U+XFxuICAgIDxMYWJlbCByb3c9XFxcIjJcXFwiIHRleHQ9XFxcIiYjeGYxZjg7XFxcIiBjbGFzcz1cXFwibnQtaWNvbiBmYXNcXFwiIGlkPVxcXCJiaW5cXFwiPjwvTGFiZWw+XFxuICAgIDxDb250ZW50VmlldyByb3c9XFxcIjNcXFwiIGlkPVxcXCJjaXJjbGVcXFwiIHdpZHRoPVxcXCIzMDBweFxcXCIgaGVpZ2h0PVxcXCIzMDBweFxcXCIgPjwvQ29udGVudFZpZXc+XFxuICAgIDwhLS0gPExhYmVsIHJvdz1cXFwiM1xcXCIgdGV4dD1cXFwiJiN4ZjFmODtcXFwiIGNsYXNzPVxcXCJudC1pY29uIGZhc1xcXCIgaWQ9XFxcImJpblxcXCI+PC9MYWJlbD4gLS0+XFxuPC9HcmlkTGF5b3V0PlxcbjxGbGV4Ym94TGF5b3V0ICBmbGV4RGlyZWN0aW9uPVxcXCJyb3dcXFwiIGp1c3RpZnlDb250ZW50PVxcXCJzcGFjZS1hcm91bmRcXFwiIGFsaWduLWl0ZW1zPVxcXCJjZW50ZXJcXFwiIGNsYXNzPVxcXCJudW1iZXJQaWN0dXJlc1xcXCI+XFxuICAgIDxMYWJlbCB0ZXh0PVxcXCImI3hmMDMwO1xcXCIgY2xhc3M9XFxcIm50LWljb24gZmFzXFxcIj48L0xhYmVsPlxcbiAgICA8TGFiZWwgdGV4dD1cXFwiMS8zXFxcIj48L0xhYmVsPlxcbjwvRmxleGJveExheW91dD4gICAgICBcXG48RmxleGJveExheW91dCBmbGV4RGlyZWN0aW9uPVxcXCJyb3dcXFwiIGp1c3RpZnlDb250ZW50PVxcXCJzcGFjZS1hcm91bmRcXFwiPlxcbiAgICA8Qm90dG9tTmF2aWdhdGlvbiBoZWlnaHQ9XFxcIjEwMCVcXFwiPlxcbiAgICAgICAgPFRhYlN0cmlwPlxcbiAgICAgICAgICAgIDxUYWJTdHJpcEl0ZW0+XFxuICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCImI3hmMDUzO1xcXCIgY2xhc3M9XFxcIm50LWljb24gZmFzXFxcIiBpZD1cXFwic2xpZGVyXFxcIj48L0xhYmVsPlxcbiAgICAgICAgICAgIDwvVGFiU3RyaXBJdGVtPlxcbiAgICAgICAgICAgIDxUYWJTdHJpcEl0ZW0+XFxuICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJQUkVDRURFTlRcXFwiIGlkPVxcXCJzbGlkZXJcXFwiPjwvTGFiZWw+XFxuICAgICAgICAgICAgPC9UYWJTdHJpcEl0ZW0+XFxuICAgICAgICAgICAgPFRhYlN0cmlwSXRlbT5cXG4gICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcIlNVSVZBTlRcXFwiIGlkPVxcXCJzbGlkZXJcXFwiPjwvTGFiZWw+XFxuICAgICAgICAgICAgPC9UYWJTdHJpcEl0ZW0+XFxuICAgICAgICAgICAgPFRhYlN0cmlwSXRlbT5cXG4gICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcIiYjeGYwNTQ7XFxcIiBjbGFzcz1cXFwibnQtaWNvbiBmYXNcXFwiIGlkPVxcXCJzbGlkZXJcXFwiPjwvTGFiZWw+XFxuICAgICAgICAgICAgPC9UYWJTdHJpcEl0ZW0+XFxuICAgICAgICA8L1RhYlN0cmlwPlxcbiAgICA8L0JvdHRvbU5hdmlnYXRpb24+XFxuPC9GbGV4Ym94TGF5b3V0PlwiIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbnMtbWVkaWEyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL21lZGlhMi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL21lZGlhMi5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTWVkaWEyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICB9XG5cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=