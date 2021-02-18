webpackJsonp([30],{

/***/ 1024:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CursoslibresCreatePageModule", function() { return CursoslibresCreatePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cursoslibres_create__ = __webpack_require__(1466);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_selectable__ = __webpack_require__(446);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var CursoslibresCreatePageModule = /** @class */ (function () {
    function CursoslibresCreatePageModule() {
    }
    CursoslibresCreatePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__cursoslibres_create__["a" /* CursoslibresCreatePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__cursoslibres_create__["a" /* CursoslibresCreatePage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild(),
                __WEBPACK_IMPORTED_MODULE_4_ionic_selectable__["b" /* IonicSelectableModule */]
            ],
        })
    ], CursoslibresCreatePageModule);
    return CursoslibresCreatePageModule;
}());

//# sourceMappingURL=cursoslibres-create.module.js.map

/***/ }),

/***/ 1305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__form_interface__ = __webpack_require__(1306);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__form_type__ = __webpack_require__(1307);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__form_type__["a"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ 1306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export IForm */
var IForm = /** @class */ (function () {
    function IForm() {
    }
    return IForm;
}());

//# sourceMappingURL=form.interface.js.map

/***/ }),

/***/ 1307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Form; });
var Form = /** @class */ (function () {
    function Form(form) {
        this.id = form.id;
        this.nombre = form.nombre;
    }
    return Form;
}());

//# sourceMappingURL=form.type.js.map

/***/ }),

/***/ 1466:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CursoslibresCreatePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_selectable__ = __webpack_require__(446);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__types__ = __webpack_require__(1305);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var CursoslibresCreatePage = /** @class */ (function () {
    function CursoslibresCreatePage(alertCtrl, storage, msj, translateService, viewCtrl, authService, navCtrl, navParams, _FB, actionSheetCtrl, events) {
        var _this = this;
        this.alertCtrl = alertCtrl;
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
        this.vcategoria = [];
        this.username = "";
        this.translateService.get('APPX').subscribe(function (value) {
            _this.idempresa = value;
        });
        this.form = this._FB.group({
            plataforma: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            nombre: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            url: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            fecha: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            capacidad: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            estado: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            idevento: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            categoria: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            clave: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            catedratico: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].maxLength(50), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required])],
            telefono: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].maxLength(8), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].pattern(/^\d{8}$/), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required])],
        });
        this.authService.getReg('todos/categoria-cursoslibres/' + this.idempresa, 'frmcats').then(function (data) {
            _this.vcategoria = data;
        });
    }
    CursoslibresCreatePage.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get('username').then(function (value) {
            _this.username = value;
        });
        this.portNameControl2 = this._FB.control(null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required);
        this.portForm2 = this._FB.group({
            portName: this.portNameControl2
        });
    };
    CursoslibresCreatePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        if (this.navParams.get("record") == null) {
            this.translateService.get('ITEM_CREATE_TITLE').subscribe(function (value) {
                _this.pageTitle = value;
            });
            this.isDisabledplataforma = true;
        }
        else {
            //this._ID 				=	this.navParams.data.record.plataforma;
            this._ID = this.navParams.data.record._id;
            this.plataforma = this.navParams.data.record.plataforma;
            this.nombre = this.navParams.data.record.nombre;
            this.url = this.navParams.data.record.url;
            this.catedratico = this.navParams.data.record.catedratico;
            this.email = this.navParams.data.record.email;
            this.fecha = this.navParams.data.record.fecha;
            this.telefono = this.navParams.data.record.movil;
            this.capacidad = this.navParams.data.record.capacidad;
            this.clave = this.navParams.data.record.clave;
            this.estado = this.navParams.data.record.estado;
            this.categoria = this.navParams.data.record.idarea;
            this.idevento = this.navParams.data.record.idevento;
            this.isDisabledplataforma = false;
            this.translateService.get('ITEM_UPDATE_TITLE').subscribe(function (value) {
                _this.pageTitle = value;
            });
        }
    };
    CursoslibresCreatePage.prototype.manageGallery = function () {
        var _this = this;
        var creat = 'Actualiza';
        if (this.navParams.get("record") == null) {
            creat = 'Crea';
        }
        var options = {
            idempresa: this.idempresa,
            idtipoevento: 'Cursos libres en linea',
            plataforma: this.form.controls['plataforma'].value,
            nombre: this.form.controls['nombre'].value,
            url: this.form.controls['url'].value,
            catedratico: this.form.controls['catedratico'].value,
            email: this.form.controls['email'].value,
            fecha: this.form.controls['fecha'].value,
            movil: this.form.controls['telefono'].value,
            capacidad: this.form.controls['capacidad'].value,
            clave: this.form.controls['clave'].value,
            idevento: this.form.controls['idevento'].value,
            estado: this.form.controls['estado'].value,
            idarea: this.form.controls['categoria'].value,
            bitacora: { idempresa: this.idempresa, idafiliado: '', email: this.username, permiso: creat, accion: creat + ' area_eventos ' }
        };
        if (this.navParams.get("record") == null) {
            if (options) {
                this.authService.createReg('', options, 'area_eventos').then(function (result) {
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
                this.authService.createReg(this._ID, options, 'area_eventos').then(function (result) {
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
    CursoslibresCreatePage.prototype.cancel = function () {
        this.viewCtrl.dismiss();
    };
    CursoslibresCreatePage.prototype.done = function () {
        if (!this.form.valid) {
            return;
        }
        //this.viewCtrl.dismiss(this.form.value);
    };
    CursoslibresCreatePage.prototype.onAddForm2 = function (event) {
        this.portNameControl2.reset();
        this.portNameControl2.setValue(event.component.searchText);
        event.component.showAddItemTemplate();
    };
    CursoslibresCreatePage.prototype.onSaveForm2 = function (event) {
        this.portNameControl2.setValue(event.item.nombre);
        event.component.showAddItemTemplate();
    };
    CursoslibresCreatePage.prototype.deleteSelectedItem2 = function (op) {
        var itemToDeleteIndex;
        this.vcategoria.forEach(function (selectedItem, itemIndex) {
            if (selectedItem._id == op) {
                itemToDeleteIndex = itemIndex;
            }
        });
        this.vcategoria.splice(itemToDeleteIndex, 1);
    };
    CursoslibresCreatePage.prototype.onDeleteForm2 = function (event, op2) {
        var _this = this;
        var alert = this.alertCtrl.create({ title: 'Seguro de realizar esta operación?',
            buttons: [
                { text: 'Si',
                    handler: function () {
                        var aa;
                        aa = event.item;
                        var recordID = aa.id;
                        _this.authService.deleteReg(recordID + '/' + _this.username + '/' + _this.idempresa + '/' + '', 'frmcats').then(function (data) {
                            event.component.deleteItem({ id: recordID, nombre: 'aaa' });
                            _this.deleteSelectedItem2(recordID);
                        }, function (err) {
                            _this.msj.showError3('Error', err.error);
                        });
                    }
                },
                {
                    text: 'No', handler: function () { }
                }
            ]
        });
        alert.present();
    };
    CursoslibresCreatePage.prototype.addForm2 = function (op) {
        var _this = this;
        var creat = 'Crea';
        var options = {
            idempresa: this.idempresa,
            idunidad: op,
            nombre: this.portNameControl2.value,
            bitacora: { idempresa: this.idempresa, idafiliado: '', email: this.username, permiso: creat, accion: creat + ' plantillas ' }
        };
        if (options) {
            this.authService.createReg('', options, 'frmcats').then(function (result) {
                var aa = result;
                var port = new __WEBPACK_IMPORTED_MODULE_7__types__["a" /* Form */]({
                    id: aa._id,
                    nombre: _this.portNameControl2.value
                });
                _this.portComponent2.addItem(port).then(function () {
                    _this.portComponent2.search(port.nombre);
                });
                _this.portNameControl2.reset();
                _this.portComponent2.hideAddItemTemplate();
            }, function (err) {
                _this.msj.showError3('Error', err.error);
            });
        }
    };
    CursoslibresCreatePage.prototype.saveForm2 = function (port, op) {
        var _this = this;
        var creat = 'Actualiza';
        var options = {
            idempresa: this.idempresa,
            idunidad: op,
            nombre: this.portNameControl2.value,
            bitacora: { idempresa: this.idempresa, idafiliado: '', email: this.username, permiso: creat, accion: creat + ' plantillas' }
        };
        if (options) {
            var aa;
            aa = port;
            this.authService.createReg(aa._id, options, 'frmcats').then(function (result) {
                port.nombre = _this.portNameControl2.value;
                _this.portComponent2.hideAddItemTemplate();
            }, function (err) {
                _this.msj.showError3('Error', err.error);
            });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('fileInput'),
        __metadata("design:type", Object)
    ], CursoslibresCreatePage.prototype, "fileInput", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('portComponent'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_6_ionic_selectable__["a" /* IonicSelectableComponent */])
    ], CursoslibresCreatePage.prototype, "portComponent", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('portComponent2'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_6_ionic_selectable__["a" /* IonicSelectableComponent */])
    ], CursoslibresCreatePage.prototype, "portComponent2", void 0);
    CursoslibresCreatePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-cursoslibres-create',template:/*ion-inline-start:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\EVENTOS\cursoslibres-create\cursoslibres-create.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>{{pageTitle}}</ion-title>\n\n    <ion-buttons end>\n        <button (click)="cancel()" icon-only ion-button padding-right>\n            <ion-icon name="md-close"></ion-icon>\n          </button>\n        <button  (click)="manageGallery()"  [disabled]="!form.valid" icon-only ion-button padding-right>\n            <ion-icon name="done-all"></ion-icon>\n          </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <form     [formGroup]="form"  text-wrap>\n    <ion-list>\n\n\n      <ion-item margin-bottom text-wrap>\n        <ion-label class="my-label18" color="secondary2"  stacked>Categoria</ion-label>\n\n      <ion-select  [(ngModel)]="categoria" [formControl]="form.controls[\'categoria\']">\n          <ion-option text-wrap *ngFor="let item of vcategoria" [value]="item.nombre" >{{item.nombre}} </ion-option>\n      </ion-select>\n\n\n    </ion-item>\n      <ion-item class="invalid" *ngIf="!form.controls.categoria.valid\n      && (form.controls.categoria.dirty || form.controls.categoria.touched)"  text-wrap>\n\n        Ingrese una categoria valida\n     </ion-item>\n        <ion-item margin-bottom>\n           <ion-label>Nombre</ion-label>\n           <ion-input\n              type="text"\n              [(ngModel)]="nombre" [formControl]="form.controls[\'nombre\']"\n             ></ion-input>\n        </ion-item>\n        <ion-item class="invalid" *ngIf="!form.controls.nombre.valid && (form.controls.nombre.dirty || form.controls.nombre.touched)" text-wrap>\n          <ion-icon name="warning"></ion-icon>\n          {{ \'NOMBRET\' | translate }}\n         </ion-item>\n\n\n         <ion-item margin-bottom>\n          <ion-label>Plataforma</ion-label>\n          <ion-input  [(ngModel)]="plataforma"\n           type="text" [formControl]="form.controls[\'plataforma\']"></ion-input>\n\n       </ion-item>\n       <ion-item class="invalid" *ngIf="!form.controls.plataforma.valid && (form.controls.plataforma.dirty || form.controls.plataforma.touched)" text-wrap>\n        <ion-icon name="warning"></ion-icon>\n       Ingrese el nombre de la plataforma valida\n       </ion-item>\n\n\n        <ion-item margin-bottom>\n           <ion-label>URL</ion-label>\n           <ion-input\n              type="text"\n              [(ngModel)]="url"\n              formControlName="url"></ion-input>\n        </ion-item>\n\n        <ion-item class="invalid" *ngIf="!form.controls.url.valid && (form.controls.url.dirty || form.controls.url.touched)" text-wrap>\n          <ion-icon name="warning"></ion-icon>\n          Ingrese una url valida\n         </ion-item>\n        <ion-item margin-bottom>\n            <ion-label>Catedratico</ion-label>\n            <ion-input\n               type="text"\n               [(ngModel)]="catedratico"\n               formControlName="catedratico"></ion-input>\n         </ion-item>\n\n         <ion-item class="invalid" *ngIf="!form.controls.catedratico.valid && (form.controls.catedratico.dirty || form.controls.catedratico.touched)" text-wrap>\n          <ion-icon name="warning"></ion-icon>\n          Ingrese una catedratico valida\n         </ion-item>\n\n         <ion-item margin-bottom>\n          <ion-label>Telefono</ion-label>\n          <ion-input\n             type="number"\n             [(ngModel)]="telefono"\n             [formControl]="form.controls[\'telefono\']"></ion-input>\n       </ion-item>\n       <ion-item class="invalid" *ngIf="!form.controls.telefono.valid && (form.controls.telefono.dirty || form.controls.telefono.touched)" text-wrap>\n        <ion-icon name="warning"></ion-icon>\n        {{ \'TELEFONOT\' | translate }}\n       </ion-item>\n\n         <ion-item margin-bottom>\n            <ion-label>Email</ion-label>\n            <ion-input\n               type="email"\n               [(ngModel)]="email" [formControl]="form.controls[\'email\']"\n              ></ion-input>\n         </ion-item>\n         <ion-item class="invalid" *ngIf="!form.controls.email.valid && (form.controls.email.dirty || form.controls.email.touched)" text-wrap>\n          <ion-icon name="warning"></ion-icon>\n          {{ \'EMAIL_NOVALIDO\' | translate }}\n         </ion-item>\n\n\n\n         <ion-item margin-bottom>\n          <ion-label>Capacidad</ion-label>\n          <ion-input\n             type="number"\n             [(ngModel)]="capacidad"\n             formControlName="capacidad"></ion-input>\n       </ion-item>\n\n       <ion-item class="invalid" *ngIf="!form.controls.capacidad.valid && (form.controls.capacidad.dirty || form.controls.capacidad.touched)" text-wrap>\n        <ion-icon name="warning"></ion-icon>\n        Ingrese una capacidad valida\n       </ion-item>\n\n\n       <ion-item margin-bottom>\n        <ion-label>Clave</ion-label>\n        <ion-input\n           type="text"\n           [(ngModel)]="clave"\n           formControlName="clave"></ion-input>\n     </ion-item>\n\n     <ion-item class="invalid" *ngIf="!form.controls.clave.valid && (form.controls.clave.dirty || form.controls.clave.touched)" text-wrap>\n      <ion-icon name="warning"></ion-icon>\n      Ingrese una clave valida\n     </ion-item>\n\n\n     <ion-item margin-bottom>\n      <ion-label>Fecha</ion-label>\n      <ion-input\n         type="text"\n         [(ngModel)]="fecha"\n         formControlName="fecha"></ion-input>\n   </ion-item>\n\n\n   <ion-item class="invalid" *ngIf="!form.controls.fecha.valid && (form.controls.fecha.dirty || form.controls.fecha.touched)" text-wrap>\n    <ion-icon name="warning"></ion-icon>\n    Ingrese una fecha valida\n   </ion-item>\n\n\n   <ion-item margin-bottom>\n    <ion-label>Estado</ion-label>\n    <ion-select [(ngModel)]="estado" [formControl]="form.controls[\'estado\']">\n      <ion-option value="Activo">Activo</ion-option>\n      <ion-option value="Inactivo">Inactivo</ion-option>\n      <ion-option value="Publicación">Publicación</ion-option>\n\n\n\n    </ion-select>\n </ion-item>\n <ion-item class="invalid" *ngIf="!form.controls.estado.valid && (form.controls.estado.dirty || form.controls.estado.touched)" text-wrap>\n  <ion-icon name="warning"></ion-icon>\n  {{ \'ESTADOT\' | translate }}\n </ion-item>\n\n <ion-item margin-bottom>\n  <ion-label>Id del evento</ion-label>\n  <ion-input\n     type="text"\n     [(ngModel)]="idevento"\n     formControlName="idevento"></ion-input>\n</ion-item>\n\n<ion-item class="invalid" *ngIf="!form.controls.idevento.valid && (form.controls.idevento.dirty || form.controls.idevento.touched)" text-wrap>\n <ion-icon name="warning"></ion-icon>\n Ingrese una idevento valida\n</ion-item>\n\n\n     </ion-list>\n  </form>\n\n\n</ion-content>\n'/*ion-inline-end:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\EVENTOS\cursoslibres-create\cursoslibres-create.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3__providers__["d" /* NotificationProvider */], __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["F" /* ViewController */], __WEBPACK_IMPORTED_MODULE_3__providers__["a" /* Auth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */]])
    ], CursoslibresCreatePage);
    return CursoslibresCreatePage;
}());

//# sourceMappingURL=cursoslibres-create.js.map

/***/ })

});
//# sourceMappingURL=30.js.map