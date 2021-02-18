webpackJsonp([115],{

/***/ 1061:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Detalle1PageModule", function() { return Detalle1PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__detalle1__ = __webpack_require__(1517);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Detalle1PageModule = /** @class */ (function () {
    function Detalle1PageModule() {
    }
    Detalle1PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__detalle1__["a" /* Detalle1Page */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__detalle1__["a" /* Detalle1Page */]),
            ],
        })
    ], Detalle1PageModule);
    return Detalle1PageModule;
}());

//# sourceMappingURL=detalle1.module.js.map

/***/ }),

/***/ 1517:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Detalle1Page; });
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



var Detalle1Page = /** @class */ (function () {
    function Detalle1Page(regService, viewCtrl, navParams2, navCtrl, navParams) {
        this.regService = regService;
        this.viewCtrl = viewCtrl;
        this.navParams2 = navParams2;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.ind1m = [];
    }
    Detalle1Page.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad Detalle1Page');
        this.idtipo = this.navParams.data.idtipo;
        this.idindicador = this.navParams.data.idindicador;
        this.idpolitica = this.navParams.data.idpolitica;
        this.idarea = this.navParams.data.idarea;
        this.tituloxx = this.navParams.data.titulo;
        this.opcion = this.navParams.data.op;
        if (this.navParams.data.op == 1) {
            this.regService.getRegsintokora('ind1d/' + this.idindicador, 'oracle2').then(function (data) {
                _this.ind1m = data;
            }, function (err) {
                //this.msj.showError3('Error',err.error);   
                _this.ind1m = [];
            });
        }
        else {
            if (this.navParams.data.op == 2) {
                this.regService.getRegsintokora('ind2d/' + this.idindicador, 'oracle2').then(function (data) {
                    _this.ind1m = data;
                }, function (err) {
                    //this.msj.showError3('Error',err.error);   
                    _this.ind1m = [];
                });
            }
            else {
                if (this.navParams.data.op == 3) {
                    this.regService.getRegsintokora('participacion/' + this.idindicador, 'oracle2').then(function (data) {
                        _this.ind1m = data;
                    }, function (err) {
                        _this.ind1m = [];
                        //this.msj.showError3('Error',err.error);   
                    });
                }
                else {
                    if (this.navParams.data.op == 5) {
                        this.regService.getRegsintokora('ind1det/' + this.idindicador, 'oracle2').then(function (data) {
                            _this.ind1m = data;
                        }, function (err) {
                            _this.ind1m = [];
                            //this.msj.showError3('Error',err.error);   
                        });
                    }
                    else {
                        this.regService.getRegsintokora('pggpoliticapublica/' + this.idpolitica + '/' + this.idarea, 'oracle2').then(function (data) {
                            _this.ind1m = data;
                        }, function (err) {
                            _this.ind1m = [];
                            //this.msj.showError3('Error',err.error);   
                        });
                    }
                }
            }
        }
    };
    Detalle1Page.prototype.openlink = function (op) {
        window.open(op, '_system', 'location=no');
    };
    Detalle1Page.prototype.cancel = function () {
        this.viewCtrl.dismiss();
    };
    Detalle1Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-detalle1',template:/*ion-inline-start:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\GRAFICADOR\detalle1\detalle1.html"*/'<ion-header >\n    <ion-navbar  [color]="\'bottonx\'">\n      <ion-title>{{tituloxx}}</ion-title>\n      <ion-buttons end>\n          <button (click)="cancel()"  ion-button padding-right>\n             Cerrar\n            </button>\n        \n            </ion-buttons>\n    </ion-navbar>\n  </ion-header>\n<ion-content padding>\n    <table  *ngIf="opcion==1" class="pure-table">\n        <thead>\n          <tr>   \n           \n            <th>Producto</th>\n            <th>Inicial</th>  \n            <th>Vigente</th>  \n            <th>Ejecutado</th>\n            <th>%</th>   \n            \n          </tr>     \n        </thead>\n        <tbody>  \n          <tr *ngFor="let item of ind1m; let i = index;">\n          \n          \n            <td data-label="Producto">{{ item.nombre }}</td>\n            <td data-label="Inicial">{{ item.inicial }}</td>\n            <td data-label="Vigente">{{ item.vigente }}</td>\n            <td data-label="Ejecutado">{{ item.ejecutado }}</td>\n            <td data-label="%">{{ item.porcentaje }}</td>\n            \n          </tr>\n        </tbody>\n      </table>  \n\n\n      <table  *ngIf="opcion==5" class="pure-table">\n          <thead>\n            <tr>   \n             \n              <th>Producto</th>\n              <th>Unidad de Medida</th>   \n              <th>Monto Inicial</th>  \n              <th>Monto Vigente</th>  \n              <th>Monto Ejecutado</th>\n              <th>%</th>   \n              <th>Cantidad Inicial</th>  \n              <th>Cantidad Vigente</th>  \n              <th>Cantidad Ejecutado</th>\n              <th>%</th>   \n              <th>Responsable</th>\n              <th>Participación</th>\n\n            </tr>     \n          </thead>\n          <tbody>  \n            <tr *ngFor="let item of ind1m; let i = index;">\n            \n            \n              <td data-label="Producto">{{ item.producto }}</td>\n              <td data-label="Unidad de Medida">Personas</td>\n              <td data-label="Monto Inicial">{{ item.monto_inicial }}</td>\n              <td data-label="Monto Vigente">{{ item.monto_vigente }}</td>\n              <td data-label="Monto Ejecutado">{{ item.monto_ejecutado }}</td>\n              <td data-label="%">{{ item.monto_porc }}</td>\n              <td data-label="Cantidad Inicial">{{ item.cant_inicial }}</td>\n              <td data-label="Cantidad Vigente">{{ item.cant_vigente }}</td>\n              <td data-label="Cantidad Ejecutado">{{ item.cant_ejecutado }}</td>\n              <td data-label="%">{{ item.cantidad_porc }}</td>\n              <td data-label="Responsable">{{ item.siglas}}</td>\n              <td data-label="Participación">{{ item.participacion }}</td>\n\n              \n            </tr>\n          </tbody>\n        </table>  \n\n\n\n    <table  *ngIf="opcion==2" class="pure-table">\n        <thead>\n          <tr>   \n           \n            <th>Producto</th>\n            <th>Unidad de Medida</th>\n            <th>Inicial</th>  \n            <th>Vigente</th>  \n            <th>Ejecutado</th>\n            <th>%</th>   \n            \n          </tr>     \n        </thead>\n        <tbody>  \n          <tr *ngFor="let item of ind1m; let i = index;">\n          \n          \n            <td data-label="Producto">{{ item.nombre }}</td>\n            <td data-label="Unidad de Medida">{{ item.unidad }}</td>\n            <td data-label="Inicial">{{ item.inicial }}</td>\n            <td data-label="Vigente">{{ item.vigente }}</td>\n            <td data-label="Ejecutado">{{ item.ejecutado }}</td>\n            <td data-label="%">{{ item.porcentaje }}</td>\n            \n          </tr>\n        </tbody>\n      </table>  \n\n\n     \n          <table *ngIf="opcion==3" class="pure-table">\n              <thead>\n                <tr>   \n                    <th>Producto</th>\n                  <th>Siglas</th>\n                  <th>Nombre</th>\n                     \n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor="let item of ind1m; let i = index;">\n                \n                \n                  <td data-label="Producto">{{ item.producto }}</td>\n                  <td data-label="Siglas">{{ item.siglas }}</td>\n                  <td data-label="Nombre">{{ item.nombre }}</td> \n                  \n                </tr>\n              </tbody>\n            </table>  \n\n            <table *ngIf="opcion==4" class="pure-table">\n                <thead>\n                  <tr>   \n                      <th>Política pública</th>   \n                    <th>Archivo</th>\n                   \n                       \n                  </tr>\n                </thead>\n                <tbody>\n                  <tr *ngFor="let item of ind1m; let i = index;">\n                  \n                  \n                    <td data-label="Política pública">{{ item.nombre}}</td>\n                    <td data-label="Archivo" >\n                        <button   rel="tooltip" title="Mostrar politica publica"  (click)="openlink(item.archivo)" ion-button clear>\n                            <ion-icon name=\'document\'></ion-icon>\n                         </button>\n                        \n                   </td>\n                   \n                    \n                  </tr>\n                </tbody>\n              </table>  \n         \n</ion-content>\n'/*ion-inline-end:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\GRAFICADOR\detalle1\detalle1.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers__["a" /* Auth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["F" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavParams */]])
    ], Detalle1Page);
    return Detalle1Page;
}());

//# sourceMappingURL=detalle1.js.map

/***/ })

});
//# sourceMappingURL=115.js.map