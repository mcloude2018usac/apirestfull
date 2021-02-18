webpackJsonp([84],{

/***/ 1100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermisoCreatePageModule", function() { return PermisoCreatePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__permiso_create__ = __webpack_require__(1556);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_selectable__ = __webpack_require__(446);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var PermisoCreatePageModule = /** @class */ (function () {
    function PermisoCreatePageModule() {
    }
    PermisoCreatePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__permiso_create__["a" /* PermisoCreatePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__permiso_create__["a" /* PermisoCreatePage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild(),
                __WEBPACK_IMPORTED_MODULE_4_ionic_selectable__["b" /* IonicSelectableModule */]
            ],
        })
    ], PermisoCreatePageModule);
    return PermisoCreatePageModule;
}());

//# sourceMappingURL=permiso-create.module.js.map

/***/ }),

/***/ 1556:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PermisoCreatePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_selectable__ = __webpack_require__(446);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var PermisoCreatePage = /** @class */ (function () {
    function PermisoCreatePage(storage, msj, translateService, viewCtrl, authService, navCtrl, navParams, _FB, actionSheetCtrl, events) {
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
        this.pactualizacion = false;
        this.createdCode = null;
        this.scannedCode = null;
        this.translateService.get('APPX').subscribe(function (value) {
            _this.idempresa = value;
        });
        // Define form validation - VERY basic!
        this.form = this._FB.group({
            idmodulo: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            orden: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            ingreso: [''],
            consulta: [''],
            eliminacion: [''],
            creacion: [''],
            actualizacion: [''],
            filtro: [''],
            reporte: ['']
        });
        this.pactualizacion = this.navParams.get("actualizacion");
    }
    PermisoCreatePage.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get('username').then(function (value) {
            _this.username = value;
        });
    };
    PermisoCreatePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.idrol = this.navParams.data.record2.idrol;
        this.nidrol = this.navParams.data.record2.nidrol;
        this.pactualizacion = this.navParams.get("actualizacion");
        if (this.navParams.get("record") == null) {
            this.authService.getReg('todos/todos/' + this.idempresa, 'modulos').then(function (result) {
                _this.vgrupo = result;
            }, function (err) {
                _this.msj.showError3('Error', err.error);
            });
            this.authService.getReg(this.idrol + '/' + this.idempresa + '/orden', 'permisos').then(function (data) {
                if (data) {
                    var aa = data;
                    _this.orden = aa.orden;
                    _this.orden = _this.orden + 10;
                }
            }, function (err) {
                _this.msj.showError3('Error', err.error);
                // this.translateService.get('NO_OPERACION').subscribe((value) => { this.msj.showError3('Error',value);  })  
            });
            this.limpia('true');
            this.translateService.get('ITEM_CREATE_TITLE').subscribe(function (value) {
                _this.pageTitle = value;
            });
            this.isDisablednit = true;
        }
        else {
            this.limpia('false');
            this._ID = this.navParams.data.record._id;
            this.idrol = this.navParams.data.record.idrol;
            this.authService.getReg('todos/todos/' + this.idempresa, 'modulos').then(function (result) {
                _this.vgrupo = result;
                _this.idmodulo = _this.navParams.data.record.idmodulo;
            }, function (err) {
                _this.msj.showError3('Error', err.error);
            });
            this.orden = this.navParams.data.record.orden;
            this.ingreso = this.navParams.data.record.ingreso;
            this.consulta = this.navParams.data.record.consulta;
            this.eliminacion = this.navParams.data.record.eliminacion;
            this.creacion = this.navParams.data.record.creacion;
            this.actualizacion = this.navParams.data.record.actualizacion;
            this.filtro = this.navParams.data.record.filtro;
            this.reporte = this.navParams.data.record.reporte;
            this.isDisablednit = false;
            this.translateService.get('ITEM_UPDATE_TITLE').subscribe(function (value) {
                _this.pageTitle = value;
            });
        }
    };
    PermisoCreatePage.prototype.limpia = function (op) {
        this.form.controls['idmodulo'].setValue('');
        this.form.controls['orden'].setValue('0');
        this.form.controls['ingreso'].setValue(op);
        this.form.controls['consulta'].setValue(op);
        this.form.controls['eliminacion'].setValue(op);
        this.form.controls['creacion'].setValue(op);
        this.form.controls['actualizacion'].setValue(op);
        this.form.controls['filtro'].setValue(op);
        this.form.controls['reporte'].setValue(op);
    };
    PermisoCreatePage.prototype.manageGallery = function () {
        var _this = this;
        var creat = 'Actualiza';
        if (this.navParams.get("record") == null) {
            creat = 'Crea';
        }
        var options = {
            idempresa: this.idempresa,
            idrol: this.idrol,
            nombre: this.form.controls['idmodulo'].value,
            ingreso: this.form.controls['ingreso'].value,
            consulta: this.form.controls['consulta'].value,
            eliminacion: this.form.controls['eliminacion'].value,
            creacion: this.form.controls['creacion'].value,
            actualizacion: this.form.controls['actualizacion'].value,
            filtro: this.form.controls['filtro'].value,
            reporte: this.form.controls['reporte'].value,
            orden: this.form.controls['orden'].value,
            bitacora: { idempresa: this.idempresa, idafiliado: '', email: this.username, permiso: creat, accion: creat + ' permisos ' }
        };
        if (this.navParams.get("record") == null) {
            if (options) {
                this.authService.createReg('', options, 'permisos').then(function (result) {
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
                this.authService.createReg(this._ID, options, 'permisos').then(function (result) {
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
    PermisoCreatePage.prototype.cancel = function () {
        this.viewCtrl.dismiss();
    };
    PermisoCreatePage.prototype.done = function () {
        if (!this.form.valid) {
            return;
        }
        //this.viewCtrl.dismiss(this.form.value);
    };
    PermisoCreatePage.prototype.portChange = function (event) {
        //  this.idprofesortt=event.value._id;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('portComponent'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_6_ionic_selectable__["a" /* IonicSelectableComponent */])
    ], PermisoCreatePage.prototype, "portComponent", void 0);
    PermisoCreatePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-permiso-create',template:/*ion-inline-start:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\SEGURIDAD\permiso-create\permiso-create.html"*/'<ion-header>\n    <ion-navbar>\n      <ion-title>{{pageTitle}}</ion-title>\n      \n      <ion-buttons end>\n          <button (click)="cancel()" icon-only ion-button padding-right>\n              <ion-icon name="md-close"></ion-icon>\n            </button>\n          <button  (click)="manageGallery()" [hidden]="!pactualizacion"     [disabled]="!form.valid" icon-only ion-button padding-right>\n              <ion-icon name="done-all"></ion-icon>\n            </button>\n      </ion-buttons>\n    </ion-navbar>\n  </ion-header>\n  <ion-content padding>\n    <form     [formGroup]="form"   text-wrap>\n      <ion-list>\n        \n          <ion-item margin-bottom>\n             <ion-label>Modulo</ion-label>\n\n             <ionic-selectable #portComponent (onChange)="portChange($event)" placeholder="Seleccione un valor"  [canSearch]="true" \n             searchPlaceholder="Buscar un registro" [shouldBackdropClose]="false" modalCssClass="modal"   closeButtonSlot="start"             \n             [searchFailText]="\'No Existen registros.\'"  clearButtonText="Limpiar"\n    itemValueField="_id" itemTextField="nombre" [canClear]="true"\n   [formControl]="form.controls[\'idmodulo\']"     [(ngModel)]="idmodulo" [items]="vgrupo"     item-content text-wrap> \n  <ng-template ionicSelectableCloseButtonTemplate><ion-icon name="close-circle" style="font-size: 24px;"></ion-icon>              </ng-template>\n  <ng-template ionicSelectableMessageTemplate>Seleccione un Registro.</ng-template>\n  <ng-template ionicSelectableTitleTemplate> Docentes </ng-template>\n\n</ionic-selectable>\n             \n        \n\n\n\n             \n          </ion-item>\n          <ion-item class="invalid" *ngIf="!form.controls.idmodulo.valid && (form.controls.idmodulo.dirty || form.controls.idmodulo.touched)" text-wrap>\n            <ion-icon name="warning"></ion-icon>\n            {{ \'MODULOT\' | translate }}\n           </ion-item>\n  \n           <ion-item margin-bottom>\n              <ion-label>Cardinalidad</ion-label>\n              <ion-input   [(ngModel)]="orden"\n              type="number"  [formControl]="form.controls[\'orden\']"></ion-input>\n                \n           </ion-item>\n           <ion-item class="invalid" *ngIf="!form.controls.orden.valid && (form.controls.orden.dirty || form.controls.orden.touched)" text-wrap>\n            <ion-icon name="warning"></ion-icon>\n            {{ \'CARDINALIDADT\' | translate }}\n           </ion-item>\n\n           <ion-item margin-bottom>\n            <ion-label>Ingreso</ion-label>\n            <ion-checkbox  color="verdex"   [(ngModel)]="ingreso" [formControl]="form.controls[\'ingreso\']"></ion-checkbox>\n\n         </ion-item>\n         \n          \n         <ion-item margin-bottom>\n            <ion-label>Consulta</ion-label>\n            <ion-checkbox   color="amarillox" [(ngModel)]="consulta" [formControl]="form.controls[\'consulta\']"></ion-checkbox>\n         </ion-item>  \n\n         <ion-item margin-bottom>\n            <ion-label>Eliminacion</ion-label>\n            <ion-checkbox  color="danger" [(ngModel)]="eliminacion" [formControl]="form.controls[\'eliminacion\']"></ion-checkbox>\n            \n         </ion-item>\n\n         <ion-item margin-bottom>\n            <ion-label>Creacion</ion-label>\n            <ion-checkbox  color="secondary" [(ngModel)]="creacion" [formControl]="form.controls[\'creacion\']"></ion-checkbox>\n         </ion-item>\n           \n         \n         <ion-item margin-bottom>\n            <ion-label>Actualizacion</ion-label>\n            <ion-checkbox color="dark"  [(ngModel)]="actualizacion" [formControl]="form.controls[\'actualizacion\']"></ion-checkbox>\n         </ion-item>  \n\n         <ion-item margin-bottom>\n            <ion-label>Filtro</ion-label>\n            <ion-checkbox color="dark"  [(ngModel)]="filtro" [formControl]="form.controls[\'filtro\']"></ion-checkbox>\n         </ion-item> \n\n         <ion-item margin-bottom>\n            <ion-label>Reporte</ion-label>\n            <ion-checkbox color="dark"  [(ngModel)]="reporte" [formControl]="form.controls[\'reporte\']"></ion-checkbox>\n         </ion-item> \n\n       </ion-list>\n       \n       \n    </form>\n  \n   \n  \n  </ion-content>'/*ion-inline-end:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\SEGURIDAD\permiso-create\permiso-create.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3__providers__["d" /* NotificationProvider */], __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["F" /* ViewController */], __WEBPACK_IMPORTED_MODULE_3__providers__["a" /* Auth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */]])
    ], PermisoCreatePage);
    return PermisoCreatePage;
}());

//# sourceMappingURL=permiso-create.js.map

/***/ })

});
//# sourceMappingURL=84.js.map