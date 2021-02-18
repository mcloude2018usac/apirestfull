webpackJsonp([228],{

/***/ 1358:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConvenioCalusacCreatePage; });
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






var ConvenioCalusacCreatePage = /** @class */ (function () {
    function ConvenioCalusacCreatePage(storage, msj, translateService, viewCtrl, authService, navCtrl, navParams, _FB, actionSheetCtrl, events) {
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
        // Define form validation - VERY basic!
        this.form = this._FB.group({
            nombre: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            codigo: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            fechaini: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            fechafin: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            tipo: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
        });
    }
    ConvenioCalusacCreatePage.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get('username').then(function (value) {
            _this.username = value;
        });
    };
    ConvenioCalusacCreatePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        if (this.navParams.get("record") == null) {
            this.translateService.get('ITEM_CREATE_TITLE').subscribe(function (value) {
                _this.pageTitle = value;
            });
        }
        else {
            this._ID = this.navParams.data.record._id;
            this.nombre = this.navParams.data.record.nombre;
            this.codigo = this.navParams.data.record.monto;
            this.fechaini = this.navParams.data.record.f1;
            this.tipo = this.navParams.data.record.tipo;
            this.fechafin = this.navParams.data.record.f2;
            this.translateService.get('ITEM_UPDATE_TITLE').subscribe(function (value) {
                _this.pageTitle = value;
            });
        }
    };
    ConvenioCalusacCreatePage.prototype.manageGallery = function () {
        var _this = this;
        var creat = 'Actualiza';
        if (this.navParams.get("record") == null) {
            creat = 'Crea';
        }
        var monto = 0;
        if (this.form.controls['codigo'].value) {
            if (this.form.controls['codigo'].value == undefined) { }
            else {
                monto = this.form.controls['codigo'].value;
            }
        }
        var options = {
            idempresa: this.navParams.data.idempresa,
            categoria: this.navParams.data.idcategoria,
            f1: this.form.controls['fechaini'].value,
            f2: this.form.controls['fechafin'].value,
            nombre: this.form.controls['nombre'].value,
            monto: monto,
            tipo: this.form.controls['tipo'].value,
            bitacora: { idempresa: this.navParams.data.idempresa, idafiliado: '', email: this.username, permiso: creat, accion: creat + ' Departamento ' }
        };
        if (this.navParams.get("record") == null) {
            if (options) {
                this.authService.createReg('', options, 'conveniocalusacs').then(function (result) {
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
                this.authService.createReg(this._ID, options, 'conveniocalusacs').then(function (result) {
                    if (!_this.form.valid) {
                        return;
                    }
                    //   console.log(result)
                    _this.viewCtrl.dismiss(result);
                }, function (err) {
                    _this.msj.showError3('Error', err.error);
                });
            }
        }
    };
    ConvenioCalusacCreatePage.prototype.cancel = function () {
        this.viewCtrl.dismiss();
    };
    ConvenioCalusacCreatePage.prototype.done = function () {
        if (!this.form.valid) {
            return;
        }
        //this.viewCtrl.dismiss(this.form.value);
    };
    ConvenioCalusacCreatePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-convenio-calusac-create',template:/*ion-inline-start:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\CALUSAC\convenio-calusac-create\convenio-calusac-create.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Creación de convenios</ion-title>\n    <ion-buttons end>\n        <button (click)="cancel()" icon-only ion-button padding-right>\n            <ion-icon name="md-close"></ion-icon>\n          </button>\n        <button  (click)="manageGallery()"  [disabled]="!form.valid" icon-only ion-button padding-right>\n            <ion-icon name="done-all"></ion-icon>\n          </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <form     [formGroup]="form"   text-wrap>\n    <ion-list>\n      <ion-item margin-bottom>\n        <ion-label>Fecha Inicio</ion-label>\n        <ion-datetime displayFormat="DD/MM/YYYY hh:mm A"\n        [formControl]="form.controls[\'fechaini\']" [(ngModel)]="fechaini"></ion-datetime>\n      </ion-item>\n      <ion-item class="invalid" *ngIf="!form.controls.fechaini.valid && (form.controls.fechaini.dirty || form.controls.fechaini.touched)" text-wrap>\n        <ion-icon name="warning"></ion-icon>\n        {{ \'FECHAINIT\' | translate }}\n      </ion-item>\n     <ion-item margin-bottom>\n      <ion-label>Fecha Finaliza</ion-label>\n      <ion-datetime displayFormat="DD/MM/YYYY hh:mm A"\n      [formControl]="form.controls[\'fechafin\']" [(ngModel)]="fechafin"></ion-datetime>\n    </ion-item>\n\n\n    <ion-item margin-bottom>\n      <ion-label>Perfil</ion-label>\n      <ion-select [(ngModel)]="tipo" [formControl]="form.controls[\'tipo\']">\n        <ion-option value="Estudiante"> Estudiante USAC</ion-option>\n        <ion-option value="Trabajador">Trabajador USAC</ion-option>\n        <ion-option value="Hijo Trabajador Adolescente">Hijo de Trabajador USAC Adolescente</ion-option>\n        <ion-option value="Hijo Trabajador Adulto">Hijo de Trabajador USAC Adulto</ion-option>\n        <ion-option value="Población">Población</ion-option>\n        <ion-option value="Adolescente">Adolescente</ion-option>\n        <ion-option value="Extranjero">Extranjero</ion-option>\n\n\n      </ion-select>\n   </ion-item>\n\n        <ion-item margin-bottom>\n           <ion-label>Descripción</ion-label>\n           <ion-input\n              type="text"\n              [(ngModel)]="nombre" maxlength="50"  [formControl]="form.controls[\'nombre\']"\n             ></ion-input>\n        </ion-item>\n        <ion-item class="invalid" *ngIf="!form.controls.nombre.valid && (form.controls.nombre.dirty || form.controls.nombre.touched)" text-wrap>\n          <ion-icon name="warning"></ion-icon>\n          {{ \'NOMBRET\' | translate }}\n         </ion-item>\n         <ion-item margin-bottom>\n          <ion-label>Monto a aplicar</ion-label>\n          <ion-input\n             type="Number"\n             [(ngModel)]="codigo" [formControl]="form.controls[\'codigo\']"\n            ></ion-input>\n       </ion-item>\n       <ion-item class="invalid" *ngIf="!form.controls.codigo.valid && (form.controls.codigo.dirty || form.controls.codigo.touched)" text-wrap>\n         <ion-icon name="warning"></ion-icon>\n         {{ \'CODIGOT\' | translate }}\n        </ion-item>\n\n\n\n     </ion-list>\n  </form>\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\CALUSAC\convenio-calusac-create\convenio-calusac-create.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3__providers__["d" /* NotificationProvider */], __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["F" /* ViewController */], __WEBPACK_IMPORTED_MODULE_3__providers__["a" /* Auth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */]])
    ], ConvenioCalusacCreatePage);
    return ConvenioCalusacCreatePage;
}());

//# sourceMappingURL=convenio-calusac-create.js.map

/***/ }),

/***/ 918:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConvenioCalusacCreatePageModule", function() { return ConvenioCalusacCreatePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__convenio_calusac_create__ = __webpack_require__(1358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ConvenioCalusacCreatePageModule = /** @class */ (function () {
    function ConvenioCalusacCreatePageModule() {
    }
    ConvenioCalusacCreatePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__convenio_calusac_create__["a" /* ConvenioCalusacCreatePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__convenio_calusac_create__["a" /* ConvenioCalusacCreatePage */]), __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], ConvenioCalusacCreatePageModule);
    return ConvenioCalusacCreatePageModule;
}());

//# sourceMappingURL=convenio-calusac-create.module.js.map

/***/ })

});
//# sourceMappingURL=228.js.map