"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[5392],{15392:(y,m,r)=>{r.r(m),r.d(m,{ProvidesPageModule:()=>w});var e=r(23349),h=r(55787),g=r(69808),u=r(33678),d=r(51062),p=r(93075),P=r(68554),C=r(4707),t=r(5e3),M=r(89330),v=r(71408),O=r(94840);const b=function(i,c,n,o){return{ended:i,"imminent-end":c,"ends-soon":n,"distant-end":o}},f=function(){return{w:100,h:32}};function x(i,c){if(1&i){const n=t.EpF();t.TgZ(0,"div",10),t.TgZ(1,"ion-row",11),t.TgZ(2,"ion-col",12),t.TgZ(3,"app-aspect-ratio",13),t._UZ(4,"app-image-shell",14),t.qZA(),t.qZA(),t.TgZ(5,"ion-col",15),t.TgZ(6,"ion-button",16),t.NdJ("click",function(){const l=t.CHM(n).$implicit,s=t.oxw();return s.damenu(s.i,l)}),t.TgZ(7,"span",17),t._uU(8,"COMPRAR"),t.qZA(),t._UZ(9,"ion-icon",18),t.qZA(),t.qZA(),t.qZA(),t.TgZ(10,"ion-row",19),t.TgZ(11,"ion-col",20),t.TgZ(12,"h4",21),t.TgZ(13,"a",22),t._UZ(14,"app-text-shell",23),t.qZA(),t.qZA(),t.TgZ(15,"p",24),t._UZ(16,"app-text-shell",25),t.qZA(),t.qZA(),t.qZA(),t.qZA()}if(2&i){const n=c.$implicit,o=t.oxw();t.Q6J("ngClass",t.l5B(6,b,!1,!0,!0,!1)),t.xp6(3),t.Q6J("ratio",t.DdM(11,f)),t.xp6(1),t.Q6J("src",o.apifoto+n.foto)("alt","deals logo"),t.xp6(10),t.Q6J("data",n.nombre),t.xp6(2),t.Q6J("data",n.msmpublicidad)}}let _=(()=>{class i{constructor(n,o,a,l,s,Z){this.routerOutlet=n,this.router=o,this.authenticationService=a,this.alertController=l,this.translateService=s,this.modalController=Z,this.showAgeFilter=!1,this.showmenu=!1,this.items=[],this.variables=[],this.userinfo=[],this.viewType="grid",this.tituloxx="",this.efecto=0,this.seguro="",this.msg="",this.currentSegment="Todos",this.searchSubject=new C.t(1),this.apifoto=this.authenticationService.getapifoto()}ngOnInit(){this.userinfo=this.authenticationService.getcopiauser(),this.logo1=this.authenticationService.dalogo1(this.userinfo),this.variables=null,this.tituloxx="Tiendas",this.searchQuery="",this.translateService.get("SEGUROM").subscribe(n=>{this.seguro=n}),this.translateService.get("MSGM").subscribe(n=>{this.msg=n}),this.pideregistros()}pideregistros0(){this.pideregistros()}pideregistros(){this.itemsList=[],this.efecto=0;let n="";n="Asociadoadmin"===this.userinfo[0].role?"todos/Activo/"+this.userinfo[0].idempresa._id+"/"+this.userinfo[0].email:"todos/Activo/"+this.userinfo[0].idempresa._id,this.authenticationService.getReg(n,"asociados",0).then(o=>{this.efecto=1,this.items=o,this.itemsList=this.items},o=>{this.authenticationService.presentAlert(o.error,this.msg,"")})}trackItems(n,o){return o.id}searchList(){this.itemsList=this.filterList(this.items,this.searchQuery&&null!==this.searchQuery?this.searchQuery:"")}filterList(n,o){return n.filter(a=>a.nombre.toLowerCase().includes(o.toLowerCase()))}loadData(n){setTimeout(()=>{n.target.complete(),1e3===this.items.length&&(n.target.disabled=!0)},500)}damenu(n,o){this.router.navigate(["categoria-list"],{state:{variables:this.variables,user:"this.username",llave:o._id,tipovista:o.tipovista,moneda:o.moneda,sienvio:o.sienvio,titulo:"Categorias "+o.nombre}})}}return i.\u0275fac=function(n){return new(n||i)(t.Y36(e.jP),t.Y36(h.F0),t.Y36(P.$),t.Y36(e.Br),t.Y36(d.sK),t.Y36(e.IN))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-provides"]],viewQuery:function(n,o){if(1&n&&t.Gf(e.ju,5),2&n){let a;t.iGM(a=t.CRH())&&(o.infiniteScroll=a.first)}},decls:16,vars:7,consts:[["color","primary"],["slot","start"],["collapse","true","slot","end"],["alt","logo","id","header_logo","height","33",3,"src"],["size","small"],[1,"filters-toolbar"],["align-items-center","",1,"searchbar-row"],["animated","",3,"ngModel","placeholder","ngModelChange","ionChange"],[1,"deals-listing-content"],["class","listing-item",3,"ngClass",4,"ngFor","ngForOf"],[1,"listing-item",3,"ngClass"],[1,"top-row"],["size","6",1,"logo-col"],[3,"ratio"],["animation","spinner",1,"deal-logo",3,"src","alt"],[1,"call-to-action-col"],["expand","block","color","claim",1,"claim-button",3,"click"],[1,"button-cta"],["slot","end","name","arrow-forward"],[1,"middle-row"],[1,"info-col"],[1,"item-name"],[1,"name-anchor"],["animation","bouncing",3,"data"],[1,"item-description"],["animation","bouncing","lines","3",3,"data"]],template:function(n,o){1&n&&(t.TgZ(0,"ion-header"),t.TgZ(1,"ion-toolbar",0),t.TgZ(2,"ion-buttons",1),t._UZ(3,"ion-menu-button"),t.qZA(),t.TgZ(4,"ion-buttons",2),t._UZ(5,"ion-button"),t._UZ(6,"img",3),t.qZA(),t.TgZ(7,"ion-title",4),t._uU(8),t.qZA(),t.qZA(),t.TgZ(9,"ion-toolbar",5),t.TgZ(10,"ion-row",6),t.TgZ(11,"ion-col"),t.TgZ(12,"ion-searchbar",7),t.NdJ("ngModelChange",function(l){return o.searchQuery=l})("ionChange",function(){return o.searchList()}),t.ALo(13,"translate"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(14,"ion-content",8),t.YNc(15,x,17,12,"div",9),t.qZA()),2&n&&(t.xp6(6),t.Q6J("src",o.apifoto+o.logo1,t.LSH),t.xp6(2),t.hij(" ",o.tituloxx," "),t.xp6(4),t.s9C("placeholder",t.lcZ(13,5,"BUSCARM")),t.Q6J("ngModel",o.searchQuery),t.xp6(3),t.Q6J("ngForOf",o.itemsList))},directives:[e.Gu,e.sr,e.Sm,e.fG,e.YG,e.wd,e.Nd,e.wI,e.VI,e.j9,p.JJ,p.On,e.W2,g.sg,g.mk,M.m,v.U,e.gu,O.$],pipes:[d.X$],styles:[".ios[_nghost-%COMP%]   .claim-button[_ngcontent-%COMP%], .ios   [_nghost-%COMP%]   .claim-button[_ngcontent-%COMP%]{height:2.2em}[_nghost-%COMP%]{--shell-color: #00AFFF;--shell-color-rgb: 93,202,252}[_nghost-%COMP%]{--page-margin: var(--app-broad-margin);--page-background: var(--app-background-shade);--page-countdown-fill-shadow-color: rgba(var(--ion-color-darkest-rgb), .2);--page-item-shadow-color: rgba(var(--ion-color-dark-rgb), .1);--page-deal-code-height: 30px;--page-countdown-gutter: 3px;--page-expired-color: var(--ion-color-medium-tint);--page-ends-soon-color:#00AFFF;--page-deal-color: var(--ion-color-medium);--page-deal-border-color: var(--ion-color-light-shade);--ion-color-claim: #00AFFF;--ion-color-claim-rgb: 112,223,112;--ion-color-claim-contrast: #FFFFFF;--ion-color-claim-contrast-rgb: 255,255,255;--ion-color-claim-shade: #00AFFF;--ion-color-claim-tint:#00AFFF}[_nghost-%COMP%]   .ion-color-claim[_ngcontent-%COMP%]{--ion-color-base: var(--ion-color-claim) !important;--ion-color-base-rgb: var(--ion-color-claim-rgb) !important;--ion-color-contrast: var(--ion-color-claim-contrast) !important;--ion-color-contrast-rgb: var(--ion-color-claim-contrast-rgb) !important;--ion-color-shade: var(--ion-color-claim-shade) !important;--ion-color-tint: var(--ion-color-claim-tint) !important}.deals-listing-content[_ngcontent-%COMP%]{--background: var(--page-background)}.listing-item[_ngcontent-%COMP%]{background-color:var(--ion-color-lightest);margin:var(--page-margin);border-radius:var(--app-fair-radius);box-shadow:1px 1px 4px 1px var(--page-item-shadow-color);border-bottom-style:solid;border-bottom-width:calc(var(--page-margin) / 2 * 3);border-bottom-color:var(--page-deal-border-color)}.listing-item.ended[_ngcontent-%COMP%]{--page-deal-color: var(--page-expired-color);--page-deal-border-color: var(--page-expired-color);border-bottom-style:none}.listing-item.imminent-end[_ngcontent-%COMP%]{--page-deal-color: var(--page-ends-soon-color);--page-deal-border-color: var(--page-distant-end-color)}.listing-item.ends-soon[_ngcontent-%COMP%]{--page-deal-color: var(--page-ends-soon-color);--page-deal-border-color: var(--page-ends-soon-color);border-bottom-style:none}.listing-item.distant-end[_ngcontent-%COMP%]{--page-deal-color: var(--page-distant-end-color);--page-deal-border-color: var(--page-distant-end-color);border-bottom-style:none}.listing-item[_ngcontent-%COMP%]   .top-row[_ngcontent-%COMP%]{--ion-grid-column-padding: 0px;border-bottom:2px dashed rgba(var(--ion-color-dark-rgb),.1);padding:calc(var(--page-margin) / 2);justify-content:space-between;align-items:center}.listing-item[_ngcontent-%COMP%]   .top-row[_ngcontent-%COMP%]   .logo-col[_ngcontent-%COMP%]{align-self:center}.listing-item[_ngcontent-%COMP%]   .top-row[_ngcontent-%COMP%]   .call-to-action-col[_ngcontent-%COMP%]{flex-grow:0}.listing-item[_ngcontent-%COMP%]   .top-row[_ngcontent-%COMP%]   .call-to-action-col[_ngcontent-%COMP%]   .expired-cta[_ngcontent-%COMP%]{color:var(--page-expired-color);font-size:16px;font-weight:600;letter-spacing:.8px}.listing-item[_ngcontent-%COMP%]   .top-row[_ngcontent-%COMP%]   .call-to-action-col[_ngcontent-%COMP%]   .claim-button[_ngcontent-%COMP%]{--box-shadow: none;--border-radius: var(--app-fair-radius);margin:0}.listing-item[_ngcontent-%COMP%]   .top-row[_ngcontent-%COMP%]   .call-to-action-col[_ngcontent-%COMP%]   .claim-button[_ngcontent-%COMP%]:focus{outline:none}.listing-item[_ngcontent-%COMP%]   .top-row[_ngcontent-%COMP%]   .call-to-action-col[_ngcontent-%COMP%]   .claim-button[_ngcontent-%COMP%]   .button-cta[_ngcontent-%COMP%]{display:block;line-height:18px;font-size:16px;font-weight:600}.listing-item[_ngcontent-%COMP%]   .top-row[_ngcontent-%COMP%]   .call-to-action-col[_ngcontent-%COMP%]   .claim-button[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:18px}.listing-item[_ngcontent-%COMP%]   .middle-row[_ngcontent-%COMP%]{--ion-grid-column-padding: 0px;padding:calc(var(--page-margin) / 2);padding-bottom:var(--page-margin)}.listing-item[_ngcontent-%COMP%]   .middle-row[_ngcontent-%COMP%]   .info-col[_ngcontent-%COMP%]{padding-right:calc(var(--page-margin) / 2)}.listing-item[_ngcontent-%COMP%]   .middle-row[_ngcontent-%COMP%]   .item-name[_ngcontent-%COMP%]{margin:0;margin-bottom:calc(var(--page-margin) / 2);color:var(--ion-color-dark-tint);font-size:16px}.listing-item[_ngcontent-%COMP%]   .middle-row[_ngcontent-%COMP%]   .item-name[_ngcontent-%COMP%]   .name-anchor[_ngcontent-%COMP%]{display:block;text-decoration:none}.listing-item[_ngcontent-%COMP%]   .middle-row[_ngcontent-%COMP%]   .item-description[_ngcontent-%COMP%]{margin:0;color:var(--ion-color-medium-tint);font-size:14px}.listing-item[_ngcontent-%COMP%]   .middle-row[_ngcontent-%COMP%]   .bookmark-button[_ngcontent-%COMP%]{--padding-start: 5px;--padding-end: 5px;margin:0;font-size:16px}.listing-item[_ngcontent-%COMP%]   .bottom-row[_ngcontent-%COMP%]{--ion-grid-column-padding: 0px;padding:0px calc(var(--page-margin) / 2) calc(var(--page-margin) / 2);justify-content:space-between}.listing-item[_ngcontent-%COMP%]   .bottom-row[_ngcontent-%COMP%]   .code-wrapper[_ngcontent-%COMP%]{max-width:-webkit-fit-content;max-width:-moz-fit-content;max-width:fit-content}.listing-item[_ngcontent-%COMP%]   .bottom-row[_ngcontent-%COMP%]   .code-wrapper[_ngcontent-%COMP%]   .code-cta[_ngcontent-%COMP%]{font-size:12px;font-weight:500;margin-bottom:5px;display:block}.listing-item[_ngcontent-%COMP%]   .bottom-row[_ngcontent-%COMP%]   .code-wrapper[_ngcontent-%COMP%]   .item-code[_ngcontent-%COMP%]{height:var(--page-deal-code-height);text-transform:uppercase;padding:calc(var(--page-margin) / 4) calc(var(--page-margin) / 2);border:2px solid var(--page-color);font-size:12px;font-weight:500;line-height:1;border-radius:calc(var(--page-deal-code-height) / 2);display:flex;align-items:center;justify-content:center}.listing-item[_ngcontent-%COMP%]   .bottom-row[_ngcontent-%COMP%]   .code-wrapper[_ngcontent-%COMP%]   .item-code.expired[_ngcontent-%COMP%]{border-color:var(--page-expired-color);color:var(--page-expired-color);opacity:.6}.listing-item[_ngcontent-%COMP%]   .bottom-row[_ngcontent-%COMP%]   .time-left-wrapper[_ngcontent-%COMP%]{flex-shrink:0;max-width:-webkit-fit-content;max-width:-moz-fit-content;max-width:fit-content;display:flex;flex-direction:column;justify-content:space-between;align-items:flex-end}.listing-item[_ngcontent-%COMP%]   .bottom-row[_ngcontent-%COMP%]   .time-left-wrapper[_ngcontent-%COMP%]   .expiration-cta[_ngcontent-%COMP%]{font-size:12px;font-weight:500;margin-bottom:5px;display:block;text-transform:uppercase;text-align:end}.listing-item[_ngcontent-%COMP%]   .bottom-row[_ngcontent-%COMP%]   .time-left-wrapper[_ngcontent-%COMP%]:not(.countdown-active)   .item-time-left[_ngcontent-%COMP%]{color:var(--page-deal-color);font-size:14px;font-weight:500;display:block;text-align:end}.listing-item[_ngcontent-%COMP%]   .bottom-row[_ngcontent-%COMP%]   .time-left-wrapper.countdown-active[_ngcontent-%COMP%]{display:block;position:relative}.listing-item[_ngcontent-%COMP%]   .bottom-row[_ngcontent-%COMP%]   .time-left-wrapper.countdown-active[_ngcontent-%COMP%]   .countdown-wrapper[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:flex-end;position:absolute;right:0px}.listing-item[_ngcontent-%COMP%]   .bottom-row[_ngcontent-%COMP%]   .time-left-wrapper.countdown-active[_ngcontent-%COMP%]   .countdown-wrapper[_ngcontent-%COMP%]   app-countdown-timer.item-countdown[_ngcontent-%COMP%]{--countdown-time-margin: 0px;--countdown-time-padding: 0px;--countdown-inner-time-margin: var(--page-countdown-gutter) var(--page-countdown-gutter) 0px;--countdown-inner-time-padding: calc(var(--page-margin) / 2) calc(var(--page-margin) / 4);--countdown-fill-border: none;--countdown-fill-border-radius: var(--app-narrow-radius);--countdown-fill-background: var(--ion-color-lightest);--countdown-fill-shadow: 0px 0px 5px 0px var(--page-countdown-fill-shadow-color);--countdown-value-color: var(--ion-color-darkest);--countdown-unit-color: var(--ion-color-medium-shade);--countdown-time-flex-direction: column;font-weight:500;font-size:14px;margin-right:calc(var(--page-countdown-gutter) * -1)}.is-shell[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]{opacity:.8}app-image-shell.deal-logo[_ngcontent-%COMP%]{--image-shell-loading-background: rgba(var(--shell-color-rgb), .1);--image-shell-spinner-color: rgba(var(--shell-color-rgb), .3);--image-shell-spinner-size: 18px}.item-name[_ngcontent-%COMP%]   app-text-shell[_ngcontent-%COMP%]{--text-shell-line-color: rgba(var(--shell-color-rgb), .3);--text-shell-line-height: 16px}.item-description[_ngcontent-%COMP%] > app-text-shell[_ngcontent-%COMP%]{--text-shell-line-color: rgba(var(--shell-color-rgb), .2);--text-shell-line-height: 14px}.item-code[_ngcontent-%COMP%] > app-text-shell[_ngcontent-%COMP%]{--text-shell-line-color: rgba(var(--shell-color-rgb), .15);--text-shell-line-height: 14px;min-width:60px}.item-code[_ngcontent-%COMP%] > app-text-shell.text-loaded[_ngcontent-%COMP%]{min-width:0px}.item-time-left[_ngcontent-%COMP%] > app-text-shell[_ngcontent-%COMP%]{--text-shell-line-color: rgba(var(--shell-color-rgb), .1);--text-shell-line-height: 14px;min-width:60px}.item-time-left[_ngcontent-%COMP%] > app-text-shell.text-loaded[_ngcontent-%COMP%]{min-width:0px}"]}),i})(),w=(()=>{class i{}return i.\u0275fac=function(n){return new(n||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[[g.ez,p.u5,e.Pc,d.aw.forChild(),h.Bz.forChild([{path:"",component:_}]),u.K]]}),i})()}}]);