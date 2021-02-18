webpackJsonp([232],{

/***/ 1357:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AsignacioncalusacCreatePage; });
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








var AsignacioncalusacCreatePage = /** @class */ (function () {
    function AsignacioncalusacCreatePage(_IMAGE, alertCtrl, loadingCtrl, storage, msj, translateService, viewCtrl, authService, navCtrl, navParams, _FB, actionSheetCtrl, events) {
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
        this.rubro2 = '156';
        this.itemp2 = '';
        this.monto2 = '0';
        this.fecha = (new Date()).toISOString();
        this.dcui = false;
        this.dfecha_nac = false;
        this.dcarne = false;
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
        this.nivelaprobado = '';
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
    AsignacioncalusacCreatePage.prototype.ngOnInit = function () {
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
    AsignacioncalusacCreatePage.prototype.ionViewDidLoad = function () {
        this.fotottt = 'Adjunte fotografía personal';
        this.dcarne = false;
        this.nivelaprobado = '';
        this.datosobligatorios = true;
        if (this.navParams.get("record") == null) {
            this.dataxx = this.navParams.data.datax;
            if (this.navParams.data.op == 'Extranjero') {
                this.titulo2 = 'Asignación ' + 'Extranjero no centroamericano';
            }
            else {
                if (this.navParams.data.op == 'Extranjerocentroamericano') {
                    this.titulo2 = 'Asignación ' + 'Extranjero centroamericano';
                }
                else {
                    this.titulo2 = 'Asignación ' + this.navParams.data.op;
                }
            }
            if (this.navParams.data.op == 'Estudiante') {
                this.comprobantetrabcui = false;
                this.datosobligatorios = true;
                this.nombre = this.navParams.data.nombret;
                this.dcuiv = true;
                this.dnopasaportev = false;
                this.identificador = this.cui;
                this.direccion = '';
                this.telefono = '';
                this.correo = '';
                this.didentificadorv = false;
                this.nidentificador = 'CUI';
                this.nidentificador2 = 'CUI y Recibo de pago de inscripción USAC';
                this.dnopasaportev = false;
                this.comprobanteidentificador = true;
                this.ddependenciav = false;
                //this.cui=this.dataxx[0].cui
                //  this.carneusac=this.dataxx[0].carnet
                this.carneusac = this.navParams.data.carnex;
                this.carnecalusac = this.carnecalusac1;
                this.nivelacademico = 'Diversificado';
                this.fecha_nac = '';
                this.dependencia = 'na';
                this.nopasaporte = 'na';
                this.codpersonal = 'na';
                this.dcui = false;
                this.dcorreo = false;
                this.dtelefono = false;
                this.dnombre = false;
                this.ddireccion = false;
                /*
                   this.comprobantetrabcui=false;
                   this.datosobligatorios=false;
                   this.nombre=this.navParams.data.nombret
                
                   if(this.navParams.data.pasapp=='si')
                   {
                    this.dnopasaportev=true;
                    this.cui='na'
                    this.identificador=this.navParams.data.cuix
                    this.dcuiv=false;
                    this.didentificadorv=true;
                    this.nidentificador='PASAPORTE'
                this.nidentificador2='PASAPORTE'
                   }
                   else
                   {
                    this.dcuiv=true;
                    this.dnopasaportev=false;
                    this.identificador=this.cui
                    this.cui=this.navParams.data.cuix
                    this.direccion=this.dataxx[0].direccion;
                    this.telefono=this.dataxx[0].celular;
                    this.correo=this.dataxx[0].email;
                    this.didentificadorv=false;
                    this.nidentificador='CUI'
                this.nidentificador2='CUI'
                   }
                
                   this.dnopasaportev=false;
                
                   this.comprobanteidentificador=true;
                
                
                   this.ddependenciav=false;
                
                 //this.cui=this.dataxx[0].cui
                 //  this.carneusac=this.dataxx[0].carnet
                
                 this.carneusac=this.navParams.data.carnex
                
                 this.carnecalusac=this.carnecalusac1
                
                
                 this.nivelacademico= 'Diversificado';
                
                this.fecha_nac=''
                if(this.dataxx[0].sexo=='1')
                {
                 this.sexo='Masculino';
                }
                else{
                 this.sexo='Femenino';
                
                }
                this.dependencia='na'
                this.nopasaporte='na'
                this.codpersonal='na'
                
                
                
                
                 //this.monto='120'
                
                 //this.nombre=this.dataxx[0].nombre1 + ' ' + this.dataxx[0].nombre2 + ' ' + this.dataxx[0].primer_apellido + ' '+ this.dataxx[0].segundo_apellido;
                
                 this.dcui=true;
                 this.dcorreo=false;
                 this.dtelefono=false;
                
                 this.dnombre=true;
                 this.ddireccion=false;
                 */
            }
            if (this.navParams.data.op == 'Trabajador') {
                this.dnopasaportev = false;
                this.didentificadorv = true;
                this.ddependenciav = true;
                this.dcuiv = true;
                this.carnecalusac = this.carnecalusac1;
                this.comprobanteidentificador = true;
                this.comprobantetrabcui = true;
                this.nidentificador = 'Codigo Personal Trabajador';
                this.nidentificador2 = 'Voucher Trabajador';
                this.cui = '';
                this.dependencia = '';
                this.nopasaporte = 'na';
                this.codpersonal = '';
                this.dcui = false;
                this.dcorreo = false;
                this.dtelefono = false;
                this.dnombre = false;
                this.ddireccion = false;
            }
            if (this.navParams.data.op == 'Hijo Trabajador Adolescente') {
                this.dnopasaportev = false;
                this.didentificadorv = true;
                this.carnecalusac = this.carnecalusac1;
                this.dcuiv = true;
                this.ddependenciav = true;
                this.comprobanteidentificador = true;
                this.comprobantetrabcui = true;
                this.nidentificador = 'Codigo Personal Trabajador';
                this.nidentificador2 = 'Voucher Trabajador';
                this.cui = '';
                this.NDPI = 'Partida de nacimiento';
                this.dependencia = '';
                this.nopasaporte = 'na';
                this.codpersonal = '';
                this.dcui = false;
                this.dcorreo = false;
                this.dtelefono = false;
                this.dnombre = false;
                this.ddireccion = false;
            }
            if (this.navParams.data.op == 'Hijo Trabajador Adulto') {
                this.dnopasaportev = false;
                this.didentificadorv = true;
                this.dcuiv = true;
                this.ddependenciav = true;
                this.comprobanteidentificador = true;
                this.comprobantetrabcui = true;
                this.nidentificador = 'Codigo Personal Trabajador';
                this.nidentificador2 = 'Voucher Trabajador';
                this.cui = '';
                this.carnecalusac = this.carnecalusac1;
                this.dependencia = '';
                this.nopasaporte = 'na';
                this.codpersonal = '';
                this.dcui = false;
                this.dcorreo = false;
                this.dtelefono = false;
                this.dnombre = false;
                this.ddireccion = false;
            }
            if (this.navParams.data.op == 'Población') {
                this.dnopasaportev = false;
                this.didentificadorv = false;
                this.datosobligatorios = false;
                this.dcuiv = true;
                this.ddependenciav = false;
                this.comprobantetrabcui = false;
                this.comprobanteidentificador = true;
                this.nidentificador = 'DPI';
                this.nidentificador2 = 'DPI';
                this.carnecalusac = this.carnecalusac1;
                this.cui = 'na';
                this.dependencia = 'na';
                this.nopasaporte = 'na';
                this.codpersonal = 'na';
                this.dcui = false;
                this.dcorreo = false;
                this.dtelefono = false;
                this.dnombre = false;
                this.ddireccion = false;
            }
            if (this.navParams.data.op == 'Adolescente') {
                this.dnopasaportev = false;
                this.didentificadorv = true;
                this.comprobantetrabcui = false;
                this.datosobligatorios = false;
                this.dcuiv = true;
                this.carnecalusac = this.carnecalusac1;
                this.ddependenciav = false;
                this.comprobanteidentificador = true;
                this.nidentificador = 'No Partida de Nacimiento';
                this.nidentificador2 = 'Partida de Nacimiento';
                this.cui = 'na';
                this.dependencia = 'na';
                this.nopasaporte = 'na';
                this.codpersonal = 'na';
                this.dcui = false;
                this.dcorreo = false;
                this.dtelefono = false;
                this.dnombre = false;
                this.ddireccion = false;
            }
            if (this.navParams.data.op == 'Extranjero') {
                this.dnopasaportev = false;
                this.didentificadorv = true;
                this.datosobligatorios = false;
                this.dcuiv = false;
                this.ddependenciav = false;
                this.comprobanteidentificador = true;
                this.comprobantetrabcui = false;
                this.nidentificador = 'PASSAPORTE';
                this.nidentificador2 = 'PASSAPORTE';
                this.carnecalusac = this.carnecalusac1;
                this.cui = 'na';
                this.dependencia = 'na';
                this.nopasaporte = 'na';
                this.codpersonal = 'na';
                this.dcui = false;
                this.dcorreo = false;
                this.dtelefono = false;
                this.dnombre = false;
                this.ddireccion = false;
            }
            if (this.navParams.data.op == 'Extranjerocentroamericano') {
                this.dnopasaportev = false;
                this.didentificadorv = true;
                this.datosobligatorios = false;
                this.dcuiv = false;
                this.ddependenciav = false;
                this.comprobanteidentificador = true;
                this.comprobantetrabcui = false;
                this.nidentificador = 'PASSAPORTE';
                this.nidentificador2 = 'PASSAPORTE';
                this.carnecalusac = this.carnecalusac1;
                this.cui = 'na';
                this.dependencia = 'na';
                this.nopasaporte = 'na';
                this.codpersonal = 'na';
                this.dcui = false;
                this.dcorreo = false;
                this.dtelefono = false;
                this.dnombre = false;
                this.ddireccion = false;
            }
        }
    };
    AsignacioncalusacCreatePage.prototype.manageGallery2 = function (loading) {
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
        if (this.navParams.get("record") == null) {
            creat = 'Crea';
        }
        var estadoff = 'Pendiente de pago';
        if (this.sinivel == '1') {
            if (this.navParams.data.op == 'Estudiante') {
                estadoff = 'Pendiente de autorizar documento DPI';
            }
            if (this.navParams.data.op == 'Trabajador') {
                estadoff = 'Pendiente de autorizar Voucher trabajador y documento DPI';
            }
            if (this.navParams.data.op == 'Hijo Trabajador Adolescente') {
                estadoff = 'Pendiente de autorizar Voucher trabajador y documento DPI (Hijo Trabajador Adolescente)';
            }
            if (this.navParams.data.op == 'Hijo Trabajador Adulto') {
                estadoff = 'Pendiente de autorizar Voucher trabajador y documento DPI (Hijo Trabajador Adulto)';
            }
            if (this.navParams.data.op == 'Población') {
                estadoff = 'Pendiente de autorizar documento DPI';
            }
            if (this.navParams.data.op == 'Adolescente') {
                estadoff = 'Pendiente de autorizar documento Partida de Nacimiento';
            }
            if (this.navParams.data.op == 'Extranjero') {
                estadoff = 'Pendiente de autorizar documento PASSAPORTE';
            }
            if (this.navParams.data.op == 'Extranjerocentroamericano') {
                estadoff = 'Pendiente de autorizar documento PASSAPORTE';
            }
        }
        else {
            if (this.navParams.data.op == 'Estudiante') {
                estadoff = 'Pendiente de autoriza constancia de nota o ubicación y documento DPI';
            }
            if (this.navParams.data.op == 'Trabajador') {
                estadoff = 'Pendiente de autoriza constancia de nota o ubicación, Voucher trabajador y documento DPI';
            }
            if (this.navParams.data.op == 'Hijo Trabajador Adolescente') {
                estadoff = 'Pendiente de autoriza constancia de nota o ubicación,  Voucher trabajador y partida de nacimiento (Hijo Trabajador Adolescente)';
            }
            if (this.navParams.data.op == 'Hijo Trabajador Adulto') {
                estadoff = 'Pendiente de autoriza constancia de nota o ubicación, Voucher trabajador y documento DPI (Hijo Trabajador Adulto)';
            }
            if (this.navParams.data.op == 'Población') {
                estadoff = 'Pendiente de autoriza constancia de nota o ubicación  y documento DPI';
            }
            if (this.navParams.data.op == 'Adolescente') {
                estadoff = 'Pendiente de autoriza constancia de nota o ubicación  y partida de nacimiento';
            }
            if (this.navParams.data.op == 'Extranjero') {
                estadoff = 'Pendiente de autoriza constancia de nota o ubicación  y documento PASAPORTE';
            }
            if (this.navParams.data.op == 'Extranjerocentroamericano') {
                estadoff = 'Pendiente de autoriza constancia de nota o ubicación  y documento PASAPORTE';
            }
        }
        if (this.carnecalusac1) { }
        else {
            this.carnecalusac1 = '';
        }
        var estadot = 'NUEVOS';
        if (this.nivelaprobado != '') {
            estadot = 'AUTORIZADO';
            estadoff = 'Pendiente de pago';
        }
        var options = {
            nombre: this.nombre,
            tipounidad: { id: this.idtipounidad2[0], nombre: this.idtipounidad2[1] },
            unidadacademica: { id: this.idunidadacademica2[0], nombre: this.idunidadacademica2[1], codigo: this.codigounidad },
            periodo: { id: this.idperiodo2[0], nombre: this.idperiodo2[1] },
            idestudiante: this.username,
            idinterno: this.username,
            no_orientacion: '123',
            tipoa: this.navParams.data.op,
            carnecalusac: this.carnecalusac1,
            carneusac: this.carneusac,
            monto: this.monto,
            rubro: this.rubroT,
            codigocurso: this.rubro,
            identificador: this.identificador,
            tipopago: this.idpago2[0],
            foto1: this.imagen,
            foto2: this.imagen2,
            foto4: this.imagen4,
            foto3: this.imagen3,
            ididioma: this.ididioma,
            idtipogrupo: this.idtipogrupo,
            idtipocurso: this.idtipocurso,
            fechasiif: this.fechax,
            rubrot: this.rubroT,
            imprime: this.imprimefinal,
            monto2: this.monto2,
            rubro2: this.rubro2,
            itemp2: this.itemp2,
            ano: this.ano,
            nivel: this.nivel,
            jornada: this.idjornada2[0],
            resultadocalusac: this.resultado,
            tipoasignacion: 'enlinea',
            fechanac: this.fecha_nac,
            cui: this.cui,
            nopasaporte: this.nopasaporte,
            direccion: this.direccion,
            telefono: this.telefono,
            correo: String(this.correo).toLowerCase().trim(),
            llave: this.llave,
            sexo: this.sexo,
            nidentificador: this.nidentificador,
            nivelacademico: this.nivelacademico,
            codpersonal: this.codpersonal,
            dependencia: this.dependencia,
            noboletapago: this.ordenpago,
            estadopago: estadoff,
            estadooperador: estadot,
            bitacora: { idempresa: this.idempresa, idafiliado: '', email: this.username, permiso: creat, accion: creat + ' asigna calusac ' }
        };
        if (this.navParams.get("record") == null) {
            if (options) {
                this.authService.createReg2b('', options, 'asignacalusacs').then(function (result) {
                    loading.dismiss();
                    if (_this.nivelaprobado != '') {
                        _this.msj.showError3('Mensaje', 'Asignación realizada con éxito. <br><br> Por favor genere su orden de pago y continue con su asignación.');
                    }
                    else {
                        _this.msj.showError3('Mensaje', 'Asignación realizada con éxito. <br><br> Se le enviará un correo cuando su asignación sea aprobada. <br><br> En caso de ser rechazada su papelería, se le enviará un correo para que modifique la información.');
                    }
                    //   if (!this.form.valid) { return; }
                    /*
                    if(this.codigonn>0)
                     {
                       this.msj.showError3('Mensaje','Asignación realizada con exito, Se le enviara un correo cuando su asignacíon sea aprobada.');
                     }
                     else
                     {
                       if(this.navParams.data.op=='Estudiante')
                       {
                         this.msj.showError3('Mensaje','Asignación realizada con exito, por favor imprima orden de pago y continue con la asignación. ');
                       }
                       else
                       {
                         this.msj.showError3('Mensaje','Asignación realizada con exito, Se le enviara un correo cuando su asignacíon sea aprobada.');
         
                       }
         
                     }
         
         */
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
                  this.authService.createReg(this._ID,options,'asignacalusacs').then((result) => {
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
    AsignacioncalusacCreatePage.prototype.validaraiz = function () {
    };
    AsignacioncalusacCreatePage.prototype.davariable = function (cad, varx) {
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
    AsignacioncalusacCreatePage.prototype.random = function () {
        var rand = Math.floor(Math.random() * 20) + 1;
        return rand;
    };
    AsignacioncalusacCreatePage.prototype.manageGallery = function () {
        var _this = this;
        if (this.username == '') {
            this.msj.showError3('Mensaje', 'Existe un problema con su dispositivo , no existe usuario');
            return;
        }
        if (!this.username) {
            this.msj.showError3('Mensaje', 'Existe un problema con su dispositivo , no existe usuario');
            return;
        }
        if (this.image2 == undefined || this.image2 == "./assets/img/photo256.png" || this.image2 == '') {
            this.msj.showError3('Mensaje', 'Adjunte fotografía personal');
            return;
        }
        if (this.navParams.data.op == 'Estudiante') {
            if (this.fecha_nac == undefined || this.fecha_nac == '') {
                this.msj.showError3('Mensaje', 'Ingrese una fecha de nacimiento valida');
                return;
            }
            if (this.cui == '') {
                this.msj.showError3('Mensaje', 'Ingrese un cui valido');
                return;
            }
            if (this.navParams.data.pasapp == 'si') { }
            else {
                this.identificador = this.cui;
                if (this.cui.length !== 13) {
                    this.msj.showError3('Mensaje', 'CUI no valido , debe contener 13 digitos');
                    return;
                }
            }
            if (this.nopasaporte == '') {
                this.msj.showError3('Mensaje', 'Ingrese un no pasaporte valido');
                return;
            }
            if (this.nombre == '' || this.nombre == undefined) {
                this.msj.showError3('Mensaje', 'Ingrese un nombre valido');
                return;
            }
            if (this.direccion == '' || this.direccion == undefined) {
                this.msj.showError3('Mensaje', 'Ingrese una direccion valida');
                return;
            }
            if (this.telefono == '' || this.telefono == undefined) {
                this.msj.showError3('Mensaje', 'Ingrese un telefono valido');
                return;
            }
            if (this.telefono.length != 8) {
                this.msj.showError3('Mensaje', 'Teléfono no valido , debe contener 8 digitos');
                return;
            }
            if (this.correo == '' || this.correo == undefined) {
                this.msj.showError3('Mensaje', 'Ingrese un correo valido');
                return;
            }
            if (this.sexo == '' || this.sexo == undefined) {
                this.msj.showError3('Mensaje', 'Ingrese un sexo valido');
                return;
            }
            if (this.nivelacademico == '' || this.nivelacademico == undefined) {
                this.msj.showError3('Mensaje', 'Ingrese un nivel academico valido');
                return;
            }
            if (this.identificador == '' || this.identificador == undefined) {
                this.msj.showError3('Mensaje', 'Ingrese una identificador valido');
                return;
            }
            if (this.dependencia == '' || this.dependencia == undefined) {
                this.msj.showError3('Mensaje', 'Ingrese una dependecia valida');
                return;
            }
            //cui
            // if(this.image4==undefined  || this.image4=="./assets/img/photo256.png" || this.image4=='')    {     this.msj.showError3('Mensaje','Adjunte una imagen de CUI valido');     return;  }
            if (this.idtipounidad2 == undefined) {
                this.msj.showError3('Mensaje', 'Seleccione una sede valida');
                return;
            }
            if (!this.idtipounidad2[0]) {
                this.msj.showError3('Mensaje', 'Seleccione una sede valida');
                return;
            }
            if (this.unidadacademica == undefined) {
                this.msj.showError3('Mensaje', 'Seleccione un curso valido');
                return;
            }
            if (!this.unidadacademica[0]) {
                this.msj.showError3('Mensaje', 'Seleccione un curso valido');
                return;
            }
            if (this.idjornada2 == undefined) {
                this.msj.showError3('Mensaje', 'Seleccione una jornada valida');
                return;
            }
            if (!this.idjornada2[0]) {
                this.msj.showError3('Mensaje', 'Seleccione una jornada valida');
                return;
            }
            if (this.tipopago == undefined) {
                this.msj.showError3('Mensaje', 'Seleccione un nivel valido');
                return;
            }
            if (!this.tipopago[0]) {
                this.msj.showError3('Mensaje', 'Seleccione un nivel valido');
                return;
            }
            if (this.idperiodo2 == undefined) {
                this.msj.showError3('Mensaje', 'Seleccione la unidad /curso valido/ curso no tiene planificación = periodo');
                return;
            }
            if (!this.idperiodo2[1]) {
                this.msj.showError3('Mensaje', 'Seleccione la unidad /curso valido/ curso no tiene planificación = periodo');
                return;
            }
            if (this.codigonn > 0) {
                if (this.comprobantenivel == true) {
                    if (this.image == undefined || this.image == "./assets/img/photo256.png" || this.image == '') {
                        this.msj.showError3('Mensaje', 'Adjunte Imagen de Costancia de nota o Constancia de ubicación valida');
                        return;
                    }
                }
                if (this.image3 == undefined || this.image3 == "./assets/img/photo256.png" || this.image3 == '') {
                    this.msj.showError3('Mensaje', 'Adjunte una imagen de ' + this.nidentificador2 + ' valida');
                    return;
                }
                //  if(this.carnecalusac1==undefined || this.carnecalusac1=='')    {     this.msj.showError3('Mensaje','Ingrese un carne calusac valido');     return;  }
            }
            else {
                if (this.image3 == undefined || this.image3 == "./assets/img/photo256.png" || this.image3 == '') {
                    this.msj.showError3('Mensaje', 'Adjunte una imagen de ' + this.nidentificador2 + ' valida');
                    return;
                }
            }
        }
        if (this.navParams.data.op == 'Trabajador') {
            if (this.fecha_nac == undefined) {
                this.msj.showError3('Mensaje', 'Ingrese una fecha de nacimiento valida');
                return;
            }
            if (this.cui == '') {
                this.msj.showError3('Mensaje', 'Ingrese un cui valido');
                return;
            }
            if (this.cui.length !== 13) {
                this.msj.showError3('Mensaje', 'CUI no valido , debe contener 13 digitos');
                return;
            }
            if (this.nopasaporte == '') {
                this.msj.showError3('Mensaje', 'Ingrese un no pasaporte valido');
                return;
            }
            if (this.nombre == '' || this.nombre == undefined) {
                this.msj.showError3('Mensaje', 'Ingrese un nombre valido');
                return;
            }
            if (this.direccion == '' || this.direccion == undefined) {
                this.msj.showError3('Mensaje', 'Ingrese una direccion valida');
                return;
            }
            if (this.telefono == '' || this.telefono == undefined) {
                this.msj.showError3('Mensaje', 'Ingrese un telefono valido');
                return;
            }
            if (this.telefono.length !== 8) {
                this.msj.showError3('Mensaje', 'Teléfono no valido , debe contener 8 digitos');
                return;
            }
            if (this.correo == '' || this.correo == undefined) {
                this.msj.showError3('Mensaje', 'Ingrese un correo valido');
                return;
            }
            if (this.sexo == '' || this.sexo == undefined) {
                this.msj.showError3('Mensaje', 'Ingrese un sexo valido');
                return;
            }
            if (this.nivelacademico == '' || this.nivelacademico == undefined) {
                this.msj.showError3('Mensaje', 'Ingrese un nivel academico valido');
                return;
            }
            if (this.identificador == '' || this.identificador == undefined) {
                this.msj.showError3('Mensaje', 'Ingrese una identificador valido');
                return;
            }
            if (this.dependencia == '' || this.dependencia == undefined) {
                this.msj.showError3('Mensaje', 'Ingrese una dependecia valida');
                return;
            }
            if (this.image4 == undefined || this.image4 == "./assets/img/photo256.png" || this.image4 == '') {
                this.msj.showError3('Mensaje', 'Adjunte una imagen de DPI valido');
                return;
            }
            if (this.idtipounidad2 == undefined) {
                this.msj.showError3('Mensaje', 'Seleccione una sede valida');
                return;
            }
            if (!this.idtipounidad2[0]) {
                this.msj.showError3('Mensaje', 'Seleccione una sede valida');
                return;
            }
            if (this.unidadacademica == undefined) {
                this.msj.showError3('Mensaje', 'Seleccione un curso valido');
                return;
            }
            if (!this.unidadacademica[0]) {
                this.msj.showError3('Mensaje', 'Seleccione un curso valido');
                return;
            }
            if (this.idjornada2 == undefined) {
                this.msj.showError3('Mensaje', 'Seleccione una jornada valida');
                return;
            }
            if (!this.idjornada2[0]) {
                this.msj.showError3('Mensaje', 'Seleccione una jornada valida');
                return;
            }
            if (this.tipopago == undefined) {
                this.msj.showError3('Mensaje', 'Seleccione un nivel valido');
                return;
            }
            if (!this.tipopago[0]) {
                this.msj.showError3('Mensaje', 'Seleccione un nivel valido');
                return;
            }
            if (this.idperiodo2 == undefined) {
                this.msj.showError3('Mensaje', 'Seleccione la unidad /curso valido/ curso no tiene planificación = periodo');
                return;
            }
            if (!this.idperiodo2[1]) {
                this.msj.showError3('Mensaje', 'Seleccione la unidad /curso valido/ curso no tiene planificación = periodo');
                return;
            }
            if (this.codigonn > 0) {
                if (this.image3 == undefined || this.image3 == "./assets/img/photo256.png" || this.image3 == '') {
                    this.msj.showError3('Mensaje', 'Adjunte una imagen de ' + this.nidentificador2 + ' valida');
                    return;
                }
                if (this.comprobantenivel == true) {
                    if (this.image == undefined || this.image == "./assets/img/photo256.png" || this.image == '') {
                        this.msj.showError3('Mensaje', 'Adjunte Imagen de Costancia de nota o Constancia de ubicación valida');
                        return;
                    }
                }
                //     if(this.carnecalusac1==undefined || this.carnecalusac1=='')    {     this.msj.showError3('Mensaje','Ingrese un carne calusac valido');     return;  }
            }
            else {
                if (this.image3 == undefined || this.image3 == "./assets/img/photo256.png" || this.image3 == '') {
                    this.msj.showError3('Mensaje', 'Adjunte una imagen de ' + this.nidentificador2 + ' valida');
                    return;
                }
            }
        }
        if (this.navParams.data.op == 'Hijo Trabajador Adolescente') {
            if (this.fecha_nac == undefined) {
                this.msj.showError3('Mensaje', 'Ingrese una fecha de nacimiento valida');
                return;
            }
            if (this.cui == '') {
                this.msj.showError3('Mensaje', 'Ingrese un cui valido');
                return;
            }
            if (this.nopasaporte == '') {
                this.msj.showError3('Mensaje', 'Ingrese un no pasaporte valido');
                return;
            }
            if (this.nombre == '' || this.nombre == undefined) {
                this.msj.showError3('Mensaje', 'Ingrese un nombre valido');
                return;
            }
            if (this.direccion == '' || this.direccion == undefined) {
                this.msj.showError3('Mensaje', 'Ingrese una direccion valida');
                return;
            }
            if (this.telefono == '' || this.telefono == undefined) {
                this.msj.showError3('Mensaje', 'Ingrese un telefono valido');
                return;
            }
            if (this.telefono.length !== 8) {
                this.msj.showError3('Mensaje', 'Teléfono no valido , debe contener 8 digitos');
                return;
            }
            if (this.correo == '' || this.correo == undefined) {
                this.msj.showError3('Mensaje', 'Ingrese un correo valido');
                return;
            }
            if (this.sexo == '' || this.sexo == undefined) {
                this.msj.showError3('Mensaje', 'Ingrese un sexo valido');
                return;
            }
            if (this.nivelacademico == '' || this.nivelacademico == undefined) {
                this.msj.showError3('Mensaje', 'Ingrese un nivel academico valido');
                return;
            }
            if (this.identificador == '' || this.identificador == undefined) {
                this.msj.showError3('Mensaje', 'Ingrese una identificador valido');
                return;
            }
            if (this.dependencia == '' || this.dependencia == undefined) {
                this.msj.showError3('Mensaje', 'Ingrese una dependecia valida');
                return;
            }
            if (this.image4 == undefined || this.image4 == "./assets/img/photo256.png" || this.image4 == '') {
                this.msj.showError3('Mensaje', 'Adjunte una imagen de DPI valido');
                return;
            }
            if (this.idtipounidad2 == undefined) {
                this.msj.showError3('Mensaje', 'Seleccione una sede valida');
                return;
            }
            if (!this.idtipounidad2[0]) {
                this.msj.showError3('Mensaje', 'Seleccione una sede valida');
                return;
            }
            if (this.unidadacademica == undefined) {
                this.msj.showError3('Mensaje', 'Seleccione un curso valido');
                return;
            }
            if (!this.unidadacademica[0]) {
                this.msj.showError3('Mensaje', 'Seleccione un curso valido');
                return;
            }
            if (this.idjornada2 == undefined) {
                this.msj.showError3('Mensaje', 'Seleccione una jornada valida');
                return;
            }
            if (!this.idjornada2[0]) {
                this.msj.showError3('Mensaje', 'Seleccione una jornada valida');
                return;
            }
            if (this.tipopago == undefined) {
                this.msj.showError3('Mensaje', 'Seleccione un nivel valido');
                return;
            }
            if (!this.tipopago[0]) {
                this.msj.showError3('Mensaje', 'Seleccione un nivel valido');
                return;
            }
            if (this.idperiodo2 == undefined) {
                this.msj.showError3('Mensaje', 'Seleccione la unidad /curso valido/ curso no tiene planificación = periodo');
                return;
            }
            if (!this.idperiodo2[1]) {
                this.msj.showError3('Mensaje', 'Seleccione la unidad /curso valido/ curso no tiene planificación = periodo');
                return;
            }
            if (this.codigonn > 0) {
                if (this.image3 == undefined || this.image3 == "./assets/img/photo256.png" || this.image3 == '') {
                    this.msj.showError3('Mensaje', 'Adjunte una imagen de ' + this.nidentificador2 + ' valida');
                    return;
                }
                if (this.comprobantenivel == true) {
                    if (this.image == undefined || this.image == "./assets/img/photo256.png" || this.image == '') {
                        this.msj.showError3('Mensaje', 'Adjunte Imagen de Costancia de nota o Constancia de ubicación valida');
                        return;
                    }
                }
                //   if(this.carnecalusac1==undefined || this.carnecalusac1=='')    {     this.msj.showError3('Mensaje','Ingrese un carne calusac valido');     return;  }
            }
            else {
                if (this.image3 == undefined || this.image3 == "./assets/img/photo256.png" || this.image3 == '') {
                    this.msj.showError3('Mensaje', 'Adjunte una imagen de ' + this.nidentificador2 + ' valida');
                    return;
                }
            }
        }
        if (this.navParams.data.op == 'Hijo Trabajador Adulto') {
            if (this.dfecha_nac == undefined) {
                this.msj.showError3('Mensaje', 'Ingrese una fecha de nacimiento valida');
                return;
            }
            if (this.fecha_nac == undefined) {
                this.msj.showError3('Mensaje', 'Ingrese una fecha de nacimiento valida');
                return;
            }
            if (this.cui == '') {
                this.msj.showError3('Mensaje', 'Ingrese un cui valido');
                return;
            }
            if (this.cui.length !== 13) {
                this.msj.showError3('Mensaje', 'CUI no valido , debe contener 13 digitos');
                return;
            }
            if (this.nopasaporte == '') {
                this.msj.showError3('Mensaje', 'Ingrese un no pasaporte valido');
                return;
            }
            if (this.nombre == '' || this.nombre == undefined) {
                this.msj.showError3('Mensaje', 'Ingrese un nombre valido');
                return;
            }
            if (this.direccion == '' || this.direccion == undefined) {
                this.msj.showError3('Mensaje', 'Ingrese una direccion valida');
                return;
            }
            if (this.telefono == '' || this.telefono == undefined) {
                this.msj.showError3('Mensaje', 'Ingrese un telefono valido');
                return;
            }
            if (this.telefono.length !== 8) {
                this.msj.showError3('Mensaje', 'Teléfono no valido , debe contener 8 digitos');
                return;
            }
            if (this.correo == '' || this.correo == undefined) {
                this.msj.showError3('Mensaje', 'Ingrese un correo valido');
                return;
            }
            if (this.sexo == '' || this.sexo == undefined) {
                this.msj.showError3('Mensaje', 'Ingrese un sexo valido');
                return;
            }
            if (this.nivelacademico == '' || this.nivelacademico == undefined) {
                this.msj.showError3('Mensaje', 'Ingrese un nivel academico valido');
                return;
            }
            if (this.identificador == '' || this.identificador == undefined) {
                this.msj.showError3('Mensaje', 'Ingrese una identificador valido');
                return;
            }
            if (this.dependencia == '' || this.dependencia == undefined) {
                this.msj.showError3('Mensaje', 'Ingrese una dependecia valida');
                return;
            }
            if (this.image4 == undefined || this.image4 == "./assets/img/photo256.png" || this.image4 == '') {
                this.msj.showError3('Mensaje', 'Adjunte una imagen de DPI valido');
                return;
            }
            if (this.idtipounidad2 == undefined) {
                this.msj.showError3('Mensaje', 'Seleccione una sede valida');
                return;
            }
            if (!this.idtipounidad2[0]) {
                this.msj.showError3('Mensaje', 'Seleccione una sede valida');
                return;
            }
            if (this.unidadacademica == undefined) {
                this.msj.showError3('Mensaje', 'Seleccione un curso valido');
                return;
            }
            if (!this.unidadacademica[0]) {
                this.msj.showError3('Mensaje', 'Seleccione un curso valido');
                return;
            }
            if (this.idjornada2 == undefined) {
                this.msj.showError3('Mensaje', 'Seleccione una jornada valida');
                return;
            }
            if (!this.idjornada2[0]) {
                this.msj.showError3('Mensaje', 'Seleccione una jornada valida');
                return;
            }
            if (this.tipopago == undefined) {
                this.msj.showError3('Mensaje', 'Seleccione un nivel valido');
                return;
            }
            if (!this.tipopago[0]) {
                this.msj.showError3('Mensaje', 'Seleccione un nivel valido');
                return;
            }
            if (this.idperiodo2 == undefined) {
                this.msj.showError3('Mensaje', 'Seleccione la unidad /curso valido/ curso no tiene planificación = periodo');
                return;
            }
            if (!this.idperiodo2[1]) {
                this.msj.showError3('Mensaje', 'Seleccione la unidad /curso valido/ curso no tiene planificación = periodo');
                return;
            }
            if (this.codigonn > 0) {
                if (this.comprobantenivel == true) {
                    if (this.image == undefined || this.image == "./assets/img/photo256.png" || this.image == '') {
                        this.msj.showError3('Mensaje', 'Adjunte Imagen de Costancia de nota o Constancia de ubicación valida');
                        return;
                    }
                }
                if (this.image3 == undefined || this.image3 == "./assets/img/photo256.png" || this.image3 == '') {
                    this.msj.showError3('Mensaje', 'Adjunte una imagen de ' + this.nidentificador2 + ' valida');
                    return;
                }
                //   if(this.carnecalusac1==undefined || this.carnecalusac1=='')    {     this.msj.showError3('Mensaje','Ingrese un carne calusac valido');     return;  }
            }
            else {
                if (this.image3 == undefined || this.image3 == "./assets/img/photo256.png" || this.image3 == '') {
                    this.msj.showError3('Mensaje', 'Adjunte una imagen de ' + this.nidentificador2 + ' valida');
                    return;
                }
            }
        }
        if (this.navParams.data.op == 'Población') {
            if (this.fecha_nac == undefined) {
                this.msj.showError3('Mensaje', 'Ingrese una fecha de nacimiento valida');
                return;
            }
            if (this.cui == '') {
                this.msj.showError3('Mensaje', 'Ingrese un cui valido');
                return;
            }
            if (this.cui.length !== 13) {
                this.msj.showError3('Mensaje', 'CUI no valido , debe contener 13 digitos');
                return;
            }
            this.identificador = this.cui;
            if (this.nopasaporte == '') {
                this.msj.showError3('Mensaje', 'Ingrese un no pasaporte valido');
                return;
            }
            if (this.nombre == '' || this.nombre == undefined) {
                this.msj.showError3('Mensaje', 'Ingrese un nombre valido');
                return;
            }
            if (this.direccion == '' || this.direccion == undefined) {
                this.msj.showError3('Mensaje', 'Ingrese una direccion valida');
                return;
            }
            if (this.telefono == '' || this.telefono == undefined) {
                this.msj.showError3('Mensaje', 'Ingrese un telefono valido');
                return;
            }
            if (this.telefono.length !== 8) {
                this.msj.showError3('Mensaje', 'Teléfono no valido , debe contener 8 digitos');
                return;
            }
            if (this.correo == '' || this.correo == undefined) {
                this.msj.showError3('Mensaje', 'Ingrese un correo valido');
                return;
            }
            if (this.sexo == '' || this.sexo == undefined) {
                this.msj.showError3('Mensaje', 'Ingrese un sexo valido');
                return;
            }
            if (this.nivelacademico == '' || this.nivelacademico == undefined) {
                this.msj.showError3('Mensaje', 'Ingrese un nivel academico valido');
                return;
            }
            // if(this.identificador==''|| this.identificador==undefined)  {     this.msj.showError3('Mensaje','Ingrese una identificador valido');     return;  }
            // if(this.dependencia==''|| this.dependencia==undefined)  {     this.msj.showError3('Mensaje','Ingrese una dependecia valida');     return;  }
            // if(this.image4==undefined  || this.image4=="./assets/img/photo256.png" || this.image4=='')    {     this.msj.showError3('Mensaje','Adjunte una imagen de DPI valido');     return;  }
            if (this.idtipounidad2 == undefined) {
                this.msj.showError3('Mensaje', 'Seleccione una sede valida');
                return;
            }
            if (!this.idtipounidad2[0]) {
                this.msj.showError3('Mensaje', 'Seleccione una sede valida');
                return;
            }
            if (this.unidadacademica == undefined) {
                this.msj.showError3('Mensaje', 'Seleccione un curso valido');
                return;
            }
            if (!this.unidadacademica[0]) {
                this.msj.showError3('Mensaje', 'Seleccione un curso valido');
                return;
            }
            if (this.idjornada2 == undefined) {
                this.msj.showError3('Mensaje', 'Seleccione una jornada valida');
                return;
            }
            if (!this.idjornada2[0]) {
                this.msj.showError3('Mensaje', 'Seleccione una jornada valida');
                return;
            }
            if (this.tipopago == undefined) {
                this.msj.showError3('Mensaje', 'Seleccione un nivel valido');
                return;
            }
            if (!this.tipopago[0]) {
                this.msj.showError3('Mensaje', 'Seleccione un nivel valido');
                return;
            }
            if (this.idperiodo2 == undefined) {
                this.msj.showError3('Mensaje', 'Seleccione la unidad /curso valido/ curso no tiene planificación = periodo');
                return;
            }
            if (!this.idperiodo2[1]) {
                this.msj.showError3('Mensaje', 'Seleccione la unidad /curso valido/ curso no tiene planificación = periodo');
                return;
            }
            if (this.codigonn > 0) {
                if (this.image3 == undefined || this.image3 == "./assets/img/photo256.png" || this.image3 == '') {
                    this.msj.showError3('Mensaje', 'Adjunte una imagen de ' + this.nidentificador2 + ' valida');
                    return;
                }
                if (this.comprobantenivel == true) {
                    if (this.image == undefined || this.image == "./assets/img/photo256.png" || this.image == '') {
                        this.msj.showError3('Mensaje', 'Adjunte Imagen de Costancia de nota o Constancia de ubicación valida');
                        return;
                    }
                }
                //   if(this.carnecalusac1==undefined || this.carnecalusac1=='')    {     this.msj.showError3('Mensaje','Ingrese un carne calusac valido');     return;  }
            }
            else {
                if (this.image3 == undefined || this.image3 == "./assets/img/photo256.png" || this.image3 == '') {
                    this.msj.showError3('Mensaje', 'Adjunte una imagen de ' + this.nidentificador2 + ' valida');
                    return;
                }
            }
        }
        if (this.navParams.data.op == 'Adolescente') {
            if (this.fecha_nac == undefined) {
                this.msj.showError3('Mensaje', 'Ingrese una fecha de nacimiento valida');
                return;
            }
            if (this.cui == '') {
                this.msj.showError3('Mensaje', 'Ingrese un cui valido');
                return;
            }
            if (this.nopasaporte == '') {
                this.msj.showError3('Mensaje', 'Ingrese un no pasaporte valido');
                return;
            }
            if (this.nombre == '' || this.nombre == undefined) {
                this.msj.showError3('Mensaje', 'Ingrese un nombre valido');
                return;
            }
            if (this.direccion == '' || this.direccion == undefined) {
                this.msj.showError3('Mensaje', 'Ingrese una direccion valida');
                return;
            }
            if (this.telefono == '' || this.telefono == undefined) {
                this.msj.showError3('Mensaje', 'Ingrese un telefono valido');
                return;
            }
            if (this.telefono.length !== 8) {
                this.msj.showError3('Mensaje', 'Teléfono no valido , debe contener 8 digitos');
                return;
            }
            if (this.correo == '' || this.correo == undefined) {
                this.msj.showError3('Mensaje', 'Ingrese un correo valido');
                return;
            }
            if (this.sexo == '' || this.sexo == undefined) {
                this.msj.showError3('Mensaje', 'Ingrese un sexo valido');
                return;
            }
            if (this.nivelacademico == '' || this.nivelacademico == undefined) {
                this.msj.showError3('Mensaje', 'Ingrese un nivel academico valido');
                return;
            }
            if (this.identificador == '' || this.identificador == undefined) {
                this.msj.showError3('Mensaje', 'Ingrese una identificador valido');
                return;
            }
            //  if(this.dependencia==''|| this.dependencia==undefined)  {     this.msj.showError3('Mensaje','Ingrese una dependecia valida');     return;  }
            // if(this.image4==undefined  || this.image4=="./assets/img/photo256.png" || this.image4=='')    {     this.msj.showError3('Mensaje','Adjunte una imagen de DPI valido');     return;  }
            if (this.idtipounidad2 == undefined) {
                this.msj.showError3('Mensaje', 'Seleccione una sede valida');
                return;
            }
            if (!this.idtipounidad2[0]) {
                this.msj.showError3('Mensaje', 'Seleccione una sede valida');
                return;
            }
            if (this.unidadacademica == undefined) {
                this.msj.showError3('Mensaje', 'Seleccione un curso valido');
                return;
            }
            if (!this.unidadacademica[0]) {
                this.msj.showError3('Mensaje', 'Seleccione un curso valido');
                return;
            }
            if (this.idjornada2 == undefined) {
                this.msj.showError3('Mensaje', 'Seleccione una jornada valida');
                return;
            }
            if (!this.idjornada2[0]) {
                this.msj.showError3('Mensaje', 'Seleccione una jornada valida');
                return;
            }
            if (this.tipopago == undefined) {
                this.msj.showError3('Mensaje', 'Seleccione un nivel valido');
                return;
            }
            if (!this.tipopago[0]) {
                this.msj.showError3('Mensaje', 'Seleccione un nivel valido');
                return;
            }
            if (this.idperiodo2 == undefined) {
                this.msj.showError3('Mensaje', 'Seleccione la unidad /curso valido/ curso no tiene planificación = periodo');
                return;
            }
            if (!this.idperiodo2[1]) {
                this.msj.showError3('Mensaje', 'Seleccione la unidad /curso valido/ curso no tiene planificación = periodo');
                return;
            }
            if (this.codigonn > 0) {
                if (this.image3 == undefined || this.image3 == "./assets/img/photo256.png" || this.image3 == '') {
                    this.msj.showError3('Mensaje', 'Adjunte una imagen de ' + this.nidentificador2 + ' valida');
                    return;
                }
                if (this.comprobantenivel == true) {
                    if (this.image == undefined || this.image == "./assets/img/photo256.png" || this.image == '') {
                        this.msj.showError3('Mensaje', 'Adjunte Imagen de Costancia de nota o Constancia de ubicación valida');
                        return;
                    }
                }
                //   if(this.carnecalusac1==undefined || this.carnecalusac1=='')    {     this.msj.showError3('Mensaje','Ingrese un carne calusac valido');     return;  }
            }
            else {
                if (this.image3 == undefined || this.image3 == "./assets/img/photo256.png" || this.image3 == '') {
                    this.msj.showError3('Mensaje', 'Adjunte una imagen de ' + this.nidentificador2 + ' valida');
                    return;
                }
            }
        }
        if (this.navParams.data.op == 'Extranjero') {
            if (this.fecha_nac == undefined) {
                this.msj.showError3('Mensaje', 'Ingrese una fecha de nacimiento valida');
                return;
            }
            if (this.nopasaporte == '') {
                this.msj.showError3('Mensaje', 'Ingrese un no pasaporte valido');
                return;
            }
            if (this.nombre == '' || this.nombre == undefined) {
                this.msj.showError3('Mensaje', 'Ingrese un nombre valido');
                return;
            }
            if (this.direccion == '' || this.direccion == undefined) {
                this.msj.showError3('Mensaje', 'Ingrese una direccion valida');
                return;
            }
            if (this.telefono == '' || this.telefono == undefined) {
                this.msj.showError3('Mensaje', 'Ingrese un telefono valido');
                return;
            }
            if (this.telefono.length !== 8) {
                this.msj.showError3('Mensaje', 'Teléfono no valido , debe contener 8 digitos');
                return;
            }
            if (this.correo == '' || this.correo == undefined) {
                this.msj.showError3('Mensaje', 'Ingrese un correo valido');
                return;
            }
            if (this.sexo == '' || this.sexo == undefined) {
                this.msj.showError3('Mensaje', 'Ingrese un sexo valido');
                return;
            }
            if (this.nivelacademico == '' || this.nivelacademico == undefined) {
                this.msj.showError3('Mensaje', 'Ingrese un nivel academico valido');
                return;
            }
            if (this.identificador == '' || this.identificador == undefined) {
                this.msj.showError3('Mensaje', 'Ingrese una identificador valido');
                return;
            }
            // if(this.dependencia==''|| this.dependencia==undefined)  {     this.msj.showError3('Mensaje','Ingrese una dependecia valida');     return;  }
            // if(this.image4==undefined  || this.image4=="./assets/img/photo256.png" || this.image4=='')    {     this.msj.showError3('Mensaje','Adjunte una imagen de DPI valido');     return;  }
            if (this.idtipounidad2 == undefined) {
                this.msj.showError3('Mensaje', 'Seleccione una sede valida');
                return;
            }
            if (!this.idtipounidad2[0]) {
                this.msj.showError3('Mensaje', 'Seleccione una sede valida');
                return;
            }
            if (this.unidadacademica == undefined) {
                this.msj.showError3('Mensaje', 'Seleccione un curso valido');
                return;
            }
            if (!this.unidadacademica[0]) {
                this.msj.showError3('Mensaje', 'Seleccione un curso valido');
                return;
            }
            if (this.idjornada2 == undefined) {
                this.msj.showError3('Mensaje', 'Seleccione una jornada valida');
                return;
            }
            if (!this.idjornada2[0]) {
                this.msj.showError3('Mensaje', 'Seleccione una jornada valida');
                return;
            }
            if (this.tipopago == undefined) {
                this.msj.showError3('Mensaje', 'Seleccione un nivel valido');
                return;
            }
            if (!this.tipopago[0]) {
                this.msj.showError3('Mensaje', 'Seleccione un nivel valido');
                return;
            }
            if (this.idperiodo2 == undefined) {
                this.msj.showError3('Mensaje', 'Seleccione la unidad /curso valido/ curso no tiene planificación = periodo');
                return;
            }
            if (!this.idperiodo2[1]) {
                this.msj.showError3('Mensaje', 'Seleccione la unidad /curso valido/ curso no tiene planificación = periodo');
                return;
            }
            if (this.codigonn > 0) {
                if (this.image3 == undefined || this.image3 == "./assets/img/photo256.png" || this.image3 == '') {
                    this.msj.showError3('Mensaje', 'Adjunte una imagen de ' + this.nidentificador2 + ' valida');
                    return;
                }
                if (this.comprobantenivel == true) {
                    if (this.image == undefined || this.image == "./assets/img/photo256.png" || this.image == '') {
                        this.msj.showError3('Mensaje', 'Adjunte Imagen de Costancia de nota o Constancia de ubicación valida');
                        return;
                    }
                }
                // if(this.carnecalusac1==undefined || this.carnecalusac1=='')    {     this.msj.showError3('Mensaje','Ingrese un carne calusac valido');     return;  }
            }
            else {
                if (this.image3 == undefined || this.image3 == "./assets/img/photo256.png" || this.image3 == '') {
                    this.msj.showError3('Mensaje', 'Adjunte una imagen de ' + this.nidentificador2 + ' valida');
                    return;
                }
            }
        }
        if (this.navParams.data.op == 'Extranjerocentroamericano') {
            if (this.fecha_nac == undefined) {
                this.msj.showError3('Mensaje', 'Ingrese una fecha de nacimiento valida');
                return;
            }
            if (this.nopasaporte == '') {
                this.msj.showError3('Mensaje', 'Ingrese un no pasaporte valido');
                return;
            }
            if (this.nombre == '' || this.nombre == undefined) {
                this.msj.showError3('Mensaje', 'Ingrese un nombre valido');
                return;
            }
            if (this.direccion == '' || this.direccion == undefined) {
                this.msj.showError3('Mensaje', 'Ingrese una direccion valida');
                return;
            }
            if (this.telefono == '' || this.telefono == undefined) {
                this.msj.showError3('Mensaje', 'Ingrese un telefono valido');
                return;
            }
            if (this.telefono.length !== 8) {
                this.msj.showError3('Mensaje', 'Teléfono no valido , debe contener 8 digitos');
                return;
            }
            if (this.correo == '' || this.correo == undefined) {
                this.msj.showError3('Mensaje', 'Ingrese un correo valido');
                return;
            }
            if (this.sexo == '' || this.sexo == undefined) {
                this.msj.showError3('Mensaje', 'Ingrese un sexo valido');
                return;
            }
            if (this.nivelacademico == '' || this.nivelacademico == undefined) {
                this.msj.showError3('Mensaje', 'Ingrese un nivel academico valido');
                return;
            }
            if (this.identificador == '' || this.identificador == undefined) {
                this.msj.showError3('Mensaje', 'Ingrese una identificador valido');
                return;
            }
            // if(this.dependencia==''|| this.dependencia==undefined)  {     this.msj.showError3('Mensaje','Ingrese una dependecia valida');     return;  }
            // if(this.image4==undefined  || this.image4=="./assets/img/photo256.png" || this.image4=='')    {     this.msj.showError3('Mensaje','Adjunte una imagen de DPI valido');     return;  }
            if (this.idtipounidad2 == undefined) {
                this.msj.showError3('Mensaje', 'Seleccione una sede valida');
                return;
            }
            if (!this.idtipounidad2[0]) {
                this.msj.showError3('Mensaje', 'Seleccione una sede valida');
                return;
            }
            if (this.unidadacademica == undefined) {
                this.msj.showError3('Mensaje', 'Seleccione un curso valido');
                return;
            }
            if (!this.unidadacademica[0]) {
                this.msj.showError3('Mensaje', 'Seleccione un curso valido');
                return;
            }
            if (this.idjornada2 == undefined) {
                this.msj.showError3('Mensaje', 'Seleccione una jornada valida');
                return;
            }
            if (!this.idjornada2[0]) {
                this.msj.showError3('Mensaje', 'Seleccione una jornada valida');
                return;
            }
            if (this.tipopago == undefined) {
                this.msj.showError3('Mensaje', 'Seleccione un nivel valido');
                return;
            }
            if (!this.tipopago[0]) {
                this.msj.showError3('Mensaje', 'Seleccione un nivel valido');
                return;
            }
            if (this.idperiodo2 == undefined) {
                this.msj.showError3('Mensaje', 'Seleccione la unidad /curso valido/ curso no tiene planificación = periodo');
                return;
            }
            if (!this.idperiodo2[1]) {
                this.msj.showError3('Mensaje', 'Seleccione la unidad /curso valido/ curso no tiene planificación = periodo');
                return;
            }
            if (this.codigonn > 0) {
                if (this.image3 == undefined || this.image3 == "./assets/img/photo256.png" || this.image3 == '') {
                    this.msj.showError3('Mensaje', 'Adjunte una imagen de ' + this.nidentificador2 + ' valida');
                    return;
                }
                if (this.comprobantenivel == true) {
                    if (this.image == undefined || this.image == "./assets/img/photo256.png" || this.image == '') {
                        this.msj.showError3('Mensaje', 'Adjunte Imagen de Costancia de nota o Constancia de ubicación valida');
                        return;
                    }
                }
                // if(this.carnecalusac1==undefined || this.carnecalusac1=='')    {     this.msj.showError3('Mensaje','Ingrese un carne calusac valido');     return;  }
            }
            else {
                if (this.image3 == undefined || this.image3 == "./assets/img/photo256.png" || this.image3 == '') {
                    this.msj.showError3('Mensaje', 'Adjunte una imagen de ' + this.nidentificador2 + ' valida');
                    return;
                }
            }
        }
        //de: '+this.idunidadacademica2[1]+
        var alert = this.alertCtrl.create({ title: this.nombre + '<registrp> ¿Está seguro de realizar la asignación?',
            buttons: [
                { text: 'Si',
                    handler: function () {
                        var loading = _this.loadingCtrl.create({
                            spinner: 'bubbles',
                            content: "Espere un momento,  Realizando  Operación ......"
                        });
                        loading.present();
                        //  // this.cml='<?xml version="1.0" encoding="utf-8"?><Envelope xmlns="http://schemas.xmlsoap.org/soap/envelope/"><Body><getData xmlns="urn:miserviciowsdl"><carnet>'+this.carneusac +'</carnet><unidad>00</unidad><extension>00</extension><carrera>00</carrera><nombre>'+this.nombre+'</nombre><monto>'+ this.monto +'</monto><anio>'+this.ano+'</anio><rubro>'+this.rubro+'</rubro><variante_rubro>1</variante_rubro><subtotal>'+ this.monto+'</subtotal></getData></Body></Envelope>'
                        //http://127.0.0.1:9090/api/asignacalusacs/1/29993154,jorge,240,2019,145/ordenpago
                        //  this.authService.getReg2b('1/' + this.carneusac + ',' + this.nombre + ',' + this.monto + ',' + this.ano + ',' + this.rubro +'/'+'ordenpago','asignacalusacs').then((data) => {
                        //ident+ '/'+this.nombre1+'/' +montot + '/creaordenpap'
                        //1/29993154,jorge,240,2019,145/
                        //                    monto  unidad  ano   rubro  varianterubro
                        //http://127.0.0.1:9090/api/siifs/2638396800101/Mario/120.00/00/2020/145/1
                        var variante = 1;
                        if (_this.robronuevo == '100') {
                            _this.rubroT = "152";
                            variante = 1;
                        }
                        else {
                            _this.rubroT = "152";
                            variante = 1;
                        }
                        var cuitt = '';
                        if ((_this.navParams.data.op == 'Extranjero' || _this.navParams.data.op == 'Extranjerocentroamericano') || _this.navParams.data.pasapp == 'si') {
                            cuitt = String(_this.random());
                            _this.cui = cuitt;
                        }
                        else {
                            cuitt = _this.cui;
                        }
                        //this.authService.getReg(ident+ '/'+this.nombre1+'/' +montot + '/29/2020/17/1','siifs').then((result) =>
                        _this.authService.getReg2b(cuitt + '/' + _this.nombre + '/' + _this.monto + ".00" + '/30/2021/' + _this.rubroT + '°' + variante + '/' + 'calusacnuevo', 'siifs').then(function (data) {
                            _this.items = data;
                            var aa = [];
                            aa = data;
                            var otro = aa.cadena;
                            _this.imprimefinal = aa.estado;
                            _this.rubro2 = aa.rubro2;
                            _this.monto2 = aa.monto2;
                            _this.itemp2 = aa.itemp2;
                            var gorden = _this.davariable(otro, 'orden_pago');
                            _this.ordenpago = gorden;
                            _this.llave = _this.davariable(otro, 'llave');
                            _this.fechax = _this.davariable(otro, 'fecha');
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
                    }
                },
                {
                    text: 'No', handler: function () { }
                }
            ]
        });
        alert.present();
    };
    AsignacioncalusacCreatePage.prototype.cancel2 = function () {
        this.tipounidad = '';
        this.unidadacademica = '';
        this.idtipounidad2 = [];
        this.idunidadacademica2 = '';
        this.nombre = '';
        this.items = [];
    };
    AsignacioncalusacCreatePage.prototype.cancel = function () {
        this.viewCtrl.dismiss();
    };
    AsignacioncalusacCreatePage.prototype.done = function () {
        if (!this.form.valid) {
            return;
        }
        //this.viewCtrl.dismiss(this.form.value);
    };
    AsignacioncalusacCreatePage.prototype.onSelectChange = function (selectedValue) {
        var _this = this;
        if (!selectedValue)
            return;
        this.idtipounidad2 = selectedValue.split(',');
        this.vpago = [];
        this.vjornada = [];
        this.idjornada2 = [];
        this.idpago2 = [];
        var cadf = '';
        if (this.navParams.data.op == 'Extranjero' || this.navParams.data.op == 'Extranjerocentroamericano') {
            if (this.identificador == '' || this.identificador == undefined || this.identificador == 'na') {
                this.idtipounidad2 = [];
                this.tipounidad = '';
                this.titulo2 = 'una unidad académica';
                this.msj.showError3('Precaución', "Ingrese un PASAPORTE valido");
                return;
            }
            cadf = this.identificador + '/1' + '/nivelcalusac2';
        }
        else {
            if (this.navParams.data.pasapp == 'si') {
                if (this.identificador == '' || this.identificador == undefined || this.identificador == 'na') {
                    this.idtipounidad2 = [];
                    this.tipounidad = '';
                    this.titulo2 = 'una unidad académica';
                    this.msj.showError3('Precaución', "Ingrese un PASAPORTE valido");
                    return;
                }
                cadf = this.identificador + '/1' + '/nivelcalusac2';
            }
            else {
                if (this.cui == '' || this.cui == undefined || this.cui == 'na') {
                    this.idtipounidad2 = [];
                    // this.vgrupo=[]
                    this.titulo2 = 'una unidad académica';
                    this.tipounidad = '';
                    this.msj.showError3('Precaución', "Ingrese un CUI valido");
                    return;
                }
                cadf = this.cui + '/1' + '/nivelcalusac2';
            }
        }
        this.authService.getReg2b(cadf, 'asignacalusacs').then(function (result) {
            var aa = result;
            if (aa.length == 0) {
                _this.dcarne = false;
            }
            else {
                _this.carnecalusac = aa[0].carnecalusac;
                _this.carnecalusac1 = aa[0].carnecalusac;
                _this.dcarne = true;
            }
            if (_this.idtipounidad2[2] == 'Inactivo') {
                _this.msj.showError3('Precaución', _this.idtipounidad2[3]);
                _this.idtipounidad2 = [];
                _this.tipounidad = '';
                return;
            }
            else {
                if (_this.tipounidad == '') { }
                else {
                    // if(this.idtipounidad2[0]=='5b97f1bceb1dab0ab0368cc6')    {
                    _this.authService.getReg2b(_this.idtipounidad2[0] + '/2/' + _this.navParams.data.op, 'unidadacademica3s').then(function (result) {
                        _this.vgrupo2 = result;
                        //buscar el cui
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
        });
    };
    AsignacioncalusacCreatePage.prototype.validacarne = function () {
        var _this = this;
        //validar carnet  y codigo nivel
        this.comprobantenivel = false;
        this.carnecalusac = this.carnecalusac1;
        this.authService.getReg2b(this.carnecalusac + '/' + this.codigonn + '/' + this.codigounidad, 'asignanotas').then(function (result) {
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
    AsignacioncalusacCreatePage.prototype.onSelectChange4 = function (selectedValue) {
        var _this = this;
        this.idjornada2 = selectedValue.split(',');
        this.vpago = [];
        this.idpago2 = [];
        this.authService.getReg2b(this.idtipounidad2[0] + '/' + this.idunidadacademica2[0] + '/' + this.idperiodo + '/' + this.navParams.data.op + '/' + this.idjornada2[0], 'unidadplan3s').then(function (result) {
            _this.vpago = result;
        }, function (err) {
            _this.msj.showError3('Error', err.error);
        });
    };
    AsignacioncalusacCreatePage.prototype.onSelectChange3 = function (selectedValue) {
        var _this = this;
        this.idpago2 = selectedValue.split(',');
        this.nivelaprobado = '';
        this.monto = this.idpago2[3];
        this.codigonn = Number(this.idpago2[2]) - 1;
        this.sinivel = '0';
        this.nivel = this.idpago2[4];
        if (this.codigonn > 0) {
            this.carnev = true;
            this.carnev2 = true;
            this.vvcarne = 'Obligatorio';
            this.comprobantenivel = true;
            if (this.identificador) {
                this.authService.getReg2b(this.identificador + '/' + this.codigoidioma + '°' + this.rubro + '°' + this.idpago2[2] + '/nivelcalusacnotas2', 'asignacalusacs').then(function (resultxx) {
                    var nivelubica = resultxx;
                    if (nivelubica.encuentra === 1) {
                        _this.dcarne = true;
                        _this.comprobantenivel = false;
                        _this.nivelaprobado = 'Nivel aprobado en examen de ubicación ';
                    }
                    else {
                        _this.authService.getReg2b(_this.identificador + '/' + _this.codigoidioma + '°' + _this.rubro + '/nivelcalusac', 'asignacalusacs').then(function (result) {
                            var aa = result;
                            for (var i = 0; i < aa.length; i++) {
                                if (_this.codigonn == aa[i].tipopago.codigo) {
                                    if (aa[i].n5 >= 70) {
                                        _this.carnecalusac = aa[i].carnecalusac;
                                        _this.carnecalusac1 = aa[i].carnecalusac;
                                        _this.dcarne = true;
                                        _this.comprobantenivel = false;
                                        _this.nivelaprobado = 'Nivel ' + aa[i].tipopago.codigo + ' aprobado con una nota de' + aa[i].n5;
                                        break;
                                    }
                                }
                            }
                        });
                    }
                });
            }
            else {
                //this.rubro
                this.authService.getReg2b(this.cui + '/' + this.codigoidioma + '°' + this.rubro + '°' + this.idpago2[2] + '/nivelcalusacnotas2', 'asignacalusacs').then(function (resultxx) {
                    var nivelubica = resultxx;
                    if (nivelubica.encuentra === 1) {
                        _this.dcarne = true;
                        _this.comprobantenivel = false;
                        _this.nivelaprobado = 'Nivel aprobado en examen de ubicación ';
                    }
                    else {
                        _this.authService.getReg2b(_this.cui + '/' + _this.codigoidioma + '°' + _this.rubro + '/nivelcalusac', 'asignacalusacs').then(function (result) {
                            var aa = result;
                            for (var i = 0; i < aa.length; i++) {
                                if (_this.codigonn == aa[i].tipopago.codigo) {
                                    if (aa[i].n5 >= 70) {
                                        _this.comprobantenivel = false;
                                        _this.carnecalusac = aa[i].carnecalusac;
                                        _this.carnecalusac1 = aa[i].carnecalusac;
                                        _this.dcarne = true;
                                        _this.nivelaprobado = 'Nivel ' + aa[i].tipopago.codigo + ' aprobado con una nota de' + aa[i].n5;
                                        break;
                                    }
                                }
                            }
                        });
                    }
                });
            }
        }
        else {
            //var nomt=this.idpago2[2]
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
    AsignacioncalusacCreatePage.prototype.onSelectChange2 = function (selectedValue) {
        var _this = this;
        this.idunidadacademica2 = selectedValue.split(',');
        this.vpago = [];
        this.vjornada = [];
        this.idjornada2 = [];
        this.idpago2 = [];
        this.rubro = this.idunidadacademica2[2];
        this.robronuevo = this.idunidadacademica2[2];
        this.ididioma = this.idunidadacademica2[3];
        this.idtipogrupo = this.idunidadacademica2[4];
        this.idtipocurso = this.idunidadacademica2[5];
        this.codigoidioma = this.idunidadacademica2[6];
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
    AsignacioncalusacCreatePage.prototype.updateProfileImage = function (op) {
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
    AsignacioncalusacCreatePage.prototype.takePhotograph = function (op) {
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
    AsignacioncalusacCreatePage.prototype.selectImage = function (op) {
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
    AsignacioncalusacCreatePage.prototype.processWebImage = function (event) {
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
    ], AsignacioncalusacCreatePage.prototype, "fileInput", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('fileInput2'),
        __metadata("design:type", Object)
    ], AsignacioncalusacCreatePage.prototype, "fileInput2", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('fileInput3'),
        __metadata("design:type", Object)
    ], AsignacioncalusacCreatePage.prototype, "fileInput3", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('fileInput4'),
        __metadata("design:type", Object)
    ], AsignacioncalusacCreatePage.prototype, "fileInput4", void 0);
    AsignacioncalusacCreatePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-asignacioncalusac-create',template:/*ion-inline-start:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\CALUSAC\asignacioncalusac-create\asignacioncalusac-create.html"*/'<ion-header>\n    <ion-navbar>\n      <ion-title>{{titulo2}}</ion-title>\n      <ion-buttons start>\n          <button (click)="cancel()" icon-only ion-button padding-right>\n              <ion-icon name="md-close"></ion-icon>\n            </button>\n\n      </ion-buttons>\n\n    </ion-navbar>\n  </ion-header>\n  <ion-content padding>\n    <form     [formGroup]="form"   text-wrap>\n      <ion-list>\n          <ion-item-divider color="secondary">\n              <ion-label class="my-label18" color="secondary2" center>\n               FICHA DE DATOS PERSONALES\n              </ion-label>\n            </ion-item-divider>\n            <ion-item margin-bottom>             <ion-label class="my-label18" color="secondary2"></ion-label> </ion-item>\n      <ion-avatar item-start >\n          <img [src]="image2"  id="profile-image"  src="{{pofilel}}"   >\n\n  </ion-avatar>\n   <ion-item-group >\n    <ion-item>\n\n\n\n       <input   type="hidden"    name="imagen2" [formControl]="form.controls[\'imagen2\']"    [(ngModel)]="imagen2">\n    </ion-item>\n    <ion-item>\n        <a  ion-button    block  margin-bottom    color="primary"  (click)="updateProfileImage(\'2\')">{{fotottt}}</a>\n        <input type="file" accept="image/*" #fileInput2 style="visibility: hidden; height: 0px" (change)="processWebImage($event)" />\n     </ion-item>\n  </ion-item-group>\n\n        <ion-item margin-bottom>\n            <ion-label class="my-label18" color="secondary2">Fecha de nacimiento</ion-label>\n            <ion-datetime  [disabled]="dfecha_nac"   displayFormat="DD/MM/YYYY"     [formControl]="form.controls[\'fecha_nac\']" [(ngModel)]="fecha_nac"></ion-datetime>\n\n         </ion-item>\n\n         <ion-item class="invalid" *ngIf="!form.controls.fecha_nac.valid && (form.controls.fecha_nac.dirty || form.controls.fecha_nac.touched)" text-wrap>\n            <ion-icon name="warning"></ion-icon>\n           Ingrese una fecha de nacimiento valida\n        </ion-item>\n\n\n\n\n         <ion-item  *ngIf="dcuiv==true">\n            <ion-label class="my-label18" color="secondary2" > CUI </ion-label>\n            <ion-input  [disabled]="dcui" [(ngModel)]="cui" [formControl]="form.controls[\'cui\']" type="number"></ion-input>\n        </ion-item>\n\n\n\n        <ion-item class="invalid" *ngIf="!form.controls.cui.valid && (form.controls.cui.dirty || form.controls.cui.touched)" text-wrap>\n            <ion-icon name="warning"></ion-icon>\n            Ingrese un cui valido, Un tamaño  de 13 digitos\n        </ion-item>\n\n\n\n         <ion-item *ngIf="dnopasaportev==true" >\n            <ion-label class="my-label18" color="secondary2" > No pasaporte </ion-label>\n            <ion-input  [disabled]="dnopasaporte"  [formControl]="form.controls[\'nopasaporte\']" type="text"></ion-input>\n        </ion-item>\n\n        <ion-item >\n            <ion-label class="my-label18"  color="secondary2" stacked> Nombres y Apellidos  </ion-label>\n            <ion-input [disabled]="dnombre"  [(ngModel)]="nombre" [formControl]="form.controls[\'nombre\']" type="text"></ion-input>\n          </ion-item>\n\n          <ion-item class="invalid" *ngIf="!form.controls.nombre.valid && (form.controls.nombre.dirty || form.controls.nombre.touched)" text-wrap>\n              <ion-icon name="warning"></ion-icon>\n             Ingrese nombres y apellidos  validos\n          </ion-item>\n\n\n\n\n          <ion-item >\n              <ion-label   class="my-label18" color="secondary2" > {{ \'DIRECCION\' | translate }}  </ion-label>\n              <ion-input  [disabled]="ddireccion" [(ngModel)]="direccion" [formControl]="form.controls[\'direccion\']" type="text"></ion-input>\n            </ion-item>\n\n            <ion-item class="invalid" *ngIf="!form.controls.direccion.valid\n            && (form.controls.direccion.dirty || form.controls.direccion.touched)" text-wrap>\n                <ion-icon name="warning"></ion-icon>\n                {{ \'DIRECCIONT\' | translate }}\n            </ion-item>\n\n            <ion-item >\n                <ion-label  class="my-label18"  color="secondary2" > {{ \'TELEFONO\' | translate }}  </ion-label>\n                <ion-input [disabled]="dtelefono" [(ngModel)]="telefono" [formControl]="form.controls[\'telefono\']" type="number"></ion-input>\n              </ion-item>\n\n              <ion-item class="invalid" *ngIf="!form.controls.telefono.valid\n              && (form.controls.telefono.dirty || form.controls.telefono.touched)" text-wrap>\n                  <ion-icon name="warning"></ion-icon>\n                  {{ \'TELEFONOT\' | translate }}\n              </ion-item>\n\n\n              <ion-item >\n                  <ion-label  class="my-label18"  color="secondary2" > Correo </ion-label>\n                  <ion-input [disabled]="dcorreo" [(ngModel)]="correo" [formControl]="form.controls[\'correo\']" type="text"></ion-input>\n                </ion-item>\n\n                <ion-item class="invalid" *ngIf="!form.controls.correo.valid\n                && (form.controls.correo.dirty || form.controls.correo.touched)" text-wrap>\n                    <ion-icon name="warning"></ion-icon>\n                   Ingrese un correo valido\n                </ion-item>\n\n\n\n\n\n                        <ion-item >\n                            <ion-label  class="my-label18" color="secondary2" stacked> {{ \'SEXO\' | translate }}  </ion-label>\n                            <ion-select [(ngModel)]="sexo" [formControl]="form.controls[\'sexo\']" >\n                                <ion-option text-wrap *ngFor="let lenguage of sexos" [value]="lenguage">{{lenguage}}</ion-option>\n                              </ion-select>\n\n                          </ion-item>\n\n\n                        <ion-item class="invalid" *ngIf="!form.controls.sexo.valid\n                        && (form.controls.sexo.dirty || form.controls.sexo.touched)" text-wrap>\n                            <ion-icon name="warning"></ion-icon>\n                            {{ \'SEXOT\' | translate }}\n                        </ion-item>\n\n\n\n\n                        <ion-item >\n                            <ion-label  class="my-label18" color="secondary2" stacked> Nivel académico  </ion-label>\n                            <ion-select [(ngModel)]="nivelacademico" [formControl]="form.controls[\'nivelacademico\']" >\n                                <ion-option text-wrap *ngFor="let lenguage of nacademicos" [value]="lenguage">{{lenguage}}</ion-option>\n                              </ion-select>\n\n                          </ion-item>\n\n\n                        <ion-item class="invalid" *ngIf="!form.controls.nivelacademico.valid\n                        && (form.controls.nivelacademico.dirty || form.controls.nivelacademico.touched)" text-wrap>\n                            <ion-icon name="warning"></ion-icon>\n                          Ingrese un nivel academico valido\n                        </ion-item>\n\n\n\n                        <ion-item *ngIf="didentificadorv==true" >\n                            <ion-label class="my-label18"  color="secondary2" stacked> Identificador ({{nidentificador}})  </ion-label>\n                            <ion-input [(ngModel)]="identificador"  [formControl]="form.controls[\'identificador\']" type="text"></ion-input>\n                          </ion-item>\n\n                          <ion-item class="invalid" *ngIf="!form.controls.identificador.valid && (form.controls.identificador.dirty || form.controls.identificador.touched)" text-wrap>\n                              <ion-icon name="warning"></ion-icon>\n                             Ingrese un identificador ({{nidentificador}})  valido\n                          </ion-item>\n\n\n                <ion-item *ngIf="ddependenciav==true" >\n                    <ion-label class="my-label18"  color="secondary2" stacked> Dependencia  </ion-label>\n                    <ion-input   [(ngModel)]="dependencia" [formControl]="form.controls[\'dependencia\']" type="text"></ion-input>\n                  </ion-item>\n\n                  <ion-item class="invalid" *ngIf="!form.controls.dependencia.valid && (form.controls.dependencia.dirty || form.controls.dependencia.touched)" text-wrap>\n                      <ion-icon name="warning"></ion-icon>\n                     Ingrese una dependencia valida\n                  </ion-item>\n            <p>\n                <p>\n                  <ion-item-divider *ngIf="datosobligatorios==true" color="secondary">\n                      <ion-label  class="my-label18" color="secondary2" center>\n                        DOCUMENTOS OBLIGATORIOS\n                      </ion-label>\n                    </ion-item-divider>\n\n\n\n  <ion-item-group *ngIf="comprobantetrabcui==true">\n      <ion-item>\n         <img [src]="image4"     class="profile-image2">\n         <input   type="hidden"  name="imagen4" [formControl]="form.controls[\'imagen4\']"    [(ngModel)]="imagen4">\n      </ion-item>\n      <ion-item>\n          <a  ion-button    block  margin-bottom    color="primary"  (click)="updateProfileImage(\'4\')">Adjunte Imagen de {{NDPI}}      </a>\n          <input type="file" accept="image/*" #fileInput4 style="visibility: hidden; height: 0px" (change)="processWebImage($event)" />\n       </ion-item>\n    </ion-item-group>\n\n\n\n\n\n\n      <ion-item-divider color="secondary">\n          <ion-label class="my-label18" color="secondary2" center>\n            ASIGNACIÓN\n          </ion-label>\n        </ion-item-divider>\n\n\n        <ion-item margin-bottom text-wrap>\n            <ion-label class="my-label18" color="secondary2"  stacked>Seleccione Sede</ion-label>\n\n          <ion-select (ionChange)="onSelectChange($event)" [(ngModel)]="tipounidad" [formControl]="form.controls[\'tipounidad\']">\n              <ion-option text-wrap *ngFor="let item of vgrupo" [value]="item._id+\',\'+item.nombre+\',\'+item.codigo" >{{item.nombre}} </ion-option>\n          </ion-select>\n\n\n       </ion-item>\n       <ion-item margin-bottom text-wrap>\n\n        <ion-label class="my-label18" color="secondary2"  stacked>Seleccione Curso</ion-label>\n\n        <ion-select  (ionChange)="onSelectChange2($event)"  [(ngModel)]="unidadacademica" [formControl]="form.controls[\'unidadacademica\']">\n            <ion-option text-wrap *ngFor="let item of vgrupo2" [value]="item._id+\',\'+item.nombre+\',\'+item.codigo +\',\'+item.ididioma._id+\',\'+item.idtipocurso+\',\'+item.idtipogrupo + \',\'+item.ididioma.codigo">{{item.nombre }}</ion-option>\n        </ion-select>\n\n\n     </ion-item>\n\n\n\n   <ion-item margin-bottom text-wrap>\n    <ion-label class="my-label18" color="secondary2"  stacked>Seleccione Jornada</ion-label>\n\n  <ion-select (ionChange)="onSelectChange4($event)" [(ngModel)]="jornada" [formControl]="form.controls[\'jornada\']">\n      <ion-option text-wrap *ngFor="let item of vjornada" [value]="item._id+\',\'+item.nombre+\',\'+item.codigo" >{{item.nombre}} </ion-option>\n  </ion-select>\n\n\n</ion-item>\n\n<ion-item class="invalid" *ngIf="!form.controls.jornada.valid\n&& (form.controls.jornada.dirty || form.controls.jornada.touched)" text-wrap>\n    <ion-icon name="warning"></ion-icon>\n    Ingrese una jornada valida\n</ion-item>\n\n\n\n\n     <ion-item margin-bottom text-wrap>\n        <ion-label class="my-label18" color="secondary2"  stacked>Seleccione Nivel</ion-label>\n\n      <ion-select (ionChange)="onSelectChange3($event)" [(ngModel)]="tipopago" [formControl]="form.controls[\'tipopago\']">\n          <ion-option text-wrap *ngFor="let item of vpago" [value]="item._id+\',\'+item.nombre+\',\'+item.codigo+\',\'+item.costo + \',\' + item.nivel._id" >{{item.nombre}} (Q.{{item.costo}}) </ion-option>\n      </ion-select>\n\n\n   </ion-item>\n\n   <ion-item class="invalid" *ngIf="!form.controls.tipopago.valid && (form.controls.tipopago.dirty || form.controls.tipopago.touched)" text-wrap>\n      <ion-icon name="warning"></ion-icon>\n     Ingrese un nivel valido\n     </ion-item>\n\n\n  <ion-item-group *ngIf="comprobanteidentificador==true">\n      <ion-item>\n         <img [src]="image3"    class="profile-image2">\n         <input   type="hidden"   id="profile-image2"  name="imagen3" [formControl]="form.controls[\'imagen3\']"    [(ngModel)]="imagen3">\n      </ion-item>\n      <ion-item>\n          <a  ion-button    block  margin-bottom    color="primary"  (click)="updateProfileImage(\'3\')">Adjunte Imagen de {{nidentificador2}}       </a>\n          <input type="file" accept="image/*" #fileInput3 style="visibility: hidden; height: 0px" (change)="processWebImage($event)" />\n       </ion-item>\n    </ion-item-group>\n\n\n<!--*ngIf="carnev==true"-->\n\n\n   <ion-item  >\n     <!--   <ion-label class="my-label18"  color="danger" stacked> Ingrese Carne CALUSAC ({{vvcarne}})</ion-label>-->\n    <ion-label class="my-label18"  color="secondary2" stacked>Si tiene Carné de CALUSAC, ingréselo   </ion-label>\n    <ion-input  disabled="{{dcarne}}"  [(ngModel)]="carnecalusac1" [formControl]="form.controls[\'carnecalusac1\']" type="number"></ion-input>\n\n  </ion-item>\n\n  <ion-item class="invalid" *ngIf="!form.controls.carnecalusac1.valid && (form.controls.carnecalusac1.dirty || form.controls.carnecalusac1.touched)" text-wrap>\n      <ion-icon name="warning"></ion-icon>\n     Ingrese un carne calusac valido\n  </ion-item>\n  <p>\n      <p></p>\n\n  <!--\n  <ion-item *ngIf="carnev2==true" >\n    <button  ion-button block color="primary" (click)="validacarne()" strong>\n      Validar Carne CALUSAC\n    </button>\n  </ion-item>\n  *ngIf="comprobantenivel==true"\n-->\n\n\n   <ion-item-group  *ngIf="comprobantenivel==true">\n    <ion-item>\n       <img [src]="image"    class="profile-image2">\n       <input   type="hidden"    name="imagen" [formControl]="form.controls[\'imagen\']"    [(ngModel)]="imagen">\n    </ion-item>\n    <ion-item>\n        <a  ion-button    block  margin-bottom    color="primary"  (click)="updateProfileImage(\'1\')">ADJUNTE IMAGEN DE CONSTANCIA DE CURSO O CONSTANCIA DE UBICACIÓN     </a>\n        <input type="file" accept="image/*" #fileInput style="visibility: hidden; height: 0px" (change)="processWebImage($event)" />\n     </ion-item>\n  </ion-item-group>\n\n\n\n\n\n\n\n       <ion-item class="invalid" *ngIf="!form.controls.tipounidad.valid && (form.controls.tipounidad.dirty || form.controls.tipounidad.touched)" text-wrap>\n         <ion-icon name="warning"></ion-icon>\n        Ingrese un tipo de unidad academica\n        </ion-item>\n\n         <ion-item class="invalid" *ngIf="!form.controls.unidadacademica.valid && (form.controls.unidadacademica.dirty || form.controls.unidadacademica.touched)" text-wrap>\n           <ion-icon name="warning"></ion-icon>\n           Ingrese una {{titulo2}} valida\n          </ion-item>\n\n          <ion-row >\n              <ion-col text-center>\n                <button  ion-button block color="secondary"  (click)="manageGallery()" strong>\n                 Asignar\n                </button>\n              </ion-col>\n            </ion-row>\n\n\n\n\n       </ion-list>\n    </form>\n\n\n  </ion-content>\n'/*ion-inline-end:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\CALUSAC\asignacioncalusac-create\asignacioncalusac-create.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__providers_image_image__["a" /* ImageProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3__providers__["d" /* NotificationProvider */], __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["F" /* ViewController */], __WEBPACK_IMPORTED_MODULE_3__providers__["a" /* Auth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */]])
    ], AsignacioncalusacCreatePage);
    return AsignacioncalusacCreatePage;
}());

//# sourceMappingURL=asignacioncalusac-create.js.map

/***/ }),

/***/ 917:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsignacioncalusacCreatePageModule", function() { return AsignacioncalusacCreatePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__asignacioncalusac_create__ = __webpack_require__(1357);
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
                __WEBPACK_IMPORTED_MODULE_2__asignacioncalusac_create__["a" /* AsignacioncalusacCreatePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__asignacioncalusac_create__["a" /* AsignacioncalusacCreatePage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], AsignacioncalusacCreatePageModule);
    return AsignacioncalusacCreatePageModule;
}());

//# sourceMappingURL=asignacioncalusac-create.module.js.map

/***/ })

});
//# sourceMappingURL=232.js.map