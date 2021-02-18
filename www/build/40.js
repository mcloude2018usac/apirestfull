webpackJsonp([40],{

/***/ 1091:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__profile__ = __webpack_require__(1547);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ProfilePageModule = /** @class */ (function () {
    function ProfilePageModule() {
    }
    ProfilePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__profile__["a" /* ProfilePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["q" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__profile__["a" /* ProfilePage */]), __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], ProfilePageModule);
    return ProfilePageModule;
}());

//# sourceMappingURL=profile.module.js.map

/***/ }),

/***/ 1547:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_camera__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







//import { AndroidPermissions } from '@ionic-native/android-permissions';
var ProfilePage = /** @class */ (function () {
    //private androidPermissions: AndroidPermissions,
    function ProfilePage(navParams, navCtrl, _MODAL, alertCtrl, storage, formBuilder, authService, msj, translateService, camera, actionSheetCtrl, _IMAGE, events) {
        var _this = this;
        this.navParams = navParams;
        this.navCtrl = navCtrl;
        this._MODAL = _MODAL;
        this.alertCtrl = alertCtrl;
        this.storage = storage;
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.msj = msj;
        this.translateService = translateService;
        this.camera = camera;
        this.actionSheetCtrl = actionSheetCtrl;
        this._IMAGE = _IMAGE;
        this.events = events;
        this.internetConnected = true;
        this.siactualiza = 0;
        this.pet = "puppies";
        this.username = "";
        this.personalid = "";
        this.APP = '';
        this.esconde1 = true;
        this.esconde2 = true;
        this.esconde3 = false;
        this.pofilel = './assets/img/profilelocal.png';
        this.pingreso = false;
        this.pconsulta = false;
        this.peliminacion = false;
        this.pcreacion = false;
        this.pactualizacion = false;
        this.permisom = [];
        this.languages = ['Español', 'English'];
        this.sexos = ['Masculino', 'Femenino'];
        this.meses = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
        this.anos = ['2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025'];
        this.networkConnected = function (connection) {
            var self = _this;
            self.internetConnected = connection;
            if (self.internetConnected) {
            }
            else {
                _this.translateService.get('NO_CONEXION').subscribe(function (value) {
                    _this.msj.showError3('Error', value);
                });
            }
        };
        this.translateService.get('APPX').subscribe(function (value) {
            _this.idempresa = value;
        });
        this.permisom = String(navParams.get("permiso")).split(",");
        this.pingreso = (this.permisom[0] == 'true');
        this.pconsulta = (this.permisom[1] == 'true');
        this.peliminacion = (this.permisom[2] == 'true');
        this.pcreacion = (this.permisom[3] == 'true');
        this.pactualizacion = (this.permisom[4] == 'true');
        this.image = this.pofilel;
        var self = this;
        self.events.subscribe('network:connected', self.networkConnected);
        this.Form = formBuilder.group({
            nov: [''],
            nombre: [''],
            cui: ['', __WEBPACK_IMPORTED_MODULE_6__angular_forms__["h" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_6__angular_forms__["h" /* Validators */].required])],
            direccion: ['', __WEBPACK_IMPORTED_MODULE_6__angular_forms__["h" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_6__angular_forms__["h" /* Validators */].required])],
            fotot: ['', __WEBPACK_IMPORTED_MODULE_6__angular_forms__["h" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_6__angular_forms__["h" /* Validators */].required])],
            telefono: ['', __WEBPACK_IMPORTED_MODULE_6__angular_forms__["h" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_6__angular_forms__["h" /* Validators */].maxLength(30), __WEBPACK_IMPORTED_MODULE_6__angular_forms__["h" /* Validators */].pattern(/^\d{8}$/), __WEBPACK_IMPORTED_MODULE_6__angular_forms__["h" /* Validators */].required])],
            sexo: ['', __WEBPACK_IMPORTED_MODULE_6__angular_forms__["h" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_6__angular_forms__["h" /* Validators */].required])],
            unidad: [''],
            fecha_nac: [''],
            tiposuscriptor: [''],
            codpersonal: ['']
            //      nombret: ['', Validators.compose([Validators.maxLength(30), Validators.pattern(/[a-zA-Z ]*/), Validators.required])],
            //    numerot: ['', Validators.compose([Validators.maxLength(30), Validators.pattern(/^\d{12}$/), Validators.required])],
            //      mest: ['', Validators.compose([ Validators.required])],
            //     anot: ['', Validators.compose([ Validators.required])],
            //   cvvt: ['', Validators.compose([Validators.maxLength(30), Validators.pattern(/^\d{03}$/), Validators.required])]
        });
        this.translateService.get('APPX').subscribe(function (value) {
            _this.APP = value;
        });
    }
    ProfilePage.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get('username').then(function (value) {
            _this.username = value;
            _this.loadUserProfile(value);
        });
    };
    ProfilePage.prototype.poneperfilblanco = function () {
        this.image = this.pofilel;
        // this.events.publish('nombre:cambia', '');
        // this.events.publish('foto:cambia', '');
    };
    ProfilePage.prototype.ionViewDidLoad = function () {
    };
    ProfilePage.prototype.loadUserProfile = function (usert) {
        var _this = this;
        this.authService.getReg(usert + '/emailsolo/' + this.APP, 'personals').then(function (data) {
            if (data) {
                _this.Form.controls['nombre'].setValue(data[0].nombre);
                _this.Form.controls['cui'].setValue(data[0].cui);
                _this.Form.controls['direccion'].setValue(data[0].direccion);
                _this.Form.controls['telefono'].setValue(data[0].telefono);
                // this.Form.controls['leng'].setValue(data[0].lenguaje);
                _this.Form.controls['fecha_nac'].setValue(data[0].fechanac);
                _this.Form.controls['sexo'].setValue(data[0].sexo);
                _this.Form.controls['nov'].setValue(data[0].nov);
                _this.Form.controls['unidad'].setValue(data[0].unidad.nombre);
                _this.Form.controls['tiposuscriptor'].setValue(data[0].tiposuscriptor.nombre);
                _this.unidad2 = data[0].unidad._id;
                _this.controlacceso = data[0].controlacceso;
                _this.Form.controls['codpersonal'].setValue(data[0].codpersonal);
                _this.rolt = data[0].role;
                _this.idsuscriptort = data[0]._id;
                _this.estadot = data[0].estado;
                _this.internot = data[0].interno;
                _this.tiposuscriptort = data[0].tiposuscriptor._id;
                _this.tiposusnombre = data[0].tiposuscriptor.nombre;
                _this.cobraparqueo = data[0].tiposuscriptor.cobroparqueos;
                /*   this.Form.controls['nombret'].setValue(data[0].nombret);
                   this.Form.controls['numerot'].setValue(data[0].numerot);
                   this.Form.controls['mest'].setValue(data[0].mest);
                   this.Form.controls['anot'].setValue(data[0].anot);
                   this.Form.controls['cvvt'].setValue(data[0].cvvt);*/
                if (data[0].foto) {
                    _this.fotot = data[0].foto;
                    _this.image = data[0].foto;
                }
                else {
                }
                _this.personalid = data[0]._id;
                _this.esconde3 = false;
                if (_this.APP == "WebApp Usacenlinea") {
                    _this.esconde1 = false;
                    _this.esconde2 = false;
                    if (_this.tiposusnombre == "Estudiante") {
                        _this.esconde1 = true;
                        _this.esconde2 = false;
                    }
                    else {
                        if (_this.tiposusnombre == "Trabajador") {
                            _this.esconde1 = false;
                            _this.esconde2 = true;
                        }
                        else {
                            _this.esconde1 = true;
                            _this.esconde2 = true;
                        }
                    }
                }
                else {
                    _this.esconde1 = true;
                    _this.esconde2 = true;
                    _this.esconde3 = true;
                }
            }
        }, function (err) {
            _this.poneperfilblanco;
        });
    };
    ProfilePage.prototype.updateProfileImage = function () {
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
    ProfilePage.prototype.takePhotograph = function () {
        /*
            this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.CAMERA).then(
                result => {
              this.msj.showError3('Mensaje','permission result '+ result.hasPermission );
        
        
                    if(!result.hasPermission) {
                        this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.CAMERA)
                        .then( cam => {
                  this.msj.showError3('Mensaje','permission result '+ JSON.stringify(cam) );
                        //	alert('permission result '+ JSON.stringify(cam) );
                          this.takePhotograph();
                        })
                        .catch( error => {
                  this.msj.showError3('','permission error occured '+ JSON.stringify(error) );
        
                        });
                    } else {
                this.takePhotograph();
                    }
                },
                err => {
                    this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.CAMERA);
            });
            */
        var _this = this;
        if (__WEBPACK_IMPORTED_MODULE_1__ionic_native_camera__["a" /* Camera */]['installed']()) {
            this._IMAGE
                .takePhotograph()
                .then(function (image) {
                _this.fotot = image.toString();
                _this.image = image.toString();
            })
                .catch(function (err) {
                console.log(err);
            });
        }
        else {
            this.fileInput.nativeElement.click();
        }
    };
    ProfilePage.prototype.selectImage = function () {
        var _this = this;
        if (__WEBPACK_IMPORTED_MODULE_1__ionic_native_camera__["a" /* Camera */]['installed']()) {
            // this.msj.showError3('Mensaje','INSTALADA' );
            this._IMAGE
                .selectPhotograph()
                .then(function (image) {
                _this.fotot = image.toString();
                _this.image = image.toString();
            })
                .catch(function (err) {
                console.log(err);
            });
        }
        else {
            //  this.msj.showError3('Mensaje','NO INSTALADA' );
            this.fileInput.nativeElement.click();
        }
    };
    ProfilePage.prototype.processWebImage = function (event) {
        var _this = this;
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();
            reader.onload = function (readerEvent) {
                _this.image = readerEvent.target.result;
                _this._IMAGE.generateFromImage(_this.image.changingThisBreaksApplicationSecurity, 400, 400, 0.5, function (data) {
                    _this.image = data;
                    _this.fotot = data;
                });
            };
            reader.readAsDataURL(event.target.files[0]);
        }
    };
    ProfilePage.prototype.showFilter3 = function () {
    };
    ProfilePage.prototype.cambioclave = function () {
        var _this = this;
        if (this.username == '') {
            this.msj.showError3('Mensaje', 'Existe un problema con su dispositivo , no existe usuario');
            return;
        }
        if (!this.username) {
            this.msj.showError3('Mensaje', 'Existe un problema con su dispositivo , no existe usuario');
            return;
        }
        var prompt = this.alertCtrl.create({
            title: 'Cambio de Contraseña',
            message: '',
            inputs: [
                {
                    name: 'clave1',
                    placeholder: 'Ingrese Contraseña nueva',
                    type: 'password'
                },
                {
                    name: 'clave2',
                    placeholder: 'Ingrese Confirmación de Contraseña nueva',
                    type: 'password'
                }
            ],
            buttons: [
                {
                    text: 'Cancelar'
                },
                {
                    text: 'Actualizar Contraseña',
                    handler: function (todo) {
                        if (todo) {
                            if (todo.clave1 == todo.clave2) {
                                var credentials = {
                                    idempresa: _this.idempresa,
                                    email: _this.username,
                                    password: todo.clave1,
                                    bitacora: { idempresa: _this.idempresa, idafiliado: '', email: _this.username, permiso: 'Actualiza', accion: 'Cambia clave' }
                                };
                                _this.authService.createAPISINTOKEN(credentials, '/api/auth/register2').then(function (result) {
                                    _this.msj.showError3('Exito', 'Operación realizada con exito.');
                                }, function (err) {
                                    _this.msj.showError3('Advertencia', 'Email ya esta asociado una cuenta existente');
                                });
                            }
                            else {
                                _this.msj.showError3('Advertencia', 'Contraseñas no coinciden.');
                            }
                            /*
            
            
            
            
              */
                        }
                    }
                }
            ]
        });
        prompt.present();
    };
    ProfilePage.prototype.actualizar = function () {
        var _this = this;
        if (this.username == '') {
            this.msj.showError3('Error', 'Existe un problema con su dispositivo , no existe usuario');
            return;
        }
        if (!this.username) {
            this.msj.showError3('Error', 'Existe un problema con su dispositivo , no existe usuario');
            return;
        }
        var credentials = {
            idempresa: this.idempresa,
            email: this.username,
            role: this.rolt,
            nombre: this.Form.get('nombre').value,
            cui: this.Form.get('cui').value,
            direccion: this.Form.get('direccion').value,
            telefono: this.Form.get('telefono').value,
            foto: this.fotot,
            lenguaje: 'Español',
            sexo: this.Form.get('sexo').value,
            estado: this.estadot,
            nov: this.Form.get('nov').value,
            unidad: this.unidad2,
            interno: this.internot,
            estadoemail: '1',
            codpersonal: this.Form.get('codpersonal').value,
            usuarioup: this.username,
            fechanac: this.Form.get('fecha_nac').value,
            tiposuscriptor: this.tiposuscriptort,
            bitacora: { idempresa: this.idempresa, idafiliado: '', email: this.username, permiso: 'Actualiza', accion: 'Actualiza perfil' }
        };
        this.authService.createReg(this.personalid, credentials, 'personals').then(function (result) {
            _this.translateService.get('ACTUALIZA').subscribe(function (value) {
                //   this.msj.showError3('Exitos',value);
                _this.storage.set('tiposus', _this.tiposusnombre + ',' + _this.cobraparqueo + ',' + _this.Form.get('cui').value + ',' + _this.idsuscriptort + ',' + _this.Form.get('nombre').value + ',' + _this.Form.get('nov').value + ',' + _this.rolt + ',' + _this.unidad2 + ',' + _this.controlacceso + ',' + _this.fotot);
                _this.events.publish('nombre:cambia', _this.Form.get('nombre').value);
                _this.events.publish('foto:cambia', _this.fotot);
            });
        }, function (err) {
            _this.translateService.get('USER_ERROR').subscribe(function (value) {
                _this.msj.showError3('Error', value);
            });
        });
    };
    ProfilePage.prototype.saldohisRecord = function () {
        this.navCtrl.push('HistorialListPage', { record: { idsuscriptor: this.idsuscriptort, idnombre: this.Form.get('nombre').value, iddpi: this.Form.get('cui').value } });
    };
    ProfilePage.prototype.saldoRecord = function () {
        var _this = this;
        this.authService.getReg(this.idsuscriptort, 'suscriptorsaldos').then(function (data) {
            var addModal = _this._MODAL.create('SuscriptorsaldoPage', { record: data, record2: { idsuscriptor: _this.idsuscriptort, idnombre: _this.Form.get('nombre').value, iddpi: _this.Form.get('cui').value } }, { showBackdrop: true, enableBackdropDismiss: false });
            addModal.onDidDismiss(function (data) {
                if (data) {
                }
            });
            addModal.present();
        }, function (err) {
            // this.translateService.get('NO_OPERACION').subscribe((value) => { this.msj.showError3('Error',value);  })
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('fileInput'),
        __metadata("design:type", Object)
    ], ProfilePage.prototype, "fileInput", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["f" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["f" /* Content */])
    ], ProfilePage.prototype, "content", void 0);
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-profile',template:/*ion-inline-start:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\profile\profile.html"*/'<ion-header no-border class="opaque">\n  <ion-navbar  no-border-bottom>\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n          </button>\n      <ion-title> {{ \'CONF_PERFIL\' | translate }}</ion-title>\n     <ion-buttons end>\n\n            <button  (click)="actualizar()" [disabled]="(Form.invalid) || (!pactualizacion)" *ngIf="internetConnected" icon-only ion-button padding-right>\n                    <ion-icon name="done-all"></ion-icon>\n                  </button>\n\n                  <button rel="tooltip" title="Cambio Clave"   (click)="cambioclave()" [disabled]="Form.invalid" *ngIf="internetConnected" icon-only ion-button padding-right>\n                        <ion-icon name="key"></ion-icon>\n                      </button>\n\n                      <button rel="tooltip" title="Visualizar dispositivos" (click)="saldoRecord()" [disabled]="Form.invalid" *ngIf="internetConnected" icon-only ion-button padding-right>\n                        <ion-icon name="card"></ion-icon>\n                      </button>\n                      <button rel="tooltip" title="Historial Saldo"  (click)="saldohisRecord()" [disabled]="Form.invalid" *ngIf="internetConnected" icon-only ion-button padding-right>\n                            <ion-icon name="list-box"></ion-icon>\n                          </button>\n          </ion-buttons>\n\n    </ion-navbar>\n </ion-header>\n\n  <ion-content fullscreen>\n        <ion-avatar item-start >\n                <img id="profile-image" (click)="updateProfileImage()" [src]="image"  src="{{pofilel}}">\n\n        </ion-avatar>\n\n          <ion-toolbar >\n              <ion-segment   [(ngModel)]="pet" >\n                <ion-segment-button value="puppies">\n                        {{ \'GENERAL_PERFIL\' | translate }}\n                </ion-segment-button>\n\n              </ion-segment>\n            </ion-toolbar>\n\n            <form [formGroup]="Form" text-wrap>\n            <div id="content">\n                <div id="profile-info">\n\n                        <input type="file" accept="image/*" #fileInput style="visibility: hidden; height: 0px" (change)="processWebImage($event)" />\n                        <input\n                        type="hidden"\n                        name="fotot"\n                        formControlName="fotot"\n                        [(ngModel)]="fotot">\n\n                </div>\n              </div>\n        <div padding>\n            <div [ngSwitch]="pet">\n                <ion-list *ngSwitchCase="\'puppies\'">\n                    <ion-row style="border:none" no-padding >\n                        <ion-col>\n                            <ion-list >\n                                <ion-item >\n                                    <ion-label  class="my-label18"  color="secondary2" >Correo:  </ion-label>\n                                    <ion-input [disabled]="true"  value="{{username}}" type="text"></ion-input>\n                                  </ion-item>\n\n\n                                    <ion-item *ngIf="1==2"  >\n                                            <ion-label  class="my-label18" color="secondary2"  stacked> Carné o Numero de orientación vocacional   </ion-label>\n                                            <ion-input [disabled]="true" [formControl]="Form.controls[\'nov\']" type="Number"></ion-input>\n                                          </ion-item>\n\n                                          <ion-item class="invalid" *ngIf="!Form.controls.nov.valid && (Form.controls.nov.dirty || Form.controls.nov.touched)" text-wrap>\n                                              <ion-icon name="warning"></ion-icon>\n                                              Carné o Numero de orientación vocacional\n                                          </ion-item>\n\n                                  <ion-item >\n\n                                    <ion-label  class="my-label18"  color="secondary2" stacked> {{ \'NAME\' | translate }}  </ion-label>\n                                    <ion-input [disabled]="true"  [formControl]="Form.controls[\'nombre\']" type="text"></ion-input>\n                                  </ion-item>\n\n                                    <ion-item class="invalid" *ngIf="!Form.controls.nombre.valid && (Form.controls.nombre.dirty || Form.controls.nombre.touched)" text-wrap>\n                                      <ion-icon name="warning"></ion-icon>\n                                      {{ \'NAMET\' | translate }}\n                                  </ion-item>\n\n                                  <ion-item >\n                                      <ion-label class="my-label18"  color="secondary2" > {{ \'CUI\' | translate }}  </ion-label>\n                                      <ion-input   [formControl]="Form.controls[\'cui\']" type="text"></ion-input>\n                                  </ion-item>\n\n                                    <ion-item class="invalid" *ngIf="!Form.controls.cui.valid && (Form.controls.cui.dirty || Form.controls.cui.touched)" text-wrap>\n                                        <ion-icon name="warning"></ion-icon>\n                                        {{ \'CUIT\' | translate }}\n                                    </ion-item>\n\n                                    <ion-item >\n                                        <ion-label class="my-label18"  color="secondary2" > {{ \'DIRECCION\' | translate }}  </ion-label>\n                                        <ion-input   [formControl]="Form.controls[\'direccion\']" type="text"></ion-input>\n                                      </ion-item>\n\n                                      <ion-item class="invalid" *ngIf="!Form.controls.direccion.valid\n                                      && (Form.controls.direccion.dirty || Form.controls.direccion.touched)" text-wrap>\n                                          <ion-icon name="warning"></ion-icon>\n                                          {{ \'DIRECCIONT\' | translate }}\n                                      </ion-item>\n\n                                      <ion-item >\n                                          <ion-label class="my-label18"  color="secondary2" > {{ \'TELEFONO\' | translate }}  </ion-label>\n                                          <ion-input   [formControl]="Form.controls[\'telefono\']" type="number"></ion-input>\n                                        </ion-item>\n\n                                        <ion-item class="invalid" *ngIf="!Form.controls.telefono.valid\n                                        && (Form.controls.telefono.dirty || Form.controls.telefono.touched)" text-wrap>\n                                            <ion-icon name="warning"></ion-icon>\n                                            {{ \'TELEFONOT\' | translate }}\n                                        </ion-item>\n<!--\n                                        <ion-item >\n                                            <ion-label  color="secondary2" > {{ \'LENGUAJE\' | translate }}  </ion-label>\n                                            <ion-select [formControl]="Form.controls[\'leng\']" >\n                                                <ion-option text-wrap *ngFor="let lenguage of languages" [value]="lenguage">{{lenguage}}</ion-option>\n                                              </ion-select>\n\n                                          </ion-item>\n\n                                          <ion-item class="invalid" *ngIf="!Form.controls.leng.valid\n                                          && (Form.controls.leng.dirty || Form.controls.leng.touched)" text-wrap>\n                                              <ion-icon name="warning"></ion-icon>\n                                              {{ \'LENGUAJET\' | translate }}\n                                          </ion-item>\n                                       -->\n                                          <ion-item >\n                                            <ion-label class="my-label18"  color="secondary2" stacked> {{ \'SEXO\' | translate }}  </ion-label>\n                                            <ion-select [formControl]="Form.controls[\'sexo\']" >\n                                                <ion-option text-wrap *ngFor="let lenguage of sexos" [value]="lenguage">{{lenguage}}</ion-option>\n                                              </ion-select>\n\n                                          </ion-item>\n\n\n                                          <ion-item class="invalid" *ngIf="!Form.controls.sexo.valid\n                                          && (Form.controls.sexo.dirty || Form.controls.sexo.touched)" text-wrap>\n                                              <ion-icon name="warning"></ion-icon>\n                                              {{ \'SEXOT\' | translate }}\n                                          </ion-item>\n\n                                          <ion-item margin-bottom>\n                                                <ion-label class="my-label18" color="secondary2" >Fecha nacimiento</ion-label>\n                                                <ion-datetime displayFormat="DD/MM/YYYY"   [formControl]="Form.controls[\'fecha_nac\']" [(ngModel)]="fecha_nac"></ion-datetime>\n\n                                             </ion-item>\n\n                                          <ion-item [hidden]="esconde3">\n                                                <ion-label   class="my-label18" color="secondary2" > {{ \'UNIDAD\' | translate }}  </ion-label>\n                                                <ion-input  [disabled]="true"  [formControl]="Form.controls[\'unidad\']" type="text"></ion-input>\n\n\n                                              </ion-item>\n                                              <ion-item [hidden]="esconde3">\n                                                    <ion-label  class="my-label18" color="secondary2"  > {{ \'TIPOSUSCRIPTOR\' | translate }}  </ion-label>\n                                                    <ion-input  [disabled]="true"  [formControl]="Form.controls[\'tiposuscriptor\']" type="text"></ion-input>\n\n\n                                                  </ion-item>\n                                              <ion-item [hidden]="esconde1">\n                                                    <ion-label   class="my-label18" color="secondary2" > {{ \'CODIGOP\' | translate }}  </ion-label>\n                                                    <ion-input  [disabled]="true"  [formControl]="Form.controls[\'codpersonal\']" type="text"></ion-input>\n\n\n                                                  </ion-item>\n                                        </ion-list>\n\n\n\n\n\n                        </ion-col>\n                    </ion-row>\n\n                </ion-list>\n                <!--\n                <ion-list *ngSwitchCase="\'ducklings\'">\n\n                    <ion-item >\n                        <ion-label  color="secondary2" stacked> {{ \'NAMET\' | translate }}  </ion-label>\n                        <ion-input   [formControl]="Form.controls[\'nombret\']" type="text"></ion-input>\n                      </ion-item>\n\n                      <ion-item class="invalid" *ngIf="!Form.controls.nombret.valid\n                      && (Form.controls.nombret.dirty || Form.controls.nombret.touched)" text-wrap>\n                          <ion-icon name="warning"></ion-icon>\n                          {{ \'NAMETT\' | translate }}\n                      </ion-item>\n\n                      <ion-item >\n                          <ion-label  color="secondary2" stacked> {{ \'NUMEROT\' | translate }}  </ion-label>\n                          <ion-input   [formControl]="Form.controls[\'numerot\']" type="number"></ion-input>\n                        </ion-item>\n\n                        <ion-item class="invalid" *ngIf="!Form.controls.numerot.valid\n                        && (Form.controls.numerot.dirty || Form.controls.numerot.touched)" text-wrap>\n                            <ion-icon name="warning"></ion-icon>\n                            {{ \'NUMEROTT\' | translate }}\n                        </ion-item>\n\n\n\n                        <ion-item >\n                            <ion-label  color="secondary2" stacked> {{ \'MEST\' | translate }}  </ion-label>\n                            <ion-select [formControl]="Form.controls[\'mest\']" >\n                                <ion-option *ngFor="let lenguage of meses" [value]="lenguage">{{lenguage}}</ion-option>\n                              </ion-select>\n\n                          </ion-item>\n\n                          <ion-item class="invalid" *ngIf="!Form.controls.mest.valid\n                          && (Form.controls.mest.dirty || Form.controls.mest.touched)" text-wrap>\n                              <ion-icon name="warning"></ion-icon>\n                              {{ \'MESTT\' | translate }}\n                          </ion-item>\n\n                          <ion-item >\n                              <ion-label  color="secondary2" stacked> {{ \'ANOT\' | translate }}  </ion-label>\n                              <ion-select [formControl]="Form.controls[\'anot\']" >\n                                  <ion-option *ngFor="let lenguage of anos" [value]="lenguage">{{lenguage}}</ion-option>\n                                </ion-select>\n\n                            </ion-item>\n\n                            <ion-item class="invalid" *ngIf="!Form.controls.anot.valid\n                            && (Form.controls.anot.dirty || Form.controls.anot.touched)" text-wrap>\n                                <ion-icon name="warning"></ion-icon>\n                                {{ \'ANOTT\' | translate }}\n                            </ion-item>\n\n                            <ion-item >\n                                <ion-label  color="secondary2" stacked> {{ \'CVV\' | translate }}  </ion-label>\n                                <ion-input   [formControl]="Form.controls[\'cvvt\']" type="number"></ion-input>\n                              </ion-item>\n\n                              <ion-item class="invalid" *ngIf="!Form.controls.cvvt.valid\n                              && (Form.controls.cvvt.dirty || Form.controls.cvvt.touched)" text-wrap>\n                                  <ion-icon name="warning"></ion-icon>\n                                  {{ \'CVVT\' | translate }}\n                              </ion-item>\n\n\n              </ion-list>\n              -->\n            </div>\n\n          </div>\n        </form>\n</ion-content>\n\n\n\n'/*ion-inline-end:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\profile\profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["x" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["w" /* NavController */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["u" /* ModalController */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_5__providers__["a" /* Auth */], __WEBPACK_IMPORTED_MODULE_5__providers__["d" /* NotificationProvider */], __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_1__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_5__providers__["c" /* ImageProvider */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["i" /* Events */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ })

});
//# sourceMappingURL=40.js.map