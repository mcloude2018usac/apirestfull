"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[7408],{7408:(z,m,a)=>{a.r(m),a.d(m,{ProductoCompra2PageModule:()=>q});var r=a(23349),h=a(55787),l=a(69808),C=a(33678),v=a(36351),P=a(45230),g=a(51062),u=a(93075),f=a(57565),t=a(5e3);let b=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[l.ez,u.u5,r.Pc,u.UX,f.R,g.aw.forChild()]]}),n})();var M=a(22753),_=a(70655),x=a(49926),O=a(57230),Z=a(4707),y=a(94840),T=a(89330),w=a(71408);let k=(()=>{class n{constructor(){this._counterValue=0,this.propagateChange=()=>{},this.validateFn=()=>{}}get counterValue(){return this._counterValue}set counterValue(e){this._counterValue=e,this.propagateChange(e)}ngOnChanges(e){(e.counterRangeMax||e.counterRangeMin)&&(this.validateFn=function(n,s){return e=>e.value>+s||e.value<+n?{rangeError:{given:e.value,min:n||0,max:s||10}}:null}(this.counterRangeMin,this.counterRangeMax))}writeValue(e){e&&(this.counterValue=e)}registerOnChange(e){this.propagateChange=e}registerOnTouched(){}increase(){this.counterValue++}decrease(){this.counterValue--}validate(e){return this.validateFn(e)}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-counter-input"]],inputs:{_counterValue:["counterValue","_counterValue"],counterRangeMax:["max","counterRangeMax"],counterRangeMin:["min","counterRangeMin"]},features:[t._Bn([{provide:u.JU,useExisting:(0,t.Gpc)(()=>n),multi:!0},{provide:u.Cf,useExisting:(0,t.Gpc)(()=>n),multi:!0}]),t.TTD],decls:10,vars:1,consts:[[1,"button-outer"],[1,"button-wrapper"],[1,"counter-icon",3,"click"],["slot","icon-only","name","remove"],[1,"counter-value"],["slot","icon-only","name","add"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"ion-button",2),t.NdJ("click",function(){return o.decrease()}),t._UZ(3,"ion-icon",3),t.qZA(),t.qZA(),t.qZA(),t.TgZ(4,"span",4),t._uU(5),t.qZA(),t.TgZ(6,"div",0),t.TgZ(7,"div",1),t.TgZ(8,"ion-button",2),t.NdJ("click",function(){return o.increase()}),t._UZ(9,"ion-icon",5),t.qZA(),t.qZA(),t.qZA()),2&e&&(t.xp6(5),t.Oqu(o._counterValue))},directives:[r.YG,r.gu],styles:["app-counter-input{--counter-background: #000;--counter-color: #FFF;--counter-color-activated: #FFF;--counter-border-color: #000;--counter-border-radius-outer: 50%;--counter-border-radius-inner: 50%;--counter-size: 30px;display:flex;align-items:center;justify-content:flex-end}app-counter-input ion-button.counter-icon{--background: var(--counter-background);--background-activated: var(--counter-color);--color: var(--counter-color);--color-activated: var(--counter-color-activated);--border-width: 1px;--border-style: solid;--border-color: var(--counter-border-color);--box-shadow: none;--border-radius: var(--counter-border-radius-outer) var(--counter-border-radius-inner) var(--counter-border-radius-inner) var(--counter-border-radius-outer);--padding-bottom: 3px;--padding-end: 3px;--padding-start: 3px;--padding-top: 3px;margin:0}app-counter-input .counter-value{color:var(--counter-color);margin:0 10px}app-counter-input:not([basic]) .button-outer{width:var(--counter-size)}app-counter-input:not([basic]) .button-outer .button-wrapper{display:block;overflow:hidden;position:relative;width:100%;padding-bottom:100%}app-counter-input:not([basic]) .button-outer .button-wrapper .counter-icon{position:absolute;top:0px;bottom:0px;left:0px;right:0px;height:auto;width:100%}app-counter-input[basic]{--counter-border-radius-outer: 12px;--counter-border-radius-inner: 0px}app-counter-input[basic] .counter-value{display:none}app-counter-input[basic] .button-outer:first-child ion-button.counter-icon{--border-radius: var(--counter-border-radius-outer) var(--counter-border-radius-inner) var(--counter-border-radius-inner) var(--counter-border-radius-outer)}app-counter-input[basic] .button-outer:last-child{margin-left:-1px}app-counter-input[basic] .button-outer:last-child ion-button.counter-icon{--border-radius: var(--counter-border-radius-inner) var(--counter-border-radius-outer) var(--counter-border-radius-outer) var(--counter-border-radius-inner)}\n"],encapsulation:2}),n})();const I=function(){return{w:1,h:1}};function F(n,s){if(1&n&&(t.TgZ(0,"ion-col",27),t.TgZ(1,"app-aspect-ratio",28),t._UZ(2,"app-image-shell",29),t.qZA(),t.qZA()),2&n){const e=t.oxw().$implicit,o=t.oxw(2);t.xp6(1),t.Q6J("ratio",t.DdM(3,I)),t.xp6(1),t.Q6J("src",o.apifoto+e.foto1)("alt","user image")}}function J(n,s){if(1&n){const e=t.EpF();t.TgZ(0,"ion-col",30),t.TgZ(1,"app-counter-input",31),t.NdJ("click",function(i){t.CHM(e);const c=t.oxw().$implicit;return t.oxw(2).masprod(c,i)}),t._uU(2,"5"),t.qZA(),t.qZA()}}function N(n,s){if(1&n){const e=t.EpF();t.TgZ(0,"ion-item",17),t.TgZ(1,"ion-row",18),t.NdJ("click",function(){const i=t.CHM(e),c=i.index,d=i.$implicit;return t.oxw(2).damenu(c,d)}),t.YNc(2,F,3,4,"ion-col",19),t.TgZ(3,"ion-col",20),t.NdJ("click",function(){const i=t.CHM(e),c=i.index,d=i.$implicit;return t.oxw(2).damenu(c,d)}),t.TgZ(4,"div",21),t.TgZ(5,"ion-badge",22),t._uU(6),t.qZA(),t.TgZ(7,"h3",23),t._UZ(8,"app-text-shell",24),t.qZA(),t.qZA(),t.qZA(),t.YNc(9,J,3,0,"ion-col",25),t._UZ(10,"ion-col",26),t.qZA(),t.qZA()}if(2&n){const e=s.$implicit,o=t.oxw(2);t.xp6(2),t.Q6J("ngIf","Lista con imagenes"===o.tipovista||"Lista con imagenes sin cobro al inicio"===o.tipovista),t.xp6(4),t.Oqu(null==e?null:e.subcategoria.nombre),t.xp6(2),t.Q6J("data",e.nombre+" "+e.xunidad+" "+e.unidad),t.xp6(1),t.Q6J("ngIf","Lista con imagenes sin cobro al inicio"!==o.tipovista)}}function S(n,s){if(1&n&&(t.TgZ(0,"ion-list",15),t.YNc(1,N,11,4,"ion-item",16),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",e.itemsList)("ngForTrackBy",e.trackItems)}}let U=(()=>{class n{constructor(e,o,i,c,d,p){this.routerOutlet=e,this.router=o,this.authenticationService=i,this.alertController=c,this.translateService=d,this.modalController=p,this.showAgeFilter=!1,this.showmenu=!1,this.items=[],this.variables=[],this.userinfo=[],this.viewType="grid",this.tituloxx="",this.efecto=0,this.seguro="",this.msg="",this.sienvio=!1,this.currentSegment="Todos",this.searchSubject=new Z.t(1),this.apifoto=this.authenticationService.getapifoto()}ngOnInit(){this.variables=this.router.getCurrentNavigation().extras.state.variables,this.llave=this.router.getCurrentNavigation().extras.state.llave0,this.categoria=this.router.getCurrentNavigation().extras.state.categoria,this.tipovista=this.router.getCurrentNavigation().extras.state.tipovista,this.sienvio=this.router.getCurrentNavigation().extras.state.sienvio,this.moneda=this.router.getCurrentNavigation().extras.state.moneda,this.userinfo=this.authenticationService.getcopiauser(),this.tituloxx=this.router.getCurrentNavigation().extras.state.titulo,this.searchQuery="",this.translateService.get("SEGUROM").subscribe(e=>{this.seguro=e}),this.translateService.get("MSGM").subscribe(e=>{this.msg=e}),this.cartItemCount=this.authenticationService.getCartItemCount(),this.pideregistros()}pideregistros0(){this.pideregistros()}pideregistros(){this.itemsList=[],this.efecto=0,this.authenticationService.getReg("todosproductos/Activo/"+this.userinfo[0].idempresa._id+"/"+this.llave+"\xb0"+this.categoria,"productos",0).then(e=>{this.efecto=1,this.items=e,this.itemsList=this.items},e=>{this.authenticationService.presentAlert(e.error,this.msg,"")})}trackItems(e,o){return o.id}searchList(){this.itemsList=this.filterList(this.items,this.searchQuery&&null!==this.searchQuery?this.searchQuery:"")}filterList(e,o){return e.filter(i=>i.nombre.toLowerCase().includes(o.toLowerCase()))}loadData(e){setTimeout(()=>{e.target.complete(),1e3===this.items.length&&(e.target.disabled=!0)},500)}masprod(e,o){return(0,_.mG)(this,void 0,void 0,function*(){this.authenticationService.addProduct({idproveedor:this.llave,id:e._id,name:e.nombre+" "+e.xunidad+" "+e.unidad,price:e.precio,amount:1,rate:""})})}openCart(){return(0,_.mG)(this,void 0,void 0,function*(){const e=yield this.modalController.create({component:O.b,animated:!0,componentProps:{sienvio:this.sienvio,moneda:this.moneda,nombre:this.userinfo[0].nombre,direccion:this.userinfo[0].direccion,telefono:this.userinfo[0].telefono,correo:this.userinfo[0].correo},presentingElement:yield this.modalController.getTop(),cssClass:"modal-fullscreen"});return e.onWillDismiss().then(o=>{}),yield e.present()})}damenu(e,o){this.router.navigate(["producto-detalle1"],{state:{variables:this.variables,user:"this.username",llave:o._id,sienvio:this.sienvio,llave0:this.llave,tipovista:this.tipovista,moneda:this.moneda,data:o,titulo:"Producto "+o.nombre}})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(r.jP),t.Y36(h.F0),t.Y36(x.$),t.Y36(r.Br),t.Y36(g.sK),t.Y36(r.IN))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-producto-compra2"]],viewQuery:function(e,o){if(1&e&&t.Gf(r.ju,5),2&e){let i;t.iGM(i=t.CRH())&&(o.infiniteScroll=i.first)}},decls:22,vars:9,consts:[["color","primary"],["slot","start"],["defaultHref","ProvidesPage"],["size","small"],[1,"filters-toolbar"],["align-items-center","",1,"searchbar-row"],["animated","",3,"ngModel","placeholder","ngModelChange","ionChange"],[1,"call-to-action-col"],[1,"fashion-listing-content"],["horizontal","end","vertical","top","slot","fixed","edge",""],["color","tw_botton1",2,"height","50px","width","50px",3,"click"],["cart",""],[1,"cart-length"],["name","cart",1,"cart-icon"],["class","friends-list",4,"ngIf"],[1,"friends-list"],["class","friend-item",4,"ngFor","ngForOf","ngForTrackBy"],[1,"friend-item"],[1,"user-details-section",3,"click"],["class","user-image-wrapper","size","1",4,"ngIf"],[1,"user-data-wrapper",3,"click"],[1,"user-info"],["color","secondary"],[1,"user-name"],[3,"data"],["class","user-image-wrapper","size","3",4,"ngIf"],["size","0.5",1,"user-image-wrapper"],["size","1",1,"user-image-wrapper"],[3,"ratio"],[1,"notification-image",3,"src","alt"],["size","3",1,"user-image-wrapper"],["min","0","max","100",3,"click"]],template:function(e,o){1&e&&(t.TgZ(0,"ion-header"),t.TgZ(1,"ion-toolbar",0),t.TgZ(2,"ion-buttons",1),t._UZ(3,"ion-back-button",2),t.qZA(),t.TgZ(4,"ion-title",3),t._uU(5),t.qZA(),t.qZA(),t.TgZ(6,"ion-toolbar",4),t.TgZ(7,"ion-row",5),t.TgZ(8,"ion-col"),t.TgZ(9,"ion-searchbar",6),t.NdJ("ngModelChange",function(c){return o.searchQuery=c})("ionChange",function(){return o.searchList()}),t.ALo(10,"translate"),t.qZA(),t.qZA(),t._UZ(11,"ion-col",7),t.qZA(),t.qZA(),t.qZA(),t.TgZ(12,"ion-content",8),t.TgZ(13,"ion-fab",9),t.TgZ(14,"ion-fab-button",10,11),t.NdJ("click",function(){return o.openCart()}),t.TgZ(16,"div",12),t._uU(17),t.ALo(18,"async"),t.qZA(),t._UZ(19,"ion-icon",13),t.qZA(),t.qZA(),t._UZ(20,"br"),t.YNc(21,S,2,2,"ion-list",14),t.qZA()),2&e&&(t.xp6(5),t.Oqu(o.tituloxx),t.xp6(4),t.s9C("placeholder",t.lcZ(10,5,"BUSCARM")),t.Q6J("ngModel",o.searchQuery),t.xp6(8),t.Oqu(t.lcZ(18,7,o.cartItemCount)),t.xp6(4),t.Q6J("ngIf",o.itemsList.length>0))},directives:[r.Gu,r.sr,r.Sm,r.oU,r.cs,r.wd,r.Nd,r.wI,r.VI,r.j9,u.JJ,u.On,r.W2,r.IJ,r.W4,r.gu,l.O5,r.q_,l.sg,r.Ie,r.yp,y.$,T.m,w.U,k],pipes:[g.X$,l.Ov],styles:[".ios[_nghost-%COMP%]   .user-friends-segment[_ngcontent-%COMP%], .ios   [_nghost-%COMP%]   .user-friends-segment[_ngcontent-%COMP%]{--background: var(--page-segment-background);padding:var(--page-margin)}.ios[_nghost-%COMP%]   .user-friends-segment[_ngcontent-%COMP%]   ion-segment-button[_ngcontent-%COMP%], .ios   [_nghost-%COMP%]   .user-friends-segment[_ngcontent-%COMP%]   ion-segment-button[_ngcontent-%COMP%]{--color-checked: var(--ion-color-light)}.ios[_nghost-%COMP%]   ion-searchbar.friends-searchbar[_ngcontent-%COMP%], .ios   [_nghost-%COMP%]   ion-searchbar.friends-searchbar[_ngcontent-%COMP%]{padding-top:0}.md[_nghost-%COMP%]   .user-details-section[_ngcontent-%COMP%]   .user-actions-wrapper[_ngcontent-%COMP%], .md   [_nghost-%COMP%]   .user-details-section[_ngcontent-%COMP%]   .user-actions-wrapper[_ngcontent-%COMP%]{max-width:12ex;max-width:12ch}.md[_nghost-%COMP%]   .user-details-section[_ngcontent-%COMP%]   .counter-value[_ngcontent-%COMP%], .md   [_nghost-%COMP%]   .user-details-section[_ngcontent-%COMP%]   .counter-value[_ngcontent-%COMP%]{text-align:center;color:var(--ion-color-primary)}.md[_nghost-%COMP%]   .user-details-section[_ngcontent-%COMP%]   app-counter-input[_ngcontent-%COMP%], .md   [_nghost-%COMP%]   .user-details-section[_ngcontent-%COMP%]   app-counter-input[_ngcontent-%COMP%]{--counter-background: transparent;--counter-color: var(--ion-color-primary);--counter-border-color: var(--ion-color-primary)}.md[_nghost-%COMP%]   .user-friends-segment[_ngcontent-%COMP%]   ion-segment-button[_ngcontent-%COMP%], .md   [_nghost-%COMP%]   .user-friends-segment[_ngcontent-%COMP%]   ion-segment-button[_ngcontent-%COMP%]{--color-checked: var(--ion-color-dark)}[_nghost-%COMP%]{--page-margin: var(--app-narrow-margin);--page-border-radius: var(--app-fair-radius);--page-segment-background: var(--app-background);--page-segment-indicator-height: 2px}.user-friends-segment[_ngcontent-%COMP%]{--background: var(--page-segment-background);position:-webkit-sticky;position:sticky;top:0;z-index:8}.user-friends-segment[_ngcontent-%COMP%]   ion-segment-button[_ngcontent-%COMP%]{--padding-end: var(--page-margin);--padding-start: var(--page-margin);--color: rgba(var(--ion-color-dark-rgb), .4);--indicator-color: var(--ion-color-dark);text-transform:capitalize;min-height:calc(var(--page-margin) * 3 - var(--page-segment-indicator-height))}ion-searchbar.friends-searchbar[_ngcontent-%COMP%]{padding:calc(var(--page-margin) * 1.5) var(--page-margin)}.friends-list[_ngcontent-%COMP%]{padding:0px var(--page-margin);margin-bottom:calc(var(--page-margin) * 3)}.empty-list-message[_ngcontent-%COMP%]{margin:calc(var(--page-margin) * 3);color:rgba(var(--ion-color-dark-rgb),.4);text-align:center}ion-item.friend-item[_ngcontent-%COMP%]{--inner-padding-start: 0px;--inner-padding-end: 0px;--padding-start: 0px;--padding-end: 0px;--padding-bottom: var(--page-margin);--inner-padding-bottom: var(--page-margin)}ion-item.friend-item[_ngcontent-%COMP%]:last-child{--border-style: none;--padding-bottom: 0px;--inner-padding-bottom: 0px}ion-item.friend-item[_ngcontent-%COMP%]   .user-details-section[_ngcontent-%COMP%]{--ion-grid-column-padding: 0px;width:100%;align-items:center}ion-item.friend-item[_ngcontent-%COMP%]   .user-details-section[_ngcontent-%COMP%]   .user-data-wrapper[_ngcontent-%COMP%]{padding-left:var(--page-margin);padding-right:calc(var(--page-margin) / 2);display:flex;flex-direction:column;justify-content:center}ion-item.friend-item[_ngcontent-%COMP%]   .user-details-section[_ngcontent-%COMP%]   .user-data-wrapper[_ngcontent-%COMP%]   .counter-value[_ngcontent-%COMP%]{text-align:left;color:var(--ion-color-secondary)}ion-item.friend-item[_ngcontent-%COMP%]   .user-details-section[_ngcontent-%COMP%]   .user-data-wrapper[_ngcontent-%COMP%]   app-counter-input[_ngcontent-%COMP%]{--counter-background: transparent;--counter-color: var(--ion-color-secondary);--counter-border-color: var(--ion-color-secondary);text-align:left}ion-item.friend-item[_ngcontent-%COMP%]   .user-details-section[_ngcontent-%COMP%]   .user-data-wrapper[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]:not(:last-child){margin-bottom:calc(var(--page-margin) / 2)}ion-item.friend-item[_ngcontent-%COMP%]   .user-details-section[_ngcontent-%COMP%]   .user-data-wrapper[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%]{margin:0 0 4px;font-size:16px}ion-item.friend-item[_ngcontent-%COMP%]   .user-details-section[_ngcontent-%COMP%]   .user-data-wrapper[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-job[_ngcontent-%COMP%]{margin:0;color:rgba(var(--ion-color-dark-rgb),.4);font-size:14px}ion-item.friend-item[_ngcontent-%COMP%]   .user-details-section[_ngcontent-%COMP%]   .user-actions-wrapper[_ngcontent-%COMP%]{font-size:14px;max-width:10ex;max-width:10ch}ion-item.friend-item[_ngcontent-%COMP%]   .user-details-section[_ngcontent-%COMP%]   .user-actions-wrapper[_ngcontent-%COMP%]   .user-action[_ngcontent-%COMP%]{margin:0}app-image-shell.user-image[_ngcontent-%COMP%]{--image-shell-border-radius: var(--page-border-radius)}.user-name[_ngcontent-%COMP%] > app-text-shell[_ngcontent-%COMP%]{--text-shell-line-height: 16px;max-width:50%}.user-name[_ngcontent-%COMP%] > app-text-shell.text-loaded[_ngcontent-%COMP%]{max-width:unset}.user-job[_ngcontent-%COMP%] > app-text-shell[_ngcontent-%COMP%]{--text-shell-line-height: 14px;max-width:70%}.user-job[_ngcontent-%COMP%] > app-text-shell.text-loaded[_ngcontent-%COMP%]{max-width:unset}app-image-shell.notification-image[_ngcontent-%COMP%]{--image-shell-border-radius: 75%}"]}),n})(),q=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[l.ez,u.u5,r.Pc,g.aw.forChild(),P.K,b,v.YL,M.D,h.Bz.forChild([{path:"",component:U}]),C.K]]}),n})()}}]);