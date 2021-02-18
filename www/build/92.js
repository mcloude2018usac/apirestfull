webpackJsonp([92],{

/***/ 1093:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeviewPageModule", function() { return TreeviewPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__treeview_treeview__ = __webpack_require__(1549);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TreeviewPageModule = /** @class */ (function () {
    function TreeviewPageModule() {
    }
    TreeviewPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__treeview_treeview__["a" /* TreeviewPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__treeview_treeview__["a" /* TreeviewPage */]),
            ],
        })
    ], TreeviewPageModule);
    return TreeviewPageModule;
}());

//# sourceMappingURL=treeview.module.js.map

/***/ }),

/***/ 1549:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TreeviewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(453);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TreeviewPage = /** @class */ (function () {
    function TreeviewPage(http, msj, navCtrl, regService) {
        this.http = http;
        this.msj = msj;
        this.navCtrl = navCtrl;
        this.regService = regService;
        this.information = [];
        this.items = [];
        this.pideregistros();
    }
    TreeviewPage.prototype.pideregistros = function () {
        var _this = this;
        var localData = this.http.get('assets/data/information.json').map(function (res) { return res.json().items; });
        localData.subscribe(function (data) {
            _this.information = data;
        });
        /*
         this.regService.getRegtree().then((data) => {
           this.information=data;
          
     }, (err) => {
       this.msj.showError3('Error',err.error);
      // this.translateService.get('NO_OPERACION').subscribe((value) => { this.msj.showError3('Error',value);  })
     });
     */
        /*
            let localData = http2.get('./providers/data/information.json').map(res => res.json().items);
            localData.subscribe(data => {
              this.information = data;
            })
            */
    };
    TreeviewPage.prototype.toggleSection = function (i) {
        this.information[i].open = !this.information[i].open;
    };
    TreeviewPage.prototype.toggleItem = function (i, j) {
        this.information[i].children[j].open = !this.information[i].children[j].open;
    };
    TreeviewPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-treeview',template:/*ion-inline-start:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\PRUEBAS\treeview\treeview.html"*/'<ion-header>\n    <ion-navbar [color]="\'navbarUser\'">\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n          </button>\n      <ion-title>\n      tree\n      </ion-title>\n      <ion-buttons end>\n         \n          <button (click)="pideregistros()" icon-only ion-button padding-right>\n              <ion-icon name="refresh"></ion-icon>\n            </button>\n        </ion-buttons>\n      \n    </ion-navbar>\n  \n  \n  </ion-header>\n \n<ion-content>\n    <ion-list class="accordion-list">\n      <!-- First Level -->\n      <ion-list-header *ngFor="let item of information; let i = index" no-lines no-padding>\n        <!-- Toggle Button -->\n        <button ion-item (click)="toggleSection(i)" *ngIf="item.children" detail-none [ngClass]="{\'section-active\': item.open, \'section\': !item.open}">\n          <ion-icon item-left name="arrow-forward" *ngIf="!item.open"></ion-icon>\n          <ion-icon item-left name="arrow-down" *ngIf="item.open"></ion-icon>\n            {{ item.name }} 55555555\n            <button ion-button outline item-end (click)="buyItem(child)" icon-only>\n                <ion-icon name="add-circle"></ion-icon>\n            </button>\n            <button ion-button outline item-end (click)="buyItem(child)" icon-only>\n                <ion-icon name="close"></ion-icon>\n            </button>\n            <button ion-button outline item-end (click)="buyItem(child)" icon-only>\n                <ion-icon name="remove-circle"></ion-icon>\n            </button>\n        </button>\n   \n        <ion-item *ngIf="!item.children " ion-item detail-none class="child-item" text-wrap>\n                <ion-icon item-left name="{{item.icon}}" ></ion-icon>\n            <h2>{{ item.name }} {{item.icon}}</h2>\n            <p text-lowercase>{{ item.information }}1111</p>\n            <button ion-button outline item-end (click)="buyItem(item)" icon-only>\n                <ion-icon name="add-circle"></ion-icon>\n            </button>\n            <button ion-button outline item-end (click)="buyItem(item)" icon-only>\n                <ion-icon name="close"></ion-icon>\n            </button>\n            <button ion-button outline item-end (click)="buyItem(item)" icon-only>\n                <ion-icon name="remove-circle"></ion-icon>\n            </button>\n         </ion-item>\n\n        <ion-list *ngIf="item.children && item.open" no-lines>\n          <!-- Second Level -->\n          <ion-list-header *ngFor="let child of item.children; let j = index" no-padding>\n            <!-- Toggle Button -->\n            <button ion-item (click)="toggleItem(i, j)" *ngIf="child.children" class="child" detail-none>\n              <ion-icon item-left name="add" *ngIf="!child.open"></ion-icon>\n              <ion-icon item-left name="close" *ngIf="child.open"></ion-icon>\n              {{ child.name }}\n              <button ion-button outline item-end (click)="buyItem(child)" icon-only>\n                  <ion-icon name="add-circle"></ion-icon>\n              </button>\n              <button ion-button outline item-end (click)="buyItem(child)" icon-only>\n                  <ion-icon name="close"></ion-icon>\n              </button>\n              <button ion-button outline item-end (click)="buyItem(child)" icon-only>\n                  <ion-icon name="remove-circle"></ion-icon>\n              </button>\n            </button>   \n   \n            <!-- Direct Add Button as Fallback -->\n            <ion-item *ngIf="!child.children" ion-item detail-none class="child-item" text-wrap>\n                    <ion-icon item-left name="{{item.icon}}" ></ion-icon>\n              <h2>{{ child.name }}</h2>\n              <p text-lowercase>{{ child.information }}</p>\n              <button ion-button outline item-end (click)="buyItem(child)" icon-only>\n                  <ion-icon name="add-circle"></ion-icon>\n              </button>\n              <button ion-button outline item-end (click)="buyItem(child)" icon-only>\n                  <ion-icon name="close"></ion-icon>\n              </button>\n              <button ion-button outline item-end (click)="buyItem(child)" icon-only>\n                  <ion-icon name="remove-circle"></ion-icon>\n              </button>\n            </ion-item>\n   \n            <ion-list *ngIf="child.children && child.open">\n              <!-- Third Level -->\n              <ion-item *ngFor="let item of child.children; let k = index" detail-none class="child-item" text-wrap>\n                    <ion-icon item-left name="{{item.icon}}" ></ion-icon>\n                <h2>{{ item.name }} sssss</h2>\n                <p text-lowercase>{{ item.information }}</p>\n                <!-- Direct Add Button -->\n                <button ion-button outline item-end (click)="buyItem(child)" icon-only>\n                    <ion-icon name="add-circle"></ion-icon>\n                </button>\n                <button ion-button outline item-end (click)="buyItem(child)" icon-only>\n                    <ion-icon name="close"></ion-icon>\n                </button>\n                <button ion-button outline item-end (click)="buyItem(child)" icon-only>\n                    <ion-icon name="remove-circle"></ion-icon>\n                </button>\n              </ion-item>\n            </ion-list>\n   \n          </ion-list-header>\n        </ion-list>\n        \n      </ion-list-header>\n\n      \n    </ion-list>\n  </ion-content>\n'/*ion-inline-end:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\PRUEBAS\treeview\treeview.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_2__providers__["d" /* NotificationProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers__["a" /* Auth */]])
    ], TreeviewPage);
    return TreeviewPage;
}());

//# sourceMappingURL=treeview.js.map

/***/ })

});
//# sourceMappingURL=92.js.map