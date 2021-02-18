webpackJsonp([160],{

/***/ 1005:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DenunciasListPageModule", function() { return DenunciasListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__denuncias_list__ = __webpack_require__(1447);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pipes_pipes_module__ = __webpack_require__(445);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var DenunciasListPageModule = /** @class */ (function () {
    function DenunciasListPageModule() {
    }
    DenunciasListPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__denuncias_list__["a" /* DenunciasListPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__denuncias_list__["a" /* DenunciasListPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild(),
                __WEBPACK_IMPORTED_MODULE_4__pipes_pipes_module__["a" /* PipesModule */]
            ],
        })
    ], DenunciasListPageModule);
    return DenunciasListPageModule;
}());

//# sourceMappingURL=denuncias-list.module.js.map

/***/ }),

/***/ 1447:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DenunciasListPage; });
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






var DenunciasListPage = /** @class */ (function () {
    //private barcodeScanner:BarcodeScanner,
    function DenunciasListPage(actionSheetCtrl, Pdfx, alertCtrl, storage, msj, translateService, navCtrl, _MODAL, navParams, regService) {
        var _this = this;
        this.actionSheetCtrl = actionSheetCtrl;
        this.Pdfx = Pdfx;
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
        this.tiposus = [];
        this.unidadt = "";
        this.idafiliado = 'na';
        this.generated = '';
        this.llave = [];
        this.gLimit = 50;
        this.PageSegmet = 'foods';
        this.gSearchQuery = '';
        this.username = "";
        this.OnExportpdf2 = function () {
            this.regService.abrelinkinterno('datosfijos/excel-denuncias/' + this.idsuscriptor);
        };
        this.OnExportpdf = function () {
            this.Pdfx.dadenuncias(this.items);
        };
        this.translateService.get('APPX').subscribe(function (value) {
            _this.idempresa = value;
        });
    }
    DenunciasListPage.prototype.clearSearchg = function () {
        this.gSearchQuery = '';
    };
    DenunciasListPage.prototype.showFilter = function () {
    };
    DenunciasListPage.prototype.filtro1 = function (op) {
        var estado = 'Pendiente';
        if (op == 1) {
            estado = 'Pendiente';
        }
        if (op == 2) {
            estado = 'Asignado';
        }
        if (op == 3) {
            estado = 'Cerrado';
        }
        this.items2 = this.items;
        this.items = this.items2.filter(function (v) {
            if (v.estado) {
                if (v.estado == estado) {
                    return true;
                }
                return false;
            }
        });
    };
    DenunciasListPage.prototype.pideregistros = function (op, op2) {
        var _this = this;
        var self = this;
        self.loading = true;
        var qry = '';
        if (op2 == 0) {
            qry = 'todos/' + this.idsuscriptor + '/' + op;
        }
        else {
            qry = 'todos/' + this.idsuscriptor + '/' + op + '/' + op2;
        }
        this.regService.getReg(qry, 'participa3s').then(function (data) {
            _this.items = data;
            self.loading = false;
        }, function (err) {
            _this.msj.showError3('Error', err.error);
        });
    };
    DenunciasListPage.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get('username').then(function (value) {
            _this.username = value;
        });
    };
    DenunciasListPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.storage.get('tiposus').then(function (value) {
            _this.tiposus = value.split(',');
            _this.unidadt = _this.tiposus[7];
            _this.idsuscriptor = _this.tiposus[3];
            _this.pideregistros('Pendiente', 0);
        });
    };
    DenunciasListPage.prototype.loadMore = function (ev) {
        this.gLimit += 50;
        setTimeout(function () { return ev.complete(); }, 1000);
    };
    DenunciasListPage.prototype.convertToDataURLviaCanvas = function (url, outputFormat) {
        return new Promise(function (resolve, reject) {
            var img = new Image();
            img.crossOrigin = 'Anonymous';
            img.onload = function () {
                var canvas = document.createElement('CANVAS'), ctx = canvas.getContext('2d'), dataURL;
                canvas.height = img.height;
                canvas.width = img.width;
                ctx.drawImage(img, 0, 0);
                dataURL = canvas.toDataURL(outputFormat);
                resolve(dataURL);
                canvas = null;
            };
            img.src = url;
        });
    };
    DenunciasListPage.prototype.actdenuncialist = function (item) {
        this.navCtrl.push('CursosviewHtmlPage', { titulo: 'Detalle del seguimiento', html: "<table  style='width:100%' border='1'><tr>  <th>Fecha</th>  <th>Usuario</th>  <th>Seguimiento</th></tr>" + item.notamedio + "</table>" });
    };
    DenunciasListPage.prototype.imprimir = function (item) {
        var _this = this;
        this.regService.getReg(item._id + '/denuncia', 'participa3s').then(function (data) {
            _this.Pdfx.dadenuncias(data);
        }, function (err) {
            _this.msj.showError3('Error', err.error);
            // this.translateService.get('NO_OPERACION').subscribe((value) => { this.msj.showError3('Error',value);  })  
        });
    };
    DenunciasListPage.prototype.cerrar = function (item) {
        var _this = this;
        var alert = this.alertCtrl.create({ title: 'Esta seguro de realizar esta operación?',
            buttons: [
                { text: 'Si',
                    handler: function () {
                        var options = {
                            id: item._id,
                            estado: 'Cerrado'
                        };
                        _this.regService.createRegsinmsg('actualiza', options, 'participa3s').then(function (result) {
                            _this.pideregistros('Cierre Pendiente', 1);
                            _this.msj.showError3('Exito', 'Seguimiento cerrado exitosamente');
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
    DenunciasListPage.prototype.asignar = function (item) {
        var _this = this;
        var select = {
            title: 'Seleccione operador',
            inputs: [],
            buttons: [{ text: 'Cancelar' }, { text: 'Asignar', handler: function (todo) {
                        //buscamos  todo
                        if (todo != '') {
                            if (todo) {
                                var options = {
                                    iddenuncia: item._id,
                                    cui: item.cui,
                                    nombre: item.nombre2,
                                    apellido: '.',
                                    correo: item.correo,
                                    telefono: '',
                                    unidad: '',
                                    tipo: item.tipo,
                                    motivo: '',
                                    f1: '',
                                    f2: '',
                                    f3: '',
                                    estado: 'Asignado',
                                    xpos: 0,
                                    ypos: 0,
                                    idusuario: todo,
                                    motivo2: item.motivo
                                };
                                _this.regService.createRegsinmsg('', options, 'participa33s').then(function (result) {
                                    _this.pideregistros('Pendiente', 0);
                                    _this.msj.showError3('Exito', 'Usuario asignado correctamente');
                                }, function (err) {
                                    _this.msj.showError3('Error', err.error);
                                });
                            }
                            else {
                                _this.msj.showError3('Error', 'Seleccione un operador valido');
                            }
                        }
                        else {
                            _this.msj.showError3('Error', 'Seleccione un operador valido');
                        }
                    } }]
        };
        this.regService.getReg('jefeope/' + this.idsuscriptor, 'denunciaunidads').then(function (data) {
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
    DenunciasListPage.prototype.seguimiento2 = function (item) {
        var _this = this;
        var alert = this.alertCtrl.create({ title: 'Esta seguro de realizar esta operación?',
            buttons: [
                { text: 'Si',
                    handler: function () {
                        var options = {
                            id: item._id,
                            estado: 'Asignado'
                        };
                        _this.regService.createRegsinmsg('actualiza', options, 'participa3s').then(function (result) {
                            _this.pideregistros('Asignado', 1);
                            _this.msj.showError3('Exito', 'Seguimiento cerrado exitosamente');
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
    DenunciasListPage.prototype.seguimiento = function (item) {
        var _this = this;
        this.regService.getReg(item._id + '/seguir', 'participa33s').then(function (data) {
            if (data) {
                var html = '';
                html = '      <!DOCTYPE html><html><head></head><body><h1><span style="color: #2880b9;">Usuario: &nbsp;</span>&nbsp;&nbsp; ' + data[0].idusuario.nombre + '</h1><table border="1"><tbody><tr><td><strong>Fecha de creaci&oacute;n:</strong></td><td>' + (data[0].createdAt).substr(0, 10) + '</td></tr><tr><td><strong>Estado del seguimiento:</strong></td><td>&nbsp;' + data[0].estado + '</td></tr><tr><td><strong>Descripcion del seguimiento:</strong></td><td>' + data[0].motivo + '</td></tr></tbody></table><p><strong><span style="color: #2880b9;">Imagenes del seguimiento</span></strong><table style="border-collapse: collapse; width: 100%;" border="1"><tbody><tr><td style="width: 100%;"><img src="' + data[0].f1 + '"  width="100%" height="100%" /></td></tr><tr><td style="width: 100%;"><img src="' + data[0].f2 + '" width="100%" height="100%" /></td></tr></tbody></table>';
                var ss = 0;
                if (item.estado == 'Cierre Pendiente') {
                    ss = 1;
                }
                var addModal = _this._MODAL.create('CursosviewHtmlPage', { titulo: 'Detalle del seguimiento', html: html, seguimiento: ss, idcierre: item._id }, { showBackdrop: true, enableBackdropDismiss: false, cssClass: "modal-fullscreen" });
                addModal.onDidDismiss(function (data) {
                    _this.pideregistros('Cierre Pendiente', 1);
                });
                addModal.present();
            }
        }, function (err) {
            _this.msj.showError3('Error', err.error);
        });
    };
    DenunciasListPage.prototype.deleteRecord = function (item, no) {
        var _this = this;
        var alert = this.alertCtrl.create({ title: 'Esta seguro de realizar esta operación?',
            buttons: [
                { text: 'Si',
                    handler: function () {
                        var recordID = item._id;
                        _this.regService.deleteReg(recordID + '/' + _this.username + '/' + _this.idempresa + '/' + _this.idafiliado, 'participa3s').then(function (data) {
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
    DenunciasListPage.prototype.mapa = function (item, no) {
        var addModal = this._MODAL.create('VMapsgooglePage', { record: item }, { showBackdrop: true, enableBackdropDismiss: false, cssClass: "modal-fullscreen" });
        addModal.onDidDismiss(function (data) {
            if (data) {
            }
        });
        addModal.present();
    };
    DenunciasListPage.prototype.video = function (item, no) {
        var _this = this;
        this.regService.getReg(item._id + "/fotos", 'participa3s').then(function (data10) {
            var foto1 = '';
            var foto2 = '';
            if (data10[0].f1) {
                foto1 = data10[0].f1;
            }
            if (data10[0].f2) {
                foto2 = data10[0].f2;
            }
            var addModal = _this._MODAL.create('DenunciasInfoPage', { record: item, f1: foto1, f2: foto2, video: item.f3, xpos: item.ypos, ypos: item.xpos, html: "<table  style='width:100%' border='1'><tr>  <th>Fecha</th>  <th>Usuario</th>  <th>Seguimiento</th></tr>" + item.notamedio + "</table>" }, { showBackdrop: true, enableBackdropDismiss: false, cssClass: "modal-fullscreen" });
            addModal.onDidDismiss(function (data) {
                if (data) {
                }
            });
            addModal.present();
        }, function (err) {
            _this.msj.showError3('Error', err.error);
            // this.translateService.get('NO_OPERACION').subscribe((value) => { this.msj.showError3('Error',value);  })  
        });
    };
    DenunciasListPage.prototype.updateRecord = function (item, no) {
        var _this = this;
        var addModal = this._MODAL.create('participa3CreatePage', { record: item }, { showBackdrop: true, enableBackdropDismiss: false });
        addModal.onDidDismiss(function (data) {
            if (data) {
                _this.items.splice(no, 1);
                _this.items = _this.items.concat([data]);
            }
        });
        addModal.present();
        //  this.navCtrl.push('EmpresaCreatePage', { record : item });
    };
    DenunciasListPage.prototype.addRecord = function () {
        var _this = this;
        var addModal = this._MODAL.create('participa3CreatePage', { record: null }, { showBackdrop: true, enableBackdropDismiss: false });
        addModal.onDidDismiss(function (data) {
            if (data) {
                _this.items = _this.items.concat([data]);
            }
        });
        addModal.present();
        //this.navCtrl.push('EmpresaCreatePage');
    };
    DenunciasListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-denuncias-list',template:/*ion-inline-start:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\DENUNCIAS\denuncias-list\denuncias-list.html"*/'<ion-header>\n  <ion-navbar [color]="\'navbarColor\'">\n      <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n    <ion-title>\n     Gestión de denuncias\n    </ion-title>\n    <ion-buttons end>\n            <button rel="tooltip" title="Generar reporte denuncias" \n            (click)="OnExportpdf()"  icon-only ion-button >\n                    <ion-icon name="book"></ion-icon>\n            </button>\n\n                  <button rel="tooltip" title="Generar reporte excel .csv" \n                  (click)="OnExportpdf2()"  icon-only ion-button padding-right>\n                          <ion-icon name="paper"></ion-icon>\n                        </button>\n      </ion-buttons>\n  </ion-navbar>\n  <!--<ion-toolbar no-border-top>\n      <ion-searchbar debounce="2000" (ionCancel)="clearSearchg($event)" [(ngModel)]="gSearchQuery" placeholder="{{ \'NO2_REGISTROS\' | translate }}{{items.length}}]">\n        </ion-searchbar>\n    </ion-toolbar>\n      -->\n</ion-header>         \n           \n<ion-content   padding>   \n    <ion-segment color="primary">\n        <ion-segment-button (ionSelect)="pideregistros(\'Pendiente\',0)"  value="Pendientes">\n            Pendientes\n        </ion-segment-button>\n        <ion-segment-button (ionSelect)="pideregistros(\'Asignado\',1)" value="Asignados">\n           Asignados\n        </ion-segment-button>\n        <ion-segment-button (ionSelect)="pideregistros(\'Cierre Pendiente\',1)" value="Cierres Pendientes">\n            Cierres Pendientes\n          </ion-segment-button>\n        <ion-segment-button (ionSelect)="pideregistros(\'Cerrado\',1);" value="Cerrado">\n            Casos Cerrados\n          </ion-segment-button>\n      </ion-segment>\n   <br>   \n\n  <ion-list text-center>    \n           \n    <div class="wrapper" text-center>\n        <ion-item   *ngFor="let item of items ;let i = index;" text-wrap text-center>\n          <div class="wrapper" >  \n           \n\n             <div class="box yellow" text-center>  \n              <div class="laberderecho">\n                Usuario:  {{item.nombre2}} \n              </div>  \n              <div class="laberderecho">\n                Fecha creación:  {{(item.createdAt).substr(0,10) }}\n              </div>  \n                 <ion-row class="header">   \n                   \n                     <ion-col col-12 class="button-container">   \n                       <h3>Tipo:</h3>  <p orange>{{item.tipo}}</p>\n                     </ion-col>   \n                 </ion-row>\n                 \n                 <ion-row>\n                     <ion-col col-12>\n                      <h3>Motivo:</h3>   <p orange>{{item.motivo2}}...</p>\n                           \n                     \n                               </ion-col>\n                 </ion-row>\n                   \n                 <ion-row>\n                     <ion-col col-4>\n                         <ion-icon name="contact"></ion-icon> Estado\n                     </ion-col>\n                     <ion-col col-8>\n                         <p style="display: inline-block; text-align: left;" item-content>{{item.estado}}</p>\n               \n                     </ion-col>\n                 </ion-row>\n\n                 <ion-row  *ngIf="item.motivo33!==\'\'" >\n                    <ion-col col-12>\n                     <h3>Descripcion de rechazo:</h3>   <p orange>{{item.motivo33}}...</p>\n                          \n                    \n                              </ion-col>\n                </ion-row>\n\n                 <ion-row>\n                    <ion-col col-4>\n                        <button *ngIf="item.estado == \'Cierre Pendiente\' || item.estado == \'Cerrado\'" (click)="seguimiento(item)" ion-button small  >Detalle</button>\n             \n                    </ion-col>   \n                   \n                </ion-row>   \n\n                    \n                           <ion-fab top left #fab2 middle>\n                               <button ion-fab color="secondary"><ion-icon name="arrow-dropdown-circle"></ion-icon></button>\n                               <ion-fab-list side="middle">\n                                      <button ion-fab  rel="tooltip" title="Información general" (click)="imprimir(item)"  color="light"><ion-icon name="print"></ion-icon></button>\n                                \n                                      \n                                   <button ion-fab  rel="tooltip" title="Geolocalización" (click)="mapa(item,i)"  color="light"><ion-icon name="md-pin"></ion-icon></button>\n                                   <button ion-fab  rel="tooltip" title="Multimedia" (click)="video(item,i)"  color="light"><ion-icon name="images"></ion-icon></button>\n                               </ion-fab-list>\n                             </ion-fab>   \n\n                             <ion-fab *ngIf="item.estado == \'Pendiente\'" bottom right #fab>\n                                <button color="tertiary" (click)="asignar(item)" ion-fab>Asignar</button>\n                              </ion-fab>\n                   \n                              <ion-fab *ngIf="item.estado == \'Cierre Pendiente\'" bottom right #fab>\n                                  <button color="tertiary" (click)="cerrar(item)" ion-fab>Cerrar</button>\n                                </ion-fab>\n                      \n                       <!-- this fab is placed at the center of the content viewport -->\n                      \n            \n                            \n              </div>\n               \n\n\n    \n            \n\n         </div>\n\n            \n  </ion-item>\n</div>   \n\n </ion-list>\n            \n  \n   <ion-infinite-scroll (ionInfinite)="loadMore($event)">\n      <ion-infinite-scroll-content></ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n\n</ion-content>'/*ion-inline-end:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\DENUNCIAS\denuncias-list\denuncias-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_5__providers_pdf_pdfx__["a" /* pdfx */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_2__providers__["d" /* NotificationProvider */], __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers__["a" /* Auth */]])
    ], DenunciasListPage);
    return DenunciasListPage;
}());

//# sourceMappingURL=denuncias-list.js.map

/***/ })

});
//# sourceMappingURL=160.js.map