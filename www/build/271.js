webpackJsonp([271],{

/***/ 1323:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CursostabViewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cursosview_contenido_cursosview_contenido__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cursostabrr_view_cursostabrr_view__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cursostabnn_view_cursostabnn_view__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__cursostabch_view_cursostabch_view__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_storage__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ng_socket_io__ = __webpack_require__(451);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ng_socket_io___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_ng_socket_io__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var CursostabViewPage = /** @class */ (function () {
    function CursostabViewPage(translateService, storage, regService, socket, navCtrl, navParams) {
        this.translateService = translateService;
        this.storage = storage;
        this.regService = regService;
        this.socket = socket;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tiposus = [];
        this.titulox = this.navParams.data.nombrep;
        this.idt = this.navParams.data.idt;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__cursosview_contenido_cursosview_contenido__["a" /* CursosviewContenidoPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_3__cursostabrr_view_cursostabrr_view__["a" /* CursostabrrViewPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_4__cursostabnn_view_cursostabnn_view__["a" /* CursostabnnViewPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_5__cursostabch_view_cursostabch_view__["a" /* CursostabchViewPage */];
    }
    CursostabViewPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.translateService.get('APPX').subscribe(function (value) {
            _this.idempresa = value;
        });
        this.storage.get('tiposus').then(function (value) {
            _this.tiposus = value.split(',');
            _this.idsuscriptor = _this.tiposus[3];
            _this.nombrett = _this.tiposus[4];
            _this.fotott = _this.tiposus[9] + "," + _this.tiposus[10];
        });
    };
    CursostabViewPage.prototype.iniciarcurso = function () {
        var _this = this;
        this.regService.getReg(this.idt + "@gmail.com" + '/emailsolo/' + this.idempresa, 'personals').then(function (data) {
            _this.socket.connect();
            _this.socket.emit('set-nickname', data[0]._id);
            _this.navCtrl.push('ChatPage', { record: { toUserId: _this.idsuscriptor,
                    toUserName: _this.nombrett, avatar: _this.fotott }, grupal: 'si',
                record2: { toUserId: data[0]._id,
                    toUserName: 'Aporta al modulo', avatar: data[0].foto } });
        });
    };
    CursostabViewPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-cursostab-view',template:/*ion-inline-start:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\BLEARNING\cursostab-view\cursostab-view.html"*/'<ion-header>\n    <ion-navbar [color]="\'navbarColor\'">\n        <ion-title>\n            {{titulox}}  \n          </ion-title>\n    </ion-navbar>\n  </ion-header>   \n<ion-tabs>\n    <ion-tab [root]="tab1Root" tabTitle="Contenido" [rootParams]="navParams.data" tabIcon="book"></ion-tab>\n    <ion-tab [root]="tab2Root" tabTitle="Recursos"  [rootParams]="navParams.data" tabIcon="briefcase"></ion-tab>\n    <ion-tab [root]="tab3Root" tabTitle="Notas"  [rootParams]="navParams.data" tabIcon="clipboard"></ion-tab>\n    <ion-fab  top right edge>  \n        <br>\n        <br> \n        <button ion-fab color="greem" (click)="iniciarcurso()"> <ion-icon  name="chatboxes"></ion-icon></button>\n    \n     \n    </ion-fab>\n  \n  </ion-tabs>\n'/*ion-inline-end:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\BLEARNING\cursostab-view\cursostab-view.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_8__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_6__providers__["a" /* Auth */], __WEBPACK_IMPORTED_MODULE_9_ng_socket_io__["Socket"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavParams */]])
    ], CursostabViewPage);
    return CursostabViewPage;
}());

//# sourceMappingURL=cursostab-view.js.map

/***/ }),

/***/ 883:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CursostabViewPageModule", function() { return CursostabViewPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cursostab_view__ = __webpack_require__(1323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CursostabViewPageModule = /** @class */ (function () {
    function CursostabViewPageModule() {
    }
    CursostabViewPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__cursostab_view__["a" /* CursostabViewPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__cursostab_view__["a" /* CursostabViewPage */]), __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], CursostabViewPageModule);
    return CursostabViewPageModule;
}());

//# sourceMappingURL=cursostab-view.module.js.map

/***/ })

});
//# sourceMappingURL=271.js.map