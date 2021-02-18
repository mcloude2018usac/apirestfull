webpackJsonp([235],{

/***/ 1371:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Asignacioncalusac2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_pdf_pdfx__ = __webpack_require__(447);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_barcode_scanner__ = __webpack_require__(449);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ionic_img_viewer__ = __webpack_require__(450);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var Asignacioncalusac2Page = /** @class */ (function () {
    //private barcodeScanner:BarcodeScanner,
    function Asignacioncalusac2Page(imageViewerCtrl, loadingCtrl, Pdfx, alertCtrl, storage, msj, translateService, navCtrl, _MODAL, navParams, regService, barcodeScanner) {
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
        this.barcodeScanner = barcodeScanner;
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
    Asignacioncalusac2Page.prototype.presentImage = function (myImage) {
        var imageViewer = this._imageViewerCtrl.create(myImage);
        imageViewer.present();
    };
    Asignacioncalusac2Page.prototype.clearSearchg = function () {
        this.gSearchQuery = '';
    };
    Asignacioncalusac2Page.prototype.verqr = function () {
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
                var aa = aar[2];
                if (Number(aa) > 0) {
                    _this.regService.getRegS2(aa, 'estudiantecalusac').then(function (data) {
                        _this.Pdfx.dacalusac(aa, 'si', data);
                    }, function (err) {
                        _this.msj.showError3('Resultado', 'Resultado no encontrado.');
                    });
                }
                else {
                    _this.regService.getReg2b(aa, 'asignaestudiantes').then(function (data) {
                        //   this.Pdfx.daasigna(aa,'si',data,data[0].no_orientacion,'','')
                    }, function (err) {
                        _this.msj.showError3('Resultado', 'Resultado no encontrado.');
                    });
                }
            }
        }, function (err) {
            _this.msj.showError3('Error', 'ERRRO en lectura de codigo');
        });
    };
    Asignacioncalusac2Page.prototype.showFilter2 = function () {
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
                            _this.regService.getReg2b('NUEVOS/' + _this.username + '/todosautoriza', 'asignacalusacs').then(function (data) {
                                _this.regService.hidePreloader();
                                _this.pet = "NUEVOS";
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
    Asignacioncalusac2Page.prototype.showFilter = function () {
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
    Asignacioncalusac2Page.prototype.busca = function (op) {
        var _this = this;
        this.estadoant = op;
        this.regService.displayPreloader('Espere un momento...');
        this.regService.getReg2b(op + '/' + this.username + '/todosautoriza', 'asignacalusacs').then(function (data) {
            _this.regService.hidePreloader();
            _this.items = data;
            _this.items2 = data;
        }, function (err) {
            _this.regService.hidePreloader();
            _this.msj.showError3('Error', err.error);
        });
    };
    Asignacioncalusac2Page.prototype.pideregistros = function () {
        var _this = this;
        this.regService.displayPreloader('Espere un momento...');
        this.regService.getReg2b('NUEVOS/' + this.username + '/todosautoriza', 'asignacalusacs').then(function (data) {
            _this.regService.hidePreloader();
            _this.pet = "NUEVOS";
            _this.items = data;
            _this.items2 = data;
        }, function (err) {
            _this.regService.hidePreloader();
            _this.msj.showError3('Error', err.error);
        });
    };
    Asignacioncalusac2Page.prototype.ngOnInit = function () {
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
                _this.regService.getReg2b('NUEVOS/' + _this.username + '/todosautoriza', 'asignacalusacs').then(function (data) {
                    _this.regService.hidePreloader();
                    _this.pet = "NUEVOS";
                    _this.items = data;
                    _this.items2 = data;
                }, function (err) {
                    _this.regService.hidePreloader();
                    _this.msj.showError3('Error', err.error);
                });
            }
        });
    };
    Asignacioncalusac2Page.prototype.ionViewDidLoad = function () {
    };
    Asignacioncalusac2Page.prototype.loadMore = function (ev) {
        this.gLimit += 50;
        setTimeout(function () { return ev.complete(); }, 1000);
    };
    Asignacioncalusac2Page.prototype.deleteRecord2 = function (item, no) {
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
    Asignacioncalusac2Page.prototype.imprime2 = function (item, no) {
        var _this = this;
        var addModal = this._MODAL.create('Asignacioncalusac3CreatePage', { record: null, tipo: item.tipoa, datax: item, op: item.tipoa }, { showBackdrop: true, enableBackdropDismiss: false });
        addModal.onDidDismiss(function (data) {
            if (data) {
                _this.items = [];
            }
        });
        addModal.present();
    };
    Asignacioncalusac2Page.prototype.imprime = function (item, no) {
        var _this = this;
        var addModal = this._MODAL.create('Asignacioncalusac2autPage', { record: item }, { showBackdrop: true, enableBackdropDismiss: false, cssClass: "modal-fullscreen" });
        addModal.onDidDismiss(function (data) {
            if (data) {
                _this.busca('NUEVOS');
            }
        });
        addModal.present();
        // this.navCtrl.push('Asignacioncalusac2autPage', { record : item });
    };
    Asignacioncalusac2Page.prototype.asigna2 = function (item, no) {
        //  this.Pdfx.daordenpago2('','',item)
    };
    Asignacioncalusac2Page.prototype.asigna = function (item, no) {
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
    Asignacioncalusac2Page.prototype.deleteRecord = function (item, no) {
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
    Asignacioncalusac2Page.prototype.updateRecord = function (item, no) {
        var _this = this;
        var addModal = this._MODAL.create('AsignacioncalusacCreatePage', { record: item }, { showBackdrop: true, enableBackdropDismiss: false });
        addModal.onDidDismiss(function (data) {
            if (data) {
                _this.items.splice(no, 1);
                _this.items = _this.items.concat([data]);
            }
        });
        addModal.present();
        //  this.navCtrl.push('EmpresaCreatePage', { record : item });
    };
    Asignacioncalusac2Page.prototype.detalleRecord = function (item) {
        this.navCtrl.push('DcatalogoListPage', { record: item });
    };
    Asignacioncalusac2Page.prototype.addRecord = function (op) {
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
    Asignacioncalusac2Page.prototype.viewRecord = function (item) {
        // let modal = this._MODAL.create(ViewGalleryPage, { record : item });
        // modal.present();
    };
    Asignacioncalusac2Page.prototype.verasig = function (item, op) {
        var addModal = this._MODAL.create('AsignacioncalusacViewPage', { record: { idasigna: item._id } }, { showBackdrop: true, enableBackdropDismiss: false });
        addModal.onDidDismiss(function (data) {
        });
        addModal.present();
    };
    Asignacioncalusac2Page.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    Asignacioncalusac2Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-asignacioncalusac2',template:/*ion-inline-start:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\CALUSAC\asignacioncalusa2\asignacioncalusac2.html"*/'<ion-header no-border class="opaque">\n    <ion-navbar hideBackButton="true" no-border-bottom>\n\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n          </button>\n\n      <ion-title>\n       Autorización para Asignación CALUSAC\n      </ion-title>\n\n      <ion-buttons end>\n        <button [hidden]="(isDisablednit)"  (click)="showFilter2()" icon-only ion-button padding-right>\n              <ion-icon name="funnel"></ion-icon>\n        </button>\n\n        <button  [hidden]="(isDisablednit)" (click)="pideregistros()" icon-only ion-button padding-right>\n          <ion-icon name="refresh"></ion-icon>\n        </button>\n\n\n\n        </ion-buttons>\n    </ion-navbar>\n    <ion-toolbar no-border-top>\n      <ion-searchbar debounce="2000" (ionCancel)="clearSearchg($event)" [(ngModel)]="gSearchQuery" placeholder="{{ \'NO2_REGISTROS\' | translate }}{{items.length}}]">\n      </ion-searchbar>\n      <ion-segment  color="secundary" [(ngModel)]="pet">\n          <ion-segment-button value="NUEVOS" color="red"  (ionSelect)="busca(\'NUEVOS\')">\n           Nuevos\n          </ion-segment-button>\n          <ion-segment-button value="EN PROCESO" (ionSelect)="busca(\'EN PROCESO\')">\n            En Proceso (objetadas)\n          </ion-segment-button>\n          <ion-segment-button value="ACTUALIZADO" (ionSelect)="busca(\'ACTUALIZADAS\')">\n            Actualizadas\n          </ion-segment-button>\n          <ion-segment-button value="AUTORIZADAS" (ionSelect)="busca(\'AUTORIZADO\')">\n            AUTORIZADO\n          </ion-segment-button>\n        </ion-segment>\n  </ion-toolbar>\n\n\n  </ion-header>\n\n  <ion-content  fullscreen>\n\n\n     <ion-list >\n\n\n\n\n\n        <ion-item    *ngFor="let item of items   | search: gSearchQuery | LimitPipe: gLimit ;let i = index;" text-wrap>\n            <ion-card >\n                <ion-row>\n                    <ion-col  text-right>\n                            No: {{i+1}}\n                    </ion-col>\n\n\n                    <ion-item text-wrap>\n\n                      <button ion-item  >\n\n                   <!--     <h2 >Nivel: {{item.tipopago.nombre}} -- Costo {{item.tipopago.costo}}</h2>\n-->\n\n<h2 >Estado operador: {{item.estadooperador}} </h2>\n<h2 >Tipo Asignación: {{item.tipoa}} </h2>\n<h2 >Unidad Academica: {{item.idtipounidad.nombre}} </h2>\n<h2 >Curso: {{item.idunidadacademica.nombre}}</h2>\n<h2 >Jornada: {{item.jornada.nombre}}</h2>\n\n<h2 >Periodo: {{item.idperiodo.nombre}} </h2>\n<h2  *ngIf="(item.tipoa==\'Extranjero\' || item.tipoa==\'Extranjerocentroamericano\' ) || item.nidentificador==\'PASAPORTE\'"> PASAPORTE: {{item.identificador}} </h2>\n<h2  *ngIf="(item.tipoa==\'Extranjero\' || item.tipoa==\'Extranjerocentroamericano\' ) &&  item.nidentificador!==\'PASAPORTE\'"> CUI: {{item.cui}} </h2>\n\n<h2>Nombre: {{item.nombre}} </h2>\n<h2>Direccion: {{item.direccion}} </h2>\n<h2>Telefono: {{item.telefono}} </h2>\n<h2>No orden pago: {{item.noboletapago}} </h2>\n<h2>Ultimo rechazo: {{item.ultrechazo}} </h2>\n<h1>Estado: {{item.estadopago}} </h1>\n\n\n                      </button>\n\n                    </ion-item>\n                  </ion-row>\n\n                    <ion-row no-padding>\n\n\n\n\n                            <ion-col text-center>\n                                <ion-col>\n                                    <button *ngIf="(item.estadopago !==\'Pendiente de pago\') && (item.estadopago !==\'Orden de pago actualizada exitosamente\') "  ion-button  (click)="imprime(item,i)" >      Autorizar Asignación\n                                      </button>\n\n                                      <button  *ngIf="estadoant ===\'AUTORIZADO\'" color="primary" ion-button  (click)="imprime2(item,i)" >      Autorizar Orden pago\n                                        </button>\n                                  </ion-col>\n\n                              </ion-col>\n\n\n\n                    </ion-row>\n\n                </ion-card>\n\n\n\n\n\n\n\n\n      </ion-item>\n     </ion-list>\n     <ion-infinite-scroll (ionInfinite)="loadMore($event)">\n        <ion-infinite-scroll-content></ion-infinite-scroll-content>\n      </ion-infinite-scroll>\n\n\n  </ion-content>\n'/*ion-inline-end:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\CALUSAC\asignacioncalusa2\asignacioncalusac2.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7_ionic_img_viewer__["a" /* ImageViewerController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_5__providers_pdf_pdfx__["a" /* pdfx */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_2__providers__["d" /* NotificationProvider */], __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers__["a" /* Auth */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_barcode_scanner__["a" /* BarcodeScanner */]])
    ], Asignacioncalusac2Page);
    return Asignacioncalusac2Page;
}());

//# sourceMappingURL=asignacioncalusac2.js.map

/***/ }),

/***/ 931:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsignacioncalusacPageModule", function() { return AsignacioncalusacPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__asignacioncalusac2__ = __webpack_require__(1371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pipes_pipes_module__ = __webpack_require__(445);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AsignacioncalusacPageModule = /** @class */ (function () {
    function AsignacioncalusacPageModule() {
    }
    AsignacioncalusacPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__asignacioncalusac2__["a" /* Asignacioncalusac2Page */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__asignacioncalusac2__["a" /* Asignacioncalusac2Page */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild(),
                __WEBPACK_IMPORTED_MODULE_4__pipes_pipes_module__["a" /* PipesModule */]
            ],
        })
    ], AsignacioncalusacPageModule);
    return AsignacioncalusacPageModule;
}());

//# sourceMappingURL=asignacioncalusac2.module.js.map

/***/ })

});
//# sourceMappingURL=235.js.map