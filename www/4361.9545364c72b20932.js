"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[4361],{50076:(x,b,l)=>{l.d(b,{oK:()=>r,GW:()=>_,dk:()=>f});var r=(()=>{return(n=r||(r={})).Prompt="PROMPT",n.Camera="CAMERA",n.Photos="PHOTOS",r;var n})(),_=(()=>{return(n=_||(_={})).Rear="REAR",n.Front="FRONT",_;var n})(),f=(()=>{return(n=f||(f={})).Uri="uri",n.Base64="base64",n.DataUrl="dataUrl",f;var n})()},26388:(x,b,l)=>{l.d(b,{dk:()=>_.dk,oK:()=>_.oK,V1:()=>f});var r=l(47423),_=l(50076);const f=(0,r.fo)("Camera",{web:()=>l.e(3954).then(l.bind(l,63954)).then(n=>new n.CameraWeb)})},94361:(x,b,l)=>{l.r(b),l.d(b,{formulariofotos2ListPageModule:()=>K});var r=l(23349),_=l(55787),f=l(69808),n=l(33678),m=l(51062),d=l(93075),v=l(36351),h=l(70655),T=l(68554),c=l(4707),p=l(63814),Z=l(15190),A=l(26388),t=l(5e3);const M=["inputId"],w=["fotoa"];function U(s,u){1&s&&(t.TgZ(0,"div",24),t._UZ(1,"ion-icon",25),t.TgZ(2,"span"),t._uU(3,"Ingrese nombre"),t.qZA(),t.qZA())}function q(s,u){if(1&s&&(t.TgZ(0,"ion-avatar",26),t._UZ(1,"ion-img",27),t.qZA()),2&s){const i=t.oxw();t.xp6(1),t.Q6J("src",i.fotoimg)}}function L(s,u){1&s&&(t.TgZ(0,"div",24),t._UZ(1,"ion-icon",25),t.TgZ(2,"span"),t._uU(3,"Ingrese un documento valido"),t.qZA(),t.qZA())}let C=(()=>{class s{constructor(i,e,o,a,g){this.modalController=i,this.translateService=e,this.authenticationService=o,this.navParams=a,this.actionSheetController=g,this.variables=[],this.userinfo=[],this.tituloxx="",this.fileToUpload=null,this.vgrupo=[],this.apifoto=this.authenticationService.getapifoto()}ngAfterViewInit(){setTimeout(()=>{this.inputElement.setFocus()},400)}dismissModal(){this.modalController.dismiss("close")}ionViewDidEnter(){}ngOnInit(){this.variables=this.navParams.get("variables"),this.userinfo=this.navParams.get("userinfo"),this.idllave=this.navParams.get("idllave"),this.act=this.navParams.get("act"),this.tituloxx=this.navParams.get("title"),this.Form=new d.cw({nombre:new d.NI("",d.kI.required),foto:new d.NI("",d.kI.required)}),null==this.navParams.get("record")?this.translateService.get("NUEVOM").subscribe(i=>{this.tituloxx=i+" "+this.tituloxx,this.lpermiso=i}):(this.translateService.get("ACTUALIZAM").subscribe(i=>{this.tituloxx=i+" "+this.tituloxx,this.lpermiso=i}),this._ID=this.navParams.data.record._id,this.Form.controls.nombre.setValue(this.navParams.data.record.nombre),this.authenticationService.convertToDataURLviaCanvas(this.authenticationService.getapifoto()+this.navParams.data.record.foto,"image/jpeg").then(i=>this.fotoimg=i),this.Form.controls.foto.setValue(this.navParams.data.record.foto))}submitForm0(){const i={idempresa:this.userinfo[0].idempresa._id,idpapa:this.idllave,actividad:this.act,nombrealias:this.userinfo[0].nombrealias,nombre:this.Form.controls.nombre.value,foto:this.Form.controls.foto.value,bitacora:{idempresa:this.userinfo[0].idempresa._id,idafiliado:"",email:this.userinfo[0].email,permiso:this.lpermiso,accion:this.tituloxx}};i&&(this.authenticationService.loadingPresent(),this.authenticationService.createRegsinload("",i,"formulariofotos2s").then(e=>{let o=[];o=e;const a=new FormData;a.append("uploadedFile",this.fileToUpload,this.fileToUpload.name),a.append("name",o._id),a.append("description","descripcion file"),this.authenticationService.addNewEvent(a).subscribe(g=>{this.authenticationService.loadingDismiss(),this.Form.valid&&this.modalController.dismiss("ok")},g=>{this.authenticationService.loadingDismiss(),this.authenticationService.presentAlert(g.error,"Precauci\xf3n","")})},e=>{this.authenticationService.loadingDismiss(),this.authenticationService.presentAlert(e.error,"Precauci\xf3n","")}))}submitForm1(){const i={idempresa:this.userinfo[0].idempresa._id,idpapa:this.idllave,actividad:this.act,nombrealias:this.userinfo[0].nombrealias,nombre:this.Form.controls.nombre.value,foto:this.Form.controls.foto.value,bitacora:{idempresa:this.userinfo[0].idempresa._id,idafiliado:"",email:this.userinfo[0].email,permiso:this.lpermiso,accion:this.tituloxx}};i&&(this.authenticationService.loadingPresent(),this.authenticationService.createRegsinload(this._ID,i,"formulariofotos2s").then(e=>{let o=[];o=e;const a=new FormData;if(this.fileToUpload)a.append("uploadedFile",this.fileToUpload,this.fileToUpload.name),a.append("name",o._id),a.append("description","descripcion file"),a.append("local","No"===this.userinfo[0].idempresa.siimagenes?"nube":"local"),this.authenticationService.addNewEvent(a).subscribe(g=>{this.authenticationService.loadingDismiss(),this.Form.valid&&this.modalController.dismiss("ok")},g=>{this.authenticationService.loadingDismiss(),this.authenticationService.presentAlert(g.error,"Precauci\xf3n","")});else{if(this.authenticationService.loadingDismiss(),!this.Form.valid)return;this.modalController.dismiss("ok")}},e=>{this.authenticationService.loadingDismiss(),this.authenticationService.presentAlert(e.error,"Precauci\xf3n","")}))}submitForm(){null==this.navParams.get("record")?this.submitForm0():this.submitForm1()}dacomponente(i,e){return(0,h.mG)(this,void 0,void 0,function*(){let o="";"ubicacion"===i&&(o=this.Form.controls.ubicacion.value);const a=yield this.modalController.create({component:p.B,swipeToClose:!1,backdropDismiss:!1,animated:!0,presentingElement:yield this.modalController.getTop(),componentProps:{variables:this.variables,record:null,userinfo:this.userinfo,uubx:o},cssClass:"modal-fullscreen"});return a.onWillDismiss().then(g=>{"close"===g.data||("direccion"===i?this.Form.controls.direccion.setValue(g.data.direccion):this.Form.controls.ubicacion.setValue(g.data.direccion+" {"+g.data.la+"\xb0"+g.data.lo+"}"))}),yield a.present()})}takePicture(i){return(0,h.mG)(this,void 0,void 0,function*(){const e=yield A.V1.getPhoto({correctOrientation:!0,height:200,width:200,quality:60,allowEditing:!0,resultType:A.dk.DataUrl,source:A.oK.Camera});this.authenticationService.generateFromImage(e.dataUrl,200,200,.5,o=>{"fotoa"===i&&(this.fotoimg=o,this.Form.controls.foto.setValue(this.authenticationService.procesafoto(this.Form.controls.foto.value)))})})}uploadPWA2(i,e){e&&e.length>0&&(this.fileToUpload=e.item(0),this.Form.controls.foto.setValue(this.fileToUpload.name))}uploadPWA(i){if("fotoa"===i){if(null==this.fotoa)return;this.uploadPWA2(i,this.fotoa.nativeElement.files)}}takePicture2(i){return(0,h.mG)(this,void 0,void 0,function*(){"fotoa"===i&&this.fotoa.nativeElement.click()})}fotodatos(i){return(0,h.mG)(this,void 0,void 0,function*(){this.takePicture2(i)})}combodatos(i,e,o,a,g,P){return(0,h.mG)(this,void 0,void 0,function*(){const k=yield this.modalController.create({component:Z.j,swipeToClose:!1,backdropDismiss:!1,animated:!0,presentingElement:yield this.modalController.getTop(),componentProps:{grabax:P,variables:this.variables,userinfo:this.userinfo,record2:null,op:e,frm:o,idllave:this.idllave,titlex:"Buscar "+g},cssClass:"modal-fullscreen"});return k.onWillDismiss().then(V=>{let y=[];y=V,"close"!==y.data&&this.Form.controls[a].setValue(y.data?y.data.nombre:"")}),yield k.present()})}}return s.\u0275fac=function(i){return new(i||s)(t.Y36(r.IN),t.Y36(m.sK),t.Y36(T.$),t.Y36(r.X1),t.Y36(r.BX))},s.\u0275cmp=t.Xpm({type:s,selectors:[["app-formulariofotos2-create"]],viewQuery:function(i,e){if(1&i&&(t.Gf(M,5),t.Gf(w,7)),2&i){let o;t.iGM(o=t.CRH())&&(e.inputElement=o.first),t.iGM(o=t.CRH())&&(e.fotoa=o.first)}},decls:40,vars:7,consts:[[1,"create-user-form","ion-page",3,"formGroup"],["color","primary"],["collapse","true","slot","end"],[3,"click"],["slot","icon-only","name","close"],["size","small"],[1,"create-form-content"],[1,"user-details-fields","fields-section"],["lines","full",1,"inputs-list"],[1,"input-item"],["position","floating"],["color","danger"],["inputMode","text","clearInput","true","formControlName","nombre","required",""],["inputId",""],[1,"error-container"],["class","error-message",4,"ngIf"],["type","file","id","fotoa","accept",".xls,.xlsx,.pdf,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-excel,",2,"visibility","hidden","height","0px",3,"change"],["fotoa",""],["inputMode","text","clearInput","true","formControlName","foto",3,"readonly"],["slot","end",4,"ngIf"],["title","Adjuntar Archivo",3,"click"],["slot","icon-only","name","document-outline"],[1,"form-actions-wrapper"],["color","primary","expand","block","fill","outline","type","submit",3,"disabled","click"],[1,"error-message"],["name","information-circle-outline"],["slot","end"],["ionImgViewer","","scheme","dark",3,"src"]],template:function(i,e){1&i&&(t.TgZ(0,"form",0),t.TgZ(1,"ion-header"),t.TgZ(2,"ion-toolbar",1),t.TgZ(3,"ion-buttons",2),t.TgZ(4,"ion-button",3),t.NdJ("click",function(){return e.dismissModal()}),t._UZ(5,"ion-icon",4),t.qZA(),t.qZA(),t.TgZ(6,"ion-title",5),t._uU(7),t.qZA(),t.qZA(),t.qZA(),t.TgZ(8,"ion-content",6),t.TgZ(9,"section",7),t.TgZ(10,"ion-list",8),t.TgZ(11,"ion-item",9),t.TgZ(12,"ion-label",10),t._uU(13,"Nombre"),t.TgZ(14,"ion-text",11),t._uU(15,"*"),t.qZA(),t.qZA(),t._UZ(16,"ion-input",12,13),t.qZA(),t.TgZ(18,"div",14),t.YNc(19,U,4,0,"div",15),t.qZA(),t.TgZ(20,"input",16,17),t.NdJ("change",function(){return e.uploadPWA("fotoa")}),t.qZA(),t.TgZ(22,"ion-item",9),t.TgZ(23,"ion-label"),t._uU(24,"Documento"),t.TgZ(25,"ion-text",11),t._uU(26,"*"),t.qZA(),t.qZA(),t._UZ(27,"ion-input",18,13),t.YNc(29,q,2,1,"ion-avatar",19),t.TgZ(30,"ion-buttons",2),t.TgZ(31,"ion-button",20),t.NdJ("click",function(){return e.fotodatos("fotoa")}),t._UZ(32,"ion-icon",21),t.qZA(),t.qZA(),t.qZA(),t.TgZ(33,"div",14),t.YNc(34,L,4,0,"div",15),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(35,"ion-footer"),t.TgZ(36,"ion-row",22),t.TgZ(37,"ion-col"),t.TgZ(38,"ion-button",23),t.NdJ("click",function(){return e.submitForm()}),t._uU(39,"CREAR"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&i&&(t.Q6J("formGroup",e.Form),t.xp6(7),t.Oqu(e.tituloxx),t.xp6(12),t.Q6J("ngIf",e.Form.get("nombre").hasError("required")&&(e.Form.get("nombre").dirty||e.Form.get("nombre").touched)),t.xp6(8),t.Q6J("readonly",!0),t.xp6(2),t.Q6J("ngIf",void 0!==e.fotoimg),t.xp6(5),t.Q6J("ngIf",e.Form.get("foto").hasError("required")&&(e.Form.get("foto").dirty||e.Form.get("foto").touched)),t.xp6(4),t.Q6J("disabled",!e.Form.valid))},directives:[d._Y,d.JL,d.sg,r.Gu,r.sr,r.Sm,r.YG,r.gu,r.wd,r.W2,r.q_,r.Ie,r.Q$,r.yW,r.pK,r.j9,d.JJ,d.u,d.Q7,f.O5,r.fr,r.Nd,r.wI,r.BJ,r.Xz,v.Bg],styles:["[_nghost-%COMP%]{--page-margin: var(--app-fair-margin);--page-background: var(--app-background);--page-background-shade: var(--app-background-shade);--page-tags-gutter: 5px}"]}),s})();var F=l(26806);function I(s,u){if(1&s){const i=t.EpF();t.TgZ(0,"ion-button",6),t.NdJ("click",function(){return t.CHM(i),t.oxw().addRecord()}),t.ALo(1,"translate"),t._UZ(2,"ion-icon",28),t.qZA()}2&s&&t.MGl("title"," ",t.lcZ(1,1,"AGREGARM"),"")}function N(s,u){if(1&s){const i=t.EpF();t.TgZ(0,"ion-button",29),t.NdJ("click",function(){return t.CHM(i),t.oxw().changeToList()}),t._UZ(1,"ion-icon",30),t.qZA()}}function S(s,u){if(1&s){const i=t.EpF();t.TgZ(0,"ion-button",29),t.NdJ("click",function(){return t.CHM(i),t.oxw().changeToGrid()}),t._UZ(1,"ion-icon",31),t.qZA()}}function E(s,u){if(1&s&&(t.TgZ(0,"ion-label"),t._uU(1),t.ALo(2,"translate"),t.ALo(3,"translate"),t.qZA()),2&s){const i=t.oxw();t.xp6(1),t.lnq("",t.lcZ(2,3,"NOREGISTROSM")," ",i.itemsList.length," ",t.lcZ(3,5,"NOREGISTROSM5"),"")}}function O(s,u){1&s&&(t.TgZ(0,"ion-item",33),t.TgZ(1,"ion-label",34),t._UZ(2,"skeleton-element"),t._UZ(3,"skeleton-element"),t._UZ(4,"skeleton-element",35),t.qZA(),t.qZA())}const D=function(){return[0,1,2,3,4,5,6]};function J(s,u){1&s&&(t.TgZ(0,"ion-list"),t.YNc(1,O,5,0,"ion-item",32),t.qZA()),2&s&&(t.xp6(1),t.Q6J("ngForOf",t.DdM(1,D)))}function R(s,u){if(1&s){const i=t.EpF();t.TgZ(0,"ion-button",46),t.NdJ("click",function(){t.CHM(i);const o=t.oxw().$implicit;return t.oxw(2).descargar(o)}),t._UZ(1,"ion-icon",47),t.qZA()}}function G(s,u){if(1&s){const i=t.EpF();t.TgZ(0,"ion-button",6),t.NdJ("click",function(){t.CHM(i);const o=t.oxw().$implicit;return t.oxw(2).deleteRecord(o)}),t.ALo(1,"translate"),t._UZ(2,"ion-icon",48),t.qZA()}2&s&&t.s9C("title",t.lcZ(1,1,"ELIMINARM"))}function Q(s,u){if(1&s){const i=t.EpF();t.TgZ(0,"ion-item",37),t.TgZ(1,"ion-grid"),t.TgZ(2,"ion-row"),t.TgZ(3,"ion-col",38),t.NdJ("click",function(){const a=t.CHM(i).$implicit;return t.oxw(2).updateRecord(a)}),t._UZ(4,"ion-icon",39),t.TgZ(5,"ion-label",34),t.TgZ(6,"ion-note",40),t._uU(7),t.qZA(),t._UZ(8,"br"),t.TgZ(9,"p"),t.TgZ(10,"strong"),t._uU(11,"Nombre:"),t.qZA(),t._uU(12),t._UZ(13,"br"),t.TgZ(14,"strong"),t._uU(15,"Documento:"),t.qZA(),t._uU(16),t._UZ(17,"br"),t.qZA(),t.TgZ(18,"ion-badge",41),t._uU(19),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(20,"ion-row"),t.TgZ(21,"div",42),t._UZ(22,"br"),t._uU(23),t.ALo(24,"date"),t._UZ(25,"br"),t._uU(26),t.ALo(27,"date"),t._UZ(28,"br"),t._uU(29," \xa0\xa0\xa0\xa0\xa0"),t.TgZ(30,"strong"),t._uU(31," Actividad"),t.qZA(),t._uU(32),t.qZA(),t.TgZ(33,"ion-col",17),t.TgZ(34,"ion-toolbar",43),t.TgZ(35,"ion-buttons",44),t.YNc(36,R,2,0,"ion-button",45),t.qZA(),t.TgZ(37,"ion-buttons",44),t.YNc(38,G,3,3,"ion-button",5),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()}if(2&s){const i=u.$implicit,e=u.index,o=t.oxw(2);t.xp6(7),t.hij("No. ",e+1,""),t.xp6(5),t.hij(" ",i.nombre," "),t.xp6(4),t.hij(" ",i.foto," "),t.xp6(3),t.Oqu(i.estado),t.xp6(4),t.AsE("\xa0\xa0\xa0\xa0\xa0 Creaci\xf3n:[",i.nombrealiasnew," ,",t.xi3(24,11,i.createdAt,"dd-MM-yyyy, hh:mm aaa")," ]"),t.xp6(3),t.AsE(" \xa0\xa0\xa0\xa0\xa0Actualiza :[",i.nombrealiasup,",",t.xi3(27,14,i.updatedAt,"dd-MM-yyyy, hh:mm aaa"),"] "),t.xp6(6),t.hij(": ",i.actividad," "),t.xp6(4),t.Q6J("ngIf","activo"===o.estadointerno0),t.xp6(2),t.Q6J("ngIf","activo"===o.estadointerno0&&o.userinfo[0].email===i.usuarionew)}}function Y(s,u){if(1&s&&(t.TgZ(0,"ion-list"),t.YNc(1,Q,39,17,"ion-item",36),t.qZA()),2&s){const i=t.oxw();t.xp6(1),t.Q6J("ngForOf",i.itemsList)("ngForTrackBy",i.trackItems)}}function B(s,u){if(1&s){const i=t.EpF();t.TgZ(0,"ion-button",6),t.NdJ("click",function(){t.CHM(i);const o=t.oxw().$implicit;return t.oxw(2).deleteRecord(o)}),t.ALo(1,"translate"),t._UZ(2,"ion-icon",48),t.qZA()}2&s&&t.s9C("title",t.lcZ(1,1,"ELIMINARM"))}function j(s,u){if(1&s){const i=t.EpF();t.TgZ(0,"ion-col",50),t.TgZ(1,"ion-card"),t.TgZ(2,"ion-row",51),t.TgZ(3,"ion-col"),t.TgZ(4,"span",52),t._uU(5,"No."),t.qZA(),t.TgZ(6,"span",53),t._uU(7),t.qZA(),t.qZA(),t.TgZ(8,"ion-col"),t.TgZ(9,"span",52),t._uU(10),t.qZA(),t.qZA(),t.qZA(),t.TgZ(11,"ion-item",37),t.TgZ(12,"ion-label",54),t.NdJ("click",function(){const a=t.CHM(i).$implicit;return t.oxw(2).updateRecord(a)}),t.TgZ(13,"p"),t.TgZ(14,"strong"),t._uU(15,"Nombre:"),t.qZA(),t._uU(16),t._UZ(17,"br"),t.TgZ(18,"strong"),t._uU(19,"Documento:"),t.qZA(),t._uU(20),t._UZ(21,"br"),t.qZA(),t.qZA(),t.qZA(),t._UZ(22,"ion-card-content"),t.TgZ(23,"ion-row",55),t.TgZ(24,"div",42),t._UZ(25,"br"),t._uU(26),t.ALo(27,"date"),t._UZ(28,"br"),t._uU(29),t.ALo(30,"date"),t._UZ(31,"br"),t._uU(32," \xa0\xa0\xa0\xa0\xa0"),t.TgZ(33,"strong"),t._uU(34," Actividad"),t.qZA(),t._uU(35),t.qZA(),t.TgZ(36,"ion-col",17),t.TgZ(37,"ion-toolbar",43),t.TgZ(38,"ion-buttons",44),t.TgZ(39,"ion-button",46),t.NdJ("click",function(){const a=t.CHM(i).$implicit;return t.oxw(2).descargar(a)}),t._UZ(40,"ion-icon",47),t.qZA(),t.qZA(),t.TgZ(41,"ion-buttons",44),t.YNc(42,B,3,3,"ion-button",5),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()}if(2&s){const i=u.$implicit,e=u.index,o=t.oxw(2);t.xp6(7),t.hij("",e+1," "),t.xp6(3),t.hij("",i.estado," "),t.xp6(6),t.hij(" ",i.nombre," "),t.xp6(4),t.hij(" ",i.foto," "),t.xp6(6),t.AsE("\xa0\xa0\xa0\xa0\xa0 Creaci\xf3n:[",i.nombrealiasnew," ,",t.xi3(27,10,i.createdAt,"dd-MM-yyyy, hh:mm aaa")," ]"),t.xp6(3),t.AsE(" \xa0\xa0\xa0\xa0\xa0Actualiza :[",i.nombrealiasup,",",t.xi3(30,13,i.updatedAt,"dd-MM-yyyy, hh:mm aaa"),"] "),t.xp6(6),t.hij(": ",i.actividad," "),t.xp6(7),t.Q6J("ngIf","activo"===o.estadointerno0&&o.userinfo[0].email===i.usuarionew)}}function W(s,u){if(1&s&&(t.TgZ(0,"ion-grid"),t.TgZ(1,"ion-row"),t.YNc(2,j,43,16,"ion-col",49),t.qZA(),t.qZA()),2&s){const i=t.oxw();t.xp6(2),t.Q6J("ngForOf",i.itemsList)("ngForTrackBy",i.trackItems)}}function H(s,u){1&s&&(t.TgZ(0,"h3",56),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&s&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"NODATOS")," "))}let z=(()=>{class s{constructor(i,e,o,a,g,P){this.routerOutlet=i,this.router=e,this.authenticationService=o,this.alertController=a,this.translateService=g,this.modalController=P,this.showAgeFilter=!1,this.showmenu=!1,this.items=[],this.variables=[],this.userinfo=[],this.viewType="grid",this.tituloxx="",this.efecto=0,this.seguro="",this.msg="",this.currentSegment="Todos",this.searchSubject=new c.t(1),this.apifoto=this.authenticationService.getapifoto()}changeToList(){this.viewType="list"}changeToGrid(){this.viewType="grid"}ngOnInit(){this.variables=this.router.getCurrentNavigation().extras.state.variables,this.idllave=this.router.getCurrentNavigation().extras.state.idllave,this.estadointerno0=this.router.getCurrentNavigation().extras.state.estadointerno0,this.act=this.router.getCurrentNavigation().extras.state.record2.act,this.userinfo=this.authenticationService.getcopiauser(),this.tituloxx=this.router.getCurrentNavigation().extras.state.title,this.searchQuery="",this.translateService.get("SEGUROM").subscribe(i=>{this.seguro=i}),this.translateService.get("MSGM").subscribe(i=>{this.msg=i}),this.rangeForm=new d.cw({dual:new d.NI({lower:1,upper:100})}),this.currentSegment="todos",this.pideregistros(this.currentSegment)}filterContacts(i){let e=i.detail.value;this.currentSegment=e,this.pideregistros(e)}pideregistros0(){this.pideregistros(this.currentSegment)}pideregistros(i){this.itemsList=[],this.efecto=0,this.authenticationService.getReg("todos/"+i+"/"+this.userinfo[0].idempresa._id+"/"+this.idllave,"formulariofotos2s",0).then(e=>{this.efecto=1,this.items=e,this.itemsList=this.items},e=>{this.authenticationService.presentAlert(e.error,this.msg,"")})}trackItems(i,e){return e.id}searchList(){this.searchSubject.next({lower:this.rangeForm.controls.dual.value.lower,upper:this.rangeForm.controls.dual.value.upper,query:this.searchQuery}),this.itemsList=this.filterList(this.items,this.searchQuery&&null!==this.searchQuery?this.searchQuery:"")}filterList(i,e){return i.filter(o=>o.nombre.toLowerCase().includes(e.toLowerCase()))}otrasop(i){return(0,h.mG)(this,void 0,void 0,function*(){yield(yield this.alertController.create({cssClass:"my-custom-class",header:"Seleccione Opci\xf3n",inputs:[{name:"Productos",type:"radio",label:"Productos",checked:!0,value:"/ProductoListPage\xb0Productos ->"+i.nombre}],buttons:[{text:"Cancel",role:"cancel",cssClass:"secondary",handler:o=>{}},{text:"Ok",handler:o=>{var a=o.split("\xb0");this.router.navigate([a[0]],{state:{variables:this.variables,user:null,idllave:i._id,title:a[1]}})}}]})).present()})}descargar(i){return(0,h.mG)(this,void 0,void 0,function*(){const e=new FormData;e.append("name","111"),e.append("description","descripcion file"),"No"===this.userinfo[0].idempresa.siimagenes?(e.append("local","nube"),this.authenticationService.getReg(i._id+"/nube\xac"+i.foto,"fileuploadxs",0).then(o=>(0,h.mG)(this,void 0,void 0,function*(){this.authenticationService.addNewEvent2nube(e,o)}))):(e.append("local","local"),this.authenticationService.addNewEvent2(e,i._id+"/"+i.foto))})}deleteRecord(i){return(0,h.mG)(this,void 0,void 0,function*(){yield(yield this.alertController.create({header:this.seguro,message:"",buttons:[{text:"No",cssClass:"secondary",handler:o=>{}},{text:"Si",handler:()=>{this.authenticationService.deleteReg(i._id+"/"+this.userinfo[0].email+"/"+this.userinfo[0].idempresa._id+"/na","formulariofotos2s").then(a=>{this.pideregistros(this.currentSegment)},a=>{this.authenticationService.presentAlert(a.error,this.msg,"")})}}]})).present()})}updateRecord(i){return(0,h.mG)(this,void 0,void 0,function*(){if("activo"===this.estadointerno0&&this.userinfo[0].email===i.usuarionew){const e=yield this.modalController.create({component:C,swipeToClose:!0,presentingElement:this.routerOutlet.nativeEl,componentProps:{act:this.act,variables:this.variables,record:i,userinfo:this.userinfo,idllave:this.idllave,title:this.tituloxx},cssClass:"modal-fullscreen"});return e.onWillDismiss().then(o=>{"close"!==o.data&&this.pideregistros(this.currentSegment)}),yield e.present()}})}addRecord(){return(0,h.mG)(this,void 0,void 0,function*(){const i=yield this.modalController.create({component:C,swipeToClose:!1,backdropDismiss:!1,animated:!0,presentingElement:yield this.modalController.getTop(),componentProps:{act:this.act,variables:this.variables,record:null,userinfo:this.userinfo,idllave:this.idllave,title:this.tituloxx},cssClass:"modal-fullscreen"});return i.onWillDismiss().then(e=>{"close"!==e.data&&this.pideregistros(this.currentSegment)}),yield i.present()})}loadData(i){setTimeout(()=>{i.target.complete(),1e3===this.items.length&&(i.target.disabled=!0)},500)}}return s.\u0275fac=function(i){return new(i||s)(t.Y36(r.jP),t.Y36(_.F0),t.Y36(T.$),t.Y36(r.Br),t.Y36(m.sK),t.Y36(r.IN))},s.\u0275cmp=t.Xpm({type:s,selectors:[["app-formulariofotos2-list"]],viewQuery:function(i,e){if(1&i&&t.Gf(r.ju,5),2&i){let o;t.iGM(o=t.CRH())&&(e.infiniteScroll=o.first)}},decls:43,vars:24,consts:[["color","primary"],["slot","start"],["defaultHref","formulariomovilsproceso2CreatePage"],["size","small"],["collapse","true","slot","end"],[3,"title","click",4,"ngIf"],[3,"title","click"],["slot","icon-only","name","refresh-circle-outline"],[3,"click",4,"ngIf"],[1,"filters-toolbar"],["align-items-center","",1,"searchbar-row"],["animated","",3,"ngModel","placeholder","ngModelChange","ionChange"],[1,"call-to-action-col",3,"hidden"],["fill","clear","color","secondary",1,"filters-btn",3,"title","click"],["slot","icon-only","name","options"],[3,"formGroup","hidden"],[1,"range-item-row"],["size","12"],[1,"range-header"],[1,"range-value"],[1,"range-label"],["formControlName","dual","color","secondary","pin","true","dualKnobs","true","min","1","max","100","step","1","debounce","400",1,"range-control",3,"ionChange"],[1,"user-friends-content"],["sticky",""],[4,"ngIf"],["class","empty-list-message",4,"ngIf"],["threshold","100px",3,"ionInfinite"],["loadingSpinner","bubbles","loadingText","Espere un momento..."],["slot","icon-only","name","add"],[3,"click"],["slot","icon-only","name","grid"],["slot","icon-only","name","list"],["lines","none",4,"ngFor","ngForOf"],["lines","none"],[1,"ion-text-wrap"],["width","67%"],["class","item md in-list ion-activatable ion-focusable item-label hydrated",4,"ngFor","ngForOf","ngForTrackBy"],[1,"item","md","in-list","ion-activatable","ion-focusable","item-label","hydrated"],["size","12",3,"click"],["name","server-outline","slot","start"],["slot","end"],["color","medium"],[2,"font-size","10px","text-transform","capitalize","text-align","left"],["color","transparent"],["slot","secondary"],["title","Descargar archivo",3,"click",4,"ngIf"],["title","Descargar archivo",3,"click"],["slot","icon-only","name","cloud-download-outline"],["slot","icon-only","name","trash-outline"],["size-lg","6","size-sm","6","size","12",4,"ngFor","ngForOf","ngForTrackBy"],["size-lg","6","size-sm","6","size","12"],[1,"user-stats-wrapper","user-details-wrapper"],[1,"user-stat-value"],[1,"user-stat-name"],[1,"ion-text-wrap",3,"click"],["no-padding",""],[1,"empty-list-message"]],template:function(i,e){1&i&&(t.TgZ(0,"ion-header"),t.TgZ(1,"ion-toolbar",0),t.TgZ(2,"ion-buttons",1),t._UZ(3,"ion-back-button",2),t.qZA(),t.TgZ(4,"ion-title",3),t._uU(5),t.qZA(),t.TgZ(6,"ion-buttons",4),t.YNc(7,I,3,3,"ion-button",5),t.TgZ(8,"ion-button",6),t.NdJ("click",function(){return e.pideregistros0()}),t.ALo(9,"translate"),t._UZ(10,"ion-icon",7),t.qZA(),t.YNc(11,N,2,0,"ion-button",8),t.YNc(12,S,2,0,"ion-button",8),t.qZA(),t.qZA(),t.TgZ(13,"ion-toolbar",9),t.TgZ(14,"ion-row",10),t.TgZ(15,"ion-col"),t.TgZ(16,"ion-searchbar",11),t.NdJ("ngModelChange",function(a){return e.searchQuery=a})("ionChange",function(){return e.searchList()}),t.ALo(17,"translate"),t.qZA(),t.qZA(),t.TgZ(18,"ion-col",12),t.TgZ(19,"ion-button",13),t.NdJ("click",function(){return e.showAgeFilter=!e.showAgeFilter}),t.ALo(20,"translate"),t._UZ(21,"ion-icon",14),t.qZA(),t.qZA(),t.qZA(),t.TgZ(22,"form",15),t.TgZ(23,"ion-row",16),t.TgZ(24,"ion-col",17),t.TgZ(25,"div",18),t.TgZ(26,"span",19),t._uU(27),t.qZA(),t.TgZ(28,"span",20),t._uU(29,"Filter by age"),t.qZA(),t.TgZ(30,"span",19),t._uU(31),t.qZA(),t.qZA(),t.qZA(),t.TgZ(32,"ion-col",17),t.TgZ(33,"ion-range",21),t.NdJ("ionChange",function(){return e.searchList()}),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(34,"ion-content",22),t.TgZ(35,"ion-item-divider",23),t.YNc(36,E,4,7,"ion-label",24),t.qZA(),t.YNc(37,J,2,2,"ion-list",24),t.YNc(38,Y,2,2,"ion-list",24),t.YNc(39,W,3,2,"ion-grid",24),t.YNc(40,H,3,3,"h3",25),t.TgZ(41,"ion-infinite-scroll",26),t.NdJ("ionInfinite",function(a){return e.loadData(a)}),t._UZ(42,"ion-infinite-scroll-content",27),t.qZA(),t.qZA()),2&i&&(t.xp6(5),t.hij(" ",e.tituloxx," "),t.xp6(2),t.Q6J("ngIf","activo"===e.estadointerno0),t.xp6(1),t.MGl("title"," ",t.lcZ(9,18,"REFRESCARM"),""),t.xp6(3),t.Q6J("ngIf","grid"===e.viewType),t.xp6(1),t.Q6J("ngIf","list"===e.viewType),t.xp6(4),t.s9C("placeholder",t.lcZ(17,20,"BUSCARM")),t.Q6J("ngModel",e.searchQuery),t.xp6(2),t.Q6J("hidden",!e.showAgeFilter),t.xp6(1),t.MGl("title"," ",t.lcZ(20,22,"FILTROM"),""),t.xp6(3),t.Q6J("formGroup",e.rangeForm)("hidden",!e.showAgeFilter),t.xp6(5),t.Oqu(e.rangeForm.controls.dual.value.lower),t.xp6(4),t.Oqu(e.rangeForm.controls.dual.value.upper),t.xp6(5),t.Q6J("ngIf",(null==e.itemsList?null:e.itemsList.length)>0),t.xp6(1),t.Q6J("ngIf",0===e.efecto),t.xp6(1),t.Q6J("ngIf",(null==e.itemsList?null:e.itemsList.length)>0&&"list"===e.viewType),t.xp6(1),t.Q6J("ngIf",(null==e.itemsList?null:e.itemsList.length)>0&&"grid"===e.viewType),t.xp6(1),t.Q6J("ngIf",0===(null==e.itemsList?null:e.itemsList.length)))},directives:[r.Gu,r.sr,r.Sm,r.oU,r.cs,r.wd,f.O5,r.YG,r.gu,r.Nd,r.wI,r.VI,r.j9,d.JJ,d.On,d._Y,d.JL,d.sg,r.I_,r.QI,d.u,r.W2,r.rH,r.ju,r.MB,r.Q$,r.q_,f.sg,r.Ie,F.B,r.jY,r.uN,r.yp,r.PM,r.FN],pipes:[m.X$,f.uU],styles:["[_nghost-%COMP%]{--page-margin: var(--app-narrow-margin);--page-border-radius: var(--app-fair-radius);--page-segment-background: var(--app-background);--page-segment-indicator-height: 2px}ion-item-divider[_ngcontent-%COMP%]{--background: var(--ion-color-light);--padding-start: var(--page-margin)}[_nghost-%COMP%]{--page-margin: var(--app-fair-margin);--page-background: var(--app-background);--page-background-shade: var(--app-background-shade);--page-tags-gutter: 5px}"]}),s})(),K=(()=>{class s{}return s.\u0275fac=function(i){return new(i||s)},s.\u0275mod=t.oAB({type:s}),s.\u0275inj=t.cJS({imports:[[f.ez,r.Pc,n.K,d.u5,d.UX,v.YL,_.Bz.forChild([{path:"",component:z}]),m.aw.forChild()]]}),s})()},63814:(x,b,l)=>{l.d(b,{B:()=>v});var r=l(70655),_=l(47423),f=l(96090),n=l(5e3),m=l(23349);const d=["search"];let v=(()=>{class h{constructor(c,p,Z){this.modalController=c,this.ngZone=p,this.navParams=Z,this.title="AGM project",this.zoom=16}dismissModal(){this.modalController.dismiss("close")}dadireccion(){this.modalController.dismiss({direccion:this.address,la:this.latitude,lo:this.longitude})}ngOnInit(){this.uubx=this.navParams.get("uubx")}loadMap(){}clearWatch(){null!=this.watchId&&f.b.clearWatch({id:this.watchId})}setCurrentLocationa33(){if(_.dV.isPluginAvailable("Geolocation"))try{this.watchId=f.b.watchPosition({timeout:1e3,enableHighAccuracy:!0,maximumAge:1e3},(c,p)=>{c&&(this.latitude=c.coords.latitude,this.longitude=c.coords.longitude)})}catch(c){console.error(c)}}setCurrentLocationa(){try{this.watchId=f.b.watchPosition({timeout:1e3,enableHighAccuracy:!0,maximumAge:1e3},(c,p)=>{c&&(this.latitude=c.coords.latitude,this.longitude=c.coords.longitude,this.getAddress(this.latitude,this.longitude))})}catch(c){console.error(c)}}setCurrentLocation2a(){if(_.dV.isPluginAvailable("Geolocation"))try{this.watchId=f.b.watchPosition({timeout:1e3,enableHighAccuracy:!0,maximumAge:1e3},(c,p)=>{this.latitude=Number(this.uubx.substring(this.uubx.indexOf("{")+1,this.uubx.indexOf("\xb0"))),this.longitude=Number(this.uubx.substring(this.uubx.indexOf("\xb0")+1,this.uubx.indexOf("}"))),0!==this.latitude&&this.latitude&&this.getAddress(this.latitude,this.longitude)})}catch(c){console.error(c)}}markerDragEnd(c){0!==this.latitude&&this.latitude&&(this.latitude=c.coords.lat,this.longitude=c.coords.lng,this.getAddress(this.latitude,this.longitude))}getAddress(c,p){this.geoCoder.geocode({location:{lat:c,lng:p}},(Z,A)=>{"OK"===A?Z[0]?this.address=Z[0].formatted_address:window.alert("No results found"):window.alert("Geocoder failed due to: "+A)})}closeModal(){return(0,r.mG)(this,void 0,void 0,function*(){this.modalController.dismiss("close")})}}return h.\u0275fac=function(c){return new(c||h)(n.Y36(m.IN),n.Y36(n.R0b),n.Y36(m.X1))},h.\u0275cmp=n.Xpm({type:h,selectors:[["app-my-modal"]],viewQuery:function(c,p){if(1&c&&n.Gf(d,5),2&c){let Z;n.iGM(Z=n.CRH())&&(p.searchElementRef=Z.first)}},decls:19,vars:6,consts:[[3,"translucent"],["color","primary"],["shape","round","color","dark",3,"click"],["slot","start","name","locate"],["collapse","true","slot","end"],[3,"click"],["slot","icon-only","name","close"],["size","small"],[1,"ion-padding",3,"fullscreen"],["id","book-search-input","role","search"],["type","text","placeholder","Ingrese direcci\xf3n","autocorrect","off","autocapitalize","off","spellcheck","off","type","text",1,"book-search-input","native-input","sc-ion-input-ios",3,"keydown.enter"],["search",""],["type","submit","expand","block",1,"login-btn",3,"click"]],template:function(c,p){1&c&&(n.TgZ(0,"ion-header",0),n.TgZ(1,"ion-toolbar",1),n.TgZ(2,"ion-button",2),n.NdJ("click",function(){return p.loadMap()}),n._UZ(3,"ion-icon",3),n._uU(4," Ubicaci\xf3n "),n.qZA(),n.TgZ(5,"ion-buttons",4),n.TgZ(6,"ion-button",5),n.NdJ("click",function(){return p.closeModal()}),n._UZ(7,"ion-icon",6),n.qZA(),n.qZA(),n.TgZ(8,"ion-title",7),n._uU(9),n.qZA(),n.qZA(),n.qZA(),n.TgZ(10,"ion-content",8),n._uU(11),n.TgZ(12,"div",9),n.TgZ(13,"input",10,11),n.NdJ("keydown.enter",function(A){return A.preventDefault()}),n.qZA(),n.qZA(),n.TgZ(15,"h5"),n._uU(16),n.qZA(),n.TgZ(17,"ion-button",12),n.NdJ("click",function(){return p.dadireccion()}),n._uU(18,"Seleccionar"),n.qZA(),n.qZA()),2&c&&(n.Q6J("translucent",!0),n.xp6(9),n.Oqu(p.tituloxx),n.xp6(1),n.Q6J("fullscreen",!0),n.xp6(1),n.AsE("\n",p.latitude,", ",p.longitude," "),n.xp6(5),n.hij("Direcci\xf3n: ",p.address,""))},directives:[m.Gu,m.sr,m.YG,m.gu,m.Sm,m.wd,m.W2],styles:[".book-search-input[_ngcontent-%COMP%]{padding:6px;background:0 0;transition:top .5s ease;background:#bdbaba;border-bottom:1px solid rgba(0,0,0,.07);border-top:1px solid rgba(0,0,0,.07);margin-bottom:10px;margin-top:-1px;color:#fff;width:100%}"]}),h})()},26806:(x,b,l)=>{l.d(b,{B:()=>n});var r=l(5e3),_=l(69808);const f=function(m,d){return{"no-animated":m,inline:d}};let n=(()=>{class m{constructor(){this.width="100%",this.height="16px",this.borderRadius="0",this.rounded=!1,this.noAnimated=!1,this.inline=!1,this.styles={}}ngOnInit(){this.styles={width:this.width,height:this.height,borderRadius:this.borderRadius},this.rounded&&(this.styles.borderRadius="999em")}}return m.\u0275fac=function(v){return new(v||m)},m.\u0275cmp=r.Xpm({type:m,selectors:[["skeleton-element"]],inputs:{width:"width",height:"height",borderRadius:"borderRadius",rounded:"rounded",noAnimated:"noAnimated",inline:"inline"},decls:1,vars:5,consts:[[3,"ngClass","ngStyle"]],template:function(v,h){1&v&&r._UZ(0,"div",0),2&v&&r.Q6J("ngClass",r.WLB(2,f,h.noAnimated,h.inline))("ngStyle",h.styles)},directives:[_.mk,_.PC],styles:["[_nghost-%COMP%]{display:block}[inline][_nghost-%COMP%]{display:inline-block}[_nghost-%COMP%]   .inline[_ngcontent-%COMP%]{display:inline-block}[_nghost-%COMP%]   .no-animated[_ngcontent-%COMP%]{-webkit-animation:none!important;animation:none!important;background:rgba(130,130,130,.2)}.animated-background[_ngcontent-%COMP%], [_nghost-%COMP%]   div[_ngcontent-%COMP%]{-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-name:placeHolderShimmer;animation-name:placeHolderShimmer;-webkit-animation-timing-function:linear;animation-timing-function:linear;background:rgba(130,130,130,.2);background:linear-gradient(to right,rgba(130,130,130,.2) 8%,rgba(130,130,130,.3) 18%,rgba(130,130,130,.2) 33%);background-size:800px 100px;position:relative}@-webkit-keyframes placeHolderShimmer{0%{background-position:-468px 0}to{background-position:468px 0}}@keyframes placeHolderShimmer{0%{background-position:-468px 0}to{background-position:468px 0}}"]}),m})()}}]);