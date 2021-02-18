webpackJsonp([136],{

/***/ 1025:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cursoslibres2ListPageModule", function() { return Cursoslibres2ListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cursoslibres2_list__ = __webpack_require__(1467);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__ = __webpack_require__(445);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var Cursoslibres2ListPageModule = /** @class */ (function () {
    function Cursoslibres2ListPageModule() {
    }
    Cursoslibres2ListPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__cursoslibres2_list__["a" /* Cursoslibres2ListPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__cursoslibres2_list__["a" /* Cursoslibres2ListPage */]),
                __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["b" /* TranslateModule */].forChild(),
                __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__["a" /* PipesModule */]
            ],
        })
    ], Cursoslibres2ListPageModule);
    return Cursoslibres2ListPageModule;
}());

//# sourceMappingURL=cursoslibres2-list.module.js.map

/***/ }),

/***/ 1467:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Cursoslibres2ListPage; });
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





var Cursoslibres2ListPage = /** @class */ (function () {
    function Cursoslibres2ListPage(storage, alertCtrl, msj, translateService, navCtrl, _MODAL, navParams, regService) {
        var _this = this;
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
        this.pingreso = false;
        this.pconsulta = false;
        this.peliminacion = false;
        this.pcreacion = false;
        this.pactualizacion = false;
        this.preporte = false;
        this.pfiltro = false;
        this.permisom = [];
        this.idafiliado = 'na';
        this.gLimit = 50;
        this.PageSegmet = 'foods';
        this.gSearchQuery = '';
        this.username = "";
        this.translateService.get('APPX').subscribe(function (value) {
            _this.idempresa = value;
        });
        this.pet = "Cursos libres en linea";
        this.estadoant = 'Cursos libres en linea';
        this.permisom = String(navParams.get("permiso")).split(",");
        this.pingreso = (this.permisom[0] == 'true');
        this.pconsulta = (this.permisom[1] == 'true');
        this.peliminacion = (this.permisom[2] == 'true');
        this.pcreacion = (this.permisom[3] == 'true');
        this.pactualizacion = (this.permisom[4] == 'true');
        this.pfiltro = (this.permisom[5] == 'true');
        this.preporte = (this.permisom[6] == 'true');
    }
    Cursoslibres2ListPage.prototype.displayQrCode2 = function (item) {
        var link = this.regService.daserverenuso() + '/?key=1' + '&key2=' + item._id + '&key3=' + item.capacidad;
        this.regService.abrelinkinterno3(link, '_blank', '', 0);
    };
    Cursoslibres2ListPage.prototype.clearSearchg = function () {
        this.gSearchQuery = '';
    };
    Cursoslibres2ListPage.prototype.busca = function (op) {
        this.estadoant = op;
        this.pideregistros();
    };
    Cursoslibres2ListPage.prototype.showFilter = function () {
        var _this = this;
        var select = {
            title: 'Seleccione area',
            message: 'Estado', inputs: [],
            buttons: [{ text: 'Cancelar' }, { text: 'Buscar', handler: function (todo) {
                        if (todo == 'TODOS') {
                            _this.regService.getRegsintok(_this.idempresa + '/Publicación/' + _this.estadoant, 'area_eventos').then(function (data) {
                                _this.items = data;
                            }, function (err) {
                                _this.msj.showError3('Error', err.error);
                                // this.translateService.get('NO_OPERACION').subscribe((value) => { this.msj.showError3('Error',value);  })
                            });
                        }
                        else {
                            _this.regService.getRegsintok(_this.idempresa + '/Publicación/' + _this.estadoant + '/' + todo, 'area_eventos').then(function (data) {
                                _this.items = data;
                            }, function (err) {
                                _this.msj.showError3('Error', err.error);
                                // this.translateService.get('NO_OPERACION').subscribe((value) => { this.msj.showError3('Error',value);  })
                            });
                        }
                    } }]
        };
        select.inputs.push({ name: 'myInput', type: 'radio', label: 'ÁREA DE  SALUD Y PSICOPEDAGOGÍA', value: 'ÁREA DE  SALUD Y PSICOPEDAGOGÍA' });
        select.inputs.push({ name: 'myInput', type: 'radio', label: 'ÁREA TÉCNICA', value: 'ÁREA TÉCNICA' });
        select.inputs.push({ name: 'myInput', type: 'radio', label: 'ÁREA DE CIENCIAS JURÍDICAS Y SOCIALES, CIENCIA POLÍTICA Y CIENCIAS SOCIALES', value: 'ÁREA DE CIENCIAS JURÍDICAS Y SOCIALES, CIENCIA POLÍTICA Y CIENCIAS SOCIALES' });
        select.inputs.push({ name: 'myInput', type: 'radio', label: 'CURSOS DE INTERES MULTIPLE', value: 'CURSOS DE INTERES MULTIPLE' });
        select.inputs.push({ name: 'myInput', type: 'radio', label: 'ÁREA DE  SALUD Y PSICOPEDAGOGÍA', value: 'ÁREA DE  SALUD Y PSICOPEDAGOGÍA' });
        select.inputs.push({ name: 'myInput', type: 'radio', label: 'TODOS', value: 'TODOS' });
        var newAlert = this.alertCtrl.create(select);
        newAlert.present();
    };
    Cursoslibres2ListPage.prototype.pideregistros = function () {
        var _this = this;
        var self = this;
        self.loading = true;
        this.regService.getRegsintok(this.idempresa + '/Publicación/' + this.estadoant, 'area_eventos').then(function (data) {
            _this.items = data;
            self.loading = false;
        }, function (err) {
            _this.msj.showError3('Error', err.error);
            // this.translateService.get('NO_OPERACION').subscribe((value) => { this.msj.showError3('Error',value);  })
        });
    };
    Cursoslibres2ListPage.prototype.ionViewDidLoad = function () {
        //  this.estadoant=op
        this.estadoant = 'Cursos libres en linea';
        this.pideregistros();
    };
    Cursoslibres2ListPage.prototype.loadMore = function (ev) {
        this.gLimit += 50;
        setTimeout(function () { return ev.complete(); }, 1000);
    };
    Cursoslibres2ListPage.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get('username').then(function (value) {
            _this.username = value;
        });
    };
    Cursoslibres2ListPage.prototype.deleteRecord = function (item, no) {
        var _this = this;
        var alert = this.alertCtrl.create({ title: 'Esta seguro de realizar esta operación?',
            buttons: [
                { text: 'Si',
                    handler: function () {
                        var recordID = item._id;
                        _this.regService.deleteReg(recordID + '/' + _this.username + '/' + _this.idempresa + '/' + _this.idafiliado, 'area_eventos').then(function (data) {
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
    Cursoslibres2ListPage.prototype.updateRecord = function (item, no) {
        var _this = this;
        var addModal = this._MODAL.create('Cursoslibres2CreatePage', { record: item }, { showBackdrop: true, enableBackdropDismiss: false });
        addModal.onDidDismiss(function (data) {
            if (data) {
                _this.items.splice(no, 1);
                _this.items = _this.items.concat([data]);
            }
        });
        addModal.present();
        //  this.navCtrl.push('EmpresaCreatePage', { record : item });
    };
    Cursoslibres2ListPage.prototype.addRecord = function () {
        var _this = this;
        var addModal = this._MODAL.create('Cursoslibres2CreatePage', { record: null }, { showBackdrop: true, enableBackdropDismiss: false });
        addModal.onDidDismiss(function (data) {
            if (data) {
                _this.items = _this.items.concat([data]);
            }
        });
        addModal.present();
        //this.navCtrl.push('EmpresaCreatePage');
    };
    Cursoslibres2ListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-cursoslibres2-list',template:/*ion-inline-start:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\EVENTOS\cursoslibres2-list\cursoslibres2-list.html"*/'<ion-header no-border class="opaque">\n  <ion-navbar  no-border-bottom>\n\n        <ion-title>\n          Universidad de San Carlos de Guatemala\n  </ion-title>\n\n\n<ion-grid>\n  <ion-row>\n    <ion-col col-2>\n      <img  height="100" width="100"\n      src="../../../assets/img/logoit.jpg"/>\n    </ion-col>\n    <ion-col col-8>\n\n\n\n        <div class="splash-intro">\n\n          Cursos Libres en Linea\n        </div>\n\n\n    </ion-col>\n\n    <ion-col col-2>\n      <img  height="100" width="100"\n      src="../../../assets/img/cursosusac.png"/>\n    </ion-col>\n\n\n  </ion-row>\n</ion-grid>\n</ion-navbar>\n<ion-searchbar debounce="2000"   (ionCancel)="clearSearchg($event)" [(ngModel)]="gSearchQuery" placeholder="{{ \'NO2_REGISTROS\' | translate }}{{items.length}}]">\n</ion-searchbar>\n<ion-segment  color="secundary" [(ngModel)]="pet">\n  <ion-segment-button value="Cursos Libres" color="red"  (ionSelect)="busca(\'Cursos libres en linea\')">\n    Cursos Libres\n  </ion-segment-button>\n  <ion-segment-button value="Cursos de Actualización" (ionSelect)="busca(\'Cursos de Actualización\')">\n    Cursos de Actualización\n  </ion-segment-button>\n  <ion-segment-button value="Pre-universitarios" (ionSelect)="busca(\'Pre-universitarios\')">\n    Pre-universitarios\n  </ion-segment-button>\n\n</ion-segment>\n<ion-buttons end>\n  <button (click)="showFilter()" icon-only ion-button padding-right>\n      <ion-icon name="funnel" ></ion-icon>\n    </button>\n\n</ion-buttons>\n</ion-header>\n\n\n<ion-content  class="page-empresa-list" >\n\n\n\n <ion-list >\n\n\n\n\n    <ion-item  *ngFor="let item of items | search: gSearchQuery | LimitPipe: gLimit ;let i = index;" text-wrap>\n        <ion-card>\n          <ion-card-header>\n\n         <ion-badge class="my-label18" color="primary" >  {{item.idarea}}  </ion-badge>\n          </ion-card-header>\n            <ion-row>\n\n                <ion-col    text-right>\n                        No: {{i+1}}\n                </ion-col>\n                <ion-item  text-wrap>\n                  <button ion-item   >\n\n                      <h1>Curso: {{item.nombre}}</h1>\n\n                      <p>Fecha: {{item.fecha}}</p>\n\n                  </button>\n                </ion-item>\n\n                </ion-row>\n\n\n            <ion-row >\n\n\n                <ion-col>\n                  <button class="my-label18" color="secondary" (click)="displayQrCode2(item)" ion-button clear small  icon-start>\n                    <ion-icon name=\'checkbox-outline\'></ion-icon>\n                    Inscribirse al curso\n                  </button>\n                </ion-col>\n\n\n              </ion-row>\n          </ion-card>\n  </ion-item>\n </ion-list>\n <ion-infinite-scroll (ionInfinite)="loadMore($event)">\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n\n\n</ion-content>\n'/*ion-inline-end:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\EVENTOS\cursoslibres2-list\cursoslibres2-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__providers__["d" /* NotificationProvider */], __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers__["a" /* Auth */]])
    ], Cursoslibres2ListPage);
    return Cursoslibres2ListPage;
}());

//# sourceMappingURL=cursoslibres2-list.js.map

/***/ })

});
//# sourceMappingURL=136.js.map