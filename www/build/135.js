webpackJsonp([135],{

/***/ 1027:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventosCreatePageModule", function() { return EventosCreatePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__eventos_create__ = __webpack_require__(1469);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var EventosCreatePageModule = /** @class */ (function () {
    function EventosCreatePageModule() {
    }
    EventosCreatePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__eventos_create__["a" /* EventosCreatePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__eventos_create__["a" /* EventosCreatePage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], EventosCreatePageModule);
    return EventosCreatePageModule;
}());

//# sourceMappingURL=eventos-create.module.js.map

/***/ }),

/***/ 1469:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventosCreatePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_image_image__ = __webpack_require__(448);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(104);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var EventosCreatePage = /** @class */ (function () {
    function EventosCreatePage(storage, _IMAGE, msj, translateService, viewCtrl, authService, navCtrl, navParams, _FB, actionSheetCtrl, events) {
        var _this = this;
        this.storage = storage;
        this._IMAGE = _IMAGE;
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
        this.fechaini = (new Date()).toISOString();
        this.fechafin = (new Date()).toISOString();
        this.vplantilla = [];
        this.pofilel = './assets/img/photo256.png';
        this.form = this._FB.group({
            nombre: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            fechaini: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            fechafin: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            fecha: [''],
            plantilla: [''],
            ubicacion: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            impresion: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            nomax: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            costo: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            imagen: ['']
        });
        this.translateService.get('APPX').subscribe(function (value) {
            _this.idempresa = value;
        });
    }
    EventosCreatePage.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get('username').then(function (value) {
            _this.username = value;
        });
    };
    EventosCreatePage.prototype.onSelectChange = function (selectedValue) {
        this.plantilla2 = selectedValue;
        // this.myInput2.setFocus();
        //this.focused('a')
    };
    EventosCreatePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.acceso = this.navParams.data.acceso;
        this.unidad = this.acceso;
        if (this.acceso == 'ADMINISTRADOR') {
            this.unidad = 'CURSOSLIBRES';
        }
        if (this.navParams.get("record") == null) {
            this.authService.getReg(this.idempresa + '/' + this.unidad + '/todos', 'catalogodiplomas').then(function (data) {
                _this.vplantilla = data;
            }, function (err) {
                _this.msj.showError3('Error', err.error);
            });
            this.translateService.get('ITEM_CREATE_TITLE').subscribe(function (value) {
                _this.pageTitle = value;
            });
            this.isDisablednit = true;
        }
        else {
            this._ID = this.navParams.data.record._id;
            this.nombre = this.navParams.data.record.nombre;
            this.fechaini = this.navParams.data.record.fechaini;
            this.fechafin = this.navParams.data.record.fechafin;
            this.fecha = this.navParams.data.record.fecha;
            this.ubicacion = this.navParams.data.record.ubicacion;
            this.costo = this.navParams.data.record.costo;
            this.authService.getReg(this.idempresa + '/' + this.unidad + '/todos', 'catalogodiplomas').then(function (data) {
                _this.vplantilla = data;
                //    this.vplantilla.push({_id:'na',nombre:'NO APLICA'})
                _this.plantilla = _this.navParams.data.record.plantilla;
            }, function (err) {
                _this.msj.showError3('Error', err.error);
            });
            this.authService.convertToDataURLviaCanvas(this.navParams.data.record.foto, 'image/jpeg').
                then(function (base64) { return _this.foto1img = base64; });
            this.image = this.navParams.data.record.foto;
            this.imagen = this.navParams.data.record.foto;
            this.impresion = this.navParams.data.record.impresion;
            this.nomax = this.navParams.data.record.nomax;
            this.unidad = this.navParams.data.record.unidad;
            this.isDisablednit = false;
            this.translateService.get('ITEM_UPDATE_TITLE').subscribe(function (value) {
                _this.pageTitle = value;
            });
        }
    };
    EventosCreatePage.prototype.formatAMPM = function (date) {
        var hours = date[0];
        var minutes = date[1];
        var ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        var strTime = hours + ':' + minutes + ' ' + ampm;
        return strTime;
    };
    EventosCreatePage.prototype.submitForm0 = function () {
        var _this = this;
        var creat = 'Actualiza';
        if (this.navParams.get("record") == null) {
            creat = 'Crea';
        }
        this.authService.subefoto('', 'Images', this.foto1img, '', '', '', '', 'create').then(function (result) {
            var data = [];
            data = result;
            _this.form.controls['imagen'].setValue(data.url);
            var options = {
                idempresa: _this.idempresa,
                nombre: _this.form.controls['nombre'].value,
                fechaini: _this.form.controls['fechaini'].value,
                fechafin: _this.form.controls['fechafin'].value,
                ubicacion: _this.form.controls['ubicacion'].value,
                fecha: _this.form.controls['fecha'].value,
                costo: _this.form.controls['costo'].value,
                foto: _this.form.controls['imagen'].value,
                plantilla: _this.form.controls['plantilla'].value,
                impresion: _this.form.controls['impresion'].value,
                nomax: _this.form.controls['nomax'].value,
                unidad: _this.unidad,
                bitacora: { idempresa: _this.idempresa, idafiliado: '', email: _this.username, permiso: creat, accion: creat + ' evento ' }
            };
            if (options) {
                _this.authService.createReg('', options, 'eventos').then(function (result) {
                    if (!_this.form.valid) {
                        return;
                    }
                    console.log(result);
                    _this.viewCtrl.dismiss(result);
                }, function (err) {
                    _this.msj.showError3('Error', err.error);
                });
            }
        }, function (err) {
            _this.msj.showError3('Error', err.error);
        });
    };
    EventosCreatePage.prototype.submitForm1 = function () {
        var _this = this;
        var creat = 'Actualiza';
        if (this.navParams.get("record") == null) {
            creat = 'Crea';
        }
        this.authService.subefoto('', 'Images', this.foto1img, '', '', '', this.form.controls['imagen'].value, 'update').then(function (result) {
            var data = [];
            data = result;
            _this.form.controls['imagen'].setValue(data.url);
            var options = {
                idempresa: _this.idempresa,
                nombre: _this.form.controls['nombre'].value,
                fechaini: _this.form.controls['fechaini'].value,
                fechafin: _this.form.controls['fechafin'].value,
                ubicacion: _this.form.controls['ubicacion'].value,
                fecha: _this.form.controls['fecha'].value,
                costo: _this.form.controls['costo'].value,
                foto: _this.form.controls['imagen'].value,
                plantilla: _this.form.controls['plantilla'].value,
                impresion: _this.form.controls['impresion'].value,
                nomax: _this.form.controls['nomax'].value,
                unidad: _this.unidad,
                bitacora: { idempresa: _this.idempresa, idafiliado: '', email: _this.username, permiso: creat, accion: creat + ' evento ' }
            };
            if (options) {
                _this.authService.createReg(_this._ID, options, 'eventos').then(function (result) {
                    if (!_this.form.valid) {
                        return;
                    }
                    _this.viewCtrl.dismiss(result);
                }, function (err) {
                    _this.msj.showError3('Error', err.error);
                });
            }
        }, function (err) {
            _this.msj.showError3('Error', err.error);
        });
    };
    EventosCreatePage.prototype.manageGallery = function () {
        if (this.navParams.get('record') == null) {
            this.submitForm0();
        }
        else {
            this.submitForm1();
        }
    };
    EventosCreatePage.prototype.cancel = function () {
        this.viewCtrl.dismiss();
    };
    EventosCreatePage.prototype.done = function () {
        if (!this.form.valid) {
            return;
        }
        //this.viewCtrl.dismiss(this.form.value);
    };
    EventosCreatePage.prototype.updateProfileImage = function () {
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
    EventosCreatePage.prototype.takePhotograph = function () {
        var _this = this;
        if (__WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__["a" /* Camera */]['installed']()) {
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
    EventosCreatePage.prototype.selectImage = function () {
        var _this = this;
        if (__WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__["a" /* Camera */]['installed']()) {
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
    EventosCreatePage.prototype.processWebImage = function (event) {
        var _this = this;
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();
            reader.onload = function (readerEvent) {
                _this.image = readerEvent.target.result;
                _this._IMAGE.generateFromImage(_this.image, 400, 400, 1, function (data) {
                    _this.foto1img = data;
                });
            };
            reader.readAsDataURL(event.target.files[0]);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('fileInput'),
        __metadata("design:type", Object)
    ], EventosCreatePage.prototype, "fileInput", void 0);
    EventosCreatePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-eventos-create',template:/*ion-inline-start:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\EVENTOS\eventos-create\eventos-create.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>{{pageTitle}}</ion-title>\n    <ion-buttons end>\n        <button (click)="cancel()" icon-only ion-button padding-right>\n            <ion-icon name="md-close"></ion-icon>\n          </button>\n        <button  (click)="manageGallery()"  [disabled]="!form.valid" icon-only ion-button padding-right>\n            <ion-icon name="done-all"></ion-icon>\n          </button>\n          </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <form     [formGroup]="form"   text-wrap>\n    <ion-list>\n        <ion-item margin-bottom>\n           <ion-label>Nombre</ion-label>\n           <ion-input\n              type="text"\n              [(ngModel)]="nombre" [formControl]="form.controls[\'nombre\']"\n             ></ion-input>\n        </ion-item>\n        <ion-item class="invalid" *ngIf="!form.controls.nombre.valid && (form.controls.nombre.dirty || form.controls.nombre.touched)" text-wrap>\n          <ion-icon name="warning"></ion-icon>\n          {{ \'NOMBRET\' | translate }}\n         </ion-item>\n         <ion-item margin-bottom>\n          <ion-label>Fecha Inicio</ion-label>\n          <ion-datetime displayFormat="DD/MM/YYYY hh:mm A"\n          [formControl]="form.controls[\'fechaini\']" [(ngModel)]="fechaini"></ion-datetime>\n        </ion-item>\n        <ion-item class="invalid" *ngIf="!form.controls.fechaini.valid && (form.controls.fechaini.dirty || form.controls.fechaini.touched)" text-wrap>\n          <ion-icon name="warning"></ion-icon>\n          {{ \'FECHAINIT\' | translate }}\n        </ion-item>\n       <ion-item margin-bottom>\n        <ion-label>Fecha Finaliza</ion-label>\n        <ion-datetime displayFormat="DD/MM/YYYY hh:mm A"\n        [formControl]="form.controls[\'fechafin\']" [(ngModel)]="fechafin"></ion-datetime>\n      </ion-item>\n\n      <ion-item margin-bottom>\n        <ion-label>Fecha del evento (ej. Martes, 21 de Julio de 2020)</ion-label>\n        <ion-input\n        type="text"\n        [(ngModel)]="fecha" [formControl]="form.controls[\'fecha\']"\n       ></ion-input>\n      </ion-item>\n      <ion-item class="invalid" *ngIf="!form.controls.fechafin.valid && (form.controls.fechafin.dirty || form.controls.fechafin.touched)" text-wrap>\n        <ion-icon name="warning"></ion-icon>\n        {{ \'FECHAFINT\' | translate }}\n      </ion-item>\n      <ion-item-group>\n        <ion-item>\n           <img  *ngIf="image" [src]="image"   class="circle-pic"  height="150 px" width="150 px">\n           <img  *ngIf="!image || image==\'\'" [src]="pofilel"   class="circle-pic"  height="150 px" width="150 px">\n           <input   type="hidden"    name="imagen" [formControl]="form.controls[\'imagen\']"    [(ngModel)]="imagen">\n        </ion-item>\n        <ion-item>\n            <a  ion-button    block  margin-bottom    color="secondary"  (click)="updateProfileImage()">                Adjunte imagen del evento         </a>\n            <input type="file" accept="image/*" #fileInput style="visibility: hidden; height: 0px" (change)="processWebImage($event)" />\n         </ion-item>\n     </ion-item-group>\n        <ion-item margin-bottom>\n           <ion-label>Transmisión del evento (Link)</ion-label>\n           <ion-input\n              type="text"\n              [(ngModel)]="ubicacion"\n              [formControl]="form.controls[\'ubicacion\']"></ion-input>\n        </ion-item>\n        <ion-item class="invalid" *ngIf="!form.controls.ubicacion.valid && (form.controls.ubicacion.dirty || form.controls.ubicacion.touched)" text-wrap>\n          <ion-icon name="warning"></ion-icon>\n         Ingrese una ubicación donde se transmitira el evento\n        </ion-item>\n        <ion-item margin-bottom>\n            <ion-label>Duración del evento (ej. 2.5 Hrs)</ion-label>\n            <ion-input\n               type="text"\n               [(ngModel)]="costo"\n               [formControl]="form.controls[\'costo\']"></ion-input>\n         </ion-item>\n         <ion-item margin-bottom>\n            <ion-label>Estado</ion-label>\n            <ion-select [(ngModel)]="impresion" [formControl]="form.controls[\'impresion\']">\n              <ion-option value="Activo">Activo</ion-option>\n              <ion-option value="Inactivo">Inactivo</ion-option>\n              <ion-option value="Imprimir diploma">Imprimir diploma</ion-option>\n\n\n\n            </ion-select>\n         </ion-item>\n\n         <ion-item class="invalid" *ngIf="!form.controls.impresion.valid && (form.controls.impresion.dirty || form.controls.impresion.touched)" text-wrap>\n          <ion-icon name="warning"></ion-icon>\n          {{ \'ESTADOT\' | translate }}\n         </ion-item>\n         <ion-item >\n          <ion-label  >Plantilla evento (*)</ion-label>\n          <ion-select  #select1 (ionChange)="onSelectChange($event)"  [(ngModel)]="plantilla" [formControl]="form.controls[\'plantilla\']" >\n             <ion-option text-wrap *ngFor="let item of vplantilla"  [value]="item._id">{{item.nombre}}</ion-option>\n         </ion-select>\n\n\n       </ion-item>\n\n         <ion-item margin-bottom>\n            <ion-label>No maximo participantes</ion-label>\n            <ion-input\n               type="text"\n               [(ngModel)]="nomax"\n               [formControl]="form.controls[\'nomax\']"></ion-input>\n         </ion-item>\n         <ion-item class="invalid" *ngIf="!form.controls.nomax.valid && (form.controls.nomax.dirty || form.controls.nomax.touched)" text-wrap>\n          <ion-icon name="warning"></ion-icon>\n          {{ \'NOMAXT\' | translate }}\n         </ion-item>\n     </ion-list>\n  </form>\n\n\n</ion-content>\n'/*ion-inline-end:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\EVENTOS\eventos-create\eventos-create.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_5__providers_image_image__["a" /* ImageProvider */], __WEBPACK_IMPORTED_MODULE_3__providers__["d" /* NotificationProvider */], __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["F" /* ViewController */], __WEBPACK_IMPORTED_MODULE_3__providers__["a" /* Auth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */]])
    ], EventosCreatePage);
    return EventosCreatePage;
}());

//# sourceMappingURL=eventos-create.js.map

/***/ })

});
//# sourceMappingURL=135.js.map