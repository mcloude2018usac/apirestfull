webpackJsonp([106],{

/***/ 1076:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tipounidad2ListPageModule", function() { return Tipounidad2ListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tipounidad2_list__ = __webpack_require__(1532);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pipes_pipes_module__ = __webpack_require__(445);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var Tipounidad2ListPageModule = /** @class */ (function () {
    function Tipounidad2ListPageModule() {
    }
    Tipounidad2ListPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__tipounidad2_list__["a" /* Tipounidad2ListPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__tipounidad2_list__["a" /* Tipounidad2ListPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild(),
                __WEBPACK_IMPORTED_MODULE_4__pipes_pipes_module__["a" /* PipesModule */]
            ],
        })
    ], Tipounidad2ListPageModule);
    return Tipounidad2ListPageModule;
}());

//# sourceMappingURL=tipounidad2-list.module.js.map

/***/ }),

/***/ 1532:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Tipounidad2ListPage; });
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





var Tipounidad2ListPage = /** @class */ (function () {
    //private barcodeScanner:BarcodeScanner,
    function Tipounidad2ListPage(actionSheetCtrl, alertCtrl, storage, msj, translateService, navCtrl, _MODAL, navParams, regService) {
        var _this = this;
        this.actionSheetCtrl = actionSheetCtrl;
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
        this.idafiliado = 'na';
        this.hasFilter = false;
        this.gLimit = 50;
        this.PageSegmet = 'foods';
        this.gSearchQuery = '';
        this.username = "";
        this.OnExport4 = function () {
        };
        this.OnExport3 = function () {
            this.regService.abrelinkinterno('datosfijos/excel-asigna3');
        };
        this.OnExport = function () {
            this.regService.abrelinkinterno('datosfijos/excel-asigna2');
        };
        this.OnExport2 = function () {
            //subir file
            this.fileInput.nativeElement.click();
        };
        this.translateService.get('APPX').subscribe(function (value) {
            _this.idempresa = value;
        });
    }
    Tipounidad2ListPage.prototype.clearSearchg = function () {
        this.gSearchQuery = '';
    };
    Tipounidad2ListPage.prototype.showFilter = function () {
    };
    Tipounidad2ListPage.prototype.pideregistros = function () {
        var _this = this;
        var self = this;
        self.loading = true;
        this.regService.getReg('todos', 'tipounidad2s').then(function (data) {
            _this.items = data;
            _this.items2 = data;
            self.loading = false;
        }, function (err) {
            _this.msj.showError3('Error', err.error);
            // this.translateService.get('NO_OPERACION').subscribe((value) => { this.msj.showError3('Error',value);  })  
        });
    };
    Tipounidad2ListPage.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get('username').then(function (value) {
            _this.username = value;
        });
    };
    Tipounidad2ListPage.prototype.ionViewDidLoad = function () {
        this.pideregistros();
    };
    Tipounidad2ListPage.prototype.loadMore = function (ev) {
        this.gLimit += 50;
        setTimeout(function () { return ev.complete(); }, 1000);
    };
    Tipounidad2ListPage.prototype.deleteRecord = function (item, no) {
        var _this = this;
        var alert = this.alertCtrl.create({ title: 'Esta seguro de realizar esta operación?',
            buttons: [
                { text: 'Si',
                    handler: function () {
                        var recordID = item._id;
                        _this.regService.deleteReg(recordID + '/' + _this.username + '/' + _this.idempresa + '/' + _this.idafiliado, 'tipounidad2s').then(function (data) {
                            _this.pideregistros();
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
    Tipounidad2ListPage.prototype.updateRecord = function (item, no) {
        var _this = this;
        var addModal = this._MODAL.create('Tipounidad2CreatePage', { record: item }, { showBackdrop: true, enableBackdropDismiss: false });
        addModal.onDidDismiss(function (data) {
            if (data) {
                _this.pideregistros();
            }
        });
        addModal.present();
        //  this.navCtrl.push('EmpresaCreatePage', { record : item });
    };
    Tipounidad2ListPage.prototype.addRecord = function () {
        var _this = this;
        var addModal = this._MODAL.create('Tipounidad2CreatePage', { record: null }, { showBackdrop: true, enableBackdropDismiss: false });
        addModal.onDidDismiss(function (data) {
            if (data) {
                _this.pideregistros();
            }
        });
        addModal.present();
        //this.navCtrl.push('EmpresaCreatePage');
    };
    Tipounidad2ListPage.prototype.conferenciaRecord = function (item) {
        this.navCtrl.push('Unidadacademica2ListPage', { record: item });
    };
    Tipounidad2ListPage.prototype.processWebImage = function (event, op) {
        var _this = this;
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();
            reader.onload = function (readerEvent) {
                //   var filett= readerEvent.target.result;
                console.log(readerEvent.target.result);
                var options = {
                    texto: readerEvent.target.result,
                    bitacora: { idempresa: _this.idempresa, idafiliado: '', email: _this.username, permiso: 'upload', accion: ' archivo subido pagos PAP ' }
                };
                if (options) {
                    _this.regService.createReg('upload', options, 'tipounidad2s').then(function (result) {
                        _this.msj.showError3('Exito', 'Proceso realizado con exito');
                    }, function (err) {
                        _this.msj.showError3('Error', err.error);
                    });
                }
            };
            //reader.readAsDataURL(event.target.files[0]);
            reader.readAsText(event.target.files[0]);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('fileInput'),
        __metadata("design:type", Object)
    ], Tipounidad2ListPage.prototype, "fileInput", void 0);
    Tipounidad2ListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-tipounidad2-list',template:/*ion-inline-start:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\PAP\unidadacademica2\tipounidad2-list\tipounidad2-list.html"*/'<ion-header>\n  <ion-navbar [color]="\'navbarColor\'">\n      <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n    <ion-title>\n      Entidad academica\n    </ion-title>  \n    <ion-buttons end>  \n      <button rel="tooltip" title="Modificar user" (click)="OnExport4()"  icon-only ion-button padding-right>\n        <ion-icon name="card"></ion-icon>\n      </button>\n         \n      <button title="Asignacion de cursos" (click)="OnExport3()" icon-only ion-button padding-right>\n        <ion-icon name="albums"></ion-icon>\n      </button>   \n       \n        <button title="Importar archivo de pagos" (click)="OnExport2()" icon-only ion-button padding-right>\n            <ion-icon name="cloud-upload"></ion-icon>\n          </button>\n\n            <button  title="Refresh" (click)="pideregistros()" icon-only ion-button padding-right>\n            <ion-icon name="refresh"></ion-icon>\n          </button>\n         \n          <button title="Planificación de cursos" (click)="OnExport()" icon-only ion-button padding-right>\n              <ion-icon name="download"></ion-icon>\n            </button>\n       \n      </ion-buttons>\n  </ion-navbar>\n  <ion-toolbar no-border-top>\n      <ion-searchbar debounce="2000" (ionCancel)="clearSearchg($event)" [(ngModel)]="gSearchQuery" placeholder="{{ \'NO2_REGISTROS\' | translate }}{{items.length}}]">\n      </ion-searchbar>\n  </ion-toolbar>\n</ion-header>\n  \n<ion-content  class="page-eventos-list" padding>\n   <ion-list >\n      <ion-item   *ngFor="let item of items | search: gSearchQuery | LimitPipe: gLimit ;let i = index;" text-wrap>\n        <ion-card >\n            <ion-item text-wrap>\n                <input type="file" accept=".txt" #fileInput style="visibility: hidden; height: 0px" (change)="processWebImage($event,1)" />\n   \n                <button ion-item (click)="updateRecord(item,i)">\n                    <p>Codigo: {{item.codigo}}</p>\n                <h2>Nombre: {{item.nombre}}</h2>\n                <h2>Departamento: {{item.iddepartamento.id.nombre}}</h2>\n                <h2>Abreviatura: {{item.abreviatura}}</h2>\n                </button>\n              </ion-item>\n              <ion-row no-padding>\n                        <ion-col>\n                          <button (click)="deleteRecord(item,i)" ion-button clear small  icon-start>\n                            <ion-icon name=\'md-trash\'></ion-icon>\n                            Eliminar\n                          </button>\n                        </ion-col>\n\n                      \n                        <ion-col text-center>\n                            <button (click)="conferenciaRecord(item)" ion-button clear small color="secondary" icon-start>\n                              <ion-icon name=\'albums\'></ion-icon>\n                              Unidades \n                           \n                            </button>\n                          </ion-col>\n\n                      \n                </ion-row>\n             \n            </ion-card>\n	  </ion-item>\n   </ion-list>\n   <ion-infinite-scroll (ionInfinite)="loadMore($event)">\n      <ion-infinite-scroll-content></ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n\n    <ion-fab bottom right #fab>\n        <button ion-fab (click)="addRecord()"><ion-icon name="add"></ion-icon></button>\n        \n    </ion-fab>\n\n\n    \n</ion-content>'/*ion-inline-end:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\PAP\unidadacademica2\tipounidad2-list\tipounidad2-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_2__providers__["d" /* NotificationProvider */], __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers__["a" /* Auth */]])
    ], Tipounidad2ListPage);
    return Tipounidad2ListPage;
}());

//# sourceMappingURL=tipounidad2-list.js.map

/***/ })

});
//# sourceMappingURL=106.js.map