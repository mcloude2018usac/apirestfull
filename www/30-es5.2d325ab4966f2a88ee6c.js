function asyncGeneratorStep(e,t,n,r,o,a,i){try{var u=e[a](i),c=u.value}catch(s){return void n(s)}u.done?t(c):Promise.resolve(c).then(r,o)}function _asyncToGenerator(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var a=e.apply(t,n);function i(e){asyncGeneratorStep(a,r,o,i,u,"next",e)}function u(e){asyncGeneratorStep(a,r,o,i,u,"throw",e)}i(void 0)}))}}(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{ykg1:function(e,t,n){"use strict";n.r(t),n.d(t,"startInputShims",(function(){return d}));var r=n("gHap"),o=new WeakMap,a=function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;o.has(e)!==n&&(n?u(e,t,r):c(e,t))},i=function(e){return e===e.getRootNode().activeElement},u=function(e,t,n){var r=t.parentNode,a=t.cloneNode(!1);a.classList.add("cloned-input"),a.tabIndex=-1,r.appendChild(a),o.set(e,a);var i="rtl"===e.ownerDocument.dir?9999:-9999;e.style.pointerEvents="none",t.style.transform="translate3d(".concat(i,"px,").concat(n,"px,0) scale(0)")},c=function(e,t){var n=o.get(e);n&&(o.delete(e),n.remove()),e.style.pointerEvents="",t.style.transform=""},s="input, textarea, [no-blur]",l=function(e,t){if("INPUT"===e.tagName&&!(e.parentElement&&"ION-INPUT"===e.parentElement.tagName||e.parentElement&&e.parentElement.parentElement&&"ION-SEARCHBAR"===e.parentElement.parentElement.tagName)){var n=e.closest("ion-content");if(null!==n){var r=n.$ionPaddingTimer;r&&clearTimeout(r),t>0?n.style.setProperty("--keyboard-offset","".concat(t,"px")):n.$ionPaddingTimer=setTimeout((function(){n.style.setProperty("--keyboard-offset","0px")}),120)}}},d=function(e){var t=document,n=e.getNumber("keyboardHeight",290),o=e.getBoolean("scrollAssist",!0),u=e.getBoolean("hideCaretOnScroll",!0),c=e.getBoolean("inputBlurring",!0),d=e.getBoolean("scrollPadding",!0),f=Array.from(t.querySelectorAll("ion-input, ion-textarea")),p=new WeakMap,v=new WeakMap,m=function(){var e=_asyncToGenerator(regeneratorRuntime.mark((function e(t){var c,s,l,d,f,m;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=t.componentOnReady,!e.t0){e.next=4;break}return e.next=4,t.componentOnReady();case 4:c=t.shadowRoot||t,s=c.querySelector("input")||c.querySelector("textarea"),l=t.closest("ion-content"),d=l?null:t.closest("ion-footer"),s&&(l&&u&&!p.has(t)&&(f=function(e,t,n){if(!n||!t)return function(){};var r=function(n){i(t)&&a(e,t,n)},o=function(){return a(e,t,!1)},u=function(){return r(!0)},c=function(){return r(!1)};return n.addEventListener("ionScrollStart",u),n.addEventListener("ionScrollEnd",c),t.addEventListener("blur",o),function(){n.removeEventListener("ionScrollStart",u),n.removeEventListener("ionScrollEnd",c),t.addEventListener("ionBlur",o)}}(t,s,l),p.set(t,f)),(l||d)&&o&&!v.has(t)&&(m=function(e,t,n,o,u){var c,s=function(e){c=Object(r.k)(e)},l=function(s){if(c){var l,d=Object(r.k)(s);(function(e,t,n){if(t&&n){var r=t.x-n.x,o=t.y-n.y;return r*r+o*o>36}return!1})(0,c,d)||i(t)||(s.preventDefault(),s.stopPropagation(),(l=_asyncToGenerator(regeneratorRuntime.mark((function e(t,n,r,o,i){var u,c,s,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r||o){e.next=2;break}return e.abrupt("return");case 2:if(u=function(e,t,n){return function(e,t,n,r){var o=e.top,a=e.bottom,i=t.top,u=i+15,c=.5*Math.min(t.bottom,r-n)-a,s=u-o,l=Math.round(c<0?-c:s>0?-s:0),d=Math.min(l,o-i),f=Math.abs(d);return{scrollAmount:d,scrollDuration:Math.min(400,Math.max(150,f/.3)),scrollPadding:n,inputSafeY:4-(o-u)}}((e.closest("ion-item,[ion-item]")||e).getBoundingClientRect(),t.getBoundingClientRect(),n,e.ownerDocument.defaultView.innerHeight)}(t,r||o,i),!(r&&Math.abs(u.scrollAmount)<4)){e.next=7;break}n.focus(),e.next=16;break;case 7:if(a(t,n,!0,u.inputSafeY),n.focus(),"undefined"==typeof window){e.next=16;break}if(s=function(){var e=_asyncToGenerator(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0!==c&&clearTimeout(c),window.removeEventListener("ionKeyboardDidShow",s),e.t0=r,!e.t0){e.next=6;break}return e.next=6,r.scrollByPoint(0,u.scrollAmount,u.scrollDuration);case 6:a(t,n,!1,u.inputSafeY),n.focus();case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),!r){e.next=15;break}return e.next=12,r.getScrollElement();case 12:if(l=e.sent,!(u.scrollAmount>l.scrollHeight-l.clientHeight-l.scrollTop)){e.next=15;break}return e.abrupt("return",(window.addEventListener("ionKeyboardDidShow",s),void(c=setTimeout(s,1e3))));case 15:s();case 16:case"end":return e.stop()}}),e)}))),function(e,t,n,r,o){return l.apply(this,arguments)})(e,t,n,o,u))}};return e.addEventListener("touchstart",s,!0),e.addEventListener("touchend",l,!0),function(){e.removeEventListener("touchstart",s,!0),e.removeEventListener("touchend",l,!0)}}(t,s,l,d,n),v.set(t,m)));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();c&&function(){var e=!0,t=!1,n=document;n.addEventListener("ionScrollStart",(function(){t=!0})),n.addEventListener("focusin",(function(){e=!0}),!0),n.addEventListener("touchend",(function(r){if(t)t=!1;else{var o=n.activeElement;if(o&&!o.matches(s)){var a=r.target;a!==o&&(a.matches(s)||a.closest(s)||(e=!1,setTimeout((function(){e||o.blur()}),50)))}}}),!1)}(),d&&function(e){var t=document;t.addEventListener("focusin",(function(t){l(t.target,e)})),t.addEventListener("focusout",(function(e){l(e.target,0)}))}(n);for(var g=0,h=f;g<h.length;g++){var y=h[g];m(y)}t.addEventListener("ionInputDidLoad",(function(e){m(e.detail)})),t.addEventListener("ionInputDidUnload",(function(e){!function(e){if(u){var t=p.get(e);t&&t(),p.delete(e)}if(o){var n=v.get(e);n&&n(),v.delete(e)}}(e.detail)}))}}}]);