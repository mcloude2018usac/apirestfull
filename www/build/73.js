webpackJsonp([73],{

/***/ 1114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsignacionpcbCreatePageModule", function() { return AsignacionpcbCreatePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__asignacionpcb_create__ = __webpack_require__(1570);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AsignacionpcbCreatePageModule = /** @class */ (function () {
    function AsignacionpcbCreatePageModule() {
    }
    AsignacionpcbCreatePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__asignacionpcb_create__["a" /* AsignacionpcbCreatePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__asignacionpcb_create__["a" /* AsignacionpcbCreatePage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], AsignacionpcbCreatePageModule);
    return AsignacionpcbCreatePageModule;
}());

//# sourceMappingURL=asignacionpcb-create.module.js.map

/***/ }),

/***/ 1570:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AsignacionpcbCreatePage; });
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






var AsignacionpcbCreatePage = /** @class */ (function () {
    function AsignacionpcbCreatePage(alertCtrl, loadingCtrl, storage, msj, translateService, viewCtrl, authService, navCtrl, navParams, _FB, actionSheetCtrl, events) {
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
        this.idunidadacademica2 = [];
        this.idperiodo2 = [];
        this.personalid = "";
        this.items = [];
        this.resultado = [];
        this.vgrupo = [];
        this.vgrupo2 = [];
        this.vgrupo3 = [];
        this.localDate = new Date();
        this.initDate = new Date();
        this.initDate2 = new Date(2015, 1, 1);
        this.disabledDates = [new Date(2017, 7, 14)];
        this.maxDate = new Date(new Date().setDate(new Date().getDate() + 30));
        this.min = new Date();
        // Define form validation - VERY basic!
        this.form = this._FB.group({
            tipounidad: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            unidadacademica: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            fechaini: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            no_orientacion: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required])]
        });
        this.titulo2 = 'una unidad académica';
        this.translateService.get('APPX').subscribe(function (value) {
            _this.idempresa = value;
        });
        /*
        this.authService.getReg('5b97f8612e41b2394865a945','unidadacademicas').then((result) => {
          this.vgrupo3=result;
        }, (err) => {
        this.msj.showError3('Error',err.error);
        });
        */
    }
    AsignacionpcbCreatePage.prototype.Log = function (stuff) {
        console.log(stuff);
    };
    AsignacionpcbCreatePage.prototype.event = function (data) {
        this.localDate = data;
    };
    AsignacionpcbCreatePage.prototype.setDate = function (date) {
        console.log(date);
        this.initDate = date;
    };
    AsignacionpcbCreatePage.prototype.closeDatepicker = function () {
        // this.datepickerDirective.dismiss();
    };
    AsignacionpcbCreatePage.prototype.ngOnInit = function () {
        var _this = this;
        this.novp = this.navParams.data.nov;
        this.storage.get('username').then(function (value) {
            _this.username = value;
            _this.storage.get('tiposus').then(function (value) {
                _this.tiposus = value.split(',');
                _this.novp = _this.tiposus[5];
                _this.personalid = _this.tiposus[3];
                _this.cui = _this.tiposus[2];
                _this.no_orientacion = _this.novp;
                if (_this.tiposus[6] == 'user') {
                    if (_this.tiposus[5] == '' || _this.tiposus[5] == undefined) {
                        var prompt_1 = _this.alertCtrl.create({
                            title: ' Ingrese CARNE / NOV',
                            message: 'Ingrese CARNE / NOV para poder actualizar su perfil y gestionar esta acción',
                            inputs: [
                                {
                                    name: 'NOV'
                                }
                            ],
                            buttons: [
                                {
                                    text: 'Cancelar',
                                    handler: function () {
                                        _this.navCtrl.pop();
                                    }
                                },
                                {
                                    text: 'Buscar',
                                    handler: function (todo) {
                                        _this.authService.validacarnenov(todo.NOV).then(function (data2) {
                                            var vec = (data2);
                                            var cad = vec.split('°');
                                            _this.nombre = '';
                                            var msj = '';
                                            if (cad[0] == 'CARNE') {
                                                _this.nombre = cad[1];
                                                if (cad[2]) {
                                                    _this.cui = cad[2];
                                                }
                                                msj = 'CARNE: ' + todo.NOV + '<p>' + 'Nombre: ' + _this.nombre + '<p>Cui: ' + _this.cui + '<p>¿Desea registrar esta información a su cuenta?';
                                            }
                                            else {
                                                _this.nombre = cad[1];
                                                msj = 'NOV: ' + todo.NOV + '<p>' + 'Nombre: ' + _this.nombre + '<p>¿Desea registrar esta información a su cuenta?';
                                            }
                                            var alert = _this.alertCtrl.create({ title: msj,
                                                buttons: [
                                                    { text: 'Si',
                                                        handler: function () {
                                                            //ACTUALIZAR NOMBRE Y NOV/CARNET Y NOMBRE EN DB
                                                            var credentials = {
                                                                _id: _this.personalid,
                                                                nombre: _this.nombre,
                                                                cui: _this.cui,
                                                                nov: todo.NOV,
                                                                bitacora: { idempresa: _this.idempresa, idafiliado: '', email: _this.username, permiso: 'Actualiza', accion: 'Actualiza nov y cui perfil' }
                                                            };
                                                            _this.authService.createReg('actualizanov', credentials, 'personals').then(function (result) {
                                                                _this.storage.set('tiposus', (_this.tiposus[0] + ',' + _this.tiposus[1] + ',' + _this.cui + ',' + _this.tiposus[3] + ',' + _this.nombre + ',' + todo.NOV + ',' + _this.tiposus[6] + ',' + _this.tiposus[7] + ',' + _this.tiposus[8] + ',' + _this.tiposus[9]));
                                                                _this.novp = todo.NOV;
                                                                _this.form.controls['no_orientacion'].setValue(_this.novp);
                                                                _this.focused('a');
                                                            }, function (err) {
                                                                _this.msj.showError3('Error', 'Perfil no valido, comuniquese con el administrador');
                                                                _this.isDisablednit = true;
                                                                _this.navCtrl.pop();
                                                            });
                                                        }
                                                    },
                                                    {
                                                        text: 'No', handler: function () { }
                                                    }
                                                ]
                                            });
                                            alert.present();
                                        }, function (err) {
                                            _this.msj.showError3('Error', err);
                                        });
                                    }
                                }
                            ]
                        });
                        prompt_1.present();
                    }
                    else {
                        _this.isDisablednit = false;
                        _this.form.controls['no_orientacion'].setValue(_this.novp);
                        _this.focused('a');
                    }
                }
                else {
                    _this.authService.getReglibreSext2(_this.no_orientacion + '/resultado', 'estudiantepcb').then(function (data) {
                        // var rr:any=[];
                        //   rr=data;
                        _this.isDisablednit = true;
                    }, function (err) {
                        _this.msj.showError3('Error', 'En este momento no se puede realizar la asignación');
                        _this.isDisablednit = true;
                        _this.navCtrl.pop();
                    });
                }
            });
        });
    };
    AsignacionpcbCreatePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.authService.getReg2b('todos1000', 'tipounidads').then(function (result) {
            _this.vgrupo = result;
        }, function (err) {
            _this.msj.showError3('Error', err.error);
        });
        if (this.navParams.get("record") == null) {
            this.pageTitle = 'Asignación PCB';
            //  this.isDisablednit =true
        }
        else {
            //  this._ID 				=	this.navParams.data.record._id;
            this.nombre = this.navParams.data.record.nombre;
            this.tipounidad = this.navParams.data.record.tipounidad;
            this.fecha = this.navParams.data.record.fecha;
            this.unidadacademica = this.navParams.data.record.unidadacademica;
            this.no_orientacion = this.navParams.data.record.foto;
            this.periodo = this.navParams.data.record.periodo;
            //      this.isDisablednit =false
            this.translateService.get('ITEM_UPDATE_TITLE').subscribe(function (value) {
                _this.pageTitle = value;
            });
        }
    };
    AsignacionpcbCreatePage.prototype.manageGallery2 = function (loading) {
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
        if (!this.form.controls['no_orientacion'].value) {
            this.msj.showError3('Mensaje', 'Ingrese un No. orientación / Carné  valido');
            loading.dismiss();
            return;
        }
        if (this.form.controls['no_orientacion'].value == undefined) {
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
            unidadacademica: { id: this.idunidadacademica2[0], nombre: this.idunidadacademica2[1], codigo: this.codigounidad },
            periodo: { id: this.idperiodo2[0], nombre: this.idperiodo2[1] },
            fechaini: this.form.controls['fechaini'].value,
            idestudiante: this.username,
            idinterno: this.username,
            no_orientacion: this.form.controls['no_orientacion'].value,
            resultadopcb: this.resultado,
            tipoasignacion: 'enlinea',
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
                    _this.msj.showError3('Error', err.error);
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
    AsignacionpcbCreatePage.prototype.manageGallery = function () {
        var _this = this;
        if (this.nombre == 'undefined' || this.nombre == '' || this.nombre == undefined) {
            this.nombre = '';
            this.no_orientacion = '';
            this.msj.showError3('Error', 'Ingrese un CARNE / NOV valido.');
            return;
        }
        this.authService.getReglibreSext2(this.no_orientacion + '/resultado', 'estudiantepcb').then(function (data) {
            _this.manageGallery22a();
            //  for(var j=0;j<rr.length;j++)       { if(rr[j].ANIO_EVALUACION=='2020' && rr[j].NO_OPORTUNIDAD==4)                    {        encuentra=1;               }                 }
            /*
                  if(encuentra==1)
                  {
                   this.msj.showError3('Importante','Ya aplicaste a la 4ta. fecha PCB, nuevas fechas a partir de mayo 2020.');
                  return;
            
                  }
                  else{
            
                    this.manageGallery22a();
                  }
            
            */
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
    AsignacionpcbCreatePage.prototype.manageGallery22a = function () {
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
            this.idunidadacademica2 = [];
            this.unidadacademica = '';
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
        var uut = this.tipounidad.split(',');
        var alert = this.alertCtrl.create({ title: this.nombre + ', está seguro de realizar asignación PCB para: ' + uut[1] + ' y Unidad Académica: ' + this.idunidadacademica2[1] + ' ?',
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
                                //  this.authService.getRegS2(this.form.controls['no_orientacion'].value,'estudiantepcb').then((data1) => {
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
                                //  this.resultado=[]
                                //   this.manageGallery2(loading)
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
    AsignacionpcbCreatePage.prototype.cancel2 = function () {
        this.no_orientacion = '';
        this.tipounidad = '';
        this.unidadacademica = '';
        this.idtipounidad2 = [];
        this.idunidadacademica2 = '';
        this.nombre = '';
        this.items = [];
    };
    AsignacionpcbCreatePage.prototype.cancel = function () {
        this.viewCtrl.dismiss();
    };
    AsignacionpcbCreatePage.prototype.done = function () {
        if (!this.form.valid) {
            return;
        }
        //this.viewCtrl.dismiss(this.form.value);
    };
    AsignacionpcbCreatePage.prototype.onSelectChange = function (selectedValue) {
        var _this = this;
        this.idtipounidad2 = selectedValue.split(',');
        this.titulo2 = 'una unidad académica';
        if (this.idtipounidad2[4] == 'Inactivo') {
            this.msj.showError3('Importante', 'La 4ta. fecha de inscripción a PCB para ésta Unidad Académica se realizó en noviembre 2019.');
            this.idtipounidad2 = [];
            this.tipounidad = '';
            if (this.unidadacademica !== undefined && this.unidadacademica !== '') {
                this.idunidadacademica2 = [];
                this.unidadacademica = '';
            }
            // return;
        }
        else {
            if (this.idtipounidad2[2] == 'Inactivo') {
                this.msj.showError3('Importante', this.idtipounidad2[3]);
                this.idtipounidad2 = [];
                this.tipounidad = '';
                if (this.unidadacademica !== undefined && this.unidadacademica !== '') {
                    this.idunidadacademica2 = [];
                    this.unidadacademica = '';
                }
            }
            else {
                if (this.tipounidad == '') {
                }
                else {
                    if (this.idtipounidad2[0] == '5b97f1bceb1dab0ab0368cc6') {
                        this.titulo2 = 'unidad académica';
                    }
                    else {
                        this.titulo2 = 'una carrera';
                    }
                    this.authService.getReg2b(this.idtipounidad2[0], 'unidadacademicas').then(function (result) {
                        _this.vgrupo2 = result;
                    }, function (err) {
                        _this.msj.showError3('Error', err.error);
                    });
                }
            }
        }
    };
    AsignacionpcbCreatePage.prototype.onSelectChange2 = function (selectedValue) {
        var _this = this;
        this.idunidadacademica2 = selectedValue.split(',');
        if (this.tipounidad == undefined || this.tipounidad == '') {
            this.msj.showError3('Importante', 'Seleccione donde realizará el exámen. ');
            this.idunidadacademica2 = [];
            this.unidadacademica = '';
        }
        else {
            if (this.tipounidad == '') {
            }
            else {
                if (this.idunidadacademica2[3] == 'Inactivo') {
                    this.msj.showError3('Importante', 'La 4ta. fecha de inscripción a PCB para ésta Unidad Académica ,se realizó en noviembre 2019.');
                    this.idunidadacademica2 = [];
                    this.unidadacademica = '';
                }
                else {
                    if (this.unidadacademica == '') { }
                    else {
                        this.codigounidad = this.idunidadacademica2[2];
                        this.authService.getReg2b(this.idtipounidad2[0] + '/' + this.idunidadacademica2[0], 'unidadperiodos').then(function (result) {
                            if (result) {
                                var dd = [];
                                dd = result;
                                if (dd.length > 0) {
                                    var aa = result[0]._id + ',' + result[0].nombre;
                                    _this.idperiodo2 = aa.split(',');
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
                    }
                }
            }
        }
    };
    AsignacionpcbCreatePage.prototype.focused = function (selectedValue) {
        var _this = this;
        if (this.no_orientacion != '') {
            var loading_1 = this.loadingCtrl.create({
                spinner: 'bubbles',
                content: "Espere un momento,  Buscando información ......"
            });
            loading_1.present();
            this.items = [];
            this.authService.validacarnenov(this.no_orientacion).then(function (data2) {
                var vec = (data2);
                var cad = vec.split('°');
                if (cad[1] == 'undefined' || cad[1] == '') {
                    _this.no_orientacion = '';
                    _this.nombre = '';
                    _this.items = [];
                    _this.msj.showError3('Error', 'No existe NOV / CARNÉ');
                    loading_1.dismiss();
                }
                else {
                    _this.nombre = cad[1];
                    _this.items = [{ nombre1: cad[1] }];
                    loading_1.dismiss();
                }
            }, function (err) {
                _this.no_orientacion = '';
                _this.items = [];
                _this.nombre = '';
                _this.msj.showError3('Error', 'No existe NOV / CARNÉ');
                loading_1.dismiss();
            });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('fileInput'),
        __metadata("design:type", Object)
    ], AsignacionpcbCreatePage.prototype, "fileInput", void 0);
    AsignacionpcbCreatePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-asignacionpcb-create',template:/*ion-inline-start:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\SUN\asignacionpcb-create\asignacionpcb-create.html"*/'<ion-header no-border class="opaque">\n  <ion-navbar  no-border-bottom>\n      <ion-title>{{pageTitle}}</ion-title>\n      <ion-buttons start>\n          <button (click)="cancel()" icon-only ion-button padding-right>\n              <ion-icon name="md-close"></ion-icon>\n            </button>\n\n      </ion-buttons>\n\n    </ion-navbar>\n  </ion-header>\n  <ion-content fullscreen>\n    <form     [formGroup]="form"   text-wrap>\n      <ion-list>\n\n          <ion-item margin-bottom text-wrap>\n              <ion-label class="my-label18" color="secondary2"  stacked>Ingrese un Número de Orientación Vocacional válido/ Carné:</ion-label>\n              <ion-input (focusout)="focused($event)"  [disabled]="!(isDisablednit)"\n              type="number"\n                 [(ngModel)]="no_orientacion" [formControl]="form.controls[\'no_orientacion\']"\n                ></ion-input>\n           </ion-item>\n           <ion-item class="invalid" *ngIf="!form.controls.no_orientacion.valid && (form.controls.no_orientacion.dirty || form.controls.no_orientacion.touched)" text-wrap>\n              <ion-icon name="warning"></ion-icon>\n              Ingrese un Número de Orientación Vocacional válido/ Carné\n             </ion-item>\n\n             <ion-item   *ngFor="let item of items " text-wrap>\n\n\n                <h2>Nombre: {{item.nombre1}} {{item.nombre2}}  {{item.apellido1}}  {{item.apellido2}}</h2>\n\n\n\n\n\n        </ion-item>\n      \n\n\n\n\n        <ion-item margin-bottom text-wrap>\n            <ion-label class="my-label18" color="secondary2"  stacked>Donde va a estudiar?</ion-label>\n\n          <ion-select (ionChange)="onSelectChange($event)" [(ngModel)]="tipounidad" [formControl]="form.controls[\'tipounidad\']">\n              <ion-option text-wrap *ngFor="let item of vgrupo" [value]="item._id+\',\'+item.nombre+\',\'+item.estado+\',\'+item.msg + \',\' + item.estado2" >{{item.nombre}} {{item.abreviatura}}</ion-option>\n          </ion-select>\n\n\n       </ion-item>\n       <ion-item margin-bottom text-wrap>\n\n        <ion-label class="my-label18" color="secondary2"  stacked>Seleccione Unidad Académica</ion-label>\n\n        <ion-select  (ionChange)="onSelectChange2($event)"  [(ngModel)]="unidadacademica" [formControl]="form.controls[\'unidadacademica\']">\n            <ion-option text-wrap *ngFor="let item of vgrupo2" [value]="item._id+\',\'+item.nombre+\',\'+item.codigo + \',\' + item.estado2">{{item.nombre}}</ion-option>\n        </ion-select>\n\n\n     </ion-item>\n       <ion-item class="invalid" *ngIf="!form.controls.tipounidad.valid && (form.controls.tipounidad.dirty || form.controls.tipounidad.touched)" text-wrap>\n         <ion-icon name="warning"></ion-icon>\n        Ingrese donde va a estudiar\n        </ion-item>\n\n         <ion-item class="invalid" *ngIf="!form.controls.unidadacademica.valid && (form.controls.unidadacademica.dirty || form.controls.tipounidad.touched)" text-wrap>\n           <ion-icon name="warning"></ion-icon>\n           Ingrese una Unidad Académica valida\n          </ion-item>\n\n          <ion-item margin-bottom>\n            <ion-label class="my-label18" color="secondary2"  stacked>Ingresa tu Fecha Nacimiento</ion-label>\n            <ion-datetime displayFormat="DD/MM/YYYY"\n            [formControl]="form.controls[\'fechaini\']" [(ngModel)]="fechaini"></ion-datetime>\n          </ion-item>\n          <ion-item class="invalid" *ngIf="!form.controls.fechaini.valid && (form.controls.fechaini.dirty || form.controls.fechaini.touched)" text-wrap>\n            <ion-icon name="warning"></ion-icon>\n           Ingrese una fecha de nacimiento valida\n          </ion-item>\n\n          <ion-row >\n              <ion-col text-center>\n                <button [disabled]="!form.valid" ion-button block color="secondary" (click)="manageGallery()" strong>\n                 Asignar\n                </button>\n              </ion-col>\n            </ion-row>\n\n\n\n\n       </ion-list>\n    </form>\n\n\n  </ion-content>\n'/*ion-inline-end:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\SUN\asignacionpcb-create\asignacionpcb-create.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3__providers__["d" /* NotificationProvider */], __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["F" /* ViewController */], __WEBPACK_IMPORTED_MODULE_3__providers__["a" /* Auth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */]])
    ], AsignacionpcbCreatePage);
    return AsignacionpcbCreatePage;
}());

//# sourceMappingURL=asignacionpcb-create.js.map

/***/ })

});
//# sourceMappingURL=73.js.map