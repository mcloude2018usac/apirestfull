webpackJsonp([48],{

/***/ 1142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorpickerPageModule", function() { return ColorpickerPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__colorpicker__ = __webpack_require__(1598);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ColorpickerPageModule = /** @class */ (function () {
    function ColorpickerPageModule() {
    }
    ColorpickerPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__colorpicker__["a" /* ColorpickerPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__colorpicker__["a" /* ColorpickerPage */]),
            ],
        })
    ], ColorpickerPageModule);
    return ColorpickerPageModule;
}());

//# sourceMappingURL=colorpicker.module.js.map

/***/ }),

/***/ 1598:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ColorpickerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ColorpickerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ColorpickerPage = /** @class */ (function () {
    function ColorpickerPage(viewCtrl, navCtrl, navParams) {
        this.viewCtrl = viewCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ColorpickerPage.prototype.ionViewDidLoad = function () {
        this.idopcion = this.navParams.data.record2.opcion;
        if (this.idopcion != 'color') {
            this.title = 'Seleccione el color de fondo';
        }
        else {
            this.title = 'Seleccione el color la letra';
        }
    };
    ColorpickerPage.prototype.setColor = function (op) {
        if (this.idopcion == 'color') {
            this.viewCtrl.dismiss("cco" + op);
        }
        else {
            this.viewCtrl.dismiss("cbg" + op);
        }
    };
    ColorpickerPage.prototype.cancel = function () {
        this.viewCtrl.dismiss('');
    };
    ColorpickerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-colorpicker',template:/*ion-inline-start:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\WEBAPP\colorpicker\colorpicker.html"*/'<ion-header>\n    <ion-navbar>\n      <ion-title>{{title}}</ion-title>\n      \n      <ion-buttons end>\n          <button (click)="cancel()" icon-only ion-button padding-right>\n              <ion-icon name="md-close"></ion-icon>\n            </button>\n         \n      </ion-buttons>\n    </ion-navbar>\n  </ion-header>\n<ion-content padding>\n\n    <div>\n        <ion-list>\n        <ion-item>\n      \n        </ion-item>\n        </ion-list>\n        \n        <ion-grid>\n        <ion-row>\n          <ion-col style="background:#330000" (tap)="setColor(\'1\')"></ion-col>\n          <ion-col style="background:#331900" (tap)="setColor(\'2\')">&nbsp;</ion-col>\n          <ion-col style="background:#333300" (tap)="setColor(\'3\')">&nbsp;</ion-col>\n          <ion-col style="background:#193300" (tap)="setColor(\'4\')">&nbsp;</ion-col>\n          <ion-col style="background:#003300" (tap)="setColor(\'5\')">&nbsp;</ion-col>\n          <ion-col style="background:#003319" (tap)="setColor(\'6\')">&nbsp;</ion-col>\n          <ion-col style="background:#003333" (tap)="setColor(\'7\')">&nbsp;</ion-col>\n          <ion-col style="background:#001933" (tap)="setColor(\'8\')">&nbsp;</ion-col>\n          <ion-col style="background:#000033" (tap)="setColor(\'9\')">&nbsp;</ion-col>\n          <ion-col style="background:#190033" (tap)="setColor(\'10\')">&nbsp;</ion-col>\n          <ion-col style="background:#330033" (tap)="setColor(\'11\')">&nbsp;</ion-col>\n          <ion-col style="background:#330019" (tap)="setColor(\'12\')">&nbsp;</ion-col>\n          <ion-col style="background:#000000" (tap)="setColor(\'13\')">&nbsp;</ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col style="background:#660000" (tap)="setColor(\'14\')">&nbsp;</ion-col>\n          <ion-col style="background:#663300" (tap)="setColor(\'15\')">&nbsp;</ion-col>\n          <ion-col style="background:#666600" (tap)="setColor(\'16\')">&nbsp;</ion-col>\n          <ion-col style="background:#336600" (tap)="setColor(\'17\')">&nbsp;</ion-col>\n          <ion-col style="background:#006600" (tap)="setColor(\'18\')">&nbsp;</ion-col>\n          <ion-col style="background:#006633" (tap)="setColor(\'19\')">&nbsp;</ion-col>\n          <ion-col style="background:#006666" (tap)="setColor(\'20\')">&nbsp;</ion-col>\n          <ion-col style="background:#003366" (tap)="setColor(\'21\')">&nbsp;</ion-col>\n          <ion-col style="background:#000066" (tap)="setColor(\'22\')">&nbsp;</ion-col>\n          <ion-col style="background:#330066" (tap)="setColor(\'23\')">&nbsp;</ion-col>\n          <ion-col style="background:#660066" (tap)="setColor(\'24\')">&nbsp;</ion-col>\n          <ion-col style="background:#660033" (tap)="setColor(\'25\')">&nbsp;</ion-col>\n          <ion-col style="background:#202020" (tap)="setColor(\'26\')">&nbsp;</ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col style="background:#990000" (tap)="setColor(\'27\')">&nbsp;</ion-col>\n          <ion-col style="background:#994C00" (tap)="setColor(\'28\')">&nbsp;</ion-col>\n          <ion-col style="background:#999900" (tap)="setColor(\'29\')">&nbsp;</ion-col>\n          <ion-col style="background:#4C9900" (tap)="setColor(\'30\')">&nbsp;</ion-col>\n          <ion-col style="background:#009900" (tap)="setColor(\'31\')">&nbsp;</ion-col>\n          <ion-col style="background:#00994C" (tap)="setColor(\'32\')">&nbsp;</ion-col>\n          <ion-col style="background:#009999" (tap)="setColor(\'33\')">&nbsp;</ion-col>\n          <ion-col style="background:#004C99" (tap)="setColor(\'34\')">&nbsp;</ion-col>\n          <ion-col style="background:#000099" (tap)="setColor(\'35\')">&nbsp;</ion-col>\n          <ion-col style="background:#4C0099" (tap)="setColor(\'36\')">&nbsp;</ion-col>\n          <ion-col style="background:#990099" (tap)="setColor(\'37\')">&nbsp;</ion-col>\n          <ion-col style="background:#99004C" (tap)="setColor(\'38\')">&nbsp;</ion-col>\n          <ion-col style="background:#404040" (tap)="setColor(\'39\')">&nbsp;</ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col style="background:#CC0000" (tap)="setColor(\'40\')">&nbsp;</ion-col>\n          <ion-col style="background:#CC6600" (tap)="setColor(\'41\')">&nbsp;</ion-col>\n          <ion-col style="background:#CCCC00" (tap)="setColor(\'42\')">&nbsp;</ion-col>\n          <ion-col style="background:#66CC00" (tap)="setColor(\'43\')">&nbsp;</ion-col>\n          <ion-col style="background:#00CC00" (tap)="setColor(\'44\')">&nbsp;</ion-col>\n          <ion-col style="background:#00CC66" (tap)="setColor(\'45\')">&nbsp;</ion-col>\n          <ion-col style="background:#00CCCC" (tap)="setColor(\'46\')">&nbsp;</ion-col>\n          <ion-col style="background:#0066CC" (tap)="setColor(\'47\')">&nbsp;</ion-col>\n          <ion-col style="background:#0000CC" (tap)="setColor(\'48\')">&nbsp;</ion-col>\n          <ion-col style="background:#6600CC" (tap)="setColor(\'49\')">&nbsp;</ion-col>\n          <ion-col style="background:#CC00CC" (tap)="setColor(\'50\')">&nbsp;</ion-col>\n          <ion-col style="background:#CC0066" (tap)="setColor(\'51\')">&nbsp;</ion-col>\n          <ion-col style="background:#606060" (tap)="setColor(\'52\')">&nbsp;</ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col style="background:#FF0000" (tap)="setColor(\'53\')">&nbsp;</ion-col>\n          <ion-col style="background:#FF8000" (tap)="setColor(\'54\')">&nbsp;</ion-col>\n          <ion-col style="background:#FFFF00" (tap)="setColor(\'55\')">&nbsp;</ion-col>\n          <ion-col style="background:#80FF00" (tap)="setColor(\'56\')">&nbsp;</ion-col>\n          <ion-col style="background:#00FF00" (tap)="setColor(\'57\')">&nbsp;</ion-col>\n          <ion-col style="background:#00FF80" (tap)="setColor(\'58\')">&nbsp;</ion-col>\n          <ion-col style="background:#00FFFF" (tap)="setColor(\'59\')">&nbsp;</ion-col>\n          <ion-col style="background:#0080FF" (tap)="setColor(\'60\')">&nbsp;</ion-col>\n          <ion-col style="background:#0000FF" (tap)="setColor(\'61\')">&nbsp;</ion-col>\n          <ion-col style="background:#7F00FF" (tap)="setColor(\'62\')">&nbsp;</ion-col>\n          <ion-col style="background:#FF00FF" (tap)="setColor(\'63\')">&nbsp;</ion-col>\n          <ion-col style="background:#FF007F" (tap)="setColor(\'64\')">&nbsp;</ion-col>\n          <ion-col style="background:#808080" (tap)="setColor(\'65\')">&nbsp;</ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col style="background:#FF3333" (tap)="setColor(\'66\')">&nbsp;</ion-col>\n          <ion-col style="background:#FF9933" (tap)="setColor(\'67\')">&nbsp;</ion-col>\n          <ion-col style="background:#FFFF33" (tap)="setColor(\'68\')">&nbsp;</ion-col>\n          <ion-col style="background:#99FF33" (tap)="setColor(\'69\')">&nbsp;</ion-col>\n          <ion-col style="background:#33FF33" (tap)="setColor(\'70\')">&nbsp;</ion-col>\n          <ion-col style="background:#33FF99" (tap)="setColor(\'71\')">&nbsp;</ion-col>\n          <ion-col style="background:#33FFFF" (tap)="setColor(\'72\')">&nbsp;</ion-col>\n          <ion-col style="background:#3399FF" (tap)="setColor(\'73\')">&nbsp;</ion-col>\n          <ion-col style="background:#3333FF" (tap)="setColor(\'74\')">&nbsp;</ion-col>\n          <ion-col style="background:#9933FF" (tap)="setColor(\'75\')">&nbsp;</ion-col>\n          <ion-col style="background:#FF33FF" (tap)="setColor(\'76\')">&nbsp;</ion-col>\n          <ion-col style="background:#FF3399" (tap)="setColor(\'77\')">&nbsp;</ion-col>\n          <ion-col style="background:#A0A0A0" (tap)="setColor(\'78\')">&nbsp;</ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col style="background:#FF6666" (tap)="setColor(\'79\')">&nbsp;</ion-col>\n          <ion-col style="background:#FFB266" (tap)="setColor(\'80\')">&nbsp;</ion-col>\n          <ion-col style="background:#FFFF66" (tap)="setColor(\'81\')">&nbsp;</ion-col>\n          <ion-col style="background:#B2FF66" (tap)="setColor(\'82\')">&nbsp;</ion-col>\n          <ion-col style="background:#66FF66" (tap)="setColor(\'83\')">&nbsp;</ion-col>\n          <ion-col style="background:#66FFB2" (tap)="setColor(\'84\')">&nbsp;</ion-col>\n          <ion-col style="background:#66FFFF" (tap)="setColor(\'85\')">&nbsp;</ion-col>\n          <ion-col style="background:#66B2FF" (tap)="setColor(\'86\')">&nbsp;</ion-col>\n          <ion-col style="background:#6666FF" (tap)="setColor(\'87\')">&nbsp;</ion-col>\n          <ion-col style="background:#B266FF" (tap)="setColor(\'88\')">&nbsp;</ion-col>\n          <ion-col style="background:#FF66FF" (tap)="setColor(\'89\')">&nbsp;</ion-col>\n          <ion-col style="background:#FF66B2" (tap)="setColor(\'90\')">&nbsp;</ion-col>\n          <ion-col style="background:#C0C0C0" (tap)="setColor(\'91\')">&nbsp;</ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col style="background:#FF9999" (tap)="setColor(\'92\')">&nbsp;</ion-col>\n          <ion-col style="background:#FFCC99" (tap)="setColor(\'93\')">&nbsp;</ion-col>\n          <ion-col style="background:#FFFF99" (tap)="setColor(\'94\')">&nbsp;</ion-col>\n          <ion-col style="background:#CCFF99" (tap)="setColor(\'95\')">&nbsp;</ion-col>\n          <ion-col style="background:#99FF99" (tap)="setColor(\'96\')">&nbsp;</ion-col>\n          <ion-col style="background:#99FFCC" (tap)="setColor(\'97\')">&nbsp;</ion-col>\n          <ion-col style="background:#99FFFF" (tap)="setColor(\'98\')">&nbsp;</ion-col>\n          <ion-col style="background:#99CCFF" (tap)="setColor(\'99\')">&nbsp;</ion-col>\n          <ion-col style="background:#9999FF" (tap)="setColor(\'100\')">&nbsp;</ion-col>\n          <ion-col style="background:#CC99FF" (tap)="setColor(\'101\')">&nbsp;</ion-col>\n          <ion-col style="background:#FF99FF" (tap)="setColor(\'102\')">&nbsp;</ion-col>\n          <ion-col style="background:#FF99CC" (tap)="setColor(\'103\')">&nbsp;</ion-col>\n          <ion-col style="background:#999" (tap)="setColor(\'104\')">&nbsp;</ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col style="background:#FFCCCC" (tap)="setColor(\'105\')">&nbsp;</ion-col>\n          <ion-col style="background:#FFE5CC" (tap)="setColor(\'106\')">&nbsp;</ion-col>\n          <ion-col style="background:#FFFFCC" (tap)="setColor(\'107\')">&nbsp;</ion-col>\n          <ion-col style="background:#E5FFCC" (tap)="setColor(\'108\')">&nbsp;</ion-col>\n          <ion-col style="background:#CCFFCC" (tap)="setColor(\'109\')">&nbsp;</ion-col>\n          <ion-col style="background:#CCFFE5" (tap)="setColor(\'110\')">&nbsp;</ion-col>\n          <ion-col style="background:#CCFFFF" (tap)="setColor(\'111\')">&nbsp;</ion-col>\n          <ion-col style="background:#CCE5FF" (tap)="setColor(\'112\')">&nbsp;</ion-col>\n          <ion-col style="background:#CCCCFF" (tap)="setColor(\'113\')">&nbsp;</ion-col>\n          <ion-col style="background:#E5CCFF" (tap)="setColor(\'114\')">&nbsp;</ion-col>\n          <ion-col style="background:#FFCCFF" (tap)="setColor(\'115\')">&nbsp;</ion-col>\n          <ion-col style="background:#FFCCE5" (tap)="setColor(\'116\')">&nbsp;</ion-col>\n          <ion-col style="background:#FFFFFF" (tap)="setColor(\'117\')">&nbsp;</ion-col>\n        </ion-row>\n        </ion-grid>\n        </div>\n</ion-content>\n'/*ion-inline-end:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\WEBAPP\colorpicker\colorpicker.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["F" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavParams */]])
    ], ColorpickerPage);
    return ColorpickerPage;
}());

//# sourceMappingURL=colorpicker.js.map

/***/ })

});
//# sourceMappingURL=48.js.map