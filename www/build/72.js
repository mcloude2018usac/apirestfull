webpackJsonp([72],{

/***/ 1115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsignacionpcbPageModule", function() { return AsignacionpcbPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__asignacionpcb__ = __webpack_require__(1571);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pipes_pipes_module__ = __webpack_require__(445);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AsignacionpcbPageModule = /** @class */ (function () {
    function AsignacionpcbPageModule() {
    }
    AsignacionpcbPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__asignacionpcb__["a" /* AsignacionpcbPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__asignacionpcb__["a" /* AsignacionpcbPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild(),
                __WEBPACK_IMPORTED_MODULE_4__pipes_pipes_module__["a" /* PipesModule */]
            ],
        })
    ], AsignacionpcbPageModule);
    return AsignacionpcbPageModule;
}());

//# sourceMappingURL=asignacionpcb.module.js.map

/***/ }),

/***/ 1571:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AsignacionpcbPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_pdf_pdfx__ = __webpack_require__(447);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_barcode_scanner__ = __webpack_require__(449);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AsignacionpcbPage = /** @class */ (function () {
    //private barcodeScanner:BarcodeScanner,
    function AsignacionpcbPage(Pdfx, alertCtrl, storage, msj, translateService, navCtrl, _MODAL, navParams, regService, barcodeScanner) {
        var _this = this;
        this.Pdfx = Pdfx;
        this.alertCtrl = alertCtrl;
        this.storage = storage;
        this.msj = msj;
        this.translateService = translateService;
        this.navCtrl = navCtrl;
        this._MODAL = _MODAL;
        this.navParams = navParams;
        this.regService = regService;
        this.barcodeScanner = barcodeScanner;
        this.loading = true;
        this.items = [];
        this.items2 = [];
        this.personalid = "";
        this.nombre = '';
        this.tiposus = [];
        this.siprueba = true;
        this.generated = '';
        this.isDisablednit = true;
        this.idafiliado = 'na';
        this.gLimit = 50;
        this.PageSegmet = 'foods';
        this.gSearchQuery = '';
        this.username = "";
        this.excludeTracks = [];
        this.translateService.get('APPX').subscribe(function (value) {
            _this.idempresa = value;
        });
    }
    AsignacionpcbPage.prototype.clearSearchg = function () {
        this.gSearchQuery = '';
    };
    AsignacionpcbPage.prototype.verqr = function () {
        var _this = this;
        this.options = {
            prompt: "Esperando codigo...",
            preferFrontCamera: false,
            showFlipCameraButton: true,
            showTorchButton: true
        };
        this.barcodeScanner.scan(this.options).then(function (barcodeData) {
            var codigo = barcodeData.text;
            var aar = codigo.split("=");
            if (codigo != '') {
                var aa = aar[2];
                if (Number(aa) > 0) {
                    _this.regService.getRegS2(aa, 'estudiantepcb').then(function (data) {
                        _this.Pdfx.dapcb(aa, 'si', data);
                    }, function (err) {
                        _this.msj.showError3('Resultado', 'Resultado no encontrado.');
                    });
                }
                else {
                    _this.regService.getReg2b(aa, 'asignaestudiantes').then(function (data) {
                        //   this.Pdfx.daasigna(aa,'si',data,data[0].no_orientacion,'','')
                    }, function (err) {
                        _this.msj.showError3('Resultado', 'Resultado no encontrado.');
                    });
                }
            }
        }, function (err) {
            _this.msj.showError3('Error', 'ERRRO en lectura de codigo');
        });
    };
    AsignacionpcbPage.prototype.showFilter = function () {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: ' Ingrese NOV',
            message: ' NOV',
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
                            _this.regService.getReg2b('1/2/' + todo.NOV, 'asignapcbs').then(function (data) {
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
    AsignacionpcbPage.prototype.pideregistros2 = function () {
        var _this = this;
        this.storage.get('tiposus').then(function (value) {
            _this.tiposus = value.split(',');
            _this.personalid = _this.tiposus[3];
            _this.nov = _this.tiposus[5];
            _this.rol = _this.tiposus[6];
            _this.cui = _this.tiposus[2];
            if (_this.rol == 'user') {
                _this.isDisablednit = true;
            }
            else {
                _this.isDisablednit = false;
            }
            if (_this.tiposus[5] == '') {
                // this.pideregistros('1/2/3');
            }
            else {
                _this.pideregistros('1/2/' + value);
            }
        });
    };
    AsignacionpcbPage.prototype.pideregistros = function (op) {
        var _this = this;
        var self = this;
        self.loading = true;
        this.regService.getReg2b(op, 'asignapcbs').then(function (data) {
            _this.items = data;
            self.loading = false;
        }, function (err) {
            _this.msj.showError3('Error', err.error);
            // this.translateService.get('NO_OPERACION').subscribe((value) => { this.msj.showError3('Error',value);  })
        });
    };
    AsignacionpcbPage.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get('username').then(function (value) {
            _this.username = value;
        });
        this.storage.get('tiposus').then(function (value) {
            _this.tiposus = value.split(',');
            _this.personalid = _this.tiposus[3];
            _this.nov = _this.tiposus[5];
            _this.rol = _this.tiposus[6];
            _this.cui = _this.tiposus[2];
            if (_this.rol == 'user') {
                _this.isDisablednit = true;
            }
            else {
                _this.isDisablednit = false;
            }
            if (_this.tiposus[5] == '') {
                //|| this.username=='jggm.meph@gmail.com'
                //  if( this.rol=='Adminsuncentro' || this.rol=='SUN OPE ADMIN' || this.rol=='PAP Y SUN OPE ADMIN' || this.rol=='Administrador' || this.rol=='SUN OPERADOR'  || this.rol=='SUN ADMINISTRADOR' || this.rol=='SUN OPE ADMIN')
                if (_this.username == 'ambrosioaleman07@gmail.com' || _this.username == 'jggm.meph@gmail.com' || _this.username == 'mario.morales2@mcloude.com') {
                    _this.siprueba = false;
                    if (_this.nov != '') {
                        _this.pideregistros('1/2/' + _this.nov);
                    }
                }
                // this.pideregistros('1/2/3');
            }
            else {
                if (_this.username == 'ambrosioaleman07@gmail.com' || _this.username == 'jggm.meph@gmail.com' || _this.username == 'mario.morales2@mcloude.com') 
                //  if(this.rol=='Adminsuncentro' || this.rol=='SUN OPE ADMIN' || this.rol=='PAP Y SUN OPE ADMIN' || this.rol=='Adminsuncentro' ||  this.rol=='Administrador' || this.rol=='SUN OPERADOR'  || this.rol=='SUN ADMINISTRADOR' || this.rol=='SUN OPE ADMIN')
                {
                    _this.siprueba = false;
                    if (_this.nov != '') {
                        _this.pideregistros('1/2/' + _this.nov);
                    }
                }
                else {
                    if (_this.siprueba == false) {
                        if (_this.nov != '') {
                            _this.pideregistros('1/2/' + _this.nov);
                        }
                    }
                    else {
                        _this.pideregistros('1/2/' + _this.nov);
                    }
                }
            }
        });
    };
    AsignacionpcbPage.prototype.ionViewDidLoad = function () {
    };
    AsignacionpcbPage.prototype.loadMore = function (ev) {
        this.gLimit += 50;
        setTimeout(function () { return ev.complete(); }, 1000);
    };
    AsignacionpcbPage.prototype.deleteRecord2 = function (item, no) {
        var _this = this;
        var alert = this.alertCtrl.create({ title: 'Esta seguro de realizar esta operación?',
            buttons: [
                { text: 'Si',
                    handler: function () {
                        var recordID = item._id;
                        _this.regService.deleteReg(recordID + '/' + _this.username + '/' + _this.idempresa + '/' + _this.idafiliado, 'asignapcbs').then(function (data) {
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
    AsignacionpcbPage.prototype.dahelp = function () {
        //this.msj.showError3('Link QR',op);
        this.regService.abrelinkinterno2('http://nuevos.usac.edu.gt/');
    };
    AsignacionpcbPage.prototype.imprime = function (item, no) {
        var _this = this;
        this.regService.getReg2b(item._id, 'asignaestudiantes').then(function (data) {
            if (item.tipoasignacion == 'enlinea') {
                _this.Pdfx.daasigna(item._id, 'si', data, item.no_orientacion, 'UNIDAD ACADÉMICA: ' + item.idunidadacademica.nombre, 'ESTUDIARA EN: ' + item.idtipounidad.nombre, item.fechaini);
            }
            else {
                _this.Pdfx.daasigna(item._id, 'si', data, item.no_orientacion, 'ESTUDIARA EN: ' + item.idtipounidad2.nombre + ' -> ' + item.idunidadacademica2.nombre, 'REALIZARÁ EL EXÁMEN EN:' + item.idtipounidad.nombre, item.fechaini);
            }
        }, function (err) {
            _this.msj.showError3('Resultado', 'Resultado no encontrado.');
        });
    };
    AsignacionpcbPage.prototype.deleteRecord = function (item, no) {
        var _this = this;
        var alert = this.alertCtrl.create({ title: 'Esta seguro de realizar esta operación?',
            buttons: [
                { text: 'Si',
                    handler: function () {
                        var options = {
                            nombre: 'Solicitud de eliminacion de asignación Unidad academica: ' + item.idunidadacademica.nombre + '  periodo: ' + item.idperiodo.nombre + ' <br>  NOMBRE: ' + item.nombre + '  NOV: ' + item.no_orientacion,
                            estado: 'Solicitando',
                            correo: _this.username,
                            bitacora: { idempresa: _this.idempresa, idafiliado: '', email: _this.username, permiso: 'Crea', accion: ' Solicitud de eliminacion nuevo salon ' }
                        };
                        if (options) {
                            _this.regService.createReg('', options, 'nuevosalons').then(function (result) {
                                _this.msj.showError3('Error', 'Solicitud enviada a administrador con exito, revise mas tarde si ya fue eliminada la asignación');
                            }, function (err) {
                                _this.msj.showError3('Error', err.error);
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
    AsignacionpcbPage.prototype.updateRecord = function (item, no) {
        var _this = this;
        var addModal = this._MODAL.create('AsignacionpcbCreatePage', { record: item }, { showBackdrop: true, enableBackdropDismiss: false });
        addModal.onDidDismiss(function (data) {
            if (data) {
                _this.items.splice(no, 1);
                _this.items = _this.items.concat([data]);
            }
        });
        addModal.present();
        //  this.navCtrl.push('EmpresaCreatePage', { record : item });
    };
    AsignacionpcbPage.prototype.detalleRecord = function (item) {
        this.navCtrl.push('DcatalogoListPage', { record: item });
    };
    AsignacionpcbPage.prototype.addRecord = function () {
        var _this = this;
        this.storage.get('tiposus').then(function (value) {
            _this.tiposus = value.split(',');
            if (_this.tiposus[6] == 'user') {
                if (_this.tiposus[5] == '' || _this.tiposus[5] == undefined) {
                    var prompt_1 = _this.alertCtrl.create({
                        title: ' Ingrese Numero de Orientación Vocacional (NOV) ó Carné Universitario',
                        message: 'Para actualizar su perfil y continuar con su inscripción a Pruebas de Conocimientos Básicos',
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
                                        _this.msj.showError3('Error', 'Ingrese Numero de Orientación Vocacional (NOV) ó Carné Universitario válido menor a 11 digitos');
                                        return;
                                    }
                                    _this.regService.validacarnenov(nn).then(function (data2) {
                                        var vec = (data2);
                                        var cad = vec.split('°');
                                        _this.nombre = '';
                                        var msj = '';
                                        if (cad[1] == 'undefined' || cad[1] == '' || cad[1] == undefined) {
                                            _this.msj.showError3('Error', 'Ingrese un Número de Orientación Vocacional (NOV) ó Carné Universitario válido');
                                            return;
                                        }
                                        if (cad[0] == 'CARNE') {
                                            _this.nombre = cad[1];
                                            if (cad[2]) {
                                                _this.cui = cad[2];
                                            }
                                            msj = 'Este NOV esta relacionado con <br>' + _this.nombre + ' <br> ¿es correcta esta información? <br> Para guardarla en tu perfil <br> Si es tu nombre clic en "SI" <br> Si no es tu nombre clic en "NO" e ingresa tu número correcto.';
                                        }
                                        else {
                                            _this.nombre = cad[1];
                                            msj = 'Este NOV esta relacionado con <br>' + _this.nombre + ' <br> ¿es correcta esta información? <br> Para guardarla en tu perfil <br> Si es tu nombre clic en "SI" <br> Si no es tu nombre clic en "NO" e ingresa tu número correcto.';
                                        }
                                        var alert = _this.alertCtrl.create({ title: msj,
                                            buttons: [
                                                { text: 'Si',
                                                    handler: function () {
                                                        //ACTUALIZAR NOMBRE Y NOV/CARNET Y NOMBRE EN DB
                                                        if (_this.nombre == '' || _this.nombre == '   ' || _this.nombre == 'undefined') {
                                                            _this.msj.showError3('Error', 'Nombre  no valido , no es posible relacionar este suscriptor');
                                                            _this.isDisablednit = true;
                                                            _this.navCtrl.pop();
                                                            return;
                                                        }
                                                        var credentials = {
                                                            _id: _this.personalid,
                                                            nombre: _this.nombre,
                                                            cui: _this.cui,
                                                            nov: nn,
                                                            bitacora: { idempresa: _this.idempresa, idafiliado: '', email: _this.username, permiso: 'Actualiza', accion: 'Actualiza nov y cui perfil' }
                                                        };
                                                        _this.regService.createReg('actualizanov', credentials, 'personals').then(function (result) {
                                                            _this.storage.set('tiposus', (_this.tiposus[0] + ',' + _this.tiposus[1] + ',' + _this.cui + ',' + _this.tiposus[3] + ',' + _this.nombre + ',' + nn + ',' + _this.tiposus[6] + ',' + _this.tiposus[7] + ',' + _this.tiposus[8] + ',' + _this.tiposus[9]));
                                                            var addModal = _this._MODAL.create('AsignacionpcbCreatePage', { record: null, nov: nn }, { showBackdrop: true, enableBackdropDismiss: false });
                                                            addModal.onDidDismiss(function (data) {
                                                                if (data) {
                                                                    _this.items = _this.items.concat([data]);
                                                                }
                                                            });
                                                            addModal.present();
                                                        }, function (err) {
                                                            _this.translateService.get('USER_ERROR').subscribe(function (value) {
                                                                _this.msj.showError3('Error', value);
                                                            });
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
                    var addModal = _this._MODAL.create('AsignacionpcbCreatePage', { record: null, nov: _this.tiposus[5] }, { showBackdrop: true, enableBackdropDismiss: false });
                    addModal.onDidDismiss(function (data) {
                        if (data) {
                            _this.items = _this.items.concat([data]);
                        }
                    });
                    addModal.present();
                }
            }
            else {
                var addModal = _this._MODAL.create('AsignacionpcbCreatePage', { record: null, nov: '' }, { showBackdrop: true, enableBackdropDismiss: false });
                addModal.onDidDismiss(function (data) {
                    if (data) {
                        _this.items = _this.items.concat([data]);
                    }
                });
                addModal.present();
            }
        });
    };
    AsignacionpcbPage.prototype.viewRecord = function (item) {
        // let modal = this._MODAL.create(ViewGalleryPage, { record : item });
        // modal.present();
    };
    AsignacionpcbPage.prototype.verasig = function (item, op) {
        var addModal = this._MODAL.create('AsignacionpcbViewPage', { record: { idasigna: item._id } }, { showBackdrop: true, enableBackdropDismiss: false });
        addModal.onDidDismiss(function (data) {
        });
        addModal.present();
    };
    AsignacionpcbPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    AsignacionpcbPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-asignacionpcb',template:/*ion-inline-start:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\SUN\asignacionpcb\asignacionpcb.html"*/'<ion-header no-border class="opaque" >\n  <ion-navbar  no-border-bottom hideBackButton="true">\n\n        <ion-buttons left>\n          <button ion-button icon-only (click)="goBack()">\n            <ion-icon name="arrow-back"></ion-icon>\n          </button>\n        </ion-buttons>\n      <ion-title>\n      Asignación pruebas de Conocimientos Basicos PCB\n      </ion-title>\n\n      <ion-buttons end>\n          <button [hidden]="(isDisablednit)"  (click)="showFilter()" icon-only ion-button padding-right>\n              <ion-icon name="funnel"></ion-icon>\n            </button>\n\n            <button [hidden]="(isDisablednit)"  (click)="verqr()" icon-only ion-button padding-right>\n                <ion-icon name="md-barcode"></ion-icon>\n              </button>\n\n             <button  [hidden]="(isDisablednit)" (click)="pideregistros2()" icon-only ion-button padding-right>\n              <ion-icon name="refresh"></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n\n\n  </ion-header>\n\n  <ion-content  fullscreen>\n\n\n     <ion-list >\n                <ion-item text-wrap>\n                    <ion-icon name="at" item-start></ion-icon>\n\n                  <h2> La inscripción a Pruebas de Conocimientos Básicos PCB exclusiva para la Licenciatura en Criminología y Criminalística inicia a las 08:00 y finaliza a las 23:55 horas del 07 de noviembre. </h2><br>\n                <h2> Más información en la fan Page de Facebook: Sistema de Ubicación y Nivelación SUN.</h2>\n                    <ion-badge item-end>Usacenlinea</ion-badge>\n                  </ion-item>\n\n                  <ion-item text-center>\n                      <img src="../assets/img/logoit.jpg" />\n                    </ion-item>\n\n        <ion-item    *ngFor="let item of items  | LimitPipe: gLimit ;let i = index;" text-wrap>\n            <ion-card >\n                <ion-row>\n                    <ion-col  style="border:none;background: rgb(212, 224, 250);"  text-right>\n                            No: {{i+1}}\n                    </ion-col>\n                    <ion-item text-wrap>\n                      <button ion-item  >\n\n                            <h2 *ngIf="item.tipoasignacion== \'manual\'">Realizará el exámen en: {{item.idtipounidad.nombre}} </h2>\n                            <h2  *ngIf="item.tipoasignacion== \'manual\'" >Estuadiara en :  {{item.idtipounidad2.nombre}}  -> {{item.idunidadacademica2.nombre}} </h2>\n\n                            <h2 *ngIf="item.tipoasignacion== \'enlinea\'">Ubicación: {{item.idtipounidad.nombre}} </h2>\n                            <h2  *ngIf="item.tipoasignacion== \'enlinea\'" >Unidad academica: {{item.idunidadacademica.nombre}} </h2>\n                                  <h2>NOV: {{item.no_orientacion}} </h2>\n                                <h2>Nombre: {{item.nombre}} </h2>\n\n                                <h2>Fecha de incripción: {{item.date  | date : \'dd/MM/yyyy\'  }} </h2>\n                      </button>\n                    </ion-item>\n                  </ion-row>\n\n                    <ion-row no-padding>\n                         <!--\n                              <ion-col>\n                                <button  (click)="verasig(item,1)" title="Obtener información de los cursos asignados"\n                                ion-button clear small  icon-start>\n                                 <ion-icon name=\'checkbox\'></ion-icon>\n                                 Visualizar cursos asignados\n                               </button>\n                            </ion-col>\n\n                            <ion-col>\n                                    <button (click)="tomaqrpage(item)" ion-button clear small  icon-start>\n                                      <ion-icon name=\'md-barcode\'></ion-icon>\n                                      QR\n                                    </button>\n                            </ion-col>\n                            -->\n\n                            <ion-col text-center>\n                                <ion-col>\n                                    <button  ion-button  (click)="imprime(item,i)" >\n                                        Generar Constancia de inscripción a PCB\n                                      </button>\n                                  </ion-col>\n\n                              </ion-col>\n\n\n\n                    </ion-row>\n\n                </ion-card>\n\n\n\n\n\n\n\n\n      </ion-item>\n     </ion-list>\n     <ion-infinite-scroll (ionInfinite)="loadMore($event)">\n        <ion-infinite-scroll-content></ion-infinite-scroll-content>\n      </ion-infinite-scroll>\n\n      <!--<ion-fab bottom right #fab >-->\n\n        <ion-fab  title=\'Mas Información\'  bottom left #fab >\n          <button color="primary"  ion-fab (click)="dahelp()"><ion-icon name="information"></ion-icon></button>\n\n      </ion-fab>\n\n              <ion-fab title=\'Crear Asignación\'  *ngIf="siprueba == false" bottom right #fab >\n          <button color="secondary"  ion-fab (click)="addRecord()"><ion-icon name="add"></ion-icon></button>\n\n      </ion-fab>\n\n  </ion-content>\n'/*ion-inline-end:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\SUN\asignacionpcb\asignacionpcb.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__providers_pdf_pdfx__["a" /* pdfx */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_2__providers__["d" /* NotificationProvider */], __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers__["a" /* Auth */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_barcode_scanner__["a" /* BarcodeScanner */]])
    ], AsignacionpcbPage);
    return AsignacionpcbPage;
}());

//# sourceMappingURL=asignacionpcb.js.map

/***/ })

});
//# sourceMappingURL=72.js.map