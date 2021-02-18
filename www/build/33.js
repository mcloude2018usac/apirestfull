webpackJsonp([33],{

/***/ 1428:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ChatMessage */
/* unused harmony export UserInfo */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng_socket_io__ = __webpack_require__(451);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng_socket_io___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng_socket_io__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ionic_img_viewer__ = __webpack_require__(450);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ChatMessage = /** @class */ (function () {
    function ChatMessage() {
    }
    return ChatMessage;
}());

var UserInfo = /** @class */ (function () {
    function UserInfo() {
    }
    return UserInfo;
}());

var ChatPage = /** @class */ (function () {
    function ChatPage(alertCtrl, imageViewerCtrl, camera, translateService, actionSheetCtrl, _IMAGE, msj, regService, toastCtrl, navParams, socket) {
        var _this = this;
        this.alertCtrl = alertCtrl;
        this.camera = camera;
        this.translateService = translateService;
        this.actionSheetCtrl = actionSheetCtrl;
        this._IMAGE = _IMAGE;
        this.msj = msj;
        this.regService = regService;
        this.toastCtrl = toastCtrl;
        this.socket = socket;
        this.msgList = [];
        this.editorMsg = '';
        this.pofilel = './assets/img/profilelocal.png';
        this.showEmojiPicker = false;
        this.conectadox1 = ''; //'No conectado...'
        this.conectadox2 = ''; //Conectado...
        this.messages = [];
        this.loading = true;
        this._imageViewerCtrl = imageViewerCtrl;
        this.conectadox = this.conectadox1;
        this.grupal = navParams.data.grupal;
        if (navParams.data.record2.toUserId) {
            this.toUser = {
                id: navParams.data.record2.toUserId,
                name: navParams.data.record2.toUserName,
                avatar: navParams.data.record2.avatar
            };
            this.user = {
                id: navParams.data.record.toUserId,
                name: navParams.data.record.toUserName,
                avatar: navParams.data.record.avatar
            };
        }
        //RESIVE TODOS LOS MENSAJES
        this.getMessages().subscribe(function (message) {
            var mm;
            mm = message;
            if (mm) {
                if (mm.from == _this.user.id) {
                    _this.conectadox = _this.conectadox2;
                    var newMsg = {
                        messageId: Date.now().toString(),
                        userId: { foto: _this.user.avatar, nombre: _this.user.name },
                        toUserId: _this.user.id,
                        messageimg: mm.messageimg,
                        //     time: Date.now(),
                        message: mm.text,
                        status: 'Leido',
                        message2: '',
                        userId2: '',
                        imagen2: _this.user.avatar
                    };
                    _this.pushNewMsg(newMsg);
                    if (!_this.showEmojiPicker) {
                        _this.messageInput.setFocus();
                    }
                }
            }
            //   this.messages.push(message);
        });
        this.getUsers().subscribe(function (data) {
            var user = data['user'];
            if (data['event'] === 'left') {
                if (user == _this.user.id) {
                    _this.conectadox = _this.conectadox1;
                }
            }
            else {
                if (user == _this.user.id) {
                    _this.conectadox = _this.conectadox2;
                }
                //this.showToast('User joined: ' + user);
            }
        });
        // Get mock user information
    }
    ChatPage.prototype.showToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 2000
        });
        toast.present();
    };
    ChatPage.prototype.presentImage = function (myImage) {
        var imageViewer = this._imageViewerCtrl.create(myImage);
        imageViewer.present();
    };
    ChatPage.prototype.getUsers = function () {
        var _this = this;
        var observable = new __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__["Observable"](function (observer) {
            _this.socket.on('users-changed', function (data) {
                observer.next(data);
            });
        });
        return observable;
    };
    ChatPage.prototype.ionViewWillLeave = function () {
        // salirse del chat
        // this.events.unsubscribe('chat:received');
        this.socket.disconnect();
    };
    ChatPage.prototype.ionViewDidEnter = function () {
        //get message list
        this.getMsg();
        // Subscribe to received  new message events
        /*
        this.events.subscribe('chat:received', msg => {
            this.pushNewMsg(msg);
        })
        */
    };
    ChatPage.prototype.onFocus = function () {
        this.showEmojiPicker = false;
        this.content.resize();
        this.scrollToBottom();
    };
    ChatPage.prototype.switchEmojiPicker = function () {
        this.showEmojiPicker = !this.showEmojiPicker;
        if (!this.showEmojiPicker) {
            this.messageInput.setFocus();
        }
        this.content.resize();
        this.scrollToBottom();
    };
    /**
     * @name getMsg
     * @returns {Promise<ChatMessage[]>}
     */
    ChatPage.prototype.getMsg = function () {
        // Get mock message list
        var _this = this;
        var self = this;
        self.loading = true;
        var qry = '';
        if (this.grupal == 'si') {
            qry = 'grupal' + '/' + this.toUser.id;
        }
        else {
            qry = this.user.id + '/' + this.toUser.id;
        }
        this.regService.getReg(qry, 'usermsgs').then(function (data) {
            _this.msgList = data;
            _this.scrollToBottom();
            self.loading = false;
        }, function (err) {
            _this.msj.showError3('Error', err.error);
        });
        //this.getMessages();
    };
    ChatPage.prototype.hilo = function (item) {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'msg',
            message: item.message,
            inputs: [
                {
                    name: 'CUI',
                    placeholder: 'Escribe respuesta al mensaje aquí'
                }
            ],
            buttons: [
                {
                    text: 'Cancelar'
                },
                {
                    text: 'Enviar',
                    handler: function (todo) {
                        if (todo) {
                            var newMsg = {
                                messageId: Date.now().toString(),
                                userId: { foto: _this.user.avatar, nombre: _this.user.name },
                                toUserId: _this.toUser.id,
                                messageimg: '',
                                //     time: Date.now(),
                                message: todo.CUI,
                                status: 'Pendiente',
                                message2: item.message,
                                userId2: item.userId.nombre,
                                imagen2: _this.user.avatar
                            };
                            _this.socket.emit('add-message', { imagen: '', text: todo.CUI, userId: _this.user.id, toUserId: _this.toUser.id, text2: item.message, userId2: item.userId.nombre, imagen2: '' });
                            _this.pushNewMsg(newMsg);
                            _this.editorMsg = '';
                            if (!_this.showEmojiPicker) {
                                _this.messageInput.setFocus();
                            }
                        }
                    }
                }
            ]
        });
        prompt.present();
    };
    ChatPage.prototype.getMessages = function () {
        var _this = this;
        var observable = new __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__["Observable"](function (observer) {
            _this.socket.on('message', function (data) {
                observer.next(data);
            });
        });
        return observable;
    };
    /**
     * @name sendMsg
     */
    ChatPage.prototype.sendMsg = function () {
        if (!this.editorMsg.trim())
            return;
        //  let newMsg: ChatMessage = {};
        var usertt;
        if (this.grupal == 'si') {
            usertt = { foto: this.user.avatar, nombre: this.user.name };
        }
        else {
            usertt = this.user.id;
        }
        var newMsg = {
            messageId: Date.now().toString(),
            userId: usertt,
            toUserId: this.toUser.id,
            messageimg: '',
            //    time: Date.now(),
            message: this.editorMsg,
            status: 'Pendiente',
            message2: '',
            userId2: '',
            imagen2: this.user.avatar
        };
        this.socket.emit('add-message', { messageimg: '', text: this.editorMsg, userId: this.user.id, toUserId: this.toUser.id, text2: '', userId2: '', imagen2: '' });
        this.pushNewMsg(newMsg);
        this.editorMsg = '';
        if (!this.showEmojiPicker) {
            this.messageInput.setFocus();
        }
    };
    ChatPage.prototype.sendMsg2 = function () {
        var newMsg = {
            messageId: Date.now().toString(),
            userId: { foto: this.user.avatar, nombre: this.user.name },
            toUserId: this.toUser.id,
            messageimg: this.image,
            //     time: Date.now(),
            message: this.editorMsg,
            status: 'Pendiente',
            message2: '',
            userId2: '',
            imagen2: this.user.avatar
        };
        //this.user.avatar
        this.socket.emit('add-message', { imagen: this.image, text: this.editorMsg, userId: this.user.id, toUserId: this.toUser.id, text2: '', userId2: '', imagen2: '' });
        this.pushNewMsg(newMsg);
        this.editorMsg = '';
        if (!this.showEmojiPicker) {
            this.messageInput.setFocus();
        }
    };
    ChatPage.prototype.updateProfileImage = function () {
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
    ChatPage.prototype.takePhotograph = function () {
        var _this = this;
        if (__WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */]['installed']()) {
            this._IMAGE
                .takePhotograph()
                .then(function (image) {
                // this.image   		= image.toString();
                _this._IMAGE.generateFromImage(_this.image, 400, 400, 0.5, function (data) {
                    _this.image = image.toString();
                    _this.sendMsg2();
                });
            })
                .catch(function (err) {
                console.log(err);
            });
        }
        else {
            this.fileInput.nativeElement.click();
        }
    };
    ChatPage.prototype.selectImage = function () {
        var _this = this;
        if (__WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */]['installed']()) {
            this._IMAGE
                .selectPhotograph()
                .then(function (image) {
                _this._IMAGE.generateFromImage(_this.image, 400, 400, 0.5, function (data) {
                    _this.image = image.toString();
                    _this.sendMsg2();
                });
            })
                .catch(function (err) {
                console.log(err);
            });
        }
        else {
            this.fileInput.nativeElement.click();
        }
    };
    ChatPage.prototype.processWebImage = function (event) {
        var _this = this;
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();
            reader.onload = function (readerEvent) {
                _this.image = readerEvent.target.result;
                _this._IMAGE.generateFromImage(_this.image, 400, 400, 0.5, function (data) {
                    _this.image = data;
                    _this.sendMsg2();
                });
            };
            reader.readAsDataURL(event.target.files[0]);
        }
    };
    /*
    
      selectImage(event : any) : void
       {
          this._IMAGES
          .selectImage(event)
          .subscribe((res) =>
          {
           //  this._PRELOADER.displayPreloader('Loading...');
             this.image = res;
             this.sendMsg2();
          });
       }
    */
    /**cc
     * @name pushNewMsg
     * @param msg
     */
    ChatPage.prototype.pushNewMsg = function (msg) {
        //  const userId = this.user.id,
        //        toUserId = this.toUser.id;
        // Verify user relationships
        this.msgList.push(msg);
        /*    if (msg.userId === userId && msg.toUserId === toUserId) {
                this.msgList.push(msg);
            } else if (msg.toUserId === userId && msg.userId === toUserId) {
                this.msgList.push(msg);
            }
          */
        this.scrollToBottom();
    };
    ChatPage.prototype.getMsgIndexById = function (id) {
        return this.msgList.findIndex(function (e) { return e.messageId === id; });
    };
    ChatPage.prototype.scrollToBottom = function () {
        var _this = this;
        setTimeout(function () {
            if (_this.content) {
                if (_this.content.scrollToBottom == null || _this.content.scrollToBottom == undefined) {
                }
                else {
                    if (_this.content == undefined) {
                    }
                    else {
                        if (_this.content.scrollToBottom) {
                            _this.content.scrollToBottom();
                        }
                    }
                }
            }
        }, 400);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('fileInput'),
        __metadata("design:type", Object)
    ], ChatPage.prototype, "fileInput", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Content */])
    ], ChatPage.prototype, "content", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('chat_input'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["C" /* TextInput */])
    ], ChatPage.prototype, "messageInput", void 0);
    ChatPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-chat',template:/*ion-inline-start:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\CHAT\chat\chat.html"*/'<ion-header>\n\n    <ion-navbar>\n        <ion-title>{{toUser.name}}  {{conectadox}}</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n  \n    <div class="message-wrap">\n\n        <div *ngIf="grupal == \'si\'" >   \n\n            <div *ngFor="let msg of msgList;let i = index;"\n            class="message"\n          [class.right]=" toUser.id === toUser.id ">\n          <img class="user-img"  (click)="hilo(msg)" [src]="msg.userId.foto" alt="" src="">\n           \n            <div class="msg-detail">   \n               <div class="msg-info">\n                               <p>  {{msg.userId.nombre}}&nbsp;&nbsp;&nbsp;<!--{{msg.time | relativeTime}}--></p>\n               </div>\n               <div *ngIf="msg.message2 !== \'\'" class="msg-content">      \n                       <div class="msg-content">\n                            <span class="triangle"></span>\n                            <p  class="line-breaker ">{{msg.message2}}</p>\n                            <div class="msg-info2">\n                                    <p>  {{msg.userId2}}&nbsp;&nbsp;&nbsp;<!--{{msg.time | relativeTime}}--></p>\n                             </div>\n                           \n                                 \n                        </div>\n\n                        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n                        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n                        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n                        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n              \n                        <br>\n                        <div >\n                   <span class="triangle"></span>\n                   <p  class="line-breaker ">{{msg.message}}</p>\n                   <img #myImage (click)="presentImage(myImage)" *ngIf="msg.messageimg" [src]="msg.messageimg">\n                </div>\n               </div>    \n\n\n               <div *ngIf="msg.message2 == \'\'" class="msg-content">      \n                 \n                     <div >\n                <span class="triangle"></span>\n                <p  class="line-breaker ">{{msg.message}}</p>\n                <img #myImage (click)="presentImage(myImage)" *ngIf="msg.messageimg" [src]="msg.messageimg">\n             </div>\n            </div>\n\n\n           </div>\n       </div>     \n        </div>\n\n        <div *ngIf="grupal == \'no\'" >\n\n            <div *ngFor="let msg of msgList;let i = index;"\n            class="message"\n            [class.left]=" msg.userId === toUser.id "\n            [class.right]=" msg.userId === user.id ">\n           \n            <div *ngIf="msg.userId === toUser.id">     \n                   <img class="user-img" *ngIf="toUser.avatar !== undefined"  [src]="toUser.avatar" alt="" src="">\n                   <img class="user-img" *ngIf="toUser.avatar == undefined"  [src]="pofilel" alt="" src="">\n               \n            </div>\n\n            <div *ngIf="msg.userId === user.id ">  \n                   <img class="user-img" *ngIf="user.avatar !== undefined"  [src]="user.avatar" alt="" src="">\n                   <img class="user-img" *ngIf="user.avatar == undefined"  [src]="pofilel" alt="" src="">\n             </div>\n           \n           \n            <div class="msg-detail">\n               <div class="msg-info">\n                       <div *ngIf="msg.userId === toUser.id">  \n                               <p>  {{toUser.name}}&nbsp;&nbsp;&nbsp;<!--{{msg.time | relativeTime}}--></p>\n                           \n                        </div>\n           \n                        <div *ngIf="msg.userId === user.id ">  \n                               <p>  {{user.name}}&nbsp;&nbsp;&nbsp;<!--{{msg.time | relativeTime}}--></p>\n                               \n                         </div>\n\n \n                 \n               </div>\n               <div class="msg-content">\n                   <span class="triangle"></span>\n                   <p class="line-breaker ">{{msg.message}}</p>\n                   <img #myImage (click)="presentImage(myImage)" *ngIf="msg.messageimg" [src]="msg.messageimg">\n               </div>\n           </div>\n       </div>\n        </div>\n\n       \n\n    </div>\n\n</ion-content>\n\n<div class="upload-button-wrapper" color="primary">\n                                \n        <input type="file" accept="image/*" \n        #fileInput style="visibility: hidden; height: 0px" \n        (change)="processWebImage($event)" />\n        \n     </div>\n\n<ion-footer no-border [style.height]="showEmojiPicker ? \'255px\' : \'55px\'">\n    <ion-grid class="input-wrap">\n        <ion-row>\n                <ion-col col-1>\n                        <button ion-button clear icon-only item-right (click)="updateProfileImage()">\n                                <ion-icon name="image"></ion-icon>\n                            </button>\n                   \n                </ion-col>\n            <ion-col col-1>\n                   \n                      \n                <button ion-button clear icon-only item-right (click)="switchEmojiPicker()">\n                    <ion-icon name="md-happy"></ion-icon>\n                </button>\n            </ion-col>\n            <ion-col col-8>\n                <ion-textarea #chat_input\n                              placeholder="Escribe un mensaje aquí"\n                              [(ngModel)]="editorMsg"\n                              (keyup.enter)="sendMsg()"\n                              (ionFocus)="onFocus()">\n                </ion-textarea>\n            </ion-col>\n            <ion-col col-2>\n                <button ion-button clear icon-only item-right (click)="sendMsg()">\n                    <ion-icon name="ios-send" ios="ios-send" md="md-send"></ion-icon>\n                </button>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n    <emoji-picker *ngIf="showEmojiPicker" [(ngModel)]="editorMsg"></emoji-picker>\n</ion-footer>\n'/*ion-inline-end:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\pages\CHAT\chat\chat.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_7_ionic_img_viewer__["a" /* ImageViewerController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_3__providers__["c" /* ImageProvider */], __WEBPACK_IMPORTED_MODULE_3__providers__["d" /* NotificationProvider */], __WEBPACK_IMPORTED_MODULE_3__providers__["a" /* Auth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["D" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5_ng_socket_io__["Socket"]])
    ], ChatPage);
    return ChatPage;
}());

//# sourceMappingURL=chat.js.map

/***/ }),

/***/ 1429:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmojiPickerComponentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__emoji_picker__ = __webpack_require__(1430);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EmojiPickerComponentModule = /** @class */ (function () {
    function EmojiPickerComponentModule() {
    }
    EmojiPickerComponentModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__emoji_picker__["a" /* EmojiPickerComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__emoji_picker__["a" /* EmojiPickerComponent */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__emoji_picker__["a" /* EmojiPickerComponent */]
            ]
        })
    ], EmojiPickerComponentModule);
    return EmojiPickerComponentModule;
}());

//# sourceMappingURL=emoji-picker.module.js.map

/***/ }),

/***/ 1430:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export EMOJI_PICKER_VALUE_ACCESSOR */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmojiPickerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_emoji__ = __webpack_require__(457);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EMOJI_PICKER_VALUE_ACCESSOR = {
    provide: __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* NG_VALUE_ACCESSOR */],
    useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return EmojiPickerComponent; }),
    multi: true
};
var EmojiPickerComponent = /** @class */ (function () {
    function EmojiPickerComponent(emojiProvider) {
        this.emojiArr = [];
        this.emojiArr = emojiProvider.getEmojis();
    }
    EmojiPickerComponent.prototype.writeValue = function (obj) {
        this._content = obj;
    };
    EmojiPickerComponent.prototype.registerOnChange = function (fn) {
        this._onChanged = fn;
        this.setValue(this._content);
    };
    EmojiPickerComponent.prototype.registerOnTouched = function (fn) {
        this._onTouched = fn;
    };
    EmojiPickerComponent.prototype.setValue = function (val) {
        this._content += val;
        if (this._content) {
            this._onChanged(this._content);
        }
    };
    EmojiPickerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'emoji-picker',
            providers: [EMOJI_PICKER_VALUE_ACCESSOR],template:/*ion-inline-start:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\components\emoji-picker\emoji-picker.html"*/'\n<div class="emoji-picker">\n  <div class="emoji-items">\n    <ion-slides pager>\n\n      <ion-slide *ngFor="let items of emojiArr">\n        <span class="emoji-item"\n              (click)="setValue(item)"\n              *ngFor="let item of items">\n          {{item}}\n        </span>\n      </ion-slide>\n\n    </ion-slides>\n  </div>\n</div>\n'/*ion-inline-end:"C:\DESARROLLO SOFTWARE\CLIENTE\USAC2020\src\components\emoji-picker\emoji-picker.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_emoji__["a" /* EmojiProvider */]])
    ], EmojiPickerComponent);
    return EmojiPickerComponent;
}());

//# sourceMappingURL=emoji-picker.js.map

/***/ }),

/***/ 988:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatPageModule", function() { return ChatPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chat__ = __webpack_require__(1428);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_emoji_picker_emoji_picker_module__ = __webpack_require__(1429);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_emoji__ = __webpack_require__(457);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



//import {RelativeTime} from "../../../pipes/relative-time";


var ChatPageModule = /** @class */ (function () {
    function ChatPageModule() {
    }
    ChatPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__chat__["a" /* ChatPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__components_emoji_picker_emoji_picker_module__["a" /* EmojiPickerComponentModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__chat__["a" /* ChatPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__chat__["a" /* ChatPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__providers_emoji__["a" /* EmojiProvider */]
            ]
        })
    ], ChatPageModule);
    return ChatPageModule;
}());

//# sourceMappingURL=chat.module.js.map

/***/ })

});
//# sourceMappingURL=33.js.map