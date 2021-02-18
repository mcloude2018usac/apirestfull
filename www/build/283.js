webpackJsonp([283],{

/***/ 1311:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReglamentoCreatePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_image_image__ = __webpack_require__(448);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_camera__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ionic_selectable__ = __webpack_require__(446);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ReglamentoCreatePage = /** @class */ (function () {
    function ReglamentoCreatePage(_MODAL, alertCtrl, _IMAGE, storage, msj, translateService, viewCtrl, authService, navCtrl, navParams, _FB, actionSheetCtrl, events) {
        var _this = this;
        this._MODAL = _MODAL;
        this.alertCtrl = alertCtrl;
        this._IMAGE = _IMAGE;
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
        this.vpais = [];
        this.vtipo = [];
        this.vsector = [];
        this.varea = [];
        this.tiposus = [];
        this.f1 = './assets/img/blanco.png';
        this.text = 'hello world';
        this.createdCode = null;
        this.scannedCode = null;
        this.vtarifa = [];
        this.translateService.get('APPX').subscribe(function (value) {
            _this.idempresa = value;
            _this.authService.getReg('todos/pais-plantilla/' + _this.navParams.data.idempresa, 'frmcats').then(function (data) {
                _this.vpais = data;
            });
            _this.authService.getReg('todos/tipo-plantilla/' + _this.navParams.data.idempresa, 'frmcats').then(function (data) {
                _this.vtipo = data;
            });
            _this.authService.getReg('todos/sector-plantilla/' + _this.navParams.data.idempresa, 'frmcats').then(function (data) {
                _this.vsector = data;
            });
            _this.authService.getReg('todos/area-plantilla/' + _this.navParams.data.idempresa, 'frmcats').then(function (data) {
                _this.varea = data;
            });
        });
        this.form = this._FB.group({
            fecha: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            estado: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            nombre: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            titulo: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            texto: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            pais: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            tipo: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            sector: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            area: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            f1: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            f2: [''],
            ubicacion: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            autor: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            presenta: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required]
        });
    }
    ReglamentoCreatePage.prototype.ionViewDidLoad = function () {
        //   this.portComponent.open();
        var _this = this;
        this.storage.get('tiposus').then(function (value) {
            _this.tiposus = value.split(',');
        });
        if (this.navParams.get("record") == null) {
        }
        else {
            this._ID = this.navParams.data.record._id;
            this.titulo = this.navParams.data.record.titulo;
            this.estado = this.navParams.data.record.estado;
            this.fecha = this.navParams.data.record.fecha;
            this.nombre = this.navParams.data.record.nombre;
            this.foto = this.navParams.data.record.f1;
            this.f1 = this.navParams.data.record.f1;
            this.pais = this.navParams.data.record.pais;
            this.tipo = this.navParams.data.record.tipo;
            this.sector = this.navParams.data.record.sector;
            this.area = this.navParams.data.record.area;
            this.image = this.navParams.data.record.f1;
            this.ubicacion = this.navParams.data.record.ubicacion;
            this.autor = this.navParams.data.record.autor;
            this.presenta = this.navParams.data.record.presenta;
            this.form.controls['texto'].setValue(this.navParams.data.record.texto);
            //  this.texto			=	this.navParams.data.record.texto;
        }
    };
    ReglamentoCreatePage.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get('username').then(function (value) {
            _this.username = value;
        });
        this.portNameControl = this._FB.control(null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required);
        this.portForm = this._FB.group({
            portName: this.portNameControl
        });
        this.portNameControl2 = this._FB.control(null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required);
        this.portForm2 = this._FB.group({
            portName: this.portNameControl2
        });
        this.portNameControl3 = this._FB.control(null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required);
        this.portForm3 = this._FB.group({
            portName: this.portNameControl3
        });
        this.portNameControl4 = this._FB.control(null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required);
        this.portForm4 = this._FB.group({
            portName: this.portNameControl4
        });
    };
    ReglamentoCreatePage.prototype.manageGallery = function () {
        var _this = this;
        var creat = 'Actualiza';
        if (this.navParams.get("record") == null) {
            creat = 'Crea';
        }
        var options = {
            idempresa: this.navParams.data.idempresa,
            idcategoria: this.navParams.data.idcategoria,
            nombre: this.form.controls['nombre'].value,
            titulo: this.form.controls['titulo'].value,
            texto: this.form.get('texto').value.trim(),
            fecha: this.form.controls['fecha'].value,
            pais: this.form.controls['pais'].value.id,
            tipo: this.form.controls['tipo'].value.id,
            sector: this.form.controls['sector'].value.id,
            area: this.form.controls['area'].value.id,
            //  tipo:this.navParams.data.tipo,
            estado: this.form.controls['estado'].value,
            f1: this.f1,
            f2: '',
            ubicacion: this.form.controls['ubicacion'].value,
            autor: this.form.controls['autor'].value,
            presenta: this.form.controls['presenta'].value,
            bitacora: { idempresa: this.navParams.data.idempresa, idafiliado: '', email: this.username, permiso: creat, accion: creat + ' reglamento ' }
        };
        if (this.navParams.get("record") == null) {
            if (options) {
                this.authService.createReg('', options, 'reglamentos').then(function (result) {
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
                this.authService.createReg(this._ID, options, 'reglamentos').then(function (result) {
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
    ReglamentoCreatePage.prototype.cancel = function () {
        this.viewCtrl.dismiss();
    };
    ReglamentoCreatePage.prototype.updateProfileImage = function (op) {
        var _this = this;
        this.opimg = op;
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
                        _this.takePhotograph(op);
                    }
                },
                {
                    text: t1,
                    handler: function () {
                        _this.selectImage(op);
                    }
                }
            ]
        });
        actionSheet.present();
    };
    ReglamentoCreatePage.prototype.takePhotograph = function (op) {
        var _this = this;
        if (__WEBPACK_IMPORTED_MODULE_7__ionic_native_camera__["a" /* Camera */]['installed']()) {
            this._IMAGE
                .takePhotograph()
                .then(function (image) {
                _this.f1 = image.toString();
                // if(op==1){     this.f1 	= image.toString();}
                //  if(op==2) {    this.f2 	= image.toString();}
            })
                .catch(function (err) {
                console.log(err);
            });
        }
        else {
            this.fileInput.nativeElement.click();
        }
    };
    ReglamentoCreatePage.prototype.selectImage = function (op) {
        var _this = this;
        if (__WEBPACK_IMPORTED_MODULE_7__ionic_native_camera__["a" /* Camera */]['installed']()) {
            this._IMAGE
                .selectPhotograph()
                .then(function (image) {
                _this.f1 = image.toString();
            })
                .catch(function (err) {
                console.log(err);
            });
        }
        else {
            this.fileInput.nativeElement.click();
        }
    };
    ReglamentoCreatePage.prototype.processWebImage = function (event, op) {
        var _this = this;
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();
            reader.onload = function (readerEvent) {
                _this.f1 = readerEvent.target.result;
                _this._IMAGE.generateFromImage(_this.f1, 200, 200, 1, function (data) {
                    _this.f1 = data;
                });
            };
            reader.readAsDataURL(event.target.files[0]);
        }
    };
    ReglamentoCreatePage.prototype.onAddForm = function (event, catalogo, op) {
        var _this = this;
        switch (op) {
            case 1:
                this.portNameControl.reset();
                this.portNameControl.setValue(event.component.searchText);
                break;
            case 2:
                this.portNameControl2.reset();
                this.portNameControl2.setValue(event.component.searchText);
                break;
            case 3:
                this.portNameControl3.reset();
                this.portNameControl3.setValue(event.component.searchText);
                break;
            case 4:
                this.portNameControl4.reset();
                this.portNameControl4.setValue(event.component.searchText);
                break;
        }
        var addModal = this._MODAL.create('CatalogoSelectablePage', { record: null, op: catalogo, frm: 'frmcats' }, { showBackdrop: true });
        addModal.onDidDismiss(function (data) {
            if (data) {
                switch (op) {
                    case 1:
                        _this.portComponent.addItem(data);
                        if (_this.vpais.length == 1) {
                            _this.portComponent.close().catch(function () { });
                            _this.portComponent.open().catch(function () { });
                        }
                        break;
                    case 2:
                        _this.portComponent2.addItem(data);
                        if (_this.vtipo.length == 1) {
                            _this.portComponent2.close().catch(function () { });
                            _this.portComponent2.open().catch(function () { });
                        }
                        break;
                    case 3:
                        _this.portComponent3.addItem(data);
                        if (_this.vsector.length == 1) {
                            _this.portComponent3.close().catch(function () { });
                            _this.portComponent3.open().catch(function () { });
                        }
                        break;
                    case 4:
                        _this.portComponent4.addItem(data);
                        if (_this.varea.length == 1) {
                            _this.portComponent4.close().catch(function () { });
                            _this.portComponent4.open().catch(function () { });
                        }
                        break;
                }
            }
        });
        addModal.present();
    };
    ReglamentoCreatePage.prototype.onSaveForm = function (event, catalogo) {
        var _this = this;
        var addModal = this._MODAL.create('CatalogoSelectablePage', { record: { _id: event.item.id, nombre: event.item.nombre }, op: catalogo, frm: 'frmcats' }, { showBackdrop: true });
        addModal.onDidDismiss(function (data) {
            if (data) {
                _this.savePort(event.item, data.nombre);
            }
        });
        addModal.present();
    };
    ReglamentoCreatePage.prototype.savePort = function (port, op) { port.nombre = op; };
    ReglamentoCreatePage.prototype.deleteSelectedItem = function (op) {
        var itemToDeleteIndex;
        var entra = 0;
        this.vpais.forEach(function (selectedItem, itemIndex) {
            if (selectedItem.id == op) {
                itemToDeleteIndex = itemIndex;
                entra = 1;
            }
        });
        if (entra == 1)
            this.vpais.splice(itemToDeleteIndex, 1);
    };
    ReglamentoCreatePage.prototype.onDeleteForm = function (event, op) {
        var _this = this;
        var alert = this.alertCtrl.create({ title: 'Seguro de realizar esta operación?',
            buttons: [
                { text: 'Si',
                    handler: function () {
                        var aa;
                        aa = event.item;
                        var recordID = aa.id;
                        _this.authService.deleteReg(recordID + '/' + _this.username + '/' + _this.idempresa + '/' + _this.idafiliado, 'frmcats').then(function (data) {
                            event.component.deleteItem(data);
                            switch (op) {
                                case 1:
                                    _this.portComponent.clear();
                                    break;
                                case 2:
                                    _this.portComponent2.clear();
                                    break;
                                case 3:
                                    _this.portComponent3.clear();
                                    break;
                                case 4:
                                    _this.portComponent4.clear();
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('fileInput'),
        __metadata("design:type", Object)
    ], ReglamentoCreatePage.prototype, "fileInput", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('fileInput'),
        __metadata("design:type", Object)
    ], ReglamentoCreatePage.prototype, "fileInput2", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('portComponent'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_8_ionic_selectable__["a" /* IonicSelectableComponent */])
    ], ReglamentoCreatePage.prototype, "portComponent", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('portComponent2'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_8_ionic_selectable__["a" /* IonicSelectableComponent */])
    ], ReglamentoCreatePage.prototype, "portComponent2", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('portComponent3'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_8_ionic_selectable__["a" /* IonicSelectableComponent */])
    ], ReglamentoCreatePage.prototype, "portComponent3", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('portComponent4'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_8_ionic_selectable__["a" /* IonicSelectableComponent */])
    ], ReglamentoCreatePage.prototype, "portComponent4", void 0);
    ReglamentoCreatePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-reglamento-create',template:/*ion-inline-start:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\ABOGADOS\reglamento-create\reglamento-create.html"*/'<ion-header no-border class="opaque">\n  <ion-navbar  no-border-bottom>\n    <ion-title>{{titulox}}</ion-title>\n    <ion-buttons start>\n        <button (click)="cancel()" icon-only ion-button padding-right>\n            <ion-icon name="md-close"></ion-icon>\n          </button>\n       \n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content fullscreen> \n\n \n  <form     [formGroup]="form"   text-wrap>   \n    <ion-list>\n         \n      <ion-item text-wrap>  \n        <ion-label    class="my-label18" color="secondary2"> Pais  </ion-label>\n        <ionic-selectable #portComponent placeholder="Seleccione un valor"  [canSearch]="true" searchPlaceholder="Buscar un registro"\n         [shouldBackdropClose]="false" modalCssClass="modal"   closeButtonSlot="start"        \n              [searchFailText]="\'No Existen registros.\'"       clearButtonText="Limpiar" addButtonText="Nuevo"\n         itemValueField="id" itemTextField="nombre" [canClear]="true"\n         [canAddItem]="true"         [canSaveItem]="true"         [canDeleteItem]="true"\n         (onAddItem)="onAddForm($event,\'pais-plantilla\',1)"         (onSaveItem)="onSaveForm($event,\'pais-plantilla\')"         (onDeleteItem)="onDeleteForm($event)"\n        [formControl]="form.controls[\'pais\']"     [(ngModel)]="pais" [items]="vpais"     item-content text-wrap> \n       <ng-template ionicSelectableAddItemTemplate let-port="item"       let-isAdd="isAdd">\n       <form [formGroup]="portForm" novalidate>\n         <ion-list>\n           <ion-item-divider>\n             {{isAdd ? \'Agregar \' : \'Actualizar\'}} pais\n           </ion-item-divider>\n           <ion-item>\n             <ion-label>Nombre</ion-label>\n             <ion-input               type="text"               formControlName="portName"               autocorrect="off"               autocapitalize="none">\n             </ion-input>   \n           </ion-item>\n         </ion-list>\n       </form>\n     </ng-template>\n  </ionic-selectable>\n      </ion-item>\n      <ion-item class="invalid" *ngIf="!form.controls.pais.valid       && (form.controls.pais.dirty || form.controls.pais.touched)"  text-wrap>       \n        Ingrese una pais valida\n     </ion-item>\n\n\n\n     <ion-item text-wrap>  \n      <ion-label   class="my-label18" color="secondary2" > Tipo  </ion-label>\n\n      <ionic-selectable #portComponent2 placeholder="Seleccione un valor"  [canSearch]="true" searchPlaceholder="Buscar un registro"\n       [shouldBackdropClose]="true" modalCssClass="modal"     [searchFailText]="\'No Existen registros.\'"       addButtonText="Nuevo"\n       itemValueField="id" itemTextField="nombre"     [canAddItem]="true"        [canSaveItem]="true"       [canDeleteItem]="true"\n              (onAddItem)="onAddForm($event,\'tipo-plantilla\',2)"       (onSaveItem)="onSaveForm($event,\'tipo-plantilla\')"       (onDeleteItem)="onDeleteForm($event,2)"\n      [formControl]="form.controls[\'tipo\']"     [(ngModel)]="tipo" [items]="vtipo"     item-content> \n     <ng-template ionicSelectableMessageTemplate>Seleccione un Registro.</ng-template>\n     <ng-template ionicSelectableTitleTemplate> tipos </ng-template>\n     <ng-template ionicSelectableAddItemTemplate let-port="item"   let-isAdd="isAdd">\n     <form [formGroup]="portForm2" novalidate>\n       <ion-list>\n         <ion-item-divider>\n           {{isAdd ? \'Agregar \' : \'Actualizar\'}} tipo\n         </ion-item-divider>\n         <ion-item>\n           <ion-label>Nombre</ion-label>\n           <ion-input             type="text"             formControlName="portName"             autocorrect="off"             autocapitalize="none">\n           </ion-input>   \n         </ion-item>\n       </ion-list>\n     </form>\n   </ng-template>\n </ionic-selectable>\n    </ion-item>\n    <ion-item class="invalid" *ngIf="!form.controls.tipo.valid     && (form.controls.tipo.dirty || form.controls.tipo.touched)"  text-wrap>\n      Ingrese una tipo valida\n   </ion-item>\n\n   \n   <ion-item text-wrap>  \n    <ion-label   class="my-label18" color="secondary2" > Sector  </ion-label>\n\n    <ionic-selectable #portComponent3 placeholder="Seleccione un valor"  [canSearch]="true" searchPlaceholder="Buscar un registro"\n     [shouldBackdropClose]="true" modalCssClass="modal"     [searchFailText]="\'No Existen registros.\'"       addButtonText="Nuevo"\n     itemValueField="id" itemTextField="nombre"     [canAddItem]="true"        [canSaveItem]="true"       [canDeleteItem]="true"\n            (onAddItem)="onAddForm($event,\'sector-plantilla\',3)"       (onSaveItem)="onSaveForm($event,\'sector-plantilla\')"       (onDeleteItem)="onDeleteForm($event,3)"\n    [formControl]="form.controls[\'sector\']"     [(ngModel)]="sector" [items]="vsector"     item-content> \n   <ng-template ionicSelectableMessageTemplate>Seleccione un Registro.</ng-template>\n   <ng-template ionicSelectableTitleTemplate> sectors </ng-template>\n   <ng-template ionicSelectableAddItemTemplate let-port="item"   let-isAdd="isAdd">\n   <form [formGroup]="portForm2" novalidate>\n     <ion-list>\n       <ion-item-divider>\n         {{isAdd ? \'Agregar \' : \'Actualizar\'}} sector\n       </ion-item-divider>\n       <ion-item>\n         <ion-label>Nombre</ion-label>\n         <ion-input             type="text"             formControlName="portName"             autocorrect="off"             autocapitalize="none">\n         </ion-input>   \n       </ion-item>\n     </ion-list>\n   </form>\n </ng-template>\n</ionic-selectable>\n  </ion-item>\n  <ion-item class="invalid" *ngIf="!form.controls.sector.valid     && (form.controls.sector.dirty || form.controls.sector.touched)"  text-wrap>\n    Ingrese una sector valida\n </ion-item>\n\n\n <ion-item text-wrap>  \n  <ion-label   class="my-label18" color="secondary2" > Area  </ion-label>\n\n  <ionic-selectable #portComponent4 placeholder="Seleccione un valor"  [canSearch]="true" searchPlaceholder="Buscar un registro"\n   [shouldBackdropClose]="true" modalCssClass="modal"     [searchFailText]="\'No Existen registros.\'"       addButtonText="Nuevo"\n   itemValueField="id" itemTextField="nombre"     [canAddItem]="true"        [canSaveItem]="true"       [canDeleteItem]="true"\n          (onAddItem)="onAddForm($event,\'area-plantilla\',4)"       (onSaveItem)="onSaveForm($event,\'area-plantilla\')"       (onDeleteItem)="onDeleteForm($event,4)"\n  [formControl]="form.controls[\'area\']"     [(ngModel)]="area" [items]="varea"     item-content> \n <ng-template ionicSelectableMessageTemplate>Seleccione un Registro.</ng-template>\n <ng-template ionicSelectableTitleTemplate> areas </ng-template>\n <ng-template ionicSelectableAddItemTemplate let-port="item"   let-isAdd="isAdd">\n <form [formGroup]="portForm2" novalidate>\n   <ion-list>\n     <ion-item-divider>\n       {{isAdd ? \'Agregar \' : \'Actualizar\'}} area\n     </ion-item-divider>\n     <ion-item>\n       <ion-label>Nombre</ion-label>\n       <ion-input             type="text"             formControlName="portName"             autocorrect="off"             autocapitalize="none">\n       </ion-input>   \n     </ion-item>\n   </ion-list>\n </form>\n</ng-template>\n</ionic-selectable>\n</ion-item>\n<ion-item class="invalid" *ngIf="!form.controls.area.valid     && (form.controls.area.dirty || form.controls.area.touched)"  text-wrap>\n  Ingrese una area valida\n</ion-item>\n\n\n\n        \n      <ion-item  margin-bottom>\n        <ion-label class="my-label18" color="secondary2">Fecha y hora:</ion-label>\n        <ion-datetime displayFormat="DD/MM/YYYY hh:mm A"  \n        [formControl]="form.controls[\'fecha\']" [(ngModel)]="fecha"></ion-datetime>\n      </ion-item>\n      <ion-item class="invalid" *ngIf="!form.controls.fecha.valid && (form.controls.fecha.dirty || form.controls.fecha.touched)" text-wrap>\n        <ion-icon name="warning"></ion-icon>\n        Ingrese una fecha publicación\n      </ion-item>\n\n      <ion-item-group>\n        <ion-item>\n           <img [src]="f1"   class="circle-pic"  height="150 px" width="150 px">\n           <input   type="hidden"    name="imagen" [formControl]="form.controls[\'f1\']"    [(ngModel)]="f1">\n        </ion-item>\n        <ion-item>\n            <a  ion-button    block  margin-bottom    color="secondary"  (click)="updateProfileImage()">                Seleccione Afiche         </a>\n            <input type="file" accept="image/*" #fileInput style="visibility: hidden; height: 0px" (change)="processWebImage($event)" />\n         </ion-item>\n     </ion-item-group>\n\n\n     \n           \n     <ion-item margin-bottom>\n      <ion-label class="my-label18" color="secondary2" >Titulo:</ion-label>\n      <ion-input         type="text"     [(ngModel)]="titulo" [formControl]="form.controls[\'titulo\']"\n       ></ion-input>\n   </ion-item>\n   <ion-item class="invalid" *ngIf="!form.controls.titulo.valid && (form.controls.titulo.dirty || form.controls.titulo.touched)" text-wrap readonly>\n     <ion-icon name="warning"></ion-icon>\n    Ingrese un titulo valido\n    </ion-item>  \n\n\n        <ion-item margin-bottom>\n           <ion-label class="my-label18" color="secondary2" >Descripción corta:</ion-label>\n           <ion-textarea   rows=\'3\'        type="text"      [(ngModel)]="nombre" [formControl]="form.controls[\'nombre\']"\n            ></ion-textarea>\n        </ion-item>\n        <ion-item class="invalid" *ngIf="!form.controls.nombre.valid && (form.controls.nombre.dirty || form.controls.nombre.touched)" text-wrap readonly>\n          <ion-icon name="warning"></ion-icon>\n          Ingrese una descripcion corta valida\n         </ion-item>\n\n       \n         \n    \n        <ion-item margin-bottom>\n          <ion-label class="my-label18" color="secondary2" >No decreto:</ion-label>\n          <ion-textarea   rows=\'3\'        type="text"      [(ngModel)]="ubicacion" [formControl]="form.controls[\'ubicacion\']"\n           ></ion-textarea>\n       </ion-item>\n       <ion-item class="invalid" *ngIf="!form.controls.ubicacion.valid && (form.controls.ubicacion.dirty || form.controls.ubicacion.touched)" text-wrap readonly>\n         <ion-icon name="warning"></ion-icon>\n         Ingrese un no decreto valido\n        </ion-item>\n\n        \n    \n        <ion-item margin-bottom>\n          <ion-label class="my-label18" color="secondary2" >Autor:</ion-label>\n          <ion-textarea   rows=\'3\'        type="text"      [(ngModel)]="autor" [formControl]="form.controls[\'autor\']"\n           ></ion-textarea>\n       </ion-item>\n       <ion-item class="invalid" *ngIf="!form.controls.autor.valid && (form.controls.autor.dirty || form.controls.autor.touched)" text-wrap readonly>\n         <ion-icon name="warning"></ion-icon>\n         Ingrese un autor valida\n        </ion-item>\n\n        \n    \n        <ion-item margin-bottom>\n          <ion-label class="my-label18" color="secondary2" >Presenta:</ion-label>\n          <ion-textarea   rows=\'3\'        type="text"      [(ngModel)]="presenta" [formControl]="form.controls[\'presenta\']"\n           ></ion-textarea>\n       </ion-item>\n       <ion-item class="invalid" *ngIf="!form.controls.presenta.valid && (form.controls.presenta.dirty || form.controls.presenta.touched)" text-wrap readonly>\n         <ion-icon name="warning"></ion-icon>\n         Ingrese un presenta valido\n        </ion-item>\n\n   \n       \n        \n        <ion-item margin-bottom>\n          <ion-label>Estado</ion-label>\n          <ion-select [(ngModel)]="estado" [formControl]="form.controls[\'estado\']">\n            <ion-option value="Activo">Activo</ion-option>\n            <ion-option value="Inactivo">Inactivo</ion-option>\n          </ion-select>\n       </ion-item>\n       <ion-item class="invalid" *ngIf="!form.controls.estado.valid && (form.controls.estado.dirty || form.controls.estado.touched)" text-wrap>\n        <ion-icon name="warning"></ion-icon>\n        {{ \'ESTADOT\' | translate }}\n       </ion-item>\n        \n       \n     </ion-list>\n<!--vzkfhlcxdaldqrfvuan31fgz2v2ath4l417ntp2lmbr64nek\n  <textarea [froalaEditor] formControlName="texto" [(froalaModel)]="texto"></textarea>\n     <div [froalaView]="texto"></div>\n-->\n\n\n<editor #editorx  [formControl]="form.controls[\'texto\']" \napiKey="vzkfhlcxdaldqrfvuan31fgz2v2ath4l417ntp2lmbr64nek" [init]="{\n  plugins: \'link image fullscreen  table powerpaste advcode searchreplace visualblocks hr pagebreak nonbreaking anchor toc advlist lists wordcount tinymcespellchecker a11ychecker imagetools\',\n  toolbar: \'formatselect | bold italic strikethrough forecolor backcolor permanentpen formatpainter | link image media pageembed | alignleft aligncenter alignright alignjustify  | numlist bullist outdent indent | removeformat | addcomment\',\n \n height: 280,\n menubar: true,\n image_caption: true,\n mobile: {\n  theme: \'mobile\',\n  plugins: [ \'autosave\', \'lists\', \'autolink\',\'table\' ],\n  toolbar: [ \'undo\', \'bold\', \'italic\', \'styleselect\' ]\n}\n}"></editor>   \n\n   \n     <ion-row>\n      <ion-col text-center>\n        <button  ion-button block color="secondary" (click)="manageGallery()" [disabled]="!form.valid" strong>\n          GUARDAR\n        </button>\n      </ion-col>\n    </ion-row>\n     \n  </form>\n\n\n</ion-content>'/*ion-inline-end:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\ABOGADOS\reglamento-create\reglamento-create.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_6__providers_image_image__["a" /* ImageProvider */], __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3__providers__["d" /* NotificationProvider */], __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["F" /* ViewController */], __WEBPACK_IMPORTED_MODULE_3__providers__["a" /* Auth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */]])
    ], ReglamentoCreatePage);
    return ReglamentoCreatePage;
}());

//# sourceMappingURL=reglamento-create.js.map

/***/ }),

/***/ 871:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReglamentoCreatePageModule", function() { return ReglamentoCreatePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reglamento_create__ = __webpack_require__(1311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular_froala_wysiwyg__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tinymce_tinymce_angular__ = __webpack_require__(452);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_selectable__ = __webpack_require__(446);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




//import { QuillModule } from 'ngx-quill'



var ReglamentoCreatePageModule = /** @class */ (function () {
    function ReglamentoCreatePageModule() {
    }
    ReglamentoCreatePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__reglamento_create__["a" /* ReglamentoCreatePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__reglamento_create__["a" /* ReglamentoCreatePage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild() //,QuillModule
                ,
                __WEBPACK_IMPORTED_MODULE_4_angular_froala_wysiwyg__["a" /* FroalaEditorModule */], __WEBPACK_IMPORTED_MODULE_4_angular_froala_wysiwyg__["b" /* FroalaViewModule */], __WEBPACK_IMPORTED_MODULE_5__tinymce_tinymce_angular__["a" /* EditorModule */], __WEBPACK_IMPORTED_MODULE_6_ionic_selectable__["b" /* IonicSelectableModule */]
            ],
        })
    ], ReglamentoCreatePageModule);
    return ReglamentoCreatePageModule;
}());

//# sourceMappingURL=reglamento-create.module.js.map

/***/ })

});
//# sourceMappingURL=283.js.map