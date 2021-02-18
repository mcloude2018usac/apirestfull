webpackJsonp([246],{

/***/ 1390:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return asignacioncalusac2aPage; });
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








var asignacioncalusac2aPage = /** @class */ (function () {
    //private barcodeScanner:BarcodeScanner,
    function asignacioncalusac2aPage(imageViewerCtrl, loadingCtrl, Pdfx, alertCtrl, storage, msj, translateService, navCtrl, _MODAL, navParams, regService, barcodeScanner) {
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
        this.eubicacion = 0;
        this.esuficiencia = 0;
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
    asignacioncalusac2aPage.prototype.clearSearchg = function () {
        this.gSearchQuery = '';
    };
    asignacioncalusac2aPage.prototype.showFilter2 = function () {
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
    asignacioncalusac2aPage.prototype.busca = function (op) {
        var _this = this;
        this.estadoant = op;
        this.regService.displayPreloader('Espere un momento...');
        this.storage.get('username').then(function (value) {
            _this.username = value;
            _this.esuficiencia = 0;
            _this.eubicacion = 0;
            switch (_this.nivelprx) {
                case '?key=1'://exa.ubicacion
                    _this.tituloxx = 'Autorización para Examen de ubicación CALUSAC';
                    _this.eubicacion = 1;
                    _this.regService.getReg2b(_this.username + '/' + op + '/todosautorizaxid', 'asignaubicacions').then(function (data) {
                        _this.regService.hidePreloader();
                        _this.items = data;
                        _this.items2 = data;
                    }, function (err) {
                        _this.regService.hidePreloader();
                        _this.msj.showError3('Error', err.error);
                    });
                    break;
                case '?key=2'://exa suficiencia
                    _this.esuficiencia = 1;
                    _this.tituloxx = 'Autorización para Examen de suficiencia CALUSAC';
                    _this.regService.getReg2b(_this.username + '/' + op + '/todosautorizaxid', 'asignaubicacionas').then(function (data) {
                        _this.regService.hidePreloader();
                        _this.items = data;
                        _this.items2 = data;
                    }, function (err) {
                        _this.regService.hidePreloader();
                        _this.msj.showError3('Error', err.error);
                    });
                    break;
            }
        });
    };
    asignacioncalusac2aPage.prototype.presentImage = function (myImage) {
        var imageViewer = this._imageViewerCtrl.create(myImage);
        imageViewer.present();
    };
    asignacioncalusac2aPage.prototype.ngOnInit = function () {
        var _this = this;
        this.nivelprx = this.navParams.get("nivel");
        this.eubicacion = 0;
        this.esuficiencia = 0;
        switch (this.nivelprx) {
            case '?key=1'://exa.ubicacion
                this.eubicacion = 1;
                break;
            case '?key=2'://exa.ubicacion
                this.esuficiencia = 1;
                break;
        }
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
            }
        });
    };
    asignacioncalusac2aPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.storage.get('username').then(function (value) {
            _this.username = value;
            _this.busca('NUEVO');
        });
    };
    asignacioncalusac2aPage.prototype.loadMore = function (ev) {
        this.gLimit += 50;
        setTimeout(function () { return ev.complete(); }, 1000);
    };
    asignacioncalusac2aPage.prototype.imprime2 = function (item, no) {
        var _this = this;
        var addModal = this._MODAL.create('Asignacioncalusac3CreatePage', { record: null, tipo: item.tipoa, datax: item, op: item.tipoa }, { showBackdrop: true, enableBackdropDismiss: false });
        addModal.onDidDismiss(function (data) {
            if (data) {
                _this.items = [];
            }
        });
        addModal.present();
    };
    asignacioncalusac2aPage.prototype.autoriza = function (item, no, op) {
        var _this = this;
        switch (this.nivelprx) {
            case '?key=1'://exa.ubicacion
                var alert_1 = this.alertCtrl.create({ title: 'Esta seguro de realizar esta operación?',
                    buttons: [
                        { text: 'Si',
                            handler: function () {
                                var options = {
                                    operacion: 'actualiza',
                                    estadooperador: 'AUTORIZADO',
                                    estadopago: item.estadopago,
                                    ultrechazo: item.ultrechazo,
                                    bitacora: { idempresa: _this.idempresa, idafiliado: '', email: _this.username, permiso: 'creat', accion: 'Genera asignación ubicacion calusac' }
                                };
                                _this.regService.createReg2b(item._id, options, 'asignaubicacions').then(function (result) {
                                    var loading = _this.loadingCtrl.create({
                                        spinner: 'bubbles',
                                        content: "Enviando  Correo electronico  a cuenta: " + item.idinterno + "  ......"
                                    });
                                    loading.present();
                                    var idt = item._id;
                                    var msghtml = ' <p><span class="esd-hidden-preheader" style="display: none !important; font-size: 0px; line-height: 0; color: #ffffff; visibility: hidden; opacity: 0; height: 0; width: 0; mso-hide: all;">0</span></p><div class="es-wrapper-color"><table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0"><tbody><tr><td class="esd-email-paddings" valign="top"><table class="es-content esd-footer-popover" cellspacing="0" cellpadding="0" align="center"><tbody><tr><td class="esd-stripe" align="center"><table class="es-content-body" width="600" cellspacing="0" cellpadding="0" align="center" bgcolor="#ffffff"><tbody><tr><td class="esd-structure es-p20" align="left"><table width="100%" cellspacing="0" cellpadding="0"><tbody><tr><td class="esd-container-frame" align="center" valign="top" width="560"><table width="100%" cellspacing="0" cellpadding="0"><tbody><tr><td class="esd-block-image" align="center"><a target="_blank"><img class="adapt-img" style="display: block;" src="http://52.90.195.238:8500/logousac1.png" alt="" width="87" /></a></td></tr><tr><td class="esd-block-text" align="left"><p style="color: #38761d;"><strong>La Universidad de San Carlos de Guatemala y el Rector Ing. Murphy Paiz, </strong>te dan&nbsp;la m&aacute;s cordial bienvenida: ' + item.nombre + '</p></td></tr><tr>       <td align="center">                                                <h2><span style="color: #333333;"><strong> Tu papelería ha sido aprobada, ingresa a la plataforma <br> <a href="https://usac-enlinea.web.app">https://usac-enlinea.web.app</a> y continúa con tu asignación. </strong> <br> <br>  NOTA: Es indispensable que imprimas y canceles tu órde de pago.  <br><br>  </span></h2>                               </td></tr> <tr>                                                <td class="esd-block-text" align="left">                                                </p></td></tr><tr><td class="esd-block-image" align="center"><a target="_blank"><img class="adapt-img" style="float: left;" src="http://52.90.195.238:8500/logoit.jpg" alt="" width="200" /></a></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></div>';
                                    var options2 = {
                                        destino: item.idinterno,
                                        html: msghtml,
                                        text: msghtml,
                                        subjet: 'Correo de autotización de papelería asignacion examen de ubicación (CALUSAC) ',
                                        actualiza: { tipo: 'na', id: idt, estado: 'Ingreso, mail enviado',
                                            otros: '' }
                                    };
                                    _this.regService.mandamail('', options2, 'mails').then(function (data) {
                                        loading.dismiss();
                                        _this.busca(_this.estadoant);
                                        _this.msj.showError3('Mensaje', 'Operación realizada con exito');
                                    }, function (err) {
                                        loading.dismiss();
                                        _this.busca(_this.estadoant);
                                        _this.msj.showError3('Mensaje', 'Operación realizada con exito');
                                    });
                                }, function (err) { _this.msj.showError3('Mensaje', err.error); });
                            }
                        },
                        {
                            text: 'No', handler: function () { }
                        }
                    ]
                });
                alert_1.present();
                break;
            case '?key=2'://exa.ubicacion
                var alert2 = this.alertCtrl.create({ title: 'Esta seguro de realizar esta operación?',
                    buttons: [
                        { text: 'Si',
                            handler: function () {
                                var options = {
                                    operacion: 'actualiza',
                                    estadooperador: 'AUTORIZADO',
                                    estadopago: item.estadopago,
                                    ultrechazo: item.ultrechazo,
                                    bitacora: { idempresa: _this.idempresa, idafiliado: '', email: _this.username, permiso: 'creat', accion: 'Genera asignación ubicacion calusac' }
                                };
                                _this.regService.createReg2b(item._id, options, 'asignaubicacionas').then(function (result) {
                                    var loading = _this.loadingCtrl.create({
                                        spinner: 'bubbles',
                                        content: "Enviando  Correo electronico  a cuenta: " + item.idinterno + "  ......"
                                    });
                                    loading.present();
                                    var idt = item._id;
                                    var msghtml = ' <p><span class="esd-hidden-preheader" style="display: none !important; font-size: 0px; line-height: 0; color: #ffffff; visibility: hidden; opacity: 0; height: 0; width: 0; mso-hide: all;">0</span></p><div class="es-wrapper-color"><table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0"><tbody><tr><td class="esd-email-paddings" valign="top"><table class="es-content esd-footer-popover" cellspacing="0" cellpadding="0" align="center"><tbody><tr><td class="esd-stripe" align="center"><table class="es-content-body" width="600" cellspacing="0" cellpadding="0" align="center" bgcolor="#ffffff"><tbody><tr><td class="esd-structure es-p20" align="left"><table width="100%" cellspacing="0" cellpadding="0"><tbody><tr><td class="esd-container-frame" align="center" valign="top" width="560"><table width="100%" cellspacing="0" cellpadding="0"><tbody><tr><td class="esd-block-image" align="center"><a target="_blank"><img class="adapt-img" style="display: block;" src="http://52.90.195.238:8500/logousac1.png" alt="" width="87" /></a></td></tr><tr><td class="esd-block-text" align="left"><p style="color: #38761d;"><strong>La Universidad de San Carlos de Guatemala y el Rector Ing. Murphy Paiz, </strong>te dan&nbsp;la m&aacute;s cordial bienvenida: ' + item.nombre + '</p></td></tr><tr>       <td align="center">                                                <h2><span style="color: #333333;"><strong> Tu papelería ha sido aprobada, ingresa a la plataforma <br> <a href="https://usac-enlinea.web.app">https://usac-enlinea.web.app</a> y continúa con tu asignación. </strong> <br> <br>  NOTA: Es indispensable que imprimas y canceles las dos órdenes de pago:  <br><br>  •	EXAMEN DE SUFICIENCIA Q. 155.00   <br> •	CERTIFICACIÓN EXAMEN DE SUFICIENCIA Q. 25.00</span></h2>                               </td></tr> <tr>                                                <td class="esd-block-text" align="left">                                                </p></td></tr><tr><td class="esd-block-image" align="center"><a target="_blank"><img class="adapt-img" style="float: left;" src="http://52.90.195.238:8500/logoit.jpg" alt="" width="200" /></a></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></div>';
                                    var options2 = {
                                        destino: item.idinterno,
                                        html: msghtml,
                                        text: msghtml,
                                        subjet: 'Correo de autotización de papelería asignacion examen de suficiencia (CALUSAC) ',
                                        actualiza: { tipo: 'na', id: idt, estado: 'Ingreso, mail enviado',
                                            otros: '' }
                                    };
                                    _this.regService.mandamail('', options2, 'mails').then(function (data) {
                                        loading.dismiss();
                                        _this.busca(_this.estadoant);
                                        _this.msj.showError3('Mensaje', 'Operación realizada con exito');
                                    }, function (err) {
                                        loading.dismiss();
                                        _this.busca(_this.estadoant);
                                        _this.msj.showError3('Mensaje', 'Operación realizada con exito');
                                    });
                                }, function (err) { _this.msj.showError3('Mensaje', err.error); });
                            }
                        },
                        {
                            text: 'No', handler: function () { }
                        }
                    ]
                });
                alert2.present();
                break;
        }
    };
    asignacioncalusac2aPage.prototype.deniega = function (item, no) {
        var _this = this;
        switch (this.nivelprx) {
            case '?key=1'://exa.ubicacion
                var prompt3 = this.alertCtrl.create({
                    message: 'Ingrese comentario',
                    inputs: [
                        {
                            name: 'NOV',
                            placeholder: 'Ingrese comentario'
                        }
                    ],
                    buttons: [
                        {
                            text: 'Cancelar'
                        },
                        {
                            text: 'Objetar',
                            handler: function (todo) {
                                if (todo) {
                                    var options = {
                                        operacion: 'actualiza',
                                        estadooperador: 'EN PROCESO',
                                        estadopago: item.estadopago,
                                        ultrechazo: todo.NOV,
                                        bitacora: { idempresa: _this.idempresa, idafiliado: '', email: _this.username, permiso: 'creat', accion: 'Genera asignación ubicacion calusac' }
                                    };
                                    _this.regService.createReg2b(item._id, options, 'asignaubicacions').then(function (result) {
                                        var loading = _this.loadingCtrl.create({
                                            spinner: 'bubbles',
                                            content: "Enviando  Correo electronico  a cuenta: " + item.idinterno + "  ......"
                                        });
                                        loading.present();
                                        var idt = item._id;
                                        var msghtml = ' <p><span class="esd-hidden-preheader" style="display: none !important; font-size: 0px; line-height: 0; color: #ffffff; visibility: hidden; opacity: 0; height: 0; width: 0; mso-hide: all;">0</span></p><div class="es-wrapper-color"><table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0"><tbody><tr><td class="esd-email-paddings" valign="top"><table class="es-content esd-footer-popover" cellspacing="0" cellpadding="0" align="center"><tbody><tr><td class="esd-stripe" align="center"><table class="es-content-body" width="600" cellspacing="0" cellpadding="0" align="center" bgcolor="#ffffff"><tbody><tr><td class="esd-structure es-p20" align="left"><table width="100%" cellspacing="0" cellpadding="0"><tbody><tr><td class="esd-container-frame" align="center" valign="top" width="560"><table width="100%" cellspacing="0" cellpadding="0"><tbody><tr><td class="esd-block-image" align="center"><a target="_blank"><img class="adapt-img" style="display: block;" src="http://52.90.195.238:8500/logousac1.png" alt="" width="87" /></a></td></tr><tr><td class="esd-block-text" align="left"><p style="color: #38761d;"><strong>La Universidad de San Carlos de Guatemala y el Rector Ing. Murphy Paiz, </strong>te dan&nbsp;la m&aacute;s cordial bienvenida: ' + item.nombre + '</p></td></tr><tr>       <td align="center">                                                <h2><span style="color: #333333;"><strong> Tu papelería ha sido rechazada (' + item.nombre + ') <br><br> <h2> Rechazo: ' + todo.NOV + ' </h2> <br><br> Ingresa a la plataforma <br> <a href="https://usac-enlinea.web.app">https://usac-enlinea.web.app</a> y actualiza tu  asignación. </strong></span></h2>                               </td></tr> <tr>                                                <td class="esd-block-text" align="left">                                                </p></td></tr><tr><td class="esd-block-image" align="center"><a target="_blank"><img class="adapt-img" style="float: left;" src="http://52.90.195.238:8500/logoit.jpg" alt="" width="200" /></a></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></div>';
                                        var options2 = {
                                            destino: item.idinterno,
                                            html: msghtml,
                                            text: msghtml,
                                            subjet: 'Correo de autotización de papelería asignacion examen de ubicación (CALUSAC) ',
                                            actualiza: { tipo: 'na', id: idt, estado: 'Ingreso, mail enviado',
                                                otros: '' }
                                        };
                                        _this.regService.mandamail('', options2, 'mails').then(function (data) {
                                            loading.dismiss();
                                            _this.busca(_this.estadoant);
                                            _this.msj.showError3('Mensaje', 'Operación realizada con exito');
                                        }, function (err) {
                                            loading.dismiss();
                                            _this.busca(_this.estadoant);
                                            _this.msj.showError3('Mensaje', 'Operación realizada con exito');
                                        });
                                    }, function (err) { _this.msj.showError3('Mensaje', err.error); });
                                }
                            }
                        }
                    ]
                });
                prompt3.present();
                break;
            case '?key=2'://exa.ubicacion
                var prompt2 = this.alertCtrl.create({
                    message: 'Ingrese comentario',
                    inputs: [
                        {
                            name: 'NOV',
                            placeholder: 'Ingrese comentario'
                        }
                    ],
                    buttons: [
                        {
                            text: 'Cancelar'
                        },
                        {
                            text: 'Objetar',
                            handler: function (todo) {
                                if (todo) {
                                    var options = {
                                        operacion: 'actualiza',
                                        estadooperador: 'EN PROCESO',
                                        estadopago: item.estadopago,
                                        ultrechazo: todo.NOV,
                                        bitacora: { idempresa: _this.idempresa, idafiliado: '', email: _this.username, permiso: 'creat', accion: 'Genera asignación ubicacion calusac' }
                                    };
                                    _this.regService.createReg2b(item._id, options, 'asignaubicacionas').then(function (result) {
                                        var loading = _this.loadingCtrl.create({
                                            spinner: 'bubbles',
                                            content: "Enviando  Correo electronico  a cuenta: " + item.idinterno + "  ......"
                                        });
                                        loading.present();
                                        var idt = item._id;
                                        var msghtml = ' <p><span class="esd-hidden-preheader" style="display: none !important; font-size: 0px; line-height: 0; color: #ffffff; visibility: hidden; opacity: 0; height: 0; width: 0; mso-hide: all;">0</span></p><div class="es-wrapper-color"><table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0"><tbody><tr><td class="esd-email-paddings" valign="top"><table class="es-content esd-footer-popover" cellspacing="0" cellpadding="0" align="center"><tbody><tr><td class="esd-stripe" align="center"><table class="es-content-body" width="600" cellspacing="0" cellpadding="0" align="center" bgcolor="#ffffff"><tbody><tr><td class="esd-structure es-p20" align="left"><table width="100%" cellspacing="0" cellpadding="0"><tbody><tr><td class="esd-container-frame" align="center" valign="top" width="560"><table width="100%" cellspacing="0" cellpadding="0"><tbody><tr><td class="esd-block-image" align="center"><a target="_blank"><img class="adapt-img" style="display: block;" src="http://52.90.195.238:8500/logousac1.png" alt="" width="87" /></a></td></tr><tr><td class="esd-block-text" align="left"><p style="color: #38761d;"><strong>La Universidad de San Carlos de Guatemala y el Rector Ing. Murphy Paiz, </strong>te dan&nbsp;la m&aacute;s cordial bienvenida: ' + item.nombre + '</p></td></tr><tr>       <td align="center">                                                <h2><span style="color: #333333;"><strong> Tu papelería ha sido rechazada (' + todo.NOV + '), ingresa a la plataforma <br> <a href="https://usac-enlinea.web.app">https://usac-enlinea.web.app</a> y actualiza tu  asignación. </strong></span></h2>                               </td></tr> <tr>                                                <td class="esd-block-text" align="left">                                                </p></td></tr><tr><td class="esd-block-image" align="center"><a target="_blank"><img class="adapt-img" style="float: left;" src="http://52.90.195.238:8500/logoit.jpg" alt="" width="200" /></a></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></div>';
                                        var options2 = {
                                            destino: item.idinterno,
                                            html: msghtml,
                                            text: msghtml,
                                            subjet: 'Correo de autotización de papelería asignacion examen de suficiencia (CALUSAC) ',
                                            actualiza: { tipo: 'na', id: idt, estado: 'Ingreso, mail enviado',
                                                otros: '' }
                                        };
                                        _this.regService.mandamail('', options2, 'mails').then(function (data) {
                                            loading.dismiss();
                                            _this.busca(_this.estadoant);
                                            _this.msj.showError3('Mensaje', 'Operación realizada con exito');
                                        }, function (err) {
                                            loading.dismiss();
                                            _this.busca(_this.estadoant);
                                            _this.msj.showError3('Mensaje', 'Operación realizada con exito');
                                        });
                                    }, function (err) { _this.msj.showError3('Mensaje', err.error); });
                                }
                            }
                        }
                    ]
                });
                prompt2.present();
                break;
        }
    };
    asignacioncalusac2aPage.prototype.imprime = function (item, no) {
        var _this = this;
        var addModal = this._MODAL.create('asignacioncalusac2aautPage', { record: item }, { showBackdrop: true, enableBackdropDismiss: false, cssClass: "modal-fullscreen" });
        addModal.onDidDismiss(function (data) {
            if (data) {
                _this.busca(_this.estadoant);
            }
        });
        addModal.present();
        // this.navCtrl.push('asignacioncalusac2aautPage', { record : item });
    };
    asignacioncalusac2aPage.prototype.asigna = function (item, no) {
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
    asignacioncalusac2aPage.prototype.viewRecord = function (item) {
        // let modal = this._MODAL.create(ViewGalleryPage, { record : item });
        // modal.present();
    };
    asignacioncalusac2aPage.prototype.verasig = function (item, op) {
        var addModal = this._MODAL.create('AsignacioncalusacViewPage', { record: { idasigna: item._id } }, { showBackdrop: true, enableBackdropDismiss: false });
        addModal.onDidDismiss(function (data) {
        });
        addModal.present();
    };
    asignacioncalusac2aPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    asignacioncalusac2aPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-asignacioncalusac2a',template:/*ion-inline-start:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\CALUSAC\UBICACIONES\EXASUFICIENCIA\asignacioncalusa2a\asignacioncalusac2a.html"*/'<ion-header no-border class="opaque">\n    <ion-navbar hideBackButton="true" no-border-bottom>\n\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n          </button>\n\n      <ion-title>\n       {{tituloxx}}\n      </ion-title>\n\n      <ion-buttons end>\n        <button [hidden]="(isDisablednit)"  (click)="showFilter2()" icon-only ion-button padding-right>\n              <ion-icon name="funnel"></ion-icon>\n        </button>\n\n        <button  [hidden]="(isDisablednit)" (click)="busca(\'NUEVO\')" icon-only ion-button padding-right>\n          <ion-icon name="refresh"></ion-icon>\n        </button>\n\n\n\n        </ion-buttons>\n    </ion-navbar>\n    <ion-toolbar no-border-top>\n      <ion-searchbar debounce="2000" (ionCancel)="clearSearchg($event)" [(ngModel)]="gSearchQuery" placeholder="{{ \'NO2_REGISTROS\' | translate }}{{items.length}}]">\n      </ion-searchbar>\n      <ion-segment  color="secundary" [(ngModel)]="pet">\n          <ion-segment-button value="NUEVOS" color="red"  (ionSelect)="busca(\'NUEVO\')">\n           Nuevos\n          </ion-segment-button>\n          <ion-segment-button value="EN PROCESO" (ionSelect)="busca(\'EN PROCESO\')">\n            En Proceso (objetadas)\n          </ion-segment-button>\n          <ion-segment-button value="ACTUALIZADO" (ionSelect)="busca(\'ACTUALIZADAS\')">\n            Actualizadas\n          </ion-segment-button>\n          <ion-segment-button value="AUTORIZADAS" (ionSelect)="busca(\'AUTORIZADO\')">\n            AUTORIZADO\n          </ion-segment-button>\n        </ion-segment>\n  </ion-toolbar>\n\n\n  </ion-header>\n\n  <ion-content  fullscreen>\n\n\n     <ion-list *ngIf="eubicacion ===1"   >\n        <ion-item *ngFor="let item of items   | search: gSearchQuery | LimitPipe: gLimit ;let i = index;" text-wrap>\n            <ion-card >\n                <ion-row>\n                    <ion-col  text-right>\n                            No: {{i+1}}\n                    </ion-col>\n                    <ion-item text-wrap>\n                      <button ion-item >\n                        <h2 >Estado operador: {{item.estadooperador}} </h2>\n                        <h2 >Unidad Academica: {{item.idtipounidad.nombre}} </h2>\n                        <h2 >Periodo: {{item.idperiodo.nombre}} </h2>\n                        <h2 >Idioma: {{item.ididioma.nombre}} </h2>\n                        <h2>Nombre: {{item.nombre}} </h2>\n                        <h2>Identificador: {{item.identificador}} </h2>\n                        <h2 >Correo: {{item.idinterno}} </h2>\n                        <h2>No orden pago: {{item.noorden}} Q. {{item.monto}}</h2>\n                        <h2>Ultimo rechazo: {{item.ultrechazo}} </h2>\n                        <h1>Estado: {{item.estadopago}} </h1>\n                        <img  *ngIf="item.foto" [src]="item.foto"   rel="tooltip" title="Imagen de CUI" #myImage (click)="presentImage(myImage)" style=" width: 100px; height: 100px;" item-end>\n                      </button>\n                    </ion-item>\n                  </ion-row>\n                    <ion-row no-padding>\n                            <ion-col text-center>\n                                <ion-col>\n                                  <button *ngIf="item.estadooperador ===\'NUEVO\' || item.estadooperador ===\'ACTUALIZADAS\'"  ion-button  (click)="autoriza(item,i)" >      Autorizar Asignación\n                                  </button>\n\n                                  <button  *ngIf="item.estadooperador ===\'NUEVO\' || item.estadooperador ===\'ACTUALIZADAS\'"  color="primary" ion-button  (click)="deniega(item,i)" >     Objetar Asignación\n                                       </button>\n                                  </ion-col>\n                              </ion-col>\n                    </ion-row>\n                </ion-card>\n      </ion-item>\n     </ion-list>\n\n\n     <ion-list  *ngIf="esuficiencia ===1">\n      <ion-item    *ngFor="let item of items   | search: gSearchQuery | LimitPipe: gLimit ;let i = index;" text-wrap>\n          <ion-card >\n              <ion-row>\n                  <ion-col  text-right>\n                          No: {{i+1}}\n                  </ion-col>\n                  <ion-item text-wrap>\n\n\n                    <button ion-item >\n                      <h2 >Estado operador: {{item.estadooperador}} </h2>\n                      <h2 >Unidad Academica: {{item.idtipounidad.nombre}} </h2>\n                      <h2 >Curso: {{item.idunidadacademica.nombre}}</h2>\n                      <h2 >Periodo: {{item.idperiodo.nombre}} </h2>\n                      <h2>Hora: {{item.idhora}} </h2>\n                      <h2>Dia: {{(item.iddia).substr(0,10)}} </h2>\n                      <h2>Nombre: {{item.nombre}} </h2>\n                      <h2>Identificador: {{item.identificador}} </h2>\n                      <h2 >Telefono: {{item.notelefono}} </h2>\n                      <h2 >Carne USAC: {{item.carneusac}} </h2>\n                      <h2 >Correo: {{item.idinterno}} </h2>\n                      <h2>No orden pago 1: {{item.noorden}}    Q. {{item.monto}} </h2>\n                      <h2>No orden pago 2: {{item.noorden2}}  Q. {{item.monto2}}</h2>\n                      <h2>Ultimo rechazo: {{item.ultrechazo}} </h2>\n                      <h1>Estado: {{item.estadopago}} </h1>\n                      <img  *ngIf="item.foto2" [src]="item.foto2"   rel="tooltip" title="Imagen de identificación No 1" #myImage2 (click)="presentImage(myImage2)" style=" width: 100px; height: 100px;" item-end>\n                      <img  *ngIf="item.foto3" [src]="item.foto3"   rel="tooltip" title="Imagen de identificación No 2" #myImage3 (click)="presentImage(myImage3)" style=" width: 100px; height: 100px;" item-end>\n                      <img  *ngIf="item.foto4" [src]="item.foto4"   rel="tooltip" title="Imagen de perfil" #myImage4 (click)="presentImage(myImage4)" style=" width: 100px; height: 100px;" item-end>\n\n\n\n\n                                            </button>\n                  </ion-item>\n                </ion-row>\n                  <ion-row no-padding>\n                          <ion-col text-center>\n                              <ion-col>\n                                  <button *ngIf="item.estadooperador ===\'NUEVO\' || item.estadooperador ===\'ACTUALIZADAS\'"  ion-button  (click)="autoriza(item,i)" >      Autorizar Asignación\n                                    </button>\n\n                                    <button  *ngIf="item.estadooperador ===\'NUEVO\' || item.estadooperador ===\'ACTUALIZADAS\'"  color="primary" ion-button  (click)="deniega(item,i)" >     Objetar Asignación\n                                         </button>\n                                </ion-col>\n                            </ion-col>\n                  </ion-row>\n              </ion-card>\n    </ion-item>\n   </ion-list>\n     <ion-infinite-scroll (ionInfinite)="loadMore($event)">\n        <ion-infinite-scroll-content></ion-infinite-scroll-content>\n      </ion-infinite-scroll>\n\n\n  </ion-content>\n'/*ion-inline-end:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\CALUSAC\UBICACIONES\EXASUFICIENCIA\asignacioncalusa2a\asignacioncalusac2a.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7_ionic_img_viewer__["a" /* ImageViewerController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_5__providers_pdf_pdfx__["a" /* pdfx */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_2__providers__["d" /* NotificationProvider */], __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers__["a" /* Auth */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_barcode_scanner__["a" /* BarcodeScanner */]])
    ], asignacioncalusac2aPage);
    return asignacioncalusac2aPage;
}());

//# sourceMappingURL=asignacioncalusac2a.js.map

/***/ }),

/***/ 950:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsignacioncalusacPageModule", function() { return AsignacioncalusacPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__asignacioncalusac2a__ = __webpack_require__(1390);
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
                __WEBPACK_IMPORTED_MODULE_2__asignacioncalusac2a__["a" /* asignacioncalusac2aPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__asignacioncalusac2a__["a" /* asignacioncalusac2aPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild(),
                __WEBPACK_IMPORTED_MODULE_4__pipes_pipes_module__["a" /* PipesModule */]
            ],
        })
    ], AsignacioncalusacPageModule);
    return AsignacioncalusacPageModule;
}());

//# sourceMappingURL=asignacioncalusac2a.module.js.map

/***/ })

});
//# sourceMappingURL=246.js.map