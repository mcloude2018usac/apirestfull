"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8115],{18115:(j,Z,h)=>{h.r(Z),h.d(Z,{formulariomovilsdreporteListPageModule:()=>Q});var l=h(23349),y=h(55787),m=h(69808),T=h(33678),b=h(51062),u=h(93075),x=h(36351),v=h(70655),A=h(68554),_=h(21295),k=h(4707),f=h(80829),P=h(21013),g=h(68879),t=h(5e3),C=h(81656),M=h(26806),O=h(75525);const S=["barChart"],L=["valueBarsCanvas"],q=["valueBarsCanvas2"];function U(s,p){if(1&s&&(t.TgZ(0,"tr"),t.TgZ(1,"td",25),t.TgZ(2,"ion-badge",26),t._uU(3),t.qZA(),t.qZA(),t.TgZ(4,"td",27),t._uU(5),t.qZA(),t.TgZ(6,"td",28),t._uU(7),t.qZA(),t.qZA()),2&s){const a=p.$implicit,e=p.index;t.xp6(3),t.Oqu(e+1),t.xp6(2),t.Oqu(a.grupo),t.xp6(2),t.Oqu(a.cantidadxx)}}function w(s,p){if(1&s&&(t.TgZ(0,"th"),t._uU(1),t.qZA()),2&s){const a=p.$implicit;t.xp6(1),t.Oqu(a)}}function z(s,p){if(1&s&&(t.TgZ(0,"td",35),t._UZ(1,"div",36),t.ALo(2,"sanitizeHtml"),t.qZA()),2&s){const a=p.$implicit;t.xp6(1),t.Q6J("innerHtml",t.lcZ(2,1,a),t.oJD)}}function N(s,p){if(1&s&&(t.TgZ(0,"tr"),t.TgZ(1,"td",33),t._uU(2),t.qZA(),t.YNc(3,z,3,3,"td",34),t.qZA()),2&s){const a=p.$implicit,e=p.index;t.xp6(2),t.hij(" ",e+1," "),t.xp6(1),t.Q6J("ngForOf",a)}}function J(s,p){1&s&&(t.TgZ(0,"ion-item",38),t.TgZ(1,"ion-label",39),t._UZ(2,"skeleton-element"),t._UZ(3,"skeleton-element"),t._UZ(4,"skeleton-element",40),t.qZA(),t.qZA())}const B=function(){return[0,1,2,3,4,5,6]};function I(s,p){1&s&&(t.TgZ(0,"ion-list"),t.YNc(1,J,5,0,"ion-item",37),t.qZA()),2&s&&(t.xp6(1),t.Q6J("ngForOf",t.DdM(1,B)))}function R(s,p){1&s&&(t.TgZ(0,"h3",41),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&s&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"NODATOS")," "))}g.ZP.use([g.pt,g.N1,g.tl,g.LW,g.LG]);let F=(()=>{class s{constructor(a,e,n,i,r,c,o,d,D){this.platform=a,this.loadingCtrl=e,this.Pdfx=n,this.routerOutlet=i,this.router=r,this.authenticationService=c,this.alertController=o,this.translateService=d,this.modalController=D,this.showAgeFilter=!1,this.showmenu=!1,this.items=[],this.items2=[],this.variables=[],this.encabezado=[],this.detalle=[],this.rrgrafica=!1,this.rrplano=!1,this.datePickerObj={inputDate:new Date,showTodayButton:!0,closeOnSelect:!0,mondayFirst:!0,closeLabel:"Cancelar",todayLabel:"Hoy",clearButton:!1,titleLabel:"Fecha: ",monthsList:["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],weeksList:["D","L","M","M","J","V","S"],dateFormat:"DD-MM-YYYY",momentLocale:"pt-BR",yearInAscending:!0,btnCloseSetInReverse:!1,btnProperties:{expand:"block",fill:"",size:"",disabled:"",strong:"",color:""}},this.viewType="list",this.tituloxx="",this.cmpver=[],this.camposbusqueda=[],this.fileName="ExcelSheet.xlsx",this.currentGraf="grafica",this.currentGraf2="grafica",this.efecto=0,this.seguro="",this.msg="",this.filtrofecha="",this.currentSegment="Todos",this.searchSubject=new k.t(1),this.keysaa=[],this.keys=[],this.vgraf=[],this.titulorr="",this.keysprint=[],this.reportescmd=[],this.reportescmd2=[],this.apifoto=this.authenticationService.getapifoto(),f.kL.register(...f.zX),f.kL.register(P.Z)}changeToList(){this.viewType="list"}changeToGrid(){this.viewType="grid"}graf(a){this.currentGraf=a.detail.value}ngOnInit(){this.efecto=1,this.variables=this.router.getCurrentNavigation().extras.state.variables,this.idllave=this.router.getCurrentNavigation().extras.state.idllave,this.userinfo=this.authenticationService.getcopiauser(),this.tituloxx=this.router.getCurrentNavigation().extras.state.title,this.idcategoria=this.router.getCurrentNavigation().extras.state.idcategoria,this.descripciong=this.router.getCurrentNavigation().extras.state.descripciong,this.nidformulario=this.router.getCurrentNavigation().extras.state.nidformulario,this.idformulario=this.router.getCurrentNavigation().extras.state.idformulario,this.tipo2=this.router.getCurrentNavigation().extras.state.tipo2,this.tipo=this.router.getCurrentNavigation().extras.state.tipo,this.searchQuery="",this.translateService.get("SEGUROM").subscribe(a=>{this.seguro=a}),this.translateService.get("MSGM").subscribe(a=>{this.msg=a}),this.rangeForm=new u.cw({dual:new u.NI({lower:1,upper:100})}),this.currentSegment="todos",this.authenticationService.convertToDataURLviaCanvas(this.authenticationService.getapifoto()+this.userinfo[0].idempresa.foto0,"image/png").then(a=>this.logotipoempresa=a),this.reportescmd2.push({name:"Barras",type:"radio",label:"Barras",checked:!0,value:"bar"}),this.reportescmd2.push({name:"Pie",type:"radio",label:"Pie",checked:!1,value:"pie"}),this.reportescmd2.push({name:"Lineas",type:"radio",label:"Lineas",checked:!1,value:"line"}),this.reportescmd2.push({name:"horizontalBar",type:"radio",label:"horizontalBar",checked:!1,value:"horizontalBar"}),this.reportescmd2.push({name:"Dona",type:"radio",label:"Dona",checked:!1,value:"doughnut"}),this.reportescmd2.push({name:"Radar",type:"radio",label:"Radar",checked:!1,value:"radar"}),this.pideregistros(this.currentSegment,0)}buscarrango(){void 0!==this.fecha1&&void 0!==this.fecha2?(this.filtrofecha=this.fecha1+"\xac"+this.fecha2,this.dagrafica(this.grapactual,"",this.filtrofecha)):(this.filtrofecha="",this.dagrafica(this.grapactual,"",this.filtrofecha))}bajarexcel(a,e,n){var i='<table id="excel-table" border="1">';if(this.rrgrafica){if(1===n||2===n){i+=' <tr><td contenteditable="true" colspan="1">Categoria</td><td contenteditable="true" colspan="1">Cantidad</td></tr> ';for(var r=0;r<e.length;r++)i=i+' <tr><td contenteditable="true" colspan="1">'+e[r].grupo+'</td><td contenteditable="true" colspan="1">'+e[r].cantidadxx+"</td></tr> "}}else if(1===n||2===n){i+="<tr>";for(var c=0;c<this.encabezado.length;c++)i=i+'<td contenteditable="true" colspan="1">'+this.encabezado[c]+"</td>";for(i+="</tr>",r=0;r<this.detalle.length;r++){var o;for(o=this.detalle[r],i+="<tr>",c=0;c<o.length;c++)i=i+'<td contenteditable="true" colspan="1">'+o[c]+"</td>";i+="</tr>"}}this.authenticationService.bajarexcel(i+="</table>",this.titulorr+".xlsx")}generateColorArray(a){var e=[];for(let n=0;n<a;n++)e.push("#"+Math.floor(16777215*Math.random()).toString(16));return e}ionViewDidLoad(){this.createBarChart("","bar")}daoptiongrap(a,e,n,i){var r={};let c;switch(a){case"horizontalBar":r={indexAxis:"y",elements:{bar:{borderWidth:2}},responsive:!0,tooltips:{enabled:!0},scales:{x:{stacked:!0},y:{stacked:!0}},animation:{onComplete:()=>{c=!0},delay:o=>{let d=0;return c||(d=300*o.dataIndex+100*o.datasetIndex),d}},plugins:{aspectRatio:5/3,layout:{padding:{top:32}},elements:{line:{fill:!1,tension:.4}},datalabels:{backgroundColor:function(o){return o.dataset.backgroundColor},borderRadius:4,color:"white",font:{weight:"bold"},formatter:Math.round,padding:6},legend:{position:"bottom",display:!0},title:{display:!0,text:String(e).toUpperCase(),font:{weight:"bold"},fontSize:16}}};break;case"doughnut":r={responsive:!0,tooltips:{enabled:!0},scales:{x:{stacked:!0},y:{stacked:!0}},animation:{onComplete:()=>{c=!0},delay:o=>{let d=0;return c||(d=300*o.dataIndex+100*o.datasetIndex),d}},plugins:{aspectRatio:5/3,layout:{padding:{top:32}},elements:{line:{fill:!1,tension:.4}},datalabels:{backgroundColor:function(o){return o.dataset.backgroundColor},borderRadius:4,color:"white",font:{weight:"bold"},formatter:Math.round,padding:6},legend:{position:"bottom",display:!0},title:{display:!0,text:String(e).toUpperCase(),font:{weight:"bold"},fontSize:16}}};break;case"pie":r={responsive:!0,tooltips:{enabled:!0},scales:{x:{stacked:!0},y:{stacked:!0}},animation:{onComplete:()=>{c=!0},delay:o=>{let d=0;return c||(d=300*o.dataIndex+100*o.datasetIndex),d}},plugins:{aspectRatio:5/3,layout:{padding:{top:32}},elements:{line:{fill:!1,tension:.4}},datalabels:{backgroundColor:function(o){return o.dataset.backgroundColor},borderRadius:4,color:"white",font:{weight:"bold"},formatter:Math.round,padding:6},legend:{position:"bottom",display:!0},title:{display:!0,text:String(e).toUpperCase(),font:{weight:"bold"},fontSize:16}}};break;case"bar":r={responsive:!0,tooltips:{enabled:!0},scales:{x:{stacked:!0},y:{stacked:!0}},animation:{onComplete:()=>{c=!0},delay:o=>{let d=0;return c||(d=300*o.dataIndex+100*o.datasetIndex),d}},plugins:{aspectRatio:5/3,layout:{padding:{top:32}},elements:{line:{fill:!1,tension:.4}},datalabels:{backgroundColor:function(o){return o.dataset.backgroundColor},borderRadius:4,color:"white",font:{weight:"bold"},formatter:Math.round,padding:6},legend:{position:"bottom",display:!0},title:{display:!0,text:String(e).toUpperCase(),font:{weight:"bold"},fontSize:16}}};break;case"line":r={responsive:!0,tooltips:{enabled:!0},scales:{x:{stacked:!0},y:{stacked:!0}},animation:{onComplete:()=>{c=!0},delay:o=>{let d=0;return c||(d=300*o.dataIndex+100*o.datasetIndex),d}},plugins:{filler:{propagate:!0},aspectRatio:5/3,layout:{padding:{top:32}},elements:{line:{fill:!1,tension:.4}},datalabels:{backgroundColor:function(o){return o.dataset.backgroundColor},borderRadius:4,color:"white",font:{weight:"bold"},formatter:Math.round,padding:6},legend:{position:"bottom",display:!0},title:{display:!0,text:String(e).toUpperCase(),font:{weight:"bold"},fontSize:16}}};break;case"radar":r={responsive:!0,tooltips:{enabled:!0},plugins:{datalabels:{backgroundColor:function(o){return o.dataset.borderColor},color:"white",font:{weight:"bold"},formatter:Math.round,padding:8},legend:{position:"bottom",display:!0},title:{display:!0,text:String(e).toUpperCase(),font:{weight:"bold"},fontSize:16}},aspectRatio:4/3,elements:{point:{hoverRadius:7,radius:5}}};break;case"bubble":r={responsive:!0,tooltips:{enabled:!0}}}return r}createBarChart(a,e){var n={datasets:this.vgraf.dataset,labels:this.vgraf.labels},i=e;"horizontalBar"===e&&(i="bar"),this.valueBarsChart&&this.valueBarsChart.destroy(),this.valueBarsChart=new f.kL(this.valueBarsCanvas.nativeElement,{type:i,data:n,options:this.daoptiongrap(e,a,this.tituloy,this.titulox)})}pideregistros(a,e){this.itemsList=[],this.efecto=0,this.authenticationService.getReg(this.idllave+"/tipoformulario","frmmovildreportess",0).then(i=>{this.efecto=1,this.items=i,this.reportescmd=[],this.totalreportes=this.items.length;for(var r=0;r<this.items.length;r++)this.titulorr=this.items[0].nombre,this.reportescmd.push({name:this.items[r].nombre,type:"radio",label:this.items[r].nombre+" ("+this.items[r].type+")",checked:!1,value:r+"\xb0"+this.items[r].type});this.itemsList=this.items,this.items.length>0&&("Slide"===this.tipo2?Number(this.descripciong)>0?(this.grapactual=0,this.graficaini=this.items[this.grapactual].type,this.dagrafica(this.grapactual,"",this.filtrofecha),this.grapactual=this.grapactual+1,this.StartTimer()):this.authenticationService.presentAlert("Ingrese un timer valido en la configuraci\xf3n de la grafica",this.msg,""):(this.graficaini=this.items[0].type,this.grapactual=e,this.dagrafica(this.grapactual,"",this.filtrofecha)))},i=>{this.authenticationService.presentAlert(i.error,this.msg,"")})}StartTimer(){return(0,v.mG)(this,void 0,void 0,function*(){this.timer=setTimeout(a=>{this.grapactual===this.totalreportes&&(this.grapactual=0),this.graficaini=this.items[this.grapactual].type,this.dagrafica(this.grapactual,"",this.filtrofecha),this.grapactual=this.grapactual+1,this.StartTimer()},1e3*Number(this.descripciong))})}pideregistros0(){this.pideregistros(this.currentSegment,this.grapactual)}dagrafica(a,e,n){var i=this.items[a];if(this.titulorr=i.nombre,this.vgraf=[],this.totalgraf1=0,this.reportetipo=i.type,"Grafica"===i.type){this.rrplano=!1,this.rrgrafica=!0;var r="";r=i.campox.nombre+"\xb0"+i.idformulario+"\xb0"+i.tipoconteo+"\xb0"+i.typegraf+"\xb0"+this.userinfo[0].idempresa._id+"\xb0"+n+"\xb0"+i.filtroextra+"\xb0"+i.ordentipo+"\xb0"+i.colores1+"\xb0"+this.authenticationService.replaceAll(i.colores2,"#","")+"\xb0"+i.campoy.nombre,this.tituloy=i.nombrey,this.titulox=i.nombrex,this.efecto=0;var c="";"Grafica"===this.graficaini&&(c="reportegrafica"),this.authenticationService.getReg(r+"/"+c,"frmmovildreportess",0).then(o=>{this.efecto=1,this.vgraf=o,this.totalgraf1=0;for(var d=0;d<this.vgraf.tabla.length;d++)this.totalgraf1=this.totalgraf1+this.vgraf.tabla[d].cantidadxx;this.createBarChart(this.titulorr,""===e?i.typegraf:e)})}else this.rrgrafica=!1,this.rrplano=!0,r="",this.authenticationService.getReg((r=i.idformulario+"\xb0"+this.userinfo[0].idempresa._id+"\xb0"+n+"\xb0"+i.filtroextra+"\xb0"+i.camposreporte.id+"\xb0"+i.camposreporte.nombre)+"/reportegrafica2","frmmovildreportess",0).then(d=>{this.efecto=1,this.items2=d,this.encabezado=d[0],this.detalle=d,this.detalle=this.authenticationService.removeItemOnce(this.detalle,0),this.itemsList=this.items2})}daitemlabel(a){return this.encabezado[a]}tipograf(){return(0,v.mG)(this,void 0,void 0,function*(){yield(yield this.alertController.create({cssClass:"my-custom-class",header:"Seleccione Opci\xf3n",inputs:this.reportescmd2,buttons:[{text:"Cancel",role:"cancel",cssClass:"secondary",handler:e=>{}},{text:"Ok",handler:e=>{this.dagrafica(this.grapactual,e,this.filtrofecha)}}]})).present()})}filtro(){return(0,v.mG)(this,void 0,void 0,function*(){yield(yield this.alertController.create({cssClass:"my-custom-class",header:"Seleccione Opci\xf3n",inputs:this.reportescmd,buttons:[{text:"Cancel",role:"cancel",cssClass:"secondary",handler:e=>{}},{text:"Ok",handler:e=>{this.grapactual=e.split("\xb0")[0],this.graficaini=e.split("\xb0")[1],this.dagrafica(this.grapactual,"",this.filtrofecha)}}]})).present()})}}return s.\u0275fac=function(a){return new(a||s)(t.Y36(l.t4),t.Y36(l.HT),t.Y36(_.$),t.Y36(l.jP),t.Y36(y.F0),t.Y36(A.$),t.Y36(l.Br),t.Y36(b.sK),t.Y36(l.IN))},s.\u0275cmp=t.Xpm({type:s,selectors:[["app-formulariomovilsdreporte-list"]],viewQuery:function(a,e){if(1&a&&(t.Gf(S,7),t.Gf(L,7),t.Gf(q,7)),2&a){let n;t.iGM(n=t.CRH())&&(e.barChart=n.first),t.iGM(n=t.CRH())&&(e.valueBarsCanvas=n.first),t.iGM(n=t.CRH())&&(e.valueBarsCanvas2=n.first)}},decls:86,vars:20,consts:[["color","primary"],["slot","start"],["defaultHref","categoriaformularioListPage"],["size","small"],["collapse","true","slot","end"],["title","Seleccione reporte",3,"click"],["slot","icon-only","name","options"],[3,"title","click"],["slot","icon-only","name","refresh-circle-outline"],[1,"ion-no-padding"],["sticky","true","color","light",3,"hidden"],[3,"hidden"],["position","floating","color","primary"],["readonly","",2,"border","2px solid #b1b3b2","border-radius","10px !important",3,"ngModel","liIonic4Datepicker","ngModelChange"],["title","Buscar",3,"click"],["size-lg","6","size-sm","6","size","12"],["color","transparent",3,"hidden"],["title","Tipo Grafica",3,"click"],["slot","icon-only","name","filter-outline"],["title","Descargar a Excel",3,"click"],["slot","icon-only","name","download-outline"],["valueBarsCanvas",""],["sticky","true","color","light"],[1,"pure-table"],[4,"ngFor","ngForOf"],["data-label","Check"],["color","light","slot","start"],["data-label","Categoria"],["data-label","Cantidad"],["size","12"],["color","transparent"],[4,"ngIf"],["class","empty-list-message",4,"ngIf"],["data-label","No"],["data-label","daitemlabel(i2)",4,"ngFor","ngForOf"],["data-label","daitemlabel(i2)"],[1,"first-letter",3,"innerHtml"],["lines","none",4,"ngFor","ngForOf"],["lines","none"],[1,"ion-text-wrap"],["width","67%"],[1,"empty-list-message"]],template:function(a,e){1&a&&(t.TgZ(0,"ion-header"),t.TgZ(1,"ion-toolbar",0),t.TgZ(2,"ion-buttons",1),t._UZ(3,"ion-back-button",2),t.qZA(),t.TgZ(4,"ion-title",3),t._uU(5),t.qZA(),t.TgZ(6,"ion-buttons",4),t.TgZ(7,"ion-button",5),t.NdJ("click",function(){return e.filtro()}),t._UZ(8,"ion-icon",6),t.qZA(),t.TgZ(9,"ion-button",7),t.NdJ("click",function(){return e.pideregistros0()}),t.ALo(10,"translate"),t._UZ(11,"ion-icon",8),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(12,"ion-content"),t.TgZ(13,"div",9),t.TgZ(14,"ion-item-divider",10),t._uU(15," Filtros "),t.qZA(),t.TgZ(16,"ion-grid",11),t.TgZ(17,"ion-row"),t.TgZ(18,"ion-col"),t.TgZ(19,"ion-label",12),t._uU(20,"Fecha Inicial:"),t.qZA(),t.TgZ(21,"ion-input",13),t.NdJ("ngModelChange",function(i){return e.fecha1=i}),t.qZA(),t.qZA(),t.TgZ(22,"ion-col"),t.TgZ(23,"ion-label",12),t._uU(24,"Fecha final:"),t.qZA(),t.TgZ(25,"ion-input",13),t.NdJ("ngModelChange",function(i){return e.fecha2=i}),t.qZA(),t.qZA(),t.TgZ(26,"ion-col"),t._UZ(27,"br"),t.TgZ(28,"ion-button",14),t.NdJ("click",function(){return e.buscarrango()}),t._uU(29," Buscar "),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(30,"ion-grid",11),t.TgZ(31,"ion-row"),t.TgZ(32,"ion-col",15),t.TgZ(33,"ion-item-divider",10),t._uU(34," Grafica "),t.qZA(),t.TgZ(35,"ion-toolbar",16),t.TgZ(36,"ion-buttons",1),t.TgZ(37,"ion-button",17),t.NdJ("click",function(){return e.tipograf()}),t._UZ(38,"ion-icon",18),t.qZA(),t.TgZ(39,"ion-button",19),t.NdJ("click",function(){return e.bajarexcel("Ordenes por actividad",e.vgraf.tabla,1)}),t._UZ(40,"ion-icon",20),t.qZA(),t.qZA(),t.qZA(),t._UZ(41,"canvas",null,21),t.qZA(),t.TgZ(43,"ion-col",15),t.TgZ(44,"ion-item-divider",22),t._uU(45," Tabla de datos "),t.qZA(),t.TgZ(46,"table",23),t.TgZ(47,"thead"),t.TgZ(48,"tr"),t._UZ(49,"th"),t.TgZ(50,"th"),t._uU(51,"Categoria"),t.qZA(),t.TgZ(52,"th"),t._uU(53,"Cantidad"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(54,"tbody"),t.YNc(55,U,8,3,"tr",24),t.TgZ(56,"tr"),t.TgZ(57,"td",25),t._UZ(58,"ion-badge",26),t.qZA(),t.TgZ(59,"td",27),t._uU(60,"TOTAL"),t.qZA(),t.TgZ(61,"td",28),t._uU(62),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t._UZ(63,"ion-row"),t.qZA(),t.TgZ(64,"ion-grid",11),t.TgZ(65,"ion-row"),t.TgZ(66,"ion-col",29),t.TgZ(67,"ion-item-divider",22),t._uU(68," Reporte plano "),t.qZA(),t.TgZ(69,"ion-toolbar",30),t.TgZ(70,"ion-buttons",1),t.TgZ(71,"ion-button",19),t.NdJ("click",function(){return e.bajarexcel("Ordenes por actividad",e.vgraf.tabla,2)}),t._UZ(72,"ion-icon",20),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(73,"ion-row"),t.TgZ(74,"ion-col",29),t.TgZ(75,"ion-item-divider",22),t._uU(76," Tabla de datos "),t.qZA(),t.TgZ(77,"table",23),t.TgZ(78,"thead"),t.TgZ(79,"tr"),t._UZ(80,"th"),t.YNc(81,w,2,1,"th",24),t.qZA(),t.qZA(),t.TgZ(82,"tbody"),t.YNc(83,N,4,2,"tr",24),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.YNc(84,I,2,2,"ion-list",31),t.YNc(85,R,3,3,"h3",32),t.qZA()),2&a&&(t.xp6(5),t.hij(" ",e.tituloxx," "),t.xp6(4),t.MGl("title"," ",t.lcZ(10,18,"REFRESCARM"),""),t.xp6(5),t.Q6J("hidden","Slide"===e.tipo2),t.xp6(2),t.Q6J("hidden","Slide"===e.tipo2),t.xp6(5),t.Q6J("ngModel",e.fecha1)("liIonic4Datepicker",e.datePickerObj),t.xp6(4),t.Q6J("ngModel",e.fecha2)("liIonic4Datepicker",e.datePickerObj),t.xp6(5),t.Q6J("hidden",!e.rrgrafica),t.xp6(3),t.Q6J("hidden","Slide"===e.tipo2),t.xp6(2),t.Q6J("hidden","Slide"===e.tipo2),t.xp6(20),t.Q6J("ngForOf",e.vgraf.tabla),t.xp6(7),t.Oqu(e.totalgraf1),t.xp6(2),t.Q6J("hidden",!e.rrplano),t.xp6(17),t.Q6J("ngForOf",e.encabezado),t.xp6(2),t.Q6J("ngForOf",e.detalle),t.xp6(1),t.Q6J("ngIf",0===e.efecto),t.xp6(1),t.Q6J("ngIf",0===(null==e.itemsList?null:e.itemsList.length)))},directives:[l.Gu,l.sr,l.Sm,l.oU,l.cs,l.wd,l.YG,l.gu,l.W2,l.rH,l.jY,l.Nd,l.wI,l.Q$,l.pK,l.j9,u.JJ,u.On,C.w5,m.sg,l.yp,m.O5,l.q_,l.Ie,M.B],pipes:[b.X$,O.A],styles:["[_nghost-%COMP%]{--ion-safe-area-top: 20px;--ion-safe-area-bottom: 22px;--page-margin: var(--app-narrow-margin)}ion-item-divider[_ngcontent-%COMP%]{--background: var(--ion-color-light);--padding-start: var(--page-margin)}.first-letter2[_ngcontent-%COMP%]{text-transform:capitalize;font-size:10px}.swiper-container[_ngcontent-%COMP%]{width:100%;height:100%}.swiper-slide[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center}.first-letter[_ngcontent-%COMP%]{text-transform:uppercase;font-size:14px}.image[_ngcontent-%COMP%]{height:5vw;width:5vw;border:2px solid #fff;border-radius:50%;box-shadow:0 0 5px gray;display:block}.circle-pic[_ngcontent-%COMP%]{width:50px;height:50px;border-radius:10%;display:block}table[_ngcontent-%COMP%]{border:1px solid #ccc;width:100%;margin:0;padding:0;border-collapse:collapse;border-spacing:0}table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{border:1px solid #ddd;padding:5px}table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:10px;font-size:10px;text-align:left}table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{text-transform:uppercase;font-size:10px;letter-spacing:1px}@media screen and (max-width: 600px){table[_ngcontent-%COMP%]{border:0}table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]{display:none}table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{margin-bottom:10px;display:block;font-size:9px;border-bottom:2px solid #ddd}table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{display:block;text-align:right;font-size:9px;border-bottom:1px dotted #ccc}table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child{border-bottom:0}table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:before{content:attr(data-label);float:left;text-transform:uppercase;font-weight:700}}"]}),s})();var Y=h(76398),G=h(22753);let Q=(()=>{class s{}return s.\u0275fac=function(a){return new(a||s)},s.\u0275mod=t.oAB({type:s}),s.\u0275inj=t.cJS({imports:[[m.ez,l.Pc,T.K,u.u5,u.UX,x.YL,Y.N,G.D,y.Bz.forChild([{path:"",component:F}]),b.aw.forChild(),C.YZ]]}),s})()}}]);