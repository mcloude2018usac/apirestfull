webpackJsonp([159],{

/***/ 1003:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DenunciasunidadCreatePageModule", function() { return DenunciasunidadCreatePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__denunciasunidad_create__ = __webpack_require__(1445);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_selectable__ = __webpack_require__(446);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var DenunciasunidadCreatePageModule = /** @class */ (function () {
    function DenunciasunidadCreatePageModule() {
    }
    DenunciasunidadCreatePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__denunciasunidad_create__["a" /* DenunciasunidadCreatePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__denunciasunidad_create__["a" /* DenunciasunidadCreatePage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild(),
                __WEBPACK_IMPORTED_MODULE_4_ionic_selectable__["b" /* IonicSelectableModule */]
            ],
        })
    ], DenunciasunidadCreatePageModule);
    return DenunciasunidadCreatePageModule;
}());

//# sourceMappingURL=denunciasunidad-create.module.js.map

/***/ }),

/***/ 1445:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DenunciasunidadCreatePage; });
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







var DenunciasunidadCreatePage = /** @class */ (function () {
    function DenunciasunidadCreatePage(storage, msj, translateService, viewCtrl, authService, navCtrl, navParams, _FB, actionSheetCtrl, events) {
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
        this.vunidad = [];
        this.voperador = [];
        this.voperador2 = [];
        this.vjefeop = [];
        this.vdenuncia = [];
        this.translateService.get('APPX').subscribe(function (value) {
            _this.idempresa = value;
            _this.authService.getReg('UNIDADES/UNIDADES/' + _this.idempresa, 'catalogos').then(function (result) {
                _this.vunidad = result;
            }, function (err) {
                _this.msj.showError3('Error', err.error);
            });
            _this.authService.getReg('5c6394cbcffe290016d494b5' + '/' + _this.idempresa, 'dcatalogos').then(function (result) {
                _this.vdenuncia = result;
            }, function (err) {
                _this.msj.showError3('Error', err.error);
            });
        });
        // Define form validation - VERY basic!
        this.form = this._FB.group({
            unidad: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            denuncia: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            operador: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            operador2: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            estado: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required]
            //let hasSearchText = this.portComponent.hasSearchText;
            //[isEnabled]="false"
            //[isMultiple]="true"
            //[isConfirmButtonEnabled]="false"
            //[isOnSearchEnabled]="false"
            //let isOpened = this.portComponent.isOpened;
            // [searchDebounce]="1000"
            //  <ng-template ionicSelectableValueTemplate let-port="value">{{denuncia._id}} </ng-template>
            /*
       <ng-template ionicSelectableGroupTemplate let-group="group">
                                 {{group.fecha}}
                             </ng-template>
     
                              <ng-template ionicSelectablePlaceholderTemplate>
                         Seleccione <span style="color: black;">(Unidad)</span>
               </ng-template>
     
     
            */
        });
    }
    DenunciasunidadCreatePage.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get('username').then(function (value) {
            _this.username = value;
        });
    };
    DenunciasunidadCreatePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        if (this.navParams.get("record") == null) {
            this.translateService.get('ITEM_CREATE_TITLE').subscribe(function (value) {
                _this.pageTitle = value;
            });
        }
        else {
            this._ID = this.navParams.data.record._id;
            this.unidad = this.navParams.data.record.unidad;
            this.denuncia = this.navParams.data.record.categoria;
            this.estado = this.navParams.data.record.estado;
            this.authService.getReg(this.unidad._id + '/' + 'unidad/empresa/' + this.idempresa, 'personals').then(function (result) {
                _this.voperador = result;
                _this.voperador2 = result;
                _this.operador = _this.navParams.data.record.operadores;
                _this.operador2 = _this.navParams.data.record.jefeop;
            }, function (err) {
                _this.msj.showError3('Error', err.error);
            });
            this.translateService.get('ITEM_UPDATE_TITLE').subscribe(function (value) {
                _this.pageTitle = value;
            });
        }
    };
    DenunciasunidadCreatePage.prototype.manageGallery = function () {
        var _this = this;
        var creat = 'Actualiza';
        if (this.navParams.get("record") == null) {
            creat = 'Crea';
        }
        var aar;
        aar = this.form.controls['denuncia'].value;
        var datat = [];
        for (var i = 0; i < aar.length; i++) {
            datat.push({ _id: aar[i]._id, nombre: aar[i].nombre });
        }
        var aar2;
        aar2 = this.form.controls['operador'].value;
        var datat2 = [];
        for (var i2 = 0; i2 < aar2.length; i2++) {
            datat2.push({ _id: aar2[i2]._id, nombre: aar2[i2].nombre });
        }
        var options = {
            unidad: this.form.controls['unidad'].value._id,
            categoria: datat,
            operadores: datat2,
            jefeop: this.form.controls['operador2'].value._id,
            nombre: this.unidad.nombre + this.denuncia.nombre,
            estado: this.form.controls['estado'].value,
            bitacora: { idempresa: this.idempresa, idafiliado: '', email: this.username, permiso: creat, accion: creat + ' Departamento ' }
        };
        if (this.navParams.get("record") == null) {
            if (options) {
                this.authService.createReg('', options, 'denunciaunidads').then(function (result) {
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
                this.authService.createReg(this._ID, options, 'denunciaunidads').then(function (result) {
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
    DenunciasunidadCreatePage.prototype.cancel = function () {
        this.viewCtrl.dismiss();
    };
    DenunciasunidadCreatePage.prototype.done = function () {
        if (!this.form.valid) {
            return;
        }
        //this.viewCtrl.dismiss(this.form.value);
    };
    DenunciasunidadCreatePage.prototype.portChange = function (event) {
        var _this = this;
        this.authService.getReg(event.value._id + '/' + 'unidad/empresa/' + this.idempresa, 'personals').then(function (result) {
            _this.voperador = result;
            _this.voperador2 = result;
        }, function (err) {
            _this.msj.showError3('Error', err.error);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('portComponent'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_6_ionic_selectable__["a" /* IonicSelectableComponent */])
    ], DenunciasunidadCreatePage.prototype, "portComponent", void 0);
    DenunciasunidadCreatePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-denunciasunidad-create',template:/*ion-inline-start:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\DENUNCIAS\denunciasunidad-create\denunciasunidad-create.html"*/'<ion-header>\n    <ion-navbar>\n      <ion-title>{{pageTitle}}</ion-title>\n     \n      <ion-buttons end>\n\n          \n\n          <button (click)="cancel()" icon-only ion-button padding-right>\n              <ion-icon name="md-close"></ion-icon>\n            </button>\n          <button  (click)="manageGallery()"  [disabled]="!form.valid" icon-only ion-button padding-right>\n              <ion-icon name="done-all"></ion-icon>\n            </button>\n      </ion-buttons>\n    </ion-navbar>\n  </ion-header>\n  <ion-content padding>\n    <form     [formGroup]="form"   text-wrap>\n      <ion-list text-wrap>\n           \n          <ion-item text-wrap>  \n              <ion-label   > {{ \'UNIDAD\' | translate }}  </ion-label>\n        \n              <ionic-selectable #portComponent (onChange)="portChange($event)" placeholder="Seleccione un valor"  [canSearch]="true" searchPlaceholder="Buscar un registro" [shouldBackdropClose]="false" modalCssClass="modal"   closeButtonSlot="start"             [searchFailText]="\'No Existen registros.\'"  clearButtonText="Limpiar"\n               itemValueField="_id" itemTextField="nombre" [canClear]="true"\n              [formControl]="form.controls[\'unidad\']"     [(ngModel)]="unidad" [items]="vunidad"     item-content text-wrap> \n             <ng-template ionicSelectableCloseButtonTemplate><ion-icon name="close-circle" style="font-size: 24px;"></ion-icon>              </ng-template>\n             <ng-template ionicSelectableMessageTemplate>Seleccione un Registro.</ng-template>\n             <ng-template ionicSelectableTitleTemplate> Unidades </ng-template>\n        \n         </ionic-selectable>\n                   \n           \n            </ion-item>\n            <ion-item class="invalid" *ngIf="!form.controls.unidad.valid \n            && (form.controls.unidad.dirty || form.controls.unidad.touched)"  text-wrap>\n             \n               {{ \'UNIDADT\' | translate }}\n           </ion-item>\n      \n\n              \n          <ion-item >\n              <ion-label   > Categorias </ion-label>\n             \n                <ionic-selectable  class="value-country-flag" placeholder="Seleccione un valor"\n                 [canSearch]="true" [isMultiple]="true"\n                 searchPlaceholder="Buscar un registro" [shouldBackdropClose]="false" \n                  closeButtonSlot="start"             [searchFailText]="\'No Existen registros.\'"  clearButtonText="Limpiar"\n                 itemValueField="_id" itemTextField="nombre" [canClear]="true"\n                [formControl]="form.controls[\'denuncia\']"     [(ngModel)]="denuncia" [items]="vdenuncia"     item-content text-wrap> \n               <ng-template ionicSelectableCloseButtonTemplate><ion-icon name="close-circle" style="font-size: 24px;" text-wrap></ion-icon>              </ng-template>\n               <ng-template class="value-country-flag" ionicSelectableItemTemplate let-denuncia="item" let-isDenunciaSelected="isItemSelected" text-wrap>\n				{{denuncia.nombre}}\n			</ng-template>\n               <ng-template ionicSelectableMessageTemplate text-wrap>Seleccione un Registro.</ng-template>\n            <ng-template ionicSelectableTitleTemplate text-wrap> Categorias </ng-template>\n           </ionic-selectable>\n\n           \n            </ion-item>\n            <ion-item class="invalid" *ngIf="!form.controls.denuncia.valid \n            && (form.controls.denuncia.dirty || form.controls.denuncia.touched)"  text-wrap>\n             \n               Categoria denuncia\n           </ion-item>\n\n           <ion-item text-wrap>  \n            <ion-label   > Jefe de Operación </ion-label>\n      \n            <ionic-selectable #portComponent3  placeholder="Seleccione un valor"  [canSearch]="true" searchPlaceholder="Buscar un registro" [shouldBackdropClose]="false" modalCssClass="modal"   closeButtonSlot="start"             [searchFailText]="\'No Existen registros.\'"  clearButtonText="Limpiar"\n            itemValueField="_id" itemTextField="nombre" [canClear]="true"\n           [formControl]="form.controls[\'operador2\']"     [(ngModel)]="operador2" [items]="voperador2"     item-content text-wrap> \n          <ng-template ionicSelectableCloseButtonTemplate><ion-icon name="close-circle" style="font-size: 24px;"></ion-icon>              </ng-template>\n          <ng-template ionicSelectableMessageTemplate>Seleccione un Registro.</ng-template>\n          <ng-template ionicSelectableTitleTemplate> Jefe de operación </ng-template>\n     \n\n\n                   \n       </ionic-selectable>\n         \n          </ion-item>\n          <ion-item class="invalid" *ngIf="!form.controls.operador2.valid \n          && (form.controls.operador2.dirty || form.controls.operador2.touched)"  text-wrap>\n           \n            Ingrese un jefe de operacion\n         </ion-item>\n\n           <ion-item text-wrap>  \n            <ion-label   > Operadores </ion-label>\n      \n            <ionic-selectable placeholder="Seleccione un valor"   [isMultiple]="true" [canSearch]="true" searchPlaceholder="Buscar un registro" [shouldBackdropClose]="false" modalCssClass="modal"   closeButtonSlot="start"             [searchFailText]="\'No Existen registros.\'"  clearButtonText="Limpiar"\n             itemValueField="_id" itemTextField="nombre" [canClear]="true"\n            [formControl]="form.controls[\'operador\']"     [(ngModel)]="operador" [items]="voperador"     item-content text-wrap> \n           <ng-template ionicSelectableCloseButtonTemplate><ion-icon name="close-circle" style="font-size: 24px;"></ion-icon>              </ng-template>\n           <ng-template ionicSelectableMessageTemplate>Seleccione un Registro.</ng-template>\n           <ng-template ionicSelectableTitleTemplate> operadores </ng-template>\n      \n       </ionic-selectable>\n                 \n         \n          </ion-item>\n          <ion-item class="invalid" *ngIf="!form.controls.operador.valid \n          && (form.controls.operador.dirty || form.controls.operador.touched)"  text-wrap>\n           \n            Ingrese operadores\n         </ion-item>    \n    \n   \n           <ion-item margin-bottom>\n            <ion-label>Estado</ion-label>\n            <ion-select [(ngModel)]="estado" [formControl]="form.controls[\'estado\']">\n              <ion-option value="Activo">Activo</ion-option>\n              <ion-option value="Inactivo">Inactivo</ion-option>\n            </ion-select>\n         </ion-item>\n         <ion-item class="invalid" *ngIf="!form.controls.estado.valid && (form.controls.estado.dirty || form.controls.estado.touched)" text-wrap>\n          <ion-icon name="warning"></ion-icon>\n          {{ \'ESTADOT\' | translate }}\n         </ion-item>\n\n      \n        \n       </ion-list>\n    </form>\n  \n  \n  </ion-content>\n'/*ion-inline-end:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\DENUNCIAS\denunciasunidad-create\denunciasunidad-create.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3__providers__["d" /* NotificationProvider */], __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["F" /* ViewController */], __WEBPACK_IMPORTED_MODULE_3__providers__["a" /* Auth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */]])
    ], DenunciasunidadCreatePage);
    return DenunciasunidadCreatePage;
}());

//# sourceMappingURL=denunciasunidad-create.js.map

/***/ })

});
//# sourceMappingURL=159.js.map