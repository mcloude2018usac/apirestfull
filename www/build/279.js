webpackJsonp([279],{

/***/ 1316:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelpviewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(104);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HelpviewPage = /** @class */ (function () {
    //private barcodeScanner:BarcodeScanner,
    function HelpviewPage(modalCtrl, actionSheetCtrl, alertCtrl, storage, msj, translateService, navCtrl, navParams, regService
        //, private qrScanner: QRScanner
    ) {
        this.modalCtrl = modalCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.alertCtrl = alertCtrl;
        this.storage = storage;
        this.msj = msj;
        this.translateService = translateService;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.regService = regService;
        this.loading = true;
        this.items = [];
        this.items2 = [];
        this.permisom = [];
        this.generated = '';
        this.hasFilter = false;
        this.gLimit = 50;
        this.PageSegmet = 'foods';
        this.gSearchQuery = '';
        this.username = "";
    }
    HelpviewPage.prototype.clearSearchg = function () {
        this.gSearchQuery = '';
    };
    HelpviewPage.prototype.pideregistros = function () {
        var _this = this;
        var self = this;
        self.loading = true;
        this.regService.getRegsintok('help/5cf53eb0c1f7bc37bc919753/' + this.navParams.data.idempresa, 'datosfijos').then(function (data) {
            _this.items = data;
            _this.items2 = data;
            self.loading = false;
        }, function (err) {
            _this.msj.showError3('Error', err.error);
            // this.translateService.get('NO_OPERACION').subscribe((value) => { this.msj.showError3('Error',value);  })
        });
    };
    HelpviewPage.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get('username').then(function (value) {
            _this.username = value;
        });
    };
    HelpviewPage.prototype.ionViewDidLoad = function () {
        this.pideregistros();
    };
    HelpviewPage.prototype.loadMore = function (ev) {
        this.gLimit += 50;
        setTimeout(function () { return ev.complete(); }, 1000);
    };
    HelpviewPage.prototype.participaRecord = function (item) {
        var data2 = { html: item.texto, record: null, titulo: 'Manual', formulario: '123', seguimiento: '0' };
        var modalPage = this.modalCtrl.create('CursosviewHtmlPage', data2, { showBackdrop: true, enableBackdropDismiss: false, cssClass: "modal-fullscreen" });
        modalPage.present();
        // this.navCtrl.push('CursostabViewPage', { record : item,idt:item._id,idempresa:this.navParams.data.idempresa,idplantilla:this.navParams.data.idempresa,idunidad:this.navParams.data.idunidad,idmodulo:item._id,nombrep:item.nombre,html:item.contenido });
    };
    HelpviewPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-helpview',template:/*ion-inline-start:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\BENCHMARK\helpview\helpview.html"*/'<ion-header>\n  <ion-navbar [color]="\'navbarColor\'">\n      <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n    <ion-title>\n   Manuales\n    </ion-title>\n   \n  </ion-navbar>     \n  <ion-toolbar no-border-top>\n      <ion-searchbar debounce="2000" (ionCancel)="clearSearchg($event)" [(ngModel)]="gSearchQuery" placeholder="{{ \'NO2_REGISTROS\' | translate }}{{items.length}}]">\n      </ion-searchbar>\n  </ion-toolbar>\n</ion-header>     \n     \n \n\n<ion-content>\n  \n    <ion-list >      \n         \n    <ion-list-header>   \n        <h2>  Seleccione tema  </h2>\n    \n      </ion-list-header>\n        <ion-item *ngFor="let item of items | search: gSearchQuery | LimitPipe: gLimit ;let i = index;">\n      <button ion-item  (click)="participaRecord(item)" >\n               \n        <ion-icon   name=\'checkmark-circle-outline\' item-end style="color: #55acee"></ion-icon>\n                 \n                  <h2>{{item.nombre}}</h2>\n              \n               \n                 \n      </button>\n       \n    </ion-item>\n     \n  </ion-list>\n\n  \n    <ion-infinite-scroll (ionInfinite)="loadMore($event)">\n       <ion-infinite-scroll-content></ion-infinite-scroll-content>\n     </ion-infinite-scroll>\n \n \n \n     \n </ion-content>\n\n'/*ion-inline-end:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\BENCHMARK\helpview\helpview.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_2__providers__["d" /* NotificationProvider */], __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers__["a" /* Auth */]
            //, private qrScanner: QRScanner
        ])
    ], HelpviewPage);
    return HelpviewPage;
}());

//# sourceMappingURL=helpview.js.map

/***/ }),

/***/ 876:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpviewPageModule", function() { return HelpviewPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__helpview__ = __webpack_require__(1316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pipes_pipes_module__ = __webpack_require__(445);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var HelpviewPageModule = /** @class */ (function () {
    function HelpviewPageModule() {
    }
    HelpviewPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__helpview__["a" /* HelpviewPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__helpview__["a" /* HelpviewPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild(),
                __WEBPACK_IMPORTED_MODULE_4__pipes_pipes_module__["a" /* PipesModule */]
            ],
        })
    ], HelpviewPageModule);
    return HelpviewPageModule;
}());

//# sourceMappingURL=helpview.module.js.map

/***/ })

});
//# sourceMappingURL=279.js.map