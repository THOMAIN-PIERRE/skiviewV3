(global["webpackJsonp"] = global["webpackJsonp"] || []).push([[5],{

/***/ "./app/media/media-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaRoutingModule", function() { return MediaRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("nativescript-angular/router");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _media_media_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/media/media/media.component.ts");



var routes = [
    { path: "", component: _media_media_component__WEBPACK_IMPORTED_MODULE_2__["MediaComponent"] }
];
var MediaRoutingModule = /** @class */ (function () {
    function MediaRoutingModule() {
    }
    MediaRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"].forChild(routes)],
            exports: [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"]]
        })
    ], MediaRoutingModule);
    return MediaRoutingModule;
}());



/***/ }),

/***/ "./app/media/media.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaModule", function() { return MediaModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _media_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./app/media/media-routing.module.ts");
/* harmony import */ var nativescript_angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("nativescript-angular/common");
/* harmony import */ var nativescript_angular_common__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_common__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _media_media_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/media/media/media.component.ts");




var MediaModule = /** @class */ (function () {
    function MediaModule() {
    }
    MediaModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_media_media_component__WEBPACK_IMPORTED_MODULE_3__["MediaComponent"]],
            imports: [
                _media_routing_module__WEBPACK_IMPORTED_MODULE_1__["MediaRoutingModule"],
                nativescript_angular_common__WEBPACK_IMPORTED_MODULE_2__["NativeScriptCommonModule"]
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NO_ERRORS_SCHEMA"]]
        })
    ], MediaModule);
    return MediaModule;
}());



/***/ }),

/***/ "./app/media/media/media.component.css":
/***/ (function(module, exports) {

module.exports = "/* Add mobile styles for the component here.  */\n"

/***/ }),

/***/ "./app/media/media/media.component.html":
/***/ (function(module, exports) {

module.exports = "<ActionBar class=\"actionBarCarnet\">\n    <!-- \n    Use the NavigationButton as a side-drawer button in Android\n    because ActionItems are shown on the right side of the ActionBar\n    -->\n    <NavigationButton ios:visibility=\"collapsed\" icon=\"res://menu\" (tap)=\"onDrawerButtonTap()\"></NavigationButton>\n    <!-- \n    Use the ActionItem for IOS with position set to left. Using the\n    NavigationButton as a side-drawer button in iOS is not possible,\n    because its function is to always navigate back in the application.\n    -->\n    <ActionItem icon=\"res://menu\" android:visibility=\"collapsed\" (tap)=\"onDrawerButtonTap()\"\n        ios.position=\"left\" >\n    </ActionItem>\n    <Label class=\"blackPage\" text=\"MEDIA\"></Label>\n</ActionBar>\n\n<GridLayout rows=\"100, 460\">\n    <ContentView row=\"0\" width=\"2000px\" backgroundColor=\"#000000\" class=\"bandeau_photo\"></ContentView>\n    <ContentView row=\"1\" width=\"800px\" backgroundColor=\"#C4C4C4\" class=\"photo_danger\"></ContentView>\n</GridLayout>\n<FlexboxLayout  flexDirection=\"column\" justifyContent=\"center\">\n    <Label text=\"&#xf030;\" class=\"nt-icon fas\" id=\"camera\"></Label>\n    <Label text=\"PRENDRE UNE PHOTO\" id=\"camera2\"></Label>\n</FlexboxLayout> \n<FlexboxLayout  flexDirection=\"row\" justifyContent=\"space-around\" align-items=\"center\" class=\"numberPictures\">\n    <Label text=\"&#xf030;\" class=\"nt-icon fas\"></Label>\n    <Label text=\"0/3\"></Label>\n</FlexboxLayout>      \n<FlexboxLayout flexDirection=\"row\" justifyContent=\"space-around\">\n    <BottomNavigation height=\"100%\">\n        <TabStrip>\n            <TabStripItem>\n                <Label text=\"&#xf053;\" class=\"nt-icon fas\" id=\"slider\"></Label>\n            </TabStripItem>\n            <TabStripItem>\n                <Label text=\"PRECEDENT\" id=\"slider\"></Label>\n            </TabStripItem>\n            <TabStripItem>\n                <Label text=\"SUIVANT\" id=\"slider\"></Label>\n            </TabStripItem>\n            <TabStripItem>\n                <Label text=\"&#xf054;\" class=\"nt-icon fas\" id=\"slider\"></Label>\n            </TabStripItem>\n        </TabStrip>\n    </BottomNavigation>\n</FlexboxLayout>\n\n\n\n\n\n\n\n\n\n\n\n\n"

/***/ }),

/***/ "./app/media/media/media.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaComponent", function() { return MediaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);

var MediaComponent = /** @class */ (function () {
    function MediaComponent() {
    }
    MediaComponent.prototype.ngOnInit = function () {
    };
    MediaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ns-media',
            template: __webpack_require__("./app/media/media/media.component.html"),
            styles: [__webpack_require__("./app/media/media/media.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MediaComponent);
    return MediaComponent;
}());



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvbWVkaWEvbWVkaWEtcm91dGluZy5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL21lZGlhL21lZGlhLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9hcHAvbWVkaWEvbWVkaWEvbWVkaWEuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9hcHAvbWVkaWEvbWVkaWEvbWVkaWEuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL21lZGlhL21lZGlhL21lZGlhLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF5QztBQUU4QjtBQUNkO0FBRXpELElBQU0sTUFBTSxHQUFXO0lBQ3JCLEVBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUscUVBQWMsRUFBQztDQUN0QyxDQUFDO0FBTUY7SUFBQTtJQUFrQyxDQUFDO0lBQXRCLGtCQUFrQjtRQUo5Qiw4REFBUSxDQUFDO1lBQ1IsT0FBTyxFQUFFLENBQUMsb0ZBQXdCLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3BELE9BQU8sRUFBRSxDQUFDLG9GQUF3QixDQUFDO1NBQ3BDLENBQUM7T0FDVyxrQkFBa0IsQ0FBSTtJQUFELHlCQUFDO0NBQUE7QUFBSjs7Ozs7Ozs7O0FDYi9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBMkQ7QUFFQztBQUNXO0FBQ2Q7QUFXekQ7SUFBQTtJQUEyQixDQUFDO0lBQWYsV0FBVztRQVJ2Qiw4REFBUSxDQUFDO1lBQ1IsWUFBWSxFQUFFLENBQUMscUVBQWMsQ0FBQztZQUM5QixPQUFPLEVBQUU7Z0JBQ1Asd0VBQWtCO2dCQUNsQixvRkFBd0I7YUFDekI7WUFDRCxPQUFPLEVBQUUsQ0FBQyw4REFBZ0IsQ0FBQztTQUM1QixDQUFDO09BQ1csV0FBVyxDQUFJO0lBQUQsa0JBQUM7Q0FBQTtBQUFKOzs7Ozs7OztBQ2Z4QixxRTs7Ozs7OztBQ0FBLGtvQ0FBa29DLHFSQUFxUixrU0FBa1Msb1lBQW9ZLHVLOzs7Ozs7OztBQ0E3akU7QUFBQTtBQUFBO0FBQUE7QUFBa0Q7QUFPbEQ7SUFFRTtJQUFnQixDQUFDO0lBRWpCLGlDQUFRLEdBQVI7SUFDQSxDQUFDO0lBTFUsY0FBYztRQUwxQiwrREFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFVBQVU7WUFDcEIsdUVBQXFDOztTQUV0QyxDQUFDOztPQUNXLGNBQWMsQ0FPMUI7SUFBRCxxQkFBQztDQUFBO0FBUDBCIiwiZmlsZSI6IjUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVzIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBNZWRpYUNvbXBvbmVudCB9IGZyb20gJy4vbWVkaWEvbWVkaWEuY29tcG9uZW50JztcblxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXG4gIHtwYXRoOiBcIlwiLCBjb21wb25lbnQ6IE1lZGlhQ29tcG9uZW50fVxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JDaGlsZChyb3V0ZXMpXSxcbiAgZXhwb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZV1cbn0pXG5leHBvcnQgY2xhc3MgTWVkaWFSb3V0aW5nTW9kdWxlIHsgfVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTWVkaWFSb3V0aW5nTW9kdWxlIH0gZnJvbSAnLi9tZWRpYS1yb3V0aW5nLm1vZHVsZSc7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTWVkaWFDb21wb25lbnQgfSBmcm9tICcuL21lZGlhL21lZGlhLmNvbXBvbmVudCc7XG5cblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbTWVkaWFDb21wb25lbnRdLFxuICBpbXBvcnRzOiBbXG4gICAgTWVkaWFSb3V0aW5nTW9kdWxlLFxuICAgIE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZVxuICBdLFxuICBzY2hlbWFzOiBbTk9fRVJST1JTX1NDSEVNQV1cbn0pXG5leHBvcnQgY2xhc3MgTWVkaWFNb2R1bGUgeyB9XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiLyogQWRkIG1vYmlsZSBzdHlsZXMgZm9yIHRoZSBjb21wb25lbnQgaGVyZS4gICovXFxuXCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPEFjdGlvbkJhciBjbGFzcz1cXFwiYWN0aW9uQmFyQ2FybmV0XFxcIj5cXG4gICAgPCEtLSBcXG4gICAgVXNlIHRoZSBOYXZpZ2F0aW9uQnV0dG9uIGFzIGEgc2lkZS1kcmF3ZXIgYnV0dG9uIGluIEFuZHJvaWRcXG4gICAgYmVjYXVzZSBBY3Rpb25JdGVtcyBhcmUgc2hvd24gb24gdGhlIHJpZ2h0IHNpZGUgb2YgdGhlIEFjdGlvbkJhclxcbiAgICAtLT5cXG4gICAgPE5hdmlnYXRpb25CdXR0b24gaW9zOnZpc2liaWxpdHk9XFxcImNvbGxhcHNlZFxcXCIgaWNvbj1cXFwicmVzOi8vbWVudVxcXCIgKHRhcCk9XFxcIm9uRHJhd2VyQnV0dG9uVGFwKClcXFwiPjwvTmF2aWdhdGlvbkJ1dHRvbj5cXG4gICAgPCEtLSBcXG4gICAgVXNlIHRoZSBBY3Rpb25JdGVtIGZvciBJT1Mgd2l0aCBwb3NpdGlvbiBzZXQgdG8gbGVmdC4gVXNpbmcgdGhlXFxuICAgIE5hdmlnYXRpb25CdXR0b24gYXMgYSBzaWRlLWRyYXdlciBidXR0b24gaW4gaU9TIGlzIG5vdCBwb3NzaWJsZSxcXG4gICAgYmVjYXVzZSBpdHMgZnVuY3Rpb24gaXMgdG8gYWx3YXlzIG5hdmlnYXRlIGJhY2sgaW4gdGhlIGFwcGxpY2F0aW9uLlxcbiAgICAtLT5cXG4gICAgPEFjdGlvbkl0ZW0gaWNvbj1cXFwicmVzOi8vbWVudVxcXCIgYW5kcm9pZDp2aXNpYmlsaXR5PVxcXCJjb2xsYXBzZWRcXFwiICh0YXApPVxcXCJvbkRyYXdlckJ1dHRvblRhcCgpXFxcIlxcbiAgICAgICAgaW9zLnBvc2l0aW9uPVxcXCJsZWZ0XFxcIiA+XFxuICAgIDwvQWN0aW9uSXRlbT5cXG4gICAgPExhYmVsIGNsYXNzPVxcXCJibGFja1BhZ2VcXFwiIHRleHQ9XFxcIk1FRElBXFxcIj48L0xhYmVsPlxcbjwvQWN0aW9uQmFyPlxcblxcbjxHcmlkTGF5b3V0IHJvd3M9XFxcIjEwMCwgNDYwXFxcIj5cXG4gICAgPENvbnRlbnRWaWV3IHJvdz1cXFwiMFxcXCIgd2lkdGg9XFxcIjIwMDBweFxcXCIgYmFja2dyb3VuZENvbG9yPVxcXCIjMDAwMDAwXFxcIiBjbGFzcz1cXFwiYmFuZGVhdV9waG90b1xcXCI+PC9Db250ZW50Vmlldz5cXG4gICAgPENvbnRlbnRWaWV3IHJvdz1cXFwiMVxcXCIgd2lkdGg9XFxcIjgwMHB4XFxcIiBiYWNrZ3JvdW5kQ29sb3I9XFxcIiNDNEM0QzRcXFwiIGNsYXNzPVxcXCJwaG90b19kYW5nZXJcXFwiPjwvQ29udGVudFZpZXc+XFxuPC9HcmlkTGF5b3V0PlxcbjxGbGV4Ym94TGF5b3V0ICBmbGV4RGlyZWN0aW9uPVxcXCJjb2x1bW5cXFwiIGp1c3RpZnlDb250ZW50PVxcXCJjZW50ZXJcXFwiPlxcbiAgICA8TGFiZWwgdGV4dD1cXFwiJiN4ZjAzMDtcXFwiIGNsYXNzPVxcXCJudC1pY29uIGZhc1xcXCIgaWQ9XFxcImNhbWVyYVxcXCI+PC9MYWJlbD5cXG4gICAgPExhYmVsIHRleHQ9XFxcIlBSRU5EUkUgVU5FIFBIT1RPXFxcIiBpZD1cXFwiY2FtZXJhMlxcXCI+PC9MYWJlbD5cXG48L0ZsZXhib3hMYXlvdXQ+IFxcbjxGbGV4Ym94TGF5b3V0ICBmbGV4RGlyZWN0aW9uPVxcXCJyb3dcXFwiIGp1c3RpZnlDb250ZW50PVxcXCJzcGFjZS1hcm91bmRcXFwiIGFsaWduLWl0ZW1zPVxcXCJjZW50ZXJcXFwiIGNsYXNzPVxcXCJudW1iZXJQaWN0dXJlc1xcXCI+XFxuICAgIDxMYWJlbCB0ZXh0PVxcXCImI3hmMDMwO1xcXCIgY2xhc3M9XFxcIm50LWljb24gZmFzXFxcIj48L0xhYmVsPlxcbiAgICA8TGFiZWwgdGV4dD1cXFwiMC8zXFxcIj48L0xhYmVsPlxcbjwvRmxleGJveExheW91dD4gICAgICBcXG48RmxleGJveExheW91dCBmbGV4RGlyZWN0aW9uPVxcXCJyb3dcXFwiIGp1c3RpZnlDb250ZW50PVxcXCJzcGFjZS1hcm91bmRcXFwiPlxcbiAgICA8Qm90dG9tTmF2aWdhdGlvbiBoZWlnaHQ9XFxcIjEwMCVcXFwiPlxcbiAgICAgICAgPFRhYlN0cmlwPlxcbiAgICAgICAgICAgIDxUYWJTdHJpcEl0ZW0+XFxuICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCImI3hmMDUzO1xcXCIgY2xhc3M9XFxcIm50LWljb24gZmFzXFxcIiBpZD1cXFwic2xpZGVyXFxcIj48L0xhYmVsPlxcbiAgICAgICAgICAgIDwvVGFiU3RyaXBJdGVtPlxcbiAgICAgICAgICAgIDxUYWJTdHJpcEl0ZW0+XFxuICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJQUkVDRURFTlRcXFwiIGlkPVxcXCJzbGlkZXJcXFwiPjwvTGFiZWw+XFxuICAgICAgICAgICAgPC9UYWJTdHJpcEl0ZW0+XFxuICAgICAgICAgICAgPFRhYlN0cmlwSXRlbT5cXG4gICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcIlNVSVZBTlRcXFwiIGlkPVxcXCJzbGlkZXJcXFwiPjwvTGFiZWw+XFxuICAgICAgICAgICAgPC9UYWJTdHJpcEl0ZW0+XFxuICAgICAgICAgICAgPFRhYlN0cmlwSXRlbT5cXG4gICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcIiYjeGYwNTQ7XFxcIiBjbGFzcz1cXFwibnQtaWNvbiBmYXNcXFwiIGlkPVxcXCJzbGlkZXJcXFwiPjwvTGFiZWw+XFxuICAgICAgICAgICAgPC9UYWJTdHJpcEl0ZW0+XFxuICAgICAgICA8L1RhYlN0cmlwPlxcbiAgICA8L0JvdHRvbU5hdmlnYXRpb24+XFxuPC9GbGV4Ym94TGF5b3V0PlxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblwiIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbnMtbWVkaWEnLFxuICB0ZW1wbGF0ZVVybDogJy4vbWVkaWEuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9tZWRpYS5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTWVkaWFDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gIH1cblxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==