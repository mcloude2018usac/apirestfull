(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{LHPa:function(n,l,e){"use strict";e.r(l),e.d(l,"LoginPageModuleNgFactory",(function(){return F}));var t=e("8Y7J"),o=e("mrSG"),i=e("s7LF"),u=e("ZtEv");class a{constructor(n){this.popoverCtrl=n}support(){this.popoverCtrl.dismiss()}close(n){this.popoverCtrl.dismiss({data:n})}}var r=e("gcOT");class c{constructor(n,l,e,t,o,u,a){this.authenticationService=n,this.translate=l,this.popoverCtrl=e,this.router=t,this.menu=o,this.alertController=u,this.storage=a,this.cintia="/api/image2s/5f146aa48caa41db981e6830",this.foto1="/api/image2s/5f146aa48caa41db981e6830",this.foto2="/api/image2s/5f146aa48caa41db981e6830",this.apifoto=this.authenticationService.getapifoto(),this.loginForm=new i.g({email:new i.e("",i.u.compose([i.u.required,i.u.pattern("^[a-zA-Z0-9_.+-@][a-zA-Z0-9-@]+.[a-zA-Z0-9-.@]+$")])),password:new i.e("",i.u.compose([i.u.required,i.u.minLength(5)]))}),this.APP=this.authenticationService.getempresa(),this.authenticationService.getRegsintok(this.APP+"/todos","empresas",0).then(n=>{let l=[];l=n,this.foto1=l[0].foto1,this.foto2=l[0].foto2,this.siregister=l[0].siregister},n=>{this.authenticationService.presentAlert(n.error,"Precauci\xf3n","")})}dohuella(){return Object(o.a)(this,void 0,void 0,(function*(){sunmiInnerPrinter.printOriginalText("hola impresora"),r.e.NativeBiometric.isAvailable().then(n=>{n.isAvailable&&r.e.NativeBiometric.getCredentials({server:"www.example.com"}).then(n=>{r.e.NativeBiometric.verifyIdentity({reason:"Ingreso a TOTALPAY",title:"INICIAR SESI\xd3N",subtitle:"",description:""}).then(()=>{this.loginForm.get("email").setValue(n.username),this.loginForm.get("password").setValue(n.password);const l={idempresa:this.APP,email:n.username,password:n.password,bitacora:{idempresa:this.APP,idafiliado:"",email:this.loginForm.get("email").value.trim(),permiso:"Ingreso",accion:"Ingreso al sistema"}};this.storage.set("username",n.username),this.authenticationService.createAPITOKEN(l,"/api/auth/login").then(n=>{const l=n;"-1"===l.user._id||"-11"===l.user._id?this.authenticationService.presentAlert(l.user.role,"Precauci\xf3n",""):"0"===l.user.estadoemail&&this.authenticationService.presentAlert("Por favor ingresa a tu correo y confirma tu suscripci\xf3n ","Precauci\xf3n","")},n=>{this.authenticationService.presentToast("Precauci\xf3n","Verifique su conexi\xf3n a internet / Servicio fuera de linea.")})},n=>{})})},n=>{})}))}ngOnInit(){this.menu.enable(!1),this.router.getCurrentNavigation().extras.state&&this.loginForm.get("email").setValue(this.router.getCurrentNavigation().extras.state.email),this.router.getCurrentNavigation().extras.state&&this.loginForm.get("password").setValue(this.router.getCurrentNavigation().extras.state.password)}configurahuella(){return Object(o.a)(this,void 0,void 0,(function*(){const n=yield this.alertController.create({cssClass:"my-custom-class",header:"Ingrese usuario y clave para configurar huella digital",inputs:[{name:"name1",type:"text",value:"mario.morales@mcloude.com",placeholder:"Ingrese correo"},{name:"name2",type:"text",value:"admin123",placeholder:"Ingrese clave"}],buttons:[{text:"Cancelar",role:"cancel",cssClass:"secondary",handler:()=>{}},{text:"Aceptar",handler:n=>{r.e.NativeBiometric.setCredentials({username:n.name1,password:n.name2,server:"www.example.com"}).then(n=>{this.authenticationService.presentAlert("exito","Ingreso de parametros para utilizar huella digital exitoso.","")})}}]});yield n.present()}))}presentPopover(n){return Object(o.a)(this,void 0,void 0,(function*(){const l=yield this.popoverCtrl.create({component:a,event:n});l.onWillDismiss().then(n=>{"Reinico de contrase\xf1a"===n.data.data&&this.router.navigate(["/auth/forgot-password"]),"myhuellaadd"===n.data.data&&this.configurahuella(),"botonemergencia"===n.data.data&&this.authenticationService.presentAlert("exito","LLamando a numero de emergencia 1792",""),"myhuelladel"===n.data.data&&r.e.NativeBiometric.deleteCredentials({server:"www.example.com"}).then(n=>{this.authenticationService.presentAlert("exito","Eliminacion de uso de huella digital","")})}),yield l.present()}))}doLogin(){this.loading=!0;const n={idempresa:this.APP,email:this.loginForm.get("email").value.trim(),password:this.loginForm.get("password").value.trim(),bitacora:{idempresa:this.APP,idafiliado:"",email:this.loginForm.get("email").value.trim(),permiso:"Ingreso",accion:"Ingreso al sistema"}};this.storage.set("username",this.loginForm.get("email").value.trim()),this.authenticationService.createAPITOKEN(n,"/api/auth/login").then(n=>{const l=n;"-1"===l.user._id||"-11"===l.user._id?(this.loading=!1,this.authenticationService.presentAlert(l.user.role,"Precauci\xf3n","")):"0"===l.user.estadoemail?(this.loading=!1,this.authenticationService.presentAlert("Por favor ingresa a tu correo y confirma tu suscripci\xf3n ","Precauci\xf3n","")):this.loading=!1},n=>{this.authenticationService.presentToast("Precauci\xf3n","Verifique su conexi\xf3n a internet / Servicio fuera de linea.")})}goToForgotPassword(){}doFacebookLogin(){}doGoogleLogin(){}doTwitterLogin(){}}class d{}var s=e("pMnS"),g=e("MKJQ"),m=e("sZkV"),p=e("TSSN"),f=e("iInd"),h=e("SVse"),v=e("lvGs"),b=e("A0kb"),C=e("xgBC"),R=t["\u0275crt"]({encapsulation:0,styles:[["[_nghost-%COMP%]{--page-margin:var(--app-broad-margin);--page-background:var(--app-background-shade)}.login-content[_ngcontent-%COMP%]{--background:var(--page-background);--padding-start:var(--page-margin);--padding-end:var(--page-margin);--padding-top:var(--page-margin);--padding-bottom:var(--page-margin)}.login-content[_ngcontent-%COMP%]   div#logo[_ngcontent-%COMP%]{margin-top:25px;margin-bottom:12px}.login-content[_ngcontent-%COMP%]   .auth-title[_ngcontent-%COMP%]{color:var(--ion-color-dark);font-weight:700;margin-top:calc(var(--page-margin)/2);margin-bottom:calc(var(--page-margin)*1.5);letter-spacing:.6px}.login-content[_ngcontent-%COMP%]   .inputs-list[_ngcontent-%COMP%]{--ion-item-background:var(--page-background)}.login-content[_ngcontent-%COMP%]   .inputs-list[_ngcontent-%COMP%]   .input-item[_ngcontent-%COMP%]{--padding-start:0px;--padding-end:0px;--inner-padding-end:0px}.login-content[_ngcontent-%COMP%]   .login-btn[_ngcontent-%COMP%]{margin:calc(var(--page-margin)/2) 0}.login-content[_ngcontent-%COMP%]   .other-auth-options-row[_ngcontent-%COMP%]{justify-content:space-between;align-items:center}.login-content[_ngcontent-%COMP%]   .other-auth-options-row[_ngcontent-%COMP%]   .forgot-btn[_ngcontent-%COMP%]{--color:var(--ion-color-medium);margin:0}.login-content[_ngcontent-%COMP%]   .other-auth-options-row[_ngcontent-%COMP%]   .forgot-btn[_ngcontent-%COMP%]:focus{outline:none}.login-content[_ngcontent-%COMP%]   .other-auth-options-row[_ngcontent-%COMP%]   .signup-btn[_ngcontent-%COMP%]{--color:var(--ion-color-secondary);margin:0}.login-content[_ngcontent-%COMP%]   .other-auth-options-row[_ngcontent-%COMP%]   .signup-btn[_ngcontent-%COMP%]:focus{outline:none}.login-content[_ngcontent-%COMP%]   .social-auth-options[_ngcontent-%COMP%]   .options-divider[_ngcontent-%COMP%]{color:var(--ion-color-medium);margin:var(--page-margin) 0;text-align:center}.login-content[_ngcontent-%COMP%]   .social-auth-options[_ngcontent-%COMP%]   .social-auth-btn[_ngcontent-%COMP%]{margin:0}.login-content[_ngcontent-%COMP%]   .social-auth-options[_ngcontent-%COMP%]   .social-auth-btn[_ngcontent-%COMP%]:not(:first-child){margin-top:var(--page-margin)}"]],data:{}});function P(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,5,"div",[["class","error-message"]],null,null,null,null,null)),(n()(),t["\u0275eld"](1,0,null,null,1,"ion-icon",[["name","information-circle-outline"]],null,null,null,g.Fb,g.v)),t["\u0275did"](2,49152,null,0,m.D,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{name:[0,"name"]},null),(n()(),t["\u0275eld"](3,0,null,null,2,"span",[],null,null,null,null,null)),(n()(),t["\u0275ted"](4,null,[" ",""])),t["\u0275pid"](131072,p.k,[p.l,t.ChangeDetectorRef])],(function(n,l){n(l,2,0,"information-circle-outline")}),(function(n,l){n(l,4,0,t["\u0275unv"](l,4,0,t["\u0275nov"](l,5).transform("EMAIL_NOVALIDO2")))}))}function N(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,5,"div",[["class","error-message"]],null,null,null,null,null)),(n()(),t["\u0275eld"](1,0,null,null,1,"ion-icon",[["name","information-circle-outline"]],null,null,null,g.Fb,g.v)),t["\u0275did"](2,49152,null,0,m.D,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{name:[0,"name"]},null),(n()(),t["\u0275eld"](3,0,null,null,2,"span",[],null,null,null,null,null)),(n()(),t["\u0275ted"](4,null,[" ",""])),t["\u0275pid"](131072,p.k,[p.l,t.ChangeDetectorRef])],(function(n,l){n(l,2,0,"information-circle-outline")}),(function(n,l){n(l,4,0,t["\u0275unv"](l,4,0,t["\u0275nov"](l,5).transform("CLAVE_NOVALIDO")))}))}function I(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,7,"ion-row",[["class","other-auth-options-row"]],null,null,null,g.ac,g.Q)),t["\u0275did"](1,49152,null,0,m.hb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](2,0,null,0,5,"ion-button",[["center",""],["class","signup-btn"],["color","danger"],["fill","clear"]],null,[[null,"click"]],(function(n,l,e){var o=!0;return"click"===l&&(o=!1!==t["\u0275nov"](n,4).onClick()&&o),"click"===l&&(o=!1!==t["\u0275nov"](n,6).onClick(e)&&o),o}),g.ob,g.e)),t["\u0275did"](3,49152,null,0,m.l,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{color:[0,"color"],fill:[1,"fill"]},null),t["\u0275did"](4,16384,null,0,f.n,[f.m,f.a,[8,null],t.Renderer2,t.ElementRef],{routerLink:[0,"routerLink"]},null),t["\u0275pad"](5,1),t["\u0275did"](6,737280,null,0,m.Nb,[h.LocationStrategy,m.Hb,t.ElementRef,f.m,[2,f.n]],null,null),(n()(),t["\u0275ted"](-1,0,[" \xbfREGISTRARSE? "]))],(function(n,l){n(l,3,0,"danger","clear");var e=n(l,5,0,"/auth/signup");n(l,4,0,e),n(l,6,0)}),null)}function E(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,0,"img",[["style","display:block; margin:left;width:300px;height: 150;"]],[[8,"src",4]],null,null,null,null))],null,(function(n,l){var e=l.component;n(l,0,0,e.apifoto+e.foto2)}))}function y(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,17,"ion-header",[],null,null,null,g.Eb,g.u)),t["\u0275did"](1,49152,null,0,m.C,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](2,0,null,0,15,"ion-toolbar",[["color","primary"]],null,null,null,g.sc,g.ib)),t["\u0275did"](3,49152,null,0,m.Ab,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{color:[0,"color"]},null),(n()(),t["\u0275eld"](4,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,g.pb,g.f)),t["\u0275did"](5,49152,null,0,m.m,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](6,0,null,0,2,"ion-back-button",[],null,[[null,"click"]],(function(n,l,e){var o=!0;return"click"===l&&(o=!1!==t["\u0275nov"](n,8).onClick(e)&&o),o}),g.mb,g.c)),t["\u0275did"](7,49152,null,0,m.h,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),t["\u0275did"](8,16384,null,0,m.i,[[2,m.gb],m.Hb,m.e],null,null),(n()(),t["\u0275eld"](9,0,null,0,5,"ion-buttons",[["slot","end"]],null,null,null,g.pb,g.f)),t["\u0275did"](10,49152,null,0,m.m,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](11,0,null,0,3,"ion-button",[["title","Opciones"]],null,[[null,"click"]],(function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.presentPopover(e)&&t),t}),g.ob,g.e)),t["\u0275did"](12,49152,null,0,m.l,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](13,0,null,0,1,"ion-icon",[["ios","ellipsis-horizontal"],["md","ellipsis-vertical"],["slot","icon-only"]],null,null,null,g.Fb,g.v)),t["\u0275did"](14,49152,null,0,m.D,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{ios:[0,"ios"],md:[1,"md"]},null),(n()(),t["\u0275eld"](15,0,null,0,2,"ion-title",[],null,null,null,g.qc,g.gb)),t["\u0275did"](16,49152,null,0,m.yb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275ted"](-1,0,[" INICIAR SESI\xd3N 1.1.8"])),(n()(),t["\u0275eld"](18,0,null,null,67,"ion-content",[["class","login-content"]],null,null,null,g.yb,g.o)),t["\u0275did"](19,49152,null,0,m.v,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](20,0,null,0,0,"img",[["style","display:block; margin:auto;width:280px"]],[[8,"src",4]],null,null,null,null)),(n()(),t["\u0275eld"](21,0,null,0,0,"br",[],null,null,null,null,null)),(n()(),t["\u0275eld"](22,0,null,0,56,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],(function(n,l,e){var o=!0,i=n.component;return"submit"===l&&(o=!1!==t["\u0275nov"](n,24).onSubmit(e)&&o),"reset"===l&&(o=!1!==t["\u0275nov"](n,24).onReset()&&o),"ngSubmit"===l&&(o=!1!==i.doLogin()&&o),o}),null,null)),t["\u0275did"](23,16384,null,0,i.y,[],null,null),t["\u0275did"](24,540672,null,0,i.h,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),t["\u0275prd"](2048,null,i.b,null,[i.h]),t["\u0275did"](26,16384,null,0,i.p,[[4,i.b]],null,null),(n()(),t["\u0275eld"](27,0,null,null,28,"ion-list",[["class","inputs-list"],["lines","full"]],null,null,null,g.Sb,g.H)),t["\u0275did"](28,49152,null,0,m.P,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{lines:[0,"lines"]},null),(n()(),t["\u0275eld"](29,0,null,0,8,"ion-item",[["class","input-item"]],null,null,null,g.Pb,g.A)),t["\u0275did"](30,49152,null,0,m.I,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](31,0,null,0,6,"ion-input",[["autocapitalize","off"],["clearInput",""],["formControlName","email"],["inputmode","email"],["placeholder","Usuario"],["type","email"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(n,l,e){var o=!0;return"ionBlur"===l&&(o=!1!==t["\u0275nov"](n,32)._handleBlurEvent(e.target)&&o),"ionChange"===l&&(o=!1!==t["\u0275nov"](n,32)._handleInputEvent(e.target)&&o),o}),g.Jb,g.z)),t["\u0275did"](32,16384,null,0,m.Pb,[t.ElementRef],null,null),t["\u0275prd"](1024,null,i.m,(function(n){return[n]}),[m.Pb]),t["\u0275did"](34,671744,null,0,i.f,[[3,i.b],[8,null],[8,null],[6,i.m],[2,i.x]],{name:[0,"name"]},null),t["\u0275prd"](2048,null,i.n,null,[i.f]),t["\u0275did"](36,16384,null,0,i.o,[[4,i.n]],null,null),t["\u0275did"](37,49152,null,0,m.H,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{autocapitalize:[0,"autocapitalize"],clearInput:[1,"clearInput"],inputmode:[2,"inputmode"],placeholder:[3,"placeholder"],type:[4,"type"]},null),(n()(),t["\u0275eld"](38,0,null,0,2,"div",[["class","error-container"]],null,null,null,null,null)),(n()(),t["\u0275and"](16777216,null,null,1,null,P)),t["\u0275did"](40,16384,null,0,h.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["\u0275eld"](41,0,null,0,11,"ion-item",[["class","input-item"]],null,null,null,g.Pb,g.A)),t["\u0275did"](42,49152,null,0,m.I,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](43,0,null,0,9,"app-show-hide-password",[],null,null,null,v.b,v.a)),t["\u0275did"](44,49152,null,1,b.a,[],null,null),t["\u0275qud"](603979776,1,{input:0}),(n()(),t["\u0275eld"](46,0,null,0,6,"ion-input",[["formControlName","password"],["placeholder","Clave"],["type","password"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(n,l,e){var o=!0;return"ionBlur"===l&&(o=!1!==t["\u0275nov"](n,47)._handleBlurEvent(e.target)&&o),"ionChange"===l&&(o=!1!==t["\u0275nov"](n,47)._handleInputEvent(e.target)&&o),o}),g.Jb,g.z)),t["\u0275did"](47,16384,null,0,m.Pb,[t.ElementRef],null,null),t["\u0275prd"](1024,null,i.m,(function(n){return[n]}),[m.Pb]),t["\u0275did"](49,671744,null,0,i.f,[[3,i.b],[8,null],[8,null],[6,i.m],[2,i.x]],{name:[0,"name"]},null),t["\u0275prd"](2048,null,i.n,null,[i.f]),t["\u0275did"](51,16384,null,0,i.o,[[4,i.n]],null,null),t["\u0275did"](52,49152,[[1,4]],0,m.H,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{placeholder:[0,"placeholder"],type:[1,"type"]},null),(n()(),t["\u0275eld"](53,0,null,0,2,"div",[["class","error-container"]],null,null,null,null,null)),(n()(),t["\u0275and"](16777216,null,null,1,null,N)),t["\u0275did"](55,16384,null,0,h.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["\u0275eld"](56,0,null,null,12,"ion-row",[],null,null,null,g.ac,g.Q)),t["\u0275did"](57,49152,null,0,m.hb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](58,0,null,0,4,"ion-col",[["sise","10"]],null,null,null,g.xb,g.n)),t["\u0275did"](59,49152,null,0,m.u,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](60,0,null,0,2,"ion-button",[["class","login-btn"],["color","tertiary"],["expand","block"],["type","submit"]],null,null,null,g.ob,g.e)),t["\u0275did"](61,49152,null,0,m.l,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{color:[0,"color"],disabled:[1,"disabled"],expand:[2,"expand"],type:[3,"type"]},null),(n()(),t["\u0275ted"](-1,0,["INICIAR SESI\xd3N"])),(n()(),t["\u0275eld"](63,0,null,0,5,"ion-col",[["size","1"]],null,null,null,g.xb,g.n)),t["\u0275did"](64,49152,null,0,m.u,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{size:[0,"size"]},null),(n()(),t["\u0275eld"](65,0,null,0,3,"ion-button",[["class","filters-btn"],["color","secondary"],["fill","clear"],["title","Iniciar sesi\xf3n huella digital"]],null,[[null,"click"]],(function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.dohuella()&&t),t}),g.ob,g.e)),t["\u0275did"](66,49152,null,0,m.l,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{color:[0,"color"],fill:[1,"fill"]},null),(n()(),t["\u0275eld"](67,0,null,0,1,"ion-icon",[["name","finger-print-outline"],["slot","icon-only"]],null,[[null,"click"]],(function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.dohuella()&&t),t}),g.Fb,g.v)),t["\u0275did"](68,49152,null,0,m.D,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{name:[0,"name"]},null),(n()(),t["\u0275and"](16777216,null,null,1,null,I)),t["\u0275did"](70,16384,null,0,h.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["\u0275eld"](71,0,null,null,7,"ion-row",[],null,null,null,g.ac,g.Q)),t["\u0275did"](72,49152,null,0,m.hb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](73,0,null,0,5,"ion-fab",[["horizontal","end"],["slot","fixed"],["vertical","top"]],null,null,null,g.Bb,g.q)),t["\u0275did"](74,49152,null,0,m.x,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{horizontal:[0,"horizontal"],vertical:[1,"vertical"]},null),(n()(),t["\u0275eld"](75,0,null,0,3,"ion-fab-button",[],null,null,null,g.Ab,g.r)),t["\u0275did"](76,49152,null,0,m.y,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](77,0,null,0,1,"ion-icon",[["name","add"]],null,null,null,g.Fb,g.v)),t["\u0275did"](78,49152,null,0,m.D,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{name:[0,"name"]},null),(n()(),t["\u0275eld"](79,0,null,0,6,"ion-footer",[],null,null,null,g.Cb,g.s)),t["\u0275did"](80,49152,null,0,m.A,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](81,0,null,0,0,"br",[],null,null,null,null,null)),(n()(),t["\u0275eld"](82,0,null,0,0,"br",[],null,null,null,null,null)),(n()(),t["\u0275eld"](83,0,null,0,0,"br",[],null,null,null,null,null)),(n()(),t["\u0275and"](16777216,null,0,1,null,E)),t["\u0275did"](85,16384,null,0,h.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null)],(function(n,l){var e=l.component;n(l,3,0,"primary"),n(l,14,0,"ellipsis-horizontal","ellipsis-vertical"),n(l,24,0,e.loginForm),n(l,28,0,"full"),n(l,34,0,"email"),n(l,37,0,"off","","email","Usuario","email"),n(l,40,0,!e.loginForm.controls.email.valid&&(e.loginForm.controls.email.dirty||e.loginForm.controls.email.touched)),n(l,49,0,"password"),n(l,52,0,"Clave","password"),n(l,55,0,!e.loginForm.controls.password.valid&&(e.loginForm.controls.password.dirty||e.loginForm.controls.password.touched)),n(l,61,0,"tertiary",!e.loginForm.valid,"block","submit"),n(l,64,0,"1"),n(l,66,0,"secondary","clear"),n(l,68,0,"finger-print-outline"),n(l,70,0,"No"!==e.siregister),n(l,74,0,"end","top"),n(l,78,0,"add"),n(l,85,0,void 0!==e.foto2&&""!==e.foto2)}),(function(n,l){var e=l.component;n(l,20,0,e.apifoto+e.foto1),n(l,22,0,t["\u0275nov"](l,26).ngClassUntouched,t["\u0275nov"](l,26).ngClassTouched,t["\u0275nov"](l,26).ngClassPristine,t["\u0275nov"](l,26).ngClassDirty,t["\u0275nov"](l,26).ngClassValid,t["\u0275nov"](l,26).ngClassInvalid,t["\u0275nov"](l,26).ngClassPending),n(l,31,0,t["\u0275nov"](l,36).ngClassUntouched,t["\u0275nov"](l,36).ngClassTouched,t["\u0275nov"](l,36).ngClassPristine,t["\u0275nov"](l,36).ngClassDirty,t["\u0275nov"](l,36).ngClassValid,t["\u0275nov"](l,36).ngClassInvalid,t["\u0275nov"](l,36).ngClassPending),n(l,46,0,t["\u0275nov"](l,51).ngClassUntouched,t["\u0275nov"](l,51).ngClassTouched,t["\u0275nov"](l,51).ngClassPristine,t["\u0275nov"](l,51).ngClassDirty,t["\u0275nov"](l,51).ngClassValid,t["\u0275nov"](l,51).ngClassInvalid,t["\u0275nov"](l,51).ngClassPending)}))}function w(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"app-login",[],null,null,null,y,R)),t["\u0275did"](1,114688,null,0,c,[u.a,p.l,m.Lb,f.m,m.Fb,m.b,C.b],null,null)],(function(n,l){n(l,1,0)}),null)}var O=t["\u0275ccf"]("app-login",c,w,{},{},[]),D=t["\u0275crt"]({encapsulation:2,styles:[],data:{}});function k(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,30,"ion-list",[],null,null,null,g.Sb,g.H)),t["\u0275did"](1,49152,null,0,m.P,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](2,0,null,0,4,"ion-item",[["button",""]],null,[[null,"click"]],(function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.close("Reinico de contrase\xf1a")&&t),t}),g.Pb,g.A)),t["\u0275did"](3,49152,null,0,m.I,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{button:[0,"button"]},null),(n()(),t["\u0275eld"](4,0,null,0,2,"ion-label",[],null,null,null,g.Qb,g.G)),t["\u0275did"](5,49152,null,0,m.O,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275ted"](-1,0,["Reinico de contrase\xf1a"])),(n()(),t["\u0275eld"](7,0,null,0,4,"ion-item",[["button",""]],null,[[null,"click"]],(function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.close("my facebook")&&t),t}),g.Pb,g.A)),t["\u0275did"](8,49152,null,0,m.I,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{button:[0,"button"]},null),(n()(),t["\u0275eld"](9,0,null,0,2,"ion-label",[],null,null,null,g.Qb,g.G)),t["\u0275did"](10,49152,null,0,m.O,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275ted"](-1,0,["my facebook"])),(n()(),t["\u0275eld"](12,0,null,0,4,"ion-item",[["button",""]],null,[[null,"click"]],(function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.close("my twitter")&&t),t}),g.Pb,g.A)),t["\u0275did"](13,49152,null,0,m.I,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{button:[0,"button"]},null),(n()(),t["\u0275eld"](14,0,null,0,2,"ion-label",[],null,null,null,g.Qb,g.G)),t["\u0275did"](15,49152,null,0,m.O,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275ted"](-1,0,["my twitter"])),(n()(),t["\u0275eld"](17,0,null,0,4,"ion-item",[["button",""]],null,[[null,"click"]],(function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.close("myhuellaadd")&&t),t}),g.Pb,g.A)),t["\u0275did"](18,49152,null,0,m.I,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{button:[0,"button"]},null),(n()(),t["\u0275eld"](19,0,null,0,2,"ion-label",[],null,null,null,g.Qb,g.G)),t["\u0275did"](20,49152,null,0,m.O,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275ted"](-1,0,["Registrar huella digital"])),(n()(),t["\u0275eld"](22,0,null,0,4,"ion-item",[["button",""]],null,[[null,"click"]],(function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.close("myhuelladel")&&t),t}),g.Pb,g.A)),t["\u0275did"](23,49152,null,0,m.I,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{button:[0,"button"]},null),(n()(),t["\u0275eld"](24,0,null,0,2,"ion-label",[],null,null,null,g.Qb,g.G)),t["\u0275did"](25,49152,null,0,m.O,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275ted"](-1,0,["Eliminar huella digital"])),(n()(),t["\u0275eld"](27,0,null,0,3,"ion-item",[["button",""]],null,null,null,g.Pb,g.A)),t["\u0275did"](28,49152,null,0,m.I,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{button:[0,"button"]},null),(n()(),t["\u0275eld"](29,0,null,0,1,"a",[["href","tel:1792"]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["LLamada de emergencia"]))],(function(n,l){n(l,3,0,""),n(l,8,0,""),n(l,13,0,""),n(l,18,0,""),n(l,23,0,""),n(l,28,0,"")}),null)}function Z(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"ng-component",[],null,null,null,k,D)),t["\u0275did"](1,49152,null,0,a,[m.Lb],null,null)],null,null)}var _=t["\u0275ccf"]("ng-component",a,Z,{},{},[]),A=e("IheW"),M=e("ZpN7"),S=e("Kt/9"),x=e("j1ZV"),F=t["\u0275cmf"](d,[],(function(n){return t["\u0275mod"]([t["\u0275mpd"](512,t.ComponentFactoryResolver,t["\u0275CodegenComponentFactoryResolver"],[[8,[s.a,O,_]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t["\u0275mpd"](4608,h.NgLocalization,h.NgLocaleLocalization,[t.LOCALE_ID]),t["\u0275mpd"](4608,i.w,i.w,[]),t["\u0275mpd"](4608,i.d,i.d,[]),t["\u0275mpd"](4608,m.c,m.c,[t.NgZone,t.ApplicationRef]),t["\u0275mpd"](4608,m.Gb,m.Gb,[m.c,t.ComponentFactoryResolver,t.Injector]),t["\u0275mpd"](4608,m.Lb,m.Lb,[m.c,t.ComponentFactoryResolver,t.Injector]),t["\u0275mpd"](4608,A.i,A.o,[h.DOCUMENT,t.PLATFORM_ID,A.m]),t["\u0275mpd"](4608,A.p,A.p,[A.i,A.n]),t["\u0275mpd"](5120,A.a,(function(n){return[n]}),[A.p]),t["\u0275mpd"](4608,A.l,A.l,[]),t["\u0275mpd"](6144,A.j,null,[A.l]),t["\u0275mpd"](4608,A.h,A.h,[A.j]),t["\u0275mpd"](6144,A.b,null,[A.h]),t["\u0275mpd"](4608,A.f,A.k,[A.b,t.Injector]),t["\u0275mpd"](4608,A.c,A.c,[A.f]),t["\u0275mpd"](5120,t.APP_INITIALIZER,(function(n){return[M.b(n)]}),[S.a]),t["\u0275mpd"](4608,p.h,p.g,[]),t["\u0275mpd"](4608,p.d,p.f,[]),t["\u0275mpd"](4608,p.j,p.e,[]),t["\u0275mpd"](4608,p.c,p.b,[]),t["\u0275mpd"](4608,p.l,p.l,[p.m,p.h,p.d,p.j,p.c,p.n,p.p,p.o,p.a]),t["\u0275mpd"](1073742336,h.CommonModule,h.CommonModule,[]),t["\u0275mpd"](1073742336,i.v,i.v,[]),t["\u0275mpd"](1073742336,i.j,i.j,[]),t["\u0275mpd"](1073742336,i.s,i.s,[]),t["\u0275mpd"](1073742336,m.Cb,m.Cb,[]),t["\u0275mpd"](1073742336,f.p,f.p,[[2,f.u],[2,f.m]]),t["\u0275mpd"](1073742336,p.i,p.i,[]),t["\u0275mpd"](1073742336,A.e,A.e,[]),t["\u0275mpd"](1073742336,A.d,A.d,[]),t["\u0275mpd"](1073742336,M.a,M.a,[]),t["\u0275mpd"](1073742336,x.a,x.a,[]),t["\u0275mpd"](1073742336,d,d,[]),t["\u0275mpd"](256,A.m,"XSRF-TOKEN",[]),t["\u0275mpd"](256,A.n,"X-XSRF-TOKEN",[]),t["\u0275mpd"](1024,f.k,(function(){return[[{path:"",component:c}]]}),[]),t["\u0275mpd"](256,p.p,void 0,[]),t["\u0275mpd"](256,p.n,void 0,[]),t["\u0275mpd"](256,p.o,void 0,[]),t["\u0275mpd"](256,p.a,void 0,[])])}))}}]);