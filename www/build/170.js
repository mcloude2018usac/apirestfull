webpackJsonp([170],{

/***/ 1431:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServerclaroCreatePage; });
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






var ServerclaroCreatePage = /** @class */ (function () {
    function ServerclaroCreatePage(storage, msj, translateService, viewCtrl, authService, navCtrl, navParams, _FB, actionSheetCtrl, events) {
        var _this = this;
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
        this.translateService.get('APPX').subscribe(function (value) {
            _this.idempresa = value;
        });
        this.form = this._FB.group({
            nit: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].maxLength(8), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].pattern(/^\d{8}$/), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required])],
            nombre: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            razon: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            direccion: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].maxLength(50), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required])],
            telefono: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].maxLength(8), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].pattern(/^\d{8}$/), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required])],
            estado: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required]
        });
    }
    ServerclaroCreatePage.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get('username').then(function (value) {
            _this.username = value;
        });
    };
    ServerclaroCreatePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        if (this.navParams.get("record") == null) {
            this.translateService.get('ITEM_CREATE_TITLE').subscribe(function (value) {
                _this.pageTitle = value;
            });
            this.isDisablednit = true;
        }
        else {
            //this._ID 				=	this.navParams.data.record.nit;
            this._ID = this.navParams.data.record._id;
            this.nit = this.navParams.data.record.nit;
            this.nombre = this.navParams.data.record.nombre;
            this.razon = this.navParams.data.record.razon;
            this.direccion = this.navParams.data.record.direccion;
            this.email = this.navParams.data.record.email;
            this.telefono = this.navParams.data.record.telefonos;
            this.estado = this.navParams.data.record.estado;
            this.isDisablednit = false;
            this.translateService.get('ITEM_UPDATE_TITLE').subscribe(function (value) {
                _this.pageTitle = value;
            });
        }
    };
    ServerclaroCreatePage.prototype.manageGallery = function () {
        var _this = this;
        var creat = 'Actualiza';
        if (this.navParams.get("record") == null) {
            creat = 'Crea';
        }
        var options = {
            idempresa0: this.idempresa,
            nit: this.form.controls['nit'].value,
            nombre: this.form.controls['nombre'].value,
            razon: this.form.controls['razon'].value,
            direccion: this.form.controls['direccion'].value,
            email: this.form.controls['email'].value,
            telefonos: this.form.controls['telefono'].value,
            estado: this.form.controls['estado'].value,
            bitacora: { idempresa: this.idempresa, idafiliado: '', email: this.username, permiso: creat, accion: creat + ' auditservers ' }
        };
        if (this.navParams.get("record") == null) {
            if (options) {
                this.authService.createReg('', options, 'auditservers').then(function (result) {
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
                this.authService.createReg(this._ID, options, 'auditservers').then(function (result) {
                    if (!_this.form.valid) {
                        return;
                    }
                    _this.viewCtrl.dismiss(result);
                }, function (err) {
                    _this.msj.showError3('Error', err.error);
                });
            }
        }
    };
    ServerclaroCreatePage.prototype.cancel = function () {
        this.viewCtrl.dismiss();
    };
    ServerclaroCreatePage.prototype.done = function () {
        if (!this.form.valid) {
            return;
        }
        //this.viewCtrl.dismiss(this.form.value);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('fileInput'),
        __metadata("design:type", Object)
    ], ServerclaroCreatePage.prototype, "fileInput", void 0);
    ServerclaroCreatePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-serverclaro-create',template:/*ion-inline-start:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\CLAROGT\serverclaro-create\serverclaro-create.html"*/'<ion-header>\n  <ion-navbar>   \n    <ion-title>{{pageTitle}}</ion-title>\n    \n    <ion-buttons end>\n        <button (click)="cancel()" icon-only ion-button padding-right>\n            <ion-icon name="md-close"></ion-icon>\n          </button>\n        <button  (click)="manageGallery()"  [disabled]="!form.valid" icon-only ion-button padding-right>\n            <ion-icon name="done-all"></ion-icon>\n          </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <form     [formGroup]="form"  text-wrap>\n    <ion-list>\n        <ion-item margin-bottom>\n            <ion-label>Nit</ion-label>\n            <ion-input [disabled]="isDisablednit ? false : true"  [(ngModel)]="nit"\n             type="number" [formControl]="form.controls[\'nit\']"></ion-input>\n              \n         </ion-item>\n         <ion-item class="invalid" *ngIf="!form.controls.nit.valid && (form.controls.nit.dirty || form.controls.nit.touched)" text-wrap>\n          <ion-icon name="warning"></ion-icon>\n          {{ \'NITT\' | translate }}\n         </ion-item>\n        <ion-item margin-bottom>\n           <ion-label>Nombre</ion-label>\n           <ion-input\n              type="text"\n              [(ngModel)]="nombre" [formControl]="form.controls[\'nombre\']"\n             ></ion-input>\n        </ion-item>\n        <ion-item class="invalid" *ngIf="!form.controls.nombre.valid && (form.controls.nombre.dirty || form.controls.nombre.touched)" text-wrap>\n          <ion-icon name="warning"></ion-icon>\n          {{ \'NOMBRET\' | translate }}\n         </ion-item>\n        <ion-item margin-bottom>\n           <ion-label>Razon social</ion-label>\n           <ion-input\n              type="text"\n              [(ngModel)]="razon"\n              formControlName="razon"></ion-input>\n        </ion-item>\n\n        <ion-item margin-bottom>\n            <ion-label>Direccion</ion-label>\n            <ion-input\n               type="text"\n               [(ngModel)]="direccion"\n               formControlName="direccion"></ion-input>\n         </ion-item>\n\n         <ion-item margin-bottom>\n            <ion-label>Email</ion-label>\n            <ion-input\n               type="email"\n               [(ngModel)]="email" [formControl]="form.controls[\'email\']"\n              ></ion-input>\n         </ion-item>\n         <ion-item class="invalid" *ngIf="!form.controls.email.valid && (form.controls.email.dirty || form.controls.email.touched)" text-wrap>\n          <ion-icon name="warning"></ion-icon>\n          {{ \'EMAIL_NOVALIDO\' | translate }}\n         </ion-item>\n\n         <ion-item margin-bottom>\n            <ion-label>Telefono</ion-label>\n            <ion-input\n               type="text"\n               [(ngModel)]="telefono"\n               [formControl]="form.controls[\'telefono\']"></ion-input>\n         </ion-item>\n         <ion-item class="invalid" *ngIf="!form.controls.telefono.valid && (form.controls.telefono.dirty || form.controls.telefono.touched)" text-wrap>\n          <ion-icon name="warning"></ion-icon>\n          {{ \'TELEFONOT\' | translate }}\n         </ion-item>\n\n         <ion-item margin-bottom>\n            <ion-label>Estado</ion-label>\n            <ion-select [(ngModel)]="estado" [formControl]="form.controls[\'estado\']">\n                <ion-option value="Activo">Activo</ion-option>\n                <ion-option value="Inactivo">Inactivo</ion-option>\n              </ion-select>\n         </ion-item>\n         <ion-item class="invalid" *ngIf="!form.controls.estado.valid && (form.controls.estado.dirty || form.controls.estado.touched)" text-wrap>\n          <ion-icon name="warning"></ion-icon>\n          {{ \'ESTADOT\' | translate }}\n         </ion-item>\n       \n       \n      \n     </ion-list>\n  </form>\n\n\n</ion-content>'/*ion-inline-end:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\CLAROGT\serverclaro-create\serverclaro-create.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3__providers__["d" /* NotificationProvider */], __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["F" /* ViewController */], __WEBPACK_IMPORTED_MODULE_3__providers__["a" /* Auth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */]])
    ], ServerclaroCreatePage);
    return ServerclaroCreatePage;
}());

//# sourceMappingURL=serverclaro-create.js.map

/***/ }),

/***/ 989:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerclaroCreatePageModule", function() { return ServerclaroCreatePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__serverclaro_create__ = __webpack_require__(1431);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ServerclaroCreatePageModule = /** @class */ (function () {
    function ServerclaroCreatePageModule() {
    }
    ServerclaroCreatePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__serverclaro_create__["a" /* ServerclaroCreatePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__serverclaro_create__["a" /* ServerclaroCreatePage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], ServerclaroCreatePageModule);
    return ServerclaroCreatePageModule;
}());

//# sourceMappingURL=serverclaro-create.module.js.map

/***/ })

});
//# sourceMappingURL=170.js.map