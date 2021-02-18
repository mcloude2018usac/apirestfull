webpackJsonp([35],{

/***/ 1153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomePageModule", function() { return WelcomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__welcome__ = __webpack_require__(1612);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var WelcomePageModule = /** @class */ (function () {
    function WelcomePageModule() {
    }
    WelcomePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__welcome__["a" /* WelcomePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["q" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__welcome__["a" /* WelcomePage */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__welcome__["a" /* WelcomePage */]
            ]
        })
    ], WelcomePageModule);
    return WelcomePageModule;
}());

//# sourceMappingURL=welcome.module.js.map

/***/ }),

/***/ 1612:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6____ = __webpack_require__(455);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_pdf_pdfx__ = __webpack_require__(447);
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

var WelcomePage = /** @class */ (function () {
    function WelcomePage(Pdfx, alertCtrl, navParams, events, formBuilder, storage, navCtrl, menu, loadingCtrl, authService, msj, translateService
        // ,private barcodeScanner:BarcodeScanner
    ) {
        var _this = this;
        this.Pdfx = Pdfx;
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
        this.passwordType = 'password';
        this.passwordIcon = 'eye-off';
        this.menu.enable(false);
        this.Form = formBuilder.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].maxLength(50), __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/), __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required])],
            password: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].maxLength(15), __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].pattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[.$@!%*?&])[A-Za-z\d.$@!%*?&]{4,}$/), __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required])],
        });
        //WebApp YUHUYUHU
        this.translateService.get('APPX').subscribe(function (value) {
            _this.APP = value;
            _this.estilomenu = value;
            if (value == 'WebApp Usacenlinea') {
                _this.inter = value;
                _this.icon2 = './assets/img/bg2.png';
            }
            else {
                _this.inter = value;
                _this.icon2 = './assets/img/bg2.png';
            }
        });
    }
    WelcomePage.prototype.ionViewWillEnter = function () {
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
    WelcomePage.prototype.add_to_home = function () {
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
    WelcomePage.prototype.cursoslibres200 = function () {
        var _this = this;
        var select = {
            title: 'TEST RAPIDO COVID19 <br> ¡IMPORTANTE! <br><br> EN NINGÚN MOMENTO SE DEBE TOMAR LO SUGERIDO EN EL TEST COMO UN DIAGNÓSTICO',
            inputs: [],
            buttons: [{ text: 'Cancelar' }, { text: 'Iniciar test rapido', handler: function (todo) {
                        //buscamos
                        _this.dalink(todo); //libres
                    } }]
        };
        select.inputs.push({ name: 'myInput', type: 'radio', label: 'INICIAR TEST', value: this.authService.daserverelink() + '/?key=3A' });
        var newAlert = this.alertCtrl.create(select);
        newAlert.present();
    };
    WelcomePage.prototype.cursoslibres2 = function () {
        var _this = this;
        var select = {
            title: 'Seleccione opción',
            inputs: [],
            buttons: [{ text: 'Cancelar' }, { text: 'Seleccionar', handler: function (todo) {
                        //buscamos
                        _this.dalink(todo); //libres
                    } }]
        };
        select.inputs.push({ name: 'myInput', type: 'radio', label: 'Inscripción Cursos Libres en linea', value: 'https://usac-enlinea.web.app/?key=3' });
        var newAlert = this.alertCtrl.create(select);
        newAlert.present();
    };
    WelcomePage.prototype.cursoslibres = function () {
        var _this = this;
        var select = {
            title: 'Seleccione opción',
            inputs: [],
            buttons: [{ text: 'Cancelar' }, { text: 'Seleccionar', handler: function (todo) {
                        //buscamos
                        _this.dalink(todo); //libres
                    } }]
        };
        select.inputs.push({ name: 'myInput', type: 'radio', label: 'Información Cursos Libres', value: 'https://drive.google.com/file/d/1V6ylD1q1IjLlHY5A56nvDH3l2cU7VjX_/view?usp=sharing' });
        select.inputs.push({ name: 'myInput', type: 'radio', label: 'Inscripción Cursos Libres', value: 'https://usac-enlinea.web.app/?key=1' });
        select.inputs.push({ name: 'myInput', type: 'radio', label: 'Información Cursos de Actualización', value: 'https://drive.google.com/file/d/1h0u1F91HH0mWwl69Ew54DGmtqQvVjs5r/view?usp=sharing' });
        select.inputs.push({ name: 'myInput', type: 'radio', label: 'Inscripción Cursos de Actualización', value: 'https://usac-enlinea.web.app/?key=2' });
        select.inputs.push({ name: 'myInput', type: 'radio', label: 'Información Preuniversitarios', value: 'https://drive.google.com/file/d/1jgRTcXNw3BLe3mRT9aiY_U7Gsy4NJX6R/view?usp=sharing' });
        select.inputs.push({ name: 'myInput', type: 'radio', label: 'Inscripción Cursos Preuniversitarios', value: 'https://usac-enlinea.web.app/?key=4' });
        var newAlert = this.alertCtrl.create(select);
        newAlert.present();
    };
    WelcomePage.prototype.ionViewDidLoad = function () {
        this.Form.get('email').setValue(this.navParams.data.user);
        this.Form.get('password').setValue(this.navParams.data.pass);
        //this.cursoslibres200();
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
    WelcomePage.prototype.showLoader = function () {
        var _this = this;
        this.translateService.get('ESPERE').subscribe(function (value) {
            _this.loading = _this.loadingCtrl.create({
                content: value
            });
        });
        this.loading.present();
        this.loading.dismiss();
    };
    WelcomePage.prototype.isEmpty = function (obj) {
        for (var key in obj) {
            if (obj.hasOwnProperty(key))
                return false;
        }
        return true;
    };
    WelcomePage.prototype.dahelp = function () {
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
    WelcomePage.prototype.dalink = function (op) {
        //this.msj.showError3('Link QR',op);
        this.authService.abrelinkinterno3(op, '_blank', '', 0);
    };
    WelcomePage.prototype.poneperfil = function () {
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
    WelcomePage.prototype.login = function () {
        var _this = this;
        var credentials = {
            idempresa: this.APP,
            email: this.Form.get('email').value,
            password: this.Form.get('password').value,
            bitacora: { idempresa: this.APP, idafiliado: '', email: this.Form.get('email').value, permiso: 'Ingreso', accion: 'Ingreso al sistema' }
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
    WelcomePage.prototype.showHide = function () {
        this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
        this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
    };
    WelcomePage.prototype.launchSignup = function () {
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
    WelcomePage.prototype.noclave = function () {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: ' Ingresa EMAIL y CUI registrado en la plataforma, para poder validar información , Reiniciar clave:',
            inputs: [
                {
                    name: 'email',
                    placeholder: 'Ingrese EMAIL registrado',
                    value: this.Form.get('email').value
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
    WelcomePage.prototype.noclave2 = function () {
        var _this = this;
        var sii = 2;
        if (sii === 2) {
            var prompt_1 = this.alertCtrl.create({
                title: ' Ingresa EMAIL registrado en la plataforma, para poder generar tu diploma:',
                inputs: [
                    {
                        name: 'email',
                        placeholder: 'Ingrese EMAIL registrado'
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
                                if (todo.email == '') {
                                    _this.msj.showError3('Advertencia', 'Ingrese un CORREO ');
                                    return;
                                }
                                var loading_2 = _this.loadingCtrl.create({
                                    spinner: 'bubbles',
                                    content: "Procesando información..."
                                });
                                loading_2.present();
                                _this.authService.getRegsintok('participacursos/' + todo.email + '', 'datosfijos').then(function (result) {
                                    var vdata = [];
                                    vdata = result;
                                    var select = {
                                        title: 'Seleccione curso ',
                                        inputs: [],
                                        buttons: [{ text: 'Cancelar', handler: function () { loading_2.dismiss(); } },
                                            { text: 'Generar', handler: function (todo) {
                                                    //buscamos
                                                    loading_2.dismiss();
                                                    if (todo.plantilla !== '' && todo.plantilla !== undefined) {
                                                        _this.authService.getRegsintok(todo.plantilla + '/todos', 'catalogodiplomas').then(function (result) {
                                                            _this.Pdfx.dadiploma1a911todo(todo.curso, todo.nombre, todo.fecha, todo.hora, todo.idcurso, 2, todo.ideve, todo.tipoevento, result);
                                                        });
                                                    }
                                                    else {
                                                        if (todo.unidad == 'CURSOSLIBRES') {
                                                            if (todo.tipoevento == 'cursoslibres') {
                                                                if (todo.tipo == 1) {
                                                                    _this.Pdfx.dadiploma2(todo.curso, todo.nombre, todo.fecha, todo.idcurso, 1, todo.ideve);
                                                                }
                                                                else {
                                                                    _this.Pdfx.dadiploma1(todo.curso, todo.nombre, todo.fecha, todo.hora, todo.idcurso, 2, todo.ideve);
                                                                }
                                                            }
                                                            else {
                                                                if (todo.tipoevento == 'deportes') {
                                                                    _this.Pdfx.dadiploma1a6(todo.curso, todo.nombre, todo.fecha, todo.hora, todo.idcurso, 2, todo.ideve);
                                                                }
                                                                else {
                                                                    if (todo.tipoevento == 'deportes') {
                                                                        _this.Pdfx.dadiploma1a6(todo.curso, todo.nombre, todo.fecha, todo.hora, todo.idcurso, 2, todo.ideve);
                                                                    }
                                                                    else {
                                                                        if (todo.tipoevento == 'sep') {
                                                                            _this.Pdfx.dadiploma1a7(todo.curso, todo.nombre, todo.fecha, todo.hora, todo.idcurso, 2, todo.ideve);
                                                                        }
                                                                        else {
                                                                            if (todo.tipoevento == 'cpleche') {
                                                                                _this.Pdfx.dadiploma1a8(todo.curso, todo.nombre, todo.fecha, todo.hora, todo.idcurso, 2, todo.ideve, todo.tipoevento);
                                                                            }
                                                                            else {
                                                                                if (todo.tipoevento == 'biosfera') {
                                                                                    _this.Pdfx.dadiploma1a10(todo.curso, todo.nombre, todo.fecha, todo.hora, todo.idcurso, 2, todo.ideve, todo.tipoevento);
                                                                                }
                                                                                else {
                                                                                    if (todo.tipoevento == 'congreso_matematicas' || todo.tipoevento == 'postgrado_derecho' || todo.tipoevento == 'zacapa' || todo.tipoevento == 'epsum' || todo.tipoevento == 'dad' || todo.tipoevento == 'diga' || todo.tipoevento == 'digaadmin' || todo.tipoevento == 'digeu' || todo.tipoevento == 'penal' || todo.tipoevento == 'arquitectura') {
                                                                                        if (todo.tipoevento == 'arquitectura') {
                                                                                            _this.Pdfx.dadiploma1a19(todo.curso, todo.nombre, todo.fecha, todo.hora, todo.idcurso, 2, todo.ideve, todo.tipoevento);
                                                                                        }
                                                                                        else {
                                                                                            _this.Pdfx.dadiploma1a9(todo.curso, todo.nombre, todo.fecha, todo.hora, todo.idcurso, 2, todo.ideve, todo.tipoevento);
                                                                                        }
                                                                                    }
                                                                                    else {
                                                                                        _this.Pdfx.dadiploma1aa(todo.curso, todo.nombre, todo.fecha, todo.hora, todo.idcurso, 3, todo.ideve);
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                        else {
                                                            if (todo.unidad == 'DIGED') {
                                                                _this.authService.getRegsintok('GRUPOSEVENTOS' + '/' + todo.unidad + '/' + todo.idempresa, 'catalogos').then(function (data) {
                                                                    console.log(data);
                                                                    _this.Pdfx.dadiploma1a91(todo.curso, todo.nombre, todo.fecha, todo.hora, todo.idcurso, 2, todo.ideve, todo.tipoevento, data[0].foto);
                                                                });
                                                            }
                                                            else {
                                                                if (todo.unidad == 'IUMUSAC' || todo.unidad == 'DIGEU' || todo.unidad == 'EFPEM') {
                                                                    _this.authService.getRegsintok('GRUPOSEVENTOS' + '/' + todo.unidad + '/' + todo.idempresa, 'catalogos').then(function (data) {
                                                                        _this.Pdfx.dadiploma1a911(todo.curso, todo.nombre, todo.fecha, todo.hora, todo.idcurso, 2, todo.ideve, todo.tipoevento, data[0].foto);
                                                                    });
                                                                }
                                                            }
                                                        }
                                                    }
                                                    // this.dalink(todo)//libres
                                                } }]
                                    };
                                    for (var i = 0; i < vdata.length; i++) {
                                        select.inputs.push({ name: 'myInput', type: 'radio', label: vdata[i].curso, value: vdata[i] });
                                    }
                                    var newAlert = _this.alertCtrl.create(select);
                                    newAlert.present();
                                }, function (err) {
                                    _this.msj.showError3('Error', err.error);
                                    loading_2.dismiss();
                                });
                                //this.Pdfx.dadiploma2('','','','',todo.email);
                            }
                        }
                    }
                ]
            });
            prompt_1.present();
        }
    };
    WelcomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-welcome',template:/*ion-inline-start:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\welcome\welcome.html"*/'<ion-content  padding class="animated fadeIn login auth-page background-image">\n\n  <div class="login-content">\n      <form [formGroup]="Form" text-wrap >\n          <ion-item >\n            <ion-label class="my-label18" color="secondary2" stacked> Email Personal <label ion-text color="danger">(*)</label></ion-label>\n            <ion-input   [formControl]="Form.controls[\'email\']" type="email" ></ion-input>\n          </ion-item>\n\n          <ion-item class="invalid" *ngIf="!Form.controls.email.valid\n          && (Form.controls.email.dirty || Form.controls.email.touched)" text-wrap>\n              <ion-icon name="warning"></ion-icon>\n              {{ \'EMAIL_NOVALIDO\' | translate }}\n          </ion-item>\n\n          <ion-item >\n            <ion-label class="my-label18" color="secondary2"  stacked> {{ \'PASSWORD\' | translate }} <label ion-text color="danger">(*)</label></ion-label>\n            <ion-input [formControl]="Form.controls[\'password\']" [type]="passwordType" type="password"></ion-input>\n            <ion-icon item-end name="eye" [name]="passwordIcon" class="passwordIcon" (click)=\'showHide()\'></ion-icon>\n\n          </ion-item>\n\n          <ion-item class="invalid" *ngIf="!Form.controls.password.valid\n           && (Form.controls.password.dirty || Form.controls.password.touched)"  text-wrap>\n              <ion-icon name="warning"></ion-icon>\n              {{ \'CLAVE_NOVALIDO\' | translate }}\n          </ion-item>\n\n\n\n          <ion-row no-wrap>\n              <ion-col text-center >\n                <button\n                 ion-button block color="secondary" [disabled]="!Form.valid"\n                        (click)="login()">\n                        {{ \'LOGIN_BUTTON\' | translate }}\n                </button>\n\n              </ion-col>\n            </ion-row>\n\n            <ion-row >\n              <ion-col text-center>\n                <button rel="tooltip" title="Crear nueva suscripción" ion-button  clear color="rojox" (click)="launchSignup()">\n                  {{ \'REGISTRASE\' | translate }}\n                </button>\n\n                <button class="btn" ion-button full (click)="add_to_home()" *ngIf="showBtn" >Instalar APP</button>\n              </ion-col>\n            </ion-row>\n          <ion-row>\n\n\n              </ion-row>\n\n\n              <ion-row>\n                  <ion-fab title=\'Reinicio de contraseña\' left edge>\n                      <button (click)="noclave()" ion-fab color="secondary"><ion-icon name="key"></ion-icon></button>\n\n                    </ion-fab>\n\n\n                  <ion-fab  title=\'Otras opciones\' right edge>\n                    <button ion-fab color="primary"><ion-icon name="apps"></ion-icon></button>\n                    <ion-fab-list side="top">\n                      <button ion-fab style="color:blue" (click)="cursoslibres200()"> <ion-icon  name="custom-sos3"></ion-icon></button>\n\n                        <button ion-fab (click)="dahelp()" color="light"><ion-icon name="help-circle"></ion-icon></button>\n                      <button (click)="dalink(\'https://www.facebook.com/usacenlinea/\')" ion-fab color="light"><ion-icon name="logo-facebook"></ion-icon></button>\n                      <button (click)="dalink(\'https://twitter.com/usacenlinea\')" ion-fab color="light"><ion-icon name="logo-twitter"></ion-icon></button>\n                      <button title=\'Imprimir diploma\' (click)="noclave2()" ion-fab color="light"><ion-icon name="document"></ion-icon></button>\n                  <!--    <button title=\'Imprimir diploma cursos en linea\' (click)="noclave2()" ion-fab color="light"><ion-icon name="document"></ion-icon></button>\n-->\n                    </ion-fab-list>\n                  </ion-fab>\n\n              </ion-row>\n\n        </form>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\welcome\welcome.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__providers_pdf_pdfx__["a" /* pdfx */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["x" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* Events */], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["w" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["t" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["s" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__providers__["a" /* Auth */],
            __WEBPACK_IMPORTED_MODULE_3__providers__["d" /* NotificationProvider */], __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */]
            // ,private barcodeScanner:BarcodeScanner
        ])
    ], WelcomePage);
    return WelcomePage;
}());

//# sourceMappingURL=welcome.js.map

/***/ })

});
//# sourceMappingURL=35.js.map