webpackJsonp([282],{

/***/ 1312:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReglamentoViewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers__ = __webpack_require__(103);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ReglamentoViewPage = /** @class */ (function () {
    function ReglamentoViewPage(regService, viewCtrl, navParams2, navCtrl, navParams) {
        this.regService = regService;
        this.viewCtrl = viewCtrl;
        this.navParams2 = navParams2;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.ind1m = [];
    }
    ReglamentoViewPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad Detalle1Page');
        this.opcion = this.navParams.data.op;
        this.tpalabra = this.navParams.data.tpalabra;
        if (this.navParams.data.op == 1) {
            this.regService.getReg(this.navParams.data.idreglamentod + '/' + this.navParams.data.idreglamento + '/dbusqueda/', 'reglamentods').then(function (data) {
                _this.ind1m = data;
            }, function (err) {
                //this.msj.showError3('Error',err.error);   
                _this.ind1m = [];
            });
        }
        else {
        }
    };
    ReglamentoViewPage.prototype.openlink = function (op) {
        window.open(op, '_system', 'location=no');
    };
    ReglamentoViewPage.prototype.cancel = function () {
        this.viewCtrl.dismiss();
    };
    ReglamentoViewPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-reglamento-view',template:/*ion-inline-start:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\ABOGADOS\reglamento-view\reglamento-view.html"*/'<ion-header >\n  <ion-navbar  [color]="\'bottonx\'">\n    <ion-title>Información de reglamento</ion-title>\n    <ion-buttons end>\n        <button (click)="cancel()"  ion-button padding-right>\n           Cerrar\n          </button>\n      \n          </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <table  *ngIf="opcion==1" class="pure-table">\n      <thead>\n        <tr>   \n       \n        \n          <th>Reglamento</th>\n        \n        \n        </tr>     \n      </thead>   \n      <tbody>  \n        <div *ngFor="let item of ind1m; let i = index;">\n          <img id="profile-image" [src]="item.f1"   class="circle-pic"  height="150 px" width="150 px" center>\n\n          \n        <tr> <td >  <strong>Pais</strong> </td><td >{{ item.pais }}</td></tr>\n\n        <tr> <td >  <strong>Tipo</strong> </td><td >{{ item.tipo }}</td></tr>\n        <tr> <td >  <strong>Sector</strong> </td><td >{{ item.sector }}</td></tr>\n        <tr> <td >  <strong>Area</strong> </td><td >{{ item.area }}</td></tr>\n        <tr> <td >  <strong>Reglamento</strong> </td><td >{{ item.titulo2 }}</td></tr>\n\n        <tr> <td >  <strong>Descripción corta</strong> </td><td ><div [innerHTML]="item.nombre2"></div> </td></tr>\n        <tr> <td >  <strong>Contenido</strong> </td><td ><div [innerHTML]="item.texto2"></div> </td></tr>\n\n\n\n         \n         \n          \n         \n         \n          \n        </div>\n       \n      </tbody>\n    </table>  \n\n    <table  *ngIf="opcion==1" class="pure-table">\n      <thead>\n        <tr>   \n       \n        \n          <th>Detalle reglamento</th>\n        \n        \n        </tr>     \n      </thead>   \n      <tbody>  \n        <div *ngFor="let item of ind1m; let i = index;">\n          \n      \n        <tr> <td >  <strong>libro</strong> </td><td >No {{ item.nolibro }}  - {{item.libro}}</td></tr>\n        <tr> <td >  <strong>Titulo</strong> </td><td >No {{ item.notitulo }}  - {{item.titulo}}</td></tr>\n        <tr> <td >  <strong>Capitulo</strong> </td><td >No {{ item.nocapitulo }}  - {{item.capitulo}}</td></tr>\n        <tr> <td >  <strong>parrafo</strong> </td><td >No {{ item.noparrafo }}  - {{item.parrafo}}</td></tr>\n\n        <tr> <td >  <strong>Articulo</strong> </td><td >    <div [innerHTML]="item.articulo | highlightify:tpalabra">\n        </div>    </td></tr>\n      \n\n\n         \n         \n          \n         \n         \n          \n        </div>\n       \n      </tbody>\n    </table>  \n\n\n  \n\n       \n</ion-content>\n'/*ion-inline-end:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\ABOGADOS\reglamento-view\reglamento-view.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers__["a" /* Auth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["F" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavParams */]])
    ], ReglamentoViewPage);
    return ReglamentoViewPage;
}());

//# sourceMappingURL=reglamento-view.js.map

/***/ }),

/***/ 872:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReglamentoViewPageModule", function() { return ReglamentoViewPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reglamento_view__ = __webpack_require__(1312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pipes_pipes_module__ = __webpack_require__(445);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ReglamentoViewPageModule = /** @class */ (function () {
    function ReglamentoViewPageModule() {
    }
    ReglamentoViewPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__reglamento_view__["a" /* ReglamentoViewPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__reglamento_view__["a" /* ReglamentoViewPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild(),
                __WEBPACK_IMPORTED_MODULE_4__pipes_pipes_module__["a" /* PipesModule */]
            ],
        })
    ], ReglamentoViewPageModule);
    return ReglamentoViewPageModule;
}());

//# sourceMappingURL=reglamento-view.module.js.map

/***/ })

});
//# sourceMappingURL=282.js.map