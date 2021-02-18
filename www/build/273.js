webpackJsonp([273],{

/***/ 1340:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MarketmailListPage; });
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





var MarketmailListPage = /** @class */ (function () {
    //private barcodeScanner:BarcodeScanner,
    function MarketmailListPage(alertCtrl, storage, msj, translateService, navCtrl, _MODAL, navParams, regService) {
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
        this.tiposus = [];
        this.generated = '';
        this.llave = [];
        this.gLimit = 50;
        this.PageSegmet = 'foods';
        this.gSearchQuery = '';
        this.username = "";
        this.idafiliado = 'na';
        this.translateService.get('APPX').subscribe(function (value) {
            _this.idempresa = value;
        });
    }
    MarketmailListPage.prototype.clearSearchg = function () {
        this.gSearchQuery = '';
    };
    MarketmailListPage.prototype.showFilter = function () {
    };
    MarketmailListPage.prototype.pideregistros = function () {
        var _this = this;
        var self = this;
        self.loading = true;
        if (this.navParams.data.idrol == 'lluviaideas') {
            this.regService.getReg(this.navParams.data.idempresa + '/' + this.categoria + '/categoria/' + this.username, 'mailmarkets').then(function (data) {
                _this.items = data;
                self.loading = false;
            }, function (err) {
                _this.msj.showError3('Error', err.error);
            });
        }
        else {
            this.regService.getReg(this.navParams.data.idempresa + '/' + this.categoria + '/categoria/', 'mailmarkets').then(function (data) {
                _this.items = data;
                self.loading = false;
            }, function (err) {
                _this.msj.showError3('Error', err.error);
            });
        }
    };
    MarketmailListPage.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get('username').then(function (value) {
            _this.username = value;
        });
    };
    MarketmailListPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.categoria = this.navParams.data.idcategoria;
        /*
    this.categoria=  this.navParams.get("nivel");
    
    if(this.categoria)
    {
      if(this.categoria=='')
      {
         this.categoria=this.navParams.data.idcategoria;
      }
        
    }
    */
        this.titulox = this.navParams.data.titulo;
        this.storage.get('tiposus').then(function (value) {
            _this.tiposus = value.split(',');
            _this.unidadt = _this.tiposus[7];
            _this.pideregistros();
        });
    };
    MarketmailListPage.prototype.loadMore = function (ev) {
        this.gLimit += 50;
        setTimeout(function () { return ev.complete(); }, 1000);
    };
    MarketmailListPage.prototype.actdenuncia = function (op, item) {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'Actualizar ' + op,
            message: 'Ingrese nota:',
            inputs: [
                {
                    name: 'nota'
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
                            var alert_1 = _this.alertCtrl.create({ title: 'Esta seguro de realizar esta operación?',
                                buttons: [
                                    { text: 'Si',
                                        handler: function () {
                                            var options;
                                            if (op == 'Denuncia en proceso') {
                                                options = {
                                                    estado: op,
                                                    notamedio: todo.nota,
                                                    bitacora: { idempresa: _this.navParams.data.idempresa, idafiliado: '', email: _this.username, permiso: 'Actualiza', accion: ' Actualiza denuncia ' }
                                                };
                                            }
                                            else {
                                                options = {
                                                    estado: op,
                                                    notafin: todo.nota,
                                                    bitacora: { idempresa: _this.navParams.data.idempresa, idafiliado: '', email: _this.username, permiso: 'Actualiza', accion: ' Actualiza denuncia ' }
                                                };
                                            }
                                            _this.regService.createReg(item._id, options, 'mailmarkets').then(function (result) {
                                                _this.msj.showError3('Exito', 'Operación realizada con exito');
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
                            alert_1.present();
                        }
                    }
                }
            ]
        });
        prompt.present();
    };
    MarketmailListPage.prototype.deleteRecord = function (item, no) {
        var _this = this;
        var alert = this.alertCtrl.create({ title: 'Esta seguro de realizar esta operación?',
            buttons: [
                { text: 'Si',
                    handler: function () {
                        var recordID = item._id;
                        _this.regService.deleteReg(recordID + '/' + _this.username + '/' + _this.idempresa + '/' + _this.idafiliado, 'mailmarkets').then(function (data) {
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
    MarketmailListPage.prototype.updateRecord = function (item, no) {
        var _this = this;
        var addModal = this._MODAL.create('MarketmailCreatePage', { record: item, titulo: this.titulox, idempresa: this.navParams.data.idempresa, idcategoria: this.categoria }, { showBackdrop: true, enableBackdropDismiss: false, cssClass: "modal-fullscreen" });
        addModal.onDidDismiss(function (data) {
            if (data) {
                _this.pideregistros();
            }
        });
        addModal.present();
        //  this.navCtrl.push('EmpresaCreatePage', { record : item });
    };
    MarketmailListPage.prototype.addRecord = function () {
        var _this = this;
        var addModal = this._MODAL.create('MarketmailCreatePage', { record: null, titulo: this.titulox, idempresa: this.navParams.data.idempresa, idcategoria: this.categoria }, { showBackdrop: true, enableBackdropDismiss: false, cssClass: "modal-fullscreen" });
        addModal.onDidDismiss(function (data) {
            if (data) {
                _this.pideregistros();
            }
        });
        addModal.present();
        //this.navCtrl.push('EmpresaCreatePage');
    };
    MarketmailListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-marketmail-list',template:/*ion-inline-start:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\BENCHMARK\marketmail-list\marketmail-list.html"*/'<ion-header>\n  <ion-navbar [color]="\'navbarColor\'">\n      <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n    <ion-title>\n      {{titulox}}\n    </ion-title>\n    <ion-buttons end>\n          \n        <button (click)="pideregistros()" icon-only ion-button padding-right>\n            <ion-icon name="refresh"></ion-icon>\n          </button>\n      </ion-buttons>\n  </ion-navbar>\n  <ion-toolbar no-border-top>\n      <ion-searchbar debounce="2000" (ionCancel)="clearSearchg($event)" [(ngModel)]="gSearchQuery" placeholder="{{ \'NO2_REGISTROS\' | translate }}{{items.length}}]">\n        </ion-searchbar>\n    </ion-toolbar>\n  \n</ion-header>\n     \n<ion-content  class="list-avatar-page" padding>   \n       \n         \n   <ion-list >\n      <ion-item    *ngFor="let item of items | search: gSearchQuery | LimitPipe: gLimit ;let i = index;" text-wrap>\n              <ion-card>\n                      <ion-row>   \n                              <ion-col    text-right>\n                                      Id: {{i+1}}  \n                                      \n                              </ion-col>    \n                              <ion-item text-wrap>\n                                  <button ion-item (click)="updateRecord(item,i)"  >\n                                    <h2>Ponencia: {{item.titulo}}</h2>\n                                    <h2>Descripción: {{item.nombre}}</h2>\n                                    <h2>Author: {{item.autor}}</h2>\n                                    <h2>Presenta: {{item.presenta}}</h2>\n                                      \n                                      \n                                         \n                                </button>\n                              </ion-item>\n                              <ion-col  style="background:#f0f0f5"  text-right>\n              \n                                Estado: {{item.estado}}\n                               </ion-col>\n                      \n                              </ion-row>\n\n                           \n                     \n                      <ion-row no-padding>\n                         \n\n                          <ion-col>\n                            <button  (click)="deleteRecord(item,i)" ion-button clear small  icon-start>\n                              <ion-icon name=\'md-trash\'></ion-icon>\n                              Eliminar\n                            </button>\n                          </ion-col>\n                        \n                        </ion-row>\n                    </ion-card>\n\n    </ion-item>\n   </ion-list>\n   <ion-infinite-scroll (ionInfinite)="loadMore($event)">\n      <ion-infinite-scroll-content></ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n\n    <ion-fab bottom right #fab>\n        <button ion-fab (click)="addRecord()"><ion-icon name="add"></ion-icon></button>\n        \n    </ion-fab>\n\n</ion-content>'/*ion-inline-end:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\BENCHMARK\marketmail-list\marketmail-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_2__providers__["d" /* NotificationProvider */], __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers__["a" /* Auth */]])
    ], MarketmailListPage);
    return MarketmailListPage;
}());

//# sourceMappingURL=marketmail-list.js.map

/***/ }),

/***/ 900:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarketmailListPageModule", function() { return MarketmailListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__marketmail_list__ = __webpack_require__(1340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pipes_pipes_module__ = __webpack_require__(445);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var MarketmailListPageModule = /** @class */ (function () {
    function MarketmailListPageModule() {
    }
    MarketmailListPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__marketmail_list__["a" /* MarketmailListPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__marketmail_list__["a" /* MarketmailListPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild(),
                __WEBPACK_IMPORTED_MODULE_4__pipes_pipes_module__["a" /* PipesModule */]
            ],
        })
    ], MarketmailListPageModule);
    return MarketmailListPageModule;
}());

//# sourceMappingURL=marketmail-list.module.js.map

/***/ })

});
//# sourceMappingURL=273.js.map