webpackJsonp([267],{

/***/ 1327:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CursosviewModuloPage; });
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





var CursosviewModuloPage = /** @class */ (function () {
    //private barcodeScanner:BarcodeScanner,
    function CursosviewModuloPage(actionSheetCtrl, alertCtrl, storage, msj, translateService, navCtrl, navParams, regService
        //, private qrScanner: QRScanner
    ) {
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
    CursosviewModuloPage.prototype.clearSearchg = function () {
        this.gSearchQuery = '';
    };
    CursosviewModuloPage.prototype.pideregistros = function () {
        var _this = this;
        var self = this;
        self.loading = true;
        this.regService.getReg(this.navParams.data.idplantilla + '/' + this.navParams.data.idempresa + '/' + this.navParams.data.idunidad + '/todos', 'plantilladmcs').then(function (data) {
            _this.items = data;
            _this.items2 = data;
            self.loading = false;
        }, function (err) {
            _this.msj.showError3('Error', err.error);
            // this.translateService.get('NO_OPERACION').subscribe((value) => { this.msj.showError3('Error',value);  })  
        });
    };
    CursosviewModuloPage.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get('username').then(function (value) {
            _this.username = value;
        });
    };
    CursosviewModuloPage.prototype.ionViewDidLoad = function () {
        this.pideregistros();
    };
    CursosviewModuloPage.prototype.loadMore = function (ev) {
        this.gLimit += 50;
        setTimeout(function () { return ev.complete(); }, 1000);
    };
    CursosviewModuloPage.prototype.participaRecord = function (item) {
        this.navCtrl.push('CursostabViewPage', { record: item, idt: item._id, idempresa: this.navParams.data.idempresa, idplantilla: this.navParams.data.idempresa, idunidad: this.navParams.data.idunidad, idmodulo: item._id, nombrep: item.nombre, html: item.contenido });
    };
    CursosviewModuloPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-cursosview-modulo',template:/*ion-inline-start:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\BLEARNING\cursosview-modulo\cursosview-modulo.html"*/'<ion-header>\n    <ion-navbar [color]="\'navbarColor\'">\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n          </button>\n      <ion-title>\n      MODULOS\n      </ion-title>\n      <ion-buttons end>\n         \n\n            <button  title="Refresh" (click)="pideregistros()" icon-only ion-button padding-right>\n              <ion-icon name="refresh"></ion-icon>\n            </button>\n     \n        </ion-buttons>\n    </ion-navbar>     \n    <ion-toolbar no-border-top>\n        <ion-searchbar debounce="2000" (ionCancel)="clearSearchg($event)" [(ngModel)]="gSearchQuery" placeholder="{{ \'NO2_REGISTROS\' | translate }}{{items.length}}]">\n        </ion-searchbar>\n    </ion-toolbar>\n  </ion-header>     \n       \n   \n\n  <ion-content>\n    \n      <ion-list >      \n        \n      <ion-list-header>   \n          <h2>  Selecciona un modulo   </h2>\n      \n        </ion-list-header>\n          <ion-item *ngFor="let item of items | search: gSearchQuery | LimitPipe: gLimit ;let i = index;">\n        <button ion-item  (click)="participaRecord(item)" >\n                   \n                    <h2>{{item.orden}}.{{item.nombre}}</h2>\n                    <h2>{{item.descripcion}}</h2>\n                    <ion-icon *ngIf="item.estado2 == \'Asignado\'"  name=\'checkmark-circle-outline\' item-end style="color: #55acee"></ion-icon>\n                    <ion-icon *ngIf="item.estado2 == \'Terminado\'"  name=\'checkmark-circle\' item-end style="color: #55acee"></ion-icon>\n \n                   \n        </button>\n         \n      </ion-item>\n       \n    </ion-list>\n\n    \n      <ion-infinite-scroll (ionInfinite)="loadMore($event)">\n         <ion-infinite-scroll-content></ion-infinite-scroll-content>\n       </ion-infinite-scroll>\n   \n   \n   \n       \n   </ion-content>\n\n'/*ion-inline-end:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\BLEARNING\cursosview-modulo\cursosview-modulo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_2__providers__["d" /* NotificationProvider */], __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers__["a" /* Auth */]
            //, private qrScanner: QRScanner
        ])
    ], CursosviewModuloPage);
    return CursosviewModuloPage;
}());

//# sourceMappingURL=cursosview-modulo.js.map

/***/ }),

/***/ 887:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CursosviewModuloPageModule", function() { return CursosviewModuloPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cursosview_modulo__ = __webpack_require__(1327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pipes_pipes_module__ = __webpack_require__(445);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var CursosviewModuloPageModule = /** @class */ (function () {
    function CursosviewModuloPageModule() {
    }
    CursosviewModuloPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__cursosview_modulo__["a" /* CursosviewModuloPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__cursosview_modulo__["a" /* CursosviewModuloPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild(),
                __WEBPACK_IMPORTED_MODULE_4__pipes_pipes_module__["a" /* PipesModule */]
            ],
        })
    ], CursosviewModuloPageModule);
    return CursosviewModuloPageModule;
}());

//# sourceMappingURL=cursosview-modulo.module.js.map

/***/ })

});
//# sourceMappingURL=267.js.map