webpackJsonp([231],{

/***/ 1356:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Asignacioncalusac2CreatePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(104);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var Asignacioncalusac2CreatePage = /** @class */ (function () {
    function Asignacioncalusac2CreatePage(alertCtrl, loadingCtrl, storage, msj, translateService, viewCtrl, authService, navCtrl, navParams, _FB, actionSheetCtrl, events) {
        var _this = this;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.msj = msj;
        this.translateService = translateService;
        this.viewCtrl = viewCtrl;
        this.authService = authService;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._FB = _FB;
        this.actionSheetCtrl = actionSheetCtrl;
        this.events = events;
        this.username = "";
        this.sexos = ['Masculino', 'Femenino'];
        this.nacademicos = ['Primaria', 'Secundaria', 'Diversificado', 'Titulo Universitario'];
        this.tiposus = [];
        this.idhorario2 = [];
        this.iddia2 = [];
        this.idprofesor2 = [];
        this.sinivel = '0';
        this.exonerado = 'no';
        this.items = [];
        this.dataxx = [];
        this.resultado = [];
        this.vhorario = [];
        this.vdia = [];
        this.vprofesor = [];
        this.vgrupo3 = [];
        this.translateService.get('APPX').subscribe(function (value) {
            _this.idempresa = value;
        });
        this.form = this._FB.group({
            horario: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            profesor: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required]
        });
        this.titulo2 = 'una unidad académica';
    }
    Asignacioncalusac2CreatePage.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get('username').then(function (value) {
            _this.username = value;
        });
        this.storage.get('tiposus').then(function (value) {
            _this.tiposus = value.split(',');
        });
    };
    Asignacioncalusac2CreatePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.dataxx = this.navParams.data.datax;
        this.fechax = this.navParams.data.fechax;
        this.exonerado = this.navParams.data.exonerado;
        this.authService.getReg2b(this.dataxx.idtipounidad.id + '/' + this.dataxx.idunidadacademica.id + '/' + this.dataxx.idperiodo.id + '/' + this.dataxx.jornada._id + '°' + this.dataxx.nivel._id + '/horarios', 'unidadplan3s').then(function (result) {
            _this.vhorario = result;
        }, function (err) {
            _this.msj.showError3('Error', err.error);
        });
        if (this.navParams.data.op == 'Estudiante') {
        }
        this.titulo2 = 'Asignación ' + this.navParams.data.op;
    };
    Asignacioncalusac2CreatePage.prototype.manageGallery2 = function (loading) {
        var _this = this;
        var creat = 'Actualiza';
        if (this.username == '') {
            this.msj.showError3('Mensaje', 'Existe un problema con su dispositivo , no existe usuario');
            loading.dismiss();
            return;
        }
        if (!this.username) {
            this.msj.showError3('Mensaje', 'Existe un problema con su dispositivo , no existe usuario');
            loading.dismiss();
            return;
        }
        if (this.navParams.get("record") == null) {
            creat = 'Crea';
        }
        var carnetcca = '';
        if (this.dataxx.carnecalusac) {
            carnetcca = this.dataxx.carnecalusac;
        }
        if (this.dataxx.carnecalusac != '') {
            carnetcca = this.dataxx.carnecalusac;
        }
        var options = {
            operacion: 'asigna',
            carnetcalusac: carnetcca,
            exonerado: this.exonerado,
            horario: this.idhorario2[0],
            fechax: this.fechax,
            profesor: this.idprofesor2[0],
            bitacora: { idempresa: this.idempresa, idafiliado: '', email: this.username, permiso: creat, accion: creat + ' asigna calusac ' }
        };
        loading.dismiss();
        if (options) {
            var loading_1 = this.loadingCtrl.create({
                spinner: 'bubbles',
                content: "Enviando  Correo electronico  a cuenta: " + this.items.correo + "  ......"
            });
            loading_1.present();
            this.authService.createReg(this.dataxx._id, options, 'asignacalusacs').then(function (result) {
                if (!_this.form.valid) {
                    return;
                }
                var cccc = [];
                cccc = result;
                var idmm = '111111111111';
                if (cccc.idmoodle) {
                    idmm = cccc.idmoodle;
                }
                //loading.dismiss();
                //http://127.0.0.1:9090/api/siifs/escobar.adoss/Escobar%20Cant%C3%A9/41/asssd@gmail.com/5ea2177d08c34a001e5853ea/3/calusacmoodle
                _this.authService.getReg2b(String(cccc.correo).toLowerCase().trim() + '/' + String(cccc.nombre).toLowerCase().trim() + '/' + idmm + '/' + String(cccc.correo).toLowerCase().trim() + '/' + cccc._id + '/' + cccc.idplanifica + '/calusacmoodle2p', 'siifs').then(function (resultaaa) {
                    if (!_this.form.valid) {
                        return;
                    }
                    var ress = [];
                    ress = resultaaa;
                    var tusuario = '';
                    var tclave = '';
                    var ttype2 = '';
                    var msg2 = '';
                    if (ress.estado == 'exitosinusuario') {
                        msg2 = ' <p><span class="esd-hidden-preheader" style="display: none !important; font-size: 0px; line-height: 0; color: #ffffff; visibility: hidden; opacity: 0; height: 0; width: 0; mso-hide: all;">0</span></p><div class="es-wrapper-color"><table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0"><tbody><tr><td class="esd-email-paddings" valign="top"><table class="es-content esd-footer-popover" cellspacing="0" cellpadding="0" align="center"><tbody><tr><td class="esd-stripe" align="center"><table class="es-content-body" width="600" cellspacing="0" cellpadding="0" align="center" bgcolor="#ffffff"><tbody><tr><td class="esd-structure es-p20" align="left"><table width="100%" cellspacing="0" cellpadding="0"><tbody><tr><td class="esd-container-frame" align="center" valign="top" width="560"><table width="100%" cellspacing="0" cellpadding="0"><tbody><tr><td class="esd-block-image" align="center"><a target="_blank"><img class="adapt-img" style="display: block;" src="http://52.90.195.238:8500/logousac1.png" alt="" width="87" /></a></td></tr><tr><td class="esd-block-text" align="left"><p style="color: #38761d;"><strong>La Universidad de San Carlos de Guatemala y el Rector Ing. Murphy Paiz, </strong></p></td></tr><tr>       <td align="center">                                                <h2><span style="color: #333333;"><strong> Tu asignaci&oacute;n ha sido creada exitosamente.  </strong>  <br> <br>  CARNÉ DE CALUSAC:' + cccc.carnecalusac + ' </span></h2>                                                <blockquote><span style="color: #0000ff;"><span style="color: #333333;"><strong><br /> </strong>Por favor ingresa a la plataforma intitucional usacenlinea <a href="https://usac-enlinea.web.app/">https://usac-enlinea.web.app/</a>&nbsp;e imprime  tu asignaci&oacute;n. </span></span></blockquote>                                                </td>                                                </tr>                                                <tr>                                                <td class="esd-block-text" align="left">                                                 </p></td></tr><tr><td class="esd-block-image" align="center"><a target="_blank"><img class="adapt-img" style="float: left;" src="http://52.90.195.238:8500/logoit.jpg" alt="" width="200" /></a></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></div>';
                    }
                    else {
                        if (ress.estado == 'error') {
                            msg2 = ' <p><span class="esd-hidden-preheader" style="display: none !important; font-size: 0px; line-height: 0; color: #ffffff; visibility: hidden; opacity: 0; height: 0; width: 0; mso-hide: all;">0</span></p><div class="es-wrapper-color"><table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0"><tbody><tr><td class="esd-email-paddings" valign="top"><table class="es-content esd-footer-popover" cellspacing="0" cellpadding="0" align="center"><tbody><tr><td class="esd-stripe" align="center"><table class="es-content-body" width="600" cellspacing="0" cellpadding="0" align="center" bgcolor="#ffffff"><tbody><tr><td class="esd-structure es-p20" align="left"><table width="100%" cellspacing="0" cellpadding="0"><tbody><tr><td class="esd-container-frame" align="center" valign="top" width="560"><table width="100%" cellspacing="0" cellpadding="0"><tbody><tr><td class="esd-block-image" align="center"><a target="_blank"><img class="adapt-img" style="display: block;" src="http://52.90.195.238:8500/logousac1.png" alt="" width="87" /></a></td></tr><tr><td class="esd-block-text" align="left"><p style="color: #38761d;"><strong>La Universidad de San Carlos de Guatemala y el Rector Ing. Murphy Paiz, </strong></p></td></tr><tr>       <td align="center">                                                <h2><span style="color: #333333;"><strong> Tu asignaci&oacute;n ha sido creada exitosamente.  </strong>  <br> <br>  CARNÉ DE CALUSAC:' + cccc.carnecalusac + ' , No se puedo generar el link para acceso a la plataforma , por favor comuniquese con el administrador </span></h2>                                                <blockquote><span style="color: #0000ff;"><span style="color: #333333;"><strong><br /> </strong>Por favor ingresa a la plataforma intitucional usacenlinea <a href="https://usac-enlinea.web.app/">https://usac-enlinea.web.app/</a>&nbsp;e imprime  tu asignaci&oacute;n. </span></span></blockquote>                                                </td>                                                </tr>                                                <tr>                                                <td class="esd-block-text" align="left">                                               </p></td></tr><tr><td class="esd-block-image" align="center"><a target="_blank"><img class="adapt-img" style="float: left;" src="http://52.90.195.238:8500/logoit.jpg" alt="" width="200" /></a></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></div>';
                        }
                        else {
                            tusuario = cccc.noboletapago;
                            tclave = ress.password;
                            ttype2 = ress.type;
                            if (ttype2 == '0') {
                                msg2 = ' <p><span class="esd-hidden-preheader" style="display: none !important; font-size: 0px; line-height: 0; color: #ffffff; visibility: hidden; opacity: 0; height: 0; width: 0; mso-hide: all;">0</span></p><div class="es-wrapper-color"><table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0"><tbody><tr><td class="esd-email-paddings" valign="top"><table class="es-content esd-footer-popover" cellspacing="0" cellpadding="0" align="center"><tbody><tr><td class="esd-stripe" align="center"><table class="es-content-body" width="600" cellspacing="0" cellpadding="0" align="center" bgcolor="#ffffff"><tbody><tr><td class="esd-structure es-p20" align="left"><table width="100%" cellspacing="0" cellpadding="0"><tbody><tr><td class="esd-container-frame" align="center" valign="top" width="560"><table width="100%" cellspacing="0" cellpadding="0"><tbody><tr><td class="esd-block-image" align="center"><a target="_blank"><img class="adapt-img" style="display: block;" src="http://52.90.195.238:8500/logousac1.png" alt="" width="87" /></a></td></tr><tr><td class="esd-block-text" align="left"><p style="color: #38761d;"><strong>La Universidad de San Carlos de Guatemala y el Rector Ing. Murphy Paiz, </strong></p></td></tr><tr>       <td align="center">                                                <h2><span style="color: #333333;"><strong> Tu asignaci&oacute;n ha sido creada exitosamente.  </strong>  <br> <br>  CARNÉ DE CALUSAC:' + cccc.carnecalusac + ' <br> URL: https://calusacvirtual.usac.edu.gt/mod     <br> Usuario: ' + tusuario + '   <br> Contraseña: ' + tclave + ' </span></h2>                                                <blockquote><span style="color: #0000ff;"><span style="color: #333333;"><strong><br /> </strong>Por favor ingresa a la plataforma intitucional usacenlinea <a href="https://usac-enlinea.web.app/">https://usac-enlinea.web.app/</a>&nbsp;e imprime  tu asignaci&oacute;n. </span></span></blockquote>                                                </td>                                                </tr>                                                <tr>                                                <td class="esd-block-text" align="left">                                                </p></td></tr><tr><td class="esd-block-image" align="center"><a target="_blank"><img class="adapt-img" style="float: left;" src="http://52.90.195.238:8500/logoit.jpg" alt="" width="200" /></a></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></div>';
                            }
                            else {
                                msg2 = ' <p><span class="esd-hidden-preheader" style="display: none !important; font-size: 0px; line-height: 0; color: #ffffff; visibility: hidden; opacity: 0; height: 0; width: 0; mso-hide: all;">0</span></p><div class="es-wrapper-color"><table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0"><tbody><tr><td class="esd-email-paddings" valign="top"><table class="es-content esd-footer-popover" cellspacing="0" cellpadding="0" align="center"><tbody><tr><td class="esd-stripe" align="center"><table class="es-content-body" width="600" cellspacing="0" cellpadding="0" align="center" bgcolor="#ffffff"><tbody><tr><td class="esd-structure es-p20" align="left"><table width="100%" cellspacing="0" cellpadding="0"><tbody><tr><td class="esd-container-frame" align="center" valign="top" width="560"><table width="100%" cellspacing="0" cellpadding="0"><tbody><tr><td class="esd-block-image" align="center"><a target="_blank"><img class="adapt-img" style="display: block;" src="http://52.90.195.238:8500/logousac1.png" alt="" width="87" /></a></td></tr><tr><td class="esd-block-text" align="left"><p style="color: #38761d;"><strong>La Universidad de San Carlos de Guatemala y el Rector Ing. Murphy Paiz, </strong></p></td></tr><tr>       <td align="center">                                                <h2><span style="color: #333333;"><strong> Tu asignaci&oacute;n ha sido creada exitosamente.  </strong>  <br> <br>  CARNÉ DE CALUSAC:' + cccc.carnecalusac + ' <br> URL: https://calusacvirtual.usac.edu.gt/mod   </h2>                                                <blockquote><span style="color: #0000ff;"><span style="color: #333333;"><strong><br /> </strong>Por favor ingresa a la plataforma intitucional usacenlinea <a href="https://usac-enlinea.web.app/">https://usac-enlinea.web.app/</a>&nbsp;e imprime  tu asignaci&oacute;n. </span></span></blockquote>                                                </td>                                                </tr>                                                <tr>                                                <td class="esd-block-text" align="left">                                                </p></td></tr><tr><td class="esd-block-image" align="center"><a target="_blank"><img class="adapt-img" style="float: left;" src="http://52.90.195.238:8500/logoit.jpg" alt="" width="200" /></a></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></div>';
                            }
                        }
                    }
                    //    var msg2 = ' <p><span class="esd-hidden-preheader" style="display: none !important; font-size: 0px; line-height: 0; color: #ffffff; visibility: hidden; opacity: 0; height: 0; width: 0; mso-hide: all;">0</span></p><div class="es-wrapper-color"><table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0"><tbody><tr><td class="esd-email-paddings" valign="top"><table class="es-content esd-footer-popover" cellspacing="0" cellpadding="0" align="center"><tbody><tr><td class="esd-stripe" align="center"><table class="es-content-body" width="600" cellspacing="0" cellpadding="0" align="center" bgcolor="#ffffff"><tbody><tr><td class="esd-structure es-p20" align="left"><table width="100%" cellspacing="0" cellpadding="0"><tbody><tr><td class="esd-container-frame" align="center" valign="top" width="560"><table width="100%" cellspacing="0" cellpadding="0"><tbody><tr><td class="esd-block-image" align="center"><a target="_blank"><img class="adapt-img" style="display: block;" src="http://52.90.195.238:8500/logousac1.png" alt="" width="87" /></a></td></tr><tr><td class="esd-block-text" align="left"><p style="color: #38761d;"><strong>La Universidad de San Carlos de Guatemala y el Rector Ing. Murphy Paiz, </strong>te dan&nbsp;la m&aacute;s cordial saludo</p></td></tr><tr>       <td align="center">                                                <h2><span style="color: #333333;"><strong> Tu asignaci&oacute;n a a sido creada exitosamente.  </strong>  <br> <br>  CARNÉ DE CALUSAC:' + cccc.carnecalusac +' <br> URL: https://radd4.virtual.usac.edu.gt/linguisticas/     <br> Usuario:'+tusuario+'   <br> Contraseña: '+ tclave+' </span></h2>                                                <blockquote><span style="color: #0000ff;"><span style="color: #333333;"><strong><br /> </strong>Por favor ingresa a la plataforma intitucional usacenlinea <a href="https://usac-enlinea.web.app/">https://usac-enlinea.web.app/</a>&nbsp;y imprime  tu asignaci&oacute;n. </span></span></blockquote>                                                </td>                                                </tr>                                                <tr>                                                <td class="esd-block-text" align="left">                                                 Core,</p></td></tr><tr><td class="esd-block-image" align="center"><a target="_blank"><img class="adapt-img" style="float: left;" src="http://52.90.195.238:8500/logoit.jpg" alt="" width="200" /></a></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></div>'
                    var options2 = {
                        destino: _this.dataxx.correo,
                        html: msg2,
                        text: msg2,
                        subjet: 'Asignación CALUSAC exitosa',
                        actualiza: { tipo: 'na', id: 123, estado: 'Ingreso, mail enviado',
                            otros: '' }
                    };
                    _this.authService.mandamail('', options2, 'mails').then(function (data) {
                        loading_1.dismiss();
                        _this.msj.showError3('Mensaje', 'Operación realizada exitosamente, verifique su correo electrónico.');
                        _this.viewCtrl.dismiss(result);
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
    };
    Asignacioncalusac2CreatePage.prototype.manageGallery = function () {
        var _this = this;
        if (this.username == '') {
            this.msj.showError3('Mensaje', 'Existe un problema con su dispositivo , no existe usuario');
            return;
        }
        if (!this.username) {
            this.msj.showError3('Mensaje', 'Existe un problema con su dispositivo , no existe usuario');
            return;
        }
        if (this.idprofesor2 == undefined) {
            this.msj.showError3('Mensaje', 'Seleccione un profesor valido');
            return;
        }
        if (!this.idprofesor2[0]) {
            this.msj.showError3('Mensaje', 'Seleccione un profesor valido');
            return;
        }
        if (this.idhorario2 == undefined) {
            this.msj.showError3('Mensaje', 'Seleccione un horario valido');
            return;
        }
        if (!this.idhorario2[0]) {
            this.msj.showError3('Mensaje', 'Seleccione un horario valido');
            return;
        }
        var alert = this.alertCtrl.create({ title: '¿ Está seguro de realizar asignación ?',
            buttons: [
                { text: 'Si',
                    handler: function () {
                        var loading = _this.loadingCtrl.create({
                            spinner: 'bubbles',
                            content: "Espere un momento,  Realizando  Operación ......"
                        });
                        loading.present();
                        _this.manageGallery2(loading);
                        //  // t
                    }
                },
                {
                    text: 'No', handler: function () { }
                }
            ]
        });
        alert.present();
    };
    Asignacioncalusac2CreatePage.prototype.cancel2 = function () {
        this.tipounidad = '';
        this.items = [];
    };
    Asignacioncalusac2CreatePage.prototype.cancel = function () {
        this.viewCtrl.dismiss();
    };
    Asignacioncalusac2CreatePage.prototype.done = function () {
        if (!this.form.valid) {
            return;
        }
        //this.viewCtrl.dismiss(this.form.value);
    };
    Asignacioncalusac2CreatePage.prototype.onSelectChange5 = function (selectedValue) {
        var _this = this;
        this.idhorario2 = selectedValue.split(',');
        this.authService.getReg2b(this.dataxx.idtipounidad.id + '/' + this.dataxx.idunidadacademica.id + '/' + this.dataxx.idperiodo.id + '/' + this.dataxx.nivel._id + '°' + this.idhorario2[0] + '°' + this.dataxx.jornada._id + '/profesores', 'unidadplan3s').then(function (result) {
            _this.vprofesor = result;
        }, function (err) {
            _this.msj.showError3('Error', err.error);
        });
        //filtrar los profesores
    };
    Asignacioncalusac2CreatePage.prototype.onSelectChange6 = function (selectedValue) {
        this.iddia2 = selectedValue.split(',');
    };
    Asignacioncalusac2CreatePage.prototype.onSelectChange7 = function (selectedValue) {
        this.idprofesor2 = selectedValue.split(',');
    };
    Asignacioncalusac2CreatePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-asignacioncalusac2-create',template:/*ion-inline-start:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\CALUSAC\asignacioncalusac2-create\asignacioncalusac2-create.html"*/'<ion-header>\n    <ion-navbar>\n      <ion-title>{{titulo2}}</ion-title>\n      <ion-buttons start>\n          <button (click)="cancel()" icon-only ion-button padding-right>\n              <ion-icon name="md-close"></ion-icon>\n            </button>\n\n      </ion-buttons>\n\n    </ion-navbar>\n  </ion-header>\n  <ion-content padding>\n    <form     [formGroup]="form"   text-wrap>\n      <ion-list>\n\n\n\n\n\n\n\n<ion-item margin-bottom text-wrap>\n  <ion-label class="my-label18" color="secondary2"  stacked>Seleccione horario</ion-label>\n\n<ion-select (ionChange)="onSelectChange5($event)" [(ngModel)]="horario" [formControl]="form.controls[\'horario\']">\n    <ion-option text-wrap *ngFor="let item of vhorario" [value]="item._id+\',\'+item.nombre+\',\'+item.codigo" >{{item.nombre}} - {{item.nombre2}} > {{item.dia}} </ion-option>\n</ion-select>\n\n\n</ion-item>\n\n<ion-item class="invalid" *ngIf="!form.controls.horario.valid\n&& (form.controls.horario.dirty || form.controls.horario.touched)" text-wrap>\n    <ion-icon name="warning"></ion-icon>\n    Ingrese una horario valido\n</ion-item>\n\n\n\n\n<ion-item margin-bottom text-wrap>\n  <ion-label class="my-label18" color="secondary2"  stacked>Seleccione profesor</ion-label>\n\n<ion-select (ionChange)="onSelectChange7($event)" [(ngModel)]="profesor" [formControl]="form.controls[\'profesor\']">\n    <ion-option text-wrap *ngFor="let item of vprofesor" [value]="item._id+\',\'+item.nombre+\',\'+item.codigo" >{{item.nombre}} </ion-option>\n</ion-select>\n\n\n</ion-item>\n\n<ion-item class="invalid" *ngIf="!form.controls.profesor.valid\n&& (form.controls.profesor.dirty || form.controls.profesor.touched)" text-wrap>\n    <ion-icon name="warning"></ion-icon>\n    Ingrese una profesor valido\n</ion-item>\n\n\n\n\n\n\n          <ion-row >\n              <ion-col text-center>\n                <button  ion-button block color="secondary"    [disabled]="!form.valid"  (click)="manageGallery()" strong>\n                 Asignar\n                </button>\n              </ion-col>\n            </ion-row>\n\n\n\n\n       </ion-list>\n    </form>\n\n\n  </ion-content>\n'/*ion-inline-end:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\CALUSAC\asignacioncalusac2-create\asignacioncalusac2-create.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3__providers__["d" /* NotificationProvider */], __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["F" /* ViewController */], __WEBPACK_IMPORTED_MODULE_3__providers__["a" /* Auth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */]])
    ], Asignacioncalusac2CreatePage);
    return Asignacioncalusac2CreatePage;
}());

//# sourceMappingURL=asignacioncalusac2-create.js.map

/***/ }),

/***/ 916:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsignacioncalusacCreatePageModule", function() { return AsignacioncalusacCreatePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__asignacioncalusac2_create__ = __webpack_require__(1356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AsignacioncalusacCreatePageModule = /** @class */ (function () {
    function AsignacioncalusacCreatePageModule() {
    }
    AsignacioncalusacCreatePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__asignacioncalusac2_create__["a" /* Asignacioncalusac2CreatePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__asignacioncalusac2_create__["a" /* Asignacioncalusac2CreatePage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], AsignacioncalusacCreatePageModule);
    return AsignacioncalusacCreatePageModule;
}());

//# sourceMappingURL=asignacioncalusac2-create.module.js.map

/***/ })

});
//# sourceMappingURL=231.js.map