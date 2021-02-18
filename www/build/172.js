webpackJsonp([172],{

/***/ 1426:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatHomePage; });
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






var ChatHomePage = /** @class */ (function () {
    function ChatHomePage(socket, storage, alertCtrl, msj, translateService, navCtrl, _MODAL, navParams, regService) {
        var _this = this;
        this.socket = socket;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.msj = msj;
        this.translateService = translateService;
        this.navCtrl = navCtrl;
        this._MODAL = _MODAL;
        this.navParams = navParams;
        this.regService = regService;
        this.loading = true;
        this.items = [];
        this.items2 = [];
        this.pofilel = './assets/img/profilelocal.png';
        this.sidist = false;
        this.tiposus = [];
        this.username = "";
        this.idafiliado = 'na';
        this.gLimit = 50;
        this.PageSegmet = 'foods';
        this.gSearchQuery = '';
        this.excludeTracks = [];
        this.translateService.get('APPX').subscribe(function (value) {
            _this.idempresa = value;
        });
        this.toUser = {
            toUserId: '210000198410281948',
            toUserName: 'Hancock'
        };
    }
    ChatHomePage.prototype.clearSearchg = function () {
        this.gSearchQuery = '';
    };
    ChatHomePage.prototype.pideregistros = function () {
        var _this = this;
        var self = this;
        self.loading = true;
        this.storage.get('tiposus').then(function (value) {
            _this.tiposus = value.split(',');
            _this.idsuscriptor = _this.tiposus[3];
            _this.nombrett = _this.tiposus[4];
            _this.fotott = _this.tiposus[9] + "," + _this.tiposus[10];
            if (_this.tiposus[0] == 'Distribuidor') {
                _this.sidist = true;
            }
            else {
                _this.sidist = false;
            }
            _this.regService.getReg('chatunouno/' + _this.idsuscriptor, 'usermsgs').then(function (data) {
                _this.items = data;
                self.loading = false;
            }, function (err) {
                _this.msj.showError3('Error', err.error);
            });
        });
    };
    ChatHomePage.prototype.ionViewDidLoad = function () {
        //this.idsuscriptor=this.navParams.data.record.nodpi;
        //this.nidsuscriptor=this.navParams.data.record.nombre +' '+ this.navParams.data.record.apellido;
        var _this = this;
        this.pideregistros();
        this.translateService.get(["CANCEL",
            "INGRESAR",
            "BUSCARPOR",
            "BUSCAR"
        ]).subscribe(function (values) {
            _this.v1 = values.CANCEL;
            _this.v2 = values.INGRESAR;
            _this.v3 = values.BUSCARPOR;
            _this.v4 = values.BUSCAR;
        });
    };
    ChatHomePage.prototype.ngOnInit = function () {
        var _this = this;
        var self = this;
        self.loading = true;
        this.storage.get('username').then(function (value) {
            _this.username = value;
        });
    };
    ChatHomePage.prototype.loadMore = function (ev) {
        this.gLimit += 50;
        setTimeout(function () { return ev.complete(); }, 1000);
    };
    ChatHomePage.prototype.chatt = function (item, no) {
        this.socket.connect();
        this.socket.emit('set-nickname', item._id);
        this.navCtrl.push('ChatPage', { record: { toUserId: this.idsuscriptor,
                toUserName: this.nombrett, avatar: this.fotott }, grupal: 'no',
            record2: { toUserId: item._id,
                toUserName: item.nombre, avatar: item.foto } });
    };
    ChatHomePage.prototype.deleteRecord = function (item, no) {
        var _this = this;
        var alert = this.alertCtrl.create({ title: 'Esta seguro de realizar esta operación?',
            buttons: [
                { text: 'Si',
                    handler: function () {
                        var recordID = _this.username;
                        _this.regService.deleteReg(item._id + '/' + recordID + '/' + _this.idempresa + '/' + _this.idafiliado, 'userchats').then(function (data) {
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
    ChatHomePage.prototype.updateRecord = function (item, no) {
        var _this = this;
        var addModal = this._MODAL.create('ChatHomecreatePage', { record: item }, { showBackdrop: true, enableBackdropDismiss: false });
        addModal.onDidDismiss(function (data) {
            if (data) {
                _this.items.splice(no, 1);
                _this.items = _this.items.concat([data]);
            }
        });
        addModal.present();
        //  this.navCtrl.push('EmpresaCreatePage', { record : item });
    };
    ChatHomePage.prototype.addRecord = function () {
        var _this = this;
        var addModal = this._MODAL.create('ChatHomecreatePage', { record: null }, { showBackdrop: true, enableBackdropDismiss: false });
        addModal.onDidDismiss(function (data) {
            if (data) {
                _this.items = _this.items.concat([data]);
                // this.items.concat([{idcomprasaldo:data.idcomprasaldo,idsuscriptor:data.idsuscriptor,fecha:data.fecha,monto:data.monto,nombre:data.noplaca}]);
            }
        });
        addModal.present();
        //this.navCtrl.push('EmpresaCreatePage');
    };
    ChatHomePage.prototype.viewRecord = function (item) {
        // let modal = this._MODAL.create(ViewGalleryPage, { record : item });
        // modal.present();
    };
    ChatHomePage.prototype.presentFilter = function () {
    };
    ChatHomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-chat-home',template:/*ion-inline-start:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\CHAT\chat-home\chat-home.html"*/'<ion-header no-border class="opaque">\n    <ion-navbar  no-border-bottom>\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n          </button>\n          <ion-title>\n        {{ \'CHAR_LIST\' | translate }}  \n      </ion-title>\n      <ion-buttons end>  \n        \n          <button (click)="pideregistros()" icon-only ion-button padding-right>\n              <ion-icon name="refresh"></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-navbar>  \n    <ion-toolbar no-border-top>\n        <ion-searchbar debounce="2000" (ionCancel)="clearSearchg($event)" [(ngModel)]="gSearchQuery" placeholder="{{ \'NO2_REGISTROS\' | translate }}{{items.length}}]">\n          </ion-searchbar>\n      </ion-toolbar>\n  \n  </ion-header>\n    \n  <ion-content   fullscreem>\n     \n           \n     <ion-list >\n        <ion-item-sliding    *ngFor="let item of items | search: gSearchQuery | LimitPipe: gLimit ;let i = index;" text-wrap>\n               \n\n                <button ion-item (click)="chatt(item,i)">\n                        <ion-avatar item-left>\n                                <img *ngIf="item.foto == undefined"  src="{{pofilel}}">  \n                                <img *ngIf="item.foto !== undefined" src="{{item.foto}}">  \n                        </ion-avatar>\n                  \n                        <h2>{{item.nombre}} </h2>\n                      <!--  <ion-badge  *ngIf="item.pendientes >0"  item-end>{{item.pendientes}}</ion-badge>-->\n                      </button>\n\n  \n\n  \n\n\n\n                      \n           \n  \n            \n  \n    \n      </ion-item-sliding>\n     </ion-list>\n     <ion-infinite-scroll (ionInfinite)="loadMore($event)">\n        <ion-infinite-scroll-content></ion-infinite-scroll-content>\n      </ion-infinite-scroll>\n  \n      <ion-fab bottom right #fab>\n          <button ion-fab [hidden]="!sidist" (click)="addRecord()"><ion-icon name="add"></ion-icon></button>\n          \n      </ion-fab>\n  \n  </ion-content>'/*ion-inline-end:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\CHAT\chat-home\chat-home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_ng_socket_io__["Socket"], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__providers__["d" /* NotificationProvider */], __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers__["a" /* Auth */]])
    ], ChatHomePage);
    return ChatHomePage;
}());

//# sourceMappingURL=chat-home.js.map

/***/ }),

/***/ 986:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatHomePageModule", function() { return ChatHomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chat_home__ = __webpack_require__(1426);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__ = __webpack_require__(445);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ChatHomePageModule = /** @class */ (function () {
    function ChatHomePageModule() {
    }
    ChatHomePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__chat_home__["a" /* ChatHomePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__chat_home__["a" /* ChatHomePage */]),
                __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["b" /* TranslateModule */].forChild(),
                __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__["a" /* PipesModule */]
            ],
        })
    ], ChatHomePageModule);
    return ChatHomePageModule;
}());

//# sourceMappingURL=chat-home.module.js.map

/***/ })

});
//# sourceMappingURL=172.js.map