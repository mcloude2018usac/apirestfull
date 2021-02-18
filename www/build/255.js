webpackJsonp([255],{

/***/ 1344:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParqueocobroCreatePage; });
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






var ParqueocobroCreatePage = /** @class */ (function () {
    function ParqueocobroCreatePage(storage, msj, translateService, viewCtrl, authService, navCtrl, navParams, _FB, actionSheetCtrl, events) {
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
            nombrefactura: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            nitfactura: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            direccionfactura: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            monto: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            horasdescuento: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            montodescuento: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            horascobradas: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required]
        });
    }
    ParqueocobroCreatePage.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get('username').then(function (value) {
            _this.username = value;
        });
        this.tipo = 'VARIABLE';
    };
    ParqueocobroCreatePage.prototype.aplicartarifa = function (h, m, t) {
        if (t == 1) {
            if (this.tipo == 'UNICA') {
                return this.tarifatt;
            }
            else {
                if (m == 0.0) {
                    return h * this.tarifatt;
                }
                else {
                    if (m <= 0.5) {
                        return (h * this.tarifatt) + (this.tarifatt / 2);
                    }
                    else {
                        return ((h + 1) * this.tarifatt);
                    }
                }
            }
        }
        else {
            if (this.tipo == 'UNICA') {
                return h;
            }
            else {
                if (m == 0.0) {
                    return h;
                }
                else {
                    if (m <= 0.5) {
                        return (h) + (0.5);
                    }
                    else {
                        return ((h + 1));
                    }
                }
            }
        }
    };
    ParqueocobroCreatePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        if (this.navParams.get("record") == null) {
            this.translateService.get('ITEM_CREATE_TITLE').subscribe(function (value) {
                _this.pageTitle = value;
            });
            this.isDisablednit = true;
        }
        else {
            this.pageTitle = "Pago de parqueo";
            this._ID = this.navParams.data.record._id;
            if (this.navParams.data.record.nombrefactura) {
                this.nombrefactura = this.navParams.data.record.nombrefactura;
            }
            else {
                this.nombrefactura = (this.navParams.data.record.nombre).replace("-", " ");
            }
            //   1995,11,17,3,24,0  "December 17, 1995 03:24:00") 2019-05-06T22:26:40.946Z
            if (this.navParams.data.record.tarifa) {
                this.tarifatt = this.navParams.data.record.tarifa;
            }
            else {
                this.tarifatt = 0;
            }
            var uno = (this.navParams.data.record.tentrada).split("T");
            var dos = (uno[0]).split("-");
            var tres = (uno[1]).split(":");
            this.entradat = new Date(Number(dos[0]), Number(dos[1]) - 1, Number(dos[2]), Number(tres[0]), Number(tres[1]));
            this.salidat = new Date();
            //this.horasalida=uno[0] + 'T'+ tres[0] + ':'+ tres[1]+ ":00.000Z"
            var fechaini = (new Date()).toISOString();
            this.horasalida = fechaini.split('T')[0] + 'T' + this.salidat.getHours() + ':' + this.salidat.getMinutes() + ":00.000Z";
            var diff = this.salidat.valueOf() - this.entradat.valueOf();
            this.horascobradas = (diff / 1000 / 60 / 60).toFixed(2); // Convert milliseconds to hours
            var int_part = Math.trunc(this.horascobradas); // returns 3
            var float_part = Number((this.horascobradas - int_part).toFixed(2)); // return 0.2
            this.horascobradas = this.aplicartarifa(int_part, float_part, 2);
            this.nitfactura = this.navParams.data.record.nitfactura;
            this.direccionfactura = this.navParams.data.record.direccionfactura;
            if (this.navParams.data.record.monto) {
                this.monto = this.navParams.data.record.monto;
            }
            else {
                this.monto = this.aplicartarifa(int_part, float_part, 1);
            }
            this.horasdescuento = this.navParams.data.record.horasdescuento;
            this.montodescuento = this.navParams.data.record.montodescuento;
            this.isDisablednit = false;
            this.nombrett = this.navParams.data.record.nombre;
            this.cuitt = this.navParams.data.record.cui;
        }
    };
    ParqueocobroCreatePage.prototype.manageGallery = function () {
        var _this = this;
        var creat = 'Actualiza';
        if (this.navParams.get("record") == null) {
            creat = 'Crea';
        }
        var options = {
            idempresa: this.navParams.data.idempresa,
            nombrefactura: this.form.controls['nombrefactura'].value,
            nitfactura: this.form.controls['nitfactura'].value,
            direccionfactura: this.form.controls['direccionfactura'].value,
            monto: this.form.controls['monto'].value,
            horasdescuento: this.form.controls['horasdescuento'].value,
            horascobradas: this.form.controls['horascobradas'].value,
            montodescuento: this.form.controls['montodescuento'].value,
            estado: 'PagoCancelado',
            tsalida: this.horasalida,
            bitacora: { idempresa: this.navParams.data.idempresa, idafiliado: '', monto: this.username, permiso: creat, accion: creat + ' empresas ' }
        };
        if (this.navParams.get("record") == null) {
            if (options) {
                this.authService.createReg('', options, 'Entradasdpis').then(function (result) {
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
                this.authService.createReg(this._ID, options, 'Entradasdpis').then(function (result) {
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
    ParqueocobroCreatePage.prototype.cancel = function () {
        this.viewCtrl.dismiss();
    };
    ParqueocobroCreatePage.prototype.done = function () {
        if (!this.form.valid) {
            return;
        }
        //this.viewCtrl.dismiss(this.form.value);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('fileInput'),
        __metadata("design:type", Object)
    ], ParqueocobroCreatePage.prototype, "fileInput", void 0);
    ParqueocobroCreatePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-parqueocobro-create',template:/*ion-inline-start:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\BUSES\parqueocobro-create\parqueocobro-create.html"*/'<ion-header>\n    <ion-navbar>\n      <ion-title>{{pageTitle}}</ion-title>\n    \n      <ion-buttons end>   \n          <button (click)="cancel()" icon-only ion-button padding-right>\n              <ion-icon name="md-close"></ion-icon>\n            </button>\n          <button  (click)="manageGallery()"  [disabled]="!form.valid" icon-only ion-button padding-right>\n              <ion-icon name="done-all"></ion-icon>\n            </button>\n      </ion-buttons>\n    </ion-navbar>\n  </ion-header>\n  <ion-content padding>\n    <form\n      [formGroup]="form"\n       text-wrap>\n      <ion-list>\n        \n          <ion-item text-wrap>\n                   \n                  <h2>Nombre: {{nombrett}} </h2>   \n                  <p>Cui: {{cuitt}} </p>\n                  <p>Tarifa: {{tarifatt}} </p>\n                  \n            </ion-item>\n\n           <ion-item margin-bottom>\n              <ion-label>Nombre factura</ion-label>\n              <ion-input   \n                 type="text"\n                 [(ngModel)]="nombrefactura"\n                 [formControl]="form.controls[\'nombrefactura\']"></ion-input>\n           </ion-item>\n           <ion-item class="invalid" *ngIf="!form.controls.nombrefactura.valid && (form.controls.nombrefactura.dirty || form.controls.nombrefactura.touched)" text-wrap>\n             <ion-icon name="warning"></ion-icon>\n             {{ \'NOMBRET\' | translate }}\n            </ion-item>\n      \n             \n          <ion-item margin-bottom>\n             <ion-label>Nit factura</ion-label>\n             <ion-input\n                type="text"\n                [(ngModel)]="nitfactura"\n                [formControl]="form.controls[\'nitfactura\']"></ion-input>\n          </ion-item>\n          <ion-item class="invalid" *ngIf="!form.controls.nitfactura.valid && (form.controls.nitfactura.dirty || form.controls.nitfactura.touched)" text-wrap>\n            <ion-icon name="warning"></ion-icon>\n           Inrese un nit valido\n           </ion-item>\n          <ion-item margin-bottom>\n              <ion-label>Direccion factura</ion-label>\n              <ion-input\n                 type="text"\n                 [(ngModel)]="direccionfactura"\n                 [formControl]="form.controls[\'direccionfactura\']"></ion-input>\n           </ion-item>\n           <ion-item class="invalid" *ngIf="!form.controls.direccionfactura.valid && (form.controls.direccionfactura.dirty || form.controls.direccionfactura.touched)" text-wrap>\n            <ion-icon name="warning"></ion-icon>\n            Ingrese una direccion valida\n           </ion-item>\n           <ion-item margin-bottom>\n              <ion-label>Monto</ion-label>\n              <ion-input [disabled]="true"\n                 type="text"\n                 [(ngModel)]="monto"\n                 [formControl]="form.controls[\'monto\']"  ></ion-input>\n           </ion-item>\n           <ion-item margin-bottom>\n              <ion-label>Horas a cobrar</ion-label>\n              <ion-input [disabled]="true"\n                 type="number" step="0.01"\n                 [(ngModel)]="horascobradas"\n                 [formControl]="form.controls[\'horascobradas\']"  ></ion-input>\n           </ion-item>\n\n\n           <ion-item margin-bottom>\n              <ion-label>horasdescuento</ion-label>\n              <ion-input\n                 type="text"\n                 [(ngModel)]="horasdescuento"\n                 [formControl]="form.controls[\'horasdescuento\']"></ion-input>\n           </ion-item>\n           <ion-item margin-bottom>\n              <ion-label>montodescuento</ion-label>\n              <ion-input\n                 type="text"\n                 [(ngModel)]="montodescuento"\n                 [formControl]="form.controls[\'montodescuento\']"></ion-input>\n           </ion-item>\n          \n       </ion-list>\n\n    </form>  \n  </ion-content>   '/*ion-inline-end:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\BUSES\parqueocobro-create\parqueocobro-create.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3__providers__["d" /* NotificationProvider */], __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["F" /* ViewController */], __WEBPACK_IMPORTED_MODULE_3__providers__["a" /* Auth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */]])
    ], ParqueocobroCreatePage);
    return ParqueocobroCreatePage;
}());

//# sourceMappingURL=parqueocobro-create.js.map

/***/ }),

/***/ 904:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParqueocobroCreatePageModule", function() { return ParqueocobroCreatePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__parqueocobro_create__ = __webpack_require__(1344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ParqueocobroCreatePageModule = /** @class */ (function () {
    function ParqueocobroCreatePageModule() {
    }
    ParqueocobroCreatePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__parqueocobro_create__["a" /* ParqueocobroCreatePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__parqueocobro_create__["a" /* ParqueocobroCreatePage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], ParqueocobroCreatePageModule);
    return ParqueocobroCreatePageModule;
}());

//# sourceMappingURL=parqueocobro-create.module.js.map

/***/ })

});
//# sourceMappingURL=255.js.map