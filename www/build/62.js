webpackJsonp([62],{

/***/ 1128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfouacPageModule", function() { return InfouacPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__infouac__ = __webpack_require__(1584);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var InfouacPageModule = /** @class */ (function () {
    function InfouacPageModule() {
    }
    InfouacPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__infouac__["a" /* InfouacPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__infouac__["a" /* InfouacPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], InfouacPageModule);
    return InfouacPageModule;
}());

//# sourceMappingURL=infouac.module.js.map

/***/ }),

/***/ 1584:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfouacPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers__ = __webpack_require__(103);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var InfouacPage = /** @class */ (function () {
    function InfouacPage(regService, navCtrl, navParams) {
        this.regService = regService;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    InfouacPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad InfouacPage');
    };
    InfouacPage.prototype.manageGallery = function () {
    };
    InfouacPage.prototype.dalink = function (op) {
        //this.msj.showError3('Link QR',op);
        this.regService.abrelinkinterno2('http://nuevos.usac.edu.gt/');
    };
    InfouacPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    InfouacPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-infouac',template:/*ion-inline-start:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\USAC\infouac\infouac.html"*/'<ion-header>\n    <ion-navbar [color]="\'navbarColor\'" hideBackButton="true">\n      <ion-buttons left>\n        <button ion-button icon-only (click)="goBack()">\n          <ion-icon name="arrow-back"></ion-icon>\n        </button>\n      </ion-buttons>\n      <ion-title>Información</ion-title>\n      \n      \n    </ion-navbar>\n  </ion-header>\n\n   \n<ion-content pading>\n\n   \n        <img id="profile-image"  height="100%" width="100%"\n         src="https://firebasestorage.googleapis.com/v0/b/usacenlinea.appspot.com/o/sun2020.jpg?alt=media&token=4242bb10-ae68-4b2c-ae99-9991978ab540">\n       \n\n\n     \n    \n    <ion-row>\n    \n            <ion-col text-center>\n              <button  ion-button  color="secondary" (click)="dalink(1)" \n               strong>\n               Más información\n              </button>\n            </ion-col>\n          </ion-row>\n       \n</ion-content>\n'/*ion-inline-end:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\USAC\infouac\infouac.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers__["a" /* Auth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavParams */]])
    ], InfouacPage);
    return InfouacPage;
}());

//# sourceMappingURL=infouac.js.map

/***/ })

});
//# sourceMappingURL=62.js.map