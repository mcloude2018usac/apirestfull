"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6951],{50076:(x,v,a)=>{a.d(v,{oK:()=>o,GW:()=>f,dk:()=>p});var o=(()=>{return(n=o||(o={})).Prompt="PROMPT",n.Camera="CAMERA",n.Photos="PHOTOS",o;var n})(),f=(()=>{return(n=f||(f={})).Rear="REAR",n.Front="FRONT",f;var n})(),p=(()=>{return(n=p||(p={})).Uri="uri",n.Base64="base64",n.DataUrl="dataUrl",p;var n})()},26388:(x,v,a)=>{a.d(v,{dk:()=>f.dk,oK:()=>f.oK,V1:()=>p});var o=a(47423),f=a(50076);const p=(0,o.fo)("Camera",{web:()=>a.e(3954).then(a.bind(a,63954)).then(n=>new n.CameraWeb)})},16951:(x,v,a)=>{a.r(v),a.d(v,{frmactorListPageModule:()=>K});var o=a(23349),f=a(55787),p=a(69808),n=a(33678),d=a(51062),c=a(93075),T=a(36351),h=a(70655),b=a(49926),u=a(4707),_=a(63814),Z=a(15190),C=a(26388),t=a(5e3);const U=["inputId"],q=["fotoa"];function w(s,m){1&s&&(t.TgZ(0,"div",23),t._UZ(1,"ion-icon",24),t.TgZ(2,"span"),t._uU(3,"Ingrese nombre"),t.qZA(),t.qZA())}function O(s,m){1&s&&(t.TgZ(0,"div",23),t._UZ(1,"ion-icon",24),t.TgZ(2,"span"),t._uU(3,"Ingrese estado"),t.qZA(),t.qZA())}let k=(()=>{class s{constructor(e,i,r,l,g){this.modalController=e,this.translateService=i,this.authenticationService=r,this.navParams=l,this.actionSheetController=g,this.variables=[],this.userinfo=[],this.tituloxx="",this.vgrupo=[],this.apifoto=this.authenticationService.getapifoto()}ngAfterViewInit(){setTimeout(()=>{this.inputElement.setFocus()},400)}dismissModal(){this.modalController.dismiss("close")}ionViewDidEnter(){}ngOnInit(){this.variables=this.navParams.get("variables"),this.userinfo=this.navParams.get("userinfo"),this.idllave=this.navParams.get("idllave"),this.tituloxx=this.navParams.get("title"),this.Form=new c.cw({nombre:new c.NI("",c.kI.compose([c.kI.required,c.kI.pattern("[a-zA-Z0-9-_()\xe1\xe9\xed\xf3\xfa\xc1\xc9\xcd\xd3\xda#*$!? \xf1\xd1&+-/.]*")])),nombre2:new c.NI(""),descripciong:new c.NI(""),estado:new c.NI("",c.kI.required)}),null==this.navParams.get("record")?this.translateService.get("NUEVOM").subscribe(e=>{this.tituloxx=e+" "+this.tituloxx,this.lpermiso=e}):(this.translateService.get("ACTUALIZAM").subscribe(e=>{this.tituloxx=e+" "+this.tituloxx,this.lpermiso=e}),this._ID=this.navParams.data.record._id,this.Form.controls.nombre.setValue(this.navParams.data.record.nombre),this.Form.controls.nombre2.setValue(this.navParams.data.record.nombre2?this.navParams.data.record.nombre2:""),this.Form.controls.descripciong.setValue(this.navParams.data.record.descripciong?this.navParams.data.record.descripciong:""),this.Form.controls.estado.setValue(this.navParams.data.record.estado))}submitForm(){const e={idempresa:this.userinfo[0].idempresa._id,idpapa:this.idllave,nombre:this.Form.controls.nombre.value,nombre2:this.Form.controls.nombre2.value,descripciong:this.Form.controls.descripciong.value,estado:this.Form.controls.estado.value,bitacora:{idempresa:this.userinfo[0].idempresa._id,idafiliado:"",email:this.userinfo[0].email,permiso:this.lpermiso,accion:this.tituloxx}};null==this.navParams.get("record")?e&&this.authenticationService.createReg("",e,"frmactors").then(i=>{!this.Form.valid||this.modalController.dismiss("ok")},i=>{this.authenticationService.presentAlert(i.error,"Precauci\xf3n","")}):e&&this.authenticationService.createReg(this._ID,e,"frmactors").then(i=>{!this.Form.valid||this.modalController.dismiss("ok")},i=>{this.authenticationService.presentAlert(i.error,"Precauci\xf3n","")})}dacomponente(e,i){return(0,h.mG)(this,void 0,void 0,function*(){let r="";"ubicacion"===e&&(r=this.Form.controls.ubicacion.value);const l=yield this.modalController.create({component:_.B,swipeToClose:!1,backdropDismiss:!1,animated:!0,presentingElement:yield this.modalController.getTop(),componentProps:{variables:this.variables,record:null,userinfo:this.userinfo,uubx:r},cssClass:"modal-fullscreen"});return l.onWillDismiss().then(g=>{"close"===g.data||("direccion"===e?this.Form.controls.direccion.setValue(g.data.direccion):this.Form.controls.ubicacion.setValue(g.data.direccion+" {"+g.data.la+"\xb0"+g.data.lo+"}"))}),yield l.present()})}takePicture(e){return(0,h.mG)(this,void 0,void 0,function*(){const i=yield C.V1.getPhoto({correctOrientation:!0,height:200,width:200,quality:60,allowEditing:!0,resultType:C.dk.DataUrl,source:C.oK.Camera});this.authenticationService.generateFromImage(i.dataUrl,200,200,.5,r=>{"fotoa"===e&&(this.fotoimg=r,this.Form.controls.foto.setValue(this.authenticationService.procesafoto(this.Form.controls.foto.value)))})})}uploadPWA2(e,i){i&&i.length>0&&this.firstFileToBase64(i[0]).then(l=>{this.authenticationService.generateFromImage(l,200,300,.5,g=>{"fotoa"===e&&(this.fotoimg=g,this.Form.controls.foto.setValue(this.authenticationService.procesafoto(this.Form.controls.foto.value)))})},l=>{"fotoa"===e&&(this.fotoimg=null,this.Form.controls.foto1.setValue(""))})}uploadPWA(e){if("fotoa"===e){if(null==this.fotoa)return;this.uploadPWA2(e,this.fotoa.nativeElement.files)}}firstFileToBase64(e){return new Promise((i,r)=>{const l=new FileReader;l&&null!=e?(l.readAsDataURL(e),l.onload=()=>{i(l.result)},l.onerror=g=>{r(g)}):r(new Error("No file found"))})}takePicture2(e){return(0,h.mG)(this,void 0,void 0,function*(){"fotoa"===e&&this.fotoa.nativeElement.click()})}fotodatos(e){return(0,h.mG)(this,void 0,void 0,function*(){yield(yield this.actionSheetController.create({header:"Foto",cssClass:"my-custom-class",buttons:[{text:"Galeria",role:"destructive",icon:"image-outline",handler:()=>{this.takePicture2(e)}},{text:"Camara",icon:"camera-outline",handler:()=>{this.takePicture(e)}}]})).present()})}combodatos(e,i,r,l,g,P){return(0,h.mG)(this,void 0,void 0,function*(){const y=yield this.modalController.create({component:Z.j,swipeToClose:!1,backdropDismiss:!1,animated:!0,presentingElement:yield this.modalController.getTop(),componentProps:{grabax:P,variables:this.variables,userinfo:this.userinfo,record2:null,op:i,frm:r,idllave:this.idllave,titlex:"Buscar "+g},cssClass:"modal-fullscreen"});return y.onWillDismiss().then(M=>{let A=[];A=M,"close"!==A.data&&this.Form.controls[l].setValue(A.data?A.data.nombre:"")}),yield y.present()})}}return s.\u0275fac=function(e){return new(e||s)(t.Y36(o.IN),t.Y36(d.sK),t.Y36(b.$),t.Y36(o.X1),t.Y36(o.BX))},s.\u0275cmp=t.Xpm({type:s,selectors:[["app-frmactor-create"]],viewQuery:function(e,i){if(1&e&&(t.Gf(U,5),t.Gf(q,7)),2&e){let r;t.iGM(r=t.CRH())&&(i.inputElement=r.first),t.iGM(r=t.CRH())&&(i.fotoa=r.first)}},decls:48,vars:8,consts:[[1,"create-user-form","ion-page",3,"formGroup"],["color","primary"],["collapse","true","slot","end"],[3,"click"],["slot","icon-only","name","close"],["size","small"],[1,"create-form-content"],[1,"user-details-fields","fields-section"],["lines","full",1,"inputs-list"],[1,"input-item"],["position","floating"],["color","danger"],["inputMode","text","clearInput","true","formControlName","nombre","required",""],["inputId",""],[1,"error-container"],["class","error-message",4,"ngIf"],["inputMode","text","clearInput","true","formControlName","nombre2"],["formControlName","estado",3,"placeholder"],["text-wrap","","value","Activo"],["text-wrap","","value","Inactivo"],["rows","8","inputMode","text","clearInput","true","formControlName","descripciong"],[1,"form-actions-wrapper"],["color","primary","expand","block","fill","outline","type","submit",3,"disabled","click"],[1,"error-message"],["name","information-circle-outline"]],template:function(e,i){1&e&&(t.TgZ(0,"form",0),t.TgZ(1,"ion-header"),t.TgZ(2,"ion-toolbar",1),t.TgZ(3,"ion-buttons",2),t.TgZ(4,"ion-button",3),t.NdJ("click",function(){return i.dismissModal()}),t._UZ(5,"ion-icon",4),t.qZA(),t.qZA(),t.TgZ(6,"ion-title",5),t._uU(7),t.qZA(),t.qZA(),t.qZA(),t.TgZ(8,"ion-content",6),t.TgZ(9,"section",7),t.TgZ(10,"ion-list",8),t.TgZ(11,"ion-item",9),t.TgZ(12,"ion-label",10),t._uU(13,"Nombre"),t.TgZ(14,"ion-text",11),t._uU(15,"*"),t.qZA(),t.qZA(),t._UZ(16,"ion-input",12,13),t.qZA(),t.TgZ(18,"div",14),t.YNc(19,w,4,0,"div",15),t.qZA(),t.TgZ(20,"ion-item",9),t.TgZ(21,"ion-label",10),t._uU(22,"Nombre (Ingles)"),t.qZA(),t._UZ(23,"ion-input",16,13),t.qZA(),t.TgZ(25,"ion-item",9),t.TgZ(26,"ion-label"),t._uU(27,"Estado"),t.TgZ(28,"ion-text",11),t._uU(29,"*"),t.qZA(),t.qZA(),t.TgZ(30,"ion-select",17,13),t.ALo(32,"translate"),t.TgZ(33,"ion-select-option",18),t._uU(34,"Activo"),t.qZA(),t.TgZ(35,"ion-select-option",19),t._uU(36,"Inactivo"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(37,"div",14),t.YNc(38,O,4,0,"div",15),t.qZA(),t.TgZ(39,"ion-item",9),t.TgZ(40,"ion-label",10),t._uU(41,"Descripci\xf3n general"),t.qZA(),t._UZ(42,"ion-textarea",20),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(43,"ion-footer"),t.TgZ(44,"ion-row",21),t.TgZ(45,"ion-col"),t.TgZ(46,"ion-button",22),t.NdJ("click",function(){return i.submitForm()}),t._uU(47,"CREAR"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&e&&(t.Q6J("formGroup",i.Form),t.xp6(7),t.Oqu(i.tituloxx),t.xp6(12),t.Q6J("ngIf",i.Form.get("nombre").hasError("required")&&(i.Form.get("nombre").dirty||i.Form.get("nombre").touched)),t.xp6(11),t.s9C("placeholder",t.lcZ(32,6,"SELECTVALORM")),t.xp6(8),t.Q6J("ngIf",i.Form.get("estado").hasError("required")&&(i.Form.get("estado").dirty||i.Form.get("estado").touched)),t.xp6(8),t.Q6J("disabled",!i.Form.valid))},directives:[c._Y,c.JL,c.sg,o.Gu,o.sr,o.Sm,o.YG,o.gu,o.wd,o.W2,o.q_,o.Ie,o.Q$,o.yW,o.pK,o.j9,c.JJ,c.u,c.Q7,p.O5,o.t9,o.QI,o.n0,o.g2,o.fr,o.Nd,o.wI],pipes:[d.X$],styles:["[_nghost-%COMP%]{--page-margin: var(--app-fair-margin);--page-background: var(--app-background);--page-background-shade: var(--app-background-shade);--page-tags-gutter: 5px}"]}),s})();var E=a(26806);function I(s,m){if(1&s){const e=t.EpF();t.TgZ(0,"ion-button",34),t.NdJ("click",function(){return t.CHM(e),t.oxw().changeToList()}),t._UZ(1,"ion-icon",35),t.qZA()}}function F(s,m){if(1&s){const e=t.EpF();t.TgZ(0,"ion-button",34),t.NdJ("click",function(){return t.CHM(e),t.oxw().changeToGrid()}),t._UZ(1,"ion-icon",36),t.qZA()}}function N(s,m){if(1&s&&(t.TgZ(0,"ion-label"),t._uU(1),t.ALo(2,"translate"),t.ALo(3,"translate"),t.qZA()),2&s){const e=t.oxw();t.xp6(1),t.lnq("",t.lcZ(2,3,"NOREGISTROSM")," ",e.itemsList.length," ",t.lcZ(3,5,"NOREGISTROSM5"),"")}}function S(s,m){1&s&&(t.TgZ(0,"ion-item",38),t.TgZ(1,"ion-label",39),t._UZ(2,"skeleton-element"),t._UZ(3,"skeleton-element"),t._UZ(4,"skeleton-element",40),t.qZA(),t.qZA())}const R=function(){return[0,1,2,3,4,5,6]};function D(s,m){1&s&&(t.TgZ(0,"ion-list"),t.YNc(1,S,5,0,"ion-item",37),t.qZA()),2&s&&(t.xp6(1),t.Q6J("ngForOf",t.DdM(1,R)))}function J(s,m){if(1&s){const e=t.EpF();t.TgZ(0,"ion-item",42),t.TgZ(1,"ion-grid"),t.TgZ(2,"ion-row"),t.TgZ(3,"ion-col",43),t.NdJ("click",function(){const l=t.CHM(e).$implicit;return t.oxw(2).updateRecord(l)}),t._UZ(4,"ion-icon",44),t.TgZ(5,"ion-label",39),t.TgZ(6,"ion-note",45),t._uU(7),t.qZA(),t._UZ(8,"br"),t.TgZ(9,"p"),t.TgZ(10,"strong"),t._uU(11,"Nombre:"),t.qZA(),t._uU(12),t._UZ(13,"br"),t.TgZ(14,"strong"),t._uU(15,"Nombre (Ingles):"),t.qZA(),t._uU(16),t._UZ(17,"br"),t.qZA(),t.TgZ(18,"ion-badge",46),t._uU(19),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(20,"ion-row"),t.TgZ(21,"ion-col",19),t.TgZ(22,"ion-toolbar",47),t.TgZ(23,"ion-badge"),t._uU(24),t.qZA(),t._UZ(25,"div",48),t.TgZ(26,"ion-buttons",49),t.TgZ(27,"ion-button",7),t.NdJ("click",function(){const l=t.CHM(e).$implicit;return t.oxw(2).deleteRecord(l)}),t.ALo(28,"translate"),t._UZ(29,"ion-icon",50),t.qZA(),t.qZA(),t.TgZ(30,"ion-buttons",51),t.TgZ(31,"ion-button",52),t.NdJ("click",function(){const l=t.CHM(e).$implicit;return t.oxw(2).otrasop(l)}),t.ALo(32,"translate"),t._UZ(33,"ion-icon",53),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()}if(2&s){const e=m.$implicit,i=m.index;t.xp6(7),t.hij("No. ",i+1,""),t.xp6(5),t.hij(" ",e.nombre," "),t.xp6(4),t.hij(" ",e.nombre2," "),t.xp6(3),t.Oqu(e.estado),t.xp6(5),t.hij("",e.cuantos," Grupos"),t.xp6(1),t.Q6J("innerHtml",e.acciones,t.oJD),t.xp6(2),t.s9C("title",t.lcZ(28,8,"ELIMINARM")),t.xp6(4),t.s9C("title",t.lcZ(32,10,"MENUM"))}}function G(s,m){if(1&s&&(t.TgZ(0,"ion-list"),t.YNc(1,J,34,12,"ion-item",41),t.qZA()),2&s){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",e.itemsList)("ngForTrackBy",e.trackItems)}}function Q(s,m){if(1&s){const e=t.EpF();t.TgZ(0,"ion-col",55),t.TgZ(1,"ion-card"),t.TgZ(2,"ion-row",56),t.TgZ(3,"ion-col"),t.TgZ(4,"span",57),t._uU(5,"No."),t.qZA(),t.TgZ(6,"span",58),t._uU(7),t.qZA(),t.qZA(),t.TgZ(8,"ion-col"),t.TgZ(9,"span",57),t._uU(10),t.qZA(),t.qZA(),t.qZA(),t.TgZ(11,"ion-item",42),t._UZ(12,"ion-icon",44),t.TgZ(13,"ion-label",59),t.NdJ("click",function(){const l=t.CHM(e).$implicit;return t.oxw(2).updateRecord(l)}),t.TgZ(14,"p"),t.TgZ(15,"strong"),t._uU(16,"Nombre:"),t.qZA(),t._uU(17),t._UZ(18,"br"),t.TgZ(19,"strong"),t._uU(20,"Nombre (Ingles):"),t.qZA(),t._uU(21),t._UZ(22,"br"),t.qZA(),t.qZA(),t.qZA(),t._UZ(23,"ion-card-content"),t.TgZ(24,"ion-row",60),t.TgZ(25,"ion-col",19),t.TgZ(26,"ion-toolbar",47),t.TgZ(27,"ion-badge"),t._uU(28),t.qZA(),t._UZ(29,"div",48),t.TgZ(30,"ion-buttons",49),t.TgZ(31,"ion-button",7),t.NdJ("click",function(){const l=t.CHM(e).$implicit;return t.oxw(2).deleteRecord(l)}),t.ALo(32,"translate"),t._UZ(33,"ion-icon",50),t.qZA(),t.qZA(),t.TgZ(34,"ion-buttons",51),t.TgZ(35,"ion-button",52),t.NdJ("click",function(){const l=t.CHM(e).$implicit;return t.oxw(2).otrasop(l)}),t.ALo(36,"translate"),t._UZ(37,"ion-icon",53),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()}if(2&s){const e=m.$implicit,i=m.index;t.xp6(7),t.hij("",i+1," "),t.xp6(3),t.hij("",e.estado," "),t.xp6(7),t.hij(" ",e.nombre," "),t.xp6(4),t.hij(" ",e.nombre2," "),t.xp6(7),t.hij("",e.cuantos," Grupos"),t.xp6(1),t.Q6J("innerHtml",e.acciones,t.oJD),t.xp6(2),t.s9C("title",t.lcZ(32,8,"ELIMINARM")),t.xp6(4),t.s9C("title",t.lcZ(36,10,"MENUM"))}}function B(s,m){if(1&s&&(t.TgZ(0,"ion-grid"),t.TgZ(1,"ion-row"),t.YNc(2,Q,38,12,"ion-col",54),t.qZA(),t.qZA()),2&s){const e=t.oxw();t.xp6(2),t.Q6J("ngForOf",e.itemsList)("ngForTrackBy",e.trackItems)}}function W(s,m){1&s&&(t.TgZ(0,"h3",61),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&s&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"NODATOS")," "))}let Y=(()=>{class s{constructor(e,i,r,l,g,P){this.routerOutlet=e,this.router=i,this.authenticationService=r,this.alertController=l,this.translateService=g,this.modalController=P,this.showAgeFilter=!1,this.showmenu=!1,this.items=[],this.variables=[],this.userinfo=[],this.viewType="grid",this.tituloxx="",this.efecto=0,this.seguro="",this.msg="",this.currentSegment="Todos",this.searchSubject=new u.t(1),this.apifoto=this.authenticationService.getapifoto()}changeToList(){this.viewType="list"}changeToGrid(){this.viewType="grid"}ngOnInit(){this.variables=this.router.getCurrentNavigation().extras.state.variables,this.idllave=this.router.getCurrentNavigation().extras.state.idllave,this.userinfo=this.authenticationService.getcopiauser(),this.tituloxx=this.router.getCurrentNavigation().extras.state.title,this.searchQuery="",this.translateService.get("SEGUROM").subscribe(e=>{this.seguro=e}),this.translateService.get("MSGM").subscribe(e=>{this.msg=e}),this.rangeForm=new c.cw({dual:new c.NI({lower:1,upper:100})}),this.currentSegment="todos",this.pideregistros(this.currentSegment)}filterContacts(e){let i=e.detail.value;this.currentSegment=i,this.pideregistros(i)}pideregistros0(){this.pideregistros(this.currentSegment)}pideregistros(e){this.itemsList=[],this.efecto=0,this.authenticationService.getReg("todos/"+e+"/"+this.userinfo[0].idempresa._id+"/"+this.idllave,"frmactors",0).then(i=>{this.efecto=1,this.items=i,this.itemsList=this.items},i=>{this.authenticationService.presentAlert(i.error,this.msg,"")})}trackItems(e,i){return i.id}searchList(){this.searchSubject.next({lower:this.rangeForm.controls.dual.value.lower,upper:this.rangeForm.controls.dual.value.upper,query:this.searchQuery}),this.itemsList=this.filterList(this.items,this.searchQuery&&null!==this.searchQuery?this.searchQuery:"")}filterList(e,i){return e.filter(r=>r.nombre.toLowerCase().includes(i.toLowerCase()))}otrasop(e){return(0,h.mG)(this,void 0,void 0,function*(){yield(yield this.alertController.create({cssClass:"my-custom-class",header:"Seleccione Opci\xf3n",inputs:[{name:"Grupousuarios",type:"radio",label:"Grupos de usuarios",checked:!0,value:"/frmactorgrupoListPage\xb0Grupos de usuarios ->"+e.nombre+"\xb0"+e.nombre+"\xb0"+e.nombre2}],buttons:[{text:"Cancel",role:"cancel",cssClass:"secondary",handler:r=>{}},{text:"Ok",handler:r=>{var l=r.split("\xb0");this.router.navigate([l[0]],{state:{variables:this.variables,user:null,idllave:e._id,idllave0:this.idllave,title:l[1],title2:l[2],title3:l[3]}})}}]})).present()})}deleteRecord(e){return(0,h.mG)(this,void 0,void 0,function*(){yield(yield this.alertController.create({header:this.seguro,message:"",buttons:[{text:"No",cssClass:"secondary",handler:r=>{}},{text:"Si",handler:()=>{this.authenticationService.deleteReg(e._id+"/"+this.userinfo[0].email+"/"+this.userinfo[0].idempresa._id+"/na","frmactors").then(l=>{this.pideregistros(this.currentSegment)},l=>{this.authenticationService.presentAlert(l.error,this.msg,"")})}}]})).present()})}updateRecord(e){return(0,h.mG)(this,void 0,void 0,function*(){const i=yield this.modalController.create({component:k,swipeToClose:!0,presentingElement:this.routerOutlet.nativeEl,componentProps:{variables:this.variables,record:e,userinfo:this.userinfo,idllave:this.idllave,title:this.tituloxx},cssClass:"modal-fullscreen"});return i.onWillDismiss().then(r=>{"close"!==r.data&&this.pideregistros(this.currentSegment)}),yield i.present()})}addActor(){return(0,h.mG)(this,void 0,void 0,function*(){const y=yield this.modalController.create({component:Z.j,swipeToClose:!1,backdropDismiss:!1,animated:!0,presentingElement:yield this.modalController.getTop(),componentProps:{tarraymultiple:void 0,tmultiple:!0,doble:"",grabax:"actoress",variables:this.variables,userinfo:this.userinfo,record2:null,op:"usuario-plantilla-grupoproceso",frm:"frmcats",idllave:this.idllave,titlex:"Buscar actores"},cssClass:"modal-fullscreen"});return y.onWillDismiss().then(M=>{let A=[];A=M,"close"!==A.data&&(console.log(A.data.correos),this.authenticationService.createReg("",{idempresa:this.userinfo[0].idempresa._id,idpapa:this.idllave,actores:A.data.correos,operacion:"creaactores",bitacora:{idempresa:this.userinfo[0].idempresa._id,idafiliado:"",email:this.userinfo[0].email,permiso:"Crear",accion:"Crea nuevo actor"}},"frmactors").then(L=>{this.authenticationService.presentAlert("Operaci\xf3n realizada con exito","Exito","")},L=>{this.authenticationService.presentAlert(L.error,"Precauci\xf3n","")}))}),yield y.present()})}addRecord(){return(0,h.mG)(this,void 0,void 0,function*(){const e=yield this.modalController.create({component:k,swipeToClose:!1,backdropDismiss:!1,animated:!0,presentingElement:yield this.modalController.getTop(),componentProps:{variables:this.variables,record:null,userinfo:this.userinfo,idllave:this.idllave,title:this.tituloxx},cssClass:"modal-fullscreen"});return e.onWillDismiss().then(i=>{"close"!==i.data&&this.pideregistros(this.currentSegment)}),yield e.present()})}loadData(e){setTimeout(()=>{e.target.complete(),1e3===this.items.length&&(e.target.disabled=!0)},500)}}return s.\u0275fac=function(e){return new(e||s)(t.Y36(o.jP),t.Y36(f.F0),t.Y36(b.$),t.Y36(o.Br),t.Y36(d.sK),t.Y36(o.IN))},s.\u0275cmp=t.Xpm({type:s,selectors:[["app-frmactor-list"]],viewQuery:function(e,i){if(1&e&&t.Gf(o.ju,5),2&e){let r;t.iGM(r=t.CRH())&&(i.infiniteScroll=r.first)}},decls:57,vars:35,consts:[["color","primary"],["slot","start"],["defaultHref","FormsListPage"],["size","small"],["collapse","true","slot","end"],["title","Agregar actor existente",3,"click"],["slot","icon-only","name","person-add-outline"],[3,"title","click"],["slot","icon-only","name","add"],["slot","icon-only","name","refresh-circle-outline"],[3,"click",4,"ngIf"],[1,"filters-toolbar"],["align-items-center","",1,"searchbar-row"],["animated","",3,"ngModel","placeholder","ngModelChange","ionChange"],[1,"call-to-action-col",3,"hidden"],["fill","clear","color","secondary",1,"filters-btn",3,"title","click"],["slot","icon-only","name","options"],[3,"formGroup","hidden"],[1,"range-item-row"],["size","12"],[1,"range-header"],[1,"range-value"],[1,"range-label"],["formControlName","dual","color","secondary","pin","true","dualKnobs","true","min","1","max","100","step","1","debounce","400",1,"range-control",3,"ionChange"],[1,"user-friends-content"],["sticky",""],[4,"ngIf"],["value","todos",3,"ionChange"],["value","todos","checked",""],["value","Activo"],["value","Inactivo"],["class","empty-list-message",4,"ngIf"],["threshold","100px",3,"ionInfinite"],["loadingSpinner","bubbles","loadingText","Espere un momento..."],[3,"click"],["slot","icon-only","name","grid"],["slot","icon-only","name","list"],["lines","none",4,"ngFor","ngForOf"],["lines","none"],[1,"ion-text-wrap"],["width","67%"],["class","item md in-list ion-activatable ion-focusable item-label hydrated",4,"ngFor","ngForOf","ngForTrackBy"],[1,"item","md","in-list","ion-activatable","ion-focusable","item-label","hydrated"],["size","12",3,"click"],["name","server-outline","slot","start"],["slot","end"],["color","medium"],["color","transparent"],[1,"first-letter2",3,"innerHtml"],["slot","secondary"],["slot","icon-only","name","trash-outline"],["slot","primary"],["color","secondary",3,"title","click"],["slot","icon-only","ios","ellipsis-horizontal","md","ellipsis-vertical"],["size-lg","6","size-sm","6","size","12",4,"ngFor","ngForOf","ngForTrackBy"],["size-lg","6","size-sm","6","size","12"],[1,"user-stats-wrapper","user-details-wrapper"],[1,"user-stat-value"],[1,"user-stat-name"],[1,"ion-text-wrap",3,"click"],["no-padding",""],[1,"empty-list-message"]],template:function(e,i){1&e&&(t.TgZ(0,"ion-header"),t.TgZ(1,"ion-toolbar",0),t.TgZ(2,"ion-buttons",1),t._UZ(3,"ion-back-button",2),t.qZA(),t.TgZ(4,"ion-title",3),t._uU(5),t.qZA(),t.TgZ(6,"ion-buttons",4),t.TgZ(7,"ion-button",5),t.NdJ("click",function(){return i.addActor()}),t._UZ(8,"ion-icon",6),t.qZA(),t.TgZ(9,"ion-button",7),t.NdJ("click",function(){return i.addRecord()}),t.ALo(10,"translate"),t._UZ(11,"ion-icon",8),t.qZA(),t.TgZ(12,"ion-button",7),t.NdJ("click",function(){return i.pideregistros0()}),t.ALo(13,"translate"),t._UZ(14,"ion-icon",9),t.qZA(),t.YNc(15,I,2,0,"ion-button",10),t.YNc(16,F,2,0,"ion-button",10),t.qZA(),t.qZA(),t.TgZ(17,"ion-toolbar",11),t.TgZ(18,"ion-row",12),t.TgZ(19,"ion-col"),t.TgZ(20,"ion-searchbar",13),t.NdJ("ngModelChange",function(l){return i.searchQuery=l})("ionChange",function(){return i.searchList()}),t.ALo(21,"translate"),t.qZA(),t.qZA(),t.TgZ(22,"ion-col",14),t.TgZ(23,"ion-button",15),t.NdJ("click",function(){return i.showAgeFilter=!i.showAgeFilter}),t.ALo(24,"translate"),t._UZ(25,"ion-icon",16),t.qZA(),t.qZA(),t.qZA(),t.TgZ(26,"form",17),t.TgZ(27,"ion-row",18),t.TgZ(28,"ion-col",19),t.TgZ(29,"div",20),t.TgZ(30,"span",21),t._uU(31),t.qZA(),t.TgZ(32,"span",22),t._uU(33,"Filter by age"),t.qZA(),t.TgZ(34,"span",21),t._uU(35),t.qZA(),t.qZA(),t.qZA(),t.TgZ(36,"ion-col",19),t.TgZ(37,"ion-range",23),t.NdJ("ionChange",function(){return i.searchList()}),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(38,"ion-content",24),t.TgZ(39,"ion-item-divider",25),t.YNc(40,N,4,7,"ion-label",26),t.qZA(),t.TgZ(41,"ion-segment",27),t.NdJ("ionChange",function(l){return i.filterContacts(l)}),t.TgZ(42,"ion-segment-button",28),t._uU(43),t.ALo(44,"translate"),t.qZA(),t.TgZ(45,"ion-segment-button",29),t._uU(46),t.ALo(47,"translate"),t.qZA(),t.TgZ(48,"ion-segment-button",30),t._uU(49),t.ALo(50,"translate"),t.qZA(),t.qZA(),t.YNc(51,D,2,2,"ion-list",26),t.YNc(52,G,2,2,"ion-list",26),t.YNc(53,B,3,2,"ion-grid",26),t.YNc(54,W,3,3,"h3",31),t.TgZ(55,"ion-infinite-scroll",32),t.NdJ("ionInfinite",function(l){return i.loadData(l)}),t._UZ(56,"ion-infinite-scroll-content",33),t.qZA(),t.qZA()),2&e&&(t.xp6(5),t.hij(" ",i.tituloxx," "),t.xp6(4),t.MGl("title"," ",t.lcZ(10,21,"AGREGARM"),""),t.xp6(3),t.MGl("title"," ",t.lcZ(13,23,"REFRESCARM"),""),t.xp6(3),t.Q6J("ngIf","grid"===i.viewType),t.xp6(1),t.Q6J("ngIf","list"===i.viewType),t.xp6(4),t.s9C("placeholder",t.lcZ(21,25,"BUSCARM")),t.Q6J("ngModel",i.searchQuery),t.xp6(2),t.Q6J("hidden",!i.showAgeFilter),t.xp6(1),t.MGl("title"," ",t.lcZ(24,27,"FILTROM"),""),t.xp6(3),t.Q6J("formGroup",i.rangeForm)("hidden",!i.showAgeFilter),t.xp6(5),t.Oqu(i.rangeForm.controls.dual.value.lower),t.xp6(4),t.Oqu(i.rangeForm.controls.dual.value.upper),t.xp6(5),t.Q6J("ngIf",(null==i.itemsList?null:i.itemsList.length)>0),t.xp6(3),t.hij(" ",t.lcZ(44,29,"TODOSM")," "),t.xp6(3),t.hij(" ",t.lcZ(47,31,"ACTIVOSM")," "),t.xp6(3),t.hij(" ",t.lcZ(50,33,"INACTIVOSM")," "),t.xp6(2),t.Q6J("ngIf",0===i.efecto),t.xp6(1),t.Q6J("ngIf",(null==i.itemsList?null:i.itemsList.length)>0&&"list"===i.viewType),t.xp6(1),t.Q6J("ngIf",(null==i.itemsList?null:i.itemsList.length)>0&&"grid"===i.viewType),t.xp6(1),t.Q6J("ngIf",0===(null==i.itemsList?null:i.itemsList.length)))},directives:[o.Gu,o.sr,o.Sm,o.oU,o.cs,o.wd,o.YG,o.gu,p.O5,o.Nd,o.wI,o.VI,o.j9,c.JJ,c.On,c._Y,c.JL,c.sg,o.I_,o.QI,c.u,o.W2,o.rH,o.cJ,o.GO,o.ju,o.MB,o.Q$,o.q_,p.sg,o.Ie,E.B,o.jY,o.uN,o.yp,o.PM,o.FN],pipes:[d.X$],styles:["[_nghost-%COMP%]{--page-margin: var(--app-narrow-margin);--page-border-radius: var(--app-fair-radius);--page-segment-background: var(--app-background);--page-segment-indicator-height: 2px}ion-item-divider[_ngcontent-%COMP%]{--background: var(--ion-color-light);--padding-start: var(--page-margin)}[_nghost-%COMP%]{--page-margin: var(--app-fair-margin);--page-background: var(--app-background);--page-background-shade: var(--app-background-shade);--page-tags-gutter: 5px}.first-letter2[_ngcontent-%COMP%]{text-transform:capitalize;font-size:10px}.first-letter[_ngcontent-%COMP%]{text-transform:uppercase;font-size:14px}"]}),s})();var j=a(22675);let K=(()=>{class s{}return s.\u0275fac=function(e){return new(e||s)},s.\u0275mod=t.oAB({type:s}),s.\u0275inj=t.cJS({imports:[[p.ez,o.Pc,n.K,c.u5,c.UX,T.YL,j.v,f.Bz.forChild([{path:"",component:Y}]),d.aw.forChild()]]}),s})()},22675:(x,v,a)=>{a.d(v,{v:()=>h});var o=a(69808),f=a(93075),p=a(51062),n=a(23349),d=a(55787),c=a(34345),T=a(5e3);let h=(()=>{class b{}return b.\u0275fac=function(_){return new(_||b)},b.\u0275mod=T.oAB({type:b}),b.\u0275inj=T.cJS({imports:[[o.ez,f.u5,f.UX,n.Pc,d.Bz,c.Cl,p.aw.forChild()]]}),b})()},63814:(x,v,a)=>{a.d(v,{B:()=>T});var o=a(70655),f=a(47423),p=a(96090),n=a(5e3),d=a(23349);const c=["search"];let T=(()=>{class h{constructor(u,_,Z){this.modalController=u,this.ngZone=_,this.navParams=Z,this.title="AGM project",this.zoom=16}dismissModal(){this.modalController.dismiss("close")}dadireccion(){this.modalController.dismiss({direccion:this.address,la:this.latitude,lo:this.longitude})}ngOnInit(){this.uubx=this.navParams.get("uubx")}loadMap(){}clearWatch(){null!=this.watchId&&p.b.clearWatch({id:this.watchId})}setCurrentLocationa33(){if(f.dV.isPluginAvailable("Geolocation"))try{this.watchId=p.b.watchPosition({timeout:1e3,enableHighAccuracy:!0,maximumAge:1e3},(u,_)=>{u&&(this.latitude=u.coords.latitude,this.longitude=u.coords.longitude)})}catch(u){console.error(u)}}setCurrentLocationa(){try{this.watchId=p.b.watchPosition({timeout:1e3,enableHighAccuracy:!0,maximumAge:1e3},(u,_)=>{u&&(this.latitude=u.coords.latitude,this.longitude=u.coords.longitude,this.getAddress(this.latitude,this.longitude))})}catch(u){console.error(u)}}setCurrentLocation2a(){if(f.dV.isPluginAvailable("Geolocation"))try{this.watchId=p.b.watchPosition({timeout:1e3,enableHighAccuracy:!0,maximumAge:1e3},(u,_)=>{this.latitude=Number(this.uubx.substring(this.uubx.indexOf("{")+1,this.uubx.indexOf("\xb0"))),this.longitude=Number(this.uubx.substring(this.uubx.indexOf("\xb0")+1,this.uubx.indexOf("}"))),0!==this.latitude&&this.latitude&&this.getAddress(this.latitude,this.longitude)})}catch(u){console.error(u)}}markerDragEnd(u){0!==this.latitude&&this.latitude&&(this.latitude=u.coords.lat,this.longitude=u.coords.lng,this.getAddress(this.latitude,this.longitude))}getAddress(u,_){this.geoCoder.geocode({location:{lat:u,lng:_}},(Z,C)=>{"OK"===C?Z[0]?this.address=Z[0].formatted_address:window.alert("No results found"):window.alert("Geocoder failed due to: "+C)})}closeModal(){return(0,o.mG)(this,void 0,void 0,function*(){this.modalController.dismiss("close")})}}return h.\u0275fac=function(u){return new(u||h)(n.Y36(d.IN),n.Y36(n.R0b),n.Y36(d.X1))},h.\u0275cmp=n.Xpm({type:h,selectors:[["app-my-modal"]],viewQuery:function(u,_){if(1&u&&n.Gf(c,5),2&u){let Z;n.iGM(Z=n.CRH())&&(_.searchElementRef=Z.first)}},decls:19,vars:6,consts:[[3,"translucent"],["color","primary"],["shape","round","color","dark",3,"click"],["slot","start","name","locate"],["collapse","true","slot","end"],[3,"click"],["slot","icon-only","name","close"],["size","small"],[1,"ion-padding",3,"fullscreen"],["id","book-search-input","role","search"],["type","text","placeholder","Ingrese direcci\xf3n","autocorrect","off","autocapitalize","off","spellcheck","off","type","text",1,"book-search-input","native-input","sc-ion-input-ios",3,"keydown.enter"],["search",""],["type","submit","expand","block",1,"login-btn",3,"click"]],template:function(u,_){1&u&&(n.TgZ(0,"ion-header",0),n.TgZ(1,"ion-toolbar",1),n.TgZ(2,"ion-button",2),n.NdJ("click",function(){return _.loadMap()}),n._UZ(3,"ion-icon",3),n._uU(4," Ubicaci\xf3n "),n.qZA(),n.TgZ(5,"ion-buttons",4),n.TgZ(6,"ion-button",5),n.NdJ("click",function(){return _.closeModal()}),n._UZ(7,"ion-icon",6),n.qZA(),n.qZA(),n.TgZ(8,"ion-title",7),n._uU(9),n.qZA(),n.qZA(),n.qZA(),n.TgZ(10,"ion-content",8),n._uU(11),n.TgZ(12,"div",9),n.TgZ(13,"input",10,11),n.NdJ("keydown.enter",function(C){return C.preventDefault()}),n.qZA(),n.qZA(),n.TgZ(15,"h5"),n._uU(16),n.qZA(),n.TgZ(17,"ion-button",12),n.NdJ("click",function(){return _.dadireccion()}),n._uU(18,"Seleccionar"),n.qZA(),n.qZA()),2&u&&(n.Q6J("translucent",!0),n.xp6(9),n.Oqu(_.tituloxx),n.xp6(1),n.Q6J("fullscreen",!0),n.xp6(1),n.AsE("\n",_.latitude,", ",_.longitude," "),n.xp6(5),n.hij("Direcci\xf3n: ",_.address,""))},directives:[d.Gu,d.sr,d.YG,d.gu,d.Sm,d.wd,d.W2],styles:[".book-search-input[_ngcontent-%COMP%]{padding:6px;background:0 0;transition:top .5s ease;background:#bdbaba;border-bottom:1px solid rgba(0,0,0,.07);border-top:1px solid rgba(0,0,0,.07);margin-bottom:10px;margin-top:-1px;color:#fff;width:100%}"]}),h})()},26806:(x,v,a)=>{a.d(v,{B:()=>n});var o=a(5e3),f=a(69808);const p=function(d,c){return{"no-animated":d,inline:c}};let n=(()=>{class d{constructor(){this.width="100%",this.height="16px",this.borderRadius="0",this.rounded=!1,this.noAnimated=!1,this.inline=!1,this.styles={}}ngOnInit(){this.styles={width:this.width,height:this.height,borderRadius:this.borderRadius},this.rounded&&(this.styles.borderRadius="999em")}}return d.\u0275fac=function(T){return new(T||d)},d.\u0275cmp=o.Xpm({type:d,selectors:[["skeleton-element"]],inputs:{width:"width",height:"height",borderRadius:"borderRadius",rounded:"rounded",noAnimated:"noAnimated",inline:"inline"},decls:1,vars:5,consts:[[3,"ngClass","ngStyle"]],template:function(T,h){1&T&&o._UZ(0,"div",0),2&T&&o.Q6J("ngClass",o.WLB(2,p,h.noAnimated,h.inline))("ngStyle",h.styles)},directives:[f.mk,f.PC],styles:["[_nghost-%COMP%]{display:block}[inline][_nghost-%COMP%]{display:inline-block}[_nghost-%COMP%]   .inline[_ngcontent-%COMP%]{display:inline-block}[_nghost-%COMP%]   .no-animated[_ngcontent-%COMP%]{-webkit-animation:none!important;animation:none!important;background:rgba(130,130,130,.2)}.animated-background[_ngcontent-%COMP%], [_nghost-%COMP%]   div[_ngcontent-%COMP%]{-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-name:placeHolderShimmer;animation-name:placeHolderShimmer;-webkit-animation-timing-function:linear;animation-timing-function:linear;background:rgba(130,130,130,.2);background:linear-gradient(to right,rgba(130,130,130,.2) 8%,rgba(130,130,130,.3) 18%,rgba(130,130,130,.2) 33%);background-size:800px 100px;position:relative}@-webkit-keyframes placeHolderShimmer{0%{background-position:-468px 0}to{background-position:468px 0}}@keyframes placeHolderShimmer{0%{background-position:-468px 0}to{background-position:468px 0}}"]}),d})()}}]);