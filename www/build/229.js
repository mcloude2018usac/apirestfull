webpackJsonp([229],{

/***/ 1359:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Asignacioncalusac4CreatePage; });
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








var Asignacioncalusac4CreatePage = /** @class */ (function () {
    function Asignacioncalusac4CreatePage(_IMAGE, alertCtrl, loadingCtrl, storage, msj, translateService, viewCtrl, authService, navCtrl, navParams, _FB, actionSheetCtrl, events) {
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
        this.fecha_nac = (new Date()).toISOString();
        this.idjornada2 = [];
        this.vjornada = [];
        this.vvcarne = '';
        this.pofilel = './assets/img/photo256.png';
        this.sexos = ['Masculino', 'Femenino'];
        this.nacademicos = ['Primaria', 'Secundaria', 'Diversificado', 'Título Universitario'];
        this.tiposus = [];
        this.idtipounidad2 = [];
        this.idunidadacademica2 = [];
        this.idpago2 = [];
        this.vvalidanivel = [];
        this.sinivel = '0';
        this.idperiodo2 = [];
        this.fecha = (new Date()).toISOString();
        this.dcui = false;
        this.dfecha_nac = false;
        this.dnopasaporte = false;
        this.dnombre = false;
        this.ddireccion = false;
        this.dtelefono = false;
        this.dcorreo = false;
        this.NDPI = 'DPI';
        this.comprobantenivel = false;
        this.comprobanteidentificador = false;
        this.comprobantetrabcui = false;
        this.datosobligatorios = true;
        this.dnopasaportev = true;
        this.didentificadorv = true;
        this.dcuiv = true;
        this.ddependenciav = true;
        this.generales = true;
        this.carnev = false;
        this.carnev2 = false;
        this.items = [];
        this.dataxx = [];
        this.resultado = [];
        this.vgrupo = [];
        this.vgrupo2 = [];
        this.vnivel = [];
        this.imagen = './assets/img/photo256.png';
        this.imagen2 = './assets/img/photo256.png';
        this.imagen3 = './assets/img/photo256.png';
        this.imagen4 = './assets/img/photo256.png';
        this.vpago = [];
        this.vhorario = [];
        this.vdia = [];
        this.vprofesor = [];
        this.vgrupo3 = [];
        this.fotia = './assets/img/photo256.png';
        this.image = './assets/img/photo256.png';
        this.image2 = './assets/img/photo256.png';
        this.image3 = './assets/img/photo256.png';
        this.image4 = './assets/img/photo256.png';
        this.translateService.get('APPX').subscribe(function (value) {
            _this.idempresa = value;
        });
        this.form = this._FB.group({
            tipounidad: [''],
            unidadacademica: [''],
            nombre: [''],
            cui: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].maxLength(13), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].pattern(/^\d{13}$/), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required])],
            direccion: [''],
            fotot: [''],
            telefono: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].maxLength(8), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].pattern(/^\d{8}$/), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required])],
            nopasaporte: [''],
            carnecalusac1: [''],
            sexo: [''],
            tipopago: [''],
            jornada: [''],
            horario: [''],
            dia: [''],
            profesor: [''],
            imagen: [''],
            imagen2: [''],
            imagen3: [''],
            imagen4: [''],
            unidad: [''],
            fecha_nac: [''],
            identificador: [''],
            correo: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].maxLength(50), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required])],
            nivelacademico: [''],
            dependencia: ['']
        });
        this.titulo2 = 'una unidad académica';
        this.authService.getReg2b('todos', 'tipounidad3s').then(function (result) {
            _this.vgrupo = result;
        }, function (err) {
            _this.msj.showError3('Error', err.error);
        });
    }
    Asignacioncalusac4CreatePage.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get('username').then(function (value) {
            _this.username = value;
        });
        this.storage.get('tiposus').then(function (value) {
            _this.tiposus = value.split(',');
            _this.novp = _this.tiposus[5];
            _this.fotia = _this.tiposus[9] + _this.tiposus[10];
            //this.image2=this.fotia
            // this.imagen2=this.fotia
            //   this.pofilel=this.fotia
            //    this.form.controls['no_orientacion'].setValue(this.novp);
            if (_this.novp == '') {
                _this.isDisablednit = true;
            }
            else {
                _this.isDisablednit = false;
            }
            //   this.focused('a')
        });
    };
    Asignacioncalusac4CreatePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.dataxx = this.navParams.data.datax;
        this.titulo2 = 'Actualiza Asignación ' + this.navParams.data.op;
        this.datosobligatorios = true;
        this.dataxx = this.navParams.data.record;
        this.rechazo = this.navParams.data.record.ultrechazo;
        this.fecha_nac = this.navParams.data.record.fechanac;
        this.nivelacademico = this.navParams.data.record.nivelacademico;
        this.sexo = this.navParams.data.record.sexo;
        this.dependencia = this.navParams.data.record.dependencia;
        this.nopasaporte = this.navParams.data.record.nopasaporte;
        this.codpersonal = this.navParams.data.record.codpersonal;
        this.nidentificador = this.navParams.data.record.nidentidicador;
        this.nidentificador2 = this.navParams.data.record.nidentificador;
        this.cui = this.navParams.data.record.cui;
        this.carnecalusac = this.navParams.data.record.carnecalusac;
        this.carnecalusac1 = this.navParams.data.record.carnecalusac;
        this.direccion = this.navParams.data.record.direccion;
        this.telefono = this.navParams.data.record.telefono;
        this.correo = this.navParams.data.record.correo;
        //this.monto='120'
        this.nombre = this.navParams.data.record.nombre;
        this.comprobantetrabcui = false;
        this.comprobanteidentificador = false;
        this.comprobantenivel = false;
        if (this.navParams.data.record.tipoa == 'Estudiante') {
            if (Number(this.navParams.data.record.nivel.codigo) > 1) {
                this.comprobantenivel = true;
            }
            this.comprobanteidentificador = true;
            // this.comprobantetrabcui=true
        }
        if (this.navParams.data.record.tipoa == 'Trabajador') {
            if (Number(this.navParams.data.record.nivel.codigo) > 1) {
                this.comprobantenivel = true;
            }
            this.comprobanteidentificador = true;
            this.comprobantetrabcui = true;
        }
        if (this.navParams.data.record.tipoa == 'Hijo Trabajador Adolescente') {
            if (Number(this.navParams.data.record.nivel.codigo) > 1) {
                this.comprobantenivel = true;
            }
            this.comprobanteidentificador = true;
            this.comprobantetrabcui = true;
        }
        if (this.navParams.data.record.tipoa == 'Hijo Trabajador Adulto') {
            if (Number(this.navParams.data.record.nivel.codigo) > 1) {
                this.comprobantenivel = true;
            }
            this.comprobanteidentificador = true;
            this.comprobantetrabcui = true;
        }
        if (this.navParams.data.record.tipoa == 'Población') {
            if (Number(this.navParams.data.record.nivel.codigo) > 1) {
                this.comprobantenivel = true;
            }
            this.comprobanteidentificador = true;
            //  this.comprobantetrabcui=true
        }
        if (this.navParams.data.record.tipoa == 'Adolescente') {
            if (Number(this.navParams.data.record.nivel.codigo) > 1) {
                this.comprobantenivel = true;
            }
            this.comprobanteidentificador = true;
            // this.comprobantetrabcui=true
        }
        if (this.navParams.data.record.tipoa == 'Extranjero' || this.navParams.data.record.tipoa == 'Extranjerocentroamericano') {
            if (Number(this.navParams.data.record.nivel.codigo) > 1) {
                this.comprobantenivel = true;
            }
            this.comprobanteidentificador = true;
            //this.comprobantetrabcui=true
        }
        this.authService.getReg2b(this.navParams.data.record._id + '/' + '1/todosautorizaxid', 'asignacalusacs').then(function (data) {
            var aa = [];
            aa = data;
            var bb = [];
            bb = aa.tt2;
            _this.items[0] = aa.tt;
            _this.imagen = bb.foto1;
            _this.image = bb.foto1;
            _this.image4 = bb.foto4;
            _this.imagen4 = bb.foto4;
            _this.image3 = bb.foto3;
            _this.imagen3 = bb.foto3;
            _this.image2 = bb.foto2;
            _this.imagen2 = bb.foto2;
            if (_this.imagen2 !== './assets/img/photo256.png') { }
            /*
            if(  this.imagen3!=='./assets/img/photo256.png'){ this.comprobanteidentificador=true  }
            
            
            
            if(  this.imagen4!=='./assets/img/photo256.png'){  this.comprobantetrabcui=true}
            
            
            
            if(  this.imagen!=='./assets/img/photo256.png'){
              this.comprobantenivel=true
            
            
            }
            */
        }, function (err) {
            _this.msj.showError3('Error', err.error);
        });
        //var rr:any=[];
        //rr=this.navParams.data.record.ultrechazo.split('<br>')
        /*
        for(var i=0;i<rr.length;i++)
        {
        if(rr[0]=='Constancia de nota o Constancia de ubicación ilegible' || rr[0]=='Constancia de nota o Constancia de ubicación no valido'){
          this.comprobantenivel=true
        
        }
        if(rr[0]=='Comprobante de identificación no valido' || rr[0]=='Comprobante de identificación ilegible'){
          this.comprobanteidentificador=true
        }
        if(rr[0]=='Comprobante de Documentación no valido' || rr[0]=='Comprobante de Documentación ilegible'){
          this.comprobantetrabcui=true
        
        
        }
        
        }
        */
        if (this.navParams.data.op == 'Estudiante') {
            this.dnopasaportev = false;
            this.dcuiv = true;
            this.ddependenciav = false;
            this.identificador = this.cui;
            //   this.carnecalusac=this.carnecalusac1
            this.nidentificador = 'CUI';
            this.nidentificador2 = 'CUI';
        }
        if (this.navParams.data.op == 'Trabajador') {
            this.dcuiv = true;
            this.ddependenciav = true;
            this.dnopasaportev = false;
            this.nidentificador = 'Codigo Personal Trabajador';
            this.nidentificador2 = 'Voucher Trabajador';
        }
        if (this.navParams.data.op == 'Hijo Trabajador Adolescente') {
            this.dnopasaportev = false;
            this.dcuiv = true;
            this.ddependenciav = false;
            this.nidentificador = 'Codigo Personal Trabajador';
            this.nidentificador2 = 'Voucher Trabajador';
            this.NDPI = 'Partida de nacimiento';
        }
        if (this.navParams.data.op == 'Hijo Trabajador Adulto') {
            this.dnopasaportev = false;
            this.nidentificador = 'Codigo Personal Trabajador';
            this.nidentificador2 = 'Voucher Trabajador';
            this.carnecalusac = this.carnecalusac1;
        }
        if (this.navParams.data.op == 'Población') {
            this.dcuiv = true;
            this.dnopasaportev = false;
            this.nidentificador = 'DPI';
            this.nidentificador2 = 'DPI';
            this.identificador = this.cui;
            this.ddependenciav = false;
            // this.cui='na'
        }
        if (this.navParams.data.op == 'Adolescente') {
            this.dcuiv = true;
            this.nidentificador = 'No Partida de Nacimiento';
            this.nidentificador2 = 'Partida de Nacimiento';
            this.ddependenciav = false;
            this.cui = 'na';
        }
        if (this.navParams.data.op == 'Extranjero' || this.navParams.data.op == 'Extranjerocentroamericano') {
            this.ddependenciav = false;
            this.nidentificador = 'PASSAPORTE';
            this.nidentificador2 = 'PASSAPORTE';
            this.carnecalusac = this.carnecalusac1;
            this.cui = 'na';
        }
    };
    Asignacioncalusac4CreatePage.prototype.manageGallery2 = function (loading) {
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
        var options = {
            operacion: 'actualizarinfor',
            foto1: this.imagen,
            foto2: this.imagen2,
            foto4: this.imagen4,
            foto3: this.imagen3,
            bitacora: { idempresa: this.idempresa, idafiliado: '', email: this.username, permiso: creat, accion: creat + ' asigna calusac ' }
        };
        loading.dismiss();
        if (options) {
            this.authService.createReg(this.navParams.data.record._id, options, 'asignacalusacs').then(function (result) {
                if (!_this.form.valid) {
                    return;
                }
                _this.viewCtrl.dismiss(result);
            }, function (err) {
                _this.msj.showError3('Error', err.error);
            });
        }
    };
    Asignacioncalusac4CreatePage.prototype.validaraiz = function () {
    };
    Asignacioncalusac4CreatePage.prototype.manageGallery = function () {
        var _this = this;
        if (this.username == '') {
            this.msj.showError3('Mensaje', 'Existe un problema con su dispositivo , no existe usuario');
            return;
        }
        if (!this.username) {
            this.msj.showError3('Mensaje', 'Existe un problema con su dispositivo , no existe usuario');
            return;
        }
        var alert = this.alertCtrl.create({ title: this.nombre + '<p> ¿ Está seguro de realizar asignación calusac para: ' + this.idunidadacademica2[1] + ' ?',
            buttons: [
                { text: 'Si',
                    handler: function () {
                        var loading = _this.loadingCtrl.create({
                            spinner: 'bubbles',
                            content: "Espere un momento,  Realizando  Operación ......"
                        });
                        loading.present();
                        //  // this.cml='<?xml version="1.0" encoding="utf-8"?><Envelope xmlns="http://schemas.xmlsoap.org/soap/envelope/"><Body><getData xmlns="urn:miserviciowsdl"><carnet>'+this.carneusac +'</carnet><unidad>00</unidad><extension>00</extension><carrera>00</carrera><nombre>'+this.nombre+'</nombre><monto>'+ this.monto +'</monto><anio>'+this.ano+'</anio><rubro>'+this.rubro+'</rubro><variante_rubro>1</variante_rubro><subtotal>'+ this.monto+'</subtotal></getData></Body></Envelope>'
                        _this.manageGallery2(loading);
                    }
                },
                {
                    text: 'No', handler: function () { }
                }
            ]
        });
        alert.present();
    };
    Asignacioncalusac4CreatePage.prototype.cancel2 = function () {
        this.tipounidad = '';
        this.unidadacademica = '';
        this.idtipounidad2 = [];
        this.idunidadacademica2 = '';
        this.nombre = '';
        this.items = [];
    };
    Asignacioncalusac4CreatePage.prototype.cancel = function () {
        this.viewCtrl.dismiss();
    };
    Asignacioncalusac4CreatePage.prototype.done = function () {
        if (!this.form.valid) {
            return;
        }
        //this.viewCtrl.dismiss(this.form.value);
    };
    Asignacioncalusac4CreatePage.prototype.onSelectChange = function (selectedValue) {
        var _this = this;
        this.idtipounidad2 = selectedValue.split(',');
        if (this.idtipounidad2[2] == 'Inactivo') {
            this.msj.showError3('Precaución', this.idtipounidad2[3]);
            this.idtipounidad2 = [];
            this.tipounidad = '';
            return;
        }
        else {
            if (this.tipounidad == '') { }
            else {
                // if(this.idtipounidad2[0]=='5b97f1bceb1dab0ab0368cc6')    {
                this.authService.getReg2b(this.idtipounidad2[0] + '/2/' + this.navParams.data.op, 'unidadacademica3s').then(function (result) {
                    _this.vgrupo2 = result;
                }, function (err) {
                    _this.msj.showError3('Error', err.error);
                });
                /*  }
                  else
                  {
    
                    this.msj.showError3('Mensaje','La asignación para: ' +  this.idtipounidad2[1]+' se realizará en la Sede del Centro Universitario');
    
                  }
                  */
            }
        }
    };
    Asignacioncalusac4CreatePage.prototype.validacarne = function () {
        var _this = this;
        //validar carnet  y codigo nivel
        this.comprobantenivel = false;
        this.carnecalusac = this.carnecalusac1;
        this.authService.getReg(this.carnecalusac + '/' + this.codigonn + '/' + this.codigounidad, 'asignanotas').then(function (result) {
            _this.vvalidanivel = result;
            //recorrer this.vvalidanivel[i].nota  la sumatoria > 70
            var nota = 0;
            for (var i = 0; i < _this.vvalidanivel.length; i++) {
                nota = nota + _this.vvalidanivel[i].nota;
            }
            if (nota >= 70) {
                _this.sinivel = '1';
                _this.comprobantenivel = false;
                _this.msj.showError3('Exito', 'Nivel ' + _this.codigonn + ' Aprobado , continue con la asignación ');
            }
            else {
                _this.msj.showError3('Error', 'Nivel no aprobado en base de datos , Ingrese una foto de constacia donde aprobó el nivel ' + _this.codigonn + ' para autorización');
                _this.sinivel = '0';
                _this.comprobantenivel = true;
            }
        }, function (err) {
            _this.msj.showError3('Error', 'Nivel no aprobado en base de datos , Ingrese una foto de constacia donde aprobó el nivel ' + _this.codigonn + ' para autorización');
            _this.sinivel = '0';
            _this.comprobantenivel = true;
        });
    };
    Asignacioncalusac4CreatePage.prototype.onSelectChange4 = function (selectedValue) {
        var _this = this;
        this.idjornada2 = selectedValue.split(',');
        this.authService.getReg2b(this.idtipounidad2[0] + '/' + this.idunidadacademica2[0] + '/' + this.idperiodo + '/' + this.navParams.data.op + '/' + this.idjornada2[0], 'unidadplan3s').then(function (result) {
            _this.vpago = result;
        }, function (err) {
            _this.msj.showError3('Error', err.error);
        });
    };
    Asignacioncalusac4CreatePage.prototype.onSelectChange3 = function (selectedValue) {
        this.idpago2 = selectedValue.split(',');
        this.monto = this.idpago2[3];
        this.codigonn = Number(this.idpago2[2]) - 1;
        this.sinivel = '0';
        this.nivel = this.idpago2[4];
        if (this.codigonn > 0) {
            this.carnev = true;
            this.carnev2 = true;
            this.vvcarne = 'Obligatorio';
            this.comprobantenivel = true;
        }
        else {
            this.comprobantenivel = false;
            this.sinivel = '1';
            this.carnev = true;
            this.carnev2 = false;
            this.comprobantenivel = false;
            this.vvcarne = 'Si no tiene carné, no ingrese ninguna información';
            this.codigonn = 0;
        }
    };
    /*
      onSelectChange4(selectedValue: any) {    this.idjornada2=selectedValue.split(',');  }
      onSelectChange5(selectedValue: any) {    this.idhorario2=selectedValue.split(',');}
    onSelectChange6(selectedValue: any) {    this.iddia2=selectedValue.split(',');  }
      onSelectChange7(selectedValue: any) {    this.idprofesor2=selectedValue.split(',');  }
    */
    Asignacioncalusac4CreatePage.prototype.onSelectChange2 = function (selectedValue) {
        var _this = this;
        this.idunidadacademica2 = selectedValue.split(',');
        this.rubro = this.idunidadacademica2[2];
        this.ididioma = this.idunidadacademica2[3];
        this.idtipogrupo = this.idunidadacademica2[4];
        this.idtipocurso = this.idunidadacademica2[5];
        if (this.tipounidad == '') { }
        else {
            this.codigounidad = this.idunidadacademica2[2];
            this.authService.getReg2b(this.idtipounidad2[0] + '/' + this.idunidadacademica2[0], 'unidadperiodo3s').then(function (result) {
                if (result) {
                    var dd = [];
                    dd = result;
                    if (dd.length > 0) {
                        _this.idperiodo = result[0]._id;
                        var aa = result[0]._id + ',' + result[0].nombre;
                        _this.idperiodo2 = aa.split(',');
                        _this.ano = result[0].ano;
                        _this.authService.getReg2b(_this.idtipounidad2[0] + '/' + _this.idunidadacademica2[0] + '/' + _this.idperiodo + '/1' + '/jornadas', 'unidadplan3s').then(function (result) {
                            _this.vjornada = result;
                        }, function (err) {
                            _this.msj.showError3('Error', err.error);
                        });
                        /*
                        
                        
                          this.authService.getReg2b( this.idunidadacademica2[0]+'/'+ this.idunidadacademica2[0] + '/' +this.navParams.data.op + '/tipo','unidadpago3s').then((result) => {
                            this.vpago=result;
                          }, (err) => {
                          this.msj.showError3('Error',err.error);
                        });
                        */
                    }
                    else {
                        _this.idperiodo2 = [];
                        _this.msj.showError3('Error', 'No existe planificación definida en la estructura, comuniquese con el administrador');
                        // this.unidadacademica=''
                    }
                }
            }, function (err) {
                _this.msj.showError3('Error', err.error);
            });
        }
    };
    /*
        focused(selectedValue: any) {
         if(this.no_orientacion!='')
         {
    
          const loading = this.loadingCtrl.create({
            spinner: 'bubbles',
            content: "Espere un momento,  Buscando información ......"
          });
          loading.present();
    
    
          this.items=[]
    
          this.authService.getReglibreSext2(this.no_orientacion,'estudiantevt').then((data) => {
    
            this.nombre=data[0].nombre;
            this.items=[{nombre1:data[0].nombre}]
            loading.dismiss();
    
    }, (err) => {
      this.authService.getRegS2(this.no_orientacion,'estudianteov').then((data) => {
        // this.msj.showError3('Resultado','Proceso OV concluido, revisa tus datos para validar información ');
         this.nombre=data[0].nombre1+ ' '+ data[0].nombre2+ ' ' + data[0].apellido1+ ' ' + data[0].apellido2+ ' '
    
         this.items=data;
         loading.dismiss();
    
     }, (err) => {
    
      this.authService.getReglibreREGEST2(this.no_orientacion+'/CARNE' ,'datosfijos').then((data) => {
    
      //this.authService.getReglibreSext2(this.no_orientacion ,'carne').then((data) => {
    
        this.nombre=data[0].nombre
        this.items=[{nombre1:data[0].nombre}]
    
        loading.dismiss();
    
    
      }, (err) => {
    
        this.msj.showError3('Resultado','Carnè o OV no encontrado.... ');
        this.no_orientacion=''
        this.items=[]
        loading.dismiss();
    
      });
    
    
    
    
    
    
     });
    
    });
    
    
    
    
         }
    
        }
       */
    Asignacioncalusac4CreatePage.prototype.updateProfileImage = function (op) {
        var _this = this;
        this.opimg = op;
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
    Asignacioncalusac4CreatePage.prototype.takePhotograph = function (op) {
        var _this = this;
        this.opimg = op;
        if (__WEBPACK_IMPORTED_MODULE_7__ionic_native_camera__["a" /* Camera */]['installed']()) {
            this._IMAGE
                .takePhotograph()
                .then(function (image) {
                switch (op) {
                    case '1':
                        _this.imagen = image.toString();
                        _this.image = image.toString();
                        break;
                    case '2':
                        _this.imagen2 = image.toString();
                        _this.image2 = image.toString();
                        break;
                    case '3':
                        _this.imagen3 = image.toString();
                        _this.image3 = image.toString();
                        break;
                    case '4':
                        _this.imagen4 = image.toString();
                        _this.image4 = image.toString();
                        break;
                    default:
                }
            })
                .catch(function (err) {
                console.log(err);
            });
        }
        else {
            switch (op) {
                case '1':
                    this.fileInput.nativeElement.click();
                    break;
                case '2':
                    this.fileInput2.nativeElement.click();
                    break;
                case '3':
                    this.fileInput3.nativeElement.click();
                    break;
                case '4':
                    this.fileInput4.nativeElement.click();
                    break;
                default:
            }
        }
    };
    Asignacioncalusac4CreatePage.prototype.selectImage = function (op) {
        var _this = this;
        this.opimg = op;
        if (__WEBPACK_IMPORTED_MODULE_7__ionic_native_camera__["a" /* Camera */]['installed']()) {
            this._IMAGE
                .selectPhotograph()
                .then(function (image) {
                switch (op) {
                    case '1':
                        _this.imagen = image.toString();
                        _this.image = image.toString();
                        break;
                    case '2':
                        _this.imagen2 = image.toString();
                        _this.image2 = image.toString();
                        break;
                    case '3':
                        _this.imagen3 = image.toString();
                        _this.image3 = image.toString();
                        break;
                    case '4':
                        _this.imagen4 = image.toString();
                        _this.image4 = image.toString();
                        break;
                    default:
                }
            })
                .catch(function (err) {
                console.log(err);
            });
        }
        else {
            switch (op) {
                case '1':
                    this.fileInput.nativeElement.click();
                    break;
                case '2':
                    this.fileInput2.nativeElement.click();
                    break;
                case '3':
                    this.fileInput3.nativeElement.click();
                    break;
                case '4':
                    this.fileInput4.nativeElement.click();
                    break;
                default:
            }
        }
    };
    Asignacioncalusac4CreatePage.prototype.processWebImage = function (event) {
        var _this = this;
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();
            reader.onload = function (readerEvent) {
                switch (_this.opimg) {
                    case '1':
                        _this.image = readerEvent.target.result;
                        _this._IMAGE.generateFromImage(_this.image, 800, 800, 1, function (data) {
                            _this.image = data;
                            _this.imagen = data;
                        });
                        break;
                    case '2':
                        _this.image2 = readerEvent.target.result;
                        _this._IMAGE.generateFromImage(_this.image2, 800, 800, 1, function (data) {
                            _this.image2 = data;
                            _this.imagen2 = data;
                        });
                        break;
                    case '3':
                        _this.image3 = readerEvent.target.result;
                        _this._IMAGE.generateFromImage(_this.image3, 800, 800, 1, function (data) {
                            _this.image3 = data;
                            _this.imagen3 = data;
                        });
                        break;
                    case '4':
                        _this.image4 = readerEvent.target.result;
                        _this._IMAGE.generateFromImage(_this.image4, 800, 800, 1, function (data) {
                            _this.image4 = data;
                            _this.imagen4 = data;
                        });
                        break;
                    default:
                }
            };
            reader.readAsDataURL(event.target.files[0]);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('fileInput'),
        __metadata("design:type", Object)
    ], Asignacioncalusac4CreatePage.prototype, "fileInput", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('fileInput2'),
        __metadata("design:type", Object)
    ], Asignacioncalusac4CreatePage.prototype, "fileInput2", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('fileInput3'),
        __metadata("design:type", Object)
    ], Asignacioncalusac4CreatePage.prototype, "fileInput3", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('fileInput4'),
        __metadata("design:type", Object)
    ], Asignacioncalusac4CreatePage.prototype, "fileInput4", void 0);
    Asignacioncalusac4CreatePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-asignacioncalusac4-create',template:/*ion-inline-start:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\CALUSAC\asignacioncalusac4-create\asignacioncalusac4-create.html"*/'<ion-header>\n    <ion-navbar>\n      <ion-title>{{titulo2}}</ion-title>\n      <ion-buttons start>\n          <button (click)="cancel()" icon-only ion-button padding-right>\n              <ion-icon name="md-close"></ion-icon>\n            </button>\n\n      </ion-buttons>\n\n    </ion-navbar>\n  </ion-header>\n  <ion-content padding>\n    <form     [formGroup]="form"   text-wrap>\n      <ion-list>\n          <ion-item-divider color="secondary">\n              <ion-label class="my-label18" color="secondary2" center>\n               FICHA DE DATOS PERSONALES\n              </ion-label>\n            </ion-item-divider>\n            <ion-item margin-bottom>             <ion-label class="my-label18" color="secondary2"></ion-label> </ion-item>\n      <ion-avatar item-start >\n          <img [src]="image2"  id="profile-image"  src="{{pofilel}}"   >\n\n  </ion-avatar>\n   <ion-item-group >\n    <ion-item>\n\n\n\n       <input   type="hidden"    name="imagen2" [formControl]="form.controls[\'imagen2\']"    [(ngModel)]="imagen2">\n    </ion-item>\n    <ion-item>\n        <a  ion-button    block  margin-bottom    color="primary"  (click)="updateProfileImage(\'2\')">Adjunte fotografía personal</a>\n        <input type="file" accept="image/*" #fileInput2 style="visibility: hidden; height: 0px" (change)="processWebImage($event)" />\n     </ion-item>\n  </ion-item-group>\n\n        <ion-item margin-bottom>\n            <ion-label class="my-label18" color="secondary2">Fecha nacimiento</ion-label>\n            <ion-datetime  [disabled]="generales"   displayFormat="DD/MM/YYYY"     [formControl]="form.controls[\'fecha_nac\']" [(ngModel)]="fecha_nac"></ion-datetime>\n\n         </ion-item>\n\n         <ion-item class="invalid" *ngIf="!form.controls.fecha_nac.valid && (form.controls.fecha_nac.dirty || form.controls.fecha_nac.touched)" text-wrap>\n            <ion-icon name="warning"></ion-icon>\n           Ingrese una fecha de nacimiento valida\n        </ion-item>\n\n\n\n\n         <ion-item  *ngIf="dcuiv==true">\n            <ion-label class="my-label18" color="secondary2" > Cui </ion-label>\n            <ion-input  [disabled]="generales" [(ngModel)]="cui" [formControl]="form.controls[\'cui\']" type="number"></ion-input>\n        </ion-item>\n\n\n\n        <ion-item class="invalid" *ngIf="!form.controls.cui.valid && (form.controls.cui.dirty || form.controls.cui.touched)" text-wrap>\n            <ion-icon name="warning"></ion-icon>\n            Ingrese un cui valido, Un tamaño  de 13 digitos\n        </ion-item>\n\n\n\n         <ion-item *ngIf="dnopasaportev==true" >\n            <ion-label class="my-label18" color="secondary2" > No pasaporte </ion-label>\n            <ion-input  [disabled]="dnopasaporte"  [formControl]="form.controls[\'nopasaporte\']" type="text"></ion-input>\n        </ion-item>\n\n        <ion-item >\n            <ion-label class="my-label18"  color="secondary2" stacked> Nombres y Apellidos  </ion-label>\n            <ion-input [disabled]="generales"  [(ngModel)]="nombre" [formControl]="form.controls[\'nombre\']" type="text"></ion-input>\n          </ion-item>\n\n          <ion-item class="invalid" *ngIf="!form.controls.nombre.valid && (form.controls.nombre.dirty || form.controls.nombre.touched)" text-wrap>\n              <ion-icon name="warning"></ion-icon>\n             Ingrese nombres y apellidos  validos\n          </ion-item>\n\n\n\n\n          <ion-item >\n              <ion-label   class="my-label18" color="secondary2" > {{ \'DIRECCION\' | translate }}  </ion-label>\n              <ion-input  [disabled]="generales" [(ngModel)]="direccion" [formControl]="form.controls[\'direccion\']" type="text"></ion-input>\n            </ion-item>\n\n            <ion-item class="invalid" *ngIf="!form.controls.direccion.valid\n            && (form.controls.direccion.dirty || form.controls.direccion.touched)" text-wrap>\n                <ion-icon name="warning"></ion-icon>\n                {{ \'DIRECCIONT\' | translate }}\n            </ion-item>\n\n            <ion-item >\n                <ion-label  class="my-label18"  color="secondary2" > {{ \'TELEFONO\' | translate }}  </ion-label>\n                <ion-input [disabled]="generales" [(ngModel)]="telefono" [formControl]="form.controls[\'telefono\']" type="number"></ion-input>\n              </ion-item>\n\n              <ion-item class="invalid" *ngIf="!form.controls.telefono.valid\n              && (form.controls.telefono.dirty || form.controls.telefono.touched)" text-wrap>\n                  <ion-icon name="warning"></ion-icon>\n                  {{ \'TELEFONOT\' | translate }}\n              </ion-item>\n\n\n              <ion-item >\n                  <ion-label  class="my-label18"  color="secondary2" > Correo </ion-label>\n                  <ion-input [disabled]="generales" [(ngModel)]="correo" [formControl]="form.controls[\'correo\']" type="text"></ion-input>\n                </ion-item>\n\n                <ion-item class="invalid" *ngIf="!form.controls.correo.valid\n                && (form.controls.correo.dirty || form.controls.correo.touched)" text-wrap>\n                    <ion-icon name="warning"></ion-icon>\n                   Ingrese un correo valido\n                </ion-item>\n\n\n\n\n\n                        <ion-item >\n                            <ion-label  class="my-label18" color="secondary2" stacked> {{ \'SEXO\' | translate }}  </ion-label>\n                            <ion-select [disabled]="generales" [(ngModel)]="sexo" [formControl]="form.controls[\'sexo\']" >\n                                <ion-option text-wrap *ngFor="let lenguage of sexos" [value]="lenguage">{{lenguage}}</ion-option>\n                              </ion-select>\n\n                          </ion-item>\n\n\n                        <ion-item class="invalid" *ngIf="!form.controls.sexo.valid\n                        && (form.controls.sexo.dirty || form.controls.sexo.touched)" text-wrap>\n                            <ion-icon name="warning"></ion-icon>\n                            {{ \'SEXOT\' | translate }}\n                        </ion-item>\n\n\n\n\n                        <ion-item >\n                            <ion-label  class="my-label18" color="secondary2" stacked> Nivel académico  </ion-label>\n                            <ion-select [disabled]="generales" [(ngModel)]="nivelacademico" [formControl]="form.controls[\'nivelacademico\']" >\n                                <ion-option text-wrap *ngFor="let lenguage of nacademicos" [value]="lenguage">{{lenguage}}</ion-option>\n                              </ion-select>\n\n                          </ion-item>\n\n\n                        <ion-item class="invalid" *ngIf="!form.controls.nivelacademico.valid\n                        && (form.controls.nivelacademico.dirty || form.controls.nivelacademico.touched)" text-wrap>\n                            <ion-icon name="warning"></ion-icon>\n                          Ingrese un nivel academico valido\n                        </ion-item>\n\n\n\n                        <ion-item *ngIf="didentificadorv==true" >\n                            <ion-label class="my-label18"  color="secondary2" stacked> Identificador ({{nidentificador}})  </ion-label>\n                            <ion-input [(ngModel)]="identificador"  [formControl]="form.controls[\'identificador\']" type="text"></ion-input>\n                          </ion-item>\n\n                          <ion-item class="invalid" *ngIf="!form.controls.identificador.valid && (form.controls.identificador.dirty || form.controls.identificador.touched)" text-wrap>\n                              <ion-icon name="warning"></ion-icon>\n                             Ingrese un identificador ({{nidentificador}})  valido\n                          </ion-item>\n\n\n                <ion-item *ngIf="ddependenciav==true" >\n                    <ion-label class="my-label18"  color="secondary2" stacked> Dependencia  </ion-label>\n                    <ion-input   [(ngModel)]="dependencia" [formControl]="form.controls[\'dependencia\']" type="text"></ion-input>\n                  </ion-item>\n\n                  <ion-item class="invalid" *ngIf="!form.controls.dependencia.valid && (form.controls.dependencia.dirty || form.controls.dependencia.touched)" text-wrap>\n                      <ion-icon name="warning"></ion-icon>\n                     Ingrese una dependencia valida\n                  </ion-item>\n            <p>\n                <p>\n\n\n                  <ion-item-divider *ngIf="datosobligatorios==true" color="danger">\n                    <ion-label  class="my-label18"  center>\n                     RECHAZOS\n                     <div [innerHTML]="rechazo">  </div>\n\n                    </ion-label>\n\n                  </ion-item-divider>\n\n\n\n\n  <ion-item-group *ngIf="comprobantetrabcui==true">\n      <ion-item>\n         <img [src]="image4"     class="profile-image2">\n         <input   type="hidden"  name="imagen4" [formControl]="form.controls[\'imagen4\']"    [(ngModel)]="imagen4">\n      </ion-item>\n      <ion-item>\n          <a  ion-button    block  margin-bottom    color="primary"  (click)="updateProfileImage(\'4\')">Adjunte Imagen de {{NDPI}}      </a>\n          <input type="file" accept="image/*" #fileInput4 style="visibility: hidden; height: 0px" (change)="processWebImage($event)" />\n       </ion-item>\n    </ion-item-group>\n\n\n\n\n\n\n\n\n\n  <ion-item-group *ngIf="comprobanteidentificador==true">\n      <ion-item>\n         <img [src]="image3"    class="profile-image2">\n         <input   type="hidden"   id="profile-image2"  name="imagen3" [formControl]="form.controls[\'imagen3\']"    [(ngModel)]="imagen3">\n      </ion-item>\n      <ion-item>\n          <a  ion-button    block  margin-bottom    color="primary"  (click)="updateProfileImage(\'3\')">Adjunte Imagen de {{nidentificador2}}       </a>\n          <input type="file" accept="image/*" #fileInput3 style="visibility: hidden; height: 0px" (change)="processWebImage($event)" />\n       </ion-item>\n    </ion-item-group>\n\n\n\n\n\n   <ion-item  >\n     <!--   <ion-label class="my-label18"  color="danger" stacked> Ingrese Carne CALUSAC ({{vvcarne}})</ion-label>-->\n    <ion-label class="my-label18"  color="secondary2" stacked>Carné CALUSAC  </ion-label>\n    <ion-input   [(ngModel)]="carnecalusac1" [formControl]="form.controls[\'carnecalusac1\']" type="text"></ion-input>\n\n  </ion-item>\n\n  <ion-item class="invalid" *ngIf="!form.controls.carnecalusac1.valid && (form.controls.carnecalusac1.dirty || form.controls.carnecalusac1.touched)" text-wrap>\n      <ion-icon name="warning"></ion-icon>\n     Ingrese un carne calusac valido\n  </ion-item>\n  <p>\n      <p></p>\n\n\n\n\n   <ion-item-group  *ngIf="comprobantenivel==true">\n    <ion-item>\n       <img [src]="image"    class="profile-image2">\n       <input   type="hidden"    name="imagen" [formControl]="form.controls[\'imagen\']"    [(ngModel)]="imagen">\n    </ion-item>\n    <ion-item>\n        <a  ion-button    block  margin-bottom    color="primary"  (click)="updateProfileImage(\'1\')">Adjunte Imagen de Costancia de nota o Constancia de ubicación       </a>\n        <input type="file" accept="image/*" #fileInput style="visibility: hidden; height: 0px" (change)="processWebImage($event)" />\n     </ion-item>\n  </ion-item-group>\n\n\n\n\n\n\n\n          <ion-row >\n              <ion-col text-center>\n                <button  ion-button block color="secondary"  (click)="manageGallery()" strong>\n                 Actualizar\n                </button>\n              </ion-col>\n            </ion-row>\n\n\n\n\n       </ion-list>\n    </form>\n\n\n  </ion-content>\n'/*ion-inline-end:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\CALUSAC\asignacioncalusac4-create\asignacioncalusac4-create.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__providers_image_image__["a" /* ImageProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3__providers__["d" /* NotificationProvider */], __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["F" /* ViewController */], __WEBPACK_IMPORTED_MODULE_3__providers__["a" /* Auth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */]])
    ], Asignacioncalusac4CreatePage);
    return Asignacioncalusac4CreatePage;
}());

//# sourceMappingURL=asignacioncalusac4-create.js.map

/***/ }),

/***/ 919:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsignacioncalusacCreatePageModule", function() { return AsignacioncalusacCreatePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__asignacioncalusac4_create__ = __webpack_require__(1359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AsignacioncalusacCreatePageModule = /** @class */ (function () {
    function AsignacioncalusacCreatePageModule() {
    }
    AsignacioncalusacCreatePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__asignacioncalusac4_create__["a" /* Asignacioncalusac4CreatePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__asignacioncalusac4_create__["a" /* Asignacioncalusac4CreatePage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], AsignacioncalusacCreatePageModule);
    return AsignacioncalusacCreatePageModule;
}());

//# sourceMappingURL=asignacioncalusac4-create.module.js.map

/***/ })

});
//# sourceMappingURL=229.js.map