webpackJsonp([28],{

/***/ 1045:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormsdCreatePageModule", function() { return FormsdCreatePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__formsd_create__ = __webpack_require__(1487);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_selectable__ = __webpack_require__(446);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var FormsdCreatePageModule = /** @class */ (function () {
    function FormsdCreatePageModule() {
    }
    FormsdCreatePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__formsd_create__["a" /* FormsdCreatePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__formsd_create__["a" /* FormsdCreatePage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild(),
                __WEBPACK_IMPORTED_MODULE_4_ionic_selectable__["b" /* IonicSelectableModule */]
            ],
        })
    ], FormsdCreatePageModule);
    return FormsdCreatePageModule;
}());

//# sourceMappingURL=formsd-create.module.js.map

/***/ }),

/***/ 1305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__form_interface__ = __webpack_require__(1306);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__form_type__ = __webpack_require__(1307);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__form_type__["a"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ 1306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export IForm */
var IForm = /** @class */ (function () {
    function IForm() {
    }
    return IForm;
}());

//# sourceMappingURL=form.interface.js.map

/***/ }),

/***/ 1307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Form; });
var Form = /** @class */ (function () {
    function Form(form) {
        this.id = form.id;
        this.nombre = form.nombre;
    }
    return Form;
}());

//# sourceMappingURL=form.type.js.map

/***/ }),

/***/ 1487:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormsdCreatePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_selectable__ = __webpack_require__(446);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__types__ = __webpack_require__(1305);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var FormsdCreatePage = /** @class */ (function () {
    function FormsdCreatePage(alertCtrl, storage, msj, translateService, viewCtrl, authService, navCtrl, navParams, _FB, actionSheetCtrl, events) {
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
        this.idafiliado = 'na';
        this.vcategoria = [];
        this.desabilita = false;
        this.createdCode = null;
        this.scannedCode = null;
        // Define form validation - VERY basic!
        this.form = this._FB.group({
            name: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            order: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            title: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            type: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            estado: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required]
        });
        this.translateService.get('APPX').subscribe(function (value) {
            _this.idempresa = value;
            _this.authService.getReg('todos/type-formmovild/' + _this.idempresa, 'frmcats').then(function (data) {
                _this.vcategoria = data;
            });
        });
    }
    FormsdCreatePage.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get('username').then(function (value) {
            _this.username = value;
        });
        this.portNameControl = this._FB.control(null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required);
        this.portForm = this._FB.group({
            portName: this.portNameControl
        });
    };
    FormsdCreatePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.idformulario = this.navParams.data.record2.idformulario;
        this.nidformulario = this.navParams.data.record2.nidformulario;
        if (this.navParams.get("record") == null) {
            this.noorden = 0;
            this.order = 10;
            this.authService.getReg(this.idformulario + '/tipofrmorden', 'frmmovilds').then(function (data) {
                if (data) {
                    var aa = data;
                    _this.noorden = aa.orden;
                    _this.order = aa.orden;
                    _this.order = _this.order + 10;
                }
            }, function (err) {
                _this.msj.showError3('Error', err.error);
                // this.translateService.get('NO_OPERACION').subscribe((value) => { this.msj.showError3('Error',value);  })  
            });
        }
        if (this.navParams.get("record") == null) {
            this.desabilita = false;
            this.translateService.get('ITEM_CREATE_TITLE').subscribe(function (value) {
                _this.pageTitle = value;
            });
            this.isDisablednit = true;
        }
        else {
            this.desabilita = true;
            this._ID = this.navParams.data.record._id;
            this.name = this.navParams.data.record.name;
            this.order = this.navParams.data.record.order;
            this.title = this.navParams.data.record.title;
            this.type = this.navParams.data.record.type;
            this.estado = this.navParams.data.record.estado;
            this.isDisablednit = false;
            this.translateService.get('ITEM_UPDATE_TITLE').subscribe(function (value) {
                _this.pageTitle = value;
            });
        }
    };
    FormsdCreatePage.prototype.manageGallery = function () {
        var _this = this;
        var creat = 'Actualiza';
        if (this.navParams.get("record") == null) {
            creat = 'Crea';
        }
        var options = {
            idempresa: this.idempresa,
            idmovil: this.idformulario,
            name: this.form.controls['name'].value,
            order: this.form.controls['order'].value,
            title: this.form.controls['title'].value,
            type: this.form.controls['type'].value.id,
            estado: this.form.controls['estado'].value,
            bitacora: { idempresa: this.idempresa, idafiliado: '', email: this.username, permiso: creat, accion: creat + ' campo de formulario movil ' }
        };
        if (this.navParams.get("record") == null) {
            if (options) {
                this.authService.createRegmovil('', options, 'frmmovilds').then(function (result) {
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
        else {
            if (options) {
                this.authService.createRegmovil(this._ID, options, 'frmmovilds').then(function (result) {
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
    FormsdCreatePage.prototype.cancel = function () {
        this.viewCtrl.dismiss();
    };
    FormsdCreatePage.prototype.done = function () {
        if (!this.form.valid) {
            return;
        }
        //this.viewCtrl.dismiss(this.form.value);
    };
    FormsdCreatePage.prototype.onAddForm = function (event) {
        this.portNameControl.reset();
        this.portNameControl.setValue(event.component.searchText);
        event.component.showAddItemTemplate();
    };
    FormsdCreatePage.prototype.onSaveForm = function (event) {
        this.portNameControl.setValue(event.item.nombre);
        event.component.showAddItemTemplate();
    };
    FormsdCreatePage.prototype.deleteSelectedItem = function (op) {
        var itemToDeleteIndex;
        this.vcategoria.forEach(function (selectedItem, itemIndex) {
            if (selectedItem._id == op) {
                itemToDeleteIndex = itemIndex;
            }
        });
        this.vcategoria.splice(itemToDeleteIndex, 1);
    };
    FormsdCreatePage.prototype.onDeleteForm = function (event) {
        var _this = this;
        var alert = this.alertCtrl.create({ title: 'Seguro de realizar esta operación?',
            buttons: [
                { text: 'Si',
                    handler: function () {
                        var aa;
                        aa = event.item;
                        var recordID = aa._id;
                        _this.authService.deleteReg(recordID + '/' + _this.username + '/' + _this.idempresa + '/' + _this.idafiliado, 'frmcats').then(function (data) {
                            event.component.deleteItem({ id: recordID, nombre: 'aaa' });
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
    FormsdCreatePage.prototype.addForm = function (op) {
        var _this = this;
        var creat = 'Crea';
        var options = {
            idempresa: this.idempresa,
            idunidad: op,
            nombre: this.portNameControl.value,
            bitacora: { idempresa: this.idempresa, idafiliado: '', email: this.username, permiso: creat, accion: creat + ' formulario movil ' }
        };
        if (options) {
            this.authService.createReg('', options, 'frmcats').then(function (result) {
                var aa = result;
                var port = new __WEBPACK_IMPORTED_MODULE_7__types__["a" /* Form */]({
                    id: aa._id,
                    nombre: _this.portNameControl.value
                });
                _this.portComponent.addItem(port).then(function () {
                    _this.portComponent.search(port.nombre);
                });
                _this.portNameControl.reset();
                _this.portComponent.hideAddItemTemplate();
            }, function (err) {
                _this.msj.showError3('Error', err.error);
            });
        }
    };
    FormsdCreatePage.prototype.saveForm = function (port, op) {
        var _this = this;
        var creat = 'Actualiza';
        var options = {
            idempresa: this.idempresa,
            idunidad: op,
            nombre: this.portNameControl.value,
            bitacora: { idempresa: this.idempresa, idafiliado: '', email: this.username, permiso: creat, accion: creat + ' formulario movil ' }
        };
        if (options) {
            var aa;
            aa = port;
            this.authService.createReg(aa._id, options, 'frmcats').then(function (result) {
                port.nombre = _this.portNameControl.value;
                _this.portComponent.hideAddItemTemplate();
            }, function (err) {
                _this.msj.showError3('Error', err.error);
            });
        }
    };
    FormsdCreatePage.prototype.moduloRecord = function (item) {
        this.navCtrl.push('FormpropCreatePage', { record: item, record2: { idformulario: this.idformulario } });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('portComponent'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_6_ionic_selectable__["a" /* IonicSelectableComponent */])
    ], FormsdCreatePage.prototype, "portComponent", void 0);
    FormsdCreatePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-formsd-create',template:/*ion-inline-start:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\FORMULARIO\formsd-create\formsd-create.html"*/'<ion-header>\n    <ion-navbar>\n      <ion-title>{{pageTitle}}</ion-title>\n     \n      <ion-buttons end>\n          <button (click)="cancel()" icon-only ion-button padding-right>\n              <ion-icon name="md-close"></ion-icon>\n            </button>\n          <button  (click)="manageGallery()"  [disabled]="!form.valid" icon-only ion-button padding-right>\n              <ion-icon name="done-all"></ion-icon>\n            </button>\n      </ion-buttons>\n    </ion-navbar>\n  </ion-header>   \n  <ion-content padding>\n    <form     [formGroup]="form"  text-wrap>\n      <ion-list>\n        \n          <ion-item margin-bottom>\n              <ion-label>Cardinalidad</ion-label>\n              <ion-input\n                 type="Number"\n                 [(ngModel)]="order" [formControl]="form.controls[\'order\']"\n                ></ion-input>\n           </ion-item>\n           <ion-item class="invalid" *ngIf="!form.controls.order.valid && (form.controls.order.dirty || form.controls.order.touched)" text-wrap>\n             <ion-icon name="warning"></ion-icon>\n              Ingrese una cardinalidad\n            </ion-item>\n\n            <ion-item text-wrap>  \n                <ion-label   > Tipo campo  </ion-label>\n          \n                <ionic-selectable #portComponent placeholder="Seleccione un valor"  [canSearch]="true" searchPlaceholder="Buscar un registro"\n                 [shouldBackdropClose]="false" modalCssClass="modal"   closeButtonSlot="start"        \n                      [searchFailText]="\'No Existen registros.\'"       clearButtonText="Limpiar" addButtonText="Nuevo"\n                 itemValueField="_id" itemTextField="nombre" [canClear]="true"\n                 [canAddItem]="true"\n                 [canSaveItem]="true"\n                 [canDeleteItem]="true"\n                 (onAddItem)="onAddForm($event)"\n                 (onSaveItem)="onSaveForm($event)"\n                 (onDeleteItem)="onDeleteForm($event)"\n                [formControl]="form.controls[\'type\']"     [(ngModel)]="type" [items]="vcategoria"     item-content text-wrap> \n               <ng-template ionicSelectableCloseButtonTemplate><ion-icon name="close-circle" style="font-size: 24px;"></ion-icon>              </ng-template>\n               <ng-template ionicSelectableMessageTemplate>Seleccione un Registro.</ng-template>\n               <ng-template ionicSelectableTitleTemplate> Tipo campos </ng-template>\n               <ng-template ionicSelectableAddItemTemplate let-port="item"\n               let-isAdd="isAdd">\n               <form [formGroup]="portForm" novalidate>\n                 <ion-list>\n                   <ion-item-divider>\n                     {{isAdd ? \'Agregar \' : \'Actualizar\'}} Tipo campo\n                   </ion-item-divider>\n                   <ion-item>\n                     <ion-label>Nombre</ion-label>\n                     <ion-input \n                       type="text"\n                       formControlName="portName"\n                       autocorrect="off"\n                       autocapitalize="none">\n                     </ion-input>   \n                   </ion-item>\n                  \n                 </ion-list>\n               </form>\n               <ion-footer>\n                 <ion-toolbar>\n                   <ion-row>\n                     <ion-col col-6>\n                       <button ion-button full no-margin\n                         (click)="portComponent.hideAddItemTemplate()">\n                         Cancelar\n                       </button>\n                     </ion-col>\n                     <ion-col col-6>\n                       <button ion-button full no-margin\n                         (click)="isAdd ? addForm(\'type-formmovild\') : saveForm(port,\'type-formmovild\')"\n                         [disabled]="!portForm.valid">\n                         {{isAdd ? \'Nuevo\' : \'Grabar\'}}\n                       </button>\n                     </ion-col>\n                   </ion-row>\n                 </ion-toolbar>\n               </ion-footer>\n             </ng-template>\n          \n           </ionic-selectable>\n                     \n             \n              </ion-item>\n              <ion-item class="invalid" *ngIf="!form.controls.type.valid \n              && (form.controls.type.dirty || form.controls.type.touched)"  text-wrap>\n               \n                Ingrese un tipo de campo valido\n             </ion-item>\n\n             \n\n          <ion-item margin-bottom>\n             <ion-label>Nombre del campo</ion-label>\n             <ion-input\n                type="text" [disabled]="desabilita" \n                [(ngModel)]="name" [formControl]="form.controls[\'name\']"\n               ></ion-input>\n          </ion-item>\n          <ion-item class="invalid" *ngIf="!form.controls.name.valid && (form.controls.name.dirty || form.controls.name.touched)" text-wrap>\n            <ion-icon name="warning"></ion-icon>\n                   Ingrese nombre del campo\n           </ion-item>\n  \n           <ion-item margin-bottom>\n            <ion-label>Etiqueta</ion-label>\n            <ion-input\n               type="text"\n               [(ngModel)]="title" [formControl]="form.controls[\'title\']"\n              ></ion-input>\n         </ion-item>\n         <ion-item class="invalid" *ngIf="!form.controls.title.valid && (form.controls.title.dirty || form.controls.title.touched)" text-wrap>\n           <ion-icon name="warning"></ion-icon>\n          Ingrese una etiqueta valida\n          </ion-item>\n          \n        \n     <ion-item margin-bottom>\n      <ion-label>Estado</ion-label>\n      <ion-select [(ngModel)]="estado" [formControl]="form.controls[\'estado\']">\n        <ion-option value="Activo">Activo</ion-option>\n        <ion-option value="Inactivo">Inactivo</ion-option>\n      </ion-select>\n   </ion-item>\n   <ion-item class="invalid" *ngIf="!form.controls.estado.valid && (form.controls.estado.dirty || form.controls.estado.touched)" text-wrap>\n    <ion-icon name="warning"></ion-icon>\n    {{ \'ESTADOT\' | translate }}\n   </ion-item>\n  \n    \n         \n           \n         \n         \n       </ion-list>\n  \n       \n    </form>\n  \n  \n  </ion-content>'/*ion-inline-end:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\FORMULARIO\formsd-create\formsd-create.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3__providers__["d" /* NotificationProvider */], __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["F" /* ViewController */], __WEBPACK_IMPORTED_MODULE_3__providers__["a" /* Auth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */]])
    ], FormsdCreatePage);
    return FormsdCreatePage;
}());

//# sourceMappingURL=formsd-create.js.map

/***/ })

});
//# sourceMappingURL=28.js.map