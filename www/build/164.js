webpackJsonp([164],{

/***/ 1439:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserMonitordetPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_img_viewer__ = __webpack_require__(450);
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







var UserMonitordetPage = /** @class */ (function () {
    //private barcodeScanner:BarcodeScanner,
    function UserMonitordetPage(Pdfx, imageViewerCtrl, alertCtrl, storage, msj, translateService, navCtrl, _MODAL, navParams, regService) {
        var _this = this;
        this.Pdfx = Pdfx;
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
        this.unidadt = "";
        this.idafiliado = 'na';
        this.excludeTracks = [];
        this.OnExportpdf = function () {
            this.Pdfx.dadenuncias(this.items);
        };
        this.translateService.get('APPX').subscribe(function (value) {
            _this.idempresa = value;
        });
        //traer todas las unidades
    }
    UserMonitordetPage.prototype.clearSearchg = function () {
        this.gSearchQuery = '';
    };
    UserMonitordetPage.prototype.showFilter = function () {
    };
    UserMonitordetPage.prototype.presentImage = function (myImage) {
        var imageViewer = this._imageViewerCtrl.create(myImage);
        imageViewer.present();
    };
    UserMonitordetPage.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get('username').then(function (value) {
            _this.username = value;
        });
    };
    UserMonitordetPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.items = this.navParams.data.record;
        this.tipot = this.navParams.data.record2.tipo;
        this.storage.get('tiposus').then(function (value) {
            _this.tiposus = value.split(',');
            _this.unidadt = _this.tiposus[7];
        });
    };
    UserMonitordetPage.prototype.loadMore = function (ev) {
        this.gLimit += 50;
        setTimeout(function () { return ev.complete(); }, 1000);
    };
    UserMonitordetPage.prototype.actdenuncia = function (op, item) {
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
                                                    bitacora: { idempresa: _this.idempresa, idafiliado: '', email: _this.username, permiso: 'Actualiza', accion: ' Actualiza denuncia ' }
                                                };
                                            }
                                            else {
                                                options = {
                                                    estado: op,
                                                    notafin: todo.nota,
                                                    bitacora: { idempresa: _this.idempresa, idafiliado: '', email: _this.username, permiso: 'Actualiza', accion: ' Actualiza denuncia ' }
                                                };
                                            }
                                            _this.regService.createReg(item._id, options, 'participa3s').then(function (result) {
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
    UserMonitordetPage.prototype.deleteRecord = function (item, no) {
        var _this = this;
        var alert = this.alertCtrl.create({ title: 'Esta seguro de realizar esta operación?',
            buttons: [
                { text: 'Si',
                    handler: function () {
                        var recordID = item._id;
                        _this.regService.deleteReg(recordID + '/' + _this.username + '/' + _this.idempresa + '/' + _this.idafiliado, 'participa3s').then(function (data) {
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
    UserMonitordetPage.prototype.updateRecord = function (item, no) {
        var _this = this;
        var addModal = this._MODAL.create('participa3CreatePage', { record: item }, { showBackdrop: true, enableBackdropDismiss: false });
        addModal.onDidDismiss(function (data) {
            if (data) {
                _this.items.splice(no, 1);
                _this.items = _this.items.concat([data]);
            }
        });
        addModal.present();
        //  this.navCtrl.push('EmpresaCreatePage', { record : item });
    };
    UserMonitordetPage.prototype.addRecord = function () {
        var _this = this;
        var addModal = this._MODAL.create('participa3CreatePage', { record: null }, { showBackdrop: true, enableBackdropDismiss: false });
        addModal.onDidDismiss(function (data) {
            if (data) {
                _this.items = _this.items.concat([data]);
            }
        });
        addModal.present();
        //this.navCtrl.push('EmpresaCreatePage');
    };
    UserMonitordetPage.prototype.viewRecord = function (item) {
        // let modal = this._MODAL.create(ViewGalleryPage, { record : item });
        // modal.present();
    };
    UserMonitordetPage.prototype.presentFilter = function () {
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
    UserMonitordetPage.prototype.updateSchedule = function () {
        // Close any open sliding items when the schedule updates
        /*
         this.scheduleList && this.scheduleList.closeSlidingItems();
     
         this.confData.getTimeline(this.dayIndex, this.queryText, this.excludeTracks, this.segment).subscribe((data: any) => {
           this.shownSessions = data.shownSessions;
           this.groups = data.groups;
         });
         */
    };
    UserMonitordetPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-user-monitordet',template:/*ion-inline-start:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\COMUNICACION\user-monitordet\user-monitordet.html"*/'<ion-header>\n  <ion-navbar [color]="\'navbarColor\'">\n      <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n    <ion-title>\n     {{tipot}}\n    </ion-title>\n    <ion-buttons end>\n            <button rel="tooltip" title="Generar reporte denuncias" (click)="OnExportpdf()"  icon-only ion-button padding-right>\n                    <ion-icon name="paper"></ion-icon>\n                  </button>\n\n      \n      </ion-buttons>\n  </ion-navbar>\n  <ion-toolbar no-border-top>\n      <ion-searchbar debounce="2000" (ionCancel)="clearSearchg($event)" [(ngModel)]="gSearchQuery" placeholder="{{ \'NO2_REGISTROS\' | translate }}{{items.length}}]">\n        </ion-searchbar>\n    </ion-toolbar>\n  \n</ion-header>\n     \n<ion-content  class="list-avatar-page" padding>   \n   \n         \n   <ion-list >\n      <ion-item    *ngFor="let item of items | search: gSearchQuery | LimitPipe: gLimit ;let i = index;" text-wrap>\n              <ion-card>\n                      <ion-row>\n                              <ion-col    text-right>\n                                      No: {{i+1}}  \n                              </ion-col>    \n                              <ion-item text-wrap>\n                                  <button ion-item  [disabled]="!pconsulta" (click)="updateRecord(item,i)">\n                                       \n                                      <h2>Unidad: {{item.unidad}}</h2>\n                                      <h1>Estado: {{item.estado}}</h1>\n                                      <h1 *ngIf="item.estado === \'Denuncia en proceso\'">Nota estado en proceso: {{item.notamedio}}</h1>\n                                      <h1 *ngIf="item.estado === \'Denuncia finalizada\'">\n                                      Nota estado en proceso: {{item.notamedio}}\n                                      Nota estado finalizado: {{item.notafin}}\n                                      </h1>\n                                      <h2>Motivo: {{item.motivo}}</h2>\n                                     \n                                         \n                                </button>\n                              </ion-item>\n                      \n                              </ion-row>\n\n                              <ion-row no-padding>\n                                  <ion-col>\n                                  <div class="msg-content">\n                                      \n                                      <img class="circle-pic"  height="150 px" width="150 px" #myImage (click)="presentImage(myImage)" *ngIf="item.f1" [src]="item.f1">\n                                  </div>\n                                </ion-col>\n                                <ion-col>\n                                    <div class="msg-content">\n                                     \n                                        <img class="circle-pic"  height="150 px" width="150 px" #myImage (click)="presentImage(myImage)" *ngIf="item.f2" [src]="item.f2">\n                                    </div>\n                                  </ion-col>\n          \n                                </ion-row>\n                     \n                   \n                    </ion-card>\n\n    </ion-item>\n   </ion-list>\n   <ion-infinite-scroll (ionInfinite)="loadMore($event)">\n      <ion-infinite-scroll-content></ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n\n    <ion-fab bottom right #fab>\n        <button ion-fab (click)="addRecord()"><ion-icon name="add"></ion-icon></button>\n        \n    </ion-fab>\n\n</ion-content>'/*ion-inline-end:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\COMUNICACION\user-monitordet\user-monitordet.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__providers_pdf_pdfx__["a" /* pdfx */], __WEBPACK_IMPORTED_MODULE_5_ionic_img_viewer__["a" /* ImageViewerController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_2__providers__["d" /* NotificationProvider */], __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers__["a" /* Auth */]])
    ], UserMonitordetPage);
    return UserMonitordetPage;
}());

//# sourceMappingURL=user-monitordet.js.map

/***/ }),

/***/ 997:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserMonitordetPageModule", function() { return UserMonitordetPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_monitordet__ = __webpack_require__(1439);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pipes_pipes_module__ = __webpack_require__(445);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var UserMonitordetPageModule = /** @class */ (function () {
    function UserMonitordetPageModule() {
    }
    UserMonitordetPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__user_monitordet__["a" /* UserMonitordetPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__user_monitordet__["a" /* UserMonitordetPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild(),
                __WEBPACK_IMPORTED_MODULE_4__pipes_pipes_module__["a" /* PipesModule */]
            ],
        })
    ], UserMonitordetPageModule);
    return UserMonitordetPageModule;
}());

//# sourceMappingURL=user-monitordet.module.js.map

/***/ })

});
//# sourceMappingURL=164.js.map