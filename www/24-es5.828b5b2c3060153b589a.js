function _defineProperties(n,l){for(var e=0;e<l.length;e++){var t=l[e];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}function _createClass(n,l,e){return l&&_defineProperties(n.prototype,l),e&&_defineProperties(n,e),n}function _classCallCheck(n,l){if(!(n instanceof l))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{M6mA:function(n,l,e){"use strict";e.r(l),e.d(l,"frmtareasprogramadas0ListPageModuleNgFactory",(function(){return z}));var t=e("8Y7J"),i=function n(){_classCallCheck(this,n)},u=e("Xh6l"),o=e("pMnS"),r=e("MKJQ"),a=e("sZkV"),s=e("TSSN"),d=e("hQ+M"),c=e("Rg8G"),g=e("SVse"),f=e("iInd"),m=e("s7LF"),h=e("mrSG"),p=e("ZtEv"),v=e("jtHE"),b=e("gcOT"),R=function(){function n(l,e,t,i,u,o){_classCallCheck(this,n),this.routerOutlet=l,this.router=e,this.authenticationService=t,this.alertController=i,this.translateService=u,this.modalController=o,this.showAgeFilter=!1,this.showmenu=!1,this.items=[],this.variables=[],this.userinfo=[],this.viewType="grid",this.esvisible=!1,this.tituloxx="",this.efecto=0,this.seguro="",this.msg="",this.currentSegment="activa",this.searchSubject=new v.a(1),this.apifoto=this.authenticationService.getapifoto()}return _createClass(n,[{key:"changeToList",value:function(){this.viewType="list"}},{key:"changeToGrid",value:function(){this.viewType="grid"}},{key:"ngOnInit",value:function(){var n=this;this.router.getCurrentNavigation().extras.state?(this.variables=this.router.getCurrentNavigation().extras.state.variables,this.idllave=this.router.getCurrentNavigation().extras.state.idllave,this.tituloxx=this.variables?this.variables.nombre:"Mis tareas programadas"):(this.variables={idrol:"5f503beeeda4710798a79b8a",nivel:".",nombre:"Mis tareas programadas",pactualizacion:!0,pconsulta:!0,pcreacion:!0,peliminacion:!0,pfiltro:!0,pingreso:!0,potros1:"",preporte:!0},this.idllave="",this.tituloxx=this.variables.nombre),this.userinfo=this.authenticationService.getcopiauser(),this.geoposiciontxt=this.setCurrentLocationa33(),this.searchQuery="",this.translateService.get("SEGUROM").subscribe((function(l){n.seguro=l})),this.translateService.get("MSGM").subscribe((function(l){n.msg=l})),this.rangeForm=new m.g({dual:new m.e({lower:1,upper:100})}),this.authenticationService.authState4.subscribe((function(l){l&&n.pideregistros(n.currentSegment)}))}},{key:"ionViewDidEnter",value:function(){}},{key:"ionViewWillEnter",value:function(){this.currentSegment="activa",this.pideregistros(this.currentSegment)}},{key:"filterContacts",value:function(n){var l=n.detail.value;this.currentSegment=l,this.pideregistros(l)}},{key:"pideregistros0",value:function(){this.pideregistros(this.currentSegment)}},{key:"setCurrentLocationa33",value:function(){return Object(h.a)(this,void 0,void 0,regeneratorRuntime.mark((function n(){var l=this;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,b.e.Geolocation.requestPermissions();case 2:b.c.isPluginAvailable("Geolocation")&&b.d.getCurrentPosition().then((function(n){l.geoposiciontxt=n.coords.latitude+"\xac"+n.coords.longitude})).catch((function(n){l.geoposiciontxt=""}));case 3:case"end":return n.stop()}}),n)})))}},{key:"pideregistros",value:function(n){var l=this;this.itemsList=[],this.efecto=0,this.authenticationService.getReg("todos0/todos0/"+this.userinfo[0].idempresa._id+"/"+this.userinfo[0]._id+"/"+this.userinfo[0].role,"frmtareasprogramadass",0).then((function(n){l.efecto=1,l.items=n,l.itemsList=l.items}),(function(n){l.authenticationService.presentAlert(n.error,l.msg,"")}))}},{key:"searchList",value:function(){this.searchSubject.next({lower:this.rangeForm.controls.dual.value.lower,upper:this.rangeForm.controls.dual.value.upper,query:this.searchQuery}),this.itemsList=this.filterList(this.items,this.searchQuery&&null!==this.searchQuery?this.searchQuery:"")}},{key:"filterList",value:function(n,l){return n.filter((function(n){return n.nombre.toLowerCase().includes(l.toLowerCase())}))}},{key:"otrasop",value:function(n){return Object(h.a)(this,void 0,void 0,regeneratorRuntime.mark((function l(){var e,t=this;return regeneratorRuntime.wrap((function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,this.alertController.create({cssClass:"my-custom-class",header:"Seleccione Opci\xf3n",inputs:[{name:"Productos",type:"radio",label:"Productos",checked:!0,value:"/ProductoListPage\xb0Productos ->"+n.nombre}],buttons:[{text:"Cancel",role:"cancel",cssClass:"secondary",handler:function(n){}},{text:"Ok",handler:function(l){var e=l.split("\xb0");t.router.navigate([e[0]],{state:{variables:t.variables,user:null,idllave:n._id,title:e[1]}})}}]});case 2:return e=l.sent,l.next=5,e.present();case 5:case"end":return l.stop()}}),l,this)})))}},{key:"deleteRecord",value:function(n){return Object(h.a)(this,void 0,void 0,regeneratorRuntime.mark((function l(){var e,t=this;return regeneratorRuntime.wrap((function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,this.alertController.create({header:this.seguro,message:"",buttons:[{text:"No",cssClass:"secondary",handler:function(n){}},{text:"Si",handler:function(){t.authenticationService.deleteReg(n._id+"/"+t.userinfo[0].email+"/"+t.userinfo[0].idempresa._id+"/na","frmtareasprogramadas0s").then((function(n){t.pideregistros(t.currentSegment)}),(function(n){t.authenticationService.presentAlert(n.error,t.msg,"")}))}}]});case 2:return e=l.sent,l.next=5,e.present();case 5:case"end":return l.stop()}}),l,this)})))}},{key:"updateRecord",value:function(n){return Object(h.a)(this,void 0,void 0,regeneratorRuntime.mark((function l(){return regeneratorRuntime.wrap((function(l){for(;;)switch(l.prev=l.next){case 0:this.router.navigate(["frmtareasprogramadasListPage"],{state:{jornada:n.jornada,geoposiciontxt:this.geoposiciontxt,variables:this.variables,record:n,userinfo:this.userinfo,idllave:this.idllave,title:"Mis visitas  "}});case 1:case"end":return l.stop()}}),l,this)})))}},{key:"loadData",value:function(n){var l=this;setTimeout((function(){n.target.complete(),1e3===l.items.length&&(n.target.disabled=!0)}),500)}}]),n}(),C=t["\u0275crt"]({encapsulation:0,styles:[["[_nghost-%COMP%]{--page-margin:var(--app-narrow-margin);--page-border-radius:var(--app-fair-radius);--page-segment-background:var(--app-background);--page-segment-indicator-height:2px}ion-item-divider[_ngcontent-%COMP%]{--background:var(--ion-color-light);--padding-start:var(--page-margin)}[_nghost-%COMP%]{--page-margin:var(--app-fair-margin);--page-background:var(--app-background);--page-background-shade:var(--app-background-shade);--page-tags-gutter:5px}.first-letter2[_ngcontent-%COMP%]{text-transform:capitalize;font-size:10px}.first-letter[_ngcontent-%COMP%]{text-transform:capitalize;font-size:14px}"]],data:{}});function k(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,3,"ion-button",[],null,[[null,"click"]],(function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.changeToList()&&t),t}),r.mb,r.e)),t["\u0275did"](1,49152,null,0,a.l,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](2,0,null,0,1,"ion-icon",[["name","grid"],["slot","icon-only"]],null,null,null,r.Db,r.v)),t["\u0275did"](3,49152,null,0,a.D,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{name:[0,"name"]},null)],(function(n,l){n(l,3,0,"grid")}),null)}function y(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,3,"ion-button",[],null,[[null,"click"]],(function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.changeToGrid()&&t),t}),r.mb,r.e)),t["\u0275did"](1,49152,null,0,a.l,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](2,0,null,0,1,"ion-icon",[["name","list"],["slot","icon-only"]],null,null,null,r.Db,r.v)),t["\u0275did"](3,49152,null,0,a.D,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{name:[0,"name"]},null)],(function(n,l){n(l,3,0,"list")}),null)}function w(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,4,"ion-label",[],null,null,null,r.Mb,r.E)),t["\u0275did"](1,49152,null,0,a.O,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275ted"](2,0,[""," "," ",""])),t["\u0275pid"](131072,s.k,[s.l,t.ChangeDetectorRef]),t["\u0275pid"](131072,s.k,[s.l,t.ChangeDetectorRef])],null,(function(n,l){var e=l.component;n(l,2,0,t["\u0275unv"](l,2,0,t["\u0275nov"](l,3).transform("NOREGISTROSM")),e.itemsList.length,t["\u0275unv"](l,2,2,t["\u0275nov"](l,4).transform("NOREGISTROSM5")))}))}function N(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,9,"ion-item",[["lines","none"]],null,null,null,r.Lb,r.A)),t["\u0275did"](1,49152,null,0,a.I,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{lines:[0,"lines"]},null),(n()(),t["\u0275eld"](2,0,null,0,7,"ion-label",[["class","ion-text-wrap"]],null,null,null,r.Mb,r.E)),t["\u0275did"](3,49152,null,0,a.O,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](4,0,null,0,1,"skeleton-element",[],null,null,null,d.b,d.a)),t["\u0275did"](5,114688,null,0,c.a,[],null,null),(n()(),t["\u0275eld"](6,0,null,0,1,"skeleton-element",[],null,null,null,d.b,d.a)),t["\u0275did"](7,114688,null,0,c.a,[],null,null),(n()(),t["\u0275eld"](8,0,null,0,1,"skeleton-element",[["width","67%"]],null,null,null,d.b,d.a)),t["\u0275did"](9,114688,null,0,c.a,[],{width:[0,"width"]},null)],(function(n,l){n(l,1,0,"none"),n(l,5,0),n(l,7,0),n(l,9,0,"67%")}),null)}function E(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,4,"ion-list",[],null,null,null,r.Ob,r.F)),t["\u0275did"](1,49152,null,0,a.P,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275and"](16777216,null,0,2,null,N)),t["\u0275did"](3,278528,null,0,g.NgForOf,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),t["\u0275pad"](4,7)],(function(n,l){var e=n(l,4,0,0,1,2,3,4,5,6);n(l,3,0,e)}),null)}function D(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,24,"ion-item",[],null,[[null,"click"]],(function(n,l,e){var i=!0;return"click"===l&&(i=!1!==t["\u0275nov"](n,2).onClick()&&i),"click"===l&&(i=!1!==t["\u0275nov"](n,3).onClick(e)&&i),i}),r.Lb,r.A)),t["\u0275did"](1,49152,null,0,a.I,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),t["\u0275did"](2,16384,null,0,f.n,[f.m,f.a,[8,null],t.Renderer2,t.ElementRef],null,null),t["\u0275did"](3,737280,null,0,a.Nb,[g.LocationStrategy,a.Hb,t.ElementRef,f.m,[2,f.n]],null,null),(n()(),t["\u0275eld"](4,0,null,0,20,"ion-grid",[],null,null,null,r.Bb,r.t)),t["\u0275did"](5,49152,null,0,a.B,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](6,0,null,0,18,"ion-row",[],null,null,null,r.Wb,r.O)),t["\u0275did"](7,49152,null,0,a.hb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](8,0,null,0,16,"ion-col",[["size","12"]],null,[[null,"click"]],(function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.updateRecord(n.context.$implicit)&&t),t}),r.vb,r.n)),t["\u0275did"](9,49152,null,0,a.u,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{size:[0,"size"]},null),(n()(),t["\u0275eld"](10,0,null,0,14,"ion-label",[["class","ion-text-wrap"]],null,null,null,r.Mb,r.E)),t["\u0275did"](11,49152,null,0,a.O,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](12,0,null,0,1,"strong",[],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["Supervisor: "])),(n()(),t["\u0275ted"](14,0,["",""])),(n()(),t["\u0275eld"](15,0,null,0,0,"br",[],null,null,null,null,null)),(n()(),t["\u0275eld"](16,0,null,0,1,"strong",[],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["Inspector: "])),(n()(),t["\u0275ted"](18,0,[""," "])),(n()(),t["\u0275eld"](19,0,null,0,0,"br",[],null,null,null,null,null)),(n()(),t["\u0275eld"](20,0,null,0,1,"strong",[],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["Jornada: "])),(n()(),t["\u0275ted"](22,0,[""," "])),(n()(),t["\u0275eld"](23,0,null,0,0,"br",[],null,null,null,null,null)),(n()(),t["\u0275eld"](24,0,null,0,0,"div",[],[[8,"innerHTML",1]],null,null,null,null))],(function(n,l){n(l,3,0),n(l,9,0,"12")}),(function(n,l){var e=l.component;n(l,14,0,l.context.$implicit.supervisor),n(l,18,0,l.context.$implicit.inspector),n(l,22,0,l.context.$implicit.jornada),n(l,24,0,e.authenticationService.getKeyssrthtml(l.context.$implicit.proyecto))}))}function x(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,3,"ion-list",[],null,null,null,r.Ob,r.F)),t["\u0275did"](1,49152,null,0,a.P,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275and"](16777216,null,0,1,null,D)),t["\u0275did"](3,278528,null,0,g.NgForOf,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"]},null)],(function(n,l){n(l,3,0,l.component.itemsList)}),null)}function O(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,22,"ion-col",[["size","12"],["size-lg","6"],["size-sm","6"]],null,null,null,r.vb,r.n)),t["\u0275did"](1,49152,null,0,a.u,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{size:[0,"size"]},null),(n()(),t["\u0275eld"](2,0,null,0,20,"ion-card",[],null,null,null,r.sb,r.g)),t["\u0275did"](3,49152,null,0,a.n,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](4,0,null,0,18,"ion-item",[],null,[[null,"click"]],(function(n,l,e){var i=!0,u=n.component;return"click"===l&&(i=!1!==t["\u0275nov"](n,6).onClick()&&i),"click"===l&&(i=!1!==t["\u0275nov"](n,7).onClick(e)&&i),"click"===l&&(i=!1!==u.updateRecord(n.context.$implicit)&&i),i}),r.Lb,r.A)),t["\u0275did"](5,49152,null,0,a.I,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),t["\u0275did"](6,16384,null,0,f.n,[f.m,f.a,[8,null],t.Renderer2,t.ElementRef],null,null),t["\u0275did"](7,737280,null,0,a.Nb,[g.LocationStrategy,a.Hb,t.ElementRef,f.m,[2,f.n]],null,null),(n()(),t["\u0275eld"](8,0,null,0,14,"ion-label",[["class","ion-text-wrap"]],null,null,null,r.Mb,r.E)),t["\u0275did"](9,49152,null,0,a.O,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](10,0,null,0,1,"strong",[],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["Supervisor: "])),(n()(),t["\u0275ted"](12,0,["",""])),(n()(),t["\u0275eld"](13,0,null,0,0,"br",[],null,null,null,null,null)),(n()(),t["\u0275eld"](14,0,null,0,1,"strong",[],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["Inspector: "])),(n()(),t["\u0275ted"](16,0,[""," "])),(n()(),t["\u0275eld"](17,0,null,0,0,"br",[],null,null,null,null,null)),(n()(),t["\u0275eld"](18,0,null,0,1,"strong",[],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["Jornada: "])),(n()(),t["\u0275ted"](20,0,[""," "])),(n()(),t["\u0275eld"](21,0,null,0,0,"br",[],null,null,null,null,null)),(n()(),t["\u0275eld"](22,0,null,0,0,"div",[],[[8,"innerHTML",1]],null,null,null,null))],(function(n,l){n(l,1,0,"12"),n(l,7,0)}),(function(n,l){var e=l.component;n(l,12,0,l.context.$implicit.supervisor),n(l,16,0,l.context.$implicit.inspector),n(l,20,0,l.context.$implicit.jornada),n(l,22,0,e.authenticationService.getKeyssrthtml(l.context.$implicit.proyecto))}))}function S(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,5,"ion-grid",[],null,null,null,r.Bb,r.t)),t["\u0275did"](1,49152,null,0,a.B,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](2,0,null,0,3,"ion-row",[],null,null,null,r.Wb,r.O)),t["\u0275did"](3,49152,null,0,a.hb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275and"](16777216,null,0,1,null,O)),t["\u0275did"](5,278528,null,0,g.NgForOf,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"]},null)],(function(n,l){n(l,5,0,l.component.itemsList)}),null)}function I(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,2,"h3",[["class","empty-list-message"]],null,null,null,null,null)),(n()(),t["\u0275ted"](1,null,[" "," "])),t["\u0275pid"](131072,s.k,[s.l,t.ChangeDetectorRef])],null,(function(n,l){n(l,1,0,t["\u0275unv"](l,1,0,t["\u0275nov"](l,2).transform("NODATOS")))}))}function Z(n){return t["\u0275vid"](0,[t["\u0275qud"](671088640,1,{infiniteScroll:0}),(n()(),t["\u0275eld"](1,0,null,null,67,"ion-header",[],null,null,null,r.Cb,r.u)),t["\u0275did"](2,49152,null,0,a.C,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](3,0,null,0,19,"ion-toolbar",[["color","primary"]],null,null,null,r.oc,r.gb)),t["\u0275did"](4,49152,null,0,a.Ab,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{color:[0,"color"]},null),(n()(),t["\u0275eld"](5,0,null,0,3,"ion-buttons",[["slot","start"]],null,null,null,r.nb,r.f)),t["\u0275did"](6,49152,null,0,a.m,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](7,0,null,0,1,"ion-menu-button",[],null,null,null,r.Pb,r.I)),t["\u0275did"](8,49152,null,0,a.S,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](9,0,null,0,2,"ion-title",[["size","small"]],null,null,null,r.mc,r.eb)),t["\u0275did"](10,49152,null,0,a.yb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{size:[0,"size"]},null),(n()(),t["\u0275ted"](-1,0,[" Proyectos Asignados "])),(n()(),t["\u0275eld"](12,0,null,0,10,"ion-buttons",[["collapse","true"],["slot","end"]],null,null,null,r.nb,r.f)),t["\u0275did"](13,49152,null,0,a.m,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{collapse:[0,"collapse"]},null),(n()(),t["\u0275eld"](14,0,null,0,4,"ion-button",[],[[8,"title",0]],[[null,"click"]],(function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.pideregistros0()&&t),t}),r.mb,r.e)),t["\u0275did"](15,49152,null,0,a.l,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),t["\u0275pid"](131072,s.k,[s.l,t.ChangeDetectorRef]),(n()(),t["\u0275eld"](17,0,null,0,1,"ion-icon",[["name","refresh-circle-outline"],["slot","icon-only"]],null,null,null,r.Db,r.v)),t["\u0275did"](18,49152,null,0,a.D,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{name:[0,"name"]},null),(n()(),t["\u0275and"](16777216,null,0,1,null,k)),t["\u0275did"](20,16384,null,0,g.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["\u0275and"](16777216,null,0,1,null,y)),t["\u0275did"](22,16384,null,0,g.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["\u0275eld"](23,0,null,0,45,"ion-toolbar",[["class","filters-toolbar"]],null,null,null,r.oc,r.gb)),t["\u0275did"](24,49152,null,0,a.Ab,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](25,0,null,0,18,"ion-row",[["align-items-center",""],["class","searchbar-row"]],null,null,null,r.Wb,r.O)),t["\u0275did"](26,49152,null,0,a.hb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](27,0,null,0,9,"ion-col",[],null,null,null,r.vb,r.n)),t["\u0275did"](28,49152,null,0,a.u,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](29,0,null,0,7,"ion-searchbar",[["animated",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionChange"],[null,"ionBlur"]],(function(n,l,e){var i=!0,u=n.component;return"ionBlur"===l&&(i=!1!==t["\u0275nov"](n,32)._handleBlurEvent(e.target)&&i),"ionChange"===l&&(i=!1!==t["\u0275nov"](n,32)._handleInputEvent(e.target)&&i),"ngModelChange"===l&&(i=!1!==(u.searchQuery=e)&&i),"ionChange"===l&&(i=!1!==u.searchList()&&i),i}),r.Xb,r.P)),t["\u0275did"](30,49152,null,0,a.ib,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{animated:[0,"animated"],placeholder:[1,"placeholder"]},null),t["\u0275pid"](131072,s.k,[s.l,t.ChangeDetectorRef]),t["\u0275did"](32,16384,null,0,a.Pb,[t.ElementRef],null,null),t["\u0275prd"](1024,null,m.m,(function(n){return[n]}),[a.Pb]),t["\u0275did"](34,671744,null,0,m.q,[[8,null],[8,null],[8,null],[6,m.m]],{model:[0,"model"]},{update:"ngModelChange"}),t["\u0275prd"](2048,null,m.n,null,[m.q]),t["\u0275did"](36,16384,null,0,m.o,[[4,m.n]],null,null),(n()(),t["\u0275eld"](37,0,null,0,6,"ion-col",[["class","call-to-action-col"]],[[8,"hidden",0]],null,null,r.vb,r.n)),t["\u0275did"](38,49152,null,0,a.u,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](39,0,null,0,4,"ion-button",[["class","filters-btn"],["color","secondary"],["fill","clear"]],[[8,"title",0]],[[null,"click"]],(function(n,l,e){var t=!0,i=n.component;return"click"===l&&(t=0!=(i.showAgeFilter=!i.showAgeFilter)&&t),t}),r.mb,r.e)),t["\u0275did"](40,49152,null,0,a.l,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{color:[0,"color"],fill:[1,"fill"]},null),t["\u0275pid"](131072,s.k,[s.l,t.ChangeDetectorRef]),(n()(),t["\u0275eld"](42,0,null,0,1,"ion-icon",[["name","options"],["slot","icon-only"]],null,null,null,r.Db,r.v)),t["\u0275did"](43,49152,null,0,a.D,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{name:[0,"name"]},null),(n()(),t["\u0275eld"](44,0,null,0,24,"form",[["novalidate",""]],[[8,"hidden",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],(function(n,l,e){var i=!0;return"submit"===l&&(i=!1!==t["\u0275nov"](n,46).onSubmit(e)&&i),"reset"===l&&(i=!1!==t["\u0275nov"](n,46).onReset()&&i),i}),null,null)),t["\u0275did"](45,16384,null,0,m.y,[],null,null),t["\u0275did"](46,540672,null,0,m.h,[[8,null],[8,null]],{form:[0,"form"]},null),t["\u0275prd"](2048,null,m.b,null,[m.h]),t["\u0275did"](48,16384,null,0,m.p,[[4,m.b]],null,null),(n()(),t["\u0275eld"](49,0,null,null,19,"ion-row",[["class","range-item-row"]],null,null,null,r.Wb,r.O)),t["\u0275did"](50,49152,null,0,a.hb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](51,0,null,0,8,"ion-col",[["size","12"]],null,null,null,r.vb,r.n)),t["\u0275did"](52,49152,null,0,a.u,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{size:[0,"size"]},null),(n()(),t["\u0275eld"](53,0,null,0,6,"div",[["class","range-header"]],null,null,null,null,null)),(n()(),t["\u0275eld"](54,0,null,null,1,"span",[["class","range-value"]],null,null,null,null,null)),(n()(),t["\u0275ted"](55,null,["",""])),(n()(),t["\u0275eld"](56,0,null,null,1,"span",[["class","range-label"]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["Filter by age"])),(n()(),t["\u0275eld"](58,0,null,null,1,"span",[["class","range-value"]],null,null,null,null,null)),(n()(),t["\u0275ted"](59,null,["",""])),(n()(),t["\u0275eld"](60,0,null,0,8,"ion-col",[["size","12"]],null,null,null,r.vb,r.n)),t["\u0275did"](61,49152,null,0,a.u,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{size:[0,"size"]},null),(n()(),t["\u0275eld"](62,0,null,0,6,"ion-range",[["class","range-control"],["color","secondary"],["debounce","400"],["dualKnobs","true"],["formControlName","dual"],["max","100"],["min","1"],["pin","true"],["step","1"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionChange"],[null,"ionBlur"]],(function(n,l,e){var i=!0,u=n.component;return"ionBlur"===l&&(i=!1!==t["\u0275nov"](n,64)._handleBlurEvent(e.target)&&i),"ionChange"===l&&(i=!1!==t["\u0275nov"](n,64)._handleChangeEvent(e.target)&&i),"ionChange"===l&&(i=!1!==u.searchList()&&i),i}),r.Vb,r.N)),t["\u0275did"](63,49152,null,0,a.ab,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{color:[0,"color"],debounce:[1,"debounce"],dualKnobs:[2,"dualKnobs"],max:[3,"max"],min:[4,"min"],pin:[5,"pin"],step:[6,"step"]},null),t["\u0275did"](64,16384,null,0,a.Ob,[t.ElementRef],null,null),t["\u0275prd"](1024,null,m.m,(function(n){return[n]}),[a.Ob]),t["\u0275did"](66,671744,null,0,m.f,[[3,m.b],[8,null],[8,null],[6,m.m],[2,m.x]],{name:[0,"name"]},null),t["\u0275prd"](2048,null,m.n,null,[m.f]),t["\u0275did"](68,16384,null,0,m.o,[[4,m.n]],null,null),(n()(),t["\u0275eld"](69,0,null,null,17,"ion-content",[["class","user-friends-content"]],null,null,null,r.wb,r.o)),t["\u0275did"](70,49152,null,0,a.v,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](71,0,null,0,3,"ion-item-divider",[["sticky",""]],null,null,null,r.Ib,r.B)),t["\u0275did"](72,49152,null,0,a.J,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{sticky:[0,"sticky"]},null),(n()(),t["\u0275and"](16777216,null,0,1,null,w)),t["\u0275did"](74,16384,null,0,g.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["\u0275and"](16777216,null,0,1,null,E)),t["\u0275did"](76,16384,null,0,g.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["\u0275and"](16777216,null,0,1,null,x)),t["\u0275did"](78,16384,null,0,g.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["\u0275and"](16777216,null,0,1,null,S)),t["\u0275did"](80,16384,null,0,g.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["\u0275and"](16777216,null,0,1,null,I)),t["\u0275did"](82,16384,null,0,g.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["\u0275eld"](83,0,null,0,3,"ion-infinite-scroll",[["threshold","100px"]],null,[[null,"ionInfinite"]],(function(n,l,e){var t=!0;return"ionInfinite"===l&&(t=!1!==n.component.loadData(e)&&t),t}),r.Gb,r.x)),t["\u0275did"](84,49152,[[1,4]],0,a.F,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{threshold:[0,"threshold"]},null),(n()(),t["\u0275eld"](85,0,null,0,1,"ion-infinite-scroll-content",[["loadingSpinner","bubbles"],["loadingText","Espere un momento..."]],null,null,null,r.Fb,r.y)),t["\u0275did"](86,49152,null,0,a.G,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{loadingSpinner:[0,"loadingSpinner"],loadingText:[1,"loadingText"]},null)],(function(n,l){var e=l.component;n(l,4,0,"primary"),n(l,10,0,"small"),n(l,13,0,"true"),n(l,18,0,"refresh-circle-outline"),n(l,20,0,"grid"===e.viewType),n(l,22,0,"list"===e.viewType),n(l,30,0,"",t["\u0275inlineInterpolate"](1,"",t["\u0275unv"](l,30,1,t["\u0275nov"](l,31).transform("BUSCARM")),"")),n(l,34,0,e.searchQuery),n(l,40,0,"secondary","clear"),n(l,43,0,"options"),n(l,46,0,e.rangeForm),n(l,52,0,"12"),n(l,61,0,"12"),n(l,63,0,"secondary","400","true","100","1","true","1"),n(l,66,0,"dual"),n(l,72,0,""),n(l,74,0,(null==e.itemsList?null:e.itemsList.length)>0),n(l,76,0,0===e.efecto),n(l,78,0,(null==e.itemsList?null:e.itemsList.length)>0&&"list"===e.viewType),n(l,80,0,(null==e.itemsList?null:e.itemsList.length)>0&&"grid"===e.viewType),n(l,82,0,0==(null==e.itemsList?null:e.itemsList.length)),n(l,84,0,"100px"),n(l,86,0,"bubbles","Espere un momento...")}),(function(n,l){var e=l.component;n(l,14,0,t["\u0275inlineInterpolate"](1," ",t["\u0275unv"](l,14,0,t["\u0275nov"](l,16).transform("REFRESCARM")),"")),n(l,29,0,t["\u0275nov"](l,36).ngClassUntouched,t["\u0275nov"](l,36).ngClassTouched,t["\u0275nov"](l,36).ngClassPristine,t["\u0275nov"](l,36).ngClassDirty,t["\u0275nov"](l,36).ngClassValid,t["\u0275nov"](l,36).ngClassInvalid,t["\u0275nov"](l,36).ngClassPending),n(l,37,0,!e.showAgeFilter),n(l,39,0,t["\u0275inlineInterpolate"](1," ",t["\u0275unv"](l,39,0,t["\u0275nov"](l,41).transform("FILTROM")),"")),n(l,44,0,!e.showAgeFilter,t["\u0275nov"](l,48).ngClassUntouched,t["\u0275nov"](l,48).ngClassTouched,t["\u0275nov"](l,48).ngClassPristine,t["\u0275nov"](l,48).ngClassDirty,t["\u0275nov"](l,48).ngClassValid,t["\u0275nov"](l,48).ngClassInvalid,t["\u0275nov"](l,48).ngClassPending),n(l,55,0,e.rangeForm.controls.dual.value.lower),n(l,59,0,e.rangeForm.controls.dual.value.upper),n(l,62,0,t["\u0275nov"](l,68).ngClassUntouched,t["\u0275nov"](l,68).ngClassTouched,t["\u0275nov"](l,68).ngClassPristine,t["\u0275nov"](l,68).ngClassDirty,t["\u0275nov"](l,68).ngClassValid,t["\u0275nov"](l,68).ngClassInvalid,t["\u0275nov"](l,68).ngClassPending)}))}var L=t["\u0275ccf"]("page-frmtareasprogramadas0-list",R,(function(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"page-frmtareasprogramadas0-list",[],null,null,null,Z,C)),t["\u0275did"](1,114688,null,0,R,[a.gb,f.m,p.a,a.b,s.l,a.Gb],null,null)],(function(n,l){n(l,1,0)}),null)}),{},{},[]),M=e("IheW"),P=e("ZpN7"),T=e("Kt/9"),F=e("j1ZV"),_=e("gMqc"),z=t["\u0275cmf"](i,[],(function(n){return t["\u0275mod"]([t["\u0275mpd"](512,t.ComponentFactoryResolver,t["\u0275CodegenComponentFactoryResolver"],[[8,[u.c,o.a,L]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t["\u0275mpd"](4608,g.NgLocalization,g.NgLocaleLocalization,[t.LOCALE_ID]),t["\u0275mpd"](4608,a.c,a.c,[t.NgZone,t.ApplicationRef]),t["\u0275mpd"](4608,a.Gb,a.Gb,[a.c,t.ComponentFactoryResolver,t.Injector]),t["\u0275mpd"](4608,a.Lb,a.Lb,[a.c,t.ComponentFactoryResolver,t.Injector]),t["\u0275mpd"](4608,m.w,m.w,[]),t["\u0275mpd"](4608,M.i,M.o,[g.DOCUMENT,t.PLATFORM_ID,M.m]),t["\u0275mpd"](4608,M.p,M.p,[M.i,M.n]),t["\u0275mpd"](5120,M.a,(function(n){return[n]}),[M.p]),t["\u0275mpd"](4608,M.l,M.l,[]),t["\u0275mpd"](6144,M.j,null,[M.l]),t["\u0275mpd"](4608,M.h,M.h,[M.j]),t["\u0275mpd"](6144,M.b,null,[M.h]),t["\u0275mpd"](4608,M.f,M.k,[M.b,t.Injector]),t["\u0275mpd"](4608,M.c,M.c,[M.f]),t["\u0275mpd"](5120,t.APP_INITIALIZER,(function(n){return[P.b(n)]}),[T.a]),t["\u0275mpd"](4608,m.d,m.d,[]),t["\u0275mpd"](4608,s.h,s.g,[]),t["\u0275mpd"](4608,s.d,s.f,[]),t["\u0275mpd"](4608,s.j,s.e,[]),t["\u0275mpd"](4608,s.c,s.b,[]),t["\u0275mpd"](4608,s.l,s.l,[s.m,s.h,s.d,s.j,s.c,s.n,s.p,s.o,s.a]),t["\u0275mpd"](1073742336,g.CommonModule,g.CommonModule,[]),t["\u0275mpd"](1073742336,a.Cb,a.Cb,[]),t["\u0275mpd"](1073742336,m.v,m.v,[]),t["\u0275mpd"](1073742336,m.j,m.j,[]),t["\u0275mpd"](1073742336,M.e,M.e,[]),t["\u0275mpd"](1073742336,M.d,M.d,[]),t["\u0275mpd"](1073742336,P.a,P.a,[]),t["\u0275mpd"](1073742336,F.a,F.a,[]),t["\u0275mpd"](1073742336,m.s,m.s,[]),t["\u0275mpd"](1073742336,_.c,_.c,[]),t["\u0275mpd"](1073742336,f.p,f.p,[[2,f.u],[2,f.m]]),t["\u0275mpd"](1073742336,s.i,s.i,[]),t["\u0275mpd"](1073742336,i,i,[]),t["\u0275mpd"](256,M.m,"XSRF-TOKEN",[]),t["\u0275mpd"](256,M.n,"X-XSRF-TOKEN",[]),t["\u0275mpd"](1024,f.k,(function(){return[[{path:"",component:R}]]}),[]),t["\u0275mpd"](256,s.p,void 0,[]),t["\u0275mpd"](256,s.n,void 0,[]),t["\u0275mpd"](256,s.o,void 0,[]),t["\u0275mpd"](256,s.a,void 0,[])])}))},Rg8G:function(n,l,e){"use strict";e.d(l,"a",(function(){return t}));var t=function(){function n(){_classCallCheck(this,n),this.width="100%",this.height="16px",this.borderRadius="0",this.rounded=!1,this.noAnimated=!1,this.inline=!1,this.styles={}}return _createClass(n,[{key:"ngOnInit",value:function(){this.styles={width:this.width,height:this.height,borderRadius:this.borderRadius},this.rounded&&(this.styles.borderRadius="999em")}}]),n}()},"hQ+M":function(n,l,e){"use strict";e.d(l,"a",(function(){return u})),e.d(l,"b",(function(){return o}));var t=e("8Y7J"),i=e("SVse"),u=(e("Rg8G"),t["\u0275crt"]({encapsulation:0,styles:[["[_nghost-%COMP%]{display:block}[_nghost-%COMP%]   .inline[_ngcontent-%COMP%], [inline][_nghost-%COMP%]{display:inline-block}[_nghost-%COMP%]   .no-animated[_ngcontent-%COMP%]{-webkit-animation:none!important;animation:none!important;background:hsla(0,0%,51%,.2)}.animated-background[_ngcontent-%COMP%], [_nghost-%COMP%]   div[_ngcontent-%COMP%]{-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-name:placeHolderShimmer;animation-name:placeHolderShimmer;-webkit-animation-timing-function:linear;animation-timing-function:linear;background:hsla(0,0%,51%,.2);background:linear-gradient(90deg,hsla(0,0%,51%,.2) 8%,hsla(0,0%,51%,.3) 18%,hsla(0,0%,51%,.2) 33%);background-size:800px 100px;position:relative}@-webkit-keyframes placeHolderShimmer{0%{background-position:-468px 0}to{background-position:468px 0}}@keyframes placeHolderShimmer{0%{background-position:-468px 0}to{background-position:468px 0}}"]],data:{}}));function o(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,3,"div",[],null,null,null,null,null)),t["\u0275did"](1,278528,null,0,i.NgClass,[t.IterableDiffers,t.KeyValueDiffers,t.ElementRef,t.Renderer2],{ngClass:[0,"ngClass"]},null),t["\u0275pod"](2,{"no-animated":0,inline:1}),t["\u0275did"](3,278528,null,0,i.NgStyle,[t.ElementRef,t.KeyValueDiffers,t.Renderer2],{ngStyle:[0,"ngStyle"]},null)],(function(n,l){var e=l.component,t=n(l,2,0,e.noAnimated,e.inline);n(l,1,0,t),n(l,3,0,e.styles)}),null)}}}]);