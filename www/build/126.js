webpackJsonp([126],{

/***/ 1049:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RepcarneListPageModule", function() { return RepcarneListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__repcarne_list__ = __webpack_require__(1505);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__ = __webpack_require__(445);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var RepcarneListPageModule = /** @class */ (function () {
    function RepcarneListPageModule() {
    }
    RepcarneListPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__repcarne_list__["a" /* RepcarneListPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__repcarne_list__["a" /* RepcarneListPage */]),
                __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["b" /* TranslateModule */].forChild(),
                __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__["a" /* PipesModule */]
            ],
        })
    ], RepcarneListPageModule);
    return RepcarneListPageModule;
}());

//# sourceMappingURL=repcarne-list.module.js.map

/***/ }),

/***/ 1505:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RepcarneListPage; });
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





var RepcarneListPage = /** @class */ (function () {
    function RepcarneListPage(storage, alertCtrl, msj, translateService, navCtrl, _MODAL, navParams, regService) {
        var _this = this;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.msj = msj;
        this.translateService = translateService;
        this.navCtrl = navCtrl;
        this._MODAL = _MODAL;
        this.navParams = navParams;
        this.regService = regService;
        this.loading = true;
        this.items = [];
        this.items2 = [];
        this.creaxx = true;
        this.sidist = false;
        this.tiposus = [];
        this.idafiliado = 'na';
        this.username = "";
        this.gLimit = 50;
        this.PageSegmet = 'foods';
        this.gSearchQuery = '';
        this.excludeTracks = [];
        this.translateService.get('APPX').subscribe(function (value) {
            _this.idempresa = value;
        });
    }
    RepcarneListPage.prototype.clearSearchg = function () {
        this.gSearchQuery = '';
    };
    RepcarneListPage.prototype.pideregistros = function () {
        var _this = this;
        var self = this;
        self.loading = true;
        this.storage.get('tiposus').then(function (value) {
            _this.tiposus = value.split(',');
            _this.idsuscriptor = _this.tiposus[3];
            if (_this.tiposus[0] == 'Distribuidor') {
                _this.sidist = true;
            }
            else {
                _this.sidist = false;
            }
            _this.regService.getReg(_this.idsuscriptor, 'repcarnes').then(function (data) {
                _this.items = data;
                if (_this.items.length == 0) {
                    _this.creaxx = false;
                }
                else {
                    //revisar el estado si hay algono no entregado ya no se puede solicitar mas
                    for (var i = 0; i < _this.items.length; i++) {
                        if (_this.items[i].estado == 'No entregado') {
                            _this.creaxx = true;
                            break;
                        }
                    }
                }
                self.loading = false;
            }, function (err) {
                _this.msj.showError3('Error', err.error);
            });
        });
    };
    RepcarneListPage.prototype.ionViewDidLoad = function () {
        //this.idsuscriptor=this.navParams.data.record.nodpi;
        //this.nidsuscriptor=this.navParams.data.record.nombre +' '+ this.navParams.data.record.apellido;
        var _this = this;
        this.pideregistros();
        this.translateService.get(["CANCEL",
            "INGRESAR",
            "BUSCARPOR",
            "BUSCAR"
        ]).subscribe(function (values) {
            _this.v1 = values.CANCEL;
            _this.v2 = values.INGRESAR;
            _this.v3 = values.BUSCARPOR;
            _this.v4 = values.BUSCAR;
        });
    };
    RepcarneListPage.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get('username').then(function (value) {
            _this.username = value;
        });
    };
    RepcarneListPage.prototype.loadMore = function (ev) {
        this.gLimit += 50;
        setTimeout(function () { return ev.complete(); }, 1000);
    };
    RepcarneListPage.prototype.deleteRecord = function (item, no) {
        var _this = this;
        var alert = this.alertCtrl.create({ title: 'Esta seguro de realizar esta operación?',
            buttons: [
                { text: 'Si',
                    handler: function () {
                        var recordID = item._id;
                        _this.regService.deleteReg(recordID + '/' + _this.username + '/' + _this.idempresa + '/' + _this.idafiliado, 'repcarnes').then(function (data) {
                            _this.items.splice(no, 1);
                            _this.items = _this.items.concat([]);
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
    RepcarneListPage.prototype.updateRecord = function (item, no) {
        var _this = this;
        var addModal = this._MODAL.create('RepcarneCreatePage', { record: item }, { showBackdrop: true, enableBackdropDismiss: false });
        addModal.onDidDismiss(function (data) {
            if (data) {
                _this.items.splice(no, 1);
                _this.items = _this.items.concat([data]);
            }
        });
        addModal.present();
        //  this.navCtrl.push('EmpresaCreatePage', { record : item });
    };
    RepcarneListPage.prototype.addRecord = function () {
        var _this = this;
        var addModal = this._MODAL.create('RepcarneCreatePage', { record: null }, { showBackdrop: true, enableBackdropDismiss: false });
        addModal.onDidDismiss(function (data) {
            if (data) {
                _this.items = _this.items.concat([data]);
                _this.creaxx = true;
                // this.items.concat([{idcomprasaldo:data.idcomprasaldo,idsuscriptor:data.idsuscriptor,fecha:data.fecha,monto:data.monto,nombre:data.noplaca}]);
            }
        });
        addModal.present();
        //this.navCtrl.push('EmpresaCreatePage');
    };
    RepcarneListPage.prototype.viewRecord = function (item) {
        // let modal = this._MODAL.create(ViewGalleryPage, { record : item });
        // modal.present();
    };
    RepcarneListPage.prototype.presentFilter = function () {
    };
    RepcarneListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-repcarne-list',template:/*ion-inline-start:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\GESTION DE TARJETA\repcarne-list\repcarne-list.html"*/'<ion-header no-border class="opaque">\n  <ion-navbar  no-border-bottom>\n      <button ion-button menuToggle>   \n          <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>  \n        {{ \'GESTION_REP_CARNE\' | translate }}  \n      </ion-title>\n      <ion-buttons end>  \n        \n          <button (click)="pideregistros()" icon-only ion-button padding-right>\n              <ion-icon name="refresh"></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n    <ion-toolbar no-border-top>\n        <ion-searchbar debounce="2000" (ionCancel)="clearSearchg($event)" [(ngModel)]="gSearchQuery" placeholder="{{ \'NO2_REGISTROS\' | translate }}{{items.length}}]">\n          </ion-searchbar>\n      </ion-toolbar>\n  \n  </ion-header>\n    \n  <ion-content  class="list-avatar-page" padding>\n     \n           \n     <ion-list >\n        <ion-item  *ngFor="let item of items | search: gSearchQuery | LimitPipe: gLimit ;let i = index;" text-wrap>\n                <ion-card >\n                        <ion-row>\n                        <ion-col    text-right>\n              \n                                No: {{i+1}}\n                                \n                         \n                        </ion-col>     \n        \n                    <ion-item text-wrap>\n                      <br>\n                        <h2>Fecha Transacción: {{item.createdAt | date : \'dd/MM/yyyy\'}} </h2>\n                        <br>\n                        <h3>Nota: {{item.nota}} </h3>\n                      \n                      \n                 \n                      </ion-item>\n                   \n                   \n            <ion-col    text-right>\n              \n                    Estado: {{item.estado}}\n                 \n             \n            </ion-col>\n          </ion-row>\n        \n                  </ion-card>\n            \n  \n    \n      </ion-item>\n     </ion-list>\n     <ion-infinite-scroll (ionInfinite)="loadMore($event)">\n        <ion-infinite-scroll-content></ion-infinite-scroll-content>\n      </ion-infinite-scroll>\n  \n      <ion-fab bottom right #fab>\n          <button ion-fab [hidden]="creaxx" (click)="addRecord()"><ion-icon name="add"></ion-icon></button>\n          \n      </ion-fab>\n  \n  </ion-content>\n'/*ion-inline-end:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\GESTION DE TARJETA\repcarne-list\repcarne-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__providers__["d" /* NotificationProvider */], __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers__["a" /* Auth */]])
    ], RepcarneListPage);
    return RepcarneListPage;
}());

//# sourceMappingURL=repcarne-list.js.map

/***/ })

});
//# sourceMappingURL=126.js.map