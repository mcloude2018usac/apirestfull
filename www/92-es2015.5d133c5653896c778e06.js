(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{A0kb:function(n,l,e){"use strict";e.d(l,"a",(function(){return t}));class t{constructor(){this.show=!1}toggleShow(){this.show=!this.show,this.input.type=this.show?"text":"password"}}},LHPa:function(n,l,e){"use strict";e.r(l),e.d(l,"LoginPageModuleNgFactory",(function(){return z}));var t=e("8Y7J"),o=e("mrSG"),i=e("s7LF"),u=e("ZtEv");class a{constructor(n){this.popoverCtrl=n}support(){this.popoverCtrl.dismiss()}close(n){this.popoverCtrl.dismiss({data:n})}}class r{constructor(n,l,e,t,o,u,a){this.authenticationService=n,this.translate=l,this.popoverCtrl=e,this.router=t,this.menu=o,this.alertController=u,this.storage=a,this.cintia="/api/image2s/5f146aa48caa41db981e6830",this.foto1="/api/image2s/5f146aa48caa41db981e6830",this.foto2="/api/image2s/5f146aa48caa41db981e6830",this.apifoto=this.authenticationService.getapifoto(),this.loginForm=new i.g({email:new i.e("",i.u.compose([i.u.required,i.u.pattern("^[a-zA-Z0-9_.+-@][a-zA-Z0-9-@]+.[a-zA-Z0-9-.@]+$")])),password:new i.e("",i.u.compose([i.u.required,i.u.minLength(5)]))}),this.APP=this.authenticationService.getempresa(),this.authenticationService.getRegsintok(this.APP+"/todos","empresas",0).then(n=>{let l=[];l=n,this.foto1=l[0].foto1,this.foto2=l[0].foto2,this.nombre1=l[0].nombre,this.siregister=l[0].siregister,this.clasica1=l[0].pagina10},n=>{this.authenticationService.presentAlert(n.error,this.authenticationService.datraduccion("precaucion"),"")})}dohuella(){return Object(o.a)(this,void 0,void 0,(function*(){}))}setLanguage(n){n?(this.translate.setDefaultLang(n),this.translate.use(n),this.authenticationService.setlenguaje(n)):(this.translate.setDefaultLang("es"),this.translate.use("es"),this.authenticationService.setlenguaje("es"))}ngOnInit(){this.menu.enable(!1),this.router.getCurrentNavigation().extras.state&&this.loginForm.get("email").setValue(this.router.getCurrentNavigation().extras.state.email),this.router.getCurrentNavigation().extras.state&&this.loginForm.get("password").setValue(this.router.getCurrentNavigation().extras.state.password)}configurahuella(){return Object(o.a)(this,void 0,void 0,(function*(){var n=this.authenticationService.datraduccion("ingreseusuclaveuella");const l=yield this.alertController.create({cssClass:"my-custom-class",header:n,inputs:[{name:"name1",type:"text",value:"mario.morales@mcloude.com",placeholder:this.authenticationService.datraduccion("ingrese_correo")},{name:"name2",type:"text",value:"admin123",placeholder:this.authenticationService.datraduccion("ingrese_clave")}],buttons:[{text:"Cancelar",role:"cancel",cssClass:"secondary",handler:()=>{}},{text:"Aceptar",handler:n=>{}}]});yield l.present()}))}presentPopover(n){return Object(o.a)(this,void 0,void 0,(function*(){const l=yield this.popoverCtrl.create({component:a,event:n});l.onWillDismiss().then(n=>{"Reinico de contrase\xf1a"===n.data.data&&this.router.navigate(["/auth/forgot-password"]),"myhuellaadd"===n.data.data&&this.configurahuella(),"botonemergencia"===n.data.data&&this.authenticationService.presentAlert(this.authenticationService.datraduccion("exito"),this.authenticationService.datraduccion("numero_emergencia"),"")}),yield l.present()}))}doLogin0(){this.doLogin()}doLogin(){this.loading=!0;const n={idempresa:this.APP,email:this.loginForm.get("email").value.trim(),password:this.loginForm.get("password").value.trim(),bitacora:{idempresa:this.APP,idafiliado:"",email:this.loginForm.get("email").value.trim(),permiso:"Ingreso",accion:"Ingreso al sistema"}};this.storage.set("username",this.loginForm.get("email").value.trim()),this.authenticationService.createAPITOKEN(n,"/api/auth/login").then(n=>{const l=n;if("-1"===l.user._id)this.loading=!1,this.authenticationService.presentAlert(l.user.role,this.authenticationService.datraduccion("precaucion"),"");else if("-11"===l.user._id)this.loading=!1,this.authenticationService.presentAlert(l.user.role,this.authenticationService.datraduccion("precaucion"),"");else if("0"===l.user.estadoemail)this.loading=!1,this.authenticationService.presentAlert(this.authenticationService.datraduccion("ingcorreocofsus"),this.authenticationService.datraduccion("precaucion"),"");else{var e;this.loading=!1,this.setLanguage((e=n).user.lenguaje&&"Ingles"===e.user.lenguaje?"en":"es")}},n=>{this.authenticationService.presentToast(this.authenticationService.datraduccion("precaucion"),this.authenticationService.datraduccion("cerifique_internet"))})}goToForgotPassword(){}doFacebookLogin(){}doGoogleLogin(){}doTwitterLogin(){}}class c{}var d=e("pMnS"),s=e("MKJQ"),g=e("sZkV"),m=e("TSSN"),p=e("iInd"),f=e("SVse"),h=e("lvGs"),v=e("A0kb"),C=e("xgBC"),b=t["\u0275crt"]({encapsulation:0,styles:[["[_nghost-%COMP%]{--page-margin:var(--app-broad-margin);--page-background:var(--app-background-shade)}.login-content[_ngcontent-%COMP%]{--background:var(--page-background);--padding-start:var(--page-margin);--padding-end:var(--page-margin);--padding-top:var(--page-margin);--padding-bottom:var(--page-margin)}.login-content[_ngcontent-%COMP%]   div#logo[_ngcontent-%COMP%]{margin-top:25px;margin-bottom:12px}.login-content[_ngcontent-%COMP%]   .ion-iconx[_ngcontent-%COMP%]{margin-top:16px;font-size:128px}.login-content[_ngcontent-%COMP%]   .auth-title[_ngcontent-%COMP%]{color:var(--ion-color-dark);font-weight:700;margin-top:calc(var(--page-margin)/2);margin-bottom:calc(var(--page-margin)*1.5);letter-spacing:.6px;text-align:center}.login-content[_ngcontent-%COMP%]   .inputs-list[_ngcontent-%COMP%]{--ion-item-background:var(--page-background)}.login-content[_ngcontent-%COMP%]   .inputs-list[_ngcontent-%COMP%]   .input-item[_ngcontent-%COMP%]{--padding-start:0px;--padding-end:0px;--inner-padding-end:0px}.login-content[_ngcontent-%COMP%]   .login-btn[_ngcontent-%COMP%]{margin:calc(var(--page-margin)/2) 0}.login-content[_ngcontent-%COMP%]   .other-auth-options-row[_ngcontent-%COMP%]{justify-content:space-between;align-items:center}.login-content[_ngcontent-%COMP%]   .other-auth-options-row[_ngcontent-%COMP%]   .forgot-btn[_ngcontent-%COMP%]{--color:var(--ion-color-medium);margin:0}.login-content[_ngcontent-%COMP%]   .other-auth-options-row[_ngcontent-%COMP%]   .forgot-btn[_ngcontent-%COMP%]:focus{outline:none}.login-content[_ngcontent-%COMP%]   .other-auth-options-row[_ngcontent-%COMP%]   .signup-btn[_ngcontent-%COMP%]{--color:var(--ion-color-secondary);margin:0}.login-content[_ngcontent-%COMP%]   .other-auth-options-row[_ngcontent-%COMP%]   .signup-btn[_ngcontent-%COMP%]:focus{outline:none}.login-content[_ngcontent-%COMP%]   .social-auth-options[_ngcontent-%COMP%]   .options-divider[_ngcontent-%COMP%]{color:var(--ion-color-medium);margin:var(--page-margin) 0;text-align:center}.login-content[_ngcontent-%COMP%]   .social-auth-options[_ngcontent-%COMP%]   .social-auth-btn[_ngcontent-%COMP%]{margin:0}.login-content[_ngcontent-%COMP%]   .social-auth-options[_ngcontent-%COMP%]   .social-auth-btn[_ngcontent-%COMP%]:not(:first-child){margin-top:var(--page-margin)}"]],data:{}});function R(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,0,"img",[["style","display:block; margin:auto;width:280px"]],[[8,"src",4]],null,null,null,null))],null,(function(n,l){var e=l.component;n(l,0,0,e.apifoto+e.foto1)}))}function D(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,4,"div",[["class","ion-text-center"]],null,null,null,null,null)),(n()(),t["\u0275eld"](1,0,null,null,1,"ion-icon",[["class","ion-iconx"],["color","primary"],["name","cloud-circle-outline"]],null,null,null,s.Db,s.v)),t["\u0275did"](2,49152,null,0,g.D,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{color:[0,"color"],name:[1,"name"]},null),(n()(),t["\u0275eld"](3,0,null,null,1,"h1",[],null,null,null,null,null)),(n()(),t["\u0275ted"](4,null,["",""]))],(function(n,l){n(l,2,0,"primary","cloud-circle-outline")}),(function(n,l){n(l,4,0,l.component.nombre1)}))}function P(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,2,"h2",[["class","auth-title"]],null,null,null,null,null)),(n()(),t["\u0275ted"](1,null,[" "," "])),t["\u0275pid"](131072,m.k,[m.l,t.ChangeDetectorRef])],null,(function(n,l){n(l,1,0,t["\u0275unv"](l,1,0,t["\u0275nov"](l,2).transform("bienvenido")))}))}function O(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,5,"div",[["class","error-message"]],null,null,null,null,null)),(n()(),t["\u0275eld"](1,0,null,null,1,"ion-icon",[["name","information-circle-outline"]],null,null,null,s.Db,s.v)),t["\u0275did"](2,49152,null,0,g.D,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{name:[0,"name"]},null),(n()(),t["\u0275eld"](3,0,null,null,2,"span",[],null,null,null,null,null)),(n()(),t["\u0275ted"](4,null,[" ",""])),t["\u0275pid"](131072,m.k,[m.l,t.ChangeDetectorRef])],(function(n,l){n(l,2,0,"information-circle-outline")}),(function(n,l){n(l,4,0,t["\u0275unv"](l,4,0,t["\u0275nov"](l,5).transform("EMAIL_NOVALIDO2")))}))}function _(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,5,"div",[["class","error-message"]],null,null,null,null,null)),(n()(),t["\u0275eld"](1,0,null,null,1,"ion-icon",[["name","information-circle-outline"]],null,null,null,s.Db,s.v)),t["\u0275did"](2,49152,null,0,g.D,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{name:[0,"name"]},null),(n()(),t["\u0275eld"](3,0,null,null,2,"span",[],null,null,null,null,null)),(n()(),t["\u0275ted"](4,null,[" ",""])),t["\u0275pid"](131072,m.k,[m.l,t.ChangeDetectorRef])],(function(n,l){n(l,2,0,"information-circle-outline")}),(function(n,l){n(l,4,0,t["\u0275unv"](l,4,0,t["\u0275nov"](l,5).transform("CLAVE_NOVALIDO")))}))}function N(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,8,"ion-row",[["class","other-auth-options-row"]],null,null,null,s.Wb,s.O)),t["\u0275did"](1,49152,null,0,g.hb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](2,0,null,0,6,"ion-button",[["center",""],["class","signup-btn"],["color","danger"],["fill","clear"]],null,[[null,"click"]],(function(n,l,e){var o=!0;return"click"===l&&(o=!1!==t["\u0275nov"](n,4).onClick()&&o),"click"===l&&(o=!1!==t["\u0275nov"](n,6).onClick(e)&&o),o}),s.mb,s.e)),t["\u0275did"](3,49152,null,0,g.l,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{color:[0,"color"],fill:[1,"fill"]},null),t["\u0275did"](4,16384,null,0,p.n,[p.m,p.a,[8,null],t.Renderer2,t.ElementRef],{routerLink:[0,"routerLink"]},null),t["\u0275pad"](5,1),t["\u0275did"](6,737280,null,0,g.Nb,[f.LocationStrategy,g.Hb,t.ElementRef,p.m,[2,p.n]],null,null),(n()(),t["\u0275ted"](7,0,[" "," "])),t["\u0275pid"](131072,m.k,[m.l,t.ChangeDetectorRef])],(function(n,l){n(l,3,0,"danger","clear");var e=n(l,5,0,"/auth/signup");n(l,4,0,e),n(l,6,0)}),(function(n,l){n(l,7,0,t["\u0275unv"](l,7,0,t["\u0275nov"](l,8).transform("REGISTRARSE")))}))}function y(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,0,"img",[["style","display:block; margin:left;width:150px;height: 75;"]],[[8,"src",4]],null,null,null,null))],null,(function(n,l){var e=l.component;n(l,0,0,e.apifoto+e.foto2)}))}function E(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,18,"ion-header",[],null,null,null,s.Cb,s.u)),t["\u0275did"](1,49152,null,0,g.C,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](2,0,null,0,16,"ion-toolbar",[["color","primary"]],null,null,null,s.oc,s.gb)),t["\u0275did"](3,49152,null,0,g.Ab,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{color:[0,"color"]},null),(n()(),t["\u0275eld"](4,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,s.nb,s.f)),t["\u0275did"](5,49152,null,0,g.m,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](6,0,null,0,2,"ion-back-button",[],null,[[null,"click"]],(function(n,l,e){var o=!0;return"click"===l&&(o=!1!==t["\u0275nov"](n,8).onClick(e)&&o),o}),s.kb,s.c)),t["\u0275did"](7,49152,null,0,g.h,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),t["\u0275did"](8,16384,null,0,g.i,[[2,g.gb],g.Hb,g.e],null,null),(n()(),t["\u0275eld"](9,0,null,0,5,"ion-buttons",[["slot","end"]],null,null,null,s.nb,s.f)),t["\u0275did"](10,49152,null,0,g.m,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](11,0,null,0,3,"ion-button",[["title","Opciones"]],null,[[null,"click"]],(function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.presentPopover(e)&&t),t}),s.mb,s.e)),t["\u0275did"](12,49152,null,0,g.l,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](13,0,null,0,1,"ion-icon",[["ios","ellipsis-horizontal"],["md","ellipsis-vertical"],["slot","icon-only"]],null,null,null,s.Db,s.v)),t["\u0275did"](14,49152,null,0,g.D,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{ios:[0,"ios"],md:[1,"md"]},null),(n()(),t["\u0275eld"](15,0,null,0,3,"ion-title",[],null,null,null,s.mc,s.eb)),t["\u0275did"](16,49152,null,0,g.yb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275ted"](17,0,[" "," 3.1.8"])),t["\u0275pid"](131072,m.k,[m.l,t.ChangeDetectorRef]),(n()(),t["\u0275eld"](19,0,null,null,75,"ion-content",[["class","login-content"]],null,null,null,s.wb,s.o)),t["\u0275did"](20,49152,null,0,g.v,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275and"](16777216,null,0,1,null,R)),t["\u0275did"](22,16384,null,0,f.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["\u0275and"](16777216,null,0,1,null,D)),t["\u0275did"](24,16384,null,0,f.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["\u0275and"](16777216,null,0,1,null,P)),t["\u0275did"](26,16384,null,0,f.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["\u0275eld"](27,0,null,0,0,"br",[],null,null,null,null,null)),(n()(),t["\u0275eld"](28,0,null,0,60,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],(function(n,l,e){var o=!0,i=n.component;return"submit"===l&&(o=!1!==t["\u0275nov"](n,30).onSubmit(e)&&o),"reset"===l&&(o=!1!==t["\u0275nov"](n,30).onReset()&&o),"ngSubmit"===l&&(o=!1!==i.doLogin0()&&o),o}),null,null)),t["\u0275did"](29,16384,null,0,i.y,[],null,null),t["\u0275did"](30,540672,null,0,i.h,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),t["\u0275prd"](2048,null,i.b,null,[i.h]),t["\u0275did"](32,16384,null,0,i.p,[[4,i.b]],null,null),(n()(),t["\u0275eld"](33,0,null,null,30,"ion-list",[["class","inputs-list"],["lines","full"]],null,null,null,s.Ob,s.F)),t["\u0275did"](34,49152,null,0,g.P,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{lines:[0,"lines"]},null),(n()(),t["\u0275eld"](35,0,null,0,9,"ion-item",[["class","input-item"]],null,null,null,s.Lb,s.A)),t["\u0275did"](36,49152,null,0,g.I,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](37,0,null,0,7,"ion-input",[["autocapitalize","off"],["clearInput",""],["formControlName","email"],["inputmode","email"],["type","email"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(n,l,e){var o=!0;return"ionBlur"===l&&(o=!1!==t["\u0275nov"](n,38)._handleBlurEvent(e.target)&&o),"ionChange"===l&&(o=!1!==t["\u0275nov"](n,38)._handleInputEvent(e.target)&&o),o}),s.Hb,s.z)),t["\u0275did"](38,16384,null,0,g.Pb,[t.ElementRef],null,null),t["\u0275prd"](1024,null,i.m,(function(n){return[n]}),[g.Pb]),t["\u0275did"](40,671744,null,0,i.f,[[3,i.b],[8,null],[8,null],[6,i.m],[2,i.x]],{name:[0,"name"]},null),t["\u0275prd"](2048,null,i.n,null,[i.f]),t["\u0275did"](42,16384,null,0,i.o,[[4,i.n]],null,null),t["\u0275did"](43,49152,null,0,g.H,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{autocapitalize:[0,"autocapitalize"],clearInput:[1,"clearInput"],inputmode:[2,"inputmode"],placeholder:[3,"placeholder"],type:[4,"type"]},null),t["\u0275pid"](131072,m.k,[m.l,t.ChangeDetectorRef]),(n()(),t["\u0275eld"](45,0,null,0,2,"div",[["class","error-container"]],null,null,null,null,null)),(n()(),t["\u0275and"](16777216,null,null,1,null,O)),t["\u0275did"](47,16384,null,0,f.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["\u0275eld"](48,0,null,0,12,"ion-item",[["class","input-item"]],null,null,null,s.Lb,s.A)),t["\u0275did"](49,49152,null,0,g.I,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](50,0,null,0,10,"app-show-hide-password",[],null,null,null,h.b,h.a)),t["\u0275did"](51,49152,null,1,v.a,[],null,null),t["\u0275qud"](603979776,1,{input:0}),(n()(),t["\u0275eld"](53,0,null,0,7,"ion-input",[["formControlName","password"],["type","password"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(n,l,e){var o=!0;return"ionBlur"===l&&(o=!1!==t["\u0275nov"](n,54)._handleBlurEvent(e.target)&&o),"ionChange"===l&&(o=!1!==t["\u0275nov"](n,54)._handleInputEvent(e.target)&&o),o}),s.Hb,s.z)),t["\u0275did"](54,16384,null,0,g.Pb,[t.ElementRef],null,null),t["\u0275prd"](1024,null,i.m,(function(n){return[n]}),[g.Pb]),t["\u0275did"](56,671744,null,0,i.f,[[3,i.b],[8,null],[8,null],[6,i.m],[2,i.x]],{name:[0,"name"]},null),t["\u0275prd"](2048,null,i.n,null,[i.f]),t["\u0275did"](58,16384,null,0,i.o,[[4,i.n]],null,null),t["\u0275did"](59,49152,[[1,4]],0,g.H,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{placeholder:[0,"placeholder"],type:[1,"type"]},null),t["\u0275pid"](131072,m.k,[m.l,t.ChangeDetectorRef]),(n()(),t["\u0275eld"](61,0,null,0,2,"div",[["class","error-container"]],null,null,null,null,null)),(n()(),t["\u0275and"](16777216,null,null,1,null,_)),t["\u0275did"](63,16384,null,0,f.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["\u0275eld"](64,0,null,null,14,"ion-row",[],null,null,null,s.Wb,s.O)),t["\u0275did"](65,49152,null,0,g.hb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](66,0,null,0,5,"ion-col",[["sise","10"]],null,null,null,s.vb,s.n)),t["\u0275did"](67,49152,null,0,g.u,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](68,0,null,0,3,"ion-button",[["class","login-btn"],["color","tertiary"],["expand","block"],["type","submit"]],null,null,null,s.mb,s.e)),t["\u0275did"](69,49152,null,0,g.l,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{color:[0,"color"],disabled:[1,"disabled"],expand:[2,"expand"],type:[3,"type"]},null),(n()(),t["\u0275ted"](70,0,["",""])),t["\u0275pid"](131072,m.k,[m.l,t.ChangeDetectorRef]),(n()(),t["\u0275eld"](72,0,null,0,6,"ion-col",[["size","1"]],null,null,null,s.vb,s.n)),t["\u0275did"](73,49152,null,0,g.u,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{size:[0,"size"]},null),(n()(),t["\u0275eld"](74,0,null,0,4,"ion-button",[["class","filters-btn"],["color","secondary"],["fill","clear"]],[[8,"title",0]],[[null,"click"]],(function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.dohuella()&&t),t}),s.mb,s.e)),t["\u0275did"](75,49152,null,0,g.l,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{color:[0,"color"],fill:[1,"fill"]},null),t["\u0275pid"](131072,m.k,[m.l,t.ChangeDetectorRef]),(n()(),t["\u0275eld"](77,0,null,0,1,"ion-icon",[["name","finger-print-outline"],["slot","icon-only"]],null,[[null,"click"]],(function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.dohuella()&&t),t}),s.Db,s.v)),t["\u0275did"](78,49152,null,0,g.D,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{name:[0,"name"]},null),(n()(),t["\u0275and"](16777216,null,null,1,null,N)),t["\u0275did"](80,16384,null,0,f.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["\u0275eld"](81,0,null,null,7,"ion-row",[],null,null,null,s.Wb,s.O)),t["\u0275did"](82,49152,null,0,g.hb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](83,0,null,0,5,"ion-fab",[["horizontal","end"],["slot","fixed"],["vertical","top"]],null,null,null,s.zb,s.q)),t["\u0275did"](84,49152,null,0,g.x,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{horizontal:[0,"horizontal"],vertical:[1,"vertical"]},null),(n()(),t["\u0275eld"](85,0,null,0,3,"ion-fab-button",[],null,null,null,s.yb,s.r)),t["\u0275did"](86,49152,null,0,g.y,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](87,0,null,0,1,"ion-icon",[["name","add"]],null,null,null,s.Db,s.v)),t["\u0275did"](88,49152,null,0,g.D,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{name:[0,"name"]},null),(n()(),t["\u0275eld"](89,0,null,0,5,"ion-footer",[],null,null,null,s.Ab,s.s)),t["\u0275did"](90,49152,null,0,g.A,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](91,0,null,0,0,"br",[],null,null,null,null,null)),(n()(),t["\u0275eld"](92,0,null,0,0,"br",[],null,null,null,null,null)),(n()(),t["\u0275and"](16777216,null,0,1,null,y)),t["\u0275did"](94,16384,null,0,f.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null)],(function(n,l){var e=l.component;n(l,3,0,"primary"),n(l,14,0,"ellipsis-horizontal","ellipsis-vertical"),n(l,22,0,"clasica"===e.clasica1),n(l,24,0,"clasica"!==e.clasica1),n(l,26,0,"clasica"!==e.clasica1),n(l,30,0,e.loginForm),n(l,34,0,"full"),n(l,40,0,"email"),n(l,43,0,"off","","email",t["\u0275inlineInterpolate"](1,"",t["\u0275unv"](l,43,3,t["\u0275nov"](l,44).transform("usuario_emeil"))," "),"email"),n(l,47,0,!e.loginForm.controls.email.valid&&(e.loginForm.controls.email.dirty||e.loginForm.controls.email.touched)),n(l,56,0,"password"),n(l,59,0,t["\u0275inlineInterpolate"](1,"",t["\u0275unv"](l,59,0,t["\u0275nov"](l,60).transform("ingrese_clave")),""),"password"),n(l,63,0,!e.loginForm.controls.password.valid&&(e.loginForm.controls.password.dirty||e.loginForm.controls.password.touched)),n(l,69,0,"tertiary",!e.loginForm.valid,"block","submit"),n(l,73,0,"1"),n(l,75,0,"secondary","clear"),n(l,78,0,"finger-print-outline"),n(l,80,0,"No"!==e.siregister),n(l,84,0,"end","top"),n(l,88,0,"add"),n(l,94,0,void 0!==e.foto2&&""!==e.foto2)}),(function(n,l){n(l,17,0,t["\u0275unv"](l,17,0,t["\u0275nov"](l,18).transform("INICIAR_SESION"))),n(l,28,0,t["\u0275nov"](l,32).ngClassUntouched,t["\u0275nov"](l,32).ngClassTouched,t["\u0275nov"](l,32).ngClassPristine,t["\u0275nov"](l,32).ngClassDirty,t["\u0275nov"](l,32).ngClassValid,t["\u0275nov"](l,32).ngClassInvalid,t["\u0275nov"](l,32).ngClassPending),n(l,37,0,t["\u0275nov"](l,42).ngClassUntouched,t["\u0275nov"](l,42).ngClassTouched,t["\u0275nov"](l,42).ngClassPristine,t["\u0275nov"](l,42).ngClassDirty,t["\u0275nov"](l,42).ngClassValid,t["\u0275nov"](l,42).ngClassInvalid,t["\u0275nov"](l,42).ngClassPending),n(l,53,0,t["\u0275nov"](l,58).ngClassUntouched,t["\u0275nov"](l,58).ngClassTouched,t["\u0275nov"](l,58).ngClassPristine,t["\u0275nov"](l,58).ngClassDirty,t["\u0275nov"](l,58).ngClassValid,t["\u0275nov"](l,58).ngClassInvalid,t["\u0275nov"](l,58).ngClassPending),n(l,70,0,t["\u0275unv"](l,70,0,t["\u0275nov"](l,71).transform("INICIAR_SESION"))),n(l,74,0,t["\u0275inlineInterpolate"](1,"",t["\u0275unv"](l,74,0,t["\u0275nov"](l,76).transform("inicia_huella")),""))}))}function k(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"app-login",[],null,null,null,E,b)),t["\u0275did"](1,114688,null,0,r,[u.a,m.l,g.Lb,p.m,g.Fb,g.b,C.b],null,null)],(function(n,l){n(l,1,0)}),null)}var I=t["\u0275ccf"]("app-login",r,k,{},{},[]),M=t["\u0275crt"]({encapsulation:2,styles:[],data:{}});function w(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,34,"ion-list",[],null,null,null,s.Ob,s.F)),t["\u0275did"](1,49152,null,0,g.P,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](2,0,null,0,5,"ion-item",[["button",""]],null,[[null,"click"]],(function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.close("Reinico de contrase\xf1a")&&t),t}),s.Lb,s.A)),t["\u0275did"](3,49152,null,0,g.I,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{button:[0,"button"]},null),(n()(),t["\u0275eld"](4,0,null,0,3,"ion-label",[],null,null,null,s.Mb,s.E)),t["\u0275did"](5,49152,null,0,g.O,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275ted"](6,0,[" "," "])),t["\u0275pid"](131072,m.k,[m.l,t.ChangeDetectorRef]),(n()(),t["\u0275eld"](8,0,null,0,4,"ion-item",[["button",""]],null,[[null,"click"]],(function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.close("my facebook")&&t),t}),s.Lb,s.A)),t["\u0275did"](9,49152,null,0,g.I,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{button:[0,"button"]},null),(n()(),t["\u0275eld"](10,0,null,0,2,"ion-label",[],null,null,null,s.Mb,s.E)),t["\u0275did"](11,49152,null,0,g.O,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275ted"](-1,0,["my facebook"])),(n()(),t["\u0275eld"](13,0,null,0,4,"ion-item",[["button",""]],null,[[null,"click"]],(function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.close("my twitter")&&t),t}),s.Lb,s.A)),t["\u0275did"](14,49152,null,0,g.I,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{button:[0,"button"]},null),(n()(),t["\u0275eld"](15,0,null,0,2,"ion-label",[],null,null,null,s.Mb,s.E)),t["\u0275did"](16,49152,null,0,g.O,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275ted"](-1,0,["my twitter"])),(n()(),t["\u0275eld"](18,0,null,0,5,"ion-item",[["button",""]],null,[[null,"click"]],(function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.close("myhuellaadd")&&t),t}),s.Lb,s.A)),t["\u0275did"](19,49152,null,0,g.I,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{button:[0,"button"]},null),(n()(),t["\u0275eld"](20,0,null,0,3,"ion-label",[],null,null,null,s.Mb,s.E)),t["\u0275did"](21,49152,null,0,g.O,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275ted"](22,0,[" ",""])),t["\u0275pid"](131072,m.k,[m.l,t.ChangeDetectorRef]),(n()(),t["\u0275eld"](24,0,null,0,5,"ion-item",[["button",""]],null,[[null,"click"]],(function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.close("myhuelladel")&&t),t}),s.Lb,s.A)),t["\u0275did"](25,49152,null,0,g.I,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{button:[0,"button"]},null),(n()(),t["\u0275eld"](26,0,null,0,3,"ion-label",[],null,null,null,s.Mb,s.E)),t["\u0275did"](27,49152,null,0,g.O,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275ted"](28,0,[" ",""])),t["\u0275pid"](131072,m.k,[m.l,t.ChangeDetectorRef]),(n()(),t["\u0275eld"](30,0,null,0,4,"ion-item",[["button",""]],null,null,null,s.Lb,s.A)),t["\u0275did"](31,49152,null,0,g.I,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{button:[0,"button"]},null),(n()(),t["\u0275eld"](32,0,null,0,2,"a",[["href","tel:1792"]],null,null,null,null,null)),(n()(),t["\u0275ted"](33,null,[" ",""])),t["\u0275pid"](131072,m.k,[m.l,t.ChangeDetectorRef])],(function(n,l){n(l,3,0,""),n(l,9,0,""),n(l,14,0,""),n(l,19,0,""),n(l,25,0,""),n(l,31,0,"")}),(function(n,l){n(l,6,0,t["\u0275unv"](l,6,0,t["\u0275nov"](l,7).transform("reinicio_contrase\xf1a"))),n(l,22,0,t["\u0275unv"](l,22,0,t["\u0275nov"](l,23).transform("registrar_huella"))),n(l,28,0,t["\u0275unv"](l,28,0,t["\u0275nov"](l,29).transform("eliminar_huella"))),n(l,33,0,t["\u0275unv"](l,33,0,t["\u0275nov"](l,34).transform("llamada_emergencia")))}))}function Z(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"ng-component",[],null,null,null,w,M)),t["\u0275did"](1,49152,null,0,a,[g.Lb],null,null)],null,null)}var S=t["\u0275ccf"]("ng-component",a,Z,{},{},[]),L=e("IheW"),A=e("ZpN7"),x=e("Kt/9"),F=e("j1ZV"),z=t["\u0275cmf"](c,[],(function(n){return t["\u0275mod"]([t["\u0275mpd"](512,t.ComponentFactoryResolver,t["\u0275CodegenComponentFactoryResolver"],[[8,[d.a,I,S]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t["\u0275mpd"](4608,f.NgLocalization,f.NgLocaleLocalization,[t.LOCALE_ID]),t["\u0275mpd"](4608,i.w,i.w,[]),t["\u0275mpd"](4608,i.d,i.d,[]),t["\u0275mpd"](4608,g.c,g.c,[t.NgZone,t.ApplicationRef]),t["\u0275mpd"](4608,g.Gb,g.Gb,[g.c,t.ComponentFactoryResolver,t.Injector]),t["\u0275mpd"](4608,g.Lb,g.Lb,[g.c,t.ComponentFactoryResolver,t.Injector]),t["\u0275mpd"](4608,L.i,L.o,[f.DOCUMENT,t.PLATFORM_ID,L.m]),t["\u0275mpd"](4608,L.p,L.p,[L.i,L.n]),t["\u0275mpd"](5120,L.a,(function(n){return[n]}),[L.p]),t["\u0275mpd"](4608,L.l,L.l,[]),t["\u0275mpd"](6144,L.j,null,[L.l]),t["\u0275mpd"](4608,L.h,L.h,[L.j]),t["\u0275mpd"](6144,L.b,null,[L.h]),t["\u0275mpd"](4608,L.f,L.k,[L.b,t.Injector]),t["\u0275mpd"](4608,L.c,L.c,[L.f]),t["\u0275mpd"](5120,t.APP_INITIALIZER,(function(n){return[A.b(n)]}),[x.a]),t["\u0275mpd"](4608,m.h,m.g,[]),t["\u0275mpd"](4608,m.d,m.f,[]),t["\u0275mpd"](4608,m.j,m.e,[]),t["\u0275mpd"](4608,m.c,m.b,[]),t["\u0275mpd"](4608,m.l,m.l,[m.m,m.h,m.d,m.j,m.c,m.n,m.p,m.o,m.a]),t["\u0275mpd"](1073742336,f.CommonModule,f.CommonModule,[]),t["\u0275mpd"](1073742336,i.v,i.v,[]),t["\u0275mpd"](1073742336,i.j,i.j,[]),t["\u0275mpd"](1073742336,i.s,i.s,[]),t["\u0275mpd"](1073742336,g.Cb,g.Cb,[]),t["\u0275mpd"](1073742336,p.p,p.p,[[2,p.u],[2,p.m]]),t["\u0275mpd"](1073742336,m.i,m.i,[]),t["\u0275mpd"](1073742336,L.e,L.e,[]),t["\u0275mpd"](1073742336,L.d,L.d,[]),t["\u0275mpd"](1073742336,A.a,A.a,[]),t["\u0275mpd"](1073742336,F.a,F.a,[]),t["\u0275mpd"](1073742336,c,c,[]),t["\u0275mpd"](256,L.m,"XSRF-TOKEN",[]),t["\u0275mpd"](256,L.n,"X-XSRF-TOKEN",[]),t["\u0275mpd"](1024,p.k,(function(){return[[{path:"",component:r}]]}),[]),t["\u0275mpd"](256,m.p,void 0,[]),t["\u0275mpd"](256,m.n,void 0,[]),t["\u0275mpd"](256,m.o,void 0,[]),t["\u0275mpd"](256,m.a,void 0,[])])}))},lvGs:function(n,l,e){"use strict";e.d(l,"a",(function(){return u})),e.d(l,"b",(function(){return a}));var t=e("8Y7J"),o=e("MKJQ"),i=e("sZkV"),u=(e("A0kb"),t["\u0275crt"]({encapsulation:0,styles:[["[_nghost-%COMP%]{display:flex;width:100%;align-items:center}[_nghost-%COMP%]   .type-toggle[_ngcontent-%COMP%]{-webkit-padding-start:.5rem;padding-inline-start:.5rem}[_nghost-%COMP%]   .type-toggle[_ngcontent-%COMP%]   .hide-option[_ngcontent-%COMP%], [_nghost-%COMP%]   .type-toggle[_ngcontent-%COMP%]   .show-option[_ngcontent-%COMP%]{font-size:1.2rem;display:block}[_nghost-%COMP%]   .type-toggle[_ngcontent-%COMP%]   .hide-option[_ngcontent-%COMP%]:not(ion-icon), [_nghost-%COMP%]   .type-toggle[_ngcontent-%COMP%]   .show-option[_ngcontent-%COMP%]:not(ion-icon){text-transform:uppercase;font-size:1rem}"]],data:{}}));function a(n){return t["\u0275vid"](0,[t["\u0275ncd"](null,0),(n()(),t["\u0275eld"](1,0,null,null,4,"a",[["class","type-toggle"]],null,[[null,"click"]],(function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.toggleShow()&&t),t}),null,null)),(n()(),t["\u0275eld"](2,0,null,null,1,"ion-icon",[["class","show-option"],["name","eye-off-outline"]],[[8,"hidden",0]],null,null,o.Db,o.v)),t["\u0275did"](3,49152,null,0,i.D,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{name:[0,"name"]},null),(n()(),t["\u0275eld"](4,0,null,null,1,"ion-icon",[["class","hide-option"],["name","eye-outline"]],[[8,"hidden",0]],null,null,o.Db,o.v)),t["\u0275did"](5,49152,null,0,i.D,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{name:[0,"name"]},null)],(function(n,l){n(l,3,0,"eye-off-outline"),n(l,5,0,"eye-outline")}),(function(n,l){var e=l.component;n(l,2,0,e.show),n(l,4,0,!e.show)}))}}}]);