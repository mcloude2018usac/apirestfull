webpackJsonp([93],{

/***/ 1090:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Userperil2CreatePageModule", function() { return Userperil2CreatePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__userperil2_create__ = __webpack_require__(1546);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var Userperil2CreatePageModule = /** @class */ (function () {
    function Userperil2CreatePageModule() {
    }
    Userperil2CreatePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__userperil2_create__["a" /* Userperil2CreatePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__userperil2_create__["a" /* Userperil2CreatePage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], Userperil2CreatePageModule);
    return Userperil2CreatePageModule;
}());

//# sourceMappingURL=userperil2-create.module.js.map

/***/ }),

/***/ 1546:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Userperil2CreatePage; });
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






var Userperil2CreatePage = /** @class */ (function () {
    function Userperil2CreatePage(storage, msj, translateService, viewCtrl, authService, navCtrl, navParams, _FB, actionSheetCtrl, events) {
        var _this = this;
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
        this.tlenguaje = true;
        this.tfisica = true;
        this.tquimica = true;
        this.tbiologia = true;
        this.tmatematica = true;
        this.matapp = true;
        this.loading = true;
        this.isDisablednit = true;
        this.ocultaxx3 = false;
        this.ocultac1 = true;
        this.ocultac2 = false;
        this.ocultac3 = false;
        this.ocultac4 = false;
        this.ocultac5 = false;
        this.vgrupo2 = [];
        this.vhorario1 = [];
        this.vhorario2 = [];
        this.vhorario3 = [];
        this.vhorario4 = [];
        this.vhorario5 = [];
        this.vconf = [];
        this.createdCode = null;
        this.scannedCode = null;
        // Define form validation - VERY basic!
        this.Form = this._FB.group({
            cui: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            nov: [''],
            carne: [''],
            nombre1: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            correo: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            lenguaje3: [''],
            matematica: [''],
            fisica: [''],
            biologia: [''],
            quimica: [''],
            idjornada: [''],
            idjornada2: [''],
            idjornada3: [''],
            idjornada4: [''],
            idjornada5: [''],
            idhorario: [''],
            idhorario2: [''],
            idhorario3: [''],
            idhorario4: [''],
            idhorario5: [''],
        });
        this.translateService.get('APPX').subscribe(function (value) {
            _this.idempresa = value;
        });
        this.authService.getReg('5b97f1bceb1dab0ab0368cc6', 'unidadacademicas').then(function (result) {
            _this.vgrupo2 = result;
        }, function (err) {
            _this.msj.showError3('Error', err.error);
        });
        this.authService.getReg('periodo/activo', 'unidadperiodo2s').then(function (data) {
            _this.vconf = data;
            _this.authService.getReg('PAP' + '/' + 'PAP' + '/' + _this.vconf[0]._id + '/1/Quimica', 'unidadplan2s').then(function (result) {
                _this.vhorario5 = result;
                _this.idhorario5 = null;
                _this.Form.controls['idhorario5'].setValue('');
            }, function (err) {
                _this.msj.showError3('Error', err.error);
            });
            _this.authService.getReg('PAP' + '/' + 'PAP' + '/' + _this.vconf[0]._id + '/1/Biologia', 'unidadplan2s').then(function (result) {
                _this.vhorario4 = result;
                _this.idhorario4 = null;
                _this.Form.controls['idhorario4'].setValue('');
            }, function (err) {
                _this.msj.showError3('Error', err.error);
            });
            _this.authService.getReg('PAP' + '/' + 'PAP' + '/' + _this.vconf[0]._id + '/1/Fisica', 'unidadplan2s').then(function (result) {
                _this.vhorario3 = result;
                _this.idhorario3 = null;
                _this.Form.controls['idhorario3'].setValue('');
            }, function (err) {
                _this.msj.showError3('Error', err.error);
            });
            _this.authService.getReg('PAP' + '/' + 'PAP' + '/' + _this.vconf[0]._id + '/1/Matematica', 'unidadplan2s').then(function (result) {
                _this.vhorario2 = result;
                _this.idhorario2 = null;
                _this.Form.controls['idhorario2'].setValue('');
            }, function (err) {
                _this.msj.showError3('Error', err.error);
            });
            _this.authService.getReg('PAP' + '/' + 'PAP' + '/' + _this.vconf[0]._id + '/1/Lenguaje', 'unidadplan2s').then(function (result) {
                _this.vhorario1 = result;
                _this.idhorario = null;
                _this.Form.controls['idhorario'].setValue('');
            }, function (err) {
                _this.msj.showError3('Error', err.error);
            });
        }, function (err) {
            _this.msj.showError3('Error', err.error);
        });
    }
    Userperil2CreatePage.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get('username').then(function (value) {
            _this.username = value;
        });
    };
    Userperil2CreatePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.idsuscriptor = this.navParams.data.record2.idsuscriptor;
        this.unidad = this.navParams.data.record2.unidad;
        this.codunidad = this.navParams.data.record2.codunidad;
        this.CUIX = this.navParams.data.record2.cui;
        this.NOVX = this.navParams.data.record2.nov;
        this.correo = this.navParams.data.record2.correo;
        this.cui = this.navParams.data.record2.cui;
        this.tbiologia = !this.navParams.data.record.biologia;
        this.tfisica = !this.navParams.data.record.fisica;
        this.tquimica = !this.navParams.data.record.quimica;
        this.tmatematica = !this.navParams.data.record.matematica;
        this.tlenguaje = !this.navParams.data.record.lenguaje;
        this.isDisablednit = this.navParams.data.record2.activo;
        this.nombre1 = this.navParams.data.record2.nombre;
        this.Form.controls['correo'].setValue(this.correo);
        this.Form.controls['cui'].setValue(this.cui);
        this.Form.controls['nombre1'].setValue(this.nombre1);
        this.lenguaje3 = true;
        this.matematica = true;
        this.fisica = true;
        this.biologia = true;
        this.quimica = true;
        if (this.navParams.get("record") == null) {
            this.cui = this.CUIX;
            if (this.NOVX) {
                if (this.NOVX.length == 10) {
                    this.nov = this.NOVX;
                    this.Form.controls['nov'].setValue(this.nov);
                }
                else {
                    this.carne = this.NOVX;
                    this.Form.controls['carne'].setValue(this.carne);
                }
            }
            this.titulobb = " Solicitar Asignación";
            this.titulo = 'Ingrese ficha para iniciar asignación';
            this.translateService.get('ITEM_CREATE_TITLE').subscribe(function (value) {
                _this.pageTitle = value;
            });
        }
    };
    Userperil2CreatePage.prototype.manageGallery = function () {
        var _this = this;
        if (this.matapp == false) {
            this.msj.showError3('Error', 'No existen materias para asignación.');
            return;
        }
        if (this.tlenguaje == false) {
            if (!this.idhorario || this.idhorario == null || this.idhorario == '') {
                this.msj.showError3('Error', 'Seleccione un horario valido para lenguaje');
                return;
            }
        }
        if (this.tmatematica == false) {
            if (!this.idhorario2 || this.idhorario2 == null || this.idhorario2 == '') {
                this.msj.showError3('Error', 'Seleccione un horario valido para matematica');
                return;
            }
        }
        if (this.tfisica == false) {
            if (!this.idhorario3 || this.idhorario3 == null || this.idhorario3 == '') {
                this.msj.showError3('Error', 'Seleccione un horario valido para fisica');
                return;
            }
        }
        if (this.tbiologia == false) {
            if (!this.idhorario4 || this.idhorario4 == null || this.idhorario4 == '') {
                this.msj.showError3('Error', 'Seleccione un horario valido para biologia');
                return;
            }
        }
        if (this.tquimica == false) {
            if (!this.idhorario5 || this.idhorario5 == null || this.idhorario5 == '') {
                this.msj.showError3('Error', 'Seleccione un horario valido para quimica');
                return;
            }
        }
        var creat = 'Actualiza';
        if (this.navParams.get("record") == null) {
            creat = 'Crea';
        }
        var options = {
            operacion: 'finaliza0',
            idjornada: this.Form.controls['idjornada'].value,
            idjornada2: this.Form.controls['idjornada2'].value,
            idjornada3: this.Form.controls['idjornada3'].value,
            idjornada4: this.Form.controls['idjornada4'].value,
            idjornada5: this.Form.controls['idjornada5'].value,
            idhorario: this.Form.controls['idhorario'].value,
            idhorario2: this.Form.controls['idhorario2'].value,
            idhorario3: this.Form.controls['idhorario3'].value,
            idhorario4: this.Form.controls['idhorario4'].value,
            idhorario5: this.Form.controls['idhorario5'].value,
            estado: 'Asignación finalizada con exito',
            bitacora: { idempresa: this.idempresa, idafiliado: '', email: this.username, permiso: creat, accion: creat + ' datos de perfil pro ' }
        };
        if (options) {
            this.authService.createReg(this.navParams.data.record2.id, options, 'asignapaps').then(function (result) {
                //aqui ya grabo levantar la asignacion
                var options = {
                    operacion: 'finaliza',
                    idjornada: _this.Form.controls['idjornada'].value,
                    idjornada2: _this.Form.controls['idjornada2'].value,
                    idjornada3: _this.Form.controls['idjornada3'].value,
                    idjornada4: _this.Form.controls['idjornada4'].value,
                    idjornada5: _this.Form.controls['idjornada5'].value,
                    idhorario: _this.Form.controls['idhorario'].value,
                    idhorario2: _this.Form.controls['idhorario2'].value,
                    idhorario3: _this.Form.controls['idhorario3'].value,
                    idhorario4: _this.Form.controls['idhorario4'].value,
                    idhorario5: _this.Form.controls['idhorario5'].value,
                    estado: 'Asignación finalizada con exito',
                    bitacora: { idempresa: _this.idempresa, idafiliado: '', email: _this.username, permiso: creat, accion: creat + ' datos de perfil pro ' }
                };
                if (options) {
                    _this.authService.createReg(_this.navParams.data.record2.id, options, 'asignapaps').then(function (result) {
                        //aqui ya grabo levantar la asignacion
                        _this.viewCtrl.dismiss({ si: 'si' });
                    }, function (err) {
                        _this.msj.showError3('Error', err.error);
                    });
                }
            }, function (err) {
                _this.msj.showError3('Error', err.error);
            });
        }
    };
    Userperil2CreatePage.prototype.stringify = function (country) {
        return JSON.stringify(country);
    };
    Userperil2CreatePage.prototype.cancel = function () {
        this.viewCtrl.dismiss({ si: 'no' });
    };
    Userperil2CreatePage.prototype.done = function () {
        if (!this.Form.valid) {
            return;
        }
        //this.viewCtrl.dismiss(this.Form.value);
    };
    Userperil2CreatePage.prototype.optionsFn = function (item) {
        console.log(item);
    };
    Userperil2CreatePage.prototype.onSelectChange = function (selectedValue) {
        var _this = this;
        this.idfac2 = selectedValue.split(',');
        this.ocultaxx3 = false;
        var self = this;
        self.loading = true;
        this.fisica = false;
        this.lenguaje3 = false;
        this.matematica = false;
        this.biologia = false;
        this.quimica = false;
        this.idjornada = null;
        this.idhorario = null;
        this.idjornada2 = null;
        this.idhorario2 = null;
        this.idjornada3 = null;
        this.idhorario3 = null;
        this.idjornada4 = null;
        this.idhorario4 = null;
        this.idjornada5 = null;
        this.idhorario5 = null;
        this.ocultac1 = true;
        this.ocultac2 = true;
        this.ocultac3 = true;
        this.ocultac4 = true;
        this.ocultac5 = true;
        this.fisicaaa = false;
        this.lenguaje3aa = false;
        this.matematicaaa = false;
        this.biologiaaa = false;
        this.quimicaaa = false;
        this.authService.displayPreloader('Cargando información...');
        //busca materias
        this.authService.getReg('5b97f1bceb1dab0ab0368cc6' + '/' + this.idfac2[0], 'facultadmaterias').then(function (result) {
            var lll1 = result[0].lenguaje;
            var fff1 = result[0].fisica;
            var mmm1 = result[0].matematica;
            var qqq1 = result[0].quimica;
            var bbb1 = result[0].biologia;
            var materr = '';
            if (_this.carne && _this.nov) {
                _this.authService.getRegS2(_this.carne, 'estudiantepcb').then(function (data) {
                    var cc = [];
                    cc = data;
                    for (var i = 0; i < cc.length; i++) {
                        if (cc[i].APROBACION == '1') {
                            switch (cc[i].ID_MATERIA) {
                                case '1'://BIOLOGIA
                                    bbb1 = false;
                                    _this.biologiaaa = true;
                                    break;
                                case '2'://FISICA
                                    fff1 = false;
                                    _this.fisicaaa = true;
                                    break;
                                case '3'://LENGUAJE
                                    lll1 = false;
                                    _this.lenguaje3aa = true;
                                    break;
                                case '4'://MATE
                                    mmm1 = false;
                                    _this.matematicaaa = true;
                                    break;
                                case '5'://QUIMICA
                                    qqq1 = false;
                                    _this.quimicaaa = true;
                                    break;
                                default:
                            }
                        }
                    }
                    _this.authService.getRegS2(_this.nov, 'estudiantepcb').then(function (data) {
                        var cc = [];
                        cc = data;
                        for (var i = 0; i < cc.length; i++) {
                            if (cc[i].APROBACION == '1') {
                                switch (cc[i].ID_MATERIA) {
                                    case '1'://BIOLOGIA
                                        bbb1 = false;
                                        _this.biologiaaa = true;
                                        break;
                                    case '2'://FISICA
                                        fff1 = false;
                                        _this.fisicaaa = true;
                                        break;
                                    case '3'://LENGUAJE
                                        lll1 = false;
                                        _this.lenguaje3aa = true;
                                        break;
                                    case '4'://MATE
                                        mmm1 = false;
                                        _this.matematicaaa = true;
                                        break;
                                    case '5'://QUIMICA
                                        qqq1 = false;
                                        _this.quimicaaa = true;
                                        break;
                                    default:
                                }
                            }
                        }
                        _this.matapp = true;
                        if (lll1 == true) {
                            _this.lenguaje3 = true;
                            _this.ocultac1 = false;
                        }
                        if (mmm1 == true) {
                            _this.matematica = true;
                            _this.ocultac2 = false;
                        }
                        if (fff1 == true) {
                            _this.fisica = true;
                            _this.ocultac3 = false;
                        }
                        if (bbb1 == true) {
                            _this.biologia = true;
                            _this.ocultac4 = false;
                        }
                        if (qqq1 == true) {
                            _this.quimica = true;
                            _this.ocultac5 = false;
                        }
                        self.loading = false;
                        if (_this.lenguaje3aa == true) {
                            materr = 'Lenguaje ';
                        }
                        if (_this.matematicaaa == true) {
                            materr = materr + ',Matematica ';
                        }
                        if (_this.biologiaaa == true) {
                            materr = materr + ',Biologia ';
                        }
                        if (_this.fisicaaa == true) {
                            materr = materr + ',Fisica ';
                        }
                        if (_this.quimicaaa == true) {
                            materr = materr + ',Quimica ';
                        }
                        if (_this.lenguaje3 == false && _this.fisica == false && _this.matematica == false && _this.quimica == false && _this.biologia == false) {
                            _this.matapp = false;
                            _this.msj.showError3('Precaucíon', 'Para esta unidad academica ya ganaste las materias asignadas, Materias ganadas: ' + materr);
                        }
                    }, function (err) {
                        _this.matapp = true;
                        if (lll1 == true) {
                            _this.lenguaje3 = true;
                            _this.ocultac1 = false;
                        }
                        if (mmm1 == true) {
                            _this.matematica = true;
                            _this.ocultac2 = false;
                        }
                        if (fff1 == true) {
                            _this.fisica = true;
                            _this.ocultac3 = false;
                        }
                        if (bbb1 == true) {
                            _this.biologia = true;
                            _this.ocultac4 = false;
                        }
                        if (qqq1 == true) {
                            _this.quimica = true;
                            _this.ocultac5 = false;
                        }
                        self.loading = false;
                    });
                }, function (err) {
                    _this.matapp = true;
                    if (lll1 == true) {
                        _this.lenguaje3 = true;
                        _this.ocultac1 = false;
                    }
                    if (mmm1 == true) {
                        _this.matematica = true;
                        _this.ocultac2 = false;
                    }
                    if (fff1 == true) {
                        _this.fisica = true;
                        _this.ocultac3 = false;
                    }
                    if (bbb1 == true) {
                        _this.biologia = true;
                        _this.ocultac4 = false;
                    }
                    if (qqq1 == true) {
                        _this.quimica = true;
                        _this.ocultac5 = false;
                    }
                    self.loading = false;
                });
            }
            else {
                if (_this.nov) {
                    _this.authService.getRegS2(_this.nov, 'estudiantepcb').then(function (data) {
                        var cc = [];
                        cc = data;
                        for (var i = 0; i < cc.length; i++) {
                            if (cc[i].APROBACION == '1') {
                                switch (cc[i].ID_MATERIA) {
                                    case '1'://BIOLOGIA
                                        bbb1 = false;
                                        _this.biologiaaa = true;
                                        break;
                                    case '2'://FISICA
                                        fff1 = false;
                                        _this.fisicaaa = true;
                                        break;
                                    case '3'://LENGUAJE
                                        lll1 = false;
                                        _this.lenguaje3aa = true;
                                        break;
                                    case '4'://MATE
                                        mmm1 = false;
                                        _this.matematicaaa = true;
                                        break;
                                    case '5'://QUIMICA
                                        qqq1 = false;
                                        _this.quimicaaa = true;
                                        break;
                                    default:
                                }
                            }
                        }
                        if (lll1 == true) {
                            _this.lenguaje3 = true;
                            _this.ocultac1 = false;
                        }
                        if (mmm1 == true) {
                            _this.matematica = true;
                            _this.ocultac2 = false;
                        }
                        if (fff1 == true) {
                            _this.fisica = true;
                            _this.ocultac3 = false;
                        }
                        if (bbb1 == true) {
                            _this.biologia = true;
                            _this.ocultac4 = false;
                        }
                        if (qqq1 == true) {
                            _this.quimica = true;
                            _this.ocultac5 = false;
                        }
                        if (_this.lenguaje3aa == true) {
                            materr = 'Lenguaje ';
                        }
                        if (_this.matematicaaa == true) {
                            materr = materr + ',Matematica ';
                        }
                        if (_this.biologiaaa == true) {
                            materr = materr + ',Biologia ';
                        }
                        if (_this.fisicaaa == true) {
                            materr = materr + ',Fisica ';
                        }
                        if (_this.quimicaaa == true) {
                            materr = materr + ',Quimica ';
                        }
                        if (_this.lenguaje3 == false && _this.fisica == false && _this.matematica == false && _this.quimica == false && _this.biologia == false) {
                            _this.matapp = false;
                            _this.msj.showError3('Precaucíon', 'Para esta unidad academica ya ganaste las materias asignadas, Materias ganadas: ' + materr + '  ' + _this.Form.invalid + ' ' + _this.matapp);
                        }
                        else {
                            // this.matapp=false;
                        }
                    }, function (err) {
                        _this.matapp = true;
                        if (lll1 == true) {
                            _this.lenguaje3 = true;
                            _this.ocultac1 = false;
                        }
                        if (mmm1 == true) {
                            _this.matematica = true;
                            _this.ocultac2 = false;
                        }
                        if (fff1 == true) {
                            _this.fisica = true;
                            _this.ocultac3 = false;
                        }
                        if (bbb1 == true) {
                            _this.biologia = true;
                            _this.ocultac4 = false;
                        }
                        if (qqq1 == true) {
                            _this.quimica = true;
                            _this.ocultac5 = false;
                        }
                        self.loading = false;
                    });
                }
                else {
                    if (_this.carne) {
                        _this.authService.getRegS2(_this.carne, 'estudiantepcb').then(function (data) {
                            var cc = [];
                            cc = data;
                            for (var i = 0; i < cc.length; i++) {
                                if (cc[i].APROBACION == '1') {
                                    switch (cc[i].ID_MATERIA) {
                                        case '1'://BIOLOGIA
                                            bbb1 = false;
                                            _this.biologiaaa = true;
                                            break;
                                        case '2'://FISICA
                                            fff1 = false;
                                            _this.fisicaaa = true;
                                            break;
                                        case '3'://LENGUAJE
                                            lll1 = false;
                                            _this.lenguaje3aa = true;
                                            break;
                                        case '4'://MATE
                                            mmm1 = false;
                                            _this.matematicaaa = true;
                                            break;
                                        case '5'://QUIMICA
                                            qqq1 = false;
                                            _this.quimicaaa = true;
                                            break;
                                        default:
                                    }
                                }
                            }
                            _this.matapp = true;
                            if (lll1 == true) {
                                _this.lenguaje3 = true;
                                _this.ocultac1 = false;
                            }
                            if (mmm1 == true) {
                                _this.matematica = true;
                                _this.ocultac2 = false;
                            }
                            if (fff1 == true) {
                                _this.fisica = true;
                                _this.ocultac3 = false;
                            }
                            if (bbb1 == true) {
                                _this.biologia = true;
                                _this.ocultac4 = false;
                            }
                            if (qqq1 == true) {
                                _this.quimica = true;
                                _this.ocultac5 = false;
                            }
                            self.loading = false;
                            if (_this.lenguaje3aa == true) {
                                materr = 'Lenguaje ';
                            }
                            if (_this.matematicaaa == true) {
                                materr = materr + ',Matematica ';
                            }
                            if (_this.biologiaaa == true) {
                                materr = materr + ',Biologia ';
                            }
                            if (_this.fisicaaa == true) {
                                materr = materr + ',Fisica ';
                            }
                            if (_this.quimicaaa == true) {
                                materr = materr + ',Quimica ';
                            }
                            if (_this.lenguaje3 == false && _this.fisica == false && _this.matematica == false && _this.quimica == false && _this.biologia == false) {
                                _this.matapp = false;
                                _this.msj.showError3('Precaucíon', 'Para esta unidad academica ya ganaste las materias asignadas, Materias ganadas: ' + materr);
                            }
                        }, function (err) {
                            self.loading = false;
                            _this.matapp = true;
                            if (lll1 == true) {
                                _this.lenguaje3 = true;
                                _this.ocultac1 = false;
                            }
                            if (mmm1 == true) {
                                _this.matematica = true;
                                _this.ocultac2 = false;
                            }
                            if (fff1 == true) {
                                _this.fisica = true;
                                _this.ocultac3 = false;
                            }
                            if (bbb1 == true) {
                                _this.biologia = true;
                                _this.ocultac4 = false;
                            }
                            if (qqq1 == true) {
                                _this.quimica = true;
                                _this.ocultac5 = false;
                            }
                        });
                    }
                    else {
                        _this.matapp = true;
                        if (lll1 == true) {
                            _this.lenguaje3 = true;
                            _this.ocultac1 = false;
                        }
                        if (mmm1 == true) {
                            _this.matematica = true;
                            _this.ocultac2 = false;
                        }
                        if (fff1 == true) {
                            _this.fisica = true;
                            _this.ocultac3 = false;
                        }
                        if (bbb1 == true) {
                            _this.biologia = true;
                            _this.ocultac4 = false;
                        }
                        if (qqq1 == true) {
                            _this.quimica = true;
                            _this.ocultac5 = false;
                        }
                    }
                }
            }
            _this.authService.hidePreloader();
        }, function (err) {
            _this.msj.showError3('Error', err.error);
            self.loading = false;
            _this.authService.hidePreloader();
        });
    };
    Userperil2CreatePage.prototype.onSelectChange1jh = function (selectedValue) {
        if ((selectedValue) == (this.idhorario2) || (selectedValue) == (this.idhorario3) || (selectedValue) == (this.idhorario4) || (selectedValue) == (this.idhorario5)) {
            this.idhorario = null;
            this.idjornada = null;
            this.Form.controls['idhorario'].setValue('');
            this.msj.showError3('Error', 'Ya existe un horario para otra materia');
        }
    };
    Userperil2CreatePage.prototype.onSelectChange2jh = function (selectedValue) {
        if ((selectedValue) == (this.idhorario) || (selectedValue) == (this.idhorario3) || (selectedValue) == (this.idhorario4) || (selectedValue) == (this.idhorario5)) {
            this.idhorario2 = null;
            this.Form.controls['idhorario2'].setValue('');
            this.idjornada2 = null;
            this.msj.showError3('Error', 'Ya existe un horario para otra materia');
        }
    };
    Userperil2CreatePage.prototype.onSelectChange3jh = function (selectedValue) {
        if ((selectedValue) == (this.idhorario) || (selectedValue) == (this.idhorario2) || (selectedValue) == (this.idhorario4) || (selectedValue) == (this.idhorario5)) {
            this.idhorario3 = null;
            this.idjornada3 = null;
            this.Form.controls['idhorario3'].setValue('');
            this.msj.showError3('Error', 'Ya existe un horario para otra materia');
        }
    };
    Userperil2CreatePage.prototype.onSelectChange4jh = function (selectedValue) {
        if ((selectedValue) == (this.idhorario) || (selectedValue) == (this.idhorario2) || (selectedValue) == (this.idhorario3) || (selectedValue) == (this.idhorario5)) {
            this.idhorario4 = null;
            this.idjornada4 = null;
            this.Form.controls['idhorario4'].setValue('');
            this.msj.showError3('Error', 'Ya existe un horario para otra materia');
        }
    };
    Userperil2CreatePage.prototype.onSelectChange5jh = function (selectedValue) {
        if ((selectedValue) == (this.idhorario) || (selectedValue) == (this.idhorario2) || (selectedValue) == (this.idhorario3) || (selectedValue) == (this.idhorario4)) {
            this.idhorario5 = null;
            this.idjornada5 = null;
            this.Form.controls['idhorario5'].setValue('');
            this.msj.showError3('Error', 'Ya existe un horario para otra materia');
        }
    };
    Userperil2CreatePage.prototype.onSelectChangeno1 = function (selectedValue) {
        if (this.carne == '' || this.carne == undefined) {
        }
        else {
            if (this.carne.length < 10) {
            }
            else {
                this.msj.showError3('Error', 'Ingrese un Carné valido');
            }
        }
    };
    Userperil2CreatePage.prototype.onSelectChangeno2 = function (selectedValue) {
        if (this.nov == '' || this.nov == undefined) {
        }
        else {
            if (this.nov.length == 10) {
            }
            else {
                this.msj.showError3('Error', 'Ingrese un Número valido de Orientación Vocacional ');
            }
        }
    };
    Userperil2CreatePage.prototype.onSelectChange1j = function (selectedValue) {
        var _this = this;
        if (selectedValue) {
            if (selectedValue != '') {
                //tipounidad,unidad,periodo,jornada, materia
                this.authService.displayPreloader('Cargando información...');
                this.authService.getReg('PAP' + '/' + 'PAP' + '/' + this.vconf[0]._id + '/' + selectedValue + '/Lenguaje', 'unidadplan2s').then(function (result) {
                    _this.vhorario1 = result;
                    _this.idhorario = null;
                    _this.Form.controls['idhorario'].setValue('');
                }, function (err) {
                    _this.msj.showError3('Error', err.error);
                });
                this.authService.hidePreloader();
            }
        }
    };
    Userperil2CreatePage.prototype.onSelectChange2j = function (selectedValue) {
        var _this = this;
        if (selectedValue) {
            if (selectedValue != '') {
                //tipounidad,unidad,periodo,jornada, materia
                this.authService.displayPreloader('Cargando información...');
                this.authService.getReg('PAP' + '/' + 'PAP' + '/' + this.vconf[0]._id + '/' + selectedValue + '/Matematica', 'unidadplan2s').then(function (result) {
                    _this.vhorario2 = result;
                    _this.idhorario2 = null;
                    _this.Form.controls['idhorario2'].setValue('');
                }, function (err) {
                    _this.msj.showError3('Error', err.error);
                });
                this.authService.hidePreloader();
            }
        }
    };
    Userperil2CreatePage.prototype.onSelectChange3j = function (selectedValue) {
        var _this = this;
        if (selectedValue) {
            if (selectedValue != '') {
                //tipounidad,unidad,periodo,jornada, materia
                this.authService.displayPreloader('Cargando información...');
                this.authService.getReg('PAP' + '/' + 'PAP' + '/' + this.vconf[0]._id + '/' + selectedValue + '/Fisica', 'unidadplan2s').then(function (result) {
                    _this.vhorario3 = result;
                    _this.idhorario3 = null;
                    _this.Form.controls['idhorario3'].setValue('');
                }, function (err) {
                    _this.msj.showError3('Error', err.error);
                });
                this.authService.hidePreloader();
            }
        }
    };
    Userperil2CreatePage.prototype.onSelectChange4j = function (selectedValue) {
        var _this = this;
        //tipounidad,unidad,periodo,jornada, materia
        if (selectedValue) {
            if (selectedValue != '') {
                this.authService.displayPreloader('Cargando información...');
                this.authService.getReg('PAP' + '/' + 'PAP' + '/' + this.vconf[0]._id + '/' + selectedValue + '/Biologia', 'unidadplan2s').then(function (result) {
                    _this.vhorario4 = result;
                    _this.idhorario4 = null;
                    _this.Form.controls['idhorario4'].setValue('');
                }, function (err) {
                    _this.msj.showError3('Error', err.error);
                });
                this.authService.hidePreloader();
            }
        }
    };
    Userperil2CreatePage.prototype.onSelectChange5j = function (selectedValue) {
        var _this = this;
        //tipounidad,unidad,periodo,jornada, materia
        if (selectedValue) {
            if (selectedValue != '') {
                this.authService.displayPreloader('Cargando información...');
                this.authService.getReg('PAP' + '/' + 'PAP' + '/' + this.vconf[0]._id + '/' + selectedValue + '/Quimica', 'unidadplan2s').then(function (result) {
                    _this.vhorario5 = result;
                    _this.idhorario5 = null;
                    _this.Form.controls['idhorario5'].setValue('');
                }, function (err) {
                    _this.msj.showError3('Error', err.error);
                });
                this.authService.hidePreloader();
            }
        }
    };
    Userperil2CreatePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-userperil2-create',template:/*ion-inline-start:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\PAP\userperil2-create\userperil2-create.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Seleccione Horario de clases</ion-title>\n\n    <ion-buttons end>\n        <button (click)="cancel()" icon-only ion-button padding-right>\n            <ion-icon name="md-close"></ion-icon>\n          </button>\n\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n    <form     [formGroup]="Form"   text-wrap>\n\n    <ion-list>\n\n      <ion-item-divider color="secondary">\n        <ion-label class="my-label18" color="secondary2" center>\n          DATOS PERSONALES\n        </ion-label>\n      </ion-item-divider>\n\n\n\n      <ion-item >\n        <ion-label  class="my-label18" color="secondary2" stacked>Nombre:  </ion-label>\n        <ion-input  [disabled]="true" [(ngModel)]="nombre1" [formControl]="Form.controls[\'nombre1\']" type="text"></ion-input>\n      </ion-item>\n\n      <ion-item class="invalid" *ngIf="!Form.controls.nombre1.valid && (Form.controls.nombre1.dirty || Form.controls.nombre1.touched)" text-wrap>\n          <ion-icon name="warning"></ion-icon>\n          Ingrese su primer nombre valido\n      </ion-item>\n\n      <ion-item >\n        <ion-label class="my-label18" color="secondary2" > Código Unico de Identificación (CUI):   </ion-label>\n        <ion-input  [disabled]="true" [(ngModel)]="cui"  [formControl]="Form.controls[\'cui\']" type="text"></ion-input>\n    </ion-item>\n\n      <ion-item class="invalid" *ngIf="!Form.controls.cui.valid && (Form.controls.cui.dirty || Form.controls.cui.touched)" text-wrap>\n          <ion-icon name="warning"></ion-icon>\n         Ingrese un Código Unico de Identificación (CUI) valido\n      </ion-item>\n\n\n\n\n\n\n\n\n<ion-item >\n    <ion-label  class="my-label18" color="secondary2" stacked> Correo electrónico: </ion-label>\n    <ion-input  [disabled]="true" [(ngModel)]="correo"  [formControl]="Form.controls[\'correo\']" type="text"></ion-input>\n  </ion-item>\n\n  <ion-item class="invalid" *ngIf="!Form.controls.correo.valid && (Form.controls.correo.dirty || Form.controls.correo.touched)" text-wrap>\n      <ion-icon name="warning"></ion-icon>\n      Ingrese un correo electrónico valido\n  </ion-item>\n\n\n\n\n\n\n<ion-item-divider color="secondary">\n    <ion-label class="my-label18" color="secondary2" center>\n      HORARIO\n    </ion-label>\n  </ion-item-divider>\n\n\n\n\n\n\n    <ion-item-divider >\n        <ion-label center>\n          SELECCIONA HORARIO\n        </ion-label>\n      </ion-item-divider>\n\n    <ion-grid  >\n        <ion-row>\n          <ion-col>\n            <div>\n              CURSO\n            </div>\n          </ion-col>\n          <ion-col>\n            <div>\n              HORARIO\n            </div>\n          </ion-col>\n      <!--\n          <ion-col>\n            <div>\n              JORNADA\n            </div>\n          </ion-col>\n          <ion-col>\n            <div>\n              HORARIO\n            </div>\n          </ion-col>\n          -->\n        </ion-row>\n\n        <ion-row [hidden]=\'tlenguaje\' >\n            <ion-col size="4">\n              <div>\n                  <ion-label>LENGUAJE</ion-label>\n                  <ion-checkbox [disabled]=true   color="verdex"   [(ngModel)]="lenguaje3" [formControl]="Form.controls[\'lenguaje3\']"></ion-checkbox>\n              </div>\n            </ion-col>\n\n            <ion-col >\n              <div>\n                  <ion-select   (ionChange)="onSelectChange1jh($event)"    [(ngModel)]="idhorario" [formControl]="Form.controls[\'idhorario\']">\n                      <ion-option text-wrap *ngFor="let item of vhorario1" [value]="item.nombre">{{item.nombre}}</ion-option>\n                  </ion-select>\n              </div>\n            </ion-col>\n          </ion-row>\n\n\n          <ion-row  [hidden]=\'tmatematica\'>\n              <ion-col size="4">\n                <div>\n                    <ion-label>MATEMÁTICA</ion-label>\n                    <ion-checkbox  [disabled]=true  color="amarillox" [(ngModel)]="matematica" [formControl]="Form.controls[\'matematica\']"></ion-checkbox>\n\n                </div>\n              </ion-col>\n\n                <ion-col >\n                  <div>\n                      <ion-select   (ionChange)="onSelectChange2jh($event)"   [(ngModel)]="idhorario2" [formControl]="Form.controls[\'idhorario2\']">\n                          <ion-option text-wrap *ngFor="let item of vhorario2" [value]="item.nombre">{{item.nombre}}</ion-option>\n                      </ion-select>\n                  </div>\n                </ion-col>\n            </ion-row>\n\n\n          <ion-row [hidden]=\'tfisica\'>\n              <ion-col size="4">\n                <div>\n                    <ion-label>FÍSICA</ion-label>\n                    <ion-checkbox [disabled]=true  color="danger" [(ngModel)]="fisica" [formControl]="Form.controls[\'fisica\']"></ion-checkbox>\n\n                </div>\n              </ion-col>\n\n                <ion-col >\n                  <div>\n                      <ion-select   (ionChange)="onSelectChange3jh($event)"    [(ngModel)]="idhorario3" [formControl]="Form.controls[\'idhorario3\']">\n                          <ion-option text-wrap *ngFor="let item of vhorario3" [value]="item.nombre">{{item.nombre}}</ion-option>\n                      </ion-select>\n                  </div>\n                </ion-col>\n            </ion-row>\n\n\n\n          <ion-row [hidden]=\'tbiologia\'>\n              <ion-col size="4">\n                <div>\n                    <ion-label>BIOLOGÍA</ion-label>\n                    <ion-checkbox  [disabled]=true  color="secondary" [(ngModel)]="biologia" [formControl]="Form.controls[\'biologia\']"></ion-checkbox>\n\n                </div>\n              </ion-col>\n\n                <ion-col>\n                  <div>\n                      <ion-select   (ionChange)="onSelectChange4jh($event)"  [(ngModel)]="idhorario4" [formControl]="Form.controls[\'idhorario4\']">\n                          <ion-option text-wrap *ngFor="let item of vhorario4" [value]="item.nombre">{{item.nombre}}</ion-option>\n                      </ion-select>\n                  </div>\n                </ion-col>\n            </ion-row>\n\n\n\n          <ion-row [hidden]=\'tquimica\'>\n              <ion-col size="4">\n                <div>\n                    <ion-label>QUÍMICA</ion-label>\n                    <ion-checkbox [disabled]=true  color="dark"  [(ngModel)]="quimica" [formControl]="Form.controls[\'quimica\']"></ion-checkbox>\n\n                </div>\n              </ion-col>\n\n                <ion-col >\n                  <div>\n                      <ion-select   (ionChange)="onSelectChange5jh($event)" [(ngModel)]="idhorario5" [formControl]="Form.controls[\'idhorario5\']">\n                          <ion-option text-wrap *ngFor="let item of vhorario5" [value]="item.nombre">{{item.nombre}}</ion-option>\n                      </ion-select>\n                  </div>\n                </ion-col>\n            </ion-row>\n\n      </ion-grid>\n\n\n\n\n\n\n\n\n\n<ion-row >\n    <ion-col text-center>\n      <button [disabled]="Form.invalid" ion-button block color="secondary" (click)="manageGallery()" strong>\n    Asignarse este horario\n      </button>\n    </ion-col>\n  </ion-row>\n\n\n\n\n     </ion-list>\n\n    </form>\n\n\n\n\n</ion-content>\n'/*ion-inline-end:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\PAP\userperil2-create\userperil2-create.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3__providers__["d" /* NotificationProvider */], __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["F" /* ViewController */], __WEBPACK_IMPORTED_MODULE_3__providers__["a" /* Auth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */]])
    ], Userperil2CreatePage);
    return Userperil2CreatePage;
}());

//# sourceMappingURL=userperil2-create.js.map

/***/ })

});
//# sourceMappingURL=93.js.map