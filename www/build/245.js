webpackJsonp([245],{

/***/ 1388:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Asignacioncalusac100aCreatePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_image_image__ = __webpack_require__(448);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_camera__ = __webpack_require__(197);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var Asignacioncalusac100aCreatePage = /** @class */ (function () {
    function Asignacioncalusac100aCreatePage(_IMAGE, alertCtrl, loadingCtrl, storage, msj, translateService, viewCtrl, authService, navCtrl, navParams, _FB, actionSheetCtrl, events) {
        var _this = this;
        this._IMAGE = _IMAGE;
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
        this.tiposus = [];
        this.idtipounidad2 = [];
        this.idtipogrupo2 = [];
        this.idperiodo2 = [];
        this.personalid = "";
        this.ordenpago = '';
        this.llave = '';
        this.rubro = '149';
        this.ano = '2020';
        this.ordenpago2 = '';
        this.llave2 = '';
        this.pofilel = './assets/img/photo256.png';
        this.esconde = false;
        this.idunidadacademica2 = [];
        this.fecha = (new Date()).toISOString();
        this.items = [];
        this.resultado = [];
        this.vgrupo = [];
        this.vgrupo2 = [];
        this.vgrupo2a = [];
        this.vgrupob = [];
        this.vgrupo2b = [];
        this.vgrupo3 = [];
        this.letras = "abcdefghyjklmnñopqrstuvwxyz";
        // Define form validation - VERY basic!
        this.form = this._FB.group({
            tipounidad: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            unidadacademica: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            idtipogrupo: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            ididioma: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            iddia: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            idhora: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            entiendo: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            nombre: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            carnecalusac1: [''],
            unidad: [''],
            telefono: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            imagen: [''],
            imagena: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            imagenb: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            imagenc: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            identificador: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required])]
        });
        this.titulo2 = 'Sede';
        this.translateService.get('APPX').subscribe(function (value) {
            _this.idempresa = value;
        });
        /*
        this.authService.getReg('5b97f8612e41b2394865a945','idtipos').then((result) => {
          this.vgrupo3=result;
        }, (err) => {
        this.msj.showError3('Error',err.error);
        });
        */
    }
    Asignacioncalusac100aCreatePage.prototype.LoginRemCheck = function () {
        if (this.entiendo === false) {
            this.entiendo = null;
        }
    };
    Asignacioncalusac100aCreatePage.prototype.ngOnInit = function () {
        var _this = this;
        this.novp = this.navParams.data.nov;
        this.entiendo = null;
        this.storage.get('username').then(function (value) {
            _this.username = value;
            _this.storage.get('tiposus').then(function (value) {
                _this.tiposus = value.split(',');
                _this.novp = _this.tiposus[5];
                _this.nombre = _this.tiposus[4];
                _this.personalid = _this.tiposus[3];
                _this.cui = _this.tiposus[2];
                if (_this.navParams.get("record") == null) {
                    _this.identificador = _this.novp;
                }
                else {
                    _this.identificador = _this.navParams.data.record.identificador;
                }
                if (_this.tiposus[6] == 'user') {
                    if (_this.tiposus[5] == '' || _this.tiposus[5] == undefined) {
                    }
                    else {
                        _this.isDisablednit = false;
                        _this.form.controls['identificador'].setValue(_this.novp);
                    }
                }
                else {
                    _this.isDisablednit = true;
                }
            });
        });
    };
    Asignacioncalusac100aCreatePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.esconde = false;
        if (this.navParams.get("record") == null) {
            this.authService.getReg2b('1' + '/' + '123' + '/' + '2' + '/' + '123' + '/unidadaca', 'unidadplan4as').then(function (result) {
                //    this.authService.getReg2b('todos','tipounidad3s').then((result) => {
                _this.vgrupo = result;
            }, function (err) {
                _this.msj.showError3('Error', err.error);
            });
            this.pageTitle = 'Asignación Examen de Ubicación';
            //  this.isDisablednit =true
        }
        else {
            //  this._ID 				=	this.navParams.data.record._id;
            this.nombre = this.navParams.data.record.nombre;
            this.esconde = true;
            this.tipounidad = this.navParams.data.record.idtipounidad;
            this.unidadacademica = this.navParams.data.record.idunidadacademica;
            this.ididioma = this.navParams.data.record.ididioma;
            this.iddia = this.navParams.data.record.iddia;
            this.idhora = this.navParams.data.record.idhora;
            this.telefono = this.navParams.data.record.telefono;
            this.unidad = this.navParams.data.record.unidad;
            this.fecha = this.navParams.data.record.fecha;
            this.idtipogrupo = this.navParams.data.record.idtipo;
            this.identificador = this.navParams.data.record.identificador;
            this.periodo = this.navParams.data.record.periodo;
            this.authService.convertToDataURLviaCanvas(this.navParams.data.record.foto2, 'image/jpeg').
                then(function (base64) { return _this.foto1imga = base64; });
            this.authService.convertToDataURLviaCanvas(this.navParams.data.record.foto3, 'image/jpeg').
                then(function (base64) { return _this.foto1imgb = base64; });
            this.authService.convertToDataURLviaCanvas(this.navParams.data.record.foto4, 'image/jpeg').
                then(function (base64) { return _this.foto1imgc = base64; });
            this.image = this.navParams.data.record.foto1;
            this.imagen = this.navParams.data.record.foto1;
            this.carnecalusac1 = this.navParams.data.record.carneusac;
            this.telefono = this.navParams.data.record.notelefono;
            //    this.form.controls['carnecalusac1'].setValue(this.navParams.data.record.carneusac);
            this.imagea = this.navParams.data.record.foto2;
            this.imagena = this.navParams.data.record.foto2;
            this.imageb = this.navParams.data.record.foto3;
            this.imagenb = this.navParams.data.record.foto3;
            this.imagec = this.navParams.data.record.foto4;
            this.imagenc = this.navParams.data.record.foto4;
            //      this.isDisablednit =false
            this.translateService.get('ITEM_UPDATE_TITLE').subscribe(function (value) {
                _this.pageTitle = value;
            });
        }
    };
    Asignacioncalusac100aCreatePage.prototype.manageGallery2 = function (loading) {
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
        if (!this.idperiodo2[1]) {
            this.msj.showError3('Mensaje', 'Seleccione la unidad /carrera valida ó Esta unidad/carrera no tiene planificada ningun salon para asignación en linea');
            return;
        }
        if (!this.form.controls['identificador'].value) {
            this.msj.showError3('Mensaje', 'Ingrese un No. orientación / Carné  valido');
            loading.dismiss();
            return;
        }
        if (this.form.controls['identificador'].value == undefined) {
            this.msj.showError3('Mensaje', 'Ingrese un No. orientación / Carné  valido');
            loading.dismiss();
            return;
        }
        if (this.form.controls['identificador'].value == '') {
            this.msj.showError3('Mensaje', 'Ingrese un No. orientación / Carné  valido');
            loading.dismiss();
            return;
        }
        if (!this.form.controls['nombre'].value) {
            this.msj.showError3('Mensaje', 'Ingrese un No. orientación / Carné  valido');
            loading.dismiss();
            return;
        }
        if (this.form.controls['nombre'].value == undefined) {
            this.msj.showError3('Mensaje', 'Ingrese un No. orientación / Carné  valido');
            loading.dismiss();
            return;
        }
        if (this.form.controls['nombre'].value == '') {
            this.msj.showError3('Mensaje', 'Ingrese un No. orientación / Carné  valido');
            loading.dismiss();
            return;
        }
        if (this.navParams.get("record") == null) {
            creat = 'Crea';
        }
        this.authService.subefoto('', 'Images', this.foto1imga, '', '', '', '', 'create').then(function (result) {
            var data = [];
            data = result;
            _this.form.controls['imagena'].setValue(data.url);
            _this.authService.subefoto('', 'Images', _this.foto1imgb, '', '', '', '', 'create').then(function (result) {
                var data = [];
                data = result;
                _this.form.controls['imagenb'].setValue(data.url);
                _this.authService.subefoto('', 'Images', _this.foto1imgc, '', '', '', '', 'create').then(function (result) {
                    var data = [];
                    data = result;
                    _this.form.controls['imagenc'].setValue(data.url);
                    var options = {
                        nombre: _this.form.controls['nombre'].value,
                        tipounidad: { id: _this.idtipounidad2[0], nombre: _this.idtipounidad2[1] },
                        unidadacademica: { id: _this.idunidadacademica2[0], nombre: _this.idunidadacademica2[1] },
                        idtipo: _this.idtipogrupo2[0],
                        ididioma: _this.ididioma2[0],
                        periodo: { id: _this.idperiodo2[0], nombre: _this.idperiodo2[1] },
                        foto1: _this.form.controls['imagen'].value,
                        foto2: _this.form.controls['imagena'].value,
                        foto3: _this.form.controls['imagenb'].value,
                        foto4: _this.form.controls['imagenc'].value,
                        notelefono: _this.form.controls['telefono'].value,
                        carneusac: _this.form.controls['carnecalusac1'].value,
                        iddia: _this.form.controls['iddia'].value,
                        idhora: _this.form.controls['idhora'].value,
                        unidad: _this.form.controls['unidad'].value,
                        idestudiante: _this.username,
                        idinterno: _this.username,
                        identificador: _this.form.controls['identificador'].value,
                        identificador2: _this.identificador,
                        noorden: _this.ordenpago,
                        noorden2: _this.ordenpago2,
                        rubro: _this.rubro,
                        ano: _this.ano,
                        llave: _this.llave,
                        llave2: _this.llave2,
                        monto2: 25,
                        estadopago: 'Pendiente de pago',
                        monto: 155,
                        fechasiif: _this.fechax,
                        fechasiif2: _this.fechax2,
                        tipoasignacion: 'enlinea',
                        bitacora: { idempresa: _this.idempresa, idafiliado: '', email: _this.username, permiso: creat, accion: creat + ' asigna examen suficiencia ' }
                    };
                    if (_this.navParams.get("record") == null) {
                        if (options) {
                            _this.authService.createReg2b('', options, 'asignaubicacionas').then(function (result) {
                                loading.dismiss();
                                if (!_this.form.valid) {
                                    return;
                                }
                                _this.viewCtrl.dismiss(result);
                            }, function (err) {
                                loading.dismiss();
                                _this.msj.showError3('Mensaje', err.error);
                            });
                        }
                    }
                    else {
                        loading.dismiss();
                    }
                });
            });
        });
    };
    Asignacioncalusac100aCreatePage.prototype.random = function () {
        var rand = Math.floor(Math.random() * 20) + 1;
        return rand;
    };
    Asignacioncalusac100aCreatePage.prototype.davariable = function (cad, varx) {
        var re = "";
        var otro = cad;
        var bb = [];
        if (otro.indexOf(varx) > 0) {
            bb = otro.split(varx);
            if (bb.length == 0) {
                re = "error";
            }
            else {
                var cc = bb[1].split(';');
                var dd = cc[1];
                var ee = dd.split('&');
                re = ee[0];
            }
        }
        else {
            re = "error";
        }
        return re;
    };
    Asignacioncalusac100aCreatePage.prototype.tiene_letras = function (texto) {
        texto = texto.toLowerCase();
        for (var i = 0; i < texto.length; i++) {
            if (this.letras.indexOf(texto.charAt(i), 0) != -1) {
                return 1;
            }
        }
        return 0;
    };
    Asignacioncalusac100aCreatePage.prototype.manageGallery0 = function () {
        var _this = this;
        if (this.navParams.get("record") == null) {
            this.manageGallery();
        }
        else {
            var loading_1 = this.loadingCtrl.create({
                spinner: 'bubbles',
                content: "Espere un momento,  Realizando  Operación ......"
            });
            loading_1.present();
            this.authService.subefoto('', 'Images', this.foto1imga, '', '', '', this.form.controls['imagena'].value, 'update').then(function (result) {
                var data = [];
                data = result;
                _this.form.controls['imagena'].setValue(data.url);
                _this.authService.subefoto('', 'Images', _this.foto1imgb, '', '', '', _this.form.controls['imagenb'].value, 'update').then(function (result) {
                    var data = [];
                    data = result;
                    _this.form.controls['imagenb'].setValue(data.url);
                    _this.authService.subefoto('', 'Images', _this.foto1imgc, '', '', '', _this.form.controls['imagenc'].value, 'update').then(function (result) {
                        var data = [];
                        data = result;
                        _this.form.controls['imagenc'].setValue(data.url);
                        var options = {
                            operacion: 'actualizadatos',
                            nombre: _this.form.controls['nombre'].value,
                            foto1: '',
                            foto2: _this.form.controls['imagena'].value,
                            foto3: _this.form.controls['imagenb'].value,
                            foto4: _this.form.controls['imagenc'].value,
                            notelefono: _this.form.controls['telefono'].value,
                            carneusac: _this.form.controls['carnecalusac1'].value,
                            estadopago: _this.navParams.data.record.estadopago,
                            estadooperador: 'ACTUALIZADAS',
                            ultrechazo: _this.navParams.data.record.ultrechazo,
                            unidad: _this.form.controls['unidad'].value,
                            idestudiante: _this.username,
                            idinterno: _this.username,
                            identificador: _this.form.controls['identificador'].value,
                            identificador2: _this.identificador,
                            bitacora: { idempresa: _this.idempresa, idafiliado: '', email: _this.username, permiso: 'Actualiza', accion: 'Actualiza asigna examen suficiencia ' }
                        };
                        if (_this.navParams.get("record") !== null) {
                            if (options) {
                                _this.authService.createReg2b(_this.navParams.data.record._id, options, 'asignaubicacionas').then(function (result) {
                                    loading_1.dismiss();
                                    if (!_this.form.valid) {
                                        return;
                                    }
                                    _this.viewCtrl.dismiss(result);
                                }, function (err) {
                                    _this.msj.showError3('Mensaje', err.error);
                                });
                            }
                        }
                        else {
                            loading_1.dismiss();
                        }
                    });
                });
            });
        }
    };
    Asignacioncalusac100aCreatePage.prototype.manageGallery = function () {
        var _this = this;
        if (this.username == '') {
            this.msj.showError3('Mensaje', 'Existe un problema con su dispositivo , no existe usuario');
            return;
        }
        if (!this.username) {
            this.msj.showError3('Mensaje', 'Existe un problema con su dispositivo , no existe usuario');
            return;
        }
        if (!this.idtipounidad2[0]) {
            this.msj.showError3('Mensaje', 'Seleccione la unidad /carrera donde realizará el exámen');
            return;
        }
        if (!this.idperiodo2[1]) {
            this.msj.showError3('Mensaje', 'Seleccione la unidad /carrera valida ó Esta unidad/carrera no tiene planificada ningun salon para asignación en linea');
            this.idtipogrupo = [];
            this.idtipo = '';
            return;
        }
        if (!this.form.controls['identificador'].value) {
            this.msj.showError3('Mensaje', 'Ingrese un No. orientación / Carné  valido');
            return;
        }
        if (this.form.controls['identificador'].value == '') {
            this.msj.showError3('Mensaje', 'Ingrese un No. orientación / Carné  valido');
            return;
        }
        if (!this.form.controls['nombre'].value) {
            this.msj.showError3('Mensaje', 'Ingrese un nombre  valido');
            return;
        }
        if (this.form.controls['nombre'].value == '') {
            this.msj.showError3('Mensaje', 'Ingrese un nombre valido');
            return;
        }
        var loading = this.loadingCtrl.create({
            spinner: 'bubbles',
            content: "Espere un momento,  Realizando  Operación ......"
        });
        loading.present();
        var llavedoc = this.identificador;
        if (this.tiene_letras(llavedoc) == 1) {
            llavedoc = String(this.random());
        }
        this.identificador2 = llavedoc;
        //76   5     exaMEN  155 quetzales      76  1    certificacion  25quetzqles
        this.authService.getReg2b(llavedoc + '/' + this.nombre + '/' + '155' + ".00" + '/30/2021/' + this.rubro + '/1', 'siifs').then(function (data) {
            _this.items = data;
            var aa = [];
            aa = data;
            var otro = aa.cadena;
            var gorden = _this.davariable(otro, 'orden_pago');
            _this.ordenpago = gorden;
            _this.llave = _this.davariable(otro, 'llave');
            _this.fechax = _this.davariable(otro, 'fecha');
            /*
                    this.ordenpago='12345'
                    this.llave='12345'
                    this.fechax='2020-09-15'
                      gorden='ok'
                      */
            if (gorden == "error") {
                _this.msj.showError3('Error', 'No se pudo generar orden de pago, intente mas tarde');
                loading.dismiss();
                return;
            }
            _this.authService.getReg2b(llavedoc + '/' + _this.nombre + '/' + '25' + ".00" + '/30/2021/' + _this.rubro + '/4', 'siifs').then(function (data) {
                _this.items = data;
                var aa = [];
                aa = data;
                var otro = aa.cadena;
                var gorden = _this.davariable(otro, 'orden_pago');
                _this.ordenpago2 = gorden;
                _this.llave2 = _this.davariable(otro, 'llave');
                _this.fechax2 = _this.davariable(otro, 'fecha');
                /*
                                        this.ordenpago2='12345'
                                        this.llave2='12345'
                                        this.fechax2='2020-09-15'
                gorden='ok'
                */
                if (gorden == "error") {
                    _this.msj.showError3('Error', 'No se pudo generar orden de pago, intente mas tarde');
                    loading.dismiss();
                    return;
                }
                _this.manageGallery2(loading);
            }, function (err) {
                _this.msj.showError3('Error', 'Existe un problema al generar la boleta de pago, comuniquese con unidad administrativa CALUSAC');
                loading.dismiss();
            });
        }, function (err) {
            _this.msj.showError3('Error', 'Existe un problema al generar la boleta de pago, comuniquese con unidad administrativa CALUSAC');
            loading.dismiss();
        });
    };
    Asignacioncalusac100aCreatePage.prototype.cancel2 = function () {
        this.identificador = '';
        this.identificador2 = '';
        this.tipounidad = '';
        this.idtipo = '';
        this.idtipounidad2 = [];
        this.idtipogrupo = '';
        this.nombre = '';
        this.items = [];
    };
    Asignacioncalusac100aCreatePage.prototype.cancel = function () {
        this.viewCtrl.dismiss();
    };
    Asignacioncalusac100aCreatePage.prototype.done = function () {
        if (!this.form.valid) {
            return;
        }
        //this.viewCtrl.dismiss(this.form.value);
    };
    Asignacioncalusac100aCreatePage.prototype.onSelectChange2a = function (selectedValue) {
        var _this = this;
        this.idunidadacademica2 = selectedValue.split(',');
        //aqui se cambio unidadacademica
        this.authService.getReg2b(this.idtipounidad2[0] + '/' + this.idtipounidad2[0], 'unidadperiodo3as').then(function (result) {
            if (result) {
                var dd = [];
                dd = result;
                if (dd.length > 0) {
                    var aa = result[0]._id + ',' + result[0].nombre;
                    _this.idperiodo2 = aa.split(',');
                    _this.authService.getReg2b(_this.idtipounidad2[0] + '/' + '123' + '/' + _this.idperiodo2[0] + '/' + '123' + '/dias', 'unidadplan4as').then(function (result) {
                        _this.vgrupob = result;
                        var new_test = [{ 'nombre': '' }];
                        new_test[0].nombre = _this.vgrupob[0].nombre;
                        for (var i = 0; i <= _this.vgrupob.length - 1; i++) {
                            var duplicate = false;
                            for (var j = new_test.length - 1; j >= 0; j--) {
                                if (_this.vgrupob[i].nombre == new_test[j].nombre)
                                    duplicate = true;
                            }
                            if (!duplicate)
                                new_test.push(_this.vgrupob[i]);
                        }
                        _this.vgrupob = new_test;
                    }, function (err) {
                        _this.msj.showError3('Error', err.error);
                    });
                }
                else {
                    _this.idperiodo2 = [];
                    // this.msj.showError3('Error','No existe planificación de los salones en esta unidad');
                    // this.unidadacademica=''
                }
            }
        }, function (err) {
            _this.msj.showError3('Error', err.error);
        });
    };
    Asignacioncalusac100aCreatePage.prototype.onSelectChange = function (selectedValue) {
        var _this = this;
        this.idtipounidad2 = selectedValue.split(',');
        this.authService.getReg2b(this.idtipounidad2[0] + '/todosactivofiltro', 'unidadacademica3s').then(function (result) {
            _this.vgrupo2a = result;
        }, function (err) {
            _this.msj.showError3('Error', err.error);
        });
        this.titulo2 = 'una unidad académica';
        this.authService.getReg2b(this.idtipounidad2[0] + '/' + this.idtipounidad2[0] + '/' + 'tipoasignado', 'asignaubicacionas').then(function (result) {
            _this.vgrupo2 = result;
        }, function (err) {
            _this.msj.showError3('Error', err.error);
        });
        this.authService.getReg2b(this.idtipounidad2[0] + '/' + this.idtipounidad2[0] + '/' + 'tipoidioma', 'asignaubicacionas').then(function (result) {
            _this.vgrupo3 = result;
        }, function (err) {
            _this.msj.showError3('Error', err.error);
        });
    };
    Asignacioncalusac100aCreatePage.prototype.onSelectChange2 = function (selectedValue) {
        this.idtipogrupo2 = selectedValue.split(',');
        if (this.tipounidad == undefined || this.tipounidad == '') {
            this.msj.showError3('Importante', 'Seleccione sede. ');
            this.idtipogrupo2 = [];
            this.idtipogrupo = '';
        }
    };
    Asignacioncalusac100aCreatePage.prototype.onSelectChange3 = function (selectedValue) {
        this.ididioma2 = selectedValue.split(',');
        if (this.tipounidad == undefined || this.tipounidad == '') {
            this.msj.showError3('Importante', 'Seleccione sede. ');
            this.ididioma2 = [];
            this.ididioma = '';
        }
    };
    Asignacioncalusac100aCreatePage.prototype.updateProfileImage = function (op) {
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
                        _this.takePhotograph(op);
                    }
                },
                {
                    text: t1,
                    handler: function () {
                        _this.selectImage(op);
                    }
                }
            ]
        });
        actionSheet.present();
    };
    Asignacioncalusac100aCreatePage.prototype.takePhotograph = function (op) {
        var _this = this;
        if (__WEBPACK_IMPORTED_MODULE_7__ionic_native_camera__["a" /* Camera */]['installed']()) {
            this._IMAGE
                .takePhotograph()
                .then(function (image) {
                if (op === 1) {
                    _this.foto1img = image.toString();
                }
                if (op === 2) {
                    _this.foto1imga = image.toString();
                }
                if (op === 3) {
                    _this.foto1imgb = image.toString();
                }
                if (op === 4) {
                    _this.foto1imgc = image.toString();
                }
            })
                .catch(function (err) {
                console.log(err);
            });
        }
        else {
            if (op === 1) {
                this.fileInput.nativeElement.click();
            }
            if (op === 2) {
                this.fileInputa.nativeElement.click();
            }
            if (op === 3) {
                this.fileInputb.nativeElement.click();
            }
            if (op === 4) {
                this.fileInputc.nativeElement.click();
            }
        }
    };
    Asignacioncalusac100aCreatePage.prototype.selectImage = function (op) {
        var _this = this;
        if (__WEBPACK_IMPORTED_MODULE_7__ionic_native_camera__["a" /* Camera */]['installed']()) {
            this._IMAGE
                .selectPhotograph()
                .then(function (image) {
                if (op === 1) {
                    _this.foto1img = image.toString();
                    if (_this.navParams.get("record") == null) {
                        _this.form.controls['imagen'].setValue('nuevo');
                    }
                }
                if (op === 2) {
                    _this.foto1imga = image.toString();
                    if (_this.navParams.get("record") == null) {
                        _this.form.controls['imagena'].setValue('nuevo');
                    }
                }
                if (op === 3) {
                    _this.foto1imgb = image.toString();
                    if (_this.navParams.get("record") == null) {
                        _this.form.controls['imagenb'].setValue('nuevo');
                    }
                }
                if (op === 4) {
                    _this.foto1imgc = image.toString();
                    if (_this.navParams.get("record") == null) {
                        _this.form.controls['imagenc'].setValue('nuevo');
                    }
                }
            })
                .catch(function (err) {
                console.log(err);
            });
        }
        else {
            if (op === 1) {
                this.fileInput.nativeElement.click();
            }
            if (op === 2) {
                this.fileInputa.nativeElement.click();
            }
            if (op === 3) {
                this.fileInputb.nativeElement.click();
            }
            if (op === 4) {
                this.fileInputc.nativeElement.click();
            }
        }
    };
    Asignacioncalusac100aCreatePage.prototype.processWebImage = function (event, op) {
        var _this = this;
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();
            reader.onload = function (readerEvent) {
                if (op === 1) {
                    _this.image = readerEvent.target.result;
                    _this._IMAGE.generateFromImage(_this.image, 400, 400, 1, function (data) {
                        if (op === 1) {
                            _this.foto1img = data;
                            if (_this.navParams.get("record") == null) {
                                _this.form.controls['imagen'].setValue('nuevo');
                            }
                        }
                        if (op === 2) {
                            _this.foto1imga = data;
                            if (_this.navParams.get("record") == null) {
                                _this.form.controls['imagena'].setValue('nuevo');
                            }
                        }
                        if (op === 3) {
                            _this.foto1imgb = data;
                            if (_this.navParams.get("record") == null) {
                                _this.form.controls['imagenb'].setValue('nuevo');
                            }
                        }
                        if (op === 4) {
                            _this.foto1imgc = data;
                            if (_this.navParams.get("record") == null) {
                                _this.form.controls['imagenc'].setValue('nuevo');
                            }
                        }
                    });
                }
                if (op === 2) {
                    _this.imagea = readerEvent.target.result;
                    _this._IMAGE.generateFromImage(_this.imagea, 400, 400, 1, function (data) {
                        if (op === 1) {
                            _this.foto1img = data;
                            if (_this.navParams.get("record") == null) {
                                _this.form.controls['imagen'].setValue('nuevo');
                            }
                        }
                        if (op === 2) {
                            _this.foto1imga = data;
                            if (_this.navParams.get("record") == null) {
                                _this.form.controls['imagena'].setValue('nuevo');
                            }
                        }
                        if (op === 3) {
                            _this.foto1imgb = data;
                            if (_this.navParams.get("record") == null) {
                                _this.form.controls['imagenb'].setValue('nuevo');
                            }
                        }
                        if (op === 4) {
                            _this.foto1imgc = data;
                            if (_this.navParams.get("record") == null) {
                                _this.form.controls['imagenc'].setValue('nuevo');
                            }
                        }
                    });
                }
                if (op === 3) {
                    _this.imageb = readerEvent.target.result;
                    _this._IMAGE.generateFromImage(_this.imageb, 400, 400, 1, function (data) {
                        if (op === 1) {
                            _this.foto1img = data;
                            if (_this.navParams.get("record") == null) {
                                _this.form.controls['imagen'].setValue('nuevo');
                            }
                        }
                        if (op === 2) {
                            _this.foto1imga = data;
                            if (_this.navParams.get("record") == null) {
                                _this.form.controls['imagena'].setValue('nuevo');
                            }
                        }
                        if (op === 3) {
                            _this.foto1imgb = data;
                            if (_this.navParams.get("record") == null) {
                                _this.form.controls['imagenb'].setValue('nuevo');
                            }
                        }
                        if (op === 4) {
                            _this.foto1imgc = data;
                            if (_this.navParams.get("record") == null) {
                                _this.form.controls['imagenc'].setValue('nuevo');
                            }
                        }
                    });
                }
                if (op === 4) {
                    _this.imagec = readerEvent.target.result;
                    _this._IMAGE.generateFromImage(_this.imagec, 400, 400, 1, function (data) {
                        if (op === 1) {
                            _this.foto1img = data;
                            if (_this.navParams.get("record") == null) {
                                _this.form.controls['imagen'].setValue('nuevo');
                            }
                        }
                        if (op === 2) {
                            _this.foto1imga = data;
                            if (_this.navParams.get("record") == null) {
                                _this.form.controls['imagena'].setValue('nuevo');
                            }
                        }
                        if (op === 3) {
                            _this.foto1imgb = data;
                            if (_this.navParams.get("record") == null) {
                                _this.form.controls['imagenb'].setValue('nuevo');
                            }
                        }
                        if (op === 4) {
                            _this.foto1imgc = data;
                            if (_this.navParams.get("record") == null) {
                                _this.form.controls['imagenc'].setValue('nuevo');
                            }
                        }
                    });
                }
            };
            reader.readAsDataURL(event.target.files[0]);
        }
    };
    Asignacioncalusac100aCreatePage.prototype.onSelectChangec = function (selectedValue) {
        var _this = this;
        this.iddia2 = selectedValue;
        this.titulo2 = 'una unidad académica';
        this.authService.getReg2b(this.idtipounidad2[0] + '/' + this.iddia2 + '/' + this.idperiodo2[0] + '/' + '123' + '/horas', 'unidadplan4as').then(function (result) {
            _this.vgrupo2b = result;
        }, function (err) {
            _this.msj.showError3('Error', err.error);
        });
    };
    Asignacioncalusac100aCreatePage.prototype.onSelectChange2c = function (selectedValue) {
        this.idhora2 = selectedValue;
        if (this.iddia == undefined || this.iddia == '') {
            this.msj.showError3('Importante', 'Seleccione sede. ');
            this.idhora2 = '';
            this.idhora = '';
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('fileInput'),
        __metadata("design:type", Object)
    ], Asignacioncalusac100aCreatePage.prototype, "fileInput", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('fileInputa'),
        __metadata("design:type", Object)
    ], Asignacioncalusac100aCreatePage.prototype, "fileInputa", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('fileInputb'),
        __metadata("design:type", Object)
    ], Asignacioncalusac100aCreatePage.prototype, "fileInputb", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('fileInputc'),
        __metadata("design:type", Object)
    ], Asignacioncalusac100aCreatePage.prototype, "fileInputc", void 0);
    Asignacioncalusac100aCreatePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-asignacioncalusac100a-create',template:/*ion-inline-start:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\CALUSAC\UBICACIONES\EXASUFICIENCIA\asignacioncalusac100a-create\asignacioncalusac100a-create.html"*/'<ion-header no-border class="opaque">\n  <ion-navbar  no-border-bottom>\n      <ion-title>Seleccione Horario</ion-title>\n      <ion-buttons start>\n          <button (click)="cancel()" icon-only ion-button padding-right>\n              <ion-icon name="md-close"></ion-icon>\n            </button>\n\n      </ion-buttons>\n\n    </ion-navbar>\n  </ion-header>\n  <ion-content fullscreen>\n    <form     [formGroup]="form"   text-wrap>\n      <ion-list>\n\n\n        <ion-item [hidden]=\'esconde\' margin-bottom text-wrap>\n            <ion-label class="my-label18" color="secondary2"  stacked>Sede</ion-label>\n\n          <ion-select (ionChange)="onSelectChange($event)" [(ngModel)]="tipounidad" [formControl]="form.controls[\'tipounidad\']">\n              <ion-option text-wrap *ngFor="let item of vgrupo" [value]="item._id+\',\'+item.nombre" >{{item.nombre}} </ion-option>\n          </ion-select>\n\n\n       </ion-item>\n       <ion-item class="invalid" *ngIf="!form.controls.tipounidad.valid && (form.controls.tipounidad.dirty || form.controls.tipounidad.touched)" text-wrap>\n        <ion-icon name="warning"></ion-icon>\n       Ingrese un tipo de unidad academica\n       </ion-item>\n\n       <ion-item  [hidden]=\'esconde\' margin-bottom text-wrap>\n\n        <ion-label class="my-label18" color="secondary2"  stacked>Seleccione Curso</ion-label>\n\n        <ion-select  (ionChange)="onSelectChange2a($event)"  [(ngModel)]="unidadacademica" [formControl]="form.controls[\'unidadacademica\']">\n            <ion-option text-wrap *ngFor="let item of vgrupo2a" [value]="item._id+\',\'+item.nombre+\',\'+item.codigo +\',\'+item.ididioma._id+\',\'+item.idtipocurso+\',\'+item.idtipogrupo + \',\'+item.ididioma.codigo">{{item.nombre }}</ion-option>\n        </ion-select>\n\n\n     </ion-item>\n\n     <ion-item class="invalid" *ngIf="!form.controls.unidadacademica.valid && (form.controls.unidadacademica.dirty || form.controls.unidadacademica.touched)" text-wrap>\n      <ion-icon name="warning"></ion-icon>\n     Ingrese un curso valido\n     </ion-item>\n\n\n\n       <ion-item  [hidden]=\'esconde\' margin-bottom text-wrap>\n\n        <ion-label class="my-label18" color="secondary2"  stacked>Tipo </ion-label>\n\n        <ion-select  (ionChange)="onSelectChange2($event)"  [(ngModel)]="idtipogrupo" [formControl]="form.controls[\'idtipogrupo\']">\n            <ion-option text-wrap *ngFor="let item of vgrupo2" [value]="item._id+\',\'+item.nombre">{{item.nombre}}</ion-option>\n        </ion-select>\n\n\n     </ion-item>\n\n         <ion-item class="invalid" *ngIf="!form.controls.idtipogrupo.valid && (form.controls.idtipogrupo.dirty || form.controls.idtipogrupo.touched)" text-wrap>\n           <ion-icon name="warning"></ion-icon>\n           Ingrese un tipo valido\n          </ion-item>\n\n\n          <ion-item  [hidden]=\'esconde\' margin-bottom text-wrap>\n\n            <ion-label class="my-label18" color="secondary2"  stacked>Idioma </ion-label>\n\n            <ion-select  (ionChange)="onSelectChange3($event)"  [(ngModel)]="ididioma" [formControl]="form.controls[\'ididioma\']">\n                <ion-option text-wrap *ngFor="let item of vgrupo3" [value]="item._id+\',\'+item.nombre">{{item.nombre}}</ion-option>\n            </ion-select>\n\n\n         </ion-item>\n\n             <ion-item class="invalid" *ngIf="!form.controls.ididioma.valid && (form.controls.ididioma.dirty || form.controls.tipounidad.touched)" text-wrap>\n               <ion-icon name="warning"></ion-icon>\n               Ingrese un idioma valido\n              </ion-item>\n\n\n\n              <ion-item  [hidden]=\'esconde\' margin-bottom text-wrap>\n                <ion-label class="my-label18" color="secondary2"  stacked>Dia</ion-label>\n\n              <ion-select (ionChange)="onSelectChangec($event)" [(ngModel)]="iddia" [formControl]="form.controls[\'iddia\']">\n                  <ion-option text-wrap *ngFor="let item of vgrupob" [value]="item.nombre" >{{item.nombre | Dafecha0}}</ion-option>\n              </ion-select>\n\n\n              </ion-item>\n              <ion-item class="invalid" *ngIf="!form.controls.iddia.valid && (form.controls.iddia.dirty || form.controls.iddia.touched)" text-wrap>\n              <ion-icon name="warning"></ion-icon>\n              Ingrese un dia valido\n              </ion-item>\n\n              <ion-item  [hidden]=\'esconde\' margin-bottom text-wrap>\n\n                <ion-label class="my-label18" color="secondary2"  stacked>Hora </ion-label>\n\n                <ion-select  (ionChange)="onSelectChange2c($event)"  [(ngModel)]="idhora" [formControl]="form.controls[\'idhora\']">\n                    <ion-option text-wrap *ngFor="let item of vgrupo2b" [value]="item.nombre">{{item.nombre}}</ion-option>\n                </ion-select>\n\n\n              </ion-item>\n\n                 <ion-item class="invalid" *ngIf="!form.controls.idhora.valid && (form.controls.idhora.dirty || form.controls.idhora.touched)" text-wrap>\n                   <ion-icon name="warning"></ion-icon>\n                   Ingrese una hora valido\n                  </ion-item>\n\n\n\n              <ion-item margin-bottom>\n                <ion-label  class="my-label18" color="secondary2">CUI/ PASAPORTE</ion-label>\n                <ion-input\n                   type="text"\n                   [(ngModel)]="identificador" [formControl]="form.controls[\'identificador\']"\n                  ></ion-input>\n             </ion-item>\n             <ion-item class="invalid" *ngIf="!form.controls.identificador.valid && (form.controls.identificador.dirty || form.controls.identificador.touched)" text-wrap>\n               <ion-icon name="warning"></ion-icon>\n               Ingrese un documento de identificación valido\n              </ion-item>\n\n                <ion-item margin-bottom>\n                   <ion-label  class="my-label18" color="secondary2"> Nombres y Apellidos  </ion-label>\n                   <ion-input\n                      type="text"\n                      [(ngModel)]="nombre" [formControl]="form.controls[\'nombre\']"\n                     ></ion-input>\n                </ion-item>\n                <ion-item class="invalid" *ngIf="!form.controls.nombre.valid && (form.controls.nombre.dirty || form.controls.nombre.touched)" text-wrap>\n                  <ion-icon name="warning"></ion-icon>\n                  {{ \'NOMBRET\' | translate }}\n                 </ion-item>\n\n                 <ion-item  >\n                  <!--   <ion-label class="my-label18"  color="danger" stacked> Ingrese Carne CALUSAC ({{vvcarne}})</ion-label>-->\n                 <ion-label class="my-label18"  color="secondary2" stacked>Carné USAC   </ion-label>\n                 <ion-input    [(ngModel)]="carnecalusac1" [formControl]="form.controls[\'carnecalusac1\']" type="number"></ion-input>\n\n               </ion-item>\n\n               <ion-item class="invalid" *ngIf="!form.controls.carnecalusac1.valid && (form.controls.carnecalusac1.dirty || form.controls.carnecalusac1.touched)" text-wrap>\n                   <ion-icon name="warning"></ion-icon>\n                  Ingrese un carne USAC valido\n               </ion-item>\n\n\n\n               <ion-item >\n                <ion-label  class="my-label18"  color="secondary2" > {{ \'TELEFONO\' | translate }}  </ion-label>\n                <ion-input  [(ngModel)]="telefono" [formControl]="form.controls[\'telefono\']" type="number"></ion-input>\n              </ion-item>\n\n              <ion-item class="invalid" *ngIf="!form.controls.telefono.valid\n              && (form.controls.telefono.dirty || form.controls.telefono.touched)" text-wrap>\n                  <ion-icon name="warning"></ion-icon>\n                  {{ \'TELEFONOT\' | translate }}\n              </ion-item>\n\n              <ion-item>\n                <ion-label  class="my-label18"  color="secondary2">Unidad Académica</ion-label>\n                <ion-select  [(ngModel)]="unidad"  [formControl]="form.controls[\'unidad\']">\n                  <ion-option value="FACULTAD DE AGRONOMIA">FACULTAD DE AGRONOMIA</ion-option>\n                  <ion-option value="FACULTAD DE ARQUITECTURA">FACULTAD DE ARQUITECTURA</ion-option>\n                  <ion-option value="FACULTAD DE CIENCIAS ECONOMICAS">FACULTAD DE CIENCIAS ECONOMICAS</ion-option>\n                  <ion-option value="FACULTAD DE CIENCIAS JURIDICAS Y SOCIALES">FACULTAD DE CIENCIAS JURIDICAS Y SOCIALES</ion-option>\n                  <ion-option value="FACULTAD DE CIENCIAS MEDICAS">FACULTAD DE CIENCIAS MEDICAS</ion-option>\n                  <ion-option value="FACULTAD DE CIENCIAS QUIMICAS Y FARMACIA">FACULTAD DE HUMANIDADES</ion-option>\n                  <ion-option value="FACULTAD DE INGENIERIA">FACULTAD DE INGENIERIA</ion-option>\n                  <ion-option value="FACULTAD DE ODONTOLOGIA">FACULTAD DE ODONTOLOGIA</ion-option>\n                  <ion-option value="FACULTAD DE MEDICINA VETERINARIA Y ZOOTECNIA">FACULTAD DE MEDICINA VETERINARIA Y ZOOTECNIA</ion-option>\n                  <ion-option value="CENTRO UNIVERSITARIO DE OCCIDENTE">CENTRO UNIVERSITARIO DE OCCIDENTE</ion-option>\n                  <ion-option value="ESCUELA DE CIENCIAS PSICOLOGICAS">ESCUELA DE CIENCIAS PSICOLOGICAS</ion-option>\n                  <ion-option value="ESCUELA DE HISTORIA">ESCUELA DE HISTORIA</ion-option>\n                  <ion-option value="ESCUELA DE TRABAJO SOCIAL">ESCUELA DE TRABAJO SOCIAL</ion-option>\n                  <ion-option value="ESCUELA DE CIENCIAS DE LA COMUNICACION">ESCUELA DE CIENCIAS DE LA COMUNICACION</ion-option>\n                  <ion-option value="CENTRO UNIVERSITARIO DEL NORTE">CENTRO UNIVERSITARIO DEL NORTE</ion-option>\n                  <ion-option value="CENTRO UNIVERSITARIO DE ORIENTE">CENTRO UNIVERSITARIO DE ORIENTE</ion-option>\n                  <ion-option value="CENTRO UNIVERSITARIO DE NOR-OCCIDENTE">CENTRO UNIVERSITARIO DE NOR-OCCIDENTE</ion-option>\n                  <ion-option value="CENTRO UNIVERSITARIO DEL SUR">CENTRO UNIVERSITARIO DEL SUR</ion-option>\n                  <ion-option value="CENTRO UNIVERSITARIO DEL SUR-OCCIDENTE">CENTRO UNIVERSITARIO DEL SUR-OCCIDENTE</ion-option>\n                  <ion-option value="CENTRO UNIVERSITARIO DEL SUR-ORIENTE">CENTRO UNIVERSITARIO DEL SUR-ORIENTE</ion-option>\n                  <ion-option value="CENTRO DE ESTUDIOS DEL MAR Y ACUICULTURA">CENTRO DE ESTUDIOS DEL MAR Y ACUICULTURA</ion-option>\n                  <ion-option value="CENTRO UNIVERSITARIO DE SAN MARCOS">CENTRO UNIVERSITARIO DE SAN MARCOS</ion-option>\n                  <ion-option value="CENTRO UNIVERSITARIO DEL PETEN">CENTRO UNIVERSITARIO DEL PETEN</ion-option>\n                  <ion-option value="CENTRO UNIVERSITARIO DE IZABAL">CENTRO UNIVERSITARIO DE IZABAL</ion-option>\n                  <ion-option value="ESCUELA DE CIENCIA POLITICA">ESCUELA DE CIENCIA POLITICA</ion-option>\n                  <ion-option value="ESCUELA DE FORMACION DE PROFESORES DE ENSE">ESCUELA DE FORMACION DE PROFESORES DE ENSE</ion-option>\n                  <ion-option value="ESCUELA DE CIENCIAS LINGUISTICAS">ESCUELA DE CIENCIAS LINGUISTICAS</ion-option>\n                  <ion-option value="INSTITUTO TEC. MAYA DE ESTUDIOS SUPERIORES">INSTITUTO TEC. MAYA DE ESTUDIOS SUPERIORES</ion-option>\n                  <ion-option value="CENTRO UNIVERSITARIO DE SANTA ROSA - CUNSARO">CENTRO UNIVERSITARIO DE SANTA ROSA - CUNSARO</ion-option>\n                  <ion-option value="ESCUELA SUPERIOR DE ARTE">ESCUELA SUPERIOR DE ARTE</ion-option>\n                  <ion-option value="CENTRO UNIVERSITARIO DE JUTIAPA">CENTRO UNIVERSITARIO DE JUTIAPA</ion-option>\n                  <ion-option value="CENTRO UNIVERSITARIO DE CHIMALTENANGO">CENTRO UNIVERSITARIO DE CHIMALTENANGO</ion-option>\n                  <ion-option value="INSTITUTO TECNOLOGICO UNIVERSITARIO GUATEMALA SUR">INSTITUTO TECNOLOGICO UNIVERSITARIO GUATEMALA SUR</ion-option>\n                  <ion-option value="CENTRO UNIVERSITARIO DE BAJA VERAPAZ">CENTRO UNIVERSITARIO DE BAJA VERAPAZ</ion-option>\n                  <ion-option value="CENTRO UNIVERSITARIO DE EL PROGRESO">CENTRO UNIVERSITARIO DE EL PROGRESO</ion-option>\n                  <ion-option value="CENTRO UNIVERSITARIO DE TOTONICAPAN">CENTRO UNIVERSITARIO DE TOTONICAPAN</ion-option>\n                  <ion-option value="CENTRO UNIVERSITARIO DEL QUICHE">CENTRO UNIVERSITARIO DEL QUICHE</ion-option>\n                  <ion-option value="CENTRO UNIVERSITARIO DE ZACAPA">CENTRO UNIVERSITARIO DE ZACAPA</ion-option>\n                  <ion-option value="CENTRO UNIVERSITARIO DE SOLOLA">CENTRO UNIVERSITARIO DE SOLOLA</ion-option>\n                  <ion-option value="ESCUELA DE CIENCIAS FISICAS Y MATEMATICAS">ESCUELA DE CIENCIAS FISICAS Y MATEMATICAS</ion-option>\n                  <ion-option value="HUMANIDADES PROGRAMA FID 2015">HUMANIDADES PROGRAMA FID 2015</ion-option>\n                  <ion-option value="HUMANIDADES PROGRAMA FID 2015 P">HUMANIDADES PROGRAMA FID 2015 P</ion-option>\n                  <ion-option value="INSTITUTO DE ADMINISTRACION PUBLICA">INSTITUTO DE ADMINISTRACION PUBLICA</ion-option>\n                  <ion-option value="INSTITUTO DE FEMENINO DE ESTUDIOS SUPERIORES">INSTITUTO DE FEMENINO DE ESTUDIOS SUPERIORES</ion-option>\n                  <ion-option value="ESCUELA DE ENFERMERIA (CONVENIO PREVIO A 2003)">ESCUELA DE ENFERMERIA (CONVENIO PREVIO A 2003)</ion-option>\n                  <ion-option value="ESCUELA DE GOBIERNO">ESCUELA DE GOBIERNO</ion-option>\n\n                </ion-select>\n              </ion-item>\n              <ion-item class="invalid" *ngIf="!form.controls.imagen.valid\n              && (form.controls.imagen.dirty || form.controls.imagen.touched)" text-wrap>\n                  <ion-icon name="warning"></ion-icon>\n                  Ingrese una unidad academica valida\n              </ion-item>\n\n\n             <ion-item-group>\n              <ion-item>\n                 <img  *ngIf="imagec" [src]="imagec"   class="circle-pic"  height="150 px" width="150 px">\n                 <img  *ngIf="!imagec || imagec==\'\'" [src]="pofilel"   class="circle-pic"  height="150 px" width="150 px">\n                 <input   type="hidden"    name="imagenc" [formControl]="form.controls[\'imagenc\']"    [(ngModel)]="imagenc">\n              </ion-item>\n              <ion-item>\n                  <a  ion-button    block  margin-bottom    color="secondary"  (click)="updateProfileImage(4)">                Adjunte  fotografia personal         </a>\n                  <input type="file" accept="image/*" #fileInputc style="visibility: hidden; height: 0px" (change)="processWebImage($event,4)" />\n               </ion-item>\n           </ion-item-group>\n\n\n\n               <ion-item-group>\n                <ion-item>\n                   <img  *ngIf="imagea" [src]="imagea"   class="circle-pic"  height="150 px" width="150 px">\n                   <img  *ngIf="!imagea || imagea==\'\'" [src]="pofilel"   class="circle-pic"  height="150 px" width="150 px">\n                   <input   type="hidden"    name="imagena" [formControl]="form.controls[\'imagena\']"    [(ngModel)]="imagena">\n                </ion-item>\n                <ion-item>\n                    <a  ion-button    block  margin-bottom    color="secondary"  (click)="updateProfileImage(2)">                Adjunte documento de identificación        </a>\n                    <input type="file" accept="image/*" #fileInputa style="visibility: hidden; height: 0px" (change)="processWebImage($event,2)" />\n                 </ion-item>\n             </ion-item-group>\n\n\n\n             <ion-item-group>\n              <ion-item>\n                 <img  *ngIf="imageb" [src]="imageb"   class="circle-pic"  height="150 px" width="150 px">\n                 <img  *ngIf="!imageb || imageb==\'\'" [src]="pofilel"   class="circle-pic"  height="150 px" width="150 px">\n                 <input   type="hidden"    name="imagenb" [formControl]="form.controls[\'imagenb\']"    [(ngModel)]="imagenb">\n              </ion-item>\n              <ion-item>\n                  <a  ion-button    block  margin-bottom    color="secondary"  (click)="updateProfileImage(3)">                Adjunte otro documento de identificación con foto         </a>\n                  <input type="file" accept="image/*" #fileInputb style="visibility: hidden; height: 0px" (change)="processWebImage($event,3)" />\n               </ion-item>\n           </ion-item-group>\n\n\n           <ion-item class="invalid"  text-wrap>\n            ► Aviso legal:\n<br> <br>\n            •	Cualquier conducta fraudulenta será sancionada con la anulación de la prueba, según el Artículo 39 del Reglamento de Evaluación de la Universidad de San Carlos de Guatemala.\n            <br>           <br>\n            •	El estudiante que no se presente puntualmente en la fecha y horario asignados deberá hacer nuevamente el proceso de asignación y pago de Q180.00, habiendo aceptado los siguientes términos:\n            <br>\n\n             <br>\n\n          </ion-item>\n           <ion-item class="invalid"  text-wrap>\n           <ion-checkbox (ionChange)="LoginRemCheck()" color="verdex"   [(ngModel)]="entiendo" [formControl]="form.controls[\'entiendo\']"></ion-checkbox>\n          </ion-item>\n\n          <ion-item class="invalid"  text-wrap>\n          <strong>«Entiendo y acepto que el examen no se me repondrá ni recibiré reembolso de no presentarme puntualmente en la fecha y horario asignados.»</strong>\n        </ion-item>\n\n          <ion-row >\n              <ion-col text-center>\n                <button [disabled]="!form.valid" ion-button block color="secondary" (click)="manageGallery0()" strong>\n                 Asignar\n                </button>\n              </ion-col>\n            </ion-row>\n\n\n\n\n       </ion-list>\n    </form>\n\n\n  </ion-content>\n'/*ion-inline-end:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\CALUSAC\UBICACIONES\EXASUFICIENCIA\asignacioncalusac100a-create\asignacioncalusac100a-create.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__providers_image_image__["a" /* ImageProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3__providers__["d" /* NotificationProvider */], __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["F" /* ViewController */], __WEBPACK_IMPORTED_MODULE_3__providers__["a" /* Auth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */]])
    ], Asignacioncalusac100aCreatePage);
    return Asignacioncalusac100aCreatePage;
}());

//# sourceMappingURL=asignacioncalusac100a-create.js.map

/***/ }),

/***/ 948:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Asignacioncalusac100aCreatePageModule", function() { return Asignacioncalusac100aCreatePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__asignacioncalusac100a_create__ = __webpack_require__(1388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pipes_pipes_module__ = __webpack_require__(445);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var Asignacioncalusac100aCreatePageModule = /** @class */ (function () {
    function Asignacioncalusac100aCreatePageModule() {
    }
    Asignacioncalusac100aCreatePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__asignacioncalusac100a_create__["a" /* Asignacioncalusac100aCreatePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__asignacioncalusac100a_create__["a" /* Asignacioncalusac100aCreatePage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild(), __WEBPACK_IMPORTED_MODULE_4__pipes_pipes_module__["a" /* PipesModule */]
            ],
        })
    ], Asignacioncalusac100aCreatePageModule);
    return Asignacioncalusac100aCreatePageModule;
}());

//# sourceMappingURL=asignacioncalusac100a-create.module.js.map

/***/ })

});
//# sourceMappingURL=245.js.map