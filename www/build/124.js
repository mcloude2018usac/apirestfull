webpackJsonp([124],{

/***/ 1050:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SolcarneListPageModule", function() { return SolcarneListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__solcarne_list__ = __webpack_require__(1506);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__ = __webpack_require__(445);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var SolcarneListPageModule = /** @class */ (function () {
    function SolcarneListPageModule() {
    }
    SolcarneListPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__solcarne_list__["a" /* SolcarneListPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__solcarne_list__["a" /* SolcarneListPage */]),
                __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["b" /* TranslateModule */].forChild(),
                __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__["a" /* PipesModule */]
            ],
        })
    ], SolcarneListPageModule);
    return SolcarneListPageModule;
}());

//# sourceMappingURL=solcarne-list.module.js.map

/***/ }),

/***/ 1506:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SolcarneListPage; });
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





var SolcarneListPage = /** @class */ (function () {
    function SolcarneListPage(storage, alertCtrl, msj, translateService, navCtrl, _MODAL, navParams, regService) {
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
        this.sidist = false;
        this.tiposus = [];
        this.creaxx = true;
        this.username = "";
        this.codigop = '1234 5522 8432 2264';
        this.idafiliado = 'na';
        this.gLimit = 50;
        this.PageSegmet = 'foods';
        this.gSearchQuery = '';
        this.card = {
            state: 'OFF',
            logo: "assets/img/visa2.png",
            a: 1234,
            b: 5522,
            c: 8432,
            d: 2264,
            expires: '7/12',
            bank: 'Tarjeta'
        };
        this.excludeTracks = [];
        this.translateService.get('APPX').subscribe(function (value) {
            _this.idempresa = value;
        });
    }
    SolcarneListPage.prototype.clearSearchg = function () {
        this.gSearchQuery = '';
    };
    SolcarneListPage.prototype.pideregistros = function () {
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
            _this.regService.getReg(_this.username + '/emailsolo/' + _this.idempresa, 'personals').then(function (data) {
                _this.nombrep = data[0].nombre;
            });
            _this.regService.getReg(_this.idsuscriptor + '/' + _this.idempresa, 'solcarnes').then(function (data) {
                _this.items = data;
                if (_this.items.length == 0) {
                    _this.creaxx = false;
                }
                self.loading = false;
            }, function (err) {
                _this.msj.showError3('Error', err.error);
            });
        });
    };
    SolcarneListPage.prototype.ionViewDidLoad = function () {
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
    SolcarneListPage.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get('username').then(function (value) {
            _this.username = value;
        });
    };
    SolcarneListPage.prototype.loadMore = function (ev) {
        this.gLimit += 50;
        setTimeout(function () { return ev.complete(); }, 1000);
    };
    SolcarneListPage.prototype.deleteRecord = function (item, no) {
        var _this = this;
        var alert = this.alertCtrl.create({ title: 'Esta seguro de realizar esta operación?',
            buttons: [
                { text: 'Si',
                    handler: function () {
                        var recordID = item._id;
                        _this.regService.deleteReg(recordID + '/' + _this.username + '/' + _this.idempresa + '/' + _this.idafiliado, 'solcarnes').then(function (data) {
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
    SolcarneListPage.prototype.updateRecord = function (item, no) {
        var _this = this;
        var addModal = this._MODAL.create('SolcarneCreatePage', { record: item, nombrep: this.nombrep, codigop: this.codigop }, { showBackdrop: true, enableBackdropDismiss: false });
        addModal.onDidDismiss(function (data) {
            if (data) {
                _this.items.splice(no, 1);
                _this.items = _this.items.concat([data]);
            }
        });
        addModal.present();
        //  this.navCtrl.push('EmpresaCreatePage', { record : item });
    };
    SolcarneListPage.prototype.addRecord = function () {
        var _this = this;
        var addModal = this._MODAL.create('SolcarneCreatePage', { record: null, nombrep: this.nombrep, codigop: this.codigop }, { showBackdrop: true, enableBackdropDismiss: false });
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
    SolcarneListPage.prototype.viewRecord = function (item) {
        // let modal = this._MODAL.create(ViewGalleryPage, { record : item });
        // modal.present();
    };
    SolcarneListPage.prototype.presentFilter = function () {
    };
    SolcarneListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-solcarne-list',template:/*ion-inline-start:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\GESTION DE TARJETA\solcarne-list\solcarne-list.html"*/'<ion-header no-border class="opaque">\n    <ion-navbar  no-border-bottom>\n        <button ion-button menuToggle>   \n            <ion-icon name="menu"></ion-icon>\n          </button>\n          <ion-title>  \n        {{ \'GESTION_SOL_CARNE\' | translate }}  \n      </ion-title>\n      <ion-buttons end>  \n        \n          <button (click)="pideregistros()" icon-only ion-button padding-right>\n              <ion-icon name="refresh"></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n    <ion-toolbar no-border-top>\n        <ion-searchbar debounce="2000" (ionCancel)="clearSearchg($event)" [(ngModel)]="gSearchQuery" placeholder="{{ \'NO2_REGISTROS\' | translate }}{{items.length}}]">\n          </ion-searchbar>\n      </ion-toolbar>\n  \n  </ion-header>\n    \n  <ion-content  class="list-avatar-page" padding>\n     <ion-list >\n        <ion-item    *ngFor="let item of items | search: gSearchQuery | LimitPipe: gLimit ;let i = index;" text-wrap>\n                <ion-card >\n                        <ion-row>\n                            <ion-col    text-right>\n                                    No: {{i+1}}\n                            </ion-col>     \n                            <ion-item text-wrap>\n                                <br>\n                                <h2>Fecha Transacción: {{item.createdAt | date : \'dd/MM/yyyy\'}} </h2>\n                                <h3>Nota: {{item.nota}} </h3>\n   <br>\n   <p>\n                                <ion-grid [class.cardON]="card.state==\'ON\'" [class.cardOFF]="card.state==\'OFF\'">\n                                    <ion-row>\n                                      <ion-col class="state">\n                                        <div class="msg">\n                                          <span [class.ON]="card.state==\'ON\'" [class.OFF]="card.state==\'OFF\'"></span> Card {{card.state}}\n                                        </div>\n                                      </ion-col>\n                                    <!--  <ion-col class="logo">     <img class="brand" [src]="card.logo">            </ion-col> -->\n                                    </ion-row>\n                                    <ion-row>\n                                      <ion-col class="chip">\n                                        <img src="assets/img/chip.png">\n                                      \n                                      </ion-col>\n                                      <ion-col class="nombre">\n                                        {{item.nombre}}    \n                                      </ion-col>\n                                    </ion-row>\n                                    <ion-row class="digits">\n                                      <ion-col class="number">\n                                        {{card.a}}\n                                      </ion-col>\n                                      <ion-col class="number">\n                                        {{card.b}}\n                                      </ion-col>\n                                      <ion-col class="number">\n                                        {{card.c}}\n                                      </ion-col>\n                                      <ion-col class="number">\n                                        {{card.d}}\n                                      </ion-col>\n                                    </ion-row>\n                                    <ion-row>\n                                      <ion-col class="date">\n                                        Expires: {{card.expires}}\n                                      </ion-col>\n                                      <ion-col class="bank">\n                                        {{card.bank}}\n                                      </ion-col>\n                                    </ion-row>\n                                  </ion-grid>\n\n                            </ion-item>\n                            <ion-col    text-right>\n                                    Estado: {{item.estado}}\n                            </ion-col>    \n                         </ion-row>\n                  <!--      <ion-row no-padding>\n                            <ion-col>\n                              <button (click)="deleteRecord(item,i)" ion-button clear small  icon-start>\n                                <ion-icon name=\'md-trash\'></ion-icon>\n                                Eliminar\n                              </button>\n                            </ion-col>\n    \n                    </ion-row>\n                  -->\n                  </ion-card>\n\n               \n\n        \n      </ion-item>\n     </ion-list>\n\n  \n     <ion-infinite-scroll (ionInfinite)="loadMore($event)">\n        <ion-infinite-scroll-content></ion-infinite-scroll-content>\n      </ion-infinite-scroll>\n  \n      <ion-fab bottom right #fab>\n          <button ion-fab [hidden]="creaxx" (click)="addRecord()"><ion-icon name="add"></ion-icon></button>\n          \n      </ion-fab>\n  \n  </ion-content>\n'/*ion-inline-end:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\GESTION DE TARJETA\solcarne-list\solcarne-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__providers__["d" /* NotificationProvider */], __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers__["a" /* Auth */]])
    ], SolcarneListPage);
    return SolcarneListPage;
}());

//# sourceMappingURL=solcarne-list.js.map

/***/ })

});
//# sourceMappingURL=124.js.map