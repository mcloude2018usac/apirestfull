function _defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{pyxn:function(e,t,n){"use strict";n.r(t),n.d(t,"Billetera2ListPageModuleNgFactory",(function(){return Z}));var r=n("8Y7J"),a=function e(){_classCallCheck(this,e)},o=n("gIFq"),i=n("lUNt"),s=n("7YSU"),l=n("3KlM"),c=n("Ux8H"),u=n("OEUh"),g=n("pMnS"),p=n("MKJQ"),d=n("sZkV"),m=n("iInd"),h=n("SVse"),b=n("M4wD"),f=n("B7gC"),v=n("6LEC"),C=n("2gss"),x=n("mrSG"),O=n("s7LF"),P=n("ZtEv"),w=n("IKpp"),M=n("Gs+c"),_=n("fc4l"),y=n("lWBS"),k=n("BW71"),L=n("DRn5"),R=function(){function e(t,n,r,a,o,i){_classCallCheck(this,e),this.router=t,this.authenticationService=n,this.alertController=r,this.lockscreenService=a,this.translateService=o,this.modalController=i,this.picture="../../../../assets/sample-images/scan1.svg",this.picture2="../../../../assets/sample-images/scan2.svg",this.picture3="../../../../assets/sample-images/comprarsaldo.png",this.picture4="../../../../assets/sample-images/scan3.svg",this.themeColor="dark",this.isCorrect=!1,this.enableTouchIdFaceId=!0,this.userinfo=[],this.reportes="../../../../assets/sample-images/reportes.svg",this.mycuenta="../../../../assets/sample-images/mycuenta.svg",this.myservicio="../../../../assets/sample-images/myservicio3.svg",this.mytrasferencia="../../../../assets/sample-images/mytransaferencia2.svg",this.mytiendas="../../../../assets/sample-images/mytienda.svg",this.mymoney="../../../../assets/sample-images/money.svg",this.mytranspote="../../../../assets/sample-images/mytranspote.svg",this.apifoto=this.authenticationService.getapifoto(),this.radioColorForm=new O.g({selected_color:new O.e("#fc9961")})}return _createClass(e,[{key:"ngOnInit",value:function(){this.userinfo=this.authenticationService.getcopiauser(),this.logo1=this.authenticationService.dalogo1(this.userinfo),this.moneda=this.userinfo[0].idempresa.moneda,this.role=this.userinfo[0].role,this.tituloxx=this.router.getCurrentNavigation().extras.state.title,this.itemsList=this.router.getCurrentNavigation().extras.state.opciones}},{key:"operacion",value:function(e){return Object(x.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:t.t0=e,t.next="vendesaldo"===t.t0?3:"comprasaldo"===t.t0?5:"transferir"===t.t0?7:"mistransferencias"===t.t0?9:"cobrarpasaje"===t.t0?11:"Cobros del dia bus"===t.t0?13:14;break;case 3:return this.recargar("vendersaldo","VENDER SALDO","cobrar","venta"),t.abrupt("break",14);case 5:return this.pin22("comprasaldo"),t.abrupt("break",14);case 7:return this.comopagar2("trasferencia"),t.abrupt("break",14);case 9:return this.mytransferencia(),t.abrupt("break",14);case 11:return this.cobrobus(),t.abrupt("break",14);case 13:this.pivote(e);case 14:case"end":return t.stop()}}),t,this)})))}},{key:"colectar",value:function(){return Object(x.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))}},{key:"mytienda",value:function(){return Object(x.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.router.navigate(["app/ProvidesPage"],{state:{variables:"",user:null,moneda:this.moneda,titulo:"Tiendas"}});case 1:case"end":return e.stop()}}),e,this)})))}},{key:"pivote",value:function(e){return Object(x.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.router.navigate(["PivoteListPage"],{state:{variables:"",user:null,moneda:this.moneda,title:e}});case 1:case"end":return t.stop()}}),t,this)})))}},{key:"mycuentas",value:function(){return Object(x.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.router.navigate(["contact-card2"],{state:{variables:"",user:null,moneda:this.moneda,titulo:"My cuenta"}});case 1:case"end":return e.stop()}}),e,this)})))}},{key:"recargar",value:function(e,t,n,r){return Object(x.a)(this,void 0,void 0,regeneratorRuntime.mark((function a(){var o=this;return regeneratorRuntime.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:this.lockscreenService.verify({passcode:this.userinfo[0].codpersonal,enableTouchIdFaceId:this.enableTouchIdFaceId}).then((function(a){"dismiss"===a.data.type?o.vende(e,t,n,r):o.isCorrect=!1}));case 1:case"end":return a.stop()}}),a,this)})))}},{key:"vende",value:function(e,t,n,r){return Object(x.a)(this,void 0,void 0,regeneratorRuntime.mark((function a(){var o,i=this;return regeneratorRuntime.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.t0=this.modalController,a.t1=w.a,a.t2=!0,a.t3={moneda:this.moneda,title:"Ingrese monto ",validasaldo:"no",tipo2:r,botonn:t,botonn2:n,tipo:e},a.next=6,this.modalController.getTop();case 6:return a.t4=a.sent,a.t5={component:a.t1,animated:a.t2,componentProps:a.t3,presentingElement:a.t4,cssClass:"modal-fullscreen"},a.next=10,a.t0.create.call(a.t0,a.t5);case 10:return(o=a.sent).onWillDismiss().then((function(n){"close"!==n.data.data&&i.venderconqr(n.data.data,e,t,r)})),a.next=14,o.present();case 14:return a.abrupt("return",a.sent);case 15:case"end":return a.stop()}}),a,this)})))}},{key:"venderconqr",value:function(e,t,n,r){return Object(x.a)(this,void 0,void 0,regeneratorRuntime.mark((function a(){var o,i=this;return regeneratorRuntime.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.t0=this.modalController,a.t1=y.a,a.t2=!0,a.t3={moneda:this.moneda,title:n,tipo2:r,tipo:t,monto:e},a.next=6,this.modalController.getTop();case 6:return a.t4=a.sent,a.t5={component:a.t1,animated:a.t2,componentProps:a.t3,presentingElement:a.t4,cssClass:"modal-fullscreen"},a.next=10,a.t0.create.call(a.t0,a.t5);case 10:return(o=a.sent).onWillDismiss().then((function(e){"close"!==e.data.data&&i.authenticationService.presentAlert(e.data.data,"Gracias","")})),a.next=14,o.present();case 14:return a.abrupt("return",a.sent);case 15:case"end":return a.stop()}}),a,this)})))}},{key:"myservicios",value:function(){return Object(x.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))}},{key:"mytransferencia",value:function(){return Object(x.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.router.navigate(["tokensListPage"],{state:{variables:"",user:null,moneda:this.moneda,titulo:"Mis Transferencias"}});case 1:case"end":return e.stop()}}),e,this)})))}},{key:"cobrobus",value:function(){return Object(x.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.router.navigate(["tokens2ListPage"],{state:{variables:"",user:null,moneda:this.moneda,titulo:"Cobro pasaje"}});case 1:case"end":return e.stop()}}),e,this)})))}},{key:"cobrarconqr",value:function(e,t){return Object(x.a)(this,void 0,void 0,regeneratorRuntime.mark((function n(){var r,a=this;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.t0=this.modalController,n.t1=_.a,n.t2=!0,n.t3={moneda:this.moneda,title:"COBRAR",monto:e,tipo:t},n.next=6,this.modalController.getTop();case 6:return n.t4=n.sent,n.t5={component:n.t1,animated:n.t2,componentProps:n.t3,presentingElement:n.t4,cssClass:"modal-fullscreen"},n.next=10,n.t0.create.call(n.t0,n.t5);case 10:return(r=n.sent).onWillDismiss().then((function(e){"close"!==e.data.data&&a.authenticationService.presentAlert(e.data.data,"Gracias","Por tu compra")})),n.next=14,r.present();case 14:return n.abrupt("return",n.sent);case 15:case"end":return n.stop()}}),n,this)})))}},{key:"pin",value:function(e){return Object(x.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.comocobrar2(e);case 1:case"end":return t.stop()}}),t,this)})))}},{key:"comocobrar2",value:function(e){return Object(x.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.cobrar(e);case 1:case"end":return t.stop()}}),t,this)})))}},{key:"cobrar",value:function(e){return Object(x.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var n,r=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=this.modalController,t.t1=w.a,t.t2=!0,t.t3={moneda:this.moneda,title:"Ingrese monto ",botonn:"COBRAR",botonn2:"cobro",validarsaldo:"no",tipo:e},t.next=6,this.modalController.getTop();case 6:return t.t4=t.sent,t.t5={component:t.t1,animated:t.t2,componentProps:t.t3,presentingElement:t.t4,cssClass:"modal-fullscreen"},t.next=10,t.t0.create.call(t.t0,t.t5);case 10:return(n=t.sent).onWillDismiss().then((function(t){"close"!==t.data.data&&r.cobrarconqr(t.data.data,e)})),t.next=14,n.present();case 14:return t.abrupt("return",t.sent);case 15:case"end":return t.stop()}}),t,this)})))}},{key:"escanearqr",value:function(e,t,n){return Object(x.a)(this,void 0,void 0,regeneratorRuntime.mark((function r(){var a;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.t0=this.modalController,r.t1=k.a,r.t2=!0,r.t3={moneda:this.moneda,title:n,monto:e,tipo:t},r.next=6,this.modalController.getTop();case 6:return r.t4=r.sent,r.t5={component:r.t1,animated:r.t2,componentProps:r.t3,presentingElement:r.t4,cssClass:"modal-fullscreen"},r.next=10,r.t0.create.call(r.t0,r.t5);case 10:return(a=r.sent).onWillDismiss().then((function(e){})),r.next=14,a.present();case 14:return r.abrupt("return",r.sent);case 15:case"end":return r.stop()}}),r,this)})))}},{key:"pin22",value:function(e){return Object(x.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.escanearqr(e,e,"Identificarse");case 1:case"end":return t.stop()}}),t,this)})))}},{key:"comprarsaldo",value:function(e){return Object(x.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))}},{key:"pin2",value:function(e){return Object(x.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var n=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.lockscreenService.verify({passcode:this.userinfo[0].codpersonal,enableTouchIdFaceId:this.enableTouchIdFaceId}).then((function(t){"dismiss"===t.data.type?n.comopagar2(e):n.isCorrect=!1}));case 1:case"end":return t.stop()}}),t,this)})))}},{key:"comopagar2",value:function(e){return Object(x.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var n,r=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("trasferencia"===e){t.next=16;break}return t.t0=this.modalController,t.t1=M.a,t.t2=!0,t.t3={moneda:this.moneda,metodopago:e,title:"Seleccione opci\xf3n",botonn:"PAGAR"},t.next=7,this.modalController.getTop();case 7:return t.t4=t.sent,t.t5={component:t.t1,animated:t.t2,componentProps:t.t3,presentingElement:t.t4,cssClass:"modal-fullscreen"},t.next=11,t.t0.create.call(t.t0,t.t5);case 11:return(n=t.sent).onWillDismiss().then((function(e){"close"!==e.data.data&&("pagoqr"===e.data.data?r.pagarconqr(e.data.data,e.data.data,"PAGAR"):r.pagar2qr())})),t.next=15,n.present();case 15:return t.abrupt("return",t.sent);case 16:this.pagar2(e,"TRANSFERENCIA");case 17:case"end":return t.stop()}}),t,this)})))}},{key:"pagar2",value:function(e,t){return Object(x.a)(this,void 0,void 0,regeneratorRuntime.mark((function n(){var r,a=this;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.t0=this.modalController,n.t1=w.a,n.t2=!0,n.t3={moneda:this.moneda,title:"Ingrese monto",botonn:t,botonn2:t,validarsaldo:"si"},n.next=6,this.modalController.getTop();case 6:return n.t4=n.sent,n.t5={component:n.t1,animated:n.t2,componentProps:n.t3,presentingElement:n.t4,cssClass:"modal-fullscreen"},n.next=10,n.t0.create.call(n.t0,n.t5);case 10:return(r=n.sent).onWillDismiss().then((function(n){"close"!==n.data.data&&a.pagarconqr(n.data.data,e,t)})),n.next=14,r.present();case 14:return n.abrupt("return",n.sent);case 15:case"end":return n.stop()}}),n,this)})))}},{key:"pagar2qr",value:function(){return Object(x.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=this.modalController,e.t1=k.a,e.t2=!0,e.t3={moneda:this.moneda,title:"PAGAR",monto:-1e3,tipo:"pagoqr"},e.next=6,this.modalController.getTop();case 6:return e.t4=e.sent,e.t5={component:e.t1,animated:e.t2,componentProps:e.t3,presentingElement:e.t4,cssClass:"modal-fullscreen"},e.next=10,e.t0.create.call(e.t0,e.t5);case 10:return(t=e.sent).onWillDismiss().then((function(e){})),e.next=14,t.present();case 14:return e.abrupt("return",e.sent);case 15:case"end":return e.stop()}}),e,this)})))}},{key:"pagarconqr",value:function(e,t,n){return Object(x.a)(this,void 0,void 0,regeneratorRuntime.mark((function r(){var a;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.t0=this.modalController,r.t1=k.a,r.t2=!0,r.t3={moneda:this.moneda,title:n,monto:e,tipo:t},r.next=6,this.modalController.getTop();case 6:return r.t4=r.sent,r.t5={component:r.t1,animated:r.t2,componentProps:r.t3,presentingElement:r.t4,cssClass:"modal-fullscreen"},r.next=10,r.t0.create.call(r.t0,r.t5);case 10:return(a=r.sent).onWillDismiss().then((function(e){})),r.next=14,a.present();case 14:return r.abrupt("return",r.sent);case 15:case"end":return r.stop()}}),r,this)})))}}]),e}(),j=n("TSSN"),z=r.wb({encapsulation:0,styles:[['.plt-mobile.md[_nghost-%COMP%]   .user-details-section[_ngcontent-%COMP%]   .user-image-wrapper[_ngcontent-%COMP%], .plt-mobile.md   [_nghost-%COMP%]   .user-details-section[_ngcontent-%COMP%]   .user-image-wrapper[_ngcontent-%COMP%]{max-width:28%}.plt-mobile.ios[_nghost-%COMP%]   .user-details-section[_ngcontent-%COMP%]   .user-image-wrapper[_ngcontent-%COMP%], .plt-mobile.ios   [_nghost-%COMP%]   .user-details-section[_ngcontent-%COMP%]   .user-image-wrapper[_ngcontent-%COMP%]{max-width:30%}[_nghost-%COMP%]{--page-margin:var(--app-narrow-margin);--page-border-radius:var(--app-fair-radius);--page-actions-padding:5px;--page-friends-gutter:calc(var(--page-margin)/2);--page-pictures-gutter:calc(var(--page-margin)/2)}.user-details-section[_ngcontent-%COMP%]{--ion-grid-column-padding:0px;margin:var(--page-margin)}.user-details-section[_ngcontent-%COMP%]   .user-image-wrapper[_ngcontent-%COMP%]{max-width:26%}.user-details-section[_ngcontent-%COMP%]   .user-info-wrapper[_ngcontent-%COMP%]{padding-left:var(--page-margin);display:flex;flex-direction:column;justify-content:space-between;flex-wrap:nowrap}.user-details-section[_ngcontent-%COMP%]   .user-info-wrapper[_ngcontent-%COMP%]   .user-data-row[_ngcontent-%COMP%]{padding-bottom:var(--page-margin);flex-wrap:nowrap;justify-content:space-between}.user-details-section[_ngcontent-%COMP%]   .user-info-wrapper[_ngcontent-%COMP%]   .user-data-row[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%]{margin:0 0 5px;font-size:20px;letter-spacing:.5px}.user-details-section[_ngcontent-%COMP%]   .user-info-wrapper[_ngcontent-%COMP%]   .user-data-row[_ngcontent-%COMP%]   .user-title[_ngcontent-%COMP%]{margin:0;color:var(--ion-color-medium);font-size:16px}.user-details-section[_ngcontent-%COMP%]   .user-info-wrapper[_ngcontent-%COMP%]   .user-data-row[_ngcontent-%COMP%]   .membership-col[_ngcontent-%COMP%]{padding-left:var(--page-margin);flex-grow:0}.user-details-section[_ngcontent-%COMP%]   .user-info-wrapper[_ngcontent-%COMP%]   .user-data-row[_ngcontent-%COMP%]   .user-membership[_ngcontent-%COMP%]{display:block;background-color:var(--ion-color-secondary);color:var(--ion-color-lightest);border-radius:var(--app-narrow-radius);padding:4px 8px;text-align:center;font-weight:500;font-size:14px}.user-details-section[_ngcontent-%COMP%]   .user-info-wrapper[_ngcontent-%COMP%]   .actions-row[_ngcontent-%COMP%]{--ion-grid-columns:10;--ion-grid-column-padding:var(--page-actions-padding);justify-content:space-between;flex-wrap:nowrap;margin-left:calc(var(--page-actions-padding)*-1);margin-right:calc(var(--page-actions-padding)*-1)}.user-details-section[_ngcontent-%COMP%]   .user-info-wrapper[_ngcontent-%COMP%]   .actions-row[_ngcontent-%COMP%]   .main-actions[_ngcontent-%COMP%]{flex-grow:0;padding-top:0;padding-bottom:0;margin-left:calc(var(--page-actions-padding)*-1);margin-right:calc(var(--page-actions-padding)*-1);display:flex}.user-details-section[_ngcontent-%COMP%]   .user-info-wrapper[_ngcontent-%COMP%]   .actions-row[_ngcontent-%COMP%]   .main-actions[_ngcontent-%COMP%]   .call-to-action-btn[_ngcontent-%COMP%]{padding:0 var(--page-actions-padding);margin:0}.user-details-section[_ngcontent-%COMP%]   .user-info-wrapper[_ngcontent-%COMP%]   .actions-row[_ngcontent-%COMP%]   .secondary-actions[_ngcontent-%COMP%]{flex-grow:0;padding-top:0;padding-bottom:0}.user-details-section[_ngcontent-%COMP%]   .user-info-wrapper[_ngcontent-%COMP%]   .actions-row[_ngcontent-%COMP%]   .secondary-actions[_ngcontent-%COMP%]   .more-btn[_ngcontent-%COMP%]{--padding-start:4px;--padding-end:4px;margin:0}.user-stats-section[_ngcontent-%COMP%]{--ion-grid-column-padding:0px;margin:calc(var(--page-margin)*2) var(--page-margin) var(--page-margin);padding-bottom:var(--page-margin);border-bottom:1px solid var(--ion-color-light-shade)}.user-stats-section[_ngcontent-%COMP%]   .user-stats-wrapper[_ngcontent-%COMP%]{text-align:center}.user-stats-section[_ngcontent-%COMP%]   .user-stats-wrapper[_ngcontent-%COMP%]   .stat-value[_ngcontent-%COMP%]{display:block;padding-bottom:5px;color:var(--ion-color-dark-shade);font-weight:500;font-size:18px}.user-stats-section[_ngcontent-%COMP%]   .user-stats-wrapper[_ngcontent-%COMP%]   .stat-name[_ngcontent-%COMP%]{font-size:16px;color:var(--ion-color-medium)}.details-section-title[_ngcontent-%COMP%]{font-size:18px;font-weight:500;color:var(--ion-color-dark-tint);margin:0 0 var(--page-margin)}.user-about-section[_ngcontent-%COMP%]{margin:calc(var(--page-margin)*2) var(--page-margin) var(--page-margin);padding-bottom:var(--page-margin);border-bottom:1px solid var(--ion-color-light-shade)}.user-about-section[_ngcontent-%COMP%]   .user-description[_ngcontent-%COMP%]{color:var(--ion-color-dark-shade);text-align:justify;margin:var(--page-margin) 0;font-size:14px;line-height:1.3}.user-friends-section[_ngcontent-%COMP%]{margin:calc(var(--page-margin)*2) var(--page-margin) var(--page-margin);padding-bottom:var(--page-margin);border-bottom:1px solid var(--ion-color-light-shade)}.user-friends-section[_ngcontent-%COMP%]   .heading-row[_ngcontent-%COMP%]{margin-bottom:var(--page-margin);justify-content:space-between;align-items:center}.user-friends-section[_ngcontent-%COMP%]   .heading-row[_ngcontent-%COMP%]   .details-section-title[_ngcontent-%COMP%]{margin:0}.user-friends-section[_ngcontent-%COMP%]   .heading-row[_ngcontent-%COMP%]   .heading-call-to-action[_ngcontent-%COMP%]{padding:calc(var(--page-margin)/2) calc(var(--page-margin)/4);text-decoration:none;color:var(--ion-color-secondary)}.user-friends-section[_ngcontent-%COMP%]   ion-row.item[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%]{background-color:#708090;box-shadow:inset 0 0 0 1px red}.user-friends-section[_ngcontent-%COMP%]   .friends-row[_ngcontent-%COMP%]{--ion-grid-columns:7;--ion-grid-column-padding:auto;text-align:center;align-items:center;justify-content:center;flex-wrap:nowrap;overflow-x:scroll;will-change:scroll-position;-ms-overflow-style:none;overflow:-moz-scrollbars-none;scrollbar-width:none}.user-friends-section[_ngcontent-%COMP%]   .friends-row[_ngcontent-%COMP%]::-webkit-scrollbar{display:none}.user-friends-section[_ngcontent-%COMP%]   .friends-row[_ngcontent-%COMP%]:after, .user-friends-section[_ngcontent-%COMP%]   .friends-row[_ngcontent-%COMP%]:before{content:"";flex:0 0 calc(var(--page-margin) - var(--page-friends-gutter))}.user-friends-section[_ngcontent-%COMP%]   .friends-row[_ngcontent-%COMP%]   .friend-item[_ngcontent-%COMP%]{padding:0 var(--page-friends-gutter)}.user-friends-section[_ngcontent-%COMP%]   .friends-row[_ngcontent-%COMP%]   .friend-item[_ngcontent-%COMP%]   .friend-name[_ngcontent-%COMP%]{display:block;text-align:center;margin:var(--page-margin) 0;font-size:14px}.user-photos-section[_ngcontent-%COMP%]{margin:calc(var(--page-margin)*2) var(--page-margin) var(--page-margin);padding-bottom:calc(var(--page-margin)*2)}.user-photos-section[_ngcontent-%COMP%]   .heading-row[_ngcontent-%COMP%]{margin-bottom:var(--page-margin);justify-content:space-between;align-items:center}.user-photos-section[_ngcontent-%COMP%]   .heading-row[_ngcontent-%COMP%]   .details-section-title[_ngcontent-%COMP%]{margin:0}.user-photos-section[_ngcontent-%COMP%]   .heading-row[_ngcontent-%COMP%]   .heading-call-to-action[_ngcontent-%COMP%]{padding:calc(var(--page-margin)/2) calc(var(--page-margin)/4);text-decoration:none;color:var(--ion-color-secondary)}.user-photos-section[_ngcontent-%COMP%]   .pictures-row[_ngcontent-%COMP%]{--ion-grid-columns:4;--ion-grid-column-padding:0px;margin:0 calc(var(--page-pictures-gutter)*-1)}.user-photos-section[_ngcontent-%COMP%]   .pictures-row[_ngcontent-%COMP%]   .picture-item[_ngcontent-%COMP%]{padding:0 var(--page-pictures-gutter) calc(var(--page-pictures-gutter)*2)}  .language-alert{--select-alert-color:#000;--select-alert-background:#fff;--select-alert-margin:16px;--select-alert-color:var(--ion-color-lightest);--select-alert-background:var(--ion-color-primary);--select-alert-margin:var(--app-fair-margin)}  .language-alert .alert-head{padding-top:calc(var(--select-alert-margin)/4*3);padding-bottom:calc(var(--select-alert-margin)/4*3);-webkit-padding-start:var(--select-alert-margin);padding-inline-start:var(--select-alert-margin);-webkit-padding-end:var(--select-alert-margin);padding-inline-end:var(--select-alert-margin)}  .language-alert .alert-title{color:var(--select-alert-color)}  .language-alert .alert-head,   .language-alert .alert-message{background-color:var(--select-alert-background)}  .language-alert .alert-wrapper.sc-ion-alert-ios .alert-title{margin:0}  .language-alert .alert-wrapper.sc-ion-alert-md .alert-title{font-size:18px;font-weight:400}  .language-alert .alert-wrapper.sc-ion-alert-md .alert-button{--padding-top:0;--padding-start:0.9em;--padding-end:0.9em;--padding-bottom:0;height:2.1em;font-size:13px}  .language-alert .alert-message{display:none}app-image-shell.user-image[_ngcontent-%COMP%]{--image-shell-border-radius:var(--page-border-radius)}.user-name[_ngcontent-%COMP%] > app-text-shell[_ngcontent-%COMP%]{--text-shell-line-height:20px;max-width:50%}.user-name[_ngcontent-%COMP%] > app-text-shell.text-loaded[_ngcontent-%COMP%]{max-width:unset}.user-title[_ngcontent-%COMP%] > app-text-shell[_ngcontent-%COMP%]{--text-shell-line-height:16px;max-width:70%}.user-title[_ngcontent-%COMP%] > app-text-shell.text-loaded[_ngcontent-%COMP%]{max-width:unset}.user-membership[_ngcontent-%COMP%] > app-text-shell[_ngcontent-%COMP%]{--text-shell-line-color:rgba(var(--ion-color-secondary-rgb),0.4);--text-shell-line-height:14px;min-width:30px}.user-membership[_ngcontent-%COMP%] > app-text-shell.text-loaded[_ngcontent-%COMP%]{min-width:0}.stat-value[_ngcontent-%COMP%] > app-text-shell[_ngcontent-%COMP%]{--text-shell-line-height:18px;max-width:50%;margin:0 auto}.stat-value[_ngcontent-%COMP%] > app-text-shell.text-loaded[_ngcontent-%COMP%]{max-width:unset;margin:initial}.user-description[_ngcontent-%COMP%] > app-text-shell[_ngcontent-%COMP%]{--text-shell-line-height:14px}app-image-shell.friend-picture[_ngcontent-%COMP%]{--image-shell-border-radius:var(--page-border-radius)}.friend-name[_ngcontent-%COMP%] > app-text-shell[_ngcontent-%COMP%]{--text-shell-line-height:14px}app-image-shell.user-photo-image[_ngcontent-%COMP%]{--image-shell-border-radius:var(--page-border-radius)}']],data:{}});function I(e){return r.ac(0,[(e()(),r.yb(0,0,null,null,15,"ion-col",[["class","picture-item"],["size","2"]],null,null,null,p.tb,p.n)),r.xb(1,49152,null,0,d.u,[r.h,r.l,r.z],{size:[0,"size"]},null),(e()(),r.yb(2,0,null,0,13,"ion-card",[],null,[[null,"click"]],(function(e,t,n){var a=!0,o=e.component;return"click"===t&&(a=!1!==r.Nb(e,4).onClick()&&a),"click"===t&&(a=!1!==r.Nb(e,5).onClick(n)&&a),"click"===t&&(a=!1!==o.operacion(e.context.$implicit.operacion)&&a),a}),p.qb,p.g)),r.xb(3,49152,null,0,d.n,[r.h,r.l,r.z],null,null),r.xb(4,16384,null,0,m.n,[m.m,m.a,[8,null],r.E,r.l],null,null),r.xb(5,737280,null,0,d.Nb,[h.j,d.Hb,r.l,m.m,[2,m.n]],null,null),(e()(),r.yb(6,0,null,0,4,"app-aspect-ratio",[],[[4,"padding",null]],null,null,b.b,b.a)),r.xb(7,49152,null,0,f.a,[],{ratio:[0,"ratio"]},null),r.Qb(8,{w:0,h:1}),(e()(),r.yb(9,0,null,0,1,"app-image-shell",[["animation","spinner"],["class","picture-image"]],[[2,"img-loaded",null],[4,"backgroundImage",null],[1,"display",0]],null,null,v.b,v.a)),r.xb(10,49152,null,0,C.a,[r.B],{src:[0,"src"],alt:[1,"alt"]},null),(e()(),r.yb(11,0,null,0,4,"ion-card-header",[],null,null,null,p.nb,p.i)),r.xb(12,49152,null,0,d.p,[r.h,r.l,r.z],null,null),(e()(),r.yb(13,0,null,0,2,"ion-card-subtitle",[],null,null,null,p.ob,p.j)),r.xb(14,49152,null,0,d.q,[r.h,r.l,r.z],null,null),(e()(),r.Xb(15,0,["",""]))],(function(e,t){e(t,1,0,"2"),e(t,5,0);var n=e(t,8,0,3,2);e(t,7,0,n),e(t,10,0,t.context.$implicit.foto,t.context.$implicit.title)}),(function(e,t){e(t,6,0,r.Nb(t,7).ratioPadding),e(t,9,0,r.Nb(t,10).imageLoaded,r.Nb(t,10).backgroundImage,r.Nb(t,10).display),e(t,15,0,t.context.$implicit.title)}))}function T(e){return r.ac(0,[(e()(),r.yb(0,0,null,null,14,"ion-header",[],null,null,null,p.Ab,p.u)),r.xb(1,49152,null,0,d.C,[r.h,r.l,r.z],null,null),(e()(),r.yb(2,0,null,0,12,"ion-toolbar",[["color","primary"]],null,null,null,p.lc,p.fb)),r.xb(3,49152,null,0,d.Ab,[r.h,r.l,r.z],{color:[0,"color"]},null),(e()(),r.yb(4,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,p.lb,p.f)),r.xb(5,49152,null,0,d.m,[r.h,r.l,r.z],null,null),(e()(),r.yb(6,0,null,0,2,"ion-back-button",[["defaultHref","BilleteraListPage"]],null,[[null,"click"]],(function(e,t,n){var a=!0;return"click"===t&&(a=!1!==r.Nb(e,8).onClick(n)&&a),a}),p.ib,p.c)),r.xb(7,49152,null,0,d.h,[r.h,r.l,r.z],{defaultHref:[0,"defaultHref"]},null),r.xb(8,16384,null,0,d.i,[[2,d.gb],d.Hb,d.e],{defaultHref:[0,"defaultHref"]},null),(e()(),r.yb(9,0,null,0,2,"ion-title",[],null,null,null,p.jc,p.db)),r.xb(10,49152,null,0,d.yb,[r.h,r.l,r.z],null,null),(e()(),r.Xb(11,0,[" TotalPay "," "])),(e()(),r.yb(12,0,null,0,2,"ion-buttons",[["slot","end"]],null,null,null,p.lb,p.f)),r.xb(13,49152,null,0,d.m,[r.h,r.l,r.z],null,null),(e()(),r.yb(14,0,null,0,0,"img",[["alt","logo"],["height","33"],["id","header_logo"]],[[8,"src",4]],null,null,null,null)),(e()(),r.yb(15,0,null,null,6,"ion-content",[["class","user-profile-content"]],null,null,null,p.ub,p.o)),r.xb(16,49152,null,0,d.v,[r.h,r.l,r.z],null,null),(e()(),r.yb(17,0,null,0,4,"div",[["class","user-photos-section"]],null,null,null,null,null)),(e()(),r.yb(18,0,null,null,3,"ion-row",[["class","pictures-row"]],null,null,null,p.Tb,p.N)),r.xb(19,49152,null,0,d.hb,[r.h,r.l,r.z],null,null),(e()(),r.hb(16777216,null,0,1,null,I)),r.xb(21,278528,null,0,h.l,[r.P,r.M,r.s],{ngForOf:[0,"ngForOf"]},null)],(function(e,t){var n=t.component;e(t,3,0,"primary"),e(t,7,0,"BilleteraListPage"),e(t,8,0,"BilleteraListPage"),e(t,21,0,n.itemsList)}),(function(e,t){var n=t.component;e(t,11,0,n.tituloxx),e(t,14,0,n.apifoto+n.logo1)}))}var S=r.ub("app-billetera2-list",R,(function(e){return r.ac(0,[(e()(),r.yb(0,0,null,null,1,"app-billetera2-list",[],null,null,null,T,z)),r.xb(1,114688,null,0,R,[m.m,P.a,d.b,L.a,j.l,d.Gb],null,null)],(function(e,t){e(t,1,0)}),null)}),{},{},[]),E=n("IheW"),N=n("ZpN7"),q=n("Kt/9"),A=n("fozt"),F=n("7eCM"),D=n("JuzA"),W=n("KyMZ"),B=n("j1ZV"),G=n("FaL/"),H=n("xjce"),K=n("0rIg"),Z=r.vb(a,[],(function(e){return r.Kb([r.Lb(512,r.j,r.Z,[[8,[o.a,i.a,s.a,l.a,c.a,u.a,g.a,S]],[3,r.j],r.x]),r.Lb(4608,h.o,h.n,[r.u]),r.Lb(4608,O.w,O.w,[]),r.Lb(4608,d.c,d.c,[r.z,r.g]),r.Lb(4608,d.Gb,d.Gb,[d.c,r.j,r.r]),r.Lb(4608,d.Lb,d.Lb,[d.c,r.j,r.r]),r.Lb(4608,O.d,O.d,[]),r.Lb(4608,j.h,j.g,[]),r.Lb(4608,j.d,j.f,[]),r.Lb(4608,j.j,j.e,[]),r.Lb(4608,j.c,j.b,[]),r.Lb(4608,j.l,j.l,[j.m,j.h,j.d,j.j,j.c,j.n,j.p,j.o,j.a]),r.Lb(4608,E.i,E.o,[h.e,r.B,E.m]),r.Lb(4608,E.p,E.p,[E.i,E.n]),r.Lb(5120,E.a,(function(e){return[e]}),[E.p]),r.Lb(4608,E.l,E.l,[]),r.Lb(6144,E.j,null,[E.l]),r.Lb(4608,E.h,E.h,[E.j]),r.Lb(6144,E.b,null,[E.h]),r.Lb(4608,E.f,E.k,[E.b,r.r]),r.Lb(4608,E.c,E.c,[E.f]),r.Lb(5120,r.d,(function(e){return[N.b(e)]}),[q.a]),r.Lb(1073742336,h.c,h.c,[]),r.Lb(1073742336,O.v,O.v,[]),r.Lb(1073742336,O.j,O.j,[]),r.Lb(1073742336,d.Cb,d.Cb,[]),r.Lb(1073742336,A.a,A.a,[]),r.Lb(1073742336,F.a,F.a,[]),r.Lb(1073742336,O.s,O.s,[]),r.Lb(1073742336,D.a,D.a,[]),r.Lb(1073742336,j.i,j.i,[]),r.Lb(1073742336,W.a,W.a,[]),r.Lb(1073742336,E.e,E.e,[]),r.Lb(1073742336,E.d,E.d,[]),r.Lb(1073742336,N.a,N.a,[]),r.Lb(1073742336,B.a,B.a,[]),r.Lb(1073742336,G.a,G.a,[]),r.Lb(1073742336,H.a,H.a,[]),r.Lb(1073742336,K.a,K.a,[]),r.Lb(1073742336,m.p,m.p,[[2,m.u],[2,m.m]]),r.Lb(1073742336,a,a,[]),r.Lb(256,j.p,void 0,[]),r.Lb(256,j.n,void 0,[]),r.Lb(256,j.o,void 0,[]),r.Lb(256,j.a,void 0,[]),r.Lb(256,E.m,"XSRF-TOKEN",[]),r.Lb(256,E.n,"X-XSRF-TOKEN",[]),r.Lb(1024,m.k,(function(){return[[{path:"",component:R}]]}),[])])}))}}]);