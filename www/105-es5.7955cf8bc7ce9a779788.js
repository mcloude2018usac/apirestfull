function _classCallCheck(n,l){if(!(n instanceof l))throw new TypeError("Cannot call a class as a function")}function _defineProperties(n,l){for(var t=0;t<l.length;t++){var i=l[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}function _createClass(n,l,t){return l&&_defineProperties(n.prototype,l),t&&_defineProperties(n,t),n}(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{"8SZI":function(n,l,t){"use strict";t.r(l),t.d(l,"WalkthroughPageModuleNgFactory",(function(){return y}));var i=t("8Y7J"),o=t("ZtEv"),e=function(){function n(l,t,i,o){_classCallCheck(this,n),this.router=l,this.menu=t,this.translateService=i,this.authenticationService=o,this.foto0="/api/image2s/5f146aa48caa41db981e6830",this.foto2="/api/image2s/5f146aa48caa41db981e6830",this.cintia="/api/image2s/5f146aa48caa41db981e6830",this.slidesOptions={zoom:{toggle:!1}},this.isFirstSlide=!0,this.isLastSlide=!1,this.apifoto=this.authenticationService.getapifoto()}return _createClass(n,[{key:"ngOnInit",value:function(){var n=this;this.menu.enable(!1),this.idempresa=this.authenticationService.getempresa(),this.authenticationService.getRegsintok(this.idempresa+"/todos","empresas",0).then((function(l){var t;t=l,n.titulo1=t[0].titulo0,n.foto0=t[0].foto0,n.foto2=t[0].foto2,n.nombre0=t[0].nombre,n.nombre1=t[0].nombrecorto,n.inicio=t[0].inicio,n.siregister=t[0].siregister,document.documentElement.style.setProperty("--ion-color-primary",t[0].color1),document.documentElement.style.setProperty("--ion-color-secondary",t[0].color2),document.documentElement.style.setProperty("--ion-color-tertiary",t[0].color3),document.documentElement.style.setProperty("--ion-color-medium",t[0].color4),"Pagina de logeo"===n.inicio&&n.router.navigate(["/auth/login"])}),(function(l){n.authenticationService.presentAlert(l.error,"Precauci\xf3n","")}))}},{key:"ngAfterViewInit",value:function(){var n=this;this.slides.isBeginning().then((function(l){n.isFirstSlide=l})),this.slides.isEnd().then((function(l){n.isLastSlide=l})),this.slides.ionSlideWillChange.subscribe((function(l){n.slides.isBeginning().then((function(l){n.isFirstSlide=l})),n.slides.isEnd().then((function(l){n.isLastSlide=l}))}))}},{key:"skipWalkthrough",value:function(){var n=this;this.slides.length().then((function(l){n.slides.slideTo(l)}))}}]),n}(),a=function n(){_classCallCheck(this,n)},r=t("pMnS"),c=t("MKJQ"),u=t("sZkV"),s=t("iInd"),d=t("SVse"),g=t("M4wD"),b=t("B7gC"),p=t("6LEC"),h=t("2gss"),f=t("TSSN"),m=i.wb({encapsulation:0,styles:[["[_nghost-%COMP%]{--page-margin:var(--app-broad-margin);--page-background:var(--app-background);--page-swiper-pagination-space:40px;--page-swiper-pagination-height:18px;--page-pagination-bullet-size:10px;--page-first-slide-background:#c1ebff;--page-second-slide-background:#a9ebd2;--page-third-slide-background:#f0cbe5;--page-last-slide-background:#eef3ff;--page-vector-decoration-fill:var(--ion-color-light-shade)}ion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]{--ion-toolbar-background:transparent}ion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{--color:var(--ion-color-lightest)}ion-content[_ngcontent-%COMP%]{position:absolute;top:0}.walkthrough-slides[_ngcontent-%COMP%]{--bullet-background:var(--ion-color-dark);--bullet-background-active:var(--ion-color-dark);height:100%}.walkthrough-slides[_ngcontent-%COMP%]   .slide-inner-row[_ngcontent-%COMP%]{height:100%;width:100%;padding:0;padding-top:var(--app-header-height);border-bottom:var(--page-swiper-pagination-space) solid transparent;background-clip:padding-box;background-color:var(--page-vector-decoration-fill)}.illustration-and-decoration-slide[_ngcontent-%COMP%]   .slide-inner-row[_ngcontent-%COMP%]{--ion-grid-column-padding:0px;flex-flow:column;justify-content:flex-start;align-items:center}.illustration-and-decoration-slide[_ngcontent-%COMP%]   .illustration-col[_ngcontent-%COMP%]{flex-grow:0;flex-shrink:0;min-height:auto;min-height:-webkit-fit-content;min-height:-moz-fit-content;min-height:fit-content;max-width:30vh;padding:0}.illustration-and-decoration-slide[_ngcontent-%COMP%]   .decoration-col[_ngcontent-%COMP%]{flex-grow:0;flex-shrink:1;min-height:12vh;transform:translateZ(0)}.illustration-and-decoration-slide[_ngcontent-%COMP%]   .decoration-col[_ngcontent-%COMP%]   .vector-decoration[_ngcontent-%COMP%]{fill:currentColor;color:var(--page-vector-decoration-fill);background-color:var(--page-background);padding-bottom:4px;transform:translateZ(0);shape-rendering:geometricprecision;height:calc(100% + 1px)}.illustration-and-decoration-slide[_ngcontent-%COMP%]   .info-col[_ngcontent-%COMP%]{flex-grow:1;flex-shrink:0;min-height:auto;background-color:var(--page-background);margin-bottom:-1px;transform:translateZ(0)}.illustration-and-decoration-slide[_ngcontent-%COMP%]   .info-col[_ngcontent-%COMP%]   .info-wrapper[_ngcontent-%COMP%]{margin:calc(var(--page-margin)*-1) var(--page-margin) 0;text-align:left}.illustration-and-decoration-slide[_ngcontent-%COMP%]   .info-col[_ngcontent-%COMP%]   .info-wrapper[_ngcontent-%COMP%]   .info-title[_ngcontent-%COMP%]{margin:0;margin-bottom:var(--page-margin);color:var(--ion-color-dark)}.illustration-and-decoration-slide[_ngcontent-%COMP%]   .info-col[_ngcontent-%COMP%]   .info-wrapper[_ngcontent-%COMP%]   .info-paragraph[_ngcontent-%COMP%]{color:var(--ion-color-medium-shade);font-size:14px;margin:0 0 calc(var(--page-margin)/2)}.illustration-and-decoration-slide[_ngcontent-%COMP%]   .info-col[_ngcontent-%COMP%]   .info-wrapper[_ngcontent-%COMP%]   .info-paragraph[_ngcontent-%COMP%]:last-child{margin-bottom:0}.first-slide[_ngcontent-%COMP%]{--page-vector-decoration-fill:var(--page-first-slide-background)}.second-slide[_ngcontent-%COMP%]{--page-vector-decoration-fill:var(--page-second-slide-background)}.third-slide[_ngcontent-%COMP%]{--page-vector-decoration-fill:var(--page-third-slide-background)}.last-slide[_ngcontent-%COMP%]{--page-vector-decoration-fill:var(--page-last-slide-background)}.last-slide[_ngcontent-%COMP%]   .slide-inner-row[_ngcontent-%COMP%]{border-width:0}.last-slide[_ngcontent-%COMP%]   .info-col[_ngcontent-%COMP%]{padding:var(--page-margin)}.last-slide[_ngcontent-%COMP%]   .info-col[_ngcontent-%COMP%]   .info-outer[_ngcontent-%COMP%]{height:100%;align-items:flex-end;flex-direction:column}.last-slide[_ngcontent-%COMP%]   .info-col[_ngcontent-%COMP%]   .info-outer[_ngcontent-%COMP%]   .info-wrapper[_ngcontent-%COMP%]{margin:calc(var(--page-margin)*-1) 0 0}.last-slide[_ngcontent-%COMP%]   .info-col[_ngcontent-%COMP%]   .info-outer[_ngcontent-%COMP%]   .call-to-actions-wrapper[_ngcontent-%COMP%]{max-height:-webkit-fit-content;max-height:-moz-fit-content;max-height:fit-content}.last-slide[_ngcontent-%COMP%]   .info-col[_ngcontent-%COMP%]   .get-started-button[_ngcontent-%COMP%]{margin:0}.last-slide[_ngcontent-%COMP%]   .info-col[_ngcontent-%COMP%]   .alt-call-to-action-row[_ngcontent-%COMP%]{padding-top:5px;align-items:center;justify-content:space-evenly}.last-slide[_ngcontent-%COMP%]   .info-col[_ngcontent-%COMP%]   .alt-call-to-action-row[_ngcontent-%COMP%]   .cta-leading-text[_ngcontent-%COMP%]{color:var(--ion-color-medium);font-size:16px}.last-slide[_ngcontent-%COMP%]   .info-col[_ngcontent-%COMP%]   .alt-call-to-action-row[_ngcontent-%COMP%]   .login-button[_ngcontent-%COMP%]{--color:var(--ion-color-secondary);margin:0}.first-slide-active[_nghost-%COMP%]   .skip-walkthrough-button[_ngcontent-%COMP%]{visibility:hidden}.last-slide-active[_nghost-%COMP%]     .walkthrough-slides .swiper-pagination{display:none}.last-slide-active[_nghost-%COMP%]   .skip-walkthrough-button[_ngcontent-%COMP%]{visibility:hidden}[_nghost-%COMP%]     .walkthrough-slides .swiper-pagination{height:var(--page-swiper-pagination-height);line-height:1;bottom:calc((var(--page-swiper-pagination-space) - var(--page-swiper-pagination-height))/2)}[_nghost-%COMP%]     .walkthrough-slides .swiper-pagination .swiper-pagination-bullet{width:var(--page-pagination-bullet-size);height:var(--page-pagination-bullet-size)}"],["app-image-shell.illustration-image[_ngcontent-%COMP%]{--image-shell-loading-background:transparent;--image-shell-spinner-color:var(--ion-color-lightest)}"],["@media only screen and (min-device-width:320px) and (max-device-width:480px) and (-webkit-min-device-pixel-ratio:2) and (device-aspect-ratio:2/3){.illustration-and-decoration-slide[_ngcontent-%COMP%]   .illustration-col[_ngcontent-%COMP%]{max-width:30vh;padding:0}.illustration-and-decoration-slide[_ngcontent-%COMP%]   .decoration-col[_ngcontent-%COMP%]{min-height:12vh}.illustration-and-decoration-slide[_ngcontent-%COMP%]   .info-col[_ngcontent-%COMP%]   .info-wrapper[_ngcontent-%COMP%]   .info-title[_ngcontent-%COMP%]{margin-bottom:calc(var(--page-margin)/2);font-size:20px}}@media only screen and (min-device-width:320px) and (max-device-width:568px) and (-webkit-min-device-pixel-ratio:2) and (device-aspect-ratio:40/71){.illustration-and-decoration-slide[_ngcontent-%COMP%]   .illustration-col[_ngcontent-%COMP%]{max-width:32vh;padding:0}.illustration-and-decoration-slide[_ngcontent-%COMP%]   .decoration-col[_ngcontent-%COMP%]{min-height:12vh}.illustration-and-decoration-slide[_ngcontent-%COMP%]   .info-col[_ngcontent-%COMP%]   .info-wrapper[_ngcontent-%COMP%]   .info-title[_ngcontent-%COMP%]{margin-bottom:calc(var(--page-margin)/2);font-size:20px}}@media only screen and (min-device-width:375px) and (max-device-width:667px) and (-webkit-min-device-pixel-ratio:2){.illustration-and-decoration-slide[_ngcontent-%COMP%]   .illustration-col[_ngcontent-%COMP%]{max-width:36vh;padding:2vh 0}.illustration-and-decoration-slide[_ngcontent-%COMP%]   .decoration-col[_ngcontent-%COMP%]{min-height:14vh}}@media only screen and (min-device-width:375px) and (max-device-width:812px) and (-webkit-min-device-pixel-ratio:3){.illustration-and-decoration-slide[_ngcontent-%COMP%]   .illustration-col[_ngcontent-%COMP%]{max-width:34vh;padding:6vh 0}.illustration-and-decoration-slide[_ngcontent-%COMP%]   .decoration-col[_ngcontent-%COMP%]{min-height:12vh}}@media only screen and (min-device-width:414px) and (max-device-width:736px) and (-webkit-min-device-pixel-ratio:3){.illustration-and-decoration-slide[_ngcontent-%COMP%]   .illustration-col[_ngcontent-%COMP%]{max-width:38vh;padding:4vh 0}.illustration-and-decoration-slide[_ngcontent-%COMP%]   .decoration-col[_ngcontent-%COMP%]{min-height:14vh}}"]],data:{}});function v(n){return i.ac(0,[(n()(),i.yb(0,0,null,null,5,"ion-button",[["class","get-started-button"],["color","warning"],["expand","block"]],null,[[null,"click"]],(function(n,l,t){var o=!0;return"click"===l&&(o=!1!==i.Nb(n,2).onClick()&&o),"click"===l&&(o=!1!==i.Nb(n,4).onClick(t)&&o),o}),c.ob,c.e)),i.xb(1,49152,null,0,u.l,[i.h,i.l,i.z],{color:[0,"color"],expand:[1,"expand"]},null),i.xb(2,16384,null,0,s.n,[s.m,s.a,[8,null],i.E,i.l],{routerLink:[0,"routerLink"]},null),i.Ob(3,1),i.xb(4,737280,null,0,u.Nb,[d.j,u.Hb,i.l,s.m,[2,s.n]],null,null),(n()(),i.Xb(-1,0,[" \xbfREGISTRARSE?"]))],(function(n,l){n(l,1,0,"warning","block");var t=n(l,3,0,"/auth/signup");n(l,2,0,t),n(l,4,0)}),null)}function C(n){return i.ac(0,[(n()(),i.yb(0,0,null,null,0,"img",[["style","display:block; margin:left;width:200px;height: 50;"]],[[8,"src",4]],null,null,null,null))],null,(function(n,l){var t=l.component;n(l,0,0,t.apifoto+t.foto2)}))}function P(n){return i.ac(0,[i.Tb(402653184,1,{slides:0}),(n()(),i.yb(1,0,null,null,8,"ion-header",[["class","ion-no-border"]],null,null,null,c.Eb,c.u)),i.xb(2,49152,null,0,u.C,[i.h,i.l,i.z],null,null),(n()(),i.yb(3,0,null,0,6,"ion-toolbar",[],null,null,null,c.sc,c.ib)),i.xb(4,49152,null,0,u.Ab,[i.h,i.l,i.z],null,null),(n()(),i.yb(5,0,null,0,4,"ion-buttons",[["slot","end"]],null,null,null,c.pb,c.f)),i.xb(6,49152,null,0,u.m,[i.h,i.l,i.z],null,null),(n()(),i.yb(7,0,null,0,2,"ion-button",[["class","skip-walkthrough-button"],["fill","clear"]],null,[[null,"click"]],(function(n,l,t){var i=!0;return"click"===l&&(i=!1!==n.component.skipWalkthrough()&&i),i}),c.ob,c.e)),i.xb(8,49152,null,0,u.l,[i.h,i.l,i.z],{fill:[0,"fill"]},null),(n()(),i.Xb(-1,0,["Saltar"])),(n()(),i.yb(10,0,null,null,46,"ion-content",[],null,null,null,c.yb,c.o)),i.xb(11,49152,null,0,u.v,[i.h,i.l,i.z],null,null),(n()(),i.yb(12,0,null,0,44,"ion-slides",[["class","walkthrough-slides"],["pager","true"]],null,null,null,c.hc,c.X)),i.xb(13,49152,[[1,4]],0,u.pb,[i.h,i.l,i.z],{options:[0,"options"],pager:[1,"pager"]},null),(n()(),i.yb(14,0,null,0,42,"ion-slide",[["class","last-slide illustration-and-decoration-slide"]],null,null,null,c.gc,c.W)),i.xb(15,49152,null,0,u.ob,[i.h,i.l,i.z],null,null),(n()(),i.yb(16,0,null,0,40,"ion-row",[["class","slide-inner-row"]],null,null,null,c.ac,c.Q)),i.xb(17,49152,null,0,u.hb,[i.h,i.l,i.z],null,null),(n()(),i.yb(18,0,null,0,6,"ion-col",[["class","illustration-col"]],null,null,null,c.xb,c.n)),i.xb(19,49152,null,0,u.u,[i.h,i.l,i.z],null,null),(n()(),i.yb(20,0,null,0,4,"app-aspect-ratio",[],[[4,"padding",null]],null,null,g.b,g.a)),i.xb(21,49152,null,0,b.a,[],{ratio:[0,"ratio"]},null),i.Qb(22,{w:0,h:1}),(n()(),i.yb(23,0,null,0,1,"app-image-shell",[["animation","spinner"],["class","illustration-image"]],[[2,"img-loaded",null],[4,"backgroundImage",null],[1,"display",0]],null,null,p.b,p.a)),i.xb(24,49152,null,0,h.a,[i.B],{src:[0,"src"],alt:[1,"alt"]},null),(n()(),i.yb(25,0,null,0,3,"ion-col",[["class","decoration-col"]],null,null,null,c.xb,c.n)),i.xb(26,49152,null,0,u.u,[i.h,i.l,i.z],null,null),(n()(),i.yb(27,0,null,0,1,":svg:svg",[[":xml:space","preserve"],[":xmlns:xlink","http://www.w3.org/1999/xlink"],["class","vector-decoration"],["height","100px"],["preserveAspectRatio","none"],["style","enable-background:new 0 0 64 24;"],["version","1.1"],["viewBox","0 0 64 18"],["width","100%"],["x","0px"],["xmlns","http://www.w3.org/2000/svg"],["y","0px"]],null,null,null,null,null)),(n()(),i.yb(28,0,null,null,0,":svg:path",[["d","M0 0 L64 0 L64 10 Q56 24 46 12 Q34 0 26 8 Q10 22 0 8 Z"]],null,null,null,null,null)),(n()(),i.yb(29,0,null,0,27,"ion-col",[["class","info-col"]],null,null,null,c.xb,c.n)),i.xb(30,49152,null,0,u.u,[i.h,i.l,i.z],null,null),(n()(),i.yb(31,0,null,0,25,"ion-row",[["class","info-outer"]],null,null,null,c.ac,c.Q)),i.xb(32,49152,null,0,u.hb,[i.h,i.l,i.z],null,null),(n()(),i.yb(33,0,null,0,9,"ion-col",[],null,null,null,c.xb,c.n)),i.xb(34,49152,null,0,u.u,[i.h,i.l,i.z],null,null),(n()(),i.yb(35,0,null,0,7,"div",[["class","info-wrapper"]],null,null,null,null,null)),(n()(),i.yb(36,0,null,null,1,"h3",[],null,null,null,null,null)),(n()(),i.Xb(37,null,[" ",""])),(n()(),i.yb(38,0,null,null,3,"p",[["class","info-paragraph"]],null,null,null,null,null)),(n()(),i.Xb(-1,null,[" by "])),(n()(),i.yb(40,0,null,null,1,"strong",[],null,null,null,null,null)),(n()(),i.Xb(41,null,["",""])),(n()(),i.yb(42,0,null,null,0,"div",[["class","info-paragraph"]],[[8,"innerHTML",1]],null,null,null,null)),(n()(),i.yb(43,0,null,0,13,"ion-col",[["class","call-to-actions-wrapper"]],null,null,null,c.xb,c.n)),i.xb(44,49152,null,0,u.u,[i.h,i.l,i.z],null,null),(n()(),i.yb(45,0,null,0,5,"ion-button",[["class","get-started-button"],["color","tertiary"],["expand","block"]],null,[[null,"click"]],(function(n,l,t){var o=!0;return"click"===l&&(o=!1!==i.Nb(n,47).onClick()&&o),"click"===l&&(o=!1!==i.Nb(n,49).onClick(t)&&o),o}),c.ob,c.e)),i.xb(46,49152,null,0,u.l,[i.h,i.l,i.z],{color:[0,"color"],expand:[1,"expand"]},null),i.xb(47,16384,null,0,s.n,[s.m,s.a,[8,null],i.E,i.l],{routerLink:[0,"routerLink"]},null),i.Ob(48,1),i.xb(49,737280,null,0,u.Nb,[d.j,u.Hb,i.l,s.m,[2,s.n]],null,null),(n()(),i.Xb(-1,0,["INICIAR SESI\xd3N"])),(n()(),i.yb(51,0,null,0,0,"br",[],null,null,null,null,null)),(n()(),i.hb(16777216,null,0,1,null,v)),i.xb(53,16384,null,0,d.m,[i.P,i.M],{ngIf:[0,"ngIf"]},null),(n()(),i.yb(54,0,null,0,0,"br",[],null,null,null,null,null)),(n()(),i.hb(16777216,null,0,1,null,C)),i.xb(56,16384,null,0,d.m,[i.P,i.M],{ngIf:[0,"ngIf"]},null)],(function(n,l){var t=l.component;n(l,8,0,"clear"),n(l,13,0,t.slidesOptions,"true");var i=n(l,22,0,924,819);n(l,21,0,i),n(l,24,0,t.apifoto+t.foto0,"walkthrough"),n(l,46,0,"tertiary","block");var o=n(l,48,0,"/auth/login");n(l,47,0,o),n(l,49,0),n(l,53,0,"No"!==t.siregister),n(l,56,0,void 0!==t.foto2&&""!==t.foto2)}),(function(n,l){var t=l.component;n(l,20,0,i.Nb(l,21).ratioPadding),n(l,23,0,i.Nb(l,24).imageLoaded,i.Nb(l,24).backgroundImage,i.Nb(l,24).display),n(l,37,0,t.nombre0),n(l,41,0,t.nombre1),n(l,42,0,t.titulo1)}))}var M=i.ub("app-walkthrough",e,(function(n){return i.ac(0,[(n()(),i.yb(0,0,null,null,1,"app-walkthrough",[],[[2,"first-slide-active",null],[2,"last-slide-active",null]],null,null,P,m)),i.xb(1,4308992,null,0,e,[s.m,u.Fb,f.l,o.a],null,null)],(function(n,l){n(l,1,0)}),(function(n,l){n(l,0,0,i.Nb(l,1).isFirstSlide,i.Nb(l,1).isLastSlide)}))}),{},{},[]),O=t("s7LF"),_=t("IheW"),x=t("ZpN7"),w=t("Kt/9"),k=t("j1ZV"),y=i.vb(a,[],(function(n){return i.Kb([i.Lb(512,i.j,i.Z,[[8,[r.a,M]],[3,i.j],i.x]),i.Lb(4608,d.o,d.n,[i.u]),i.Lb(4608,O.w,O.w,[]),i.Lb(4608,u.c,u.c,[i.z,i.g]),i.Lb(4608,u.Gb,u.Gb,[u.c,i.j,i.r]),i.Lb(4608,u.Lb,u.Lb,[u.c,i.j,i.r]),i.Lb(4608,_.i,_.o,[d.e,i.B,_.m]),i.Lb(4608,_.p,_.p,[_.i,_.n]),i.Lb(5120,_.a,(function(n){return[n]}),[_.p]),i.Lb(4608,_.l,_.l,[]),i.Lb(6144,_.j,null,[_.l]),i.Lb(4608,_.h,_.h,[_.j]),i.Lb(6144,_.b,null,[_.h]),i.Lb(4608,_.f,_.k,[_.b,i.r]),i.Lb(4608,_.c,_.c,[_.f]),i.Lb(5120,i.d,(function(n){return[x.b(n)]}),[w.a]),i.Lb(4608,f.h,f.g,[]),i.Lb(4608,f.d,f.f,[]),i.Lb(4608,f.j,f.e,[]),i.Lb(4608,f.c,f.b,[]),i.Lb(4608,f.l,f.l,[f.m,f.h,f.d,f.j,f.c,f.n,f.p,f.o,f.a]),i.Lb(1073742336,d.c,d.c,[]),i.Lb(1073742336,O.v,O.v,[]),i.Lb(1073742336,O.j,O.j,[]),i.Lb(1073742336,f.i,f.i,[]),i.Lb(1073742336,u.Cb,u.Cb,[]),i.Lb(1073742336,s.p,s.p,[[2,s.u],[2,s.m]]),i.Lb(1073742336,_.e,_.e,[]),i.Lb(1073742336,_.d,_.d,[]),i.Lb(1073742336,x.a,x.a,[]),i.Lb(1073742336,k.a,k.a,[]),i.Lb(1073742336,a,a,[]),i.Lb(256,_.m,"XSRF-TOKEN",[]),i.Lb(256,_.n,"X-XSRF-TOKEN",[]),i.Lb(256,f.p,void 0,[]),i.Lb(256,f.n,void 0,[]),i.Lb(256,f.o,void 0,[]),i.Lb(256,f.a,void 0,[]),i.Lb(1024,s.k,(function(){return[[{path:"",component:e}]]}),[])])}))}}]);