webpackJsonp([37],{

/***/ 1132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TutorialPageModule", function() { return TutorialPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tutorial__ = __webpack_require__(1588);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var TutorialPageModule = /** @class */ (function () {
    function TutorialPageModule() {
    }
    TutorialPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__tutorial__["a" /* TutorialPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__tutorial__["a" /* TutorialPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__tutorial__["a" /* TutorialPage */]
            ]
        })
    ], TutorialPageModule);
    return TutorialPageModule;
}());

//# sourceMappingURL=tutorial.module.js.map

/***/ }),

/***/ 1588:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TutorialPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages__ = __webpack_require__(455);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TutorialPage = /** @class */ (function () {
    //	@ViewChild('slides') slides: Slides;
    function TutorialPage(viewCtrl, storage, navCtrl, menu, translate, platform) {
        var _this = this;
        this.viewCtrl = viewCtrl;
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.menu = menu;
        this.platform = platform;
        this.showSkip = true;
        this.dir = 'ltr';
        this.estilomenu = '';
        this.tiposus = [];
        this.dir = platform.dir();
        translate.get('APPX').subscribe(function (value) {
            _this.estilomenu = value;
            if (value == 'WebApp Usacenlinea') {
                translate.get(["TUTORIAL_SLIDE1_TITLE",
                    "TUTORIAL_SLIDE1_DESCRIPTION",
                    "TUTORIAL_SLIDE2_TITLE",
                    "TUTORIAL_SLIDE2_DESCRIPTION",
                    "TUTORIAL_SLIDE3_TITLE",
                    "TUTORIAL_SLIDE3_DESCRIPTION",
                ]).subscribe(function (values) {
                    console.log('Loaded values', values);
                    _this.slides = [
                        {
                            title: values.TUTORIAL_SLIDE1_TITLE,
                            description: values.TUTORIAL_SLIDE1_DESCRIPTION,
                            image: 'assets/img/ica-slidebox-img-1.png',
                        },
                        {
                            title: values.TUTORIAL_SLIDE2_TITLE,
                            description: values.TUTORIAL_SLIDE2_DESCRIPTION,
                            image: 'assets/img/ica-slidebox-img-2.png',
                        },
                        {
                            title: values.TUTORIAL_SLIDE3_TITLE,
                            description: values.TUTORIAL_SLIDE3_DESCRIPTION,
                            image: 'assets/img/ica-slidebox-img-3.png',
                        }
                    ];
                });
            }
            else {
                translate.get(["TUTORIAL_SLIDE1a_TITLE",
                    "TUTORIAL_SLIDE1a_DESCRIPTION",
                    "TUTORIAL_SLIDE2a_TITLE",
                    "TUTORIAL_SLIDE2a_DESCRIPTION",
                    "TUTORIAL_SLIDE3a_TITLE",
                    "TUTORIAL_SLIDE3a_DESCRIPTION",
                ]).subscribe(function (values) {
                    console.log('Loaded values', values);
                    _this.slides = [
                        {
                            title: values.TUTORIAL_SLIDE1_TITLE,
                            description: values.TUTORIAL_SLIDE1_DESCRIPTION,
                            image: 'assets/img/ica-slidebox-img-1.png',
                        },
                        {
                            title: values.TUTORIAL_SLIDE2_TITLE,
                            description: values.TUTORIAL_SLIDE2_DESCRIPTION,
                            image: 'assets/img/ica-slidebox-img-2.png',
                        },
                        {
                            title: values.TUTORIAL_SLIDE3_TITLE,
                            description: values.TUTORIAL_SLIDE3_DESCRIPTION,
                            image: 'assets/img/ica-slidebox-img-3.png',
                        }
                    ];
                });
            }
        });
    }
    TutorialPage.prototype.startApp = function () {
        this.storage.set('hasSeenTutorial', 'false');
        // this.navCtrl.enable(true);
        if (this.estilomenu != 'WebApp Usacenlinea') {
            //  this.rootPageParams = {uno: "Tab5Root", dos: "Tab5Root" }
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages__["c" /* MainPage */], { uno: "Tab5Root", dos: "Tab5Root" }, { animate: true, direction: 'forward' });
        }
        else {
            if (this.rol == 'lluviaideas') {
                //   this.rootPageParams = {uno: "Tab4Root", dos: "Tab4Root" }
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages__["c" /* MainPage */], { uno: "Tab4Root", dos: "Tab4Root" }, { animate: true, direction: 'forward' });
            }
            else {
                //   this.rootPageParams = {uno: "Tab1Root", dos: "Tab3Root" }
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages__["c" /* MainPage */], { uno: "Tab1Root", dos: "Tab3Root" }, { animate: true, direction: 'forward' });
            }
        }
        // this.navCtrl.setRoot(MainPage, {uno: "Tab1Root", dos: "Tab3Root" }, { animate: true, direction: 'forward'  });
        //this.viewCtrl.dismiss();
    };
    TutorialPage.prototype.onSlideChangeStart = function (slider) {
        this.showSkip = !slider.isEnd();
    };
    TutorialPage.prototype.ionViewWillEnter = function () {
        // this.slides.update();
    };
    TutorialPage.prototype.ionViewDidEnter = function () {
        // the root left menu should be disabled on the tutorial page
        // this.menu.enable(false);
    };
    TutorialPage.prototype.ionViewWillLeave = function () {
        // enable the root left menu when leaving the tutorial page
        //this.menu.enable(false);
    };
    TutorialPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.storage.get('tiposus').then(function (value) {
            _this.tiposus = value.split(',');
            _this.rol = _this.tiposus[6];
        });
    };
    TutorialPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-tutorial',template:/*ion-inline-start:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\tutorial\tutorial.html"*/'<ion-header no-shadow>\n  <ion-navbar>\n    <ion-buttons end *ngIf="showSkip">\n      <button ion-button (click)="startApp()" color="primary">{{ \'TUTORIAL_SKIP_BUTTON\' | translate}}</button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content no-bounce>\n  <ion-slides pager="true" dir="{{dir}}" (ionSlideWillChange)="onSlideChangeStart($event)">\n    <ion-slide *ngFor="let slide of slides" text-wrap>\n      <img [src]="slide.image" class="slide-image" />\n      <h2 class="slide-title" [innerHTML]="slide.title"></h2>\n      <p [innerHTML]="slide.description"></p>\n    </ion-slide>\n    <ion-slide>\n      <img src="assets/img/ica-slidebox-img-4.png" class="slide-image" />\n      <h2 class="slide-title">{{ \'TUTORIAL_SLIDE4_TITLE\' | translate }}</h2>\n      <button ion-button icon-end large clear (click)="startApp()">\n        {{ \'TUTORIAL_CONTINUE_BUTTON\' | translate }}\n        <ion-icon name="arrow-forward"></ion-icon>\n      </button>\n    </ion-slide>\n  </ion-slides>\n</ion-content>\n'/*ion-inline-end:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\tutorial\tutorial.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["F" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* MenuController */], __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["z" /* Platform */]])
    ], TutorialPage);
    return TutorialPage;
}());

//# sourceMappingURL=tutorial.js.map

/***/ })

});
//# sourceMappingURL=37.js.map