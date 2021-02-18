webpackJsonp([222],{

/***/ 1365:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalusacusbicaListPage; });
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





var CalusacusbicaListPage = /** @class */ (function () {
    function CalusacusbicaListPage(modalCtrl, actionSheetCtrl, storage, alertCtrl, msj, translateService, navCtrl, navParams, regService) {
        var _this = this;
        this.modalCtrl = modalCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.msj = msj;
        this.translateService = translateService;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.regService = regService;
        this.titlexx = "";
        this.loading = true;
        this.items = [];
        this.items2 = [];
        this.generated = '';
        this.idafiliado = 'na';
        this.hasFilter = false;
        this.gLimit = 50;
        this.PageSegmet = 'foods';
        this.gSearchQuery = '';
        this.username = "";
        this.permisom = [];
        this.potros1 = [];
        this.pingreso = false;
        this.pconsulta = false;
        this.peliminacion = false;
        this.pcreacion = false;
        this.pactualizacion = false;
        this.preporte = false;
        this.pfiltro = false;
        this.randomScalingFactor = function () {
            return Math.ceil(Math.random() * 10.0) * Math.pow(10, Math.ceil(Math.random() * 5));
        };
        this.tiposus = [];
        this.translateService.get('APPX').subscribe(function (value) {
            _this.idempresa = value;
        });
        this.permisom = String(navParams.get("permiso")).split(",");
        this.potros1 = JSON.parse(JSON.stringify(navParams.get("potros1")));
        this.pingreso = (this.permisom[0] == 'true');
        this.pconsulta = (this.permisom[1] == 'true');
        this.peliminacion = (this.permisom[2] == 'true');
        this.pcreacion = (this.permisom[3] == 'true');
        this.pactualizacion = (this.permisom[4] == 'true');
        this.pfiltro = (this.permisom[5] == 'true');
        this.preporte = (this.permisom[6] == 'true');
        var someJsonString = navParams.get("potros1");
        // jsonObject will contain a valid JavaScript object
        if (someJsonString != '') {
            this.jsonObject2 = JSON.parse(someJsonString);
        }
    }
    CalusacusbicaListPage.prototype.clearSearchg = function () {
        this.gSearchQuery = '';
    };
    CalusacusbicaListPage.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get('username').then(function (value) {
            _this.username = value;
        });
    };
    CalusacusbicaListPage.prototype.dapermisos2 = function (data, opcion) {
        var re = '';
        for (var i = 0; i < data.length; i++) {
            if (data[i].modulo == opcion) {
                re = data[i].permisos.ingreso + ',' + data[i].permisos.consulta + ',' + data[i].permisos.elimina + ',' + data[i].permisos.creacion + ',' + data[i].permisos.actualiza + ',' + data[i].permisos.filtro + ',' + data[i].permisos.reporte;
                break;
            }
        }
        return re;
    };
    CalusacusbicaListPage.prototype.dapermisos = function (data, opcion) {
        var re;
        for (var i = 0; i < data.length; i++) {
            if (data[i].modulo == opcion) {
                re = data[i].permisos;
                break;
            }
        }
        //DD/MM/YYYY hh:mm A
        return re;
    };
    CalusacusbicaListPage.prototype.dapermisos_visible = function (opcion) {
        var re = false;
        if (this.jsonObject2) {
            for (var i = 0; i < this.jsonObject2.length; i++) {
                if (this.jsonObject2[i].modulo == opcion) {
                    re = !this.jsonObject2[i].permisos.ingreso;
                    break;
                }
            }
        }
        //DD/MM/YYYY hh:mm A
        return re;
    };
    CalusacusbicaListPage.prototype.showFilter = function () {
        var _this = this;
        var campo = '';
        this.hasFilter = true;
        var select = {
            title: 'Seleccione profesor',
            inputs: [],
            buttons: [{ text: 'Cancelar' }, { text: 'Buscar', handler: function (todo) {
                        //buscamos
                        campo = todo;
                        _this.idsuscriptortt = campo;
                        var cad = '';
                        switch (_this.nivelprx) {
                            case '?key=1':////ubicaciones
                                cad = campo + '/1/idiomasprofe';
                                break;
                            case '?key=11':////ubicaciones
                                cad = campo + '/1/idiomasprofe';
                                break;
                            case '?key=2'://bimestre
                                cad = campo + '/1/idiomasprofe2';
                                break;
                            case '?key=22'://bimestre
                                cad = campo + '/1/idiomasprofe2';
                                break;
                        }
                        var self = _this;
                        self.loading = true;
                        _this.regService.getReg(cad, 'asignaubicacions').then(function (data) {
                            _this.items = data;
                            _this.items2 = data;
                            self.loading = false;
                        }, function (err) {
                            _this.msj.showError3('Error', err.error);
                        });
                    } }]
        };
        var filtro1 = '';
        var filtro2 = '';
        switch (this.nivelprx) {
            case '?key=1':////ubicaciones
                filtro1 = '1/2/asigna_profesor2';
                filtro2 = 'asignacalusacs';
                break;
            case '?key=11':////ubicaciones
                filtro1 = '1/2/asigna_profesor2';
                filtro2 = 'asignacalusacs';
                break;
            case '?key=2'://bimestre
                filtro1 = '1/2/asigna_profesor';
                filtro2 = 'asignacalusacs';
                break;
            case '?key=22'://bimestre
                filtro1 = '1/2/asigna_profesor';
                filtro2 = 'asignacalusacs';
                break;
        }
        this.regService.getReg(filtro1, filtro2).then(function (data) {
            var aa;
            aa = data;
            for (var i = 0; i < aa.length; i++) {
                select.inputs.push({ name: 'myInput', type: 'radio', label: aa[i].nombre, value: aa[i]._id });
            }
            var newAlert = _this.alertCtrl.create(select);
            newAlert.present();
        }, function (err) {
            _this.msj.showError3('Error', err.error);
        });
    };
    CalusacusbicaListPage.prototype.pideregistros = function () {
        var _this = this;
        var cad = '';
        switch (this.nivelprx) {
            case '?key=1':////ubicaciones
                this.rolxx = 0;
                this.tipox = '';
                this.titlexx = 'Examenes de ubicación';
                cad = this.idsuscriptor + '/1/idiomasprofe';
                break;
            case '?key=11':////ubicaciones
                this.tipox = '';
                this.rolxx = 1;
                this.titlexx = 'Actas de ubicación';
                cad = this.idsuscriptor + '/1/idiomasprofe';
                break;
            case '?key=2'://bimestre
                this.tipox = '2';
                this.rolxx = 0;
                this.titlexx = 'Bimestre';
                cad = this.idsuscriptor + '/1/idiomasprofe2';
                break;
            case '?key=22'://bimestre
                this.tipox = '2';
                this.rolxx = 1;
                this.titlexx = 'Listados';
                cad = this.idsuscriptor + '/1/idiomasprofe2';
        }
        if (this.tiposus[6] == 'DOCENTE CALUSAC') {
            this.rolxx = '23';
        }
        var self = this;
        self.loading = true;
        if (this.rolxx == '23') {
            this.regService.getReg(cad, 'asignaubicacions').then(function (data) {
                _this.items = data;
                _this.items2 = data;
                self.loading = false;
            }, function (err) {
                _this.msj.showError3('Error', err.error);
            });
        }
        else {
            this.regService.getReg(cad, 'asignaubicacions').then(function (data) {
                _this.items = data;
                _this.items2 = data;
                self.loading = false;
            }, function (err) {
                _this.msj.showError3('Error', err.error);
            });
        }
    };
    CalusacusbicaListPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.nivelprx = this.navParams.get("nivel");
        switch (this.nivelprx) {
            case '?key=1':////ubicaciones
                this.rolxx = 0;
                this.tipox = '';
                this.titlexx = 'Examenes de ubicación';
                break;
            case '?key=11':////ubicaciones
                this.tipox = '';
                this.rolxx = 1;
                this.titlexx = 'Examenes de ubicación';
                break;
            case '?key=2'://bimestre
                this.tipox = '2';
                this.rolxx = 0;
                this.titlexx = 'Examenes de bimestre';
                break;
            case '?key=22'://bimestre
                this.tipox = '2';
                this.rolxx = 1;
                this.titlexx = 'Examenes de bimestre';
        }
        this.storage.get('tiposus').then(function (value) {
            _this.tiposus = value.split(',');
            _this.idsuscriptor = _this.tiposus[3];
            _this.idsuscriptortt = _this.idsuscriptor;
            _this.pideregistros();
        });
    };
    CalusacusbicaListPage.prototype.loadMore = function (ev) {
        this.gLimit += 50;
        setTimeout(function () { return ev.complete(); }, 1000);
    };
    CalusacusbicaListPage.prototype.salonRecord = function (item, no) {
        if (this.nivelprx === '?key=1') {
            this.navCtrl.push('DocenteNotas1ubicaPage', { sede: item.tipounidad, nombreidioma: item.nombre, titlexx: this.titlexx, codigoidioma: item.codigo, rolxx: this.rolxx, record: item, tipo: this.tipox, idsuscriptor: this.idsuscriptortt, permiso: this.permisom, potros1: this.navParams.get("potros1") });
        }
        else {
            this.navCtrl.push('DocenteNotas1Page', { sede: item.tipounidad, nombreidioma: item.nombre, titlexx: this.titlexx, codigoidioma: item.codigo, rolxx: this.rolxx, record: item, tipo: this.tipox, idsuscriptor: this.idsuscriptortt, permiso: this.permisom, potros1: this.navParams.get("potros1") });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('valueBarsCanvas'),
        __metadata("design:type", Object)
    ], CalusacusbicaListPage.prototype, "valueBarsCanvas", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('valueBarsCanvas2'),
        __metadata("design:type", Object)
    ], CalusacusbicaListPage.prototype, "valueBarsCanvas2", void 0);
    CalusacusbicaListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-calusacusbica-list',template:/*ion-inline-start:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\CALUSAC\exaubicaciones\calusacusbica-list\calusacusbica-list.html"*/'<ion-header no-border class="opaque">\n  <ion-navbar  no-border-bottom>\n      <button ion-button menuToggle>   \n          <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title> \n    {{titlexx}}\n  </ion-title>\n  <ion-buttons end>\n    <button title="Seleccione Profesor" *ngIf=" rolxx == 1 || rolxx==0" (click)="showFilter()" icon-only ion-button padding-right>\n      <ion-icon name="funnel"></ion-icon>\n    </button>\n        \n      <button title="Refrescar Información" (click)="pideregistros()" icon-only ion-button padding-right>\n          <ion-icon name="refresh"></ion-icon>\n        </button>\n    </ion-buttons>\n</ion-navbar>\n<ion-toolbar no-border-top>\n    <ion-searchbar   debounce="2000" (ionCancel)="clearSearchg($event)" [(ngModel)]="gSearchQuery" placeholder="{{ \'NO2_REGISTROS\' | translate }}{{items.length}}]">\n      </ion-searchbar>\n  </ion-toolbar>\n\n</ion-header>\n   \n<ion-content  fullscreen>\n\n\n\n\n\n<!--\n      \n    \n<div style="width:100%; height:400px">\n  <div>\n      <ion-card >\n          <ion-card-header>\n            Analytics\n          </ion-card-header>   \n          <ion-card-content>\n            <canvas #valueBarsCanvas2></canvas>\n          </ion-card-content>\n        </ion-card>\n  </div>\n</div>\n\n\n  <canvas #barChart2 ></canvas>\n-->\n  \n\n    \n    \n\n\n  <ion-list >\n     \n\n   \n     <ion-item    *ngFor="let item of items | search: gSearchQuery | LimitPipe: gLimit ;let i = index;" text-wrap>\n       \n             <ion-card >\n                     <ion-item text-wrap>\n                      {{item._id}}\n                         <h2>Idioma: {{item.nombre}}</h2>\n                         <h2>Sede: {{item.tipounidad}}</h2>\n                        \n                       </ion-item>\n                       <ion-row no-padding>\n                                 \n         \n                               \n                                 <ion-col text-center>\n                                     <button (click)="salonRecord(item,i)" ion-button clear small  icon-start>\n                                       <ion-icon name=\'albums\'></ion-icon>\n                                        Horario\n                                       \n                                     </button>\n                                   </ion-col>\n         \n                               \n                         </ion-row>\n                      \n                     </ion-card>\n\n                     \n                     \n \n   </ion-item>\n  </ion-list>\n  <ion-infinite-scroll (ionInfinite)="loadMore($event)">\n     <ion-infinite-scroll-content></ion-infinite-scroll-content>\n   </ion-infinite-scroll>\n\n  \n\n</ion-content>'/*ion-inline-end:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\CALUSAC\exaubicaciones\calusacusbica-list\calusacusbica-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__providers__["d" /* NotificationProvider */], __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers__["a" /* Auth */]])
    ], CalusacusbicaListPage);
    return CalusacusbicaListPage;
}());

//# sourceMappingURL=calusacusbica-list.js.map

/***/ }),

/***/ 925:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalusacusbicaListPageModule", function() { return CalusacusbicaListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__calusacusbica_list__ = __webpack_require__(1365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pipes_pipes_module__ = __webpack_require__(445);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var CalusacusbicaListPageModule = /** @class */ (function () {
    function CalusacusbicaListPageModule() {
    }
    CalusacusbicaListPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__calusacusbica_list__["a" /* CalusacusbicaListPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__calusacusbica_list__["a" /* CalusacusbicaListPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild(),
                __WEBPACK_IMPORTED_MODULE_4__pipes_pipes_module__["a" /* PipesModule */]
            ],
        })
    ], CalusacusbicaListPageModule);
    return CalusacusbicaListPageModule;
}());

//# sourceMappingURL=calusacusbica-list.module.js.map

/***/ })

});
//# sourceMappingURL=222.js.map