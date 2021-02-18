webpackJsonp([215],{

/***/ 1375:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportcalusacPage; });
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







var ReportcalusacPage = /** @class */ (function () {
    function ReportcalusacPage(Pdfx, storage, alertCtrl, msj, translateService, navCtrl, _FB, navParams, regService) {
        this.Pdfx = Pdfx;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.msj = msj;
        this.translateService = translateService;
        this.navCtrl = navCtrl;
        this._FB = _FB;
        this.navParams = navParams;
        this.regService = regService;
        this.loading = true;
        this.items = [];
        this.items2 = [];
        this.sidist = false;
        this.tiposus = [];
        this.idperiodo2 = [];
        this.vperiodo = [];
        this.idtarifa2 = [];
        this.idruta2 = [];
        this.vtarifa = [];
        this.vruta = [];
        this.username = "";
        this.fechaini = (new Date()).toISOString();
        this.fechafin = (new Date()).toISOString();
        this.gLimit = 50;
        this.PageSegmet = 'foods';
        this.gSearchQuery = '';
        this.technologies = [];
        this.chartLabels = [];
        this.chartValues = [];
        this.rp1 = true;
        this.rp2 = true;
        this.rp3 = true;
        this.rp4 = true;
        this.excludeTracks = [];
        this.form = this._FB.group({
            fechaini: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            fechafin: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            idtarifa: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            idruta: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            idperiodo: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required]
        });
    }
    ReportcalusacPage.prototype.clearSearchg = function () {
        this.gSearchQuery = '';
    };
    ReportcalusacPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.nivelprx = this.navParams.get("nivel");
        switch (this.nivelprx) {
            case '?key=1'://relacionar usuarios con categorias
                this.rp1 = false;
                this.titlexx = 'Horarios';
                break;
            case '?key=2'://crear
                this.titlexx = 'Asignación de horarios';
                this.rp2 = false;
                break;
            case '?key=5'://crear
                this.rp3 = false;
                this.titlexx = 'Estados de inscripción';
                this.trang = 0;
                this.regService.getReg2b('1' + '/' + '2' + '/1/1/horariocalusac2', 'unidadplan3s').then(function (result) {
                    var datatt = [];
                    datatt = result;
                    for (var i = 0; i < datatt.length; i++) {
                        _this.items.push({ estadopago: (datatt[i].estadopago).replace('autorizar', 'autoriza').replace('autoriza', 'autorizar'), cantidad: datatt[i].estado });
                        _this.trang = Number(_this.trang) + Number(datatt[i].estado);
                    }
                });
                break;
            case '?key=4'://crear
                this.titlexx = 'Ingresos bimestre';
                this.rp4 = false;
                this.trang = 0;
                this.trang2 = 0;
                this.regService.getReg2b('1' + '/' + '2' + '/1/1/horariocalusac22', 'unidadplan3s').then(function (result) {
                    var datatt = [];
                    datatt = result;
                    for (var i = 0; i < datatt.length; i++) {
                        _this.items.push({ estadopago: (datatt[i].tipoa), cantidad: datatt[i].cantidad, monto: datatt[i].monto });
                        _this.trang = Number(_this.trang) + Number(datatt[i].cantidad);
                        _this.trang2 = Number(_this.trang2) + Number(datatt[i].monto);
                    }
                });
                break;
            default:
        }
        this.storage.get('tiposus').then(function (value) {
            _this.tiposus = value.split(',');
            _this.idsuscriptor = _this.tiposus[3];
            _this.idempresa0 = _this.tiposus[8];
            _this.regService.getReg('todos', 'tipounidad3s').then(function (data) {
                _this.vtarifa = data;
            }, function (err) {
                _this.msj.showError3('Error', err.error);
            });
        });
    };
    ReportcalusacPage.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get('username').then(function (value) {
            _this.username = value;
        });
    };
    ReportcalusacPage.prototype.defineChartData = function () {
        var k;
        for (k in this.technologies.technologies) {
            var tech = this.technologies.technologies[k];
            this.chartLabels.push(tech.technology);
            this.chartValues.push(tech.time);
        }
    };
    ReportcalusacPage.prototype.showFilter = function () {
    };
    ReportcalusacPage.prototype.twoDecimals = function (number) {
        return 0;
    };
    ReportcalusacPage.prototype.loadMore = function (ev) {
        this.gLimit += 50;
        setTimeout(function () { return ev.complete(); }, 1000);
    };
    ReportcalusacPage.prototype.manageGallery = function () {
        var _this = this;
        //{"createdAt": {"$gte": new Date(2012, 7, 14), "$lt": new Date(2019, 7, 15)}}
        var uno = this.idtarifa2[0];
        var dos = this.idtarifa2[1];
        if (uno) { }
        else {
            uno = 'TODOS';
            dos = 'TODOS';
        }
        var self = this;
        self.loading = true;
        this.chartLabels = [];
        this.chartValues = [];
        this.montog = "0";
        this.trang = "0";
        this.regService.getReg('123' + '/billingparqueo/' + this.fechaini.substring(0, 10) + "/" + this.fechafin.substring(0, 10) + "/" + uno + "/" + dos + "/" + this.idempresa, 'comprasaldos').then(function (data) {
            _this.items = data;
            for (var i = 0; i < _this.items.length; i++) {
                _this.chartLabels.push(_this.items[i]._id);
                _this.chartValues.push(Number(_this.items[i].monto));
                _this.montog = Number(_this.montog) + Number(_this.items[i].monto);
                _this.trang = Number(_this.trang) + Number(_this.items[i].cantidad);
            }
            //   this.createLineChart();
            // this.createghnutChart();
            self.loading = false;
        }, function (err) {
            _this.msj.showError3('Error', err.error);
        });
    };
    ReportcalusacPage.prototype.presentFilter = function () {
    };
    ReportcalusacPage.prototype.onSelectChange = function (selectedValue) {
        var _this = this;
        this.idtarifa2 = selectedValue.split(',');
        this.regService.getReg(this.idtarifa2[0] + '/todos', 'unidadacademica3s').then(function (data) {
            _this.vruta = data;
        }, function (err) {
            _this.msj.showError3('Error', err.error);
        });
    };
    ReportcalusacPage.prototype.onSelectChange3 = function (selectedValue) {
        var _this = this;
        this.idperiodo2 = selectedValue.split(',');
        this.regService.displayPreloader('Espere un momento......');
        if (this.rp3 == false || this.rp4 == false) {
            switch (this.nivelprx) {
                case '?key=5'://crear
                    this.rp3 = false;
                    this.titlexx = 'Estados de inscripción';
                    this.trang = 0;
                    this.regService.getReg2b(this.idtarifa2[0] + '/' + this.idruta2[0] + '/' + this.idperiodo2[0] + '/1/horariocalusac2aa', 'unidadplan3s').then(function (result) {
                        _this.regService.hidePreloader();
                        var datatt = [];
                        datatt = result;
                        _this.items = [];
                        for (var i = 0; i < datatt.length; i++) {
                            _this.items.push({ estadopago: (datatt[i].estadopago).replace('autorizar', 'autoriza').replace('autoriza', 'autorizar'), cantidad: datatt[i].estado });
                            _this.trang = Number(_this.trang) + Number(datatt[i].estado);
                        }
                    });
                    break;
                case '?key=4'://crear
                    this.titlexx = 'Ingresos bimestre';
                    this.rp4 = false;
                    this.trang = 0;
                    this.trang2 = 0;
                    this.regService.getReg2b(this.idtarifa2[0] + '/' + this.idruta2[0] + '/' + this.idperiodo2[0] + '/1/horariocalusac22aa', 'unidadplan3s').then(function (result) {
                        _this.regService.hidePreloader();
                        var datatt = [];
                        datatt = result;
                        _this.items = [];
                        for (var i = 0; i < datatt.length; i++) {
                            _this.items.push({ estadopago: (datatt[i].tipoa), cantidad: datatt[i].cantidad, monto: datatt[i].monto });
                            _this.trang = Number(_this.trang) + Number(datatt[i].cantidad);
                            _this.trang2 = Number(_this.trang2) + Number(datatt[i].monto);
                        }
                    });
                    break;
                default:
            }
        }
        else {
            this.regService.getReg2b(this.idtarifa2[0] + '/' + this.idruta2[0] + '/' + this.idperiodo2[0] + '/1/horariocalusac', 'unidadplan3s').then(function (result) {
                //  this.vpago=result;
                _this.regService.hidePreloader();
                var vdata = [];
                vdata = result;
                if (vdata.length == 0) {
                    _this.msj.showError3('Información ', 'No existe periodo activo');
                }
                else {
                    if (_this.nivelprx == '?key=1') {
                        _this.Pdfx.dahorarioingles(result, _this.idruta2[1], _this.idperiodo2[0], _this.idtarifa2[1]);
                    }
                    else {
                        _this.Pdfx.dahorarioingles2(result, _this.idruta2[1], _this.idperiodo2[0], _this.idtarifa2[1]);
                    }
                }
            }, function (err) {
                _this.regService.hidePreloader();
                _this.msj.showError3('Error', err.error);
            });
        }
    };
    ReportcalusacPage.prototype.onSelectChange2 = function (selectedValue) {
        var _this = this;
        this.idruta2 = selectedValue.split(',');
        if (this.rp3 == false || this.rp4 == false) {
            this.regService.getReg2b(this.idtarifa2[0] + '/' + this.idruta2[0] + '/1/1/horariocalusacsede2', 'unidadplan3s').then(function (result) {
                _this.vperiodo = result;
            });
        }
        else {
            this.regService.getReg2b(this.idtarifa2[0] + '/' + this.idruta2[0] + '/1/1/horariocalusacsede', 'unidadplan3s').then(function (result) {
                _this.vperiodo = result;
            });
        }
    };
    ReportcalusacPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-reportcalusac',template:/*ion-inline-start:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\CALUSAC\reportcalusac\reportcalusac.html"*/'<ion-header no-border class="opaque">\n  <ion-navbar   no-border-bottom>\n    <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n  <ion-title>\n    {{titlexx}}\n  </ion-title>\n\n    <ion-toolbar  class="opaque" >\n        <ion-buttons end>\n\n\n      </ion-buttons>\n\n    </ion-toolbar>\n</ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n\n\n  <form   *ngIf="(rp1 === false) || (rp2 === false)"    [formGroup]="form"   text-wrap>\n    <ion-list>\n\n              <ion-item margin-bottom>\n                <ion-label>Sede</ion-label>\n                <ion-select  (ionChange)="onSelectChange($event)" [(ngModel)]="idtarifa" [formControl]="form.controls[\'idtarifa\']" >\n                   <ion-option text-wrap *ngFor="let item of vtarifa"  [value]="item._id+\',\'+item.nombre">{{item.nombre}}</ion-option>\n               </ion-select>\n\n\n             </ion-item>\n             <ion-item class="invalid" *ngIf="!form.controls.idtarifa.valid && (form.controls.idtarifa.dirty || form.controls.idtarifa.touched)" text-wrap>\n               <ion-icon name="warning"></ion-icon>\n             Ingrese una sede valida\n              </ion-item>\n\n              <ion-item margin-bottom>\n                  <ion-label>Curso</ion-label>\n                  <ion-select  (ionChange)="onSelectChange2($event)" [(ngModel)]="idruta" [formControl]="form.controls[\'idruta\']" >\n                     <ion-option text-wrap *ngFor="let item of vruta" [value]="item._id+\',\'+item.nombre">{{item.nombre}}</ion-option>\n                 </ion-select>\n\n\n               </ion-item>\n               <ion-item class="invalid" *ngIf="!form.controls.idruta.valid && (form.controls.idruta.dirty || form.controls.idruta.touched)" text-wrap>\n                 <ion-icon name="warning"></ion-icon>\n                Ingrese un curso valido\n                </ion-item>\n\n\n  <ion-item margin-bottom>\n    <ion-label>Periodo</ion-label>\n    <ion-select  (ionChange)="onSelectChange3($event)" [(ngModel)]="idperiodo" [formControl]="form.controls[\'idperiodo\']" >\n       <ion-option text-wrap *ngFor="let item of vperiodo"  [value]="item.idperiodo">{{item.idperiodo}}</ion-option>\n   </ion-select>\n\n\n </ion-item>\n <ion-item class="invalid" *ngIf="!form.controls.idtarifa.valid && (form.controls.idtarifa.dirty || form.controls.idtarifa.touched)" text-wrap>\n   <ion-icon name="warning"></ion-icon>\n Ingrese un periodo valida\n  </ion-item>\n\n\n\n     </ion-list>\n  </form>\n\n  <ion-list >\n\n </ion-list>\n\n\n\n\n <ion-grid  *ngIf="rp3 === false"  >\n\n\n  <form    [formGroup]="form"   text-wrap>\n    <ion-list>\n\n              <ion-item margin-bottom>\n                <ion-label>Sede</ion-label>\n                <ion-select  (ionChange)="onSelectChange($event)" [(ngModel)]="idtarifa" [formControl]="form.controls[\'idtarifa\']" >\n                   <ion-option text-wrap *ngFor="let item of vtarifa"  [value]="item._id+\',\'+item.nombre">{{item.nombre}}</ion-option>\n               </ion-select>\n\n\n             </ion-item>\n             <ion-item class="invalid" *ngIf="!form.controls.idtarifa.valid && (form.controls.idtarifa.dirty || form.controls.idtarifa.touched)" text-wrap>\n               <ion-icon name="warning"></ion-icon>\n             Ingrese una sede valida\n              </ion-item>\n\n              <ion-item margin-bottom>\n                  <ion-label>Curso</ion-label>\n                  <ion-select  (ionChange)="onSelectChange2($event)" [(ngModel)]="idruta" [formControl]="form.controls[\'idruta\']" >\n                     <ion-option text-wrap *ngFor="let item of vruta" [value]="item._id+\',\'+item.nombre">{{item.nombre}}</ion-option>\n                 </ion-select>\n\n\n               </ion-item>\n               <ion-item class="invalid" *ngIf="!form.controls.idruta.valid && (form.controls.idruta.dirty || form.controls.idruta.touched)" text-wrap>\n                 <ion-icon name="warning"></ion-icon>\n                Ingrese un curso valido\n                </ion-item>\n\n\n  <ion-item margin-bottom>\n    <ion-label>Periodo</ion-label>\n    <ion-select  (ionChange)="onSelectChange3($event)" [(ngModel)]="idperiodo" [formControl]="form.controls[\'idperiodo\']" >\n       <ion-option text-wrap *ngFor="let item of vperiodo"  [value]="item.idperiodo">{{item.idperiodo}}</ion-option>\n   </ion-select>\n\n\n </ion-item>\n <ion-item class="invalid" *ngIf="!form.controls.idtarifa.valid && (form.controls.idtarifa.dirty || form.controls.idtarifa.touched)" text-wrap>\n   <ion-icon name="warning"></ion-icon>\n Ingrese un periodo valida\n  </ion-item>\n\n\n\n     </ion-list>\n  </form>\n\n\n  <ion-row>\n    <ion-col>\n         <table class="pure-table">\n            <thead>\n              <tr>\n                <th>#</th>\n                <th>Estado</th>\n                <th>Cantidad</th>\n\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor="let item of items; let i = index;">\n                <td>{{ i +1}}</td>\n                <td>{{ item.estadopago }}</td>\n                <td>{{ item.cantidad }}</td>\n\n              </tr>\n              <tr >\n                  <td></td>\n                  <td><strong>TOTAL</strong></td>\n                  <td><strong>{{ trang }}</strong></td>\n\n                </tr>\n            </tbody>\n          </table>\n\n\n    </ion-col>\n  </ion-row>\n\n\n</ion-grid>\n\n\n\n\n<ion-grid  *ngIf="rp4 === false"  >\n  <form    [formGroup]="form"   text-wrap>\n    <ion-list>\n\n              <ion-item margin-bottom>\n                <ion-label>Sede</ion-label>\n                <ion-select  (ionChange)="onSelectChange($event)" [(ngModel)]="idtarifa" [formControl]="form.controls[\'idtarifa\']" >\n                   <ion-option text-wrap *ngFor="let item of vtarifa"  [value]="item._id+\',\'+item.nombre">{{item.nombre}}</ion-option>\n               </ion-select>\n\n\n             </ion-item>\n             <ion-item class="invalid" *ngIf="!form.controls.idtarifa.valid && (form.controls.idtarifa.dirty || form.controls.idtarifa.touched)" text-wrap>\n               <ion-icon name="warning"></ion-icon>\n             Ingrese una sede valida\n              </ion-item>\n\n              <ion-item margin-bottom>\n                  <ion-label>Curso</ion-label>\n                  <ion-select  (ionChange)="onSelectChange2($event)" [(ngModel)]="idruta" [formControl]="form.controls[\'idruta\']" >\n                     <ion-option text-wrap *ngFor="let item of vruta" [value]="item._id+\',\'+item.nombre">{{item.nombre}}</ion-option>\n                 </ion-select>\n\n\n               </ion-item>\n               <ion-item class="invalid" *ngIf="!form.controls.idruta.valid && (form.controls.idruta.dirty || form.controls.idruta.touched)" text-wrap>\n                 <ion-icon name="warning"></ion-icon>\n                Ingrese un curso valido\n                </ion-item>\n\n\n  <ion-item margin-bottom>\n    <ion-label>Periodo</ion-label>\n    <ion-select  (ionChange)="onSelectChange3($event)" [(ngModel)]="idperiodo" [formControl]="form.controls[\'idperiodo\']" >\n       <ion-option text-wrap *ngFor="let item of vperiodo"  [value]="item.idperiodo">{{item.idperiodo}}</ion-option>\n   </ion-select>\n\n\n </ion-item>\n <ion-item class="invalid" *ngIf="!form.controls.idtarifa.valid && (form.controls.idtarifa.dirty || form.controls.idtarifa.touched)" text-wrap>\n   <ion-icon name="warning"></ion-icon>\n Ingrese un periodo valida\n  </ion-item>\n\n\n\n     </ion-list>\n  </form>\n\n  <ion-row>\n    <ion-col>\n         <table class="pure-table">\n            <thead>\n              <tr>\n                <th>#</th>\n                <th>Tipo</th>\n                <th>Cantidad</th>\n                <th>Monto</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor="let item of items; let i = index;">\n                <td>{{ i +1}}</td>\n                <td>{{ item.estadopago }}</td>\n                <td>{{ item.cantidad }}</td>\n                <td>{{ item.monto | currency:"Q ":true:"1.2"  }}</td>\n              </tr>\n              <tr >\n                  <td></td>\n                  <td><strong>TOTAL</strong></td>\n                  <td><strong> {{ trang }}</strong></td>\n                  <td><strong> {{ trang2 | currency:"Q ":true:"1.2"   }}</strong></td>\n                </tr>\n            </tbody>\n          </table>\n\n\n    </ion-col>\n  </ion-row>\n\n\n</ion-grid>\n\n\n\n\n\n\n\n</ion-content>\n'/*ion-inline-end:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\CALUSAC\reportcalusac\reportcalusac.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__providers_pdf_pdfx__["a" /* pdfx */], __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__providers__["d" /* NotificationProvider */], __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers__["a" /* Auth */]])
    ], ReportcalusacPage);
    return ReportcalusacPage;
}());

//# sourceMappingURL=reportcalusac.js.map

/***/ }),

/***/ 935:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportcalusacPageModule", function() { return ReportcalusacPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reportcalusac__ = __webpack_require__(1375);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__ = __webpack_require__(445);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ReportcalusacPageModule = /** @class */ (function () {
    function ReportcalusacPageModule() {
    }
    ReportcalusacPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__reportcalusac__["a" /* ReportcalusacPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__reportcalusac__["a" /* ReportcalusacPage */]),
                __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["b" /* TranslateModule */].forChild(),
                __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__["a" /* PipesModule */]
            ],
        })
    ], ReportcalusacPageModule);
    return ReportcalusacPageModule;
}());

//# sourceMappingURL=reportcalusac.module.js.map

/***/ })

});
//# sourceMappingURL=215.js.map