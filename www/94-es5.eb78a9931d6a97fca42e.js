function _classCallCheck(n,l){if(!(n instanceof l))throw new TypeError("Cannot call a class as a function")}function _defineProperties(n,l){for(var e=0;e<l.length;e++){var t=l[e];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}function _createClass(n,l,e){return l&&_defineProperties(n.prototype,l),e&&_defineProperties(n,e),n}(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{LHPa:function(n,l,e){"use strict";e.r(l),e.d(l,"LoginPageModuleNgFactory",(function(){return F}));var t=e("8Y7J"),u=e("mrSG"),o=e("s7LF"),i=e("ZtEv"),a=function(){function n(l){_classCallCheck(this,n),this.popoverCtrl=l}return _createClass(n,[{key:"support",value:function(){this.popoverCtrl.dismiss()}},{key:"close",value:function(n){this.popoverCtrl.dismiss({data:n})}}]),n}(),r=e("gcOT"),c=function(){function n(l,e,t,u,i,a,r){var c=this;_classCallCheck(this,n),this.authenticationService=l,this.translate=e,this.popoverCtrl=t,this.router=u,this.menu=i,this.alertController=a,this.storage=r,this.cintia="/api/image2s/5f146aa48caa41db981e6830",this.foto1="/api/image2s/5f146aa48caa41db981e6830",this.foto2="/api/image2s/5f146aa48caa41db981e6830",this.apifoto=this.authenticationService.getapifoto(),this.loginForm=new o.g({email:new o.e("",o.u.compose([o.u.required,o.u.pattern("^[a-zA-Z0-9_.+-@][a-zA-Z0-9-@]+.[a-zA-Z0-9-.@]+$")])),password:new o.e("",o.u.compose([o.u.required,o.u.minLength(5)]))}),this.APP=this.authenticationService.getempresa(),this.authenticationService.getRegsintok(this.APP+"/todos","empresas",0).then((function(n){var l;l=n,c.foto1=l[0].foto1,c.foto2=l[0].foto2,c.siregister=l[0].siregister}),(function(n){c.authenticationService.presentAlert(n.error,"Precauci\xf3n","")}))}return _createClass(n,[{key:"dohuella",value:function(){return Object(u.a)(this,void 0,void 0,regeneratorRuntime.mark((function n(){var l=this;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:sunmiInnerPrinter.printOriginalText("hola impresora"),r.e.NativeBiometric.isAvailable().then((function(n){n.isAvailable&&r.e.NativeBiometric.getCredentials({server:"www.example.com"}).then((function(n){r.e.NativeBiometric.verifyIdentity({reason:"Ingreso a TOTALPAY",title:"INICIAR SESI\xd3N",subtitle:"",description:""}).then((function(){l.loginForm.get("email").setValue(n.username),l.loginForm.get("password").setValue(n.password);var e={idempresa:l.APP,email:n.username,password:n.password,bitacora:{idempresa:l.APP,idafiliado:"",email:l.loginForm.get("email").value.trim(),permiso:"Ingreso",accion:"Ingreso al sistema"}};l.storage.set("username",n.username),l.authenticationService.createAPITOKEN(e,"/api/auth/login").then((function(n){var e=n;"-1"===e.user._id||"-11"===e.user._id?l.authenticationService.presentAlert(e.user.role,"Precauci\xf3n",""):"0"===e.user.estadoemail&&l.authenticationService.presentAlert("Por favor ingresa a tu correo y confirma tu suscripci\xf3n ","Precauci\xf3n","")}),(function(n){l.authenticationService.presentToast("Precauci\xf3n","Verifique su conexi\xf3n a internet / Servicio fuera de linea.")}))}),(function(n){}))}))}),(function(n){}));case 1:case"end":return n.stop()}}),n)})))}},{key:"ngOnInit",value:function(){this.menu.enable(!1),this.router.getCurrentNavigation().extras.state&&this.loginForm.get("email").setValue(this.router.getCurrentNavigation().extras.state.email),this.router.getCurrentNavigation().extras.state&&this.loginForm.get("password").setValue(this.router.getCurrentNavigation().extras.state.password)}},{key:"configurahuella",value:function(){return Object(u.a)(this,void 0,void 0,regeneratorRuntime.mark((function n(){var l,e=this;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.alertController.create({cssClass:"my-custom-class",header:"Ingrese usuario y clave para configurar huella digital",inputs:[{name:"name1",type:"text",value:"mario.morales@mcloude.com",placeholder:"Ingrese correo"},{name:"name2",type:"text",value:"admin123",placeholder:"Ingrese clave"}],buttons:[{text:"Cancelar",role:"cancel",cssClass:"secondary",handler:function(){}},{text:"Aceptar",handler:function(n){r.e.NativeBiometric.setCredentials({username:n.name1,password:n.name2,server:"www.example.com"}).then((function(n){e.authenticationService.presentAlert("exito","Ingreso de parametros para utilizar huella digital exitoso.","")}))}}]});case 2:return l=n.sent,n.next=5,l.present();case 5:case"end":return n.stop()}}),n,this)})))}},{key:"presentPopover",value:function(n){return Object(u.a)(this,void 0,void 0,regeneratorRuntime.mark((function l(){var e,t=this;return regeneratorRuntime.wrap((function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,this.popoverCtrl.create({component:a,event:n});case 2:return(e=l.sent).onWillDismiss().then((function(n){"Reinico de contrase\xf1a"===n.data.data&&t.router.navigate(["/auth/forgot-password"]),"myhuellaadd"===n.data.data&&t.configurahuella(),"botonemergencia"===n.data.data&&t.authenticationService.presentAlert("exito","LLamando a numero de emergencia 1792",""),"myhuelladel"===n.data.data&&r.e.NativeBiometric.deleteCredentials({server:"www.example.com"}).then((function(n){t.authenticationService.presentAlert("exito","Eliminacion de uso de huella digital","")}))})),l.next=6,e.present();case 6:case"end":return l.stop()}}),l,this)})))}},{key:"doLogin",value:function(){var n=this,l={idempresa:this.APP,email:this.loginForm.get("email").value.trim(),password:this.loginForm.get("password").value.trim(),bitacora:{idempresa:this.APP,idafiliado:"",email:this.loginForm.get("email").value.trim(),permiso:"Ingreso",accion:"Ingreso al sistema"}};this.storage.set("username",this.loginForm.get("email").value.trim()),this.authenticationService.createAPITOKEN(l,"/api/auth/login").then((function(l){var e=l;"-1"===e.user._id||"-11"===e.user._id?n.authenticationService.presentAlert(e.user.role,"Precauci\xf3n",""):"0"===e.user.estadoemail&&n.authenticationService.presentAlert("Por favor ingresa a tu correo y confirma tu suscripci\xf3n ","Precauci\xf3n","")}),(function(l){n.authenticationService.presentToast("Precauci\xf3n","Verifique su conexi\xf3n a internet / Servicio fuera de linea.")}))}},{key:"goToForgotPassword",value:function(){}},{key:"doFacebookLogin",value:function(){}},{key:"doGoogleLogin",value:function(){}},{key:"doTwitterLogin",value:function(){}}]),n}(),s=function n(){_classCallCheck(this,n)},b=e("pMnS"),g=e("MKJQ"),m=e("sZkV"),p=e("TSSN"),d=e("iInd"),h=e("SVse"),f=e("lvGs"),v=e("A0kb"),y=e("xgBC"),C=t.wb({encapsulation:0,styles:[["[_nghost-%COMP%]{--page-margin:var(--app-broad-margin);--page-background:var(--app-background-shade)}.login-content[_ngcontent-%COMP%]{--background:var(--page-background);--padding-start:var(--page-margin);--padding-end:var(--page-margin);--padding-top:var(--page-margin);--padding-bottom:var(--page-margin)}.login-content[_ngcontent-%COMP%]   div#logo[_ngcontent-%COMP%]{margin-top:25px;margin-bottom:12px}.login-content[_ngcontent-%COMP%]   .auth-title[_ngcontent-%COMP%]{color:var(--ion-color-dark);font-weight:700;margin-top:calc(var(--page-margin)/2);margin-bottom:calc(var(--page-margin)*1.5);letter-spacing:.6px}.login-content[_ngcontent-%COMP%]   .inputs-list[_ngcontent-%COMP%]{--ion-item-background:var(--page-background)}.login-content[_ngcontent-%COMP%]   .inputs-list[_ngcontent-%COMP%]   .input-item[_ngcontent-%COMP%]{--padding-start:0px;--padding-end:0px;--inner-padding-end:0px}.login-content[_ngcontent-%COMP%]   .login-btn[_ngcontent-%COMP%]{margin:calc(var(--page-margin)/2) 0}.login-content[_ngcontent-%COMP%]   .other-auth-options-row[_ngcontent-%COMP%]{justify-content:space-between;align-items:center}.login-content[_ngcontent-%COMP%]   .other-auth-options-row[_ngcontent-%COMP%]   .forgot-btn[_ngcontent-%COMP%]{--color:var(--ion-color-medium);margin:0}.login-content[_ngcontent-%COMP%]   .other-auth-options-row[_ngcontent-%COMP%]   .forgot-btn[_ngcontent-%COMP%]:focus{outline:none}.login-content[_ngcontent-%COMP%]   .other-auth-options-row[_ngcontent-%COMP%]   .signup-btn[_ngcontent-%COMP%]{--color:var(--ion-color-secondary);margin:0}.login-content[_ngcontent-%COMP%]   .other-auth-options-row[_ngcontent-%COMP%]   .signup-btn[_ngcontent-%COMP%]:focus{outline:none}.login-content[_ngcontent-%COMP%]   .social-auth-options[_ngcontent-%COMP%]   .options-divider[_ngcontent-%COMP%]{color:var(--ion-color-medium);margin:var(--page-margin) 0;text-align:center}.login-content[_ngcontent-%COMP%]   .social-auth-options[_ngcontent-%COMP%]   .social-auth-btn[_ngcontent-%COMP%]{margin:0}.login-content[_ngcontent-%COMP%]   .social-auth-options[_ngcontent-%COMP%]   .social-auth-btn[_ngcontent-%COMP%]:not(:first-child){margin-top:var(--page-margin)}"]],data:{}});function x(n){return t.ac(0,[(n()(),t.yb(0,0,null,null,5,"div",[["class","error-message"]],null,null,null,null,null)),(n()(),t.yb(1,0,null,null,1,"ion-icon",[["name","information-circle-outline"]],null,null,null,g.Fb,g.v)),t.xb(2,49152,null,0,m.D,[t.h,t.l,t.z],{name:[0,"name"]},null),(n()(),t.yb(3,0,null,null,2,"span",[],null,null,null,null,null)),(n()(),t.Xb(4,null,[" ",""])),t.Pb(131072,p.k,[p.l,t.h])],(function(n,l){n(l,2,0,"information-circle-outline")}),(function(n,l){n(l,4,0,t.Yb(l,4,0,t.Nb(l,5).transform("EMAIL_NOVALIDO2")))}))}function P(n){return t.ac(0,[(n()(),t.yb(0,0,null,null,5,"div",[["class","error-message"]],null,null,null,null,null)),(n()(),t.yb(1,0,null,null,1,"ion-icon",[["name","information-circle-outline"]],null,null,null,g.Fb,g.v)),t.xb(2,49152,null,0,m.D,[t.h,t.l,t.z],{name:[0,"name"]},null),(n()(),t.yb(3,0,null,null,2,"span",[],null,null,null,null,null)),(n()(),t.Xb(4,null,[" ",""])),t.Pb(131072,p.k,[p.l,t.h])],(function(n,l){n(l,2,0,"information-circle-outline")}),(function(n,l){n(l,4,0,t.Yb(l,4,0,t.Nb(l,5).transform("CLAVE_NOVALIDO")))}))}function k(n){return t.ac(0,[(n()(),t.yb(0,0,null,null,7,"ion-row",[["class","other-auth-options-row"]],null,null,null,g.ac,g.Q)),t.xb(1,49152,null,0,m.hb,[t.h,t.l,t.z],null,null),(n()(),t.yb(2,0,null,0,5,"ion-button",[["center",""],["class","signup-btn"],["color","danger"],["fill","clear"]],null,[[null,"click"]],(function(n,l,e){var u=!0;return"click"===l&&(u=!1!==t.Nb(n,4).onClick()&&u),"click"===l&&(u=!1!==t.Nb(n,6).onClick(e)&&u),u}),g.ob,g.e)),t.xb(3,49152,null,0,m.l,[t.h,t.l,t.z],{color:[0,"color"],fill:[1,"fill"]},null),t.xb(4,16384,null,0,d.n,[d.m,d.a,[8,null],t.E,t.l],{routerLink:[0,"routerLink"]},null),t.Ob(5,1),t.xb(6,737280,null,0,m.Nb,[h.j,m.Hb,t.l,d.m,[2,d.n]],null,null),(n()(),t.Xb(-1,0,[" \xbfREGISTRARSE? "]))],(function(n,l){n(l,3,0,"danger","clear");var e=n(l,5,0,"/auth/signup");n(l,4,0,e),n(l,6,0)}),null)}function w(n){return t.ac(0,[(n()(),t.yb(0,0,null,null,0,"img",[["style","display:block; margin:left;width:300px;height: 150;"]],[[8,"src",4]],null,null,null,null))],null,(function(n,l){var e=l.component;n(l,0,0,e.apifoto+e.foto2)}))}function L(n){return t.ac(0,[(n()(),t.yb(0,0,null,null,17,"ion-header",[],null,null,null,g.Eb,g.u)),t.xb(1,49152,null,0,m.C,[t.h,t.l,t.z],null,null),(n()(),t.yb(2,0,null,0,15,"ion-toolbar",[["color","primary"]],null,null,null,g.sc,g.ib)),t.xb(3,49152,null,0,m.Ab,[t.h,t.l,t.z],{color:[0,"color"]},null),(n()(),t.yb(4,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,g.pb,g.f)),t.xb(5,49152,null,0,m.m,[t.h,t.l,t.z],null,null),(n()(),t.yb(6,0,null,0,2,"ion-back-button",[],null,[[null,"click"]],(function(n,l,e){var u=!0;return"click"===l&&(u=!1!==t.Nb(n,8).onClick(e)&&u),u}),g.mb,g.c)),t.xb(7,49152,null,0,m.h,[t.h,t.l,t.z],null,null),t.xb(8,16384,null,0,m.i,[[2,m.gb],m.Hb,m.e],null,null),(n()(),t.yb(9,0,null,0,5,"ion-buttons",[["slot","end"]],null,null,null,g.pb,g.f)),t.xb(10,49152,null,0,m.m,[t.h,t.l,t.z],null,null),(n()(),t.yb(11,0,null,0,3,"ion-button",[["title","Opciones"]],null,[[null,"click"]],(function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.presentPopover(e)&&t),t}),g.ob,g.e)),t.xb(12,49152,null,0,m.l,[t.h,t.l,t.z],null,null),(n()(),t.yb(13,0,null,0,1,"ion-icon",[["ios","ellipsis-horizontal"],["md","ellipsis-vertical"],["slot","icon-only"]],null,null,null,g.Fb,g.v)),t.xb(14,49152,null,0,m.D,[t.h,t.l,t.z],{ios:[0,"ios"],md:[1,"md"]},null),(n()(),t.yb(15,0,null,0,2,"ion-title",[],null,null,null,g.qc,g.gb)),t.xb(16,49152,null,0,m.yb,[t.h,t.l,t.z],null,null),(n()(),t.Xb(-1,0,[" INICIAR SESI\xd3N 1.1.8"])),(n()(),t.yb(18,0,null,null,67,"ion-content",[["class","login-content"]],null,null,null,g.yb,g.o)),t.xb(19,49152,null,0,m.v,[t.h,t.l,t.z],null,null),(n()(),t.yb(20,0,null,0,0,"img",[["style","display:block; margin:auto;width:280px"]],[[8,"src",4]],null,null,null,null)),(n()(),t.yb(21,0,null,0,0,"br",[],null,null,null,null,null)),(n()(),t.yb(22,0,null,0,56,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],(function(n,l,e){var u=!0,o=n.component;return"submit"===l&&(u=!1!==t.Nb(n,24).onSubmit(e)&&u),"reset"===l&&(u=!1!==t.Nb(n,24).onReset()&&u),"ngSubmit"===l&&(u=!1!==o.doLogin()&&u),u}),null,null)),t.xb(23,16384,null,0,o.y,[],null,null),t.xb(24,540672,null,0,o.h,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),t.Sb(2048,null,o.b,null,[o.h]),t.xb(26,16384,null,0,o.p,[[4,o.b]],null,null),(n()(),t.yb(27,0,null,null,28,"ion-list",[["class","inputs-list"],["lines","full"]],null,null,null,g.Sb,g.H)),t.xb(28,49152,null,0,m.P,[t.h,t.l,t.z],{lines:[0,"lines"]},null),(n()(),t.yb(29,0,null,0,8,"ion-item",[["class","input-item"]],null,null,null,g.Pb,g.A)),t.xb(30,49152,null,0,m.I,[t.h,t.l,t.z],null,null),(n()(),t.yb(31,0,null,0,6,"ion-input",[["autocapitalize","off"],["clearInput",""],["formControlName","email"],["inputmode","email"],["placeholder","Email"],["type","email"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(n,l,e){var u=!0;return"ionBlur"===l&&(u=!1!==t.Nb(n,32)._handleBlurEvent(e.target)&&u),"ionChange"===l&&(u=!1!==t.Nb(n,32)._handleInputEvent(e.target)&&u),u}),g.Jb,g.z)),t.xb(32,16384,null,0,m.Pb,[t.l],null,null),t.Sb(1024,null,o.m,(function(n){return[n]}),[m.Pb]),t.xb(34,671744,null,0,o.f,[[3,o.b],[8,null],[8,null],[6,o.m],[2,o.x]],{name:[0,"name"]},null),t.Sb(2048,null,o.n,null,[o.f]),t.xb(36,16384,null,0,o.o,[[4,o.n]],null,null),t.xb(37,49152,null,0,m.H,[t.h,t.l,t.z],{autocapitalize:[0,"autocapitalize"],clearInput:[1,"clearInput"],inputmode:[2,"inputmode"],placeholder:[3,"placeholder"],type:[4,"type"]},null),(n()(),t.yb(38,0,null,0,2,"div",[["class","error-container"]],null,null,null,null,null)),(n()(),t.hb(16777216,null,null,1,null,x)),t.xb(40,16384,null,0,h.m,[t.P,t.M],{ngIf:[0,"ngIf"]},null),(n()(),t.yb(41,0,null,0,11,"ion-item",[["class","input-item"]],null,null,null,g.Pb,g.A)),t.xb(42,49152,null,0,m.I,[t.h,t.l,t.z],null,null),(n()(),t.yb(43,0,null,0,9,"app-show-hide-password",[],null,null,null,f.b,f.a)),t.xb(44,49152,null,1,v.a,[],null,null),t.Tb(603979776,1,{input:0}),(n()(),t.yb(46,0,null,0,6,"ion-input",[["formControlName","password"],["placeholder","Clave"],["type","password"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(n,l,e){var u=!0;return"ionBlur"===l&&(u=!1!==t.Nb(n,47)._handleBlurEvent(e.target)&&u),"ionChange"===l&&(u=!1!==t.Nb(n,47)._handleInputEvent(e.target)&&u),u}),g.Jb,g.z)),t.xb(47,16384,null,0,m.Pb,[t.l],null,null),t.Sb(1024,null,o.m,(function(n){return[n]}),[m.Pb]),t.xb(49,671744,null,0,o.f,[[3,o.b],[8,null],[8,null],[6,o.m],[2,o.x]],{name:[0,"name"]},null),t.Sb(2048,null,o.n,null,[o.f]),t.xb(51,16384,null,0,o.o,[[4,o.n]],null,null),t.xb(52,49152,[[1,4]],0,m.H,[t.h,t.l,t.z],{placeholder:[0,"placeholder"],type:[1,"type"]},null),(n()(),t.yb(53,0,null,0,2,"div",[["class","error-container"]],null,null,null,null,null)),(n()(),t.hb(16777216,null,null,1,null,P)),t.xb(55,16384,null,0,h.m,[t.P,t.M],{ngIf:[0,"ngIf"]},null),(n()(),t.yb(56,0,null,null,12,"ion-row",[],null,null,null,g.ac,g.Q)),t.xb(57,49152,null,0,m.hb,[t.h,t.l,t.z],null,null),(n()(),t.yb(58,0,null,0,4,"ion-col",[["sise","10"]],null,null,null,g.xb,g.n)),t.xb(59,49152,null,0,m.u,[t.h,t.l,t.z],null,null),(n()(),t.yb(60,0,null,0,2,"ion-button",[["class","login-btn"],["color","tertiary"],["expand","block"],["type","submit"]],null,null,null,g.ob,g.e)),t.xb(61,49152,null,0,m.l,[t.h,t.l,t.z],{color:[0,"color"],disabled:[1,"disabled"],expand:[2,"expand"],type:[3,"type"]},null),(n()(),t.Xb(-1,0,["INICIAR SESI\xd3N"])),(n()(),t.yb(63,0,null,0,5,"ion-col",[["size","1"]],null,null,null,g.xb,g.n)),t.xb(64,49152,null,0,m.u,[t.h,t.l,t.z],{size:[0,"size"]},null),(n()(),t.yb(65,0,null,0,3,"ion-button",[["class","filters-btn"],["color","secondary"],["fill","clear"],["title","Iniciar sesi\xf3n huella digital"]],null,[[null,"click"]],(function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.dohuella()&&t),t}),g.ob,g.e)),t.xb(66,49152,null,0,m.l,[t.h,t.l,t.z],{color:[0,"color"],fill:[1,"fill"]},null),(n()(),t.yb(67,0,null,0,1,"ion-icon",[["name","finger-print-outline"],["slot","icon-only"]],null,[[null,"click"]],(function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.dohuella()&&t),t}),g.Fb,g.v)),t.xb(68,49152,null,0,m.D,[t.h,t.l,t.z],{name:[0,"name"]},null),(n()(),t.hb(16777216,null,null,1,null,k)),t.xb(70,16384,null,0,h.m,[t.P,t.M],{ngIf:[0,"ngIf"]},null),(n()(),t.yb(71,0,null,null,7,"ion-row",[],null,null,null,g.ac,g.Q)),t.xb(72,49152,null,0,m.hb,[t.h,t.l,t.z],null,null),(n()(),t.yb(73,0,null,0,5,"ion-fab",[["horizontal","end"],["slot","fixed"],["vertical","top"]],null,null,null,g.Bb,g.q)),t.xb(74,49152,null,0,m.x,[t.h,t.l,t.z],{horizontal:[0,"horizontal"],vertical:[1,"vertical"]},null),(n()(),t.yb(75,0,null,0,3,"ion-fab-button",[],null,null,null,g.Ab,g.r)),t.xb(76,49152,null,0,m.y,[t.h,t.l,t.z],null,null),(n()(),t.yb(77,0,null,0,1,"ion-icon",[["name","add"]],null,null,null,g.Fb,g.v)),t.xb(78,49152,null,0,m.D,[t.h,t.l,t.z],{name:[0,"name"]},null),(n()(),t.yb(79,0,null,0,6,"ion-footer",[],null,null,null,g.Cb,g.s)),t.xb(80,49152,null,0,m.A,[t.h,t.l,t.z],null,null),(n()(),t.yb(81,0,null,0,0,"br",[],null,null,null,null,null)),(n()(),t.yb(82,0,null,0,0,"br",[],null,null,null,null,null)),(n()(),t.yb(83,0,null,0,0,"br",[],null,null,null,null,null)),(n()(),t.hb(16777216,null,0,1,null,w)),t.xb(85,16384,null,0,h.m,[t.P,t.M],{ngIf:[0,"ngIf"]},null)],(function(n,l){var e=l.component;n(l,3,0,"primary"),n(l,14,0,"ellipsis-horizontal","ellipsis-vertical"),n(l,24,0,e.loginForm),n(l,28,0,"full"),n(l,34,0,"email"),n(l,37,0,"off","","email","Email","email"),n(l,40,0,!e.loginForm.controls.email.valid&&(e.loginForm.controls.email.dirty||e.loginForm.controls.email.touched)),n(l,49,0,"password"),n(l,52,0,"Clave","password"),n(l,55,0,!e.loginForm.controls.password.valid&&(e.loginForm.controls.password.dirty||e.loginForm.controls.password.touched)),n(l,61,0,"tertiary",!e.loginForm.valid,"block","submit"),n(l,64,0,"1"),n(l,66,0,"secondary","clear"),n(l,68,0,"finger-print-outline"),n(l,70,0,"No"!==e.siregister),n(l,74,0,"end","top"),n(l,78,0,"add"),n(l,85,0,void 0!==e.foto2&&""!==e.foto2)}),(function(n,l){var e=l.component;n(l,20,0,e.apifoto+e.foto1),n(l,22,0,t.Nb(l,26).ngClassUntouched,t.Nb(l,26).ngClassTouched,t.Nb(l,26).ngClassPristine,t.Nb(l,26).ngClassDirty,t.Nb(l,26).ngClassValid,t.Nb(l,26).ngClassInvalid,t.Nb(l,26).ngClassPending),n(l,31,0,t.Nb(l,36).ngClassUntouched,t.Nb(l,36).ngClassTouched,t.Nb(l,36).ngClassPristine,t.Nb(l,36).ngClassDirty,t.Nb(l,36).ngClassValid,t.Nb(l,36).ngClassInvalid,t.Nb(l,36).ngClassPending),n(l,46,0,t.Nb(l,51).ngClassUntouched,t.Nb(l,51).ngClassTouched,t.Nb(l,51).ngClassPristine,t.Nb(l,51).ngClassDirty,t.Nb(l,51).ngClassValid,t.Nb(l,51).ngClassInvalid,t.Nb(l,51).ngClassPending)}))}var N=t.ub("app-login",c,(function(n){return t.ac(0,[(n()(),t.yb(0,0,null,null,1,"app-login",[],null,null,null,L,C)),t.xb(1,114688,null,0,c,[i.a,p.l,m.Lb,d.m,m.Fb,m.b,y.b],null,null)],(function(n,l){n(l,1,0)}),null)}),{},{},[]),z=t.wb({encapsulation:2,styles:[],data:{}});function O(n){return t.ac(0,[(n()(),t.yb(0,0,null,null,30,"ion-list",[],null,null,null,g.Sb,g.H)),t.xb(1,49152,null,0,m.P,[t.h,t.l,t.z],null,null),(n()(),t.yb(2,0,null,0,4,"ion-item",[["button",""]],null,[[null,"click"]],(function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.close("Reinico de contrase\xf1a")&&t),t}),g.Pb,g.A)),t.xb(3,49152,null,0,m.I,[t.h,t.l,t.z],{button:[0,"button"]},null),(n()(),t.yb(4,0,null,0,2,"ion-label",[],null,null,null,g.Qb,g.G)),t.xb(5,49152,null,0,m.O,[t.h,t.l,t.z],null,null),(n()(),t.Xb(-1,0,["Reinico de contrase\xf1a"])),(n()(),t.yb(7,0,null,0,4,"ion-item",[["button",""]],null,[[null,"click"]],(function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.close("my facebook")&&t),t}),g.Pb,g.A)),t.xb(8,49152,null,0,m.I,[t.h,t.l,t.z],{button:[0,"button"]},null),(n()(),t.yb(9,0,null,0,2,"ion-label",[],null,null,null,g.Qb,g.G)),t.xb(10,49152,null,0,m.O,[t.h,t.l,t.z],null,null),(n()(),t.Xb(-1,0,["my facebook"])),(n()(),t.yb(12,0,null,0,4,"ion-item",[["button",""]],null,[[null,"click"]],(function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.close("my twitter")&&t),t}),g.Pb,g.A)),t.xb(13,49152,null,0,m.I,[t.h,t.l,t.z],{button:[0,"button"]},null),(n()(),t.yb(14,0,null,0,2,"ion-label",[],null,null,null,g.Qb,g.G)),t.xb(15,49152,null,0,m.O,[t.h,t.l,t.z],null,null),(n()(),t.Xb(-1,0,["my twitter"])),(n()(),t.yb(17,0,null,0,4,"ion-item",[["button",""]],null,[[null,"click"]],(function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.close("myhuellaadd")&&t),t}),g.Pb,g.A)),t.xb(18,49152,null,0,m.I,[t.h,t.l,t.z],{button:[0,"button"]},null),(n()(),t.yb(19,0,null,0,2,"ion-label",[],null,null,null,g.Qb,g.G)),t.xb(20,49152,null,0,m.O,[t.h,t.l,t.z],null,null),(n()(),t.Xb(-1,0,["Registrar huella digital"])),(n()(),t.yb(22,0,null,0,4,"ion-item",[["button",""]],null,[[null,"click"]],(function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.close("myhuelladel")&&t),t}),g.Pb,g.A)),t.xb(23,49152,null,0,m.I,[t.h,t.l,t.z],{button:[0,"button"]},null),(n()(),t.yb(24,0,null,0,2,"ion-label",[],null,null,null,g.Qb,g.G)),t.xb(25,49152,null,0,m.O,[t.h,t.l,t.z],null,null),(n()(),t.Xb(-1,0,["Eliminar huella digital"])),(n()(),t.yb(27,0,null,0,3,"ion-item",[["button",""]],null,null,null,g.Pb,g.A)),t.xb(28,49152,null,0,m.I,[t.h,t.l,t.z],{button:[0,"button"]},null),(n()(),t.yb(29,0,null,0,1,"a",[["href","tel:1792"]],null,null,null,null,null)),(n()(),t.Xb(-1,null,["LLamada de emergencia"]))],(function(n,l){n(l,3,0,""),n(l,8,0,""),n(l,13,0,""),n(l,18,0,""),n(l,23,0,""),n(l,28,0,"")}),null)}var I=t.ub("ng-component",a,(function(n){return t.ac(0,[(n()(),t.yb(0,0,null,null,1,"ng-component",[],null,null,null,O,z)),t.xb(1,49152,null,0,a,[m.Lb],null,null)],null,null)}),{},{},[]),_=e("IheW"),S=e("ZpN7"),A=e("Kt/9"),M=e("j1ZV"),F=t.vb(s,[],(function(n){return t.Kb([t.Lb(512,t.j,t.Z,[[8,[b.a,N,I]],[3,t.j],t.x]),t.Lb(4608,h.o,h.n,[t.u]),t.Lb(4608,o.w,o.w,[]),t.Lb(4608,o.d,o.d,[]),t.Lb(4608,m.c,m.c,[t.z,t.g]),t.Lb(4608,m.Gb,m.Gb,[m.c,t.j,t.r]),t.Lb(4608,m.Lb,m.Lb,[m.c,t.j,t.r]),t.Lb(4608,_.i,_.o,[h.e,t.B,_.m]),t.Lb(4608,_.p,_.p,[_.i,_.n]),t.Lb(5120,_.a,(function(n){return[n]}),[_.p]),t.Lb(4608,_.l,_.l,[]),t.Lb(6144,_.j,null,[_.l]),t.Lb(4608,_.h,_.h,[_.j]),t.Lb(6144,_.b,null,[_.h]),t.Lb(4608,_.f,_.k,[_.b,t.r]),t.Lb(4608,_.c,_.c,[_.f]),t.Lb(5120,t.d,(function(n){return[S.b(n)]}),[A.a]),t.Lb(4608,p.h,p.g,[]),t.Lb(4608,p.d,p.f,[]),t.Lb(4608,p.j,p.e,[]),t.Lb(4608,p.c,p.b,[]),t.Lb(4608,p.l,p.l,[p.m,p.h,p.d,p.j,p.c,p.n,p.p,p.o,p.a]),t.Lb(1073742336,h.c,h.c,[]),t.Lb(1073742336,o.v,o.v,[]),t.Lb(1073742336,o.j,o.j,[]),t.Lb(1073742336,o.s,o.s,[]),t.Lb(1073742336,m.Cb,m.Cb,[]),t.Lb(1073742336,d.p,d.p,[[2,d.u],[2,d.m]]),t.Lb(1073742336,p.i,p.i,[]),t.Lb(1073742336,_.e,_.e,[]),t.Lb(1073742336,_.d,_.d,[]),t.Lb(1073742336,S.a,S.a,[]),t.Lb(1073742336,M.a,M.a,[]),t.Lb(1073742336,s,s,[]),t.Lb(256,_.m,"XSRF-TOKEN",[]),t.Lb(256,_.n,"X-XSRF-TOKEN",[]),t.Lb(1024,d.k,(function(){return[[{path:"",component:c}]]}),[]),t.Lb(256,p.p,void 0,[]),t.Lb(256,p.n,void 0,[]),t.Lb(256,p.o,void 0,[]),t.Lb(256,p.a,void 0,[])])}))}}]);