webpackJsonp([53],{

/***/ 1136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnidadperiodoListPageModule", function() { return UnidadperiodoListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__unidadperiodo_list__ = __webpack_require__(1592);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pipes_pipes_module__ = __webpack_require__(445);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var UnidadperiodoListPageModule = /** @class */ (function () {
    function UnidadperiodoListPageModule() {
    }
    UnidadperiodoListPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__unidadperiodo_list__["a" /* UnidadperiodoListPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__unidadperiodo_list__["a" /* UnidadperiodoListPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild(),
                __WEBPACK_IMPORTED_MODULE_4__pipes_pipes_module__["a" /* PipesModule */]
            ],
        })
    ], UnidadperiodoListPageModule);
    return UnidadperiodoListPageModule;
}());

//# sourceMappingURL=unidadperiodo-list.module.js.map

/***/ }),

/***/ 1592:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UnidadperiodoListPage; });
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





var UnidadperiodoListPage = /** @class */ (function () {
    function UnidadperiodoListPage(modalCtrl, actionSheetCtrl, storage, alertCtrl, msj, translateService, navCtrl, _MODAL, navParams, regService) {
        var _this = this;
        this.modalCtrl = modalCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
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
        this.generated = '';
        this.idafiliado = 'na';
        this.hasFilter = false;
        this.gLimit = 50;
        this.PageSegmet = 'foods';
        this.gSearchQuery = '';
        this.username = "";
        this.translateService.get('APPX').subscribe(function (value) {
            _this.idempresa = value;
        });
    }
    UnidadperiodoListPage.prototype.clearSearchg = function () {
        this.gSearchQuery = '';
    };
    UnidadperiodoListPage.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get('username').then(function (value) {
            _this.username = value;
        });
    };
    UnidadperiodoListPage.prototype.pideregistros = function () {
        var _this = this;
        var self = this;
        self.loading = true;
        this.regService.getReg(this.idtipo + '/' + this.idtipo2 + '/todosver', 'unidadperiodos').then(function (data) {
            _this.items = data;
            _this.items2 = data;
            self.loading = false;
        }, function (err) {
            _this.msj.showError3('Error', err.error);
        });
    };
    UnidadperiodoListPage.prototype.ionViewDidLoad = function () {
        this.idtipo = this.navParams.data.record2.idtipo;
        this.idnombre = this.navParams.data.record2.idnombre;
        this.idtipo2 = this.navParams.data.record2.idtipo2;
        this.idnombre2 = this.navParams.data.record2.idnombre2;
        this.idcodigo2 = this.navParams.data.record2.idcodigo2;
        this.pideregistros();
    };
    UnidadperiodoListPage.prototype.loadMore = function (ev) {
        this.gLimit += 50;
        setTimeout(function () { return ev.complete(); }, 1000);
    };
    UnidadperiodoListPage.prototype.salonRecord = function (item, no) {
        this.navCtrl.push('unidadplanListPage', { record: item, record2: { idtipo: this.idtipo, idnombre: this.idnombre, idtipo2: this.idtipo2, idnombre2: this.idnombre2, idtipo3: item._id, idnombre3: item.nombre, idcodigo2: this.idcodigo2 } });
    };
    /*
      this.idtipo=this.navParams.data.record.idtipounidad;
      this.idnombre=this.navParams.data.record.nombre;
      this.idtipo2=this.navParams.data.record._id;
      */
    UnidadperiodoListPage.prototype.deleteRecord = function (item, no) {
        var _this = this;
        var alert = this.alertCtrl.create({ title: 'Esta seguro de realizar esta operación?',
            buttons: [
                { text: 'Si',
                    handler: function () {
                        var recordID = item._id;
                        _this.regService.deleteReg(recordID + '/' + _this.username + '/' + _this.idempresa + '/' + _this.idafiliado, 'unidadperiodos').then(function (data) {
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
    UnidadperiodoListPage.prototype.updateRecord = function (item, no) {
        var _this = this;
        var addModal = this._MODAL.create('UnidadperiodoCreatePage', { record: item, record2: { idtipo: this.idtipo, idtipo2: this.idtipo2, idnombre: this.idnombre } }, { showBackdrop: true, enableBackdropDismiss: false });
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
    UnidadperiodoListPage.prototype.addRecord = function () {
        var _this = this;
        var addModal = this._MODAL.create('UnidadperiodoCreatePage', { record: null, record2: { idtipo: this.idtipo, idtipo2: this.idtipo2, idnombre: this.idnombre } }, { showBackdrop: true, enableBackdropDismiss: false });
        addModal.onDidDismiss(function (data) {
            if (data) {
                _this.items = _this.items.concat([data]);
                _this.items2 = _this.items;
            }
        });
        addModal.present();
        //this.navCtrl.push('EmpresaCreatePage');
    };
    UnidadperiodoListPage.prototype.viewRecord = function (item) {
    };
    UnidadperiodoListPage.prototype.presentFilter = function () {
    };
    UnidadperiodoListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-unidadperiodo-list',template:/*ion-inline-start:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\USAC\unidadacademica\unidadperiodo-list\unidadperiodo-list.html"*/'<ion-header>\n    <ion-navbar [color]="\'navbarColor2\'">\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n          </button>\n      <ion-title>\n        Periodos, {{idnombre2}}\n      </ion-title>\n      <ion-buttons end>\n          \n          <button (click)="pideregistros()" icon-only ion-button padding-right>\n              <ion-icon name="refresh"></ion-icon>\n            </button>\n         \n        </ion-buttons>\n    </ion-navbar>\n    <ion-toolbar no-border-top>\n        <ion-searchbar debounce="2000" (ionCancel)="clearSearchg($event)" [(ngModel)]="gSearchQuery" placeholder="{{ \'NO2_REGISTROS\' | translate }}{{items.length}}]">\n          </ion-searchbar>\n      </ion-toolbar>\n  \n  </ion-header>\n    \n  <ion-content  class="list-avatar-page" padding>\n     \n           \n     <ion-list >\n     \n  \n      \n        <ion-item    *ngFor="let item of items | search: gSearchQuery | LimitPipe: gLimit ;let i = index;" text-wrap>\n          \n                <ion-card >\n                        <ion-item text-wrap>\n                            <button ion-item (click)="updateRecord(item,i)">\n                            <h2>{{i+1}}. Nombre: {{item.nombre}}</h2>\n                            <h2>Estado: {{item.estado}}</h2>\n                            </button>\n                          </ion-item>\n                          <ion-row no-padding>\n                                    <ion-col>\n                                      <button (click)="deleteRecord(item,i)" ion-button clear small  icon-start>\n                                        <ion-icon name=\'md-trash\'></ion-icon>\n                                        Eliminar\n                                      </button>\n                                    </ion-col>\n            \n                                  \n                                    <ion-col text-center>\n                                        <button (click)="salonRecord(item,i)" ion-button clear small color="secondary" icon-start>\n                                          <ion-icon name=\'albums\'></ion-icon>\n                                           Planificacion\n                                          \n                                        </button>\n                                      </ion-col>\n            \n                                  \n                            </ion-row>\n                         \n                        </ion-card>\n\n                        \n                        \n    \n      </ion-item>\n     </ion-list>\n     <ion-infinite-scroll (ionInfinite)="loadMore($event)">\n        <ion-infinite-scroll-content></ion-infinite-scroll-content>\n      </ion-infinite-scroll>\n  \n      <ion-fab bottom right #fab>\n          <button ion-fab (click)="addRecord()"><ion-icon name="add"></ion-icon></button>\n          \n      </ion-fab>\n  \n  </ion-content>'/*ion-inline-end:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\USAC\unidadacademica\unidadperiodo-list\unidadperiodo-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__providers__["d" /* NotificationProvider */], __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers__["a" /* Auth */]])
    ], UnidadperiodoListPage);
    return UnidadperiodoListPage;
}());

//# sourceMappingURL=unidadperiodo-list.js.map

/***/ })

});
//# sourceMappingURL=53.js.map