"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[986],{50076:(P,b,a)=>{a.d(b,{oK:()=>o,GW:()=>Z,dk:()=>_});var o=(()=>{return(n=o||(o={})).Prompt="PROMPT",n.Camera="CAMERA",n.Photos="PHOTOS",o;var n})(),Z=(()=>{return(n=Z||(Z={})).Rear="REAR",n.Front="FRONT",Z;var n})(),_=(()=>{return(n=_||(_={})).Uri="uri",n.Base64="base64",n.DataUrl="dataUrl",_;var n})()},26388:(P,b,a)=>{a.d(b,{dk:()=>Z.dk,oK:()=>Z.oK,V1:()=>_});var o=a(47423),Z=a(50076);const _=(0,o.fo)("Camera",{web:()=>a.e(3954).then(a.bind(a,63954)).then(n=>new n.CameraWeb)})},50986:(P,b,a)=>{a.r(b),a.d(b,{Permiso3ListPageModule:()=>Y});var o=a(23349),Z=a(55787),_=a(69808),n=a(33678),m=a(51062),c=a(93075),A=a(36351),h=a(70655),f=a(49926),u=a(4707),p=a(63814),T=a(15190),v=a(26388),t=a(5e3);const M=["inputId"],q=["fotoa"];function k(s,d){1&s&&(t.TgZ(0,"div",32),t._UZ(1,"ion-icon",33),t.TgZ(2,"span"),t._uU(3,"Ingrese modulo"),t.qZA(),t.qZA())}function I(s,d){1&s&&(t.TgZ(0,"div",32),t._UZ(1,"ion-icon",33),t.TgZ(2,"span"),t._uU(3,"Ingrese orden"),t.qZA(),t.qZA())}function F(s,d){1&s&&(t.TgZ(0,"div",32),t._UZ(1,"ion-icon",33),t.TgZ(2,"span"),t._uU(3,"Ingrese estado"),t.qZA(),t.qZA())}let x=(()=>{class s{constructor(e,i,r,l,g){this.modalController=e,this.translateService=i,this.authenticationService=r,this.navParams=l,this.actionSheetController=g,this.vidmodulo=[],this.variables=[],this.userinfo=[],this.tituloxx="",this.vgrupo=[],this.apifoto=this.authenticationService.getapifoto()}ngAfterViewInit(){setTimeout(()=>{this.inputElement.setFocus()},400)}dismissModal(){this.modalController.dismiss("close")}ionViewDidEnter(){}ngOnInit(){this.variables=this.navParams.get("variables"),this.userinfo=this.navParams.get("userinfo"),this.idllave=this.navParams.get("idllave"),this.idrol=this.navParams.get("idrol"),this.idempresa=this.navParams.get("idempresa"),this.tituloxx=this.navParams.get("title"),this.Form=new c.cw({idmodulo:new c.NI("",c.kI.required),ingreso:new c.NI(""),orden:new c.NI("",c.kI.required),estado:new c.NI("",c.kI.required),consulta:new c.NI(""),eliminacion:new c.NI(""),creacion:new c.NI(""),actualizacion:new c.NI(""),filtro:new c.NI(""),reporte:new c.NI("")}),null==this.navParams.get("record")?(this.Form.controls.ingreso.setValue(!0),this.Form.controls.consulta.setValue(!0),this.Form.controls.eliminacion.setValue(!0),this.Form.controls.creacion.setValue(!0),this.Form.controls.actualizacion.setValue(!0),this.Form.controls.filtro.setValue(!0),this.Form.controls.reporte.setValue(!0),this.translateService.get("NUEVOM").subscribe(e=>{this.tituloxx=e+" "+this.tituloxx,this.lpermiso=e}),this.authenticationService.getReg(this.idempresa+"/"+this.idrol+"/"+this.idllave+"/orden","permiso3s",0).then(e=>{if(e){const i=e;setTimeout(()=>{this.Form.controls.orden.setValue(Number(i.orden))},600)}},e=>{this.authenticationService.presentAlert(e.error,"Precauci\xf3n","")})):(this.translateService.get("ACTUALIZAM").subscribe(e=>{this.tituloxx=e+" "+this.tituloxx,this.lpermiso=e}),this._ID=this.navParams.data.record._id,this.Form.controls.idmodulo.setValue(this.navParams.data.record.idmodulo.nombre),this.idmodulo=this.navParams.data.record.idmodulo._id,this.Form.controls.ingreso.setValue(this.navParams.data.record.ingreso),this.Form.controls.orden.setValue(this.navParams.data.record.orden),this.Form.controls.estado.setValue(this.navParams.data.record.estado),this.Form.controls.consulta.setValue(this.navParams.data.record.consulta),this.Form.controls.eliminacion.setValue(this.navParams.data.record.eliminacion),this.Form.controls.creacion.setValue(this.navParams.data.record.creacion),this.Form.controls.actualizacion.setValue(this.navParams.data.record.actualizacion),this.Form.controls.filtro.setValue(this.navParams.data.record.filtro),this.Form.controls.reporte.setValue(this.navParams.data.record.reporte))}submitForm(){const e={idempresa:this.userinfo[0].idempresa._id,idpermiso:this.idllave,idrol:this.idrol,nombre:this.idmodulo,ingreso:this.Form.controls.ingreso.value,orden:this.Form.controls.orden.value,estado:this.Form.controls.estado.value,consulta:this.Form.controls.consulta.value,eliminacion:this.Form.controls.eliminacion.value,creacion:this.Form.controls.creacion.value,actualizacion:this.Form.controls.actualizacion.value,filtro:this.Form.controls.filtro.value,reporte:this.Form.controls.reporte.value,bitacora:{idempresa:this.userinfo[0].idempresa._id,idafiliado:"",email:this.userinfo[0].email,permiso:this.lpermiso,accion:this.tituloxx}};null==this.navParams.get("record")?e&&this.authenticationService.createReg("",e,"permiso3s").then(i=>{!this.Form.valid||this.modalController.dismiss("ok")},i=>{this.authenticationService.presentAlert(i.error,"Precauci\xf3n","")}):e&&this.authenticationService.createReg(this._ID,e,"permiso3s").then(i=>{!this.Form.valid||this.modalController.dismiss("ok")},i=>{this.authenticationService.presentAlert(i.error,"Precauci\xf3n","")})}dacomponente(e,i){return(0,h.mG)(this,void 0,void 0,function*(){let r="";"ubicacion"===e&&(r=this.Form.controls.ubicacion.value);const l=yield this.modalController.create({component:p.B,swipeToClose:!1,backdropDismiss:!1,animated:!0,presentingElement:yield this.modalController.getTop(),componentProps:{variables:this.variables,record:null,userinfo:this.userinfo,uubx:r},cssClass:"modal-fullscreen"});return l.onWillDismiss().then(g=>{"close"===g.data||("direccion"===e?this.Form.controls.direccion.setValue(g.data.direccion):this.Form.controls.ubicacion.setValue(g.data.direccion+" {"+g.data.la+"\xb0"+g.data.lo+"}"))}),yield l.present()})}takePicture(e){return(0,h.mG)(this,void 0,void 0,function*(){const i=yield v.V1.getPhoto({correctOrientation:!0,height:200,width:200,quality:60,allowEditing:!0,resultType:v.dk.DataUrl,source:v.oK.Camera});this.authenticationService.generateFromImage(i.dataUrl,200,200,.5,r=>{"fotoa"===e&&(this.fotoimg=r,this.Form.controls.foto1.setValue(r))})})}uploadPWA2(e,i){i&&i.length>0&&this.firstFileToBase64(i[0]).then(l=>{this.authenticationService.generateFromImage(l,200,300,.5,g=>{"fotoa"===e&&(this.fotoimg=g,this.Form.controls.foto1.setValue(g))})},l=>{"fotoa"===e&&(this.fotoimg=null,this.Form.controls.foto1.setValue(""))})}uploadPWA(e){if("fotoa"===e){if(null==this.fotoa)return;this.uploadPWA2(e,this.fotoa.nativeElement.files)}}firstFileToBase64(e){return new Promise((i,r)=>{const l=new FileReader;l&&null!=e?(l.readAsDataURL(e),l.onload=()=>{i(l.result)},l.onerror=g=>{r(g)}):r(new Error("No file found"))})}takePicture2(e){return(0,h.mG)(this,void 0,void 0,function*(){"fotoa"===e&&this.fotoa.nativeElement.click()})}fotodatos(e){return(0,h.mG)(this,void 0,void 0,function*(){yield(yield this.actionSheetController.create({header:"Foto",cssClass:"my-custom-class",buttons:[{text:"Galeria",role:"destructive",icon:"image-outline",handler:()=>{this.takePicture2(e)}},{text:"Camara",icon:"camera-outline",handler:()=>{this.takePicture(e)}}]})).present()})}combodatoslimpia(e){return(0,h.mG)(this,void 0,void 0,function*(){this.Form.controls[e].setValue(""),this.idmodulo=""})}combodatos(e,i,r,l,g,U){return(0,h.mG)(this,void 0,void 0,function*(){const y=yield this.modalController.create({component:T.j,swipeToClose:!1,backdropDismiss:!1,animated:!0,presentingElement:yield this.modalController.getTop(),componentProps:{grabax:U,variables:this.variables,userinfo:this.userinfo,record2:null,op:i,frm:r,idllave:this.idllave,titlex:"Buscar "+g},cssClass:"modal-fullscreen"});return y.onWillDismiss().then(W=>{let C=[];C=W,"close"!==C.data&&(C.data?(this.Form.controls[l].setValue(C.data.nombre),this.idmodulo=C.data._id):(this.Form.controls[l].setValue(""),this.idmodulo=""))}),yield y.present()})}}return s.\u0275fac=function(e){return new(e||s)(t.Y36(o.IN),t.Y36(m.sK),t.Y36(f.$),t.Y36(o.X1),t.Y36(o.BX))},s.\u0275cmp=t.Xpm({type:s,selectors:[["app-permiso3-create"]],viewQuery:function(e,i){if(1&e&&(t.Gf(M,5),t.Gf(q,7)),2&e){let r;t.iGM(r=t.CRH())&&(i.inputElement=r.first),t.iGM(r=t.CRH())&&(i.fotoa=r.first)}},decls:80,vars:10,consts:[[1,"create-user-form","ion-page",3,"formGroup"],["color","primary"],["collapse","true","slot","end"],[3,"click"],["slot","icon-only","name","close"],["size","small"],[1,"create-form-content"],[1,"user-details-fields","fields-section"],["lines","full",1,"inputs-list"],[1,"input-item"],["color","danger"],["inputMode","text","clearInput","true","formControlName","idmodulo","required","",1,"ion-text-end",3,"readonly","click"],["inputId",""],["color","secondary","expand","full","title","Limpiar",3,"click"],["slot","icon-only","name","close-circle-outline"],["title","Seleccione Informaci\xf3n",3,"click"],["slot","icon-only","name","search-outline"],[1,"error-container"],["class","error-message",4,"ngIf"],["type","number","inputMode","Number","clearInput","true","formControlName","orden","required",""],["color","secondary","clearInput","true","formControlName","ingreso"],["color","secondary","clearInput","true","formControlName","consulta"],["color","secondary","clearInput","true","formControlName","eliminacion"],["color","secondary","clearInput","true","formControlName","creacion"],["color","secondary","clearInput","true","formControlName","actualizacion"],["color","secondary","clearInput","true","formControlName","filtro"],["color","secondary","clearInput","true","formControlName","reporte"],["formControlName","estado",3,"placeholder"],["value","Activo"],["value","Inactivo"],[1,"form-actions-wrapper"],["color","primary","expand","block","fill","outline","type","submit",3,"disabled","click"],[1,"error-message"],["name","information-circle-outline"]],template:function(e,i){1&e&&(t.TgZ(0,"form",0),t.TgZ(1,"ion-header"),t.TgZ(2,"ion-toolbar",1),t.TgZ(3,"ion-buttons",2),t.TgZ(4,"ion-button",3),t.NdJ("click",function(){return i.dismissModal()}),t._UZ(5,"ion-icon",4),t.qZA(),t.qZA(),t.TgZ(6,"ion-title",5),t._uU(7),t.qZA(),t.qZA(),t.qZA(),t.TgZ(8,"ion-content",6),t.TgZ(9,"section",7),t.TgZ(10,"ion-list",8),t.TgZ(11,"ion-item",9),t.TgZ(12,"ion-label"),t._uU(13,"Modulo"),t.TgZ(14,"ion-text",10),t._uU(15,"*"),t.qZA(),t.qZA(),t.TgZ(16,"ion-input",11,12),t.NdJ("click",function(){return i.combodatos(1,"idmodulo-plantilla","frmcats","idmodulo","Modulos","modulos")}),t.qZA(),t.TgZ(18,"ion-buttons",2),t.TgZ(19,"ion-button",13),t.NdJ("click",function(){return i.combodatoslimpia("idmodulo")}),t._UZ(20,"ion-icon",14),t.qZA(),t.TgZ(21,"ion-button",15),t.NdJ("click",function(){return i.combodatos(1,"idmodulo-plantilla","frmcats","idmodulo","Modulos","modulos")}),t._UZ(22,"ion-icon",16),t.qZA(),t.qZA(),t.qZA(),t.TgZ(23,"div",17),t.YNc(24,k,4,0,"div",18),t.qZA(),t.TgZ(25,"ion-item",9),t.TgZ(26,"ion-label"),t._uU(27,"Orden"),t.TgZ(28,"ion-text",10),t._uU(29,"*"),t.qZA(),t.qZA(),t._UZ(30,"ion-input",19,12),t.qZA(),t.TgZ(32,"div",17),t.YNc(33,I,4,0,"div",18),t.qZA(),t.TgZ(34,"ion-item",9),t.TgZ(35,"ion-label"),t._uU(36,"Ingreso"),t.qZA(),t._UZ(37,"ion-toggle",20),t.qZA(),t.TgZ(38,"ion-item",9),t.TgZ(39,"ion-label"),t._uU(40,"Consulta"),t.qZA(),t._UZ(41,"ion-toggle",21),t.qZA(),t.TgZ(42,"ion-item",9),t.TgZ(43,"ion-label"),t._uU(44,"Eliminacion"),t.qZA(),t._UZ(45,"ion-toggle",22),t.qZA(),t.TgZ(46,"ion-item",9),t.TgZ(47,"ion-label"),t._uU(48,"Creacion"),t.qZA(),t._UZ(49,"ion-toggle",23),t.qZA(),t.TgZ(50,"ion-item",9),t.TgZ(51,"ion-label"),t._uU(52,"Actualizacion"),t.qZA(),t._UZ(53,"ion-toggle",24),t.qZA(),t.TgZ(54,"ion-item",9),t.TgZ(55,"ion-label"),t._uU(56,"Filtro"),t.qZA(),t._UZ(57,"ion-toggle",25),t.qZA(),t.TgZ(58,"ion-item",9),t.TgZ(59,"ion-label"),t._uU(60,"Reporte"),t.qZA(),t._UZ(61,"ion-toggle",26),t.qZA(),t.TgZ(62,"ion-item",9),t.TgZ(63,"ion-label"),t._uU(64,"Estado"),t.TgZ(65,"ion-text",10),t._uU(66,"*"),t.qZA(),t.qZA(),t.TgZ(67,"ion-select",27),t.ALo(68,"translate"),t.TgZ(69,"ion-select-option",28),t._uU(70,"Activo"),t.qZA(),t.TgZ(71,"ion-select-option",29),t._uU(72,"Inactivo"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(73,"div",17),t.YNc(74,F,4,0,"div",18),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(75,"ion-footer"),t.TgZ(76,"ion-row",30),t.TgZ(77,"ion-col"),t.TgZ(78,"ion-button",31),t.NdJ("click",function(){return i.submitForm()}),t._uU(79,"CREAR"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&e&&(t.Q6J("formGroup",i.Form),t.xp6(7),t.Oqu(i.tituloxx),t.xp6(9),t.Q6J("readonly",!0),t.xp6(8),t.Q6J("ngIf",i.Form.get("idmodulo").hasError("required")&&(i.Form.get("idmodulo").dirty||i.Form.get("idmodulo").touched)),t.xp6(9),t.Q6J("ngIf",i.Form.get("orden").hasError("required")&&(i.Form.get("orden").dirty||i.Form.get("orden").touched)),t.xp6(34),t.s9C("placeholder",t.lcZ(68,8,"SELECTVALORM")),t.xp6(7),t.Q6J("ngIf",i.Form.get("estado").hasError("required")&&(i.Form.get("estado").dirty||i.Form.get("estado").touched)),t.xp6(4),t.Q6J("disabled",!i.Form.valid))},directives:[c._Y,c.JL,c.sg,o.Gu,o.sr,o.Sm,o.YG,o.gu,o.wd,o.W2,o.q_,o.Ie,o.Q$,o.yW,o.pK,o.j9,c.JJ,c.u,c.Q7,_.O5,o.as,o.ho,o.w,o.t9,o.QI,o.n0,o.fr,o.Nd,o.wI],pipes:[m.X$],styles:["[_nghost-%COMP%]{--page-margin: var(--app-fair-margin);--page-background: var(--app-background);--page-background-shade: var(--app-background-shade);--page-tags-gutter: 5px}"]}),s})();var L=a(26806);function w(s,d){if(1&s){const e=t.EpF();t.TgZ(0,"ion-button",32),t.NdJ("click",function(){return t.CHM(e),t.oxw().changeToList()}),t._UZ(1,"ion-icon",33),t.qZA()}}function E(s,d){if(1&s){const e=t.EpF();t.TgZ(0,"ion-button",32),t.NdJ("click",function(){return t.CHM(e),t.oxw().changeToGrid()}),t._UZ(1,"ion-icon",34),t.qZA()}}function O(s,d){if(1&s&&(t.TgZ(0,"ion-label"),t._uU(1),t.ALo(2,"translate"),t.ALo(3,"translate"),t.qZA()),2&s){const e=t.oxw();t.xp6(1),t.lnq("",t.lcZ(2,3,"NOREGISTROSM")," ",e.itemsList.length," ",t.lcZ(3,5,"NOREGISTROSM5"),"")}}function N(s,d){1&s&&(t.TgZ(0,"ion-item",36),t.TgZ(1,"ion-label",37),t._UZ(2,"skeleton-element"),t._UZ(3,"skeleton-element"),t._UZ(4,"skeleton-element",38),t.qZA(),t.qZA())}const S=function(){return[0,1,2,3,4,5,6]};function R(s,d){1&s&&(t.TgZ(0,"ion-list"),t.YNc(1,N,5,0,"ion-item",35),t.qZA()),2&s&&(t.xp6(1),t.Q6J("ngForOf",t.DdM(1,S)))}function J(s,d){if(1&s){const e=t.EpF();t.TgZ(0,"ion-item",40),t.TgZ(1,"ion-grid"),t.TgZ(2,"ion-row"),t.TgZ(3,"ion-col",41),t.NdJ("click",function(){const l=t.CHM(e).$implicit;return t.oxw(2).updateRecord(l)}),t._UZ(4,"ion-icon",42),t.TgZ(5,"ion-label",37),t.TgZ(6,"ion-note",43),t._uU(7),t.qZA(),t._UZ(8,"br"),t.TgZ(9,"p"),t.TgZ(10,"strong"),t._uU(11,"Orden:"),t.qZA(),t._uU(12),t._UZ(13,"br"),t.TgZ(14,"strong"),t._uU(15," Modulo:"),t.qZA(),t._uU(16),t._UZ(17,"br"),t.TgZ(18,"strong"),t._uU(19,"Ingreso:"),t.qZA(),t._uU(20),t._UZ(21,"br"),t.TgZ(22,"strong"),t._uU(23,"Consulta:"),t.qZA(),t._uU(24),t._UZ(25,"br"),t.TgZ(26,"strong"),t._uU(27,"Eliminacion:"),t.qZA(),t._uU(28),t._UZ(29,"br"),t.TgZ(30,"strong"),t._uU(31,"Creacion:"),t.qZA(),t._uU(32),t._UZ(33,"br"),t.TgZ(34,"strong"),t._uU(35,"Actualizacion:"),t.qZA(),t._uU(36),t._UZ(37,"br"),t.TgZ(38,"strong"),t._uU(39,"Filtro:"),t.qZA(),t._uU(40),t._UZ(41,"br"),t.TgZ(42,"strong"),t._uU(43,"Reporte:"),t.qZA(),t._uU(44),t._UZ(45,"br"),t.qZA(),t.TgZ(46,"ion-badge",44),t._uU(47),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(48,"ion-row"),t.TgZ(49,"ion-col",17),t.TgZ(50,"ion-toolbar",45),t.TgZ(51,"ion-buttons",46),t.TgZ(52,"ion-button",5),t.NdJ("click",function(){const l=t.CHM(e).$implicit;return t.oxw(2).deleteRecord(l)}),t.ALo(53,"translate"),t._UZ(54,"ion-icon",47),t.qZA(),t.qZA(),t.TgZ(55,"ion-buttons",48),t.TgZ(56,"ion-button",49),t.NdJ("click",function(){const l=t.CHM(e).$implicit;return t.oxw(2).otrasop(l)}),t.ALo(57,"translate"),t._UZ(58,"ion-icon",50),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()}if(2&s){const e=d.$implicit,i=d.index;t.xp6(7),t.hij("No. ",i+1,""),t.xp6(5),t.hij(" ",e.orden," "),t.xp6(4),t.hij(" ",e.nombre," "),t.xp6(4),t.hij(" ",e.ingreso," "),t.xp6(4),t.hij(" ",e.consulta," "),t.xp6(4),t.hij(" ",e.eliminacion," "),t.xp6(4),t.hij(" ",e.creacion," "),t.xp6(4),t.hij(" ",e.actualizacion," "),t.xp6(4),t.hij(" ",e.filtro," "),t.xp6(4),t.hij(" ",e.reporte," "),t.xp6(3),t.Oqu(e.estado),t.xp6(5),t.s9C("title",t.lcZ(53,13,"ELIMINARM")),t.xp6(4),t.s9C("title",t.lcZ(57,15,"MENUM"))}}function D(s,d){if(1&s&&(t.TgZ(0,"ion-list"),t.YNc(1,J,59,17,"ion-item",39),t.qZA()),2&s){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",e.itemsList)("ngForTrackBy",e.trackItems)}}function G(s,d){if(1&s){const e=t.EpF();t.TgZ(0,"ion-col",52),t.TgZ(1,"ion-card"),t.TgZ(2,"ion-row",53),t.TgZ(3,"ion-col"),t.TgZ(4,"span",54),t._uU(5,"No."),t.qZA(),t.TgZ(6,"span",55),t._uU(7),t.qZA(),t.qZA(),t.TgZ(8,"ion-col"),t.TgZ(9,"span",54),t._uU(10),t.qZA(),t.qZA(),t.qZA(),t.TgZ(11,"ion-item",40),t._UZ(12,"ion-icon",42),t.TgZ(13,"ion-label",56),t.NdJ("click",function(){const l=t.CHM(e).$implicit;return t.oxw(2).updateRecord(l)}),t.TgZ(14,"p"),t.TgZ(15,"strong"),t._uU(16," Orden:"),t.qZA(),t._uU(17),t._UZ(18,"br"),t.TgZ(19,"strong"),t._uU(20," Modulo:"),t.qZA(),t._uU(21),t._UZ(22,"br"),t.TgZ(23,"strong"),t._uU(24," Ingreso:"),t.qZA(),t._uU(25),t._UZ(26,"br"),t.TgZ(27,"strong"),t._uU(28," Consulta:"),t.qZA(),t._uU(29),t._UZ(30,"br"),t.TgZ(31,"strong"),t._uU(32," Eliminacion:"),t.qZA(),t._uU(33),t._UZ(34,"br"),t.TgZ(35,"strong"),t._uU(36," Creacion:"),t.qZA(),t._uU(37),t._UZ(38,"br"),t.TgZ(39,"strong"),t._uU(40," Actualizacion:"),t.qZA(),t._uU(41),t._UZ(42,"br"),t.TgZ(43,"strong"),t._uU(44," Filtro:"),t.qZA(),t._uU(45),t._UZ(46,"br"),t.TgZ(47,"strong"),t._uU(48," Reporte:"),t.qZA(),t._uU(49),t._UZ(50,"br"),t.TgZ(51,"strong"),t._uU(52," Estado:"),t.qZA(),t._uU(53),t._UZ(54,"br"),t.qZA(),t.qZA(),t.qZA(),t._UZ(55,"ion-card-content"),t.TgZ(56,"ion-row",57),t.TgZ(57,"ion-col",17),t.TgZ(58,"ion-toolbar",45),t.TgZ(59,"ion-buttons",46),t.TgZ(60,"ion-button",5),t.NdJ("click",function(){const l=t.CHM(e).$implicit;return t.oxw(2).deleteRecord(l)}),t.ALo(61,"translate"),t._UZ(62,"ion-icon",47),t.qZA(),t.qZA(),t.TgZ(63,"ion-buttons",48),t.TgZ(64,"ion-button",49),t.NdJ("click",function(){const l=t.CHM(e).$implicit;return t.oxw(2).otrasop(l)}),t.ALo(65,"translate"),t._UZ(66,"ion-icon",50),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()}if(2&s){const e=d.$implicit,i=d.index;t.xp6(7),t.hij("",i+1," "),t.xp6(3),t.hij("",e.estado," "),t.xp6(7),t.hij(" ",e.orden," "),t.xp6(4),t.hij(" ",e.nombre," "),t.xp6(4),t.hij(" ",e.ingreso," "),t.xp6(4),t.hij(" ",e.consulta," "),t.xp6(4),t.hij(" ",e.eliminacion," "),t.xp6(4),t.hij(" ",e.creacion," "),t.xp6(4),t.hij(" ",e.actualizacion," "),t.xp6(4),t.hij(" ",e.filtro," "),t.xp6(4),t.hij(" ",e.reporte," "),t.xp6(4),t.hij(" ",e.estado," "),t.xp6(7),t.s9C("title",t.lcZ(61,14,"ELIMINARM")),t.xp6(4),t.s9C("title",t.lcZ(65,16,"MENUM"))}}function j(s,d){if(1&s&&(t.TgZ(0,"ion-grid"),t.TgZ(1,"ion-row"),t.YNc(2,G,67,18,"ion-col",51),t.qZA(),t.qZA()),2&s){const e=t.oxw();t.xp6(2),t.Q6J("ngForOf",e.itemsList)("ngForTrackBy",e.trackItems)}}function Q(s,d){1&s&&(t.TgZ(0,"h3",58),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&s&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"NODATOS")," "))}let B=(()=>{class s{constructor(e,i,r,l,g,U){this.routerOutlet=e,this.router=i,this.authenticationService=r,this.alertController=l,this.translateService=g,this.modalController=U,this.showAgeFilter=!1,this.showmenu=!1,this.items=[],this.variables=[],this.userinfo=[],this.viewType="grid",this.tituloxx="",this.efecto=0,this.seguro="",this.msg="",this.currentSegment="Todos",this.searchSubject=new u.t(1),this.apifoto=this.authenticationService.getapifoto()}changeToList(){this.viewType="list"}changeToGrid(){this.viewType="grid"}ngOnInit(){this.variables=this.router.getCurrentNavigation().extras.state.variables,this.idllave=this.router.getCurrentNavigation().extras.state.idllave,this.idrol=this.router.getCurrentNavigation().extras.state.idrol,this.userinfo=this.authenticationService.getcopiauser(),this.tituloxx=this.router.getCurrentNavigation().extras.state.title,this.searchQuery="",this.translateService.get("SEGUROM").subscribe(e=>{this.seguro=e}),this.translateService.get("MSGM").subscribe(e=>{this.msg=e}),this.rangeForm=new c.cw({dual:new c.NI({lower:1,upper:100})}),this.currentSegment="todos",this.pideregistros(this.currentSegment)}filterContacts(e){let i=e.detail.value;this.currentSegment=i,this.pideregistros(i)}pideregistros0(){this.pideregistros(this.currentSegment)}pideregistros(e){this.itemsList=[],this.efecto=0,this.authenticationService.getReg(this.idrol+"/"+this.idllave+"/"+e+"/"+this.userinfo[0].idempresa._id,"permiso3s",0).then(i=>{this.efecto=1,this.items=i,this.itemsList=this.items},i=>{this.authenticationService.presentAlert(i.error,this.msg,"")})}trackItems(e,i){return i.id}searchList(){this.searchSubject.next({lower:this.rangeForm.controls.dual.value.lower,upper:this.rangeForm.controls.dual.value.upper,query:this.searchQuery}),this.itemsList=this.filterList(this.items,this.searchQuery&&null!==this.searchQuery?this.searchQuery:"")}filterList(e,i){return e.filter(r=>r.nombre.toLowerCase().includes(i.toLowerCase()))}otrasop(e){return(0,h.mG)(this,void 0,void 0,function*(){yield(yield this.alertController.create({cssClass:"my-custom-class",header:"Seleccione Opci\xf3n",inputs:[{name:"Productos",type:"radio",label:"Productos",checked:!0,value:"/ProductoListPage\xb0Productos ->"+e.nombre}],buttons:[{text:"Cancel",role:"cancel",cssClass:"secondary",handler:r=>{}},{text:"Ok",handler:r=>{var l=r.split("\xb0");this.router.navigate([l[0]],{state:{variables:this.variables,user:null,idllave:e._id,title:l[1]}})}}]})).present()})}deleteRecord(e){return(0,h.mG)(this,void 0,void 0,function*(){yield(yield this.alertController.create({header:this.seguro,message:"",buttons:[{text:"No",cssClass:"secondary",handler:r=>{}},{text:"Si",handler:()=>{this.authenticationService.deleteReg(e._id+"/"+this.userinfo[0].email+"/"+this.userinfo[0].idempresa._id+"/na","permiso3s").then(l=>{this.pideregistros(this.currentSegment)},l=>{this.authenticationService.presentAlert(l.error,this.msg,"")})}}]})).present()})}updateRecord(e){return(0,h.mG)(this,void 0,void 0,function*(){const i=yield this.modalController.create({component:x,swipeToClose:!0,presentingElement:this.routerOutlet.nativeEl,componentProps:{variables:this.variables,idrol:this.idrol,idempresa:this.userinfo[0].idempresa._id,record:e,userinfo:this.userinfo,idllave:this.idllave,title:this.tituloxx},cssClass:"modal-fullscreen"});return i.onWillDismiss().then(r=>{"close"!==r.data&&this.pideregistros(this.currentSegment)}),yield i.present()})}addRecord(){return(0,h.mG)(this,void 0,void 0,function*(){const e=yield this.modalController.create({component:x,swipeToClose:!1,backdropDismiss:!1,animated:!0,presentingElement:yield this.modalController.getTop(),componentProps:{variables:this.variables,idrol:this.idrol,idempresa:this.userinfo[0].idempresa._id,record:null,userinfo:this.userinfo,idllave:this.idllave,title:this.tituloxx},cssClass:"modal-fullscreen"});return e.onWillDismiss().then(i=>{"close"!==i.data&&this.pideregistros(this.currentSegment)}),yield e.present()})}loadData(e){setTimeout(()=>{e.target.complete(),1e3===this.items.length&&(e.target.disabled=!0)},500)}}return s.\u0275fac=function(e){return new(e||s)(t.Y36(o.jP),t.Y36(Z.F0),t.Y36(f.$),t.Y36(o.Br),t.Y36(m.sK),t.Y36(o.IN))},s.\u0275cmp=t.Xpm({type:s,selectors:[["app-permiso3-list"]],viewQuery:function(e,i){if(1&e&&t.Gf(o.ju,5),2&e){let r;t.iGM(r=t.CRH())&&(i.infiniteScroll=r.first)}},decls:55,vars:35,consts:[["color","primary"],["slot","start"],["defaultHref","ModuloListPage"],["size","small"],["collapse","true","slot","end"],[3,"title","click"],["slot","icon-only","name","add"],["slot","icon-only","name","refresh-circle-outline"],[3,"click",4,"ngIf"],[1,"filters-toolbar"],["align-items-center","",1,"searchbar-row"],["animated","",3,"ngModel","placeholder","ngModelChange","ionChange"],[1,"call-to-action-col",3,"hidden"],["fill","clear","color","secondary",1,"filters-btn",3,"title","click"],["slot","icon-only","name","options"],[3,"formGroup","hidden"],[1,"range-item-row"],["size","12"],[1,"range-header"],[1,"range-value"],[1,"range-label"],["formControlName","dual","color","secondary","pin","true","dualKnobs","true","min","1","max","100","step","1","debounce","400",1,"range-control",3,"ionChange"],[1,"user-friends-content"],["sticky",""],[4,"ngIf"],["value","todos",3,"ionChange"],["value","todos","checked",""],["value","Activo"],["value","Inactivo"],["class","empty-list-message",4,"ngIf"],["threshold","100px",3,"ionInfinite"],["loadingSpinner","bubbles","loadingText","Espere un momento..."],[3,"click"],["slot","icon-only","name","grid"],["slot","icon-only","name","list"],["lines","none",4,"ngFor","ngForOf"],["lines","none"],[1,"ion-text-wrap"],["width","67%"],["class","item md in-list ion-activatable ion-focusable item-label hydrated",4,"ngFor","ngForOf","ngForTrackBy"],[1,"item","md","in-list","ion-activatable","ion-focusable","item-label","hydrated"],["size","12",3,"click"],["name","server-outline","slot","start"],["slot","end"],["color","medium"],["color","transparent"],["slot","secondary"],["slot","icon-only","name","trash-outline"],["slot","primary"],["color","secondary",3,"title","click"],["slot","icon-only","ios","ellipsis-horizontal","md","ellipsis-vertical"],["size-lg","6","size-sm","6","size","12",4,"ngFor","ngForOf","ngForTrackBy"],["size-lg","6","size-sm","6","size","12"],[1,"user-stats-wrapper","user-details-wrapper"],[1,"user-stat-value"],[1,"user-stat-name"],[1,"ion-text-wrap",3,"click"],["no-padding",""],[1,"empty-list-message"]],template:function(e,i){1&e&&(t.TgZ(0,"ion-header"),t.TgZ(1,"ion-toolbar",0),t.TgZ(2,"ion-buttons",1),t._UZ(3,"ion-back-button",2),t.qZA(),t.TgZ(4,"ion-title",3),t._uU(5),t.qZA(),t.TgZ(6,"ion-buttons",4),t.TgZ(7,"ion-button",5),t.NdJ("click",function(){return i.addRecord()}),t.ALo(8,"translate"),t._UZ(9,"ion-icon",6),t.qZA(),t.TgZ(10,"ion-button",5),t.NdJ("click",function(){return i.pideregistros0()}),t.ALo(11,"translate"),t._UZ(12,"ion-icon",7),t.qZA(),t.YNc(13,w,2,0,"ion-button",8),t.YNc(14,E,2,0,"ion-button",8),t.qZA(),t.qZA(),t.TgZ(15,"ion-toolbar",9),t.TgZ(16,"ion-row",10),t.TgZ(17,"ion-col"),t.TgZ(18,"ion-searchbar",11),t.NdJ("ngModelChange",function(l){return i.searchQuery=l})("ionChange",function(){return i.searchList()}),t.ALo(19,"translate"),t.qZA(),t.qZA(),t.TgZ(20,"ion-col",12),t.TgZ(21,"ion-button",13),t.NdJ("click",function(){return i.showAgeFilter=!i.showAgeFilter}),t.ALo(22,"translate"),t._UZ(23,"ion-icon",14),t.qZA(),t.qZA(),t.qZA(),t.TgZ(24,"form",15),t.TgZ(25,"ion-row",16),t.TgZ(26,"ion-col",17),t.TgZ(27,"div",18),t.TgZ(28,"span",19),t._uU(29),t.qZA(),t.TgZ(30,"span",20),t._uU(31,"Filter by age"),t.qZA(),t.TgZ(32,"span",19),t._uU(33),t.qZA(),t.qZA(),t.qZA(),t.TgZ(34,"ion-col",17),t.TgZ(35,"ion-range",21),t.NdJ("ionChange",function(){return i.searchList()}),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(36,"ion-content",22),t.TgZ(37,"ion-item-divider",23),t.YNc(38,O,4,7,"ion-label",24),t.qZA(),t.TgZ(39,"ion-segment",25),t.NdJ("ionChange",function(l){return i.filterContacts(l)}),t.TgZ(40,"ion-segment-button",26),t._uU(41),t.ALo(42,"translate"),t.qZA(),t.TgZ(43,"ion-segment-button",27),t._uU(44),t.ALo(45,"translate"),t.qZA(),t.TgZ(46,"ion-segment-button",28),t._uU(47),t.ALo(48,"translate"),t.qZA(),t.qZA(),t.YNc(49,R,2,2,"ion-list",24),t.YNc(50,D,2,2,"ion-list",24),t.YNc(51,j,3,2,"ion-grid",24),t.YNc(52,Q,3,3,"h3",29),t.TgZ(53,"ion-infinite-scroll",30),t.NdJ("ionInfinite",function(l){return i.loadData(l)}),t._UZ(54,"ion-infinite-scroll-content",31),t.qZA(),t.qZA()),2&e&&(t.xp6(5),t.hij(" ",i.tituloxx," "),t.xp6(2),t.MGl("title"," ",t.lcZ(8,21,"AGREGARM"),""),t.xp6(3),t.MGl("title"," ",t.lcZ(11,23,"REFRESCARM"),""),t.xp6(3),t.Q6J("ngIf","grid"===i.viewType),t.xp6(1),t.Q6J("ngIf","list"===i.viewType),t.xp6(4),t.s9C("placeholder",t.lcZ(19,25,"BUSCARM")),t.Q6J("ngModel",i.searchQuery),t.xp6(2),t.Q6J("hidden",!i.showAgeFilter),t.xp6(1),t.MGl("title"," ",t.lcZ(22,27,"FILTROM"),""),t.xp6(3),t.Q6J("formGroup",i.rangeForm)("hidden",!i.showAgeFilter),t.xp6(5),t.Oqu(i.rangeForm.controls.dual.value.lower),t.xp6(4),t.Oqu(i.rangeForm.controls.dual.value.upper),t.xp6(5),t.Q6J("ngIf",(null==i.itemsList?null:i.itemsList.length)>0),t.xp6(3),t.hij(" ",t.lcZ(42,29,"TODOSM")," "),t.xp6(3),t.hij(" ",t.lcZ(45,31,"ACTIVOSM")," "),t.xp6(3),t.hij(" ",t.lcZ(48,33,"INACTIVOSM")," "),t.xp6(2),t.Q6J("ngIf",0===i.efecto),t.xp6(1),t.Q6J("ngIf",(null==i.itemsList?null:i.itemsList.length)>0&&"list"===i.viewType),t.xp6(1),t.Q6J("ngIf",(null==i.itemsList?null:i.itemsList.length)>0&&"grid"===i.viewType),t.xp6(1),t.Q6J("ngIf",0===(null==i.itemsList?null:i.itemsList.length)))},directives:[o.Gu,o.sr,o.Sm,o.oU,o.cs,o.wd,o.YG,o.gu,_.O5,o.Nd,o.wI,o.VI,o.j9,c.JJ,c.On,c._Y,c.JL,c.sg,o.I_,o.QI,c.u,o.W2,o.rH,o.cJ,o.GO,o.ju,o.MB,o.Q$,o.q_,_.sg,o.Ie,L.B,o.jY,o.uN,o.yp,o.PM,o.FN],pipes:[m.X$],styles:["[_nghost-%COMP%]{--page-margin: var(--app-narrow-margin);--page-border-radius: var(--app-fair-radius);--page-segment-background: var(--app-background);--page-segment-indicator-height: 2px}ion-item-divider[_ngcontent-%COMP%]{--background: var(--ion-color-light);--padding-start: var(--page-margin)}[_nghost-%COMP%]{--page-margin: var(--app-fair-margin);--page-background: var(--app-background);--page-background-shade: var(--app-background-shade);--page-tags-gutter: 5px}"]}),s})();var V=a(22675);let Y=(()=>{class s{}return s.\u0275fac=function(e){return new(e||s)},s.\u0275mod=t.oAB({type:s}),s.\u0275inj=t.cJS({imports:[[_.ez,o.Pc,n.K,c.u5,c.UX,A.YL,V.v,Z.Bz.forChild([{path:"",component:B}]),m.aw.forChild()]]}),s})()},22675:(P,b,a)=>{a.d(b,{v:()=>h});var o=a(69808),Z=a(93075),_=a(51062),n=a(23349),m=a(55787),c=a(34345),A=a(5e3);let h=(()=>{class f{}return f.\u0275fac=function(p){return new(p||f)},f.\u0275mod=A.oAB({type:f}),f.\u0275inj=A.cJS({imports:[[o.ez,Z.u5,Z.UX,n.Pc,m.Bz,c.Cl,_.aw.forChild()]]}),f})()},63814:(P,b,a)=>{a.d(b,{B:()=>A});var o=a(70655),Z=a(47423),_=a(96090),n=a(5e3),m=a(23349);const c=["search"];let A=(()=>{class h{constructor(u,p,T){this.modalController=u,this.ngZone=p,this.navParams=T,this.title="AGM project",this.zoom=16}dismissModal(){this.modalController.dismiss("close")}dadireccion(){this.modalController.dismiss({direccion:this.address,la:this.latitude,lo:this.longitude})}ngOnInit(){this.uubx=this.navParams.get("uubx")}loadMap(){}clearWatch(){null!=this.watchId&&_.b.clearWatch({id:this.watchId})}setCurrentLocationa33(){if(Z.dV.isPluginAvailable("Geolocation"))try{this.watchId=_.b.watchPosition({timeout:1e3,enableHighAccuracy:!0,maximumAge:1e3},(u,p)=>{u&&(this.latitude=u.coords.latitude,this.longitude=u.coords.longitude)})}catch(u){console.error(u)}}setCurrentLocationa(){try{this.watchId=_.b.watchPosition({timeout:1e3,enableHighAccuracy:!0,maximumAge:1e3},(u,p)=>{u&&(this.latitude=u.coords.latitude,this.longitude=u.coords.longitude,this.getAddress(this.latitude,this.longitude))})}catch(u){console.error(u)}}setCurrentLocation2a(){if(Z.dV.isPluginAvailable("Geolocation"))try{this.watchId=_.b.watchPosition({timeout:1e3,enableHighAccuracy:!0,maximumAge:1e3},(u,p)=>{this.latitude=Number(this.uubx.substring(this.uubx.indexOf("{")+1,this.uubx.indexOf("\xb0"))),this.longitude=Number(this.uubx.substring(this.uubx.indexOf("\xb0")+1,this.uubx.indexOf("}"))),0!==this.latitude&&this.latitude&&this.getAddress(this.latitude,this.longitude)})}catch(u){console.error(u)}}markerDragEnd(u){0!==this.latitude&&this.latitude&&(this.latitude=u.coords.lat,this.longitude=u.coords.lng,this.getAddress(this.latitude,this.longitude))}getAddress(u,p){this.geoCoder.geocode({location:{lat:u,lng:p}},(T,v)=>{"OK"===v?T[0]?this.address=T[0].formatted_address:window.alert("No results found"):window.alert("Geocoder failed due to: "+v)})}closeModal(){return(0,o.mG)(this,void 0,void 0,function*(){this.modalController.dismiss("close")})}}return h.\u0275fac=function(u){return new(u||h)(n.Y36(m.IN),n.Y36(n.R0b),n.Y36(m.X1))},h.\u0275cmp=n.Xpm({type:h,selectors:[["app-my-modal"]],viewQuery:function(u,p){if(1&u&&n.Gf(c,5),2&u){let T;n.iGM(T=n.CRH())&&(p.searchElementRef=T.first)}},decls:19,vars:6,consts:[[3,"translucent"],["color","primary"],["shape","round","color","dark",3,"click"],["slot","start","name","locate"],["collapse","true","slot","end"],[3,"click"],["slot","icon-only","name","close"],["size","small"],[1,"ion-padding",3,"fullscreen"],["id","book-search-input","role","search"],["type","text","placeholder","Ingrese direcci\xf3n","autocorrect","off","autocapitalize","off","spellcheck","off","type","text",1,"book-search-input","native-input","sc-ion-input-ios",3,"keydown.enter"],["search",""],["type","submit","expand","block",1,"login-btn",3,"click"]],template:function(u,p){1&u&&(n.TgZ(0,"ion-header",0),n.TgZ(1,"ion-toolbar",1),n.TgZ(2,"ion-button",2),n.NdJ("click",function(){return p.loadMap()}),n._UZ(3,"ion-icon",3),n._uU(4," Ubicaci\xf3n "),n.qZA(),n.TgZ(5,"ion-buttons",4),n.TgZ(6,"ion-button",5),n.NdJ("click",function(){return p.closeModal()}),n._UZ(7,"ion-icon",6),n.qZA(),n.qZA(),n.TgZ(8,"ion-title",7),n._uU(9),n.qZA(),n.qZA(),n.qZA(),n.TgZ(10,"ion-content",8),n._uU(11),n.TgZ(12,"div",9),n.TgZ(13,"input",10,11),n.NdJ("keydown.enter",function(v){return v.preventDefault()}),n.qZA(),n.qZA(),n.TgZ(15,"h5"),n._uU(16),n.qZA(),n.TgZ(17,"ion-button",12),n.NdJ("click",function(){return p.dadireccion()}),n._uU(18,"Seleccionar"),n.qZA(),n.qZA()),2&u&&(n.Q6J("translucent",!0),n.xp6(9),n.Oqu(p.tituloxx),n.xp6(1),n.Q6J("fullscreen",!0),n.xp6(1),n.AsE("\n",p.latitude,", ",p.longitude," "),n.xp6(5),n.hij("Direcci\xf3n: ",p.address,""))},directives:[m.Gu,m.sr,m.YG,m.gu,m.Sm,m.wd,m.W2],styles:[".book-search-input[_ngcontent-%COMP%]{padding:6px;background:0 0;transition:top .5s ease;background:#bdbaba;border-bottom:1px solid rgba(0,0,0,.07);border-top:1px solid rgba(0,0,0,.07);margin-bottom:10px;margin-top:-1px;color:#fff;width:100%}"]}),h})()},26806:(P,b,a)=>{a.d(b,{B:()=>n});var o=a(5e3),Z=a(69808);const _=function(m,c){return{"no-animated":m,inline:c}};let n=(()=>{class m{constructor(){this.width="100%",this.height="16px",this.borderRadius="0",this.rounded=!1,this.noAnimated=!1,this.inline=!1,this.styles={}}ngOnInit(){this.styles={width:this.width,height:this.height,borderRadius:this.borderRadius},this.rounded&&(this.styles.borderRadius="999em")}}return m.\u0275fac=function(A){return new(A||m)},m.\u0275cmp=o.Xpm({type:m,selectors:[["skeleton-element"]],inputs:{width:"width",height:"height",borderRadius:"borderRadius",rounded:"rounded",noAnimated:"noAnimated",inline:"inline"},decls:1,vars:5,consts:[[3,"ngClass","ngStyle"]],template:function(A,h){1&A&&o._UZ(0,"div",0),2&A&&o.Q6J("ngClass",o.WLB(2,_,h.noAnimated,h.inline))("ngStyle",h.styles)},directives:[Z.mk,Z.PC],styles:["[_nghost-%COMP%]{display:block}[inline][_nghost-%COMP%]{display:inline-block}[_nghost-%COMP%]   .inline[_ngcontent-%COMP%]{display:inline-block}[_nghost-%COMP%]   .no-animated[_ngcontent-%COMP%]{-webkit-animation:none!important;animation:none!important;background:rgba(130,130,130,.2)}.animated-background[_ngcontent-%COMP%], [_nghost-%COMP%]   div[_ngcontent-%COMP%]{-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-name:placeHolderShimmer;animation-name:placeHolderShimmer;-webkit-animation-timing-function:linear;animation-timing-function:linear;background:rgba(130,130,130,.2);background:linear-gradient(to right,rgba(130,130,130,.2) 8%,rgba(130,130,130,.3) 18%,rgba(130,130,130,.2) 33%);background-size:800px 100px;position:relative}@-webkit-keyframes placeHolderShimmer{0%{background-position:-468px 0}to{background-position:468px 0}}@keyframes placeHolderShimmer{0%{background-position:-468px 0}to{background-position:468px 0}}"]}),m})()}}]);