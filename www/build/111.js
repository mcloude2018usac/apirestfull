webpackJsonp([111],{

/***/ 1071:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsignacionPapCreatePageModule", function() { return AsignacionPapCreatePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__asignacion_pap_create__ = __webpack_require__(1527);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__ = __webpack_require__(445);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AsignacionPapCreatePageModule = /** @class */ (function () {
    function AsignacionPapCreatePageModule() {
    }
    AsignacionPapCreatePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__asignacion_pap_create__["a" /* AsignacionPapCreatePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__asignacion_pap_create__["a" /* AsignacionPapCreatePage */]),
                __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["b" /* TranslateModule */].forChild(),
                __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__["a" /* PipesModule */]
            ],
        })
    ], AsignacionPapCreatePageModule);
    return AsignacionPapCreatePageModule;
}());

//# sourceMappingURL=asignacion-pap-create.module.js.map

/***/ }),

/***/ 1527:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AsignacionPapCreatePage; });
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






var AsignacionPapCreatePage = /** @class */ (function () {
    function AsignacionPapCreatePage(storage, msj, translateService, viewCtrl, authService, navCtrl, navParams, _FB, actionSheetCtrl, events) {
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
        this.items = [];
        this.tiposus = [];
        this.username = "";
        this.isDisablednit = false;
        this.translateService.get('APPX').subscribe(function (value) {
            _this.idempresa = value;
        });
        this.form = this._FB.group({
            cui: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            nota: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
        });
    }
    AsignacionPapCreatePage.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get('username').then(function (value) {
            _this.username = value;
        });
        this.idsuscriptor = this.navParams.data.record2.idsuscriptor;
        this.idnombre = this.navParams.data.record2.idnombre;
        this.storage.get('tiposus').then(function (value) {
            _this.tiposus = value.split(',');
            // this.idsuscriptor=this.tiposus[3]
            _this.cuitt = _this.tiposus[2];
            _this.cui = _this.tiposus[2];
            _this.idsus2 = _this.tiposus[3];
            _this.idnombre2 = _this.tiposus[4];
            _this.focused('a');
        });
    };
    AsignacionPapCreatePage.prototype.ionViewDidLoad = function () {
        this.pageTitle = "Solicitud de carné";
        if (this.navParams.get("record") == null) {
            this.isDisablednit = true;
        }
        else {
            this._ID = this.navParams.data.record._id;
            //   this.idsuscriptor 				=	this.navParams.data.record.idsuscriptor._id;
            // this._IDSUSCRIPTOR				=	this.navParams.data.record.idsuscriptor._id;
            this.nombre = this.navParams.data.record.nombre;
            this.estado = this.navParams.data.record.estado;
            this.nota = this.navParams.data.record.nota;
            this.isDisablednit = false;
        }
    };
    AsignacionPapCreatePage.prototype.manageGallery = function () {
        var _this = this;
        var creat = 'Actualiza';
        if (this.navParams.get("record") == null) {
            creat = 'Crea';
            this.estado = 'En proceso de confirmación de orden de pago.';
        }
        var options = {
            userId: this.idsuscriptor,
            nombre: this.idnombre,
            idperiodo: '5c5863254c69970d208e7a48',
            nota: 'Correcta.',
            estado: this.estado,
            bitacora: { idempresa: this.idempresa, idafiliado: '', email: this.username, permiso: creat, accion: creat + ' solicitud papa ' }
        };
        if (this.navParams.get("record") == null) {
            if (options) {
                this.authService.createReg('', options, 'asignapaps').then(function (result) {
                    //   if (!this.form.valid) { return; }
                    _this.viewCtrl.dismiss(result);
                }, function (err) {
                    _this.msj.showError3('Error', err.error);
                });
            }
        }
        else {
            if (options) {
                this.authService.createReg(this._ID, options, 'asignapaps').then(function (result) {
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
    AsignacionPapCreatePage.prototype.cancel = function () {
        this.viewCtrl.dismiss();
    };
    AsignacionPapCreatePage.prototype.done = function () {
        if (!this.form.valid) {
            return;
        }
        //this.viewCtrl.dismiss(this.form.value);
    };
    AsignacionPapCreatePage.prototype.focused = function (selectedValue) {
        if ((this.cui) && (this.cui != '')) {
            this.items = [];
            this.manageGallery();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('fileInput'),
        __metadata("design:type", Object)
    ], AsignacionPapCreatePage.prototype, "fileInput", void 0);
    AsignacionPapCreatePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-asignacion-pap-create',template:/*ion-inline-start:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\PAP\asignacion-pap-create\asignacion-pap-create.html"*/'<ion-header no-border class="opaque">\n  <ion-navbar  no-border-bottom>\n      <ion-title>{{pageTitle}}</ion-title>\n     \n      <ion-buttons end>\n        \n          <button (click)="cancel()" icon-only ion-button padding-right>\n              <ion-icon name="md-close"></ion-icon>\n            </button>\n          <button  (click)="manageGallery()"  [disabled]="!form.valid" icon-only ion-button padding-right>\n              <ion-icon name="done-all"></ion-icon>\n            </button>\n      </ion-buttons>\n    </ion-navbar>\n  </ion-header>\n  \n  <ion-content fullscreen>\n  \n    <form\n      [formGroup]="form" text-wrap>\n      <ion-list>\n  \n      \n  \n  \n  \n  \n    <ion-item margin-bottom>\n      <ion-label>Motivo</ion-label>\n      <ion-textarea rows="5"\n      type="text"\n      [(ngModel)]="nota" [formControl]="form.controls[\'nota\']"\n     ></ion-textarea>\n   </ion-item>\n   <ion-item class="invalid" *ngIf="!form.controls.nota.valid && (form.controls.nota.dirty || form.controls.nota.touched)" text-wrap>\n    <ion-icon name="warning"></ion-icon>\n    {{ \'MOTIVOT\' | translate }}\n   </ion-item>\n   \n   \n         \n           \n        \n       </ion-list>\n    </form>\n  \n  \n  </ion-content>\n  \n  '/*ion-inline-end:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\PAP\asignacion-pap-create\asignacion-pap-create.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3__providers__["d" /* NotificationProvider */], __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["F" /* ViewController */], __WEBPACK_IMPORTED_MODULE_3__providers__["a" /* Auth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */]])
    ], AsignacionPapCreatePage);
    return AsignacionPapCreatePage;
}());

//# sourceMappingURL=asignacion-pap-create.js.map

/***/ })

});
//# sourceMappingURL=111.js.map