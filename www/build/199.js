webpackJsonp([199],{

/***/ 1399:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Unidadhorario3CreatePage; });
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






var Unidadhorario3CreatePage = /** @class */ (function () {
    function Unidadhorario3CreatePage(storage, msj, translateService, viewCtrl, authService, navCtrl, navParams, _FB, actionSheetCtrl, events) {
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
        this.idtipo2 = "";
        this.idjornada = "";
        this.idnombre = "";
        this.translateService.get('APPX').subscribe(function (value) {
            _this.idempresa = value;
        });
        this.form = this._FB.group({
            codigo: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            nombre: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            nombre2: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            dia: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            lunes: [''],
            martes: [''],
            miercoles: [''],
            jueves: [''],
            viernes: [''],
            sabado: [''],
            domingo: ['']
        });
    }
    Unidadhorario3CreatePage.prototype.limpia = function (op) {
        this.form.controls['lunes'].setValue(op);
        this.form.controls['martes'].setValue(op);
        this.form.controls['miercoles'].setValue(op);
        this.form.controls['jueves'].setValue(op);
        this.form.controls['viernes'].setValue(op);
        this.form.controls['sabado'].setValue(op);
        this.form.controls['domingo'].setValue(op);
    };
    Unidadhorario3CreatePage.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get('username').then(function (value) {
            _this.username = value;
        });
    };
    Unidadhorario3CreatePage.prototype.Checkbox1 = function (op) {
        var cad = '';
        if (this.lunes) {
            cad = cad + ' Lunes ';
        }
        if (this.martes) {
            cad = cad + ' Martes ';
        }
        if (this.miercoles) {
            cad = cad + ' Miercoles ';
        }
        if (this.jueves) {
            cad = cad + ' Jueves ';
        }
        if (this.viernes) {
            cad = cad + ' Viernes ';
        }
        if (this.sabado) {
            cad = cad + ' Sabado ';
        }
        if (this.domingo) {
            cad = cad + ' Domingo ';
        }
        this.dia = cad;
    };
    Unidadhorario3CreatePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.idtipo = this.navParams.data.record2.idtipo;
        this.idtipo2 = this.navParams.data.record2.idtipo2;
        this.idnombre = this.navParams.data.record2.idnombre;
        this.idjornada = this.navParams.data.record2.idjornada;
        if (this.navParams.get("record") == null) {
            this.limpia(false);
            this.translateService.get('ITEM_CREATE_TITLE').subscribe(function (value) {
                _this.pageTitle = value;
            });
        }
        else {
            this._ID = this.navParams.data.record._id;
            this.codigo = this.navParams.data.record.codigo;
            this.nombre = this.navParams.data.record.nombre;
            this.nombre2 = this.navParams.data.record.nombre2;
            this.dia = this.navParams.data.record.dia;
            var dd = '';
            this.limpia(false);
            dd = this.dia;
            var vv = dd.split(' ');
            for (var j = 0; j < vv.length; j++) {
                switch (vv[j]) {
                    case 'Lunes':
                        this.form.controls['lunes'].setValue('true');
                        break;
                    case 'Martes':
                        this.form.controls['martes'].setValue('true');
                        break;
                    case 'Miercoles':
                        this.form.controls['miercoles'].setValue('true');
                        break;
                    case 'Jueves':
                        this.form.controls['jueves'].setValue('true');
                        break;
                    case 'Viernes':
                        this.form.controls['viernes'].setValue('true');
                        break;
                    case 'Sabado':
                        this.form.controls['sabado'].setValue('true');
                        break;
                    case 'Domingo':
                        this.form.controls['domingo'].setValue('true');
                        break;
                    default:
                }
            }
            this.translateService.get('ITEM_UPDATE_TITLE').subscribe(function (value) {
                _this.pageTitle = value;
            });
        }
    };
    Unidadhorario3CreatePage.prototype.manageGallery = function () {
        var _this = this;
        var creat = 'Actualiza';
        if (this.navParams.get("record") == null) {
            creat = 'Crea';
        }
        var options = {
            idtipounidad: this.idtipo,
            idunidadacademica: this.idtipo2,
            idjornada: this.idjornada,
            codigo: this.form.controls['codigo'].value,
            nombre: this.form.controls['nombre'].value,
            nombre2: this.form.controls['nombre2'].value,
            dia: this.form.controls['dia'].value,
            bitacora: { idempresa: this.idempresa, idafiliado: '', email: this.username, permiso: creat, accion: creat + ' horarioes calusac' }
        };
        if (this.navParams.get("record") == null) {
            if (options) {
                this.authService.createReg('', options, 'unidadhorario3s').then(function (result) {
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
                this.authService.createReg(this._ID, options, 'unidadhorario3s').then(function (result) {
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
    Unidadhorario3CreatePage.prototype.cancel = function () {
        this.viewCtrl.dismiss();
    };
    Unidadhorario3CreatePage.prototype.done = function () {
        if (!this.form.valid) {
            return;
        }
        //this.viewCtrl.dismiss(this.form.value);
    };
    Unidadhorario3CreatePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-Unidadhorario3-create',template:/*ion-inline-start:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\CALUSAC\unidadacademica\unidadhorario3-create\unidadhorario3-create.html"*/'<ion-header>\n    <ion-navbar>\n      <ion-title>{{pageTitle}}</ion-title>\n      \n      <ion-buttons end>\n          <button (click)="cancel()" icon-only ion-button padding-right>\n              <ion-icon name="md-close"></ion-icon>\n            </button>\n          <button  (click)="manageGallery()"  [disabled]="!form.valid" icon-only ion-button padding-right>\n              <ion-icon name="done-all"></ion-icon>\n            </button>\n      </ion-buttons>\n    </ion-navbar>\n  </ion-header>\n  <ion-content padding>\n    <form     [formGroup]="form"    text-wrap>\n      <ion-list>\n        \n        <ion-item margin-bottom>\n          <ion-label>Codigo</ion-label>\n          <ion-input\n             type="Number"    \n             [(ngModel)]="codigo" [formControl]="form.controls[\'codigo\']"\n            ></ion-input>\n       </ion-item>\n       <ion-item class="invalid" *ngIf="!form.controls.codigo.valid && (form.controls.codigo.dirty || form.controls.codigo.touched)" text-wrap>\n         <ion-icon name="warning"></ion-icon>\n         {{ \'CODIGOT\' | translate }}\n        </ion-item>\n  \n          <ion-item margin-bottom>   \n             <ion-label>Hora Inicial</ion-label>\n             <ion-datetime displayFormat="HH:mm"  [(ngModel)]="nombre" [formControl]="form.controls[\'nombre\']"></ion-datetime>\n          </ion-item>\n          <ion-item class="invalid" *ngIf="!form.controls.nombre.valid && (form.controls.nombre.dirty || form.controls.nombre.touched)" text-wrap>\n            <ion-icon name="warning"></ion-icon>\n            Ingrese una hora inicial valida\n           </ion-item>\n\n           <ion-item margin-bottom>   \n              <ion-label>Hora Final</ion-label>\n              <ion-datetime displayFormat="HH:mm"  [(ngModel)]="nombre2" [formControl]="form.controls[\'nombre2\']"></ion-datetime>\n           </ion-item>\n           <ion-item class="invalid" *ngIf="!form.controls.nombre2.valid && (form.controls.nombre2.dirty || form.controls.nombre2.touched)" text-wrap>\n             <ion-icon name="warning"></ion-icon>\n             Ingrese una hora final valida\n            </ion-item>\n           <ion-label>SELECCIONE DIAS DE CLASE</ion-label>\n           <ion-grid>      \n              <ion-row>\n                <ion-col>\n                \n          <ion-label> Lunes</ion-label>\n          <ion-checkbox  color="verdex" [(ngModel)]="lunes" [formControl]="form.controls[\'lunes\']" (click)="Checkbox1(1)">Lunes</ion-checkbox>\n                </ion-col>\n                <ion-col>\n                    <ion-label>Martes</ion-label>\n          <ion-checkbox   color="verdex" [(ngModel)]="martes" [formControl]="form.controls[\'martes\']" (click)="Checkbox1(1)">Martes</ion-checkbox>\n\n                </ion-col>\n                <ion-col>\n                    <ion-label>Miercoles</ion-label>\n                    <ion-checkbox  color="verdex" [(ngModel)]="miercoles" [formControl]="form.controls[\'miercoles\']" (click)="Checkbox1(1)"></ion-checkbox>\n                    \n                </ion-col>\n                <ion-col>    \n                    <ion-label>Jueves</ion-label>\n                    <ion-checkbox  color="verdex" [(ngModel)]="jueves" [formControl]="form.controls[\'jueves\']" (click)="Checkbox1(1)"></ion-checkbox>\n                </ion-col>\n                <ion-col>\n                    <ion-label>Viernes</ion-label>\n              <ion-checkbox color="verdex" [(ngModel)]="viernes" [formControl]="form.controls[\'viernes\']" (click)="Checkbox1(1)"></ion-checkbox>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n\n            <ion-grid>      \n              <ion-row>\n                <ion-col>\n                \n          <ion-label> Sabado</ion-label>\n          <ion-checkbox  color="verdex" [(ngModel)]="sabado" [formControl]="form.controls[\'sabado\']" (click)="Checkbox1(6)">Sabado</ion-checkbox>\n                </ion-col>\n                <ion-col>\n                    <ion-label>Domingo</ion-label>\n          <ion-checkbox   color="verdex" [(ngModel)]="domingo" [formControl]="form.controls[\'domingo\']" (click)="Checkbox1(7)">Domingo</ion-checkbox>\n\n                </ion-col>\n            \n              </ion-row>\n            </ion-grid>\n\n            \n\n              \n            \n        \n\n           \n          <ion-item margin-bottom>\n              <ion-label>Dias de clase</ion-label>\n              <ion-input  [disabled]="true"\n                 type="text"\n                 [(ngModel)]="dia" [formControl]="form.controls[\'dia\']"\n                ></ion-input>\n           </ion-item>\n           <ion-item class="invalid" *ngIf="!form.controls.dia.valid && (form.controls.dia.dirty || form.controls.dia.touched)" text-wrap>\n             <ion-icon name="warning"></ion-icon>\n             Ingrese un dia valido\n            </ion-item>\n\n         \n  \n        \n       </ion-list>\n    </form>\n  \n  \n  </ion-content>\n'/*ion-inline-end:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\CALUSAC\unidadacademica\unidadhorario3-create\unidadhorario3-create.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3__providers__["d" /* NotificationProvider */], __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["F" /* ViewController */], __WEBPACK_IMPORTED_MODULE_3__providers__["a" /* Auth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */]])
    ], Unidadhorario3CreatePage);
    return Unidadhorario3CreatePage;
}());

//# sourceMappingURL=unidadhorario3-create.js.map

/***/ }),

/***/ 959:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Unidadhorario3CreatePageModule", function() { return Unidadhorario3CreatePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__unidadhorario3_create__ = __webpack_require__(1399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var Unidadhorario3CreatePageModule = /** @class */ (function () {
    function Unidadhorario3CreatePageModule() {
    }
    Unidadhorario3CreatePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__unidadhorario3_create__["a" /* Unidadhorario3CreatePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__unidadhorario3_create__["a" /* Unidadhorario3CreatePage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], Unidadhorario3CreatePageModule);
    return Unidadhorario3CreatePageModule;
}());

//# sourceMappingURL=unidadhorario3-create.module.js.map

/***/ })

});
//# sourceMappingURL=199.js.map