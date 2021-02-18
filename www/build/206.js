webpackJsonp([206],{

/***/ 1393:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Tipounidad3ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_in_app_browser__ = __webpack_require__(456);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var Tipounidad3ListPage = /** @class */ (function () {
    //private barcodeScanner:BarcodeScanner,
    function Tipounidad3ListPage(iab, actionSheetCtrl, alertCtrl, storage, msj, translateService, navCtrl, _MODAL, navParams, regService) {
        var _this = this;
        this.iab = iab;
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
        this.permisom = [];
        this.potros1 = [];
        this.pingreso = false;
        this.pconsulta = false;
        this.peliminacion = false;
        this.pcreacion = false;
        this.pactualizacion = false;
        this.preporte = false;
        this.pfiltro = false;
        this.hasFilter = false;
        this.idafiliado = 'na';
        this.gLimit = 50;
        this.PageSegmet = 'foods';
        this.gSearchQuery = '';
        this.username = "";
        this.OnExport2 = function (item) {
            var _this = this;
            var prompt = this.alertCtrl.create({
                title: ' Ingrese periodo (2019-01)',
                inputs: [
                    {
                        name: 'Periodo'
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
                                if (todo != '') {
                                    _this.regService.abrelinkinterno('datosfijos/excel-asignaU/' + todo.Periodo + '/' + item.nombre);
                                }
                            }
                        }
                    }
                ]
            });
            prompt.present();
        };
        this.OnExport = function () {
            var _this = this;
            var prompt = this.alertCtrl.create({
                title: ' Ingrese periodo (2019-01)',
                inputs: [
                    {
                        name: 'Periodo'
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
                                if (todo != '') {
                                    _this.regService.abrelinkinterno('datosfijos/excel-asigna/' + todo.Periodo);
                                }
                            }
                        }
                    }
                ]
            });
            prompt.present();
        };
        this.OnExport4 = function () {
            var options = {
                toolbarcolor: "#488aff",
                hideurlbar: "yes",
                closebuttoncolor: "#fff",
                navigationbuttoncolor: "#fff"
            };
            var url = 'http://52.90.195.238:3000/pivot.html?v1=/api/pivotem1/db1/asignasun/1/2/3&v2=classic';
            var target = "_blank";
            this.iab.create(url, target, options);
            //let url='http://52.90.195.238:3000/pivot.html?v1=/api/pivotem1/db1/asignasun/1/2/3&v2=classic'
            //this.navCtrl.push('FrameViewPage',{titulo:'Reporte SUN asignación',link:url });
        };
        this.OnExport3 = function () {
            var _this = this;
            var prompt = this.alertCtrl.create({
                title: ' Ingrese periodo (2019-01)',
                inputs: [
                    {
                        name: 'Periodo'
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
                                if (todo != '') {
                                    _this.regService.abrelinkinterno('datosfijos/excel-asigna3/' + todo.Periodo);
                                }
                            }
                        }
                    }
                ]
            });
            prompt.present();
        };
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
        //var aa=this.dapermisos(jsonObject2,'TIPO CURSO');
    }
    Tipounidad3ListPage.prototype.showFilter4 = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Descarga de reportes',
            buttons: [
                {
                    text: 'Archivo Estudiantes (csv)',
                    handler: function () {
                        _this.regService.abrelinkinterno('asignacalusacs/1/2/rptasignacalusac2');
                    }
                },
                {
                    text: 'Archivo Asignaciones (csv)',
                    handler: function () {
                        _this.regService.abrelinkinterno('asignacalusacs/1/2/rptasignacalusac1');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    Tipounidad3ListPage.prototype.showFilter40 = function (item) {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Descarga de reportes',
            buttons: [
                {
                    text: 'Archivo Estudiantes (csv)',
                    handler: function () {
                        _this.regService.abrelinkinterno('asignacalusacs/' + item._id + '/2/rptasignacalusac2a');
                    }
                },
                {
                    text: 'Archivo Asignaciones (csv)',
                    handler: function () {
                        _this.regService.abrelinkinterno('asignacalusacs/' + item._id + '/2/rptasignacalusac1a');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    Tipounidad3ListPage.prototype.dapermisos2 = function (data, opcion) {
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
    Tipounidad3ListPage.prototype.dapermisos = function (data, opcion) {
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
    Tipounidad3ListPage.prototype.dapermisos_visible = function (opcion) {
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
    Tipounidad3ListPage.prototype.clearSearchg = function () {
        this.gSearchQuery = '';
    };
    Tipounidad3ListPage.prototype.showFilter = function () {
    };
    Tipounidad3ListPage.prototype.bpivote = function () {
        var aa = this.regService.daserverpivot() + 'pivot.html?v1=/api/pivotem1/db1/plancalusac/1/2/3' + '&v2=classic';
        this.regService.abrelinkinterno3(aa, '_system', 'location=yes', 2);
    };
    Tipounidad3ListPage.prototype.costocalusac = function () {
        this.navCtrl.push('CostocalusacListPage', { record: null });
    };
    Tipounidad3ListPage.prototype.pideregistros = function () {
        var _this = this;
        var self = this;
        self.loading = true;
        this.regService.getReg('todos', 'tipounidad3s').then(function (data) {
            _this.items = data;
            _this.items2 = data;
            self.loading = false;
        }, function (err) {
            _this.msj.showError3('Error', err.error);
            // this.translateService.get('NO_OPERACION').subscribe((value) => { this.msj.showError3('Error',value);  })
        });
    };
    Tipounidad3ListPage.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get('username').then(function (value) {
            _this.username = value;
        });
    };
    Tipounidad3ListPage.prototype.ionViewDidLoad = function () {
        this.pideregistros();
    };
    Tipounidad3ListPage.prototype.loadMore = function (ev) {
        this.gLimit += 50;
        setTimeout(function () { return ev.complete(); }, 1000);
    };
    Tipounidad3ListPage.prototype.deleteRecord = function (item, no) {
        var _this = this;
        var alert = this.alertCtrl.create({ title: 'Esta seguro de realizar esta operación?',
            buttons: [
                { text: 'Si',
                    handler: function () {
                        var recordID = item._id;
                        _this.regService.deleteReg(recordID + '/' + _this.username + '/' + _this.idempresa + '/' + _this.idafiliado, 'tipounidad3s').then(function (data) {
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
    Tipounidad3ListPage.prototype.updateRecord = function (item, no) {
        var _this = this;
        var addModal = this._MODAL.create('Tipounidad3CreatePage', { record: item }, { showBackdrop: true, enableBackdropDismiss: false });
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
    Tipounidad3ListPage.prototype.conferenciaRecord5 = function (item) {
        this.navCtrl.push('Unidadtipocurso3ListPage', { record: item });
    };
    Tipounidad3ListPage.prototype.conferenciaRecord6 = function (item) {
        this.navCtrl.push('Unidadtipogrupo3ListPage', { record: item });
    };
    Tipounidad3ListPage.prototype.conferenciaRecord3 = function (item, opcion) {
        this.navCtrl.push('Unidadidioma3ListPage', { record: item, permisos: this.dapermisos(this.jsonObject2, opcion) });
    };
    Tipounidad3ListPage.prototype.conferenciaRecord2 = function (item) {
        this.navCtrl.push('Unidadedificio3ListPage', { record: item });
    };
    Tipounidad3ListPage.prototype.conferenciaRecord22 = function (item) {
        this.navCtrl.push('Unidadprofesor3ListPage', { record: item });
    };
    Tipounidad3ListPage.prototype.conferenciaRecord50a = function (item) {
        this.navCtrl.push('Unidadperiodo3aListPage', { record: item, tnombre: 'item.ididioma.nombre' + ' ' + 'item.idtipogrupo.nombre',
            tunidad: item.nombre, permiso: null, potros1: null,
            record2: { idtipo: item._id, idnombre: item.nombre, idtipo2: '11', idnombre2: '11', idcodigo2: item.codigo } });
    };
    Tipounidad3ListPage.prototype.conferenciaRecord50 = function (item) {
        this.navCtrl.push('Unidadperiodo4ListPage', { record: item, record2: { idtipo: item._id, idnombre: item.nombre, idtipo2: '11', idnombre2: '11', idcodigo2: item.codigo } });
    };
    Tipounidad3ListPage.prototype.conferenciaRecord23 = function (item) {
        this.navCtrl.push('Unidadjornada3ListPage', { record: item });
    };
    Tipounidad3ListPage.prototype.addRecord = function () {
        var _this = this;
        var addModal = this._MODAL.create('Tipounidad3CreatePage', { record: null }, { showBackdrop: true, enableBackdropDismiss: false });
        addModal.onDidDismiss(function (data) {
            if (data) {
                _this.items = _this.items.concat([data]);
                _this.items2 = _this.items;
            }
        });
        addModal.present();
        //this.navCtrl.push('EmpresaCreatePage');
    };
    Tipounidad3ListPage.prototype.conferenciaRecord = function (item) {
        this.navCtrl.push('Unidadacademica3ListPage', { record: item, permiso: this.dapermisos2(this.jsonObject2, 'CURSOS'), potros1: this.navParams.get("potros1") });
    };
    Tipounidad3ListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-Tipounidad3-list',template:/*ion-inline-start:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\CALUSAC\unidadacademica\tipounidad3-list\tipounidad3-list.html"*/'<ion-header no-border class="opaque">\n    <ion-navbar   no-border-bottom>\n      <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n    <ion-title>\n      Centros Academicos\n    </ion-title>\n\n      <ion-toolbar  class="opaque" >\n          <ion-buttons end>\n\n            <button title="Reportes Control Academico" [hidden]="dapermisos_visible(\'REPORTES_ACADEMICOS\')" (click)="showFilter4()"  icon-only ion-button padding-right>\n              <ion-icon name="albums"></ion-icon>\n            </button>\n              <button  [hidden]="!pconsulta" title="Refresh" (click)="pideregistros()" icon-only ion-button padding-right>\n              <ion-icon name="refresh"></ion-icon>\n            </button>\n            <button [hidden]="!preporte"  (click)="bpivote()" icon-only ion-button padding-right>\n                <ion-icon name="paper" ></ion-icon>\n              </button>\n        </ion-buttons>\n          <ion-searchbar showCancelButton="true"  [hidden]="!pconsulta"  debounce="2000" (ionCancel)="clearSearchg($event)"\n           [(ngModel)]="gSearchQuery" placeholder="{{ \'NO2_REGISTROS\' | translate }}{{items.length}}]">\n          </ion-searchbar>\n      </ion-toolbar>\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content  fullscreen>\n   <ion-list >\n      <ion-item   *ngFor="let item of items | search: gSearchQuery | LimitPipe: gLimit ;let i = index;" text-wrap>\n        <ion-card [hidden]="!pconsulta" >\n            <ion-item text-wrap>\n                <button ion-item [disabled]="!pactualizacion" (click)="updateRecord(item,i)">\n                    <p>Codigo: {{item.codigo}}</p>\n                <h2>Nombre: {{item.nombre}}</h2>\n                <h2>Departamento: {{item.iddepartamento.nombre}}</h2>\n\n                <h2>Abreviatura: {{item.abreviatura}}</h2>\n                <h2>Estado: {{item.estado}}</h2>\n                </button>\n              </ion-item>\n              <ion-row no-padding>\n\n                        <ion-col>\n                          <button [hidden]="!peliminacion"  (click)="deleteRecord(item,i)" ion-button clear small  icon-start>\n                            <ion-icon name=\'md-trash\'></ion-icon>\n                            Eliminar\n                          </button>\n                        </ion-col>\n\n                        <ion-col text-center>\n                          <button  [hidden]="dapermisos_visible(\'IDIOMAS\')" (click)="conferenciaRecord3(item,\'IDIOMAS\')" ion-button clear small  icon-start>\n                            <ion-icon name=\'logo-buffer\'></ion-icon>\n                            Idiomas\n\n                          </button>\n                        </ion-col>\n                        <ion-col text-center>\n                            <button [hidden]="dapermisos_visible(\'TIPO CURSO\')" (click)="conferenciaRecord5(item)" ion-button clear small  icon-start>\n                              <ion-icon name=\'apps\'></ion-icon>\n                              Tipo curso\n\n                            </button>\n                          </ion-col>\n\n                          <ion-col text-center>\n                              <button [hidden]="dapermisos_visible(\'TIPO GRUPO\')" (click)="conferenciaRecord6(item)" ion-button clear small  icon-start>\n                                <ion-icon name=\'bookmarks\'></ion-icon>\n                                Tipo grupo\n\n                              </button>\n                            </ion-col>\n                        <ion-col text-center>\n                          <button [hidden]="dapermisos_visible(\'TIPO EDIFICIOS\')" (click)="conferenciaRecord2(item)" ion-button clear small  icon-start>\n                            <ion-icon name=\'albums\'></ion-icon>\n                            Edificios\n\n                          </button>\n                        </ion-col>\n\n\n                          <ion-col text-center>\n                              <button [hidden]="dapermisos_visible(\'JORNNADAS Y HORARIOS\')" (click)="conferenciaRecord23(item)" ion-button clear small icon-start>\n                                <ion-icon name=\'albums\'></ion-icon>\n                                Jornadas\n\n                              </button>\n                            </ion-col>\n\n\n                        <ion-col text-center>\n                            <button  [hidden]="dapermisos_visible(\'CURSOS\')"  (click)="conferenciaRecord(item)" ion-button clear small  icon-start>\n                              <ion-icon name=\'albums\'></ion-icon>\n                              <p *ngIf=" item.nombre == \'Guatemala (campus)\'" > Horarios </p>\n                              <p *ngIf=" item.nombre != \'Guatemala (campus)\'" > Horarios  </p>\n\n                            </button>\n                          </ion-col>\n\n                          <ion-col text-center>\n                            <button  [hidden]="dapermisos_visible(\'EXA. UBICACION\')"  (click)="conferenciaRecord50(item)" color=\'secundary\' ion-button clear small  icon-start>\n                              <ion-icon name=\'albums\'></ion-icon>\n                              Horarios Exa. Ubicación\n\n                            </button>\n                          </ion-col>\n                          <ion-col text-center>\n                            <button  [hidden]="dapermisos_visible(\'EXA. UBICACION\')"  (click)="conferenciaRecord50a(item)" color=\'secundary\' ion-button clear small  icon-start>\n                              <ion-icon name=\'albums\'></ion-icon>\n                              Horarios Exa. suficiencia\n\n                            </button>\n                          </ion-col>\n                          <ion-col text-center>\n                            <button  [hidden]="dapermisos_visible(\'REPORTES_ACTAS\')"  (click)="showFilter40(item)" color=\'secundary\' ion-button clear small  icon-start>\n                              <ion-icon name=\'albums\'></ion-icon>\n                              Reportes por sede (Control Academico)\n\n                            </button>\n                          </ion-col>\n\n\n                </ion-row>\n\n            </ion-card>\n	  </ion-item>\n   </ion-list>\n   <ion-infinite-scroll (ionInfinite)="loadMore($event)">\n      <ion-infinite-scroll-content></ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n\n    <ion-fab bottom right #fab>\n        <button ion-fab [hidden]="!pcreacion"  (click)="addRecord()"><ion-icon name="add"></ion-icon></button>\n\n    </ion-fab>\n\n\n\n</ion-content>\n'/*ion-inline-end:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\CALUSAC\unidadacademica\tipounidad3-list\tipounidad3-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__ionic_native_in_app_browser__["a" /* InAppBrowser */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_2__providers__["d" /* NotificationProvider */], __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers__["a" /* Auth */]])
    ], Tipounidad3ListPage);
    return Tipounidad3ListPage;
}());

//# sourceMappingURL=tipounidad3-list.js.map

/***/ }),

/***/ 953:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tipounidad3ListPageModule", function() { return Tipounidad3ListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tipounidad3_list__ = __webpack_require__(1393);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pipes_pipes_module__ = __webpack_require__(445);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var Tipounidad3ListPageModule = /** @class */ (function () {
    function Tipounidad3ListPageModule() {
    }
    Tipounidad3ListPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__tipounidad3_list__["a" /* Tipounidad3ListPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__tipounidad3_list__["a" /* Tipounidad3ListPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild(),
                __WEBPACK_IMPORTED_MODULE_4__pipes_pipes_module__["a" /* PipesModule */]
            ],
        })
    ], Tipounidad3ListPageModule);
    return Tipounidad3ListPageModule;
}());

//# sourceMappingURL=tipounidad3-list.module.js.map

/***/ })

});
//# sourceMappingURL=206.js.map