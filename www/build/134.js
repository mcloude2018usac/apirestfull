webpackJsonp([134],{

/***/ 1032:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParticipaForms200PageModule", function() { return ParticipaForms200PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__participa_forms200__ = __webpack_require__(1474);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ParticipaForms200PageModule = /** @class */ (function () {
    function ParticipaForms200PageModule() {
    }
    ParticipaForms200PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__participa_forms200__["a" /* ParticipaForms200Page */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__participa_forms200__["a" /* ParticipaForms200Page */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__participa_forms200__["a" /* ParticipaForms200Page */]
            ]
        })
    ], ParticipaForms200PageModule);
    return ParticipaForms200PageModule;
}());

//# sourceMappingURL=participa-forms200.module.js.map

/***/ }),

/***/ 1474:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParticipaForms200Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_image_image__ = __webpack_require__(448);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_camera__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_geolocation__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2_storage__ = __webpack_require__(454);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var ParticipaForms200Page = /** @class */ (function () {
    function ParticipaForms200Page(afStorage, geolocation, loadingCtrl, _IMAGE, storage, msj, translateService, viewCtrl, authService, navCtrl, navParams, _FB, actionSheetCtrl, events
        //, private media: Media, private mediaCapture: MediaCapture,
    ) {
        var _this = this;
        this.afStorage = afStorage;
        this.geolocation = geolocation;
        this.loadingCtrl = loadingCtrl;
        this._IMAGE = _IMAGE;
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
        this.username = "usuarioforms";
        this.tiposus = [];
        this.rapido = 'no';
        this.f1 = './assets/img/blanco.png';
        this.f2 = './assets/img/blanco.png';
        this.f3 = '';
        this.selectedVideo = '';
        this.videomira = true;
        this.xpos = 0;
        this.ypos = 0;
        this.automatico = true;
        this.createdCode = null;
        this.scannedCode = null;
        this.vtarifa = [];
        this.form = this._FB.group({
            motivo: [''],
            tipo: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            f1: [''],
            f3: [''],
            f2: ['']
        });
        //  this.files = this.dataProvider.getFiles();
        this.translateService.get('APPX').subscribe(function (value) {
            _this.idempresa = value;
            _this.authService.getReg('5c6394cbcffe290016d494b5' + '/' + _this.idempresa, 'dcatalogos').then(function (result) {
                _this.vtarifa = result;
            }, function (err) {
                _this.msj.showError3('Error', err.error);
            });
        });
        this.geolocation.getCurrentPosition()
            .then(function (resp) {
            _this.xpos = resp.coords.latitude;
            _this.ypos = resp.coords.longitude;
        });
    }
    ParticipaForms200Page.prototype.ionViewWillUnload = function () {
    };
    ParticipaForms200Page.prototype.datipo = function (op) {
        var val;
        for (var i = 0; i < this.vtarifa.length; i++) {
            if (this.vtarifa[i]._id == op) {
                val = this.vtarifa[i].nombre;
                break;
            }
        }
        return val;
    };
    ParticipaForms200Page.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.rapido = 'si';
        this.storage.get('username').then(function (value) {
            _this.username = value;
            _this.correo = value;
        });
        this.storage.get('tiposus').then(function (value) {
            _this.tiposus = value.split(',');
            _this.idsuscriptor = _this.tiposus[3];
            _this.cuitt = _this.tiposus[2];
            _this.cui = _this.tiposus[2];
            _this.nombre = _this.tiposus[4];
            var cc = _this.tiposus[5];
            if (cc == '') {
                _this.unidad = '';
            }
            else {
                if (cc.length < 10) {
                    _this.authService.getReg('registroest/' + cc + '/CARNE', 'datosfijos').then(function (data) {
                        //           this.authService.getReg(cc ,'carne').then((data) => {
                        _this.unidad = data[0].facultad;
                    }, function (err) {
                        _this.unidad = '';
                    });
                }
            }
        });
        this.automatico = true;
        //    this.takePhotograph(1);
    };
    ParticipaForms200Page.prototype.onSelectChange = function (selectedValue) {
        this.tipott = selectedValue;
        // this.myInput2.setFocus();
        //this.focused('a')
    };
    ParticipaForms200Page.prototype.focused = function (selectedValue) {
        //this.motivo=selectedValue
    };
    ParticipaForms200Page.prototype.mandatodo = function (f1, f2, f3, mmt, ll) {
        var _this = this;
        var options = {
            cui: this.cui,
            nombre: this.nombre,
            apellido: '.',
            correo: this.correo,
            telefono: '',
            unidad: this.unidad,
            tipo: this.form.controls['tipo'].value,
            motivo: mmt,
            f1: f1,
            f2: f2,
            f3: f3,
            xpos: this.xpos,
            ypos: this.ypos
        };
        this.authService.createRegsinmsg('', options, 'participa3s').then(function (result) {
            var items = [];
            items = result;
            var idt = items._id;
            var nombret = _this.nombre;
            var html1 = '';
            html1 = ' <div class="es-wrapper-color">      <table cellpadding="0" cellspacing="0" class="es-wrapper" width="100%">    <tbody><tr>    <td valign="top" class="esd-email-paddings"><table cellpadding="0" cellspacing="0" class="es-header esd-header-popover" align="center">    <tbody><tr>    <td class="esd-stripe" align="center"><table class="es-header-body" align="center" cellpadding="0" cellspacing="0" width="600">    <tbody><tr>    <td class="esd-structure es-p20b es-p20r es-p20l" align="left"><table cellpadding="0" cellspacing="0" width="100%">    <tbody><tr>    <td width="560" class="esd-container-frame" align="center" valign="top"><table cellpadding="0" cellspacing="0" width="100%">    <tbody><tr>    <td align="center" class="esd-block-image"><a href="" target="_blank"><img src="http://52.90.195.238:8500/logousac1.png" alt="" width="124" style="display: block;"></a>    </td></tr>    </tbody></table>    </td></tr>    </tbody></table>    </td></tr>    </tbody></table>    </td></tr>    </tbody></table><table cellpadding="0" cellspacing="0" class="es-content esd-footer-popover" align="center">    <tbody><tr>    <td class="esd-stripe" align="center"><table bgcolor="#ffffff" class="es-content-body" align="center" cellpadding="0" cellspacing="0" width="600">    <tbody><tr>    <td class="esd-structure es-p20" align="left"><table cellpadding="0" cellspacing="0" width="100%">    <tbody><tr>    <td width="560" class="esd-container-frame" align="center" valign="top"><table cellpadding="0" cellspacing="0" width="100%">    <tbody><tr>    <td align="center" class="esd-block-text es-p15b"><h2 style="font-size: 16px; text-align: center;"><strong>GRACIAS POR TU APORTE A  LA UNIVERSIDAD DE SAN CARLOS DE GUATEMALA</strong></h2><p></p><p></p><strong>Tipo reporte:</strong> ' + _this.datipo(_this.form.controls['tipo'].value) + '</p><p><br></p><p></p><p></p><strong>Reporte enviado por:</strong> ' + nombret + '</p><p><br></p><p>Descripción: ' + mmt + '</p><p><br></p><p>Tu información personal es de carácter confidencial. A la brevedad estaremos tomando las medidas y sanciones correspondientes conforme el reglamento interno de nuestra Institución.</p><p></p><p>Cordialmente,<br>Ing. Murphy Paiz</p><p><br>Rector</p>    </td></tr>    </tbody></table>    </td></tr>    </tbody></table>    </td></tr>    </tbody></table>    </td></tr>    </tbody></table>    </td></tr>    </tbody></table>    </div>';
            var options2 = {
                destino: _this.correo,
                html: html1,
                text: html1,
                subjet: 'Denuncia usacenlinea',
                actualiza: { tipo: 'participantes2', id: idt, estado: 'Ingreso, mail enviado',
                    otros: '' }
            };
            _this.authService.mandamail2('', options2, 'mails').then(function (data) {
                ll.dismiss();
                _this.msj.showError3('¡Gracias!', 'La información recibida es confidencial');
                _this.cancel();
            }, function (err) {
                ll.dismiss();
                _this.msj.showError3('¡Gracias!', 'La información recibida es confidencial');
                _this.cancel();
            });
        }, function (err) {
            ll.dismiss();
            _this.msj.showError3('Error', err.error);
        });
    };
    ParticipaForms200Page.prototype.manageGallery = function () {
        var _this = this;
        if (this.f1 == './assets/img/blanco.png' && !this.motivo) {
            this.msj.showError3('Error', 'Para poder mandar una denuncia, Por favor tome una foto o ingrese un motivo');
        }
        else {
            var mmt = '';
            if (this.motivo) {
                mmt = this.form.controls['motivo'].value;
            }
            if (this.navParams.get("record") == null) {
                var uno = 0;
                var dos = 0;
                var tres = 0;
                if (this.filegenerado) {
                    uno = 1;
                }
                if (this.filegenerado1) {
                    dos = 1;
                }
                if (this.filegenerado2) {
                    tres = 1;
                }
                var loading_1 = this.loadingCtrl.create({
                    spinner: 'bubbles',
                    content: "Enviando notificación, te mandaremos un email  a " + this.correo + "."
                });
                loading_1.present();
                if (uno == 0 && dos == 0 && tres == 0) {
                    this.mandatodo('', '', '', mmt, loading_1);
                }
                else {
                    if (uno == 1 && dos == 1 && tres == 1) {
                        var tam = this.filegenerado.target.files[0].size / 1024;
                        if (tam > 15000) {
                            this.msj.showError3('Error', 'El tamaño de los videos debe ser < 15 MEGAS');
                            loading_1.dismiss();
                        }
                        else {
                            this.ref = this.afStorage.ref(Math.random().toString(36).substring(2));
                            this.task = this.ref.put(this.filegenerado.target.files[0]);
                            this.task.then().then(function (res) {
                                _this.ref = _this.afStorage.ref(Math.random().toString(36).substring(2));
                                _this.task = _this.ref.put(_this.filegenerado1.target.files[0]);
                                _this.task.then().then(function (res1) {
                                    _this.ref = _this.afStorage.ref(Math.random().toString(36).substring(2));
                                    _this.task = _this.ref.put(_this.filegenerado2.target.files[0]);
                                    _this.task.then().then(function (res2) {
                                        _this.mandatodo(res1.downloadURL, res2.downloadURL, res.downloadURL, mmt, loading_1);
                                    });
                                });
                            });
                        }
                    }
                    else {
                        if (uno == 1 && dos == 0 && tres == 0) {
                            var tam2 = this.filegenerado.target.files[0].size / 1024;
                            if (tam2 > 15000) {
                                this.msj.showError3('Error', 'El tamaño de los videos debe ser < 15 MEGAS');
                            }
                            else {
                                this.ref = this.afStorage.ref(Math.random().toString(36).substring(2));
                                this.task = this.ref.put(this.filegenerado.target.files[0]);
                                this.task.then().then(function (res) {
                                    _this.mandatodo('', '', res.downloadURL, mmt, loading_1);
                                });
                            }
                        }
                        else {
                            if (uno == 1 && dos == 1 && tres == 0) {
                                this.ref = this.afStorage.ref(Math.random().toString(36).substring(2));
                                this.task = this.ref.put(this.filegenerado.target.files[0]);
                                this.task.then().then(function (res) {
                                    _this.ref = _this.afStorage.ref(Math.random().toString(36).substring(2));
                                    _this.task = _this.ref.put(_this.filegenerado1.target.files[0]);
                                    _this.task.then().then(function (res1) {
                                        _this.mandatodo(res1.downloadURL, '', res.downloadURL, mmt, loading_1);
                                    });
                                });
                            }
                            else {
                                if (uno == 0 && dos == 1 && tres == 0) {
                                    this.ref = this.afStorage.ref(Math.random().toString(36).substring(2));
                                    this.task = this.ref.put(this.filegenerado1.target.files[0]);
                                    this.task.then().then(function (res1) {
                                        _this.mandatodo(res1.downloadURL, '', '', mmt, loading_1);
                                    });
                                }
                                else {
                                    if (uno == 0 && dos == 1 && tres == 1) {
                                        this.ref = this.afStorage.ref(Math.random().toString(36).substring(2));
                                        this.task = this.ref.put(this.filegenerado1.target.files[0]);
                                        this.task.then().then(function (res1) {
                                            _this.ref = _this.afStorage.ref(Math.random().toString(36).substring(2));
                                            _this.task = _this.ref.put(_this.filegenerado2.target.files[0]);
                                            _this.task.then().then(function (res2) {
                                                _this.mandatodo(res1.downloadURL, res2.downloadURL, '', mmt, loading_1);
                                            });
                                        });
                                    }
                                    else {
                                        if (uno == 0 && dos == 0 && tres == 1) {
                                            this.ref = this.afStorage.ref(Math.random().toString(36).substring(2));
                                            this.task = this.ref.put(this.filegenerado2.target.files[0]);
                                            this.task.then().then(function (res2) {
                                                _this.mandatodo('', res2.downloadURL, '', mmt, loading_1);
                                            });
                                        }
                                        else {
                                            if (uno == 1 && dos == 0 && tres == 1) {
                                                this.ref = this.afStorage.ref(Math.random().toString(36).substring(2));
                                                this.task = this.ref.put(this.filegenerado.target.files[0]);
                                                this.task.then().then(function (res) {
                                                    _this.ref = _this.afStorage.ref(Math.random().toString(36).substring(2));
                                                    _this.task = _this.ref.put(_this.filegenerado2.target.files[0]);
                                                    _this.task.then().then(function (res2) {
                                                        _this.mandatodo('', res2.downloadURL, res.downloadURL, mmt, loading_1);
                                                    });
                                                });
                                            }
                                            else {
                                                loading_1.dismiss();
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    };
    ParticipaForms200Page.prototype.cancel = function () {
        this.viewCtrl.dismiss();
    };
    ParticipaForms200Page.prototype.updateProfileImage = function (op) {
        this.opimg = op;
        if (op == 3) {
            this.fileInput3.nativeElement.click();
        }
        else {
            if (op == 2) {
                this.fileInput2.nativeElement.click();
            }
            else {
                this.fileInput.nativeElement.click();
            }
        }
    };
    ParticipaForms200Page.prototype.updateProfileImage2 = function (op) {
        this.opimg = op;
        this.fileInput3.nativeElement.click();
    };
    ParticipaForms200Page.prototype.takePhotograph = function (op) {
        var _this = this;
        if (__WEBPACK_IMPORTED_MODULE_7__ionic_native_camera__["a" /* Camera */]['installed']()) {
            this._IMAGE
                .takePhotograph()
                .then(function (image) {
                if (op == 1) {
                    _this.f1 = image.toString();
                }
                if (op == 2) {
                    _this.f2 = image.toString();
                }
            })
                .catch(function (err) {
                console.log(err);
            });
        }
        else {
            this.fileInput.nativeElement.click();
        }
    };
    ParticipaForms200Page.prototype.selectImage = function (op) {
        var _this = this;
        if (__WEBPACK_IMPORTED_MODULE_7__ionic_native_camera__["a" /* Camera */]['installed']()) {
            this._IMAGE
                .selectPhotograph()
                .then(function (image) {
                if (op == 1) {
                    _this.f1 = image.toString();
                }
                ;
                if (op == 2) {
                    _this.f2 = image.toString();
                }
                ;
            })
                .catch(function (err) {
                console.log(err);
            });
        }
        else {
            this.fileInput.nativeElement.click();
        }
    };
    ParticipaForms200Page.prototype.processWebImage = function (event, op) {
        var _this = this;
        if (event.target.files && event.target.files[0]) {
            this.videomira = true;
            var loading_2 = this.loadingCtrl.create({
                spinner: 'bubbles',
                content: "Espere un momento....."
            });
            loading_2.present();
            var reader = new FileReader();
            reader.onload = function (readerEvent) {
                if (_this.opimg == 1) {
                    _this.filegenerado1 = event;
                    _this.f1 = readerEvent.target.result;
                    _this._IMAGE.generateFromImage(_this.f1, 300, 300, 2, function (data) {
                        _this.f1 = data;
                        loading_2.dismiss();
                        if (_this.automatico == true) {
                            _this.select1.open();
                        }
                    });
                }
                if (_this.opimg == 3) {
                    _this.filegenerado = event;
                    _this.f3 = readerEvent.target.result;
                    var encodingType = "data:video/mp4;base64,";
                    var OriginalBase64 = readerEvent.target.result.split(',')[1]; // Remove the "data:video..." string.
                    var decodedBase64 = atob(OriginalBase64); // Decode the incorrectly encoded base64 string.
                    var encodedBase64 = btoa(decodedBase64); // re-encode the base64 string (correctly).
                    var newBase64 = encodingType + encodedBase64; // Add the encodingType to the string.
                    if ((readerEvent.loader / 1024) <= 10) {
                        _this.f3 = '';
                        var video = _this.myVideo.nativeElement;
                        video.src = '';
                        _this.videomira = false;
                        _this.msj.showError3('Error', 'El tamaño de los videos debe ser < 10 MEGAS');
                    }
                    else {
                        var video = _this.myVideo.nativeElement;
                        video.src = newBase64;
                        _this.videomira = false;
                    }
                    loading_2.dismiss();
                    //  video.play();
                }
                if (_this.opimg == 2) {
                    _this.filegenerado2 = event;
                    _this.f2 = readerEvent.target.result;
                    _this._IMAGE.generateFromImage(_this.f2, 300, 300, 2, function (data) {
                        _this.f2 = data;
                        loading_2.dismiss();
                    });
                }
            };
            reader.readAsDataURL(event.target.files[0]);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('fileInput'),
        __metadata("design:type", Object)
    ], ParticipaForms200Page.prototype, "fileInput", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('fileInput2'),
        __metadata("design:type", Object)
    ], ParticipaForms200Page.prototype, "fileInput2", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('fileInput3'),
        __metadata("design:type", Object)
    ], ParticipaForms200Page.prototype, "fileInput3", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myvideo'),
        __metadata("design:type", Object)
    ], ParticipaForms200Page.prototype, "myVideo", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('select1'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["B" /* Select */])
    ], ParticipaForms200Page.prototype, "select1", void 0);
    ParticipaForms200Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-participa-forms200',template:/*ion-inline-start:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\EVENTOS\participa-forms200\participa-forms200.html"*/'<ion-header>\n    <ion-navbar hideBackButton>\n      <ion-title>Ingresar reporte</ion-title>\n      <ion-buttons start>  \n          <button (click)="cancel()" icon-only ion-button padding-right>\n              <ion-icon name="md-close"></ion-icon>\n            </button>\n        \n      </ion-buttons>\n    </ion-navbar> \n  </ion-header>\n  <ion-content overflow-scroll="true"> \n   \n  <br>\n\n    <div class="splash-info">\n        Usuario:  {{nombre}} \n      </div>\n\n      <br> \n\n    <form     [formGroup]="form"   text-wrap noline>\n      <ion-list>\n                \n            \n\n        <input   type="hidden"    name="f1" [formControl]="form.controls[\'f1\']"    [(ngModel)]="f1">\n        <input type="file" accept="image/*" #fileInput style="visibility: hidden; height: 0px" (change)="processWebImage($event,1)" />\n        <input   type="hidden"    name="f2" [formControl]="form.controls[\'f2\']"    [(ngModel)]="f2">\n        <input type="file" accept="image/*" #fileInput2 style="visibility: hidden; height: 0px" (change)="processWebImage($event,2)" />\n   \n        <input   type="hidden"    name="f3" [formControl]="form.controls[\'f3\']"    [(ngModel)]="f3">\n        <input type="file" accept="video/mp4" #fileInput3 style="visibility: hidden; height: 0px" (change)="processWebImage($event,3)"   />\n \n        <ion-grid>  \n          <ion-row> \n            <ion-col col-4>\n              <button ion-button icon-only block color="secondary"  (click)="updateProfileImage(1)" class="btn-facebook">\n                <ion-icon name="camera"></ion-icon>\n              </button>  \n            </ion-col>\n            <ion-col col-4>\n              <button ion-button icon-only block color="secondary"  (click)="updateProfileImage(2)" class="btn-twitter">\n                <ion-icon name="camera"></ion-icon>\n              </button>\n            </ion-col>\n          \n            <ion-col col-4>\n              <button ion-button icon-only block (click)="updateProfileImage(3)" color="secondary" >\n                <ion-icon name="videocam"></ion-icon>\n              </button>\n              \n            </ion-col>\n           \n\n          </ion-row>\n        </ion-grid>\n\n   \n    \n<ion-item >  \n        <ion-label class="my-label18" color="secondary2" >Tipo denuncia (*)</ion-label>\n        <ion-select  #select1 (ionChange)="onSelectChange($event)"  [(ngModel)]="tipo" [formControl]="form.controls[\'tipo\']" >\n           <ion-option text-wrap *ngFor="let item of vtarifa"  [value]="item._id">{{item.nombre}}</ion-option>\n       </ion-select>  \n    \n        \n     </ion-item>\n     <ion-item class="invalid" *ngIf="!form.controls.tipo.valid && (form.controls.tipo.dirty || form.controls.tipo.touched)" text-wrap>\n       <ion-icon name="warning"></ion-icon>\n       Ingrese un tipo de denuncia valido\n      </ion-item>\n       \n  \n\n  \n           <ion-item >\n              <ion-label class="my-label18" color="secondary2"  stacked>Breve descripción de lo ocurrido:</ion-label>\n              <ion-textarea  (focusout)="focused($event)"  rows="4"\n                 type="text"\n                 [(ngModel)]="motivo"  \n                 [formControl]="form.controls[\'motivo\']"></ion-textarea >\n           </ion-item>   \n          \n    \n              <button  ion-button full color="secondary" (click)="manageGallery()" [disabled]="!form.valid" strong>\n                  ENVIAR\n                </button>\n              \n\n            \n           <ion-row>\n             \n\n              <ion-col text-left>\n                  <img [src]="f1" class="circle-pic"  height="100 px" width="100 px">\n                </ion-col>\n\n                <ion-col text-center>\n\n                <video [hidden]="videomira" #myvideo height="300" width="300" controls></video>\n                </ion-col> \n              <ion-col text-right>\n                  <img [src]="f2"  class="circle-pic"  height="100 px" width="100 px">\n                </ion-col>\n\n               \n                \n\n            </ion-row>\n\n\n          \n         \n       </ion-list>    \n  \n     \n       \n    </form>\n      \n<!--\n    <div class="container">\n      <div class="card">\n       \n        <div class="card-body">\n          <h5 class="card-title">Select a file for upload:</h5>\n          <input type="file" (change)="upload($event)" accept=".png,.jpg,.mov,.mp4" />\n          <br><br>\n          <div>\n            <div role="progressbar" \n            [style.width]="(uploadProgress | async) + \'%\'" [attr.aria-valuenow]="(uploadProgress | async)" \n            aria-valuemin="0" aria-valuemax="100"></div>\n          </div>\n          <br>\n          <div *ngIf="downloadURL | async; let downloadSrc" class="alert alert-info" role="alert">\n              File uploaded: <a [href]="downloadSrc">{{downloadSrc}}</a>\n          </div>\n          <br>\n          <div class="btn-group" role="group" *ngIf="uploadState | async; let state">\n              <button type="button" class="btn btn-primary" (click)="task.pause()" [disabled]="state === \'paused\'">Pause</button>\n              <button type="button" class="btn btn-primary" (click)="task.cancel()" [disabled]="!(state === \'paused\' || state === \'running\')">Cancel</button>\n              <button type="button" class="btn btn-primary" (click)="task.resume()" [disabled]="state === \'running\'">Resume</button>\n          </div>\n        </div>\n      </div>\n    </div>\n-->\n\n  </ion-content>'/*ion-inline-end:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\EVENTOS\participa-forms200\participa-forms200.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_9_angularfire2_storage__["a" /* AngularFireStorage */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_6__providers_image_image__["a" /* ImageProvider */], __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3__providers__["d" /* NotificationProvider */], __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["F" /* ViewController */], __WEBPACK_IMPORTED_MODULE_3__providers__["a" /* Auth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */]
            //, private media: Media, private mediaCapture: MediaCapture,
        ])
    ], ParticipaForms200Page);
    return ParticipaForms200Page;
}());

//# sourceMappingURL=participa-forms200.js.map

/***/ })

});
//# sourceMappingURL=134.js.map