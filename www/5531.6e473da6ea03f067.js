"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[5531],{65531:(j,h,r)=>{r.r(h),r.d(h,{Billetera2ListPageModule:()=>B});var l=r(23349),v=r(55787),C=r(69808),P=r(33678),f=r(51062),p=r(93075),O=r(77129),M=r(42445),y=r(22413),b=r(81773),x=r(55477),_=r(16580),a=r(70655),w=r(49926),m=r(86489),T=r(94229),k=r(15604),G=r(8027),u=r(96793),A=r(71674),t=r(5e3),E=r(71408),Z=r(89330);const I=function(){return{w:1,h:1}};function F(s,d){if(1&s){const e=t.EpF();t.TgZ(0,"ion-col",10),t.TgZ(1,"app-image-shell",11),t.NdJ("click",function(){const i=t.CHM(e).$implicit;return t.oxw().operacion(i.operacion)}),t.TgZ(2,"app-aspect-ratio",12),t.TgZ(3,"a",13),t.TgZ(4,"h2",14),t._uU(5),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()}if(2&s){const e=d.$implicit;t.xp6(1),t.Q6J("display","cover")("src",e.foto)("alt",e.title),t.xp6(1),t.Q6J("ratio",t.DdM(5,I)),t.xp6(3),t.Oqu(e.title)}}let L=(()=>{class s{constructor(e,n,o,i,c,g){this.router=e,this.authenticationService=n,this.alertController=o,this.lockscreenService=i,this.translateService=c,this.modalController=g,this.picture="../../../../assets/sample-images/scan1.svg",this.picture2="../../../../assets/sample-images/scan2.svg",this.picture3="../../../../assets/sample-images/comprarsaldo.png",this.picture4="../../../../assets/sample-images/scan3.svg",this.themeColor="dark",this.isCorrect=!1,this.enableTouchIdFaceId=!0,this.userinfo=[],this.reportes="../../../../assets/sample-images/reportes.svg",this.mycuenta="../../../../assets/sample-images/mycuenta.svg",this.myservicio="../../../../assets/sample-images/myservicio3.svg",this.mytrasferencia="../../../../assets/sample-images/mytransaferencia2.svg",this.mytiendas="../../../../assets/sample-images/mytienda.svg",this.mymoney="../../../../assets/sample-images/money.svg",this.mytranspote="../../../../assets/sample-images/mytranspote.svg",this.apifoto=this.authenticationService.getapifoto(),this.radioColorForm=new p.cw({selected_color:new p.NI("#fc9961")})}ngOnInit(){this.userinfo=this.authenticationService.getcopiauser(),this.logo1=this.authenticationService.dalogo1(this.userinfo),this.moneda=this.userinfo[0].idempresa.moneda,this.role=this.userinfo[0].role,this.tituloxx=this.router.getCurrentNavigation().extras.state.title,this.itemsList=this.router.getCurrentNavigation().extras.state.opciones}operacion(e){return(0,a.mG)(this,void 0,void 0,function*(){switch(e){case"vendesaldo":this.recargar("vendersaldo","VENDER SALDO","cobrar","venta");break;case"comprasaldo":this.pin22("comprasaldo");break;case"transferir":this.comopagar2("trasferencia");break;case"mistransferencias":this.mytransferencia();break;case"cobrarpasaje":this.cobrobus();break;case"cobrarpasaje2":this.cobrobus2();break;case"cobrarpasaje3":this.cobrobus3();break;case"Cobros del dia bus":this.pivote(e);break;case"pagarsubcidio":this.pin2acceso("pagoqr")}})}colectar(){return(0,a.mG)(this,void 0,void 0,function*(){})}mytienda(){return(0,a.mG)(this,void 0,void 0,function*(){this.router.navigate(["app/ProvidesPage"],{state:{variables:"",user:null,moneda:this.moneda,titulo:"Tiendas"}})})}pivote(e){return(0,a.mG)(this,void 0,void 0,function*(){this.router.navigate(["PivoteListPage"],{state:{variables:"",user:null,moneda:this.moneda,title:e}})})}mycuentas(){return(0,a.mG)(this,void 0,void 0,function*(){this.router.navigate(["contact-card2"],{state:{variables:"",user:null,moneda:this.moneda,titulo:"My cuenta"}})})}recargar(e,n,o,i){return(0,a.mG)(this,void 0,void 0,function*(){this.lockscreenService.verify({passcode:this.userinfo[0].codpersonal,enableTouchIdFaceId:this.enableTouchIdFaceId}).then(g=>{const{data:S}=g;"dismiss"===S.type?this.vende(e,n,o,i):this.isCorrect=!1})})}vende(e,n,o,i){return(0,a.mG)(this,void 0,void 0,function*(){const c=yield this.modalController.create({component:m.E,animated:!0,componentProps:{moneda:this.moneda,title:"Ingrese monto ",validasaldo:"no",tipo2:i,botonn:n,botonn2:o,tipo:e},presentingElement:yield this.modalController.getTop(),cssClass:"modal-fullscreen"});return c.onWillDismiss().then(g=>{"close"!==g.data.data&&this.venderconqr(g.data.data,e,n,i)}),yield c.present()})}venderconqr(e,n,o,i){return(0,a.mG)(this,void 0,void 0,function*(){const c=yield this.modalController.create({component:G.w,animated:!0,componentProps:{moneda:this.moneda,title:o,tipo2:i,tipo:n,monto:e},presentingElement:yield this.modalController.getTop(),cssClass:"modal-fullscreen"});return c.onWillDismiss().then(g=>{"close"!==g.data.data&&this.authenticationService.presentAlert(g.data.data,"Gracias","")}),yield c.present()})}myservicios(){return(0,a.mG)(this,void 0,void 0,function*(){})}mytransferencia(){return(0,a.mG)(this,void 0,void 0,function*(){this.router.navigate(["tokensListPage"],{state:{variables:"",user:null,moneda:this.moneda,titulo:"Mis Transferencias"}})})}cobrobus(){return(0,a.mG)(this,void 0,void 0,function*(){this.router.navigate(["tokens2ListPage"],{state:{variables:"",user:null,opcionfinal:"mixto",moneda:this.moneda,titulo:"Cobro pasaje"}})})}cobrobus3(){return(0,a.mG)(this,void 0,void 0,function*(){this.router.navigate(["tokens2ListPage"],{state:{variables:"",user:null,opcionfinal:"broadcaster",moneda:this.moneda,titulo:"Cobro pasaje"}})})}cobrobus2(){return(0,a.mG)(this,void 0,void 0,function*(){this.router.navigate(["tokenspago0ListPage"],{state:{variables:"",user:null,moneda:this.moneda,titulo:"Cobro pasaje"}})})}cobrarconqr(e,n){return(0,a.mG)(this,void 0,void 0,function*(){const o=yield this.modalController.create({component:k.O,animated:!0,componentProps:{moneda:this.moneda,title:"COBRAR",monto:e,tipo:n},presentingElement:yield this.modalController.getTop(),cssClass:"modal-fullscreen"});return o.onWillDismiss().then(i=>{"close"!==i.data.data&&this.authenticationService.presentAlert(i.data.data,"Gracias","Por tu compra")}),yield o.present()})}pin(e){return(0,a.mG)(this,void 0,void 0,function*(){this.comocobrar2(e)})}comocobrar2(e){return(0,a.mG)(this,void 0,void 0,function*(){this.cobrar(e)})}cobrar(e){return(0,a.mG)(this,void 0,void 0,function*(){const n=yield this.modalController.create({component:m.E,animated:!0,componentProps:{moneda:this.moneda,title:"Ingrese monto ",botonn:"COBRAR",botonn2:"cobro",validarsaldo:"no",tipo:e},presentingElement:yield this.modalController.getTop(),cssClass:"modal-fullscreen"});return n.onWillDismiss().then(o=>{"close"!==o.data.data&&this.cobrarconqr(o.data.data,e)}),yield n.present()})}escanearqr(e,n,o){return(0,a.mG)(this,void 0,void 0,function*(){const i=yield this.modalController.create({component:u.u,animated:!0,componentProps:{moneda:this.moneda,title:o,monto:e,tipo:n},presentingElement:yield this.modalController.getTop(),cssClass:"modal-fullscreen"});return i.onWillDismiss().then(c=>{}),yield i.present()})}pin22(e){return(0,a.mG)(this,void 0,void 0,function*(){this.escanearqr(e,e,"Identificarse")})}comprarsaldo(e){return(0,a.mG)(this,void 0,void 0,function*(){})}comocobrar22(e,n){return(0,a.mG)(this,void 0,void 0,function*(){const o=yield this.modalController.create({component:u.u,animated:!0,componentProps:{moneda:this.moneda,title:"COBRAR",monto:n,tipo:e},presentingElement:yield this.modalController.getTop(),cssClass:"modal-fullscreen"});return o.onWillDismiss().then(i=>{}),yield o.present()})}comocobrar2qr(e){return(0,a.mG)(this,void 0,void 0,function*(){const n=yield this.modalController.create({component:m.E,animated:!0,componentProps:{moneda:this.moneda,title:"Ingrese monto ",botonn:"COBRAR",botonn2:"cobro",validarsaldo:"no",tipo:e},presentingElement:yield this.modalController.getTop(),cssClass:"modal-fullscreen"});return n.onWillDismiss().then(o=>{"close"!==o.data.data&&this.comocobrar22(e,o.data.data)}),yield n.present()})}pin2acceso(e){return(0,a.mG)(this,void 0,void 0,function*(){"Aplicar"===this.userinfo[0].accesohora?this.lockscreenService.verify({passcode:this.userinfo[0].codpersonal,enableTouchIdFaceId:this.enableTouchIdFaceId}).then(o=>{const{data:i}=o;"dismiss"===i.type?"cobrapagoqr"===e?this.comocobrar2qr(e):this.comopagar2(e):this.isCorrect=!1}):this.comopagar2(e)})}pin2(e){return(0,a.mG)(this,void 0,void 0,function*(){this.lockscreenService.verify({passcode:this.userinfo[0].codpersonal,enableTouchIdFaceId:this.enableTouchIdFaceId}).then(o=>{const{data:i}=o;"dismiss"===i.type?this.comopagar2(e):this.isCorrect=!1})})}comopagar2(e){return(0,a.mG)(this,void 0,void 0,function*(){if("trasferencia"!==e){const n=yield this.modalController.create({component:T.G,animated:!0,componentProps:{moneda:this.moneda,metodopago:e,title:"Seleccione opci\xf3n",botonn:"PAGAR"},presentingElement:yield this.modalController.getTop(),cssClass:"modal-fullscreen"});return n.onWillDismiss().then(o=>{"close"!==o.data.data&&("pagoqr"===o.data.data?this.pagarconqr(o.data.data,o.data.data,"PAGAR"):this.pagar2qr())}),yield n.present()}this.pagar2(e,"TRANSFERENCIA")})}pagar2(e,n){return(0,a.mG)(this,void 0,void 0,function*(){const o=yield this.modalController.create({component:m.E,animated:!0,componentProps:{moneda:this.moneda,title:"Ingrese monto",botonn:n,botonn2:n,validarsaldo:"si"},presentingElement:yield this.modalController.getTop(),cssClass:"modal-fullscreen"});return o.onWillDismiss().then(i=>{"close"!==i.data.data&&this.pagarconqr(i.data.data,e,n)}),yield o.present()})}pagar2qr(){return(0,a.mG)(this,void 0,void 0,function*(){const e=yield this.modalController.create({component:u.u,animated:!0,componentProps:{moneda:this.moneda,title:"PAGAR",monto:-1e3,tipo:"pagoqr"},presentingElement:yield this.modalController.getTop(),cssClass:"modal-fullscreen"});return e.onWillDismiss().then(n=>{}),yield e.present()})}pagarconqr(e,n,o){return(0,a.mG)(this,void 0,void 0,function*(){const i=yield this.modalController.create({component:u.u,animated:!0,componentProps:{moneda:this.moneda,title:o,monto:e,tipo:n},presentingElement:yield this.modalController.getTop(),cssClass:"modal-fullscreen"});return i.onWillDismiss().then(c=>{}),yield i.present()})}}return s.\u0275fac=function(e){return new(e||s)(t.Y36(v.F0),t.Y36(w.$),t.Y36(l.Br),t.Y36(A.b),t.Y36(f.sK),t.Y36(l.IN))},s.\u0275cmp=t.Xpm({type:s,selectors:[["app-billetera2-list"]],decls:12,vars:3,consts:[["color","primary"],["slot","start"],["defaultHref","BilleteraListPage"],["size","small"],["collapse","true","slot","end"],["alt","logo","id","header_logo","height","33",3,"src"],[1,"user-profile-content"],[1,"user-photos-section"],[1,"categories-list"],["class","category-item travel-category","size","6",4,"ngFor","ngForOf"],["size","6",1,"category-item","travel-category"],["animation","spinner",1,"category-cover",3,"display","src","alt","click"],[3,"ratio"],[1,"category-anchor"],[1,"category-title"]],template:function(e,n){1&e&&(t.TgZ(0,"ion-header"),t.TgZ(1,"ion-toolbar",0),t.TgZ(2,"ion-buttons",1),t._UZ(3,"ion-back-button",2),t.qZA(),t.TgZ(4,"ion-title",3),t._uU(5),t.qZA(),t.TgZ(6,"ion-buttons",4),t._UZ(7,"img",5),t.qZA(),t.qZA(),t.qZA(),t.TgZ(8,"ion-content",6),t.TgZ(9,"div",7),t.TgZ(10,"ion-row",8),t.YNc(11,F,6,6,"ion-col",9),t.qZA(),t.qZA(),t.qZA()),2&e&&(t.xp6(5),t.hij(" TotalPay ",n.tituloxx," "),t.xp6(2),t.Q6J("src",n.apifoto+n.logo1,t.LSH),t.xp6(4),t.Q6J("ngForOf",n.itemsList))},directives:[l.Gu,l.sr,l.Sm,l.oU,l.cs,l.wd,l.W2,l.Nd,C.sg,l.wI,E.U,Z.m],styles:['.plt-mobile.md[_nghost-%COMP%]   .user-details-section[_ngcontent-%COMP%]   .user-image-wrapper[_ngcontent-%COMP%], .plt-mobile.md   [_nghost-%COMP%]   .user-details-section[_ngcontent-%COMP%]   .user-image-wrapper[_ngcontent-%COMP%]{max-width:28%}.plt-mobile.ios[_nghost-%COMP%]   .user-details-section[_ngcontent-%COMP%]   .user-image-wrapper[_ngcontent-%COMP%], .plt-mobile.ios   [_nghost-%COMP%]   .user-details-section[_ngcontent-%COMP%]   .user-image-wrapper[_ngcontent-%COMP%]{max-width:30%}[_nghost-%COMP%]{--page-margin: var(--app-narrow-margin);--page-border-radius: var(--app-fair-radius);--page-actions-padding: 5px;--page-friends-gutter: calc(var(--page-margin) / 2);--page-pictures-gutter: calc(var(--page-margin) / 2)}.user-details-section[_ngcontent-%COMP%]{--ion-grid-column-padding: 0px;margin:var(--page-margin)}.user-details-section[_ngcontent-%COMP%]   .user-image-wrapper[_ngcontent-%COMP%]{max-width:26%}.user-details-section[_ngcontent-%COMP%]   .user-info-wrapper[_ngcontent-%COMP%]{padding-left:var(--page-margin);display:flex;flex-direction:column;justify-content:space-between;flex-wrap:nowrap}.user-details-section[_ngcontent-%COMP%]   .user-info-wrapper[_ngcontent-%COMP%]   .user-data-row[_ngcontent-%COMP%]{padding-bottom:var(--page-margin);flex-wrap:nowrap;justify-content:space-between}.user-details-section[_ngcontent-%COMP%]   .user-info-wrapper[_ngcontent-%COMP%]   .user-data-row[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%]{margin:0 0 5px;font-size:20px;letter-spacing:.5px}.user-details-section[_ngcontent-%COMP%]   .user-info-wrapper[_ngcontent-%COMP%]   .user-data-row[_ngcontent-%COMP%]   .user-title[_ngcontent-%COMP%]{margin:0;color:var(--ion-color-medium);font-size:16px}.user-details-section[_ngcontent-%COMP%]   .user-info-wrapper[_ngcontent-%COMP%]   .user-data-row[_ngcontent-%COMP%]   .membership-col[_ngcontent-%COMP%]{padding-left:var(--page-margin);flex-grow:0}.user-details-section[_ngcontent-%COMP%]   .user-info-wrapper[_ngcontent-%COMP%]   .user-data-row[_ngcontent-%COMP%]   .user-membership[_ngcontent-%COMP%]{display:block;background-color:var(--ion-color-secondary);color:var(--ion-color-lightest);border-radius:var(--app-narrow-radius);padding:4px 8px;text-align:center;font-weight:500;font-size:14px}.user-details-section[_ngcontent-%COMP%]   .user-info-wrapper[_ngcontent-%COMP%]   .actions-row[_ngcontent-%COMP%]{--ion-grid-columns: 10;--ion-grid-column-padding: var(--page-actions-padding);justify-content:space-between;flex-wrap:nowrap;margin-left:calc(var(--page-actions-padding) * -1);margin-right:calc(var(--page-actions-padding) * -1)}.user-details-section[_ngcontent-%COMP%]   .user-info-wrapper[_ngcontent-%COMP%]   .actions-row[_ngcontent-%COMP%]   .main-actions[_ngcontent-%COMP%]{flex-grow:0;padding-top:0;padding-bottom:0;margin-left:calc(var(--page-actions-padding) * -1);margin-right:calc(var(--page-actions-padding) * -1);display:flex}.user-details-section[_ngcontent-%COMP%]   .user-info-wrapper[_ngcontent-%COMP%]   .actions-row[_ngcontent-%COMP%]   .main-actions[_ngcontent-%COMP%]   .call-to-action-btn[_ngcontent-%COMP%]{padding:0px var(--page-actions-padding);margin:0}.user-details-section[_ngcontent-%COMP%]   .user-info-wrapper[_ngcontent-%COMP%]   .actions-row[_ngcontent-%COMP%]   .secondary-actions[_ngcontent-%COMP%]{flex-grow:0;padding-top:0;padding-bottom:0}.user-details-section[_ngcontent-%COMP%]   .user-info-wrapper[_ngcontent-%COMP%]   .actions-row[_ngcontent-%COMP%]   .secondary-actions[_ngcontent-%COMP%]   .more-btn[_ngcontent-%COMP%]{--padding-start: 4px;--padding-end: 4px;margin:0}.user-stats-section[_ngcontent-%COMP%]{--ion-grid-column-padding: 0px;margin:calc(var(--page-margin) * 2) var(--page-margin) var(--page-margin);padding-bottom:var(--page-margin);border-bottom:1px solid var(--ion-color-light-shade)}.user-stats-section[_ngcontent-%COMP%]   .user-stats-wrapper[_ngcontent-%COMP%]{text-align:center}.user-stats-section[_ngcontent-%COMP%]   .user-stats-wrapper[_ngcontent-%COMP%]   .stat-value[_ngcontent-%COMP%]{display:block;padding-bottom:5px;color:var(--ion-color-dark-shade);font-weight:500;font-size:18px}.user-stats-section[_ngcontent-%COMP%]   .user-stats-wrapper[_ngcontent-%COMP%]   .stat-name[_ngcontent-%COMP%]{font-size:16px;color:var(--ion-color-medium)}.details-section-title[_ngcontent-%COMP%]{font-size:18px;font-weight:500;color:var(--ion-color-dark-tint);margin:0px 0px var(--page-margin)}.user-about-section[_ngcontent-%COMP%]{margin:calc(var(--page-margin) * 2) var(--page-margin) var(--page-margin);padding-bottom:var(--page-margin);border-bottom:1px solid var(--ion-color-light-shade)}.user-about-section[_ngcontent-%COMP%]   .user-description[_ngcontent-%COMP%]{color:var(--ion-color-dark-shade);text-align:justify;margin:var(--page-margin) 0px;font-size:14px;line-height:1.3}.user-friends-section[_ngcontent-%COMP%]{margin:calc(var(--page-margin) * 2) var(--page-margin) var(--page-margin);padding-bottom:var(--page-margin);border-bottom:1px solid var(--ion-color-light-shade)}.user-friends-section[_ngcontent-%COMP%]   .heading-row[_ngcontent-%COMP%]{margin-bottom:var(--page-margin);justify-content:space-between;align-items:center}.user-friends-section[_ngcontent-%COMP%]   .heading-row[_ngcontent-%COMP%]   .details-section-title[_ngcontent-%COMP%]{margin:0}.user-friends-section[_ngcontent-%COMP%]   .heading-row[_ngcontent-%COMP%]   .heading-call-to-action[_ngcontent-%COMP%]{padding:calc(var(--page-margin) / 2) calc(var(--page-margin) / 4);text-decoration:none;color:var(--ion-color-secondary)}.user-friends-section[_ngcontent-%COMP%]   ion-row.item[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%]{background-color:#708090;box-shadow:inset 0 0 0 1px red}.user-friends-section[_ngcontent-%COMP%]   .friends-row[_ngcontent-%COMP%]{--ion-grid-columns: 7;--ion-grid-column-padding: auto;text-align:center;align-items:center;justify-content:center;flex-wrap:nowrap;overflow-x:scroll;will-change:scroll-position;-ms-overflow-style:none;overflow:-moz-scrollbars-none;scrollbar-width:none}.user-friends-section[_ngcontent-%COMP%]   .friends-row[_ngcontent-%COMP%]::-webkit-scrollbar{display:none}.user-friends-section[_ngcontent-%COMP%]   .friends-row[_ngcontent-%COMP%]:before, .user-friends-section[_ngcontent-%COMP%]   .friends-row[_ngcontent-%COMP%]:after{content:"";flex:0 0 calc(var(--page-margin) - var(--page-friends-gutter))}.user-friends-section[_ngcontent-%COMP%]   .friends-row[_ngcontent-%COMP%]   .friend-item[_ngcontent-%COMP%]{padding:0px var(--page-friends-gutter)}.user-friends-section[_ngcontent-%COMP%]   .friends-row[_ngcontent-%COMP%]   .friend-item[_ngcontent-%COMP%]   .friend-name[_ngcontent-%COMP%]{display:block;text-align:center;margin:var(--page-margin) 0px;font-size:14px}.user-photos-section[_ngcontent-%COMP%]{margin:calc(var(--page-margin) * 2) var(--page-margin) var(--page-margin);padding-bottom:calc(var(--page-margin) * 2)}.user-photos-section[_ngcontent-%COMP%]   .heading-row[_ngcontent-%COMP%]{margin-bottom:var(--page-margin);justify-content:space-between;align-items:center}.user-photos-section[_ngcontent-%COMP%]   .heading-row[_ngcontent-%COMP%]   .details-section-title[_ngcontent-%COMP%]{margin:0}.user-photos-section[_ngcontent-%COMP%]   .heading-row[_ngcontent-%COMP%]   .heading-call-to-action[_ngcontent-%COMP%]{padding:calc(var(--page-margin) / 2) calc(var(--page-margin) / 4);text-decoration:none;color:var(--ion-color-secondary)}.user-photos-section[_ngcontent-%COMP%]   .pictures-row[_ngcontent-%COMP%]{--ion-grid-columns: 4;--ion-grid-column-padding: 0px;margin:0px calc(var(--page-pictures-gutter) * -1)}.user-photos-section[_ngcontent-%COMP%]   .pictures-row[_ngcontent-%COMP%]   .picture-item[_ngcontent-%COMP%]{padding:0px var(--page-pictures-gutter) calc(var(--page-pictures-gutter) * 2);cursor:pointer}  .language-alert{--select-alert-color: #000;--select-alert-background: #FFF;--select-alert-margin: 16px;--select-alert-color: var(--ion-color-lightest);--select-alert-background: var(--ion-color-primary);--select-alert-margin: var(--app-fair-margin)}  .language-alert .alert-head{padding-top:calc(var(--select-alert-margin) / 4 * 3);padding-bottom:calc(var(--select-alert-margin) / 4 * 3);-webkit-padding-start:var(--select-alert-margin);padding-inline-start:var(--select-alert-margin);-webkit-padding-end:var(--select-alert-margin);padding-inline-end:var(--select-alert-margin)}  .language-alert .alert-title{color:var(--select-alert-color)}  .language-alert .alert-head,   .language-alert .alert-message{background-color:var(--select-alert-background)}  .language-alert .alert-wrapper.sc-ion-alert-ios .alert-title{margin:0}  .language-alert .alert-wrapper.sc-ion-alert-md .alert-title{font-size:18px;font-weight:400}  .language-alert .alert-wrapper.sc-ion-alert-md .alert-button{--padding-top: 0;--padding-start: .9em;--padding-end: .9em;--padding-bottom: 0;height:2.1em;font-size:13px}  .language-alert .alert-message{display:none}app-image-shell.user-image[_ngcontent-%COMP%]{--image-shell-border-radius: var(--page-border-radius)}.user-name[_ngcontent-%COMP%] > app-text-shell[_ngcontent-%COMP%]{--text-shell-line-height: 20px;max-width:50%}.user-name[_ngcontent-%COMP%] > app-text-shell.text-loaded[_ngcontent-%COMP%]{max-width:unset}.user-title[_ngcontent-%COMP%] > app-text-shell[_ngcontent-%COMP%]{--text-shell-line-height: 16px;max-width:70%}.user-title[_ngcontent-%COMP%] > app-text-shell.text-loaded[_ngcontent-%COMP%]{max-width:unset}.user-membership[_ngcontent-%COMP%] > app-text-shell[_ngcontent-%COMP%]{--text-shell-line-color: rgba(var(--ion-color-secondary-rgb), .4);--text-shell-line-height: 14px;min-width:30px}.user-membership[_ngcontent-%COMP%] > app-text-shell.text-loaded[_ngcontent-%COMP%]{min-width:0px}.stat-value[_ngcontent-%COMP%] > app-text-shell[_ngcontent-%COMP%]{--text-shell-line-height: 18px;max-width:50%;margin:0 auto}.stat-value[_ngcontent-%COMP%] > app-text-shell.text-loaded[_ngcontent-%COMP%]{max-width:unset;margin:0;margin:initial}.user-description[_ngcontent-%COMP%] > app-text-shell[_ngcontent-%COMP%]{--text-shell-line-height: 14px}app-image-shell.friend-picture[_ngcontent-%COMP%]{--image-shell-border-radius: var(--page-border-radius)}.friend-name[_ngcontent-%COMP%] > app-text-shell[_ngcontent-%COMP%]{--text-shell-line-height: 14px}app-image-shell.user-photo-image[_ngcontent-%COMP%]{--image-shell-border-radius: var(--page-border-radius)}.categories-list[_ngcontent-%COMP%]{--ion-grid-column-padding: var(--page-categories-gutter);padding:calc(var(--page-categories-gutter) * 3);height:100%;align-content:flex-start;overflow:scroll;-ms-overflow-style:none;overflow:-moz-scrollbars-none;scrollbar-width:none}.categories-list[_ngcontent-%COMP%]::-webkit-scrollbar{display:none}.categories-list[_ngcontent-%COMP%]   .category-item[_ngcontent-%COMP%]   .category-anchor[_ngcontent-%COMP%]{height:100%;text-decoration:none;display:flex;justify-content:flex-start;align-items:flex-start}.categories-list[_ngcontent-%COMP%]   .category-item[_ngcontent-%COMP%]   .category-anchor[_ngcontent-%COMP%]   .category-title[_ngcontent-%COMP%]{margin:auto;text-transform:uppercase;font-weight:400;font-size:18px;letter-spacing:1px;padding:calc(var(--page-margin) / 4 * 3) var(--page-margin);color:var(--ion-color-lightest);background-color:var(--page-category-background);border-radius:var(--app-fair-radius)}.categories-list[_ngcontent-%COMP%]   .travel-category[_ngcontent-%COMP%]{--page-category-background: #00AFFF;--page-category-background-rgb: 0,175,255}.categories-list[_ngcontent-%COMP%]   .fashion-category[_ngcontent-%COMP%]{--page-category-background: #cb328f;--page-category-background-rgb: 203,50,143}.categories-list[_ngcontent-%COMP%]   .food-category[_ngcontent-%COMP%]{--page-category-background: #ebbb00;--page-category-background-rgb: 235,187,0}.categories-list[_ngcontent-%COMP%]   .deals-category[_ngcontent-%COMP%]{--page-category-background: #70df70;--page-category-background-rgb: 112,223,112}.categories-list[_ngcontent-%COMP%]   .real-estate-category[_ngcontent-%COMP%]{--page-category-background: #d9453a;--page-category-background-rgb: 217,69,58}app-image-shell.category-cover[_ngcontent-%COMP%]{--image-shell-loading-background: rgba(var(--page-category-background-rgb), .25);--image-shell-spinner-color: var(--ion-color-lightest)}@media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (-webkit-min-device-pixel-ratio: 2) and (device-aspect-ratio: 2/3){.categories-list[_ngcontent-%COMP%]   .category-item[_ngcontent-%COMP%]   .category-anchor[_ngcontent-%COMP%]   .category-title[_ngcontent-%COMP%]{font-size:16px}}@media only screen and (min-device-width: 375px) and (max-device-width: 667px) and (-webkit-min-device-pixel-ratio: 2){.categories-list[_ngcontent-%COMP%]   .category-item[_ngcontent-%COMP%]   .category-anchor[_ngcontent-%COMP%]   .category-title[_ngcontent-%COMP%]{font-size:20px;padding:var(--page-margin) calc(var(--page-margin) * 3 / 2)}}@media only screen and (min-device-width: 375px) and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 3){.categories-list[_ngcontent-%COMP%]   .category-item[_ngcontent-%COMP%]   .category-anchor[_ngcontent-%COMP%]   .category-title[_ngcontent-%COMP%]{font-size:20px;padding:var(--page-margin) calc(var(--page-margin) * 3 / 2)}}@media only screen and (min-device-width: 414px) and (max-device-width: 736px) and (-webkit-min-device-pixel-ratio: 3){.categories-list[_ngcontent-%COMP%]   .category-item[_ngcontent-%COMP%]   .category-anchor[_ngcontent-%COMP%]   .category-title[_ngcontent-%COMP%]{font-size:20px;padding:var(--page-margin) calc(var(--page-margin) * 3 / 2)}}']}),s})(),B=(()=>{class s{}return s.\u0275fac=function(e){return new(e||s)},s.\u0275mod=t.oAB({type:s}),s.\u0275inj=t.cJS({imports:[[C.ez,p.u5,_.W,O.K,x.d,l.Pc,P.K,p.UX,M.g,y.D,b.X,v.Bz.forChild([{path:"",component:L}]),f.aw.forChild()]]}),s})()}}]);