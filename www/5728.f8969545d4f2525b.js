"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[5728],{85728:(A,b,a)=>{a.r(b),a.d(b,{formulariomovilsListPageModule:()=>D});var n=a(23349),m=a(55787),f=a(69808),L=a(33678),u=a(51062),d=a(93075),p=a(36351),h=a(70655),k=a(49926),w=a(4707),i=a(5e3),j=a(22313),I=a(26806);function R(o,s){if(1&o&&(i.TgZ(0,"ion-label"),i._uU(1),i.ALo(2,"translate"),i.ALo(3,"translate"),i.qZA()),2&o){const t=i.oxw();i.xp6(1),i.HOy("",i.lcZ(2,4,"NOREGISTROSM")," ",t.itemsList.length," ",t.tipo," ",i.lcZ(3,6,"NOREGISTROSM3"),"")}}function N(o,s){if(1&o&&(i.TgZ(0,"ion-label"),i._uU(1),i.ALo(2,"translate"),i.ALo(3,"translate"),i.qZA()),2&o){const t=i.oxw();i.xp6(1),i.HOy("",i.lcZ(2,4,"NOREGISTROSM")," ",t.itemsList.length," ",t.tipo,"s ",i.lcZ(3,6,"NOREGISTROSM4"),"")}}function U(o,s){1&o&&(i.TgZ(0,"ion-item",23),i.TgZ(1,"ion-label",24),i._UZ(2,"skeleton-element"),i._UZ(3,"skeleton-element"),i._UZ(4,"skeleton-element",25),i.qZA(),i.qZA())}const E=function(){return[0,1,2,3,4,5,6]};function J(o,s){1&o&&(i.TgZ(0,"ion-list"),i.YNc(1,U,5,0,"ion-item",22),i.qZA()),2&o&&(i.xp6(1),i.Q6J("ngForOf",i.DdM(1,E)))}function Q(o,s){if(1&o&&(i.TgZ(0,"div",33),i._uU(1),i.qZA()),2&o){const t=i.oxw().$implicit;i.xp6(1),i.hij(" ",t.nombre," ")}}function F(o,s){if(1&o&&(i.TgZ(0,"div",33),i._uU(1),i.qZA()),2&o){const t=i.oxw().$implicit;i.xp6(1),i.hij(" ",t.nombre2," ")}}function Y(o,s){1&o&&i._UZ(0,"div",34)}function G(o,s){1&o&&i._UZ(0,"div",35)}function z(o,s){if(1&o){const t=i.EpF();i.TgZ(0,"div",28),i.NdJ("click",function(){const l=i.CHM(t).$implicit;return i.oxw(2).updateRecord(l)}),i.YNc(1,Q,2,1,"div",29),i.YNc(2,F,2,1,"div",29),i._UZ(3,"div",30),i.YNc(4,Y,1,0,"div",31),i.YNc(5,G,1,0,"div",32),i.qZA()}if(2&o){const t=s.$implicit,e=i.oxw(2);i.xp6(1),i.Q6J("ngIf","es"===e.authenticationService.getlenguaje()),i.xp6(1),i.Q6J("ngIf","es"!==e.authenticationService.getlenguaje()),i.xp6(1),i.Udp("background-image","url("+e.apifoto+t.foto+")"),i.xp6(1),i.Q6J("ngIf","formulario"===t.tipo&&"/api/image2s/5f146aa48caa41db981e6830"===t.foto),i.xp6(1),i.Q6J("ngIf","proceso"===t.tipo&&"/api/image2s/5f146aa48caa41db981e6830"===t.foto)}}function q(o,s){if(1&o&&(i.TgZ(0,"div",26),i.YNc(1,z,6,6,"div",27),i.qZA()),2&o){const t=i.oxw();i.xp6(1),i.Q6J("ngForOf",t.itemsList)("ngForTrackBy",t.trackItems)}}function B(o,s){1&o&&(i.TgZ(0,"h3",36),i._uU(1),i.ALo(2,"translate"),i.qZA()),2&o&&(i.xp6(1),i.hij(" ",i.lcZ(2,1,"NODATOS")," "))}let H=(()=>{class o{constructor(t,e,r,l,g,c,x){this._DomSanitizer=t,this.routerOutlet=e,this.router=r,this.authenticationService=l,this.alertController=g,this.translateService=c,this.modalController=x,this.showAgeFilter=!1,this.showmenu=!1,this.items=[],this.variables=[],this.userinfo=[],this.viewType="grid",this.tituloxx="",this.efecto=0,this.seguro="",this.msg="",this.currentSegment="Todos",this.searchSubject=new w.t(1),this.apifoto=this.authenticationService.getapifoto()}changeToList(){this.viewType="list"}changeToGrid(){this.viewType="grid"}ngOnInit(){this.variables=this.router.getCurrentNavigation().extras.state.variables,this.idllave=this.router.getCurrentNavigation().extras.state.idllave,this.tipo=this.router.getCurrentNavigation().extras.state.tipo,this.userinfo=this.authenticationService.getcopiauser(),this.tituloxx=this.router.getCurrentNavigation().extras.state.title,this.idcategoria=this.router.getCurrentNavigation().extras.state.idcategoria,this.searchQuery="",this.translateService.get("SEGUROM").subscribe(t=>{this.seguro=t}),this.translateService.get("MSGM").subscribe(t=>{this.msg=t}),this.rangeForm=new d.cw({dual:new d.NI({lower:1,upper:100})}),this.currentSegment="todos",this.pideregistros(this.currentSegment)}filterContacts(t){const e=t.detail.value;this.currentSegment=e,this.pideregistros(e)}pideregistros0(){this.pideregistros(this.currentSegment)}pideregistros(t){this.itemsList=[],this.efecto=0;let e="";e=this.idcategoria+"/"+this.userinfo[0]._id+"/"+this.userinfo[0].idempresa._id+"\xb0"+t+"\xb0"+this.tipo+"/categoriausr",this.authenticationService.getReg(e,"frmmovils",0).then(r=>{this.efecto=1,this.items=r,this.itemsList=this.items},r=>{this.authenticationService.presentAlert(r.error,this.msg,"")})}trackItems(t,e){return e.id}searchList(){this.searchSubject.next({lower:this.rangeForm.controls.dual.value.lower,upper:this.rangeForm.controls.dual.value.upper,query:this.searchQuery}),this.itemsList=this.filterList(this.items,this.searchQuery&&null!==this.searchQuery?this.searchQuery:"")}filterList(t,e){return t.filter(r=>r.nombre.toLowerCase().includes(e.toLowerCase()))}otrasop(t){return(0,h.mG)(this,void 0,void 0,function*(){var e=t.nombre;"es"!==this.authenticationService.getlenguaje()&&(e=t.nombre2),yield(yield this.alertController.create({cssClass:"my-custom-class",header:this.authenticationService.datraduccion("sel_opcion"),inputs:[{name:"Productos",type:"radio",label:"Productos",checked:!0,value:"/ProductoListPage\xb0Productos ->"+e}],buttons:[{text:this.authenticationService.datraduccion("cancelar"),role:"cancel",cssClass:"secondary",handler:l=>{}},{text:this.authenticationService.datraduccion("aceptar"),handler:l=>{const g=l.split("\xb0");this.router.navigate([g[0]],{state:{variables:this.variables,user:null,idllave:t._id,title:g[1]}})}}]})).present()})}updateRecord(t){return(0,h.mG)(this,void 0,void 0,function*(){var e=t.nombre;"es"!==this.authenticationService.getlenguaje()&&(e=t.nombre2),this.authenticationService.getReg(t._id+"/formulariobyid/"+this.userinfo[0].idempresa._id,"frmmovils",0).then(r=>{this.ordenfrm=r[0].ordenregistro,this.descripciong=r[0].descripciong,("undefined"===this.ordenfrm||void 0===this.ordenfrm)&&(this.ordenfrm="-1"),this.authenticationService.getReg(t._id+"/formulariocamposver/"+this.userinfo[0].idempresa._id,"frmmovils",0).then(l=>{let g="";if(g="Si"===t.permisos.publico?"Ver solo los mios":t.verregistros,"proceso"===t.tipo){let c=[],x=[],T=[],v=[];this.authenticationService.getReg("todos/actividadprocesos/"+this.userinfo[0].idempresa._id+"/"+t._id,"frmactividads",0).then($=>{c=$,this.authenticationService.getReg("todos/accionproceso2/"+this.userinfo[0].idempresa._id+"/"+t._id,"frmaccioness",0).then(K=>{v=K,this.authenticationService.getReg("todos/accionproceso/"+this.userinfo[0].idempresa._id+"/"+t._id,"frmaccioness",0).then(O=>{var C;T=O,C=O;for(var S=[],P=0;P<C.length;P++)"EJECUCI\xd3N (OBTENER USUARIO PUBLICO)"===C[P].tipo&&S.push(C[P].actividadsiguiente.id);this.authenticationService.getReg("todos/actividadprocesosmias/"+this.userinfo[0].idempresa._id+"/"+t._id+"\xb0"+this.userinfo[0]._id,"frmactividads",0).then(W=>{x=W,void 0!==t.verregistros&&c.length>0&&(g=t.verregistros);for(var _="",y=0;y<v.length;y++)if(v[y].correousuarios.indexOf("USUARIOSOLICITANTE")>=0)for(var Z=0;Z<c.length;Z++)c[Z].actor.id===v[y].idpapa&&(_=_+c[Z]._id+",");"Si"===t.permisos.publico&&(t.permisos.ejecutadas="true",""===_&&c.length>=0&&(_=c[0]._id+","));const X={state:{variables:t.permisos,permisosorden:t.permisos,user:null,idllave:t._id,datat:l,ordenfrm:this.ordenfrm,descripciong:this.descripciong,idcategoria:t.categoria,publico:t.publico,verregistros:g,idformulario:t._id,otrasact:S,idformularioproceso:t._id+"-proceso",nidformulario:e,actividadpublicas:_,geoposicion:t.geoposicion,actividades:c,misactividades:x,actorcorreo:v,acciones:T,tipo2:t.tipo2,tipo:t.tipo,ejecuta:t.ejecuta,ejecutainicio:t.ejecutainicio,ejecutaactualiza:t.ejecutaactualiza,ejecutaelimina:t.ejecutaelimina,title:e+" "+this.authenticationService.datraduccion("creacion_registros")}};this.router.navigate(["formulariomovilsdprocesoListPage"],X)})})})})}else if("reportes"===t.tipo)this.router.navigate(["formulariomovilsdreporteListPage"],{state:{variables:t.permisos,permisosorden:t.permisos,user:null,idllave:t._id,datat:l,idcategoria:t.categoria,verregistros:g,idformulario:t._id,publico:t.publico,ordenfrm:this.ordenfrm,descripciong:this.descripciong,idformularioproceso:t._id+"--reportes",nidformulario:e,geoposicion:t.geoposicion,tipo2:t.tipo2,tipo:t.tipo,ejecuta:t.ejecuta,ejecutainicio:t.ejecutainicio,ejecutaactualiza:t.ejecutaactualiza,ejecutaelimina:t.ejecutaelimina,title:""+e}});else{const c={state:{variables:t.permisos,permisosorden:t.permisos,user:null,idllave:t._id,datat:l,idcategoria:t.categoria,ordenfrm:this.ordenfrm,descripciong:this.descripciong,verregistros:g,idformulario:t._id,publico:t.publico,idformularioproceso:t._id+"-proceso",nidformulario:e,geoposicion:t.geoposicion,tipo2:t.tipo2,tipo:t.tipo,ejecuta:t.ejecuta,ejecutainicio:t.ejecutainicio,ejecutaactualiza:t.ejecutaactualiza,ejecutaelimina:t.ejecutaelimina,title:e+" "+this.authenticationService.datraduccion("creacion_registros")}};this.router.navigate(["formulariomovilsdListPage"],c)}},l=>{this.authenticationService.presentAlert(l.error,this.msg,"")})})})}buscarorden(){return(0,h.mG)(this,void 0,void 0,function*(){const t={state:{variables:null,keyxxx:10,idllave:"123",title:this.authenticationService.datraduccion("busqueda_generalorden")}};this.router.navigate(["frmordencomponenteListPage"],t)})}loadData(t){setTimeout(()=>{t.target.complete(),1e3===this.items.length&&(t.target.disabled=!0)},500)}}return o.\u0275fac=function(t){return new(t||o)(i.Y36(j.H7),i.Y36(n.jP),i.Y36(m.F0),i.Y36(k.$),i.Y36(n.Br),i.Y36(u.sK),i.Y36(n.IN))},o.\u0275cmp=i.Xpm({type:o,selectors:[["app-formulariomovils-list"]],viewQuery:function(t,e){if(1&t&&i.Gf(n.ju,5),2&t){let r;i.iGM(r=i.CRH())&&(e.infiniteScroll=r.first)}},decls:34,vars:25,consts:[["color","primary"],["slot","start"],["defaultHref","categoriaformularioListPage"],["size","small"],["collapse","true","slot","end"],[3,"title","click"],["slot","icon-only","name","refresh-circle-outline"],["slot","icon-only","name","search-circle-outline"],[1,"filters-toolbar"],["align-items-center","",1,"searchbar-row"],["animated","",3,"ngModel","placeholder","ngModelChange","ionChange"],[1,"call-to-action-col",3,"hidden"],["fill","clear","color","secondary",1,"filters-btn",3,"title","click"],["slot","icon-only","name","options"],[3,"formGroup","hidden"],[1,"user-friends-content"],["sticky",""],[4,"ngIf"],["class","category-list",4,"ngIf"],["class","empty-list-message",4,"ngIf"],["threshold","100px",3,"ionInfinite"],["loadingSpinner","bubbles",3,"loadingText"],["lines","none",4,"ngFor","ngForOf"],["lines","none"],[1,"ion-text-wrap"],["width","67%"],[1,"category-list"],["class","category-item",3,"click",4,"ngFor","ngForOf","ngForTrackBy"],[1,"category-item",3,"click"],["class","title",4,"ngIf"],[1,"card-thumbnail"],["class","card-thumbnail10",4,"ngIf"],["class","card-thumbnail20",4,"ngIf"],[1,"title"],[1,"card-thumbnail10"],[1,"card-thumbnail20"],[1,"empty-list-message"]],template:function(t,e){1&t&&(i.TgZ(0,"ion-header"),i.TgZ(1,"ion-toolbar",0),i.TgZ(2,"ion-buttons",1),i._UZ(3,"ion-back-button",2),i.qZA(),i.TgZ(4,"ion-title",3),i._uU(5),i.qZA(),i.TgZ(6,"ion-buttons",4),i.TgZ(7,"ion-button",5),i.NdJ("click",function(){return e.pideregistros0()}),i.ALo(8,"translate"),i._UZ(9,"ion-icon",6),i.qZA(),i.qZA(),i.TgZ(10,"ion-buttons",4),i.TgZ(11,"ion-button",5),i.NdJ("click",function(){return e.buscarorden()}),i.ALo(12,"translate"),i._UZ(13,"ion-icon",7),i.qZA(),i.qZA(),i.qZA(),i.TgZ(14,"ion-toolbar",8),i.TgZ(15,"ion-row",9),i.TgZ(16,"ion-col"),i.TgZ(17,"ion-searchbar",10),i.NdJ("ngModelChange",function(l){return e.searchQuery=l})("ionChange",function(){return e.searchList()}),i.ALo(18,"translate"),i.qZA(),i.qZA(),i.TgZ(19,"ion-col",11),i.TgZ(20,"ion-button",12),i.NdJ("click",function(){return e.showAgeFilter=!e.showAgeFilter}),i.ALo(21,"translate"),i._UZ(22,"ion-icon",13),i.qZA(),i.qZA(),i.qZA(),i._UZ(23,"form",14),i.qZA(),i.qZA(),i.TgZ(24,"ion-content",15),i.TgZ(25,"ion-item-divider",16),i.YNc(26,R,4,8,"ion-label",17),i.YNc(27,N,4,8,"ion-label",17),i.qZA(),i.YNc(28,J,2,2,"ion-list",17),i.YNc(29,q,2,2,"div",18),i.YNc(30,B,3,3,"h3",19),i.TgZ(31,"ion-infinite-scroll",20),i.NdJ("ionInfinite",function(l){return e.loadData(l)}),i._UZ(32,"ion-infinite-scroll-content",21),i.ALo(33,"translate"),i.qZA(),i.qZA()),2&t&&(i.xp6(5),i.hij(" ",e.tituloxx," "),i.xp6(2),i.MGl("title"," ",i.lcZ(8,15,"REFRESCARM"),""),i.xp6(4),i.s9C("title",i.lcZ(12,17,"buscar_orden")),i.xp6(6),i.s9C("placeholder",i.lcZ(18,19,"BUSCARM")),i.Q6J("ngModel",e.searchQuery),i.xp6(2),i.Q6J("hidden",!e.showAgeFilter),i.xp6(1),i.MGl("title"," ",i.lcZ(21,21,"FILTROM"),""),i.xp6(3),i.Q6J("formGroup",e.rangeForm)("hidden",!e.showAgeFilter),i.xp6(3),i.Q6J("ngIf",1===(null==e.itemsList?null:e.itemsList.length)),i.xp6(1),i.Q6J("ngIf",(null==e.itemsList?null:e.itemsList.length)>1),i.xp6(1),i.Q6J("ngIf",0===e.efecto),i.xp6(1),i.Q6J("ngIf",(null==e.itemsList?null:e.itemsList.length)>0&&"grid"===e.viewType),i.xp6(1),i.Q6J("ngIf",0===(null==e.itemsList?null:e.itemsList.length)),i.xp6(2),i.s9C("loadingText",i.lcZ(33,23,"espere")))},directives:[n.Gu,n.sr,n.Sm,n.oU,n.cs,n.wd,n.YG,n.gu,n.Nd,n.wI,n.VI,n.j9,d.JJ,d.On,d._Y,d.JL,d.sg,n.W2,n.rH,f.O5,n.ju,n.MB,n.Q$,n.q_,f.sg,n.Ie,I.B],pipes:[u.X$],styles:["[_nghost-%COMP%]{--page-margin: var(--app-narrow-margin);--page-border-radius: var(--app-fair-radius);--page-segment-background: var(--app-background);--page-segment-indicator-height: 2px}ion-item-divider[_ngcontent-%COMP%]{--background: var(--ion-color-light);--padding-start: var(--page-margin)}[_nghost-%COMP%]{--page-margin: var(--app-fair-margin);--page-background: var(--app-background);--page-background-shade: var(--app-background-shade);--page-tags-gutter: 5px}.category-list[_ngcontent-%COMP%]{padding:8px;display:flex;flex-wrap:wrap}.category-list[_ngcontent-%COMP%]   .category-item[_ngcontent-%COMP%]{margin:8px;background-color:var(--ion-color-dark-tint);position:relative;border-radius:4px;overflow:hidden;width:150px;height:220px;color:#fff}.category-list[_ngcontent-%COMP%]   .category-item.color-2[_ngcontent-%COMP%]{background-color:#8da4b0}.category-list[_ngcontent-%COMP%]   .category-item.color-3[_ngcontent-%COMP%]{background-color:#5a8a79}.category-list[_ngcontent-%COMP%]   .category-item.color-4[_ngcontent-%COMP%]{background-color:#e06943}.category-list[_ngcontent-%COMP%]   .category-item[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{position:absolute;left:0;top:0;right:0;padding:12px;font-weight:700;font-size:14px;z-index:2;letter-spacing:.5px;text-shadow:0 2px 8px rgba(0,0,0,.2)}.category-list[_ngcontent-%COMP%]   .category-item[_ngcontent-%COMP%]   .card-thumbnail[_ngcontent-%COMP%]{width:90px;height:90px;position:absolute;top:126px;right:-26px;z-index:1;transform:rotate(21deg);box-shadow:0 2px 8px #0003}.category-list[_ngcontent-%COMP%]   .category-item[_ngcontent-%COMP%]   .card-thumbnail10[_ngcontent-%COMP%]{background:url(form.097eec640a291a73.png) no-repeat center;width:90px;height:90px;position:absolute;top:126px;right:-26px;z-index:1;transform:rotate(21deg);box-shadow:0 2px 8px #0003}.category-list[_ngcontent-%COMP%]   .category-item[_ngcontent-%COMP%]   .card-thumbnail20[_ngcontent-%COMP%]{background:url(process.a9708a44d352a1eb.png) no-repeat center;width:90px;height:90px;position:absolute;top:126px;right:-26px;z-index:1;transform:rotate(21deg);box-shadow:0 2px 8px #0003}.category-list[_ngcontent-%COMP%]   .category-item[_ngcontent-%COMP%]:hover{box-shadow:0 0 11px #21212133;cursor:pointer}"]}),o})(),D=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=i.oAB({type:o}),o.\u0275inj=i.cJS({imports:[[f.ez,n.Pc,L.K,d.u5,d.UX,p.YL,m.Bz.forChild([{path:"",component:H}]),u.aw.forChild()]]}),o})()},26806:(A,b,a)=>{a.d(b,{B:()=>L});var n=a(5e3),m=a(69808);const f=function(u,d){return{"no-animated":u,inline:d}};let L=(()=>{class u{constructor(){this.width="100%",this.height="16px",this.borderRadius="0",this.rounded=!1,this.noAnimated=!1,this.inline=!1,this.styles={}}ngOnInit(){this.styles={width:this.width,height:this.height,borderRadius:this.borderRadius},this.rounded&&(this.styles.borderRadius="999em")}}return u.\u0275fac=function(p){return new(p||u)},u.\u0275cmp=n.Xpm({type:u,selectors:[["skeleton-element"]],inputs:{width:"width",height:"height",borderRadius:"borderRadius",rounded:"rounded",noAnimated:"noAnimated",inline:"inline"},decls:1,vars:5,consts:[[3,"ngClass","ngStyle"]],template:function(p,h){1&p&&n._UZ(0,"div",0),2&p&&n.Q6J("ngClass",n.WLB(2,f,h.noAnimated,h.inline))("ngStyle",h.styles)},directives:[m.mk,m.PC],styles:["[_nghost-%COMP%]{display:block}[inline][_nghost-%COMP%]{display:inline-block}[_nghost-%COMP%]   .inline[_ngcontent-%COMP%]{display:inline-block}[_nghost-%COMP%]   .no-animated[_ngcontent-%COMP%]{-webkit-animation:none!important;animation:none!important;background:rgba(130,130,130,.2)}.animated-background[_ngcontent-%COMP%], [_nghost-%COMP%]   div[_ngcontent-%COMP%]{-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-name:placeHolderShimmer;animation-name:placeHolderShimmer;-webkit-animation-timing-function:linear;animation-timing-function:linear;background:rgba(130,130,130,.2);background:linear-gradient(to right,rgba(130,130,130,.2) 8%,rgba(130,130,130,.3) 18%,rgba(130,130,130,.2) 33%);background-size:800px 100px;position:relative}@-webkit-keyframes placeHolderShimmer{0%{background-position:-468px 0}to{background-position:468px 0}}@keyframes placeHolderShimmer{0%{background-position:-468px 0}to{background-position:468px 0}}"]}),u})()}}]);