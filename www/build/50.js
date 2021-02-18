webpackJsonp([50],{

/***/ 1139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsacRrPageModule", function() { return UsacRrPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__usac_rr__ = __webpack_require__(1595);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var UsacRrPageModule = /** @class */ (function () {
    function UsacRrPageModule() {
    }
    UsacRrPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__usac_rr__["a" /* UsacRrPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__usac_rr__["a" /* UsacRrPage */]),
            ],
        })
    ], UsacRrPageModule);
    return UsacRrPageModule;
}());

//# sourceMappingURL=usac-rr.module.js.map

/***/ }),

/***/ 1595:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsacRrPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(453);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_geolocation__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var UsacRrPage = /** @class */ (function () {
    function UsacRrPage(geolocation, authService, storage, http, msj, navCtrl, regService) {
        var _this = this;
        this.geolocation = geolocation;
        this.authService = authService;
        this.storage = storage;
        this.http = http;
        this.msj = msj;
        this.navCtrl = navCtrl;
        this.regService = regService;
        this.information = [];
        this.items = [];
        this.tiposus = [];
        this.xpos = 0;
        this.ypos = 0;
        this.geolocation.getCurrentPosition()
            .then(function (resp) {
            _this.xpos = resp.coords.latitude;
            _this.ypos = resp.coords.longitude;
        });
        this.pideregistros();
        // 
    }
    UsacRrPage.prototype.ionViewDidLoad = function () {
    };
    UsacRrPage.prototype.pideregistros = function () {
        var _this = this;
        this.storage.get('tiposus').then(function (value) {
            _this.tiposus = value.split(',');
            _this.cui = _this.tiposus[2];
            //this.tipod=this.tiposus[5]
            //var cc=this.tiposus[5];
            // if(cc.length<10)
            if (_this.tiposus[7] == '5d6c9aa1dba66a1c88514638') {
                var localData = _this.http.get('assets/data/calusacRR2.json').map(function (res) { return res.json().items; });
                localData.subscribe(function (data) {
                    _this.information = data;
                });
            }
            else {
                if (_this.tiposus[6] != 'Administrador') {
                    //carnet
                    var localData = _this.http.get('assets/data/usacRR2.json').map(function (res) { return res.json().items; });
                    localData.subscribe(function (data) {
                        _this.information = data;
                    });
                }
                else {
                    var localData = _this.http.get('assets/data/usacRR.json').map(function (res) { return res.json().items; });
                    localData.subscribe(function (data) {
                        _this.information = data;
                    });
                }
            }
        });
    };
    UsacRrPage.prototype.toggleSection = function (i) {
        this.information[i].open = !this.information[i].open;
    };
    UsacRrPage.prototype.toggleItem = function (i, j) {
        this.information[i].children[j].open = !this.information[i].children[j].open;
    };
    UsacRrPage.prototype.damenu = function (i, item) {
        var aa = '';
        aa = item.modulo;
        var vv = aa.split('°');
        switch (vv[0]) {
            case 'link':
                window.open(vv[1], '_blank', '');
                break;
            case 'MensajeviewPage':
                this.navCtrl.push(vv[0], { html: item.html, information: item.information, link: vv[1] });
                break;
            case 'otro':
                this.navCtrl.push(vv[1], item);
                break;
            default:
        }
        //this.navProxy.pushDetail(, item);
    };
    UsacRrPage.prototype.addanomalia = function () {
        this.navCtrl.push('ParticipaForms200Page', {});
    };
    UsacRrPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-usac-rr',template:/*ion-inline-start:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\USAC\usac-rr\usac-rr.html"*/'<ion-header no-border class="opaque">\n  <ion-navbar  no-border-bottom>\n      <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n    <ion-title>   \n    Servicios en línea\n    </ion-title>\n      \n  </ion-navbar>   \n\n   \n</ion-header>\n\n<ion-content fullscreen style=" background:  #fff;">\n  <ion-list class="accordion-list">\n    <!-- First Level -->\n    <ion-list *ngFor="let item of information; let i = index" no-lines no-padding text-wrap>\n      <!-- Toggle Button -->\n      <button ion-item (click)="toggleSection(i)" *ngIf="item.children" detail-none\n       [ngClass]="{\'section-active\': item.open, \'section\': !item.open}">\n        <ion-icon item-left name="arrow-forward" *ngIf="!item.open"></ion-icon>\n        <ion-icon item-left name="arrow-down" *ngIf="item.open"></ion-icon>\n          {{ item.name }} \n      </button>\n \n      <ion-item *ngIf="!item.children " ion-item detail-none class="child-item" text-wrap>\n              <ion-icon item-left name="{{item.icon}}" ></ion-icon>\n          <h2>{{ item.name }} {{item.icon}}</h2>\n          <p text-lowercase>{{ item.information }}</p>\n       </ion-item>\n\n      <ion-list *ngIf="item.children && item.open" no-lines>\n        <!-- Second Level -->\n        <ion-list *ngFor="let child of item.children; let j = index" no-padding text-wrap>\n          <!-- Toggle Button -->\n          <button ion-item (click)="toggleItem(i, j)" *ngIf="child.children" class="child" detail-none>\n            <ion-icon item-left name="add" *ngIf="!child.open"></ion-icon>\n            <ion-icon item-left name="close" *ngIf="child.open"></ion-icon>\n            {{ child.name }}\n          </button>   \n \n          <!-- Direct Add Button as Fallback -->\n          <ion-item *ngIf="!child.children" ion-item detail-none class="child-item" text-wrap>\n            <button ion-item (click)="damenu(i,child)" >\n            <ion-icon item-left name="{{child.icon}}" ></ion-icon>\n            <h2>{{ child.name }}</h2>\n           \n            <p text-lowercase>{{ child.information }}</p>\n        </button>\n          </ion-item>\n \n          <ion-list *ngIf="child.children && child.open">\n            <!-- Third Level -->\n            <ion-item *ngFor="let item of child.children; let k = index" detail-none class="child-item" text-wrap>\n           \n                <button ion-item (click)="damenu(i,item)" >\n\n                    <ion-icon item-left name="{{item.icon}}" ></ion-icon>\n                    <h2>{{ item.name }}   </h2>\n                    <p text-lowercase>{{ item.information }} </p>                  </button>\n                   \n            </ion-item>   \n          </ion-list>\n \n        </ion-list>\n      </ion-list>    \n      \n    </ion-list>\n   \n    \n  </ion-list>   \n\n  <ion-fab top right edge>\n    <br>\n    <br> \n    <button ion-fab color="danger" (click)="addanomalia()"> <ion-icon  name="custom-sos"></ion-icon></button>\n\n \n</ion-fab>\n\n \n\n</ion-content>\n'/*ion-inline-end:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\USAC\usac-rr\usac-rr.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_2__providers__["a" /* Auth */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_2__providers__["d" /* NotificationProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers__["a" /* Auth */]])
    ], UsacRrPage);
    return UsacRrPage;
}());

//# sourceMappingURL=usac-rr.js.map

/***/ })

});
//# sourceMappingURL=50.js.map