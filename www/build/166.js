webpackJsonp([166],{

/***/ 1441:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LluviaIdeasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng_socket_io__ = __webpack_require__(451);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng_socket_io___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng_socket_io__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LluviaIdeasPage = /** @class */ (function () {
    function LluviaIdeasPage(socket, actionSheetCtrl, alertCtrl, storage, msj, translateService, navCtrl, _MODAL, navParams, regService
        //, private qrScanner: QRScanner
    ) {
        var _this = this;
        this.socket = socket;
        this.actionSheetCtrl = actionSheetCtrl;
        this.alertCtrl = alertCtrl;
        this.storage = storage;
        this.msj = msj;
        this.translateService = translateService;
        this.navCtrl = navCtrl;
        this._MODAL = _MODAL;
        this.navParams = navParams;
        this.regService = regService;
        this.username = "";
        this.tiposus = [];
        this.loading = true;
        this.items = [];
        this.items2 = [];
        this.permisom = [];
        this.generated = '';
        this.hasFilter = false;
        this.idafiliado = 'na';
        this.gLimit = 50;
        this.PageSegmet = 'foods';
        this.gSearchQuery = '';
        this.OnExport = function () {
            this.regService.abrelinkinterno('datosfijos/excel-plantillas');
        };
        this.translateService.get('APPX').subscribe(function (value) {
            _this.idempresa = value;
        });
    }
    LluviaIdeasPage.prototype.clearSearchg = function () {
        this.gSearchQuery = '';
    };
    LluviaIdeasPage.prototype.showFilter = function () {
        var _this = this;
        var self = this;
        self.loading = true;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Filtrar por estado:',
            buttons: [
                {
                    text: 'Activos',
                    handler: function () {
                        _this.items = _this.items2;
                        _this.items = _this.items2.filter(function (v) {
                            if (v.estado) {
                                if (v.estado == 'Activo') {
                                    return true;
                                }
                                return false;
                            }
                        });
                        self.loading = false;
                        _this.hasFilter = true;
                    }
                },
                {
                    text: 'Inactivos',
                    handler: function () {
                        _this.items = _this.items2;
                        _this.items = _this.items2.filter(function (v) {
                            if (v.estado) {
                                self.loading = false;
                                if (v.estado == 'Inactivo') {
                                    return true;
                                }
                                return false;
                            }
                        });
                    }
                }
            ]
        });
        actionSheet.present();
    };
    LluviaIdeasPage.prototype.pideregistros = function () {
        var _this = this;
        this.translateService.get('APPX').subscribe(function (value) {
            _this.idempresa = value;
            var self = _this;
            self.loading = true;
            _this.regService.getReg(_this.idempresa + '/5cdec5279312042f589bf0b8/categoria', 'mailmarkets').then(function (data) {
                _this.items = data;
                _this.items2 = data;
                self.loading = false;
            }, function (err) {
                _this.msj.showError3('Error', err.error);
                // this.translateService.get('NO_OPERACION').subscribe((value) => { this.msj.showError3('Error',value);  })  
            });
        });
    };
    LluviaIdeasPage.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get('username').then(function (value) {
            _this.username = value;
        });
    };
    LluviaIdeasPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.storage.get('tiposus').then(function (value) {
            _this.tiposus = value.split(',');
            _this.idsuscriptor = _this.tiposus[3];
            _this.nombrett = _this.tiposus[4];
            _this.fotott = _this.tiposus[9] + "," + _this.tiposus[10];
            _this.pideregistros();
        });
    };
    LluviaIdeasPage.prototype.loadMore = function (ev) {
        this.gLimit += 50;
        setTimeout(function () { return ev.complete(); }, 1000);
    };
    LluviaIdeasPage.prototype.deleteRecord = function (item, no) {
        var _this = this;
        var alert = this.alertCtrl.create({ title: 'Esta seguro de realizar esta operación?',
            buttons: [
                { text: 'Si',
                    handler: function () {
                        var recordID = item._id;
                        _this.regService.deleteReg(recordID + '/' + _this.username + '/' + _this.idempresa + '/' + _this.idafiliado, 'plantillas').then(function (data) {
                            _this.items.splice(no, 1);
                            _this.items = _this.items.concat([]);
                            _this.items2 = _this.items;
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
    LluviaIdeasPage.prototype.updateRecord = function (item, no) {
        var _this = this;
        var addModal = this._MODAL.create('PlantillaCreatePage', { record: item, idempresa: this.idempresa }, { showBackdrop: true, enableBackdropDismiss: false });
        addModal.onDidDismiss(function (data) {
            if (data) {
                _this.pideregistros();
            }
        });
        addModal.present();
        //  this.navCtrl.push('EmpresaCreatePage', { record : item });
    };
    LluviaIdeasPage.prototype.addRecord = function () {
        var _this = this;
        var addModal = this._MODAL.create('PlantillaCreatePage', { record: null, idempresa: this.idempresa }, { showBackdrop: true, enableBackdropDismiss: false });
        addModal.onDidDismiss(function (data) {
            if (data) {
                _this.pideregistros();
            }
        });
        addModal.present();
        //this.navCtrl.push('EmpresaCreatePage');
    };
    LluviaIdeasPage.prototype.participaRecord = function (item) {
        this.navCtrl.push('PlantilladListPage', { record: item, record2: { idempresa: this.idempresa, idplantilla: item._id, nombrep: item.nombre } });
    };
    LluviaIdeasPage.prototype.conferenciaRecord = function (item) {
        this.navCtrl.push('PlantilladmListPage', { record: item, record2: { idempresa: this.idempresa, idplantilla: item._id, nombrep: item.nombre } });
    };
    LluviaIdeasPage.prototype.viewRecord = function (item) {
        // let modal = this._MODAL.create(ViewGalleryPage, { record : item });
        // modal.present();
    };
    LluviaIdeasPage.prototype.tomaqrpage = function (item) {
        var addModal = this._MODAL.create('CodebarpagPage', { record: item }, { showBackdrop: true, enableBackdropDismiss: false });
        addModal.present();
        //  this.navCtrl.push('EmpresaCreatePage', { record : item });
    };
    LluviaIdeasPage.prototype.verinfo = function (item, op) {
        this.navCtrl.push('CursosviewHtmlPage', { html: item.texto, record: item, titulo: item.nombre });
        ;
    };
    LluviaIdeasPage.prototype.iniciarcurso = function (item) {
        var _this = this;
        this.regService.getReg(item._id + "@gmail.com/emailsolo/" + this.idempresa, 'personals').then(function (data) {
            _this.socket.connect();
            _this.socket.emit('set-nickname', data[0]._id);
            _this.navCtrl.push('ChatPage', { record: { toUserId: _this.idsuscriptor,
                    toUserName: _this.nombrett, avatar: _this.fotott }, grupal: 'si',
                record2: { toUserId: data[0]._id,
                    toUserName: 'Aporta al tema', avatar: data[0].foto } });
        });
    };
    LluviaIdeasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-lluvia-ideas',template:/*ion-inline-start:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\COMUNICACION\lluvia-ideas\lluvia-ideas.html"*/'<ion-header>\n  <ion-navbar [color]="\'navbarColor\'">\n      <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n    <ion-title>\n      Hablemos de la USAC\n    </ion-title>\n    <ion-buttons end>\n        <button (click)="showFilter()" icon-only ion-button padding-right>\n            <ion-icon name="funnel"  [style.color]="hasFilter ? \'orange\' : \'inherit\'"></ion-icon>\n          </button>\n\n          <button  title="Refresh" (click)="pideregistros()" icon-only ion-button padding-right>\n            <ion-icon name="refresh"></ion-icon>\n          </button>\n\n      </ion-buttons>\n  </ion-navbar>\n  <ion-toolbar no-border-top>\n      <ion-searchbar debounce="2000" (ionCancel)="clearSearchg($event)" [(ngModel)]="gSearchQuery" placeholder="{{ \'NO2_REGISTROS\' | translate }}{{items.length}}]">\n      </ion-searchbar>\n  </ion-toolbar>\n</ion-header>            \n      \n<ion-content  class="page-eventos-list" padding>\n    <ion-list text-center>\n           \n       <div class="wrapper" text-center>\n           <ion-item   *ngFor="let item of items | search: gSearchQuery | LimitPipe: gLimit ;let i = index;" text-wrap text-center>\n             <div class="wrapper" >  \n                     \n  \n                <div class="box yellow" text-center>  \n\n                    <ion-row class="header">\n                        <ion-col col-4>\n                            <img style="width:50px;height: 50px;-webkit-border-radius: 50%;                  border-radius: 50%;display: block; margin: center;  margin-left: auto; margin-right: auto;" src="../../../assets/img/usacforo.jpg" />\n                        </ion-col>\n                        <ion-col col-8 class="button-container">\n                            <h2 orange>{{item.titulo}}</h2>\n                        </ion-col>\n                    </ion-row>\n                \n                    <ion-row>\n                        <ion-col col-12>\n                            <img src="{{item.f1}}" style="width:100px;height: 100px;-webkit-border-radius: 50%;                  border-radius: 50%;display: block; margin: center;  margin-left: auto; margin-right: auto;">\n                            <h2 orange>{{(item.nombre).substr(0,150)}}...</h2>\n                            <p>Ubicación: {{item.ubicacion}}</p>\n                        \n                                  </ion-col>\n                    </ion-row>\n                      \n                    <ion-row>\n                        <ion-col col-4>\n                            <ion-icon name="contact"></ion-icon> Author\n                        </ion-col>\n                        <ion-col col-8>\n                            <p style="display: inline-block; text-align: left;" item-content>{{item.autor}}</p>\n                  \n                        </ion-col>\n                    </ion-row>\n                  \n                    <ion-row>\n                        <ion-col col-4>\n                            <ion-icon name="person"></ion-icon> Presenta\n                        </ion-col>\n                        <ion-col col-8>\n                            <p style="display: inline-block; text-align: left;" item-content>{{item.presenta}}</p>\n               \n                        </ion-col>\n\n                    </ion-row>\n                             \n                              <ion-fab top center #fab2 middle>\n                                  <button ion-fab color="secondary"><ion-icon name="arrow-dropdown-circle"></ion-icon></button>\n                                  <ion-fab-list side="middle">\n                                      <button ion-fab  rel="tooltip" title="Información general" (click)="verinfo(item,\'Descripción general\')"  color="light"><ion-icon name="list-box"></ion-icon></button>\n                                 \n                                   \n                                  </ion-fab-list>\n                                </ion-fab>\n\n                       \n                         \n                          <!-- this fab is placed at the center of the content viewport -->\n                          <ion-fab bottom right #fab>\n                            <button  rel="tooltip" title="Foro" color="tertiary" (click)="iniciarcurso(item)" ion-fab><ion-icon name="chatboxes"></ion-icon></button>\n                          </ion-fab>\n               \n                               \n                 </div>\n                  \n\n\n       \n               \n \n            </div>\n \n               \n     </ion-item>\n   </div>   \n \n    </ion-list>\n    <ion-infinite-scroll (ionInfinite)="loadMore($event)">\n       <ion-infinite-scroll-content></ion-infinite-scroll-content>\n     </ion-infinite-scroll>\n \n \n \n     \n </ion-content>\n'/*ion-inline-end:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\COMUNICACION\lluvia-ideas\lluvia-ideas.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_ng_socket_io__["Socket"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_2__providers__["d" /* NotificationProvider */],
            __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers__["a" /* Auth */]
            //, private qrScanner: QRScanner
        ])
    ], LluviaIdeasPage);
    return LluviaIdeasPage;
}());

//# sourceMappingURL=lluvia-ideas.js.map

/***/ }),

/***/ 999:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LluviaIdeasPageModule", function() { return LluviaIdeasPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lluvia_ideas__ = __webpack_require__(1441);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pipes_pipes_module__ = __webpack_require__(445);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var LluviaIdeasPageModule = /** @class */ (function () {
    function LluviaIdeasPageModule() {
    }
    LluviaIdeasPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__lluvia_ideas__["a" /* LluviaIdeasPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__lluvia_ideas__["a" /* LluviaIdeasPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild(),
                __WEBPACK_IMPORTED_MODULE_4__pipes_pipes_module__["a" /* PipesModule */]
            ],
        })
    ], LluviaIdeasPageModule);
    return LluviaIdeasPageModule;
}());

//# sourceMappingURL=lluvia-ideas.module.js.map

/***/ })

});
//# sourceMappingURL=166.js.map