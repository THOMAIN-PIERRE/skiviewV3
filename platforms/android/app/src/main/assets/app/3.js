(global["webpackJsonp"] = global["webpackJsonp"] || []).push([[3],{

/***/ "./app/formulaire/formulaire-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormulaireRoutingModule", function() { return FormulaireRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("nativescript-angular/router");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _formulaire_formulaire_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/formulaire/formulaire/formulaire.component.ts");



var routes = [
    { path: "", component: _formulaire_formulaire_component__WEBPACK_IMPORTED_MODULE_2__["FormulaireComponent"] }
];
var FormulaireRoutingModule = /** @class */ (function () {
    function FormulaireRoutingModule() {
    }
    FormulaireRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"].forChild(routes)],
            exports: [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"]]
        })
    ], FormulaireRoutingModule);
    return FormulaireRoutingModule;
}());



/***/ }),

/***/ "./app/formulaire/formulaire.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormulaireModule", function() { return FormulaireModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _formulaire_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./app/formulaire/formulaire-routing.module.ts");
/* harmony import */ var nativescript_angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("nativescript-angular/common");
/* harmony import */ var nativescript_angular_common__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_common__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _formulaire_formulaire_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/formulaire/formulaire/formulaire.component.ts");




var FormulaireModule = /** @class */ (function () {
    function FormulaireModule() {
    }
    FormulaireModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_formulaire_formulaire_component__WEBPACK_IMPORTED_MODULE_3__["FormulaireComponent"]],
            imports: [
                _formulaire_routing_module__WEBPACK_IMPORTED_MODULE_1__["FormulaireRoutingModule"],
                nativescript_angular_common__WEBPACK_IMPORTED_MODULE_2__["NativeScriptCommonModule"]
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NO_ERRORS_SCHEMA"]]
        })
    ], FormulaireModule);
    return FormulaireModule;
}());



/***/ }),

/***/ "./app/formulaire/formulaire/formulaire.component.css":
/***/ (function(module, exports) {

module.exports = "/* Add mobile styles for the component here.  */\n"

/***/ }),

/***/ "./app/formulaire/formulaire/formulaire.component.html":
/***/ (function(module, exports) {

module.exports = "<ActionBar class=\"actionBarCarnet\">\n    <!-- \n    Use the NavigationButton as a side-drawer button in Android\n    because ActionItems are shown on the right side of the ActionBar\n    -->\n    <NavigationButton ios:visibility=\"collapsed\" icon=\"res://menu\" (tap)=\"onDrawerButtonTap()\"></NavigationButton>\n    <!-- \n    Use the ActionItem for IOS with position set to left. Using the\n    NavigationButton as a side-drawer button in iOS is not possible,\n    because its function is to always navigate back in the application.\n    -->\n    <ActionItem icon=\"res://menu\" android:visibility=\"collapsed\" (tap)=\"onDrawerButtonTap()\"\n        ios.position=\"left\" >\n    </ActionItem>\n    <Label class=\"blackPage\" text=\"CARNET DE SANTE\"></Label>\n</ActionBar>\n\n\n       \n<StackLayout class=\"form\">\n    <StackLayout class=\"input-field\">\n    <TextField class=\"input\" hint=\"Prénom\"></TextField>\n    <TextField class=\"input\" hint=\"Nom\"></TextField>\n    <TextField class=\"input\" hint=\"Age\" keyboardType=\"integer\"></TextField>\n    <TextField class=\"input\" hint=\"Groupe sanguin\"></TextField>\n    <TextField class=\"input\" hint=\"Taille (en cm)\" keyboardType=\"integer\"></TextField>\n    <TextField class=\"input\" hint=\"Poids (en kg)\" keyboardType=\"integer\"></TextField>\n    <TextField class=\"input\" hint=\"Donneur d'organe\"></TextField>\n    <TextField class=\"input\" hint=\"Allergie(s)\"></TextField>\n    <TextField class=\"input\" hint=\"Pathologie(s)\"></TextField>\n    <TextField class=\"input\" hint=\"Traitement(s)\"></TextField>\n    <TextField class=\"input\" hint=\"Personne à contacter\"></TextField>\n    <TextField class=\"input\" hint=\"Numéro de la personne à contacter\" keyboardType=\"phone\" autocorrect=\"false\" autocapitalizationType=\"none\"></TextField>\n    <FlexboxLayout flexDirection=\"row\" flexWrap=\"wrap\" justifyContent=\"space-around\">   \n        <Button text=\"VALIDER\" class=\"valider_carnet\"></Button> \n        <Button text=\"SUPPRIMER\" class=\"supprimer_carnet\"></Button>\n    </FlexboxLayout>\n</StackLayout>\n<StackLayout>\n    <BottomNavigation height=\"1900px\">\n        <TabStrip>\n            <TabStripItem>\n                <Label col=\"0\" text=\"&#xf05a;\" class=\"nt-icon fas\"></Label>\n            </TabStripItem>\n            <TabStripItem>\n                <Label col=\"1\" text=\"&#xf041;\" class=\"nt-icon fas\"></Label>\n            </TabStripItem>\n            <TabStripItem>\n                <Label col=\"2\" text=\"&#xf3c5;\" class=\"nt-icon fas\"></Label>\n            </TabStripItem>\n        </TabStrip>\n    </BottomNavigation>\n</StackLayout>\n        \n     \n      "

/***/ }),

/***/ "./app/formulaire/formulaire/formulaire.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormulaireComponent", function() { return FormulaireComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);

var FormulaireComponent = /** @class */ (function () {
    function FormulaireComponent() {
    }
    FormulaireComponent.prototype.ngOnInit = function () {
    };
    FormulaireComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ns-formulaire',
            template: __webpack_require__("./app/formulaire/formulaire/formulaire.component.html"),
            styles: [__webpack_require__("./app/formulaire/formulaire/formulaire.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FormulaireComponent);
    return FormulaireComponent;
}());



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvZm9ybXVsYWlyZS9mb3JtdWxhaXJlLXJvdXRpbmcubW9kdWxlLnRzIiwid2VicGFjazovLy8uL2FwcC9mb3JtdWxhaXJlL2Zvcm11bGFpcmUubW9kdWxlLnRzIiwid2VicGFjazovLy8uL2FwcC9mb3JtdWxhaXJlL2Zvcm11bGFpcmUvZm9ybXVsYWlyZS5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL2FwcC9mb3JtdWxhaXJlL2Zvcm11bGFpcmUvZm9ybXVsYWlyZS5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hcHAvZm9ybXVsYWlyZS9mb3JtdWxhaXJlL2Zvcm11bGFpcmUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXlDO0FBRThCO0FBQ0M7QUFFeEUsSUFBTSxNQUFNLEdBQVc7SUFDckIsRUFBQyxJQUFJLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxvRkFBbUIsRUFBQztDQUMzQyxDQUFDO0FBTUY7SUFBQTtJQUF1QyxDQUFDO0lBQTNCLHVCQUF1QjtRQUpuQyw4REFBUSxDQUFDO1lBQ1IsT0FBTyxFQUFFLENBQUMsb0ZBQXdCLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3BELE9BQU8sRUFBRSxDQUFDLG9GQUF3QixDQUFDO1NBQ3BDLENBQUM7T0FDVyx1QkFBdUIsQ0FBSTtJQUFELDhCQUFDO0NBQUE7QUFBSjs7Ozs7Ozs7O0FDYnBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBMkQ7QUFFVztBQUNDO0FBQ0M7QUFXeEU7SUFBQTtJQUFnQyxDQUFDO0lBQXBCLGdCQUFnQjtRQVI1Qiw4REFBUSxDQUFDO1lBQ1IsWUFBWSxFQUFFLENBQUMsb0ZBQW1CLENBQUM7WUFDbkMsT0FBTyxFQUFFO2dCQUNQLGtGQUF1QjtnQkFDdkIsb0ZBQXdCO2FBQ3pCO1lBQ0QsT0FBTyxFQUFFLENBQUMsOERBQWdCLENBQUM7U0FDNUIsQ0FBQztPQUNXLGdCQUFnQixDQUFJO0lBQUQsdUJBQUM7Q0FBQTtBQUFKOzs7Ozs7OztBQ2Y3QixxRTs7Ozs7OztBQ0FBLDJ1RUFBMnVFLDRJQUE0SSw0SUFBNEksc0o7Ozs7Ozs7O0FDQW5nRjtBQUFBO0FBQUE7QUFBQTtBQUFrRDtBQU9sRDtJQUVFO0lBQWdCLENBQUM7SUFFakIsc0NBQVEsR0FBUjtJQUNBLENBQUM7SUFMVSxtQkFBbUI7UUFML0IsK0RBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxlQUFlO1lBQ3pCLHNGQUEwQzs7U0FFM0MsQ0FBQzs7T0FDVyxtQkFBbUIsQ0FPL0I7SUFBRCwwQkFBQztDQUFBO0FBUCtCIiwiZmlsZSI6IjMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVzIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBGb3JtdWxhaXJlQ29tcG9uZW50IH0gZnJvbSAnLi9mb3JtdWxhaXJlL2Zvcm11bGFpcmUuY29tcG9uZW50JztcblxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXG4gIHtwYXRoOiBcIlwiLCBjb21wb25lbnQ6IEZvcm11bGFpcmVDb21wb25lbnR9XG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvckNoaWxkKHJvdXRlcyldLFxuICBleHBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlXVxufSlcbmV4cG9ydCBjbGFzcyBGb3JtdWxhaXJlUm91dGluZ01vZHVsZSB7IH1cbiIsImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEZvcm11bGFpcmVSb3V0aW5nTW9kdWxlIH0gZnJvbSAnLi9mb3JtdWxhaXJlLXJvdXRpbmcubW9kdWxlJztcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBGb3JtdWxhaXJlQ29tcG9uZW50IH0gZnJvbSAnLi9mb3JtdWxhaXJlL2Zvcm11bGFpcmUuY29tcG9uZW50JztcblxuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtGb3JtdWxhaXJlQ29tcG9uZW50XSxcbiAgaW1wb3J0czogW1xuICAgIEZvcm11bGFpcmVSb3V0aW5nTW9kdWxlLFxuICAgIE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZVxuICBdLFxuICBzY2hlbWFzOiBbTk9fRVJST1JTX1NDSEVNQV1cbn0pXG5leHBvcnQgY2xhc3MgRm9ybXVsYWlyZU1vZHVsZSB7IH1cbiIsIm1vZHVsZS5leHBvcnRzID0gXCIvKiBBZGQgbW9iaWxlIHN0eWxlcyBmb3IgdGhlIGNvbXBvbmVudCBoZXJlLiAgKi9cXG5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8QWN0aW9uQmFyIGNsYXNzPVxcXCJhY3Rpb25CYXJDYXJuZXRcXFwiPlxcbiAgICA8IS0tIFxcbiAgICBVc2UgdGhlIE5hdmlnYXRpb25CdXR0b24gYXMgYSBzaWRlLWRyYXdlciBidXR0b24gaW4gQW5kcm9pZFxcbiAgICBiZWNhdXNlIEFjdGlvbkl0ZW1zIGFyZSBzaG93biBvbiB0aGUgcmlnaHQgc2lkZSBvZiB0aGUgQWN0aW9uQmFyXFxuICAgIC0tPlxcbiAgICA8TmF2aWdhdGlvbkJ1dHRvbiBpb3M6dmlzaWJpbGl0eT1cXFwiY29sbGFwc2VkXFxcIiBpY29uPVxcXCJyZXM6Ly9tZW51XFxcIiAodGFwKT1cXFwib25EcmF3ZXJCdXR0b25UYXAoKVxcXCI+PC9OYXZpZ2F0aW9uQnV0dG9uPlxcbiAgICA8IS0tIFxcbiAgICBVc2UgdGhlIEFjdGlvbkl0ZW0gZm9yIElPUyB3aXRoIHBvc2l0aW9uIHNldCB0byBsZWZ0LiBVc2luZyB0aGVcXG4gICAgTmF2aWdhdGlvbkJ1dHRvbiBhcyBhIHNpZGUtZHJhd2VyIGJ1dHRvbiBpbiBpT1MgaXMgbm90IHBvc3NpYmxlLFxcbiAgICBiZWNhdXNlIGl0cyBmdW5jdGlvbiBpcyB0byBhbHdheXMgbmF2aWdhdGUgYmFjayBpbiB0aGUgYXBwbGljYXRpb24uXFxuICAgIC0tPlxcbiAgICA8QWN0aW9uSXRlbSBpY29uPVxcXCJyZXM6Ly9tZW51XFxcIiBhbmRyb2lkOnZpc2liaWxpdHk9XFxcImNvbGxhcHNlZFxcXCIgKHRhcCk9XFxcIm9uRHJhd2VyQnV0dG9uVGFwKClcXFwiXFxuICAgICAgICBpb3MucG9zaXRpb249XFxcImxlZnRcXFwiID5cXG4gICAgPC9BY3Rpb25JdGVtPlxcbiAgICA8TGFiZWwgY2xhc3M9XFxcImJsYWNrUGFnZVxcXCIgdGV4dD1cXFwiQ0FSTkVUIERFIFNBTlRFXFxcIj48L0xhYmVsPlxcbjwvQWN0aW9uQmFyPlxcblxcblxcbiAgICAgICBcXG48U3RhY2tMYXlvdXQgY2xhc3M9XFxcImZvcm1cXFwiPlxcbiAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcImlucHV0LWZpZWxkXFxcIj5cXG4gICAgPFRleHRGaWVsZCBjbGFzcz1cXFwiaW5wdXRcXFwiIGhpbnQ9XFxcIlByw6lub21cXFwiPjwvVGV4dEZpZWxkPlxcbiAgICA8VGV4dEZpZWxkIGNsYXNzPVxcXCJpbnB1dFxcXCIgaGludD1cXFwiTm9tXFxcIj48L1RleHRGaWVsZD5cXG4gICAgPFRleHRGaWVsZCBjbGFzcz1cXFwiaW5wdXRcXFwiIGhpbnQ9XFxcIkFnZVxcXCIga2V5Ym9hcmRUeXBlPVxcXCJpbnRlZ2VyXFxcIj48L1RleHRGaWVsZD5cXG4gICAgPFRleHRGaWVsZCBjbGFzcz1cXFwiaW5wdXRcXFwiIGhpbnQ9XFxcIkdyb3VwZSBzYW5ndWluXFxcIj48L1RleHRGaWVsZD5cXG4gICAgPFRleHRGaWVsZCBjbGFzcz1cXFwiaW5wdXRcXFwiIGhpbnQ9XFxcIlRhaWxsZSAoZW4gY20pXFxcIiBrZXlib2FyZFR5cGU9XFxcImludGVnZXJcXFwiPjwvVGV4dEZpZWxkPlxcbiAgICA8VGV4dEZpZWxkIGNsYXNzPVxcXCJpbnB1dFxcXCIgaGludD1cXFwiUG9pZHMgKGVuIGtnKVxcXCIga2V5Ym9hcmRUeXBlPVxcXCJpbnRlZ2VyXFxcIj48L1RleHRGaWVsZD5cXG4gICAgPFRleHRGaWVsZCBjbGFzcz1cXFwiaW5wdXRcXFwiIGhpbnQ9XFxcIkRvbm5ldXIgZCdvcmdhbmVcXFwiPjwvVGV4dEZpZWxkPlxcbiAgICA8VGV4dEZpZWxkIGNsYXNzPVxcXCJpbnB1dFxcXCIgaGludD1cXFwiQWxsZXJnaWUocylcXFwiPjwvVGV4dEZpZWxkPlxcbiAgICA8VGV4dEZpZWxkIGNsYXNzPVxcXCJpbnB1dFxcXCIgaGludD1cXFwiUGF0aG9sb2dpZShzKVxcXCI+PC9UZXh0RmllbGQ+XFxuICAgIDxUZXh0RmllbGQgY2xhc3M9XFxcImlucHV0XFxcIiBoaW50PVxcXCJUcmFpdGVtZW50KHMpXFxcIj48L1RleHRGaWVsZD5cXG4gICAgPFRleHRGaWVsZCBjbGFzcz1cXFwiaW5wdXRcXFwiIGhpbnQ9XFxcIlBlcnNvbm5lIMOgIGNvbnRhY3RlclxcXCI+PC9UZXh0RmllbGQ+XFxuICAgIDxUZXh0RmllbGQgY2xhc3M9XFxcImlucHV0XFxcIiBoaW50PVxcXCJOdW3DqXJvIGRlIGxhIHBlcnNvbm5lIMOgIGNvbnRhY3RlclxcXCIga2V5Ym9hcmRUeXBlPVxcXCJwaG9uZVxcXCIgYXV0b2NvcnJlY3Q9XFxcImZhbHNlXFxcIiBhdXRvY2FwaXRhbGl6YXRpb25UeXBlPVxcXCJub25lXFxcIj48L1RleHRGaWVsZD5cXG4gICAgPEZsZXhib3hMYXlvdXQgZmxleERpcmVjdGlvbj1cXFwicm93XFxcIiBmbGV4V3JhcD1cXFwid3JhcFxcXCIganVzdGlmeUNvbnRlbnQ9XFxcInNwYWNlLWFyb3VuZFxcXCI+ICAgXFxuICAgICAgICA8QnV0dG9uIHRleHQ9XFxcIlZBTElERVJcXFwiIGNsYXNzPVxcXCJ2YWxpZGVyX2Nhcm5ldFxcXCI+PC9CdXR0b24+IFxcbiAgICAgICAgPEJ1dHRvbiB0ZXh0PVxcXCJTVVBQUklNRVJcXFwiIGNsYXNzPVxcXCJzdXBwcmltZXJfY2FybmV0XFxcIj48L0J1dHRvbj5cXG4gICAgPC9GbGV4Ym94TGF5b3V0PlxcbjwvU3RhY2tMYXlvdXQ+XFxuPFN0YWNrTGF5b3V0PlxcbiAgICA8Qm90dG9tTmF2aWdhdGlvbiBoZWlnaHQ9XFxcIjE5MDBweFxcXCI+XFxuICAgICAgICA8VGFiU3RyaXA+XFxuICAgICAgICAgICAgPFRhYlN0cmlwSXRlbT5cXG4gICAgICAgICAgICAgICAgPExhYmVsIGNvbD1cXFwiMFxcXCIgdGV4dD1cXFwiJiN4ZjA1YTtcXFwiIGNsYXNzPVxcXCJudC1pY29uIGZhc1xcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgICA8L1RhYlN0cmlwSXRlbT5cXG4gICAgICAgICAgICA8VGFiU3RyaXBJdGVtPlxcbiAgICAgICAgICAgICAgICA8TGFiZWwgY29sPVxcXCIxXFxcIiB0ZXh0PVxcXCImI3hmMDQxO1xcXCIgY2xhc3M9XFxcIm50LWljb24gZmFzXFxcIj48L0xhYmVsPlxcbiAgICAgICAgICAgIDwvVGFiU3RyaXBJdGVtPlxcbiAgICAgICAgICAgIDxUYWJTdHJpcEl0ZW0+XFxuICAgICAgICAgICAgICAgIDxMYWJlbCBjb2w9XFxcIjJcXFwiIHRleHQ9XFxcIiYjeGYzYzU7XFxcIiBjbGFzcz1cXFwibnQtaWNvbiBmYXNcXFwiPjwvTGFiZWw+XFxuICAgICAgICAgICAgPC9UYWJTdHJpcEl0ZW0+XFxuICAgICAgICA8L1RhYlN0cmlwPlxcbiAgICA8L0JvdHRvbU5hdmlnYXRpb24+XFxuPC9TdGFja0xheW91dD5cXG4gICAgICAgIFxcbiAgICAgXFxuICAgICAgXCIiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICducy1mb3JtdWxhaXJlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2Zvcm11bGFpcmUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9mb3JtdWxhaXJlLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBGb3JtdWxhaXJlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICB9XG5cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=