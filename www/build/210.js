webpackJsonp([210],{

/***/ 1376:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SolprestamoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(104);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SolprestamoPage = /** @class */ (function () {
    //private barcodeScanner:BarcodeScanner,
    function SolprestamoPage(loadingCtrl, alertCtrl, storage, msj, translateService, navCtrl, _MODAL, navParams, regService) {
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.storage = storage;
        this.msj = msj;
        this.translateService = translateService;
        this.navCtrl = navCtrl;
        this._MODAL = _MODAL;
        this.navParams = navParams;
        this.regService = regService;
        this.loading = true;
        this.items = [];
        this.items2 = [];
        this.generated = '';
        this.permisom = [];
        this.idafiliado = 'na';
        this.gLimit = 50;
        this.PageSegmet = 'foods';
        this.gSearchQuery = '';
        this.username = "";
        this.pingreso = false;
        this.pconsulta = false;
        this.peliminacion = false;
        this.pcreacion = false;
        this.pactualizacion = false;
        this.preporte = false;
        this.pfiltro = false;
        this.permisom = String(navParams.get("permiso")).split(",");
        this.pingreso = (this.permisom[0] == 'true');
        this.pconsulta = (this.permisom[1] == 'true');
        this.peliminacion = (this.permisom[2] == 'true');
        this.pcreacion = (this.permisom[3] == 'true');
        this.pactualizacion = (this.permisom[4] == 'true');
        this.pfiltro = (this.permisom[5] == 'true');
        this.preporte = (this.permisom[6] == 'true');
    }
    SolprestamoPage.prototype.clearSearchg = function () {
        this.gSearchQuery = '';
    };
    SolprestamoPage.prototype.showFilter = function () { };
    SolprestamoPage.prototype.pideregistros = function () {
        var _this = this;
        var self = this;
        self.loading = true;
        this.regService.getReg('todos/' + this.idempresa + '/' + this.username, 'solprestamos').then(function (data) {
            _this.items = data;
            self.loading = false;
        }, function (err) {
            _this.msj.showError3('Error', err.error);
            // this.translateService.get('NO_OPERACION').subscribe((value) => { this.msj.showError3('Error',value);  })
        });
    };
    SolprestamoPage.prototype.ngOnInit = function () {
    };
    SolprestamoPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.storage.get('username').then(function (value) {
            _this.username = value;
            _this.translateService.get('APPX').subscribe(function (value) {
                _this.idempresa = value;
                _this.pideregistros();
            });
        });
    };
    SolprestamoPage.prototype.loadMore = function (ev) {
        this.gLimit += 50;
        setTimeout(function () { return ev.complete(); }, 1000);
    };
    SolprestamoPage.prototype.deleteRecord = function (item, no) {
        var _this = this;
        var alert = this.alertCtrl.create({ title: 'Esta seguro de realizar esta operación?',
            buttons: [
                { text: 'Si',
                    handler: function () {
                        var recordID = item._id;
                        _this.regService.deleteReg(recordID + '/' + _this.username + '/' + _this.idempresa + '/' + _this.idafiliado, 'solprestamos').then(function (data) {
                            _this.pideregistros();
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
    SolprestamoPage.prototype.updateRecord = function (item, no) {
        var _this = this;
        var addModal = this._MODAL.create('SolprestamoCreatePage', { record: item, cui: item.cui, carne: item.carne, actualizacion: true }, { showBackdrop: true, enableBackdropDismiss: false });
        addModal.onDidDismiss(function (data) {
            if (data) {
                _this.pideregistros();
            }
        });
        addModal.present();
    };
    SolprestamoPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    SolprestamoPage.prototype.addRecord = function () {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: ' Validando información',
            message: ' Ingresa REGISTRO PERSONAL y CUI Registrado , para validar información:',
            inputs: [
                {
                    name: 'carne',
                    placeholder: 'Ingrese REGISTRO PERSONAL USAC',
                    value: '' //this.nov
                },
                {
                    name: 'cui',
                    placeholder: 'Ingrese CUI registrado',
                    value: '' //this.cuitt
                }
            ],
            buttons: [
                {
                    text: 'Cancelar'
                },
                {
                    text: 'Aceptar',
                    handler: function (todo) {
                        if (todo) {
                            if (todo.carne == '' || todo.cui == '') {
                                _this.msj.showError3('Advertencia', 'Ingrese un REGISTRO PERSONAL o CUI valido');
                                return;
                            }
                            var loading = _this.loadingCtrl.create({
                                spinner: 'bubbles',
                                content: "Procesando información..."
                            });
                            loading.present();
                            loading.dismiss();
                            var addModal = _this._MODAL.create('SolprestamoCreatePage', { record: null, cui: todo.cui, carne: todo.carne, actualizacion: true }, { showBackdrop: true, enableBackdropDismiss: false });
                            addModal.onDidDismiss(function (data) {
                                if (data) {
                                    _this.pideregistros();
                                }
                            });
                            addModal.present();
                        }
                    }
                }
            ]
        });
        prompt.present();
    };
    SolprestamoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-solprestamo',template:/*ion-inline-start:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\CALUSAC\solprestamo\solprestamo.html"*/'<ion-header no-border class="opaque" >\n  <ion-navbar  no-border-bottom hideBackButton="true">\n\n        <ion-buttons left>\n          <button ion-button icon-only (click)="goBack()">\n            <ion-icon name="arrow-back"></ion-icon>\n          </button>\n        </ion-buttons>\n    <ion-title>\n      Solicitud de Préstamo para Equipo de Cómputo\n    </ion-title>\n    <ion-buttons end>\n\n        <button [hidden]="!pconsulta" (click)="pideregistros()" icon-only ion-button padding-right>\n            <ion-icon name="refresh"></ion-icon>\n          </button>\n\n        </ion-buttons>\n  </ion-navbar>\n  <ion-toolbar no-border-top>\n      <ion-searchbar debounce="2000" [hidden]="!pconsulta" (ionCancel)="clearSearchg($event)" [(ngModel)]="gSearchQuery" placeholder="{{ \'NO2_REGISTROS\' | translate }}{{items.length}}]">\n        </ion-searchbar>\n    </ion-toolbar>\n\n</ion-header>\n\n<ion-content fullscreen>\n\n\n  <ion-card class="category-concept-card"  >\n    <ion-card-header>\n      <h1 > REQUISITOS PARA EL OTORGAMIENTO DE PRÉSTAMO PARA ADQUISICIÓN DE EQUIPO DE CÓMPUTO</h1>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-list>\n        <ion-item >\n      <strong>Información general del prestamo</strong>\n       <br>\n          Monto máximo: 	Q.15,000.00<br>\n          Plazo para pagar:	 24 meses<br>\n          Tasa de interés: 	4.5 % anual<br>\n        </ion-item>\n        <ion-item >\n          <br>   <br>\n          <h2 class="category-title"><strong>Paso 1. Descargue los siguientes documentos, imprímalos y llénelos</strong></h2>\n\n          Solicitud de Préstamo:\n              <a href="Descargar documento"\n               onclick="window.open(\'https://drive.google.com/file/d/1ePdf-5gsEVbnqCa-O8pj0jBDtr33k07d/view?usp=sharing\', \'_system\'); return false;">Google</a>\n\n               <br>\n              Carta de Consentimiento del Deudor:\n                  <a href="Descargar documento"\n                   onclick="window.open(\'https://drive.google.com/file/d/1SV_-gRc_9_xOEbbQWZc3zta748xql_fF/view?usp=sharing\', \'_system\'); return false;">Google</a>\n                   <br>\n              Carta de Contratación:\n                  <a href="Descargar documento"\n                   onclick="window.open(\'https://drive.google.com/file/d/1Lzv_af8Gk8vIDw-Z7CLP8QJ7Ya4rY_tE/view?usp=sharing\', \'_system\'); return false;">Google</a>\n               <br>\n\n                  Consentimiento de Seguro Colectivo:\n                      <a href="Descargar documento"\n                       onclick="window.open(\'https://drive.google.com/file/d/1Lzv_af8Gk8vIDw-Z7CLP8QJ7Ya4rY_tE/view?usp=sharing\', \'_system\'); return false;">Google</a>\n\n\n                    <br> <br>\n                    <h2 class="category-title"><strong> Paso 2. Ingrese solicitud</strong></h2>\n                    <ion-badge *ngIf="items.length == 0"  class="category-tag" (click)="addRecord()" >Crear solicitud</ion-badge>\n                  </ion-item>\n      </ion-list>\n\n    </ion-card-content>\n  </ion-card>\n\n\n\n\n   <ion-list >\n\n      <ion-item    *ngFor="let item of items | search: gSearchQuery | LimitPipe: gLimit ;let i = index;" text-wrap>\n          <ion-card  >\n                  <ion-row>\n                          <ion-col    text-right>\n                                  No: {{i+1}}\n                          </ion-col>\n                          <ion-item  text-wrap>\n                            <button ion-item  >\n                                  <h2> Nombre: {{item.nombre}} </h2>\n                                  <p> Cui: {{item.cui}} </p>\n                                  <p> Tipo de préstamo: {{item.tipo}} </p>\n                                  <p> Monto: {{item.monto}} </p>\n                                  <p> Plazo: {{item.plazo}} </p>\n                                  <p> Interes: {{item.interes}} </p>\n\n\n                            </button>\n                          </ion-item>\n                      <ion-col  text-right>\n                                              Estado: {{item.estado}}\n                                      </ion-col>\n                          </ion-row>\n\n\n              <ion-row no-padding>\n                <!-- <ion-col>\n                    <button [hidden]="!peliminacion"  (click)="deleteRecord(item,i)" ion-button clear small  icon-start>\n                      <ion-icon name=\'md-trash\'></ion-icon>\n                      Eliminar\n                    </button>\n                  </ion-col>\n-->\n<ion-col text-center>\n  <ion-col>\n      <button  *ngIf="item.estado==\'EN PROCESO\'" color="danger" ion-button  (click)="updateRecord(item,1)" >\n          Actualizar rechazo préstamo\n        </button>\n<!--   asigna   2-->\n\n    </ion-col>\n\n</ion-col>\n\n\n                </ion-row>\n            </ion-card>\n                </ion-item>\n   </ion-list>\n   <ion-infinite-scroll (ionInfinite)="loadMore($event)">\n      <ion-infinite-scroll-content></ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n\n\n</ion-content>\n'/*ion-inline-end:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\CALUSAC\solprestamo\solprestamo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_2__providers__["d" /* NotificationProvider */], __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers__["a" /* Auth */]])
    ], SolprestamoPage);
    return SolprestamoPage;
}());

//# sourceMappingURL=solprestamo.js.map

/***/ }),

/***/ 936:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SolprestamoPageModule", function() { return SolprestamoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__solprestamo__ = __webpack_require__(1376);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pipes_pipes_module__ = __webpack_require__(445);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var SolprestamoPageModule = /** @class */ (function () {
    function SolprestamoPageModule() {
    }
    SolprestamoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__solprestamo__["a" /* SolprestamoPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__solprestamo__["a" /* SolprestamoPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild(),
                __WEBPACK_IMPORTED_MODULE_4__pipes_pipes_module__["a" /* PipesModule */]
            ],
        })
    ], SolprestamoPageModule);
    return SolprestamoPageModule;
}());

//# sourceMappingURL=solprestamo.module.js.map

/***/ })

});
//# sourceMappingURL=210.js.map