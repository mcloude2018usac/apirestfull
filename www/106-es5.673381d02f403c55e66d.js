function _defineProperties(n,e){for(var l=0;l<e.length;l++){var t=e[l];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}function _createClass(n,e,l){return e&&_defineProperties(n.prototype,e),l&&_defineProperties(n,l),n}function _classCallCheck(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{pZl2:function(n,e,l){"use strict";l.r(e),l.d(e,"TabsPageModuleNgFactory",(function(){return O}));var t=l("8Y7J"),a=function n(){_classCallCheck(this,n)},i=l("pMnS"),o=l("MKJQ"),u=l("sZkV"),r=l("SVse"),d=l("ZtEv"),c=function(){function n(e,l){_classCallCheck(this,n),this.menu=e,this.authenticationService=l,this.inventario=!0,this.totalpay="",this.totalmarket="",this.formspay="",this.procesopay="",this.t1=0,this.t2=0,this.t3=0,this.userinfo=[],this.totalpay=this.authenticationService.getsibilletera(),this.totalmarket=this.authenticationService.getsimarket(),this.formspay=this.authenticationService.getformularios(),this.procesopay=this.authenticationService.getprocess()}return _createClass(n,[{key:"ngOnInit",value:function(){this.userinfo=this.authenticationService.getcopiauser(),this.rolex=this.userinfo[0].role,"Administrador"===this.userinfo[0].role||"Inventario admin"===this.userinfo[0].role?this.inventario=!1:"Inspector planificaci\xf3n"===this.userinfo[0].role||"Gerente de servicios"===this.userinfo[0].role?this.t1=1:"Supervisor planificaci\xf3n"===this.userinfo[0].role?this.t2=1:this.t3=1}},{key:"ionViewWillEnter",value:function(){this.menu.enable(!0)}}]),n}(),s=t["\u0275crt"]({encapsulation:0,styles:[["ion-tab-button[_ngcontent-%COMP%]{--color:var(--ion-color-medium-shade);--color-selected:var(--ion-color-dark)}"]],data:{}});function f(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,3,"ion-tab-button",[["tab","ProvidesPage"],["title","Tiendas"]],null,null,null,o.lc,o.bb)),t["\u0275did"](1,49152,null,0,u.tb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{tab:[0,"tab"]},null),(n()(),t["\u0275eld"](2,0,null,0,1,"ion-icon",[["name","home-outline"]],null,null,null,o.Fb,o.v)),t["\u0275did"](3,49152,null,0,u.D,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{name:[0,"name"]},null)],(function(n,e){n(e,1,0,"ProvidesPage"),n(e,3,0,"home-outline")}),null)}function m(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,3,"ion-tab-button",[["tab","PedidoCompraPage"],["title","Pedidos"]],null,null,null,o.lc,o.bb)),t["\u0275did"](1,49152,null,0,u.tb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{tab:[0,"tab"]},null),(n()(),t["\u0275eld"](2,0,null,0,1,"ion-icon",[["name","list-circle-outline"]],null,null,null,o.Fb,o.v)),t["\u0275did"](3,49152,null,0,u.D,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{name:[0,"name"]},null)],(function(n,e){n(e,1,0,"PedidoCompraPage"),n(e,3,0,"list-circle-outline")}),null)}function g(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,3,"ion-tab-button",[["tab","billetera-list"],["title","TotalPay"]],null,null,null,o.lc,o.bb)),t["\u0275did"](1,49152,null,0,u.tb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{tab:[0,"tab"]},null),(n()(),t["\u0275eld"](2,0,null,0,1,"ion-icon",[["name","wallet-outline"]],null,null,null,o.Fb,o.v)),t["\u0275did"](3,49152,null,0,u.D,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{name:[0,"name"]},null)],(function(n,e){n(e,1,0,"billetera-list"),n(e,3,0,"wallet-outline")}),null)}function h(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,3,"ion-tab-button",[["tab","categoriaformularioListPage"],["title","Mis Procesos y Formularios"]],null,null,null,o.lc,o.bb)),t["\u0275did"](1,49152,null,0,u.tb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{tab:[0,"tab"]},null),(n()(),t["\u0275eld"](2,0,null,0,1,"ion-icon",[["name","open-outline"]],null,null,null,o.Fb,o.v)),t["\u0275did"](3,49152,null,0,u.D,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{name:[0,"name"]},null)],(function(n,e){n(e,1,0,"categoriaformularioListPage"),n(e,3,0,"open-outline")}),null)}function p(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,3,"ion-tab-button",[["tab","frmtareasprogramadas0ListPage"],["title","Mis tareas programadas"]],null,null,null,o.lc,o.bb)),t["\u0275did"](1,49152,null,0,u.tb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{tab:[0,"tab"]},null),(n()(),t["\u0275eld"](2,0,null,0,1,"ion-icon",[["name","reader-outline"]],null,null,null,o.Fb,o.v)),t["\u0275did"](3,49152,null,0,u.D,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{name:[0,"name"]},null)],(function(n,e){n(e,1,0,"frmtareasprogramadas0ListPage"),n(e,3,0,"reader-outline")}),null)}function b(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,3,"ion-tab-button",[["tab","frmtareasprogramadasListPage"],["title","Mis tareas programadas"]],null,null,null,o.lc,o.bb)),t["\u0275did"](1,49152,null,0,u.tb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{tab:[0,"tab"]},null),(n()(),t["\u0275eld"](2,0,null,0,1,"ion-icon",[["name","reader-outline"]],null,null,null,o.Fb,o.v)),t["\u0275did"](3,49152,null,0,u.D,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{name:[0,"name"]},null)],(function(n,e){n(e,1,0,"frmtareasprogramadasListPage"),n(e,3,0,"reader-outline")}),null)}function C(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,3,"ion-tab-button",[["tab","contact-card"],["title","Mi cuenta"]],null,null,null,o.lc,o.bb)),t["\u0275did"](1,49152,null,0,u.tb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{tab:[0,"tab"]},null),(n()(),t["\u0275eld"](2,0,null,0,1,"ion-icon",[["name","person-circle-outline"]],null,null,null,o.Fb,o.v)),t["\u0275did"](3,49152,null,0,u.D,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{name:[0,"name"]},null)],(function(n,e){n(e,1,0,"contact-card"),n(e,3,0,"person-circle-outline")}),null)}function R(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,6,"ion-tab-button",[["tab","notifications"],["title","Notificaciones"]],null,null,null,o.lc,o.bb)),t["\u0275did"](1,49152,null,0,u.tb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{tab:[0,"tab"]},null),(n()(),t["\u0275eld"](2,0,null,0,1,"ion-icon",[["name","notifications-outline"]],null,null,null,o.Fb,o.v)),t["\u0275did"](3,49152,null,0,u.D,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{name:[0,"name"]},null),(n()(),t["\u0275eld"](4,0,null,0,2,"ion-badge",[],null,null,null,o.nb,o.d)),t["\u0275did"](5,49152,null,0,u.k,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275ted"](-1,0,["6"]))],(function(n,e){n(e,1,0,"notifications"),n(e,3,0,"notifications-outline")}),null)}function v(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,3,"ion-tab-button",[["tab","AsociadoListPage"],["title","Inventario"]],[[8,"hidden",0]],null,null,o.lc,o.bb)),t["\u0275did"](1,49152,null,0,u.tb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{tab:[0,"tab"]},null),(n()(),t["\u0275eld"](2,0,null,0,1,"ion-icon",[["name","file-tray-full-outline"]],null,null,null,o.Fb,o.v)),t["\u0275did"](3,49152,null,0,u.D,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{name:[0,"name"]},null)],(function(n,e){n(e,1,0,"AsociadoListPage"),n(e,3,0,"file-tray-full-outline")}),(function(n,e){n(e,0,0,e.component.inventario)}))}function P(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,26,"ion-tabs",[],null,[[null,"ionTabButtonClick"]],(function(n,e,l){var a=!0;return"ionTabButtonClick"===e&&(a=!1!==t["\u0275nov"](n,1).select(l.detail.tab)&&a),a}),o.mc,o.cb)),t["\u0275did"](1,49152,null,1,u.ub,[u.Hb],null,null),t["\u0275qud"](603979776,1,{tabBar:0}),(n()(),t["\u0275eld"](3,0,null,1,23,"ion-tab-bar",[["slot","bottom"]],null,null,null,o.kc,o.ab)),t["\u0275did"](4,49152,[[1,4]],0,u.sb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275and"](16777216,null,0,1,null,f)),t["\u0275did"](6,16384,null,0,r.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["\u0275and"](16777216,null,0,1,null,m)),t["\u0275did"](8,16384,null,0,r.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["\u0275and"](16777216,null,0,1,null,g)),t["\u0275did"](10,16384,null,0,r.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["\u0275and"](16777216,null,0,1,null,h)),t["\u0275did"](12,16384,null,0,r.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["\u0275and"](16777216,null,0,1,null,p)),t["\u0275did"](14,16384,null,0,r.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["\u0275eld"](15,0,null,0,3,"ion-tab-button",[["tab","frmtareasprogramadastareasListPage"],["title","Mis tareas"]],null,null,null,o.lc,o.bb)),t["\u0275did"](16,49152,null,0,u.tb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{tab:[0,"tab"]},null),(n()(),t["\u0275eld"](17,0,null,0,1,"ion-icon",[["name","calendar-outline"]],null,null,null,o.Fb,o.v)),t["\u0275did"](18,49152,null,0,u.D,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{name:[0,"name"]},null),(n()(),t["\u0275and"](16777216,null,0,1,null,b)),t["\u0275did"](20,16384,null,0,r.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["\u0275and"](16777216,null,0,1,null,C)),t["\u0275did"](22,16384,null,0,r.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["\u0275and"](16777216,null,0,1,null,R)),t["\u0275did"](24,16384,null,0,r.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["\u0275and"](16777216,null,0,1,null,v)),t["\u0275did"](26,16384,null,0,r.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null)],(function(n,e){var l=e.component;n(e,6,0,"si"===l.totalmarket),n(e,8,0,"si"===l.totalmarket),n(e,10,0,"si"===l.totalpay),n(e,12,0,"si"===l.procesopay),n(e,14,0,("si"===l.formspay||"si"===l.procesopay)&&1===l.t1),n(e,16,0,"frmtareasprogramadastareasListPage"),n(e,18,0,"calendar-outline"),n(e,20,0,"si"===l.formspay&&1===l.t2),n(e,22,0,"si"===l.procesopay||"si"===l.totalpay||"si"===l.totalmarket||"si"===l.formspay),n(e,24,0,"si"===l.procesopay||"si"===l.totalpay||"si"===l.totalmarket||"si"===l.formspay),n(e,26,0,"si"===l.totalmarket)}),null)}var N=t["\u0275ccf"]("app-tabs",c,(function(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"app-tabs",[],null,null,null,P,s)),t["\u0275did"](1,114688,null,0,c,[u.Fb,d.a],null,null)],(function(n,e){n(e,1,0)}),null)}),{},{},[]),y=l("s7LF"),I=l("IheW"),D=l("iInd"),F=function(){return Promise.all([l.e(8),l.e(102)]).then(l.bind(null,"6uoX")).then((function(n){return n.ProvidesPageModuleNgFactory}))},L=function(){return Promise.all([l.e(1),l.e(2),l.e(19)]).then(l.bind(null,"5oaM")).then((function(n){return n.AsociadoListPageModuleNgFactory}))},E=function(){return Promise.all([l.e(1),l.e(25)]).then(l.bind(null,"2RNL")).then((function(n){return n.frmtareasprogramadasCreatePageModuleNgFactory}))},M=function(){return l.e(93).then(l.bind(null,"qnAv")).then((function(n){return n.frmtareasprogramadastareasListPageModuleNgFactory}))},Z=function(){return l.e(21).then(l.bind(null,"JIV5")).then((function(n){return n.frmtareasprogramadasListPageModuleNgFactory}))},k=function(){return l.e(22).then(l.bind(null,"M6mA")).then((function(n){return n.frmtareasprogramadas0ListPageModuleNgFactory}))},w=function(){return l.e(23).then(l.bind(null,"DvxU")).then((function(n){return n.frmtareasprogramadas2ListPageModuleNgFactory}))},T=function(){return l.e(20).then(l.bind(null,"YKFW")).then((function(n){return n.categoriaformularioListPageModuleNgFactory}))},V=function(){return Promise.all([l.e(1),l.e(2),l.e(15),l.e(26)]).then(l.bind(null,"XS3c")).then((function(n){return n.PedidoCompraPageModuleNgFactory}))},S=function(){return Promise.all([l.e(7),l.e(0),l.e(24)]).then(l.bind(null,"sX8J")).then((function(n){return n.ContactCardPageModuleNgFactory}))},_=function(){return l.e(96).then(l.bind(null,"NrnU")).then((function(n){return n.NotificationsPageModuleNgFactory}))},A=function(){return Promise.all([l.e(7),l.e(8),l.e(10),l.e(9),l.e(12),l.e(13),l.e(27)]).then(l.bind(null,"EZ4Z")).then((function(n){return n.BilleteraListPageModuleNgFactory}))},j=function n(){_classCallCheck(this,n)},O=t["\u0275cmf"](a,[],(function(n){return t["\u0275mod"]([t["\u0275mpd"](512,t.ComponentFactoryResolver,t["\u0275CodegenComponentFactoryResolver"],[[8,[i.a,N]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t["\u0275mpd"](4608,r.NgLocalization,r.NgLocaleLocalization,[t.LOCALE_ID]),t["\u0275mpd"](4608,u.c,u.c,[t.NgZone,t.ApplicationRef]),t["\u0275mpd"](4608,u.Gb,u.Gb,[u.c,t.ComponentFactoryResolver,t.Injector]),t["\u0275mpd"](4608,u.Lb,u.Lb,[u.c,t.ComponentFactoryResolver,t.Injector]),t["\u0275mpd"](4608,y.w,y.w,[]),t["\u0275mpd"](4608,I.i,I.o,[r.DOCUMENT,t.PLATFORM_ID,I.m]),t["\u0275mpd"](4608,I.p,I.p,[I.i,I.n]),t["\u0275mpd"](5120,I.a,(function(n){return[n]}),[I.p]),t["\u0275mpd"](4608,I.l,I.l,[]),t["\u0275mpd"](6144,I.j,null,[I.l]),t["\u0275mpd"](4608,I.h,I.h,[I.j]),t["\u0275mpd"](6144,I.b,null,[I.h]),t["\u0275mpd"](4608,I.f,I.k,[I.b,t.Injector]),t["\u0275mpd"](4608,I.c,I.c,[I.f]),t["\u0275mpd"](1073742336,r.CommonModule,r.CommonModule,[]),t["\u0275mpd"](1073742336,u.Cb,u.Cb,[]),t["\u0275mpd"](1073742336,y.v,y.v,[]),t["\u0275mpd"](1073742336,y.j,y.j,[]),t["\u0275mpd"](1073742336,D.p,D.p,[[2,D.u],[2,D.m]]),t["\u0275mpd"](1073742336,I.e,I.e,[]),t["\u0275mpd"](1073742336,I.d,I.d,[]),t["\u0275mpd"](1073742336,j,j,[]),t["\u0275mpd"](1073742336,a,a,[]),t["\u0275mpd"](256,I.m,"XSRF-TOKEN",[]),t["\u0275mpd"](256,I.n,"X-XSRF-TOKEN",[]),t["\u0275mpd"](1024,D.k,(function(){return[[{path:"",component:c,children:[{path:"ProvidesPage",children:[{path:"",loadChildren:F}]},{path:"AsociadoListPage",children:[{path:"",loadChildren:L}]},{path:"frmtareasprogramadasCreatePage",children:[{path:"",loadChildren:E}]},{path:"frmtareasprogramadastareasListPage",children:[{path:"",loadChildren:M}]},{path:"frmtareasprogramadasListPage",children:[{path:"",loadChildren:Z}]},{path:"frmtareasprogramadas0ListPage",children:[{path:"",loadChildren:k}]},{path:"frmtareasprogramadas2ListPage",children:[{path:"",loadChildren:w}]},{path:"categoriaformularioListPage",children:[{path:"",loadChildren:T}]},{path:"PedidoCompraPage",children:[{path:"",loadChildren:V}]},{path:"contact-card",children:[{path:"",loadChildren:S}]},{path:"notifications",children:[{path:"",loadChildren:_}]},{path:"billetera-list",children:[{path:"",loadChildren:A}]}]},{path:"",redirectTo:"app/billetera-list",pathMatch:"full"}]]}),[])])}))}}]);