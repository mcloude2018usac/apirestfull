webpackJsonp([272],{

/***/ 1322:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BibliotecaSolvenciaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngx_translate_core__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_pdf_pdfx__ = __webpack_require__(447);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_auth_auth__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_notification_notification__ = __webpack_require__(201);
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








var BibliotecaSolvenciaPage = /** @class */ (function () {
    function BibliotecaSolvenciaPage(translateService, alertCtrl, msj, storage, regService, viewCtrl, Pdfx, navCtrl, navParams, _FB, actionSheetCtrl, events) {
        var _this = this;
        this.translateService = translateService;
        this.alertCtrl = alertCtrl;
        this.msj = msj;
        this.storage = storage;
        this.regService = regService;
        this.viewCtrl = viewCtrl;
        this.Pdfx = Pdfx;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._FB = _FB;
        this.actionSheetCtrl = actionSheetCtrl;
        this.events = events;
        this.tiposus = [];
        this.nombre = '';
        this.username = "";
        this.items = [];
        this.personalid = "";
        this.letterObj = {
            to: '',
            from: '',
            text: ''
        };
        this.pdfObj = null;
        this.translateService.get('APPX').subscribe(function (value) {
            _this.idempresa = value;
        });
        this.form = this._FB.group({
            nit: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required])],
        });
    }
    BibliotecaSolvenciaPage.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get('username').then(function (value) {
            _this.username = value;
        });
    };
    BibliotecaSolvenciaPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    BibliotecaSolvenciaPage.prototype.ionViewDidLoad = function () {
    };
    BibliotecaSolvenciaPage.prototype.manageGallery2 = function () {
        this.Pdfx.daordenpago('123', 'si', []);
    };
    BibliotecaSolvenciaPage.prototype.manageGallery = function () {
        var _this = this;
        this.regService.getReg(this.form.controls['nit'].value, 'bibliotecas').then(function (data) {
            var aa = '';
            aa = String(data);
            var aar = [];
            if (aa.indexOf('status') > 0) {
                aar = aa.split('"');
                var tota = [];
                tota.push({ status: aar[9] });
                _this.items = tota;
            }
            //   this.Pdfx.daov(this.form.controls['nit'].value,'si',data)   
        }, function (err) {
            _this.msj.showError3('Resultado', 'Resultado no encontrado.');
        });
    };
    BibliotecaSolvenciaPage.prototype.cancel = function () {
        this.viewCtrl.dismiss();
    };
    BibliotecaSolvenciaPage.prototype.done = function () {
        if (!this.form.valid) {
            return;
        }
        //this.viewCtrl.dismiss(this.form.value);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])('fileInput'),
        __metadata("design:type", Object)
    ], BibliotecaSolvenciaPage.prototype, "fileInput", void 0);
    BibliotecaSolvenciaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'page-biblioteca-solvencia',template:/*ion-inline-start:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\BIBLIOTECA\biblioteca-solvencia\biblioteca-solvencia.html"*/'<ion-header no-border class="opaque" >\n  <ion-navbar  no-border-bottom hideBackButton="true">\n    <ion-buttons left>\n      <button ion-button icon-only (click)="goBack()">\n        <ion-icon name="arrow-back"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>\n    Solvencia de Biblioteca\n    </ion-title>\n      \n  </ion-navbar>\n\n\n</ion-header>\n\n<ion-content fullscreen>\n  <form     [formGroup]="form"   text-wrap>\n    <ion-list>\n        <ion-item margin-bottom text-wrap>\n            <ion-label class="my-label18" color="secondary2"  stacked>\n              Ingrese Carné:</ion-label>\n            <ion-input [(ngModel)]="nit" \n             type="number" [formControl]="form.controls[\'nit\']"></ion-input>\n              \n          </ion-item>\n         <ion-item class="invalid" *ngIf="!form.controls.nit.valid && (form.controls.nit.dirty || form.controls.nit.touched)" text-wrap>\n          <ion-icon name="warning"></ion-icon>\n         Ingrese un carné valido\n         </ion-item>\n         <ion-row>\n          <ion-col text-center>\n            <button  ion-button block color="secondary" (click)="manageGallery()" [disabled]="!form.valid" strong>\n              Buscar\n            </button>\n          </ion-col>\n        </ion-row>\n       \n        <ion-item   *ngFor="let item of items " text-wrap>\n      \n      \n          <h2>Estado: {{item.status}} </h2>\n       \n   \n    \n\n\n  </ion-item>\n      \n     </ion-list>\n  </form>\n\n  <ion-list >\n    \n </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\BIBLIOTECA\biblioteca-solvencia\biblioteca-solvencia.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_6__providers_notification_notification__["a" /* NotificationProvider */], __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_5__providers_auth_auth__["a" /* Auth */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["F" /* ViewController */], __WEBPACK_IMPORTED_MODULE_4__providers_pdf_pdfx__["a" /* pdfx */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["w" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["x" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* Events */]])
    ], BibliotecaSolvenciaPage);
    return BibliotecaSolvenciaPage;
}());

//# sourceMappingURL=biblioteca-solvencia.js.map

/***/ }),

/***/ 882:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BibliotecaSolvenciaPageModule", function() { return BibliotecaSolvenciaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__biblioteca_solvencia__ = __webpack_require__(1322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var BibliotecaSolvenciaPageModule = /** @class */ (function () {
    function BibliotecaSolvenciaPageModule() {
    }
    BibliotecaSolvenciaPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__biblioteca_solvencia__["a" /* BibliotecaSolvenciaPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__biblioteca_solvencia__["a" /* BibliotecaSolvenciaPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], BibliotecaSolvenciaPageModule);
    return BibliotecaSolvenciaPageModule;
}());

//# sourceMappingURL=biblioteca-solvencia.module.js.map

/***/ })

});
//# sourceMappingURL=272.js.map