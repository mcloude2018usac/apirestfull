webpackJsonp([45],{

/***/ 1147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MensajeviewPageModule", function() { return MensajeviewPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mensajeview__ = __webpack_require__(1604);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MensajeviewPageModule = /** @class */ (function () {
    function MensajeviewPageModule() {
    }
    MensajeviewPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__mensajeview__["a" /* MensajeviewPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__mensajeview__["a" /* MensajeviewPage */]),
            ],
        })
    ], MensajeviewPageModule);
    return MensajeviewPageModule;
}());

//# sourceMappingURL=mensajeview.module.js.map

/***/ }),

/***/ 1604:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MensajeviewPage; });
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



/**
 * Generated class for the MensajeviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MensajeviewPage = /** @class */ (function () {
    function MensajeviewPage(regService, navCtrl, navParams) {
        this.regService = regService;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.items = [];
    }
    MensajeviewPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MensajeviewPage');
        this.titulox = this.navParams.data.information;
        this.linkx = this.navParams.data.link;
        this.items.push({ html: this.navParams.data.html });
        //this.items=this.navParams.data
    };
    MensajeviewPage.prototype.dalink = function (op) {
        //this.msj.showError3('Link QR',op);
        this.regService.abrelinkinterno3(this.linkx, '_blank', '', 0);
    };
    MensajeviewPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-mensajeview',template:/*ion-inline-start:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\WEBAPP\mensajeview\mensajeview.html"*/'<ion-header no-border class="opaque">\n  <ion-navbar  no-border-bottom>\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n          </button>\n      <ion-title>\n        {{titulox}}  \n      </ion-title>\n  \n    </ion-navbar>\n   \n  </ion-header>\n  \n  <ion-content fullscreen>\n           \n      <ion-list text-wrap>\n    \n          <ion-item   *ngFor="let item of items " text-wrap>\n              <ion-card>\n                  <ion-fab right top>\n                      <button ion-fab>\n                        <ion-icon name="happy"></ion-icon>\n                      </button>\n                    </ion-fab>\n                  \n                    <ion-item>\n                        <ion-icon name="information-circle" item-start large></ion-icon>\n                      <ion-icon name="information-circle-outline" item-start large></ion-icon>\n                      <h2>{{titulox}}</h2>\n  \n                      <p>Usacenlinea</p>\n                    </ion-item>\n  \n                    \n                  <ion-card-content>\n                    \n                    <ion-card-title>\n                     \n                      </ion-card-title>\n                      \n                        <div [innerHTML]="item.contenido">\n                          </div>\n                                  \n                        \n                  \n                  </ion-card-content>\n                  <ion-item>\n                     \n                      <button ion-button  color="secondary" (click)="dalink(1)"  icon-start clear item-end>\n                        <ion-icon name="navigate"></ion-icon>\n                        Más información\n                      </button>\n                    </ion-item>\n                </ion-card>\n                \n  \n            \n     \n             \n      \n        </ion-item>\n        \n       </ion-list>\n  \n  \n  </ion-content>\n  '/*ion-inline-end:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\WEBAPP\mensajeview\mensajeview.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers__["a" /* Auth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavParams */]])
    ], MensajeviewPage);
    return MensajeviewPage;
}());

//# sourceMappingURL=mensajeview.js.map

/***/ })

});
//# sourceMappingURL=45.js.map