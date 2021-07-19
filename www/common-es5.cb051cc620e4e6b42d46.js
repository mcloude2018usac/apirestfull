function asyncGeneratorStep(n,e,t,i,o,l,a){try{var r=n[l](a),u=r.value}catch(c){return void t(c)}r.done?e(u):Promise.resolve(u).then(i,o)}function _asyncToGenerator(n){return function(){var e=this,t=arguments;return new Promise((function(i,o){var l=n.apply(e,t);function a(n){asyncGeneratorStep(l,i,o,a,r,"next",n)}function r(n){asyncGeneratorStep(l,i,o,a,r,"throw",n)}a(void 0)}))}}function _defineProperty(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function _classCallCheck(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(n,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}function _createClass(n,e,t){return e&&_defineProperties(n.prototype,e),t&&_defineProperties(n,t),n}(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"6i10":function(n,e,t){"use strict";t.d(e,"a",(function(){return i}));var i={bubbles:{dur:1e3,circles:9,fn:function(n,e,t){var i="".concat(n*e/t-n,"ms"),o=2*Math.PI*e/t;return{r:5,style:{top:"".concat(9*Math.sin(o),"px"),left:"".concat(9*Math.cos(o),"px"),"animation-delay":i}}}},circles:{dur:1e3,circles:8,fn:function(n,e,t){var i=e/t,o="".concat(n*i-n,"ms"),l=2*Math.PI*i;return{r:5,style:{top:"".concat(9*Math.sin(l),"px"),left:"".concat(9*Math.cos(l),"px"),"animation-delay":o}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:function(){return{r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}}}},crescent:{dur:750,circles:1,fn:function(){return{r:26,style:{}}}},dots:{dur:750,circles:3,fn:function(n,e){return{r:6,style:{left:"".concat(9-9*e,"px"),"animation-delay":-110*e+"ms"}}}},lines:{dur:1e3,lines:12,fn:function(n,e,t){return{y1:17,y2:29,style:{transform:"rotate(".concat(30*e+(e<6?180:-180),"deg)"),"animation-delay":"".concat(n*e/t-n,"ms")}}}},"lines-small":{dur:1e3,lines:12,fn:function(n,e,t){return{y1:12,y2:20,style:{transform:"rotate(".concat(30*e+(e<6?180:-180),"deg)"),"animation-delay":"".concat(n*e/t-n,"ms")}}}}}},"99gY":function(n,e,t){"use strict";t.d(e,"a",(function(){return p}));var i=t("8Y7J"),o=t("MKJQ"),l=t("sZkV"),a=t("SVse"),r=t("fA4d"),u=t("ZtEv"),c=i["\u0275crt"]({encapsulation:0,styles:[["[_nghost-%COMP%]{--page-margin:var(--app-fair-margin);--page-background:var(--app-background);--page-swiper-pagination-space:30px;--page-swiper-pagination-height:18px;--page-pagination-bullet-size:10px;--page-options-gutter:calc(var(--page-margin)/2);--page-related-items-gutter:calc(var(--page-margin)/2);--page-color:#089bdf}.book-search-input[_ngcontent-%COMP%]{padding:6px;background:0 0;transition:top .5s ease;background:#bdbaba;border-bottom:1px solid rgba(0,0,0,.07);border-top:1px solid rgba(0,0,0,.07);margin-bottom:10px;margin-top:-1px;color:#fff;width:100%}.detail-title[_ngcontent-%COMP%]{font-size:22px;font-weight:500;color:var(--ion-color-dark-tint);margin:0;margin-bottom:calc(var(--page-margin)/2)}"]],data:{}});function s(n){return i["\u0275vid"](0,[(n()(),i["\u0275eld"](0,0,null,null,3,"ion-button",[["color","danger"],["title","Parar escaner"]],null,[[null,"click"]],(function(n,e,t){var i=!0;return"click"===e&&(i=!1!==n.component.stopScan()&&i),i}),o.ob,o.e)),i["\u0275did"](1,49152,null,0,l.l,[i.ChangeDetectorRef,i.ElementRef,i.NgZone],{color:[0,"color"]},null),(n()(),i["\u0275eld"](2,0,null,0,1,"ion-icon",[["name","stop-circle-outline"],["slot","start"]],null,null,null,o.Fb,o.v)),i["\u0275did"](3,49152,null,0,l.D,[i.ChangeDetectorRef,i.ElementRef,i.NgZone],{name:[0,"name"]},null)],(function(n,e){n(e,1,0,"danger"),n(e,3,0,"stop-circle-outline")}),null)}function d(n){return i["\u0275vid"](0,[(n()(),i["\u0275eld"](0,0,null,null,3,"ion-button",[["color","warning"],["title","Reset"]],null,[[null,"click"]],(function(n,e,t){var i=!0;return"click"===e&&(i=!1!==n.component.reset()&&i),i}),o.ob,o.e)),i["\u0275did"](1,49152,null,0,l.l,[i.ChangeDetectorRef,i.ElementRef,i.NgZone],{color:[0,"color"]},null),(n()(),i["\u0275eld"](2,0,null,0,1,"ion-icon",[["name","refresh-circle-outline"],["slot","start"]],null,null,null,o.Fb,o.v)),i["\u0275did"](3,49152,null,0,l.D,[i.ChangeDetectorRef,i.ElementRef,i.NgZone],{name:[0,"name"]},null)],(function(n,e){n(e,1,0,"warning"),n(e,3,0,"refresh-circle-outline")}),null)}function f(n){return i["\u0275vid"](0,[(n()(),i["\u0275eld"](0,0,null,null,4,"h3",[["class","detail-title"]],null,null,null,null,null)),(n()(),i["\u0275ted"](-1,null,["Monto a cobrar: "])),(n()(),i["\u0275eld"](2,0,null,null,2,"strong",[],null,null,null,null,null)),(n()(),i["\u0275ted"](3,null,[" ",""])),i["\u0275ppd"](4,2)],null,(function(n,e){var t=e.component,o=i["\u0275unv"](e,3,0,n(e,4,0,i["\u0275nov"](e.parent,0),t.monto,t.moneda));n(e,3,0,o)}))}function h(n){return i["\u0275vid"](0,[i["\u0275pid"](0,a.CurrencyPipe,[i.LOCALE_ID,i.DEFAULT_CURRENCY_CODE]),i["\u0275qud"](671088640,1,{video:0}),i["\u0275qud"](671088640,2,{canvas:0}),i["\u0275qud"](671088640,3,{fileinput:0}),i["\u0275qud"](671088640,4,{searchElementRef:0}),(n()(),i["\u0275eld"](5,0,null,null,24,"ion-header",[],null,null,null,o.Eb,o.u)),i["\u0275did"](6,49152,null,0,l.C,[i.ChangeDetectorRef,i.ElementRef,i.NgZone],{translucent:[0,"translucent"]},null),(n()(),i["\u0275eld"](7,0,null,0,22,"ion-toolbar",[["color","primary"]],null,null,null,o.sc,o.ib)),i["\u0275did"](8,49152,null,0,l.Ab,[i.ChangeDetectorRef,i.ElementRef,i.NgZone],{color:[0,"color"]},null),(n()(),i["\u0275eld"](9,0,null,0,17,"ion-buttons",[["slot","end"]],null,null,null,o.pb,o.f)),i["\u0275did"](10,49152,null,0,l.m,[i.ChangeDetectorRef,i.ElementRef,i.NgZone],null,null),(n()(),i["\u0275and"](16777216,null,0,1,null,s)),i["\u0275did"](12,16384,null,0,a.NgIf,[i.ViewContainerRef,i.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),i["\u0275and"](16777216,null,0,1,null,d)),i["\u0275did"](14,16384,null,0,a.NgIf,[i.ViewContainerRef,i.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),i["\u0275eld"](15,0,null,0,3,"ion-button",[["title","Iniciar escaner"]],null,[[null,"click"]],(function(n,e,t){var i=!0;return"click"===e&&(i=!1!==n.component.startScan()&&i),i}),o.ob,o.e)),i["\u0275did"](16,49152,null,0,l.l,[i.ChangeDetectorRef,i.ElementRef,i.NgZone],null,null),(n()(),i["\u0275eld"](17,0,null,0,1,"ion-icon",[["name","qr-code-outline"],["slot","icon-only"]],null,null,null,o.Fb,o.v)),i["\u0275did"](18,49152,null,0,l.D,[i.ChangeDetectorRef,i.ElementRef,i.NgZone],{name:[0,"name"]},null),(n()(),i["\u0275eld"](19,0,null,0,3,"ion-button",[["title","leer imagen qr de galeria"]],null,[[null,"click"]],(function(n,e,t){var i=!0;return"click"===e&&(i=!1!==n.component.captureImage()&&i),i}),o.ob,o.e)),i["\u0275did"](20,49152,null,0,l.l,[i.ChangeDetectorRef,i.ElementRef,i.NgZone],null,null),(n()(),i["\u0275eld"](21,0,null,0,1,"ion-icon",[["name","image-outline"],["slot","icon-only"]],null,null,null,o.Fb,o.v)),i["\u0275did"](22,49152,null,0,l.D,[i.ChangeDetectorRef,i.ElementRef,i.NgZone],{name:[0,"name"]},null),(n()(),i["\u0275eld"](23,0,null,0,3,"ion-button",[],null,[[null,"click"]],(function(n,e,t){var i=!0;return"click"===e&&(i=!1!==n.component.closeModal()&&i),i}),o.ob,o.e)),i["\u0275did"](24,49152,null,0,l.l,[i.ChangeDetectorRef,i.ElementRef,i.NgZone],null,null),(n()(),i["\u0275eld"](25,0,null,0,1,"ion-icon",[["name","close"],["slot","icon-only"]],null,null,null,o.Fb,o.v)),i["\u0275did"](26,49152,null,0,l.D,[i.ChangeDetectorRef,i.ElementRef,i.NgZone],{name:[0,"name"]},null),(n()(),i["\u0275eld"](27,0,null,0,2,"ion-title",[],null,null,null,o.qc,o.gb)),i["\u0275did"](28,49152,null,0,l.yb,[i.ChangeDetectorRef,i.ElementRef,i.NgZone],null,null),(n()(),i["\u0275ted"](29,0,["",""])),(n()(),i["\u0275eld"](30,0,null,null,7,"ion-content",[["class","ion-padding"]],null,null,null,o.yb,o.o)),i["\u0275did"](31,49152,null,0,l.v,[i.ChangeDetectorRef,i.ElementRef,i.NgZone],{fullscreen:[0,"fullscreen"]},null),(n()(),i["\u0275eld"](32,0,[[3,0],["fileinput",1]],0,0,"input",[["accept","image/*;capture=camera"],["hidden",""],["type","file"]],null,[[null,"change"]],(function(n,e,t){var i=!0;return"change"===e&&(i=!1!==n.component.handleFile(t.target.files)&&i),i}),null,null)),(n()(),i["\u0275eld"](33,0,null,0,0,"br",[],null,null,null,null,null)),(n()(),i["\u0275and"](16777216,null,0,1,null,f)),i["\u0275did"](35,16384,null,0,a.NgIf,[i.ViewContainerRef,i.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),i["\u0275eld"](36,0,[[1,0],["video",1]],0,0,"video",[["width","100%"]],[[8,"hidden",0]],null,null,null,null)),(n()(),i["\u0275eld"](37,0,[[2,0],["canvas",1]],0,0,"canvas",[["hidden",""]],null,null,null,null,null))],(function(n,e){var t=e.component;n(e,6,0,!0),n(e,8,0,"primary"),n(e,12,0,t.scanActive),n(e,14,0,t.scanResult),n(e,18,0,"qr-code-outline"),n(e,22,0,"image-outline"),n(e,26,0,"close"),n(e,31,0,!0),n(e,35,0,0!==t.monto)}),(function(n,e){var t=e.component;n(e,29,0,t.tituloxx),n(e,36,0,!t.scanActive)}))}var p=i["\u0275ccf"]("app-my-modalscanqr",r.a,(function(n){return i["\u0275vid"](0,[(n()(),i["\u0275eld"](0,0,null,null,1,"app-my-modalscanqr",[],null,null,null,h,c)),i["\u0275did"](1,4308992,null,0,r.a,[l.b,l.Gb,l.Eb,l.Qb,u.a,i.NgZone,l.Ib,l.Kb],null,null)],(function(n,e){n(e,1,0)}),null)}),{},{},[])},A0kb:function(n,e,t){"use strict";t.d(e,"a",(function(){return i}));var i=function(){function n(){_classCallCheck(this,n),this.show=!1}return _createClass(n,[{key:"toggleShow",value:function(){this.show=!this.show,this.input.type=this.show?"text":"password"}}]),n}()},Iab2:function(n,e,t){var i,o;void 0===(o="function"==typeof(i=function(){"use strict";function e(n,e,t){var i=new XMLHttpRequest;i.open("GET",n),i.responseType="blob",i.onload=function(){a(i.response,e,t)},i.onerror=function(){console.error("could not download file")},i.send()}function t(n){var e=new XMLHttpRequest;e.open("HEAD",n,!1);try{e.send()}catch(n){}return 200<=e.status&&299>=e.status}function i(n){try{n.dispatchEvent(new MouseEvent("click"))}catch(e){var t=document.createEvent("MouseEvents");t.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),n.dispatchEvent(t)}}var o="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof global&&global.global===global?global:void 0,l=o.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),a=o.saveAs||("object"!=typeof window||window!==o?function(){}:"download"in HTMLAnchorElement.prototype&&!l?function(n,l,a){var r=o.URL||o.webkitURL,u=document.createElement("a");u.download=l=l||n.name||"download",u.rel="noopener","string"==typeof n?(u.href=n,u.origin===location.origin?i(u):t(u.href)?e(n,l,a):i(u,u.target="_blank")):(u.href=r.createObjectURL(n),setTimeout((function(){r.revokeObjectURL(u.href)}),4e4),setTimeout((function(){i(u)}),0))}:"msSaveOrOpenBlob"in navigator?function(n,o,l){if(o=o||n.name||"download","string"!=typeof n)navigator.msSaveOrOpenBlob(function(n,e){return void 0===e?e={autoBom:!1}:"object"!=typeof e&&(console.warn("Deprecated: Expected third argument to be a object"),e={autoBom:!e}),e.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(n.type)?new Blob(["\ufeff",n],{type:n.type}):n}(n,l),o);else if(t(n))e(n,o,l);else{var a=document.createElement("a");a.href=n,a.target="_blank",setTimeout((function(){i(a)}))}}:function(n,t,i,a){if((a=a||open("","_blank"))&&(a.document.title=a.document.body.innerText="downloading..."),"string"==typeof n)return e(n,t,i);var r="application/octet-stream"===n.type,u=/constructor/i.test(o.HTMLElement)||o.safari,c=/CriOS\/[\d]+/.test(navigator.userAgent);if((c||r&&u||l)&&"undefined"!=typeof FileReader){var s=new FileReader;s.onloadend=function(){var n=s.result;n=c?n:n.replace(/^data:[^;]*;/,"data:attachment/file;"),a?a.location.href=n:location=n,a=null},s.readAsDataURL(n)}else{var d=o.URL||o.webkitURL,f=d.createObjectURL(n);a?a.location=f:location.href=f,a=null,setTimeout((function(){d.revokeObjectURL(f)}),4e4)}});o.saveAs=a.saveAs=a,n.exports=a})?i.apply(e,[]):i)||(n.exports=o)},KwJk:function(n,e,t){"use strict";t.d(e,"a",(function(){return o})),t.d(e,"b",(function(){return l})),t.d(e,"c",(function(){return i})),t.d(e,"d",(function(){return r}));var i=function(n,e){return null!==e.closest(n)},o=function(n){return"string"==typeof n&&n.length>0?_defineProperty({"ion-color":!0},"ion-color-".concat(n),!0):void 0},l=function(n){var e={};return function(n){return void 0!==n?(Array.isArray(n)?n:n.split(" ")).filter((function(n){return null!=n})).map((function(n){return n.trim()})).filter((function(n){return""!==n})):[]}(n).forEach((function(n){return e[n]=!0})),e},a=/^[a-z][a-z0-9+\-.]*:/,r=function(){var n=_asyncToGenerator(regeneratorRuntime.mark((function n(e,t,i){var o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(null==e||"#"===e[0]||a.test(e)){n.next=4;break}if(!(o=document.querySelector("ion-router"))){n.next=4;break}return n.abrupt("return",(null!=t&&t.preventDefault(),o.push(e,i)));case 4:return n.abrupt("return",!1);case 5:case"end":return n.stop()}}),n)})));return function(e,t,i){return n.apply(this,arguments)}}()},NqGI:function(n,e,t){"use strict";t.d(e,"a",(function(){return i})),t.d(e,"b",(function(){return o}));var i=function(){var n=_asyncToGenerator(regeneratorRuntime.mark((function n(e,t,i,o,l){var a;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!e){n.next=2;break}return n.abrupt("return",e.attachViewToDom(t,i,l,o));case 2:if("string"==typeof i||i instanceof HTMLElement){n.next=4;break}throw new Error("framework delegate is missing");case 4:if(a="string"==typeof i?t.ownerDocument&&t.ownerDocument.createElement(i):i,o&&o.forEach((function(n){return a.classList.add(n)})),l&&Object.assign(a,l),t.appendChild(a),n.t0=a.componentOnReady,!n.t0){n.next=12;break}return n.next=12,a.componentOnReady();case 12:return n.abrupt("return",a);case 13:case"end":return n.stop()}}),n)})));return function(e,t,i,o,l){return n.apply(this,arguments)}}(),o=function(n,e){if(e){if(n)return n.removeViewFromDom(e.parentElement,e);e.remove()}return Promise.resolve()}},XYx6:function(n,e,t){"use strict";t.d(e,"a",(function(){return i}));var i=function n(){_classCallCheck(this,n)}},fA4d:function(n,e,t){"use strict";t.d(e,"a",(function(){return a}));var i=t("mrSG"),o=(t("ZtEv"),t("7Ozu")),l=t.n(o),a=function(){function n(e,t,i,o,l,a,r,u){_classCallCheck(this,n),this.alertController=e,this.modalController=t,this.loadingCtrl=i,this.toastCtrl=o,this.authenticationService=l,this.ngZone=a,this.navParams=r,this.plt=u,this.scanActive=!1,this.scanResult=null,this.loading=null,this.title="AGM project",this.zoom=16,this.userinfo=[],this.monto=0,this.plt.is("ios")&&"standalone"in window.navigator&&window}return _createClass(n,[{key:"dismissModal",value:function(){this.modalController.dismiss({data:"close"})}},{key:"ngOnInit",value:function(){this.userinfo=this.authenticationService.getcopiauser(),this.tituloxx=this.navParams.get("title"),this.moneda=this.navParams.get("moneda"),this.monto=this.navParams.get("monto"),this.tipo=this.navParams.get("tipo")}},{key:"ngAfterViewInit",value:function(){this.canvasElement=this.canvas.nativeElement,this.canvasContext=this.canvasElement.getContext("2d"),this.videoElement=this.video.nativeElement,this.startScan()}},{key:"showQrToast",value:function(){return Object(i.a)(this,void 0,void 0,regeneratorRuntime.mark((function n(){var e=this;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.toastCtrl.create({message:"Open ".concat(this.scanResult,"?"),position:"top",buttons:[{text:"Open",handler:function(){window.open(e.scanResult,"_system","location=yes")}}]});case 2:n.sent.present();case 3:case"end":return n.stop()}}),n,this)})))}},{key:"reset",value:function(){this.scanResult=null}},{key:"stopScan",value:function(){this.scanActive=!1}},{key:"startScan",value:function(){return Object(i.a)(this,void 0,void 0,regeneratorRuntime.mark((function n(){var e;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,navigator.mediaDevices.getUserMedia({video:{facingMode:"environment"}});case 2:return e=n.sent,this.videoElement.srcObject=e,this.videoElement.setAttribute("playsinline",!0),n.next=7,this.loadingCtrl.create({});case 7:return this.loading=n.sent,n.next=10,this.loading.present();case 10:this.videoElement.play(),requestAnimationFrame(this.scan.bind(this));case 12:case"end":return n.stop()}}),n,this)})))}},{key:"scan",value:function(){return Object(i.a)(this,void 0,void 0,regeneratorRuntime.mark((function n(){var e,t;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(this.videoElement.readyState!==this.videoElement.HAVE_ENOUGH_DATA){n.next=14;break}if(n.t0=this.loading,!n.t0){n.next=7;break}return n.next=5,this.loading.dismiss();case 5:this.loading=null,this.scanActive=!0;case 7:this.canvasElement.height=this.videoElement.videoHeight,this.canvasElement.width=this.videoElement.videoWidth,this.canvasContext.drawImage(this.videoElement,0,0,this.canvasElement.width,this.canvasElement.height),e=this.canvasContext.getImageData(0,0,this.canvasElement.width,this.canvasElement.height),(t=l()(e.data,e.width,e.height,{inversionAttempts:"dontInvert"}))?(this.scanActive=!1,this.scanResult=t.data,""!==this.scanResult&&this.modalController.dismiss({data:this.scanResult})):this.scanActive&&requestAnimationFrame(this.scan.bind(this)),n.next=15;break;case 14:requestAnimationFrame(this.scan.bind(this));case 15:case"end":return n.stop()}}),n,this)})))}},{key:"captureImage",value:function(){this.fileinput.nativeElement.click()}},{key:"handleFile",value:function(n){var e=this,t=n.item(0),i=new Image;i.onload=function(){e.canvasContext.drawImage(i,0,0,e.canvasElement.width,e.canvasElement.height);var n=e.canvasContext.getImageData(0,0,e.canvasElement.width,e.canvasElement.height),t=l()(n.data,n.width,n.height,{inversionAttempts:"dontInvert"});t&&(e.scanResult=t.data,""!==e.scanResult&&e.modalController.dismiss({data:e.scanResult}))},i.src=URL.createObjectURL(t)}},{key:"closeModal",value:function(){return Object(i.a)(this,void 0,void 0,regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:this.modalController.dismiss({data:"close"});case 1:case"end":return n.stop()}}),n,this)})))}}]),n}()},kmjp:function(n,e,t){"use strict";t.d(e,"a",(function(){return i}));var i=function(){function n(){_classCallCheck(this,n)}return _createClass(n,null,[{key:"areNotEqual",value:function(n){var e,t=!0;for(var i in n.controls)if(n.controls.hasOwnProperty(i)){var o=n.controls[i];if(void 0===e)e=o.value;else if(e!==o.value){t=!1;break}}return t?null:{areNotEqual:!0}}}]),n}()},l5mm:function(n,e,t){"use strict";t.d(e,"a",(function(){return a}));var i=t("HDdC"),o=t("D0XW"),l=t("Y7HM");function a(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:o.a;return(!Object(l.a)(n)||n<0)&&(n=0),e&&"function"==typeof e.schedule||(e=o.a),new i.a((function(t){return t.add(e.schedule(r,n,{subscriber:t,counter:0,period:n})),t}))}function r(n){var e=n.subscriber,t=n.counter,i=n.period;e.next(t),this.schedule({subscriber:e,counter:t+1,period:i},i)}},lvGs:function(n,e,t){"use strict";t.d(e,"a",(function(){return a})),t.d(e,"b",(function(){return r}));var i=t("8Y7J"),o=t("MKJQ"),l=t("sZkV"),a=(t("A0kb"),i["\u0275crt"]({encapsulation:0,styles:[["[_nghost-%COMP%]{display:flex;width:100%;align-items:center}[_nghost-%COMP%]   .type-toggle[_ngcontent-%COMP%]{-webkit-padding-start:.5rem;padding-inline-start:.5rem}[_nghost-%COMP%]   .type-toggle[_ngcontent-%COMP%]   .hide-option[_ngcontent-%COMP%], [_nghost-%COMP%]   .type-toggle[_ngcontent-%COMP%]   .show-option[_ngcontent-%COMP%]{font-size:1.2rem;display:block}[_nghost-%COMP%]   .type-toggle[_ngcontent-%COMP%]   .hide-option[_ngcontent-%COMP%]:not(ion-icon), [_nghost-%COMP%]   .type-toggle[_ngcontent-%COMP%]   .show-option[_ngcontent-%COMP%]:not(ion-icon){text-transform:uppercase;font-size:1rem}"]],data:{}}));function r(n){return i["\u0275vid"](0,[i["\u0275ncd"](null,0),(n()(),i["\u0275eld"](1,0,null,null,4,"a",[["class","type-toggle"]],null,[[null,"click"]],(function(n,e,t){var i=!0;return"click"===e&&(i=!1!==n.component.toggleShow()&&i),i}),null,null)),(n()(),i["\u0275eld"](2,0,null,null,1,"ion-icon",[["class","show-option"],["name","eye-off-outline"]],[[8,"hidden",0]],null,null,o.Fb,o.v)),i["\u0275did"](3,49152,null,0,l.D,[i.ChangeDetectorRef,i.ElementRef,i.NgZone],{name:[0,"name"]},null),(n()(),i["\u0275eld"](4,0,null,null,1,"ion-icon",[["class","hide-option"],["name","eye-outline"]],[[8,"hidden",0]],null,null,o.Fb,o.v)),i["\u0275did"](5,49152,null,0,l.D,[i.ChangeDetectorRef,i.ElementRef,i.NgZone],{name:[0,"name"]},null)],(function(n,e){n(e,3,0,"eye-off-outline"),n(e,5,0,"eye-outline")}),(function(n,e){var t=e.component;n(e,2,0,t.show),n(e,4,0,!t.show)}))}},xgmX:function(n,e,t){"use strict";t.d(e,"a",(function(){return u})),t.d(e,"b",(function(){return l})),t.d(e,"c",(function(){return a})),t.d(e,"d",(function(){return r})),t.d(e,"e",(function(){return o}));var i={getEngine:function(){var n=window;return n.TapticEngine||n.Capacitor&&n.Capacitor.isPluginAvailable("Haptics")&&n.Capacitor.Plugins.Haptics},available:function(){return!!this.getEngine()},isCordova:function(){return!!window.TapticEngine},isCapacitor:function(){return!!window.Capacitor},impact:function(n){var e=this.getEngine();if(e){var t=this.isCapacitor()?n.style.toUpperCase():n.style;e.impact({style:t})}},notification:function(n){var e=this.getEngine();if(e){var t=this.isCapacitor()?n.style.toUpperCase():n.style;e.notification({style:t})}},selection:function(){this.impact({style:"light"})},selectionStart:function(){var n=this.getEngine();n&&(this.isCapacitor()?n.selectionStart():n.gestureSelectionStart())},selectionChanged:function(){var n=this.getEngine();n&&(this.isCapacitor()?n.selectionChanged():n.gestureSelectionChanged())},selectionEnd:function(){var n=this.getEngine();n&&(this.isCapacitor()?n.selectionChanged():n.gestureSelectionChanged())}},o=function(){i.selection()},l=function(){i.selectionStart()},a=function(){i.selectionChanged()},r=function(){i.selectionEnd()},u=function(n){i.impact(n)}}}]);