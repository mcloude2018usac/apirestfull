(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{NrnU:function(n,e,l){"use strict";l.r(e),l.d(e,"NotificationsPageModuleNgFactory",(function(){return y}));var t=l("8Y7J");class i{}var o=l("pMnS"),r=l("MKJQ"),a=l("sZkV"),u=l("iInd"),s=l("SVse"),c=l("M4wD"),d=l("B7gC"),m=l("6LEC"),p=l("2gss"),g=l("TSSN"),f=l("mrSG"),h=l("ZtEv"),v=l("jtHE");class b{constructor(n,e,l,t,i,o,r){this.router=n,this.alertController=e,this.translateService=l,this.modalController=t,this.navCtrl=i,this.route=o,this.authenticationService=r,this.showAgeFilter=!1,this.showmenu=!1,this.items=[],this.variables=[],this.userinfo=[],this.viewType="grid",this.tituloxx="",this.efecto=0,this.simenu=!1,this.seguro="",this.msg="",this.searchSubject=new v.a(1),this.apifoto=this.authenticationService.getapifoto()}showConversationPage(n){this.router.navigate(["conversation"],{state:{variables:"",user:null,nombre:n.nombre,estado:n.estado,foto:n.foto,userid:n._id,item:n,record:{toUserId:this.userinfo[0]._id,email:this.userinfo[0].email,toUserName:this.userinfo[0].nombre,avatar:this.apifoto+this.userinfo[0].foto},grupal:"no",record2:{toUserId:n._id,email:n.email,toUserName:n.nombre,avatar:this.apifoto+n.foto}}})}addRecord(){return Object(f.a)(this,void 0,void 0,(function*(){const n=yield this.alertController.create({header:"Ingrese correo electr\xf3nico con el que se registro el usuario",message:"",inputs:[{name:"nombre",type:"text",placeholder:"Ingrese correo electr\xf3nico"}],buttons:[{text:"Cancelar",cssClass:"secondary",handler:n=>{}},{text:"Aceptar",handler:n=>{n.nombre===this.userinfo[0].email?this.authenticationService.presentAlert("Usuario no valido","Precauci\xf3n",""):""!==n.nombre&&this.authenticationService.getReg(n.nombre+"/emailsolonuevo/"+this.userinfo[0].idempresa._id,"personals",0).then(n=>{let e=[];e=n;const l={idsuscriptor:{id:e[0]._id,nombre:e[0].nombre},nombre:e[0].nombre,idempresa:e[0].idempresa,estado:"Activo",idsuscriptor2:{id:this.userinfo[0]._id,nombre:this.userinfo[0].nombre,email:e[0].email},nota:"",bitacora:{idempresa:this.userinfo[0].idempresa._id,idafiliado:"",email:this.userinfo[0].email,permiso:"Crea",accion:NaN}};l&&this.authenticationService.createReg("",l,"userchats").then(n=>{this.pideregistros()},n=>{this.authenticationService.presentAlert(n.error,"Precauci\xf3n","")})})}}]});yield n.present().then(()=>{document.querySelector("ion-alert input").focus()})}))}deleteRecord(n){return Object(f.a)(this,void 0,void 0,(function*(){const e=yield this.alertController.create({header:this.seguro,message:"",buttons:[{text:"No",cssClass:"secondary",handler:n=>{}},{text:"Si",handler:()=>{this.authenticationService.deleteReg(n._id+"/"+this.userinfo[0].email+"/"+this.userinfo[0].idempresa._id+"/na","userchats").then(n=>{this.pideregistros()},n=>{this.authenticationService.presentAlert(n.error,this.msg,"")})}}]});yield e.present()}))}pideregistros(){this.itemsList=[],this.efecto=0,this.authenticationService.getReg(this.userinfo[0].email+"/mios/"+this.userinfo[0].idempresa._id,"userchats",0).then(n=>{this.efecto=1,this.items=n,this.itemsList=this.items},n=>{this.authenticationService.presentAlert(n.error,this.msg,"")})}ngOnInit(){this.userinfo=this.authenticationService.getcopiauser(),this.logo1=this.authenticationService.dalogo1(this.userinfo),this.translateService.get("SEGUROM").subscribe(n=>{this.seguro=n}),this.translateService.get("MSGM").subscribe(n=>{this.msg=n}),this.pideregistros()}}var C=t["\u0275crt"]({encapsulation:0,styles:[["[_nghost-%COMP%]{--page-margin:var(--app-narrow-margin)}.notifications-content[_ngcontent-%COMP%]   ion-item-divider[_ngcontent-%COMP%]{--background:var(--ion-color-light);--padding-start:var(--page-margin)}.notifications-content[_ngcontent-%COMP%]   .notification-item[_ngcontent-%COMP%]{--padding-start:0px;--inner-padding-end:0px;padding:var(--page-margin);color:var(--ion-color-medium);box-shadow:inset 0 8px 2px -9px var(--ion-color-darkest)}.notifications-content[_ngcontent-%COMP%]   .notification-item[_ngcontent-%COMP%]   .notification-item-wrapper[_ngcontent-%COMP%]{--ion-grid-column-padding:0px;width:100%;align-items:center}.notifications-content[_ngcontent-%COMP%]   .notification-item[_ngcontent-%COMP%]   .details-wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:space-around;padding-left:var(--page-margin)}.notifications-content[_ngcontent-%COMP%]   .notification-item[_ngcontent-%COMP%]   .details-wrapper[_ngcontent-%COMP%]   .details-name[_ngcontent-%COMP%]{margin-top:0;margin-bottom:5px;font-size:16px;font-weight:400;letter-spacing:.2px;color:var(--ion-color-secondary)}.notifications-content[_ngcontent-%COMP%]   .notification-item[_ngcontent-%COMP%]   .details-wrapper[_ngcontent-%COMP%]   .details-description[_ngcontent-%COMP%]{font-size:12px;margin:0}.notifications-content[_ngcontent-%COMP%]   .notification-item[_ngcontent-%COMP%]   .date-wrapper[_ngcontent-%COMP%]{align-self:flex-start}.notifications-content[_ngcontent-%COMP%]   .notification-item[_ngcontent-%COMP%]   .date-wrapper[_ngcontent-%COMP%]   .notification-date[_ngcontent-%COMP%]{margin:0;font-size:12px;text-align:end}"],["app-image-shell.notification-image[_ngcontent-%COMP%]{--image-shell-border-radius:50%}"]],data:{}});function R(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,27,"ion-item",[["class","notification-item"],["lines","none"]],null,[[null,"click"]],(function(n,e,l){var i=!0,o=n.component;return"click"===e&&(i=!1!==t["\u0275nov"](n,2).onClick()&&i),"click"===e&&(i=!1!==t["\u0275nov"](n,3).onClick(l)&&i),"click"===e&&(i=!1!==o.showConversationPage(n.context.$implicit.idsuscriptor.id)&&i),i}),r.Pb,r.A)),t["\u0275did"](1,49152,null,0,a.I,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{lines:[0,"lines"]},null),t["\u0275did"](2,16384,null,0,u.n,[u.m,u.a,[8,null],t.Renderer2,t.ElementRef],null,null),t["\u0275did"](3,737280,null,0,a.Nb,[s.LocationStrategy,a.Hb,t.ElementRef,u.m,[2,u.n]],null,null),(n()(),t["\u0275eld"](4,0,null,0,23,"ion-row",[["class","notification-item-wrapper"]],null,null,null,r.ac,r.Q)),t["\u0275did"](5,49152,null,0,a.hb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](6,0,null,0,6,"ion-col",[["size","2"]],null,null,null,r.xb,r.n)),t["\u0275did"](7,49152,null,0,a.u,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{size:[0,"size"]},null),(n()(),t["\u0275eld"](8,0,null,0,4,"app-aspect-ratio",[],[[4,"padding",null]],null,null,c.b,c.a)),t["\u0275did"](9,49152,null,0,d.a,[],{ratio:[0,"ratio"]},null),t["\u0275pod"](10,{w:0,h:1}),(n()(),t["\u0275eld"](11,0,null,0,1,"app-image-shell",[["class","notification-image"]],[[2,"img-loaded",null],[4,"backgroundImage",null],[1,"display",0]],null,null,m.b,m.a)),t["\u0275did"](12,49152,null,0,p.a,[t.PLATFORM_ID],{src:[0,"src"],alt:[1,"alt"]},null),(n()(),t["\u0275eld"](13,0,null,0,10,"ion-col",[["class","details-wrapper"]],null,null,null,r.xb,r.n)),t["\u0275did"](14,49152,null,0,a.u,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](15,0,null,0,1,"h2",[["class","details-name"]],null,null,null,null,null)),(n()(),t["\u0275ted"](16,null,["",""])),(n()(),t["\u0275eld"](17,0,null,0,1,"p",[["class","details-description"]],null,null,null,null,null)),(n()(),t["\u0275ted"](18,null,["",""])),(n()(),t["\u0275eld"](19,0,null,0,4,"ion-label",[],null,null,null,r.Qb,r.G)),t["\u0275did"](20,49152,null,0,a.O,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275ted"](21,0,["Nuevos mensajes: "," "])),(n()(),t["\u0275eld"](22,0,null,0,1,"ion-icon",[["name","notifications-outline"]],null,null,null,r.Fb,r.v)),t["\u0275did"](23,49152,null,0,a.D,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{name:[0,"name"]},null),(n()(),t["\u0275eld"](24,0,null,0,3,"ion-col",[["class","date-wrapper"],["size","2"]],null,null,null,r.xb,r.n)),t["\u0275did"](25,49152,null,0,a.u,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{size:[0,"size"]},null),(n()(),t["\u0275eld"](26,0,null,0,1,"h3",[["class","notification-date"]],null,null,null,null,null)),(n()(),t["\u0275ted"](27,null,["",""]))],(function(n,e){var l=e.component;n(e,1,0,"none"),n(e,3,0),n(e,7,0,"2");var t=n(e,10,0,1,1);n(e,9,0,t),n(e,12,0,l.apifoto+e.context.$implicit.idsuscriptor.id.foto,"user image"),n(e,23,0,"notifications-outline"),n(e,25,0,"2")}),(function(n,e){n(e,8,0,t["\u0275nov"](e,9).ratioPadding),n(e,11,0,t["\u0275nov"](e,12).imageLoaded,t["\u0275nov"](e,12).backgroundImage,t["\u0275nov"](e,12).display),n(e,16,0,e.context.$implicit.idsuscriptor.id.nombre),n(e,18,0,e.context.$implicit.idsuscriptor.id.email),n(e,21,0,e.context.$implicit.cantidad),n(e,27,0,e.context.$implicit.idsuscriptor.id.role)}))}function N(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,9,null,null,null,null,null,null,null)),(n()(),t["\u0275eld"](1,0,null,null,8,"ion-item-group",[],null,null,null,r.Lb,r.C)),t["\u0275did"](2,49152,null,0,a.K,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](3,0,null,0,4,"ion-item-divider",[["sticky",""]],null,null,null,r.Kb,r.B)),t["\u0275did"](4,49152,null,0,a.J,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{sticky:[0,"sticky"]},null),(n()(),t["\u0275eld"](5,0,null,0,2,"ion-label",[],null,null,null,r.Qb,r.G)),t["\u0275did"](6,49152,null,0,a.O,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275ted"](-1,0,["Usuarios Registrados"])),(n()(),t["\u0275and"](16777216,null,0,1,null,R)),t["\u0275did"](9,278528,null,0,s.NgForOf,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"]},null)],(function(n,e){var l=e.component;n(e,4,0,""),n(e,9,0,l.itemsList)}),null)}function M(n){return t["\u0275vid"](0,[t["\u0275qud"](671088640,1,{infiniteScroll:0}),(n()(),t["\u0275eld"](1,0,null,null,23,"ion-header",[],null,null,null,r.Eb,r.u)),t["\u0275did"](2,49152,null,0,a.C,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](3,0,null,0,21,"ion-toolbar",[["color","primary"]],null,null,null,r.sc,r.ib)),t["\u0275did"](4,49152,null,0,a.Ab,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{color:[0,"color"]},null),(n()(),t["\u0275eld"](5,0,null,0,3,"ion-buttons",[["slot","start"]],null,null,null,r.pb,r.f)),t["\u0275did"](6,49152,null,0,a.m,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](7,0,null,0,1,"ion-menu-button",[],null,null,null,r.Tb,r.K)),t["\u0275did"](8,49152,null,0,a.S,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](9,0,null,0,2,"ion-title",[],null,null,null,r.qc,r.gb)),t["\u0275did"](10,49152,null,0,a.yb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275ted"](-1,0,[" Notificaciones "])),(n()(),t["\u0275eld"](12,0,null,0,12,"ion-buttons",[["slot","end"]],null,null,null,r.pb,r.f)),t["\u0275did"](13,49152,null,0,a.m,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](14,0,null,0,4,"ion-button",[],[[8,"title",0]],[[null,"click"]],(function(n,e,l){var t=!0;return"click"===e&&(t=!1!==n.component.addRecord()&&t),t}),r.ob,r.e)),t["\u0275did"](15,49152,null,0,a.l,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),t["\u0275pid"](131072,g.k,[g.l,t.ChangeDetectorRef]),(n()(),t["\u0275eld"](17,0,null,0,1,"ion-icon",[["name","add"],["slot","icon-only"]],null,null,null,r.Fb,r.v)),t["\u0275did"](18,49152,null,0,a.D,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{name:[0,"name"]},null),(n()(),t["\u0275eld"](19,0,null,0,4,"ion-button",[],[[8,"title",0]],[[null,"click"]],(function(n,e,l){var t=!0;return"click"===e&&(t=!1!==n.component.pideregistros()&&t),t}),r.ob,r.e)),t["\u0275did"](20,49152,null,0,a.l,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),t["\u0275pid"](131072,g.k,[g.l,t.ChangeDetectorRef]),(n()(),t["\u0275eld"](22,0,null,0,1,"ion-icon",[["name","refresh-circle-outline"],["slot","icon-only"]],null,null,null,r.Fb,r.v)),t["\u0275did"](23,49152,null,0,a.D,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{name:[0,"name"]},null),(n()(),t["\u0275eld"](24,0,null,0,0,"img",[["alt","logo"],["height","33"],["id","header_logo"]],[[8,"src",4]],null,null,null,null)),(n()(),t["\u0275eld"](25,0,null,null,3,"ion-content",[["class","notifications-content"]],null,null,null,r.yb,r.o)),t["\u0275did"](26,49152,null,0,a.v,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275and"](16777216,null,0,1,null,N)),t["\u0275did"](28,16384,null,0,s.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null)],(function(n,e){var l=e.component;n(e,4,0,"primary"),n(e,18,0,"add"),n(e,23,0,"refresh-circle-outline"),n(e,28,0,(null==l.itemsList?null:l.itemsList.length)>0)}),(function(n,e){var l=e.component;n(e,14,0,t["\u0275inlineInterpolate"](1," ",t["\u0275unv"](e,14,0,t["\u0275nov"](e,16).transform("AGREGARM")),"")),n(e,19,0,t["\u0275inlineInterpolate"](1," ",t["\u0275unv"](e,19,0,t["\u0275nov"](e,21).transform("REFRESCARM")),"")),n(e,24,0,l.apifoto+l.logo1)}))}function O(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"app-notifications",[],null,null,null,M,C)),t["\u0275did"](1,114688,null,0,b,[u.m,a.b,g.l,a.Gb,a.Hb,u.a,h.a],null,null)],(function(n,e){n(e,1,0)}),null)}var _=t["\u0275ccf"]("app-notifications",b,O,{},{},[]),P=l("s7LF"),E=l("IheW"),w=l("ZpN7"),x=l("Kt/9"),D=l("j1ZV"),y=t["\u0275cmf"](i,[],(function(n){return t["\u0275mod"]([t["\u0275mpd"](512,t.ComponentFactoryResolver,t["\u0275CodegenComponentFactoryResolver"],[[8,[o.a,_]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t["\u0275mpd"](4608,s.NgLocalization,s.NgLocaleLocalization,[t.LOCALE_ID]),t["\u0275mpd"](4608,a.c,a.c,[t.NgZone,t.ApplicationRef]),t["\u0275mpd"](4608,a.Gb,a.Gb,[a.c,t.ComponentFactoryResolver,t.Injector]),t["\u0275mpd"](4608,a.Lb,a.Lb,[a.c,t.ComponentFactoryResolver,t.Injector]),t["\u0275mpd"](4608,P.w,P.w,[]),t["\u0275mpd"](4608,E.i,E.o,[s.DOCUMENT,t.PLATFORM_ID,E.m]),t["\u0275mpd"](4608,E.p,E.p,[E.i,E.n]),t["\u0275mpd"](5120,E.a,(function(n){return[n]}),[E.p]),t["\u0275mpd"](4608,E.l,E.l,[]),t["\u0275mpd"](6144,E.j,null,[E.l]),t["\u0275mpd"](4608,E.h,E.h,[E.j]),t["\u0275mpd"](6144,E.b,null,[E.h]),t["\u0275mpd"](4608,E.f,E.k,[E.b,t.Injector]),t["\u0275mpd"](4608,E.c,E.c,[E.f]),t["\u0275mpd"](5120,t.APP_INITIALIZER,(function(n){return[w.b(n)]}),[x.a]),t["\u0275mpd"](4608,g.h,g.g,[]),t["\u0275mpd"](4608,g.d,g.f,[]),t["\u0275mpd"](4608,g.j,g.e,[]),t["\u0275mpd"](4608,g.c,g.b,[]),t["\u0275mpd"](4608,g.l,g.l,[g.m,g.h,g.d,g.j,g.c,g.n,g.p,g.o,g.a]),t["\u0275mpd"](1073742336,s.CommonModule,s.CommonModule,[]),t["\u0275mpd"](1073742336,a.Cb,a.Cb,[]),t["\u0275mpd"](1073742336,P.v,P.v,[]),t["\u0275mpd"](1073742336,P.j,P.j,[]),t["\u0275mpd"](1073742336,g.i,g.i,[]),t["\u0275mpd"](1073742336,E.e,E.e,[]),t["\u0275mpd"](1073742336,E.d,E.d,[]),t["\u0275mpd"](1073742336,w.a,w.a,[]),t["\u0275mpd"](1073742336,D.a,D.a,[]),t["\u0275mpd"](1073742336,u.p,u.p,[[2,u.u],[2,u.m]]),t["\u0275mpd"](1073742336,i,i,[]),t["\u0275mpd"](256,E.m,"XSRF-TOKEN",[]),t["\u0275mpd"](256,E.n,"X-XSRF-TOKEN",[]),t["\u0275mpd"](256,g.p,void 0,[]),t["\u0275mpd"](256,g.n,void 0,[]),t["\u0275mpd"](256,g.o,void 0,[]),t["\u0275mpd"](256,g.a,void 0,[]),t["\u0275mpd"](1024,u.k,(function(){return[[{path:"",component:b}]]}),[])])}))}}]);