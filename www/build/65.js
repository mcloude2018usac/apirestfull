webpackJsonp([65],{

/***/ 1123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SolicitudessunListPageModule", function() { return SolicitudessunListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__solicitudessun_list__ = __webpack_require__(1579);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pipes_pipes_module__ = __webpack_require__(445);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var SolicitudessunListPageModule = /** @class */ (function () {
    function SolicitudessunListPageModule() {
    }
    SolicitudessunListPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__solicitudessun_list__["a" /* SolicitudessunListPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__solicitudessun_list__["a" /* SolicitudessunListPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild(),
                __WEBPACK_IMPORTED_MODULE_4__pipes_pipes_module__["a" /* PipesModule */]
            ],
        })
    ], SolicitudessunListPageModule);
    return SolicitudessunListPageModule;
}());

//# sourceMappingURL=solicitudessun-list.module.js.map

/***/ }),

/***/ 1579:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SolicitudessunListPage; });
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





var SolicitudessunListPage = /** @class */ (function () {
    //private barcodeScanner:BarcodeScanner,
    function SolicitudessunListPage(actionSheetCtrl, alertCtrl, storage, msj, translateService, navCtrl, _MODAL, navParams, regService) {
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
        this.generated = '';
        this.hasFilter = false;
        this.gLimit = 50;
        this.PageSegmet = 'foods';
        this.idafiliado = 'na';
        this.gSearchQuery = '';
        this.username = "";
        this.excludeTracks = [];
        this.translateService.get('APPX').subscribe(function (value) {
            _this.idempresa = value;
        });
    }
    SolicitudessunListPage.prototype.clearSearchg = function () {
        this.gSearchQuery = '';
    };
    SolicitudessunListPage.prototype.showFilter3 = function () {
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
                    text: 'Crear',
                    handler: function (todo) {
                        if (todo) {
                            _this.regService.getReglibreSext2('1/' + todo.NOV + '/existepcb', 'asignapcbs').then(function (data) {
                                var alert = _this.alertCtrl.create({ title: 'La asignación a eliminar es de ' + data[0].nombre + ', Esta seguro de realizar esta operación?',
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
    SolicitudessunListPage.prototype.showFilter2 = function () {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: ' Creacion de nuevo NOV/ Carnét para poder asignar',
            message: '',
            inputs: [
                {
                    name: 'NOV',
                    placeholder: 'Ingrese NOV/ Carnét'
                },
                {
                    name: 'NOMBRE',
                    placeholder: 'Ingrese Nombre'
                }
            ],
            buttons: [
                {
                    text: 'Cancelar'
                },
                {
                    text: 'Crear',
                    handler: function (todo) {
                        if (todo) {
                            var alert_1 = _this.alertCtrl.create({ title: 'Esta seguro de realizar esta operación? <br> Nombre:' + todo.NOMBRE + ' <br> Nov:' + todo.NOV,
                                buttons: [
                                    { text: 'Si',
                                        handler: function () {
                                            var creat = 'Crea';
                                            var options = {
                                                carnet: todo.NOV,
                                                nombre: todo.NOMBRE,
                                                bitacora: { idempresa: _this.idempresa, idafiliado: '', email: _this.username, permiso: creat, accion: creat + ' creacion de nov o carnet ' + todo.NOV }
                                            };
                                            _this.regService.createRegS2ext('', options, 'estudiantevt').then(function (result) {
                                                _this.msj.showError3('Mensaje', 'Registro creado con exito');
                                            }, function (err) {
                                                _this.msj.showError3('Mensaje', err.error);
                                            });
                                        }
                                    },
                                    {
                                        text: 'No', handler: function () { }
                                    }
                                ]
                            });
                            alert_1.present();
                        }
                    }
                }
            ]
        });
        prompt.present();
    };
    SolicitudessunListPage.prototype.showFilter4 = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Descarga de reportes',
            buttons: [
                {
                    text: 'Tabla de asignaciones Campus',
                    handler: function () {
                        _this.regService.abrelinkinterno('datosfijos/tablaasignacion');
                    }
                },
                {
                    text: 'Tabla de asignaciones Centros',
                    handler: function () {
                        _this.regService.abrelinkinterno('datosfijos/tablaasignacioncentro');
                    }
                },
                {
                    text: 'Tabla info boleta',
                    handler: function () {
                        _this.regService.abrelinkinterno('datosfijos/tablainfoboleta');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    SolicitudessunListPage.prototype.pideregistros = function () {
        var _this = this;
        var self = this;
        self.loading = true;
        this.regService.getReg('todos', 'nuevosalons').then(function (data) {
            _this.items = data;
            _this.items2 = data;
            self.loading = false;
        }, function (err) {
            _this.msj.showError3('Error', err.error);
            // this.translateService.get('NO_OPERACION').subscribe((value) => { this.msj.showError3('Error',value);  })
        });
    };
    SolicitudessunListPage.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get('username').then(function (value) {
            _this.username = value;
        });
    };
    SolicitudessunListPage.prototype.ionViewDidLoad = function () {
        this.pideregistros();
    };
    SolicitudessunListPage.prototype.loadMore = function (ev) {
        this.gLimit += 50;
        setTimeout(function () { return ev.complete(); }, 1000);
    };
    SolicitudessunListPage.prototype.deleteRecord = function (item, no) {
        var _this = this;
        var alert = this.alertCtrl.create({ title: 'Esta seguro de realizar esta operación?',
            buttons: [
                { text: 'Si',
                    handler: function () {
                        var recordID = item._id;
                        _this.regService.deleteReg(recordID + '/' + _this.username + '/' + _this.idempresa + '/' + _this.idafiliado, 'nuevosalons').then(function (data) {
                            _this.items.splice(no, 1);
                            _this.items = _this.items.concat([]);
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
    SolicitudessunListPage.prototype.updateRecord = function (item, no) {
        var _this = this;
        var addModal = this._MODAL.create('SolicitudessunCreatePage', { record: item }, { showBackdrop: true, enableBackdropDismiss: false });
        addModal.onDidDismiss(function (data) {
            if (data) {
                _this.items.splice(no, 1);
                _this.items = _this.items.concat([data]);
            }
        });
        addModal.present();
        //  this.navCtrl.push('EmpresaCreatePage', { record : item });
    };
    SolicitudessunListPage.prototype.addRecord = function () {
        var _this = this;
        var addModal = this._MODAL.create('SolicitudessunCreatePage', { record: null }, { showBackdrop: true, enableBackdropDismiss: false });
        addModal.onDidDismiss(function (data) {
            if (data) {
                _this.items = _this.items.concat([data]);
            }
        });
        addModal.present();
        //this.navCtrl.push('EmpresaCreatePage');
    };
    SolicitudessunListPage.prototype.viewRecord = function (item) {
        // let modal = this._MODAL.create(ViewGalleryPage, { record : item });
        // modal.present();
    };
    SolicitudessunListPage.prototype.showFilter = function () {
        var _this = this;
        var self = this;
        self.loading = true;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Filtrar por estado:',
            buttons: [
                {
                    text: 'Procesado',
                    handler: function () {
                        _this.items = _this.items2;
                        _this.items = _this.items2.filter(function (v) {
                            if (v.estado) {
                                if (v.estado == 'Procesado') {
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
                    text: 'Solicitando',
                    handler: function () {
                        _this.items = _this.items2;
                        _this.items = _this.items2.filter(function (v) {
                            if (v.estado) {
                                self.loading = false;
                                if (v.estado == 'Solicitando') {
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
    SolicitudessunListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-solicitudessun-list',template:/*ion-inline-start:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\SUN\solicitudessun-list\solicitudessun-list.html"*/'<ion-header>\n  <ion-navbar [color]="\'navbarUser\'">\n      <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n    <ion-title>\n      {{ \'SOLICITUDES\' | translate }}\n    </ion-title>\n    <ion-buttons end>\n        <button (click)="showFilter()" icon-only ion-button padding-right>\n            <ion-icon name="funnel"  [style.color]="hasFilter ? \'orange\' : \'inherit\'"></ion-icon>\n          </button>\n        <button (click)="pideregistros()" icon-only ion-button padding-right>\n            <ion-icon name="refresh"></ion-icon>\n          </button>\n          <button title="Crear nuevo OV/ Carné" (click)="showFilter2()"  icon-only ion-button padding-right>\n                <ion-icon name="man"></ion-icon>\n              </button>\n\n              <button  *ngIf="username === \'ambrosioaleman07@gmail.com\' || username === \'mario.morales@mcloude.com\'"  title="Eliminar asignacion" (click)="showFilter3()"  icon-only ion-button padding-right>\n                    <ion-icon name="trash"></ion-icon>\n                  </button>\n<!--\n                  <button title="Generacion de reportes" (click)="showFilter4()"  icon-only ion-button padding-right>\n                    <ion-icon name="albums"></ion-icon>\n                  </button>\n-->\n\n      </ion-buttons>\n  </ion-navbar>\n  <ion-toolbar no-border-top>\n      <ion-searchbar debounce="2000" (ionCancel)="clearSearchg($event)" [(ngModel)]="gSearchQuery" placeholder="{{ \'NO2_REGISTROS\' | translate }}{{items.length}}]">\n        </ion-searchbar>\n    </ion-toolbar>\n\n</ion-header>\n\n<ion-content  class="list-avatar-page" padding>\n\n\n   <ion-list text-wrap>\n\n      <ion-item-sliding    *ngFor="let item of items | search: gSearchQuery | LimitPipe: gLimit ;let i = index;" text-wrap>\n\n         <button ion-item (click)="updateRecord(item,i)">\n            <h2>{{i+1}}. Nombre:<div [innerHtml]="item.nombre"></div>  </h2>\n           <p>Correo:{{item.correo}}</p>\n            <ion-note item-end>{{item.estado}}</ion-note>\n          </button>\n\n\n\n\n    </ion-item-sliding>\n   </ion-list>\n   <ion-infinite-scroll (ionInfinite)="loadMore($event)">\n      <ion-infinite-scroll-content></ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n\n    <ion-fab bottom right #fab>\n        <button ion-fab (click)="addRecord()"><ion-icon name="add"></ion-icon></button>\n\n    </ion-fab>\n\n</ion-content>\n'/*ion-inline-end:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\SUN\solicitudessun-list\solicitudessun-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_2__providers__["d" /* NotificationProvider */], __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers__["a" /* Auth */]])
    ], SolicitudessunListPage);
    return SolicitudessunListPage;
}());

//# sourceMappingURL=solicitudessun-list.js.map

/***/ })

});
//# sourceMappingURL=65.js.map