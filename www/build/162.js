webpackJsonp([162],{

/***/ 1000:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DenunciaSegcreatePageModule", function() { return DenunciaSegcreatePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__denuncia_segcreate__ = __webpack_require__(1442);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var DenunciaSegcreatePageModule = /** @class */ (function () {
    function DenunciaSegcreatePageModule() {
    }
    DenunciaSegcreatePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__denuncia_segcreate__["a" /* DenunciaSegcreatePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__denuncia_segcreate__["a" /* DenunciaSegcreatePage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], DenunciaSegcreatePageModule);
    return DenunciaSegcreatePageModule;
}());

//# sourceMappingURL=denuncia-segcreate.module.js.map

/***/ }),

/***/ 1442:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DenunciaSegcreatePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_image_image__ = __webpack_require__(448);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_camera__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_geolocation__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_pdf_pdfx__ = __webpack_require__(447);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angularfire2_storage__ = __webpack_require__(454);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






//import { CuiValidator } from  '../../../providers/validaciones/cui';





var DenunciaSegcreatePage = /** @class */ (function () {
    //public http:Http, private transfer: FileTransfer,
    function DenunciaSegcreatePage(afStorage, Pdfx, geolocation, loadingCtrl, _IMAGE, storage, msj, translateService, viewCtrl, authService, navCtrl, navParams, _FB, actionSheetCtrl, events
        //, private media: Media, private mediaCapture: MediaCapture,
    ) {
        var _this = this;
        this.afStorage = afStorage;
        this.Pdfx = Pdfx;
        this.geolocation = geolocation;
        this.loadingCtrl = loadingCtrl;
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
        this.username = "usuarioforms";
        this.tiposus = [];
        this.rapido = 'no';
        this.f1 = './assets/img/blanco.png';
        this.f2 = './assets/img/blanco.png';
        this.f3 = '';
        this.selectedVideo = '';
        this.videomira = true;
        this.xpos = 0;
        this.ypos = 0;
        this.automatico = true;
        this.createdCode = null;
        this.scannedCode = null;
        this.vtarifa = [];
        this.record = [];
        this.form = this._FB.group({
            motivo: [''],
            tipo: [''],
            f1: [''],
            f3: [''],
            f2: ['']
        });
        this.translateService.get('APPX').subscribe(function (value) {
            _this.idempresa = value;
            _this.authService.getReg('5c6394cbcffe290016d494b5' + '/' + _this.idempresa, 'dcatalogos').then(function (result) {
                _this.vtarifa = result;
            }, function (err) {
                _this.msj.showError3('Error', err.error);
            });
        });
        this.geolocation.getCurrentPosition()
            .then(function (resp) {
            _this.xpos = resp.coords.latitude;
            _this.ypos = resp.coords.longitude;
        });
    }
    DenunciaSegcreatePage.prototype.ionViewWillUnload = function () {
    };
    DenunciaSegcreatePage.prototype.datipo = function (op) {
        var val;
        for (var i = 0; i < this.vtarifa.length; i++) {
            if (this.vtarifa[i]._id == op) {
                val = this.vtarifa[i].nombre;
                break;
            }
        }
        return val;
    };
    DenunciaSegcreatePage.prototype.imprimir = function () {
        var _this = this;
        this.authService.getReg(this.idevento + '/denuncia', 'participa3s').then(function (data) {
            _this.Pdfx.dadenuncias(data);
        }, function (err) {
            _this.msj.showError3('Error', err.error);
            // this.translateService.get('NO_OPERACION').subscribe((value) => { this.msj.showError3('Error',value);  })  
        });
    };
    DenunciaSegcreatePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.nidevento = this.navParams.data.record2.nidevento;
        this.record = this.navParams.data.record;
        this.motivo2 = this.navParams.data.record.motivo2;
        this.motivo = this.navParams.data.record.motivo;
        this.idevento = this.navParams.data.record.iddenuncia;
        this.f1 = this.navParams.data.record.f1;
        this.f2 = this.navParams.data.record.f2;
        this.f3 = this.navParams.data.record.f3;
        this.ID = this.navParams.data.record._id;
        this.iddenuncia = this.navParams.data.record.iddenuncia;
        this.rapido = 'si';
        this.storage.get('username').then(function (value) {
            _this.username = value;
            _this.correo = value;
        });
        this.storage.get('tiposus').then(function (value) {
            _this.tiposus = value.split(',');
            _this.idsuscriptor = _this.tiposus[3];
            _this.cuitt = _this.tiposus[2];
            _this.cui = _this.tiposus[2];
            _this.nombre = _this.tiposus[4];
            var cc = _this.tiposus[5];
            if (cc == '') {
                _this.unidad = '';
            }
            else {
                if (cc.length < 10) {
                    _this.authService.getReg('registroest/' + cc + '/CARNE', 'datosfijos').then(function (data) {
                        //  this.authService.getReg(cc ,'carne').then((data) => {
                        _this.unidad = data[0].facultad;
                    }, function (err) {
                        _this.unidad = '';
                    });
                }
            }
        });
        this.automatico = true;
        //    this.takePhotograph(1);    
    };
    DenunciaSegcreatePage.prototype.onSelectChange = function (selectedValue) {
        this.tipott = selectedValue;
        // this.myInput2.setFocus();
        //this.focused('a')
    };
    DenunciaSegcreatePage.prototype.focused = function (selectedValue) {
        //this.motivo=selectedValue
    };
    DenunciaSegcreatePage.prototype.mandatodo = function (f1, f2, f3, mmt, ll, estado) {
        var _this = this;
        var options = {
            motivo: mmt,
            f1: f1,
            f2: f2,
            f3: f3,
            xpos: this.xpos,
            ypos: this.ypos,
            estado: estado,
            iddenuncia: this.iddenuncia
        };
        this.authService.createRegsinmsg(this.ID, options, 'participa33s').then(function (result) {
            ll.dismiss();
            _this.msj.showError3('Exito', 'Seguimiento procesado');
            _this.cancel();
        }, function (err) {
            ll.dismiss();
            _this.msj.showError3('Error', err.error);
        });
    };
    DenunciaSegcreatePage.prototype.manageGallery = function (op) {
        var _this = this;
        if (this.f1 == './assets/img/blanco.png' && !this.motivo) {
            this.msj.showError3('Error', 'Para poder mandar una denuncia, Por favor tome una foto o ingrese un motivo');
        }
        else {
            var mmt = '';
            if (this.motivo) {
                mmt = this.form.controls['motivo'].value;
            }
            var estadott = '';
            if (op == 1) {
                estadott = 'Asignado';
            }
            else {
                estadott = 'Cierre Pendiente';
            }
            var uno = 0;
            var dos = 0;
            var tres = 0;
            if (this.filegenerado) {
                uno = 1;
            }
            if (this.filegenerado1) {
                dos = 1;
            }
            if (this.filegenerado2) {
                tres = 1;
            }
            var loading_1 = this.loadingCtrl.create({
                spinner: 'bubbles',
                content: "Espere un momento.... "
            });
            loading_1.present();
            if (uno == 0 && dos == 0 && tres == 0) {
                this.mandatodo('', '', '', mmt, loading_1, estadott);
            }
            else {
                if (uno == 1 && dos == 1 && tres == 1) {
                    var tam = this.filegenerado.target.files[0].size / 1024;
                    if (tam > 15000) {
                        this.msj.showError3('Error', 'El tamaño de los videos debe ser < 15 MEGAS');
                        loading_1.dismiss();
                    }
                    else {
                        this.ref = this.afStorage.ref(Math.random().toString(36).substring(2));
                        this.task = this.ref.put(this.filegenerado.target.files[0]);
                        this.task.then().then(function (res) {
                            _this.ref = _this.afStorage.ref(Math.random().toString(36).substring(2));
                            _this.task = _this.ref.put(_this.filegenerado1.target.files[0]);
                            _this.task.then().then(function (res1) {
                                _this.ref = _this.afStorage.ref(Math.random().toString(36).substring(2));
                                _this.task = _this.ref.put(_this.filegenerado2.target.files[0]);
                                _this.task.then().then(function (res2) {
                                    _this.mandatodo(res1.downloadURL, res2.downloadURL, res.downloadURL, mmt, loading_1, estadott);
                                });
                            });
                        });
                    }
                }
                else {
                    if (uno == 1 && dos == 0 && tres == 0) {
                        var tam2 = this.filegenerado.target.files[0].size / 1024;
                        if (tam2 > 15000) {
                            this.msj.showError3('Error', 'El tamaño de los videos debe ser < 15 MEGAS');
                        }
                        else {
                            this.ref = this.afStorage.ref(Math.random().toString(36).substring(2));
                            this.task = this.ref.put(this.filegenerado.target.files[0]);
                            this.task.then().then(function (res) {
                                _this.mandatodo('', '', res.downloadURL, mmt, loading_1, estadott);
                            });
                        }
                    }
                    else {
                        if (uno == 1 && dos == 1 && tres == 0) {
                            this.ref = this.afStorage.ref(Math.random().toString(36).substring(2));
                            this.task = this.ref.put(this.filegenerado.target.files[0]);
                            this.task.then().then(function (res) {
                                _this.ref = _this.afStorage.ref(Math.random().toString(36).substring(2));
                                _this.task = _this.ref.put(_this.filegenerado1.target.files[0]);
                                _this.task.then().then(function (res1) {
                                    _this.mandatodo(res1.downloadURL, '', res.downloadURL, mmt, loading_1, estadott);
                                });
                            });
                        }
                        else {
                            if (uno == 0 && dos == 1 && tres == 0) {
                                this.ref = this.afStorage.ref(Math.random().toString(36).substring(2));
                                this.task = this.ref.put(this.filegenerado1.target.files[0]);
                                this.task.then().then(function (res1) {
                                    _this.mandatodo(res1.downloadURL, '', '', mmt, loading_1, estadott);
                                });
                            }
                            else {
                                if (uno == 0 && dos == 1 && tres == 1) {
                                    this.ref = this.afStorage.ref(Math.random().toString(36).substring(2));
                                    this.task = this.ref.put(this.filegenerado1.target.files[0]);
                                    this.task.then().then(function (res1) {
                                        _this.ref = _this.afStorage.ref(Math.random().toString(36).substring(2));
                                        _this.task = _this.ref.put(_this.filegenerado2.target.files[0]);
                                        _this.task.then().then(function (res2) {
                                            _this.mandatodo(res1.downloadURL, res2.downloadURL, '', mmt, loading_1, estadott);
                                        });
                                    });
                                }
                                else {
                                    if (uno == 0 && dos == 0 && tres == 1) {
                                        this.ref = this.afStorage.ref(Math.random().toString(36).substring(2));
                                        this.task = this.ref.put(this.filegenerado2.target.files[0]);
                                        this.task.then().then(function (res2) {
                                            _this.mandatodo('', res2.downloadURL, '', mmt, loading_1, estadott);
                                        });
                                    }
                                    else {
                                        if (uno == 1 && dos == 0 && tres == 1) {
                                            this.ref = this.afStorage.ref(Math.random().toString(36).substring(2));
                                            this.task = this.ref.put(this.filegenerado.target.files[0]);
                                            this.task.then().then(function (res) {
                                                _this.ref = _this.afStorage.ref(Math.random().toString(36).substring(2));
                                                _this.task = _this.ref.put(_this.filegenerado2.target.files[0]);
                                                _this.task.then().then(function (res2) {
                                                    _this.mandatodo('', res2.downloadURL, res.downloadURL, mmt, loading_1, estadott);
                                                });
                                            });
                                        }
                                        else {
                                            loading_1.dismiss();
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    };
    DenunciaSegcreatePage.prototype.cancel = function () {
        this.viewCtrl.dismiss();
    };
    DenunciaSegcreatePage.prototype.updateProfileImage = function (op) {
        this.opimg = op;
        if (op == 3) {
            this.fileInput3.nativeElement.click();
        }
        else {
            if (op == 2) {
                this.fileInput2.nativeElement.click();
            }
            else {
                this.fileInput1.nativeElement.click();
            }
        }
    };
    DenunciaSegcreatePage.prototype.updateProfileImage2 = function (op) {
        this.opimg = op;
        this.fileInput3.nativeElement.click();
    };
    DenunciaSegcreatePage.prototype.takePhotograph = function (op) {
        var _this = this;
        if (__WEBPACK_IMPORTED_MODULE_7__ionic_native_camera__["a" /* Camera */]['installed']()) {
            this._IMAGE
                .takePhotograph()
                .then(function (image) {
                if (op == 1) {
                    _this.f1 = image.toString();
                }
                if (op == 2) {
                    _this.f2 = image.toString();
                }
            })
                .catch(function (err) {
                console.log(err);
            });
        }
        else {
            // this.fileInput.nativeElement.click();
        }
    };
    DenunciaSegcreatePage.prototype.selectImage = function (op) {
        var _this = this;
        if (__WEBPACK_IMPORTED_MODULE_7__ionic_native_camera__["a" /* Camera */]['installed']()) {
            this._IMAGE
                .selectPhotograph()
                .then(function (image) {
                if (op == 1) {
                    _this.f1 = image.toString();
                }
                ;
                if (op == 2) {
                    _this.f2 = image.toString();
                }
                ;
            })
                .catch(function (err) {
                console.log(err);
            });
        }
        else {
            //this.fileInput.nativeElement.click();
        }
    };
    DenunciaSegcreatePage.prototype.processWebImage = function (event, op) {
        var _this = this;
        if (event.target.files && event.target.files[0]) {
            this.videomira = true;
            var loading_2 = this.loadingCtrl.create({
                spinner: 'bubbles',
                content: "Espere un momento....."
            });
            loading_2.present();
            var reader = new FileReader();
            reader.onload = function (readerEvent) {
                if (_this.opimg == 1) {
                    _this.filegenerado1 = event;
                    _this.f1 = readerEvent.target.result;
                    _this._IMAGE.generateFromImage(_this.f1, 300, 300, 2, function (data) {
                        _this.f1 = data;
                        loading_2.dismiss();
                    });
                }
                if (_this.opimg == 3) {
                    _this.filegenerado = event;
                    _this.f3 = readerEvent.target.result;
                    var encodingType = "data:video/mp4;base64,";
                    var OriginalBase64 = readerEvent.target.result.split(',')[1]; // Remove the "data:video..." string.
                    var decodedBase64 = atob(OriginalBase64); // Decode the incorrectly encoded base64 string.
                    var encodedBase64 = btoa(decodedBase64); // re-encode the base64 string (correctly).
                    var newBase64 = encodingType + encodedBase64; // Add the encodingType to the string.
                    if ((readerEvent.loader / 1024) <= 10) {
                        _this.f3 = '';
                        var video = _this.myVideo.nativeElement;
                        video.src = '';
                        _this.videomira = false;
                        _this.msj.showError3('Error', 'El tamaño de los videos debe ser < 10 MEGAS');
                    }
                    else {
                        var video = _this.myVideo.nativeElement;
                        video.src = newBase64;
                        _this.videomira = false;
                    }
                    loading_2.dismiss();
                    //  video.play();
                }
                if (_this.opimg == 2) {
                    _this.filegenerado2 = event;
                    _this.f2 = readerEvent.target.result;
                    _this._IMAGE.generateFromImage(_this.f2, 300, 300, 2, function (data) {
                        _this.f2 = data;
                        loading_2.dismiss();
                    });
                }
            };
            reader.readAsDataURL(event.target.files[0]);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('fileInput1'),
        __metadata("design:type", Object)
    ], DenunciaSegcreatePage.prototype, "fileInput1", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('fileInput2'),
        __metadata("design:type", Object)
    ], DenunciaSegcreatePage.prototype, "fileInput2", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('fileInput3'),
        __metadata("design:type", Object)
    ], DenunciaSegcreatePage.prototype, "fileInput3", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myvideo'),
        __metadata("design:type", Object)
    ], DenunciaSegcreatePage.prototype, "myVideo", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('select1'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["B" /* Select */])
    ], DenunciaSegcreatePage.prototype, "select1", void 0);
    DenunciaSegcreatePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-denuncia-segcreate',template:/*ion-inline-start:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\DENUNCIAS\denuncia-segcreate\denuncia-segcreate.html"*/'<ion-header>\n    <ion-navbar hideBackButton>\n      <ion-title>Ingresar reporte</ion-title>\n      <ion-buttons start>  \n\n          <button (click)="imprimir()" icon-only ion-button padding-right>\n              <ion-icon name="print"></ion-icon>\n            </button>\n\n          <button (click)="cancel()" icon-only ion-button padding-right>\n              <ion-icon name="md-close"></ion-icon>\n            </button>\n        \n      </ion-buttons>\n    </ion-navbar> \n  </ion-header>\n  <ion-content overflow-scroll="true"> \n\n  <br>\n\n    <div class="splash-info">\n        Usuario:  {{nombre}} \n    </div>\n\n    <div class="splash-info2">\n        motivo:  {{motivo2}} \n    </div>\n\n      <br> \n      \n      \n\n    <form     [formGroup]="form"   text-wrap noline>\n      <ion-list>\n             \n            \n\n        <input   type="hidden"    name="f1" [formControl]="form.controls[\'f1\']"    [(ngModel)]="f1">\n        <input type="file" accept="image/*" #fileInput1 style="visibility: hidden; height: 0px" (change)="processWebImage($event,1)" />\n        <input   type="hidden"    name="f2" [formControl]="form.controls[\'f2\']"    [(ngModel)]="f2">\n        <input type="file" accept="image/*" #fileInput2 style="visibility: hidden; height: 0px" (change)="processWebImage($event,2)" />\n   \n        <input   type="hidden"    name="f3" [formControl]="form.controls[\'f3\']"    [(ngModel)]="f3">\n        <input type="file" accept="video/mp4" #fileInput3 style="visibility: hidden; height: 0px" (change)="processWebImage($event,3)"   />\n \n        <ion-grid>  \n          <ion-row> \n            <ion-col col-4>\n              <button ion-button icon-only block color="secondary"  (click)="updateProfileImage(1)" class="btn-facebook">\n                <ion-icon name="camera"></ion-icon>\n              </button>  \n            </ion-col>\n            <ion-col col-4>\n              <button ion-button icon-only block color="secondary"  (click)="updateProfileImage(2)" class="btn-twitter">\n                <ion-icon name="camera"></ion-icon>\n              </button>\n            </ion-col>\n          \n            <ion-col col-4>\n              <button ion-button icon-only block (click)="updateProfileImage(3)" color="secondary" >\n                <ion-icon name="videocam"></ion-icon>\n              </button>\n              \n            </ion-col>\n           \n\n          </ion-row>\n        </ion-grid>\n\n   \n    \n\n  \n\n  \n           <ion-item >\n              <ion-label class="my-label18" color="secondary2"  stacked>Breve descripción del seguimiento:</ion-label>\n              <ion-textarea  (focusout)="focused($event)"  rows="4"\n                 type="text"\n                 [(ngModel)]="motivo"  \n                 [formControl]="form.controls[\'motivo\']"></ion-textarea >\n           </ion-item>   \n          \n           <ion-grid>     \n              <ion-row> \n                <ion-col col-6>\n                    <button  ion-button full color="secondary" (click)="manageGallery(1)" [disabled]="!form.valid" strong>\n                        Guardar\n                      </button>\n                    \n                </ion-col>\n                <ion-col col-6>\n                    <button  ion-button full color="danger" (click)="manageGallery(2)" [disabled]="!form.valid" strong>\n                        Solicitar Cierre\n                      </button>\n                    \n                </ion-col>\n              \n              \n               \n    \n              </ion-row>\n            </ion-grid>\n\n            \n\n    \n             \n\n            \n           <ion-row>\n             \n\n              <ion-col text-left>\n                  <img [src]="f1" class="circle-pic"  height="100 px" width="100 px">\n                </ion-col>\n\n                <ion-col text-center>\n\n                <video [hidden]="videomira" #myvideo height="300" width="300" controls></video>\n                </ion-col> \n              <ion-col text-right>\n                  <img [src]="f2"  class="circle-pic"  height="100 px" width="100 px">\n                </ion-col>\n\n               \n                \n\n            </ion-row>\n\n\n          \n  \n       </ion-list>\n  \n     \n   \n    </form>\n\n\n  </ion-content>'/*ion-inline-end:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\DENUNCIAS\denuncia-segcreate\denuncia-segcreate.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_10_angularfire2_storage__["a" /* AngularFireStorage */], __WEBPACK_IMPORTED_MODULE_9__providers_pdf_pdfx__["a" /* pdfx */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_6__providers_image_image__["a" /* ImageProvider */], __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3__providers__["d" /* NotificationProvider */], __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["F" /* ViewController */], __WEBPACK_IMPORTED_MODULE_3__providers__["a" /* Auth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */]
            //, private media: Media, private mediaCapture: MediaCapture,
        ])
    ], DenunciaSegcreatePage);
    return DenunciaSegcreatePage;
}());

//# sourceMappingURL=denuncia-segcreate.js.map

/***/ })

});
//# sourceMappingURL=162.js.map