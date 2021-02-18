webpackJsonp([155],{

/***/ 1008:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BusCreatePageModule", function() { return BusCreatePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bus_create__ = __webpack_require__(1450);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var BusCreatePageModule = /** @class */ (function () {
    function BusCreatePageModule() {
    }
    BusCreatePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__bus_create__["a" /* BusCreatePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__bus_create__["a" /* BusCreatePage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], BusCreatePageModule);
    return BusCreatePageModule;
}());

//# sourceMappingURL=bus-create.module.js.map

/***/ }),

/***/ 1450:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BusCreatePage; });
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






var BusCreatePage = /** @class */ (function () {
    function BusCreatePage(storage, msj, translateService, viewCtrl, authService, navCtrl, navParams, _FB, actionSheetCtrl, events) {
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
        this.idtarifa2 = [];
        this.idruta2 = [];
        this.vtarifa = [];
        this.vruta = [];
        this.username = "";
        this.vgrupo = [];
        // Define form validation - VERY basic!
        this.form = this._FB.group({
            codigo: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            noplaca: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            estado: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            idtarifa: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            idruta: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required]
        });
        this.translateService.get('APPX').subscribe(function (value) {
            _this.idempresa0 = value;
            _this.authService.getReg(_this.idempresa0, 'tarifas').then(function (result) {
                _this.vtarifa = result;
            }, function (err) {
                _this.msj.showError3('Error', err.error);
            });
        });
        this.authService.getReg('dispositivo-tipo', 'datosfijos2').then(function (result) {
            _this.vgrupo = result;
        }, function (err) {
            _this.msj.showError3('Error', err.error);
        });
        this.authService.getReg('RUTAS/RUTAS/' + this.idempresa0, 'catalogos').then(function (result) {
            _this.vruta = result;
        }, function (err) {
            _this.msj.showError3('Error', err.error);
        });
    }
    BusCreatePage.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get('username').then(function (value) {
            _this.username = value;
        });
    };
    BusCreatePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.idempresa = this.navParams.data.record2.idempresa;
        this.idafiliado = this.navParams.data.record2.idafiliado;
        if (this.navParams.get("record") == null) {
            this.translateService.get('ITEM_CREATE_TITLE').subscribe(function (value) {
                _this.pageTitle = value;
            });
            this.isDisablednit = true;
        }
        else {
            this._ID = this.navParams.data.record._id;
            this.codigo = this.navParams.data.record.codigo;
            this.noplaca = this.navParams.data.record.noplaca;
            this.estado = this.navParams.data.record.estado;
            this.idtarifa = this.navParams.data.record.idtarifa.id._id + ',' + this.navParams.data.record.idtarifa.id.nombre;
            this.idruta = this.navParams.data.record.idruta.id._id + ',' + this.navParams.data.record.idruta.id.nombre;
            this.idtarifa2 = this.idtarifa.split(',');
            this.idruta2 = this.idruta.split(',');
            this.isDisablednit = false;
            this.translateService.get('ITEM_UPDATE_TITLE').subscribe(function (value) {
                _this.pageTitle = value;
            });
        }
    };
    BusCreatePage.prototype.manageGallery = function () {
        var _this = this;
        var creat = 'Actualiza';
        if (this.navParams.get("record") == null) {
            creat = 'Crea';
        }
        var options = {
            idempresa0: this.idempresa0,
            idempresa: this.idempresa,
            idafiliado: this.idafiliado,
            codigo: this.form.controls['codigo'].value,
            noplaca: this.form.controls['noplaca'].value,
            nombre: this.form.controls['noplaca'].value + ' ' + this.form.controls['codigo'].value,
            estado: this.form.controls['estado'].value,
            idtarifa: { id: this.idtarifa2[0], nombre: this.idtarifa2[1] },
            idruta: { id: this.idruta2[0], nombre: this.idruta2[1] },
            bitacora: { idempresa: this.idempresa, idafiliado: '', email: this.username, permiso: creat, accion: creat + ' dcatalogos ' }
        };
        if (this.navParams.get("record") == null) {
            if (options) {
                this.authService.createReg('', options, 'buss').then(function (result) {
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
                this.authService.createReg(this._ID, options, 'buss').then(function (result) {
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
    BusCreatePage.prototype.cancel = function () {
        this.viewCtrl.dismiss();
    };
    BusCreatePage.prototype.done = function () {
        if (!this.form.valid) {
            return;
        }
        //this.viewCtrl.dismiss(this.form.value);
    };
    BusCreatePage.prototype.onSelectChange = function (selectedValue) {
        this.idtarifa2 = selectedValue.split(',');
    };
    BusCreatePage.prototype.onSelectChange2 = function (selectedValue) {
        this.idruta2 = selectedValue.split(',');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('fileInput'),
        __metadata("design:type", Object)
    ], BusCreatePage.prototype, "fileInput", void 0);
    BusCreatePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-bus-create',template:/*ion-inline-start:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\EMPRESA\bus-create\bus-create.html"*/'<ion-header>\n    <ion-navbar>\n      <ion-title>{{pageTitle}}</ion-title>\n     \n      <ion-buttons end>\n          <button (click)="cancel()" icon-only ion-button padding-right>\n              <ion-icon name="md-close"></ion-icon>\n            </button>\n          <button  (click)="manageGallery()"  [disabled]="!form.valid" icon-only ion-button padding-right>\n              <ion-icon name="done-all"></ion-icon>\n            </button>\n      </ion-buttons>\n    </ion-navbar>       \n  </ion-header>\n  <ion-content padding>\n    <form    [formGroup]="form"    text-wrap>\n      \n      <ion-list>  \n          <ion-item margin-bottom>\n              <ion-label>Id Empresa:</ion-label>\n              <ion-input [disabled]="true"\n              value="{{idempresa}}"\n              type="text" \n              \n              ></ion-input>\n\n           </ion-item>  \n          <ion-item margin-bottom>\n              <ion-label>Id Afiliado:</ion-label>\n              <ion-input [disabled]="true"\n              value="{{idafiliado}}"\n              type="text" \n              \n              ></ion-input>\n\n           </ion-item>\n          <ion-item margin-bottom>\n              <ion-label>Id Dispositivo:</ion-label>\n              <ion-input [disabled]="true"\n              value="{{_ID}}"\n              type="text" \n              \n              ></ion-input>\n\n           </ion-item>\n          <ion-item margin-bottom>\n              <ion-label>Tipo Dispositivo</ion-label>\n              <ion-select  placeholder="Seleccione Tipo" [(ngModel)]="codigo"  [formControl]="form.controls[\'codigo\']">\n                  <ion-option text-wrap *ngFor="let item of vgrupo"  value="{{item.nombre}}">{{item.nombre}}</ion-option>\n   \n                </ion-select>\n\n           </ion-item>\n           <ion-item class="invalid" *ngIf="!form.controls.codigo.valid && (form.controls.codigo.dirty || form.controls.codigo.touched)" text-wrap>\n            <ion-icon name="warning"></ion-icon>\n            {{ \'TIPOT\' | translate }}\n           </ion-item>\n          <ion-item margin-bottom>\n             <ion-label>Identificador</ion-label>\n             <ion-input\n                type="text"\n                [(ngModel)]="noplaca"\n                [formControl]="form.controls[\'noplaca\']"></ion-input>\n          </ion-item>\n          <ion-item class="invalid" *ngIf="!form.controls.noplaca.valid && (form.controls.noplaca.dirty || form.controls.noplaca.touched)" text-wrap>\n            <ion-icon name="warning"></ion-icon>\n            {{ \'NOPLACAT\' | translate }}\n           </ion-item>\n\n           <ion-item margin-bottom>\n              <ion-label>Tarifa</ion-label>\n              <ion-select  (ionChange)="onSelectChange($event)" [(ngModel)]="idtarifa" [formControl]="form.controls[\'idtarifa\']" >\n                 <ion-option text-wrap *ngFor="let item of vtarifa"  [value]="item._id+\',\'+item.nombre">{{item.nombre}}</ion-option>\n             </ion-select>  \n \n              \n           </ion-item>\n           <ion-item class="invalid" *ngIf="!form.controls.idtarifa.valid && (form.controls.idtarifa.dirty || form.controls.idtarifa.touched)" text-wrap>\n             <ion-icon name="warning"></ion-icon>\n             {{ \'TARIFAT\' | translate }} \n            </ion-item>\n\n            <ion-item margin-bottom>\n                <ion-label>Ruta</ion-label>\n                <ion-select  (ionChange)="onSelectChange2($event)" [(ngModel)]="idruta" [formControl]="form.controls[\'idruta\']" >\n                   <ion-option text-wrap *ngFor="let item of vruta" [value]="item._id+\',\'+item.nombre">{{item.nombre}}</ion-option>\n               </ion-select>  \n   \n                \n             </ion-item>\n             <ion-item class="invalid" *ngIf="!form.controls.idruta.valid && (form.controls.idruta.dirty || form.controls.idruta.touched)" text-wrap>\n               <ion-icon name="warning"></ion-icon>\n               {{ \'RUTAT\' | translate }}\n              </ion-item>\n\n\n          <ion-item margin-bottom>\n              <ion-label>Estado</ion-label>\n              <ion-select [(ngModel)]="estado" [formControl]="form.controls[\'estado\']">\n                  <ion-option value="Activo">Activo</ion-option>\n                  <ion-option value="Inactivo">Inactivo</ion-option>\n                </ion-select>\n           </ion-item>\n           <ion-item class="invalid" *ngIf="!form.controls.estado.valid && (form.controls.estado.dirty || form.controls.estado.touched)" text-wrap>\n            <ion-icon name="warning"></ion-icon>\n            {{ \'ESTADOT\' | translate }}\n           </ion-item>\n       </ion-list>\n    </form>\n  </ion-content>'/*ion-inline-end:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\EMPRESA\bus-create\bus-create.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3__providers__["d" /* NotificationProvider */], __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["F" /* ViewController */], __WEBPACK_IMPORTED_MODULE_3__providers__["a" /* Auth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */]])
    ], BusCreatePage);
    return BusCreatePage;
}());

//# sourceMappingURL=bus-create.js.map

/***/ })

});
//# sourceMappingURL=155.js.map