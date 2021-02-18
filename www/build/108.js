webpackJsonp([108],{

/***/ 1074:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstadopapcPageModule", function() { return EstadopapcPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__estadopapc__ = __webpack_require__(1530);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EstadopapcPageModule = /** @class */ (function () {
    function EstadopapcPageModule() {
    }
    EstadopapcPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__estadopapc__["a" /* EstadopapcPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__estadopapc__["a" /* EstadopapcPage */]),
            ],
        })
    ], EstadopapcPageModule);
    return EstadopapcPageModule;
}());

//# sourceMappingURL=estadopapc.module.js.map

/***/ }),

/***/ 1530:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EstadopapcPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_pdf_pdfx__ = __webpack_require__(447);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var EstadopapcPage = /** @class */ (function () {
    function EstadopapcPage(Pdfx, storage, msj, translateService, viewCtrl, authService, navCtrl, navParams, _FB, actionSheetCtrl, events) {
        this.Pdfx = Pdfx;
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
        this.datat = [];
        this.option = [];
        this.optionest = [];
        this.createdCode = null;
        this.scannedCode = null;
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
    }
    EstadopapcPage.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get('username').then(function (value) {
            _this.username = value;
        });
    };
    EstadopapcPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.idsuscriptor = this.navParams.data.record2.idsuscriptor;
        this.idnombre = this.navParams.data.record2.idnombre;
        this.optionest = this.navParams.data.record2.option;
        for (var i = 0; i < this.optionest.length; i++) {
            if (this.optionest[i].estado == 'Activo') {
                this.periodogg = this.optionest[i].nombre;
            }
        }
        this.authService.getReg('cuentacorriente/' + this.idsuscriptor + '/' + this.periodogg, 'asignapaps').then(function (data) {
            if (data[0].nombre) {
                _this.option.push({
                    nombre: data[0].nombre,
                    periodo: data[0].periodo,
                    cui: data[0].cui,
                    noboleta: data[0].noboleta,
                    monto: data[0].monto
                });
                _this.datat = data;
                _this.deudatt = 0;
                _this.montog = 0;
                _this.pagado = 0;
                for (var i = 0; i < _this.datat.length; i++) {
                    _this.deudatt = _this.deudatt + _this.datat[i].deudaactual;
                    _this.pagado = _this.pagado + _this.datat[i].deposito1 + _this.datat[i].deposito2 + _this.datat[i].deposito3 + _this.datat[i].deposito4 + _this.datat[i].deposito5;
                }
                _this.montog = _this.deudatt + _this.pagado;
            }
            else {
            }
        }, function (err) {
            // this.translateService.get('NO_OPERACION').subscribe((value) => { this.msj.showError3('Error',value);  })  
        });
        /*
            this.authService.getReg(this.navParams.data.record2.iddpi+'/personadisp','personals').then((result) => {
              
        
              this._ID 				=	result[0]._id;
              this.saldoactual		=	result[0].saldo;
              this.codigo1		=	result[0].codigo1;
              this.codigo2		=	result[0].codigo2;
              this.codigo3		=	result[0].codigo3;
              this.codigo4		=	result[0].codigo4;
              this.codigo5		=	result[0].codigo5;
              this.dispositivo1		=	result[0].dispositivo1;
              this.dispositivo2		=	result[0].dispositivo2;
              this.dispositivo3		=	result[0].dispositivo3;
              this.dispositivo4		=	result[0].dispositivo4;
              this.dispositivo5		=	result[0].dispositivo5;
        
        
            }, (err) => {
            this.msj.showError3('Error',err.error);
          });
        
        */
        this.pageTitle = "Estado cuenta";
        if (this.navParams.get("record") == null) {
            this.isDisablednit = true;
        }
        else {
            this.isDisablednit = false;
        }
    };
    EstadopapcPage.prototype.estadocuenta = function () {
        this.Pdfx.cuentapap(this.option, this.datat, this.deudatt, this.montog, this.pagado);
    };
    EstadopapcPage.prototype.stringify = function (country) {
        return JSON.stringify(country);
    };
    EstadopapcPage.prototype.cancel = function () {
        this.viewCtrl.dismiss();
    };
    EstadopapcPage.prototype.done = function () {
        if (!this.form.valid) {
            return;
        }
        //this.viewCtrl.dismiss(this.form.value);
    };
    EstadopapcPage.prototype.optionsFn = function (item) {
        console.log(item);
    };
    EstadopapcPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-estadopapc',template:/*ion-inline-start:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\PAP\estadopapc\estadopapc.html"*/'<ion-header>\n    <ion-navbar>\n      <ion-title>{{pageTitle}}</ion-title>\n      \n      <ion-buttons end>  \n        <button  (click)="estadocuenta()" icon-only ion-button padding-right>\n            <ion-icon name="download"></ion-icon>\n          </button>\n        \n      </ion-buttons>\n    </ion-navbar>\n  </ion-header>\n  <ion-content padding>\n    <form     [formGroup]="form"   text-wrap>\n   \n        \n          <ion-list >\n              <ion-item    *ngFor="let item of option  ;let i = index;" text-wrap>\n                      <ion-card >\n                              <ion-row>\n                                  <ion-col    text-right>\n                                          No: {{i+1}} Periodo:{{item.periodo }}\n                                  </ion-col>     \n                                  <ion-item text-wrap>\n                                      <br>\n                                     <h2>Nombre: {{item.nombre }} </h2>\n                                      <h2>CUI: {{item.cui }} </h2>\n                                 \n                                      <h2>No boleta: {{item.noboleta}} </h2>\n                                      <h2>Monto boleta: {{item.monto}} </h2>\n\n                                      <ion-grid>\n                                          <ion-row>\n                                            <ion-col>\n                                                 <table class="pure-table">\n                                                    <thead>\n                                                      <tr>\n                                                        <th>No</th>\n                                                        <th>Jornada</th>\n                                                        <th>Materia</th>\n                                                        <th>Saldo Inicial</th>\n                                                        <th>Deposito1</th>\n                                                        <th>Deposito2</th>\n                                                        <th>Deposito3</th>\n                                                        <th>Deposito4</th>\n                                                        <th>Deposito5</th>\n                                                        <th>Pagado</th>\n                                                        <th>Saldo</th>\n                                                      </tr>\n                                                    </thead>     \n                                                    <tbody>\n                                                      <tr *ngFor="let item2 of datat; let i = index;">\n                                                        <td>{{ i +1}}</td>\n                                                        <td>{{ item2.idjornada }}</td>\n                                                        <td>{{ item2.idmateria }} {{ item2.idhorario }}-{{ item2.idsalon }}-{{ item2.idedificio }}</td>\n                                                        <td>Q. {{ item2.deudaactual  | number:\'1.2-2\'}}</td>\n                                                            <td>Q. {{ item2.deposito1  | number:\'1.2-2\' }}</td>\n                                                        <td>Q. {{ item2.deposito2  | number:\'1.2-2\' }}</td>\n                                                        <td>Q. {{ item2.deposito3  | number:\'1.2-2\' }}</td>\n                                                        <td>Q. {{ item2.deposito4  | number:\'1.2-2\' }}</td>\n                                                        <td>Q. {{ item2.deposito5  | number:\'1.2-2\' }}</td>\n                                                        <td>Q. {{item2.deposito1 + item2.deposito2 + item2.deposito3+ item2.deposito4+ item2.deposito5 | number:\'1.2-2\'}}</td>\n                                                        <td>Q. {{item2.deudaactual -item2.deposito1 + item2.deposito2 + item2.deposito3+ item2.deposito4+ item2.deposito5 | number:\'1.2-2\'}}</td>\n                                                      </tr>\n                                                      <tr >\n                                                          <td></td>\n                                                          <td>TOTAL</td>\n                                                          <td></td>\n                                                          <td>Q.{{ deudatt | number:\'1.2-2\'}}</td>\n                                                          <td></td>\n                                                          <td></td>\n                                                          <td></td>\n                                                          <td></td>\n                                                          <td></td>\n                                                          <td>Q. {{ pagado  | number:\'1.2-2\' }}</td>\n                                                          <td>Q. {{ montog  | number:\'1.2-2\' }}</td>\n                                                        </tr>\n                                                    </tbody>\n                                                  </table>\n                                                  \n                                  \n                                            </ion-col>\n                                          </ion-row>\n                                          \n                                        \n                                        </ion-grid>\n                                    \n                                  </ion-item>\n                                 \n                               </ion-row>\n                             \n                        </ion-card>\n              \n            </ion-item>\n           </ion-list>\n\n\n            \n       \n    </form>\n  \n   \n  \n  </ion-content>'/*ion-inline-end:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\PAP\estadopapc\estadopapc.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__providers_pdf_pdfx__["a" /* pdfx */], __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3__providers__["d" /* NotificationProvider */], __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["F" /* ViewController */], __WEBPACK_IMPORTED_MODULE_3__providers__["a" /* Auth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */]])
    ], EstadopapcPage);
    return EstadopapcPage;
}());

//# sourceMappingURL=estadopapc.js.map

/***/ })

});
//# sourceMappingURL=108.js.map