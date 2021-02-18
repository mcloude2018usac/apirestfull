webpackJsonp([39],{

/***/ 1113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageModule", function() { return SignupPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signup__ = __webpack_require__(1569);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SignupPageModule = /** @class */ (function () {
    function SignupPageModule() {
    }
    SignupPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__signup__["a" /* SignupPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["q" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__signup__["a" /* SignupPage */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__signup__["a" /* SignupPage */]
            ]
        })
    ], SignupPageModule);
    return SignupPageModule;
}());

//# sourceMappingURL=signup.module.js.map

/***/ }),

/***/ 1569:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(104);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








//import { CuiValidator } from  '../../providers/validaciones/cui';
//import { CelValidator } from  '../../providers/validaciones/cel';
var SignupPage = /** @class */ (function () {
    function SignupPage(navParams, camera, _IMAGE, actionSheetCtrl, storage, events, formBuilder, navCtrl, authService, alertCtrl, loadingCtrl, toastCtrl, msj, translateService) {
        this.navParams = navParams;
        this.camera = camera;
        this._IMAGE = _IMAGE;
        this.actionSheetCtrl = actionSheetCtrl;
        this.storage = storage;
        this.events = events;
        this.formBuilder = formBuilder;
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.msj = msj;
        this.translateService = translateService;
        this.pofilel = './assets/img/profilelocal.png';
        this.ocultaxx = false;
        this.APP = '';
        this.msg1 = '';
        this.msg2 = '';
        this.ocultaxx2 = true;
        this.seleccionaopcion = '';
        this.tiposus = '5be1b6479c9f2200e8311570';
        this.passwordType = 'password';
        this.cuirr = '';
        this.codcarrera = '';
        this.passwordIcon = 'eye-off';
        this.passwordType2 = 'password';
        this.passwordIcon2 = 'eye-off';
        this.sexos = ['Masculino', 'Femenino'];
        this.vuser = [];
        this.Form = formBuilder.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_6__angular_forms__["h" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_6__angular_forms__["h" /* Validators */].maxLength(50), __WEBPACK_IMPORTED_MODULE_6__angular_forms__["h" /* Validators */].pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/), __WEBPACK_IMPORTED_MODULE_6__angular_forms__["h" /* Validators */].required])],
            password: ['', __WEBPACK_IMPORTED_MODULE_6__angular_forms__["h" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_6__angular_forms__["h" /* Validators */].maxLength(15), __WEBPACK_IMPORTED_MODULE_6__angular_forms__["h" /* Validators */].pattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[.$@!%*?&])[A-Za-z\d.$@!%*?&]{4,}$/), __WEBPACK_IMPORTED_MODULE_6__angular_forms__["h" /* Validators */].required])],
            password2: ['', __WEBPACK_IMPORTED_MODULE_6__angular_forms__["h" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_6__angular_forms__["h" /* Validators */].maxLength(15), __WEBPACK_IMPORTED_MODULE_6__angular_forms__["h" /* Validators */].pattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[.$@!%*?&])[A-Za-z\d.$@!%*?&]{4,}$/), __WEBPACK_IMPORTED_MODULE_6__angular_forms__["h" /* Validators */].required])],
            nombre: ['', __WEBPACK_IMPORTED_MODULE_6__angular_forms__["h" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_6__angular_forms__["h" /* Validators */].pattern(/[a-zA-Z ]*/), __WEBPACK_IMPORTED_MODULE_6__angular_forms__["h" /* Validators */].required])],
            cui: [''],
            fotot: ['']
        });
    }
    SignupPage.prototype.showHide = function () {
        this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
        this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
    };
    SignupPage.prototype.showHide2 = function () {
        this.passwordType2 = this.passwordType2 === 'text' ? 'password' : 'text';
        this.passwordIcon2 = this.passwordIcon2 === 'eye-off' ? 'eye' : 'eye-off';
    };
    SignupPage.prototype.ionViewDidLoad = function () {
        this.APP = this.navParams.data.record2.APP;
        if (this.APP == "WebApp Usacenlinea") {
            this.tiposus = "5be1b6699c9f2200e8311574";
            this.seleccionaopcion = 'Visitante';
            this.ocultaxx = true;
            this.ocultaxx2 = false;
            this.tiposus = "5be1b6479c9f2200e8311570";
        }
        else {
            this.tiposus = "5be1b6699c9f2200e8311574";
            this.seleccionaopcion = 'Visitante';
            this.ocultaxx = true;
            this.ocultaxx2 = false;
            this.tiposus = "5be1b6699c9f2200e8311574";
        }
    };
    SignupPage.prototype.register = function () {
        var _this = this;
        if (this.Form.get('password').value.trim() == this.Form.get('password2').value.trim()) {
            if (this.APP == "WebApp Usacenlinea") {
                this.msg1 = 'Credenciales <br> Cui: ' + this.Form.get('cui').value.trim() + ' <br> Cuenta de correo (INGRESE UN CORREO VALIDO) : ' + this.Form.get('email').value.trim() + '   <br> ¿Seguro de registrar estos datos le servirán como credenciales en el Web App?';
            }
            else {
                this.msg1 = 'Cui: ' + this.Form.get('cui').value.trim() + '  <p> Cuenta de correo : ' + this.Form.get('email').value.trim() + '   <p> ¿Seguro de registrar estos datos le servirán como credenciales en el Web App?';
            }
            var alert_1 = this.alertCtrl.create({ title: this.msg1,
                buttons: [
                    { text: 'Si',
                        handler: function () {
                            var details = {
                                idempresa: _this.APP,
                                email: _this.Form.get('email').value.trim(),
                                role: 'user',
                                password: _this.Form.get('password').value.trim(),
                                nombre: _this.Form.get('nombre').value.trim(),
                                cui: _this.Form.get('cui').value.trim(),
                                direccion: '',
                                telefono: '',
                                sexo: '',
                                foto: _this.fotot,
                                lenguaje: 'Español',
                                estado: 'Activo',
                                nov: '',
                                unidad: '5bad21a11c7b5027147e31d9',
                                interno: '0',
                                estadoemail: '1',
                                codpersonal: '',
                                tiposuscriptor: _this.tiposus,
                                APP: _this.APP,
                                accesoestado: '',
                                accesohora: '',
                                bitacora: { idempresa: _this.APP, idafiliado: '', email: _this.Form.get('email').value.trim(), permiso: 'Creacion', accion: 'Creacion de nuevo usuario' }
                            };
                            _this.authService.createAPITOKEN(details, '/api/auth/register').then(function (result) {
                                _this.vuser = result;
                                _this.storage.set('username', _this.Form.get('email').value.trim());
                                _this.storage.set('tiposus', '5be1b6479c9f2200e8311570' + ',true,' + _this.Form.get('cui').value.trim() + ',' + _this.vuser.user._id + ',' + _this.Form.get('nombre').value.trim() + ',,user,5bad21a11c7b5027147e31d9,,');
                                if (_this.APP == "WebApp Usacenlinea") {
                                    _this.navCtrl.push('WelcomePage', { user: _this.Form.get('email').value.trim(), pass: _this.Form.get('password').value.trim() });
                                }
                                else {
                                    _this.navCtrl.push('Welcome2Page', { user: _this.Form.get('email').value.trim(), pass: _this.Form.get('password').value.trim() });
                                }
                                /*
                                                const loading = this.loadingCtrl.create({
                                                  spinner: 'bubbles',
                                                  content: "Enviando  Correo electronico  a cuenta: " + this.Form.get('email').value.trim() + "  ......"
                                                });
                                                loading.present();
                                
                                                let idt=this.vuser.user._id;
                                                let nombret= this.Form.get('nombre').value.trim()
                                
                                                if(this.APP=="WebApp Usacenlinea")
                                                {
                                
                                
                                
                                                  this.msg2 = ' <p><span class="esd-hidden-preheader" style="display: none !important; font-size: 0px; line-height: 0; color: #ffffff; visibility: hidden; opacity: 0; height: 0; width: 0; mso-hide: all;">0</span></p><div class="es-wrapper-color"><table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0"><tbody><tr><td class="esd-email-paddings" valign="top"><table class="es-content esd-footer-popover" cellspacing="0" cellpadding="0" align="center"><tbody><tr><td class="esd-stripe" align="center"><table class="es-content-body" width="600" cellspacing="0" cellpadding="0" align="center" bgcolor="#ffffff"><tbody><tr><td class="esd-structure es-p20" align="left"><table width="100%" cellspacing="0" cellpadding="0"><tbody><tr><td class="esd-container-frame" align="center" valign="top" width="560"><table width="100%" cellspacing="0" cellpadding="0"><tbody><tr><td class="esd-block-image" align="center"><a target="_blank"><img class="adapt-img" style="display: block;" src="http://52.90.195.238:8500/logousac1.png" alt="" width="87" /></a></td></tr><tr><td class="esd-block-text" align="left"><p style="color: #38761d;"><strong>La Universidad de San Carlos de Guatemala y el Rector Ing. Murphy Paiz, </strong>te dan&nbsp;la m&aacute;s cordial bienvenida: '+nombret+'</p></td></tr><tr><td align="center"><h2><span style="color: #333333;"><strong><a style="color: #333333;" href="'+ this.authService.daserverenuso0() +'/api/autorizar/' + idt +'" target="_blank" rel="noopener">Click aqu&iacute; para confirmar tu correo electr&oacute;nico</a></strong></span></h2></td></tr><tr><td class="esd-block-text" align="left"><p style="color: #38761d;">Cordialmente,</p></td></tr><tr><td class="esd-block-image" align="center"><a target="_blank"><img class="adapt-img" style="float: left;" src="http://52.90.195.238:8500/logoit.jpg" alt="" width="200" /></a></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></div>'
                                //                  this.msg2 = '<div class="es-wrapper-color"><table cellpadding="0" cellspacing="0" class="es-wrapper" width="100%">   <tbody><tr> <td valign="top" class="esd-email-paddings"> <table cellpadding="0" cellspacing="0" class="es-header esd-header-popover" align="center">  <tbody><tr><td class="esd-stripe" align="center"><table class="es-header-body" align="center" cellpadding="0" cellspacing="0" width="600"><tbody><tr><td class="esd-structure es-p20b es-p20r es-p20l" align="left"><table cellpadding="0" cellspacing="0" width="100%"><tbody><tr><td width="560" class="esd-container-frame" align="center" valign="top"><table cellpadding="0" cellspacing="0" width="100%"><tbody><tr><td align="center" class="esd-block-image"><a href="http://viewstripo.email" target="_blank"><img src="http://52.90.195.238:8500/logousac1.png" alt="" width="124" style="display: block;"></a></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table><table cellpadding="0" cellspacing="0" class="es-content esd-footer-popover" align="center"><tbody><tr><td class="esd-stripe" align="center"><table bgcolor="#ffffff" class="es-content-body" align="center" cellpadding="0" cellspacing="0" width="600"><tbody><tr><td class="esd-structure es-p20" align="left"><table cellpadding="0" cellspacing="0" width="100%"><tbody><tr><td width="560" class="esd-container-frame" align="center" valign="top"><table cellpadding="0" cellspacing="0" width="100%"><tbody><tr><td align="center" class="esd-block-text es-p15b"><h2 style="font-size: 16px; text-align: center;"><strong>EL RECTOR DE LA UNIVERSIDAD DE SAN CARLOS DE GUATEMALA</strong></h2><p><strong>INGENIERO MURPHY PAIZ</strong></p><p><strong>Y LA COORDINADORA DE TECNOLOGÍA </strong></p><p><br></p><p style="text-align: left;"><strong></strong><strong></strong></p></td></tr><tr><td align="left" class="esd-block-text"><p>Te damos las Bienvenida:  '+nombret+'</p><p>A nuestra WebAPP : http://usacenlinea.net</p><p><br></p><p></p><p><br></p></td></tr><tr><td align="center" class="esd-block-button es-p10"> <span  ><a href="'+ this.authService.daserverenuso0() +'/api/autorizar/' + idt +'"  target="_blank" style="   border-style: solid;  border-color: #31cb4b; border-width: 10px 20px 10px 20px;display: inline-block; background: #31cb4b;border-radius: 30px;   font-size: 18px;font-family: arial, "helvetica neue", helvetica, sans-serif; font-weight: normal; font-style: normal;line-height: 120%;   color: #ffffff;   text-decoration: none !important;   width: auto; text-align: center;">Click aquí para confirmar tu suscripción</a></span> </td></tr><tr><td align="left" class="esd-block-text"><p><br></p><p><br></p><p>Cordialmente,<br>Ing. Murphy Paiz</p><p><br>Rector</p>   <p><br></p></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></div>';
                                
                                                }
                                                else
                                                {
                                
                                                 this.msg2 = '<div class="es-wrapper-color"><table cellpadding="0" cellspacing="0" class="es-wrapper" width="100%">   <tbody><tr> <td valign="top" class="esd-email-paddings"> <table cellpadding="0" cellspacing="0" class="es-header esd-header-popover" align="center">  <tbody><tr><td class="esd-stripe" align="center"><table class="es-header-body" align="center" cellpadding="0" cellspacing="0" width="600"><tbody><tr><td class="esd-structure es-p20b es-p20r es-p20l" align="left"><table cellpadding="0" cellspacing="0" width="100%"><tbody><tr><td width="560" class="esd-container-frame" align="center" valign="top"><table cellpadding="0" cellspacing="0" width="100%"><tbody><tr><td align="center" class="esd-block-image"><a href="http://viewstripo.email" target="_blank"><img src="http://52.90.195.238:8500/appicon.png" alt="" width="124" style="display: block;"></a></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table><table cellpadding="0" cellspacing="0" class="es-content esd-footer-popover" align="center"><tbody><tr><td class="esd-stripe" align="center"><table bgcolor="#ffffff" class="es-content-body" align="center" cellpadding="0" cellspacing="0" width="600"><tbody><tr><td class="esd-structure es-p20" align="left"><table cellpadding="0" cellspacing="0" width="100%"><tbody><tr><td width="560" class="esd-container-frame" align="center" valign="top"><table cellpadding="0" cellspacing="0" width="100%"><tbody><tr><h2 style="Margin:0;Margin-bottom:10px;color:#5477f0;font-family:"Source Sans Pro",sans-serif!important;font-size:25px;font-weight:700;line-height:1.3;margin:0;margin-bottom:10px;margin-top:35px;padding:10px 0;text-align:center;text-transform:initial;word-wrap:normal">¡Bienvenido!</h2></p></td></tr><tr><td align="left" class="esd-block-text"><p>Hola  '+nombret+'  , te has registrado en nuestra plataforma WebAPP para continuar con tu registro presiona click en el siguiente enlace:  </p><p><br></p><p></p><p><br></p></td></tr><tr><td align="center" class="esd-block-button es-p10"> <span  ><a href="'+ this.authService.daserverenuso0() +'/api/autorizar/' + idt +'"  target="_blank"><img src="http://52.90.195.238:8500/bactiva.png" alt="" style="Margin:0 auto;border:none;clear:both;display:block;float:none;margin:0 auto;max-width:100%;outline:0;text-align:center;text-decoration:none;width:auto" class="CToWUd"></a></span> </td></tr><tr><td align="left" class="esd-block-text"><p><br></p><p><br></p><p>Saludos  <p><br></p></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></div>';
                                
                                
                                
                                                }
                                
                                                loading.dismiss();
                                                */
                                _this.msj.showError3('Éxito', 'Registro creado con exito, ingresa al sistema click en INICAR SESIÓN');
                                /*
                    
                    
                                    let   options2       : any	     = {
                                      destino:this.Form.get('email').value.trim(),
                                      html : this.msg2,
                                    text : this.msg2,
                                    subjet : 'Solicitud de acceso a WebAPP',
                                    actualiza:{ tipo:'na', id : idt, estado : 'Ingreso, mail enviado',
                                    otros:''}
                                    };
                    
                                    this.authService.mandamail('',options2,'mails').then((data) => {
                                    loading.dismiss();
                                    this.msj.showError3('Éxito','Hemos enviado correo de confirmación a tu cuenta: ' + this.Form.get('email').value.trim() +' , para validar tus credenciales.');
                                    }, (err) => {
                                      loading.dismiss();
                                            this.msj.showError3('Error',err.error);
                                    });
                    */
                            }, function (err) {
                                _this.msj.showError3('Advertencia', err.error);
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
        else {
            this.translateService.get('PASSWORD3').subscribe(function (value) {
                _this.msj.showError3('Advertencia', value);
            });
        }
    };
    SignupPage.prototype.updateProfileImage = function () {
        var _this = this;
        var t1, t2;
        this.translateService.get('SELECCIONE_IMAGEN').subscribe(function (value) {
            t1 = value;
        });
        this.translateService.get('TOME_IMAGEN').subscribe(function (value) {
            t2 = value;
        });
        var actionSheet = this.actionSheetCtrl.create({
            title: t1,
            buttons: [
                {
                    text: t2,
                    handler: function () {
                        _this.takePhotograph();
                    }
                },
                {
                    text: t1,
                    handler: function () {
                        _this.selectImage();
                    }
                }
            ]
        });
        actionSheet.present();
    };
    SignupPage.prototype.takePhotograph = function () {
        var _this = this;
        if (__WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */]['installed']()) {
            this._IMAGE
                .takePhotograph()
                .then(function (image) {
                _this.fotot = image.toString();
                _this.image = image.toString();
            })
                .catch(function (err) {
                console.log(err);
            });
        }
        else {
            this.fileInput.nativeElement.click();
        }
    };
    SignupPage.prototype.selectImage = function () {
        var _this = this;
        if (__WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */]['installed']()) {
            this._IMAGE
                .selectPhotograph()
                .then(function (image) {
                _this.fotot = image.toString();
                _this.image = image.toString();
            })
                .catch(function (err) {
                console.log(err);
            });
        }
        else {
            this.fileInput.nativeElement.click();
        }
    };
    SignupPage.prototype.processWebImage = function (event) {
        var _this = this;
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();
            reader.onload = function (readerEvent) {
                _this.image = readerEvent.target.result;
                _this._IMAGE.generateFromImage(_this.image, 400, 400, 0.5, function (data) {
                    _this.image = data;
                    _this.fotot = data;
                });
            };
            reader.readAsDataURL(event.target.files[0]);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('fileInput'),
        __metadata("design:type", Object)
    ], SignupPage.prototype, "fileInput", void 0);
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-signup',template:/*ion-inline-start:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\signup\signup.html"*/'<ion-header no-border class="opaque">\n  <ion-navbar  no-border-bottom>\n    <ion-title>{{ \'SIGNUP_TITLE\' | translate }}</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content  fullscreen>\n\n\n        <form [formGroup]="Form" text-wrap>\n          <div id="content">\n            <div id="profile-info">\n\n                    <input type="file" #fileInput accept="image/*" style="visibility: hidden; height: 0px" (change)="processWebImage($event)" />\n                    <input\n                    type="hidden"\n                    name="fotot"\n                    formControlName="fotot"\n                    [(ngModel)]="fotot">\n\n            </div>\n          </div>\n\n\n\n\n            <ion-avatar item-start >\n                <img  rel="tooltip" title="Seleccione una imagen" id="profile-image" (click)="updateProfileImage()" [src]="image"  src="{{pofilel}}">\n\n        </ion-avatar>\n\n\n            <ion-item >\n                <ion-label  class="my-label18" color="secondary2"  stacked> {{ \'NAMEAPELLIDO\' | translate }} <label ion-text color="danger">(*)</label> </ion-label>\n                <ion-input  [disabled]="ocultaxx2" [formControl]="Form.controls[\'nombre\']" type="text"></ion-input>\n              </ion-item>\n\n              <ion-item class="invalid" *ngIf="!Form.controls.nombre.valid && (Form.controls.nombre.dirty || Form.controls.nombre.touched)" text-wrap>\n                  <ion-icon name="warning"></ion-icon>\n                  {{ \'NAMEAPELLIDOT\' | translate }}\n              </ion-item>\n            <ion-item >\n                <ion-label class="my-label18" color="secondary2" > Email Personal <label ion-text color="danger">(*)</label></ion-label>\n                <ion-input   [formControl]="Form.controls[\'email\']" type="email"></ion-input>\n              </ion-item>\n\n              <ion-item class="invalid" *ngIf="!Form.controls.email.valid\n              && (Form.controls.email.dirty || Form.controls.email.touched)" text-wrap>\n                  <ion-icon name="warning"></ion-icon>\n                  {{ \'EMAIL_NOVALIDO\' | translate }}\n              </ion-item>\n\n\n\n                                  <ion-item >\n                                      <ion-label class="my-label18" color="secondary2"  stacked> No documento (CUI / PASAPORTE)  </ion-label>\n                                      <ion-input   [formControl]="Form.controls[\'cui\']" type="text"></ion-input>\n                                  </ion-item>\n\n\n\n\n              <ion-item >\n                <ion-label class="my-label18" color="secondary2" > {{ \'PASSWORD\' | translate }} <label ion-text color="danger">(*)</label></ion-label>\n                <ion-input [formControl]="Form.controls[\'password\']" [type]="passwordType" clearOnEdit="false" type="password"></ion-input>\n                <ion-icon item-end name="eye" [name]="passwordIcon" class="passwordIcon" (click)=\'showHide()\'></ion-icon>\n\n              </ion-item>\n\n              <ion-item class="invalid" *ngIf="!Form.controls.password.valid\n               && (Form.controls.password.dirty || Form.controls.password.touched)"  text-wrap>\n                  <ion-icon name="warning"></ion-icon>\n                  {{ \'CLAVE_NOVALIDO\' | translate }}\n              </ion-item>\n\n\n\n                     <ion-item >\n                        <ion-label class="my-label18" color="secondary2"> {{ \'PASSWORD2\' | translate }}<label ion-text color="danger">(*)</label></ion-label>\n                        <ion-input [formControl]="Form.controls[\'password2\']" [type]="passwordType" clearOnEdit="false" type="password"></ion-input>\n                        <ion-icon item-end name="eye" [name]="passwordIcon2" class="passwordIcon2" (click)=\'showHide2()\'></ion-icon>\n\n                      </ion-item>\n\n                      <ion-item class="invalid" *ngIf="!Form.controls.password2.valid\n                       && (Form.controls.password2.dirty || Form.controls.password2.touched)"  text-wrap>\n\n                          {{ \'CLAVE_NOVALIDO\' | translate }}\n                      </ion-item>\n\n                <ion-row class="sign-in-button-container">\n                  <ion-col text-center>\n                    <button ion-button block color="secondary" [disabled]="!Form.valid"\n                            (click)="register()">\n                            {{ \'SIGNUP_BUTTON\' | translate }}\n                    </button>\n                  </ion-col>\n                </ion-row>\n\n\n\n\n              </form>\n\n\n\n\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\signup\signup.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["x" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_5__providers__["c" /* ImageProvider */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* Events */], __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["w" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__["a" /* Auth */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["s" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["D" /* ToastController */], __WEBPACK_IMPORTED_MODULE_5__providers__["d" /* NotificationProvider */],
            __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ })

});
//# sourceMappingURL=39.js.map