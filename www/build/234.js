webpackJsonp([234],{

/***/ 1354:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Asignacioncalusac2autPage; });
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







var Asignacioncalusac2autPage = /** @class */ (function () {
    //private barcodeScanner:BarcodeScanner,
    function Asignacioncalusac2autPage(viewCtrl, imageViewerCtrl, loadingCtrl, Pdfx, alertCtrl, storage, msj, translateService, navCtrl, navParams, regService) {
        var _this = this;
        this.viewCtrl = viewCtrl;
        this.loadingCtrl = loadingCtrl;
        this.Pdfx = Pdfx;
        this.alertCtrl = alertCtrl;
        this.storage = storage;
        this.msj = msj;
        this.translateService = translateService;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.regService = regService;
        this.loading = true;
        this.items = [];
        this.itemsnotas = [];
        this.items2 = [];
        this.tiposus = [];
        this.siprueba = true;
        this.generated = '';
        this.isDisablednit = true;
        this.gLimit = 50;
        this.PageSegmet = 'foods';
        this.gSearchQuery = '';
        this.username = "";
        this.msg1 = '';
        this.msg2 = '';
        this.excludeTracks = [];
        this._imageViewerCtrl = imageViewerCtrl;
        this.translateService.get('APPX').subscribe(function (value) {
            _this.idempresa = value;
        });
    }
    Asignacioncalusac2autPage.prototype.cancel = function () {
        this.viewCtrl.dismiss();
    };
    Asignacioncalusac2autPage.prototype.presentImage = function (myImage) {
        var imageViewer = this._imageViewerCtrl.create(myImage);
        imageViewer.present();
    };
    Asignacioncalusac2autPage.prototype.clearSearchg = function () {
        this.gSearchQuery = '';
    };
    Asignacioncalusac2autPage.prototype.ngOnInit = function () {
        var _this = this;
        this.regService.getReg2b(this.navParams.data.record._id + '/' + '1/todosautorizaxid', 'asignacalusacs').then(function (data) {
            var aa = [];
            aa = data;
            var bb = [];
            bb = aa.tt2;
            _this.items[0] = aa.tt;
            _this.foto1 = bb.foto1;
            _this.foto2 = bb.foto2;
            _this.foto3 = bb.foto3;
            _this.foto4 = bb.foto4;
        }, function (err) {
            _this.msj.showError3('Error', err.error);
        });
        //  this.items=this.navParams.data.record
        this.descripcionobj = this.navParams.data.record.ultrechazo;
        this.storage.get('username').then(function (value) {
            _this.username = value;
        });
        this.storage.get('tiposus').then(function (value) {
            _this.tiposus = value.split(',');
            _this.cuitt = _this.tiposus[2];
            _this.nov = _this.tiposus[5];
            _this.rol = _this.tiposus[6];
        });
    };
    Asignacioncalusac2autPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        if (this.navParams.data.record.nidentificador === "PASSAPORTE" || this.navParams.data.record.nidentificador === "PASAPORTE") {
            if (this.navParams.data.record.carnecalusac === "") { }
            else {
                this.regService.getReg2b(this.navParams.data.record.carnecalusac + '/2/' + 'nivelcalusac3', 'asignacalusacs').then(function (data) {
                    _this.itemsnotas = data;
                });
            }
        }
        else {
            this.regService.getReg2b(this.navParams.data.record.cui + '/2/' + 'nivelcalusac3', 'asignacalusacs').then(function (data) {
                _this.itemsnotas = data;
            });
        }
        //    this.items=this.navParams.data.record
    };
    Asignacioncalusac2autPage.prototype.loadMore = function (ev) {
        this.gLimit += 50;
        setTimeout(function () { return ev.complete(); }, 1000);
    };
    Asignacioncalusac2autPage.prototype.objetar = function (selectedValue) {
        this.obj = selectedValue;
        var a3 = '';
        var a4 = '';
        var a = '';
        if (this.obj == undefined || this.obj == '') { }
        else {
            a = this.obj + '\n<br>\n';
        }
        if (this.obj3 == undefined || this.obj3 == '') { }
        else {
            a3 = this.obj3 + '\n<br>\n';
        }
        if (this.obj4 == undefined || this.obj4 == '') { }
        else {
            a4 = this.obj4 + '\n<br>\n';
        }
        this.descripcionobj = a + a3 + '\n' + a4;
    };
    Asignacioncalusac2autPage.prototype.objetar3 = function (selectedValue) {
        this.obj3 = selectedValue;
        var a3 = '';
        var a4 = '';
        var a = '';
        if (this.obj == undefined || this.obj == '') { }
        else {
            a = this.obj + '\n<br>\n';
        }
        if (this.obj3 == undefined || this.obj3 == '') { }
        else {
            a3 = this.obj3 + '\n<br>\n';
        }
        if (this.obj4 == undefined || this.obj4 == '') { }
        else {
            a4 = this.obj4 + '\n<br>\n';
        }
        this.descripcionobj = a + a3 + a4;
    };
    Asignacioncalusac2autPage.prototype.objetar4 = function (selectedValue) {
        this.obj4 = selectedValue;
        var a3 = '';
        var a4 = '';
        var a = '';
        if (this.obj == undefined || this.obj == '') { }
        else {
            a = this.obj + '\n<br>\n';
        }
        if (this.obj3 == undefined || this.obj3 == '') { }
        else {
            a3 = this.obj3 + '\n<br>\n';
        }
        if (this.obj4 == undefined || this.obj4 == '') { }
        else {
            a4 = this.obj4 + '\n<br>\n';
        }
        this.descripcionobj = a + a3 + a4;
    };
    Asignacioncalusac2autPage.prototype.imprime = function () {
        var _this = this;
        var alert = this.alertCtrl.create({ title: 'Esta seguro de realizar esta operación?',
            buttons: [
                { text: 'Si',
                    handler: function () {
                        var options = {
                            operacion: 'cambiaestado',
                            estadopago: 'Pendiente de pago',
                            userasignado: _this.items[0].userasignado,
                            userejecutaemail: _this.username,
                            bitacora: { idempresa: _this.idempresa, idafiliado: '', email: _this.username, permiso: 'creat', accion: 'Genera asignación calusac' }
                        };
                        _this.regService.createReg2b(_this.items[0]._id, options, 'asignacalusacs').then(function (result) {
                            // loading.dismiss();
                            var loading = _this.loadingCtrl.create({
                                spinner: 'bubbles',
                                content: "Enviando  Correo electronico  a cuenta: " + _this.items[0].correo + "  ......"
                            });
                            loading.present();
                            var idt = _this.items[0]._id;
                            _this.msg2 = ' <p><span class="esd-hidden-preheader" style="display: none !important; font-size: 0px; line-height: 0; color: #ffffff; visibility: hidden; opacity: 0; height: 0; width: 0; mso-hide: all;">0</span></p><div class="es-wrapper-color"><table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0"><tbody><tr><td class="esd-email-paddings" valign="top"><table class="es-content esd-footer-popover" cellspacing="0" cellpadding="0" align="center"><tbody><tr><td class="esd-stripe" align="center"><table class="es-content-body" width="600" cellspacing="0" cellpadding="0" align="center" bgcolor="#ffffff"><tbody><tr><td class="esd-structure es-p20" align="left"><table width="100%" cellspacing="0" cellpadding="0"><tbody><tr><td class="esd-container-frame" align="center" valign="top" width="560"><table width="100%" cellspacing="0" cellpadding="0"><tbody><tr><td class="esd-block-image" align="center"><a target="_blank"><img class="adapt-img" style="display: block;" src="http://52.90.195.238:8500/logousac1.png" alt="" width="87" /></a></td></tr><tr><td class="esd-block-text" align="left"><p style="color: #38761d;"><strong>La Universidad de San Carlos de Guatemala y el Rector Ing. Murphy Paiz, </strong>te dan&nbsp;la m&aacute;s cordial bienvenida: ' + _this.items[0].nombre + '</p></td></tr><tr>       <td align="center">                                                <h2><span style="color: #333333;"><strong> Tu papelería ha sido aprobada, ingresa a la plataforma <br> <a href="https://usac-enlinea.web.app">https://usac-enlinea.web.app</a> y continúa con tu inscripción. </strong></span></h2>                               </td></tr> <tr>                                                <td class="esd-block-text" align="left">                                                </p></td></tr><tr><td class="esd-block-image" align="center"><a target="_blank"><img class="adapt-img" style="float: left;" src="http://52.90.195.238:8500/logoit.jpg" alt="" width="200" /></a></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></div>';
                            var options2 = {
                                destino: _this.items[0].correo,
                                html: _this.msg2,
                                text: _this.msg2,
                                subjet: 'Correo de autotización de papelería (CALUSAC) ',
                                actualiza: { tipo: 'na', id: idt, estado: 'Ingreso, mail enviado',
                                    otros: '' }
                            };
                            _this.regService.mandamail('', options2, 'mails').then(function (data) {
                                loading.dismiss();
                                _this.msj.showError3('Mensaje', 'Operación realizada con exito');
                                _this.viewCtrl.dismiss(data);
                            }, function (err) {
                                loading.dismiss();
                                //  this.msj.showError3('Error',err.error);
                                _this.msj.showError3('Mensaje', 'Operación realizada con exito');
                                _this.viewCtrl.dismiss(null);
                            });
                        }, function (err) {
                            //loading.dismiss();
                            _this.msj.showError3('Mensaje', err.error);
                            // this.navCtrl.pop();
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
    Asignacioncalusac2autPage.prototype.imprime3 = function () {
        //manda correo
        var _this = this;
        var alert = this.alertCtrl.create({ title: 'Esta seguro de realizar esta operación?',
            buttons: [
                { text: 'Si',
                    handler: function () {
                        var loading = _this.loadingCtrl.create({
                            spinner: 'bubbles',
                            content: "Enviando  Correo electronico  a cuenta: " + _this.items[0].idinterno + "  ......"
                        });
                        loading.present();
                        var idt = _this.items[0]._id;
                        _this.msg2 = ' <p><span class="esd-hidden-preheader" style="display: none !important; font-size: 0px; line-height: 0; color: #ffffff; visibility: hidden; opacity: 0; height: 0; width: 0; mso-hide: all;">0</span></p><div class="es-wrapper-color"><table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0"><tbody><tr><td class="esd-email-paddings" valign="top"><table class="es-content esd-footer-popover" cellspacing="0" cellpadding="0" align="center"><tbody><tr><td class="esd-stripe" align="center"><table class="es-content-body" width="600" cellspacing="0" cellpadding="0" align="center" bgcolor="#ffffff"><tbody><tr><td class="esd-structure es-p20" align="left"><table width="100%" cellspacing="0" cellpadding="0"><tbody><tr><td class="esd-container-frame" align="center" valign="top" width="560"><table width="100%" cellspacing="0" cellpadding="0"><tbody><tr><td class="esd-block-image" align="center"><a target="_blank"><img class="adapt-img" style="display: block;" src="http://52.90.195.238:8500/logousac1.png" alt="" width="87" /></a></td></tr><tr><td class="esd-block-text" align="left"><p style="color: #38761d;"><strong>La Universidad de San Carlos de Guatemala y el Rector Ing. Murphy Paiz, </strong>te dan&nbsp;la m&aacute;s cordial bienvenida: ' + _this.items[0].nombre + '</p></td></tr>   <tr>                      <td style="text-align: left;" align="center"><span style="text-align: left; color: #0000ff;"><span style="color: #0000ff;"><span style="color: #333333;"><br /> Tu papelería ha sido rechazada, no cumple con la siguiente informaci&oacute;n: </span></span></span>                      <h2 style="text-align: left;"><span style="color: #0000ff;"><span style="color: #333333;"><strong>' + _this.descripcionobj + ' <br /> </strong> <br /></span></span></h2>                      <p><span style="color: #0000ff;"><span style="color: #333333;"><br /><br /> Por favor ingresa a nuestra plataforma institucional&nbsp;</span></span><span style="color: #0000ff;"><span style="color: #333333;">https://usac-enlinea.web.app y actualiza tu asignaci&oacute;n de CALUSAC. </span></span></p>                      </td>                      </tr>    <tr>                      <td class="esd-block-text" align="left">                      <p style="color: #38761d;"> </p></td></tr><tr><td class="esd-block-image" align="center"><a target="_blank"><img class="adapt-img" style="float: left;" src="http://52.90.195.238:8500/logoit.jpg" alt="" width="200" /></a></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></div>';
                        var options2 = {
                            destino: _this.items[0].idinterno,
                            html: _this.msg2,
                            text: _this.msg2,
                            subjet: 'Correo de autotización de papelería (CALUSAC)',
                            actualiza: { tipo: 'na', id: idt, estado: 'Ingreso, mail enviado',
                                otros: '' }
                        };
                        _this.regService.mandamail('', options2, 'mails').then(function (data) {
                            loading.dismiss();
                            var options = {
                                operacion: 'mandacomentario',
                                estadopago: _this.descripcionobj,
                                bitacora: { idempresa: _this.idempresa, idafiliado: '', email: _this.username, permiso: 'creat', accion: 'Genera asignación calusac' }
                            };
                            _this.regService.createReg2b(_this.items[0]._id, options, 'asignacalusacs').then(function (result) {
                                _this.msj.showError3('Exito', 'Operación realizada con exito, Hemos enviado correo de rechazo a cuenta: ' + _this.items[0].correo);
                                _this.navCtrl.pop();
                            }, function (err) {
                                _this.navCtrl.pop();
                            });
                        }, function (err) {
                            loading.dismiss();
                            var options = {
                                operacion: 'mandacomentario',
                                estadopago: _this.descripcionobj,
                                bitacora: { idempresa: _this.idempresa, idafiliado: '', email: _this.username, permiso: 'creat', accion: 'Genera asignación calusac' }
                            };
                            _this.regService.createReg2b(_this.items[0]._id, options, 'asignacalusacs').then(function (result) {
                                _this.msj.showError3('Exito', 'Operación realizada con exito, Hemos enviado correo de rechazo a cuenta: ' + _this.items[0].correo);
                                _this.navCtrl.pop();
                            }, function (err) {
                                _this.navCtrl.pop();
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
    Asignacioncalusac2autPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    Asignacioncalusac2autPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-asignacioncalusac2aut',template:/*ion-inline-start:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\CALUSAC\asignacioncalusa2aut\asignacioncalusac2aut.html"*/'\n  <ion-header>\n    <ion-navbar>\n      <ion-title> Autorización Usuario</ion-title>\n      <ion-buttons start>\n          <button (click)="cancel()" icon-only ion-button padding-right>\n              <ion-icon name="md-close"></ion-icon>\n            </button>\n\n      </ion-buttons>\n\n    </ion-navbar>\n  </ion-header>\n  <ion-content   fullscreen>\n\n      <div   *ngFor="let item of items  ;let i = index;" text-wrap>\n\n        <ion-grid>\n          <ion-row>\n            <ion-col col-4>\n                <img  *ngIf="foto1" [src]="foto1"   rel="tooltip" title="Imagen de comprobante de nivel anterior" #myImage (click)="presentImage(myImage)" style=" width: 100px; height: 100px;" item-end>\n\n            </ion-col>\n            <ion-col col-4>\n                <img [src]="foto3" #myImage3 rel="tooltip" title="Imagen de comprobante de documento" (click)="presentImage(myImage3)" style=" width: 100px; height: 100px;" item-end>\n\n            </ion-col>\n\n            <ion-col col-4>\n                <img [src]="foto4" #myImage4  rel="tooltip" title="Imagen de comprobante de documento" (click)="presentImage(myImage4)" style=" width: 100px; height: 100px;" item-end>\n\n\n            </ion-col>\n\n\n          </ion-row>\n        </ion-grid>\n\n        <ion-grid>\n          <ion-row>\n            <ion-col col-8>\n              <ion-avatar item-start>\n                <img [src]="foto2"  rel="tooltip" id="profile-image" title="Imagen de perfil" (click)="presentImage(myImage2)" style=" width: 100px; height: 100px;"  >\n               </ion-avatar>\n\n               <div class="splash-info">\n                  {{item.nombre}} ({{item.tipoa}} )\n                  <br>\n                  Direccion: {{item.direccion}}\n                  <br>\n                  Telefono: {{item.telefono}}\n                  <br>\n                  Identificador: {{item.identificador}}\n\n                </div>\n\n                <h1>ASIGNACIÓN {{item.estadopago}}</h1>\n\n                <div class="splash-info2">\n\n\n                  Nivel: {{item.tipopago.nombre}} -- Costo {{item.tipopago.costo}} <br>\n                  Tipo Asignación: {{item.tipoa}} <br>\n                  Unidad Academica: {{item.idtipounidad.nombre}} <br>\n                  Curso: {{item.idunidadacademica.nombre}}<br>\n\n                  Periodo: {{item.idperiodo.nombre}} <br>\n\n                  <h2  *ngIf="(item.tipoa==\'Extranjero\' || item.tipoa==\'Extranjerocentroamericano\' ) || item.nidentificador==\'PASAPORTE\'"> PASAPORTE: {{item.identificador}} </h2>\n                  <h2  *ngIf="(item.tipoa==\'Extranjero\' || item.tipoa==\'Extranjerocentroamericano\' )&&  item.nidentificador!==\'PASAPORTE\'"> CUI: {{item.cui}} </h2>\n\n                  Nombre: {{item.nombre}} <br>\n                  Direccion: {{item.direccion}} <br>\n                  Telefono: {{item.telefono}} <br>\n                  No orden pago: {{item.noboletapago}} <br>\n\n                  </div>\n\n\n                  Ultimo rechazo: {{item.ultrechazo}}\n\n\n            </ion-col>\n            <ion-col col-4>\n\n              <ion-item    *ngFor="let item of itemsnotas" text-wrap>\n\n                <ion-card >\n                        <ion-item text-wrap>\n                          <h2>Curso: {{item.idasigna.idunidadacademica.nombre}}  </h2>\n                            <h2>Nivel: {{item.tipopago.nombre}}  </h2>\n                            <h2> Idioma:{{item.ididioma.nombre}}</h2>\n                            <h2>Nota final : {{item.n5}}</h2>\n                            <h2>Estado : {{item.estado}}</h2>\n\n\n\n                          </ion-item>\n\n\n\n                        </ion-card>\n\n\n\n\n      </ion-item>\n\n            </ion-col>\n\n\n\n\n          </ion-row>\n        </ion-grid>\n\n\n\n\n\n\n\n\n\n\n\n     <ion-list >\n        <div class="wrapper" text-center>\n                <div class="wrapper" >\n                    <div class="box yellow" text-center>\n                        <ion-row class="header">\n                            <ion-col col-8 class="button-container">\n                                <h3>Constancia de nota o Constancia de ubicación</h3>\n                            </ion-col>\n                        </ion-row>\n                        <ion-row>\n                            <ion-col col-12>\n                                <img  #myImage1 (click)="presentImage(myImage1)"  src="{{foto1}}" style="width:200px;height: 200px;     ">\n                                      </ion-col>\n                                      <ion-col col-12>\n                                          <ion-item margin-bottom>\n                                              <ion-label>Objetar</ion-label>\n                                              <ion-select  (ionChange)="objetar($event)"  [(ngModel)]="objetar1" >\n                                                <ion-option value="Constancia de nota o ubicación ilegible">Constancia de nota o Constancia de ubicación ilegible</ion-option>\n                                                <ion-option value="Constancia de nota o ubicación no valido">Constancia de nota o Constancia de ubicación no valido</ion-option>\n                                              </ion-select>\n\n                                           </ion-item>\n\n\n\n                                      </ion-col>\n                        </ion-row>\n                     </div>\n                </div>\n                <div class="wrapper" text-center>\n                    <div class="wrapper" >\n                        <div class="box yellow" text-center>\n                            <ion-row class="header">\n                                <ion-col col-8 class="button-container">\n                                    <h3>Comprobante de identificación {{item.nidentificador}}</h3>\n                                </ion-col>\n                            </ion-row>\n                            <ion-row>\n                                <ion-col col-12>\n                                    <img  #myImage3 (click)="presentImage(myImage3)"  src="{{foto3}}" style="width:200px;height: 200px;     ">\n                                </ion-col>\n                                <ion-col col-12>\n                                    <ion-item margin-bottom>\n                                        <ion-label>Objetar</ion-label>\n                                        <ion-select  (ionChange)="objetar3($event)"   >\n                                          <ion-option value="Comprobante de identificación ilegible">Comprobante de identificación ilegible</ion-option>\n                                          <ion-option value="Comprobante de identificación no valido">Comprobante de identificación no valido</ion-option>\n                                        </ion-select>\n\n                                     </ion-item>\n\n\n\n                                </ion-col>\n\n                            </ion-row>\n                         </div>\n                    </div>\n            </div>\n\n\n            <div class="wrapper" text-center>\n                <div class="wrapper" >\n                    <div class="box yellow" text-center>\n                        <ion-row class="header">\n                            <ion-col col-8 class="button-container">\n                                <h3>Comprobante de Documentación</h3>\n                            </ion-col>\n                        </ion-row>\n                        <ion-row>\n                            <ion-col col-12>\n                                <img  #myImage4 (click)="presentImage(myImage4)"  src="{{foto4}}" style="width:200px;height: 200px;     ">\n                                      </ion-col>\n                                      <ion-col col-12>\n                                          <ion-item margin-bottom>\n                                              <ion-label>Objetar</ion-label>\n                                              <ion-select  (ionChange)="objetar4($event)"  >\n                                                <ion-option value="Comprobante de Documentación ilegible">Comprobante de Documentación ilegible</ion-option>\n                                                <ion-option value="Comprobante de Documentación no valido">Comprobante de Documentación no valido</ion-option>\n                                              </ion-select>\n\n                                           </ion-item>\n\n\n\n                                      </ion-col>\n                        </ion-row>\n                     </div>\n                </div>\n        </div>\n\n\n\n        <div class="wrapper" text-center>\n            <div class="wrapper" >\n                <div class="box yellow" text-center>\n                    <ion-row class="header">\n                        <ion-col col-8 class="button-container">\n                            <h3>OBJETAR</h3>\n                        </ion-col>\n                    </ion-row>\n                    <ion-row>\n                        <ion-col col-12>\n                            <ion-label>Descripción </ion-label>\n            <ion-textarea\n               type="text" rows="5"\n               [(ngModel)]="descripcionobj"\n              ></ion-textarea>\n                                  </ion-col>\n                                  <ion-col col-12>\n                                      <button ion-button color="danger"  (click)="imprime3()" full>     Objetar\n                                        </button>\n\n\n\n                                  </ion-col>\n                    </ion-row>\n                 </div>\n            </div>\n    </div>\n\n\n        </div>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n     </ion-list>\n\n     <button ion-button color="secundary"  (click)="imprime()" full>      Autorizar Asignación\n      </button>\n      </div>\n\n\n\n     <ion-infinite-scroll (ionInfinite)="loadMore($event)">\n        <ion-infinite-scroll-content></ion-infinite-scroll-content>\n      </ion-infinite-scroll>\n\n\n  </ion-content>\n'/*ion-inline-end:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\CALUSAC\asignacioncalusa2aut\asignacioncalusac2aut.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["F" /* ViewController */], __WEBPACK_IMPORTED_MODULE_6_ionic_img_viewer__["a" /* ImageViewerController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_5__providers_pdf_pdfx__["a" /* pdfx */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_2__providers__["d" /* NotificationProvider */], __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers__["a" /* Auth */]])
    ], Asignacioncalusac2autPage);
    return Asignacioncalusac2autPage;
}());

//# sourceMappingURL=asignacioncalusac2aut.js.map

/***/ }),

/***/ 914:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsignacioncalusacPageModule", function() { return AsignacioncalusacPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__asignacioncalusac2aut__ = __webpack_require__(1354);
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
                __WEBPACK_IMPORTED_MODULE_2__asignacioncalusac2aut__["a" /* Asignacioncalusac2autPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__asignacioncalusac2aut__["a" /* Asignacioncalusac2autPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild(),
                __WEBPACK_IMPORTED_MODULE_4__pipes_pipes_module__["a" /* PipesModule */]
            ],
        })
    ], AsignacioncalusacPageModule);
    return AsignacioncalusacPageModule;
}());

//# sourceMappingURL=asignacioncalusac2aut.module.js.map

/***/ })

});
//# sourceMappingURL=234.js.map