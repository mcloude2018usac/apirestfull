function _classCallCheck(l,n){if(!(l instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(l,n){for(var u=0;u<n.length;u++){var e=n[u];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(l,e.key,e)}}function _createClass(l,n,u){return n&&_defineProperties(l.prototype,n),u&&_defineProperties(l,u),l}(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{Rg8G:function(l,n,u){"use strict";u.d(n,"a",(function(){return e}));var e=function(){function l(){_classCallCheck(this,l),this.width="100%",this.height="16px",this.borderRadius="0",this.rounded=!1,this.noAnimated=!1,this.inline=!1,this.styles={}}return _createClass(l,[{key:"ngOnInit",value:function(){this.styles={width:this.width,height:this.height,borderRadius:this.borderRadius},this.rounded&&(this.styles.borderRadius="999em")}}]),l}()},YKFW:function(l,n,u){"use strict";u.r(n),u.d(n,"categoriaformularioListPageModuleNgFactory",(function(){return j}));var e=u("8Y7J"),t=function l(){_classCallCheck(this,l)},i=u("Xh6l"),o=u("pMnS"),r=u("MKJQ"),a=u("sZkV"),s=u("TSSN"),c=u("hQ+M"),b=u("Rg8G"),h=u("SVse"),m=u("iInd"),g=u("s7LF"),d=u("mrSG"),f=u("ZtEv"),p=u("jtHE"),y=function(){function l(n,u,e,t,i,o){_classCallCheck(this,l),this.routerOutlet=n,this.router=u,this.authenticationService=e,this.alertController=t,this.translateService=i,this.modalController=o,this.showAgeFilter=!1,this.showmenu=!1,this.items=[],this.variables=[],this.userinfo=[],this.colort=["primary","secondary","tertiary","success","warning","danger","lightest","light","medium","dark","primary"],this.currentSegment2="formulario",this.viewType="grid",this.tituloxx="",this.efecto=0,this.seguro="",this.msg="",this.currentSegment="Todos",this.searchSubject=new p.a(1),this.apifoto=this.authenticationService.getapifoto()}return _createClass(l,[{key:"changeToList",value:function(){this.viewType="list"}},{key:"changeToGrid",value:function(){this.viewType="grid"}},{key:"filterContacts2",value:function(l){this.currentSegment2=l.detail.value,this.pideregistros(this.currentSegment,this.currentSegment2)}},{key:"ngOnInit",value:function(){var l=this;this.router.getCurrentNavigation().extras.state?(this.variables=this.router.getCurrentNavigation().extras.state.variables,this.idllave=this.router.getCurrentNavigation().extras.state.idllave,this.currentSegment2="formulario",this.tituloxx=this.variables?this.variables.nombre:"Mis procesos y formularios"):(this.variables={idrol:"5f503beeeda4710798a79b8a",nivel:".",nombre:"Mis procesos y formularios",pactualizacion:!0,pconsulta:!0,pcreacion:!0,peliminacion:!0,pfiltro:!0,pingreso:!0,potros1:"",preporte:!0},this.idllave="",this.tituloxx=this.variables.nombre),this.userinfo=this.authenticationService.getcopiauser(),this.searchQuery="",this.translateService.get("SEGUROM").subscribe((function(n){l.seguro=n})),this.translateService.get("MSGM").subscribe((function(n){l.msg=n})),this.rangeForm=new g.g({dual:new g.e({lower:1,upper:100})}),this.currentSegment="todos",this.pideregistros(this.currentSegment,this.currentSegment2)}},{key:"filterContacts",value:function(l){this.currentSegment=l.detail.value,this.pideregistros(this.currentSegment,this.currentSegment2)}},{key:"pideregistros0",value:function(){this.pideregistros(this.currentSegment,this.currentSegment2)}},{key:"pideregistros",value:function(l,n){var u=this;this.itemsList=[],this.efecto=0;var e;e="Administrador"===this.userinfo[0].role||"admin"===this.userinfo[0].role.substring(0,5)?this.userinfo[0].idempresa._id+"/categoriausrmoviladmin/"+this.userinfo[0]._id+"/"+n:this.userinfo[0].idempresa._id+"/categoriausrmovil/"+this.userinfo[0]._id+"/"+n,this.authenticationService.getReg(e,"catusuarios",0).then((function(l){u.efecto=1,u.items=l,u.itemsList=u.items}),(function(l){u.authenticationService.presentAlert(l.error,u.msg,"")}))}},{key:"searchList",value:function(){this.searchSubject.next({lower:this.rangeForm.controls.dual.value.lower,upper:this.rangeForm.controls.dual.value.upper,query:this.searchQuery}),this.itemsList=this.filterList(this.items,this.searchQuery&&null!==this.searchQuery?this.searchQuery:"")}},{key:"filterList",value:function(l,n){return l.filter((function(l){return l.nombre.toLowerCase().includes(n.toLowerCase())}))}},{key:"otrasop",value:function(l){return Object(d.a)(this,void 0,void 0,regeneratorRuntime.mark((function n(){var u,e=this;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.alertController.create({cssClass:"my-custom-class",header:"Seleccione Opci\xf3n",inputs:[{name:"Productos",type:"radio",label:"Productos",checked:!0,value:"/ProductoListPage\xb0Productos ->"+l.nombre}],buttons:[{text:"Cancel",role:"cancel",cssClass:"secondary",handler:function(l){}},{text:"Ok",handler:function(n){var u=n.split("\xb0");e.router.navigate([u[0]],{state:{variables:e.variables,user:null,idllave:l._id,title:u[1]}})}}]});case 2:return u=n.sent,n.next=5,u.present();case 5:case"end":return n.stop()}}),n,this)})))}},{key:"dacolor",value:function(l){return this.colort[l]}},{key:"updateRecord",value:function(l){return Object(d.a)(this,void 0,void 0,regeneratorRuntime.mark((function n(){var u;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:"",u="proceso"===this.currentSegment2?"Mis procesos":"Mis Formularios",this.router.navigate(["formulariomovilsListPage"],{state:{variables:this.variables,user:null,idllave:l._id,tipo:this.currentSegment2,idcategoria:l.nombre,title:u}});case 2:case"end":return n.stop()}}),n,this)})))}},{key:"loadData",value:function(l){var n=this;setTimeout((function(){l.target.complete(),1e3===n.items.length&&(l.target.disabled=!0)}),500)}}]),l}(),v=e.wb({encapsulation:0,styles:[["[_nghost-%COMP%]{--page-margin:var(--app-narrow-margin);--page-border-radius:var(--app-fair-radius);--page-segment-background:var(--app-background);--page-segment-indicator-height:2px}ion-item-divider[_ngcontent-%COMP%]{--background:var(--ion-color-light);--padding-start:var(--page-margin)}[_nghost-%COMP%]{--page-margin:var(--app-fair-margin);--page-background:var(--app-background);--page-background-shade:var(--app-background-shade);--page-tags-gutter:5px}"]],data:{}});function x(l){return e.ac(0,[(l()(),e.yb(0,0,null,null,3,"ion-button",[],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.changeToList()&&e),e}),r.ob,r.e)),e.xb(1,49152,null,0,a.l,[e.h,e.l,e.z],null,null),(l()(),e.yb(2,0,null,0,1,"ion-icon",[["name","grid"],["slot","icon-only"]],null,null,null,r.Fb,r.v)),e.xb(3,49152,null,0,a.D,[e.h,e.l,e.z],{name:[0,"name"]},null)],(function(l,n){l(n,3,0,"grid")}),null)}function k(l){return e.ac(0,[(l()(),e.yb(0,0,null,null,3,"ion-button",[],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.changeToGrid()&&e),e}),r.ob,r.e)),e.xb(1,49152,null,0,a.l,[e.h,e.l,e.z],null,null),(l()(),e.yb(2,0,null,0,1,"ion-icon",[["name","list"],["slot","icon-only"]],null,null,null,r.Fb,r.v)),e.xb(3,49152,null,0,a.D,[e.h,e.l,e.z],{name:[0,"name"]},null)],(function(l,n){l(n,3,0,"list")}),null)}function L(l){return e.ac(0,[(l()(),e.yb(0,0,null,null,3,"ion-label",[],null,null,null,r.Qb,r.G)),e.xb(1,49152,null,0,a.O,[e.h,e.l,e.z],null,null),(l()(),e.Xb(2,0,["",": ",""])),e.Pb(131072,s.k,[s.l,e.h])],null,(function(l,n){var u=n.component;l(n,2,0,e.Yb(n,2,0,e.Nb(n,3).transform("NOREGISTROSM")),u.itemsList.length)}))}function z(l){return e.ac(0,[(l()(),e.yb(0,0,null,null,9,"ion-item",[["lines","none"]],null,null,null,r.Pb,r.A)),e.xb(1,49152,null,0,a.I,[e.h,e.l,e.z],{lines:[0,"lines"]},null),(l()(),e.yb(2,0,null,0,7,"ion-label",[],null,null,null,r.Qb,r.G)),e.xb(3,49152,null,0,a.O,[e.h,e.l,e.z],null,null),(l()(),e.yb(4,0,null,0,1,"skeleton-element",[],null,null,null,c.b,c.a)),e.xb(5,114688,null,0,b.a,[],null,null),(l()(),e.yb(6,0,null,0,1,"skeleton-element",[],null,null,null,c.b,c.a)),e.xb(7,114688,null,0,b.a,[],null,null),(l()(),e.yb(8,0,null,0,1,"skeleton-element",[["width","67%"]],null,null,null,c.b,c.a)),e.xb(9,114688,null,0,b.a,[],{width:[0,"width"]},null)],(function(l,n){l(n,1,0,"none"),l(n,5,0),l(n,7,0),l(n,9,0,"67%")}),null)}function C(l){return e.ac(0,[(l()(),e.yb(0,0,null,null,4,"ion-list",[],null,null,null,r.Sb,r.H)),e.xb(1,49152,null,0,a.P,[e.h,e.l,e.z],null,null),(l()(),e.hb(16777216,null,0,2,null,z)),e.xb(3,278528,null,0,h.l,[e.P,e.M,e.s],{ngForOf:[0,"ngForOf"]},null),e.Ob(4,7)],(function(l,n){var u=l(n,4,0,0,1,2,3,4,5,6);l(n,3,0,u)}),null)}function w(l){return e.ac(0,[(l()(),e.yb(0,0,null,null,27,"ion-item",[],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==e.Nb(l,2).onClick()&&t),"click"===n&&(t=!1!==e.Nb(l,3).onClick(u)&&t),t}),r.Pb,r.A)),e.xb(1,49152,null,0,a.I,[e.h,e.l,e.z],null,null),e.xb(2,16384,null,0,m.n,[m.m,m.a,[8,null],e.E,e.l],null,null),e.xb(3,737280,null,0,a.Nb,[h.j,a.Hb,e.l,m.m,[2,m.n]],null,null),(l()(),e.yb(4,0,null,0,23,"ion-grid",[],null,null,null,r.Db,r.t)),e.xb(5,49152,null,0,a.B,[e.h,e.l,e.z],null,null),(l()(),e.yb(6,0,null,0,19,"ion-row",[],null,null,null,r.ac,r.Q)),e.xb(7,49152,null,0,a.hb,[e.h,e.l,e.z],null,null),(l()(),e.yb(8,0,null,0,17,"ion-col",[["size","12"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.updateRecord(l.context.$implicit)&&e),e}),r.xb,r.n)),e.xb(9,49152,null,0,a.u,[e.h,e.l,e.z],{size:[0,"size"]},null),(l()(),e.yb(10,0,null,0,1,"ion-icon",[["name","server-outline"],["slot","start"]],null,null,null,r.Fb,r.v)),e.xb(11,49152,null,0,a.D,[e.h,e.l,e.z],{name:[0,"name"]},null),(l()(),e.yb(12,0,null,0,13,"ion-label",[["class","ion-text-wrap"]],null,null,null,r.Qb,r.G)),e.xb(13,49152,null,0,a.O,[e.h,e.l,e.z],null,null),(l()(),e.yb(14,0,null,0,2,"ion-note",[["slot","end"]],null,null,null,r.Wb,r.M)),e.xb(15,49152,null,0,a.W,[e.h,e.l,e.z],null,null),(l()(),e.Xb(16,0,["No. ",""])),(l()(),e.yb(17,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),e.yb(18,0,null,0,4,"p",[],null,null,null,null,null)),(l()(),e.yb(19,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),e.Xb(-1,null,["Categoria:"])),(l()(),e.Xb(21,null,[" "," "])),(l()(),e.yb(22,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.yb(23,0,null,0,2,"ion-badge",[["color","medium"]],null,null,null,r.nb,r.d)),e.xb(24,49152,null,0,a.k,[e.h,e.l,e.z],{color:[0,"color"]},null),(l()(),e.Xb(25,0,["",""])),(l()(),e.yb(26,0,null,0,1,"ion-row",[],null,null,null,r.ac,r.Q)),e.xb(27,49152,null,0,a.hb,[e.h,e.l,e.z],null,null)],(function(l,n){l(n,3,0),l(n,9,0,"12"),l(n,11,0,"server-outline"),l(n,24,0,"medium")}),(function(l,n){l(n,16,0,n.context.index+1),l(n,21,0,n.context.$implicit.nombre),l(n,25,0,n.context.$implicit.estado)}))}function S(l){return e.ac(0,[(l()(),e.yb(0,0,null,null,3,"ion-list",[],null,null,null,r.Sb,r.H)),e.xb(1,49152,null,0,a.P,[e.h,e.l,e.z],null,null),(l()(),e.hb(16777216,null,0,1,null,w)),e.xb(3,278528,null,0,h.l,[e.P,e.M,e.s],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){l(n,3,0,n.component.itemsList)}),null)}function P(l){return e.ac(0,[(l()(),e.yb(0,0,null,null,32,"ion-col",[["size","12"],["size-lg","6"],["size-sm","6"]],null,null,null,r.xb,r.n)),e.xb(1,49152,null,0,a.u,[e.h,e.l,e.z],{size:[0,"size"]},null),(l()(),e.yb(2,0,null,0,30,"ion-card",[],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.updateRecord(l.context.$implicit)&&e),e}),r.ub,r.g)),e.xb(3,49152,null,0,a.n,[e.h,e.l,e.z],null,null),(l()(),e.yb(4,0,null,0,11,"ion-row",[["class","user-stats-wrapper user-details-wrapper"]],null,null,null,r.ac,r.Q)),e.xb(5,49152,null,0,a.hb,[e.h,e.l,e.z],null,null),(l()(),e.yb(6,0,null,0,5,"ion-col",[],null,null,null,r.xb,r.n)),e.xb(7,49152,null,0,a.u,[e.h,e.l,e.z],null,null),(l()(),e.yb(8,0,null,0,1,"span",[["class","user-stat-value"]],null,null,null,null,null)),(l()(),e.Xb(-1,null,["No."])),(l()(),e.yb(10,0,null,0,1,"span",[["class","user-stat-name"]],null,null,null,null,null)),(l()(),e.Xb(11,null,[""," "])),(l()(),e.yb(12,0,null,0,3,"ion-col",[],null,null,null,r.xb,r.n)),e.xb(13,49152,null,0,a.u,[e.h,e.l,e.z],null,null),(l()(),e.yb(14,0,null,0,1,"span",[["class","user-stat-value"]],null,null,null,null,null)),(l()(),e.Xb(15,null,[""," "])),(l()(),e.yb(16,0,null,0,12,"ion-item",[],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==e.Nb(l,18).onClick()&&t),"click"===n&&(t=!1!==e.Nb(l,19).onClick(u)&&t),t}),r.Pb,r.A)),e.xb(17,49152,null,0,a.I,[e.h,e.l,e.z],null,null),e.xb(18,16384,null,0,m.n,[m.m,m.a,[8,null],e.E,e.l],null,null),e.xb(19,737280,null,0,a.Nb,[h.j,a.Hb,e.l,m.m,[2,m.n]],null,null),(l()(),e.yb(20,0,null,0,1,"ion-icon",[["name","server-outline"],["slot","start"]],null,null,null,r.Fb,r.v)),e.xb(21,49152,null,0,a.D,[e.h,e.l,e.z],{name:[0,"name"]},null),(l()(),e.yb(22,0,null,0,6,"ion-label",[["class","ion-text-wrap"]],null,null,null,r.Qb,r.G)),e.xb(23,49152,null,0,a.O,[e.h,e.l,e.z],null,null),(l()(),e.yb(24,0,null,0,4,"p",[],null,null,null,null,null)),(l()(),e.yb(25,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),e.Xb(-1,null,["Categoria:"])),(l()(),e.Xb(27,null,[" "," "])),(l()(),e.yb(28,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.yb(29,0,null,0,1,"ion-card-content",[],null,null,null,r.qb,r.h)),e.xb(30,49152,null,0,a.o,[e.h,e.l,e.z],null,null),(l()(),e.yb(31,0,null,0,1,"ion-row",[["no-padding",""]],null,null,null,r.ac,r.Q)),e.xb(32,49152,null,0,a.hb,[e.h,e.l,e.z],null,null)],(function(l,n){l(n,1,0,"12"),l(n,19,0),l(n,21,0,"server-outline")}),(function(l,n){l(n,11,0,n.context.index+1),l(n,15,0,n.context.$implicit.estado),l(n,27,0,n.context.$implicit.nombre)}))}function M(l){return e.ac(0,[(l()(),e.yb(0,0,null,null,5,"ion-grid",[],null,null,null,r.Db,r.t)),e.xb(1,49152,null,0,a.B,[e.h,e.l,e.z],null,null),(l()(),e.yb(2,0,null,0,3,"ion-row",[],null,null,null,r.ac,r.Q)),e.xb(3,49152,null,0,a.hb,[e.h,e.l,e.z],null,null),(l()(),e.hb(16777216,null,0,1,null,P)),e.xb(5,278528,null,0,h.l,[e.P,e.M,e.s],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){l(n,5,0,n.component.itemsList)}),null)}function O(l){return e.ac(0,[(l()(),e.yb(0,0,null,null,2,"h3",[["class","empty-list-message"]],null,null,null,null,null)),(l()(),e.Xb(1,null,[" "," "])),e.Pb(131072,s.k,[s.l,e.h])],null,(function(l,n){l(n,1,0,e.Yb(n,1,0,e.Nb(n,2).transform("NODATOS")))}))}function F(l){return e.ac(0,[e.Tb(671088640,1,{infiniteScroll:0}),(l()(),e.yb(1,0,null,null,42,"ion-header",[],null,null,null,r.Eb,r.u)),e.xb(2,49152,null,0,a.C,[e.h,e.l,e.z],null,null),(l()(),e.yb(3,0,null,0,19,"ion-toolbar",[["color","primary"]],null,null,null,r.sc,r.ib)),e.xb(4,49152,null,0,a.Ab,[e.h,e.l,e.z],{color:[0,"color"]},null),(l()(),e.yb(5,0,null,0,3,"ion-buttons",[["slot","start"]],null,null,null,r.pb,r.f)),e.xb(6,49152,null,0,a.m,[e.h,e.l,e.z],null,null),(l()(),e.yb(7,0,null,0,1,"ion-menu-button",[],null,null,null,r.Tb,r.K)),e.xb(8,49152,null,0,a.S,[e.h,e.l,e.z],null,null),(l()(),e.yb(9,0,null,0,2,"ion-title",[],null,null,null,r.qc,r.gb)),e.xb(10,49152,null,0,a.yb,[e.h,e.l,e.z],null,null),(l()(),e.Xb(11,0,[" "," "])),(l()(),e.yb(12,0,null,0,10,"ion-buttons",[["slot","end"]],null,null,null,r.pb,r.f)),e.xb(13,49152,null,0,a.m,[e.h,e.l,e.z],null,null),(l()(),e.yb(14,0,null,0,4,"ion-button",[],[[8,"title",0]],[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.pideregistros0()&&e),e}),r.ob,r.e)),e.xb(15,49152,null,0,a.l,[e.h,e.l,e.z],null,null),e.Pb(131072,s.k,[s.l,e.h]),(l()(),e.yb(17,0,null,0,1,"ion-icon",[["name","refresh-circle-outline"],["slot","icon-only"]],null,null,null,r.Fb,r.v)),e.xb(18,49152,null,0,a.D,[e.h,e.l,e.z],{name:[0,"name"]},null),(l()(),e.hb(16777216,null,0,1,null,x)),e.xb(20,16384,null,0,h.m,[e.P,e.M],{ngIf:[0,"ngIf"]},null),(l()(),e.hb(16777216,null,0,1,null,k)),e.xb(22,16384,null,0,h.m,[e.P,e.M],{ngIf:[0,"ngIf"]},null),(l()(),e.yb(23,0,null,0,20,"ion-toolbar",[["class","filters-toolbar"]],null,null,null,r.sc,r.ib)),e.xb(24,49152,null,0,a.Ab,[e.h,e.l,e.z],null,null),(l()(),e.yb(25,0,null,0,18,"ion-row",[["align-items-center",""],["class","searchbar-row"]],null,null,null,r.ac,r.Q)),e.xb(26,49152,null,0,a.hb,[e.h,e.l,e.z],null,null),(l()(),e.yb(27,0,null,0,9,"ion-col",[],null,null,null,r.xb,r.n)),e.xb(28,49152,null,0,a.u,[e.h,e.l,e.z],null,null),(l()(),e.yb(29,0,null,0,7,"ion-searchbar",[["animated",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionChange"],[null,"ionBlur"]],(function(l,n,u){var t=!0,i=l.component;return"ionBlur"===n&&(t=!1!==e.Nb(l,32)._handleBlurEvent(u.target)&&t),"ionChange"===n&&(t=!1!==e.Nb(l,32)._handleInputEvent(u.target)&&t),"ngModelChange"===n&&(t=!1!==(i.searchQuery=u)&&t),"ionChange"===n&&(t=!1!==i.searchList()&&t),t}),r.bc,r.R)),e.xb(30,49152,null,0,a.ib,[e.h,e.l,e.z],{animated:[0,"animated"],placeholder:[1,"placeholder"]},null),e.Pb(131072,s.k,[s.l,e.h]),e.xb(32,16384,null,0,a.Pb,[e.l],null,null),e.Sb(1024,null,g.m,(function(l){return[l]}),[a.Pb]),e.xb(34,671744,null,0,g.q,[[8,null],[8,null],[8,null],[6,g.m]],{model:[0,"model"]},{update:"ngModelChange"}),e.Sb(2048,null,g.n,null,[g.q]),e.xb(36,16384,null,0,g.o,[[4,g.n]],null,null),(l()(),e.yb(37,0,null,0,6,"ion-col",[["class","call-to-action-col"]],[[8,"hidden",0]],null,null,r.xb,r.n)),e.xb(38,49152,null,0,a.u,[e.h,e.l,e.z],null,null),(l()(),e.yb(39,0,null,0,4,"ion-button",[["class","filters-btn"],["color","secondary"],["fill","clear"]],[[8,"title",0]],[[null,"click"]],(function(l,n,u){var e=!0,t=l.component;return"click"===n&&(e=0!=(t.showAgeFilter=!t.showAgeFilter)&&e),e}),r.ob,r.e)),e.xb(40,49152,null,0,a.l,[e.h,e.l,e.z],{color:[0,"color"],fill:[1,"fill"]},null),e.Pb(131072,s.k,[s.l,e.h]),(l()(),e.yb(42,0,null,0,1,"ion-icon",[["name","options"],["slot","icon-only"]],null,null,null,r.Fb,r.v)),e.xb(43,49152,null,0,a.D,[e.h,e.l,e.z],{name:[0,"name"]},null),(l()(),e.yb(44,0,null,null,37,"ion-content",[["class","user-friends-content"]],null,null,null,r.yb,r.o)),e.xb(45,49152,null,0,a.v,[e.h,e.l,e.z],null,null),(l()(),e.yb(46,0,null,0,3,"ion-item-divider",[["sticky",""]],null,null,null,r.Kb,r.B)),e.xb(47,49152,null,0,a.J,[e.h,e.l,e.z],{sticky:[0,"sticky"]},null),(l()(),e.hb(16777216,null,0,1,null,L)),e.xb(49,16384,null,0,h.m,[e.P,e.M],{ngIf:[0,"ngIf"]},null),(l()(),e.yb(50,0,null,0,19,"ion-item-divider",[["sticky",""]],null,null,null,r.Kb,r.B)),e.xb(51,49152,null,0,a.J,[e.h,e.l,e.z],{sticky:[0,"sticky"]},null),(l()(),e.yb(52,0,null,0,17,"ion-segment",[["color","tertiary"],["value","formulario"]],null,[[null,"ionChange"],[null,"ionBlur"]],(function(l,n,u){var t=!0,i=l.component;return"ionBlur"===n&&(t=!1!==e.Nb(l,55)._handleBlurEvent(u.target)&&t),"ionChange"===n&&(t=!1!==e.Nb(l,55)._handleChangeEvent(u.target)&&t),"ionChange"===n&&(t=!1!==i.filterContacts2(u)&&t),t}),r.dc,r.S)),e.Sb(5120,null,g.m,(function(l){return[l]}),[a.Ob]),e.xb(54,49152,null,0,a.jb,[e.h,e.l,e.z],{color:[0,"color"],value:[1,"value"]},null),e.xb(55,16384,null,0,a.Ob,[e.l],null,null),(l()(),e.yb(56,0,null,0,6,"ion-segment-button",[["checked",""],["layout","icon-bottom"],["value","formulario"]],null,null,null,r.cc,r.T)),e.xb(57,49152,null,0,a.kb,[e.h,e.l,e.z],{layout:[0,"layout"],value:[1,"value"]},null),(l()(),e.yb(58,0,null,0,2,"ion-label",[],null,null,null,r.Qb,r.G)),e.xb(59,49152,null,0,a.O,[e.h,e.l,e.z],null,null),(l()(),e.Xb(-1,0,["Formulario"])),(l()(),e.yb(61,0,null,0,1,"ion-icon",[["name","reader-outline"]],null,null,null,r.Fb,r.v)),e.xb(62,49152,null,0,a.D,[e.h,e.l,e.z],{name:[0,"name"]},null),(l()(),e.yb(63,0,null,0,6,"ion-segment-button",[["layout","icon-bottom"],["value","proceso"]],null,null,null,r.cc,r.T)),e.xb(64,49152,null,0,a.kb,[e.h,e.l,e.z],{layout:[0,"layout"],value:[1,"value"]},null),(l()(),e.yb(65,0,null,0,2,"ion-label",[],null,null,null,r.Qb,r.G)),e.xb(66,49152,null,0,a.O,[e.h,e.l,e.z],null,null),(l()(),e.Xb(-1,0,["Procesos"])),(l()(),e.yb(68,0,null,0,1,"ion-icon",[["name","cube-outline"]],null,null,null,r.Fb,r.v)),e.xb(69,49152,null,0,a.D,[e.h,e.l,e.z],{name:[0,"name"]},null),(l()(),e.hb(16777216,null,0,1,null,C)),e.xb(71,16384,null,0,h.m,[e.P,e.M],{ngIf:[0,"ngIf"]},null),(l()(),e.hb(16777216,null,0,1,null,S)),e.xb(73,16384,null,0,h.m,[e.P,e.M],{ngIf:[0,"ngIf"]},null),(l()(),e.hb(16777216,null,0,1,null,M)),e.xb(75,16384,null,0,h.m,[e.P,e.M],{ngIf:[0,"ngIf"]},null),(l()(),e.hb(16777216,null,0,1,null,O)),e.xb(77,16384,null,0,h.m,[e.P,e.M],{ngIf:[0,"ngIf"]},null),(l()(),e.yb(78,0,null,0,3,"ion-infinite-scroll",[["threshold","100px"]],null,[[null,"ionInfinite"]],(function(l,n,u){var e=!0;return"ionInfinite"===n&&(e=!1!==l.component.loadData(u)&&e),e}),r.Ib,r.x)),e.xb(79,49152,[[1,4]],0,a.F,[e.h,e.l,e.z],{threshold:[0,"threshold"]},null),(l()(),e.yb(80,0,null,0,1,"ion-infinite-scroll-content",[["loadingSpinner","bubbles"],["loadingText","Espere un momento..."]],null,null,null,r.Hb,r.y)),e.xb(81,49152,null,0,a.G,[e.h,e.l,e.z],{loadingSpinner:[0,"loadingSpinner"],loadingText:[1,"loadingText"]},null)],(function(l,n){var u=n.component;l(n,4,0,"primary"),l(n,18,0,"refresh-circle-outline"),l(n,20,0,"grid"===u.viewType),l(n,22,0,"list"===u.viewType),l(n,30,0,"",e.Fb(1,"",e.Yb(n,30,1,e.Nb(n,31).transform("BUSCARM")),"")),l(n,34,0,u.searchQuery),l(n,40,0,"secondary","clear"),l(n,43,0,"options"),l(n,47,0,""),l(n,49,0,(null==u.itemsList?null:u.itemsList.length)>0),l(n,51,0,""),l(n,54,0,"tertiary","formulario"),l(n,57,0,"icon-bottom","formulario"),l(n,62,0,"reader-outline"),l(n,64,0,"icon-bottom","proceso"),l(n,69,0,"cube-outline"),l(n,71,0,0===u.efecto),l(n,73,0,(null==u.itemsList?null:u.itemsList.length)>0&&"list"===u.viewType),l(n,75,0,(null==u.itemsList?null:u.itemsList.length)>0&&"grid"===u.viewType),l(n,77,0,0==(null==u.itemsList?null:u.itemsList.length)),l(n,79,0,"100px"),l(n,81,0,"bubbles","Espere un momento...")}),(function(l,n){var u=n.component;l(n,11,0,u.tituloxx),l(n,14,0,e.Fb(1," ",e.Yb(n,14,0,e.Nb(n,16).transform("REFRESCARM")),"")),l(n,29,0,e.Nb(n,36).ngClassUntouched,e.Nb(n,36).ngClassTouched,e.Nb(n,36).ngClassPristine,e.Nb(n,36).ngClassDirty,e.Nb(n,36).ngClassValid,e.Nb(n,36).ngClassInvalid,e.Nb(n,36).ngClassPending),l(n,37,0,!u.showAgeFilter),l(n,39,0,e.Fb(1," ",e.Yb(n,39,0,e.Nb(n,41).transform("FILTROM")),""))}))}var N=e.ub("page-categoriaformulario-list",y,(function(l){return e.ac(0,[(l()(),e.yb(0,0,null,null,1,"page-categoriaformulario-list",[],null,null,null,F,v)),e.xb(1,114688,null,0,y,[a.gb,m.m,f.a,a.b,s.l,a.Gb],null,null)],(function(l,n){l(n,1,0)}),null)}),{},{},[]),_=u("IheW"),I=u("ZpN7"),T=u("Kt/9"),R=u("j1ZV"),Q=u("gMqc"),j=e.vb(t,[],(function(l){return e.Kb([e.Lb(512,e.j,e.Z,[[8,[i.c,o.a,N]],[3,e.j],e.x]),e.Lb(4608,h.o,h.n,[e.u]),e.Lb(4608,a.c,a.c,[e.z,e.g]),e.Lb(4608,a.Gb,a.Gb,[a.c,e.j,e.r]),e.Lb(4608,a.Lb,a.Lb,[a.c,e.j,e.r]),e.Lb(4608,g.w,g.w,[]),e.Lb(4608,_.i,_.o,[h.e,e.B,_.m]),e.Lb(4608,_.p,_.p,[_.i,_.n]),e.Lb(5120,_.a,(function(l){return[l]}),[_.p]),e.Lb(4608,_.l,_.l,[]),e.Lb(6144,_.j,null,[_.l]),e.Lb(4608,_.h,_.h,[_.j]),e.Lb(6144,_.b,null,[_.h]),e.Lb(4608,_.f,_.k,[_.b,e.r]),e.Lb(4608,_.c,_.c,[_.f]),e.Lb(5120,e.d,(function(l){return[I.b(l)]}),[T.a]),e.Lb(4608,g.d,g.d,[]),e.Lb(4608,s.h,s.g,[]),e.Lb(4608,s.d,s.f,[]),e.Lb(4608,s.j,s.e,[]),e.Lb(4608,s.c,s.b,[]),e.Lb(4608,s.l,s.l,[s.m,s.h,s.d,s.j,s.c,s.n,s.p,s.o,s.a]),e.Lb(1073742336,h.c,h.c,[]),e.Lb(1073742336,a.Cb,a.Cb,[]),e.Lb(1073742336,g.v,g.v,[]),e.Lb(1073742336,g.j,g.j,[]),e.Lb(1073742336,_.e,_.e,[]),e.Lb(1073742336,_.d,_.d,[]),e.Lb(1073742336,I.a,I.a,[]),e.Lb(1073742336,R.a,R.a,[]),e.Lb(1073742336,g.s,g.s,[]),e.Lb(1073742336,Q.c,Q.c,[]),e.Lb(1073742336,m.p,m.p,[[2,m.u],[2,m.m]]),e.Lb(1073742336,s.i,s.i,[]),e.Lb(1073742336,t,t,[]),e.Lb(256,_.m,"XSRF-TOKEN",[]),e.Lb(256,_.n,"X-XSRF-TOKEN",[]),e.Lb(1024,m.k,(function(){return[[{path:"",component:y}]]}),[]),e.Lb(256,s.p,void 0,[]),e.Lb(256,s.n,void 0,[]),e.Lb(256,s.o,void 0,[]),e.Lb(256,s.a,void 0,[])])}))},"hQ+M":function(l,n,u){"use strict";u.d(n,"a",(function(){return i})),u.d(n,"b",(function(){return o}));var e=u("8Y7J"),t=u("SVse"),i=(u("Rg8G"),e.wb({encapsulation:0,styles:[["[_nghost-%COMP%]{display:block}[_nghost-%COMP%]   .inline[_ngcontent-%COMP%], [inline][_nghost-%COMP%]{display:inline-block}[_nghost-%COMP%]   .no-animated[_ngcontent-%COMP%]{-webkit-animation:none!important;animation:none!important;background:hsla(0,0%,51%,.2)}.animated-background[_ngcontent-%COMP%], [_nghost-%COMP%]   div[_ngcontent-%COMP%]{-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-name:placeHolderShimmer;animation-name:placeHolderShimmer;-webkit-animation-timing-function:linear;animation-timing-function:linear;background:hsla(0,0%,51%,.2);background:linear-gradient(90deg,hsla(0,0%,51%,.2) 8%,hsla(0,0%,51%,.3) 18%,hsla(0,0%,51%,.2) 33%);background-size:800px 100px;position:relative}@-webkit-keyframes placeHolderShimmer{0%{background-position:-468px 0}to{background-position:468px 0}}@keyframes placeHolderShimmer{0%{background-position:-468px 0}to{background-position:468px 0}}"]],data:{}}));function o(l){return e.ac(0,[(l()(),e.yb(0,0,null,null,3,"div",[],null,null,null,null,null)),e.xb(1,278528,null,0,t.k,[e.s,e.t,e.l,e.E],{ngClass:[0,"ngClass"]},null),e.Qb(2,{"no-animated":0,inline:1}),e.xb(3,278528,null,0,t.p,[e.l,e.t,e.E],{ngStyle:[0,"ngStyle"]},null)],(function(l,n){var u=n.component,e=l(n,2,0,u.noAnimated,u.inline);l(n,1,0,e),l(n,3,0,u.styles)}),null)}}}]);