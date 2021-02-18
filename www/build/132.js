webpackJsonp([132],{

/***/ 1039:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriaformsusrCreatePageModule", function() { return CategoriaformsusrCreatePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__categoriaformsusr_create__ = __webpack_require__(1481);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_selectable__ = __webpack_require__(446);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var CategoriaformsusrCreatePageModule = /** @class */ (function () {
    function CategoriaformsusrCreatePageModule() {
    }
    CategoriaformsusrCreatePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__categoriaformsusr_create__["a" /* CategoriaformsusrCreatePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__categoriaformsusr_create__["a" /* CategoriaformsusrCreatePage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild(),
                __WEBPACK_IMPORTED_MODULE_4_ionic_selectable__["b" /* IonicSelectableModule */]
            ],
        })
    ], CategoriaformsusrCreatePageModule);
    return CategoriaformsusrCreatePageModule;
}());

//# sourceMappingURL=categoriaformsusr-create.module.js.map

/***/ }),

/***/ 1481:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoriaformsusrCreatePage; });
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






var CategoriaformsusrCreatePage = /** @class */ (function () {
    function CategoriaformsusrCreatePage(storage, loadingCtrl, msj, translateService, viewCtrl, authService, navCtrl, navParams, _FB, actionSheetCtrl, events) {
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
        this.username = "";
        this.vidformulario = [];
        this.vidusuario = [];
        this.items = [];
        // Define form validation - VERY basic!
        this.form = this._FB.group({
            idformulario: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            idusuario: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required]
        });
        this.translateService.get('APPX').subscribe(function (value) {
            _this.idempresa = value;
        });
    }
    CategoriaformsusrCreatePage.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get('username').then(function (value) {
            _this.username = value;
        });
        this.focused('a');
    };
    CategoriaformsusrCreatePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.idcategoria = this.navParams.data.record2.idcategoria;
        this.authService.getReg(this.idcategoria + '/categoria/' + this.idempresa, 'frmmovils').then(function (result) {
            _this.vidformulario = result;
        }, function (err) {
            _this.msj.showError3('Error', err.error);
        });
        /*
        this.authService.getReg('','personals').then((result) => {
          this.vidusuario=result;
         
        }, (err) => {
        this.msj.showError3('Error',err.error);
        });
        */
        if (this.navParams.get("record") == null) {
            this.translateService.get('ITEM_CREATE_TITLE').subscribe(function (value) {
                _this.pageTitle = value;
            });
        }
        else {
            this._ID = this.navParams.data.record._id;
            this.idformulario = this.navParams.data.record.idformulario;
            this.idusuario = this.navParams.data.record.idusuario.cui;
            this.focused('a');
            this.translateService.get('ITEM_UPDATE_TITLE').subscribe(function (value) {
                _this.pageTitle = value;
            });
        }
    };
    CategoriaformsusrCreatePage.prototype.manageGallery = function () {
        var _this = this;
        var creat = 'Actualiza';
        if (this.navParams.get("record") == null) {
            creat = 'Crea';
        }
        var options = {
            idempresa: this.idempresa,
            idformulario: this.form.controls['idformulario'].value,
            idcategoria: this.idcategoria,
            idusuario: this.idusuario2,
            nombre: this.idformulario.nombre + ' ' + this.idusuario2n,
            bitacora: { idempresa: this.idempresa, idafiliado: '', email: this.username, permiso: creat, accion: creat + ' Categorias de usuarios, formularios ' }
        };
        if (this.navParams.get("record") == null) {
            if (options) {
                this.authService.createReg('', options, 'catusuarios').then(function (result) {
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
                this.authService.createReg(this._ID, options, 'catusuarios').then(function (result) {
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
    CategoriaformsusrCreatePage.prototype.cancel = function () {
        this.viewCtrl.dismiss();
    };
    CategoriaformsusrCreatePage.prototype.done = function () {
        if (!this.form.valid) {
            return;
        }
        //this.viewCtrl.dismiss(this.form.value);
    };
    CategoriaformsusrCreatePage.prototype.focused = function (selectedValue) {
        var _this = this;
        this.idusuario2 = '';
        if ((this.idusuario) && (this.idusuario != '')) {
            var loading_1 = this.loadingCtrl.create({
                spinner: 'bubbles',
                content: "Espere un momento,  Buscando información ......"
            });
            loading_1.present();
            this.items = [];
            this.authService.getReg(this.idusuario + '/' + 'persona/' + this.idempresa + '/' + this.idempresa, 'personals').then(function (data) {
                if (data) {
                    _this.idusuario2 = data[0]._id;
                    _this.idusuario2n = data[0].nombre;
                    _this.items = data;
                    loading_1.dismiss();
                }
            }, function (err) {
                _this.msj.showError3('Resultado', 'No idusuario invalido ');
                _this.idusuario = '';
                _this.items = [];
                loading_1.dismiss();
            });
        }
    };
    CategoriaformsusrCreatePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-categoriaformsusr-create',template:/*ion-inline-start:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\FORMULARIO\categoriaformsusr-create\categoriaformsusr-create.html"*/'<ion-header>\n    <ion-navbar>\n      <ion-title>{{pageTitle}}</ion-title>\n     \n      <ion-buttons end>\n\n          \n\n          <button (click)="cancel()" icon-only ion-button padding-right>\n              <ion-icon name="md-close"></ion-icon>\n            </button>\n          <button  (click)="manageGallery()"  [disabled]="!form.valid" icon-only ion-button padding-right>\n              <ion-icon name="done-all"></ion-icon>\n            </button>\n      </ion-buttons>\n    </ion-navbar>\n  </ion-header>\n  <ion-content padding>\n    <form     [formGroup]="form"   text-wrap>\n      <ion-list text-wrap>\n           \n          <ion-item  text-wrap>\n              <ion-label   >Ingrese CUI:</ion-label>\n              <ion-input (focusout)="focused($event)"  \n              type="number"   [(ngModel)]="idusuario" [formControl]="form.controls[\'idusuario\']"\n                ></ion-input>\n           </ion-item>\n           <ion-item class="invalid" *ngIf="!form.controls.idusuario.valid && (form.controls.idusuario.dirty || form.controls.idusuario.touched)" text-wrap>\n              <ion-icon name="warning"></ion-icon>\n              Ingrese un CUI valido\n             </ion-item>\n      \n             <ion-item   *ngFor="let item of items " text-wrap>\n      \n      \n                <h2>Nombre: {{item.nombre}}</h2>\n      \n      \n      \n        </ion-item>\n      \n          <ion-item text-wrap>  \n              <ion-label   > Formulario  </ion-label>\n        \n              <ionic-selectable placeholder="Seleccione un valor"  [canSearch]="true" searchPlaceholder="Buscar un registro" [shouldBackdropClose]="false" modalCssClass="modal"   closeButtonSlot="start"             [searchFailText]="\'No Existen registros.\'"  clearButtonText="Limpiar"\n               itemValueField="_id" itemTextField="nombre" [canClear]="true"\n              [formControl]="form.controls[\'idformulario\']"     [(ngModel)]="idformulario" [items]="vidformulario"     item-content text-wrap> \n             <ng-template ionicSelectableCloseButtonTemplate><ion-icon name="close-circle" style="font-size: 24px;"></ion-icon>              </ng-template>\n             <ng-template ionicSelectableMessageTemplate>Seleccione un Registro.</ng-template>\n             <ng-template ionicSelectableTitleTemplate> Formularios</ng-template>\n        \n         </ionic-selectable>\n                   \n           \n            </ion-item>\n            <ion-item class="invalid" *ngIf="!form.controls.idformulario.valid \n            && (form.controls.idformulario.dirty || form.controls.idformulario.touched)"  text-wrap>\n             \n              Ingrese un formulario valido\n           </ion-item>\n   \n\n           \n          \n\n      \n        \n       </ion-list>\n    </form>\n  \n  \n  </ion-content>\n'/*ion-inline-end:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\FORMULARIO\categoriaformsusr-create\categoriaformsusr-create.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__providers__["d" /* NotificationProvider */], __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["F" /* ViewController */], __WEBPACK_IMPORTED_MODULE_3__providers__["a" /* Auth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */]])
    ], CategoriaformsusrCreatePage);
    return CategoriaformsusrCreatePage;
}());

//# sourceMappingURL=categoriaformsusr-create.js.map

/***/ })

});
//# sourceMappingURL=132.js.map