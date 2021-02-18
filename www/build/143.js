webpackJsonp([143],{

/***/ 1019:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TarifadCreatePageModule", function() { return TarifadCreatePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tarifad_create__ = __webpack_require__(1461);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var TarifadCreatePageModule = /** @class */ (function () {
    function TarifadCreatePageModule() {
    }
    TarifadCreatePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__tarifad_create__["a" /* TarifadCreatePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__tarifad_create__["a" /* TarifadCreatePage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], TarifadCreatePageModule);
    return TarifadCreatePageModule;
}());

//# sourceMappingURL=tarifad-create.module.js.map

/***/ }),

/***/ 1461:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TarifadCreatePage; });
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






var TarifadCreatePage = /** @class */ (function () {
    function TarifadCreatePage(storage, msj, translateService, viewCtrl, authService, navCtrl, navParams, _FB, actionSheetCtrl, events) {
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
        this.vgrupo = [];
        this.createdCode = null;
        this.scannedCode = null;
        this.translateService.get('APPX').subscribe(function (value) {
            _this.idempresa = value;
        });
        this.form = this._FB.group({
            nombre: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            horaini: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            horafin: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            monto: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            estado: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required]
        });
    }
    TarifadCreatePage.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get('username').then(function (value) {
            _this.username = value;
        });
    };
    TarifadCreatePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.idtarifa = this.navParams.data.record2.idtarifa;
        this.nidtarifa = this.navParams.data.record2.nidtarifa;
        if (this.navParams.get("record") == null) {
            this.translateService.get('ITEM_CREATE_TITLE').subscribe(function (value) {
                _this.pageTitle = value;
            });
            this.isDisablednit = true;
        }
        else {
            this._ID = this.navParams.data.record._id;
            this.idtarifa = this.navParams.data.record.idtarifa;
            this.nombre = this.navParams.data.record.nombre;
            this.horaini = this.navParams.data.record.horaini;
            this.horafin = this.navParams.data.record.horafin;
            this.monto = this.navParams.data.record.monto;
            this.estado = this.navParams.data.record.estado;
            this.isDisablednit = false;
            this.translateService.get('ITEM_UPDATE_TITLE').subscribe(function (value) {
                _this.pageTitle = value;
            });
        }
    };
    TarifadCreatePage.prototype.limpia = function (op) {
        this.form.controls['nombre'].setValue('');
        this.form.controls['horaini'].setValue(op);
        this.form.controls['horafin'].setValue(op);
        this.form.controls['monto'].setValue(op);
        this.form.controls['estado'].setValue(op);
    };
    TarifadCreatePage.prototype.manageGallery = function () {
        var _this = this;
        var creat = 'Actualiza';
        if (this.navParams.get("record") == null) {
            creat = 'Crea';
        }
        var options = {
            idempresa: this.idempresa,
            idtarifa: this.idtarifa,
            nombre: this.form.controls['nombre'].value,
            horaini: this.form.controls['horaini'].value,
            horafin: this.form.controls['horafin'].value,
            monto: this.form.controls['monto'].value,
            estado: this.form.controls['estado'].value,
            bitacora: { idempresa: this.idempresa, idafiliado: '', email: this.username, permiso: creat, accion: creat + ' dtarifas ' }
        };
        if (this.navParams.get("record") == null) {
            if (options) {
                this.authService.createReg('', options, 'dtarifas').then(function (result) {
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
                this.authService.createReg(this._ID, options, 'dtarifas').then(function (result) {
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
    TarifadCreatePage.prototype.stringify = function (country) {
        return JSON.stringify(country);
    };
    TarifadCreatePage.prototype.cancel = function () {
        this.viewCtrl.dismiss();
    };
    TarifadCreatePage.prototype.done = function () {
        if (!this.form.valid) {
            return;
        }
        //this.viewCtrl.dismiss(this.form.value);
    };
    TarifadCreatePage.prototype.optionsFn = function (item) {
        console.log(item);
    };
    TarifadCreatePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-tarifad-create',template:/*ion-inline-start:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\EMPRESA\tarifad-create\tarifad-create.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>{{pageTitle}}</ion-title>\n   \n    <ion-buttons end>\n        <button (click)="cancel()" icon-only ion-button padding-right>\n            <ion-icon name="md-close"></ion-icon>\n          </button>\n        <button  (click)="manageGallery()"  [disabled]="!form.valid" icon-only ion-button padding-right>\n            <ion-icon name="done-all"></ion-icon>\n          </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <form     [formGroup]="form"  text-wrap>\n    <ion-list>\n      \n        <ion-item margin-bottom>\n           <ion-label>Nombre</ion-label>\n           <ion-input    type="text"     [(ngModel)]="nombre"    [formControl]="form.controls[\'nombre\']"></ion-input>\n \n\n           \n        </ion-item>\n        <ion-item class="invalid" *ngIf="!form.controls.nombre.valid && (form.controls.nombre.dirty || form.controls.nombre.touched)" text-wrap>\n          <ion-icon name="warning"></ion-icon>\n          {{ \'NOMBRET\' | translate }}\n         </ion-item>\n\n           \n        <ion-item margin-bottom>\n          <ion-label>Hora inicio</ion-label>\n          <ion-input    type="number"     [(ngModel)]="horaini"    \n          [formControl]="form.controls[\'horaini\']"></ion-input>\n       </ion-item>\n       <ion-item class="invalid" *ngIf="!form.controls.horaini.valid && (form.controls.horaini.dirty || form.controls.horaini.touched)" text-wrap>\n         <ion-icon name="warning"></ion-icon>\n         {{ \'HORAINIT\' | translate }}\n        </ion-item>\n\n\n          \n        <ion-item margin-bottom >\n          <ion-label>hora final</ion-label>\n          <ion-input    type="number"     [(ngModel)]="horafin"    [formControl]="form.controls[\'horafin\']"></ion-input>\n       </ion-item>\n       <ion-item class="invalid" *ngIf="!form.controls.horafin.valid && (form.controls.horafin.dirty || form.controls.horafin.touched)" text-wrap>\n         <ion-icon name="warning"></ion-icon>\n         {{ \'HORAFINT\' | translate }}\n        </ion-item>\n\n\n  \n        <ion-item margin-bottom >\n          <ion-label>Monto</ion-label>\n          <ion-input    type="number"     [(ngModel)]="monto"    [formControl]="form.controls[\'monto\']"></ion-input>\n       </ion-item>\n       <ion-item class="invalid" *ngIf="!form.controls.monto.valid && (form.controls.monto.dirty || form.controls.monto.touched)" text-wrap>\n         <ion-icon name="warning"></ion-icon>\n         {{ \'MONTOT\' | translate }}\n        </ion-item>\n\n        \n        <ion-item margin-bottom>\n          <ion-label>Estado</ion-label>\n          <ion-select [(ngModel)]="estado" [formControl]="form.controls[\'estado\']">\n              <ion-option value="Activo">Activo</ion-option>\n              <ion-option value="Inactivo">Inactivo</ion-option>\n            </ion-select>\n       </ion-item>\n       <ion-item class="invalid" *ngIf="!form.controls.estado.valid && (form.controls.estado.dirty || form.controls.estado.touched)" text-wrap>\n        <ion-icon name="warning"></ion-icon>\n        {{ \'ESTADOT\' | translate }}\n       </ion-item>\n\n       \n      \n     </ion-list>\n     \n     \n  </form>\n\n \n\n</ion-content>'/*ion-inline-end:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\EMPRESA\tarifad-create\tarifad-create.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3__providers__["d" /* NotificationProvider */], __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["F" /* ViewController */], __WEBPACK_IMPORTED_MODULE_3__providers__["a" /* Auth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */]])
    ], TarifadCreatePage);
    return TarifadCreatePage;
}());

//# sourceMappingURL=tarifad-create.js.map

/***/ })

});
//# sourceMappingURL=143.js.map