webpackJsonp([107],{

/***/ 1075:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tipounidad2CreatePageModule", function() { return Tipounidad2CreatePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tipounidad2_create__ = __webpack_require__(1531);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var Tipounidad2CreatePageModule = /** @class */ (function () {
    function Tipounidad2CreatePageModule() {
    }
    Tipounidad2CreatePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__tipounidad2_create__["a" /* Tipounidad2CreatePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__tipounidad2_create__["a" /* Tipounidad2CreatePage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], Tipounidad2CreatePageModule);
    return Tipounidad2CreatePageModule;
}());

//# sourceMappingURL=tipounidad2-create.module.js.map

/***/ }),

/***/ 1531:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Tipounidad2CreatePage; });
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






var Tipounidad2CreatePage = /** @class */ (function () {
    function Tipounidad2CreatePage(storage, msj, translateService, viewCtrl, authService, navCtrl, navParams, _FB, actionSheetCtrl, events) {
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
        this.iddepartamento2 = [];
        this.vgrupo = [];
        this.translateService.get('APPX').subscribe(function (value) {
            _this.idempresa = value;
        });
        this.form = this._FB.group({
            nombre: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            codigo: [''],
            iddepartamento: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            abreviatura: ['']
        });
        this.authService.getReg('todos', 'departamentos').then(function (result) {
            _this.vgrupo = result;
        }, function (err) {
            _this.msj.showError3('Error', err.error);
        });
    }
    Tipounidad2CreatePage.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get('username').then(function (value) {
            _this.username = value;
        });
    };
    Tipounidad2CreatePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        if (this.navParams.get("record") == null) {
            this.translateService.get('ITEM_CREATE_TITLE').subscribe(function (value) {
                _this.pageTitle = value;
            });
        }
        else {
            this._ID = this.navParams.data.record._id;
            this.nombre = this.navParams.data.record.nombre;
            this.codigo = this.navParams.data.record.codigo;
            this.iddepartamento = this.navParams.data.record.iddepartamento.id._id + ',' + this.navParams.data.record.iddepartamento.id.nombre;
            this.iddepartamento2 = this.iddepartamento.split(',');
            this.abreviatura = this.navParams.data.record.abreviatura;
            this.translateService.get('ITEM_UPDATE_TITLE').subscribe(function (value) {
                _this.pageTitle = value;
            });
        }
    };
    Tipounidad2CreatePage.prototype.manageGallery = function () {
        var _this = this;
        var creat = 'Actualiza';
        if (this.navParams.get("record") == null) {
            creat = 'Crea';
        }
        var options = {
            nombre: this.form.controls['nombre'].value,
            codigo: this.form.controls['codigo'].value,
            iddepartamento: { id: this.iddepartamento2[0], nombre: this.iddepartamento2[1] },
            abreviatura: this.form.controls['abreviatura'].value,
            bitacora: { idempresa: this.idempresa, idafiliado: '', email: this.username, permiso: creat, accion: creat + ' tipo unidad ' }
        };
        if (this.navParams.get("record") == null) {
            if (options) {
                this.authService.createReg('', options, 'tipounidad2s').then(function (result) {
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
                this.authService.createReg(this._ID, options, 'tipounidad2s').then(function (result) {
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
    Tipounidad2CreatePage.prototype.onSelectChange = function (selectedValue) {
        // this.iddepartamento=aa[0]
        this.iddepartamento2 = selectedValue.split(',');
    };
    Tipounidad2CreatePage.prototype.cancel = function () {
        this.viewCtrl.dismiss();
    };
    Tipounidad2CreatePage.prototype.done = function () {
        if (!this.form.valid) {
            return;
        }
        //this.viewCtrl.dismiss(this.form.value);
    };
    Tipounidad2CreatePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-tipounidad2-create',template:/*ion-inline-start:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\PAP\unidadacademica2\tipounidad2-create\tipounidad2-create.html"*/'<ion-header>\n        <ion-navbar>\n          <ion-title>{{pageTitle}}</ion-title>\n          \n          <ion-buttons end>\n              <button (click)="cancel()" icon-only ion-button padding-right>\n                  <ion-icon name="md-close"></ion-icon>\n                </button>\n              <button  (click)="manageGallery()"  [disabled]="!form.valid" icon-only ion-button padding-right>\n                  <ion-icon name="done-all"></ion-icon>\n                </button>\n          </ion-buttons>\n        </ion-navbar>\n      </ion-header>\n      <ion-content padding>\n        <form     [formGroup]="form"   text-wrap> \n          <ion-list>\n            \n            <ion-item margin-bottom>\n              <ion-label>Codigo</ion-label>\n              <ion-input\n                 type="Number"\n                 [(ngModel)]="codigo" [formControl]="form.controls[\'codigo\']"\n                ></ion-input>\n           </ion-item>\n           <ion-item class="invalid" *ngIf="!form.controls.codigo.valid && (form.controls.codigo.dirty || form.controls.codigo.touched)" text-wrap>\n             <ion-icon name="warning"></ion-icon>\n             {{ \'CODIGOT\' | translate }}\n            </ion-item>\n      \n              <ion-item margin-bottom>\n                 <ion-label>Nombre</ion-label>\n                 <ion-input\n                    type="text"\n                    [(ngModel)]="nombre" [formControl]="form.controls[\'nombre\']"\n                   ></ion-input>\n              </ion-item>\n              <ion-item class="invalid" *ngIf="!form.controls.nombre.valid && (form.controls.nombre.dirty || form.controls.nombre.touched)" text-wrap>\n                <ion-icon name="warning"></ion-icon>\n                {{ \'NOMBRET\' | translate }}\n               </ion-item>\n      \n                  <ion-item margin-bottom text-wrap>\n                  <ion-label >Departamento</ion-label>\n      \n                <ion-select (ionChange)="onSelectChange($event)" [(ngModel)]="iddepartamento" [formControl]="form.controls[\'iddepartamento\']">\n                    <ion-option text-wrap *ngFor="let item of vgrupo" [value]="item._id+\',\'+item.nombre">{{item.nombre}}</ion-option>\n                </ion-select>  \n      \n      \n             </ion-item>\n             <ion-item class="invalid" *ngIf="!form.controls.iddepartamento.valid && (form.controls.iddepartamento.dirty || form.controls.iddepartamento.touched)" text-wrap>\n               <ion-icon name="warning"></ion-icon>\n              Ingrese un tipo de departamento valido\n              </ion-item>\n      \n\n              <ion-item margin-bottom>\n                  <ion-label>Abreviatura</ion-label>\n                  <ion-input\n                     type="text"\n                     [(ngModel)]="abreviatura" [formControl]="form.controls[\'abreviatura\']"\n                    ></ion-input>\n               </ion-item>\n               <ion-item class="invalid" *ngIf="!form.controls.abreviatura.valid && (form.controls.abreviatura.dirty || form.controls.abreviatura.touched)" text-wrap>\n                 <ion-icon name="warning"></ion-icon>\n                 Ingrese una Abreviatura valida\n                </ion-item>\n            \n           </ion-list>\n        </form>\n      \n      \n      </ion-content>\n    '/*ion-inline-end:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\PAP\unidadacademica2\tipounidad2-create\tipounidad2-create.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3__providers__["d" /* NotificationProvider */], __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["F" /* ViewController */], __WEBPACK_IMPORTED_MODULE_3__providers__["a" /* Auth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */]])
    ], Tipounidad2CreatePage);
    return Tipounidad2CreatePage;
}());

//# sourceMappingURL=tipounidad2-create.js.map

/***/ })

});
//# sourceMappingURL=107.js.map