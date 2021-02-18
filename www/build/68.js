webpackJsonp([68],{

/***/ 1121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultadopcbPageModule", function() { return ResultadopcbPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__resultadopcb__ = __webpack_require__(1577);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pipes_pipes_module__ = __webpack_require__(445);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ResultadopcbPageModule = /** @class */ (function () {
    function ResultadopcbPageModule() {
    }
    ResultadopcbPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__resultadopcb__["a" /* ResultadopcbPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__resultadopcb__["a" /* ResultadopcbPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild(),
                __WEBPACK_IMPORTED_MODULE_4__pipes_pipes_module__["a" /* PipesModule */]
            ],
        })
    ], ResultadopcbPageModule);
    return ResultadopcbPageModule;
}());

//# sourceMappingURL=resultadopcb.module.js.map

/***/ }),

/***/ 1577:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultadopcbPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_pdf_pdfx__ = __webpack_require__(447);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_notification_notification__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ResultadopcbPage = /** @class */ (function () {
    function ResultadopcbPage(translateService, alertCtrl, msj, storage, regService, viewCtrl, Pdfx, navCtrl, navParams, _FB, actionSheetCtrl, events) {
        var _this = this;
        this.translateService = translateService;
        this.alertCtrl = alertCtrl;
        this.msj = msj;
        this.storage = storage;
        this.regService = regService;
        this.viewCtrl = viewCtrl;
        this.Pdfx = Pdfx;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._FB = _FB;
        this.actionSheetCtrl = actionSheetCtrl;
        this.events = events;
        this.items = [];
        this.tiposus = [];
        this.gLimit = 50;
        this.personalid = "";
        this.username = "";
        this.nombre = '';
        this.translateService.get('APPX').subscribe(function (value) {
            _this.idempresa = value;
        });
        this.form = this._FB.group({
            nit: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required])],
        });
    }
    ResultadopcbPage.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get('username').then(function (value) {
            _this.username = value;
            _this.storage.get('tiposus').then(function (value) {
                _this.tiposus = value.split(',');
                _this.novp = _this.tiposus[5];
                _this.personalid = _this.tiposus[3];
                _this.cui = _this.tiposus[2];
                if (_this.tiposus[6] == 'user') {
                    if (_this.tiposus[5] == '' || _this.tiposus[5] == undefined) {
                        var prompt_1 = _this.alertCtrl.create({
                            title: ' Ingrese CARNE / NOV',
                            message: 'Ingrese CARNE / NOV para poder actualizar su perfil y gestionar esta acción',
                            inputs: [
                                {
                                    name: 'NOV',
                                    type: "number"
                                }
                            ],
                            buttons: [
                                {
                                    text: 'Cancelar',
                                    handler: function () {
                                        _this.navCtrl.pop();
                                    }
                                },
                                {
                                    text: 'Buscar',
                                    handler: function (todo) {
                                        var nn = todo.NOV;
                                        nn = String(nn).trim();
                                        if (nn.lenght > 10) {
                                            _this.msj.showError3('Error', 'Ingrese Numero de Orientación Vocacional (NOV) ó Carné Universitario válido menor a 11 digitos');
                                            return;
                                        }
                                        if (todo.NOV.trim().length > 0 && todo.NOV.trim().length <= 10) {
                                            if (Number(todo.NOV)) {
                                                _this.regService.validacarnenov(todo.NOV).then(function (data2) {
                                                    var vec = (data2);
                                                    var cad = vec.split('°');
                                                    _this.nombre = '';
                                                    if (cad[1] == 'undefined' || cad[1] == '' || cad[1] == undefined) {
                                                        _this.msj.showError3('Error', 'Ingrese un Número de Orientación Vocacional (NOV) ó Carné Universitario válido');
                                                        return;
                                                    }
                                                    var msj = '';
                                                    if (cad[0] == 'CARNE') {
                                                        _this.nombre = cad[1];
                                                        if (cad[2]) {
                                                            _this.cui = cad[2];
                                                        }
                                                        msj = 'CARNE: ' + todo.NOV + '<p>' + 'Nombre: ' + _this.nombre + '<p>Cui: ' + _this.cui + '<p>¿Desea registrar esta información a su cuenta?';
                                                    }
                                                    else {
                                                        _this.nombre = cad[1];
                                                        msj = 'NOV: ' + todo.NOV + '<p>' + 'Nombre: ' + _this.nombre + '<p>¿Desea registrar esta información a su cuenta?';
                                                    }
                                                    var alert = _this.alertCtrl.create({ title: msj,
                                                        buttons: [
                                                            { text: 'Si',
                                                                handler: function () {
                                                                    //ACTUALIZAR NOMBRE Y NOV/CARNET Y NOMBRE EN DB
                                                                    if (_this.nombre == '' || _this.nombre == '   ' || _this.nombre == 'undefined') {
                                                                        _this.msj.showError3('Error', 'Nombre  no valido , no es posible relacionar este suscriptor');
                                                                        _this.isDisablednit = true;
                                                                        _this.navCtrl.pop();
                                                                        return;
                                                                    }
                                                                    var credentials = {
                                                                        _id: _this.personalid,
                                                                        nombre: _this.nombre,
                                                                        cui: _this.cui,
                                                                        nov: todo.NOV,
                                                                        bitacora: { idempresa: _this.idempresa, idafiliado: '', email: _this.username, permiso: 'Actualiza', accion: 'Actualiza nov y cui perfil' }
                                                                    };
                                                                    _this.regService.createReg('actualizanov', credentials, 'personals').then(function (result) {
                                                                        _this.storage.set('tiposus', (_this.tiposus[0] + ',' + _this.tiposus[1] + ',' + _this.cui + ',' + _this.tiposus[3] + ',' + _this.nombre + ',' + todo.NOV + ',' + _this.tiposus[6] + ',' + _this.tiposus[7] + ',' + _this.tiposus[8] + ',' + _this.tiposus[9]));
                                                                        _this.novp = todo.NOV;
                                                                        _this.form.controls['nit'].setValue(_this.novp);
                                                                    }, function (err) {
                                                                        _this.msj.showError3('Error', 'Perfil no valido, comuniquese con el administrador');
                                                                        _this.isDisablednit = true;
                                                                        _this.navCtrl.pop();
                                                                    });
                                                                }
                                                            },
                                                            {
                                                                text: 'No', handler: function () { }
                                                            }
                                                        ]
                                                    });
                                                    alert.present();
                                                }, function (err) {
                                                    _this.msj.showError3('Error', err);
                                                });
                                            }
                                            else {
                                                _this.msj.showError3('Error', 'NOV / CARNE invalido');
                                            }
                                        }
                                        else {
                                            _this.msj.showError3('Error', 'NOV / CARNE invalido');
                                        }
                                    }
                                }
                            ]
                        });
                        prompt_1.present();
                    }
                    else {
                        _this.isDisablednit = false;
                        _this.form.controls['nit'].setValue(_this.novp);
                    }
                }
                else {
                    _this.isDisablednit = true;
                }
            });
        });
    };
    ResultadopcbPage.prototype.ionViewDidLoad = function () {
    };
    ResultadopcbPage.prototype.loadMore = function (ev) {
        this.gLimit += 50;
        setTimeout(function () { return ev.complete(); }, 1000);
    };
    ResultadopcbPage.prototype.manageGallery = function () {
        var _this = this;
        //verificar si es un nov valido
        var aa = this.form.controls['nit'].value;
        if (Number(aa) > 0) {
            this.regService.getReglibreSext2(this.form.controls['nit'].value + '/resultado', 'estudiantepcb').then(function (data) {
                _this.items = data;
                _this.Pdfx.dapcb(_this.form.controls['nit'].value, 'si', data);
            }, function (err) {
                _this.msj.showError3('Resultado', 'Resultado no encontrado.');
            });
        }
        else {
            this.msj.showError3('Error', 'Ingrese un Número de Orientación Vocacional / carné valido');
        }
    };
    ResultadopcbPage.prototype.cancel = function () {
        this.viewCtrl.dismiss();
    };
    ResultadopcbPage.prototype.done = function () {
        if (!this.form.valid) {
            return;
        }
        //this.viewCtrl.dismiss(this.form.value);
    };
    ResultadopcbPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('fileInput'),
        __metadata("design:type", Object)
    ], ResultadopcbPage.prototype, "fileInput", void 0);
    ResultadopcbPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-resultadopcb',template:/*ion-inline-start:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\SUN\resultadopcb\resultadopcb.html"*/'\n<ion-header no-border class="opaque" >\n  <ion-navbar  no-border-bottom hideBackButton="true">\n      <ion-buttons left>\n        <button ion-button icon-only (click)="goBack()">\n          <ion-icon name="arrow-back"></ion-icon>\n        </button>\n      </ion-buttons>\n\n      <ion-title>\n      Resultado PCB\n      </ion-title>\n\n    </ion-navbar>\n\n\n  </ion-header>\n\n  <ion-content fullscreen>\n    <form     [formGroup]="form"   text-wrap>\n      <ion-list>\n          <ion-item margin-bottom text-wrap>\n              <ion-label class="my-label18" color="secondary2"  stacked>\n                Ingrese Número de Orientación Vocacional / carné:</ion-label>\n              <ion-input [(ngModel)]="nit" [disabled]="!(isDisablednit)"\n               type="number" [formControl]="form.controls[\'nit\']"></ion-input>\n\n           </ion-item>\n           <ion-item class="invalid" *ngIf="!form.controls.nit.valid && (form.controls.nit.dirty || form.controls.nit.touched)" text-wrap>\n            <ion-icon name="warning"></ion-icon>\n           Ingrese un Número de Orientación Vocacional valido\n           </ion-item>\n           <ion-row>\n            <ion-col text-center>\n              <button  ion-button block color="secondary" (click)="manageGallery()" [disabled]="!form.valid" strong>\n                Buscar\n              </button>\n            </ion-col>\n          </ion-row>\n\n\n        </ion-list>\n      </form>\n\n          <ion-list   *ngFor="let item of items  | LimitPipe: gLimit ;" text-wrap>\n            <ion-item>\n\n            <h2>Nombre: {{item.NOMBRES}}</h2>\n            <p *ngIf=" item.ID_MATERIA == \'1\'" > Materia: Biología  </p>\n            <p *ngIf=" item.ID_MATERIA == \'2\'" > Materia: Fisica  </p>\n            <p *ngIf=" item.ID_MATERIA == \'3\'" > Materia: Lenguaje  </p>\n            <p *ngIf=" item.ID_MATERIA == \'4\'" > Materia: Matemática  </p>\n            <p *ngIf=" item.ID_MATERIA == \'5\'" > Materia: Quimica  </p>\n\n\n            <p>Fecha de calificación: {{item.FECHA_EVALUACION  }}</p>\n            <p>No. oportunidad: {{item.NO_OPORTUNIDAD}}</p>\n            <p *ngIf=" item.APROBACION == \'1\'" style="color:blue" >Resultado: Satisfactorio  </p>\n            <p *ngIf=" item.APROBACION == \'2\'" style="color:red" >Resultado: No satisfactorio  </p>\n\n\n            <p>Año evaluacion: {{item.ANIO_EVALUACION}}</p>\n\n          </ion-item>\n\n\n\n    </ion-list>\n\n\n\n    <ion-infinite-scroll (ionInfinite)="loadMore($event)">\n      <ion-infinite-scroll-content></ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n\n\n  </ion-content>\n'/*ion-inline-end:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\SUN\resultadopcb\resultadopcb.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_5__providers_notification_notification__["a" /* NotificationProvider */], __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__["a" /* Auth */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["F" /* ViewController */], __WEBPACK_IMPORTED_MODULE_3__providers_pdf_pdfx__["a" /* pdfx */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */]])
    ], ResultadopcbPage);
    return ResultadopcbPage;
}());

//# sourceMappingURL=resultadopcb.js.map

/***/ })

});
//# sourceMappingURL=68.js.map