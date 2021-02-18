webpackJsonp([263],{

/***/ 1334:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlantilladmCreatePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_image_image__ = __webpack_require__(448);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(104);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var PlantilladmCreatePage = /** @class */ (function () {
    function PlantilladmCreatePage(alertCtrl, storage, _IMAGE, msj, translateService, viewCtrl, authService, navCtrl, navParams, _FB, actionSheetCtrl, events) {
        this.alertCtrl = alertCtrl;
        this.storage = storage;
        this._IMAGE = _IMAGE;
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
        this.fechaini = (new Date()).toISOString();
        this.fechafin = (new Date()).toISOString();
        // Define form validation - VERY basic!
        this.form = this._FB.group({
            nombre: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            descripcion: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            fechaini: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            fechafin: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            ubicacion: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            estado: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            orden: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            imagen: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required]
        });
    }
    PlantilladmCreatePage.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get('username').then(function (value) {
            _this.username = value;
        });
    };
    PlantilladmCreatePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.idempresa = this.navParams.data.idempresa;
        this.idplantilla = this.navParams.data.idplantilla;
        if (this.navParams.get("record") == null) {
            this.orden = 10;
            this.authService.getReg(this.idplantilla + '/' + this.idempresa + '/orden', 'plantilladms').then(function (data) {
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
            this.descripcion = this.navParams.data.record.descripcion;
            this.nombre = this.navParams.data.record.nombre;
            this.fechaini = this.navParams.data.record.fechaini;
            this.fechafin = this.navParams.data.record.fechafin;
            this.ubicacion = this.navParams.data.record.ubicacion;
            this.foto = this.navParams.data.record.foto;
            this.image = this.navParams.data.record.foto;
            this.imagen = this.navParams.data.record.foto;
            this.estado = this.navParams.data.record.estado;
            this.orden = this.navParams.data.record.orden;
            this.isDisablednit = false;
            this.translateService.get('ITEM_UPDATE_TITLE').subscribe(function (value) {
                _this.pageTitle = value;
            });
        }
    };
    PlantilladmCreatePage.prototype.manageGallery = function () {
        var _this = this;
        var creat = 'Actualiza';
        if (this.navParams.get("record") == null) {
            creat = 'Crea';
        }
        var options = {
            idempresa: this.idempresa,
            idplantilla: this.idplantilla,
            nombre: this.form.controls['nombre'].value,
            descripcion: this.form.controls['descripcion'].value,
            fechaini: this.form.controls['fechaini'].value,
            fechafin: this.form.controls['fechafin'].value,
            ubicacion: this.form.controls['ubicacion'].value,
            foto: this.imagen,
            estado: this.form.controls['estado'].value,
            orden: this.form.controls['orden'].value,
            bitacora: { idempresa: this.idempresa, idafiliado: '', email: this.username, permiso: creat, accion: creat + ' plantilla unidades ' }
        };
        if (this.navParams.get("record") == null) {
            if (options) {
                this.authService.createReg('', options, 'plantilladms').then(function (result) {
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
                this.authService.createReg(this._ID, options, 'plantilladms').then(function (result) {
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
    PlantilladmCreatePage.prototype.cancel = function () {
        this.viewCtrl.dismiss();
    };
    PlantilladmCreatePage.prototype.done = function () {
        if (!this.form.valid) {
            return;
        }
        //this.viewCtrl.dismiss(this.form.value);
    };
    PlantilladmCreatePage.prototype.updateProfileImage = function () {
        var _this = this;
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
                        _this.takePhotograph();
                    }
                },
                {
                    text: t1,
                    handler: function () {
                        _this.selectImage();
                    }
                }
            ]
        });
        actionSheet.present();
    };
    PlantilladmCreatePage.prototype.takePhotograph = function () {
        var _this = this;
        if (__WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__["a" /* Camera */]['installed']()) {
            this._IMAGE
                .takePhotograph()
                .then(function (image) {
                _this.imagen = image.toString();
                _this.image = image.toString();
            })
                .catch(function (err) {
                console.log(err);
            });
        }
        else {
            this.fileInput.nativeElement.click();
        }
    };
    PlantilladmCreatePage.prototype.selectImage = function () {
        var _this = this;
        if (__WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__["a" /* Camera */]['installed']()) {
            this._IMAGE
                .selectPhotograph()
                .then(function (image) {
                _this.imagen = image.toString();
                _this.image = image.toString();
            })
                .catch(function (err) {
                console.log(err);
            });
        }
        else {
            this.fileInput.nativeElement.click();
        }
    };
    PlantilladmCreatePage.prototype.processWebImage = function (event) {
        var _this = this;
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();
            reader.onload = function (readerEvent) {
                _this.image = readerEvent.target.result;
                _this._IMAGE.generateFromImage(_this.image, 200, 200, 0.5, function (data) {
                    _this.image = data;
                    _this.imagen = data;
                });
            };
            reader.readAsDataURL(event.target.files[0]);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('fileInput'),
        __metadata("design:type", Object)
    ], PlantilladmCreatePage.prototype, "fileInput", void 0);
    PlantilladmCreatePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-plantilladm-create',template:/*ion-inline-start:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\BLEARNING\plantilladm-create\plantilladm-create.html"*/'<ion-header>\n    <ion-navbar>\n      <ion-title>{{pageTitle}}</ion-title>\n      <ion-buttons end>\n          <button (click)="cancel()" icon-only ion-button padding-right>\n              <ion-icon name="md-close"></ion-icon>\n            </button>\n          <button  (click)="manageGallery()"  [disabled]="!form.valid" icon-only ion-button padding-right>\n              <ion-icon name="done-all"></ion-icon>\n            </button>\n            </ion-buttons>\n    </ion-navbar>\n  </ion-header>\n  <ion-content padding>\n    <form     [formGroup]="form"   text-wrap>\n      <ion-list>\n        \n          <ion-item margin-bottom>\n              <ion-label>Orden</ion-label>\n              <ion-input\n                 type="Number"\n                 [(ngModel)]="orden"\n                 [formControl]="form.controls[\'orden\']"></ion-input>\n           </ion-item>\n           <ion-item class="invalid" *ngIf="!form.controls.orden.valid && (form.controls.orden.dirty || form.controls.orden.touched)" text-wrap>\n            <ion-icon name="warning"></ion-icon>\n            Ingrese un orden valido\n           </ion-item>\n          <ion-item margin-bottom>\n             <ion-label>Nombre</ion-label>\n             <ion-input\n                type="text"\n                [(ngModel)]="nombre" [formControl]="form.controls[\'nombre\']"\n               ></ion-input>\n          </ion-item>\n          <ion-item class="invalid" *ngIf="!form.controls.nombre.valid && (form.controls.nombre.dirty || form.controls.nombre.touched)" text-wrap>\n            <ion-icon name="warning"></ion-icon>\n            {{ \'NOMBRET\' | translate }}\n           </ion-item>\n           <ion-item margin-bottom>\n            <ion-label>Descripción</ion-label>\n            <ion-textarea\n               type="text" rows="5"\n               [(ngModel)]="descripcion" [formControl]="form.controls[\'descripcion\']"\n              ></ion-textarea>\n         </ion-item>\n         <ion-item class="invalid" *ngIf="!form.controls.descripcion.valid && (form.controls.descripcion.dirty || form.controls.descripcion.touched)" text-wrap>\n           <ion-icon name="warning"></ion-icon>\n           {{ \'DESCRIPCIONT\' | translate }}\n          </ion-item>\n           <ion-item margin-bottom>\n            <ion-label>Fecha Inicio</ion-label>\n            <ion-datetime displayFormat="DD/MM/YYYY hh:mm A"  \n            [formControl]="form.controls[\'fechaini\']" [(ngModel)]="fechaini"></ion-datetime>\n          </ion-item>\n          <ion-item class="invalid" *ngIf="!form.controls.fechaini.valid && (form.controls.fechaini.dirty || form.controls.fechaini.touched)" text-wrap>\n            <ion-icon name="warning"></ion-icon>\n            {{ \'FECHAINIT\' | translate }}\n          </ion-item>\n         <ion-item margin-bottom>\n          <ion-label>Fecha Finaliza</ion-label>\n          <ion-datetime displayFormat="DD/MM/YYYY hh:mm A"  \n          [formControl]="form.controls[\'fechafin\']" [(ngModel)]="fechafin"></ion-datetime>\n        </ion-item>\n        <ion-item class="invalid" *ngIf="!form.controls.fechafin.valid && (form.controls.fechafin.dirty || form.controls.fechafin.touched)" text-wrap>\n          <ion-icon name="warning"></ion-icon>\n          {{ \'FECHAFINT\' | translate }}\n        </ion-item>\n        <ion-item-group>\n          <ion-item>\n             <img [src]="image"   class="circle-pic"  height="150 px" width="150 px">\n             <input   type="hidden"    name="imagen" [formControl]="form.controls[\'imagen\']"    [(ngModel)]="imagen">\n          </ion-item>\n          <ion-item>\n              <a  ion-button    block  margin-bottom    color="secondary"  (click)="updateProfileImage()">                Seleccione image         </a>\n              <input type="file" accept="image/*" #fileInput style="visibility: hidden; height: 0px" (change)="processWebImage($event)" />\n           </ion-item>\n       </ion-item-group>\n          <ion-item margin-bottom>\n             <ion-label>Ubicacion</ion-label>\n             <ion-input\n                type="text"\n                [(ngModel)]="ubicacion"\n                [formControl]="form.controls[\'ubicacion\']"></ion-input>\n          </ion-item>\n          <ion-item class="invalid" *ngIf="!form.controls.ubicacion.valid && (form.controls.ubicacion.dirty || form.controls.ubicacion.touched)" text-wrap>\n            <ion-icon name="warning"></ion-icon>\n            {{ \'UBICACIONT\' | translate }}\n          </ion-item>\n         \n             \n   \n  \n           <ion-item margin-bottom>\n              <ion-label>Estado</ion-label>\n              <ion-select [(ngModel)]="estado" [formControl]="form.controls[\'estado\']">\n                <ion-option value="Activo">Activo</ion-option>\n                <ion-option value="Inactivo">Inactivo</ion-option>\n              </ion-select>\n           </ion-item>\n           <ion-item class="invalid" *ngIf="!form.controls.estado.valid && (form.controls.estado.dirty || form.controls.estado.touched)" text-wrap>\n            <ion-icon name="warning"></ion-icon>\n            {{ \'ESTADOT\' | translate }}\n           </ion-item>\n          \n       </ion-list>\n    </form>\n  \n  \n  </ion-content>'/*ion-inline-end:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\BLEARNING\plantilladm-create\plantilladm-create.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_5__providers_image_image__["a" /* ImageProvider */], __WEBPACK_IMPORTED_MODULE_3__providers__["d" /* NotificationProvider */], __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["F" /* ViewController */], __WEBPACK_IMPORTED_MODULE_3__providers__["a" /* Auth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */]])
    ], PlantilladmCreatePage);
    return PlantilladmCreatePage;
}());

//# sourceMappingURL=plantilladm-create.js.map

/***/ }),

/***/ 894:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlantilladmCreatePageModule", function() { return PlantilladmCreatePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__plantilladm_create__ = __webpack_require__(1334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var PlantilladmCreatePageModule = /** @class */ (function () {
    function PlantilladmCreatePageModule() {
    }
    PlantilladmCreatePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__plantilladm_create__["a" /* PlantilladmCreatePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__plantilladm_create__["a" /* PlantilladmCreatePage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], PlantilladmCreatePageModule);
    return PlantilladmCreatePageModule;
}());

//# sourceMappingURL=plantilladm-create.module.js.map

/***/ })

});
//# sourceMappingURL=263.js.map