function _classCallCheck(i,t){if(!(i instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(i,t){for(var e=0;e<t.length;e++){var s=t[e];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(i,s.key,s)}}function _createClass(i,t,e){return t&&_defineProperties(i.prototype,t),e&&_defineProperties(i,e),i}(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"3cJI":function(i,t,e){"use strict";e.d(t,"a",(function(){return r}));var s=e("mrSG"),a=(e("ZtEv"),e("jtHE")),r=function(){function i(t,e,s,r,o){_classCallCheck(this,i),this.modalController=t,this.alertController=e,this.translateService=s,this.authenticationService=r,this.navParams=o,this.searchSubject=new a.a(1),this.variables=[],this.userinfo=[],this.tituloxx="",this.vgrupo=[],this.tmultiple=!1,this.vector=[],this.showAgeFilter=!1,this.showmenu=!1,this.items=[],this.grabax=!0,this.efecto=0,this.keys=[],this.seguro="",this.msg="",this.apifoto=this.authenticationService.getapifoto()}return _createClass(i,[{key:"searchList",value:function(){this.searchSubject.next({query:this.searchQuery}),this.itemsList=this.filterList(this.items,this.searchQuery&&null!==this.searchQuery?this.searchQuery:"")}},{key:"filterList",value:function(i,t){return i.filter((function(i){return i.nombre.toLowerCase().includes(t.toLowerCase())}))}},{key:"checkEvent",value:function(){var i=this.itemsList.length,t=0;this.itemsList.map((function(i){i.isChecked&&t++})),t>0&&t<i?(this.isIndeterminate=!0,this.masterCheck=!1):t==i?(this.masterCheck=!0,this.isIndeterminate=!1):(this.isIndeterminate=!1,this.masterCheck=!1)}},{key:"checkMaster",value:function(){var i=this;setTimeout((function(){i.itemsList.forEach((function(t){t.isChecked=i.masterCheck}))}))}},{key:"pideregistros",value:function(){var i=this;if(""!==this.doblex)this.authenticationService.getReg("todos/"+this.data+"/"+this.userinfo[0].idempresa._id+"/"+this.doblex,this.frm,0).then((function(t){i.items=t,i.itemsList=i.items}));else if("sigraba"===this.sigraba||"nograba"===this.sigraba)this.authenticationService.getReg("todos/"+this.data+"/"+this.userinfo[0].idempresa._id,this.frm,0).then((function(t){i.items=t,i.itemsList=i.items}));else if("sigraba"===this.sigraba)this.items=this.vector;else{var t=[],e=[];switch(this.sigraba){case"multas":this.authenticationService.getReg(this.filtrocompleto,"frmmovils",0).then((function(t){i.items=t,i.itemsList=i.items}));break;case"actividadsiguiente":this.authenticationService.getReg(this.idllave0+"/actividadsiguiente/"+this.userinfo[0].idempresa._id+"/"+this.idllave,"frmactividads",0).then((function(t){i.items=t,i.itemsList=i.items}));break;case"controlmultipleidnombre":this.tmultiple=!0,this.authenticationService.getReg(this.filtroformularioconsulta,this.formularioconsulta,0).then((function(t){i.items=t,i.itemsList=i.items,i.itemsList=[];for(var e=0;e<i.items.length;e++){var s=0;if(i.idcampos)for(var a=0;a<i.idcampos.length;a++)i.idcampos[a]===i.items[e]._id&&(s=1);if(0===s&&i.idcamposmodificables)for(var r=0;r<i.idcamposmodificables.length;r++)i.idcamposmodificables[r]===i.items[e]._id&&(s=1);if(0===s&&i.idcamposmodificables2.length>0){for(var o=0;o<i.idcamposmodificables2.length;o++)i.idcamposmodificables2[o]===i.items[e]._id&&(s=1);s=0===s?1:0}i.itemsList.push(1===s?{_id:i.items[e]._id,name:i.items[e].name,nombre:i.items[e].nombre,isChecked:!0}:{_id:i.items[e]._id,name:i.items[e].name,nombre:i.items[e].nombre,isChecked:!1})}i.items=i.itemsList}));break;case"formulariottcheck":for(var s=0;s<this.idfrmconsulta2.length;s++)e.push([this.idfrmconsulta2[s].nombre]);switch(this.idfrmconsulta.id){case"users":this.authenticationService.getReg("Activo/personasactivas/"+this.userinfo[0].idempresa._id,"personals",0).then((function(t){i.items=t,i.itemsList=i.items}));break;default:var a;a=void 0!==this.filtrar&&""!==this.filtrar?this.idfrmconsulta.id+"/"+e+"/"+this.userinfo[0].idempresa._id+"\xac\xb0"+this.filtrar+"/formulariocombofiltro/":this.idfrmconsulta.id+"/"+e+"/"+this.userinfo[0].idempresa._id+"/formulariocombo/",this.authenticationService.getReg(a,"frmmovils",0).then((function(t){i.items=t,i.itemsList=i.items}))}break;case"formulariott":for(var r="",o=0;o<this.idfrmconsulta2.length;o++)t.push([this.idfrmconsulta2[o].nombre]);if(""!==this.idpapafiltro&&void 0!==this.idpapafiltro)this.filtrar='"idpapa":"'+this.idpapafiltro+'"',r=this.idfrmconsulta.id+"/"+t+"/"+this.userinfo[0].idempresa._id+"\xac"+this.filtrar+"/formulariosolopapafiltro/","select2"===this.tipo||"select3"===this.tipo?(this.tmultiple=!0,this.authenticationService.getReg(r,"frmmovils",0).then((function(t){if(i.items=t,i.itemsList=i.items,!0===i.tmultiple){i.itemsList=[];for(var e=0;e<i.items.length;e++){var s=0;if(i.idcampos)for(var a=0;a<i.idcampos.length;a++)i.idcampos[a]===i.items[e]._id&&(s=1);i.itemsList.push(1===s?{_id:i.items[e]._id,name:i.items[e].name,nombre:i.items[e].nombre,isChecked:!0}:{_id:i.items[e]._id,name:i.items[e].name,nombre:i.items[e].nombre,isChecked:!1})}i.items=i.itemsList}}))):(this.tmultiple=!1,this.authenticationService.getReg(r,"frmmovils",0).then((function(t){i.items=t,i.itemsList=i.items})));else switch(this.idfrmconsulta.id){case"users":this.authenticationService.getReg("Activo/personasactivasfiltro/"+this.userinfo[0].idempresa._id+"\xac"+this.idcampofiltromanual,"personals",0).then((function(t){i.items=t,i.itemsList=i.items}));break;default:""!==this.frmapirest?(r=void 0!==this.filtrar&&""!==this.filtrar?this.idfrmconsulta.id+"/"+t+"/"+this.userinfo[0].idempresa._id+"\xb0/"+this.frmapirest+"/"+this.dataapirest:this.idfrmconsulta.id+"/"+t+"/"+this.userinfo[0].idempresa._id+"/"+this.frmapirest+"/"+this.dataapirest,this.authenticationService.getReg(r,"frmmovils",0).then((function(t){i.items=t,i.itemsList=i.items}))):(r=void 0!==this.filtrar&&""!==this.filtrar?this.idfrmconsulta.id+"/"+t+"/"+this.userinfo[0].idempresa._id+"\xb0"+this.filtrar+"/formulariocombofiltro/":this.idfrmconsulta.id+"/"+t+"/"+this.userinfo[0].idempresa._id+"/formulariocombo/",this.authenticationService.getReg(r,"frmmovils",0).then((function(t){i.items=t,i.itemsList=i.items})))}break;case"formulariot":this.authenticationService.getReg("todos/Activo/"+this.userinfo[0].idempresa._id,"frmmovils",0).then((function(t){i.items=t,i.items.push({_id:"users",nombre:"Usuarios sistema**"}),i.itemsList=i.items}));break;case"formulariot2":switch(this.idllave){case"users":this.tmultiple=!1,this.authenticationService.getReg("Activo/personasactivas/"+this.userinfo[0].idempresa._id,"personals",0).then((function(t){i.items=t,i.itemsList=i.items}));break;default:var n="formulariocamposverid";"formulario-plantilla"===this.catalogot?this.tmultiple=!0:(this.tmultiple=!1,n="formulariocamposveridcampo"),this.authenticationService.getReg(this.idllave+"/"+n+"/"+this.userinfo[0].idempresa._id,"frmmovils",0).then((function(t){if(i.items=t,i.itemsList=i.items,!0===i.tmultiple){i.itemsList=[];for(var e=0;e<i.items.length;e++){var s=0;if(i.idcampos)for(var a=0;a<i.idcampos.length;a++)i.idcampos[a].id===i.items[e]._id&&(s=1);i.itemsList.push(1===s?{_id:i.items[e]._id,name:i.items[e].name,nombre:i.items[e].nombre,isChecked:!0}:{_id:i.items[e]._id,name:i.items[e].name,nombre:i.items[e].nombre,isChecked:!1})}i.items=i.itemsList}}))}break;case"role":this.authenticationService.getReg("todos/Activo/"+this.userinfo[0].idempresa._id,"rols",0).then((function(t){i.items=t,i.itemsList=i.items}));break;case"role1":this.authenticationService.getReg("todos/todosope/"+this.userinfo[0].idempresa._id,"rols",0).then((function(t){i.items=t,i.itemsList=i.items}));break;case"tarifas":this.authenticationService.getReg("todos/Activo/"+this.userinfo[0].idempresa._id+"/"+this.userinfo[0].idempresa._id,"tarifas",0).then((function(t){i.items=t,i.itemsList=i.items}));break;case"formulariodetalle":this.authenticationService.getReg("detalle/Activo/"+this.userinfo[0].idempresa._id+"/frmmovilp","frmmovils",0).then((function(t){i.items=t,i.itemsList=i.items}));break;case"personals":this.authenticationService.getReg("Activo/personasactivas/"+this.userinfo[0].idempresa._id,this.sigraba,0).then((function(t){if(i.items=t,i.itemsList=i.items,!0===i.tmultiple){i.itemsList=[];for(var e=0;e<i.items.length;e++){var s=0;if(i.idusuario)for(var a=0;a<i.idusuario.length;a++)i.idusuario[a].email===i.items[e]._id&&(s=1);i.itemsList.push(1===s?{_id:i.items[e]._id,correo:i.items[e].email,nombre:i.items[e].nombre,isChecked:!0}:{_id:i.items[e]._id,correo:i.items[e].email,nombre:i.items[e].nombre,isChecked:!1})}"usuario-plantilla-grupoproceso"===i.op&&i.itemsList.push({_id:"USUARIOSOLICITANTE",correo:"USUARIOSOLICITANTE",nombre:"USUARIO SOLICITANTE",isChecked:!1}),i.items=i.itemsList}}));break;case"frmmovils":void 0===this.idllave0?this.authenticationService.getReg(this.tipo+"/Activo/"+this.userinfo[0].idempresa._id+"/frmmovilp",this.sigraba,0).then((function(t){i.items=t,i.itemsList=i.items})):this.authenticationService.getReg(this.idllave0+"/detallemaster/"+this.userinfo[0].idempresa._id+"/frmmovilp",this.sigraba,0).then((function(t){i.items=t,i.itemsList=i.items}));break;case"frmcampos":this.authenticationService.getReg(this.idllave0+"/frmcamposdetalle/"+this.userinfo[0].idempresa._id+"/"+this.idllave,"frmmovilds",0).then((function(t){i.items=t,i.itemsList=i.items}));break;case"frmactors":this.authenticationService.getReg("todos/Activo/"+this.userinfo[0].idempresa._id+"/"+this.idllave,this.sigraba,0).then((function(t){i.items=t,i.itemsList=i.items}));break;default:this.authenticationService.getReg("todos/Activo/"+this.userinfo[0].idempresa._id,this.sigraba,0).then((function(t){if(i.items=t,i.itemsList=i.items,!0===i.tmultiple){for(var e=0;e<i.items.length;e++){var s=0;if(i.idusuario)for(var a=0;a<i.idusuario.length;a++)i.idusuario[a].email===i.items[e].email&&(s=1);i.itemsList.push(1===s?{_id:i.items[e]._id,nombre:i.items[e].nombre,isChecked:!0}:{_id:i.items[e]._id,nombre:i.items[e].nombre,isChecked:!1})}i.items=i.itemsList}}))}}}},{key:"ngOnInit",value:function(){var i=this;this.variables=this.navParams.get("variables"),this.userinfo=this.authenticationService.getcopiauser(),this.frm=this.navParams.get("frm"),this.data=this.navParams.get("op"),this.tipo=this.navParams.get("tipo"),this.tituloxx=this.navParams.get("titlex"),this.filtrocompleto=this.navParams.get("filtrocompleto"),this.doblex=this.navParams.get("doble"),this.idasociado=this.navParams.get("idasociado"),this.bloquear=this.navParams.get("bloquear"),void 0===this.bloquear&&(this.bloquear=""),this.tmultiple=this.navParams.get("tmultiple"),this.dataapirest=this.navParams.get("dataapirest"),this.frmapirest=this.navParams.get("frmapirest"),this.idusuario=this.navParams.get("tarraymultiple"),this.idcampos=this.navParams.get("tarraymultiple"),this.idcampos||(this.idcampos=this.navParams.get("idcampos")),this.idllave=this.navParams.get("idllave"),this.idllave0=this.navParams.get("idllave0"),this.idpapafiltro=this.navParams.get("idpapafiltro"),this.catalogot=this.navParams.get("catalogot"),this.op=this.navParams.get("op"),this.idcampofiltromanual=this.navParams.get("idcampofiltromanual"),this.idfrmconsulta=this.navParams.get("idfrmconsulta"),this.idfrmconsulta2=this.navParams.get("idfrmconsulta2"),this.siformulatiot=this.navParams.get("siformulatiot"),this.idcamposmodificables=this.navParams.get("idcamposmodificables"),this.idcamposmodificables2=this.navParams.get("idcamposmodificables2"),this.filtroformularioconsulta=this.navParams.get("filtroformularioconsulta"),this.formularioconsulta=this.navParams.get("formularioconsulta"),this.filtrar=this.navParams.get("filtrar"),void 0===this.tmultiple&&(this.tmultiple=!1),void 0===this.doblex&&(this.doblex=""),this.sigraba=this.navParams.get("grabax"),this.vector=this.navParams.get("vector"),void 0===this.navParams.get("grabax")&&(this.sigraba="sigraba"),this.grabax="sigraba"!==this.sigraba,this.pideregistros(),this.translateService.get("SEGUROM").subscribe((function(t){i.seguro=t})),"frmcats"===this.frm?this.idunidadt=this.data:(this.idunidadt=this.data.idunidad,this.idformulario=this.data.idformulario)}},{key:"ionViewDidLoad",value:function(){this.frm=this.data.frm,null==this.navParams.get("record")?this.tituloxx="Creaci\xf3n de "+this.idunidadt:(this.Form.controls.nombre.setValue(this.data.record.nombre),this.tituloxx="Actualizaci\xf3n de "+this.idunidadt)}},{key:"loadData",value:function(i){var t=this;setTimeout((function(){i.target.complete(),t.virtualScroll.checkEnd(),25===t.itemsList.length&&(i.target.disabled=!0)}),500)}},{key:"toggleInfiniteScroll",value:function(){this.infiniteScroll.disabled=!this.infiniteScroll.disabled}},{key:"addRecord",value:function(){return Object(s.a)(this,void 0,void 0,regeneratorRuntime.mark((function i(){var t,e=this;return regeneratorRuntime.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,this.alertController.create({header:"Ingrese informaci\xf3n",message:"",inputs:[{name:"nombre",type:"text",placeholder:"Ingrese informaci\xf3n"}],buttons:[{text:"Cancelar",cssClass:"secondary",handler:function(i){}},{text:"Aceptar",handler:function(i){var t;t="frmcats"===e.frm?{idempresa:e.userinfo[0].idempresa._id,idunidad:e.idunidadt,idunidad2:e.doblex,nombre:i.nombre,bitacora:{idempresa:e.userinfo[0].idempresa._id,idafiliado:"",email:e.userinfo[0].email,permiso:"Crea",accion:"Crea catalogos dinamicos "}}:{idempresa:e.userinfo[0].idempresa._id,idunidad:e.idunidadt,idformulario:e.idformulario,nombre:i.nombre,bitacora:{idempresa:e.userinfo[0].idempresa._id,idafiliado:"",email:e.userinfo[0].email,permiso:"Crea",accion:"Crea catalogos dinamicos "}},e.authenticationService.createReg("",t,e.frm).then((function(i){e.pideregistros()}),(function(i){e.authenticationService.presentAlert(i.error,"Precauci\xf3n","")}))}}]});case 2:return t=i.sent,i.next=5,t.present().then((function(){document.querySelector("ion-alert input").focus()}));case 5:case"end":return i.stop()}}),i,this)})))}},{key:"closeModal",value:function(){return Object(s.a)(this,void 0,void 0,regeneratorRuntime.mark((function i(){return regeneratorRuntime.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:this.modalController.dismiss("close");case 1:case"end":return i.stop()}}),i,this)})))}},{key:"selectitem",value:function(i){if(!0===this.tmultiple){for(var t=[],e="",s="",a="",r=0;r<this.itemsList.length;r++)if(!0===this.itemsList[r].isChecked)switch(this.sigraba){case"controlmultipleidnombre":t.push({id:this.itemsList[r]._id,nombre:this.itemsList[r].nombre}),a=a+" , "+this.itemsList[r].nombre,e=e+";"+this.itemsList[r]._id;break;case"formulariot2":switch(this.idllave){case"users":t.push({id:this.itemsList[r]._id,nombre:this.itemsList[r].nombre}),a=a+" , "+this.itemsList[r].nombre,e=e+";"+this.itemsList[r]._id;break;default:t.push({id:this.itemsList[r]._id,nombre:this.itemsList[r].name+"\xb0"+this.itemsList[r].nombre}),a=a+" , "+this.itemsList[r].nombre,e=e+";"+this.itemsList[r]._id}break;default:if("select2"===this.tipo||"select3"===this.tipo){t.push({email:this.itemsList[r]._id,nombre:this.itemsList[r].nombre}),a=""!==a?a+"\xb0"+this.itemsList[r].nombre:this.itemsList[r].nombre,e=e+";"+this.itemsList[r]._id,s=s+this.itemsList[r].nombre.split("\xac")[1]+";";break}t.push({email:this.itemsList[r]._id,nombre:this.itemsList[r].nombre,correo:this.itemsList[r].correo}),a=""!==a?a+"\xb0"+this.itemsList[r].nombre:this.itemsList[r].nombre,e=e+";"+this.itemsList[r]._id}switch(this.sigraba){case"formulariot2":default:this.modalController.dismiss({_id:t,correos:e,nombres:a,correos2:s})}}else this.modalController.dismiss({_id:i._id,nombre:i.nombre})}},{key:"deleteRecord",value:function(i){return Object(s.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var e,s=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.alertController.create({header:this.seguro,message:"",buttons:[{text:"No",cssClass:"secondary",handler:function(i){}},{text:"Si",handler:function(){s.authenticationService.deleteReg(i.id+"/"+s.userinfo[0].email+"/"+s.userinfo[0].idempresa._id+"/na",s.frm).then((function(i){s.pideregistros()}),(function(i){s.authenticationService.presentAlert(i.error,"Precauci\xf3n","")}))}}]});case 2:return e=t.sent,t.next=5,e.present();case 5:case"end":return t.stop()}}),t,this)})))}},{key:"updateRecord",value:function(i){return Object(s.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var e,s=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.alertController.create({header:"Ingrese informaci\xf3n",message:"",inputs:[{name:"nombre",type:"text",value:i.nombre,placeholder:"Ingrese informaci\xf3n"}],buttons:[{text:"Cancelar",cssClass:"secondary",handler:function(i){}},{text:"Aceptar",handler:function(t){var e;e="frmcats"===s.frm?{idempresa:s.userinfo[0].idempresa._id,idunidad:s.idunidadt,idunidad2:s.doblex,nombre:t.nombre,bitacora:{idempresa:s.userinfo[0].idempresa._id,idafiliado:"",email:s.userinfo[0].email,permiso:"Actualiza",accion:"Actualiza catalogos dinamicos "}}:{idempresa:s.userinfo[0].idempresa._id,idunidad:s.idunidadt,idformulario:s.idformulario,nombre:t.nombre,bitacora:{idempresa:s.userinfo[0].idempresa._id,idafiliado:"",email:s.userinfo[0].email,permiso:"Actualiza",accion:"Actualiza catalogos dinamicos "}},s.authenticationService.createReg(i.id,e,s.frm).then((function(i){s.pideregistros()}),(function(i){s.authenticationService.presentAlert(i.error,"Precauci\xf3n","")}))}}]});case 2:return e=t.sent,t.next=5,e.present();case 5:case"end":return t.stop()}}),t,this)})))}}]),i}()}}]);