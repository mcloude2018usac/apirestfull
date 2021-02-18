webpackJsonp([238],{

/***/ 1384:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DocenteNotas1ubicaPage; });
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





var DocenteNotas1ubicaPage = /** @class */ (function () {
    function DocenteNotas1ubicaPage(modalCtrl, actionSheetCtrl, storage, alertCtrl, msj, translateService, navCtrl, navParams, regService) {
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
        this.loading = true;
        this.items = [];
        this.items2 = [];
        this.generated = '';
        this.idafiliado = 'na';
        this.hasFilter = false;
        this.gLimit = 50;
        this.PageSegmet = 'foods';
        this.gSearchQuery = '';
        this.permisom = [];
        this.potros1 = [];
        this.pingreso = false;
        this.pconsulta = false;
        this.peliminacion = false;
        this.pnota = false;
        this.pcreacion = false;
        this.pactualizacion = false;
        this.preporte = false;
        this.pfiltro = false;
        this.username = "";
        this.randomScalingFactor = function () {
            return Math.ceil(Math.random() * 10.0) * Math.pow(10, Math.ceil(Math.random() * 5));
        };
        this.tiposus = [];
        this.translateService.get('APPX').subscribe(function (value) {
            _this.idempresa = value;
        });
        this.pet = "Grabación";
        this.estadoant = 'Grabación',
            this.tipoxxx = this.navParams.data.tipo;
        this.codigoidioma = this.navParams.data.codigoidioma;
        this.idiomat = this.navParams.data.nombreidioma;
        this.titlexx = this.navParams.data.titlexx;
        this.sedet = this.navParams.data.sede;
        if (this.tipoxxx == undefined) {
            this.idtipo = 2;
            this.titlexx = 'Listado Oficial';
            this.tipoxxx = '2';
        }
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
    DocenteNotas1ubicaPage.prototype.clearSearchg = function () {
        this.gSearchQuery = '';
    };
    DocenteNotas1ubicaPage.prototype.busca = function (op) {
        this.estadoant = op;
        this.pideregistros(this.rolxx);
    };
    DocenteNotas1ubicaPage.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get('username').then(function (value) {
            _this.username = value;
        });
    };
    DocenteNotas1ubicaPage.prototype.dapermisos2 = function (data, opcion) {
        var re = '';
        for (var i = 0; i < data.length; i++) {
            if (data[i].modulo == opcion) {
                re = data[i].permisos.ingreso + ',' + data[i].permisos.consulta + ',' + data[i].permisos.elimina + ',' + data[i].permisos.creacion + ',' + data[i].permisos.actualiza + ',' + data[i].permisos.filtro + ',' + data[i].permisos.reporte;
                break;
            }
        }
        return re;
    };
    DocenteNotas1ubicaPage.prototype.dapermisos = function (data, opcion) {
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
    DocenteNotas1ubicaPage.prototype.dapermisos_visible = function (opcion) {
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
    DocenteNotas1ubicaPage.prototype.ionViewDidEnter = function () {
        /*
          this.pet = "Grabación";
          this.estadoant='Grabación'
          if(   this.tiposus[6]=='DOCENTE CALUSAC')
          {
        
            this.rolxx=0
            this.pideregistros( this.rolxx);
          }
          else{
            this.rolxx=1
            this.pideregistros( this.rolxx);
        
          }
          */
    };
    DocenteNotas1ubicaPage.prototype.pideregistros = function (rolxt) {
        var _this = this;
        var self = this;
        self.loading = true;
        var cad = '';
        if (rolxt == '0' || rolxt == undefined) {
            cad = this.idsuscriptor + '/' + this.navParams.data.record.codigo + '°' + this.estadoant + '/horarioprofe' + this.navParams.data.tipo + '/';
        }
        else {
            this.rolxx = 1;
            // cad='1/' +this.estadoant +'/horarioprofe2a/'  // da error cuando  es ubicacion
            // cad=this.idsuscriptor+'/' + this.navParams.data.record.codigo+ '°' +  this.estadoant +'/horarioprofe' +this.navParams.data.tipo+ '/'
            cad = this.estadoant + '/' + this.estadoant + '/horarioprofe2aubica' + '/';
        }
        this.regService.getReg(cad, 'asignaubicacions').then(function (data) {
            _this.items = data;
            _this.items2 = data;
            self.loading = false;
        }, function (err) {
            _this.msj.showError3('Error', err.error);
        });
    };
    DocenteNotas1ubicaPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.idsuscriptor = this.navParams.data.idsuscriptor;
        if (this.rolxx == undefined) {
            this.rolxx = 1;
        }
        this.storage.get('tiposus').then(function (value) {
            _this.tiposus = value.split(',');
            if (_this.tiposus[6] == 'DOCENTE CALUSAC') {
                _this.rolxx = 0;
                _this.pideregistros(_this.rolxx);
            }
            else {
                _this.rolxx = 1;
                _this.pideregistros(_this.rolxx);
            }
        });
    };
    DocenteNotas1ubicaPage.prototype.loadMore = function (ev) {
        this.gLimit += 50;
        setTimeout(function () { return ev.complete(); }, 1000);
    };
    DocenteNotas1ubicaPage.prototype.salonRecord = function (item, no) {
        var idiomanombre = '';
        if (this.idiomat) {
            idiomanombre = this.idiomat;
        }
        else {
            idiomanombre = item.ididioma.nombre;
        }
        if (this.sedet === undefined) {
            this.sedet = item.idtipounidad.nombre;
            this.tipot = item.idtipo.nombre;
        }
        if (this.tipoxxx == '1') {
            this.navCtrl.push('DocenteNotas2Page', { sede: this.sedet, idiomat: idiomanombre, titlexx: this.titlexx, rolxx: this.rolxx, tipoxxx: '1', permiso: this.permisom, potros1: this.navParams.get("potros1"), record: item, idsuscriptor: this.idsuscriptor, ididioma: item.ididioma._id, idioman: item.ididioma._id });
        }
        else {
            this.navCtrl.push('DocenteNotas2uPage', { ttipo: this.tipot, sede: this.sedet, idiomat: idiomanombre, titlexx: this.titlexx, rolxx: this.rolxx, tipoxxx: '1', permiso: this.permisom, potros1: this.navParams.get("potros1"), record: item, idsuscriptor: this.idsuscriptor, ididioma: item.ididioma._id, idioman: item.ididioma._id });
        }
    };
    DocenteNotas1ubicaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-docente-notas1ubica',template:/*ion-inline-start:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\CALUSAC\UBICACIONES\docente-notas1ubica\docente-notas1ubica.html"*/'<ion-header no-border >\n    <ion-navbar  no-border-bottom>\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n          </button>\n          <ion-title>\n      {{titlexx}}\n    </ion-title>\n    <ion-buttons end>\n\n        <button  (click)="pideregistros()" icon-only ion-button padding-right>\n            <ion-icon name="refresh"></ion-icon>\n          </button>\n      </ion-buttons>\n  </ion-navbar>\n  <ion-toolbar no-border-top>\n      <ion-searchbar   debounce="2000" (ionCancel)="clearSearchg($event)" [(ngModel)]="gSearchQuery" placeholder="{{ \'NO2_REGISTROS\' | translate }}{{items.length}}]">\n        </ion-searchbar>\n\n        <ion-title>ESTADO DE LISTADOS</ion-title>\n\n\n\n\n    </ion-toolbar>\n\n  </ion-header>\n\n  <ion-content  fullscreen>\n\n    <ion-segment  color="secundary" [(ngModel)]="pet">\n      <ion-segment-button   value="Grabación" color="red"  (ionSelect)="busca(\'Grabación\')">\n        Grabación\n      </ion-segment-button>\n      <ion-segment-button value="Preliminar" (ionSelect)="busca(\'Preliminar\')">\n        Preliminar\n      </ion-segment-button>\n      <ion-segment-button value="Final" (ionSelect)="busca(\'Final\')">\n        Cerrar Listado\n      </ion-segment-button>\n    </ion-segment>\n    <ion-list *ngIf="rolxx==\'0\' || rolxx==undefined" >\n       <ion-item  *ngFor="let item of items | search: gSearchQuery | LimitPipe: gLimit ;let i = index;" text-wrap>\n\n               <ion-card >\n                       <ion-item text-wrap>\n                        <h2>No: {{i+1}} </h2>\n                        <h2>Idioma: {{idiomat}} </h2>\n                         <h2>Profesor: {{item.idprofesornombre}} </h2>\n                           <h2>Edificio: {{item.idedificio.nombre}} - Salon: {{item.idsalon.nombre}} </h2>\n                           <h2>Dia:{{  (item.iddia).substring(0,10) }} </h2>\n                           <h2>Hora:{{item.idhora}} </h2>\n\n                           <h2>Estado Acta: {{item.estadoacta}}</h2>\n\n\n\n                         </ion-item>\n\n\n                         <ion-row no-padding>\n\n\n\n\n                                   <ion-col text-center>\n\n\n                                    <button  *ngIf=" item.estadoacta === \'Grabación\'  "  (click)="salonRecord(item,i)" ion-button clear small  icon-start>\n                                      <ion-icon name=\'contacts\'></ion-icon>\n                                       Asignados\n\n                                    </button>\n\n                                    <button  *ngIf=" item.estadoacta === \'Preliminar\'  && rolxx===0" (click)="salonRecord(item,i)" ion-button clear small  icon-start>\n                                      <ion-icon name=\'contacts\'></ion-icon>\n                                       Asignados\n\n                                    </button>\n\n                                    <button  *ngIf=" item.estadoacta === \'Preliminar\'  && rolxx===1"  (click)="salonRecord(item,i)" ion-button clear small  icon-start>\n                                      <ion-icon name=\'contacts\'></ion-icon>\n                                       Asignados\n\n                                    </button>\n\n                                       <button  *ngIf=" item.estadoacta === \'Final\' && rolxx===1"  (click)="salonRecord(item,i)" ion-button clear small  icon-start>\n                                         <ion-icon name=\'contacts\'></ion-icon>\n                                          Asignados\n\n                                       </button>\n\n                                       <button  *ngIf=" item.estadoacta === \'Final\' && rolxx===0"   (click)="salonRecord(item,i)" ion-button clear small  icon-start>\n                                        <ion-icon name=\'contacts\'></ion-icon>\n                                         Asignados\n\n                                      </button>\n                                     </ion-col>\n\n\n                           </ion-row>\n\n                       </ion-card>\n\n\n\n\n     </ion-item>\n    </ion-list>\n     <ion-list *ngIf="rolxx==\'1\'"  >\n      <ion-item  *ngFor="let item of items | search: gSearchQuery | LimitPipe: gLimit ;let i = index;" text-wrap>\n\n              <ion-card >\n                      <ion-item text-wrap>\n                       <h2>No: {{i+1}} </h2>\n                       <h2>Sede: {{item.idtipounidad.nombre}} </h2>\n                       <h2>Tipo: {{item.idtipo.nombre}} </h2>\n                       <h2>Periodo: {{item.idperiodo.nombre}} </h2>\n                       <h2>Idioma: {{item.ididioma.nombre}} </h2>\n                         <h2>Profesor: {{item.idprofesor.nombre}} </h2>\n                          <h2>Edificio: {{item.idedificio.nombre}} - Salon: {{item.idsalon.nombre}} </h2>\n                          <h2>Dia:{{  (item.iddia).substring(0,10) }} </h2>\n                          <h2>Hora:{{item.idhora}} </h2>\n\n                          <h2>Estado Acta: {{item.estadoacta}}</h2>\n\n\n\n                        </ion-item>\n\n\n                        <ion-row no-padding>\n\n\n\n\n                                  <ion-col text-center>\n\n\n                                   <button  *ngIf=" item.estadoacta === \'Grabación\'  "  (click)="salonRecord(item,i)" ion-button clear small  icon-start>\n                                     <ion-icon name=\'contacts\'></ion-icon>\n                                      Asignados\n\n                                   </button>\n\n                                   <button  *ngIf=" item.estadoacta === \'Preliminar\'  && rolxx===0" (click)="salonRecord(item,i)" ion-button clear small  icon-start>\n                                     <ion-icon name=\'contacts\'></ion-icon>\n                                      Asignados\n\n                                   </button>\n\n                                   <button  *ngIf=" item.estadoacta === \'Preliminar\'  && rolxx===1"  (click)="salonRecord(item,i)" ion-button clear small  icon-start>\n                                     <ion-icon name=\'contacts\'></ion-icon>\n                                      Asignados\n\n                                   </button>\n\n                                      <button  *ngIf=" item.estadoacta === \'Final\' && rolxx===1"  (click)="salonRecord(item,i)" ion-button clear small  icon-start>\n                                        <ion-icon name=\'contacts\'></ion-icon>\n                                         Asignados\n\n                                      </button>\n\n                                      <button  *ngIf=" item.estadoacta === \'Final\' && rolxx===0"   (click)="salonRecord(item,i)" ion-button clear small  icon-start>\n                                       <ion-icon name=\'contacts\'></ion-icon>\n                                        Asignados\n\n                                     </button>\n                                    </ion-col>\n\n\n                          </ion-row>\n\n                      </ion-card>\n\n\n\n\n    </ion-item>\n\n    </ion-list>\n    <ion-infinite-scroll (ionInfinite)="loadMore($event)">\n       <ion-infinite-scroll-content></ion-infinite-scroll-content>\n     </ion-infinite-scroll>\n\n\n\n  </ion-content>\n'/*ion-inline-end:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\CALUSAC\UBICACIONES\docente-notas1ubica\docente-notas1ubica.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__providers__["d" /* NotificationProvider */], __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers__["a" /* Auth */]])
    ], DocenteNotas1ubicaPage);
    return DocenteNotas1ubicaPage;
}());

//# sourceMappingURL=docente-notas1ubica.js.map

/***/ }),

/***/ 944:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocenteNotas1ubicaPageModule", function() { return DocenteNotas1ubicaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__docente_notas1ubica__ = __webpack_require__(1384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pipes_pipes_module__ = __webpack_require__(445);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var DocenteNotas1ubicaPageModule = /** @class */ (function () {
    function DocenteNotas1ubicaPageModule() {
    }
    DocenteNotas1ubicaPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__docente_notas1ubica__["a" /* DocenteNotas1ubicaPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__docente_notas1ubica__["a" /* DocenteNotas1ubicaPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild(),
                __WEBPACK_IMPORTED_MODULE_4__pipes_pipes_module__["a" /* PipesModule */]
            ],
        })
    ], DocenteNotas1ubicaPageModule);
    return DocenteNotas1ubicaPageModule;
}());

//# sourceMappingURL=docente-notas1ubica.module.js.map

/***/ })

});
//# sourceMappingURL=238.js.map