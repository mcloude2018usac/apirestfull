webpackJsonp([240],{

/***/ 1382:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Asignacioncalusac102aCreatePage; });
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






var Asignacioncalusac102aCreatePage = /** @class */ (function () {
    function Asignacioncalusac102aCreatePage(alertCtrl, loadingCtrl, storage, msj, translateService, viewCtrl, authService, navCtrl, navParams, _FB, actionSheetCtrl, events) {
        var _this = this;
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
        this.tiposus = [];
        this.idperiodo2 = [];
        this.personalid = "";
        this.dataxx = [];
        this.ordenpago = '';
        this.llave = '';
        this.rubro = '45';
        this.ano = '2019';
        this.fecha = (new Date()).toISOString();
        this.items = [];
        this.resultado = [];
        this.vgrupo = [];
        this.vgrupo2 = [];
        this.vgrupo3 = [];
        // Define form validation - VERY basic!
        this.form = this._FB.group({
            iddia: [''],
            idhora: [''],
            idhoraf: [''],
        });
        this.titulo2 = 'Sede';
        this.translateService.get('APPX').subscribe(function (value) {
            _this.idempresa = value;
        });
    }
    Asignacioncalusac102aCreatePage.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get('username').then(function (value) {
            _this.username = value;
        });
        this.novp = this.navParams.data.nov;
    };
    Asignacioncalusac102aCreatePage.prototype.ionViewDidLoad = function () {
        this.dataxx = this.navParams.data.datax;
        this.iddia = this.dataxx.n1;
        this.idhora = this.dataxx.n2;
        this.idhoraf = this.dataxx.n4;
    };
    Asignacioncalusac102aCreatePage.prototype.manageGallery2 = function (loading) {
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
        var options = {
            operacion: 'ponenota2',
            n1: this.iddia,
            n2: this.idhora,
            n3: Number(this.iddia) + Number(this.idhora),
            n4: this.idhoraf,
            n5: Number(this.iddia) + Number(this.idhora) + Number(this.idhoraf),
            bitacora: { idempresa: this.idempresa, idafiliado: '', email: this.username, permiso: creat, accion: creat + ' asigna nota examen de bimestre ' }
        };
        if (options) {
            this.authService.createReg2b(this.dataxx._id, options, 'asignaubicacions').then(function (result) {
                loading.dismiss();
                if (!_this.form.valid) {
                    return;
                }
                _this.viewCtrl.dismiss(result);
            }, function (err) {
                loading.dismiss();
                _this.msj.showError3('Mensaje', err.error);
            });
        }
    };
    Asignacioncalusac102aCreatePage.prototype.manageGallery = function () {
        if (this.username == '') {
            this.msj.showError3('Mensaje', 'Existe un problema con su dispositivo , no existe usuario');
            return;
        }
        if (!this.username) {
            this.msj.showError3('Mensaje', 'Existe un problema con su dispositivo , no existe usuario');
            return;
        }
        var loading = this.loadingCtrl.create({
            spinner: 'bubbles',
            content: "Espere un momento,  Realizando  Operación ......"
        });
        loading.present();
        this.manageGallery2(loading);
    };
    Asignacioncalusac102aCreatePage.prototype.cancel2 = function () {
        this.identificador = '';
        this.iddia = '';
        this.idtipo = '';
        this.iddia2 = '';
        this.idhora = '';
        this.nombre = '';
        this.items = [];
    };
    Asignacioncalusac102aCreatePage.prototype.cancel = function () {
        this.viewCtrl.dismiss();
    };
    Asignacioncalusac102aCreatePage.prototype.done = function () {
        if (!this.form.valid) {
            return;
        }
        //this.viewCtrl.dismiss(this.form.value);   
    };
    Asignacioncalusac102aCreatePage.prototype.onSelectChange = function (selectedValue) {
        this.iddia2 = selectedValue.split(',');
    };
    Asignacioncalusac102aCreatePage.prototype.onSelectChange2 = function (selectedValue) {
        this.idhora2 = selectedValue.split(',');
    };
    Asignacioncalusac102aCreatePage.prototype.onSelectChange3 = function (selectedValue) {
        this.idhoraf2 = selectedValue.split(',');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('fileInput'),
        __metadata("design:type", Object)
    ], Asignacioncalusac102aCreatePage.prototype, "fileInput", void 0);
    Asignacioncalusac102aCreatePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-asignacioncalusac102a-create',template:/*ion-inline-start:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\CALUSAC\UBICACIONES\asignacioncalusac102a-create\asignacioncalusac102a-create.html"*/'<ion-header no-border class="opaque">\n  <ion-navbar  no-border-bottom>\n      <ion-title>{{pageTitle}}</ion-title>\n      <ion-buttons start>\n          <button (click)="cancel()" icon-only ion-button padding-right>\n              <ion-icon name="md-close"></ion-icon>\n            </button>\n\n      </ion-buttons>\n         \n    </ion-navbar>\n  </ion-header>\n  <ion-content fullscreen>\n    <form     [formGroup]="form"   text-wrap>\n\n      <ion-grid>\n        <ion-row>  \n          <ion-col justify-content-start align-items-start>\n           Oral\n          </ion-col >\n          <ion-col justify-content-start align-items-start>\n            Escrita\n          </ion-col>\n          <ion-col justify-content-start align-items-start>\n            Final\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <ion-input\n            type="Number"\n            [(ngModel)]="iddia"  [formControl]="form.controls[\'iddia\']"\n           ></ion-input>\n\n          </ion-col>\n          <ion-col>\n            <ion-input\n            type="Number"\n            [(ngModel)]="idhora" [formControl]="form.controls[\'idhora\']"\n           ></ion-input>\n          </ion-col>\n          <ion-col>\n            <ion-input\n            type="Number"\n            [(ngModel)]="idhoraf" [formControl]="form.controls[\'idhoraf\']"\n           ></ion-input>\n          </ion-col>\n          <ion-col text-center>\n            <button [disabled]="!form.valid" ion-button   (click)="manageGallery()" strong>\n              <ion-icon name="checkmark"></ion-icon>\n            </button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n\n\n    </form>\n  \n  \n  </ion-content>'/*ion-inline-end:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\CALUSAC\UBICACIONES\asignacioncalusac102a-create\asignacioncalusac102a-create.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3__providers__["d" /* NotificationProvider */], __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["F" /* ViewController */], __WEBPACK_IMPORTED_MODULE_3__providers__["a" /* Auth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */]])
    ], Asignacioncalusac102aCreatePage);
    return Asignacioncalusac102aCreatePage;
}());

//# sourceMappingURL=asignacioncalusac102a-create.js.map

/***/ }),

/***/ 942:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Asignacioncalusac102aCreatePageModule", function() { return Asignacioncalusac102aCreatePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__asignacioncalusac102a_create__ = __webpack_require__(1382);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pipes_pipes_module__ = __webpack_require__(445);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var Asignacioncalusac102aCreatePageModule = /** @class */ (function () {
    function Asignacioncalusac102aCreatePageModule() {
    }
    Asignacioncalusac102aCreatePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__asignacioncalusac102a_create__["a" /* Asignacioncalusac102aCreatePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__asignacioncalusac102a_create__["a" /* Asignacioncalusac102aCreatePage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild(),
                __WEBPACK_IMPORTED_MODULE_4__pipes_pipes_module__["a" /* PipesModule */]
            ],
        })
    ], Asignacioncalusac102aCreatePageModule);
    return Asignacioncalusac102aCreatePageModule;
}());

//# sourceMappingURL=asignacioncalusac102a-create.module.js.map

/***/ })

});
//# sourceMappingURL=240.js.map