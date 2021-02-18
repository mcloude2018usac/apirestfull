webpackJsonp([250],{

/***/ 1350:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SuscriptorCreatePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SuscriptorCreatePage = /** @class */ (function () {
    function SuscriptorCreatePage(msj, translateService, viewCtrl, authService, navCtrl, navParams, _FB, actionSheetCtrl, events) {
        var _this = this;
        this.msj = msj;
        this.translateService = translateService;
        this.viewCtrl = viewCtrl;
        this.authService = authService;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._FB = _FB;
        this.actionSheetCtrl = actionSheetCtrl;
        this.events = events;
        this.vgrupo = [];
        // Define form validation - VERY basic!
        this.form = this._FB.group({
            'nodpi': ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            'nombre': ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            'apellido': ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            'direccion': ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            'sexo': ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            'fecha_nac': ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            'saldoactual': ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            'telefono': ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            'estado': ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            'codigo1': [''],
            'codigo2': [''],
            'codigo3': [''],
            'codigo4': [''],
            'codigo5': [''],
            'dispositivo1': [''],
            'dispositivo2': [''],
            'dispositivo3': [''],
            'dispositivo4': [''],
            'dispositivo5': ['']
        });
        this.authService.getReg('suscriptor-disp', 'datosfijos2').then(function (result) {
            _this.vgrupo = result;
        }, function (err) {
            _this.msj.showError3('Error', err.error);
        });
    }
    SuscriptorCreatePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        if (this.navParams.get("record") == null) {
            this.translateService.get('ITEM_CREATE_TITLE').subscribe(function (value) {
                _this.pageTitle = value;
            });
            this.isDisableddpi = true;
            this.saldoactual = "0";
        }
        else {
            this._ID = this.navParams.data.record.nodpi;
            this.nodpi = this.navParams.data.record.nodpi;
            this.nombre = this.navParams.data.record.nombre;
            this.apellido = this.navParams.data.record.apellido;
            this.direccion = this.navParams.data.record.direccion;
            this.sexo = this.navParams.data.record.sexo;
            this.fecha_nac = this.navParams.data.record.fecha_nac;
            this.saldoactual = this.navParams.data.record.saldoactual;
            this.telefono = this.navParams.data.record.telefono;
            this.estado = this.navParams.data.record.estado;
            this.codigo1 = this.navParams.data.record.codigo1;
            this.codigo2 = this.navParams.data.record.codigo2;
            this.codigo3 = this.navParams.data.record.codigo3;
            this.codigo4 = this.navParams.data.record.codigo4;
            this.codigo5 = this.navParams.data.record.codigo5;
            this.dispositivo1 = this.navParams.data.record.dispositivo1;
            this.dispositivo2 = this.navParams.data.record.dispositivo2;
            this.dispositivo3 = this.navParams.data.record.dispositivo3;
            this.dispositivo4 = this.navParams.data.record.dispositivo4;
            this.dispositivo5 = this.navParams.data.record.dispositivo5;
            this.translateService.get('ITEM_UPDATE_TITLE').subscribe(function (value) {
                _this.pageTitle = value;
            });
            this.isDisableddpi = false;
        }
    };
    SuscriptorCreatePage.prototype.manageGallery = function () {
        var _this = this;
        var options = {
            nodpi: this.form.controls['nodpi'].value,
            nombre: this.form.controls['nombre'].value,
            apellido: this.form.controls['apellido'].value,
            direccion: this.form.controls['direccion'].value,
            fecha_nac: this.form.controls['fecha_nac'].value.substring(0, 10),
            sexo: this.form.controls['sexo'].value,
            saldoactual: this.form.controls['saldoactual'].value,
            telefono: this.form.controls['telefono'].value,
            estado: this.form.controls['estado'].value,
            codigo1: this.form.controls['codigo1'].value,
            codigo2: this.form.controls['codigo2'].value,
            codigo3: this.form.controls['codigo3'].value,
            codigo4: this.form.controls['codigo4'].value,
            codigo5: this.form.controls['codigo5'].value,
            dispositivo1: this.form.controls['dispositivo1'].value,
            dispositivo2: this.form.controls['dispositivo2'].value,
            dispositivo3: this.form.controls['dispositivo3'].value,
            dispositivo4: this.form.controls['dispositivo4'].value,
            dispositivo5: this.form.controls['dispositivo5'].value,
            saldo1: 0,
            saldo2: 0,
            saldo3: 0,
            saldo4: 0,
            saldo5: 0,
            usuario: 'aa'
        };
        if (this.navParams.get("record") == null) {
            if (options) {
                //STR_TO_DATE('04/04/2012', '%d/%m/%Y')
                this.authService.createReg('', options, 'suscriptors').then(function (result) {
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
                this.authService.createReg(this._ID, options, 'suscriptors').then(function (result) {
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
    SuscriptorCreatePage.prototype.cancel = function () {
        this.viewCtrl.dismiss();
    };
    SuscriptorCreatePage.prototype.done = function () {
        if (!this.form.valid) {
            return;
        }
        //this.viewCtrl.dismiss(this.form.value);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('fileInput'),
        __metadata("design:type", Object)
    ], SuscriptorCreatePage.prototype, "fileInput", void 0);
    SuscriptorCreatePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-suscriptor-create',template:/*ion-inline-start:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\BUSES\suscriptor-create\suscriptor-create.html"*/'<ion-header>\n    <ion-navbar>\n      <ion-title>{{pageTitle}}</ion-title>\n      \n      <ion-buttons end>\n          <button (click)="cancel()" icon-only ion-button padding-right>\n              <ion-icon name="md-close"></ion-icon>\n            </button>\n          <button  (click)="manageGallery()"  [disabled]="!form.valid" icon-only ion-button padding-right>\n              <ion-icon name="done-all"></ion-icon>\n            </button>\n      </ion-buttons>\n    </ion-navbar>\n  </ion-header>\n  \n  <ion-content padding>\n  \n    <form\n      [formGroup]="form" text-wrap>\n      <ion-list>\n          <ion-item margin-bottom>\n              <ion-label>Dpi</ion-label>\n              <ion-input\n              type="number"  [disabled]="isDisableddpi ? false : true"\n                 [(ngModel)]="nodpi"\n                 [formControl]="form.controls[\'nodpi\']"></ion-input>\n           </ion-item>\n          <ion-item margin-bottom>\n             <ion-label>Nombre</ion-label>\n             <ion-input\n                type="text"\n                [(ngModel)]="nombre"\n                [formControl]="form.controls[\'nombre\']"></ion-input>\n          </ion-item>\n          <ion-item margin-bottom>\n              <ion-label>Apellido</ion-label>\n              <ion-input\n                 type="text"\n                 [(ngModel)]="apellido"\n                 [formControl]="form.controls[\'apellido\']"></ion-input>\n           </ion-item>\n\n  \n          <ion-item margin-bottom>\n              <ion-label>Direccion</ion-label>\n              <ion-input\n                 type="text"\n                 [(ngModel)]="direccion"\n                 [formControl]="form.controls[\'direccion\']"></ion-input>\n           </ion-item>\n  \n           <ion-item margin-bottom>\n              <ion-label>Sexo</ion-label>\n              <ion-select [(ngModel)]="sexo"  [formControl]="form.controls[\'sexo\']">\n                  <ion-option value="Masculino">Masculino</ion-option>\n                  <ion-option value="Femenino">Femenino</ion-option>\n                </ion-select>  \n           </ion-item>\n           \n  \n           <ion-item margin-bottom>\n              <ion-label>Fecha nacimiento</ion-label>\n              <ion-datetime displayFormat="DD/MM/YYYY"   [formControl]="form.controls[\'fecha_nac\']" [(ngModel)]="fecha_nac"></ion-datetime>\n             \n           </ion-item>\n  \n        \n\n           <ion-item margin-bottom>\n              <ion-label>Saldo actual</ion-label>\n              <ion-input\n              type="number"  [disabled]="true"\n                 [(ngModel)]="saldoactual"\n                 [formControl]="form.controls[\'saldoactual\']"></ion-input>\n           </ion-item>\n\n           <ion-item margin-bottom>\n              <ion-label>Telefono</ion-label>\n              <ion-input\n              type="number" \n                 [(ngModel)]="telefono"\n                 [formControl]="form.controls[\'telefono\']"></ion-input>\n           </ion-item>\n\n           <ion-item margin-bottom>\n              <ion-label>Estado</ion-label>\n              <ion-select [(ngModel)]="estado"  [formControl]="form.controls[\'estado\']">\n                  <ion-option value="Activo">Activo</ion-option>\n                  <ion-option value="Inactivo">Inactivo</ion-option>\n                </ion-select>\n           </ion-item>\n           \n           \n           <ion-item margin-bottom>\n              <ion-label >DISPOSITIVOS</ion-label>\n            </ion-item>\n           <ion-item >\n             <ion-input  placeholder="Ingrese Codigo"   type="text"  [(ngModel)]="codigo1"   [formControl]="form.controls[\'codigo1\']"></ion-input>\n              <ion-select  placeholder="Seleccione Tipo" [(ngModel)]="dispositivo1"  [formControl]="form.controls[\'dispositivo1\']">\n                  <ion-option text-wrap *ngFor="let item of vgrupo"  value="{{item.nombre}}">{{item.nombre}}</ion-option>\n   \n                </ion-select>\n            </ion-item>\n\n            <ion-item >\n                  <ion-input  placeholder="Ingrese Codigo"   type="text"  [(ngModel)]="codigo2"   [formControl]="form.controls[\'codigo2\']"></ion-input>\n                <ion-select   placeholder="Seleccione Tipo" [(ngModel)]="dispositivo2"  [formControl]="form.controls[\'dispositivo2\']">\n                    <ion-option text-wrap *ngFor="let item of vgrupo"  value="{{item.nombre}}">{{item.nombre}}</ion-option>\n   \n                  </ion-select>\n              </ion-item>\n  \n              <ion-item >\n                  <ion-input placeholder="Ingrese Codigo"   type="text"  [(ngModel)]="codigo3"   [formControl]="form.controls[\'codigo3\']"></ion-input>\n                  <ion-select  placeholder="Seleccione Tipo" [(ngModel)]="dispositivo3"  [formControl]="form.controls[\'dispositivo3\']">\n                      <ion-option text-wrap *ngFor="let item of vgrupo"  value="{{item.nombre}}">{{item.nombre}}</ion-option>\n   \n                    </ion-select>\n                </ion-item>\n\n\n                <ion-item >\n                    <ion-input  placeholder="Ingrese Codigo"  placeholder="Codigo"   type="text"  [(ngModel)]="codigo4"   [formControl]="form.controls[\'codigo4\']"></ion-input>\n                    <ion-select placeholder="Seleccione Tipo" [(ngModel)]="dispositivo4"  [formControl]="form.controls[\'dispositivo4\']">\n                        <ion-option text-wrap *ngFor="let item of vgrupo"  value="{{item.nombre}}">{{item.nombre}}</ion-option>\n   \n                      </ion-select>\n                  </ion-item>\n\n                  <ion-item >\n                        <ion-input placeholder="Ingrese Codigo"  placeholder="Codigo"   type="text"  [(ngModel)]="codigo5"   [formControl]="form.controls[\'codigo5\']"></ion-input>\n                      <ion-select placeholder="Seleccione Tipo" [(ngModel)]="dispositivo5"  [formControl]="form.controls[\'dispositivo5\']">\n                          <ion-option text-wrap *ngFor="let item of vgrupo"  value="{{item.nombre}}">{{item.nombre}}</ion-option>\n   \n                        </ion-select>\n                    </ion-item>\n       </ion-list>\n    </form>\n  \n  \n  </ion-content>'/*ion-inline-end:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\BUSES\suscriptor-create\suscriptor-create.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers__["d" /* NotificationProvider */], __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["F" /* ViewController */], __WEBPACK_IMPORTED_MODULE_3__providers__["a" /* Auth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */]])
    ], SuscriptorCreatePage);
    return SuscriptorCreatePage;
}());

//# sourceMappingURL=suscriptor-create.js.map

/***/ }),

/***/ 910:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuscriptorCreatePageModule", function() { return SuscriptorCreatePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__suscriptor_create__ = __webpack_require__(1350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SuscriptorCreatePageModule = /** @class */ (function () {
    function SuscriptorCreatePageModule() {
    }
    SuscriptorCreatePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__suscriptor_create__["a" /* SuscriptorCreatePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__suscriptor_create__["a" /* SuscriptorCreatePage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], SuscriptorCreatePageModule);
    return SuscriptorCreatePageModule;
}());

//# sourceMappingURL=suscriptor-create.module.js.map

/***/ })

});
//# sourceMappingURL=250.js.map