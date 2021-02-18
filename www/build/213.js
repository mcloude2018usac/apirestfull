webpackJsonp([213],{

/***/ 1373:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SolprestamoCreatePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_image_image__ = __webpack_require__(448);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_camera__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2_storage__ = __webpack_require__(454);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var SolprestamoCreatePage = /** @class */ (function () {
    function SolprestamoCreatePage(afStorage, loadingCtrl, _IMAGE, storage, msj, translateService, viewCtrl, authService, navCtrl, navParams, _FB, actionSheetCtrl, events) {
        var _this = this;
        this.afStorage = afStorage;
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
        this.f1 = './assets/img/blanco.png';
        this.f2 = './assets/img/blanco.png';
        this.f3 = './assets/img/blanco.png';
        this.f4 = './assets/img/blanco.png';
        this.f5 = './assets/img/blanco.png';
        this.f6 = './assets/img/blanco.png';
        this.f7 = './assets/img/blanco.png';
        this.f8 = './assets/img/blanco.png';
        this.f9 = './assets/img/blanco.png';
        this.f10 = './assets/img/blanco.png';
        this.f1a = '';
        this.f2a = '';
        this.f3a = '';
        this.f4a = '';
        this.f5a = '';
        this.f6a = '';
        this.f7a = '';
        this.f8a = '';
        this.f9a = '';
        this.f10a = '';
        this.username = "";
        this.videomira = true;
        this.sl1 = '0';
        this.sl2 = '0';
        this.sl3 = '0';
        this.sl4 = '0';
        this.sl5 = '0';
        this.sl6 = '0';
        this.sl7 = '0';
        this.sl8 = '0';
        this.sl9 = '0';
        this.lop1 = '0';
        this.lop2 = '0';
        this.lop3 = '0';
        this.lop4 = '0';
        this.lop5 = '0';
        this.lop6 = '0';
        this.lop7 = '0';
        this.lop8 = '0';
        this.lop9 = '0';
        this.estado = 'Solicitando préstamo';
        this.tiposus = [];
        this.vinteres = [];
        this.pactualizacion = false;
        this.translateService.get('APPX').subscribe(function (value) {
            _this.idempresa = value;
        });
        // Define form validation - VERY basic!
        this.form = this._FB.group({
            nombre: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            interes: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            cui: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            monto: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            plazo: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            f1: [''],
            f2: [''],
            f3: [''],
            f4: [''],
            f5: [''],
            f6: [''],
            f7: [''],
            f8: [''],
            f9: [''],
            f1a: [''],
            f2a: [''],
            f3a: [''],
            f4a: [''],
            f5a: [''],
            f6a: [''],
            f7a: [''],
            f8a: [''],
            f9a: [''],
        });
        //  this.vinteres=[{"id":"USAC","nombre":"USAC"},{"id":"BUSES","nombre":"BUSES"},{"id":"TICKES","nombre":"TICKES"}];
        this.pactualizacion = this.navParams.get("actualizacion");
    }
    SolprestamoCreatePage.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get('username').then(function (value) {
            _this.username = value;
        });
        if (this.navParams.get("record") == null) {
            this.interes = "4.5";
            this.plazo = "48";
            this.monto = "15000";
            this.cui = this.navParams.get("cui");
            this.carne = this.navParams.get("carne");
        }
        this.storage.get('tiposus').then(function (value) {
            _this.tiposus = value.split(',');
            if (_this.navParams.get("record") == null) {
                _this.nombre = _this.tiposus[4];
            }
        });
        for (var i in this.form.controls) {
            this.form.controls[i].setValue(this.form.controls[i].value);
            this.form.controls[i].markAsTouched();
        }
    };
    SolprestamoCreatePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        if (this.navParams.get("record") == null) {
            this.sololeer = false;
            this.sl1 = '';
            this.sl2 = '';
            this.sl3 = '';
            this.sl4 = '';
            this.sl5 = '';
            this.sl6 = '';
            this.sl7 = '';
            this.sl8 = '';
            this.sl9 = '';
            this.translateService.get('ITEM_CREATE_TITLE').subscribe(function (value) {
                _this.pageTitle = 'Creación de solicitud de préstamo';
            });
            this.isDisablednit = true;
        }
        else {
            this.sololeer = true;
            this._ID = this.navParams.data.record._id;
            this.nombre = this.navParams.data.record.nombre;
            this.cui = this.navParams.data.record.cui;
            this.interes = this.navParams.data.record.interes;
            this.carne = this.navParams.data.record.codpersonal;
            this.monto = this.navParams.data.record.monto;
            this.plazo = this.navParams.data.record.plazo;
            this.estado = this.navParams.data.record.estado;
            this.ultrechazo = this.navParams.data.record.ultrechazo;
            this.ultrechazo2 = this.navParams.data.record.ultrechazo2;
            this.f1 = this.navParams.data.record.requisito1;
            this.f2 = this.navParams.data.record.requisito2;
            this.f3 = this.navParams.data.record.requisito3;
            this.f4 = this.navParams.data.record.requisito4;
            this.f5 = this.navParams.data.record.requisito5;
            this.f6 = this.navParams.data.record.requisito6;
            this.f7 = this.navParams.data.record.requisito7;
            this.f8 = this.navParams.data.record.requisito8;
            this.f9 = this.navParams.data.record.requisito9;
            this.f1a = 'si';
            this.f2a = 'si';
            this.f3a = 'si';
            this.f4a = 'si';
            this.f5a = 'si';
            this.f6a = 'si';
            this.f7a = 'si';
            this.f8a = 'si';
            this.f9a = 'si';
            var cad = this.navParams.data.record.ultrechazo2;
            var arr = cad.split('°');
            this.lop1 = arr[0];
            this.lop2 = arr[1];
            this.lop3 = arr[2];
            this.lop4 = arr[3];
            this.lop5 = arr[4];
            this.lop6 = arr[5];
            this.lop7 = arr[6];
            this.lop8 = arr[7];
            this.lop9 = arr[8];
            if (this.lop1 == 'undefined') {
                this.lop1 = '0';
            }
            if (this.lop2 == 'undefined') {
                this.lop2 = '0';
            }
            if (this.lop3 == 'undefined') {
                this.lop3 = '0';
            }
            if (this.lop4 == 'undefined') {
                this.lop4 = '0';
            }
            if (this.lop5 == 'undefined') {
                this.lop5 = '0';
            }
            if (this.lop6 == 'undefined') {
                this.lop6 = '0';
            }
            if (this.lop7 == 'undefined') {
                this.lop7 = '0';
            }
            if (this.lop8 == 'undefined') {
                this.lop8 = '0';
            }
            if (this.lop9 == 'undefined') {
                this.lop9 = '0';
            }
            if (this.lop1 !== '0')
                this.sl1 = 'Solicitud firmada por el trabajador solicitante';
            if (this.lop2 !== '0')
                this.sl2 = 'Fotocopia de DPI legible';
            if (this.lop3 !== '0')
                this.sl3 = 'Fotocopia del último voucher de sueldo del trabajador';
            if (this.lop4 !== '0')
                this.sl4 = 'Certificación de Relación Laboral extendida por la División de Administración de Recursos Humanos, donde conste el monto de indemnización estimada ';
            if (this.lop5 !== '0')
                this.sl5 = 'Fotocopia de recibo reciente de agua, luz o teléfono';
            if (this.lop6 !== '0')
                this.sl6 = 'Consentimiento para ser asegurado';
            if (this.lop7 !== '0')
                this.sl7 = 'Carta de consentimiento del deudor ';
            if (this.lop8 !== '0')
                this.sl8 = 'Los trabajadores que tienen contrato a término, deberán presentar constancia de recontratación';
            if (this.lop9 !== '0')
                this.sl9 = 'Presentar la proforma del equipo de cómputo a adquirir';
            this.isDisablednit = false;
            this.translateService.get('ITEM_UPDATE_TITLE').subscribe(function (value) {
                _this.pageTitle = 'Actualización de solicitud de préstamo';
            });
        }
    };
    SolprestamoCreatePage.prototype.onSelectChange1j = function (selectedValue) {
        this.plazo = selectedValue;
    };
    SolprestamoCreatePage.prototype.manageGallery0 = function () {
        var _this = this;
        this.f3l = ' ';
        this.f4l = ' ';
        this.f8l = ' ';
        if (this.f1a == '' || this.f2a == '' || this.f5a == '' || this.f6a == '' || this.f7a == '' || this.f9a == '') {
            this.msj.showError3('Información', 'Por favor ingrese todos los documentos obligatorios');
            return;
        }
        var loading = this.loadingCtrl.create({
            spinner: 'bubbles',
            content: "Cargando Imagenes "
        });
        loading.present();
        this.ref = this.afStorage.ref(Math.random().toString(36).substring(2));
        this.task = this.ref.put(this.filegenerado1.target.files[0]);
        this.task.then().then(function (res1) {
            _this.f1l = res1.downloadURL;
            _this.ref = _this.afStorage.ref(Math.random().toString(36).substring(2));
            _this.task = _this.ref.put(_this.filegenerado2.target.files[0]);
            _this.task.then().then(function (res1) {
                _this.f2l = res1.downloadURL;
                if (_this.f3a != '') {
                    _this.ref = _this.afStorage.ref(Math.random().toString(36).substring(2));
                    _this.task = _this.ref.put(_this.filegenerado3.target.files[0]);
                    _this.task.then().then(function (res1) {
                        _this.f3l = res1.downloadURL;
                        if (_this.f4a != '') {
                            _this.ref = _this.afStorage.ref(Math.random().toString(36).substring(2));
                            _this.task = _this.ref.put(_this.filegenerado4.target.files[0]);
                            _this.task.then().then(function (res1) {
                                _this.f4l = res1.downloadURL;
                                _this.ref = _this.afStorage.ref(Math.random().toString(36).substring(2));
                                _this.task = _this.ref.put(_this.filegenerado5.target.files[0]);
                                _this.task.then().then(function (res1) {
                                    _this.f5l = res1.downloadURL;
                                    _this.ref = _this.afStorage.ref(Math.random().toString(36).substring(2));
                                    _this.task = _this.ref.put(_this.filegenerado6.target.files[0]);
                                    _this.task.then().then(function (res1) {
                                        _this.f6l = res1.downloadURL;
                                        _this.ref = _this.afStorage.ref(Math.random().toString(36).substring(2));
                                        _this.task = _this.ref.put(_this.filegenerado7.target.files[0]);
                                        _this.task.then().then(function (res1) {
                                            _this.f7l = res1.downloadURL;
                                            if (_this.f8a != '') {
                                                _this.ref = _this.afStorage.ref(Math.random().toString(36).substring(2));
                                                _this.task = _this.ref.put(_this.filegenerado8.target.files[0]);
                                                _this.task.then().then(function (res1) {
                                                    _this.f8l = res1.downloadURL;
                                                    _this.ref = _this.afStorage.ref(Math.random().toString(36).substring(2));
                                                    _this.task = _this.ref.put(_this.filegenerado9.target.files[0]);
                                                    _this.task.then().then(function (res1) {
                                                        _this.f9l = res1.downloadURL;
                                                        loading.dismiss();
                                                        _this.manageGallery();
                                                    });
                                                });
                                            }
                                            else {
                                                _this.ref = _this.afStorage.ref(Math.random().toString(36).substring(2));
                                                _this.task = _this.ref.put(_this.filegenerado9.target.files[0]);
                                                _this.task.then().then(function (res1) {
                                                    _this.f9l = res1.downloadURL;
                                                    loading.dismiss();
                                                    _this.manageGallery();
                                                });
                                            }
                                        });
                                    });
                                });
                            });
                        }
                        else {
                            _this.ref = _this.afStorage.ref(Math.random().toString(36).substring(2));
                            _this.task = _this.ref.put(_this.filegenerado5.target.files[0]);
                            _this.task.then().then(function (res1) {
                                _this.f5l = res1.downloadURL;
                                _this.ref = _this.afStorage.ref(Math.random().toString(36).substring(2));
                                _this.task = _this.ref.put(_this.filegenerado6.target.files[0]);
                                _this.task.then().then(function (res1) {
                                    _this.f6l = res1.downloadURL;
                                    _this.ref = _this.afStorage.ref(Math.random().toString(36).substring(2));
                                    _this.task = _this.ref.put(_this.filegenerado7.target.files[0]);
                                    _this.task.then().then(function (res1) {
                                        _this.f7l = res1.downloadURL;
                                        if (_this.f8a != '') {
                                            _this.ref = _this.afStorage.ref(Math.random().toString(36).substring(2));
                                            _this.task = _this.ref.put(_this.filegenerado8.target.files[0]);
                                            _this.task.then().then(function (res1) {
                                                _this.f8l = res1.downloadURL;
                                                _this.ref = _this.afStorage.ref(Math.random().toString(36).substring(2));
                                                _this.task = _this.ref.put(_this.filegenerado9.target.files[0]);
                                                _this.task.then().then(function (res1) {
                                                    _this.f9l = res1.downloadURL;
                                                    loading.dismiss();
                                                    _this.manageGallery();
                                                });
                                            });
                                        }
                                        else {
                                            _this.ref = _this.afStorage.ref(Math.random().toString(36).substring(2));
                                            _this.task = _this.ref.put(_this.filegenerado9.target.files[0]);
                                            _this.task.then().then(function (res1) {
                                                _this.f9l = res1.downloadURL;
                                                loading.dismiss();
                                                _this.manageGallery();
                                            });
                                        }
                                    });
                                });
                            });
                        }
                    });
                }
                else {
                    if (_this.f4a != '') {
                        _this.ref = _this.afStorage.ref(Math.random().toString(36).substring(2));
                        _this.task = _this.ref.put(_this.filegenerado4.target.files[0]);
                        _this.task.then().then(function (res1) {
                            _this.f4l = res1.downloadURL;
                            _this.ref = _this.afStorage.ref(Math.random().toString(36).substring(2));
                            _this.task = _this.ref.put(_this.filegenerado5.target.files[0]);
                            _this.task.then().then(function (res1) {
                                _this.f5l = res1.downloadURL;
                                _this.ref = _this.afStorage.ref(Math.random().toString(36).substring(2));
                                _this.task = _this.ref.put(_this.filegenerado6.target.files[0]);
                                _this.task.then().then(function (res1) {
                                    _this.f6l = res1.downloadURL;
                                    _this.ref = _this.afStorage.ref(Math.random().toString(36).substring(2));
                                    _this.task = _this.ref.put(_this.filegenerado7.target.files[0]);
                                    _this.task.then().then(function (res1) {
                                        _this.f7l = res1.downloadURL;
                                        if (_this.f8a != '') {
                                            _this.ref = _this.afStorage.ref(Math.random().toString(36).substring(2));
                                            _this.task = _this.ref.put(_this.filegenerado8.target.files[0]);
                                            _this.task.then().then(function (res1) {
                                                _this.f8l = res1.downloadURL;
                                                _this.ref = _this.afStorage.ref(Math.random().toString(36).substring(2));
                                                _this.task = _this.ref.put(_this.filegenerado9.target.files[0]);
                                                _this.task.then().then(function (res1) {
                                                    _this.f9l = res1.downloadURL;
                                                    loading.dismiss();
                                                    _this.manageGallery();
                                                });
                                            });
                                        }
                                        else {
                                            _this.ref = _this.afStorage.ref(Math.random().toString(36).substring(2));
                                            _this.task = _this.ref.put(_this.filegenerado9.target.files[0]);
                                            _this.task.then().then(function (res1) {
                                                _this.f9l = res1.downloadURL;
                                                loading.dismiss();
                                                _this.manageGallery();
                                            });
                                        }
                                    });
                                });
                            });
                        });
                    }
                    else {
                        _this.ref = _this.afStorage.ref(Math.random().toString(36).substring(2));
                        _this.task = _this.ref.put(_this.filegenerado5.target.files[0]);
                        _this.task.then().then(function (res1) {
                            _this.f5l = res1.downloadURL;
                            _this.ref = _this.afStorage.ref(Math.random().toString(36).substring(2));
                            _this.task = _this.ref.put(_this.filegenerado6.target.files[0]);
                            _this.task.then().then(function (res1) {
                                _this.f6l = res1.downloadURL;
                                _this.ref = _this.afStorage.ref(Math.random().toString(36).substring(2));
                                _this.task = _this.ref.put(_this.filegenerado7.target.files[0]);
                                _this.task.then().then(function (res1) {
                                    _this.f7l = res1.downloadURL;
                                    if (_this.f8a != '') {
                                        _this.ref = _this.afStorage.ref(Math.random().toString(36).substring(2));
                                        _this.task = _this.ref.put(_this.filegenerado8.target.files[0]);
                                        _this.task.then().then(function (res1) {
                                            _this.f8l = res1.downloadURL;
                                            _this.ref = _this.afStorage.ref(Math.random().toString(36).substring(2));
                                            _this.task = _this.ref.put(_this.filegenerado9.target.files[0]);
                                            _this.task.then().then(function (res1) {
                                                _this.f9l = res1.downloadURL;
                                                loading.dismiss();
                                                _this.manageGallery();
                                            });
                                        });
                                    }
                                    else {
                                        _this.ref = _this.afStorage.ref(Math.random().toString(36).substring(2));
                                        _this.task = _this.ref.put(_this.filegenerado9.target.files[0]);
                                        _this.task.then().then(function (res1) {
                                            _this.f9l = res1.downloadURL;
                                            loading.dismiss();
                                            _this.manageGallery();
                                        });
                                    }
                                });
                            });
                        });
                    }
                }
            });
        });
    };
    SolprestamoCreatePage.prototype.manageGallery = function () {
        var _this = this;
        var creat = 'Actualiza';
        if (this.navParams.get("record") == null) {
            creat = 'Crea';
        }
        var options = {
            idempresa: this.idempresa,
            tipo: 'Equipo de computo',
            nombre: this.form.controls['nombre'].value,
            cui: this.form.controls['cui'].value,
            monto: this.form.controls['monto'].value,
            plazo: this.form.controls['plazo'].value,
            interes: this.form.controls['interes'].value,
            estado: 'Solicitando préstamo',
            codpersonal: this.carne,
            requisito1: this.f1l,
            requisito2: this.f2l,
            requisito3: this.f3l,
            requisito4: this.f4l,
            requisito5: this.f5l,
            requisito6: this.f6l,
            requisito7: this.f7l,
            requisito8: this.f8l,
            requisito9: this.f9l,
            requisito10: this.f10l,
            bitacora: { idempresa: this.idempresa, idafiliado: '', email: this.username, permiso: creat, accion: creat + ' solprestamos ' }
        };
        if (this.navParams.get("record") == null) {
            if (options) {
                this.authService.createReg('', options, 'solprestamos').then(function (result) {
                    if (!_this.form.valid) {
                        return;
                    }
                    _this.viewCtrl.dismiss(result);
                }, function (err) {
                    _this.msj.showError3('Error', err.error);
                });
            }
        }
        else {
            if (options) {
                this.authService.createReg(this._ID, options, 'solprestamos').then(function (result) {
                    if (!_this.form.valid) {
                        return;
                    }
                    console.log(result);
                    _this.viewCtrl.dismiss(result);
                }, function (err) {
                    _this.msj.showError3('Error', err.error);
                });
            }
        }
    };
    SolprestamoCreatePage.prototype.cancel = function () {
        this.viewCtrl.dismiss();
    };
    SolprestamoCreatePage.prototype.done = function () {
        if (!this.form.valid) {
            return;
        }
        //this.viewCtrl.dismiss(this.form.value);
    };
    SolprestamoCreatePage.prototype.updateProfileImage = function (op) {
        this.opimg = op;
        switch (op) {
            case 1:
                this.fileInput.nativeElement.click();
                break;
            case 2:
                this.fileInput2.nativeElement.click();
                break;
            case 3:
                this.fileInput3.nativeElement.click();
                break;
            case 4:
                this.fileInput4.nativeElement.click();
                break;
            case 5:
                this.fileInput5.nativeElement.click();
                break;
            case 6:
                this.fileInput6.nativeElement.click();
                break;
            case 7:
                this.fileInput7.nativeElement.click();
                break;
            case 8:
                this.fileInput8.nativeElement.click();
                break;
            case 9:
                this.fileInput9.nativeElement.click();
                break;
            default:
                break;
        }
    };
    SolprestamoCreatePage.prototype.takePhotograph = function (op) {
        var _this = this;
        if (__WEBPACK_IMPORTED_MODULE_7__ionic_native_camera__["a" /* Camera */]['installed']()) {
            this._IMAGE
                .takePhotograph()
                .then(function (image) {
                if (op == 1) {
                    _this.f1a = 'data';
                    _this.f1 = image.toString();
                }
                ;
                if (op == 2) {
                    _this.f2a = 'data';
                    _this.f2 = image.toString();
                }
                ;
                if (op == 3) {
                    _this.f3a = 'data';
                    _this.f3 = image.toString();
                }
                if (op == 4) {
                    _this.f4a = 'data';
                    _this.f4 = image.toString();
                }
                if (op == 5) {
                    _this.f5a = 'data';
                    _this.f5 = image.toString();
                }
                if (op == 6) {
                    _this.f6a = 'data';
                    _this.f6 = image.toString();
                }
                if (op == 7) {
                    _this.f7a = 'data';
                    _this.f7 = image.toString();
                }
                if (op == 8) {
                    _this.f8a = 'data';
                    _this.f8 = image.toString();
                }
                if (op == 9) {
                    _this.f9a = 'data';
                    _this.f9 = image.toString();
                }
            })
                .catch(function (err) {
                console.log(err);
            });
        }
        else {
            switch (op) {
                case 1:
                    this.fileInput.nativeElement.click();
                    break;
                case 2:
                    this.fileInput2.nativeElement.click();
                    break;
                case 3:
                    this.fileInput3.nativeElement.click();
                    break;
                case 4:
                    this.fileInput4.nativeElement.click();
                    break;
                case 5:
                    this.fileInput5.nativeElement.click();
                    break;
                case 6:
                    this.fileInput6.nativeElement.click();
                    break;
                case 7:
                    this.fileInput7.nativeElement.click();
                    break;
                case 8:
                    this.fileInput8.nativeElement.click();
                    break;
                case 9:
                    this.fileInput9.nativeElement.click();
                    break;
                default:
                    break;
            }
        }
    };
    SolprestamoCreatePage.prototype.selectImage = function (op) {
        var _this = this;
        if (__WEBPACK_IMPORTED_MODULE_7__ionic_native_camera__["a" /* Camera */]['installed']()) {
            this._IMAGE
                .selectPhotograph()
                .then(function (image) {
                if (op == 1) {
                    _this.f1a = 'data';
                    _this.f1 = image.toString();
                }
                ;
                if (op == 2) {
                    _this.f2a = 'data';
                    _this.f2 = image.toString();
                }
                ;
                if (op == 3) {
                    _this.f3a = 'data';
                    _this.f3 = image.toString();
                }
                if (op == 4) {
                    _this.f4a = 'data';
                    _this.f4 = image.toString();
                }
                if (op == 5) {
                    _this.f5a = 'data';
                    _this.f5 = image.toString();
                }
                if (op == 6) {
                    _this.f6a = 'data';
                    _this.f6 = image.toString();
                }
                if (op == 7) {
                    _this.f7a = 'data';
                    _this.f7 = image.toString();
                }
                if (op == 8) {
                    _this.f8a = 'data';
                    _this.f8 = image.toString();
                }
                if (op == 9) {
                    _this.f9a = 'data';
                    _this.f9 = image.toString();
                }
            })
                .catch(function (err) {
                console.log(err);
            });
        }
        else {
            switch (op) {
                case 1:
                    this.fileInput.nativeElement.click();
                    break;
                case 2:
                    this.fileInput2.nativeElement.click();
                    break;
                case 3:
                    this.fileInput3.nativeElement.click();
                    break;
                case 4:
                    this.fileInput4.nativeElement.click();
                    break;
                case 5:
                    this.fileInput5.nativeElement.click();
                    break;
                case 6:
                    this.fileInput6.nativeElement.click();
                    break;
                case 7:
                    this.fileInput7.nativeElement.click();
                    break;
                case 8:
                    this.fileInput8.nativeElement.click();
                    break;
                case 9:
                    this.fileInput9.nativeElement.click();
                    break;
                default:
                    break;
            }
        }
    };
    SolprestamoCreatePage.prototype.processWebImage = function (event, op) {
        var _this = this;
        if (event.target.files && event.target.files[0]) {
            this.videomira = true;
            var loading_1 = this.loadingCtrl.create({
                spinner: 'bubbles',
                content: "Espere un momento....."
            });
            loading_1.present();
            var ant = '';
            var reader = new FileReader();
            reader.onload = function (readerEvent) {
                if (_this.opimg == 1) {
                    ant = _this.f1;
                    _this.filegenerado1 = event;
                    _this.f1 = readerEvent.target.result;
                    _this.f1a = 'data';
                    _this._IMAGE.generateFromImage(_this.f1, 600, 600, 2, function (data) {
                        _this.f1 = data;
                        if (_this.sololeer == true) {
                            _this.afStorage.storage.refFromURL(ant).delete();
                            //      this.afStorage.storage.ref(ant).delete()
                            _this.ref = _this.afStorage.ref(Math.random().toString(36).substring(2));
                            _this.task = _this.ref.put(_this.filegenerado1.target.files[0]);
                            _this.task.then().then(function (res1) {
                                _this.f1 = res1.downloadURL;
                                _this.lop1 = '0';
                                var options = {
                                    operacion: 'mandacomentario2',
                                    estado: 'ACTUALIZADAS',
                                    ultrechazo: _this.ultrechazo2,
                                    requisito1: res1.downloadURL,
                                    requisito2: _this.f2,
                                    requisito3: _this.f3,
                                    requisito4: _this.f4,
                                    requisito5: _this.f5,
                                    requisito6: _this.f6,
                                    requisito7: _this.f7,
                                    requisito8: _this.f8,
                                    requisito9: _this.f9,
                                    ultrechazo2: _this.lop1 + '°' + _this.lop2 + '°' + _this.lop3 + '°' + _this.lop4 + '°' + _this.lop5 + '°' + _this.lop6 + '°' + _this.lop7 + '°' + _this.lop8 + '°' + _this.lop9,
                                    bitacora: { idempresa: _this.idempresa, idafiliado: '', email: _this.username, permiso: 'creat', accion: 'rechazo prestamo' }
                                };
                                _this.authService.createReg2b(_this._ID, options, 'solprestamos').then(function (result) {
                                    _this.msj.showError3('Información', 'Documento actualizado con exito');
                                    loading_1.dismiss();
                                }, function (err) {
                                    //loading.dismiss();
                                    _this.msj.showError3('Mensaje', err.error);
                                    loading_1.dismiss();
                                    // this.navCtrl.pop();
                                });
                            }).catch(function (err) {
                                // Handle err
                            });
                        }
                        else {
                            loading_1.dismiss();
                        }
                    });
                }
                if (_this.opimg == 2) {
                    ant = _this.f2;
                    _this.filegenerado2 = event;
                    _this.f2 = readerEvent.target.result;
                    _this._IMAGE.generateFromImage(_this.f2, 600, 600, 2, function (data) {
                        _this.f2 = data;
                        _this.f2a = 'data';
                        if (_this.sololeer == true) {
                            _this.afStorage.storage.refFromURL(ant).delete();
                            _this.ref = _this.afStorage.ref(Math.random().toString(36).substring(2));
                            _this.task = _this.ref.put(_this.filegenerado2.target.files[0]);
                            _this.task.then().then(function (res1) {
                                _this.f2 = res1.downloadURL;
                                _this.lop2 = '0';
                                var options = {
                                    operacion: 'mandacomentario2',
                                    estado: 'ACTUALIZADAS',
                                    ultrechazo: _this.ultrechazo2,
                                    requisito1: _this.f1, requisito2: res1.downloadURL,
                                    requisito3: _this.f3, requisito4: _this.f4,
                                    requisito5: _this.f5, requisito6: _this.f6,
                                    requisito7: _this.f7, requisito8: _this.f8, requisito9: _this.f9,
                                    ultrechazo2: _this.lop1 + '°' + _this.lop2 + '°' + _this.lop3 + '°' + _this.lop4 + '°' + _this.lop5 + '°' + _this.lop6 + '°' + _this.lop7 + '°' + _this.lop8 + '°' + _this.lop9,
                                    bitacora: { idempresa: _this.idempresa, idafiliado: '', email: _this.username, permiso: 'creat', accion: 'rechazo prestamo' }
                                };
                                _this.authService.createReg2b(_this._ID, options, 'solprestamos').then(function (result) {
                                    _this.msj.showError3('Información', 'Documento actualizado con exito');
                                    loading_1.dismiss();
                                }, function (err) {
                                    //loading.dismiss();
                                    _this.msj.showError3('Mensaje', err.error);
                                    loading_1.dismiss();
                                    // this.navCtrl.pop();
                                });
                            }).catch(function (err) {
                                // Handle err
                            });
                        }
                        else {
                            loading_1.dismiss();
                        }
                    });
                }
                if (_this.opimg == 3) {
                    ant = _this.f3;
                    _this.filegenerado3 = event;
                    _this.f3 = readerEvent.target.result;
                    _this._IMAGE.generateFromImage(_this.f3, 600, 600, 2, function (data) {
                        _this.f3 = data;
                        _this.f3a = 'data';
                        if (_this.sololeer == true) {
                            _this.afStorage.storage.refFromURL(ant).delete();
                            _this.ref = _this.afStorage.ref(Math.random().toString(36).substring(2));
                            _this.task = _this.ref.put(_this.filegenerado3.target.files[0]);
                            _this.task.then().then(function (res1) {
                                _this.f3 = res1.downloadURL;
                                _this.lop3 = '0';
                                var options = {
                                    operacion: 'mandacomentario2',
                                    estado: 'ACTUALIZADAS',
                                    ultrechazo: _this.ultrechazo2,
                                    requisito1: _this.f1, requisito2: _this.f2,
                                    requisito3: res1.downloadURL, requisito4: _this.f4,
                                    requisito5: _this.f5, requisito6: _this.f6,
                                    requisito7: _this.f7, requisito8: _this.f8, requisito9: _this.f9,
                                    ultrechazo2: _this.lop1 + '°' + _this.lop2 + '°' + _this.lop3 + '°' + _this.lop4 + '°' + _this.lop5 + '°' + _this.lop6 + '°' + _this.lop7 + '°' + _this.lop8 + '°' + _this.lop9,
                                    bitacora: { idempresa: _this.idempresa, idafiliado: '', email: _this.username, permiso: 'creat', accion: 'rechazo prestamo' }
                                };
                                _this.authService.createReg2b(_this._ID, options, 'solprestamos').then(function (result) {
                                    _this.msj.showError3('Información', 'Documento actualizado con exito');
                                    loading_1.dismiss();
                                }, function (err) {
                                    //loading.dismiss();
                                    _this.msj.showError3('Mensaje', err.error);
                                    loading_1.dismiss();
                                    // this.navCtrl.pop();
                                });
                            }).catch(function (err) { });
                        }
                        else {
                            loading_1.dismiss();
                        }
                    });
                }
                if (_this.opimg == 4) {
                    ant = _this.f4;
                    _this.filegenerado4 = event;
                    _this.f4 = readerEvent.target.result;
                    _this._IMAGE.generateFromImage(_this.f4, 600, 600, 2, function (data) {
                        _this.f4 = data;
                        _this.f4a = 'data';
                        if (_this.sololeer == true) {
                            _this.afStorage.storage.refFromURL(ant).delete();
                            _this.ref = _this.afStorage.ref(Math.random().toString(36).substring(2));
                            _this.task = _this.ref.put(_this.filegenerado4.target.files[0]);
                            _this.task.then().then(function (res1) {
                                _this.f4 = res1.downloadURL;
                                _this.lop4 = '0';
                                var options = {
                                    operacion: 'mandacomentario2',
                                    estado: 'ACTUALIZADAS',
                                    ultrechazo: _this.ultrechazo2,
                                    requisito1: _this.f1, requisito2: _this.f2,
                                    requisito3: _this.f3, requisito4: res1.downloadURL,
                                    requisito5: _this.f5, requisito6: _this.f6,
                                    requisito7: _this.f7, requisito8: _this.f8, requisito9: _this.f9,
                                    ultrechazo2: _this.lop1 + '°' + _this.lop2 + '°' + _this.lop3 + '°' + _this.lop4 + '°' + _this.lop5 + '°' + _this.lop6 + '°' + _this.lop7 + '°' + _this.lop8 + '°' + _this.lop9,
                                    bitacora: { idempresa: _this.idempresa, idafiliado: '', email: _this.username, permiso: 'creat', accion: 'rechazo prestamo' }
                                };
                                _this.authService.createReg2b(_this._ID, options, 'solprestamos').then(function (result) {
                                    _this.msj.showError3('Información', 'Documento actualizado con exito');
                                    loading_1.dismiss();
                                }, function (err) {
                                    //loading.dismiss();
                                    _this.msj.showError3('Mensaje', err.error);
                                    loading_1.dismiss();
                                    // this.navCtrl.pop();
                                });
                            }).catch(function (err) { });
                        }
                        else {
                            loading_1.dismiss();
                        }
                    });
                }
                if (_this.opimg == 5) {
                    ant = _this.f5;
                    _this.filegenerado5 = event;
                    _this.f5 = readerEvent.target.result;
                    _this._IMAGE.generateFromImage(_this.f5, 600, 600, 2, function (data) {
                        _this.f5 = data;
                        _this.f5a = 'data';
                        if (_this.sololeer == true) {
                            _this.afStorage.storage.refFromURL(ant).delete();
                            _this.ref = _this.afStorage.ref(Math.random().toString(36).substring(2));
                            _this.task = _this.ref.put(_this.filegenerado5.target.files[0]);
                            _this.task.then().then(function (res1) {
                                _this.f5 = res1.downloadURL;
                                _this.lop5 = '0';
                                var options = {
                                    operacion: 'mandacomentario2',
                                    estado: 'ACTUALIZADAS',
                                    ultrechazo: _this.ultrechazo2,
                                    requisito1: _this.f1, requisito2: _this.f2,
                                    requisito3: _this.f3, requisito4: _this.f4,
                                    requisito5: res1.downloadURL, requisito6: _this.f6,
                                    requisito7: _this.f7, requisito8: _this.f8, requisito9: _this.f9,
                                    ultrechazo2: _this.lop1 + '°' + _this.lop2 + '°' + _this.lop3 + '°' + _this.lop4 + '°' + _this.lop5 + '°' + _this.lop6 + '°' + _this.lop7 + '°' + _this.lop8 + '°' + _this.lop9,
                                    bitacora: { idempresa: _this.idempresa, idafiliado: '', email: _this.username, permiso: 'creat', accion: 'rechazo prestamo' }
                                };
                                _this.authService.createReg2b(_this._ID, options, 'solprestamos').then(function (result) {
                                    _this.msj.showError3('Información', 'Documento actualizado con exito');
                                    loading_1.dismiss();
                                }, function (err) {
                                    //loading.dismiss();
                                    _this.msj.showError3('Mensaje', err.error);
                                    loading_1.dismiss();
                                    // this.navCtrl.pop();
                                });
                            }).catch(function (err) { });
                        }
                        else {
                            loading_1.dismiss();
                        }
                    });
                }
                if (_this.opimg == 6) {
                    ant = _this.f6;
                    _this.filegenerado6 = event;
                    _this.f6 = readerEvent.target.result;
                    _this._IMAGE.generateFromImage(_this.f6, 600, 600, 2, function (data) {
                        _this.f6 = data;
                        _this.f6a = 'data';
                        if (_this.sololeer == true) {
                            _this.afStorage.storage.refFromURL(ant).delete();
                            _this.ref = _this.afStorage.ref(Math.random().toString(36).substring(2));
                            _this.task = _this.ref.put(_this.filegenerado6.target.files[0]);
                            _this.task.then().then(function (res1) {
                                _this.f6 = res1.downloadURL;
                                _this.lop6 = '0';
                                var options = {
                                    operacion: 'mandacomentario2',
                                    estado: 'ACTUALIZADAS',
                                    ultrechazo: _this.ultrechazo2,
                                    requisito1: _this.f1, requisito2: _this.f2,
                                    requisito3: _this.f3, requisito4: _this.f4,
                                    requisito5: _this.f5, requisito6: res1.downloadURL,
                                    requisito7: _this.f7, requisito8: _this.f8, requisito9: _this.f9,
                                    ultrechazo2: _this.lop1 + '°' + _this.lop2 + '°' + _this.lop3 + '°' + _this.lop4 + '°' + _this.lop5 + '°' + _this.lop6 + '°' + _this.lop7 + '°' + _this.lop8 + '°' + _this.lop9,
                                    bitacora: { idempresa: _this.idempresa, idafiliado: '', email: _this.username, permiso: 'creat', accion: 'rechazo prestamo' }
                                };
                                _this.authService.createReg2b(_this._ID, options, 'solprestamos').then(function (result) {
                                    _this.msj.showError3('Información', 'Documento actualizado con exito');
                                    loading_1.dismiss();
                                }, function (err) {
                                    //loading.dismiss();
                                    _this.msj.showError3('Mensaje', err.error);
                                    loading_1.dismiss();
                                    // this.navCtrl.pop();
                                });
                            }).catch(function (err) { });
                        }
                        else {
                            loading_1.dismiss();
                        }
                    });
                }
                if (_this.opimg == 7) {
                    ant = _this.f7;
                    _this.filegenerado7 = event;
                    _this.f7 = readerEvent.target.result;
                    _this._IMAGE.generateFromImage(_this.f7, 600, 600, 2, function (data) {
                        _this.f7 = data;
                        _this.f7a = 'data';
                        if (_this.sololeer == true) {
                            _this.afStorage.storage.refFromURL(ant).delete();
                            _this.ref = _this.afStorage.ref(Math.random().toString(36).substring(2));
                            _this.task = _this.ref.put(_this.filegenerado7.target.files[0]);
                            _this.task.then().then(function (res1) {
                                _this.f7 = res1.downloadURL;
                                _this.lop7 = '0';
                                var options = {
                                    operacion: 'mandacomentario2',
                                    estado: 'ACTUALIZADAS',
                                    ultrechazo: _this.ultrechazo2,
                                    requisito1: _this.f1, requisito2: _this.f2,
                                    requisito3: _this.f3, requisito4: _this.f4,
                                    requisito5: _this.f5, requisito6: _this.f6,
                                    requisito7: res1.downloadURL, requisito8: _this.f8, requisito9: _this.f9,
                                    ultrechazo2: _this.lop1 + '°' + _this.lop2 + '°' + _this.lop3 + '°' + _this.lop4 + '°' + _this.lop5 + '°' + _this.lop6 + '°' + _this.lop7 + '°' + _this.lop8 + '°' + _this.lop9,
                                    bitacora: { idempresa: _this.idempresa, idafiliado: '', email: _this.username, permiso: 'creat', accion: 'rechazo prestamo' }
                                };
                                _this.authService.createReg2b(_this._ID, options, 'solprestamos').then(function (result) {
                                    _this.msj.showError3('Información', 'Documento actualizado con exito');
                                    loading_1.dismiss();
                                }, function (err) {
                                    //loading.dismiss();
                                    _this.msj.showError3('Mensaje', err.error);
                                    loading_1.dismiss();
                                    // this.navCtrl.pop();
                                });
                            }).catch(function (err) { });
                        }
                        else {
                            loading_1.dismiss();
                        }
                    });
                }
                if (_this.opimg == 8) {
                    ant = _this.f8;
                    _this.filegenerado8 = event;
                    _this.f8 = readerEvent.target.result;
                    _this._IMAGE.generateFromImage(_this.f8, 600, 600, 2, function (data) {
                        _this.f8 = data;
                        _this.f8a = 'data';
                        if (_this.sololeer == true) {
                            _this.afStorage.storage.refFromURL(ant).delete();
                            _this.ref = _this.afStorage.ref(Math.random().toString(36).substring(2));
                            _this.task = _this.ref.put(_this.filegenerado8.target.files[0]);
                            _this.task.then().then(function (res1) {
                                _this.f8 = res1.downloadURL;
                                _this.lop8 = '0';
                                var options = {
                                    operacion: 'mandacomentario2',
                                    estado: 'ACTUALIZADAS',
                                    ultrechazo: _this.ultrechazo2,
                                    requisito1: _this.f1, requisito2: _this.f2,
                                    requisito3: _this.f3, requisito4: _this.f4,
                                    requisito5: _this.f5, requisito6: _this.f6,
                                    requisito7: _this.f7, requisito8: res1.downloadURL, requisito9: _this.f9,
                                    ultrechazo2: _this.lop1 + '°' + _this.lop2 + '°' + _this.lop3 + '°' + _this.lop4 + '°' + _this.lop5 + '°' + _this.lop6 + '°' + _this.lop7 + '°' + _this.lop8 + '°' + _this.lop9,
                                    bitacora: { idempresa: _this.idempresa, idafiliado: '', email: _this.username, permiso: 'creat', accion: 'rechazo prestamo' }
                                };
                                _this.authService.createReg2b(_this._ID, options, 'solprestamos').then(function (result) {
                                    _this.msj.showError3('Información', 'Documento actualizado con exito');
                                    loading_1.dismiss();
                                }, function (err) {
                                    //loading.dismiss();
                                    _this.msj.showError3('Mensaje', err.error);
                                    loading_1.dismiss();
                                    // this.navCtrl.pop();
                                });
                            }).catch(function (err) { });
                        }
                        else {
                            loading_1.dismiss();
                        }
                    });
                }
                if (_this.opimg == 9) {
                    ant = _this.f9;
                    _this.filegenerado9 = event;
                    _this.f9 = readerEvent.target.result;
                    _this._IMAGE.generateFromImage(_this.f9, 600, 600, 2, function (data) {
                        _this.f9 = data;
                        _this.f9a = 'data';
                        if (_this.sololeer == true) {
                            _this.afStorage.storage.refFromURL(ant).delete();
                            _this.ref = _this.afStorage.ref(Math.random().toString(36).substring(2));
                            _this.task = _this.ref.put(_this.filegenerado9.target.files[0]);
                            _this.task.then().then(function (res1) {
                                _this.f9 = res1.downloadURL;
                                _this.lop9 = '0';
                                var options = {
                                    operacion: 'mandacomentario2',
                                    estado: 'ACTUALIZADAS',
                                    ultrechazo: _this.ultrechazo2,
                                    requisito1: _this.f1, requisito2: _this.f2,
                                    requisito3: _this.f3, requisito4: _this.f4,
                                    requisito5: _this.f5, requisito6: _this.f6,
                                    requisito7: _this.f7, requisito8: _this.f8, requisito9: res1.downloadURL,
                                    ultrechazo2: _this.lop1 + '°' + _this.lop2 + '°' + _this.lop3 + '°' + _this.lop4 + '°' + _this.lop5 + '°' + _this.lop6 + '°' + _this.lop7 + '°' + _this.lop8 + '°' + _this.lop9,
                                    bitacora: { idempresa: _this.idempresa, idafiliado: '', email: _this.username, permiso: 'creat', accion: 'rechazo prestamo' }
                                };
                                _this.authService.createReg2b(_this._ID, options, 'solprestamos').then(function (result) {
                                    _this.msj.showError3('Información', 'Documento actualizado con exito');
                                    loading_1.dismiss();
                                }, function (err) {
                                    //loading.dismiss();
                                    _this.msj.showError3('Mensaje', err.error);
                                    loading_1.dismiss();
                                    // this.navCtrl.pop();
                                });
                            }).catch(function (err) { });
                        }
                        else {
                            loading_1.dismiss();
                        }
                    });
                }
            };
            reader.readAsDataURL(event.target.files[0]);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('fileInput'),
        __metadata("design:type", Object)
    ], SolprestamoCreatePage.prototype, "fileInput", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('fileInput2'),
        __metadata("design:type", Object)
    ], SolprestamoCreatePage.prototype, "fileInput2", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('fileInput3'),
        __metadata("design:type", Object)
    ], SolprestamoCreatePage.prototype, "fileInput3", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('fileInput4'),
        __metadata("design:type", Object)
    ], SolprestamoCreatePage.prototype, "fileInput4", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('fileInput5'),
        __metadata("design:type", Object)
    ], SolprestamoCreatePage.prototype, "fileInput5", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('fileInput6'),
        __metadata("design:type", Object)
    ], SolprestamoCreatePage.prototype, "fileInput6", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('fileInput7'),
        __metadata("design:type", Object)
    ], SolprestamoCreatePage.prototype, "fileInput7", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('fileInput8'),
        __metadata("design:type", Object)
    ], SolprestamoCreatePage.prototype, "fileInput8", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('fileInput9'),
        __metadata("design:type", Object)
    ], SolprestamoCreatePage.prototype, "fileInput9", void 0);
    SolprestamoCreatePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-solprestamo-create',template:/*ion-inline-start:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\CALUSAC\solprestamo-create\solprestamo-create.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>{{pageTitle}}</ion-title>\n\n    <ion-buttons end>\n        <button (click)="cancel()" icon-only ion-button padding-right>\n            <ion-icon name="md-close"></ion-icon>\n          </button>\n        <button [hidden]="sololeer" (click)="manageGallery0()" [hidden]="!pactualizacion"  [disabled]="!form.valid" icon-only ion-button padding-right>\n            <ion-icon name="done-all"></ion-icon>\n          </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <form     [formGroup]="form"    text-wrap>\n    <ion-list>\n      <ion-item-divider color="secondary">\n        <ion-label>\n         Datos generales\n        </ion-label>\n      </ion-item-divider>\n\n      <ion-item>\n\n        Nombre: {{nombre}}<br>\n        Cui: {{cui}}<br>\n        Registro personal USAC: {{carne}}<br>\n        Interes anual: {{interes}}<br>\n        Estado: {{estado}}<br>\n\n\n      </ion-item>\n\n      <ion-item-divider color="secondary">\n        <ion-label>\n          Ingrese información\n        </ion-label>\n      </ion-item-divider>\n        <ion-item [hidden]=true margin-bottom>\n           <ion-label>Nombre</ion-label>\n           <ion-input\n              type="text"\n              [(ngModel)]="nombre" [formControl]="form.controls[\'nombre\']"\n             ></ion-input>\n        </ion-item>\n\n\n         <ion-item  [hidden]=true margin-bottom>\n            <ion-label>Cui</ion-label>\n            <ion-input\n               type="text"\n               [(ngModel)]="cui" [formControl]="form.controls[\'cui\']"\n              ></ion-input>\n         </ion-item>\n\n\n              <ion-item margin-bottom>\n                  <ion-label>Ingrese Monto (maximo  Q.15,000)</ion-label>\n                  <ion-input\n                     type="number" [disabled]="sololeer"\n                     [(ngModel)]="monto" [formControl]="form.controls[\'monto\']"\n                     required ></ion-input>\n               </ion-item>\n               <ion-item class="invalid" *ngIf="!form.controls.monto.valid && (form.controls.monto.dirty || form.controls.monto.touched)" text-wrap>\n                 <ion-icon name="warning"></ion-icon>\n                 Ingrese un monto valido\n                </ion-item>\n\n                <ion-item margin-bottom>\n                    <ion-label>Plazo para pagar (meses)</ion-label>\n                    <ion-select  (ionChange)="onSelectChange1j($event)" [(ngModel)]="plazo" [formControl]="form.controls[\'plazo\']">\n                      <ion-option value="6">6</ion-option>\n                      <ion-option value="12">12</ion-option>\n                      <ion-option value="18">18</ion-option>\n                      <ion-option value="24">24</ion-option>\n                      <ion-option value="30">30</ion-option>\n                      <ion-option value="36">36</ion-option>\n                      <ion-option value="42">42</ion-option>\n                      <ion-option value="48">48</ion-option>\n\n                    </ion-select>\n\n                 </ion-item>\n                 <ion-item class="invalid" *ngIf="!form.controls.plazo.valid && (form.controls.plazo.dirty || form.controls.plazo.touched)" text-wrap>\n                   <ion-icon name="warning"></ion-icon>\n                  Ingrese un plazo valido\n                  </ion-item>\n\n                  <ion-item  [hidden]=true margin-bottom>\n                      <ion-label>Interes (Anual)</ion-label>\n                      <ion-input\n                      type="text"\n                      [(ngModel)]="interes" [formControl]="form.controls[\'interes\']"\n                     ></ion-input>\n                   </ion-item>\n\n                   <ion-item-divider [hidden]="!sololeer" color="danger">\n                    <ion-label>\n                      Rechazo:\n                      <br>\n                     <div *ngIf="sl1!==\'0\'">{{sl1}}</div> <br>\n                     <div *ngIf="sl2!==\'0\'">{{sl2}}</div> <br>\n                     <div *ngIf="sl3!==\'0\'">{{sl3}}</div> <br>\n                     <div *ngIf="sl4!==\'0\'">{{sl4}}</div> <br>\n                     <div *ngIf="sl5!==\'0\'">{{sl5}}</div> <br>\n                     <div *ngIf="sl6!==\'0\'">{{sl6}}</div> <br>\n                     <div *ngIf="sl7!==\'0\'">{{sl7}}</div> <br>\n                     <div *ngIf="sl8!==\'0\'">{{sl8}}</div> <br>\n                     <div *ngIf="sl9!==\'0\'">{{sl9}}</div> <br>\n                    </ion-label>\n                  </ion-item-divider>\n\n         <ion-item-divider color="secondary">\n          <ion-label>\n            Documentos para otorgamiento de préstamo\n          </ion-label>\n        </ion-item-divider>\n\n         <ion-list>\n\n\n\n\n          <ion-item  *ngIf="sl1!==\'0\'" >\n            Solicitud firmada por el trabajador solicitante (*)\n             <button  (click)="updateProfileImage(1)" ion-button clear item-end>Subir documento</button>\n             <img [src]="f1" class="circle-pic"  height="100 px" width="100 px">\n             <ion-item class="invalid" *ngIf="f1a===\'\'" text-wrap>\n              <ion-icon name="warning"></ion-icon>\n              Ingrese un documento valido\n             </ion-item>\n          </ion-item>\n\n          <ion-item  *ngIf="sl2!==\'0\'"  >\n            Fotocopia de DPI legible (*)<button  (click)="updateProfileImage(2)"  ion-button clear item-end>Subir documento</button>\n            <img [src]="f2" class="circle-pic"  height="100 px" width="100 px">\n            <ion-item class="invalid" *ngIf="f2a===\'\'" text-wrap>\n              <ion-icon name="warning"></ion-icon>\n              Ingrese un documento valido\n             </ion-item>\n          </ion-item>\n          <ion-item  *ngIf="sl3!==\'0\'" >\n            Fotocopia del último voucher de sueldo del trabajador <button  (click)="updateProfileImage(3)"  ion-button clear item-end>Subir documento</button>\n            <img [src]="f3" class="circle-pic"  height="100 px" width="100 px">\n\n          </ion-item>\n          <ion-item  *ngIf="sl4!==\'0\'" >\n            Certificación de Relación Laboral extendida por la División de Administración de Recursos Humanos, donde conste el monto de indemnización estimada <button  (click)="updateProfileImage(4)"  ion-button clear item-end>Subir documento</button>\n            <img [src]="f4" class="circle-pic"  height="100 px" width="100 px">\n\n          </ion-item>\n          <ion-item  *ngIf="sl5!==\'0\'" >\n            Fotocopia de recibo reciente de agua, luz o teléfono (*)<button  (click)="updateProfileImage(5)"  ion-button clear item-end>Subir documento</button>\n            <img [src]="f5" class="circle-pic"  height="100 px" width="100 px">\n            <ion-item class="invalid" *ngIf="f5a===\'\'" text-wrap>\n              <ion-icon name="warning"></ion-icon>\n              Ingrese un documento valido\n             </ion-item>\n          </ion-item>\n          <ion-item  *ngIf="sl6!==\'0\'" >\n            Consentimiento para ser asegurado (*)<button  (click)="updateProfileImage(6)"  ion-button clear item-end>Subir documento</button>\n            <img [src]="f6" class="circle-pic"  height="100 px" width="100 px">\n            <ion-item class="invalid" *ngIf="f6a===\'\'" text-wrap>\n              <ion-icon name="warning"></ion-icon>\n              Ingrese un documento valido\n             </ion-item>\n          </ion-item>\n          <ion-item  *ngIf="sl7!==\'0\'" >\n            Carta de consentimiento del deudor (*)<button  (click)="updateProfileImage(7)"  ion-button clear item-end>Subir documento</button>\n            <img [src]="f7" class="circle-pic"  height="100 px" width="100 px">\n            <ion-item class="invalid" *ngIf="f7a===\'\'" text-wrap>\n              <ion-icon name="warning"></ion-icon>\n              Ingrese un documento valido\n             </ion-item>\n          </ion-item>\n          <ion-item  *ngIf="sl8!==\'0\'" >\n            Los trabajadores que tienen contrato a término, deberán presentar constancia de recontratación.<button  (click)="updateProfileImage(8)"  ion-button clear item-end>Subir documento</button>\n            <img [src]="f8" class="circle-pic"  height="100 px" width="100 px">\n\n          </ion-item>\n          <ion-item  *ngIf="sl9!==\'0\'" >\n            Presentar la proforma del equipo de cómputo a adquirir (*)<button  (click)="updateProfileImage(9)"  ion-button clear item-end>Subir documento</button>\n            <img [src]="f9" class="circle-pic"  height="100 px" width="100 px">\n            <ion-item class="invalid" *ngIf="f9a===\'\'" text-wrap>\n              <ion-icon name="warning"></ion-icon>\n              Ingrese un documento valido\n             </ion-item>\n          </ion-item>\n\n        </ion-list>\n\n     </ion-list>\n\n\n\n     <input   type="hidden"    name="f1" [formControl]="form.controls[\'f1\']"    [(ngModel)]="f1">\n     <input type="file" accept="image/*" #fileInput style="visibility: hidden; height: 0px" (change)="processWebImage($event,1)" />\n\n     <input   type="hidden"    name="f2" [formControl]="form.controls[\'f2\']"    [(ngModel)]="f2">\n     <input type="file" accept="image/*" #fileInput2 style="visibility: hidden; height: 0px" (change)="processWebImage($event,2)" />\n\n\n     <input   type="hidden"    name="f3" [formControl]="form.controls[\'f3\']"    [(ngModel)]="f3">\n     <input type="file" accept="image/*" #fileInput3 style="visibility: hidden; height: 0px" (change)="processWebImage($event,3)" />\n\n\n     <input   type="hidden"    name="f4" [formControl]="form.controls[\'f4\']"    [(ngModel)]="f4">\n     <input type="file" accept="image/*" #fileInput4 style="visibility: hidden; height: 0px" (change)="processWebImage($event,4)" />\n\n\n     <input   type="hidden"    name="f5" [formControl]="form.controls[\'f5\']"    [(ngModel)]="f5">\n     <input type="file" accept="image/*" #fileInput5 style="visibility: hidden; height: 0px" (change)="processWebImage($event,5)" />\n\n\n     <input   type="hidden"    name="f6" [formControl]="form.controls[\'f6\']"    [(ngModel)]="f6">\n     <input type="file" accept="image/*" #fileInput6 style="visibility: hidden; height: 0px" (change)="processWebImage($event,6)" />\n\n\n     <input   type="hidden"    name="f7" [formControl]="form.controls[\'f7\']"    [(ngModel)]="f7">\n     <input type="file" accept="image/*" #fileInput7 style="visibility: hidden; height: 0px" (change)="processWebImage($event,7)" />\n\n\n     <input   type="hidden"    name="f8" [formControl]="form.controls[\'f8\']"    [(ngModel)]="f8">\n     <input type="file" accept="image/*" #fileInput8 style="visibility: hidden; height: 0px" (change)="processWebImage($event,8)" />\n\n\n     <input   type="hidden"    name="f9" [formControl]="form.controls[\'f9\']"    [(ngModel)]="f9">\n     <input type="file" accept="image/*" #fileInput9 style="visibility: hidden; height: 0px" (change)="processWebImage($event,9)" />\n\n  </form>\n\n\n</ion-content>\n'/*ion-inline-end:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\CALUSAC\solprestamo-create\solprestamo-create.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_8_angularfire2_storage__["a" /* AngularFireStorage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_6__providers_image_image__["a" /* ImageProvider */], __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3__providers__["d" /* NotificationProvider */], __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["F" /* ViewController */], __WEBPACK_IMPORTED_MODULE_3__providers__["a" /* Auth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */]])
    ], SolprestamoCreatePage);
    return SolprestamoCreatePage;
}());

//# sourceMappingURL=solprestamo-create.js.map

/***/ }),

/***/ 933:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SolprestamoCreatePageModule", function() { return SolprestamoCreatePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__solprestamo_create__ = __webpack_require__(1373);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SolprestamoCreatePageModule = /** @class */ (function () {
    function SolprestamoCreatePageModule() {
    }
    SolprestamoCreatePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__solprestamo_create__["a" /* SolprestamoCreatePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__solprestamo_create__["a" /* SolprestamoCreatePage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], SolprestamoCreatePageModule);
    return SolprestamoCreatePageModule;
}());

//# sourceMappingURL=solprestamo-create.module.js.map

/***/ })

});
//# sourceMappingURL=213.js.map