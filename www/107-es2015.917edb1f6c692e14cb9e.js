(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{pZl2:function(l,n,e){"use strict";e.r(n),e.d(n,"TabsPageModuleNgFactory",(function(){return X}));var t=e("8Y7J");class a{}var i=e("pMnS"),o=e("MKJQ"),u=e("sZkV"),r=e("SVse"),d=e("ZtEv");class s{constructor(l,n){this.menu=l,this.authenticationService=n,this.inventario=!0,this.totalpay="",this.totalmarket="",this.formspay="",this.procesopay="",this.t1=0,this.t2=0,this.t3=0,this.userinfo=[],this.totalpay=this.authenticationService.getsibilletera(),this.totalmarket=this.authenticationService.getsimarket(),this.formspay=this.authenticationService.getformularios(),this.procesopay=this.authenticationService.getprocess()}ngOnInit(){this.userinfo=this.authenticationService.getcopiauser(),this.rolex=this.userinfo[0].role,"Administrador"===this.userinfo[0].role||"Inventario admin"===this.userinfo[0].role?this.inventario=!1:"Inspector planificaci\xf3n"===this.userinfo[0].role||"Gerente de servicios"===this.userinfo[0].role?this.t1=1:"Supervisor planificaci\xf3n"===this.userinfo[0].role?this.t2=1:this.t3=1}ionViewWillEnter(){this.menu.enable(!0)}}var c=t["\u0275crt"]({encapsulation:0,styles:[["ion-tab-button[_ngcontent-%COMP%]{--color:var(--ion-color-medium-shade);--color-selected:var(--ion-color-dark)}"]],data:{}});function m(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,3,"ion-tab-button",[["tab","ProvidesPage"],["title","Tiendas"]],null,null,null,o.lc,o.bb)),t["\u0275did"](1,49152,null,0,u.tb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{tab:[0,"tab"]},null),(l()(),t["\u0275eld"](2,0,null,0,1,"ion-icon",[["name","home-outline"]],null,null,null,o.Fb,o.v)),t["\u0275did"](3,49152,null,0,u.D,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{name:[0,"name"]},null)],(function(l,n){l(n,1,0,"ProvidesPage"),l(n,3,0,"home-outline")}),null)}function f(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,3,"ion-tab-button",[["tab","PedidoCompraPage"],["title","Pedidos"]],null,null,null,o.lc,o.bb)),t["\u0275did"](1,49152,null,0,u.tb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{tab:[0,"tab"]},null),(l()(),t["\u0275eld"](2,0,null,0,1,"ion-icon",[["name","list-circle-outline"]],null,null,null,o.Fb,o.v)),t["\u0275did"](3,49152,null,0,u.D,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{name:[0,"name"]},null)],(function(l,n){l(n,1,0,"PedidoCompraPage"),l(n,3,0,"list-circle-outline")}),null)}function g(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,3,"ion-tab-button",[["tab","billetera-list"],["title","TotalPay"]],null,null,null,o.lc,o.bb)),t["\u0275did"](1,49152,null,0,u.tb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{tab:[0,"tab"]},null),(l()(),t["\u0275eld"](2,0,null,0,1,"ion-icon",[["name","wallet-outline"]],null,null,null,o.Fb,o.v)),t["\u0275did"](3,49152,null,0,u.D,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{name:[0,"name"]},null)],(function(l,n){l(n,1,0,"billetera-list"),l(n,3,0,"wallet-outline")}),null)}function h(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,3,"ion-tab-button",[["tab","categoriaformularioListPage"],["title","Mis Procesos y Formularios"]],null,null,null,o.lc,o.bb)),t["\u0275did"](1,49152,null,0,u.tb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{tab:[0,"tab"]},null),(l()(),t["\u0275eld"](2,0,null,0,1,"ion-icon",[["name","open-outline"]],null,null,null,o.Fb,o.v)),t["\u0275did"](3,49152,null,0,u.D,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{name:[0,"name"]},null)],(function(l,n){l(n,1,0,"categoriaformularioListPage"),l(n,3,0,"open-outline")}),null)}function p(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,3,"ion-tab-button",[["tab","frmtareasprogramadas0ListPage"],["title","Mis tareas programadas"]],null,null,null,o.lc,o.bb)),t["\u0275did"](1,49152,null,0,u.tb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{tab:[0,"tab"]},null),(l()(),t["\u0275eld"](2,0,null,0,1,"ion-icon",[["name","reader-outline"]],null,null,null,o.Fb,o.v)),t["\u0275did"](3,49152,null,0,u.D,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{name:[0,"name"]},null)],(function(l,n){l(n,1,0,"frmtareasprogramadas0ListPage"),l(n,3,0,"reader-outline")}),null)}function b(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,3,"ion-tab-button",[["tab","frmtareasprogramadasListPage"],["title","Mis tareas programadas"]],null,null,null,o.lc,o.bb)),t["\u0275did"](1,49152,null,0,u.tb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{tab:[0,"tab"]},null),(l()(),t["\u0275eld"](2,0,null,0,1,"ion-icon",[["name","reader-outline"]],null,null,null,o.Fb,o.v)),t["\u0275did"](3,49152,null,0,u.D,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{name:[0,"name"]},null)],(function(l,n){l(n,1,0,"frmtareasprogramadasListPage"),l(n,3,0,"reader-outline")}),null)}function R(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,3,"ion-tab-button",[["tab","contact-card"],["title","Mi cuenta"]],null,null,null,o.lc,o.bb)),t["\u0275did"](1,49152,null,0,u.tb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{tab:[0,"tab"]},null),(l()(),t["\u0275eld"](2,0,null,0,1,"ion-icon",[["name","person-circle-outline"]],null,null,null,o.Fb,o.v)),t["\u0275did"](3,49152,null,0,u.D,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{name:[0,"name"]},null)],(function(l,n){l(n,1,0,"contact-card"),l(n,3,0,"person-circle-outline")}),null)}function C(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,6,"ion-tab-button",[["tab","notifications"],["title","Notificaciones"]],null,null,null,o.lc,o.bb)),t["\u0275did"](1,49152,null,0,u.tb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{tab:[0,"tab"]},null),(l()(),t["\u0275eld"](2,0,null,0,1,"ion-icon",[["name","notifications-outline"]],null,null,null,o.Fb,o.v)),t["\u0275did"](3,49152,null,0,u.D,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{name:[0,"name"]},null),(l()(),t["\u0275eld"](4,0,null,0,2,"ion-badge",[],null,null,null,o.nb,o.d)),t["\u0275did"](5,49152,null,0,u.k,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275ted"](-1,0,["6"]))],(function(l,n){l(n,1,0,"notifications"),l(n,3,0,"notifications-outline")}),null)}function v(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,3,"ion-tab-button",[["tab","AsociadoListPage"],["title","Inventario"]],[[8,"hidden",0]],null,null,o.lc,o.bb)),t["\u0275did"](1,49152,null,0,u.tb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{tab:[0,"tab"]},null),(l()(),t["\u0275eld"](2,0,null,0,1,"ion-icon",[["name","file-tray-full-outline"]],null,null,null,o.Fb,o.v)),t["\u0275did"](3,49152,null,0,u.D,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{name:[0,"name"]},null)],(function(l,n){l(n,1,0,"AsociadoListPage"),l(n,3,0,"file-tray-full-outline")}),(function(l,n){l(n,0,0,n.component.inventario)}))}function N(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,26,"ion-tabs",[],null,[[null,"ionTabButtonClick"]],(function(l,n,e){var a=!0;return"ionTabButtonClick"===n&&(a=!1!==t["\u0275nov"](l,1).select(e.detail.tab)&&a),a}),o.mc,o.cb)),t["\u0275did"](1,49152,null,1,u.ub,[u.Hb],null,null),t["\u0275qud"](603979776,1,{tabBar:0}),(l()(),t["\u0275eld"](3,0,null,1,23,"ion-tab-bar",[["slot","bottom"]],null,null,null,o.kc,o.ab)),t["\u0275did"](4,49152,[[1,4]],0,u.sb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275and"](16777216,null,0,1,null,m)),t["\u0275did"](6,16384,null,0,r.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),t["\u0275and"](16777216,null,0,1,null,f)),t["\u0275did"](8,16384,null,0,r.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),t["\u0275and"](16777216,null,0,1,null,g)),t["\u0275did"](10,16384,null,0,r.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),t["\u0275and"](16777216,null,0,1,null,h)),t["\u0275did"](12,16384,null,0,r.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),t["\u0275and"](16777216,null,0,1,null,p)),t["\u0275did"](14,16384,null,0,r.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),t["\u0275eld"](15,0,null,0,3,"ion-tab-button",[["tab","frmtareasprogramadastareasListPage"],["title","Mis tareas"]],null,null,null,o.lc,o.bb)),t["\u0275did"](16,49152,null,0,u.tb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{tab:[0,"tab"]},null),(l()(),t["\u0275eld"](17,0,null,0,1,"ion-icon",[["name","calendar-outline"]],null,null,null,o.Fb,o.v)),t["\u0275did"](18,49152,null,0,u.D,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{name:[0,"name"]},null),(l()(),t["\u0275and"](16777216,null,0,1,null,b)),t["\u0275did"](20,16384,null,0,r.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),t["\u0275and"](16777216,null,0,1,null,R)),t["\u0275did"](22,16384,null,0,r.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),t["\u0275and"](16777216,null,0,1,null,C)),t["\u0275did"](24,16384,null,0,r.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),t["\u0275and"](16777216,null,0,1,null,v)),t["\u0275did"](26,16384,null,0,r.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null)],(function(l,n){var e=n.component;l(n,6,0,"si"===e.totalmarket),l(n,8,0,"si"===e.totalmarket),l(n,10,0,"si"===e.totalpay),l(n,12,0,"si"===e.procesopay),l(n,14,0,("si"===e.formspay||"si"===e.procesopay)&&1===e.t1),l(n,16,0,"frmtareasprogramadastareasListPage"),l(n,18,0,"calendar-outline"),l(n,20,0,"si"===e.formspay&&1===e.t2),l(n,22,0,"si"===e.procesopay||"si"===e.totalpay||"si"===e.totalmarket||"si"===e.formspay),l(n,24,0,"si"===e.procesopay||"si"===e.totalpay||"si"===e.totalmarket||"si"===e.formspay),l(n,26,0,"si"===e.totalmarket)}),null)}function P(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,1,"app-tabs",[],null,null,null,N,c)),t["\u0275did"](1,114688,null,0,s,[u.Fb,d.a],null,null)],(function(l,n){l(n,1,0)}),null)}var y=t["\u0275ccf"]("app-tabs",s,P,{},{},[]),I=e("s7LF"),D=e("IheW"),F=e("iInd");const L=()=>Promise.all([e.e(9),e.e(103)]).then(e.bind(null,"6uoX")).then(l=>l.ProvidesPageModuleNgFactory),E=()=>Promise.all([e.e(1),e.e(3),e.e(19)]).then(e.bind(null,"5oaM")).then(l=>l.AsociadoListPageModuleNgFactory),M=()=>Promise.all([e.e(1),e.e(26)]).then(e.bind(null,"2RNL")).then(l=>l.frmtareasprogramadasCreatePageModuleNgFactory),Z=()=>e.e(94).then(e.bind(null,"qnAv")).then(l=>l.frmtareasprogramadastareasListPageModuleNgFactory),w=()=>e.e(21).then(e.bind(null,"JIV5")).then(l=>l.frmtareasprogramadasListPageModuleNgFactory),T=()=>e.e(22).then(e.bind(null,"M6mA")).then(l=>l.frmtareasprogramadas0ListPageModuleNgFactory),k=()=>e.e(23).then(e.bind(null,"DvxU")).then(l=>l.frmtareasprogramadas2ListPageModuleNgFactory),V=()=>e.e(20).then(e.bind(null,"YKFW")).then(l=>l.categoriaformularioListPageModuleNgFactory),S=()=>Promise.all([e.e(1),e.e(3),e.e(15),e.e(25)]).then(e.bind(null,"XS3c")).then(l=>l.PedidoCompraPageModuleNgFactory),A=()=>Promise.all([e.e(2),e.e(0),e.e(24)]).then(e.bind(null,"sX8J")).then(l=>l.ContactCardPageModuleNgFactory),j=()=>e.e(97).then(e.bind(null,"NrnU")).then(l=>l.NotificationsPageModuleNgFactory),O=()=>Promise.all([e.e(2),e.e(4),e.e(9),e.e(10),e.e(12),e.e(13),e.e(27)]).then(e.bind(null,"EZ4Z")).then(l=>l.BilleteraListPageModuleNgFactory);class J{}var X=t["\u0275cmf"](a,[],(function(l){return t["\u0275mod"]([t["\u0275mpd"](512,t.ComponentFactoryResolver,t["\u0275CodegenComponentFactoryResolver"],[[8,[i.a,y]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t["\u0275mpd"](4608,r.NgLocalization,r.NgLocaleLocalization,[t.LOCALE_ID]),t["\u0275mpd"](4608,u.c,u.c,[t.NgZone,t.ApplicationRef]),t["\u0275mpd"](4608,u.Gb,u.Gb,[u.c,t.ComponentFactoryResolver,t.Injector]),t["\u0275mpd"](4608,u.Lb,u.Lb,[u.c,t.ComponentFactoryResolver,t.Injector]),t["\u0275mpd"](4608,I.w,I.w,[]),t["\u0275mpd"](4608,D.i,D.o,[r.DOCUMENT,t.PLATFORM_ID,D.m]),t["\u0275mpd"](4608,D.p,D.p,[D.i,D.n]),t["\u0275mpd"](5120,D.a,(function(l){return[l]}),[D.p]),t["\u0275mpd"](4608,D.l,D.l,[]),t["\u0275mpd"](6144,D.j,null,[D.l]),t["\u0275mpd"](4608,D.h,D.h,[D.j]),t["\u0275mpd"](6144,D.b,null,[D.h]),t["\u0275mpd"](4608,D.f,D.k,[D.b,t.Injector]),t["\u0275mpd"](4608,D.c,D.c,[D.f]),t["\u0275mpd"](1073742336,r.CommonModule,r.CommonModule,[]),t["\u0275mpd"](1073742336,u.Cb,u.Cb,[]),t["\u0275mpd"](1073742336,I.v,I.v,[]),t["\u0275mpd"](1073742336,I.j,I.j,[]),t["\u0275mpd"](1073742336,F.p,F.p,[[2,F.u],[2,F.m]]),t["\u0275mpd"](1073742336,D.e,D.e,[]),t["\u0275mpd"](1073742336,D.d,D.d,[]),t["\u0275mpd"](1073742336,J,J,[]),t["\u0275mpd"](1073742336,a,a,[]),t["\u0275mpd"](256,D.m,"XSRF-TOKEN",[]),t["\u0275mpd"](256,D.n,"X-XSRF-TOKEN",[]),t["\u0275mpd"](1024,F.k,(function(){return[[{path:"",component:s,children:[{path:"ProvidesPage",children:[{path:"",loadChildren:L}]},{path:"AsociadoListPage",children:[{path:"",loadChildren:E}]},{path:"frmtareasprogramadasCreatePage",children:[{path:"",loadChildren:M}]},{path:"frmtareasprogramadastareasListPage",children:[{path:"",loadChildren:Z}]},{path:"frmtareasprogramadasListPage",children:[{path:"",loadChildren:w}]},{path:"frmtareasprogramadas0ListPage",children:[{path:"",loadChildren:T}]},{path:"frmtareasprogramadas2ListPage",children:[{path:"",loadChildren:k}]},{path:"categoriaformularioListPage",children:[{path:"",loadChildren:V}]},{path:"PedidoCompraPage",children:[{path:"",loadChildren:S}]},{path:"contact-card",children:[{path:"",loadChildren:A}]},{path:"notifications",children:[{path:"",loadChildren:j}]},{path:"billetera-list",children:[{path:"",loadChildren:O}]}]},{path:"",redirectTo:"app/billetera-list",pathMatch:"full"}]]}),[])])}))}}]);