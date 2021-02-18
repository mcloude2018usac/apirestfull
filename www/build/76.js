webpackJsonp([76],{

/***/ 1109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserCreatePageModule", function() { return UserCreatePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_create__ = __webpack_require__(1565);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var UserCreatePageModule = /** @class */ (function () {
    function UserCreatePageModule() {
    }
    UserCreatePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__user_create__["a" /* UserCreatePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__user_create__["a" /* UserCreatePage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], UserCreatePageModule);
    return UserCreatePageModule;
}());

//# sourceMappingURL=user-create.module.js.map

/***/ }),

/***/ 1565:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserCreatePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__ = __webpack_require__(197);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var UserCreatePage = /** @class */ (function () {
    function UserCreatePage(_IMAGE, storage, msj, translateService, viewCtrl, authService, navCtrl, navParams, _FB, actionSheetCtrl, events) {
        // Define form validation - VERY basic!
        var _this = this;
        this._IMAGE = _IMAGE;
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
        this.passxxx = '';
        this.APP = '';
        this.tiposus = [];
        this.pofilel = './assets/img/profilelocal.png';
        this.vrol = [];
        this.vunidad = [];
        this.vunidadTEMP = [];
        this.vtiposuscriptor = [];
        this.languages = ['Español', 'English'];
        this.sexos = ['Masculino', 'Femenino'];
        this.pactualizacion = false;
        this.pactualizacion = this.navParams.get("actualizacion");
        this.form = this._FB.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].maxLength(50), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required])],
            rol: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required])],
            nombre: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].pattern(/[a-zA-Z ]*/), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required])],
            cui: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required])],
            direccion: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required])],
            fotot: [''],
            fecha_nac: [''],
            telefono: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].pattern(/^\d{8}$/), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required])],
            leng: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required])],
            sexo: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required])],
            estado: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required])],
            nov: [''],
            unidad: [''],
            tiposuscriptor: [''],
            codpersonal: ['']
        });
        this.translateService.get('APPX').subscribe(function (value) {
            _this.APP = value;
        });
    }
    UserCreatePage.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get('username').then(function (value) {
            _this.username = value;
        });
    };
    UserCreatePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.storage.get('tiposus').then(function (value) {
            _this.tiposus = value.split(',');
            _this.unidadxx = _this.tiposus[7];
            _this.authService.getReg(_this.unidadxx + '/UNIDADES/' + _this.APP, 'catalogos').then(function (result) {
                _this.vunidad = result;
            }, function (err) {
                _this.msj.showError3('Error', err.error);
            });
            // this.pideregistros();
        });
        this.pactualizacion = this.navParams.get("actualizacion");
        if (this.navParams.get("record") == null) {
            this.translateService.get('ITEM_CREATE_TITLE').subscribe(function (value) {
                _this.pageTitle = value;
            });
            this.isDisablednit = true;
            this.passxxx = 'Admin123@';
            this.authService.getReg(this.APP + '/todos', 'tiposuscriptors').then(function (result) {
                _this.vtiposuscriptor = result;
                _this.tiposuscriptor = _this.tiposuscriptor;
            }, function (err) {
                _this.msj.showError3('Error', err.error);
            });
        }
        else {
            this._ID = this.navParams.data.record._id;
            this.email = this.navParams.data.record.email;
            this.passxxx = this.navParams.data.record.password;
            this.nombre = this.navParams.data.record.nombre;
            this.cui = this.navParams.data.record.cui;
            this.fecha_nac = this.navParams.data.record.fechanac;
            this.direccion = this.navParams.data.record.direccion;
            this.telefono = this.navParams.data.record.telefono;
            this.leng = this.navParams.data.record.lenguaje;
            this.sexo = this.navParams.data.record.sexo;
            this.estado = this.navParams.data.record.estado;
            this.fotot = this.navParams.data.record.foto;
            this.image = this.navParams.data.record.foto;
            this.nov = this.navParams.data.record.nov;
            this.unidad = this.navParams.data.record.unidad._id;
            this.tiposuscriptor = this.navParams.data.record.tiposuscriptor._id;
            this.interno = this.navParams.data.record.interno;
            this.estadoemail = this.navParams.data.record.estadoemail;
            this.authService.getReg(this.unidad + '/' + this.APP + '/user-rol', 'datosfijos2').then(function (result) {
                _this.vrol = result;
                _this.rol = _this.navParams.data.record.role;
            }, function (err) {
                _this.msj.showError3('Error', err.error);
            });
            if (this.navParams.data.record.role == 'Administrador') {
                this.authService.getReg(this.APP + '/todos', 'tiposuscriptors').then(function (result) {
                    _this.vtiposuscriptor = result;
                    _this.tiposuscriptor = _this.tiposuscriptor;
                }, function (err) {
                    _this.msj.showError3('Error', err.error);
                });
            }
            else {
                this.authService.getReg(this.tiposuscriptor + '/' + this.APP + '/solo', 'tiposuscriptors').then(function (result) {
                    _this.vtiposuscriptor = result;
                    _this.tiposuscriptor = _this.tiposuscriptor;
                }, function (err) {
                    _this.msj.showError3('Error', err.error);
                });
            }
            this.codpersonal = this.navParams.data.record.codpersonal;
            this.isDisablednit = false;
            this.translateService.get('ITEM_UPDATE_TITLE').subscribe(function (value) {
                _this.pageTitle = value;
            });
        }
    };
    UserCreatePage.prototype.manageGallery = function () {
        var _this = this;
        var creat = 'Actualiza';
        if (this.navParams.get("record") == null) {
            creat = 'Crea';
            this.estadoemail = '1';
            this.interno = '1';
        }
        var options = {
            idempresa: this.APP,
            email: this.form.controls['email'].value,
            role: this.form.controls['rol'].value,
            password: this.passxxx,
            nombre: this.form.controls['nombre'].value,
            cui: this.form.controls['cui'].value,
            direccion: this.form.controls['direccion'].value,
            telefono: this.form.controls['telefono'].value,
            foto: this.fotot,
            lenguaje: this.form.controls['leng'].value,
            sexo: this.form.controls['sexo'].value,
            estado: this.form.controls['estado'].value,
            nov: this.form.controls['nov'].value,
            unidad: this.form.controls['unidad'].value,
            interno: this.interno,
            estadoemail: this.estadoemail,
            codpersonal: this.form.controls['codpersonal'].value,
            usuarioup: this.username,
            usuarionew: this.username,
            fechanac: this.form.get('fecha_nac').value,
            tiposuscriptor: this.form.controls['tiposuscriptor'].value,
            bitacora: { idempresa: this.idempresa, idafiliado: '', email: this.username, permiso: creat, accion: creat + ' usuario ' }
        };
        if (this.navParams.get("record") == null) {
            if (options) {
                this.authService.createAPITOKEN(options, '/api/auth/registera').then(function (result) {
                    _this.passxxx = result[0].password;
                    var html1 = '';
                    if (_this.APP == "WebApp Usacenlinea") {
                        html1 = '   <div class="es-wrapper-color"><table cellpadding="0" cellspacing="0" class="es-wrapper" width="100%">    <tbody><tr>    <td valign="top" class="esd-email-paddings"><table cellpadding="0" cellspacing="0" class="es-header esd-header-popover" align="center">    <tbody><tr>    <td class="esd-stripe" align="center"><table class="es-header-body" align="center" cellpadding="0" cellspacing="0" width="600">    <tbody><tr>    <td class="esd-structure es-p20b es-p20r es-p20l" align="left"><table cellpadding="0" cellspacing="0" width="100%">    <tbody><tr>    <td width="560" class="esd-container-frame" align="center" valign="top"><table cellpadding="0" cellspacing="0" width="100%">    <tbody><tr>    <td align="center" class="esd-block-image"><a href="http://viewstripo.email" target="_blank"><img src="http://52.90.195.238:8500/logousac1.png" alt="" width="124" style="display: block;"></a>    </td></tr>    </tbody></table>    </td></tr>    </tbody></table>    </td></tr>    </tbody></table>    </td></tr>    </tbody></table><table cellpadding="0" cellspacing="0" class="es-content esd-footer-popover" align="center">    <tbody><tr>    <td class="esd-stripe" align="center"><table bgcolor="#ffffff" class="es-content-body" align="center" cellpadding="0" cellspacing="0" width="600">    <tbody><tr>    <td class="esd-structure es-p20" align="left"><table cellpadding="0" cellspacing="0" width="100%">    <tbody><tr>    <td width="560" class="esd-container-frame" align="center" valign="top"><table cellpadding="0" cellspacing="0" width="100%">    <tbody><tr>    <td align="center" class="esd-block-text es-p15b"><h2 style="font-size: 16px; text-align: center;"><strong>EL RECTOR DE LA UNIVERSIDAD DE SAN CARLOS DE GUATEMALA</strong></h2><p><strong>INGENIERO MURPHY PAIZ</strong></p><p><strong>Y LA COORDINADORA DE TECNOLOGÍA </strong></p><p><br></p><p style="text-align: left;"><strong></strong><strong></strong></p>    </td></tr><tr>    <td align="left" class="esd-block-text"><p>Te damos las Bienvenida: MARIO</p><p>A nuestra WebAPP : http://usacenlinea.net</p><p><br></p><p>Tu acceso es el siguiente:</p><p><br></p><p><strong>Usuario</strong>: ' + _this.form.controls['email'].value + '</p><p><strong>Clave</strong>: ' + _this.passxxx + '</p><p><br></p><p><br></p>    </td></tr><tr>    <td align="left" class="esd-block-text"><p><br></p><p><br></p><p>Cordialmente,<br>Ing. Murphy Paiz</p><p><br>Rector</p>   <p><br></p>    </td></tr>    </tbody></table>    </td></tr>    </tbody></table>    </td></tr>    </tbody></table>    </td></tr>    </tbody></table>    </td></tr>    </tbody></table>    </div>';
                    }
                    else {
                        html1 = '   <div class="es-wrapper-color"><table cellpadding="0" cellspacing="0" class="es-wrapper" width="100%">    <tbody><tr>    <td valign="top" class="esd-email-paddings"><table cellpadding="0" cellspacing="0" class="es-header esd-header-popover" align="center">    <tbody><tr>    <td class="esd-stripe" align="center"><table class="es-header-body" align="center" cellpadding="0" cellspacing="0" width="600">    <tbody><tr>    <td class="esd-structure es-p20b es-p20r es-p20l" align="left"><table cellpadding="0" cellspacing="0" width="100%">    <tbody><tr>    <td width="560" class="esd-container-frame" align="center" valign="top"><table cellpadding="0" cellspacing="0" width="100%">    <tbody><tr>    <td align="center" class="esd-block-image"><a href="http://viewstripo.email" target="_blank"><img src="http://52.90.195.238:8500/logousac1.png" alt="" width="124" style="display: block;"></a>    </td></tr>    </tbody></table>    </td></tr>    </tbody></table>    </td></tr>    </tbody></table>    </td></tr>    </tbody></table><table cellpadding="0" cellspacing="0" class="es-content esd-footer-popover" align="center">    <tbody><tr>    <td class="esd-stripe" align="center"><table bgcolor="#ffffff" class="es-content-body" align="center" cellpadding="0" cellspacing="0" width="600">    <tbody><tr>    <td class="esd-structure es-p20" align="left"><table cellpadding="0" cellspacing="0" width="100%">    <tbody><tr>    <td width="560" class="esd-container-frame" align="center" valign="top"><table cellpadding="0" cellspacing="0" width="100%">    <tbody><tr>    <td align="center" class="esd-block-text es-p15b"><h2 style="font-size: 16px; text-align: center;"><strong>EL RECTOR DE LA UNIVERSIDAD DE SAN CARLOS DE GUATEMALA</strong></h2><p><strong>INGENIERO MURPHY PAIZ</strong></p><p><strong>Y LA COORDINADORA DE TECNOLOGÍA </strong></p><p><br></p><p style="text-align: left;"><strong></strong><strong></strong></p>    </td></tr><tr>    <td align="left" class="esd-block-text"><p>Te damos las Bienvenida: MARIO</p><p>A nuestra WebAPP : http://usacenlinea.net</p><p><br></p><p>Tu acceso es el siguiente:</p><p><br></p><p><strong>Usuario</strong>: ' + _this.form.controls['email'].value + '</p><p><strong>Clave</strong>: ' + _this.passxxx + '</p><p><br></p><p><br></p>    </td></tr><tr>    <td align="left" class="esd-block-text"><p><br></p><p><br></p><p>Cordialmente,<br>Ing. Murphy Paiz</p><p><br>Rector</p>   <p><br></p>    </td></tr>    </tbody></table>    </td></tr>    </tbody></table>    </td></tr>    </tbody></table>    </td></tr>    </tbody></table>    </td></tr>    </tbody></table>    </div>';
                    }
                    var options2 = {
                        destino: _this.form.controls['email'].value,
                        html: html1,
                        text: html1,
                        subjet: 'Acceso a sistema usacenlinea.net : ' + _this.form.controls['nombre'].value,
                        actualiza: { tipo: 'usuarios', id: '1',
                            estado: 'Usuario nuevo, mail enviado',
                            otros: '' }
                    };
                    _this.authService.mandamail('', options2, 'mails').then(function (data) {
                        if (!_this.form.valid) {
                            return;
                        }
                        _this.viewCtrl.dismiss(result);
                    }, function (err) {
                        _this.msj.showError3('Error', err.error);
                    });
                }, function (err) {
                    _this.msj.showError3('Error', err.error);
                });
            }
        }
        else {
            if (options) {
                this.authService.createReg(this._ID, options, 'personals').then(function (result) {
                    if (!_this.form.valid) {
                        return;
                    }
                    console.log(result);
                    _this.viewCtrl.dismiss(result);
                }, function (err) {
                    _this.msj.showError3('Error', err.error);
                });
            }
        }
    };
    UserCreatePage.prototype.cancel = function () {
        this.viewCtrl.dismiss();
    };
    UserCreatePage.prototype.done = function () {
        if (!this.form.valid) {
            return;
        }
        //this.viewCtrl.dismiss(this.form.value);
    };
    UserCreatePage.prototype.updateProfileImage = function () {
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
    UserCreatePage.prototype.takePhotograph = function () {
        var _this = this;
        if (__WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__["a" /* Camera */]['installed']()) {
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
    UserCreatePage.prototype.selectImage = function () {
        var _this = this;
        if (__WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__["a" /* Camera */]['installed']()) {
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
            this.fileInput.nativeElement.click();
        }
    };
    UserCreatePage.prototype.processWebImage = function (event) {
        var _this = this;
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();
            reader.onload = function (readerEvent) {
                _this.image = readerEvent.target.result;
                _this._IMAGE.generateFromImage(_this.image, 400, 400, 0.5, function (data) {
                    _this.image = data;
                    _this.fotot = data;
                });
            };
            reader.readAsDataURL(event.target.files[0]);
        }
    };
    UserCreatePage.prototype.focused = function (selectedValue) {
        var _this = this;
        if (this.nov) {
            if (this.nov != '') {
                this.authService.getReglibreSext2(this.form.get('nov').value.trim(), 'estudianteov').then(function (data) {
                    _this.form.controls['nombre'].setValue(data[0].nombre1 + ' ' + data[0].nombre2 + ' ' + data[0].apellido1 + ' ' + data[0].apellido2);
                }, function (err) {
                    _this.authService.getReglibreSext2(_this.form.get('nov').value.trim(), 'estudiantevt').then(function (data) {
                        _this.form.controls['nombre'].setValue(data[0].nombre);
                    }, function (err) {
                        _this.msj.showError3('Precaución', 'Ingrese un Número valido de Orientación Vocacional');
                        _this.form.controls['nombre'].setValue('');
                    });
                });
            }
        }
    };
    UserCreatePage.prototype.onSelectChange = function (selectedValue) {
        //this.idtipounidad2=selectedValue.split(',');
        // this.idunidad2=selectedValue.split(',');
        var _this = this;
        this.authService.getReg(selectedValue + '/' + this.APP + '/user-rol', 'datosfijos2').then(function (result) {
            _this.vrol = result;
        }, function (err) {
            _this.msj.showError3('Error', err.error);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('fileInput'),
        __metadata("design:type", Object)
    ], UserCreatePage.prototype, "fileInput", void 0);
    UserCreatePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-user-create',template:/*ion-inline-start:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\SEGURIDAD\user-create\user-create.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>{{pageTitle}}</ion-title>\n    \n    <ion-buttons end>\n            <button (click)="cancel()" icon-only ion-button padding-right>\n                    <ion-icon name="md-close"></ion-icon>\n                  </button>\n                <button  (click)="manageGallery()"  [hidden]="!pactualizacion"  [disabled]="!form.valid" icon-only ion-button padding-right>\n                    <ion-icon name="done-all"></ion-icon>\n                  </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n    <ion-avatar item-start >\n        <img id="profile-image" [hidden]="!pactualizacion"  (click)="updateProfileImage()" [src]="image"  src="{{pofilel}}">\n       \n</ion-avatar>\n  <form     [formGroup]="form"   text-wrap>\n      <div id="content">\n          <div id="profile-info">\n           \n                  <input type="file" accept="image/*" #fileInput style="visibility: hidden; height: 0px" (change)="processWebImage($event)" />\n                  <input\n                  type="hidden"\n                  name="fotot"\n                  formControlName="fotot"\n                  [(ngModel)]="fotot">\n               \n          </div>\n        </div>\n    <ion-list>\n\n            <ion-item >\n                    <ion-label  class="my-label18" color="secondary2"  stacked> Ingrese un Identificador:  </ion-label>\n                    <ion-input [(ngModel)]="nov"  (focusout)="focused($event)" [formControl]="form.controls[\'nov\']" type="Number"></ion-input>\n                  </ion-item>\n        \n                  <ion-item class="invalid" *ngIf="!form.controls.nov.valid && (form.controls.nov.dirty || form.controls.nov.touched)" text-wrap>\n                      <ion-icon name="warning"></ion-icon>\n                      Ingrese un Identificador valido\n                  </ion-item>\n   \n                  \n                  <ion-item >\n                        <ion-label  > {{ \'NAMEAPELLIDO\' | translate }}  </ion-label>\n                        <ion-input  [(ngModel)]="nombre"  [formControl]="form.controls[\'nombre\']" type="text"></ion-input>\n                      </ion-item>\n                \n                      <ion-item class="invalid" *ngIf="!form.controls.nombre.valid && (form.controls.nombre.dirty || form.controls.nombre.touched)" text-wrap>\n                          <ion-icon name="warning"></ion-icon>\n                          {{ \'NAMEAPELLIDOT\' | translate }}\n                      </ion-item>\n                \n        <ion-item >\n            <ion-label > {{ \'EMAIL\' | translate }}  </ion-label>\n            <ion-input   [(ngModel)]="email"  [formControl]="form.controls[\'email\']" type="email"></ion-input>\n          </ion-item>\n\n          <ion-item class="invalid" *ngIf="!form.controls.email.valid  \n          && (form.controls.email.dirty || form.controls.email.touched)" text-wrap>\n              <ion-icon name="warning"></ion-icon>\n              {{ \'EMAIL_NOVALIDO\' | translate }}\n          </ion-item>\n\n\n\n      <ion-item >\n          <ion-label > {{ \'CUI\' | translate }}  </ion-label>\n          <ion-input  [(ngModel)]="cui"  [formControl]="form.controls[\'cui\']" type="text"></ion-input>\n      </ion-item>\n\n        <ion-item class="invalid" *ngIf="!form.controls.cui.valid && (form.controls.cui.dirty || form.controls.cui.touched)" text-wrap>\n            <ion-icon name="warning"></ion-icon>\n            {{ \'CUIT\' | translate }}\n        </ion-item>\n\n        <ion-item >\n            <ion-label   > {{ \'DIRECCION\' | translate }}  </ion-label>\n            <ion-input  [(ngModel)]="direccion"  [formControl]="form.controls[\'direccion\']" type="text"></ion-input>\n          </ion-item>\n  \n          <ion-item class="invalid" *ngIf="!form.controls.direccion.valid  \n          && (form.controls.direccion.dirty || form.controls.direccion.touched)" text-wrap>\n              <ion-icon name="warning"></ion-icon>\n              {{ \'DIRECCIONT\' | translate }}\n          </ion-item>\n\n          <ion-item >\n              <ion-label   > {{ \'TELEFONO\' | translate }}  </ion-label>\n              <ion-input  [(ngModel)]="telefono"  [formControl]="form.controls[\'telefono\']" type="number"></ion-input>\n            </ion-item>\n  \n            <ion-item class="invalid" *ngIf="!form.controls.telefono.valid  \n            && (form.controls.telefono.dirty || form.controls.telefono.touched)" text-wrap>\n                <ion-icon name="warning"></ion-icon>\n                {{ \'TELEFONOT\' | translate }}\n            </ion-item>\n\n            <ion-item >\n                <ion-label   > {{ \'LENGUAJE\' | translate }}  </ion-label>\n                <ion-select [(ngModel)]="leng"  [formControl]="form.controls[\'leng\']" >\n                    <ion-option text-wrap *ngFor="let lenguage of languages" [value]="lenguage">{{lenguage}}</ion-option>\n                  </ion-select>\n             \n              </ion-item>\n    \n              <ion-item class="invalid" *ngIf="!form.controls.leng.valid  \n              && (form.controls.leng.dirty || form.controls.leng.touched)" text-wrap>\n                  <ion-icon name="warning"></ion-icon>\n                  {{ \'LENGUAJET\' | translate }}\n              </ion-item>\n           \n              <ion-item >\n                <ion-label  > {{ \'SEXO\' | translate }}  </ion-label>\n                <ion-select [(ngModel)]="sexo"  [formControl]="form.controls[\'sexo\']" >\n                    <ion-option text-wrap *ngFor="let lenguage of sexos" [value]="lenguage">{{lenguage}}</ion-option>\n                  </ion-select>\n             \n              </ion-item>\n    \n              <ion-item class="invalid" *ngIf="!form.controls.sexo.valid  \n              && (form.controls.sexo.dirty || form.controls.sexo.touched)" text-wrap>\n                  <ion-icon name="warning"></ion-icon>\n                  {{ \'SEXOT\' | translate }}\n              </ion-item>\n\n              <ion-item margin-bottom>\n                    <ion-label>Fecha nacimiento</ion-label>\n                    <ion-datetime displayFormat="DD/MM/YYYY"   [formControl]="form.controls[\'fecha_nac\']" [(ngModel)]="fecha_nac"></ion-datetime>\n                   \n                 </ion-item>\n\n         <ion-item margin-bottom>\n            <ion-label>Estado</ion-label>\n            <ion-select [(ngModel)]="estado"  [(ngModel)]="estado" [formControl]="form.controls[\'estado\']">\n                <ion-option value="Activo">Activo</ion-option>\n                <ion-option value="Inactivo">Inactivo</ion-option>\n              </ion-select>\n         </ion-item>\n         \n     \n\n\n         <ion-item class="invalid" *ngIf="!form.controls.estado.valid && (form.controls.estado.dirty || form.controls.estado.touched)" text-wrap>\n            <ion-icon name="warning"></ion-icon>\n            {{ \'ESTADOT\' | translate }}\n           </ion-item>\n\n      \n          \n\n                  <ion-item >\n                        <ion-label   > {{ \'CODIGOP\' | translate }}  </ion-label>\n                        <ion-input  [(ngModel)]="codpersonal"  [formControl]="form.controls[\'codpersonal\']" type="number"></ion-input>\n                      </ion-item>\n            \n                      <ion-item class="invalid" *ngIf="!form.controls.codpersonal.valid  \n                      && (form.controls.codpersonal.dirty || form.controls.codpersonal.touched)" text-wrap>\n                          <ion-icon name="warning"></ion-icon>\n                          {{ \'CODIGOPT\' | translate }}\n                      </ion-item>\n    \n                      <ion-item >\n                            <ion-label   > {{ \'TIPOSUSCRIPTOR\' | translate }}  </ion-label>\n                            <ion-select [(ngModel)]="tiposuscriptor" [formControl]="form.controls[\'tiposuscriptor\']" >\n                                <ion-option text-wrap *ngFor="let item of vtiposuscriptor" [value]="item._id">{{item.nombre}}</ion-option>\n                              </ion-select>\n                         \n                          </ion-item>\n                          <ion-item class="invalid" *ngIf="!form.controls.tiposuscriptor.valid \n                          && (form.controls.tiposuscriptor.dirty || form.controls.tiposuscriptor.touched)"  text-wrap>\n                           \n                             {{ \'TIPOSUSCRIPTORT\' | translate }}\n                         </ion-item>\n\n\n\n                      <ion-item >\n                        <ion-label   > {{ \'UNIDAD\' | translate }}  </ion-label>\n                        <ion-select [(ngModel)]="unidad" (ionChange)="onSelectChange($event)" [formControl]="form.controls[\'unidad\']" >\n                            <ion-option text-wrap *ngFor="let item of vunidad" [value]="item._id">{{item.nombre}}</ion-option>\n                          </ion-select>\n                     \n                      </ion-item>\n                      <ion-item class="invalid" *ngIf="!form.controls.unidad.valid \n                      && (form.controls.unidad.dirty || form.controls.unidad.touched)"  text-wrap>\n                       \n                         {{ \'UNIDADT\' | translate }}\n                     </ion-item>\n\n    \n\n                     \n                  <ion-item >\n                        <ion-label   > {{ \'ROLE\' | translate }}  </ion-label>\n                        <ion-select [(ngModel)]="rol"  [formControl]="form.controls[\'rol\']" >\n                            <ion-option text-wrap *ngFor="let item of vrol" [value]="item.nombre">{{item.nombre}}</ion-option>\n                          </ion-select>\n                     \n                      </ion-item>\n                      <ion-item class="invalid" *ngIf="!form.controls.rol.valid \n                      && (form.controls.rol.dirty || form.controls.rol.touched)"  text-wrap>\n                       \n                         {{ \'ROLET\' | translate }}\n                     </ion-item>\n\n                    \n     </ion-list>\n  </form>\n\n\n</ion-content>'/*ion-inline-end:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\SEGURIDAD\user-create\user-create.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers__["c" /* ImageProvider */], __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3__providers__["d" /* NotificationProvider */], __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["F" /* ViewController */], __WEBPACK_IMPORTED_MODULE_3__providers__["a" /* Auth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */]])
    ], UserCreatePage);
    return UserCreatePage;
}());

//# sourceMappingURL=user-create.js.map

/***/ })

});
//# sourceMappingURL=76.js.map