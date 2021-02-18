webpackJsonp([163],{

/***/ 1440:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DenunciaSegPage; });
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





var DenunciaSegPage = /** @class */ (function () {
    function DenunciaSegPage(modalCtrl, actionSheetCtrl, storage, alertCtrl, msj, translateService, navCtrl, _MODAL, navParams, regService) {
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
        this.tiposus = [];
        this.unidadt = "";
        this.hasFilter = false;
        this.gLimit = 500;
        this.PageSegmet = 'foods';
        this.gSearchQuery = '';
        this.username = "";
        this.idafiliado = 'na';
        this.excludeTracks = [];
        this.OnExport = function () {
            this.regService.abrelinkinterno('datosfijos/excel-participa/' + this.idevento);
        };
        this.translateService.get('APPX').subscribe(function (value) {
            _this.idempresa = value;
        });
    }
    DenunciaSegPage.prototype.clearSearchg = function () {
        this.gSearchQuery = '';
    };
    DenunciaSegPage.prototype.popimg2 = function (item, $event) {
        //http://54.226.181.255:8500/diplomaxx.cfm?nombre=%20mario%20roberto%20morales%20merida
        window.open("http://54.226.181.255:8500/diplomaxx.cfm?nombre=" + (item.nombre).toUpperCase() + ' ' + (item.apellido).toUpperCase(), '_system', 'location=yes');
    };
    DenunciaSegPage.prototype.popimg = function (item, $event) {
        //let modal = this.modalCtrl.create(ModalContentPage, item.nombre);
        // modal.present();
        // console.log(item.estado);
        var data = { message: item._id };
        var modalPage2 = this.modalCtrl.create('QrviewPage', data);
        modalPage2.present();
    };
    DenunciaSegPage.prototype.pideregistros = function (op) {
        var _this = this;
        var self = this;
        self.loading = true;
        this.regService.getReg(this.idsuscriptor + '/' + op + '/todos', 'participa33s').then(function (data) {
            _this.items = data;
            _this.items2 = data;
            self.loading = false;
        }, function (err) {
            _this.msj.showError3('Error', err.error);
        });
    };
    DenunciaSegPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.storage.get('tiposus').then(function (value) {
            _this.tiposus = value.split(',');
            _this.unidadt = _this.tiposus[7];
            _this.idsuscriptor = _this.tiposus[3];
            _this.pideregistros('Asignado');
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
    DenunciaSegPage.prototype.loadMore = function (ev) {
        this.gLimit += 500;
        setTimeout(function () { return ev.complete(); }, 1000);
    };
    DenunciaSegPage.prototype.deleteRecord = function (item, no) {
        var _this = this;
        var alert = this.alertCtrl.create({ title: 'Esta seguro de realizar esta operación?',
            buttons: [
                { text: 'Si',
                    handler: function () {
                        var recordID = item._id;
                        _this.regService.deleteReg(recordID + '/' + _this.username + '/' + _this.idempresa + '/' + _this.idafiliado, 'participas').then(function (data) {
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
    DenunciaSegPage.prototype.updateRecord = function (item, no) {
        var _this = this;
        var addModal = this._MODAL.create('DenunciaSegcreatePage', { record: item, record3: this.navParams.data.record, record2: { idevento: this.idevento, nidevento: this.nevento } }, { showBackdrop: true, enableBackdropDismiss: false });
        addModal.onDidDismiss(function (data) {
            _this.pideregistros('Asignado');
        });
        addModal.present();
        //  this.navCtrl.push('EmpresaCreatePage', { record : item });
    };
    DenunciaSegPage.prototype.viewRecord = function (item) {
        // let modal = this._MODAL.create(ViewGalleryPage, { record : item });
        // modal.present();
    };
    DenunciaSegPage.prototype.showFilter = function () {
        var _this = this;
        var self = this;
        self.loading = true;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Filtrar por estado:',
            buttons: [
                {
                    text: 'Participante registrado',
                    handler: function () {
                        _this.items = _this.items2;
                        _this.items = _this.items2.filter(function (v) {
                            if (v.estado) {
                                if (v.estado == 'Creado') {
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
                    text: 'Participante registrado, correo enviado',
                    handler: function () {
                        _this.items = _this.items2;
                        _this.items = _this.items2.filter(function (v) {
                            if (v.estado) {
                                self.loading = false;
                                if (v.estado == 'Ingreso, mail enviado') {
                                    return true;
                                }
                                return false;
                            }
                        });
                    }
                },
                {
                    text: 'Participante a ingresado ( diplomas a imprimir)',
                    handler: function () {
                        _this.items = _this.items2;
                        _this.items = _this.items2.filter(function (v) {
                            if (v.estado) {
                                self.loading = false;
                                if (v.estado == 'Ingreso') {
                                    return true;
                                }
                                return false;
                            }
                        });
                    }
                },
                {
                    text: 'Diplomas Impresos',
                    handler: function () {
                        _this.items = _this.items2;
                        _this.items = _this.items2.filter(function (v) {
                            if (v.estado) {
                                self.loading = false;
                                if (v.estado == 'Impreso') {
                                    return true;
                                }
                                return false;
                            }
                        });
                        _this.hasFilter = true;
                    }
                }
            ]
        });
        actionSheet.present();
    };
    DenunciaSegPage.prototype.updateSchedule = function () {
        // Close any open sliding items when the schedule updates
        /*
         this.scheduleList && this.scheduleList.closeSlidingItems();
     
         this.confData.getTimeline(this.dayIndex, this.queryText, this.excludeTracks, this.segment).subscribe((data: any) => {
           this.shownSessions = data.shownSessions;
           this.groups = data.groups;
         });
         */
    };
    DenunciaSegPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-denuncia-seg',template:/*ion-inline-start:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\DENUNCIAS\denuncia-seg\denuncia-seg.html"*/'<ion-header>\n    <ion-navbar [color]="\'navbarColor2\'">\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n          </button>\n      <ion-title>\n        Reportes asignados\n      </ion-title>\n     \n    </ion-navbar>\n <!--  <ion-toolbar no-border-top>\n        <ion-searchbar debounce="2000" (ionCancel)="clearSearchg($event)" [(ngModel)]="gSearchQuery" placeholder="{{ \'NO2_REGISTROS\' | translate }}{{items.length}}]">\n          </ion-searchbar>\n      </ion-toolbar>\n  --> \n  </ion-header>\n    \n  <ion-content   padding>\n      <ion-segment   color="primary">\n          <ion-segment-button (ionSelect)="pideregistros(\'Asignado\')"  value=\'Asignados\'>\n              Asignados\n          </ion-segment-button>\n          <ion-segment-button (ionSelect)="pideregistros(\'Cierre Pendiente\')" value=\'Cierre Pendiente\'>\n              Cierre Pendiente\n          </ion-segment-button>\n          <ion-segment-button (ionSelect)="pideregistros(\'Cerrado\')" value=\'Cerrados\'>\n              Cerrados\n            </ion-segment-button>\n        </ion-segment>\n     <br>\n              \n     <ion-list >\n        <div class="wrapper" text-center>\n        <ion-item   *ngFor="let item of items  ;let i = index;" text-wrap>\n          \n            <div class="wrapper" >  \n           \n\n                <div class="box yellow" text-center>  \n                 <div class="laberderecho">\n                   Nombre:  {{item.nombre}} \n                 </div>  \n                 <div class="laberderecho">   \n                   cui:  {{item.cui }}\n                 </div>  \n                    <ion-row class="header">   \n                      \n                        <ion-col col-12 class="button-container">   \n                          <h3>Tipo:</h3>  <p orange>{{item.tipo}}</p>\n                        </ion-col>   \n                    </ion-row>\n                    \n                    <ion-row>\n                        <ion-col col-12>\n                         <h3>Motivo:</h3>   <p orange>{{item.motivo2}}...</p>\n                          \n                        \n                                  </ion-col>\n                    </ion-row>\n\n                    <ion-row  *ngIf="item.motivo3!==\'\'" >\n                        <ion-col col-12>\n                         <h3>Descripcion de rechazo:</h3>   <p orange>{{item.motivo3}}...</p>\n                              \n                        \n                                  </ion-col>\n                    </ion-row>\n    \n                      \n                    <ion-row>\n                        <ion-col col-4>\n                            <ion-icon name="contact"></ion-icon> Estado\n                        </ion-col>\n                        <ion-col col-8>\n                            <p style="display: inline-block; text-align: left;" item-content>{{item.estado}}</p>\n                  \n                        </ion-col>\n                    </ion-row>     \n                    \n                    \n                      \n                    <ion-fab *ngIf="item.estado == \'Asignado\'" bottom right #fab>\n                        <button color="tertiary" (click)="updateRecord(item,i)" ion-fab>Ejecutar</button>\n                      </ion-fab>\n                         \n                          <!-- this fab is placed at the center of the content viewport -->\n                         \n               \n                               \n                 </div>\n                  \n   \n   \n       \n               \n   \n            </div>\n\n            \n\n      \n    \n      </ion-item>\n    </div>  \n     </ion-list>\n     <ion-infinite-scroll (ionInfinite)="loadMore($event)">\n        <ion-infinite-scroll-content></ion-infinite-scroll-content>\n      </ion-infinite-scroll>\n  \n  \n  </ion-content>'/*ion-inline-end:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\DENUNCIAS\denuncia-seg\denuncia-seg.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__providers__["d" /* NotificationProvider */], __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers__["a" /* Auth */]])
    ], DenunciaSegPage);
    return DenunciaSegPage;
}());

//# sourceMappingURL=denuncia-seg.js.map

/***/ }),

/***/ 998:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DenunciaSegPageModule", function() { return DenunciaSegPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__denuncia_seg__ = __webpack_require__(1440);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pipes_pipes_module__ = __webpack_require__(445);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var DenunciaSegPageModule = /** @class */ (function () {
    function DenunciaSegPageModule() {
    }
    DenunciaSegPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__denuncia_seg__["a" /* DenunciaSegPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__denuncia_seg__["a" /* DenunciaSegPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild(),
                __WEBPACK_IMPORTED_MODULE_4__pipes_pipes_module__["a" /* PipesModule */]
            ],
        })
    ], DenunciaSegPageModule);
    return DenunciaSegPageModule;
}());

//# sourceMappingURL=denuncia-seg.module.js.map

/***/ })

});
//# sourceMappingURL=163.js.map