"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[4345],{34345:(je,X,h)=>{h.d(X,{xd:()=>Me,x0:()=>Ue,N7:()=>q,Cl:()=>Ge});var o=h(5e3);function w(t,i=0){return function(t){return!isNaN(parseFloat(t))&&!isNaN(Number(t))}(t)?Number(t):i}var T=h(84408),O=h(50727);const m={schedule(t){let i=requestAnimationFrame,e=cancelAnimationFrame;const{delegate:n}=m;n&&(i=n.requestAnimationFrame,e=n.cancelAnimationFrame);const r=i(s=>{e=void 0,t(s)});return new O.w0(()=>null==e?void 0:e(r))},requestAnimationFrame(...t){const{delegate:i}=m;return((null==i?void 0:i.requestAnimationFrame)||requestAnimationFrame)(...t)},cancelAnimationFrame(...t){const{delegate:i}=m;return((null==i?void 0:i.cancelAnimationFrame)||cancelAnimationFrame)(...t)},delegate:void 0};var B=h(97565);const re=new class extends B.v{flush(i){this._active=!0,this._scheduled=void 0;const{actions:e}=this;let n,r=-1;i=i||e.shift();const s=e.length;do{if(n=i.execute(i.state,i.delay))break}while(++r<s&&(i=e.shift()));if(this._active=!1,n){for(;++r<s&&(i=e.shift());)i.unsubscribe();throw n}}}(class extends T.o{constructor(i,e){super(i,e),this.scheduler=i,this.work=e}requestAsyncId(i,e,n=0){return null!==n&&n>0?super.requestAsyncId(i,e,n):(i.actions.push(this),i._scheduled||(i._scheduled=m.requestAnimationFrame(()=>i.flush(void 0))))}recycleAsyncId(i,e,n=0){if(null!=n&&n>0||null==n&&this.delay>0)return super.recycleAsyncId(i,e,n);0===i.actions.length&&(m.cancelAnimationFrame(e),i._scheduled=void 0)}});let D,se=1;const y={};function I(t){return t in y&&(delete y[t],!0)}const oe={setImmediate(t){const i=se++;return y[i]=!0,D||(D=Promise.resolve()),D.then(()=>I(i)&&t()),i},clearImmediate(t){I(t)}},{setImmediate:le,clearImmediate:ae}=oe,C={setImmediate(...t){const{delegate:i}=C;return((null==i?void 0:i.setImmediate)||le)(...t)},clearImmediate(t){const{delegate:i}=C;return((null==i?void 0:i.clearImmediate)||ae)(t)},delegate:void 0},he=new class extends B.v{flush(i){this._active=!0,this._scheduled=void 0;const{actions:e}=this;let n,r=-1;i=i||e.shift();const s=e.length;do{if(n=i.execute(i.state,i.delay))break}while(++r<s&&(i=e.shift()));if(this._active=!1,n){for(;++r<s&&(i=e.shift());)i.unsubscribe();throw n}}}(class extends T.o{constructor(i,e){super(i,e),this.scheduler=i,this.work=e}requestAsyncId(i,e,n=0){return null!==n&&n>0?super.requestAsyncId(i,e,n):(i.actions.push(this),i._scheduled||(i._scheduled=C.setImmediate(i.flush.bind(i,void 0))))}recycleAsyncId(i,e,n=0){if(null!=n&&n>0||null==n&&this.delay>0)return super.recycleAsyncId(i,e,n);0===i.actions.length&&(C.clearImmediate(e),i._scheduled=void 0)}});var f=h(77579),b=h(39646),E=h(68306),M=h(54968),L=h(45191),ue=h(34986),P=h(54482),fe=h(38421),k=h(25403),ge=h(5963);function V(t,i=ue.P){return function(t){return(0,P.e)((i,e)=>{let n=!1,r=null,s=null,l=!1;const d=()=>{if(null==s||s.unsubscribe(),s=null,n){n=!1;const c=r;r=null,e.next(c)}l&&e.complete()},a=()=>{s=null,l&&e.complete()};i.subscribe(new k.Q(e,c=>{n=!0,r=c,s||(0,fe.Xf)(t()).subscribe(s=new k.Q(e,d,a))},()=>{l=!0,(!n||!s||s.closed)&&e.complete()}))})}(()=>(0,ge.H)(t,i))}var _e=h(71884),ve=h(39300),z=h(82722),N=h(68675),Se=h(63900),we=h(34782),x=h(69808);let A;try{A="undefined"!=typeof Intl&&Intl.v8BreakIterator}catch(t){A=!1}let R,p,W=(()=>{class t{constructor(e){this._platformId=e,this.isBrowser=this._platformId?(0,x.NF)(this._platformId):"object"==typeof document&&!!document,this.EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent),this.TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent),this.BLINK=this.isBrowser&&!(!window.chrome&&!A)&&"undefined"!=typeof CSS&&!this.EDGE&&!this.TRIDENT,this.WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT,this.IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window),this.FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent),this.ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT,this.SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT}}return t.\u0275fac=function(e){return new(e||t)(o.LFG(o.Lbi))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})(),ye=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({}),t})();function v(){if("object"!=typeof document||!document)return 0;if(null==R){const t=document.createElement("div"),i=t.style;t.dir="rtl",i.width="1px",i.overflow="auto",i.visibility="hidden",i.pointerEvents="none",i.position="absolute";const e=document.createElement("div"),n=e.style;n.width="2px",n.height="1px",t.appendChild(e),document.body.appendChild(t),R=0,0===t.scrollLeft&&(t.scrollLeft=1,R=0===t.scrollLeft?1:2),t.remove()}return R}const De=new o.OlP("cdk-dir-doc",{providedIn:"root",factory:function(){return(0,o.f3M)(x.K0)}}),Ee=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;let U=(()=>{class t{constructor(e){if(this.value="ltr",this.change=new o.vpe,e){const r=e.documentElement?e.documentElement.dir:null;this.value=function(t){const i=(null==t?void 0:t.toLowerCase())||"";return"auto"===i&&"undefined"!=typeof navigator&&(null==navigator?void 0:navigator.language)?Ee.test(navigator.language)?"rtl":"ltr":"rtl"===i?"rtl":"ltr"}((e.body?e.body.dir:null)||r||"ltr")}}ngOnDestroy(){this.change.complete()}}return t.\u0275fac=function(e){return new(e||t)(o.LFG(De,8))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})(),G=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({}),t})();class Ae extends class{}{constructor(i){super(),this._data=i}connect(){return(0,L.b)(this._data)?this._data:(0,b.of)(this._data)}disconnect(){}}class Fe{constructor(){this.viewCacheSize=20,this._viewCache=[]}applyChanges(i,e,n,r,s){i.forEachOperation((l,d,a)=>{let c,u;null==l.previousIndex?(c=this._insertView(()=>n(l,d,a),a,e,r(l)),u=c?1:0):null==a?(this._detachAndCacheView(d,e),u=3):(c=this._moveView(d,a,e,r(l)),u=2),s&&s({context:null==c?void 0:c.context,operation:u,record:l})})}detach(){for(const i of this._viewCache)i.destroy();this._viewCache=[]}_insertView(i,e,n,r){const s=this._insertViewFromCache(e,n);if(s)return void(s.context.$implicit=r);const l=i();return n.createEmbeddedView(l.templateRef,l.context,l.index)}_detachAndCacheView(i,e){const n=e.detach(i);this._maybeCacheView(n,e)}_moveView(i,e,n,r){const s=n.get(i);return n.move(s,e),s.context.$implicit=r,s}_maybeCacheView(i,e){if(this._viewCache.length<this.viewCacheSize)this._viewCache.push(i);else{const n=e.indexOf(i);-1===n?i.destroy():e.remove(n)}}_insertViewFromCache(i,e){const n=this._viewCache.pop();return n&&e.insert(n,i),n||null}}const j=new o.OlP("_ViewRepeater"),Te=["contentWrapper"],Oe=["*"],H=new o.OlP("VIRTUAL_SCROLL_STRATEGY");class Be{constructor(i,e,n){this._scrolledIndexChange=new f.x,this.scrolledIndexChange=this._scrolledIndexChange.pipe((0,_e.x)()),this._viewport=null,this._itemSize=i,this._minBufferPx=e,this._maxBufferPx=n}attach(i){this._viewport=i,this._updateTotalContentSize(),this._updateRenderedRange()}detach(){this._scrolledIndexChange.complete(),this._viewport=null}updateItemAndBufferSize(i,e,n){this._itemSize=i,this._minBufferPx=e,this._maxBufferPx=n,this._updateTotalContentSize(),this._updateRenderedRange()}onContentScrolled(){this._updateRenderedRange()}onDataLengthChanged(){this._updateTotalContentSize(),this._updateRenderedRange()}onContentRendered(){}onRenderedOffsetChanged(){}scrollToIndex(i,e){this._viewport&&this._viewport.scrollToOffset(i*this._itemSize,e)}_updateTotalContentSize(){!this._viewport||this._viewport.setTotalContentSize(this._viewport.getDataLength()*this._itemSize)}_updateRenderedRange(){if(!this._viewport)return;const i=this._viewport.getRenderedRange(),e={start:i.start,end:i.end},n=this._viewport.getViewportSize(),r=this._viewport.getDataLength();let s=this._viewport.measureScrollOffset(),l=this._itemSize>0?s/this._itemSize:0;if(e.end>r){const a=Math.ceil(n/this._itemSize),c=Math.max(0,Math.min(l,r-a));l!=c&&(l=c,s=c*this._itemSize,e.start=Math.floor(l)),e.end=Math.max(0,Math.min(r,e.start+a))}const d=s-e.start*this._itemSize;if(d<this._minBufferPx&&0!=e.start){const a=Math.ceil((this._maxBufferPx-d)/this._itemSize);e.start=Math.max(0,e.start-a),e.end=Math.min(r,Math.ceil(l+(n+this._minBufferPx)/this._itemSize))}else{const a=e.end*this._itemSize-(s+n);if(a<this._minBufferPx&&e.end!=r){const c=Math.ceil((this._maxBufferPx-a)/this._itemSize);c>0&&(e.end=Math.min(r,e.end+c),e.start=Math.max(0,Math.floor(l-this._minBufferPx/this._itemSize)))}}this._viewport.setRenderedRange(e),this._viewport.setRenderedContentOffset(this._itemSize*e.start),this._scrolledIndexChange.next(Math.floor(l))}}function Ie(t){return t._scrollStrategy}let Me=(()=>{class t{constructor(){this._itemSize=20,this._minBufferPx=100,this._maxBufferPx=200,this._scrollStrategy=new Be(this.itemSize,this.minBufferPx,this.maxBufferPx)}get itemSize(){return this._itemSize}set itemSize(e){this._itemSize=w(e)}get minBufferPx(){return this._minBufferPx}set minBufferPx(e){this._minBufferPx=w(e)}get maxBufferPx(){return this._maxBufferPx}set maxBufferPx(e){this._maxBufferPx=w(e)}ngOnChanges(){this._scrollStrategy.updateItemAndBufferSize(this.itemSize,this.minBufferPx,this.maxBufferPx)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275dir=o.lG2({type:t,selectors:[["cdk-virtual-scroll-viewport","itemSize",""]],inputs:{itemSize:"itemSize",minBufferPx:"minBufferPx",maxBufferPx:"maxBufferPx"},features:[o._Bn([{provide:H,useFactory:Ie,deps:[(0,o.Gpc)(()=>t)]}]),o.TTD]}),t})(),Z=(()=>{class t{constructor(e,n,r){this._ngZone=e,this._platform=n,this._scrolled=new f.x,this._globalSubscription=null,this._scrolledCount=0,this.scrollContainers=new Map,this._document=r}register(e){this.scrollContainers.has(e)||this.scrollContainers.set(e,e.elementScrolled().subscribe(()=>this._scrolled.next(e)))}deregister(e){const n=this.scrollContainers.get(e);n&&(n.unsubscribe(),this.scrollContainers.delete(e))}scrolled(e=20){return this._platform.isBrowser?new E.y(n=>{this._globalSubscription||this._addGlobalListener();const r=e>0?this._scrolled.pipe(V(e)).subscribe(n):this._scrolled.subscribe(n);return this._scrolledCount++,()=>{r.unsubscribe(),this._scrolledCount--,this._scrolledCount||this._removeGlobalListener()}}):(0,b.of)()}ngOnDestroy(){this._removeGlobalListener(),this.scrollContainers.forEach((e,n)=>this.deregister(n)),this._scrolled.complete()}ancestorScrolled(e,n){const r=this.getAncestorScrollContainers(e);return this.scrolled(n).pipe((0,ve.h)(s=>!s||r.indexOf(s)>-1))}getAncestorScrollContainers(e){const n=[];return this.scrollContainers.forEach((r,s)=>{this._scrollableContainsElement(s,e)&&n.push(s)}),n}_getWindow(){return this._document.defaultView||window}_scrollableContainsElement(e,n){let r=function(t){return t instanceof o.SBq?t.nativeElement:t}(n),s=e.getElementRef().nativeElement;do{if(r==s)return!0}while(r=r.parentElement);return!1}_addGlobalListener(){this._globalSubscription=this._ngZone.runOutsideAngular(()=>{const e=this._getWindow();return(0,M.R)(e.document,"scroll").subscribe(()=>this._scrolled.next())})}_removeGlobalListener(){this._globalSubscription&&(this._globalSubscription.unsubscribe(),this._globalSubscription=null)}}return t.\u0275fac=function(e){return new(e||t)(o.LFG(o.R0b),o.LFG(W),o.LFG(x.K0,8))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})(),$=(()=>{class t{constructor(e,n,r,s){this.elementRef=e,this.scrollDispatcher=n,this.ngZone=r,this.dir=s,this._destroyed=new f.x,this._elementScrolled=new E.y(l=>this.ngZone.runOutsideAngular(()=>(0,M.R)(this.elementRef.nativeElement,"scroll").pipe((0,z.R)(this._destroyed)).subscribe(l)))}ngOnInit(){this.scrollDispatcher.register(this)}ngOnDestroy(){this.scrollDispatcher.deregister(this),this._destroyed.next(),this._destroyed.complete()}elementScrolled(){return this._elementScrolled}getElementRef(){return this.elementRef}scrollTo(e){const n=this.elementRef.nativeElement,r=this.dir&&"rtl"==this.dir.value;null==e.left&&(e.left=r?e.end:e.start),null==e.right&&(e.right=r?e.start:e.end),null!=e.bottom&&(e.top=n.scrollHeight-n.clientHeight-e.bottom),r&&0!=v()?(null!=e.left&&(e.right=n.scrollWidth-n.clientWidth-e.left),2==v()?e.left=e.right:1==v()&&(e.left=e.right?-e.right:e.right)):null!=e.right&&(e.left=n.scrollWidth-n.clientWidth-e.right),this._applyScrollToOptions(e)}_applyScrollToOptions(e){const n=this.elementRef.nativeElement;!function(){if(null==p){if("object"!=typeof document||!document||"function"!=typeof Element||!Element)return p=!1,p;if("scrollBehavior"in document.documentElement.style)p=!0;else{const t=Element.prototype.scrollTo;p=!!t&&!/\{\s*\[native code\]\s*\}/.test(t.toString())}}return p}()?(null!=e.top&&(n.scrollTop=e.top),null!=e.left&&(n.scrollLeft=e.left)):n.scrollTo(e)}measureScrollOffset(e){const n="left",r="right",s=this.elementRef.nativeElement;if("top"==e)return s.scrollTop;if("bottom"==e)return s.scrollHeight-s.clientHeight-s.scrollTop;const l=this.dir&&"rtl"==this.dir.value;return"start"==e?e=l?r:n:"end"==e&&(e=l?n:r),l&&2==v()?e==n?s.scrollWidth-s.clientWidth-s.scrollLeft:s.scrollLeft:l&&1==v()?e==n?s.scrollLeft+s.scrollWidth-s.clientWidth:-s.scrollLeft:e==n?s.scrollLeft:s.scrollWidth-s.clientWidth-s.scrollLeft}}return t.\u0275fac=function(e){return new(e||t)(o.Y36(o.SBq),o.Y36(Z),o.Y36(o.R0b),o.Y36(U,8))},t.\u0275dir=o.lG2({type:t,selectors:[["","cdk-scrollable",""],["","cdkScrollable",""]]}),t})(),Ne=(()=>{class t{constructor(e,n,r){this._platform=e,this._change=new f.x,this._changeListener=s=>{this._change.next(s)},this._document=r,n.runOutsideAngular(()=>{if(e.isBrowser){const s=this._getWindow();s.addEventListener("resize",this._changeListener),s.addEventListener("orientationchange",this._changeListener)}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){if(this._platform.isBrowser){const e=this._getWindow();e.removeEventListener("resize",this._changeListener),e.removeEventListener("orientationchange",this._changeListener)}this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();const e={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),e}getViewportRect(){const e=this.getViewportScrollPosition(),{width:n,height:r}=this.getViewportSize();return{top:e.top,left:e.left,bottom:e.top+r,right:e.left+n,height:r,width:n}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};const e=this._document,n=this._getWindow(),r=e.documentElement,s=r.getBoundingClientRect();return{top:-s.top||e.body.scrollTop||n.scrollY||r.scrollTop||0,left:-s.left||e.body.scrollLeft||n.scrollX||r.scrollLeft||0}}change(e=20){return e>0?this._change.pipe(V(e)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){const e=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:e.innerWidth,height:e.innerHeight}:{width:0,height:0}}}return t.\u0275fac=function(e){return new(e||t)(o.LFG(W),o.LFG(o.R0b),o.LFG(x.K0,8))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Ye="undefined"!=typeof requestAnimationFrame?re:he;let q=(()=>{class t extends ${constructor(e,n,r,s,l,d,a){super(e,d,r,l),this.elementRef=e,this._changeDetectorRef=n,this._scrollStrategy=s,this._detachedSubject=new f.x,this._renderedRangeSubject=new f.x,this._orientation="vertical",this._appendOnly=!1,this.scrolledIndexChange=new E.y(c=>this._scrollStrategy.scrolledIndexChange.subscribe(u=>Promise.resolve().then(()=>this.ngZone.run(()=>c.next(u))))),this.renderedRangeStream=this._renderedRangeSubject,this._totalContentSize=0,this._totalContentWidth="",this._totalContentHeight="",this._renderedRange={start:0,end:0},this._dataLength=0,this._viewportSize=0,this._renderedContentOffset=0,this._renderedContentOffsetNeedsRewrite=!1,this._isChangeDetectionPending=!1,this._runAfterChangeDetection=[],this._viewportChanges=O.w0.EMPTY,this._viewportChanges=a.change().subscribe(()=>{this.checkViewportSize()})}get orientation(){return this._orientation}set orientation(e){this._orientation!==e&&(this._orientation=e,this._calculateSpacerSize())}get appendOnly(){return this._appendOnly}set appendOnly(e){this._appendOnly=function(t){return null!=t&&"false"!=`${t}`}(e)}ngOnInit(){super.ngOnInit(),this.ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>{this._measureViewportSize(),this._scrollStrategy.attach(this),this.elementScrolled().pipe((0,N.O)(null),V(0,Ye)).subscribe(()=>this._scrollStrategy.onContentScrolled()),this._markChangeDetectionNeeded()}))}ngOnDestroy(){this.detach(),this._scrollStrategy.detach(),this._renderedRangeSubject.complete(),this._detachedSubject.complete(),this._viewportChanges.unsubscribe(),super.ngOnDestroy()}attach(e){this.ngZone.runOutsideAngular(()=>{this._forOf=e,this._forOf.dataStream.pipe((0,z.R)(this._detachedSubject)).subscribe(n=>{const r=n.length;r!==this._dataLength&&(this._dataLength=r,this._scrollStrategy.onDataLengthChanged()),this._doChangeDetection()})})}detach(){this._forOf=null,this._detachedSubject.next()}getDataLength(){return this._dataLength}getViewportSize(){return this._viewportSize}getRenderedRange(){return this._renderedRange}setTotalContentSize(e){this._totalContentSize!==e&&(this._totalContentSize=e,this._calculateSpacerSize(),this._markChangeDetectionNeeded())}setRenderedRange(e){(function(t,i){return t.start==i.start&&t.end==i.end})(this._renderedRange,e)||(this.appendOnly&&(e={start:0,end:Math.max(this._renderedRange.end,e.end)}),this._renderedRangeSubject.next(this._renderedRange=e),this._markChangeDetectionNeeded(()=>this._scrollStrategy.onContentRendered()))}getOffsetToRenderedContentStart(){return this._renderedContentOffsetNeedsRewrite?null:this._renderedContentOffset}setRenderedContentOffset(e,n="to-start"){const s="horizontal"==this.orientation,l=s?"X":"Y";let a=`translate${l}(${Number((s&&this.dir&&"rtl"==this.dir.value?-1:1)*e)}px)`;this._renderedContentOffset=e,"to-end"===n&&(a+=` translate${l}(-100%)`,this._renderedContentOffsetNeedsRewrite=!0),this._renderedContentTransform!=a&&(this._renderedContentTransform=a,this._markChangeDetectionNeeded(()=>{this._renderedContentOffsetNeedsRewrite?(this._renderedContentOffset-=this.measureRenderedContentSize(),this._renderedContentOffsetNeedsRewrite=!1,this.setRenderedContentOffset(this._renderedContentOffset)):this._scrollStrategy.onRenderedOffsetChanged()}))}scrollToOffset(e,n="auto"){const r={behavior:n};"horizontal"===this.orientation?r.start=e:r.top=e,this.scrollTo(r)}scrollToIndex(e,n="auto"){this._scrollStrategy.scrollToIndex(e,n)}measureScrollOffset(e){return super.measureScrollOffset(e||("horizontal"===this.orientation?"start":"top"))}measureRenderedContentSize(){const e=this._contentWrapper.nativeElement;return"horizontal"===this.orientation?e.offsetWidth:e.offsetHeight}measureRangeSize(e){return this._forOf?this._forOf.measureRangeSize(e,this.orientation):0}checkViewportSize(){this._measureViewportSize(),this._scrollStrategy.onDataLengthChanged()}_measureViewportSize(){const e=this.elementRef.nativeElement;this._viewportSize="horizontal"===this.orientation?e.clientWidth:e.clientHeight}_markChangeDetectionNeeded(e){e&&this._runAfterChangeDetection.push(e),this._isChangeDetectionPending||(this._isChangeDetectionPending=!0,this.ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>{this._doChangeDetection()})))}_doChangeDetection(){this._isChangeDetectionPending=!1,this._contentWrapper.nativeElement.style.transform=this._renderedContentTransform,this.ngZone.run(()=>this._changeDetectorRef.markForCheck());const e=this._runAfterChangeDetection;this._runAfterChangeDetection=[];for(const n of e)n()}_calculateSpacerSize(){this._totalContentHeight="horizontal"===this.orientation?"":`${this._totalContentSize}px`,this._totalContentWidth="horizontal"===this.orientation?`${this._totalContentSize}px`:""}}return t.\u0275fac=function(e){return new(e||t)(o.Y36(o.SBq),o.Y36(o.sBO),o.Y36(o.R0b),o.Y36(H,8),o.Y36(U,8),o.Y36(Z),o.Y36(Ne))},t.\u0275cmp=o.Xpm({type:t,selectors:[["cdk-virtual-scroll-viewport"]],viewQuery:function(e,n){if(1&e&&o.Gf(Te,7),2&e){let r;o.iGM(r=o.CRH())&&(n._contentWrapper=r.first)}},hostAttrs:[1,"cdk-virtual-scroll-viewport"],hostVars:4,hostBindings:function(e,n){2&e&&o.ekj("cdk-virtual-scroll-orientation-horizontal","horizontal"===n.orientation)("cdk-virtual-scroll-orientation-vertical","horizontal"!==n.orientation)},inputs:{orientation:"orientation",appendOnly:"appendOnly"},outputs:{scrolledIndexChange:"scrolledIndexChange"},features:[o._Bn([{provide:$,useExisting:t}]),o.qOj],ngContentSelectors:Oe,decls:4,vars:4,consts:[[1,"cdk-virtual-scroll-content-wrapper"],["contentWrapper",""],[1,"cdk-virtual-scroll-spacer"]],template:function(e,n){1&e&&(o.F$t(),o.TgZ(0,"div",0,1),o.Hsn(2),o.qZA(),o._UZ(3,"div",2)),2&e&&(o.xp6(3),o.Udp("width",n._totalContentWidth)("height",n._totalContentHeight))},styles:["cdk-virtual-scroll-viewport{display:block;position:relative;overflow:auto;contain:strict;transform:translateZ(0);will-change:scroll-position;-webkit-overflow-scrolling:touch}.cdk-virtual-scroll-content-wrapper{position:absolute;top:0;left:0;contain:content}[dir=rtl] .cdk-virtual-scroll-content-wrapper{right:0;left:auto}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper{min-height:100%}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-left:0;padding-right:0;margin-left:0;margin-right:0;border-left-width:0;border-right-width:0;outline:none}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper{min-width:100%}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-top:0;padding-bottom:0;margin-top:0;margin-bottom:0;border-top-width:0;border-bottom-width:0;outline:none}.cdk-virtual-scroll-spacer{position:absolute;top:0;left:0;height:1px;width:1px;transform-origin:0 0}[dir=rtl] .cdk-virtual-scroll-spacer{right:0;left:auto;transform-origin:100% 0}\n"],encapsulation:2,changeDetection:0}),t})();function K(t,i,e){if(!e.getBoundingClientRect)return 0;const r=e.getBoundingClientRect();return"horizontal"===t?"start"===i?r.left:r.right:"start"===i?r.top:r.bottom}let Ue=(()=>{class t{constructor(e,n,r,s,l,d){this._viewContainerRef=e,this._template=n,this._differs=r,this._viewRepeater=s,this._viewport=l,this.viewChange=new f.x,this._dataSourceChanges=new f.x,this.dataStream=this._dataSourceChanges.pipe((0,N.O)(null),(0,P.e)((t,i)=>{let e,n=!1;t.subscribe(new k.Q(i,r=>{const s=e;e=r,n&&i.next([s,r]),n=!0}))}),(0,Se.w)(([a,c])=>this._changeDataSource(a,c)),(0,we.d)(1)),this._differ=null,this._needsUpdate=!1,this._destroyed=new f.x,this.dataStream.subscribe(a=>{this._data=a,this._onRenderedDataChange()}),this._viewport.renderedRangeStream.pipe((0,z.R)(this._destroyed)).subscribe(a=>{this._renderedRange=a,d.run(()=>this.viewChange.next(this._renderedRange)),this._onRenderedDataChange()}),this._viewport.attach(this)}get cdkVirtualForOf(){return this._cdkVirtualForOf}set cdkVirtualForOf(e){this._cdkVirtualForOf=e,function(t){return t&&"function"==typeof t.connect}(e)?this._dataSourceChanges.next(e):this._dataSourceChanges.next(new Ae((0,L.b)(e)?e:Array.from(e||[])))}get cdkVirtualForTrackBy(){return this._cdkVirtualForTrackBy}set cdkVirtualForTrackBy(e){this._needsUpdate=!0,this._cdkVirtualForTrackBy=e?(n,r)=>e(n+(this._renderedRange?this._renderedRange.start:0),r):void 0}set cdkVirtualForTemplate(e){e&&(this._needsUpdate=!0,this._template=e)}get cdkVirtualForTemplateCacheSize(){return this._viewRepeater.viewCacheSize}set cdkVirtualForTemplateCacheSize(e){this._viewRepeater.viewCacheSize=w(e)}measureRangeSize(e,n){if(e.start>=e.end)return 0;const r=e.start-this._renderedRange.start,s=e.end-e.start;let l,d;for(let a=0;a<s;a++){const c=this._viewContainerRef.get(a+r);if(c&&c.rootNodes.length){l=d=c.rootNodes[0];break}}for(let a=s-1;a>-1;a--){const c=this._viewContainerRef.get(a+r);if(c&&c.rootNodes.length){d=c.rootNodes[c.rootNodes.length-1];break}}return l&&d?K(n,"end",d)-K(n,"start",l):0}ngDoCheck(){if(this._differ&&this._needsUpdate){const e=this._differ.diff(this._renderedItems);e?this._applyChanges(e):this._updateContext(),this._needsUpdate=!1}}ngOnDestroy(){this._viewport.detach(),this._dataSourceChanges.next(void 0),this._dataSourceChanges.complete(),this.viewChange.complete(),this._destroyed.next(),this._destroyed.complete(),this._viewRepeater.detach()}_onRenderedDataChange(){!this._renderedRange||(this._renderedItems=this._data.slice(this._renderedRange.start,this._renderedRange.end),this._differ||(this._differ=this._differs.find(this._renderedItems).create((e,n)=>this.cdkVirtualForTrackBy?this.cdkVirtualForTrackBy(e,n):n)),this._needsUpdate=!0)}_changeDataSource(e,n){return e&&e.disconnect(this),this._needsUpdate=!0,n?n.connect(this):(0,b.of)()}_updateContext(){const e=this._data.length;let n=this._viewContainerRef.length;for(;n--;){const r=this._viewContainerRef.get(n);r.context.index=this._renderedRange.start+n,r.context.count=e,this._updateComputedContextProperties(r.context),r.detectChanges()}}_applyChanges(e){this._viewRepeater.applyChanges(e,this._viewContainerRef,(s,l,d)=>this._getEmbeddedViewArgs(s,d),s=>s.item),e.forEachIdentityChange(s=>{this._viewContainerRef.get(s.currentIndex).context.$implicit=s.item});const n=this._data.length;let r=this._viewContainerRef.length;for(;r--;){const s=this._viewContainerRef.get(r);s.context.index=this._renderedRange.start+r,s.context.count=n,this._updateComputedContextProperties(s.context)}}_updateComputedContextProperties(e){e.first=0===e.index,e.last=e.index===e.count-1,e.even=e.index%2==0,e.odd=!e.even}_getEmbeddedViewArgs(e,n){return{templateRef:this._template,context:{$implicit:e.item,cdkVirtualForOf:this._cdkVirtualForOf,index:-1,count:-1,first:!1,last:!1,odd:!1,even:!1},index:n}}}return t.\u0275fac=function(e){return new(e||t)(o.Y36(o.s_b),o.Y36(o.Rgc),o.Y36(o.ZZ4),o.Y36(j),o.Y36(q,4),o.Y36(o.R0b))},t.\u0275dir=o.lG2({type:t,selectors:[["","cdkVirtualFor","","cdkVirtualForOf",""]],inputs:{cdkVirtualForOf:"cdkVirtualForOf",cdkVirtualForTrackBy:"cdkVirtualForTrackBy",cdkVirtualForTemplate:"cdkVirtualForTemplate",cdkVirtualForTemplateCacheSize:"cdkVirtualForTemplateCacheSize"},features:[o._Bn([{provide:j,useClass:Fe}])]}),t})(),Q=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({}),t})(),Ge=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[[G,ye,Q],G,Q]}),t})()}}]);