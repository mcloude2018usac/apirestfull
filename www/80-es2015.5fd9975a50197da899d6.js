(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{Rg8G:function(l,n,i){"use strict";i.d(n,"a",(function(){return e}));class e{constructor(){this.width="100%",this.height="16px",this.borderRadius="0",this.rounded=!1,this.noAnimated=!1,this.inline=!1,this.styles={}}ngOnInit(){this.styles={width:this.width,height:this.height,borderRadius:this.borderRadius},this.rounded&&(this.styles.borderRadius="999em")}}},"hQ+M":function(l,n,i){"use strict";i.d(n,"a",(function(){return u})),i.d(n,"b",(function(){return o}));var e=i("8Y7J"),t=i("SVse"),u=(i("Rg8G"),e.wb({encapsulation:0,styles:[["[_nghost-%COMP%]{display:block}[_nghost-%COMP%]   .inline[_ngcontent-%COMP%], [inline][_nghost-%COMP%]{display:inline-block}[_nghost-%COMP%]   .no-animated[_ngcontent-%COMP%]{-webkit-animation:none!important;animation:none!important;background:hsla(0,0%,51%,.2)}.animated-background[_ngcontent-%COMP%], [_nghost-%COMP%]   div[_ngcontent-%COMP%]{-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-name:placeHolderShimmer;animation-name:placeHolderShimmer;-webkit-animation-timing-function:linear;animation-timing-function:linear;background:hsla(0,0%,51%,.2);background:linear-gradient(90deg,hsla(0,0%,51%,.2) 8%,hsla(0,0%,51%,.3) 18%,hsla(0,0%,51%,.2) 33%);background-size:800px 100px;position:relative}@-webkit-keyframes placeHolderShimmer{0%{background-position:-468px 0}to{background-position:468px 0}}@keyframes placeHolderShimmer{0%{background-position:-468px 0}to{background-position:468px 0}}"]],data:{}}));function o(l){return e.ac(0,[(l()(),e.yb(0,0,null,null,3,"div",[],null,null,null,null,null)),e.xb(1,278528,null,0,t.k,[e.s,e.t,e.l,e.E],{ngClass:[0,"ngClass"]},null),e.Qb(2,{"no-animated":0,inline:1}),e.xb(3,278528,null,0,t.p,[e.l,e.t,e.E],{ngStyle:[0,"ngStyle"]},null)],(function(l,n){var i=n.component,e=l(n,2,0,i.noAnimated,i.inline);l(n,1,0,e),l(n,3,0,i.styles)}),null)}},ja3t:function(l,n,i){"use strict";i.r(n),i.d(n,"formulariomovilsListPageModuleNgFactory",(function(){return I}));var e=i("8Y7J");class t{}var u=i("Xh6l"),o=i("pMnS"),r=i("MKJQ"),s=i("sZkV"),a=i("TSSN"),c=i("hQ+M"),b=i("Rg8G"),d=i("SVse"),h=i("s7LF"),g=i("mrSG"),m=i("ZtEv"),p=i("jtHE");class f{constructor(l,n,i,e,t,u,o){this._DomSanitizer=l,this.routerOutlet=n,this.router=i,this.authenticationService=e,this.alertController=t,this.translateService=u,this.modalController=o,this.showAgeFilter=!1,this.showmenu=!1,this.items=[],this.variables=[],this.userinfo=[],this.viewType="grid",this.tituloxx="",this.efecto=0,this.seguro="",this.msg="",this.currentSegment="Todos",this.searchSubject=new p.a(1),this.apifoto=this.authenticationService.getapifoto()}changeToList(){this.viewType="list"}changeToGrid(){this.viewType="grid"}ngOnInit(){this.variables=this.router.getCurrentNavigation().extras.state.variables,this.idllave=this.router.getCurrentNavigation().extras.state.idllave,this.tipo=this.router.getCurrentNavigation().extras.state.tipo,this.userinfo=this.authenticationService.getcopiauser(),this.tituloxx=this.router.getCurrentNavigation().extras.state.title,this.idcategoria=this.router.getCurrentNavigation().extras.state.idcategoria,this.searchQuery="",this.translateService.get("SEGUROM").subscribe(l=>{this.seguro=l}),this.translateService.get("MSGM").subscribe(l=>{this.msg=l}),this.rangeForm=new h.g({dual:new h.e({lower:1,upper:100})}),this.currentSegment="todos",this.pideregistros(this.currentSegment)}filterContacts(l){const n=l.detail.value;this.currentSegment=n,this.pideregistros(n)}pideregistros0(){this.pideregistros(this.currentSegment)}pideregistros(l){this.itemsList=[],this.efecto=0;let n="";n=this.idcategoria+"/"+this.userinfo[0]._id+"/"+this.userinfo[0].idempresa._id+"\xb0"+l+"\xb0"+this.tipo+"/categoriausr",this.authenticationService.getReg(n,"frmmovils",0).then(l=>{this.efecto=1,this.items=l,this.itemsList=this.items},l=>{this.authenticationService.presentAlert(l.error,this.msg,"")})}searchList(){this.searchSubject.next({lower:this.rangeForm.controls.dual.value.lower,upper:this.rangeForm.controls.dual.value.upper,query:this.searchQuery}),this.itemsList=this.filterList(this.items,this.searchQuery&&null!==this.searchQuery?this.searchQuery:"")}filterList(l,n){return l.filter(l=>l.nombre.toLowerCase().includes(n.toLowerCase()))}otrasop(l){return Object(g.a)(this,void 0,void 0,(function*(){const n=yield this.alertController.create({cssClass:"my-custom-class",header:"Seleccione Opci\xf3n",inputs:[{name:"Productos",type:"radio",label:"Productos",checked:!0,value:"/ProductoListPage\xb0Productos ->"+l.nombre}],buttons:[{text:"Cancel",role:"cancel",cssClass:"secondary",handler:l=>{}},{text:"Ok",handler:n=>{const i=n.split("\xb0");this.router.navigate([i[0]],{state:{variables:this.variables,user:null,idllave:l._id,title:i[1]}})}}]});yield n.present()}))}updateRecord(l){return Object(g.a)(this,void 0,void 0,(function*(){this.authenticationService.getReg(l._id+"/formulariocamposver/"+this.userinfo[0].idempresa._id,"frmmovils",0).then(n=>{let i="";if(i="Si"===l.permisos.publico?"Ver solo los mios":l.verregistros,"proceso"===l.tipo){let e=[],t=[],u=[],o=[];this.authenticationService.getReg("todos/actividadprocesos/"+this.userinfo[0].idempresa._id+"/"+l._id,"frmactividads",0).then(r=>{e=r,this.authenticationService.getReg("todos/accionproceso2/"+this.userinfo[0].idempresa._id+"/"+l._id,"frmaccioness",0).then(r=>{o=r,this.authenticationService.getReg("todos/accionproceso/"+this.userinfo[0].idempresa._id+"/"+l._id,"frmaccioness",0).then(r=>{u=r,this.authenticationService.getReg("todos/actividadprocesosmias/"+this.userinfo[0].idempresa._id+"/"+l._id+"\xb0"+this.userinfo[0]._id,"frmactividads",0).then(r=>{t=r,void 0!==l.verregistros&&e.length>0&&(i=l.verregistros);for(var s="",a=0;a<o.length;a++)if(o[a].correousuarios.indexOf("USUARIOSOLICITANTE")>=0)for(var c=0;c<e.length;c++)e[c].actor.id===o[a].idpapa&&(s=s+e[c]._id+",");"Si"===l.permisos.publico&&(l.permisos.ejecutadas="true",""===s&&e.length>=0&&(s=e[0]._id+",")),this.router.navigate(["formulariomovilsdprocesoListPage"],{state:{variables:l.permisos,permisosorden:l.permisos,user:null,idllave:l._id,datat:n,idcategoria:l.categoria,publico:l.publico,verregistros:i,idformulario:l._id,idformularioproceso:l._id+"-proceso",nidformulario:l.nombre,actividadpublicas:s,geoposicion:l.geoposicion,actividades:e,misactividades:t,actorcorreo:o,acciones:u,tipo2:l.tipo2,tipo:l.tipo,ejecuta:l.ejecuta,ejecutainicio:l.ejecutainicio,title:"Creaci\xf3n de registros ->"+l.nombre}})})})})})}else this.router.navigate(["formulariomovilsdListPage"],{state:{variables:l.permisos,permisosorden:l.permisos,user:null,idllave:l._id,datat:n,idcategoria:l.categoria,verregistros:i,idformulario:l._id,publico:l.publico,idformularioproceso:l._id+"-proceso",nidformulario:l.nombre,geoposicion:l.geoposicion,tipo2:l.tipo2,tipo:l.tipo,ejecuta:l.ejecuta,ejecutainicio:l.ejecutainicio,title:"Creaci\xf3n de registros ->"+l.nombre}})},l=>{this.authenticationService.presentAlert(l.error,this.msg,"")})}))}loadData(l){setTimeout(()=>{l.target.complete(),1e3===this.items.length&&(l.target.disabled=!0)},500)}}var v=i("cUpR"),y=i("iInd"),x=e.wb({encapsulation:0,styles:[["[_nghost-%COMP%]{--page-margin:var(--app-narrow-margin);--page-border-radius:var(--app-fair-radius);--page-segment-background:var(--app-background);--page-segment-indicator-height:2px}ion-item-divider[_ngcontent-%COMP%]{--background:var(--ion-color-light);--padding-start:var(--page-margin)}[_nghost-%COMP%]{--page-margin:var(--app-fair-margin);--page-background:var(--app-background);--page-background-shade:var(--app-background-shade);--page-tags-gutter:5px}"]],data:{}});function L(l){return e.ac(0,[(l()(),e.yb(0,0,null,null,3,"ion-label",[],null,null,null,r.Qb,r.G)),e.xb(1,49152,null,0,s.O,[e.h,e.l,e.z],null,null),(l()(),e.Xb(2,0,["",": ",""])),e.Pb(131072,a.k,[a.l,e.h])],null,(function(l,n){var i=n.component;l(n,2,0,e.Yb(n,2,0,e.Nb(n,3).transform("NOREGISTROSM")),i.itemsList.length)}))}function C(l){return e.ac(0,[(l()(),e.yb(0,0,null,null,9,"ion-item",[["lines","none"]],null,null,null,r.Pb,r.A)),e.xb(1,49152,null,0,s.I,[e.h,e.l,e.z],{lines:[0,"lines"]},null),(l()(),e.yb(2,0,null,0,7,"ion-label",[],null,null,null,r.Qb,r.G)),e.xb(3,49152,null,0,s.O,[e.h,e.l,e.z],null,null),(l()(),e.yb(4,0,null,0,1,"skeleton-element",[],null,null,null,c.b,c.a)),e.xb(5,114688,null,0,b.a,[],null,null),(l()(),e.yb(6,0,null,0,1,"skeleton-element",[],null,null,null,c.b,c.a)),e.xb(7,114688,null,0,b.a,[],null,null),(l()(),e.yb(8,0,null,0,1,"skeleton-element",[["width","67%"]],null,null,null,c.b,c.a)),e.xb(9,114688,null,0,b.a,[],{width:[0,"width"]},null)],(function(l,n){l(n,1,0,"none"),l(n,5,0),l(n,7,0),l(n,9,0,"67%")}),null)}function S(l){return e.ac(0,[(l()(),e.yb(0,0,null,null,4,"ion-list",[],null,null,null,r.Sb,r.H)),e.xb(1,49152,null,0,s.P,[e.h,e.l,e.z],null,null),(l()(),e.hb(16777216,null,0,2,null,C)),e.xb(3,278528,null,0,d.l,[e.P,e.M,e.s],{ngForOf:[0,"ngForOf"]},null),e.Ob(4,7)],(function(l,n){var i=l(n,4,0,0,1,2,3,4,5,6);l(n,3,0,i)}),null)}function z(l){return e.ac(0,[(l()(),e.yb(0,0,null,null,22,"ion-col",[["size-xs","12"],["sizeLg","4"],["sizeMd","4"],["sizeXs","6"]],null,null,null,r.xb,r.n)),e.xb(1,49152,null,0,s.u,[e.h,e.l,e.z],{sizeLg:[0,"sizeLg"],sizeMd:[1,"sizeMd"],sizeXs:[2,"sizeXs"]},null),(l()(),e.yb(2,0,null,0,20,"ion-card",[],null,[[null,"click"]],(function(l,n,i){var e=!0;return"click"===n&&(e=!1!==l.component.updateRecord(l.context.$implicit)&&e),e}),r.ub,r.g)),e.xb(3,49152,null,0,s.n,[e.h,e.l,e.z],null,null),(l()(),e.yb(4,0,null,0,0,"img",[["style","width:100%;height:150px"]],[[8,"src",4]],null,null,null,null)),(l()(),e.yb(5,0,null,0,7,"ion-card-header",[],null,null,null,r.rb,r.i)),e.xb(6,49152,null,0,s.p,[e.h,e.l,e.z],null,null),(l()(),e.yb(7,0,null,0,2,"ion-card-subtitle",[],null,null,null,r.sb,r.j)),e.xb(8,49152,null,0,s.q,[e.h,e.l,e.z],null,null),(l()(),e.Xb(9,0,["",""])),(l()(),e.yb(10,0,null,0,2,"ion-card-title",[],null,null,null,r.tb,r.k)),e.xb(11,49152,null,0,s.r,[e.h,e.l,e.z],null,null),(l()(),e.Xb(12,0,["",""])),(l()(),e.yb(13,0,null,0,9,"ion-row",[["size","12"]],null,null,null,r.ac,r.Q)),e.xb(14,49152,null,0,s.hb,[e.h,e.l,e.z],null,null),(l()(),e.yb(15,0,null,0,7,"ion-toolbar",[["color","transparent"]],null,null,null,r.sc,r.ib)),e.xb(16,49152,null,0,s.Ab,[e.h,e.l,e.z],{color:[0,"color"]},null),(l()(),e.yb(17,0,null,0,5,"ion-buttons",[["slot","secondary"]],null,null,null,r.pb,r.f)),e.xb(18,49152,null,0,s.m,[e.h,e.l,e.z],null,null),(l()(),e.yb(19,0,null,0,3,"ion-button",[["color","secondary"],["title","Registros de formulario"]],null,[[null,"click"]],(function(l,n,i){var e=!0;return"click"===n&&(e=!1!==l.component.updateRecord(l.context.$implicit)&&e),e}),r.ob,r.e)),e.xb(20,49152,null,0,s.l,[e.h,e.l,e.z],{color:[0,"color"]},null),(l()(),e.yb(21,0,null,0,1,"ion-icon",[["name","reader-outline"],["slot","icon-only"]],null,null,null,r.Fb,r.v)),e.xb(22,49152,null,0,s.D,[e.h,e.l,e.z],{name:[0,"name"]},null)],(function(l,n){l(n,1,0,"4","4","6"),l(n,16,0,"transparent"),l(n,20,0,"secondary"),l(n,22,0,"reader-outline")}),(function(l,n){var i=n.component;l(n,4,0,i._DomSanitizer.bypassSecurityTrustUrl(i.apifoto+n.context.$implicit.foto)),l(n,9,0,n.context.$implicit.categoria),l(n,12,0,n.context.$implicit.nombre)}))}function k(l){return e.ac(0,[(l()(),e.yb(0,0,null,null,5,"ion-grid",[],null,null,null,r.Db,r.t)),e.xb(1,49152,null,0,s.B,[e.h,e.l,e.z],null,null),(l()(),e.yb(2,0,null,0,3,"ion-row",[],null,null,null,r.ac,r.Q)),e.xb(3,49152,null,0,s.hb,[e.h,e.l,e.z],null,null),(l()(),e.hb(16777216,null,0,1,null,z)),e.xb(5,278528,null,0,d.l,[e.P,e.M,e.s],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){l(n,5,0,n.component.itemsList)}),null)}function w(l){return e.ac(0,[(l()(),e.yb(0,0,null,null,2,"h3",[["class","empty-list-message"]],null,null,null,null,null)),(l()(),e.Xb(1,null,[" "," "])),e.Pb(131072,a.k,[a.l,e.h])],null,(function(l,n){l(n,1,0,e.Yb(n,1,0,e.Nb(n,2).transform("NODATOS")))}))}function N(l){return e.ac(0,[e.Tb(671088640,1,{infiniteScroll:0}),(l()(),e.yb(1,0,null,null,64,"ion-header",[],null,null,null,r.Eb,r.u)),e.xb(2,49152,null,0,s.C,[e.h,e.l,e.z],null,null),(l()(),e.yb(3,0,null,0,16,"ion-toolbar",[["color","primary"]],null,null,null,r.sc,r.ib)),e.xb(4,49152,null,0,s.Ab,[e.h,e.l,e.z],{color:[0,"color"]},null),(l()(),e.yb(5,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,r.pb,r.f)),e.xb(6,49152,null,0,s.m,[e.h,e.l,e.z],null,null),(l()(),e.yb(7,0,null,0,2,"ion-back-button",[["defaultHref","categoriaformularioListPage"]],null,[[null,"click"]],(function(l,n,i){var t=!0;return"click"===n&&(t=!1!==e.Nb(l,9).onClick(i)&&t),t}),r.mb,r.c)),e.xb(8,49152,null,0,s.h,[e.h,e.l,e.z],{defaultHref:[0,"defaultHref"]},null),e.xb(9,16384,null,0,s.i,[[2,s.gb],s.Hb,s.e],{defaultHref:[0,"defaultHref"]},null),(l()(),e.yb(10,0,null,0,2,"ion-title",[],null,null,null,r.qc,r.gb)),e.xb(11,49152,null,0,s.yb,[e.h,e.l,e.z],null,null),(l()(),e.Xb(12,0,[" "," "])),(l()(),e.yb(13,0,null,0,6,"ion-buttons",[["slot","end"]],null,null,null,r.pb,r.f)),e.xb(14,49152,null,0,s.m,[e.h,e.l,e.z],null,null),(l()(),e.yb(15,0,null,0,4,"ion-button",[],[[8,"title",0]],[[null,"click"]],(function(l,n,i){var e=!0;return"click"===n&&(e=!1!==l.component.pideregistros0()&&e),e}),r.ob,r.e)),e.xb(16,49152,null,0,s.l,[e.h,e.l,e.z],null,null),e.Pb(131072,a.k,[a.l,e.h]),(l()(),e.yb(18,0,null,0,1,"ion-icon",[["name","refresh-circle-outline"],["slot","icon-only"]],null,null,null,r.Fb,r.v)),e.xb(19,49152,null,0,s.D,[e.h,e.l,e.z],{name:[0,"name"]},null),(l()(),e.yb(20,0,null,0,45,"ion-toolbar",[["class","filters-toolbar"]],null,null,null,r.sc,r.ib)),e.xb(21,49152,null,0,s.Ab,[e.h,e.l,e.z],null,null),(l()(),e.yb(22,0,null,0,18,"ion-row",[["align-items-center",""],["class","searchbar-row"]],null,null,null,r.ac,r.Q)),e.xb(23,49152,null,0,s.hb,[e.h,e.l,e.z],null,null),(l()(),e.yb(24,0,null,0,9,"ion-col",[],null,null,null,r.xb,r.n)),e.xb(25,49152,null,0,s.u,[e.h,e.l,e.z],null,null),(l()(),e.yb(26,0,null,0,7,"ion-searchbar",[["animated",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionChange"],[null,"ionBlur"]],(function(l,n,i){var t=!0,u=l.component;return"ionBlur"===n&&(t=!1!==e.Nb(l,29)._handleBlurEvent(i.target)&&t),"ionChange"===n&&(t=!1!==e.Nb(l,29)._handleInputEvent(i.target)&&t),"ngModelChange"===n&&(t=!1!==(u.searchQuery=i)&&t),"ionChange"===n&&(t=!1!==u.searchList()&&t),t}),r.bc,r.R)),e.xb(27,49152,null,0,s.ib,[e.h,e.l,e.z],{animated:[0,"animated"],placeholder:[1,"placeholder"]},null),e.Pb(131072,a.k,[a.l,e.h]),e.xb(29,16384,null,0,s.Pb,[e.l],null,null),e.Sb(1024,null,h.m,(function(l){return[l]}),[s.Pb]),e.xb(31,671744,null,0,h.q,[[8,null],[8,null],[8,null],[6,h.m]],{model:[0,"model"]},{update:"ngModelChange"}),e.Sb(2048,null,h.n,null,[h.q]),e.xb(33,16384,null,0,h.o,[[4,h.n]],null,null),(l()(),e.yb(34,0,null,0,6,"ion-col",[["class","call-to-action-col"]],[[8,"hidden",0]],null,null,r.xb,r.n)),e.xb(35,49152,null,0,s.u,[e.h,e.l,e.z],null,null),(l()(),e.yb(36,0,null,0,4,"ion-button",[["class","filters-btn"],["color","secondary"],["fill","clear"]],[[8,"title",0]],[[null,"click"]],(function(l,n,i){var e=!0,t=l.component;return"click"===n&&(e=0!=(t.showAgeFilter=!t.showAgeFilter)&&e),e}),r.ob,r.e)),e.xb(37,49152,null,0,s.l,[e.h,e.l,e.z],{color:[0,"color"],fill:[1,"fill"]},null),e.Pb(131072,a.k,[a.l,e.h]),(l()(),e.yb(39,0,null,0,1,"ion-icon",[["name","options"],["slot","icon-only"]],null,null,null,r.Fb,r.v)),e.xb(40,49152,null,0,s.D,[e.h,e.l,e.z],{name:[0,"name"]},null),(l()(),e.yb(41,0,null,0,24,"form",[["novalidate",""]],[[8,"hidden",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],(function(l,n,i){var t=!0;return"submit"===n&&(t=!1!==e.Nb(l,43).onSubmit(i)&&t),"reset"===n&&(t=!1!==e.Nb(l,43).onReset()&&t),t}),null,null)),e.xb(42,16384,null,0,h.y,[],null,null),e.xb(43,540672,null,0,h.h,[[8,null],[8,null]],{form:[0,"form"]},null),e.Sb(2048,null,h.b,null,[h.h]),e.xb(45,16384,null,0,h.p,[[4,h.b]],null,null),(l()(),e.yb(46,0,null,null,19,"ion-row",[["class","range-item-row"]],null,null,null,r.ac,r.Q)),e.xb(47,49152,null,0,s.hb,[e.h,e.l,e.z],null,null),(l()(),e.yb(48,0,null,0,8,"ion-col",[["size","12"]],null,null,null,r.xb,r.n)),e.xb(49,49152,null,0,s.u,[e.h,e.l,e.z],{size:[0,"size"]},null),(l()(),e.yb(50,0,null,0,6,"div",[["class","range-header"]],null,null,null,null,null)),(l()(),e.yb(51,0,null,null,1,"span",[["class","range-value"]],null,null,null,null,null)),(l()(),e.Xb(52,null,["",""])),(l()(),e.yb(53,0,null,null,1,"span",[["class","range-label"]],null,null,null,null,null)),(l()(),e.Xb(-1,null,["Filter by age"])),(l()(),e.yb(55,0,null,null,1,"span",[["class","range-value"]],null,null,null,null,null)),(l()(),e.Xb(56,null,["",""])),(l()(),e.yb(57,0,null,0,8,"ion-col",[["size","12"]],null,null,null,r.xb,r.n)),e.xb(58,49152,null,0,s.u,[e.h,e.l,e.z],{size:[0,"size"]},null),(l()(),e.yb(59,0,null,0,6,"ion-range",[["class","range-control"],["color","secondary"],["debounce","400"],["dualKnobs","true"],["formControlName","dual"],["max","100"],["min","1"],["pin","true"],["step","1"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionChange"],[null,"ionBlur"]],(function(l,n,i){var t=!0,u=l.component;return"ionBlur"===n&&(t=!1!==e.Nb(l,61)._handleBlurEvent(i.target)&&t),"ionChange"===n&&(t=!1!==e.Nb(l,61)._handleChangeEvent(i.target)&&t),"ionChange"===n&&(t=!1!==u.searchList()&&t),t}),r.Zb,r.P)),e.xb(60,49152,null,0,s.ab,[e.h,e.l,e.z],{color:[0,"color"],debounce:[1,"debounce"],dualKnobs:[2,"dualKnobs"],max:[3,"max"],min:[4,"min"],pin:[5,"pin"],step:[6,"step"]},null),e.xb(61,16384,null,0,s.Ob,[e.l],null,null),e.Sb(1024,null,h.m,(function(l){return[l]}),[s.Ob]),e.xb(63,671744,null,0,h.f,[[3,h.b],[8,null],[8,null],[6,h.m],[2,h.x]],{name:[0,"name"]},null),e.Sb(2048,null,h.n,null,[h.f]),e.xb(65,16384,null,0,h.o,[[4,h.n]],null,null),(l()(),e.yb(66,0,null,null,15,"ion-content",[["class","user-friends-content"]],null,null,null,r.yb,r.o)),e.xb(67,49152,null,0,s.v,[e.h,e.l,e.z],null,null),(l()(),e.yb(68,0,null,0,3,"ion-item-divider",[["sticky",""]],null,null,null,r.Kb,r.B)),e.xb(69,49152,null,0,s.J,[e.h,e.l,e.z],{sticky:[0,"sticky"]},null),(l()(),e.hb(16777216,null,0,1,null,L)),e.xb(71,16384,null,0,d.m,[e.P,e.M],{ngIf:[0,"ngIf"]},null),(l()(),e.hb(16777216,null,0,1,null,S)),e.xb(73,16384,null,0,d.m,[e.P,e.M],{ngIf:[0,"ngIf"]},null),(l()(),e.hb(16777216,null,0,1,null,k)),e.xb(75,16384,null,0,d.m,[e.P,e.M],{ngIf:[0,"ngIf"]},null),(l()(),e.hb(16777216,null,0,1,null,w)),e.xb(77,16384,null,0,d.m,[e.P,e.M],{ngIf:[0,"ngIf"]},null),(l()(),e.yb(78,0,null,0,3,"ion-infinite-scroll",[["threshold","100px"]],null,[[null,"ionInfinite"]],(function(l,n,i){var e=!0;return"ionInfinite"===n&&(e=!1!==l.component.loadData(i)&&e),e}),r.Ib,r.x)),e.xb(79,49152,[[1,4]],0,s.F,[e.h,e.l,e.z],{threshold:[0,"threshold"]},null),(l()(),e.yb(80,0,null,0,1,"ion-infinite-scroll-content",[["loadingSpinner","bubbles"],["loadingText","Espere un momento..."]],null,null,null,r.Hb,r.y)),e.xb(81,49152,null,0,s.G,[e.h,e.l,e.z],{loadingSpinner:[0,"loadingSpinner"],loadingText:[1,"loadingText"]},null)],(function(l,n){var i=n.component;l(n,4,0,"primary"),l(n,8,0,"categoriaformularioListPage"),l(n,9,0,"categoriaformularioListPage"),l(n,19,0,"refresh-circle-outline"),l(n,27,0,"",e.Fb(1,"",e.Yb(n,27,1,e.Nb(n,28).transform("BUSCARM")),"")),l(n,31,0,i.searchQuery),l(n,37,0,"secondary","clear"),l(n,40,0,"options"),l(n,43,0,i.rangeForm),l(n,49,0,"12"),l(n,58,0,"12"),l(n,60,0,"secondary","400","true","100","1","true","1"),l(n,63,0,"dual"),l(n,69,0,""),l(n,71,0,(null==i.itemsList?null:i.itemsList.length)>0),l(n,73,0,0===i.efecto),l(n,75,0,(null==i.itemsList?null:i.itemsList.length)>0&&"grid"===i.viewType),l(n,77,0,0==(null==i.itemsList?null:i.itemsList.length)),l(n,79,0,"100px"),l(n,81,0,"bubbles","Espere un momento...")}),(function(l,n){var i=n.component;l(n,12,0,i.tituloxx),l(n,15,0,e.Fb(1," ",e.Yb(n,15,0,e.Nb(n,17).transform("REFRESCARM")),"")),l(n,26,0,e.Nb(n,33).ngClassUntouched,e.Nb(n,33).ngClassTouched,e.Nb(n,33).ngClassPristine,e.Nb(n,33).ngClassDirty,e.Nb(n,33).ngClassValid,e.Nb(n,33).ngClassInvalid,e.Nb(n,33).ngClassPending),l(n,34,0,!i.showAgeFilter),l(n,36,0,e.Fb(1," ",e.Yb(n,36,0,e.Nb(n,38).transform("FILTROM")),"")),l(n,41,0,!i.showAgeFilter,e.Nb(n,45).ngClassUntouched,e.Nb(n,45).ngClassTouched,e.Nb(n,45).ngClassPristine,e.Nb(n,45).ngClassDirty,e.Nb(n,45).ngClassValid,e.Nb(n,45).ngClassInvalid,e.Nb(n,45).ngClassPending),l(n,52,0,i.rangeForm.controls.dual.value.lower),l(n,56,0,i.rangeForm.controls.dual.value.upper),l(n,59,0,e.Nb(n,65).ngClassUntouched,e.Nb(n,65).ngClassTouched,e.Nb(n,65).ngClassPristine,e.Nb(n,65).ngClassDirty,e.Nb(n,65).ngClassValid,e.Nb(n,65).ngClassInvalid,e.Nb(n,65).ngClassPending)}))}function P(l){return e.ac(0,[(l()(),e.yb(0,0,null,null,1,"page-formulariomovils-list",[],null,null,null,N,x)),e.xb(1,114688,null,0,f,[v.b,s.gb,y.m,m.a,s.b,a.l,s.Gb],null,null)],(function(l,n){l(n,1,0)}),null)}var _=e.ub("page-formulariomovils-list",f,P,{},{},[]),O=i("IheW"),M=i("ZpN7"),R=i("Kt/9"),F=i("j1ZV"),j=i("gMqc"),I=e.vb(t,[],(function(l){return e.Kb([e.Lb(512,e.j,e.Z,[[8,[u.c,o.a,_]],[3,e.j],e.x]),e.Lb(4608,d.o,d.n,[e.u]),e.Lb(4608,s.c,s.c,[e.z,e.g]),e.Lb(4608,s.Gb,s.Gb,[s.c,e.j,e.r]),e.Lb(4608,s.Lb,s.Lb,[s.c,e.j,e.r]),e.Lb(4608,h.w,h.w,[]),e.Lb(4608,O.i,O.o,[d.e,e.B,O.m]),e.Lb(4608,O.p,O.p,[O.i,O.n]),e.Lb(5120,O.a,(function(l){return[l]}),[O.p]),e.Lb(4608,O.l,O.l,[]),e.Lb(6144,O.j,null,[O.l]),e.Lb(4608,O.h,O.h,[O.j]),e.Lb(6144,O.b,null,[O.h]),e.Lb(4608,O.f,O.k,[O.b,e.r]),e.Lb(4608,O.c,O.c,[O.f]),e.Lb(5120,e.d,(function(l){return[M.b(l)]}),[R.a]),e.Lb(4608,h.d,h.d,[]),e.Lb(4608,a.h,a.g,[]),e.Lb(4608,a.d,a.f,[]),e.Lb(4608,a.j,a.e,[]),e.Lb(4608,a.c,a.b,[]),e.Lb(4608,a.l,a.l,[a.m,a.h,a.d,a.j,a.c,a.n,a.p,a.o,a.a]),e.Lb(1073742336,d.c,d.c,[]),e.Lb(1073742336,s.Cb,s.Cb,[]),e.Lb(1073742336,h.v,h.v,[]),e.Lb(1073742336,h.j,h.j,[]),e.Lb(1073742336,O.e,O.e,[]),e.Lb(1073742336,O.d,O.d,[]),e.Lb(1073742336,M.a,M.a,[]),e.Lb(1073742336,F.a,F.a,[]),e.Lb(1073742336,h.s,h.s,[]),e.Lb(1073742336,j.c,j.c,[]),e.Lb(1073742336,y.p,y.p,[[2,y.u],[2,y.m]]),e.Lb(1073742336,a.i,a.i,[]),e.Lb(1073742336,t,t,[]),e.Lb(256,O.m,"XSRF-TOKEN",[]),e.Lb(256,O.n,"X-XSRF-TOKEN",[]),e.Lb(1024,y.k,(function(){return[[{path:"",component:f}]]}),[]),e.Lb(256,a.p,void 0,[]),e.Lb(256,a.n,void 0,[]),e.Lb(256,a.o,void 0,[]),e.Lb(256,a.a,void 0,[])])}))}}]);