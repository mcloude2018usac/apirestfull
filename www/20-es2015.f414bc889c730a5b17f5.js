(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{JIV5:function(l,n,u){"use strict";u.r(n),u.d(n,"frmtareasprogramadasListPageModuleNgFactory",(function(){return B}));var t=u("8Y7J");class i{}var e=u("Xh6l"),o=u("pMnS"),a=u("MKJQ"),r=u("sZkV"),s=u("TSSN"),b=u("hQ+M"),c=u("Rg8G"),h=u("SVse"),d=u("iInd"),g=u("s7LF"),m=u("mrSG"),p=u("ZtEv"),f=u("jtHE"),y=u("gcOT");class v{constructor(l,n,u,t,i,e){this.routerOutlet=l,this.router=n,this.authenticationService=u,this.alertController=t,this.translateService=i,this.modalController=e,this.showAgeFilter=!1,this.showmenu=!1,this.items=[],this.variables=[],this.userinfo=[],this.viewType="grid",this.esvisible=!1,this.tituloxx="",this.efecto=0,this.seguro="",this.msg="",this.currentSegment="activa",this.searchSubject=new f.a(1),this.apifoto=this.authenticationService.getapifoto()}changeToList(){this.viewType="list"}changeToGrid(){this.viewType="grid"}ngOnInit(){console.log("dddddddddddddd"),this.router.getCurrentNavigation().extras.state?(this.variables=this.router.getCurrentNavigation().extras.state.variables,this.idllave=this.router.getCurrentNavigation().extras.state.idllave,this.tituloxx=this.variables?this.variables.nombre:"Mis tareas programadas"):(this.variables={idrol:"5f503beeeda4710798a79b8a",nivel:".",nombre:"Mis tareas programadas",pactualizacion:!0,pconsulta:!0,pcreacion:!0,peliminacion:!0,pfiltro:!0,pingreso:!0,potros1:"",preporte:!0},this.idllave="",this.tituloxx=this.variables.nombre),this.userinfo=this.authenticationService.getcopiauser(),this.geoposiciontxt=this.setCurrentLocationa33(),this.searchQuery="",this.translateService.get("SEGUROM").subscribe(l=>{this.seguro=l}),this.translateService.get("MSGM").subscribe(l=>{this.msg=l}),this.rangeForm=new g.g({dual:new g.e({lower:1,upper:100})}),this.authenticationService.authState4.subscribe(l=>{l&&this.pideregistros(this.currentSegment)})}ionViewDidEnter(){console.log("dddd")}ionViewWillEnter(){this.currentSegment="activa",this.pideregistros(this.currentSegment)}filterContacts(l){let n=l.detail.value;this.currentSegment=n,this.pideregistros(n)}pideregistros0(){this.pideregistros(this.currentSegment)}setCurrentLocationa33(){return Object(m.a)(this,void 0,void 0,(function*(){yield y.e.Geolocation.requestPermissions(),y.c.isPluginAvailable("Geolocation")?y.d.getCurrentPosition().then(l=>{this.geoposiciontxt=l.coords.latitude+"\xac"+l.coords.longitude}).catch(l=>{this.geoposiciontxt=""}):console.log("Plugin geolocation not available")}))}pideregistros(l){this.itemsList=[],this.efecto=0,this.authenticationService.getReg("todos/"+l+"/"+this.userinfo[0].idempresa._id+"/"+this.userinfo[0]._id+"/"+this.userinfo[0].role,"frmtareasprogramadass",0).then(l=>{this.efecto=1,this.items=l,this.itemsList=this.items},l=>{this.authenticationService.presentAlert(l.error,this.msg,"")})}searchList(){this.searchSubject.next({lower:this.rangeForm.controls.dual.value.lower,upper:this.rangeForm.controls.dual.value.upper,query:this.searchQuery}),this.itemsList=this.filterList(this.items,this.searchQuery&&null!==this.searchQuery?this.searchQuery:"")}filterList(l,n){return l.filter(l=>l.nombre.toLowerCase().includes(n.toLowerCase()))}otrasop(l){return Object(m.a)(this,void 0,void 0,(function*(){const n=yield this.alertController.create({cssClass:"my-custom-class",header:"Seleccione Opci\xf3n",inputs:[{name:"Productos",type:"radio",label:"Productos",checked:!0,value:"/ProductoListPage\xb0Productos ->"+l.nombre}],buttons:[{text:"Cancel",role:"cancel",cssClass:"secondary",handler:l=>{console.log(l)}},{text:"Ok",handler:n=>{var u=n.split("\xb0");this.router.navigate([u[0]],{state:{variables:this.variables,user:null,idllave:l._id,title:u[1]}})}}]});yield n.present()}))}deleteRecord(l){return Object(m.a)(this,void 0,void 0,(function*(){const n=yield this.alertController.create({header:this.seguro,message:"",buttons:[{text:"No",cssClass:"secondary",handler:l=>{}},{text:"Si",handler:()=>{this.authenticationService.deleteReg(l._id+"/"+this.userinfo[0].email+"/"+this.userinfo[0].idempresa._id+"/na","frmtareasprogramadass").then(l=>{this.pideregistros(this.currentSegment)},l=>{this.authenticationService.presentAlert(l.error,this.msg,"")})}}]});yield n.present()}))}updateRecord(l){return Object(m.a)(this,void 0,void 0,(function*(){this.router.navigate(["frmtareasprogramadasCreatePage"],{state:{geoposiciontxt:this.geoposiciontxt,variables:this.variables,record:l,userinfo:this.userinfo,idllave:this.idllave,title:this.tituloxx,esvisible:this.esvisible}})}))}loadData(l){setTimeout(()=>{l.target.complete(),1e3===this.items.length&&(l.target.disabled=!0)},500)}}var x=t.wb({encapsulation:0,styles:[["[_nghost-%COMP%]{--page-margin:var(--app-narrow-margin);--page-border-radius:var(--app-fair-radius);--page-segment-background:var(--app-background);--page-segment-indicator-height:2px}ion-item-divider[_ngcontent-%COMP%]{--background:var(--ion-color-light);--padding-start:var(--page-margin)}[_nghost-%COMP%]{--page-margin:var(--app-fair-margin);--page-background:var(--app-background);--page-background-shade:var(--app-background-shade);--page-tags-gutter:5px}.first-letter2[_ngcontent-%COMP%]{text-transform:capitalize;font-size:10px}.first-letter[_ngcontent-%COMP%]{text-transform:capitalize;font-size:14px}"]],data:{}});function z(l){return t.ac(0,[(l()(),t.yb(0,0,null,null,3,"ion-button",[],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.changeToList()&&t),t}),a.kb,a.e)),t.xb(1,49152,null,0,r.l,[t.h,t.l,t.z],null,null),(l()(),t.yb(2,0,null,0,1,"ion-icon",[["name","grid"],["slot","icon-only"]],null,null,null,a.Bb,a.v)),t.xb(3,49152,null,0,r.D,[t.h,t.l,t.z],{name:[0,"name"]},null)],(function(l,n){l(n,3,0,"grid")}),null)}function C(l){return t.ac(0,[(l()(),t.yb(0,0,null,null,3,"ion-button",[],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.changeToGrid()&&t),t}),a.kb,a.e)),t.xb(1,49152,null,0,r.l,[t.h,t.l,t.z],null,null),(l()(),t.yb(2,0,null,0,1,"ion-icon",[["name","list"],["slot","icon-only"]],null,null,null,a.Bb,a.v)),t.xb(3,49152,null,0,r.D,[t.h,t.l,t.z],{name:[0,"name"]},null)],(function(l,n){l(n,3,0,"list")}),null)}function k(l){return t.ac(0,[(l()(),t.yb(0,0,null,null,3,"ion-label",[],null,null,null,a.Jb,a.D)),t.xb(1,49152,null,0,r.O,[t.h,t.l,t.z],null,null),(l()(),t.Xb(2,0,["",": ",""])),t.Pb(131072,s.k,[s.l,t.h])],null,(function(l,n){var u=n.component;l(n,2,0,t.Yb(n,2,0,t.Nb(n,3).transform("NOREGISTROSM")),u.itemsList.length)}))}function L(l){return t.ac(0,[(l()(),t.yb(0,0,null,null,9,"ion-item",[["lines","none"]],null,null,null,a.Ib,a.A)),t.xb(1,49152,null,0,r.I,[t.h,t.l,t.z],{lines:[0,"lines"]},null),(l()(),t.yb(2,0,null,0,7,"ion-label",[],null,null,null,a.Jb,a.D)),t.xb(3,49152,null,0,r.O,[t.h,t.l,t.z],null,null),(l()(),t.yb(4,0,null,0,1,"skeleton-element",[],null,null,null,b.b,b.a)),t.xb(5,114688,null,0,c.a,[],null,null),(l()(),t.yb(6,0,null,0,1,"skeleton-element",[],null,null,null,b.b,b.a)),t.xb(7,114688,null,0,c.a,[],null,null),(l()(),t.yb(8,0,null,0,1,"skeleton-element",[["width","67%"]],null,null,null,b.b,b.a)),t.xb(9,114688,null,0,c.a,[],{width:[0,"width"]},null)],(function(l,n){l(n,1,0,"none"),l(n,5,0),l(n,7,0),l(n,9,0,"67%")}),null)}function w(l){return t.ac(0,[(l()(),t.yb(0,0,null,null,4,"ion-list",[],null,null,null,a.Lb,a.E)),t.xb(1,49152,null,0,r.P,[t.h,t.l,t.z],null,null),(l()(),t.hb(16777216,null,0,2,null,L)),t.xb(3,278528,null,0,h.l,[t.P,t.M,t.s],{ngForOf:[0,"ngForOf"]},null),t.Ob(4,7)],(function(l,n){var u=l(n,4,0,0,1,2,3,4,5,6);l(n,3,0,u)}),null)}function N(l){return t.ac(0,[(l()(),t.yb(0,0,null,null,1,"a",[["target","_blank"]],[[8,"href",4]],null,null,null,null)),(l()(),t.Xb(1,null,["geoposici\xf3n: ",""]))],null,(function(l,n){var u=t.Fb(1,"https://www.google.com/maps/search/?api=1&query=",n.parent.context.$implicit.geoposicion.replace("\xac",","),"");l(n,0,0,u);var i=n.parent.context.$implicit.geoposicion.replace("\xac",",");l(n,1,0,i)}))}function M(l){return t.ac(0,[(l()(),t.yb(0,0,null,null,33,"ion-item",[],null,[[null,"click"]],(function(l,n,u){var i=!0;return"click"===n&&(i=!1!==t.Nb(l,2).onClick()&&i),"click"===n&&(i=!1!==t.Nb(l,3).onClick(u)&&i),i}),a.Ib,a.A)),t.xb(1,49152,null,0,r.I,[t.h,t.l,t.z],null,null),t.xb(2,16384,null,0,d.n,[d.m,d.a,[8,null],t.E,t.l],null,null),t.xb(3,737280,null,0,r.Nb,[h.j,r.Hb,t.l,d.m,[2,d.n]],null,null),(l()(),t.yb(4,0,null,0,29,"ion-grid",[],null,null,null,a.zb,a.t)),t.xb(5,49152,null,0,r.B,[t.h,t.l,t.z],null,null),(l()(),t.yb(6,0,null,0,13,"ion-row",[],null,null,null,a.Tb,a.N)),t.xb(7,49152,null,0,r.hb,[t.h,t.l,t.z],null,null),(l()(),t.yb(8,0,null,0,11,"ion-col",[["size","12"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.updateRecord(l.context.$implicit)&&t),t}),a.tb,a.n)),t.xb(9,49152,null,0,r.u,[t.h,t.l,t.z],{size:[0,"size"]},null),(l()(),t.yb(10,0,null,0,9,"ion-label",[["class","ion-text-wrap"]],null,null,null,a.Jb,a.D)),t.xb(11,49152,null,0,r.O,[t.h,t.l,t.z],null,null),(l()(),t.yb(12,0,null,0,3,"ion-note",[["slot","end"]],null,null,null,a.Pb,a.J)),t.xb(13,49152,null,0,r.W,[t.h,t.l,t.z],null,null),(l()(),t.Xb(14,0,["Fecha Visita: "," "])),t.Rb(15,2),(l()(),t.yb(16,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),t.yb(17,0,null,0,1,"strong",[],null,null,null,null,null)),(l()(),t.Xb(18,null,["No visita:",""])),(l()(),t.yb(19,0,null,0,0,"div",[],[[8,"innerHTML",1]],null,null,null,null)),(l()(),t.yb(20,0,null,0,13,"ion-row",[],null,null,null,a.Tb,a.N)),t.xb(21,49152,null,0,r.hb,[t.h,t.l,t.z],null,null),(l()(),t.yb(22,0,null,0,11,"ion-col",[["size","12"]],null,null,null,a.tb,a.n)),t.xb(23,49152,null,0,r.u,[t.h,t.l,t.z],{size:[0,"size"]},null),(l()(),t.yb(24,0,null,0,9,"span",[],null,null,null,null,null)),(l()(),t.yb(25,0,null,null,8,"div",[["class","first-letter2"]],null,null,null,null,null)),(l()(),t.Xb(26,null,[" Creaci\xf3n [","-","]"])),t.Rb(27,2),(l()(),t.yb(28,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.Xb(29,null,[" Actualiza [","-","]"])),t.Rb(30,2),(l()(),t.yb(31,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.hb(16777216,null,null,1,null,N)),t.xb(33,16384,null,0,h.m,[t.P,t.M],{ngIf:[0,"ngIf"]},null)],(function(l,n){l(n,3,0),l(n,9,0,"12"),l(n,23,0,"12"),l(n,33,0,void 0!==n.context.$implicit.geoposicion&&""!==n.context.$implicit.geoposicion)}),(function(l,n){var u=t.Yb(n,14,0,l(n,15,0,t.Nb(n.parent.parent,0),n.context.$implicit.fechaasignada,"dd-MM-yyyy"));l(n,14,0,u),l(n,18,0,n.context.$implicit.novisita),l(n,19,0,n.context.$implicit.nombre);var i=n.context.$implicit.usuarionew,e=t.Yb(n,26,1,l(n,27,0,t.Nb(n.parent.parent,0),n.context.$implicit.createdAt,"dd-MM-yyyy, hh:mm aaa"));l(n,26,0,i,e);var o=n.context.$implicit.usuarioup,a=t.Yb(n,29,1,l(n,30,0,t.Nb(n.parent.parent,0),n.context.$implicit.updatedAt,"dd-MM-yyyy, hh:mm aaa"));l(n,29,0,o,a)}))}function S(l){return t.ac(0,[(l()(),t.yb(0,0,null,null,3,"ion-list",[],null,null,null,a.Lb,a.E)),t.xb(1,49152,null,0,r.P,[t.h,t.l,t.z],null,null),(l()(),t.hb(16777216,null,0,1,null,M)),t.xb(3,278528,null,0,h.l,[t.P,t.M,t.s],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){l(n,3,0,n.component.itemsList)}),null)}function P(l){return t.ac(0,[(l()(),t.yb(0,0,null,null,1,"a",[["target","_blank"]],[[8,"href",4]],null,null,null,null)),(l()(),t.Xb(1,null,["geoposici\xf3n: ",""]))],null,(function(l,n){var u=t.Fb(1,"https://www.google.com/maps/search/?api=1&query=",n.parent.context.$implicit.geoposicion.replace("\xac",","),"");l(n,0,0,u);var i=n.parent.context.$implicit.geoposicion.replace("\xac",",");l(n,1,0,i)}))}function O(l){return t.ac(0,[(l()(),t.yb(0,0,null,null,37,"ion-col",[["size","12"],["size-lg","6"],["size-sm","6"]],null,null,null,a.tb,a.n)),t.xb(1,49152,null,0,r.u,[t.h,t.l,t.z],{size:[0,"size"]},null),(l()(),t.yb(2,0,null,0,35,"ion-card",[],null,null,null,a.qb,a.g)),t.xb(3,49152,null,0,r.n,[t.h,t.l,t.z],null,null),(l()(),t.yb(4,0,null,0,8,"ion-row",[["class","user-stats-wrapper user-details-wrapper"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.updateRecord(l.context.$implicit)&&t),t}),a.Tb,a.N)),t.xb(5,49152,null,0,r.hb,[t.h,t.l,t.z],null,null),(l()(),t.yb(6,0,null,0,6,"ion-col",[],null,null,null,a.tb,a.n)),t.xb(7,49152,null,0,r.u,[t.h,t.l,t.z],null,null),(l()(),t.yb(8,0,null,0,1,"span",[["class","user-stat-value"]],null,null,null,null,null)),(l()(),t.Xb(-1,null,["Fecha Visita "])),(l()(),t.yb(10,0,null,0,2,"span",[["class","user-stat-name"]],null,null,null,null,null)),(l()(),t.Xb(11,null,[""," "])),t.Rb(12,2),(l()(),t.yb(13,0,null,0,8,"ion-item",[],null,[[null,"click"]],(function(l,n,u){var i=!0,e=l.component;return"click"===n&&(i=!1!==t.Nb(l,15).onClick()&&i),"click"===n&&(i=!1!==t.Nb(l,16).onClick(u)&&i),"click"===n&&(i=!1!==e.updateRecord(l.context.$implicit)&&i),i}),a.Ib,a.A)),t.xb(14,49152,null,0,r.I,[t.h,t.l,t.z],null,null),t.xb(15,16384,null,0,d.n,[d.m,d.a,[8,null],t.E,t.l],null,null),t.xb(16,737280,null,0,r.Nb,[h.j,r.Hb,t.l,d.m,[2,d.n]],null,null),(l()(),t.yb(17,0,null,0,4,"ion-label",[["class","ion-text-wrap"]],null,null,null,a.Jb,a.D)),t.xb(18,49152,null,0,r.O,[t.h,t.l,t.z],null,null),(l()(),t.yb(19,0,null,0,1,"strong",[],null,null,null,null,null)),(l()(),t.Xb(20,null,["No visita:",""])),(l()(),t.yb(21,0,null,0,0,"div",[],[[8,"innerHTML",1]],null,null,null,null)),(l()(),t.yb(22,0,null,0,1,"ion-card-content",[],null,null,null,a.mb,a.h)),t.xb(23,49152,null,0,r.o,[t.h,t.l,t.z],null,null),(l()(),t.yb(24,0,null,0,13,"ion-row",[["no-padding",""]],null,null,null,a.Tb,a.N)),t.xb(25,49152,null,0,r.hb,[t.h,t.l,t.z],null,null),(l()(),t.yb(26,0,null,0,11,"ion-col",[["size","12"]],null,null,null,a.tb,a.n)),t.xb(27,49152,null,0,r.u,[t.h,t.l,t.z],{size:[0,"size"]},null),(l()(),t.yb(28,0,null,0,9,"span",[],null,null,null,null,null)),(l()(),t.yb(29,0,null,null,8,"div",[["class","first-letter2"]],null,null,null,null,null)),(l()(),t.Xb(30,null,[" Creaci\xf3n [","-","]"])),t.Rb(31,2),(l()(),t.yb(32,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.Xb(33,null,[" Actualiza [","-","]"])),t.Rb(34,2),(l()(),t.yb(35,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.hb(16777216,null,null,1,null,P)),t.xb(37,16384,null,0,h.m,[t.P,t.M],{ngIf:[0,"ngIf"]},null)],(function(l,n){l(n,1,0,"12"),l(n,16,0),l(n,27,0,"12"),l(n,37,0,void 0!==n.context.$implicit.geoposicion&&""!==n.context.$implicit.geoposicion)}),(function(l,n){var u=t.Yb(n,11,0,l(n,12,0,t.Nb(n.parent.parent,0),n.context.$implicit.fechaasignada,"dd-MM-yyyy"));l(n,11,0,u),l(n,20,0,n.context.$implicit.novisita),l(n,21,0,n.context.$implicit.nombre);var i=n.context.$implicit.usuarionew,e=t.Yb(n,30,1,l(n,31,0,t.Nb(n.parent.parent,0),n.context.$implicit.createdAt,"dd-MM-yyyy, hh:mm aaa"));l(n,30,0,i,e);var o=n.context.$implicit.usuarioup,a=t.Yb(n,33,1,l(n,34,0,t.Nb(n.parent.parent,0),n.context.$implicit.updatedAt,"dd-MM-yyyy, hh:mm aaa"));l(n,33,0,o,a)}))}function I(l){return t.ac(0,[(l()(),t.yb(0,0,null,null,5,"ion-grid",[],null,null,null,a.zb,a.t)),t.xb(1,49152,null,0,r.B,[t.h,t.l,t.z],null,null),(l()(),t.yb(2,0,null,0,3,"ion-row",[],null,null,null,a.Tb,a.N)),t.xb(3,49152,null,0,r.hb,[t.h,t.l,t.z],null,null),(l()(),t.hb(16777216,null,0,1,null,O)),t.xb(5,278528,null,0,h.l,[t.P,t.M,t.s],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){l(n,5,0,n.component.itemsList)}),null)}function T(l){return t.ac(0,[(l()(),t.yb(0,0,null,null,2,"h3",[["class","empty-list-message"]],null,null,null,null,null)),(l()(),t.Xb(1,null,[" "," "])),t.Pb(131072,s.k,[s.l,t.h])],null,(function(l,n){l(n,1,0,t.Yb(n,1,0,t.Nb(n,2).transform("NODATOS")))}))}function A(l){return t.ac(0,[t.Pb(0,h.f,[t.u]),t.Tb(671088640,1,{infiniteScroll:0}),(l()(),t.yb(2,0,null,null,67,"ion-header",[],null,null,null,a.Ab,a.u)),t.xb(3,49152,null,0,r.C,[t.h,t.l,t.z],null,null),(l()(),t.yb(4,0,null,0,19,"ion-toolbar",[["color","primary"]],null,null,null,a.lc,a.fb)),t.xb(5,49152,null,0,r.Ab,[t.h,t.l,t.z],{color:[0,"color"]},null),(l()(),t.yb(6,0,null,0,3,"ion-buttons",[["slot","start"]],null,null,null,a.lb,a.f)),t.xb(7,49152,null,0,r.m,[t.h,t.l,t.z],null,null),(l()(),t.yb(8,0,null,0,1,"ion-menu-button",[],null,null,null,a.Mb,a.H)),t.xb(9,49152,null,0,r.S,[t.h,t.l,t.z],null,null),(l()(),t.yb(10,0,null,0,2,"ion-title",[],null,null,null,a.jc,a.db)),t.xb(11,49152,null,0,r.yb,[t.h,t.l,t.z],null,null),(l()(),t.Xb(12,0,[" "," "])),(l()(),t.yb(13,0,null,0,10,"ion-buttons",[["slot","end"]],null,null,null,a.lb,a.f)),t.xb(14,49152,null,0,r.m,[t.h,t.l,t.z],null,null),(l()(),t.yb(15,0,null,0,4,"ion-button",[],[[8,"title",0]],[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.pideregistros0()&&t),t}),a.kb,a.e)),t.xb(16,49152,null,0,r.l,[t.h,t.l,t.z],null,null),t.Pb(131072,s.k,[s.l,t.h]),(l()(),t.yb(18,0,null,0,1,"ion-icon",[["name","refresh-circle-outline"],["slot","icon-only"]],null,null,null,a.Bb,a.v)),t.xb(19,49152,null,0,r.D,[t.h,t.l,t.z],{name:[0,"name"]},null),(l()(),t.hb(16777216,null,0,1,null,z)),t.xb(21,16384,null,0,h.m,[t.P,t.M],{ngIf:[0,"ngIf"]},null),(l()(),t.hb(16777216,null,0,1,null,C)),t.xb(23,16384,null,0,h.m,[t.P,t.M],{ngIf:[0,"ngIf"]},null),(l()(),t.yb(24,0,null,0,45,"ion-toolbar",[["class","filters-toolbar"]],null,null,null,a.lc,a.fb)),t.xb(25,49152,null,0,r.Ab,[t.h,t.l,t.z],null,null),(l()(),t.yb(26,0,null,0,18,"ion-row",[["align-items-center",""],["class","searchbar-row"]],null,null,null,a.Tb,a.N)),t.xb(27,49152,null,0,r.hb,[t.h,t.l,t.z],null,null),(l()(),t.yb(28,0,null,0,9,"ion-col",[],null,null,null,a.tb,a.n)),t.xb(29,49152,null,0,r.u,[t.h,t.l,t.z],null,null),(l()(),t.yb(30,0,null,0,7,"ion-searchbar",[["animated",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionChange"],[null,"ionBlur"]],(function(l,n,u){var i=!0,e=l.component;return"ionBlur"===n&&(i=!1!==t.Nb(l,33)._handleBlurEvent(u.target)&&i),"ionChange"===n&&(i=!1!==t.Nb(l,33)._handleInputEvent(u.target)&&i),"ngModelChange"===n&&(i=!1!==(e.searchQuery=u)&&i),"ionChange"===n&&(i=!1!==e.searchList()&&i),i}),a.Ub,a.O)),t.xb(31,49152,null,0,r.ib,[t.h,t.l,t.z],{animated:[0,"animated"],placeholder:[1,"placeholder"]},null),t.Pb(131072,s.k,[s.l,t.h]),t.xb(33,16384,null,0,r.Pb,[t.l],null,null),t.Sb(1024,null,g.m,(function(l){return[l]}),[r.Pb]),t.xb(35,671744,null,0,g.q,[[8,null],[8,null],[8,null],[6,g.m]],{model:[0,"model"]},{update:"ngModelChange"}),t.Sb(2048,null,g.n,null,[g.q]),t.xb(37,16384,null,0,g.o,[[4,g.n]],null,null),(l()(),t.yb(38,0,null,0,6,"ion-col",[["class","call-to-action-col"]],[[8,"hidden",0]],null,null,a.tb,a.n)),t.xb(39,49152,null,0,r.u,[t.h,t.l,t.z],null,null),(l()(),t.yb(40,0,null,0,4,"ion-button",[["class","filters-btn"],["color","secondary"],["fill","clear"]],[[8,"title",0]],[[null,"click"]],(function(l,n,u){var t=!0,i=l.component;return"click"===n&&(t=0!=(i.showAgeFilter=!i.showAgeFilter)&&t),t}),a.kb,a.e)),t.xb(41,49152,null,0,r.l,[t.h,t.l,t.z],{color:[0,"color"],fill:[1,"fill"]},null),t.Pb(131072,s.k,[s.l,t.h]),(l()(),t.yb(43,0,null,0,1,"ion-icon",[["name","options"],["slot","icon-only"]],null,null,null,a.Bb,a.v)),t.xb(44,49152,null,0,r.D,[t.h,t.l,t.z],{name:[0,"name"]},null),(l()(),t.yb(45,0,null,0,24,"form",[["novalidate",""]],[[8,"hidden",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],(function(l,n,u){var i=!0;return"submit"===n&&(i=!1!==t.Nb(l,47).onSubmit(u)&&i),"reset"===n&&(i=!1!==t.Nb(l,47).onReset()&&i),i}),null,null)),t.xb(46,16384,null,0,g.y,[],null,null),t.xb(47,540672,null,0,g.h,[[8,null],[8,null]],{form:[0,"form"]},null),t.Sb(2048,null,g.b,null,[g.h]),t.xb(49,16384,null,0,g.p,[[4,g.b]],null,null),(l()(),t.yb(50,0,null,null,19,"ion-row",[["class","range-item-row"]],null,null,null,a.Tb,a.N)),t.xb(51,49152,null,0,r.hb,[t.h,t.l,t.z],null,null),(l()(),t.yb(52,0,null,0,8,"ion-col",[["size","12"]],null,null,null,a.tb,a.n)),t.xb(53,49152,null,0,r.u,[t.h,t.l,t.z],{size:[0,"size"]},null),(l()(),t.yb(54,0,null,0,6,"div",[["class","range-header"]],null,null,null,null,null)),(l()(),t.yb(55,0,null,null,1,"span",[["class","range-value"]],null,null,null,null,null)),(l()(),t.Xb(56,null,["",""])),(l()(),t.yb(57,0,null,null,1,"span",[["class","range-label"]],null,null,null,null,null)),(l()(),t.Xb(-1,null,["Filter by age"])),(l()(),t.yb(59,0,null,null,1,"span",[["class","range-value"]],null,null,null,null,null)),(l()(),t.Xb(60,null,["",""])),(l()(),t.yb(61,0,null,0,8,"ion-col",[["size","12"]],null,null,null,a.tb,a.n)),t.xb(62,49152,null,0,r.u,[t.h,t.l,t.z],{size:[0,"size"]},null),(l()(),t.yb(63,0,null,0,6,"ion-range",[["class","range-control"],["color","secondary"],["debounce","400"],["dualKnobs","true"],["formControlName","dual"],["max","100"],["min","1"],["pin","true"],["step","1"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionChange"],[null,"ionBlur"]],(function(l,n,u){var i=!0,e=l.component;return"ionBlur"===n&&(i=!1!==t.Nb(l,65)._handleBlurEvent(u.target)&&i),"ionChange"===n&&(i=!1!==t.Nb(l,65)._handleChangeEvent(u.target)&&i),"ionChange"===n&&(i=!1!==e.searchList()&&i),i}),a.Sb,a.M)),t.xb(64,49152,null,0,r.ab,[t.h,t.l,t.z],{color:[0,"color"],debounce:[1,"debounce"],dualKnobs:[2,"dualKnobs"],max:[3,"max"],min:[4,"min"],pin:[5,"pin"],step:[6,"step"]},null),t.xb(65,16384,null,0,r.Ob,[t.l],null,null),t.Sb(1024,null,g.m,(function(l){return[l]}),[r.Ob]),t.xb(67,671744,null,0,g.f,[[3,g.b],[8,null],[8,null],[6,g.m],[2,g.x]],{name:[0,"name"]},null),t.Sb(2048,null,g.n,null,[g.f]),t.xb(69,16384,null,0,g.o,[[4,g.n]],null,null),(l()(),t.yb(70,0,null,null,30,"ion-content",[["class","user-friends-content"]],null,null,null,a.ub,a.o)),t.xb(71,49152,null,0,r.v,[t.h,t.l,t.z],null,null),(l()(),t.yb(72,0,null,0,3,"ion-item-divider",[["sticky",""]],null,null,null,a.Gb,a.B)),t.xb(73,49152,null,0,r.J,[t.h,t.l,t.z],{sticky:[0,"sticky"]},null),(l()(),t.hb(16777216,null,0,1,null,k)),t.xb(75,16384,null,0,h.m,[t.P,t.M],{ngIf:[0,"ngIf"]},null),(l()(),t.yb(76,0,null,0,12,"ion-segment",[["value","activa"]],null,[[null,"ionChange"],[null,"ionBlur"]],(function(l,n,u){var i=!0,e=l.component;return"ionBlur"===n&&(i=!1!==t.Nb(l,79)._handleBlurEvent(u.target)&&i),"ionChange"===n&&(i=!1!==t.Nb(l,79)._handleChangeEvent(u.target)&&i),"ionChange"===n&&(i=!1!==e.filterContacts(u)&&i),i}),a.Wb,a.P)),t.Sb(5120,null,g.m,(function(l){return[l]}),[r.Ob]),t.xb(78,49152,null,0,r.jb,[t.h,t.l,t.z],{value:[0,"value"]},null),t.xb(79,16384,null,0,r.Ob,[t.l],null,null),(l()(),t.yb(80,0,null,0,2,"ion-segment-button",[["checked",""],["value","activa"]],null,null,null,a.Vb,a.Q)),t.xb(81,49152,null,0,r.kb,[t.h,t.l,t.z],{value:[0,"value"]},null),(l()(),t.Xb(-1,0,[" ACTIVAS "])),(l()(),t.yb(83,0,null,0,2,"ion-segment-button",[["checked",""],["value","autorizar"]],null,null,null,a.Vb,a.Q)),t.xb(84,49152,null,0,r.kb,[t.h,t.l,t.z],{value:[0,"value"]},null),(l()(),t.Xb(-1,0,[" SOLICITANDO AUTORIZACI\xd3N "])),(l()(),t.yb(86,0,null,0,2,"ion-segment-button",[["value","finalizada"]],null,null,null,a.Vb,a.Q)),t.xb(87,49152,null,0,r.kb,[t.h,t.l,t.z],{value:[0,"value"]},null),(l()(),t.Xb(-1,0,[" FINALIZADAS "])),(l()(),t.hb(16777216,null,0,1,null,w)),t.xb(90,16384,null,0,h.m,[t.P,t.M],{ngIf:[0,"ngIf"]},null),(l()(),t.hb(16777216,null,0,1,null,S)),t.xb(92,16384,null,0,h.m,[t.P,t.M],{ngIf:[0,"ngIf"]},null),(l()(),t.hb(16777216,null,0,1,null,I)),t.xb(94,16384,null,0,h.m,[t.P,t.M],{ngIf:[0,"ngIf"]},null),(l()(),t.hb(16777216,null,0,1,null,T)),t.xb(96,16384,null,0,h.m,[t.P,t.M],{ngIf:[0,"ngIf"]},null),(l()(),t.yb(97,0,null,0,3,"ion-infinite-scroll",[["threshold","100px"]],null,[[null,"ionInfinite"]],(function(l,n,u){var t=!0;return"ionInfinite"===n&&(t=!1!==l.component.loadData(u)&&t),t}),a.Eb,a.x)),t.xb(98,49152,[[1,4]],0,r.F,[t.h,t.l,t.z],{threshold:[0,"threshold"]},null),(l()(),t.yb(99,0,null,0,1,"ion-infinite-scroll-content",[["loadingSpinner","bubbles"],["loadingText","Espere un momento..."]],null,null,null,a.Db,a.y)),t.xb(100,49152,null,0,r.G,[t.h,t.l,t.z],{loadingSpinner:[0,"loadingSpinner"],loadingText:[1,"loadingText"]},null)],(function(l,n){var u=n.component;l(n,5,0,"primary"),l(n,19,0,"refresh-circle-outline"),l(n,21,0,"grid"===u.viewType),l(n,23,0,"list"===u.viewType),l(n,31,0,"",t.Fb(1,"",t.Yb(n,31,1,t.Nb(n,32).transform("BUSCARM")),"")),l(n,35,0,u.searchQuery),l(n,41,0,"secondary","clear"),l(n,44,0,"options"),l(n,47,0,u.rangeForm),l(n,53,0,"12"),l(n,62,0,"12"),l(n,64,0,"secondary","400","true","100","1","true","1"),l(n,67,0,"dual"),l(n,73,0,""),l(n,75,0,(null==u.itemsList?null:u.itemsList.length)>0),l(n,78,0,"activa"),l(n,81,0,"activa"),l(n,84,0,"autorizar"),l(n,87,0,"finalizada"),l(n,90,0,0===u.efecto),l(n,92,0,(null==u.itemsList?null:u.itemsList.length)>0&&"list"===u.viewType),l(n,94,0,(null==u.itemsList?null:u.itemsList.length)>0&&"grid"===u.viewType),l(n,96,0,0==(null==u.itemsList?null:u.itemsList.length)),l(n,98,0,"100px"),l(n,100,0,"bubbles","Espere un momento...")}),(function(l,n){var u=n.component;l(n,12,0,u.tituloxx),l(n,15,0,t.Fb(1," ",t.Yb(n,15,0,t.Nb(n,17).transform("REFRESCARM")),"")),l(n,30,0,t.Nb(n,37).ngClassUntouched,t.Nb(n,37).ngClassTouched,t.Nb(n,37).ngClassPristine,t.Nb(n,37).ngClassDirty,t.Nb(n,37).ngClassValid,t.Nb(n,37).ngClassInvalid,t.Nb(n,37).ngClassPending),l(n,38,0,!u.showAgeFilter),l(n,40,0,t.Fb(1," ",t.Yb(n,40,0,t.Nb(n,42).transform("FILTROM")),"")),l(n,45,0,!u.showAgeFilter,t.Nb(n,49).ngClassUntouched,t.Nb(n,49).ngClassTouched,t.Nb(n,49).ngClassPristine,t.Nb(n,49).ngClassDirty,t.Nb(n,49).ngClassValid,t.Nb(n,49).ngClassInvalid,t.Nb(n,49).ngClassPending),l(n,56,0,u.rangeForm.controls.dual.value.lower),l(n,60,0,u.rangeForm.controls.dual.value.upper),l(n,63,0,t.Nb(n,69).ngClassUntouched,t.Nb(n,69).ngClassTouched,t.Nb(n,69).ngClassPristine,t.Nb(n,69).ngClassDirty,t.Nb(n,69).ngClassValid,t.Nb(n,69).ngClassInvalid,t.Nb(n,69).ngClassPending)}))}function F(l){return t.ac(0,[(l()(),t.yb(0,0,null,null,1,"page-frmtareasprogramadas-list",[],null,null,null,A,x)),t.xb(1,114688,null,0,v,[r.gb,d.m,p.a,r.b,s.l,r.Gb],null,null)],(function(l,n){l(n,1,0)}),null)}var R=t.ub("page-frmtareasprogramadas-list",v,F,{},{},[]),_=u("IheW"),E=u("ZpN7"),$=u("Kt/9"),X=u("j1ZV"),j=u("gMqc"),B=t.vb(i,[],(function(l){return t.Kb([t.Lb(512,t.j,t.Z,[[8,[e.c,o.a,R]],[3,t.j],t.x]),t.Lb(4608,h.o,h.n,[t.u]),t.Lb(4608,r.c,r.c,[t.z,t.g]),t.Lb(4608,r.Gb,r.Gb,[r.c,t.j,t.r]),t.Lb(4608,r.Lb,r.Lb,[r.c,t.j,t.r]),t.Lb(4608,g.w,g.w,[]),t.Lb(4608,_.i,_.o,[h.e,t.B,_.m]),t.Lb(4608,_.p,_.p,[_.i,_.n]),t.Lb(5120,_.a,(function(l){return[l]}),[_.p]),t.Lb(4608,_.l,_.l,[]),t.Lb(6144,_.j,null,[_.l]),t.Lb(4608,_.h,_.h,[_.j]),t.Lb(6144,_.b,null,[_.h]),t.Lb(4608,_.f,_.k,[_.b,t.r]),t.Lb(4608,_.c,_.c,[_.f]),t.Lb(5120,t.d,(function(l){return[E.b(l)]}),[$.a]),t.Lb(4608,g.d,g.d,[]),t.Lb(4608,s.h,s.g,[]),t.Lb(4608,s.d,s.f,[]),t.Lb(4608,s.j,s.e,[]),t.Lb(4608,s.c,s.b,[]),t.Lb(4608,s.l,s.l,[s.m,s.h,s.d,s.j,s.c,s.n,s.p,s.o,s.a]),t.Lb(1073742336,h.c,h.c,[]),t.Lb(1073742336,r.Cb,r.Cb,[]),t.Lb(1073742336,g.v,g.v,[]),t.Lb(1073742336,g.j,g.j,[]),t.Lb(1073742336,_.e,_.e,[]),t.Lb(1073742336,_.d,_.d,[]),t.Lb(1073742336,E.a,E.a,[]),t.Lb(1073742336,X.a,X.a,[]),t.Lb(1073742336,g.s,g.s,[]),t.Lb(1073742336,j.c,j.c,[]),t.Lb(1073742336,d.p,d.p,[[2,d.u],[2,d.m]]),t.Lb(1073742336,s.i,s.i,[]),t.Lb(1073742336,i,i,[]),t.Lb(256,_.m,"XSRF-TOKEN",[]),t.Lb(256,_.n,"X-XSRF-TOKEN",[]),t.Lb(1024,d.k,(function(){return[[{path:"",component:v}]]}),[]),t.Lb(256,s.p,void 0,[]),t.Lb(256,s.n,void 0,[]),t.Lb(256,s.o,void 0,[]),t.Lb(256,s.a,void 0,[])])}))},Rg8G:function(l,n,u){"use strict";u.d(n,"a",(function(){return t}));class t{constructor(){this.width="100%",this.height="16px",this.borderRadius="0",this.rounded=!1,this.noAnimated=!1,this.inline=!1,this.styles={}}ngOnInit(){this.styles={width:this.width,height:this.height,borderRadius:this.borderRadius},this.rounded&&(this.styles.borderRadius="999em")}}},"hQ+M":function(l,n,u){"use strict";u.d(n,"a",(function(){return e})),u.d(n,"b",(function(){return o}));var t=u("8Y7J"),i=u("SVse"),e=(u("Rg8G"),t.wb({encapsulation:0,styles:[["[_nghost-%COMP%]{display:block}[_nghost-%COMP%]   .inline[_ngcontent-%COMP%], [inline][_nghost-%COMP%]{display:inline-block}[_nghost-%COMP%]   .no-animated[_ngcontent-%COMP%]{-webkit-animation:none!important;animation:none!important;background:hsla(0,0%,51%,.2)}.animated-background[_ngcontent-%COMP%], [_nghost-%COMP%]   div[_ngcontent-%COMP%]{-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-name:placeHolderShimmer;animation-name:placeHolderShimmer;-webkit-animation-timing-function:linear;animation-timing-function:linear;background:hsla(0,0%,51%,.2);background:linear-gradient(90deg,hsla(0,0%,51%,.2) 8%,hsla(0,0%,51%,.3) 18%,hsla(0,0%,51%,.2) 33%);background-size:800px 100px;position:relative}@-webkit-keyframes placeHolderShimmer{0%{background-position:-468px 0}to{background-position:468px 0}}@keyframes placeHolderShimmer{0%{background-position:-468px 0}to{background-position:468px 0}}"]],data:{}}));function o(l){return t.ac(0,[(l()(),t.yb(0,0,null,null,3,"div",[],null,null,null,null,null)),t.xb(1,278528,null,0,i.k,[t.s,t.t,t.l,t.E],{ngClass:[0,"ngClass"]},null),t.Qb(2,{"no-animated":0,inline:1}),t.xb(3,278528,null,0,i.p,[t.l,t.t,t.E],{ngStyle:[0,"ngStyle"]},null)],(function(l,n){var u=n.component,t=l(n,2,0,u.noAnimated,u.inline);l(n,1,0,t),l(n,3,0,u.styles)}),null)}}}]);