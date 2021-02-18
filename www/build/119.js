webpackJsonp([119],{

/***/ 1057:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransferenciasaldoListPageModule", function() { return TransferenciasaldoListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__transferenciasaldo_list__ = __webpack_require__(1513);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__ = __webpack_require__(445);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var TransferenciasaldoListPageModule = /** @class */ (function () {
    function TransferenciasaldoListPageModule() {
    }
    TransferenciasaldoListPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__transferenciasaldo_list__["a" /* TransferenciasaldoListPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__transferenciasaldo_list__["a" /* TransferenciasaldoListPage */]),
                __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["b" /* TranslateModule */].forChild(),
                __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__["a" /* PipesModule */]
            ],
        })
    ], TransferenciasaldoListPageModule);
    return TransferenciasaldoListPageModule;
}());

//# sourceMappingURL=transferenciasaldo-list.module.js.map

/***/ }),

/***/ 1513:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransferenciasaldoListPage; });
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





var TransferenciasaldoListPage = /** @class */ (function () {
    function TransferenciasaldoListPage(storage, alertCtrl, msj, translateService, navCtrl, _MODAL, navParams, regService) {
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
        this.sidist = true;
        this.tiposus = [];
        this.username = "";
        this.pingreso = false;
        this.pconsulta = false;
        this.peliminacion = false;
        this.pcreacion = false;
        this.pactualizacion = false;
        this.preporte = false;
        this.pfiltro = false;
        this.permisom = [];
        this.idafiliado = 'na';
        this.gLimit = 50;
        this.PageSegmet = 'foods';
        this.gSearchQuery = '';
        this.excludeTracks = [];
        this.permisom = String(navParams.get("permiso")).split(",");
        this.pingreso = (this.permisom[0] == 'true');
        this.pconsulta = (this.permisom[1] == 'true');
        this.peliminacion = (this.permisom[2] == 'true');
        this.pcreacion = (this.permisom[3] == 'true');
        this.pactualizacion = (this.permisom[4] == 'true');
        this.pfiltro = (this.permisom[5] == 'true');
        this.preporte = (this.permisom[6] == 'true');
    }
    TransferenciasaldoListPage.prototype.clearSearchg = function () {
        this.gSearchQuery = '';
    };
    TransferenciasaldoListPage.prototype.pideregistros = function () {
        var _this = this;
        var self = this;
        self.loading = true;
        this.storage.get('tiposus').then(function (value) {
            _this.tiposus = value.split(',');
            _this.idsuscriptor = _this.tiposus[3];
            /*
              if(this.tiposus[0]=='Distribuidor')
              {
                this.sidist=true;
              }
              else
              {
                this.sidist=false;
              }
            */
            _this.regService.getReg(_this.idsuscriptor + '/' + _this.idempresa, 'compratransferencias').then(function (data) {
                _this.items = data;
                self.loading = false;
            }, function (err) {
                _this.msj.showError3('Error', err.error);
            });
        });
    };
    TransferenciasaldoListPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        //this.idsuscriptor=this.navParams.data.record.nodpi;
        //this.nidsuscriptor=this.navParams.data.record.nombre +' '+ this.navParams.data.record.apellido;
        this.translateService.get('APPX').subscribe(function (value) {
            _this.idempresa = value;
            _this.pideregistros();
        });
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
    TransferenciasaldoListPage.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get('username').then(function (value) {
            _this.username = value;
        });
    };
    TransferenciasaldoListPage.prototype.loadMore = function (ev) {
        this.gLimit += 50;
        setTimeout(function () { return ev.complete(); }, 1000);
    };
    TransferenciasaldoListPage.prototype.deleteRecord = function (item, no) {
        var _this = this;
        var alert = this.alertCtrl.create({ title: 'Esta seguro de realizar esta operación?',
            buttons: [
                { text: 'Si',
                    handler: function () {
                        var recordID = item._id;
                        _this.regService.deleteReg(item.idsuscriptor + '/' + recordID + '/' + _this.idempresa + '/' + _this.idafiliado, 'compratransferencias').then(function (data) {
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
    TransferenciasaldoListPage.prototype.updateRecord = function (item, no) {
        var _this = this;
        var addModal = this._MODAL.create('TranssaldoCreatePage', { record: item }, { showBackdrop: true, enableBackdropDismiss: false });
        addModal.onDidDismiss(function (data) {
            if (data) {
                _this.items.splice(no, 1);
                _this.items = _this.items.concat([data]);
            }
        });
        addModal.present();
        //  this.navCtrl.push('EmpresaCreatePage', { record : item });
    };
    TransferenciasaldoListPage.prototype.addRecord = function () {
        var _this = this;
        var addModal = this._MODAL.create('TranssaldoCreatePage', { record: null }, { showBackdrop: true, enableBackdropDismiss: false });
        addModal.onDidDismiss(function (data) {
            if (data) {
                _this.items = _this.items.concat([data]);
                // this.items.concat([{idcomprasaldo:data.idcomprasaldo,idsuscriptor:data.idsuscriptor,fecha:data.fecha,monto:data.monto,nombre:data.noplaca}]);
            }
        });
        addModal.present();
        //this.navCtrl.push('EmpresaCreatePage');
    };
    TransferenciasaldoListPage.prototype.viewRecord = function (item) {
        // let modal = this._MODAL.create(ViewGalleryPage, { record : item });
        // modal.present();
    };
    TransferenciasaldoListPage.prototype.presentFilter = function () {
    };
    TransferenciasaldoListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-transferenciasaldo-list',template:/*ion-inline-start:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\GESTIONSALDO\transferenciasaldo-list\transferenciasaldo-list.html"*/'<ion-header no-border class="opaque">\n  <ion-navbar  no-border-bottom>\n      <button ion-button menuToggle>   \n          <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>  \n      {{ \'GESTION_COMPRASALDO2\' | translate }}  \n    </ion-title>\n    <ion-buttons end>\n      \n        <button [hidden]="!pconsulta"  (click)="pideregistros()" icon-only ion-button padding-right>\n            <ion-icon name="refresh"></ion-icon>\n          </button>\n      </ion-buttons>\n  </ion-navbar>\n  <ion-toolbar no-border-top>\n      <ion-searchbar [hidden]="!pconsulta"  debounce="2000" (ionCancel)="clearSearchg($event)" [(ngModel)]="gSearchQuery" placeholder="{{ \'NO2_REGISTROS\' | translate }}{{items.length}}]">\n        </ion-searchbar>\n    </ion-toolbar>\n\n</ion-header>\n  \n<ion-content  fullscreen>\n   \n         \n   <ion-list >\n      <ion-item   [hidden]="!pconsulta"  *ngFor="let item of items | search: gSearchQuery | LimitPipe: gLimit ;let i = index;" text-wrap>\n        \n            <ion-card >\n                    <ion-row>\n                    <ion-col    text-right>\n          \n                            No: {{i+1}}\n                         \n                     \n                    </ion-col>     \n    \n                <ion-item text-wrap>\n                  <br>\n                    <h2>Fecha Transacción: {{item.createdAt | date : \'dd/MM/yyyy\'}} </h2>\n                    <h3>Trasferido a: {{item.idsuscriptor2.id.nombre}} - {{item.idsuscriptor2.id.cui}}</h3>\n       \n                    <h3>Monto: Q. {{item.monto  | number:\'1.2-2\'}} </h3>\n                  \n                  \n             \n                  </ion-item>\n               \n               \n        <ion-col    text-right>\n          \n                Estado: {{item.estado}}\n             \n         \n        </ion-col>\n      </ion-row>\n    \n              </ion-card>\n       \n\n\n\n          \n\n  \n    </ion-item>\n   </ion-list>\n   <ion-infinite-scroll (ionInfinite)="loadMore($event)">\n      <ion-infinite-scroll-content></ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n\n    <ion-fab bottom right #fab>\n        <button [hidden]="!pcreacion" ion-fab [hidden]="!sidist" (click)="addRecord()"><ion-icon name="add"></ion-icon></button>\n        \n    </ion-fab>\n\n</ion-content>'/*ion-inline-end:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\GESTIONSALDO\transferenciasaldo-list\transferenciasaldo-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__providers__["d" /* NotificationProvider */], __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers__["a" /* Auth */]])
    ], TransferenciasaldoListPage);
    return TransferenciasaldoListPage;
}());

//# sourceMappingURL=transferenciasaldo-list.js.map

/***/ })

});
//# sourceMappingURL=119.js.map