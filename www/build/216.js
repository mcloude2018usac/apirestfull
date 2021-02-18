webpackJsonp([216],{

/***/ 1370:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return unidadplan4aListPage; });
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





var unidadplan4aListPage = /** @class */ (function () {
    function unidadplan4aListPage(modalCtrl, actionSheetCtrl, storage, alertCtrl, msj, translateService, navCtrl, _MODAL, navParams, regService) {
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
    unidadplan4aListPage.prototype.clearSearchg = function () {
        this.gSearchQuery = '';
    };
    unidadplan4aListPage.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get('username').then(function (value) {
            _this.username = value;
        });
    };
    unidadplan4aListPage.prototype.pideregistros = function () {
        var _this = this;
        var self = this;
        self.loading = true;
        this.regService.getReg(this.idtipo + '/' + this.idtipo2 + '/' + this.idtipo3, 'unidadplan4as').then(function (data) {
            _this.items = data;
            _this.items2 = data;
            self.loading = false;
        }, function (err) {
            _this.msj.showError3('Error', err.error);
        });
    };
    unidadplan4aListPage.prototype.ionViewDidLoad = function () {
        this.idtipo = this.navParams.data.record2.idtipo;
        this.idtipo2 = this.navParams.data.record2.idtipo2;
        this.idtipo3 = this.navParams.data.record2.idtipo3;
        this.idnombre = this.navParams.data.record2.idnombre;
        this.idnombre2 = this.navParams.data.record2.idnombre2;
        this.idcodigo2 = this.navParams.data.record2.idcodigo2;
        this.idnombre3 = this.navParams.data.record2.idnombre3;
        this.pideregistros();
    };
    unidadplan4aListPage.prototype.loadMore = function (ev) {
        this.gLimit += 50;
        setTimeout(function () { return ev.complete(); }, 1000);
    };
    unidadplan4aListPage.prototype.deleteRecord = function (item, no) {
        var _this = this;
        var alert = this.alertCtrl.create({ title: 'Esta seguro de realizar esta operación?',
            buttons: [
                { text: 'Si',
                    handler: function () {
                        var recordID = item._id;
                        _this.regService.deleteReg(recordID + '/' + _this.username + '/' + _this.idempresa + '/' + _this.idafiliado, 'unidadplan4as').then(function (data) {
                            _this.pideregistros();
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
    unidadplan4aListPage.prototype.updateRecord = function (item, no) {
        var _this = this;
        var addModal = this._MODAL.create('unidadplan4aCreatePage', { record: item, record2: { idtipo: this.idtipo, idtipo2: this.idtipo2, idtipo3: this.idtipo3, idnombre: this.idnombre, idnombre2: this.idnombre2, idnombre3: this.idnombre3, idcodigo2: this.idcodigo2 } }, { showBackdrop: true, enableBackdropDismiss: false });
        addModal.onDidDismiss(function (data) {
            if (data) {
                _this.pideregistros();
            }
        });
        addModal.present();
        //  this.navCtrl.push('EmpresaCreatePage', { record : item });
    };
    unidadplan4aListPage.prototype.addRecord = function () {
        var _this = this;
        var addModal = this._MODAL.create('unidadplan4aCreatePage', { record: null, record2: { idtipo: this.idtipo, idtipo2: this.idtipo2, idtipo3: this.idtipo3, idnombre: this.idnombre, idnombre2: this.idnombre2, idnombre3: this.idnombre3, idcodigo2: this.idcodigo2 } }, { showBackdrop: true, enableBackdropDismiss: false });
        addModal.onDidDismiss(function (data) {
            if (data) {
                _this.pideregistros();
            }
        });
        addModal.present();
        //this.navCtrl.push('EmpresaCreatePage');
    };
    unidadplan4aListPage.prototype.viewRecord = function (item) {
    };
    unidadplan4aListPage.prototype.presentFilter = function () {
    };
    unidadplan4aListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-unidadplan4a-list',template:/*ion-inline-start:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\CALUSAC\exaubicaciones\unidadplan4a-list\unidadplan4a-list.html"*/'<ion-header no-border class="opaque">\n    <ion-navbar   no-border-bottom>\n      <button ion-button menuToggle>  \n          <ion-icon name="menu"></ion-icon>\n        </button>\n    <ion-title>   \n      PLANIFICACIÓN-> PERIODO {{idnombre3}}    \n    </ion-title>   \n      <ion-toolbar  class="opaque" >\n          <ion-buttons end>\n     \n              <button  title="Refresh" (click)="pideregistros()" icon-only ion-button padding-right>\n              <ion-icon name="refresh"></ion-icon>\n            </button>\n        </ion-buttons>\n          <ion-searchbar showCancelButton="true"   debounce="2000" (ionCancel)="clearSearchg($event)"\n           [(ngModel)]="gSearchQuery" placeholder="{{ \'NO2_REGISTROS\' | translate }}{{items.length}}]">\n          </ion-searchbar>\n      </ion-toolbar>\n  </ion-navbar>\n</ion-header>\n<ion-content  fullscreen>   \n     <ion-list >\n        <ion-item   *ngFor="let item of items | search: gSearchQuery | LimitPipe: gLimit ;let i = index;" text-wrap>\n                <ion-card >\n                        <ion-item text-wrap>\n                                <button style="border:none" ion-item (click)="updateRecord(item,i)">\n                            <h2>{{i+1}}. {{item.idperiodo.nombre}}</h2>\n                            <p> Edificio: {{item.idedificio.nombre}} -> Salon: {{item.idsalon.nombre}} </p>\n                            <p>Idioma: {{item.ididioma.nombre}}</p>\n                            <p>Tipo grupo: {{item.idtipo.nombre}}</p>\n                            <p>Horario: {{item.iddia | Dafecha}} - {{item.idhora}} </p>\n                          \n                           \n                            <p>Profesor: {{item.idprofesor.nombre}} </p>\n                         \n                            <p>Capacidad: {{item.capacidad}} </p>\n                            <p>Asignados: {{item.asignados}} </p>\n                          \n                          \n                        </button>\n                          </ion-item>\n                      \n                              \n                           \n                          \n                \n                          <ion-row no-padding>\n                                  <ion-col>\n                                    <button (click)="deleteRecord(item,i)" ion-button clear small  icon-start>\n                                      <ion-icon name=\'md-trash\'></ion-icon>\n                                      Eliminar\n                                    </button>\n                                  </ion-col>\n          \n                                  \n                                 \n                                  \n          \n                           \n                          </ion-row>\n                      </ion-card>\n      </ion-item>\n     </ion-list>\n     <ion-infinite-scroll (ionInfinite)="loadMore($event)">\n        <ion-infinite-scroll-content></ion-infinite-scroll-content>\n      </ion-infinite-scroll>\n      <ion-fab bottom right #fab>\n          <button ion-fab (click)="addRecord()"><ion-icon name="add"></ion-icon></button>\n      </ion-fab>\n  </ion-content>'/*ion-inline-end:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\CALUSAC\exaubicaciones\unidadplan4a-list\unidadplan4a-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__providers__["d" /* NotificationProvider */], __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers__["a" /* Auth */]])
    ], unidadplan4aListPage);
    return unidadplan4aListPage;
}());

//# sourceMappingURL=unidadplan4a-list.js.map

/***/ }),

/***/ 930:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unidadplan4aListPageModule", function() { return unidadplan4aListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__unidadplan4a_list__ = __webpack_require__(1370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pipes_pipes_module__ = __webpack_require__(445);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var unidadplan4aListPageModule = /** @class */ (function () {
    function unidadplan4aListPageModule() {
    }
    unidadplan4aListPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__unidadplan4a_list__["a" /* unidadplan4aListPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__unidadplan4a_list__["a" /* unidadplan4aListPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild(),
                __WEBPACK_IMPORTED_MODULE_4__pipes_pipes_module__["a" /* PipesModule */]
            ],
        })
    ], unidadplan4aListPageModule);
    return unidadplan4aListPageModule;
}());

//# sourceMappingURL=unidadplan4a-list.module.js.map

/***/ })

});
//# sourceMappingURL=216.js.map