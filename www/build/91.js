webpackJsonp([91],{

/***/ 1105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tutor2PageModule", function() { return Tutor2PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tutor2__ = __webpack_require__(1561);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var Tutor2PageModule = /** @class */ (function () {
    function Tutor2PageModule() {
    }
    Tutor2PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__tutor2__["a" /* Tutor2Page */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__tutor2__["a" /* Tutor2Page */]), __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], Tutor2PageModule);
    return Tutor2PageModule;
}());

//# sourceMappingURL=tutor2.module.js.map

/***/ }),

/***/ 1561:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Tutor2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_services_TrackingService__ = __webpack_require__(458);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import {GoogleMap, GoogleMapsEvent, LatLng} from "@ionic-native/google-maps";


//import Tesseract from 'tesseract.js';  //ocr




var Tutor2Page = /** @class */ (function () {
    function Tutor2Page(trackingService, events, geolocation, _IMAGE, actionSheetCtrl, translateService, msj, camera, navCtrl, platform, loadingCtrl, actionsheetCtrl) {
        this.trackingService = trackingService;
        this.events = events;
        this.geolocation = geolocation;
        this._IMAGE = _IMAGE;
        this.actionSheetCtrl = actionSheetCtrl;
        this.translateService = translateService;
        this.msj = msj;
        this.camera = camera;
        this.navCtrl = navCtrl;
        this.platform = platform;
        this.loadingCtrl = loadingCtrl;
        this.actionsheetCtrl = actionsheetCtrl;
        this.polylines = [];
        this.options = {
            enableHighAccuracy: true,
            timeout: 3000,
            maximumAge: 0
        };
        this.image = '';
        this._ocrIsLoaded = false;
        this.brightness = 12;
        this.contrast = 52;
        this.unsharpMask = { radius: 100, strength: 2 };
        this.hue = -100;
        this.saturation = -100;
        this.showEditFilters = false;
        this.debugText = '';
        this.logs = [];
        this._zone = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]({ enableLongStackTrace: false });
        events.subscribe('mapa:obtener', function (rolx) {
            // this.getCurrentLocation2() 
        });
    }
    Tutor2Page.prototype.openMenu = function () {
        var _this = this;
        if (this._ocrIsLoaded === true) {
            var actionSheet = void 0;
            if (!this.image) {
                actionSheet = this.actionsheetCtrl.create({
                    title: 'Actions',
                    cssClass: 'action-sheets-basic-page',
                    buttons: [
                        {
                            text: 'Random demo',
                            icon: !this.platform.is('ios') ? 'shuffle' : null,
                            handler: function () {
                                _this.randomDemo();
                            }
                        },
                        {
                            text: 'Take Photo',
                            icon: !this.platform.is('ios') ? 'camera' : null,
                            handler: function () {
                                _this.updateProfileImage();
                            }
                        },
                        {
                            text: 'Procesar imagen actual',
                            icon: !this.platform.is('ios') ? 'camera' : null,
                            handler: function () {
                                _this.analyze(_this.demoImg.nativeElement.src, true);
                            }
                        },
                        {
                            text: 'Cancel',
                            role: 'cancel',
                            icon: !this.platform.is('ios') ? 'close' : null,
                            handler: function () {
                                console.log('Cancel clicked');
                            }
                        }
                    ]
                });
            }
            else {
                actionSheet = this.actionsheetCtrl.create({
                    title: 'Acciones',
                    cssClass: 'action-sheets-basic-page',
                    buttons: [
                        {
                            text: 'Random demo',
                            icon: !this.platform.is('ios') ? 'shuffle' : null,
                            handler: function () {
                                _this.randomDemo();
                            }
                        },
                        {
                            text: 'Re-Take photo',
                            icon: !this.platform.is('ios') ? 'camera' : null,
                            handler: function () {
                                _this.takePicture();
                            }
                        },
                        {
                            text: 'Apply filters',
                            icon: !this.platform.is('ios') ? 'barcode' : null,
                            handler: function () {
                                _this.filter();
                            }
                        },
                        {
                            text: 'Clean filters',
                            icon: !this.platform.is('ios') ? 'refresh' : null,
                            handler: function () {
                                _this.restoreImage();
                            }
                        },
                        {
                            text: this.showEditFilters == false ? 'Customize filters' : 'Hide customization filters',
                            icon: !this.platform.is('ios') ? 'hammer' : null,
                            handler: function () {
                                _this.showEditFilters = _this.showEditFilters == false ? true : false;
                            }
                        },
                        {
                            text: 'Read image',
                            icon: !this.platform.is('ios') ? 'analytics' : null,
                            handler: function () {
                                _this.analyze(_this.imageResult.nativeElement.src, false);
                            }
                        },
                        {
                            text: 'Cancel',
                            role: 'cancel',
                            icon: !this.platform.is('ios') ? 'close' : null,
                            handler: function () {
                                console.log('Cancel clicked');
                            }
                        }
                    ]
                });
            }
            actionSheet.present();
        }
        else {
            alert('OCR API is not loaded');
        }
    };
    Tutor2Page.prototype.restoreImage = function () {
        if (this.image) {
            this.imageResult.nativeElement.src = this.image;
        }
    };
    Tutor2Page.prototype.takePicture = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loader.present();
        // Take a picture saving in device, as jpg and allows edit
        this.camera.getPicture({
            quality: 100,
            destinationType: this.camera.DestinationType.NATIVE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            targetHeight: 1000,
            sourceType: 1,
            allowEdit: true,
            saveToPhotoAlbum: true,
            correctOrientation: true
        }).then(function (imageURI) {
            loader.dismissAll();
            _this.image = imageURI;
            _this.debugText = imageURI;
        }, function (err) {
            console.log("ERROR -> " + JSON.stringify(err));
        });
    };
    Tutor2Page.prototype.filter = function () {
        try {
            var canvas = window.fx.canvas();
        }
        catch (e) {
            alert(e);
            return;
        }
        var imageElem = this.imageResult.nativeElement; // another trick is acces to DOM element
        var texture = canvas.texture(imageElem);
        canvas.draw(texture)
            .hueSaturation(this.hue / 100, this.saturation / 100) //grayscale
            .unsharpMask(this.unsharpMask.radius, this.unsharpMask.strength)
            .brightnessContrast(this.brightness / 100, this.contrast / 100)
            .update();
        /// replace image src 
        imageElem.src = canvas.toDataURL('image/png');
    };
    Tutor2Page.prototype.analyze = function (image, loadAPI) {
        var loader = this.loadingCtrl.create({
            content: 'Espere un momento...'
        });
        loader.present();
        if (loadAPI == true) {
            this._ocrIsLoaded = false;
        }
        /*
        Tesseract.recognize(image, {})
          .progress((progress) => {
            this._zone.run(() => {
              loader.setContent(`${progress.status}: ${Math.floor(progress.progress * 100)}%`)
              console.log('progress:', progress);
            })
          })
          .then((tesseractResult) => {
            this._zone.run(() => {
              loader.dismissAll();
              if (loadAPI == true) {
                this._ocrIsLoaded = true;
              }
              console.log('Tesseract result: ');
              console.log(tesseractResult);
              if(tesseractResult.text)
              {
    
                this.msj.showError3('Resultado',tesseractResult.text);
              }
              else
              {
                this.msj.showError3('Resultado',tesseractResult.blocks[0].text);
    
              }
              
              if (loadAPI != true) { this.recognizedText = tesseractResult.text; }
            });
          });
          */
    };
    Tutor2Page.prototype.randomDemo = function () {
    };
    Tutor2Page.prototype.ionViewDidLoad = function () {
        console.log('loaded');
        this._ocrIsLoaded = true;
    };
    Tutor2Page.prototype.updateProfileImage = function () {
        var _this = this;
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
                        _this.takePhotograph();
                    }
                },
                {
                    text: t1,
                    handler: function () {
                        _this.selectImage();
                    }
                }
            ]
        });
        actionSheet.present();
    };
    Tutor2Page.prototype.takePhotograph = function () {
        var _this = this;
        if (__WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */]['installed']()) {
            this._IMAGE
                .takePhotograph()
                .then(function (image) {
                //          this.f1 	= image.toString();
                _this.f1 = image.toString();
                _this.demoImg.nativeElement.src = _this.f1;
                _this.analyze(_this.f1, true);
            })
                .catch(function (err) {
                console.log(err);
            });
        }
        else {
            this.fileInput.nativeElement.click();
        }
    };
    Tutor2Page.prototype.selectImage = function () {
        var _this = this;
        if (__WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */]['installed']()) {
            this._IMAGE
                .selectPhotograph()
                .then(function (image) {
                _this.f1 = image.toString();
                _this.demoImg.nativeElement.src = _this.f1;
                _this.analyze(_this.f1, true);
            })
                .catch(function (err) {
                console.log(err);
            });
        }
        else {
            this.fileInput.nativeElement.click();
        }
    };
    Tutor2Page.prototype.processWebImage = function (event) {
        var _this = this;
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();
            reader.onload = function (readerEvent) {
                _this.f1 = readerEvent.target.result;
                _this.demoImg.nativeElement.src = _this.f1;
                _this.analyze(_this.f1, true);
            };
            reader.readAsDataURL(event.target.files[0]);
        }
    };
    Tutor2Page.prototype.getCurrentLocation = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Locating...'
        });
        loading.present();
        var options = { timeout: 10000, enableHighAccuracy: true };
        var locationObs = new __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["Observable"](function (observable) {
            _this.geolocation.getCurrentPosition(options)
                .then(function (resp) {
                var lat = resp.coords.latitude;
                var lng = resp.coords.longitude;
                console.log('lat ' + lat + ' == ' + 'long ' + lng);
                _this.logs.push(lat + ' ' + lng);
                //   let location = new google.maps.LatLng(lat, lng);
                console.log('current location ' + location);
                observable.next(location);
                loading.dismiss();
                _this.events.publish('mapa:obtener', '1');
                // },
                // (err) => {
                //   console.log('Geolocation err: '+ err);
                //   loading.dismiss();
                // })
            });
        });
        return locationObs;
    };
    Tutor2Page.prototype.getCurrentLocation2 = function () {
        var _this = this;
        var options = { timeout: 50000, enableHighAccuracy: true };
        this.geolocation.getCurrentPosition(options)
            .then(function (resp) {
            var lat = resp.coords.latitude;
            var lng = resp.coords.longitude;
            console.log('lat ' + lat + ' == ' + 'long ' + lng);
            _this.logs.push(lat + ' ' + lng);
            console.log('current location ' + location);
            _this.events.publish('mapa:obtener', '1');
        });
    };
    Tutor2Page.prototype.start2 = function () {
        //  this.getCurrentLocation2();
    };
    Tutor2Page.prototype.stop = function () {
        this.watch.subscription.unsubscribe();
    };
    Tutor2Page.prototype.ngOnInit = function () {
        var _this = this;
        this.geolocation.getCurrentPosition()
            .then(function (resp) {
            var lat = resp.coords.latitude;
            var lng = resp.coords.longitude;
            _this.logs.push(lat + ' ' + lng);
        });
        this.trackingService.startTracking();
        this.trackingService.actualPosition.subscribe(function (position) {
            if (position != null) {
                //this.drawRoute(position);
                console.log(position);
                var lat = position.coords.latitude;
                var lng = position.coords.longitude;
                console.log('lat ' + lat + ' == ' + 'long ' + lng);
                _this.logs.push(lat + ' ' + lng);
                console.log('current location ' + location);
            }
        });
    };
    Tutor2Page.prototype.setMap = function () {
        // let controls: any = {compass: true, myLocationButton: false, indoorPicker: false, zoom: true, mapTypeControl: false, streetViewControl: false};
    };
    Tutor2Page.prototype.loadMap = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('imageResult'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], Tutor2Page.prototype, "imageResult", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('demoImg'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], Tutor2Page.prototype, "demoImg", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('fileInput'),
        __metadata("design:type", Object)
    ], Tutor2Page.prototype, "fileInput", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Content */])
    ], Tutor2Page.prototype, "content", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], Tutor2Page.prototype, "mapElement", void 0);
    Tutor2Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-tutor2',template:/*ion-inline-start:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\PRUEBAS\tutor2\tutor2.html"*/'<ion-header>\n    <ion-navbar [color]="\'navbarUser\'">\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n          </button>\n      <ion-title>\n      OCR\n      </ion-title>\n     \n     \n      \n    </ion-navbar>\n  \n  \n  </ion-header>\n  \n<ion-content padding>\n    <input type="file" accept="image/*" #fileInput style="visibility: hidden; height: 0px" (change)="processWebImage($event)" />\n     \n    <h3 *ngIf="debugText">Debug: {{debugText}}</h3>\n    <span>{{recognizedText}}</span>\n    <img src="assets/img/placa.png" #demoImg class="start-api" />\n    <img [src]="image" #imageResult />\n    \n    <div *ngIf="_ocrIsLoaded && !image">\n        <img src="assets/img/placa.png" #start class="start-arrow" />\n    </div>\n    <div *ngIf="image && showEditFilters">\n        <ion-list>\n            <ion-list-header>\n              Adjust Image Filters\n            </ion-list-header>\n  \n            <ion-item>\n              <ion-label>Brightness</ion-label>\n              <ion-range min="-100" max="100" pin="true" step="1" [(ngModel)]="brightness" color="secondary">\n                <ion-icon range-left small name="sunny"></ion-icon>\n                <ion-icon range-right name="sunny"></ion-icon>\n              </ion-range>\n            </ion-item>\n  \n            <ion-item>\n              <ion-label>Contrast</ion-label>\n              <ion-range min="-100" max="100" pin="true" step="1" [(ngModel)]="contrast" color="secondary">\n                <ion-icon range-left small name="contrast"></ion-icon>\n                <ion-icon range-right name="contrast"></ion-icon>\n              </ion-range>\n            </ion-item>\n  \n            <ion-item>\n              <ion-label>UnsharpMask Radius</ion-label>	\n              <ion-range min="0" max="200" pin="true" step="1" [(ngModel)]="unsharpMask.radius" color="secondary">\n                <ion-icon range-left small name="ios-radio"></ion-icon>\n                <ion-icon range-right name="ios-radio"></ion-icon>\n              </ion-range>\n            </ion-item>\n  \n            <ion-item>\n              <ion-label>UnsharpMask Strength</ion-label>\n              <ion-range min="0" max="5" step="0.5" pin="true" [(ngModel)]="unsharpMask.strength" color="secondary">\n                <ion-icon range-left small name="md-cog"></ion-icon>\n                <ion-icon range-right name="md-cog"></ion-icon>\n              </ion-range>\n            </ion-item>\n  \n            <ion-item>\n              <ion-label>Hue</ion-label>\n              <ion-range min="-100" max="100" pin="true" step="1" [(ngModel)]="hue" color="secondary">\n                <ion-icon range-left small name="md-color-palette"></ion-icon>\n                <ion-icon range-right name="md-color-palette"></ion-icon>\n              </ion-range>\n            </ion-item>\n  \n            <ion-item>\n              <ion-label>Saturation</ion-label>\n              <ion-range min="-100" max="100" pin="true" step="1" [(ngModel)]="saturation" color="secondary">\n                <ion-icon range-left small name="thermometer"></ion-icon>\n                <ion-icon range-right name="thermometer"></ion-icon>\n              </ion-range>\n            </ion-item>\n  \n          </ion-list>\n    </div>\n  \n    <ion-fab right bottom>\n      <button ion-fab (click)="openMenu()" color="danger"><ion-icon name="add"></ion-icon></button>\n    </ion-fab>\n    \n    <button ion-button full primary (click)="start2()">Start Tracking</button>\n    <button ion-button full primary (click)="stop()">Stop Tracking</button>\n\n    <div #map id="map" style="width:100%; height:100vh;">\n    </div>\n\n    \n  </ion-content>'/*ion-inline-end:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\PRUEBAS\tutor2\tutor2.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__providers_services_TrackingService__["a" /* TrackingService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_6__providers__["c" /* ImageProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_6__providers__["d" /* NotificationProvider */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["z" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]])
    ], Tutor2Page);
    return Tutor2Page;
}());

//# sourceMappingURL=tutor2.js.map

/***/ })

});
//# sourceMappingURL=91.js.map