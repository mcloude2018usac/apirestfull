webpackJsonp([131],{

/***/ 1040:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriaformsusrListPageModule", function() { return CategoriaformsusrListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__categoriaformsusr_list__ = __webpack_require__(1482);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pipes_pipes_module__ = __webpack_require__(445);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var CategoriaformsusrListPageModule = /** @class */ (function () {
    function CategoriaformsusrListPageModule() {
    }
    CategoriaformsusrListPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__categoriaformsusr_list__["a" /* CategoriaformsusrListPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__categoriaformsusr_list__["a" /* CategoriaformsusrListPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild(),
                __WEBPACK_IMPORTED_MODULE_4__pipes_pipes_module__["a" /* PipesModule */]
            ],
        })
    ], CategoriaformsusrListPageModule);
    return CategoriaformsusrListPageModule;
}());

//# sourceMappingURL=categoriaformsusr-list.module.js.map

/***/ }),

/***/ 1482:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoriaformsusrListPage; });
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





var CategoriaformsusrListPage = /** @class */ (function () {
    //private barcodeScanner:BarcodeScanner,
    function CategoriaformsusrListPage(actionSheetCtrl, alertCtrl, storage, msj, translateService, navCtrl, _MODAL, navParams, regService) {
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
        this.tiposus = [];
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
    CategoriaformsusrListPage.prototype.clearSearchg = function () {
        this.gSearchQuery = '';
    };
    CategoriaformsusrListPage.prototype.pideregistros = function () {
        var _this = this;
        var self = this;
        self.loading = true;
        this.regService.getReg(this.navParams.data.record._id + '/categoria/' + this.idempresa, 'catusuarios').then(function (data) {
            _this.items = data;
            _this.items2 = data;
            self.loading = false;
        }, function (err) {
            _this.msj.showError3('Error', err.error);
            // this.translateService.get('NO_OPERACION').subscribe((value) => { this.msj.showError3('Error',value);  })  
        });
    };
    CategoriaformsusrListPage.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get('username').then(function (value) {
            _this.username = value;
        });
    };
    CategoriaformsusrListPage.prototype.ionViewDidLoad = function () {
        this.idcat = this.navParams.data.record._id;
        this.idcatn = this.navParams.data.record.nombre;
        this.pideregistros();
    };
    CategoriaformsusrListPage.prototype.loadMore = function (ev) {
        this.gLimit += 50;
        setTimeout(function () { return ev.complete(); }, 1000);
    };
    CategoriaformsusrListPage.prototype.deleteRecord = function (item, no) {
        var _this = this;
        var alert = this.alertCtrl.create({ title: 'Esta Seguro de realizar operación?',
            message: 'Operación eliminacion de registro',
            buttons: [
                { text: 'Si',
                    handler: function () {
                        var recordID = item._id;
                        _this.regService.deleteReg(recordID + '/' + _this.username + '/' + _this.idempresa + '/' + _this.idafiliado, 'catusuarios').then(function (data) {
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
    CategoriaformsusrListPage.prototype.updateRecord = function (item, no) {
        var _this = this;
        var addModal = this._MODAL.create('CategoriaformsusrCreatePage', { record: item, record2: { idcategoria: this.idcat } }, { showBackdrop: true, enableBackdropDismiss: false });
        addModal.onDidDismiss(function (data) {
            if (data) {
                _this.pideregistros();
            }
        });
        addModal.present();
        //  this.navCtrl.push('EmpresaCreatePage', { record : item });
    };
    CategoriaformsusrListPage.prototype.addRecord = function () {
        var _this = this;
        var addModal = this._MODAL.create('CategoriaformsusrCreatePage', { record: null, record2: { idcategoria: this.idcat } }, { showBackdrop: true, enableBackdropDismiss: false });
        addModal.onDidDismiss(function (data) {
            if (data) {
                _this.pideregistros();
            }
        });
        addModal.present();
        //this.navCtrl.push('EmpresaCreatePage');
    };
    CategoriaformsusrListPage.prototype.conferenciaRecord = function (item) {
        //  this.navCtrl.push('UnidadacademicaListPage', { record : item });
    };
    CategoriaformsusrListPage.prototype.showFilter = function () {
        var _this = this;
        var self = this;
        self.loading = false;
        this.hasFilter = true;
        var select = {
            title: 'Seleccione categoria',
            message: 'Categorias', inputs: [],
            buttons: [{ text: 'Cancelar' }, { text: 'Buscar', handler: function (todo) {
                        //buscamos
                        _this.items = _this.items2;
                        _this.items = _this.items2.filter(function (v) {
                            if (v.idformulario) {
                                if (v.idformulario._id == todo) {
                                    return true;
                                }
                                return false;
                            }
                        });
                    } }]
        };
        this.regService.getReg('todos/' + this.idempresa, 'frmmovils').then(function (data) {
            var aa;
            aa = data;
            for (var i = 0; i < aa.length; i++) {
                select.inputs.push({ name: 'myInput', type: 'radio', label: aa[i].nombre, value: aa[i]._id });
            }
            var newAlert = _this.alertCtrl.create(select);
            newAlert.present();
        }, function (err) {
            _this.msj.showError3('Error', err.error);
        });
    };
    CategoriaformsusrListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-categoriaformsusr-list',template:/*ion-inline-start:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\FORMULARIO\categoriaformsusr-list\categoriaformsusr-list.html"*/'<ion-header no-border class="opaque">\n  <ion-navbar  no-border-bottom>\n      <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n    <ion-title>\n        {{idcatn}}\n      </ion-title>\n\n          \n\n      <ion-buttons end>\n          <button  rel="tooltip" title="Filtrar por formulario" (click)="showFilter()" icon-only ion-button padding-right>\n              <ion-icon name="funnel"  [style.color]="hasFilter ? \'orange\' : \'inherit\'"></ion-icon>\n            </button>\n              <button  title="Refresh" (click)="pideregistros()" icon-only ion-button padding-right>\n              <ion-icon name="refresh"></ion-icon>\n            </button>\n           \n    \n        </ion-buttons>\n    </ion-navbar>\n    <ion-toolbar no-border-top>\n        <ion-searchbar debounce="2000" (ionCancel)="clearSearchg($event)" [(ngModel)]="gSearchQuery" placeholder="{{ \'NO2_REGISTROS\' | translate }}{{items.length}}]">\n        </ion-searchbar>\n    </ion-toolbar>\n  </ion-header>\n    \n  <ion-content  class="page-eventos-list" padding>\n     <ion-list >\n        <ion-item   *ngFor="let item of items | search: gSearchQuery | LimitPipe: gLimit ;let i = index;" text-wrap>\n          <ion-card >\n                <ion-row>\n                        <ion-col    text-right>\n                                No: {{i+1}}\n                        </ion-col>    \n                        <ion-item  text-wrap>\n                          <button ion-item   (click)="updateRecord(item,i)">\n                                <h2> Categoria: {{idcatn}} </h2>\n                                <h2> Formulario: {{item.idformulario.nombre}} </h2>\n                                <h2> Usuario: {{item.idusuario.nombre}} </h2>\n                             \n                          </button>\n                        </ion-item>\n                   \n                        </ion-row>\n                <ion-row no-padding>\n                          <ion-col>\n                            <button (click)="deleteRecord(item,i)" ion-button clear small  icon-start>\n                              <ion-icon name=\'md-trash\'></ion-icon>\n                              Eliminar\n                            </button>\n                          </ion-col>\n  \n                        \n  \n                        \n                  </ion-row>\n               \n              </ion-card>\n      </ion-item>\n     </ion-list>\n     <ion-infinite-scroll (ionInfinite)="loadMore($event)">\n        <ion-infinite-scroll-content></ion-infinite-scroll-content>\n      </ion-infinite-scroll>\n  \n      <ion-fab bottom right #fab>\n          <button ion-fab (click)="addRecord()"><ion-icon name="add"></ion-icon></button>\n          \n      </ion-fab>\n  \n  \n      \n  </ion-content>'/*ion-inline-end:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\FORMULARIO\categoriaformsusr-list\categoriaformsusr-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_2__providers__["d" /* NotificationProvider */], __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers__["a" /* Auth */]])
    ], CategoriaformsusrListPage);
    return CategoriaformsusrListPage;
}());

//# sourceMappingURL=categoriaformsusr-list.js.map

/***/ })

});
//# sourceMappingURL=131.js.map