webpackJsonp([242],{

/***/ 1379:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Asignacioncalusac101CreatePage; });
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






var Asignacioncalusac101CreatePage = /** @class */ (function () {
    function Asignacioncalusac101CreatePage(alertCtrl, loadingCtrl, storage, msj, translateService, viewCtrl, authService, navCtrl, navParams, _FB, actionSheetCtrl, events) {
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
            iddia: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            idhora: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
        });
        this.titulo2 = 'Sede';
        this.translateService.get('APPX').subscribe(function (value) {
            _this.idempresa = value;
        });
    }
    Asignacioncalusac101CreatePage.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get('username').then(function (value) {
            _this.username = value;
        });
        this.novp = this.navParams.data.nov;
    };
    Asignacioncalusac101CreatePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.dataxx = this.navParams.data.datax;
        this.authService.getReg2b(this.dataxx.idtipounidad.id + '/' + this.dataxx.ididioma._id + '/' + this.dataxx.idperiodo.id + '/' + '123' + '/dias', 'unidadplan4s').then(function (result) {
            _this.vgrupo = result;
            var new_test = [{ 'nombre': '' }];
            new_test[0].nombre = _this.vgrupo[0].nombre;
            for (var i = 0; i <= _this.vgrupo.length - 1; i++) {
                var duplicate = false;
                for (var j = new_test.length - 1; j >= 0; j--) {
                    if (_this.vgrupo[i].nombre == new_test[j].nombre)
                        duplicate = true;
                }
                if (!duplicate)
                    new_test.push(_this.vgrupo[i]);
            }
            _this.vgrupo = new_test;
        }, function (err) {
            _this.msj.showError3('Error', err.error);
        });
    };
    Asignacioncalusac101CreatePage.prototype.manageGallery2 = function (loading) {
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
        if (this.navParams.get("record") == null) {
            creat = 'Crea';
        }
        var options = {
            operacion: 'asigna',
            iddia: this.iddia2,
            idhora: this.idhora2,
            bitacora: { idempresa: this.idempresa, idafiliado: '', email: this.username, permiso: creat, accion: creat + ' asigna examen de ubicacion ' }
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
    Asignacioncalusac101CreatePage.prototype.manageGallery = function () {
        if (this.username == '') {
            this.msj.showError3('Mensaje', 'Existe un problema con su dispositivo , no existe usuario');
            return;
        }
        if (!this.username) {
            this.msj.showError3('Mensaje', 'Existe un problema con su dispositivo , no existe usuario');
            return;
        }
        if (!this.idhora) {
            this.msj.showError3('Mensaje', 'Seleccione una hora valida');
            return;
        }
        if (!this.iddia2) {
            this.msj.showError3('Mensaje', 'Seleccione un dia valido');
            return;
        }
        var loading = this.loadingCtrl.create({
            spinner: 'bubbles',
            content: "Espere un momento,  Realizando  Operación ......"
        });
        loading.present();
        this.manageGallery2(loading);
    };
    Asignacioncalusac101CreatePage.prototype.cancel2 = function () {
        this.identificador = '';
        this.iddia = '';
        this.idtipo = '';
        this.iddia2 = '';
        this.idhora = '';
        this.nombre = '';
        this.items = [];
    };
    Asignacioncalusac101CreatePage.prototype.cancel = function () {
        this.viewCtrl.dismiss();
    };
    Asignacioncalusac101CreatePage.prototype.done = function () {
        if (!this.form.valid) {
            return;
        }
        //this.viewCtrl.dismiss(this.form.value);
    };
    Asignacioncalusac101CreatePage.prototype.onSelectChange = function (selectedValue) {
        var _this = this;
        this.iddia2 = selectedValue;
        this.titulo2 = 'una unidad académica';
        this.authService.getReg2b(this.dataxx.idtipounidad.id + '/' + this.iddia2 + '/' + this.dataxx.idperiodo.id + '/' + this.dataxx.ididioma._id + '/horas', 'unidadplan4s').then(function (result) {
            _this.vgrupo2 = result;
        }, function (err) {
            _this.msj.showError3('Error', err.error);
        });
    };
    Asignacioncalusac101CreatePage.prototype.onSelectChange2 = function (selectedValue) {
        this.idhora2 = selectedValue;
        if (this.iddia == undefined || this.iddia == '') {
            this.msj.showError3('Importante', 'Seleccione sede. ');
            this.idhora2 = '';
            this.idhora = '';
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('fileInput'),
        __metadata("design:type", Object)
    ], Asignacioncalusac101CreatePage.prototype, "fileInput", void 0);
    Asignacioncalusac101CreatePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-asignacioncalusac101-create',template:/*ion-inline-start:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\CALUSAC\UBICACIONES\asignacioncalusac101-create\asignacioncalusac101-create.html"*/'<ion-header no-border class="opaque">\n  <ion-navbar  no-border-bottom>\n      <ion-title>{{pageTitle}}</ion-title>\n      <ion-buttons start>\n          <button (click)="cancel()" icon-only ion-button padding-right>\n              <ion-icon name="md-close"></ion-icon>\n            </button>\n\n      </ion-buttons>\n      \n    </ion-navbar>\n  </ion-header>\n  <ion-content fullscreen>\n    <form     [formGroup]="form"   text-wrap>\n      <ion-list>\n        \n        \n        <ion-item margin-bottom text-wrap>\n            <ion-label class="my-label18" color="secondary2"  stacked>Dia</ion-label>\n\n          <ion-select (ionChange)="onSelectChange($event)" [(ngModel)]="iddia" [formControl]="form.controls[\'iddia\']">\n              <ion-option text-wrap *ngFor="let item of vgrupo" [value]="item.nombre" >{{item.nombre | Dafecha0}}</ion-option>\n          </ion-select>  \n         \n\n       </ion-item>\n       <ion-item class="invalid" *ngIf="!form.controls.iddia.valid && (form.controls.iddia.dirty || form.controls.iddia.touched)" text-wrap>\n        <ion-icon name="warning"></ion-icon>\n       Ingrese un tipo de unidad academica\n       </ion-item>\n\n       <ion-item margin-bottom text-wrap>\n \n        <ion-label class="my-label18" color="secondary2"  stacked>Hora </ion-label>\n\n        <ion-select  (ionChange)="onSelectChange2($event)"  [(ngModel)]="idhora" [formControl]="form.controls[\'idhora\']">\n            <ion-option text-wrap *ngFor="let item of vgrupo2" [value]="item.nombre">{{item.nombre}}</ion-option>\n        </ion-select>  \n\n\n     </ion-item>\n\n         <ion-item class="invalid" *ngIf="!form.controls.idhora.valid && (form.controls.idhora.dirty || form.controls.idhora.touched)" text-wrap>\n           <ion-icon name="warning"></ion-icon>\n           Ingrese una hora valido\n          </ion-item>\n      \n          \n          <ion-row >\n              <ion-col text-center>\n                <button [disabled]="!form.valid" ion-button block color="secondary" (click)="manageGallery()" strong>\n                 Asignar\n                </button>\n              </ion-col>\n            </ion-row>\n         \n  \n  \n        \n       </ion-list>\n    </form>\n  \n  \n  </ion-content>'/*ion-inline-end:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\CALUSAC\UBICACIONES\asignacioncalusac101-create\asignacioncalusac101-create.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3__providers__["d" /* NotificationProvider */], __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["F" /* ViewController */], __WEBPACK_IMPORTED_MODULE_3__providers__["a" /* Auth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */]])
    ], Asignacioncalusac101CreatePage);
    return Asignacioncalusac101CreatePage;
}());

//# sourceMappingURL=asignacioncalusac101-create.js.map

/***/ }),

/***/ 939:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Asignacioncalusac101CreatePageModule", function() { return Asignacioncalusac101CreatePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__asignacioncalusac101_create__ = __webpack_require__(1379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pipes_pipes_module__ = __webpack_require__(445);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var Asignacioncalusac101CreatePageModule = /** @class */ (function () {
    function Asignacioncalusac101CreatePageModule() {
    }
    Asignacioncalusac101CreatePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__asignacioncalusac101_create__["a" /* Asignacioncalusac101CreatePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__asignacioncalusac101_create__["a" /* Asignacioncalusac101CreatePage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild(),
                __WEBPACK_IMPORTED_MODULE_4__pipes_pipes_module__["a" /* PipesModule */]
            ],
        })
    ], Asignacioncalusac101CreatePageModule);
    return Asignacioncalusac101CreatePageModule;
}());

//# sourceMappingURL=asignacioncalusac101-create.module.js.map

/***/ })

});
//# sourceMappingURL=242.js.map