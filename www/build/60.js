webpackJsonp([60],{

/***/ 1129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TipounidadListPageModule", function() { return TipounidadListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tipounidad_list__ = __webpack_require__(1585);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pipes_pipes_module__ = __webpack_require__(445);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var TipounidadListPageModule = /** @class */ (function () {
    function TipounidadListPageModule() {
    }
    TipounidadListPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__tipounidad_list__["a" /* TipounidadListPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__tipounidad_list__["a" /* TipounidadListPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild(),
                __WEBPACK_IMPORTED_MODULE_4__pipes_pipes_module__["a" /* PipesModule */]
            ],
        })
    ], TipounidadListPageModule);
    return TipounidadListPageModule;
}());

//# sourceMappingURL=tipounidad-list.module.js.map

/***/ }),

/***/ 1585:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TipounidadListPage; });
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






var TipounidadListPage = /** @class */ (function () {
    //private barcodeScanner:BarcodeScanner,
    function TipounidadListPage(iab, actionSheetCtrl, alertCtrl, storage, msj, translateService, navCtrl, _MODAL, navParams, regService) {
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
    }
    TipounidadListPage.prototype.clearSearchg = function () {
        this.gSearchQuery = '';
    };
    TipounidadListPage.prototype.showFilter = function () {
    };
    TipounidadListPage.prototype.showFilter3 = function () {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: ' Eliminar asignación',
            message: 'Ingrese NOV/ carné',
            inputs: [
                {
                    name: 'NOV',
                    placeholder: 'Ingrese NOV/ Carnét'
                }
            ],
            buttons: [
                {
                    text: 'Cancelar'
                },
                {
                    text: 'Eliminar',
                    handler: function (todo) {
                        if (todo) {
                            _this.regService.getReglibreSext2(todo.NOV + '/resultado', 'estudiantepcb').then(function (data) {
                                var alert = _this.alertCtrl.create({ title: 'La asignación a eliminar es de ' + data[0].NOMBRES + ', Esta seguro de realizar esta operación?',
                                    buttons: [
                                        { text: 'Si',
                                            handler: function () {
                                                _this.regService.getReg2b('1/2/' + todo.NOV, 'asignapcbs').then(function (data) {
                                                    //  this.items=data;
                                                    var recordID = data[0]._id;
                                                    _this.regService.deleteReg(recordID + '/' + _this.username + '/' + _this.idempresa + '/' + _this.idafiliado, 'asignapcbs').then(function (data) {
                                                        _this.msj.showError3('Eliminación', 'Registro eliminado con exito');
                                                    }, function (err) {
                                                        _this.msj.showError3('Error', err.error);
                                                    });
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
                            });
                        }
                    }
                }
            ]
        });
        prompt.present();
    };
    TipounidadListPage.prototype.showFilter22 = function () {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: ' Actualizar nombre de NOV/ Carnét ',
            message: '',
            inputs: [
                {
                    name: 'NOV',
                    placeholder: 'Ingrese NOV/ Carnét'
                }
            ],
            buttons: [
                {
                    text: 'Cancelar'
                },
                {
                    text: 'Buscar Resultado',
                    handler: function (todo) {
                        if (todo) {
                            _this.regService.getReglibreSext2(todo.NOV + '/resultado', 'estudiantepcb').then(function (data) {
                                var prompt = _this.alertCtrl.create({
                                    title: 'Actualizar nombre de resultado ',
                                    message: '',
                                    inputs: [
                                        {
                                            name: 'NOMBRE',
                                            placeholder: 'Ingrese nombre a actualizar',
                                            value: data[0].NOMBRES
                                        }
                                    ],
                                    buttons: [
                                        {
                                            text: 'Cancelar'
                                        },
                                        {
                                            text: 'Actualizar',
                                            handler: function (todo2) {
                                                var options = {
                                                    nombre: todo2.NOMBRE,
                                                };
                                                _this.regService.createReg(todo.NOV, options, 'estudiantepcb').then(function (result) {
                                                    _this.msj.showError3('Mensaje', 'Registro actualizado con exito');
                                                }, function (err) {
                                                    _this.msj.showError3('Mensaje', err.error);
                                                });
                                            }
                                        }
                                    ]
                                });
                                prompt.present();
                            }, function (err) { _this.msj.showError3('Resultado', 'Resultado no encontrado.'); });
                        }
                    }
                }
            ]
        });
        prompt.present();
    };
    TipounidadListPage.prototype.showFilter222 = function () {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: ' Actualizar de  NOV ',
            message: '',
            inputs: [
                {
                    name: 'NOV',
                    placeholder: 'Ingrese NOV/ Carnét'
                }
            ],
            buttons: [
                {
                    text: 'Cancelar'
                },
                {
                    text: 'Buscar Resultado',
                    handler: function (todo) {
                        if (todo) {
                            _this.regService.getReglibreSext2(todo.NOV, 'estudiantevt').then(function (data) {
                                var prompt = _this.alertCtrl.create({
                                    title: 'Actualizar nombre de resultado ',
                                    message: '',
                                    inputs: [
                                        {
                                            name: 'NOMBRE',
                                            placeholder: 'Ingrese nombre a actualizar',
                                            value: data[0].nombre
                                        }
                                    ],
                                    buttons: [
                                        {
                                            text: 'Cancelar'
                                        },
                                        {
                                            text: 'Actualizar',
                                            handler: function (todo2) {
                                                var options = {
                                                    nombre: todo2.NOMBRE,
                                                    operacion: 'act'
                                                };
                                                _this.regService.createReg(todo.NOV, options, 'estudiantevt').then(function (result) {
                                                    _this.msj.showError3('Mensaje', 'Registro actualizado con exito');
                                                }, function (err) {
                                                    _this.msj.showError3('Mensaje', err.error);
                                                });
                                            }
                                        }
                                    ]
                                });
                                prompt.present();
                            }, function (err) { _this.msj.showError3('Resultado', 'Resultado no encontrado.'); });
                        }
                    }
                }
            ]
        });
        prompt.present();
    };
    TipounidadListPage.prototype.pideregistros = function () {
        var _this = this;
        var self = this;
        self.loading = true;
        this.regService.getReg('todos', 'tipounidads').then(function (data) {
            _this.items = data;
            _this.items2 = data;
            self.loading = false;
        }, function (err) {
            _this.msj.showError3('Error', err.error);
            // this.translateService.get('NO_OPERACION').subscribe((value) => { this.msj.showError3('Error',value);  })
        });
    };
    TipounidadListPage.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get('username').then(function (value) {
            _this.username = value;
        });
    };
    TipounidadListPage.prototype.ionViewDidLoad = function () {
        this.pideregistros();
    };
    TipounidadListPage.prototype.loadMore = function (ev) {
        this.gLimit += 50;
        setTimeout(function () { return ev.complete(); }, 1000);
    };
    TipounidadListPage.prototype.deleteRecord = function (item, no) {
        var _this = this;
        var alert = this.alertCtrl.create({ title: 'Esta seguro de realizar esta operación?',
            buttons: [
                { text: 'Si',
                    handler: function () {
                        var recordID = item._id;
                        _this.regService.deleteReg(recordID + '/' + _this.username + '/' + _this.idempresa + '/' + _this.idafiliado, 'tipounidads').then(function (data) {
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
    TipounidadListPage.prototype.updateRecord = function (item, no) {
        var _this = this;
        var addModal = this._MODAL.create('TipounidadCreatePage', { record: item }, { showBackdrop: true, enableBackdropDismiss: false });
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
    TipounidadListPage.prototype.addRecord = function () {
        var _this = this;
        var addModal = this._MODAL.create('TipounidadCreatePage', { record: null }, { showBackdrop: true, enableBackdropDismiss: false });
        addModal.onDidDismiss(function (data) {
            if (data) {
                _this.items = _this.items.concat([data]);
                _this.items2 = _this.items;
            }
        });
        addModal.present();
        //this.navCtrl.push('EmpresaCreatePage');
    };
    TipounidadListPage.prototype.conferenciaRecord = function (item) {
        this.navCtrl.push('UnidadacademicaListPage', { record: item });
    };
    TipounidadListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-tipounidad-list',template:/*ion-inline-start:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\USAC\unidadacademica\tipounidad-list\tipounidad-list.html"*/'<ion-header>\n  <ion-navbar [color]="\'navbarColor\'">\n      <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n    <ion-title>\n      Tipo unidad\n    </ion-title>\n    <ion-buttons end>\n\n\n     \n\n            <button  title="Refresh" (click)="pideregistros()" icon-only ion-button padding-right>\n            <ion-icon name="refresh"></ion-icon>\n          </button>\n\n          <button title="Exportar excel,Campus Central" (click)="OnExport()" icon-only ion-button padding-right>\n              <ion-icon name="document"></ion-icon>\n            </button>\n\n            <button title="Exportar excel,Centros" (click)="OnExport3()" icon-only ion-button padding-right>\n                <ion-icon name="document"></ion-icon>\n              </button>\n\n\n              <button title="Actualizar nombre resultado PCB" (click)="showFilter22()"  icon-only ion-button padding-right>\n                <ion-icon name="checkbox"></ion-icon>\n              </button>\n\n              <button title="Actualizar nombre resultado NOV" (click)="showFilter222()"  icon-only ion-button padding-right>\n                <ion-icon name="apps"></ion-icon>\n              </button>\n            <!--  <button title="Reporte de cubos de informaciòn" (click)="OnExport4()" icon-only ion-button padding-right>\n                <ion-icon name="apps"></ion-icon>\n              </button>\n              -->\n      </ion-buttons>\n  </ion-navbar>\n  <ion-toolbar no-border-top>\n      <ion-searchbar debounce="2000" (ionCancel)="clearSearchg($event)" [(ngModel)]="gSearchQuery" placeholder="{{ \'NO2_REGISTROS\' | translate }}{{items.length}}]">\n      </ion-searchbar>\n  </ion-toolbar>\n</ion-header>\n\n\n\n<ion-content  class="page-eventos-list" padding>\n   <ion-list >\n      <ion-item   *ngFor="let item of items | search: gSearchQuery | LimitPipe: gLimit ;let i = index;" text-wrap>\n        <ion-card >\n            <ion-item text-wrap>\n                <button ion-item (click)="updateRecord(item,i)">\n                    <p>Codigo: {{item.codigo}}</p>\n                <h2>Nombre: {{item.nombre}}</h2>\n                <h2>Departamento: {{item.iddepartamento.nombre}}</h2>\n                <h2>Abreviatura: {{item.abreviatura}}</h2>\n                <h2>Estado: {{item.estado}}</h2>\n                <h2>Aplica a este periodo: {{item.estado2}}</h2>\n                </button>\n              </ion-item>\n              <ion-row no-padding>\n                  <ion-col>\n                      <button (click)="OnExport2(item)" ion-button clear small  icon-start>\n                        <ion-icon name=\'document\'></ion-icon>\n                        Exportar salones\n                      </button>\n                    </ion-col>\n\n                        <ion-col>\n                          <button (click)="deleteRecord(item,i)" ion-button clear small  icon-start>\n                            <ion-icon name=\'md-trash\'></ion-icon>\n                            Eliminar\n                          </button>\n                        </ion-col>\n\n\n                        <ion-col text-center>\n                            <button (click)="conferenciaRecord(item)" ion-button clear small color="secondary" icon-start>\n                              <ion-icon name=\'albums\'></ion-icon>\n                              <p *ngIf=" item.nombre == \'Guatemala (campus)\'" > Unidades academicas  </p>\n                              <p *ngIf=" item.nombre != \'Guatemala (campus)\'" > Carreras  </p>\n\n                            </button>\n                          </ion-col>\n\n\n                </ion-row>\n\n            </ion-card>\n	  </ion-item>\n   </ion-list>\n   <ion-infinite-scroll (ionInfinite)="loadMore($event)">\n      <ion-infinite-scroll-content></ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n\n    <ion-fab bottom right #fab>\n        <button ion-fab (click)="addRecord()"><ion-icon name="add"></ion-icon></button>\n\n    </ion-fab>\n\n\n\n</ion-content>\n'/*ion-inline-end:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\USAC\unidadacademica\tipounidad-list\tipounidad-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__ionic_native_in_app_browser__["a" /* InAppBrowser */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_2__providers__["d" /* NotificationProvider */], __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers__["a" /* Auth */]])
    ], TipounidadListPage);
    return TipounidadListPage;
}());

//# sourceMappingURL=tipounidad-list.js.map

/***/ })

});
//# sourceMappingURL=60.js.map