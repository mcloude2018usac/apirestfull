webpackJsonp([244],{

/***/ 1378:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Asignacioncalusac100Page; });
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







//import { Socket } from 'ng-socket-io';

var Asignacioncalusac100Page = /** @class */ (function () {
    //private barcodeScanner:BarcodeScanner,private socket: Socket,
    function Asignacioncalusac100Page(imageViewerCtrl, loadingCtrl, Pdfx, alertCtrl, storage, msj, translateService, navCtrl, _MODAL, navParams, regService, barcodeScanner) {
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
        this.siprueba = false;
        this.generated = '';
        this.isDisablednit = true;
        this.idafiliado = 'na';
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
    Asignacioncalusac100Page.prototype.presentImage = function (myImage) {
        var imageViewer = this._imageViewerCtrl.create(myImage);
        imageViewer.present();
    };
    Asignacioncalusac100Page.prototype.clearSearchg = function () {
        this.gSearchQuery = '';
    };
    Asignacioncalusac100Page.prototype.verqr = function () {
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
                    _this.regService.getReg(aa, 'asignaestudiantes').then(function (data) {
                        //  this.Pdfx.daasigna(aa,'si',data,data[0].no_orientacion,'','')
                    }, function (err) {
                        _this.msj.showError3('Resultado', 'Resultado no encontrado.');
                    });
                }
            }
        }, function (err) {
            _this.msj.showError3('Error', 'ERRRO en lectura de codigo');
        });
    };
    Asignacioncalusac100Page.prototype.showFilter = function () {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: ' Ingrese identificador CALUSAC',
            message: 'Carne USAC/ Carne CALUSAC/ CUI/ No pasaporte/ Correo / Teléfono',
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
                            if (todo.NOV !== '') {
                                _this.regService.displayPreloader('Espere un momento...');
                                _this.regService.getReg2b(' 1/' + todo.NOV + '/todosasignacalusac', 'asignaubicacions').then(function (data) {
                                    _this.regService.hidePreloader();
                                    _this.items = data;
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
        prompt.present();
    };
    Asignacioncalusac100Page.prototype.pideregistros = function (op) {
        var _this = this;
        var self = this;
        self.loading = true;
        this.regService.getReg(op, 'asignaubicacions').then(function (data) {
            _this.items = data;
            self.loading = false;
        }, function (err) {
            _this.msj.showError3('Error', err.error);
            // this.translateService.get('NO_OPERACION').subscribe((value) => { this.msj.showError3('Error',value);  })
        });
    };
    Asignacioncalusac100Page.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get('username').then(function (value) {
            _this.username = value;
        });
        this.translateService.get('APPX').subscribe(function (value) {
            _this.idempresa = value;
        });
        this.storage.get('tiposus').then(function (value) {
            _this.tiposus = value.split(',');
            _this.cuitt = _this.tiposus[2];
            _this.nov = _this.tiposus[5];
            _this.rol = _this.tiposus[6];
            _this.idsuscriptor = _this.tiposus[3];
            _this.nombrett = _this.tiposus[4];
            _this.fotott = _this.tiposus[9] + "," + _this.tiposus[10];
            if (_this.rol == 'OPERADOR CALUSAC' || _this.rol == 'ADMINISTRADOR CALUSAC' || _this.rol == 'ADMINISTRADOR') {
                _this.siprueba = false;
            }
            if (_this.rol == 'user') {
                _this.isDisablednit = true;
                //    this.siprueba=true;
            }
            else {
                _this.isDisablednit = false;
            }
            if (_this.tiposus[5] == '') {
                if (_this.username == 'calusacope@gmail.com' || _this.username == 'mario.morales@mcloude.com' || _this.username == 'jggm_meph@hotmail.com' || _this.username == 'escobar.cm06@gmail.com' || _this.username == 'jggm.meph@gmail.com') {
                    _this.siprueba = false;
                    _this.pideregistros('1/2/' + _this.username);
                }
                else {
                    _this.pideregistros('1/2/' + _this.username);
                }
            }
            else {
                if (_this.username == 'calusacope@gmail.com' || _this.username == 'mario.morales@mcloude.com' || _this.username == 'jggm_meph@hotmail.com' || _this.username == 'escobar.cm06@gmail.com' || _this.username == 'jggm.meph@gmail.com') {
                    _this.siprueba = false;
                    _this.pideregistros('1/2/' + _this.username);
                }
                else {
                    if (_this.siprueba == false) {
                        if (_this.rol == 'user') {
                            _this.pideregistros('1/2/' + _this.username);
                        }
                    }
                    else {
                        if (_this.rol == 'user') {
                            _this.pideregistros('1/2/' + _this.username);
                        }
                    }
                }
            }
        });
    };
    Asignacioncalusac100Page.prototype.ionViewDidLoad = function () {
    };
    Asignacioncalusac100Page.prototype.loadMore = function (ev) {
        this.gLimit += 50;
        setTimeout(function () { return ev.complete(); }, 1000);
    };
    Asignacioncalusac100Page.prototype.deleteRecord2 = function (item, no) {
        var _this = this;
        var alert = this.alertCtrl.create({ title: 'Esta seguro de realizar esta operación?',
            buttons: [
                { text: 'Si',
                    handler: function () {
                        var recordID = item._id;
                        _this.regService.deleteReg(recordID + '/' + _this.username + '/' + _this.idempresa + '/' + _this.idafiliado, 'asignaubicacions').then(function (data) {
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
    Asignacioncalusac100Page.prototype.actualiza = function (item, no) {
        var _this = this;
        var addModal = this._MODAL.create('Asignacioncalusac100CreatePage', { record: item, tipo: no, datax: null, op: no }, { showBackdrop: true, enableBackdropDismiss: false });
        addModal.onDidDismiss(function (data) {
            if (data) {
                _this.pideregistros('1/2/' + _this.username);
            }
        });
        addModal.present();
    };
    Asignacioncalusac100Page.prototype.imprime = function (item, no) {
        var _this = this;
        this.regService.getReg2b(item.idperiodo.id, 'unidadperiodo4s').then(function (result) {
            if (result) {
                if (result[0].estado === 'Activo') {
                    var ident = '';
                    ident = item.identificador2;
                    _this.Pdfx.daordenpago2acalusac('ORDEN_PAGO_CALUSAC', item.noorden, item.nombre, item.monto, 'CALUSAC', ident, item.rubro, item.llave, 'Escuela de Ciencias Lingüísticas', item.fechasiif, item.idtipounidad.nombre, 'N/A', 'Examen de Ubicación ' + item.ididioma.nombre + ' ' + ' ' + item.idperiodo.nombre);
                }
                else {
                    _this.msj.showError3('Error', 'La temporada de asignación ha finalizado.');
                    return;
                }
            }
            else {
                _this.msj.showError3('Error', 'La temporada de asignación ha finalizado.');
                return;
            }
        });
        //validar periodo activo
    };
    Asignacioncalusac100Page.prototype.asigna2 = function (item, no) {
        var _this = this;
        this.regService.getReg2b(item.idperiodo.id, 'unidadperiodo4s').then(function (result) {
            if (result) {
                if (result[0].estado === 'Activo') {
                    _this.Pdfx.daordenpagoubica2(item._id, '', item);
                }
                else {
                    _this.msj.showError3('Error', 'La temporada de asignación ha finalizado.');
                    return;
                }
            }
            else {
                _this.msj.showError3('Error', 'La temporada de asignación ha finalizado.');
                return;
            }
        });
    };
    Asignacioncalusac100Page.prototype.asigna = function (item, no) {
        var _this = this;
        this.regService.getReg2b(item.idperiodo.id, 'unidadperiodo4s').then(function (result) {
            if (result) {
                if (result[0].estado === 'Activo') {
                    _this.regService.getReg2b(item.identificador2 + '/' + item.noorden + '/busca', 'siifs').then(function (result) {
                        var aa = [];
                        aa = result;
                        var otro = aa.cadena;
                        if (otro == 'Orden pago ya ha sido utilizada en el sistema.') {
                            //   this.regService.hidePreloader();
                            _this.msj.showError3('Información', otro);
                            return;
                        }
                        var cctemp = otro.indexOf('Boleta no pagada');
                        if (cctemp > 0) {
                            //   this.regService.hidePreloader();
                            _this.msj.showError3('Información', 'Por favor realice su pago, para poder continuar con su asignación.');
                        }
                        else {
                            if (no == 1) {
                                //validar si ya pago orden de pago y actualizar estado
                                var addModal = _this._MODAL.create('Asignacioncalusac101CreatePage', { record: null, tipo: item.tipoa, datax: item, op: item.tipoa }, { showBackdrop: true, enableBackdropDismiss: false });
                                addModal.onDidDismiss(function (data) {
                                    if (data) {
                                        _this.pideregistros('1/2/' + _this.username);
                                    }
                                });
                                addModal.present();
                            }
                            else {
                                var addModal = _this._MODAL.create('Asignacioncalusac101CreatePage', { record: null, tipo: item.tipoa, datax: item, op: item.tipoa }, { showBackdrop: true, enableBackdropDismiss: false });
                                addModal.onDidDismiss(function (data) {
                                    if (data) {
                                        _this.pideregistros('1/2/' + _this.username);
                                    }
                                });
                                addModal.present();
                            }
                        }
                    });
                }
                else {
                    _this.msj.showError3('Error', 'La temporada de asignación ha finalizado.');
                    return;
                }
            }
            else {
                _this.msj.showError3('Error', 'La temporada de asignación ha finalizado.');
                return;
            }
        });
    };
    Asignacioncalusac100Page.prototype.asignafinal = function (item, no) {
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
            this.regService.createReg2b(item._id, options, 'asignaubicacions').then(function (result) {
                // loading.dismiss();
                _this.msj.showError3('Mensaje', 'Asignación realizada con exito');
                _this.pideregistros('1/2/' + _this.username);
            }, function (err) {
                //loading.dismiss();
                _this.msj.showError3('Mensaje', err.error);
            });
        }
        else {
            this.msj.showError3('Error', 'No se ha cancelado la boleta de pago');
        }
    };
    Asignacioncalusac100Page.prototype.deleteRecord = function (item, no) {
        var _this = this;
        var alert = this.alertCtrl.create({ title: 'Esta seguro de realizar esta operación?',
            buttons: [
                { text: 'Si',
                    handler: function () {
                        var recordID = item._id;
                        _this.regService.deleteReg(recordID + '/' + _this.username + '/' + _this.idempresa + '/' + _this.idafiliado, 'asignaubicacions').then(function (data) {
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
    Asignacioncalusac100Page.prototype.dahelp = function () {
        //this.msj.showError3('Link QR',op);
        this.regService.abrelinkinterno2('http://calusacusac.usac.edu.gt/');
    };
    Asignacioncalusac100Page.prototype.iniciarcurso = function () {
    };
    Asignacioncalusac100Page.prototype.updateRecord = function (item, no) {
        var _this = this;
        var addModal = this._MODAL.create('Asignacioncalusac1004CreatePage', { record: item, tipo: item.tipoa, datax: item, op: item.tipoa }, { showBackdrop: true, enableBackdropDismiss: false });
        addModal.onDidDismiss(function (data) {
            if (data) {
                _this.pideregistros('1/2/' + _this.username);
            }
        });
        addModal.present();
        //  this.navCtrl.push('EmpresaCreatePage', { record : item });
    };
    Asignacioncalusac100Page.prototype.detalleRecord = function (item) {
        this.navCtrl.push('DcatalogoListPage', { record: item });
    };
    Asignacioncalusac100Page.prototype.addRecord = function (op) {
        var _this = this;
        var addModal = this._MODAL.create('Asignacioncalusac100CreatePage', { record: null, tipo: op, datax: null, op: op }, { showBackdrop: true, enableBackdropDismiss: false });
        addModal.onDidDismiss(function (data) {
            if (data) {
                _this.pideregistros('1/2/' + _this.username);
            }
        });
        addModal.present();
        //this.navCtrl.push('EmpresaCreatePage');
    };
    Asignacioncalusac100Page.prototype.viewRecord = function (item) {
        // let modal = this._MODAL.create(ViewGalleryPage, { record : item });
        // modal.present();
    };
    Asignacioncalusac100Page.prototype.verasig = function (item, op) {
        var addModal = this._MODAL.create('Asignacioncalusac100ViewPage', { record: { idasigna: item._id } }, { showBackdrop: true, enableBackdropDismiss: false });
        addModal.onDidDismiss(function (data) {
        });
        addModal.present();
    };
    Asignacioncalusac100Page.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    Asignacioncalusac100Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-asignacioncalusac100',template:/*ion-inline-start:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\CALUSAC\UBICACIONES\asignacioncalusa100\asignacioncalusac100.html"*/'\n\n      <ion-header no-border class="opaque" >\n          <ion-navbar  no-border-bottom hideBackButton="true">\n\n                <ion-buttons left>\n                  <button ion-button icon-only (click)="goBack()">\n                    <ion-icon name="arrow-back"></ion-icon>\n                  </button>\n                </ion-buttons>\n              <ion-title>\n                  Asignación Examen de Ubicación CALUSAC\n              </ion-title>\n\n              <ion-buttons end>\n                  <button [hidden]="(isDisablednit)"  (click)="showFilter()" icon-only ion-button padding-right>\n                      <ion-icon name="funnel"></ion-icon>\n                    </button>\n\n\n                </ion-buttons>\n            </ion-navbar>\n\n\n          </ion-header>\n\n          <ion-content  fullscreen>\n\n              <ion-list >\n\n                  <ion-item text-wrap>\n                      <ion-icon name="at" item-start></ion-icon>\n                      CALUSAC\n                      <!--- “Fecha de inscripción Ordinaria" <p> Hora de apertura 02/10/2020 8:00 horas <p>Hora de cierre 10/10/2019 23:55 horas”.\n                      -->\n                      <ion-badge item-end>Usacenlinea</ion-badge>\n                    </ion-item>\n\n                    <ion-item text-center>\n                        <img src="../assets/img/calusac.png" />\n                      </ion-item>\n                    </ion-list >\n\n\n\n\n     <ion-list >\n\n\n\n\n\n\n\n\n        <ion-item    *ngFor="let item of items  | LimitPipe: gLimit ;let i = index;" text-wrap>\n            <ion-card >\n                <ion-row>\n                    <ion-col  style="border:none;background: rgb(212, 224, 250);"  text-right>\n                            No: {{i+1}}\n                    </ion-col>\n                    <ion-item text-wrap>\n\n                      <button ion-item  >\n                        <h2 >Tipo Asignación: {{item.tipoasignacion}} </h2>\n                                <h2 >Sede: {{item.idtipounidad.nombre}} </h2>\n\n                                  <h2 >Idioma: {{item.ididioma.nombre}} </h2>\n                                <h2 >Periodo: {{item.idperiodo.nombre}} </h2>\n\n                                <h2>Doc identificación: {{item.identificador}} </h2>\n                                <h2>Nombre: {{item.nombre}} </h2>\n\n                                <h2>No orden pago: {{item.noorden}} </h2>\n\n\n                                <h1 *ngIf="item.estadopago==\'Pendiente de pago\'  && item.estadooperador===\'AUTORIZADO\' && item.estadooperador===\'EN PROCESO\'">Estado: {{item.estadopago}} </h1>\n                                <h1 *ngIf="item.estadopago==\'Pendiente de pago\'  && item.estadooperador===\'NUEVO\'">Estado: Pendiente de autorización </h1>\n\n                                <ion-note *ngIf="item.n3.nombre!==\'\'" item-end>\n                                  <h2>  <strong>NIVEL UBICADO: {{item.n3.nombre}}</strong> </h2>\n                                  </ion-note>\n\n\n\n\n\n                      </button>\n                    </ion-item>\n\n\n\n\n\n\n                  </ion-row>\n\n                    <ion-row no-padding>\n\n\n\n\n                            <ion-col text-center>\n                                <ion-col>\n                                  <button  *ngIf="rol==\'calusacadmin\'" ion-button  (click)="deleteRecord(item,i)" >\n                                    Eliminar asignación\n                                  </button>\n\n\n                                  \n                                    <button *ngIf="item.estadopago==\'Pendiente de pago\' && item.estadooperador==\'AUTORIZADO\'" ion-button  (click)="imprime(item,i)" >\n                                        Imprimir boleta pago\n                                      </button>\n                                  </ion-col>\n                                  <ion-col>\n                                    <button *ngIf="item.estadopago==\'Pendiente de pago\' && item.estadooperador==\'EN PROCESO\'" ion-button  (click)="actualiza(item,i)" >\n                                        Actualizar información\n                                      </button>\n                                  </ion-col>\n\n                              </ion-col>\n\n\n                              <ion-col text-center>\n                                  <ion-col>\n                                      <button  *ngIf="item.estadopago==\'Pendiente de pago\' && item.estadooperador==\'AUTORIZADO\'" ion-button  (click)="asigna(item,1)" >\n                                          Validar orden de pago y Generar asignación\n                                        </button>\n\n                                        <button  *ngIf="item.estadopago==\'Orden de pago cobrada exitosamente\'" ion-button  (click)="asigna(item,2)" >\n                                            Generar asignación\n                                          </button>\n                                    </ion-col>\n\n                                </ion-col>\n\n                                <ion-col text-center>\n                                  <ion-col>\n                                      <button  *ngIf="item.estadopago==\'Asignación exitosa\'" ion-button  (click)="asigna2(item,i)" >\n                                          Generar comprobante de asignación\n                                        </button>\n\n                                    </ion-col>\n\n                                </ion-col>\n\n                    </ion-row>\n\n                </ion-card>\n\n\n\n\n\n\n\n\n      </ion-item>\n     </ion-list>\n\n\n\n\n\n       <ion-fab  title=\'Mas Información\'  bottom left #fab>\n\n                    <button  rel="tooltip"  color="tertiary" (click)="dahelp()" ion-fab><ion-icon name="information"></ion-icon></button>\n                  </ion-fab>\n\n\n              <ion-fab title=\'Crear Asignación\'  *ngIf="siprueba == false" bottom center #fab >\n                <button color="secondary"  ion-fab (click)="addRecord()"><ion-icon name="add"></ion-icon></button>\n\n            </ion-fab>\n\n\n     <ion-infinite-scroll (ionInfinite)="loadMore($event)">\n        <ion-infinite-scroll-content></ion-infinite-scroll-content>\n      </ion-infinite-scroll>\n\n\n  </ion-content>\n'/*ion-inline-end:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\CALUSAC\UBICACIONES\asignacioncalusa100\asignacioncalusac100.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7_ionic_img_viewer__["a" /* ImageViewerController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_5__providers_pdf_pdfx__["a" /* pdfx */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_2__providers__["d" /* NotificationProvider */], __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers__["a" /* Auth */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_barcode_scanner__["a" /* BarcodeScanner */]])
    ], Asignacioncalusac100Page);
    return Asignacioncalusac100Page;
}());

//# sourceMappingURL=asignacioncalusac100.js.map

/***/ }),

/***/ 938:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Asignacioncalusac100PageModule", function() { return Asignacioncalusac100PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__asignacioncalusac100__ = __webpack_require__(1378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pipes_pipes_module__ = __webpack_require__(445);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var Asignacioncalusac100PageModule = /** @class */ (function () {
    function Asignacioncalusac100PageModule() {
    }
    Asignacioncalusac100PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__asignacioncalusac100__["a" /* Asignacioncalusac100Page */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__asignacioncalusac100__["a" /* Asignacioncalusac100Page */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild(),
                __WEBPACK_IMPORTED_MODULE_4__pipes_pipes_module__["a" /* PipesModule */]
            ],
        })
    ], Asignacioncalusac100PageModule);
    return Asignacioncalusac100PageModule;
}());

//# sourceMappingURL=asignacioncalusac100.module.js.map

/***/ })

});
//# sourceMappingURL=244.js.map