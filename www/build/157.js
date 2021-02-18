webpackJsonp([157],{

/***/ 1006:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AfiliadoCreatePageModule", function() { return AfiliadoCreatePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__afiliado_create__ = __webpack_require__(1448);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AfiliadoCreatePageModule = /** @class */ (function () {
    function AfiliadoCreatePageModule() {
    }
    AfiliadoCreatePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__afiliado_create__["a" /* AfiliadoCreatePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__afiliado_create__["a" /* AfiliadoCreatePage */]),
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], AfiliadoCreatePageModule);
    return AfiliadoCreatePageModule;
}());

//# sourceMappingURL=afiliado-create.module.js.map

/***/ }),

/***/ 1448:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AfiliadoCreatePage; });
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






var AfiliadoCreatePage = /** @class */ (function () {
    function AfiliadoCreatePage(storage, msj, translateService, viewCtrl, authService, navCtrl, navParams, _FB, actionSheetCtrl, events) {
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
            _this.idempresa0 = value;
        });
        this.form = this._FB.group({
            // : ['', Validators.required],
            dpi: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            nombre: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            apellido: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            direccion: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].maxLength(50), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required])],
            telefono: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].maxLength(8), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].pattern(/^\d{8}$/), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required])]
        });
    }
    AfiliadoCreatePage.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get('username').then(function (value) {
            _this.username = value;
        });
    };
    AfiliadoCreatePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this._IDEMPRESA = this.navParams.data.record2.idempresa;
        if (this.navParams.get("record") == null) {
            this.translateService.get('ITEM_CREATE_TITLE').subscribe(function (value) {
                _this.pageTitle = value;
            });
            this.isDisablednit = true;
        }
        else {
            this._ID = this.navParams.data.record._id;
            this.dpi = this.navParams.data.record.dpi;
            this.nombre = this.navParams.data.record.nombre;
            this.apellido = this.navParams.data.record.apellido;
            this.direccion = this.navParams.data.record.direccion;
            this.email = this.navParams.data.record.email;
            this.telefono = this.navParams.data.record.telefono;
            this.isDisablednit = false;
            this.translateService.get('ITEM_UPDATE_TITLE').subscribe(function (value) {
                _this.pageTitle = value;
            });
        }
    };
    AfiliadoCreatePage.prototype.manageGallery = function () {
        var _this = this;
        var creat = 'Actualiza';
        if (this.navParams.get("record") == null) {
            creat = 'Crea';
        }
        var options = {
            idempresa0: this.idempresa0,
            idempresa: this._IDEMPRESA,
            dpi: this.form.controls['dpi'].value,
            nombre: this.form.controls['nombre'].value,
            apellido: this.form.controls['apellido'].value,
            direccion: this.form.controls['direccion'].value,
            email: this.form.controls['email'].value,
            telefono: this.form.controls['telefono'].value,
            bitacora: { idempresa: this._IDEMPRESA, idafiliado: '', email: this.username, permiso: creat, accion: creat + ' empresas ' }
        };
        if (this.navParams.get("record") == null) {
            if (options) {
                this.authService.createReg('', options, 'afiliados').then(function (result) {
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
                this.authService.createReg(this._ID, options, 'afiliados').then(function (result) {
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
    AfiliadoCreatePage.prototype.cancel = function () {
        this.viewCtrl.dismiss();
    };
    AfiliadoCreatePage.prototype.done = function () {
        if (!this.form.valid) {
            return;
        }
        //this.viewCtrl.dismiss(this.form.value);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('fileInput'),
        __metadata("design:type", Object)
    ], AfiliadoCreatePage.prototype, "fileInput", void 0);
    AfiliadoCreatePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-afiliado-create',template:/*ion-inline-start:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\EMPRESA\afiliado-create\afiliado-create.html"*/'<ion-header>\n    <ion-navbar>\n      <ion-title>{{pageTitle}}</ion-title>\n    \n      <ion-buttons end>\n          <button (click)="cancel()" icon-only ion-button padding-right>\n              <ion-icon name="md-close"></ion-icon>\n            </button>\n          <button  (click)="manageGallery()"  [disabled]="!form.valid" icon-only ion-button padding-right>\n              <ion-icon name="done-all"></ion-icon>\n            </button>\n      </ion-buttons>\n    </ion-navbar>\n  </ion-header>\n  <ion-content padding>\n    <form\n      [formGroup]="form"\n       text-wrap>\n      <ion-list>\n          <ion-item margin-bottom>\n              <ion-label>Id interno:</ion-label>\n              <ion-input [disabled]="true"\n              value="{{_ID}}"\n              type="text" \n              \n              ></ion-input>\n\n           </ion-item>\n\n          <ion-item margin-bottom>\n              <ion-label>Codigo</ion-label>\n              <ion-input [disabled]="isDisablednit ? false : true"\n                 type="text"\n                 [(ngModel)]="dpi"\n                 [formControl]="form.controls[\'dpi\']"></ion-input>\n           </ion-item>\n           <ion-item class="invalid" *ngIf="!form.controls.dpi.valid && (form.controls.dpi.dirty || form.controls.dpi.touched)" text-wrap>\n            <ion-icon name="warning"></ion-icon>\n            {{ \'CODIGOT\' | translate }}\n           </ion-item>\n          <ion-item margin-bottom>\n             <ion-label>Nombre</ion-label>\n             <ion-input\n                type="text"\n                [(ngModel)]="nombre"\n                [formControl]="form.controls[\'nombre\']"></ion-input>\n          </ion-item>\n          <ion-item class="invalid" *ngIf="!form.controls.nombre.valid && (form.controls.nombre.dirty || form.controls.nombre.touched)" text-wrap>\n            <ion-icon name="warning"></ion-icon>\n            {{ \'NOMBRET\' | translate }}\n           </ion-item>\n          <ion-item margin-bottom>\n             <ion-label>Razon social</ion-label>\n             <ion-input\n                type="text"\n                [(ngModel)]="apellido"\n                [formControl]="form.controls[\'apellido\']"></ion-input>\n          </ion-item>\n          <ion-item class="invalid" *ngIf="!form.controls.apellido.valid && (form.controls.apellido.dirty || form.controls.apellido.touched)" text-wrap>\n            <ion-icon name="warning"></ion-icon>\n            {{ \'APELLIDOT\' | translate }}\n           </ion-item>\n          <ion-item margin-bottom>\n              <ion-label>Direccion</ion-label>\n              <ion-input\n                 type="text"\n                 [(ngModel)]="direccion"\n                 [formControl]="form.controls[\'direccion\']"></ion-input>\n           </ion-item>\n           <ion-item class="invalid" *ngIf="!form.controls.direccion.valid && (form.controls.direccion.dirty || form.controls.direccion.touched)" text-wrap>\n            <ion-icon name="warning"></ion-icon>\n            {{ \'DIRECCIONT\' | translate }}\n           </ion-item>\n           <ion-item margin-bottom>\n              <ion-label>Email</ion-label>\n              <ion-input\n                 type="text"\n                 [(ngModel)]="email"\n                 [formControl]="form.controls[\'email\']"></ion-input>\n           </ion-item>\n           <ion-item class="invalid" *ngIf="!form.controls.email.valid && (form.controls.email.dirty || form.controls.email.touched)" text-wrap>\n            <ion-icon name="warning"></ion-icon>\n            {{ \'EMAIL_NOVALIDO\' | translate }}\n           </ion-item>\n           <ion-item margin-bottom>\n              <ion-label>Telefono</ion-label>\n              <ion-input\n                 type="text"\n                 [(ngModel)]="telefono"\n                 [formControl]="form.controls[\'telefono\']"></ion-input>\n           </ion-item>\n           <ion-item class="invalid" *ngIf="!form.controls.telefono.valid && (form.controls.telefono.dirty || form.controls.telefono.touched)" text-wrap>\n            <ion-icon name="warning"></ion-icon>\n            {{ \'TELEFONOT\' | translate }}\n           </ion-item>\n       </ion-list>\n    </form>  \n  </ion-content>   '/*ion-inline-end:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\EMPRESA\afiliado-create\afiliado-create.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3__providers__["d" /* NotificationProvider */], __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["F" /* ViewController */], __WEBPACK_IMPORTED_MODULE_3__providers__["a" /* Auth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */]])
    ], AfiliadoCreatePage);
    return AfiliadoCreatePage;
}());

//# sourceMappingURL=afiliado-create.js.map

/***/ })

});
//# sourceMappingURL=157.js.map