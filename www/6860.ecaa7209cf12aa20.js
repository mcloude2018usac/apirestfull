"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6860],{63814:(E,M,p)=>{p.d(M,{B:()=>e});var x=p(70655),w=p(47423),y=p(96090),o=p(5e3),g=p(23349);const t=["search"];let e=(()=>{class i{constructor(s,a,r){this.modalController=s,this.ngZone=a,this.navParams=r,this.title="AGM project",this.zoom=16}dismissModal(){this.modalController.dismiss("close")}dadireccion(){this.modalController.dismiss({direccion:this.address,la:this.latitude,lo:this.longitude})}ngOnInit(){this.uubx=this.navParams.get("uubx")}loadMap(){}clearWatch(){null!=this.watchId&&y.b.clearWatch({id:this.watchId})}setCurrentLocationa33(){if(w.dV.isPluginAvailable("Geolocation"))try{this.watchId=y.b.watchPosition({timeout:1e3,enableHighAccuracy:!0,maximumAge:1e3},(s,a)=>{s&&(this.latitude=s.coords.latitude,this.longitude=s.coords.longitude)})}catch(s){console.error(s)}}setCurrentLocationa(){try{this.watchId=y.b.watchPosition({timeout:1e3,enableHighAccuracy:!0,maximumAge:1e3},(s,a)=>{s&&(this.latitude=s.coords.latitude,this.longitude=s.coords.longitude,this.getAddress(this.latitude,this.longitude))})}catch(s){console.error(s)}}setCurrentLocation2a(){if(w.dV.isPluginAvailable("Geolocation"))try{this.watchId=y.b.watchPosition({timeout:1e3,enableHighAccuracy:!0,maximumAge:1e3},(s,a)=>{this.latitude=Number(this.uubx.substring(this.uubx.indexOf("{")+1,this.uubx.indexOf("\xb0"))),this.longitude=Number(this.uubx.substring(this.uubx.indexOf("\xb0")+1,this.uubx.indexOf("}"))),0!==this.latitude&&this.latitude&&this.getAddress(this.latitude,this.longitude)})}catch(s){console.error(s)}}markerDragEnd(s){0!==this.latitude&&this.latitude&&(this.latitude=s.coords.lat,this.longitude=s.coords.lng,this.getAddress(this.latitude,this.longitude))}getAddress(s,a){this.geoCoder.geocode({location:{lat:s,lng:a}},(r,c)=>{"OK"===c?r[0]?this.address=r[0].formatted_address:window.alert("No results found"):window.alert("Geocoder failed due to: "+c)})}closeModal(){return(0,x.mG)(this,void 0,void 0,function*(){this.modalController.dismiss("close")})}}return i.\u0275fac=function(s){return new(s||i)(o.Y36(g.IN),o.Y36(o.R0b),o.Y36(g.X1))},i.\u0275cmp=o.Xpm({type:i,selectors:[["app-my-modal"]],viewQuery:function(s,a){if(1&s&&o.Gf(t,5),2&s){let r;o.iGM(r=o.CRH())&&(a.searchElementRef=r.first)}},decls:19,vars:6,consts:[[3,"translucent"],["color","primary"],["shape","round","color","dark",3,"click"],["slot","start","name","locate"],["collapse","true","slot","end"],[3,"click"],["slot","icon-only","name","close"],["size","small"],[1,"ion-padding",3,"fullscreen"],["id","book-search-input","role","search"],["type","text","placeholder","Ingrese direcci\xf3n","autocorrect","off","autocapitalize","off","spellcheck","off","type","text",1,"book-search-input","native-input","sc-ion-input-ios",3,"keydown.enter"],["search",""],["type","submit","expand","block",1,"login-btn",3,"click"]],template:function(s,a){1&s&&(o.TgZ(0,"ion-header",0),o.TgZ(1,"ion-toolbar",1),o.TgZ(2,"ion-button",2),o.NdJ("click",function(){return a.loadMap()}),o._UZ(3,"ion-icon",3),o._uU(4," Ubicaci\xf3n "),o.qZA(),o.TgZ(5,"ion-buttons",4),o.TgZ(6,"ion-button",5),o.NdJ("click",function(){return a.closeModal()}),o._UZ(7,"ion-icon",6),o.qZA(),o.qZA(),o.TgZ(8,"ion-title",7),o._uU(9),o.qZA(),o.qZA(),o.qZA(),o.TgZ(10,"ion-content",8),o._uU(11),o.TgZ(12,"div",9),o.TgZ(13,"input",10,11),o.NdJ("keydown.enter",function(c){return c.preventDefault()}),o.qZA(),o.qZA(),o.TgZ(15,"h5"),o._uU(16),o.qZA(),o.TgZ(17,"ion-button",12),o.NdJ("click",function(){return a.dadireccion()}),o._uU(18,"Seleccionar"),o.qZA(),o.qZA()),2&s&&(o.Q6J("translucent",!0),o.xp6(9),o.Oqu(a.tituloxx),o.xp6(1),o.Q6J("fullscreen",!0),o.xp6(1),o.AsE("\n",a.latitude,", ",a.longitude," "),o.xp6(5),o.hij("Direcci\xf3n: ",a.address,""))},directives:[g.Gu,g.sr,g.YG,g.gu,g.Sm,g.wd,g.W2],styles:[".book-search-input[_ngcontent-%COMP%]{padding:6px;background:0 0;transition:top .5s ease;background:#bdbaba;border-bottom:1px solid rgba(0,0,0,.07);border-top:1px solid rgba(0,0,0,.07);margin-bottom:10px;margin-top:-1px;color:#fff;width:100%}"]}),i})()},24171:(E,M,p)=>{p.d(M,{Z:()=>o});class x{constructor(t,e,i,n){if(isNaN(t)||isNaN(e))throw new Error(`Point is invalid: (${t}, ${e})`);this.x=+t,this.y=+e,this.pressure=i||0,this.time=n||Date.now()}distanceTo(t){return Math.sqrt(Math.pow(this.x-t.x,2)+Math.pow(this.y-t.y,2))}equals(t){return this.x===t.x&&this.y===t.y&&this.pressure===t.pressure&&this.time===t.time}velocityFrom(t){return this.time!==t.time?this.distanceTo(t)/(this.time-t.time):0}}class w{constructor(t,e,i,n,s,a){this.startPoint=t,this.control2=e,this.control1=i,this.endPoint=n,this.startWidth=s,this.endWidth=a}static fromPoints(t,e){const i=this.calculateControlPoints(t[0],t[1],t[2]).c2,n=this.calculateControlPoints(t[1],t[2],t[3]).c1;return new w(t[1],i,n,t[2],e.start,e.end)}static calculateControlPoints(t,e,i){const n=t.x-e.x,s=t.y-e.y,a=e.x-i.x,r=e.y-i.y,c_x=(t.x+e.x)/2,c_y=(t.y+e.y)/2,l_x=(e.x+i.x)/2,l_y=(e.y+i.y)/2,d=Math.sqrt(n*n+s*s),u=Math.sqrt(a*a+r*r),m=u/(d+u),v=e.x-(l_x+(c_x-l_x)*m),b=e.y-(l_y+(c_y-l_y)*m);return{c1:new x(c_x+v,c_y+b),c2:new x(l_x+v,l_y+b)}}length(){let i,n,e=0;for(let s=0;s<=10;s+=1){const a=s/10,r=this.point(a,this.startPoint.x,this.control1.x,this.control2.x,this.endPoint.x),c=this.point(a,this.startPoint.y,this.control1.y,this.control2.y,this.endPoint.y);if(s>0){const l=r-i,d=c-n;e+=Math.sqrt(l*l+d*d)}i=r,n=c}return e}point(t,e,i,n,s){return e*(1-t)*(1-t)*(1-t)+3*i*(1-t)*(1-t)*t+3*n*(1-t)*t*t+s*t*t*t}}class o extends EventTarget{constructor(t,e={}){super(),this.canvas=t,this.options=e,this._handleMouseDown=i=>{1===i.buttons&&(this._drawningStroke=!0,this._strokeBegin(i))},this._handleMouseMove=i=>{this._drawningStroke&&this._strokeMoveUpdate(i)},this._handleMouseUp=i=>{1===i.buttons&&this._drawningStroke&&(this._drawningStroke=!1,this._strokeEnd(i))},this._handleTouchStart=i=>{i.preventDefault(),1===i.targetTouches.length&&this._strokeBegin(i.changedTouches[0])},this._handleTouchMove=i=>{i.preventDefault(),this._strokeMoveUpdate(i.targetTouches[0])},this._handleTouchEnd=i=>{i.target===this.canvas&&(i.preventDefault(),this._strokeEnd(i.changedTouches[0]))},this._handlePointerStart=i=>{this._drawningStroke=!0,i.preventDefault(),this._strokeBegin(i)},this._handlePointerMove=i=>{this._drawningStroke&&(i.preventDefault(),this._strokeMoveUpdate(i))},this._handlePointerEnd=i=>{this._drawningStroke=!1,i.target===this.canvas&&(i.preventDefault(),this._strokeEnd(i))},this.velocityFilterWeight=e.velocityFilterWeight||.7,this.minWidth=e.minWidth||.5,this.maxWidth=e.maxWidth||2.5,this.throttle="throttle"in e?e.throttle:16,this.minDistance="minDistance"in e?e.minDistance:5,this.dotSize=e.dotSize||0,this.penColor=e.penColor||"black",this.backgroundColor=e.backgroundColor||"rgba(0,0,0,0)",this._strokeMoveUpdate=this.throttle?function(g,t=250){let n,s,a,e=0,i=null;const r=()=>{e=Date.now(),i=null,n=g.apply(s,a),i||(s=null,a=[])};return function(...l){const d=Date.now(),u=t-(d-e);return s=this,a=l,u<=0||u>t?(i&&(clearTimeout(i),i=null),e=d,n=g.apply(s,a),i||(s=null,a=[])):i||(i=window.setTimeout(r,u)),n}}(o.prototype._strokeUpdate,this.throttle):o.prototype._strokeUpdate,this._ctx=t.getContext("2d"),this.clear(),this.on()}clear(){const{_ctx:t,canvas:e}=this;t.fillStyle=this.backgroundColor,t.clearRect(0,0,e.width,e.height),t.fillRect(0,0,e.width,e.height),this._data=[],this._reset(),this._isEmpty=!0}fromDataURL(t,e={}){return new Promise((i,n)=>{const s=new Image,a=e.ratio||window.devicePixelRatio||1,r=e.width||this.canvas.width/a,c=e.height||this.canvas.height/a,l=e.xOffset||0,d=e.yOffset||0;this._reset(),s.onload=()=>{this._ctx.drawImage(s,l,d,r,c),i()},s.onerror=u=>{n(u)},s.crossOrigin="anonymous",s.src=t,this._isEmpty=!1})}toDataURL(t="image/png",e){return"image/svg+xml"===t?this._toSVG():this.canvas.toDataURL(t,e)}on(){this.canvas.style.touchAction="none",this.canvas.style.msTouchAction="none",window.PointerEvent?this._handlePointerEvents():(this._handleMouseEvents(),"ontouchstart"in window&&this._handleTouchEvents())}off(){this.canvas.style.touchAction="auto",this.canvas.style.msTouchAction="auto",this.canvas.removeEventListener("pointerdown",this._handlePointerStart),this.canvas.removeEventListener("pointermove",this._handlePointerMove),document.removeEventListener("pointerup",this._handlePointerEnd),this.canvas.removeEventListener("mousedown",this._handleMouseDown),this.canvas.removeEventListener("mousemove",this._handleMouseMove),document.removeEventListener("mouseup",this._handleMouseUp),this.canvas.removeEventListener("touchstart",this._handleTouchStart),this.canvas.removeEventListener("touchmove",this._handleTouchMove),this.canvas.removeEventListener("touchend",this._handleTouchEnd)}isEmpty(){return this._isEmpty}fromData(t,{clear:e=!0}={}){e&&this.clear(),this._fromData(t,this._drawCurve.bind(this),this._drawDot.bind(this)),this._data=e?t:this._data.concat(t)}toData(){return this._data}_strokeBegin(t){this.dispatchEvent(new CustomEvent("beginStroke",{detail:t})),this._data.push({dotSize:this.dotSize,minWidth:this.minWidth,maxWidth:this.maxWidth,penColor:this.penColor,points:[]}),this._reset(),this._strokeUpdate(t)}_strokeUpdate(t){if(0===this._data.length)return void this._strokeBegin(t);this.dispatchEvent(new CustomEvent("beforeUpdateStroke",{detail:t}));const s=this._createPoint(t.clientX,t.clientY,void 0!==t.pressure?t.pressure:void 0!==t.force?t.force:0),a=this._data[this._data.length-1],r=a.points,c=r.length>0&&r[r.length-1],l=!!c&&s.distanceTo(c)<=this.minDistance,{penColor:d,dotSize:u,minWidth:f,maxWidth:h}=a;if(!c||!c||!l){const m=this._addPoint(s);c?m&&this._drawCurve(m,{penColor:d,dotSize:u,minWidth:f,maxWidth:h}):this._drawDot(s,{penColor:d,dotSize:u,minWidth:f,maxWidth:h}),r.push({time:s.time,x:s.x,y:s.y,pressure:s.pressure})}this.dispatchEvent(new CustomEvent("afterUpdateStroke",{detail:t}))}_strokeEnd(t){this._strokeUpdate(t),this.dispatchEvent(new CustomEvent("endStroke",{detail:t}))}_handlePointerEvents(){this._drawningStroke=!1,this.canvas.addEventListener("pointerdown",this._handlePointerStart),this.canvas.addEventListener("pointermove",this._handlePointerMove),document.addEventListener("pointerup",this._handlePointerEnd)}_handleMouseEvents(){this._drawningStroke=!1,this.canvas.addEventListener("mousedown",this._handleMouseDown),this.canvas.addEventListener("mousemove",this._handleMouseMove),document.addEventListener("mouseup",this._handleMouseUp)}_handleTouchEvents(){this.canvas.addEventListener("touchstart",this._handleTouchStart),this.canvas.addEventListener("touchmove",this._handleTouchMove),this.canvas.addEventListener("touchend",this._handleTouchEnd)}_reset(){this._lastPoints=[],this._lastVelocity=0,this._lastWidth=(this.minWidth+this.maxWidth)/2,this._ctx.fillStyle=this.penColor}_createPoint(t,e,i){const n=this.canvas.getBoundingClientRect();return new x(t-n.left,e-n.top,i,(new Date).getTime())}_addPoint(t){const{_lastPoints:e}=this;if(e.push(t),e.length>2){3===e.length&&e.unshift(e[0]);const i=this._calculateCurveWidths(e[1],e[2]),n=w.fromPoints(e,i);return e.shift(),n}return null}_calculateCurveWidths(t,e){const i=this.velocityFilterWeight*e.velocityFrom(t)+(1-this.velocityFilterWeight)*this._lastVelocity,n=this._strokeWidth(i),s={end:n,start:this._lastWidth};return this._lastVelocity=i,this._lastWidth=n,s}_strokeWidth(t){return Math.max(this.maxWidth/(t+1),this.minWidth)}_drawCurveSegment(t,e,i){const n=this._ctx;n.moveTo(t,e),n.arc(t,e,i,0,2*Math.PI,!1),this._isEmpty=!1}_drawCurve(t,e){const i=this._ctx,n=t.endWidth-t.startWidth,s=2*Math.ceil(t.length());i.beginPath(),i.fillStyle=e.penColor;for(let a=0;a<s;a+=1){const r=a/s,c=r*r,l=c*r,d=1-r,u=d*d,f=u*d;let h=f*t.startPoint.x;h+=3*u*r*t.control1.x,h+=3*d*c*t.control2.x,h+=l*t.endPoint.x;let m=f*t.startPoint.y;m+=3*u*r*t.control1.y,m+=3*d*c*t.control2.y,m+=l*t.endPoint.y;const _=Math.min(t.startWidth+l*n,e.maxWidth);this._drawCurveSegment(h,m,_)}i.closePath(),i.fill()}_drawDot(t,e){const i=this._ctx,n=e.dotSize>0?e.dotSize:(e.minWidth+e.maxWidth)/2;i.beginPath(),this._drawCurveSegment(t.x,t.y,n),i.closePath(),i.fillStyle=e.penColor,i.fill()}_fromData(t,e,i){for(const n of t){const{penColor:s,dotSize:a,minWidth:r,maxWidth:c,points:l}=n;if(l.length>1)for(let d=0;d<l.length;d+=1){const u=l[d],f=new x(u.x,u.y,u.pressure,u.time);this.penColor=s,0===d&&this._reset();const h=this._addPoint(f);h&&e(h,{penColor:s,dotSize:a,minWidth:r,maxWidth:c})}else this._reset(),i(l[0],{penColor:s,dotSize:a,minWidth:r,maxWidth:c})}}_toSVG(){const t=this._data,e=Math.max(window.devicePixelRatio||1,1),s=this.canvas.width/e,a=this.canvas.height/e,r=document.createElementNS("http://www.w3.org/2000/svg","svg");r.setAttribute("width",this.canvas.width.toString()),r.setAttribute("height",this.canvas.height.toString()),this._fromData(t,(h,{penColor:m})=>{const _=document.createElement("path");if(!(isNaN(h.control1.x)||isNaN(h.control1.y)||isNaN(h.control2.x)||isNaN(h.control2.y))){const v=`M ${h.startPoint.x.toFixed(3)},${h.startPoint.y.toFixed(3)} C ${h.control1.x.toFixed(3)},${h.control1.y.toFixed(3)} ${h.control2.x.toFixed(3)},${h.control2.y.toFixed(3)} ${h.endPoint.x.toFixed(3)},${h.endPoint.y.toFixed(3)}`;_.setAttribute("d",v),_.setAttribute("stroke-width",(2.25*h.endWidth).toFixed(3)),_.setAttribute("stroke",m),_.setAttribute("fill","none"),_.setAttribute("stroke-linecap","round"),r.appendChild(_)}},(h,{penColor:m,dotSize:_,minWidth:v,maxWidth:b})=>{const P=document.createElement("circle");P.setAttribute("r",(_>0?_:(v+b)/2).toString()),P.setAttribute("cx",h.x.toString()),P.setAttribute("cy",h.y.toString()),P.setAttribute("fill",m),r.appendChild(P)});const l=`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 ${this.canvas.width} ${this.canvas.height}" width="${s}" height="${a}">`;let d=r.innerHTML;if(void 0===d){const h=document.createElement("dummy"),m=r.childNodes;h.innerHTML="";for(let _=0;_<m.length;_+=1)h.appendChild(m[_].cloneNode(!0));d=h.innerHTML}return"data:image/svg+xml;base64,"+btoa(l+d+"</svg>")}}}}]);