"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[3802],{3802:(F,L,v)=>{v.r(L),v.d(L,{startTapClick:()=>b});var u=v(36499);const b=n=>{let i,o,E,d,s=10*-m,r=0;const P=n.getBoolean("animated",!0)&&n.getBoolean("rippleEffect",!0),p=new WeakMap,D=t=>{s=(0,u.q)(t),h(t)},R=()=>{clearTimeout(d),d=void 0,o&&(I(!1),o=void 0)},S=t=>{o||void 0!==i&&null!==i.parentElement||(i=void 0,g(k(t),t))},h=t=>{g(void 0,t)},g=(t,e)=>{if(t&&t===o)return;clearTimeout(d),d=void 0;const{x:l,y:a}=(0,u.p)(e);if(o){if(p.has(o))throw new Error("internal error");o.classList.contains(f)||w(o,l,a),I(!0)}if(t){const M=p.get(t);M&&(clearTimeout(M),p.delete(t));const x=T(t)?0:y;t.classList.remove(f),d=setTimeout(()=>{w(t,l,a),d=void 0},x)}o=t},w=(t,e,l)=>{r=Date.now(),t.classList.add(f);const a=P&&q(t);a&&a.addRipple&&(C(),E=a.addRipple(e,l))},C=()=>{void 0!==E&&(E.then(t=>t()),E=void 0)},I=t=>{C();const e=o;if(!e)return;const l=A-Date.now()+r;if(t&&l>0&&!T(e)){const a=setTimeout(()=>{e.classList.remove(f),p.delete(e)},A);p.set(e,a)}else e.classList.remove(f)},c=document;c.addEventListener("ionScrollStart",t=>{i=t.target,R()}),c.addEventListener("ionScrollEnd",()=>{i=void 0}),c.addEventListener("ionGestureCaptured",R),c.addEventListener("touchstart",t=>{s=(0,u.q)(t),S(t)},!0),c.addEventListener("touchcancel",D,!0),c.addEventListener("touchend",D,!0),c.addEventListener("mousedown",t=>{const e=(0,u.q)(t)-m;s<e&&S(t)},!0),c.addEventListener("mouseup",t=>{const e=(0,u.q)(t)-m;s<e&&h(t)},!0),c.addEventListener("contextmenu",t=>{h(t)},!0)},k=n=>{if(!n.composedPath)return n.target.closest(".ion-activatable");{const s=n.composedPath();for(let r=0;r<s.length-2;r++){const i=s[r];if(i.classList&&i.classList.contains("ion-activatable"))return i}}},T=n=>n.classList.contains("ion-activatable-instant"),q=n=>{if(n.shadowRoot){const s=n.shadowRoot.querySelector("ion-ripple-effect");if(s)return s}return n.querySelector("ion-ripple-effect")},f="ion-activated",y=200,A=200,m=2500}}]);