webpackJsonp([112],{

/***/ 1070:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsignaPapAutListPageModule", function() { return AsignaPapAutListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__asigna_pap_aut_list__ = __webpack_require__(1526);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__ = __webpack_require__(445);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AsignaPapAutListPageModule = /** @class */ (function () {
    function AsignaPapAutListPageModule() {
    }
    AsignaPapAutListPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__asigna_pap_aut_list__["a" /* AsignaPapAutListPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__asigna_pap_aut_list__["a" /* AsignaPapAutListPage */]),
                __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["b" /* TranslateModule */].forChild(),
                __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__["a" /* PipesModule */]
            ],
        })
    ], AsignaPapAutListPageModule);
    return AsignaPapAutListPageModule;
}());

//# sourceMappingURL=asigna-pap-aut-list.module.js.map

/***/ }),

/***/ 1526:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AsignaPapAutListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_pdf_pdfx__ = __webpack_require__(447);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AsignaPapAutListPage = /** @class */ (function () {
    function AsignaPapAutListPage(loadingCtrl, Pdfx, storage, alertCtrl, msj, translateService, navCtrl, navParams, regService) {
        var _this = this;
        this.loadingCtrl = loadingCtrl;
        this.Pdfx = Pdfx;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.msj = msj;
        this.translateService = translateService;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.regService = regService;
        this.loading = true;
        this.items = [];
        this.items2 = [];
        this.sidist = false;
        this.tiposus = [];
        this.creaxx = true;
        this.username = "";
        this.gLimit = 50;
        this.PageSegmet = 'foods';
        this.gSearchQuery = '';
        this.dpitt = '';
        this.excludeTracks = [];
        this.translateService.get('APPX').subscribe(function (value) {
            _this.idempresa = value;
        });
    }
    AsignaPapAutListPage.prototype.clearSearchg = function () {
        this.gSearchQuery = '';
    };
    AsignaPapAutListPage.prototype.ionViewDidLoad = function () {
        //this.idsuscriptor=this.navParams.data.record.nodpi;
        //this.nidsuscriptor=this.navParams.data.record.nombre +' '+ this.navParams.data.record.apellido;
        var _this = this;
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
        this.showFilter();
    };
    AsignaPapAutListPage.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get('username').then(function (value) {
            _this.username = value;
        });
    };
    AsignaPapAutListPage.prototype.loadMore = function (ev) {
        this.gLimit += 50;
        setTimeout(function () { return ev.complete(); }, 1000);
    };
    AsignaPapAutListPage.prototype.viewRecord = function (item) {
        // let modal = this._MODAL.create(ViewGalleryPage, { record : item });
        // modal.present();
    };
    AsignaPapAutListPage.prototype.presentFilter = function () {
    };
    AsignaPapAutListPage.prototype.imprime = function (item, no) {
        var _this = this;
        var creat = 'Crea';
        var options = {
            id: item.noboleta,
            id2: item.codcarrera,
            id3: item.monto,
            id4: item.cui,
            id5: item.idjornada,
            id6: item.unidad,
            id7: item.codunidad,
            bitacora: { idempresa: this.idempresa, idafiliado: '', email: this.username, permiso: creat, accion: creat + ' autoriza asignacion pap' }
        };
        if (options) {
            this.regService.createReg('', options, 'asignaestudiantepaps').then(function (result) {
                var rr = result;
                if (rr.op == "Generacion realizada con exito") {
                    var options2 = {
                        estado: 'Generación de boleta exitosa',
                        bitacora: { idempresa: _this.idempresa, idafiliado: '', email: _this.username, permiso: creat, accion: creat + ' autoriza asignacion pap, estado' }
                    };
                    _this.regService.createReg(item._id, options2, 'asignapaps').then(function (result) {
                        _this.regService.getReg('noboleta/' + item.noboleta, 'asignapaps').then(function (data) {
                            _this.items = data;
                            var loading = _this.loadingCtrl.create({
                                spinner: 'bubbles',
                                content: "Enviando notificación a alumno..."
                            });
                            loading.present();
                            var idt = item._id;
                            var nombret = item.nombre;
                            var html1 = '';
                            html1 = ' <div class="es-wrapper-color">      <table cellpadding="0" cellspacing="0" class="es-wrapper" width="100%">    <tbody><tr>    <td valign="top" class="esd-email-paddings"><table cellpadding="0" cellspacing="0" class="es-header esd-header-popover" align="center">    <tbody><tr>    <td class="esd-stripe" align="center"><table class="es-header-body" align="center" cellpadding="0" cellspacing="0" width="600">    <tbody><tr>    <td class="esd-structure es-p20b es-p20r es-p20l" align="left"><table cellpadding="0" cellspacing="0" width="100%">    <tbody><tr>    <td width="560" class="esd-container-frame" align="center" valign="top"><table cellpadding="0" cellspacing="0" width="100%">    <tbody><tr>    <td align="center" class="esd-block-image"><a href="" target="_blank"><img src="http://52.90.195.238:8500/logousac1.png" alt="" width="124" style="display: block;"></a>    </td></tr>    </tbody></table>    </td></tr>    </tbody></table>    </td></tr>    </tbody></table>    </td></tr>    </tbody></table><table cellpadding="0" cellspacing="0" class="es-content esd-footer-popover" align="center">    <tbody><tr>    <td class="esd-stripe" align="center"><table bgcolor="#ffffff" class="es-content-body" align="center" cellpadding="0" cellspacing="0" width="600">    <tbody><tr>    <td class="esd-structure es-p20" align="left"><table cellpadding="0" cellspacing="0" width="100%">    <tbody><tr>    <td width="560" class="esd-container-frame" align="center" valign="top"><table cellpadding="0" cellspacing="0" width="100%">    <tbody><tr>    <td align="center" class="esd-block-text es-p15b"><h2 style="font-size: 16px; text-align: center;"><strong>LA UNIVERSIDAD DE SAN CARLOS DE GUATEMALA</strong></h2><p></p><p></p><strong>Bienvenido </strong> ' + nombret + '</p><p><br></p><p><br></p><p><br>Tu boleta de asignación PAP a sido generada con exito.</p><p><br></p><p> Entra a http://www.usacenlinea.net y genera tu asignación. <br></p><p>Cordialmente,<br>Ing. Murphy Paiz</p><p><br>Rector</p>    </td></tr>    </tbody></table>    </td></tr>    </tbody></table>    </td></tr>    </tbody></table>    </td></tr>    </tbody></table>    </td></tr>    </tbody></table>    </div>';
                            var options2 = {
                                destino: item.correo,
                                html: html1,
                                text: html1,
                                subjet: 'Asignación PAP',
                                actualiza: { tipo: 'PAP', id: idt, estado: 'Ingreso, mail enviado',
                                    otros: '' }
                            };
                            _this.regService.mandamail('', options2, 'mails').then(function (data) {
                                loading.dismiss();
                            }, function (err) {
                                loading.dismiss();
                                _this.msj.showError3('Error', err.error);
                            });
                            //manda correo a alumno  item.correo
                        }, function (err) {
                            _this.msj.showError3('Error', err.error);
                        });
                    }, function (err) {
                        _this.msj.showError3('Error', err.error);
                    });
                }
            }, function (err) {
                _this.msj.showError3('Error', err.error);
            });
        }
    };
    AsignaPapAutListPage.prototype.showFilter = function () {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: this.v3 + ' No boleta',
            message: this.v2 + 'No boleta',
            inputs: [
                {
                    name: 'dpi'
                }
            ],
            buttons: [
                {
                    text: this.v1
                },
                {
                    text: this.v4,
                    handler: function (todo) {
                        if (todo) {
                            _this.dpitt = todo.dpi;
                            _this.regService.getReg('noboleta/' + todo.dpi, 'asignapaps').then(function (data) {
                                _this.items = data;
                            }, function (err) {
                                _this.msj.showError3('Error', err.error);
                            });
                        }
                    }
                }
            ]
        });
        prompt.present();
    };
    AsignaPapAutListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-asigna-pap-aut-list',template:/*ion-inline-start:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\PAP\asigna-pap-aut-list\asigna-pap-aut-list.html"*/'<ion-header>\n    <ion-navbar  [color]="\'navbarColor\'">\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n          </button>\n      <ion-title>\n      Asignación PAP\n      </ion-title>\n      <ion-buttons end>  \n          <button (click)="showFilter()" icon-only ion-button padding-right>\n              <ion-icon name="funnel"></ion-icon>\n            </button>\n            \n        </ion-buttons>\n    </ion-navbar>\n   \n  \n  </ion-header>\n       \n  <ion-content  class="list-avatar-page" padding>\n     <ion-list >\n        <ion-item    *ngFor="let item of items  ;let i = index;" text-wrap>\n                <ion-card >\n                        <ion-row>\n                            <ion-col    text-right>\n                                    No: {{i+1}}\n                            </ion-col>     \n                            <ion-item text-wrap>\n                                <br>\n                                <h2>Fecha Transacción: {{item.createdAt | date : \'dd/MM/yyyy\'}} </h2>\n                                <h2>Nombre: {{item.nombre }} </h2>\n                                <h2>CUI: {{item.cui }} </h2>\n                                <h2>Facultad a la que desea estudiar: {{item.idunidadacademica.nombre}} </h2>\n                                <h2>Cursos que aplican a esta unidad: {{item.cursosaplica}} </h2>\n                                <h2>Jornada: {{item.idjornada}} </h2>\n                                <h2>No boleta: {{item.noboleta}} </h2>\n                                <h2>Monto boleta: {{item.monto}} </h2>\n                                <h2>Monto total de los cursos: {{item.montodeuda}} </h2>\n                                <br>\n                                <h1>Nota: Verifique en la boleta que el monto sea valido </h1>\n                                <h1>Estado: {{item.estado}} </h1>\n                            </ion-item>\n                           \n                         </ion-row>\n                         <ion-row no-padding>\n                              \n                                \n                              <ion-col>\n                                      \n                                  <button  *ngIf="item.estado ==\'En proceso de generación de boleta\'" ion-button  (click)="imprime(item,i)" >\n                                      Autorizar constancia\n                                    </button>\n                                </ion-col>\n                   \n                               \n                            </ion-row>\n                  </ion-card>\n        \n      </ion-item>\n     </ion-list>\n     <ion-infinite-scroll (ionInfinite)="loadMore($event)">\n        <ion-infinite-scroll-content></ion-infinite-scroll-content>\n      </ion-infinite-scroll>\n  \n      \n  \n  </ion-content>\n  \n  '/*ion-inline-end:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\PAP\asigna-pap-aut-list\asigna-pap-aut-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_5__providers_pdf_pdfx__["a" /* pdfx */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__providers__["d" /* NotificationProvider */], __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers__["a" /* Auth */]])
    ], AsignaPapAutListPage);
    return AsignaPapAutListPage;
}());

//# sourceMappingURL=asigna-pap-aut-list.js.map

/***/ })

});
//# sourceMappingURL=112.js.map