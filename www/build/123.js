webpackJsonp([123],{

/***/ 1054:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComprasaldoCreatePageModule", function() { return ComprasaldoCreatePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__comprasaldo_create__ = __webpack_require__(1510);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ComprasaldoCreatePageModule = /** @class */ (function () {
    function ComprasaldoCreatePageModule() {
    }
    ComprasaldoCreatePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__comprasaldo_create__["a" /* ComprasaldoCreatePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__comprasaldo_create__["a" /* ComprasaldoCreatePage */]),
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], ComprasaldoCreatePageModule);
    return ComprasaldoCreatePageModule;
}());

//# sourceMappingURL=comprasaldo-create.module.js.map

/***/ }),

/***/ 1510:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComprasaldoCreatePage; });
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






var ComprasaldoCreatePage = /** @class */ (function () {
    function ComprasaldoCreatePage(storage, loadingCtrl, msj, translateService, viewCtrl, authService, navCtrl, navParams, _FB, actionSheetCtrl, events) {
        var _this = this;
        this.storage = storage;
        this.loadingCtrl = loadingCtrl;
        this.msj = msj;
        this.translateService = translateService;
        this.viewCtrl = viewCtrl;
        this.authService = authService;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._FB = _FB;
        this.actionSheetCtrl = actionSheetCtrl;
        this.events = events;
        this.items = [];
        this.tiposus = [];
        this.username = "";
        this.vtarifa = [];
        this.translateService.get('APPX').subscribe(function (value) {
            _this.idempresa = value;
            _this.authService.getReg('TARIFA COMPRA SALDO' + '/' + _this.idempresa + '/catalogo', 'dcatalogos').then(function (result) {
                _this.vtarifa = result;
            }, function (err) {
                _this.msj.showError3('Error', err.error);
            });
        });
        // Define form validation - VERY basic!
        this.form = this._FB.group({
            cui: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            monto: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
        });
    }
    ComprasaldoCreatePage.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get('username').then(function (value) {
            _this.username = value;
        });
        this.storage.get('tiposus').then(function (value) {
            _this.tiposus = value.split(',');
            _this.cuitt = _this.tiposus[2];
            _this.cui = _this.tiposus[2];
            _this.idsus2 = _this.tiposus[3];
            _this.idnombre2 = _this.tiposus[4];
            if (_this.tiposus[0] == 'Distribuidor') {
                _this.isDisablednit = true;
            }
            else {
                _this.isDisablednit = false;
            }
            _this.focused('a');
        });
    };
    ComprasaldoCreatePage.prototype.ionViewDidLoad = function () {
        this.pageTitle = "Compra de saldo";
        if (this.navParams.get("record") == null) {
            this.isDisablednit = true;
        }
        else {
            this._ID = this.navParams.data.record._id;
            this.idsuscriptor = this.navParams.data.record.idsuscriptor._id;
            this._IDSUSCRIPTOR = this.navParams.data.record.idsuscriptor._id;
            this.nombre = this.navParams.data.record.nombre;
            this.monto = this.navParams.data.record.monto;
            this.isDisablednit = false;
        }
    };
    ComprasaldoCreatePage.prototype.manageGallery = function () {
        var _this = this;
        var creat = 'Actualiza';
        if (this.navParams.get("record") == null) {
            creat = 'Crea';
        }
        var options = {
            idempresa: this.idempresa,
            idsuscriptor: { id: this._IDSUSCRIPTOR, nombre: this.nombre },
            nombre: this.nombre,
            monto: this.form.controls['monto'].value,
            url: '',
            estado: 'aprobado',
            bitacora: { idempresa: this.idempresa, idafiliado: '', email: this.username, permiso: creat, accion: creat + ' empresas ' },
            idsuscriptor2: { id: this.idsus2, nombre: this.idnombre2 },
        };
        if (this.navParams.get("record") == null) {
            if (options) {
                this.authService.createReg('', options, 'comprasaldos').then(function (result) {
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
                this.authService.createReg(this._ID, options, 'comprasaldos').then(function (result) {
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
    ComprasaldoCreatePage.prototype.cancel = function () {
        this.viewCtrl.dismiss();
    };
    ComprasaldoCreatePage.prototype.done = function () {
        if (!this.form.valid) {
            return;
        }
        //this.viewCtrl.dismiss(this.form.value);
    };
    ComprasaldoCreatePage.prototype.focused = function (selectedValue) {
        var _this = this;
        if ((this.cui) && (this.cui != '')) {
            var loading_1 = this.loadingCtrl.create({
                spinner: 'bubbles',
                content: "Espere un momento,  Buscando información ......"
            });
            loading_1.present();
            this.items = [];
            this.authService.getReg(this.cui + '/' + 'persona/' + this.idempresa, 'personals').then(function (data) {
                // this.msj.showError3('Resultado','Proceso OV concluido, revisa tus datos para validar información ');
                _this.nombre = data[0].nombre;
                _this.idsuscriptor = data[0]._id;
                _this._IDSUSCRIPTOR = data[0]._id;
                _this.items = data;
                loading_1.dismiss();
            }, function (err) {
                _this.msj.showError3('Resultado', 'No CUI invalido ');
                _this.cui = '';
                _this.items = [];
                loading_1.dismiss();
            });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('fileInput'),
        __metadata("design:type", Object)
    ], ComprasaldoCreatePage.prototype, "fileInput", void 0);
    ComprasaldoCreatePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-comprasaldo-create',template:/*ion-inline-start:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\GESTIONSALDO\comprasaldo-create\comprasaldo-create.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>{{pageTitle}}</ion-title>\n   \n    <ion-buttons end>\n      \n        <button (click)="cancel()" icon-only ion-button padding-right>\n            <ion-icon name="md-close"></ion-icon>\n          </button>\n        <button  (click)="manageGallery()"  [disabled]="!form.valid" icon-only ion-button padding-right>\n            <ion-icon name="done-all"></ion-icon>\n          </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <form\n    [formGroup]="form"  text-wrap>\n    <ion-list>\n\n      <ion-item margin-bottom text-wrap>\n        <ion-label class="my-label18" color="secondary2"  stacked>Ingrese un CUI:</ion-label>\n        <ion-input (focusout)="focused($event)"  [disabled]="!(isDisablednit)"\n        type="number"   [(ngModel)]="cui" [formControl]="form.controls[\'cui\']"\n          ></ion-input>\n     </ion-item>\n     <ion-item class="invalid" *ngIf="!form.controls.cui.valid && (form.controls.cui.dirty || form.controls.cui.touched)" text-wrap>\n        <ion-icon name="warning"></ion-icon>\n        Ingrese un CUI valido\n       </ion-item>\n\n       <ion-item   *ngFor="let item of items " text-wrap>\n\n\n          <h2>Nombre: {{item.nombre}}</h2>\n\n\n\n  </ion-item>\n\n  <ion-item margin-bottom>\n    <ion-label>Monto</ion-label>\n    <ion-select   [(ngModel)]="monto" [formControl]="form.controls[\'monto\']" >\n       <ion-option text-wrap *ngFor="let item of vtarifa"  [value]="item.nombre">{{item.nombre}}</ion-option>\n   </ion-select>  \n\n    \n </ion-item>\n <ion-item class="invalid" *ngIf="!form.controls.monto.valid && (form.controls.monto.dirty || form.controls.monto.touched)" text-wrap>\n   <ion-icon name="warning"></ion-icon>\n   {{ \'MONTOT\' | translate }} \n  </ion-item>\n\n\n\n      \n       \n         \n      \n     </ion-list>\n  </form>\n\n\n</ion-content>\n'/*ion-inline-end:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\GESTIONSALDO\comprasaldo-create\comprasaldo-create.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__providers__["d" /* NotificationProvider */], __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["F" /* ViewController */], __WEBPACK_IMPORTED_MODULE_3__providers__["a" /* Auth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */]])
    ], ComprasaldoCreatePage);
    return ComprasaldoCreatePage;
}());

//# sourceMappingURL=comprasaldo-create.js.map

/***/ })

});
//# sourceMappingURL=123.js.map