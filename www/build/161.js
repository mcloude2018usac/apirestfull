webpackJsonp([161],{

/***/ 1002:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DenunciasInfoPageModule", function() { return DenunciasInfoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__denuncias_info__ = __webpack_require__(1444);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular_froala_wysiwyg__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tinymce_tinymce_angular__ = __webpack_require__(452);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var DenunciasInfoPageModule = /** @class */ (function () {
    function DenunciasInfoPageModule() {
    }
    DenunciasInfoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__denuncias_info__["a" /* DenunciasInfoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__denuncias_info__["a" /* DenunciasInfoPage */]), __WEBPACK_IMPORTED_MODULE_3_angular_froala_wysiwyg__["b" /* FroalaViewModule */], __WEBPACK_IMPORTED_MODULE_4__tinymce_tinymce_angular__["a" /* EditorModule */]
            ],
        })
    ], DenunciasInfoPageModule);
    return DenunciasInfoPageModule;
}());

//# sourceMappingURL=denuncias-info.module.js.map

/***/ }),

/***/ 1444:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DenunciasInfoPage; });
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



var DenunciasInfoPage = /** @class */ (function () {
    function DenunciasInfoPage(viewCtrl, regService, navCtrl, navParams, msj) {
        this.viewCtrl = viewCtrl;
        this.regService = regService;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.msj = msj;
        this.items = [];
    }
    DenunciasInfoPage.prototype.ionViewDidLoad = function () {
        this.titulox = this.navParams.data.titulo;
        this.f1 = this.navParams.data.f1;
        this.f2 = this.navParams.data.f2;
        this.html = this.navParams.data.html;
        var video = this.myVideo.nativeElement;
        video.src = this.navParams.data.video;
    };
    DenunciasInfoPage.prototype.cancel = function () {
        this.viewCtrl.dismiss();
    };
    DenunciasInfoPage.prototype.dalink = function (op) {
        //this.msj.showError3('Link QR',op);
        this.regService.abrelinkinterno3(this.linkx, '_blank', '', 0);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myvideo'),
        __metadata("design:type", Object)
    ], DenunciasInfoPage.prototype, "myVideo", void 0);
    DenunciasInfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-denuncias-info',template:/*ion-inline-start:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\DENUNCIAS\denuncias-info\denuncias-info.html"*/'<ion-header>\n  <ion-navbar [color]="\'navbarColor\'">\n     \n    <ion-title>\n     Documentación\n    </ion-title>   \n    <ion-buttons end>   \n      <button ion-button (click)="cancel()" icon-only ion-button padding-right>\n      \n              <ion-icon name="close"></ion-icon>\n                       \n      </button>\n      </ion-buttons>\n\n  </ion-navbar>   \n \n</ion-header>   \n     \n<ion-content padding>\n\n    <ion-list text-wrap>\n\n        <ion-card >\n            <ion-row>\n                <ion-col  style="border:none;background: rgb(212, 224, 250);"  text-right>\n                    FOTO\n            </ion-col>    \n               \n                <ion-item text-wrap>\n                          <img src="{{f1}}" >\n                </ion-item>\n               \n              </ion-row>\n            </ion-card>\n\n\n        <ion-item text-wrap>\n            <ion-card >\n                <ion-row>\n                    <ion-col  style="border:none;background: rgb(212, 224, 250);"  text-right>\n                        FOTO\n                </ion-col>    \n                    <ion-item text-wrap>\n                      \n                  \n                              <img src="{{f2}}" >\n                            \n                            \n                    \n                    </ion-item>\n                   \n                  </ion-row>\n                </ion-card>\n    \n          </ion-item>    \n   \n               \n          <ion-item text-wrap>\n\n              <ion-card >\n                  <ion-row>\n                      <ion-col  style="border:none;background: rgb(212, 224, 250);"  text-right>\n                         VIDEO\n                  </ion-col>    \n                      <ion-item text-wrap>\n                        \n                        \n                          <video #myvideo style="width: 100%;height: auto;" controls></video>\n                              \n                              \n                      \n                      </ion-item>\n                     \n                    </ion-row>\n                  </ion-card>\n   \n            \n        \n            </ion-item> \n    <!--\n            <ion-item text-wrap>\n\n                <ion-card >\n                    <ion-row>\n                        <ion-col  style="border:none;background: rgb(212, 224, 250);"  text-right>\n                           DETALLE SEGUIMIENTO\n                    </ion-col>    \n                        <ion-item text-wrap>\n                          \n                      \n                           \n                        <div [froalaView]="html"></div>\n                                \n                                \n                        \n                        </ion-item>\n                       \n                      </ion-row>\n                    </ion-card>\n     \n              \n          \n              </ion-item> \n-->\n\n    </ion-list>\n        \n   \n  \n\n\n\n  \n           \n\n</ion-content>\n'/*ion-inline-end:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\DENUNCIAS\denuncias-info\denuncias-info.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["F" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__providers__["a" /* Auth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers__["d" /* NotificationProvider */]])
    ], DenunciasInfoPage);
    return DenunciasInfoPage;
}());

//# sourceMappingURL=denuncias-info.js.map

/***/ })

});
//# sourceMappingURL=161.js.map