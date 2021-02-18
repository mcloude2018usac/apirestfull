webpackJsonp([281],{

/***/ 1314:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReglamentodCreatePage; });
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






var ReglamentodCreatePage = /** @class */ (function () {
    function ReglamentodCreatePage(storage, msj, translateService, viewCtrl, authService, navCtrl, navParams, _FB, actionSheetCtrl, events) {
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
        this.tiposus = [];
        this.text = 'hello world';
        // Define form validation - VERY basic!
        this.form = this._FB.group({
            nolibro: [''],
            libro: [''],
            notitulo: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            titulo: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            nocapitulo: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            capitulo: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            noparrafo: [''],
            parrafo: [''],
            noarticulo: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            articulo: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            fecha: ['']
        });
    }
    ReglamentodCreatePage.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get('username').then(function (value) {
            _this.username = value;
        });
    };
    ReglamentodCreatePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        ;
        this.storage.get('tiposus').then(function (value) {
            _this.tiposus = value.split(',');
        });
        if (this.navParams.get("record") == null) {
        }
        else {
            this._ID = this.navParams.data.record._id;
            this.nolibro = this.navParams.data.record.nolibro;
            this.libro = this.navParams.data.record.libro;
            this.notitulo = this.navParams.data.record.notitulo;
            this.titulo = this.navParams.data.record.titulo;
            this.nocapitulo = this.navParams.data.record.nocapitulo;
            this.capitulo = this.navParams.data.record.capitulo;
            this.noparrafo = this.navParams.data.record.noparrafo;
            this.parrafo = this.navParams.data.record.parrafo;
            this.noarticulo = this.navParams.data.record.noarticulo;
            this.fecha = this.navParams.data.record.fecha;
            this.form.controls['articulo'].setValue(this.navParams.data.record.articulo);
            //  this.texto			=	this.navParams.data.record.texto;
        }
    };
    ReglamentodCreatePage.prototype.manageGallery = function () {
        var _this = this;
        var creat = 'Actualiza';
        if (this.navParams.get("record") == null) {
            creat = 'Crea';
        }
        var options = {
            idempresa: this.navParams.data.idempresa,
            idreglamento: this.navParams.data.dataxx._id,
            libro: this.form.controls['libro'].value,
            nolibro: this.form.controls['nolibro'].value,
            notitulo: this.form.controls['notitulo'].value,
            titulo: this.form.controls['titulo'].value,
            nocapitulo: this.form.controls['nocapitulo'].value,
            capitulo: this.form.controls['capitulo'].value,
            noparrafo: this.form.controls['noparrafo'].value,
            parrafo: this.form.controls['parrafo'].value,
            noarticulo: this.form.controls['noarticulo'].value,
            articulo: this.form.controls['articulo'].value,
            fecha: this.form.controls['fecha'].value,
            nombre: this.form.controls['titulo'].value + ' ' + this.form.controls['capitulo'].value + ' ' + this.form.controls['articulo'].value,
            bitacora: { idempresa: this.navParams.data.idempresa, idafiliado: '', email: this.username, permiso: creat, accion: creat + ' reglamentod ' }
        };
        if (this.navParams.get("record") == null) {
            if (options) {
                this.authService.createReg('', options, 'reglamentods').then(function (result) {
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
                this.authService.createReg(this._ID, options, 'reglamentods').then(function (result) {
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
    ReglamentodCreatePage.prototype.cancel = function () {
        this.viewCtrl.dismiss();
    };
    ReglamentodCreatePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-reglamentod-create',template:/*ion-inline-start:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\ABOGADOS\reglamentod-create\reglamentod-create.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>{{titulox}}</ion-title>\n    <ion-buttons start>\n        <button (click)="cancel()" icon-only ion-button padding-right>\n            <ion-icon name="md-close"></ion-icon>\n          </button>\n       \n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content padding > \n\n \n  <form     [formGroup]="form"   text-wrap>\n    <ion-list>\n      <ion-item margin-bottom>\n        <ion-label class="my-label18" color="secondary2" >No Libro:</ion-label>\n        <ion-input         type="Number"     [(ngModel)]="nolibro" [formControl]="form.controls[\'nolibro\']"\n         ></ion-input>\n     </ion-item>\n \n <ion-item margin-bottom>\n  <ion-label class="my-label18" color="secondary2" >Libro:</ion-label>\n  <ion-input         type="text"     [(ngModel)]="libro" [formControl]="form.controls[\'libro\']"\n   ></ion-input>\n</ion-item>\n\n\n\n\n        <ion-item margin-bottom>\n            <ion-label class="my-label18" color="secondary2" >No Titulo:</ion-label>\n            <ion-input         type="Number"     [(ngModel)]="notitulo" [formControl]="form.controls[\'notitulo\']"\n             ></ion-input>\n         </ion-item>\n         <ion-item class="invalid" *ngIf="!form.controls.notitulo.valid && (form.controls.notitulo.dirty || form.controls.notitulo.touched)" text-wrap readonly>\n           <ion-icon name="warning"></ion-icon>\n          Ingrese un No titulo valido\n          </ion-item>  \n     <ion-item margin-bottom>\n      <ion-label class="my-label18" color="secondary2" >Titulo:</ion-label>\n      <ion-input         type="text"     [(ngModel)]="titulo" [formControl]="form.controls[\'titulo\']"\n       ></ion-input>\n   </ion-item>\n   <ion-item class="invalid" *ngIf="!form.controls.titulo.valid && (form.controls.titulo.dirty || form.controls.titulo.touched)" text-wrap readonly>\n     <ion-icon name="warning"></ion-icon>\n    Ingrese un titulo valido\n    </ion-item>  \n\n\n\n\n    <ion-item margin-bottom>\n        <ion-label class="my-label18" color="secondary2" >No capitulo:</ion-label>\n        <ion-input         type="Number"     [(ngModel)]="nocapitulo" [formControl]="form.controls[\'nocapitulo\']"       ></ion-input>\n     </ion-item>\n     <ion-item class="invalid" *ngIf="!form.controls.nocapitulo.valid && (form.controls.nocapitulo.dirty || form.controls.nocapitulo.touched)" text-wrap readonly>\n       <ion-icon name="warning"></ion-icon>\n      Ingrese un No capitulo valido\n      </ion-item>  \n \n\n  \n       \n <ion-item margin-bottom>\n  <ion-label class="my-label18" color="secondary2" >Capitulo:</ion-label>\n  <ion-input         type="text"     [(ngModel)]="capitulo" [formControl]="form.controls[\'capitulo\']"\n   ></ion-input>\n</ion-item>\n<ion-item class="invalid" *ngIf="!form.controls.capitulo.valid && (form.controls.capitulo.dirty || form.controls.capitulo.touched)" text-wrap readonly>\n <ion-icon name="warning"></ion-icon>\nIngrese un Capitulo valido\n</ion-item>  \n\n\n<ion-item margin-bottom>\n  <ion-label class="my-label18" color="secondary2" >No Parrafo:</ion-label>\n  <ion-input         type="Number"     [(ngModel)]="noparrafo" [formControl]="form.controls[\'noparrafo\']"\n   ></ion-input>\n</ion-item>\n\n<ion-item margin-bottom>\n<ion-label class="my-label18" color="secondary2" >Parrafo:</ion-label>\n<ion-input         type="text"     [(ngModel)]="parrafo" [formControl]="form.controls[\'parrafo\']"\n></ion-input>\n</ion-item>\n     \n<ion-item margin-bottom>\n    <ion-label class="my-label18" color="secondary2" >No articulo:</ion-label>\n    <ion-input         type="Number"     [(ngModel)]="noarticulo" [formControl]="form.controls[\'noarticulo\']"\n     ></ion-input>\n </ion-item>\n <ion-item class="invalid" *ngIf="!form.controls.noarticulo.valid && (form.controls.noarticulo.dirty || form.controls.noarticulo.touched)" text-wrap readonly>\n   <ion-icon name="warning"></ion-icon>\n  Ingrese un No articulo valido\n  </ion-item>  \n     </ion-list>\n\n \n\n     <ion-item margin-bottom>\n      <ion-label class="my-label18" color="secondary2" >Fecha:</ion-label>\n      <ion-input         type="text"     [(ngModel)]="fecha" [formControl]="form.controls[\'fecha\']"\n      ></ion-input>\n      </ion-item>\n\n<editor #editorx  [formControl]="form.controls[\'articulo\']" \napiKey="vzkfhlcxdaldqrfvuan31fgz2v2ath4l417ntp2lmbr64nek" [init]="{\n  plugins: \'link image fullscreen  table powerpaste advcode searchreplace visualblocks hr pagebreak nonbreaking anchor toc advlist lists wordcount tinymcespellchecker a11ychecker imagetools\',\n  toolbar: \'formatselect | bold italic strikethrough forecolor backcolor permanentpen formatpainter | link image media pageembed | alignleft aligncenter alignright alignjustify  | numlist bullist outdent indent | removeformat | addcomment\',\n \n height: 280,\n menubar: true,\n image_caption: true,\n mobile: {\n  theme: \'mobile\',\n  plugins: [ \'autosave\', \'lists\', \'autolink\',\'table\' ],\n  toolbar: [ \'undo\', \'bold\', \'italic\', \'styleselect\' ]\n}\n}"></editor>   \n\n   \n     <ion-row>\n      <ion-col text-center>\n        <button  ion-button block color="secondary" (click)="manageGallery()" [disabled]="!form.valid" strong>\n          GUARDAR\n        </button>\n      </ion-col>\n    </ion-row>\n     \n  </form>\n\n\n</ion-content>'/*ion-inline-end:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\ABOGADOS\reglamentod-create\reglamentod-create.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3__providers__["d" /* NotificationProvider */], __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["F" /* ViewController */], __WEBPACK_IMPORTED_MODULE_3__providers__["a" /* Auth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */]])
    ], ReglamentodCreatePage);
    return ReglamentodCreatePage;
}());

//# sourceMappingURL=reglamentod-create.js.map

/***/ }),

/***/ 874:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReglamentodCreatePageModule", function() { return ReglamentodCreatePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reglamentod_create__ = __webpack_require__(1314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular_froala_wysiwyg__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tinymce_tinymce_angular__ = __webpack_require__(452);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_selectable__ = __webpack_require__(446);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




//import { QuillModule } from 'ngx-quill'



var ReglamentodCreatePageModule = /** @class */ (function () {
    function ReglamentodCreatePageModule() {
    }
    ReglamentodCreatePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__reglamentod_create__["a" /* ReglamentodCreatePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__reglamentod_create__["a" /* ReglamentodCreatePage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild() //,QuillModule
                ,
                __WEBPACK_IMPORTED_MODULE_4_angular_froala_wysiwyg__["a" /* FroalaEditorModule */], __WEBPACK_IMPORTED_MODULE_4_angular_froala_wysiwyg__["b" /* FroalaViewModule */], __WEBPACK_IMPORTED_MODULE_5__tinymce_tinymce_angular__["a" /* EditorModule */], __WEBPACK_IMPORTED_MODULE_6_ionic_selectable__["b" /* IonicSelectableModule */]
            ],
        })
    ], ReglamentodCreatePageModule);
    return ReglamentodCreatePageModule;
}());

//# sourceMappingURL=reglamentod-create.module.js.map

/***/ })

});
//# sourceMappingURL=281.js.map