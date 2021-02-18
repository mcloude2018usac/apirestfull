webpackJsonp([130],{

/***/ 1041:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormpropCreatePageModule", function() { return FormpropCreatePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__formprop_create__ = __webpack_require__(1483);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_selectable__ = __webpack_require__(446);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var FormpropCreatePageModule = /** @class */ (function () {
    function FormpropCreatePageModule() {
    }
    FormpropCreatePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__formprop_create__["a" /* FormpropCreatePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__formprop_create__["a" /* FormpropCreatePage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild(),
                __WEBPACK_IMPORTED_MODULE_4_ionic_selectable__["b" /* IonicSelectableModule */]
            ],
        })
    ], FormpropCreatePageModule);
    return FormpropCreatePageModule;
}());

//# sourceMappingURL=formprop-create.module.js.map

/***/ }),

/***/ 1483:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormpropCreatePage; });
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







var FormpropCreatePage = /** @class */ (function () {
    function FormpropCreatePage(_MODAL, alertCtrl, storage, msj, translateService, viewCtrl, authService, navCtrl, navParams, _FB, actionSheetCtrl, events) {
        var _this = this;
        this._MODAL = _MODAL;
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
        this.categoria = '';
        this.combofijo = "true";
        this.vcategoria = [];
        this.idafiliado = 'na';
        this.createdCode = null;
        this.scannedCode = null;
        // Define form validation - VERY basic!
        this.form = this._FB.group({
            iddefault: [''],
            placeholder: [''],
            display: [''],
            selected: [''],
            required: [''],
            disabled: [''],
            hidden: [''],
            position: [''],
            labelsizefondt: [''],
            categoria: [''],
            combofijo: [''],
            coloretiqueta: [''],
            fondoetiqueta: [''],
            blike: [''],
            rangomin: [''],
            rangomax: [''],
            rangostep: [''],
            alfatypo: [''],
            respuesta: [''],
            valor: ['']
        });
        this.translateService.get('APPX').subscribe(function (value) {
            _this.idempresa = value;
        });
    }
    FormpropCreatePage.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get('username').then(function (value) {
            _this.username = value;
        });
        this.portNameControl = this._FB.control(null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required);
        this.portForm = this._FB.group({
            portName: this.portNameControl
        });
    };
    FormpropCreatePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.idformulario = this.navParams.data.record2.idformulario;
        this.etiqueta = this.navParams.data.record.title;
        this.authService.getReg(this.idformulario + '/' + this.navParams.data.record._id + '/' + this.idempresa, 'frmcat2s').then(function (data) {
            _this.vcategoria = data;
        });
        this._ID = this.navParams.data.record._id;
        this.tcampo = this.etiqueta + ' [' + this.navParams.data.record.type.nombre + ']';
        this.tipocampo = this.navParams.data.record.type.nombre;
        this.placeholder = this.navParams.data.record.placeholder;
        this.iddefault = this.navParams.data.record.default;
        this.alfatypo = this.navParams.data.record.alfatypo;
        this.rangomin = this.navParams.data.record.rangomin;
        this.rangomax = this.navParams.data.record.rangomax;
        this.rangostep = this.navParams.data.record.rangostep;
        this.blike = this.navParams.data.record.blike;
        this.fondoetiqueta = this.navParams.data.record.fondoetiqueta;
        this.coloretiqueta = this.navParams.data.record.coloretiqueta;
        this.position = this.navParams.data.record.position;
        this.display = this.navParams.data.record.display;
        this.labelsizefondt = this.navParams.data.record.labelsizefondt;
        this.required = this.navParams.data.record.required;
        this.selected = this.navParams.data.record.selected;
        this.disabled = this.navParams.data.record.disabled;
        this.hidden = this.navParams.data.record.hidden;
        this.combofijo = this.navParams.data.record.combofijo;
        this.respuesta = this.navParams.data.record.respuesta;
        this.valor = this.navParams.data.record.valor;
        this.isDisablednit = false;
        this.translateService.get('ITEM_UPDATE_TITLE').subscribe(function (value) {
            _this.pageTitle = value;
        });
    };
    FormpropCreatePage.prototype.manageGallery = function () {
        var _this = this;
        var creat = 'Actualiza';
        if (this.navParams.get("record") == null) {
            creat = 'Crea';
        }
        var cc = 'false';
        if (this.form.controls['combofijo'].value != '') {
            cc = this.form.controls['combofijo'].value;
        }
        if (this.navParams.data.record.type.nombre == 'Alfanumerico') {
            if (this.form.controls['alfatypo'].value) {
                if (this.form.controls['alfatypo'].value != '') {
                }
                else {
                    this.msj.showError3('Error', 'Ingrese un tipo valido');
                    return;
                }
            }
            else {
                this.msj.showError3('Error', 'Ingrese un tipo valido');
                return;
            }
        }
        var options = {
            idmovil: this.idformulario,
            tipo: this.navParams.data.record.type.nombre,
            required: "" + this.form.controls['required'].value + "",
            default: "" + this.form.controls['iddefault'].value + "",
            placeholder: this.form.controls['placeholder'].value,
            display: "" + this.form.controls['display'].value + "",
            selected: "" + this.form.controls['selected'].value + "",
            disabled: "" + this.form.controls['disabled'].value + "",
            hidden: "" + this.form.controls['hidden'].value + "",
            coloretiqueta: this.form.controls['coloretiqueta'].value,
            fondoetiqueta: this.form.controls['fondoetiqueta'].value,
            blike: "" + this.form.controls['blike'].value + "",
            position: this.form.controls['position'].value,
            labelsizefondt: this.form.controls['labelsizefondt'].value,
            combofijo: "" + cc + "",
            categoria: "" + this.idformulario + "",
            rangomin: this.form.controls['rangomin'].value,
            rangomax: this.form.controls['rangomax'].value,
            rangostep: this.form.controls['rangostep'].value,
            alfatypo: this.form.controls['alfatypo'].value,
            respuesta: this.form.controls['respuesta'].value,
            valor: this.form.controls['valor'].value,
            bitacora: { idempresa: this.idempresa, idafiliado: '', email: this.username, permiso: creat, accion: creat + ' campo de formulario movil ' }
        };
        if (options) {
            this.authService.createReg(this._ID, options, 'frmmovilds').then(function (result) {
                if (!_this.form.valid) {
                    return;
                }
                _this.viewCtrl.dismiss(result);
            }, function (err) {
                _this.msj.showError3('Error', err.error);
            });
        }
    };
    FormpropCreatePage.prototype.stringify = function (country) {
        return JSON.stringify(country);
    };
    FormpropCreatePage.prototype.cancel = function () {
        this.viewCtrl.dismiss();
    };
    FormpropCreatePage.prototype.done = function () {
        if (!this.form.valid) {
            return;
        }
        //this.viewCtrl.dismiss(this.form.value);
    };
    FormpropCreatePage.prototype.optionsFn = function (item) {
        console.log(item);
    };
    FormpropCreatePage.prototype.selectcolor1 = function () {
        var _this = this;
        var addModal = this._MODAL.create('ColorpickerPage', { record2: { opcion: 'bg' } }, { showBackdrop: true, enableBackdropDismiss: false });
        addModal.onDidDismiss(function (data) {
            if (data) {
                if (data != '') {
                    _this.fondoetiqueta = data;
                }
            }
        });
        addModal.present();
    };
    FormpropCreatePage.prototype.selectcolor2 = function () {
        var _this = this;
        var addModal = this._MODAL.create('ColorpickerPage', { record2: { opcion: 'color' } }, { showBackdrop: true, enableBackdropDismiss: false });
        addModal.onDidDismiss(function (data) {
            if (data) {
                if (data != '') {
                    _this.coloretiqueta = data;
                }
            }
        });
        addModal.present();
    };
    FormpropCreatePage.prototype.onAddForm = function (event, catalogo, op) {
        var _this = this;
        switch (op) {
            case 1:
                this.portNameControl.reset();
                this.portNameControl.setValue(event.component.searchText);
        }
        var addModal = this._MODAL.create('CatalogoSelectablePage', { record: null, op: catalogo, frm: 'frmcat2s', idformulario: this.idformulario, idunidad: this.navParams.data.record._id }, { showBackdrop: true });
        addModal.onDidDismiss(function (data) {
            if (data) {
                switch (op) {
                    case 1:
                        _this.portComponent.addItem(data);
                        if (_this.vcategoria.length == 1) {
                            _this.portComponent.close().catch(function () { });
                            _this.portComponent.open().catch(function () { });
                        }
                        break;
                }
            }
        });
        addModal.present();
    };
    FormpropCreatePage.prototype.onSaveForm = function (event, catalogo) {
        var _this = this;
        var addModal = this._MODAL.create('CatalogoSelectablePage', { record: { _id: event.item.id, nombre: event.item.nombre }, op: catalogo, frm: 'frmcat2s', idformulario: this.idformulario, idunidad: this.navParams.data.record._id }, { showBackdrop: true });
        addModal.onDidDismiss(function (data) {
            if (data) {
                _this.savePort(event.item, data.nombre);
            }
        });
        addModal.present();
    };
    FormpropCreatePage.prototype.savePort = function (port, op) { port.nombre = op; };
    FormpropCreatePage.prototype.deleteSelectedItem = function (op) {
        var itemToDeleteIndex;
        var entra = 0;
        this.vcategoria.forEach(function (selectedItem, itemIndex) {
            if (selectedItem.id == op) {
                itemToDeleteIndex = itemIndex;
                entra = 1;
            }
        });
        if (entra == 1)
            this.vcategoria.splice(itemToDeleteIndex, 1);
    };
    FormpropCreatePage.prototype.onDeleteForm = function (event, op) {
        var _this = this;
        var alert = this.alertCtrl.create({ title: 'Seguro de realizar esta operación?',
            buttons: [
                { text: 'Si',
                    handler: function () {
                        var aa;
                        aa = event.item;
                        var recordID = aa.id;
                        _this.authService.deleteReg(recordID + '/' + _this.username + '/' + _this.idempresa + '/' + _this.idafiliado, 'frmcat2s').then(function (data) {
                            event.component.deleteItem(data);
                            switch (op) {
                                case 1:
                                    _this.portComponent.clear();
                                    break;
                            }
                            _this.deleteSelectedItem(recordID);
                        }, function (err) {
                            _this.msj.showError3('Error', err.error);
                        });
                    }
                },
                {
                    text: 'No', handler: function () { }
                }
            ]
        });
        alert.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('portComponent'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_6_ionic_selectable__["a" /* IonicSelectableComponent */])
    ], FormpropCreatePage.prototype, "portComponent", void 0);
    FormpropCreatePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-formprop-create',template:/*ion-inline-start:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\FORMULARIO\formprop-create\formprop-create.html"*/'<ion-header>\n    <ion-navbar>\n      <ion-title>Propiedades campo</ion-title>\n\n      <ion-buttons end>\n          <button (click)="cancel()" icon-only ion-button padding-right>\n              <ion-icon name="md-close"></ion-icon>\n            </button>\n          <button  (click)="manageGallery()"  [disabled]="!form.valid" icon-only ion-button padding-right>\n              <ion-icon name="done-all"></ion-icon>\n            </button>\n      </ion-buttons>\n    </ion-navbar>\n  </ion-header>\n  <ion-content padding>\n    <form     [formGroup]="form"   text-wrap>\n      <ion-list text-wrap>\n\n         <ion-item-divider color="primary">\n            <ion-label>\n               Campo: {{tcampo}}\n            </ion-label>\n          </ion-item-divider>\n\n\n\n          <ion-item-divider color="secondary">\n              <ion-label>\n                Propiedades generales\n              </ion-label>\n            </ion-item-divider>\n\n            <ion-item margin-bottom>\n              <ion-label>Valor default:</ion-label>\n              <ion-input\n                 type="text"\n                 [(ngModel)]="iddefault" [formControl]="form.controls[\'iddefault\']"\n                ></ion-input>\n           </ion-item>\n          <ion-item margin-bottom>\n              <ion-label>placeholder</ion-label>\n              <ion-input\n                 type="text"\n                 [(ngModel)]="placeholder" [formControl]="form.controls[\'placeholder\']"\n                ></ion-input>\n           </ion-item>\n          <ion-item>\n              <ion-label>Requerido</ion-label> <ion-toggle color="secondary" [formControl]="form.controls[\'required\']" [(ngModel)]="required"></ion-toggle>\n            </ion-item>\n              <ion-item>\n                <ion-label>Selecciona</ion-label> <ion-toggle color="secondary" [formControl]="form.controls[\'selected\']" [(ngModel)]="selected"></ion-toggle>\n              </ion-item>\n              <ion-item>\n                  <ion-label>Desabilitado</ion-label> <ion-toggle color="secondary" [formControl]="form.controls[\'disabled\']" [(ngModel)]="disabled"></ion-toggle>\n                </ion-item>\n\n              <ion-item margin-bottom>\n                  <ion-label>Visible</ion-label> <ion-toggle color="secondary" [formControl]="form.controls[\'hidden\']" [(ngModel)]="hidden"></ion-toggle>\n                </ion-item>\n\n\n\n                <ion-item margin-bottom>\n                    <ion-label>Posicion etiqueta</ion-label>\n                    <ion-select [(ngModel)]="position" [formControl]="form.controls[\'position\']">\n                      <ion-option value="fixed">Fijo</ion-option>\n                      <ion-option value="floating">Flotante</ion-option>\n                      <ion-option value="stacked">Afilado</ion-option>\n                    </ion-select>\n                 </ion-item>\n\n                 <ion-item margin-bottom>\n                    <ion-label>Tamaño fondo etiqueta</ion-label>\n                    <ion-select [(ngModel)]="labelsizefondt" [formControl]="form.controls[\'labelsizefondt\']">\n                      <ion-option value="10">10</ion-option>\n                      <ion-option value="12">12</ion-option>\n                      <ion-option value="14">14</ion-option>\n                      <ion-option value="16">16</ion-option>\n                      <ion-option value="18">18</ion-option>\n                      <ion-option value="20">20</ion-option>\n\n                    </ion-select>\n                 </ion-item>\n\n                 <ion-item margin-bottom>\n                  <ion-label>Color fondo etiqueta</ion-label>\n                  <ion-input\n                     type="text" (click)="selectcolor1()" [disabled]=\'true\'\n                     [(ngModel)]="fondoetiqueta" [formControl]="form.controls[\'fondoetiqueta\']"\n                    ></ion-input>\n               </ion-item>\n               <ion-item margin-bottom>\n                <ion-label>Color letra etiqueta</ion-label>\n                <ion-input\n                   type="text" (click)="selectcolor2()" [disabled]=\'true\'\n                   [(ngModel)]="coloretiqueta" [formControl]="form.controls[\'coloretiqueta\']"\n                  ></ion-input>\n             </ion-item>\n\n\n             \n                <ion-item margin-bottom>\n                    <ion-label>Mostrar campo en consulta</ion-label> <ion-toggle color="secondary" [formControl]="form.controls[\'display\']" [(ngModel)]="display"></ion-toggle>\n                 </ion-item>\n\n                 <ion-item margin-bottom>\n                  <ion-label>Buscar por coincidencias</ion-label> <ion-toggle color="secondary" [formControl]="form.controls[\'blike\']" [(ngModel)]="blike"></ion-toggle>\n               </ion-item>\n\n               <ion-item-divider *ngIf="tipocampo === \'Alfanumerico\'" color="secondary">\n                  <ion-label>\n                    Propiedades campo Alfanumerico\n                  </ion-label>\n                </ion-item-divider>\n\n\n                <ion-item  *ngIf="tipocampo === \'Alfanumerico\'" margin-bottom>\n                    <ion-label>Tipo campo</ion-label>\n                    <ion-select [(ngModel)]="alfatypo" [formControl]="form.controls[\'alfatypo\']">\n                      <ion-option value="text">text</ion-option>\n                      <ion-option value="password">password</ion-option>\n                      <ion-option value="email">email</ion-option>\n                      <ion-option value="tel">tel</ion-option>\n                      <ion-option value="url">url</ion-option>\n                    </ion-select>\n                 </ion-item>\n\n\n               <ion-item-divider *ngIf="tipocampo === \'Rango\'" color="secondary">\n                  <ion-label>\n                    Propiedades campo Rango\n                  </ion-label>\n                </ion-item-divider>\n\n                <ion-item *ngIf="tipocampo === \'Rango\'" margin-bottom>\n                    <ion-label>Valor Minimo:</ion-label>\n                    <ion-input  type="Number"    [(ngModel)]="rangomin" [formControl]="form.controls[\'rangomin\']"></ion-input>\n                 </ion-item>\n\n                 <ion-item *ngIf="tipocampo === \'Rango\'" margin-bottom>\n                    <ion-label>Valor Maximo:</ion-label>\n                    <ion-input  type="Number"    [(ngModel)]="rangomax" [formControl]="form.controls[\'rangomax\']"></ion-input>\n                 </ion-item>\n\n\n                 <ion-item *ngIf="tipocampo === \'Rango\'" margin-bottom>\n                    <ion-label>Valor Step (rango):</ion-label>\n                    <ion-input  type="Number"    [(ngModel)]="rangostep" [formControl]="form.controls[\'rangostep\']"></ion-input>\n                 </ion-item>\n\n\n                 <ion-item-divider *ngIf="tipocampo === \'Lista de valores\'" color="secondary">\n                    <ion-label>\n                      Propiedades campo select (combo)\n                    </ion-label>\n                  </ion-item-divider>\n\n                 <ion-item *ngIf="tipocampo === \'Lista de valores\'" text-wrap>\n\n\n                  <ion-label   > Seleccion combo  </ion-label>\n                  <ionic-selectable #portComponent placeholder="Seleccione un valor"  [canSearch]="true" searchPlaceholder="Buscar un registro"\n                  [shouldBackdropClose]="false" modalCssClass="modal"   closeButtonSlot="start"\n                       [searchFailText]="\'No Existen registros.\'"       clearButtonText="Limpiar" addButtonText="Nuevo"\n                  itemValueField="id" itemTextField="nombre" [canClear]="true"\n                  [canAddItem]="true"         [canSaveItem]="true"         [canDeleteItem]="true"\n                  (onAddItem)="onAddForm($event,\'categoria-plantilla\',1)"         (onSaveItem)="onSaveForm($event,\'categoria-plantilla\')"         (onDeleteItem)="onDeleteForm($event)"\n                 [formControl]="form.controls[\'categoria\']"     [(ngModel)]="categoria" [items]="vcategoria"     item-content text-wrap>\n                <ng-template ionicSelectableAddItemTemplate let-port="item"       let-isAdd="isAdd">\n                <form [formGroup]="portForm" novalidate>\n                  <ion-list>\n                    <ion-item-divider>\n                      {{isAdd ? \'Agregar \' : \'Actualizar\'}} categoria\n                    </ion-item-divider>\n                    <ion-item>\n                      <ion-label>Nombre</ion-label>\n                      <ion-input               type="text"               formControlName="portName"               autocorrect="off"               autocapitalize="none">\n                      </ion-input>\n                    </ion-item>\n                  </ion-list>\n                </form>\n              </ng-template>\n           </ionic-selectable>\n          </ion-item>\n\n           <ion-item *ngIf="tipocampo === \'Formulario detalle\'" text-wrap>\n\n\n            <ion-label   > Seleccione formulario detalle  </ion-label>\n\n\n\n\n            </ion-item>\n\n\n            <ion-item *ngIf="tipocampo === \'Lista de valores\'" margin-bottom >\n                <ion-label>Combo con valores fijos</ion-label> <ion-toggle color="secondary" [formControl]="form.controls[\'combofijo\']" [(ngModel)]="combofijo"></ion-toggle>\n              </ion-item>\n\n\n              <ion-item-divider color="secondary">\n                <ion-label>\n                  Respuestas segun campo\n                </ion-label>\n              </ion-item-divider>\n\n              <ion-item margin-bottom>\n                <ion-label>Respuesta de pregunta:</ion-label>\n                <ion-input\n                   type="text"\n                   [(ngModel)]="respuesta" [formControl]="form.controls[\'respuesta\']"\n                  ></ion-input>\n             </ion-item>\n            <ion-item margin-bottom>\n                <ion-label>Valor (pts) pregunta:</ion-label>\n                <ion-input\n                   type="text"\n                   [(ngModel)]="valor" [formControl]="form.controls[\'valor\']"\n                  ></ion-input>\n             </ion-item>\n\n       </ion-list>\n\n\n    </form>\n\n\n\n  </ion-content>\n'/*ion-inline-end:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\FORMULARIO\formprop-create\formprop-create.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3__providers__["d" /* NotificationProvider */], __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["F" /* ViewController */], __WEBPACK_IMPORTED_MODULE_3__providers__["a" /* Auth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */]])
    ], FormpropCreatePage);
    return FormpropCreatePage;
}());

//# sourceMappingURL=formprop-create.js.map

/***/ })

});
//# sourceMappingURL=130.js.map