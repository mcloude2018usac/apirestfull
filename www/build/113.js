webpackJsonp([113],{

/***/ 1069:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarcosListPageModule", function() { return MarcosListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__marcos_list__ = __webpack_require__(1525);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pipes_pipes_module__ = __webpack_require__(445);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var MarcosListPageModule = /** @class */ (function () {
    function MarcosListPageModule() {
    }
    MarcosListPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__marcos_list__["a" /* MarcosListPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__marcos_list__["a" /* MarcosListPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild(),
                __WEBPACK_IMPORTED_MODULE_4__pipes_pipes_module__["a" /* PipesModule */]
            ],
        })
    ], MarcosListPageModule);
    return MarcosListPageModule;
}());

//# sourceMappingURL=marcos-list.module.js.map

/***/ }),

/***/ 1525:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MarcosListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(453);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_img_viewer__ = __webpack_require__(450);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng_socket_io__ = __webpack_require__(451);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng_socket_io___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ng_socket_io__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







//declare var Highcharts : any;

var MarcosListPage = /** @class */ (function () {
    //private barcodeScanner:BarcodeScanner,
    function MarcosListPage(socket, http, imageViewerCtrl, translateService, actionSheetCtrl, alertCtrl, storage, msj, navCtrl, navParams, regService) {
        var _this = this;
        this.socket = socket;
        this.http = http;
        this.translateService = translateService;
        this.actionSheetCtrl = actionSheetCtrl;
        this.alertCtrl = alertCtrl;
        this.storage = storage;
        this.msj = msj;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.regService = regService;
        this.loading = true;
        this.items = [];
        this.itemsa = [];
        this.items2 = [];
        this.generated = '';
        this.segeplan = '../assets/img/segeplan1.png';
        this.tiposus = [];
        this.hasFilter = false;
        this.idafiliado = 'na';
        this.gLimit = 50;
        this.PageSegmet = 'foods';
        this.gSearchQuery = '';
        this.username = "";
        this._imageViewerCtrl = imageViewerCtrl;
        this.translateService.get('APPX').subscribe(function (value) { _this.idempresa = value; });
        /*
    
         <div id="container" style="height: 400px"></div>
    
          Highcharts.('container',{
            chart: {
            alignTicks: false
            },
            rangeSelector: {
            selected: 1
            },
            title: {
            text: 'AAPL Stock Volume'
            },
            series: [{
            type: 'column',
            name: 'AAPL Stock Volume',
            data: [
            [1298851200000,100768479],
            [1298937600000,114032163],
            [1299024000000,150647189],
            [1299110400000,125196764],
            [1299196800000,113316483],
            [1299456000000,136530149],
            [1299542400000,89078955],
            [1299628800000,113349033],
            [1299715200000,126972055],
            [1299801600000,117770016]
            ],
            dataGrouping: {
            units: [[
            'week', // unit name
            [1] // allowed multiples
            ], [
            'month',
            [1, 2, 3, 4, 6]
            ]]
            }
            }]
            });
            */
    }
    MarcosListPage.prototype.presentImage = function (myImage) {
        var imageViewer = this._imageViewerCtrl.create(myImage);
        imageViewer.present();
    };
    MarcosListPage.prototype.clearSearchg = function () {
        this.gSearchQuery = '';
    };
    MarcosListPage.prototype.iniciarchat = function () {
        var _this = this;
        this.regService.getReg("webappchat@gmail.com/emailsolo/" + this.idempresa, 'personals').then(function (data) {
            _this.socket.connect();
            _this.socket.emit('set-nickname', data[0]._id);
            _this.navCtrl.push('ChatPage', { record: { toUserId: _this.idsuscriptor,
                    toUserName: _this.nombrett, avatar: _this.fotott }, grupal: 'no',
                record2: { toUserId: data[0]._id,
                    toUserName: 'Chat WEBAPP', avatar: data[0].foto } });
        });
    };
    MarcosListPage.prototype.updateRecord = function (item, no) {
        switch (item.codigo) {
            case 0:
                this.navCtrl.push('IndicadortopPage', { record: item });
                break;
            case 1:
                this.navCtrl.push('indicadortop2Page', { record: item });
                break;
            default:
                break;
        }
    };
    MarcosListPage.prototype.pideregistros = function () {
        var _this = this;
        this.regService.getRegsintokora('marcos/1', 'oracle2').then(function (data) {
            _this.items = data;
            _this.items2 = _this.items;
        });
        this.regService.getRegsintokora('marcos0/1', 'oracle2').then(function (data) {
            _this.itemsa = data;
        });
    };
    MarcosListPage.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get('username').then(function (value) {
            _this.username = value;
        });
        this.storage.get('tiposus').then(function (value) {
            _this.tiposus = value.split(',');
            _this.idsuscriptor = _this.tiposus[3];
            _this.nombrett = _this.tiposus[4];
            _this.fotott = _this.tiposus[9] + "," + _this.tiposus[10];
        });
    };
    MarcosListPage.prototype.ionViewDidLoad = function () {
        this.pideregistros();
        /*
            var data = [
              ['gt-qc', 0],
              ['gt-pe', 1],
              ['gt-hu', 2],
              ['gt-qz', 3],
              ['gt-re', 4],
              ['gt-sm', 5],
              ['gt-bv', 6],
              ['gt-av', 7],
              ['gt-es', 8],
              ['gt-cm', 9],
              ['gt-gu', 10],
              ['gt-su', 11],
              ['gt-sa', 12],
              ['gt-so', 13],
              ['gt-to', 14],
              ['gt-pr', 15],
              ['gt-sr', 16],
              ['gt-iz', 17],
              ['gt-cq', 18],
              ['gt-ja', 19],
              ['gt-ju', 20],
              ['gt-za', 21]
          ];
          */
        /*
          var myChart = HighCharts.mapChart('container', {
            chart: {
              map: 'countries/gt/gt-all'
          },
      
          title: {
              text: 'Highmaps basic demo'
          },
      
          subtitle: {
              text: 'Source map: <a href="http://code.highcharts.com/mapdata/countries/gt/gt-all.js">Guatemala</a>'
          },
      
          mapNavigation: {
              enabled: true,
              buttonOptions: {
                  verticalAlign: 'bottom'
              }
          },
      
          colorAxis: {
              min: 0
          },
      
          series: [{
              data: data,
              name: 'Random data',
              states: {
                  hover: {
                      color: '#BADA55'
                  }
              },
              dataLabels: {
                  enabled: true,
                  format: '{point.name}'
              }
          }]
          });
      */
    };
    MarcosListPage.prototype.loadMore = function (ev) {
        this.gLimit += 50;
        setTimeout(function () { return ev.complete(); }, 1000);
    };
    MarcosListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-marcos-list',template:/*ion-inline-start:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\GRAFICADOR\marcos-list\marcos-list.html"*/'<ion-header no-border class="opaque">\n  <ion-navbar  no-border-bottom>\n      <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n        Marcos\n    <ion-buttons end>\n      \n          <button  title="Refresh" (click)="pideregistros()" icon-only ion-button padding-right>\n            <ion-icon name="refresh"></ion-icon>\n          </button>\n      </ion-buttons>\n  </ion-navbar>\n  <ion-toolbar >\n      <ion-searchbar no-shadow showCancelButton="true" debounce="2000" (ionCancel)="clearSearchg($event)" [(ngModel)]="gSearchQuery"\n       placeholder="{{ \'NO2_REGISTROS\' | translate }}{{items.length}}]">\n      </ion-searchbar>\n  </ion-toolbar>\n</ion-header>\n      \n<ion-content  fullscreen>\n\n   \n   \n  <ion-list text-center>\n          \n     \n        <ion-item   *ngFor="let item of itemsa " text-wrap>\n  \n            <ion-card  (click)="updateRecord(item,1)" >\n                <ion-card-content>\n                    <ion-col   col-12>\n                        <img src="{{segeplan}}"   style="width:100px;height:100px;-webkit-border-radius: 5%;                  border-radius: 5%;display: block; margin: center;  margin-left: auto; margin-right: auto;">\n                          \n                        <h1 >{{item.nombre}}</h1>\n                      </ion-col>\n                        \n                  </ion-card-content>\n                 \n              </ion-card>   \n  \n  \n           \n      </ion-item>\n   \n     </ion-list>\n   \n\n\n     <ion-grid>\n      <ion-row>\n        <ion-col  *ngFor="let item of items | search: gSearchQuery | LimitPipe: gLimit ;let i = index;" col-6 class="ion-no-padding"> \n            <ion-card  (click)="updateRecord(item,i)" >\n                <ion-card-content class="fixline">\n                        <img src="{{segeplan}}"   style="width:100px;height:100px;-webkit-border-radius: 5%;                  border-radius: 5%;display: block; margin: center;  margin-left: auto; margin-right: auto;">\n                        <h1 >{{item.nombre}}</h1>\n                  </ion-card-content>\n              </ion-card>   \n        </ion-col>\n      </ion-row>\n     </ion-grid>\n\n  \n   \n<ion-fab  *ngIf="idempresa!==\'WebApp Usacenlinea\'"  bottom right #fab>\n    <button  rel="tooltip" title="Foro" color="tertiary" (click)="iniciarchat()" ion-fab><ion-icon name="logo-whatsapp"></ion-icon></button>\n  </ion-fab>\n   <ion-infinite-scroll (ionInfinite)="loadMore($event)">\n      <ion-infinite-scroll-content></ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n\n  \n\n\n    \n</ion-content>'/*ion-inline-end:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\GRAFICADOR\marcos-list\marcos-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7_ng_socket_io__["Socket"], __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_6_ionic_img_viewer__["a" /* ImageViewerController */], __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_2__providers__["d" /* NotificationProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers__["a" /* Auth */]])
    ], MarcosListPage);
    return MarcosListPage;
}());

//# sourceMappingURL=marcos-list.js.map

/***/ })

});
//# sourceMappingURL=113.js.map