webpackJsonp([104],{

/***/ 1078:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Unidadacademica2ListPageModule", function() { return Unidadacademica2ListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__unidadacademica2_list__ = __webpack_require__(1534);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pipes_pipes_module__ = __webpack_require__(445);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var Unidadacademica2ListPageModule = /** @class */ (function () {
    function Unidadacademica2ListPageModule() {
    }
    Unidadacademica2ListPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__unidadacademica2_list__["a" /* Unidadacademica2ListPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__unidadacademica2_list__["a" /* Unidadacademica2ListPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild(),
                __WEBPACK_IMPORTED_MODULE_4__pipes_pipes_module__["a" /* PipesModule */]
            ],
        })
    ], Unidadacademica2ListPageModule);
    return Unidadacademica2ListPageModule;
}());

//# sourceMappingURL=unidadacademica2-list.module.js.map

/***/ }),

/***/ 1534:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Unidadacademica2ListPage; });
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





var Unidadacademica2ListPage = /** @class */ (function () {
    //private barcodeScanner:BarcodeScanner,
    function Unidadacademica2ListPage(actionSheetCtrl, alertCtrl, storage, msj, translateService, navCtrl, _MODAL, navParams, regService) {
        var _this = this;
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
    Unidadacademica2ListPage.prototype.clearSearchg = function () {
        this.gSearchQuery = '';
    };
    Unidadacademica2ListPage.prototype.showFilter = function () {
    };
    Unidadacademica2ListPage.prototype.pideregistros = function () {
        var _this = this;
        var self = this;
        self.loading = true;
        this.regService.getReg(this.idtipo, 'unidadacademica2s').then(function (data) {
            _this.items = data;
            _this.items2 = data;
            self.loading = false;
        }, function (err) {
            _this.msj.showError3('Error', err.error);
            // this.translateService.get('NO_OPERACION').subscribe((value) => { this.msj.showError3('Error',value);  })  
        });
    };
    Unidadacademica2ListPage.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get('username').then(function (value) {
            _this.username = value;
        });
    };
    Unidadacademica2ListPage.prototype.ionViewDidLoad = function () {
        this.idtipo = this.navParams.data.record._id;
        this.ntipo = this.navParams.data.record.nombre;
        this.pideregistros();
    };
    Unidadacademica2ListPage.prototype.loadMore = function (ev) {
        this.gLimit += 50;
        setTimeout(function () { return ev.complete(); }, 1000);
    };
    Unidadacademica2ListPage.prototype.deleteRecord = function (item, no) {
        var _this = this;
        var alert = this.alertCtrl.create({ title: 'Esta seguro de realizar esta operación?',
            buttons: [
                { text: 'Si',
                    handler: function () {
                        var recordID = item._id;
                        _this.regService.deleteReg(recordID + '/' + _this.username + '/' + _this.idempresa + '/' + _this.idafiliado, 'unidadacademica2s').then(function (data) {
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
    Unidadacademica2ListPage.prototype.updateRecord = function (item, no) {
        var _this = this;
        var addModal = this._MODAL.create('Unidadacademica2CreatePage', { record: item, record2: { idtipo: this.idtipo, ntipo: this.ntipo } }, { showBackdrop: true, enableBackdropDismiss: false });
        addModal.onDidDismiss(function (data) {
            if (data) {
                _this.items.splice(no, 1);
                _this.items = _this.items.concat([data]);
                _this.items2 = _this.items;
            }
        });
        addModal.present();
        //  this.navCtrl.push('EmpresaCreatePage', { record : item });
    };
    Unidadacademica2ListPage.prototype.addRecord = function () {
        var _this = this;
        var addModal = this._MODAL.create('Unidadacademica2CreatePage', { record: null, record2: { idtipo: this.idtipo, ntipo: this.ntipo } }, { showBackdrop: true, enableBackdropDismiss: false });
        addModal.onDidDismiss(function (data) {
            if (data) {
                _this.items = _this.items.concat([data]);
                _this.items2 = _this.items;
            }
        });
        addModal.present();
        //this.navCtrl.push('EmpresaCreatePage');
    };
    Unidadacademica2ListPage.prototype.conferenciaRecord2 = function (item) {
        this.navCtrl.push('Unidadedificio2ListPage', { record: item });
    };
    Unidadacademica2ListPage.prototype.conferenciaRecord3 = function (item) {
        this.navCtrl.push('Unidadperiodo2ListPage', { record: item, record2: { idtipo: this.idtipo, idnombre: this.ntipo, idtipo2: item._id, idnombre2: item.nombre, idcodigo2: item.codigo } });
    };
    Unidadacademica2ListPage.prototype.conferenciaRecord = function (item) {
        var _this = this;
        this.regService.getReg(item.idtipounidad + '/' + item._id, 'facultadmaterias').then(function (data) {
            var addModal = _this._MODAL.create('Unidadmateria2CreatePage', { record: data, record2: { idtipo: item.idtipounidad, idtipo2: item._id } }, { showBackdrop: true, enableBackdropDismiss: false });
            addModal.onDidDismiss(function (data) {
                if (data) {
                }
            });
            addModal.present();
        }, function (err) {
            var addModal = _this._MODAL.create('Unidadmateria2CreatePage', { record: null, record2: { idtipo: item.idtipounidad, idtipo2: item._id } }, { showBackdrop: true, enableBackdropDismiss: false });
            addModal.onDidDismiss(function (data) {
                if (data) {
                }
            });
            addModal.present();
            // this.translateService.get('NO_OPERACION').subscribe((value) => { this.msj.showError3('Error',value);  })  
        });
    };
    Unidadacademica2ListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-unidadacademica2-list',template:/*ion-inline-start:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\PAP\unidadacademica2\unidadacademica2-list\unidadacademica2-list.html"*/'<ion-header>\n    <ion-navbar [color]="\'navbarColor\'">\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n          </button>\n      <ion-title text-wrap>\n            \n     Unidades\n      </ion-title>\n      <ion-buttons end>\n              <button  title="Refresh" (click)="pideregistros()" icon-only ion-button padding-right>\n              <ion-icon name="refresh"></ion-icon>\n            </button>\n           \n  \n        </ion-buttons>\n    </ion-navbar>\n    <ion-toolbar no-border-top>\n        <ion-searchbar debounce="2000" (ionCancel)="clearSearchg($event)" [(ngModel)]="gSearchQuery" placeholder="{{ \'NO2_REGISTROS\' | translate }}{{items.length}}]">\n        </ion-searchbar>\n    </ion-toolbar>\n  </ion-header>\n    \n  <ion-content  class="page-eventos-list" padding>\n     <ion-list >\n        <ion-item   *ngFor="let item of items | search: gSearchQuery | LimitPipe: gLimit ;let i = index;" text-wrap>\n          <ion-card >\n              <ion-item text-wrap>\n                  <button ion-item (click)="updateRecord(item,i)">\n                      <p>Codigo: {{item.codigo}}</p>\n                  <h2>Nombre: {{item.nombre}}</h2>\n                  \n                  </button>\n                </ion-item>\n                <ion-row no-padding>\n                          <ion-col>\n                            <button (click)="deleteRecord(item,i)" ion-button clear small  icon-start>\n                              <ion-icon name=\'md-trash\'></ion-icon>\n                              Eliminar\n                            </button>\n                          </ion-col>\n  \n                        \n                          <ion-col text-center>\n                              <button (click)="conferenciaRecord(item)" ion-button clear small color="secondary" icon-start>\n                                <ion-icon name=\'albums\'></ion-icon>\n                                Materias\n                                \n                              </button>\n                            </ion-col>\n  \n                            <ion-col text-center>\n                                    <button (click)="conferenciaRecord2(item)" ion-button clear small color="secondary" icon-start>\n                                      <ion-icon name=\'albums\'></ion-icon>\n                                      Edificios\n                                      \n                                    </button>\n                                  </ion-col>\n                        \n                                  <ion-col text-center>\n                                      <button (click)="conferenciaRecord3(item)" ion-button clear small color="secondary" icon-start>\n                                        <ion-icon name=\'albums\'></ion-icon>\n                                        Periodos (planificacion)\n                                        \n                                      </button>\n                                    </ion-col>\n                  </ion-row>\n               \n              </ion-card>\n      </ion-item>\n     </ion-list>\n     <ion-infinite-scroll (ionInfinite)="loadMore($event)">\n        <ion-infinite-scroll-content></ion-infinite-scroll-content>\n      </ion-infinite-scroll>\n  \n      <ion-fab bottom right #fab>\n          <button ion-fab (click)="addRecord()"><ion-icon name="add"></ion-icon></button>\n          \n      </ion-fab>\n  \n  \n      \n  </ion-content>'/*ion-inline-end:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\PAP\unidadacademica2\unidadacademica2-list\unidadacademica2-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_2__providers__["d" /* NotificationProvider */], __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers__["a" /* Auth */]])
    ], Unidadacademica2ListPage);
    return Unidadacademica2ListPage;
}());

//# sourceMappingURL=unidadacademica2-list.js.map

/***/ })

});
//# sourceMappingURL=104.js.map