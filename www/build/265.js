webpackJsonp([265],{

/***/ 1331:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlantilladCreatePage; });
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






var PlantilladCreatePage = /** @class */ (function () {
    function PlantilladCreatePage(storage, msj, translateService, viewCtrl, authService, navCtrl, navParams, _FB, actionSheetCtrl, events) {
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
        // Define form validation - VERY basic!
        this.form = this._FB.group({
            descripcion: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            tipo: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            estado: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required]
        });
    }
    PlantilladCreatePage.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get('username').then(function (value) {
            _this.username = value;
        });
    };
    PlantilladCreatePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.idevento = this.navParams.data.record2.idplantilla;
        this.nidevento = this.navParams.data.record2.nombrep;
        this.idempresa = this.navParams.data.record2.idempresa;
        if (this.navParams.get("record") == null) {
            this.translateService.get('ITEM_CREATE_TITLE').subscribe(function (value) {
                _this.pageTitle = value;
            });
            this.isDisablednit = true;
        }
        else {
            this._ID = this.navParams.data.record._id;
            this.nombre = this.navParams.data.record.nombre;
            this.tipo = this.navParams.data.record.tipo;
            //   this.descripcion		=	this.navParams.data.record.descripcion;
            this.form.controls['descripcion'].setValue(this.navParams.data.record.descripcion);
            this.estado = this.navParams.data.record.estado;
            this.isDisablednit = false;
            this.translateService.get('ITEM_UPDATE_TITLE').subscribe(function (value) {
                _this.pageTitle = value;
            });
        }
    };
    PlantilladCreatePage.prototype.manageGallery = function () {
        var _this = this;
        var creat = 'Actualiza';
        if (this.navParams.get("record") == null) {
            creat = 'Crea';
        }
        var options = {
            idempresa: this.idempresa,
            idplantilla: this.idevento,
            tipo: this.form.controls['tipo'].value,
            nombre: this.form.controls['tipo'].value + ' ',
            descripcion: this.form.get('descripcion').value.trim(),
            estado: this.form.controls['estado'].value,
            bitacora: { idempresa: this.idempresa, idafiliado: '', email: this.username, permiso: creat, accion: creat + ' plantillads ' }
        };
        if (this.navParams.get("record") == null) {
            if (options) {
                this.authService.createReg('', options, 'plantillads').then(function (result) {
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
        else {
            if (options) {
                this.authService.createReg(this._ID, options, 'plantillads').then(function (result) {
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
    PlantilladCreatePage.prototype.cancel = function () {
        this.viewCtrl.dismiss();
    };
    PlantilladCreatePage.prototype.done = function () {
        if (!this.form.valid) {
            return;
        }
        //this.viewCtrl.dismiss(this.form.value);
    };
    PlantilladCreatePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-plantillad-create',template:/*ion-inline-start:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\BLEARNING\plantillad-create\plantillad-create.html"*/'<ion-header>\n    <ion-navbar>\n      <ion-title>{{pageTitle}}</ion-title>\n            \n      <ion-buttons end>\n          <button (click)="cancel()" icon-only ion-button padding-right>\n              <ion-icon name="md-close"></ion-icon>\n            </button>\n          <button  (click)="manageGallery()"  [disabled]="!form.valid" icon-only ion-button padding-right>\n              <ion-icon name="done-all"></ion-icon>\n            </button>\n      </ion-buttons>\n    </ion-navbar>\n  </ion-header>\n  <ion-content padding>   \n    <form     [formGroup]="form"  text-wrap>\n      <ion-list>\n        \n          <ion-item margin-bottom>\n              <ion-label>Tipo</ion-label>\n              <ion-select [(ngModel)]="tipo" [formControl]="form.controls[\'tipo\']">\n                  <ion-option value="Descripción general">Descripción general</ion-option>\n                <ion-option value="Información sobre los Instructores">Información sobre los Instructores</ion-option>\n                <ion-option value="Que aprenderas, Requisitos y Para quién es este curso">Que aprenderas, Requisitos y Para quién es este curso</ion-option>\n                \n              </ion-select>\n           </ion-item>\n           <ion-item class="invalid" *ngIf="!form.controls.tipo.valid && (form.controls.tipo.dirty || form.controls.tipo.touched)" text-wrap>\n              <ion-icon name="warning"></ion-icon>\n              Ingrese un tipo valido\n             </ion-item>\n             \n\n           \n          \n        \n  \n     <ion-item margin-bottom>\n      <ion-label>Estado</ion-label>\n      <ion-select [(ngModel)]="estado" [formControl]="form.controls[\'estado\']">\n        <ion-option value="Activo">Activo</ion-option>\n        <ion-option value="Inactivo">Inactivo</ion-option>\n      </ion-select>\n   </ion-item>\n   <ion-item class="invalid" *ngIf="!form.controls.estado.valid && (form.controls.estado.dirty || form.controls.estado.touched)" text-wrap>\n    <ion-icon name="warning"></ion-icon>\n    {{ \'ESTADOT\' | translate }}\n   </ion-item>\n  \n    \n         \n           \n         \n         \n       </ion-list>\n       <ion-label>Diseñe el contenido</ion-label>\n    <!--   <textarea [froalaEditor] formControlName="descripcion" [(froalaModel)]="descripcion"></textarea>\n       <div [froalaView]="descripcion"></div>\n    -->\n\n       <editor #editorx  [formControl]="form.controls[\'descripcion\']" \n apiKey="vzkfhlcxdaldqrfvuan31fgz2v2ath4l417ntp2lmbr64nek" [init]="{\n  plugins: \'link image\',\n height: 320,\n menubar: true,\n mobile: {\n  theme: \'mobile\',\n  plugins: [ \'autosave\', \'lists\', \'autolink\' ],\n  toolbar: [ \'undo\', \'bold\', \'italic\', \'styleselect\' ]\n}\n}"></editor>   \n\n\n       <ion-item class="invalid" *ngIf="!form.controls.descripcion.valid && (form.controls.descripcion.dirty || form.controls.descripcion.touched)" text-wrap>\n          <ion-icon name="warning"></ion-icon>\n          Ingrese una descripción valida\n         </ion-item>\n       <br>\n    \n     \n       \n    </form>\n  \n  \n  </ion-content>'/*ion-inline-end:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\BLEARNING\plantillad-create\plantillad-create.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3__providers__["d" /* NotificationProvider */], __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["F" /* ViewController */], __WEBPACK_IMPORTED_MODULE_3__providers__["a" /* Auth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */]])
    ], PlantilladCreatePage);
    return PlantilladCreatePage;
}());

//# sourceMappingURL=plantillad-create.js.map

/***/ }),

/***/ 891:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlantilladCreatePageModule", function() { return PlantilladCreatePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__plantillad_create__ = __webpack_require__(1331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular_froala_wysiwyg__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tinymce_tinymce_angular__ = __webpack_require__(452);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var PlantilladCreatePageModule = /** @class */ (function () {
    function PlantilladCreatePageModule() {
    }
    PlantilladCreatePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__plantillad_create__["a" /* PlantilladCreatePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__plantillad_create__["a" /* PlantilladCreatePage */]), __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["b" /* TranslateModule */].forChild(),
                __WEBPACK_IMPORTED_MODULE_3_angular_froala_wysiwyg__["a" /* FroalaEditorModule */], __WEBPACK_IMPORTED_MODULE_3_angular_froala_wysiwyg__["b" /* FroalaViewModule */], __WEBPACK_IMPORTED_MODULE_5__tinymce_tinymce_angular__["a" /* EditorModule */]
            ],
        })
    ], PlantilladCreatePageModule);
    return PlantilladCreatePageModule;
}());

//# sourceMappingURL=plantillad-create.module.js.map

/***/ })

});
//# sourceMappingURL=265.js.map