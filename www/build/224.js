webpackJsonp([224],{

/***/ 1364:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConvenioCalusacd2Page; });
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






var ConvenioCalusacd2Page = /** @class */ (function () {
    //private barcodeScanner:BarcodeScanner,
    function ConvenioCalusacd2Page(Pdfx, actionSheetCtrl, alertCtrl, storage, msj, translateService, navCtrl, _MODAL, navParams, regService) {
        var _this = this;
        this.Pdfx = Pdfx;
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
        this.hasFilter = false;
        this.gLimit = 50;
        this.PageSegmet = 'foods';
        this.gSearchQuery = '';
        this.username = "";
        this.idafiliado = 'na';
        this.translateService.get('APPX').subscribe(function (value) {
            _this.idempresa = value;
        });
    }
    ConvenioCalusacd2Page.prototype.clearSearchg = function () {
        this.gSearchQuery = '';
    };
    ConvenioCalusacd2Page.prototype.showFilter = function () {
    };
    ConvenioCalusacd2Page.prototype.pideregistros = function () {
        var _this = this;
        var self = this;
        self.loading = true;
        this.regService.getReg(this.navParams.data.idempresa + '/1' + '/todos', 'conveniocalusacd2s').then(function (data) {
            _this.items = data;
            _this.items2 = data;
            //   this.total=(this.navParams.data.record.monto)*this.items.length
            self.loading = false;
        }, function (err) {
            _this.msj.showError3('Error', err.error);
            // this.translateService.get('NO_OPERACION').subscribe((value) => { this.msj.showError3('Error',value);  })
        });
    };
    ConvenioCalusacd2Page.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get('username').then(function (value) {
            _this.username = value;
        });
    };
    ConvenioCalusacd2Page.prototype.ionViewDidLoad = function () {
        this.pideregistros();
    };
    ConvenioCalusacd2Page.prototype.loadMore = function (ev) {
        this.gLimit += 50;
        setTimeout(function () { return ev.complete(); }, 1000);
    };
    ConvenioCalusacd2Page.prototype.asigna2 = function (item, no) {
        var _this = this;
        this.regService.getReg2b(item.idasigna + '/' + '1/todosautorizaxid', 'asignacalusacs').then(function (data) {
            var aa = [];
            aa = data;
            var bb = [];
            bb = aa.tt2;
            _this.Pdfx.daordenpago2(aa.tt._id, '', aa.tt, bb);
        }, function (err) {
            _this.msj.showError3('Error', err.error);
        });
    };
    ConvenioCalusacd2Page.prototype.deleteRecord = function (item, no) {
        var _this = this;
        var alert = this.alertCtrl.create({ title: 'Esta seguro de realizar esta operación?',
            buttons: [
                { text: 'Si',
                    handler: function () {
                        var recordID = item._id;
                        _this.regService.deleteReg(recordID + '/' + _this.username + '/' + _this.idempresa + '/' + _this.idafiliado, 'conveniocalusacd2s').then(function (data) {
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
    ConvenioCalusacd2Page.prototype.updateRecord = function (item, no) {
        var _this = this;
        var addModal = this._MODAL.create('ConvenioCalusacd2CreatePage', { record: item, op: '', idgrupo: '', idempresa: this.navParams.data.idempresa }, { showBackdrop: true, enableBackdropDismiss: false });
        addModal.onDidDismiss(function (data) {
            if (data) {
                _this.pideregistros();
            }
        });
        addModal.present();
        //  this.navCtrl.push('EmpresaCreatePage', { record : item });
    };
    ConvenioCalusacd2Page.prototype.addRecord = function () {
        var _this = this;
        var addModal = this._MODAL.create('ConvenioCalusacd2CreatePage', { record: null, op: '', idgrupo: '', idempresa: this.navParams.data.idempresa }, { showBackdrop: true, enableBackdropDismiss: false });
        addModal.onDidDismiss(function (data) {
            if (data) {
                _this.pideregistros();
            }
        });
        addModal.present();
        //this.navCtrl.push('EmpresaCreatePage');
    };
    ConvenioCalusacd2Page.prototype.random = function () {
        var rand = Math.floor(Math.random() * 20) + 1;
        return rand;
    };
    ConvenioCalusacd2Page.prototype.davariable = function (cad, varx) {
        var re = "";
        var otro = cad;
        var bb = [];
        if (otro.indexOf(varx) > 0) {
            bb = otro.split(varx);
            if (bb.length == 0) {
                re = "error";
            }
            else {
                var cc = bb[1].split(';');
                var dd = cc[1];
                var ee = dd.split('&');
                re = ee[0];
            }
        }
        else {
            re = "error";
        }
        return re;
    };
    ConvenioCalusacd2Page.prototype.genera = function (item, no) {
        var _this = this;
        var alert = this.alertCtrl.create({ title: 'Esta seguro de realizar esta operación?',
            buttons: [
                { text: 'Si',
                    handler: function () {
                        var cuitt = '';
                        cuitt = String(_this.random());
                        _this.regService.displayPreloader('Espere un momento...');
                        //this.authService.getReg(ident+ '/'+this.nombre1+'/' +montot + '/29/2020/17/1','siifs').then((result) =>
                        _this.regService.getReg2b(cuitt + '/' + 'Orden de pago especial' + '/' + item.monto + ".00" + '/30/2021/' + '152' + '/1', 'siifs').then(function (data) {
                            _this.items = data;
                            var aa = [];
                            aa = data;
                            var otro = aa.cadena;
                            var gorden = _this.davariable(otro, 'orden_pago');
                            var ordenpago = gorden;
                            var llave = _this.davariable(otro, 'llave');
                            var fechax = _this.davariable(otro, 'fecha');
                            if (gorden == "error") {
                                _this.msj.showError3('Error', 'No se pudo generar orden de pago, intente mas tarde');
                                _this.regService.hidePreloader();
                                //  this.authService.hidePreloader();
                                return;
                            }
                            _this.regService.hidePreloader();
                            var options = {
                                operacion: 'ordenpago',
                                noboletapago: ordenpago,
                                fechasiif: fechax,
                                llave: llave,
                                identificador: cuitt
                            };
                            _this.regService.createReg2b(item._id, options, 'conveniocalusacd2s').then(function (result) {
                                _this.pideregistros();
                            });
                        }, function (err) {
                            _this.msj.showError3('Error', 'Existe un problema al generar la boleta de pago, comuniquese con unidad administrativa CALUSAC');
                            _this.regService.hidePreloader();
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
    ConvenioCalusacd2Page.prototype.imprime = function (item, no) {
        this.Pdfx.daordenpago2acalusac('ORDEN_PAGO_CALUSAC', item.noboletapago, 'Orden de pago especiales', (item.monto), 'CALUSAC', item.identificador, '152', item.llave, 'Escuela de Ciencias Lingüísticas', item.fechasiif, '21', 'N/A', 'Orden de Pago especial ');
    };
    ConvenioCalusacd2Page.prototype.imprime2 = function (item, no) {
        var _this = this;
        this.regService.displayPreloader('Espere un momento...');
        this.regService.getReg2b(item.identificador + '/' + item.noboletapago + '/busca2', 'siifs').then(function (result) {
            var aa = [];
            aa = result;
            var otro = aa.cadena;
            if (otro == 'Orden pago ya ha sido utilizada en el sistema.') {
                _this.regService.hidePreloader();
                _this.msj.showError3('Información', otro);
                return;
            }
            _this.fechax = _this.davariable(otro, 'fecha');
            var cctemp = otro.indexOf('Boleta no pagada');
            if (cctemp > 0) {
                _this.regService.hidePreloader();
                _this.msj.showError3('Información', 'Por favor realice su pago, para poder continuar con su asignación.');
            }
            else {
                if (aa.cadena == '<?xml version="1.0" encoding="ISO-8859-1"?><SOAP-ENV:Envelope SOAP-ENV:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/" xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/"><SOAP-ENV:Body><ns1:getDataResponse xmlns:ns1="urn:miserviciowsdl"><return xsi:type="xsd:string"></return></ns1:getDataResponse></SOAP-ENV:Body></SOAP-ENV:Envelope>') {
                    cctemp = 1;
                    // this.msj.showError3('Información','Por favor realice su pago, para poder continuar con su asignación.');
                }
                else {
                    cctemp = -1;
                }
                if (cctemp == -1) {
                    _this.regService.hidePreloader();
                    //actualiza estado
                    var options = {
                        operacion: 'actualizarinfor',
                        estado: 'pagada'
                    };
                    if (options) {
                        _this.regService.createReg(item._id, options, 'conveniocalusacd2s').then(function (result) {
                            _this.pideregistros();
                            _this.msj.showError3('Mensaje', 'Orden de pago fue pagada con exito, por favor realice asignación de estudiantes');
                        }, function (err) {
                            _this.regService.hidePreloader();
                            _this.msj.showError3('Error', err.error);
                        });
                    }
                }
                else {
                    _this.regService.hidePreloader();
                    _this.msj.showError3('Información', 'Por favor realice su pago, para poder continuar con su asignación.');
                }
            }
        });
    };
    ConvenioCalusacd2Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-convenio-calusacd2',template:/*ion-inline-start:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\CALUSAC\convenio-calusacd2\convenio-calusacd2.html"*/'<ion-header no-border class="opaque">\n  <ion-navbar   no-border-bottom>\n    <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n  <ion-title>\n     Orden de pago especiales\n    </ion-title>\n    <ion-buttons end>\n            <button  title="Refresh" (click)="pideregistros()" icon-only ion-button padding-right>\n            <ion-icon name="refresh"></ion-icon>\n          </button>\n\n\n      </ion-buttons>\n  </ion-navbar>\n  <ion-toolbar no-border-top>\n      <ion-searchbar debounce="2000" (ionCancel)="clearSearchg($event)" [(ngModel)]="gSearchQuery" placeholder="{{ \'NO2_REGISTROS\' | translate }}{{items.length}}]">\n      </ion-searchbar>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content  class="page-eventos-list" padding>\n   <ion-list >\n\n      <ion-item   *ngFor="let item of items | search: gSearchQuery  | LimitPipe: gLimit ;let i = index;" text-wrap>\n        <ion-card >\n              <ion-row>\n                      <ion-col    text-right>\n                              No: {{i+1}}\n                      </ion-col>\n                      <ion-item  text-wrap>\n                        <button ion-item   >\n                                  <p> Monto: {{item.monto}} </p>\n                                   <p> Comentario: {{item.comentario}} </p>\n                              <p> Idioma: {{item.ididioma.nombre}} </p>\n                              <p> Jornada: {{item.jornada.nombre}} </p>\n                              <p> Horario: {{item.horario.nombre}} - {{item.horario.nombre2}} </p>\n                              <p> Profesor: {{item.profesor.nombre}} </p>\n                              <p> Estado: {{item.estado}} </p>\n                        </button>\n                      </ion-item>\n\n\n                      </ion-row>\n              <ion-row no-padding>\n                        <ion-col>\n                            <button  *ngIf=" item.estado===\'Creada\'" (click)="deleteRecord(item,i)" ion-button clear small  icon-start>\n                            <ion-icon name=\'md-trash\'></ion-icon>\n                            Eliminar\n                          </button>\n                        </ion-col>\n                         <ion-col>\n                          <button  *ngIf="item.estado === \'Creada\'" (click)="genera(item,i)" ion-button clear small  icon-start>\n                            <ion-icon name=\'create\'></ion-icon>\n                            Generar orden de pago\n                          </button>\n                        </ion-col>\n                        <ion-col>\n                          <button  *ngIf=" item.estado===\'Generada\'"  (click)="imprime(item,i)" ion-button clear small  icon-start>\n                            <ion-icon name=\'albums\'></ion-icon>\n                         Imprime orden de pago\n                          </button>\n                        </ion-col>\n                        <ion-col>\n                          <button  *ngIf="item.estado === \'Generada\'" (click)="imprime2(item,i)" ion-button clear small  icon-start>\n                            <ion-icon name=\'clipboard\'></ion-icon>\n                            Validar orden de pago y cerrar orden\n                          </button>\n                        </ion-col>\n\n                                      </ion-row>\n\n            </ion-card>\n    </ion-item>\n   </ion-list>\n   <ion-infinite-scroll (ionInfinite)="loadMore($event)">\n      <ion-infinite-scroll-content></ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n\n    <ion-fab bottom right #fab>\n        <button ion-fab  (click)="addRecord()"><ion-icon name="add"></ion-icon></button>\n\n    </ion-fab>\n\n\n\n</ion-content>\n'/*ion-inline-end:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\CALUSAC\convenio-calusacd2\convenio-calusacd2.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__providers_pdf_pdfx__["a" /* pdfx */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_2__providers__["d" /* NotificationProvider */], __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers__["a" /* Auth */]])
    ], ConvenioCalusacd2Page);
    return ConvenioCalusacd2Page;
}());

//# sourceMappingURL=convenio-calusacd2.js.map

/***/ }),

/***/ 924:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConvenioCalusacd2PageModule", function() { return ConvenioCalusacd2PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__convenio_calusacd2__ = __webpack_require__(1364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pipes_pipes_module__ = __webpack_require__(445);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ConvenioCalusacd2PageModule = /** @class */ (function () {
    function ConvenioCalusacd2PageModule() {
    }
    ConvenioCalusacd2PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__convenio_calusacd2__["a" /* ConvenioCalusacd2Page */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__convenio_calusacd2__["a" /* ConvenioCalusacd2Page */]), __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild(),
                __WEBPACK_IMPORTED_MODULE_4__pipes_pipes_module__["a" /* PipesModule */]
            ],
        })
    ], ConvenioCalusacd2PageModule);
    return ConvenioCalusacd2PageModule;
}());

//# sourceMappingURL=convenio-calusacd2.module.js.map

/***/ })

});
//# sourceMappingURL=224.js.map