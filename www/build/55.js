webpackJsonp([55],{

/***/ 1135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnidadmateriaCreatePageModule", function() { return UnidadmateriaCreatePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__unidadmateria_create__ = __webpack_require__(1591);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var UnidadmateriaCreatePageModule = /** @class */ (function () {
    function UnidadmateriaCreatePageModule() {
    }
    UnidadmateriaCreatePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__unidadmateria_create__["a" /* UnidadmateriaCreatePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__unidadmateria_create__["a" /* UnidadmateriaCreatePage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], UnidadmateriaCreatePageModule);
    return UnidadmateriaCreatePageModule;
}());

//# sourceMappingURL=unidadmateria-create.module.js.map

/***/ }),

/***/ 1591:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UnidadmateriaCreatePage; });
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






var UnidadmateriaCreatePage = /** @class */ (function () {
    function UnidadmateriaCreatePage(storage, msj, translateService, viewCtrl, authService, navCtrl, navParams, _FB, actionSheetCtrl, events) {
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
        this.createdCode = null;
        this.scannedCode = null;
        this.translateService.get('APPX').subscribe(function (value) {
            _this.idempresa = value;
        });
        this.form = this._FB.group({
            lenguaje: [''],
            biologia: [''],
            matematica: [''],
            fisica: [''],
            quimica: ['']
        });
    }
    UnidadmateriaCreatePage.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get('username').then(function (value) {
            _this.username = value;
        });
    };
    UnidadmateriaCreatePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.idtipo = this.navParams.data.record2.idtipo;
        this.idtipo2 = this.navParams.data.record2.idtipo2;
        this.idnombre = this.navParams.data.record2.idnombre;
        if (this.navParams.get("record") == null) {
            this.limpia('false');
            this.translateService.get('ITEM_CREATE_TITLE').subscribe(function (value) {
                _this.pageTitle = value;
            });
            this.isDisablednit = true;
        }
        else {
            this.limpia('false');
            this._ID = this.navParams.data.record[0]._id;
            this.lenguaje = this.navParams.data.record[0].lenguaje;
            this.matematica = this.navParams.data.record[0].matematica;
            this.fisica = this.navParams.data.record[0].fisica;
            this.biologia = this.navParams.data.record[0].biologia;
            this.quimica = this.navParams.data.record[0].quimica;
            this.isDisablednit = false;
            this.translateService.get('ITEM_UPDATE_TITLE').subscribe(function (value) {
                _this.pageTitle = value;
            });
        }
    };
    UnidadmateriaCreatePage.prototype.limpia = function (op) {
        this.form.controls['lenguaje'].setValue(op);
        this.form.controls['matematica'].setValue(op);
        this.form.controls['fisica'].setValue(op);
        this.form.controls['biologia'].setValue(op);
        this.form.controls['quimica'].setValue(op);
    };
    UnidadmateriaCreatePage.prototype.manageGallery = function () {
        var _this = this;
        var creat = 'Actualiza';
        if (this.navParams.get("record") == null) {
            creat = 'Crea';
        }
        var options = {
            idtipounidad: this.idtipo,
            idunidadacademica: this.idtipo2,
            lenguaje: this.form.controls['lenguaje'].value,
            matematica: this.form.controls['matematica'].value,
            fisica: this.form.controls['fisica'].value,
            biologia: this.form.controls['biologia'].value,
            quimica: this.form.controls['quimica'].value,
            bitacora: { idempresa: this.idempresa, idafiliado: '', email: this.username, permiso: creat, accion: creat + ' facultad materias ' }
        };
        if (this.navParams.get("record") == null) {
            if (options) {
                this.authService.createReg('', options, 'facultadmaterias').then(function (result) {
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
                this.authService.createReg(this._ID, options, 'facultadmaterias').then(function (result) {
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
    UnidadmateriaCreatePage.prototype.stringify = function (country) {
        return JSON.stringify(country);
    };
    UnidadmateriaCreatePage.prototype.cancel = function () {
        this.viewCtrl.dismiss();
    };
    UnidadmateriaCreatePage.prototype.done = function () {
        if (!this.form.valid) {
            return;
        }
        //this.viewCtrl.dismiss(this.form.value);
    };
    UnidadmateriaCreatePage.prototype.optionsFn = function (item) {
        console.log(item);
    };
    UnidadmateriaCreatePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-unidadmateria-create',template:/*ion-inline-start:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\USAC\unidadacademica\unidadmateria-create\unidadmateria-create.html"*/'<ion-header>\n    <ion-navbar>\n      <ion-title>{{pageTitle}}</ion-title>\n      \n      <ion-buttons end>\n          <button (click)="cancel()" icon-only ion-button padding-right>\n              <ion-icon name="md-close"></ion-icon>\n            </button>\n          <button  (click)="manageGallery()"  [disabled]="!form.valid" icon-only ion-button padding-right>\n              <ion-icon name="done-all"></ion-icon>\n            </button>\n      </ion-buttons>\n    </ion-navbar>\n  </ion-header>\n  <ion-content padding>\n    <form     [formGroup]="form"    text-wrap>\n      <ion-list>\n        \n       \n  \n           <ion-item margin-bottom>\n            <ion-label>Lenguaje</ion-label>\n            <ion-checkbox  color="verdex"   [(ngModel)]="lenguaje" [formControl]="form.controls[\'lenguaje\']"></ion-checkbox>\n\n         </ion-item>\n         \n          \n         <ion-item margin-bottom>\n            <ion-label>Matematica</ion-label>\n            <ion-checkbox   color="amarillox" [(ngModel)]="matematica" [formControl]="form.controls[\'matematica\']"></ion-checkbox>\n         </ion-item>  \n\n         <ion-item margin-bottom>\n            <ion-label>Fisica</ion-label>\n            <ion-checkbox  color="danger" [(ngModel)]="fisica" [formControl]="form.controls[\'fisica\']"></ion-checkbox>\n            \n         </ion-item>\n\n         <ion-item margin-bottom>\n            <ion-label>Biologia</ion-label>\n            <ion-checkbox  color="secondary" [(ngModel)]="biologia" [formControl]="form.controls[\'biologia\']"></ion-checkbox>\n         </ion-item>\n           \n         \n         <ion-item margin-bottom>\n            <ion-label>Quimica</ion-label>\n            <ion-checkbox color="dark"  [(ngModel)]="quimica" [formControl]="form.controls[\'quimica\']"></ion-checkbox>\n         </ion-item>  \n\n       </ion-list>\n       \n       \n    </form>\n  \n   \n  \n  </ion-content>'/*ion-inline-end:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\USAC\unidadacademica\unidadmateria-create\unidadmateria-create.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3__providers__["d" /* NotificationProvider */], __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["F" /* ViewController */], __WEBPACK_IMPORTED_MODULE_3__providers__["a" /* Auth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */]])
    ], UnidadmateriaCreatePage);
    return UnidadmateriaCreatePage;
}());

//# sourceMappingURL=unidadmateria-create.js.map

/***/ })

});
//# sourceMappingURL=55.js.map