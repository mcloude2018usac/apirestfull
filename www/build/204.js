webpackJsonp([204],{

/***/ 1395:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Unidadacademica3ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_pdf_pdfx__ = __webpack_require__(447);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var Unidadacademica3ListPage = /** @class */ (function () {
    //private barcodeScanner:BarcodeScanner,
    function Unidadacademica3ListPage(Pdfx, actionSheetCtrl, alertCtrl, storage, msj, translateService, navCtrl, _MODAL, navParams, regService) {
        var _this = this;
        this.Pdfx = Pdfx;
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
        this.permisom = [];
        this.potros1 = [];
        this.pingreso = false;
        this.pconsulta = false;
        this.peliminacion = false;
        this.pcreacion = false;
        this.pactualizacion = false;
        this.preporte = false;
        this.pfiltro = false;
        this.gLimit = 50;
        this.PageSegmet = 'foods';
        this.gSearchQuery = '';
        this.username = "";
        this.translateService.get('APPX').subscribe(function (value) {
            _this.idempresa = value;
        });
        this.permisom = String(navParams.get("permiso")).split(",");
        this.potros1 = JSON.parse(JSON.stringify(navParams.get("potros1")));
        this.pingreso = (this.permisom[0] == 'true');
        this.pconsulta = (this.permisom[1] == 'true');
        this.peliminacion = (this.permisom[2] == 'true');
        this.pcreacion = (this.permisom[3] == 'true');
        this.pactualizacion = (this.permisom[4] == 'true');
        this.pfiltro = (this.permisom[5] == 'true');
        this.preporte = (this.permisom[6] == 'true');
        var someJsonString = navParams.get("potros1");
        // jsonObject will contain a valid JavaScript object
        if (someJsonString != '') {
            this.jsonObject2 = JSON.parse(someJsonString);
        }
    }
    Unidadacademica3ListPage.prototype.dapermisos = function (data, opcion) {
        var re;
        if (data) {
            for (var i = 0; i < data.length; i++) {
                if (data[i].modulo == opcion) {
                    re = data[i].permisos;
                    break;
                }
            }
        }
        //DD/MM/YYYY hh:mm A
        return re;
    };
    Unidadacademica3ListPage.prototype.dapermisos2 = function (data, opcion) {
        var re = '';
        if (data) {
            for (var i = 0; i < data.length; i++) {
                if (data[i].modulo == opcion) {
                    re = data[i].permisos.ingreso + ',' + data[i].permisos.consulta + ',' + data[i].permisos.elimina + ',' + data[i].permisos.creacion + ',' + data[i].permisos.actualiza + ',' + data[i].permisos.filtro + ',' + data[i].permisos.reporte;
                    break;
                }
            }
        }
        return re;
    };
    Unidadacademica3ListPage.prototype.dapermisos_visible = function (opcion) {
        var re = false;
        if (this.jsonObject2) {
            for (var i = 0; i < this.jsonObject2.length; i++) {
                if (this.jsonObject2[i].modulo == opcion) {
                    re = !this.jsonObject2[i].permisos.ingreso;
                    break;
                }
            }
        }
        //DD/MM/YYYY hh:mm A
        return re;
    };
    Unidadacademica3ListPage.prototype.clearSearchg = function () {
        this.gSearchQuery = '';
    };
    Unidadacademica3ListPage.prototype.showFilter = function () {
    };
    Unidadacademica3ListPage.prototype.pideregistros = function () {
        var _this = this;
        var self = this;
        self.loading = true;
        this.regService.getReg(this.idtipo + '/todos', 'unidadacademica3s').then(function (data) {
            _this.items = data;
            _this.items2 = data;
            self.loading = false;
        }, function (err) {
            _this.msj.showError3('Error', err.error);
            // this.translateService.get('NO_OPERACION').subscribe((value) => { this.msj.showError3('Error',value);  })
        });
    };
    Unidadacademica3ListPage.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get('username').then(function (value) {
            _this.username = value;
        });
    };
    Unidadacademica3ListPage.prototype.ionViewDidLoad = function () {
        this.idtipo = this.navParams.data.record._id;
        this.ntipo = this.navParams.data.record.nombre;
        this.pideregistros();
    };
    Unidadacademica3ListPage.prototype.loadMore = function (ev) {
        this.gLimit += 50;
        setTimeout(function () { return ev.complete(); }, 1000);
    };
    Unidadacademica3ListPage.prototype.deleteRecord = function (item, no) {
        var _this = this;
        var alert = this.alertCtrl.create({ title: 'Esta seguro de realizar esta operación?',
            buttons: [
                { text: 'Si',
                    handler: function () {
                        var recordID = item._id;
                        _this.regService.deleteReg(recordID + '/' + _this.username + '/' + _this.idempresa + '/' + _this.idafiliado, 'unidadacademica3s').then(function (data) {
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
    Unidadacademica3ListPage.prototype.updateRecord = function (item, no) {
        var _this = this;
        var addModal = this._MODAL.create('Unidadacademica3CreatePage', { record: item, record2: { idtipo: this.idtipo, ntipo: this.ntipo } }, { showBackdrop: true, enableBackdropDismiss: false });
        addModal.onDidDismiss(function (data) {
            if (data) {
                _this.pideregistros();
            }
        });
        addModal.present();
        //  this.navCtrl.push('EmpresaCreatePage', { record : item });
    };
    Unidadacademica3ListPage.prototype.addRecord = function () {
        var _this = this;
        var addModal = this._MODAL.create('Unidadacademica3CreatePage', { record: null, record2: { idtipo: this.idtipo, ntipo: this.ntipo } }, { showBackdrop: true, enableBackdropDismiss: false });
        addModal.onDidDismiss(function (data) {
            if (data) {
                _this.pideregistros();
            }
        });
        addModal.present();
        //this.navCtrl.push('EmpresaCreatePage');
    };
    Unidadacademica3ListPage.prototype.conferenciaRecord3 = function (item) {
        this.navCtrl.push('Unidadperiodo3ListPage', { record: item, tnombre: item.ididioma.nombre + ' ' + item.idtipogrupo.nombre,
            tunidad: this.ntipo, permiso: this.dapermisos2(this.jsonObject2, 'CURSOS'), potros1: this.navParams.get("potros1"), record2: { idtipo: this.idtipo, idnombre: this.ntipo, idtipo2: item._id, idnombre2: item.nombre, idcodigo2: item.codigo } });
    };
    Unidadacademica3ListPage.prototype.conferenciaRecord = function (item) {
        this.navCtrl.push('Unidadnivel3ListPage', { record: item, tnombre: item.ididioma.nombre + ' ' + item.idtipogrupo.nombre,
            unidad: item.idtipounidad.nombre });
    };
    Unidadacademica3ListPage.prototype.conferenciaRecordD = function (item) {
        this.navCtrl.push('Unidadpago3ListPage', { record: item });
    };
    Unidadacademica3ListPage.prototype.conferenciaRecordA = function (item) {
    };
    Unidadacademica3ListPage.prototype.conferenciaRecordC = function (item) {
        this.navCtrl.push('Unidaddia3ListPage', { record: item });
    };
    Unidadacademica3ListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-Unidadacademica3-list',template:/*ion-inline-start:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\CALUSAC\unidadacademica\unidadacademica3-list\unidadacademica3-list.html"*/'\n      <ion-header no-border class="opaque">\n          <ion-navbar   no-border-bottom>\n            <button ion-button menuToggle>\n                <ion-icon name="menu"></ion-icon>\n              </button>\n          <ion-title>\n              {{ntipo}}-> Cursos\n          </ion-title>\n            <ion-toolbar  class="opaque" >\n                <ion-buttons end>\n\n                    <button [hidden]="!pconsulta" title="Refresh" (click)="pideregistros()" icon-only ion-button padding-right>\n                    <ion-icon name="refresh"></ion-icon>\n                  </button>\n              </ion-buttons>\n                <ion-searchbar [hidden]="!pconsulta" showCancelButton="true"   debounce="2000" (ionCancel)="clearSearchg($event)"\n                 [(ngModel)]="gSearchQuery" placeholder="{{ \'NO2_REGISTROS\' | translate }}{{items.length}}]">\n                </ion-searchbar>\n            </ion-toolbar>\n        </ion-navbar>\n      </ion-header>\n      <ion-content  fullscreen>\n     <ion-list >\n        <ion-item   *ngFor="let item of items | search: gSearchQuery | LimitPipe: gLimit ;let i = index;" text-wrap>\n          <ion-card [hidden]="!pconsulta">\n              <ion-item text-wrap>\n                  <button ion-item  [disabled]="!pactualizacion"  (click)="updateRecord(item,i)">\n                      <p>Codigo: {{item.codigo}}</p>\n                      <h2>Tipo grupo: {{item.idtipocurso.nombre}}</h2>\n                      <h2>Tipo curso: {{item.idtipogrupo.nombre}}</h2>\n\n                      <h2>Idioma: {{item.ididioma.nombre}}</h2>\n                  <h2>Nombre: {{item.nombre}}</h2>\n                  <h2>Estado: {{item.estado}}</h2>\n                  </button>\n                </ion-item>\n                <ion-row no-padding>\n                          <ion-col>\n                            <button [hidden]="!peliminacion"  (click)="deleteRecord(item,i)" ion-button clear small  icon-start>\n                              <ion-icon name=\'md-trash\'></ion-icon>\n                              Eliminar\n                            </button>\n                          </ion-col>\n\n\n\n                          <ion-col text-center>\n                              <button  [hidden]="dapermisos_visible(\'NIVELES\')"  (click)="conferenciaRecord(item)" ion-button clear small  icon-start>\n                                <ion-icon name=\'albums\'></ion-icon>\n                                Niveles\n\n                              </button>\n                            </ion-col>\n\n\n\n\n\n                                  <ion-col text-center>\n                                    <button  [hidden]="dapermisos_visible(\'PAGOS\')"   (click)="conferenciaRecordD(item)" ion-button clear small icon-start>\n                                      <ion-icon name=\'card\'></ion-icon>\n                                      Pagos\n\n                                    </button>\n                                  </ion-col>\n\n                                  <ion-col text-center>\n                                      <button  [hidden]="dapermisos_visible(\'CURSOS_PLANIFICACION\')"   (click)="conferenciaRecord3(item)" ion-button clear small  icon-start>\n                                        <ion-icon name=\'albums\'></ion-icon>\n                                        Periodos (planificacion)\n\n                                      </button>\n                                    </ion-col>\n\n                  </ion-row>\n\n              </ion-card>\n      </ion-item>\n     </ion-list>\n     <ion-infinite-scroll (ionInfinite)="loadMore($event)">\n        <ion-infinite-scroll-content></ion-infinite-scroll-content>\n      </ion-infinite-scroll>\n\n      <ion-fab bottom right #fab>\n          <button ion-fab [hidden]="!pcreacion"  (click)="addRecord()"><ion-icon name="add"></ion-icon></button>\n\n      </ion-fab>\n\n\n\n  </ion-content>\n'/*ion-inline-end:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\CALUSAC\unidadacademica\unidadacademica3-list\unidadacademica3-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__providers_pdf_pdfx__["a" /* pdfx */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_2__providers__["d" /* NotificationProvider */], __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers__["a" /* Auth */]])
    ], Unidadacademica3ListPage);
    return Unidadacademica3ListPage;
}());

//# sourceMappingURL=unidadacademica3-list.js.map

/***/ }),

/***/ 955:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Unidadacademica3ListPageModule", function() { return Unidadacademica3ListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__unidadacademica3_list__ = __webpack_require__(1395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pipes_pipes_module__ = __webpack_require__(445);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var Unidadacademica3ListPageModule = /** @class */ (function () {
    function Unidadacademica3ListPageModule() {
    }
    Unidadacademica3ListPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__unidadacademica3_list__["a" /* Unidadacademica3ListPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__unidadacademica3_list__["a" /* Unidadacademica3ListPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild(),
                __WEBPACK_IMPORTED_MODULE_4__pipes_pipes_module__["a" /* PipesModule */]
            ],
        })
    ], Unidadacademica3ListPageModule);
    return Unidadacademica3ListPageModule;
}());

//# sourceMappingURL=unidadacademica3-list.module.js.map

/***/ })

});
//# sourceMappingURL=204.js.map