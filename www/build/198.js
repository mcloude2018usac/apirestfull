webpackJsonp([198],{

/***/ 1401:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Unidadhorario3ListPage; });
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





var Unidadhorario3ListPage = /** @class */ (function () {
    function Unidadhorario3ListPage(modalCtrl, actionSheetCtrl, storage, alertCtrl, msj, translateService, navCtrl, _MODAL, navParams, regService) {
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
    Unidadhorario3ListPage.prototype.clearSearchg = function () {
        this.gSearchQuery = '';
    };
    Unidadhorario3ListPage.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get('username').then(function (value) {
            _this.username = value;
        });
    };
    Unidadhorario3ListPage.prototype.pideregistros = function () {
        var _this = this;
        var self = this;
        self.loading = true;
        this.regService.getReg(this.idjornada + '/' + this.idtipo + '/' + this.idtipo2, 'unidadhorario3s').then(function (data) {
            _this.items = data;
            _this.items2 = data;
            self.loading = false;
        }, function (err) {
            _this.msj.showError3('Error', err.error);
        });
    };
    Unidadhorario3ListPage.prototype.ionViewDidLoad = function () {
        this.idtipo = this.navParams.data.idtipo;
        this.idtipo2 = this.navParams.data.idtipo2;
        this.idjornada = this.navParams.data.record._id;
        this.idnombre = this.navParams.data.record.nombre;
        this.pideregistros();
    };
    Unidadhorario3ListPage.prototype.loadMore = function (ev) {
        this.gLimit += 50;
        setTimeout(function () { return ev.complete(); }, 1000);
    };
    Unidadhorario3ListPage.prototype.salonRecord = function (item, no) {
        this.navCtrl.push('Unidadsalon3ListPage', { record: item });
    };
    Unidadhorario3ListPage.prototype.deleteRecord = function (item, no) {
        var _this = this;
        var alert = this.alertCtrl.create({ title: 'Esta seguro de realizar esta operación?',
            buttons: [
                { text: 'Si',
                    handler: function () {
                        var recordID = item._id;
                        _this.regService.deleteReg(recordID + '/' + _this.username + '/' + _this.idempresa + '/' + _this.idafiliado, 'unidadhorario3s').then(function (data) {
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
    Unidadhorario3ListPage.prototype.updateRecord = function (item, no) {
        var _this = this;
        var addModal = this._MODAL.create('Unidadhorario3CreatePage', { record: item, record2: { idtipo: this.idtipo, idtipo2: this.idtipo2, idnombre: this.idnombre, idjornada: this.idjornada } }, { showBackdrop: true, enableBackdropDismiss: false });
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
    Unidadhorario3ListPage.prototype.addRecord = function () {
        var _this = this;
        var addModal = this._MODAL.create('Unidadhorario3CreatePage', { record: null, record2: { idtipo: this.idtipo, idtipo2: this.idtipo2, idnombre: this.idnombre, idjornada: this.idjornada } }, { showBackdrop: true, enableBackdropDismiss: false });
        addModal.onDidDismiss(function (data) {
            if (data) {
                _this.items = _this.items.concat([data]);
                _this.items2 = _this.items;
            }
        });
        addModal.present();
        //this.navCtrl.push('EmpresaCreatePage');
    };
    Unidadhorario3ListPage.prototype.viewRecord = function (item) {
    };
    Unidadhorario3ListPage.prototype.presentFilter = function () {
    };
    Unidadhorario3ListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-Unidadhorario3-list',template:/*ion-inline-start:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\CALUSAC\unidadacademica\unidadhorario3-list\unidadhorario3-list.html"*/'<ion-header no-border class="opaque">\n    <ion-navbar   no-border-bottom>\n      <button ion-button menuToggle>  \n          <ion-icon name="menu"></ion-icon>\n        </button>\n    <ion-title>   \n       HORARIO -> {{idnombre}}\n    </ion-title>   \n      <ion-toolbar  class="opaque" >\n          <ion-buttons end>\n     \n              <button  title="Refresh" (click)="pideregistros()" icon-only ion-button padding-right>\n              <ion-icon name="refresh"></ion-icon>\n            </button>\n        </ion-buttons>\n          <ion-searchbar showCancelButton="true"   debounce="2000" (ionCancel)="clearSearchg($event)"\n           [(ngModel)]="gSearchQuery" placeholder="{{ \'NO2_REGISTROS\' | translate }}{{items.length}}]">\n          </ion-searchbar>\n      </ion-toolbar>\n  </ion-navbar>\n</ion-header>\n<ion-content  fullscreen>\n     \n           \n     <ion-list >\n     \n  \n      \n        <ion-item    *ngFor="let item of items | search: gSearchQuery | LimitPipe: gLimit ;let i = index;" text-wrap>\n              \n                <ion-card >\n                        <ion-item text-wrap>\n                            <button ion-item (click)="updateRecord(item,i)">\n                                <h2>{{i+1}}. Codigo: {{item.codigo}} </h2>\n                            <h2>Horario: {{item.nombre}} -  {{item.nombre2}}</h2>\n                            <h2>Dia: {{item.dia}}</h2>\n                          \n                            </button>\n                          </ion-item>\n                          <ion-row no-padding>\n                                    <ion-col>\n                                      <button (click)="deleteRecord(item,i)" ion-button clear small  icon-start>\n                                        <ion-icon name=\'md-trash\'></ion-icon>\n                                        Eliminar\n                                      </button>\n                                    </ion-col>\n            \n                                  \n                                  \n                            </ion-row>\n                         \n                        </ion-card>\n\n                        \n                        \n    \n      </ion-item>\n     </ion-list>\n     <ion-infinite-scroll (ionInfinite)="loadMore($event)">\n        <ion-infinite-scroll-content></ion-infinite-scroll-content>\n      </ion-infinite-scroll>\n  \n      <ion-fab bottom right #fab>\n          <button ion-fab (click)="addRecord()"><ion-icon name="add"></ion-icon></button>\n          \n      </ion-fab>\n  \n  </ion-content>'/*ion-inline-end:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\CALUSAC\unidadacademica\unidadhorario3-list\unidadhorario3-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__providers__["d" /* NotificationProvider */], __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers__["a" /* Auth */]])
    ], Unidadhorario3ListPage);
    return Unidadhorario3ListPage;
}());

//# sourceMappingURL=unidadhorario3-list.js.map

/***/ }),

/***/ 961:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Unidadhorario3ListPageModule", function() { return Unidadhorario3ListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__unidadhorario3_list__ = __webpack_require__(1401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pipes_pipes_module__ = __webpack_require__(445);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var Unidadhorario3ListPageModule = /** @class */ (function () {
    function Unidadhorario3ListPageModule() {
    }
    Unidadhorario3ListPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__unidadhorario3_list__["a" /* Unidadhorario3ListPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__unidadhorario3_list__["a" /* Unidadhorario3ListPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild(),
                __WEBPACK_IMPORTED_MODULE_4__pipes_pipes_module__["a" /* PipesModule */]
            ],
        })
    ], Unidadhorario3ListPageModule);
    return Unidadhorario3ListPageModule;
}());

//# sourceMappingURL=unidadhorario3-list.module.js.map

/***/ })

});
//# sourceMappingURL=198.js.map