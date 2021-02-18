webpackJsonp([61],{

/***/ 1127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TipounidadCreatePageModule", function() { return TipounidadCreatePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tipounidad_create__ = __webpack_require__(1583);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var TipounidadCreatePageModule = /** @class */ (function () {
    function TipounidadCreatePageModule() {
    }
    TipounidadCreatePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__tipounidad_create__["a" /* TipounidadCreatePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__tipounidad_create__["a" /* TipounidadCreatePage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], TipounidadCreatePageModule);
    return TipounidadCreatePageModule;
}());

//# sourceMappingURL=tipounidad-create.module.js.map

/***/ }),

/***/ 1583:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TipounidadCreatePage; });
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






var TipounidadCreatePage = /** @class */ (function () {
    function TipounidadCreatePage(storage, msj, translateService, viewCtrl, authService, navCtrl, navParams, _FB, actionSheetCtrl, events) {
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
            abreviatura: [''],
            msg: [''],
            estado: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            estado2: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required]
        });
        this.authService.getReg('todos', 'departamentos').then(function (result) {
            _this.vgrupo = result;
        }, function (err) {
            _this.msj.showError3('Error', err.error);
        });
    }
    TipounidadCreatePage.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get('username').then(function (value) {
            _this.username = value;
        });
    };
    TipounidadCreatePage.prototype.ionViewDidLoad = function () {
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
            this.estado = this.navParams.data.record.estado;
            this.estado2 = this.navParams.data.record.estado2;
            this.msg = this.navParams.data.record.msg;
            this.iddepartamento = this.navParams.data.record.iddepartamento.id + ',' + this.navParams.data.record.iddepartamento.nombre;
            this.iddepartamento2 = this.iddepartamento.split(',');
            this.abreviatura = this.navParams.data.record.abreviatura;
            this.translateService.get('ITEM_UPDATE_TITLE').subscribe(function (value) {
                _this.pageTitle = value;
            });
        }
    };
    TipounidadCreatePage.prototype.manageGallery = function () {
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
            estado: this.form.controls['estado'].value,
            estado2: this.form.controls['estado2'].value,
            msg: this.form.controls['msg'].value,
            bitacora: { idempresa: this.idempresa, idafiliado: '', email: this.username, permiso: creat, accion: creat + ' tipo unidad ' }
        };
        if (this.navParams.get("record") == null) {
            if (options) {
                this.authService.createReg('', options, 'tipounidads').then(function (result) {
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
                this.authService.createReg(this._ID, options, 'tipounidads').then(function (result) {
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
    TipounidadCreatePage.prototype.onSelectChange = function (selectedValue) {
        // this.iddepartamento=aa[0]
        this.iddepartamento2 = selectedValue.split(',');
    };
    TipounidadCreatePage.prototype.cancel = function () {
        this.viewCtrl.dismiss();
    };
    TipounidadCreatePage.prototype.done = function () {
        if (!this.form.valid) {
            return;
        }
        //this.viewCtrl.dismiss(this.form.value);
    };
    TipounidadCreatePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-tipounidad-create',template:/*ion-inline-start:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\USAC\unidadacademica\tipounidad-create\tipounidad-create.html"*/'<ion-header>\n        <ion-navbar>\n          <ion-title>{{pageTitle}}</ion-title>\n          \n          <ion-buttons end>\n              <button (click)="cancel()" icon-only ion-button padding-right>\n                  <ion-icon name="md-close"></ion-icon>\n                </button>\n              <button  (click)="manageGallery()"  [disabled]="!form.valid" icon-only ion-button padding-right>\n                  <ion-icon name="done-all"></ion-icon>\n                </button>\n          </ion-buttons>\n        </ion-navbar>\n      </ion-header>\n      <ion-content padding>\n        <form     [formGroup]="form"  text-wrap> \n          <ion-list>\n            \n            <ion-item margin-bottom>\n              <ion-label>Codigo</ion-label>\n              <ion-input\n                 type="Number"\n                 [(ngModel)]="codigo" [formControl]="form.controls[\'codigo\']"\n                ></ion-input>\n           </ion-item>\n           <ion-item class="invalid" *ngIf="!form.controls.codigo.valid && (form.controls.codigo.dirty || form.controls.codigo.touched)" text-wrap>\n             <ion-icon name="warning"></ion-icon>\n             {{ \'CODIGOT\' | translate }}\n            </ion-item>\n      \n              <ion-item margin-bottom>\n                 <ion-label>Nombre</ion-label>\n                 <ion-input\n                    type="text"\n                    [(ngModel)]="nombre" [formControl]="form.controls[\'nombre\']"\n                   ></ion-input>\n              </ion-item>\n              <ion-item class="invalid" *ngIf="!form.controls.nombre.valid && (form.controls.nombre.dirty || form.controls.nombre.touched)" text-wrap>\n                <ion-icon name="warning"></ion-icon>\n                {{ \'NOMBRET\' | translate }}\n               </ion-item>\n      \n                  <ion-item margin-bottom text-wrap>\n                  <ion-label >Departamento</ion-label>\n      \n                <ion-select (ionChange)="onSelectChange($event)" [(ngModel)]="iddepartamento" [formControl]="form.controls[\'iddepartamento\']">\n                    <ion-option text-wrap *ngFor="let item of vgrupo" [value]="item._id+\',\'+item.nombre">{{item.nombre}}</ion-option>\n                </ion-select>  \n      \n      \n             </ion-item>\n             <ion-item class="invalid" *ngIf="!form.controls.iddepartamento.valid && (form.controls.iddepartamento.dirty || form.controls.iddepartamento.touched)" text-wrap>\n               <ion-icon name="warning"></ion-icon>\n              Ingrese un tipo de departamento valido\n              </ion-item>\n      \n\n              <ion-item margin-bottom>\n                  <ion-label>Abreviatura</ion-label>\n                  <ion-input\n                     type="text"\n                     [(ngModel)]="abreviatura" [formControl]="form.controls[\'abreviatura\']"\n                    ></ion-input>\n               </ion-item>\n               <ion-item class="invalid" *ngIf="!form.controls.abreviatura.valid && (form.controls.abreviatura.dirty || form.controls.abreviatura.touched)" text-wrap>\n                 <ion-icon name="warning"></ion-icon>\n                 Ingrese una Abreviatura valida\n                </ion-item>\n\n                <ion-item margin-bottom>\n                  <ion-label>Estado</ion-label>\n                  <ion-select [(ngModel)]="estado" [formControl]="form.controls[\'estado\']">\n                    <ion-option value="Activo">Activo</ion-option>\n                    <ion-option value="Inactivo">Inactivo</ion-option>\n                  </ion-select>\n               </ion-item>\n               <ion-item class="invalid" *ngIf="!form.controls.estado.valid && (form.controls.estado.dirty || form.controls.estado.touched)" text-wrap>\n                <ion-icon name="warning"></ion-icon>\n                {{ \'ESTADOT\' | translate }}\n               </ion-item>\n\n               <ion-item margin-bottom>\n                <ion-label>Aplica a este periodo</ion-label>\n                <ion-select [(ngModel)]="estado2" [formControl]="form.controls[\'estado2\']">\n                  <ion-option value="Activo">Activo</ion-option>\n                  <ion-option value="Inactivo">Inactivo</ion-option>\n                </ion-select>\n             </ion-item>\n             <ion-item class="invalid" *ngIf="!form.controls.estado2.valid && (form.controls.estado2.dirty || form.controls.estado2.touched)" text-wrap>\n              <ion-icon name="warning"></ion-icon>\n              Ingrese un estado si aplica a este periodo valido\n             </ion-item>\n\n\n               <ion-item margin-bottom>\n                <ion-label>Mensaje cuando una unidad no este activa</ion-label>\n                <ion-textarea rows=\'4\'\n                   type="text"\n                   [(ngModel)]="msg" [formControl]="form.controls[\'msg\']"\n                  ></ion-textarea>\n             </ion-item>\n            \n           </ion-list>\n        </form>\n      \n      \n      </ion-content>\n    '/*ion-inline-end:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\USAC\unidadacademica\tipounidad-create\tipounidad-create.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3__providers__["d" /* NotificationProvider */], __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["F" /* ViewController */], __WEBPACK_IMPORTED_MODULE_3__providers__["a" /* Auth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */]])
    ], TipounidadCreatePage);
    return TipounidadCreatePage;
}());

//# sourceMappingURL=tipounidad-create.js.map

/***/ })

});
//# sourceMappingURL=61.js.map