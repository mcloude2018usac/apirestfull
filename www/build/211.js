webpackJsonp([211],{

/***/ 1374:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SolprestamoOpePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_pdf_pdfx__ = __webpack_require__(447);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_img_viewer__ = __webpack_require__(450);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SolprestamoOpePage = /** @class */ (function () {
    //private barcodeScanner:BarcodeScanner,
    function SolprestamoOpePage(imageViewerCtrl, loadingCtrl, Pdfx, alertCtrl, storage, msj, translateService, navCtrl, _MODAL, navParams, regService) {
        var _this = this;
        this.loadingCtrl = loadingCtrl;
        this.Pdfx = Pdfx;
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
        this.siprueba = true;
        this.generated = '';
        this.idafiliado = 'na';
        this.isDisablednit = true;
        this.gLimit = 50;
        this.PageSegmet = 'foods';
        this.gSearchQuery = '';
        this.username = "";
        this.excludeTracks = [];
        this._imageViewerCtrl = imageViewerCtrl;
        this.translateService.get('APPX').subscribe(function (value) {
            _this.idempresa = value;
        });
    }
    SolprestamoOpePage.prototype.presentImage = function (myImage) {
        var imageViewer = this._imageViewerCtrl.create(myImage);
        imageViewer.present();
    };
    SolprestamoOpePage.prototype.clearSearchg = function () {
        this.gSearchQuery = '';
    };
    SolprestamoOpePage.prototype.showFilter2 = function () {
        var _this = this;
        var self = this;
        self.loading = true;
        var select = {
            title: 'Seleccione opción',
            message: 'Autorización', inputs: [],
            buttons: [{ text: 'Cancelar' }, { text: 'Buscar', handler: function (todo) {
                        //buscamos
                        //todo
                        var opciont = todo;
                        //  this.pideregistros('1/'+todo+'/todosautorizaestado');
                        if (opciont == 'todosautoriza') {
                            _this.regService.displayPreloader('Espere un momento...');
                            _this.regService.getReg2b('Solicitando préstamo/' + _this.username + '/todosautoriza', 'asignacalusacs').then(function (data) {
                                _this.regService.hidePreloader();
                                _this.pet = "Solicitando préstamo";
                                _this.items = data;
                                _this.items2 = data;
                            }, function (err) {
                                _this.regService.hidePreloader();
                                _this.msj.showError3('Error', err.error);
                            });
                        }
                        else {
                            var prompt_1 = _this.alertCtrl.create({
                                title: ' Ingrese identificador CALUSAC',
                                message: 'Carne USAC/ Carne CALUSAC/  CUI/ No pasaporte/ correo /telefono ',
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
                                            if (todo.NOV !== '') {
                                                if (todo) {
                                                    _this.regService.displayPreloader('Espere un momento...');
                                                    _this.regService.getReg2b(' 1/' + todo.NOV + '/todosautorizapago', 'asignacalusacs').then(function (data) {
                                                        _this.regService.hidePreloader();
                                                        _this.items = data;
                                                        _this.items2 = data;
                                                    }, function (err) {
                                                        _this.regService.hidePreloader();
                                                        _this.msj.showError3('Error', err.error);
                                                    });
                                                }
                                            }
                                        }
                                    }
                                ]
                            });
                            prompt_1.present();
                        }
                    } }]
        };
        select.inputs.push({ name: 'myInput', type: 'radio', label: 'Autorizaciones operador', value: 'todosautoriza' });
        select.inputs.push({ name: 'myInput', type: 'radio', label: 'Autoriza ordenes de pago', value: 'todosautorizapago' });
        var newAlert = this.alertCtrl.create(select);
        newAlert.present();
    };
    SolprestamoOpePage.prototype.showFilter = function () {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: ' Ingrese identificador CALUSAC',
            message: 'Carne USAC/ Carne CALUSAC/  CUI/ No pasaporte',
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
                            _this.regService.getReg2b('1/2/' + todo.NOV, 'asignacalusacs').then(function (data) {
                                _this.items = data;
                                _this.items2 = data;
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
    SolprestamoOpePage.prototype.busca = function (op) {
        var _this = this;
        this.estadoant = op;
        this.regService.displayPreloader('Espere un momento...');
        this.regService.getReg2b('autoriza' + '/' + this.username + '/' + op, 'solprestamos').then(function (data) {
            _this.regService.hidePreloader();
            _this.items = data;
            _this.items2 = data;
        }, function (err) {
            _this.regService.hidePreloader();
            _this.msj.showError3('Error', err.error);
        });
    };
    SolprestamoOpePage.prototype.pideregistros = function () {
        var _this = this;
        this.regService.displayPreloader('Espere un momento...');
        this.regService.getReg2b('autoriza' + '/' + this.username + '/Solicitando préstamo', 'asignacalusacs').then(function (data) {
            _this.regService.hidePreloader();
            _this.pet = "Solicitando préstamo";
            _this.items = data;
            _this.items2 = data;
        }, function (err) {
            _this.regService.hidePreloader();
            _this.msj.showError3('Error', err.error);
        });
    };
    SolprestamoOpePage.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get('username').then(function (value) {
            _this.username = value;
        });
        this.storage.get('tiposus').then(function (value) {
            _this.tiposus = value.split(',');
            _this.cuitt = _this.tiposus[2];
            _this.nov = _this.tiposus[5];
            _this.rol = _this.tiposus[6];
            if (_this.rol == 'user') {
                _this.isDisablednit = true;
            }
            else {
                _this.isDisablednit = false;
                _this.regService.displayPreloader('Espere un momento...');
                _this.regService.getReg2b('autoriza' + '/' + _this.username + '/Solicitando préstamo', 'solprestamos').then(function (data) {
                    _this.regService.hidePreloader();
                    _this.pet = "Solicitando préstamo";
                    _this.items = data;
                    _this.items2 = data;
                }, function (err) {
                    _this.regService.hidePreloader();
                    _this.msj.showError3('Error', err.error);
                });
            }
        });
    };
    SolprestamoOpePage.prototype.ionViewDidLoad = function () {
    };
    SolprestamoOpePage.prototype.loadMore = function (ev) {
        this.gLimit += 50;
        setTimeout(function () { return ev.complete(); }, 1000);
    };
    SolprestamoOpePage.prototype.deleteRecord2 = function (item, no) {
        var _this = this;
        var alert = this.alertCtrl.create({ title: 'Esta seguro de realizar esta operación?',
            buttons: [
                { text: 'Si',
                    handler: function () {
                        var recordID = item._id;
                        _this.regService.deleteReg(recordID + '/' + _this.username + '/' + _this.idempresa + '/' + _this.idafiliado, 'asignacalusacs').then(function (data) {
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
    SolprestamoOpePage.prototype.imprime2 = function (item, no) {
        var _this = this;
        var addModal = this._MODAL.create('Asignacioncalusac3CreatePage', { record: null, tipo: item.tipoa, datax: item, op: item.tipoa }, { showBackdrop: true, enableBackdropDismiss: false });
        addModal.onDidDismiss(function (data) {
            if (data) {
                _this.items = [];
            }
        });
        addModal.present();
    };
    SolprestamoOpePage.prototype.imprime = function (item, no) {
        var _this = this;
        var addModal = this._MODAL.create('SolprestamoOpe2Page', { record: item }, { showBackdrop: true, enableBackdropDismiss: false, cssClass: "modal-fullscreen" });
        addModal.onDidDismiss(function (data) {
            _this.busca('Solicitando préstamo');
        });
        addModal.present();
        // this.navCtrl.push('Asignacioncalusac2autPage', { record : item });
    };
    SolprestamoOpePage.prototype.asigna2 = function (item, no) {
        //  this.Pdfx.daordenpago2('','',item)
    };
    SolprestamoOpePage.prototype.asigna = function (item, no) {
        var _this = this;
        //'Generar Asignación'
        var ee = 'Pendiente de pago';
        if (item.estadopago == ee) {
            var options = {
                bitacora: { idempresa: this.idempresa, idafiliado: '', email: this.username, permiso: 'creat', accion: 'Genera asignación calusac' }
            };
            var loading = this.loadingCtrl.create({
                spinner: 'bubbles',
                content: "Espere un momento,  Realizando  Operación ......"
            });
            loading.present();
            loading.dismiss();
            this.regService.createReg2b(item._id, options, 'asignacalusacs').then(function (result) {
                // loading.dismiss();
                _this.msj.showError3('Mensaje', 'Asignación realizada con exito');
            }, function (err) {
                //loading.dismiss();
                _this.msj.showError3('Mensaje', err.error);
            });
        }
        else {
            this.msj.showError3('Error', 'No se ha cancelado la boleta de pago');
        }
    };
    SolprestamoOpePage.prototype.detalleRecord = function (item) {
        this.navCtrl.push('DcatalogoListPage', { record: item });
    };
    SolprestamoOpePage.prototype.addRecord = function (op) {
        var _this = this;
        if (op == 'Estudiante') {
            var prompt_2 = this.alertCtrl.create({
                title: ' Validando información',
                message: ' Ingresa CARNE y CUI registrado en la plataforma, para poder validar información:',
                inputs: [
                    {
                        name: 'carne',
                        placeholder: 'Ingrese CARNE registrado',
                        value: '9419254' //this.nov
                    },
                    {
                        name: 'cui',
                        placeholder: 'Ingrese CUI registrado',
                        value: '2638396800101' //this.cuitt
                    }
                ],
                buttons: [
                    {
                        text: 'Cancelar'
                    },
                    {
                        text: 'Aceptar',
                        handler: function (todo) {
                            if (todo) {
                                if (todo.carne == '' || todo.cui == '') {
                                    _this.msj.showError3('Advertencia', 'Ingrese un CARNE o CUI valido');
                                    return;
                                }
                                var loading_1 = _this.loadingCtrl.create({
                                    spinner: 'bubbles',
                                    content: "Procesando información..."
                                });
                                loading_1.present();
                                _this.regService.getReg2b('registroest/' + todo.carne + '/CARNE', 'datosfijos').then(function (data) {
                                    loading_1.dismiss();
                                    if (data[0].cui == todo.cui) {
                                        var addModal = _this._MODAL.create('AsignacioncalusacCreatePage', { record: null, tipo: op, datax: data, op: op }, { showBackdrop: true, enableBackdropDismiss: false });
                                        addModal.onDidDismiss(function (data) {
                                            if (data) {
                                            }
                                        });
                                        addModal.present();
                                    }
                                    else {
                                        _this.msj.showError3('Advertencia', 'CUI y CARNET no estan relacionados en registro y personal');
                                    }
                                }, function (err) {
                                    _this.msj.showError3('Advertencia', err.error);
                                    loading_1.dismiss();
                                });
                            }
                        }
                    }
                ]
            });
            prompt_2.present();
        }
        //this.navCtrl.push('EmpresaCreatePage');
    };
    SolprestamoOpePage.prototype.verasig = function (item, op) {
        var addModal = this._MODAL.create('AsignacioncalusacViewPage', { record: { idasigna: item._id } }, { showBackdrop: true, enableBackdropDismiss: false });
        addModal.onDidDismiss(function (data) {
        });
        addModal.present();
    };
    SolprestamoOpePage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    SolprestamoOpePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-solprestamo-ope',template:/*ion-inline-start:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\CALUSAC\solprestamo-ope\solprestamo-ope.html"*/'<ion-header no-border class="opaque">\n  <ion-navbar hideBackButton="true" no-border-bottom>\n\n      <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n\n    <ion-title>\n     Autorización para Préstamos\n    </ion-title>\n\n    <ion-buttons end>\n\n\n      <button  [hidden]="(isDisablednit)" (click)="pideregistros()" icon-only ion-button padding-right>\n        <ion-icon name="refresh"></ion-icon>\n      </button>\n\n\n\n      </ion-buttons>\n  </ion-navbar>\n  <ion-toolbar no-border-top>\n    <ion-searchbar debounce="2000" (ionCancel)="clearSearchg($event)" [(ngModel)]="gSearchQuery" placeholder="{{ \'NO2_REGISTROS\' | translate }}{{items.length}}]">\n    </ion-searchbar>\n    <ion-segment  color="secundary" [(ngModel)]="pet">\n        <ion-segment-button value="Solicitando préstamo" color="red"  (ionSelect)="busca(\'Solicitando préstamo\')">\n         Nuevos\n        </ion-segment-button>\n        <ion-segment-button value="EN PROCESO" (ionSelect)="busca(\'EN PROCESO\')">\n          En Proceso (objetadas)\n        </ion-segment-button>\n        <ion-segment-button value="ACTUALIZADO" (ionSelect)="busca(\'ACTUALIZADAS\')">\n          Objetadas Actualizadas\n        </ion-segment-button>\n        <ion-segment-button value="AUTORIZADAS" (ionSelect)="busca(\'AUTORIZADO\')">\n          AUTORIZADO\n        </ion-segment-button>\n      </ion-segment>\n</ion-toolbar>\n\n\n</ion-header>\n\n<ion-content  fullscreen>\n\n\n   <ion-list >\n\n\n\n\n\n      <ion-item    *ngFor="let item of items   | search: gSearchQuery | LimitPipe: gLimit ;let i = index;" text-wrap>\n          <ion-card >\n              <ion-row>\n                  <ion-col  text-right>\n                          No: {{i+1}}\n                  </ion-col>\n\n\n                  <ion-item text-wrap>\n\n                    <button ion-item  >\n                      <h2> Nombre: {{item.nombre}} </h2>\n                      <p> Cui: {{item.cui}} </p>\n                      <p> Tipo de préstamo: {{item.tipo}} </p>\n                      <p> Monto: {{item.monto}} </p>\n                      <p> Plazo: {{item.plazo}} </p>\n                      <p> Interes: {{item.interes}} </p>\n\n\n\n                      <h1>Estado: {{item.estado}} </h1>\n\n\n                    </button>\n\n                  </ion-item>\n                </ion-row>\n\n                  <ion-row no-padding>\n\n\n\n\n                          <ion-col text-center>\n                              <ion-col>\n                                  <button *ngIf="(item.estado !== \'EN PROCESO\') && (item.estado !== \'AUTORIZADO\')"  ion-button  (click)="imprime(item,i)" >      Validar Solicitud\n                                    </button>\n\n                                </ion-col>\n\n                            </ion-col>\n\n\n\n                  </ion-row>\n\n              </ion-card>\n\n\n\n\n\n\n\n\n    </ion-item>\n   </ion-list>\n   <ion-infinite-scroll (ionInfinite)="loadMore($event)">\n      <ion-infinite-scroll-content></ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n\n\n</ion-content>\n'/*ion-inline-end:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\CALUSAC\solprestamo-ope\solprestamo-ope.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6_ionic_img_viewer__["a" /* ImageViewerController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_5__providers_pdf_pdfx__["a" /* pdfx */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_2__providers__["d" /* NotificationProvider */], __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers__["a" /* Auth */]])
    ], SolprestamoOpePage);
    return SolprestamoOpePage;
}());

//# sourceMappingURL=solprestamo-ope.js.map

/***/ }),

/***/ 934:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SolprestamoOpePageModule", function() { return SolprestamoOpePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__solprestamo_ope__ = __webpack_require__(1374);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pipes_pipes_module__ = __webpack_require__(445);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var SolprestamoOpePageModule = /** @class */ (function () {
    function SolprestamoOpePageModule() {
    }
    SolprestamoOpePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__solprestamo_ope__["a" /* SolprestamoOpePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__solprestamo_ope__["a" /* SolprestamoOpePage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild(),
                __WEBPACK_IMPORTED_MODULE_4__pipes_pipes_module__["a" /* PipesModule */]
            ],
        })
    ], SolprestamoOpePageModule);
    return SolprestamoOpePageModule;
}());

//# sourceMappingURL=solprestamo-ope.module.js.map

/***/ })

});
//# sourceMappingURL=211.js.map