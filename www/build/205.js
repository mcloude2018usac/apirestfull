webpackJsonp([205],{

/***/ 1394:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Unidadacademica3CreatePage; });
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






var Unidadacademica3CreatePage = /** @class */ (function () {
    function Unidadacademica3CreatePage(storage, msj, translateService, viewCtrl, authService, navCtrl, navParams, _FB, actionSheetCtrl, events) {
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
        this.idtipo = "";
        this.idtiponombre = "";
        this.vgrupo = [];
        this.vtipogrupo = [];
        this.vtipocurso = [];
        this.translateService.get('APPX').subscribe(function (value) {
            _this.idempresa = value;
        });
        this.form = this._FB.group({
            nombre: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            ididioma: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            idtipocurso: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            idtipogrupo: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            codigo: [''],
            estado: [''],
            aest: [''],
            aext2: [''],
            atrab: [''],
            ahijotrab1: [''],
            ahijotrab2: [''],
            apoblacion: [''],
            aadol: [''],
            aext: ['']
        });
    }
    Unidadacademica3CreatePage.prototype.limpia = function (op) {
        this.form.controls['aest'].setValue(op);
        this.form.controls['aext2'].setValue(op);
        this.form.controls['atrab'].setValue(op);
        this.form.controls['ahijotrab1'].setValue(op);
        this.form.controls['ahijotrab2'].setValue(op);
        this.form.controls['apoblacion'].setValue(op);
        this.form.controls['aadol'].setValue(op);
        this.form.controls['aext'].setValue(op);
    };
    Unidadacademica3CreatePage.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get('username').then(function (value) {
            _this.username = value;
        });
    };
    Unidadacademica3CreatePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.idtipo = this.navParams.data.record2.idtipo;
        this.idtiponombre = this.navParams.data.record2.ntipo;
        this.authService.getReg(this.idtipo + '/' + this.idtipo, 'unidadidioma3s').then(function (result) {
            _this.vgrupo = result;
        }, function (err) {
            _this.msj.showError3('Error', err.error);
        });
        this.authService.getReg(this.idtipo + '/' + this.idtipo, 'unidadtipocurso3s').then(function (result) {
            _this.vtipocurso = result;
        }, function (err) {
            _this.msj.showError3('Error', err.error);
        });
        this.authService.getReg(this.idtipo + '/' + this.idtipo, 'unidadtipogrupo3s').then(function (result) {
            _this.vtipogrupo = result;
        }, function (err) {
            _this.msj.showError3('Error', err.error);
        });
        this.limpia('false');
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
            this.ididioma = this.navParams.data.record.ididioma._id; //+','+this.navParams.data.record.ididioma.nombre;
            this.idtipocurso = this.navParams.data.record.idtipocurso._id; //+','+this.navParams.data.record.ididioma.nombre;
            this.idtipogrupo = this.navParams.data.record.idtipogrupo._id; //+','+this.navParams.data.record.ididioma.nombre;
            this.ididiomatt = this.ididioma;
            this.idtipocursott = this.idtipocurso;
            this.idtipogrupott = this.idtipogrupo;
            this.form.controls['aest'].setValue(this.navParams.data.record.aest);
            this.form.controls['aext2'].setValue(this.navParams.data.record.aext2);
            this.form.controls['atrab'].setValue(this.navParams.data.record.atrab);
            this.form.controls['ahijotrab1'].setValue(this.navParams.data.record.ahijotrab1);
            this.form.controls['ahijotrab2'].setValue(this.navParams.data.record.ahijotrab2);
            this.form.controls['apoblacion'].setValue(this.navParams.data.record.apoblacion);
            this.form.controls['aadol'].setValue(this.navParams.data.record.aadol);
            this.form.controls['aext'].setValue(this.navParams.data.record.aext);
            this.translateService.get('ITEM_UPDATE_TITLE').subscribe(function (value) {
                _this.pageTitle = value;
            });
        }
    };
    Unidadacademica3CreatePage.prototype.manageGallery = function () {
        var _this = this;
        var creat = 'Actualiza';
        if (this.navParams.get("record") == null) {
            creat = 'Crea';
        }
        var options = {
            idtipounidad: this.idtipo,
            nombre: this.form.controls['nombre'].value,
            codigo: this.form.controls['codigo'].value,
            estado: this.form.controls['estado'].value,
            ididioma: this.ididiomatt,
            idtipocurso: this.idtipocursott,
            idtipogrupo: this.idtipogrupott,
            aest: this.aest,
            aext2: this.aext2,
            atrab: this.atrab,
            ahijotrab1: this.ahijotrab1,
            ahijotrab2: this.ahijotrab2,
            apoblacion: this.apoblacion,
            aadol: this.aadol,
            aext: this.aext,
            bitacora: { idempresa: this.idempresa, idafiliado: '', email: this.username, permiso: creat, accion: creat + ' unidad acedemica ' }
        };
        if (this.navParams.get("record") == null) {
            if (options) {
                this.authService.createReg('', options, 'unidadacademica3s').then(function (result) {
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
                this.authService.createReg(this._ID, options, 'unidadacademica3s').then(function (result) {
                    if (!_this.form.valid) {
                        return;
                    }
                    console.log(result);
                    _this.viewCtrl.dismiss(result);
                }, function (err) {
                    _this.msj.showError3('Error', err.error);
                });
            }
        }
    };
    Unidadacademica3CreatePage.prototype.cancel = function () {
        this.viewCtrl.dismiss();
    };
    Unidadacademica3CreatePage.prototype.done = function () {
        if (!this.form.valid) {
            return;
        }
        //this.viewCtrl.dismiss(this.form.value);
    };
    Unidadacademica3CreatePage.prototype.onSelectChangeB = function (selectedValue) { this.ididiomatt = selectedValue; };
    Unidadacademica3CreatePage.prototype.onSelectChangeC = function (selectedValue) { this.idtipocursott = selectedValue; };
    Unidadacademica3CreatePage.prototype.onSelectChangeD = function (selectedValue) { this.idtipogrupott = selectedValue; };
    Unidadacademica3CreatePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-Unidadacademica3-create',template:/*ion-inline-start:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\CALUSAC\unidadacademica\unidadacademica3-create\unidadacademica3-create.html"*/'<ion-header>\n    <ion-navbar>\n      <ion-title>{{pageTitle}}</ion-title>\n\n      <ion-buttons end>\n          <button (click)="cancel()" icon-only ion-button padding-right>\n              <ion-icon name="md-close"></ion-icon>\n            </button>\n          <button  (click)="manageGallery()"  [disabled]="!form.valid" icon-only ion-button padding-right>\n              <ion-icon name="done-all"></ion-icon>\n            </button>\n      </ion-buttons>\n    </ion-navbar>\n  </ion-header>\n  <ion-content padding>\n    <form     [formGroup]="form"   text-wrap>\n      <ion-list>\n\n        <ion-item margin-bottom>\n          <ion-label>Codigo  / No rubro curso</ion-label>\n          <ion-input\n             type="Number"\n             [(ngModel)]="codigo" [formControl]="form.controls[\'codigo\']"\n            ></ion-input>\n       </ion-item>\n       <ion-item class="invalid" *ngIf="!form.controls.codigo.valid && (form.controls.codigo.dirty || form.controls.codigo.touched)" text-wrap>\n         <ion-icon name="warning"></ion-icon>\n         {{ \'CODIGOT\' | translate }} / No rubro curso\n        </ion-item>\n\n\n        <ion-item margin-bottom text-wrap>\n            <ion-label >Idioma</ion-label>\n\n          <ion-select (ionChange)="onSelectChangeB($event)" [(ngModel)]="ididioma" [formControl]="form.controls[\'ididioma\']">\n              <ion-option text-wrap *ngFor="let item of vgrupo" [value]="item._id">{{item.nombre}}</ion-option>\n          </ion-select>\n\n\n       </ion-item>\n       <ion-item class="invalid" *ngIf="!form.controls.ididioma.valid && (form.controls.ididioma.dirty || form.controls.ididioma.touched)" text-wrap>\n         <ion-icon name="warning"></ion-icon>\n        Ingrese un Idioma valido\n        </ion-item>\n\n\n\n        <ion-item margin-bottom text-wrap>\n            <ion-label >Tipo curso</ion-label>\n\n          <ion-select (ionChange)="onSelectChangeC($event)" [(ngModel)]="idtipocurso" [formControl]="form.controls[\'idtipocurso\']">\n              <ion-option text-wrap *ngFor="let item of vtipocurso" [value]="item._id">{{item.nombre}}</ion-option>\n          </ion-select>\n\n\n       </ion-item>\n       <ion-item class="invalid" *ngIf="!form.controls.idtipocurso.valid && (form.controls.idtipocurso.dirty || form.controls.idtipocurso.touched)" text-wrap>\n         <ion-icon name="warning"></ion-icon>\n        Ingrese un tipo curso valido\n        </ion-item>\n\n\n\n\n        <ion-item margin-bottom text-wrap>\n          <ion-label >Tipo grupo</ion-label>\n\n        <ion-select (ionChange)="onSelectChangeD($event)" [(ngModel)]="idtipogrupo" [formControl]="form.controls[\'idtipogrupo\']">\n            <ion-option text-wrap *ngFor="let item of vtipogrupo" [value]="item._id">{{item.nombre}}</ion-option>\n        </ion-select>\n\n\n     </ion-item>\n     <ion-item class="invalid" *ngIf="!form.controls.idtipogrupo.valid && (form.controls.idtipogrupo.dirty || form.controls.idtipogrupo.touched)" text-wrap>\n       <ion-icon name="warning"></ion-icon>\n      Ingrese un tipo grupo valido\n      </ion-item>\n\n\n\n          <ion-item margin-bottom>\n             <ion-label>Nombre</ion-label>\n             <ion-input\n                type="text"\n                [(ngModel)]="nombre" [formControl]="form.controls[\'nombre\']"\n               ></ion-input>\n          </ion-item>\n          <ion-item class="invalid" *ngIf="!form.controls.nombre.valid && (form.controls.nombre.dirty || form.controls.nombre.touched)" text-wrap>\n            <ion-icon name="warning"></ion-icon>\n            {{ \'NOMBRET\' | translate }}\n           </ion-item>\n\n\n           <ion-item margin-bottom>\n            <ion-label>Estado</ion-label>\n            <ion-select [(ngModel)]="estado" [formControl]="form.controls[\'estado\']">\n              <ion-option value="Activo">Activo</ion-option>\n              <ion-option value="Inactivo">Inactivo</ion-option>\n            </ion-select>\n         </ion-item>\n         <ion-item class="invalid" *ngIf="!form.controls.estado.valid && (form.controls.estado.dirty || form.controls.estado.touched)" text-wrap>\n          <ion-icon name="warning"></ion-icon>\n          {{ \'ESTADOT\' | translate }}\n         </ion-item>\n\n         <ion-item-divider color="secondary">\n          <ion-label class="my-label18" color="secondary2" center>\n           Seleccione tipo de perfil al que aplica el curso\n          </ion-label>\n        </ion-item-divider>\n           <ion-grid>\n              <ion-row>\n                <ion-col>\n\n          <ion-label> Estudiante</ion-label>\n          <ion-checkbox  color="verdex" [(ngModel)]="aest" [formControl]="form.controls[\'aest\']"></ion-checkbox>\n                </ion-col>\n                   <ion-col>\n                    <ion-label>Población</ion-label>\n              <ion-checkbox color="verdex" [(ngModel)]="apoblacion" [formControl]="form.controls[\'apoblacion\']" ></ion-checkbox>\n                </ion-col>\n                <ion-col>\n                    <ion-label>Adolescente</ion-label>\n              <ion-checkbox color="verdex" [(ngModel)]="aadol" [formControl]="form.controls[\'aadol\']" ></ion-checkbox>\n                </ion-col>\n                <ion-col>\n                    <ion-label>Extranjero</ion-label>\n              <ion-checkbox color="verdex" [(ngModel)]="aext" [formControl]="form.controls[\'aext\']" ></ion-checkbox>\n                </ion-col>\n\n                <ion-col>\n                  <ion-label>Extranjerocentroamericano</ion-label>\n            <ion-checkbox color="verdex" [(ngModel)]="aext2" [formControl]="form.controls[\'aext2\']" ></ion-checkbox>\n              </ion-col>\n\n\n              </ion-row>\n            </ion-grid>\n\n    <ion-grid>\n              <ion-row>\n\n                  <ion-col>\n                    <ion-label>Trabajador</ion-label>\n          <ion-checkbox   color="verdex" [(ngModel)]="atrab" [formControl]="form.controls[\'atrab\']"></ion-checkbox>\n\n                </ion-col>\n                <ion-col>\n                    <ion-label>Hijo trabajador Adolescente</ion-label>\n                    <ion-checkbox  color="verdex" [(ngModel)]="ahijotrab1" [formControl]="form.controls[\'ahijotrab1\']"></ion-checkbox>\n\n                </ion-col>\n                <ion-col>\n                    <ion-label>Hijo de trabajador adulto</ion-label>\n                    <ion-checkbox  color="verdex" [(ngModel)]="ahijotrab2" [formControl]="form.controls[\'ahijotrab2\']"></ion-checkbox>\n                </ion-col>\n\n              </ion-row>\n            </ion-grid>\n\n\n\n\n\n\n       </ion-list>\n    </form>\n\n\n  </ion-content>\n'/*ion-inline-end:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\CALUSAC\unidadacademica\unidadacademica3-create\unidadacademica3-create.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3__providers__["d" /* NotificationProvider */], __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["F" /* ViewController */], __WEBPACK_IMPORTED_MODULE_3__providers__["a" /* Auth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */]])
    ], Unidadacademica3CreatePage);
    return Unidadacademica3CreatePage;
}());

//# sourceMappingURL=unidadacademica3-create.js.map

/***/ }),

/***/ 954:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Unidadacademica3CreatePageModule", function() { return Unidadacademica3CreatePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__unidadacademica3_create__ = __webpack_require__(1394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var Unidadacademica3CreatePageModule = /** @class */ (function () {
    function Unidadacademica3CreatePageModule() {
    }
    Unidadacademica3CreatePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__unidadacademica3_create__["a" /* Unidadacademica3CreatePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__unidadacademica3_create__["a" /* Unidadacademica3CreatePage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], Unidadacademica3CreatePageModule);
    return Unidadacademica3CreatePageModule;
}());

//# sourceMappingURL=unidadacademica3-create.module.js.map

/***/ })

});
//# sourceMappingURL=205.js.map