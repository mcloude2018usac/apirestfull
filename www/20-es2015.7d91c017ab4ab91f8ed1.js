(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{Rg8G:function(l,n,u){"use strict";u.d(n,"a",(function(){return t}));class t{constructor(){this.width="100%",this.height="16px",this.borderRadius="0",this.rounded=!1,this.noAnimated=!1,this.inline=!1,this.styles={}}ngOnInit(){this.styles={width:this.width,height:this.height,borderRadius:this.borderRadius},this.rounded&&(this.styles.borderRadius="999em")}}},YKFW:function(l,n,u){"use strict";u.r(n),u.d(n,"categoriaformularioListPageModuleNgFactory",(function(){return E}));var t=u("8Y7J");class e{}var i=u("Xh6l"),o=u("pMnS"),r=u("MKJQ"),a=u("sZkV"),s=u("TSSN"),b=u("hQ+M"),c=u("Rg8G"),h=u("SVse"),d=u("iInd"),g=u("s7LF"),m=u("mrSG"),p=u("ZtEv"),f=u("jtHE");class x{constructor(l,n,u,t,e,i){this.routerOutlet=l,this.router=n,this.authenticationService=u,this.alertController=t,this.translateService=e,this.modalController=i,this.showAgeFilter=!1,this.showmenu=!1,this.items=[],this.variables=[],this.userinfo=[],this.colort=["primary","secondary","tertiary","success","warning","danger","lightest","light","medium","dark","primary"],this.currentSegment2="formulario",this.viewType="grid",this.tituloxx="",this.efecto=0,this.seguro="",this.msg="",this.currentSegment="Todos",this.searchSubject=new f.a(1),this.apifoto=this.authenticationService.getapifoto()}changeToList(){this.viewType="list"}changeToGrid(){this.viewType="grid"}filterContacts2(l){this.currentSegment2=l.detail.value,this.pideregistros(this.currentSegment,this.currentSegment2)}ngOnInit(){this.router.getCurrentNavigation().extras.state?(this.variables=this.router.getCurrentNavigation().extras.state.variables,this.idllave=this.router.getCurrentNavigation().extras.state.idllave,this.currentSegment2="formulario",this.tituloxx=this.variables?this.variables.nombre:"Mis procesos y formularios"):(this.variables={idrol:"5f503beeeda4710798a79b8a",nivel:".",nombre:"Mis procesos y formularios",pactualizacion:!0,pconsulta:!0,pcreacion:!0,peliminacion:!0,pfiltro:!0,pingreso:!0,potros1:"",preporte:!0},this.idllave="",this.tituloxx=this.variables.nombre),this.userinfo=this.authenticationService.getcopiauser(),this.searchQuery="",this.translateService.get("SEGUROM").subscribe(l=>{this.seguro=l}),this.translateService.get("MSGM").subscribe(l=>{this.msg=l}),this.rangeForm=new g.g({dual:new g.e({lower:1,upper:100})}),this.currentSegment="todos",this.pideregistros(this.currentSegment,this.currentSegment2)}filterContacts(l){this.currentSegment=l.detail.value,this.pideregistros(this.currentSegment,this.currentSegment2)}pideregistros0(){this.pideregistros(this.currentSegment,this.currentSegment2)}pideregistros(l,n){this.itemsList=[],this.efecto=0;let u="";u="Administrador"===this.userinfo[0].role||"admin"===this.userinfo[0].role.substring(0,5)?this.userinfo[0].idempresa._id+"/categoriausrmoviladmin/"+this.userinfo[0]._id+"/"+n:this.userinfo[0].idempresa._id+"/categoriausrmovil/"+this.userinfo[0]._id+"/"+n,this.authenticationService.getReg(u,"catusuarios",0).then(l=>{this.efecto=1,this.items=l,this.itemsList=this.items},l=>{this.authenticationService.presentAlert(l.error,this.msg,"")})}searchList(){this.searchSubject.next({lower:this.rangeForm.controls.dual.value.lower,upper:this.rangeForm.controls.dual.value.upper,query:this.searchQuery}),this.itemsList=this.filterList(this.items,this.searchQuery&&null!==this.searchQuery?this.searchQuery:"")}filterList(l,n){return l.filter(l=>l.nombre.toLowerCase().includes(n.toLowerCase()))}otrasop(l){return Object(m.a)(this,void 0,void 0,(function*(){const n=yield this.alertController.create({cssClass:"my-custom-class",header:"Seleccione Opci\xf3n",inputs:[{name:"Productos",type:"radio",label:"Productos",checked:!0,value:"/ProductoListPage\xb0Productos ->"+l.nombre}],buttons:[{text:"Cancel",role:"cancel",cssClass:"secondary",handler:l=>{}},{text:"Ok",handler:n=>{const u=n.split("\xb0");this.router.navigate([u[0]],{state:{variables:this.variables,user:null,idllave:l._id,title:u[1]}})}}]});yield n.present()}))}dacolor(l){return this.colort[l]}updateRecord(l){return Object(m.a)(this,void 0,void 0,(function*(){let n="";n="proceso"===this.currentSegment2?"Mis procesos":"Mis Formularios",this.router.navigate(["formulariomovilsListPage"],{state:{variables:this.variables,user:null,idllave:l._id,tipo:this.currentSegment2,idcategoria:l.nombre,title:n}})}))}loadData(l){setTimeout(()=>{l.target.complete(),1e3===this.items.length&&(l.target.disabled=!0)},500)}}var y=t.wb({encapsulation:0,styles:[["[_nghost-%COMP%]{--page-margin:var(--app-narrow-margin);--page-border-radius:var(--app-fair-radius);--page-segment-background:var(--app-background);--page-segment-indicator-height:2px}ion-item-divider[_ngcontent-%COMP%]{--background:var(--ion-color-light);--padding-start:var(--page-margin)}[_nghost-%COMP%]{--page-margin:var(--app-fair-margin);--page-background:var(--app-background);--page-background-shade:var(--app-background-shade);--page-tags-gutter:5px}body[_ngcontent-%COMP%]{font-family:arial}table[_ngcontent-%COMP%]{border:1px solid #ccc;width:100%;margin:0;padding:0;border-collapse:collapse;border-spacing:0}table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{border:1px solid #ddd;padding:5px}table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{padding:10px;text-align:left}table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{text-transform:uppercase;font-size:14px;letter-spacing:1px}@media screen and (max-width:600px){table[_ngcontent-%COMP%]{border:0}table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]{display:none}table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{margin-bottom:10px;display:block;border-bottom:2px solid #ddd}table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{display:block;text-align:right;font-size:13px;border-bottom:1px dotted #ccc}table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child{border-bottom:0}table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:before{content:attr(data-label);float:left;text-transform:uppercase;font-weight:700}}"]],data:{}});function v(l){return t.ac(0,[(l()(),t.yb(0,0,null,null,3,"ion-button",[],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.changeToList()&&t),t}),r.ob,r.e)),t.xb(1,49152,null,0,a.l,[t.h,t.l,t.z],null,null),(l()(),t.yb(2,0,null,0,1,"ion-icon",[["name","grid"],["slot","icon-only"]],null,null,null,r.Fb,r.v)),t.xb(3,49152,null,0,a.D,[t.h,t.l,t.z],{name:[0,"name"]},null)],(function(l,n){l(n,3,0,"grid")}),null)}function k(l){return t.ac(0,[(l()(),t.yb(0,0,null,null,3,"ion-button",[],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.changeToGrid()&&t),t}),r.ob,r.e)),t.xb(1,49152,null,0,a.l,[t.h,t.l,t.z],null,null),(l()(),t.yb(2,0,null,0,1,"ion-icon",[["name","list"],["slot","icon-only"]],null,null,null,r.Fb,r.v)),t.xb(3,49152,null,0,a.D,[t.h,t.l,t.z],{name:[0,"name"]},null)],(function(l,n){l(n,3,0,"list")}),null)}function C(l){return t.ac(0,[(l()(),t.yb(0,0,null,null,3,"ion-label",[],null,null,null,r.Qb,r.G)),t.xb(1,49152,null,0,a.O,[t.h,t.l,t.z],null,null),(l()(),t.Xb(2,0,["",": ",""])),t.Pb(131072,s.k,[s.l,t.h])],null,(function(l,n){var u=n.component;l(n,2,0,t.Yb(n,2,0,t.Nb(n,3).transform("NOREGISTROSM")),u.itemsList.length)}))}function L(l){return t.ac(0,[(l()(),t.yb(0,0,null,null,9,"ion-item",[["lines","none"]],null,null,null,r.Pb,r.A)),t.xb(1,49152,null,0,a.I,[t.h,t.l,t.z],{lines:[0,"lines"]},null),(l()(),t.yb(2,0,null,0,7,"ion-label",[],null,null,null,r.Qb,r.G)),t.xb(3,49152,null,0,a.O,[t.h,t.l,t.z],null,null),(l()(),t.yb(4,0,null,0,1,"skeleton-element",[],null,null,null,b.b,b.a)),t.xb(5,114688,null,0,c.a,[],null,null),(l()(),t.yb(6,0,null,0,1,"skeleton-element",[],null,null,null,b.b,b.a)),t.xb(7,114688,null,0,c.a,[],null,null),(l()(),t.yb(8,0,null,0,1,"skeleton-element",[["width","67%"]],null,null,null,b.b,b.a)),t.xb(9,114688,null,0,c.a,[],{width:[0,"width"]},null)],(function(l,n){l(n,1,0,"none"),l(n,5,0),l(n,7,0),l(n,9,0,"67%")}),null)}function z(l){return t.ac(0,[(l()(),t.yb(0,0,null,null,4,"ion-list",[],null,null,null,r.Sb,r.H)),t.xb(1,49152,null,0,a.P,[t.h,t.l,t.z],null,null),(l()(),t.hb(16777216,null,0,2,null,L)),t.xb(3,278528,null,0,h.l,[t.P,t.M,t.s],{ngForOf:[0,"ngForOf"]},null),t.Ob(4,7)],(function(l,n){var u=l(n,4,0,0,1,2,3,4,5,6);l(n,3,0,u)}),null)}function P(l){return t.ac(0,[(l()(),t.yb(0,0,null,null,27,"ion-item",[],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==t.Nb(l,2).onClick()&&e),"click"===n&&(e=!1!==t.Nb(l,3).onClick(u)&&e),e}),r.Pb,r.A)),t.xb(1,49152,null,0,a.I,[t.h,t.l,t.z],null,null),t.xb(2,16384,null,0,d.n,[d.m,d.a,[8,null],t.E,t.l],null,null),t.xb(3,737280,null,0,a.Nb,[h.j,a.Hb,t.l,d.m,[2,d.n]],null,null),(l()(),t.yb(4,0,null,0,23,"ion-grid",[],null,null,null,r.Db,r.t)),t.xb(5,49152,null,0,a.B,[t.h,t.l,t.z],null,null),(l()(),t.yb(6,0,null,0,19,"ion-row",[],null,null,null,r.ac,r.Q)),t.xb(7,49152,null,0,a.hb,[t.h,t.l,t.z],null,null),(l()(),t.yb(8,0,null,0,17,"ion-col",[["size","12"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.updateRecord(l.context.$implicit)&&t),t}),r.xb,r.n)),t.xb(9,49152,null,0,a.u,[t.h,t.l,t.z],{size:[0,"size"]},null),(l()(),t.yb(10,0,null,0,1,"ion-icon",[["name","server-outline"],["slot","start"]],null,null,null,r.Fb,r.v)),t.xb(11,49152,null,0,a.D,[t.h,t.l,t.z],{name:[0,"name"]},null),(l()(),t.yb(12,0,null,0,13,"ion-label",[["class","ion-text-wrap"]],null,null,null,r.Qb,r.G)),t.xb(13,49152,null,0,a.O,[t.h,t.l,t.z],null,null),(l()(),t.yb(14,0,null,0,2,"ion-note",[["slot","end"]],null,null,null,r.Wb,r.M)),t.xb(15,49152,null,0,a.W,[t.h,t.l,t.z],null,null),(l()(),t.Xb(16,0,["No. ",""])),(l()(),t.yb(17,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),t.yb(18,0,null,0,4,"p",[],null,null,null,null,null)),(l()(),t.yb(19,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),t.Xb(-1,null,["Categoria:"])),(l()(),t.Xb(21,null,[" "," "])),(l()(),t.yb(22,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.yb(23,0,null,0,2,"ion-badge",[["color","medium"]],null,null,null,r.nb,r.d)),t.xb(24,49152,null,0,a.k,[t.h,t.l,t.z],{color:[0,"color"]},null),(l()(),t.Xb(25,0,["",""])),(l()(),t.yb(26,0,null,0,1,"ion-row",[],null,null,null,r.ac,r.Q)),t.xb(27,49152,null,0,a.hb,[t.h,t.l,t.z],null,null)],(function(l,n){l(n,3,0),l(n,9,0,"12"),l(n,11,0,"server-outline"),l(n,24,0,"medium")}),(function(l,n){l(n,16,0,n.context.index+1),l(n,21,0,n.context.$implicit.nombre),l(n,25,0,n.context.$implicit.estado)}))}function M(l){return t.ac(0,[(l()(),t.yb(0,0,null,null,3,"ion-list",[],null,null,null,r.Sb,r.H)),t.xb(1,49152,null,0,a.P,[t.h,t.l,t.z],null,null),(l()(),t.hb(16777216,null,0,1,null,P)),t.xb(3,278528,null,0,h.l,[t.P,t.M,t.s],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){l(n,3,0,n.component.itemsList)}),null)}function O(l){return t.ac(0,[(l()(),t.yb(0,0,null,null,32,"ion-col",[["size","12"],["size-lg","6"],["size-sm","6"]],null,null,null,r.xb,r.n)),t.xb(1,49152,null,0,a.u,[t.h,t.l,t.z],{size:[0,"size"]},null),(l()(),t.yb(2,0,null,0,30,"ion-card",[],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.updateRecord(l.context.$implicit)&&t),t}),r.ub,r.g)),t.xb(3,49152,null,0,a.n,[t.h,t.l,t.z],null,null),(l()(),t.yb(4,0,null,0,11,"ion-row",[["class","user-stats-wrapper user-details-wrapper"]],null,null,null,r.ac,r.Q)),t.xb(5,49152,null,0,a.hb,[t.h,t.l,t.z],null,null),(l()(),t.yb(6,0,null,0,5,"ion-col",[],null,null,null,r.xb,r.n)),t.xb(7,49152,null,0,a.u,[t.h,t.l,t.z],null,null),(l()(),t.yb(8,0,null,0,1,"span",[["class","user-stat-value"]],null,null,null,null,null)),(l()(),t.Xb(-1,null,["No."])),(l()(),t.yb(10,0,null,0,1,"span",[["class","user-stat-name"]],null,null,null,null,null)),(l()(),t.Xb(11,null,[""," "])),(l()(),t.yb(12,0,null,0,3,"ion-col",[],null,null,null,r.xb,r.n)),t.xb(13,49152,null,0,a.u,[t.h,t.l,t.z],null,null),(l()(),t.yb(14,0,null,0,1,"span",[["class","user-stat-value"]],null,null,null,null,null)),(l()(),t.Xb(15,null,[""," "])),(l()(),t.yb(16,0,null,0,12,"ion-item",[],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==t.Nb(l,18).onClick()&&e),"click"===n&&(e=!1!==t.Nb(l,19).onClick(u)&&e),e}),r.Pb,r.A)),t.xb(17,49152,null,0,a.I,[t.h,t.l,t.z],null,null),t.xb(18,16384,null,0,d.n,[d.m,d.a,[8,null],t.E,t.l],null,null),t.xb(19,737280,null,0,a.Nb,[h.j,a.Hb,t.l,d.m,[2,d.n]],null,null),(l()(),t.yb(20,0,null,0,1,"ion-icon",[["name","server-outline"],["slot","start"]],null,null,null,r.Fb,r.v)),t.xb(21,49152,null,0,a.D,[t.h,t.l,t.z],{name:[0,"name"]},null),(l()(),t.yb(22,0,null,0,6,"ion-label",[["class","ion-text-wrap"]],null,null,null,r.Qb,r.G)),t.xb(23,49152,null,0,a.O,[t.h,t.l,t.z],null,null),(l()(),t.yb(24,0,null,0,4,"p",[],null,null,null,null,null)),(l()(),t.yb(25,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),t.Xb(-1,null,["Categoria:"])),(l()(),t.Xb(27,null,[" "," "])),(l()(),t.yb(28,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.yb(29,0,null,0,1,"ion-card-content",[],null,null,null,r.qb,r.h)),t.xb(30,49152,null,0,a.o,[t.h,t.l,t.z],null,null),(l()(),t.yb(31,0,null,0,1,"ion-row",[["no-padding",""]],null,null,null,r.ac,r.Q)),t.xb(32,49152,null,0,a.hb,[t.h,t.l,t.z],null,null)],(function(l,n){l(n,1,0,"12"),l(n,19,0),l(n,21,0,"server-outline")}),(function(l,n){l(n,11,0,n.context.index+1),l(n,15,0,n.context.$implicit.estado),l(n,27,0,n.context.$implicit.nombre)}))}function w(l){return t.ac(0,[(l()(),t.yb(0,0,null,null,5,"ion-grid",[],null,null,null,r.Db,r.t)),t.xb(1,49152,null,0,a.B,[t.h,t.l,t.z],null,null),(l()(),t.yb(2,0,null,0,3,"ion-row",[],null,null,null,r.ac,r.Q)),t.xb(3,49152,null,0,a.hb,[t.h,t.l,t.z],null,null),(l()(),t.hb(16777216,null,0,1,null,O)),t.xb(5,278528,null,0,h.l,[t.P,t.M,t.s],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){l(n,5,0,n.component.itemsList)}),null)}function S(l){return t.ac(0,[(l()(),t.yb(0,0,null,null,2,"h3",[["class","empty-list-message"]],null,null,null,null,null)),(l()(),t.Xb(1,null,[" "," "])),t.Pb(131072,s.k,[s.l,t.h])],null,(function(l,n){l(n,1,0,t.Yb(n,1,0,t.Nb(n,2).transform("NODATOS")))}))}function _(l){return t.ac(0,[t.Tb(671088640,1,{infiniteScroll:0}),(l()(),t.yb(1,0,null,null,42,"ion-header",[],null,null,null,r.Eb,r.u)),t.xb(2,49152,null,0,a.C,[t.h,t.l,t.z],null,null),(l()(),t.yb(3,0,null,0,19,"ion-toolbar",[["color","primary"]],null,null,null,r.sc,r.ib)),t.xb(4,49152,null,0,a.Ab,[t.h,t.l,t.z],{color:[0,"color"]},null),(l()(),t.yb(5,0,null,0,3,"ion-buttons",[["slot","start"]],null,null,null,r.pb,r.f)),t.xb(6,49152,null,0,a.m,[t.h,t.l,t.z],null,null),(l()(),t.yb(7,0,null,0,1,"ion-menu-button",[],null,null,null,r.Tb,r.K)),t.xb(8,49152,null,0,a.S,[t.h,t.l,t.z],null,null),(l()(),t.yb(9,0,null,0,2,"ion-title",[],null,null,null,r.qc,r.gb)),t.xb(10,49152,null,0,a.yb,[t.h,t.l,t.z],null,null),(l()(),t.Xb(11,0,[" "," "])),(l()(),t.yb(12,0,null,0,10,"ion-buttons",[["slot","end"]],null,null,null,r.pb,r.f)),t.xb(13,49152,null,0,a.m,[t.h,t.l,t.z],null,null),(l()(),t.yb(14,0,null,0,4,"ion-button",[],[[8,"title",0]],[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.pideregistros0()&&t),t}),r.ob,r.e)),t.xb(15,49152,null,0,a.l,[t.h,t.l,t.z],null,null),t.Pb(131072,s.k,[s.l,t.h]),(l()(),t.yb(17,0,null,0,1,"ion-icon",[["name","refresh-circle-outline"],["slot","icon-only"]],null,null,null,r.Fb,r.v)),t.xb(18,49152,null,0,a.D,[t.h,t.l,t.z],{name:[0,"name"]},null),(l()(),t.hb(16777216,null,0,1,null,v)),t.xb(20,16384,null,0,h.m,[t.P,t.M],{ngIf:[0,"ngIf"]},null),(l()(),t.hb(16777216,null,0,1,null,k)),t.xb(22,16384,null,0,h.m,[t.P,t.M],{ngIf:[0,"ngIf"]},null),(l()(),t.yb(23,0,null,0,20,"ion-toolbar",[["class","filters-toolbar"]],null,null,null,r.sc,r.ib)),t.xb(24,49152,null,0,a.Ab,[t.h,t.l,t.z],null,null),(l()(),t.yb(25,0,null,0,18,"ion-row",[["align-items-center",""],["class","searchbar-row"]],null,null,null,r.ac,r.Q)),t.xb(26,49152,null,0,a.hb,[t.h,t.l,t.z],null,null),(l()(),t.yb(27,0,null,0,9,"ion-col",[],null,null,null,r.xb,r.n)),t.xb(28,49152,null,0,a.u,[t.h,t.l,t.z],null,null),(l()(),t.yb(29,0,null,0,7,"ion-searchbar",[["animated",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionChange"],[null,"ionBlur"]],(function(l,n,u){var e=!0,i=l.component;return"ionBlur"===n&&(e=!1!==t.Nb(l,32)._handleBlurEvent(u.target)&&e),"ionChange"===n&&(e=!1!==t.Nb(l,32)._handleInputEvent(u.target)&&e),"ngModelChange"===n&&(e=!1!==(i.searchQuery=u)&&e),"ionChange"===n&&(e=!1!==i.searchList()&&e),e}),r.bc,r.R)),t.xb(30,49152,null,0,a.ib,[t.h,t.l,t.z],{animated:[0,"animated"],placeholder:[1,"placeholder"]},null),t.Pb(131072,s.k,[s.l,t.h]),t.xb(32,16384,null,0,a.Pb,[t.l],null,null),t.Sb(1024,null,g.m,(function(l){return[l]}),[a.Pb]),t.xb(34,671744,null,0,g.q,[[8,null],[8,null],[8,null],[6,g.m]],{model:[0,"model"]},{update:"ngModelChange"}),t.Sb(2048,null,g.n,null,[g.q]),t.xb(36,16384,null,0,g.o,[[4,g.n]],null,null),(l()(),t.yb(37,0,null,0,6,"ion-col",[["class","call-to-action-col"]],[[8,"hidden",0]],null,null,r.xb,r.n)),t.xb(38,49152,null,0,a.u,[t.h,t.l,t.z],null,null),(l()(),t.yb(39,0,null,0,4,"ion-button",[["class","filters-btn"],["color","secondary"],["fill","clear"]],[[8,"title",0]],[[null,"click"]],(function(l,n,u){var t=!0,e=l.component;return"click"===n&&(t=0!=(e.showAgeFilter=!e.showAgeFilter)&&t),t}),r.ob,r.e)),t.xb(40,49152,null,0,a.l,[t.h,t.l,t.z],{color:[0,"color"],fill:[1,"fill"]},null),t.Pb(131072,s.k,[s.l,t.h]),(l()(),t.yb(42,0,null,0,1,"ion-icon",[["name","options"],["slot","icon-only"]],null,null,null,r.Fb,r.v)),t.xb(43,49152,null,0,a.D,[t.h,t.l,t.z],{name:[0,"name"]},null),(l()(),t.yb(44,0,null,null,37,"ion-content",[["class","user-friends-content"]],null,null,null,r.yb,r.o)),t.xb(45,49152,null,0,a.v,[t.h,t.l,t.z],null,null),(l()(),t.yb(46,0,null,0,3,"ion-item-divider",[["sticky",""]],null,null,null,r.Kb,r.B)),t.xb(47,49152,null,0,a.J,[t.h,t.l,t.z],{sticky:[0,"sticky"]},null),(l()(),t.hb(16777216,null,0,1,null,C)),t.xb(49,16384,null,0,h.m,[t.P,t.M],{ngIf:[0,"ngIf"]},null),(l()(),t.yb(50,0,null,0,19,"ion-item-divider",[["sticky",""]],null,null,null,r.Kb,r.B)),t.xb(51,49152,null,0,a.J,[t.h,t.l,t.z],{sticky:[0,"sticky"]},null),(l()(),t.yb(52,0,null,0,17,"ion-segment",[["color","tertiary"],["value","formulario"]],null,[[null,"ionChange"],[null,"ionBlur"]],(function(l,n,u){var e=!0,i=l.component;return"ionBlur"===n&&(e=!1!==t.Nb(l,55)._handleBlurEvent(u.target)&&e),"ionChange"===n&&(e=!1!==t.Nb(l,55)._handleChangeEvent(u.target)&&e),"ionChange"===n&&(e=!1!==i.filterContacts2(u)&&e),e}),r.dc,r.S)),t.Sb(5120,null,g.m,(function(l){return[l]}),[a.Ob]),t.xb(54,49152,null,0,a.jb,[t.h,t.l,t.z],{color:[0,"color"],value:[1,"value"]},null),t.xb(55,16384,null,0,a.Ob,[t.l],null,null),(l()(),t.yb(56,0,null,0,6,"ion-segment-button",[["checked",""],["layout","icon-bottom"],["value","formulario"]],null,null,null,r.cc,r.T)),t.xb(57,49152,null,0,a.kb,[t.h,t.l,t.z],{layout:[0,"layout"],value:[1,"value"]},null),(l()(),t.yb(58,0,null,0,2,"ion-label",[],null,null,null,r.Qb,r.G)),t.xb(59,49152,null,0,a.O,[t.h,t.l,t.z],null,null),(l()(),t.Xb(-1,0,["Formulario"])),(l()(),t.yb(61,0,null,0,1,"ion-icon",[["name","reader-outline"]],null,null,null,r.Fb,r.v)),t.xb(62,49152,null,0,a.D,[t.h,t.l,t.z],{name:[0,"name"]},null),(l()(),t.yb(63,0,null,0,6,"ion-segment-button",[["layout","icon-bottom"],["value","proceso"]],null,null,null,r.cc,r.T)),t.xb(64,49152,null,0,a.kb,[t.h,t.l,t.z],{layout:[0,"layout"],value:[1,"value"]},null),(l()(),t.yb(65,0,null,0,2,"ion-label",[],null,null,null,r.Qb,r.G)),t.xb(66,49152,null,0,a.O,[t.h,t.l,t.z],null,null),(l()(),t.Xb(-1,0,["Procesos"])),(l()(),t.yb(68,0,null,0,1,"ion-icon",[["name","cube-outline"]],null,null,null,r.Fb,r.v)),t.xb(69,49152,null,0,a.D,[t.h,t.l,t.z],{name:[0,"name"]},null),(l()(),t.hb(16777216,null,0,1,null,z)),t.xb(71,16384,null,0,h.m,[t.P,t.M],{ngIf:[0,"ngIf"]},null),(l()(),t.hb(16777216,null,0,1,null,M)),t.xb(73,16384,null,0,h.m,[t.P,t.M],{ngIf:[0,"ngIf"]},null),(l()(),t.hb(16777216,null,0,1,null,w)),t.xb(75,16384,null,0,h.m,[t.P,t.M],{ngIf:[0,"ngIf"]},null),(l()(),t.hb(16777216,null,0,1,null,S)),t.xb(77,16384,null,0,h.m,[t.P,t.M],{ngIf:[0,"ngIf"]},null),(l()(),t.yb(78,0,null,0,3,"ion-infinite-scroll",[["threshold","100px"]],null,[[null,"ionInfinite"]],(function(l,n,u){var t=!0;return"ionInfinite"===n&&(t=!1!==l.component.loadData(u)&&t),t}),r.Ib,r.x)),t.xb(79,49152,[[1,4]],0,a.F,[t.h,t.l,t.z],{threshold:[0,"threshold"]},null),(l()(),t.yb(80,0,null,0,1,"ion-infinite-scroll-content",[["loadingSpinner","bubbles"],["loadingText","Espere un momento..."]],null,null,null,r.Hb,r.y)),t.xb(81,49152,null,0,a.G,[t.h,t.l,t.z],{loadingSpinner:[0,"loadingSpinner"],loadingText:[1,"loadingText"]},null)],(function(l,n){var u=n.component;l(n,4,0,"primary"),l(n,18,0,"refresh-circle-outline"),l(n,20,0,"grid"===u.viewType),l(n,22,0,"list"===u.viewType),l(n,30,0,"",t.Fb(1,"",t.Yb(n,30,1,t.Nb(n,31).transform("BUSCARM")),"")),l(n,34,0,u.searchQuery),l(n,40,0,"secondary","clear"),l(n,43,0,"options"),l(n,47,0,""),l(n,49,0,(null==u.itemsList?null:u.itemsList.length)>0),l(n,51,0,""),l(n,54,0,"tertiary","formulario"),l(n,57,0,"icon-bottom","formulario"),l(n,62,0,"reader-outline"),l(n,64,0,"icon-bottom","proceso"),l(n,69,0,"cube-outline"),l(n,71,0,0===u.efecto),l(n,73,0,(null==u.itemsList?null:u.itemsList.length)>0&&"list"===u.viewType),l(n,75,0,(null==u.itemsList?null:u.itemsList.length)>0&&"grid"===u.viewType),l(n,77,0,0==(null==u.itemsList?null:u.itemsList.length)),l(n,79,0,"100px"),l(n,81,0,"bubbles","Espere un momento...")}),(function(l,n){var u=n.component;l(n,11,0,u.tituloxx),l(n,14,0,t.Fb(1," ",t.Yb(n,14,0,t.Nb(n,16).transform("REFRESCARM")),"")),l(n,29,0,t.Nb(n,36).ngClassUntouched,t.Nb(n,36).ngClassTouched,t.Nb(n,36).ngClassPristine,t.Nb(n,36).ngClassDirty,t.Nb(n,36).ngClassValid,t.Nb(n,36).ngClassInvalid,t.Nb(n,36).ngClassPending),l(n,37,0,!u.showAgeFilter),l(n,39,0,t.Fb(1," ",t.Yb(n,39,0,t.Nb(n,41).transform("FILTROM")),""))}))}function F(l){return t.ac(0,[(l()(),t.yb(0,0,null,null,1,"page-categoriaformulario-list",[],null,null,null,_,y)),t.xb(1,114688,null,0,x,[a.gb,d.m,p.a,a.b,s.l,a.Gb],null,null)],(function(l,n){l(n,1,0)}),null)}var N=t.ub("page-categoriaformulario-list",x,F,{},{},[]),I=u("IheW"),T=u("ZpN7"),Q=u("Kt/9"),R=u("j1ZV"),j=u("gMqc"),E=t.vb(e,[],(function(l){return t.Kb([t.Lb(512,t.j,t.Z,[[8,[i.c,o.a,N]],[3,t.j],t.x]),t.Lb(4608,h.o,h.n,[t.u]),t.Lb(4608,a.c,a.c,[t.z,t.g]),t.Lb(4608,a.Gb,a.Gb,[a.c,t.j,t.r]),t.Lb(4608,a.Lb,a.Lb,[a.c,t.j,t.r]),t.Lb(4608,g.w,g.w,[]),t.Lb(4608,I.i,I.o,[h.e,t.B,I.m]),t.Lb(4608,I.p,I.p,[I.i,I.n]),t.Lb(5120,I.a,(function(l){return[l]}),[I.p]),t.Lb(4608,I.l,I.l,[]),t.Lb(6144,I.j,null,[I.l]),t.Lb(4608,I.h,I.h,[I.j]),t.Lb(6144,I.b,null,[I.h]),t.Lb(4608,I.f,I.k,[I.b,t.r]),t.Lb(4608,I.c,I.c,[I.f]),t.Lb(5120,t.d,(function(l){return[T.b(l)]}),[Q.a]),t.Lb(4608,g.d,g.d,[]),t.Lb(4608,s.h,s.g,[]),t.Lb(4608,s.d,s.f,[]),t.Lb(4608,s.j,s.e,[]),t.Lb(4608,s.c,s.b,[]),t.Lb(4608,s.l,s.l,[s.m,s.h,s.d,s.j,s.c,s.n,s.p,s.o,s.a]),t.Lb(1073742336,h.c,h.c,[]),t.Lb(1073742336,a.Cb,a.Cb,[]),t.Lb(1073742336,g.v,g.v,[]),t.Lb(1073742336,g.j,g.j,[]),t.Lb(1073742336,I.e,I.e,[]),t.Lb(1073742336,I.d,I.d,[]),t.Lb(1073742336,T.a,T.a,[]),t.Lb(1073742336,R.a,R.a,[]),t.Lb(1073742336,g.s,g.s,[]),t.Lb(1073742336,j.c,j.c,[]),t.Lb(1073742336,d.p,d.p,[[2,d.u],[2,d.m]]),t.Lb(1073742336,s.i,s.i,[]),t.Lb(1073742336,e,e,[]),t.Lb(256,I.m,"XSRF-TOKEN",[]),t.Lb(256,I.n,"X-XSRF-TOKEN",[]),t.Lb(1024,d.k,(function(){return[[{path:"",component:x}]]}),[]),t.Lb(256,s.p,void 0,[]),t.Lb(256,s.n,void 0,[]),t.Lb(256,s.o,void 0,[]),t.Lb(256,s.a,void 0,[])])}))},"hQ+M":function(l,n,u){"use strict";u.d(n,"a",(function(){return i})),u.d(n,"b",(function(){return o}));var t=u("8Y7J"),e=u("SVse"),i=(u("Rg8G"),t.wb({encapsulation:0,styles:[["[_nghost-%COMP%]{display:block}[_nghost-%COMP%]   .inline[_ngcontent-%COMP%], [inline][_nghost-%COMP%]{display:inline-block}[_nghost-%COMP%]   .no-animated[_ngcontent-%COMP%]{-webkit-animation:none!important;animation:none!important;background:hsla(0,0%,51%,.2)}.animated-background[_ngcontent-%COMP%], [_nghost-%COMP%]   div[_ngcontent-%COMP%]{-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-name:placeHolderShimmer;animation-name:placeHolderShimmer;-webkit-animation-timing-function:linear;animation-timing-function:linear;background:hsla(0,0%,51%,.2);background:linear-gradient(90deg,hsla(0,0%,51%,.2) 8%,hsla(0,0%,51%,.3) 18%,hsla(0,0%,51%,.2) 33%);background-size:800px 100px;position:relative}@-webkit-keyframes placeHolderShimmer{0%{background-position:-468px 0}to{background-position:468px 0}}@keyframes placeHolderShimmer{0%{background-position:-468px 0}to{background-position:468px 0}}"]],data:{}}));function o(l){return t.ac(0,[(l()(),t.yb(0,0,null,null,3,"div",[],null,null,null,null,null)),t.xb(1,278528,null,0,e.k,[t.s,t.t,t.l,t.E],{ngClass:[0,"ngClass"]},null),t.Qb(2,{"no-animated":0,inline:1}),t.xb(3,278528,null,0,e.p,[t.l,t.t,t.E],{ngStyle:[0,"ngStyle"]},null)],(function(l,n){var u=n.component,t=l(n,2,0,u.noAnimated,u.inline);l(n,1,0,t),l(n,3,0,u.styles)}),null)}}}]);