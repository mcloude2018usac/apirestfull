"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[150],{50076:(C,b,l)=>{l.d(b,{oK:()=>o,GW:()=>_,dk:()=>p});var o=(()=>{return(n=o||(o={})).Prompt="PROMPT",n.Camera="CAMERA",n.Photos="PHOTOS",o;var n})(),_=(()=>{return(n=_||(_={})).Rear="REAR",n.Front="FRONT",_;var n})(),p=(()=>{return(n=p||(p={})).Uri="uri",n.Base64="base64",n.DataUrl="dataUrl",p;var n})()},26388:(C,b,l)=>{l.d(b,{dk:()=>_.dk,oK:()=>_.oK,V1:()=>p});var o=l(47423),_=l(50076);const p=(0,o.fo)("Camera",{web:()=>l.e(3954).then(l.bind(l,63954)).then(n=>new n.CameraWeb)})},20150:(C,b,l)=>{l.r(b),l.d(b,{tarifaListPageModule:()=>B});var o=l(23349),_=l(55787),p=l(69808),n=l(33678),g=l(51062),u=l(93075),T=l(36351),h=l(70655),A=l(49926),c=l(4707),f=l(63814),Z=l(15190),v=l(26388),t=l(5e3);const M=["inputId"],q=["fotoa"];function L(a,d){1&a&&(t.TgZ(0,"div",21),t._UZ(1,"ion-icon",22),t.TgZ(2,"span"),t._uU(3,"Ingrese nombre"),t.qZA(),t.qZA())}function w(a,d){1&a&&(t.TgZ(0,"div",21),t._UZ(1,"ion-icon",22),t.TgZ(2,"span"),t._uU(3,"Ingrese estado"),t.qZA(),t.qZA())}let P=(()=>{class a{constructor(e,i,r,s,m){this.modalController=e,this.translateService=i,this.authenticationService=r,this.navParams=s,this.actionSheetController=m,this.variables=[],this.userinfo=[],this.tituloxx="",this.vgrupo=[],this.apifoto=this.authenticationService.getapifoto()}ngAfterViewInit(){setTimeout(()=>{this.inputElement.setFocus()},400)}dismissModal(){this.modalController.dismiss("close")}ionViewDidEnter(){}ngOnInit(){this.variables=this.navParams.get("variables"),this.userinfo=this.navParams.get("userinfo"),this.idllave=this.navParams.get("idllave"),this.tituloxx=this.navParams.get("title"),this.Form=new u.cw({nombre:new u.NI("",u.kI.compose([u.kI.required,u.kI.pattern("[a-zA-Z0-9-_()\xe1\xe9\xed\xf3\xfa\xc1\xc9\xcd\xd3\xda#*$!? \xf1\xd1&+-/.]*")])),estado:new u.NI("",u.kI.required)}),null==this.navParams.get("record")?this.translateService.get("NUEVOM").subscribe(e=>{this.tituloxx=e+" "+this.tituloxx,this.lpermiso=e}):(this.translateService.get("ACTUALIZAM").subscribe(e=>{this.tituloxx=e+" "+this.tituloxx,this.lpermiso=e}),this._ID=this.navParams.data.record._id,this.Form.controls.nombre.setValue(this.navParams.data.record.nombre),this.Form.controls.estado.setValue(this.navParams.data.record.estado))}submitForm(){const e={idempresa:this.idllave,nombre:this.Form.controls.nombre.value,estado:this.Form.controls.estado.value,bitacora:{idempresa:this.userinfo[0].idempresa._id,idafiliado:"",email:this.userinfo[0].email,permiso:this.lpermiso,accion:this.tituloxx}};null==this.navParams.get("record")?e&&this.authenticationService.createReg("",e,"tarifas").then(i=>{!this.Form.valid||this.modalController.dismiss("ok")},i=>{this.authenticationService.presentAlert(i.error,"Precauci\xf3n","")}):e&&this.authenticationService.createReg(this._ID,e,"tarifas").then(i=>{!this.Form.valid||this.modalController.dismiss("ok")},i=>{this.authenticationService.presentAlert(i.error,"Precauci\xf3n","")})}dacomponente(e,i){return(0,h.mG)(this,void 0,void 0,function*(){let r="";"ubicacion"===e&&(r=this.Form.controls.ubicacion.value);const s=yield this.modalController.create({component:f.B,swipeToClose:!1,backdropDismiss:!1,animated:!0,presentingElement:yield this.modalController.getTop(),componentProps:{variables:this.variables,record:null,userinfo:this.userinfo,uubx:r},cssClass:"modal-fullscreen"});return s.onWillDismiss().then(m=>{"close"===m.data||("direccion"===e?this.Form.controls.direccion.setValue(m.data.direccion):this.Form.controls.ubicacion.setValue(m.data.direccion+" {"+m.data.la+"\xb0"+m.data.lo+"}"))}),yield s.present()})}takePicture(e){return(0,h.mG)(this,void 0,void 0,function*(){const i=yield v.V1.getPhoto({correctOrientation:!0,height:200,width:200,quality:60,allowEditing:!0,resultType:v.dk.DataUrl,source:v.oK.Camera});this.authenticationService.generateFromImage(i.dataUrl,200,200,.5,r=>{"fotoa"===e&&(this.fotoimg=r,this.Form.controls.foto.setValue(this.authenticationService.procesafoto(this.Form.controls.foto.value)))})})}uploadPWA2(e,i){i&&i.length>0&&this.firstFileToBase64(i[0]).then(s=>{this.authenticationService.generateFromImage(s,200,300,.5,m=>{"fotoa"===e&&(this.fotoimg=m,this.Form.controls.foto.setValue(this.authenticationService.procesafoto(this.Form.controls.foto.value)))})},s=>{"fotoa"===e&&(this.fotoimg=null,this.Form.controls.foto1.setValue(""))})}uploadPWA(e){if("fotoa"===e){if(null==this.fotoa)return;this.uploadPWA2(e,this.fotoa.nativeElement.files)}}firstFileToBase64(e){return new Promise((i,r)=>{const s=new FileReader;s&&null!=e?(s.readAsDataURL(e),s.onload=()=>{i(s.result)},s.onerror=m=>{r(m)}):r(new Error("No file found"))})}takePicture2(e){return(0,h.mG)(this,void 0,void 0,function*(){"fotoa"===e&&this.fotoa.nativeElement.click()})}fotodatos(e){return(0,h.mG)(this,void 0,void 0,function*(){yield(yield this.actionSheetController.create({header:"Foto",cssClass:"my-custom-class",buttons:[{text:"Galeria",role:"destructive",icon:"image-outline",handler:()=>{this.takePicture2(e)}},{text:"Camara",icon:"camera-outline",handler:()=>{this.takePicture(e)}}]})).present()})}combodatos(e,i,r,s,m,y){return(0,h.mG)(this,void 0,void 0,function*(){const k=yield this.modalController.create({component:Z.j,swipeToClose:!1,backdropDismiss:!1,animated:!0,presentingElement:yield this.modalController.getTop(),componentProps:{grabax:y,variables:this.variables,userinfo:this.userinfo,record2:null,op:i,frm:r,idllave:this.idllave,titlex:"Buscar "+m},cssClass:"modal-fullscreen"});return k.onWillDismiss().then(W=>{let x=[];x=W,"close"!==x.data&&this.Form.controls[s].setValue(x.data?x.data.nombre:"")}),yield k.present()})}}return a.\u0275fac=function(e){return new(e||a)(t.Y36(o.IN),t.Y36(g.sK),t.Y36(A.$),t.Y36(o.X1),t.Y36(o.BX))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-tarifa-create"]],viewQuery:function(e,i){if(1&e&&(t.Gf(M,5),t.Gf(q,7)),2&e){let r;t.iGM(r=t.CRH())&&(i.inputElement=r.first),t.iGM(r=t.CRH())&&(i.fotoa=r.first)}},decls:39,vars:8,consts:[[1,"create-user-form","ion-page",3,"formGroup"],["color","primary"],["collapse","true","slot","end"],[3,"click"],["slot","icon-only","name","close"],["size","small"],[1,"create-form-content"],[1,"user-details-fields","fields-section"],["lines","full",1,"inputs-list"],[1,"input-item"],["position","floating"],["color","danger"],["inputMode","text","clearInput","true","formControlName","nombre","required",""],["inputId",""],[1,"error-container"],["class","error-message",4,"ngIf"],["formControlName","estado",3,"placeholder"],["text-wrap","","value","Activo"],["text-wrap","","value","Inactivo"],[1,"form-actions-wrapper"],["color","primary","expand","block","fill","outline","type","submit",3,"disabled","click"],[1,"error-message"],["name","information-circle-outline"]],template:function(e,i){1&e&&(t.TgZ(0,"form",0),t.TgZ(1,"ion-header"),t.TgZ(2,"ion-toolbar",1),t.TgZ(3,"ion-buttons",2),t.TgZ(4,"ion-button",3),t.NdJ("click",function(){return i.dismissModal()}),t._UZ(5,"ion-icon",4),t.qZA(),t.qZA(),t.TgZ(6,"ion-title",5),t._uU(7),t.qZA(),t.qZA(),t.qZA(),t.TgZ(8,"ion-content",6),t.TgZ(9,"section",7),t.TgZ(10,"ion-list",8),t.TgZ(11,"ion-item",9),t.TgZ(12,"ion-label",10),t._uU(13,"Nombre"),t.TgZ(14,"ion-text",11),t._uU(15,"*"),t.qZA(),t.qZA(),t._UZ(16,"ion-input",12,13),t.qZA(),t.TgZ(18,"div",14),t.YNc(19,L,4,0,"div",15),t.qZA(),t.TgZ(20,"ion-item",9),t.TgZ(21,"ion-label"),t._uU(22,"Estado"),t.TgZ(23,"ion-text",11),t._uU(24,"*"),t.qZA(),t.qZA(),t.TgZ(25,"ion-select",16,13),t.ALo(27,"translate"),t.TgZ(28,"ion-select-option",17),t._uU(29,"Activo"),t.qZA(),t.TgZ(30,"ion-select-option",18),t._uU(31,"Inactivo"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(32,"div",14),t.YNc(33,w,4,0,"div",15),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(34,"ion-footer"),t.TgZ(35,"ion-row",19),t.TgZ(36,"ion-col"),t.TgZ(37,"ion-button",20),t.NdJ("click",function(){return i.submitForm()}),t._uU(38,"CREAR"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&e&&(t.Q6J("formGroup",i.Form),t.xp6(7),t.Oqu(i.tituloxx),t.xp6(12),t.Q6J("ngIf",i.Form.get("nombre").hasError("required")&&(i.Form.get("nombre").dirty||i.Form.get("nombre").touched)),t.xp6(6),t.s9C("placeholder",t.lcZ(27,6,"SELECTVALORM")),t.xp6(8),t.Q6J("ngIf",i.Form.get("estado").hasError("required")&&(i.Form.get("estado").dirty||i.Form.get("estado").touched)),t.xp6(4),t.Q6J("disabled",!i.Form.valid))},directives:[u._Y,u.JL,u.sg,o.Gu,o.sr,o.Sm,o.YG,o.gu,o.wd,o.W2,o.q_,o.Ie,o.Q$,o.yW,o.pK,o.j9,u.JJ,u.u,u.Q7,p.O5,o.t9,o.QI,o.n0,o.fr,o.Nd,o.wI],pipes:[g.X$],styles:["[_nghost-%COMP%]{--page-margin: var(--app-fair-margin);--page-background: var(--app-background);--page-background-shade: var(--app-background-shade);--page-tags-gutter: 5px}"]}),a})();var U=l(26806);function I(a,d){if(1&a){const e=t.EpF();t.TgZ(0,"ion-button",32),t.NdJ("click",function(){return t.CHM(e),t.oxw().changeToList()}),t._UZ(1,"ion-icon",33),t.qZA()}}function O(a,d){if(1&a){const e=t.EpF();t.TgZ(0,"ion-button",32),t.NdJ("click",function(){return t.CHM(e),t.oxw().changeToGrid()}),t._UZ(1,"ion-icon",34),t.qZA()}}function F(a,d){if(1&a&&(t.TgZ(0,"ion-label"),t._uU(1),t.ALo(2,"translate"),t.ALo(3,"translate"),t.qZA()),2&a){const e=t.oxw();t.xp6(1),t.lnq("",t.lcZ(2,3,"NOREGISTROSM")," ",e.itemsList.length," ",t.lcZ(3,5,"NOREGISTROSM5"),"")}}function E(a,d){1&a&&(t.TgZ(0,"ion-item",36),t.TgZ(1,"ion-label",37),t._UZ(2,"skeleton-element"),t._UZ(3,"skeleton-element"),t._UZ(4,"skeleton-element",38),t.qZA(),t.qZA())}const S=function(){return[0,1,2,3,4,5,6]};function N(a,d){1&a&&(t.TgZ(0,"ion-list"),t.YNc(1,E,5,0,"ion-item",35),t.qZA()),2&a&&(t.xp6(1),t.Q6J("ngForOf",t.DdM(1,S)))}function R(a,d){if(1&a){const e=t.EpF();t.TgZ(0,"ion-item",40),t.TgZ(1,"ion-grid"),t.TgZ(2,"ion-row"),t.TgZ(3,"ion-col",41),t.NdJ("click",function(){const s=t.CHM(e).$implicit;return t.oxw(2).updateRecord(s)}),t._UZ(4,"ion-icon",42),t.TgZ(5,"ion-label",37),t.TgZ(6,"ion-note",43),t._uU(7),t.qZA(),t._UZ(8,"br"),t.TgZ(9,"p"),t.TgZ(10,"strong"),t._uU(11,"Nombre:"),t.qZA(),t._uU(12),t._UZ(13,"br"),t.qZA(),t.TgZ(14,"ion-badge",44),t._uU(15),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(16,"ion-row"),t.TgZ(17,"ion-col",17),t.TgZ(18,"ion-toolbar",45),t.TgZ(19,"ion-buttons",46),t.TgZ(20,"ion-button",5),t.NdJ("click",function(){const s=t.CHM(e).$implicit;return t.oxw(2).deleteRecord(s)}),t.ALo(21,"translate"),t._UZ(22,"ion-icon",47),t.qZA(),t.qZA(),t.TgZ(23,"ion-buttons",48),t.TgZ(24,"ion-button",49),t.NdJ("click",function(){const s=t.CHM(e).$implicit;return t.oxw(2).otrasop(s)}),t.ALo(25,"translate"),t._UZ(26,"ion-icon",50),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()}if(2&a){const e=d.$implicit,i=d.index;t.xp6(7),t.hij("No. ",i+1,""),t.xp6(5),t.hij(" ",e.nombre," "),t.xp6(3),t.Oqu(e.estado),t.xp6(5),t.s9C("title",t.lcZ(21,5,"ELIMINARM")),t.xp6(4),t.s9C("title",t.lcZ(25,7,"MENUM"))}}function J(a,d){if(1&a&&(t.TgZ(0,"ion-list"),t.YNc(1,R,27,9,"ion-item",39),t.qZA()),2&a){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",e.itemsList)("ngForTrackBy",e.trackItems)}}function G(a,d){if(1&a){const e=t.EpF();t.TgZ(0,"ion-col",52),t.TgZ(1,"ion-card"),t.TgZ(2,"ion-row",53),t.TgZ(3,"ion-col"),t.TgZ(4,"span",54),t._uU(5,"No."),t.qZA(),t.TgZ(6,"span",55),t._uU(7),t.qZA(),t.qZA(),t.TgZ(8,"ion-col"),t.TgZ(9,"span",54),t._uU(10),t.qZA(),t.qZA(),t.qZA(),t.TgZ(11,"ion-item",40),t._UZ(12,"ion-icon",42),t.TgZ(13,"ion-label",56),t.NdJ("click",function(){const s=t.CHM(e).$implicit;return t.oxw(2).updateRecord(s)}),t.TgZ(14,"p"),t.TgZ(15,"strong"),t._uU(16,"Nombre:"),t.qZA(),t._uU(17),t._UZ(18,"br"),t.qZA(),t.qZA(),t.qZA(),t._UZ(19,"ion-card-content"),t.TgZ(20,"ion-row",57),t.TgZ(21,"ion-col",17),t.TgZ(22,"ion-toolbar",45),t.TgZ(23,"ion-buttons",46),t.TgZ(24,"ion-button",5),t.NdJ("click",function(){const s=t.CHM(e).$implicit;return t.oxw(2).deleteRecord(s)}),t.ALo(25,"translate"),t._UZ(26,"ion-icon",47),t.qZA(),t.qZA(),t.TgZ(27,"ion-buttons",48),t.TgZ(28,"ion-button",49),t.NdJ("click",function(){const s=t.CHM(e).$implicit;return t.oxw(2).otrasop(s)}),t.ALo(29,"translate"),t._UZ(30,"ion-icon",50),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()}if(2&a){const e=d.$implicit,i=d.index;t.xp6(7),t.hij("",i+1," "),t.xp6(3),t.hij("",e.estado," "),t.xp6(7),t.hij(" ",e.nombre," "),t.xp6(7),t.s9C("title",t.lcZ(25,5,"ELIMINARM")),t.xp6(4),t.s9C("title",t.lcZ(29,7,"MENUM"))}}function D(a,d){if(1&a&&(t.TgZ(0,"ion-grid"),t.TgZ(1,"ion-row"),t.YNc(2,G,31,9,"ion-col",51),t.qZA(),t.qZA()),2&a){const e=t.oxw();t.xp6(2),t.Q6J("ngForOf",e.itemsList)("ngForTrackBy",e.trackItems)}}function Q(a,d){1&a&&(t.TgZ(0,"h3",58),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&a&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"NODATOS")," "))}let Y=(()=>{class a{constructor(e,i,r,s,m,y){this.routerOutlet=e,this.router=i,this.authenticationService=r,this.alertController=s,this.translateService=m,this.modalController=y,this.showAgeFilter=!1,this.showmenu=!1,this.items=[],this.variables=[],this.userinfo=[],this.viewType="grid",this.tituloxx="",this.efecto=0,this.seguro="",this.msg="",this.currentSegment="Todos",this.searchSubject=new c.t(1),this.apifoto=this.authenticationService.getapifoto()}changeToList(){this.viewType="list"}changeToGrid(){this.viewType="grid"}ngOnInit(){this.variables=this.router.getCurrentNavigation().extras.state.variables,this.idllave=this.router.getCurrentNavigation().extras.state.idllave,this.userinfo=this.authenticationService.getcopiauser(),this.tituloxx=this.router.getCurrentNavigation().extras.state.title,this.searchQuery="",this.translateService.get("SEGUROM").subscribe(e=>{this.seguro=e}),this.translateService.get("MSGM").subscribe(e=>{this.msg=e}),this.rangeForm=new u.cw({dual:new u.NI({lower:1,upper:100})}),this.currentSegment="todos",this.pideregistros(this.currentSegment)}filterContacts(e){let i=e.detail.value;this.currentSegment=i,this.pideregistros(i)}pideregistros0(){this.pideregistros(this.currentSegment)}pideregistros(e){this.itemsList=[],this.efecto=0,this.authenticationService.getReg("todos/"+e+"/"+this.userinfo[0].idempresa._id+"/"+this.idllave,"tarifas",0).then(i=>{this.efecto=1,this.items=i,this.itemsList=this.items},i=>{this.authenticationService.presentAlert(i.error,this.msg,"")})}trackItems(e,i){return i.id}searchList(){this.searchSubject.next({lower:this.rangeForm.controls.dual.value.lower,upper:this.rangeForm.controls.dual.value.upper,query:this.searchQuery}),this.itemsList=this.filterList(this.items,this.searchQuery&&null!==this.searchQuery?this.searchQuery:"")}filterList(e,i){return e.filter(r=>r.nombre.toLowerCase().includes(i.toLowerCase()))}otrasop(e){return(0,h.mG)(this,void 0,void 0,function*(){yield(yield this.alertController.create({cssClass:"my-custom-class",header:"Seleccione Opci\xf3n",inputs:[{name:"detalle",type:"radio",label:"Detalle de tarifas",checked:!0,value:"/dtarifaListPage\xb0Tarifas ->"+e.nombre}],buttons:[{text:"Cancel",role:"cancel",cssClass:"secondary",handler:r=>{}},{text:"Ok",handler:r=>{var s=r.split("\xb0");this.router.navigate([s[0]],{state:{variables:this.variables,user:null,idllave:e._id,title:s[1]}})}}]})).present()})}deleteRecord(e){return(0,h.mG)(this,void 0,void 0,function*(){yield(yield this.alertController.create({header:this.seguro,message:"",buttons:[{text:"No",cssClass:"secondary",handler:r=>{}},{text:"Si",handler:()=>{this.authenticationService.deleteReg(e._id+"/"+this.userinfo[0].email+"/"+this.userinfo[0].idempresa._id+"/na","tarifas").then(s=>{this.pideregistros(this.currentSegment)},s=>{this.authenticationService.presentAlert(s.error,this.msg,"")})}}]})).present()})}updateRecord(e){return(0,h.mG)(this,void 0,void 0,function*(){const i=yield this.modalController.create({component:P,swipeToClose:!0,presentingElement:this.routerOutlet.nativeEl,componentProps:{variables:this.variables,record:e,userinfo:this.userinfo,idllave:this.idllave,title:this.tituloxx},cssClass:"modal-fullscreen"});return i.onWillDismiss().then(r=>{"close"!==r.data&&this.pideregistros(this.currentSegment)}),yield i.present()})}addRecord(){return(0,h.mG)(this,void 0,void 0,function*(){const e=yield this.modalController.create({component:P,swipeToClose:!1,backdropDismiss:!1,animated:!0,presentingElement:yield this.modalController.getTop(),componentProps:{variables:this.variables,record:null,userinfo:this.userinfo,idllave:this.idllave,title:this.tituloxx},cssClass:"modal-fullscreen"});return e.onWillDismiss().then(i=>{"close"!==i.data&&this.pideregistros(this.currentSegment)}),yield e.present()})}loadData(e){setTimeout(()=>{e.target.complete(),1e3===this.items.length&&(e.target.disabled=!0)},500)}}return a.\u0275fac=function(e){return new(e||a)(t.Y36(o.jP),t.Y36(_.F0),t.Y36(A.$),t.Y36(o.Br),t.Y36(g.sK),t.Y36(o.IN))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-tarifa-list"]],viewQuery:function(e,i){if(1&e&&t.Gf(o.ju,5),2&e){let r;t.iGM(r=t.CRH())&&(i.infiniteScroll=r.first)}},decls:55,vars:35,consts:[["color","primary"],["slot","start"],["defaultHref","EmpresaListPage"],["size","small"],["collapse","true","slot","end"],[3,"title","click"],["slot","icon-only","name","add"],["slot","icon-only","name","refresh-circle-outline"],[3,"click",4,"ngIf"],[1,"filters-toolbar"],["align-items-center","",1,"searchbar-row"],["animated","",3,"ngModel","placeholder","ngModelChange","ionChange"],[1,"call-to-action-col",3,"hidden"],["fill","clear","color","secondary",1,"filters-btn",3,"title","click"],["slot","icon-only","name","options"],[3,"formGroup","hidden"],[1,"range-item-row"],["size","12"],[1,"range-header"],[1,"range-value"],[1,"range-label"],["formControlName","dual","color","secondary","pin","true","dualKnobs","true","min","1","max","100","step","1","debounce","400",1,"range-control",3,"ionChange"],[1,"user-friends-content"],["sticky",""],[4,"ngIf"],["value","todos",3,"ionChange"],["value","todos","checked",""],["value","Activo"],["value","Inactivo"],["class","empty-list-message",4,"ngIf"],["threshold","100px",3,"ionInfinite"],["loadingSpinner","bubbles","loadingText","Espere un momento..."],[3,"click"],["slot","icon-only","name","grid"],["slot","icon-only","name","list"],["lines","none",4,"ngFor","ngForOf"],["lines","none"],[1,"ion-text-wrap"],["width","67%"],["class","item md in-list ion-activatable ion-focusable item-label hydrated",4,"ngFor","ngForOf","ngForTrackBy"],[1,"item","md","in-list","ion-activatable","ion-focusable","item-label","hydrated"],["size","12",3,"click"],["name","server-outline","slot","start"],["slot","end"],["color","medium"],["color","transparent"],["slot","secondary"],["slot","icon-only","name","trash-outline"],["slot","primary"],["color","secondary",3,"title","click"],["slot","icon-only","ios","ellipsis-horizontal","md","ellipsis-vertical"],["size-lg","6","size-sm","6","size","12",4,"ngFor","ngForOf","ngForTrackBy"],["size-lg","6","size-sm","6","size","12"],[1,"user-stats-wrapper","user-details-wrapper"],[1,"user-stat-value"],[1,"user-stat-name"],[1,"ion-text-wrap",3,"click"],["no-padding",""],[1,"empty-list-message"]],template:function(e,i){1&e&&(t.TgZ(0,"ion-header"),t.TgZ(1,"ion-toolbar",0),t.TgZ(2,"ion-buttons",1),t._UZ(3,"ion-back-button",2),t.qZA(),t.TgZ(4,"ion-title",3),t._uU(5),t.qZA(),t.TgZ(6,"ion-buttons",4),t.TgZ(7,"ion-button",5),t.NdJ("click",function(){return i.addRecord()}),t.ALo(8,"translate"),t._UZ(9,"ion-icon",6),t.qZA(),t.TgZ(10,"ion-button",5),t.NdJ("click",function(){return i.pideregistros0()}),t.ALo(11,"translate"),t._UZ(12,"ion-icon",7),t.qZA(),t.YNc(13,I,2,0,"ion-button",8),t.YNc(14,O,2,0,"ion-button",8),t.qZA(),t.qZA(),t.TgZ(15,"ion-toolbar",9),t.TgZ(16,"ion-row",10),t.TgZ(17,"ion-col"),t.TgZ(18,"ion-searchbar",11),t.NdJ("ngModelChange",function(s){return i.searchQuery=s})("ionChange",function(){return i.searchList()}),t.ALo(19,"translate"),t.qZA(),t.qZA(),t.TgZ(20,"ion-col",12),t.TgZ(21,"ion-button",13),t.NdJ("click",function(){return i.showAgeFilter=!i.showAgeFilter}),t.ALo(22,"translate"),t._UZ(23,"ion-icon",14),t.qZA(),t.qZA(),t.qZA(),t.TgZ(24,"form",15),t.TgZ(25,"ion-row",16),t.TgZ(26,"ion-col",17),t.TgZ(27,"div",18),t.TgZ(28,"span",19),t._uU(29),t.qZA(),t.TgZ(30,"span",20),t._uU(31,"Filter by age"),t.qZA(),t.TgZ(32,"span",19),t._uU(33),t.qZA(),t.qZA(),t.qZA(),t.TgZ(34,"ion-col",17),t.TgZ(35,"ion-range",21),t.NdJ("ionChange",function(){return i.searchList()}),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(36,"ion-content",22),t.TgZ(37,"ion-item-divider",23),t.YNc(38,F,4,7,"ion-label",24),t.qZA(),t.TgZ(39,"ion-segment",25),t.NdJ("ionChange",function(s){return i.filterContacts(s)}),t.TgZ(40,"ion-segment-button",26),t._uU(41),t.ALo(42,"translate"),t.qZA(),t.TgZ(43,"ion-segment-button",27),t._uU(44),t.ALo(45,"translate"),t.qZA(),t.TgZ(46,"ion-segment-button",28),t._uU(47),t.ALo(48,"translate"),t.qZA(),t.qZA(),t.YNc(49,N,2,2,"ion-list",24),t.YNc(50,J,2,2,"ion-list",24),t.YNc(51,D,3,2,"ion-grid",24),t.YNc(52,Q,3,3,"h3",29),t.TgZ(53,"ion-infinite-scroll",30),t.NdJ("ionInfinite",function(s){return i.loadData(s)}),t._UZ(54,"ion-infinite-scroll-content",31),t.qZA(),t.qZA()),2&e&&(t.xp6(5),t.hij(" ",i.tituloxx," "),t.xp6(2),t.MGl("title"," ",t.lcZ(8,21,"AGREGARM"),""),t.xp6(3),t.MGl("title"," ",t.lcZ(11,23,"REFRESCARM"),""),t.xp6(3),t.Q6J("ngIf","grid"===i.viewType),t.xp6(1),t.Q6J("ngIf","list"===i.viewType),t.xp6(4),t.s9C("placeholder",t.lcZ(19,25,"BUSCARM")),t.Q6J("ngModel",i.searchQuery),t.xp6(2),t.Q6J("hidden",!i.showAgeFilter),t.xp6(1),t.MGl("title"," ",t.lcZ(22,27,"FILTROM"),""),t.xp6(3),t.Q6J("formGroup",i.rangeForm)("hidden",!i.showAgeFilter),t.xp6(5),t.Oqu(i.rangeForm.controls.dual.value.lower),t.xp6(4),t.Oqu(i.rangeForm.controls.dual.value.upper),t.xp6(5),t.Q6J("ngIf",(null==i.itemsList?null:i.itemsList.length)>0),t.xp6(3),t.hij(" ",t.lcZ(42,29,"TODOSM")," "),t.xp6(3),t.hij(" ",t.lcZ(45,31,"ACTIVOSM")," "),t.xp6(3),t.hij(" ",t.lcZ(48,33,"INACTIVOSM")," "),t.xp6(2),t.Q6J("ngIf",0===i.efecto),t.xp6(1),t.Q6J("ngIf",(null==i.itemsList?null:i.itemsList.length)>0&&"list"===i.viewType),t.xp6(1),t.Q6J("ngIf",(null==i.itemsList?null:i.itemsList.length)>0&&"grid"===i.viewType),t.xp6(1),t.Q6J("ngIf",0===(null==i.itemsList?null:i.itemsList.length)))},directives:[o.Gu,o.sr,o.Sm,o.oU,o.cs,o.wd,o.YG,o.gu,p.O5,o.Nd,o.wI,o.VI,o.j9,u.JJ,u.On,u._Y,u.JL,u.sg,o.I_,o.QI,u.u,o.W2,o.rH,o.cJ,o.GO,o.ju,o.MB,o.Q$,o.q_,p.sg,o.Ie,U.B,o.jY,o.uN,o.yp,o.PM,o.FN],pipes:[g.X$],styles:["[_nghost-%COMP%]{--page-margin: var(--app-narrow-margin);--page-border-radius: var(--app-fair-radius);--page-segment-background: var(--app-background);--page-segment-indicator-height: 2px}ion-item-divider[_ngcontent-%COMP%]{--background: var(--ion-color-light);--padding-start: var(--page-margin)}[_nghost-%COMP%]{--page-margin: var(--app-fair-margin);--page-background: var(--app-background);--page-background-shade: var(--app-background-shade);--page-tags-gutter: 5px}"]}),a})(),B=(()=>{class a{}return a.\u0275fac=function(e){return new(e||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[[p.ez,o.Pc,n.K,u.u5,u.UX,T.YL,_.Bz.forChild([{path:"",component:Y}]),g.aw.forChild()]]}),a})()},63814:(C,b,l)=>{l.d(b,{B:()=>T});var o=l(70655),_=l(47423),p=l(96090),n=l(5e3),g=l(23349);const u=["search"];let T=(()=>{class h{constructor(c,f,Z){this.modalController=c,this.ngZone=f,this.navParams=Z,this.title="AGM project",this.zoom=16}dismissModal(){this.modalController.dismiss("close")}dadireccion(){this.modalController.dismiss({direccion:this.address,la:this.latitude,lo:this.longitude})}ngOnInit(){this.uubx=this.navParams.get("uubx")}loadMap(){}clearWatch(){null!=this.watchId&&p.b.clearWatch({id:this.watchId})}setCurrentLocationa33(){if(_.dV.isPluginAvailable("Geolocation"))try{this.watchId=p.b.watchPosition({timeout:1e3,enableHighAccuracy:!0,maximumAge:1e3},(c,f)=>{c&&(this.latitude=c.coords.latitude,this.longitude=c.coords.longitude)})}catch(c){console.error(c)}}setCurrentLocationa(){try{this.watchId=p.b.watchPosition({timeout:1e3,enableHighAccuracy:!0,maximumAge:1e3},(c,f)=>{c&&(this.latitude=c.coords.latitude,this.longitude=c.coords.longitude,this.getAddress(this.latitude,this.longitude))})}catch(c){console.error(c)}}setCurrentLocation2a(){if(_.dV.isPluginAvailable("Geolocation"))try{this.watchId=p.b.watchPosition({timeout:1e3,enableHighAccuracy:!0,maximumAge:1e3},(c,f)=>{this.latitude=Number(this.uubx.substring(this.uubx.indexOf("{")+1,this.uubx.indexOf("\xb0"))),this.longitude=Number(this.uubx.substring(this.uubx.indexOf("\xb0")+1,this.uubx.indexOf("}"))),0!==this.latitude&&this.latitude&&this.getAddress(this.latitude,this.longitude)})}catch(c){console.error(c)}}markerDragEnd(c){0!==this.latitude&&this.latitude&&(this.latitude=c.coords.lat,this.longitude=c.coords.lng,this.getAddress(this.latitude,this.longitude))}getAddress(c,f){this.geoCoder.geocode({location:{lat:c,lng:f}},(Z,v)=>{"OK"===v?Z[0]?this.address=Z[0].formatted_address:window.alert("No results found"):window.alert("Geocoder failed due to: "+v)})}closeModal(){return(0,o.mG)(this,void 0,void 0,function*(){this.modalController.dismiss("close")})}}return h.\u0275fac=function(c){return new(c||h)(n.Y36(g.IN),n.Y36(n.R0b),n.Y36(g.X1))},h.\u0275cmp=n.Xpm({type:h,selectors:[["app-my-modal"]],viewQuery:function(c,f){if(1&c&&n.Gf(u,5),2&c){let Z;n.iGM(Z=n.CRH())&&(f.searchElementRef=Z.first)}},decls:19,vars:6,consts:[[3,"translucent"],["color","primary"],["shape","round","color","dark",3,"click"],["slot","start","name","locate"],["collapse","true","slot","end"],[3,"click"],["slot","icon-only","name","close"],["size","small"],[1,"ion-padding",3,"fullscreen"],["id","book-search-input","role","search"],["type","text","placeholder","Ingrese direcci\xf3n","autocorrect","off","autocapitalize","off","spellcheck","off","type","text",1,"book-search-input","native-input","sc-ion-input-ios",3,"keydown.enter"],["search",""],["type","submit","expand","block",1,"login-btn",3,"click"]],template:function(c,f){1&c&&(n.TgZ(0,"ion-header",0),n.TgZ(1,"ion-toolbar",1),n.TgZ(2,"ion-button",2),n.NdJ("click",function(){return f.loadMap()}),n._UZ(3,"ion-icon",3),n._uU(4," Ubicaci\xf3n "),n.qZA(),n.TgZ(5,"ion-buttons",4),n.TgZ(6,"ion-button",5),n.NdJ("click",function(){return f.closeModal()}),n._UZ(7,"ion-icon",6),n.qZA(),n.qZA(),n.TgZ(8,"ion-title",7),n._uU(9),n.qZA(),n.qZA(),n.qZA(),n.TgZ(10,"ion-content",8),n._uU(11),n.TgZ(12,"div",9),n.TgZ(13,"input",10,11),n.NdJ("keydown.enter",function(v){return v.preventDefault()}),n.qZA(),n.qZA(),n.TgZ(15,"h5"),n._uU(16),n.qZA(),n.TgZ(17,"ion-button",12),n.NdJ("click",function(){return f.dadireccion()}),n._uU(18,"Seleccionar"),n.qZA(),n.qZA()),2&c&&(n.Q6J("translucent",!0),n.xp6(9),n.Oqu(f.tituloxx),n.xp6(1),n.Q6J("fullscreen",!0),n.xp6(1),n.AsE("\n",f.latitude,", ",f.longitude," "),n.xp6(5),n.hij("Direcci\xf3n: ",f.address,""))},directives:[g.Gu,g.sr,g.YG,g.gu,g.Sm,g.wd,g.W2],styles:[".book-search-input[_ngcontent-%COMP%]{padding:6px;background:0 0;transition:top .5s ease;background:#bdbaba;border-bottom:1px solid rgba(0,0,0,.07);border-top:1px solid rgba(0,0,0,.07);margin-bottom:10px;margin-top:-1px;color:#fff;width:100%}"]}),h})()},26806:(C,b,l)=>{l.d(b,{B:()=>n});var o=l(5e3),_=l(69808);const p=function(g,u){return{"no-animated":g,inline:u}};let n=(()=>{class g{constructor(){this.width="100%",this.height="16px",this.borderRadius="0",this.rounded=!1,this.noAnimated=!1,this.inline=!1,this.styles={}}ngOnInit(){this.styles={width:this.width,height:this.height,borderRadius:this.borderRadius},this.rounded&&(this.styles.borderRadius="999em")}}return g.\u0275fac=function(T){return new(T||g)},g.\u0275cmp=o.Xpm({type:g,selectors:[["skeleton-element"]],inputs:{width:"width",height:"height",borderRadius:"borderRadius",rounded:"rounded",noAnimated:"noAnimated",inline:"inline"},decls:1,vars:5,consts:[[3,"ngClass","ngStyle"]],template:function(T,h){1&T&&o._UZ(0,"div",0),2&T&&o.Q6J("ngClass",o.WLB(2,p,h.noAnimated,h.inline))("ngStyle",h.styles)},directives:[_.mk,_.PC],styles:["[_nghost-%COMP%]{display:block}[inline][_nghost-%COMP%]{display:inline-block}[_nghost-%COMP%]   .inline[_ngcontent-%COMP%]{display:inline-block}[_nghost-%COMP%]   .no-animated[_ngcontent-%COMP%]{-webkit-animation:none!important;animation:none!important;background:rgba(130,130,130,.2)}.animated-background[_ngcontent-%COMP%], [_nghost-%COMP%]   div[_ngcontent-%COMP%]{-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-name:placeHolderShimmer;animation-name:placeHolderShimmer;-webkit-animation-timing-function:linear;animation-timing-function:linear;background:rgba(130,130,130,.2);background:linear-gradient(to right,rgba(130,130,130,.2) 8%,rgba(130,130,130,.3) 18%,rgba(130,130,130,.2) 33%);background-size:800px 100px;position:relative}@-webkit-keyframes placeHolderShimmer{0%{background-position:-468px 0}to{background-position:468px 0}}@keyframes placeHolderShimmer{0%{background-position:-468px 0}to{background-position:468px 0}}"]}),g})()}}]);