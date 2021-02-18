webpackJsonp([182],{

/***/ 1416:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return unidadplan3CreatePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_selectable__ = __webpack_require__(446);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var unidadplan3CreatePage = /** @class */ (function () {
    function unidadplan3CreatePage(storage, msj, translateService, viewCtrl, authService, navCtrl, navParams, _FB, actionSheetCtrl, events) {
        var _this = this;
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
        this.idtipo3 = "";
        this.idtipo2 = "";
        this.idnombre = "";
        this.idnombre2 = "";
        this.idcodigo2 = "";
        this.idnombre3 = "";
        this.idniveltt = "";
        this.idjornadatt = "";
        this.idhorariott = "";
        this.iddiatt = "";
        this.idprofesortt = "";
        this.idedificio2 = [];
        this.idsalon2 = [];
        this.vgrupo = [];
        this.vgrupo2 = [];
        this.vgrupo3 = [];
        this.vidnivel = [];
        this.vidjornada = [];
        this.vidhorario = [];
        this.viddia = [];
        this.vidprofesor = [];
        // Define form validation - VERY basic!
        this.form = this._FB.group({
            idedificio: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            idsalon: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            idnivel: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            idjornada: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            idhorario: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            idprofesor: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            capacidad: [''],
            asignados: [''],
            codfac: ['']
        });
        this.translateService.get('APPX').subscribe(function (value) {
            _this.idempresa = value;
        });
    }
    unidadplan3CreatePage.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get('username').then(function (value) {
            _this.username = value;
        });
    };
    unidadplan3CreatePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.idtipo = this.navParams.data.record2.idtipo;
        this.idtipo2 = this.navParams.data.record2.idtipo2;
        this.idtipo3 = this.navParams.data.record2.idtipo3;
        this.idnombre = this.navParams.data.record2.idnombre;
        this.idnombre2 = this.navParams.data.record2.idnombre2;
        this.idcodigo2 = this.navParams.data.record2.idcodigo2;
        this.idnombre3 = this.navParams.data.record2.idnombre3;
        if (this.navParams.get("record") == null) {
            this.authService.getReg(this.idtipo2 + '/' + this.idtipo2, 'unidadnivel3s').then(function (result) {
                _this.vidnivel = result;
            }, function (err) {
                _this.msj.showError3('Error', err.error);
            });
            this.authService.getReg(this.idtipo + '/' + this.idtipo, 'unidadjornada3s').then(function (result) {
                _this.vidjornada = result;
            }, function (err) {
                _this.msj.showError3('Error', err.error);
            });
            this.authService.getReg(this.idtipo + '/' + this.idtipo, 'unidadedificio3s').then(function (result) {
                _this.vgrupo = result;
            }, function (err) {
                _this.msj.showError3('Error', err.error);
            });
            this.authService.getReg('5d6c9aa1dba66a1c88514638/unidad/' + this.idempresa + '/' + this.idempresa, 'personals').then(function (result) {
                _this.vidprofesor = result;
            }, function (err) {
                _this.msj.showError3('Error', err.error);
            });
            this.translateService.get('ITEM_CREATE_TITLE').subscribe(function (value) {
                _this.pageTitle = value;
            });
        }
        else {
            this._ID = this.navParams.data.record._id;
            this.authService.getReg(this.idtipo + '/' + this.idtipo, 'unidadedificio3s').then(function (result) {
                _this.vgrupo = result;
                _this.idedificio = _this.navParams.data.record.idedificio.id + ',' + _this.navParams.data.record.idedificio.nombre;
                _this.idedificio2 = _this.idedificio.split(',');
            }, function (err) {
                _this.msj.showError3('Error', err.error);
            });
            this.authService.getReg(this.idtipo + '/' + this.idtipo + '/' + this.navParams.data.record.idedificio.id, 'unidadedificiosalon3s').then(function (result) {
                _this.vgrupo2 = result;
                _this.idsalon = _this.navParams.data.record.idsalon.id + ',' + _this.navParams.data.record.idsalon.nombre;
                _this.idsalon2 = _this.idsalon.split(',');
            }, function (err) {
                _this.msj.showError3('Error', err.error);
            });
            this.authService.getReg(this.idtipo2 + '/' + this.idtipo2, 'unidadnivel3s').then(function (result) {
                _this.vidnivel = result;
                _this.idnivel = _this.navParams.data.record.idnivel._id;
            }, function (err) {
                _this.msj.showError3('Error', err.error);
            });
            this.authService.getReg(this.idtipo + '/' + this.idtipo, 'unidadjornada3s').then(function (result) {
                _this.vidjornada = result;
                _this.idjornada = _this.navParams.data.record.idjornada._id;
                _this.authService.getReg(_this.idjornada + '/' + _this.idtipo + '/' + _this.idtipo, 'unidadhorario3s').then(function (result) {
                    _this.vidhorario = result;
                    _this.idhorario = _this.navParams.data.record.idhorario._id;
                }, function (err) {
                    _this.msj.showError3('Error', err.error);
                });
            }, function (err) {
                _this.msj.showError3('Error', err.error);
            });
            this.authService.getReg('5d6c9aa1dba66a1c88514638/unidad/' + this.idempresa + '/' + this.idempresa, 'personals').then(function (result) {
                _this.vidprofesor = result;
                _this.idprofesor = _this.navParams.data.record.idprofesor;
            }, function (err) {
                _this.msj.showError3('Error', err.error);
            });
            this.capacidad = this.navParams.data.record.capacidad;
            this.asignados = this.navParams.data.record.asignados;
            this.codfac = this.navParams.data.record.codfac;
            this.translateService.get('ITEM_UPDATE_TITLE').subscribe(function (value) {
                _this.pageTitle = value;
            });
        }
    };
    unidadplan3CreatePage.prototype.manageGallery = function () {
        var _this = this;
        var creat = 'Actualiza';
        var asigna = 0;
        if (this.navParams.get("record") == null) {
            creat = 'Crea';
            asigna = 0;
        }
        else {
            asigna = this.form.controls['asignados'].value;
        }
        var options = {
            idtipounidad: { id: this.idtipo, nombre: this.idnombre },
            idunidadacademica: { id: this.idtipo2, nombre: this.idnombre2, codigo: this.idcodigo2 },
            idperiodo: { id: this.idtipo3, nombre: this.idnombre3 },
            idedificio: { id: this.idedificio2[0], nombre: this.idedificio2[1] },
            idsalon: { id: this.idsalon2[0], nombre: this.idsalon2[1] },
            nombre: this.idedificio2[1] + ' ' + this.idsalon2[1],
            idnivel: this.idniveltt,
            idjornada: this.idjornadatt,
            idhorario: this.idhorariott,
            iddia: this.iddiatt,
            idprofesor: this.idprofesortt,
            capacidad: this.form.controls['capacidad'].value,
            asignados: asigna,
            codfac: this.form.controls['codfac'].value,
            bitacora: { idempresa: this.idempresa, idafiliado: '', email: this.username, permiso: creat, accion: creat + ' Planificacion ' }
        };
        if (this.navParams.get("record") == null) {
            if (options) {
                this.authService.createReg('', options, 'unidadplan3s').then(function (result) {
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
                this.authService.createReg(this._ID, options, 'unidadplan3s').then(function (result) {
                    if (!_this.form.valid) {
                        return;
                    }
                    _this.viewCtrl.dismiss(result);
                }, function (err) {
                    _this.msj.showError3('Error', err.error);
                });
            }
        }
    };
    unidadplan3CreatePage.prototype.cancel = function () {
        this.viewCtrl.dismiss();
    };
    unidadplan3CreatePage.prototype.done = function () {
        if (!this.form.valid) {
            return;
        }
        //this.viewCtrl.dismiss(this.form.value);
    };
    unidadplan3CreatePage.prototype.onSelectChange = function (selectedValue) {
        var _this = this;
        this.idedificio2 = selectedValue.split(',');
        this.authService.getReg(this.idtipo + '/' + this.idtipo + '/' + this.idedificio2[0], 'unidadedificiosalon3s').then(function (result) {
            _this.vgrupo2 = result;
        }, function (err) {
            _this.msj.showError3('Error', err.error);
        });
    };
    unidadplan3CreatePage.prototype.onSelectChange2 = function (selectedValue) {
        // this.iddepartamento=aa[0]
        this.idsalon2 = selectedValue.split(',');
        for (var i = 0; i < this.vgrupo2.length; i++) {
            if (this.vgrupo2[i]._id == this.idsalon2[0]) {
                this.tcapacidad = this.vgrupo2[i].capacidad;
                this.form.controls['capacidad'].setValue(this.tcapacidad);
            }
        }
    };
    unidadplan3CreatePage.prototype.onSelectChangeA = function (selectedValue) { this.idniveltt = selectedValue; };
    unidadplan3CreatePage.prototype.onSelectChangeB = function (selectedValue) {
        var _this = this;
        this.idjornadatt = selectedValue;
        this.authService.getReg(this.idjornadatt + '/' + this.idtipo + '/' + this.idtipo, 'unidadhorario3s').then(function (result) {
            _this.vidhorario = result;
        }, function (err) {
            _this.msj.showError3('Error', err.error);
        });
    };
    unidadplan3CreatePage.prototype.onSelectChangeC = function (selectedValue) { this.idhorariott = selectedValue; };
    unidadplan3CreatePage.prototype.onSelectChangeD = function (selectedValue) { this.iddiatt = selectedValue; };
    unidadplan3CreatePage.prototype.portChange = function (event) {
        this.idprofesortt = event.value._id;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('portComponent'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_6_ionic_selectable__["a" /* IonicSelectableComponent */])
    ], unidadplan3CreatePage.prototype, "portComponent", void 0);
    unidadplan3CreatePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-unidadplan3-create',template:/*ion-inline-start:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\CALUSAC\unidadacademica\unidadplan3-create\unidadplan3-create.html"*/'<ion-header>\n    <ion-navbar>\n      <ion-title>{{pageTitle}}</ion-title>\n\n      <ion-buttons end>\n          <button (click)="cancel()" icon-only ion-button padding-right>\n              <ion-icon name="md-close"></ion-icon>\n            </button>\n          <button  (click)="manageGallery()"  [disabled]="!form.valid" icon-only ion-button padding-right>\n              <ion-icon name="done-all"></ion-icon>\n            </button>\n      </ion-buttons>\n    </ion-navbar>\n  </ion-header>\n  <ion-content padding>\n    <form     [formGroup]="form"    text-wrap>\n      <ion-list>\n\n\n\n          <ion-item margin-bottom text-wrap>\n              <ion-label >Edificio</ion-label>\n\n            <ion-select placeholder=\'Seleccione un valor\' (ionChange)="onSelectChange($event)" [(ngModel)]="idedificio" [formControl]="form.controls[\'idedificio\']">\n                <ion-option text-wrap *ngFor="let item of vgrupo" [value]="item._id+\',\'+item.nombre">{{item.nombre}}</ion-option>\n            </ion-select>\n\n\n         </ion-item>\n         <ion-item class="invalid" *ngIf="!form.controls.idedificio.valid && (form.controls.idedificio.dirty || form.controls.idedificio.touched)" text-wrap>\n           <ion-icon name="warning"></ion-icon>\n          Ingrese un Edificio valido\n          </ion-item>\n\n\n          <ion-item margin-bottom text-wrap>\n              <ion-label >Salon</ion-label>\n\n            <ion-select placeholder=\'Seleccione un valor\' (ionChange)="onSelectChange2($event)" [(ngModel)]="idsalon" [formControl]="form.controls[\'idsalon\']">\n                <ion-option text-wrap *ngFor="let item of vgrupo2" [value]="item._id+\',\'+item.nombre">{{item.nombre}}</ion-option>\n            </ion-select>\n\n\n         </ion-item>\n         <ion-item class="invalid" *ngIf="!form.controls.idsalon.valid && (form.controls.idsalon.dirty || form.controls.idsalon.touched)" text-wrap>\n           <ion-icon name="warning"></ion-icon>\n          Ingrese un Salon valido\n          </ion-item>\n\n\n<ion-item >\n    <ion-label  >Nivel (*)</ion-label>\n    <ion-select placeholder=\'Seleccione un valor\'  #select1 (ionChange)="onSelectChangeA($event)"  [(ngModel)]="idnivel" [formControl]="form.controls[\'idnivel\']" >\n       <ion-option text-wrap *ngFor="let item of vidnivel"  [value]="item._id">{{item.nombre}}</ion-option>\n   </ion-select>\n\n\n </ion-item>\n <ion-item class="invalid" *ngIf="!form.controls.idnivel.valid && (form.controls.idnivel.dirty || form.controls.idnivel.touched)" text-wrap>\n   <ion-icon name="warning"></ion-icon>\n   Ingrese un nivel valido\n  </ion-item>\n\n\n\n<ion-item >\n    <ion-label >Jornada (*)</ion-label>\n    <ion-select placeholder=\'Seleccione un valor\' #select1 (ionChange)="onSelectChangeB($event)"  [(ngModel)]="idjornada" [formControl]="form.controls[\'idjornada\']" >\n       <ion-option text-wrap *ngFor="let item of vidjornada"  [value]="item._id">{{item.nombre}}</ion-option>\n   </ion-select>\n\n\n </ion-item>\n <ion-item class="invalid" *ngIf="!form.controls.idjornada.valid && (form.controls.idjornada.dirty || form.controls.idjornada.touched)" text-wrap>\n   <ion-icon name="warning"></ion-icon>\n   Ingrese un jornada valido\n  </ion-item>\n\n\n\n\n<ion-item >\n    <ion-label  >Horario (*)</ion-label>\n\n\n\n\n\n    <ion-select placeholder=\'Seleccione un valor\'  #select1 (ionChange)="onSelectChangeC($event)"  [(ngModel)]="idhorario" [formControl]="form.controls[\'idhorario\']" >\n       <ion-option text-wrap *ngFor="let item of vidhorario"  [value]="item._id">{{item.nombre}} - {{item.nombre2}} > {{item.dia}}</ion-option>\n   </ion-select>\n\n\n </ion-item>\n <ion-item class="invalid" *ngIf="!form.controls.idhorario.valid && (form.controls.idhorario.dirty || form.controls.idhorario.touched)" text-wrap>\n   <ion-icon name="warning"></ion-icon>\n   Ingrese un horario valido\n  </ion-item>\n\n\n\n\n\n\n<ion-item >\n    <ion-label  >Profesor (*)</ion-label>\n\n    <ionic-selectable #portComponent (onChange)="portChange($event)" placeholder="Seleccione un valor"  [canSearch]="true" searchPlaceholder="Buscar un registro" [shouldBackdropClose]="false" modalCssClass="modal"   closeButtonSlot="start"             [searchFailText]="\'No Existen registros.\'"  clearButtonText="Limpiar"\n    itemValueField="_id" itemTextField="nombre" [canClear]="true"\n   [formControl]="form.controls[\'idprofesor\']"     [(ngModel)]="idprofesor" [items]="vidprofesor"     item-content text-wrap>\n  <ng-template ionicSelectableCloseButtonTemplate><ion-icon name="close-circle" style="font-size: 24px;"></ion-icon>              </ng-template>\n  <ng-template ionicSelectableMessageTemplate>Seleccione un Registro.</ng-template>\n  <ng-template ionicSelectableTitleTemplate> Docentes </ng-template>\n\n</ionic-selectable>\n\n\n\n\n </ion-item>\n <ion-item class="invalid" *ngIf="!form.controls.idprofesor.valid && (form.controls.idprofesor.dirty || form.controls.idprofesor.touched)" text-wrap>\n   <ion-icon name="warning"></ion-icon>\n   Ingrese un profesor valido\n  </ion-item>\n\n\n\n\n\n\n\n\n\n\n\n\n          <ion-item margin-bottom>\n              <ion-label>Capacidad</ion-label>\n              <ion-input\n                 type="text"\n                 [(ngModel)]="capacidad" [formControl]="form.controls[\'capacidad\']"\n                ></ion-input>\n           </ion-item>\n           <ion-item class="invalid" *ngIf="!form.controls.capacidad.valid && (form.controls.capacidad.dirty || form.controls.capacidad.touched)" text-wrap>\n             <ion-icon name="warning"></ion-icon>\n             Ingrese una capacidad del salon valida\n            </ion-item>\n\n            <ion-item margin-bottom>\n                <ion-label>Asignados</ion-label>\n                <ion-input\n                   type="text" [disabled]="true"\n                   [(ngModel)]="asignados" [formControl]="form.controls[\'asignados\']"\n                  ></ion-input>\n             </ion-item>\n\n\n\n\n\n\n             <ion-item margin-bottom>\n              <ion-label>Codigo </ion-label>\n              <ion-input\n                 type="text"\n                 [(ngModel)]="codfac" [formControl]="form.controls[\'codfac\']"\n                ></ion-input>\n           </ion-item>\n\n       </ion-list>\n    </form>\n\n\n  </ion-content>\n'/*ion-inline-end:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\CALUSAC\unidadacademica\unidadplan3-create\unidadplan3-create.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3__providers__["d" /* NotificationProvider */], __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["F" /* ViewController */], __WEBPACK_IMPORTED_MODULE_3__providers__["a" /* Auth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */]])
    ], unidadplan3CreatePage);
    return unidadplan3CreatePage;
}());

//# sourceMappingURL=unidadplan3-create.js.map

/***/ }),

/***/ 976:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unidadplan3CreatePageModule", function() { return unidadplan3CreatePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__unidadplan3_create__ = __webpack_require__(1416);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_selectable__ = __webpack_require__(446);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var unidadplan3CreatePageModule = /** @class */ (function () {
    function unidadplan3CreatePageModule() {
    }
    unidadplan3CreatePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__unidadplan3_create__["a" /* unidadplan3CreatePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__unidadplan3_create__["a" /* unidadplan3CreatePage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild(),
                __WEBPACK_IMPORTED_MODULE_4_ionic_selectable__["b" /* IonicSelectableModule */]
            ],
        })
    ], unidadplan3CreatePageModule);
    return unidadplan3CreatePageModule;
}());

//# sourceMappingURL=unidadplan3-create.module.js.map

/***/ })

});
//# sourceMappingURL=182.js.map