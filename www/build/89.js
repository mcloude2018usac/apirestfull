webpackJsonp([89],{

/***/ 1095:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModificaUserPageModule", function() { return ModificaUserPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modifica_user__ = __webpack_require__(1551);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pipes_pipes_module__ = __webpack_require__(445);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ModificaUserPageModule = /** @class */ (function () {
    function ModificaUserPageModule() {
    }
    ModificaUserPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__modifica_user__["a" /* ModificaUserPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__modifica_user__["a" /* ModificaUserPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild(),
                __WEBPACK_IMPORTED_MODULE_4__pipes_pipes_module__["a" /* PipesModule */]
            ],
        })
    ], ModificaUserPageModule);
    return ModificaUserPageModule;
}());

//# sourceMappingURL=modifica-user.module.js.map

/***/ }),

/***/ 1551:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModificaUserPage; });
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





var ModificaUserPage = /** @class */ (function () {
    //private barcodeScanner:BarcodeScanner,
    function ModificaUserPage(alertCtrl, storage, msj, translateService, navCtrl, navParams, regService) {
        var _this = this;
        this.alertCtrl = alertCtrl;
        this.storage = storage;
        this.msj = msj;
        this.translateService = translateService;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.regService = regService;
        this.loading = true;
        this.items = [];
        this.items2 = [];
        this.generated = '';
        this.permisom = [];
        this.gLimit = 50;
        this.PageSegmet = 'foods';
        this.gSearchQuery = '';
        this.username = "";
        this.pingreso = false;
        this.pconsulta = false;
        this.peliminacion = false;
        this.pcreacion = false;
        this.pactualizacion = false;
        this.translateService.get('APPX').subscribe(function (value) {
            _this.idempresa = value;
        });
    }
    ModificaUserPage.prototype.clearSearchg = function () {
        this.gSearchQuery = '';
    };
    ModificaUserPage.prototype.showFilter = function () {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'Ingrese CUI/NOV/EMAIL/NO PASAPORTE para buscar a usuario',
            inputs: [
                {
                    name: 'dpi'
                }
            ],
            buttons: [
                {
                    text: 'Cancelar'
                },
                {
                    text: 'Buscar',
                    handler: function (todo) {
                        if (todo) {
                            _this.dpi = todo.dpi;
                            _this.regService.getReg(todo.dpi + '/actualizauser/todos/' + _this.idempresa, 'personals').then(function (data) {
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
    ModificaUserPage.prototype.pideregistros = function () {
        var _this = this;
        var self = this;
        self.loading = true;
        this.regService.getReg('todos/todos/' + this.idempresa, 'modulos').then(function (data) {
            _this.items = data;
            self.loading = false;
        }, function (err) {
            _this.msj.showError3('Error', err.error);
            // this.translateService.get('NO_OPERACION').subscribe((value) => { this.msj.showError3('Error',value);  })  
        });
    };
    ModificaUserPage.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get('username').then(function (value) {
            _this.username = value;
        });
    };
    ModificaUserPage.prototype.ionViewDidLoad = function () {
        console.log(this.navParams.get("permiso"));
        // this.pideregistros();
    };
    ModificaUserPage.prototype.loadMore = function (ev) {
        this.gLimit += 50;
        setTimeout(function () { return ev.complete(); }, 1000);
    };
    ModificaUserPage.prototype.cambioclave = function (item) {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'Cambio de Contraseña',
            message: '',
            inputs: [
                {
                    name: 'clave1', value: 'Aspi123@',
                    placeholder: 'Ingrese Contraseña nueva'
                }
            ],
            buttons: [
                {
                    text: 'Cancelar'
                },
                {
                    text: 'Actualizar Contraseña',
                    handler: function (todo) {
                        if (todo) {
                            var credentials = {
                                idempresa: _this.idempresa,
                                email: item.email,
                                password: todo.clave1,
                                bitacora: { idempresa: _this.idempresa, idafiliado: '', email: _this.username, permiso: 'Actualiza', accion: 'Cambia clave' }
                            };
                            _this.regService.createAPISINTOKEN(credentials, '/api/auth/register2').then(function (result) {
                                _this.msj.showError3('Exito', 'Operación realizada con exito.');
                            }, function (err) {
                                _this.msj.showError3('Advertencia', 'ERROR al actualizar registro');
                            });
                        }
                    }
                }
            ]
        });
        prompt.present();
    };
    ModificaUserPage.prototype.updateRecord = function (item, no) {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'Modifique datos',
            inputs: [{ name: 'email', value: item.email }, { name: 'dpi', value: item.cui },
                { name: 'nombre', value: item.nombre }, { name: 'telefono', value: item.telefono },
                { name: 'direccion', value: item.direccion }, { name: 'nov', value: item.nov },
                { name: 'estadoemail', value: item.estadoemail }],
            buttons: [
                {
                    text: 'Cancelar'
                },
                {
                    text: 'Actualizar',
                    handler: function (todo) {
                        if (todo) {
                            var options = {
                                _id: item._id,
                                email: todo.email,
                                nombre: todo.nombre,
                                cui: todo.dpi,
                                direccion: todo.direccion,
                                telefono: todo.telefono,
                                nov: todo.nov,
                                estadoemail: todo.estadoemail,
                                bitacora: { idempresa: _this.idempresa, idafiliado: '', email: _this.username, permiso: 'Actualiza', accion: 'actualiza usuario ' }
                            };
                            //  this.regService.createReg(this._ID,options,'personals').then((result) => {
                            _this.regService.createReg('actualiza2', options, 'personals').then(function (result) {
                                _this.regService.getReg(_this.dpi + '/actualizauser/todos/' + _this.idempresa, 'personals').then(function (data) {
                                    _this.items = data;
                                }, function (err) {
                                    _this.msj.showError3('Error', err.error);
                                });
                            }, function (err) {
                                _this.msj.showError3('Error', err.error);
                            });
                            console.log(todo);
                        }
                    }
                }
            ]
        });
        prompt.present();
    };
    ModificaUserPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-modifica-user',template:/*ion-inline-start:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\SEGURIDAD\modifica-user\modifica-user.html"*/'<ion-header>\n  <ion-navbar [color]="\'navbarUser\'">\n      <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n    <ion-title>\n      Modificación de usuario\n    </ion-title>\n    <ion-buttons end>\n      <button (click)="showFilter()" icon-only ion-button padding-right>\n        <ion-icon name="funnel"></ion-icon>\n      </button>\n      </ion-buttons>\n  </ion-navbar>\n \n\n</ion-header>\n\n<ion-content padding>\n   \n             \n   <ion-list >\n    \n      <ion-item    *ngFor="let item of items ;let i = index;" text-wrap>\n          <ion-card>\n                  <ion-row>\n                          <ion-col    text-right>\n                                  No: {{i+1}}  \n                          </ion-col>    \n                          <ion-item text-wrap>\n                            <button ion-item   (click)="updateRecord(item,i)">\n                            \n                              <h2>Email: {{item.email}}</h2>  \n                                 <p>Dpi /cui: {{item.cui}}</p>\n                              <p>Nov / cod pasaporte: {{item.nov}}</p>\n                              <p>Email: {{item.email}}</p>\n                              <p>Nombre: {{item.nombre}}</p>\n                              <p>Telefono: {{item.telefono}}</p>\n                                <p>Direccion: {{item.direccion}}</p>\n                              <p>Habilito suscripción de correo (1=si , 0=no): {{item.estadoemail}}</p>\n                            </button>\n                          </ion-item>\n                      <ion-col    text-right>\n                                              Estado: {{item.estado}}\n                                      </ion-col>\n                          </ion-row>\n  \n                          <ion-row no-padding>\n                              <ion-col>\n                                <button  (click)="cambioclave(item)" ion-button clear small  icon-start>\n                                  <ion-icon name=\'key\'></ion-icon>\n                                  Cambio clave\n                                </button>\n                              </ion-col>\n                             \n                             \n                            </ion-row>\n              \n            </ion-card>\n                </ion-item>\n   </ion-list>\n   <ion-infinite-scroll (ionInfinite)="loadMore($event)">\n      <ion-infinite-scroll-content></ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n\n    <ion-fab bottom right #fab>\n        <button ion-fab [hidden]="!pcreacion" (click)="addRecord()"><ion-icon name="add"></ion-icon></button>\n        \n    </ion-fab>\n\n</ion-content>'/*ion-inline-end:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\SEGURIDAD\modifica-user\modifica-user.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_2__providers__["d" /* NotificationProvider */], __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers__["a" /* Auth */]])
    ], ModificaUserPage);
    return ModificaUserPage;
}());

//# sourceMappingURL=modifica-user.js.map

/***/ })

});
//# sourceMappingURL=89.js.map