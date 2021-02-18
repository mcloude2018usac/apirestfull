webpackJsonp([64],{

/***/ 1125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unidadplanCreatePageModule", function() { return unidadplanCreatePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__unidadplan_create__ = __webpack_require__(1581);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var unidadplanCreatePageModule = /** @class */ (function () {
    function unidadplanCreatePageModule() {
    }
    unidadplanCreatePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__unidadplan_create__["a" /* unidadplanCreatePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__unidadplan_create__["a" /* unidadplanCreatePage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], unidadplanCreatePageModule);
    return unidadplanCreatePageModule;
}());

//# sourceMappingURL=unidadplan-create.module.js.map

/***/ }),

/***/ 1581:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return unidadplanCreatePage; });
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






var unidadplanCreatePage = /** @class */ (function () {
    function unidadplanCreatePage(storage, msj, translateService, viewCtrl, authService, navCtrl, navParams, _FB, actionSheetCtrl, events) {
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
        this.idedificio2 = [];
        this.idsalon2 = [];
        this.vgrupo = [];
        this.vgrupo2 = [];
        this.vgrupo3 = [];
        this.translateService.get('APPX').subscribe(function (value) {
            _this.idempresa = value;
        });
        this.form = this._FB.group({
            idedificio: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            idsalon: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            horario: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            idmateria: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            capacidad: [''],
            asignados: [''],
            codfac: [''],
            fexamen: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required]
        });
    }
    unidadplanCreatePage.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get('username').then(function (value) {
            _this.username = value;
        });
    };
    unidadplanCreatePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.idtipo = this.navParams.data.record2.idtipo;
        this.idtipo2 = this.navParams.data.record2.idtipo2;
        this.idtipo3 = this.navParams.data.record2.idtipo3;
        this.idnombre = this.navParams.data.record2.idnombre;
        this.idnombre2 = this.navParams.data.record2.idnombre2;
        this.idcodigo2 = this.navParams.data.record2.idcodigo2;
        this.idnombre3 = this.navParams.data.record2.idnombre3;
        this.authService.getReg(this.idtipo + '/' + this.idtipo2, 'unidadedificios').then(function (result) {
            _this.vgrupo = result;
        }, function (err) {
            _this.msj.showError3('Error', err.error);
        });
        this.authService.getReg(this.idtipo + '/' + this.idtipo2, 'facultadmaterias').then(function (result) {
            if (result) {
                if (result[0].fisica) {
                    _this.vgrupo3.push({ nombre: 'Fisica' });
                }
                if (result[0].matematica) {
                    _this.vgrupo3.push({ nombre: 'Matematica' });
                }
                if (result[0].lenguaje) {
                    _this.vgrupo3.push({ nombre: 'Lenguaje' });
                }
                if (result[0].biologia) {
                    _this.vgrupo3.push({ nombre: 'Biologia' });
                }
                if (result[0].quimica) {
                    _this.vgrupo3.push({ nombre: 'Quimica' });
                }
            }
        }, function (err) {
            _this.msj.showError3('Error', err.error);
        });
        if (this.navParams.get("record") == null) {
            this.translateService.get('ITEM_CREATE_TITLE').subscribe(function (value) {
                _this.pageTitle = value;
            });
        }
        else {
            this._ID = this.navParams.data.record._id;
            this.idedificio = this.navParams.data.record.idedificio.id + ',' + this.navParams.data.record.idedificio.nombre;
            this.idedificio2 = this.idedificio.split(',');
            this.authService.getReg(this.idtipo + '/' + this.idtipo2 + '/' + this.navParams.data.record.idedificio.id, 'unidadedificiosalons').then(function (result) {
                _this.vgrupo2 = result;
                _this.idsalon = _this.navParams.data.record.idsalon.id + ',' + _this.navParams.data.record.idsalon.nombre;
                _this.idsalon2 = _this.idsalon.split(',');
            }, function (err) {
                _this.msj.showError3('Error', err.error);
            });
            this.horario = this.navParams.data.record.idhorario;
            this.idmateria = this.navParams.data.record.idmateria;
            this.capacidad = this.navParams.data.record.capacidad;
            this.asignados = this.navParams.data.record.asignados;
            this.fexamen = this.navParams.data.record.fexamen;
            this.codfac = this.navParams.data.record.codfac;
            this.translateService.get('ITEM_UPDATE_TITLE').subscribe(function (value) {
                _this.pageTitle = value;
            });
        }
    };
    unidadplanCreatePage.prototype.manageGallery = function () {
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
            idhorario: this.form.controls['horario'].value,
            nombre: this.idedificio2[1] + ' ' + this.idsalon2[1] + ' ' + this.form.controls['horario'].value + ' ' + this.form.controls['fexamen'].value,
            idmateria: this.idmateria,
            capacidad: this.form.controls['capacidad'].value,
            asignados: asigna,
            fexamen: this.form.controls['fexamen'].value,
            codfac: this.form.controls['codfac'].value,
            bitacora: { idempresa: this.idempresa, idafiliado: '', email: this.username, permiso: creat, accion: creat + ' Planificacion ' }
        };
        if (this.navParams.get("record") == null) {
            if (options) {
                this.authService.createReg('', options, 'unidadplans').then(function (result) {
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
                this.authService.createReg(this._ID, options, 'unidadplans').then(function (result) {
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
    unidadplanCreatePage.prototype.cancel = function () {
        this.viewCtrl.dismiss();
    };
    unidadplanCreatePage.prototype.done = function () {
        if (!this.form.valid) {
            return;
        }
        //this.viewCtrl.dismiss(this.form.value);
    };
    unidadplanCreatePage.prototype.onSelectChange = function (selectedValue) {
        var _this = this;
        this.idedificio2 = selectedValue.split(',');
        this.authService.getReg(this.idtipo + '/' + this.idtipo2 + '/' + this.idedificio2[0], 'unidadedificiosalons').then(function (result) {
            _this.vgrupo2 = result;
        }, function (err) {
            _this.msj.showError3('Error', err.error);
        });
    };
    unidadplanCreatePage.prototype.onSelectChange2 = function (selectedValue) {
        // this.iddepartamento=aa[0]
        this.idsalon2 = selectedValue.split(',');
        for (var i = 0; i < this.vgrupo2.length; i++) {
            if (this.vgrupo2[i]._id == this.idsalon2[0]) {
                this.tcapacidad = this.vgrupo2[i].capacidad;
                this.form.controls['capacidad'].setValue(this.tcapacidad);
            }
        }
    };
    unidadplanCreatePage.prototype.onSelectChange3 = function (selectedValue) {
        // this.iddepartamento=aa[0]
        this.idmateria = selectedValue;
    };
    unidadplanCreatePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-unidadplan-create',template:/*ion-inline-start:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\SUN\unidadplan-create\unidadplan-create.html"*/'<ion-header>\n    <ion-navbar>\n      <ion-title>{{pageTitle}}</ion-title>\n     \n      <ion-buttons end>\n          <button (click)="cancel()" icon-only ion-button padding-right>\n              <ion-icon name="md-close"></ion-icon>\n            </button>\n          <button  (click)="manageGallery()"  [disabled]="!form.valid" icon-only ion-button padding-right>\n              <ion-icon name="done-all"></ion-icon>\n            </button>\n      </ion-buttons>\n    </ion-navbar>\n  </ion-header>\n  <ion-content padding>\n    <form     [formGroup]="form"    text-wrap>\n      <ion-list>\n        \n\n  \n          <ion-item margin-bottom text-wrap>\n              <ion-label >Edificio</ion-label>\n  \n            <ion-select (ionChange)="onSelectChange($event)" [(ngModel)]="idedificio" [formControl]="form.controls[\'idedificio\']">\n                <ion-option text-wrap *ngFor="let item of vgrupo" [value]="item._id+\',\'+item.nombre">{{item.nombre}}</ion-option>\n            </ion-select>  \n  \n  \n         </ion-item>\n         <ion-item class="invalid" *ngIf="!form.controls.idedificio.valid && (form.controls.idedificio.dirty || form.controls.idedificio.touched)" text-wrap>\n           <ion-icon name="warning"></ion-icon>\n          Ingrese un Edificio valido\n          </ion-item>\n  \n\n          <ion-item margin-bottom text-wrap>\n              <ion-label >Salon</ion-label>\n  \n            <ion-select (ionChange)="onSelectChange2($event)" [(ngModel)]="idsalon" [formControl]="form.controls[\'idsalon\']">\n                <ion-option text-wrap *ngFor="let item of vgrupo2" [value]="item._id+\',\'+item.nombre">{{item.nombre}}</ion-option>\n            </ion-select>  \n  \n  \n         </ion-item>\n         <ion-item class="invalid" *ngIf="!form.controls.idsalon.valid && (form.controls.idsalon.dirty || form.controls.idsalon.touched)" text-wrap>\n           <ion-icon name="warning"></ion-icon>\n          Ingrese un Salon valido\n          </ion-item>\n  \n          <ion-item margin-bottom text-wrap>\n              <ion-label >Materia</ion-label>\n  \n            <ion-select (ionChange)="onSelectChange3($event)" [(ngModel)]="idmateria" [formControl]="form.controls[\'idmateria\']">\n                <ion-option text-wrap *ngFor="let item of vgrupo3" [value]="item.nombre">{{item.nombre}}</ion-option>\n            </ion-select>  \n  \n  \n         </ion-item>\n         <ion-item class="invalid" *ngIf="!form.controls.idmateria.valid && (form.controls.idmateria.dirty || form.controls.idmateria.touched)" text-wrap>\n           <ion-icon name="warning"></ion-icon>\n          Ingrese una materia valida\n          </ion-item>\n  \n\n            \n          <ion-item margin-bottom>\n              <ion-label>Horario</ion-label>\n              <ion-select [(ngModel)]="horario" [formControl]="form.controls[\'horario\']">\n                  <ion-option value="07:30">07:30</ion-option>\n                  <ion-option value="8:00">8:00</ion-option>\n                  <ion-option value="8:30">8:30</ion-option>\n                  <ion-option value="9:00">9:00</ion-option>\n                  <ion-option value="9:30">9:30</ion-option>\n                  <ion-option value="10:00">10:00</ion-option>\n                  <ion-option value="10:30">10:30</ion-option>\n                  <ion-option value="11:00">11:00</ion-option>\n                  <ion-option value="11:30">11:30</ion-option>\n                  <ion-option value="12:00">12:00</ion-option>\n                  <ion-option value="13:00">13:00</ion-option>\n                  <ion-option value="13:30">13:30</ion-option>\n                  <ion-option value="14:00">14:00</ion-option>\n                  <ion-option value="14:30">14:30</ion-option>\n                  <ion-option value="15:00">15:00</ion-option>\n                  <ion-option value="15:10">15:10</ion-option>\n                  <ion-option value="15:30">15:30</ion-option>\n                  <ion-option value="16:00">16:00</ion-option>\n                  <ion-option value="16:30">16:30</ion-option>\n                  <ion-option value="17:00">17:00</ion-option>\n                  <ion-option value="18:00">18:00</ion-option>\n                   <ion-option value="19:30">19:30</ion-option>\n                  \n                </ion-select>\n\n               \n           </ion-item>\n           <ion-item class="invalid" *ngIf="!form.controls.horario.valid && (form.controls.horario.dirty || form.controls.horario.touched)" text-wrap>\n             <ion-icon name="warning"></ion-icon>\n             Ingrese un horario valido\n            </ion-item>\n           \n          <ion-item margin-bottom>\n              <ion-label>Capacidad</ion-label>\n              <ion-input\n                 type="text" \n                 [(ngModel)]="capacidad" [formControl]="form.controls[\'capacidad\']"\n                ></ion-input>\n           </ion-item>\n           <ion-item class="invalid" *ngIf="!form.controls.capacidad.valid && (form.controls.capacidad.dirty || form.controls.capacidad.touched)" text-wrap>\n             <ion-icon name="warning"></ion-icon>\n             Ingrese una capacidad del salon valida\n            </ion-item>\n   \n            <ion-item margin-bottom>\n                <ion-label>Asignados</ion-label>\n                <ion-input\n                   type="text" [disabled]="true"\n                   [(ngModel)]="asignados" [formControl]="form.controls[\'asignados\']"\n                  ></ion-input>\n             </ion-item>\n         \n             \n       <ion-item margin-bottom>\n          <ion-label>Fecha examen</ion-label>\n          <ion-datetime displayFormat="DD/MM/YYYY"  \n          [formControl]="form.controls[\'fexamen\']" [(ngModel)]="fexamen"></ion-datetime>\n        </ion-item>\n        <ion-item class="invalid" *ngIf="!form.controls.fexamen.valid && (form.controls.fexamen.dirty || form.controls.fexamen.touched)" text-wrap>\n          <ion-icon name="warning"></ion-icon>\n          {{ \'FECHAT\' | translate }}\n        </ion-item>\n     \n        <ion-item margin-bottom>\n            <ion-label>Codigo facultad asignado SUN</ion-label>\n            <ion-input\n               type="text" \n               [(ngModel)]="codfac" [formControl]="form.controls[\'codfac\']"\n              ></ion-input>\n         </ion-item>\n        \n       </ion-list>\n    </form>\n  \n  \n  </ion-content>\n'/*ion-inline-end:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\SUN\unidadplan-create\unidadplan-create.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3__providers__["d" /* NotificationProvider */], __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["F" /* ViewController */], __WEBPACK_IMPORTED_MODULE_3__providers__["a" /* Auth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */]])
    ], unidadplanCreatePage);
    return unidadplanCreatePage;
}());

//# sourceMappingURL=unidadplan-create.js.map

/***/ })

});
//# sourceMappingURL=64.js.map