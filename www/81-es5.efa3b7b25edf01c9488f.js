function _classCallCheck(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(n,e){for(var l=0;l<e.length;l++){var t=e[l];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}function _createClass(n,e,l){return e&&_defineProperties(n.prototype,e),l&&_defineProperties(n,l),n}(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{Rg8G:function(n,e,l){"use strict";l.d(e,"a",(function(){return t}));var t=function(){function n(){_classCallCheck(this,n),this.width="100%",this.height="16px",this.borderRadius="0",this.rounded=!1,this.noAnimated=!1,this.inline=!1,this.styles={}}return _createClass(n,[{key:"ngOnInit",value:function(){this.styles={width:this.width,height:this.height,borderRadius:this.borderRadius},this.rounded&&(this.styles.borderRadius="999em")}}]),n}()},"hQ+M":function(n,e,l){"use strict";l.d(e,"a",(function(){return o})),l.d(e,"b",(function(){return u}));var t=l("8Y7J"),i=l("SVse"),o=(l("Rg8G"),t["\u0275crt"]({encapsulation:0,styles:[["[_nghost-%COMP%]{display:block}[_nghost-%COMP%]   .inline[_ngcontent-%COMP%], [inline][_nghost-%COMP%]{display:inline-block}[_nghost-%COMP%]   .no-animated[_ngcontent-%COMP%]{-webkit-animation:none!important;animation:none!important;background:hsla(0,0%,51%,.2)}.animated-background[_ngcontent-%COMP%], [_nghost-%COMP%]   div[_ngcontent-%COMP%]{-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-name:placeHolderShimmer;animation-name:placeHolderShimmer;-webkit-animation-timing-function:linear;animation-timing-function:linear;background:hsla(0,0%,51%,.2);background:linear-gradient(90deg,hsla(0,0%,51%,.2) 8%,hsla(0,0%,51%,.3) 18%,hsla(0,0%,51%,.2) 33%);background-size:800px 100px;position:relative}@-webkit-keyframes placeHolderShimmer{0%{background-position:-468px 0}to{background-position:468px 0}}@keyframes placeHolderShimmer{0%{background-position:-468px 0}to{background-position:468px 0}}"]],data:{}}));function u(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,3,"div",[],null,null,null,null,null)),t["\u0275did"](1,278528,null,0,i.NgClass,[t.IterableDiffers,t.KeyValueDiffers,t.ElementRef,t.Renderer2],{ngClass:[0,"ngClass"]},null),t["\u0275pod"](2,{"no-animated":0,inline:1}),t["\u0275did"](3,278528,null,0,i.NgStyle,[t.ElementRef,t.KeyValueDiffers,t.Renderer2],{ngStyle:[0,"ngStyle"]},null)],(function(n,e){var l=e.component,t=n(e,2,0,l.noAnimated,l.inline);n(e,1,0,t),n(e,3,0,l.styles)}),null)}},ja3t:function(n,e,l){"use strict";l.r(e),l.d(e,"formulariomovilsListPageModuleNgFactory",(function(){return P}));var t=l("8Y7J"),i=function n(){_classCallCheck(this,n)},o=l("Xh6l"),u=l("pMnS"),r=l("MKJQ"),a=l("sZkV"),s=l("TSSN"),d=l("hQ+M"),c=l("Rg8G"),g=l("SVse"),m=l("s7LF"),f=l("mrSG"),p=l("ZtEv"),h=l("jtHE"),v=function(){function n(e,l,t,i,o,u,r){_classCallCheck(this,n),this._DomSanitizer=e,this.routerOutlet=l,this.router=t,this.authenticationService=i,this.alertController=o,this.translateService=u,this.modalController=r,this.showAgeFilter=!1,this.showmenu=!1,this.items=[],this.variables=[],this.userinfo=[],this.viewType="grid",this.tituloxx="",this.efecto=0,this.seguro="",this.msg="",this.currentSegment="Todos",this.searchSubject=new h.a(1),this.apifoto=this.authenticationService.getapifoto()}return _createClass(n,[{key:"changeToList",value:function(){this.viewType="list"}},{key:"changeToGrid",value:function(){this.viewType="grid"}},{key:"ngOnInit",value:function(){var n=this;this.variables=this.router.getCurrentNavigation().extras.state.variables,this.idllave=this.router.getCurrentNavigation().extras.state.idllave,this.tipo=this.router.getCurrentNavigation().extras.state.tipo,this.userinfo=this.authenticationService.getcopiauser(),this.tituloxx=this.router.getCurrentNavigation().extras.state.title,this.idcategoria=this.router.getCurrentNavigation().extras.state.idcategoria,this.searchQuery="",this.translateService.get("SEGUROM").subscribe((function(e){n.seguro=e})),this.translateService.get("MSGM").subscribe((function(e){n.msg=e})),this.rangeForm=new m.g({dual:new m.e({lower:1,upper:100})}),this.currentSegment="todos",this.pideregistros(this.currentSegment)}},{key:"filterContacts",value:function(n){var e=n.detail.value;this.currentSegment=e,this.pideregistros(e)}},{key:"pideregistros0",value:function(){this.pideregistros(this.currentSegment)}},{key:"pideregistros",value:function(n){var e=this;this.itemsList=[],this.efecto=0;var l;l=this.idcategoria+"/"+this.userinfo[0]._id+"/"+this.userinfo[0].idempresa._id+"\xb0"+n+"\xb0"+this.tipo+"/categoriausr",this.authenticationService.getReg(l,"frmmovils",0).then((function(n){e.efecto=1,e.items=n,e.itemsList=e.items}),(function(n){e.authenticationService.presentAlert(n.error,e.msg,"")}))}},{key:"searchList",value:function(){this.searchSubject.next({lower:this.rangeForm.controls.dual.value.lower,upper:this.rangeForm.controls.dual.value.upper,query:this.searchQuery}),this.itemsList=this.filterList(this.items,this.searchQuery&&null!==this.searchQuery?this.searchQuery:"")}},{key:"filterList",value:function(n,e){return n.filter((function(n){return n.nombre.toLowerCase().includes(e.toLowerCase())}))}},{key:"otrasop",value:function(n){return Object(f.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var l,t=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.alertController.create({cssClass:"my-custom-class",header:"Seleccione Opci\xf3n",inputs:[{name:"Productos",type:"radio",label:"Productos",checked:!0,value:"/ProductoListPage\xb0Productos ->"+n.nombre}],buttons:[{text:"Cancel",role:"cancel",cssClass:"secondary",handler:function(n){}},{text:"Ok",handler:function(e){var l=e.split("\xb0");t.router.navigate([l[0]],{state:{variables:t.variables,user:null,idllave:n._id,title:l[1]}})}}]});case 2:return l=e.sent,e.next=5,l.present();case 5:case"end":return e.stop()}}),e,this)})))}},{key:"updateRecord",value:function(n){return Object(f.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var l=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.authenticationService.getReg(n._id+"/formulariocamposver/"+this.userinfo[0].idempresa._id,"frmmovils",0).then((function(e){var t="";if(t="Si"===n.permisos.publico?"Ver solo los mios":n.verregistros,"proceso"===n.tipo){var i=[],o=[],u=[],r=[];l.authenticationService.getReg("todos/actividadprocesos/"+l.userinfo[0].idempresa._id+"/"+n._id,"frmactividads",0).then((function(a){i=a,l.authenticationService.getReg("todos/accionproceso2/"+l.userinfo[0].idempresa._id+"/"+n._id,"frmaccioness",0).then((function(a){r=a,l.authenticationService.getReg("todos/accionproceso/"+l.userinfo[0].idempresa._id+"/"+n._id,"frmaccioness",0).then((function(a){u=a,l.authenticationService.getReg("todos/actividadprocesosmias/"+l.userinfo[0].idempresa._id+"/"+n._id+"\xb0"+l.userinfo[0]._id,"frmactividads",0).then((function(a){o=a,void 0!==n.verregistros&&i.length>0&&(t=n.verregistros);for(var s="",d=0;d<r.length;d++)if(r[d].correousuarios.indexOf("USUARIOSOLICITANTE")>=0)for(var c=0;c<i.length;c++)i[c].actor.id===r[d].idpapa&&(s=s+i[c]._id+",");"Si"===n.permisos.publico&&(n.permisos.ejecutadas="true",""===s&&i.length>=0&&(s=i[0]._id+",")),l.router.navigate(["formulariomovilsdprocesoListPage"],{state:{variables:n.permisos,permisosorden:n.permisos,user:null,idllave:n._id,datat:e,idcategoria:n.categoria,publico:n.publico,verregistros:t,idformulario:n._id,idformularioproceso:n._id+"-proceso",nidformulario:n.nombre,actividadpublicas:s,geoposicion:n.geoposicion,actividades:i,misactividades:o,actorcorreo:r,acciones:u,tipo2:n.tipo2,tipo:n.tipo,ejecuta:n.ejecuta,ejecutainicio:n.ejecutainicio,ejecutaactualiza:n.ejecutaactualiza,ejecutaelimina:n.ejecutaelimina,title:"Creaci\xf3n de registros ->"+n.nombre}})}))}))}))}))}else l.router.navigate(["formulariomovilsdListPage"],{state:{variables:n.permisos,permisosorden:n.permisos,user:null,idllave:n._id,datat:e,idcategoria:n.categoria,verregistros:t,idformulario:n._id,publico:n.publico,idformularioproceso:n._id+"-proceso",nidformulario:n.nombre,geoposicion:n.geoposicion,tipo2:n.tipo2,tipo:n.tipo,ejecuta:n.ejecuta,ejecutainicio:n.ejecutainicio,ejecutaactualiza:n.ejecutaactualiza,ejecutaelimina:n.ejecutaelimina,title:"Creaci\xf3n de registros ->"+n.nombre}})}),(function(n){l.authenticationService.presentAlert(n.error,l.msg,"")}));case 1:case"end":return e.stop()}}),e,this)})))}},{key:"loadData",value:function(n){var e=this;setTimeout((function(){n.target.complete(),1e3===e.items.length&&(n.target.disabled=!0)}),500)}}]),n}(),b=l("cUpR"),R=l("iInd"),C=t["\u0275crt"]({encapsulation:0,styles:[["[_nghost-%COMP%]{--page-margin:var(--app-narrow-margin);--page-border-radius:var(--app-fair-radius);--page-segment-background:var(--app-background);--page-segment-indicator-height:2px}ion-item-divider[_ngcontent-%COMP%]{--background:var(--ion-color-light);--padding-start:var(--page-margin)}[_nghost-%COMP%]{--page-margin:var(--app-fair-margin);--page-background:var(--app-background);--page-background-shade:var(--app-background-shade);--page-tags-gutter:5px}"]],data:{}});function y(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,3,"ion-label",[],null,null,null,r.Qb,r.G)),t["\u0275did"](1,49152,null,0,a.O,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275ted"](2,0,["",": ",""])),t["\u0275pid"](131072,s.k,[s.l,t.ChangeDetectorRef])],null,(function(n,e){var l=e.component;n(e,2,0,t["\u0275unv"](e,2,0,t["\u0275nov"](e,3).transform("NOREGISTROSM")),l.itemsList.length)}))}function k(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,9,"ion-item",[["lines","none"]],null,null,null,r.Pb,r.A)),t["\u0275did"](1,49152,null,0,a.I,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{lines:[0,"lines"]},null),(n()(),t["\u0275eld"](2,0,null,0,7,"ion-label",[],null,null,null,r.Qb,r.G)),t["\u0275did"](3,49152,null,0,a.O,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](4,0,null,0,1,"skeleton-element",[],null,null,null,d.b,d.a)),t["\u0275did"](5,114688,null,0,c.a,[],null,null),(n()(),t["\u0275eld"](6,0,null,0,1,"skeleton-element",[],null,null,null,d.b,d.a)),t["\u0275did"](7,114688,null,0,c.a,[],null,null),(n()(),t["\u0275eld"](8,0,null,0,1,"skeleton-element",[["width","67%"]],null,null,null,d.b,d.a)),t["\u0275did"](9,114688,null,0,c.a,[],{width:[0,"width"]},null)],(function(n,e){n(e,1,0,"none"),n(e,5,0),n(e,7,0),n(e,9,0,"67%")}),null)}function N(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,4,"ion-list",[],null,null,null,r.Sb,r.H)),t["\u0275did"](1,49152,null,0,a.P,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275and"](16777216,null,0,2,null,k)),t["\u0275did"](3,278528,null,0,g.NgForOf,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),t["\u0275pad"](4,7)],(function(n,e){var l=n(e,4,0,0,1,2,3,4,5,6);n(e,3,0,l)}),null)}function D(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,22,"ion-col",[["size-xs","12"],["sizeLg","4"],["sizeMd","4"],["sizeXs","6"]],null,null,null,r.xb,r.n)),t["\u0275did"](1,49152,null,0,a.u,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{sizeLg:[0,"sizeLg"],sizeMd:[1,"sizeMd"],sizeXs:[2,"sizeXs"]},null),(n()(),t["\u0275eld"](2,0,null,0,20,"ion-card",[],null,[[null,"click"]],(function(n,e,l){var t=!0;return"click"===e&&(t=!1!==n.component.updateRecord(n.context.$implicit)&&t),t}),r.ub,r.g)),t["\u0275did"](3,49152,null,0,a.n,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](4,0,null,0,0,"img",[["style","width: 100% !important; height: auto !important;"]],[[8,"src",4]],null,null,null,null)),(n()(),t["\u0275eld"](5,0,null,0,7,"ion-card-header",[],null,null,null,r.rb,r.i)),t["\u0275did"](6,49152,null,0,a.p,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](7,0,null,0,2,"ion-card-subtitle",[],null,null,null,r.sb,r.j)),t["\u0275did"](8,49152,null,0,a.q,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275ted"](9,0,["",""])),(n()(),t["\u0275eld"](10,0,null,0,2,"ion-card-title",[],null,null,null,r.tb,r.k)),t["\u0275did"](11,49152,null,0,a.r,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275ted"](12,0,["",""])),(n()(),t["\u0275eld"](13,0,null,0,9,"ion-row",[["size","12"]],null,null,null,r.ac,r.Q)),t["\u0275did"](14,49152,null,0,a.hb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](15,0,null,0,7,"ion-toolbar",[["color","transparent"]],null,null,null,r.sc,r.ib)),t["\u0275did"](16,49152,null,0,a.Ab,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{color:[0,"color"]},null),(n()(),t["\u0275eld"](17,0,null,0,5,"ion-buttons",[["slot","secondary"]],null,null,null,r.pb,r.f)),t["\u0275did"](18,49152,null,0,a.m,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](19,0,null,0,3,"ion-button",[["color","secondary"],["title","Registros de formulario"]],null,[[null,"click"]],(function(n,e,l){var t=!0;return"click"===e&&(t=!1!==n.component.updateRecord(n.context.$implicit)&&t),t}),r.ob,r.e)),t["\u0275did"](20,49152,null,0,a.l,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{color:[0,"color"]},null),(n()(),t["\u0275eld"](21,0,null,0,1,"ion-icon",[["name","reader-outline"],["slot","icon-only"]],null,null,null,r.Fb,r.v)),t["\u0275did"](22,49152,null,0,a.D,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{name:[0,"name"]},null)],(function(n,e){n(e,1,0,"4","4","6"),n(e,16,0,"transparent"),n(e,20,0,"secondary"),n(e,22,0,"reader-outline")}),(function(n,e){var l=e.component;n(e,4,0,l._DomSanitizer.bypassSecurityTrustUrl(l.apifoto+e.context.$implicit.foto)),n(e,9,0,e.context.$implicit.categoria),n(e,12,0,e.context.$implicit.nombre)}))}function w(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,5,"ion-grid",[],null,null,null,r.Db,r.t)),t["\u0275did"](1,49152,null,0,a.B,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](2,0,null,0,3,"ion-row",[],null,null,null,r.ac,r.Q)),t["\u0275did"](3,49152,null,0,a.hb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275and"](16777216,null,0,1,null,D)),t["\u0275did"](5,278528,null,0,g.NgForOf,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"]},null)],(function(n,e){n(e,5,0,e.component.itemsList)}),null)}function E(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,2,"h3",[["class","empty-list-message"]],null,null,null,null,null)),(n()(),t["\u0275ted"](1,null,[" "," "])),t["\u0275pid"](131072,s.k,[s.l,t.ChangeDetectorRef])],null,(function(n,e){n(e,1,0,t["\u0275unv"](e,1,0,t["\u0275nov"](e,2).transform("NODATOS")))}))}function S(n){return t["\u0275vid"](0,[t["\u0275qud"](671088640,1,{infiniteScroll:0}),(n()(),t["\u0275eld"](1,0,null,null,64,"ion-header",[],null,null,null,r.Eb,r.u)),t["\u0275did"](2,49152,null,0,a.C,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](3,0,null,0,16,"ion-toolbar",[["color","primary"]],null,null,null,r.sc,r.ib)),t["\u0275did"](4,49152,null,0,a.Ab,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{color:[0,"color"]},null),(n()(),t["\u0275eld"](5,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,r.pb,r.f)),t["\u0275did"](6,49152,null,0,a.m,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](7,0,null,0,2,"ion-back-button",[["defaultHref","categoriaformularioListPage"]],null,[[null,"click"]],(function(n,e,l){var i=!0;return"click"===e&&(i=!1!==t["\u0275nov"](n,9).onClick(l)&&i),i}),r.mb,r.c)),t["\u0275did"](8,49152,null,0,a.h,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{defaultHref:[0,"defaultHref"]},null),t["\u0275did"](9,16384,null,0,a.i,[[2,a.gb],a.Hb,a.e],{defaultHref:[0,"defaultHref"]},null),(n()(),t["\u0275eld"](10,0,null,0,2,"ion-title",[],null,null,null,r.qc,r.gb)),t["\u0275did"](11,49152,null,0,a.yb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275ted"](12,0,[" "," "])),(n()(),t["\u0275eld"](13,0,null,0,6,"ion-buttons",[["slot","end"]],null,null,null,r.pb,r.f)),t["\u0275did"](14,49152,null,0,a.m,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](15,0,null,0,4,"ion-button",[],[[8,"title",0]],[[null,"click"]],(function(n,e,l){var t=!0;return"click"===e&&(t=!1!==n.component.pideregistros0()&&t),t}),r.ob,r.e)),t["\u0275did"](16,49152,null,0,a.l,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),t["\u0275pid"](131072,s.k,[s.l,t.ChangeDetectorRef]),(n()(),t["\u0275eld"](18,0,null,0,1,"ion-icon",[["name","refresh-circle-outline"],["slot","icon-only"]],null,null,null,r.Fb,r.v)),t["\u0275did"](19,49152,null,0,a.D,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{name:[0,"name"]},null),(n()(),t["\u0275eld"](20,0,null,0,45,"ion-toolbar",[["class","filters-toolbar"]],null,null,null,r.sc,r.ib)),t["\u0275did"](21,49152,null,0,a.Ab,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](22,0,null,0,18,"ion-row",[["align-items-center",""],["class","searchbar-row"]],null,null,null,r.ac,r.Q)),t["\u0275did"](23,49152,null,0,a.hb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](24,0,null,0,9,"ion-col",[],null,null,null,r.xb,r.n)),t["\u0275did"](25,49152,null,0,a.u,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](26,0,null,0,7,"ion-searchbar",[["animated",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionChange"],[null,"ionBlur"]],(function(n,e,l){var i=!0,o=n.component;return"ionBlur"===e&&(i=!1!==t["\u0275nov"](n,29)._handleBlurEvent(l.target)&&i),"ionChange"===e&&(i=!1!==t["\u0275nov"](n,29)._handleInputEvent(l.target)&&i),"ngModelChange"===e&&(i=!1!==(o.searchQuery=l)&&i),"ionChange"===e&&(i=!1!==o.searchList()&&i),i}),r.bc,r.R)),t["\u0275did"](27,49152,null,0,a.ib,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{animated:[0,"animated"],placeholder:[1,"placeholder"]},null),t["\u0275pid"](131072,s.k,[s.l,t.ChangeDetectorRef]),t["\u0275did"](29,16384,null,0,a.Pb,[t.ElementRef],null,null),t["\u0275prd"](1024,null,m.m,(function(n){return[n]}),[a.Pb]),t["\u0275did"](31,671744,null,0,m.q,[[8,null],[8,null],[8,null],[6,m.m]],{model:[0,"model"]},{update:"ngModelChange"}),t["\u0275prd"](2048,null,m.n,null,[m.q]),t["\u0275did"](33,16384,null,0,m.o,[[4,m.n]],null,null),(n()(),t["\u0275eld"](34,0,null,0,6,"ion-col",[["class","call-to-action-col"]],[[8,"hidden",0]],null,null,r.xb,r.n)),t["\u0275did"](35,49152,null,0,a.u,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](36,0,null,0,4,"ion-button",[["class","filters-btn"],["color","secondary"],["fill","clear"]],[[8,"title",0]],[[null,"click"]],(function(n,e,l){var t=!0,i=n.component;return"click"===e&&(t=0!=(i.showAgeFilter=!i.showAgeFilter)&&t),t}),r.ob,r.e)),t["\u0275did"](37,49152,null,0,a.l,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{color:[0,"color"],fill:[1,"fill"]},null),t["\u0275pid"](131072,s.k,[s.l,t.ChangeDetectorRef]),(n()(),t["\u0275eld"](39,0,null,0,1,"ion-icon",[["name","options"],["slot","icon-only"]],null,null,null,r.Fb,r.v)),t["\u0275did"](40,49152,null,0,a.D,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{name:[0,"name"]},null),(n()(),t["\u0275eld"](41,0,null,0,24,"form",[["novalidate",""]],[[8,"hidden",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],(function(n,e,l){var i=!0;return"submit"===e&&(i=!1!==t["\u0275nov"](n,43).onSubmit(l)&&i),"reset"===e&&(i=!1!==t["\u0275nov"](n,43).onReset()&&i),i}),null,null)),t["\u0275did"](42,16384,null,0,m.y,[],null,null),t["\u0275did"](43,540672,null,0,m.h,[[8,null],[8,null]],{form:[0,"form"]},null),t["\u0275prd"](2048,null,m.b,null,[m.h]),t["\u0275did"](45,16384,null,0,m.p,[[4,m.b]],null,null),(n()(),t["\u0275eld"](46,0,null,null,19,"ion-row",[["class","range-item-row"]],null,null,null,r.ac,r.Q)),t["\u0275did"](47,49152,null,0,a.hb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](48,0,null,0,8,"ion-col",[["size","12"]],null,null,null,r.xb,r.n)),t["\u0275did"](49,49152,null,0,a.u,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{size:[0,"size"]},null),(n()(),t["\u0275eld"](50,0,null,0,6,"div",[["class","range-header"]],null,null,null,null,null)),(n()(),t["\u0275eld"](51,0,null,null,1,"span",[["class","range-value"]],null,null,null,null,null)),(n()(),t["\u0275ted"](52,null,["",""])),(n()(),t["\u0275eld"](53,0,null,null,1,"span",[["class","range-label"]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["Filter by age"])),(n()(),t["\u0275eld"](55,0,null,null,1,"span",[["class","range-value"]],null,null,null,null,null)),(n()(),t["\u0275ted"](56,null,["",""])),(n()(),t["\u0275eld"](57,0,null,0,8,"ion-col",[["size","12"]],null,null,null,r.xb,r.n)),t["\u0275did"](58,49152,null,0,a.u,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{size:[0,"size"]},null),(n()(),t["\u0275eld"](59,0,null,0,6,"ion-range",[["class","range-control"],["color","secondary"],["debounce","400"],["dualKnobs","true"],["formControlName","dual"],["max","100"],["min","1"],["pin","true"],["step","1"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionChange"],[null,"ionBlur"]],(function(n,e,l){var i=!0,o=n.component;return"ionBlur"===e&&(i=!1!==t["\u0275nov"](n,61)._handleBlurEvent(l.target)&&i),"ionChange"===e&&(i=!1!==t["\u0275nov"](n,61)._handleChangeEvent(l.target)&&i),"ionChange"===e&&(i=!1!==o.searchList()&&i),i}),r.Zb,r.P)),t["\u0275did"](60,49152,null,0,a.ab,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{color:[0,"color"],debounce:[1,"debounce"],dualKnobs:[2,"dualKnobs"],max:[3,"max"],min:[4,"min"],pin:[5,"pin"],step:[6,"step"]},null),t["\u0275did"](61,16384,null,0,a.Ob,[t.ElementRef],null,null),t["\u0275prd"](1024,null,m.m,(function(n){return[n]}),[a.Ob]),t["\u0275did"](63,671744,null,0,m.f,[[3,m.b],[8,null],[8,null],[6,m.m],[2,m.x]],{name:[0,"name"]},null),t["\u0275prd"](2048,null,m.n,null,[m.f]),t["\u0275did"](65,16384,null,0,m.o,[[4,m.n]],null,null),(n()(),t["\u0275eld"](66,0,null,null,15,"ion-content",[["class","user-friends-content"]],null,null,null,r.yb,r.o)),t["\u0275did"](67,49152,null,0,a.v,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](68,0,null,0,3,"ion-item-divider",[["sticky",""]],null,null,null,r.Kb,r.B)),t["\u0275did"](69,49152,null,0,a.J,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{sticky:[0,"sticky"]},null),(n()(),t["\u0275and"](16777216,null,0,1,null,y)),t["\u0275did"](71,16384,null,0,g.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["\u0275and"](16777216,null,0,1,null,N)),t["\u0275did"](73,16384,null,0,g.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["\u0275and"](16777216,null,0,1,null,w)),t["\u0275did"](75,16384,null,0,g.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["\u0275and"](16777216,null,0,1,null,E)),t["\u0275did"](77,16384,null,0,g.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["\u0275eld"](78,0,null,0,3,"ion-infinite-scroll",[["threshold","100px"]],null,[[null,"ionInfinite"]],(function(n,e,l){var t=!0;return"ionInfinite"===e&&(t=!1!==n.component.loadData(l)&&t),t}),r.Ib,r.x)),t["\u0275did"](79,49152,[[1,4]],0,a.F,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{threshold:[0,"threshold"]},null),(n()(),t["\u0275eld"](80,0,null,0,1,"ion-infinite-scroll-content",[["loadingSpinner","bubbles"],["loadingText","Espere un momento..."]],null,null,null,r.Hb,r.y)),t["\u0275did"](81,49152,null,0,a.G,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{loadingSpinner:[0,"loadingSpinner"],loadingText:[1,"loadingText"]},null)],(function(n,e){var l=e.component;n(e,4,0,"primary"),n(e,8,0,"categoriaformularioListPage"),n(e,9,0,"categoriaformularioListPage"),n(e,19,0,"refresh-circle-outline"),n(e,27,0,"",t["\u0275inlineInterpolate"](1,"",t["\u0275unv"](e,27,1,t["\u0275nov"](e,28).transform("BUSCARM")),"")),n(e,31,0,l.searchQuery),n(e,37,0,"secondary","clear"),n(e,40,0,"options"),n(e,43,0,l.rangeForm),n(e,49,0,"12"),n(e,58,0,"12"),n(e,60,0,"secondary","400","true","100","1","true","1"),n(e,63,0,"dual"),n(e,69,0,""),n(e,71,0,(null==l.itemsList?null:l.itemsList.length)>0),n(e,73,0,0===l.efecto),n(e,75,0,(null==l.itemsList?null:l.itemsList.length)>0&&"grid"===l.viewType),n(e,77,0,0==(null==l.itemsList?null:l.itemsList.length)),n(e,79,0,"100px"),n(e,81,0,"bubbles","Espere un momento...")}),(function(n,e){var l=e.component;n(e,12,0,l.tituloxx),n(e,15,0,t["\u0275inlineInterpolate"](1," ",t["\u0275unv"](e,15,0,t["\u0275nov"](e,17).transform("REFRESCARM")),"")),n(e,26,0,t["\u0275nov"](e,33).ngClassUntouched,t["\u0275nov"](e,33).ngClassTouched,t["\u0275nov"](e,33).ngClassPristine,t["\u0275nov"](e,33).ngClassDirty,t["\u0275nov"](e,33).ngClassValid,t["\u0275nov"](e,33).ngClassInvalid,t["\u0275nov"](e,33).ngClassPending),n(e,34,0,!l.showAgeFilter),n(e,36,0,t["\u0275inlineInterpolate"](1," ",t["\u0275unv"](e,36,0,t["\u0275nov"](e,38).transform("FILTROM")),"")),n(e,41,0,!l.showAgeFilter,t["\u0275nov"](e,45).ngClassUntouched,t["\u0275nov"](e,45).ngClassTouched,t["\u0275nov"](e,45).ngClassPristine,t["\u0275nov"](e,45).ngClassDirty,t["\u0275nov"](e,45).ngClassValid,t["\u0275nov"](e,45).ngClassInvalid,t["\u0275nov"](e,45).ngClassPending),n(e,52,0,l.rangeForm.controls.dual.value.lower),n(e,56,0,l.rangeForm.controls.dual.value.upper),n(e,59,0,t["\u0275nov"](e,65).ngClassUntouched,t["\u0275nov"](e,65).ngClassTouched,t["\u0275nov"](e,65).ngClassPristine,t["\u0275nov"](e,65).ngClassDirty,t["\u0275nov"](e,65).ngClassValid,t["\u0275nov"](e,65).ngClassInvalid,t["\u0275nov"](e,65).ngClassPending)}))}var _=t["\u0275ccf"]("page-formulariomovils-list",v,(function(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"page-formulariomovils-list",[],null,null,null,S,C)),t["\u0275did"](1,114688,null,0,v,[b.b,a.gb,R.m,p.a,a.b,s.l,a.Gb],null,null)],(function(n,e){n(e,1,0)}),null)}),{},{},[]),x=l("IheW"),Z=l("ZpN7"),I=l("Kt/9"),O=l("j1ZV"),L=l("gMqc"),P=t["\u0275cmf"](i,[],(function(n){return t["\u0275mod"]([t["\u0275mpd"](512,t.ComponentFactoryResolver,t["\u0275CodegenComponentFactoryResolver"],[[8,[o.c,u.a,_]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t["\u0275mpd"](4608,g.NgLocalization,g.NgLocaleLocalization,[t.LOCALE_ID]),t["\u0275mpd"](4608,a.c,a.c,[t.NgZone,t.ApplicationRef]),t["\u0275mpd"](4608,a.Gb,a.Gb,[a.c,t.ComponentFactoryResolver,t.Injector]),t["\u0275mpd"](4608,a.Lb,a.Lb,[a.c,t.ComponentFactoryResolver,t.Injector]),t["\u0275mpd"](4608,m.w,m.w,[]),t["\u0275mpd"](4608,x.i,x.o,[g.DOCUMENT,t.PLATFORM_ID,x.m]),t["\u0275mpd"](4608,x.p,x.p,[x.i,x.n]),t["\u0275mpd"](5120,x.a,(function(n){return[n]}),[x.p]),t["\u0275mpd"](4608,x.l,x.l,[]),t["\u0275mpd"](6144,x.j,null,[x.l]),t["\u0275mpd"](4608,x.h,x.h,[x.j]),t["\u0275mpd"](6144,x.b,null,[x.h]),t["\u0275mpd"](4608,x.f,x.k,[x.b,t.Injector]),t["\u0275mpd"](4608,x.c,x.c,[x.f]),t["\u0275mpd"](5120,t.APP_INITIALIZER,(function(n){return[Z.b(n)]}),[I.a]),t["\u0275mpd"](4608,m.d,m.d,[]),t["\u0275mpd"](4608,s.h,s.g,[]),t["\u0275mpd"](4608,s.d,s.f,[]),t["\u0275mpd"](4608,s.j,s.e,[]),t["\u0275mpd"](4608,s.c,s.b,[]),t["\u0275mpd"](4608,s.l,s.l,[s.m,s.h,s.d,s.j,s.c,s.n,s.p,s.o,s.a]),t["\u0275mpd"](1073742336,g.CommonModule,g.CommonModule,[]),t["\u0275mpd"](1073742336,a.Cb,a.Cb,[]),t["\u0275mpd"](1073742336,m.v,m.v,[]),t["\u0275mpd"](1073742336,m.j,m.j,[]),t["\u0275mpd"](1073742336,x.e,x.e,[]),t["\u0275mpd"](1073742336,x.d,x.d,[]),t["\u0275mpd"](1073742336,Z.a,Z.a,[]),t["\u0275mpd"](1073742336,O.a,O.a,[]),t["\u0275mpd"](1073742336,m.s,m.s,[]),t["\u0275mpd"](1073742336,L.c,L.c,[]),t["\u0275mpd"](1073742336,R.p,R.p,[[2,R.u],[2,R.m]]),t["\u0275mpd"](1073742336,s.i,s.i,[]),t["\u0275mpd"](1073742336,i,i,[]),t["\u0275mpd"](256,x.m,"XSRF-TOKEN",[]),t["\u0275mpd"](256,x.n,"X-XSRF-TOKEN",[]),t["\u0275mpd"](1024,R.k,(function(){return[[{path:"",component:v}]]}),[]),t["\u0275mpd"](256,s.p,void 0,[]),t["\u0275mpd"](256,s.n,void 0,[]),t["\u0275mpd"](256,s.o,void 0,[]),t["\u0275mpd"](256,s.a,void 0,[])])}))}}]);