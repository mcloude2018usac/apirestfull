(window.webpackJsonp=window.webpackJsonp||[]).push([[109],{pZl2:function(n,l,e){"use strict";e.r(l),e.d(l,"TabsPageModuleNgFactory",(function(){return K}));var t=e("8Y7J");class a{}var i=e("pMnS"),o=e("MKJQ"),u=e("sZkV"),r=e("SVse"),d=e("ZtEv");class s{constructor(n,l){this.menu=n,this.authenticationService=l,this.inventario=!0,this.totalpay="",this.totalmarket="",this.formspay="",this.procesopay="",this.sinov="0",this.t1=0,this.t2=0,this.t3=0,this.userinfo=[],this.totalpay=this.authenticationService.getsibilletera(),this.totalmarket=this.authenticationService.getsimarket(),this.formspay=this.authenticationService.getformularios(),this.procesopay=this.authenticationService.getprocess()}ngOnInit(){this.userinfo=this.authenticationService.getcopiauser();var n="";""!==(n=this.userinfo[0].nov)&&void 0!==n&&n.indexOf("\xac")>0&&(this.sinov="1"),this.rolex=this.userinfo[0].role,"Administrador"===this.userinfo[0].role||"Inventario admin"===this.userinfo[0].role?this.inventario=!1:"Inspector planificaci\xf3n"===this.userinfo[0].role||"Gerente de servicios"===this.userinfo[0].role?this.t1=1:"Supervisor planificaci\xf3n"===this.userinfo[0].role?this.t2=1:this.t3=1}ionViewWillEnter(){this.menu.enable(!0)}}var c=t["\u0275crt"]({encapsulation:0,styles:[["ion-tab-button[_ngcontent-%COMP%]{--color:var(--ion-color-medium-shade);--color-selected:var(--ion-color-dark)}"]],data:{}});function m(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,3,"ion-tab-button",[["tab","ProvidesPage"],["title","Tiendas"]],null,null,null,o.lc,o.bb)),t["\u0275did"](1,49152,null,0,u.tb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{tab:[0,"tab"]},null),(n()(),t["\u0275eld"](2,0,null,0,1,"ion-icon",[["name","home-outline"]],null,null,null,o.Fb,o.v)),t["\u0275did"](3,49152,null,0,u.D,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{name:[0,"name"]},null)],(function(n,l){n(l,1,0,"ProvidesPage"),n(l,3,0,"home-outline")}),null)}function f(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,3,"ion-tab-button",[["tab","PedidoCompraPage"],["title","Pedidos"]],null,null,null,o.lc,o.bb)),t["\u0275did"](1,49152,null,0,u.tb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{tab:[0,"tab"]},null),(n()(),t["\u0275eld"](2,0,null,0,1,"ion-icon",[["name","list-circle-outline"]],null,null,null,o.Fb,o.v)),t["\u0275did"](3,49152,null,0,u.D,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{name:[0,"name"]},null)],(function(n,l){n(l,1,0,"PedidoCompraPage"),n(l,3,0,"list-circle-outline")}),null)}function g(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,3,"ion-tab-button",[["tab","billetera-list"],["title","TotalPay"]],null,null,null,o.lc,o.bb)),t["\u0275did"](1,49152,null,0,u.tb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{tab:[0,"tab"]},null),(n()(),t["\u0275eld"](2,0,null,0,1,"ion-icon",[["name","wallet-outline"]],null,null,null,o.Fb,o.v)),t["\u0275did"](3,49152,null,0,u.D,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{name:[0,"name"]},null)],(function(n,l){n(l,1,0,"billetera-list"),n(l,3,0,"wallet-outline")}),null)}function h(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,3,"ion-tab-button",[["tab","categoriaformularioListPage"],["title","Mis Procesos y Formularios"]],null,null,null,o.lc,o.bb)),t["\u0275did"](1,49152,null,0,u.tb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{tab:[0,"tab"]},null),(n()(),t["\u0275eld"](2,0,null,0,1,"ion-icon",[["name","open-outline"]],null,null,null,o.Fb,o.v)),t["\u0275did"](3,49152,null,0,u.D,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{name:[0,"name"]},null)],(function(n,l){n(l,1,0,"categoriaformularioListPage"),n(l,3,0,"open-outline")}),null)}function p(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,3,"ion-tab-button",[["tab","frmtareasprogramadas0ListPage"],["title","Mis tareas programadas"]],null,null,null,o.lc,o.bb)),t["\u0275did"](1,49152,null,0,u.tb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{tab:[0,"tab"]},null),(n()(),t["\u0275eld"](2,0,null,0,1,"ion-icon",[["name","reader-outline"]],null,null,null,o.Fb,o.v)),t["\u0275did"](3,49152,null,0,u.D,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{name:[0,"name"]},null)],(function(n,l){n(l,1,0,"frmtareasprogramadas0ListPage"),n(l,3,0,"reader-outline")}),null)}function b(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,3,"ion-tab-button",[["tab","frmtareasprogramadasListPage"],["title","Mis tareas programadas"]],null,null,null,o.lc,o.bb)),t["\u0275did"](1,49152,null,0,u.tb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{tab:[0,"tab"]},null),(n()(),t["\u0275eld"](2,0,null,0,1,"ion-icon",[["name","reader-outline"]],null,null,null,o.Fb,o.v)),t["\u0275did"](3,49152,null,0,u.D,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{name:[0,"name"]},null)],(function(n,l){n(l,1,0,"frmtareasprogramadasListPage"),n(l,3,0,"reader-outline")}),null)}function R(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,3,"ion-tab-button",[["tab","contact-card"],["title","Mi cuenta"]],null,null,null,o.lc,o.bb)),t["\u0275did"](1,49152,null,0,u.tb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{tab:[0,"tab"]},null),(n()(),t["\u0275eld"](2,0,null,0,1,"ion-icon",[["name","person-circle-outline"]],null,null,null,o.Fb,o.v)),t["\u0275did"](3,49152,null,0,u.D,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{name:[0,"name"]},null)],(function(n,l){n(l,1,0,"contact-card"),n(l,3,0,"person-circle-outline")}),null)}function C(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,6,"ion-tab-button",[["tab","notifications"],["title","Notificaciones"]],null,null,null,o.lc,o.bb)),t["\u0275did"](1,49152,null,0,u.tb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{tab:[0,"tab"]},null),(n()(),t["\u0275eld"](2,0,null,0,1,"ion-icon",[["name","notifications-outline"]],null,null,null,o.Fb,o.v)),t["\u0275did"](3,49152,null,0,u.D,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{name:[0,"name"]},null),(n()(),t["\u0275eld"](4,0,null,0,2,"ion-badge",[],null,null,null,o.nb,o.d)),t["\u0275did"](5,49152,null,0,u.k,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275ted"](-1,0,["6"]))],(function(n,l){n(l,1,0,"notifications"),n(l,3,0,"notifications-outline")}),null)}function v(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,3,"ion-tab-button",[["tab","AsociadoListPage"],["title","Inventario"]],[[8,"hidden",0]],null,null,o.lc,o.bb)),t["\u0275did"](1,49152,null,0,u.tb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{tab:[0,"tab"]},null),(n()(),t["\u0275eld"](2,0,null,0,1,"ion-icon",[["name","file-tray-full-outline"]],null,null,null,o.Fb,o.v)),t["\u0275did"](3,49152,null,0,u.D,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{name:[0,"name"]},null)],(function(n,l){n(l,1,0,"AsociadoListPage"),n(l,3,0,"file-tray-full-outline")}),(function(n,l){n(l,0,0,l.component.inventario)}))}function P(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,23,"ion-tab-bar",[["slot","bottom"]],null,null,null,o.kc,o.ab)),t["\u0275did"](1,49152,[[1,4]],0,u.sb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275and"](16777216,null,0,1,null,m)),t["\u0275did"](3,16384,null,0,r.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["\u0275and"](16777216,null,0,1,null,f)),t["\u0275did"](5,16384,null,0,r.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["\u0275and"](16777216,null,0,1,null,g)),t["\u0275did"](7,16384,null,0,r.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["\u0275and"](16777216,null,0,1,null,h)),t["\u0275did"](9,16384,null,0,r.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["\u0275and"](16777216,null,0,1,null,p)),t["\u0275did"](11,16384,null,0,r.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["\u0275eld"](12,0,null,0,3,"ion-tab-button",[["tab","frmtareasprogramadastareasListPage"],["title","Mis tareas"]],null,null,null,o.lc,o.bb)),t["\u0275did"](13,49152,null,0,u.tb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{tab:[0,"tab"]},null),(n()(),t["\u0275eld"](14,0,null,0,1,"ion-icon",[["name","calendar-outline"]],null,null,null,o.Fb,o.v)),t["\u0275did"](15,49152,null,0,u.D,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{name:[0,"name"]},null),(n()(),t["\u0275and"](16777216,null,0,1,null,b)),t["\u0275did"](17,16384,null,0,r.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["\u0275and"](16777216,null,0,1,null,R)),t["\u0275did"](19,16384,null,0,r.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["\u0275and"](16777216,null,0,1,null,C)),t["\u0275did"](21,16384,null,0,r.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["\u0275and"](16777216,null,0,1,null,v)),t["\u0275did"](23,16384,null,0,r.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null)],(function(n,l){var e=l.component;n(l,3,0,"si"===e.totalmarket),n(l,5,0,"si"===e.totalmarket),n(l,7,0,"si"===e.totalpay),n(l,9,0,"si"===e.procesopay),n(l,11,0,("si"===e.formspay||"si"===e.procesopay)&&1===e.t1),n(l,13,0,"frmtareasprogramadastareasListPage"),n(l,15,0,"calendar-outline"),n(l,17,0,"si"===e.formspay&&1===e.t2),n(l,19,0,"si"===e.procesopay||"si"===e.totalpay||"si"===e.totalmarket||"si"===e.formspay),n(l,21,0,"si"===e.procesopay||"si"===e.totalpay||"si"===e.totalmarket||"si"===e.formspay),n(l,23,0,"si"===e.totalmarket)}),null)}function N(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,4,"ion-tabs",[],null,[[null,"ionTabButtonClick"]],(function(n,l,e){var a=!0;return"ionTabButtonClick"===l&&(a=!1!==t["\u0275nov"](n,1).select(e.detail.tab)&&a),a}),o.mc,o.cb)),t["\u0275did"](1,49152,null,1,u.ub,[u.Hb],null,null),t["\u0275qud"](603979776,1,{tabBar:0}),(n()(),t["\u0275and"](16777216,null,1,1,null,P)),t["\u0275did"](4,16384,null,0,r.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null)],(function(n,l){n(l,4,0,"0"===l.component.sinov)}),null)}function I(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"app-tabs",[],null,null,null,N,c)),t["\u0275did"](1,114688,null,0,s,[u.Fb,d.a],null,null)],(function(n,l){n(l,1,0)}),null)}var y=t["\u0275ccf"]("app-tabs",s,I,{},{},[]),D=e("s7LF"),F=e("IheW"),L=e("iInd");const M=()=>Promise.all([e.e(9),e.e(105)]).then(e.bind(null,"6uoX")).then(n=>n.ProvidesPageModuleNgFactory),E=()=>Promise.all([e.e(1),e.e(3),e.e(21)]).then(e.bind(null,"5oaM")).then(n=>n.AsociadoListPageModuleNgFactory),Z=()=>Promise.all([e.e(1),e.e(27)]).then(e.bind(null,"2RNL")).then(n=>n.frmtareasprogramadasCreatePageModuleNgFactory),w=()=>e.e(96).then(e.bind(null,"qnAv")).then(n=>n.frmtareasprogramadastareasListPageModuleNgFactory),T=()=>e.e(23).then(e.bind(null,"JIV5")).then(n=>n.frmtareasprogramadasListPageModuleNgFactory),k=()=>e.e(24).then(e.bind(null,"M6mA")).then(n=>n.frmtareasprogramadas0ListPageModuleNgFactory),S=()=>e.e(25).then(e.bind(null,"DvxU")).then(n=>n.frmtareasprogramadas2ListPageModuleNgFactory),V=()=>e.e(22).then(e.bind(null,"YKFW")).then(n=>n.categoriaformularioListPageModuleNgFactory),A=()=>Promise.all([e.e(1),e.e(19)]).then(e.bind(null,"BSSo")).then(n=>n.frmclientesListPageModuleNgFactory),O=()=>Promise.all([e.e(1),e.e(3),e.e(13),e.e(20)]).then(e.bind(null,"XS3c")).then(n=>n.PedidoCompraPageModuleNgFactory),j=()=>Promise.all([e.e(2),e.e(0),e.e(26)]).then(e.bind(null,"sX8J")).then(n=>n.ContactCardPageModuleNgFactory),J=()=>e.e(99).then(e.bind(null,"NrnU")).then(n=>n.NotificationsPageModuleNgFactory),X=()=>Promise.all([e.e(2),e.e(4),e.e(9),e.e(10),e.e(12),e.e(15),e.e(28)]).then(e.bind(null,"EZ4Z")).then(n=>n.BilleteraListPageModuleNgFactory);class B{}var K=t["\u0275cmf"](a,[],(function(n){return t["\u0275mod"]([t["\u0275mpd"](512,t.ComponentFactoryResolver,t["\u0275CodegenComponentFactoryResolver"],[[8,[i.a,y]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t["\u0275mpd"](4608,r.NgLocalization,r.NgLocaleLocalization,[t.LOCALE_ID]),t["\u0275mpd"](4608,u.c,u.c,[t.NgZone,t.ApplicationRef]),t["\u0275mpd"](4608,u.Gb,u.Gb,[u.c,t.ComponentFactoryResolver,t.Injector]),t["\u0275mpd"](4608,u.Lb,u.Lb,[u.c,t.ComponentFactoryResolver,t.Injector]),t["\u0275mpd"](4608,D.w,D.w,[]),t["\u0275mpd"](4608,F.i,F.o,[r.DOCUMENT,t.PLATFORM_ID,F.m]),t["\u0275mpd"](4608,F.p,F.p,[F.i,F.n]),t["\u0275mpd"](5120,F.a,(function(n){return[n]}),[F.p]),t["\u0275mpd"](4608,F.l,F.l,[]),t["\u0275mpd"](6144,F.j,null,[F.l]),t["\u0275mpd"](4608,F.h,F.h,[F.j]),t["\u0275mpd"](6144,F.b,null,[F.h]),t["\u0275mpd"](4608,F.f,F.k,[F.b,t.Injector]),t["\u0275mpd"](4608,F.c,F.c,[F.f]),t["\u0275mpd"](1073742336,r.CommonModule,r.CommonModule,[]),t["\u0275mpd"](1073742336,u.Cb,u.Cb,[]),t["\u0275mpd"](1073742336,D.v,D.v,[]),t["\u0275mpd"](1073742336,D.j,D.j,[]),t["\u0275mpd"](1073742336,L.p,L.p,[[2,L.u],[2,L.m]]),t["\u0275mpd"](1073742336,F.e,F.e,[]),t["\u0275mpd"](1073742336,F.d,F.d,[]),t["\u0275mpd"](1073742336,B,B,[]),t["\u0275mpd"](1073742336,a,a,[]),t["\u0275mpd"](256,F.m,"XSRF-TOKEN",[]),t["\u0275mpd"](256,F.n,"X-XSRF-TOKEN",[]),t["\u0275mpd"](1024,L.k,(function(){return[[{path:"",component:s,children:[{path:"ProvidesPage",children:[{path:"",loadChildren:M}]},{path:"AsociadoListPage",children:[{path:"",loadChildren:E}]},{path:"frmtareasprogramadasCreatePage",children:[{path:"",loadChildren:Z}]},{path:"frmtareasprogramadastareasListPage",children:[{path:"",loadChildren:w}]},{path:"frmtareasprogramadasListPage",children:[{path:"",loadChildren:T}]},{path:"frmtareasprogramadas0ListPage",children:[{path:"",loadChildren:k}]},{path:"frmtareasprogramadas2ListPage",children:[{path:"",loadChildren:S}]},{path:"categoriaformularioListPage",children:[{path:"",loadChildren:V}]},{path:"frmclientesListPage",loadChildren:A},{path:"PedidoCompraPage",children:[{path:"",loadChildren:O}]},{path:"contact-card",children:[{path:"",loadChildren:j}]},{path:"notifications",children:[{path:"",loadChildren:J}]},{path:"billetera-list",children:[{path:"",loadChildren:X}]}]},{path:"",redirectTo:"app/billetera-list",pathMatch:"full"}]]}),[])])}))}}]);