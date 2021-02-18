webpackJsonp([233],{

/***/ 1353:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AsignacioncalusacPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_pdf_pdfx__ = __webpack_require__(447);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_barcode_scanner__ = __webpack_require__(449);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng_socket_io__ = __webpack_require__(451);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng_socket_io___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ng_socket_io__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ionic_img_viewer__ = __webpack_require__(450);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var AsignacioncalusacPage = /** @class */ (function () {
    //private barcodeScanner:BarcodeScanner,
    function AsignacioncalusacPage(imageViewerCtrl, socket, loadingCtrl, Pdfx, alertCtrl, storage, msj, translateService, navCtrl, _MODAL, navParams, regService, barcodeScanner) {
        var _this = this;
        this.socket = socket;
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
    AsignacioncalusacPage.prototype.presentImage = function (myImage) {
        var imageViewer = this._imageViewerCtrl.create(myImage);
        imageViewer.present();
    };
    AsignacioncalusacPage.prototype.clearSearchg = function () {
        this.gSearchQuery = '';
    };
    AsignacioncalusacPage.prototype.verqr = function () {
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
                        //         this.Pdfx.daasigna(aa,'si',data,data[0].no_orientacion,'','')
                    }, function (err) {
                        _this.msj.showError3('Resultado', 'Resultado no encontrado.');
                    });
                }
            }
        }, function (err) {
            _this.msj.showError3('Error', 'ERRRO en lectura de codigo');
        });
    };
    AsignacioncalusacPage.prototype.showFilter = function () {
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
                                _this.regService.getReg2b(' 1/' + todo.NOV + '/todosasignacalusac', 'asignacalusacs').then(function (data) {
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
    AsignacioncalusacPage.prototype.pideregistros = function (op) {
        var _this = this;
        var self = this;
        self.loading = true;
        this.regService.getReg2b(op, 'asignacalusacs').then(function (data) {
            _this.items = data;
            self.loading = false;
        }, function (err) {
            _this.msj.showError3('Error', err.error);
            // this.translateService.get('NO_OPERACION').subscribe((value) => { this.msj.showError3('Error',value);  })
        });
    };
    AsignacioncalusacPage.prototype.ngOnInit = function () {
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
            if (_this.rol == 'calusacadmin' || _this.rol == 'OPERADOR CALUSAC' || _this.rol == 'ADMINISTRADOR CALUSAC' || _this.rol == 'ADMINISTRADOR') {
                _this.siprueba = false;
            }
            if (_this.rol == 'user') {
                _this.isDisablednit = true;
            }
            else {
                _this.isDisablednit = false;
            }
            if (_this.tiposus[5] == '') {
                //ES UN OPERADOR PORQUE NO TIENE NOV  TIENE QUE BUSCAR ASINACION
                if (_this.rol == 'user') {
                    _this.pideregistros('1/' + _this.username + '/todosasignacalusac');
                }
            }
            else {
                if (_this.username == 'calusacadmin@gmail.com' || _this.username == 'calusacope@gmail.com' || _this.username == 'cmanuel_2009@hotmail.com' || _this.username == 'jggm_meph@hotmail.com' || _this.username == 'mmerida1975@gmail.com' || _this.username == 'jggm.meph@gmail.com') {
                    _this.siprueba = false;
                    _this.pideregistros('1/' + _this.username + '/todosasignacalusac');
                }
                else {
                    if (_this.siprueba == false) {
                        if (_this.rol == 'user') {
                            _this.pideregistros('1/' + _this.username + '/todosasignacalusac');
                        }
                    }
                    else {
                        if (_this.rol == 'user') {
                            _this.pideregistros('1/' + _this.username + '/todosasignacalusac');
                        }
                    }
                }
            }
        });
    };
    AsignacioncalusacPage.prototype.ionViewDidLoad = function () {
    };
    AsignacioncalusacPage.prototype.davariable22 = function (cad, varx, op) {
        var re = "";
        var otro = cad;
        var bb = [];
        if (otro.indexOf(varx) > 0) {
            bb = otro.split(varx);
            if (bb.length == 0) {
                re = "error";
            }
            else {
                var restp = '';
                for (var i = 0; i < bb.length; i++) {
                    var cad = '';
                    cad = bb[i];
                    if (cad.indexOf(op) > 0) {
                        var cc = bb[i].split(':');
                        var dd = cc[1];
                        var ee = dd.split('"');
                        if (dd == '{}') {
                            restp = dd;
                        }
                        else {
                            restp = ee[1];
                            if (op == 'CICLO_ACTIVO') {
                                break;
                                // break;
                            }
                        }
                        if (op == 'CICLO_ACTIVO') {
                            // break;
                        }
                        else {
                            break;
                        }
                    }
                }
                re = restp;
            }
        }
        else {
            re = "error";
        }
        return re;
    };
    AsignacioncalusacPage.prototype.davariable = function (cad, varx) {
        var re = "";
        var otro = cad;
        var bb = [];
        if (otro.indexOf(varx) > 0) {
            bb = otro.split(varx);
            if (bb.length == 0) {
                re = "error";
            }
            else {
                var cc = bb[1].split(';');
                var dd = cc[1];
                var ee = dd.split('&');
                re = ee[0];
            }
        }
        else {
            re = "error";
        }
        return re;
    };
    AsignacioncalusacPage.prototype.loadMore = function (ev) {
        this.gLimit += 50;
        setTimeout(function () { return ev.complete(); }, 1000);
    };
    AsignacioncalusacPage.prototype.deleteRecord2 = function (item, no) {
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
    AsignacioncalusacPage.prototype.random = function () {
        var rand = Math.floor(Math.random() * 20) + 1;
        return rand;
    };
    AsignacioncalusacPage.prototype.imprime22a = function (item, no) {
        //¿Esta seguro de generar nueva orden de pago , esto anulara la orden de pago anterior?
        var _this = this;
        var alert = this.alertCtrl.create({ title: '¿Está seguro de generar nueva orden de pago, esto anulara la orden de pago anterior ?',
            buttons: [
                { text: 'Si',
                    handler: function () {
                        var rubroT = "152";
                        var ff = item.fechasiif;
                        var ff2 = ff.split('-');
                        var date = new Date(ff2[0], ff2[1] - 1, ff2[2]);
                        date.setDate(date.getDate() + 5);
                        var cuitt = '';
                        if (item.tipoa == 'Extranjero' || item.tipoa == 'Extranjerocentroamericano') {
                            cuitt = String(_this.random());
                        }
                        else {
                            cuitt = item.cui;
                        }
                        _this.regService.getReg2b(cuitt + '/' + item.nombre + '/' + item.monto + ".00" + '/30/2021/' + rubroT + '°' + '1' + '/calusacnuevo', 'siifs').then(function (data) {
                            var aa = [];
                            aa = data;
                            var otro = aa.cadena;
                            var gorden = _this.davariable(otro, 'orden_pago');
                            var ordenpago = gorden;
                            var llave = _this.davariable(otro, 'llave');
                            var fechax = _this.davariable(otro, 'fecha');
                            if (gorden == "error") {
                                _this.msj.showError3('Error', 'No se pudo generar orden de pago, intente mas tarde');
                                //  this.authService.hidePreloader();
                                return;
                            }
                            var options = {
                                cui: cuitt,
                                operacion: 'nuevaorden',
                                noboletapago: ordenpago,
                                fechasiif: fechax,
                                llave: llave
                            };
                            _this.regService.createReg2b(item._id, options, 'asignacalusacs').then(function (result) {
                                _this.pideregistros('1/2/' + item.correo);
                                _this.msj.showError3('', 'Operación realizada con exito');
                            });
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
    AsignacioncalusacPage.prototype.imprime22 = function (item, no) {
        //¿Esta seguro de generar nueva orden de pago , esto anulara la orden de pago anterior?
        var _this = this;
        var alert = this.alertCtrl.create({ title: '¿Está seguro de generar nueva orden de pago, esto anulara la orden de pago anterior ?',
            buttons: [
                { text: 'Si',
                    handler: function () {
                        var rubroT = "152";
                        var ff = item.fechasiif;
                        var ff2 = ff.split('-');
                        var date = new Date(ff2[0], ff2[1] - 1, ff2[2]);
                        date.setDate(date.getDate() + 5);
                        var date2 = new Date();
                        if (date2 <= date) {
                            _this.msj.showError3('Error', 'No es posible generar una orden de pago nueva, debido a que la orden de pago actual aún está vigente.');
                        }
                        else {
                            var cuitt = '';
                            if (item.tipoa == 'Estudiante' && item.nidentificador == 'PASAPORTE') {
                                cuitt = String(_this.random());
                            }
                            else {
                                if (item.tipoa == 'Estudiante' && item.nidentificador == 'PASAPORTE') {
                                    cuitt = String(_this.random());
                                }
                                else {
                                    if (item.tipoa == 'Extranjero' || item.tipoa == 'Extranjerocentroamericano') {
                                        cuitt = String(_this.random());
                                    }
                                    else {
                                        cuitt = item.cui;
                                    }
                                }
                            }
                            _this.regService.getReg2b(cuitt + '/' + item.nombre + '/' + item.monto + ".00" + '/30/2021/' + rubroT + '°' + '1' + '/calusacnuevo', 'siifs').then(function (data) {
                                var aa = [];
                                aa = data;
                                var otro = aa.cadena;
                                var gorden = _this.davariable(otro, 'orden_pago');
                                var ordenpago = gorden;
                                var llave = _this.davariable(otro, 'llave');
                                var fechax = _this.davariable(otro, 'fecha');
                                if (gorden == "error") {
                                    _this.msj.showError3('Error', 'No se pudo generar orden de pago, intente mas tarde');
                                    //  this.authService.hidePreloader();
                                    return;
                                }
                                var options = {
                                    cui: cuitt,
                                    operacion: 'nuevaorden',
                                    noboletapago: ordenpago,
                                    fechasiif: fechax,
                                    llave: llave
                                };
                                _this.regService.createReg2b(item._id, options, 'asignacalusacs').then(function (result) {
                                    _this.pideregistros('1/2/' + item.correo);
                                    _this.msj.showError3('', 'Operación realizada con exito');
                                });
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
    AsignacioncalusacPage.prototype.imprime = function (item, no) {
        //this.Pdfx.daordenpago('','',item)
        var ident = '';
        ident = item.cui;
        if (item.imprime === '1') {
            //con asignacion
            this.Pdfx.daordenpago2acalusacnueva('ORDEN_PAGO_CALUSAC', item.noboletapago, item.nombre, item.monto, 'CALUSAC', ident, item.rubro, item.llave, 'Escuela de Ciencias Lingüísticas', item.fechasiif, item.idtipounidad.nombre, 'N/A', item.ididioma.nombre + ' ' + item.tipoa + ' ' + item.idperiodo.nombre, item.monto2, item.itemp2);
        }
        else {
            this.Pdfx.daordenpago2acalusac('ORDEN_PAGO_CALUSAC', item.noboletapago, item.nombre, item.monto, 'CALUSAC', ident, item.rubro, item.llave, 'Escuela de Ciencias Lingüísticas', item.fechasiif, item.idtipounidad.nombre, 'N/A', item.ididioma.nombre + ' ' + item.tipoa + ' ' + item.idperiodo.nombre);
        }
    };
    AsignacioncalusacPage.prototype.asigna2 = function (item, no) {
        var _this = this;
        this.regService.getReg2b(item._id + '/' + '1/todosautorizaxid', 'asignacalusacs').then(function (data) {
            var aa = [];
            aa = data;
            var bb = [];
            bb = aa.tt2;
            _this.Pdfx.daordenpago2(item._id, '', item, bb);
        }, function (err) {
            _this.msj.showError3('Error', err.error);
        });
    };
    AsignacioncalusacPage.prototype.actualiza = function (item, no) {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'Modifique datos',
            inputs: [{ name: 'email', value: item.correo, placeholder: 'Email' },
                { name: 'dpi', value: item.cui, placeholder: 'DPI' },
                { name: 'nombre', value: item.nombre, placeholder: 'Nombre' }, { name: 'carnecalusac',
                    value: item.carnecalusac, placeholder: 'Carne CALUSAC' },
                { name: 'identificador', value: item.identificador, placeholder: 'Identificador' },],
            buttons: [
                {
                    text: 'Cancelar'
                },
                {
                    text: 'Actualizar',
                    handler: function (todo) {
                        if (todo) {
                            var options = {
                                _id: item._id,
                                operacion: 'actualizarinfor2',
                                correo: todo.email,
                                nombre: todo.nombre,
                                cui: todo.dpi,
                                identificador: todo.identificador,
                                carnecalusac: todo.carnecalusac,
                                bitacora: { idempresa: _this.idempresa, idafiliado: '', email: _this.username, permiso: 'Actualiza', accion: 'actualiza asignacion ' }
                            };
                            //  this.regService.createReg(this._ID,options,'personals').then((result) => {
                            _this.regService.createReg(item._id, options, 'asignacalusacs').then(function (result) {
                                _this.msj.showError3('Información', 'Proceso realizado con exito');
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
    AsignacioncalusacPage.prototype.asigna = function (item, no) {
        //validar si ya pago orden de pago y actualizar estado
        //verificar que el perido este activo si no no dejarlo pasar
        var _this = this;
        this.regService.getReg2b(item.idperiodo.id, 'unidadperiodo3s').then(function (result2) {
            var aa2 = result2;
            if (aa2[0].estado !== 'Activo') {
                _this.msj.showError3('Información', "El periodo de asignación ya no es válido, el tiempo de vigencia de asignación ha terminado.");
                return;
            }
            _this.regService.getReg2b(item.noboletapago + '/' + item.cui + '/exonerados', 'asignacalusacs').then(function (result) {
                //3708431930101
                var aa = result;
                if (aa.rr == 'nok') {
                    var ident = '';
                    if ((item.tipoa == 'Extranjero' || item.tipoa == 'Extranjerocentroamericano') || item.estadopago == 'Orden de pago actualizada exitosamente') {
                        ident = item.identificador;
                    }
                    else {
                        ident = item.cui;
                    }
                    _this.regService.displayPreloader('Espere un momento...');
                    _this.regService.getReg2b(ident + '/' + item.noboletapago + '/busca', 'siifs').then(function (result) {
                        var aa = [];
                        aa = result;
                        var otro = aa.cadena;
                        if (otro == 'Orden pago ya ha sido utilizada en el sistema.') {
                            _this.regService.hidePreloader();
                            _this.msj.showError3('Información', otro);
                            return;
                        }
                        _this.fechax = _this.davariable(otro, 'fecha');
                        var cctemp = otro.indexOf('Boleta no pagada');
                        if (cctemp > 0) {
                            _this.regService.hidePreloader();
                            _this.msj.showError3('Información', 'Por favor realice su pago, para poder continuar con su asignación.');
                        }
                        else {
                            if (aa.cadena == '<?xml version="1.0" encoding="ISO-8859-1"?><SOAP-ENV:Envelope SOAP-ENV:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/" xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/"><SOAP-ENV:Body><ns1:getDataResponse xmlns:ns1="urn:miserviciowsdl"><return xsi:type="xsd:string"></return></ns1:getDataResponse></SOAP-ENV:Body></SOAP-ENV:Envelope>') {
                                cctemp = 1;
                                // this.msj.showError3('Información','Por favor realice su pago, para poder continuar con su asignación.');
                            }
                            else {
                                cctemp = -1;
                            }
                            if (cctemp == -1) {
                                _this.regService.hidePreloader();
                                if (no == 1) {
                                    //validar si ya pago orden de pago y actualizar estado
                                    var addModal = _this._MODAL.create('Asignacioncalusac2CreatePage', { exonerado: 'no', record: null, fechax: _this.fechax, tipo: item.tipoa, datax: item, op: item.tipoa }, { showBackdrop: true, enableBackdropDismiss: false });
                                    addModal.onDidDismiss(function (data) {
                                        _this.pideregistros('1/2/' + item.correo);
                                    });
                                    addModal.present();
                                }
                                else {
                                    var addModal = _this._MODAL.create('Asignacioncalusac2CreatePage', { exonerado: aa._id, record: null, fechax: _this.fechax, tipo: item.tipoa, datax: item, op: item.tipoa }, { showBackdrop: true, enableBackdropDismiss: false });
                                    addModal.onDidDismiss(function (data) {
                                        if (data) {
                                            _this.pideregistros('1/2/' + item.correo);
                                        }
                                    });
                                    addModal.present();
                                }
                            }
                            else {
                                _this.regService.hidePreloader();
                                _this.msj.showError3('Información', 'Por favor realice su pago, para poder continuar con su asignación.');
                            }
                        }
                    });
                }
                else {
                    var addModal = _this._MODAL.create('Asignacioncalusac2CreatePage', { exonerado: aa._id, record: null, fechax: 'Exonerado', tipo: item.tipoa, datax: item, op: item.tipoa }, { showBackdrop: true, enableBackdropDismiss: false });
                    addModal.onDidDismiss(function (data) {
                        _this.pideregistros('1/2/' + item.correo);
                    });
                    addModal.present();
                }
            });
        });
    };
    AsignacioncalusacPage.prototype.asignafinal = function (item, no) {
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
    AsignacioncalusacPage.prototype.deleteRecord = function (item, no) {
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
    AsignacioncalusacPage.prototype.dahelp = function () {
        //this.msj.showError3('Link QR',op);
        this.regService.abrelinkinterno2('http://calusacusac.usac.edu.gt/');
    };
    AsignacioncalusacPage.prototype.iniciarcurso = function () {
        var _this = this;
        if (this.rol == 'user' && this.asignasi == true) { }
        else { }
        if (this.items.length > 0) {
            //  this.asignasi=data[0].userasignado
            this.regService.getReg2b(this.items[0].userasignadoemail + "/emailsolo/" + this.idempresa, 'personals').then(function (data) {
                _this.socket.connect();
                _this.socket.emit('set-nickname', data[0]._id);
                _this.navCtrl.push('ChatPage', { record: { toUserId: _this.idsuscriptor,
                        toUserName: _this.nombrett, avatar: _this.fotott }, grupal: 'no',
                    record2: { toUserId: data[0]._id,
                        toUserName: data[0].nombre, avatar: data[0].foto } });
            });
        }
        else {
            this.regService.getReg2b("calusacchat@gmail.com/emailsolo/" + this.idempresa, 'personals').then(function (data) {
                _this.socket.connect();
                _this.socket.emit('set-nickname', data[0]._id);
                _this.navCtrl.push('ChatPage', { record: { toUserId: _this.idsuscriptor,
                        toUserName: _this.nombrett, avatar: _this.fotott }, grupal: 'no',
                    record2: { toUserId: data[0]._id,
                        toUserName: 'Chat CALUSAC', avatar: data[0].foto } });
            });
        }
    };
    AsignacioncalusacPage.prototype.updateRecord = function (item, no) {
        var _this = this;
        var addModal = this._MODAL.create('Asignacioncalusac4CreatePage', { record: item, tipo: item.tipoa, datax: item, op: item.tipoa }, { showBackdrop: true, enableBackdropDismiss: false });
        addModal.onDidDismiss(function (data) {
            if (data) {
                _this.pideregistros('1/2/' + _this.username);
            }
        });
        addModal.present();
        //  this.navCtrl.push('EmpresaCreatePage', { record : item });
    };
    AsignacioncalusacPage.prototype.detalleRecord = function (item) {
        this.navCtrl.push('DcatalogoListPage', { record: item });
    };
    AsignacioncalusacPage.prototype.addRecord = function (op) {
        var _this = this;
        if (op == 'Estudiante') {
            /*
              let prompt = this.alertCtrl.create({
                title:' Validando información',
                message: ' Ingresa CARNE y CUI Registrado en Registro y Estadística, para validar información:',
                inputs: [
                  {
                    name: 'carne',
                    placeholder:'Ingrese CARNE registrado',
                    value:''//this.nov
            
                  },
                  {
                    name: 'cui',
                    placeholder:'Ingrese CUI/PASAPORTE registrado',
                    value:''//this.cuitt
                  }
                ],
                buttons: [
                  {
                    text: 'Cancelar'
                  },
                  {
                    text: 'Aceptar',
                    handler: todo => {
            
                          if(todo){
            
                     if(todo.carne==''  ||  todo.cui=='' )
                     {
                      this.msj.showError3('Advertencia','Ingrese un CARNE o CUI valido');
                      return;
            
                     }
            
            
            
                    const loading = this.loadingCtrl.create({
                      spinner: 'bubbles',
                      content: "Procesando información..."
                    });
                    loading.present();
            
            
            
                this.regService.getReg2b('registroest/'+todo.carne+'/CARNE' ,'datosfijos').then((data) => {
            
            
              var otro:any=[]
              let stringifiedData  = JSON.stringify(data)
            
              otro= JSON.parse(stringifiedData);
                   loading.dismiss();
            
                   var  cui=this.davariable22(otro,',','CUI');
                   var  pasapor=this.davariable22(otro,',','PASAPORTE');
                   var  est=this.davariable22(otro,',','CICLO_ACTIVO');
                   var  nombret=this.davariable22(otro,',','NOMBRE');
            
                   if(est=="{}")
                   {
                    this.msj.showError3('Advertencia','Estudiante no se encuentra activo.');
            
            
                   }
                   else{
                   var aax:any=[]
                   aax=data;
                   if(aax.length==0)
                   {
                    this.msj.showError3('Advertencia','Los datos de CUI y CARNET no estan registrados en la base de datos de estudiantes.');
            
                   }
                   else{
            
                    if(cui==todo.cui)
                    {
            
                     let addModal = this._MODAL .create('AsignacioncalusacCreatePage',{ record : null,pasapp:'no',cuix:cui,canex:todo.carne,tipo:op,datax:data,op:op,nombret:nombret },{showBackdrop: true,enableBackdropDismiss: false});
                     addModal.onDidDismiss(data => {
                       if (data) {
                         this.pideregistros('1/2/' +  this.username)
                       }
                     })
                     addModal.present();
            
                    }
                    else
                    {
                      if(pasapor==todo.cui)
                    {
            
                     let addModal = this._MODAL .create('AsignacioncalusacCreatePage',{ record : null,pasapp:'si',cuix:pasapor,canex:todo.carne,tipo:op,datax:data,op:op ,nombret:nombret},{showBackdrop: true,enableBackdropDismiss: false});
                     addModal.onDidDismiss(data => {
                       if (data) {
                         this.pideregistros('1/2/' +  this.username)
                       }
                     })
                     addModal.present();
            
                    }
                    else
                    {
                     this.msj.showError3('Advertencia','CUI/PASAPORTE y CARNET no estan relacionados en registro y personal');
                    }
            
                    }
            
            
                   }
            
            
                  }
            
            
            
                    }, (err) => {
                      this.msj.showError3('Advertencia',err.error);
                      loading.dismiss();
            
                    });
            
            
            
            
            
                          }
            
            
                    }
                  }
                ]
              });
            
              prompt.present();
            
            
            */
            var addModal = this._MODAL.create('AsignacioncalusacCreatePage', { record: null, pasapp: 'no', cuix: '', canex: '', tipo: op, datax: null, op: op, nombret: '' }, { showBackdrop: true, enableBackdropDismiss: false });
            addModal.onDidDismiss(function (data) {
                if (data) {
                    _this.pideregistros('1/2/' + _this.username);
                }
            });
            addModal.present();
        }
        else {
            var addModal = this._MODAL.create('AsignacioncalusacCreatePage', { record: null, tipo: op, datax: null, op: op }, { showBackdrop: true, enableBackdropDismiss: false });
            addModal.onDidDismiss(function (data) {
                if (data) {
                    _this.pideregistros('1/2/' + _this.username);
                }
            });
            addModal.present();
        }
        //this.navCtrl.push('EmpresaCreatePage');
    };
    AsignacioncalusacPage.prototype.viewRecord = function (item) {
        // let modal = this._MODAL.create(ViewGalleryPage, { record : item });
        // modal.present();
    };
    AsignacioncalusacPage.prototype.verasig = function (item, op) {
        var addModal = this._MODAL.create('AsignacioncalusacViewPage', { record: { idasigna: item._id } }, { showBackdrop: true, enableBackdropDismiss: false });
        addModal.onDidDismiss(function (data) {
        });
        addModal.present();
    };
    AsignacioncalusacPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    AsignacioncalusacPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-asignacioncalusac',template:/*ion-inline-start:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\CALUSAC\asignacioncalusa\asignacioncalusac.html"*/'<!--\n,\n                {\n\n                    "name": "Examen ubicación CALUSAC",\n                    "icon": "checkbox",\n                    "information": "Examen ubicación CALUSAC",\n                    "modulo": "otro°Asignacioncalusac100Page"\n\n\n            }\n\n-->\n\n      <ion-header no-border class="opaque" >\n          <ion-navbar  no-border-bottom hideBackButton="true">\n\n                <ion-buttons left>\n                  <button ion-button icon-only (click)="goBack()">\n                    <ion-icon name="arrow-back"></ion-icon>\n                  </button>\n                </ion-buttons>\n              <ion-title>\n                  Asignación CALUSAC\n              </ion-title>\n\n              <ion-buttons end>\n                  <button [hidden]="(isDisablednit)"  (click)="showFilter()" icon-only ion-button padding-right>\n                      <ion-icon name="funnel"></ion-icon>\n                    </button>\n\n\n                </ion-buttons>\n            </ion-navbar>\n\n\n          </ion-header>\n\n          <ion-content  fullscreen>\n\n              <ion-list >\n\n                  <ion-item text-wrap>\n                      <ion-icon name="at" item-start></ion-icon>\n                   <!--   CALUSAC - “Inscripciones Nivel 1 de todos los idiomas, jornadas, sedes y programas: del 27 de abril al 17 de mayo <br>    Inscripciones Nivel 2 en adelante de todos los idiomas, jornadas, sedes y programas: del 02 al 17 de mayo”.\n                      <br>\n                      Inicia Incripción 08:00 am.-->\n                      <ion-badge item-end>Usacenlinea</ion-badge>\n                      <br><br>\n                     <strong> Consultas o solicitudes de reposición de nota, reposición de números de carnet  de tanto para Sedes Regionales como para Calusac Central  ingresar a:  </strong>\n                     <a href="http://calusacusac.usac.edu.gt" target="_blank">http://calusacusac.usac.edu.gt</a>\n                    </ion-item>\n\n                    <ion-item text-center>\n                        <img src="../assets/img/calusac.png" />\n                      </ion-item>\n                    </ion-list >\n<!--[hidden]="isDisablednit" -->\n              <div class="wrapper">\n\n\n                  <div class="box red" (click)="addRecord(\'Estudiante\')">\n                     <h2> <ion-icon name="people"> Estudiante USAC</ion-icon> </h2>\n\n                  </div>\n\n                  <div class="box green" (click)="addRecord(\'Trabajador\')">\n                     <h2>  <ion-icon name="contact"> Trabajador USAC</ion-icon></h2>\n\n                  </div>\n\n                  <div class="box blue" (click)="addRecord(\'Hijo Trabajador Adolescente\')">\n                     <h2><ion-icon name="contact"> Hijo de Trabajador USAC Adolescente</ion-icon></h2>\n\n                  </div>\n\n                  <div class="box purple" (click)="addRecord(\'Hijo Trabajador Adulto\')">\n                     <h2><ion-icon name="contact"> Hijo de Trabajador USAC Adulto</ion-icon></h2>\n\n                  </div>\n\n                  <div class="box orange" (click)="addRecord(\'Población\')">\n                     <h2>  <ion-icon name="contacts"> Población</ion-icon></h2>\n\n                  </div>\n\n                  <div class="box violet" (click)="addRecord(\'Adolescente\')">\n                     <h2> <ion-icon name="person"> Adolescente</ion-icon></h2>\n\n                  </div>\n\n                  <div class="box turquoise" (click)="addRecord(\'Extranjero\')" >\n                     <h2>  <ion-icon name="person"> Extranjero no Centroamericano</ion-icon></h2>\n\n                  </div>\n\n                  <div class="box turquoise2" (click)="addRecord(\'Extranjerocentroamericano\')" >\n                    <h2>  <ion-icon name="person"> Extranjero Centroamericano</ion-icon></h2>\n\n                 </div>\n\n\n\n               </div>\n\n\n     <ion-list >\n\n\n\n\n\n\n\n\n        <ion-item    *ngFor="let item of items  | LimitPipe: gLimit ;let i = index;" text-wrap>\n            <ion-card >\n                <ion-row>\n                    <ion-col  style="border:none;background: rgb(212, 224, 250);"  text-right>\n                            No: {{i+1}}\n                    </ion-col>\n                    <ion-item text-wrap>\n                     <!--   <ion-avatar item-start>\n                            <img  src="{{item.foto2}}"  rel="tooltip" title="Imagen de perfil" #myImage2 (click)="presentImage(myImage2)" style=" width: 100px; height: 100px;">\n                          </ion-avatar>\n-->\n                      <button ion-item  >\n                        <h2  *ngIf="(item.tipoa!==\'Extranjero\' || item.tipoa!==\'Extranjerocentroamericano\') &&  item.nidentificador!==\'PASAPORTE\'">Tipo de asignación: {{item.tipoa}} </h2>\n                        <h2  *ngIf="item.tipoa==\'Extranjero\'  "> Tipo de asignación: Extranjero no centroamericano    </h2>\n                        <h2  *ngIf="item.tipoa==\'Extranjerocentroamericano\'  "> Tipo de asignación: Extranjero centroamericano    </h2>\n                                <h2 >Sede: {{item.idtipounidad.nombre}} </h2>\n                                <h2 >Curso: {{item.idunidadacademica.nombre}} </h2>\n                                  <h2 >Idioma: {{item.ididioma.nombre}} </h2>\n                                <h2 >Periodo: {{item.idperiodo.nombre}} </h2>\n                                <h2 >Nivel: {{item.tipopago.nombre}} -- Costo Q.{{item.tipopago.costo}}</h2>\n                                <h2  *ngIf="(item.tipoa==\'Extranjero\'  || item.tipoa!==\'Extranjerocentroamericano\') || item.nidentificador==\'PASAPORTE\'"> PASAPORTE: {{item.identificador}} </h2>\n                                <h2  *ngIf="(item.tipoa!==\'Extranjero\' || item.tipoa!==\'Extranjerocentroamericano\') &&  item.nidentificador!==\'PASAPORTE\'"> CUI: {{item.cui}} </h2>\n                                <h2>Nombre: {{item.nombre}} </h2>\n                                <h2>Dirección: {{item.direccion}} </h2>\n                                <h2>Teléfono: {{item.telefono}} </h2>\n                                <h2>Correo: {{item.idinterno}} </h2>\n                                <h2>No. Orden de pago: {{item.noboletapago}} </h2>\n                                <h2>Carné CALUSAC: {{item.carnecalusac}} </h2>\n                                <h1>Estado: {{item.estadopago}} </h1>\n\n                                <ion-note *ngIf="item.n5!==0" item-end>\n                                <h2>  <strong>NOTA FINAL: {{item.n5}}</strong> </h2>\n                                </ion-note>\n\n                                <h2>Último rechazo:\n                                    <div [innerHTML]="item.ultrechazo">\n                                      </div>   </h2>\n\n\n\n\n                      </button>\n                    </ion-item>\n<!--\n                    <ion-grid>\n                        <ion-row>\n                          <ion-col col-4>\n                              <img  *ngIf="item.foto1" [src]="item.foto1"   rel="tooltip" title="Constancia de nota o ubicación ilegible" #myImage (click)="presentImage(myImage)" style=" width: 100px; height: 100px;" item-end>\n\n                          </ion-col>\n                          <ion-col col-4>\n                              <img [src]="item.foto3" #myImage3 rel="tooltip" title="Comprobante de identificación" (click)="presentImage(myImage3)" style=" width: 100px; height: 100px;" item-end>\n\n                          </ion-col>\n\n                          <ion-col col-4>\n                              <img [src]="item.foto4" #myImage4  rel="tooltip" title="Comprobante de Documentación" (click)="presentImage(myImage4)" style=" width: 100px; height: 100px;" item-end>\n\n\n                          </ion-col>\n\n\n                        </ion-row>\n                      </ion-grid>\n-->\n\n\n\n\n\n                  </ion-row>\n\n                    <ion-row no-padding>\n\n                            <ion-col text-center>\n                                <ion-col>\n                                    <button *ngIf="item.estadopago==\'Pendiente de pago\'" ion-button  (click)="imprime(item,i)" >\n                                          Imprimir orden de pago\n                                      </button>\n                                  </ion-col>\n                                  <ion-col>\n                                    <button *ngIf="item.estadopago==\'Pendiente de pago\'" ion-button  (click)="imprime22(item,i)" >\n                                        Generar NUEVA orden de pago\n                                    </button>\n                                  </ion-col>\n\n                                  <ion-col>\n                                    <button *ngIf="item.estadopago==\'Pendiente de pago\' && rol==\'calusacadmin\'"  ion-button  (click)="imprime22a(item,i)" >\n                                        Generar NUEVA orden de pago Admin\n                                    </button>\n                                  </ion-col>\n\n                              </ion-col>\n\n\n                              <ion-col text-center>\n                                  <ion-col>\n                                      <button  *ngIf="item.estadopago==\'Pendiente de pago\'" ion-button  (click)="asigna(item,1)" >\n                                          Validar boleta de pago y Generar asignación\n                                        </button>\n<!--   asigna   2-->\n                                        <button  *ngIf="item.estadopago==\'Orden de pago actualizada exitosamente\'" ion-button  (click)="asigna(item,1)" >\n                                          Validar boleta de pago y Generar asignación\n                                          </button>\n                                    </ion-col>\n\n                                </ion-col>\n                                <ion-col text-center>\n                                  <ion-col>\n                                      <button  *ngIf="rol==\'calusacadmin\'" ion-button  (click)="actualiza(item,1)" >\n                                          Actualizar asignación\n                                        </button>\n<!--   asigna   2-->\n\n                                    </ion-col>\n\n                                </ion-col>\n\n                                <ion-col text-center>\n                                  <ion-col>\n                                    <button  *ngIf="rol==\'calusacadmin\'" ion-button  (click)="deleteRecord(item,i)" >\n                                      Eliminar asignación\n                                    </button>\n\n                                      <button  *ngIf="item.estadopago==\'Asignación exitosa\'" ion-button  (click)="asigna2(item,i)" >\n                                          Generar comprobante de asignación\n                                        </button>\n                                        <button  *ngIf="(item.ultrechazo!=\'\') && (item.estadopago !==\'Pendiente de pago\') && (item.estadopago !==\'Asignación exitosa\') && (item.estadopago !==\'Orden de pago actualizada exitosamente\') "\n                                         ion-button color=\'danger\' (click)=" updateRecord(item,i)" >\n                                            Actualizar información\n                                          </button>\n                                    </ion-col>\n\n                                </ion-col>\n\n                    </ion-row>\n\n                </ion-card>\n\n\n\n\n\n\n\n\n      </ion-item>\n     </ion-list>\n\n\n\n\n\n       <ion-fab *ngIf="siprueba == false"  title=\'Mas Información\'  bottom left #fab>\n\n                    <button  rel="tooltip"  color="tertiary" (click)="dahelp()" ion-fab><ion-icon name="information"></ion-icon></button>\n                  </ion-fab>\n\n                  <!--\n                  <ion-fab *ngIf="siprueba == false" bottom right #fab>\n                      <button  rel="tooltip" title="Foro" color="tertiary" (click)="iniciarcurso()" ion-fab><ion-icon name="logo-whatsapp"></ion-icon></button>\n                    </ion-fab>\n                    -->\n     <ion-infinite-scroll (ionInfinite)="loadMore($event)">\n        <ion-infinite-scroll-content></ion-infinite-scroll-content>\n      </ion-infinite-scroll>\n\n\n  </ion-content>\n'/*ion-inline-end:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\CALUSAC\asignacioncalusa\asignacioncalusac.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_8_ionic_img_viewer__["a" /* ImageViewerController */], __WEBPACK_IMPORTED_MODULE_7_ng_socket_io__["Socket"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_5__providers_pdf_pdfx__["a" /* pdfx */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_2__providers__["d" /* NotificationProvider */], __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers__["a" /* Auth */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_barcode_scanner__["a" /* BarcodeScanner */]])
    ], AsignacioncalusacPage);
    return AsignacioncalusacPage;
}());

//# sourceMappingURL=asignacioncalusac.js.map

/***/ }),

/***/ 913:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsignacioncalusacPageModule", function() { return AsignacioncalusacPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__asignacioncalusac__ = __webpack_require__(1353);
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
                __WEBPACK_IMPORTED_MODULE_2__asignacioncalusac__["a" /* AsignacioncalusacPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__asignacioncalusac__["a" /* AsignacioncalusacPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild(),
                __WEBPACK_IMPORTED_MODULE_4__pipes_pipes_module__["a" /* PipesModule */]
            ],
        })
    ], AsignacioncalusacPageModule);
    return AsignacioncalusacPageModule;
}());

//# sourceMappingURL=asignacioncalusac.module.js.map

/***/ })

});
//# sourceMappingURL=233.js.map