(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{EZ4Z:function(e,t,n){"use strict";n.r(t),n.d(t,"BilleteraListPageModuleNgFactory",(function(){return te}));var a=n("8Y7J");class o{}var s=n("gIFq"),i=n("lUNt"),r=n("7YSU"),l=n("3KlM"),c=n("Ux8H"),d=n("OEUh"),p=n("Xh6l"),g=n("Uc9x"),m=n("pMnS"),u=n("MKJQ"),h=n("sZkV"),f=n("iInd"),v=n("SVse"),b=n("M4wD"),C=n("B7gC"),O=n("6LEC"),P=n("2gss"),M=n("TAV1"),_=n("zK/y"),y=n("mrSG"),w=n("s7LF"),x=n("ZtEv"),k=n("IKpp"),R=n("Gs+c"),j=n("fc4l"),T=n("lWBS"),E=n("WHHX"),I=n("BW71"),A=n("DRn5");class D{constructor(e,t,n,a,o,s){this.router=e,this.authenticationService=t,this.alertController=n,this.lockscreenService=a,this.translateService=o,this.modalController=s,this.picture="../../../../assets/sample-images/scan1.svg",this.picture2="../../../../assets/sample-images/scan2.svg",this.picture3="../../../../assets/sample-images/comprarsaldo.png",this.picture4="../../../../assets/sample-images/scan3.svg",this.userinfo=[],this.themeColor="dark",this.isCorrect=!1,this.enableTouchIdFaceId=!0,this.reportes="../../../../assets/sample-images/reportes.svg",this.mycuenta="../../../../assets/sample-images/mycuenta.svg",this.mytarjeta="../../../../assets/sample-images/mistrajetas.svg",this.myservicio="../../../../assets/sample-images/myservicio3.svg",this.mytrasferencia="../../../../assets/sample-images/mytransaferencia2.svg",this.mytiendas="../../../../assets/sample-images/mytienda.svg",this.mymoney="../../../../assets/sample-images/money.svg",this.mytranspote="../../../../assets/sample-images/mytranspote.svg",this.apifoto=this.authenticationService.getapifoto(),this.radioColorForm=new w.g({selected_color:new w.e("#fc9961")})}ngOnInit(){this.userinfo=this.authenticationService.getcopiauser(),this.logo1=this.authenticationService.dalogo1(this.userinfo),this.moneda=this.userinfo[0].idempresa.moneda,this.tituloxx=this.userinfo[0].nombre,this.role=this.userinfo[0].role;const e=[],t=[];switch(this.role){case"user":e.push({title:"Pagar con QR",foto:"../../../../assets/sample-images/scan1.svg",operacion:"pagarindividual"}),e.push({title:"Pagar con scan",foto:"../../../../assets/sample-images/scan2.svg",operacion:"pagarindividual2"}),t.push({title:"Mi cuenta",foto:"../../../../assets/sample-images/mycuenta.svg",operacion:"micuenta"}),t.push({title:"Transporte",foto:"../../../../assets/sample-images/mytranspote.svg",operacion:"Trasporta"}),t.push({title:"Agregar Tarjetas",foto:"../../../../assets/sample-images/mistrajetas.svg",operacion:"Mis tajetas"}),t.push({title:"Compra de Saldo",foto:"../../../../assets/sample-images/saldob.svg",operacion:"Saldo"});break;case"Asociado operador":e.push({title:"Cobrar con scan",foto:"../../../../assets/sample-images/scan2.svg",operacion:"cobrarcomercial"}),e.push({title:"Cobrar con QR",foto:"../../../../assets/sample-images/scan1.svg",operacion:"cobrarcomercial2"}),t.push({title:"Transferencias",foto:"../../../../assets/sample-images/mytransaferencia2.svg",operacion:"Trasferencias"}),t.push({title:"Saldo",foto:"../../../../assets/sample-images/money.svg",operacion:"Saldo"}),t.push({title:"Reportes",foto:"../../../../assets/sample-images/myservicio3.svg",operacion:"Cierre"});break;case"Asociado administrador":e.push({title:"Cobrar Escaneando",foto:"../../../../assets/sample-images/scan2.svg",operacion:"cobrarcomercial"}),e.push({title:"Cobrar con QR",foto:"../../../../assets/sample-images/scan1.svg",operacion:"cobrarcomercial2"}),t.push({title:"Transferencias",foto:"../../../../assets/sample-images/mytransaferencia2.svg",operacion:"Trasferencias"}),t.push({title:"Saldo",foto:"../../../../assets/sample-images/money.svg",operacion:"Saldo2"}),t.push({title:"Corte del dia",foto:"../../../../assets/sample-images/myservicio3.svg",operacion:"Cierre"});break;case"Administrador":t.push({title:"Mi cuenta",foto:"../../../../assets/sample-images/mycuenta.svg",operacion:"micuenta"}),e.push({title:"Cobrar Escaneando",foto:"../../../../assets/sample-images/scan2.svg",operacion:"cobrarcomercial"}),e.push({title:"Cobrar con QR",foto:"../../../../assets/sample-images/scan1.svg",operacion:"cobrarcomercial2"}),t.push({title:"Transferencias",foto:"../../../../assets/sample-images/mytransaferencia2.svg",operacion:"Trasferencias"}),t.push({title:"Saldo",foto:"../../../../assets/sample-images/money.svg",operacion:"Saldo"}),t.push({title:"Corte del dia",foto:"../../../../assets/sample-images/myservicio3.svg",operacion:"Cierre"});break;case"Asociado dispositivo":t.push({title:"Operaciones",foto:"../../../../assets/sample-images/myservicio3.svg",operacion:"Cierre"}),t.push({title:"Cobro pasaje",foto:"../../../../assets/sample-images/cobrobus.svg",operacion:"Trasporte"}),t.push({title:"Cobro pasaje v2",foto:"../../../../assets/sample-images/cobrobus.svg",operacion:"Trasporte2"}),t.push({title:"Cobro Broadcaster",foto:"../../../../assets/sample-images/cobrobus.svg",operacion:"Trasporte3"})}this.itemsList=e,this.itemsList2=t}operacion2(e){switch(e){case"cobrarcomercial":this.pin("pagoqr");break;case"pagarindividual":this.pin2("pagoqr");break;case"cobrarcomercial2":this.pin2("cobrapagoqr");break;case"pagarindividual2":this.pin20("cobrapagoqr");break;case"micuenta":this.mycuentas();break;case"Mis tajetas":this.operacion("Mis tajetas");break;case"Trasferencias":this.operacion("transferencias");break;case"Saldo2":this.operacion("saldo");break;case"Saldo":this.pin22("comprasaldo");break;case"Cierre":this.operacion("Cierre");break;case"Reportes":this.operacion("Mis reportes");break;case"Trasporte":this.cobrobus();break;case"Trasporte2":this.cobrobus2();break;case"Trasporte3":this.cobrobus3();break;case"Trasporta":this.operacion("Trasporta")}}cobrobus3(){return Object(y.a)(this,void 0,void 0,(function*(){const e=yield this.modalController.create({component:E.a,animated:!0,componentProps:{variables:"",user:null,opcion:"broadcaster",moneda:this.moneda,titulo:"Cobro pasaje broadcaster"},presentingElement:yield this.modalController.getTop(),cssClass:"modal-fullscreen"});return e.onWillDismiss().then(e=>{}),yield e.present()}))}cobrobus(){return Object(y.a)(this,void 0,void 0,(function*(){const e=yield this.modalController.create({component:E.a,animated:!0,componentProps:{variables:"",user:null,opcion:"mixto",moneda:this.moneda,titulo:"Cobro pasaje"},presentingElement:yield this.modalController.getTop(),cssClass:"modal-fullscreen"});return e.onWillDismiss().then(e=>{}),yield e.present()}))}cobrobus2(){return Object(y.a)(this,void 0,void 0,(function*(){this.router.navigate(["tokenspago0ListPage"],{state:{variables:"",user:null,moneda:this.moneda,titulo:"Cobro pasaje"}})}))}operacion(e){return Object(y.a)(this,void 0,void 0,(function*(){const t=[];switch(this.role){case"user":switch(e){case"transferencias":t.push({title:"Mis transferencias",foto:"../../../../assets/sample-images/mistrasferenciasb.svg",operacion:"mistransferencias"});break;case"saldo":t.push({title:"Comprar saldo",foto:"../../../../assets/sample-images/saldob.svg",operacion:"comprasaldo"});break;case"Mis reportes":t.push({title:"Facturas",foto:"../../../../assets/sample-images/facturas.svg",operacion:"facturas"}),t.push({title:"Compras",foto:"../../../../assets/sample-images/reportes.svg",operacion:"reportes"});break;case"Trasporta":t.push({title:"Pagar Transporte",foto:"../../../../assets/sample-images/scan1.svg",operacion:"pagarsubcidio"})}break;case"Asociado administrador":switch(e){case"transferencias":t.push({title:"Mis transferencias",foto:"../../../../assets/sample-images/mistrasferenciasb.svg",operacion:"mistransferencias"});break;case"saldo":t.push({title:"Vender saldo",foto:"../../../../assets/sample-images/saldoa.svg",operacion:"vendesaldo"});break;case"Cierre":t.push({title:"Facturas",foto:"../../../../assets/sample-images/facturas.svg",operacion:"facturas"}),t.push({title:"Cobros x dia buses",foto:"../../../../assets/sample-images/reportes.svg",operacion:"cobrosbusesasociadoadmin"})}break;case"Asociado operador":switch(e){case"transferencias":t.push({title:"Mis transferencias",foto:"../../../../assets/sample-images/mistrasferenciasb.svg",operacion:"mistransferencias"});break;case"saldo":t.push({title:"Vender saldo",foto:"../../../../assets/sample-images/saldoa.svg",operacion:"vendesaldo"});break;case"Cierre":t.push({title:"Facturas",foto:"../../../../assets/sample-images/facturas.svg",operacion:"facturas"}),t.push({title:"Cobros x dia buses",foto:"../../../../assets/sample-images/reportes.svg",operacion:"cobrosbusesasociado"})}break;case"Asociadoadmin":switch(e){case"transferencias":t.push({title:"Mis transferencias",foto:"../../../../assets/sample-images/mistrasferenciasb.svg",operacion:"mistransferencias"});break;case"saldo":t.push({title:"Vender saldo",foto:"../../../../assets/sample-images/saldoa.svg",operacion:"vendesaldo"});break;case"Cierre":t.push({title:"Facturas",foto:"../../../../assets/sample-images/facturas.svg",operacion:"facturas"}),t.push({title:"Ventas",foto:"../../../../assets/sample-images/reportes.svg",operacion:"reportes"}),t.push({title:"Cierre del dia",foto:"../../../../assets/sample-images/myservicio3.svg",operacion:"reportes"})}break;case"Asociado dispositivo":switch(e){case"Cierre":t.push({title:"Cobros del dia",foto:"../../../../assets/sample-images/reportes.svg",operacion:"Cobros del dia bus"}),t.push({title:"Cierre del dia",foto:"../../../../assets/sample-images/myservicio3.svg",operacion:"Cierre del dia bus"});break;case"Trasporte":t.push({title:"Cobrar pasaje",foto:"../../../../assets/sample-images/cobrobus.svg",operacion:"cobrarpasaje"});break;case"Trasporte2":t.push({title:"Cobrar pasaje v2",foto:"../../../../assets/sample-images/cobrobus.svg",operacion:"cobrarpasaje2"});break;case"Trasporte3":t.push({title:"Cobrar Broadcaster",foto:"../../../../assets/sample-images/cobrobus.svg",operacion:"cobrarpasaje3"})}break;case"Administrador":switch(e){case"transferencias":t.push({title:"Mis transferencias",foto:"../../../../assets/sample-images/mistrasferenciasb.svg",operacion:"mistransferencias"});break;case"saldo":t.push({title:"Vender saldo",foto:"../../../../assets/sample-images/saldoa.svg",operacion:"vendesaldo"});break;case"Cierre":t.push({title:"Facturas",foto:"../../../../assets/sample-images/facturas.svg",operacion:"facturas"}),t.push({title:"Ventas",foto:"../../../../assets/sample-images/reportes.svg",operacion:"reportes"}),t.push({title:"Cierre del dia",foto:"../../../../assets/sample-images/myservicio3.svg",operacion:"reportes"})}}"Trasporta"===e&&(e="Transporte"),"Mis tajetas"===e?this.router.navigate(["tarjetacreditoListPage"],{state:{variables:"",user:null,idllave:this.userinfo[0]._id,title:e,opciones:t}}):this.router.navigate(["billetera2-list"],{state:{variables:"",user:null,title:e,opciones:t}})}))}colectar(){return Object(y.a)(this,void 0,void 0,(function*(){}))}mytienda(){return Object(y.a)(this,void 0,void 0,(function*(){this.router.navigate(["app/ProvidesPage"],{state:{variables:"",user:null,moneda:this.moneda,titulo:"Tiendas"}})}))}mycuentas(){return Object(y.a)(this,void 0,void 0,(function*(){this.router.navigate(["contact-card2"],{state:{variables:"",user:null,moneda:this.moneda,titulo:"My cuenta"}})}))}recargar(e,t,n,a){return Object(y.a)(this,void 0,void 0,(function*(){this.lockscreenService.verify({passcode:this.userinfo[0].codpersonal,enableTouchIdFaceId:this.enableTouchIdFaceId}).then(o=>{const{data:s}=o;"dismiss"===s.type?this.vende(e,t,n,a):this.isCorrect=!1})}))}vende(e,t,n,a){return Object(y.a)(this,void 0,void 0,(function*(){const o=yield this.modalController.create({component:k.a,animated:!0,componentProps:{moneda:this.moneda,title:"Ingrese monto ",validasaldo:"no",tipo2:a,botonn:t,botonn2:n,tipo:e},presentingElement:yield this.modalController.getTop(),cssClass:"modal-fullscreen"});return o.onWillDismiss().then(n=>{"close"!==n.data.data&&this.venderconqr(n.data.data,e,t,a)}),yield o.present()}))}venderconqr(e,t,n,a){return Object(y.a)(this,void 0,void 0,(function*(){const o=yield this.modalController.create({component:T.a,animated:!0,componentProps:{moneda:this.moneda,title:n,tipo2:a,tipo:t,monto:e},presentingElement:yield this.modalController.getTop(),cssClass:"modal-fullscreen"});return o.onWillDismiss().then(e=>{"close"!==e.data.data&&this.authenticationService.presentAlert(e.data.data,"Gracias","")}),yield o.present()}))}myservicios(){return Object(y.a)(this,void 0,void 0,(function*(){}))}mytransferencia(){return Object(y.a)(this,void 0,void 0,(function*(){}))}pagarconqr2(e,t){return Object(y.a)(this,void 0,void 0,(function*(){const e=yield this.modalController.create({component:j.a,animated:!0,componentProps:{moneda:this.moneda,title:"PAGAR",monto:0,tipo:t},presentingElement:yield this.modalController.getTop(),cssClass:"modal-fullscreen"});return e.onWillDismiss().then(e=>{"close"!==e.data.data&&this.authenticationService.presentAlert(e.data.data,"Gracias","Por tu compra")}),yield e.present()}))}cobrarconqr(e,t){return Object(y.a)(this,void 0,void 0,(function*(){const n=yield this.modalController.create({component:j.a,animated:!0,componentProps:{moneda:this.moneda,title:"COBRAR",monto:e,tipo:t},presentingElement:yield this.modalController.getTop(),cssClass:"modal-fullscreen"});return n.onWillDismiss().then(e=>{"close"!==e.data.data&&this.authenticationService.presentAlert(e.data.data,"Gracias","Por tu compra")}),yield n.present()}))}pin20(e){return Object(y.a)(this,void 0,void 0,(function*(){"Aplicar"===this.userinfo[0].accesohora?this.lockscreenService.verify({passcode:this.userinfo[0].codpersonal,enableTouchIdFaceId:this.enableTouchIdFaceId}).then(e=>{const{data:t}=e;"dismiss"===t.type?this.pin("cobrapagoqr"):this.isCorrect=!1}):this.pin("cobrapagoqr")}))}pin(e){return Object(y.a)(this,void 0,void 0,(function*(){if("cobrapagoqr"===e){const t=yield this.modalController.create({component:R.a,animated:!0,componentProps:{moneda:this.moneda,metodopago:e,title:"Seleccione opci\xf3n",botonn:"PAGAR"},presentingElement:yield this.modalController.getTop(),cssClass:"modal-fullscreen"});return t.onWillDismiss().then(t=>{"close"!==t.data.data&&this.pagarconqr2(e,e)}),yield t.present()}this.comocobrar2(e)}))}comocobrar2(e){return Object(y.a)(this,void 0,void 0,(function*(){const t=yield this.modalController.create({component:k.a,animated:!0,componentProps:{moneda:this.moneda,title:"Ingrese monto ",botonn:"COBRAR",botonn2:"cobro",validarsaldo:"no",tipo:e},presentingElement:yield this.modalController.getTop(),cssClass:"modal-fullscreen"});return t.onWillDismiss().then(t=>{"close"!==t.data.data&&this.cobrarconqr(t.data.data,e)}),yield t.present()}))}escanearqr(e,t,n){return Object(y.a)(this,void 0,void 0,(function*(){const a=yield this.modalController.create({component:I.a,animated:!0,componentProps:{moneda:this.moneda,title:n,monto:e,tipo:t},presentingElement:yield this.modalController.getTop(),cssClass:"modal-fullscreen"});return a.onWillDismiss().then(e=>{}),yield a.present()}))}pin22(e){return Object(y.a)(this,void 0,void 0,(function*(){this.escanearqr(e,e,"Identificarse")}))}comprarsaldo(e){return Object(y.a)(this,void 0,void 0,(function*(){}))}pin2(e){return Object(y.a)(this,void 0,void 0,(function*(){"Aplicar"===this.userinfo[0].accesohora?this.lockscreenService.verify({passcode:this.userinfo[0].codpersonal,enableTouchIdFaceId:this.enableTouchIdFaceId}).then(t=>{const{data:n}=t;"dismiss"===n.type?"cobrapagoqr"===e?this.comocobrar2qr(e):this.comopagar2(e):this.isCorrect=!1}):this.comopagar2(e)}))}comocobrar2qr(e){return Object(y.a)(this,void 0,void 0,(function*(){const t=yield this.modalController.create({component:k.a,animated:!0,componentProps:{moneda:this.moneda,title:"Ingrese monto ",botonn:"COBRAR",botonn2:"cobro",validarsaldo:"no",tipo:e},presentingElement:yield this.modalController.getTop(),cssClass:"modal-fullscreen"});return t.onWillDismiss().then(t=>{"close"!==t.data.data&&this.comocobrar22(e,t.data.data)}),yield t.present()}))}comocobrar22(e,t){return Object(y.a)(this,void 0,void 0,(function*(){const n=yield this.modalController.create({component:I.a,animated:!0,componentProps:{moneda:this.moneda,title:"COBRAR",monto:t,tipo:e},presentingElement:yield this.modalController.getTop(),cssClass:"modal-fullscreen"});return n.onWillDismiss().then(e=>{}),yield n.present()}))}comopagar2(e){return Object(y.a)(this,void 0,void 0,(function*(){if("trasferencia"!==e){const t=yield this.modalController.create({component:R.a,animated:!0,componentProps:{moneda:this.moneda,metodopago:e,title:"Seleccione opci\xf3n",botonn:"PAGAR"},presentingElement:yield this.modalController.getTop(),cssClass:"modal-fullscreen"});return t.onWillDismiss().then(e=>{"close"!==e.data.data&&("pagoqr"===e.data.data?this.pagarconqr(e.data.data,e.data.data,"PAGAR"):this.pagar2qr())}),yield t.present()}this.pagar2(e,"TRANSFERENCIA")}))}pagar2(e,t){return Object(y.a)(this,void 0,void 0,(function*(){const n=yield this.modalController.create({component:k.a,animated:!0,componentProps:{moneda:this.moneda,title:"Ingrese monto",botonn:t,botonn2:t,validarsaldo:"si"},presentingElement:yield this.modalController.getTop(),cssClass:"modal-fullscreen"});return n.onWillDismiss().then(n=>{"close"!==n.data.data&&this.pagarconqr(n.data.data,e,t)}),yield n.present()}))}pagar2qr(){return Object(y.a)(this,void 0,void 0,(function*(){const e=yield this.modalController.create({component:I.a,animated:!0,componentProps:{moneda:this.moneda,title:"PAGAR",monto:-1e3,tipo:"pagoqr"},presentingElement:yield this.modalController.getTop(),cssClass:"modal-fullscreen"});return e.onWillDismiss().then(e=>{}),yield e.present()}))}pagarconqr(e,t,n){return Object(y.a)(this,void 0,void 0,(function*(){const a=yield this.modalController.create({component:I.a,animated:!0,componentProps:{moneda:this.moneda,title:n,monto:e,tipo:t},presentingElement:yield this.modalController.getTop(),cssClass:"modal-fullscreen"});return a.onWillDismiss().then(e=>{}),yield a.present()}))}}var S=n("TSSN"),F=a["\u0275crt"]({encapsulation:0,styles:[['.plt-mobile.md[_nghost-%COMP%]   .user-details-section[_ngcontent-%COMP%]   .user-image-wrapper[_ngcontent-%COMP%], .plt-mobile.md   [_nghost-%COMP%]   .user-details-section[_ngcontent-%COMP%]   .user-image-wrapper[_ngcontent-%COMP%]{max-width:28%}.plt-mobile.ios[_nghost-%COMP%]   .user-details-section[_ngcontent-%COMP%]   .user-image-wrapper[_ngcontent-%COMP%], .plt-mobile.ios   [_nghost-%COMP%]   .user-details-section[_ngcontent-%COMP%]   .user-image-wrapper[_ngcontent-%COMP%]{max-width:30%}[_nghost-%COMP%]{--page-margin:var(--app-narrow-margin);--page-border-radius:var(--app-fair-radius);--page-actions-padding:5px;--page-friends-gutter:calc(var(--page-margin)/2);--page-pictures-gutter:calc(var(--page-margin)/2)}.user-details-section[_ngcontent-%COMP%]{--ion-grid-column-padding:0px;margin:var(--page-margin)}.user-details-section[_ngcontent-%COMP%]   .user-image-wrapper[_ngcontent-%COMP%]{max-width:26%}.user-details-section[_ngcontent-%COMP%]   .user-info-wrapper[_ngcontent-%COMP%]{padding-left:var(--page-margin);display:flex;flex-direction:column;justify-content:space-between;flex-wrap:nowrap}.user-details-section[_ngcontent-%COMP%]   .user-info-wrapper[_ngcontent-%COMP%]   .user-data-row[_ngcontent-%COMP%]{padding-bottom:var(--page-margin);flex-wrap:nowrap;justify-content:space-between}.user-details-section[_ngcontent-%COMP%]   .user-info-wrapper[_ngcontent-%COMP%]   .user-data-row[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%]{margin:0 0 5px;font-size:20px;letter-spacing:.5px}.user-details-section[_ngcontent-%COMP%]   .user-info-wrapper[_ngcontent-%COMP%]   .user-data-row[_ngcontent-%COMP%]   .user-title[_ngcontent-%COMP%]{margin:0;color:var(--ion-color-medium);font-size:16px}.user-details-section[_ngcontent-%COMP%]   .user-info-wrapper[_ngcontent-%COMP%]   .user-data-row[_ngcontent-%COMP%]   .membership-col[_ngcontent-%COMP%]{padding-left:var(--page-margin);flex-grow:0}.user-details-section[_ngcontent-%COMP%]   .user-info-wrapper[_ngcontent-%COMP%]   .user-data-row[_ngcontent-%COMP%]   .user-membership[_ngcontent-%COMP%]{display:block;background-color:var(--ion-color-secondary);color:var(--ion-color-lightest);border-radius:var(--app-narrow-radius);padding:4px 8px;text-align:center;font-weight:500;font-size:14px}.user-details-section[_ngcontent-%COMP%]   .user-info-wrapper[_ngcontent-%COMP%]   .actions-row[_ngcontent-%COMP%]{--ion-grid-columns:10;--ion-grid-column-padding:var(--page-actions-padding);justify-content:space-between;flex-wrap:nowrap;margin-left:calc(var(--page-actions-padding)*-1);margin-right:calc(var(--page-actions-padding)*-1)}.user-details-section[_ngcontent-%COMP%]   .user-info-wrapper[_ngcontent-%COMP%]   .actions-row[_ngcontent-%COMP%]   .main-actions[_ngcontent-%COMP%]{flex-grow:0;padding-top:0;padding-bottom:0;margin-left:calc(var(--page-actions-padding)*-1);margin-right:calc(var(--page-actions-padding)*-1);display:flex}.user-details-section[_ngcontent-%COMP%]   .user-info-wrapper[_ngcontent-%COMP%]   .actions-row[_ngcontent-%COMP%]   .main-actions[_ngcontent-%COMP%]   .call-to-action-btn[_ngcontent-%COMP%]{padding:0 var(--page-actions-padding);margin:0}.user-details-section[_ngcontent-%COMP%]   .user-info-wrapper[_ngcontent-%COMP%]   .actions-row[_ngcontent-%COMP%]   .secondary-actions[_ngcontent-%COMP%]{flex-grow:0;padding-top:0;padding-bottom:0}.user-details-section[_ngcontent-%COMP%]   .user-info-wrapper[_ngcontent-%COMP%]   .actions-row[_ngcontent-%COMP%]   .secondary-actions[_ngcontent-%COMP%]   .more-btn[_ngcontent-%COMP%]{--padding-start:4px;--padding-end:4px;margin:0}.user-stats-section[_ngcontent-%COMP%]{--ion-grid-column-padding:0px;margin:calc(var(--page-margin)*2) var(--page-margin) var(--page-margin);padding-bottom:var(--page-margin);border-bottom:1px solid var(--ion-color-light-shade)}.user-stats-section[_ngcontent-%COMP%]   .user-stats-wrapper[_ngcontent-%COMP%]{text-align:center}.user-stats-section[_ngcontent-%COMP%]   .user-stats-wrapper[_ngcontent-%COMP%]   .stat-value[_ngcontent-%COMP%]{display:block;padding-bottom:5px;color:var(--ion-color-dark-shade);font-weight:500;font-size:18px}.user-stats-section[_ngcontent-%COMP%]   .user-stats-wrapper[_ngcontent-%COMP%]   .stat-name[_ngcontent-%COMP%]{font-size:16px;color:var(--ion-color-medium)}.details-section-title[_ngcontent-%COMP%]{font-size:18px;font-weight:500;color:var(--ion-color-dark-tint);margin:0 0 var(--page-margin)}.user-about-section[_ngcontent-%COMP%]{margin:calc(var(--page-margin)*2) var(--page-margin) var(--page-margin);padding-bottom:var(--page-margin);border-bottom:1px solid var(--ion-color-light-shade)}.user-about-section[_ngcontent-%COMP%]   .user-description[_ngcontent-%COMP%]{color:var(--ion-color-dark-shade);text-align:justify;margin:var(--page-margin) 0;font-size:14px;line-height:1.3}.user-friends-section[_ngcontent-%COMP%]{margin:calc(var(--page-margin)*2) var(--page-margin) var(--page-margin);padding-bottom:var(--page-margin);border-bottom:1px solid var(--ion-color-light-shade)}.user-friends-section[_ngcontent-%COMP%]   .heading-row[_ngcontent-%COMP%]{margin-bottom:var(--page-margin);justify-content:space-between;align-items:center}.user-friends-section[_ngcontent-%COMP%]   .heading-row[_ngcontent-%COMP%]   .details-section-title[_ngcontent-%COMP%]{margin:0}.user-friends-section[_ngcontent-%COMP%]   .heading-row[_ngcontent-%COMP%]   .heading-call-to-action[_ngcontent-%COMP%]{padding:calc(var(--page-margin)/2) calc(var(--page-margin)/4);text-decoration:none;color:var(--ion-color-secondary)}.user-friends-section[_ngcontent-%COMP%]   ion-row.item[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%]{background-color:#708090;box-shadow:inset 0 0 0 1px red}.user-friends-section[_ngcontent-%COMP%]   .friends-row[_ngcontent-%COMP%]{--ion-grid-columns:7;--ion-grid-column-padding:auto;text-align:center;align-items:center;justify-content:center;flex-wrap:nowrap;overflow-x:scroll;will-change:scroll-position;-ms-overflow-style:none;overflow:-moz-scrollbars-none;scrollbar-width:none}.user-friends-section[_ngcontent-%COMP%]   .friends-row[_ngcontent-%COMP%]::-webkit-scrollbar{display:none}.user-friends-section[_ngcontent-%COMP%]   .friends-row[_ngcontent-%COMP%]:after, .user-friends-section[_ngcontent-%COMP%]   .friends-row[_ngcontent-%COMP%]:before{content:"";flex:0 0 calc(var(--page-margin) - var(--page-friends-gutter))}.user-friends-section[_ngcontent-%COMP%]   .friends-row[_ngcontent-%COMP%]   .friend-item[_ngcontent-%COMP%]{padding:0 var(--page-friends-gutter)}.user-friends-section[_ngcontent-%COMP%]   .friends-row[_ngcontent-%COMP%]   .friend-item[_ngcontent-%COMP%]   .friend-name[_ngcontent-%COMP%]{display:block;text-align:center;margin:var(--page-margin) 0;font-size:14px}.user-photos-section[_ngcontent-%COMP%]{margin:calc(var(--page-margin)*2) var(--page-margin) var(--page-margin);padding-bottom:calc(var(--page-margin)*2)}.user-photos-section[_ngcontent-%COMP%]   .heading-row[_ngcontent-%COMP%]{margin-bottom:var(--page-margin);justify-content:space-between;align-items:center}.user-photos-section[_ngcontent-%COMP%]   .heading-row[_ngcontent-%COMP%]   .details-section-title[_ngcontent-%COMP%]{margin:0}.user-photos-section[_ngcontent-%COMP%]   .heading-row[_ngcontent-%COMP%]   .heading-call-to-action[_ngcontent-%COMP%]{padding:calc(var(--page-margin)/2) calc(var(--page-margin)/4);text-decoration:none;color:var(--ion-color-secondary)}.user-photos-section[_ngcontent-%COMP%]   .pictures-row[_ngcontent-%COMP%]{--ion-grid-columns:4;--ion-grid-column-padding:0px;margin:0 calc(var(--page-pictures-gutter)*-1)}.user-photos-section[_ngcontent-%COMP%]   .pictures-row[_ngcontent-%COMP%]   .picture-item[_ngcontent-%COMP%]{padding:0 var(--page-pictures-gutter) calc(var(--page-pictures-gutter)*2)}  .language-alert{--select-alert-color:#000;--select-alert-background:#fff;--select-alert-margin:16px;--select-alert-color:var(--ion-color-lightest);--select-alert-background:var(--ion-color-primary);--select-alert-margin:var(--app-fair-margin)}  .language-alert .alert-head{padding-top:calc(var(--select-alert-margin)/4*3);padding-bottom:calc(var(--select-alert-margin)/4*3);-webkit-padding-start:var(--select-alert-margin);padding-inline-start:var(--select-alert-margin);-webkit-padding-end:var(--select-alert-margin);padding-inline-end:var(--select-alert-margin)}  .language-alert .alert-title{color:var(--select-alert-color)}  .language-alert .alert-head,   .language-alert .alert-message{background-color:var(--select-alert-background)}  .language-alert .alert-wrapper.sc-ion-alert-ios .alert-title{margin:0}  .language-alert .alert-wrapper.sc-ion-alert-md .alert-title{font-size:18px;font-weight:400}  .language-alert .alert-wrapper.sc-ion-alert-md .alert-button{--padding-top:0;--padding-start:0.9em;--padding-end:0.9em;--padding-bottom:0;height:2.1em;font-size:13px}  .language-alert .alert-message{display:none}app-image-shell.user-image[_ngcontent-%COMP%]{--image-shell-border-radius:var(--page-border-radius)}.user-name[_ngcontent-%COMP%] > app-text-shell[_ngcontent-%COMP%]{--text-shell-line-height:20px;max-width:50%}.user-name[_ngcontent-%COMP%] > app-text-shell.text-loaded[_ngcontent-%COMP%]{max-width:unset}.user-title[_ngcontent-%COMP%] > app-text-shell[_ngcontent-%COMP%]{--text-shell-line-height:16px;max-width:70%}.user-title[_ngcontent-%COMP%] > app-text-shell.text-loaded[_ngcontent-%COMP%]{max-width:unset}.user-membership[_ngcontent-%COMP%] > app-text-shell[_ngcontent-%COMP%]{--text-shell-line-color:rgba(var(--ion-color-secondary-rgb),0.4);--text-shell-line-height:14px;min-width:30px}.user-membership[_ngcontent-%COMP%] > app-text-shell.text-loaded[_ngcontent-%COMP%]{min-width:0}.stat-value[_ngcontent-%COMP%] > app-text-shell[_ngcontent-%COMP%]{--text-shell-line-height:18px;max-width:50%;margin:0 auto}.stat-value[_ngcontent-%COMP%] > app-text-shell.text-loaded[_ngcontent-%COMP%]{max-width:unset;margin:initial}.user-description[_ngcontent-%COMP%] > app-text-shell[_ngcontent-%COMP%]{--text-shell-line-height:14px}app-image-shell.friend-picture[_ngcontent-%COMP%]{--image-shell-border-radius:var(--page-border-radius)}.friend-name[_ngcontent-%COMP%] > app-text-shell[_ngcontent-%COMP%]{--text-shell-line-height:14px}app-image-shell.user-photo-image[_ngcontent-%COMP%]{--image-shell-border-radius:var(--page-border-radius)}']],data:{}});function N(e){return a["\u0275vid"](0,[(e()(),a["\u0275eld"](0,0,null,null,11,"ion-col",[["class","friend-item"],["size","2"]],null,[[null,"click"]],(function(e,t,n){var o=!0,s=e.component;return"click"===t&&(o=!1!==a["\u0275nov"](e,2).onClick()&&o),"click"===t&&(o=!1!==a["\u0275nov"](e,3).onClick(n)&&o),"click"===t&&(o=!1!==s.operacion2(e.context.$implicit.operacion)&&o),o}),u.vb,u.n)),a["\u0275did"](1,49152,null,0,h.u,[a.ChangeDetectorRef,a.ElementRef,a.NgZone],{size:[0,"size"]},null),a["\u0275did"](2,16384,null,0,f.n,[f.m,f.a,[8,null],a.Renderer2,a.ElementRef],null,null),a["\u0275did"](3,737280,null,0,h.Nb,[v.LocationStrategy,h.Hb,a.ElementRef,f.m,[2,f.n]],null,null),(e()(),a["\u0275eld"](4,0,null,0,4,"app-aspect-ratio",[],[[4,"padding",null]],null,null,b.b,b.a)),a["\u0275did"](5,49152,null,0,C.a,[],{ratio:[0,"ratio"]},null),a["\u0275pod"](6,{w:0,h:1}),(e()(),a["\u0275eld"](7,0,null,0,1,"app-image-shell",[["class","friend-picture"]],[[2,"img-loaded",null],[4,"backgroundImage",null],[1,"display",0]],null,null,O.b,O.a)),a["\u0275did"](8,49152,null,0,P.a,[a.PLATFORM_ID],{src:[0,"src"]},null),(e()(),a["\u0275eld"](9,0,null,0,2,"span",[["class","friend-name"]],null,null,null,null,null)),(e()(),a["\u0275eld"](10,0,null,null,1,"app-text-shell",[["class","details-section-title"]],[[2,"text-loaded",null]],null,null,M.b,M.a)),a["\u0275did"](11,49152,null,0,_.a,[],{data:[0,"data"]},null)],(function(e,t){e(t,1,0,"2"),e(t,3,0);var n=e(t,6,0,1,1);e(t,5,0,n),e(t,8,0,t.context.$implicit.foto),e(t,11,0,t.context.$implicit.title)}),(function(e,t){e(t,4,0,a["\u0275nov"](t,5).ratioPadding),e(t,7,0,a["\u0275nov"](t,8).imageLoaded,a["\u0275nov"](t,8).backgroundImage,a["\u0275nov"](t,8).display),e(t,10,0,a["\u0275nov"](t,11).textLoaded)}))}function q(e){return a["\u0275vid"](0,[(e()(),a["\u0275eld"](0,0,null,null,15,"ion-col",[["class","picture-item"],["size","2"]],null,null,null,u.vb,u.n)),a["\u0275did"](1,49152,null,0,h.u,[a.ChangeDetectorRef,a.ElementRef,a.NgZone],{size:[0,"size"]},null),(e()(),a["\u0275eld"](2,0,null,0,13,"ion-card",[],null,[[null,"click"]],(function(e,t,n){var o=!0,s=e.component;return"click"===t&&(o=!1!==a["\u0275nov"](e,4).onClick()&&o),"click"===t&&(o=!1!==a["\u0275nov"](e,5).onClick(n)&&o),"click"===t&&(o=!1!==s.operacion2(e.context.$implicit.operacion)&&o),o}),u.sb,u.g)),a["\u0275did"](3,49152,null,0,h.n,[a.ChangeDetectorRef,a.ElementRef,a.NgZone],null,null),a["\u0275did"](4,16384,null,0,f.n,[f.m,f.a,[8,null],a.Renderer2,a.ElementRef],null,null),a["\u0275did"](5,737280,null,0,h.Nb,[v.LocationStrategy,h.Hb,a.ElementRef,f.m,[2,f.n]],null,null),(e()(),a["\u0275eld"](6,0,null,0,4,"app-aspect-ratio",[],[[4,"padding",null]],null,null,b.b,b.a)),a["\u0275did"](7,49152,null,0,C.a,[],{ratio:[0,"ratio"]},null),a["\u0275pod"](8,{w:0,h:1}),(e()(),a["\u0275eld"](9,0,null,0,1,"app-image-shell",[["animation","spinner"],["class","picture-image"]],[[2,"img-loaded",null],[4,"backgroundImage",null],[1,"display",0]],null,null,O.b,O.a)),a["\u0275did"](10,49152,null,0,P.a,[a.PLATFORM_ID],{src:[0,"src"],alt:[1,"alt"]},null),(e()(),a["\u0275eld"](11,0,null,0,4,"ion-card-header",[],null,null,null,u.pb,u.i)),a["\u0275did"](12,49152,null,0,h.p,[a.ChangeDetectorRef,a.ElementRef,a.NgZone],null,null),(e()(),a["\u0275eld"](13,0,null,0,2,"ion-card-subtitle",[],null,null,null,u.qb,u.j)),a["\u0275did"](14,49152,null,0,h.q,[a.ChangeDetectorRef,a.ElementRef,a.NgZone],null,null),(e()(),a["\u0275ted"](15,0,["",""]))],(function(e,t){e(t,1,0,"2"),e(t,5,0);var n=e(t,8,0,3,2);e(t,7,0,n),e(t,10,0,t.context.$implicit.foto,t.context.$implicit.title)}),(function(e,t){e(t,6,0,a["\u0275nov"](t,7).ratioPadding),e(t,9,0,a["\u0275nov"](t,10).imageLoaded,a["\u0275nov"](t,10).backgroundImage,a["\u0275nov"](t,10).display),e(t,15,0,t.context.$implicit.title)}))}function L(e){return a["\u0275vid"](0,[(e()(),a["\u0275eld"](0,0,null,null,13,"ion-header",[],null,null,null,u.Cb,u.u)),a["\u0275did"](1,49152,null,0,h.C,[a.ChangeDetectorRef,a.ElementRef,a.NgZone],null,null),(e()(),a["\u0275eld"](2,0,null,0,11,"ion-toolbar",[["color","primary"]],null,null,null,u.oc,u.gb)),a["\u0275did"](3,49152,null,0,h.Ab,[a.ChangeDetectorRef,a.ElementRef,a.NgZone],{color:[0,"color"]},null),(e()(),a["\u0275eld"](4,0,null,0,3,"ion-buttons",[["slot","start"]],null,null,null,u.nb,u.f)),a["\u0275did"](5,49152,null,0,h.m,[a.ChangeDetectorRef,a.ElementRef,a.NgZone],null,null),(e()(),a["\u0275eld"](6,0,null,0,1,"ion-menu-button",[],null,null,null,u.Pb,u.I)),a["\u0275did"](7,49152,null,0,h.S,[a.ChangeDetectorRef,a.ElementRef,a.NgZone],null,null),(e()(),a["\u0275eld"](8,0,null,0,2,"ion-title",[],null,null,null,u.mc,u.eb)),a["\u0275did"](9,49152,null,0,h.yb,[a.ChangeDetectorRef,a.ElementRef,a.NgZone],null,null),(e()(),a["\u0275ted"](10,0,[" "," "])),(e()(),a["\u0275eld"](11,0,null,0,2,"ion-buttons",[["slot","end"]],null,null,null,u.nb,u.f)),a["\u0275did"](12,49152,null,0,h.m,[a.ChangeDetectorRef,a.ElementRef,a.NgZone],null,null),(e()(),a["\u0275eld"](13,0,null,0,0,"img",[["alt","logo"],["height","33"],["id","header_logo"]],[[8,"src",4]],null,null,null,null)),(e()(),a["\u0275eld"](14,0,null,null,11,"ion-content",[["class","user-profile-content"]],null,null,null,u.wb,u.o)),a["\u0275did"](15,49152,null,0,h.v,[a.ChangeDetectorRef,a.ElementRef,a.NgZone],null,null),(e()(),a["\u0275eld"](16,0,null,0,4,"div",[["class","user-friends-section"]],null,null,null,null,null)),(e()(),a["\u0275eld"](17,0,null,null,3,"ion-row",[["align-items-center",""],["class","friends-row"]],null,null,null,u.Wb,u.O)),a["\u0275did"](18,49152,null,0,h.hb,[a.ChangeDetectorRef,a.ElementRef,a.NgZone],null,null),(e()(),a["\u0275and"](16777216,null,0,1,null,N)),a["\u0275did"](20,278528,null,0,v.NgForOf,[a.ViewContainerRef,a.TemplateRef,a.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(e()(),a["\u0275eld"](21,0,null,0,4,"div",[["class","user-photos-section"]],null,null,null,null,null)),(e()(),a["\u0275eld"](22,0,null,null,3,"ion-row",[["class","pictures-row"]],null,null,null,u.Wb,u.O)),a["\u0275did"](23,49152,null,0,h.hb,[a.ChangeDetectorRef,a.ElementRef,a.NgZone],null,null),(e()(),a["\u0275and"](16777216,null,0,1,null,q)),a["\u0275did"](25,278528,null,0,v.NgForOf,[a.ViewContainerRef,a.TemplateRef,a.IterableDiffers],{ngForOf:[0,"ngForOf"]},null)],(function(e,t){var n=t.component;e(t,3,0,"primary"),e(t,20,0,n.itemsList),e(t,25,0,n.itemsList2)}),(function(e,t){var n=t.component;e(t,10,0,n.tituloxx),e(t,13,0,n.apifoto+n.logo1)}))}function Z(e){return a["\u0275vid"](0,[(e()(),a["\u0275eld"](0,0,null,null,1,"app-billetera-list",[],null,null,null,L,F)),a["\u0275did"](1,114688,null,0,D,[f.m,x.a,h.b,A.a,S.l,h.Gb],null,null)],(function(e,t){e(t,1,0)}),null)}var z=a["\u0275ccf"]("app-billetera-list",D,Z,{},{},[]),W=n("IheW"),G=n("ZpN7"),V=n("Kt/9"),B=n("fozt"),K=n("7eCM"),$=n("JuzA"),U=n("KyMZ"),H=n("j1ZV"),J=n("FaL/"),Q=n("xjce"),X=n("0rIg"),Y=n("gMqc"),ee=n("r6W/"),te=a["\u0275cmf"](o,[],(function(e){return a["\u0275mod"]([a["\u0275mpd"](512,a.ComponentFactoryResolver,a["\u0275CodegenComponentFactoryResolver"],[[8,[s.a,i.a,r.a,l.a,c.a,d.a,p.c,g.a,m.a,z]],[3,a.ComponentFactoryResolver],a.NgModuleRef]),a["\u0275mpd"](4608,v.NgLocalization,v.NgLocaleLocalization,[a.LOCALE_ID]),a["\u0275mpd"](4608,w.w,w.w,[]),a["\u0275mpd"](4608,h.c,h.c,[a.NgZone,a.ApplicationRef]),a["\u0275mpd"](4608,h.Gb,h.Gb,[h.c,a.ComponentFactoryResolver,a.Injector]),a["\u0275mpd"](4608,h.Lb,h.Lb,[h.c,a.ComponentFactoryResolver,a.Injector]),a["\u0275mpd"](4608,w.d,w.d,[]),a["\u0275mpd"](4608,S.h,S.g,[]),a["\u0275mpd"](4608,S.d,S.f,[]),a["\u0275mpd"](4608,S.j,S.e,[]),a["\u0275mpd"](4608,S.c,S.b,[]),a["\u0275mpd"](4608,S.l,S.l,[S.m,S.h,S.d,S.j,S.c,S.n,S.p,S.o,S.a]),a["\u0275mpd"](4608,W.i,W.o,[v.DOCUMENT,a.PLATFORM_ID,W.m]),a["\u0275mpd"](4608,W.p,W.p,[W.i,W.n]),a["\u0275mpd"](5120,W.a,(function(e){return[e]}),[W.p]),a["\u0275mpd"](4608,W.l,W.l,[]),a["\u0275mpd"](6144,W.j,null,[W.l]),a["\u0275mpd"](4608,W.h,W.h,[W.j]),a["\u0275mpd"](6144,W.b,null,[W.h]),a["\u0275mpd"](4608,W.f,W.k,[W.b,a.Injector]),a["\u0275mpd"](4608,W.c,W.c,[W.f]),a["\u0275mpd"](5120,a.APP_INITIALIZER,(function(e){return[G.b(e)]}),[V.a]),a["\u0275mpd"](1073742336,v.CommonModule,v.CommonModule,[]),a["\u0275mpd"](1073742336,w.v,w.v,[]),a["\u0275mpd"](1073742336,w.j,w.j,[]),a["\u0275mpd"](1073742336,h.Cb,h.Cb,[]),a["\u0275mpd"](1073742336,B.a,B.a,[]),a["\u0275mpd"](1073742336,K.a,K.a,[]),a["\u0275mpd"](1073742336,w.s,w.s,[]),a["\u0275mpd"](1073742336,$.a,$.a,[]),a["\u0275mpd"](1073742336,S.i,S.i,[]),a["\u0275mpd"](1073742336,U.a,U.a,[]),a["\u0275mpd"](1073742336,W.e,W.e,[]),a["\u0275mpd"](1073742336,W.d,W.d,[]),a["\u0275mpd"](1073742336,G.a,G.a,[]),a["\u0275mpd"](1073742336,H.a,H.a,[]),a["\u0275mpd"](1073742336,J.a,J.a,[]),a["\u0275mpd"](1073742336,Q.a,Q.a,[]),a["\u0275mpd"](1073742336,X.a,X.a,[]),a["\u0275mpd"](1073742336,Y.c,Y.c,[]),a["\u0275mpd"](1073742336,ee.a,ee.a,[]),a["\u0275mpd"](1073742336,f.p,f.p,[[2,f.u],[2,f.m]]),a["\u0275mpd"](1073742336,o,o,[]),a["\u0275mpd"](256,S.p,void 0,[]),a["\u0275mpd"](256,S.n,void 0,[]),a["\u0275mpd"](256,S.o,void 0,[]),a["\u0275mpd"](256,S.a,void 0,[]),a["\u0275mpd"](256,W.m,"XSRF-TOKEN",[]),a["\u0275mpd"](256,W.n,"X-XSRF-TOKEN",[]),a["\u0275mpd"](1024,f.k,(function(){return[[{path:"",component:D}]]}),[])])}))}}]);