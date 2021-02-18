webpackJsonp([252],{

/***/ 1348:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParqueolicenciaPage; });
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






//import { AndroidPermissions } from '@ionic-native/android-permissions';

var ParqueolicenciaPage = /** @class */ (function () {
    // private androidPermissions: AndroidPermissions,
    function ParqueolicenciaPage(_IMAGE, alertCtrl, storage, msj, translateService, viewCtrl, authService, navCtrl, navParams, _FB, actionSheetCtrl, events) {
        this._IMAGE = _IMAGE;
        this.alertCtrl = alertCtrl;
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
        this.tiposus = [];
        this.leer = false;
        this.fecha = (new Date()).toISOString();
        this.items = [];
        this.resultado = [];
        // Define form validation - VERY basic!
        this.form = this._FB.group({
            no_orientacion: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required])]
        });
        this.checkPermissions();
        this.getCameraStream();
    }
    ParqueolicenciaPage.prototype.ionViewDidLoad = function () {
        //  this.searchbar.setFocus();
    };
    ParqueolicenciaPage.prototype.checkPermissions = function () {
        /*
        this.androidPermissions.requestPermissions(
          [this.androidPermissions.PERMISSION.CAMERA,
            this.androidPermissions.PERMISSION.RECORD_AUDIO
          ]
        );
    
        this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.CAMERA).then(
          success => console.log("Hey you have permission"),
          err => {
            console.log("Uh oh, looks like you don't have permission");
            this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.CAMERA);
          }
        );
    
        this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.RECORD_AUDIO).then(
          success => console.log("Hey you have permission"),
          err => {
            console.log("Uh oh, looks like you don't have permission");
            this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.RECORD_AUDIO);
          }
        );
        */
    };
    ParqueolicenciaPage.prototype.getCameraStream = function () {
        navigator.mediaDevices.getUserMedia({ video: true, audio: false })
            .then(function (stream) {
            var video = document.getElementById('user-video-element');
            video.srcObject = stream;
        })
            .catch(function (e) {
            console.log(e);
        });
    };
    ParqueolicenciaPage.prototype.entradita = function () {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'Datos',
            inputs: [
                {
                    name: 'direccion',
                    placeholder: 'Ingrese direccion / No. casa'
                },
                {
                    name: 'contacto',
                    placeholder: 'Ingrese contacto'
                }
            ],
            buttons: [
                {
                    text: 'Cancelar'
                },
                {
                    text: 'Agregar',
                    handler: function (todo) {
                        if (todo) {
                            var creat = 'Crea';
                            var options = {
                                idempresa: _this.navParams.data.idempresa,
                                idempresa0: '5cd9e0d7f8f59200166a3af3',
                                nombre: _this.nombrett,
                                cui: _this.dpitt,
                                direccion: _this.direcciontt,
                                telefo: _this.telefonott,
                                fechanac: _this.fechatt,
                                idpersonal: '',
                                estado: 'Entrada',
                                fotoe: _this.image,
                                contactocasa: todo.contacto,
                                dircasa: todo.direccion,
                                horas: 0,
                                tentrada: _this.fecha,
                                nodispositivo: '5cd9ea59096a7609f01eb89b',
                                noprov: '5cd9e0faf8f59200166a3af5',
                                bitacora: { idempresa: _this.navParams.data.idempresa, idafiliado: '', monto: _this.username, permiso: creat, accion: creat + ' entrada casa ' }
                            };
                            if (options) {
                                _this.authService.createReg('', options, 'Entradascasas').then(function (result) {
                                    _this.no_orientacion = '';
                                    _this.image = '';
                                    _this.dpitt = '';
                                    _this.nombrett = '';
                                    _this.fechatt = '';
                                    _this.horaprint = '';
                                    _this.entra = '';
                                    _this.leer = false;
                                    _this.msj.showError3('Exito', 'El ingreso se a creado exitosamente..');
                                }, function (err) {
                                    _this.msj.showError3('Error', err.error);
                                    _this.leer = false;
                                });
                            }
                        }
                    }
                }
            ]
        });
        prompt.present();
    };
    ParqueolicenciaPage.prototype.procesaingreso = function () {
        var _this = this;
        if (this.entra) {
            this.authService.getReg(this.dpitt + '/CUI', 'Entradascasas').then(function (data2) {
                _this.leer = false;
                console.log(data2);
                var context = _this.canvas.nativeElement.getContext("2d").drawImage(_this.video.nativeElement, 0, 0, 640, 480);
                console.log(context);
                _this.image = _this.canvas.nativeElement.toDataURL("image/png");
                if (data2[0].es == 'entrando') {
                    _this._IMAGE.generateFromImage(_this.image, 400, 400, 0.5, function (data) {
                        _this.image = data;
                        _this.entradita();
                    });
                }
                if (data2[0].es == 'saliendo') {
                    _this._IMAGE.generateFromImage(_this.image, 400, 400, 0.5, function (data) {
                        _this.image = data;
                        _this.salidita();
                    });
                }
            }, function (err) {
                _this.leer = false;
                _this.msj.showError3('Error', err.error);
            });
        }
        else { }
    };
    ParqueolicenciaPage.prototype.salidita = function () {
        var _this = this;
        var creat = 'Actualiza';
        var options = {
            estado: 'Salisa exitosa',
            fotos: this.image,
            horas: 0,
            tsalida: this.fecha,
            bitacora: { idempresa: this.navParams.data.idempresa, idafiliado: '', monto: this.username, permiso: creat, accion: creat + ' salida casa ' }
        };
        if (options) {
            this.authService.createReg(this.dpitt, options, 'Entradascasas').then(function (result) {
                _this.no_orientacion = '';
                _this.image = '';
                _this.dpitt = '';
                _this.nombrett = '';
                _this.fechatt = '';
                _this.horaprint = '';
                _this.leer = false;
                _this.msj.showError3('Exito', 'La salida a sido realizada exitosamente..');
            }, function (err) {
                _this.msj.showError3('Error', err.error);
                _this.leer = false;
            });
        }
    };
    ParqueolicenciaPage.prototype.showFilter = function () {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'ingrese CUI',
            inputs: [
                {
                    name: 'dpi'
                }
            ],
            buttons: [
                {
                    text: 'cancelar'
                },
                {
                    text: 'Aceptar',
                    handler: function (todo) {
                        if (todo) {
                            _this.dpitt = todo.dpi;
                            _this.authService.getReg('noboleta/' + todo.dpi, 'asignapaps').then(function (data) {
                                _this.items = data;
                            }, function (err) {
                                _this.msj.showError3('Error', err.error);
                            });
                        }
                    }
                }
            ]
        });
        prompt.present();
    };
    ParqueolicenciaPage.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get('username').then(function (value) {
            _this.username = value;
        });
        this.storage.get('tiposus').then(function (value) {
            _this.tiposus = value.split(',');
        });
    };
    ParqueolicenciaPage.prototype.cancel = function () {
        this.viewCtrl.dismiss();
    };
    ParqueolicenciaPage.prototype.done = function () {
        if (!this.form.valid) {
            return;
        }
        //this.viewCtrl.dismiss(this.form.value);
    };
    ParqueolicenciaPage.prototype.updateList = function (ev) {
        if (ev.key == 'Enter' && this.leer == false) {
            this.leer = true;
            var salidat = new Date();
            var fechaini = (new Date()).toISOString();
            this.horadb = fechaini.split('T')[0] + 'T' + salidat.getHours() + ':' + salidat.getMinutes() + ":00.000Z";
            this.horaprint = fechaini.split('T')[0] + ' ' + salidat.getHours() + ':' + salidat.getMinutes();
            this.entra = 'aaa';
            var aa = ev.target.value;
            console.log(aa);
            if (aa.indexOf(';') > 0) {
                var bb = aa.split(';');
                var dd = bb[0];
                this.dpitt = dd.substring(5, dd.length);
                this.dpitt = this.dpitt.substring(0, 9) + this.dpitt.substring(10, 14);
                this.procesaingreso();
            }
            var bb2;
            if (aa.indexOf(']') > 0) {
                bb2 = aa.split(']');
                this.nombrett = bb2[2] + ' ' + bb2[3] + ' ' + bb2[4] + ' ' + bb2[5];
                this.dpitt = bb2[8];
                this.direcciontt = bb2[9];
                this.fechatt = bb2[6];
                this.procesaingreso();
            }
            if (aa.indexOf('|') > 0) {
                bb2 = aa.split('|');
                this.nombrett = bb2[2] + ' ' + bb2[3] + ' ' + bb2[4] + ' ' + bb2[5];
                this.dpitt = bb2[8];
                this.direcciontt = bb2[9];
                this.fechatt = bb2[6];
                this.procesaingreso();
            }
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('fileInput'),
        __metadata("design:type", Object)
    ], ParqueolicenciaPage.prototype, "fileInput", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('searchbar'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["A" /* Searchbar */])
    ], ParqueolicenciaPage.prototype, "searchbar", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("video"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], ParqueolicenciaPage.prototype, "video", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("canvas"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], ParqueolicenciaPage.prototype, "canvas", void 0);
    ParqueolicenciaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-parqueolicencia',template:/*ion-inline-start:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\BUSES\parqueolicencia\parqueolicencia.html"*/'<ion-header>\n    <ion-navbar  [color]="\'navbarColor\'">\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n          </button>\n      <ion-title>\n       Entradas y Salidas\n      </ion-title>   \n  \n      <ion-buttons end>\n          <button  rel="tooltip" title="Entrada" (click)="entradita()" icon-only ion-button padding-right>\n              <ion-icon name="log-in"></ion-icon>\n            </button>\n          <button  rel="tooltip" title="Salida" (click)="salidita()" icon-only ion-button padding-right>\n              <ion-icon name="log-out"></ion-icon>\n            </button>\n\n            <button  rel="tooltip" title="Buscar por cui" (click)="showFilter()" icon-only ion-button padding-right>\n                <ion-icon name="funnel"></ion-icon>\n              </button>\n        \n        </ion-buttons>\n         \n    </ion-navbar>       \n   \n  \n  </ion-header>\n    \n  <ion-content  class="list-avatar-page" padding>\n     \n      <form     [formGroup]="form"   text-wrap>\n          <ion-list>\n                   <ion-searchbar primary  #searchbar\n                  (keyup)="updateList($event)"\n                  show-cancel="true"  [(ngModel)]="no_orientacion" \n                  [formControl]="form.controls[\'no_orientacion\']"\n                  placeholder="Toma de documentos">\n                 </ion-searchbar>\n                 <h1>DPI: {{dpitt}}</h1>\n                    <h2>Nombre: {{nombrett}}</h2>\n                    <p>Telefono: {{dpitt}}</p>\n                    <p>Fecha nacimiento: {{fechatt}}</p>\n                    <p>Fecha y hora: {{horaprint}}</p>\n                       <ion-grid>  \n                        <ion-row> \n                          <ion-col col-6>\n                              <video #video  id="user-video-element" width="300" height="300" autoplay></video>\n                          </ion-col>\n                          <ion-col col-6>\n                              <img src="{{image}}" width="300" height="300"  />\n                          </ion-col>\n                        </ion-row>\n                      </ion-grid>\n                   \n                   \n                     <canvas #canvas id="canvas" width="640" height="480"></canvas>\n                   \n                  \n\n               \n           </ion-list>\n\n         \n        </form>\n      \n  \n  </ion-content>'/*ion-inline-end:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\BUSES\parqueolicencia\parqueolicencia.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers__["c" /* ImageProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3__providers__["d" /* NotificationProvider */], __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["F" /* ViewController */], __WEBPACK_IMPORTED_MODULE_3__providers__["a" /* Auth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */]])
    ], ParqueolicenciaPage);
    return ParqueolicenciaPage;
}());

//# sourceMappingURL=parqueolicencia.js.map

/***/ }),

/***/ 908:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParqueolicenciaPageModule", function() { return ParqueolicenciaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__parqueolicencia__ = __webpack_require__(1348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__ = __webpack_require__(445);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ParqueolicenciaPageModule = /** @class */ (function () {
    function ParqueolicenciaPageModule() {
    }
    ParqueolicenciaPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__parqueolicencia__["a" /* ParqueolicenciaPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__parqueolicencia__["a" /* ParqueolicenciaPage */]),
                __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["b" /* TranslateModule */].forChild(),
                __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__["a" /* PipesModule */]
            ],
        })
    ], ParqueolicenciaPageModule);
    return ParqueolicenciaPageModule;
}());

//# sourceMappingURL=parqueolicencia.module.js.map

/***/ })

});
//# sourceMappingURL=252.js.map