webpackJsonp([248],{

/***/ 1349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SuscriptorsaldoPage; });
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






var SuscriptorsaldoPage = /** @class */ (function () {
    function SuscriptorsaldoPage(storage, msj, translateService, viewCtrl, authService, navCtrl, navParams, _FB, actionSheetCtrl, events) {
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
        this.createdCode = null;
        this.scannedCode = null;
        this.card = {
            state: 'OFF',
            logo: "assets/img/visa2.png",
            a: 1234,
            b: 5522,
            c: 8432,
            d: 2264,
            expires: '7/12',
            bank: 'Tarjeta'
        };
        // Define form validation - VERY basic!
        this.form = this._FB.group({
            saldoactual: [''],
            codigo1: [''],
            codigo2: [''],
            codigo3: [''],
            codigo4: [''],
            codigo5: [''],
            dispositivo1: [''],
            dispositivo2: [''],
            dispositivo3: [''],
            dispositivo4: [''],
            dispositivo5: ['']
        });
        this.authService.getReg('suscriptor-disp', 'datosfijos2').then(function (result) {
            _this.vgrupo = result;
        }, function (err) {
            _this.msj.showError3('Error', err.error);
        });
    }
    SuscriptorsaldoPage.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get('username').then(function (value) {
            _this.username = value;
        });
    };
    SuscriptorsaldoPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.idsuscriptor = this.navParams.data.record2.idsuscriptor;
        this.idnombre = this.navParams.data.record2.idnombre;
        this.translateService.get('APPX').subscribe(function (value) {
            _this.idempresa = value;
        });
        this.authService.getReg(this.navParams.data.record2.iddpi + '/personadisp/' + this.idempresa, 'personals').then(function (result) {
            _this._ID = result[0]._id;
            _this.saldoactual = result[0].saldo;
            _this.codigo1 = result[0].codigo1;
            _this.codigo2 = result[0].codigo2;
            _this.codigo3 = result[0].codigo3;
            _this.codigo4 = result[0].codigo4;
            _this.codigo5 = result[0].codigo5;
            _this.dispositivo1 = result[0].dispositivo1;
            _this.dispositivo2 = result[0].dispositivo2;
            _this.dispositivo3 = result[0].dispositivo3;
            _this.dispositivo4 = result[0].dispositivo4;
            _this.dispositivo5 = result[0].dispositivo5;
        }, function (err) {
            _this.msj.showError3('Error', err.error);
        });
        this.pageTitle = "Dispositivos y saldo";
        if (this.navParams.get("record") == null) {
            this.isDisablednit = true;
        }
        else {
            this.isDisablednit = false;
        }
    };
    SuscriptorsaldoPage.prototype.manageGallery = function () {
        var _this = this;
        var creat = 'Actualiza';
        if (this.navParams.get("record") == null) {
            creat = 'Crea';
        }
        var options = {
            idsuscriptor: { id: this.idsuscriptor, nombre: this.idnombre },
            codigo1: this.form.controls['codigo1'].value,
            codigo2: this.form.controls['codigo2'].value,
            codigo3: this.form.controls['codigo3'].value,
            codigo4: this.form.controls['codigo4'].value,
            codigo5: this.form.controls['codigo5'].value,
            dispositivo1: this.form.controls['dispositivo1'].value,
            dispositivo2: this.form.controls['dispositivo2'].value,
            dispositivo3: this.form.controls['dispositivo3'].value,
            dispositivo4: this.form.controls['dispositivo4'].value,
            dispositivo5: this.form.controls['dispositivo5'].value,
            saldoactual: this.form.controls['saldoactual'].value,
            bitacora: { idempresa: this.idempresa, idafiliado: '', email: this.username, permiso: creat, accion: creat + ' suscriptor saldo ' }
        };
        if (this.navParams.get("record") == null) {
            if (options) {
                this.authService.createReg('', options, 'suscriptorsaldos').then(function (result) {
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
                this.authService.createReg(this._ID, options, 'suscriptorsaldos').then(function (result) {
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
    SuscriptorsaldoPage.prototype.stringify = function (country) {
        return JSON.stringify(country);
    };
    SuscriptorsaldoPage.prototype.cancel = function () {
        this.viewCtrl.dismiss();
    };
    SuscriptorsaldoPage.prototype.done = function () {
        if (!this.form.valid) {
            return;
        }
        //this.viewCtrl.dismiss(this.form.value);
    };
    SuscriptorsaldoPage.prototype.optionsFn = function (item) {
        console.log(item);
    };
    SuscriptorsaldoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-suscriptorsaldo',template:/*ion-inline-start:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\BUSES\suscriptorsaldo\suscriptorsaldo.html"*/'<ion-header>\n    <ion-navbar>\n      <ion-title>{{pageTitle}}</ion-title>\n      \n      <ion-buttons end>\n          <button (click)="cancel()" icon-only ion-button padding-right>\n              <ion-icon name="md-close"></ion-icon>\n            </button>\n        \n      </ion-buttons>\n    </ion-navbar>\n  </ion-header>\n  <ion-content padding>\n\n    <form     [formGroup]="form"   text-wrap>\n      <ion-list>\n        \n       \n            <ion-item margin-bottom>\n                    <ion-label >Saldo actual</ion-label>\n                \n                    <ion-label ion-left>{{saldoactual}}</ion-label >\n                 </ion-item>\n      \n\n                 <ion-grid *ngIf="codigo1!==\'\'" [class.cardON]="1==1" >\n                  <ion-row>\n                    <ion-col class="state">\n                      <div class="msg">\n                        <span [class.ON]="1==1" ></span> Card ON\n                      </div>\n                    </ion-col>\n                  <!--  <ion-col class="logo">     <img class="brand" [src]="card.logo">            </ion-col> -->\n                  </ion-row>\n                  <ion-row>\n                    <ion-col class="chip">\n                      <img src="assets/img/chip.png">\n                    \n                    </ion-col>\n                    <ion-col class="nombre">\n                      {{dispositivo1}}    \n                    </ion-col>\n                  </ion-row>\n                  <ion-row class="digits">\n                    <ion-col class="number">\n                      {{codigo1}}\n                    </ion-col>\n                  \n                  </ion-row>\n                  <ion-row>\n                    \n                    <ion-col class="bank">\n                      Tarjeta No 1\n                    </ion-col>\n                  </ion-row>\n                </ion-grid>\n\n\n                <ion-grid *ngIf="codigo2!==\'\'" [class.cardON]="1==1"  >\n                  <ion-row>\n                    <ion-col class="state">\n                      <div class="msg">\n                        <span [class.ON]="1==1" ></span> Card ON\n                      </div>\n                    </ion-col>\n                  <!--  <ion-col class="logo">     <img class="brand" [src]="card.logo">            </ion-col> -->\n                  </ion-row>\n                  <ion-row>\n                    <ion-col class="chip">\n                      <img src="assets/img/chip.png">\n                    \n                    </ion-col>\n                    <ion-col class="nombre">\n                      {{dispositivo2}}    \n                    </ion-col>\n                  </ion-row>\n                  <ion-row class="digits">\n                    <ion-col class="number">\n                      {{codigo2}}\n                    </ion-col>\n                  \n                  </ion-row>\n                  <ion-row>\n                    \n                    <ion-col class="bank">\n                      Tarjeta No 2\n                    </ion-col>\n                  </ion-row>\n                </ion-grid>\n\n\n                <ion-grid *ngIf="codigo3!==\'\'" [class.cardON]="1==1" >\n                  <ion-row>\n                    <ion-col class="state">\n                      <div class="msg">\n                        <span [class.ON]="1==1" ></span> Card ON\n                      </div>\n                    </ion-col>\n                  <!--  <ion-col class="logo">     <img class="brand" [src]="card.logo">            </ion-col> -->\n                  </ion-row>\n                  <ion-row>\n                    <ion-col class="chip">\n                      <img src="assets/img/chip.png">\n                    \n                    </ion-col>\n                    <ion-col class="nombre">\n                      {{dispositivo3}}    \n                    </ion-col>\n                  </ion-row>\n                  <ion-row class="digits">\n                    <ion-col class="number">\n                      {{codigo3}}\n                    </ion-col>\n                  \n                  </ion-row>\n                  <ion-row>\n                    \n                    <ion-col class="bank">\n                      Tarjeta No 3\n                    </ion-col>\n                  </ion-row>\n                </ion-grid>\n\n\n                <ion-grid *ngIf="codigo4!==\'\'" [class.cardON]="1==1" >\n                  <ion-row>\n                    <ion-col class="state">\n                      <div class="msg">\n                        <span [class.ON]="1==1" ></span> Card ON\n                      </div>\n                    </ion-col>\n                  <!--  <ion-col class="logo">     <img class="brand" [src]="card.logo">            </ion-col> -->\n                  </ion-row>\n                  <ion-row>\n                    <ion-col class="chip">\n                      <img src="assets/img/chip.png">\n                    \n                    </ion-col>\n                    <ion-col class="nombre">\n                      {{dispositivo4}}    \n                    </ion-col>\n                  </ion-row>\n                  <ion-row class="digits">\n                    <ion-col class="number">\n                      {{codigo4}}\n                    </ion-col>\n                  \n                  </ion-row>\n                  <ion-row>\n                    \n                    <ion-col class="bank">\n                      Tarjeta No 4\n                    </ion-col>\n                  </ion-row>\n                </ion-grid>\n\n\n                <ion-grid *ngIf="codigo5!==\'\'" [class.cardON]="1==1" >\n                  <ion-row>\n                    <ion-col class="state">\n                      <div class="msg">\n                        <span [class.ON]="1==1" ></span> Card ON\n                      </div>\n                    </ion-col>\n                  <!--  <ion-col class="logo">     <img class="brand" [src]="card.logo">            </ion-col> -->\n                  </ion-row>\n                  <ion-row>\n                    <ion-col class="chip">\n                      <img src="assets/img/chip.png">\n                    \n                    </ion-col>\n                    <ion-col class="nombre">\n                      {{dispositivo5}}    \n                    </ion-col>\n                  </ion-row>\n                  <ion-row class="digits">\n                    <ion-col class="number">\n                      {{codigo5}}\n                    </ion-col>\n                  \n                  </ion-row>\n                  <ion-row>\n                    \n                    <ion-col class="bank">\n                      Tarjeta No 5\n                    </ion-col>\n                  </ion-row>\n                </ion-grid>\n\n\n\n           \n\n       </ion-list>\n       \n       \n    </form>\n  \n   \n  \n  </ion-content>'/*ion-inline-end:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\BUSES\suscriptorsaldo\suscriptorsaldo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3__providers__["d" /* NotificationProvider */], __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["F" /* ViewController */], __WEBPACK_IMPORTED_MODULE_3__providers__["a" /* Auth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */]])
    ], SuscriptorsaldoPage);
    return SuscriptorsaldoPage;
}());

//# sourceMappingURL=suscriptorsaldo.js.map

/***/ }),

/***/ 909:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuscriptorsaldoPageModule", function() { return SuscriptorsaldoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__suscriptorsaldo__ = __webpack_require__(1349);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SuscriptorsaldoPageModule = /** @class */ (function () {
    function SuscriptorsaldoPageModule() {
    }
    SuscriptorsaldoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__suscriptorsaldo__["a" /* SuscriptorsaldoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__suscriptorsaldo__["a" /* SuscriptorsaldoPage */]),
            ],
        })
    ], SuscriptorsaldoPageModule);
    return SuscriptorsaldoPageModule;
}());

//# sourceMappingURL=suscriptorsaldo.module.js.map

/***/ })

});
//# sourceMappingURL=248.js.map