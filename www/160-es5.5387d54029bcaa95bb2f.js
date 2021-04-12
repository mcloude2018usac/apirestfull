function _defineProperty(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function asyncGeneratorStep(n,t,e,i,a,r,o){try{var c=n[r](o),s=c.value}catch(f){return void e(f)}c.done?t(s):Promise.resolve(s).then(i,a)}function _asyncToGenerator(n){return function(){var t=this,e=arguments;return new Promise((function(i,a){var r=n.apply(t,e);function o(n){asyncGeneratorStep(r,i,a,o,c,"next",n)}function c(n){asyncGeneratorStep(r,i,a,o,c,"throw",n)}o(void 0)}))}}function _classCallCheck(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(n,t){for(var e=0;e<t.length;e++){var i=t[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}function _createClass(n,t,e){return t&&_defineProperties(n.prototype,t),e&&_defineProperties(n,e),n}(window.webpackJsonp=window.webpackJsonp||[]).push([[160],{STjf:function(n,t,e){"use strict";e.r(t),e.d(t,"ion_ripple_effect",(function(){return r}));var i=e("+9FH"),a=e("ntsc"),r=function(){function n(t){_classCallCheck(this,n),Object(i.l)(this,t),this.type="bounded"}var t;return _createClass(n,[{key:"addRipple",value:(t=_asyncToGenerator(regeneratorRuntime.mark((function n(t,e){var a=this;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",new Promise((function(n){Object(i.h)((function(){var r=a.el.getBoundingClientRect(),f=r.width,l=r.height,u=Math.sqrt(f*f+l*l),m=Math.max(l,f),d=a.unbounded?m:u+c,p=Math.floor(m*s),b=d/p,y=t-r.left,w=e-r.top;a.unbounded&&(y=.5*f,w=.5*l);var v=y-.5*p,h=w-.5*p,k=.5*f-y,g=.5*l-w;Object(i.n)((function(){var t=document.createElement("div");t.classList.add("ripple-effect");var e=t.style;e.top=h+"px",e.left=v+"px",e.width=e.height=p+"px",e.setProperty("--final-scale","".concat(b)),e.setProperty("--translate-end","".concat(k,"px, ").concat(g,"px")),(a.el.shadowRoot||a.el).appendChild(t),setTimeout((function(){n((function(){o(t)}))}),325)}))}))})));case 1:case"end":return n.stop()}}),n)}))),function(n,e){return t.apply(this,arguments)})},{key:"render",value:function(){var n,t=Object(a.b)(this);return Object(i.j)(i.b,{role:"presentation",class:(n={},_defineProperty(n,t,!0),_defineProperty(n,"unbounded",this.unbounded),n)})}},{key:"unbounded",get:function(){return"unbounded"===this.type}},{key:"el",get:function(){return Object(i.g)(this)}}]),n}(),o=function(n){n.classList.add("fade-out"),setTimeout((function(){n.remove()}),200)},c=10,s=.5;r.style=":host{left:0;right:0;top:0;bottom:0;position:absolute;contain:strict;pointer-events:none}:host(.unbounded){contain:layout size style}.ripple-effect{border-radius:50%;position:absolute;background-color:currentColor;color:inherit;contain:strict;opacity:0;-webkit-animation:225ms rippleAnimation forwards, 75ms fadeInAnimation forwards;animation:225ms rippleAnimation forwards, 75ms fadeInAnimation forwards;will-change:transform, opacity;pointer-events:none}.fade-out{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale, 1));transform:translate(var(--translate-end)) scale(var(--final-scale, 1));-webkit-animation:150ms fadeOutAnimation forwards;animation:150ms fadeOutAnimation forwards}@-webkit-keyframes rippleAnimation{from{-webkit-animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale, 1));transform:translate(var(--translate-end)) scale(var(--final-scale, 1))}}@keyframes rippleAnimation{from{-webkit-animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale, 1));transform:translate(var(--translate-end)) scale(var(--final-scale, 1))}}@-webkit-keyframes fadeInAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:0.16}}@keyframes fadeInAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:0.16}}@-webkit-keyframes fadeOutAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0.16}to{opacity:0}}@keyframes fadeOutAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0.16}to{opacity:0}}"}}]);