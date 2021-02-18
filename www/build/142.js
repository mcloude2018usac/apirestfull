webpackJsonp([142],{

/***/ 1020:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TarifadListPageModule", function() { return TarifadListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tarifad_list__ = __webpack_require__(1462);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pipes_pipes_module__ = __webpack_require__(445);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var TarifadListPageModule = /** @class */ (function () {
    function TarifadListPageModule() {
    }
    TarifadListPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__tarifad_list__["a" /* TarifadListPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__tarifad_list__["a" /* TarifadListPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild(),
                __WEBPACK_IMPORTED_MODULE_4__pipes_pipes_module__["a" /* PipesModule */]
            ],
        })
    ], TarifadListPageModule);
    return TarifadListPageModule;
}());

//# sourceMappingURL=tarifad-list.module.js.map

/***/ }),

/***/ 1462:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TarifadListPage; });
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





var TarifadListPage = /** @class */ (function () {
    //private barcodeScanner:BarcodeScanner,
    function TarifadListPage(alertCtrl, storage, msj, translateService, navCtrl, _MODAL, navParams, regService) {
        var _this = this;
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
        this.idafiliado = 'na';
        this.pingreso = false;
        this.pconsulta = false;
        this.peliminacion = false;
        this.pcreacion = false;
        this.pactualizacion = false;
        this.preporte = false;
        this.pfiltro = false;
        this.permisom = [];
        this.gLimit = 50;
        this.PageSegmet = 'foods';
        this.gSearchQuery = '';
        this.username = "";
        this.excludeTracks = [];
        this.permisom = String(navParams.get("permiso")).split(",");
        this.pingreso = (this.permisom[0] == 'true');
        this.pconsulta = (this.permisom[1] == 'true');
        this.peliminacion = (this.permisom[2] == 'true');
        this.pcreacion = (this.permisom[3] == 'true');
        this.pactualizacion = (this.permisom[4] == 'true');
        this.pfiltro = (this.permisom[5] == 'true');
        this.preporte = (this.permisom[6] == 'true');
        this.translateService.get('APPX').subscribe(function (value) {
            _this.idempresa = value;
        });
    }
    TarifadListPage.prototype.clearSearchg = function () {
        this.gSearchQuery = '';
    };
    TarifadListPage.prototype.pideregistros = function () {
        var _this = this;
        var self = this;
        self.loading = true;
        this.regService.getReg(this.idtarifa + '/' + this.idempresa, 'dtarifas').then(function (data) {
            _this.items = data;
            self.loading = false;
        }, function (err) {
            _this.msj.showError3('Error', err.error);
            // this.translateService.get('NO_OPERACION').subscribe((value) => { this.msj.showError3('Error',value);  })  
        });
    };
    TarifadListPage.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get('username').then(function (value) {
            _this.username = value;
        });
    };
    TarifadListPage.prototype.ionViewDidLoad = function () {
        this.idtarifa = this.navParams.data.record._id;
        this.nidtarifa = this.navParams.data.record.nombre;
        this.pideregistros();
    };
    TarifadListPage.prototype.loadMore = function (ev) {
        this.gLimit += 50;
        setTimeout(function () { return ev.complete(); }, 1000);
    };
    TarifadListPage.prototype.deleteRecord = function (item, no) {
        var _this = this;
        var alert = this.alertCtrl.create({ title: 'Esta seguro de realizar esta operación?',
            buttons: [
                { text: 'Si',
                    handler: function () {
                        var recordID = item._id;
                        _this.regService.deleteReg(recordID + '/' + _this.username + '/' + _this.idempresa + '/' + _this.idafiliado, 'dtarifas').then(function (data) {
                            _this.items.splice(no, 1);
                            _this.items = _this.items.concat([]);
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
    TarifadListPage.prototype.updateRecord = function (item, no) {
        var _this = this;
        var addModal = this._MODAL.create('TarifadCreatePage', { record: item, record2: { idtarifa: this.idtarifa, nidtarifa: this.nidtarifa } }, { showBackdrop: true, enableBackdropDismiss: false });
        addModal.onDidDismiss(function (data) {
            if (data) {
                _this.items.splice(no, 1);
                _this.items = _this.items.concat([data]);
            }
        });
        addModal.present();
        //  this.navCtrl.push('EmpresaCreatePage', { record : item });
    };
    TarifadListPage.prototype.addRecord = function () {
        var _this = this;
        var addModal = this._MODAL.create('TarifadCreatePage', { record: null, record2: { idtarifa: this.idtarifa, nidtarifa: this.nidtarifa } }, { showBackdrop: true, enableBackdropDismiss: false });
        addModal.onDidDismiss(function (data) {
            if (data) {
                _this.items = _this.items.concat([data]);
            }
        });
        addModal.present();
        //this.navCtrl.push('EmpresaCreatePage');
    };
    TarifadListPage.prototype.viewRecord = function (item) {
        // let modal = this._MODAL.create(ViewGalleryPage, { record : item });
        // modal.present();
    };
    TarifadListPage.prototype.presentFilter = function () {
        /*
       let modal = this._MODAL.create(ScheduleFilterPage, this.excludeTracks);
       modal.present();
   
       modal.onWillDismiss((data: any[]) => {
         if (data) {
           this.excludeTracks = data;
           this.updateSchedule();
         }
       });
   */
    };
    TarifadListPage.prototype.updateSchedule = function () {
        // Close any open sliding items when the schedule updates
        /*
         this.scheduleList && this.scheduleList.closeSlidingItems();
     
         this.confData.getTimeline(this.dayIndex, this.queryText, this.excludeTracks, this.segment).subscribe((data: any) => {
           this.shownSessions = data.shownSessions;
           this.groups = data.groups;
         });
         */
    };
    TarifadListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-tarifad-list',template:/*ion-inline-start:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\EMPRESA\tarifad-list\tarifad-list.html"*/'<ion-header no-border class="opaque">\n    <ion-navbar  no-border-bottom>\n        <button ion-button menuToggle>   \n            <ion-icon name="menu"></ion-icon>\n          </button>\n          <ion-title>  \n      {{ \'GESTION_DTARIFA\' | translate }} \n    </ion-title>\n    <ion-buttons end>\n       \n        <button [hidden]="!pconsulta"   (click)="pideregistros()" icon-only ion-button padding-right>\n            <ion-icon name="refresh"></ion-icon>\n          </button>\n      </ion-buttons>\n  </ion-navbar>\n    \n  <ion-toolbar no-border-top>\n      <ion-searchbar [hidden]="!pconsulta"   debounce="2000" (ionCancel)="clearSearchg($event)" [(ngModel)]="gSearchQuery" placeholder="{{ \'NO2_REGISTROS\' | translate }}{{items.length}}]">\n         \n        </ion-searchbar>\n     \n    </ion-toolbar>\n\n</ion-header>\n  \n<ion-content  fullscreen>\n   \n         \n   <ion-list >\n      <ion-item  [hidden]="!pconsulta"   *ngFor="let item of items | search: gSearchQuery | LimitPipe: gLimit ;let i = index;" text-wrap>\n        \n            <ion-card>\n                <ion-row>   \n                    <ion-col    text-right>\n                        No: {{i+1}}   \n                </ion-col>    \n                <ion-item  text-wrap>\n                  <button ion-item   [disabled]="!pactualizacion" (click)="updateRecord(item,i)">\n                      <h2>Nombre: {{item.nombre}}</h2>   \n                      <p>Hora inicio: {{item.horaini}}       Hora fin: {{item.horafin}} </p>\n                      <p>Monto: {{item.monto}}    </p>\n                    \n                      \n                  </button>\n                </ion-item>\n                <ion-col    text-right>\n                    Estado: {{item.estado}}\n            </ion-col>\n                    </ion-row>\n\n\n\n           \n\n                \n                    <ion-row no-padding>\n                        <ion-col>\n                          <button  [hidden]="!peliminacion" (click)="deleteRecord(item,i)" ion-button clear small  icon-start>\n                            <ion-icon name=\'md-trash\'></ion-icon>\n                            Eliminar\n                          </button>\n                        </ion-col>\n                       \n                        \n                      </ion-row>\n                  </ion-card>\n\n\n\n\n  \n    </ion-item>\n   </ion-list>\n   <ion-infinite-scroll (ionInfinite)="loadMore($event)">\n      <ion-infinite-scroll-content></ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n\n    <ion-fab bottom right #fab>\n        <button ion-fab [hidden]="!pcreacion" (click)="addRecord()"><ion-icon name="add"></ion-icon></button>\n        \n    </ion-fab>\n\n</ion-content>'/*ion-inline-end:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\EMPRESA\tarifad-list\tarifad-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_2__providers__["d" /* NotificationProvider */], __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers__["a" /* Auth */]])
    ], TarifadListPage);
    return TarifadListPage;
}());

//# sourceMappingURL=tarifad-list.js.map

/***/ })

});
//# sourceMappingURL=142.js.map