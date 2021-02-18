webpackJsonp([114],{

/***/ 1063:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "indicadormedioPageModule", function() { return indicadormedioPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__indicadormedio__ = __webpack_require__(1519);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pipes_pipes_module__ = __webpack_require__(445);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_selectable__ = __webpack_require__(446);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var indicadormedioPageModule = /** @class */ (function () {
    function indicadormedioPageModule() {
    }
    indicadormedioPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__indicadormedio__["a" /* indicadormedioPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__indicadormedio__["a" /* indicadormedioPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild(),
                __WEBPACK_IMPORTED_MODULE_4__pipes_pipes_module__["a" /* PipesModule */],
                __WEBPACK_IMPORTED_MODULE_5_ionic_selectable__["b" /* IonicSelectableModule */]
            ],
        })
    ], indicadormedioPageModule);
    return indicadormedioPageModule;
}());

//# sourceMappingURL=indicadormedio.module.js.map

/***/ }),

/***/ 1519:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return indicadormedioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_selectable__ = __webpack_require__(446);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var indicadormedioPage = /** @class */ (function () {
    function indicadormedioPage(element, viewCtrl, _FB, modalCtrl, actionSheetCtrl, storage, alertCtrl, msj, translateService, navCtrl, navParams, regService) {
        var _this = this;
        this.element = element;
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
        this.information = [];
        this.information2 = [];
        this.items = [];
        this.tiposus = [];
        this.xpos = 0;
        this.ypos = 0;
        this.titulox = this.navParams.data.record.nombre;
        this.idmarco = this.navParams.data.record.idmeta;
        this.big = this.navParams.data.record.big;
        this.small = this.navParams.data.record.small;
        //this.select.open()
        this.form = this._FB.group({
            idterritorio: ['', __WEBPACK_IMPORTED_MODULE_6__angular_forms__["h" /* Validators */].required],
            idterritorio2: ['', __WEBPACK_IMPORTED_MODULE_6__angular_forms__["h" /* Validators */].required]
        });
        this.idindicador = this.navParams.data.record.idmeta;
        this.idindicadorn = this.navParams.data.record.nombre;
        this.regService.getRegsintokora('pggarea2/' + this.idindicador, 'oracle2').then(function (data) {
            _this.vgrupo = data;
            var cdata = data;
            if (cdata.length > 0) {
                _this.idterritorio = cdata[0].codigo + "," + cdata[0].nombre;
                _this.area = cdata[0].codigo;
                _this.arean = cdata[0].nombre;
                _this.vgrupo2 = [];
                _this.idterritorio2 = '';
                _this.regService.getRegsintokora('pggareaindicador/' + _this.idindicador + '/' + _this.area, 'oracle2').then(function (data) {
                    _this.vgrupo2 = data;
                    var cdata2 = data;
                    if (cdata2.length > 0) {
                        _this.idterritorio2 = cdata2[0].codigo + "°" + cdata2[0].nombre;
                        _this.terr1 = _this.vgrupo2[0].codigo;
                        _this.terr1n = _this.vgrupo2[0].nombre;
                        //    this.select2.interface="popover"   
                        //      setTimeout(() => {                this.select2.open();             },150);  
                        //         this.select2.open()
                        setTimeout(function () {
                            var element = _this.element.nativeElement;
                            var select33 = element.querySelector('#select23');
                            select33.value = undefined;
                            select33.click();
                        }, 200);
                    }
                }, function (err) {
                    _this.vgrupo2 = [];
                    //   this.msj.showError3('Error',err.error);  
                });
            }
        }, function (err) {
            //   this.msj.showError3('Error',err.error);
            _this.vgrupo = [];
        });
        // 
    }
    indicadormedioPage.prototype.onSelectChange = function (selectedValue) {
        var _this = this;
        var arrah = this.idterritorio.split(',');
        this.area = arrah[0];
        this.arean = arrah[1];
        this.vgrupo2 = [];
        this.idterritorio2 = '';
        this.regService.getRegsintokora('pggareaindicador/' + this.idindicador + '/' + this.area, 'oracle2').then(function (data) {
            _this.vgrupo2 = data;
            var cdata = data;
            if (cdata.length > 0) {
                _this.idterritorio2 = cdata[0].codigo + "°" + cdata[0].nombre;
                _this.terr1 = _this.vgrupo2[0].codigo;
                _this.terr1n = _this.vgrupo2[0].nombre;
                setTimeout(function () {
                    var element = _this.element.nativeElement;
                    var select33 = element.querySelector('#select23');
                    select33.value = undefined;
                    select33.click();
                }, 200);
            }
        }, function (err) {
            _this.vgrupo2 = [];
            //   this.msj.showError3('Error',err.error);  
        });
    };
    indicadormedioPage.prototype.portChange = function (event) {
        var _this = this;
        this.area = event.value.codigo;
        this.arean = event.value.nombre;
        this.vgrupo2 = [];
        this.idterritorio2 = null;
        this.regService.getRegsintokora('pggareaindicador/' + this.idindicador + '/' + event.value.codigo, 'oracle2').then(function (data) {
            _this.vgrupo2 = data;
            var cdata = data;
            if (cdata.length > 0) {
                _this.idterritorio2 = cdata[0].codigo + "°" + cdata[0].nombre;
                _this.terr1 = _this.vgrupo2[0].codigo;
                _this.terr1n = _this.vgrupo2[0].nombre;
                setTimeout(function () {
                    var element = _this.element.nativeElement;
                    var select33 = element.querySelector('#select23');
                    select33.value = undefined;
                    select33.click();
                }, 200);
            }
        }, function (err) {
            _this.vgrupo2 = [];
            //   this.msj.showError3('Error',err.error);  
        });
    };
    indicadormedioPage.prototype.onSelectChange2 = function (selectedValue) {
        var arrah2 = this.idterritorio2.split('°');
        this.terr1 = arrah2[0];
        this.terr1n = arrah2[1];
        this.navCtrl.push('IndicadorGraficaPage', { record: { codigo: this.terr1, nombre: this.terr1n }, idarea: this.area, idarean: this.arean, idmarco: '0', idpolitica: this.idindicador, politica: this.idindicadorn });
    };
    indicadormedioPage.prototype.portChange2 = function (event) {
        this.terr1 = event.value.codigo;
        this.terr1n = event.value.nombre;
        this.navCtrl.push('IndicadorGraficaPage', { record: { codigo: event.value.codigo, nombre: event.value.nombre }, idarea: this.area, idarean: this.arean, idmarco: '0', idpolitica: this.idindicador, politica: this.idindicadorn });
    };
    indicadormedioPage.prototype.ionViewDidLoad = function () {
    };
    indicadormedioPage.prototype.buscar = function () {
        this.navCtrl.push('IndicadorGraficaPage', { record: { codigo: this.terr1, nombre: this.terr1n }, idarea: this.area, idarean: this.arean, idmarco: '0', idpolitica: this.idindicador, politica: this.idindicadorn });
    };
    indicadormedioPage.prototype.pideregistros = function () {
        /*
        this.regService.getRegsintokora('pggarea/' +this.idmarco ,'oracle2').then((data) => {
              data2a=data
          
          this.regService.getRegsintokora('pggareaindicador/' +this.idmarco ,'oracle2').then((data) => {
                 data2aa=data
                       var arra0:any=[]
                        for (var i = 0; i < data2a.length; i++)
                        {
                          
                          var arra:any=[]
                          for (var ii = 0; ii < data2aa.length; ii++)
                          {
                            if(data2aa[ii].idarea==data2a[i].codigo)
                            {
                             arra.push( {"name": data2aa[ii].nombre,  "icon": "trending-up", "information": "", "modulo": data2aa[ii].codigo})
        
                            }
                          }
        
                          arra0.push({   "name": data2a[i].nombre,    "icon": "home",  "children": arra     })
        
        
                        }
        
                        this.information=  arra0
        
                              
                }, (err) => {
                this.msj.showError3('Error',err.error);
                });
          
        }, (err) => {
        this.msj.showError3('Error',err.error);
        });
        
    
    
    
    this.regService.getRegsintokora('pggarea/' +this.idmarco ,'oracle2').then((data) => {
     
    
      this.information=  data
    
    }, (err) => {
    this.msj.showError3('Error',err.error);
    });
     
    
    */
    };
    indicadormedioPage.prototype.toggleSection = function (i) {
        this.information[i].open = !this.information[i].open;
    };
    indicadormedioPage.prototype.toggleItem = function (i, j) {
        this.information[i].children[j].open = !this.information[i].children[j].open;
    };
    indicadormedioPage.prototype.damenu = function (i, item) {
        if (item.modulo != '')
            this.navCtrl.push('IndicadorGraficaPage', { record: { codigo: item.modulo, nombre: item.name }, idmarco: '0', idpolitica: this.idmarco });
    };
    indicadormedioPage.prototype.addanomalia = function () {
        this.navCtrl.push('ParticipaForms200Page', {});
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('portComponent'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5_ionic_selectable__["a" /* IonicSelectableComponent */])
    ], indicadormedioPage.prototype, "portComponent", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('portComponent2'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5_ionic_selectable__["a" /* IonicSelectableComponent */])
    ], indicadormedioPage.prototype, "portComponent2", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('portComponent3'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5_ionic_selectable__["a" /* IonicSelectableComponent */])
    ], indicadormedioPage.prototype, "portComponent3", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('portComponent4'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5_ionic_selectable__["a" /* IonicSelectableComponent */])
    ], indicadormedioPage.prototype, "portComponent4", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('select2'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["B" /* Select */])
    ], indicadormedioPage.prototype, "select2", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Content */])
    ], indicadormedioPage.prototype, "content", void 0);
    indicadormedioPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-indicadormedio',template:/*ion-inline-start:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\GRAFICADOR\indicadormedio\indicadormedio.html"*/'<ion-header >\n<ion-navbar  [color]="\'bottonx\'">\n    \n      <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n    <ion-title>   \n  \n    </ion-title>\n      \n  </ion-navbar>     \n   \n   \n</ion-header>\n\n\n\n\n \n   \n<ion-content fullscreen style=" background:  #fff;">\n\n  <picture  height="200"   >\n    <source srcset="{{big}}" media="(min-width: 1400px)"/>\n    <source srcset="{{big}}" media="(min-width: 1200px)"/>\n    <source srcset="{{big}}" media="(min-width: 800px)"/>\n    <source srcset="{{big}}" media="(min-width: 700px)"/>\n    <source srcset="{{small}}" media="(min-width: 650px)"/>\n \n    <img src="{{small}}" />\n  </picture>\n\n<br>\n<br>\n  <form     [formGroup]="form"   text-wrap>   \n                                 \n      <ion-row text-wrap>\n         <ion-col   col-12 col-md-6>\n             <ion-item margin-bottom>\n                 <ion-label color="secondary" class="my-label18" stacked><strong>Área de desarrollo</strong></ion-label>\n         \n                 \n\n                        <ion-select [selectOptions]="{\'cssClass\': \'wider-popover\'}"\n                         (ionBlur)="onSelectChange($event)"  placeholder="Seleccione un area de desarrollo" \n                         [(ngModel)]="idterritorio"     [formControl]="form.controls[\'idterritorio\']" interface="popover">\n                    <ion-option text-wrap [disabled]="item.estado==0"  *ngFor="let item of vgrupo" [value]="item.codigo + \',\' + item.nombre">{{item.nombre}}</ion-option>\n     \n                  </ion-select>\n                \n                  <!--\n                 <ionic-selectable #portComponent (onChange)="portChange($event)" placeholder="Seleccione un area de desarrollo"  [canSearch]="true" \n                 searchPlaceholder="Buscar un registro" [shouldBackdropClose]="false" modalCssClass="modal"   closeButtonSlot="start"             \n                 [searchFailText]="\'No Existen registros.\'"  clearButtonText="Limpiar"\n         itemValueField="codigo" itemTextField="nombre" [canClear]="false"\n         [formControl]="form.controls[\'idterritorio\']"     [(ngModel)]="idterritorio" [items]="vgrupo"     item-content text-wrap> \n         <ng-template ionicSelectableCloseButtonTemplate><ion-icon name="close-circle" style="font-size: 24px;"></ion-icon>              </ng-template>\n         <ng-template ionicSelectableMessageTemplate>Seleccione un Registro.</ng-template>\n         <ng-template ionicSelectableTitleTemplate> Nivel Territorios</ng-template>\n         \n         </ionic-selectable>\n\n-->\n             </ion-item>\n            \n       \n         </ion-col>\n         <ion-col   col-12 col-md-6>\n             \n              \n             <ion-item margin-bottom>  \n                 <ion-label color="secondary"  class="my-label18" stacked><strong>Subárea de desarrollo</strong></ion-label>\n         \n                 \n                 <ion-select #select2   id="select23" [selectOptions]="{\'cssClass\': \'wider-popover\'}"\n                 (ionBlur)="onSelectChange2($event)"  placeholder="Seleccione un subárea de desarrollo" \n                 [(ngModel)]="idterritorio2"      [formControl]="form.controls[\'idterritorio2\']" interface="popover">\n            <ion-option text-wrap *ngFor="let item of vgrupo2" [disabled]="item.estado==0"  [value]="item.codigo + \'°\' + item.nombre">{{item.nombre}}</ion-option>\n\n          </ion-select>\n\n          <!--\n                 <ionic-selectable #portComponent2 (onChange)="portChange2($event)" (onClick)="portChange2($event)"  placeholder="Seleccione un sub área de desarrollo"  [canSearch]="true" \n                 searchPlaceholder="Buscar un registro" [shouldBackdropClose]="false" modalCssClass="modal"   closeButtonSlot="start"             \n                 [searchFailText]="\'No Existen registros.\'"  clearButtonText="Limpiar"\n         itemValueField="codigo" itemTextField="nombre" [canClear]="false"\n         [formControl]="form.controls[\'idterritorio2\']"     [(ngModel)]="idterritorio2" [items]="vgrupo2"     item-content text-wrap> \n         <ng-template ionicSelectableCloseButtonTemplate><ion-icon name="close-circle" style="font-size: 24px;"></ion-icon>              </ng-template>\n         <ng-template ionicSelectableMessageTemplate>Seleccione un Registro.</ng-template>\n         <ng-template ionicSelectableTitleTemplate> Territorios</ng-template>\n         \n         </ionic-selectable>\n         -->\n             </ion-item>\n           \n         \n         </ion-col>\n     \n       </ion-row>\n<!--\n       <button \n       ion-button block color="bottonx" [disabled]="!form.valid" \n              (click)="buscar()">\n             Aceptar\n      </button>\n      -->\n                                   </form>\n   <!--\n  <ion-list class="accordion-list">\n \n    <ion-list *ngFor="let item of information; let i = index" no-lines no-padding text-wrap>\n   \n      <button ion-item (click)="toggleSection(i)" *ngIf="item.children" detail-none\n       [ngClass]="{\'section-active\': item.open, \'section\': !item.open}">\n        <ion-icon item-left name="arrow-forward" *ngIf="!item.open"></ion-icon>\n        <ion-icon item-left name="arrow-down" *ngIf="item.open"></ion-icon>\n          {{ item.name }} \n      </button>\n \n      <ion-item *ngIf="!item.children " ion-item detail-none class="child-item" text-wrap>\n              <ion-icon item-left name="{{item.icon}}" ></ion-icon>\n          <h2>{{ item.name }} {{item.icon}}</h2>\n          <p text-lowercase>{{ item.information }}</p>\n       </ion-item>\n\n      <ion-list *ngIf="item.children && item.open" no-lines>\n      \n        <ion-list *ngFor="let child of item.children; let j = index" no-padding text-wrap>\n        \n          <button ion-item (click)="toggleItem(i, j)" *ngIf="child.children" class="child" detail-none>\n            <ion-icon item-left name="add" *ngIf="!child.open"></ion-icon>\n            <ion-icon item-left name="close" *ngIf="child.open"></ion-icon>\n            {{ child.name }}\n          </button>        \n    \n         \n          <ion-item *ngIf="!child.children" ion-item detail-none class="child-item" text-wrap no-lines>\n            <button ion-item (click)="damenu(i,child)" text-wrap>\n            <ion-icon item-left name="{{child.icon}}" ></ion-icon>\n            <h2 style="padding:2px">{{ child.name }} </h2>\n           \n            <p text-lowercase>{{ child.information }}</p>  \n        </button>\n          </ion-item>\n \n          <ion-list *ngIf="child.children && child.open">\n           \n            <ion-item *ngFor="let item of child.children; let k = index" detail-none class="child-item" text-wrap>\n           \n                <button ion-item (click)="damenu(i,item)" >\n\n                    <ion-icon item-left name="{{item.icon}}" ></ion-icon>\n                    <h2>{{ item.name }}   </h2>\n                    <p text-lowercase>{{ item.information }} </p>                  </button>\n                   \n            </ion-item>   \n          </ion-list>\n \n        </ion-list>\n      </ion-list>    \n      \n    </ion-list>\n   \n    \n  </ion-list>   \n-->\n \n\n \n\n</ion-content>\n'/*ion-inline-end:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\GRAFICADOR\indicadormedio\indicadormedio.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["F" /* ViewController */], __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__providers__["d" /* NotificationProvider */], __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers__["a" /* Auth */]])
    ], indicadormedioPage);
    return indicadormedioPage;
}());

//# sourceMappingURL=indicadormedio.js.map

/***/ })

});
//# sourceMappingURL=114.js.map