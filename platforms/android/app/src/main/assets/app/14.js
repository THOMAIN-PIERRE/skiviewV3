(global["webpackJsonp"] = global["webpackJsonp"] || []).push([[14],{

/***/ "./app/form-carnet/form-carnet-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormCarnetRoutingModule", function() { return FormCarnetRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("nativescript-angular/router");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _form_carnet_form_carnet_form_carnet_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/form_carnet/form-carnet/form-carnet.component.ts");



var routes = [
    { path: "", component: _form_carnet_form_carnet_form_carnet_component__WEBPACK_IMPORTED_MODULE_2__["FormCarnetComponent"] }
];
var FormCarnetRoutingModule = /** @class */ (function () {
    function FormCarnetRoutingModule() {
    }
    FormCarnetRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"].forChild(routes)],
            exports: [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"]]
        })
    ], FormCarnetRoutingModule);
    return FormCarnetRoutingModule;
}());



/***/ }),

/***/ "./app/form-carnet/form-carnet.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormCarnetModule", function() { return FormCarnetModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _form_carnet_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./app/form-carnet/form-carnet-routing.module.ts");
/* harmony import */ var nativescript_angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("nativescript-angular/common");
/* harmony import */ var nativescript_angular_common__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_common__WEBPACK_IMPORTED_MODULE_2__);



var FormCarnetModule = /** @class */ (function () {
    function FormCarnetModule() {
    }
    FormCarnetModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [],
            imports: [
                _form_carnet_routing_module__WEBPACK_IMPORTED_MODULE_1__["FormCarnetRoutingModule"],
                nativescript_angular_common__WEBPACK_IMPORTED_MODULE_2__["NativeScriptCommonModule"]
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NO_ERRORS_SCHEMA"]]
        })
    ], FormCarnetModule);
    return FormCarnetModule;
}());



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvZm9ybS1jYXJuZXQvZm9ybS1jYXJuZXQtcm91dGluZy5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2Zvcm0tY2FybmV0L2Zvcm0tY2FybmV0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF5QztBQUU4QjtBQUNnQjtBQUd2RixJQUFNLE1BQU0sR0FBVztJQUNyQixFQUFDLElBQUksRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFDLGtHQUFtQixFQUFDO0NBQzFDLENBQUM7QUFNRjtJQUFBO0lBQXVDLENBQUM7SUFBM0IsdUJBQXVCO1FBSm5DLDhEQUFRLENBQUM7WUFDUixPQUFPLEVBQUUsQ0FBQyxvRkFBd0IsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDcEQsT0FBTyxFQUFFLENBQUMsb0ZBQXdCLENBQUM7U0FDcEMsQ0FBQztPQUNXLHVCQUF1QixDQUFJO0lBQUQsOEJBQUM7Q0FBQTtBQUFKOzs7Ozs7Ozs7QUNkcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBMkQ7QUFFWTtBQUNBO0FBV3ZFO0lBQUE7SUFBZ0MsQ0FBQztJQUFwQixnQkFBZ0I7UUFSNUIsOERBQVEsQ0FBQztZQUNSLFlBQVksRUFBRSxFQUFFO1lBQ2hCLE9BQU8sRUFBRTtnQkFDUCxtRkFBdUI7Z0JBQ3ZCLG9GQUF3QjthQUN6QjtZQUNELE9BQU8sRUFBRSxDQUFDLDhEQUFnQixDQUFDO1NBQzVCLENBQUM7T0FDVyxnQkFBZ0IsQ0FBSTtJQUFELHVCQUFDO0NBQUE7QUFBSiIsImZpbGUiOiIxNC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEZvcm1DYXJuZXRDb21wb25lbnQgfSBmcm9tICcuLi9mb3JtX2Nhcm5ldC9mb3JtLWNhcm5ldC9mb3JtLWNhcm5ldC5jb21wb25lbnQnO1xuXG5cbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xuICB7cGF0aDogXCJcIiwgY29tcG9uZW50OkZvcm1DYXJuZXRDb21wb25lbnR9XG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvckNoaWxkKHJvdXRlcyldLFxuICBleHBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlXVxufSlcbmV4cG9ydCBjbGFzcyBGb3JtQ2FybmV0Um91dGluZ01vZHVsZSB7IH1cbiIsImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEZvcm1DYXJuZXRSb3V0aW5nTW9kdWxlIH0gZnJvbSAnLi9mb3JtLWNhcm5ldC1yb3V0aW5nLm1vZHVsZSc7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9jb21tb24nO1xuXG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW10sXG4gIGltcG9ydHM6IFtcbiAgICBGb3JtQ2FybmV0Um91dGluZ01vZHVsZSxcbiAgICBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGVcbiAgXSxcbiAgc2NoZW1hczogW05PX0VSUk9SU19TQ0hFTUFdXG59KVxuZXhwb3J0IGNsYXNzIEZvcm1DYXJuZXRNb2R1bGUgeyB9XG4iXSwic291cmNlUm9vdCI6IiJ9