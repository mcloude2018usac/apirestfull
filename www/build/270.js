webpackJsonp([270],{

/***/ 1329:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CursosviewHtmlPage; });
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



var CursosviewHtmlPage = /** @class */ (function () {
    function CursosviewHtmlPage(viewCtrl, alertCtrl, regService, navCtrl, navParams, msj) {
        this.viewCtrl = viewCtrl;
        this.alertCtrl = alertCtrl;
        this.regService = regService;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.msj = msj;
        this.items = [];
    }
    CursosviewHtmlPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MensajeviewPage');
        this.titulox = this.navParams.data.titulo;
        this.seguimiento = this.navParams.data.seguimiento;
        this.idcierre = this.navParams.data.idcierre;
        //  this.linkx=this.navParams.data._id;
        this.html = this.navParams.data.html;
        /*
         this.regService.getReg(this.navParams.data.record._id + '/'+ this.navParams.data.record.idempresa + '/' + this.navParams.data.record2,'plantillads').then((data) => {
      
           this.items=data;
          
       }, (err) => {
         this.msj.showError3('Error',err.error);
       });
     */
    };
    CursosviewHtmlPage.prototype.rechazar = function () {
        var _this = this;
        var alert = this.alertCtrl.create({ title: 'Esta seguro de realizar esta operación?',
            buttons: [
                { text: 'Si',
                    handler: function () {
                        var prompt = _this.alertCtrl.create({
                            title: 'Descripcion del rechazo ',
                            inputs: [
                                {
                                    name: 'nota'
                                }
                            ],
                            buttons: [
                                {
                                    text: 'Cancelar'
                                },
                                {
                                    text: 'Aceptar',
                                    handler: function (todo) {
                                        if (todo) {
                                            _this.nota = todo.nota;
                                            var alert_1 = _this.alertCtrl.create({ title: 'Esta seguro de realizar esta operación?',
                                                buttons: [
                                                    { text: 'Si',
                                                        handler: function () {
                                                            var options = {
                                                                id: _this.idcierre,
                                                                estado: 'Asignado',
                                                                motivo3: _this.nota
                                                            };
                                                            _this.regService.createRegsinmsg('actualiza', options, 'participa3s').then(function (result) {
                                                                _this.msj.showError3('Exito', 'Seguimiento rechazado exitosamente');
                                                                _this.viewCtrl.dismiss();
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
                                            alert_1.present();
                                        }
                                    }
                                }
                            ]
                        });
                        prompt.present();
                    }
                },
                {
                    text: 'No', handler: function () { }
                }
            ]
        });
        alert.present();
    };
    CursosviewHtmlPage.prototype.cerrar = function () {
        var _this = this;
        var alert = this.alertCtrl.create({ title: 'Esta seguro de realizar esta operación?',
            buttons: [
                { text: 'Si',
                    handler: function () {
                        var options = {
                            id: _this.idcierre,
                            estado: 'Cerrado'
                        };
                        _this.regService.createRegsinmsg('actualizacierre', options, 'participa3s').then(function (result) {
                            _this.msj.showError3('Exito', 'Seguimiento cerrado exitosamente');
                            _this.viewCtrl.dismiss();
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
    CursosviewHtmlPage.prototype.dalink = function (op) {
        //this.msj.showError3('Link QR',op);
        this.regService.abrelinkinterno3(this.linkx, '_blank', '', 0);
    };
    CursosviewHtmlPage.prototype.cancel = function () {
        this.viewCtrl.dismiss();
    };
    CursosviewHtmlPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-cursosview-html',template:/*ion-inline-start:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\BLEARNING\cursosview-html\cursosview-html.html"*/'<ion-header>\n    <ion-navbar [color]="\'navbarColor\'">\n       \n      <ion-title>\n        {{titulox}}  \n      </ion-title>\n\n         \n      <ion-buttons  *ngIf="seguimiento == 1 || seguimiento == 0"  end>\n          <button (click)="cancel()" icon-only ion-button padding-right>\n              <ion-icon name="md-close"></ion-icon>\n            </button>\n      \n      </ion-buttons>\n  \n    </ion-navbar>\n   \n  </ion-header>\n  \n  <ion-content padding>\n      <ion-grid>     \n          <ion-row> \n            <ion-col col-6>\n                <button *ngIf="seguimiento == 1" ion-button full color="secondary" (click)="rechazar()" strong>\n                    Rechazar\n                  </button>\n                \n            </ion-col>\n            <ion-col col-6>\n                <button *ngIf="seguimiento == 1" ion-button full color="danger" (click)="cerrar()"  strong>\n                    Cerrar\n                  </button>\n                \n            </ion-col>\n          \n             \n           \n\n          </ion-row>\n        </ion-grid>\n\n\n    <div [froalaView]="html"></div>\n    \n    \n  \n  </ion-content>\n  '/*ion-inline-end:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\BLEARNING\cursosview-html\cursosview-html.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["F" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__providers__["a" /* Auth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers__["d" /* NotificationProvider */]])
    ], CursosviewHtmlPage);
    return CursosviewHtmlPage;
}());

//# sourceMappingURL=cursosview-html.js.map

/***/ }),

/***/ 889:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CursosviewHtmlPageModule", function() { return CursosviewHtmlPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cursosview_html__ = __webpack_require__(1329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular_froala_wysiwyg__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tinymce_tinymce_angular__ = __webpack_require__(452);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var CursosviewHtmlPageModule = /** @class */ (function () {
    function CursosviewHtmlPageModule() {
    }
    CursosviewHtmlPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__cursosview_html__["a" /* CursosviewHtmlPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__cursosview_html__["a" /* CursosviewHtmlPage */]), __WEBPACK_IMPORTED_MODULE_3_angular_froala_wysiwyg__["b" /* FroalaViewModule */], __WEBPACK_IMPORTED_MODULE_4__tinymce_tinymce_angular__["a" /* EditorModule */]
            ],
        })
    ], CursosviewHtmlPageModule);
    return CursosviewHtmlPageModule;
}());

//# sourceMappingURL=cursosview-html.module.js.map

/***/ })

});
//# sourceMappingURL=270.js.map