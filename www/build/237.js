webpackJsonp([237],{

/***/ 1385:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DocenteNotas2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_pdf_pdfx__ = __webpack_require__(447);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var DocenteNotas2Page = /** @class */ (function () {
    function DocenteNotas2Page(loadingCtrl, _FB, Pdfx, _MODAL, modalCtrl, actionSheetCtrl, storage, alertCtrl, msj, translateService, navCtrl, navParams, regService) {
        var _this = this;
        this.loadingCtrl = loadingCtrl;
        this._FB = _FB;
        this.Pdfx = Pdfx;
        this._MODAL = _MODAL;
        this.modalCtrl = modalCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.msj = msj;
        this.translateService = translateService;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.regService = regService;
        this.loading = true;
        this.items = [];
        this.items2 = [];
        this.generated = '';
        this.permisom = [];
        this.potros1 = [];
        this.pnota = false;
        this.pingreso = false;
        this.pconsulta = false;
        this.peliminacion = false;
        this.pcreacion = false;
        this.pactualizacion = false;
        this.preporte = false;
        this.pfiltro = false;
        this.idafiliado = 'na';
        this.hasFilter = false;
        this.gLimit = 50;
        this.PageSegmet = 'foods';
        this.gSearchQuery = '';
        this.username = "";
        this.randomScalingFactor = function () {
            return Math.ceil(Math.random() * 10.0) * Math.pow(10, Math.ceil(Math.random() * 5));
        };
        this.translateService.get('APPX').subscribe(function (value) {
            _this.idempresa = value;
        });
        this.tipoxxx = this.navParams.data.tipoxxx;
        this.titlexx = this.navParams.data.titlexx;
        this.permisom = String(navParams.get("permiso")).split(",");
        this.potros1 = JSON.parse(JSON.stringify(navParams.get("potros1")));
        this.pingreso = (this.permisom[0] == 'true');
        this.pconsulta = (this.permisom[1] == 'true');
        this.peliminacion = (this.permisom[2] == 'true');
        this.pcreacion = (this.permisom[3] == 'true');
        this.pactualizacion = (this.permisom[4] == 'true');
        this.pfiltro = (this.permisom[5] == 'true');
        this.preporte = (this.permisom[6] == 'true');
        var someJsonString = navParams.get("potros1");
        this.testado = this.navParams.data.record.estadoacta;
        this.form = this._FB.group({
            iddia: [''],
            idhora: [''],
            idhoraf: [''],
            iddiaa: [''],
            iddiab: ['']
        });
        // jsonObject will contain a valid JavaScript object
        if (someJsonString != '') {
            this.jsonObject2 = JSON.parse(someJsonString);
        }
    }
    DocenteNotas2Page.prototype.clearSearchg = function () {
        this.gSearchQuery = '';
    };
    DocenteNotas2Page.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get('username').then(function (value) {
            _this.username = value;
        });
    };
    DocenteNotas2Page.prototype.manageGallery = function (item) {
        var _this = this;
        if (this.username == '') {
            this.msj.showError3('Mensaje', 'Existe un problema con su dispositivo , no existe usuario');
            return;
        }
        if (!this.username) {
            this.msj.showError3('Mensaje', 'Existe un problema con su dispositivo , no existe usuario');
            return;
        }
        var loading = this.loadingCtrl.create({
            spinner: 'bubbles',
            content: "Espere un momento,  Realizando  Operación ......"
        });
        loading.present();
        var creat = 'Actualiza';
        var options = {
            operacion: 'ponenota2',
            n1: this.iddia,
            n2: this.idhora,
            n3: Number(this.iddia) + Number(this.idhora),
            n4: this.idhoraf,
            n5: Number(this.iddia) + Number(this.idhora) + Number(this.idhoraf),
            bitacora: { idempresa: this.idempresa, idafiliado: '', email: this.username, permiso: creat, accion: creat + ' asigna nota examen de bimestre ' }
        };
        if (options) {
            this.regService.createReg2b(item._id, options, 'asignaubicacions').then(function (result) {
                loading.dismiss();
            }, function (err) {
                loading.dismiss();
                _this.msj.showError3('Mensaje', err.error);
            });
        }
    };
    DocenteNotas2Page.prototype.dapermisos2 = function (data, opcion) {
        var re = '';
        for (var i = 0; i < data.length; i++) {
            if (data[i].modulo == opcion) {
                re = data[i].permisos.ingreso + ',' + data[i].permisos.consulta + ',' + data[i].permisos.elimina + ',' + data[i].permisos.creacion + ',' + data[i].permisos.actualiza + ',' + data[i].permisos.filtro + ',' + data[i].permisos.reporte;
                break;
            }
        }
        return re;
    };
    DocenteNotas2Page.prototype.onChangeTime = function (data, event, op, item) {
        var _this = this;
        //(this.estadoacta !== 'Final') &&
        if ((this.estadoacta !== 'Final') && (this.estadoacta !== 'Preliminar')) {
            console.log("data: " + data.value + ' id ' + event.currentTarget.id);
            var n1a = item.n1;
            var n2a = item.n2;
            var n4a = item.n4;
            var valoractual = Math.floor(data.value);
            // valoractual= valoractual.toFixed()
            if (op == 1) {
                //  this.form.controls['iddiaa'].setValue(valoractual)
                if (Number(valoractual) >= 0 && Number(valoractual) <= 25) { }
                else {
                    this.form.controls['iddiaa'].setValue(n1a);
                    this.msj.showError3('Mensaje', 'Nota no debe de ser mayor a 25');
                    return;
                }
            }
            if (op == 2) {
                if (Number(valoractual) >= 0 && Number(valoractual) <= 25) { }
                else {
                    this.form.controls['idhora'].setValue(n2a);
                    this.msj.showError3('Mensaje', 'Nota no debe de ser mayor a 25');
                    return;
                }
            }
            if (op == 3) {
                if (Number(valoractual) >= 0 && Number(valoractual) <= 50) { }
                else {
                    this.msj.showError3('Mensaje', 'Nota no debe de ser mayor a 50');
                    this.form.controls['idhoraf'].setValue(n4a);
                    return;
                }
            }
            var n3a = 0;
            n3a = Number(n1a) + Number(n2a);
            if (op == 1) {
                n1a = valoractual;
                this.form.controls['iddiaa'].setValue(Number(n1a) + Number(n2a));
                n3a = Number(n1a) + Number(n2a);
            }
            if (op == 2) {
                n2a = valoractual;
                this.form.controls['iddiaa'].setValue(Number(n1a) + Number(n2a));
                n3a = Number(n1a) + Number(n2a);
            }
            if (op == 3) {
                n4a = valoractual;
            }
            var n5a = Number(n1a) + Number(n2a) + Number(n4a);
            this.form.controls['iddiab'].setValue(n5a);
            var creat = 'Actualiza';
            var options = {
                operacion: 'ponenota2',
                n1: n1a,
                n2: n2a,
                n3: n3a,
                n4: n4a,
                n5: n5a,
                bitacora: { idempresa: this.idempresa, idafiliado: '', email: this.username, permiso: creat, accion: creat + ' asigna nota examen de bimestre ' }
            };
            if (options) {
                this.regService.createReg2b(event.currentTarget.id, options, 'asignaubicacions').then(function (result) {
                    _this.pideregistros();
                }, function (err) {
                    _this.msj.showError3('Mensaje', err.error);
                });
            }
        }
    };
    DocenteNotas2Page.prototype.dapermisos = function (data, opcion) {
        var re;
        for (var i = 0; i < data.length; i++) {
            if (data[i].modulo == opcion) {
                re = data[i].permisos;
                break;
            }
        }
        //DD/MM/YYYY hh:mm A
        return re;
    };
    DocenteNotas2Page.prototype.dapermisos_visible = function (opcion) {
        var re = false;
        if (this.jsonObject2) {
            for (var i = 0; i < this.jsonObject2.length; i++) {
                if (this.jsonObject2[i].modulo == opcion) {
                    re = !this.jsonObject2[i].permisos.ingreso;
                    break;
                }
            }
        }
        //DD/MM/YYYY hh:mm A
        return re;
    };
    DocenteNotas2Page.prototype.cerraracta2 = function () {
        var _this = this;
        var testa = '';
        var msg = '';
        if (this.testado == 'Preliminar') {
            testa = 'Grabación';
            msg = '¿Esta seguro de regresar el listado al docente ?';
        }
        if (this.testado == 'Final') {
            testa = 'Preliminar';
            msg = '¿Esta seguro de regresar el listado a preliminar ?';
        }
        var alert = this.alertCtrl.create({ title: msg,
            buttons: [
                { text: 'Si',
                    handler: function () {
                        var self = _this;
                        self.loading = true;
                        var cad = '';
                        if (_this.tipoxxx == '2') {
                            cad = 'todos100a' + '/' + _this.navParams.data.record._id + '/personasprofe' + _this.tipoxxx + '/' + '1'
                                + '/' + '4' + '/' + '3' + '/' + '2°' + testa;
                        }
                        else {
                            cad = 'todos100' + '/' + _this.navParams.data.ididioma + '/personasprofe/' + _this.navParams.data.record.idedificio.id
                                + '/' + _this.navParams.data.record.idsalon.id + '/' + _this.navParams.data.record.iddia + '/' + _this.navParams.data.record.idhora + '°' + testa;
                        }
                        _this.regService.getReg(cad, 'asignaubicacions').then(function (data) {
                            // this.msj.showError3('Actualización con exito, Estado Acta: '+testa,'');
                            //regresar al anterior
                            //  this.navCtrl.goToRoot;
                            _this.navCtrl.popToRoot();
                            self.loading = false;
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
    DocenteNotas2Page.prototype.cerraracta4 = function (op) {
        this.navCtrl.popToRoot();
    };
    DocenteNotas2Page.prototype.cerraractaitem = function (item) {
        var _this = this;
        var testa = '';
        var msg = '';
        if (this.testado == 'Grabación') {
            testa = 'Preliminar';
            msg = '¿Esta seguro de trasladar el listado acontrol academico estado preliminar ?';
        }
        if (this.testado == 'Preliminar') {
            testa = 'Final';
            msg = '¿Esta seguro de Cerrar el listado ?';
        }
        if (this.testado == 'Final') {
            testa = 'Final';
            msg = '¿Esta seguro de Cerrar el listado ?';
        }
        var alert = this.alertCtrl.create({ title: msg,
            buttons: [
                { text: 'Si',
                    handler: function () {
                        var self = _this;
                        self.loading = true;
                        var cad = '';
                        if (_this.tipoxxx == '2') {
                            cad = 'todos100aitem' + '/' + item._id + '/personasprofe' + _this.tipoxxx + '/' + '1'
                                + '/' + '4' + '/' + '3' + '/' + '2°' + testa;
                        }
                        else {
                            cad = 'todos100item' + '/' + item._id + '/personasprofe/' + _this.navParams.data.record.idedificio.id
                                + '/' + _this.navParams.data.record.idsalon.id + '/' + _this.navParams.data.record.iddia + '/' + _this.navParams.data.record.idhora + '°' + testa;
                        }
                        _this.regService.getReg(cad, 'asignaubicacions').then(function (data) {
                            // this.msj.showError3('Actualización con exito, Estado Acta: '+testa,'');
                            //regresar al anterior
                            //  this.navCtrl.goToRoot;
                            _this.navCtrl.popToRoot();
                            self.loading = false;
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
    DocenteNotas2Page.prototype.cerraracta = function () {
        var _this = this;
        var testa = '';
        var msg = '';
        if (this.testado == 'Grabación') {
            testa = 'Preliminar';
            msg = '¿Esta seguro de trasladar el listado acontrol academico estado preliminar ?';
        }
        if (this.testado == 'Preliminar') {
            testa = 'Final';
            msg = '¿Esta seguro de Cerrar el listado ?';
        }
        if (this.testado == 'Final') {
            testa = 'Final';
            msg = '¿Esta seguro de Cerrar el listado ?';
        }
        var alert = this.alertCtrl.create({ title: msg,
            buttons: [
                { text: 'Si',
                    handler: function () {
                        var self = _this;
                        self.loading = true;
                        var cad = '';
                        if (_this.tipoxxx == '2') {
                            cad = 'todos100a' + '/' + _this.navParams.data.record._id + '/personasprofe' + _this.tipoxxx + '/' + '1'
                                + '/' + '4' + '/' + '3' + '/' + '2°' + testa;
                        }
                        else {
                            cad = 'todos100' + '/' + _this.navParams.data.ididioma + '/personasprofe/' + _this.navParams.data.record.idedificio.id
                                + '/' + _this.navParams.data.record.idsalon.id + '/' + _this.navParams.data.record.iddia + '/' + _this.navParams.data.record.idhora + '°' + testa;
                        }
                        _this.regService.getReg(cad, 'asignaubicacions').then(function (data) {
                            // this.msj.showError3('Actualización con exito, Estado Acta: '+testa,'');
                            //regresar al anterior
                            //  this.navCtrl.goToRoot;
                            _this.navCtrl.popToRoot();
                            self.loading = false;
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
    DocenteNotas2Page.prototype.excel = function (op) {
        this.regService.abrelinkinterno('asignaubicacions/todos1000excel' + '/' + this.navParams.data.record._id + '/personasprofe' + this.tipoxxx + '/' + '1'
            + '/' + '4' + '/' + '3' + '/' + '2');
    };
    DocenteNotas2Page.prototype.generapdf2 = function (op) {
        this.Pdfx.dacalusacubicacion2a(op, this.items, this.navParams.data.idioman, this.navParams.data.record.idedificio.nombre, this.navParams.data.record.idsalon.nombre, this.navParams.data.record.iddia.substr(0, 10), this.navParams.data.record.idhora, this.navParams.data.record.profesor, this.navParams.data.record.unidad, this.navParams.data.record.horario);
    };
    DocenteNotas2Page.prototype.generapdf = function (op) {
        if (this.tipoxxx == '2') {
            this.Pdfx.dacalusacubicacion2(op, this.items, this.navParams.data.idioman, this.navParams.data.record.idedificio.nombre, this.navParams.data.record.idsalon.nombre, this.navParams.data.record.iddia.substr(0, 10), this.navParams.data.record.idhora, this.navParams.data.record.profesor, this.navParams.data.record.unidad, this.navParams.data.record.horario);
        }
        else {
            this.Pdfx.dacalusacubicacion(op, this.items, this.navParams.data.idioman, this.navParams.data.record.idedificio.nombre, this.navParams.data.record.idsalon.nombre, this.navParams.data.record.iddia.substr(0, 10), this.navParams.data.record.idhora, this.items[0].idprofesornombre, this.navParams.data.record.idtipounidad.nombre, '');
        }
    };
    DocenteNotas2Page.prototype.pideregistros = function () {
        var _this = this;
        var self = this;
        self.loading = true;
        var cad = '';
        if (this.tipoxxx == '2') {
            cad = 'todos1000' + '/' + this.navParams.data.record._id + '/personasprofe' + this.tipoxxx + '/' + '1'
                + '/' + '4' + '/' + '3' + '/' + '2';
        }
        else {
            cad = 'todos' + '/' + this.navParams.data.ididioma + '/personasprofe/' + this.navParams.data.record.idedificio.id
                + '/' + this.navParams.data.record.idsalon.id + '/' + this.navParams.data.record.iddia + '/' + this.navParams.data.record.idhora;
        }
        this.regService.getReg(cad, 'asignaubicacions').then(function (data) {
            _this.items = data;
            _this.items2 = data;
            self.loading = false;
        }, function (err) {
            _this.msj.showError3('Error', err.error);
        });
    };
    DocenteNotas2Page.prototype.ionViewDidLoad = function () {
        this.rolxx = this.navParams.data.rolxx;
        this.idsuscriptor = this.navParams.data.idsuscriptor;
        this.ididioma = this.navParams.data.ididioma;
        this.estadoacta = this.navParams.data.record.estadoacta;
        if ((this.estadoacta !== 'Final') && (this.estadoacta !== 'Preliminar')) {
            this.pnota = false;
        }
        else {
            this.pnota = true;
        }
        this.pideregistros();
    };
    DocenteNotas2Page.prototype.loadMore = function (ev) {
        this.gLimit += 50;
        setTimeout(function () { return ev.complete(); }, 1000);
    };
    DocenteNotas2Page.prototype.salonRecord = function (item, no) {
        var _this = this;
        if (this.tipoxxx == '2') {
            var addModal = this._MODAL.create('Asignacioncalusac102aCreatePage', { record: item, tipo: item.tipoa, datax: item, op: item.tipoa }, { showBackdrop: true, enableBackdropDismiss: false });
            addModal.onDidDismiss(function (data) {
                if (data) {
                    _this.pideregistros();
                }
            });
            addModal.present();
        }
        else {
            var addModal = this._MODAL.create('Asignacioncalusac102CreatePage', { record: item, tipo: item.tipoa, datax: item, op: item.tipoa }, { showBackdrop: true, enableBackdropDismiss: false });
            addModal.onDidDismiss(function (data) {
                if (data) {
                    _this.pideregistros();
                }
            });
            addModal.present();
        }
    };
    DocenteNotas2Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-docente-notas2',template:/*ion-inline-start:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\CALUSAC\UBICACIONES\docente-notas2\docente-notas2.html"*/'<ion-header no-border class="opaque">\n    <ion-navbar  no-border-bottom>\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n          </button>\n          <ion-title>\n    {{titlexx}}\n    </ion-title>\n    <ion-buttons end>\n\n\n\n\n\n\n      <button title="Trasladar Listado 1" *ngIf="estadoacta === \'Grabación\'  && rolxx===0"  (click)="cerraracta(\'Acta revisada\')" icon-only ion-button padding-right>\n        <ion-icon name="play"></ion-icon>\n      </button>\n\n\n      <button title="Trasladar Listado2" *ngIf="estadoacta === \'Preliminar\'  && rolxx===0" [disabled]=\'true\'  (click)="cerraracta(\'Acta revisada\')" icon-only ion-button padding-right>\n        <ion-icon name="play"></ion-icon>\n      </button>\n\n      <!--\n      <button title="Trasladar Listado3" *ngIf="estadoacta === \'Final\'  && rolxx===0" [disabled]=\'true\'  (click)="cerraracta(\'Acta revisada\')" icon-only ion-button padding-right>\n        <ion-icon name="play"></ion-icon>\n      </button>\n-->\n\n      <button title="Trasladar Listado4" *ngIf="estadoacta === \'Grabación\'  && rolxx===1" [disabled]=\'true\'   (click)="cerraracta(\'Acta revisada\')" icon-only ion-button padding-right>\n        <ion-icon name="play"></ion-icon>\n      </button>\n\n\n      <button title="Regresar Listado docente " *ngIf="estadoacta === \'Preliminar\'  && rolxx===1"   (click)="cerraracta2(\'Acta revisada\')" icon-only ion-button padding-right>\n        <ion-icon name="skip-backward"></ion-icon>\n      </button>\n\n\n      <button title="Trasladar Listado5" *ngIf="estadoacta === \'Preliminar\'  && rolxx===1" (click)="cerraracta(\'Acta revisada\')" icon-only ion-button padding-right>\n        <ion-icon name="play"></ion-icon>\n      </button>\n\n      <button title="Trasladar Listado6" *ngIf="estadoacta === \'Final\'  && rolxx===1" [disabled]=\'true\'  (click)="cerraracta(\'Acta revisada\')" icon-only ion-button padding-right>\n        <ion-icon name="play"></ion-icon>\n      </button>\n\n\n\n\n        <button  title="Asignados bimestre" *ngIf="rolxx===1"  (click)="generapdf(1)" icon-only ion-button padding-right>\n            <ion-icon name="book"></ion-icon>\n          </button>\n\n        <button title="Asignados bimestre"  *ngIf="rolxx===0"  (click)="generapdf(0)" icon-only ion-button padding-right>\n          <ion-icon name="book"></ion-icon>\n        </button>\n\n\n        <button title="Asignados datos generales"   *ngIf="rolxx===1"  (click)="generapdf2(1)" icon-only ion-button padding-right>\n          <ion-icon name="folder"></ion-icon>\n        </button>\n\n      <button title="Asignados datos generales" *ngIf="rolxx===0"  (click)="generapdf2(0)" icon-only ion-button padding-right>\n        <ion-icon name="folder"></ion-icon>\n      </button>\n\n\n\n\n\n\n    <button title="excel Asignados datos generales"   *ngIf="rolxx===1"  (click)="excel(1)" icon-only ion-button padding-right>\n      <ion-icon name="apps"></ion-icon>\n    </button>\n\n  <button title="excel Asignados datos generales" *ngIf="rolxx===0"  (click)="excel(0)" icon-only ion-button padding-right>\n    <ion-icon name="apps"></ion-icon>\n  </button>\n\n\n        <button  (click)="pideregistros()" icon-only ion-button padding-right>\n            <ion-icon name="refresh"></ion-icon>\n          </button>\n      </ion-buttons>\n  </ion-navbar>\n  <ion-toolbar no-border-top>\n      <ion-searchbar   debounce="2000" (ionCancel)="clearSearchg($event)" [(ngModel)]="gSearchQuery" placeholder="{{ \'NO2_REGISTROS\' | translate }}{{items.length}}]">\n        </ion-searchbar>\n    </ion-toolbar>\n\n  </ion-header>\n\n  <ion-content  fullscreen>\n\n\n    <ul class="timeline">\n      <li *ngIf=" estadoacta === \'Grabación\'" class="active">Grabación</li>\n      <li *ngIf=" estadoacta !== \'Grabación\'" >Grabación</li>\n\n      <li *ngIf=" estadoacta === \'Preliminar\'" class="active" >Preliminar</li>\n      <li *ngIf=" estadoacta !== \'Preliminar\'"  >Preliminar</li>\n\n      <li *ngIf=" estadoacta === \'Final\'" class="active"  >Final</li>\n      <li *ngIf=" estadoacta !== \'Final\'"   >Final</li>\n\n    </ul>\n\n    <ion-item-divider >\n      <ion-label center>\n        Estado acta: {{estadoacta}}\n      </ion-label>\n    </ion-item-divider>\n\n\n    <form     [formGroup]="form"   >\n\n      <ion-grid>\n\n        <ion-row>\n          <ion-col ion-text-justify>\n            Carne CALUSAC\n           </ion-col >\n           <ion-col ion-text-justify>\n            Nombre\n           </ion-col >\n          <ion-col ion-text-justify>\n           Oral\n          </ion-col >\n          <ion-col ion-text-justify>\n            Escrita\n          </ion-col>\n          <ion-col ion-text-justify>\n           Zona\n          </ion-col>\n          <ion-col ion-text-justify>\n            Exa. Final\n           </ion-col>\n          <ion-col ion-text-justify>\n            Nota Final\n          </ion-col>\n            <ion-col ion-text-justify>\n            Cerrar Nota\n          </ion-col>\n\n        </ion-row>\n        <ion-row  *ngFor="let item of items">\n          <ion-col>\n            {{item.carnecalusac}}\n\n          </ion-col>\n          <ion-col>\n            {{item.nombre}}\n          </ion-col>\n          <ion-col>\n            <ion-input min="0" max="25"  value="{{item.n1}}"  id="{{item._id}}" (change)=\'onChangeTime($event.target,$event,1,item)\'\n            type="Number" disabled="{{pnota}}"  [formControl]="form.controls[\'iddia\']"\n              ></ion-input>\n\n          </ion-col>\n          <ion-col >\n            <ion-input\n            type="Number"  min="0" max="15" value="{{item.n2}}"  id="{{item._id}}" (change)=\'onChangeTime($event.target,$event,2,item)\'\n           [formControl]="form.controls[\'idhora\']" disabled="{{pnota}}"\n           center></ion-input>\n          </ion-col>\n          <ion-col >\n            <ion-input  value="{{item.n3}}"\n           [disabled]=\'true\'\n            type="Number"   [formControl]="form.controls[\'iddiaa\']"\n              ></ion-input>\n          </ion-col>\n          <ion-col >\n            <ion-input\n            type="Number"  min="0" max="50" id="{{item._id}}" (change)=\'onChangeTime($event.target,$event,3,item)\'\n            value="item.n4" value="{{item.n4}}" disabled="{{pnota}}"   [formControl]="form.controls[\'idhoraf\']"\n            text-center></ion-input>\n          </ion-col>\n\n          <ion-col >\n            <ion-input  value="{{item.n5}}" [disabled]=\'true\'\n\n            type="Number"   [formControl]="form.controls[\'iddiab\']"\n              ></ion-input>\n          </ion-col>\n\n          <ion-col >\n            <button title="Cerrar Nota" *ngIf="estadoacta === \'Preliminar\'  "   (click)="cerraractaitem(item)" icon-only ion-button padding-right>\n              <ion-icon name="play"></ion-icon>\n            </button>\n\n          </ion-col>\n\n        </ion-row>\n      </ion-grid>\n\n\n    </form>\n\n\n    <ion-infinite-scroll (ionInfinite)="loadMore($event)">\n       <ion-infinite-scroll-content></ion-infinite-scroll-content>\n     </ion-infinite-scroll>\n\n\n\n  </ion-content>\n'/*ion-inline-end:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\CALUSAC\UBICACIONES\docente-notas2\docente-notas2.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_6__providers_pdf_pdfx__["a" /* pdfx */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__providers__["d" /* NotificationProvider */], __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers__["a" /* Auth */]])
    ], DocenteNotas2Page);
    return DocenteNotas2Page;
}());

//# sourceMappingURL=docente-notas2.js.map

/***/ }),

/***/ 945:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocenteNotas2PageModule", function() { return DocenteNotas2PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__docente_notas2__ = __webpack_require__(1385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pipes_pipes_module__ = __webpack_require__(445);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var DocenteNotas2PageModule = /** @class */ (function () {
    function DocenteNotas2PageModule() {
    }
    DocenteNotas2PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__docente_notas2__["a" /* DocenteNotas2Page */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__docente_notas2__["a" /* DocenteNotas2Page */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild(),
                __WEBPACK_IMPORTED_MODULE_4__pipes_pipes_module__["a" /* PipesModule */]
            ],
        })
    ], DocenteNotas2PageModule);
    return DocenteNotas2PageModule;
}());

//# sourceMappingURL=docente-notas2.module.js.map

/***/ })

});
//# sourceMappingURL=237.js.map