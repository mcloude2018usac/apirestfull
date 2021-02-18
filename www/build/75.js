webpackJsonp([75],{

/***/ 1111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserListPageModule", function() { return UserListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_list__ = __webpack_require__(1567);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pipes_pipes_module__ = __webpack_require__(445);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var UserListPageModule = /** @class */ (function () {
    function UserListPageModule() {
    }
    UserListPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__user_list__["a" /* UserListPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__user_list__["a" /* UserListPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild(),
                __WEBPACK_IMPORTED_MODULE_4__pipes_pipes_module__["a" /* PipesModule */]
            ],
        })
    ], UserListPageModule);
    return UserListPageModule;
}());

//# sourceMappingURL=user-list.module.js.map

/***/ }),

/***/ 1567:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserListPage; });
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





var UserListPage = /** @class */ (function () {
    //private barcodeScanner:BarcodeScanner,
    function UserListPage(alertCtrl, storage, msj, translateService, navCtrl, _MODAL, navParams, regService) {
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
        this.tiposus = [];
        this.gLimit = 50;
        this.pofilel = './assets/img/profilelocal.png';
        this.PageSegmet = 'foods';
        this.gSearchQuery = '';
        this.username = "";
        this.unidad = "";
        this.page = 1;
        this.maximumPages = 3;
        this.idafiliado = 'na';
        this.pingreso = false;
        this.pconsulta = false;
        this.peliminacion = false;
        this.pcreacion = false;
        this.pactualizacion = false;
        this.preporte = false;
        this.pfiltro = false;
        this.permisom = [];
        this.excludeTracks = [];
        this.translateService.get('APPX').subscribe(function (value) {
            _this.idempresa = value;
        });
        console.log(this.navParams.get("permiso"));
        this.permisom = String(navParams.get("permiso")).split(",");
        this.pingreso = (this.permisom[0] == 'true');
        this.pconsulta = (this.permisom[1] == 'true');
        this.peliminacion = (this.permisom[2] == 'true');
        this.pcreacion = (this.permisom[3] == 'true');
        this.pactualizacion = (this.permisom[4] == 'true');
        this.pfiltro = (this.permisom[5] == 'true');
        this.preporte = (this.permisom[6] == 'true');
    }
    UserListPage.prototype.clearSearchg = function () {
        this.gSearchQuery = '';
    };
    UserListPage.prototype.showFilter = function () {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'Buscar por DPI/CUI',
            message: 'Ingrese DPI/CUI',
            inputs: [
                {
                    name: 'dpi'
                }
            ],
            buttons: [
                {
                    text: 'Cancelar'
                },
                {
                    text: 'Buscar',
                    handler: function (todo) {
                        if (todo) {
                            _this.regService.getReg(todo.dpi + '/' + 'persona/' + _this.idempresa, 'personals').then(function (data) {
                                _this.items = data;
                            }, function (err) {
                                _this.msj.showError3('Error', err.error);
                            });
                            console.log(todo);
                        }
                    }
                }
            ]
        });
        prompt.present();
    };
    UserListPage.prototype.pideregistros = function (infiniteScroll) {
        var _this = this;
        var self = this;
        self.loading = true;
        this.items = [];
        if (this.role == 'Administrador') {
            //?results=20&page=${this.page}
            this.regService.getReg(this.gLimit + '/pagineo2x/' + this.page + '/' + this.idempresa, 'personals').then(function (data) {
                _this.items = _this.items.concat(data['docs']);
                _this.maximumPages = _this.items.concat(data['pages']);
                if (infiniteScroll) {
                    infiniteScroll.complete();
                }
                self.loading = false;
            }, function (err) {
                _this.msj.showError3('Error', err.error);
            });
        }
        else {
            this.regService.getReg(this.unidad + '/unidadper/' + this.idempresa, 'personals').then(function (data) {
                _this.items = data;
                self.loading = false;
            }, function (err) {
                _this.msj.showError3('Error', err.error);
            });
        }
    };
    UserListPage.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get('username').then(function (value) {
            _this.username = value;
        });
        this.storage.get('tiposus').then(function (value) {
            _this.tiposus = value.split(',');
            _this.unidad = _this.tiposus[7];
            _this.role = _this.tiposus[6];
            _this.pideregistros();
        });
    };
    UserListPage.prototype.ionViewDidLoad = function () {
        console.log(this.navParams.get("permiso"));
        // this.pideregistros();
    };
    UserListPage.prototype.loadMore = function (ev) {
        // this.gLimit += 50;
        // setTimeout(() => ev.complete(), 1000);
        this.page++;
        this.pideregistros(ev);
        if (this.page === this.maximumPages) {
            ev.enable(false);
        }
    };
    UserListPage.prototype.saldoRecord = function (item, no) {
        var _this = this;
        this.regService.getReg(item._id, 'suscriptorsaldos').then(function (data) {
            var addModal = _this._MODAL.create('SuscriptorsaldoPage', { record: data, record2: { idsuscriptor: item._id, idnombre: item.nombre, iddpi: item.cui } }, { showBackdrop: true, enableBackdropDismiss: false });
            addModal.onDidDismiss(function (data) {
                if (data) {
                }
            });
            addModal.present();
        }, function (err) {
            var addModal = _this._MODAL.create('SuscriptorsaldoPage', { record: null, record2: { idsuscriptor: item._id, idnombre: item.nombre, iddpi: item.cui } }, { showBackdrop: true, enableBackdropDismiss: false });
            addModal.onDidDismiss(function (data) {
                if (data) {
                }
            });
            addModal.present();
            // this.translateService.get('NO_OPERACION').subscribe((value) => { this.msj.showError3('Error',value);  })
        });
    };
    UserListPage.prototype.deleteRecord = function (item, no) {
        var _this = this;
        var alert = this.alertCtrl.create({ title: 'Esta seguro de realizar esta operación?',
            buttons: [
                { text: 'Si',
                    handler: function () {
                        var recordID = item._id;
                        _this.regService.deleteReg(recordID + '/' + _this.username + '/' + _this.idempresa + '/' + _this.idafiliado, 'personals').then(function (data) {
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
    UserListPage.prototype.updateRecord = function (item, no) {
        var _this = this;
        var addModal = this._MODAL.create('UserCreatePage', { record: item, actualizacion: this.pactualizacion }, { showBackdrop: true, enableBackdropDismiss: false });
        addModal.onDidDismiss(function (data) {
            if (data) {
                // this.items.splice(no, 1);
                //  this.items = this.items.concat([data]);
                _this.pideregistros();
            }
        });
        addModal.present();
        //  this.navCtrl.push('EmpresaCreatePage', { record : item });
    };
    UserListPage.prototype.addRecord = function () {
        var _this = this;
        var addModal = this._MODAL.create('UserCreatePage', { record: null, actualizacion: this.pactualizacion }, { showBackdrop: true, enableBackdropDismiss: false });
        addModal.onDidDismiss(function (data) {
            if (data) {
                //  this.items = this.items.concat([data]);
                _this.pideregistros();
            }
        });
        addModal.present();
        //this.navCtrl.push('EmpresaCreatePage');
    };
    UserListPage.prototype.viewRecord = function (item) {
        // let modal = this._MODAL.create(ViewGalleryPage, { record : item });
        // modal.present();
    };
    UserListPage.prototype.presentFilter = function () {
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
    UserListPage.prototype.updateSchedule = function () {
        // Close any open sliding items when the schedule updates
        /*
         this.scheduleList && this.scheduleList.closeSlidingItems();
     
         this.confData.getTimeline(this.dayIndex, this.queryText, this.excludeTracks, this.segment).subscribe((data: any) => {
           this.shownSessions = data.shownSessions;
           this.groups = data.groups;
         });
         */
    };
    UserListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-user-list',template:/*ion-inline-start:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\SEGURIDAD\user-list\user-list.html"*/'<ion-header no-border class="opaque">\n    <ion-navbar  no-border-bottom>\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n          </button>\n      <ion-title>\n     Usuarios\n    </ion-title>\n    <ion-buttons end>\n        <button [hidden]="!pfiltro" (click)="showFilter()" icon-only ion-button padding-right>\n                    <ion-icon name="funnel"></ion-icon>\n                  </button>\n        <button [hidden]="!pconsulta"  (click)="pideregistros()" icon-only ion-button padding-right>\n            <ion-icon name="refresh"></ion-icon>\n          </button>\n      </ion-buttons>\n  </ion-navbar>\n  <ion-toolbar no-border-top>\n      <ion-searchbar debounce="2000" [hidden]="!pconsulta"  (ionCancel)="clearSearchg($event)" [(ngModel)]="gSearchQuery" placeholder="{{ \'NO2_REGISTROS\' | translate }}{{items.length}}]">\n        </ion-searchbar>\n    </ion-toolbar>\n\n</ion-header>\n  \n<ion-content  fullscreen>\n   \n  \n        <ion-card [hidden]="!pconsulta"   *ngFor="let item of items | search: gSearchQuery | LimitPipe: gLimit ;let i = index;">\n           \n          <ion-row>\n            <ion-col    text-right>\n             \n                    No: {{i+1}}\n            </ion-col>    \n            <ion-item text-wrap>\n                <ion-avatar item-start>\n                    <img  *ngIf="item.foto"  src="{{item.foto}}">\n                    <img  *ngIf="!item.foto" src="{{pofilel}}">\n                  </ion-avatar>\n              <button ion-item  [disabled]="!pactualizacion" (click)="updateRecord(item,i)">\n                   \n                  \n                    <h2> Nombre: {{item.nombre}} </h2> \n                      <p>Email: {{item.email}} </p>\n                      <p>CUI: {{item.cui}} </p>\n                      <p>Direccion: {{item.direccion}} </p>\n                      <p>Telefono: {{item.telefono}} </p>\n                      <p>Sexo: {{item.sexo}} </p>\n                      <p>Nov: {{item.nov}} </p>\n                      <p>Unidad: {{item.unidad.nombre}} </p>\n                      <p>Tipo suscriptor: {{item.tiposuscriptor.nombre}} </p>\n\n                      <p>Rol: {{item.role}} </p>\n              </button>\n            </ion-item>\n            <ion-col    text-right>\n                                Estado: {{item.estado}}\n            </ion-col>\n            </ion-row>\n\n\n     \n            <ion-row no-padding>\n                <ion-col>\n                  <button [hidden]="!peliminacion"  (click)="deleteRecord(item,i)" ion-button clear small  icon-start>\n                    <ion-icon name=\'md-trash\'></ion-icon>\n                    Eliminar\n                  </button>\n                </ion-col>\n\n                <ion-col text-center>\n                    <button [hidden]="!pcreacion"  (click)="saldoRecord(item)" ion-button clear small  icon-start>\n                      <ion-icon name=\'albums\'></ion-icon>\n                      Saldo y Dispositivos\n                      \n                    </button>\n                  </ion-col>\n\n              \n\n\n              </ion-row>\n        </ion-card>\n \n\n\n\n   <ion-infinite-scroll (ionInfinite)="loadMore($event)" loadingSpinner="bubbles" loadingText="Loading ...">\n      <ion-infinite-scroll-content></ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n\n    <ion-fab bottom right #fab>\n        <button ion-fab [hidden]="!pcreacion"  (click)="addRecord()"><ion-icon name="add"></ion-icon></button>\n        \n    </ion-fab>\n\n</ion-content>\n'/*ion-inline-end:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\SEGURIDAD\user-list\user-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_2__providers__["d" /* NotificationProvider */], __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers__["a" /* Auth */]])
    ], UserListPage);
    return UserListPage;
}());

//# sourceMappingURL=user-list.js.map

/***/ })

});
//# sourceMappingURL=75.js.map