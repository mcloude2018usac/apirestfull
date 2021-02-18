webpackJsonp([188],{

/***/ 1410:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Unidadpago3CreatePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(104);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var Unidadpago3CreatePage = /** @class */ (function () {
    function Unidadpago3CreatePage(alertCtrl, storage, msj, translateService, viewCtrl, authService, navCtrl, navParams, _FB, actionSheetCtrl, events) {
        var _this = this;
        this.alertCtrl = alertCtrl;
        this.storage = storage;
        this.msj = msj;
        this.translateService = translateService;
        this.viewCtrl = viewCtrl;
        this.authService = authService;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._FB = _FB;
        this.actionSheetCtrl = actionSheetCtrl;
        this.events = events;
        this.username = "";
        this.idtipo = "";
        this.idtipo2 = "";
        this.idnombre = "";
        this.idjornadatt = "";
        this.vnivel = [];
        this.vidjornada = [];
        this.translateService.get('APPX').subscribe(function (value) {
            _this.idempresa = value;
        });
        this.form = this._FB.group({
            codigo: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            nivel: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            tipo: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            idjornada: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            costo: [''],
            estado: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required]
        });
    }
    Unidadpago3CreatePage.prototype.onSelectChangeB = function (selectedValue) { this.idjornadatt = selectedValue; };
    Unidadpago3CreatePage.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get('username').then(function (value) {
            _this.username = value;
        });
    };
    Unidadpago3CreatePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.idtipo = this.navParams.data.record2.idtipo;
        this.idsede = this.navParams.data.record2.idsede;
        this.idtipo2 = this.navParams.data.record2.idtipo2;
        this.idnombre = this.navParams.data.record2.idnombre;
        this.tipogrupo = this.navParams.data.record2.tipogrupo;
        this.tipocurso = this.navParams.data.record2.tipocurso;
        if (this.navParams.get("record") == null) {
            this.authService.getReg(this.idsede + '/' + this.idsede, 'unidadjornada3s').then(function (result) {
                _this.vidjornada = result;
            }, function (err) {
                _this.msj.showError3('Error', err.error);
            });
            this.authService.getReg2b(this.navParams.data.record2.idtipo2 + '/' + this.navParams.data.record2.idtipo2, 'unidadnivel3s').then(function (result) {
                _this.vnivel = result;
            }, function (err) {
                _this.msj.showError3('Error', err.error);
            });
            this.translateService.get('ITEM_CREATE_TITLE').subscribe(function (value) {
                _this.pageTitle = value;
            });
        }
        else {
            this._ID = this.navParams.data.record._id;
            this.codigo = this.navParams.data.record.codigo;
            this.authService.getReg(this.idsede + '/' + this.idsede, 'unidadjornada3s').then(function (result) {
                _this.vidjornada = result;
                _this.idjornada = _this.navParams.data.record.jornada._id;
                _this.idjornadatt = _this.navParams.data.record.jornada._id;
            }, function (err) {
                _this.msj.showError3('Error', err.error);
            });
            this.authService.getReg2b(this.navParams.data.record2.idtipo2 + '/' + this.navParams.data.record2.idtipo2, 'unidadnivel3s').then(function (result) {
                _this.vnivel = result;
                _this.nivel = _this.navParams.data.record.nivel._id + ',' + _this.navParams.data.record.nivel.nombre;
            }, function (err) {
                _this.msj.showError3('Error', err.error);
            });
            this.niveltt = this.navParams.data.record.nivel._id;
            this.nivelntt = this.navParams.data.record.nivel.nombre;
            this.estado = this.navParams.data.record.estado;
            this.tipo = this.navParams.data.record.tipo;
            this.costo = this.navParams.data.record.costo;
            this.translateService.get('ITEM_UPDATE_TITLE').subscribe(function (value) {
                _this.pageTitle = value;
            });
        }
    };
    Unidadpago3CreatePage.prototype.manageGallery = function () {
        var _this = this;
        var creat = 'Actualiza';
        if (this.navParams.get("record") == null) {
            creat = 'Crea';
        }
        var options = {
            idtipounidad: this.idtipo,
            idunidadacademica: this.idtipo2,
            tipogrupo: this.tipogrupo,
            tipocurso: this.tipocurso,
            codigo: this.form.controls['codigo'].value,
            nivel: this.niveltt,
            nombre: this.nivelntt,
            jornada: this.idjornadatt,
            tipo: this.form.controls['tipo'].value,
            estado: this.form.controls['estado'].value,
            costo: this.form.controls['costo'].value,
            operacion: 'otro',
            bitacora: { idempresa: this.idempresa, idafiliado: '', email: this.username, permiso: creat, accion: creat + ' pagoes calusac' }
        };
        if (this.navParams.get("record") == null) {
            if (options) {
                this.authService.createReg('', options, 'unidadpago3s').then(function (result) {
                    if (!_this.form.valid) {
                        return;
                    }
                    _this.viewCtrl.dismiss(result);
                }, function (err) {
                    _this.msj.showError3('Error', err.error);
                });
            }
        }
        else {
            if (options) {
                this.authService.createReg(this._ID, options, 'unidadpago3s').then(function (result) {
                    if (!_this.form.valid) {
                        return;
                    }
                    console.log(result);
                    _this.viewCtrl.dismiss(result);
                }, function (err) {
                    _this.msj.showError3('Error', err.error);
                });
            }
        }
    };
    Unidadpago3CreatePage.prototype.manageGallery2 = function () {
        var _this = this;
        var select = {
            title: 'Seleccione Niveles',
            message: 'Niveles', inputs: [],
            buttons: [{ text: 'Cancelar' }, { text: 'Crear niveles', handler: function (todo) {
                        //buscamos
                        var creat = 'Actualiza2';
                        var options = {
                            idtipounidad: _this.idtipo,
                            idunidadacademica: _this.idtipo2,
                            tipogrupo: _this.tipogrupo,
                            tipocurso: _this.tipocurso,
                            codigo: _this.form.controls['codigo'].value,
                            nivel: _this.niveltt,
                            nombre: _this.nivelntt,
                            jornada: _this.idjornadatt,
                            tipo: _this.form.controls['tipo'].value,
                            estado: _this.form.controls['estado'].value,
                            costo: _this.form.controls['costo'].value,
                            operacion: 'actualiza2',
                            niveles: todo,
                            bitacora: { idempresa: _this.idempresa, idafiliado: '', email: _this.username, permiso: creat, accion: creat + ' pagoes calusac' }
                        };
                        if (options) {
                            _this.authService.createReg(_this._ID, options, 'unidadpago3s').then(function (result) {
                                if (!_this.form.valid) {
                                    return;
                                }
                                _this.viewCtrl.dismiss(result);
                            }, function (err) {
                                _this.msj.showError3('Error', err.error);
                            });
                        }
                    } }]
        };
        var aa;
        aa = this.vnivel;
        for (var i = 0; i < aa.length; i++) {
            select.inputs.push({ name: 'myInput', type: 'checkbox', label: aa[i].nombre, value: aa[i]._id + '°' + aa[i].codigo + '°' + aa[i].nombre });
        }
        var newAlert = this.alertCtrl.create(select);
        newAlert.present();
    };
    Unidadpago3CreatePage.prototype.cancel = function () {
        this.viewCtrl.dismiss();
    };
    Unidadpago3CreatePage.prototype.done = function () {
        if (!this.form.valid) {
            return;
        }
        //this.viewCtrl.dismiss(this.form.value);
    };
    Unidadpago3CreatePage.prototype.onSelectChange = function (selectedValue) {
        var aa = selectedValue.split(',');
        this.niveltt = aa[0];
        this.nivelntt = aa[1];
    };
    Unidadpago3CreatePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-Unidadpago3-create',template:/*ion-inline-start:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\CALUSAC\unidadacademica\unidadpago3-create\unidadpago3-create.html"*/'<ion-header>\n    <ion-navbar>\n      <ion-title>{{pageTitle}}</ion-title>\n\n      <ion-buttons end>\n          <button  (click)="manageGallery2()"  [disabled]="!form.valid" icon-only ion-button padding-right>\n              <ion-icon name="apps"></ion-icon>\n            </button>\n\n          <button (click)="cancel()" icon-only ion-button padding-right>\n              <ion-icon name="md-close"></ion-icon>\n            </button>\n          <button  (click)="manageGallery()"  [disabled]="!form.valid" icon-only ion-button padding-right>\n              <ion-icon name="done-all"></ion-icon>\n            </button>\n\n\n\n\n      </ion-buttons>\n    </ion-navbar>\n  </ion-header>\n  <ion-content padding>\n    <form     [formGroup]="form"    text-wrap>\n      <ion-list>\n          <ion-item margin-bottom>\n              <ion-label>Tipo</ion-label>\n              <ion-select [(ngModel)]="tipo" [formControl]="form.controls[\'tipo\']">\n                <ion-option value="Estudiante">Estudiante</ion-option>\n                <ion-option value="Trabajador">Trabajador</ion-option>\n                <ion-option value="Hijo Trabajador Adolescente">Hijo Trabajador Adolescente</ion-option>\n                <ion-option value="Hijo Trabajador Adulto">Hijo Trabajador Adulto</ion-option>\n\n\n                <ion-option value="Población">Población</ion-option>\n                <ion-option value="Adolescente">Adolescente</ion-option>\n                <ion-option value="Extranjero">Extranjero no centroamericano</ion-option>\n                <ion-option value="Extranjerocentroamericano">Extranjero centroamericano</ion-option>\n              </ion-select>\n           </ion-item>\n           <ion-item class="invalid" *ngIf="!form.controls.tipo.valid && (form.controls.tipo.dirty || form.controls.tipo.touched)" text-wrap>\n            <ion-icon name="warning"></ion-icon>\n            Ingrese un tipo valido\n           </ion-item>\n\n        <ion-item margin-bottom>\n          <ion-label>Codigo</ion-label>\n          <ion-input\n             type="Number"\n             [(ngModel)]="codigo" [formControl]="form.controls[\'codigo\']"\n            ></ion-input>\n       </ion-item>\n       <ion-item class="invalid" *ngIf="!form.controls.codigo.valid && (form.controls.codigo.dirty || form.controls.codigo.touched)" text-wrap>\n         <ion-icon name="warning"></ion-icon>\n         {{ \'CODIGOT\' | translate }}\n        </ion-item>\n\n\n        <ion-item margin-bottom text-wrap>\n            <ion-label >Nivel?</ion-label>\n\n          <ion-select (ionChange)="onSelectChange($event)" [(ngModel)]="nivel" [formControl]="form.controls[\'nivel\']">\n              <ion-option text-wrap *ngFor="let item of vnivel" [value]="item._id + \',\' +item.nombre" >{{item.nombre}} </ion-option>\n          </ion-select>\n\n\n          </ion-item>\n\n          <ion-item class="invalid" *ngIf="!form.controls.nivel.valid\n          && (form.controls.nivel.dirty || form.controls.nivel.touched)" text-wrap>\n              <ion-icon name="warning"></ion-icon>\n              Ingrese una nivel valido\n          </ion-item>\n\n          <ion-item >\n            <ion-label >Jornada (*)</ion-label>\n            <ion-select  #select1 (ionChange)="onSelectChangeB($event)"  [(ngModel)]="idjornada" [formControl]="form.controls[\'idjornada\']" >\n               <ion-option text-wrap *ngFor="let item of vidjornada"  [value]="item._id">{{item.nombre}}</ion-option>\n           </ion-select>\n\n\n         </ion-item>\n         <ion-item class="invalid" *ngIf="!form.controls.idjornada.valid && (form.controls.idjornada.dirty || form.controls.idjornada.touched)" text-wrap>\n           <ion-icon name="warning"></ion-icon>\n           Ingrese un jornada valido\n          </ion-item>\n\n\n           <ion-item margin-bottom>\n              <ion-label>Costo</ion-label>\n              <ion-input\n                 type="text"\n                 [(ngModel)]="costo" [formControl]="form.controls[\'costo\']"\n                ></ion-input>\n           </ion-item>\n           <ion-item class="invalid" *ngIf="!form.controls.costo.valid && (form.controls.costo.dirty || form.controls.costo.touched)" text-wrap>\n             <ion-icon name="warning"></ion-icon>\n             Ingrese un costo valido\n            </ion-item>\n\n            <ion-item margin-bottom>\n              <ion-label>Estado</ion-label>\n              <ion-select [(ngModel)]="estado" [formControl]="form.controls[\'estado\']">\n                <ion-option value="Activo">Activo</ion-option>\n                <ion-option value="Inactivo">Inactivo</ion-option>\n              </ion-select>\n           </ion-item>\n           <ion-item class="invalid" *ngIf="!form.controls.estado.valid && (form.controls.estado.dirty || form.controls.estado.touched)" text-wrap>\n            <ion-icon name="warning"></ion-icon>\n            {{ \'ESTADOT\' | translate }}\n           </ion-item>\n\n\n       </ion-list>\n    </form>\n\n\n  </ion-content>\n'/*ion-inline-end:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\CALUSAC\unidadacademica\unidadpago3-create\unidadpago3-create.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3__providers__["d" /* NotificationProvider */], __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["F" /* ViewController */], __WEBPACK_IMPORTED_MODULE_3__providers__["a" /* Auth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */]])
    ], Unidadpago3CreatePage);
    return Unidadpago3CreatePage;
}());

//# sourceMappingURL=unidadpago3-create.js.map

/***/ }),

/***/ 970:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Unidadpago3CreatePageModule", function() { return Unidadpago3CreatePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__unidadpago3_create__ = __webpack_require__(1410);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var Unidadpago3CreatePageModule = /** @class */ (function () {
    function Unidadpago3CreatePageModule() {
    }
    Unidadpago3CreatePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__unidadpago3_create__["a" /* Unidadpago3CreatePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__unidadpago3_create__["a" /* Unidadpago3CreatePage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], Unidadpago3CreatePageModule);
    return Unidadpago3CreatePageModule;
}());

//# sourceMappingURL=unidadpago3-create.module.js.map

/***/ })

});
//# sourceMappingURL=188.js.map