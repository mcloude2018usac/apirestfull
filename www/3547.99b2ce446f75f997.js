"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[3547],{50076:(b,f,r)=>{r.d(f,{oK:()=>d,GW:()=>m,dk:()=>n});var d=(()=>{return(a=d||(d={})).Prompt="PROMPT",a.Camera="CAMERA",a.Photos="PHOTOS",d;var a})(),m=(()=>{return(a=m||(m={})).Rear="REAR",a.Front="FRONT",m;var a})(),n=(()=>{return(a=n||(n={})).Uri="uri",a.Base64="base64",a.DataUrl="dataUrl",n;var a})()},26388:(b,f,r)=>{r.d(f,{dk:()=>m.dk,oK:()=>m.oK,V1:()=>n});var d=r(47423),m=r(50076);const n=(0,d.fo)("Camera",{web:()=>r.e(3954).then(r.bind(r,63954)).then(a=>new a.CameraWeb)})},23547:(b,f,r)=>{r.r(f),r.d(f,{ConversationPageModule:()=>et});var d=r(69808),m=r(93075),n=r(55787),a=r(23349),_=r(70655),M=r(49926),P=r(86489),x=r(96793),O=r(34986),T=r(5963),C=r(68306),c=r(26388),t=r(5e3),u=r(36351);const h=["fileInput"],Z=["chat_input"],A=["foto1a"],w=["inputId"];function y(o,g){if(1&o&&(t.TgZ(0,"ion-avatar",1),t._UZ(1,"ion-img-viewer",40),t.qZA()),2&o){const e=t.oxw(2).$implicit;t.xp6(1),t.Q6J("src",e.messageimg)}}function k(o,g){if(1&o&&(t.TgZ(0,"div",35),t.TgZ(1,"div",35),t._UZ(2,"span",36),t.TgZ(3,"p",37),t._uU(4),t.qZA(),t.TgZ(5,"div",38),t.TgZ(6,"p"),t._uU(7),t.qZA(),t.qZA(),t.qZA(),t._UZ(8,"br"),t._uU(9,"\xa0\xa0\xa0\xa0\xa0\xa0 "),t._UZ(10,"br"),t._uU(11,"\xa0\xa0\xa0\xa0\xa0\xa0 "),t._UZ(12,"br"),t._uU(13,"\xa0\xa0\xa0\xa0\xa0\xa0 "),t._UZ(14,"br"),t._uU(15,"\xa0\xa0\xa0\xa0\xa0\xa0 "),t._UZ(16,"br"),t.TgZ(17,"div"),t._UZ(18,"span",36),t.TgZ(19,"p",37),t._uU(20),t.qZA(),t.YNc(21,y,2,1,"ion-avatar",39),t.qZA(),t.qZA()),2&o){const e=t.oxw().$implicit;t.xp6(4),t.Oqu(e.message2),t.xp6(3),t.hij(" ",e.userId2,"\xa0\xa0\xa0"),t.xp6(13),t.Oqu(e.message),t.xp6(1),t.Q6J("ngIf",e.messageimg)}}function I(o,g){if(1&o&&(t.TgZ(0,"ion-avatar",1),t._UZ(1,"ion-img-viewer",40),t.qZA()),2&o){const e=t.oxw(2).$implicit;t.xp6(1),t.Q6J("src",e.messageimg)}}function U(o,g){if(1&o&&(t.TgZ(0,"div",35),t.TgZ(1,"div"),t._UZ(2,"span",36),t.TgZ(3,"p",37),t._uU(4),t.qZA(),t.YNc(5,I,2,1,"ion-avatar",39),t.qZA(),t.qZA()),2&o){const e=t.oxw().$implicit;t.xp6(4),t.Oqu(e.message),t.xp6(1),t.Q6J("ngIf",e.messageimg)}}function E(o,g){if(1&o){const e=t.EpF();t.TgZ(0,"div",30),t.TgZ(1,"img",31),t.NdJ("click",function(){const l=t.CHM(e).$implicit;return t.oxw(2).hilo(l)}),t.qZA(),t.TgZ(2,"div",32),t.TgZ(3,"div",33),t.TgZ(4,"p"),t._uU(5),t.qZA(),t.qZA(),t.YNc(6,k,22,4,"div",34),t.YNc(7,U,6,2,"div",34),t.qZA(),t.qZA()}if(2&o){const e=g.$implicit,i=t.oxw(2);t.ekj("right",i.toUser.id==i.toUser.id),t.xp6(1),t.Q6J("src",e.userId.foto,t.LSH),t.xp6(4),t.hij(" ",e.userId.nombre,"\xa0\xa0\xa0"),t.xp6(1),t.Q6J("ngIf",""!==e.message2),t.xp6(1),t.Q6J("ngIf",""==e.message2)}}function N(o,g){if(1&o&&(t.TgZ(0,"div"),t.YNc(1,E,8,6,"div",29),t.qZA()),2&o){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",e.msgList)}}function q(o,g){if(1&o&&t._UZ(0,"img",43),2&o){const e=t.oxw(4);t.Q6J("src",e.toUser.avatar,t.LSH)}}function S(o,g){if(1&o&&t._UZ(0,"img",43),2&o){const e=t.oxw(4);t.Q6J("src",e.pofilel,t.LSH)}}function J(o,g){if(1&o&&(t.TgZ(0,"div"),t.YNc(1,q,1,1,"img",42),t.YNc(2,S,1,1,"img",42),t.qZA()),2&o){const e=t.oxw(3);t.xp6(1),t.Q6J("ngIf",void 0!==e.toUser.avatar),t.xp6(1),t.Q6J("ngIf",null==e.toUser.avatar)}}function D(o,g){if(1&o&&t._UZ(0,"img",43),2&o){const e=t.oxw(4);t.Q6J("src",e.user.avatar,t.LSH)}}function F(o,g){if(1&o&&t._UZ(0,"img",43),2&o){const e=t.oxw(4);t.Q6J("src",e.pofilel,t.LSH)}}function Q(o,g){if(1&o&&(t.TgZ(0,"div"),t.YNc(1,D,1,1,"img",42),t.YNc(2,F,1,1,"img",42),t.qZA()),2&o){const e=t.oxw(3);t.xp6(1),t.Q6J("ngIf",void 0!==e.user.avatar),t.xp6(1),t.Q6J("ngIf",null==e.user.avatar)}}function R(o,g){if(1&o&&(t.TgZ(0,"div"),t.TgZ(1,"p"),t._uU(2),t.qZA(),t.qZA()),2&o){const e=t.oxw(3);t.xp6(2),t.hij(" ",e.toUser.name,"\xa0\xa0\xa0")}}function Y(o,g){if(1&o&&(t.TgZ(0,"div"),t.TgZ(1,"p"),t._uU(2),t.qZA(),t.qZA()),2&o){const e=t.oxw(3);t.xp6(2),t.hij(" ",e.user.name,"\xa0\xa0\xa0")}}function L(o,g){if(1&o&&(t.TgZ(0,"ion-avatar",1),t._UZ(1,"ion-img-viewer",40),t.qZA()),2&o){const e=t.oxw().$implicit;t.xp6(1),t.Q6J("src",e.messageimg)}}function z(o,g){if(1&o&&(t.TgZ(0,"div",30),t.YNc(1,J,3,2,"div",9),t.YNc(2,Q,3,2,"div",9),t.TgZ(3,"div",32),t.TgZ(4,"div",33),t.YNc(5,R,3,1,"div",9),t.YNc(6,Y,3,1,"div",9),t.qZA(),t.TgZ(7,"div",35),t._UZ(8,"span",36),t.TgZ(9,"p",37),t._uU(10),t.qZA(),t.YNc(11,L,2,1,"ion-avatar",39),t.qZA(),t.qZA(),t.qZA()),2&o){const e=g.$implicit,i=t.oxw(2);t.ekj("left",e.userId===i.toUser.id)("right",e.userId===i.user.id),t.xp6(1),t.Q6J("ngIf",e.userId===i.toUser.id),t.xp6(1),t.Q6J("ngIf",e.userId===i.user.id),t.xp6(3),t.Q6J("ngIf",e.userId===i.toUser.id),t.xp6(1),t.Q6J("ngIf",e.userId===i.user.id),t.xp6(4),t.Oqu(e.message),t.xp6(1),t.Q6J("ngIf",e.messageimg)}}function B(o,g){if(1&o&&(t.TgZ(0,"div"),t.YNc(1,z,12,10,"div",41),t.qZA()),2&o){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",e.msgList)}}function G(o,g){if(1&o){const e=t.EpF();t.TgZ(0,"ion-col",16),t.TgZ(1,"ion-icon",44),t.NdJ("click",function(){return t.CHM(e),t.oxw().trasferir()}),t.qZA(),t._uU(2,"Transferencia "),t.qZA()}}function W(o,g){if(1&o){const e=t.EpF();t.TgZ(0,"ion-icon",45),t.NdJ("click",function(){return t.CHM(e),t.oxw().onFocus()}),t.qZA()}}function H(o,g){if(1&o){const e=t.EpF();t.TgZ(0,"ion-icon",46),t.NdJ("click",function(){return t.CHM(e),t.oxw().onFocus()}),t.qZA()}}const K=function(o){return{active:o}};let j=(()=>{class o{constructor(e,i,s,l){this.actionSheetController=e,this.modalController=i,this.router=s,this.authenticationService=l,this.msgList=[],this.editorMsg="",this.conectadox1="",this.conectadox2="",this.pofilel="./assets/img/profilelocal.png",this.showEmojiPicker=!1,this._updateInterval=function(o=0,g=O.z){return o<0&&(o=0),(0,T.H)(o,o,g)}(1e3),this.messages=[],this.loading=!0,this.contactInfo={name:"JOHN DOE",status:"ONLINE"},this.showOptions=!1,this.userinfo=[],this.apifoto=this.authenticationService.getapifoto(),this.grupal=this.router.getCurrentNavigation().extras.state.grupal,this.router.getCurrentNavigation().extras.state.record2.toUserId&&(this.toUser={id:this.router.getCurrentNavigation().extras.state.record2.toUserId,name:this.router.getCurrentNavigation().extras.state.record2.toUserName,avatar:this.router.getCurrentNavigation().extras.state.record2.avatar,email:this.router.getCurrentNavigation().extras.state.record2.email},this.user={id:this.router.getCurrentNavigation().extras.state.record.toUserId,name:this.router.getCurrentNavigation().extras.state.record.toUserName,avatar:this.router.getCurrentNavigation().extras.state.record.avatar,email:this.router.getCurrentNavigation().extras.state.record2.email})}ionViewWillEnter(){this.getMessages().subscribe(e=>{let i;this.data=JSON.stringify(e),i=e,i&&i.from===this.user.id&&(this.conectadox=this.conectadox2,Date.now().toString(),this.showEmojiPicker||this.messageInput.setFocus())}),this.getUsers().subscribe(e=>{this.data=JSON.stringify(e);const i=e.user;"left"===e.event?i===this.user.id&&(this.conectadox=this.conectadox1):i===this.user.id&&(this.conectadox=this.conectadox2)})}ionViewDidEnter(){this.getMsg()}getMessages(){return new C.y(i=>{})}getUsers(){return new C.y(i=>{})}getMsg(){const e=this;e.loading=!0;let i="";i="si"===this.grupal?"grupal/"+this.toUser.id:this.user.id+"/"+this.toUser.id,this.authenticationService.getReg(i,"usermsgs",0).then(s=>{this.msgList=s,this.ScrollToBottom(),e.loading=!1},s=>{this.authenticationService.presentAlert(s.error,"Precauci\xf3n","")})}ngOnInit(){this.userinfo=this.authenticationService.getcopiauser(),this.moneda=this.userinfo[0].idempresa.moneda,this.nombre=this.router.getCurrentNavigation().extras.state.nombre,this.estado=this.router.getCurrentNavigation().extras.state.estado,this.foto=this.router.getCurrentNavigation().extras.state.foto,this.userid=this.router.getCurrentNavigation().extras.state.userid,this.totalpay=this.authenticationService.getsibilletera()}onFocus(e){void 0===e?(this.showOptions=!this.showOptions,this.showEmojiPicker=!1):this.showOptions=e}sendMsg2(){let e;e="si"===this.grupal?{foto:this.user.avatar,nombre:this.user.name}:this.user.id;const i={messageId:Date.now().toString(),userId:e,toUserId:this.toUser.id,messageimg:this.image,message:this.editorMsg,status:"Pendiente",message2:"",userId2:"",imagen2:this.user.avatar};i&&this.authenticationService.createReg("",i,"usermsgs").then(s=>{const l={messageId:Date.now().toString(),userId:e,toUserId:this.toUser.id,messageimg:this.image,message:this.editorMsg,status:"Pendiente",message2:"",userId2:"",imagen2:this.user.avatar};this.pushNewMsg(l),this.editorMsg="",setTimeout(()=>{this.messageInput.setFocus(),this.showOptions=!1},400)},s=>{this.authenticationService.presentAlert(s.error,"Precauci\xf3n","")})}sendMsg(){if(!this.editorMsg.trim())return;let e;e="si"===this.grupal?{foto:this.user.avatar,nombre:this.user.name}:this.user.id;const i={messageId:Date.now().toString(),userId:e,toUserId:this.toUser.id,messageimg:"",message:this.editorMsg,status:"Pendiente",message2:"",userId2:"",imagen2:this.user.avatar};i&&this.authenticationService.createReg("",i,"usermsgs").then(s=>{const l={messageId:Date.now().toString(),userId:e,toUserId:this.toUser.id,messageimg:"",message:this.editorMsg,status:"Pendiente",message2:"",userId2:"",imagen2:this.user.avatar};this.pushNewMsg(l),this.editorMsg="",setTimeout(()=>{this.messageInput.setFocus()},400)},s=>{this.authenticationService.presentAlert(s.error,"Precauci\xf3n","")})}ScrollToBottom(){this.content.scrollToBottom(1500)}ScrollToTop(){this.content.scrollToTop(1500)}ScrollToPoint(e,i){this.content.scrollToPoint(e,i,1500)}ngAfterViewInit(){setTimeout(()=>{this.messageInput.setFocus()},400)}pushNewMsg(e){this.msgList.push(e),this.ScrollToBottom()}camara(){this.takePicture("foto1a")}galeria(){this.takePicture2("foto1a")}trasferir(){this.pagar2("trasferencia","TRANSFERENCIA")}pagar2(e,i){return(0,_.mG)(this,void 0,void 0,function*(){const s=yield this.modalController.create({component:P.E,animated:!0,componentProps:{moneda:this.moneda,title:"Ingrese monto",botonn:i,botonn2:i,validarsaldo:"si"},presentingElement:yield this.modalController.getTop(),cssClass:"modal-fullscreen"});return s.onWillDismiss().then(l=>{"close"!==l.data.data&&this.pagarconqr(l.data.data,e,i)}),yield s.present()})}pagarconqr(e,i,s){return(0,_.mG)(this,void 0,void 0,function*(){const l=yield this.modalController.create({component:x.u,animated:!0,componentProps:{moneda:this.moneda,title:s,monto:e,tipo:i,userntrasferencia:this.toUser.name,usertrasferencia:this.toUser.email},presentingElement:yield this.modalController.getTop(),cssClass:"modal-fullscreen"});return l.onWillDismiss().then(v=>{"close"!==v.data.data&&(v.data.data.split("\xb0"),this.foto1img=v.data.img,this.image=v.data.img,this.editorMsg="Transferencia de "+this.moneda+" "+e,this.sendMsg2())}),yield l.present()})}takePicture(e){return(0,_.mG)(this,void 0,void 0,function*(){const i=yield c.V1.getPhoto({correctOrientation:!0,height:100,width:100,quality:40,allowEditing:!0,resultType:c.dk.DataUrl,source:c.oK.Camera});this.authenticationService.generateFromImage(i.dataUrl,100,100,.5,s=>{"foto1a"===e&&(this.foto1img=s,this.image=i.dataUrl,this.sendMsg2())})})}uploadPWA2(e,i){i&&i.length>0&&this.firstFileToBase64(i[0]).then(l=>{this.authenticationService.generateFromImage(l,150,150,.5,v=>{"foto1a"===e&&(this.foto1img=v,this.image=v,this.sendMsg2())})},l=>{"foto1a"===e&&(this.foto1img=null)})}uploadPWA(e){if("foto1a"===e){if(null==this.foto1a)return;this.uploadPWA2(e,this.foto1a.nativeElement.files)}}firstFileToBase64(e){return new Promise((i,s)=>{const l=new FileReader;l&&null!=e?(l.readAsDataURL(e),l.onload=()=>{i(l.result)},l.onerror=v=>{s(v)}):s(new Error("No file found"))})}takePicture2(e){return(0,_.mG)(this,void 0,void 0,function*(){"foto1a"===e&&this.foto1a.nativeElement.click()})}fotodatos(e){return(0,_.mG)(this,void 0,void 0,function*(){yield(yield this.actionSheetController.create({header:"Foto",cssClass:"my-custom-class",buttons:[{text:"Galeria",role:"destructive",icon:"image-outline",handler:()=>{this.takePicture2(e)}},{text:"Camara",icon:"camera-outline",handler:()=>{this.takePicture(e)}}]})).present()})}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(a.BX),t.Y36(a.IN),t.Y36(n.F0),t.Y36(M.$))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-conversation"]],viewQuery:function(e,i){if(1&e&&(t.Gf(h,5),t.Gf(a.W2,5),t.Gf(Z,5),t.Gf(A,7),t.Gf(w,5)),2&e){let s;t.iGM(s=t.CRH())&&(i.fileInput=s.first),t.iGM(s=t.CRH())&&(i.content=s.first),t.iGM(s=t.CRH())&&(i.messageInput=s.first),t.iGM(s=t.CRH())&&(i.foto1a=s.first),t.iGM(s=t.CRH())&&(i.inputElement=s.first)}},decls:39,vars:15,consts:[["color","primary"],["slot","start"],["defaultHref","NotificationsPage"],["slot","start",1,"contact-avatar"],[3,"src"],[1,"ion-text-wrap"],[1,"text-muted"],[1,"bg"],[1,"message-wrap"],[4,"ngIf"],["inputMode","text","clearInput","true",3,"hidden"],["type","file","id","foto1a","accept","image/x-png,image/jpeg",2,"visibility","hidden","height","0px",3,"change"],["foto1a",""],["no-border",""],[1,"chat-controls",3,"ngClass"],[1,"option","ion-text-center"],["size","4"],["name","camera",3,"click"],["name","image",3,"click"],["size","4",4,"ngIf"],[1,"bg-white"],["size","9",1,"ion-no-padding"],["placeholder","Escribe un mensaje aqu\xed",3,"ngModel","ngModelChange","keyup.enter"],["chat_input",""],["size","3",1,"ion-no-padding"],[1,"ion-text-center","icon-controls"],["mode","ios","name","send",1,"text-primary",3,"click"],["mode","ios","name","add-circle",3,"click",4,"ngIf"],["mode","ios","name","close-circle",3,"click",4,"ngIf"],["class","message",3,"right",4,"ngFor","ngForOf"],[1,"message"],["alt","","src","",1,"user-img",3,"src","click"],[1,"msg-detail"],[1,"msg-info"],["class","msg-content",4,"ngIf"],[1,"msg-content"],[1,"triangle"],[1,"line-breaker"],[1,"msg-info2"],["slot","start",4,"ngIf"],["scheme","dark",3,"src"],["class","message",3,"left","right",4,"ngFor","ngForOf"],["class","user-img","alt","","src","",3,"src",4,"ngIf"],["alt","","src","",1,"user-img",3,"src"],["name","wallet-outline",3,"click"],["mode","ios","name","add-circle",3,"click"],["mode","ios","name","close-circle",3,"click"]],template:function(e,i){1&e&&(t.TgZ(0,"ion-header"),t.TgZ(1,"ion-toolbar",0),t.TgZ(2,"ion-buttons",1),t._UZ(3,"ion-back-button",2),t.qZA(),t.TgZ(4,"ion-avatar",3),t._UZ(5,"img",4),t.qZA(),t.TgZ(6,"ion-title"),t.TgZ(7,"ion-label",5),t.TgZ(8,"h2"),t._uU(9),t.qZA(),t.TgZ(10,"p"),t.TgZ(11,"small",6),t._uU(12),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(13,"ion-content",7),t.TgZ(14,"div",8),t.YNc(15,N,2,1,"div",9),t.YNc(16,B,2,1,"div",9),t.qZA(),t._UZ(17,"ion-input",10),t.TgZ(18,"input",11,12),t.NdJ("change",function(){return i.uploadPWA("foto1a")}),t.qZA(),t.TgZ(20,"ion-footer",13),t.TgZ(21,"div",14),t.TgZ(22,"ion-row",15),t.TgZ(23,"ion-col",16),t.TgZ(24,"ion-icon",17),t.NdJ("click",function(){return i.camara()}),t.qZA(),t._uU(25,"Camera "),t.qZA(),t.TgZ(26,"ion-col",16),t.TgZ(27,"ion-icon",18),t.NdJ("click",function(){return i.galeria()}),t.qZA(),t._uU(28,"Gallery "),t.qZA(),t.YNc(29,G,3,0,"ion-col",19),t.qZA(),t.TgZ(30,"ion-row",20),t.TgZ(31,"ion-col",21),t.TgZ(32,"ion-input",22,23),t.NdJ("ngModelChange",function(l){return i.editorMsg=l})("keyup.enter",function(){return i.sendMsg()}),t.qZA(),t.qZA(),t.TgZ(34,"ion-col",24),t.TgZ(35,"p",25),t.TgZ(36,"ion-icon",26),t.NdJ("click",function(){return i.sendMsg()}),t.qZA(),t.YNc(37,W,1,0,"ion-icon",27),t.YNc(38,H,1,0,"ion-icon",28),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&e&&(t.xp6(5),t.Q6J("src",i.apifoto+i.foto,t.LSH),t.xp6(4),t.Oqu(i.nombre),t.xp6(3),t.Oqu(i.estado),t.xp6(3),t.Q6J("ngIf","si"==i.grupal),t.xp6(1),t.Q6J("ngIf","no"==i.grupal),t.xp6(1),t.Q6J("hidden",!0),t.xp6(3),t.Udp("height",i.showEmojiPicker?"255px":"55px"),t.xp6(1),t.Q6J("ngClass",t.VKq(13,K,i.showOptions)),t.xp6(8),t.Q6J("ngIf","si"===i.totalpay),t.xp6(3),t.Q6J("ngModel",i.editorMsg),t.xp6(5),t.Q6J("ngIf",!i.showOptions),t.xp6(1),t.Q6J("ngIf",i.showOptions))},directives:[a.Gu,a.sr,a.Sm,a.oU,a.cs,a.BJ,a.wd,a.Q$,a.W2,d.O5,a.pK,a.j9,a.fr,d.mk,a.Nd,a.wI,a.gu,m.JJ,m.On,d.sg,u.A6],styles:[".bg[_ngcontent-%COMP%]{--background: rgba(var(--ion-color-primary-rgb), .05)}.bg-secondary[_ngcontent-%COMP%]{--background: rgba(var(--ion-color-secondary-rgb), .05)}.bg-white[_ngcontent-%COMP%]{background:#FFF}.header-md[_ngcontent-%COMP%]:after, .header-ios[_ngcontent-%COMP%]:after{background-image:none!important}.header[_ngcontent-%COMP%]   .toolbar[_ngcontent-%COMP%]   .toolbar-content[_ngcontent-%COMP%]   .toolbar-title[_ngcontent-%COMP%]{align-items:center}.app-list[_ngcontent-%COMP%]{margin-top:7px!important;padding:5px;background:none}.app-list[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]{border-radius:10px;padding-top:4px!important;padding-bottom:4px!important;margin-bottom:5px}.app-list[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   ion-avatar[_ngcontent-%COMP%]{height:60px;width:60px}.app-list[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   p[item-end][_ngcontent-%COMP%]{text-align:right;color:#cfcfcf}.chat-bubble[_ngcontent-%COMP%]{width:auto;max-width:75%;min-width:25%;border-radius:8px;padding:8px 16px;margin:10px 10px 0;display:block;clear:both;position:relative}.chat-bubble.received[_ngcontent-%COMP%]{background:#FFF;float:left}.chat-bubble.send[_ngcontent-%COMP%]{background:var(--ion-color-primary);float:right;text-align:right;color:#fff}.chat-bubble[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{margin:0 0 4px;font-weight:400}.chat-bubble[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;font-size:1rem;opacity:.4}.chat-container[_ngcontent-%COMP%]{height:calc(100% - 60px);overflow:scroll}.chat-controls[_ngcontent-%COMP%]{background:#FFF;padding:3px 2px;position:fixed;bottom:0;width:100%;box-shadow:0 -1px 43px 5px #6262621a;z-index:9}.chat-controls[_ngcontent-%COMP%]   .option[_ngcontent-%COMP%]{height:0;overflow:hidden;transition:all .3s}.chat-controls[_ngcontent-%COMP%]   .option[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]{color:var(--ion-color-primary);margin-bottom:15px;font-size:1rem;font-weight:400}.chat-controls[_ngcontent-%COMP%]   .option[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]:before{position:absolute;top:0;bottom:0;left:0;right:0;margin:auto;font-size:3rem;line-height:65px}.chat-controls[_ngcontent-%COMP%]   .option[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{color:var(--ion-color-primary);display:block;width:25px;height:25px;background:#f3f9f5;border-radius:50px;margin:auto auto 7px;padding:15px;position:relative}.chat-controls.active[_ngcontent-%COMP%]   .option[_ngcontent-%COMP%]{height:230px;transition:all .3s}.chat-controls[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]{margin:0 -2px}.chat-controls[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{border-radius:7px;--background: #fff;box-shadow:none!important;border-bottom:none!important}.chat-controls[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{border-radius:7px;font-size:14pt;margin:0;line-height:44px;height:44px;color:#bcbcbc;min-width:20px;overflow:hidden}.chat-controls[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{width:22px;height:22px;text-align:center;font-size:2.5rem;margin-top:11px;color:#828282;margin-left:5px;margin-right:5px}.contact-avatar[_ngcontent-%COMP%]{height:40px;width:40px}.login-form[_ngcontent-%COMP%]{width:75%;margin:auto}.login-form[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]{background:none}.login-form[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{background:rgba(var(--ion-color-primary-rgb),.05);--background: none;border-radius:10px;padding:3px 20px!important;margin-bottom:20px;border:none!important;box-shadow:none!important}.login-form[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   .item-native[_ngcontent-%COMP%]{--background: none !important}.login-form[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-select-option[_ngcontent-%COMP%]{margin-left:auto;max-width:unset;align-items:center;padding:0}.login-form[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-select-option[_ngcontent-%COMP%]   .select[_ngcontent-%COMP%]{max-width:100%}.login-form[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-select-option[_ngcontent-%COMP%]   .select[_ngcontent-%COMP%]   .select-text[_ngcontent-%COMP%]{font-size:1.35rem}.login-form[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item.item-input[_ngcontent-%COMP%]   .text-input[_ngcontent-%COMP%]::-moz-placeholder{color:#78927e!important;font-size:1.3rem}.login-form[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item.item-input[_ngcontent-%COMP%]   .text-input[_ngcontent-%COMP%]::placeholder{color:#78927e!important;font-size:1.3rem}.login-form[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{font-size:1.35rem;font-weight:400;color:#78927e;flex:unset}.logo-box[_ngcontent-%COMP%]{width:100%;height:200px;position:relative;overflow:hidden;margin-top:30px}.logo-box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{position:absolute;width:140px;height:140px;top:0;bottom:0;right:0;left:0;margin:auto}.profile-image[_ngcontent-%COMP%]{width:70px!important;height:70px!important}.contact-profile-img[_ngcontent-%COMP%]{background-color:#000}.contact-profile-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{display:block;max-width:400px;margin:0 auto}.text-primary[_ngcontent-%COMP%]{color:var(--ion-color-primary)!important}.text-secondary[_ngcontent-%COMP%]{color:var(--ion-color-secondary)!important}.text-danger[_ngcontent-%COMP%]{color:var(--ion-color-danger)!important}.text-muted[_ngcontent-%COMP%]{color:#999}.upload-button-wrapper[_ngcontent-%COMP%]{position:relative;overflow:hidden;margin:10px}.upload-button-wrapper[_ngcontent-%COMP%]   .file-upload-button[_ngcontent-%COMP%]{position:absolute;top:0;right:0;margin:0;padding:0;font-size:1.2em;cursor:pointer;opacity:0;filter:alpha(opacity=0)}ion-content[_ngcontent-%COMP%]   .scroll-content[_ngcontent-%COMP%]{background-color:#f5f5f5}ion-footer[_ngcontent-%COMP%]{box-shadow:0 0 4px #0000001c;background-color:#fff;height:255px}.line-breaker[_ngcontent-%COMP%]{white-space:pre-line}.input-wrap[_ngcontent-%COMP%]{padding:0 5px}.input-wrap[_ngcontent-%COMP%]   ion-textarea[_ngcontent-%COMP%]{position:static}.input-wrap[_ngcontent-%COMP%]   ion-col.col[_ngcontent-%COMP%]{padding:0}.input-wrap[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:100%;height:55px;font-size:1.3em;margin:0}.input-wrap[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{border-bottom:1px #387ef5;border-style:solid}.message-wrap[_ngcontent-%COMP%]{padding:0 10px}.message-wrap[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]{position:relative;padding:7px 0}.message-wrap[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .user-img[_ngcontent-%COMP%]{position:absolute;border-radius:45px;width:45px;height:45px;box-shadow:0 0 2px #0000005c}.message-wrap[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .msg-detail[_ngcontent-%COMP%]{width:100%;display:inline-block}.message-wrap[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .msg-detail[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}.message-wrap[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .msg-detail[_ngcontent-%COMP%]   .msg-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:.8em;color:#888}.message-wrap[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .msg-detail[_ngcontent-%COMP%]   .msg-info2[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:.8em;color:#faf1f1}.message-wrap[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .msg-detail[_ngcontent-%COMP%]   .msg-content[_ngcontent-%COMP%]{position:relative;margin-top:5px;border-radius:5px;padding:8px;border:1px solid #ddd;color:#fff;width:auto;max-width:80%}.message-wrap[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .msg-detail[_ngcontent-%COMP%]   .msg-content[_ngcontent-%COMP%]   span.triangle[_ngcontent-%COMP%]{background-color:#fff;border-radius:2px;height:8px;width:8px;top:12px;display:block;border-style:solid;border-color:#ddd;border-width:1px;transform:rotate(45deg);position:absolute}.message-wrap[_ngcontent-%COMP%]   .message.left[_ngcontent-%COMP%]   .msg-content[_ngcontent-%COMP%]{background-color:#464444;float:left}.message-wrap[_ngcontent-%COMP%]   .message.left[_ngcontent-%COMP%]   .msg-detail[_ngcontent-%COMP%]{padding-left:60px}.message-wrap[_ngcontent-%COMP%]   .message.left[_ngcontent-%COMP%]   .user-img[_ngcontent-%COMP%]{left:0}.message-wrap[_ngcontent-%COMP%]   .message.left[_ngcontent-%COMP%]   .msg-content[_ngcontent-%COMP%]{color:#343434}.message-wrap[_ngcontent-%COMP%]   .message.left[_ngcontent-%COMP%]   .msg-content[_ngcontent-%COMP%]   span.triangle[_ngcontent-%COMP%]{border-top-width:0;border-right-width:0;left:-5px}.message-wrap[_ngcontent-%COMP%]   .message.right[_ngcontent-%COMP%]   .msg-detail[_ngcontent-%COMP%]{padding-right:60px}.message-wrap[_ngcontent-%COMP%]   .message.right[_ngcontent-%COMP%]   .msg-detail[_ngcontent-%COMP%]   .msg-info[_ngcontent-%COMP%]{text-align:right}.message-wrap[_ngcontent-%COMP%]   .message.right[_ngcontent-%COMP%]   .user-img[_ngcontent-%COMP%]{right:0}.message-wrap[_ngcontent-%COMP%]   .message.right[_ngcontent-%COMP%]   ion-spinner[_ngcontent-%COMP%]{position:absolute;right:10px;top:50px}.message-wrap[_ngcontent-%COMP%]   .message.right[_ngcontent-%COMP%]   .msg-content[_ngcontent-%COMP%]{background-color:#387ef5;float:right}.message-wrap[_ngcontent-%COMP%]   .message.right[_ngcontent-%COMP%]   .msg-content[_ngcontent-%COMP%]   span.triangle[_ngcontent-%COMP%]{background-color:#387ef5;border-bottom-width:0;border-left-width:0;right:-5px}"]}),o})();var $=r(42445),V=r(55477),X=r(16580);const tt=[{path:"",component:j}];let et=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[d.ez,m.u5,u.YL,$.g,V.d,X.W,a.Pc,n.Bz.forChild(tt)]]}),o})()},55477:(b,f,r)=>{r.d(f,{d:()=>M});var d=r(69808),m=r(93075),n=r(23349),a=r(51062),_=r(5e3);let M=(()=>{class P{}return P.\u0275fac=function(O){return new(O||P)},P.\u0275mod=_.oAB({type:P}),P.\u0275inj=_.cJS({imports:[[d.ez,m.u5,m.UX,a.aw.forChild(),n.Pc]]}),P})()},96793:(b,f,r)=>{r.d(f,{u:()=>T});var d=r(70655),m=r(49926),n=r(5e3),a=r(23349),_=r(69808),M=r(98246);function P(p,C){if(1&p&&(n.TgZ(0,"h3",12),n._uU(1,"Monto a pagar: "),n.TgZ(2,"strong"),n._uU(3),n.ALo(4,"currency"),n.qZA(),n.qZA()),2&p){const c=n.oxw();n.xp6(3),n.hij(" ",n.xi3(4,1,c.monto,c.moneda),"")}}function x(p,C){if(1&p){const c=n.EpF();n.TgZ(0,"ion-button",13),n.NdJ("click",function(){return n.CHM(c),n.oxw().Transferiri()}),n._uU(1," Transferencia "),n.qZA()}}function O(p,C){if(1&p){const c=n.EpF();n.TgZ(0,"ion-fab",14),n.TgZ(1,"ion-fab-button",15),n.NdJ("click",function(){return n.CHM(c),n.oxw().StartTimer()}),n._UZ(2,"ion-icon",16),n.qZA(),n.qZA()}}let T=(()=>{class p{constructor(c,t,u,h){this.alertController=c,this.modalController=t,this.authenticationService=u,this.navParams=h,this.qrData="",this.scannedCode=null,this.elementType="canvas",this.userinfo=[],this.countdownNumberEl=document.getElementById("countdown-number"),this.countdown=10}generaqr(){let c="";"cobrapagoqr"===this.tipo&&(c=this.userinfo[0].idempresa._id+"\xb0"+this.userinfo[0]._id+"\xb0"+this.userinfo[0].nombre+"<br> en la ubicaci\xf3n:"+this.userinfo[0].idempresa.direccion+"\xb0"+this.keyacceso+"\xb0"+this.monto),"pagoqr"===this.tipo&&(c=this.userinfo[0].idempresa._id+"\xb0"+this.userinfo[0]._id+"\xb0"+this.userinfo[0].nombre+"\xb0"+this.keyacceso+"\xb0"+this.monto),"comprasaldo"===this.tipo&&(c=this.userinfo[0].idempresa._id+"\xb0"+this.userinfo[0]._id+"\xb0"+this.userinfo[0].nombre+"\xb0"+this.keyacceso+"\xb0"+this.monto),"trasferencia"===this.tipo&&(c=this.userinfo[0].idempresa._id+"\xb0"+this.userinfo[0]._id+"\xb0"+this.userinfo[0].nombre+"\xb0"+this.keyacceso+"\xb0"+this.monto+"\xb0"+this.userntrasferencia);const t={idempresa:this.userinfo[0].idempresa._id,trama:this.authenticationService.encryptvalue(c),estado:0,tipo:this.tipo,monto:this.monto,usertrasferencia:this.usertrasferencia,bitacora:{idempresa:this.userinfo[0].idempresa._id,idafiliado:"",email:this.userinfo[0].email,permiso:"Crea",accion:"Generetoken compra"},idsuscriptor2:{id:this.userinfo[0]._id,nombre:this.userinfo[0].nombre}};this.authenticationService.createReg("",t,"compratokens").then(u=>{let h=[];h=u,this.tokenactual=h._id,"trasferencia"===this.tipo?this.qrData=this.authenticationService.encryptvalue(c+"\xb0"+this.tipo+"\xb0"+h._id+"\xb0"+this.tipo+"\xb0"+this.usertrasferencia):(this.qrData=this.authenticationService.encryptvalue(c+"\xb0"+this.tipo+"\xb0"+h._id+"\xb0"+this.tipo),this.StartTimer())})}Transferiri(){const t=document.querySelector("canvas").toDataURL("image/jpeg").toString();this.modalController.dismiss({data:this.qrData,img:t})}ngOnInit(){this.tituloxx=this.navParams.get("title"),this.moneda=this.navParams.get("moneda"),this.monto=this.navParams.get("monto"),this.tipo=this.navParams.get("tipo"),this.usertrasferencia=this.navParams.get("usertrasferencia"),this.userntrasferencia=this.navParams.get("userntrasferencia"),this.userinfo=this.authenticationService.getcopiauser(),this.keyacceso=this.userinfo[0].controlacceso,""===this.keyacceso?this.authenticationService.getReg(this.userinfo[0]._id+"/keyunica/"+this.userinfo[0]._id,"personals",0).then(c=>{let t=[];t=c,this.keyacceso=t.code,this.generaqr()}):this.generaqr()}seguroacepta(c,t){return(0,d.mG)(this,void 0,void 0,function*(){yield(yield this.alertController.create({message:t,buttons:[{text:"No Aceptar",cssClass:"secondary",handler:h=>{}},{text:"Aceptar",handler:()=>{const h={estado:3,cobroservicio:this.userinfo[0].nombre+" ha  Autorizada el cobro de "+this.moneda+" "+this.monto,bitacora:{idempresa:this.userinfo[0].idempresa._id,idafiliado:"",usertrasferencia:this.usertrasferencia,email:this.userinfo[0].email,permiso:"Actualiza",accion:"acepta token "+this.tokenactual}};h&&this.authenticationService.createReg(this.tokenactual,h,"compratokens").then(Z=>{this.modalController.dismiss("ok")},Z=>{this.authenticationService.presentAlert(Z.error,"Precauci\xf3n","")})}}]})).present()})}StartTimer(){this.timer=setTimeout(c=>{this.authenticationService.getReg(this.tokenactual+"/2","compratokens",0).then(t=>{let u=[];u=t,u.length>0?2===t[0].estado?this.seguroacepta(u[0].cobroservicio,u[0].cobroservicio):10===t[0].estado||33===t[0].estado?this.authenticationService.presentAlert(t[0].cobroservicio,"Precauci\xf3n",""):50===t[0].estado?(this.authenticationService.presentAlert(t[0].cobroservicio,"Gracias por tu pago",""),this.closeModal()):20===t[0].estado?this.authenticationService.presentAlert(t[0].cobroservicio,"Gracias por tu compra",""):this.StartTimer():this.StartTimer()},t=>{this.authenticationService.presentAlert("Transacci\xf3n insegura","Precauci\xf3n","")})},3e3)}pideverificar(){return(0,d.mG)(this,void 0,void 0,function*(){this.authenticationService.getReg(this.tokenactual+"/5","compratokens",0).then(c=>{let t=[];t=c},c=>{this.authenticationService.presentAlert("Transacci\xf3n insegura","Precauci\xf3n","")})})}closeModal(){return(0,d.mG)(this,void 0,void 0,function*(){this.modalController.dismiss({data:"close"})})}}return p.\u0275fac=function(c){return new(c||p)(n.Y36(a.Br),n.Y36(a.IN),n.Y36(m.$),n.Y36(a.X1))},p.\u0275cmp=n.Xpm({type:p,selectors:[["app-my-modalpay"]],decls:13,vars:8,consts:[[3,"translucent"],["color","primary"],["collapse","true","slot","end"],[3,"click"],["slot","icon-only","name","close"],["size","small"],[1,"ion-padding",3,"fullscreen"],["align","center"],["class","detail-title",4,"ngIf"],["width","300","height","300","qrc-colorDark","#ff0000","qrc-colorLight","#0000ff",3,"elementType","value"],["class","double-width","color","warning",3,"click",4,"ngIf"],["title","Verifica cobro","horizontal","start","vertical","bottom","slot","fixed",4,"ngIf"],[1,"detail-title"],["color","warning",1,"double-width",3,"click"],["title","Verifica cobro","horizontal","start","vertical","bottom","slot","fixed"],["color","tw_botton1",3,"click"],["color","light","name","checkmark-done-circle-outline"]],template:function(c,t){1&c&&(n.TgZ(0,"ion-header",0),n.TgZ(1,"ion-toolbar",1),n.TgZ(2,"ion-buttons",2),n.TgZ(3,"ion-button",3),n.NdJ("click",function(){return t.closeModal()}),n._UZ(4,"ion-icon",4),n.qZA(),n.qZA(),n.TgZ(5,"ion-title",5),n._uU(6),n.qZA(),n.qZA(),n.qZA(),n.TgZ(7,"ion-content",6),n.TgZ(8,"div",7),n.YNc(9,P,5,4,"h3",8),n._UZ(10,"ngx-qrcode",9),n.qZA(),n.YNc(11,x,2,0,"ion-button",10),n.YNc(12,O,3,0,"ion-fab",11),n.qZA()),2&c&&(n.Q6J("translucent",!0),n.xp6(6),n.Oqu(t.tituloxx),n.xp6(1),n.Q6J("fullscreen",!0),n.xp6(2),n.Q6J("ngIf",!1),n.xp6(1),n.Q6J("elementType",t.elementType)("value",t.qrData),n.xp6(1),n.Q6J("ngIf","trasferencia"===t.tipo),n.xp6(1),n.Q6J("ngIf","pagoqr"===t.tipo))},directives:[a.Gu,a.sr,a.Sm,a.YG,a.gu,a.wd,a.W2,_.O5,M.zF,a.IJ,a.W4],pipes:[_.H9],styles:[".book-search-input[_ngcontent-%COMP%]{padding:6px;background:0 0;transition:top .5s ease;background:#bdbaba;border-bottom:1px solid rgba(0,0,0,.07);border-top:1px solid rgba(0,0,0,.07);margin-bottom:10px;margin-top:-1px;color:#fff;width:100%}.center[_ngcontent-%COMP%]{margin-left:auto;margin-right:auto;display:block}#countdown[_ngcontent-%COMP%]{position:relative;margin:100px auto auto;height:40px;width:40px;text-align:center}#countdown-number[_ngcontent-%COMP%]{color:#fff;display:inline-block;line-height:40px}svg[_ngcontent-%COMP%]{position:absolute;top:0;right:0;width:40px;height:40px;transform:rotateY(-180deg) rotate(-90deg)}svg[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%]{stroke-dasharray:113px;stroke-dashoffset:0px;stroke-linecap:round;stroke-width:2px;stroke:#fff;fill:none;-webkit-animation:countdown 10s linear infinite forwards;animation:countdown 10s linear infinite forwards}@-webkit-keyframes countdown{0%{stroke-dashoffset:0px}to{stroke-dashoffset:113px}}@keyframes countdown{0%{stroke-dashoffset:0px}to{stroke-dashoffset:113px}}.detail-title[_ngcontent-%COMP%]{font-size:22px;font-weight:500;color:var(--ion-color-dark-tint);margin:0;margin-bottom:calc(var(--page-margin) / 2)}"]}),p})()}}]);