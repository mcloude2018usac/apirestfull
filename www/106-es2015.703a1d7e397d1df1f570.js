(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{NrnU:function(n,e,t){"use strict";t.r(e),t.d(e,"NotificationsPageModuleNgFactory",(function(){return x}));var l=t("8Y7J");class i{}var o=t("pMnS"),a=t("MKJQ"),r=t("sZkV"),u=t("iInd"),c=t("SVse"),s=t("M4wD"),d=t("B7gC"),m=t("6LEC"),p=t("2gss"),g=t("TSSN"),f=t("mrSG"),h=t("ZtEv"),v=t("jtHE");class C{constructor(n,e,t,l,i,o,a){this.router=n,this.alertController=e,this.translateService=t,this.modalController=l,this.navCtrl=i,this.route=o,this.authenticationService=a,this.showAgeFilter=!1,this.showmenu=!1,this.items=[],this.variables=[],this.userinfo=[],this.viewType="grid",this.tituloxx="",this.efecto=0,this.simenu=!1,this.seguro="",this.msg="",this.searchSubject=new v.a(1),this.apifoto=this.authenticationService.getapifoto()}showConversationPage(n){this.router.navigate(["conversation"],{state:{variables:"",user:null,nombre:n.nombre,estado:n.estado,foto:n.foto,userid:n._id,item:n,record:{toUserId:this.userinfo[0]._id,email:this.userinfo[0].email,toUserName:this.userinfo[0].nombre,avatar:this.apifoto+this.userinfo[0].foto},grupal:"no",record2:{toUserId:n._id,email:n.email,toUserName:n.nombre,avatar:this.apifoto+n.foto}}})}addRecord(){return Object(f.a)(this,void 0,void 0,(function*(){const n=yield this.alertController.create({header:this.authenticationService.datraduccion("ingrese_corronotificar"),message:"",inputs:[{name:"nombre",type:"text",placeholder:this.authenticationService.datraduccion("usuario_emeil_not")}],buttons:[{text:this.authenticationService.datraduccion("cancelar"),cssClass:"secondary",handler:n=>{}},{text:this.authenticationService.datraduccion("aceptar"),handler:n=>{n.nombre===this.userinfo[0].email?this.authenticationService.presentAlert(this.authenticationService.datraduccion("usuario_noexiste"),this.authenticationService.datraduccion("precaucion"),""):""!==n.nombre&&this.authenticationService.getReg(n.nombre+"/emailsolonuevo/"+this.userinfo[0].idempresa._id,"personals",0).then(n=>{let e=[];e=n;const t={idsuscriptor:{id:e[0]._id,nombre:e[0].nombre},nombre:e[0].nombre,idempresa:e[0].idempresa,estado:"Activo",idsuscriptor2:{id:this.userinfo[0]._id,nombre:this.userinfo[0].nombre,email:e[0].email},nota:"",bitacora:{idempresa:this.userinfo[0].idempresa._id,idafiliado:"",email:this.userinfo[0].email,permiso:"Crea",accion:NaN}};t&&this.authenticationService.createReg("",t,"userchats").then(n=>{this.pideregistros()},n=>{this.authenticationService.presentAlert(n.error,this.authenticationService.datraduccion("precaucion"),"")})})}}]});yield n.present().then(()=>{document.querySelector("ion-alert input").focus()})}))}deleteRecord(n){return Object(f.a)(this,void 0,void 0,(function*(){const e=yield this.alertController.create({header:this.seguro,message:"",buttons:[{text:"No",cssClass:"secondary",handler:n=>{}},{text:"Si",handler:()=>{this.authenticationService.deleteReg(n._id+"/"+this.userinfo[0].email+"/"+this.userinfo[0].idempresa._id+"/na","userchats").then(n=>{this.pideregistros()},n=>{this.authenticationService.presentAlert(n.error,this.msg,"")})}}]});yield e.present()}))}pideregistros(){this.itemsList=[],this.efecto=0,this.authenticationService.getReg(this.userinfo[0].email+"/mios/"+this.userinfo[0].idempresa._id,"userchats",0).then(n=>{this.efecto=1,this.items=n,this.itemsList=this.items},n=>{this.authenticationService.presentAlert(n.error,this.msg,"")})}ngOnInit(){this.userinfo=this.authenticationService.getcopiauser(),this.logo1=this.authenticationService.dalogo1(this.userinfo),this.translateService.get("SEGUROM").subscribe(n=>{this.seguro=n}),this.translateService.get("MSGM").subscribe(n=>{this.msg=n}),this.pideregistros()}}var b=l["\u0275crt"]({encapsulation:0,styles:[["[_nghost-%COMP%]{--page-margin:var(--app-narrow-margin)}.notifications-content[_ngcontent-%COMP%]   ion-item-divider[_ngcontent-%COMP%]{--background:var(--ion-color-light);--padding-start:var(--page-margin)}.notifications-content[_ngcontent-%COMP%]   .notification-item[_ngcontent-%COMP%]{--padding-start:0px;--inner-padding-end:0px;padding:var(--page-margin);color:var(--ion-color-medium);box-shadow:inset 0 8px 2px -9px var(--ion-color-darkest)}.notifications-content[_ngcontent-%COMP%]   .notification-item[_ngcontent-%COMP%]   .notification-item-wrapper[_ngcontent-%COMP%]{--ion-grid-column-padding:0px;width:100%;align-items:center}.notifications-content[_ngcontent-%COMP%]   .notification-item[_ngcontent-%COMP%]   .details-wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:space-around;padding-left:var(--page-margin)}.notifications-content[_ngcontent-%COMP%]   .notification-item[_ngcontent-%COMP%]   .details-wrapper[_ngcontent-%COMP%]   .details-name[_ngcontent-%COMP%]{margin-top:0;margin-bottom:5px;font-size:16px;font-weight:400;letter-spacing:.2px;color:var(--ion-color-secondary)}.notifications-content[_ngcontent-%COMP%]   .notification-item[_ngcontent-%COMP%]   .details-wrapper[_ngcontent-%COMP%]   .details-description[_ngcontent-%COMP%]{font-size:12px;margin:0}.notifications-content[_ngcontent-%COMP%]   .notification-item[_ngcontent-%COMP%]   .date-wrapper[_ngcontent-%COMP%]{align-self:flex-start}.notifications-content[_ngcontent-%COMP%]   .notification-item[_ngcontent-%COMP%]   .date-wrapper[_ngcontent-%COMP%]   .notification-date[_ngcontent-%COMP%]{margin:0;font-size:12px;text-align:end}"],["app-image-shell.notification-image[_ngcontent-%COMP%]{--image-shell-border-radius:50%}"]],data:{}});function R(n){return l["\u0275vid"](0,[(n()(),l["\u0275eld"](0,0,null,null,27,"ion-item",[["class","notification-item"],["lines","none"]],null,[[null,"click"]],(function(n,e,t){var i=!0,o=n.component;return"click"===e&&(i=!1!==l["\u0275nov"](n,2).onClick()&&i),"click"===e&&(i=!1!==l["\u0275nov"](n,3).onClick(t)&&i),"click"===e&&(i=!1!==o.showConversationPage(n.context.$implicit.idsuscriptor.id)&&i),i}),a.Lb,a.A)),l["\u0275did"](1,49152,null,0,r.I,[l.ChangeDetectorRef,l.ElementRef,l.NgZone],{lines:[0,"lines"]},null),l["\u0275did"](2,16384,null,0,u.n,[u.m,u.a,[8,null],l.Renderer2,l.ElementRef],null,null),l["\u0275did"](3,737280,null,0,r.Nb,[c.LocationStrategy,r.Hb,l.ElementRef,u.m,[2,u.n]],null,null),(n()(),l["\u0275eld"](4,0,null,0,23,"ion-row",[["class","notification-item-wrapper"]],null,null,null,a.Wb,a.O)),l["\u0275did"](5,49152,null,0,r.hb,[l.ChangeDetectorRef,l.ElementRef,l.NgZone],null,null),(n()(),l["\u0275eld"](6,0,null,0,6,"ion-col",[["size","2"]],null,null,null,a.vb,a.n)),l["\u0275did"](7,49152,null,0,r.u,[l.ChangeDetectorRef,l.ElementRef,l.NgZone],{size:[0,"size"]},null),(n()(),l["\u0275eld"](8,0,null,0,4,"app-aspect-ratio",[],[[4,"padding",null]],null,null,s.b,s.a)),l["\u0275did"](9,49152,null,0,d.a,[],{ratio:[0,"ratio"]},null),l["\u0275pod"](10,{w:0,h:1}),(n()(),l["\u0275eld"](11,0,null,0,1,"app-image-shell",[["class","notification-image"]],[[2,"img-loaded",null],[4,"backgroundImage",null],[1,"display",0]],null,null,m.b,m.a)),l["\u0275did"](12,49152,null,0,p.a,[l.PLATFORM_ID],{src:[0,"src"],alt:[1,"alt"]},null),(n()(),l["\u0275eld"](13,0,null,0,14,"ion-col",[["class","details-wrapper"]],null,null,null,a.vb,a.n)),l["\u0275did"](14,49152,null,0,r.u,[l.ChangeDetectorRef,l.ElementRef,l.NgZone],null,null),(n()(),l["\u0275eld"](15,0,null,0,2,"p",[["class","details-name"]],null,null,null,null,null)),(n()(),l["\u0275ted"](16,null,[" ",": ",""])),l["\u0275pid"](131072,g.k,[g.l,l.ChangeDetectorRef]),(n()(),l["\u0275eld"](18,0,null,0,1,"h2",[["class","details-name"]],null,null,null,null,null)),(n()(),l["\u0275ted"](19,null,["",""])),(n()(),l["\u0275eld"](20,0,null,0,1,"p",[["class","details-name"]],null,null,null,null,null)),(n()(),l["\u0275ted"](21,null,["",""])),(n()(),l["\u0275eld"](22,0,null,0,5,"ion-label",[["color","warning"]],null,null,null,a.Mb,a.E)),l["\u0275did"](23,49152,null,0,r.O,[l.ChangeDetectorRef,l.ElementRef,l.NgZone],{color:[0,"color"]},null),(n()(),l["\u0275ted"](24,0,["",": "," "])),l["\u0275pid"](131072,g.k,[g.l,l.ChangeDetectorRef]),(n()(),l["\u0275eld"](26,0,null,0,1,"ion-icon",[["name","notifications-outline"]],null,null,null,a.Db,a.v)),l["\u0275did"](27,49152,null,0,r.D,[l.ChangeDetectorRef,l.ElementRef,l.NgZone],{name:[0,"name"]},null)],(function(n,e){var t=e.component;n(e,1,0,"none"),n(e,3,0),n(e,7,0,"2");var l=n(e,10,0,1,1);n(e,9,0,l),n(e,12,0,t.apifoto+e.context.$implicit.idsuscriptor.id.foto,"user image"),n(e,23,0,"warning"),n(e,27,0,"notifications-outline")}),(function(n,e){n(e,8,0,l["\u0275nov"](e,9).ratioPadding),n(e,11,0,l["\u0275nov"](e,12).imageLoaded,l["\u0275nov"](e,12).backgroundImage,l["\u0275nov"](e,12).display),n(e,16,0,l["\u0275unv"](e,16,0,l["\u0275nov"](e,17).transform("role")),e.context.$implicit.idsuscriptor.id.role),n(e,19,0,e.context.$implicit.idsuscriptor.id.nombre),n(e,21,0,e.context.$implicit.idsuscriptor.id.email),n(e,24,0,l["\u0275unv"](e,24,0,l["\u0275nov"](e,25).transform("nuevos_msg")),e.context.$implicit.cantidad)}))}function _(n){return l["\u0275vid"](0,[(n()(),l["\u0275eld"](0,0,null,null,10,null,null,null,null,null,null,null)),(n()(),l["\u0275eld"](1,0,null,null,9,"ion-item-group",[],null,null,null,a.Jb,a.C)),l["\u0275did"](2,49152,null,0,r.K,[l.ChangeDetectorRef,l.ElementRef,l.NgZone],null,null),(n()(),l["\u0275eld"](3,0,null,0,5,"ion-item-divider",[["sticky",""]],null,null,null,a.Ib,a.B)),l["\u0275did"](4,49152,null,0,r.J,[l.ChangeDetectorRef,l.ElementRef,l.NgZone],{sticky:[0,"sticky"]},null),(n()(),l["\u0275eld"](5,0,null,0,3,"ion-label",[],null,null,null,a.Mb,a.E)),l["\u0275did"](6,49152,null,0,r.O,[l.ChangeDetectorRef,l.ElementRef,l.NgZone],null,null),(n()(),l["\u0275ted"](7,0,["",""])),l["\u0275pid"](131072,g.k,[g.l,l.ChangeDetectorRef]),(n()(),l["\u0275and"](16777216,null,0,1,null,R)),l["\u0275did"](10,278528,null,0,c.NgForOf,[l.ViewContainerRef,l.TemplateRef,l.IterableDiffers],{ngForOf:[0,"ngForOf"]},null)],(function(n,e){var t=e.component;n(e,4,0,""),n(e,10,0,t.itemsList)}),(function(n,e){n(e,7,0,l["\u0275unv"](e,7,0,l["\u0275nov"](e,8).transform("usuario_reg")))}))}function M(n){return l["\u0275vid"](0,[l["\u0275qud"](671088640,1,{infiniteScroll:0}),(n()(),l["\u0275eld"](1,0,null,null,24,"ion-header",[],null,null,null,a.Cb,a.u)),l["\u0275did"](2,49152,null,0,r.C,[l.ChangeDetectorRef,l.ElementRef,l.NgZone],null,null),(n()(),l["\u0275eld"](3,0,null,0,22,"ion-toolbar",[["color","primary"]],null,null,null,a.oc,a.gb)),l["\u0275did"](4,49152,null,0,r.Ab,[l.ChangeDetectorRef,l.ElementRef,l.NgZone],{color:[0,"color"]},null),(n()(),l["\u0275eld"](5,0,null,0,3,"ion-buttons",[["slot","start"]],null,null,null,a.nb,a.f)),l["\u0275did"](6,49152,null,0,r.m,[l.ChangeDetectorRef,l.ElementRef,l.NgZone],null,null),(n()(),l["\u0275eld"](7,0,null,0,1,"ion-menu-button",[],null,null,null,a.Pb,a.I)),l["\u0275did"](8,49152,null,0,r.S,[l.ChangeDetectorRef,l.ElementRef,l.NgZone],null,null),(n()(),l["\u0275eld"](9,0,null,0,3,"ion-title",[],null,null,null,a.mc,a.eb)),l["\u0275did"](10,49152,null,0,r.yb,[l.ChangeDetectorRef,l.ElementRef,l.NgZone],null,null),(n()(),l["\u0275ted"](11,0,[" "," "])),l["\u0275pid"](131072,g.k,[g.l,l.ChangeDetectorRef]),(n()(),l["\u0275eld"](13,0,null,0,12,"ion-buttons",[["slot","end"]],null,null,null,a.nb,a.f)),l["\u0275did"](14,49152,null,0,r.m,[l.ChangeDetectorRef,l.ElementRef,l.NgZone],null,null),(n()(),l["\u0275eld"](15,0,null,0,4,"ion-button",[],[[8,"title",0]],[[null,"click"]],(function(n,e,t){var l=!0;return"click"===e&&(l=!1!==n.component.addRecord()&&l),l}),a.mb,a.e)),l["\u0275did"](16,49152,null,0,r.l,[l.ChangeDetectorRef,l.ElementRef,l.NgZone],null,null),l["\u0275pid"](131072,g.k,[g.l,l.ChangeDetectorRef]),(n()(),l["\u0275eld"](18,0,null,0,1,"ion-icon",[["name","add"],["slot","icon-only"]],null,null,null,a.Db,a.v)),l["\u0275did"](19,49152,null,0,r.D,[l.ChangeDetectorRef,l.ElementRef,l.NgZone],{name:[0,"name"]},null),(n()(),l["\u0275eld"](20,0,null,0,4,"ion-button",[],[[8,"title",0]],[[null,"click"]],(function(n,e,t){var l=!0;return"click"===e&&(l=!1!==n.component.pideregistros()&&l),l}),a.mb,a.e)),l["\u0275did"](21,49152,null,0,r.l,[l.ChangeDetectorRef,l.ElementRef,l.NgZone],null,null),l["\u0275pid"](131072,g.k,[g.l,l.ChangeDetectorRef]),(n()(),l["\u0275eld"](23,0,null,0,1,"ion-icon",[["name","refresh-circle-outline"],["slot","icon-only"]],null,null,null,a.Db,a.v)),l["\u0275did"](24,49152,null,0,r.D,[l.ChangeDetectorRef,l.ElementRef,l.NgZone],{name:[0,"name"]},null),(n()(),l["\u0275eld"](25,0,null,0,0,"img",[["alt","logo"],["height","33"],["id","header_logo"]],[[8,"src",4]],null,null,null,null)),(n()(),l["\u0275eld"](26,0,null,null,3,"ion-content",[["class","notifications-content"]],null,null,null,a.wb,a.o)),l["\u0275did"](27,49152,null,0,r.v,[l.ChangeDetectorRef,l.ElementRef,l.NgZone],null,null),(n()(),l["\u0275and"](16777216,null,0,1,null,_)),l["\u0275did"](29,16384,null,0,c.NgIf,[l.ViewContainerRef,l.TemplateRef],{ngIf:[0,"ngIf"]},null)],(function(n,e){var t=e.component;n(e,4,0,"primary"),n(e,19,0,"add"),n(e,24,0,"refresh-circle-outline"),n(e,29,0,(null==t.itemsList?null:t.itemsList.length)>0)}),(function(n,e){var t=e.component;n(e,11,0,l["\u0275unv"](e,11,0,l["\u0275nov"](e,12).transform("notificacion"))),n(e,15,0,l["\u0275inlineInterpolate"](1," ",l["\u0275unv"](e,15,0,l["\u0275nov"](e,17).transform("AGREGARM")),"")),n(e,20,0,l["\u0275inlineInterpolate"](1," ",l["\u0275unv"](e,20,0,l["\u0275nov"](e,22).transform("REFRESCARM")),"")),n(e,25,0,t.apifoto+t.logo1)}))}function O(n){return l["\u0275vid"](0,[(n()(),l["\u0275eld"](0,0,null,null,1,"app-notifications",[],null,null,null,M,b)),l["\u0275did"](1,114688,null,0,C,[u.m,r.b,g.l,r.Gb,r.Hb,u.a,h.a],null,null)],(function(n,e){n(e,1,0)}),null)}var N=l["\u0275ccf"]("app-notifications",C,O,{},{},[]),D=t("s7LF"),S=t("IheW"),E=t("ZpN7"),P=t("Kt/9"),w=t("j1ZV"),x=l["\u0275cmf"](i,[],(function(n){return l["\u0275mod"]([l["\u0275mpd"](512,l.ComponentFactoryResolver,l["\u0275CodegenComponentFactoryResolver"],[[8,[o.a,N]],[3,l.ComponentFactoryResolver],l.NgModuleRef]),l["\u0275mpd"](4608,c.NgLocalization,c.NgLocaleLocalization,[l.LOCALE_ID]),l["\u0275mpd"](4608,r.c,r.c,[l.NgZone,l.ApplicationRef]),l["\u0275mpd"](4608,r.Gb,r.Gb,[r.c,l.ComponentFactoryResolver,l.Injector]),l["\u0275mpd"](4608,r.Lb,r.Lb,[r.c,l.ComponentFactoryResolver,l.Injector]),l["\u0275mpd"](4608,D.w,D.w,[]),l["\u0275mpd"](4608,S.i,S.o,[c.DOCUMENT,l.PLATFORM_ID,S.m]),l["\u0275mpd"](4608,S.p,S.p,[S.i,S.n]),l["\u0275mpd"](5120,S.a,(function(n){return[n]}),[S.p]),l["\u0275mpd"](4608,S.l,S.l,[]),l["\u0275mpd"](6144,S.j,null,[S.l]),l["\u0275mpd"](4608,S.h,S.h,[S.j]),l["\u0275mpd"](6144,S.b,null,[S.h]),l["\u0275mpd"](4608,S.f,S.k,[S.b,l.Injector]),l["\u0275mpd"](4608,S.c,S.c,[S.f]),l["\u0275mpd"](5120,l.APP_INITIALIZER,(function(n){return[E.b(n)]}),[P.a]),l["\u0275mpd"](4608,g.h,g.g,[]),l["\u0275mpd"](4608,g.d,g.f,[]),l["\u0275mpd"](4608,g.j,g.e,[]),l["\u0275mpd"](4608,g.c,g.b,[]),l["\u0275mpd"](4608,g.l,g.l,[g.m,g.h,g.d,g.j,g.c,g.n,g.p,g.o,g.a]),l["\u0275mpd"](1073742336,c.CommonModule,c.CommonModule,[]),l["\u0275mpd"](1073742336,r.Cb,r.Cb,[]),l["\u0275mpd"](1073742336,D.v,D.v,[]),l["\u0275mpd"](1073742336,D.j,D.j,[]),l["\u0275mpd"](1073742336,g.i,g.i,[]),l["\u0275mpd"](1073742336,S.e,S.e,[]),l["\u0275mpd"](1073742336,S.d,S.d,[]),l["\u0275mpd"](1073742336,E.a,E.a,[]),l["\u0275mpd"](1073742336,w.a,w.a,[]),l["\u0275mpd"](1073742336,u.p,u.p,[[2,u.u],[2,u.m]]),l["\u0275mpd"](1073742336,i,i,[]),l["\u0275mpd"](256,S.m,"XSRF-TOKEN",[]),l["\u0275mpd"](256,S.n,"X-XSRF-TOKEN",[]),l["\u0275mpd"](256,g.p,void 0,[]),l["\u0275mpd"](256,g.n,void 0,[]),l["\u0275mpd"](256,g.o,void 0,[]),l["\u0275mpd"](256,g.a,void 0,[]),l["\u0275mpd"](1024,u.k,(function(){return[[{path:"",component:C}]]}),[])])}))}}]);