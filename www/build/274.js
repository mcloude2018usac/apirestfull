webpackJsonp([274],{

/***/ 1321:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MarketmailCreatePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_image_image__ = __webpack_require__(448);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_camera__ = __webpack_require__(197);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MarketmailCreatePage = /** @class */ (function () {
    function MarketmailCreatePage(_IMAGE, storage, msj, translateService, viewCtrl, authService, navCtrl, navParams, _FB, actionSheetCtrl, events) {
        var _this = this;
        this._IMAGE = _IMAGE;
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
        this.username = "usuarioforms";
        this.tiposus = [];
        this.vidgrupo = [];
        this.f1 = './assets/img/blanco.png';
        this.esconde1 = true;
        this.text = 'hello world';
        this.createdCode = null;
        this.scannedCode = null;
        this.vtarifa = [];
        // Define form validation - VERY basic!
        this.form = this._FB.group({
            fecha: [''],
            estado: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            nombre: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            titulo: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            texto: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            idgrupo: [''],
            f1: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            f2: [''],
            ubicacion: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            autor: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            presenta: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required]
        });
        this.translateService.get('APPX').subscribe(function (value) {
            _this.idempresa = value;
        });
        this.esconde1 = true;
    }
    MarketmailCreatePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.titulox = this.navParams.data.titulo;
        this.authService.getReg(this.navParams.data.idempresa + '/' + this.navParams.data.idcategoria + '/todos', 'marketgrupos').then(function (data) {
            _this.vidgrupo = data;
        }, function (err) {
            _this.msj.showError3('Error', err.error);
        });
        this.storage.get('username').then(function (value) {
            _this.username = value;
        });
        this.storage.get('tiposus').then(function (value) {
            _this.tiposus = value.split(',');
        });
        if (this.navParams.get("record") == null) {
        }
        else {
            this._ID = this.navParams.data.record._id;
            this.titulo = this.navParams.data.record.titulo;
            this.estado = this.navParams.data.record.estado;
            this.idgrupo = this.navParams.data.record.grupo;
            this.fecha = this.navParams.data.record.fecha;
            this.nombre = this.navParams.data.record.nombre;
            this.foto = this.navParams.data.record.f1;
            this.f1 = this.navParams.data.record.f1;
            this.image = this.navParams.data.record.f1;
            this.ubicacion = this.navParams.data.record.ubicacion;
            this.autor = this.navParams.data.record.autor;
            this.presenta = this.navParams.data.record.presenta;
            this.form.controls['texto'].setValue(this.navParams.data.record.texto);
            //  this.texto			=	this.navParams.data.record.texto;
        }
    };
    MarketmailCreatePage.prototype.manageGallery = function () {
        var _this = this;
        var creat = 'Actualiza';
        if (this.navParams.get("record") == null) {
            creat = 'Crea';
        }
        //var aa=this.tinymce.get('ID');
        var ff = '2019-04-27T18:56:00.000Z';
        var gg = '5cc1cf287f78d728147cefe2';
        if (this.esconde1 == false) {
            ff = this.form.controls['fecha'].value;
            gg = this.form.controls['idgrupo'].value;
        }
        else {
            this.fecha = ff;
            this.idgrupo = gg;
        }
        var options = {
            idempresa: this.idempresa,
            idcategoria: this.navParams.data.idcategoria,
            nombre: this.form.controls['nombre'].value,
            titulo: this.form.controls['titulo'].value,
            texto: this.form.get('texto').value.trim(),
            fecha: ff,
            grupo: gg,
            estado: this.form.controls['estado'].value,
            f1: this.f1,
            f2: '',
            ubicacion: this.form.controls['ubicacion'].value,
            autor: this.form.controls['autor'].value,
            presenta: this.form.controls['presenta'].value,
            bitacora: { idempresa: this.idempresa, idafiliado: '', email: this.username, permiso: creat, accion: creat + ' Departamento ' }
        };
        if (this.navParams.get("record") == null) {
            if (options) {
                this.authService.createReg('', options, 'mailmarkets').then(function (result) {
                    //crear el usuario receptor del foro
                    var dd = result;
                    var idtt = dd._id;
                    var details = {
                        idempresa: _this.idempresa,
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
                        APP: _this.navParams.data.idempresa,
                        accesoestado: 'foro',
                        accesohora: '',
                        bitacora: { idempresa: _this.navParams.data.idempresa, idafiliado: '', email: idtt + "@gmail.com", permiso: 'Creacion', accion: 'Creacion de nuevo usuario' }
                    };
                    _this.authService.createAPITOKEN(details, '/api/auth/register').then(function (result) {
                        if (!_this.form.valid) {
                            return;
                        }
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
                this.authService.createReg(this._ID, options, 'mailmarkets').then(function (result) {
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
    MarketmailCreatePage.prototype.cancel = function () {
        this.viewCtrl.dismiss();
    };
    MarketmailCreatePage.prototype.updateProfileImage = function (op) {
        var _this = this;
        this.opimg = op;
        var t1, t2;
        this.translateService.get('SELECCIONE_IMAGEN').subscribe(function (value) {
            t1 = value;
        });
        this.translateService.get('TOME_IMAGEN').subscribe(function (value) {
            t2 = value;
        });
        var actionSheet = this.actionSheetCtrl.create({
            title: t1,
            buttons: [
                {
                    text: t2,
                    handler: function () {
                        _this.takePhotograph(op);
                    }
                },
                {
                    text: t1,
                    handler: function () {
                        _this.selectImage(op);
                    }
                }
            ]
        });
        actionSheet.present();
    };
    MarketmailCreatePage.prototype.takePhotograph = function (op) {
        var _this = this;
        if (__WEBPACK_IMPORTED_MODULE_7__ionic_native_camera__["a" /* Camera */]['installed']()) {
            this._IMAGE
                .takePhotograph()
                .then(function (image) {
                _this.f1 = image.toString();
                // if(op==1){     this.f1 	= image.toString();}
                //  if(op==2) {    this.f2 	= image.toString();}
            })
                .catch(function (err) {
                console.log(err);
            });
        }
        else {
            this.fileInput.nativeElement.click();
        }
    };
    MarketmailCreatePage.prototype.selectImage = function (op) {
        var _this = this;
        if (__WEBPACK_IMPORTED_MODULE_7__ionic_native_camera__["a" /* Camera */]['installed']()) {
            this._IMAGE
                .selectPhotograph()
                .then(function (image) {
                _this.f1 = image.toString();
            })
                .catch(function (err) {
                console.log(err);
            });
        }
        else {
            this.fileInput.nativeElement.click();
        }
    };
    MarketmailCreatePage.prototype.processWebImage = function (event, op) {
        var _this = this;
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();
            reader.onload = function (readerEvent) {
                _this.f1 = readerEvent.target.result;
                _this._IMAGE.generateFromImage(_this.f1, 200, 200, 1, function (data) {
                    _this.f1 = data;
                });
            };
            reader.readAsDataURL(event.target.files[0]);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('fileInput'),
        __metadata("design:type", Object)
    ], MarketmailCreatePage.prototype, "fileInput", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('fileInput'),
        __metadata("design:type", Object)
    ], MarketmailCreatePage.prototype, "fileInput2", void 0);
    MarketmailCreatePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-marketmail-create',template:/*ion-inline-start:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\BENCHMARK\marketmail-create\marketmail-create.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>{{titulox}}</ion-title>\n    <ion-buttons start>\n        <button (click)="cancel()" icon-only ion-button padding-right>\n            <ion-icon name="md-close"></ion-icon>\n          </button>\n       \n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content padding > \n\n \n  <form     [formGroup]="form"   text-wrap>\n    <ion-list>\n         \n        \n      <ion-item [hidden]="esconde1" margin-bottom>\n        <ion-label class="my-label18" color="secondary2">Fecha y hora:</ion-label>\n        <ion-datetime displayFormat="DD/MM/YYYY hh:mm A"  \n        [formControl]="form.controls[\'fecha\']" [(ngModel)]="fecha"></ion-datetime>\n      </ion-item>\n      <ion-item class="invalid" *ngIf="!form.controls.fecha.valid && (form.controls.fecha.dirty || form.controls.fecha.touched)" text-wrap>\n        <ion-icon name="warning"></ion-icon>\n        Ingrese una fecha publicación\n      </ion-item>\n\n      <ion-item-group>\n        <ion-item>\n           <img [src]="f1"   class="circle-pic"  height="150 px" width="150 px">\n           <input   type="hidden"    name="imagen" [formControl]="form.controls[\'f1\']"    [(ngModel)]="f1">\n        </ion-item>\n        <ion-item>\n            <a  ion-button    block  margin-bottom    color="secondary"  (click)="updateProfileImage()">                Seleccione image         </a>\n            <input type="file" accept="image/*" #fileInput style="visibility: hidden; height: 0px" (change)="processWebImage($event)" />\n         </ion-item>\n     </ion-item-group>\n\n\n      <ion-item [hidden]="esconde1" text-wrap>       \n        <ion-label   class="my-label18" color="secondary2"> Grupo destinatario  </ion-label>\n  \n        <ionic-selectable placeholder="Seleccione un valor"  [canSearch]="true" \n        searchPlaceholder="Buscar un registro" [shouldBackdropClose]="false" \n        modalCssClass="modal"   closeButtonSlot="start"             [searchFailText]="\'No Existen registros.\'" \n         clearButtonText="Limpiar"\n         itemValueField="_id" itemTextField="nombre" [canClear]="true"\n        [formControl]="form.controls[\'idgrupo\']"     [(ngModel)]="idgrupo" [items]="vidgrupo"     item-content text-wrap> \n       <ng-template ionicSelectableCloseButtonTemplate><ion-icon name="close-circle" style="font-size: 24px;"></ion-icon>              </ng-template>\n       <ng-template ionicSelectableMessageTemplate>Seleccione un Registro.</ng-template>\n       <ng-template ionicSelectableTitleTemplate> Grupos destinatarios </ng-template>\n  \n   </ionic-selectable>\n             \n         \n      </ion-item>\n      <ion-item class="invalid" *ngIf="!form.controls.idgrupo.valid \n      && (form.controls.idgrupo.dirty || form.controls.idgrupo.touched)"  text-wrap>\n       \n        Ingrese un grupo valido\n     </ion-item>\n\n           \n     <ion-item margin-bottom>\n      <ion-label class="my-label18" color="secondary2" >Ponencia:</ion-label>\n      <ion-input         type="text"     [(ngModel)]="titulo" [formControl]="form.controls[\'titulo\']"\n       ></ion-input>\n   </ion-item>\n   <ion-item class="invalid" *ngIf="!form.controls.titulo.valid && (form.controls.titulo.dirty || form.controls.titulo.touched)" text-wrap readonly>\n     <ion-icon name="warning"></ion-icon>\n    Ingrese un titulo valido\n    </ion-item>  \n\n\n        <ion-item margin-bottom>\n           <ion-label class="my-label18" color="secondary2" >Descripción:</ion-label>\n           <ion-textarea   rows=\'3\'        type="text"      [(ngModel)]="nombre" [formControl]="form.controls[\'nombre\']"\n            ></ion-textarea>\n        </ion-item>\n        <ion-item class="invalid" *ngIf="!form.controls.nombre.valid && (form.controls.nombre.dirty || form.controls.nombre.touched)" text-wrap readonly>\n          <ion-icon name="warning"></ion-icon>\n          Ingrese una descripcion valida\n         </ion-item>\n\n       \n         \n    \n        <ion-item margin-bottom>\n          <ion-label class="my-label18" color="secondary2" >Ubicación:</ion-label>\n          <ion-textarea   rows=\'3\'        type="text"      [(ngModel)]="ubicacion" [formControl]="form.controls[\'ubicacion\']"\n           ></ion-textarea>\n       </ion-item>\n       <ion-item class="invalid" *ngIf="!form.controls.ubicacion.valid && (form.controls.ubicacion.dirty || form.controls.ubicacion.touched)" text-wrap readonly>\n         <ion-icon name="warning"></ion-icon>\n         Ingrese una ubicación valida\n        </ion-item>\n\n        \n    \n        <ion-item margin-bottom>\n          <ion-label class="my-label18" color="secondary2" >Autor:</ion-label>\n          <ion-textarea   rows=\'3\'        type="text"      [(ngModel)]="autor" [formControl]="form.controls[\'autor\']"\n           ></ion-textarea>\n       </ion-item>\n       <ion-item class="invalid" *ngIf="!form.controls.autor.valid && (form.controls.autor.dirty || form.controls.autor.touched)" text-wrap readonly>\n         <ion-icon name="warning"></ion-icon>\n         Ingrese un autor valida\n        </ion-item>\n\n        \n    \n        <ion-item margin-bottom>\n          <ion-label class="my-label18" color="secondary2" >presenta:</ion-label>\n          <ion-textarea   rows=\'3\'        type="text"      [(ngModel)]="presenta" [formControl]="form.controls[\'presenta\']"\n           ></ion-textarea>\n       </ion-item>\n       <ion-item class="invalid" *ngIf="!form.controls.presenta.valid && (form.controls.presenta.dirty || form.controls.presenta.touched)" text-wrap readonly>\n         <ion-icon name="warning"></ion-icon>\n         Ingrese un presenta valido\n        </ion-item>\n\n   \n       \n        \n        <ion-item margin-bottom>\n          <ion-label>Estado</ion-label>\n          <ion-select [(ngModel)]="estado" [formControl]="form.controls[\'estado\']">\n            <ion-option value="Activo">Activo</ion-option>\n            <ion-option value="Inactivo">Inactivo</ion-option>\n          </ion-select>\n       </ion-item>\n       <ion-item class="invalid" *ngIf="!form.controls.estado.valid && (form.controls.estado.dirty || form.controls.estado.touched)" text-wrap>\n        <ion-icon name="warning"></ion-icon>\n        {{ \'ESTADOT\' | translate }}\n       </ion-item>\n        \n       \n     </ion-list>\n<!--vzkfhlcxdaldqrfvuan31fgz2v2ath4l417ntp2lmbr64nek\n  <textarea [froalaEditor] formControlName="texto" [(froalaModel)]="texto"></textarea>\n     <div [froalaView]="texto"></div>\n-->\n\n\n<editor #editorx  [formControl]="form.controls[\'texto\']" \napiKey="vzkfhlcxdaldqrfvuan31fgz2v2ath4l417ntp2lmbr64nek" [init]="{\n  plugins: \'link image fullscreen  table powerpaste advcode searchreplace visualblocks hr pagebreak nonbreaking anchor toc advlist lists wordcount tinymcespellchecker a11ychecker imagetools\',\n  toolbar: \'formatselect | bold italic strikethrough forecolor backcolor permanentpen formatpainter | link image media pageembed | alignleft aligncenter alignright alignjustify  | numlist bullist outdent indent | removeformat | addcomment\',\n \n height: 280,\n menubar: true,\n image_caption: true,\n mobile: {\n  theme: \'mobile\',\n  plugins: [ \'autosave\', \'lists\', \'autolink\',\'table\' ],\n  toolbar: [ \'undo\', \'bold\', \'italic\', \'styleselect\' ]\n}\n}"></editor>   \n\n   \n     <ion-row>\n      <ion-col text-center>\n        <button  ion-button block color="secondary" (click)="manageGallery()" [disabled]="!form.valid" strong>\n          GUARDAR\n        </button>\n      </ion-col>\n    </ion-row>\n     \n  </form>\n\n\n</ion-content>'/*ion-inline-end:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\BENCHMARK\marketmail-create\marketmail-create.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__providers_image_image__["a" /* ImageProvider */], __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3__providers__["d" /* NotificationProvider */], __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["F" /* ViewController */], __WEBPACK_IMPORTED_MODULE_3__providers__["a" /* Auth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */]])
    ], MarketmailCreatePage);
    return MarketmailCreatePage;
}());

//# sourceMappingURL=marketmail-create.js.map

/***/ }),

/***/ 881:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarketmailCreatePageModule", function() { return MarketmailCreatePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__marketmail_create__ = __webpack_require__(1321);
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



var MarketmailCreatePageModule = /** @class */ (function () {
    function MarketmailCreatePageModule() {
    }
    MarketmailCreatePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__marketmail_create__["a" /* MarketmailCreatePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__marketmail_create__["a" /* MarketmailCreatePage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild() //,QuillModule
                ,
                __WEBPACK_IMPORTED_MODULE_4_angular_froala_wysiwyg__["a" /* FroalaEditorModule */], __WEBPACK_IMPORTED_MODULE_4_angular_froala_wysiwyg__["b" /* FroalaViewModule */], __WEBPACK_IMPORTED_MODULE_5__tinymce_tinymce_angular__["a" /* EditorModule */], __WEBPACK_IMPORTED_MODULE_6_ionic_selectable__["b" /* IonicSelectableModule */]
            ],
        })
    ], MarketmailCreatePageModule);
    return MarketmailCreatePageModule;
}());

//# sourceMappingURL=marketmail-create.module.js.map

/***/ })

});
//# sourceMappingURL=274.js.map