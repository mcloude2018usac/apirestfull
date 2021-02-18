webpackJsonp([128],{

/***/ 1083:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormularioMoviladdPageModule", function() { return FormularioMoviladdPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__formulario_moviladd__ = __webpack_require__(1539);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pipes_pipes_module__ = __webpack_require__(445);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var FormularioMoviladdPageModule = /** @class */ (function () {
    function FormularioMoviladdPageModule() {
    }
    FormularioMoviladdPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__formulario_moviladd__["a" /* FormularioMoviladdPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__formulario_moviladd__["a" /* FormularioMoviladdPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild(),
                __WEBPACK_IMPORTED_MODULE_4__pipes_pipes_module__["a" /* PipesModule */]
            ],
        })
    ], FormularioMoviladdPageModule);
    return FormularioMoviladdPageModule;
}());

//# sourceMappingURL=formulario-moviladd.module.js.map

/***/ }),

/***/ 1539:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormularioMoviladdPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular_util_datetime_util__ = __webpack_require__(202);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var FormularioMoviladdPage = /** @class */ (function () {
    //private barcodeScanner:BarcodeScanner,
    function FormularioMoviladdPage(alertCtrl, storage, msj, translateService, navCtrl, navParams, regService, _MODAL) {
        var _this = this;
        this.alertCtrl = alertCtrl;
        this.storage = storage;
        this.msj = msj;
        this.translateService = translateService;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.regService = regService;
        this._MODAL = _MODAL;
        this.loading = true;
        this.items = [];
        this.items2 = [];
        this.generated = '';
        this.gLimit = 50;
        this.PageSegmet = 'foods';
        this.gSearchQuery = '';
        this.username = "";
        this.idafiliado = 'na';
        this.cmpver = [];
        this.hasFilter = false;
        this.permisom = [];
        this.keys = [];
        this.translateService.get('APPX').subscribe(function (value) {
            _this.idempresa = value;
        });
    }
    FormularioMoviladdPage.prototype.clearSearchg = function () {
        this.gSearchQuery = '';
    };
    FormularioMoviladdPage.prototype.showFilter = function () {
        var _this = this;
        var campo = '';
        this.hasFilter = true;
        var select = {
            title: '¿Por que campo quiere buscar?',
            inputs: [],
            buttons: [{ text: 'Cancelar' }, { text: 'Buscar', handler: function (todo) {
                        //buscamos
                        campo = todo;
                        var select2 = {
                            title: 'Ingrese información a buscar',
                            inputs: [{
                                    name: 'campo2',
                                    label: 'Buscar',
                                    placeholder: ''
                                }],
                            buttons: [{ text: 'Cancelar' }, { text: 'Buscar', handler: function (todo2) {
                                        //buscamos
                                        //campo  y campo2
                                        var self = _this;
                                        self.loading = true;
                                        _this.regService.getReg(_this.formulario + '/' + campo + '/' + todo2.campo2 + '/buscar', 'frmmovils').then(function (data) {
                                            _this.items = data;
                                            self.loading = false;
                                        }, function (err) {
                                            _this.msj.showError3('Error', err.error);
                                            // this.translateService.get('NO_OPERACION').subscribe((value) => { this.msj.showError3('Error',value);  })
                                        });
                                    } }]
                        };
                        var newAlert2 = _this.alertCtrl.create(select2);
                        newAlert2.present();
                    } }]
        };
        this.regService.getReg(this.formulario + '/formulariocamposver2/' + this.idempresa, 'frmmovils').then(function (data) {
            var aa;
            aa = data;
            for (var i = 0; i < aa.length; i++) {
                select.inputs.push({ name: 'myInput', type: 'radio', label: aa[i].nombre, value: aa[i]._id });
            }
            var newAlert = _this.alertCtrl.create(select);
            newAlert.present();
        }, function (err) {
            _this.msj.showError3('Error', err.error);
        });
    };
    FormularioMoviladdPage.prototype.getKeys3 = function (data, op) {
        var re = '';
        if (data) {
            for (var i = 0; i < data.length; i++) {
                if (data[i].name == op) {
                    re = data[i].nombre;
                }
            }
        }
        else {
            re = "";
        }
        return re;
    };
    FormularioMoviladdPage.prototype.dahora = function (data) {
        var re = '';
        var aa = data.split('T');
        if (aa[0]) {
            var bb = (aa[1]).split(':');
            if (bb[0]) {
                re = Object(__WEBPACK_IMPORTED_MODULE_5_ionic_angular_util_datetime_util__["k" /* renderDateTime */])("hh:mm A", { day: 1,
                    hour: Number(bb[0]),
                    millisecond: 0,
                    minute: Number(bb[1]),
                    month: 1,
                    second: 0,
                    tzOffset: 0,
                    year: 2019 }, { dayNames: undefined,
                    dayShortNames: undefined,
                    monthNames: undefined,
                    monthShortNames: undefined });
            }
        }
        //DD/MM/YYYY hh:mm A
        return re;
    };
    FormularioMoviladdPage.prototype.dafecha = function (data) {
        var re = '';
        if (data) {
            re = data.substr(0, 10);
            var aa = re.split('-');
            if (aa[0]) {
                re = aa[2] + '-' + aa[1] + '-' + aa[0];
            }
        }
        return re;
    };
    FormularioMoviladdPage.prototype.dafechacompleta = function (data) {
        var re = '';
        var aa = data.split('T');
        if (aa[0]) {
            re = this.dafecha(aa[0]) + ' ' + this.dahora(data);
        }
        return re;
    };
    FormularioMoviladdPage.prototype.getKeys2 = function (data) {
        if (data) {
            if (data.key) {
                return data.label;
            }
            else {
                return data;
            }
        }
        else {
            return "";
        }
    };
    FormularioMoviladdPage.prototype.getKeys = function (data) {
        var keyst = [];
        // var keys2:any=[];
        this.keys = Object.keys(data);
        var cadurs = '';
        var cadurs2 = '';
        for (var i = 0; i < this.keys.length; i++) {
            var aa = this.keys[i];
            switch (aa) {
                case '_id': break;
                case '_v': break;
                case '__v': break;
                case 'usuarionew':
                    cadurs = 'Creación [' + data[aa] + ' , ';
                    break;
                case 'usuarioup':
                    cadurs2 = 'Actualiza [' + data[aa] + ' , ';
                    break;
                case 'createdAt':
                    cadurs = cadurs + '' + (data[aa]).substring(0, 10) + ']';
                    break;
                case 'updatedAt':
                    cadurs2 = cadurs2 + '' + (data[aa]).substring(0, 10) + ']';
                    break;
                default:
                    var pone = this.getKeys3(this.cmpver, aa);
                    if (pone != '') {
                        //var aareg:any=aa;
                        var tcampo = '';
                        if (aa.includes('fechahora')) {
                            tcampo = 'fechahora';
                        }
                        else {
                            if (aa.includes('fecha')) {
                                tcampo = 'fecha';
                            }
                            else {
                                if (aa.includes('hora')) {
                                    tcampo = 'hora';
                                }
                            }
                        }
                        if (aa.includes('imagen')) {
                            tcampo = 'imagen';
                        }
                        switch (tcampo) {
                            case 'fechahora':
                                keyst.push('<strong>' + this.getKeys3(this.cmpver, aa) + '</strong> : ' + this.dafechacompleta(this.getKeys2(data[aa])));
                                break;
                            case 'fecha':
                                keyst.push('<strong>' + this.getKeys3(this.cmpver, aa) + '</strong> : ' + this.dafecha(this.getKeys2(data[aa])));
                                break;
                            case 'hora':
                                keyst.push('<strong>' + this.getKeys3(this.cmpver, aa) + '</strong> : ' + this.dahora(this.getKeys2(data[aa])));
                                break;
                            case 'imagen':
                                keyst.push('<strong>' + this.getKeys3(this.cmpver, aa) + '</strong> :  <img src="' + this.getKeys2(data[aa]) + '"   class="circle-pic"  height="50 px" width="50 px"> ');
                                break;
                            default:
                                keyst.push('<strong>' + this.getKeys3(this.cmpver, aa) + '</strong> : ' + this.getKeys2(data[aa]));
                        }
                    }
                    break;
            }
        }
        keyst.push(cadurs + ' ' + cadurs2);
        this.keys = keyst;
        /*
            for(var i2 = 0; i2 < keyst.length; i2++) {
              keys2.push(keyst[i2])
            }
            keys2.push(cadurs + ' ' +cadurs2)
            this.keys=keys2*/
        return true;
    };
    /*
      keys(obj){
        return Object.keys(obj);
    }
    */
    FormularioMoviladdPage.prototype.pideregistros = function () {
        var _this = this;
        var self = this;
        self.loading = true;
        this.regService.getReg(this.formulario + '/formulario/' + this.idempresa, 'frmmovils').then(function (data) {
            _this.items = data;
            self.loading = false;
        }, function (err) {
            _this.msj.showError3('Error', err.error);
            // this.translateService.get('NO_OPERACION').subscribe((value) => { this.msj.showError3('Error',value);  })
        });
    };
    FormularioMoviladdPage.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get('username').then(function (value) {
            _this.username = value;
        });
    };
    FormularioMoviladdPage.prototype.ionViewDidLoad = function () {
        this.idcat = this.navParams.data.record2.idcat;
        this.idcatn = this.navParams.data.record2.idcatn;
        this.idfrm = this.navParams.data.record._id;
        this.idfrmn = this.navParams.data.record.nombre;
        this.formulario = this.navParams.data.record._id;
        this.nformulario = this.navParams.data.record.nombre;
        this.cmpver = this.navParams.data.record2.datat;
        this.pideregistros();
    };
    FormularioMoviladdPage.prototype.loadMore = function (ev) {
        this.gLimit += 50;
        setTimeout(function () { return ev.complete(); }, 1000);
    };
    FormularioMoviladdPage.prototype.deleteRecord = function (item, no) {
        var _this = this;
        var alert = this.alertCtrl.create({ title: 'Esta seguro de realizar esta operación?',
            buttons: [
                { text: 'Si',
                    handler: function () {
                        var recordID = item._id;
                        _this.regService.deleteReg(recordID + '/' + _this.idfrm + '/' + _this.username + '/' + _this.idempresa + '/' + _this.idafiliado, 'frmmovils').then(function (data) {
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
    FormularioMoviladdPage.prototype.updateRecord = function (item, no) {
        var _this = this;
        var addModal = this._MODAL.create('FormularioMovilPage', { record: item, record2: { idcat: this.idcat, idcatn: this.idcatn, idfrm: this.idfrm, idfrmn: this.idfrmn } }, { showBackdrop: true, enableBackdropDismiss: false });
        addModal.onDidDismiss(function (data) {
            if (data) {
                _this.pideregistros();
            }
        });
        addModal.present();
        //  this.navCtrl.push('EmpresaCreatePage', { record : item });
    };
    FormularioMoviladdPage.prototype.addRecord = function () {
        var _this = this;
        var addModal = this._MODAL.create('FormularioMovilPage', { record: null, record2: { idcat: this.idcat, idcatn: this.idcatn, idfrm: this.idfrm, idfrmn: this.idfrmn } }, { showBackdrop: true, enableBackdropDismiss: false });
        addModal.onDidDismiss(function (data) {
            if (data) {
                _this.pideregistros();
            }
        });
        addModal.present();
        //this.navCtrl.push('EmpresaCreatePage');
    };
    FormularioMoviladdPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-formulario-moviladd',template:/*ion-inline-start:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\FORMULARIO\formulario-moviladd\formulario-moviladd.html"*/'<ion-header no-border class="opaque">\n  <ion-navbar  no-border-bottom>\n      <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n    <ion-title>\n          {{idfrmn}}\n      </ion-title>\n      <ion-buttons end>\n        <button  rel="tooltip" title="Filtrar por estado" (click)="showFilter()" icon-only ion-button padding-right>\n          <ion-icon name="funnel"  [style.color]="hasFilter ? \'orange\' : \'inherit\'"></ion-icon>\n        </button>\n          <button  (click)="pideregistros()" icon-only ion-button padding-right>\n              <ion-icon name="refresh"></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n   \n  </ion-header> \n    \n  <ion-content  class="list-avatar-page" padding>\n     <ion-list > \n        <ion-item   *ngFor="let item of items | LimitPipe: gLimit ;let i = index;" text-wrap>\n                <ion-card>\n                        <ion-row>\n                                <ion-col    text-right>\n                                        No: {{i+1}}  \n                                </ion-col>    \n                                <ion-item  text-wrap>\n                                  <button ion-item  (click)="updateRecord(item,i)">\n       \n                                          <span *ngIf="getKeys(item)">\n                                               <div  class="first-letter" *ngFor="let key of keys" [innerHtml]="key">\n                                                  \n                                               \n                                               </div> \n                                            </span>\n\n                                            \n                                 \n                                      \n                                  </button>\n                                </ion-item>\n                                </ion-row>\n\n                        <ion-row no-padding>\n                            <ion-col>\n                              <button   (click)="deleteRecord(item,i)" ion-button clear small  icon-start>\n                                <ion-icon name=\'md-trash\'></ion-icon>\n                                Eliminar\n                              </button>\n                            </ion-col>\n        \n                      \n                          </ion-row>\n                      </ion-card>\n      </ion-item>\n     </ion-list>\n     <ion-infinite-scroll (ionInfinite)="loadMore($event)">\n        <ion-infinite-scroll-content></ion-infinite-scroll-content>\n      </ion-infinite-scroll>\n  \n      <ion-fab bottom right #fab>\n          <button ion-fab  (click)="addRecord()"><ion-icon name="add"></ion-icon></button>\n          \n      </ion-fab>\n  \n  </ion-content>'/*ion-inline-end:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\FORMULARIO\formulario-moviladd\formulario-moviladd.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_2__providers__["d" /* NotificationProvider */], __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers__["a" /* Auth */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* ModalController */]])
    ], FormularioMoviladdPage);
    return FormularioMoviladdPage;
}());

//# sourceMappingURL=formulario-moviladd.js.map

/***/ })

});
//# sourceMappingURL=128.js.map