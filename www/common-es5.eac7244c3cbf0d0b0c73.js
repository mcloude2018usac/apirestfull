function asyncGeneratorStep(n,t,e,r,o,i,a){try{var c=n[i](a),u=c.value}catch(s){return void e(s)}c.done?t(u):Promise.resolve(u).then(r,o)}function _asyncToGenerator(n){return function(){var t=this,e=arguments;return new Promise((function(r,o){var i=n.apply(t,e);function a(n){asyncGeneratorStep(i,r,o,a,c,"next",n)}function c(n){asyncGeneratorStep(i,r,o,a,c,"throw",n)}a(void 0)}))}}function _defineProperty(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function _classCallCheck(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(n,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function _createClass(n,t,e){return t&&_defineProperties(n.prototype,t),e&&_defineProperties(n,e),n}(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"6i10":function(n,t,e){"use strict";e.d(t,"a",(function(){return r}));var r={bubbles:{dur:1e3,circles:9,fn:function(n,t,e){var r="".concat(n*t/e-n,"ms"),o=2*Math.PI*t/e;return{r:5,style:{top:"".concat(9*Math.sin(o),"px"),left:"".concat(9*Math.cos(o),"px"),"animation-delay":r}}}},circles:{dur:1e3,circles:8,fn:function(n,t,e){var r=t/e,o="".concat(n*r-n,"ms"),i=2*Math.PI*r;return{r:5,style:{top:"".concat(9*Math.sin(i),"px"),left:"".concat(9*Math.cos(i),"px"),"animation-delay":o}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:function(){return{r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}}}},crescent:{dur:750,circles:1,fn:function(){return{r:26,style:{}}}},dots:{dur:750,circles:3,fn:function(n,t){return{r:6,style:{left:"".concat(9-9*t,"px"),"animation-delay":-110*t+"ms"}}}},lines:{dur:1e3,lines:12,fn:function(n,t,e){return{y1:17,y2:29,style:{transform:"rotate(".concat(30*t+(t<6?180:-180),"deg)"),"animation-delay":"".concat(n*t/e-n,"ms")}}}},"lines-small":{dur:1e3,lines:12,fn:function(n,t,e){return{y1:12,y2:20,style:{transform:"rotate(".concat(30*t+(t<6?180:-180),"deg)"),"animation-delay":"".concat(n*t/e-n,"ms")}}}}}},A0kb:function(n,t,e){"use strict";e.d(t,"a",(function(){return r}));var r=function(){function n(){_classCallCheck(this,n),this.show=!1}return _createClass(n,[{key:"toggleShow",value:function(){this.show=!this.show,this.input.type=this.show?"text":"password"}}]),n}()},KwJk:function(n,t,e){"use strict";e.d(t,"a",(function(){return o})),e.d(t,"b",(function(){return i})),e.d(t,"c",(function(){return r})),e.d(t,"d",(function(){return c}));var r=function(n,t){return null!==t.closest(n)},o=function(n){return"string"==typeof n&&n.length>0?_defineProperty({"ion-color":!0},"ion-color-".concat(n),!0):void 0},i=function(n){var t={};return function(n){return void 0!==n?(Array.isArray(n)?n:n.split(" ")).filter((function(n){return null!=n})).map((function(n){return n.trim()})).filter((function(n){return""!==n})):[]}(n).forEach((function(n){return t[n]=!0})),t},a=/^[a-z][a-z0-9+\-.]*:/,c=function(){var n=_asyncToGenerator(regeneratorRuntime.mark((function n(t,e,r){var o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(null==t||"#"===t[0]||a.test(t)){n.next=4;break}if(!(o=document.querySelector("ion-router"))){n.next=4;break}return n.abrupt("return",(null!=e&&e.preventDefault(),o.push(t,r)));case 4:return n.abrupt("return",!1);case 5:case"end":return n.stop()}}),n)})));return function(t,e,r){return n.apply(this,arguments)}}()},NqGI:function(n,t,e){"use strict";e.d(t,"a",(function(){return r})),e.d(t,"b",(function(){return o}));var r=function(){var n=_asyncToGenerator(regeneratorRuntime.mark((function n(t,e,r,o,i){var a;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!t){n.next=2;break}return n.abrupt("return",t.attachViewToDom(e,r,i,o));case 2:if("string"==typeof r||r instanceof HTMLElement){n.next=4;break}throw new Error("framework delegate is missing");case 4:if(a="string"==typeof r?e.ownerDocument&&e.ownerDocument.createElement(r):r,o&&o.forEach((function(n){return a.classList.add(n)})),i&&Object.assign(a,i),e.appendChild(a),n.t0=a.componentOnReady,!n.t0){n.next=12;break}return n.next=12,a.componentOnReady();case 12:return n.abrupt("return",a);case 13:case"end":return n.stop()}}),n)})));return function(t,e,r,o,i){return n.apply(this,arguments)}}(),o=function(n,t){if(t){if(n)return n.removeViewFromDom(t.parentElement,t);t.remove()}return Promise.resolve()}},kmjp:function(n,t,e){"use strict";e.d(t,"a",(function(){return r}));var r=function(){function n(){_classCallCheck(this,n)}return _createClass(n,null,[{key:"areNotEqual",value:function(n){var t,e=!0;for(var r in n.controls)if(n.controls.hasOwnProperty(r)){var o=n.controls[r];if(void 0===t)t=o.value;else if(t!==o.value){e=!1;break}}return e?null:{areNotEqual:!0}}}]),n}()},lvGs:function(n,t,e){"use strict";e.d(t,"a",(function(){return a})),e.d(t,"b",(function(){return c}));var r=e("8Y7J"),o=e("MKJQ"),i=e("sZkV"),a=(e("A0kb"),r.wb({encapsulation:0,styles:[["[_nghost-%COMP%]{display:flex;width:100%;align-items:center}[_nghost-%COMP%]   .type-toggle[_ngcontent-%COMP%]{-webkit-padding-start:.5rem;padding-inline-start:.5rem}[_nghost-%COMP%]   .type-toggle[_ngcontent-%COMP%]   .hide-option[_ngcontent-%COMP%], [_nghost-%COMP%]   .type-toggle[_ngcontent-%COMP%]   .show-option[_ngcontent-%COMP%]{font-size:1.2rem;display:block}[_nghost-%COMP%]   .type-toggle[_ngcontent-%COMP%]   .hide-option[_ngcontent-%COMP%]:not(ion-icon), [_nghost-%COMP%]   .type-toggle[_ngcontent-%COMP%]   .show-option[_ngcontent-%COMP%]:not(ion-icon){text-transform:uppercase;font-size:1rem}"]],data:{}}));function c(n){return r.ac(0,[r.Mb(null,0),(n()(),r.yb(1,0,null,null,4,"a",[["class","type-toggle"]],null,[[null,"click"]],(function(n,t,e){var r=!0;return"click"===t&&(r=!1!==n.component.toggleShow()&&r),r}),null,null)),(n()(),r.yb(2,0,null,null,1,"ion-icon",[["class","show-option"],["name","eye-off-outline"]],[[8,"hidden",0]],null,null,o.Bb,o.v)),r.xb(3,49152,null,0,i.D,[r.h,r.l,r.z],{name:[0,"name"]},null),(n()(),r.yb(4,0,null,null,1,"ion-icon",[["class","hide-option"],["name","eye-outline"]],[[8,"hidden",0]],null,null,o.Bb,o.v)),r.xb(5,49152,null,0,i.D,[r.h,r.l,r.z],{name:[0,"name"]},null)],(function(n,t){n(t,3,0,"eye-off-outline"),n(t,5,0,"eye-outline")}),(function(n,t){var e=t.component;n(t,2,0,e.show),n(t,4,0,!e.show)}))}},xgmX:function(n,t,e){"use strict";e.d(t,"a",(function(){return u})),e.d(t,"b",(function(){return i})),e.d(t,"c",(function(){return a})),e.d(t,"d",(function(){return c})),e.d(t,"e",(function(){return o}));var r={getEngine:function(){var n=window;return n.TapticEngine||n.Capacitor&&n.Capacitor.isPluginAvailable("Haptics")&&n.Capacitor.Plugins.Haptics},available:function(){return!!this.getEngine()},isCordova:function(){return!!window.TapticEngine},isCapacitor:function(){return!!window.Capacitor},impact:function(n){var t=this.getEngine();if(t){var e=this.isCapacitor()?n.style.toUpperCase():n.style;t.impact({style:e})}},notification:function(n){var t=this.getEngine();if(t){var e=this.isCapacitor()?n.style.toUpperCase():n.style;t.notification({style:e})}},selection:function(){this.impact({style:"light"})},selectionStart:function(){var n=this.getEngine();n&&(this.isCapacitor()?n.selectionStart():n.gestureSelectionStart())},selectionChanged:function(){var n=this.getEngine();n&&(this.isCapacitor()?n.selectionChanged():n.gestureSelectionChanged())},selectionEnd:function(){var n=this.getEngine();n&&(this.isCapacitor()?n.selectionChanged():n.gestureSelectionChanged())}},o=function(){r.selection()},i=function(){r.selectionStart()},a=function(){r.selectionChanged()},c=function(){r.selectionEnd()},u=function(n){r.impact(n)}}}]);
//# sourceMappingURL=common-es5.eac7244c3cbf0d0b0c73.js.map