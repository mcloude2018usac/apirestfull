"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[7231],{50076:(C,v,s)=>{s.d(v,{oK:()=>i,GW:()=>f,dk:()=>p});var i=(()=>{return(n=i||(i={})).Prompt="PROMPT",n.Camera="CAMERA",n.Photos="PHOTOS",i;var n})(),f=(()=>{return(n=f||(f={})).Rear="REAR",n.Front="FRONT",f;var n})(),p=(()=>{return(n=p||(p={})).Uri="uri",n.Base64="base64",n.DataUrl="dataUrl",p;var n})()},26388:(C,v,s)=>{s.d(v,{dk:()=>f.dk,oK:()=>f.oK,V1:()=>p});var i=s(47423),f=s(50076);const p=(0,i.fo)("Camera",{web:()=>s.e(3954).then(s.bind(s,63954)).then(n=>new n.CameraWeb)})},87231:(C,v,s)=>{s.r(v),s.d(v,{frmcomandoListPageModule:()=>K});var i=s(23349),f=s(55787),p=s(69808),n=s(33678),m=s(51062),c=s(93075),T=s(36351),g=s(70655),Z=s(49926),d=s(4707),_=s(63814),b=s(15190),A=s(26388),t=s(5e3);const k=["inputId"],q=["fotoa"];function L(r,u){1&r&&(t.TgZ(0,"div",23),t._UZ(1,"ion-icon",24),t.TgZ(2,"span"),t._uU(3,"Ingrese nombre"),t.qZA(),t.qZA())}function U(r,u){1&r&&(t.TgZ(0,"div",23),t._UZ(1,"ion-icon",24),t.TgZ(2,"span"),t._uU(3,"Ingrese comando"),t.qZA(),t.qZA())}function I(r,u){1&r&&(t.TgZ(0,"div",23),t._UZ(1,"ion-icon",24),t.TgZ(2,"span"),t._uU(3,"Ingrese estado"),t.qZA(),t.qZA())}let x=(()=>{class r{constructor(e,o,a,l,h){this.modalController=e,this.translateService=o,this.authenticationService=a,this.navParams=l,this.actionSheetController=h,this.variables=[],this.userinfo=[],this.tituloxx="",this.vgrupo=[],this.apifoto=this.authenticationService.getapifoto()}ngAfterViewInit(){setTimeout(()=>{this.inputElement.setFocus()},400)}dismissModal(){this.modalController.dismiss("close")}ionViewDidEnter(){}ngOnInit(){this.variables=this.navParams.get("variables"),this.userinfo=this.navParams.get("userinfo"),this.idllave=this.navParams.get("idllave"),this.tituloxx=this.navParams.get("title"),this.Form=new c.cw({nombre:new c.NI("",c.kI.compose([c.kI.required,c.kI.pattern("[a-zA-Z0-9-_()\xe1\xe9\xed\xf3\xfa\xc1\xc9\xcd\xd3\xda#*$!? \xf1\xd1&+-/.]*")])),nombre2:new c.NI(""),comando:new c.NI("",c.kI.required),estado:new c.NI("",c.kI.required)}),null==this.navParams.get("record")?this.translateService.get("NUEVOM").subscribe(e=>{this.tituloxx=e+" "+this.tituloxx,this.lpermiso=e}):(this.translateService.get("ACTUALIZAM").subscribe(e=>{this.tituloxx=e+" "+this.tituloxx,this.lpermiso=e}),this._ID=this.navParams.data.record._id,this.Form.controls.nombre.setValue(this.navParams.data.record.nombre),this.Form.controls.comando.setValue(this.navParams.data.record.comando),this.Form.controls.nombre2.setValue(this.navParams.data.record.nombre2?this.navParams.data.record.nombre2:""),this.Form.controls.estado.setValue(this.navParams.data.record.estado))}submitForm(){const e={idempresa:this.userinfo[0].idempresa._id,idpapa:this.idllave,nombre:this.Form.controls.nombre.value,nombre2:this.Form.controls.nombre2.value,comando:this.Form.controls.comando.value,estado:this.Form.controls.estado.value,bitacora:{idempresa:this.userinfo[0].idempresa._id,idafiliado:"",email:this.userinfo[0].email,permiso:this.lpermiso,accion:this.tituloxx}};null==this.navParams.get("record")?e&&this.authenticationService.createReg("",e,"frmcomandos").then(o=>{!this.Form.valid||this.modalController.dismiss("ok")},o=>{this.authenticationService.presentAlert(o.error,"Precauci\xf3n","")}):e&&this.authenticationService.createReg(this._ID,e,"frmcomandos").then(o=>{!this.Form.valid||this.modalController.dismiss("ok")},o=>{this.authenticationService.presentAlert(o.error,"Precauci\xf3n","")})}dacomponente(e,o){return(0,g.mG)(this,void 0,void 0,function*(){let a="";"ubicacion"===e&&(a=this.Form.controls.ubicacion.value);const l=yield this.modalController.create({component:_.B,swipeToClose:!1,backdropDismiss:!1,animated:!0,presentingElement:yield this.modalController.getTop(),componentProps:{variables:this.variables,record:null,userinfo:this.userinfo,uubx:a},cssClass:"modal-fullscreen"});return l.onWillDismiss().then(h=>{"close"===h.data||("direccion"===e?this.Form.controls.direccion.setValue(h.data.direccion):this.Form.controls.ubicacion.setValue(h.data.direccion+" {"+h.data.la+"\xb0"+h.data.lo+"}"))}),yield l.present()})}takePicture(e){return(0,g.mG)(this,void 0,void 0,function*(){const o=yield A.V1.getPhoto({correctOrientation:!0,height:200,width:200,quality:60,allowEditing:!0,resultType:A.dk.DataUrl,source:A.oK.Camera});this.authenticationService.generateFromImage(o.dataUrl,200,200,.5,a=>{"fotoa"===e&&(this.fotoimg=a,this.Form.controls.foto.setValue(this.authenticationService.procesafoto(this.Form.controls.foto.value)))})})}uploadPWA2(e,o){o&&o.length>0&&this.firstFileToBase64(o[0]).then(l=>{this.authenticationService.generateFromImage(l,200,300,.5,h=>{"fotoa"===e&&(this.fotoimg=h,this.Form.controls.foto.setValue(this.authenticationService.procesafoto(this.Form.controls.foto.value)))})},l=>{"fotoa"===e&&(this.fotoimg=null,this.Form.controls.foto1.setValue(""))})}uploadPWA(e){if("fotoa"===e){if(null==this.fotoa)return;this.uploadPWA2(e,this.fotoa.nativeElement.files)}}firstFileToBase64(e){return new Promise((o,a)=>{const l=new FileReader;l&&null!=e?(l.readAsDataURL(e),l.onload=()=>{o(l.result)},l.onerror=h=>{a(h)}):a(new Error("No file found"))})}takePicture2(e){return(0,g.mG)(this,void 0,void 0,function*(){"fotoa"===e&&this.fotoa.nativeElement.click()})}fotodatos(e){return(0,g.mG)(this,void 0,void 0,function*(){yield(yield this.actionSheetController.create({header:"Foto",cssClass:"my-custom-class",buttons:[{text:"Galeria",role:"destructive",icon:"image-outline",handler:()=>{this.takePicture2(e)}},{text:"Camara",icon:"camera-outline",handler:()=>{this.takePicture(e)}}]})).present()})}combodatos(e,o,a,l,h,y){return(0,g.mG)(this,void 0,void 0,function*(){const M=yield this.modalController.create({component:b.j,swipeToClose:!1,backdropDismiss:!1,animated:!0,presentingElement:yield this.modalController.getTop(),componentProps:{grabax:y,variables:this.variables,userinfo:this.userinfo,record2:null,op:o,frm:a,idllave:this.idllave,titlex:"Buscar "+h},cssClass:"modal-fullscreen"});return M.onWillDismiss().then(j=>{let P=[];P=j,"close"!==P.data&&this.Form.controls[l].setValue(P.data?P.data.nombre:"")}),yield M.present()})}}return r.\u0275fac=function(e){return new(e||r)(t.Y36(i.IN),t.Y36(m.sK),t.Y36(Z.$),t.Y36(i.X1),t.Y36(i.BX))},r.\u0275cmp=t.Xpm({type:r,selectors:[["app-frmcomando-create"]],viewQuery:function(e,o){if(1&e&&(t.Gf(k,5),t.Gf(q,7)),2&e){let a;t.iGM(a=t.CRH())&&(o.inputElement=a.first),t.iGM(a=t.CRH())&&(o.fotoa=a.first)}},decls:52,vars:9,consts:[[1,"create-user-form","ion-page",3,"formGroup"],["color","primary"],["collapse","true","slot","end"],[3,"click"],["slot","icon-only","name","close"],["size","small"],[1,"create-form-content"],[1,"user-details-fields","fields-section"],["lines","full",1,"inputs-list"],[1,"input-item"],["position","floating"],["color","danger"],["inputMode","text","clearInput","true","formControlName","nombre","required",""],["inputId",""],[1,"error-container"],["class","error-message",4,"ngIf"],["inputMode","text","clearInput","true","formControlName","nombre2"],["inputMode","text","clearInput","true","formControlName","comando","required",""],["formControlName","estado",3,"placeholder"],["text-wrap","","value","Activo"],["text-wrap","","value","Inactivo"],[1,"form-actions-wrapper"],["color","primary","expand","block","fill","outline","type","submit",3,"disabled","click"],[1,"error-message"],["name","information-circle-outline"]],template:function(e,o){1&e&&(t.TgZ(0,"form",0),t.TgZ(1,"ion-header"),t.TgZ(2,"ion-toolbar",1),t.TgZ(3,"ion-buttons",2),t.TgZ(4,"ion-button",3),t.NdJ("click",function(){return o.dismissModal()}),t._UZ(5,"ion-icon",4),t.qZA(),t.qZA(),t.TgZ(6,"ion-title",5),t._uU(7),t.qZA(),t.qZA(),t.qZA(),t.TgZ(8,"ion-content",6),t.TgZ(9,"section",7),t.TgZ(10,"ion-list",8),t.TgZ(11,"ion-item",9),t.TgZ(12,"ion-label",10),t._uU(13,"Nombre"),t.TgZ(14,"ion-text",11),t._uU(15,"*"),t.qZA(),t.qZA(),t._UZ(16,"ion-input",12,13),t.qZA(),t.TgZ(18,"div",14),t.YNc(19,L,4,0,"div",15),t.qZA(),t.TgZ(20,"ion-item",9),t.TgZ(21,"ion-label",10),t._uU(22,"Nombre (Ingles)"),t.qZA(),t._UZ(23,"ion-input",16,13),t.qZA(),t.TgZ(25,"ion-item",9),t.TgZ(26,"ion-label",10),t._uU(27,"Comando"),t.TgZ(28,"ion-text",11),t._uU(29,"*"),t.qZA(),t.qZA(),t._UZ(30,"ion-input",17),t.qZA(),t.TgZ(31,"div",14),t.YNc(32,U,4,0,"div",15),t.qZA(),t.TgZ(33,"ion-item",9),t.TgZ(34,"ion-label"),t._uU(35,"Estado"),t.TgZ(36,"ion-text",11),t._uU(37,"*"),t.qZA(),t.qZA(),t.TgZ(38,"ion-select",18,13),t.ALo(40,"translate"),t.TgZ(41,"ion-select-option",19),t._uU(42,"Activo"),t.qZA(),t.TgZ(43,"ion-select-option",20),t._uU(44,"Inactivo"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(45,"div",14),t.YNc(46,I,4,0,"div",15),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(47,"ion-footer"),t.TgZ(48,"ion-row",21),t.TgZ(49,"ion-col"),t.TgZ(50,"ion-button",22),t.NdJ("click",function(){return o.submitForm()}),t._uU(51,"CREAR"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&e&&(t.Q6J("formGroup",o.Form),t.xp6(7),t.Oqu(o.tituloxx),t.xp6(12),t.Q6J("ngIf",o.Form.get("nombre").hasError("required")&&(o.Form.get("nombre").dirty||o.Form.get("nombre").touched)),t.xp6(13),t.Q6J("ngIf",o.Form.get("comando").hasError("required")&&(o.Form.get("comando").dirty||o.Form.get("comando").touched)),t.xp6(6),t.s9C("placeholder",t.lcZ(40,7,"SELECTVALORM")),t.xp6(8),t.Q6J("ngIf",o.Form.get("estado").hasError("required")&&(o.Form.get("estado").dirty||o.Form.get("estado").touched)),t.xp6(4),t.Q6J("disabled",!o.Form.valid))},directives:[c._Y,c.JL,c.sg,i.Gu,i.sr,i.Sm,i.YG,i.gu,i.wd,i.W2,i.q_,i.Ie,i.Q$,i.yW,i.pK,i.j9,c.JJ,c.u,c.Q7,p.O5,i.t9,i.QI,i.n0,i.fr,i.Nd,i.wI],pipes:[m.X$],styles:["[_nghost-%COMP%]{--page-margin: var(--app-fair-margin);--page-background: var(--app-background);--page-background-shade: var(--app-background-shade);--page-tags-gutter: 5px}"]}),r})();var O=s(26806);function w(r,u){if(1&r){const e=t.EpF();t.TgZ(0,"ion-button",32),t.NdJ("click",function(){return t.CHM(e),t.oxw().changeToList()}),t._UZ(1,"ion-icon",33),t.qZA()}}function E(r,u){if(1&r){const e=t.EpF();t.TgZ(0,"ion-button",32),t.NdJ("click",function(){return t.CHM(e),t.oxw().changeToGrid()}),t._UZ(1,"ion-icon",34),t.qZA()}}function F(r,u){if(1&r&&(t.TgZ(0,"ion-label"),t._uU(1),t.ALo(2,"translate"),t.ALo(3,"translate"),t.qZA()),2&r){const e=t.oxw();t.xp6(1),t.lnq("",t.lcZ(2,3,"NOREGISTROSM")," ",e.itemsList.length," ",t.lcZ(3,5,"NOREGISTROSM5"),"")}}function N(r,u){1&r&&(t.TgZ(0,"ion-item",36),t.TgZ(1,"ion-label",37),t._UZ(2,"skeleton-element"),t._UZ(3,"skeleton-element"),t._UZ(4,"skeleton-element",38),t.qZA(),t.qZA())}const S=function(){return[0,1,2,3,4,5,6]};function R(r,u){1&r&&(t.TgZ(0,"ion-list"),t.YNc(1,N,5,0,"ion-item",35),t.qZA()),2&r&&(t.xp6(1),t.Q6J("ngForOf",t.DdM(1,S)))}function D(r,u){if(1&r){const e=t.EpF();t.TgZ(0,"ion-item",40),t.TgZ(1,"ion-grid"),t.TgZ(2,"ion-row"),t.TgZ(3,"ion-col",41),t.NdJ("click",function(){const l=t.CHM(e).$implicit;return t.oxw(2).updateRecord(l)}),t._UZ(4,"ion-icon",42),t.TgZ(5,"ion-label",37),t.TgZ(6,"ion-note",43),t._uU(7),t.qZA(),t._UZ(8,"br"),t.TgZ(9,"p"),t.TgZ(10,"strong"),t._uU(11,"Nombre:"),t.qZA(),t._uU(12),t._UZ(13,"br"),t.TgZ(14,"strong"),t._uU(15,"Nombre (Ingles):"),t.qZA(),t._uU(16),t._UZ(17,"br"),t.qZA(),t.TgZ(18,"ion-badge",44),t._uU(19),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(20,"ion-row"),t.TgZ(21,"ion-col",17),t.TgZ(22,"ion-toolbar",45),t.TgZ(23,"ion-buttons",46),t.TgZ(24,"ion-button",5),t.NdJ("click",function(){const l=t.CHM(e).$implicit;return t.oxw(2).deleteRecord(l)}),t.ALo(25,"translate"),t._UZ(26,"ion-icon",47),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()}if(2&r){const e=u.$implicit,o=u.index;t.xp6(7),t.hij("No. ",o+1,""),t.xp6(5),t.hij(" ",e.nombre," "),t.xp6(4),t.hij(" ",e.nombre2," "),t.xp6(3),t.Oqu(e.estado),t.xp6(5),t.s9C("title",t.lcZ(25,5,"ELIMINARM"))}}function G(r,u){if(1&r&&(t.TgZ(0,"ion-list"),t.YNc(1,D,27,7,"ion-item",39),t.qZA()),2&r){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",e.itemsList)("ngForTrackBy",e.trackItems)}}function J(r,u){if(1&r){const e=t.EpF();t.TgZ(0,"ion-col",49),t.TgZ(1,"ion-card"),t.TgZ(2,"ion-row",50),t.TgZ(3,"ion-col"),t.TgZ(4,"span",51),t._uU(5,"No."),t.qZA(),t.TgZ(6,"span",52),t._uU(7),t.qZA(),t.qZA(),t.TgZ(8,"ion-col"),t.TgZ(9,"span",51),t._uU(10),t.qZA(),t.qZA(),t.qZA(),t.TgZ(11,"ion-item",40),t._UZ(12,"ion-icon",42),t.TgZ(13,"ion-label",53),t.NdJ("click",function(){const l=t.CHM(e).$implicit;return t.oxw(2).updateRecord(l)}),t.TgZ(14,"p"),t.TgZ(15,"strong"),t._uU(16,"Nombre:"),t.qZA(),t._uU(17),t._UZ(18,"br"),t.TgZ(19,"strong"),t._uU(20,"Nombre (Ingles):"),t.qZA(),t._uU(21),t._UZ(22,"br"),t.qZA(),t.qZA(),t.qZA(),t._UZ(23,"ion-card-content"),t.TgZ(24,"ion-row",54),t.TgZ(25,"ion-col",17),t.TgZ(26,"ion-toolbar",45),t.TgZ(27,"ion-buttons",46),t.TgZ(28,"ion-button",5),t.NdJ("click",function(){const l=t.CHM(e).$implicit;return t.oxw(2).deleteRecord(l)}),t.ALo(29,"translate"),t._UZ(30,"ion-icon",47),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()}if(2&r){const e=u.$implicit,o=u.index;t.xp6(7),t.hij("",o+1," "),t.xp6(3),t.hij("",e.estado," "),t.xp6(7),t.hij(" ",e.nombre," "),t.xp6(4),t.hij(" ",e.nombre2," "),t.xp6(7),t.s9C("title",t.lcZ(29,5,"ELIMINARM"))}}function Q(r,u){if(1&r&&(t.TgZ(0,"ion-grid"),t.TgZ(1,"ion-row"),t.YNc(2,J,31,7,"ion-col",48),t.qZA(),t.qZA()),2&r){const e=t.oxw();t.xp6(2),t.Q6J("ngForOf",e.itemsList)("ngForTrackBy",e.trackItems)}}function B(r,u){1&r&&(t.TgZ(0,"h3",55),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&r&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"NODATOS")," "))}let Y=(()=>{class r{constructor(e,o,a,l,h,y){this.routerOutlet=e,this.router=o,this.authenticationService=a,this.alertController=l,this.translateService=h,this.modalController=y,this.showAgeFilter=!1,this.showmenu=!1,this.items=[],this.variables=[],this.userinfo=[],this.viewType="grid",this.tituloxx="",this.efecto=0,this.seguro="",this.msg="",this.currentSegment="Todos",this.searchSubject=new d.t(1),this.apifoto=this.authenticationService.getapifoto()}changeToList(){this.viewType="list"}changeToGrid(){this.viewType="grid"}ngOnInit(){this.variables=this.router.getCurrentNavigation().extras.state.variables,this.idllave=this.router.getCurrentNavigation().extras.state.idllave,this.userinfo=this.authenticationService.getcopiauser(),this.tituloxx=this.router.getCurrentNavigation().extras.state.title,this.searchQuery="",this.translateService.get("SEGUROM").subscribe(e=>{this.seguro=e}),this.translateService.get("MSGM").subscribe(e=>{this.msg=e}),this.rangeForm=new c.cw({dual:new c.NI({lower:1,upper:100})}),this.currentSegment="todos",this.pideregistros(this.currentSegment)}filterContacts(e){let o=e.detail.value;this.currentSegment=o,this.pideregistros(o)}pideregistros0(){this.pideregistros(this.currentSegment)}pideregistros(e){this.itemsList=[],this.efecto=0,this.authenticationService.getReg("todos/"+e+"/"+this.userinfo[0].idempresa._id+"/"+this.idllave,"frmcomandos",0).then(o=>{this.efecto=1,this.items=o,this.itemsList=this.items},o=>{this.authenticationService.presentAlert(o.error,this.msg,"")})}trackItems(e,o){return o.id}searchList(){this.searchSubject.next({lower:this.rangeForm.controls.dual.value.lower,upper:this.rangeForm.controls.dual.value.upper,query:this.searchQuery}),this.itemsList=this.filterList(this.items,this.searchQuery&&null!==this.searchQuery?this.searchQuery:"")}filterList(e,o){return e.filter(a=>a.nombre.toLowerCase().includes(o.toLowerCase()))}otrasop(e){return(0,g.mG)(this,void 0,void 0,function*(){yield(yield this.alertController.create({cssClass:"my-custom-class",header:"Seleccione Opci\xf3n",inputs:[{name:"Grupousuarios",type:"radio",label:"Grupos de usuarios",checked:!0,value:"/frmcomandogrupoListPage\xb0Grupos de usuarios ->"+e.nombre+"\xb0"+e.nombre}],buttons:[{text:"Cancel",role:"cancel",cssClass:"secondary",handler:a=>{}},{text:"Ok",handler:a=>{var l=a.split("\xb0");this.router.navigate([l[0]],{state:{variables:this.variables,user:null,idllave:e._id,idllave0:this.idllave,title:l[1],title2:l[2]}})}}]})).present()})}deleteRecord(e){return(0,g.mG)(this,void 0,void 0,function*(){yield(yield this.alertController.create({header:this.seguro,message:"",buttons:[{text:"No",cssClass:"secondary",handler:a=>{}},{text:"Si",handler:()=>{this.authenticationService.deleteReg(e._id+"/"+this.userinfo[0].email+"/"+this.userinfo[0].idempresa._id+"/na","frmcomandos").then(l=>{this.pideregistros(this.currentSegment)},l=>{this.authenticationService.presentAlert(l.error,this.msg,"")})}}]})).present()})}updateRecord(e){return(0,g.mG)(this,void 0,void 0,function*(){const o=yield this.modalController.create({component:x,swipeToClose:!0,presentingElement:this.routerOutlet.nativeEl,componentProps:{variables:this.variables,record:e,userinfo:this.userinfo,idllave:this.idllave,title:this.tituloxx},cssClass:"modal-fullscreen"});return o.onWillDismiss().then(a=>{"close"!==a.data&&this.pideregistros(this.currentSegment)}),yield o.present()})}addRecord(){return(0,g.mG)(this,void 0,void 0,function*(){const e=yield this.modalController.create({component:x,swipeToClose:!1,backdropDismiss:!1,animated:!0,presentingElement:yield this.modalController.getTop(),componentProps:{variables:this.variables,record:null,userinfo:this.userinfo,idllave:this.idllave,title:this.tituloxx},cssClass:"modal-fullscreen"});return e.onWillDismiss().then(o=>{"close"!==o.data&&this.pideregistros(this.currentSegment)}),yield e.present()})}loadData(e){setTimeout(()=>{e.target.complete(),1e3===this.items.length&&(e.target.disabled=!0)},500)}}return r.\u0275fac=function(e){return new(e||r)(t.Y36(i.jP),t.Y36(f.F0),t.Y36(Z.$),t.Y36(i.Br),t.Y36(m.sK),t.Y36(i.IN))},r.\u0275cmp=t.Xpm({type:r,selectors:[["app-frmcomando-list"]],viewQuery:function(e,o){if(1&e&&t.Gf(i.ju,5),2&e){let a;t.iGM(a=t.CRH())&&(o.infiniteScroll=a.first)}},decls:55,vars:35,consts:[["color","primary"],["slot","start"],["defaultHref","FormsListPage"],["size","small"],["collapse","true","slot","end"],[3,"title","click"],["slot","icon-only","name","add"],["slot","icon-only","name","refresh-circle-outline"],[3,"click",4,"ngIf"],[1,"filters-toolbar"],["align-items-center","",1,"searchbar-row"],["animated","",3,"ngModel","placeholder","ngModelChange","ionChange"],[1,"call-to-action-col",3,"hidden"],["fill","clear","color","secondary",1,"filters-btn",3,"title","click"],["slot","icon-only","name","options"],[3,"formGroup","hidden"],[1,"range-item-row"],["size","12"],[1,"range-header"],[1,"range-value"],[1,"range-label"],["formControlName","dual","color","secondary","pin","true","dualKnobs","true","min","1","max","100","step","1","debounce","400",1,"range-control",3,"ionChange"],[1,"user-friends-content"],["sticky",""],[4,"ngIf"],["value","todos",3,"ionChange"],["value","todos","checked",""],["value","Activo"],["value","Inactivo"],["class","empty-list-message",4,"ngIf"],["threshold","100px",3,"ionInfinite"],["loadingSpinner","bubbles","loadingText","Espere un momento..."],[3,"click"],["slot","icon-only","name","grid"],["slot","icon-only","name","list"],["lines","none",4,"ngFor","ngForOf"],["lines","none"],[1,"ion-text-wrap"],["width","67%"],["class","item md in-list ion-activatable ion-focusable item-label hydrated",4,"ngFor","ngForOf","ngForTrackBy"],[1,"item","md","in-list","ion-activatable","ion-focusable","item-label","hydrated"],["size","12",3,"click"],["name","server-outline","slot","start"],["slot","end"],["color","medium"],["color","transparent"],["slot","secondary"],["slot","icon-only","name","trash-outline"],["size-lg","6","size-sm","6","size","12",4,"ngFor","ngForOf","ngForTrackBy"],["size-lg","6","size-sm","6","size","12"],[1,"user-stats-wrapper","user-details-wrapper"],[1,"user-stat-value"],[1,"user-stat-name"],[1,"ion-text-wrap",3,"click"],["no-padding",""],[1,"empty-list-message"]],template:function(e,o){1&e&&(t.TgZ(0,"ion-header"),t.TgZ(1,"ion-toolbar",0),t.TgZ(2,"ion-buttons",1),t._UZ(3,"ion-back-button",2),t.qZA(),t.TgZ(4,"ion-title",3),t._uU(5),t.qZA(),t.TgZ(6,"ion-buttons",4),t.TgZ(7,"ion-button",5),t.NdJ("click",function(){return o.addRecord()}),t.ALo(8,"translate"),t._UZ(9,"ion-icon",6),t.qZA(),t.TgZ(10,"ion-button",5),t.NdJ("click",function(){return o.pideregistros0()}),t.ALo(11,"translate"),t._UZ(12,"ion-icon",7),t.qZA(),t.YNc(13,w,2,0,"ion-button",8),t.YNc(14,E,2,0,"ion-button",8),t.qZA(),t.qZA(),t.TgZ(15,"ion-toolbar",9),t.TgZ(16,"ion-row",10),t.TgZ(17,"ion-col"),t.TgZ(18,"ion-searchbar",11),t.NdJ("ngModelChange",function(l){return o.searchQuery=l})("ionChange",function(){return o.searchList()}),t.ALo(19,"translate"),t.qZA(),t.qZA(),t.TgZ(20,"ion-col",12),t.TgZ(21,"ion-button",13),t.NdJ("click",function(){return o.showAgeFilter=!o.showAgeFilter}),t.ALo(22,"translate"),t._UZ(23,"ion-icon",14),t.qZA(),t.qZA(),t.qZA(),t.TgZ(24,"form",15),t.TgZ(25,"ion-row",16),t.TgZ(26,"ion-col",17),t.TgZ(27,"div",18),t.TgZ(28,"span",19),t._uU(29),t.qZA(),t.TgZ(30,"span",20),t._uU(31,"Filter by age"),t.qZA(),t.TgZ(32,"span",19),t._uU(33),t.qZA(),t.qZA(),t.qZA(),t.TgZ(34,"ion-col",17),t.TgZ(35,"ion-range",21),t.NdJ("ionChange",function(){return o.searchList()}),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(36,"ion-content",22),t.TgZ(37,"ion-item-divider",23),t.YNc(38,F,4,7,"ion-label",24),t.qZA(),t.TgZ(39,"ion-segment",25),t.NdJ("ionChange",function(l){return o.filterContacts(l)}),t.TgZ(40,"ion-segment-button",26),t._uU(41),t.ALo(42,"translate"),t.qZA(),t.TgZ(43,"ion-segment-button",27),t._uU(44),t.ALo(45,"translate"),t.qZA(),t.TgZ(46,"ion-segment-button",28),t._uU(47),t.ALo(48,"translate"),t.qZA(),t.qZA(),t.YNc(49,R,2,2,"ion-list",24),t.YNc(50,G,2,2,"ion-list",24),t.YNc(51,Q,3,2,"ion-grid",24),t.YNc(52,B,3,3,"h3",29),t.TgZ(53,"ion-infinite-scroll",30),t.NdJ("ionInfinite",function(l){return o.loadData(l)}),t._UZ(54,"ion-infinite-scroll-content",31),t.qZA(),t.qZA()),2&e&&(t.xp6(5),t.hij(" ",o.tituloxx," "),t.xp6(2),t.MGl("title"," ",t.lcZ(8,21,"AGREGARM"),""),t.xp6(3),t.MGl("title"," ",t.lcZ(11,23,"REFRESCARM"),""),t.xp6(3),t.Q6J("ngIf","grid"===o.viewType),t.xp6(1),t.Q6J("ngIf","list"===o.viewType),t.xp6(4),t.s9C("placeholder",t.lcZ(19,25,"BUSCARM")),t.Q6J("ngModel",o.searchQuery),t.xp6(2),t.Q6J("hidden",!o.showAgeFilter),t.xp6(1),t.MGl("title"," ",t.lcZ(22,27,"FILTROM"),""),t.xp6(3),t.Q6J("formGroup",o.rangeForm)("hidden",!o.showAgeFilter),t.xp6(5),t.Oqu(o.rangeForm.controls.dual.value.lower),t.xp6(4),t.Oqu(o.rangeForm.controls.dual.value.upper),t.xp6(5),t.Q6J("ngIf",(null==o.itemsList?null:o.itemsList.length)>0),t.xp6(3),t.hij(" ",t.lcZ(42,29,"TODOSM")," "),t.xp6(3),t.hij(" ",t.lcZ(45,31,"ACTIVOSM")," "),t.xp6(3),t.hij(" ",t.lcZ(48,33,"INACTIVOSM")," "),t.xp6(2),t.Q6J("ngIf",0===o.efecto),t.xp6(1),t.Q6J("ngIf",(null==o.itemsList?null:o.itemsList.length)>0&&"list"===o.viewType),t.xp6(1),t.Q6J("ngIf",(null==o.itemsList?null:o.itemsList.length)>0&&"grid"===o.viewType),t.xp6(1),t.Q6J("ngIf",0===(null==o.itemsList?null:o.itemsList.length)))},directives:[i.Gu,i.sr,i.Sm,i.oU,i.cs,i.wd,i.YG,i.gu,p.O5,i.Nd,i.wI,i.VI,i.j9,c.JJ,c.On,c._Y,c.JL,c.sg,i.I_,i.QI,c.u,i.W2,i.rH,i.cJ,i.GO,i.ju,i.MB,i.Q$,i.q_,p.sg,i.Ie,O.B,i.jY,i.uN,i.yp,i.PM,i.FN],pipes:[m.X$],styles:["[_nghost-%COMP%]{--page-margin: var(--app-narrow-margin);--page-border-radius: var(--app-fair-radius);--page-segment-background: var(--app-background);--page-segment-indicator-height: 2px}ion-item-divider[_ngcontent-%COMP%]{--background: var(--ion-color-light);--padding-start: var(--page-margin)}[_nghost-%COMP%]{--page-margin: var(--app-fair-margin);--page-background: var(--app-background);--page-background-shade: var(--app-background-shade);--page-tags-gutter: 5px}"]}),r})();var W=s(22675);let K=(()=>{class r{}return r.\u0275fac=function(e){return new(e||r)},r.\u0275mod=t.oAB({type:r}),r.\u0275inj=t.cJS({imports:[[p.ez,i.Pc,n.K,c.u5,c.UX,T.YL,W.v,f.Bz.forChild([{path:"",component:Y}]),m.aw.forChild()]]}),r})()},22675:(C,v,s)=>{s.d(v,{v:()=>g});var i=s(69808),f=s(93075),p=s(51062),n=s(23349),m=s(55787),c=s(34345),T=s(5e3);let g=(()=>{class Z{}return Z.\u0275fac=function(_){return new(_||Z)},Z.\u0275mod=T.oAB({type:Z}),Z.\u0275inj=T.cJS({imports:[[i.ez,f.u5,f.UX,n.Pc,m.Bz,c.Cl,p.aw.forChild()]]}),Z})()},63814:(C,v,s)=>{s.d(v,{B:()=>T});var i=s(70655),f=s(47423),p=s(96090),n=s(5e3),m=s(23349);const c=["search"];let T=(()=>{class g{constructor(d,_,b){this.modalController=d,this.ngZone=_,this.navParams=b,this.title="AGM project",this.zoom=16}dismissModal(){this.modalController.dismiss("close")}dadireccion(){this.modalController.dismiss({direccion:this.address,la:this.latitude,lo:this.longitude})}ngOnInit(){this.uubx=this.navParams.get("uubx")}loadMap(){}clearWatch(){null!=this.watchId&&p.b.clearWatch({id:this.watchId})}setCurrentLocationa33(){if(f.dV.isPluginAvailable("Geolocation"))try{this.watchId=p.b.watchPosition({timeout:1e3,enableHighAccuracy:!0,maximumAge:1e3},(d,_)=>{d&&(this.latitude=d.coords.latitude,this.longitude=d.coords.longitude)})}catch(d){console.error(d)}}setCurrentLocationa(){try{this.watchId=p.b.watchPosition({timeout:1e3,enableHighAccuracy:!0,maximumAge:1e3},(d,_)=>{d&&(this.latitude=d.coords.latitude,this.longitude=d.coords.longitude,this.getAddress(this.latitude,this.longitude))})}catch(d){console.error(d)}}setCurrentLocation2a(){if(f.dV.isPluginAvailable("Geolocation"))try{this.watchId=p.b.watchPosition({timeout:1e3,enableHighAccuracy:!0,maximumAge:1e3},(d,_)=>{this.latitude=Number(this.uubx.substring(this.uubx.indexOf("{")+1,this.uubx.indexOf("\xb0"))),this.longitude=Number(this.uubx.substring(this.uubx.indexOf("\xb0")+1,this.uubx.indexOf("}"))),0!==this.latitude&&this.latitude&&this.getAddress(this.latitude,this.longitude)})}catch(d){console.error(d)}}markerDragEnd(d){0!==this.latitude&&this.latitude&&(this.latitude=d.coords.lat,this.longitude=d.coords.lng,this.getAddress(this.latitude,this.longitude))}getAddress(d,_){this.geoCoder.geocode({location:{lat:d,lng:_}},(b,A)=>{"OK"===A?b[0]?this.address=b[0].formatted_address:window.alert("No results found"):window.alert("Geocoder failed due to: "+A)})}closeModal(){return(0,i.mG)(this,void 0,void 0,function*(){this.modalController.dismiss("close")})}}return g.\u0275fac=function(d){return new(d||g)(n.Y36(m.IN),n.Y36(n.R0b),n.Y36(m.X1))},g.\u0275cmp=n.Xpm({type:g,selectors:[["app-my-modal"]],viewQuery:function(d,_){if(1&d&&n.Gf(c,5),2&d){let b;n.iGM(b=n.CRH())&&(_.searchElementRef=b.first)}},decls:19,vars:6,consts:[[3,"translucent"],["color","primary"],["shape","round","color","dark",3,"click"],["slot","start","name","locate"],["collapse","true","slot","end"],[3,"click"],["slot","icon-only","name","close"],["size","small"],[1,"ion-padding",3,"fullscreen"],["id","book-search-input","role","search"],["type","text","placeholder","Ingrese direcci\xf3n","autocorrect","off","autocapitalize","off","spellcheck","off","type","text",1,"book-search-input","native-input","sc-ion-input-ios",3,"keydown.enter"],["search",""],["type","submit","expand","block",1,"login-btn",3,"click"]],template:function(d,_){1&d&&(n.TgZ(0,"ion-header",0),n.TgZ(1,"ion-toolbar",1),n.TgZ(2,"ion-button",2),n.NdJ("click",function(){return _.loadMap()}),n._UZ(3,"ion-icon",3),n._uU(4," Ubicaci\xf3n "),n.qZA(),n.TgZ(5,"ion-buttons",4),n.TgZ(6,"ion-button",5),n.NdJ("click",function(){return _.closeModal()}),n._UZ(7,"ion-icon",6),n.qZA(),n.qZA(),n.TgZ(8,"ion-title",7),n._uU(9),n.qZA(),n.qZA(),n.qZA(),n.TgZ(10,"ion-content",8),n._uU(11),n.TgZ(12,"div",9),n.TgZ(13,"input",10,11),n.NdJ("keydown.enter",function(A){return A.preventDefault()}),n.qZA(),n.qZA(),n.TgZ(15,"h5"),n._uU(16),n.qZA(),n.TgZ(17,"ion-button",12),n.NdJ("click",function(){return _.dadireccion()}),n._uU(18,"Seleccionar"),n.qZA(),n.qZA()),2&d&&(n.Q6J("translucent",!0),n.xp6(9),n.Oqu(_.tituloxx),n.xp6(1),n.Q6J("fullscreen",!0),n.xp6(1),n.AsE("\n",_.latitude,", ",_.longitude," "),n.xp6(5),n.hij("Direcci\xf3n: ",_.address,""))},directives:[m.Gu,m.sr,m.YG,m.gu,m.Sm,m.wd,m.W2],styles:[".book-search-input[_ngcontent-%COMP%]{padding:6px;background:0 0;transition:top .5s ease;background:#bdbaba;border-bottom:1px solid rgba(0,0,0,.07);border-top:1px solid rgba(0,0,0,.07);margin-bottom:10px;margin-top:-1px;color:#fff;width:100%}"]}),g})()},26806:(C,v,s)=>{s.d(v,{B:()=>n});var i=s(5e3),f=s(69808);const p=function(m,c){return{"no-animated":m,inline:c}};let n=(()=>{class m{constructor(){this.width="100%",this.height="16px",this.borderRadius="0",this.rounded=!1,this.noAnimated=!1,this.inline=!1,this.styles={}}ngOnInit(){this.styles={width:this.width,height:this.height,borderRadius:this.borderRadius},this.rounded&&(this.styles.borderRadius="999em")}}return m.\u0275fac=function(T){return new(T||m)},m.\u0275cmp=i.Xpm({type:m,selectors:[["skeleton-element"]],inputs:{width:"width",height:"height",borderRadius:"borderRadius",rounded:"rounded",noAnimated:"noAnimated",inline:"inline"},decls:1,vars:5,consts:[[3,"ngClass","ngStyle"]],template:function(T,g){1&T&&i._UZ(0,"div",0),2&T&&i.Q6J("ngClass",i.WLB(2,p,g.noAnimated,g.inline))("ngStyle",g.styles)},directives:[f.mk,f.PC],styles:["[_nghost-%COMP%]{display:block}[inline][_nghost-%COMP%]{display:inline-block}[_nghost-%COMP%]   .inline[_ngcontent-%COMP%]{display:inline-block}[_nghost-%COMP%]   .no-animated[_ngcontent-%COMP%]{-webkit-animation:none!important;animation:none!important;background:rgba(130,130,130,.2)}.animated-background[_ngcontent-%COMP%], [_nghost-%COMP%]   div[_ngcontent-%COMP%]{-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-name:placeHolderShimmer;animation-name:placeHolderShimmer;-webkit-animation-timing-function:linear;animation-timing-function:linear;background:rgba(130,130,130,.2);background:linear-gradient(to right,rgba(130,130,130,.2) 8%,rgba(130,130,130,.3) 18%,rgba(130,130,130,.2) 33%);background-size:800px 100px;position:relative}@-webkit-keyframes placeHolderShimmer{0%{background-position:-468px 0}to{background-position:468px 0}}@keyframes placeHolderShimmer{0%{background-position:-468px 0}to{background-position:468px 0}}"]}),m})()}}]);