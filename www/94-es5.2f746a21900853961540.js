function _defineProperties(n,e){for(var l=0;l<e.length;l++){var t=e[l];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}function _createClass(n,e,l){return e&&_defineProperties(n.prototype,e),l&&_defineProperties(n,l),n}function _classCallCheck(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{"8G5W":function(n,e,l){"use strict";l.r(e),l.d(e,"tokenspago0ListPageModuleNgFactory",(function(){return M}));var t=l("8Y7J"),i=function n(){_classCallCheck(this,n)},o=l("Xh6l"),a=l("pMnS"),r=l("Uc9x"),u=l("SVse"),s=l("MKJQ"),c=l("sZkV"),d=l("iInd"),g=l("mrSG"),m=l("ZtEv"),f=l("WHHX"),p=function(){function n(e,l,t,i,o,a,r,u){_classCallCheck(this,n),this.menu=e,this.loadingCtrl=l,this.router=t,this.authenticationService=i,this.toastCtrl=o,this.alertController=a,this.translateService=r,this.modalController=u,this.loading=null,this.items=[],this.variables=[],this.userinfo=[],this.diasfestivos="DIAS FESTIVOS",this.nombretarifa="TARIFA_BUSES",this.vinactivos=[],this.tiposervicio="cobro_servicio_bus",this.vdiasfestivos=[],this.vtarifa=[],this.foto0="../../../../assets/sample-images/paypago2.svg",this.viewType="grid",this.tituloxx="",this.moneda="Q",this.efecto=0,this.seguro="",this.msg="",this.qrData="",this.scannedCode=null,this.elementType="canvas",this.enableSound=!0,this.soundEnabled=!0,this.currentSegment="Todos"}return _createClass(n,[{key:"ngOnInit",value:function(){var n=this;this.menu.close(),this.variables=this.router.getCurrentNavigation().extras.state.variables,this.idllave=this.router.getCurrentNavigation().extras.state.idllave,this.userinfo=this.authenticationService.getcopiauser(),this.tituloxx=this.router.getCurrentNavigation().extras.state.titulo,this.translateService.get("SEGUROM").subscribe((function(e){n.seguro=e})),this.translateService.get("MSGM").subscribe((function(e){n.msg=e})),this.msmt="Seleccione Medio de Pago....",this.authenticationService.getReg("dinactivos/"+this.userinfo[0].idempresa._id,"datosfijos2",0).then((function(e){n.vinactivos=e,n.authenticationService.getReg(n.nombretarifa+"/"+n.userinfo[0].idempresa._id+"/diasfestivos","datosfijos2",0).then((function(e){n.vdiasfestivos=e,n.authenticationService.getReg(n.nombretarifa+"/"+n.userinfo[0].idempresa._id+"/dtarifa","datosfijos2",0).then((function(e){n.vtarifa=e;var l=Number(n.datarifa());n.tarifa=l}),(function(e){n.authenticationService.presentAlert(e.error,n.msg,"")}))}),(function(e){n.authenticationService.presentAlert(e.error,n.msg,"")}))}),(function(e){n.authenticationService.presentAlert(e.error,n.msg,"")}))}},{key:"dascan",value:function(n){return Object(g.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=this.modalController,e.t1=f.a,e.t2=!0,e.t3={variables:"",user:null,opcion:n,moneda:this.moneda,titulo:"Cobro pasaje"},e.next=6,this.modalController.getTop();case 6:return e.t4=e.sent,e.t5={component:e.t1,animated:e.t2,componentProps:e.t3,presentingElement:e.t4,cssClass:"modal-fullscreen"},e.next=10,e.t0.create.call(e.t0,e.t5);case 10:return(l=e.sent).onWillDismiss().then((function(n){})),e.next=14,l.present();case 14:return e.abrupt("return",e.sent);case 15:case"end":return e.stop()}}),e,this)})))}},{key:"presentLoadingWithOptions",value:function(n,e){return Object(g.a)(this,void 0,void 0,regeneratorRuntime.mark((function l(){var t;return regeneratorRuntime.wrap((function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,this.loadingCtrl.create({spinner:null,duration:2e3,message:n,translucent:!0,cssClass:e,backdropDismiss:!0});case 2:return t=l.sent,l.next=5,t.present();case 5:return l.next=7,t.onDidDismiss();case 7:case"end":return l.stop()}}),l,this)})))}},{key:"regresatodo",value:function(){var n=this;setTimeout((function(){n.pagot="",n.saldot="",n.msmt="APROXIME MEDIO DE PAGO....";var e=Number(n.datarifa());n.tarifa=e}),1e3)}},{key:"datarifa",value:function(){for(var n="0",e=new Date,l=0,t=0,i=0;i<this.vdiasfestivos.length;i++)if(e.getDate()+"-"+(e.getMonth()+1)+"-"+e.getFullYear()===this.vdiasfestivos[i]){n="0",l=1;break}if(0===l)for(var o=["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado"][e.getDay()],a=0;a<this.vtarifa.length;a++){var r=this.vtarifa[a].nombre.split(",");if(o===r[0]){var u=Number(r[1]),s=Number(r[2]),c=Number(e.getHours());if(Number(r[3]),c>=u&&c<=s&&(n=r[3],this.diat=o,this.horat=c,t=1),1===t)break}}return n}}]),n}(),h=l("TSSN"),v=t["\u0275crt"]({encapsulation:0,styles:[["[_nghost-%COMP%]{--page-margin:var(--app-broad-margin);--page-background:var(--app-background-shade);--page-border-radius:var(--app-fair-radius);--page-segment-background:var(--app-background);--page-segment-indicator-height:2px}ion-item-divider[_ngcontent-%COMP%]{--background:var(--ion-color-light);--padding-start:var(--page-margin)}[_nghost-%COMP%]{--page-margin:var(--app-fair-margin);--page-background:var(--app-background);--page-background-shade:var(--app-background-shade);--page-tags-gutter:5px}ion-icon[_ngcontent-%COMP%]{font-size:200px;align-content:center;text-align:center}.legal-content[_ngcontent-%COMP%]   .legal-title[_ngcontent-%COMP%]{color:var(--ion-color-secondary);margin:var(--page-margin) 0 calc(var(--page-margin)/2);text-align:center}.legal-content[_ngcontent-%COMP%]   .legal-text[_ngcontent-%COMP%]{color:var(--ion-color-dark);margin:calc(var(--page-margin)/2) 0 var(--page-margin);font-size:28px;line-height:20px;color:#4848f8;text-align:center}.example1[_ngcontent-%COMP%]{height:50px;overflow:hidden;position:relative}.example1[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:2em;color:#343a34;position:absolute;width:60%;height:100%;margin:0;line-height:50px;text-align:center;transform:translateX(100%);-webkit-animation:example1 15s linear infinite;animation:example1 15s linear infinite}@-webkit-keyframes example1{0%{-webkit-transform:translateX(100%)}to{-webkit-transform:translateX(-100%)}}@keyframes example1{0%{transform:translateX(100%)}to{transform:translateX(-100%)}}article[_ngcontent-%COMP%]{background:linear-gradient(90deg,#5d6a6f,#67527a);-webkit-background-clip:text;-webkit-text-fill-color:transparent;text-align:center}h1[_ngcontent-%COMP%]{font-size:10vmin;line-height:1.1}body[_ngcontent-%COMP%]{background:#000f1a;min-block-size:100%;min-inline-size:100%;box-sizing:border-box;display:grid;place-content:center;font-family:system-ui;font-size:min(200%,5vmin)}body[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{margin:0}p[_ngcontent-%COMP%]{font-family:Dank Mono,ui-monospace,monospace}html[_ngcontent-%COMP%]{block-size:100%;inline-size:100%}"]],data:{}});function b(n){return t["\u0275vid"](0,[t["\u0275pid"](0,u.CurrencyPipe,[t.LOCALE_ID,t.DEFAULT_CURRENCY_CODE]),(n()(),t["\u0275eld"](1,0,null,null,11,"ion-header",[],null,null,null,s.Cb,s.u)),t["\u0275did"](2,49152,null,0,c.C,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](3,0,null,0,9,"ion-toolbar",[["color","primary"]],null,null,null,s.oc,s.gb)),t["\u0275did"](4,49152,null,0,c.Ab,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{color:[0,"color"]},null),(n()(),t["\u0275eld"](5,0,null,0,2,"ion-title",[],null,null,null,s.mc,s.eb)),t["\u0275did"](6,49152,null,0,c.yb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275ted"](-1,0,[" Bienvenido "])),(n()(),t["\u0275eld"](8,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,s.nb,s.f)),t["\u0275did"](9,49152,null,0,c.m,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](10,0,null,0,2,"ion-back-button",[["defaultHref","Billetera2ListPage"]],null,[[null,"click"]],(function(n,e,l){var i=!0;return"click"===e&&(i=!1!==t["\u0275nov"](n,12).onClick(l)&&i),i}),s.kb,s.c)),t["\u0275did"](11,49152,null,0,c.h,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{defaultHref:[0,"defaultHref"]},null),t["\u0275did"](12,16384,null,0,c.i,[[2,c.gb],c.Hb,c.e],{defaultHref:[0,"defaultHref"]},null),(n()(),t["\u0275eld"](13,0,null,null,53,"ion-content",[["class","legal-content"]],null,null,null,s.wb,s.o)),t["\u0275did"](14,49152,null,0,c.v,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](15,0,null,0,0,"br",[],null,null,null,null,null)),(n()(),t["\u0275eld"](16,0,null,0,0,"br",[],null,null,null,null,null)),(n()(),t["\u0275eld"](17,0,null,0,2,"article",[],null,null,null,null,null)),(n()(),t["\u0275eld"](18,0,null,null,1,"h1",[],null,null,null,null,null)),(n()(),t["\u0275ted"](19,null,["",""])),(n()(),t["\u0275eld"](20,0,null,0,0,"br",[],null,null,null,null,null)),(n()(),t["\u0275eld"](21,0,null,0,45,"ion-grid",[],null,null,null,s.Bb,s.t)),t["\u0275did"](22,49152,null,0,c.B,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](23,0,null,0,29,"ion-row",[],null,[[null,"click"]],(function(n,e,l){var i=!0;return"click"===e&&(i=!1!==t["\u0275nov"](n,25).onClick()&&i),"click"===e&&(i=!1!==t["\u0275nov"](n,26).onClick(l)&&i),i}),s.Wb,s.O)),t["\u0275did"](24,49152,null,0,c.hb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),t["\u0275did"](25,16384,null,0,d.n,[d.m,d.a,[8,null],t.Renderer2,t.ElementRef],null,null),t["\u0275did"](26,737280,null,0,c.Nb,[u.LocationStrategy,c.Hb,t.ElementRef,d.m,[2,d.n]],null,null),(n()(),t["\u0275eld"](27,0,null,0,13,"ion-col",[["class","ion-text-center"],["size","6"]],null,[[null,"click"]],(function(n,e,l){var i=!0;return"click"===e&&(i=!1!==t["\u0275nov"](n,29).onClick()&&i),"click"===e&&(i=!1!==t["\u0275nov"](n,30).onClick(l)&&i),i}),s.vb,s.n)),t["\u0275did"](28,49152,null,0,c.u,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{size:[0,"size"]},null),t["\u0275did"](29,16384,null,0,d.n,[d.m,d.a,[8,null],t.Renderer2,t.ElementRef],null,null),t["\u0275did"](30,737280,null,0,c.Nb,[u.LocationStrategy,c.Hb,t.ElementRef,d.m,[2,d.n]],null,null),(n()(),t["\u0275eld"](31,0,null,0,9,"ion-card",[],null,null,null,s.sb,s.g)),t["\u0275did"](32,49152,null,0,c.n,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](33,0,null,0,2,"div",[["style","display: flex; align-items: center;justify-content: center;"]],null,null,null,null,null)),(n()(),t["\u0275eld"](34,0,null,null,1,"ion-icon",[["name","qr-code-outline"]],null,null,null,s.Db,s.v)),t["\u0275did"](35,49152,null,0,c.D,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{name:[0,"name"]},null),(n()(),t["\u0275eld"](36,0,null,0,4,"ion-item",[["class","ion-text-center"]],null,null,null,s.Lb,s.A)),t["\u0275did"](37,49152,null,0,c.I,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](38,0,null,0,2,"ion-button",[["color","danger"]],null,[[null,"click"]],(function(n,e,l){var t=!0;return"click"===e&&(t=!1!==n.component.dascan("qr")&&t),t}),s.mb,s.e)),t["\u0275did"](39,49152,null,0,c.l,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{color:[0,"color"]},null),(n()(),t["\u0275ted"](-1,0,["Pagar con codigo QR"])),(n()(),t["\u0275eld"](41,0,null,0,11,"ion-col",[["class","ion-text-center"],["size","6"]],null,null,null,s.vb,s.n)),t["\u0275did"](42,49152,null,0,c.u,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{size:[0,"size"]},null),(n()(),t["\u0275eld"](43,0,null,0,9,"ion-card",[],null,null,null,s.sb,s.g)),t["\u0275did"](44,49152,null,0,c.n,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](45,0,null,0,2,"div",[["style","display: flex; align-items: center;justify-content: center;"]],null,null,null,null,null)),(n()(),t["\u0275eld"](46,0,null,null,1,"ion-icon",[["name","card-outline"]],null,null,null,s.Db,s.v)),t["\u0275did"](47,49152,null,0,c.D,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{name:[0,"name"]},null),(n()(),t["\u0275eld"](48,0,null,0,4,"ion-item",[["class","ion-text-center"]],null,null,null,s.Lb,s.A)),t["\u0275did"](49,49152,null,0,c.I,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](50,0,null,0,2,"ion-button",[["color","danger"]],null,[[null,"click"]],(function(n,e,l){var t=!0;return"click"===e&&(t=!1!==n.component.dascan("nfc")&&t),t}),s.mb,s.e)),t["\u0275did"](51,49152,null,0,c.l,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{color:[0,"color"]},null),(n()(),t["\u0275ted"](-1,0,["Pagar con tarjeta"])),(n()(),t["\u0275eld"](53,0,null,0,13,"ion-row",[],null,null,null,s.Wb,s.O)),t["\u0275did"](54,49152,null,0,c.hb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](55,0,null,0,11,"ion-col",[],null,null,null,s.vb,s.n)),t["\u0275did"](56,49152,null,0,c.u,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](57,0,null,0,0,"br",[],null,null,null,null,null)),(n()(),t["\u0275eld"](58,0,null,0,0,"br",[],null,null,null,null,null)),(n()(),t["\u0275eld"](59,0,null,0,7,"article",[],null,null,null,null,null)),(n()(),t["\u0275eld"](60,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),t["\u0275ted"](61,null,[" Dia: "," "])),(n()(),t["\u0275eld"](62,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),t["\u0275ted"](63,null,[" Hora: "," "])),(n()(),t["\u0275eld"](64,0,null,null,2,"p",[],null,null,null,null,null)),(n()(),t["\u0275ted"](65,null,[" Tarifa : ",""])),t["\u0275ppd"](66,2)],(function(n,e){n(e,4,0,"primary"),n(e,11,0,"Billetera2ListPage"),n(e,12,0,"Billetera2ListPage"),n(e,26,0),n(e,28,0,"6"),n(e,30,0),n(e,35,0,"qr-code-outline"),n(e,39,0,"danger"),n(e,42,0,"6"),n(e,47,0,"card-outline"),n(e,51,0,"danger")}),(function(n,e){var l=e.component;n(e,19,0,l.msmt),n(e,61,0,l.diat),n(e,63,0,l.horat);var i=t["\u0275unv"](e,65,0,n(e,66,0,t["\u0275nov"](e,0),l.tarifa,l.moneda));n(e,65,0,i)}))}var C=t["\u0275ccf"]("page-tokenspago0-list",p,(function(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"page-tokenspago0-list",[],null,null,null,b,v)),t["\u0275did"](1,114688,null,0,p,[c.Fb,c.Eb,d.m,m.a,c.Qb,c.b,h.l,c.Gb],null,null)],(function(n,e){n(e,1,0)}),null)}),{},{},[]),R=l("s7LF"),k=l("IheW"),x=l("ZpN7"),D=l("Kt/9"),E=l("j1ZV"),N=l("gMqc"),y=l("fozt"),_=l("r6W/"),M=t["\u0275cmf"](i,[],(function(n){return t["\u0275mod"]([t["\u0275mpd"](512,t.ComponentFactoryResolver,t["\u0275CodegenComponentFactoryResolver"],[[8,[o.c,a.a,r.a,C]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t["\u0275mpd"](4608,u.NgLocalization,u.NgLocaleLocalization,[t.LOCALE_ID]),t["\u0275mpd"](4608,c.c,c.c,[t.NgZone,t.ApplicationRef]),t["\u0275mpd"](4608,c.Gb,c.Gb,[c.c,t.ComponentFactoryResolver,t.Injector]),t["\u0275mpd"](4608,c.Lb,c.Lb,[c.c,t.ComponentFactoryResolver,t.Injector]),t["\u0275mpd"](4608,R.w,R.w,[]),t["\u0275mpd"](4608,k.i,k.o,[u.DOCUMENT,t.PLATFORM_ID,k.m]),t["\u0275mpd"](4608,k.p,k.p,[k.i,k.n]),t["\u0275mpd"](5120,k.a,(function(n){return[n]}),[k.p]),t["\u0275mpd"](4608,k.l,k.l,[]),t["\u0275mpd"](6144,k.j,null,[k.l]),t["\u0275mpd"](4608,k.h,k.h,[k.j]),t["\u0275mpd"](6144,k.b,null,[k.h]),t["\u0275mpd"](4608,k.f,k.k,[k.b,t.Injector]),t["\u0275mpd"](4608,k.c,k.c,[k.f]),t["\u0275mpd"](5120,t.APP_INITIALIZER,(function(n){return[x.b(n)]}),[D.a]),t["\u0275mpd"](4608,R.d,R.d,[]),t["\u0275mpd"](4608,h.h,h.g,[]),t["\u0275mpd"](4608,h.d,h.f,[]),t["\u0275mpd"](4608,h.j,h.e,[]),t["\u0275mpd"](4608,h.c,h.b,[]),t["\u0275mpd"](4608,h.l,h.l,[h.m,h.h,h.d,h.j,h.c,h.n,h.p,h.o,h.a]),t["\u0275mpd"](1073742336,u.CommonModule,u.CommonModule,[]),t["\u0275mpd"](1073742336,c.Cb,c.Cb,[]),t["\u0275mpd"](1073742336,R.v,R.v,[]),t["\u0275mpd"](1073742336,R.j,R.j,[]),t["\u0275mpd"](1073742336,k.e,k.e,[]),t["\u0275mpd"](1073742336,k.d,k.d,[]),t["\u0275mpd"](1073742336,x.a,x.a,[]),t["\u0275mpd"](1073742336,E.a,E.a,[]),t["\u0275mpd"](1073742336,R.s,R.s,[]),t["\u0275mpd"](1073742336,N.c,N.c,[]),t["\u0275mpd"](1073742336,y.a,y.a,[]),t["\u0275mpd"](1073742336,d.p,d.p,[[2,d.u],[2,d.m]]),t["\u0275mpd"](1073742336,h.i,h.i,[]),t["\u0275mpd"](1073742336,_.a,_.a,[]),t["\u0275mpd"](1073742336,i,i,[]),t["\u0275mpd"](256,k.m,"XSRF-TOKEN",[]),t["\u0275mpd"](256,k.n,"X-XSRF-TOKEN",[]),t["\u0275mpd"](256,h.p,void 0,[]),t["\u0275mpd"](256,h.n,void 0,[]),t["\u0275mpd"](256,h.o,void 0,[]),t["\u0275mpd"](256,h.a,void 0,[]),t["\u0275mpd"](1024,d.k,(function(){return[[{path:"",component:p}]]}),[])])}))}}]);