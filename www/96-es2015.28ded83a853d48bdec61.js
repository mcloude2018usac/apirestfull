(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{pyxn:function(e,n,t){"use strict";t.r(n),t.d(n,"Billetera2ListPageModuleNgFactory",(function(){return J}));var o=t("8Y7J");class a{}var i=t("gIFq"),r=t("lUNt"),l=t("7YSU"),s=t("3KlM"),c=t("Ux8H"),d=t("OEUh"),g=t("pMnS"),p=t("MKJQ"),u=t("sZkV"),m=t("iInd"),h=t("SVse"),v=t("M4wD"),f=t("B7gC"),C=t("6LEC"),b=t("2gss"),O=t("mrSG"),P=t("s7LF"),M=t("ZtEv"),_=t("IKpp"),w=t("Gs+c"),x=t("fc4l"),y=t("lWBS"),R=t("BW71"),j=t("DRn5");class k{constructor(e,n,t,o,a,i){this.router=e,this.authenticationService=n,this.alertController=t,this.lockscreenService=o,this.translateService=a,this.modalController=i,this.picture="../../../../assets/sample-images/scan1.svg",this.picture2="../../../../assets/sample-images/scan2.svg",this.picture3="../../../../assets/sample-images/comprarsaldo.png",this.picture4="../../../../assets/sample-images/scan3.svg",this.themeColor="dark",this.isCorrect=!1,this.enableTouchIdFaceId=!0,this.userinfo=[],this.reportes="../../../../assets/sample-images/reportes.svg",this.mycuenta="../../../../assets/sample-images/mycuenta.svg",this.myservicio="../../../../assets/sample-images/myservicio3.svg",this.mytrasferencia="../../../../assets/sample-images/mytransaferencia2.svg",this.mytiendas="../../../../assets/sample-images/mytienda.svg",this.mymoney="../../../../assets/sample-images/money.svg",this.mytranspote="../../../../assets/sample-images/mytranspote.svg",this.apifoto=this.authenticationService.getapifoto(),this.radioColorForm=new P.g({selected_color:new P.e("#fc9961")})}ngOnInit(){this.userinfo=this.authenticationService.getcopiauser(),this.logo1=this.authenticationService.dalogo1(this.userinfo),this.moneda=this.userinfo[0].idempresa.moneda,this.role=this.userinfo[0].role,this.tituloxx=this.router.getCurrentNavigation().extras.state.title,this.itemsList=this.router.getCurrentNavigation().extras.state.opciones}operacion(e){return Object(O.a)(this,void 0,void 0,(function*(){switch(e){case"vendesaldo":this.recargar("vendersaldo","VENDER SALDO","cobrar","venta");break;case"comprasaldo":this.pin22("comprasaldo");break;case"transferir":this.comopagar2("trasferencia");break;case"mistransferencias":this.mytransferencia();break;case"cobrarpasaje":this.cobrobus();break;case"cobrarpasaje2":this.cobrobus2();break;case"cobrarpasaje3":this.cobrobus3();break;case"Cobros del dia bus":this.pivote(e);break;case"pagarsubcidio":this.pin2acceso("pagoqr")}}))}colectar(){return Object(O.a)(this,void 0,void 0,(function*(){}))}mytienda(){return Object(O.a)(this,void 0,void 0,(function*(){this.router.navigate(["app/ProvidesPage"],{state:{variables:"",user:null,moneda:this.moneda,titulo:"Tiendas"}})}))}pivote(e){return Object(O.a)(this,void 0,void 0,(function*(){this.router.navigate(["PivoteListPage"],{state:{variables:"",user:null,moneda:this.moneda,title:e}})}))}mycuentas(){return Object(O.a)(this,void 0,void 0,(function*(){this.router.navigate(["contact-card2"],{state:{variables:"",user:null,moneda:this.moneda,titulo:"My cuenta"}})}))}recargar(e,n,t,o){return Object(O.a)(this,void 0,void 0,(function*(){this.lockscreenService.verify({passcode:this.userinfo[0].codpersonal,enableTouchIdFaceId:this.enableTouchIdFaceId}).then(a=>{const{data:i}=a;"dismiss"===i.type?this.vende(e,n,t,o):this.isCorrect=!1})}))}vende(e,n,t,o){return Object(O.a)(this,void 0,void 0,(function*(){const a=yield this.modalController.create({component:_.a,animated:!0,componentProps:{moneda:this.moneda,title:"Ingrese monto ",validasaldo:"no",tipo2:o,botonn:n,botonn2:t,tipo:e},presentingElement:yield this.modalController.getTop(),cssClass:"modal-fullscreen"});return a.onWillDismiss().then(t=>{"close"!==t.data.data&&this.venderconqr(t.data.data,e,n,o)}),yield a.present()}))}venderconqr(e,n,t,o){return Object(O.a)(this,void 0,void 0,(function*(){const a=yield this.modalController.create({component:y.a,animated:!0,componentProps:{moneda:this.moneda,title:t,tipo2:o,tipo:n,monto:e},presentingElement:yield this.modalController.getTop(),cssClass:"modal-fullscreen"});return a.onWillDismiss().then(e=>{"close"!==e.data.data&&this.authenticationService.presentAlert(e.data.data,"Gracias","")}),yield a.present()}))}myservicios(){return Object(O.a)(this,void 0,void 0,(function*(){}))}mytransferencia(){return Object(O.a)(this,void 0,void 0,(function*(){this.router.navigate(["tokensListPage"],{state:{variables:"",user:null,moneda:this.moneda,titulo:"Mis Transferencias"}})}))}cobrobus(){return Object(O.a)(this,void 0,void 0,(function*(){this.router.navigate(["tokens2ListPage"],{state:{variables:"",user:null,opcionfinal:"mixto",moneda:this.moneda,titulo:"Cobro pasaje"}})}))}cobrobus3(){return Object(O.a)(this,void 0,void 0,(function*(){this.router.navigate(["tokens2ListPage"],{state:{variables:"",user:null,opcionfinal:"broadcaster",moneda:this.moneda,titulo:"Cobro pasaje"}})}))}cobrobus2(){return Object(O.a)(this,void 0,void 0,(function*(){this.router.navigate(["tokenspago0ListPage"],{state:{variables:"",user:null,moneda:this.moneda,titulo:"Cobro pasaje"}})}))}cobrarconqr(e,n){return Object(O.a)(this,void 0,void 0,(function*(){const t=yield this.modalController.create({component:x.a,animated:!0,componentProps:{moneda:this.moneda,title:"COBRAR",monto:e,tipo:n},presentingElement:yield this.modalController.getTop(),cssClass:"modal-fullscreen"});return t.onWillDismiss().then(e=>{"close"!==e.data.data&&this.authenticationService.presentAlert(e.data.data,"Gracias","Por tu compra")}),yield t.present()}))}pin(e){return Object(O.a)(this,void 0,void 0,(function*(){this.comocobrar2(e)}))}comocobrar2(e){return Object(O.a)(this,void 0,void 0,(function*(){this.cobrar(e)}))}cobrar(e){return Object(O.a)(this,void 0,void 0,(function*(){const n=yield this.modalController.create({component:_.a,animated:!0,componentProps:{moneda:this.moneda,title:"Ingrese monto ",botonn:"COBRAR",botonn2:"cobro",validarsaldo:"no",tipo:e},presentingElement:yield this.modalController.getTop(),cssClass:"modal-fullscreen"});return n.onWillDismiss().then(n=>{"close"!==n.data.data&&this.cobrarconqr(n.data.data,e)}),yield n.present()}))}escanearqr(e,n,t){return Object(O.a)(this,void 0,void 0,(function*(){const o=yield this.modalController.create({component:R.a,animated:!0,componentProps:{moneda:this.moneda,title:t,monto:e,tipo:n},presentingElement:yield this.modalController.getTop(),cssClass:"modal-fullscreen"});return o.onWillDismiss().then(e=>{}),yield o.present()}))}pin22(e){return Object(O.a)(this,void 0,void 0,(function*(){this.escanearqr(e,e,"Identificarse")}))}comprarsaldo(e){return Object(O.a)(this,void 0,void 0,(function*(){}))}comocobrar22(e,n){return Object(O.a)(this,void 0,void 0,(function*(){const t=yield this.modalController.create({component:R.a,animated:!0,componentProps:{moneda:this.moneda,title:"COBRAR",monto:n,tipo:e},presentingElement:yield this.modalController.getTop(),cssClass:"modal-fullscreen"});return t.onWillDismiss().then(e=>{}),yield t.present()}))}comocobrar2qr(e){return Object(O.a)(this,void 0,void 0,(function*(){const n=yield this.modalController.create({component:_.a,animated:!0,componentProps:{moneda:this.moneda,title:"Ingrese monto ",botonn:"COBRAR",botonn2:"cobro",validarsaldo:"no",tipo:e},presentingElement:yield this.modalController.getTop(),cssClass:"modal-fullscreen"});return n.onWillDismiss().then(n=>{"close"!==n.data.data&&this.comocobrar22(e,n.data.data)}),yield n.present()}))}pin2acceso(e){return Object(O.a)(this,void 0,void 0,(function*(){"Aplicar"===this.userinfo[0].accesohora?this.lockscreenService.verify({passcode:this.userinfo[0].codpersonal,enableTouchIdFaceId:this.enableTouchIdFaceId}).then(n=>{const{data:t}=n;"dismiss"===t.type?"cobrapagoqr"===e?this.comocobrar2qr(e):this.comopagar2(e):this.isCorrect=!1}):this.comopagar2(e)}))}pin2(e){return Object(O.a)(this,void 0,void 0,(function*(){this.lockscreenService.verify({passcode:this.userinfo[0].codpersonal,enableTouchIdFaceId:this.enableTouchIdFaceId}).then(n=>{const{data:t}=n;"dismiss"===t.type?this.comopagar2(e):this.isCorrect=!1})}))}comopagar2(e){return Object(O.a)(this,void 0,void 0,(function*(){if("trasferencia"!==e){const n=yield this.modalController.create({component:w.a,animated:!0,componentProps:{moneda:this.moneda,metodopago:e,title:"Seleccione opci\xf3n",botonn:"PAGAR"},presentingElement:yield this.modalController.getTop(),cssClass:"modal-fullscreen"});return n.onWillDismiss().then(e=>{"close"!==e.data.data&&("pagoqr"===e.data.data?this.pagarconqr(e.data.data,e.data.data,"PAGAR"):this.pagar2qr())}),yield n.present()}this.pagar2(e,"TRANSFERENCIA")}))}pagar2(e,n){return Object(O.a)(this,void 0,void 0,(function*(){const t=yield this.modalController.create({component:_.a,animated:!0,componentProps:{moneda:this.moneda,title:"Ingrese monto",botonn:n,botonn2:n,validarsaldo:"si"},presentingElement:yield this.modalController.getTop(),cssClass:"modal-fullscreen"});return t.onWillDismiss().then(t=>{"close"!==t.data.data&&this.pagarconqr(t.data.data,e,n)}),yield t.present()}))}pagar2qr(){return Object(O.a)(this,void 0,void 0,(function*(){const e=yield this.modalController.create({component:R.a,animated:!0,componentProps:{moneda:this.moneda,title:"PAGAR",monto:-1e3,tipo:"pagoqr"},presentingElement:yield this.modalController.getTop(),cssClass:"modal-fullscreen"});return e.onWillDismiss().then(e=>{}),yield e.present()}))}pagarconqr(e,n,t){return Object(O.a)(this,void 0,void 0,(function*(){const o=yield this.modalController.create({component:R.a,animated:!0,componentProps:{moneda:this.moneda,title:t,monto:e,tipo:n},presentingElement:yield this.modalController.getTop(),cssClass:"modal-fullscreen"});return o.onWillDismiss().then(e=>{}),yield o.present()}))}}var I=t("TSSN"),E=o["\u0275crt"]({encapsulation:0,styles:[['.plt-mobile.md[_nghost-%COMP%]   .user-details-section[_ngcontent-%COMP%]   .user-image-wrapper[_ngcontent-%COMP%], .plt-mobile.md   [_nghost-%COMP%]   .user-details-section[_ngcontent-%COMP%]   .user-image-wrapper[_ngcontent-%COMP%]{max-width:28%}.plt-mobile.ios[_nghost-%COMP%]   .user-details-section[_ngcontent-%COMP%]   .user-image-wrapper[_ngcontent-%COMP%], .plt-mobile.ios   [_nghost-%COMP%]   .user-details-section[_ngcontent-%COMP%]   .user-image-wrapper[_ngcontent-%COMP%]{max-width:30%}[_nghost-%COMP%]{--page-margin:var(--app-narrow-margin);--page-border-radius:var(--app-fair-radius);--page-actions-padding:5px;--page-friends-gutter:calc(var(--page-margin)/2);--page-pictures-gutter:calc(var(--page-margin)/2)}.user-details-section[_ngcontent-%COMP%]{--ion-grid-column-padding:0px;margin:var(--page-margin)}.user-details-section[_ngcontent-%COMP%]   .user-image-wrapper[_ngcontent-%COMP%]{max-width:26%}.user-details-section[_ngcontent-%COMP%]   .user-info-wrapper[_ngcontent-%COMP%]{padding-left:var(--page-margin);display:flex;flex-direction:column;justify-content:space-between;flex-wrap:nowrap}.user-details-section[_ngcontent-%COMP%]   .user-info-wrapper[_ngcontent-%COMP%]   .user-data-row[_ngcontent-%COMP%]{padding-bottom:var(--page-margin);flex-wrap:nowrap;justify-content:space-between}.user-details-section[_ngcontent-%COMP%]   .user-info-wrapper[_ngcontent-%COMP%]   .user-data-row[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%]{margin:0 0 5px;font-size:20px;letter-spacing:.5px}.user-details-section[_ngcontent-%COMP%]   .user-info-wrapper[_ngcontent-%COMP%]   .user-data-row[_ngcontent-%COMP%]   .user-title[_ngcontent-%COMP%]{margin:0;color:var(--ion-color-medium);font-size:16px}.user-details-section[_ngcontent-%COMP%]   .user-info-wrapper[_ngcontent-%COMP%]   .user-data-row[_ngcontent-%COMP%]   .membership-col[_ngcontent-%COMP%]{padding-left:var(--page-margin);flex-grow:0}.user-details-section[_ngcontent-%COMP%]   .user-info-wrapper[_ngcontent-%COMP%]   .user-data-row[_ngcontent-%COMP%]   .user-membership[_ngcontent-%COMP%]{display:block;background-color:var(--ion-color-secondary);color:var(--ion-color-lightest);border-radius:var(--app-narrow-radius);padding:4px 8px;text-align:center;font-weight:500;font-size:14px}.user-details-section[_ngcontent-%COMP%]   .user-info-wrapper[_ngcontent-%COMP%]   .actions-row[_ngcontent-%COMP%]{--ion-grid-columns:10;--ion-grid-column-padding:var(--page-actions-padding);justify-content:space-between;flex-wrap:nowrap;margin-left:calc(var(--page-actions-padding)*-1);margin-right:calc(var(--page-actions-padding)*-1)}.user-details-section[_ngcontent-%COMP%]   .user-info-wrapper[_ngcontent-%COMP%]   .actions-row[_ngcontent-%COMP%]   .main-actions[_ngcontent-%COMP%]{flex-grow:0;padding-top:0;padding-bottom:0;margin-left:calc(var(--page-actions-padding)*-1);margin-right:calc(var(--page-actions-padding)*-1);display:flex}.user-details-section[_ngcontent-%COMP%]   .user-info-wrapper[_ngcontent-%COMP%]   .actions-row[_ngcontent-%COMP%]   .main-actions[_ngcontent-%COMP%]   .call-to-action-btn[_ngcontent-%COMP%]{padding:0 var(--page-actions-padding);margin:0}.user-details-section[_ngcontent-%COMP%]   .user-info-wrapper[_ngcontent-%COMP%]   .actions-row[_ngcontent-%COMP%]   .secondary-actions[_ngcontent-%COMP%]{flex-grow:0;padding-top:0;padding-bottom:0}.user-details-section[_ngcontent-%COMP%]   .user-info-wrapper[_ngcontent-%COMP%]   .actions-row[_ngcontent-%COMP%]   .secondary-actions[_ngcontent-%COMP%]   .more-btn[_ngcontent-%COMP%]{--padding-start:4px;--padding-end:4px;margin:0}.user-stats-section[_ngcontent-%COMP%]{--ion-grid-column-padding:0px;margin:calc(var(--page-margin)*2) var(--page-margin) var(--page-margin);padding-bottom:var(--page-margin);border-bottom:1px solid var(--ion-color-light-shade)}.user-stats-section[_ngcontent-%COMP%]   .user-stats-wrapper[_ngcontent-%COMP%]{text-align:center}.user-stats-section[_ngcontent-%COMP%]   .user-stats-wrapper[_ngcontent-%COMP%]   .stat-value[_ngcontent-%COMP%]{display:block;padding-bottom:5px;color:var(--ion-color-dark-shade);font-weight:500;font-size:18px}.user-stats-section[_ngcontent-%COMP%]   .user-stats-wrapper[_ngcontent-%COMP%]   .stat-name[_ngcontent-%COMP%]{font-size:16px;color:var(--ion-color-medium)}.details-section-title[_ngcontent-%COMP%]{font-size:18px;font-weight:500;color:var(--ion-color-dark-tint);margin:0 0 var(--page-margin)}.user-about-section[_ngcontent-%COMP%]{margin:calc(var(--page-margin)*2) var(--page-margin) var(--page-margin);padding-bottom:var(--page-margin);border-bottom:1px solid var(--ion-color-light-shade)}.user-about-section[_ngcontent-%COMP%]   .user-description[_ngcontent-%COMP%]{color:var(--ion-color-dark-shade);text-align:justify;margin:var(--page-margin) 0;font-size:14px;line-height:1.3}.user-friends-section[_ngcontent-%COMP%]{margin:calc(var(--page-margin)*2) var(--page-margin) var(--page-margin);padding-bottom:var(--page-margin);border-bottom:1px solid var(--ion-color-light-shade)}.user-friends-section[_ngcontent-%COMP%]   .heading-row[_ngcontent-%COMP%]{margin-bottom:var(--page-margin);justify-content:space-between;align-items:center}.user-friends-section[_ngcontent-%COMP%]   .heading-row[_ngcontent-%COMP%]   .details-section-title[_ngcontent-%COMP%]{margin:0}.user-friends-section[_ngcontent-%COMP%]   .heading-row[_ngcontent-%COMP%]   .heading-call-to-action[_ngcontent-%COMP%]{padding:calc(var(--page-margin)/2) calc(var(--page-margin)/4);text-decoration:none;color:var(--ion-color-secondary)}.user-friends-section[_ngcontent-%COMP%]   ion-row.item[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%]{background-color:#708090;box-shadow:inset 0 0 0 1px red}.user-friends-section[_ngcontent-%COMP%]   .friends-row[_ngcontent-%COMP%]{--ion-grid-columns:7;--ion-grid-column-padding:auto;text-align:center;align-items:center;justify-content:center;flex-wrap:nowrap;overflow-x:scroll;will-change:scroll-position;-ms-overflow-style:none;overflow:-moz-scrollbars-none;scrollbar-width:none}.user-friends-section[_ngcontent-%COMP%]   .friends-row[_ngcontent-%COMP%]::-webkit-scrollbar{display:none}.user-friends-section[_ngcontent-%COMP%]   .friends-row[_ngcontent-%COMP%]:after, .user-friends-section[_ngcontent-%COMP%]   .friends-row[_ngcontent-%COMP%]:before{content:"";flex:0 0 calc(var(--page-margin) - var(--page-friends-gutter))}.user-friends-section[_ngcontent-%COMP%]   .friends-row[_ngcontent-%COMP%]   .friend-item[_ngcontent-%COMP%]{padding:0 var(--page-friends-gutter)}.user-friends-section[_ngcontent-%COMP%]   .friends-row[_ngcontent-%COMP%]   .friend-item[_ngcontent-%COMP%]   .friend-name[_ngcontent-%COMP%]{display:block;text-align:center;margin:var(--page-margin) 0;font-size:14px}.user-photos-section[_ngcontent-%COMP%]{margin:calc(var(--page-margin)*2) var(--page-margin) var(--page-margin);padding-bottom:calc(var(--page-margin)*2)}.user-photos-section[_ngcontent-%COMP%]   .heading-row[_ngcontent-%COMP%]{margin-bottom:var(--page-margin);justify-content:space-between;align-items:center}.user-photos-section[_ngcontent-%COMP%]   .heading-row[_ngcontent-%COMP%]   .details-section-title[_ngcontent-%COMP%]{margin:0}.user-photos-section[_ngcontent-%COMP%]   .heading-row[_ngcontent-%COMP%]   .heading-call-to-action[_ngcontent-%COMP%]{padding:calc(var(--page-margin)/2) calc(var(--page-margin)/4);text-decoration:none;color:var(--ion-color-secondary)}.user-photos-section[_ngcontent-%COMP%]   .pictures-row[_ngcontent-%COMP%]{--ion-grid-columns:4;--ion-grid-column-padding:0px;margin:0 calc(var(--page-pictures-gutter)*-1)}.user-photos-section[_ngcontent-%COMP%]   .pictures-row[_ngcontent-%COMP%]   .picture-item[_ngcontent-%COMP%]{padding:0 var(--page-pictures-gutter) calc(var(--page-pictures-gutter)*2)}  .language-alert{--select-alert-color:#000;--select-alert-background:#fff;--select-alert-margin:16px;--select-alert-color:var(--ion-color-lightest);--select-alert-background:var(--ion-color-primary);--select-alert-margin:var(--app-fair-margin)}  .language-alert .alert-head{padding-top:calc(var(--select-alert-margin)/4*3);padding-bottom:calc(var(--select-alert-margin)/4*3);-webkit-padding-start:var(--select-alert-margin);padding-inline-start:var(--select-alert-margin);-webkit-padding-end:var(--select-alert-margin);padding-inline-end:var(--select-alert-margin)}  .language-alert .alert-title{color:var(--select-alert-color)}  .language-alert .alert-head,   .language-alert .alert-message{background-color:var(--select-alert-background)}  .language-alert .alert-wrapper.sc-ion-alert-ios .alert-title{margin:0}  .language-alert .alert-wrapper.sc-ion-alert-md .alert-title{font-size:18px;font-weight:400}  .language-alert .alert-wrapper.sc-ion-alert-md .alert-button{--padding-top:0;--padding-start:0.9em;--padding-end:0.9em;--padding-bottom:0;height:2.1em;font-size:13px}  .language-alert .alert-message{display:none}app-image-shell.user-image[_ngcontent-%COMP%]{--image-shell-border-radius:var(--page-border-radius)}.user-name[_ngcontent-%COMP%] > app-text-shell[_ngcontent-%COMP%]{--text-shell-line-height:20px;max-width:50%}.user-name[_ngcontent-%COMP%] > app-text-shell.text-loaded[_ngcontent-%COMP%]{max-width:unset}.user-title[_ngcontent-%COMP%] > app-text-shell[_ngcontent-%COMP%]{--text-shell-line-height:16px;max-width:70%}.user-title[_ngcontent-%COMP%] > app-text-shell.text-loaded[_ngcontent-%COMP%]{max-width:unset}.user-membership[_ngcontent-%COMP%] > app-text-shell[_ngcontent-%COMP%]{--text-shell-line-color:rgba(var(--ion-color-secondary-rgb),0.4);--text-shell-line-height:14px;min-width:30px}.user-membership[_ngcontent-%COMP%] > app-text-shell.text-loaded[_ngcontent-%COMP%]{min-width:0}.stat-value[_ngcontent-%COMP%] > app-text-shell[_ngcontent-%COMP%]{--text-shell-line-height:18px;max-width:50%;margin:0 auto}.stat-value[_ngcontent-%COMP%] > app-text-shell.text-loaded[_ngcontent-%COMP%]{max-width:unset;margin:initial}.user-description[_ngcontent-%COMP%] > app-text-shell[_ngcontent-%COMP%]{--text-shell-line-height:14px}app-image-shell.friend-picture[_ngcontent-%COMP%]{--image-shell-border-radius:var(--page-border-radius)}.friend-name[_ngcontent-%COMP%] > app-text-shell[_ngcontent-%COMP%]{--text-shell-line-height:14px}app-image-shell.user-photo-image[_ngcontent-%COMP%]{--image-shell-border-radius:var(--page-border-radius)}']],data:{}});function D(e){return o["\u0275vid"](0,[(e()(),o["\u0275eld"](0,0,null,null,15,"ion-col",[["class","picture-item"],["size","2"]],null,null,null,p.vb,p.n)),o["\u0275did"](1,49152,null,0,u.u,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],{size:[0,"size"]},null),(e()(),o["\u0275eld"](2,0,null,0,13,"ion-card",[],null,[[null,"click"]],(function(e,n,t){var a=!0,i=e.component;return"click"===n&&(a=!1!==o["\u0275nov"](e,4).onClick()&&a),"click"===n&&(a=!1!==o["\u0275nov"](e,5).onClick(t)&&a),"click"===n&&(a=!1!==i.operacion(e.context.$implicit.operacion)&&a),a}),p.sb,p.g)),o["\u0275did"](3,49152,null,0,u.n,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],null,null),o["\u0275did"](4,16384,null,0,m.n,[m.m,m.a,[8,null],o.Renderer2,o.ElementRef],null,null),o["\u0275did"](5,737280,null,0,u.Nb,[h.LocationStrategy,u.Hb,o.ElementRef,m.m,[2,m.n]],null,null),(e()(),o["\u0275eld"](6,0,null,0,4,"app-aspect-ratio",[],[[4,"padding",null]],null,null,v.b,v.a)),o["\u0275did"](7,49152,null,0,f.a,[],{ratio:[0,"ratio"]},null),o["\u0275pod"](8,{w:0,h:1}),(e()(),o["\u0275eld"](9,0,null,0,1,"app-image-shell",[["animation","spinner"],["class","picture-image"]],[[2,"img-loaded",null],[4,"backgroundImage",null],[1,"display",0]],null,null,C.b,C.a)),o["\u0275did"](10,49152,null,0,b.a,[o.PLATFORM_ID],{src:[0,"src"],alt:[1,"alt"]},null),(e()(),o["\u0275eld"](11,0,null,0,4,"ion-card-header",[],null,null,null,p.pb,p.i)),o["\u0275did"](12,49152,null,0,u.p,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],null,null),(e()(),o["\u0275eld"](13,0,null,0,2,"ion-card-subtitle",[],null,null,null,p.qb,p.j)),o["\u0275did"](14,49152,null,0,u.q,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],null,null),(e()(),o["\u0275ted"](15,0,["",""]))],(function(e,n){e(n,1,0,"2"),e(n,5,0);var t=e(n,8,0,3,2);e(n,7,0,t),e(n,10,0,n.context.$implicit.foto,n.context.$implicit.title)}),(function(e,n){e(n,6,0,o["\u0275nov"](n,7).ratioPadding),e(n,9,0,o["\u0275nov"](n,10).imageLoaded,o["\u0275nov"](n,10).backgroundImage,o["\u0275nov"](n,10).display),e(n,15,0,n.context.$implicit.title)}))}function N(e){return o["\u0275vid"](0,[(e()(),o["\u0275eld"](0,0,null,null,14,"ion-header",[],null,null,null,p.Cb,p.u)),o["\u0275did"](1,49152,null,0,u.C,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],null,null),(e()(),o["\u0275eld"](2,0,null,0,12,"ion-toolbar",[["color","primary"]],null,null,null,p.oc,p.gb)),o["\u0275did"](3,49152,null,0,u.Ab,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],{color:[0,"color"]},null),(e()(),o["\u0275eld"](4,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,p.nb,p.f)),o["\u0275did"](5,49152,null,0,u.m,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],null,null),(e()(),o["\u0275eld"](6,0,null,0,2,"ion-back-button",[["defaultHref","BilleteraListPage"]],null,[[null,"click"]],(function(e,n,t){var a=!0;return"click"===n&&(a=!1!==o["\u0275nov"](e,8).onClick(t)&&a),a}),p.kb,p.c)),o["\u0275did"](7,49152,null,0,u.h,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],{defaultHref:[0,"defaultHref"]},null),o["\u0275did"](8,16384,null,0,u.i,[[2,u.gb],u.Hb,u.e],{defaultHref:[0,"defaultHref"]},null),(e()(),o["\u0275eld"](9,0,null,0,2,"ion-title",[],null,null,null,p.mc,p.eb)),o["\u0275did"](10,49152,null,0,u.yb,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],null,null),(e()(),o["\u0275ted"](11,0,[" TotalPay "," "])),(e()(),o["\u0275eld"](12,0,null,0,2,"ion-buttons",[["slot","end"]],null,null,null,p.nb,p.f)),o["\u0275did"](13,49152,null,0,u.m,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],null,null),(e()(),o["\u0275eld"](14,0,null,0,0,"img",[["alt","logo"],["height","33"],["id","header_logo"]],[[8,"src",4]],null,null,null,null)),(e()(),o["\u0275eld"](15,0,null,null,6,"ion-content",[["class","user-profile-content"]],null,null,null,p.wb,p.o)),o["\u0275did"](16,49152,null,0,u.v,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],null,null),(e()(),o["\u0275eld"](17,0,null,0,4,"div",[["class","user-photos-section"]],null,null,null,null,null)),(e()(),o["\u0275eld"](18,0,null,null,3,"ion-row",[["class","pictures-row"]],null,null,null,p.Wb,p.O)),o["\u0275did"](19,49152,null,0,u.hb,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],null,null),(e()(),o["\u0275and"](16777216,null,0,1,null,D)),o["\u0275did"](21,278528,null,0,h.NgForOf,[o.ViewContainerRef,o.TemplateRef,o.IterableDiffers],{ngForOf:[0,"ngForOf"]},null)],(function(e,n){var t=n.component;e(n,3,0,"primary"),e(n,7,0,"BilleteraListPage"),e(n,8,0,"BilleteraListPage"),e(n,21,0,t.itemsList)}),(function(e,n){var t=n.component;e(n,11,0,t.tituloxx),e(n,14,0,t.apifoto+t.logo1)}))}function T(e){return o["\u0275vid"](0,[(e()(),o["\u0275eld"](0,0,null,null,1,"app-billetera2-list",[],null,null,null,N,E)),o["\u0275did"](1,114688,null,0,k,[m.m,M.a,u.b,j.a,I.l,u.Gb],null,null)],(function(e,n){e(n,1,0)}),null)}var L=o["\u0275ccf"]("app-billetera2-list",k,T,{},{},[]),F=t("IheW"),A=t("ZpN7"),S=t("Kt/9"),q=t("fozt"),Z=t("7eCM"),z=t("JuzA"),W=t("KyMZ"),B=t("j1ZV"),G=t("FaL/"),H=t("xjce"),K=t("0rIg"),J=o["\u0275cmf"](a,[],(function(e){return o["\u0275mod"]([o["\u0275mpd"](512,o.ComponentFactoryResolver,o["\u0275CodegenComponentFactoryResolver"],[[8,[i.a,r.a,l.a,s.a,c.a,d.a,g.a,L]],[3,o.ComponentFactoryResolver],o.NgModuleRef]),o["\u0275mpd"](4608,h.NgLocalization,h.NgLocaleLocalization,[o.LOCALE_ID]),o["\u0275mpd"](4608,P.w,P.w,[]),o["\u0275mpd"](4608,u.c,u.c,[o.NgZone,o.ApplicationRef]),o["\u0275mpd"](4608,u.Gb,u.Gb,[u.c,o.ComponentFactoryResolver,o.Injector]),o["\u0275mpd"](4608,u.Lb,u.Lb,[u.c,o.ComponentFactoryResolver,o.Injector]),o["\u0275mpd"](4608,P.d,P.d,[]),o["\u0275mpd"](4608,I.h,I.g,[]),o["\u0275mpd"](4608,I.d,I.f,[]),o["\u0275mpd"](4608,I.j,I.e,[]),o["\u0275mpd"](4608,I.c,I.b,[]),o["\u0275mpd"](4608,I.l,I.l,[I.m,I.h,I.d,I.j,I.c,I.n,I.p,I.o,I.a]),o["\u0275mpd"](4608,F.i,F.o,[h.DOCUMENT,o.PLATFORM_ID,F.m]),o["\u0275mpd"](4608,F.p,F.p,[F.i,F.n]),o["\u0275mpd"](5120,F.a,(function(e){return[e]}),[F.p]),o["\u0275mpd"](4608,F.l,F.l,[]),o["\u0275mpd"](6144,F.j,null,[F.l]),o["\u0275mpd"](4608,F.h,F.h,[F.j]),o["\u0275mpd"](6144,F.b,null,[F.h]),o["\u0275mpd"](4608,F.f,F.k,[F.b,o.Injector]),o["\u0275mpd"](4608,F.c,F.c,[F.f]),o["\u0275mpd"](5120,o.APP_INITIALIZER,(function(e){return[A.b(e)]}),[S.a]),o["\u0275mpd"](1073742336,h.CommonModule,h.CommonModule,[]),o["\u0275mpd"](1073742336,P.v,P.v,[]),o["\u0275mpd"](1073742336,P.j,P.j,[]),o["\u0275mpd"](1073742336,u.Cb,u.Cb,[]),o["\u0275mpd"](1073742336,q.a,q.a,[]),o["\u0275mpd"](1073742336,Z.a,Z.a,[]),o["\u0275mpd"](1073742336,P.s,P.s,[]),o["\u0275mpd"](1073742336,z.a,z.a,[]),o["\u0275mpd"](1073742336,I.i,I.i,[]),o["\u0275mpd"](1073742336,W.a,W.a,[]),o["\u0275mpd"](1073742336,F.e,F.e,[]),o["\u0275mpd"](1073742336,F.d,F.d,[]),o["\u0275mpd"](1073742336,A.a,A.a,[]),o["\u0275mpd"](1073742336,B.a,B.a,[]),o["\u0275mpd"](1073742336,G.a,G.a,[]),o["\u0275mpd"](1073742336,H.a,H.a,[]),o["\u0275mpd"](1073742336,K.a,K.a,[]),o["\u0275mpd"](1073742336,m.p,m.p,[[2,m.u],[2,m.m]]),o["\u0275mpd"](1073742336,a,a,[]),o["\u0275mpd"](256,I.p,void 0,[]),o["\u0275mpd"](256,I.n,void 0,[]),o["\u0275mpd"](256,I.o,void 0,[]),o["\u0275mpd"](256,I.a,void 0,[]),o["\u0275mpd"](256,F.m,"XSRF-TOKEN",[]),o["\u0275mpd"](256,F.n,"X-XSRF-TOKEN",[]),o["\u0275mpd"](1024,m.k,(function(){return[[{path:"",component:k}]]}),[])])}))}}]);