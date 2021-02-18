webpackJsonp([253],{

/***/ 1346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParqueolicenciaEntPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ParqueolicenciaEntPage = /** @class */ (function () {
    function ParqueolicenciaEntPage(_FB, storage, alertCtrl, msj, translateService, navCtrl, navParams, regService) {
        this._FB = _FB;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.msj = msj;
        this.translateService = translateService;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.regService = regService;
        this.loading = true;
        this.items = [];
        this.items2 = [];
        this.sidist = false;
        this.hasFilter = false;
        this.tiposus = [];
        this.fechaini = (new Date()).toISOString();
        this.fechafin = (new Date()).toISOString();
        this.username = "";
        this.gLimit = 50;
        this.PageSegmet = 'foods';
        this.gSearchQuery = '';
        this.form = this._FB.group({
            fechaini: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["h" /* Validators */].required],
            fechafin: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["h" /* Validators */].required],
            cui: [''],
            nombre: ['']
        });
    }
    ParqueolicenciaEntPage.prototype.clearSearchg = function () {
        this.gSearchQuery = '';
    };
    ParqueolicenciaEntPage.prototype.manageGallery = function () {
        var _this = this;
        var self = this;
        self.loading = true;
        this.regService.getReg(this.fechaini.substring(0, 10) + "." + this.fechafin.substring(0, 10) + "." + this.nombre + "/" + this.cui + "/filtro", 'Entradascasas').then(function (data) {
            _this.items = data;
            self.loading = false;
        }, function (err) {
            self.loading = false;
            _this.msj.showError3('Error', err.error);
        });
    };
    ParqueolicenciaEntPage.prototype.pideregistros = function () {
        var _this = this;
        var self = this;
        self.loading = true;
        this.storage.get('tiposus').then(function (value) {
            _this.tiposus = value.split(',');
            _this.idsuscriptor = _this.tiposus[3];
            if (_this.tiposus[0] == 'Distribuidor') {
                _this.sidist = true;
            }
            else {
                _this.sidist = false;
            }
            _this.sidist = true;
            _this.regService.getReg('todos/todos/todos', 'Entradascasas').then(function (data) {
                _this.items = data;
                self.loading = false;
            }, function (err) {
                _this.msj.showError3('Error', err.error);
            });
        });
        this.sidist = true;
    };
    ParqueolicenciaEntPage.prototype.ionViewDidLoad = function () {
        //this.pideregistros()
    };
    ParqueolicenciaEntPage.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get('username').then(function (value) {
            _this.username = value;
        });
    };
    ParqueolicenciaEntPage.prototype.loadMore = function (ev) {
        this.gLimit += 50;
        setTimeout(function () { return ev.complete(); }, 1000);
    };
    ParqueolicenciaEntPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-parqueolicencia-ent',template:/*ion-inline-start:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\BUSES\parqueolicencia-ent\parqueolicencia-ent.html"*/'<ion-header>\n    <ion-navbar  [color]="\'navbarColor\'">\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n          </button>\n      <ion-title>\n      Entradas y salidas    \n      </ion-title>   \n    \n    \n    </ion-navbar>\n  \n  \n  </ion-header>\n    \n  <ion-content  class="list-avatar-page" padding>\n    <form     [formGroup]="form"   text-wrap>\n      <ion-list>\n            <ion-item margin-bottom>\n                    <ion-label class="my-label18" color="secondary2">Fecha Inicio</ion-label>\n                    <ion-datetime displayFormat="DD/MM/YYYY"  \n                    [formControl]="form.controls[\'fechaini\']" [(ngModel)]="fechaini"></ion-datetime>\n                  </ion-item>\n                  <ion-item class="invalid" *ngIf="!form.controls.fechaini.valid && (form.controls.fechaini.dirty || form.controls.fechaini.touched)" text-wrap>\n                    <ion-icon name="warning"></ion-icon>\n                    {{ \'FECHAINIT\' | translate }}\n                  </ion-item>\n                 <ion-item margin-bottom>\n                  <ion-label class="my-label18" color="secondary2">Fecha Finaliza</ion-label>\n                  <ion-datetime displayFormat="DD/MM/YYYY"  \n                  [formControl]="form.controls[\'fechafin\']" [(ngModel)]="fechafin"></ion-datetime>\n                </ion-item>\n                <ion-item class="invalid" *ngIf="!form.controls.fechafin.valid && (form.controls.fechafin.dirty || form.controls.fechafin.touched)" text-wrap>\n                  <ion-icon name="warning"></ion-icon>\n                  {{ \'FECHAFINT\' | translate }}\n                </ion-item>\n\n                <ion-item >\n                  <ion-label class="my-label18" color="secondary2" > Cui:  </ion-label>\n                  <ion-input  [(ngModel)]="cui"  [formControl]="form.controls[\'cui\']" type="text"></ion-input>\n              </ion-item>\n          \n              <ion-item >\n                <ion-label class="my-label18" color="secondary2" > Nombre:  </ion-label>\n                <ion-input  [(ngModel)]="nombre"  [formControl]="form.controls[\'nombre\']" type="text"></ion-input>\n            </ion-item>\n        \n\n              \n\n           <ion-row>\n            <ion-col text-center>\n              <button  ion-button block color="secondary" (click)="manageGallery()" [disabled]="!form.valid" strong>\n                Buscar\n              </button>\n            </ion-col>\n          </ion-row>\n         \n    \n       </ion-list>\n    </form>\n           \n     <ion-list >\n        <ion-item   *ngFor="let item of items ;let i = index;" text-wrap>\n  \n            <ion-card >\n         \n                <ion-row>\n                    <ion-col  style="border:none;background: rgb(212, 224, 250);"  text-right>\n                            No: {{i+1}}\n                    </ion-col>    \n                    <ion-item text-wrap>\n                           \n                          <h2>Nombre: {{item.nombre}} </h2>   \n                          <p>Cui: {{item.cui}} </p>\n                          <p>No casa/direccion: {{item.dircasa}} </p>\n                          <p>Contacto de casa: {{item.contactocasa}} </p>\n                          <p>Entrada: {{item.tentrada | Dafecha}} </p>\n                          <p>Salida: {{item.tsalida | Dafecha}} </p>\n                       \n                            \n       \n  \n  \n                           \n           <ion-row>   \n             \n\n                <ion-col text-left>\n                    <img [src]="item.fotoe" class="circle-pic"  height="250" width="250">\n                  </ion-col>\n  \n                <ion-col text-right>\n                    <img [src]="item.fotos"  class="circle-pic"  height="250" width="250">\n                  </ion-col>\n  \n                 \n                  \n  \n              </ion-row>\n  \n  \n                      \n                    </ion-item>\n                    <ion-col  style="background:#f0f0f5"  text-left>\n                       \n                       </ion-col>\n                       <ion-col  style="background:#f0f0f5"  text-right>\n                       \n                          Estado : {{item.estado}} \n                         </ion-col>\n                    </ion-row>    \n                 \n    \n    \n                \n                 \n                </ion-card>\n  \n  \n        \n            \n  \n    \n      </ion-item>\n     </ion-list>\n  \n     <ion-infinite-scroll (ionInfinite)="loadMore($event)">\n        <ion-infinite-scroll-content></ion-infinite-scroll-content>\n      </ion-infinite-scroll>\n  \n  \n  </ion-content>'/*ion-inline-end:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\BUSES\parqueolicencia-ent\parqueolicencia-ent.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__providers__["d" /* NotificationProvider */], __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers__["a" /* Auth */]])
    ], ParqueolicenciaEntPage);
    return ParqueolicenciaEntPage;
}());

//# sourceMappingURL=parqueolicencia-ent.js.map

/***/ }),

/***/ 906:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParqueolicenciaEntPageModule", function() { return ParqueolicenciaEntPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__parqueolicencia_ent__ = __webpack_require__(1346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__ = __webpack_require__(445);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ParqueolicenciaEntPageModule = /** @class */ (function () {
    function ParqueolicenciaEntPageModule() {
    }
    ParqueolicenciaEntPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__parqueolicencia_ent__["a" /* ParqueolicenciaEntPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__parqueolicencia_ent__["a" /* ParqueolicenciaEntPage */]),
                __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["b" /* TranslateModule */].forChild(),
                __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__["a" /* PipesModule */]
            ],
        })
    ], ParqueolicenciaEntPageModule);
    return ParqueolicenciaEntPageModule;
}());

//# sourceMappingURL=parqueolicencia-ent.module.js.map

/***/ })

});
//# sourceMappingURL=253.js.map