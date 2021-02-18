webpackJsonp([88],{

/***/ 1097:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModuloCreatePageModule", function() { return ModuloCreatePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modulo_create__ = __webpack_require__(1553);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ModuloCreatePageModule = /** @class */ (function () {
    function ModuloCreatePageModule() {
    }
    ModuloCreatePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__modulo_create__["a" /* ModuloCreatePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__modulo_create__["a" /* ModuloCreatePage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], ModuloCreatePageModule);
    return ModuloCreatePageModule;
}());

//# sourceMappingURL=modulo-create.module.js.map

/***/ }),

/***/ 1553:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModuloCreatePage; });
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






var ModuloCreatePage = /** @class */ (function () {
    function ModuloCreatePage(storage, msj, translateService, viewCtrl, authService, navCtrl, navParams, _FB, actionSheetCtrl, events) {
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
        this.translateService.get('APPX').subscribe(function (value) {
            _this.idempresa = value;
        });
        // Define form validation - VERY basic!
        this.form = this._FB.group({
            nombre: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            grupo: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            titulo: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            index: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            icono: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            nivel: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            estado: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required]
        });
        this.authService.getReg('modulo-grupo', 'datosfijos').then(function (result) {
            _this.vgrupo = result;
        }, function (err) {
            _this.msj.showError3('Error', err.error);
        });
        //  this.vgrupo=[{"id":"USAC","nombre":"USAC"},{"id":"BUSES","nombre":"BUSES"},{"id":"TICKES","nombre":"TICKES"}];
        this.pactualizacion = this.navParams.get("actualizacion");
    }
    ModuloCreatePage.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get('username').then(function (value) {
            _this.username = value;
        });
    };
    ModuloCreatePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        if (this.navParams.get("record") == null) {
            this.authService.getReg('todos/orden/' + this.idempresa, 'modulos').then(function (data) {
                if (data) {
                    var aa = data;
                    _this.index = aa.orden;
                    _this.index = _this.index + 10;
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
            this.titulo = this.navParams.data.record.titulo;
            this.grupo = this.navParams.data.record.grupo;
            this.index = this.navParams.data.record.index;
            this.icono = this.navParams.data.record.icono;
            this.estado = this.navParams.data.record.estado;
            this.nivel = this.navParams.data.record.nivel;
            this.isDisablednit = false;
            this.translateService.get('ITEM_UPDATE_TITLE').subscribe(function (value) {
                _this.pageTitle = value;
            });
        }
    };
    ModuloCreatePage.prototype.manageGallery = function () {
        var _this = this;
        var creat = 'Actualiza';
        if (this.navParams.get("record") == null) {
            creat = 'Crea';
        }
        var options = {
            idempresa: this.idempresa,
            nombre: this.form.controls['nombre'].value,
            grupo: this.form.controls['grupo'].value,
            titulo: this.form.controls['titulo'].value,
            componente: this.form.controls['titulo'].value,
            tabcomponente: this.form.controls['titulo'].value,
            index: this.form.controls['index'].value,
            icono: this.form.controls['icono'].value,
            estado: this.form.controls['estado'].value,
            nivel: this.form.controls['nivel'].value,
            bitacora: { idempresa: this.idempresa, idafiliado: '', email: this.username, permiso: creat, accion: creat + ' modulos ' }
        };
        if (this.navParams.get("record") == null) {
            if (options) {
                this.authService.createReg('', options, 'modulos').then(function (result) {
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
                this.authService.createReg(this._ID, options, 'modulos').then(function (result) {
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
    ModuloCreatePage.prototype.cancel = function () {
        this.viewCtrl.dismiss();
    };
    ModuloCreatePage.prototype.done = function () {
        if (!this.form.valid) {
            return;
        }
        //this.viewCtrl.dismiss(this.form.value);
    };
    ModuloCreatePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-modulo-create',template:/*ion-inline-start:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\SEGURIDAD\modulo-create\modulo-create.html"*/'<ion-header>\n    <ion-navbar>\n      <ion-title>{{pageTitle}}</ion-title>\n\n      <ion-buttons end>\n          <button (click)="cancel()" icon-only ion-button padding-right>\n              <ion-icon name="md-close"></ion-icon>\n            </button>\n          <button  (click)="manageGallery()" [hidden]="!pactualizacion"  [disabled]="!form.valid" icon-only ion-button padding-right>\n              <ion-icon name="done-all"></ion-icon>\n            </button>\n      </ion-buttons>\n    </ion-navbar>\n  </ion-header>\n  <ion-content padding>\n    <form     [formGroup]="form"    text-wrap>\n      <ion-list>\n\n          <ion-item margin-bottom>\n             <ion-label>Nombre</ion-label>\n             <ion-input\n                type="text"\n                [(ngModel)]="nombre" [formControl]="form.controls[\'nombre\']"\n               ></ion-input>\n          </ion-item>\n          <ion-item class="invalid" *ngIf="!form.controls.nombre.valid && (form.controls.nombre.dirty || form.controls.nombre.touched)" text-wrap>\n            <ion-icon name="warning"></ion-icon>\n            {{ \'NOMBRET\' | translate }}\n           </ion-item>\n\n           <ion-item margin-bottom>\n              <ion-label>Componente</ion-label>\n              <ion-input\n                 type="text"\n                 [(ngModel)]="titulo" [formControl]="form.controls[\'titulo\']"\n                ></ion-input>\n           </ion-item>\n           <ion-item class="invalid" *ngIf="!form.controls.titulo.valid && (form.controls.titulo.dirty || form.controls.titulo.touched)" text-wrap>\n             <ion-icon name="warning"></ion-icon>\n             {{ \'COMPONENTET\' | translate }}\n            </ion-item>\n\n\n                <ion-item margin-bottom>\n                    <ion-label>Cardinalidad</ion-label>\n                    <ion-input\n                       type="number"\n                       [(ngModel)]="index" [formControl]="form.controls[\'index\']"\n                      ></ion-input>\n                 </ion-item>\n                 <ion-item class="invalid" *ngIf="!form.controls.index.valid && (form.controls.index.dirty || form.controls.index.touched)" text-wrap>\n                   <ion-icon name="warning"></ion-icon>\n                   {{ \'CARDINALIDADT\' | translate }}\n                  </ion-item>\n\n                  <ion-item margin-bottom>\n                      <ion-label>Icono</ion-label>\n                      <ion-input\n                         type="text"\n                         [(ngModel)]="icono" [formControl]="form.controls[\'icono\']"\n                        ></ion-input>\n                   </ion-item>\n                   <ion-item class="invalid" *ngIf="!form.controls.icono.valid && (form.controls.icono.dirty || form.controls.icono.touched)" text-wrap>\n                     <ion-icon name="warning"></ion-icon>\n                     {{ \'ICONOT\' | translate }}\n                    </ion-item>\n\n                    <ion-item margin-bottom>\n                        <ion-label>Grupo</ion-label>\n                        <ion-select [(ngModel)]="grupo" [formControl]="form.controls[\'grupo\']">\n                            <ion-option text-wrap *ngFor="let item of vgrupo" [value]="item.id">{{item.nombre}}</ion-option>\n                        </ion-select>\n                     </ion-item>\n                     <ion-item class="invalid" *ngIf="!form.controls.grupo.valid && (form.controls.grupo.dirty || form.controls.grupo.touched)" text-wrap>\n                       <ion-icon name="warning"></ion-icon>\n                       {{ \'GRUPOT\' | translate }}\n                      </ion-item>\n\n                      <ion-item margin-bottom>\n                          <ion-label>html/link</ion-label>\n                          <ion-textarea rows="5"\n                          type="text"\n                          [(ngModel)]="nivel" [formControl]="form.controls[\'nivel\']"\n                         ></ion-textarea>\n                       </ion-item>\n                       <ion-item class="invalid" *ngIf="!form.controls.nivel.valid && (form.controls.nivel.dirty || form.controls.nivel.touched)" text-wrap>\n                        <ion-icon name="warning"></ion-icon>\n                        {{ \'HTMLT\' | translate }}\n                       </ion-item>\n\n           <ion-item margin-bottom>\n              <ion-label>Estado</ion-label>\n              <ion-select [(ngModel)]="estado" [formControl]="form.controls[\'estado\']">\n                  <ion-option value="Activo">Activo</ion-option>\n                  <ion-option value="Inactivo">Inactivo</ion-option>\n                </ion-select>\n           </ion-item>\n           <ion-item class="invalid" *ngIf="!form.controls.estado.valid && (form.controls.estado.dirty || form.controls.estado.touched)" text-wrap>\n            <ion-icon name="warning"></ion-icon>\n            {{ \'ESTADOT\' | translate }}\n           </ion-item>\n\n\n       </ion-list>\n    </form>\n\n\n  </ion-content>\n'/*ion-inline-end:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\SEGURIDAD\modulo-create\modulo-create.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3__providers__["d" /* NotificationProvider */], __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["F" /* ViewController */], __WEBPACK_IMPORTED_MODULE_3__providers__["a" /* Auth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */]])
    ], ModuloCreatePage);
    return ModuloCreatePage;
}());

//# sourceMappingURL=modulo-create.js.map

/***/ })

});
//# sourceMappingURL=88.js.map