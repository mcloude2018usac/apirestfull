webpackJsonp([243],{

/***/ 1380:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Asignacioncalusac100CreatePage; });
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








var Asignacioncalusac100CreatePage = /** @class */ (function () {
    function Asignacioncalusac100CreatePage(_IMAGE, alertCtrl, loadingCtrl, storage, msj, translateService, viewCtrl, authService, navCtrl, navParams, _FB, actionSheetCtrl, events) {
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
        this.pofilel = './assets/img/photo256.png';
        this.esconde = false;
        this.ordenpago = '';
        this.llave = '';
        this.rubro = '18';
        this.ano = '2021';
        this.fecha = (new Date()).toISOString();
        this.items = [];
        this.resultado = [];
        this.vgrupo = [];
        this.vgrupo2 = [];
        this.vgrupo3 = [];
        this.letras = "abcdefghyjklmnñopqrstuvwxyz";
        // Define form validation - VERY basic!
        this.form = this._FB.group({
            tipounidad: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            idtipogrupo: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            ididioma: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            nombre: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            imagen: [''],
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
    Asignacioncalusac100CreatePage.prototype.ngOnInit = function () {
        var _this = this;
        this.novp = this.navParams.data.nov;
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
                if (_this.tiposus[6] == 'user') {
                    if (_this.tiposus[5] == '' || _this.tiposus[5] == undefined) {
                    }
                    else {
                        _this.isDisablednit = false;
                        //   this.form.controls['identificador'].setValue(this.novp);
                        //  this.focused('a')
                    }
                }
                else {
                    _this.isDisablednit = true;
                }
            });
        });
    };
    Asignacioncalusac100CreatePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        if (this.navParams.get("record") == null) {
            //   this.authService.getReg2b( '1'+'/'+ '123' + '/'+'2' + '/' +'123' +'/unidadaca','unidadplan4as').then((result) => {
            // this.authService.getReg2b('todos','tipounidad3s').then((result) => {
            this.authService.getReg2b('1/1/' + 'tipounidad', 'asignaubicacions').then(function (result) {
                _this.vgrupo = result;
            }, function (err) {
                _this.msj.showError3('Error', err.error);
            });
            this.pageTitle = 'Asignación Examen de Ubicación';
            //  this.isDisablednit =true
        }
        else {
            //  this._ID 				=	this.navParams.data.record._id;
            this.esconde = true;
            this.authService.getReg2b('1/1/' + 'tipounidad', 'asignaubicacions').then(function (result) {
                _this.vgrupo = result;
                _this.tipounidad = _this.navParams.data.record.idtipounidad.id;
                _this.idtipounidad2[0] = _this.navParams.data.record.idtipounidad.id;
                _this.idtipounidad2[1] = _this.navParams.data.record.idtipounidad.nombre;
                _this.periodo = _this.navParams.data.record.idperiodo.id;
                _this.idperiodo2[0] = _this.navParams.data.record.idperiodo.id;
                _this.idperiodo2[1] = _this.navParams.data.record.idperiodo.nombre;
                _this.ididioma = _this.navParams.data.record.ididioma._id;
            }, function (err) {
                _this.msj.showError3('Error', err.error);
            });
            /*
              idtipo : this.idtipogrupo2[0],
                 ididioma : this.ididioma2[0],
                 periodo : {id:this.idperiodo2[0],nombre:this.idperiodo2[1]},
            
                       tipounidad     : ['', Validators.required],
                   idtipogrupo     : ['', Validators.required],
                   ididioma     : ['', Validators.required],
                   nombre     : ['', Validators.required],
                   imagen     : [''],
                   identificador     :   ['', Validators.compose([Validators.required])]
            
            */
            this.nombre = this.navParams.data.record.nombre;
            this.image = this.navParams.data.record.foto;
            this.imagen = this.navParams.data.record.foto;
            //  this.fecha		=	this.navParams.data.record.fecha;
            this.idtipogrupo = this.navParams.data.record.idtipo;
            this.idtipo = this.navParams.data.record.idtipo;
            this.identificador = this.navParams.data.record.identificador;
            this.authService.convertToDataURLviaCanvas(this.navParams.data.record.foto, 'image/jpeg').
                then(function (base64) { return _this.foto1img = base64; });
            //      this.isDisablednit =false
            this.translateService.get('ITEM_UPDATE_TITLE').subscribe(function (value) {
                _this.pageTitle = value;
            });
        }
    };
    Asignacioncalusac100CreatePage.prototype.manageGallery2 = function (loading) {
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
        if (this.foto1img) {
        }
        else {
            this.msj.showError3('Mensaje', 'Ingrese una documento de CUI /  PASAPORTE valido');
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
        if (this.navParams.get("record") == null) {
            this.authService.subefoto('', 'Images', this.foto1img, '', '', '', '', 'create').then(function (result) {
                var data = [];
                data = result;
                var imagentt = data.url;
                _this.form.controls['imagen'].setValue(data.url);
                if (imagentt === '') {
                    _this.msj.showError3('Mensaje', 'No se pudo cargar la imagen , por favor intente de nuevo');
                    loading.dismiss();
                }
                else {
                    var options = {
                        nombre: _this.form.controls['nombre'].value,
                        tipounidad: { id: _this.idtipounidad2[0], nombre: _this.idtipounidad2[1] },
                        idtipo: _this.idtipogrupo2[0],
                        ididioma: _this.ididioma2[0],
                        periodo: { id: _this.idperiodo2[0], nombre: _this.idperiodo2[1] },
                        foto: _this.form.controls['imagen'].value,
                        idestudiante: _this.username,
                        idinterno: _this.username,
                        identificador: _this.form.controls['identificador'].value,
                        identificador2: _this.identificador2,
                        noorden: _this.ordenpago,
                        rubro: _this.rubro,
                        ano: _this.ano,
                        llave: _this.llave,
                        estadopago: 'Pendiente de pago',
                        monto: 50,
                        fechasiif: _this.fechax,
                        tipoasignacion: 'enlinea',
                        bitacora: { idempresa: _this.idempresa, idafiliado: '', email: _this.username, permiso: creat, accion: creat + ' asigna examen de ubicacion ' }
                    };
                    if (_this.navParams.get("record") == null) {
                        if (options) {
                            _this.authService.createReg2b('', options, 'asignaubicacions').then(function (result) {
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
                }
            });
        }
        else {
            this.authService.subefoto('', 'Images', this.foto1img, '', '', '', this.form.controls['imagen'].value, 'update').then(function (result) {
                var data = [];
                data = result;
                var imagenttt = data.url;
                _this.form.controls['imagen'].setValue(data.url);
                if (imagenttt === '') {
                    _this.msj.showError3('Mensaje', 'No se pudo cargar la imagen , por favor intente de nuevo');
                    loading.dismiss();
                }
                else {
                    var options = {
                        nombre: _this.form.controls['nombre'].value,
                        operacion: 'actualizatodo',
                        foto: _this.form.controls['imagen'].value,
                        identificador: _this.form.controls['identificador'].value,
                        identificador2: _this.identificador2,
                        bitacora: { idempresa: _this.idempresa, idafiliado: '', email: _this.username, permiso: creat, accion: creat + ' asigna examen de ubicacion ' }
                    };
                    if (_this.navParams.get("record") !== null) {
                        if (options) {
                            _this.authService.createReg2b(_this.navParams.data.record._id, options, 'asignaubicacions').then(function (result) {
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
                }
            });
        }
    };
    Asignacioncalusac100CreatePage.prototype.random = function () {
        var rand = Math.floor(Math.random() * 20) + 1;
        return rand;
    };
    Asignacioncalusac100CreatePage.prototype.davariable = function (cad, varx) {
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
    Asignacioncalusac100CreatePage.prototype.tiene_letras = function (texto) {
        texto = texto.toLowerCase();
        for (var i = 0; i < texto.length; i++) {
            if (this.letras.indexOf(texto.charAt(i), 0) != -1) {
                return 1;
            }
        }
        return 0;
    };
    Asignacioncalusac100CreatePage.prototype.manageGallery = function () {
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
        this.authService.getReg2b(llavedoc + '/' + this.nombre + '/' + '50' + ".00" + '/30/2021/' + this.rubro + '/1', 'siifs').then(function (data) {
            //       this.authService.getReg2b('1/29993154,jorge,240,2019,145/'+'ordenpago','asignacalusacs').then((data) => {
            _this.items = data;
            _this.items = data;
            var aa = [];
            aa = data;
            var otro = aa.cadena;
            var gorden = _this.davariable(otro, 'orden_pago');
            _this.ordenpago = gorden;
            _this.llave = _this.davariable(otro, 'llave');
            _this.fechax = _this.davariable(otro, 'fecha');
            /*
                                          this.ordenpago="123"
                                          this.llave="1234"
                                          this.fechax="2020-09-15"
            
                        gorden="ok"
            */
            if (gorden == "error") {
                _this.msj.showError3('Error', 'No se pudo generar orden de pago, intente mas tarde');
                //  this.authService.hidePreloader();
                loading.dismiss();
                return;
            }
            _this.manageGallery2(loading);
        }, function (err) {
            _this.msj.showError3('Error', 'Existe un problema al generar la boleta de pago, comuniquese con unidad administrativa CALUSAC');
            loading.dismiss();
        });
    };
    Asignacioncalusac100CreatePage.prototype.cancel2 = function () {
        this.identificador = '';
        this.identificador2 = '';
        this.tipounidad = '';
        this.idtipo = '';
        this.idtipounidad2 = [];
        this.idtipogrupo = '';
        this.nombre = '';
        this.items = [];
    };
    Asignacioncalusac100CreatePage.prototype.cancel = function () {
        this.viewCtrl.dismiss();
    };
    Asignacioncalusac100CreatePage.prototype.done = function () {
        if (!this.form.valid) {
            return;
        }
        //this.viewCtrl.dismiss(this.form.value);
    };
    Asignacioncalusac100CreatePage.prototype.onSelectChange = function (selectedValue) {
        var _this = this;
        this.idtipounidad2 = selectedValue.split(',');
        this.titulo2 = 'una unidad académica';
        this.authService.getReg2b(this.idtipounidad2[0] + '/' + this.idtipounidad2[0] + '/' + 'tipoasignado', 'asignaubicacions').then(function (result) {
            _this.vgrupo2 = result;
        }, function (err) {
            _this.msj.showError3('Error', err.error);
        });
        this.authService.getReg2b(this.idtipounidad2[0] + '/' + this.idtipounidad2[0] + '/' + 'tipoidioma', 'asignaubicacions').then(function (result) {
            _this.vgrupo3 = result;
        }, function (err) {
            _this.msj.showError3('Error', err.error);
        });
        this.authService.getReg2b(this.idtipounidad2[0] + '/' + this.idtipounidad2[0], 'unidadperiodo4s').then(function (result) {
            var aaaa = [];
            aaaa = result;
            if (aaaa.length > 0) {
                if (result[0].estado == 'Activo') {
                    var dd = [];
                    dd = result;
                    if (dd.length > 0) {
                        var aa = result[0]._id + ',' + result[0].nombre;
                        _this.idperiodo2 = aa.split(',');
                    }
                    else {
                        _this.idperiodo2 = [];
                        _this.vgrupo2 = [];
                        _this.vgrupo3 = [];
                        _this.vgrupo = [];
                        // this.msj.showError3('Error','No existe planificación de los salones en esta unidad');
                        // this.unidadacademica=''
                    }
                }
                else {
                    _this.msj.showError3('Error', 'La temporada de asignación no se encuentra disponible en este momento.');
                    _this.idperiodo2 = [];
                    _this.vgrupo2 = [];
                    _this.vgrupo3 = [];
                    _this.vgrupo = [];
                }
            }
            else {
                _this.msj.showError3('Error', 'La temporada de asignación nod e encuentra disponible en este momento.');
                _this.idperiodo2 = [];
                _this.vgrupo2 = [];
                _this.vgrupo3 = [];
                _this.vgrupo = [];
            }
        }, function (err) {
            _this.msj.showError3('Error', err.error);
        });
    };
    Asignacioncalusac100CreatePage.prototype.onSelectChange2 = function (selectedValue) {
        this.idtipogrupo2 = selectedValue.split(',');
        if (this.tipounidad == undefined || this.tipounidad == '') {
            this.msj.showError3('Importante', 'Seleccione sede. ');
            this.idtipogrupo2 = [];
            this.idtipogrupo = '';
        }
    };
    Asignacioncalusac100CreatePage.prototype.onSelectChange3 = function (selectedValue) {
        this.ididioma2 = selectedValue.split(',');
        if (this.tipounidad == undefined || this.tipounidad == '') {
            this.msj.showError3('Importante', 'Seleccione sede. ');
            this.ididioma2 = [];
            this.ididioma = '';
        }
    };
    /*
        focused(selectedValue: any) {
         if(this.identificador!='')
         {
    
          const loading = this.loadingCtrl.create({
            spinner: 'bubbles',
            content: "Espere un momento,  Buscando información ......"
          });
          loading.present();
    
    
          this.items=[]
    
          this.authService.getReglibreSext2(this.identificador,'estudiantevt').then((data) => {
    
            this.nombre=data[0].nombre;
            this.items=[{nombre1:data[0].nombre}]
            loading.dismiss();
    
    }, (err) => {
      this.authService.getReglibreSext2(this.identificador,'estudianteov').then((data) => {
        // this.msj.showError3('Resultado','Proceso OV concluido, revisa tus datos para validar información ');
         this.nombre=data[0].nombre1+ ' '+ data[0].nombre2+ ' ' + data[0].apellido1+ ' ' + data[0].apellido2+ ' '
    
         this.items=data;
         loading.dismiss();
    
     }, (err) => {
    
      this.authService.getReg('registroest/'+this.identificador+'/CARNE' ,'datosfijos').then((data) => {
    
    
         var tt:any=[]
         tt=data;
    
         if(tt.length>0)
         {
    
     this.nombre=data[0].nombre1 + ' ' + data[0].nombre2 +' ' + data[0].primer_apellido + ' ' +data[0].segundo_apellido
        this.items=[{nombre1:data[0].nombre1 + ' ' + data[0].nombre2 +' ' + data[0].primer_apellido + ' ' +data[0].segundo_apellido}]
    
        loading.dismiss();
    
         }
         else{
       this.msj.showError3('Resultado','Carnè o OV no encontrado.... ');
        this.identificador=''
        this.items=[]
        loading.dismiss();
    
         }
      //this.authService.getReglibreSext2(this.identificador ,'carne').then((data) => {
    
    
    
      }, (err) => {
    
        this.msj.showError3('Resultado','Carnè o OV no encontrado.... ');
        this.identificador=''
        this.items=[]
        loading.dismiss();
    
      });
    
    
    
    
    
    
     });
    
    });
    
    
    
    
         }
    
        }
    */
    Asignacioncalusac100CreatePage.prototype.updateProfileImage = function () {
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
                        _this.takePhotograph();
                    }
                },
                {
                    text: t1,
                    handler: function () {
                        _this.selectImage();
                    }
                }
            ]
        });
        actionSheet.present();
    };
    Asignacioncalusac100CreatePage.prototype.takePhotograph = function () {
        var _this = this;
        if (__WEBPACK_IMPORTED_MODULE_7__ionic_native_camera__["a" /* Camera */]['installed']()) {
            this._IMAGE
                .takePhotograph()
                .then(function (image) {
                _this.foto1img = image.toString();
            })
                .catch(function (err) {
                console.log(err);
            });
        }
        else {
            this.fileInput.nativeElement.click();
        }
    };
    Asignacioncalusac100CreatePage.prototype.selectImage = function () {
        var _this = this;
        if (__WEBPACK_IMPORTED_MODULE_7__ionic_native_camera__["a" /* Camera */]['installed']()) {
            this._IMAGE
                .selectPhotograph()
                .then(function (image) {
                _this.foto1img = image.toString();
            })
                .catch(function (err) {
                console.log(err);
            });
        }
        else {
            this.fileInput.nativeElement.click();
        }
    };
    Asignacioncalusac100CreatePage.prototype.processWebImage = function (event) {
        var _this = this;
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();
            reader.onload = function (readerEvent) {
                _this.image = readerEvent.target.result;
                _this._IMAGE.generateFromImage(_this.image, 600, 600, 1, function (data) {
                    _this.foto1img = data;
                });
            };
            reader.readAsDataURL(event.target.files[0]);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('fileInput'),
        __metadata("design:type", Object)
    ], Asignacioncalusac100CreatePage.prototype, "fileInput", void 0);
    Asignacioncalusac100CreatePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-asignacioncalusac100-create',template:/*ion-inline-start:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\CALUSAC\UBICACIONES\asignacioncalusac100-create\asignacioncalusac100-create.html"*/'<ion-header no-border class="opaque">\n  <ion-navbar  no-border-bottom>\n      <ion-title>Seleccione Horario</ion-title>\n      <ion-buttons start>\n          <button (click)="cancel()" icon-only ion-button padding-right>\n              <ion-icon name="md-close"></ion-icon>\n            </button>\n\n      </ion-buttons>\n\n    </ion-navbar>\n  </ion-header>\n  <ion-content fullscreen>\n    <form     [formGroup]="form"   text-wrap>\n      <ion-list>\n\n\n        <ion-item [hidden]="esconde" margin-bottom text-wrap>\n            <ion-label class="my-label18" color="secondary2"  stacked>Sede</ion-label>\n\n          <ion-select (ionChange)="onSelectChange($event)" [(ngModel)]="tipounidad" [formControl]="form.controls[\'tipounidad\']">\n              <ion-option text-wrap *ngFor="let item of vgrupo" [value]="item._id+\',\'+item.nombre" >{{item.nombre}} </ion-option>\n          </ion-select>\n\n\n       </ion-item>\n       <ion-item class="invalid" *ngIf="!form.controls.tipounidad.valid && (form.controls.tipounidad.dirty || form.controls.tipounidad.touched)" text-wrap>\n        <ion-icon name="warning"></ion-icon>\n       Ingrese un tipo de unidad academica\n       </ion-item>\n\n       <ion-item [hidden]="esconde"   margin-bottom text-wrap>\n\n        <ion-label   class="my-label18" color="secondary2"  stacked>Tipo </ion-label>\n\n        <ion-select  (ionChange)="onSelectChange2($event)"  [(ngModel)]="idtipogrupo" [formControl]="form.controls[\'idtipogrupo\']">\n            <ion-option text-wrap *ngFor="let item of vgrupo2" [value]="item._id+\',\'+item.nombre">{{item.nombre}}</ion-option>\n        </ion-select>\n\n\n     </ion-item>\n\n         <ion-item class="invalid" *ngIf="!form.controls.idtipogrupo.valid && (form.controls.idtipogrupo.dirty || form.controls.idtipogrupo.touched)" text-wrap>\n           <ion-icon name="warning"></ion-icon>\n           Ingrese un tipo valido\n          </ion-item>\n\n\n          <ion-item [hidden]="esconde"  margin-bottom text-wrap>\n\n            <ion-label class="my-label18" color="secondary2"  stacked>Idioma </ion-label>\n\n            <ion-select  (ionChange)="onSelectChange3($event)"  [(ngModel)]="ididioma" [formControl]="form.controls[\'ididioma\']">\n                <ion-option text-wrap *ngFor="let item of vgrupo3" [value]="item._id+\',\'+item.nombre">{{item.nombre}}</ion-option>\n            </ion-select>\n\n\n         </ion-item>\n\n             <ion-item class="invalid" *ngIf="!form.controls.ididioma.valid && (form.controls.ididioma.dirty || form.controls.tipounidad.touched)" text-wrap>\n               <ion-icon name="warning"></ion-icon>\n               Ingrese un idioma valido\n              </ion-item>\n\n\n\n              <ion-item margin-bottom>\n                <ion-label  class="my-label18" color="secondary2">CUI/ PASAPORTE</ion-label>\n                <ion-input\n                   type="text"\n                   [(ngModel)]="identificador" [formControl]="form.controls[\'identificador\']"\n                  ></ion-input>\n             </ion-item>\n             <ion-item class="invalid" *ngIf="!form.controls.identificador.valid && (form.controls.identificador.dirty || form.controls.identificador.touched)" text-wrap>\n               <ion-icon name="warning"></ion-icon>\n               Ingrese un documento de identificación valido\n              </ion-item>\n\n                <ion-item margin-bottom>\n                   <ion-label  class="my-label18" color="secondary2">Nombre</ion-label>\n                   <ion-input\n                      type="text"\n                      [(ngModel)]="nombre" [formControl]="form.controls[\'nombre\']"\n                     ></ion-input>\n                </ion-item>\n                <ion-item class="invalid" *ngIf="!form.controls.nombre.valid && (form.controls.nombre.dirty || form.controls.nombre.touched)" text-wrap>\n                  <ion-icon name="warning"></ion-icon>\n                  {{ \'NOMBRET\' | translate }}\n                 </ion-item>\n\n                 <ion-item-group>\n                  <ion-item>\n                     <img  *ngIf="image" [src]="image"   class="circle-pic"  height="150 px" width="150 px">\n                     <img  *ngIf="!image || image==\'\'" [src]="pofilel"   class="circle-pic"  height="150 px" width="150 px">\n                     <input   type="hidden"    name="imagen" [formControl]="form.controls[\'imagen\']"    [(ngModel)]="imagen">\n                  </ion-item>\n                  <ion-item>\n                      <a  ion-button    block  margin-bottom    color="secondary"  (click)="updateProfileImage()">               Adjunte copia de DPI o Pasaporte o Partida de nacimiento     </a>\n                      <input type="file" accept="image/*" #fileInput style="visibility: hidden; height: 0px" (change)="processWebImage($event)" />\n                   </ion-item>\n               </ion-item-group>\n\n\n          <ion-row >\n              <ion-col text-center>\n                <button [disabled]="!form.valid" ion-button block color="secondary" (click)="manageGallery()" strong>\n                 Asignar\n                </button>\n              </ion-col>\n            </ion-row>\n\n\n\n\n       </ion-list>\n    </form>\n\n\n  </ion-content>\n'/*ion-inline-end:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\CALUSAC\UBICACIONES\asignacioncalusac100-create\asignacioncalusac100-create.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__providers_image_image__["a" /* ImageProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3__providers__["d" /* NotificationProvider */], __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["F" /* ViewController */], __WEBPACK_IMPORTED_MODULE_3__providers__["a" /* Auth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */]])
    ], Asignacioncalusac100CreatePage);
    return Asignacioncalusac100CreatePage;
}());

//# sourceMappingURL=asignacioncalusac100-create.js.map

/***/ }),

/***/ 940:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Asignacioncalusac100CreatePageModule", function() { return Asignacioncalusac100CreatePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__asignacioncalusac100_create__ = __webpack_require__(1380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var Asignacioncalusac100CreatePageModule = /** @class */ (function () {
    function Asignacioncalusac100CreatePageModule() {
    }
    Asignacioncalusac100CreatePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__asignacioncalusac100_create__["a" /* Asignacioncalusac100CreatePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__asignacioncalusac100_create__["a" /* Asignacioncalusac100CreatePage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], Asignacioncalusac100CreatePageModule);
    return Asignacioncalusac100CreatePageModule;
}());

//# sourceMappingURL=asignacioncalusac100-create.module.js.map

/***/ })

});
//# sourceMappingURL=243.js.map