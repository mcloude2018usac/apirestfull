function asyncGeneratorStep(e,n,t,r,o,a,i){try{var c=e[a](i),s=c.value}catch(u){return void t(u)}c.done?n(s):Promise.resolve(s).then(r,o)}function _asyncToGenerator(e){return function(){var n=this,t=arguments;return new Promise((function(r,o){var a=e.apply(n,t);function i(e){asyncGeneratorStep(a,r,o,i,c,"next",e)}function c(e){asyncGeneratorStep(a,r,o,i,c,"throw",e)}i(void 0)}))}}function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,n,t){return n&&_defineProperties(e.prototype,n),t&&_defineProperties(e,t),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[198],{cJxf:function(e,n,t){"use strict";t.r(n),t.d(n,"pwa_camera_modal",(function(){return o}));var r=t("At8z"),o=function(){function e(n){_classCallCheck(this,e),Object(r.h)(this,n),this.onPhoto=Object(r.d)(this,"onPhoto",7),this.noDeviceError=Object(r.d)(this,"noDeviceError",7)}var n,t;return _createClass(e,[{key:"present",value:(t=_asyncToGenerator(regeneratorRuntime.mark((function e(){var n,t=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(n=document.createElement("pwa-camera-modal-instance")).addEventListener("onPhoto",function(){var e=_asyncToGenerator(regeneratorRuntime.mark((function e(n){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t._modal&&t.onPhoto.emit(n.detail);case 1:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()),n.addEventListener("noDeviceError",function(){var e=_asyncToGenerator(regeneratorRuntime.mark((function e(n){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.noDeviceError.emit(n);case 1:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()),document.body.append(n),this._modal=n;case 2:case"end":return e.stop()}}),e,this)}))),function(){return t.apply(this,arguments)})},{key:"dismiss",value:(n=_asyncToGenerator(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this._modal&&(this._modal&&this._modal.parentNode.removeChild(this._modal),this._modal=null);case 1:case"end":return e.stop()}}),e,this)}))),function(){return n.apply(this,arguments)})},{key:"render",value:function(){return Object(r.g)("div",null)}}],[{key:"style",get:function(){return":host{z-index:1000;position:fixed;top:0;left:0;width:100%;height:100%;contain:strict}.wrapper,:host{display:-ms-flexbox;display:flex}.wrapper{-ms-flex:1;flex:1;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;background-color:rgba(0,0,0,.15)}.content{-webkit-box-shadow:0 0 5px rgba(0,0,0,.2);box-shadow:0 0 5px rgba(0,0,0,.2);width:600px;height:600px}"}}]),e}()}}]);