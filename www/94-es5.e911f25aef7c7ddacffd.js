function _defineProperties(n,l){for(var t=0;t<l.length;t++){var e=l[t];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,e.key,e)}}function _createClass(n,l,t){return l&&_defineProperties(n.prototype,l),t&&_defineProperties(n,t),n}function _classCallCheck(n,l){if(!(n instanceof l))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{NrnU:function(n,l,t){"use strict";t.r(l),t.d(l,"NotificationsPageModuleNgFactory",(function(){return S}));var e=t("8Y7J"),i=function n(){_classCallCheck(this,n)},o=t("pMnS"),r=t("MKJQ"),u=t("sZkV"),a=t("iInd"),s=t("SVse"),c=t("M4wD"),b=t("B7gC"),d=t("6LEC"),p=t("2gss"),m=t("TSSN"),f=t("mrSG"),h=t("ZtEv"),g=t("jtHE"),v=function(){function n(l,t,e,i,o,r,u){_classCallCheck(this,n),this.router=l,this.alertController=t,this.translateService=e,this.modalController=i,this.navCtrl=o,this.route=r,this.authenticationService=u,this.showAgeFilter=!1,this.showmenu=!1,this.items=[],this.variables=[],this.userinfo=[],this.viewType="grid",this.tituloxx="",this.efecto=0,this.simenu=!1,this.seguro="",this.msg="",this.searchSubject=new g.a(1),this.apifoto=this.authenticationService.getapifoto()}return _createClass(n,[{key:"showConversationPage",value:function(n){this.router.navigate(["conversation"],{state:{variables:"",user:null,nombre:n.nombre,estado:n.estado,foto:n.foto,userid:n._id,item:n,record:{toUserId:this.userinfo[0]._id,email:this.userinfo[0].email,toUserName:this.userinfo[0].nombre,avatar:this.apifoto+this.userinfo[0].foto},grupal:"no",record2:{toUserId:n._id,email:n.email,toUserName:n.nombre,avatar:this.apifoto+n.foto}}})}},{key:"addRecord",value:function(){return Object(f.a)(this,void 0,void 0,regeneratorRuntime.mark((function n(){var l,t=this;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.alertController.create({header:"Ingrese correo electr\xf3nico con el que se registro el usuario",message:"",inputs:[{name:"nombre",type:"text",placeholder:"Ingrese correo electr\xf3nico"}],buttons:[{text:"Cancelar",cssClass:"secondary",handler:function(n){}},{text:"Aceptar",handler:function(n){n.nombre===t.userinfo[0].email?t.authenticationService.presentAlert("Usuario no valido","Precauci\xf3n",""):""!==n.nombre&&t.authenticationService.getReg(n.nombre+"/emailsolonuevo/"+t.userinfo[0].idempresa._id,"personals",0).then((function(n){var l,e={idsuscriptor:{id:(l=n)[0]._id,nombre:l[0].nombre},nombre:l[0].nombre,idempresa:l[0].idempresa,estado:"Activo",idsuscriptor2:{id:t.userinfo[0]._id,nombre:t.userinfo[0].nombre,email:l[0].email},nota:"",bitacora:{idempresa:t.userinfo[0].idempresa._id,idafiliado:"",email:t.userinfo[0].email,permiso:"Crea",accion:NaN}};e&&t.authenticationService.createReg("",e,"userchats").then((function(n){t.pideregistros()}),(function(n){t.authenticationService.presentAlert(n.error,"Precauci\xf3n","")}))}))}}]});case 2:return l=n.sent,n.next=5,l.present().then((function(){document.querySelector("ion-alert input").focus()}));case 5:case"end":return n.stop()}}),n,this)})))}},{key:"deleteRecord",value:function(n){return Object(f.a)(this,void 0,void 0,regeneratorRuntime.mark((function l(){var t,e=this;return regeneratorRuntime.wrap((function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,this.alertController.create({header:this.seguro,message:"",buttons:[{text:"No",cssClass:"secondary",handler:function(n){}},{text:"Si",handler:function(){e.authenticationService.deleteReg(n._id+"/"+e.userinfo[0].email+"/"+e.userinfo[0].idempresa._id+"/na","userchats").then((function(n){e.pideregistros()}),(function(n){e.authenticationService.presentAlert(n.error,e.msg,"")}))}}]});case 2:return t=l.sent,l.next=5,t.present();case 5:case"end":return l.stop()}}),l,this)})))}},{key:"pideregistros",value:function(){var n=this;this.itemsList=[],this.efecto=0,this.authenticationService.getReg(this.userinfo[0].email+"/mios/"+this.userinfo[0].idempresa._id,"userchats",0).then((function(l){n.efecto=1,n.items=l,n.itemsList=n.items}),(function(l){n.authenticationService.presentAlert(l.error,n.msg,"")}))}},{key:"ngOnInit",value:function(){var n=this;this.userinfo=this.authenticationService.getcopiauser(),this.logo1=this.authenticationService.dalogo1(this.userinfo),this.translateService.get("SEGUROM").subscribe((function(l){n.seguro=l})),this.translateService.get("MSGM").subscribe((function(l){n.msg=l})),this.pideregistros()}}]),n}(),x=e.wb({encapsulation:0,styles:[["[_nghost-%COMP%]{--page-margin:var(--app-narrow-margin)}.notifications-content[_ngcontent-%COMP%]   ion-item-divider[_ngcontent-%COMP%]{--background:var(--ion-color-light);--padding-start:var(--page-margin)}.notifications-content[_ngcontent-%COMP%]   .notification-item[_ngcontent-%COMP%]{--padding-start:0px;--inner-padding-end:0px;padding:var(--page-margin);color:var(--ion-color-medium);box-shadow:inset 0 8px 2px -9px var(--ion-color-darkest)}.notifications-content[_ngcontent-%COMP%]   .notification-item[_ngcontent-%COMP%]   .notification-item-wrapper[_ngcontent-%COMP%]{--ion-grid-column-padding:0px;width:100%;align-items:center}.notifications-content[_ngcontent-%COMP%]   .notification-item[_ngcontent-%COMP%]   .details-wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:space-around;padding-left:var(--page-margin)}.notifications-content[_ngcontent-%COMP%]   .notification-item[_ngcontent-%COMP%]   .details-wrapper[_ngcontent-%COMP%]   .details-name[_ngcontent-%COMP%]{margin-top:0;margin-bottom:5px;font-size:16px;font-weight:400;letter-spacing:.2px;color:var(--ion-color-secondary)}.notifications-content[_ngcontent-%COMP%]   .notification-item[_ngcontent-%COMP%]   .details-wrapper[_ngcontent-%COMP%]   .details-description[_ngcontent-%COMP%]{font-size:12px;margin:0}.notifications-content[_ngcontent-%COMP%]   .notification-item[_ngcontent-%COMP%]   .date-wrapper[_ngcontent-%COMP%]{align-self:flex-start}.notifications-content[_ngcontent-%COMP%]   .notification-item[_ngcontent-%COMP%]   .date-wrapper[_ngcontent-%COMP%]   .notification-date[_ngcontent-%COMP%]{margin:0;font-size:12px;text-align:end}"],["app-image-shell.notification-image[_ngcontent-%COMP%]{--image-shell-border-radius:50%}"]],data:{}});function y(n){return e.ac(0,[(n()(),e.yb(0,0,null,null,22,"ion-item",[["class","notification-item"],["lines","none"]],null,[[null,"click"]],(function(n,l,t){var i=!0,o=n.component;return"click"===l&&(i=!1!==e.Nb(n,2).onClick()&&i),"click"===l&&(i=!1!==e.Nb(n,3).onClick(t)&&i),"click"===l&&(i=!1!==o.showConversationPage(n.context.$implicit.idsuscriptor.id)&&i),i}),r.Pb,r.A)),e.xb(1,49152,null,0,u.I,[e.h,e.l,e.z],{lines:[0,"lines"]},null),e.xb(2,16384,null,0,a.n,[a.m,a.a,[8,null],e.E,e.l],null,null),e.xb(3,737280,null,0,u.Nb,[s.j,u.Hb,e.l,a.m,[2,a.n]],null,null),(n()(),e.yb(4,0,null,0,18,"ion-row",[["class","notification-item-wrapper"]],null,null,null,r.ac,r.Q)),e.xb(5,49152,null,0,u.hb,[e.h,e.l,e.z],null,null),(n()(),e.yb(6,0,null,0,6,"ion-col",[["size","2"]],null,null,null,r.xb,r.n)),e.xb(7,49152,null,0,u.u,[e.h,e.l,e.z],{size:[0,"size"]},null),(n()(),e.yb(8,0,null,0,4,"app-aspect-ratio",[],[[4,"padding",null]],null,null,c.b,c.a)),e.xb(9,49152,null,0,b.a,[],{ratio:[0,"ratio"]},null),e.Qb(10,{w:0,h:1}),(n()(),e.yb(11,0,null,0,1,"app-image-shell",[["class","notification-image"]],[[2,"img-loaded",null],[4,"backgroundImage",null],[1,"display",0]],null,null,d.b,d.a)),e.xb(12,49152,null,0,p.a,[e.B],{src:[0,"src"],alt:[1,"alt"]},null),(n()(),e.yb(13,0,null,0,5,"ion-col",[["class","details-wrapper"]],null,null,null,r.xb,r.n)),e.xb(14,49152,null,0,u.u,[e.h,e.l,e.z],null,null),(n()(),e.yb(15,0,null,0,1,"h2",[["class","details-name"]],null,null,null,null,null)),(n()(),e.Xb(16,null,["",""])),(n()(),e.yb(17,0,null,0,1,"p",[["class","details-description"]],null,null,null,null,null)),(n()(),e.Xb(18,null,["",""])),(n()(),e.yb(19,0,null,0,3,"ion-col",[["class","date-wrapper"],["size","2"]],null,null,null,r.xb,r.n)),e.xb(20,49152,null,0,u.u,[e.h,e.l,e.z],{size:[0,"size"]},null),(n()(),e.yb(21,0,null,0,1,"h3",[["class","notification-date"]],null,null,null,null,null)),(n()(),e.Xb(22,null,["",""]))],(function(n,l){var t=l.component;n(l,1,0,"none"),n(l,3,0),n(l,7,0,"2");var e=n(l,10,0,1,1);n(l,9,0,e),n(l,12,0,t.apifoto+l.context.$implicit.idsuscriptor.id.foto,"user image"),n(l,20,0,"2")}),(function(n,l){n(l,8,0,e.Nb(l,9).ratioPadding),n(l,11,0,e.Nb(l,12).imageLoaded,e.Nb(l,12).backgroundImage,e.Nb(l,12).display),n(l,16,0,l.context.$implicit.idsuscriptor.id.nombre),n(l,18,0,l.context.$implicit.idsuscriptor.id.email),n(l,22,0,l.context.$implicit.idsuscriptor.id.role)}))}function C(n){return e.ac(0,[(n()(),e.yb(0,0,null,null,9,null,null,null,null,null,null,null)),(n()(),e.yb(1,0,null,null,8,"ion-item-group",[],null,null,null,r.Lb,r.C)),e.xb(2,49152,null,0,u.K,[e.h,e.l,e.z],null,null),(n()(),e.yb(3,0,null,0,4,"ion-item-divider",[["sticky",""]],null,null,null,r.Kb,r.B)),e.xb(4,49152,null,0,u.J,[e.h,e.l,e.z],{sticky:[0,"sticky"]},null),(n()(),e.yb(5,0,null,0,2,"ion-label",[],null,null,null,r.Qb,r.G)),e.xb(6,49152,null,0,u.O,[e.h,e.l,e.z],null,null),(n()(),e.Xb(-1,0,["Usuarios Registrados"])),(n()(),e.hb(16777216,null,0,1,null,y)),e.xb(9,278528,null,0,s.l,[e.P,e.M,e.s],{ngForOf:[0,"ngForOf"]},null)],(function(n,l){var t=l.component;n(l,4,0,""),n(l,9,0,t.itemsList)}),null)}function L(n){return e.ac(0,[e.Tb(671088640,1,{infiniteScroll:0}),(n()(),e.yb(1,0,null,null,23,"ion-header",[],null,null,null,r.Eb,r.u)),e.xb(2,49152,null,0,u.C,[e.h,e.l,e.z],null,null),(n()(),e.yb(3,0,null,0,21,"ion-toolbar",[["color","primary"]],null,null,null,r.sc,r.ib)),e.xb(4,49152,null,0,u.Ab,[e.h,e.l,e.z],{color:[0,"color"]},null),(n()(),e.yb(5,0,null,0,3,"ion-buttons",[["slot","start"]],null,null,null,r.pb,r.f)),e.xb(6,49152,null,0,u.m,[e.h,e.l,e.z],null,null),(n()(),e.yb(7,0,null,0,1,"ion-menu-button",[],null,null,null,r.Tb,r.K)),e.xb(8,49152,null,0,u.S,[e.h,e.l,e.z],null,null),(n()(),e.yb(9,0,null,0,2,"ion-title",[],null,null,null,r.qc,r.gb)),e.xb(10,49152,null,0,u.yb,[e.h,e.l,e.z],null,null),(n()(),e.Xb(-1,0,[" Notificaciones "])),(n()(),e.yb(12,0,null,0,12,"ion-buttons",[["slot","end"]],null,null,null,r.pb,r.f)),e.xb(13,49152,null,0,u.m,[e.h,e.l,e.z],null,null),(n()(),e.yb(14,0,null,0,4,"ion-button",[],[[8,"title",0]],[[null,"click"]],(function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.addRecord()&&e),e}),r.ob,r.e)),e.xb(15,49152,null,0,u.l,[e.h,e.l,e.z],null,null),e.Pb(131072,m.k,[m.l,e.h]),(n()(),e.yb(17,0,null,0,1,"ion-icon",[["name","add"],["slot","icon-only"]],null,null,null,r.Fb,r.v)),e.xb(18,49152,null,0,u.D,[e.h,e.l,e.z],{name:[0,"name"]},null),(n()(),e.yb(19,0,null,0,4,"ion-button",[],[[8,"title",0]],[[null,"click"]],(function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.pideregistros()&&e),e}),r.ob,r.e)),e.xb(20,49152,null,0,u.l,[e.h,e.l,e.z],null,null),e.Pb(131072,m.k,[m.l,e.h]),(n()(),e.yb(22,0,null,0,1,"ion-icon",[["name","refresh-circle-outline"],["slot","icon-only"]],null,null,null,r.Fb,r.v)),e.xb(23,49152,null,0,u.D,[e.h,e.l,e.z],{name:[0,"name"]},null),(n()(),e.yb(24,0,null,0,0,"img",[["alt","logo"],["height","33"],["id","header_logo"]],[[8,"src",4]],null,null,null,null)),(n()(),e.yb(25,0,null,null,3,"ion-content",[["class","notifications-content"]],null,null,null,r.yb,r.o)),e.xb(26,49152,null,0,u.v,[e.h,e.l,e.z],null,null),(n()(),e.hb(16777216,null,0,1,null,C)),e.xb(28,16384,null,0,s.m,[e.P,e.M],{ngIf:[0,"ngIf"]},null)],(function(n,l){var t=l.component;n(l,4,0,"primary"),n(l,18,0,"add"),n(l,23,0,"refresh-circle-outline"),n(l,28,0,(null==t.itemsList?null:t.itemsList.length)>0)}),(function(n,l){var t=l.component;n(l,14,0,e.Fb(1," ",e.Yb(l,14,0,e.Nb(l,16).transform("AGREGARM")),"")),n(l,19,0,e.Fb(1," ",e.Yb(l,19,0,e.Nb(l,21).transform("REFRESCARM")),"")),n(l,24,0,t.apifoto+t.logo1)}))}var _=e.ub("app-notifications",v,(function(n){return e.ac(0,[(n()(),e.yb(0,0,null,null,1,"app-notifications",[],null,null,null,L,x)),e.xb(1,114688,null,0,v,[a.m,u.b,m.l,u.Gb,u.Hb,a.a,h.a],null,null)],(function(n,l){n(l,1,0)}),null)}),{},{},[]),P=t("s7LF"),w=t("IheW"),M=t("ZpN7"),O=t("Kt/9"),k=t("j1ZV"),S=e.vb(i,[],(function(n){return e.Kb([e.Lb(512,e.j,e.Z,[[8,[o.a,_]],[3,e.j],e.x]),e.Lb(4608,s.o,s.n,[e.u]),e.Lb(4608,u.c,u.c,[e.z,e.g]),e.Lb(4608,u.Gb,u.Gb,[u.c,e.j,e.r]),e.Lb(4608,u.Lb,u.Lb,[u.c,e.j,e.r]),e.Lb(4608,P.w,P.w,[]),e.Lb(4608,w.i,w.o,[s.e,e.B,w.m]),e.Lb(4608,w.p,w.p,[w.i,w.n]),e.Lb(5120,w.a,(function(n){return[n]}),[w.p]),e.Lb(4608,w.l,w.l,[]),e.Lb(6144,w.j,null,[w.l]),e.Lb(4608,w.h,w.h,[w.j]),e.Lb(6144,w.b,null,[w.h]),e.Lb(4608,w.f,w.k,[w.b,e.r]),e.Lb(4608,w.c,w.c,[w.f]),e.Lb(5120,e.d,(function(n){return[M.b(n)]}),[O.a]),e.Lb(4608,m.h,m.g,[]),e.Lb(4608,m.d,m.f,[]),e.Lb(4608,m.j,m.e,[]),e.Lb(4608,m.c,m.b,[]),e.Lb(4608,m.l,m.l,[m.m,m.h,m.d,m.j,m.c,m.n,m.p,m.o,m.a]),e.Lb(1073742336,s.c,s.c,[]),e.Lb(1073742336,u.Cb,u.Cb,[]),e.Lb(1073742336,P.v,P.v,[]),e.Lb(1073742336,P.j,P.j,[]),e.Lb(1073742336,m.i,m.i,[]),e.Lb(1073742336,w.e,w.e,[]),e.Lb(1073742336,w.d,w.d,[]),e.Lb(1073742336,M.a,M.a,[]),e.Lb(1073742336,k.a,k.a,[]),e.Lb(1073742336,a.p,a.p,[[2,a.u],[2,a.m]]),e.Lb(1073742336,i,i,[]),e.Lb(256,w.m,"XSRF-TOKEN",[]),e.Lb(256,w.n,"X-XSRF-TOKEN",[]),e.Lb(256,m.p,void 0,[]),e.Lb(256,m.n,void 0,[]),e.Lb(256,m.o,void 0,[]),e.Lb(256,m.a,void 0,[]),e.Lb(1024,a.k,(function(){return[[{path:"",component:v}]]}),[])])}))}}]);