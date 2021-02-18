webpackJsonp([46],{

/***/ 1146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GaleriaimgListPageModule", function() { return GaleriaimgListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__galeriaimg_list__ = __webpack_require__(1603);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pipes_pipes_module__ = __webpack_require__(445);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var GaleriaimgListPageModule = /** @class */ (function () {
    function GaleriaimgListPageModule() {
    }
    GaleriaimgListPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__galeriaimg_list__["a" /* GaleriaimgListPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__galeriaimg_list__["a" /* GaleriaimgListPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild(),
                __WEBPACK_IMPORTED_MODULE_4__pipes_pipes_module__["a" /* PipesModule */]
            ],
        })
    ], GaleriaimgListPageModule);
    return GaleriaimgListPageModule;
}());

//# sourceMappingURL=galeriaimg-list.module.js.map

/***/ }),

/***/ 1603:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GaleriaimgListPage; });
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





var GaleriaimgListPage = /** @class */ (function () {
    //private barcodeScanner:BarcodeScanner,
    function GaleriaimgListPage(viewCtrl, actionSheetCtrl, alertCtrl, storage, msj, translateService, navCtrl, _MODAL, navParams, regService) {
        var _this = this;
        this.viewCtrl = viewCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.alertCtrl = alertCtrl;
        this.storage = storage;
        this.msj = msj;
        this.translateService = translateService;
        this.navCtrl = navCtrl;
        this._MODAL = _MODAL;
        this.navParams = navParams;
        this.regService = regService;
        this.loading = true;
        this.items = [];
        this.items2 = [];
        this.permisom = [];
        this.generated = '';
        this.hasFilter = false;
        this.idafiliado = 'na';
        this.gLimit = 50;
        this.PageSegmet = 'foods';
        this.gSearchQuery = '';
        this.username = "";
        this.translateService.get('APPX').subscribe(function (value) {
            _this.idempresa = value;
        });
    }
    GaleriaimgListPage.prototype.clearSearchg = function () {
        this.gSearchQuery = '';
    };
    GaleriaimgListPage.prototype.showFilter = function () {
        var _this = this;
        var self = this;
        self.loading = true;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Filtrar por estado:',
            buttons: [
                {
                    text: 'Activos',
                    handler: function () {
                        _this.items = _this.items2;
                        _this.items = _this.items2.filter(function (v) {
                            if (v.estado) {
                                if (v.estado == 'Activo') {
                                    return true;
                                }
                                return false;
                            }
                        });
                        self.loading = false;
                        _this.hasFilter = true;
                    }
                },
                {
                    text: 'Inactivos',
                    handler: function () {
                        _this.items = _this.items2;
                        _this.items = _this.items2.filter(function (v) {
                            if (v.estado) {
                                self.loading = false;
                                if (v.estado == 'Inactivo') {
                                    return true;
                                }
                                return false;
                            }
                        });
                    }
                }
            ]
        });
        actionSheet.present();
    };
    GaleriaimgListPage.prototype.pideregistros = function () {
        var _this = this;
        var self = this;
        self.loading = true;
        this.regService.getReg(this.navParams.data.idempresa + '/todos', 'galeriaimgs').then(function (data) {
            _this.items = data;
            _this.items2 = data;
            self.loading = false;
        }, function (err) {
            _this.msj.showError3('Error', err.error);
            // this.translateService.get('NO_OPERACION').subscribe((value) => { this.msj.showError3('Error',value);  })  
        });
    };
    GaleriaimgListPage.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get('username').then(function (value) {
            _this.username = value;
        });
    };
    GaleriaimgListPage.prototype.ionViewDidLoad = function () {
        this.pideregistros();
    };
    GaleriaimgListPage.prototype.loadMore = function (ev) {
        this.gLimit += 50;
        setTimeout(function () { return ev.complete(); }, 1000);
    };
    GaleriaimgListPage.prototype.deleteRecord = function (item, no) {
        var _this = this;
        var alert = this.alertCtrl.create({ title: 'Esta seguro de realizar esta operación?',
            buttons: [
                { text: 'Si',
                    handler: function () {
                        var recordID = item._id;
                        _this.regService.deleteReg(recordID + '/' + _this.username + '/' + _this.idempresa + '/' + _this.idafiliado, 'galeriaimgs').then(function (data) {
                            _this.items.splice(no, 1);
                            _this.items = _this.items.concat([]);
                            _this.items2 = _this.items;
                        }, function (err) {
                            _this.msj.showError3('Error', err.error);
                        });
                    }
                },
                {
                    text: 'No', handler: function () { }
                }
            ]
        });
        alert.present();
    };
    GaleriaimgListPage.prototype.updateRecord = function (item, no) {
        var _this = this;
        var addModal = this._MODAL.create('GaleriaimgCreatePage', { record: item, idempresa: this.navParams.data.idempresa }, { showBackdrop: true, enableBackdropDismiss: false });
        addModal.onDidDismiss(function (data) {
            if (data) {
                _this.pideregistros();
            }
        });
        addModal.present();
        //  this.navCtrl.push('EmpresaCreatePage', { record : item });
    };
    GaleriaimgListPage.prototype.addRecord = function () {
        var _this = this;
        var addModal = this._MODAL.create('GaleriaimgCreatePage', { record: null, idempresa: this.navParams.data.idempresa }, { showBackdrop: true, enableBackdropDismiss: false });
        addModal.onDidDismiss(function (data) {
            if (data) {
                _this.pideregistros();
            }
        });
        addModal.present();
        //this.navCtrl.push('EmpresaCreatePage');
    };
    GaleriaimgListPage.prototype.cancel = function () {
        this.viewCtrl.dismiss();
    };
    GaleriaimgListPage.prototype.dalink = function (op) {
        //this.msj.showError3('Link QR',op);
        var prompt = this.alertCtrl.create({
            title: 'link Imagen',
            message: '',
            inputs: [
                {
                    name: '',
                    value: this.regService.daserverenuso0() + '/api/galeriaimgs/' + op._id + '/imagen'
                }
            ],
            buttons: [
                {
                    text: 'Ok'
                }
            ]
        });
        prompt.present();
    };
    GaleriaimgListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-galeriaimg-list',template:/*ion-inline-start:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\WEBAPP\galeriaimg-list\galeriaimg-list.html"*/'<ion-header>\n  <ion-navbar [color]="\'navbarColor\'">\n      \n    <ion-title>\n     Galeria de imagenes   \n    </ion-title>\n    <ion-buttons end>\n        <button (click)="showFilter()" icon-only ion-button padding-right>\n            <ion-icon name="funnel"  [style.color]="hasFilter ? \'orange\' : \'inherit\'"></ion-icon>\n          </button>\n  \n          <button  title="Refresh" (click)="pideregistros()" icon-only ion-button padding-right>\n            <ion-icon name="refresh"></ion-icon>\n          </button>\n          <button (click)="cancel()" icon-only ion-button padding-right>\n            <ion-icon name="md-close"></ion-icon>\n          </button>\n      </ion-buttons>\n  </ion-navbar>\n  <ion-toolbar no-border-top>\n      <ion-searchbar debounce="2000" (ionCancel)="clearSearchg($event)" [(ngModel)]="gSearchQuery" placeholder="{{ \'NO2_REGISTROS\' | translate }}{{items.length}}]">\n      </ion-searchbar>\n  </ion-toolbar>\n</ion-header>  \n         \n<ion-content  class="page-eventos-list" padding>\n   <ion-list text-center>\n       \n      <div class="wrapper" text-center>\n          <ion-item   *ngFor="let item of items | search: gSearchQuery | LimitPipe: gLimit ;let i = index;" text-wrap>\n            <div class="wrapper" >\n                \n                <div class="box yellow" text-center>\n\n                       \n                             <img src="{{item.imagen}}" style="width:250px;height: 150px;display: block;   margin-left: center; margin-right: center;">\n                         \n                             <ion-row >\n                                <ion-col>\n                                  <button (click)="deleteRecord(item,i)" ion-button clear small  icon-start>\n                                    <ion-icon name=\'md-trash\'></ion-icon>\n                                    Eliminar\n                                  </button>   \n                                </ion-col>\n                                <ion-col>\n                                    <button (click)="updateRecord(item,i)" ion-button clear small  icon-start>\n                                      <ion-icon name=\'checkmark\'></ion-icon>\n                                      Actualizar\n                                    </button>   \n                                  </ion-col>\n                                  <ion-col>\n                                      <button (click)="dalink(item)" ion-button clear small  icon-start>\n                                        <ion-icon name=\'ios-link-outline\'></ion-icon>\n                                        Link url\n                                      </button>\n                                    </ion-col>\n                               \n                         \n                        </ion-row>\n              \n                           \n                </div>\n                 \n      \n              \n\n           </div>\n\n              \n    </ion-item>\n  </div>   \n\n   </ion-list>\n   <ion-infinite-scroll (ionInfinite)="loadMore($event)">\n      <ion-infinite-scroll-content></ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n\n    <ion-fab bottom right #fab>\n        <button ion-fab (click)="addRecord()"><ion-icon name="add"></ion-icon></button>\n        \n    </ion-fab>\n\n\n    \n</ion-content>'/*ion-inline-end:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\WEBAPP\galeriaimg-list\galeriaimg-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["F" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_2__providers__["d" /* NotificationProvider */], __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers__["a" /* Auth */]])
    ], GaleriaimgListPage);
    return GaleriaimgListPage;
}());

//# sourceMappingURL=galeriaimg-list.js.map

/***/ })

});
//# sourceMappingURL=46.js.map