webpackJsonp([27],{

/***/ 1145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GaleriaimgCreatePageModule", function() { return GaleriaimgCreatePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__galeriaimg_create__ = __webpack_require__(1602);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_selectable__ = __webpack_require__(446);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var GaleriaimgCreatePageModule = /** @class */ (function () {
    function GaleriaimgCreatePageModule() {
    }
    GaleriaimgCreatePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__galeriaimg_create__["a" /* GaleriaimgCreatePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__galeriaimg_create__["a" /* GaleriaimgCreatePage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild(),
                __WEBPACK_IMPORTED_MODULE_4_ionic_selectable__["b" /* IonicSelectableModule */]
            ],
        })
    ], GaleriaimgCreatePageModule);
    return GaleriaimgCreatePageModule;
}());

//# sourceMappingURL=galeriaimg-create.module.js.map

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

/***/ 1602:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GaleriaimgCreatePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_image_image__ = __webpack_require__(448);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ionic_selectable__ = __webpack_require__(446);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__types__ = __webpack_require__(1305);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var GaleriaimgCreatePage = /** @class */ (function () {
    function GaleriaimgCreatePage(alertCtrl, storage, _IMAGE, msj, translateService, viewCtrl, authService, navCtrl, navParams, _FB, actionSheetCtrl, events) {
        var _this = this;
        this.alertCtrl = alertCtrl;
        this.storage = storage;
        this._IMAGE = _IMAGE;
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
        this.foto = './assets/img/blanco.png';
        this.image = './assets/img/blanco.png';
        this.vcategoria = [];
        this.translateService.get('APPX').subscribe(function (value) {
            _this.idempresa = value;
        });
        this.form = this._FB.group({
            nombre: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            url: [''],
            estado: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            imagen: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            categoria: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required]
        });
        this.authService.getReg('todos/categoria-imagen/' + this.navParams.data.idempresa, 'frmcats').then(function (data) {
            _this.vcategoria = data;
        });
    }
    GaleriaimgCreatePage.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get('username').then(function (value) {
            _this.username = value;
        });
        this.portNameControl2 = this._FB.control(null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required);
        this.portForm2 = this._FB.group({
            portName: this.portNameControl2
        });
    };
    GaleriaimgCreatePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        if (this.navParams.get("record") == null) {
            this.translateService.get('ITEM_CREATE_TITLE').subscribe(function (value) {
                _this.pageTitle = value;
            });
            this.isDisablednit = true;
        }
        else {
            this._ID = this.navParams.data.record._id;
            this.nombre = this.navParams.data.record.nombre;
            this.url = this.navParams.data.record.url;
            this.categoria = this.navParams.data.record.categoria;
            this.foto = this.navParams.data.record.imagen;
            this.image = this.navParams.data.record.imagen;
            this.imagen = this.navParams.data.record.imagen;
            this.estado = this.navParams.data.record.estado;
            this.url = this.navParams.data.record.url;
            this.isDisablednit = false;
            this.translateService.get('ITEM_UPDATE_TITLE').subscribe(function (value) {
                _this.pageTitle = value;
            });
        }
    };
    GaleriaimgCreatePage.prototype.manageGallery = function () {
        var _this = this;
        var creat = 'Actualiza';
        if (this.navParams.get("record") == null) {
            creat = 'Crea';
        }
        var options = {
            idempresa: this.navParams.data.idempresa,
            nombre: this.form.controls['nombre'].value,
            url: this.form.controls['url'].value,
            imagen: this.imagen,
            categoria: this.form.controls['categoria'].value._id,
            estado: this.form.controls['estado'].value,
            bitacora: { idempresa: this.idempresa, idafiliado: '', email: this.username, permiso: creat, accion: creat + ' galeria de imagenes ' }
        };
        if (this.navParams.get("record") == null) {
            if (options) {
                this.authService.createReg('', options, 'galeriaimgs').then(function (result) {
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
                this.authService.createReg(this._ID, options, 'galeriaimgs').then(function (result) {
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
    GaleriaimgCreatePage.prototype.cancel = function () {
        this.viewCtrl.dismiss();
    };
    GaleriaimgCreatePage.prototype.done = function () {
        if (!this.form.valid) {
            return;
        }
        //this.viewCtrl.dismiss(this.form.value);
    };
    GaleriaimgCreatePage.prototype.updateProfileImage = function () {
        var _this = this;
        if (__WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__["a" /* Camera */]['installed']()) {
            var t1_1, t2_1;
            this.translateService.get('SELECCIONE_IMAGEN').subscribe(function (value) {
                t1_1 = value;
            });
            this.translateService.get('TOME_IMAGEN').subscribe(function (value) {
                t2_1 = value;
            });
            var actionSheet = this.actionSheetCtrl.create({
                title: t1_1,
                buttons: [
                    {
                        text: t2_1,
                        handler: function () {
                            _this.takePhotograph();
                        }
                    },
                    {
                        text: t1_1,
                        handler: function () {
                            _this.selectImage();
                        }
                    }
                ]
            });
            actionSheet.present();
        }
        else {
            this.fileInput.nativeElement.click();
        }
    };
    GaleriaimgCreatePage.prototype.takePhotograph = function () {
        var _this = this;
        if (__WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__["a" /* Camera */]['installed']()) {
            this._IMAGE
                .takePhotograph()
                .then(function (image) {
                _this.imagen = image.toString();
                _this.image = image.toString();
            })
                .catch(function (err) {
                console.log(err);
            });
        }
        else {
            this.fileInput.nativeElement.click();
        }
    };
    GaleriaimgCreatePage.prototype.selectImage = function () {
        var _this = this;
        if (__WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__["a" /* Camera */]['installed']()) {
            this._IMAGE
                .selectPhotograph()
                .then(function (image) {
                _this.imagen = image.toString();
                _this.image = image.toString();
            })
                .catch(function (err) {
                console.log(err);
            });
        }
        else {
            this.fileInput.nativeElement.click();
        }
    };
    GaleriaimgCreatePage.prototype.processWebImage = function (event) {
        var _this = this;
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();
            reader.onload = function (readerEvent) {
                _this.image = readerEvent.target.result;
                _this._IMAGE.generateFromImage(_this.image, 500, 500, 0.5, function (data) {
                    _this.image = data;
                    _this.imagen = data;
                    _this.nombre = event.target.files[0].name;
                });
            };
            reader.readAsDataURL(event.target.files[0]);
        }
    };
    GaleriaimgCreatePage.prototype.onAddForm2 = function (event) {
        this.portNameControl2.reset();
        this.portNameControl2.setValue(event.component.searchText);
        event.component.showAddItemTemplate();
    };
    GaleriaimgCreatePage.prototype.onSaveForm2 = function (event) {
        this.portNameControl2.setValue(event.item.nombre);
        event.component.showAddItemTemplate();
    };
    GaleriaimgCreatePage.prototype.deleteSelectedItem2 = function (op) {
        var itemToDeleteIndex;
        this.vcategoria.forEach(function (selectedItem, itemIndex) {
            if (selectedItem._id == op) {
                itemToDeleteIndex = itemIndex;
            }
        });
        this.vcategoria.splice(itemToDeleteIndex, 1);
    };
    GaleriaimgCreatePage.prototype.onDeleteForm2 = function (event, op2) {
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
                            _this.deleteSelectedItem2(recordID);
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
    GaleriaimgCreatePage.prototype.addForm2 = function (op) {
        var _this = this;
        var creat = 'Crea';
        var options = {
            idempresa: this.navParams.data.idempresa,
            idunidad: op,
            nombre: this.portNameControl2.value,
            bitacora: { idempresa: this.idempresa, idafiliado: '', email: this.username, permiso: creat, accion: creat + ' galeria imgs ' }
        };
        if (options) {
            this.authService.createReg('', options, 'frmcats').then(function (result) {
                var aa = result;
                var port = new __WEBPACK_IMPORTED_MODULE_9__types__["a" /* Form */]({
                    id: aa._id,
                    nombre: _this.portNameControl2.value
                });
                _this.portComponent2.addItem(port).then(function () {
                    _this.portComponent2.search(port.nombre);
                });
                _this.portNameControl2.reset();
                _this.portComponent2.hideAddItemTemplate();
            }, function (err) {
                _this.msj.showError3('Error', err.error);
            });
        }
    };
    GaleriaimgCreatePage.prototype.saveForm2 = function (port, op) {
        var _this = this;
        var creat = 'Actualiza';
        var options = {
            idempresa: this.navParams.data.idempresa,
            idunidad: op,
            nombre: this.portNameControl2.value,
            bitacora: { idempresa: this.idempresa, idafiliado: '', email: this.username, permiso: creat, accion: creat + ' galeriaimgs' }
        };
        if (options) {
            var aa;
            aa = port;
            this.authService.createReg(aa._id, options, 'frmcats').then(function (result) {
                port.nombre = _this.portNameControl2.value;
                _this.portComponent2.hideAddItemTemplate();
            }, function (err) {
                _this.msj.showError3('Error', err.error);
            });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('fileInput'),
        __metadata("design:type", Object)
    ], GaleriaimgCreatePage.prototype, "fileInput", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('portComponent'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_8_ionic_selectable__["a" /* IonicSelectableComponent */])
    ], GaleriaimgCreatePage.prototype, "portComponent", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('portComponent2'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_8_ionic_selectable__["a" /* IonicSelectableComponent */])
    ], GaleriaimgCreatePage.prototype, "portComponent2", void 0);
    GaleriaimgCreatePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-galeriaimg-create',template:/*ion-inline-start:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\WEBAPP\galeriaimg-create\galeriaimg-create.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>{{pageTitle}}</ion-title>\n    <ion-buttons end>\n        <button (click)="cancel()" icon-only ion-button padding-right>\n            <ion-icon name="md-close"></ion-icon>\n          </button>\n        <button  (click)="manageGallery()"  [disabled]="!form.valid" icon-only ion-button padding-right>\n            <ion-icon name="done-all"></ion-icon>\n          </button>\n          </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <form     [formGroup]="form"   text-wrap>\n    <ion-list>\n    \n        \n     \n        <ion-item text-wrap>  \n            <ion-label   > Categoria  </ion-label>\n      \n            <ionic-selectable #portComponent2 item-content placeholder="Seleccione un valor"  [canSearch]="true" \n            searchPlaceholder="Buscar un registro"\n             [shouldBackdropClose]="false" modalCssClass="modal"   closeButtonSlot="start"        \n                  [searchFailText]="\'No Existen registros.\'"       clearButtonText="Limpiar" addButtonText="Nuevo"\n             itemValueField="_id" itemTextField="nombre" [canClear]="true"\n             [canAddItem]="true"\n             [canSaveItem]="true"\n             [canDeleteItem]="true"\n             (onAddItem)="onAddForm2($event)"\n             (onSaveItem)="onSaveForm2($event)"\n             (onDeleteItem)="onDeleteForm2($event)"\n            [formControl]="form.controls[\'categoria\']"     [(ngModel)]="categoria" [items]="vcategoria"     item-content text-wrap> \n           <ng-template ionicSelectableCloseButtonTemplate><ion-icon name="close-circle" style="font-size: 24px;"></ion-icon>              </ng-template>\n           <ng-template ionicSelectableMessageTemplate>Seleccione un Registro.</ng-template>\n           <ng-template ionicSelectableTitleTemplate> Categorias </ng-template>\n           <ng-template ionicSelectableItemTemplate let-port="item">\n              {{port.nombre}} \n            </ng-template>\n           <ng-template ionicSelectableAddItemTemplate let-port="item"\n           let-isAdd="isAdd">\n           <form [formGroup]="portForm2" novalidate>\n             <ion-list>\n               <ion-item-divider>\n                 {{isAdd ? \'Agregar\' : \'Actualizar\'}} Categoria\n               </ion-item-divider>\n               <ion-item>\n                 <ion-label>Nombre</ion-label>\n                 <ion-input\n                   type="text"\n                   formControlName="portName"\n                   autocorrect="off"\n                   autocapitalize="none">   \n                 </ion-input>   \n               </ion-item>\n              \n             </ion-list>\n           </form>\n           <ion-footer>\n             <ion-toolbar>\n               <ion-row>\n                 <ion-col col-6>\n                   <button ion-button full no-margin\n                     (click)="portComponent2.hideAddItemTemplate()">\n                     Cancelar\n                   </button>\n                 </ion-col>\n                 <ion-col col-6>\n                   <button ion-button full no-margin\n                     (click)="isAdd ? addForm2(\'categoria-imagen\') : saveForm2(port2,\'categoria-imagen\')"\n                     [disabled]="!portForm2.valid">\n                     {{isAdd ? \'Nuevo\' : \'Grabar\'}}\n                   </button>\n                 </ion-col>\n               </ion-row>\n             </ion-toolbar>\n           </ion-footer>\n         </ng-template>\n      \n       </ionic-selectable>\n                 \n         \n          </ion-item>\n          <ion-item class="invalid" *ngIf="!form.controls.categoria.valid \n          && (form.controls.categoria.dirty || form.controls.categoria.touched)"  text-wrap>\n           \n            Ingrese una categoria valida\n         </ion-item>\n\n         \n\n        <ion-item margin-bottom>\n           <ion-label>Nombre</ion-label>\n           <ion-input\n              type="text"\n              [(ngModel)]="nombre" [formControl]="form.controls[\'nombre\']"\n             ></ion-input>\n        </ion-item>\n        <ion-item class="invalid" *ngIf="!form.controls.nombre.valid && (form.controls.nombre.dirty || form.controls.nombre.touched)" text-wrap>\n          <ion-icon name="warning"></ion-icon>\n          {{ \'NOMBRET\' | translate }}\n         </ion-item>\n   \n      <ion-item-group>\n        <ion-item>\n           <img [src]="image"   class="circle-pic"  height="150 px" width="150 px">\n           <input   type="hidden"    name="imagen" [formControl]="form.controls[\'imagen\']"    [(ngModel)]="imagen">\n        </ion-item>\n        <ion-item>\n            <a  ion-button    block  margin-bottom    color="secondary"  (click)="updateProfileImage()">                Seleccione image         </a>\n            <input type="file" accept="image/*" #fileInput style="visibility: hidden; height: 0px" (change)="processWebImage($event)" />\n         </ion-item>\n     </ion-item-group>\n        <ion-item margin-bottom>\n           <ion-label>Url</ion-label>\n           <ion-input\n              type="text"\n              [(ngModel)]="url"\n              [formControl]="form.controls[\'url\']"></ion-input>\n        </ion-item>\n        \n      \n \n\n     \n\n         <ion-item margin-bottom>\n            <ion-label>Estado</ion-label>\n            <ion-select [(ngModel)]="estado" [formControl]="form.controls[\'estado\']">\n              <ion-option value="Activo">Activo</ion-option>\n              <ion-option value="Inactivo">Inactivo</ion-option>\n            </ion-select>\n         </ion-item>\n         <ion-item class="invalid" *ngIf="!form.controls.estado.valid && (form.controls.estado.dirty || form.controls.estado.touched)" text-wrap>\n          <ion-icon name="warning"></ion-icon>\n          {{ \'ESTADOT\' | translate }}\n         </ion-item>\n        \n     </ion-list>\n  </form>\n\n\n</ion-content>'/*ion-inline-end:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\WEBAPP\galeriaimg-create\galeriaimg-create.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_5__providers_image_image__["a" /* ImageProvider */], __WEBPACK_IMPORTED_MODULE_3__providers__["d" /* NotificationProvider */], __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["F" /* ViewController */], __WEBPACK_IMPORTED_MODULE_3__providers__["a" /* Auth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */]])
    ], GaleriaimgCreatePage);
    return GaleriaimgCreatePage;
}());

//# sourceMappingURL=galeriaimg-create.js.map

/***/ })

});
//# sourceMappingURL=27.js.map