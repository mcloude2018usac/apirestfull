"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[4782],{50076:(P,b,l)=>{l.d(b,{oK:()=>o,GW:()=>_,dk:()=>h});var o=(()=>{return(a=o||(o={})).Prompt="PROMPT",a.Camera="CAMERA",a.Photos="PHOTOS",o;var a})(),_=(()=>{return(a=_||(_={})).Rear="REAR",a.Front="FRONT",_;var a})(),h=(()=>{return(a=h||(h={})).Uri="uri",a.Base64="base64",a.DataUrl="dataUrl",h;var a})()},26388:(P,b,l)=>{l.d(b,{dk:()=>_.dk,oK:()=>_.oK,V1:()=>h});var o=l(47423),_=l(50076);const h=(0,o.fo)("Camera",{web:()=>l.e(3954).then(l.bind(l,63954)).then(a=>new a.CameraWeb)})},4782:(P,b,l)=>{l.r(b),l.d(b,{frmactividadcamposdListPageModule:()=>H});var o=l(23349),_=l(55787),h=l(69808),a=l(33678),u=l(51062),d=l(93075),T=l(36351),p=l(70655),Z=l(68554),c=l(4707),f=l(63814),v=l(15190),C=l(26388),i=l(5e3);const k=["inputId"],L=["fotoa"];function F(s,m){1&s&&(i.TgZ(0,"div",32),i._UZ(1,"ion-icon",33),i.TgZ(2,"span"),i._uU(3,"Ingrese un campo a validar valido"),i.qZA(),i.qZA())}function I(s,m){1&s&&(i.TgZ(0,"div",32),i._UZ(1,"ion-icon",33),i.TgZ(2,"span"),i._uU(3,"Ingrese un tipo de validaci\xf3n valido"),i.qZA(),i.qZA())}function w(s,m){1&s&&(i.TgZ(0,"div",32),i._UZ(1,"ion-icon",33),i.TgZ(2,"span"),i._uU(3,"Ingrese un campo a comparar valido"),i.qZA(),i.qZA())}function O(s,m){1&s&&(i.TgZ(0,"div",32),i._UZ(1,"ion-icon",33),i.TgZ(2,"span"),i._uU(3,"Ingrese un valor a comparar"),i.qZA(),i.qZA())}function E(s,m){1&s&&(i.TgZ(0,"div",32),i._UZ(1,"ion-icon",33),i.TgZ(2,"span"),i._uU(3,"Ingrese estado"),i.qZA(),i.qZA())}let M=(()=>{class s{constructor(t,e,n,r,g){this.modalController=t,this.translateService=e,this.authenticationService=n,this.navParams=r,this.actionSheetController=g,this.vcampo=[],this.vclase=[],this.vtipo=[],this.vetapa=[],this.vconector=[],this.variables=[],this.userinfo=[],this.tituloxx="",this.vgrupo=[],this.apifoto=this.authenticationService.getapifoto()}ngAfterViewInit(){}dismissModal(){this.modalController.dismiss("close")}ionViewDidEnter(){}ngOnInit(){this.variables=this.navParams.get("variables"),this.userinfo=this.navParams.get("userinfo"),this.idllave=this.navParams.get("idllave"),this.idllave0=this.navParams.get("idllave0"),this.siinicio=this.navParams.get("siinicio"),this.sifinal=this.navParams.get("sifinal"),this.tituloxx=this.navParams.get("title"),this.Form=new d.cw({orden:new d.NI(""),tipo:new d.NI("",d.kI.required),camposimprime:new d.NI(""),camposmodificables:new d.NI(""),estado:new d.NI("",d.kI.required)}),null==this.navParams.get("record")?this.translateService.get("NUEVOM").subscribe(t=>{this.tituloxx=t+" "+this.tituloxx,this.lpermiso=t}):(this.translateService.get("ACTUALIZAM").subscribe(t=>{this.tituloxx=t+" "+this.tituloxx,this.lpermiso=t}),this._ID=this.navParams.data.record._id,this.Form.controls.orden.setValue(this.navParams.data.record.orden),this.Form.controls.tipo.setValue(this.navParams.data.record.tipo),this.idcamposimprime=this.navParams.data.record.camposimprime.id,this.idcamposmodificables=this.navParams.data.record.camposmodificables.id,this.Form.controls.camposimprime.setValue(this.navParams.data.record.camposimprime.nombre),this.Form.controls.camposmodificables.setValue(this.navParams.data.record.camposmodificables.nombre),this.Form.controls.estado.setValue(this.navParams.data.record.estado))}submitForm(){const t={idempresa:this.userinfo[0].idempresa._id,idpapa:this.idllave,orden:this.Form.controls.orden.value,tipo:this.Form.controls.tipo.value,nombre:this.Form.controls.camposimprime.value+" "+this.Form.controls.tipo.value+" "+this.Form.controls.orden.value+" "+this.Form.controls.camposmodificables.value,estado:this.Form.controls.estado.value,camposimprime:{id:this.idcamposimprime,nombre:this.Form.controls.camposimprime.value},camposmodificables:{id:this.idcamposmodificables,nombre:this.Form.controls.camposmodificables.value},bitacora:{idempresa:this.userinfo[0].idempresa._id,idafiliado:"",email:this.userinfo[0].email,permiso:this.lpermiso,accion:this.tituloxx}};null==this.navParams.get("record")?t&&this.authenticationService.createReg("",t,"frmactividadcamposds").then(e=>{!this.Form.valid||this.modalController.dismiss("ok")},e=>{this.authenticationService.presentAlert(e.error,"Precauci\xf3n","")}):t&&this.authenticationService.createReg(this._ID,t,"frmactividadcamposds").then(e=>{!this.Form.valid||this.modalController.dismiss("ok")},e=>{this.authenticationService.presentAlert(e.error,"Precauci\xf3n","")})}dacomponente(t,e){return(0,p.mG)(this,void 0,void 0,function*(){let n="";"ubicacion"===t&&(n=this.Form.controls.ubicacion.value);const r=yield this.modalController.create({component:f.B,swipeToClose:!1,backdropDismiss:!1,animated:!0,presentingElement:yield this.modalController.getTop(),componentProps:{variables:this.variables,record:null,userinfo:this.userinfo,uubx:n},cssClass:"modal-fullscreen"});return r.onWillDismiss().then(g=>{"close"===g.data||("direccion"===t?this.Form.controls.direccion.setValue(g.data.direccion):this.Form.controls.ubicacion.setValue(g.data.direccion+" {"+g.data.la+"\xb0"+g.data.lo+"}"))}),yield r.present()})}takePicture(t){return(0,p.mG)(this,void 0,void 0,function*(){const e=yield C.V1.getPhoto({correctOrientation:!0,height:200,width:200,quality:60,allowEditing:!0,resultType:C.dk.DataUrl,source:C.oK.Camera});this.authenticationService.generateFromImage(e.dataUrl,200,200,.5,n=>{"fotoa"===t&&(this.fotoimg=n,this.Form.controls.foto.setValue(this.authenticationService.procesafoto(this.Form.controls.foto.value)))})})}uploadPWA2(t,e){e&&e.length>0&&this.firstFileToBase64(e[0]).then(r=>{this.authenticationService.generateFromImage(r,200,300,.5,g=>{"fotoa"===t&&(this.fotoimg=g,this.Form.controls.foto.setValue(this.authenticationService.procesafoto(this.Form.controls.foto.value)))})},r=>{"fotoa"===t&&(this.fotoimg=null,this.Form.controls.foto1.setValue(""))})}uploadPWA(t){if("fotoa"===t){if(null==this.fotoa)return;this.uploadPWA2(t,this.fotoa.nativeElement.files)}}firstFileToBase64(t){return new Promise((e,n)=>{const r=new FileReader;r&&null!=t?(r.readAsDataURL(t),r.onload=()=>{e(r.result)},r.onerror=g=>{n(g)}):n(new Error("No file found"))})}takePicture2(t){return(0,p.mG)(this,void 0,void 0,function*(){"fotoa"===t&&this.fotoa.nativeElement.click()})}fotodatos(t){return(0,p.mG)(this,void 0,void 0,function*(){yield(yield this.actionSheetController.create({header:"Foto",cssClass:"my-custom-class",buttons:[{text:"Galeria",role:"destructive",icon:"image-outline",handler:()=>{this.takePicture2(t)}},{text:"Camara",icon:"camera-outline",handler:()=>{this.takePicture(t)}}]})).present()})}combodatoslimpia(t){return(0,p.mG)(this,void 0,void 0,function*(){this.Form.controls[t].setValue(""),"camposmodificables"===t?this.idcamposmodificables="":"camposimprime"===t?this.idcamposimprime="":"camposlectura"===t?this.idcamposlectura="":"campo"===t&&(this.campoid="")})}combodatos(t,e,n,r,g,y){return(0,p.mG)(this,void 0,void 0,function*(){let $=this.idllave0+"/camposformulario",x=[],q=[];"camposimprime"===r&&(this.idcamposmodificables&&(q=this.idcamposmodificables.split(";")),this.idcamposimprime&&(x=this.idcamposimprime.split(";"))),"camposmodificables"===r&&this.idcamposmodificables&&(x=this.idcamposmodificables.split(";"));const U=yield this.modalController.create({component:v.j,swipeToClose:!1,backdropDismiss:!1,animated:!0,presentingElement:yield this.modalController.getTop(),componentProps:{catalogot:e,idcampos:x,idcamposmodificables:q,idcamposmodificables2:[],filtroformularioconsulta:$,formularioconsulta:"frmmovilds",grabax:y,variables:this.variables,userinfo:this.userinfo,record2:null,op:e,frm:n,idllave0:this.idllave0,idllave:this.idllave,titlex:"Buscar "+g},cssClass:"modal-fullscreen"});return U.onWillDismiss().then(ti=>{let A=[];A=ti,"close"!==A.data&&(A.data?"camposmodificables"===r||"camposlectura"===r?(this.Form.controls[r].setValue(A.data.nombre),this.idcamposmodificables=A.data._id):"campo"===r?(this.Form.controls[r].setValue(A.data.nombre),this.campoid=A.data._id):this.Form.controls[r].setValue(A.data.nombre):this.Form.controls[r].setValue(""))}),yield U.present()})}}return s.\u0275fac=function(t){return new(t||s)(i.Y36(o.IN),i.Y36(u.sK),i.Y36(Z.$),i.Y36(o.X1),i.Y36(o.BX))},s.\u0275cmp=i.Xpm({type:s,selectors:[["app-frmactividadcamposd-create"]],viewQuery:function(t,e){if(1&t&&(i.Gf(k,5),i.Gf(L,7)),2&t){let n;i.iGM(n=i.CRH())&&(e.inputElement=n.first),i.iGM(n=i.CRH())&&(e.fotoa=n.first)}},decls:76,vars:16,consts:[[1,"create-user-form","ion-page",3,"formGroup"],["color","primary"],["collapse","true","slot","end"],[3,"click"],["slot","icon-only","name","close"],["size","small"],[1,"create-form-content"],[1,"user-details-fields","fields-section"],["lines","full",1,"inputs-list"],[1,"input-item"],["inputMode","text","clearInput","true","formControlName","camposmodificables",1,"ion-text-end",3,"readonly","click"],["color","secondary","expand","full","title","Limpiar",3,"click"],["slot","icon-only","name","close-circle-outline"],["title","Seleccione Informaci\xf3n",3,"click"],["slot","icon-only","name","search-outline"],[1,"error-container"],["class","error-message",4,"ngIf"],["color","danger"],["formControlName","tipo",3,"placeholder"],["inputId",""],["text-wrap","","value","="],["text-wrap","","value",">"],["text-wrap","","value","<"],["text-wrap","","value","<>"],["inputMode","text","clearInput","true","formControlName","camposimprime",1,"ion-text-end",3,"readonly","click"],["position","floating"],["type","text","inputMode","Number","clearInput","true","formControlName","orden"],["formControlName","estado",3,"placeholder"],["text-wrap","","value","Activo"],["text-wrap","","value","Inactivo"],[1,"form-actions-wrapper"],["color","primary","expand","block","fill","outline","type","submit",3,"disabled","click"],[1,"error-message"],["name","information-circle-outline"]],template:function(t,e){1&t&&(i.TgZ(0,"form",0),i.TgZ(1,"ion-header"),i.TgZ(2,"ion-toolbar",1),i.TgZ(3,"ion-buttons",2),i.TgZ(4,"ion-button",3),i.NdJ("click",function(){return e.dismissModal()}),i._UZ(5,"ion-icon",4),i.qZA(),i.qZA(),i.TgZ(6,"ion-title",5),i._uU(7),i.qZA(),i.qZA(),i.qZA(),i.TgZ(8,"ion-content",6),i.TgZ(9,"section",7),i.TgZ(10,"ion-list",8),i.TgZ(11,"ion-item",9),i.TgZ(12,"ion-label"),i._uU(13,"Campo a validar"),i.qZA(),i.TgZ(14,"ion-input",10),i.NdJ("click",function(){return e.combodatos(1,"1000-campo-plantilla","frmcats","camposmodificables","camposmodificables","nocontrolmultipleidnombre")}),i.qZA(),i.TgZ(15,"ion-buttons",2),i.TgZ(16,"ion-button",11),i.NdJ("click",function(){return e.combodatoslimpia("camposmodificables")}),i._UZ(17,"ion-icon",12),i.qZA(),i.TgZ(18,"ion-button",13),i.NdJ("click",function(){return e.combodatos(1,"1000-campo-plantilla","frmcats","camposmodificables","camposmodificables","nocontrolmultipleidnombre")}),i._UZ(19,"ion-icon",14),i.qZA(),i.qZA(),i.qZA(),i.TgZ(20,"div",15),i.YNc(21,F,4,0,"div",16),i.qZA(),i.TgZ(22,"ion-item",9),i.TgZ(23,"ion-label"),i._uU(24,"Tipo validaci\xf3n"),i.TgZ(25,"ion-text",17),i._uU(26,"*"),i.qZA(),i.qZA(),i.TgZ(27,"ion-select",18,19),i.ALo(29,"translate"),i.TgZ(30,"ion-select-option",20),i._uU(31,"="),i.qZA(),i.TgZ(32,"ion-select-option",21),i._uU(33,">"),i.qZA(),i.TgZ(34,"ion-select-option",22),i._uU(35,"<"),i.qZA(),i.TgZ(36,"ion-select-option",23),i._uU(37,"<>"),i.qZA(),i.qZA(),i.qZA(),i.TgZ(38,"div",15),i.YNc(39,I,4,0,"div",16),i.qZA(),i.TgZ(40,"ion-item",9),i.TgZ(41,"ion-label"),i._uU(42,"Campo a comparar"),i.qZA(),i.TgZ(43,"ion-input",24),i.NdJ("click",function(){return e.combodatos(1,"1000-campo-plantilla","frmcats","camposimprime","camposimprime","nocontrolmultipleidnombre")}),i.qZA(),i.TgZ(44,"ion-buttons",2),i.TgZ(45,"ion-button",11),i.NdJ("click",function(){return e.combodatoslimpia("camposimprime")}),i._UZ(46,"ion-icon",12),i.qZA(),i.TgZ(47,"ion-button",13),i.NdJ("click",function(){return e.combodatos(1,"1000-campo-plantilla","frmcats","camposimprime","camposimprime","nocontrolmultipleidnombre")}),i._UZ(48,"ion-icon",14),i.qZA(),i.qZA(),i.qZA(),i.TgZ(49,"div",15),i.YNc(50,w,4,0,"div",16),i.qZA(),i.TgZ(51,"ion-item",9),i.TgZ(52,"ion-label",25),i._uU(53,"Valor a comprar"),i.qZA(),i._UZ(54,"ion-input",26),i.qZA(),i.TgZ(55,"div",15),i.YNc(56,O,4,0,"div",16),i.qZA(),i.TgZ(57,"ion-item",9),i.TgZ(58,"ion-label"),i._uU(59,"Estado"),i.TgZ(60,"ion-text",17),i._uU(61,"*"),i.qZA(),i.qZA(),i.TgZ(62,"ion-select",27,19),i.ALo(64,"translate"),i.TgZ(65,"ion-select-option",28),i._uU(66,"Activo"),i.qZA(),i.TgZ(67,"ion-select-option",29),i._uU(68,"Inactivo"),i.qZA(),i.qZA(),i.qZA(),i.TgZ(69,"div",15),i.YNc(70,E,4,0,"div",16),i.qZA(),i.qZA(),i.qZA(),i.qZA(),i.TgZ(71,"ion-footer"),i.TgZ(72,"ion-row",30),i.TgZ(73,"ion-col"),i.TgZ(74,"ion-button",31),i.NdJ("click",function(){return e.submitForm()}),i._uU(75,"CREAR"),i.qZA(),i.qZA(),i.qZA(),i.qZA(),i.qZA()),2&t&&(i.Q6J("formGroup",e.Form),i.xp6(7),i.Oqu(e.tituloxx),i.xp6(7),i.Q6J("readonly",!0),i.xp6(7),i.Q6J("ngIf",e.Form.get("camposmodificables").hasError("required")&&(e.Form.get("camposmodificables").dirty||e.Form.get("camposmodificables").touched)),i.xp6(6),i.s9C("placeholder",i.lcZ(29,12,"SELECTVALORM")),i.xp6(12),i.Q6J("ngIf",e.Form.get("tipo").hasError("required")&&(e.Form.get("tipo").dirty||e.Form.get("tipo").touched)),i.xp6(4),i.Q6J("readonly",!0),i.xp6(7),i.Q6J("ngIf",e.Form.get("camposimprime").hasError("required")&&(e.Form.get("camposimprime").dirty||e.Form.get("camposimprime").touched)),i.xp6(6),i.Q6J("ngIf",e.Form.get("orden").hasError("required")&&(e.Form.get("orden").dirty||e.Form.get("orden").touched)),i.xp6(6),i.s9C("placeholder",i.lcZ(64,14,"SELECTVALORM")),i.xp6(8),i.Q6J("ngIf",e.Form.get("estado").hasError("required")&&(e.Form.get("estado").dirty||e.Form.get("estado").touched)),i.xp6(4),i.Q6J("disabled",!e.Form.valid))},directives:[d._Y,d.JL,d.sg,o.Gu,o.sr,o.Sm,o.YG,o.gu,o.wd,o.W2,o.q_,o.Ie,o.Q$,o.pK,o.j9,d.JJ,d.u,h.O5,o.yW,o.t9,o.QI,o.n0,o.fr,o.Nd,o.wI],pipes:[u.X$],styles:["[_nghost-%COMP%]{--page-margin: var(--app-fair-margin);--page-background: var(--app-background);--page-background-shade: var(--app-background-shade);--page-tags-gutter: 5px}"]}),s})();var N=l(26806);function S(s,m){if(1&s){const t=i.EpF();i.TgZ(0,"ion-button",32),i.NdJ("click",function(){return i.CHM(t),i.oxw().changeToList()}),i._UZ(1,"ion-icon",33),i.qZA()}}function R(s,m){if(1&s){const t=i.EpF();i.TgZ(0,"ion-button",32),i.NdJ("click",function(){return i.CHM(t),i.oxw().changeToGrid()}),i._UZ(1,"ion-icon",34),i.qZA()}}function J(s,m){if(1&s&&(i.TgZ(0,"ion-label"),i._uU(1),i.ALo(2,"translate"),i.ALo(3,"translate"),i.qZA()),2&s){const t=i.oxw();i.xp6(1),i.lnq("",i.lcZ(2,3,"NOREGISTROSM")," ",t.itemsList.length," ",i.lcZ(3,5,"NOREGISTROSM5"),"")}}function D(s,m){1&s&&(i.TgZ(0,"ion-item",36),i.TgZ(1,"ion-label",37),i._UZ(2,"skeleton-element"),i._UZ(3,"skeleton-element"),i._UZ(4,"skeleton-element",38),i.qZA(),i.qZA())}const G=function(){return[0,1,2,3,4,5,6]};function Q(s,m){1&s&&(i.TgZ(0,"ion-list"),i.YNc(1,D,5,0,"ion-item",35),i.qZA()),2&s&&(i.xp6(1),i.Q6J("ngForOf",i.DdM(1,G)))}function B(s,m){if(1&s){const t=i.EpF();i.TgZ(0,"ion-item",40),i.TgZ(1,"ion-grid"),i.TgZ(2,"ion-row"),i.TgZ(3,"ion-col",41),i.NdJ("click",function(){const r=i.CHM(t).$implicit;return i.oxw(2).updateRecord(r)}),i._UZ(4,"ion-icon",42),i.TgZ(5,"ion-label",37),i.TgZ(6,"p"),i.TgZ(7,"strong"),i._uU(8," Campo a validar:"),i.qZA(),i._uU(9),i._UZ(10,"br"),i.TgZ(11,"strong"),i._uU(12," Tipo"),i.qZA(),i._uU(13),i._UZ(14,"br"),i.TgZ(15,"strong"),i._uU(16," Campo a comparar:"),i.qZA(),i._uU(17),i._UZ(18,"br"),i.TgZ(19,"strong"),i._uU(20," Valor a comparar"),i.qZA(),i._uU(21),i._UZ(22,"br"),i.qZA(),i.TgZ(23,"ion-badge",43),i._uU(24),i.qZA(),i.qZA(),i.qZA(),i.qZA(),i.TgZ(25,"ion-row"),i.TgZ(26,"ion-col",17),i.TgZ(27,"ion-toolbar",44),i.TgZ(28,"ion-buttons",45),i.TgZ(29,"ion-button",5),i.NdJ("click",function(){const r=i.CHM(t).$implicit;return i.oxw(2).deleteRecord(r)}),i.ALo(30,"translate"),i._UZ(31,"ion-icon",46),i.qZA(),i.qZA(),i.qZA(),i.qZA(),i.qZA(),i.qZA(),i.qZA()}if(2&s){const t=m.$implicit;i.s9C("title",t._id),i.xp6(9),i.hij(" ",t.camposmodificables.nombre,""),i.xp6(4),i.hij(" ",t.tipo,""),i.xp6(4),i.hij(" ",t.camposimprime.nombre,""),i.xp6(4),i.hij(" ",t.orden,""),i.xp6(3),i.Oqu(t.estado),i.xp6(5),i.s9C("title",i.lcZ(30,7,"ELIMINARM"))}}function Y(s,m){if(1&s&&(i.TgZ(0,"ion-list"),i.YNc(1,B,32,9,"ion-item",39),i.qZA()),2&s){const t=i.oxw();i.xp6(1),i.Q6J("ngForOf",t.itemsList)("ngForTrackBy",t.trackItems)}}function W(s,m){if(1&s){const t=i.EpF();i.TgZ(0,"ion-col",48),i.TgZ(1,"ion-card",49),i.TgZ(2,"ion-row",50),i.TgZ(3,"ion-col"),i.TgZ(4,"span",51),i._uU(5),i.qZA(),i.qZA(),i.qZA(),i.TgZ(6,"ion-item",52),i._UZ(7,"ion-icon",42),i.TgZ(8,"ion-label",53),i.NdJ("click",function(){const r=i.CHM(t).$implicit;return i.oxw(2).updateRecord(r)}),i.TgZ(9,"p"),i.TgZ(10,"strong"),i._uU(11," Campo a validar:"),i.qZA(),i._uU(12),i._UZ(13,"br"),i.TgZ(14,"strong"),i._uU(15," Tipo"),i.qZA(),i._uU(16),i._UZ(17,"br"),i.TgZ(18,"strong"),i._uU(19," Campo a comparar:"),i.qZA(),i._uU(20),i._UZ(21,"br"),i.TgZ(22,"strong"),i._uU(23," Valor a comparar"),i.qZA(),i._uU(24),i._UZ(25,"br"),i.qZA(),i.qZA(),i.qZA(),i._UZ(26,"ion-card-content"),i.TgZ(27,"ion-row",54),i.TgZ(28,"ion-col",17),i.TgZ(29,"ion-toolbar",44),i.TgZ(30,"ion-buttons",45),i.TgZ(31,"ion-button",5),i.NdJ("click",function(){const r=i.CHM(t).$implicit;return i.oxw(2).deleteRecord(r)}),i.ALo(32,"translate"),i._UZ(33,"ion-icon",46),i.qZA(),i.qZA(),i.TgZ(34,"ion-buttons",55),i.TgZ(35,"ion-button",56),i.NdJ("click",function(){const r=i.CHM(t).$implicit;return i.oxw(2).otrasop(r)}),i.ALo(36,"translate"),i._UZ(37,"ion-icon",57),i.qZA(),i.qZA(),i.qZA(),i.qZA(),i.qZA(),i.qZA(),i.qZA()}if(2&s){const t=m.$implicit;i.xp6(1),i.s9C("title",t._id),i.xp6(4),i.hij("",t.estado," "),i.xp6(7),i.hij(" ",t.camposmodificables.nombre,""),i.xp6(4),i.hij(" ",t.tipo,""),i.xp6(4),i.hij(" ",t.camposimprime.nombre,""),i.xp6(4),i.hij(" ",t.orden,""),i.xp6(7),i.s9C("title",i.lcZ(32,8,"ELIMINARM")),i.xp6(4),i.s9C("title",i.lcZ(36,10,"MENUM"))}}function V(s,m){if(1&s&&(i.TgZ(0,"ion-grid"),i.TgZ(1,"ion-row"),i.YNc(2,W,38,12,"ion-col",47),i.qZA(),i.qZA()),2&s){const t=i.oxw();i.xp6(2),i.Q6J("ngForOf",t.itemsList)("ngForTrackBy",t.trackItems)}}function j(s,m){1&s&&(i.TgZ(0,"h3",58),i._uU(1),i.ALo(2,"translate"),i.qZA()),2&s&&(i.xp6(1),i.hij(" ",i.lcZ(2,1,"NODATOS")," "))}let K=(()=>{class s{constructor(t,e,n,r,g,y){this.routerOutlet=t,this.router=e,this.authenticationService=n,this.alertController=r,this.translateService=g,this.modalController=y,this.showAgeFilter=!1,this.showmenu=!1,this.items=[],this.variables=[],this.userinfo=[],this.viewType="grid",this.tituloxx="",this.efecto=0,this.seguro="",this.siinicio=0,this.sifinal=0,this.msg="",this.currentSegment="Todos",this.searchSubject=new c.t(1),this.apifoto=this.authenticationService.getapifoto()}changeToList(){this.viewType="list"}changeToGrid(){this.viewType="grid"}ngOnInit(){this.variables=this.router.getCurrentNavigation().extras.state.variables,this.idllave=this.router.getCurrentNavigation().extras.state.idllave,this.idllave0=this.router.getCurrentNavigation().extras.state.idllave0,this.userinfo=this.authenticationService.getcopiauser(),this.tituloxx=this.router.getCurrentNavigation().extras.state.title,this.searchQuery="",this.translateService.get("SEGUROM").subscribe(t=>{this.seguro=t}),this.translateService.get("MSGM").subscribe(t=>{this.msg=t}),this.rangeForm=new d.cw({dual:new d.NI({lower:1,upper:100})}),this.currentSegment="todos",this.pideregistros(this.currentSegment)}filterContacts(t){const e=t.detail.value;this.currentSegment=e,this.pideregistros(e)}pideregistros0(){this.pideregistros(this.currentSegment)}pideregistros(t){this.itemsList=[],this.efecto=0,this.authenticationService.getReg("todos/"+t+"/"+this.userinfo[0].idempresa._id+"/"+this.idllave,"frmactividadcamposds",0).then(e=>{this.efecto=1,this.items=e;for(let n=0;n<this.items.length;n++)"INICIO"===this.items&&(this.siinicio=1),"FINAL"===this.items&&(this.sifinal=1);this.itemsList=this.items},e=>{this.authenticationService.presentAlert(e.error,this.msg,"")})}trackItems(t,e){return e.id}searchList(){this.searchSubject.next({lower:this.rangeForm.controls.dual.value.lower,upper:this.rangeForm.controls.dual.value.upper,query:this.searchQuery}),this.itemsList=this.filterList(this.items,this.searchQuery&&null!==this.searchQuery?this.searchQuery:"")}filterList(t,e){return t.filter(n=>n.nombre.toLowerCase().includes(e.toLowerCase()))}otrasop(t){return(0,p.mG)(this,void 0,void 0,function*(){yield(yield this.alertController.create({cssClass:"my-custom-class",header:"Seleccione Opci\xf3n",inputs:[{name:"Acciones",type:"radio",label:"Acciones",checked:!0,value:"/frmaccionesListPage\xb0Acciones ->"+t.nombre+"\xb0"+t.nombre}],buttons:[{text:"Cancel",role:"cancel",cssClass:"secondary",handler:n=>{}},{text:"Ok",handler:n=>{const r=n.split("\xb0");this.router.navigate([r[0]],{state:{variables:this.variables,user:null,idllave:t._id,idllave0:this.idllave,title:r[1],title2:r[2]}})}}]})).present()})}deleteRecord(t){return(0,p.mG)(this,void 0,void 0,function*(){yield(yield this.alertController.create({header:this.seguro,message:"",buttons:[{text:"No",cssClass:"secondary",handler:n=>{}},{text:"Si",handler:()=>{this.authenticationService.deleteReg(t._id+"/"+this.userinfo[0].email+"/"+this.userinfo[0].idempresa._id+"/na","frmactividadcamposds").then(r=>{this.pideregistros(this.currentSegment)},r=>{this.authenticationService.presentAlert(r.error,this.msg,"")})}}]})).present()})}updateRecord(t){return(0,p.mG)(this,void 0,void 0,function*(){const e=yield this.modalController.create({component:M,swipeToClose:!0,presentingElement:this.routerOutlet.nativeEl,componentProps:{sifinal:this.sifinal,siinicio:this.siinicio,variables:this.variables,record:t,userinfo:this.userinfo,idllave:this.idllave,idllave0:this.idllave0,title:this.tituloxx},cssClass:"modal-fullscreen"});return e.onWillDismiss().then(n=>{"close"!==n.data&&this.pideregistros(this.currentSegment)}),yield e.present()})}addRecord(){return(0,p.mG)(this,void 0,void 0,function*(){const t=yield this.modalController.create({component:M,swipeToClose:!1,backdropDismiss:!1,animated:!0,presentingElement:yield this.modalController.getTop(),componentProps:{sifinal:this.sifinal,siinicio:this.siinicio,variables:this.variables,record:null,userinfo:this.userinfo,idllave:this.idllave,idllave0:this.idllave0,title:this.tituloxx},cssClass:"modal-fullscreen"});return t.onWillDismiss().then(e=>{"close"!==e.data&&this.pideregistros(this.currentSegment)}),yield t.present()})}loadData(t){setTimeout(()=>{t.target.complete(),1e3===this.items.length&&(t.target.disabled=!0)},500)}}return s.\u0275fac=function(t){return new(t||s)(i.Y36(o.jP),i.Y36(_.F0),i.Y36(Z.$),i.Y36(o.Br),i.Y36(u.sK),i.Y36(o.IN))},s.\u0275cmp=i.Xpm({type:s,selectors:[["app-frmactividadcamposd-list"]],viewQuery:function(t,e){if(1&t&&i.Gf(o.ju,5),2&t){let n;i.iGM(n=i.CRH())&&(e.infiniteScroll=n.first)}},decls:55,vars:35,consts:[["color","primary"],["slot","start"],["defaultHref","FormsListPage"],["size","small"],["collapse","true","slot","end"],[3,"title","click"],["slot","icon-only","name","add"],["slot","icon-only","name","refresh-circle-outline"],[3,"click",4,"ngIf"],[1,"filters-toolbar"],["align-items-center","",1,"searchbar-row"],["animated","",3,"ngModel","placeholder","ngModelChange","ionChange"],[1,"call-to-action-col",3,"hidden"],["fill","clear","color","secondary",1,"filters-btn",3,"title","click"],["slot","icon-only","name","options"],[3,"formGroup","hidden"],[1,"range-item-row"],["size","12"],[1,"range-header"],[1,"range-value"],[1,"range-label"],["formControlName","dual","color","secondary","pin","true","dualKnobs","true","min","1","max","100","step","1","debounce","400",1,"range-control",3,"ionChange"],[1,"user-friends-content"],["sticky",""],[4,"ngIf"],["value","todos",3,"ionChange"],["value","todos","checked",""],["value","Activo"],["value","Inactivo"],["class","empty-list-message",4,"ngIf"],["threshold","100px",3,"ionInfinite"],["loadingSpinner","bubbles","loadingText","Espere un momento..."],[3,"click"],["slot","icon-only","name","grid"],["slot","icon-only","name","list"],["lines","none",4,"ngFor","ngForOf"],["lines","none"],[1,"ion-text-wrap"],["width","67%"],["class","item md in-list ion-activatable ion-focusable item-label hydrated",3,"title",4,"ngFor","ngForOf","ngForTrackBy"],[1,"item","md","in-list","ion-activatable","ion-focusable","item-label","hydrated",3,"title"],["size","12",3,"click"],["name","server-outline","slot","start"],["color","medium"],["color","transparent"],["slot","secondary"],["slot","icon-only","name","trash-outline"],["size-lg","6","size-sm","6","size","12",4,"ngFor","ngForOf","ngForTrackBy"],["size-lg","6","size-sm","6","size","12"],[3,"title"],[1,"user-stats-wrapper","user-details-wrapper"],[1,"user-stat-value"],[1,"item","md","in-list","ion-activatable","ion-focusable","item-label","hydrated"],[1,"ion-text-wrap",3,"click"],["no-padding",""],["slot","primary"],["color","secondary",3,"title","click"],["slot","icon-only","ios","ellipsis-horizontal","md","ellipsis-vertical"],[1,"empty-list-message"]],template:function(t,e){1&t&&(i.TgZ(0,"ion-header"),i.TgZ(1,"ion-toolbar",0),i.TgZ(2,"ion-buttons",1),i._UZ(3,"ion-back-button",2),i.qZA(),i.TgZ(4,"ion-title",3),i._uU(5),i.qZA(),i.TgZ(6,"ion-buttons",4),i.TgZ(7,"ion-button",5),i.NdJ("click",function(){return e.addRecord()}),i.ALo(8,"translate"),i._UZ(9,"ion-icon",6),i.qZA(),i.TgZ(10,"ion-button",5),i.NdJ("click",function(){return e.pideregistros0()}),i.ALo(11,"translate"),i._UZ(12,"ion-icon",7),i.qZA(),i.YNc(13,S,2,0,"ion-button",8),i.YNc(14,R,2,0,"ion-button",8),i.qZA(),i.qZA(),i.TgZ(15,"ion-toolbar",9),i.TgZ(16,"ion-row",10),i.TgZ(17,"ion-col"),i.TgZ(18,"ion-searchbar",11),i.NdJ("ngModelChange",function(r){return e.searchQuery=r})("ionChange",function(){return e.searchList()}),i.ALo(19,"translate"),i.qZA(),i.qZA(),i.TgZ(20,"ion-col",12),i.TgZ(21,"ion-button",13),i.NdJ("click",function(){return e.showAgeFilter=!e.showAgeFilter}),i.ALo(22,"translate"),i._UZ(23,"ion-icon",14),i.qZA(),i.qZA(),i.qZA(),i.TgZ(24,"form",15),i.TgZ(25,"ion-row",16),i.TgZ(26,"ion-col",17),i.TgZ(27,"div",18),i.TgZ(28,"span",19),i._uU(29),i.qZA(),i.TgZ(30,"span",20),i._uU(31,"Filter by age"),i.qZA(),i.TgZ(32,"span",19),i._uU(33),i.qZA(),i.qZA(),i.qZA(),i.TgZ(34,"ion-col",17),i.TgZ(35,"ion-range",21),i.NdJ("ionChange",function(){return e.searchList()}),i.qZA(),i.qZA(),i.qZA(),i.qZA(),i.qZA(),i.qZA(),i.TgZ(36,"ion-content",22),i.TgZ(37,"ion-item-divider",23),i.YNc(38,J,4,7,"ion-label",24),i.qZA(),i.TgZ(39,"ion-segment",25),i.NdJ("ionChange",function(r){return e.filterContacts(r)}),i.TgZ(40,"ion-segment-button",26),i._uU(41),i.ALo(42,"translate"),i.qZA(),i.TgZ(43,"ion-segment-button",27),i._uU(44),i.ALo(45,"translate"),i.qZA(),i.TgZ(46,"ion-segment-button",28),i._uU(47),i.ALo(48,"translate"),i.qZA(),i.qZA(),i.YNc(49,Q,2,2,"ion-list",24),i.YNc(50,Y,2,2,"ion-list",24),i.YNc(51,V,3,2,"ion-grid",24),i.YNc(52,j,3,3,"h3",29),i.TgZ(53,"ion-infinite-scroll",30),i.NdJ("ionInfinite",function(r){return e.loadData(r)}),i._UZ(54,"ion-infinite-scroll-content",31),i.qZA(),i.qZA()),2&t&&(i.xp6(5),i.hij(" ",e.tituloxx," "),i.xp6(2),i.MGl("title"," ",i.lcZ(8,21,"AGREGARM"),""),i.xp6(3),i.MGl("title"," ",i.lcZ(11,23,"REFRESCARM"),""),i.xp6(3),i.Q6J("ngIf","grid"===e.viewType),i.xp6(1),i.Q6J("ngIf","list"===e.viewType),i.xp6(4),i.s9C("placeholder",i.lcZ(19,25,"BUSCARM")),i.Q6J("ngModel",e.searchQuery),i.xp6(2),i.Q6J("hidden",!e.showAgeFilter),i.xp6(1),i.MGl("title"," ",i.lcZ(22,27,"FILTROM"),""),i.xp6(3),i.Q6J("formGroup",e.rangeForm)("hidden",!e.showAgeFilter),i.xp6(5),i.Oqu(e.rangeForm.controls.dual.value.lower),i.xp6(4),i.Oqu(e.rangeForm.controls.dual.value.upper),i.xp6(5),i.Q6J("ngIf",(null==e.itemsList?null:e.itemsList.length)>0),i.xp6(3),i.hij(" ",i.lcZ(42,29,"TODOSM")," "),i.xp6(3),i.hij(" ",i.lcZ(45,31,"ACTIVOSM")," "),i.xp6(3),i.hij(" ",i.lcZ(48,33,"INACTIVOSM")," "),i.xp6(2),i.Q6J("ngIf",0===e.efecto),i.xp6(1),i.Q6J("ngIf",(null==e.itemsList?null:e.itemsList.length)>0&&"list"===e.viewType),i.xp6(1),i.Q6J("ngIf",(null==e.itemsList?null:e.itemsList.length)>0&&"grid"===e.viewType),i.xp6(1),i.Q6J("ngIf",0===(null==e.itemsList?null:e.itemsList.length)))},directives:[o.Gu,o.sr,o.Sm,o.oU,o.cs,o.wd,o.YG,o.gu,h.O5,o.Nd,o.wI,o.VI,o.j9,d.JJ,d.On,d._Y,d.JL,d.sg,o.I_,o.QI,d.u,o.W2,o.rH,o.cJ,o.GO,o.ju,o.MB,o.Q$,o.q_,h.sg,o.Ie,N.B,o.jY,o.yp,o.PM,o.FN],pipes:[u.X$],styles:["[_nghost-%COMP%]{--page-margin: var(--app-narrow-margin);--page-border-radius: var(--app-fair-radius);--page-segment-background: var(--app-background);--page-segment-indicator-height: 2px}ion-item-divider[_ngcontent-%COMP%]{--background: var(--ion-color-light);--padding-start: var(--page-margin)}[_nghost-%COMP%]{--page-margin: var(--app-fair-margin);--page-background: var(--app-background);--page-background-shade: var(--app-background-shade);--page-tags-gutter: 5px}.first-letter2[_ngcontent-%COMP%]{text-transform:capitalize;font-size:10px}.first-letter[_ngcontent-%COMP%]{text-transform:capitalize;font-size:14px}"]}),s})();var z=l(22675);let H=(()=>{class s{}return s.\u0275fac=function(t){return new(t||s)},s.\u0275mod=i.oAB({type:s}),s.\u0275inj=i.cJS({imports:[[h.ez,o.Pc,a.K,d.u5,d.UX,T.YL,z.v,_.Bz.forChild([{path:"",component:K}]),u.aw.forChild()]]}),s})()},22675:(P,b,l)=>{l.d(b,{v:()=>p});var o=l(69808),_=l(93075),h=l(51062),a=l(23349),u=l(55787),d=l(56604),T=l(5e3);let p=(()=>{class Z{}return Z.\u0275fac=function(f){return new(f||Z)},Z.\u0275mod=T.oAB({type:Z}),Z.\u0275inj=T.cJS({imports:[[o.ez,_.u5,_.UX,a.Pc,u.Bz,d.Cl,h.aw.forChild()]]}),Z})()},63814:(P,b,l)=>{l.d(b,{B:()=>T});var o=l(70655),_=l(47423),h=l(96090),a=l(5e3),u=l(23349);const d=["search"];let T=(()=>{class p{constructor(c,f,v){this.modalController=c,this.ngZone=f,this.navParams=v,this.title="AGM project",this.zoom=16}dismissModal(){this.modalController.dismiss("close")}dadireccion(){this.modalController.dismiss({direccion:this.address,la:this.latitude,lo:this.longitude})}ngOnInit(){this.uubx=this.navParams.get("uubx")}loadMap(){}clearWatch(){null!=this.watchId&&h.b.clearWatch({id:this.watchId})}setCurrentLocationa33(){if(_.dV.isPluginAvailable("Geolocation"))try{this.watchId=h.b.watchPosition({timeout:1e3,enableHighAccuracy:!0,maximumAge:1e3},(c,f)=>{c&&(this.latitude=c.coords.latitude,this.longitude=c.coords.longitude)})}catch(c){console.error(c)}}setCurrentLocationa(){try{this.watchId=h.b.watchPosition({timeout:1e3,enableHighAccuracy:!0,maximumAge:1e3},(c,f)=>{c&&(this.latitude=c.coords.latitude,this.longitude=c.coords.longitude,this.getAddress(this.latitude,this.longitude))})}catch(c){console.error(c)}}setCurrentLocation2a(){if(_.dV.isPluginAvailable("Geolocation"))try{this.watchId=h.b.watchPosition({timeout:1e3,enableHighAccuracy:!0,maximumAge:1e3},(c,f)=>{this.latitude=Number(this.uubx.substring(this.uubx.indexOf("{")+1,this.uubx.indexOf("\xb0"))),this.longitude=Number(this.uubx.substring(this.uubx.indexOf("\xb0")+1,this.uubx.indexOf("}"))),0!==this.latitude&&this.latitude&&this.getAddress(this.latitude,this.longitude)})}catch(c){console.error(c)}}markerDragEnd(c){0!==this.latitude&&this.latitude&&(this.latitude=c.coords.lat,this.longitude=c.coords.lng,this.getAddress(this.latitude,this.longitude))}getAddress(c,f){this.geoCoder.geocode({location:{lat:c,lng:f}},(v,C)=>{"OK"===C?v[0]?this.address=v[0].formatted_address:window.alert("No results found"):window.alert("Geocoder failed due to: "+C)})}closeModal(){return(0,o.mG)(this,void 0,void 0,function*(){this.modalController.dismiss("close")})}}return p.\u0275fac=function(c){return new(c||p)(a.Y36(u.IN),a.Y36(a.R0b),a.Y36(u.X1))},p.\u0275cmp=a.Xpm({type:p,selectors:[["app-my-modal"]],viewQuery:function(c,f){if(1&c&&a.Gf(d,5),2&c){let v;a.iGM(v=a.CRH())&&(f.searchElementRef=v.first)}},decls:19,vars:6,consts:[[3,"translucent"],["color","primary"],["shape","round","color","dark",3,"click"],["slot","start","name","locate"],["collapse","true","slot","end"],[3,"click"],["slot","icon-only","name","close"],["size","small"],[1,"ion-padding",3,"fullscreen"],["id","book-search-input","role","search"],["type","text","placeholder","Ingrese direcci\xf3n","autocorrect","off","autocapitalize","off","spellcheck","off","type","text",1,"book-search-input","native-input","sc-ion-input-ios",3,"keydown.enter"],["search",""],["type","submit","expand","block",1,"login-btn",3,"click"]],template:function(c,f){1&c&&(a.TgZ(0,"ion-header",0),a.TgZ(1,"ion-toolbar",1),a.TgZ(2,"ion-button",2),a.NdJ("click",function(){return f.loadMap()}),a._UZ(3,"ion-icon",3),a._uU(4," Ubicaci\xf3n "),a.qZA(),a.TgZ(5,"ion-buttons",4),a.TgZ(6,"ion-button",5),a.NdJ("click",function(){return f.closeModal()}),a._UZ(7,"ion-icon",6),a.qZA(),a.qZA(),a.TgZ(8,"ion-title",7),a._uU(9),a.qZA(),a.qZA(),a.qZA(),a.TgZ(10,"ion-content",8),a._uU(11),a.TgZ(12,"div",9),a.TgZ(13,"input",10,11),a.NdJ("keydown.enter",function(C){return C.preventDefault()}),a.qZA(),a.qZA(),a.TgZ(15,"h5"),a._uU(16),a.qZA(),a.TgZ(17,"ion-button",12),a.NdJ("click",function(){return f.dadireccion()}),a._uU(18,"Seleccionar"),a.qZA(),a.qZA()),2&c&&(a.Q6J("translucent",!0),a.xp6(9),a.Oqu(f.tituloxx),a.xp6(1),a.Q6J("fullscreen",!0),a.xp6(1),a.AsE("\n",f.latitude,", ",f.longitude," "),a.xp6(5),a.hij("Direcci\xf3n: ",f.address,""))},directives:[u.Gu,u.sr,u.YG,u.gu,u.Sm,u.wd,u.W2],styles:[".book-search-input[_ngcontent-%COMP%]{padding:6px;background:0 0;transition:top .5s ease;background:#bdbaba;border-bottom:1px solid rgba(0,0,0,.07);border-top:1px solid rgba(0,0,0,.07);margin-bottom:10px;margin-top:-1px;color:#fff;width:100%}"]}),p})()},26806:(P,b,l)=>{l.d(b,{B:()=>a});var o=l(5e3),_=l(69808);const h=function(u,d){return{"no-animated":u,inline:d}};let a=(()=>{class u{constructor(){this.width="100%",this.height="16px",this.borderRadius="0",this.rounded=!1,this.noAnimated=!1,this.inline=!1,this.styles={}}ngOnInit(){this.styles={width:this.width,height:this.height,borderRadius:this.borderRadius},this.rounded&&(this.styles.borderRadius="999em")}}return u.\u0275fac=function(T){return new(T||u)},u.\u0275cmp=o.Xpm({type:u,selectors:[["skeleton-element"]],inputs:{width:"width",height:"height",borderRadius:"borderRadius",rounded:"rounded",noAnimated:"noAnimated",inline:"inline"},decls:1,vars:5,consts:[[3,"ngClass","ngStyle"]],template:function(T,p){1&T&&o._UZ(0,"div",0),2&T&&o.Q6J("ngClass",o.WLB(2,h,p.noAnimated,p.inline))("ngStyle",p.styles)},directives:[_.mk,_.PC],styles:["[_nghost-%COMP%]{display:block}[inline][_nghost-%COMP%]{display:inline-block}[_nghost-%COMP%]   .inline[_ngcontent-%COMP%]{display:inline-block}[_nghost-%COMP%]   .no-animated[_ngcontent-%COMP%]{-webkit-animation:none!important;animation:none!important;background:rgba(130,130,130,.2)}.animated-background[_ngcontent-%COMP%], [_nghost-%COMP%]   div[_ngcontent-%COMP%]{-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-name:placeHolderShimmer;animation-name:placeHolderShimmer;-webkit-animation-timing-function:linear;animation-timing-function:linear;background:rgba(130,130,130,.2);background:linear-gradient(to right,rgba(130,130,130,.2) 8%,rgba(130,130,130,.3) 18%,rgba(130,130,130,.2) 33%);background-size:800px 100px;position:relative}@-webkit-keyframes placeHolderShimmer{0%{background-position:-468px 0}to{background-position:468px 0}}@keyframes placeHolderShimmer{0%{background-position:-468px 0}to{background-position:468px 0}}"]}),u})()}}]);