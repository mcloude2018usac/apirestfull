webpackJsonp([230],{

/***/ 1355:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Asignacioncalusac3CreatePage; });
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








var Asignacioncalusac3CreatePage = /** @class */ (function () {
    function Asignacioncalusac3CreatePage(_IMAGE, alertCtrl, loadingCtrl, storage, msj, translateService, viewCtrl, authService, navCtrl, navParams, _FB, actionSheetCtrl, events) {
        var _this = this;
        this._IMAGE = _IMAGE;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
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
        this.sexos = ['Masculino', 'Femenino'];
        this.nacademicos = ['Primaria', 'Secundaria', 'Diversificado', 'Titulo Universitario'];
        this.tiposus = [];
        this.idhorario2 = [];
        this.iddia2 = [];
        this.idprofesor2 = [];
        this.sinivel = '0';
        this.image5 = './assets/img/photo256.png';
        this.imagen5 = './assets/img/photo256.png';
        this.items = [];
        this.dataxx = [];
        this.resultado = [];
        this.vhorario = [];
        this.vdia = [];
        this.vprofesor = [];
        this.vgrupo3 = [];
        this.translateService.get('APPX').subscribe(function (value) {
            _this.idempresa = value;
        });
        this.form = this._FB.group({
            imagen5: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            noorden: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            identificador: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required]
        });
        this.titulo2 = 'una unidad académica';
    }
    Asignacioncalusac3CreatePage.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get('username').then(function (value) {
            _this.username = value;
        });
        this.storage.get('tiposus').then(function (value) {
            _this.tiposus = value.split(',');
        });
    };
    Asignacioncalusac3CreatePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.authService.getReg2b(this.navParams.data.datax._id + '/' + '1/todosautorizaxid', 'asignacalusacs').then(function (data) {
            var aa = [];
            aa = data;
            _this.dataxx = aa.tt;
        }, function (err) {
            _this.msj.showError3('Error', err.error);
        });
        if (this.navParams.data.op == 'Estudiante') {
        }
        this.titulo2 = 'Asignación ' + this.navParams.data.op;
    };
    Asignacioncalusac3CreatePage.prototype.manageGallery2 = function (loading) {
        var _this = this;
        var creat = 'Actualiza';
        if (this.username == '') {
            this.msj.showError3('Mensaje', 'Existe un problema con su dispositivo , no existe usuario');
            loading.dismiss();
            return;
        }
        if (!this.username) {
            this.msj.showError3('Mensaje', 'Existe un problema con su dispositivo , no existe usuario');
            loading.dismiss();
            return;
        }
        if (this.image5 == undefined || this.image5 == "./assets/img/photo256.png" || this.image5 == '') {
            this.msj.showError3('Mensaje', 'Adjunte imagen de constancia de orden de pago valida');
            loading.dismiss();
            return;
        }
        if (this.navParams.get("record") == null) {
            creat = 'Crea';
        }
        var options = {
            operacion: 'asignaorden',
            identificador: this.identificador,
            foto5: this.imagen5,
            noorden: this.noorden,
            bitacora: { idempresa: this.idempresa, idafiliado: '', email: this.username, permiso: creat, accion: creat + ' asigna calusac ' }
        };
        loading.dismiss();
        if (options) {
            this.authService.createReg(this.navParams.data.datax._id, options, 'asignacalusacs').then(function (result) {
                if (!_this.form.valid) {
                    return;
                }
                _this.viewCtrl.dismiss(result);
            }, function (err) {
                _this.msj.showError3('Error', err.error);
            });
        }
    };
    Asignacioncalusac3CreatePage.prototype.manageGallery = function () {
        var _this = this;
        if (this.username == '') {
            this.msj.showError3('Mensaje', 'Existe un problema con su dispositivo , no existe usuario');
            return;
        }
        if (!this.username) {
            this.msj.showError3('Mensaje', 'Existe un problema con su dispositivo , no existe usuario');
            return;
        }
        var alert = this.alertCtrl.create({ title: this.items.nombre + ', está seguro de realizar asignación calusac : ?',
            buttons: [
                { text: 'Si',
                    handler: function () {
                        var loading = _this.loadingCtrl.create({
                            spinner: 'bubbles',
                            content: "Espere un momento,  Realizando  Operación ......"
                        });
                        loading.present();
                        _this.manageGallery2(loading);
                        //  // t
                    }
                },
                {
                    text: 'No', handler: function () { }
                }
            ]
        });
        alert.present();
    };
    Asignacioncalusac3CreatePage.prototype.cancel = function () {
        this.viewCtrl.dismiss();
    };
    Asignacioncalusac3CreatePage.prototype.done = function () {
        if (!this.form.valid) {
            return;
        }
        //this.viewCtrl.dismiss(this.form.value);
    };
    Asignacioncalusac3CreatePage.prototype.updateProfileImage = function (op) {
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
    Asignacioncalusac3CreatePage.prototype.takePhotograph = function (op) {
        var _this = this;
        this.opimg = op;
        if (__WEBPACK_IMPORTED_MODULE_7__ionic_native_camera__["a" /* Camera */]['installed']()) {
            this._IMAGE
                .takePhotograph()
                .then(function (image) {
                switch (op) {
                    case '5':
                        _this.imagen5 = image.toString();
                        _this.image5 = image.toString();
                        break;
                    default:
                }
            })
                .catch(function (err) {
                console.log(err);
            });
        }
        else {
            switch (op) {
                case '5':
                    this.fileInput2.nativeElement.click();
                    break;
                default:
            }
        }
    };
    Asignacioncalusac3CreatePage.prototype.selectImage = function (op) {
        var _this = this;
        this.opimg = op;
        if (__WEBPACK_IMPORTED_MODULE_7__ionic_native_camera__["a" /* Camera */]['installed']()) {
            this._IMAGE
                .selectPhotograph()
                .then(function (image) {
                switch (op) {
                    case '5':
                        _this.imagen5 = image.toString();
                        _this.image5 = image.toString();
                        break;
                    default:
                }
            })
                .catch(function (err) {
                console.log(err);
            });
        }
        else {
            switch (op) {
                case '5':
                    this.fileInput2.nativeElement.click();
                    break;
                default:
            }
        }
    };
    Asignacioncalusac3CreatePage.prototype.processWebImage = function (event) {
        var _this = this;
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();
            reader.onload = function (readerEvent) {
                switch (_this.opimg) {
                    case '5':
                        _this.image5 = readerEvent.target.result;
                        _this._IMAGE.generateFromImage(_this.image5, 800, 800, 1, function (data) {
                            _this.image5 = data;
                            _this.imagen5 = data;
                        });
                        break;
                    default:
                }
            };
            reader.readAsDataURL(event.target.files[0]);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('fileInput2'),
        __metadata("design:type", Object)
    ], Asignacioncalusac3CreatePage.prototype, "fileInput2", void 0);
    Asignacioncalusac3CreatePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-asignacioncalusac3-create',template:/*ion-inline-start:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\CALUSAC\asignacioncalusac3-create\asignacioncalusac3-create.html"*/'<ion-header>\n    <ion-navbar>\n      <ion-title>Autorizar orden de pago</ion-title>\n      <ion-buttons start>\n          <button (click)="cancel()" icon-only ion-button padding-right>\n              <ion-icon name="md-close"></ion-icon>\n            </button>\n\n      </ion-buttons>\n\n    </ion-navbar>\n  </ion-header>\n  <ion-content padding>\n    <form     [formGroup]="form"   text-wrap>\n      <ion-list>\n\n\n          <ion-item-group >\n              <ion-item>\n\n                  <img [src]="image5"    height="200 px" width="500 px">\n\n                 <input   type="hidden"    name="imagen5" [formControl]="form.controls[\'imagen5\']"    [(ngModel)]="imagen5">\n              </ion-item>\n              <ion-item>\n                  <a  ion-button    block  margin-bottom    color="primary"  (click)="updateProfileImage(\'5\')">Adjunte imagen de constancia de orden de pago</a>\n                  <input type="file" accept="image/*" #fileInput2 style="visibility: hidden; height: 0px" (change)="processWebImage($event)" />\n               </ion-item>\n            </ion-item-group>\n\n            <ion-item >\n                <ion-label class="my-label18"  color="secondary2" stacked> No orden de pago  </ion-label>\n                <ion-input  [(ngModel)]="noorden" [formControl]="form.controls[\'noorden\']" type="Number"></ion-input>\n              </ion-item>\n\n              <ion-item class="invalid" *ngIf="!form.controls.noorden.valid && (form.controls.noorden.dirty || form.controls.noorden.touched)" text-wrap>\n                  <ion-icon name="warning"></ion-icon>\n                 Ingrese un no orden de pago valido\n              </ion-item>\n\n              <ion-item >\n                <ion-label class="my-label18"  color="secondary2" stacked> Identificador en  orden de pago ( Para validar)  </ion-label>\n                <ion-input  [(ngModel)]="identificador" [formControl]="form.controls[\'identificador\']" type="Number"></ion-input>\n              </ion-item>\n\n\n\n          <ion-row >\n              <ion-col text-center>\n                <button  ion-button block color="secondary"    [disabled]="!form.valid"  (click)="manageGallery()" strong>\n                 Autorizar\n                </button>\n              </ion-col>\n            </ion-row>\n\n\n\n\n       </ion-list>\n    </form>\n\n\n  </ion-content>\n'/*ion-inline-end:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\CALUSAC\asignacioncalusac3-create\asignacioncalusac3-create.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__providers_image_image__["a" /* ImageProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3__providers__["d" /* NotificationProvider */], __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["F" /* ViewController */], __WEBPACK_IMPORTED_MODULE_3__providers__["a" /* Auth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */]])
    ], Asignacioncalusac3CreatePage);
    return Asignacioncalusac3CreatePage;
}());

//# sourceMappingURL=asignacioncalusac3-create.js.map

/***/ }),

/***/ 915:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsignacioncalusacCreatePageModule", function() { return AsignacioncalusacCreatePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__asignacioncalusac3_create__ = __webpack_require__(1355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AsignacioncalusacCreatePageModule = /** @class */ (function () {
    function AsignacioncalusacCreatePageModule() {
    }
    AsignacioncalusacCreatePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__asignacioncalusac3_create__["a" /* Asignacioncalusac3CreatePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__asignacioncalusac3_create__["a" /* Asignacioncalusac3CreatePage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], AsignacioncalusacCreatePageModule);
    return AsignacioncalusacCreatePageModule;
}());

//# sourceMappingURL=asignacioncalusac3-create.module.js.map

/***/ })

});
//# sourceMappingURL=230.js.map