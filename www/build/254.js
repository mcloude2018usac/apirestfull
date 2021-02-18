webpackJsonp([254],{

/***/ 1345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParqueocobroListPage; });
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





var ParqueocobroListPage = /** @class */ (function () {
    function ParqueocobroListPage(storage, alertCtrl, msj, translateService, navCtrl, _MODAL, navParams, regService) {
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
        this.hasFilter = false;
        this.tiposus = [];
        this.username = "";
        this.idafiliado = 'na';
        this.gLimit = 50;
        this.PageSegmet = 'foods';
        this.gSearchQuery = '';
        this.excludeTracks = [];
        this.translateService.get('APPX').subscribe(function (value) {
            _this.idempresa = value;
        });
    }
    ParqueocobroListPage.prototype.clearSearchg = function () {
        this.gSearchQuery = '';
    };
    ParqueocobroListPage.prototype.showFilter3 = function () {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'Cobro, Ingrese CUI',
            inputs: [
                {
                    name: 'CUI',
                    placeholder: 'Ingrese CUI'
                }
            ],
            buttons: [
                {
                    text: 'Cancelar'
                },
                {
                    text: 'Buscar',
                    handler: function (todo) {
                        if (todo) {
                            _this.regService.getReg(todo.CUI + '/CUI', 'Entradasdpis').then(function (data) {
                                _this.hasFilter = true;
                                _this.items = data;
                            }, function (err) {
                                _this.msj.showError3('Error', err.error);
                            });
                        }
                    }
                }
            ]
        });
        prompt.present();
    };
    ParqueocobroListPage.prototype.pideregistros = function () {
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
            _this.sidist = true;
            _this.regService.getReg('todos/todos', 'Entradasdpis').then(function (data) {
                _this.items = data;
                self.loading = false;
            }, function (err) {
                _this.msj.showError3('Error', err.error);
            });
        });
        this.sidist = true;
    };
    ParqueocobroListPage.prototype.ionViewDidLoad = function () {
    };
    ParqueocobroListPage.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get('username').then(function (value) {
            _this.username = value;
        });
    };
    ParqueocobroListPage.prototype.loadMore = function (ev) {
        this.gLimit += 50;
        setTimeout(function () { return ev.complete(); }, 1000);
    };
    ParqueocobroListPage.prototype.deleteRecord = function (item, no) {
        var _this = this;
        var alert = this.alertCtrl.create({ title: 'Esta seguro de realizar esta operación?',
            buttons: [
                { text: 'Si',
                    handler: function () {
                        var recordID = item._id;
                        _this.regService.deleteReg(recordID + '/' + _this.username + '/' + _this.idempresa + '/' + _this.idafiliado, 'Entradasdpis').then(function (data) {
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
    ParqueocobroListPage.prototype.updateRecord2 = function (item, no) {
        var link = this.regService.daserverenuso0() + "/api/entradasdpis/" + item._id + "/PDF";
        this.regService.abrelinkinterno3(link, '_blank', '', 0);
    };
    ParqueocobroListPage.prototype.updateRecord = function (item, no) {
        var _this = this;
        var addModal = this._MODAL.create('ParqueocobroCreatePage', { record: item, idempresa: this.navParams.data.idempresa }, { showBackdrop: true, enableBackdropDismiss: false });
        addModal.onDidDismiss(function (data) {
            if (data) {
                _this.items.splice(no, 1);
                _this.items = _this.items.concat([data]);
            }
        });
        addModal.present();
        //  this.navCtrl.push('EmpresaCreatePage', { record : item });
    };
    ParqueocobroListPage.prototype.addRecord = function () {
        var _this = this;
        var addModal = this._MODAL.create('ParqueocobroCreatePage', { record: null, idempresa: this.navParams.data.idempresa }, { showBackdrop: true, enableBackdropDismiss: false });
        addModal.onDidDismiss(function (data) {
            if (data) {
                _this.items = _this.items.concat([data]);
                // this.items.concat([{idcomprasaldo:data.idcomprasaldo,idsuscriptor:data.idsuscriptor,fecha:data.fecha,monto:data.monto,nombre:data.noplaca}]);
            }
        });
        addModal.present();
        //this.navCtrl.push('EmpresaCreatePage');
    };
    ParqueocobroListPage.prototype.viewRecord = function (item) {
        // let modal = this._MODAL.create(ViewGalleryPage, { record : item });
        // modal.present();
    };
    ParqueocobroListPage.prototype.presentFilter = function () {
    };
    ParqueocobroListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-parqueocobro-list',template:/*ion-inline-start:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\BUSES\parqueocobro-list\parqueocobro-list.html"*/'<ion-header>\n  <ion-navbar  [color]="\'navbarColor\'">\n      <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n    <ion-title>\n     Cobro Parqueo  \n    </ion-title>   \n    <ion-buttons end>\n        <button (click)="showFilter3()" icon-only ion-button padding-right>\n            <ion-icon name="funnel"  [style.color]="hasFilter ? \'orange\' : \'inherit\'"></ion-icon>\n          </button>\n        \n      </ion-buttons>\n  </ion-navbar>\n  <ion-toolbar no-border-top>\n      <ion-searchbar debounce="2000" (ionCancel)="clearSearchg($event)" [(ngModel)]="gSearchQuery" placeholder="{{ \'NO2_REGISTROS\' | translate }}{{items.length}}]">\n        </ion-searchbar>\n    </ion-toolbar>\n\n</ion-header>\n  \n<ion-content  class="list-avatar-page" padding>\n   \n         \n   <ion-list >\n      <ion-item   *ngFor="let item of items | search: gSearchQuery | LimitPipe: gLimit ;let i = index;" text-wrap>\n\n          <ion-card >\n    \n              <ion-row>\n                  <ion-col  style="border:none;background: rgb(212, 224, 250);"  text-right>\n                          No: {{i+1}}\n                  </ion-col>    \n                  <ion-item text-wrap>\n                         \n                        <h2>Nombre: {{item.nombre}} </h2>   \n                        <p>Cui: {{item.cui}} </p>\n                        <p>Tarifa: {{item.tarifa}} </p>\n                        <p>Entrada: {{item.tentrada | Dafecha}} </p>   \n                        <p>Nombre factura: {{item.nombrefactura}} </p>   \n                        <p>Nit factura: {{item.nitfactura}} </p>   \n                        <p>Direccion factura: {{item.direccionfactura}} </p>   \n                        <p>monto a pagar: {{item.monto}} </p>   \n                        <p>Total factura: {{item.monto - item.montodescuento}} </p>   \n                    \n                  </ion-item>\n                  <ion-col  style="background:#f0f0f5"  text-left>\n                     \n                     </ion-col>\n                     <ion-col  style="background:#f0f0f5"  text-right>\n                     \n                        Estado Pago: {{item.estado}} ---- Estado Salida: {{item.estado2}}\n                       </ion-col>\n                  </ion-row>    \n                  <ion-row no-padding>\n                       \n                        <ion-col text-center>\n                          <button *ngIf="item.estado == \'PagoPendiente\'" (click)="updateRecord(item,i)" ion-button clear small color="secondary" icon-start>\n                            <ion-icon name=\'cash\'></ion-icon>\n                            Cobrar\n                          </button>\n                        </ion-col>\n\n                        <ion-col text-center>\n                                <button *ngIf="item.estado == \'PagoCancelado\'" (click)="updateRecord2(item,i)" ion-button clear small color="secondary" icon-start>\n                                  <ion-icon name=\'print\'></ion-icon>\n                                  Imprimir\n                                </button>\n                              </ion-col>\n                       \n                      </ion-row>\n  \n  \n              \n               \n              </ion-card>\n\n\n      \n          \n\n  \n    </ion-item>\n   </ion-list>\n\n   <ion-infinite-scroll (ionInfinite)="loadMore($event)">\n      <ion-infinite-scroll-content></ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n\n    <ion-fab bottom right #fab>\n        <button ion-fab (click)="addRecord()"><ion-icon name="add"></ion-icon></button>\n        \n    </ion-fab>\n\n</ion-content>'/*ion-inline-end:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\BUSES\parqueocobro-list\parqueocobro-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__providers__["d" /* NotificationProvider */], __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers__["a" /* Auth */]])
    ], ParqueocobroListPage);
    return ParqueocobroListPage;
}());

//# sourceMappingURL=parqueocobro-list.js.map

/***/ }),

/***/ 905:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParqueocobroListPageModule", function() { return ParqueocobroListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__parqueocobro_list__ = __webpack_require__(1345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__ = __webpack_require__(445);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ParqueocobroListPageModule = /** @class */ (function () {
    function ParqueocobroListPageModule() {
    }
    ParqueocobroListPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__parqueocobro_list__["a" /* ParqueocobroListPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__parqueocobro_list__["a" /* ParqueocobroListPage */]),
                __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["b" /* TranslateModule */].forChild(),
                __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__["a" /* PipesModule */]
            ],
        })
    ], ParqueocobroListPageModule);
    return ParqueocobroListPageModule;
}());

//# sourceMappingURL=parqueocobro-list.module.js.map

/***/ })

});
//# sourceMappingURL=254.js.map