webpackJsonp([26],{

/***/ 1047:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormularioMovilPageModule", function() { return FormularioMovilPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__formulario_movil__ = __webpack_require__(1489);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_forms_dynamic_form_module__ = __webpack_require__(1501);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_form_config_service__ = __webpack_require__(1503);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var FormularioMovilPageModule = /** @class */ (function () {
    function FormularioMovilPageModule() {
    }
    FormularioMovilPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__formulario_movil__["a" /* FormularioMovilPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__formulario_movil__["a" /* FormularioMovilPage */]),
                __WEBPACK_IMPORTED_MODULE_3__common_forms_dynamic_form_module__["a" /* DynamicFormModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_4__providers_form_config_service__["a" /* FormConfigService */]]
        })
    ], FormularioMovilPageModule);
    return FormularioMovilPageModule;
}());

//# sourceMappingURL=formulario-movil.module.js.map

/***/ }),

/***/ 1304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ControlBase; });
var ControlBase = /** @class */ (function () {
    function ControlBase(options) {
        if (options === void 0) { options = {}; }
        this.value = options.value;
        this.key = options.key || '';
        this.label = options.label || '';
        this.required = (options.required == "true");
        this.order = options.order === undefined ? 1 : options.order;
        this.controlType = options.type || '';
        this.position = options.position || '';
        this.placeholder = options.placeholder || '';
        this.stylelabel = "font-size: 24px !important;";
        this.disabled = "" + options.disabled + "" || 'false';
        this.hidden = "" + options.hidden + "" || 'false';
        this.blike = "" + options.blike + "" || 'false';
        //background-color:red;color:white
        this.fondoetiqueta = options.fondoetiqueta || '';
        this.coloretiqueta = options.coloretiqueta || '';
        this.rangomin = "" + options.rangomin + "" || '0';
        this.rangomax = "" + options.rangomax + "" || '1000';
        this.rangostep = "" + options.rangostep + "" || '100';
        this.alfatypo = options.alfatypo || '';
        // this.coloretiqueta =  'caca' || '';
        //'background-color:red,color:white;'
        // options.fondoetiqueta || ''; 
        // [ngClass]="control.fondoetiqueta"
        //[style.backgroundColor]="control.fondoetiqueta"
        //[ngClass]="[control.fondoetiqueta,control.coloretiqueta]" style='color:red'    sirve
    }
    return ControlBase;
}());

//# sourceMappingURL=control-base.js.map

/***/ }),

/***/ 1309:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ControlsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__select_control__ = __webpack_require__(1490);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__textarea_control__ = __webpack_require__(1491);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__textbox_control__ = __webpack_require__(1492);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__label_control__ = __webpack_require__(1493);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__note_control__ = __webpack_require__(1494);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__rango_control__ = __webpack_require__(1495);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Fecha_control__ = __webpack_require__(1496);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__check_control__ = __webpack_require__(1497);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__fechahora_control__ = __webpack_require__(1498);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__hora_control__ = __webpack_require__(1499);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__image_control__ = __webpack_require__(1500);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var ControlsService = /** @class */ (function () {
    function ControlsService() {
    }
    ControlsService.prototype.getControls = function (descriptors) {
        var controls = descriptors.map(function (descriptor, index) {
            var options = __assign({}, descriptor, { type: descriptor.type, key: descriptor.name, label: descriptor.title, value: descriptor.valor, required: descriptor.required, order: descriptor.order });
            switch (descriptor.type) {
                case 'text':
                case 'Number':
                    return new __WEBPACK_IMPORTED_MODULE_3__textbox_control__["a" /* TextboxControl */](options);
                case 'textarea':
                    return new __WEBPACK_IMPORTED_MODULE_2__textarea_control__["a" /* TextareaControl */](options);
                case 'select':
                    return new __WEBPACK_IMPORTED_MODULE_1__select_control__["a" /* SelectControl */](options);
                case 'label':
                    return new __WEBPACK_IMPORTED_MODULE_4__label_control__["a" /* LabelControl */](options);
                case 'note':
                    return new __WEBPACK_IMPORTED_MODULE_5__note_control__["a" /* NoteControl */](options);
                case 'rango':
                    return new __WEBPACK_IMPORTED_MODULE_6__rango_control__["a" /* RangoControl */](options);
                case 'fecha':
                    return new __WEBPACK_IMPORTED_MODULE_7__Fecha_control__["a" /* FechaControl */](options);
                case 'fechahora':
                    return new __WEBPACK_IMPORTED_MODULE_9__fechahora_control__["a" /* FechahoraControl */](options);
                case 'hora':
                    return new __WEBPACK_IMPORTED_MODULE_10__hora_control__["a" /* HoraControl */](options);
                case 'check':
                    return new __WEBPACK_IMPORTED_MODULE_8__check_control__["a" /* CheckControl */](options);
                case 'imagen':
                    return new __WEBPACK_IMPORTED_MODULE_11__image_control__["a" /* ImageControl */](options);
                default:
                    console.error(descriptor.type + " is not supported");
            }
        });
        return controls.filter(function (x) { return !!x; }).sort(function (a, b) { return a.order - b.order; });
    };
    ControlsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], ControlsService);
    return ControlsService;
}());

//# sourceMappingURL=controls.service.js.map

/***/ }),

/***/ 1310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DynamicControlsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DynamicControlsService = /** @class */ (function () {
    function DynamicControlsService() {
    }
    DynamicControlsService.prototype.toFormGroup = function (formGroup, controls) {
        formGroup = formGroup || new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormGroup */]({});
        controls.forEach(function (control) {
            var formControl = control.required
                ? new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](control.value || '', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required)
                : new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](control.value || '');
            formGroup.addControl(control.key, formControl);
        });
        return formGroup;
    };
    DynamicControlsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], DynamicControlsService);
    return DynamicControlsService;
}());

//# sourceMappingURL=dynamic-controls.service.js.map

/***/ }),

/***/ 1489:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormularioMovilPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_forms_controls_service__ = __webpack_require__(1309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







//import 'rxjs/add/operator/map';
var FormularioMovilPage = /** @class */ (function () {
    function FormularioMovilPage(translateService, storage, msj, navCtrl, regService, controlsService, alertCtrl, viewCtrl, navParams) {
        var _this = this;
        this.translateService = translateService;
        this.storage = storage;
        this.msj = msj;
        this.navCtrl = navCtrl;
        this.regService = regService;
        this.controlsService = controlsService;
        this.alertCtrl = alertCtrl;
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.items2 = [];
        this.submitted = [];
        this.username = "";
        this.FILENAME = '../../assets/data/data1.json';
        this.muestrabien = false;
        this.form = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormGroup */]({});
        this.translateService.get('APPX').subscribe(function (value) {
            _this.idempresa = value;
        });
    }
    FormularioMovilPage.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get('username').then(function (value) {
            _this.username = value;
        });
    };
    FormularioMovilPage.prototype.ionViewDidLoad = function () {
        this.idcat = this.navParams.data.record2.idcat;
        this.idcatn = this.navParams.data.record2.idcatn;
        this.idfrm = this.navParams.data.record2.idfrm;
        this.idfrmn = this.navParams.data.record2.idfrmn;
    };
    FormularioMovilPage.prototype.davaloritem = function (data, campo) {
        var val = '';
        if (data[campo]) {
            val = data[campo];
        }
        else {
            val = '';
        }
        return val;
    };
    FormularioMovilPage.prototype.dalistacat = function (data, op) {
        var val;
        for (var i = 0; i < data.length; i++) {
            if (data[i].label == op) {
                val = { key: data[i].key, label: data[i].label };
                break;
            }
        }
        return val;
    };
    FormularioMovilPage.prototype.daopciones = function (data, id) {
        var val;
        for (var i = 0; i < data.length; i++) {
            if (data[i].idunidad == id) {
                val.push({ key: data[i]._id, label: data[i].nombre });
            }
        }
        return val;
    };
    FormularioMovilPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        if (this.navParams.get("record") == null) {
            this.regService.getReg(this.idfrm + '/formulariod/' + this.idempresa, 'frmmovils').then(function (data) {
                var aa = [];
                var len = data;
                for (var i = 0; i < len.length; i++) {
                    var rquer = len[i].required;
                    var sireque = '';
                    var valort = '';
                    var valor2t = [];
                    switch (len[i].type) {
                        case 'label':
                            valort = '.';
                            break;
                        case 'check':
                            valort = len[i].default;
                            if (valort == '') {
                                valort = 'false';
                            }
                            else {
                                if (!valort) {
                                    valort = 'false';
                                }
                                ;
                            }
                            break;
                        case 'select':
                            valor2t = _this.dalistacat(len[i].options, len[i].default);
                            break;
                        default:
                            valort = len[i].default;
                    }
                    if (!valor2t) {
                        valor2t = '';
                    }
                    if (!valort) {
                        valort = '';
                    }
                    if (rquer == 'true') {
                        sireque = " (*)";
                    }
                    if (len[i].type == 'select') {
                        aa.push({
                            "order": len[i].order, "name": len[i].name, "type": len[i].type, "required": len[i].required,
                            "placeholder": len[i].placeholder, "display": len[i].display, "selected": len[i].selected,
                            "disabled": len[i].disabled, "hidden": len[i].hidden, "title": len[i].title + sireque,
                            "position": len[i].position, "labelsizefondt": len[i].labelsizefondt, "default": len[i].default, "valor": valor2t,
                            "categoria": len[i].categoria, "combofijo": len[i].combofijo, "idcadmovil": _this.tt,
                            "options": len[i].options, "fondoetiqueta": len[i].fondoetiqueta,
                            "coloretiqueta": len[i].coloretiqueta, "blike": len[i].blike, "rangomin": len[i].rangomin, "rangomax": len[i].rangomax, "rangostep": len[i].rangostep, "alfatypo": len[i].alfatypo
                        });
                    }
                    else {
                        aa.push({
                            "order": len[i].order, "name": len[i].name, "type": len[i].type, "required": len[i].required,
                            "placeholder": len[i].placeholder, "display": len[i].display, "selected": len[i].selected,
                            "disabled": len[i].disabled, "hidden": len[i].hidden, "title": len[i].title + sireque,
                            "position": len[i].position, "labelsizefondt": len[i].labelsizefondt, "default": len[i].default, "valor": valort,
                            "categoria": len[i].categoria, "combofijo": len[i].combofijo, "idcadmovil": _this.tt,
                            "options": len[i].options, "fondoetiqueta": len[i].fondoetiqueta,
                            "coloretiqueta": len[i].coloretiqueta, "blike": len[i].blike, "rangomin": len[i].rangomin, "rangomax": len[i].rangomax, "rangostep": len[i].rangostep, "alfatypo": len[i].alfatypo
                        });
                    }
                }
                _this.controls = _this.controlsService.getControls(aa);
                _this.muestrabien = true;
            }, function (err) {
                _this.msj.showError3('Error', err.error);
            });
        }
        else {
            this.regService.getReg(this.idfrm + '/formulariod/' + this.idempresa, 'frmmovils').then(function (data) {
                var aa = [];
                var len = data;
                for (var i = 0; i < len.length; i++) {
                    var rquer = len[i].required;
                    var sireque = '';
                    if (rquer == 'true') {
                        sireque = " (*)";
                    }
                    var valort = _this.davaloritem(_this.navParams.data.record, len[i].name);
                    if (!valort) {
                        valort = '';
                    }
                    aa.push({
                        "order": len[i].order, "name": len[i].name, "type": len[i].type, "required": len[i].required,
                        "placeholder": len[i].placeholder, "display": len[i].display, "selected": len[i].selected,
                        "disabled": len[i].disabled, "hidden": len[i].hidden, "title": len[i].title + sireque,
                        "position": len[i].position, "labelsizefondt": len[i].labelsizefondt, "default": '',
                        "valor": valort,
                        "categoria": len[i].categoria, "combofijo": len[i].combofijo, "idcadmovil": _this.tt,
                        "options": len[i].options, "fondoetiqueta": len[i].fondoetiqueta,
                        "coloretiqueta": len[i].coloretiqueta, "blike": len[i].blike, "rangomin": len[i].rangomin, "rangomax": len[i].rangomax, "rangostep": len[i].rangostep, "alfatypo": len[i].alfatypo
                    });
                }
                _this.controls = _this.controlsService.getControls(aa);
                _this.muestrabien = true;
            }, function (err) {
                _this.msj.showError3('Error', err.error);
            });
        }
        this.form.valueChanges
            .subscribe(function (val) {
            _this.submitted = val;
        });
    };
    FormularioMovilPage.prototype.submitForm = function ($event) {
        var _this = this;
        if (this.form.status == 'INVALID') {
            this.msj.showError3('Error', "Ingrese todos los campos requeridos en el formulario");
        }
        else {
            var creat = 'Actualiza';
            if (this.navParams.get("record") == null) {
                creat = 'Crea';
            }
            if (this.navParams.get("record") == null) {
                this.submitted['usuarionew'] = this.username;
                this.submitted['usuarioup'] = this.username;
                this.submitted['idempresa'] = this.idempresa;
                var options = {
                    idcat: this.idcat,
                    idform: this.idfrm,
                    estructura: this.submitted,
                    bitacora: { email: this.username, permiso: creat, accion: creat + ' formulario movil' }
                };
                if (options) {
                    this.regService.createRegmovil('', options, 'frmmovils').then(function (result) {
                        _this.viewCtrl.dismiss(result);
                    }, function (err) {
                        _this.msj.showError3('Error', err.error);
                    });
                }
            }
            else {
                //this.submitted['usuarionew'] = this.navParams.data.record.usuarionew;
                this.submitted['usuarioup'] = this.username;
                this.submitted['idempresa'] = this.idempresa;
                var options = {
                    idcat: this.idcat,
                    idform: this.idfrm,
                    estructura: this.submitted,
                    bitacora: { email: this.username, permiso: creat, accion: creat + ' formulario movil' }
                };
                if (options) {
                    this.regService.createRegmovil(this.navParams.data.record._id, options, 'frmmovils').then(function (result) {
                        _this.viewCtrl.dismiss(result);
                    }, function (err) {
                        _this.msj.showError3('Error', err.error);
                    });
                }
            }
        }
    };
    FormularioMovilPage.prototype.cancel = function () {
        this.viewCtrl.dismiss();
    };
    FormularioMovilPage.prototype.done = function () {
        //  if (!this.form.valid) { return; }
        //this.viewCtrl.dismiss(this.form.value);
    };
    FormularioMovilPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-formulario-movil',template:/*ion-inline-start:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\FORMULARIO\formulario-movil\formulario-movil.html"*/'<ion-header>\n    <ion-navbar>\n      <ion-title>{{idfrmn}}</ion-title>\n\n      <ion-buttons end>\n          <button (click)="cancel()" icon-only ion-button padding-right>\n              <ion-icon name="md-close"></ion-icon>\n            </button>\n\n      </ion-buttons>\n    </ion-navbar>\n  </ion-header>\n\n<ion-content padding>\n  <div *ngIf="controls else loading" >\n    <dynamic-form #dynamicForm="dynamicForm" [controls]="controls" [form]="form"></dynamic-form>\n  </div>\n\n	<ng-template #loading>\n		<div class="loading">\n			Obteniendo Información...\n		</div>\n	</ng-template>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n\n\n    <ion-buttons end>\n      <button  [hidden]=\'!muestrabien\' ion-button color="secondary" icon-right (click)="submitForm($event)" [disabled]="!form.valid"  outline>\n        Grabar\n        <ion-icon name="send"></ion-icon>\n      </button>\n    </ion-buttons>\n\n\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\FORMULARIO\formulario-movil\formulario-movil.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_2__providers__["d" /* NotificationProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers__["a" /* Auth */], __WEBPACK_IMPORTED_MODULE_5__common_forms_controls_service__["a" /* ControlsService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["F" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavParams */]])
    ], FormularioMovilPage);
    return FormularioMovilPage;
}());

//# sourceMappingURL=formulario-movil.js.map

/***/ }),

/***/ 1490:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectControl; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__control_base__ = __webpack_require__(1304);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var SelectControl = /** @class */ (function (_super) {
    __extends(SelectControl, _super);
    function SelectControl(options) {
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, options) || this;
        _this.controlType = 'select';
        _this.options = [];
        _this.options = options['options'] || [];
        return _this;
    }
    return SelectControl;
}(__WEBPACK_IMPORTED_MODULE_0__control_base__["a" /* ControlBase */]));

//# sourceMappingURL=select.control.js.map

/***/ }),

/***/ 1491:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TextareaControl; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__control_base__ = __webpack_require__(1304);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var TextareaControl = /** @class */ (function (_super) {
    __extends(TextareaControl, _super);
    function TextareaControl(options) {
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, options) || this;
        _this.controlType = 'textarea';
        _this.type = options['type'] || '';
        return _this;
    }
    return TextareaControl;
}(__WEBPACK_IMPORTED_MODULE_0__control_base__["a" /* ControlBase */]));

//# sourceMappingURL=textarea.control.js.map

/***/ }),

/***/ 1492:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TextboxControl; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__control_base__ = __webpack_require__(1304);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var TextboxControl = /** @class */ (function (_super) {
    __extends(TextboxControl, _super);
    function TextboxControl(options) {
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, options) || this;
        _this.controlType = 'textbox';
        _this.type = options['type'] || '';
        return _this;
    }
    return TextboxControl;
}(__WEBPACK_IMPORTED_MODULE_0__control_base__["a" /* ControlBase */]));

//# sourceMappingURL=textbox.control.js.map

/***/ }),

/***/ 1493:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LabelControl; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__control_base__ = __webpack_require__(1304);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var LabelControl = /** @class */ (function (_super) {
    __extends(LabelControl, _super);
    function LabelControl(options) {
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, options) || this;
        _this.controlType = 'label';
        _this.type = options['type'] || '';
        return _this;
    }
    return LabelControl;
}(__WEBPACK_IMPORTED_MODULE_0__control_base__["a" /* ControlBase */]));

//# sourceMappingURL=label.control.js.map

/***/ }),

/***/ 1494:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoteControl; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__control_base__ = __webpack_require__(1304);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var NoteControl = /** @class */ (function (_super) {
    __extends(NoteControl, _super);
    function NoteControl(options) {
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, options) || this;
        _this.controlType = 'note';
        _this.type = options['type'] || '';
        return _this;
    }
    return NoteControl;
}(__WEBPACK_IMPORTED_MODULE_0__control_base__["a" /* ControlBase */]));

//# sourceMappingURL=note.control.js.map

/***/ }),

/***/ 1495:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RangoControl; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__control_base__ = __webpack_require__(1304);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var RangoControl = /** @class */ (function (_super) {
    __extends(RangoControl, _super);
    function RangoControl(options) {
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, options) || this;
        _this.controlType = 'rango';
        _this.type = options['type'] || '';
        return _this;
    }
    return RangoControl;
}(__WEBPACK_IMPORTED_MODULE_0__control_base__["a" /* ControlBase */]));

//# sourceMappingURL=rango.control.js.map

/***/ }),

/***/ 1496:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FechaControl; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__control_base__ = __webpack_require__(1304);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var FechaControl = /** @class */ (function (_super) {
    __extends(FechaControl, _super);
    function FechaControl(options) {
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, options) || this;
        _this.controlType = 'fecha';
        _this.type = options['type'] || '';
        return _this;
    }
    return FechaControl;
}(__WEBPACK_IMPORTED_MODULE_0__control_base__["a" /* ControlBase */]));

//# sourceMappingURL=Fecha.control.js.map

/***/ }),

/***/ 1497:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckControl; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__control_base__ = __webpack_require__(1304);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var CheckControl = /** @class */ (function (_super) {
    __extends(CheckControl, _super);
    function CheckControl(options) {
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, options) || this;
        _this.controlType = 'check';
        _this.type = options['type'] || '';
        return _this;
    }
    return CheckControl;
}(__WEBPACK_IMPORTED_MODULE_0__control_base__["a" /* ControlBase */]));

//# sourceMappingURL=check.control.js.map

/***/ }),

/***/ 1498:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FechahoraControl; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__control_base__ = __webpack_require__(1304);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var FechahoraControl = /** @class */ (function (_super) {
    __extends(FechahoraControl, _super);
    function FechahoraControl(options) {
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, options) || this;
        _this.controlType = 'fechahora';
        _this.type = options['type'] || '';
        return _this;
    }
    return FechahoraControl;
}(__WEBPACK_IMPORTED_MODULE_0__control_base__["a" /* ControlBase */]));

//# sourceMappingURL=fechahora.control.js.map

/***/ }),

/***/ 1499:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HoraControl; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__control_base__ = __webpack_require__(1304);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var HoraControl = /** @class */ (function (_super) {
    __extends(HoraControl, _super);
    function HoraControl(options) {
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, options) || this;
        _this.controlType = 'hora';
        _this.type = options['type'] || '';
        return _this;
    }
    return HoraControl;
}(__WEBPACK_IMPORTED_MODULE_0__control_base__["a" /* ControlBase */]));

//# sourceMappingURL=hora.control.js.map

/***/ }),

/***/ 1500:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageControl; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__control_base__ = __webpack_require__(1304);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var ImageControl = /** @class */ (function (_super) {
    __extends(ImageControl, _super);
    function ImageControl(options) {
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, options) || this;
        _this.controlType = 'imagen';
        _this.type = options['type'] || '';
        return _this;
    }
    return ImageControl;
}(__WEBPACK_IMPORTED_MODULE_0__control_base__["a" /* ControlBase */]));

//# sourceMappingURL=image.control.js.map

/***/ }),

/***/ 1501:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DynamicFormModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__controls_service__ = __webpack_require__(1309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dynamic_controls_service__ = __webpack_require__(1310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dynamic_form_component__ = __webpack_require__(1502);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_selectable__ = __webpack_require__(446);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var DynamicFormModule = /** @class */ (function () {
    function DynamicFormModule() {
    }
    DynamicFormModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicModule */], __WEBPACK_IMPORTED_MODULE_5_ionic_selectable__["b" /* IonicSelectableModule */]],
            providers: [__WEBPACK_IMPORTED_MODULE_3__dynamic_controls_service__["a" /* DynamicControlsService */], __WEBPACK_IMPORTED_MODULE_2__controls_service__["a" /* ControlsService */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__dynamic_form_component__["a" /* DynamicFormComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_4__dynamic_form_component__["a" /* DynamicFormComponent */]]
        })
    ], DynamicFormModule);
    return DynamicFormModule;
}());

//# sourceMappingURL=dynamic-form.module.js.map

/***/ }),

/***/ 1502:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DynamicFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dynamic_controls_service__ = __webpack_require__(1310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_image_image__ = __webpack_require__(448);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







//import { ImageModalPage } from '../../pages/WEBAPP/image-modal/image-modal';
var DynamicFormComponent = /** @class */ (function () {
    function DynamicFormComponent(modalCtrl, actionSheetCtrl, _IMAGE, controlsService, translateService) {
        this.modalCtrl = modalCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this._IMAGE = _IMAGE;
        this.controlsService = controlsService;
        this.translateService = translateService;
        /*
        <ion-slides [options]="sliderOpts">
            <ion-slide *ngFor="let img of [1, 2, 3]">
              <img src="assets/img/{{ img }}.png" tappable (click)="openPreview(img)">
            </ion-slide>
          </ion-slides>
        
          ion-slides {
            margin-top: 30%;
            background: #e6e6e6;
         
            img {
                padding-top: 20px;
                padding-bottom: 20px;
            }
        }
        */
        this.sliderOpts = {
            zoom: false,
            slidesPerView: 1.5,
            spaceBetween: 20,
            centeredSlides: true
        };
        //@ViewChild('myImage') myImage;
        // <img class="circle-pic"  height="150 px" width="150 px" #myImage  >  
        this.controls = [];
        this.submit = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    //ngOnChanges() {}
    //ngAfterContentInit(){  }
    //ngDoCheck(){}
    //ngAfterViewChecked(){}
    //ngOnDestroy(){}
    //ngAfterContentChecked() { console.log("1");}
    DynamicFormComponent.prototype.ngAfterViewInit = function () {
        for (var i = 0; i < this.controls.length; i++) {
            var aa;
            aa = this.controls[i];
            if (aa.type == 'imagen') {
                var BB = document.getElementById(aa.key + "xx");
                if (BB) {
                    BB.setAttribute("src", aa.value);
                }
            }
        }
    };
    DynamicFormComponent.prototype.pushPage = function () {
        console.log("Looks like I'm about to leave :(");
    };
    DynamicFormComponent.prototype.ionViewWillLeave = function () {
        console.log("Looks like I'm about to leave :(");
    };
    DynamicFormComponent.prototype.ngOnInit = function () {
        this.form = this.controlsService.toFormGroup(this.form, this.controls);
    };
    DynamicFormComponent.prototype.openPreview = function (op2, op3) {
        var valor = this.form.value[op2];
        var modalPage2 = this.modalCtrl.create('ImageModalPage', { imgv: valor });
        modalPage2.present();
    };
    DynamicFormComponent.prototype.ionViewDidLoad = function () {
        //poner todas las imagenes
    };
    DynamicFormComponent.prototype.onSubmit = function () {
        this.submit.next(this.form.value);
    };
    DynamicFormComponent.prototype.poneimg = function (selectedValue, op2, op3) {
    };
    DynamicFormComponent.prototype.showimg = function (op2, op3) {
        var valorXX = this.form.value[op2];
        var modalPage2 = this.modalCtrl.create('VerimagenPage', { img: valorXX });
        modalPage2.present();
    };
    DynamicFormComponent.prototype.onSelectBlur = function (selectedValue, op2, op3) {
        var arr = this.form.value;
        var valorseleccionado = arr[op2];
        switch (op2) {
            case 'fecha':
                arr[op2] = valorseleccionado + 'T00:00:00Z';
                this.form.setValue(arr);
                break;
            case 'hora':
                arr[op2] = '2019-01-01T' + valorseleccionado + ':00Z';
                this.form.setValue(arr);
                break;
            default:
        }
        //patchValue(arr,{onlySelf : true,emitEvent : false }
        //2019-03-29T15:13:00Z
    };
    //this.maintenance.controls[“firstname”].setValue(this.firstname);
    DynamicFormComponent.prototype.updateProfileImage = function (selectedValue, op2, op3) {
        var _this = this;
        this.imagentemp = op2;
        var t1, t2;
        this.translateService.get('SELECCIONE_IMAGEN').subscribe(function (value) {
            t1 = value;
        });
        this.translateService.get('TOME_IMAGEN').subscribe(function (value) {
            t2 = value;
        });
        var actionSheet = this.actionSheetCtrl.create({
            title: t1,
            buttons: [
                {
                    text: t2,
                    handler: function () {
                        _this.takePhotograph(selectedValue, _this.imagentemp, op3);
                    }
                },
                {
                    text: t1,
                    handler: function () {
                        _this.selectImage(selectedValue, _this.imagentemp, op3);
                    }
                }
            ]
        });
        actionSheet.present();
    };
    DynamicFormComponent.prototype.takePhotograph = function (selectedValue, op2, op3) {
        var _this = this;
        if (__WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__["a" /* Camera */]['installed']()) {
            this._IMAGE
                .takePhotograph()
                .then(function (image) {
                //          this.f1 	= image.toString();
                _this.f1 = image.toString();
                _this._IMAGE.generateFromImage(_this.f1, 200, 200, 0.5, function (data) {
                    var arr = _this.form.value;
                    arr[op2] = data;
                    _this.form.setValue(arr);
                    _this.f1 = data;
                    var BB = document.getElementById(_this.imagentemp + "xx");
                    if (BB) {
                        BB.setAttribute("src", data);
                    }
                });
            })
                .catch(function (err) {
                console.log(err);
            });
        }
        else {
            this.fileInput.nativeElement.click();
        }
    };
    DynamicFormComponent.prototype.selectImage = function (selectedValue, op2, op3) {
        var _this = this;
        if (__WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__["a" /* Camera */]['installed']()) {
            this._IMAGE
                .selectPhotograph()
                .then(function (image) {
                _this.f1 = image.toString();
                _this._IMAGE.generateFromImage(_this.f1, 200, 200, 0.5, function (data) {
                    var arr = _this.form.value;
                    arr[op2] = data;
                    _this.form.setValue(arr);
                    _this.f1 = data;
                    var BB = document.getElementById(_this.imagentemp + "xx");
                    if (BB) {
                        BB.setAttribute("src", data);
                    }
                });
            })
                .catch(function (err) {
                console.log(err);
            });
        }
        else {
            this.fileInput.nativeElement.click();
        }
    };
    DynamicFormComponent.prototype.processWebImage = function (event, op2, op3) {
        var _this = this;
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();
            reader.onload = function (readerEvent) {
                _this.f1 = readerEvent.target.result;
                _this._IMAGE.generateFromImage(_this.f1, 200, 200, 0.5, function (data) {
                    var arr = _this.form.value;
                    arr[_this.imagentemp] = data;
                    _this.form.setValue(arr);
                    _this.f1 = data;
                    var BB = document.getElementById(_this.imagentemp + "xx");
                    if (BB) {
                        BB.setAttribute("src", data);
                    }
                });
            };
            reader.readAsDataURL(event.target.files[0]);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('fileInput'),
        __metadata("design:type", Object)
    ], DynamicFormComponent.prototype, "fileInput", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], DynamicFormComponent.prototype, "controls", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormGroup */])
    ], DynamicFormComponent.prototype, "form", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], DynamicFormComponent.prototype, "submit", void 0);
    DynamicFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'dynamic-form',template:/*ion-inline-start:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\common\forms\dynamic-form.component.html"*/'<form (ngSubmit)="onSubmit()" [formGroup]="form">\n  <ion-list>        \n    <ion-item *ngFor="let control of controls" text-wrap>\n                \n      <ion-label  [ngClass]="[control.fondoetiqueta]" [color]="control.coloretiqueta" *ngIf="control.controlType !== \'imagen\' && control.position === \'stacked\'  && control.controlType !== \'label\' && control.controlType !== \'note\' && control.hidden !== \'true\'" stacked>{{control.label}}</ion-label>\n      <ion-label  [ngClass]="[control.fondoetiqueta]" [color]="control.coloretiqueta" *ngIf="control.controlType !== \'imagen\' && control.position === \'floating\'   && control.controlType !== \'label\' && control.controlType !== \'note\' && control.hidden !== \'true\'" floating>{{control.label}}</ion-label>\n      <ion-label   [ngClass]="[control.fondoetiqueta]" [color]="control.coloretiqueta"    *ngIf="control.controlType !== \'imagen\' &&  control.position === \'fixed\'   && control.controlType !== \'label\' && control.controlType !== \'note\' && control.hidden !== \'true\'" fixed>   {{control.label}}  </ion-label>\n      <ion-label  [ngClass]="[control.fondoetiqueta]" [color]="control.coloretiqueta" *ngIf="control.controlType !== \'imagen\' && control.position === \'\'  && control.controlType !== \'label\' && control.controlType !== \'note\' && control.hidden !== \'true\'"  >{{control.label}}</ion-label>\n      \n         <!--\n      <ion-label  (click)="showimg(control.key,control)"     *ngIf="control.controlType === \'imagen\' &&  control.position === \'fixed\'  " fixed>   {{control.label}} </ion-label>\n      -->\n\n\n      <ion-note  [ngClass]="[control.fondoetiqueta]" [color]="control.coloretiqueta"  value=\'.\' color="secondary" *ngIf="control.controlType === \'note\'  && control.hidden !== \'true\'" item-end >{{control.label}}</ion-note>\n      <ion-label  [ngClass]="[control.fondoetiqueta]" [color]="control.coloretiqueta" value=\'.\' *ngIf="control.controlType === \'label\' && control.hidden !== \'true\'" text-center><h2>{{control.label}}</h2></ion-label>\n  \n      <ion-input  [disabled]="control.disabled" *ngIf="control.controlType === \'textbox\' && control.hidden !== \'true\'" [formControlName]="control.key"\n        [id]="control.key" [type]="control.type" [placeholder]="control.placeholder">\n      </ion-input>   \n       \n        <ion-textarea  [disabled]="control.disabled"   *ngIf="control.controlType === \'textarea\' && control.hidden !== \'true\'" [formControlName]="control.key"\n        [id]="control.key" [placeholder]="control.placeholder" rows="4">\n        </ion-textarea>\n   \n        <input   type="hidden"  *ngIf="control.controlType === \'imagen\' && control.hidden !== \'true\'"   name="control.key" [formControlName]="control.key"     [id]="control.key">\n     <!--\n        <ion-label  [ngClass]="[control.fondoetiqueta]" [color]="control.coloretiqueta" \n        (click)="updateProfileImage($event,control.key,control)"  *ngIf="control.controlType === \'imagen\' && control.hidden !== \'true\'">  \n                      Adjunte imagen         </ion-label>\n       -->\n                      \n                      \n        <input type="file" accept="image/*" #fileInput style="visibility: hidden; height: 0px"  (change)="processWebImage($event,control.key,control)" *ngIf="control.controlType === \'imagen\' && control.hidden !== \'true\'"/>\n     \n       <ion-thumbnail    (click)="updateProfileImage($event,control.key,control)"  slot="end" *ngIf="control.controlType === \'imagen\' && control.hidden !== \'true\'">\n\n            <ion-grid>\n                <ion-row>\n                  <ion-col>\n                      {{control.label}} \n                  </ion-col>\n                  <ion-col>\n                      <img  tappable  [id]="control.key + \'xx\'">\n                  </ion-col>  \n                  <ion-col>\n                      \n                    </ion-col>\n              </ion-row>\n            </ion-grid>\n\n         \n        \n        </ion-thumbnail>\n \n  \n\n      <ion-toggle  [disabled]="control.disabled" *ngIf="control.controlType === \'check\' && control.hidden !== \'true\'"  color="secondary" [formControlName]="control.key"     [id]="control.key"></ion-toggle>\n      <ion-datetime (ionBlur)="onSelectBlur($event,control.key,control)"  displayFormat="DD/MM/YYYY" [disabled]="control.disabled" *ngIf="control.controlType === \'fecha\' && control.hidden !== \'true\'"  color="secondary" [formControlName]="control.key"     [id]="control.key"></ion-datetime>\n      <ion-datetime (ionBlur)="onSelectBlur($event,control.key,control)"  displayFormat="DD/MM/YYYY hh:mm A" [disabled]="control.disabled" *ngIf="control.controlType === \'fechahora\' && control.hidden !== \'true\'"  color="secondary" [formControlName]="control.key"     [id]="control.key"></ion-datetime>\n      <ion-datetime (ionBlur)="onSelectBlur($event,control.key,control)"  displayFormat="hh:mm A" [disabled]="control.disabled" *ngIf="control.controlType === \'hora\' && control.hidden !== \'true\'"  color="secondary" [formControlName]="control.key"     [id]="control.key"></ion-datetime>\n      <ion-range  min="{{control.rangomin}}" max="{{control.rangomax}}" step="{{control.rangostep}}" pin="true"  snaps="true" color="secondary"  [disabled]="control.disabled" *ngIf="control.controlType === \'rango\' && control.hidden !== \'true\'"  color="secondary" [formControlName]="control.key"     [id]="control.key" snaps="true" color="secondary"></ion-range>\n<!---->\n        <ionic-selectable  *ngIf="control.controlType === \'select\' && control.hidden !== \'true\'" placeholder="Seleccione un valor"  [canSearch]="true" searchPlaceholder="Buscar un registro" [shouldBackdropClose]="false" modalCssClass="modal"   closeButtonSlot="start"             [searchFailText]="\'No Existen registros.\'"  clearButtonText="Limpiar"\n        itemValueField="key" itemTextField="label" [canClear]="true"\n        [formControlName]="control.key" [id]="control.key"  [items]="control.options"   \n         item-content text-wrap> \n      <ng-template ionicSelectableCloseButtonTemplate><ion-icon name="close-circle" style="font-size: 24px;"></ion-icon>              </ng-template>\n      <ng-template ionicSelectableMessageTemplate>Seleccione un Registro.</ng-template>\n      <ng-template ionicSelectableTitleTemplate> idformularioes </ng-template>\n \n  </ionic-selectable>\n            \n\n        <!--\n     min="control.rangomin" max="control.rangomax" step="control.rangostep"\n      <ion-select  [disabled]="control.disabled"  [formControlName]="control.key" [id]="control.key" \n      *ngIf="control.controlType === \'select\' && control.hidden !== \'true\'">\n        <ion-option *ngFor="let option of control.options" [value]="option.key">{{option.label}}</ion-option>\n      </ion-select>\n    -->\n\n    </ion-item>\n  </ion-list>\n</form>\n'/*ion-inline-end:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\common\forms\dynamic-form.component.html"*/,
            exportAs: 'dynamicForm'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_4__providers_image_image__["a" /* ImageProvider */], __WEBPACK_IMPORTED_MODULE_3__dynamic_controls_service__["a" /* DynamicControlsService */], __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__["c" /* TranslateService */]])
    ], DynamicFormComponent);
    return DynamicFormComponent;
}());

//# sourceMappingURL=dynamic-form.component.js.map

/***/ }),

/***/ 1503:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormConfigService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(453);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FormConfigService = /** @class */ (function () {
    function FormConfigService(http) {
        this.http = http;
        this.BASEURL = 'assets/data/';
    }
    FormConfigService.prototype.getFormConfig = function (filename) {
        return this.http.get(this.BASEURL + filename);
    };
    FormConfigService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], FormConfigService);
    return FormConfigService;
}());

//# sourceMappingURL=form-config.service.js.map

/***/ })

});
//# sourceMappingURL=26.js.map