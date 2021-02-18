webpackJsonp([268],{

/***/ 1326:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CursosviewListPage; });
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





var CursosviewListPage = /** @class */ (function () {
    //private barcodeScanner:BarcodeScanner,
    function CursosviewListPage(actionSheetCtrl, alertCtrl, storage, msj, translateService, navCtrl, _MODAL, navParams, regService
        //, private qrScanner: QRScanner
    ) {
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
        this.permisom = [];
        this.generated = '';
        this.hasFilter = false;
        this.gLimit = 50;
        this.PageSegmet = 'foods';
        this.gSearchQuery = '';
        this.username = "";
        this.idafiliado = 'na';
        this.OnExport = function () {
            this.regService.abrelinkinterno('datosfijos/excel-plantillas');
        };
        this.translateService.get('APPX').subscribe(function (value) {
            _this.idempresa = value;
        });
    }
    CursosviewListPage.prototype.clearSearchg = function () {
        this.gSearchQuery = '';
    };
    CursosviewListPage.prototype.showFilter = function () {
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
    CursosviewListPage.prototype.pideregistros = function () {
        var _this = this;
        var self = this;
        self.loading = true;
        this.regService.getReg(this.navParams.data.idempresa + '/todos', 'plantillas').then(function (data) {
            _this.items = data;
            _this.items2 = data;
            self.loading = false;
        }, function (err) {
            _this.msj.showError3('Error', err.error);
            // this.translateService.get('NO_OPERACION').subscribe((value) => { this.msj.showError3('Error',value);  })  
        });
    };
    CursosviewListPage.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get('username').then(function (value) {
            _this.username = value;
        });
    };
    CursosviewListPage.prototype.ionViewDidLoad = function () {
        this.pideregistros();
    };
    CursosviewListPage.prototype.loadMore = function (ev) {
        this.gLimit += 50;
        setTimeout(function () { return ev.complete(); }, 1000);
    };
    CursosviewListPage.prototype.deleteRecord = function (item, no) {
        var _this = this;
        var alert = this.alertCtrl.create({ title: 'Esta seguro de realizar esta operación?',
            buttons: [
                { text: 'Si',
                    handler: function () {
                        var recordID = item._id;
                        _this.regService.deleteReg(recordID + '/' + _this.username + '/' + _this.idempresa + '/' + _this.idafiliado, 'plantillas').then(function (data) {
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
    CursosviewListPage.prototype.updateRecord = function (item, no) {
        var _this = this;
        var addModal = this._MODAL.create('PlantillaCreatePage', { record: item, idempresa: this.navParams.data.idempresa }, { showBackdrop: true, enableBackdropDismiss: false });
        addModal.onDidDismiss(function (data) {
            if (data) {
                _this.pideregistros();
            }
        });
        addModal.present();
        //  this.navCtrl.push('EmpresaCreatePage', { record : item });
    };
    CursosviewListPage.prototype.addRecord = function () {
        var _this = this;
        var addModal = this._MODAL.create('PlantillaCreatePage', { record: null, idempresa: this.navParams.data.idempresa }, { showBackdrop: true, enableBackdropDismiss: false });
        addModal.onDidDismiss(function (data) {
            if (data) {
                _this.pideregistros();
            }
        });
        addModal.present();
        //this.navCtrl.push('EmpresaCreatePage');
    };
    CursosviewListPage.prototype.participaRecord = function (item) {
        this.navCtrl.push('PlantilladListPage', { record: item, record2: { idempresa: this.navParams.data.idempresa, idplantilla: item._id, nombrep: item.nombre } });
    };
    CursosviewListPage.prototype.conferenciaRecord = function (item) {
        this.navCtrl.push('PlantilladmListPage', { record: item, record2: { idempresa: this.navParams.data.idempresa, idplantilla: item._id, nombrep: item.nombre } });
    };
    CursosviewListPage.prototype.viewRecord = function (item) {
        // let modal = this._MODAL.create(ViewGalleryPage, { record : item });
        // modal.present();
    };
    CursosviewListPage.prototype.tomaqrpage = function (item) {
        var addModal = this._MODAL.create('CodebarpagPage', { record: item }, { showBackdrop: true, enableBackdropDismiss: false });
        addModal.present();
        //  this.navCtrl.push('EmpresaCreatePage', { record : item });
    };
    CursosviewListPage.prototype.verinfo = function (item, op) {
        var _this = this;
        this.regService.getReg(item._id + '/' + item.idempresa + '/' + op, 'plantillads').then(function (data) {
            if (data[0].descripcion) {
                _this.navCtrl.push('CursosviewHtmlPage', { html: data[0].descripcion, record: item, titulo: op });
            }
            else {
                _this.msj.showError3('Información', 'No existe información');
            }
        }, function (err) {
            _this.msj.showError3('Error', err.error);
        });
    };
    CursosviewListPage.prototype.iniciarcurso = function (item) {
        this.navCtrl.push('CursosviewUnidadesPage', { record: item, idplantilla: item._id, idempresa: item.idempresa });
    };
    CursosviewListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-cursosview-list',template:/*ion-inline-start:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\BLEARNING\cursosview-list\cursosview-list.html"*/'<ion-header>\n    <ion-navbar [color]="\'navbarColor\'">\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n          </button>\n      <ion-title>\n       PLANTILLAS\n      </ion-title>\n      <ion-buttons end>\n          <button (click)="showFilter()" icon-only ion-button padding-right>\n              <ion-icon name="funnel"  [style.color]="hasFilter ? \'orange\' : \'inherit\'"></ion-icon>\n            </button>\n\n            <button  title="Refresh" (click)="pideregistros()" icon-only ion-button padding-right>\n              <ion-icon name="refresh"></ion-icon>\n            </button>\n  \n        </ion-buttons>\n    </ion-navbar>\n    <ion-toolbar no-border-top>\n        <ion-searchbar debounce="2000" (ionCancel)="clearSearchg($event)" [(ngModel)]="gSearchQuery" placeholder="{{ \'NO2_REGISTROS\' | translate }}{{items.length}}]">\n        </ion-searchbar>\n    </ion-toolbar>\n  </ion-header>     \n        \n  <ion-content  class="page-eventos-list" padding>\n      <ion-list text-center>\n          \n         <div class="wrapper" text-center>\n             <ion-item   *ngFor="let item of items | search: gSearchQuery | LimitPipe: gLimit ;let i = index;" text-wrap text-center>\n               <div class="wrapper" >\n                   \n                   <div class="box yellow" text-center>\n      \n                          \n                      <ion-row class="header">\n                          <ion-col col-12 class="button-container">\n                              <h2>{{item.nombre}}</h2>\n                              <h3>{{item.descripcion}}</h3>\n                          </ion-col>   \n                      </ion-row>\n                  \n                      <ion-row>\n                          <ion-col col-12>\n                              <img src="{{item.foto}}" style="width:100px;height: 100px;-webkit-border-radius: 50%;                  border-radius: 50%;display: block; margin: center;  margin-left: auto; margin-right: auto;">\n                              <p> Ubicacion: {{item.ubicacion}}</p>\n                              <p> Fecha inicio: {{item.fechaini | Dafecha}} </p>\n                              <p> Fecha fin: {{item.fechafin | Dafecha}}</p>\n                                    </ion-col>\n                      </ion-row>\n                        \n                      <ion-row>\n                          <ion-col col-4>\n                              <ion-icon name="clock"></ion-icon> Tiempo:\n                          </ion-col>\n                          <ion-col col-8>\n                              <p style="display: inline-block; text-align: left;" item-content>{{item.tiempodias}}</p>\n                    \n                          </ion-col>\n                      </ion-row>\n                    \n                     \n                      <ion-row>\n                          <ion-col col-4>\n                              <ion-icon name="cash"></ion-icon> Costo\n                          </ion-col>\n                          <ion-col col-8>\n                              <p style="display: inline-block; text-align: left;" item-content>{{item.costo}}</p>\n                 \n                          </ion-col>\n       \n                      </ion-row>   \n                                  \n                                <ion-fab top left #fab2 middle>\n                                    <button ion-fab color="secondary"><ion-icon name="arrow-dropdown-circle"></ion-icon></button>\n                                    <ion-fab-list side="middle">\n                              <button ion-fab  rel="tooltip" title="Información general" (click)="verinfo(item,\'Descripción general\')"  color="light"><ion-icon name="list-box"></ion-icon></button>\n                                      <button  rel="tooltip" title="Información del tutor" (click)="verinfo(item,\'Información sobre los Instructores\')" ion-fab color="light"><ion-icon name="person-add"></ion-icon></button>\n                                      <button  rel="tooltip" title="Informacion del curso" (click)="verinfo(item,\'Que aprenderas, Requisitos y Para quién es este curso\')" ion-fab color="light"><ion-icon name="checkbox"></ion-icon></button>\n                                   \n                                     \n                                    </ion-fab-list>\n                                  </ion-fab>\n\n                         \n                           \n                            <!-- this fab is placed at the center of the content viewport -->\n                            <ion-fab bottom right #fab>\n                              <button color="tertiary" (click)="iniciarcurso(item)" ion-fab>Iniciar</button>\n                            </ion-fab>\n                 \n                                 \n                   </div>\n                    \n         \n                 \n   \n              </div>\n   \n                 \n       </ion-item>\n     </div>   \n   \n      </ion-list>\n      <ion-infinite-scroll (ionInfinite)="loadMore($event)">\n         <ion-infinite-scroll-content></ion-infinite-scroll-content>\n       </ion-infinite-scroll>\n   \n   \n   \n       \n   </ion-content>'/*ion-inline-end:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\BLEARNING\cursosview-list\cursosview-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_2__providers__["d" /* NotificationProvider */], __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers__["a" /* Auth */]
            //, private qrScanner: QRScanner
        ])
    ], CursosviewListPage);
    return CursosviewListPage;
}());

//# sourceMappingURL=cursosview-list.js.map

/***/ }),

/***/ 886:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CursosviewListPageModule", function() { return CursosviewListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cursosview_list__ = __webpack_require__(1326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pipes_pipes_module__ = __webpack_require__(445);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var CursosviewListPageModule = /** @class */ (function () {
    function CursosviewListPageModule() {
    }
    CursosviewListPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__cursosview_list__["a" /* CursosviewListPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__cursosview_list__["a" /* CursosviewListPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild(),
                __WEBPACK_IMPORTED_MODULE_4__pipes_pipes_module__["a" /* PipesModule */]
            ],
        })
    ], CursosviewListPageModule);
    return CursosviewListPageModule;
}());

//# sourceMappingURL=cursosview-list.module.js.map

/***/ })

});
//# sourceMappingURL=268.js.map