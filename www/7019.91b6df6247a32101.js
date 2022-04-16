"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[7019],{47019:(_,l,r)=>{r.r(l),r.d(l,{GettingStartedPageModule:()=>P});var h=r(69808),i=r(93075),p=r(55787),e=r(23349),u=r(33678),t=r(5e3);const m=["*"];let Z=(()=>{class o{constructor(){}ngAfterContentInit(){this.isChecked=this.checkbox.checked,this.checkbox.ionChange.subscribe(n=>{this.isChecked=n.detail.checked})}}return o.\u0275fac=function(n){return new(n||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-checkbox-wrapper"]],contentQueries:function(n,a,c){if(1&n&&t.Suo(c,e.nz,5),2&n){let d;t.iGM(d=t.CRH())&&(a.checkbox=d.first)}},hostVars:2,hostBindings:function(n,a){2&n&&t.ekj("checkbox-checked",a.isChecked)},ngContentSelectors:m,decls:1,vars:0,template:function(n,a){1&n&&(t.F$t(),t.Hsn(0))},styles:["[_nghost-%COMP%]{display:block}"]}),o})();var b=r(71408),C=r(89330);const w=function(){return["/auth/login"]},g=function(){return{w:1,h:1}},x=function(){return["/auth/signup"]},M=[{path:"",component:(()=>{class o{constructor(n){this.menu=n,this.isLastSlide=!1,this.gettingStartedForm=new i.cw({browsingCategory:new i.NI("men"),followingInterests:new i.cw({tops:new i.NI(!0),dresses:new i.NI,jeans:new i.NI,jackets:new i.NI(!0),shoes:new i.NI,glasses:new i.NI})})}ionViewDidEnter(){this.menu.enable(!1)}ionViewDidLeave(){this.menu.enable(!0)}ngAfterViewInit(){this.slides.isEnd().then(n=>{this.isLastSlide=n}),this.slides.ionSlideWillChange.subscribe(n=>{this.slides.isEnd().then(a=>{this.isLastSlide=a})})}}return o.\u0275fac=function(n){return new(n||o)(t.Y36(e._q))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-getting-started"]],viewQuery:function(n,a){if(1&n&&t.Gf(e.Hr,7),2&n){let c;t.iGM(c=t.CRH())&&(a.slides=c.first)}},hostVars:2,hostBindings:function(n,a){2&n&&t.ekj("last-slide-active",a.isLastSlide)},decls:93,vars:29,consts:[[1,"ion-no-border"],["collapse","true","slot","end"],["fill","clear",1,"skip-getting-started-button",3,"routerLink"],[1,"getting-started-form",3,"formGroup"],["pager","true",1,"getting-started-slides"],[1,"browsing-categories-slide","question-slide"],[1,"slide-inner-row"],["size","12",1,"question-options-col"],[1,"slide-title"],[1,"question-options-list"],["formControlName","browsingCategory"],[1,"question-option"],[1,"ion-text-wrap"],["value","woman"],["value","men"],["value","kids"],["value","petit"],["value","plus-size"],["value","new-in"],[1,"interests-to-follow-slide","question-slide"],[1,"heading-col"],[1,"slide-subtitle"],[1,"question-options-col"],["formGroupName","followingInterests",1,"options-list-row"],["size","6"],[1,"custom-checkbox"],["animation","spinner",1,"checkbox-cover","add-overlay",3,"display","src"],[3,"ratio"],[1,"checkbox-title"],["formControlName","tops"],["formControlName","dresses"],["formControlName","jeans"],["formControlName","jackets"],["formControlName","shoes"],["formControlName","glasses"],[1,"call-to-action-col"],["color","secondary","expand","block",1,"signup-button",3,"routerLink"]],template:function(n,a){1&n&&(t.TgZ(0,"ion-header",0),t.TgZ(1,"ion-toolbar"),t.TgZ(2,"ion-buttons",1),t.TgZ(3,"ion-button",2),t._uU(4,"skip"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(5,"ion-content"),t.TgZ(6,"form",3),t.TgZ(7,"ion-slides",4),t.TgZ(8,"ion-slide",5),t.TgZ(9,"ion-row",6),t.TgZ(10,"ion-col",7),t.TgZ(11,"h2",8),t._uU(12,"What are you browsing for?"),t.qZA(),t.TgZ(13,"ion-list",9),t.TgZ(14,"ion-radio-group",10),t.TgZ(15,"ion-item",11),t.TgZ(16,"ion-label",12),t._uU(17,"Woman"),t.qZA(),t._UZ(18,"ion-radio",13),t.qZA(),t.TgZ(19,"ion-item",11),t.TgZ(20,"ion-label",12),t._uU(21,"Men"),t.qZA(),t._UZ(22,"ion-radio",14),t.qZA(),t.TgZ(23,"ion-item",11),t.TgZ(24,"ion-label",12),t._uU(25,"Kids"),t.qZA(),t._UZ(26,"ion-radio",15),t.qZA(),t.TgZ(27,"ion-item",11),t.TgZ(28,"ion-label",12),t._uU(29,"Petit"),t.qZA(),t._UZ(30,"ion-radio",16),t.qZA(),t.TgZ(31,"ion-item",11),t.TgZ(32,"ion-label",12),t._uU(33,"Plus Size"),t.qZA(),t._UZ(34,"ion-radio",17),t.qZA(),t.TgZ(35,"ion-item",11),t.TgZ(36,"ion-label",12),t._uU(37,"New In"),t.qZA(),t._UZ(38,"ion-radio",18),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(39,"ion-slide",19),t.TgZ(40,"ion-row",6),t.TgZ(41,"ion-col",20),t.TgZ(42,"h2",8),t._uU(43,"Pick categories to follow"),t.qZA(),t.TgZ(44,"p",21),t._uU(45," You can add or change them later "),t.qZA(),t.qZA(),t.TgZ(46,"ion-col",22),t.TgZ(47,"ion-row",23),t.TgZ(48,"ion-col",24),t.TgZ(49,"app-checkbox-wrapper",25),t.TgZ(50,"app-image-shell",26),t.TgZ(51,"app-aspect-ratio",27),t.TgZ(52,"span",28),t._uU(53,"Tops"),t.qZA(),t._UZ(54,"ion-checkbox",29),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(55,"ion-col",24),t.TgZ(56,"app-checkbox-wrapper",25),t.TgZ(57,"app-image-shell",26),t.TgZ(58,"app-aspect-ratio",27),t.TgZ(59,"span",28),t._uU(60,"Dresses"),t.qZA(),t._UZ(61,"ion-checkbox",30),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(62,"ion-col",24),t.TgZ(63,"app-checkbox-wrapper",25),t.TgZ(64,"app-image-shell",26),t.TgZ(65,"app-aspect-ratio",27),t.TgZ(66,"span",28),t._uU(67,"Jeans"),t.qZA(),t._UZ(68,"ion-checkbox",31),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(69,"ion-col",24),t.TgZ(70,"app-checkbox-wrapper",25),t.TgZ(71,"app-image-shell",26),t.TgZ(72,"app-aspect-ratio",27),t.TgZ(73,"span",28),t._uU(74,"Jackets"),t.qZA(),t._UZ(75,"ion-checkbox",32),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(76,"ion-col",24),t.TgZ(77,"app-checkbox-wrapper",25),t.TgZ(78,"app-image-shell",26),t.TgZ(79,"app-aspect-ratio",27),t.TgZ(80,"span",28),t._uU(81,"Shoes"),t.qZA(),t._UZ(82,"ion-checkbox",33),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(83,"ion-col",24),t.TgZ(84,"app-checkbox-wrapper",25),t.TgZ(85,"app-image-shell",26),t.TgZ(86,"app-aspect-ratio",27),t.TgZ(87,"span",28),t._uU(88,"Glasses"),t.qZA(),t._UZ(89,"ion-checkbox",34),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(90,"ion-col",35),t.TgZ(91,"ion-button",36),t._uU(92,"Sign Up"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&n&&(t.xp6(3),t.Q6J("routerLink",t.DdM(21,w)),t.xp6(3),t.Q6J("formGroup",a.gettingStartedForm),t.xp6(44),t.Q6J("display","cover")("src","./assets/sample-images/getting-started/category1-1.1.png"),t.xp6(1),t.Q6J("ratio",t.DdM(22,g)),t.xp6(6),t.Q6J("display","cover")("src","./assets/sample-images/getting-started/category2-1.1.png"),t.xp6(1),t.Q6J("ratio",t.DdM(23,g)),t.xp6(6),t.Q6J("display","cover")("src","./assets/sample-images/getting-started/category3-1.1.png"),t.xp6(1),t.Q6J("ratio",t.DdM(24,g)),t.xp6(6),t.Q6J("display","cover")("src","./assets/sample-images/getting-started/category4-1.1.png"),t.xp6(1),t.Q6J("ratio",t.DdM(25,g)),t.xp6(6),t.Q6J("display","cover")("src","./assets/sample-images/getting-started/category5-1.1.png"),t.xp6(1),t.Q6J("ratio",t.DdM(26,g)),t.xp6(6),t.Q6J("display","cover")("src","./assets/sample-images/getting-started/category6-1.1.png"),t.xp6(1),t.Q6J("ratio",t.DdM(27,g)),t.xp6(5),t.Q6J("routerLink",t.DdM(28,x)))},directives:[e.Gu,e.sr,e.Sm,e.YG,e.YI,p.rH,e.W2,i._Y,i.JL,i.sg,e.Hr,e.A$,e.Nd,e.wI,e.q_,e.se,e.QI,i.JJ,i.u,e.Ie,e.Q$,e.B7,e.U5,i.x0,Z,b.U,C.m,e.nz,e.w],styles:["[_nghost-%COMP%]{--page-margin: var(--app-broad-margin);--page-background: var(--app-background-alt);--page-swiper-pagination-space: 40px;--page-swiper-pagination-height: 18px;--page-pagination-bullet-size: 10px;--page-max-heading-height: 16%;--page-max-call-to-actions-height: 10%}[_nghost-%COMP%]{background-color:var(--page-background)}ion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]{--background: var(--page-background)}ion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{--color: var(--ion-color-lightest)}ion-content[_ngcontent-%COMP%]{--background: var(--page-background)}.getting-started-form[_ngcontent-%COMP%]{height:100%}.getting-started-slides[_ngcontent-%COMP%]{--bullet-background: var(--ion-color-light);--bullet-background-active: var(--ion-color-light);height:100%}.getting-started-slides[_ngcontent-%COMP%]   .slide-inner-row[_ngcontent-%COMP%]{--ion-grid-column-padding: 0px;height:100%;width:100%;padding:var(--page-margin);border-bottom:var(--page-swiper-pagination-space) solid transparent;background-clip:padding-box}.question-slide[_ngcontent-%COMP%]   .slide-title[_ngcontent-%COMP%]{color:var(--ion-color-lightest);text-align:center;margin:calc(var(--page-margin) / 2) calc(var(--page-margin) * 2) 0px;font-size:22px;font-weight:400;line-height:30px}.question-slide[_ngcontent-%COMP%]   .slide-subtitle[_ngcontent-%COMP%]{color:var(--ion-color-lightest);text-align:center;margin:calc(var(--page-margin) / 2) var(--page-margin);font-size:14px;font-weight:300;line-height:28px}.browsing-categories-slide[_ngcontent-%COMP%]   .slide-inner-row[_ngcontent-%COMP%]{flex-flow:column;justify-content:space-between}.browsing-categories-slide[_ngcontent-%COMP%]   .question-options-col[_ngcontent-%COMP%]{overflow:scroll;-ms-overflow-style:none;overflow:-moz-scrollbars-none;scrollbar-width:none}.browsing-categories-slide[_ngcontent-%COMP%]   .question-options-col[_ngcontent-%COMP%]::-webkit-scrollbar{display:none}.browsing-categories-slide[_ngcontent-%COMP%]   .question-options-col[_ngcontent-%COMP%]   .question-options-list[_ngcontent-%COMP%]{margin:var(--page-margin) 0px 0px;background:transparent}.browsing-categories-slide[_ngcontent-%COMP%]   .question-options-col[_ngcontent-%COMP%]   .question-options-list[_ngcontent-%COMP%]   .question-option[_ngcontent-%COMP%]{--padding-start: 0px;--ion-item-background: var(--ion-color-lightest);--ion-item-color: var(--ion-color-dark);--inner-border-width: 0px;--inner-padding-end: 0px;text-align:center}.browsing-categories-slide[_ngcontent-%COMP%]   .question-options-col[_ngcontent-%COMP%]   .question-options-list[_ngcontent-%COMP%]   .question-option[_ngcontent-%COMP%]:not(:last-child){margin-bottom:var(--page-margin)}.browsing-categories-slide[_ngcontent-%COMP%]   .question-options-col[_ngcontent-%COMP%]   .question-options-list[_ngcontent-%COMP%]   .question-option.item-radio-checked[_ngcontent-%COMP%]{--ion-item-background: var(--ion-color-secondary);--ion-item-color: var(--ion-color-lightest)}.browsing-categories-slide[_ngcontent-%COMP%]   .question-options-col[_ngcontent-%COMP%]   .question-options-list[_ngcontent-%COMP%]   .question-option[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{margin:calc(var(--page-margin) / 2) 0px}.browsing-categories-slide[_ngcontent-%COMP%]   .question-options-col[_ngcontent-%COMP%]   .question-options-list[_ngcontent-%COMP%]   .question-option[_ngcontent-%COMP%]   ion-radio[_ngcontent-%COMP%]{margin:0;width:0px;--border-width: 0px;height:0px;--color-checked: transparent}.interests-to-follow-slide[_ngcontent-%COMP%]   .slide-inner-row[_ngcontent-%COMP%]{flex-flow:column;justify-content:space-between;border-width:0px}.interests-to-follow-slide[_ngcontent-%COMP%]   .heading-col[_ngcontent-%COMP%]{flex:0 1 auto;max-height:var(--page-max-heading-height);max-height:-webkit-fit-content;max-height:-moz-fit-content;max-height:fit-content}.interests-to-follow-slide[_ngcontent-%COMP%]   .question-options-col[_ngcontent-%COMP%]{overflow:scroll;-ms-overflow-style:none;overflow:-moz-scrollbars-none;scrollbar-width:none}.interests-to-follow-slide[_ngcontent-%COMP%]   .question-options-col[_ngcontent-%COMP%]::-webkit-scrollbar{display:none}.interests-to-follow-slide[_ngcontent-%COMP%]   .question-options-col[_ngcontent-%COMP%]   .options-list-row[_ngcontent-%COMP%]{--ion-grid-column-padding: 0px;padding-top:calc(var(--page-margin) / 4);padding-bottom:calc(var(--page-margin) / 4)}.interests-to-follow-slide[_ngcontent-%COMP%]   .question-options-col[_ngcontent-%COMP%]   .options-list-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]{transform:translateZ(0);padding-top:calc(var(--page-margin) / 4);padding-bottom:calc(var(--page-margin) / 4)}.interests-to-follow-slide[_ngcontent-%COMP%]   .question-options-col[_ngcontent-%COMP%]   .options-list-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]:nth-child(odd){padding-right:calc(var(--page-margin) / 4)}.interests-to-follow-slide[_ngcontent-%COMP%]   .question-options-col[_ngcontent-%COMP%]   .options-list-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]:nth-child(even){padding-left:calc(var(--page-margin) / 4)}.interests-to-follow-slide[_ngcontent-%COMP%]   .call-to-action-col[_ngcontent-%COMP%]{flex:0 1 auto;max-height:var(--page-max-call-to-actions-height);max-height:-webkit-fit-content;max-height:-moz-fit-content;max-height:fit-content;display:flex;align-items:flex-end;padding-top:calc(var(--page-margin) / 2)}.interests-to-follow-slide[_ngcontent-%COMP%]   .call-to-action-col[_ngcontent-%COMP%]   .signup-button[_ngcontent-%COMP%]{margin:0;flex:1 0 100%}.interests-to-follow-slide[_ngcontent-%COMP%]   .custom-checkbox[_ngcontent-%COMP%]   .checkbox-title[_ngcontent-%COMP%]{font-weight:600;text-transform:uppercase;font-size:22px;color:var(--ion-color-lightest);text-align:center;word-break:break-word;overflow:visible;position:absolute;width:70%;left:15%;top:50%;transform:translateY(-50%)}.interests-to-follow-slide[_ngcontent-%COMP%]   .custom-checkbox[_ngcontent-%COMP%]   ion-checkbox[_ngcontent-%COMP%]{--border-radius: 0px;--border-width: 10vw;--border-color: transparent;--border-color-checked: transparent;--background: transparent;--background-checked: rgba(var(--ion-color-secondary-rgb), .4);height:100%;width:100%}.interests-to-follow-slide[_ngcontent-%COMP%]   .custom-checkbox.checkbox-checked[_ngcontent-%COMP%]   .checkbox-title[_ngcontent-%COMP%]{display:none}.last-slide-active[_nghost-%COMP%]     .getting-started-slides .swiper-pagination{display:none}[_nghost-%COMP%]     .getting-started-slides .swiper-pagination{height:var(--page-swiper-pagination-height);line-height:1;bottom:calc((var(--page-swiper-pagination-space) - var(--page-swiper-pagination-height)) / 2)}[_nghost-%COMP%]     .getting-started-slides .swiper-pagination .swiper-pagination-bullet{width:var(--page-pagination-bullet-size);height:var(--page-pagination-bullet-size)}","app-image-shell.checkbox-cover[_ngcontent-%COMP%]{--image-shell-loading-background: rgba(var(--ion-color-light-rgb), .4);--image-shell-overlay-background: rgba(var(--ion-color-dark-rgb), .4);--image-shell-spinner-color: var(--ion-color-lightest)}","@media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (-webkit-min-device-pixel-ratio: 2) and (device-aspect-ratio: 2/3){.interests-to-follow-slide[_ngcontent-%COMP%]   .custom-checkbox[_ngcontent-%COMP%]   .checkbox-title[_ngcontent-%COMP%]{font-size:18px}}@media only screen and (min-device-width: 320px) and (max-device-width: 568px) and (-webkit-min-device-pixel-ratio: 2) and (device-aspect-ratio: 40/71){.interests-to-follow-slide[_ngcontent-%COMP%]   .custom-checkbox[_ngcontent-%COMP%]   .checkbox-title[_ngcontent-%COMP%]{font-size:18px}}"]}),o})()}];let P=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[h.ez,i.u5,i.UX,e.Pc,p.Bz.forChild(M),u.K]]}),o})()}}]);