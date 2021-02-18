webpackJsonp([117],{

/***/ 1060:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Desagregado1PageModule", function() { return Desagregado1PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__desagregado1__ = __webpack_require__(1516);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pipes_pipes_module__ = __webpack_require__(445);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_selectable__ = __webpack_require__(446);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var Desagregado1PageModule = /** @class */ (function () {
    function Desagregado1PageModule() {
    }
    Desagregado1PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__desagregado1__["a" /* Desagregado1Page */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__desagregado1__["a" /* Desagregado1Page */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild(),
                __WEBPACK_IMPORTED_MODULE_4__pipes_pipes_module__["a" /* PipesModule */],
                __WEBPACK_IMPORTED_MODULE_5_ionic_selectable__["b" /* IonicSelectableModule */]
            ],
        })
    ], Desagregado1PageModule);
    return Desagregado1PageModule;
}());

//# sourceMappingURL=desagregado1.module.js.map

/***/ }),

/***/ 1516:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Desagregado1Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_selectable__ = __webpack_require__(446);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var Desagregado1Page = /** @class */ (function () {
    function Desagregado1Page(viewCtrl, _FB, modalCtrl, actionSheetCtrl, storage, alertCtrl, msj, translateService, navCtrl, navParams, regService) {
        var _this = this;
        this.viewCtrl = viewCtrl;
        this._FB = _FB;
        this.modalCtrl = modalCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.msj = msj;
        this.translateService = translateService;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.regService = regService;
        this.vgrupo = [];
        this.vgrupo2 = [];
        this.vgrupo3 = [];
        this.vgrupo4 = [];
        this.vgrupo5 = [];
        this.form = this._FB.group({
            idterritorio: ['', __WEBPACK_IMPORTED_MODULE_6__angular_forms__["h" /* Validators */].required],
            idagrupacion: ['', __WEBPACK_IMPORTED_MODULE_6__angular_forms__["h" /* Validators */].required],
            idterritorio2: ['', __WEBPACK_IMPORTED_MODULE_6__angular_forms__["h" /* Validators */].required],
            idagrupacion2: ['', __WEBPACK_IMPORTED_MODULE_6__angular_forms__["h" /* Validators */].required],
            idproducto: ['']
        });
        this.idindicador = this.navParams.data.idindicador;
        //  this.tindicador=this.navParams.data.record.nombre;
        this.regService.getRegsintokora('tipoterritorios/' + this.idindicador, 'oracle2').then(function (data) {
            _this.vgrupo = data;
            _this.idterritorio = { codigo: '1', nombre: 'Nacional' };
            _this.regService.getRegsintokora('territorios/1', 'oracle2').then(function (data) {
                _this.vgrupo3 = data;
                _this.idterritorio2 = { codigo: '1', nombre: 'Nacional' };
            }, function (err) { _this.msj.showError3('Error', err.error); });
            _this.regService.getRegsintokora('tipoagrupaciones/' + _this.idindicador + '/1', 'oracle2').then(function (data) {
                _this.vgrupo2 = data;
                _this.idagrupacion = { codigo: '1', nombre: 'Sin agrupación' };
            }, function (err) {
                //  this.msj.showError3('Error',err.error);
            });
        }, function (err) {
            //   this.msj.showError3('Error',err.error);
        });
    }
    Desagregado1Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Desagregado1Page');
    };
    Desagregado1Page.prototype.portChange2 = function (event) {
    };
    Desagregado1Page.prototype.portChange = function (event) {
        var _this = this;
        this.regService.getRegsintokora('territorios/' + event.value.codigo, 'oracle2').then(function (data) {
            _this.vgrupo3 = data;
        }, function (err) {
            //   this.msj.showError3('Error',err.error);  
        });
        this.regService.getRegsintokora('tipoagrupaciones/' + this.idindicador + '/' + event.value.codigo, 'oracle2').then(function (data) {
            _this.vgrupo2 = data;
        }, function (err) {
            //  this.msj.showError3('Error',err.error);
        });
    };
    Desagregado1Page.prototype.portChange3 = function (event) {
        //    this.regService.getRegsintokora('agrupaciones/' +event.value.codigo ,'oracle2').then((data) => {      this.vgrupo4=data  ;  this.vgrupo4.push({codigo:'TODOS',nombre:'TODOS'}); }, (err) => {     
        // this.msj.showError3('Error',err.error);  
        // });
        //this.createBarChart0()
    };
    Desagregado1Page.prototype.portChange5 = function (event) {
        //   this.createBarChart2(event.value.codigo,event.value.codigo );
        //   this.  createBarChart2a('datosgrafica2a/' + event.value.codigo  );
    };
    Desagregado1Page.prototype.portChange4 = function (event) { };
    Desagregado1Page.prototype.cancel = function () {
        this.viewCtrl.dismiss();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('portComponent'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5_ionic_selectable__["a" /* IonicSelectableComponent */])
    ], Desagregado1Page.prototype, "portComponent", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('portComponent2'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5_ionic_selectable__["a" /* IonicSelectableComponent */])
    ], Desagregado1Page.prototype, "portComponent2", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('portComponent3'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5_ionic_selectable__["a" /* IonicSelectableComponent */])
    ], Desagregado1Page.prototype, "portComponent3", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('portComponent4'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5_ionic_selectable__["a" /* IonicSelectableComponent */])
    ], Desagregado1Page.prototype, "portComponent4", void 0);
    Desagregado1Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-desagregado1',template:/*ion-inline-start:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\GRAFICADOR\desagregado1\desagregado1.html"*/'<ion-header >\n  <ion-navbar  [color]="\'bottonx\'">\n\n    <ion-title>Desagregación</ion-title>\n    <ion-buttons start>\n      <button (click)="cancel()" icon-only ion-button padding-right>\n          <ion-icon name="md-close"></ion-icon>\n        </button>\n     \n  </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n    <form     [formGroup]="form"   text-wrap>   \n                                 \n        <ion-row text-wrap>\n           <ion-col >\n               <ion-item margin-bottom>\n                   <ion-label color="secondary" stacked><strong>NIVEL TERRITORIO</strong></ion-label>\n           \n                   <ionic-selectable #portComponent (onChange)="portChange($event)" placeholder="Seleccione un valor"  [canSearch]="true" \n                   searchPlaceholder="Buscar un registro" [shouldBackdropClose]="false" modalCssClass="modal"   closeButtonSlot="start"             \n                   [searchFailText]="\'No Existen registros.\'"  clearButtonText="Limpiar"\n           itemValueField="codigo" itemTextField="nombre" [canClear]="true"\n           [formControl]="form.controls[\'idterritorio\']"     [(ngModel)]="idterritorio" [items]="vgrupo"     item-content text-wrap> \n           <ng-template ionicSelectableCloseButtonTemplate><ion-icon name="close-circle" style="font-size: 24px;"></ion-icon>              </ng-template>\n           <ng-template ionicSelectableMessageTemplate>Seleccione un Registro.</ng-template>\n           <ng-template ionicSelectableTitleTemplate> Nivel Territorios</ng-template>\n           \n           </ionic-selectable>\n               </ion-item>\n               <ion-item class="invalid" *ngIf="!form.controls.idterritorio.valid && (form.controls.idterritorio.dirty || form.controls.idterritorio.touched)" text-wrap>\n                 <ion-icon name="warning"></ion-icon>\n                 Seleccione un nivel territorio valido\n                 </ion-item>\n         \n           </ion-col>\n           <ion-col  >\n               \n               \n               <ion-item margin-bottom>\n                   <ion-label color="secondary"  stacked><strong>TERRITORIO</strong></ion-label>\n           \n                   <ionic-selectable #portComponent2 (onChange)="portChange2($event)"  placeholder="Seleccione un valor"  [canSearch]="true" \n                   searchPlaceholder="Buscar un registro" [shouldBackdropClose]="false" modalCssClass="modal"   closeButtonSlot="start"             \n                   [searchFailText]="\'No Existen registros.\'"  clearButtonText="Limpiar"\n           itemValueField="codigo" itemTextField="nombre" [canClear]="true"\n           [formControl]="form.controls[\'idterritorio2\']"     [(ngModel)]="idterritorio2" [items]="vgrupo3"     item-content text-wrap> \n           <ng-template ionicSelectableCloseButtonTemplate><ion-icon name="close-circle" style="font-size: 24px;"></ion-icon>              </ng-template>\n           <ng-template ionicSelectableMessageTemplate>Seleccione un Registro.</ng-template>\n           <ng-template ionicSelectableTitleTemplate> Territorios</ng-template>\n           \n           </ionic-selectable>\n               </ion-item>\n               <ion-item class="invalid" *ngIf="!form.controls.idterritorio2.valid && (form.controls.idterritorio2.dirty || form.controls.idterritorio2.touched)" text-wrap>\n                 <ion-icon name="warning"></ion-icon>\n                 Seleccione un territorio valido\n                 </ion-item>\n           \n           </ion-col>\n           <ion-col >\n               \n                       \n               <ion-item margin-bottom>\n                   <ion-label color="secondary" stacked><strong>TIPO AGRUPACIÓN</strong></ion-label>\n           \n                   <ionic-selectable #portComponent3 (onChange)="portChange3($event)" placeholder="Seleccione un valor"  [canSearch]="true" \n                   searchPlaceholder="Buscar un registro" [shouldBackdropClose]="false" modalCssClass="modal"   closeButtonSlot="start"             \n                   [searchFailText]="\'No Existen registros.\'"  clearButtonText="Limpiar"\n           itemValueField="codigo" itemTextField="nombre" [canClear]="true"\n           [formControl]="form.controls[\'idagrupacion\']"     [(ngModel)]="idagrupacion" [items]="vgrupo2"     item-content text-wrap> \n           <ng-template ionicSelectableCloseButtonTemplate><ion-icon name="close-circle" style="font-size: 24px;"></ion-icon>              </ng-template>\n           <ng-template ionicSelectableMessageTemplate>Seleccione un Registro.</ng-template>\n           <ng-template ionicSelectableTitleTemplate>Tipo Agrupaciones</ng-template>\n           \n           </ionic-selectable>\n               </ion-item>\n               <ion-item class="invalid" *ngIf="!form.controls.idagrupacion.valid && (form.controls.idagrupacion.dirty || form.controls.idagrupacion.touched)" text-wrap>\n                 <ion-icon name="warning"></ion-icon>\n                 Seleccione un tipo agrupación valida\n                 </ion-item>\n           \n             \n               </ion-col>\n         </ion-row>\n                                     </form>\n\n</ion-content>\n'/*ion-inline-end:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\GRAFICADOR\desagregado1\desagregado1.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["F" /* ViewController */], __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__providers__["d" /* NotificationProvider */], __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers__["a" /* Auth */]])
    ], Desagregado1Page);
    return Desagregado1Page;
}());

//# sourceMappingURL=desagregado1.js.map

/***/ })

});
//# sourceMappingURL=117.js.map