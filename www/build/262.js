webpackJsonp([262],{

/***/ 1335:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlantilladmcCreatePage; });
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






var PlantilladmcCreatePage = /** @class */ (function () {
    function PlantilladmcCreatePage(storage, msj, translateService, viewCtrl, authService, navCtrl, navParams, _FB, actionSheetCtrl, events) {
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
            nombre: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            descripcion: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            tipo: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            orden: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            contenido: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            estado: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required]
        });
    }
    PlantilladmcCreatePage.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get('username').then(function (value) {
            _this.username = value;
        });
    };
    PlantilladmcCreatePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.idplantilla = this.navParams.data.record2.idplantilla;
        this.nidevento = this.navParams.data.record2.nidevento;
        this.idempresa = this.navParams.data.record2.idempresa;
        this.idplantillam = this.navParams.data.record2.idplantillam;
        if (this.navParams.get("record") == null) {
            this.orden = 10;
            this.authService.getReg(this.idplantilla + '/' + this.idempresa + '/' + this.idplantillam + '/orden', 'plantilladmcs').then(function (data) {
                if (data) {
                    var aa = data;
                    _this.orden = aa.orden;
                    _this.orden = _this.orden + 10;
                }
            }, function (err) {
                _this.msj.showError3('Error', err.error);
                // this.translateService.get('NO_OPERACION').subscribe((value) => { this.msj.showError3('Error',value);  })  
            });
            this.translateService.get('ITEM_CREATE_TITLE').subscribe(function (value) {
                _this.pageTitle = value;
            });
            this.isDisablednit = true;
        }
        else {
            this._ID = this.navParams.data.record._id;
            this.nombre = this.navParams.data.record.nombre;
            this.tipo = this.navParams.data.record.tiporecurso;
            this.orden = this.navParams.data.record.orden;
            this.descripcion = this.navParams.data.record.descripcion;
            this.form.controls['contenido'].setValue(this.navParams.data.record.contenido);
            this.estado = this.navParams.data.record.estado;
            this.isDisablednit = false;
            this.translateService.get('ITEM_UPDATE_TITLE').subscribe(function (value) {
                _this.pageTitle = value;
            });
        }
    };
    PlantilladmcCreatePage.prototype.manageGallery = function () {
        var _this = this;
        var creat = 'Actualiza';
        if (this.navParams.get("record") == null) {
            creat = 'Crea';
        }
        var options = {
            idempresa: this.idempresa,
            idplantilla: this.idplantilla,
            idplantilladm: this.idplantillam,
            tiporecurso: this.form.controls['tipo'].value,
            nombre: this.form.controls['nombre'].value + ' ',
            descripcion: this.form.controls['descripcion'].value,
            orden: this.form.controls['orden'].value,
            contenido: this.form.get('contenido').value.trim(),
            archivos: '',
            marcas: '',
            url: '',
            estado: this.form.controls['estado'].value,
            bitacora: { idempresa: this.idempresa, idafiliado: '', email: this.username, permiso: creat, accion: creat + ' plantilla modulos contenido ' }
        };
        if (this.navParams.get("record") == null) {
            if (options) {
                this.authService.createReg('', options, 'plantilladmcs').then(function (result) {
                    var dd = result;
                    var idtt = dd._id;
                    var details = {
                        email: idtt + "@gmail.com",
                        role: 'user',
                        password: "Admin123@",
                        nombre: dd.nombre,
                        cui: idtt,
                        direccion: '',
                        telefono: '',
                        sexo: '',
                        foto: '',
                        lenguaje: 'Español',
                        estado: 'Activo',
                        nov: idtt,
                        unidad: '5bad21a11c7b5027147e31d9',
                        interno: '0',
                        estadoemail: '0',
                        codpersonal: idtt,
                        tiposuscriptor: '5be1b6479c9f2200e8311570',
                        APP: _this.idempresa,
                        accesoestado: '',
                        accesohora: '',
                        bitacora: { idempresa: _this.idempresa, idafiliado: '', email: idtt + "@gmail.com", permiso: 'Creacion', accion: 'Creacion de nuevo usuario' }
                    };
                    _this.authService.createAPITOKEN(details, '/api/auth/register').then(function (result) {
                        if (!_this.form.valid) {
                            return;
                        }
                        console.log(result);
                        _this.viewCtrl.dismiss(result);
                    }, function (err) {
                        _this.msj.showError3('Advertencia', err.error);
                    });
                }, function (err) {
                    _this.msj.showError3('Error', err.error);
                });
            }
        }
        else {
            if (options) {
                this.authService.createReg(this._ID, options, 'plantilladmcs').then(function (result) {
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
    PlantilladmcCreatePage.prototype.cancel = function () {
        this.viewCtrl.dismiss();
    };
    PlantilladmcCreatePage.prototype.done = function () {
        if (!this.form.valid) {
            return;
        }
        //this.viewCtrl.dismiss(this.form.value);
    };
    PlantilladmcCreatePage.prototype.addimagen = function () {
        /*
            let addModal = this._MODAL .create('GaleriaimgListPage', {idempresa:this.idempresa},{showBackdrop: true,enableBackdropDismiss: false});
            addModal.onDidDismiss(data => {
              if (data) {
              
              }
            })
            addModal.present();
            */
        this.navCtrl.push('GaleriaimgListPage', { idempresa: this.idempresa });
    };
    PlantilladmcCreatePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-plantilladmc-create',template:/*ion-inline-start:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\BLEARNING\plantilladmc-create\plantilladmc-create.html"*/'<ion-header>\n    <ion-navbar>\n      <ion-title>{{pageTitle}}</ion-title>\n                                 \n      <ion-buttons end>\n          <button (click)="cancel()" icon-only ion-button padding-right>\n              <ion-icon name="md-close"></ion-icon>\n            </button>\n          <button  (click)="manageGallery()"  [disabled]="!form.valid" icon-only ion-button padding-right>\n              <ion-icon name="done-all"></ion-icon>\n            </button>\n      </ion-buttons>\n    </ion-navbar>\n  </ion-header>\n  <ion-content padding>\n    <form     [formGroup]="form"  text-wrap>\n      <ion-list>\n            \n          <ion-item margin-bottom>\n              <ion-label>Tipo</ion-label>\n              <ion-select [(ngModel)]="tipo" [formControl]="form.controls[\'tipo\']">\n                <ion-option value="Pagina">Pagina</ion-option>\n                <ion-option value="Video">Video</ion-option>\n                <ion-option value="Foto">Foto</ion-option>\n                <ion-option value="Archivo">Archivo</ion-option>\n                <ion-option value="Etiqueta">Etiqueta</ion-option>\n              </ion-select>\n           </ion-item>\n           <ion-item class="invalid" *ngIf="!form.controls.tipo.valid && (form.controls.tipo.dirty || form.controls.tipo.touched)" text-wrap>\n              <ion-icon name="warning"></ion-icon>\n              Ingrese un tipo valido\n             </ion-item>\n             \n\n             <ion-item margin-bottom>\n              <ion-label>Orden</ion-label>\n              <ion-input\n                 type="Number"\n                 [(ngModel)]="orden"\n                 [formControl]="form.controls[\'orden\']"></ion-input>\n           </ion-item>\n           <ion-item class="invalid" *ngIf="!form.controls.orden.valid && (form.controls.orden.dirty || form.controls.orden.touched)" text-wrap>\n            <ion-icon name="warning"></ion-icon>\n            Ingrese un orden valido\n           </ion-item>\n          <ion-item margin-bottom>\n             <ion-label>Nombre</ion-label>\n             <ion-input\n                type="text"\n                [(ngModel)]="nombre" [formControl]="form.controls[\'nombre\']"\n               ></ion-input>\n          </ion-item>\n          <ion-item class="invalid" *ngIf="!form.controls.nombre.valid && (form.controls.nombre.dirty || form.controls.nombre.touched)" text-wrap>\n            <ion-icon name="warning"></ion-icon>\n            {{ \'NOMBRET\' | translate }}\n           </ion-item>\n           <ion-item margin-bottom>\n            <ion-label>Descripción</ion-label>\n            <ion-textarea\n               type="text" rows="3"\n               [(ngModel)]="descripcion" [formControl]="form.controls[\'descripcion\']"\n              ></ion-textarea>\n         </ion-item>\n         <ion-item class="invalid" *ngIf="!form.controls.descripcion.valid && (form.controls.descripcion.dirty || form.controls.descripcion.touched)" text-wrap>\n           <ion-icon name="warning"></ion-icon>\n           Ingrese una descripción valida\n          </ion-item>\n\n\n           \n          \n        \n  \n     <ion-item margin-bottom>   \n      <ion-label>Estado</ion-label>\n      <ion-select [(ngModel)]="estado" [formControl]="form.controls[\'estado\']">\n        <ion-option value="Activo">Activo</ion-option>\n        <ion-option value="Inactivo">Inactivo</ion-option>\n      </ion-select>\n   </ion-item>\n   <ion-item class="invalid" *ngIf="!form.controls.estado.valid && (form.controls.estado.dirty || form.controls.estado.touched)" text-wrap>\n    <ion-icon name="warning"></ion-icon>\n    {{ \'ESTADOT\' | translate }}\n   </ion-item>\n  \n    \n         \n           \n         \n           \n       </ion-list>   \n     \n       <ion-label>Diseñe el contenido</ion-label>\n    <!--   <textarea [froalaEditor] formControlName="descripcion" [(froalaModel)]="descripcion"></textarea>\n       <div [froalaView]="descripcion"></div>\n    -->   \n\n       <editor #editorx  [formControl]="form.controls[\'contenido\']" \n apiKey="vzkfhlcxdaldqrfvuan31fgz2v2ath4l417ntp2lmbr64nek" [init]="{\n  plugins: \'link image fullscreen  table powerpaste advcode searchreplace visualblocks hr pagebreak nonbreaking anchor toc advlist lists wordcount tinymcespellchecker a11ychecker imagetools\',\n  toolbar: \'formatselect | bold italic strikethrough forecolor backcolor permanentpen formatpainter | link image media pageembed | alignleft aligncenter alignright alignjustify  | numlist bullist outdent indent | removeformat | addcomment\',\n \n height: 280,\n menubar: true,\n image_caption: true,\n mobile: {\n  theme: \'mobile\',\n  plugins: [ \'autosave\', \'lists\', \'autolink\',\'table\' ],\n  toolbar: [ \'undo\', \'bold\', \'italic\', \'styleselect\' ]\n}\n}"></editor>   \n\n\n       <ion-item class="invalid" *ngIf="!form.controls.contenido.valid && (form.controls.contenido.dirty || form.controls.contenido.touched)" text-wrap>\n          <ion-icon name="warning"></ion-icon>\n          Ingrese un contenido valido\n         </ion-item>\n       <br>\n     \n       \n    </form>\n  \n\n    \n    <ion-fab top right edge>  \n        <br>  \n        <br> \n        <button ion-fab color="greem" (click)="addimagen()"> <ion-icon  name="images"></ion-icon></button>\n    \n     \n    </ion-fab>\n  \n  </ion-content>'/*ion-inline-end:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\BLEARNING\plantilladmc-create\plantilladmc-create.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3__providers__["d" /* NotificationProvider */], __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["F" /* ViewController */], __WEBPACK_IMPORTED_MODULE_3__providers__["a" /* Auth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */]])
    ], PlantilladmcCreatePage);
    return PlantilladmcCreatePage;
}());

//# sourceMappingURL=plantilladmc-create.js.map

/***/ }),

/***/ 895:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlantilladmcCreatePageModule", function() { return PlantilladmcCreatePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__plantilladmc_create__ = __webpack_require__(1335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular_froala_wysiwyg__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tinymce_tinymce_angular__ = __webpack_require__(452);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var PlantilladmcCreatePageModule = /** @class */ (function () {
    function PlantilladmcCreatePageModule() {
    }
    PlantilladmcCreatePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__plantilladmc_create__["a" /* PlantilladmcCreatePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__plantilladmc_create__["a" /* PlantilladmcCreatePage */]), __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["b" /* TranslateModule */].forChild(),
                __WEBPACK_IMPORTED_MODULE_3_angular_froala_wysiwyg__["a" /* FroalaEditorModule */], __WEBPACK_IMPORTED_MODULE_3_angular_froala_wysiwyg__["b" /* FroalaViewModule */], __WEBPACK_IMPORTED_MODULE_5__tinymce_tinymce_angular__["a" /* EditorModule */]
            ],
        })
    ], PlantilladmcCreatePageModule);
    return PlantilladmcCreatePageModule;
}());

//# sourceMappingURL=plantilladmc-create.module.js.map

/***/ })

});
//# sourceMappingURL=262.js.map