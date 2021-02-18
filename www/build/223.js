webpackJsonp([223],{

/***/ 1360:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConvenioCalusacdPage; });
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






var ConvenioCalusacdPage = /** @class */ (function () {
    //private barcodeScanner:BarcodeScanner,
    function ConvenioCalusacdPage(Pdfx, loadingCtrl, actionSheetCtrl, alertCtrl, storage, msj, translateService, navCtrl, _MODAL, navParams, regService) {
        var _this = this;
        this.Pdfx = Pdfx;
        this.loadingCtrl = loadingCtrl;
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
        this.gSearchQuery = '';
        this.username = "";
        this.idafiliado = 'na';
        this.translateService.get('APPX').subscribe(function (value) {
            _this.idempresa = value;
        });
    }
    ConvenioCalusacdPage.prototype.clearSearchg = function () {
        this.gSearchQuery = '';
    };
    ConvenioCalusacdPage.prototype.showFilter = function () {
    };
    ConvenioCalusacdPage.prototype.pideregistros = function () {
        var _this = this;
        var self = this;
        self.loading = true;
        this.regService.getReg(this.navParams.data.idempresa + '/' + this.navParams.data.idgrupo + '/todos', 'conveniocalusacds').then(function (data) {
            _this.items = data;
            _this.items2 = data;
            _this.total = (_this.navParams.data.record.monto) * _this.items.length;
            self.loading = false;
        }, function (err) {
            _this.msj.showError3('Error', err.error);
            // this.translateService.get('NO_OPERACION').subscribe((value) => { this.msj.showError3('Error',value);  })
        });
    };
    ConvenioCalusacdPage.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get('username').then(function (value) {
            _this.username = value;
        });
    };
    ConvenioCalusacdPage.prototype.ionViewDidLoad = function () {
        this.asignacc = this.navParams.data.record.estado,
            this.pideregistros();
    };
    ConvenioCalusacdPage.prototype.loadMore = function (ev) {
        this.gLimit += 50;
        setTimeout(function () { return ev.complete(); }, 1000);
    };
    ConvenioCalusacdPage.prototype.genera = function (item, no) {
        var alert = this.alertCtrl.create({ title: 'Esta seguro de realizar esta operación?',
            buttons: [
                { text: 'Si',
                    handler: function () {
                    }
                },
                {
                    text: 'No', handler: function () { }
                }
            ]
        });
        alert.present();
    };
    ConvenioCalusacdPage.prototype.asigna2 = function (item, no) {
        var _this = this;
        this.regService.getReg2b(item.idasigna + '/' + '1/todosautorizaxid', 'asignacalusacs').then(function (data) {
            var aa = [];
            aa = data;
            var bb = [];
            bb = aa.tt2;
            _this.Pdfx.daordenpago2(aa.tt._id, '', aa.tt, bb);
        }, function (err) {
            _this.msj.showError3('Error', err.error);
        });
    };
    ConvenioCalusacdPage.prototype.asigna = function (item, no) {
        var _this = this;
        var alert = this.alertCtrl.create({ title: 'Esta seguro de realizar esta operación?',
            buttons: [
                { text: 'Si',
                    handler: function () {
                        var options = {
                            nombre: item.nombre,
                            tipounidad: { id: item.idtipounidad.id, nombre: item.idtipounidad.nombre },
                            unidadacademica: { id: item.idunidadacademica.id, nombre: item.idunidadacademica.nombre, codigo: item.idunidadacademica.codigo },
                            periodo: { id: item.idperiodo, nombre: 'SEGUNDO BIMESTRE' },
                            idestudiante: item.correo,
                            idinterno: item.correo,
                            no_orientacion: '123',
                            tipoa: _this.navParams.data.record.tipo,
                            carnecalusac: item.carne,
                            carneusac: item.carne,
                            monto: _this.navParams.data.record.monto,
                            rubro: '21',
                            identificador: item.cui,
                            tipopago: item.tipopago,
                            ididioma: item.ididioma,
                            idtipogrupo: item.tipogrupo,
                            idtipocurso: item.tipocurso,
                            fechasiif: _this.navParams.data.record.fechasiif,
                            rubrot: '21',
                            ano: '2020',
                            nivel: item.nivel,
                            jornada: item.jornada,
                            resultadocalusac: '',
                            tipoasignacion: 'enlinea',
                            fechanac: '2000-03-05T00:00:00.000+0000',
                            cui: item.cui,
                            nopasaporte: item.cui,
                            direccion: 'na',
                            telefono: 'na',
                            correo: item.correo,
                            llave: _this.navParams.data.record.llave,
                            sexo: 'Maculino',
                            nidentificador: 'DPI',
                            nivelacademico: 'NA',
                            codpersonal: 'NA',
                            dependencia: 'NA',
                            noboletapago: _this.navParams.data.record.noboletapago,
                            estadopago: 'Asignación exitosa',
                            bitacora: { idempresa: _this.idempresa, idafiliado: '', email: _this.username, permiso: 'creat', accion: 'creat' + ' asigna calusac ' }
                        };
                        if (options) {
                            _this.regService.createReg2b('', options, 'asignacalusacs').then(function (result) {
                                var datayy;
                                datayy = result;
                                var options = {
                                    operacion: 'asigna',
                                    carnetcalusac: item.carne,
                                    horario: item.horario._id,
                                    fechax: _this.navParams.data.record.fechasiif,
                                    profesor: item.profesor._id,
                                    bitacora: { idempresa: _this.idempresa, idafiliado: '', email: _this.username, permiso: '', accion: 'creat' + ' asigna calusac ' }
                                };
                                if (options) {
                                    var loading_1 = _this.loadingCtrl.create({
                                        spinner: 'bubbles',
                                        content: "Enviando  Correo electronico  a cuenta: " + item.correo + "  ......"
                                    });
                                    loading_1.present();
                                    _this.regService.createReg(datayy._id, options, 'asignacalusacs').then(function (result) {
                                        var cccc = [];
                                        cccc = result;
                                        var idmm = '111111111111';
                                        if (cccc.idmoodle) {
                                            idmm = cccc.idmoodle;
                                        }
                                        //loading.dismiss();
                                        //http://127.0.0.1:9090/api/siifs/escobar.adoss/Escobar%20Cant%C3%A9/41/asssd@gmail.com/5ea2177d08c34a001e5853ea/3/calusacmoodle
                                        _this.regService.getReg2b(String(cccc.correo).toLowerCase().trim() + '/' + String(cccc.nombre).toLowerCase().trim() + '/' + idmm + '/' + String(cccc.correo).toLowerCase().trim() + '/' + cccc._id + '/' + cccc.idplanifica + '/calusacmoodle', 'siifs').then(function (resultaaa) {
                                            var ress = [];
                                            ress = resultaaa;
                                            var tusuario = '';
                                            var tclave = '';
                                            console.log(resultaaa);
                                            var msg2 = '';
                                            if (ress.estado == 'exitosinusuario') {
                                                msg2 = ' <p><span class="esd-hidden-preheader" style="display: none !important; font-size: 0px; line-height: 0; color: #ffffff; visibility: hidden; opacity: 0; height: 0; width: 0; mso-hide: all;">0</span></p><div class="es-wrapper-color"><table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0"><tbody><tr><td class="esd-email-paddings" valign="top"><table class="es-content esd-footer-popover" cellspacing="0" cellpadding="0" align="center"><tbody><tr><td class="esd-stripe" align="center"><table class="es-content-body" width="600" cellspacing="0" cellpadding="0" align="center" bgcolor="#ffffff"><tbody><tr><td class="esd-structure es-p20" align="left"><table width="100%" cellspacing="0" cellpadding="0"><tbody><tr><td class="esd-container-frame" align="center" valign="top" width="560"><table width="100%" cellspacing="0" cellpadding="0"><tbody><tr><td class="esd-block-image" align="center"><a target="_blank"><img class="adapt-img" style="display: block;" src="http://52.90.195.238:8500/logousac1.png" alt="" width="87" /></a></td></tr><tr><td class="esd-block-text" align="left"><p style="color: #38761d;"><strong>La Universidad de San Carlos de Guatemala y el Rector Ing. Murphy Paiz, </strong></p></td></tr><tr>       <td align="center">                                                <h2><span style="color: #333333;"><strong> Tu asignaci&oacute;n ha sido creada exitosamente.  </strong>  <br> <br>  CARNÉ DE CALUSAC:' + cccc.carnecalusac + ' </span></h2>                                                <blockquote><span style="color: #0000ff;"><span style="color: #333333;"><strong><br /> </strong>Por favor ingresa a la plataforma intitucional usacenlinea <a href="https://usac-enlinea.web.app/">https://usac-enlinea.web.app/</a>&nbsp;e imprime  tu asignaci&oacute;n. </span></span></blockquote>                                                </td>                                                </tr>                                                <tr>                                                <td class="esd-block-text" align="left">                                                 </p></td></tr><tr><td class="esd-block-image" align="center"><a target="_blank"><img class="adapt-img" style="float: left;" src="http://52.90.195.238:8500/logoit.jpg" alt="" width="200" /></a></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></div>';
                                            }
                                            else {
                                                if (ress.estado == 'error') {
                                                    msg2 = ' <p><span class="esd-hidden-preheader" style="display: none !important; font-size: 0px; line-height: 0; color: #ffffff; visibility: hidden; opacity: 0; height: 0; width: 0; mso-hide: all;">0</span></p><div class="es-wrapper-color"><table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0"><tbody><tr><td class="esd-email-paddings" valign="top"><table class="es-content esd-footer-popover" cellspacing="0" cellpadding="0" align="center"><tbody><tr><td class="esd-stripe" align="center"><table class="es-content-body" width="600" cellspacing="0" cellpadding="0" align="center" bgcolor="#ffffff"><tbody><tr><td class="esd-structure es-p20" align="left"><table width="100%" cellspacing="0" cellpadding="0"><tbody><tr><td class="esd-container-frame" align="center" valign="top" width="560"><table width="100%" cellspacing="0" cellpadding="0"><tbody><tr><td class="esd-block-image" align="center"><a target="_blank"><img class="adapt-img" style="display: block;" src="http://52.90.195.238:8500/logousac1.png" alt="" width="87" /></a></td></tr><tr><td class="esd-block-text" align="left"><p style="color: #38761d;"><strong>La Universidad de San Carlos de Guatemala y el Rector Ing. Murphy Paiz, </strong></p></td></tr><tr>       <td align="center">                                                <h2><span style="color: #333333;"><strong> Tu asignaci&oacute;n ha sido creada exitosamente.  </strong>  <br> <br>  CARNÉ DE CALUSAC:' + cccc.carnecalusac + ' , No se puedo generar el link para acceso a la plataforma , por favor comuniquese con el administrador </span></h2>                                                <blockquote><span style="color: #0000ff;"><span style="color: #333333;"><strong><br /> </strong>Por favor ingresa a la plataforma intitucional usacenlinea <a href="https://usac-enlinea.web.app/">https://usac-enlinea.web.app/</a>&nbsp;e imprime  tu asignaci&oacute;n. </span></span></blockquote>                                                </td>                                                </tr>                                                <tr>                                                <td class="esd-block-text" align="left">                                               </p></td></tr><tr><td class="esd-block-image" align="center"><a target="_blank"><img class="adapt-img" style="float: left;" src="http://52.90.195.238:8500/logoit.jpg" alt="" width="200" /></a></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></div>';
                                                }
                                                else {
                                                    tusuario = String(cccc.correo).toLowerCase().trim();
                                                    tclave = ress.password;
                                                    msg2 = ' <p><span class="esd-hidden-preheader" style="display: none !important; font-size: 0px; line-height: 0; color: #ffffff; visibility: hidden; opacity: 0; height: 0; width: 0; mso-hide: all;">0</span></p><div class="es-wrapper-color"><table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0"><tbody><tr><td class="esd-email-paddings" valign="top"><table class="es-content esd-footer-popover" cellspacing="0" cellpadding="0" align="center"><tbody><tr><td class="esd-stripe" align="center"><table class="es-content-body" width="600" cellspacing="0" cellpadding="0" align="center" bgcolor="#ffffff"><tbody><tr><td class="esd-structure es-p20" align="left"><table width="100%" cellspacing="0" cellpadding="0"><tbody><tr><td class="esd-container-frame" align="center" valign="top" width="560"><table width="100%" cellspacing="0" cellpadding="0"><tbody><tr><td class="esd-block-image" align="center"><a target="_blank"><img class="adapt-img" style="display: block;" src="http://52.90.195.238:8500/logousac1.png" alt="" width="87" /></a></td></tr><tr><td class="esd-block-text" align="left"><p style="color: #38761d;"><strong>La Universidad de San Carlos de Guatemala y el Rector Ing. Murphy Paiz, </strong></p></td></tr><tr>       <td align="center">                                                <h2><span style="color: #333333;"><strong> Tu asignaci&oacute;n ha sido creada exitosamente.  </strong>  <br> <br>  CARNÉ DE CALUSAC:' + cccc.carnecalusac + ' <br> URL: https://radd4.virtual.usac.edu.gt/linguisticas/     <br> Usuario: ' + tusuario + '   <br> Contraseña: ' + tclave + ' </span></h2>                                                <blockquote><span style="color: #0000ff;"><span style="color: #333333;"><strong><br /> </strong>Por favor ingresa a la plataforma intitucional usacenlinea <a href="https://usac-enlinea.web.app/">https://usac-enlinea.web.app/</a>&nbsp;e imprime  tu asignaci&oacute;n. </span></span></blockquote>                                                </td>                                                </tr>                                                <tr>                                                <td class="esd-block-text" align="left">                                                </p></td></tr><tr><td class="esd-block-image" align="center"><a target="_blank"><img class="adapt-img" style="float: left;" src="http://52.90.195.238:8500/logoit.jpg" alt="" width="200" /></a></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></div>';
                                                }
                                            }
                                            //    var msg2 = ' <p><span class="esd-hidden-preheader" style="display: none !important; font-size: 0px; line-height: 0; color: #ffffff; visibility: hidden; opacity: 0; height: 0; width: 0; mso-hide: all;">0</span></p><div class="es-wrapper-color"><table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0"><tbody><tr><td class="esd-email-paddings" valign="top"><table class="es-content esd-footer-popover" cellspacing="0" cellpadding="0" align="center"><tbody><tr><td class="esd-stripe" align="center"><table class="es-content-body" width="600" cellspacing="0" cellpadding="0" align="center" bgcolor="#ffffff"><tbody><tr><td class="esd-structure es-p20" align="left"><table width="100%" cellspacing="0" cellpadding="0"><tbody><tr><td class="esd-container-frame" align="center" valign="top" width="560"><table width="100%" cellspacing="0" cellpadding="0"><tbody><tr><td class="esd-block-image" align="center"><a target="_blank"><img class="adapt-img" style="display: block;" src="http://52.90.195.238:8500/logousac1.png" alt="" width="87" /></a></td></tr><tr><td class="esd-block-text" align="left"><p style="color: #38761d;"><strong>La Universidad de San Carlos de Guatemala y el Rector Ing. Murphy Paiz, </strong>te dan&nbsp;la m&aacute;s cordial saludo</p></td></tr><tr>       <td align="center">                                                <h2><span style="color: #333333;"><strong> Tu asignaci&oacute;n a a sido creada exitosamente.  </strong>  <br> <br>  CARNÉ DE CALUSAC:' + cccc.carnecalusac +' <br> URL: https://radd4.virtual.usac.edu.gt/linguisticas/     <br> Usuario:'+tusuario+'   <br> Contraseña: '+ tclave+' </span></h2>                                                <blockquote><span style="color: #0000ff;"><span style="color: #333333;"><strong><br /> </strong>Por favor ingresa a la plataforma intitucional usacenlinea <a href="https://usac-enlinea.web.app/">https://usac-enlinea.web.app/</a>&nbsp;y imprime  tu asignaci&oacute;n. </span></span></blockquote>                                                </td>                                                </tr>                                                <tr>                                                <td class="esd-block-text" align="left">                                                 Core,</p></td></tr><tr><td class="esd-block-image" align="center"><a target="_blank"><img class="adapt-img" style="float: left;" src="http://52.90.195.238:8500/logoit.jpg" alt="" width="200" /></a></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></div>'
                                            var options2 = {
                                                destino: item.correo,
                                                html: msg2,
                                                text: msg2,
                                                subjet: 'Asignación CALUSAC exitosa',
                                                actualiza: { tipo: 'na', id: 123, estado: 'Ingreso, mail enviado',
                                                    otros: '' }
                                            };
                                            _this.regService.mandamail('', options2, 'mails').then(function (data) {
                                                var options = {
                                                    operacion: 'actualizarinfor',
                                                    estado: 'asignado',
                                                    idasigna: datayy._id
                                                };
                                                if (options) {
                                                    _this.regService.createReg(item._id, options, 'conveniocalusacds').then(function (result) {
                                                        _this.pideregistros();
                                                        _this.msj.showError3('Mensaje', 'Operación realizada exitosamente, verifique su correo electrónico.');
                                                        loading_1.dismiss();
                                                    }, function (err) {
                                                        _this.msj.showError3('Error', err.error);
                                                    });
                                                }
                                            }, function (err) {
                                                loading_1.dismiss();
                                                _this.msj.showError3('Error', err.error);
                                            });
                                        });
                                    }, function (err) {
                                        loading_1.dismiss();
                                        _this.msj.showError3('Error', err.error);
                                    });
                                }
                            }, function (err) {
                                _this.msj.showError3('Mensaje', err.error);
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
    ConvenioCalusacdPage.prototype.deleteRecord = function (item, no) {
        var _this = this;
        var alert = this.alertCtrl.create({ title: 'Esta seguro de realizar esta operación?',
            buttons: [
                { text: 'Si',
                    handler: function () {
                        var recordID = item._id;
                        _this.regService.deleteReg(recordID + '/' + _this.username + '/' + _this.idempresa + '/' + _this.idafiliado, 'conveniocalusacds').then(function (data) {
                            _this.pideregistros();
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
    ConvenioCalusacdPage.prototype.updateRecord = function (item, no) {
        var _this = this;
        var addModal = this._MODAL.create('ConvenioCalusacdCreatePage', { record: item, op: this.navParams.data.record.tipo, idgrupo: this.navParams.data.idgrupo, idempresa: this.navParams.data.idempresa }, { showBackdrop: true, enableBackdropDismiss: false });
        addModal.onDidDismiss(function (data) {
            if (data) {
                _this.pideregistros();
            }
        });
        addModal.present();
        //  this.navCtrl.push('EmpresaCreatePage', { record : item });
    };
    ConvenioCalusacdPage.prototype.addRecord = function () {
        var _this = this;
        var addModal = this._MODAL.create('ConvenioCalusacdCreatePage', { record: null, op: this.navParams.data.record.tipo, idgrupo: this.navParams.data.idgrupo, idempresa: this.navParams.data.idempresa }, { showBackdrop: true, enableBackdropDismiss: false });
        addModal.onDidDismiss(function (data) {
            if (data) {
                _this.pideregistros();
            }
        });
        addModal.present();
        //this.navCtrl.push('EmpresaCreatePage');
    };
    ConvenioCalusacdPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-convenio-calusacd',template:/*ion-inline-start:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\CALUSAC\convenio-calusacd\convenio-calusacd.html"*/'<ion-header no-border class="opaque">\n  <ion-navbar   no-border-bottom>\n    <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n  <ion-title>\n      Datos del estudiante\n    </ion-title>\n    <ion-buttons end>\n            <button  title="Refresh" (click)="pideregistros()" icon-only ion-button padding-right>\n            <ion-icon name="refresh"></ion-icon>\n          </button>\n\n\n      </ion-buttons>\n  </ion-navbar>\n  <ion-toolbar no-border-top>\n      <ion-searchbar debounce="2000" (ionCancel)="clearSearchg($event)" [(ngModel)]="gSearchQuery" placeholder="{{ \'NO2_REGISTROS\' | translate }}{{items.length}}]">\n      </ion-searchbar>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content  class="page-eventos-list" padding>\n   <ion-list >\n<h1> TOTAL:  {{total}} </h1>\n\n      <ion-item   *ngFor="let item of items | search: gSearchQuery | LimitPipe: gLimit ;let i = index;" text-wrap>\n        <ion-card >\n              <ion-row>\n                      <ion-col    text-right>\n                              No: {{i+1}}\n                      </ion-col>\n                      <ion-item  text-wrap>\n                        <button ion-item   >\n\n                              <h2> Nombre: {{item.nombre}} </h2>\n                              <p> Correo: {{item.correo}} </p>\n                              <p> CUI/PASAPORTE: {{item.cui}} </p>\n                              <p> Carne CALUSAC: {{item.carne}} </p>\n                              <p> Idioma: {{item.ididioma.nombre}} </p>\n                              <p> Jornada: {{item.jornada.nombre}} </p>\n                              <p> Horario: {{item.horario.nombre}} - {{item.horario.nombre2}} </p>\n                              <p> Profesor: {{item.profesor.nombre}} </p>\n                              <p> Estado: {{item.estado}} </p>\n                        </button>\n                      </ion-item>\n\n\n                      </ion-row>\n              <ion-row no-padding>\n                        <ion-col>\n                          <button  *ngIf="asignacc===\'pagada\' && item.estado===\'creado\'" (click)="deleteRecord(item,i)" ion-button clear small  icon-start>\n                            <ion-icon name=\'md-trash\'></ion-icon>\n                            Eliminar\n                          </button>\n                        </ion-col>\n                        <ion-col>\n                          <button  *ngIf="asignacc===\'pagada\' && item.estado===\'creado\'"  (click)="asigna(item,i)" ion-button clear small  icon-start>\n                            <ion-icon name=\'md-trash\'></ion-icon>\n                            Asigna Curso\n                          </button>\n                        </ion-col>\n                        <ion-col>\n                          <button  *ngIf="asignacc===\'pagada\' && item.estado===\'asignado\'"  (click)="asigna2(item,i)" ion-button clear small  icon-start>\n                            <ion-icon name=\'md-trash\'></ion-icon>\n                            Generar comprobante de asignación\n                          </button>\n                        </ion-col>\n\n\n\n\n                </ion-row>\n\n            </ion-card>\n    </ion-item>\n   </ion-list>\n   <ion-infinite-scroll (ionInfinite)="loadMore($event)">\n      <ion-infinite-scroll-content></ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n\n    <ion-fab bottom right #fab>\n        <button ion-fab  *ngIf="asignacc!==\'ordenpago\'" (click)="addRecord()"><ion-icon name="add"></ion-icon></button>\n\n    </ion-fab>\n\n\n\n</ion-content>\n'/*ion-inline-end:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\CALUSAC\convenio-calusacd\convenio-calusacd.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__providers_pdf_pdfx__["a" /* pdfx */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_2__providers__["d" /* NotificationProvider */], __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers__["a" /* Auth */]])
    ], ConvenioCalusacdPage);
    return ConvenioCalusacdPage;
}());

//# sourceMappingURL=convenio-calusacd.js.map

/***/ }),

/***/ 920:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConvenioCalusacdPageModule", function() { return ConvenioCalusacdPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__convenio_calusacd__ = __webpack_require__(1360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pipes_pipes_module__ = __webpack_require__(445);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ConvenioCalusacdPageModule = /** @class */ (function () {
    function ConvenioCalusacdPageModule() {
    }
    ConvenioCalusacdPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__convenio_calusacd__["a" /* ConvenioCalusacdPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__convenio_calusacd__["a" /* ConvenioCalusacdPage */]), __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild(),
                __WEBPACK_IMPORTED_MODULE_4__pipes_pipes_module__["a" /* PipesModule */]
            ],
        })
    ], ConvenioCalusacdPageModule);
    return ConvenioCalusacdPageModule;
}());

//# sourceMappingURL=convenio-calusacd.module.js.map

/***/ })

});
//# sourceMappingURL=223.js.map