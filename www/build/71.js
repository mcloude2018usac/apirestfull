webpackJsonp([71],{

/***/ 1117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsignamanualpcbCreatePageModule", function() { return AsignamanualpcbCreatePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__asignamanualpcb_create__ = __webpack_require__(1573);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AsignamanualpcbCreatePageModule = /** @class */ (function () {
    function AsignamanualpcbCreatePageModule() {
    }
    AsignamanualpcbCreatePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__asignamanualpcb_create__["a" /* AsignamanualpcbCreatePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__asignamanualpcb_create__["a" /* AsignamanualpcbCreatePage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], AsignamanualpcbCreatePageModule);
    return AsignamanualpcbCreatePageModule;
}());

//# sourceMappingURL=asignamanualpcb-create.module.js.map

/***/ }),

/***/ 1573:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AsignamanualpcbCreatePage; });
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






var AsignamanualpcbCreatePage = /** @class */ (function () {
    function AsignamanualpcbCreatePage(alertCtrl, loadingCtrl, storage, msj, translateService, viewCtrl, authService, navCtrl, navParams, _FB, actionSheetCtrl, events) {
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
        this.tiposus = [];
        this.idtipounidad2 = [];
        // public idunidadacademica2		  :any=[];
        this.idperiodo2 = [];
        this.idperiodo22 = [];
        this.idtipounidad22 = [];
        this.idunidadacademica22 = [];
        this.fecha = (new Date()).toISOString();
        this.items = [];
        this.resultado = [];
        this.vgrupo22 = [];
        this.vgrupo222 = [];
        this.vgrupo = [];
        this.vgrupo2 = [];
        this.vgrupo3 = [];
        this.translateService.get('APPX').subscribe(function (value) {
            _this.idempresa = value;
        });
        this.form = this._FB.group({
            tipounidad: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            unidadacademica22: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            tipounidad22: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            no_orientacion: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required])]
        });
        this.titulo2 = 'una unidad académica';
        this.authService.getReg2b('todos', 'tipounidads').then(function (result) {
            _this.vgrupo = result;
            _this.vgrupo22 = result;
        }, function (err) {
            _this.msj.showError3('Error', err.error);
        });
        /*
        this.authService.getReg('5b97f8612e41b2394865a945','unidadacademicas').then((result) => {
          this.vgrupo3=result;
        }, (err) => {
        this.msj.showError3('Error',err.error);
        });
        */
    }
    AsignamanualpcbCreatePage.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get('username').then(function (value) {
            _this.username = value;
        });
        this.storage.get('tiposus').then(function (value) {
            _this.tiposus = value.split(',');
            _this.novp = _this.tiposus[5];
            _this.form.controls['no_orientacion'].setValue(_this.novp);
            if (_this.novp == '') {
                _this.isDisablednit = true;
            }
            else {
                _this.isDisablednit = false;
            }
            _this.focused('a');
        });
    };
    AsignamanualpcbCreatePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.tipounidad = "5b97f1bceb1dab0ab0368cc6,Guatemala (campus)";
        this.idtipounidad2 = this.tipounidad.split(',');
        this.tipounidad22 = "5b97f1bceb1dab0ab0368cc6,Guatemala (campus)";
        this.idtipounidad22 = this.tipounidad.split(',');
        if (this.idtipounidad2[0] == '5b97f1bceb1dab0ab0368cc6') {
            this.authService.getReg(this.idtipounidad2[0], 'unidadacademicas').then(function (result) {
                _this.vgrupo2 = result;
                _this.vgrupo222 = result;
            }, function (err) {
                _this.msj.showError3('Error', err.error);
            });
        }
        else {
            this.msj.showError3('Mensaje', 'La asignación para: ' + this.idtipounidad2[1] + ' se realizará en la Sede del Centro Universitario');
        }
        if (this.navParams.get("record") == null) {
            this.pageTitle = 'Asignación manual PCB';
            this.isDisablednit = true;
        }
        else {
            //  this._ID 				=	this.navParams.data.record._id;
            this.nombre = this.navParams.data.record.nombre;
            this.tipounidad = this.navParams.data.record.tipounidad;
            this.fecha = this.navParams.data.record.fecha;
            this.unidadacademica = this.navParams.data.record.unidadacademica;
            this.no_orientacion = this.navParams.data.record.foto;
            this.periodo = this.navParams.data.record.periodo;
            this.isDisablednit = false;
            this.tipounidad22 = this.navParams.data.record.tipounidad22;
            this.unidadacademica22 = this.navParams.data.record.unidadacademica22;
            this.translateService.get('ITEM_UPDATE_TITLE').subscribe(function (value) {
                _this.pageTitle = value;
            });
        }
    };
    AsignamanualpcbCreatePage.prototype.manageGallery2 = function (loading) {
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
        if (this.otrosid == '') {
            this.msj.showError3('Mensaje', 'No se puede asignar a esta unidad/carrera no tiene planificada ningun salon para asignación en linea');
            loading.dismiss();
            return;
        }
        if (!this.idperiodo2[1]) {
            this.msj.showError3('Mensaje', 'Seleccione la unidad /carrera valida ó Esta unidad/carrera no tiene planificada ningun salon para asignación en linea');
            loading.dismiss();
            return;
        }
        if (!this.form.controls['no_orientacion'].value) {
            this.msj.showError3('Mensaje', 'Ingrese un No. orientación / Carné  valido');
            loading.dismiss();
            return;
        }
        if (this.form.controls['no_orientacion'].value == '') {
            this.msj.showError3('Mensaje', 'Ingrese un No. orientación / Carné  valido');
            loading.dismiss();
            return;
        }
        if (this.navParams.get("record") == null) {
            creat = 'Crea';
        }
        var options = {
            nombre: this.nombre,
            tipounidad: { id: this.idtipounidad2[0], nombre: this.idtipounidad2[1] },
            unidadacademica: { id: this.otrosid, nombre: this.otrosnombre, codigo: this.otroscodigo },
            tipounidad2: { id: this.idtipounidad22[0], nombre: this.idtipounidad22[1] },
            unidadacademica2: { id: this.idunidadacademica22[0], nombre: this.idunidadacademica22[1], codigo: this.idunidadacademica22[2] },
            periodo: { id: this.idperiodo2[0], nombre: this.idperiodo2[1] },
            idestudiante: this.username,
            idinterno: this.username,
            no_orientacion: this.form.controls['no_orientacion'].value,
            resultadopcb: this.resultado,
            tipoasignacion: 'manual',
            bitacora: { idempresa: this.idempresa, idafiliado: '', email: this.username, permiso: creat, accion: creat + ' asigna pcb ' }
        };
        if (this.navParams.get("record") == null) {
            if (options) {
                this.authService.createReg2b('', options, 'asignapcbs').then(function (result) {
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
            /*    if(options){
                  this.authService.createReg(this._ID,options,'asignapcbs').then((result) => {
                     if (!this.form.valid) { return; }
                     console.log(result)
                     this.viewCtrl.dismiss(result);
                 }, (err) => {
                  this.msj.showError3('Error',err.error);
                 });
              }
              */
        }
    };
    AsignamanualpcbCreatePage.prototype.manageGallery = function () {
        var _this = this;
        this.authService.getReglibreSext2(this.no_orientacion + '/resultado', 'estudiantepcb').then(function (data) {
            var rr = [];
            rr = data;
            var encuentra = 0;
            for (var j = 0; j < rr.length; j++) {
                if (rr[j].ANIO_EVALUACION == '2020' && rr[j].NO_OPORTUNIDAD == 4) {
                    encuentra = 1;
                }
            }
            if (encuentra == 1) {
                _this.msj.showError3('Importante', 'Ya aplicaste a la 4ta. fecha PCB, nuevas fechas a partir de mayo 2020.');
                return;
            }
            else {
                _this.manageGallery22a();
            }
        }, function (err) {
            if (err.error == 'Resultados no existen') {
                _this.manageGallery22a();
            }
            else {
                _this.msj.showError3('Mensaje', 'En este momento no es posible realizar asignación , intente mas tarde.');
                return;
            }
        });
    };
    AsignamanualpcbCreatePage.prototype.manageGallery22a = function () {
        var _this = this;
        if (this.username == '') {
            this.msj.showError3('Mensaje', 'Existe un problema con su dispositivo , no existe usuario');
            return;
        }
        if (!this.username) {
            this.msj.showError3('Mensaje', 'Existe un problema con su dispositivo , no existe usuario');
            return;
        }
        if (this.otrosid == '') {
            this.msj.showError3('Mensaje', 'No se puede asignar a esta unidad academica , salones insuficientes');
            return;
        }
        if (!this.idperiodo2[1]) {
            this.msj.showError3('Mensaje', 'Seleccione la unidad academica , debido a que no se pudo cargar el periodo');
            return;
        }
        if (!this.form.controls['no_orientacion'].value) {
            this.msj.showError3('Mensaje', 'Ingrese un No. orientación / Carné  valido');
            return;
        }
        if (this.form.controls['no_orientacion'].value == '') {
            this.msj.showError3('Mensaje', 'Ingrese un No. orientación / Carné  valido');
            return;
        }
        var alert = this.alertCtrl.create({ title: this.nombre + ', ¿Asignar?',
            buttons: [
                { text: 'Si',
                    handler: function () {
                        var loading = _this.loadingCtrl.create({
                            spinner: 'bubbles',
                            content: "Espere un momento,  Realizando  Operación ......"
                        });
                        loading.present();
                        if (_this.nombre == '') {
                            _this.msj.showError3('Error', 'Ingrese un NOV / carné valido');
                            loading.dismiss();
                        }
                        else {
                            _this.authService.getReglibreSext2(_this.form.controls['no_orientacion'].value + '/resultado', 'estudiantepcb').then(function (data1) {
                                var cad = [];
                                var data = [];
                                data = data1;
                                for (var i = 0; i < data.length; i++) {
                                    if (data[i].APROBACION == '1') {
                                        if (data[i].ID_MATERIA == '1') {
                                            cad.push({ idmateria: 'Biologia' });
                                        }
                                        if (data[i].ID_MATERIA == '2') {
                                            cad.push({ idmateria: 'Fisica' });
                                        }
                                        if (data[i].ID_MATERIA == '3') {
                                            cad.push({ idmateria: 'Lenguaje' });
                                        }
                                        if (data[i].ID_MATERIA == '4') {
                                            cad.push({ idmateria: 'Matematica' });
                                        }
                                        if (data[i].ID_MATERIA == '5') {
                                            cad.push({ idmateria: 'Quimica' });
                                        }
                                    }
                                }
                                _this.resultado = cad;
                                _this.manageGallery2(loading);
                            }, function (err) {
                                if (err.error == 'Resultados no existen') {
                                    var cad = [];
                                    _this.resultado = cad;
                                    _this.manageGallery2(loading);
                                }
                                else {
                                    _this.msj.showError3('Error', 'No se puede ralizar asignación en este momento');
                                    loading.dismiss();
                                }
                            });
                        }
                    }
                },
                {
                    text: 'No', handler: function () { }
                }
            ]
        });
        alert.present();
    };
    AsignamanualpcbCreatePage.prototype.cancel2 = function () {
        this.no_orientacion = '';
        this.tipounidad = '';
        this.unidadacademica = '';
        this.idtipounidad2 = '';
        this.otrosid = '';
        this.otroscodigo = '';
        this.otrosnombre = '';
        this.idtipounidad22 = '';
        this.idunidadacademica22 = '';
        this.nombre = '';
        this.items = [];
    };
    AsignamanualpcbCreatePage.prototype.cancel = function () {
        this.viewCtrl.dismiss();
    };
    AsignamanualpcbCreatePage.prototype.done = function () {
        if (!this.form.valid) {
            return;
        }
        //this.viewCtrl.dismiss(this.form.value);   
    };
    AsignamanualpcbCreatePage.prototype.onSelectChange = function (selectedValue) {
        var _this = this;
        this.idtipounidad2 = selectedValue.split(',');
        this.otrosid = '';
        this.otrosnombre = '';
        this.otroscodigo = '';
        if (this.idtipounidad2[4] == 'Inactivo') {
            this.msj.showError3('Importante', 'La 4ta. fecha de inscripción a PCB para ésta Unidad Académica se realizó en noviembre 2019.');
            this.idtipounidad2 = [];
            this.otrosid = '';
            this.otrosnombre = '';
            this.otroscodigo = '';
            this.tipounidad = '';
            return;
        }
        else {
            if (this.idtipounidad2[2] == 'Inactivo') {
                this.msj.showError3('Importante', this.idtipounidad2[3]);
                this.idtipounidad2 = [];
                this.otrosid = '';
                this.otrosnombre = '';
                this.otroscodigo = '';
                this.tipounidad = '';
                return;
            }
            else {
                // if(this.idtipounidad2[0]=='5b97f1bceb1dab0ab0368cc6')    {
                // this.authService.getReg2b(this.idtipounidad2[0],'unidadacademicas').then((result) => {
                this.authService.getReg2b(this.idtipounidad2[0] + '/todosinactivo', 'unidadacademicas').then(function (result) {
                    _this.vgrupo2 = result;
                    if (_this.vgrupo2.length > 0) {
                        _this.otrosid = _this.vgrupo2[0]._id;
                        _this.otrosnombre = _this.vgrupo2[0].nombre;
                        _this.otroscodigo = _this.vgrupo2[0].codigo;
                        _this.codigounidad = _this.vgrupo2[0].codigo;
                        _this.authService.getReg2b(_this.idtipounidad2[0] + '/' + _this.otrosid, 'unidadperiodos').then(function (result) {
                            if (result) {
                                var dd = [];
                                dd = result;
                                if (dd.length > 0) {
                                    var aa = result[0]._id + ',' + result[0].nombre;
                                    _this.idperiodo2 = aa.split(',');
                                }
                                else {
                                    _this.idperiodo2 = [];
                                }
                            }
                        }, function (err) {
                            _this.msj.showError3('Error', err.error);
                        });
                    }
                    else {
                        _this.otrosid = '';
                        _this.otrosnombre = '';
                        _this.otroscodigo = '';
                    }
                }, function (err) {
                    _this.msj.showError3('Error', err.error);
                });
            }
        }
    };
    AsignamanualpcbCreatePage.prototype.onSelectChange22 = function (selectedValue) {
        var _this = this;
        this.idtipounidad22 = selectedValue.split(',');
        this.titulo2 = 'una unidad académica';
        if (this.idtipounidad2[4] == 'Inactivo') {
            this.msj.showError3('Importante', 'La 4ta. fecha de inscripción a PCB para ésta Unidad Académica se realizó en noviembre 2019.');
            this.idtipounidad22 = [];
            this.tipounidad22 = '';
            if (this.unidadacademica22 !== undefined && this.unidadacademica22 !== '') {
                this.idunidadacademica22 = [];
                this.unidadacademica22 = '';
            }
            return;
        }
        else {
            if (this.idtipounidad22[2] == 'Inactivo') {
                this.msj.showError3('Importante', this.idtipounidad22[3]);
                this.idtipounidad22 = [];
                this.tipounidad22 = '';
                if (this.unidadacademica22 !== undefined && this.unidadacademica22 !== '') {
                    this.idunidadacademica22 = [];
                    this.unidadacademica22 = '';
                }
                return;
            }
            else {
                if (this.tipounidad22 == '') { }
                else {
                    if (this.idtipounidad22[0] == '5b97f1bceb1dab0ab0368cc6') {
                        this.titulo2 = 'unidad académica';
                    }
                    else {
                        this.titulo2 = 'una carrera';
                    }
                    this.authService.getReg2b(this.idtipounidad22[0], 'unidadacademicas').then(function (result) {
                        _this.vgrupo22 = result;
                    }, function (err) {
                        _this.msj.showError3('Error', err.error);
                    });
                }
            }
        }
    };
    AsignamanualpcbCreatePage.prototype.onSelectChange222 = function (selectedValue) {
        var _this = this;
        this.idunidadacademica22 = selectedValue.split(',');
        this.codigounidad22 = this.idunidadacademica22[2];
        if (this.tipounidad22 == undefined || this.tipounidad22 == '') {
            this.msj.showError3('Importante', 'Seleccione donde realizará el exámen. ');
            this.idunidadacademica22 = [];
            this.unidadacademica22 = '';
        }
        else {
            if (this.tipounidad22 == '') { }
            else {
                if (this.idunidadacademica22[3] == 'Inactivo') {
                    this.msj.showError3('Importante', 'La 4ta. fecha de inscripción a PCB para ésta Unidad Académica se realizó en noviembre 2019.');
                    this.idunidadacademica22 = [];
                    this.unidadacademica22 = '';
                    //  this.idunidadacademica=''
                    return;
                }
                else {
                    if (this.unidadacademica22 == '') { }
                    else {
                        this.authService.getReg2b(this.idtipounidad22[0] + '/' + this.idunidadacademica22[0], 'unidadperiodos').then(function (result) {
                            if (result) {
                                var dd = [];
                                dd = result;
                                if (dd.length > 0) {
                                    var aa = result[0]._id + ',' + result[0].nombre;
                                    _this.idperiodo22 = aa.split(',');
                                }
                                else {
                                    _this.idperiodo22 = [];
                                }
                            }
                        }, function (err) {
                            _this.msj.showError3('Error', err.error);
                        });
                    }
                }
            }
        }
    };
    AsignamanualpcbCreatePage.prototype.focused = function (selectedValue) {
        var _this = this;
        if (this.no_orientacion != '') {
            var loading_1 = this.loadingCtrl.create({
                spinner: 'bubbles',
                content: "Espere un momento,  Buscando información ......"
            });
            loading_1.present();
            this.items = [];
            this.authService.getReglibreSext2(this.no_orientacion, 'estudiantevt').then(function (data) {
                _this.nombre = data[0].nombre;
                _this.items = [{ nombre1: data[0].nombre }];
                loading_1.dismiss();
            }, function (err) {
                _this.authService.getReglibreSext2(_this.no_orientacion, 'estudianteov').then(function (data) {
                    // this.msj.showError3('Resultado','Proceso OV concluido, revisa tus datos para validar información ');
                    _this.nombre = data[0].nombre1 + ' ' + data[0].nombre2 + ' ' + data[0].apellido1 + ' ' + data[0].apellido2 + ' ';
                    _this.items = data;
                    loading_1.dismiss();
                }, function (err) {
                    _this.authService.getReg('registroest/' + _this.no_orientacion + '/CARNE', 'datosfijos').then(function (data) {
                        //this.authService.getReglibreSext2(this.no_orientacion,'carne').then((data) => {
                        var tt = [];
                        tt = data;
                        if (tt.length > 0) {
                            _this.nombre = data[0].nombre1 + ' ' + data[0].nombre2 + ' ' + data[0].primer_apellido + ' ' + data[0].segundo_apellido;
                            _this.items = [{ nombre1: data[0].nombre1 + ' ' + data[0].nombre2 + ' ' + data[0].primer_apellido + ' ' + data[0].segundo_apellido }];
                            loading_1.dismiss();
                        }
                        else {
                            _this.msj.showError3('Resultado', 'Carnè o OV no encontrado.... ');
                            _this.no_orientacion = '';
                            _this.items = [];
                            loading_1.dismiss();
                        }
                    }, function (err) {
                        _this.msj.showError3('Resultado', 'Carnè o OV no encontrado.... ');
                        _this.no_orientacion = '';
                        _this.items = [];
                        loading_1.dismiss();
                    });
                });
            });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('fileInput'),
        __metadata("design:type", Object)
    ], AsignamanualpcbCreatePage.prototype, "fileInput", void 0);
    AsignamanualpcbCreatePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-asignamanualpcb-create',template:/*ion-inline-start:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\SUN\asignamanualpcb-create\asignamanualpcb-create.html"*/'<ion-header>\n    <ion-navbar>\n      <ion-title>{{pageTitle}}</ion-title>\n      <ion-buttons start>\n          <button (click)="cancel()" icon-only ion-button padding-right>\n              <ion-icon name="md-close"></ion-icon>\n            </button>\n\n      </ion-buttons>\n      \n    </ion-navbar>\n  </ion-header>\n  <ion-content padding>\n    <form     [formGroup]="form"   text-wrap>\n      <ion-list>\n        \n          <ion-item margin-bottom text-wrap>\n              <ion-label class="my-label18" color="secondary2"  stacked>Ingrese un Número de Orientación Vocacional válido/ Carné:</ion-label>\n              <ion-input (focusout)="focused($event)"  [disabled]="!(isDisablednit)"\n              type="number"\n                 [(ngModel)]="no_orientacion" [formControl]="form.controls[\'no_orientacion\']"\n                ></ion-input>\n           </ion-item>\n           <ion-item class="invalid" *ngIf="!form.controls.no_orientacion.valid && (form.controls.no_orientacion.dirty || form.controls.no_orientacion.touched)" text-wrap>\n              <ion-icon name="warning"></ion-icon>\n              Ingrese un Número de Orientación Vocacional valido/ Carné\n             </ion-item>\n\n             <ion-item   *ngFor="let item of items " text-wrap>\n      \n      \n                <h2>Nombre: {{item.nombre1}} {{item.nombre2}}  {{item.apellido1}}  {{item.apellido2}}</h2>\n     \n                <p>Establecimiento: {{item.instituto}}</p>\n                <p>Carrera: {{item.carrera}}</p>\n                <h2>Fecha aplica: {{item.faplica}} </h2>\n           \n         \n          \n      \n      \n        </ion-item>\n          \n        <ion-item-divider color="secondary">\n            <ion-label class="my-label18" color="secondary2" center>\n              Lugar \n            </ion-label>\n          </ion-item-divider>\n\n        <ion-item margin-bottom text-wrap>\n            <ion-label class="my-label18" color="secondary2"  stacked>¿Donde estudiará?</ion-label>\n\n          <ion-select (ionChange)="onSelectChange22($event)" [(ngModel)]="tipounidad22" [formControl]="form.controls[\'tipounidad22\']">\n              <ion-option text-wrap *ngFor="let item of vgrupo" [value]="item._id+\',\'+item.nombre+\',\'+item.estado+\',\'+item.msg+ \',\' + item.estado2">{{item.nombre}} {{item.abreviatura}}</ion-option>\n          </ion-select>  \n            \n\n       </ion-item>\n       <ion-item margin-bottom text-wrap>\n    \n        <ion-label class="my-label18" color="secondary2"  stacked>Seleccione {{titulo2}}?</ion-label>\n\n        <ion-select  (ionChange)="onSelectChange222($event)"  [(ngModel)]="unidadacademica22" [formControl]="form.controls[\'unidadacademica22\']">\n            <ion-option text-wrap *ngFor="let item of vgrupo22" [value]="item._id+\',\'+item.nombre+\',\'+item.codigo+ \',\' + item.estado2">{{item.nombre}}</ion-option>\n        </ion-select>  \n\n\n     </ion-item>\n       <ion-item class="invalid" *ngIf="!form.controls.tipounidad22.valid && (form.controls.tipounidad22.dirty || form.controls.tipounidad22.touched)" text-wrap>\n         <ion-icon name="warning"></ion-icon>\n        Ingrese un tipo de unidad academica\n        </ion-item>\n\n         <ion-item class="invalid" *ngIf="!form.controls.unidadacademica22.valid && (form.controls.unidadacademica22.dirty || form.controls.tipounidad.touched)" text-wrap>\n           <ion-icon name="warning"></ion-icon>\n           Ingrese {{titulo2}} valida\n          </ion-item>\n        \n\n\n          <ion-item-divider color="secondary">\n              <ion-label class="my-label18" color="secondary2" center>\n                Lugar\n              </ion-label>\n            </ion-item-divider>\n\n                \n        <ion-item margin-bottom text-wrap>\n            <ion-label class="my-label18" color="secondary2"  stacked>¿Donde realizará el exámen?</ion-label>\n\n          <ion-select (ionChange)="onSelectChange($event)" [(ngModel)]="tipounidad" [formControl]="form.controls[\'tipounidad\']">\n              <ion-option text-wrap *ngFor="let item of vgrupo" [value]="item._id+\',\'+item.nombre+\',\'+item.estado+\',\'+item.msg+ \',\' + item.estado2">{{item.nombre}} {{item.abreviatura}}</ion-option>\n          </ion-select>  \n         \n\n       </ion-item>\n   \n       <ion-item class="invalid" *ngIf="!form.controls.tipounidad.valid && (form.controls.tipounidad.dirty || form.controls.tipounidad.touched)" text-wrap>\n         <ion-icon name="warning"></ion-icon>\n        Ingrese un tipo de unidad academica\n        </ion-item>\n\n       \n        \n\n\n          <ion-row >\n              <ion-col text-center>\n                <button  ion-button block [disabled]="!form.valid" color="secondary" (click)="manageGallery()" strong>\n                 Asignar\n                </button>\n              </ion-col>\n            </ion-row>\n         \n  \n  \n        \n       </ion-list>\n    </form>\n  \n  \n  </ion-content>'/*ion-inline-end:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\SUN\asignamanualpcb-create\asignamanualpcb-create.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3__providers__["d" /* NotificationProvider */], __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["F" /* ViewController */], __WEBPACK_IMPORTED_MODULE_3__providers__["a" /* Auth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */]])
    ], AsignamanualpcbCreatePage);
    return AsignamanualpcbCreatePage;
}());

//# sourceMappingURL=asignamanualpcb-create.js.map

/***/ })

});
//# sourceMappingURL=71.js.map