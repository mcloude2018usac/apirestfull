(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{Rg8G:function(n,e,l){"use strict";l.d(e,"a",(function(){return t}));class t{constructor(){this.width="100%",this.height="16px",this.borderRadius="0",this.rounded=!1,this.noAnimated=!1,this.inline=!1,this.styles={}}ngOnInit(){this.styles={width:this.width,height:this.height,borderRadius:this.borderRadius},this.rounded&&(this.styles.borderRadius="999em")}}},YKFW:function(n,e,l){"use strict";l.r(e),l.d(e,"categoriaformularioListPageModuleNgFactory",(function(){return A}));var t=l("8Y7J");class i{}var o=l("Xh6l"),r=l("pMnS"),a=l("MKJQ"),u=l("sZkV"),s=l("TSSN"),d=l("hQ+M"),c=l("Rg8G"),g=l("SVse"),m=l("s7LF"),h=l("mrSG"),f=l("ZtEv"),p=l("jtHE");class b{constructor(n,e,l,t,i,o){this.routerOutlet=n,this.router=e,this.authenticationService=l,this.alertController=t,this.translateService=i,this.modalController=o,this.showAgeFilter=!1,this.showmenu=!1,this.items=[],this.variables=[],this.userinfo=[],this.colort=["primary","secondary","tertiary","success","warning","danger","lightest","light","medium","dark","primary"],this.currentSegment2="formulario",this.viewType="grid",this.tituloxx="",this.efecto=0,this.seguro="",this.msg="",this.currentSegment="Todos",this.searchSubject=new p.a(1),this.apifoto=this.authenticationService.getapifoto()}changeToList(){this.viewType="list"}changeToGrid(){this.viewType="grid"}filterContacts2(n){this.currentSegment2=n.detail.value,this.pideregistros(this.currentSegment,this.currentSegment2)}ngOnInit(){this.router.getCurrentNavigation().extras.state?(this.variables=this.router.getCurrentNavigation().extras.state.variables,this.idllave=this.router.getCurrentNavigation().extras.state.idllave,this.currentSegment2="formulario",this.tituloxx=this.variables?this.variables.nombre:this.authenticationService.datraduccion("migestiones")):(this.variables={idrol:"5f503beeeda4710798a79b8a",nivel:".",nombre:this.authenticationService.datraduccion("migestiones"),pactualizacion:!0,pconsulta:!0,pcreacion:!0,peliminacion:!0,pfiltro:!0,pingreso:!0,potros1:"",preporte:!0},this.idllave="",this.tituloxx=this.variables.nombre),this.userinfo=this.authenticationService.getcopiauser(),this.searchQuery="",this.translateService.get("SEGUROM").subscribe(n=>{this.seguro=n}),this.translateService.get("MSGM").subscribe(n=>{this.msg=n}),this.rangeForm=new m.g({dual:new m.e({lower:1,upper:100})}),this.currentSegment="todos",this.pideregistros(this.currentSegment,this.currentSegment2)}filterContacts(n){this.currentSegment=n.detail.value,this.pideregistros(this.currentSegment,this.currentSegment2)}pideregistros0(){this.pideregistros(this.currentSegment,this.currentSegment2)}pideregistros(n,e){this.itemsList=[],this.efecto=0;let l="";l="Administrador"===this.userinfo[0].role||"admin"===this.userinfo[0].role.substring(0,5)?this.userinfo[0].idempresa._id+"/categoriausrmoviladmin/"+this.userinfo[0]._id+"/"+e:this.userinfo[0].idempresa._id+"/categoriausrmovil/"+this.userinfo[0]._id+"/"+e,this.authenticationService.getReg(l,"catusuarios",0).then(n=>{this.efecto=1,this.items=n,this.itemsList=this.items},n=>{this.authenticationService.presentAlert(n.error,this.msg,"")})}searchList(){this.searchSubject.next({lower:this.rangeForm.controls.dual.value.lower,upper:this.rangeForm.controls.dual.value.upper,query:this.searchQuery}),this.itemsList=this.filterList(this.items,this.searchQuery&&null!==this.searchQuery?this.searchQuery:"")}filterList(n,e){return n.filter(n=>n.nombre.toLowerCase().includes(e.toLowerCase()))}otrasop(n){return Object(h.a)(this,void 0,void 0,(function*(){const e=yield this.alertController.create({cssClass:"my-custom-class",header:this.authenticationService.datraduccion("sel_opcion"),inputs:[{name:"Productos",type:"radio",label:"Productos",checked:!0,value:"/ProductoListPage\xb0Productos ->"+n.nombre}],buttons:[{text:"Cancel",role:"cancel",cssClass:"secondary",handler:n=>{}},{text:"Ok",handler:e=>{const l=e.split("\xb0");this.router.navigate([l[0]],{state:{variables:this.variables,user:null,idllave:n._id,title:l[1]}})}}]});yield e.present()}))}dacolor(n){return this.colort[n]}updateRecord(n){return Object(h.a)(this,void 0,void 0,(function*(){let e="";if("paginas"===n.tipo){e="proceso"===this.currentSegment2?"Mis gestiones":n.nombre;const l={state:{variables:this.variables,user:null,idllave:n._id,tipo:this.currentSegment2,idcategoria:n.nombre,title:this.authenticationService.datraduccion("mis")+" "+this.authenticationService.datraduccion(this.currentSegment2)}};this.router.navigate([n.link],l)}else{e="proceso"===this.currentSegment2?"Mis gestiones":"Mis modulos";const l={state:{variables:this.variables,user:null,idllave:n._id,tipo:this.currentSegment2,idcategoria:n.nombre,title:this.authenticationService.datraduccion("mis")+" "+this.authenticationService.datraduccion(this.currentSegment2)}};this.router.navigate(["formulariomovilsListPage"],l)}}))}loadData(n){setTimeout(()=>{n.target.complete(),1e3===this.items.length&&(n.target.disabled=!0)},500)}}var v=l("iInd"),C=t["\u0275crt"]({encapsulation:0,styles:[["[_nghost-%COMP%]{--page-margin:var(--app-narrow-margin);--page-border-radius:var(--app-fair-radius);--page-segment-background:var(--app-background);--page-segment-indicator-height:2px}ion-item-divider[_ngcontent-%COMP%]{--background:var(--ion-color-light);--padding-start:var(--page-margin)}[_nghost-%COMP%]{--page-margin:var(--app-fair-margin);--page-background:var(--app-background);--page-background-shade:var(--app-background-shade);--page-tags-gutter:5px}ion-card[_ngcontent-%COMP%]{position:relative;text-align:center;display:inline-block;border-radius:8px}.card-title[_ngcontent-%COMP%]{top:36%;font-size:1.5em;font-weight:700}.card-subtitle[_ngcontent-%COMP%], .card-title[_ngcontent-%COMP%]{position:absolute;width:100%;color:#fff}.card-subtitle[_ngcontent-%COMP%]{font-size:1em;top:52%}body[_ngcontent-%COMP%]{font-family:arial}table[_ngcontent-%COMP%]{border:1px solid #ccc;width:100%;margin:0;padding:0;border-collapse:collapse;border-spacing:0}table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{border:1px solid #ddd;padding:5px}table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{padding:10px;text-align:left}table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{text-transform:uppercase;font-size:14px;letter-spacing:1px}@media screen and (max-width:600px){table[_ngcontent-%COMP%]{border:0}table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]{display:none}table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{margin-bottom:10px;display:block;border-bottom:2px solid #ddd}table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{display:block;text-align:right;font-size:13px;border-bottom:1px dotted #ccc}table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child{border-bottom:0}table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:before{content:attr(data-label);float:left;text-transform:uppercase;font-weight:700}}.category-list[_ngcontent-%COMP%]{padding:8px;display:flex;flex-wrap:wrap}.category-list[_ngcontent-%COMP%]   .category-item[_ngcontent-%COMP%]{margin:8px;background-color:var(--ion-color-dark-tint);position:relative;border-radius:4px;overflow:hidden;width:150px;height:220px;color:#fff}.category-list[_ngcontent-%COMP%]   .category-item.color-2[_ngcontent-%COMP%]{background-color:#8da4b0}.category-list[_ngcontent-%COMP%]   .category-item.color-3[_ngcontent-%COMP%]{background-color:#5a8a79}.category-list[_ngcontent-%COMP%]   .category-item.color-4[_ngcontent-%COMP%]{background-color:#e06943}.category-list[_ngcontent-%COMP%]   .category-item[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{position:absolute;left:0;top:0;right:0;padding:12px;font-weight:700;font-size:12px;z-index:2;letter-spacing:.5px;text-shadow:0 2px 8px rgba(0,0,0,.2)}.category-list[_ngcontent-%COMP%]   .category-item[_ngcontent-%COMP%]   .card-thumbnail[_ngcontent-%COMP%]{background:url(form.a7f5f2405fb9f8681580.png) no-repeat 50%}.category-list[_ngcontent-%COMP%]   .category-item[_ngcontent-%COMP%]   .card-thumbnail[_ngcontent-%COMP%], .category-list[_ngcontent-%COMP%]   .category-item[_ngcontent-%COMP%]   .card-thumbnail2[_ngcontent-%COMP%]{width:90px;height:90px;position:absolute;top:126px;right:-26px;z-index:1;transform:rotate(21deg);box-shadow:0 2px 8px rgba(0,0,0,.2)}.category-list[_ngcontent-%COMP%]   .category-item[_ngcontent-%COMP%]   .card-thumbnail2[_ngcontent-%COMP%]{background:url(process.6fa50715a75c5eb45293.png) no-repeat 50%}.category-list[_ngcontent-%COMP%]   .category-item[_ngcontent-%COMP%]   .card-thumbnail3[_ngcontent-%COMP%]{background:url(formdet.8fe0d851af3dfd958feb.jpg) no-repeat 50%}.category-list[_ngcontent-%COMP%]   .category-item[_ngcontent-%COMP%]   .card-thumbnail3[_ngcontent-%COMP%], .category-list[_ngcontent-%COMP%]   .category-item[_ngcontent-%COMP%]   .card-thumbnail4[_ngcontent-%COMP%]{width:90px;height:90px;position:absolute;top:126px;right:-26px;z-index:1;transform:rotate(21deg);box-shadow:0 2px 8px rgba(0,0,0,.2)}.category-list[_ngcontent-%COMP%]   .category-item[_ngcontent-%COMP%]   .card-thumbnail4[_ngcontent-%COMP%]{background:url(report.779550ef295c4435fc2f.jpg) no-repeat 50%}"]],data:{}});function R(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,5,"ion-label",[],null,null,null,a.Mb,a.E)),t["\u0275did"](1,49152,null,0,u.O,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275ted"](2,0,[""," "," "," ",""])),t["\u0275pid"](131072,s.k,[s.l,t.ChangeDetectorRef]),t["\u0275pid"](131072,s.k,[s.l,t.ChangeDetectorRef]),t["\u0275pid"](131072,s.k,[s.l,t.ChangeDetectorRef])],null,(function(n,e){var l=e.component;n(e,2,0,t["\u0275unv"](e,2,0,t["\u0275nov"](e,3).transform("NOREGISTROSM")),l.itemsList.length,t["\u0275unv"](e,2,2,t["\u0275nov"](e,4).transform("NOREGISTROSM2")),t["\u0275unv"](e,2,3,t["\u0275nov"](e,5).transform("NOREGISTROSM33")))}))}function O(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,5,"ion-label",[],null,null,null,a.Mb,a.E)),t["\u0275did"](1,49152,null,0,u.O,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275ted"](2,0,[""," "," ","s ","s"])),t["\u0275pid"](131072,s.k,[s.l,t.ChangeDetectorRef]),t["\u0275pid"](131072,s.k,[s.l,t.ChangeDetectorRef]),t["\u0275pid"](131072,s.k,[s.l,t.ChangeDetectorRef])],null,(function(n,e){var l=e.component;n(e,2,0,t["\u0275unv"](e,2,0,t["\u0275nov"](e,3).transform("NOREGISTROSM")),l.itemsList.length,t["\u0275unv"](e,2,2,t["\u0275nov"](e,4).transform("NOREGISTROSM2")),t["\u0275unv"](e,2,3,t["\u0275nov"](e,5).transform("NOREGISTROSM33")))}))}function M(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,9,"ion-item",[["lines","none"]],null,null,null,a.Lb,a.A)),t["\u0275did"](1,49152,null,0,u.I,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{lines:[0,"lines"]},null),(n()(),t["\u0275eld"](2,0,null,0,7,"ion-label",[["class","ion-text-wrap"]],null,null,null,a.Mb,a.E)),t["\u0275did"](3,49152,null,0,u.O,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](4,0,null,0,1,"skeleton-element",[],null,null,null,d.b,d.a)),t["\u0275did"](5,114688,null,0,c.a,[],null,null),(n()(),t["\u0275eld"](6,0,null,0,1,"skeleton-element",[],null,null,null,d.b,d.a)),t["\u0275did"](7,114688,null,0,c.a,[],null,null),(n()(),t["\u0275eld"](8,0,null,0,1,"skeleton-element",[["width","67%"]],null,null,null,d.b,d.a)),t["\u0275did"](9,114688,null,0,c.a,[],{width:[0,"width"]},null)],(function(n,e){n(e,1,0,"none"),n(e,5,0),n(e,7,0),n(e,9,0,"67%")}),null)}function y(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,4,"ion-list",[],null,null,null,a.Ob,a.F)),t["\u0275did"](1,49152,null,0,u.P,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275and"](16777216,null,0,2,null,M)),t["\u0275did"](3,278528,null,0,g.NgForOf,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),t["\u0275pad"](4,7)],(function(n,e){var l=n(e,4,0,0,1,2,3,4,5,6);n(e,3,0,l)}),null)}function P(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,0,"div",[["class","card-thumbnail"]],null,null,null,null,null))],null,null)}function _(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,0,"div",[["class","card-thumbnail2"]],null,null,null,null,null))],null,null)}function x(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,0,"div",[["class","card-thumbnail4"]],null,null,null,null,null))],null,null)}function k(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,9,"div",[["class","category-item"]],null,[[null,"click"]],(function(n,e,l){var t=!0;return"click"===e&&(t=!1!==n.component.updateRecord(n.context.$implicit)&&t),t}),null,null)),(n()(),t["\u0275eld"](1,0,null,null,1,"div",[["class","title"]],null,null,null,null,null)),(n()(),t["\u0275ted"](2,null,[" "," "])),(n()(),t["\u0275eld"](3,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),t["\u0275and"](16777216,null,null,1,null,P)),t["\u0275did"](5,16384,null,0,g.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["\u0275and"](16777216,null,null,1,null,_)),t["\u0275did"](7,16384,null,0,g.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["\u0275and"](16777216,null,null,1,null,x)),t["\u0275did"](9,16384,null,0,g.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null)],(function(n,e){var l=e.component;n(e,5,0,"formulario"===l.currentSegment2),n(e,7,0,"proceso"===l.currentSegment2),n(e,9,0,"reportes"===l.currentSegment2)}),(function(n,e){n(e,2,0,e.context.$implicit.nombre)}))}function S(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,2,"div",[["class","category-list"]],null,null,null,null,null)),(n()(),t["\u0275and"](16777216,null,null,1,null,k)),t["\u0275did"](2,278528,null,0,g.NgForOf,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"]},null)],(function(n,e){n(e,2,0,e.component.itemsList)}),null)}function w(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,2,"h3",[["class","empty-list-message"]],null,null,null,null,null)),(n()(),t["\u0275ted"](1,null,[" "," "])),t["\u0275pid"](131072,s.k,[s.l,t.ChangeDetectorRef])],null,(function(n,e){n(e,1,0,t["\u0275unv"](e,1,0,t["\u0275nov"](e,2).transform("NODATOS")))}))}function D(n){return t["\u0275vid"](0,[t["\u0275qud"](671088640,1,{infiniteScroll:0}),(n()(),t["\u0275eld"](1,0,null,null,38,"ion-header",[],null,null,null,a.Cb,a.u)),t["\u0275did"](2,49152,null,0,u.C,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](3,0,null,0,15,"ion-toolbar",[["color","primary"]],null,null,null,a.oc,a.gb)),t["\u0275did"](4,49152,null,0,u.Ab,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{color:[0,"color"]},null),(n()(),t["\u0275eld"](5,0,null,0,3,"ion-buttons",[["slot","start"]],null,null,null,a.nb,a.f)),t["\u0275did"](6,49152,null,0,u.m,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](7,0,null,0,1,"ion-menu-button",[],null,null,null,a.Pb,a.I)),t["\u0275did"](8,49152,null,0,u.S,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](9,0,null,0,2,"ion-title",[["size","small"]],null,null,null,a.mc,a.eb)),t["\u0275did"](10,49152,null,0,u.yb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{size:[0,"size"]},null),(n()(),t["\u0275ted"](11,0,[" "," "])),(n()(),t["\u0275eld"](12,0,null,0,6,"ion-buttons",[["collapse","true"],["slot","end"]],null,null,null,a.nb,a.f)),t["\u0275did"](13,49152,null,0,u.m,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{collapse:[0,"collapse"]},null),(n()(),t["\u0275eld"](14,0,null,0,4,"ion-button",[],[[8,"title",0]],[[null,"click"]],(function(n,e,l){var t=!0;return"click"===e&&(t=!1!==n.component.pideregistros0()&&t),t}),a.mb,a.e)),t["\u0275did"](15,49152,null,0,u.l,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),t["\u0275pid"](131072,s.k,[s.l,t.ChangeDetectorRef]),(n()(),t["\u0275eld"](17,0,null,0,1,"ion-icon",[["name","refresh-circle-outline"],["slot","icon-only"]],null,null,null,a.Db,a.v)),t["\u0275did"](18,49152,null,0,u.D,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{name:[0,"name"]},null),(n()(),t["\u0275eld"](19,0,null,0,20,"ion-toolbar",[["class","filters-toolbar"]],null,null,null,a.oc,a.gb)),t["\u0275did"](20,49152,null,0,u.Ab,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](21,0,null,0,18,"ion-row",[["align-items-center",""],["class","searchbar-row"]],null,null,null,a.Wb,a.O)),t["\u0275did"](22,49152,null,0,u.hb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](23,0,null,0,9,"ion-col",[],null,null,null,a.vb,a.n)),t["\u0275did"](24,49152,null,0,u.u,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](25,0,null,0,7,"ion-searchbar",[["animated",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionChange"],[null,"ionBlur"]],(function(n,e,l){var i=!0,o=n.component;return"ionBlur"===e&&(i=!1!==t["\u0275nov"](n,28)._handleBlurEvent(l.target)&&i),"ionChange"===e&&(i=!1!==t["\u0275nov"](n,28)._handleInputEvent(l.target)&&i),"ngModelChange"===e&&(i=!1!==(o.searchQuery=l)&&i),"ionChange"===e&&(i=!1!==o.searchList()&&i),i}),a.Xb,a.P)),t["\u0275did"](26,49152,null,0,u.ib,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{animated:[0,"animated"],placeholder:[1,"placeholder"]},null),t["\u0275pid"](131072,s.k,[s.l,t.ChangeDetectorRef]),t["\u0275did"](28,16384,null,0,u.Pb,[t.ElementRef],null,null),t["\u0275prd"](1024,null,m.m,(function(n){return[n]}),[u.Pb]),t["\u0275did"](30,671744,null,0,m.q,[[8,null],[8,null],[8,null],[6,m.m]],{model:[0,"model"]},{update:"ngModelChange"}),t["\u0275prd"](2048,null,m.n,null,[m.q]),t["\u0275did"](32,16384,null,0,m.o,[[4,m.n]],null,null),(n()(),t["\u0275eld"](33,0,null,0,6,"ion-col",[["class","call-to-action-col"]],[[8,"hidden",0]],null,null,a.vb,a.n)),t["\u0275did"](34,49152,null,0,u.u,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](35,0,null,0,4,"ion-button",[["class","filters-btn"],["color","secondary"],["fill","clear"]],[[8,"title",0]],[[null,"click"]],(function(n,e,l){var t=!0,i=n.component;return"click"===e&&(t=0!=(i.showAgeFilter=!i.showAgeFilter)&&t),t}),a.mb,a.e)),t["\u0275did"](36,49152,null,0,u.l,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{color:[0,"color"],fill:[1,"fill"]},null),t["\u0275pid"](131072,s.k,[s.l,t.ChangeDetectorRef]),(n()(),t["\u0275eld"](38,0,null,0,1,"ion-icon",[["name","options"],["slot","icon-only"]],null,null,null,a.Db,a.v)),t["\u0275did"](39,49152,null,0,u.D,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{name:[0,"name"]},null),(n()(),t["\u0275eld"](40,0,null,null,48,"ion-content",[["class","user-friends-content"]],null,null,null,a.wb,a.o)),t["\u0275did"](41,49152,null,0,u.v,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](42,0,null,0,5,"ion-item-divider",[["sticky",""]],null,null,null,a.Ib,a.B)),t["\u0275did"](43,49152,null,0,u.J,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{sticky:[0,"sticky"]},null),(n()(),t["\u0275and"](16777216,null,0,1,null,R)),t["\u0275did"](45,16384,null,0,g.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["\u0275and"](16777216,null,0,1,null,O)),t["\u0275did"](47,16384,null,0,g.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["\u0275eld"](48,0,null,0,29,"ion-item-divider",[["sticky",""]],null,null,null,a.Ib,a.B)),t["\u0275did"](49,49152,null,0,u.J,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{sticky:[0,"sticky"]},null),(n()(),t["\u0275eld"](50,0,null,0,27,"ion-segment",[["color","secondary"],["value","formulario"]],null,[[null,"ionChange"],[null,"ionBlur"]],(function(n,e,l){var i=!0,o=n.component;return"ionBlur"===e&&(i=!1!==t["\u0275nov"](n,53)._handleBlurEvent(l.target)&&i),"ionChange"===e&&(i=!1!==t["\u0275nov"](n,53)._handleChangeEvent(l.target)&&i),"ionChange"===e&&(i=!1!==o.filterContacts2(l)&&i),i}),a.Zb,a.Q)),t["\u0275prd"](5120,null,m.m,(function(n){return[n]}),[u.Ob]),t["\u0275did"](52,49152,null,0,u.jb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{color:[0,"color"],value:[1,"value"]},null),t["\u0275did"](53,16384,null,0,u.Ob,[t.ElementRef],null,null),(n()(),t["\u0275eld"](54,0,null,0,7,"ion-segment-button",[["checked",""],["layout","icon-bottom"],["value","formulario"]],null,null,null,a.Yb,a.R)),t["\u0275did"](55,49152,null,0,u.kb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{layout:[0,"layout"],value:[1,"value"]},null),(n()(),t["\u0275eld"](56,0,null,0,3,"ion-label",[["class","ion-text-wrap"]],null,null,null,a.Mb,a.E)),t["\u0275did"](57,49152,null,0,u.O,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275ted"](58,0,[""," "])),t["\u0275pid"](131072,s.k,[s.l,t.ChangeDetectorRef]),(n()(),t["\u0275eld"](60,0,null,0,1,"ion-icon",[["name","reader-outline"]],null,null,null,a.Db,a.v)),t["\u0275did"](61,49152,null,0,u.D,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{name:[0,"name"]},null),(n()(),t["\u0275eld"](62,0,null,0,7,"ion-segment-button",[["layout","icon-bottom"],["value","proceso"]],null,null,null,a.Yb,a.R)),t["\u0275did"](63,49152,null,0,u.kb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{layout:[0,"layout"],value:[1,"value"]},null),(n()(),t["\u0275eld"](64,0,null,0,3,"ion-label",[["class","ion-text-wrap"]],null,null,null,a.Mb,a.E)),t["\u0275did"](65,49152,null,0,u.O,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275ted"](66,0,[""," "])),t["\u0275pid"](131072,s.k,[s.l,t.ChangeDetectorRef]),(n()(),t["\u0275eld"](68,0,null,0,1,"ion-icon",[["name","cube-outline"]],null,null,null,a.Db,a.v)),t["\u0275did"](69,49152,null,0,u.D,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{name:[0,"name"]},null),(n()(),t["\u0275eld"](70,0,null,0,7,"ion-segment-button",[["layout","icon-bottom"],["value","reportes"]],null,null,null,a.Yb,a.R)),t["\u0275did"](71,49152,null,0,u.kb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{layout:[0,"layout"],value:[1,"value"]},null),(n()(),t["\u0275eld"](72,0,null,0,3,"ion-label",[["class","ion-text-wrap"]],null,null,null,a.Mb,a.E)),t["\u0275did"](73,49152,null,0,u.O,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275ted"](74,0,[""," "])),t["\u0275pid"](131072,s.k,[s.l,t.ChangeDetectorRef]),(n()(),t["\u0275eld"](76,0,null,0,1,"ion-icon",[["name","document-outline"]],null,null,null,a.Db,a.v)),t["\u0275did"](77,49152,null,0,u.D,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{name:[0,"name"]},null),(n()(),t["\u0275and"](16777216,null,0,1,null,y)),t["\u0275did"](79,16384,null,0,g.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["\u0275and"](16777216,null,0,1,null,S)),t["\u0275did"](81,16384,null,0,g.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["\u0275and"](16777216,null,0,1,null,w)),t["\u0275did"](83,16384,null,0,g.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["\u0275eld"](84,0,null,0,4,"ion-infinite-scroll",[["threshold","100px"]],null,[[null,"ionInfinite"]],(function(n,e,l){var t=!0;return"ionInfinite"===e&&(t=!1!==n.component.loadData(l)&&t),t}),a.Gb,a.x)),t["\u0275did"](85,49152,[[1,4]],0,u.F,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{threshold:[0,"threshold"]},null),(n()(),t["\u0275eld"](86,0,null,0,2,"ion-infinite-scroll-content",[["loadingSpinner","bubbles"]],null,null,null,a.Fb,a.y)),t["\u0275did"](87,49152,null,0,u.G,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{loadingSpinner:[0,"loadingSpinner"],loadingText:[1,"loadingText"]},null),t["\u0275pid"](131072,s.k,[s.l,t.ChangeDetectorRef])],(function(n,e){var l=e.component;n(e,4,0,"primary"),n(e,10,0,"small"),n(e,13,0,"true"),n(e,18,0,"refresh-circle-outline"),n(e,26,0,"",t["\u0275inlineInterpolate"](1,"",t["\u0275unv"](e,26,1,t["\u0275nov"](e,27).transform("BUSCARM")),"")),n(e,30,0,l.searchQuery),n(e,36,0,"secondary","clear"),n(e,39,0,"options"),n(e,43,0,""),n(e,45,0,1===(null==l.itemsList?null:l.itemsList.length)),n(e,47,0,(null==l.itemsList?null:l.itemsList.length)>1),n(e,49,0,""),n(e,52,0,"secondary","formulario"),n(e,55,0,"icon-bottom","formulario"),n(e,61,0,"reader-outline"),n(e,63,0,"icon-bottom","proceso"),n(e,69,0,"cube-outline"),n(e,71,0,"icon-bottom","reportes"),n(e,77,0,"document-outline"),n(e,79,0,0===l.efecto),n(e,81,0,(null==l.itemsList?null:l.itemsList.length)>0&&"grid"===l.viewType),n(e,83,0,0==(null==l.itemsList?null:l.itemsList.length)),n(e,85,0,"100px"),n(e,87,0,"bubbles",t["\u0275inlineInterpolate"](1,"",t["\u0275unv"](e,87,1,t["\u0275nov"](e,88).transform("espere")),"\n     "))}),(function(n,e){var l=e.component;n(e,11,0,l.tituloxx),n(e,14,0,t["\u0275inlineInterpolate"](1," ",t["\u0275unv"](e,14,0,t["\u0275nov"](e,16).transform("REFRESCARM")),"")),n(e,25,0,t["\u0275nov"](e,32).ngClassUntouched,t["\u0275nov"](e,32).ngClassTouched,t["\u0275nov"](e,32).ngClassPristine,t["\u0275nov"](e,32).ngClassDirty,t["\u0275nov"](e,32).ngClassValid,t["\u0275nov"](e,32).ngClassInvalid,t["\u0275nov"](e,32).ngClassPending),n(e,33,0,!l.showAgeFilter),n(e,35,0,t["\u0275inlineInterpolate"](1," ",t["\u0275unv"](e,35,0,t["\u0275nov"](e,37).transform("FILTROM")),"")),n(e,58,0,t["\u0275unv"](e,58,0,t["\u0275nov"](e,59).transform("formulario"))),n(e,66,0,t["\u0275unv"](e,66,0,t["\u0275nov"](e,67).transform("proceso"))),n(e,74,0,t["\u0275unv"](e,74,0,t["\u0275nov"](e,75).transform("reportes")))}))}function N(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"page-categoriaformulario-list",[],null,null,null,D,C)),t["\u0275did"](1,114688,null,0,b,[u.gb,v.m,f.a,u.b,s.l,u.Gb],null,null)],(function(n,e){n(e,1,0)}),null)}var E=t["\u0275ccf"]("page-categoriaformulario-list",b,N,{},{},[]),I=l("IheW"),Z=l("ZpN7"),L=l("Kt/9"),T=l("j1ZV"),F=l("gMqc"),A=t["\u0275cmf"](i,[],(function(n){return t["\u0275mod"]([t["\u0275mpd"](512,t.ComponentFactoryResolver,t["\u0275CodegenComponentFactoryResolver"],[[8,[o.c,r.a,E]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t["\u0275mpd"](4608,g.NgLocalization,g.NgLocaleLocalization,[t.LOCALE_ID]),t["\u0275mpd"](4608,u.c,u.c,[t.NgZone,t.ApplicationRef]),t["\u0275mpd"](4608,u.Gb,u.Gb,[u.c,t.ComponentFactoryResolver,t.Injector]),t["\u0275mpd"](4608,u.Lb,u.Lb,[u.c,t.ComponentFactoryResolver,t.Injector]),t["\u0275mpd"](4608,m.w,m.w,[]),t["\u0275mpd"](4608,I.i,I.o,[g.DOCUMENT,t.PLATFORM_ID,I.m]),t["\u0275mpd"](4608,I.p,I.p,[I.i,I.n]),t["\u0275mpd"](5120,I.a,(function(n){return[n]}),[I.p]),t["\u0275mpd"](4608,I.l,I.l,[]),t["\u0275mpd"](6144,I.j,null,[I.l]),t["\u0275mpd"](4608,I.h,I.h,[I.j]),t["\u0275mpd"](6144,I.b,null,[I.h]),t["\u0275mpd"](4608,I.f,I.k,[I.b,t.Injector]),t["\u0275mpd"](4608,I.c,I.c,[I.f]),t["\u0275mpd"](5120,t.APP_INITIALIZER,(function(n){return[Z.b(n)]}),[L.a]),t["\u0275mpd"](4608,m.d,m.d,[]),t["\u0275mpd"](4608,s.h,s.g,[]),t["\u0275mpd"](4608,s.d,s.f,[]),t["\u0275mpd"](4608,s.j,s.e,[]),t["\u0275mpd"](4608,s.c,s.b,[]),t["\u0275mpd"](4608,s.l,s.l,[s.m,s.h,s.d,s.j,s.c,s.n,s.p,s.o,s.a]),t["\u0275mpd"](1073742336,g.CommonModule,g.CommonModule,[]),t["\u0275mpd"](1073742336,u.Cb,u.Cb,[]),t["\u0275mpd"](1073742336,m.v,m.v,[]),t["\u0275mpd"](1073742336,m.j,m.j,[]),t["\u0275mpd"](1073742336,I.e,I.e,[]),t["\u0275mpd"](1073742336,I.d,I.d,[]),t["\u0275mpd"](1073742336,Z.a,Z.a,[]),t["\u0275mpd"](1073742336,T.a,T.a,[]),t["\u0275mpd"](1073742336,m.s,m.s,[]),t["\u0275mpd"](1073742336,F.c,F.c,[]),t["\u0275mpd"](1073742336,v.p,v.p,[[2,v.u],[2,v.m]]),t["\u0275mpd"](1073742336,s.i,s.i,[]),t["\u0275mpd"](1073742336,i,i,[]),t["\u0275mpd"](256,I.m,"XSRF-TOKEN",[]),t["\u0275mpd"](256,I.n,"X-XSRF-TOKEN",[]),t["\u0275mpd"](1024,v.k,(function(){return[[{path:"",component:b}]]}),[]),t["\u0275mpd"](256,s.p,void 0,[]),t["\u0275mpd"](256,s.n,void 0,[]),t["\u0275mpd"](256,s.o,void 0,[]),t["\u0275mpd"](256,s.a,void 0,[])])}))},"hQ+M":function(n,e,l){"use strict";l.d(e,"a",(function(){return o})),l.d(e,"b",(function(){return r}));var t=l("8Y7J"),i=l("SVse"),o=(l("Rg8G"),t["\u0275crt"]({encapsulation:0,styles:[["[_nghost-%COMP%]{display:block}[_nghost-%COMP%]   .inline[_ngcontent-%COMP%], [inline][_nghost-%COMP%]{display:inline-block}[_nghost-%COMP%]   .no-animated[_ngcontent-%COMP%]{-webkit-animation:none!important;animation:none!important;background:hsla(0,0%,51%,.2)}.animated-background[_ngcontent-%COMP%], [_nghost-%COMP%]   div[_ngcontent-%COMP%]{-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-name:placeHolderShimmer;animation-name:placeHolderShimmer;-webkit-animation-timing-function:linear;animation-timing-function:linear;background:hsla(0,0%,51%,.2);background:linear-gradient(90deg,hsla(0,0%,51%,.2) 8%,hsla(0,0%,51%,.3) 18%,hsla(0,0%,51%,.2) 33%);background-size:800px 100px;position:relative}@-webkit-keyframes placeHolderShimmer{0%{background-position:-468px 0}to{background-position:468px 0}}@keyframes placeHolderShimmer{0%{background-position:-468px 0}to{background-position:468px 0}}"]],data:{}}));function r(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,3,"div",[],null,null,null,null,null)),t["\u0275did"](1,278528,null,0,i.NgClass,[t.IterableDiffers,t.KeyValueDiffers,t.ElementRef,t.Renderer2],{ngClass:[0,"ngClass"]},null),t["\u0275pod"](2,{"no-animated":0,inline:1}),t["\u0275did"](3,278528,null,0,i.NgStyle,[t.ElementRef,t.KeyValueDiffers,t.Renderer2],{ngStyle:[0,"ngStyle"]},null)],(function(n,e){var l=e.component,t=n(e,2,0,l.noAnimated,l.inline);n(e,1,0,t),n(e,3,0,l.styles)}),null)}}}]);