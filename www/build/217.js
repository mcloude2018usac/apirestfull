webpackJsonp([217],{

/***/ 1372:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return unidadplan4aCreatePage; });
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







var unidadplan4aCreatePage = /** @class */ (function () {
    function unidadplan4aCreatePage(storage, msj, translateService, viewCtrl, authService, navCtrl, navParams, _FB, actionSheetCtrl, events) {
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
        this.idtipogrupo = "";
        this.ididiomatt = "";
        this.idtipogrupott = "";
        this.idprofesortt = "";
        this.vidioma = [];
        this.vidtipogrupo = [];
        this.idedificio2 = [];
        this.idsalon2 = [];
        this.vgrupo = [];
        this.vgrupo2 = [];
        this.vgrupo3 = [];
        this.vidnivel = [];
        this.vidjornada = [];
        this.vididhorario = [];
        this.vididdia = [];
        this.vidprofesor = [];
        // Define form validation - VERY basic!
        this.form = this._FB.group({
            ididioma: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            idtipogrupo: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            idedificio: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            idsalon: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            iddia: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            idhora: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            idprofesor: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            comentario: [''],
            capacidad: [''],
            asignados: [''],
        });
        this.translateService.get('APPX').subscribe(function (value) {
            _this.idempresa = value;
        });
    }
    unidadplan4aCreatePage.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get('username').then(function (value) {
            _this.username = value;
        });
    };
    unidadplan4aCreatePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.idtipo = this.navParams.data.record2.idtipo;
        this.idtipo2 = this.navParams.data.record2.idtipo2;
        this.idtipo3 = this.navParams.data.record2.idtipo3;
        this.idnombre = this.navParams.data.record2.idnombre;
        this.idnombre2 = this.navParams.data.record2.idnombre2;
        this.idcodigo2 = this.navParams.data.record2.idcodigo2;
        this.idnombre3 = this.navParams.data.record2.idnombre3;
        if (this.navParams.get("record") == null) {
            this.authService.getReg(this.idtipo + '/' + this.idtipo, 'unidadidioma3s').then(function (result) {
                _this.vidioma = result;
            }, function (err) {
                _this.msj.showError3('Error', err.error);
            });
            this.authService.getReg(this.idtipo + '/' + this.idtipo, 'unidadtipogrupo3s').then(function (result) {
                _this.vidtipogrupo = result;
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
            this.authService.getReg(this.idtipo + '/' + this.idtipo, 'unidadtipogrupo3s').then(function (result) {
                _this.vidtipogrupo = result;
                _this.idtipogrupo = _this.navParams.data.record.idtipo._id;
                _this.idtipogrupott = _this.idtipogrupo;
            }, function (err) {
                _this.msj.showError3('Error', err.error);
            });
            this.authService.getReg(this.idtipo + '/' + this.idtipo, 'unidadidioma3s').then(function (result) {
                _this.vidioma = result;
                _this.ididioma = _this.navParams.data.record.ididioma._id;
                _this.ididiomatt = _this.ididioma;
            }, function (err) {
                _this.msj.showError3('Error', err.error);
            });
            this.iddia = this.navParams.data.record.iddia;
            this.idhora = this.navParams.data.record.idhora;
            this.comentario = this.navParams.data.record.comentario;
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
            this.authService.getReg('5d6c9aa1dba66a1c88514638/unidad/' + this.idempresa + '/' + this.idempresa, 'personals').then(function (result) {
                _this.vidprofesor = result;
                _this.idprofesor = _this.navParams.data.record.idprofesor;
            }, function (err) {
                _this.msj.showError3('Error', err.error);
            });
            this.capacidad = this.navParams.data.record.capacidad;
            this.asignados = this.navParams.data.record.asignados;
            this.translateService.get('ITEM_UPDATE_TITLE').subscribe(function (value) {
                _this.pageTitle = value;
            });
        }
    };
    unidadplan4aCreatePage.prototype.manageGallery = function () {
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
            idunidadacademica: { id: this.idtipo, nombre: this.idnombre, codigo: this.idcodigo2 },
            idperiodo: { id: this.idtipo3, nombre: this.idnombre3 },
            idedificio: { id: this.idedificio2[0], nombre: this.idedificio2[1] },
            idsalon: { id: this.idsalon2[0], nombre: this.idsalon2[1] },
            ididioma: this.ididiomatt,
            idtipo: this.idtipogrupott,
            nombre: this.idedificio2[1] + ' ' + this.idsalon2[1],
            comentario: this.comentario,
            iddia: this.form.controls['iddia'].value,
            idhora: this.form.controls['idhora'].value,
            idprofesor: this.idprofesortt,
            capacidad: this.form.controls['capacidad'].value,
            asignados: asigna,
            bitacora: { idempresa: this.idempresa, idafiliado: '', email: this.username, permiso: creat, accion: creat + ' Planificacion ' }
        };
        if (this.navParams.get("record") == null) {
            if (options) {
                this.authService.createReg('', options, 'unidadplan4as').then(function (result) {
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
                this.authService.createReg(this._ID, options, 'unidadplan4as').then(function (result) {
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
    unidadplan4aCreatePage.prototype.cancel = function () {
        this.viewCtrl.dismiss();
    };
    unidadplan4aCreatePage.prototype.done = function () {
        if (!this.form.valid) {
            return;
        }
        //this.viewCtrl.dismiss(this.form.value);
    };
    unidadplan4aCreatePage.prototype.onSelectChange = function (selectedValue) {
        var _this = this;
        this.idedificio2 = selectedValue.split(',');
        this.authService.getReg(this.idtipo + '/' + this.idtipo + '/' + this.idedificio2[0], 'unidadedificiosalon3s').then(function (result) {
            _this.vgrupo2 = result;
        }, function (err) {
            _this.msj.showError3('Error', err.error);
        });
    };
    unidadplan4aCreatePage.prototype.onSelectChange2 = function (selectedValue) {
        // this.iddepartamento=aa[0]
        this.idsalon2 = selectedValue.split(',');
        for (var i = 0; i < this.vgrupo2.length; i++) {
            if (this.vgrupo2[i]._id == this.idsalon2[0]) {
                this.tcapacidad = this.vgrupo2[i].capacidad;
                this.form.controls['capacidad'].setValue(this.tcapacidad);
            }
        }
    };
    unidadplan4aCreatePage.prototype.onSelectChangeB = function (selectedValue) { this.ididiomatt = selectedValue; };
    unidadplan4aCreatePage.prototype.onSelectChangeC = function (selectedValue) { this.idtipogrupott = selectedValue; };
    unidadplan4aCreatePage.prototype.portChange = function (event) {
        this.idprofesortt = event.value._id;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('portComponent'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_6_ionic_selectable__["a" /* IonicSelectableComponent */])
    ], unidadplan4aCreatePage.prototype, "portComponent", void 0);
    unidadplan4aCreatePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-unidadplan4a-create',template:/*ion-inline-start:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\CALUSAC\exaubicaciones\unidadplan4a-create\unidadplan4a-create.html"*/'<ion-header>\n    <ion-navbar>\n      <ion-title>{{pageTitle}}</ion-title>\n\n      <ion-buttons end>\n          <button (click)="cancel()" icon-only ion-button padding-right>\n              <ion-icon name="md-close"></ion-icon>\n            </button>\n          <button  (click)="manageGallery()"  [disabled]="!form.valid" icon-only ion-button padding-right>\n              <ion-icon name="done-all"></ion-icon>\n            </button>\n      </ion-buttons>\n    </ion-navbar>\n  </ion-header>\n  <ion-content padding>\n    <form     [formGroup]="form"    text-wrap>\n      <ion-list>\n\n\n        <ion-item margin-bottom text-wrap>\n          <ion-label >Idioma</ion-label>\n\n        <ion-select (ionChange)="onSelectChangeB($event)" [(ngModel)]="ididioma" [formControl]="form.controls[\'ididioma\']">\n            <ion-option text-wrap *ngFor="let item of vidioma" [value]="item._id">{{item.nombre}}</ion-option>\n        </ion-select>\n\n\n     </ion-item>\n     <ion-item class="invalid" *ngIf="!form.controls.ididioma.valid && (form.controls.ididioma.dirty || form.controls.ididioma.touched)" text-wrap>\n       <ion-icon name="warning"></ion-icon>\n      Ingrese un Idioma valido\n      </ion-item>\n\n\n\n      <ion-item margin-bottom text-wrap>\n        <ion-label >Tipo grupo</ion-label>\n\n      <ion-select (ionChange)="onSelectChangeC($event)" [(ngModel)]="idtipogrupo" [formControl]="form.controls[\'idtipogrupo\']">\n          <ion-option text-wrap *ngFor="let item of vidtipogrupo" [value]="item._id">{{item.nombre}}</ion-option>\n      </ion-select>\n\n\n   </ion-item>\n   <ion-item class="invalid" *ngIf="!form.controls.idtipogrupo.valid && (form.controls.idtipogrupo.dirty || form.controls.idtipogrupo.touched)" text-wrap>\n     <ion-icon name="warning"></ion-icon>\n    Ingrese un Idioma valido\n    </ion-item>\n\n\n\n          <ion-item margin-bottom text-wrap>\n              <ion-label >Edificio</ion-label>\n\n            <ion-select placeholder=\'Seleccione un valor\' (ionChange)="onSelectChange($event)" [(ngModel)]="idedificio" [formControl]="form.controls[\'idedificio\']">\n                <ion-option text-wrap *ngFor="let item of vgrupo" [value]="item._id+\',\'+item.nombre">{{item.nombre}}</ion-option>\n            </ion-select>\n\n\n         </ion-item>\n         <ion-item class="invalid" *ngIf="!form.controls.idedificio.valid && (form.controls.idedificio.dirty || form.controls.idedificio.touched)" text-wrap>\n           <ion-icon name="warning"></ion-icon>\n          Ingrese un Edificio valido\n          </ion-item>\n\n\n          <ion-item margin-bottom text-wrap>\n              <ion-label >Salon</ion-label>\n\n            <ion-select placeholder=\'Seleccione un valor\' (ionChange)="onSelectChange2($event)" [(ngModel)]="idsalon" [formControl]="form.controls[\'idsalon\']">\n                <ion-option text-wrap *ngFor="let item of vgrupo2" [value]="item._id+\',\'+item.nombre">{{item.nombre}}</ion-option>\n            </ion-select>\n\n\n         </ion-item>\n         <ion-item class="invalid" *ngIf="!form.controls.idsalon.valid && (form.controls.idsalon.dirty || form.controls.idsalon.touched)" text-wrap>\n           <ion-icon name="warning"></ion-icon>\n          Ingrese un Salon valido\n          </ion-item>\n\n          <ion-item margin-bottom>\n            <ion-label >Dia:</ion-label>\n            <ion-datetime displayFormat="DD/MM/YYYY"  [formControl]="form.controls[\'iddia\']" [(ngModel)]="iddia"></ion-datetime>\n\n         </ion-item>\n\n\n\n         <ion-item class="invalid" *ngIf="!form.controls.iddia.valid\n         && (form.controls.iddia.dirty || form.controls.iddia.touched)" text-wrap>\n             <ion-icon name="warning"></ion-icon>\n            Ingrese un dia valido\n         </ion-item>\n\n\n          <ion-item >\n            <ion-label > Hora:  </ion-label>\n            <ion-input [(ngModel)]="idhora"  [formControl]="form.controls[\'idhora\']" type="text"></ion-input>\n          </ion-item>\n\n          <ion-item class="invalid" *ngIf="!form.controls.idhora.valid\n          && (form.controls.idhora.dirty || form.controls.idhora.touched)" text-wrap>\n              <ion-icon name="warning"></ion-icon>\n             Ingrese una idhora valida\n          </ion-item>\n\n\n\n\n\n\n\n\n\n\n<ion-item >\n    <ion-label  >Profesor (*)</ion-label>\n\n    <ionic-selectable #portComponent (onChange)="portChange($event)" placeholder="Seleccione un valor"  [canSearch]="true" searchPlaceholder="Buscar un registro" [shouldBackdropClose]="false" modalCssClass="modal"   closeButtonSlot="start"             [searchFailText]="\'No Existen registros.\'"  clearButtonText="Limpiar"\n    itemValueField="_id" itemTextField="nombre" [canClear]="true"\n   [formControl]="form.controls[\'idprofesor\']"     [(ngModel)]="idprofesor" [items]="vidprofesor"     item-content text-wrap>\n  <ng-template ionicSelectableCloseButtonTemplate><ion-icon name="close-circle" style="font-size: 24px;"></ion-icon>              </ng-template>\n  <ng-template ionicSelectableMessageTemplate>Seleccione un Registro.</ng-template>\n  <ng-template ionicSelectableTitleTemplate> Docentes </ng-template>\n\n</ionic-selectable>\n\n\n\n\n </ion-item>\n <ion-item class="invalid" *ngIf="!form.controls.idprofesor.valid && (form.controls.idprofesor.dirty || form.controls.idprofesor.touched)" text-wrap>\n   <ion-icon name="warning"></ion-icon>\n   Ingrese un profesor valido\n  </ion-item>\n\n\n\n\n\n\n\n\n\n  <ion-item margin-bottom>\n    <ion-label>Comentario</ion-label>\n    <ion-textarea\n       type="text" rows="5"\n       [(ngModel)]="comentario" [formControl]="form.controls[\'comentario\']"\n      ></ion-textarea>\n </ion-item>\n\n\n          <ion-item margin-bottom>\n              <ion-label>Capacidad</ion-label>\n              <ion-input\n                 type="text"\n                 [(ngModel)]="capacidad" [formControl]="form.controls[\'capacidad\']"\n                ></ion-input>\n           </ion-item>\n           <ion-item class="invalid" *ngIf="!form.controls.capacidad.valid && (form.controls.capacidad.dirty || form.controls.capacidad.touched)" text-wrap>\n             <ion-icon name="warning"></ion-icon>\n             Ingrese una capacidad del salon valida\n            </ion-item>\n\n            <ion-item margin-bottom>\n                <ion-label>Asignados</ion-label>\n                <ion-input\n                   type="text" [disabled]="true"\n                   [(ngModel)]="asignados" [formControl]="form.controls[\'asignados\']"\n                  ></ion-input>\n             </ion-item>\n\n\n\n\n\n       </ion-list>\n    </form>\n\n\n  </ion-content>\n'/*ion-inline-end:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\CALUSAC\exaubicaciones\unidadplan4a-create\unidadplan4a-create.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3__providers__["d" /* NotificationProvider */], __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["F" /* ViewController */], __WEBPACK_IMPORTED_MODULE_3__providers__["a" /* Auth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */]])
    ], unidadplan4aCreatePage);
    return unidadplan4aCreatePage;
}());

//# sourceMappingURL=unidadplan4a-create.js.map

/***/ }),

/***/ 932:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unidadplan4aCreatePageModule", function() { return unidadplan4aCreatePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__unidadplan4a_create__ = __webpack_require__(1372);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_selectable__ = __webpack_require__(446);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var unidadplan4aCreatePageModule = /** @class */ (function () {
    function unidadplan4aCreatePageModule() {
    }
    unidadplan4aCreatePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__unidadplan4a_create__["a" /* unidadplan4aCreatePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__unidadplan4a_create__["a" /* unidadplan4aCreatePage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild(),
                __WEBPACK_IMPORTED_MODULE_4_ionic_selectable__["b" /* IonicSelectableModule */]
            ],
        })
    ], unidadplan4aCreatePageModule);
    return unidadplan4aCreatePageModule;
}());

//# sourceMappingURL=unidadplan4a-create.module.js.map

/***/ })

});
//# sourceMappingURL=217.js.map