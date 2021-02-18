webpackJsonp([43],{

/***/ 1150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VervideoHtmlPageModule", function() { return VervideoHtmlPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vervideo_html__ = __webpack_require__(1609);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var VervideoHtmlPageModule = /** @class */ (function () {
    function VervideoHtmlPageModule() {
    }
    VervideoHtmlPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__vervideo_html__["a" /* VervideoHtmlPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__vervideo_html__["a" /* VervideoHtmlPage */]),
            ],
        })
    ], VervideoHtmlPageModule);
    return VervideoHtmlPageModule;
}());

//# sourceMappingURL=vervideo-html.module.js.map

/***/ }),

/***/ 1609:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VervideoHtmlPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
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
 * Generated class for the VervideoHtmlPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var VervideoHtmlPage = /** @class */ (function () {
    function VervideoHtmlPage(viewCtrl, navCtrl, navParams) {
        this.viewCtrl = viewCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.items = [];
    }
    VervideoHtmlPage.prototype.ionViewDidLoad = function () {
        this.titulox = 'Video';
        //  this.linkx=this.navParams.data._id;
        this.html = this.navParams.data.video;
        var video = this.myVideo.nativeElement;
        video.src = this.navParams.data.video;
        video.play();
    };
    VervideoHtmlPage.prototype.cancel = function () {
        this.viewCtrl.dismiss();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myvideo'),
        __metadata("design:type", Object)
    ], VervideoHtmlPage.prototype, "myVideo", void 0);
    VervideoHtmlPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-vervideo-html',template:/*ion-inline-start:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\WEBAPP\vervideo-html\vervideo-html.html"*/'<ion-header>\n    <ion-navbar [color]="\'navbarColor\'">\n       \n      <ion-title>\n        {{titulox}}  \n      </ion-title>\n      <ion-buttons end>\n        <button ion-button (click)="cancel()" icon-only ion-button padding-right>\n        \n                <ion-icon name="close"></ion-icon>\n                    \n        </button>\n        </ion-buttons>\n  \n    </ion-navbar>\n   \n  </ion-header>\n  \n  <ion-content padding>\n             \n      <video #myvideo height="50%" width="50%" controls></video>\n   \n  \n  </ion-content>\n  \n'/*ion-inline-end:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\WEBAPP\vervideo-html\vervideo-html.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["F" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavParams */]])
    ], VervideoHtmlPage);
    return VervideoHtmlPage;
}());

//# sourceMappingURL=vervideo-html.js.map

/***/ })

});
//# sourceMappingURL=43.js.map