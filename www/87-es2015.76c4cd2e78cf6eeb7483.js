(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{Rg8G:function(n,e,l){"use strict";l.d(e,"a",(function(){return t}));class t{constructor(){this.width="100%",this.height="16px",this.borderRadius="0",this.rounded=!1,this.noAnimated=!1,this.inline=!1,this.styles={}}ngOnInit(){this.styles={width:this.width,height:this.height,borderRadius:this.borderRadius},this.rounded&&(this.styles.borderRadius="999em")}}},"hQ+M":function(n,e,l){"use strict";l.d(e,"a",(function(){return o})),l.d(e,"b",(function(){return a}));var t=l("8Y7J"),i=l("SVse"),o=(l("Rg8G"),t["\u0275crt"]({encapsulation:0,styles:[["[_nghost-%COMP%]{display:block}[_nghost-%COMP%]   .inline[_ngcontent-%COMP%], [inline][_nghost-%COMP%]{display:inline-block}[_nghost-%COMP%]   .no-animated[_ngcontent-%COMP%]{-webkit-animation:none!important;animation:none!important;background:hsla(0,0%,51%,.2)}.animated-background[_ngcontent-%COMP%], [_nghost-%COMP%]   div[_ngcontent-%COMP%]{-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-name:placeHolderShimmer;animation-name:placeHolderShimmer;-webkit-animation-timing-function:linear;animation-timing-function:linear;background:hsla(0,0%,51%,.2);background:linear-gradient(90deg,hsla(0,0%,51%,.2) 8%,hsla(0,0%,51%,.3) 18%,hsla(0,0%,51%,.2) 33%);background-size:800px 100px;position:relative}@-webkit-keyframes placeHolderShimmer{0%{background-position:-468px 0}to{background-position:468px 0}}@keyframes placeHolderShimmer{0%{background-position:-468px 0}to{background-position:468px 0}}"]],data:{}}));function a(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,3,"div",[],null,null,null,null,null)),t["\u0275did"](1,278528,null,0,i.NgClass,[t.IterableDiffers,t.KeyValueDiffers,t.ElementRef,t.Renderer2],{ngClass:[0,"ngClass"]},null),t["\u0275pod"](2,{"no-animated":0,inline:1}),t["\u0275did"](3,278528,null,0,i.NgStyle,[t.ElementRef,t.KeyValueDiffers,t.Renderer2],{ngStyle:[0,"ngStyle"]},null)],(function(n,e){var l=e.component,t=n(e,2,0,l.noAnimated,l.inline);n(e,1,0,t),n(e,3,0,l.styles)}),null)}},ja3t:function(n,e,l){"use strict";l.r(e),l.d(e,"formulariomovilsListPageModuleNgFactory",(function(){return V}));var t=l("8Y7J");class i{}var o=l("Xh6l"),a=l("pMnS"),r=l("MKJQ"),u=l("sZkV"),s=l("TSSN"),c=l("hQ+M"),d=l("Rg8G"),g=l("SVse"),m=l("s7LF"),p=l("mrSG"),h=l("ZtEv"),f=l("jtHE");class v{constructor(n,e,l,t,i,o,a){this._DomSanitizer=n,this.routerOutlet=e,this.router=l,this.authenticationService=t,this.alertController=i,this.translateService=o,this.modalController=a,this.showAgeFilter=!1,this.showmenu=!1,this.items=[],this.variables=[],this.userinfo=[],this.viewType="grid",this.tituloxx="",this.efecto=0,this.seguro="",this.msg="",this.currentSegment="Todos",this.searchSubject=new f.a(1),this.apifoto=this.authenticationService.getapifoto()}changeToList(){this.viewType="list"}changeToGrid(){this.viewType="grid"}ngOnInit(){this.variables=this.router.getCurrentNavigation().extras.state.variables,this.idllave=this.router.getCurrentNavigation().extras.state.idllave,this.tipo=this.router.getCurrentNavigation().extras.state.tipo,this.userinfo=this.authenticationService.getcopiauser(),this.tituloxx=this.router.getCurrentNavigation().extras.state.title,this.idcategoria=this.router.getCurrentNavigation().extras.state.idcategoria,this.searchQuery="",this.translateService.get("SEGUROM").subscribe(n=>{this.seguro=n}),this.translateService.get("MSGM").subscribe(n=>{this.msg=n}),this.rangeForm=new m.g({dual:new m.e({lower:1,upper:100})}),this.currentSegment="todos",this.pideregistros(this.currentSegment)}filterContacts(n){const e=n.detail.value;this.currentSegment=e,this.pideregistros(e)}pideregistros0(){this.pideregistros(this.currentSegment)}pideregistros(n){this.itemsList=[],this.efecto=0;let e="";e=this.idcategoria+"/"+this.userinfo[0]._id+"/"+this.userinfo[0].idempresa._id+"\xb0"+n+"\xb0"+this.tipo+"/categoriausr",this.authenticationService.getReg(e,"frmmovils",0).then(n=>{this.efecto=1,this.items=n,this.itemsList=this.items},n=>{this.authenticationService.presentAlert(n.error,this.msg,"")})}searchList(){this.searchSubject.next({lower:this.rangeForm.controls.dual.value.lower,upper:this.rangeForm.controls.dual.value.upper,query:this.searchQuery}),this.itemsList=this.filterList(this.items,this.searchQuery&&null!==this.searchQuery?this.searchQuery:"")}filterList(n,e){return n.filter(n=>n.nombre.toLowerCase().includes(e.toLowerCase()))}otrasop(n){return Object(p.a)(this,void 0,void 0,(function*(){var e=n.nombre;"es"!==this.authenticationService.getlenguaje()&&(e=n.nombre2);const l=yield this.alertController.create({cssClass:"my-custom-class",header:this.authenticationService.datraduccion("sel_opcion"),inputs:[{name:"Productos",type:"radio",label:"Productos",checked:!0,value:"/ProductoListPage\xb0Productos ->"+e}],buttons:[{text:this.authenticationService.datraduccion("cancelar"),role:"cancel",cssClass:"secondary",handler:n=>{}},{text:this.authenticationService.datraduccion("aceptar"),handler:e=>{const l=e.split("\xb0");this.router.navigate([l[0]],{state:{variables:this.variables,user:null,idllave:n._id,title:l[1]}})}}]});yield l.present()}))}updateRecord(n){return Object(p.a)(this,void 0,void 0,(function*(){var e=n.nombre;"es"!==this.authenticationService.getlenguaje()&&(e=n.nombre2),this.authenticationService.getReg(n._id+"/formulariocamposver/"+this.userinfo[0].idempresa._id,"frmmovils",0).then(l=>{let t="";if(t="Si"===n.permisos.publico?"Ver solo los mios":n.verregistros,"proceso"===n.tipo){let i=[],o=[],a=[],r=[];this.authenticationService.getReg("todos/actividadprocesos/"+this.userinfo[0].idempresa._id+"/"+n._id,"frmactividads",0).then(u=>{i=u,this.authenticationService.getReg("todos/accionproceso2/"+this.userinfo[0].idempresa._id+"/"+n._id,"frmaccioness",0).then(u=>{r=u,this.authenticationService.getReg("todos/accionproceso/"+this.userinfo[0].idempresa._id+"/"+n._id,"frmaccioness",0).then(u=>{a=u,this.authenticationService.getReg("todos/actividadprocesosmias/"+this.userinfo[0].idempresa._id+"/"+n._id+"\xb0"+this.userinfo[0]._id,"frmactividads",0).then(u=>{o=u,void 0!==n.verregistros&&i.length>0&&(t=n.verregistros);for(var s="",c=0;c<r.length;c++)if(r[c].correousuarios.indexOf("USUARIOSOLICITANTE")>=0)for(var d=0;d<i.length;d++)i[d].actor.id===r[c].idpapa&&(s=s+i[d]._id+",");"Si"===n.permisos.publico&&(n.permisos.ejecutadas="true",""===s&&i.length>=0&&(s=i[0]._id+","));const g={state:{variables:n.permisos,permisosorden:n.permisos,user:null,idllave:n._id,datat:l,idcategoria:n.categoria,publico:n.publico,verregistros:t,idformulario:n._id,idformularioproceso:n._id+"-proceso",nidformulario:e,actividadpublicas:s,geoposicion:n.geoposicion,actividades:i,misactividades:o,actorcorreo:r,acciones:a,tipo2:n.tipo2,tipo:n.tipo,ejecuta:n.ejecuta,ejecutainicio:n.ejecutainicio,ejecutaactualiza:n.ejecutaactualiza,ejecutaelimina:n.ejecutaelimina,title:this.authenticationService.datraduccion("creacion_registros")+e}};this.router.navigate(["formulariomovilsdprocesoListPage"],g)})})})})}else if("reportes"===n.tipo)this.router.navigate(["formulariomovilsdreporteListPage"],{state:{variables:n.permisos,permisosorden:n.permisos,user:null,idllave:n._id,datat:l,idcategoria:n.categoria,verregistros:t,idformulario:n._id,publico:n.publico,idformularioproceso:n._id+"--reportes",nidformulario:e,geoposicion:n.geoposicion,tipo2:n.tipo2,tipo:n.tipo,ejecuta:n.ejecuta,ejecutainicio:n.ejecutainicio,ejecutaactualiza:n.ejecutaactualiza,ejecutaelimina:n.ejecutaelimina,title:""+e}});else{const i={state:{variables:n.permisos,permisosorden:n.permisos,user:null,idllave:n._id,datat:l,idcategoria:n.categoria,verregistros:t,idformulario:n._id,publico:n.publico,idformularioproceso:n._id+"-proceso",nidformulario:e,geoposicion:n.geoposicion,tipo2:n.tipo2,tipo:n.tipo,ejecuta:n.ejecuta,ejecutainicio:n.ejecutainicio,ejecutaactualiza:n.ejecutaactualiza,ejecutaelimina:n.ejecutaelimina,title:this.authenticationService.datraduccion("creacion_registros")+e}};this.router.navigate(["formulariomovilsdListPage"],i)}},n=>{this.authenticationService.presentAlert(n.error,this.msg,"")})}))}buscarorden(){return Object(p.a)(this,void 0,void 0,(function*(){const n={state:{variables:null,keyxxx:10,idllave:"123",title:this.authenticationService.datraduccion("busqueda_generalorden")}};this.router.navigate(["frmordencomponenteListPage"],n)}))}loadData(n){setTimeout(()=>{n.target.complete(),1e3===this.items.length&&(n.target.disabled=!0)},500)}}var b=l("cUpR"),C=l("iInd"),R=t["\u0275crt"]({encapsulation:0,styles:[["[_nghost-%COMP%]{--page-margin:var(--app-narrow-margin);--page-border-radius:var(--app-fair-radius);--page-segment-background:var(--app-background);--page-segment-indicator-height:2px}ion-item-divider[_ngcontent-%COMP%]{--background:var(--ion-color-light);--padding-start:var(--page-margin)}[_nghost-%COMP%]{--page-margin:var(--app-fair-margin);--page-background:var(--app-background);--page-background-shade:var(--app-background-shade);--page-tags-gutter:5px}.category-list[_ngcontent-%COMP%]{padding:8px;display:flex;flex-wrap:wrap}.category-list[_ngcontent-%COMP%]   .category-item[_ngcontent-%COMP%]{margin:8px;background-color:var(--ion-color-dark-tint);position:relative;border-radius:4px;overflow:hidden;width:180px;height:240px;color:#fff}.category-list[_ngcontent-%COMP%]   .category-item.color-2[_ngcontent-%COMP%]{background-color:#8da4b0}.category-list[_ngcontent-%COMP%]   .category-item.color-3[_ngcontent-%COMP%]{background-color:#5a8a79}.category-list[_ngcontent-%COMP%]   .category-item.color-4[_ngcontent-%COMP%]{background-color:#e06943}.category-list[_ngcontent-%COMP%]   .category-item[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{position:absolute;left:0;top:0;right:0;padding:12px;font-weight:700;font-size:18px;z-index:2;letter-spacing:.5px;text-shadow:0 2px 8px rgba(0,0,0,.2)}.category-list[_ngcontent-%COMP%]   .category-item[_ngcontent-%COMP%]   .card-thumbnail[_ngcontent-%COMP%], .category-list[_ngcontent-%COMP%]   .category-item[_ngcontent-%COMP%]   .card-thumbnail10[_ngcontent-%COMP%]{width:130px;height:130px;position:absolute;top:126px;right:-26px;z-index:1;transform:rotate(21deg);box-shadow:0 2px 8px rgba(0,0,0,.2)}.category-list[_ngcontent-%COMP%]   .category-item[_ngcontent-%COMP%]   .card-thumbnail10[_ngcontent-%COMP%]{background:url(form.a7f5f2405fb9f8681580.png) no-repeat 50%}.category-list[_ngcontent-%COMP%]   .category-item[_ngcontent-%COMP%]   .card-thumbnail20[_ngcontent-%COMP%]{background:url(process.6fa50715a75c5eb45293.png) no-repeat 50%;width:130px;height:130px;position:absolute;top:126px;right:-26px;z-index:1;transform:rotate(21deg);box-shadow:0 2px 8px rgba(0,0,0,.2)}"]],data:{}});function y(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,4,"ion-label",[],null,null,null,r.Mb,r.E)),t["\u0275did"](1,49152,null,0,u.O,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275ted"](2,0,[""," "," "," ",""])),t["\u0275pid"](131072,s.k,[s.l,t.ChangeDetectorRef]),t["\u0275pid"](131072,s.k,[s.l,t.ChangeDetectorRef])],null,(function(n,e){var l=e.component;n(e,2,0,t["\u0275unv"](e,2,0,t["\u0275nov"](e,3).transform("NOREGISTROSM")),l.itemsList.length,l.tipo,t["\u0275unv"](e,2,3,t["\u0275nov"](e,4).transform("NOREGISTROSM3")))}))}function O(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,4,"ion-label",[],null,null,null,r.Mb,r.E)),t["\u0275did"](1,49152,null,0,u.O,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275ted"](2,0,[""," "," ","s ",""])),t["\u0275pid"](131072,s.k,[s.l,t.ChangeDetectorRef]),t["\u0275pid"](131072,s.k,[s.l,t.ChangeDetectorRef])],null,(function(n,e){var l=e.component;n(e,2,0,t["\u0275unv"](e,2,0,t["\u0275nov"](e,3).transform("NOREGISTROSM")),l.itemsList.length,l.tipo,t["\u0275unv"](e,2,3,t["\u0275nov"](e,4).transform("NOREGISTROSM4")))}))}function _(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,9,"ion-item",[["lines","none"]],null,null,null,r.Lb,r.A)),t["\u0275did"](1,49152,null,0,u.I,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{lines:[0,"lines"]},null),(n()(),t["\u0275eld"](2,0,null,0,7,"ion-label",[],null,null,null,r.Mb,r.E)),t["\u0275did"](3,49152,null,0,u.O,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](4,0,null,0,1,"skeleton-element",[],null,null,null,c.b,c.a)),t["\u0275did"](5,114688,null,0,d.a,[],null,null),(n()(),t["\u0275eld"](6,0,null,0,1,"skeleton-element",[],null,null,null,c.b,c.a)),t["\u0275did"](7,114688,null,0,d.a,[],null,null),(n()(),t["\u0275eld"](8,0,null,0,1,"skeleton-element",[["width","67%"]],null,null,null,c.b,c.a)),t["\u0275did"](9,114688,null,0,d.a,[],{width:[0,"width"]},null)],(function(n,e){n(e,1,0,"none"),n(e,5,0),n(e,7,0),n(e,9,0,"67%")}),null)}function k(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,4,"ion-list",[],null,null,null,r.Ob,r.F)),t["\u0275did"](1,49152,null,0,u.P,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275and"](16777216,null,0,2,null,_)),t["\u0275did"](3,278528,null,0,g.NgForOf,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),t["\u0275pad"](4,7)],(function(n,e){var l=n(e,4,0,0,1,2,3,4,5,6);n(e,3,0,l)}),null)}function x(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"div",[["class","title"]],null,null,null,null,null)),(n()(),t["\u0275ted"](1,null,[" "," "]))],null,(function(n,e){n(e,1,0,e.parent.context.$implicit.nombre)}))}function S(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"div",[["class","title"]],null,null,null,null,null)),(n()(),t["\u0275ted"](1,null,[" "," "]))],null,(function(n,e){n(e,1,0,e.parent.context.$implicit.nombre2)}))}function w(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,0,"div",[["class","card-thumbnail10"]],null,null,null,null,null))],null,null)}function I(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,0,"div",[["class","card-thumbnail20"]],null,null,null,null,null))],null,null)}function M(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,9,"div",[["class","category-item"]],null,[[null,"click"]],(function(n,e,l){var t=!0;return"click"===e&&(t=!1!==n.component.updateRecord(n.context.$implicit)&&t),t}),null,null)),(n()(),t["\u0275and"](16777216,null,null,1,null,x)),t["\u0275did"](2,16384,null,0,g.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["\u0275and"](16777216,null,null,1,null,S)),t["\u0275did"](4,16384,null,0,g.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["\u0275eld"](5,0,null,null,0,"div",[["class","card-thumbnail"]],[[4,"backgroundImage",null]],null,null,null,null)),(n()(),t["\u0275and"](16777216,null,null,1,null,w)),t["\u0275did"](7,16384,null,0,g.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["\u0275and"](16777216,null,null,1,null,I)),t["\u0275did"](9,16384,null,0,g.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null)],(function(n,e){var l=e.component;n(e,2,0,"es"===l.authenticationService.getlenguaje()),n(e,4,0,"es"!==l.authenticationService.getlenguaje()),n(e,7,0,"formulario"===e.context.$implicit.tipo&&"/api/image2s/5f146aa48caa41db981e6830"===e.context.$implicit.foto),n(e,9,0,"proceso"===e.context.$implicit.tipo&&"/api/image2s/5f146aa48caa41db981e6830"===e.context.$implicit.foto)}),(function(n,e){n(e,5,0,"url("+e.component.apifoto+e.context.$implicit.foto+")")}))}function N(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,2,"div",[["class","category-list"]],null,null,null,null,null)),(n()(),t["\u0275and"](16777216,null,null,1,null,M)),t["\u0275did"](2,278528,null,0,g.NgForOf,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"]},null)],(function(n,e){n(e,2,0,e.component.itemsList)}),null)}function P(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,2,"h3",[["class","empty-list-message"]],null,null,null,null,null)),(n()(),t["\u0275ted"](1,null,[" "," "])),t["\u0275pid"](131072,s.k,[s.l,t.ChangeDetectorRef])],null,(function(n,e){n(e,1,0,t["\u0275unv"](e,1,0,t["\u0275nov"](e,2).transform("NODATOS")))}))}function D(n){return t["\u0275vid"](0,[t["\u0275qud"](671088640,1,{infiniteScroll:0}),(n()(),t["\u0275eld"](1,0,null,null,51,"ion-header",[],null,null,null,r.Cb,r.u)),t["\u0275did"](2,49152,null,0,u.C,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](3,0,null,0,23,"ion-toolbar",[["color","primary"]],null,null,null,r.oc,r.gb)),t["\u0275did"](4,49152,null,0,u.Ab,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{color:[0,"color"]},null),(n()(),t["\u0275eld"](5,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,r.nb,r.f)),t["\u0275did"](6,49152,null,0,u.m,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](7,0,null,0,2,"ion-back-button",[["defaultHref","categoriaformularioListPage"]],null,[[null,"click"]],(function(n,e,l){var i=!0;return"click"===e&&(i=!1!==t["\u0275nov"](n,9).onClick(l)&&i),i}),r.kb,r.c)),t["\u0275did"](8,49152,null,0,u.h,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{defaultHref:[0,"defaultHref"]},null),t["\u0275did"](9,16384,null,0,u.i,[[2,u.gb],u.Hb,u.e],{defaultHref:[0,"defaultHref"]},null),(n()(),t["\u0275eld"](10,0,null,0,2,"ion-title",[],null,null,null,r.mc,r.eb)),t["\u0275did"](11,49152,null,0,u.yb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275ted"](12,0,[" "," "])),(n()(),t["\u0275eld"](13,0,null,0,6,"ion-buttons",[["slot","end"]],null,null,null,r.nb,r.f)),t["\u0275did"](14,49152,null,0,u.m,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](15,0,null,0,4,"ion-button",[],[[8,"title",0]],[[null,"click"]],(function(n,e,l){var t=!0;return"click"===e&&(t=!1!==n.component.pideregistros0()&&t),t}),r.mb,r.e)),t["\u0275did"](16,49152,null,0,u.l,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),t["\u0275pid"](131072,s.k,[s.l,t.ChangeDetectorRef]),(n()(),t["\u0275eld"](18,0,null,0,1,"ion-icon",[["name","refresh-circle-outline"],["slot","icon-only"]],null,null,null,r.Db,r.v)),t["\u0275did"](19,49152,null,0,u.D,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{name:[0,"name"]},null),(n()(),t["\u0275eld"](20,0,null,0,6,"ion-buttons",[["slot","end"]],null,null,null,r.nb,r.f)),t["\u0275did"](21,49152,null,0,u.m,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](22,0,null,0,4,"ion-button",[],[[8,"title",0]],[[null,"click"]],(function(n,e,l){var t=!0;return"click"===e&&(t=!1!==n.component.buscarorden()&&t),t}),r.mb,r.e)),t["\u0275did"](23,49152,null,0,u.l,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),t["\u0275pid"](131072,s.k,[s.l,t.ChangeDetectorRef]),(n()(),t["\u0275eld"](25,0,null,0,1,"ion-icon",[["name","search-circle-outline"],["slot","icon-only"]],null,null,null,r.Db,r.v)),t["\u0275did"](26,49152,null,0,u.D,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{name:[0,"name"]},null),(n()(),t["\u0275eld"](27,0,null,0,25,"ion-toolbar",[["class","filters-toolbar"]],null,null,null,r.oc,r.gb)),t["\u0275did"](28,49152,null,0,u.Ab,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](29,0,null,0,18,"ion-row",[["align-items-center",""],["class","searchbar-row"]],null,null,null,r.Wb,r.O)),t["\u0275did"](30,49152,null,0,u.hb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](31,0,null,0,9,"ion-col",[],null,null,null,r.vb,r.n)),t["\u0275did"](32,49152,null,0,u.u,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](33,0,null,0,7,"ion-searchbar",[["animated",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionChange"],[null,"ionBlur"]],(function(n,e,l){var i=!0,o=n.component;return"ionBlur"===e&&(i=!1!==t["\u0275nov"](n,36)._handleBlurEvent(l.target)&&i),"ionChange"===e&&(i=!1!==t["\u0275nov"](n,36)._handleInputEvent(l.target)&&i),"ngModelChange"===e&&(i=!1!==(o.searchQuery=l)&&i),"ionChange"===e&&(i=!1!==o.searchList()&&i),i}),r.Xb,r.P)),t["\u0275did"](34,49152,null,0,u.ib,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{animated:[0,"animated"],placeholder:[1,"placeholder"]},null),t["\u0275pid"](131072,s.k,[s.l,t.ChangeDetectorRef]),t["\u0275did"](36,16384,null,0,u.Pb,[t.ElementRef],null,null),t["\u0275prd"](1024,null,m.m,(function(n){return[n]}),[u.Pb]),t["\u0275did"](38,671744,null,0,m.q,[[8,null],[8,null],[8,null],[6,m.m]],{model:[0,"model"]},{update:"ngModelChange"}),t["\u0275prd"](2048,null,m.n,null,[m.q]),t["\u0275did"](40,16384,null,0,m.o,[[4,m.n]],null,null),(n()(),t["\u0275eld"](41,0,null,0,6,"ion-col",[["class","call-to-action-col"]],[[8,"hidden",0]],null,null,r.vb,r.n)),t["\u0275did"](42,49152,null,0,u.u,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](43,0,null,0,4,"ion-button",[["class","filters-btn"],["color","secondary"],["fill","clear"]],[[8,"title",0]],[[null,"click"]],(function(n,e,l){var t=!0,i=n.component;return"click"===e&&(t=0!=(i.showAgeFilter=!i.showAgeFilter)&&t),t}),r.mb,r.e)),t["\u0275did"](44,49152,null,0,u.l,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{color:[0,"color"],fill:[1,"fill"]},null),t["\u0275pid"](131072,s.k,[s.l,t.ChangeDetectorRef]),(n()(),t["\u0275eld"](46,0,null,0,1,"ion-icon",[["name","options"],["slot","icon-only"]],null,null,null,r.Db,r.v)),t["\u0275did"](47,49152,null,0,u.D,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{name:[0,"name"]},null),(n()(),t["\u0275eld"](48,0,null,0,4,"form",[["novalidate",""]],[[8,"hidden",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],(function(n,e,l){var i=!0;return"submit"===e&&(i=!1!==t["\u0275nov"](n,50).onSubmit(l)&&i),"reset"===e&&(i=!1!==t["\u0275nov"](n,50).onReset()&&i),i}),null,null)),t["\u0275did"](49,16384,null,0,m.y,[],null,null),t["\u0275did"](50,540672,null,0,m.h,[[8,null],[8,null]],{form:[0,"form"]},null),t["\u0275prd"](2048,null,m.b,null,[m.h]),t["\u0275did"](52,16384,null,0,m.p,[[4,m.b]],null,null),(n()(),t["\u0275eld"](53,0,null,null,18,"ion-content",[["class","user-friends-content"]],null,null,null,r.wb,r.o)),t["\u0275did"](54,49152,null,0,u.v,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](55,0,null,0,5,"ion-item-divider",[["sticky",""]],null,null,null,r.Ib,r.B)),t["\u0275did"](56,49152,null,0,u.J,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{sticky:[0,"sticky"]},null),(n()(),t["\u0275and"](16777216,null,0,1,null,y)),t["\u0275did"](58,16384,null,0,g.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["\u0275and"](16777216,null,0,1,null,O)),t["\u0275did"](60,16384,null,0,g.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["\u0275and"](16777216,null,0,1,null,k)),t["\u0275did"](62,16384,null,0,g.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["\u0275and"](16777216,null,0,1,null,N)),t["\u0275did"](64,16384,null,0,g.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["\u0275and"](16777216,null,0,1,null,P)),t["\u0275did"](66,16384,null,0,g.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["\u0275eld"](67,0,null,0,4,"ion-infinite-scroll",[["threshold","100px"]],null,[[null,"ionInfinite"]],(function(n,e,l){var t=!0;return"ionInfinite"===e&&(t=!1!==n.component.loadData(l)&&t),t}),r.Gb,r.x)),t["\u0275did"](68,49152,[[1,4]],0,u.F,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{threshold:[0,"threshold"]},null),(n()(),t["\u0275eld"](69,0,null,0,2,"ion-infinite-scroll-content",[["loadingSpinner","bubbles"]],null,null,null,r.Fb,r.y)),t["\u0275did"](70,49152,null,0,u.G,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{loadingSpinner:[0,"loadingSpinner"],loadingText:[1,"loadingText"]},null),t["\u0275pid"](131072,s.k,[s.l,t.ChangeDetectorRef])],(function(n,e){var l=e.component;n(e,4,0,"primary"),n(e,8,0,"categoriaformularioListPage"),n(e,9,0,"categoriaformularioListPage"),n(e,19,0,"refresh-circle-outline"),n(e,26,0,"search-circle-outline"),n(e,34,0,"",t["\u0275inlineInterpolate"](1,"",t["\u0275unv"](e,34,1,t["\u0275nov"](e,35).transform("BUSCARM")),"")),n(e,38,0,l.searchQuery),n(e,44,0,"secondary","clear"),n(e,47,0,"options"),n(e,50,0,l.rangeForm),n(e,56,0,""),n(e,58,0,1===(null==l.itemsList?null:l.itemsList.length)),n(e,60,0,(null==l.itemsList?null:l.itemsList.length)>1),n(e,62,0,0===l.efecto),n(e,64,0,(null==l.itemsList?null:l.itemsList.length)>0&&"grid"===l.viewType),n(e,66,0,0==(null==l.itemsList?null:l.itemsList.length)),n(e,68,0,"100px"),n(e,70,0,"bubbles",t["\u0275inlineInterpolate"](1,"",t["\u0275unv"](e,70,1,t["\u0275nov"](e,71).transform("espere")),""))}),(function(n,e){var l=e.component;n(e,12,0,l.tituloxx),n(e,15,0,t["\u0275inlineInterpolate"](1," ",t["\u0275unv"](e,15,0,t["\u0275nov"](e,17).transform("REFRESCARM")),"")),n(e,22,0,t["\u0275inlineInterpolate"](1,"",t["\u0275unv"](e,22,0,t["\u0275nov"](e,24).transform("buscar_orden")),"")),n(e,33,0,t["\u0275nov"](e,40).ngClassUntouched,t["\u0275nov"](e,40).ngClassTouched,t["\u0275nov"](e,40).ngClassPristine,t["\u0275nov"](e,40).ngClassDirty,t["\u0275nov"](e,40).ngClassValid,t["\u0275nov"](e,40).ngClassInvalid,t["\u0275nov"](e,40).ngClassPending),n(e,41,0,!l.showAgeFilter),n(e,43,0,t["\u0275inlineInterpolate"](1," ",t["\u0275unv"](e,43,0,t["\u0275nov"](e,45).transform("FILTROM")),"")),n(e,48,0,!l.showAgeFilter,t["\u0275nov"](e,52).ngClassUntouched,t["\u0275nov"](e,52).ngClassTouched,t["\u0275nov"](e,52).ngClassPristine,t["\u0275nov"](e,52).ngClassDirty,t["\u0275nov"](e,52).ngClassValid,t["\u0275nov"](e,52).ngClassInvalid,t["\u0275nov"](e,52).ngClassPending)}))}function E(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"page-formulariomovils-list",[],null,null,null,D,R)),t["\u0275did"](1,114688,null,0,v,[b.b,u.gb,C.m,h.a,u.b,s.l,u.Gb],null,null)],(function(n,e){n(e,1,0)}),null)}var j=t["\u0275ccf"]("page-formulariomovils-list",v,E,{},{},[]),L=l("IheW"),T=l("ZpN7"),Z=l("Kt/9"),F=l("j1ZV"),A=l("gMqc"),V=t["\u0275cmf"](i,[],(function(n){return t["\u0275mod"]([t["\u0275mpd"](512,t.ComponentFactoryResolver,t["\u0275CodegenComponentFactoryResolver"],[[8,[o.c,a.a,j]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t["\u0275mpd"](4608,g.NgLocalization,g.NgLocaleLocalization,[t.LOCALE_ID]),t["\u0275mpd"](4608,u.c,u.c,[t.NgZone,t.ApplicationRef]),t["\u0275mpd"](4608,u.Gb,u.Gb,[u.c,t.ComponentFactoryResolver,t.Injector]),t["\u0275mpd"](4608,u.Lb,u.Lb,[u.c,t.ComponentFactoryResolver,t.Injector]),t["\u0275mpd"](4608,m.w,m.w,[]),t["\u0275mpd"](4608,L.i,L.o,[g.DOCUMENT,t.PLATFORM_ID,L.m]),t["\u0275mpd"](4608,L.p,L.p,[L.i,L.n]),t["\u0275mpd"](5120,L.a,(function(n){return[n]}),[L.p]),t["\u0275mpd"](4608,L.l,L.l,[]),t["\u0275mpd"](6144,L.j,null,[L.l]),t["\u0275mpd"](4608,L.h,L.h,[L.j]),t["\u0275mpd"](6144,L.b,null,[L.h]),t["\u0275mpd"](4608,L.f,L.k,[L.b,t.Injector]),t["\u0275mpd"](4608,L.c,L.c,[L.f]),t["\u0275mpd"](5120,t.APP_INITIALIZER,(function(n){return[T.b(n)]}),[Z.a]),t["\u0275mpd"](4608,m.d,m.d,[]),t["\u0275mpd"](4608,s.h,s.g,[]),t["\u0275mpd"](4608,s.d,s.f,[]),t["\u0275mpd"](4608,s.j,s.e,[]),t["\u0275mpd"](4608,s.c,s.b,[]),t["\u0275mpd"](4608,s.l,s.l,[s.m,s.h,s.d,s.j,s.c,s.n,s.p,s.o,s.a]),t["\u0275mpd"](1073742336,g.CommonModule,g.CommonModule,[]),t["\u0275mpd"](1073742336,u.Cb,u.Cb,[]),t["\u0275mpd"](1073742336,m.v,m.v,[]),t["\u0275mpd"](1073742336,m.j,m.j,[]),t["\u0275mpd"](1073742336,L.e,L.e,[]),t["\u0275mpd"](1073742336,L.d,L.d,[]),t["\u0275mpd"](1073742336,T.a,T.a,[]),t["\u0275mpd"](1073742336,F.a,F.a,[]),t["\u0275mpd"](1073742336,m.s,m.s,[]),t["\u0275mpd"](1073742336,A.c,A.c,[]),t["\u0275mpd"](1073742336,C.p,C.p,[[2,C.u],[2,C.m]]),t["\u0275mpd"](1073742336,s.i,s.i,[]),t["\u0275mpd"](1073742336,i,i,[]),t["\u0275mpd"](256,L.m,"XSRF-TOKEN",[]),t["\u0275mpd"](256,L.n,"X-XSRF-TOKEN",[]),t["\u0275mpd"](1024,C.k,(function(){return[[{path:"",component:v}]]}),[]),t["\u0275mpd"](256,s.p,void 0,[]),t["\u0275mpd"](256,s.n,void 0,[]),t["\u0275mpd"](256,s.o,void 0,[]),t["\u0275mpd"](256,s.a,void 0,[])])}))}}]);