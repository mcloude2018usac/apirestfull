webpackJsonp([36],{

/***/ 1154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Welcome2PageModule", function() { return Welcome2PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__welcome2__ = __webpack_require__(1613);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var Welcome2PageModule = /** @class */ (function () {
    function Welcome2PageModule() {
    }
    Welcome2PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__welcome2__["a" /* Welcome2Page */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["q" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__welcome2__["a" /* Welcome2Page */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__welcome2__["a" /* Welcome2Page */]
            ]
        })
    ], Welcome2PageModule);
    return Welcome2PageModule;
}());

//# sourceMappingURL=welcome2.module.js.map

/***/ }),

/***/ 1613:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Welcome2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6____ = __webpack_require__(455);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







//import { BarcodeScanner } from '@ionic-native/barcode-scanner';
var Welcome2Page = /** @class */ (function () {
    function Welcome2Page(alertCtrl, navParams, events, formBuilder, storage, navCtrl, menu, loadingCtrl, authService, msj, translateService
        // ,private barcodeScanner:BarcodeScanner
    ) {
        var _this = this;
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
        this.events = events;
        this.formBuilder = formBuilder;
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.menu = menu;
        this.loadingCtrl = loadingCtrl;
        this.authService = authService;
        this.msj = msj;
        this.translateService = translateService;
        this.showBtn = false;
        this.pag0 = 0;
        this.vdata = [];
        this.passwordType = 'password';
        this.passwordIcon = 'eye-off';
        this.menu.enable(false);
        this.Form = formBuilder.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].maxLength(50), __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/), __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required])],
            password: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].maxLength(30), __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].pattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/), __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required])]
        });
        //WebApp YUHUYUHU
        this.translateService.get('APPX').subscribe(function (value) {
            _this.APP = value;
            _this.estilomenu = value;
            if (value == 'WebApp Usacenlinea') {
                _this.inter = value;
                _this.icon2 = './assets/img/splashbg.png';
            }
            else {
                _this.inter = value;
                _this.icon2 = './assets/img/splashbg.png';
            }
        });
    }
    Welcome2Page.prototype.ionViewWillEnter = function () {
        var _this = this;
        window.addEventListener('beforeinstallprompt', function (e) {
            // Prevent Chrome 67 and earlier from automatically showing the prompt
            e.preventDefault();
            // Stash the event so it can be triggered later on the button event.
            _this.deferredPrompt = e;
            // Update UI by showing a button to notify the user they can add to home screen
            _this.showBtn = true;
        });
        //button click event to show the promt
        window.addEventListener('appinstalled', function (event) {
        });
        if (window.matchMedia('(display-mode: standalone)').matches) {
        }
    };
    Welcome2Page.prototype.add_to_home = function () {
        var _this = this;
        debugger;
        // hide our user interface that shows our button
        // Show the prompt
        this.deferredPrompt.prompt();
        // Wait for the user to respond to the prompt
        this.deferredPrompt.userChoice
            .then(function (choiceResult) {
            if (choiceResult.outcome === 'accepted') {
            }
            else {
            }
            _this.deferredPrompt = null;
        });
    };
    ;
    Welcome2Page.prototype.ionViewDidLoad = function () {
        this.Form.get('email').setValue(this.navParams.data.user);
        this.Form.get('password').setValue(this.navParams.data.pass);
        /*    this.authService.checkAuthentication().then((res) => {
            
            this.storage.get('hasSeenTutorial').then((hasSeenTutorial) => {
              if (hasSeenTutorial) {
                
                this.poneperfil();
                this.pag0=1;
                this.navCtrl.push(MainPage,{uno: "Tab1Root", dos: "Tab3Root" });
              
                
              } else {
               
                this.navCtrl.push('TutorialPage');
                this.pag0=0;
              //  this.rootPage = TutorialPage;
              }
             
            });
          }, (err) => {
             // console.log("Todavía no autorizado");
          
          });
      
          */
    };
    Welcome2Page.prototype.showLoader = function () {
        var _this = this;
        this.translateService.get('ESPERE').subscribe(function (value) {
            _this.loading = _this.loadingCtrl.create({
                content: value
            });
        });
        this.loading.present();
        this.loading.dismiss();
    };
    Welcome2Page.prototype.isEmpty = function (obj) {
        for (var key in obj) {
            if (obj.hasOwnProperty(key))
                return false;
        }
        return true;
    };
    Welcome2Page.prototype.dahelp = function () {
        var _this = this;
        this.translateService.get('APPX').subscribe(function (value) {
            _this.APP = value;
            if (value == 'WebApp Usacenlinea') {
                _this.navCtrl.push('HelpviewPage', { idempresa: _this.APP });
            }
            else {
                _this.navCtrl.push('HelpviewPage', { idempresa: _this.APP });
            }
        });
    };
    Welcome2Page.prototype.dalink = function (op) {
        //this.msj.showError3('Link QR',op);
        this.authService.abrelinkinterno3(op, '_blank', '', 0);
    };
    Welcome2Page.prototype.poneperfil = function () {
        var _this = this;
        this.storage.set('username', this.Form.get('email').value.trim());
        this.authService.getReg(this.Form.get('email').value.trim() + '/emailsolo/' + this.APP, 'personals').then(function (data) {
            _this.storage.set('tiposus', data[0].tiposuscriptor.nombre + ',' + data[0].tiposuscriptor.cobroparqueos + ',' + data[0].cui + ',' + data[0]._id + ',' + data[0].nombre + ',' + data[0].nov + ',' + data[0].role + ',' + data[0].unidad._id + ',' + data[0].controlacceso + ',' + data[0].foto);
            _this.events.publish('nombre:cambia', data[0].nombre);
            _this.events.publish('foto:cambia', data[0].foto);
            _this.events.publish('rolx:otro', data[0].role);
            if (_this.APP != 'WebApp Usacenlinea') {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6____["c" /* MainPage */], { uno: "Tab5Root", dos: "Tab5Root" });
            }
            else {
                if (data[0].role == 'lluviaideas') {
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6____["c" /* MainPage */], { uno: "Tab4Root", dos: "Tab4Root" });
                }
                else {
                    if (_this.pag0 == 0) {
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6____["c" /* MainPage */], { uno: "Tab1Root", dos: "Tab3Root" });
                    }
                }
            }
        }, function (err) {
            if (err.error == 'NO EXISTE REGISTRO') {
                _this.events.publish('nombre:cambia', '');
                _this.events.publish('foto:cambia', '');
                _this.translateService.get('PROFILE_ERROR').subscribe(function (value) {
                    _this.msj.showError3('Error', value);
                });
                if (_this.pag0 == 0) {
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6____["c" /* MainPage */], { uno: "Tab3Root", dos: "Tab1Root" });
                }
            }
        });
    };
    Welcome2Page.prototype.login = function () {
        var _this = this;
        var credentials = {
            idempresa: this.APP,
            email: this.Form.get('email').value.trim(),
            password: this.Form.get('password').value.trim(),
            bitacora: { idempresa: this.APP, idafiliado: '', email: this.Form.get('email').value.trim(), permiso: 'Ingreso', accion: 'Ingreso al sistema' }
        };
        this.authService.createAPITOKEN(credentials, '/api/auth/login').then(function (result) {
            var autt = result;
            if (autt.user._id == '-1') {
                _this.msj.showError3('Precaución', autt.user.role);
            }
            else {
                if (autt.user._id == '-11') {
                    _this.msj.showError3('Precaución', autt.user.role);
                }
                else {
                    if (autt.user.estadoemail == '0') {
                        _this.msj.showError3('Precaución', 'Por favor ingresa a tu correo y confirma tu suscripción ');
                    }
                    else {
                        _this.poneperfil();
                    }
                }
            }
        }, function (err) {
            _this.msj.showError3('Precaución', err.error);
        });
    };
    Welcome2Page.prototype.showHide = function () {
        this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
        this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
    };
    Welcome2Page.prototype.launchSignup = function () {
        var _this = this;
        this.translateService.get('APPX').subscribe(function (value) {
            _this.APP = value;
            if (value == 'WebApp Usacenlinea') {
                _this.navCtrl.push('SignupPage', { record2: { APP: _this.APP } });
            }
            else {
                _this.navCtrl.push('SignupPage', { record2: { APP: _this.APP } });
            }
        });
    };
    Welcome2Page.prototype.noclave = function () {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: ' Reiniciar clave',
            message: ' Ingresa EMAIL y CUI registrado en la plataforma, para poder validar información:',
            inputs: [
                {
                    name: 'email',
                    placeholder: 'Ingrese EMAIL registrado',
                    value: this.Form.get('email').value.trim()
                },
                {
                    name: 'cui',
                    placeholder: 'Ingrese CUI registrado',
                    value: ''
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
                            if (todo.email == '' || todo.cui == '') {
                                _this.msj.showError3('Advertencia', 'Ingrese un CORREO o CUI valido');
                                return;
                            }
                            var credentials = {
                                idempresa: _this.APP,
                                email: todo.email,
                                cui: todo.cui,
                                bitacora: { idempresa: _this.APP, idafiliado: '', email: todo.email, permiso: 'Reinicia', accion: 'Reinicia clave' }
                            };
                            var loading_1 = _this.loadingCtrl.create({
                                spinner: 'bubbles',
                                content: "Procesando información..."
                            });
                            loading_1.present();
                            _this.authService.createAPISINTOKEN(credentials, '/api/auth/register4').then(function (result) {
                                var arr = [];
                                arr = result;
                                loading_1.dismiss();
                                var clavexx = arr;
                                clavexx = clavexx.replace('"', '');
                                clavexx = clavexx.replace('"', '');
                                clavexx = clavexx.replace('"', '');
                                _this.msj.showError3('Exito', ' Tu nueva contraseña es: ' + clavexx + ' ');
                                _this.Form.get('email').setValue(todo.email);
                                _this.Form.get('password').setValue(clavexx);
                                _this.login();
                            }, function (err) {
                                _this.msj.showError3('Advertencia', err.error);
                                loading_1.dismiss();
                            });
                        }
                    }
                }
            ]
        });
        prompt.present();
    };
    Welcome2Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-welcome2',template:/*ion-inline-start:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\welcome2\welcome2.html"*/'<ion-content  padding class="animated fadeIn login auth-page">\n  <div class="login-content">\n  <div padding-horizontal text-center class="animated fadeInDown">\n    <div class="logo"></div>\n    <h2 ion-text class="text-primary">\n       \n      <strong>  {{inter}}</strong> \n    </h2>\n  </div>\n  \n  \n      <form [formGroup]="Form" text-wrap class="list-form">\n          <ion-item >\n            <ion-label class="my-label18" color="secondary2" stacked> {{ \'EMAIL\' | translate }} <label ion-text color="danger">(*)</label></ion-label>\n            <ion-input   [formControl]="Form.controls[\'email\']" type="email" ></ion-input>\n          </ion-item>\n\n          <ion-item class="invalid" *ngIf="!Form.controls.email.valid  \n          && (Form.controls.email.dirty || Form.controls.email.touched)" text-wrap>\n              <ion-icon name="warning"></ion-icon>\n              {{ \'EMAIL_NOVALIDO\' | translate }}\n          </ion-item>\n      \n          <ion-item >\n            <ion-label class="my-label18" color="secondary2"  stacked> {{ \'PASSWORD\' | translate }} <label ion-text color="danger">(*)</label></ion-label>\n            <ion-input [formControl]="Form.controls[\'password\']" [type]="passwordType" type="password"></ion-input>\n            <ion-icon item-end name="eye" [name]="passwordIcon" class="passwordIcon" (click)=\'showHide()\'></ion-icon>\n           \n          </ion-item>\n         \n          <ion-item class="invalid" *ngIf="!Form.controls.password.valid \n           && (Form.controls.password.dirty || Form.controls.password.touched)"  text-wrap>\n              <ion-icon name="warning"></ion-icon>\n              {{ \'CLAVE_NOVALIDO\' | translate }}\n          </ion-item>\n  \n      \n          \n          <ion-row no-wrap>\n              <ion-col text-center >\n                <button \n                 ion-button block color="secondary" [disabled]="!Form.valid" \n                        (click)="login()">\n                        {{ \'LOGIN_BUTTON\' | translate }}\n                </button>\n                 \n              </ion-col>\n            </ion-row>\n        \n            <ion-row >\n              <ion-col text-center>\n                <button rel="tooltip" title="Crear nueva suscripción" ion-button  clear color="rojox" (click)="launchSignup()">\n                  {{ \'REGISTRASE\' | translate }}\n                </button>\n               \n                <button class="btn" ion-button full (click)="add_to_home()" *ngIf="showBtn" >Instalar APP</button>\n              </ion-col> \n            </ion-row>\n          <ion-row>\n             \n               \n              </ion-row>       \n   \n        \n              <ion-row>   \n                  <ion-fab title=\'Reinicio de contraseña\' left edge>\n                      <button (click)="noclave()" ion-fab color="secondary"><ion-icon name="key"></ion-icon></button>\n                      \n                    </ion-fab>\n              \n                  <ion-fab  title=\'Otras opciones\' right edge>\n                    <button ion-fab color="primary"><ion-icon name="apps"></ion-icon></button>\n                    <ion-fab-list side="left">\n                        <button ion-fab (click)="dahelp()" color="light"><ion-icon name="help-circle"></ion-icon></button>\n                      <button (click)="dalink(\'https://www.facebook.com/usacenlinea/\')" ion-fab color="light"><ion-icon name="logo-facebook"></ion-icon></button>\n                      <button (click)="dalink(\'https://twitter.com/usacenlinea\')" ion-fab color="light"><ion-icon name="logo-twitter"></ion-icon></button>\n                 \n                    </ion-fab-list>\n                  </ion-fab>\n          \n              </ion-row>\n          \n        </form>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\welcome2\welcome2.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["x" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* Events */], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["w" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["t" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["s" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__providers__["a" /* Auth */],
            __WEBPACK_IMPORTED_MODULE_3__providers__["d" /* NotificationProvider */], __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */]
            // ,private barcodeScanner:BarcodeScanner
        ])
    ], Welcome2Page);
    return Welcome2Page;
}());

//# sourceMappingURL=welcome2.js.map

/***/ })

});
//# sourceMappingURL=36.js.map