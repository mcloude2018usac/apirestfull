webpackJsonp([110],{

/***/ 1073:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsignacionPapListPageModule", function() { return AsignacionPapListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__asignacion_pap_list__ = __webpack_require__(1529);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__ = __webpack_require__(445);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AsignacionPapListPageModule = /** @class */ (function () {
    function AsignacionPapListPageModule() {
    }
    AsignacionPapListPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__asignacion_pap_list__["a" /* AsignacionPapListPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__asignacion_pap_list__["a" /* AsignacionPapListPage */]),
                __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["b" /* TranslateModule */].forChild(),
                __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__["a" /* PipesModule */]
            ],
        })
    ], AsignacionPapListPageModule);
    return AsignacionPapListPageModule;
}());

//# sourceMappingURL=asignacion-pap-list.module.js.map

/***/ }),

/***/ 1529:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AsignacionPapListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_pdf_pdfx__ = __webpack_require__(447);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AsignacionPapListPage = /** @class */ (function () {
    function AsignacionPapListPage(Pdfx, storage, alertCtrl, msj, translateService, navCtrl, _MODAL, navParams, regService) {
        var _this = this;
        this.Pdfx = Pdfx;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.msj = msj;
        this.translateService = translateService;
        this.navCtrl = navCtrl;
        this._MODAL = _MODAL;
        this.navParams = navParams;
        this.regService = regService;
        this.loading = true;
        this.items = [];
        this.items2 = [];
        this.siprueba = false;
        this.siasigna = false;
        this.sidist = false;
        this.tiposus = [];
        this.creaxx = true;
        this.isDisablednit = true;
        this.isDisablednit2 = true;
        this.username = "";
        this.idafiliado = 'na';
        this.gLimit = 50;
        this.PageSegmet = 'foods';
        this.gSearchQuery = '';
        this.unidad = 'PAP';
        this.codunidad = '10';
        this.excludeTracks = [];
        this.translateService.get('APPX').subscribe(function (value) {
            _this.idempresa = value;
        });
    }
    AsignacionPapListPage.prototype.clearSearchg = function () {
        this.gSearchQuery = '';
    };
    AsignacionPapListPage.prototype.estadocuenta = function () {
        var _this = this;
        this.regService.getReg('periodo/activo2', 'unidadperiodo2s').then(function (data) {
            var self = _this;
            self.loading = true;
            var daxx = [];
            daxx = data;
            var select = {
                message: 'Seleccione un periodo ', inputs: [],
                buttons: [{ text: 'Cancelar' }, { text: 'Buscar', handler: function (todo) {
                            var opciont = todo;
                            var select = {
                                message: 'Selecciona reporte ', inputs: [],
                                buttons: [{ text: 'Cancelar' }, { text: 'Buscar', handler: function (todo) {
                                            if (todo == 1) {
                                                _this.regService.abrelinkinterno('datosfijos/excel-asigna3papficha/' + opciont);
                                            }
                                            else {
                                                _this.regService.abrelinkinterno('datosfijos/cupo-seccion/' + opciont);
                                            }
                                        } }]
                            };
                            select.inputs.push({ name: 'myInput', type: 'radio', label: 'Asignados PAP', value: '1' });
                            select.inputs.push({ name: 'myInput', type: 'radio', label: 'Cupo de secciones', value: '2' });
                            var newAlert = _this.alertCtrl.create(select);
                            newAlert.present();
                        } }]
            };
            for (var i = 0; i < daxx.length; i++) {
                select.inputs.push({ name: 'myInput', type: 'radio', label: daxx[0].nombre, value: daxx[0]._id });
            }
            var newAlert = _this.alertCtrl.create(select);
            newAlert.present();
        }, function (err) {
            _this.msj.showError3('Error', err.error);
        });
    };
    AsignacionPapListPage.prototype.pideregistros = function () {
        var _this = this;
        var self = this;
        self.loading = true;
        this.regService.displayPreloader('Cargando información...');
        this.storage.get('tiposus').then(function (value) {
            _this.tiposus = value.split(',');
            _this.idsuscriptor = _this.tiposus[3];
            _this.idnombre = _this.tiposus[4];
            _this.CUI = _this.tiposus[2];
            _this.NOV = _this.tiposus[5];
            if (_this.tiposus[6] != 'user') {
                _this.isDisablednit = false;
            }
            else {
                // if(this.siprueba==false)      {this.isDisablednit=false;      }
            }
            if (_this.tiposus[6] == 'Administrador' || _this.tiposus[6] == 'SUN ADMINISTRADOR') {
                _this.isDisablednit2 = false;
            }
            _this.regService.getReg(_this.idsuscriptor, 'asignapaps').then(function (data) {
                _this.items = data;
                if (_this.items.length == 0) {
                    if (_this.username == 'ambrosioaleman07@gmail.com' || _this.username == 'lopez.leonel@usac.edu.gt' || _this.username == 'jggm.meph@gmail.com' || _this.username == 'mario.morales@mcloude.com') {
                        _this.siprueba = false;
                        _this.siasigna = false;
                    }
                    else {
                        //if(this.tiposus[6]=='user')     {          this.siprueba=false;        }
                    }
                }
                self.loading = false;
            }, function (err) {
                _this.msj.showError3('Error', err.error);
                if (_this.tiposus[6] == 'user') {
                    _this.siprueba = true;
                }
            });
        });
        this.regService.hidePreloader();
    };
    AsignacionPapListPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.translateService.get(["CANCEL",
            "INGRESAR",
            "BUSCARPOR",
            "BUSCAR"
        ]).subscribe(function (values) {
            _this.v1 = values.CANCEL;
            _this.v2 = values.INGRESAR;
            _this.v3 = values.BUSCARPOR;
            _this.v4 = values.BUSCAR;
        });
    };
    AsignacionPapListPage.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get('username').then(function (value) {
            _this.username = value;
            if (_this.username == 'ambrosioaleman07@gmail.com' || _this.username == 'lopez.leonel@usac.edu.gt' || _this.username == 'mario.morales@mcloude.com' || _this.username == 'jggm.meph@gmail.com' || _this.username == 'jorgomez@yahoo.com') {
                _this.siprueba = false;
                _this.siasigna = false;
            }
        });
        this.pideregistros();
    };
    AsignacionPapListPage.prototype.showFilter = function () {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: ' Buscar',
            message: ' Ingrese NOV / CARNET / Correo / No boleta pago/ CUI ',
            inputs: [
                {
                    name: 'NOV'
                }
            ],
            buttons: [
                {
                    text: 'Cancelar'
                },
                {
                    text: 'Buscar',
                    handler: function (todo) {
                        if (todo) {
                            _this.regService.getReg2b('noboleta/' + todo.NOV, 'asignapaps').then(function (data) {
                                _this.items = data;
                            }, function (err) {
                                _this.msj.showError3('Error', err.error);
                            });
                            console.log(todo);
                        }
                    }
                }
            ]
        });
        prompt.present();
    };
    AsignacionPapListPage.prototype.loadMore = function (ev) {
        this.gLimit += 50;
        setTimeout(function () { return ev.complete(); }, 1000);
    };
    AsignacionPapListPage.prototype.deleteRecord2 = function (item, no) {
        var _this = this;
        var alert = this.alertCtrl.create({ title: 'Esta seguro de eliminar asignacion y volverla a generar,  elimina asignación y horarios?',
            buttons: [
                { text: 'Si',
                    handler: function () {
                        var recordID = item._id;
                        _this.regService.deleteReg(recordID + '/' + recordID + '/' + 'asignacion' + '/' + _this.idafiliado, 'asignapaps').then(function (data) {
                            _this.items.splice(no, 1);
                            _this.items = _this.items.concat([]);
                        }, function (err) {
                            _this.msj.showError3('Error', err.error);
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
    AsignacionPapListPage.prototype.deleteRecord = function (item, no) {
        var _this = this;
        var alert = this.alertCtrl.create({ title: 'Esta seguro de eliminar horario y volver a generar?',
            buttons: [
                { text: 'Si',
                    handler: function () {
                        var recordID = item._id;
                        _this.regService.deleteReg(recordID + '/' + recordID + '/' + 'horario' + '/' + _this.idafiliado, 'asignapaps').then(function (data) {
                            _this.items.splice(no, 1);
                            _this.items = _this.items.concat([]);
                        }, function (err) {
                            _this.msj.showError3('Error', err.error);
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
    AsignacionPapListPage.prototype.addRecord = function () {
        var _this = this;
        this.storage.get('tiposus').then(function (value) {
            _this.tiposus = value.split(',');
            if (_this.tiposus[6] == 'user') {
                if (_this.tiposus[5] == '' || _this.tiposus[5] == undefined) {
                    var prompt_1 = _this.alertCtrl.create({
                        title: ' Ingrese No. de Orientación Vocacional ó Carné',
                        message: 'Ingrese Ingrese No. de Orientación Vocacional ó Carné para poder actualizar su perfil y gestionar esta acción',
                        inputs: [
                            {
                                name: 'NOV',
                                placeholder: 'Ingrese NOV/CARNÉ registrado',
                                value: '' //this.cuitt
                            }
                        ],
                        buttons: [
                            {
                                text: 'Cancelar'
                            },
                            {
                                text: 'Buscar',
                                handler: function (todo) {
                                    var nn = todo.NOV;
                                    nn = String(nn).trim();
                                    if (nn.lenght > 10) {
                                        _this.msj.showError3('Mensaje', 'Ingrese un Ingrese No. de Orientación Vocacional ó Carné valido menor a 11 digitos');
                                        return;
                                    }
                                    _this.regService.displayPreloader('Espere un momento...');
                                    _this.regService.validacarnenov2(nn, '123').then(function (data2) {
                                        var vec = (data2);
                                        var cad = vec.split('°');
                                        _this.nombre = '';
                                        var msj = '';
                                        if (cad[0] == 'CARNE') {
                                            _this.nombre = cad[1];
                                            if (cad[2]) {
                                                _this.cui = cad[2];
                                            }
                                            msj = 'Este Carné esta relacionado con ' + _this.nombre + ' , cui: ' + _this.tiposus[2] + ' ¿Es correcta esta informacón?';
                                        }
                                        else {
                                            _this.nombre = cad[1];
                                            msj = 'Este Ingrese No. de Orientación Vocacional ó Carné esta relacionado con ' + _this.nombre + ' ¿Es correcta esta información para guardarlo en su perfil ?';
                                        }
                                        var alert = _this.alertCtrl.create({ title: msj,
                                            buttons: [
                                                { text: 'Si',
                                                    handler: function () {
                                                        //ACTUALIZAR NOMBRE Y NOV/CARNET Y NOMBRE EN DB
                                                        if (_this.nombre == '' || _this.nombre == '   ') {
                                                            _this.msj.showError3('Error', 'Nombre  no valido , no es posible relacionar este suscriptor');
                                                            _this.navCtrl.pop();
                                                            return;
                                                        }
                                                        _this.regService.hidePreloader();
                                                        var credentials = {
                                                            _id: _this.personalid,
                                                            nombre: _this.nombre,
                                                            cui: _this.cui,
                                                            nov: nn,
                                                            bitacora: { idempresa: _this.idempresa, idafiliado: '', email: _this.username, permiso: 'Actualiza', accion: 'Actualiza nov y cui perfil' }
                                                        };
                                                        _this.regService.createReg('actualizanov', credentials, 'personals').then(function (result) {
                                                            _this.storage.set('tiposus', (_this.tiposus[0] + ',' + _this.tiposus[1] + ',' + _this.tiposus[2] + ',' + _this.tiposus[3] + ',' + _this.nombre + ',' + nn + ',' + _this.tiposus[6] + ',' + _this.tiposus[7] + ',' + _this.tiposus[8] + ',' + _this.tiposus[9]));
                                                            var cc = true;
                                                            if (nn.length < 10) {
                                                                cc = false;
                                                            }
                                                            var addModal = _this._MODAL.create('UserperfilCreatePage', { record: null, record2: { idsuscriptor: _this.idsuscriptor, unidad: '', codunidad: '', nombre: _this.idnombre, cui: _this.CUI, nov: nn, correo: _this.username, activo: cc } }, { showBackdrop: true, enableBackdropDismiss: false });
                                                            addModal.onDidDismiss(function (data) {
                                                                if (data.si == 'si') {
                                                                    _this.regService.getReg(_this.idsuscriptor, 'asignapaps').then(function (data) {
                                                                        _this.items = data;
                                                                    });
                                                                }
                                                            });
                                                            addModal.present();
                                                        }, function (err) {
                                                            _this.regService.hidePreloader();
                                                            _this.translateService.get('USER_ERROR').subscribe(function (value) {
                                                                _this.msj.showError3('Error', value);
                                                            });
                                                        });
                                                    }
                                                },
                                                {
                                                    text: 'No', handler: function () { _this.regService.hidePreloader(); }
                                                }
                                            ]
                                        });
                                        alert.present();
                                    }, function (err) {
                                        _this.regService.hidePreloader();
                                        _this.msj.showError3('Error', err);
                                    });
                                }
                            }
                        ]
                    });
                    prompt_1.present();
                }
                else {
                    var addModal = _this._MODAL.create('UserperfilCreatePage', { record: null, record2: { idsuscriptor: _this.idsuscriptor, unidad: '', codunidad: '', nombre: _this.idnombre, cui: _this.CUI, nov: _this.tiposus[5], correo: _this.username, activo: true } }, { showBackdrop: true, enableBackdropDismiss: false });
                    addModal.onDidDismiss(function (data) {
                        if (data.si == 'si') {
                            _this.regService.getReg(_this.idsuscriptor, 'asignapaps').then(function (data) {
                                _this.items = data;
                            });
                        }
                    });
                    addModal.present();
                }
            }
            else {
                var prompt_2 = _this.alertCtrl.create({
                    title: ' Ingrese No. de Orientación Vocacional ó Carné',
                    message: 'Ingrese Ingrese No. de Orientación Vocacional ó Carné para poder actualizar su perfil y gestionar esta acción',
                    inputs: [
                        {
                            name: 'NOV'
                        }
                    ],
                    buttons: [
                        {
                            text: 'Cancelar'
                        },
                        {
                            text: 'Buscar',
                            handler: function (todo) {
                                var nn = todo.NOV;
                                nn = String(nn).trim();
                                if (nn.lenght > 10) {
                                    _this.msj.showError3('Mensaje', 'Ingrese un Ingrese No. de Orientación Vocacional ó Carné valido menor a 11 digitos');
                                    return;
                                }
                                _this.regService.displayPreloader('Espere un momento...');
                                _this.regService.validacarnenov2(nn, '123').then(function (data2) {
                                    var vec = (data2);
                                    var cad = vec.split('°');
                                    _this.nombre = '';
                                    var msj = '';
                                    if (cad[0] == 'CARNE') {
                                        _this.nombre = cad[1];
                                        if (cad[2]) {
                                            _this.cui = cad[2];
                                        }
                                        msj = 'Este Carné esta relacionado con ' + _this.nombre + ' ¿Es correcta esta informacón?';
                                    }
                                    else {
                                        _this.nombre = cad[1];
                                        msj = 'Este No. de Orientación Vocacional esta relacionado con ' + _this.nombre + ' ¿Es correcta esta informacón?';
                                    }
                                    var alert = _this.alertCtrl.create({ title: msj,
                                        buttons: [
                                            { text: 'Si',
                                                handler: function () {
                                                    //ACTUALIZAR NOMBRE Y NOV/CARNET Y NOMBRE EN DB
                                                    if (_this.nombre == '' || _this.nombre == '   ') {
                                                        _this.regService.hidePreloader();
                                                        _this.msj.showError3('Error', 'Nombre  no valido , no es posible relacionar este suscriptor');
                                                        _this.navCtrl.pop();
                                                        return;
                                                    }
                                                    // this.storage.set('tiposus', (this.tiposus[0] + ','+this.tiposus[1]+','+ this.cui + ','+this.tiposus[3]+ ',' + this.nombre  +','+todo.NOV+','+ this.tiposus[6]+','+ this.tiposus[7]+','+ this.tiposus[8]+','+ this.tiposus[9] ));
                                                    _this.regService.hidePreloader();
                                                    var addModal = _this._MODAL.create('UserperfilCreatePage', { record: null, record2: { idsuscriptor: _this.idsuscriptor, unidad: '', codunidad: '', nombre: _this.nombre, cui: '', nov: nn, correo: '', activo: false } }, { showBackdrop: true, enableBackdropDismiss: false });
                                                    addModal.onDidDismiss(function (data) {
                                                        if (data.si == 'si') {
                                                            _this.regService.getReg(_this.idsuscriptor, 'asignapaps').then(function (data) {
                                                                _this.items = data;
                                                            });
                                                        }
                                                    });
                                                    addModal.present();
                                                }
                                            },
                                            {
                                                text: 'No', handler: function () { _this.regService.hidePreloader(); }
                                            }
                                        ]
                                    });
                                    alert.present();
                                }, function (err) {
                                    _this.regService.hidePreloader();
                                    _this.msj.showError3('Error', err);
                                });
                            }
                        }
                    ]
                });
                prompt_2.present();
                /*
                let addModal = this._MODAL .create('UserperfilCreatePage', { record : null,record2:{idsuscriptor:this.idsuscriptor,unidad:'',codunidad:'',nombre:this.idnombre,cui:this.CUI,nov:this.NOV,correo:this.username,activo:false}},{showBackdrop: true,enableBackdropDismiss: false});
                addModal.onDidDismiss(data => {
                   if(data.si=='si')
                   {
                    this.regService.getReg( this.idsuscriptor,'asignapaps').then((data) => {
                      this.items=data;
                    });
        
                   }
        
                })
                addModal.present();
        */
            }
        });
    };
    AsignacionPapListPage.prototype.viewRecord = function (item) {
        // let modal = this._MODAL.create(ViewGalleryPage, { record : item });
        // modal.present();
    };
    AsignacionPapListPage.prototype.presentFilter = function () {
    };
    AsignacionPapListPage.prototype.imprime2 = function (item, no) {
        var _this = this;
        var ident = '';
        if (item.carne) {
            ident = item.carne;
        }
        if (item.nov) {
            ident = item.nov;
        }
        this.regService.displayPreloader('Espere un momento...');
        this.regService.getReg(ident + '/' + item.noboleta + '/busca', 'siifs').then(function (result) {
            var aa = [];
            aa = result;
            var otro = aa.cadena;
            var cctemp = otro.indexOf('Boleta no pagada');
            //if(cctemp==-1)
            if (_this.username == 'ambrosioaleman07@gmail.com' || _this.username == 'lopez.leonel@usac.edu.gt' || _this.username == 'mario.morales@mcloude.com' || _this.username == 'jggm.meph@gmail.com' || _this.username == 'jorgomez@yahoo.com') {
                cctemp = -1;
            }
            if (cctemp == -1) {
                _this.regService.hidePreloader();
                var addModal = _this._MODAL.create('Userperil2CreatePage', { record: item, record2: { id: item._id, idsuscriptor: _this.idsuscriptor, unidad: '', codunidad: '', nombre: _this.idnombre, cui: _this.CUI, nov: _this.NOV, correo: _this.username, activo: false } }, { showBackdrop: true, enableBackdropDismiss: false });
                addModal.onDidDismiss(function (data) {
                    if (data.si == 'si') {
                        _this.regService.getReg(_this.idsuscriptor, 'asignapaps').then(function (data) {
                            _this.items = data;
                        });
                    }
                    else {
                        _this.regService.getReg(_this.idsuscriptor, 'asignapaps').then(function (data) {
                            _this.items = data;
                        });
                    }
                });
                addModal.present();
            }
            else {
                _this.regService.hidePreloader();
                _this.msj.showError3('Información', 'Por favor realice su pago, para poder continuar con su asignación.');
            }
        });
    };
    AsignacionPapListPage.prototype.imprime2pago = function (item, no) {
        var _this = this;
        var ident = '';
        if (item.carne) {
            ident = item.carne;
        }
        if (item.nov) {
            ident = item.nov;
        }
        this.regService.displayPreloader('Espere un momento...');
        this.regService.getReg(ident + '/' + item.noboleta + '/busca', 'siifs').then(function (result) {
            if (-1 == -1) {
                _this.regService.hidePreloader();
                var addModal = _this._MODAL.create('Userperil2CreatePage', { record: item, record2: { id: item._id, idsuscriptor: _this.idsuscriptor, unidad: '', codunidad: '', nombre: _this.idnombre, cui: _this.CUI, nov: _this.NOV, correo: _this.username, activo: false } }, { showBackdrop: true, enableBackdropDismiss: false });
                addModal.onDidDismiss(function (data) {
                    if (data.si == 'si') {
                        _this.regService.getReg(_this.idsuscriptor, 'asignapaps').then(function (data) {
                            _this.items = data;
                        });
                    }
                    else {
                        _this.regService.getReg(_this.idsuscriptor, 'asignapaps').then(function (data) {
                            _this.items = data;
                        });
                    }
                });
                addModal.present();
            }
            else {
                _this.regService.hidePreloader();
                _this.msj.showError3('Información', 'Por favor realice su pago, para poder continuar con su asignación.');
            }
        });
    };
    AsignacionPapListPage.prototype.imprime = function (item, no) {
        var ident = '';
        if (item.carne) {
            ident = item.carne;
        }
        if (item.nov) {
            ident = item.nov;
        }
        this.Pdfx.daordenpago2a('ORDEN_PAGO_PAP', item.noboleta, item.nombre, item.montodeuda, 'PAP', ident, item.rubro, item.llave, "29", item.fechasiif);
    };
    AsignacionPapListPage.prototype.imprime3 = function (item, no) {
        var _this = this;
        this.regService.getReg(item._id, 'asignaestudiantepaps').then(function (data) {
            //  this.items=data
            _this.Pdfx.daasignapap(item._id, 'si', data, item.cui, 'Primer Semestre', item.nov);
        }, function (err) {
            _this.msj.showError3('Resultado', 'Resultado no encontrado.');
        });
        //  this.Pdfx.daasignapap('CONSTANCIA_PAP','',item,this.NOV,'exito')
    };
    AsignacionPapListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-asignacion-pap-list',template:/*ion-inline-start:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\PAP\asignacion-pap-list\asignacion-pap-list.html"*/'<ion-header no-border class="opaque">\n  <ion-navbar  no-border-bottom>\n      <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n    <ion-title>\n      Asignación PAP EFPEM Conocimientos básicos\n    </ion-title>\n    <ion-buttons end>\n      <button   (click)="showFilter()" icon-only ion-button padding-right>\n        <ion-icon name="funnel"></ion-icon>\n      </button>\n\n        <button [hidden]="(isDisablednit)"  (click)="estadocuenta()" icon-only ion-button padding-right>\n            <ion-icon name="paper"></ion-icon>\n          </button>\n         <button (click)="pideregistros()" icon-only ion-button padding-right>\n            <ion-icon name="refresh"></ion-icon>\n          </button>\n      </ion-buttons>\n  </ion-navbar>\n\n\n</ion-header>\n\n<ion-content  fullscreen>\n   <ion-list >\n    <ion-item text-wrap>\n      <ion-icon name="at" item-start></ion-icon>\n      PAP - “Fecha de inscripción extemporanea" <p> Hora de apertura 01/02/2021 8:00 horas <p>Hora de cierre 18/02/2021 23:55 horas”.\n      <ion-badge item-end>Usacenlinea</ion-badge>\n    </ion-item>\n\n    <ion-item text-center>\n        <img src="../assets/img/logoit.jpg" />\n      </ion-item>\n      <ion-item    *ngFor="let item of items  ;let i = index;" text-wrap>\n              <ion-card >\n                      <ion-row>\n                          <ion-col    text-right>\n                                  No: {{i+1}}\n                          </ion-col>\n                          <ion-item text-wrap>\n                              <br>\n                              <h2>Fecha Transacción: {{item.createdAt | date : \'dd/MM/yyyy\'}} </h2>\n                              <h2>Nombre: {{item.nombre }} </h2>\n                              <h2>CUI: {{item.cui }} </h2>\n                              <h2>Cursos asignados: {{item.cursosaplica}} </h2>\n\n                              <h2>No. boleta: {{item.noboleta}} </h2>\n                              <h2>Monto boleta: {{item.monto}}.00 </h2>\n\n\n                              <br>\n                              <h1>Estado: {{item.estado}} </h1>\n                          </ion-item>\n\n                       </ion-row>\n                       <ion-row no-padding>\n\n                        <ion-col>\n                          <button [hidden]="isDisablednit2"  color="primary" ion-button (click)="deleteRecord(item,i)">\n                             Eliminar horario\n                            </button>\n                        </ion-col>\n                        <ion-col>\n                          <button [hidden]="isDisablednit2"  color="primary"  ion-button  (click)="deleteRecord2(item,i)">\n                             Eliminar asignacion\n                            </button>\n                        </ion-col>\n\n                        <ion-col>\n                          <button [hidden]="isDisablednit2"  color="primary"  ion-button  (click)="imprime2pago(item,i)" >\n                              Finalizar Asignación sin pago\n                            </button>\n                        </ion-col>\n\n\n\n                          <ion-col>\n                              <button *ngIf="item.estado==\'Pendiente de Pago\'" ion-button  (click)="imprime(item,i)" >\n                                  Imprimir boleta pago\n                                </button>\n                            </ion-col>\n\n                            <ion-col>\n                              <button [hidden]="siasigna" *ngIf="item.estado==\'Pendiente de Pago\'" ion-button  (click)="imprime2(item,i)" >\n                                  Finalizar Asignación\n                                </button>\n                            </ion-col>\n\n                            <ion-col>\n                              <button *ngIf="item.estado==\'Asignación finalizada con exito\'" ion-button  (click)="imprime3(item,i)" >\n                                  Imprimir Constancia Asignación\n                                </button>\n                            </ion-col>\n\n\n                          </ion-row>\n                </ion-card>\n\n    </ion-item>\n   </ion-list>\n   <ion-infinite-scroll (ionInfinite)="loadMore($event)">\n      <ion-infinite-scroll-content></ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n\n\n\n\n  <ion-fab title=\'Crear Asignación\'  *ngIf="siprueba == false" bottom right #fab >\n<button color="secondary"  ion-fab (click)="addRecord()"><ion-icon name="add"></ion-icon></button>\n\n</ion-fab>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\PAP\asignacion-pap-list\asignacion-pap-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__providers_pdf_pdfx__["a" /* pdfx */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__providers__["d" /* NotificationProvider */], __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers__["a" /* Auth */]])
    ], AsignacionPapListPage);
    return AsignacionPapListPage;
}());

//# sourceMappingURL=asignacion-pap-list.js.map

/***/ })

});
//# sourceMappingURL=110.js.map