(global["webpackJsonp"] = global["webpackJsonp"] || []).push([[2],{

/***/ "./app/fiche/fiche-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FicheRoutingModule", function() { return FicheRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("nativescript-angular/router");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fiche_fiche_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/fiche/fiche/fiche.component.ts");



var routes = [
    { path: "", component: _fiche_fiche_component__WEBPACK_IMPORTED_MODULE_2__["FicheComponent"] }
];
var FicheRoutingModule = /** @class */ (function () {
    function FicheRoutingModule() {
    }
    FicheRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"].forChild(routes)],
            exports: [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"]]
        })
    ], FicheRoutingModule);
    return FicheRoutingModule;
}());



/***/ }),

/***/ "./app/fiche/fiche.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FicheModule", function() { return FicheModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fiche_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./app/fiche/fiche-routing.module.ts");
/* harmony import */ var nativescript_angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("nativescript-angular/common");
/* harmony import */ var nativescript_angular_common__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_common__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fiche_fiche_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/fiche/fiche/fiche.component.ts");




var FicheModule = /** @class */ (function () {
    function FicheModule() {
    }
    FicheModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_fiche_fiche_component__WEBPACK_IMPORTED_MODULE_3__["FicheComponent"]],
            imports: [
                _fiche_routing_module__WEBPACK_IMPORTED_MODULE_1__["FicheRoutingModule"],
                nativescript_angular_common__WEBPACK_IMPORTED_MODULE_2__["NativeScriptCommonModule"]
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NO_ERRORS_SCHEMA"]]
        })
    ], FicheModule);
    return FicheModule;
}());



/***/ }),

/***/ "./app/fiche/fiche/fiche.component.css":
/***/ (function(module, exports) {

module.exports = "/* Add mobile styles for the component here.  */\n"

/***/ }),

/***/ "./app/fiche/fiche/fiche.component.html":
/***/ (function(module, exports) {

module.exports = "<ActionBar class=\"actionBarCarnet\">\n    <!-- \n    Use the NavigationButton as a side-drawer button in Android\n    because ActionItems are shown on the right side of the ActionBar\n    -->\n    <NavigationButton ios:visibility=\"collapsed\" icon=\"res://menu\" (tap)=\"onDrawerButtonTap()\"></NavigationButton>\n    <!-- \n    Use the ActionItem for IOS with position set to left. Using the\n    NavigationButton as a side-drawer button in iOS is not possible,\n    because its function is to always navigate back in the application.\n    -->\n    <ActionItem icon=\"res://menu\" android:visibility=\"collapsed\" (tap)=\"onDrawerButtonTap()\"\n        ios.position=\"left\" >\n    </ActionItem>\n    <Label class=\"blackPage\" text=\"FICHE N°00001\"></Label>\n</ActionBar>\n<GridLayout>\n    <ScrollView>\n        <StackLayout>\n            <StackLayout class=\"hr\"></StackLayout>\n            <GridLayout columns=\"*\" class=\"mes_signalements\">\n                <Label col=\"0\" text=\"20/04/2019 11:35\" class=\"date_heure\"></Label>\n            </GridLayout>\n            <GridLayout columns=\"auto, 200\">\n                <ContentView col=\"0\" id=\"myDanger1\" width=\"300px\" height=\"300px\" backgroundColor=\"#C4C4C4\"></ContentView>\n                <Label col=\"1\" text=\"SIGNALER DANGER\" class=\"declaration\"></Label>\n                <Label col=\"1\" text=\"Avalanche\" class=\"categorie\"></Label>\n                <Label col=\"1\" text=\"STATUT : PRIS EN COMPTE\" class=\"statut\"></Label>\n            </GridLayout>\n            <StackLayout>\n                <Label text=\"Latitude: 47.12317663\" color=\"#000000\" fontSize=\"30px\"></Label>\n                <Label text=\"Longitude: 2.44583129\" color=\"#000000\" fontSize=\"30px\"></Label>\n            </StackLayout>\n            <StackLayout>\n                <Image class=\"galerie\" src=\"https://www.telegraph.co.uk/content/dam/Travel/ski/Crans-Montana-avalanche-skiers-KEYSTONE-ANTHONY%20ANEX.jpg?imwidth=450\"  width=\"800px\" stretch=\"aspectFit\"></Image>\n                <Image class=\"galerie\" src=\"https://www.telegraph.co.uk/content/dam/Travel/ski/Crans-Montana-avalanche-skiers-KEYSTONE-ANTHONY%20ANEX.jpg?imwidth=450\"  width=\"800px\" stretch=\"aspectFit\"></Image>\n                <Image class=\"galerie_end\" src=\"https://www.telegraph.co.uk/content/dam/Travel/ski/Crans-Montana-avalanche-skiers-KEYSTONE-ANTHONY%20ANEX.jpg?imwidth=450\"  width=\"800px\" stretch=\"aspectFit\"></Image>\n            </StackLayout>\n        </StackLayout>\n    </ScrollView>\n</GridLayout>\n<StackLayout>\n    <BottomNavigation height=\"100%\">\n        <TabStrip>\n            <TabStripItem>\n                <Label text=\"&#xf015;\" class=\"nt-icon fas\"></Label>\n            </TabStripItem>\n        </TabStrip>\n    </BottomNavigation>\n</StackLayout>"

/***/ }),

/***/ "./app/fiche/fiche/fiche.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FicheComponent", function() { return FicheComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);

var FicheComponent = /** @class */ (function () {
    function FicheComponent() {
    }
    FicheComponent.prototype.ngOnInit = function () {
    };
    FicheComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ns-fiche',
            template: __webpack_require__("./app/fiche/fiche/fiche.component.html"),
            styles: [__webpack_require__("./app/fiche/fiche/fiche.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FicheComponent);
    return FicheComponent;
}());



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvZmljaGUvZmljaGUtcm91dGluZy5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2ZpY2hlL2ZpY2hlLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9hcHAvZmljaGUvZmljaGUvZmljaGUuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9hcHAvZmljaGUvZmljaGUvZmljaGUuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL2ZpY2hlL2ZpY2hlL2ZpY2hlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF5QztBQUU4QjtBQUNkO0FBRXpELElBQU0sTUFBTSxHQUFXO0lBQ3JCLEVBQUMsSUFBSSxFQUFDLEVBQUUsRUFBRSxTQUFTLEVBQUMscUVBQWMsRUFBQztDQUNwQyxDQUFDO0FBTUY7SUFBQTtJQUFrQyxDQUFDO0lBQXRCLGtCQUFrQjtRQUo5Qiw4REFBUSxDQUFDO1lBQ1IsT0FBTyxFQUFFLENBQUMsb0ZBQXdCLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3BELE9BQU8sRUFBRSxDQUFDLG9GQUF3QixDQUFDO1NBQ3BDLENBQUM7T0FDVyxrQkFBa0IsQ0FBSTtJQUFELHlCQUFDO0NBQUE7QUFBSjs7Ozs7Ozs7O0FDYi9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBMkQ7QUFFQztBQUNXO0FBQ2Q7QUFXekQ7SUFBQTtJQUEyQixDQUFDO0lBQWYsV0FBVztRQVJ2Qiw4REFBUSxDQUFDO1lBQ1IsWUFBWSxFQUFFLENBQUMscUVBQWMsQ0FBQztZQUM5QixPQUFPLEVBQUU7Z0JBQ1Asd0VBQWtCO2dCQUNsQixvRkFBd0I7YUFDekI7WUFDRCxPQUFPLEVBQUUsQ0FBQyw4REFBZ0IsQ0FBQztTQUM1QixDQUFDO09BQ1csV0FBVyxDQUFJO0lBQUQsa0JBQUM7Q0FBQTtBQUFKOzs7Ozs7OztBQ2Z4QixxRTs7Ozs7OztBQ0FBLCtxRkFBK3FGLDZIOzs7Ozs7OztBQ0EvcUY7QUFBQTtBQUFBO0FBQUE7QUFBa0Q7QUFPbEQ7SUFFRTtJQUFnQixDQUFDO0lBRWpCLGlDQUFRLEdBQVI7SUFDQSxDQUFDO0lBTFUsY0FBYztRQUwxQiwrREFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFVBQVU7WUFDcEIsdUVBQXFDOztTQUV0QyxDQUFDOztPQUNXLGNBQWMsQ0FPMUI7SUFBRCxxQkFBQztDQUFBO0FBUDBCIiwiZmlsZSI6IjIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVzIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBGaWNoZUNvbXBvbmVudCB9IGZyb20gJy4vZmljaGUvZmljaGUuY29tcG9uZW50JztcblxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXG4gIHtwYXRoOlwiXCIsIGNvbXBvbmVudDpGaWNoZUNvbXBvbmVudH1cbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQocm91dGVzKV0sXG4gIGV4cG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGVdXG59KVxuZXhwb3J0IGNsYXNzIEZpY2hlUm91dGluZ01vZHVsZSB7IH1cbiIsImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEZpY2hlUm91dGluZ01vZHVsZSB9IGZyb20gJy4vZmljaGUtcm91dGluZy5tb2R1bGUnO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEZpY2hlQ29tcG9uZW50IH0gZnJvbSAnLi9maWNoZS9maWNoZS5jb21wb25lbnQnO1xuXG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW0ZpY2hlQ29tcG9uZW50XSxcbiAgaW1wb3J0czogW1xuICAgIEZpY2hlUm91dGluZ01vZHVsZSxcbiAgICBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGVcbiAgXSxcbiAgc2NoZW1hczogW05PX0VSUk9SU19TQ0hFTUFdXG59KVxuZXhwb3J0IGNsYXNzIEZpY2hlTW9kdWxlIHsgfVxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIi8qIEFkZCBtb2JpbGUgc3R5bGVzIGZvciB0aGUgY29tcG9uZW50IGhlcmUuICAqL1xcblwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxBY3Rpb25CYXIgY2xhc3M9XFxcImFjdGlvbkJhckNhcm5ldFxcXCI+XFxuICAgIDwhLS0gXFxuICAgIFVzZSB0aGUgTmF2aWdhdGlvbkJ1dHRvbiBhcyBhIHNpZGUtZHJhd2VyIGJ1dHRvbiBpbiBBbmRyb2lkXFxuICAgIGJlY2F1c2UgQWN0aW9uSXRlbXMgYXJlIHNob3duIG9uIHRoZSByaWdodCBzaWRlIG9mIHRoZSBBY3Rpb25CYXJcXG4gICAgLS0+XFxuICAgIDxOYXZpZ2F0aW9uQnV0dG9uIGlvczp2aXNpYmlsaXR5PVxcXCJjb2xsYXBzZWRcXFwiIGljb249XFxcInJlczovL21lbnVcXFwiICh0YXApPVxcXCJvbkRyYXdlckJ1dHRvblRhcCgpXFxcIj48L05hdmlnYXRpb25CdXR0b24+XFxuICAgIDwhLS0gXFxuICAgIFVzZSB0aGUgQWN0aW9uSXRlbSBmb3IgSU9TIHdpdGggcG9zaXRpb24gc2V0IHRvIGxlZnQuIFVzaW5nIHRoZVxcbiAgICBOYXZpZ2F0aW9uQnV0dG9uIGFzIGEgc2lkZS1kcmF3ZXIgYnV0dG9uIGluIGlPUyBpcyBub3QgcG9zc2libGUsXFxuICAgIGJlY2F1c2UgaXRzIGZ1bmN0aW9uIGlzIHRvIGFsd2F5cyBuYXZpZ2F0ZSBiYWNrIGluIHRoZSBhcHBsaWNhdGlvbi5cXG4gICAgLS0+XFxuICAgIDxBY3Rpb25JdGVtIGljb249XFxcInJlczovL21lbnVcXFwiIGFuZHJvaWQ6dmlzaWJpbGl0eT1cXFwiY29sbGFwc2VkXFxcIiAodGFwKT1cXFwib25EcmF3ZXJCdXR0b25UYXAoKVxcXCJcXG4gICAgICAgIGlvcy5wb3NpdGlvbj1cXFwibGVmdFxcXCIgPlxcbiAgICA8L0FjdGlvbkl0ZW0+XFxuICAgIDxMYWJlbCBjbGFzcz1cXFwiYmxhY2tQYWdlXFxcIiB0ZXh0PVxcXCJGSUNIRSBOwrAwMDAwMVxcXCI+PC9MYWJlbD5cXG48L0FjdGlvbkJhcj5cXG48R3JpZExheW91dD5cXG4gICAgPFNjcm9sbFZpZXc+XFxuICAgICAgICA8U3RhY2tMYXlvdXQ+XFxuICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJoclxcXCI+PC9TdGFja0xheW91dD5cXG4gICAgICAgICAgICA8R3JpZExheW91dCBjb2x1bW5zPVxcXCIqXFxcIiBjbGFzcz1cXFwibWVzX3NpZ25hbGVtZW50c1xcXCI+XFxuICAgICAgICAgICAgICAgIDxMYWJlbCBjb2w9XFxcIjBcXFwiIHRleHQ9XFxcIjIwLzA0LzIwMTkgMTE6MzVcXFwiIGNsYXNzPVxcXCJkYXRlX2hldXJlXFxcIj48L0xhYmVsPlxcbiAgICAgICAgICAgIDwvR3JpZExheW91dD5cXG4gICAgICAgICAgICA8R3JpZExheW91dCBjb2x1bW5zPVxcXCJhdXRvLCAyMDBcXFwiPlxcbiAgICAgICAgICAgICAgICA8Q29udGVudFZpZXcgY29sPVxcXCIwXFxcIiBpZD1cXFwibXlEYW5nZXIxXFxcIiB3aWR0aD1cXFwiMzAwcHhcXFwiIGhlaWdodD1cXFwiMzAwcHhcXFwiIGJhY2tncm91bmRDb2xvcj1cXFwiI0M0QzRDNFxcXCI+PC9Db250ZW50Vmlldz5cXG4gICAgICAgICAgICAgICAgPExhYmVsIGNvbD1cXFwiMVxcXCIgdGV4dD1cXFwiU0lHTkFMRVIgREFOR0VSXFxcIiBjbGFzcz1cXFwiZGVjbGFyYXRpb25cXFwiPjwvTGFiZWw+XFxuICAgICAgICAgICAgICAgIDxMYWJlbCBjb2w9XFxcIjFcXFwiIHRleHQ9XFxcIkF2YWxhbmNoZVxcXCIgY2xhc3M9XFxcImNhdGVnb3JpZVxcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgICAgICAgPExhYmVsIGNvbD1cXFwiMVxcXCIgdGV4dD1cXFwiU1RBVFVUIDogUFJJUyBFTiBDT01QVEVcXFwiIGNsYXNzPVxcXCJzdGF0dXRcXFwiPjwvTGFiZWw+XFxuICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxcbiAgICAgICAgICAgIDxTdGFja0xheW91dD5cXG4gICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcIkxhdGl0dWRlOiA0Ny4xMjMxNzY2M1xcXCIgY29sb3I9XFxcIiMwMDAwMDBcXFwiIGZvbnRTaXplPVxcXCIzMHB4XFxcIj48L0xhYmVsPlxcbiAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiTG9uZ2l0dWRlOiAyLjQ0NTgzMTI5XFxcIiBjb2xvcj1cXFwiIzAwMDAwMFxcXCIgZm9udFNpemU9XFxcIjMwcHhcXFwiPjwvTGFiZWw+XFxuICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgICAgICAgICA8U3RhY2tMYXlvdXQ+XFxuICAgICAgICAgICAgICAgIDxJbWFnZSBjbGFzcz1cXFwiZ2FsZXJpZVxcXCIgc3JjPVxcXCJodHRwczovL3d3dy50ZWxlZ3JhcGguY28udWsvY29udGVudC9kYW0vVHJhdmVsL3NraS9DcmFucy1Nb250YW5hLWF2YWxhbmNoZS1za2llcnMtS0VZU1RPTkUtQU5USE9OWSUyMEFORVguanBnP2ltd2lkdGg9NDUwXFxcIiAgd2lkdGg9XFxcIjgwMHB4XFxcIiBzdHJldGNoPVxcXCJhc3BlY3RGaXRcXFwiPjwvSW1hZ2U+XFxuICAgICAgICAgICAgICAgIDxJbWFnZSBjbGFzcz1cXFwiZ2FsZXJpZVxcXCIgc3JjPVxcXCJodHRwczovL3d3dy50ZWxlZ3JhcGguY28udWsvY29udGVudC9kYW0vVHJhdmVsL3NraS9DcmFucy1Nb250YW5hLWF2YWxhbmNoZS1za2llcnMtS0VZU1RPTkUtQU5USE9OWSUyMEFORVguanBnP2ltd2lkdGg9NDUwXFxcIiAgd2lkdGg9XFxcIjgwMHB4XFxcIiBzdHJldGNoPVxcXCJhc3BlY3RGaXRcXFwiPjwvSW1hZ2U+XFxuICAgICAgICAgICAgICAgIDxJbWFnZSBjbGFzcz1cXFwiZ2FsZXJpZV9lbmRcXFwiIHNyYz1cXFwiaHR0cHM6Ly93d3cudGVsZWdyYXBoLmNvLnVrL2NvbnRlbnQvZGFtL1RyYXZlbC9za2kvQ3JhbnMtTW9udGFuYS1hdmFsYW5jaGUtc2tpZXJzLUtFWVNUT05FLUFOVEhPTlklMjBBTkVYLmpwZz9pbXdpZHRoPTQ1MFxcXCIgIHdpZHRoPVxcXCI4MDBweFxcXCIgc3RyZXRjaD1cXFwiYXNwZWN0Rml0XFxcIj48L0ltYWdlPlxcbiAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICA8L1Njcm9sbFZpZXc+XFxuPC9HcmlkTGF5b3V0PlxcbjxTdGFja0xheW91dD5cXG4gICAgPEJvdHRvbU5hdmlnYXRpb24gaGVpZ2h0PVxcXCIxMDAlXFxcIj5cXG4gICAgICAgIDxUYWJTdHJpcD5cXG4gICAgICAgICAgICA8VGFiU3RyaXBJdGVtPlxcbiAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiJiN4ZjAxNTtcXFwiIGNsYXNzPVxcXCJudC1pY29uIGZhc1xcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgICA8L1RhYlN0cmlwSXRlbT5cXG4gICAgICAgIDwvVGFiU3RyaXA+XFxuICAgIDwvQm90dG9tTmF2aWdhdGlvbj5cXG48L1N0YWNrTGF5b3V0PlwiIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbnMtZmljaGUnLFxuICB0ZW1wbGF0ZVVybDogJy4vZmljaGUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9maWNoZS5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgRmljaGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gIH1cblxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==