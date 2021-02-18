webpackJsonp([212],{

/***/ 1377:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SolprestamoOpe2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_pdf_pdfx__ = __webpack_require__(447);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_image_image__ = __webpack_require__(448);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2_storage__ = __webpack_require__(454);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ionic_img_viewer__ = __webpack_require__(450);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var SolprestamoOpe2Page = /** @class */ (function () {
    //private barcodeScanner:BarcodeScanner,
    function SolprestamoOpe2Page(afStorage, _IMAGE, viewCtrl, imageViewerCtrl, loadingCtrl, Pdfx, alertCtrl, storage, msj, translateService, navCtrl, navParams, regService) {
        var _this = this;
        this.afStorage = afStorage;
        this._IMAGE = _IMAGE;
        this.viewCtrl = viewCtrl;
        this.loadingCtrl = loadingCtrl;
        this.Pdfx = Pdfx;
        this.alertCtrl = alertCtrl;
        this.storage = storage;
        this.msj = msj;
        this.translateService = translateService;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.regService = regService;
        this.loading = true;
        this.items = [];
        this.items2 = [];
        this.tiposus = [];
        this.siprueba = true;
        this.descripcionobj = '';
        this.generated = '';
        this.sololeer = true;
        this.color1a = 'primary';
        this.color1b = 'primary';
        this.color1c = 'primary';
        this.color2a = 'primary';
        this.color2b = 'primary';
        this.color2c = 'primary';
        this.color3a = 'primary';
        this.color3b = 'primary';
        this.color3c = 'primary';
        this.color4a = 'primary';
        this.color4b = 'primary';
        this.color4c = 'primary';
        this.color5a = 'primary';
        this.color5b = 'primary';
        this.color5c = 'primary';
        this.color6a = 'primary';
        this.color6b = 'primary';
        this.color6c = 'primary';
        this.color7a = 'primary';
        this.color7b = 'primary';
        this.color7c = 'primary';
        this.color8a = 'primary';
        this.color8b = 'primary';
        this.color8c = 'primary';
        this.f3 = './assets/img/blanco.png';
        this.f4 = './assets/img/blanco.png';
        this.f8 = './assets/img/blanco.png';
        this.f3a = '';
        this.f4a = '';
        this.f8a = '';
        this.color9a = 'primary';
        this.color9b = 'primary';
        this.color9c = 'primary';
        this.sl1 = '0';
        this.sl2 = '0';
        this.sl3 = '0';
        this.sl4 = '0';
        this.sl5 = '0';
        this.sl6 = '0';
        this.sl7 = '0';
        this.sl8 = '0';
        this.sl9 = '0';
        this.isDisablednit = true;
        this.gLimit = 50;
        this.PageSegmet = 'foods';
        this.gSearchQuery = '';
        this.username = "";
        this.f1 = './assets/img/blanco.png';
        this.f2 = './assets/img/blanco.png';
        this.f5 = './assets/img/blanco.png';
        this.f6 = './assets/img/blanco.png';
        this.f7 = './assets/img/blanco.png';
        this.f9 = './assets/img/blanco.png';
        this.f10 = './assets/img/blanco.png';
        this.lop1 = '0';
        this.lop2 = '0';
        this.lop3 = '0';
        this.lop4 = '0';
        this.lop5 = '0';
        this.lop6 = '0';
        this.lop7 = '0';
        this.lop8 = '0';
        this.lop9 = '0';
        this.msg1 = '';
        this.msg2 = '';
        this.excludeTracks = [];
        this._imageViewerCtrl = imageViewerCtrl;
        this.translateService.get('APPX').subscribe(function (value) {
            _this.idempresa = value;
        });
    }
    SolprestamoOpe2Page.prototype.cancel = function () {
        this.viewCtrl.dismiss();
    };
    SolprestamoOpe2Page.prototype.presentImage = function (myImage) {
        var imageViewer = this._imageViewerCtrl.create(myImage);
        imageViewer.present();
    };
    SolprestamoOpe2Page.prototype.clearSearchg = function () {
        this.gSearchQuery = '';
    };
    SolprestamoOpe2Page.prototype.ngOnInit = function () {
        var _this = this;
        this.items[0] = this.navParams.data.record;
        this.f1 = this.navParams.data.record.requisito1;
        this.f2 = this.navParams.data.record.requisito2;
        this.f3 = this.navParams.data.record.requisito3;
        //  this.items=this.navParams.data.record
        var cad = this.navParams.data.record.ultrechazo;
        if (this.navParams.data.record.estado == 'Solicitando préstamo') {
            this.sololeer = false;
        }
        if (this.navParams.data.record.estado == 'ACTUALIZADAS') {
            this.sololeer = false;
        }
        var arr = cad.split('°');
        this.lop1 = arr[0];
        this.lop2 = arr[1];
        this.lop3 = arr[2];
        this.lop4 = arr[3];
        this.lop5 = arr[4];
        this.lop6 = arr[5];
        this.lop7 = arr[6];
        this.lop8 = arr[7];
        this.lop9 = arr[8];
        if (this.lop1 == 'undefined') {
            this.lop1 = '0';
        }
        if (this.lop2 == 'undefined') {
            this.lop2 = '0';
        }
        if (this.lop3 == 'undefined') {
            this.lop3 = '0';
        }
        if (this.lop4 == 'undefined') {
            this.lop4 = '0';
        }
        if (this.lop5 == 'undefined') {
            this.lop5 = '0';
        }
        if (this.lop6 == 'undefined') {
            this.lop6 = '0';
        }
        if (this.lop7 == 'undefined') {
            this.lop7 = '0';
        }
        if (this.lop8 == 'undefined') {
            this.lop8 = '0';
        }
        if (this.lop9 == 'undefined') {
            this.lop9 = '0';
        }
        if (this.lop1 !== '0')
            this.sl1 = 'Solicitud firmada por el trabajador solicitante';
        if (this.lop2 !== '0')
            this.sl2 = 'Fotocopia de DPI legible';
        if (this.lop3 !== '0')
            this.sl3 = 'Fotocopia del último voucher de sueldo del trabajador';
        if (this.lop4 !== '0')
            this.sl4 = 'Certificación de Relación Laboral extendida por la División de Administración de Recursos Humanos, donde conste el monto de indemnización estimada ';
        if (this.lop5 !== '0')
            this.sl5 = 'Fotocopia de recibo reciente de agua, luz o teléfono';
        if (this.lop6 !== '0')
            this.sl6 = 'Consentimiento para ser asegurado';
        if (this.lop7 !== '0')
            this.sl7 = 'Carta de consentimiento del deudor ';
        if (this.lop8 !== '0')
            this.sl8 = 'Los trabajadores que tienen contrato a término, deberán presentar constancia de recontratación';
        if (this.lop9 !== '0')
            this.sl9 = 'Presentar la proforma del equipo de cómputo a adquirir';
        this.descripcionobj = this.datexto(this.sl1) + '\n' + this.datexto(this.sl2) + '\n' + this.datexto(this.sl3) + '\n' + this.datexto(this.sl4) + '\n' + this.datexto(this.sl5) + '\n' + this.datexto(this.sl6) + '\n' + this.datexto(this.sl7) + '\n' + this.datexto(this.sl8) + '\n' + this.datexto(this.sl9);
        this.storage.get('username').then(function (value) {
            _this.username = value;
        });
        this.storage.get('tiposus').then(function (value) {
            _this.tiposus = value.split(',');
            _this.cuitt = _this.tiposus[2];
            _this.nov = _this.tiposus[5];
            _this.rol = _this.tiposus[6];
        });
    };
    SolprestamoOpe2Page.prototype.datexto = function (cad) {
        var re = cad;
        if (cad == 'undefined' || cad == '0') {
            re = '';
        }
        return re;
    };
    SolprestamoOpe2Page.prototype.ionViewDidLoad = function () {
        //    this.items=this.navParams.data.record
    };
    SolprestamoOpe2Page.prototype.loadMore = function (ev) {
        this.gLimit += 50;
        setTimeout(function () { return ev.complete(); }, 1000);
    };
    SolprestamoOpe2Page.prototype.objetar3b = function (op1, op2, op3) {
        //no valido
        switch (op3) {
            case 1:
                this.lop1 = '0';
                this.color1a = 'primary';
                this.color1b = 'primary';
                this.color1c = 'verdex';
                break;
            case 2:
                this.lop2 = '0';
                this.color2a = 'primary';
                this.color2b = 'primary';
                this.color2c = 'verdex';
                break;
            case 3:
                this.lop3 = '0';
                this.color3a = 'primary';
                this.color3b = 'primary';
                this.color3c = 'verdex';
                break;
            case 4:
                this.lop4 = '0';
                this.color4a = 'primary';
                this.color4b = 'primary';
                this.color4c = 'verdex';
                break;
            case 5:
                this.lop5 = '0';
                this.color5a = 'primary';
                this.color5b = 'primary';
                this.color5c = 'verdex';
                break;
            case 6:
                this.lop6 = '0';
                this.color6a = 'primary';
                this.color6b = 'primary';
                this.color6c = 'verdex';
                break;
            case 7:
                this.lop7 = '0';
                this.color7a = 'primary';
                this.color7b = 'primary';
                this.color7c = 'verdex';
                break;
            case 8:
                this.lop8 = '0';
                this.color8a = 'primary';
                this.color8b = 'primary';
                this.color8c = 'verdex';
                break;
            case 9:
                this.lop9 = '0';
                this.color9a = 'primary';
                this.color9b = 'primary';
                this.color9c = 'verdex';
                break;
            default:
                break;
        }
        this.descripcionobj = '';
        if (this.lop1 == '2')
            this.descripcionobj = this.descripcionobj + 'Solicitud firmada por el trabajador solicitante ' + 'IIlegíble' + '\n<br>\n';
        if (this.lop2 == '2')
            this.descripcionobj = this.descripcionobj + 'Fotocopia de DPI ' + 'IIlegíble' + '\n<br>\n';
        if (this.lop3 == '2')
            this.descripcionobj = this.descripcionobj + 'Fotocopia del último voucher de sueldo del trabajador ' + 'IIlegíble' + '\n<br>\n';
        if (this.lop4 == '2')
            this.descripcionobj = this.descripcionobj + 'Certificación de Relación Laboral extendida por la División de Administración de Recursos Humanos, donde conste el monto de indemnización estimada ' + 'IIlegíble' + ' \n<br>\n';
        if (this.lop5 == '2')
            this.descripcionobj = this.descripcionobj + 'Fotocopia de recibo reciente de agua, luz o teléfono ' + 'IIlegíble' + '\n<br>\n';
        if (this.lop6 == '2')
            this.descripcionobj = this.descripcionobj + 'Consentimiento para ser asegurado ' + 'IIlegíble' + '\n<br>\n';
        if (this.lop7 == '2')
            this.descripcionobj = this.descripcionobj + 'Carta de consentimiento del deudor ' + 'IIlegíble' + '\n<br>\n';
        if (this.lop8 == '2')
            this.descripcionobj = this.descripcionobj + 'Los trabajadores que tienen contrato a término, deberán presentar constancia de recontratación ' + 'IIlegíble' + '\n<br>\n';
        if (this.lop9 == '2')
            this.descripcionobj = this.descripcionobj + 'Presentar la proforma del equipo de cómputo a adquirir ' + 'IIlegíble' + '\n<br>\n';
        if (this.lop1 == '1')
            this.descripcionobj = this.descripcionobj + 'Solicitud firmada por el trabajador solicitante ' + 'No valido' + '\n<br>\n';
        if (this.lop2 == '1')
            this.descripcionobj = this.descripcionobj + 'Fotocopia de DPI ' + 'No valido' + '\n<br>\n';
        if (this.lop3 == '1')
            this.descripcionobj = this.descripcionobj + 'Fotocopia del último voucher de sueldo del trabajador ' + 'No valido' + '\n<br>\n';
        if (this.lop4 == '1')
            this.descripcionobj = this.descripcionobj + 'Certificación de Relación Laboral extendida por la División de Administración de Recursos Humanos, donde conste el monto de indemnización estimada ' + 'No valido' + ' \n<br>\n';
        if (this.lop5 == '1')
            this.descripcionobj = this.descripcionobj + 'Fotocopia de recibo reciente de agua, luz o teléfono ' + 'No valido' + '\n<br>\n';
        if (this.lop6 == '1')
            this.descripcionobj = this.descripcionobj + 'Consentimiento para ser asegurado ' + 'No valido' + '\n<br>\n';
        if (this.lop7 == '1')
            this.descripcionobj = this.descripcionobj + 'Carta de consentimiento del deudor ' + 'No valido' + '\n<br>\n';
        if (this.lop8 == '1')
            this.descripcionobj = this.descripcionobj + 'Los trabajadores que tienen contrato a término, deberán presentar constancia de recontratación ' + 'No valido' + '\n<br>\n';
        if (this.lop9 == '1')
            this.descripcionobj = this.descripcionobj + 'Presentar la proforma del equipo de cómputo a adquirir ' + 'No valido' + '\n<br>\n';
    };
    SolprestamoOpe2Page.prototype.objetar3a = function (op1, op2, op3) {
        //no valido
        switch (op3) {
            case 1:
                this.lop1 = '1';
                this.color1a = 'primary';
                this.color1b = 'verdex';
                this.color1c = 'primary';
                break;
            case 2:
                this.lop2 = '1';
                this.color2a = 'primary';
                this.color2b = 'verdex';
                this.color2c = 'primary';
                break;
            case 3:
                this.lop3 = '1';
                this.color3a = 'primary';
                this.color3b = 'verdex';
                this.color3c = 'primary';
                break;
            case 4:
                this.lop4 = '1';
                this.color4a = 'primary';
                this.color4b = 'verdex';
                this.color4c = 'primary';
                break;
            case 5:
                this.lop5 = '1';
                this.color5a = 'primary';
                this.color5b = 'verdex';
                this.color5c = 'primary';
                break;
            case 6:
                this.lop6 = '1';
                this.color6a = 'primary';
                this.color6b = 'verdex';
                this.color6c = 'primary';
                break;
            case 7:
                this.lop7 = '1';
                this.color7a = 'primary';
                this.color7b = 'verdex';
                this.color7c = 'primary';
                break;
            case 8:
                this.lop8 = '1';
                this.color8a = 'primary';
                this.color8b = 'verdex';
                this.color8c = 'primary';
                break;
            case 9:
                this.lop9 = '1';
                this.color9a = 'primary';
                this.color9b = 'verdex';
                this.color9c = 'primary';
                break;
            default:
                break;
        }
        this.descripcionobj = '';
        if (this.lop1 == '2')
            this.descripcionobj = this.descripcionobj + 'Solicitud firmada por el trabajador solicitante ' + 'IIlegíble' + '\n<br>\n';
        if (this.lop2 == '2')
            this.descripcionobj = this.descripcionobj + 'Fotocopia de DPI ' + 'IIlegíble' + '\n<br>\n';
        if (this.lop3 == '2')
            this.descripcionobj = this.descripcionobj + 'Fotocopia del último voucher de sueldo del trabajador ' + 'IIlegíble' + '\n<br>\n';
        if (this.lop4 == '2')
            this.descripcionobj = this.descripcionobj + 'Certificación de Relación Laboral extendida por la División de Administración de Recursos Humanos, donde conste el monto de indemnización estimada ' + 'IIlegíble' + ' \n<br>\n';
        if (this.lop5 == '2')
            this.descripcionobj = this.descripcionobj + 'Fotocopia de recibo reciente de agua, luz o teléfono ' + 'IIlegíble' + '\n<br>\n';
        if (this.lop6 == '2')
            this.descripcionobj = this.descripcionobj + 'Consentimiento para ser asegurado ' + 'IIlegíble' + '\n<br>\n';
        if (this.lop7 == '2')
            this.descripcionobj = this.descripcionobj + 'Carta de consentimiento del deudor ' + 'IIlegíble' + '\n<br>\n';
        if (this.lop8 == '2')
            this.descripcionobj = this.descripcionobj + 'Los trabajadores que tienen contrato a término, deberán presentar constancia de recontratación ' + 'IIlegíble' + '\n<br>\n';
        if (this.lop9 == '2')
            this.descripcionobj = this.descripcionobj + 'Presentar la proforma del equipo de cómputo a adquirir ' + 'IIlegíble' + '\n<br>\n';
        if (this.lop1 == '1')
            this.descripcionobj = this.descripcionobj + 'Solicitud firmada por el trabajador solicitante ' + 'No valido' + '\n<br>\n';
        if (this.lop2 == '1')
            this.descripcionobj = this.descripcionobj + 'Fotocopia de DPI ' + 'No valido' + '\n<br>\n';
        if (this.lop3 == '1')
            this.descripcionobj = this.descripcionobj + 'Fotocopia del último voucher de sueldo del trabajador ' + 'No valido' + '\n<br>\n';
        if (this.lop4 == '1')
            this.descripcionobj = this.descripcionobj + 'Certificación de Relación Laboral extendida por la División de Administración de Recursos Humanos, donde conste el monto de indemnización estimada ' + 'No valido' + ' \n<br>\n';
        if (this.lop5 == '1')
            this.descripcionobj = this.descripcionobj + 'Fotocopia de recibo reciente de agua, luz o teléfono ' + 'No valido' + '\n<br>\n';
        if (this.lop6 == '1')
            this.descripcionobj = this.descripcionobj + 'Consentimiento para ser asegurado ' + 'No valido' + '\n<br>\n';
        if (this.lop7 == '1')
            this.descripcionobj = this.descripcionobj + 'Carta de consentimiento del deudor ' + 'No valido' + '\n<br>\n';
        if (this.lop8 == '1')
            this.descripcionobj = this.descripcionobj + 'Los trabajadores que tienen contrato a término, deberán presentar constancia de recontratación ' + 'No valido' + '\n<br>\n';
        if (this.lop9 == '1')
            this.descripcionobj = this.descripcionobj + 'Presentar la proforma del equipo de cómputo a adquirir ' + 'No valido' + '\n<br>\n';
    };
    SolprestamoOpe2Page.prototype.objetar3 = function (op1, op2, op3) {
        //Ilegible
        switch (op3) {
            case 1:
                this.lop1 = '2';
                this.color1a = 'verdex';
                this.color1b = 'primary';
                this.color1c = 'primary';
                break;
            case 2:
                this.lop2 = '2';
                this.color2a = 'verdex';
                this.color2b = 'primary';
                this.color2c = 'primary';
                break;
            case 3:
                this.lop3 = '2';
                this.color3a = 'verdex';
                this.color3b = 'primary';
                this.color3c = 'primary';
                break;
            case 4:
                this.lop4 = '2';
                this.color4a = 'verdex';
                this.color4b = 'primary';
                this.color4c = 'primary';
                break;
            case 5:
                this.lop5 = '2';
                this.color5a = 'verdex';
                this.color5b = 'primary';
                this.color5c = 'primary';
                break;
            case 6:
                this.lop6 = '2';
                this.color6a = 'verdex';
                this.color6b = 'primary';
                this.color6c = 'primary';
                break;
            case 7:
                this.lop7 = '2';
                this.color7a = 'verdex';
                this.color7b = 'primary';
                this.color7c = 'primary';
                break;
            case 8:
                this.lop8 = '2';
                this.color8a = 'verdex';
                this.color8b = 'primary';
                this.color8c = 'primary';
                break;
            case 9:
                this.lop9 = '2';
                this.color9a = 'verdex';
                this.color9b = 'primary';
                this.color9c = 'primary';
                break;
            default:
                break;
        }
        this.descripcionobj = '';
        if (this.lop1 == '2')
            this.descripcionobj = this.descripcionobj + 'Solicitud firmada por el trabajador solicitante ' + 'IIlegíble' + '\n<br>\n';
        if (this.lop2 == '2')
            this.descripcionobj = this.descripcionobj + 'Fotocopia de DPI ' + 'IIlegíble' + '\n<br>\n';
        if (this.lop3 == '2')
            this.descripcionobj = this.descripcionobj + 'Fotocopia del último voucher de sueldo del trabajador ' + 'IIlegíble' + '\n<br>\n';
        if (this.lop4 == '2')
            this.descripcionobj = this.descripcionobj + 'Certificación de Relación Laboral extendida por la División de Administración de Recursos Humanos, donde conste el monto de indemnización estimada ' + 'IIlegíble' + ' \n<br>\n';
        if (this.lop5 == '2')
            this.descripcionobj = this.descripcionobj + 'Fotocopia de recibo reciente de agua, luz o teléfono ' + 'IIlegíble' + '\n<br>\n';
        if (this.lop6 == '2')
            this.descripcionobj = this.descripcionobj + 'Consentimiento para ser asegurado ' + 'IIlegíble' + '\n<br>\n';
        if (this.lop7 == '2')
            this.descripcionobj = this.descripcionobj + 'Carta de consentimiento del deudor ' + 'IIlegíble' + '\n<br>\n';
        if (this.lop8 == '2')
            this.descripcionobj = this.descripcionobj + 'Los trabajadores que tienen contrato a término, deberán presentar constancia de recontratación ' + 'IIlegíble' + '\n<br>\n';
        if (this.lop9 == '2')
            this.descripcionobj = this.descripcionobj + 'Presentar la proforma del equipo de cómputo a adquirir ' + 'IIlegíble' + '\n<br>\n';
        if (this.lop1 == '1')
            this.descripcionobj = this.descripcionobj + 'Solicitud firmada por el trabajador solicitante ' + 'No valido' + '\n<br>\n';
        if (this.lop2 == '1')
            this.descripcionobj = this.descripcionobj + 'Fotocopia de DPI ' + 'No valido' + '\n<br>\n';
        if (this.lop3 == '1')
            this.descripcionobj = this.descripcionobj + 'Fotocopia del último voucher de sueldo del trabajador ' + 'No valido' + '\n<br>\n';
        if (this.lop4 == '1')
            this.descripcionobj = this.descripcionobj + 'Certificación de Relación Laboral extendida por la División de Administración de Recursos Humanos, donde conste el monto de indemnización estimada ' + 'No valido' + ' \n<br>\n';
        if (this.lop5 == '1')
            this.descripcionobj = this.descripcionobj + 'Fotocopia de recibo reciente de agua, luz o teléfono ' + 'No valido' + '\n<br>\n';
        if (this.lop6 == '1')
            this.descripcionobj = this.descripcionobj + 'Consentimiento para ser asegurado ' + 'No valido' + '\n<br>\n';
        if (this.lop7 == '1')
            this.descripcionobj = this.descripcionobj + 'Carta de consentimiento del deudor ' + 'No valido' + '\n<br>\n';
        if (this.lop8 == '1')
            this.descripcionobj = this.descripcionobj + 'Los trabajadores que tienen contrato a término, deberán presentar constancia de recontratación ' + 'No valido' + '\n<br>\n';
        if (this.lop9 == '1')
            this.descripcionobj = this.descripcionobj + 'Presentar la proforma del equipo de cómputo a adquirir ' + 'No valido' + '\n<br>\n';
    };
    SolprestamoOpe2Page.prototype.imprime = function () {
        var _this = this;
        var alert = this.alertCtrl.create({ title: 'Esta seguro de realizar esta operación?',
            buttons: [
                { text: 'Si',
                    handler: function () {
                        var options = {
                            operacion: 'mandacomentario',
                            estado: 'AUTORIZADO',
                            ultrechazo: _this.descripcionobj,
                            ultrechazo2: _this.lop1 + '°' + _this.lop2 + '°' + _this.lop3 + '°' + _this.lop4 + '°' + _this.lop5 + '°' + _this.lop6 + '°' + _this.lop7 + '°' + _this.lop8 + '°' + _this.lop9,
                            bitacora: { idempresa: _this.idempresa, idafiliado: '', email: _this.username, permiso: 'creat', accion: 'rechazo prestamo' }
                        };
                        _this.regService.createReg2b(_this.items[0]._id, options, 'solprestamos').then(function (result) {
                            // loading.dismiss();
                            var loading = _this.loadingCtrl.create({
                                spinner: 'bubbles',
                                content: "Enviando  Correo electronico  a cuenta: " + _this.items[0].usuarionew + "  ......"
                            });
                            loading.present();
                            var idt = _this.items[0]._id;
                            _this.msg2 = ' <p><span class="esd-hidden-preheader" style="display: none !important; font-size: 0px; line-height: 0; color: #ffffff; visibility: hidden; opacity: 0; height: 0; width: 0; mso-hide: all;">0</span></p><div class="es-wrapper-color"><table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0"><tbody><tr><td class="esd-email-paddings" valign="top"><table class="es-content esd-footer-popover" cellspacing="0" cellpadding="0" align="center"><tbody><tr><td class="esd-stripe" align="center"><table class="es-content-body" width="600" cellspacing="0" cellpadding="0" align="center" bgcolor="#ffffff"><tbody><tr><td class="esd-structure es-p20" align="left"><table width="100%" cellspacing="0" cellpadding="0"><tbody><tr><td class="esd-container-frame" align="center" valign="top" width="560"><table width="100%" cellspacing="0" cellpadding="0"><tbody><tr><td class="esd-block-image" align="center"><a target="_blank"><img class="adapt-img" style="display: block;" src="https://drive.google.com/file/d/1d4HFPkFqO9Pz0_7QUpaLHbAZ_GuJXDX-/view?ts=5ee2baf9" alt="" width="87" /></a></td></tr> <td align="center">                                                <h2><span style="color: #333333;"><strong>' + _this.items[0].nombre + '</strong>, La Universidad de San Carlos de Guatemala informa: <br><strong> Tu préstamo ha sido aprobada, ingresa a la plataforma <br> <a href="https://usac-enlinea.web.app">https://usac-enlinea.web.app</a> y continúa con tu préstamo. </strong></span></h2>                               </td></tr> <tr>                                                <td class="esd-block-text" align="left">                                                </p></td></tr><tr><td class="esd-block-image" align="center"><a target="_blank"><img class="adapt-img" style="float: left;" src="http://52.90.195.238:8500/logoit.jpg" alt="" width="200" /></a></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></div>';
                            var options2 = {
                                destino: _this.items[0].usuarionew,
                                html: _this.msg2,
                                text: _this.msg2,
                                subjet: 'Correo de autotización de prestamo USAC ',
                                actualiza: { tipo: 'na', id: idt, estado: 'Ingreso, mail enviado',
                                    otros: '' }
                            };
                            _this.regService.mandamail('', options2, 'mails').then(function (data) {
                                loading.dismiss();
                                _this.msj.showError3('Mensaje', 'Operación realizada con exito');
                                _this.viewCtrl.dismiss(data);
                            }, function (err) {
                                loading.dismiss();
                                _this.msj.showError3('Error', err.error);
                            });
                        }, function (err) {
                            //loading.dismiss();
                            _this.msj.showError3('Mensaje', err.error);
                            // this.navCtrl.pop();
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
    SolprestamoOpe2Page.prototype.imprime3 = function () {
        //manda correo
        var _this = this;
        var alert = this.alertCtrl.create({ title: 'Esta seguro de realizar esta operación?',
            buttons: [
                { text: 'Si',
                    handler: function () {
                        var loading = _this.loadingCtrl.create({
                            spinner: 'bubbles',
                            content: "Enviando  Correo electronico  a cuenta: " + _this.items[0].usuarionew + "  ......"
                        });
                        loading.present();
                        var idt = _this.items[0]._id;
                        _this.msg2 = ' <p><span class="esd-hidden-preheader" style="display: none !important; font-size: 0px; line-height: 0; color: #ffffff; visibility: hidden; opacity: 0; height: 0; width: 0; mso-hide: all;">0</span></p><div class="es-wrapper-color"><table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0"><tbody><tr><td class="esd-email-paddings" valign="top"><table class="es-content esd-footer-popover" cellspacing="0" cellpadding="0" align="center"><tbody><tr><td class="esd-stripe" align="center"><table class="es-content-body" width="600" cellspacing="0" cellpadding="0" align="center" bgcolor="#ffffff"><tbody><tr><td class="esd-structure es-p20" align="left"><table width="100%" cellspacing="0" cellpadding="0"><tbody><tr><td class="esd-container-frame" align="center" valign="top" width="560"><table width="100%" cellspacing="0" cellpadding="0"><tbody><tr><td class="esd-block-image" align="center"><a target="_blank"><img class="adapt-img" style="display: block;" src="https://drive.google.com/file/d/1d4HFPkFqO9Pz0_7QUpaLHbAZ_GuJXDX-/view?ts=5ee2baf9" alt="" width="87" /></a></td></tr><br /> <strong>' + _this.items[0].nombre + '</strong>, La Universidad de San Carlos de Guatemala informa: <br>Tu papelería ha sido rechazada, no cumple con la siguiente informaci&oacute;n: </span></span></span>                      <h2 style="text-align: left;"><span style="color: #0000ff;"><span style="color: #333333;"><strong>' + _this.descripcionobj + ' <br /> </strong> <br /></span></span></h2>                      <p><span style="color: #0000ff;"><span style="color: #333333;"><br /><br /> Por favor ingresa a nuestra plataforma institucional&nbsp;</span></span><span style="color: #0000ff;"><span style="color: #333333;">https://usac-enlinea.web.app y actualiza tu solicitud de préstamo. </span></span></p>                      </td>                      </tr>    <tr>                      <td class="esd-block-text" align="left">                      <p style="color: #38761d;"> </p></td></tr><tr><td class="esd-block-image" align="center"><a target="_blank"><img class="adapt-img" style="float: left;" src="http://52.90.195.238:8500/logoit.jpg" alt="" width="200" /></a></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></div>';
                        var options2 = {
                            destino: _this.items[0].usuarionew,
                            html: _this.msg2,
                            text: _this.msg2,
                            subjet: 'Correo de autotización de papelería (PLAN DE PRESTACIONES)',
                            actualiza: { tipo: 'na', id: idt, estado: 'Ingreso, mail enviado',
                                otros: '' }
                        };
                        _this.regService.mandamail('', options2, 'mails').then(function (data) {
                            loading.dismiss();
                            var options = {
                                operacion: 'mandacomentario',
                                estado: 'EN PROCESO',
                                ultrechazo: _this.descripcionobj,
                                ultrechazo2: _this.lop1 + '°' + _this.lop2 + '°' + _this.lop3 + '°' + _this.lop4 + '°' + _this.lop5 + '°' + _this.lop6 + '°' + _this.lop7 + '°' + _this.lop8 + '°' + _this.lop9,
                                bitacora: { idempresa: _this.idempresa, idafiliado: '', email: _this.username, permiso: 'creat', accion: 'rechazo prestamo' }
                            };
                            _this.regService.createReg2b(_this.items[0]._id, options, 'solprestamos').then(function (result) {
                                // loading.dismiss();
                                _this.msj.showError3('Exito', 'Operación realizada con exito, Hemos enviado correo de rechazo a cuenta: ' + _this.items[0].usuarionew);
                                _this.navCtrl.pop();
                            }, function (err) {
                                //loading.dismiss();
                                _this.msj.showError3('Mensaje', err.error);
                                // this.navCtrl.pop();
                            });
                        }, function (err) {
                            loading.dismiss();
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
    SolprestamoOpe2Page.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    SolprestamoOpe2Page.prototype.updateProfileImage = function (op) {
        this.opimg = op;
        switch (op) {
            case 3:
                this.fileInput3.nativeElement.click();
                break;
            case 4:
                this.fileInput4.nativeElement.click();
                break;
            case 8:
                this.fileInput8.nativeElement.click();
                break;
            default:
                break;
        }
    };
    SolprestamoOpe2Page.prototype.takePhotograph = function (op) {
        var _this = this;
        if (__WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__["a" /* Camera */]['installed']()) {
            this._IMAGE
                .takePhotograph()
                .then(function (image) {
                if (op == 3) {
                    _this.f3a = 'data';
                    _this.f3 = image.toString();
                }
                if (op == 4) {
                    _this.f4a = 'data';
                    _this.f4 = image.toString();
                }
                if (op == 8) {
                    _this.f8a = 'data';
                    _this.f8 = image.toString();
                }
            })
                .catch(function (err) {
                console.log(err);
            });
        }
        else {
            switch (op) {
                case 3:
                    this.fileInput3.nativeElement.click();
                    break;
                case 4:
                    this.fileInput4.nativeElement.click();
                    break;
                case 8:
                    this.fileInput8.nativeElement.click();
                    break;
                default:
                    break;
            }
        }
    };
    SolprestamoOpe2Page.prototype.selectImage = function (op) {
        var _this = this;
        if (__WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__["a" /* Camera */]['installed']()) {
            this._IMAGE
                .selectPhotograph()
                .then(function (image) {
                if (op == 3) {
                    _this.f3a = 'data';
                    _this.f3 = image.toString();
                }
                if (op == 4) {
                    _this.f4a = 'data';
                    _this.f4 = image.toString();
                }
                if (op == 8) {
                    _this.f8a = 'data';
                    _this.f8 = image.toString();
                }
            })
                .catch(function (err) {
                console.log(err);
            });
        }
        else {
            switch (op) {
                case 3:
                    this.fileInput3.nativeElement.click();
                    break;
                case 4:
                    this.fileInput4.nativeElement.click();
                    break;
                case 8:
                    this.fileInput8.nativeElement.click();
                    break;
                default:
                    break;
            }
        }
    };
    SolprestamoOpe2Page.prototype.processWebImage = function (event, op) {
        var _this = this;
        if (event.target.files && event.target.files[0]) {
            var loading_1 = this.loadingCtrl.create({
                spinner: 'bubbles',
                content: "Espere un momento....."
            });
            loading_1.present();
            var ant = '';
            var reader = new FileReader();
            reader.onload = function (readerEvent) {
                if (_this.opimg == 3) {
                    ant = _this.f3;
                    _this.filegenerado3 = event;
                    _this.f3 = readerEvent.target.result;
                    _this._IMAGE.generateFromImage(_this.f3, 600, 600, 2, function (data) {
                        _this.f3 = data;
                        _this.f3a = 'data';
                        if (true) {
                            try {
                                _this.afStorage.storage.refFromURL(ant).delete();
                            }
                            catch (e) {
                            }
                            _this.ref = _this.afStorage.ref(Math.random().toString(36).substring(2));
                            _this.task = _this.ref.put(_this.filegenerado3.target.files[0]);
                            _this.task.then().then(function (res1) {
                                _this.f3 = res1.downloadURL;
                                _this.lop3 = '0';
                                var options = {
                                    operacion: 'mandacomentario22',
                                    estado: 'ACTUALIZADAS',
                                    requisito3: res1.downloadURL, requisito4: _this.f4,
                                    requisito8: _this.f8,
                                    bitacora: { idempresa: _this.idempresa, idafiliado: '', email: _this.username, permiso: 'creat', accion: 'rechazo prestamo' }
                                };
                                _this.regService.createReg2b(_this.navParams.data.record._id, options, 'solprestamos').then(function (result) {
                                    _this.msj.showError3('Información', 'Documento actualizado con exito');
                                    loading_1.dismiss();
                                }, function (err) {
                                    //loading.dismiss();
                                    _this.msj.showError3('Mensaje', err.error);
                                    loading_1.dismiss();
                                    // this.navCtrl.pop();
                                });
                            }).catch(function (err) { });
                        }
                        else {
                            loading_1.dismiss();
                        }
                    });
                }
                if (_this.opimg == 4) {
                    ant = _this.f4;
                    _this.filegenerado4 = event;
                    _this.f4 = readerEvent.target.result;
                    _this._IMAGE.generateFromImage(_this.f4, 600, 600, 2, function (data) {
                        _this.f4 = data;
                        _this.f4a = 'data';
                        if (true) {
                            try {
                                _this.afStorage.storage.refFromURL(ant).delete();
                            }
                            catch (e) {
                            }
                            _this.ref = _this.afStorage.ref(Math.random().toString(36).substring(2));
                            _this.task = _this.ref.put(_this.filegenerado4.target.files[0]);
                            _this.task.then().then(function (res1) {
                                _this.f4 = res1.downloadURL;
                                _this.lop4 = '0';
                                var options = {
                                    operacion: 'mandacomentario22',
                                    estado: 'ACTUALIZADAS',
                                    requisito3: _this.f3, requisito4: res1.downloadURL,
                                    requisito8: _this.f8,
                                    bitacora: { idempresa: _this.idempresa, idafiliado: '', email: _this.username, permiso: 'creat', accion: 'rechazo prestamo' }
                                };
                                _this.regService.createReg2b(_this.navParams.data.record._id, options, 'solprestamos').then(function (result) {
                                    _this.msj.showError3('Información', 'Documento actualizado con exito');
                                    loading_1.dismiss();
                                }, function (err) {
                                    //loading.dismiss();
                                    _this.msj.showError3('Mensaje', err.error);
                                    loading_1.dismiss();
                                    // this.navCtrl.pop();
                                });
                            }).catch(function (err) { });
                        }
                        else {
                            loading_1.dismiss();
                        }
                    });
                }
                if (_this.opimg == 8) {
                    ant = _this.f8;
                    _this.filegenerado8 = event;
                    _this.f8 = readerEvent.target.result;
                    _this._IMAGE.generateFromImage(_this.f8, 600, 600, 2, function (data) {
                        _this.f8 = data;
                        _this.f8a = 'data';
                        if (true) {
                            try {
                                _this.afStorage.storage.refFromURL(ant).delete();
                            }
                            catch (e) {
                            }
                            _this.ref = _this.afStorage.ref(Math.random().toString(36).substring(2));
                            _this.task = _this.ref.put(_this.filegenerado8.target.files[0]);
                            _this.task.then().then(function (res1) {
                                _this.f8 = res1.downloadURL;
                                _this.lop8 = '0';
                                var options = {
                                    operacion: 'mandacomentario22',
                                    estado: 'ACTUALIZADAS',
                                    requisito3: _this.f3, requisito4: _this.f4,
                                    requisito8: res1.downloadURL,
                                    bitacora: { idempresa: _this.idempresa, idafiliado: '', email: _this.username, permiso: 'creat', accion: 'rechazo prestamo' }
                                };
                                _this.regService.createReg2b(_this.navParams.data.record._id, options, 'solprestamos').then(function (result) {
                                    _this.msj.showError3('Información', 'Documento actualizado con exito');
                                    loading_1.dismiss();
                                }, function (err) {
                                    //loading.dismiss();
                                    _this.msj.showError3('Mensaje', err.error);
                                    loading_1.dismiss();
                                    // this.navCtrl.pop();
                                });
                            }).catch(function (err) { });
                        }
                        else {
                            loading_1.dismiss();
                        }
                    });
                }
            };
            reader.readAsDataURL(event.target.files[0]);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('fileInput3'),
        __metadata("design:type", Object)
    ], SolprestamoOpe2Page.prototype, "fileInput3", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('fileInput4'),
        __metadata("design:type", Object)
    ], SolprestamoOpe2Page.prototype, "fileInput4", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('fileInput8'),
        __metadata("design:type", Object)
    ], SolprestamoOpe2Page.prototype, "fileInput8", void 0);
    SolprestamoOpe2Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-solprestamo-ope2',template:/*ion-inline-start:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\CALUSAC\solprestamo-ope2\solprestamo-ope2.html"*/'\n  <ion-header>\n    <ion-navbar>\n      <ion-title> Autorización Usuario</ion-title>\n      <ion-buttons start>\n          <button (click)="cancel()" icon-only ion-button padding-right>\n              <ion-icon name="md-close"></ion-icon>\n            </button>\n\n      </ion-buttons>\n\n    </ion-navbar>\n  </ion-header>\n  <ion-content   fullscreen>\n\n      <div   *ngFor="let item of items  ;let i = index;" text-wrap>\n\n\n          <h2>Datos generales del préstamo</h2>\n\n          <div class="splash-info2">\n\n            {{item.nombre}} <br>\n            CUI: {{item.cui}} <br>\n            Tipo de préstamo: {{item.tipo}}  <br>\n            Monto: {{item.monto}}  <br>\n            Plazo: {{item.plazo}} <br>\n            Interes: {{item.interes}}<br>\n            Estado: {{item.estado}}<br>\n\n\n            </div>\n\n\n\n\n            <ion-item-divider [hidden]="!sololeer" color="danger">\n              <ion-label>\n                Rechazo:\n                <br>\n               <div *ngIf="sl1!==\'0\'">{{sl1}}</div> <br>\n               <div *ngIf="sl2!==\'0\'">{{sl2}}</div> <br>\n               <div *ngIf="sl3!==\'0\'">{{sl3}}</div> <br>\n               <div *ngIf="sl4!==\'0\'">{{sl4}}</div> <br>\n               <div *ngIf="sl5!==\'0\'">{{sl5}}</div> <br>\n               <div *ngIf="sl6!==\'0\'">{{sl6}}</div> <br>\n               <div *ngIf="sl7!==\'0\'">{{sl7}}</div> <br>\n               <div *ngIf="sl8!==\'0\'">{{sl8}}</div> <br>\n               <div *ngIf="sl9!==\'0\'">{{sl9}}</div> <br>\n              </ion-label>\n            </ion-item-divider>\n\n\n\n           <ion-grid>\n            <ion-row>\n\n                <ion-col col-sm-8 >\n                  <ion-list >\n                    <div class="wrapper" text-center>\n                    <ion-item  text-wrap>\n\n\n                        <div class="wrapper" >\n                            <div class="box yellow" text-center>\n                                <ion-row>\n                                    <ion-col col-12>\n                                        <img #myImage1 (click)="presentImage(myImage1)" [src]="item.requisito1" style="width:100px;height: 100px;-webkit-border-radius: 50%;                  border-radius: 50%;display: block; margin: center;  margin-left: auto; margin-right: auto;">\n                                        <p> <strong> Solicitud firmada por el trabajador solicitante (*)</strong></p>\n\n      <button ion-button [color]="color1a"  (click)="objetar3(\'Solicitud firmada por el trabajador solicitante\',\'Ilegíble\',1)" full>    Ilegíble</button>\n      <button ion-button [color]="color1b"  (click)="objetar3a(\'Solicitud firmada por el trabajador solicitante\',\'No valido\',1)" full>    No valido</button>\n      <button ion-button [color]="color1c"  (click)="objetar3b(\'\',\'\',1)" full>    Todo correcto</button>\n\n                                              </ion-col>\n                                </ion-row>\n                                <ion-row>\n                                </ion-row>\n                             </div>\n                        </div>\n                  </ion-item>\n\n                  <ion-item  text-wrap>\n                    <div class="wrapper" >\n                        <div class="box yellow" text-center>\n                            <ion-row>\n                                <ion-col col-12>\n                                    <img #myImage2 (click)="presentImage(myImage2)" [src]="item.requisito2" style="width:100px;height: 100px;-webkit-border-radius: 50%;                  border-radius: 50%;display: block; margin: center;  margin-left: auto; margin-right: auto;">\n                                    <p> <strong> Fotocopia de DPI legible (*)</strong></p>\n                                    <button ion-button  [color]="color2a"   (click)="objetar3(\'Fotocopia de DPI\',\'Ilegíble\',2)" full>    Ilegíble</button>\n                                    <button ion-button  [color]="color2b"   (click)="objetar3a(\'Fotocopia de DPI\',\'No valido\',2)" full>    No valido</button>\n                                    <button ion-button   [color]="color2c"  (click)="objetar3b(\'\',\'\',2)" full>    Todo correcto</button>\n                                          </ion-col>\n                            </ion-row>\n                            <ion-row>\n                            </ion-row>\n                         </div>\n                    </div>\n              </ion-item>\n\n              <ion-item  text-wrap>\n                <div class="wrapper" >\n                    <div class="box yellow" text-center>\n                        <ion-row>\n                            <ion-col col-12>\n                                <img #myImage3 (click)="presentImage(myImage3)" [src]="item.requisito3" style="width:100px;height: 100px;-webkit-border-radius: 50%;                  border-radius: 50%;display: block; margin: center;  margin-left: auto; margin-right: auto;">\n                                <p> <strong> Fotocopia del último voucher de sueldo del trabajador</strong></p>\n                                <button ion-button  [color]="color3a"   (click)="objetar3(\'Fotocopia del último voucher de sueldo del trabajador\',\'Ilegíble\',3)" full>    Ilegíble</button>\n                                <button ion-button  [color]="color3b"   (click)="objetar3a(\'Fotocopia del último voucher de sueldo del trabajador\',\'No valido\',3)" full>    No valido</button>\n                                <button ion-button   [color]="color3c"  (click)="objetar3b(\'\',\'\',3)" full>    Todo correcto</button>\n                                <button ion-button   color="secondary"  (click)="updateProfileImage(3)" full>    Actualizar documento</button>\n\n                                      </ion-col>\n                        </ion-row>\n                        <ion-row>\n                        </ion-row>\n                     </div>\n                </div>\n          </ion-item>\n\n          <ion-item  text-wrap>\n            <div class="wrapper" >\n                <div class="box yellow" text-center>\n                    <ion-row>\n                        <ion-col col-12>\n                            <img #myImage4 (click)="presentImage(myImage4)" [src]="item.requisito4" style="width:100px;height: 100px;-webkit-border-radius: 50%;                  border-radius: 50%;display: block; margin: center;  margin-left: auto; margin-right: auto;">\n                            <p> <strong> Certificación de Relación Laboral extendida por la División de Administración de Recursos Humanos, donde conste el monto de indemnización estimada</strong></p>\n                            <button ion-button  [color]="color4a"  (click)="objetar3(\'Certificación de Relación Laboral extendida por la División de Administración de Recursos Humanos, donde conste el monto de indemnización estimada\',\'Ilegíble\',4)" full>    Ilegíble</button>\n                            <button ion-button  [color]="color4b"   (click)="objetar3a(\'Certificación de Relación Laboral extendida por la División de Administración de Recursos Humanos, donde conste el monto de indemnización estimada\',\'No valido\',4)" full>    No valido</button>\n                            <button ion-button   [color]="color4c"  (click)="objetar3b(\'\',\'\',4)" full>    Todo correcto</button>\n                            <button ion-button   color="secondary"  (click)="updateProfileImage(4)" full>    Actualizar documento</button>\n\n                          </ion-col>\n                    </ion-row>\n                    <ion-row>\n                    </ion-row>\n                 </div>\n            </div>\n      </ion-item>\n\n      <ion-item  text-wrap>\n        <div class="wrapper" >\n            <div class="box yellow" text-center>\n                <ion-row>\n                    <ion-col col-12>\n                        <img #myImage5 (click)="presentImage(myImage5)" [src]="item.requisito5" style="width:100px;height: 100px;-webkit-border-radius: 50%;                  border-radius: 50%;display: block; margin: center;  margin-left: auto; margin-right: auto;">\n                        <p> <strong>  Fotocopia de recibo reciente de agua, luz o teléfono (*)</strong></p>\n                        <button ion-button  [color]="color5a"   (click)="objetar3(\'Fotocopia de recibo reciente de agua, luz o teléfono\',\'Ilegíble\',5)" full>    Ilegíble</button>\n                        <button ion-button  [color]="color5b"   (click)="objetar3a(\'Fotocopia de recibo reciente de agua, luz o teléfono\',\'No valido\',5)" full>    No valido</button>\n                        <button ion-button   [color]="color5c"  (click)="objetar3b(\'\',\'\',5)" full>    Todo correcto</button>\n                              </ion-col>\n                </ion-row>\n                <ion-row>\n                </ion-row>\n             </div>\n        </div>\n      </ion-item>\n\n      <ion-item  text-wrap>\n        <div class="wrapper" >\n            <div class="box yellow" text-center>\n                <ion-row>\n                    <ion-col col-12>\n                        <img #myImage6 (click)="presentImage(myImage6)" [src]="item.requisito6" style="width:100px;height: 100px;-webkit-border-radius: 50%;                  border-radius: 50%;display: block; margin: center;  margin-left: auto; margin-right: auto;">\n                        <p> <strong>Consentimiento para ser asegurado (*)</strong></p>\n                        <button ion-button  [color]="color6a"  (click)="objetar3(\'Consentimiento para ser asegurado\',\'Ilegíble\',6)" full>    Ilegíble</button>\n                        <button ion-button  [color]="color6b"   (click)="objetar3a(\'Consentimiento para ser asegurado\',\'No valido\',6)" full>    No valido</button>\n                        <button ion-button   [color]="color6c"  (click)="objetar3b(\'\',\'\',6)" full>    Todo correcto</button>\n                              </ion-col>\n                </ion-row>\n                <ion-row>\n                </ion-row>\n             </div>\n        </div>\n      </ion-item>\n\n      <ion-item  text-wrap>\n        <div class="wrapper" >\n            <div class="box yellow" text-center>\n                <ion-row>\n                    <ion-col col-12>\n                        <img #myImage7 (click)="presentImage(myImage7)" [src]="item.requisito7" style="width:100px;height: 100px;-webkit-border-radius: 50%;                  border-radius: 50%;display: block; margin: center;  margin-left: auto; margin-right: auto;">\n                        <p> <strong>  Carta de consentimiento del deudor (*)</strong></p>\n                        <button ion-button  [color]="color7a"   (click)="objetar3(\'Carta de consentimiento del deudor\',\'Ilegíble\',7)" full>    Ilegíble</button>\n                        <button ion-button  [color]="color7b"   (click)="objetar3a(\'Carta de consentimiento del deudor\',\'No valido\',7)" full>    No valido</button>\n                        <button ion-button   [color]="color7c"  (click)="objetar3b(\'\',\'\',7)" full>    Todo correcto</button>\n                              </ion-col>\n                </ion-row>\n                <ion-row>\n                </ion-row>\n             </div>\n        </div>\n      </ion-item>\n\n      <ion-item  text-wrap>\n        <div class="wrapper" >\n            <div class="box yellow" text-center>\n                <ion-row>\n                    <ion-col col-12>\n                        <img #myImage8 (click)="presentImage(myImage8)" [src]="item.requisito8" style="width:100px;height: 100px;-webkit-border-radius: 50%;                  border-radius: 50%;display: block; margin: center;  margin-left: auto; margin-right: auto;">\n                        <p> <strong>  Los trabajadores que tienen contrato a término, deberán presentar constancia de recontratación.</strong></p>\n                        <button ion-button  [color]="color8a"   (click)="objetar3(\'Los trabajadores que tienen contrato a término, deberán presentar constancia de recontratación\',\'Ilegíble\',8)" full>    Ilegíble</button>\n                        <button ion-button  [color]="color8b"   (click)="objetar3a(\'Los trabajadores que tienen contrato a término, deberán presentar constancia de recontratación\',\'No valido\',8)" full>    No valido</button>\n                        <button ion-button   [color]="color8c"  (click)="objetar3b(\'\',\'\',8)" full>    Todo correcto</button>\n                        <button ion-button   color="secondary"  (click)="updateProfileImage(8)" full>    Actualizar documento</button>\n\n                      </ion-col>\n                </ion-row>\n                <ion-row>\n                </ion-row>\n             </div>\n        </div>\n      </ion-item>\n\n      <ion-item  text-wrap>\n        <div class="wrapper" >\n            <div class="box yellow" text-center>\n                <ion-row>\n                    <ion-col col-12>\n                        <img #myImage9 (click)="presentImage(myImage9)" [src]="item.requisito9" style="width:100px;height: 100px;-webkit-border-radius: 50%;                  border-radius: 50%;display: block; margin: center;  margin-left: auto; margin-right: auto;">\n                        <p> <strong> Presentar la proforma del equipo de cómputo a adquirir (*)</strong></p>\n                        <button ion-button  [color]="color9a"   (click)="objetar3(\'Presentar la proforma del equipo de cómputo a adquirir\',\'Ilegíble\',9)" full>    Ilegíble</button>\n                        <button ion-button  [color]="color9b"   (click)="objetar3a(\'Presentar la proforma del equipo de cómputo a adquirir\',\'No valido\',9)" full>    No valido</button>\n                        <button ion-button   [color]="color9c"  (click)="objetar3b(\'\',\'\',9)" full>    Todo correcto</button>\n                              </ion-col>\n                </ion-row>\n                <ion-row>\n                </ion-row>\n             </div>\n        </div>\n      </ion-item>\n                </div>\n                 </ion-list>\n\n                </ion-col>\n                <ion-col col-sm-4 >\n\n            <h1>Descripción a objetar</h1>\n            <ion-textarea\n            type="text" rows="50"\n            [(ngModel)]="descripcionobj"\n           ></ion-textarea>\n                </ion-col>\n\n            </ion-row>\n            </ion-grid>\n\n\n\n                               <ion-col col-12>\n                                   <button ion-button color="danger"  (click)="imprime3()" full>     Objetar\n                                     </button>\n\n\n\n                               </ion-col>\n\n\n\n     <button ion-button color="secundary"  (click)="imprime()" full>      Autorizar Préstamo\n      </button>\n      </div>\n\n\n      <input   type="hidden"    name="f3"   [(ngModel)]="f3">\n      <input type="file" accept="image/*" #fileInput3 style="visibility: hidden; height: 0px" (change)="processWebImage($event,3)" />\n\n\n      <input   type="hidden"    name="f4"   [(ngModel)]="f4">\n      <input type="file" accept="image/*" #fileInput4 style="visibility: hidden; height: 0px" (change)="processWebImage($event,4)" />\n\n\n      <input   type="hidden"    name="f8"   [(ngModel)]="f8">\n      <input type="file" accept="image/*" #fileInput8 style="visibility: hidden; height: 0px" (change)="processWebImage($event,8)" />\n\n\n     <ion-infinite-scroll (ionInfinite)="loadMore($event)">\n        <ion-infinite-scroll-content></ion-infinite-scroll-content>\n      </ion-infinite-scroll>\n\n\n  </ion-content>\n'/*ion-inline-end:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\CALUSAC\solprestamo-ope2\solprestamo-ope2.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_8_angularfire2_storage__["a" /* AngularFireStorage */], __WEBPACK_IMPORTED_MODULE_7__providers_image_image__["a" /* ImageProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["F" /* ViewController */], __WEBPACK_IMPORTED_MODULE_9_ionic_img_viewer__["a" /* ImageViewerController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_5__providers_pdf_pdfx__["a" /* pdfx */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_2__providers__["d" /* NotificationProvider */], __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers__["a" /* Auth */]])
    ], SolprestamoOpe2Page);
    return SolprestamoOpe2Page;
}());

//# sourceMappingURL=solprestamo-ope2.js.map

/***/ }),

/***/ 937:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SolprestamoOpe2PageModule", function() { return SolprestamoOpe2PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__solprestamo_ope2__ = __webpack_require__(1377);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pipes_pipes_module__ = __webpack_require__(445);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var SolprestamoOpe2PageModule = /** @class */ (function () {
    function SolprestamoOpe2PageModule() {
    }
    SolprestamoOpe2PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__solprestamo_ope2__["a" /* SolprestamoOpe2Page */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__solprestamo_ope2__["a" /* SolprestamoOpe2Page */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild(),
                __WEBPACK_IMPORTED_MODULE_4__pipes_pipes_module__["a" /* PipesModule */]
            ],
        })
    ], SolprestamoOpe2PageModule);
    return SolprestamoOpe2PageModule;
}());

//# sourceMappingURL=solprestamo-ope2.module.js.map

/***/ })

});
//# sourceMappingURL=212.js.map