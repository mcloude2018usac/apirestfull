webpackJsonp([236],{

/***/ 1386:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DocenteNotas2uPage; });
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







var DocenteNotas2uPage = /** @class */ (function () {
    function DocenteNotas2uPage(loadingCtrl, _FB, Pdfx, _MODAL, modalCtrl, actionSheetCtrl, storage, alertCtrl, msj, translateService, navCtrl, navParams, regService) {
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
        this.idiomat = this.navParams.data.idiomat;
        this.ttipo = this.navParams.data.ttipo;
        this.titlexx = this.navParams.data.titlexx;
        this.sedet = this.navParams.data.sede;
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
        });
        // jsonObject will contain a valid JavaScript object
        if (someJsonString != '') {
            this.jsonObject2 = JSON.parse(someJsonString);
        }
    }
    DocenteNotas2uPage.prototype.clearSearchg = function () {
        this.gSearchQuery = '';
    };
    DocenteNotas2uPage.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get('username').then(function (value) {
            _this.username = value;
        });
    };
    DocenteNotas2uPage.prototype.manageGallery = function (item) {
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
    DocenteNotas2uPage.prototype.dapermisos2 = function (data, opcion) {
        var re = '';
        for (var i = 0; i < data.length; i++) {
            if (data[i].modulo == opcion) {
                re = data[i].permisos.ingreso + ',' + data[i].permisos.consulta + ',' + data[i].permisos.elimina + ',' + data[i].permisos.creacion + ',' + data[i].permisos.actualiza + ',' + data[i].permisos.filtro + ',' + data[i].permisos.reporte;
                break;
            }
        }
        return re;
    };
    DocenteNotas2uPage.prototype.onChangeTime = function (data, event) {
        console.log("data: " + data.value + ' id ' + event.currentTarget.id);
    };
    DocenteNotas2uPage.prototype.dapermisos = function (data, opcion) {
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
    DocenteNotas2uPage.prototype.dapermisos_visible = function (opcion) {
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
    DocenteNotas2uPage.prototype.cerraracta = function () {
        var _this = this;
        var testa = '';
        if (this.testado == 'Grabación')
            testa = 'Preliminar';
        if (this.testado == 'Preliminar')
            testa = 'Final';
        if (this.testado == 'Final')
            testa = 'Final';
        var alert = this.alertCtrl.create({ title: '¿Esta seguro de trasladar el acta a estado: ' + testa + '?',
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
                            if (_this.navParams.data.record.ididioma._id) {
                                cad = 'todos100' + '/' + _this.navParams.data.record.ididioma._id + '/' + _this.navParams.data.record.idprofesor + '/' + _this.navParams.data.record.idedificio.id
                                    + '/' + _this.navParams.data.record.idsalon.id + '/' + _this.navParams.data.record.iddia + '/' + _this.navParams.data.record.idhora + '°' + testa + '°' + _this.navParams.data.record._id + '°' + _this.navParams.data.record.codigocurso;
                            }
                            else {
                                cad = 'todos100' + '/' + _this.navParams.data.record.ididioma + '/' + _this.navParams.data.record.idprofesor + '/' + _this.navParams.data.record.idedificio.id
                                    + '/' + _this.navParams.data.record.idsalon.id + '/' + _this.navParams.data.record.iddia + '/' + _this.navParams.data.record.idhora + '°' + testa + '°' + _this.navParams.data.record._id + '°' + _this.navParams.data.record.codigocurso;
                            }
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
    DocenteNotas2uPage.prototype.cerraracta2 = function () {
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
                            if (_this.navParams.data.record.ididioma._id) {
                                cad = 'todos100' + '/' + _this.navParams.data.record.ididioma._id + '/' + _this.navParams.data.record.idprofesor + '/' + _this.navParams.data.record.idedificio.id
                                    + '/' + _this.navParams.data.record.idsalon.id + '/' + _this.navParams.data.record.iddia + '/' + _this.navParams.data.record.idhora + '°' + testa + '°' + _this.navParams.data.record._id + '°' + _this.navParams.data.record.codigocurso;
                            }
                            else {
                                cad = 'todos100' + '/' + _this.navParams.data.record.ididioma + '/' + _this.navParams.data.record.idprofesor + '/' + _this.navParams.data.record.idedificio.id
                                    + '/' + _this.navParams.data.record.idsalon.id + '/' + _this.navParams.data.record.iddia + '/' + _this.navParams.data.record.idhora + '°' + testa + '°' + _this.navParams.data.record._id + '°' + _this.navParams.data.record.codigocurso;
                            }
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
    DocenteNotas2uPage.prototype.generapdf = function (op) {
        if (this.rolxx === 0) {
            if (op === 1) {
                this.Pdfx.dacalusacubicacion1(op, this.items, this.idiomat, this.navParams.data.record.idedificio.nombre, this.navParams.data.record.idsalon.nombre, this.navParams.data.record.iddia.substr(0, 10), this.navParams.data.record.idhora, this.items[0].idprofesornombre, this.sedet, '');
            }
            else {
                this.Pdfx.dacalusacubicacion(op, this.items, this.idiomat, this.navParams.data.record.idedificio.nombre, this.navParams.data.record.idsalon.nombre, this.navParams.data.record.iddia.substr(0, 10), this.navParams.data.record.idhora, this.items[0].idprofesornombre, this.sedet, '');
            }
        }
        else {
            if (op === 1) {
                this.Pdfx.dacalusacubicacion1(op, this.items, this.idiomat, this.navParams.data.record.idedificio.nombre, this.navParams.data.record.idsalon.nombre, this.navParams.data.record.iddia.substr(0, 10), this.navParams.data.record.idhora, this.items[0].idprofesornombre, this.sedet, 'Tipo:' + this.ttipo);
            }
            else {
                this.Pdfx.dacalusacubicacion3(op, this.items, this.idiomat, this.navParams.data.record.idedificio.nombre, this.navParams.data.record.idsalon.nombre, this.navParams.data.record.iddia.substr(0, 10), this.navParams.data.record.idhora, this.items[0].idprofesornombre, this.sedet, this.ttipo, this.ttipo);
            }
        }
    };
    DocenteNotas2uPage.prototype.pideregistros = function () {
        var _this = this;
        var self = this;
        self.loading = true;
        var cad = '';
        if (this.tipoxxx == '2') {
            cad = 'todos1000' + '/' + this.navParams.data.record._id + '/personasprofe' + this.tipoxxx + '/' + '1'
                + '/' + '4' + '/' + '3' + '/' + '2';
        }
        else {
            if (this.navParams.data.record.ididioma._id) {
                cad = 'todos' + '/' + this.navParams.data.record.ididioma._id + '/' + this.navParams.data.record.idprofesor._id + '/' + this.navParams.data.record.idedificio.id
                    + '/' + this.navParams.data.record.idsalon.id + '/' + this.navParams.data.record.iddia + '/' + this.navParams.data.record.idhora;
            }
            else {
                cad = 'todos' + '/' + this.navParams.data.record.ididioma + '/' + this.navParams.data.record.idprofesor + '/' + this.navParams.data.record.idedificio.id
                    + '/' + this.navParams.data.record.idsalon.id + '/' + this.navParams.data.record.iddia + '/' + this.navParams.data.record.idhora;
            }
        }
        this.regService.getReg(cad, 'asignaubicacions').then(function (data) {
            _this.items = data;
            _this.items2 = data;
            self.loading = false;
        }, function (err) {
            _this.msj.showError3('Error', err.error);
        });
    };
    DocenteNotas2uPage.prototype.ionViewDidLoad = function () {
        this.rolxx = this.navParams.data.rolxx;
        this.idsuscriptor = this.navParams.data.idsuscriptor;
        this.ididioma = this.navParams.data.ididioma;
        this.estadoacta = this.navParams.data.record.estadoacta;
        this.pideregistros();
    };
    DocenteNotas2uPage.prototype.loadMore = function (ev) {
        this.gLimit += 50;
        setTimeout(function () { return ev.complete(); }, 1000);
    };
    DocenteNotas2uPage.prototype.salonRecord = function (item, no) {
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
    DocenteNotas2uPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-docente-notas2u',template:/*ion-inline-start:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\CALUSAC\UBICACIONES\docente-notas2u\docente-notas2u.html"*/'<ion-header no-border class="opaque">\n    <ion-navbar  no-border-bottom>\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n          </button>\n          <ion-title>\n    {{titlexx}}\n    </ion-title>\n    <ion-buttons end>\n\n\n      <button title="Trasladar Acta" *ngIf="estadoacta === \'Grabación\'  && rolxx===0"  (click)="cerraracta(\'Acta revisada\')" icon-only ion-button padding-right>\n        <ion-icon name="play"></ion-icon>\n      </button>\n\n      <button title="Trasladar Acta" *ngIf="estadoacta === \'Preliminar\'  && rolxx===0" [disabled]=\'true\'  (click)="cerraracta2(\'Acta revisada\')" icon-only ion-button padding-right>\n        <ion-icon name="play"></ion-icon>\n      </button>\n\n      <button title="Trasladar Acta" *ngIf="estadoacta === \'Final\'  && rolxx===0" [disabled]=\'true\'  (click)="cerraracta(\'Acta revisada\')" icon-only ion-button padding-right>\n        <ion-icon name="play"></ion-icon>\n      </button>\n\n\n      <button title="Trasladar Acta" *ngIf="estadoacta === \'Grabación\'  && rolxx===1" [disabled]=\'true\'   (click)="cerraracta(\'Acta revisada\')" icon-only ion-button padding-right>\n        <ion-icon name="play"></ion-icon>\n      </button>\n\n      <button title="Trasladar Acta" *ngIf="estadoacta === \'Preliminar\'  && rolxx===1" (click)="cerraracta(\'Acta revisada\')" icon-only ion-button padding-right>\n        <ion-icon name="play"></ion-icon>\n      </button>\n\n      <button title="Trasladar Acta" *ngIf="estadoacta === \'Final\'  && rolxx===1" [disabled]=\'true\'  (click)="cerraracta(\'Acta revisada\')" icon-only ion-button padding-right>\n        <ion-icon name="play"></ion-icon>\n      </button>\n\n\n\n\n\n        <button title="Imprimir listado oficial control academico v1"   *ngIf="rolxx===1"  (click)="generapdf(2)" icon-only ion-button adding-right>\n          <ion-icon name="book"></ion-icon>\n        </button>\n\n        <button title="Imprimir listado oficial control academico v2" *ngIf="   rolxx===1"  (click)="generapdf(1)" icon-only ion-button padding-right>\n          <ion-icon name="folder"></ion-icon>\n        </button>\n\n        <button title="Imprimir listado oficial docente v1"  *ngIf="  rolxx===0"  (click)="generapdf(0)" icon-only ion-button padding-right>\n          <ion-icon name="book"></ion-icon>\n        </button>\n\n\n        <button title="Imprimir listado oficial docente v2"  *ngIf="  rolxx===0"  (click)="generapdf(1)" icon-only ion-button padding-right>\n          <ion-icon name="folder"></ion-icon>\n        </button>\n        <button  (click)="pideregistros()" icon-only ion-button padding-right>\n            <ion-icon name="refresh"></ion-icon>\n          </button>\n      </ion-buttons>\n  </ion-navbar>\n  <ion-toolbar no-border-top>\n      <ion-searchbar   debounce="2000" (ionCancel)="clearSearchg($event)" [(ngModel)]="gSearchQuery" placeholder="{{ \'NO2_REGISTROS\' | translate }}{{items.length}}]">\n        </ion-searchbar>\n    </ion-toolbar>\n\n  </ion-header>\n\n  <ion-content  fullscreen>\n\n\n    <ul class="timeline">\n      <li *ngIf=" estadoacta === \'Grabación\'" class="active">Grabación</li>\n      <li *ngIf=" estadoacta !== \'Grabación\'" >Grabación</li>\n\n      <li *ngIf=" estadoacta === \'Preliminar\'" class="active" >Preliminar</li>\n      <li *ngIf=" estadoacta !== \'Preliminar\'"  >Preliminar</li>\n\n      <li *ngIf=" estadoacta === \'Final\'" class="active"  >Final</li>\n      <li *ngIf=" estadoacta !== \'Final\'"   >Final</li>\n\n    </ul>\n\n    <ion-item-divider >\n      <ion-label center>\n        Estado acta: {{estadoacta}}\n      </ion-label>\n    </ion-item-divider>\n\n\n\n\n    <ion-list >\n\n\n       <ion-item    *ngFor="let item of items | search: gSearchQuery | LimitPipe: gLimit ;let i = index;" text-wrap>\n\n               <ion-card >\n                       <ion-item text-wrap>\n                        <h2>Idioma: {{idiomat}} </h2>\n                           <h2>Nombre: {{item.nombre}} </h2>\n                           <h2>Doc de identificación: {{item.identificador}} </h2>\n                           <h2 *ngIf="tipoxxx===\'1\'">Examen Oral: {{item.n1.nombre}} </h2>\n                           <h2 *ngIf="tipoxxx===\'1\'">Examen Escrito: {{item.n2.nombre}} </h2>\n                           <h2 *ngIf="tipoxxx===\'1\'">Examen Nivel Ubicado: {{item.n3.nombre}} </h2>\n\n                           <h2 *ngIf="tipoxxx===\'2\'">Zona Oral: {{item.n1}} </h2>\n                           <h2 *ngIf="tipoxxx===\'2\'">Zona Escrita: {{item.n2}} </h2>\n                           <h2 *ngIf="tipoxxx===\'2\'">zona: {{item.n3}} </h2>\n                           <h2 *ngIf="tipoxxx===\'2\'">Ex. Final: {{item.n4}} </h2>\n                           <h2 *ngIf="tipoxxx===\'2\'">Nota: {{item.n5}} </h2>\n\n                         </ion-item>\n                         <ion-row no-padding>\n\n\n\n                                   <ion-col text-center>\n                                       <button *ngIf=" item.estadoacta === \'Grabación\'  && rolxx===0" (click)="salonRecord(item,i)" ion-button clear small  icon-start>\n                                         <ion-icon name=\'apps\'></ion-icon>\n                                          Actualizar notas\n\n                                       </button>\n                                       <button *ngIf=" item.estadoacta === \'Preliminar\'  && rolxx===0" [disabled]=\'true\' (click)="salonRecord(item,i)" ion-button clear small  icon-start>\n                                        <ion-icon name=\'apps\'></ion-icon>\n                                         Actualizar notas\n\n                                      </button>\n                                      <button *ngIf=" item.estadoacta === \'Final\'  && rolxx===0" [disabled]=\'true\' (click)="salonRecord(item,i)" ion-button clear small  icon-start>\n                                        <ion-icon name=\'apps\'></ion-icon>\n                                         Actualizar notas\n\n                                      </button>\n\n\n                                      <button *ngIf=" rolxx===1"  [disabled]=\'true\' (click)="salonRecord(item,i)" ion-button clear small  icon-start>\n                                        <ion-icon name=\'apps\'></ion-icon>\n                                         Actualizar notas\n\n                                      </button>\n\n\n\n                                     </ion-col>\n\n\n                           </ion-row>\n\n                       </ion-card>\n\n\n\n\n     </ion-item>\n    </ion-list>\n\n\n\n\n\n    <ion-infinite-scroll (ionInfinite)="loadMore($event)">\n       <ion-infinite-scroll-content></ion-infinite-scroll-content>\n     </ion-infinite-scroll>\n\n\n\n  </ion-content>\n'/*ion-inline-end:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\CALUSAC\UBICACIONES\docente-notas2u\docente-notas2u.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_6__providers_pdf_pdfx__["a" /* pdfx */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__providers__["d" /* NotificationProvider */], __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers__["a" /* Auth */]])
    ], DocenteNotas2uPage);
    return DocenteNotas2uPage;
}());

//# sourceMappingURL=docente-notas2u.js.map

/***/ }),

/***/ 946:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocenteNotas2uPageModule", function() { return DocenteNotas2uPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__docente_notas2u__ = __webpack_require__(1386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pipes_pipes_module__ = __webpack_require__(445);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var DocenteNotas2uPageModule = /** @class */ (function () {
    function DocenteNotas2uPageModule() {
    }
    DocenteNotas2uPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__docente_notas2u__["a" /* DocenteNotas2uPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__docente_notas2u__["a" /* DocenteNotas2uPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild(),
                __WEBPACK_IMPORTED_MODULE_4__pipes_pipes_module__["a" /* PipesModule */]
            ],
        })
    ], DocenteNotas2uPageModule);
    return DocenteNotas2uPageModule;
}());

//# sourceMappingURL=docente-notas2u.module.js.map

/***/ })

});
//# sourceMappingURL=236.js.map