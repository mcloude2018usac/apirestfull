(window.webpackJsonp=window.webpackJsonp||[]).push([[115],{"8SZI":function(n,l,e){"use strict";e.r(l),e.d(l,"WalkthroughPageModuleNgFactory",(function(){return S}));var t=e("8Y7J"),o=e("ZtEv");class i{constructor(n,l,e,t,o){this.route=n,this.router=l,this.menu=e,this.translateService=t,this.authenticationService=o,this.foto0="/api/image2s/5f146aa48caa41db981e6830",this.botones0=!0,this.foto2="/api/image2s/5f146aa48caa41db981e6830",this.cintia="/api/image2s/5f146aa48caa41db981e6830",this.slidesOptions={zoom:{toggle:!1}},this.isFirstSlide=!0,this.isLastSlide=!1,this.apifoto=this.authenticationService.getapifoto()}ngOnInit(){this.menu.enable(!1);var n=window.location.href.split("/"),l=n[0].split(":")[0],e=n[2].split(":")[0],t=n[2].split(":")[1];this.authenticationService.setip(l,e,t),this.idempresa=this.authenticationService.getempresa(),this.authenticationService.getRegsintok(this.idempresa+"/todos","empresas",0).then(n=>{let l=[];l=n,this.foto0=l[0].foto0,this.foto2=l[0].foto2,this.nombre0=l[0].nombre,this.inicio=l[0].inicio,this.inicio0=l[0].pagina0,this.lenguaje=l[0].lenguaje,"es"===this.lenguaje?(this.titulo1=l[0].titulo0,this.nombre1=l[0].nombrecorto):(this.titulo1=l[0].titulo02,this.nombre1=l[0].nombrecorto2),"clasica"!==this.inicio0&&(this.botones0=!1),this.siregister=l[0].siregister,this.fromFlag=this.apifoto+l[0].foto0,document.documentElement.style.setProperty("--ion-color-primary",l[0].color1),document.documentElement.style.setProperty("--ion-color-secondary",l[0].color2),document.documentElement.style.setProperty("--ion-color-tertiary",l[0].color3),document.documentElement.style.setProperty("--ion-color-medium",l[0].color4),"Pagina de logeo"===this.inicio&&this.router.navigate(["/auth/login"])},n=>{this.authenticationService.presentAlert(n.error,"Precauci\xf3n","")})}ngAfterViewInit(){"clasica"===this.inicio0&&(this.slides.isBeginning().then(n=>{this.isFirstSlide=n}),this.slides.isEnd().then(n=>{this.isLastSlide=n}),this.slides.ionSlideWillChange.subscribe(n=>{this.slides.isBeginning().then(n=>{this.isFirstSlide=n}),this.slides.isEnd().then(n=>{this.isLastSlide=n})}))}skipWalkthrough(){this.slides.length().then(n=>{this.slides.slideTo(n)})}}class a{}var r=e("pMnS"),c=e("MKJQ"),d=e("sZkV"),u=e("iInd"),s=e("SVse"),g=e("TSSN"),p=e("M4wD"),h=e("B7gC"),m=e("6LEC"),f=e("2gss"),v=t["\u0275crt"]({encapsulation:0,styles:[["[_nghost-%COMP%]{--page-margin:var(--app-broad-margin);--page-background:var(--app-background);--page-swiper-pagination-space:40px;--page-swiper-pagination-height:18px;--page-pagination-bullet-size:10px;--page-first-slide-background:#c1ebff;--page-second-slide-background:#a9ebd2;--page-third-slide-background:#f0cbe5;--page-last-slide-background:#eef3ff;--page-vector-decoration-fill:var(--ion-color-light-shade)}ion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]{--ion-toolbar-background:transparent}ion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{--color:var(--ion-color-lightest)}.page-centered-element[_ngcontent-%COMP%]{position:absolute;left:0;right:0;top:0;bottom:0;display:flex;align-items:center;justify-content:center}h1[_ngcontent-%COMP%]{font-size:50px}.buttons-container[_ngcontent-%COMP%]{margin-top:30px}ion-content[_ngcontent-%COMP%]{position:absolute;top:0}.walkthrough-slides[_ngcontent-%COMP%]{--bullet-background:var(--ion-color-dark);--bullet-background-active:var(--ion-color-dark);height:100%}.walkthrough-slides[_ngcontent-%COMP%]   .slide-inner-row[_ngcontent-%COMP%]{height:100%;width:100%;padding:0;padding-top:var(--app-header-height);border-bottom:var(--page-swiper-pagination-space) solid transparent;background-clip:padding-box;background-color:var(--page-vector-decoration-fill)}.illustration-and-decoration-slide[_ngcontent-%COMP%]   .slide-inner-row[_ngcontent-%COMP%]{--ion-grid-column-padding:0px;flex-flow:column;justify-content:flex-start;align-items:center}.illustration-and-decoration-slide[_ngcontent-%COMP%]   .illustration-col[_ngcontent-%COMP%]{flex-grow:0;flex-shrink:0;min-height:auto;min-height:-webkit-fit-content;min-height:-moz-fit-content;min-height:fit-content;max-width:30vh;padding:0}.illustration-and-decoration-slide[_ngcontent-%COMP%]   .decoration-col[_ngcontent-%COMP%]{flex-grow:0;flex-shrink:1;min-height:12vh;transform:translateZ(0)}.illustration-and-decoration-slide[_ngcontent-%COMP%]   .decoration-col[_ngcontent-%COMP%]   .vector-decoration[_ngcontent-%COMP%]{fill:currentColor;color:var(--page-vector-decoration-fill);background-color:var(--page-background);padding-bottom:4px;transform:translateZ(0);shape-rendering:geometricprecision;height:calc(100% + 1px)}.illustration-and-decoration-slide[_ngcontent-%COMP%]   .info-col[_ngcontent-%COMP%]{flex-grow:1;flex-shrink:0;min-height:auto;background-color:var(--page-background);margin-bottom:-1px;transform:translateZ(0)}.illustration-and-decoration-slide[_ngcontent-%COMP%]   .info-col[_ngcontent-%COMP%]   .info-wrapper[_ngcontent-%COMP%]{margin:calc(var(--page-margin)*-1) var(--page-margin) 0;text-align:left}.illustration-and-decoration-slide[_ngcontent-%COMP%]   .info-col[_ngcontent-%COMP%]   .info-wrapper[_ngcontent-%COMP%]   .info-title[_ngcontent-%COMP%]{margin:0;margin-bottom:var(--page-margin);color:var(--ion-color-dark)}.illustration-and-decoration-slide[_ngcontent-%COMP%]   .info-col[_ngcontent-%COMP%]   .info-wrapper[_ngcontent-%COMP%]   .info-paragraph[_ngcontent-%COMP%]{color:var(--ion-color-medium-shade);font-size:14px;margin:0 0 calc(var(--page-margin)/2)}.illustration-and-decoration-slide[_ngcontent-%COMP%]   .info-col[_ngcontent-%COMP%]   .info-wrapper[_ngcontent-%COMP%]   .info-paragraph[_ngcontent-%COMP%]:last-child{margin-bottom:0}.first-slide[_ngcontent-%COMP%]{--page-vector-decoration-fill:var(--page-first-slide-background)}.second-slide[_ngcontent-%COMP%]{--page-vector-decoration-fill:var(--page-second-slide-background)}.third-slide[_ngcontent-%COMP%]{--page-vector-decoration-fill:var(--page-third-slide-background)}.last-slide[_ngcontent-%COMP%]{--page-vector-decoration-fill:var(--page-last-slide-background)}.last-slide[_ngcontent-%COMP%]   .slide-inner-row[_ngcontent-%COMP%]{border-width:0}.last-slide[_ngcontent-%COMP%]   .info-col[_ngcontent-%COMP%]{padding:var(--page-margin)}.last-slide[_ngcontent-%COMP%]   .info-col[_ngcontent-%COMP%]   .info-outer[_ngcontent-%COMP%]{height:100%;align-items:flex-end;flex-direction:column}.last-slide[_ngcontent-%COMP%]   .info-col[_ngcontent-%COMP%]   .info-outer[_ngcontent-%COMP%]   .info-wrapper[_ngcontent-%COMP%]{margin:calc(var(--page-margin)*-1) 0 0}.last-slide[_ngcontent-%COMP%]   .info-col[_ngcontent-%COMP%]   .info-outer[_ngcontent-%COMP%]   .call-to-actions-wrapper[_ngcontent-%COMP%]{max-height:-webkit-fit-content;max-height:-moz-fit-content;max-height:fit-content}.last-slide[_ngcontent-%COMP%]   .info-col[_ngcontent-%COMP%]   .get-started-button[_ngcontent-%COMP%]{margin:0}.last-slide[_ngcontent-%COMP%]   .info-col[_ngcontent-%COMP%]   .alt-call-to-action-row[_ngcontent-%COMP%]{padding-top:5px;align-items:center;justify-content:space-evenly}.last-slide[_ngcontent-%COMP%]   .info-col[_ngcontent-%COMP%]   .alt-call-to-action-row[_ngcontent-%COMP%]   .cta-leading-text[_ngcontent-%COMP%]{color:var(--ion-color-medium);font-size:16px}.last-slide[_ngcontent-%COMP%]   .info-col[_ngcontent-%COMP%]   .alt-call-to-action-row[_ngcontent-%COMP%]   .login-button[_ngcontent-%COMP%]{--color:var(--ion-color-secondary);margin:0}.first-slide-active[_nghost-%COMP%]   .skip-walkthrough-button[_ngcontent-%COMP%]{visibility:hidden}.last-slide-active[_nghost-%COMP%]     .walkthrough-slides .swiper-pagination{display:none}.last-slide-active[_nghost-%COMP%]   .skip-walkthrough-button[_ngcontent-%COMP%]{visibility:hidden}[_nghost-%COMP%]     .walkthrough-slides .swiper-pagination{height:var(--page-swiper-pagination-height);line-height:1;bottom:calc((var(--page-swiper-pagination-space) - var(--page-swiper-pagination-height))/2)}[_nghost-%COMP%]     .walkthrough-slides .swiper-pagination .swiper-pagination-bullet{width:var(--page-pagination-bullet-size);height:var(--page-pagination-bullet-size)}"],["app-image-shell.illustration-image[_ngcontent-%COMP%]{--image-shell-loading-background:transparent;--image-shell-spinner-color:var(--ion-color-lightest)}"],["@media only screen and (min-device-width:320px) and (max-device-width:480px) and (-webkit-min-device-pixel-ratio:2) and (device-aspect-ratio:2/3){.illustration-and-decoration-slide[_ngcontent-%COMP%]   .illustration-col[_ngcontent-%COMP%]{max-width:30vh;padding:0}.illustration-and-decoration-slide[_ngcontent-%COMP%]   .decoration-col[_ngcontent-%COMP%]{min-height:12vh}.illustration-and-decoration-slide[_ngcontent-%COMP%]   .info-col[_ngcontent-%COMP%]   .info-wrapper[_ngcontent-%COMP%]   .info-title[_ngcontent-%COMP%]{margin-bottom:calc(var(--page-margin)/2);font-size:20px}}@media only screen and (min-device-width:320px) and (max-device-width:568px) and (-webkit-min-device-pixel-ratio:2) and (device-aspect-ratio:40/71){.illustration-and-decoration-slide[_ngcontent-%COMP%]   .illustration-col[_ngcontent-%COMP%]{max-width:32vh;padding:0}.illustration-and-decoration-slide[_ngcontent-%COMP%]   .decoration-col[_ngcontent-%COMP%]{min-height:12vh}.illustration-and-decoration-slide[_ngcontent-%COMP%]   .info-col[_ngcontent-%COMP%]   .info-wrapper[_ngcontent-%COMP%]   .info-title[_ngcontent-%COMP%]{margin-bottom:calc(var(--page-margin)/2);font-size:20px}}@media only screen and (min-device-width:375px) and (max-device-width:667px) and (-webkit-min-device-pixel-ratio:2){.illustration-and-decoration-slide[_ngcontent-%COMP%]   .illustration-col[_ngcontent-%COMP%]{max-width:36vh;padding:2vh 0}.illustration-and-decoration-slide[_ngcontent-%COMP%]   .decoration-col[_ngcontent-%COMP%]{min-height:14vh}}@media only screen and (min-device-width:375px) and (max-device-width:812px) and (-webkit-min-device-pixel-ratio:3){.illustration-and-decoration-slide[_ngcontent-%COMP%]   .illustration-col[_ngcontent-%COMP%]{max-width:34vh;padding:6vh 0}.illustration-and-decoration-slide[_ngcontent-%COMP%]   .decoration-col[_ngcontent-%COMP%]{min-height:12vh}}@media only screen and (min-device-width:414px) and (max-device-width:736px) and (-webkit-min-device-pixel-ratio:3){.illustration-and-decoration-slide[_ngcontent-%COMP%]   .illustration-col[_ngcontent-%COMP%]{max-width:38vh;padding:4vh 0}.illustration-and-decoration-slide[_ngcontent-%COMP%]   .decoration-col[_ngcontent-%COMP%]{min-height:14vh}}"]],data:{}});function b(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,6,"ion-button",[["class","get-started-button"],["color","warning"],["expand","block"]],[[8,"hidden",0]],[[null,"click"]],(function(n,l,e){var o=!0;return"click"===l&&(o=!1!==t["\u0275nov"](n,2).onClick()&&o),"click"===l&&(o=!1!==t["\u0275nov"](n,4).onClick(e)&&o),o}),c.mb,c.e)),t["\u0275did"](1,49152,null,0,d.l,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{color:[0,"color"],expand:[1,"expand"]},null),t["\u0275did"](2,16384,null,0,u.n,[u.m,u.a,[8,null],t.Renderer2,t.ElementRef],{routerLink:[0,"routerLink"]},null),t["\u0275pad"](3,1),t["\u0275did"](4,737280,null,0,d.Nb,[s.LocationStrategy,d.Hb,t.ElementRef,u.m,[2,u.n]],null,null),(n()(),t["\u0275ted"](5,0,[" ",""])),t["\u0275pid"](131072,g.k,[g.l,t.ChangeDetectorRef])],(function(n,l){n(l,1,0,"warning","block");var e=n(l,3,0,"/auth/signup");n(l,2,0,e),n(l,4,0)}),(function(n,l){n(l,0,0,l.component.botones0),n(l,5,0,t["\u0275unv"](l,5,0,t["\u0275nov"](l,6).transform("REGISTRARSE")))}))}function C(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,0,"img",[["style","display:block; margin:left;width:200px;height: 50;"]],[[8,"src",4]],null,null,null,null))],null,(function(n,l){var e=l.component;n(l,0,0,e.apifoto+e.foto2)}))}function M(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,21,"div",[["class","page-centered-element"],["style"," text-align: center;  color: white; background-size: 100% 100%; background-color: #fff; background-size: cover; "]],null,null,null,null,null)),t["\u0275did"](1,278528,null,0,s.NgStyle,[t.ElementRef,t.KeyValueDiffers,t.Renderer2],{ngStyle:[0,"ngStyle"]},null),t["\u0275pod"](2,{"background-image":0}),(n()(),t["\u0275eld"](3,0,null,null,18,"div",[["class","content"]],null,null,null,null,null)),(n()(),t["\u0275eld"](4,0,null,null,1,"h1",[],null,null,null,null,null)),(n()(),t["\u0275ted"](5,null,["",""])),(n()(),t["\u0275eld"](6,0,null,null,1,"h5",[],null,null,null,null,null)),(n()(),t["\u0275ted"](7,null,["",""])),(n()(),t["\u0275eld"](8,0,null,null,13,"div",[["class","buttons-container"]],null,null,null,null,null)),(n()(),t["\u0275eld"](9,0,null,null,6,"ion-button",[["class","get-started-button"],["color","tertiary"],["expand","block"]],[[8,"hidden",0]],[[null,"click"]],(function(n,l,e){var o=!0;return"click"===l&&(o=!1!==t["\u0275nov"](n,11).onClick()&&o),"click"===l&&(o=!1!==t["\u0275nov"](n,13).onClick(e)&&o),o}),c.mb,c.e)),t["\u0275did"](10,49152,null,0,d.l,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{color:[0,"color"],expand:[1,"expand"]},null),t["\u0275did"](11,16384,null,0,u.n,[u.m,u.a,[8,null],t.Renderer2,t.ElementRef],{routerLink:[0,"routerLink"]},null),t["\u0275pad"](12,1),t["\u0275did"](13,737280,null,0,d.Nb,[s.LocationStrategy,d.Hb,t.ElementRef,u.m,[2,u.n]],null,null),(n()(),t["\u0275ted"](14,0,["",""])),t["\u0275pid"](131072,g.k,[g.l,t.ChangeDetectorRef]),(n()(),t["\u0275eld"](16,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),t["\u0275and"](16777216,null,null,1,null,b)),t["\u0275did"](18,16384,null,0,s.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["\u0275eld"](19,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),t["\u0275and"](16777216,null,null,1,null,C)),t["\u0275did"](21,16384,null,0,s.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null)],(function(n,l){var e=l.component,t=n(l,2,0,"url("+e.fromFlag+")");n(l,1,0,t),n(l,10,0,"tertiary","block");var o=n(l,12,0,"/auth/login");n(l,11,0,o),n(l,13,0),n(l,18,0,"No"!==e.siregister),n(l,21,0,void 0!==e.foto2&&""!==e.foto2)}),(function(n,l){var e=l.component;n(l,5,0,e.nombre0),n(l,7,0,e.nombre1),n(l,9,0,e.botones0),n(l,14,0,t["\u0275unv"](l,14,0,t["\u0275nov"](l,15).transform("INICIAR_SESION")))}))}function O(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,5,"ion-button",[["class","get-started-button"],["color","warning"],["expand","block"]],null,[[null,"click"]],(function(n,l,e){var o=!0;return"click"===l&&(o=!1!==t["\u0275nov"](n,2).onClick()&&o),"click"===l&&(o=!1!==t["\u0275nov"](n,4).onClick(e)&&o),o}),c.mb,c.e)),t["\u0275did"](1,49152,null,0,d.l,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{color:[0,"color"],expand:[1,"expand"]},null),t["\u0275did"](2,16384,null,0,u.n,[u.m,u.a,[8,null],t.Renderer2,t.ElementRef],{routerLink:[0,"routerLink"]},null),t["\u0275pad"](3,1),t["\u0275did"](4,737280,null,0,d.Nb,[s.LocationStrategy,d.Hb,t.ElementRef,u.m,[2,u.n]],null,null),(n()(),t["\u0275ted"](-1,0,[" \xbfREGISTRARSE?"]))],(function(n,l){n(l,1,0,"warning","block");var e=n(l,3,0,"/auth/signup");n(l,2,0,e),n(l,4,0)}),null)}function P(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,0,"img",[["style","display:block; margin:left;width:150px;height: 50;"]],[[8,"src",4]],null,null,null,null))],null,(function(n,l){var e=l.component;n(l,0,0,e.apifoto+e.foto2)}))}function _(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,44,"ion-slides",[["class","walkthrough-slides"],["pager","true"]],null,null,null,c.dc,c.V)),t["\u0275did"](1,49152,[[1,4]],0,d.pb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{options:[0,"options"],pager:[1,"pager"]},null),(n()(),t["\u0275eld"](2,0,null,0,42,"ion-slide",[["class","last-slide illustration-and-decoration-slide"]],null,null,null,c.cc,c.U)),t["\u0275did"](3,49152,null,0,d.ob,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](4,0,null,0,40,"ion-row",[["class","slide-inner-row"]],null,null,null,c.Wb,c.O)),t["\u0275did"](5,49152,null,0,d.hb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](6,0,null,0,6,"ion-col",[["class","illustration-col"]],null,null,null,c.vb,c.n)),t["\u0275did"](7,49152,null,0,d.u,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](8,0,null,0,4,"app-aspect-ratio",[],[[4,"padding",null]],null,null,p.b,p.a)),t["\u0275did"](9,49152,null,0,h.a,[],{ratio:[0,"ratio"]},null),t["\u0275pod"](10,{w:0,h:1}),(n()(),t["\u0275eld"](11,0,null,0,1,"app-image-shell",[["animation","spinner"],["class","illustration-image"]],[[2,"img-loaded",null],[4,"backgroundImage",null],[1,"display",0]],null,null,m.b,m.a)),t["\u0275did"](12,49152,null,0,f.a,[t.PLATFORM_ID],{src:[0,"src"],alt:[1,"alt"]},null),(n()(),t["\u0275eld"](13,0,null,0,3,"ion-col",[["class","decoration-col"]],null,null,null,c.vb,c.n)),t["\u0275did"](14,49152,null,0,d.u,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](15,0,null,0,1,":svg:svg",[[":xml:space","preserve"],[":xmlns:xlink","http://www.w3.org/1999/xlink"],["class","vector-decoration"],["height","100px"],["preserveAspectRatio","none"],["style","enable-background:new 0 0 64 24;"],["version","1.1"],["viewBox","0 0 64 18"],["width","100%"],["x","0px"],["xmlns","http://www.w3.org/2000/svg"],["y","0px"]],null,null,null,null,null)),(n()(),t["\u0275eld"](16,0,null,null,0,":svg:path",[["d","M0 0 L64 0 L64 10 Q56 24 46 12 Q34 0 26 8 Q10 22 0 8 Z"]],null,null,null,null,null)),(n()(),t["\u0275eld"](17,0,null,0,27,"ion-col",[["class","info-col"]],null,null,null,c.vb,c.n)),t["\u0275did"](18,49152,null,0,d.u,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](19,0,null,0,25,"ion-row",[["class","info-outer"]],null,null,null,c.Wb,c.O)),t["\u0275did"](20,49152,null,0,d.hb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](21,0,null,0,9,"ion-col",[],null,null,null,c.vb,c.n)),t["\u0275did"](22,49152,null,0,d.u,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](23,0,null,0,7,"div",[["class","info-wrapper"]],null,null,null,null,null)),(n()(),t["\u0275eld"](24,0,null,null,1,"h3",[],null,null,null,null,null)),(n()(),t["\u0275ted"](25,null,[" ",""])),(n()(),t["\u0275eld"](26,0,null,null,3,"p",[["class","info-paragraph"]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,[" by "])),(n()(),t["\u0275eld"](28,0,null,null,1,"strong",[],null,null,null,null,null)),(n()(),t["\u0275ted"](29,null,["",""])),(n()(),t["\u0275eld"](30,0,null,null,0,"div",[["class","info-paragraph"]],[[8,"innerHTML",1]],null,null,null,null)),(n()(),t["\u0275eld"](31,0,null,0,13,"ion-col",[["class","call-to-actions-wrapper"]],null,null,null,c.vb,c.n)),t["\u0275did"](32,49152,null,0,d.u,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](33,0,null,0,5,"ion-button",[["class","get-started-button"],["color","tertiary"],["expand","block"]],null,[[null,"click"]],(function(n,l,e){var o=!0;return"click"===l&&(o=!1!==t["\u0275nov"](n,35).onClick()&&o),"click"===l&&(o=!1!==t["\u0275nov"](n,37).onClick(e)&&o),o}),c.mb,c.e)),t["\u0275did"](34,49152,null,0,d.l,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{color:[0,"color"],expand:[1,"expand"]},null),t["\u0275did"](35,16384,null,0,u.n,[u.m,u.a,[8,null],t.Renderer2,t.ElementRef],{routerLink:[0,"routerLink"]},null),t["\u0275pad"](36,1),t["\u0275did"](37,737280,null,0,d.Nb,[s.LocationStrategy,d.Hb,t.ElementRef,u.m,[2,u.n]],null,null),(n()(),t["\u0275ted"](-1,0,["INICIAR SESI\xd3N"])),(n()(),t["\u0275eld"](39,0,null,0,0,"br",[],null,null,null,null,null)),(n()(),t["\u0275and"](16777216,null,0,1,null,O)),t["\u0275did"](41,16384,null,0,s.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["\u0275eld"](42,0,null,0,0,"br",[],null,null,null,null,null)),(n()(),t["\u0275and"](16777216,null,0,1,null,P)),t["\u0275did"](44,16384,null,0,s.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null)],(function(n,l){var e=l.component;n(l,1,0,e.slidesOptions,"true");var t=n(l,10,0,10,11);n(l,9,0,t),n(l,12,0,e.apifoto+e.foto0,"walkthrough"),n(l,34,0,"tertiary","block");var o=n(l,36,0,"/auth/login");n(l,35,0,o),n(l,37,0),n(l,41,0,"No"!==e.siregister),n(l,44,0,void 0!==e.foto2&&""!==e.foto2)}),(function(n,l){var e=l.component;n(l,8,0,t["\u0275nov"](l,9).ratioPadding),n(l,11,0,t["\u0275nov"](l,12).imageLoaded,t["\u0275nov"](l,12).backgroundImage,t["\u0275nov"](l,12).display),n(l,25,0,e.nombre0),n(l,29,0,e.nombre1),n(l,30,0,e.titulo1)}))}function k(n){return t["\u0275vid"](0,[t["\u0275qud"](402653184,1,{slides:0}),(n()(),t["\u0275eld"](1,0,null,null,8,"ion-header",[["class","ion-no-border"]],null,null,null,c.Cb,c.u)),t["\u0275did"](2,49152,null,0,d.C,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](3,0,null,0,6,"ion-toolbar",[],null,null,null,c.oc,c.gb)),t["\u0275did"](4,49152,null,0,d.Ab,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](5,0,null,0,4,"ion-buttons",[["slot","end"]],null,null,null,c.nb,c.f)),t["\u0275did"](6,49152,null,0,d.m,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](7,0,null,0,2,"ion-button",[["class","skip-walkthrough-button"],["fill","clear"]],null,[[null,"click"]],(function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.skipWalkthrough()&&t),t}),c.mb,c.e)),t["\u0275did"](8,49152,null,0,d.l,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{fill:[0,"fill"]},null),(n()(),t["\u0275ted"](-1,0,["Saltar"])),(n()(),t["\u0275eld"](10,0,null,null,5,"ion-content",[["force-overscroll","false"],["fullscreen",""],["padding",""]],null,null,null,c.wb,c.o)),t["\u0275did"](11,49152,null,0,d.v,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{fullscreen:[0,"fullscreen"]},null),(n()(),t["\u0275and"](16777216,null,0,1,null,M)),t["\u0275did"](13,16384,null,0,s.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["\u0275and"](16777216,null,0,1,null,_)),t["\u0275did"](15,16384,null,0,s.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null)],(function(n,l){var e=l.component;n(l,8,0,"clear"),n(l,11,0,""),n(l,13,0,"clasica"!==e.inicio0),n(l,15,0,"clasica"===e.inicio0)}),null)}function w(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"app-walkthrough",[],[[2,"first-slide-active",null],[2,"last-slide-active",null]],null,null,k,v)),t["\u0275did"](1,4308992,null,0,i,[u.a,u.m,d.Fb,g.l,o.a],null,null)],(function(n,l){n(l,1,0)}),(function(n,l){n(l,0,0,t["\u0275nov"](l,1).isFirstSlide,t["\u0275nov"](l,1).isLastSlide)}))}var R=t["\u0275ccf"]("app-walkthrough",i,w,{},{},[]),x=e("s7LF"),y=e("IheW"),E=e("ZpN7"),N=e("Kt/9"),I=e("j1ZV"),S=t["\u0275cmf"](a,[],(function(n){return t["\u0275mod"]([t["\u0275mpd"](512,t.ComponentFactoryResolver,t["\u0275CodegenComponentFactoryResolver"],[[8,[r.a,R]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t["\u0275mpd"](4608,s.NgLocalization,s.NgLocaleLocalization,[t.LOCALE_ID]),t["\u0275mpd"](4608,x.w,x.w,[]),t["\u0275mpd"](4608,d.c,d.c,[t.NgZone,t.ApplicationRef]),t["\u0275mpd"](4608,d.Gb,d.Gb,[d.c,t.ComponentFactoryResolver,t.Injector]),t["\u0275mpd"](4608,d.Lb,d.Lb,[d.c,t.ComponentFactoryResolver,t.Injector]),t["\u0275mpd"](4608,y.i,y.o,[s.DOCUMENT,t.PLATFORM_ID,y.m]),t["\u0275mpd"](4608,y.p,y.p,[y.i,y.n]),t["\u0275mpd"](5120,y.a,(function(n){return[n]}),[y.p]),t["\u0275mpd"](4608,y.l,y.l,[]),t["\u0275mpd"](6144,y.j,null,[y.l]),t["\u0275mpd"](4608,y.h,y.h,[y.j]),t["\u0275mpd"](6144,y.b,null,[y.h]),t["\u0275mpd"](4608,y.f,y.k,[y.b,t.Injector]),t["\u0275mpd"](4608,y.c,y.c,[y.f]),t["\u0275mpd"](5120,t.APP_INITIALIZER,(function(n){return[E.b(n)]}),[N.a]),t["\u0275mpd"](4608,g.h,g.g,[]),t["\u0275mpd"](4608,g.d,g.f,[]),t["\u0275mpd"](4608,g.j,g.e,[]),t["\u0275mpd"](4608,g.c,g.b,[]),t["\u0275mpd"](4608,g.l,g.l,[g.m,g.h,g.d,g.j,g.c,g.n,g.p,g.o,g.a]),t["\u0275mpd"](1073742336,s.CommonModule,s.CommonModule,[]),t["\u0275mpd"](1073742336,x.v,x.v,[]),t["\u0275mpd"](1073742336,x.j,x.j,[]),t["\u0275mpd"](1073742336,g.i,g.i,[]),t["\u0275mpd"](1073742336,d.Cb,d.Cb,[]),t["\u0275mpd"](1073742336,u.p,u.p,[[2,u.u],[2,u.m]]),t["\u0275mpd"](1073742336,y.e,y.e,[]),t["\u0275mpd"](1073742336,y.d,y.d,[]),t["\u0275mpd"](1073742336,E.a,E.a,[]),t["\u0275mpd"](1073742336,I.a,I.a,[]),t["\u0275mpd"](1073742336,a,a,[]),t["\u0275mpd"](256,y.m,"XSRF-TOKEN",[]),t["\u0275mpd"](256,y.n,"X-XSRF-TOKEN",[]),t["\u0275mpd"](256,g.p,void 0,[]),t["\u0275mpd"](256,g.n,void 0,[]),t["\u0275mpd"](256,g.o,void 0,[]),t["\u0275mpd"](256,g.a,void 0,[]),t["\u0275mpd"](1024,u.k,(function(){return[[{path:"",component:i}]]}),[])])}))}}]);