webpackJsonp([139],{

/***/ 1023:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConferenciaCreatePageModule", function() { return ConferenciaCreatePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__conferencia_create__ = __webpack_require__(1465);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ConferenciaCreatePageModule = /** @class */ (function () {
    function ConferenciaCreatePageModule() {
    }
    ConferenciaCreatePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__conferencia_create__["a" /* ConferenciaCreatePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__conferencia_create__["a" /* ConferenciaCreatePage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], ConferenciaCreatePageModule);
    return ConferenciaCreatePageModule;
}());

//# sourceMappingURL=conferencia-create.module.js.map

/***/ }),

/***/ 1465:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConferenciaCreatePage; });
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






var ConferenciaCreatePage = /** @class */ (function () {
    function ConferenciaCreatePage(storage, msj, translateService, viewCtrl, authService, navCtrl, navParams, _FB, actionSheetCtrl, events) {
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
        this.fechaini = (new Date()).toISOString();
        this.fechafin = (new Date()).toISOString();
        this.createdCode = null;
        this.scannedCode = null;
        this.translateService.get('APPX').subscribe(function (value) {
            _this.idempresa = value;
        });
        this.form = this._FB.group({
            nombre: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            conferencista: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            fechaini: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            fechafin: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            nomax: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            costo: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            estado: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required]
        });
    }
    ConferenciaCreatePage.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get('username').then(function (value) {
            _this.username = value;
        });
    };
    ConferenciaCreatePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.idevento = this.navParams.data.record2.idevento;
        this.nidevento = this.navParams.data.record2.nidevento;
        if (this.navParams.get("record") == null) {
            this.translateService.get('ITEM_CREATE_TITLE').subscribe(function (value) {
                _this.pageTitle = value;
            });
            this.isDisablednit = true;
        }
        else {
            this._ID = this.navParams.data.record._id;
            //this.idevento		=	this.navParams.data.record.idevento;
            this.nombre = this.navParams.data.record.nombre;
            this.conferencista = this.navParams.data.record.conferencista;
            this.fechaini = this.navParams.data.record.fechaini;
            this.fechafin = this.navParams.data.record.fechafin;
            this.costo = this.navParams.data.record.costo;
            this.nomax = this.navParams.data.record.nomax;
            this.estado = this.navParams.data.record.estado;
            this.isDisablednit = false;
            this.translateService.get('ITEM_UPDATE_TITLE').subscribe(function (value) {
                _this.pageTitle = value;
            });
        }
    };
    ConferenciaCreatePage.prototype.formatAMPM = function (date) {
        var hours = date[0];
        var minutes = date[1];
        var ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        var strTime = hours + ':' + minutes + ' ' + ampm;
        return strTime;
    };
    ConferenciaCreatePage.prototype.manageGallery = function () {
        var _this = this;
        var creat = 'Actualiza';
        if (this.navParams.get("record") == null) {
            creat = 'Crea';
        }
        var options = {
            idempresa: this.idempresa,
            idevento: this.idevento,
            nombre: this.form.controls['nombre'].value,
            conferencista: this.form.controls['conferencista'].value,
            fechaini: this.form.controls['fechaini'].value,
            fechafin: this.form.controls['fechafin'].value,
            costo: this.form.controls['costo'].value,
            nomax: this.form.controls['nomax'].value,
            estado: this.form.controls['estado'].value,
            bitacora: { idempresa: this.idempresa, idafiliado: '', email: this.username, permiso: creat, accion: creat + ' Conferencias ' }
        };
        if (this.navParams.get("record") == null) {
            if (options) {
                this.authService.createReg('', options, 'conferencias').then(function (result) {
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
                this.authService.createReg(this._ID, options, 'conferencias').then(function (result) {
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
    ConferenciaCreatePage.prototype.cancel = function () {
        this.viewCtrl.dismiss();
    };
    ConferenciaCreatePage.prototype.done = function () {
        if (!this.form.valid) {
            return;
        }
        //this.viewCtrl.dismiss(this.form.value);
    };
    ConferenciaCreatePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-conferencia-create',template:/*ion-inline-start:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\EVENTOS\conferencia-create\conferencia-create.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>{{pageTitle}}</ion-title>\n   \n    <ion-buttons end>\n        <button (click)="cancel()" icon-only ion-button padding-right>\n            <ion-icon name="md-close"></ion-icon>\n          </button>\n        <button  (click)="manageGallery()"  [disabled]="!form.valid" icon-only ion-button padding-right>\n            <ion-icon name="done-all"></ion-icon>\n          </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <form     [formGroup]="form"  text-wrap>\n    <ion-list>\n      \n        <ion-item margin-bottom>\n           <ion-label>Nombre</ion-label>\n           <ion-input\n              type="text"\n              [(ngModel)]="nombre" [formControl]="form.controls[\'nombre\']"\n             ></ion-input>\n        </ion-item>\n        <ion-item class="invalid" *ngIf="!form.controls.nombre.valid && (form.controls.nombre.dirty || form.controls.nombre.touched)" text-wrap>\n          <ion-icon name="warning"></ion-icon>\n          {{ \'NOMBRET\' | translate }}\n         </ion-item>\n\n         <ion-item margin-bottom>\n          <ion-label>Nombre Conferencista</ion-label>\n          <ion-input\n             type="text"\n             [(ngModel)]="conferencista" [formControl]="form.controls[\'conferencista\']"\n            ></ion-input>\n       </ion-item>\n       <ion-item class="invalid" *ngIf="!form.controls.conferencista.valid && (form.controls.conferencista.dirty || form.controls.conferencista.touched)" text-wrap>\n         <ion-icon name="warning"></ion-icon>\n         {{ \'CONFERENCISTAT\' | translate }}\n        </ion-item>\n        \n      \n\n        <ion-item margin-bottom>\n          <ion-label>Fecha Inicio</ion-label>\n          <ion-datetime displayFormat="DD/MM/YYYY hh:mm A"  \n          [formControl]="form.controls[\'fechaini\']" [(ngModel)]="fechaini"></ion-datetime>\n        </ion-item>\n        <ion-item class="invalid" *ngIf="!form.controls.fechaini.valid && (form.controls.fechaini.dirty || form.controls.fechaini.touched)" text-wrap>\n          <ion-icon name="warning"></ion-icon>\n          {{ \'FECHAINIT\' | translate }}\n        </ion-item>\n\n       \n\n       <ion-item margin-bottom>\n        <ion-label>Fecha Finaliza</ion-label>\n        <ion-datetime displayFormat="DD/MM/YYYY hh:mm A"  \n        [formControl]="form.controls[\'fechafin\']" [(ngModel)]="fechafin"></ion-datetime>\n      </ion-item>\n      <ion-item class="invalid" *ngIf="!form.controls.fechafin.valid && (form.controls.fechafin.dirty || form.controls.fechafin.touched)" text-wrap>\n        <ion-icon name="warning"></ion-icon>\n        {{ \'FECHAFINT\' | translate }}\n      </ion-item>\n      <ion-item margin-bottom>\n        <ion-label>Costo</ion-label>\n        <ion-input\n           type="text"\n           [(ngModel)]="costo"\n           [formControl]="form.controls[\'costo\']"></ion-input>\n     </ion-item>\n\n     <ion-item margin-bottom>\n      <ion-label>No maximo participantes</ion-label>\n      <ion-input\n         type="text"\n         [(ngModel)]="nomax"\n         [formControl]="form.controls[\'nomax\']"></ion-input>\n   </ion-item>\n   <ion-item class="invalid" *ngIf="!form.controls.nomax.valid && (form.controls.nomax.dirty || form.controls.nomax.touched)" text-wrap>\n    <ion-icon name="warning"></ion-icon>\n    {{ \'NOMAXT\' | translate }}\n   </ion-item>\n\n   <ion-item margin-bottom>\n    <ion-label>Estado</ion-label>\n    <ion-select [(ngModel)]="estado" [formControl]="form.controls[\'estado\']">\n      <ion-option value="Activo">Activo</ion-option>\n      <ion-option value="Inactivo">Inactivo</ion-option>\n    </ion-select>\n </ion-item>\n <ion-item class="invalid" *ngIf="!form.controls.estado.valid && (form.controls.estado.dirty || form.controls.estado.touched)" text-wrap>\n  <ion-icon name="warning"></ion-icon>\n  {{ \'ESTADOT\' | translate }}\n </ion-item>\n\n  \n       \n         \n       \n       \n     </ion-list>\n\n     \n  </form>\n\n\n</ion-content>'/*ion-inline-end:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\EVENTOS\conferencia-create\conferencia-create.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3__providers__["d" /* NotificationProvider */], __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["F" /* ViewController */], __WEBPACK_IMPORTED_MODULE_3__providers__["a" /* Auth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */]])
    ], ConferenciaCreatePage);
    return ConferenciaCreatePage;
}());

//# sourceMappingURL=conferencia-create.js.map

/***/ })

});
//# sourceMappingURL=139.js.map