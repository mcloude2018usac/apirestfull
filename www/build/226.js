webpackJsonp([226],{

/***/ 1362:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConvenioCalusacdCreatePage; });
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






var ConvenioCalusacdCreatePage = /** @class */ (function () {
    function ConvenioCalusacdCreatePage(storage, msj, translateService, viewCtrl, authService, navCtrl, navParams, _FB, actionSheetCtrl, events) {
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
        this.idtipounidad2 = [];
        this.idunidadacademica2 = [];
        this.idjornada2 = [];
        this.idpago2 = [];
        this.idperiodo2 = [];
        this.vgrupo = [];
        this.vgrupo2 = [];
        this.vjornada = [];
        this.vpago = [];
        this.tiposus = [];
        this.vvalidanivel = [];
        this.sinivel = '0';
        this.carnev = false;
        this.idprofesor2 = [];
        this.vprofesor = [];
        this.carnev2 = false;
        this.vvcarne = '';
        this.carnecalusac1 = '';
        this.comprobantenivel = false;
        this.vhorario = [];
        this.idhorario2 = [];
        // Define form validation - VERY basic!
        this.form = this._FB.group({
            nombre: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            correo: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            profesor: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            carnecalusac1: [''],
            cui: ['', ''],
            jornada: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            tipounidad: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            horario: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            tipopago: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            unidadacademica: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
        });
        this.pageTitle = 'Detalle de estudiantes';
        this.authService.getReg2b('todos', 'tipounidad3s').then(function (result) {
            _this.vgrupo = result;
        }, function (err) {
            _this.msj.showError3('Error', err.error);
        });
    }
    ConvenioCalusacdCreatePage.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get('username').then(function (value) {
            _this.username = value;
        });
    };
    ConvenioCalusacdCreatePage.prototype.onSelectChange2 = function (selectedValue) {
        var _this = this;
        this.idunidadacademica2 = selectedValue.split(',');
        this.vpago = [];
        this.vjornada = [];
        this.idjornada2 = [];
        this.idpago2 = [];
        this.rubro = this.idunidadacademica2[2];
        this.ididioma = this.idunidadacademica2[3];
        this.idtipogrupo = this.idunidadacademica2[4];
        this.idtipocurso = this.idunidadacademica2[5];
        if (this.tipounidad == '') { }
        else {
            this.codigounidad = this.idunidadacademica2[2];
            this.authService.getReg2b(this.idtipounidad2[0] + '/' + this.idunidadacademica2[0], 'unidadperiodo3s').then(function (result) {
                if (result) {
                    var dd = [];
                    dd = result;
                    if (dd.length > 0) {
                        _this.idperiodo = result[0]._id;
                        var aa = result[0]._id + ',' + result[0].nombre;
                        _this.idperiodo2 = aa.split(',');
                        _this.ano = result[0].ano;
                        _this.authService.getReg2b(_this.idtipounidad2[0] + '/' + _this.idunidadacademica2[0] + '/' + _this.idperiodo + '/1' + '/jornadas', 'unidadplan3s').then(function (result) {
                            _this.vjornada = result;
                        }, function (err) {
                            _this.msj.showError3('Error', err.error);
                        });
                        /*
                        
                        
                          this.authService.getReg2b( this.idunidadacademica2[0]+'/'+ this.idunidadacademica2[0] + '/' +this.navParams.data.op + '/tipo','unidadpago3s').then((result) => {
                            this.vpago=result;
                          }, (err) => {
                          this.msj.showError3('Error',err.error);
                        });
                        */
                    }
                    else {
                        _this.idperiodo2 = [];
                        _this.msj.showError3('Error', 'No existe planificación definida en la estructura, comuniquese con el administrador');
                        // this.unidadacademica=''
                    }
                }
            }, function (err) {
                _this.msj.showError3('Error', err.error);
            });
        }
    };
    ConvenioCalusacdCreatePage.prototype.onSelectChange4 = function (selectedValue) {
        var _this = this;
        this.idjornada2 = selectedValue.split(',');
        this.vpago = [];
        this.idpago2 = [];
        this.authService.getReg2b(this.idtipounidad2[0] + '/' + this.idunidadacademica2[0] + '/' + this.idperiodo + '/' + this.navParams.data.op + '/' + this.idjornada2[0], 'unidadplan3s').then(function (result) {
            _this.vpago = result;
        }, function (err) {
            _this.msj.showError3('Error', err.error);
        });
    };
    ConvenioCalusacdCreatePage.prototype.onSelectChange3 = function (selectedValue) {
        var _this = this;
        this.idpago2 = selectedValue.split(',');
        this.monto = this.idpago2[3];
        this.codigonn = Number(this.idpago2[2]) - 1;
        this.sinivel = '0';
        this.nivel = this.idpago2[4];
        this.authService.getReg2b(this.idtipounidad2[0] + '/' + this.idunidadacademica2[0] + '/' + this.idperiodo + '/' + this.idjornada2[0] + '°' + this.nivel + '/horarios', 'unidadplan3s').then(function (result) {
            _this.vhorario = result;
        }, function (err) {
            _this.msj.showError3('Error', err.error);
        });
        if (this.codigonn > 0) {
            this.carnev = true;
            this.carnev2 = true;
            this.vvcarne = 'Obligatorio';
            this.comprobantenivel = true;
        }
        else {
            this.comprobantenivel = false;
            this.sinivel = '1';
            this.carnev = true;
            this.carnev2 = false;
            this.comprobantenivel = false;
            this.vvcarne = 'Si no tiene carné, no ingrese ninguna información';
            this.codigonn = 0;
        }
    };
    ConvenioCalusacdCreatePage.prototype.onSelectChange = function (selectedValue) {
        var _this = this;
        this.idtipounidad2 = selectedValue.split(',');
        this.vpago = [];
        this.vjornada = [];
        this.idjornada2 = [];
        this.idpago2 = [];
        if (this.idtipounidad2[2] == 'Inactivo') {
            this.msj.showError3('Precaución', this.idtipounidad2[3]);
            this.idtipounidad2 = [];
            this.tipounidad = '';
            return;
        }
        else {
            if (this.tipounidad == '') { }
            else {
                // if(this.idtipounidad2[0]=='5b97f1bceb1dab0ab0368cc6')    {
                this.authService.getReg2b(this.idtipounidad2[0] + '/2/' + this.navParams.data.op, 'unidadacademica3s').then(function (result) {
                    _this.vgrupo2 = result;
                }, function (err) {
                    _this.msj.showError3('Error', err.error);
                });
                /*  }
                  else
                  {
    
                    this.msj.showError3('Mensaje','La asignación para: ' +  this.idtipounidad2[1]+' se realizará en la Sede del Centro Universitario');
    
                  }
                  */
            }
        }
    };
    ConvenioCalusacdCreatePage.prototype.onSelectChange5 = function (selectedValue) {
        var _this = this;
        this.idhorario2 = selectedValue.split(',');
        this.authService.getReg2b(this.idtipounidad2[0] + '/' + this.idunidadacademica2[0] + '/' + this.idperiodo + '/' + this.nivel + '°' + this.idhorario2[0] + '°' + this.idjornada2[0] + '/profesores', 'unidadplan3s').then(function (result) {
            _this.vprofesor = result;
        }, function (err) {
            _this.msj.showError3('Error', err.error);
        });
    };
    ConvenioCalusacdCreatePage.prototype.onSelectChange7 = function (selectedValue) {
        this.idprofesor2 = selectedValue.split(',');
    };
    ConvenioCalusacdCreatePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        if (this.navParams.get("record") == null) {
            this.translateService.get('ITEM_CREATE_TITLE').subscribe(function (value) {
                _this.pageTitle = value;
            });
        }
        else {
            this._ID = this.navParams.data.record._id;
            this.nombre = this.navParams.data.record.nombre;
            this.correo = this.navParams.data.record.correo;
            this.cui = this.navParams.data.record.cui;
            this.carnecalusac1 = this.navParams.data.record.carne;
            this.authService.getReg2b('todos', 'tipounidad3s').then(function (result) {
                _this.vgrupo = result;
                _this.tipounidad = _this.navParams.data.record.idtipounidad.id + ',' + _this.navParams.data.record.idtipounidad.nombre + ',' + _this.navParams.data.record.idtipounidad.codigo;
                _this.authService.getReg2b(_this.navParams.data.record.idtipounidad.id + '/2/' + _this.navParams.data.op, 'unidadacademica3s').then(function (result) {
                    _this.vgrupo2 = result;
                    _this.unidadacademica = _this.navParams.data.record.idtipounidad.id + ',' + _this.navParams.data.record.idtipounidad.nombre + ',' + _this.navParams.data.record.idtipounidad.codigo + ',' + _this.navParams.data.record.ididioma + ',' + _this.navParams.data.record.idtipocurso + ',' + _this.navParams.data.record.idtipogrupo;
                }, function (err) {
                    _this.msj.showError3('Error', err.error);
                });
            }, function (err) {
                _this.msj.showError3('Error', err.error);
            });
            this.ididioma = this.navParams.data.record.ididioma;
            this.tipopago = this.navParams.data.record.tipopago;
            this.jornada = this.navParams.data.record.jornada;
            this.nivel = this.navParams.data.record.nivel;
            this.horario = this.navParams.data.record.horario;
            this.translateService.get('ITEM_UPDATE_TITLE').subscribe(function (value) {
                _this.pageTitle = value;
            });
        }
    };
    ConvenioCalusacdCreatePage.prototype.manageGallery = function () {
        var _this = this;
        var creat = 'Actualiza';
        if (this.navParams.get("record") == null) {
            creat = 'Crea';
        }
        var options = {
            idtipounidad: { id: this.idtipounidad2[0], nombre: this.idtipounidad2[1] },
            idunidadacademica: { id: this.idunidadacademica2[0], nombre: this.idunidadacademica2[1], codigo: this.codigounidad },
            idconvenio: this.navParams.data.idgrupo,
            idempresa: this.navParams.data.idempresa,
            cui: this.form.controls['cui'].value,
            nombre: this.form.controls['nombre'].value,
            correo: this.form.controls['correo'].value,
            carne: this.form.controls['carnecalusac1'].value,
            ididioma: this.ididioma,
            tipopago: this.idpago2[0],
            jornada: this.idjornada2[0],
            profesor: this.idprofesor2[0],
            nivel: this.nivel,
            horario: this.idhorario2[0],
            tipogrupo: this.idtipogrupo,
            tipocurso: this.idtipocurso,
            idperiodo: this.idperiodo,
            bitacora: { idempresa: this.navParams.data.idempresa, idafiliado: '', email: this.username, permiso: creat, accion: creat + ' market grupos ' }
        };
        if (this.navParams.get("record") == null) {
            if (options) {
                this.authService.createReg('', options, 'conveniocalusacds').then(function (result) {
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
                this.authService.createReg(this._ID, options, 'conveniocalusacds').then(function (result) {
                    if (!_this.form.valid) {
                        return;
                    }
                    //   console.log(result)
                    _this.viewCtrl.dismiss(result);
                }, function (err) {
                    _this.msj.showError3('Error', err.error);
                });
            }
        }
    };
    ConvenioCalusacdCreatePage.prototype.cancel = function () {
        this.viewCtrl.dismiss();
    };
    ConvenioCalusacdCreatePage.prototype.done = function () {
        if (!this.form.valid) {
            return;
        }
        //this.viewCtrl.dismiss(this.form.value);
    };
    ConvenioCalusacdCreatePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-convenio-calusacd-create',template:/*ion-inline-start:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\CALUSAC\convenio-calusacd-create\convenio-calusacd-create.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>{{pageTitle}}</ion-title>\n\n    <ion-buttons end>\n        <button (click)="cancel()" icon-only ion-button padding-right>\n            <ion-icon name="md-close"></ion-icon>\n          </button>\n        <button  (click)="manageGallery()"  [disabled]="!form.valid" icon-only ion-button padding-right>\n            <ion-icon name="done-all"></ion-icon>\n          </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <form     [formGroup]="form"   text-wrap>\n    <ion-list>\n\n      <ion-item margin-bottom>\n        <ion-label class="my-label18" color="secondary2" >Correo</ion-label>\n        <ion-input\n           type="text"\n           [(ngModel)]="correo" [formControl]="form.controls[\'correo\']"\n          ></ion-input>\n     </ion-item>\n     <ion-item class="invalid" *ngIf="!form.controls.correo.valid && (form.controls.correo.dirty || form.controls.correo.touched)" text-wrap>\n       <ion-icon name="warning"></ion-icon>\n      Ingrese un correo valido\n      </ion-item>\n\n      <ion-item  >\n        <ion-label class="my-label18" color="secondary2" > CUI / PASAPORTE </ion-label>\n        <ion-input  [(ngModel)]="cui" [formControl]="form.controls[\'cui\']" type="text"></ion-input>\n    </ion-item>\n\n\n        <ion-item margin-bottom>\n           <ion-label class="my-label18" color="secondary2" >Nombre</ion-label>\n           <ion-input\n              type="text"\n              [(ngModel)]="nombre" [formControl]="form.controls[\'nombre\']"\n             ></ion-input>\n        </ion-item>\n        <ion-item class="invalid" *ngIf="!form.controls.nombre.valid && (form.controls.nombre.dirty || form.controls.nombre.touched)" text-wrap>\n          <ion-icon name="warning"></ion-icon>\n          {{ \'NOMBRET\' | translate }}\n         </ion-item>\n\n\n   <ion-item  >\n    <!--   <ion-label class="my-label18"  color="danger" stacked> Ingrese Carne CALUSAC ({{vvcarne}})</ion-label>-->\n   <ion-label class="my-label18"  color="secondary2" stacked>Carné de CALUSAC  </ion-label>\n   <ion-input   [(ngModel)]="carnecalusac1" [formControl]="form.controls[\'carnecalusac1\']" type="text"></ion-input>\n\n </ion-item>\n\n <ion-item class="invalid" *ngIf="!form.controls.carnecalusac1.valid && (form.controls.carnecalusac1.dirty || form.controls.carnecalusac1.touched)" text-wrap>\n     <ion-icon name="warning"></ion-icon>\n    Ingrese un carne calusac valido\n </ion-item>\n\n <ion-item-divider color="secondary">\n  <ion-label class="my-label18" color="secondary2" center>\n    ASIGNACIÓN\n  </ion-label>\n</ion-item-divider>\n\n\n<ion-item margin-bottom text-wrap>\n    <ion-label class="my-label18" color="secondary2"  stacked>Seleccione Sede</ion-label>\n\n  <ion-select (ionChange)="onSelectChange($event)" [(ngModel)]="tipounidad" [formControl]="form.controls[\'tipounidad\']">\n      <ion-option text-wrap *ngFor="let item of vgrupo" [value]="item._id+\',\'+item.nombre+\',\'+item.codigo" >{{item.nombre}} </ion-option>\n  </ion-select>\n\n\n</ion-item>\n<ion-item margin-bottom text-wrap>\n\n<ion-label class="my-label18" color="secondary2"  stacked>Seleccione Curso</ion-label>\n\n<ion-select  (ionChange)="onSelectChange2($event)"  [(ngModel)]="unidadacademica" [formControl]="form.controls[\'unidadacademica\']">\n    <ion-option text-wrap *ngFor="let item of vgrupo2" [value]="item._id+\',\'+item.nombre+\',\'+item.codigo +\',\'+item.ididioma._id+\',\'+item.idtipocurso+\',\'+item.idtipogrupo">{{item.nombre }}</ion-option>\n</ion-select>\n\n\n</ion-item>\n\n\n\n<ion-item margin-bottom text-wrap>\n<ion-label class="my-label18" color="secondary2"  stacked>Seleccione Jornada</ion-label>\n\n<ion-select (ionChange)="onSelectChange4($event)" [(ngModel)]="jornada" [formControl]="form.controls[\'jornada\']">\n<ion-option text-wrap *ngFor="let item of vjornada" [value]="item._id+\',\'+item.nombre+\',\'+item.codigo" >{{item.nombre}} </ion-option>\n</ion-select>\n\n\n</ion-item>\n\n<ion-item class="invalid" *ngIf="!form.controls.jornada.valid\n&& (form.controls.jornada.dirty || form.controls.jornada.touched)" text-wrap>\n<ion-icon name="warning"></ion-icon>\nIngrese una jornada valida\n</ion-item>\n\n\n\n\n<ion-item margin-bottom text-wrap>\n<ion-label class="my-label18" color="secondary2"  stacked>Seleccione Nivel</ion-label>\n\n<ion-select (ionChange)="onSelectChange3($event)" [(ngModel)]="tipopago" [formControl]="form.controls[\'tipopago\']">\n  <ion-option text-wrap *ngFor="let item of vpago" [value]="item._id+\',\'+item.nombre+\',\'+item.codigo+\',\'+item.costo + \',\' + item.nivel._id" >{{item.nombre}}  </ion-option>\n</ion-select>\n\n\n</ion-item>\n\n<ion-item class="invalid" *ngIf="!form.controls.tipopago.valid && (form.controls.tipopago.dirty || form.controls.tipopago.touched)" text-wrap>\n<ion-icon name="warning"></ion-icon>\nIngrese un nivel valido\n</ion-item>\n\n\n\n\n<ion-item margin-bottom text-wrap>\n  <ion-label class="my-label18" color="secondary2"  stacked>Seleccione horario</ion-label>\n\n<ion-select (ionChange)="onSelectChange5($event)" [(ngModel)]="horario" [formControl]="form.controls[\'horario\']">\n    <ion-option text-wrap *ngFor="let item of vhorario" [value]="item._id+\',\'+item.nombre+\',\'+item.codigo" >{{item.nombre}} - {{item.nombre2}} > {{item.dia}} </ion-option>\n</ion-select>\n\n\n</ion-item>\n\n<ion-item class="invalid" *ngIf="!form.controls.horario.valid\n&& (form.controls.horario.dirty || form.controls.horario.touched)" text-wrap>\n    <ion-icon name="warning"></ion-icon>\n    Ingrese una horario valido\n</ion-item>\n\n\n<ion-item margin-bottom text-wrap>\n  <ion-label class="my-label18" color="secondary2"  stacked>Seleccione profesor</ion-label>\n\n<ion-select (ionChange)="onSelectChange7($event)" [(ngModel)]="profesor" [formControl]="form.controls[\'profesor\']">\n    <ion-option text-wrap *ngFor="let item of vprofesor" [value]="item._id+\',\'+item.nombre+\',\'+item.codigo" >{{item.nombre}} </ion-option>\n</ion-select>\n\n\n</ion-item>\n\n<ion-item class="invalid" *ngIf="!form.controls.profesor.valid\n&& (form.controls.profesor.dirty || form.controls.profesor.touched)" text-wrap>\n    <ion-icon name="warning"></ion-icon>\n    Ingrese una profesor valido\n</ion-item>\n\n     </ion-list>\n  </form>\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\CALUSAC\convenio-calusacd-create\convenio-calusacd-create.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3__providers__["d" /* NotificationProvider */], __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["F" /* ViewController */], __WEBPACK_IMPORTED_MODULE_3__providers__["a" /* Auth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */]])
    ], ConvenioCalusacdCreatePage);
    return ConvenioCalusacdCreatePage;
}());

//# sourceMappingURL=convenio-calusacd-create.js.map

/***/ }),

/***/ 922:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConvenioCalusacdCreatePageModule", function() { return ConvenioCalusacdCreatePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__convenio_calusacd_create__ = __webpack_require__(1362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ConvenioCalusacdCreatePageModule = /** @class */ (function () {
    function ConvenioCalusacdCreatePageModule() {
    }
    ConvenioCalusacdCreatePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__convenio_calusacd_create__["a" /* ConvenioCalusacdCreatePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__convenio_calusacd_create__["a" /* ConvenioCalusacdCreatePage */]), __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], ConvenioCalusacdCreatePageModule);
    return ConvenioCalusacdCreatePageModule;
}());

//# sourceMappingURL=convenio-calusacd-create.module.js.map

/***/ })

});
//# sourceMappingURL=226.js.map