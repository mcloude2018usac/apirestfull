webpackJsonp([133],{

/***/ 1038:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriaformsListPageModule", function() { return CategoriaformsListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__categoriaforms_list__ = __webpack_require__(1480);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__ = __webpack_require__(445);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var CategoriaformsListPageModule = /** @class */ (function () {
    function CategoriaformsListPageModule() {
    }
    CategoriaformsListPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__categoriaforms_list__["a" /* CategoriaformsListPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__categoriaforms_list__["a" /* CategoriaformsListPage */]),
                __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["b" /* TranslateModule */].forChild(),
                __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__["a" /* PipesModule */]
            ],
        })
    ], CategoriaformsListPageModule);
    return CategoriaformsListPageModule;
}());

//# sourceMappingURL=categoriaforms-list.module.js.map

/***/ }),

/***/ 1480:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoriaformsListPage; });
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





var CategoriaformsListPage = /** @class */ (function () {
    function CategoriaformsListPage(storage, alertCtrl, msj, translateService, navCtrl, navParams, regService) {
        var _this = this;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.msj = msj;
        this.translateService = translateService;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.regService = regService;
        this.loading = true;
        this.items = [];
        this.items2 = [];
        this.username = "";
        this.gLimit = 50;
        this.PageSegmet = 'foods';
        this.gSearchQuery = '';
        this.tiposus = [];
        this.translateService.get('APPX').subscribe(function (value) {
            _this.idempresa = value;
        });
    }
    CategoriaformsListPage.prototype.clearSearchg = function () {
        this.gSearchQuery = '';
    };
    CategoriaformsListPage.prototype.ngOnInit = function () {
    };
    CategoriaformsListPage.prototype.showFilter = function () { };
    CategoriaformsListPage.prototype.pideregistros = function () {
        var _this = this;
        var self = this;
        self.loading = true;
        switch (this.nivelprx) {
            case '?key=1'://relacionar usuarios con categorias
                this.regService.getReg('grupo/' + 'categoria-formmovil/' + this.idempresa, 'frmcats').then(function (data) {
                    _this.items = data;
                    self.loading = false;
                }, function (err) {
                    _this.msj.showError3('Error', err.error);
                });
                break;
            case '?key=2'://crear FORMULARIO  AQUI SE FILTRA
                this.regService.getReg(this.idsuscriptor + '/' + 'categoriausr/' + this.idempresa, 'catusuarios').then(function (data) {
                    _this.items = data;
                    self.loading = false;
                }, function (err) {
                    _this.msj.showError3('Error', err.error);
                });
                break;
            case '?key=3'://
                var queryx = '';
                if (this.rol == 'lluviaideas' || this.rol == 'RECTOR') {
                    queryx = '5cdec4929312042f589bf0b4' + '/' + 'categoriausr222/5cdec5279312042f589bf0b8';
                }
                else {
                    queryx = '5cdec4929312042f589bf0b4' + '/' + 'categoriausr22/' + this.idempresa;
                }
                this.regService.getReg(queryx, 'catusuarios').then(function (data) {
                    _this.items = data;
                    self.loading = false;
                }, function (err) {
                    _this.msj.showError3('Error', err.error);
                });
                break;
            case '?key=4'://crear FORMULARIO  AQUI SE FILTRA
                this.regService.getReg('5cdec4929312042f589bf0b4' + '/' + 'categoriausr22/' + this.idempresa, 'catusuarios').then(function (data) {
                    _this.items = data;
                    self.loading = false;
                }, function (err) {
                    _this.msj.showError3('Error', err.error);
                });
                break;
            default:
                self.loading = false;
        }
    };
    CategoriaformsListPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.nivelprx = this.navParams.get("nivel");
        //?key=1
        this.storage.get('tiposus').then(function (value) {
            _this.tiposus = value.split(',');
            _this.idsuscriptor = _this.tiposus[3];
            _this.rol = _this.tiposus[6];
            // this.username = value;
            _this.pideregistros();
        });
    };
    CategoriaformsListPage.prototype.loadMore = function (ev) {
        this.gLimit += 50;
        setTimeout(function () { return ev.complete(); }, 1000);
    };
    CategoriaformsListPage.prototype.updateRecord = function (item, no) {
        switch (this.nivelprx) {
            case '?key=1'://relacionar usuarios con categorias
                this.navCtrl.push('CategoriaformsusrListPage', { record: item });
                break;
            case '?key=2'://crear
                this.navCtrl.push('FormularioMovilListPage', { record: item, record2: { idusuario: this.idsuscriptor } });
                break;
            case '?key=3'://crear
                this.navCtrl.push('MarketmailListPage', { record: item, idsuscriptor: this.idsuscriptor, idrol: this.rol, titulo: 'Diseño de plantillas', record2: { idusuario: this.idsuscriptor }, idempresa: this.idempresa, idcategoria: item._id });
                break;
            case '?key=4'://crear
                this.navCtrl.push('MailgrupoListPage', { record: item, idrol: this.rol, titulo: item.nombre, record2: { idusuario: this.idsuscriptor }, idempresa: this.idempresa, idcategoria: item._id });
                break;
            default:
        }
    };
    CategoriaformsListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-categoriaforms-list',template:/*ion-inline-start:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\FORMULARIO\categoriaforms-list\categoriaforms-list.html"*/'<ion-header no-border class="opaque">\n  <ion-navbar  no-border-bottom>\n      <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n    <ion-title>\n     Categorias \n    </ion-title>  \n    <ion-buttons end>\n    \n        <button (click)="pideregistros()" icon-only ion-button padding-right>\n            <ion-icon name="refresh"></ion-icon>\n          </button>\n      </ion-buttons>   \n  </ion-navbar>\n  <ion-toolbar no-border-top>\n      <ion-searchbar debounce="2000" (ionCancel)="clearSearchg($event)" [(ngModel)]="gSearchQuery" placeholder="{{ \'NO2_REGISTROS\' | translate }}{{items.length}}]">\n        </ion-searchbar>\n    </ion-toolbar>\n</ion-header>\n<ion-content   padding>\n   <ion-list >\n      <div class="wrapper" >\n      <ion-item   *ngFor="let item of items | search: gSearchQuery | LimitPipe: gLimit ;let i = index;" text-wrap>\n        <div class="wrapper" >\n            <div [ngClass]="item.colort" (click)="updateRecord(item,i)">\n                    <h2 style="text-align: center">{{item.nombre}}</h2>\n                   \n            </div>\n       </div>\n\n         \n    </ion-item>\n  </div>\n   </ion-list>   \n \n\n   <ion-infinite-scroll (ionInfinite)="loadMore($event)">\n      <ion-infinite-scroll-content></ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n</ion-content>'/*ion-inline-end:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\FORMULARIO\categoriaforms-list\categoriaforms-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__providers__["d" /* NotificationProvider */], __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers__["a" /* Auth */]])
    ], CategoriaformsListPage);
    return CategoriaformsListPage;
}());

//# sourceMappingURL=categoriaforms-list.js.map

/***/ })

});
//# sourceMappingURL=133.js.map