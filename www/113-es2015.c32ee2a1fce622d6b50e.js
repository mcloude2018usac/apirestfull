(window.webpackJsonp=window.webpackJsonp||[]).push([[113],{pZl2:function(n,e,l){"use strict";l.r(e),l.d(e,"TabsPageModuleNgFactory",(function(){return x}));var t=l("8Y7J");class a{}var i=l("pMnS"),o=l("MKJQ"),r=l("sZkV"),u=l("TSSN"),d=l("SVse"),c=l("ZtEv");class s{constructor(n,e){this.menu=n,this.authenticationService=e,this.inventario=!0,this.totalpay="",this.totalmarket="",this.formspay="",this.procesopay="",this.sinov="0",this.t1=0,this.t2=0,this.t3=0,this.userinfo=[],this.totalpay=this.authenticationService.getsibilletera(),this.totalmarket=this.authenticationService.getsimarket(),this.formspay=this.authenticationService.getformularios(),this.procesopay=this.authenticationService.getprocess()}ngOnInit(){this.userinfo=this.authenticationService.getcopiauser();var n="";""!==(n=this.userinfo[0].nov)&&void 0!==n&&n.indexOf("\xac")>0&&(this.sinov="1"),this.rolex=this.userinfo[0].role,"Administrador"===this.userinfo[0].role||"Inventario admin"===this.userinfo[0].role?this.inventario=!1:"Inspector planificaci\xf3n"===this.userinfo[0].role||"Gerente de servicios"===this.userinfo[0].role?this.t1=1:"Supervisor planificaci\xf3n"===this.userinfo[0].role?this.t2=1:this.t3=1}ionViewWillEnter(){this.menu.enable(!0)}}var f=t["\u0275crt"]({encapsulation:0,styles:[["ion-tab-button[_ngcontent-%COMP%]{--color:var(--ion-color-medium-shade);--color-selected:var(--ion-color-dark)}"]],data:{}});function m(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,3,"ion-tab-button",[["tab","categoria-list"],["title","Tiendas"]],null,null,null,o.hc,o.Z)),t["\u0275did"](1,49152,null,0,r.tb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{tab:[0,"tab"]},null),(n()(),t["\u0275eld"](2,0,null,0,1,"ion-icon",[["name","home-outline"]],null,null,null,o.Db,o.v)),t["\u0275did"](3,49152,null,0,r.D,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{name:[0,"name"]},null)],(function(n,e){n(e,1,0,"categoria-list"),n(e,3,0,"home-outline")}),null)}function h(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,3,"ion-tab-button",[["tab","PedidoCompraPage"],["title","Pedidos"]],null,null,null,o.hc,o.Z)),t["\u0275did"](1,49152,null,0,r.tb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{tab:[0,"tab"]},null),(n()(),t["\u0275eld"](2,0,null,0,1,"ion-icon",[["name","list-circle-outline"]],null,null,null,o.Db,o.v)),t["\u0275did"](3,49152,null,0,r.D,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{name:[0,"name"]},null)],(function(n,e){n(e,1,0,"PedidoCompraPage"),n(e,3,0,"list-circle-outline")}),null)}function g(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,3,"ion-tab-button",[["tab","billetera-list"],["title","TotalPay"]],null,null,null,o.hc,o.Z)),t["\u0275did"](1,49152,null,0,r.tb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{tab:[0,"tab"]},null),(n()(),t["\u0275eld"](2,0,null,0,1,"ion-icon",[["name","wallet-outline"]],null,null,null,o.Db,o.v)),t["\u0275did"](3,49152,null,0,r.D,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{name:[0,"name"]},null)],(function(n,e){n(e,1,0,"billetera-list"),n(e,3,0,"wallet-outline")}),null)}function p(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,4,"ion-tab-button",[["tab","categoriaformularioListPage"]],[[8,"title",0]],null,null,o.hc,o.Z)),t["\u0275did"](1,49152,null,0,r.tb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{tab:[0,"tab"]},null),t["\u0275pid"](131072,u.k,[u.l,t.ChangeDetectorRef]),(n()(),t["\u0275eld"](3,0,null,0,1,"ion-icon",[["name","open-outline"]],null,null,null,o.Db,o.v)),t["\u0275did"](4,49152,null,0,r.D,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{name:[0,"name"]},null)],(function(n,e){n(e,1,0,"categoriaformularioListPage"),n(e,4,0,"open-outline")}),(function(n,e){n(e,0,0,t["\u0275inlineInterpolate"](1,"",t["\u0275unv"](e,0,0,t["\u0275nov"](e,2).transform("migestiones")),"  "))}))}function b(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,3,"ion-tab-button",[["tab","frmtareasprogramadas0ListPage"],["title","Mis tareas programadas"]],null,null,null,o.hc,o.Z)),t["\u0275did"](1,49152,null,0,r.tb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{tab:[0,"tab"]},null),(n()(),t["\u0275eld"](2,0,null,0,1,"ion-icon",[["name","reader-outline"]],null,null,null,o.Db,o.v)),t["\u0275did"](3,49152,null,0,r.D,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{name:[0,"name"]},null)],(function(n,e){n(e,1,0,"frmtareasprogramadas0ListPage"),n(e,3,0,"reader-outline")}),null)}function R(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,3,"ion-tab-button",[["tab","frmtareasprogramadasListPage"],["title","Mis tareas programadas"]],null,null,null,o.hc,o.Z)),t["\u0275did"](1,49152,null,0,r.tb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{tab:[0,"tab"]},null),(n()(),t["\u0275eld"](2,0,null,0,1,"ion-icon",[["name","reader-outline"]],null,null,null,o.Db,o.v)),t["\u0275did"](3,49152,null,0,r.D,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{name:[0,"name"]},null)],(function(n,e){n(e,1,0,"frmtareasprogramadasListPage"),n(e,3,0,"reader-outline")}),null)}function C(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,4,"ion-tab-button",[["tab","contact-card"]],[[8,"title",0]],null,null,o.hc,o.Z)),t["\u0275did"](1,49152,null,0,r.tb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{tab:[0,"tab"]},null),t["\u0275pid"](131072,u.k,[u.l,t.ChangeDetectorRef]),(n()(),t["\u0275eld"](3,0,null,0,1,"ion-icon",[["name","person-circle-outline"]],null,null,null,o.Db,o.v)),t["\u0275did"](4,49152,null,0,r.D,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{name:[0,"name"]},null)],(function(n,e){n(e,1,0,"contact-card"),n(e,4,0,"person-circle-outline")}),(function(n,e){n(e,0,0,t["\u0275inlineInterpolate"](1,"",t["\u0275unv"](e,0,0,t["\u0275nov"](e,2).transform("micuenta")),""))}))}function v(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,7,"ion-tab-button",[["tab","notifications"]],[[8,"title",0]],null,null,o.hc,o.Z)),t["\u0275did"](1,49152,null,0,r.tb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{tab:[0,"tab"]},null),t["\u0275pid"](131072,u.k,[u.l,t.ChangeDetectorRef]),(n()(),t["\u0275eld"](3,0,null,0,1,"ion-icon",[["name","notifications-outline"]],null,null,null,o.Db,o.v)),t["\u0275did"](4,49152,null,0,r.D,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{name:[0,"name"]},null),(n()(),t["\u0275eld"](5,0,null,0,2,"ion-badge",[],null,null,null,o.lb,o.d)),t["\u0275did"](6,49152,null,0,r.k,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275ted"](-1,0,["6"]))],(function(n,e){n(e,1,0,"notifications"),n(e,4,0,"notifications-outline")}),(function(n,e){n(e,0,0,t["\u0275inlineInterpolate"](1,"",t["\u0275unv"](e,0,0,t["\u0275nov"](e,2).transform("michat")),""))}))}function N(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,3,"ion-tab-button",[["tab","AsociadoListPage"],["title","Inventario"]],[[8,"hidden",0]],null,null,o.hc,o.Z)),t["\u0275did"](1,49152,null,0,r.tb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{tab:[0,"tab"]},null),(n()(),t["\u0275eld"](2,0,null,0,1,"ion-icon",[["name","file-tray-full-outline"]],null,null,null,o.Db,o.v)),t["\u0275did"](3,49152,null,0,r.D,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{name:[0,"name"]},null)],(function(n,e){n(e,1,0,"AsociadoListPage"),n(e,3,0,"file-tray-full-outline")}),(function(n,e){n(e,0,0,e.component.inventario)}))}function P(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,24,"ion-tab-bar",[["slot","bottom"]],null,null,null,o.gc,o.Y)),t["\u0275did"](1,49152,[[1,4]],0,r.sb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275and"](16777216,null,0,1,null,m)),t["\u0275did"](3,16384,null,0,d.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["\u0275and"](16777216,null,0,1,null,h)),t["\u0275did"](5,16384,null,0,d.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["\u0275and"](16777216,null,0,1,null,g)),t["\u0275did"](7,16384,null,0,d.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["\u0275and"](16777216,null,0,1,null,p)),t["\u0275did"](9,16384,null,0,d.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["\u0275and"](16777216,null,0,1,null,b)),t["\u0275did"](11,16384,null,0,d.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["\u0275eld"](12,0,null,0,4,"ion-tab-button",[["tab","frmtareasprogramadastareasListPage"]],[[8,"title",0]],null,null,o.hc,o.Z)),t["\u0275did"](13,49152,null,0,r.tb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{tab:[0,"tab"]},null),t["\u0275pid"](131072,u.k,[u.l,t.ChangeDetectorRef]),(n()(),t["\u0275eld"](15,0,null,0,1,"ion-icon",[["name","calendar-outline"]],null,null,null,o.Db,o.v)),t["\u0275did"](16,49152,null,0,r.D,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{name:[0,"name"]},null),(n()(),t["\u0275and"](16777216,null,0,1,null,R)),t["\u0275did"](18,16384,null,0,d.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["\u0275and"](16777216,null,0,1,null,C)),t["\u0275did"](20,16384,null,0,d.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["\u0275and"](16777216,null,0,1,null,v)),t["\u0275did"](22,16384,null,0,d.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["\u0275and"](16777216,null,0,1,null,N)),t["\u0275did"](24,16384,null,0,d.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null)],(function(n,e){var l=e.component;n(e,3,0,"si"===l.totalmarket),n(e,5,0,"si"===l.totalmarket),n(e,7,0,"si"===l.totalpay),n(e,9,0,"si"===l.procesopay),n(e,11,0,("si"===l.formspay||"si"===l.procesopay)&&1===l.t1),n(e,13,0,"frmtareasprogramadastareasListPage"),n(e,16,0,"calendar-outline"),n(e,18,0,"si"===l.formspay&&1===l.t2),n(e,20,0,"si"===l.procesopay||"si"===l.totalpay||"si"===l.totalmarket||"si"===l.formspay),n(e,22,0,"si"===l.procesopay||"si"===l.totalpay||"si"===l.totalmarket||"si"===l.formspay),n(e,24,0,"si"===l.totalmarket)}),(function(n,e){n(e,12,0,t["\u0275inlineInterpolate"](1,"",t["\u0275unv"](e,12,0,t["\u0275nov"](e,14).transform("mitareas")),""))}))}function D(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,4,"ion-tabs",[],null,[[null,"ionTabButtonClick"]],(function(n,e,l){var a=!0;return"ionTabButtonClick"===e&&(a=!1!==t["\u0275nov"](n,1).select(l.detail.tab)&&a),a}),o.ic,o.ab)),t["\u0275did"](1,49152,null,1,r.ub,[r.Hb],null,null),t["\u0275qud"](603979776,1,{tabBar:0}),(n()(),t["\u0275and"](16777216,null,1,1,null,P)),t["\u0275did"](4,16384,null,0,d.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null)],(function(n,e){n(e,4,0,"0"===e.component.sinov)}),null)}function I(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"app-tabs",[],null,null,null,D,f)),t["\u0275did"](1,114688,null,0,s,[r.Fb,c.a],null,null)],(function(n,e){n(e,1,0)}),null)}var y=t["\u0275ccf"]("app-tabs",s,I,{},{},[]),Z=l("s7LF"),L=l("IheW"),E=l("iInd");const M=()=>Promise.all([l.e(9),l.e(109)]).then(l.bind(null,"6uoX")).then(n=>n.ProvidesPageModuleNgFactory),F=()=>l.e(31).then(l.bind(null,"gUXq")).then(n=>n.CategoriaListPageModuleNgFactory),k=()=>Promise.all([l.e(1),l.e(3),l.e(22)]).then(l.bind(null,"5oaM")).then(n=>n.AsociadoListPageModuleNgFactory),w=()=>Promise.all([l.e(1),l.e(29)]).then(l.bind(null,"2RNL")).then(n=>n.frmtareasprogramadasCreatePageModuleNgFactory),T=()=>l.e(103).then(l.bind(null,"qnAv")).then(n=>n.frmtareasprogramadastareasListPageModuleNgFactory),S=()=>l.e(24).then(l.bind(null,"JIV5")).then(n=>n.frmtareasprogramadasListPageModuleNgFactory),V=()=>l.e(25).then(l.bind(null,"M6mA")).then(n=>n.frmtareasprogramadas0ListPageModuleNgFactory),A=()=>l.e(26).then(l.bind(null,"DvxU")).then(n=>n.frmtareasprogramadas2ListPageModuleNgFactory),O=()=>l.e(23).then(l.bind(null,"YKFW")).then(n=>n.categoriaformularioListPageModuleNgFactory),j=()=>Promise.all([l.e(1),l.e(20)]).then(l.bind(null,"BSSo")).then(n=>n.frmclientesListPageModuleNgFactory),X=()=>Promise.all([l.e(1),l.e(3),l.e(11),l.e(21)]).then(l.bind(null,"XS3c")).then(n=>n.PedidoCompraPageModuleNgFactory),J=()=>Promise.all([l.e(2),l.e(0),l.e(28)]).then(l.bind(null,"sX8J")).then(n=>n.ContactCardPageModuleNgFactory),B=()=>l.e(27).then(l.bind(null,"EReV")).then(n=>n.ContactCard3PageModuleNgFactory),K=()=>l.e(105).then(l.bind(null,"NrnU")).then(n=>n.NotificationsPageModuleNgFactory),U=()=>Promise.all([l.e(2),l.e(4),l.e(9),l.e(10),l.e(13),l.e(16),l.e(15),l.e(30)]).then(l.bind(null,"EZ4Z")).then(n=>n.BilleteraListPageModuleNgFactory);class q{}var x=t["\u0275cmf"](a,[],(function(n){return t["\u0275mod"]([t["\u0275mpd"](512,t.ComponentFactoryResolver,t["\u0275CodegenComponentFactoryResolver"],[[8,[i.a,y]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t["\u0275mpd"](4608,d.NgLocalization,d.NgLocaleLocalization,[t.LOCALE_ID]),t["\u0275mpd"](4608,r.c,r.c,[t.NgZone,t.ApplicationRef]),t["\u0275mpd"](4608,r.Gb,r.Gb,[r.c,t.ComponentFactoryResolver,t.Injector]),t["\u0275mpd"](4608,r.Lb,r.Lb,[r.c,t.ComponentFactoryResolver,t.Injector]),t["\u0275mpd"](4608,Z.w,Z.w,[]),t["\u0275mpd"](4608,L.i,L.o,[d.DOCUMENT,t.PLATFORM_ID,L.m]),t["\u0275mpd"](4608,L.p,L.p,[L.i,L.n]),t["\u0275mpd"](5120,L.a,(function(n){return[n]}),[L.p]),t["\u0275mpd"](4608,L.l,L.l,[]),t["\u0275mpd"](6144,L.j,null,[L.l]),t["\u0275mpd"](4608,L.h,L.h,[L.j]),t["\u0275mpd"](6144,L.b,null,[L.h]),t["\u0275mpd"](4608,L.f,L.k,[L.b,t.Injector]),t["\u0275mpd"](4608,L.c,L.c,[L.f]),t["\u0275mpd"](1073742336,d.CommonModule,d.CommonModule,[]),t["\u0275mpd"](1073742336,r.Cb,r.Cb,[]),t["\u0275mpd"](1073742336,u.i,u.i,[]),t["\u0275mpd"](1073742336,Z.v,Z.v,[]),t["\u0275mpd"](1073742336,Z.j,Z.j,[]),t["\u0275mpd"](1073742336,E.p,E.p,[[2,E.u],[2,E.m]]),t["\u0275mpd"](1073742336,L.e,L.e,[]),t["\u0275mpd"](1073742336,L.d,L.d,[]),t["\u0275mpd"](1073742336,q,q,[]),t["\u0275mpd"](1073742336,a,a,[]),t["\u0275mpd"](256,L.m,"XSRF-TOKEN",[]),t["\u0275mpd"](256,L.n,"X-XSRF-TOKEN",[]),t["\u0275mpd"](1024,E.k,(function(){return[[{path:"",component:s,children:[{path:"ProvidesPage",children:[{path:"",loadChildren:M}]},{path:"categoria-list",loadChildren:F},{path:"AsociadoListPage",children:[{path:"",loadChildren:k}]},{path:"frmtareasprogramadasCreatePage",children:[{path:"",loadChildren:w}]},{path:"frmtareasprogramadastareasListPage",children:[{path:"",loadChildren:T}]},{path:"frmtareasprogramadasListPage",children:[{path:"",loadChildren:S}]},{path:"frmtareasprogramadas0ListPage",children:[{path:"",loadChildren:V}]},{path:"frmtareasprogramadas2ListPage",children:[{path:"",loadChildren:A}]},{path:"categoriaformularioListPage",children:[{path:"",loadChildren:O}]},{path:"frmclientesListPage",loadChildren:j},{path:"PedidoCompraPage",children:[{path:"",loadChildren:X}]},{path:"contact-card",children:[{path:"",loadChildren:J}]},{path:"contact-card3",children:[{path:"",loadChildren:B}]},{path:"notifications",children:[{path:"",loadChildren:K}]},{path:"billetera-list",children:[{path:"",loadChildren:U}]}]},{path:"",redirectTo:"app/billetera-list",pathMatch:"full"}]]}),[])])}))}}]);