webpackJsonp([70],{

/***/ 1122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsignamanualpcbListPageModule", function() { return AsignamanualpcbListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__asignamanualpcb_list__ = __webpack_require__(1578);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pipes_pipes_module__ = __webpack_require__(445);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AsignamanualpcbListPageModule = /** @class */ (function () {
    function AsignamanualpcbListPageModule() {
    }
    AsignamanualpcbListPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__asignamanualpcb_list__["a" /* AsignamanualpcbListPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__asignamanualpcb_list__["a" /* AsignamanualpcbListPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild(),
                __WEBPACK_IMPORTED_MODULE_4__pipes_pipes_module__["a" /* PipesModule */]
            ],
        })
    ], AsignamanualpcbListPageModule);
    return AsignamanualpcbListPageModule;
}());

//# sourceMappingURL=asignamanualpcb-list.module.js.map

/***/ }),

/***/ 1578:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AsignamanualpcbListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_pdf_pdfx__ = __webpack_require__(447);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_barcode_scanner__ = __webpack_require__(449);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AsignamanualpcbListPage = /** @class */ (function () {
    //private barcodeScanner:BarcodeScanner,
    function AsignamanualpcbListPage(Pdfx, alertCtrl, storage, msj, translateService, navCtrl, _MODAL, navParams, regService, barcodeScanner) {
        var _this = this;
        this.Pdfx = Pdfx;
        this.alertCtrl = alertCtrl;
        this.storage = storage;
        this.msj = msj;
        this.translateService = translateService;
        this.navCtrl = navCtrl;
        this._MODAL = _MODAL;
        this.navParams = navParams;
        this.regService = regService;
        this.barcodeScanner = barcodeScanner;
        this.loading = true;
        this.items = [];
        this.items2 = [];
        this.tiposus = [];
        this.siprueba = true;
        this.generated = '';
        this.isDisablednit = true;
        this.idafiliado = 'na';
        this.gLimit = 50;
        this.PageSegmet = 'foods';
        this.gSearchQuery = '';
        this.username = "";
        this.excludeTracks = [];
        this.translateService.get('APPX').subscribe(function (value) {
            _this.idempresa = value;
        });
    }
    AsignamanualpcbListPage.prototype.clearSearchg = function () {
        this.gSearchQuery = '';
    };
    AsignamanualpcbListPage.prototype.verqr = function () {
        var _this = this;
        this.options = {
            prompt: "Esperando codigo...",
            preferFrontCamera: false,
            showFlipCameraButton: true,
            showTorchButton: true
        };
        this.barcodeScanner.scan(this.options).then(function (barcodeData) {
            var codigo = barcodeData.text;
            var aar = codigo.split("=");
            if (codigo != '') {
                // aar[2]
                //this.msj.showError3('Error',aar[2]);
                var aa = aar[2];
                if (Number(aa) > 0) {
                    _this.regService.getRegS2(aa, 'estudiantepcb').then(function (data) {
                        _this.Pdfx.dapcb(aa, 'si', data);
                    }, function (err) {
                        _this.msj.showError3('Resultado', 'Resultado no encontrado.');
                    });
                    //  this.regService.abrelinkinterno3('/?key=resultadopcb&key2='+aa   ,'_blank', '',1);
                }
                else {
                    _this.regService.getReg(aa, 'asignaestudiantes').then(function (data) {
                        //  this.items=data
                        //    this.Pdfx.daasigna(aa,'si',data,data[0].no_orientacion,'','')   
                    }, function (err) {
                        _this.msj.showError3('Resultado', 'Resultado no encontrado.');
                    });
                    //     this.regService.abrelinkinterno3('/?key=asignacionpcb&key2='+aa    ,'_blank', '',1);
                }
            }
        }, function (err) {
            _this.msj.showError3('Error', 'ERRRO en lectura de codigo');
        });
    };
    AsignamanualpcbListPage.prototype.showFilter = function () {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: ' Ingrese NOV',
            message: ' NOV',
            inputs: [
                {
                    name: 'NOV'
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
                            _this.regService.getReg2b('1/2/' + todo.NOV, 'asignapcbs').then(function (data) {
                                _this.items = data;
                            }, function (err) {
                                _this.msj.showError3('Error', err.error);
                            });
                            console.log(todo);
                        }
                    }
                }
            ]
        });
        prompt.present();
    };
    AsignamanualpcbListPage.prototype.pideregistros2 = function () {
        var _this = this;
        this.storage.get('tiposus').then(function (value) {
            _this.tiposus = value.split(',');
            _this.nov = _this.tiposus[5];
            _this.rol = _this.tiposus[6];
            if (_this.rol == 'user') {
                _this.isDisablednit = true;
            }
            else {
                _this.isDisablednit = false;
            }
            if (_this.tiposus[5] == '') {
            }
            else {
                _this.pideregistros('1/2/' + value);
            }
        });
    };
    AsignamanualpcbListPage.prototype.pideregistros = function (op) {
        var _this = this;
        var self = this;
        self.loading = true;
        this.regService.getReg(op, 'asignapcbs').then(function (data) {
            _this.items = data;
            self.loading = false;
        }, function (err) {
            _this.msj.showError3('Error', err.error);
            // this.translateService.get('NO_OPERACION').subscribe((value) => { this.msj.showError3('Error',value);  })  
        });
    };
    AsignamanualpcbListPage.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get('username').then(function (value) {
            _this.username = value;
        });
        this.storage.get('tiposus').then(function (value) {
            _this.tiposus = value.split(',');
            _this.nov = _this.tiposus[5];
            _this.rol = _this.tiposus[6];
            if (_this.rol == 'user') {
                _this.isDisablednit = true;
            }
            else {
                _this.isDisablednit = false;
            }
            if (_this.tiposus[5] == '') {
                if (_this.username == 'ambrosioaleman07@gmail.com' || _this.username == 'jggm.meph@gmail.com') {
                    _this.siprueba = false;
                    if (_this.nov != '') {
                        _this.pideregistros('1/2/' + _this.nov);
                    }
                }
            }
            else {
                if (_this.username == 'ambrosioaleman07@gmail.com' || _this.username == 'jggm.meph@gmail.com') {
                    _this.siprueba = false;
                    if (_this.nov != '') {
                        _this.pideregistros('1/2/' + _this.nov);
                    }
                }
                else {
                    if (_this.siprueba == false) {
                        if (_this.nov != '') {
                            _this.pideregistros('1/2/' + _this.nov);
                        }
                    }
                }
            }
        });
    };
    AsignamanualpcbListPage.prototype.ionViewDidLoad = function () {
    };
    AsignamanualpcbListPage.prototype.loadMore = function (ev) {
        this.gLimit += 50;
        setTimeout(function () { return ev.complete(); }, 1000);
    };
    AsignamanualpcbListPage.prototype.deleteRecord2 = function (item, no) {
        var _this = this;
        var alert = this.alertCtrl.create({ title: 'Esta seguro de realizar esta operación?',
            buttons: [
                { text: 'Si',
                    handler: function () {
                        var recordID = item._id;
                        _this.regService.deleteReg(recordID + '/' + _this.username + '/' + _this.idempresa + '/' + _this.idafiliado, 'asignapcbs').then(function (data) {
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
    AsignamanualpcbListPage.prototype.imprime = function (item, no) {
        var _this = this;
        this.regService.getReg(item._id, 'asignaestudiantes').then(function (data) {
            if (item.tipoasignacion == 'enlinea') {
                _this.Pdfx.daasigna(item._id, 'si', data, item.no_orientacion, 'UNIDAD ACADÉMICA: ' + item.idunidadacademica.nombre, 'UBICACIÓN: ' + item.idtipounidad.nombre, item.fechaini);
            }
            else {
                _this.Pdfx.daasigna(item._id, 'si', data, item.no_orientacion, 'ESTUDIARA EN: ' + item.idtipounidad2.nombre + ' -> ' + item.idunidadacademica2.nombre, 'REALIZARÁ EL EXÁMEN EN:' + item.idtipounidad.nombre, item.fechaini);
            }
        }, function (err) {
            _this.msj.showError3('Resultado', 'Resultado no encontrado.');
        });
    };
    AsignamanualpcbListPage.prototype.deleteRecord = function (item, no) {
        var _this = this;
        var alert = this.alertCtrl.create({ title: 'Esta seguro de realizar esta operación?',
            buttons: [
                { text: 'Si',
                    handler: function () {
                        var options = {
                            nombre: 'Solicitud de eliminacion de asignación Unidad academica: ' + item.idunidadacademica.nombre + '  periodo: ' + item.idperiodo.nombre + ' <br>  NOMBRE: ' + item.nombre + '  NOV: ' + item.no_orientacion,
                            estado: 'Solicitando',
                            correo: _this.username,
                            bitacora: { idempresa: _this.idempresa, idafiliado: '', email: _this.username, permiso: 'Crea', accion: ' Solicitud de eliminacion nuevo salon ' }
                        };
                        if (options) {
                            _this.regService.createReg('', options, 'nuevosalons').then(function (result) {
                                _this.msj.showError3('Error', 'Solicitud enviada a administrador con exito, revise mas tarde si ya fue eliminada la asignación');
                            }, function (err) {
                                _this.msj.showError3('Error', err.error);
                            });
                        }
                    }
                },
                {
                    text: 'No', handler: function () { }
                }
            ]
        });
        alert.present();
    };
    AsignamanualpcbListPage.prototype.updateRecord = function (item, no) {
        var _this = this;
        var addModal = this._MODAL.create('AsignamanualpcbCreatePage', { record: item }, { showBackdrop: true, enableBackdropDismiss: false });
        addModal.onDidDismiss(function (data) {
            if (data) {
                _this.items.splice(no, 1);
                _this.items = _this.items.concat([data]);
            }
        });
        addModal.present();
        //  this.navCtrl.push('EmpresaCreatePage', { record : item });
    };
    AsignamanualpcbListPage.prototype.detalleRecord = function (item) {
        this.navCtrl.push('DcatalogoListPage', { record: item });
    };
    AsignamanualpcbListPage.prototype.addRecord = function () {
        var _this = this;
        var addModal = this._MODAL.create('AsignamanualpcbCreatePage', { record: null }, { showBackdrop: true, enableBackdropDismiss: false });
        addModal.onDidDismiss(function (data) {
            if (data) {
                _this.items = _this.items.concat([data]);
            }
        });
        addModal.present();
        //this.navCtrl.push('EmpresaCreatePage');
    };
    AsignamanualpcbListPage.prototype.viewRecord = function (item) {
        // let modal = this._MODAL.create(ViewGalleryPage, { record : item });
        // modal.present();
    };
    AsignamanualpcbListPage.prototype.verasig = function (item, op) {
        var addModal = this._MODAL.create('AsignacionpcbViewPage', { record: { idasigna: item._id } }, { showBackdrop: true, enableBackdropDismiss: false });
        addModal.onDidDismiss(function (data) {
        });
        addModal.present();
    };
    AsignamanualpcbListPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    AsignamanualpcbListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-asignamanualpcb-list',template:/*ion-inline-start:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\SUN\asignamanualpcb-list\asignamanualpcb-list.html"*/'<ion-header>\n    <ion-navbar [color]="\'navbarColor\'">\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>      \n      <ion-title>\n       Asignación manual\n      </ion-title>\n  \n      <ion-buttons end>\n          <button [hidden]="(isDisablednit)" (click)="showFilter()" icon-only ion-button padding-right>\n              <ion-icon name="funnel"></ion-icon>\n            </button>\n\n            <button [hidden]="(isDisablednit)" (click)="verqr()" icon-only ion-button padding-right>\n                <ion-icon name="md-barcode"></ion-icon>\n              </button>\n            \n             <button  [hidden]="(isDisablednit)" (click)="pideregistros2()" icon-only ion-button padding-right>\n              <ion-icon name="refresh"></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n   \n  \n  </ion-header>\n    \n  <ion-content  class="list-avatar-page" padding>\n     \n                 \n     <ion-list >   \n      <ion-item text-wrap>\n        <ion-icon name="at" item-start></ion-icon>\n        Pcb - “Cuarta fecha de inscripción de pruebas de conocimientos básicos" <p> Hora de apertura 14/01/2020 8:00 horas <p>Hora de cierre 16/01/2020 23:55 horas”.\n        <ion-badge item-end>Usacenlinea</ion-badge>\n      </ion-item>\n\n                \n\n                  <ion-item text-center>\n                      <img src="../assets/img/logoit.jpg" />\n                    </ion-item>\n      \n        <ion-item    *ngFor="let item of items  | LimitPipe: gLimit ;let i = index;" text-wrap>\n            <ion-card >\n                <ion-row>\n                    <ion-col  style="border:none;background: rgb(212, 224, 250);"  text-right>\n                            No: {{i+1}}\n                    </ion-col>       \n                    <ion-item text-wrap>\n                      <button ion-item  >\n                               \n                          <h2 *ngIf="item.tipoasignacion== \'manual\'">Realizará el exámen en: {{item.idtipounidad.nombre}} </h2>\n                          <h2  *ngIf="item.tipoasignacion== \'manual\'" >Estuadiara en :  {{item.idtipounidad2.nombre}}  -> {{item.idunidadacademica2.nombre}} </h2>\n                  \n                          <h2 *ngIf="item.tipoasignacion== \'enlinea\'">Ubicación: {{item.idtipounidad.nombre}} </h2>\n                          <h2  *ngIf="item.tipoasignacion== \'enlinea\'" >Unidad academica: {{item.idunidadacademica.nombre}} </h2>\n \n                                <h2>NOV: {{item.no_orientacion}} </h2>\n                                <h2>Nombre: {{item.nombre}} </h2>\n                             \n                                <h2>Fecha: {{item.date  | date : \'dd/MM/yyyy\'  }} </h2>\n                      </button>\n                    </ion-item>\n                  </ion-row>\n                 \n                    <ion-row no-padding>\n                            <ion-col>\n                                <button  (click)="verasig(item,1)" title="Obtener información de los cursos asignados"  \n                                ion-button clear small  icon-start>\n                                 <ion-icon name=\'checkbox\'></ion-icon>\n                                 Visualizar cursos asignados\n                               </button>\n                            </ion-col>\n    \n                            <ion-col>   \n                                    <button (click)="tomaqrpage(item)" ion-button clear small  icon-start>\n                                      <ion-icon name=\'md-barcode\'></ion-icon>\n                                      QR\n                                    </button>\n                            </ion-col>\n                           \n                            <ion-col text-center>\n                                <ion-col>\n                                    <button  ion-button  (click)="imprime(item,i)" >\n                                        Generar Constancia\n                                      </button>\n                                  </ion-col>\n                     \n                              </ion-col>\n    \n                        \n                     \n                    </ion-row>\n                 \n                </ion-card>\n\n                \n             \n   \n               \n             \n  \n    \n      </ion-item>\n     </ion-list>\n     <ion-infinite-scroll (ionInfinite)="loadMore($event)">\n        <ion-infinite-scroll-content></ion-infinite-scroll-content>\n      </ion-infinite-scroll>\n  \n      <ion-fab *ngIf="siprueba == false" bottom right #fab >\n          <button ion-fab (click)="addRecord()"><ion-icon name="add"></ion-icon></button>\n          \n      </ion-fab>\n  \n  </ion-content>'/*ion-inline-end:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\SUN\asignamanualpcb-list\asignamanualpcb-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__providers_pdf_pdfx__["a" /* pdfx */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_2__providers__["d" /* NotificationProvider */], __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers__["a" /* Auth */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_barcode_scanner__["a" /* BarcodeScanner */]])
    ], AsignamanualpcbListPage);
    return AsignamanualpcbListPage;
}());

//# sourceMappingURL=asignamanualpcb-list.js.map

/***/ })

});
//# sourceMappingURL=70.js.map