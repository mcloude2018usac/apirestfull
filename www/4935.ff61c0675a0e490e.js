"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[4935],{44935:(A,l,a)=>{a.r(l),a.d(l,{TabsPageModule:()=>L});var s=a(23349),d=a(69808),r=a(93075),h=a(51062),g=a(55787),f=a(40520),m=a(68554),t=a(5e3);function c(o,i){if(1&o&&(t.TgZ(0,"ion-tab-button",12),t._UZ(1,"ion-icon",13),t.qZA()),2&o){const n=t.oxw(2);t.Q6J("tab",n.iniciopp)}}function b(o,i){1&o&&(t.TgZ(0,"ion-tab-button",14),t.ALo(1,"translate"),t._UZ(2,"ion-icon",15),t.qZA()),2&o&&t.MGl("title","",t.lcZ(1,1,"migestiones"),"  ")}function P(o,i){1&o&&(t.TgZ(0,"ion-tab-button",16),t._UZ(1,"ion-icon",17),t.qZA())}function p(o,i){1&o&&(t.TgZ(0,"ion-tab-button",18),t._UZ(1,"ion-icon",17),t.qZA())}function u(o,i){1&o&&(t.TgZ(0,"ion-tab-button",19),t.ALo(1,"translate"),t._UZ(2,"ion-icon",20),t.qZA()),2&o&&t.s9C("title",t.lcZ(1,1,"micuenta"))}function T(o,i){1&o&&(t.TgZ(0,"ion-tab-button",21),t.ALo(1,"translate"),t._UZ(2,"ion-icon",22),t.TgZ(3,"ion-badge"),t._uU(4,"6"),t.qZA(),t.qZA()),2&o&&t.s9C("title",t.lcZ(1,1,"michat"))}function Z(o,i){1&o&&(t.TgZ(0,"ion-tab-button",23),t._UZ(1,"ion-icon",24),t.qZA())}function v(o,i){1&o&&(t.TgZ(0,"ion-tab-button",25),t._UZ(1,"ion-icon",26),t.qZA())}function C(o,i){if(1&o&&(t.TgZ(0,"ion-tab-button",27),t._UZ(1,"ion-icon",28),t.qZA()),2&o){const n=t.oxw(2);t.Q6J("hidden",n.inventario)}}function x(o,i){1&o&&(t.TgZ(0,"ion-tab-button",29),t._UZ(1,"ion-icon",30),t.qZA())}function M(o,i){if(1&o&&(t.TgZ(0,"ion-tab-bar",1),t.YNc(1,c,2,1,"ion-tab-button",2),t.YNc(2,b,3,3,"ion-tab-button",3),t.YNc(3,P,2,0,"ion-tab-button",4),t.YNc(4,p,2,0,"ion-tab-button",5),t.YNc(5,u,3,3,"ion-tab-button",6),t.YNc(6,T,5,3,"ion-tab-button",7),t.YNc(7,Z,2,0,"ion-tab-button",8),t.YNc(8,v,2,0,"ion-tab-button",9),t.YNc(9,C,2,1,"ion-tab-button",10),t.YNc(10,x,2,0,"ion-tab-button",11),t.qZA()),2&o){const n=t.oxw();t.xp6(1),t.Q6J("ngIf","no"!==n.iniciopp),t.xp6(1),t.Q6J("ngIf","si"===n.procesopay),t.xp6(1),t.Q6J("ngIf",("si"===n.formspay||"si"===n.procesopay)&&1===n.t1),t.xp6(1),t.Q6J("ngIf","si"===n.formspay&&1===n.t2),t.xp6(1),t.Q6J("ngIf","si"===n.procesopay||"si"===n.totalpay||"si"===n.totalmarket||"si"===n.formspay),t.xp6(1),t.Q6J("ngIf","si"===n.procesopay||"si"===n.totalpay||"si"===n.totalmarket||"si"===n.formspay),t.xp6(1),t.Q6J("ngIf","si"===n.totalmarket),t.xp6(1),t.Q6J("ngIf","si"===n.totalmarket),t.xp6(1),t.Q6J("ngIf","si"===n.totalmarket),t.xp6(1),t.Q6J("ngIf","si"===n.totalpay)}}const y=[{path:"",component:(()=>{class o{constructor(n,e){this.menu=n,this.authenticationService=e,this.inventario=!0,this.totalpay="",this.totalmarket="",this.formspay="",this.procesopay="",this.iniciopp="no",this.sinov="0",this.t1=0,this.t2=0,this.t3=0,this.userinfo=[],this.totalpay=this.authenticationService.getsibilletera(),this.totalmarket=this.authenticationService.getsimarket(),this.formspay=this.authenticationService.getformularios(),this.procesopay=this.authenticationService.getprocess()}ngOnInit(){this.userinfo=this.authenticationService.getcopiauser(),2===this.userinfo.length&&(this.totalmarket="si",this.iniciopp=this.userinfo[1].iniciopage);var n="";""!==(n=this.userinfo[0].nov)&&void 0!==n&&n.indexOf("\xac")>0&&(this.sinov="1"),this.rolex=this.userinfo[0].role,"Administrador"===this.userinfo[0].role||"Inventario admin"===this.userinfo[0].role?this.inventario=!1:"Inspector planificaci\xf3n"===this.userinfo[0].role||"Gerente de servicios"===this.userinfo[0].role?this.t1=1:"Supervisor planificaci\xf3n"===this.userinfo[0].role?this.t2=1:this.t3=1}ionViewWillEnter(){this.menu.enable(!0)}}return o.\u0275fac=function(n){return new(n||o)(t.Y36(s._q),t.Y36(m.$))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-tabs"]],decls:2,vars:1,consts:[["slot","bottom",4,"ngIf"],["slot","bottom"],["title","Inicio",3,"tab",4,"ngIf"],["tab","categoriaformularioListPage",3,"title",4,"ngIf"],["title","Mis tareas programadas","tab","frmtareasprogramadas0ListPage",4,"ngIf"],["title","Mis tareas programadas","tab","frmtareasprogramadasListPage",4,"ngIf"],["tab","contact-card",3,"title",4,"ngIf"],["tab","notifications",3,"title",4,"ngIf"],["title","Tiendas","tab","categoria-list",4,"ngIf"],["title","Pedidos","tab","PedidoCompraPage",4,"ngIf"],["title","Inventario","tab","AsociadoListPage",3,"hidden",4,"ngIf"],["title","TotalPay","tab","billetera-list",4,"ngIf"],["title","Inicio",3,"tab"],["name","home"],["tab","categoriaformularioListPage",3,"title"],["name","open-outline"],["title","Mis tareas programadas","tab","frmtareasprogramadas0ListPage"],["name","reader-outline"],["title","Mis tareas programadas","tab","frmtareasprogramadasListPage"],["tab","contact-card",3,"title"],["name","person-circle-outline"],["tab","notifications",3,"title"],["name","notifications-outline"],["title","Tiendas","tab","categoria-list"],["name","home-outline"],["title","Pedidos","tab","PedidoCompraPage"],["name","list-circle-outline"],["title","Inventario","tab","AsociadoListPage",3,"hidden"],["name","library-outline"],["title","TotalPay","tab","billetera-list"],["name","wallet-outline"]],template:function(n,e){1&n&&(t.TgZ(0,"ion-tabs"),t.YNc(1,M,11,10,"ion-tab-bar",0),t.qZA()),2&n&&(t.xp6(1),t.Q6J("ngIf","0"===e.sinov))},directives:[s.UN,d.O5,s.yq,s.ZU,s.gu,s.yp],pipes:[h.X$],styles:["ion-tab-button[_ngcontent-%COMP%]{--color: var(--ion-color-medium-shade);--color-selected: var(--ion-color-dark)}"]}),o})(),children:[{path:"ProvidesPage",children:[{path:"",loadChildren:()=>Promise.all([a.e(4840),a.e(5392)]).then(a.bind(a,15392)).then(o=>o.ProvidesPageModule)}]},{path:"categoria-list",loadChildren:()=>a.e(5715).then(a.bind(a,45715)).then(o=>o.CategoriaListPageModule)},{path:"AsociadoListPage",children:[{path:"",loadChildren:()=>Promise.all([a.e(6604),a.e(5190),a.e(6759)]).then(a.bind(a,46759)).then(o=>o.AsociadoListPageModule)}]},{path:"frmtareasprogramadasCreatePage",children:[{path:"",loadChildren:()=>Promise.all([a.e(6604),a.e(5190),a.e(2233)]).then(a.bind(a,2233)).then(o=>o.frmtareasprogramadasCreatePageModule)}]},{path:"frmtareasprogramadastareasListPage",children:[{path:"",loadChildren:()=>a.e(4362).then(a.bind(a,4362)).then(o=>o.frmtareasprogramadastareasListPageModule)}]},{path:"frmtareasprogramadasListPage",children:[{path:"",loadChildren:()=>a.e(528).then(a.bind(a,80528)).then(o=>o.frmtareasprogramadasListPageModule)}]},{path:"frmtareasprogramadas0ListPage",children:[{path:"",loadChildren:()=>a.e(2445).then(a.bind(a,82445)).then(o=>o.frmtareasprogramadas0ListPageModule)}]},{path:"frmtareasprogramadas2ListPage",children:[{path:"",loadChildren:()=>a.e(1160).then(a.bind(a,61160)).then(o=>o.frmtareasprogramadas2ListPageModule)}]},{path:"categoriaformularioListPage",children:[{path:"",loadChildren:()=>a.e(9673).then(a.bind(a,99673)).then(o=>o.categoriaformularioListPageModule)}]},{path:"frmclientesListPage",loadChildren:()=>Promise.all([a.e(6604),a.e(4066)]).then(a.bind(a,34066)).then(o=>o.frmclientesListPageModule)},{path:"PedidoCompraPage",children:[{path:"",loadChildren:()=>Promise.all([a.e(6604),a.e(5190),a.e(6860),a.e(2728),a.e(700)]).then(a.bind(a,80700)).then(o=>o.PedidoCompraPageModule)}]},{path:"contact-card",children:[{path:"",loadChildren:()=>Promise.all([a.e(8246),a.e(4341),a.e(8592),a.e(2365)]).then(a.bind(a,52365)).then(o=>o.ContactCardPageModule)}]},{path:"contact-card3",children:[{path:"",loadChildren:()=>a.e(1674).then(a.bind(a,11674)).then(o=>o.ContactCard3PageModule)}]},{path:"notifications",children:[{path:"",loadChildren:()=>a.e(5195).then(a.bind(a,75195)).then(o=>o.NotificationsPageModule)}]},{path:"notificationpacis",children:[{path:"",loadChildren:()=>Promise.all([a.e(4840),a.e(519)]).then(a.bind(a,40519)).then(o=>o.NotificationpacisPageModule)}]},{path:"billetera-list",children:[{path:"",loadChildren:()=>Promise.all([a.e(8246),a.e(872),a.e(4840),a.e(3775),a.e(1418),a.e(8982),a.e(5683),a.e(3640)]).then(a.bind(a,83640)).then(o=>o.BilleteraListPageModule)}]}]},{path:"",redirectTo:"app/billetera-list",pathMatch:"full"}];let I=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({providers:[],imports:[[g.Bz.forChild(y),f.JF],g.Bz]}),o})(),L=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[s.Pc,d.ez,h.aw,r.u5,I]]}),o})()}}]);