webpackJsonp([183],{

/***/ 1417:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Unidadperiodo3aListPage; });
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






var Unidadperiodo3aListPage = /** @class */ (function () {
    function Unidadperiodo3aListPage(Pdfx, modalCtrl, actionSheetCtrl, storage, alertCtrl, msj, translateService, navCtrl, _MODAL, navParams, regService) {
        var _this = this;
        this.Pdfx = Pdfx;
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
        this.permisom = [];
        this.potros1 = [];
        this.pingreso = false;
        this.pconsulta = false;
        this.peliminacion = false;
        this.pcreacion = false;
        this.pactualizacion = false;
        this.preporte = false;
        this.pfiltro = false;
        this.idafiliado = 'na';
        this.hasFilter = false;
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
        this.jsonObject2 = JSON.parse(someJsonString);
    }
    Unidadperiodo3aListPage.prototype.clearSearchg = function () {
        this.gSearchQuery = '';
    };
    Unidadperiodo3aListPage.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get('username').then(function (value) {
            _this.username = value;
        });
    };
    Unidadperiodo3aListPage.prototype.dapermisos2 = function (data, opcion) {
        var re = '';
        for (var i = 0; i < data.length; i++) {
            if (data[i].modulo == opcion) {
                re = data[i].permisos.ingreso + ',' + data[i].permisos.consulta + ',' + data[i].permisos.elimina + ',' + data[i].permisos.creacion + ',' + data[i].permisos.actualiza + ',' + data[i].permisos.filtro + ',' + data[i].permisos.reporte;
                break;
            }
        }
        return re;
    };
    Unidadperiodo3aListPage.prototype.dapermisos = function (data, opcion) {
        var re;
        for (var i = 0; i < data.length; i++) {
            if (data[i].modulo == opcion) {
                re = data[i].permisos;
                break;
            }
        }
        //DD/MM/YYYY hh:mm A
        return re;
    };
    Unidadperiodo3aListPage.prototype.dapermisos_visible = function (opcion) {
        var re = false;
        for (var i = 0; i < this.jsonObject2.length; i++) {
            if (this.jsonObject2[i].modulo == opcion) {
                re = !this.jsonObject2[i].permisos.ingreso;
                break;
            }
        }
        //DD/MM/YYYY hh:mm A
        return re;
    };
    Unidadperiodo3aListPage.prototype.pideregistros = function () {
        var _this = this;
        var self = this;
        self.loading = true;
        this.regService.getReg(this.idtipo + '/' + this.idtipo + '/todosver', 'unidadperiodo3as').then(function (data) {
            _this.items = data;
            _this.items2 = data;
            self.loading = false;
        }, function (err) {
            _this.msj.showError3('Error', err.error);
        });
    };
    Unidadperiodo3aListPage.prototype.ionViewDidLoad = function () {
        this.idtipo = this.navParams.data.record2.idtipo;
        this.idnombre = this.navParams.data.record2.idnombre;
        this.idtipo2 = this.navParams.data.record2.idtipo2;
        this.idnombre2 = this.navParams.data.record2.idnombre2;
        this.idcodigo2 = this.navParams.data.record2.idcodigo2;
        this.pideregistros();
    };
    Unidadperiodo3aListPage.prototype.loadMore = function (ev) {
        this.gLimit += 50;
        setTimeout(function () { return ev.complete(); }, 1000);
    };
    Unidadperiodo3aListPage.prototype.salonRecord = function (item, no) {
        this.navCtrl.push('unidadplan4aListPage', { record: item, record2: { idtipo: this.idtipo, idnombre: this.idnombre, idtipo2: this.idtipo2, idnombre2: this.idnombre2, idtipo3: item._id, idnombre3: item.nombre, idcodigo2: this.idcodigo2 } });
    };
    /*
      this.idtipo=this.navParams.data.record.idtipounidad;
      this.idnombre=this.navParams.data.record.nombre;
      this.idtipo2=this.navParams.data.record._id;
      */
    Unidadperiodo3aListPage.prototype.reportehh = function (item, no) {
        var _this = this;
        this.regService.getReg2b(item.idtipounidad + '/' + item.idtipounidad + '/' + item.nombre + '/1/horariocalusac', 'unidadplan3s').then(function (result) {
            //  this.vpago=result;
            var vdata = [];
            vdata = result;
            if (vdata.length == 0) {
                _this.msj.showError3('Información ', 'No existe periodo activo');
            }
            else {
                _this.Pdfx.dahorarioingles(result, _this.navParams.data.tnombre, item.nombre, _this.navParams.data.tunidad);
            }
        }, function (err) {
        });
    };
    Unidadperiodo3aListPage.prototype.deleteRecord = function (item, no) {
        var _this = this;
        var alert = this.alertCtrl.create({ title: 'Esta seguro de realizar esta operación?',
            buttons: [
                { text: 'Si',
                    handler: function () {
                        var recordID = item._id;
                        _this.regService.deleteReg(recordID + '/' + _this.username + '/' + _this.idempresa + '/' + _this.idafiliado, 'unidadperiodo3as').then(function (data) {
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
    Unidadperiodo3aListPage.prototype.updateRecord = function (item, no) {
        var _this = this;
        var addModal = this._MODAL.create('Unidadperiodo3aCreatePage', { record: item, record2: { idtipo: this.idtipo, idtipo2: this.idtipo2, idnombre: this.idnombre } }, { showBackdrop: true, enableBackdropDismiss: false });
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
    Unidadperiodo3aListPage.prototype.addRecord = function () {
        var _this = this;
        var addModal = this._MODAL.create('Unidadperiodo3aCreatePage', { record: null, record2: { idtipo: this.idtipo, idtipo2: this.idtipo2, idnombre: this.idnombre } }, { showBackdrop: true, enableBackdropDismiss: false });
        addModal.onDidDismiss(function (data) {
            if (data) {
                _this.items = _this.items.concat([data]);
                _this.items2 = _this.items;
            }
        });
        addModal.present();
        //this.navCtrl.push('EmpresaCreatePage');
    };
    Unidadperiodo3aListPage.prototype.viewRecord = function (item) {
    };
    Unidadperiodo3aListPage.prototype.presentFilter = function () {
    };
    Unidadperiodo3aListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-Unidadperiodo3a-list',template:/*ion-inline-start:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\CALUSAC\unidadacademica\unidadperiodo3a-list\unidadperiodo3a-list.html"*/'<ion-header no-border class="opaque">\n    <ion-navbar   no-border-bottom>\n      <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n    <ion-title>\n      PERIODO-> {{idnombre2}}\n    </ion-title>\n      <ion-toolbar  class="opaque" >\n          <ion-buttons end>\n\n              <button title="Refresh" (click)="pideregistros()" icon-only ion-button padding-right>\n              <ion-icon name="refresh"></ion-icon>\n            </button>\n        </ion-buttons>\n          <ion-searchbar   showCancelButton="true"   debounce="2000" (ionCancel)="clearSearchg($event)"\n           [(ngModel)]="gSearchQuery" placeholder="{{ \'NO2_REGISTROS\' | translate }}{{items.length}}]">\n          </ion-searchbar>\n      </ion-toolbar>\n  </ion-navbar>\n</ion-header>\n<ion-content  fullscreen>\n     <ion-list >\n\n\n\n        <ion-item    *ngFor="let item of items | search: gSearchQuery | LimitPipe: gLimit ;let i = index;" text-wrap>\n\n                <ion-card  >\n                        <ion-item text-wrap>\n                            <button ion-item  (click)="updateRecord(item,i)">\n                            <h2>{{i+1}}. Nombre: {{item.nombre}}</h2>\n                            <h2>Codigo: {{item.codigo}}</h2>\n                            <h2>Año: {{item.ano}}</h2>\n                            <h2>Estado: {{item.estado}}</h2>\n                            </button>\n                          </ion-item>\n                          <ion-row no-padding>\n                                    <ion-col>\n                                      <button  (click)="deleteRecord(item,i)" ion-button clear small  icon-start>\n                                        <ion-icon name=\'md-trash\'></ion-icon>\n                                        Eliminar\n                                      </button>\n                                    </ion-col>\n\n\n                                    <ion-col text-center>\n                                        <button  (click)="salonRecord(item,i)" ion-button clear small  icon-start>\n                                          <ion-icon name=\'albums\'></ion-icon>\n                                           Planificacion\n\n                                        </button>\n                                      </ion-col>\n\n\n                          <ion-col>\n                            <button (click)="reportehh(item,i)" ion-button clear small  icon-start>\n                              <ion-icon name=\'browsers\'></ion-icon>\n                             Reporte de horario\n                            </button>\n                          </ion-col>\n\n\n\n                            </ion-row>\n\n                        </ion-card>\n\n\n\n\n      </ion-item>\n     </ion-list>\n     <ion-infinite-scroll (ionInfinite)="loadMore($event)">\n        <ion-infinite-scroll-content></ion-infinite-scroll-content>\n      </ion-infinite-scroll>\n\n      <ion-fab bottom right #fab>\n          <button ion-fab  (click)="addRecord()"><ion-icon name="add"></ion-icon></button>\n\n      </ion-fab>\n\n  </ion-content>\n'/*ion-inline-end:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\CALUSAC\unidadacademica\unidadperiodo3a-list\unidadperiodo3a-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__providers_pdf_pdfx__["a" /* pdfx */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__providers__["d" /* NotificationProvider */], __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers__["a" /* Auth */]])
    ], Unidadperiodo3aListPage);
    return Unidadperiodo3aListPage;
}());

//# sourceMappingURL=unidadperiodo3a-list.js.map

/***/ }),

/***/ 977:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Unidadperiodo3aListPageModule", function() { return Unidadperiodo3aListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__unidadperiodo3a_list__ = __webpack_require__(1417);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pipes_pipes_module__ = __webpack_require__(445);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var Unidadperiodo3aListPageModule = /** @class */ (function () {
    function Unidadperiodo3aListPageModule() {
    }
    Unidadperiodo3aListPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__unidadperiodo3a_list__["a" /* Unidadperiodo3aListPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__unidadperiodo3a_list__["a" /* Unidadperiodo3aListPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild(),
                __WEBPACK_IMPORTED_MODULE_4__pipes_pipes_module__["a" /* PipesModule */]
            ],
        })
    ], Unidadperiodo3aListPageModule);
    return Unidadperiodo3aListPageModule;
}());

//# sourceMappingURL=unidadperiodo3a-list.module.js.map

/***/ })

});
//# sourceMappingURL=183.js.map