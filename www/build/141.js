webpackJsonp([141],{

/***/ 1021:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatalogodiplomaCreatePageModule", function() { return CatalogodiplomaCreatePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__catalogodiploma_create__ = __webpack_require__(1463);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CatalogodiplomaCreatePageModule = /** @class */ (function () {
    function CatalogodiplomaCreatePageModule() {
    }
    CatalogodiplomaCreatePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__catalogodiploma_create__["a" /* CatalogodiplomaCreatePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__catalogodiploma_create__["a" /* CatalogodiplomaCreatePage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], CatalogodiplomaCreatePageModule);
    return CatalogodiplomaCreatePageModule;
}());

//# sourceMappingURL=catalogodiploma-create.module.js.map

/***/ }),

/***/ 1463:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CatalogodiplomaCreatePage; });
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








var CatalogodiplomaCreatePage = /** @class */ (function () {
    function CatalogodiplomaCreatePage(storage, _IMAGE, msj, translateService, viewCtrl, authService, navCtrl, navParams, _FB, actionSheetCtrl, events) {
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
        this.vgrupo = [];
        // Define form validation - VERY basic!
        this.form = this._FB.group({
            nombre: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            enc1: [''],
            enc2: [''],
            enc3: [''],
            enc4: [''],
            cue1: [''],
            cue2: [''],
            cue3: [''],
            cue4: [''],
            estado: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            imagen: ['']
        });
        this.translateService.get('APPX').subscribe(function (value) {
            _this.idempresa = value;
        });
        //  this.vgrupo=[{"id":"USAC","nombre":"USAC"},{"id":"BUSES","nombre":"BUSES"},{"id":"TICKES","nombre":"TICKES"}];
    }
    CatalogodiplomaCreatePage.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get('username').then(function (value) {
            _this.username = value;
        });
    };
    CatalogodiplomaCreatePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.acceso = this.navParams.data.acceso;
        this.unidad = this.acceso;
        if (this.acceso == 'ADMINISTRADOR') {
            this.unidad = 'CURSOSLIBRES';
        }
        if (this.navParams.get("record") == null) {
            this.translateService.get('ITEM_CREATE_TITLE').subscribe(function (value) {
                _this.pageTitle = value;
            });
            this.isDisablednit = true;
        }
        else {
            this._ID = this.navParams.data.record._id;
            this.nombre = this.navParams.data.record.nombre;
            this.enc1 = this.navParams.data.record.encabezado1;
            this.enc2 = this.navParams.data.record.encabezado2;
            this.enc3 = this.navParams.data.record.encabezado3;
            this.enc4 = this.navParams.data.record.encabezado4;
            this.cue1 = this.navParams.data.record.cuerpo1;
            this.cue2 = this.navParams.data.record.cuerpo2;
            this.cue3 = this.navParams.data.record.cuerpo3;
            this.cue4 = this.navParams.data.record.cuerpo4;
            this.image = this.navParams.data.record.foto;
            this.imagen = this.navParams.data.record.foto;
            this.estado = this.navParams.data.record.estado;
            this.isDisablednit = false;
            this.translateService.get('ITEM_UPDATE_TITLE').subscribe(function (value) {
                _this.pageTitle = value;
            });
        }
    };
    CatalogodiplomaCreatePage.prototype.manageGallery = function () {
        var _this = this;
        var creat = 'Actualiza';
        if (this.navParams.get("record") == null) {
            creat = 'Crea';
        }
        var options = {
            idempresa: this.idempresa,
            nombre: this.form.controls['nombre'].value,
            encabezado1: this.form.controls['enc1'].value,
            encabezado2: this.form.controls['enc2'].value,
            encabezado3: this.form.controls['enc3'].value,
            encabezado4: this.form.controls['enc4'].value,
            unidad: this.unidad,
            cuerpo1: this.form.controls['cue1'].value,
            cuerpo2: this.form.controls['cue2'].value,
            cuerpo3: this.form.controls['cue3'].value,
            cuerpo4: this.form.controls['cue4'].value,
            foto: this.imagen,
            estado: this.form.controls['estado'].value,
            bitacora: { idempresa: this.idempresa, idafiliado: '', email: this.username, permiso: creat, accion: creat + ' catalogodiplomas ' }
        };
        if (this.navParams.get("record") == null) {
            if (options) {
                this.authService.createReg('', options, 'catalogodiplomas').then(function (result) {
                    if (!_this.form.valid) {
                        return;
                    }
                    _this.viewCtrl.dismiss(result);
                }, function (err) {
                    _this.msj.showError3('Error', err.error);
                });
            }
        }
        else {
            if (options) {
                this.authService.createReg(this._ID, options, 'catalogodiplomas').then(function (result) {
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
    CatalogodiplomaCreatePage.prototype.cancel = function () {
        this.viewCtrl.dismiss();
    };
    CatalogodiplomaCreatePage.prototype.done = function () {
        if (!this.form.valid) {
            return;
        }
        //this.viewCtrl.dismiss(this.form.value);
    };
    CatalogodiplomaCreatePage.prototype.updateProfileImage = function () {
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
    CatalogodiplomaCreatePage.prototype.takePhotograph = function () {
        var _this = this;
        if (__WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__["a" /* Camera */]['installed']()) {
            this._IMAGE
                .takePhotograph()
                .then(function (image) {
                _this.imagen = image.toString();
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
    CatalogodiplomaCreatePage.prototype.selectImage = function () {
        var _this = this;
        if (__WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__["a" /* Camera */]['installed']()) {
            this._IMAGE
                .selectPhotograph()
                .then(function (image) {
                _this.imagen = image.toString();
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
    CatalogodiplomaCreatePage.prototype.processWebImage = function (event) {
        var _this = this;
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();
            reader.onload = function (readerEvent) {
                _this.image = readerEvent.target.result;
                _this.imagen = readerEvent.target.result;
            };
            reader.readAsDataURL(event.target.files[0]);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('fileInput'),
        __metadata("design:type", Object)
    ], CatalogodiplomaCreatePage.prototype, "fileInput", void 0);
    CatalogodiplomaCreatePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-catalogodiploma-create',template:/*ion-inline-start:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\EVENTOS\catalogodiploma-create\catalogodiploma-create.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>{{pageTitle}}</ion-title>\n\n    <ion-buttons end>\n        <button (click)="cancel()" icon-only ion-button padding-right>\n            <ion-icon name="md-close"></ion-icon>\n          </button>\n        <button  (click)="manageGallery()"  [disabled]="!form.valid" icon-only ion-button padding-right>\n            <ion-icon name="done-all"></ion-icon>\n          </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <form     [formGroup]="form"   text-wrap>\n    <ion-list>\n\n\n        <ion-item margin-bottom>\n           <ion-label>Nombre</ion-label>\n           <ion-input\n              type="text"\n              [(ngModel)]="nombre" [formControl]="form.controls[\'nombre\']"\n             ></ion-input>\n        </ion-item>\n        <ion-item class="invalid" *ngIf="!form.controls.nombre.valid && (form.controls.nombre.dirty || form.controls.nombre.touched)" text-wrap>\n          <ion-icon name="warning"></ion-icon>\n          {{ \'NOMBRET\' | translate }}\n         </ion-item>\n\n\n\n        <ion-item-group>\n\n            <ion-item>\n               <img [src]="image"   class="circle-pic"   height="150 px" width="150 px">\n               <input   type="hidden"    name="imagen"[formControl]="form.controls[\'imagen\']"    [(ngModel)]="imagen">\n            </ion-item>\n            <ion-item>\n                <a  ion-button    block  margin-bottom    color="secondary"  (click)="updateProfileImage()">                Seleccione image         </a>\n                <input type="file" accept="image/*" #fileInput style="visibility: hidden; height: 0px" (change)="processWebImage($event)" />\n             </ion-item>\n         </ion-item-group>\n\n         <ion-item margin-bottom>\n          <ion-label>Encabezado 1</ion-label>\n          <ion-textarea  rows=\'4\'      type="text"     [(ngModel)]="enc1" [formControl]="form.controls[\'enc1\']"     ></ion-textarea>\n       </ion-item>\n\n\n       <ion-item margin-bottom>\n        <ion-label>Encabezado 2</ion-label>\n        <ion-textarea  rows=\'4\'      type="text"     [(ngModel)]="enc2" [formControl]="form.controls[\'enc2\']"     ></ion-textarea>\n     </ion-item>\n\n\n     <ion-item margin-bottom>\n      <ion-label>Encabezado 3</ion-label>\n      <ion-textarea  rows=\'4\'      type="text"     [(ngModel)]="enc3" [formControl]="form.controls[\'enc3\']"     ></ion-textarea>\n   </ion-item>\n\n\n   <ion-item margin-bottom>\n    <ion-label>Encabezado 4</ion-label>\n    <ion-textarea  rows=\'4\'      type="text"     [(ngModel)]="enc4" [formControl]="form.controls[\'enc4\']"     ></ion-textarea>\n </ion-item>\n\n\n <ion-item margin-bottom>\n  <ion-label>Cuerpo 1 </ion-label>\n  <ion-textarea  rows=\'4\'      type="text"     [(ngModel)]="cue1" [formControl]="form.controls[\'cue1\']"     ></ion-textarea>\n</ion-item>\n\n<ion-item margin-bottom>\n  <ion-label>Cuerpo 2 </ion-label>\n  <ion-textarea  rows=\'4\'      type="text"     [(ngModel)]="cue2" [formControl]="form.controls[\'cue2\']"     ></ion-textarea>\n</ion-item>\n\n<ion-item margin-bottom>\n  <ion-label>Cuerpo 3 </ion-label>\n  <ion-textarea  rows=\'4\'      type="text"     [(ngModel)]="cue3" [formControl]="form.controls[\'cue3\']"     ></ion-textarea>\n</ion-item>\n\n<ion-item margin-bottom>\n  <ion-label>Cuerpo 4 </ion-label>\n  <ion-textarea  rows=\'4\'      type="text"     [(ngModel)]="cue4" [formControl]="form.controls[\'cue4\']"     ></ion-textarea>\n</ion-item>\n\n\n         <ion-item margin-bottom>\n            <ion-label>Estado</ion-label>\n            <ion-select [(ngModel)]="estado" [formControl]="form.controls[\'estado\']">\n                <ion-option value="Activo">Activo</ion-option>\n                <ion-option value="Inactivo">Inactivo</ion-option>\n              </ion-select>\n         </ion-item>\n         <ion-item class="invalid" *ngIf="!form.controls.estado.valid && (form.controls.estado.dirty || form.controls.estado.touched)" text-wrap>\n          <ion-icon name="warning"></ion-icon>\n          {{ \'ESTADOT\' | translate }}\n         </ion-item>\n\n\n     </ion-list>\n  </form>\n\n\n</ion-content>\n'/*ion-inline-end:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\EVENTOS\catalogodiploma-create\catalogodiploma-create.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_5__providers_image_image__["a" /* ImageProvider */], __WEBPACK_IMPORTED_MODULE_3__providers__["d" /* NotificationProvider */], __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["F" /* ViewController */], __WEBPACK_IMPORTED_MODULE_3__providers__["a" /* Auth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */]])
    ], CatalogodiplomaCreatePage);
    return CatalogodiplomaCreatePage;
}());

//# sourceMappingURL=catalogodiploma-create.js.map

/***/ })

});
//# sourceMappingURL=141.js.map