"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6398],{59978:(D,p,c)=>{c.d(p,{X:()=>J});class t{constructor(e={}){this.datafrm=[],this.value=e.value,this.key=e.key||"",this.label=e.label||"",this.required="true"==e.required,this.order=void 0===e.order?1:e.order,this.controlType=e.type||"",this.position=e.position||"",this.placeholder=e.placeholder||"",this.default=e.default||"",this.default2=e.default2||"",this.default3=e.default3||"",this.copiarencampo=e.copiarencampo||"",this.siimagenlocal=e.siimagenlocal||"",this.datafrm=e.datafrm,this.modopxc=e.modopxc||"",this.filtrocampo2=e.filtrocampo2||"",this.stylelabel="font-size: 24px !important;",this.disabled=""+e.disabled||"false",this.hidden=""+e.hidden||"false",this.blike=""+e.blike||"false",this.fondoetiqueta=e.fondoetiqueta||"",this.coloretiqueta=e.coloretiqueta||"",this.rangomin=""+e.rangomin||"0",this.rangomax=""+e.rangomax||"1000",this.rangostep=""+e.rangostep||"100",this.alfatypo=e.alfatypo||"",this.alfatypo2=e.alfatypo2||"",this.idformulario=e.idformulario||"",this.papaorigen=e.papaorigen||"",this.idticket=e.idticket||"",this.secuencia=e.secuencia||"",this.secuenciag=e.secuenciag||"",this.idcampo=e.idcampo||"",this.combofijo=e.combofijo||"",this.actualiza=e.actualiza||"",this.idfrmconsulta=e.idfrmconsulta||"",this.idfrmconsulta2=e.idfrmconsulta2||"",this.idfrmconsulta2origen=e.idfrmconsulta2origen||"",this.idfrmconsultaorigen=e.idfrmconsultaorigen||"",this.usarunaves=e.usarunaves||"",this.idcampofiltro=e.idcampofiltro||"",this.idcampofiltro2=e.idcampofiltro2||"",this.idcampofiltromanual=e.idcampofiltromanual||"",this.regitrosacumulados=e.regitrosacumulados||"",this.verregistros=e.verregistros||"",this.frmapirest=e.frmapirest||"",this.idfrmconsultaorigenpapa=e.idfrmconsultaorigenpapa||"",this.idfrmconsultaorigenpapa2=e.idfrmconsultaorigenpapa2||"",this.idcampofiltropapa=e.idcampofiltropapa||"",this.titulo1=e.titulo1||"",this.titulo2=e.titulo2||""}}class f extends t{constructor(e={}){super(e),this.controlType="select",this.options=[],this.options=e.options||[]}}class g extends t{constructor(e={}){super(e),this.controlType="select2",this.options=[],this.options=e.options||[]}}class y extends t{constructor(e={}){super(e),this.controlType="textarea",this.type=e.type||""}}class C extends t{constructor(e={}){super(e),this.controlType="textbox",this.type=e.type||""}}class n extends t{constructor(e={}){super(e),this.controlType="label",this.type=e.type||""}}class x extends t{constructor(e={}){super(e),this.controlType="note",this.type=e.type||""}}class l extends t{constructor(e={}){super(e),this.controlType="moneda",this.type=e.type||""}}class m extends t{constructor(e={}){super(e),this.controlType="rango",this.type=e.type||""}}class i extends t{constructor(e={}){super(e),this.controlType="fecha",this.type=e.type||""}}class v extends t{constructor(e={}){super(e),this.controlType="check",this.type=e.type||""}}class T extends t{constructor(e={}){super(e),this.controlType="fechahora",this.type=e.type||""}}class u extends t{constructor(e={}){super(e),this.controlType="hora",this.type=e.type||""}}class w extends t{constructor(e={}){super(e),this.controlType="imagen",this.type=e.type||""}}class P extends t{constructor(e={}){super(e),this.controlType="documento",this.type=e.type||""}}class M extends t{constructor(e={}){super(e),this.controlType="componente",this.type=e.type||""}}class F extends t{constructor(e={}){super(e),this.controlType="selectremoto",this.type=e.type||""}}class S extends t{constructor(e={}){super(e),this.controlType="verquery",this.type=e.type||""}}class z extends t{constructor(e={}){super(e),this.controlType="firmaelectronica",this.type=e.type||""}}class j extends t{constructor(e={}){super(e),this.controlType="codigoqr",this.type=e.type||""}}class a extends t{constructor(e={}){super(e),this.controlType="firmadigital",this.type=e.type||""}}class d extends t{constructor(e={}){super(e),this.controlType="geoautomatico",this.type=e.type||""}}class h extends t{constructor(e={}){super(e),this.controlType="pais",this.type=e.type||""}}class R extends t{constructor(e={}){super(e),this.controlType="correo",this.type=e.type||""}}class b extends t{constructor(e={}){super(e),this.controlType="tracking",this.type=e.type||""}}class A extends t{constructor(e={}){super(e),this.controlType="telefono",this.type=e.type||""}}class U extends t{constructor(e={}){super(e),this.controlType="tarjeta",this.type=e.type||""}}class E extends t{constructor(e={}){super(e),this.controlType="contrasena",this.type=e.type||""}}class I extends t{constructor(e={}){super(e),this.controlType="fechanacimiento",this.type=e.type||""}}class K extends t{constructor(e={}){super(e),this.controlType="otrocheck",this.type=e.type||""}}class O extends t{constructor(e={}){super(e),this.controlType="sexocovid",this.type=e.type||""}}var X=c(5e3);let J=(()=>{class r{getControls(k){return k.map((s,B)=>{const o=Object.assign(Object.assign({},s),{type:s.type,key:s.name,label:s.title,value:s.valor,required:s.required,order:s.order,idformulario:s.idformulario,papaorigen:s.papaorigen,idticket:s.idticket,secuencia:s.secuencia,secuenciag:s.secuenciag,idcampo:s.idcampo});switch(s.type){case"text":case"Number":return o.value=o.value.toString(),new C(o);case"textarea":return new y(o);case"select":return new f(o);case"select2":return new g(o);case"label":return new n(o);case"moneda":return new l(o);case"note":return new x(o);case"rango":return new m(o);case"fecha":return new i(o);case"fechahora":return new T(o);case"hora":return new u(o);case"check":return new v(o);case"imagen":return new w(o);case"documento":return new P(o);case"componente":return new M(o);case"selectremoto":return new F(o);case"verquery":return new S(o);case"firmaelectronica":return new z(o);case"codigoqr":return new j(o);case"firmadigital":return new a(o);case"geoautomatico":return new d(o);case"pais":return new h(o);case"correo":return new R(o);case"tracking":return new b(o);case"telefono":return new A(o);case"tarjeta":return new U(o);case"contrasena":return new E(o);case"fechanacimiento":return new I(o);case"otrocheck":return new K(o);case"sexocovid":return new O(o)}}).filter(s=>!!s).sort((s,B)=>s.order-B.order)}}return r.\u0275fac=function(k){return new(k||r)},r.\u0275prov=X.Yz7({token:r,factory:r.\u0275fac}),r})()},67429:(D,p,c)=>{c.d(p,{t:()=>g});var t=c(93075),f=c(5e3);let g=(()=>{class y{constructor(){}toFormGroup(n,x){return n=n||new t.cw({}),x.forEach(l=>{let m=l.required?new t.NI(l.value||"",t.kI.required):new t.NI(l.value||"");n.addControl(l.key,m)}),n}}return y.\u0275fac=function(n){return new(n||y)},y.\u0275prov=f.Yz7({token:y,factory:y.\u0275fac}),y})()},76398:(D,p,c)=>{c.d(p,{N:()=>j});var t=c(23349),f=c(59978),g=c(67429),y=c(55787),C=c(81656),n=c(57565),x=c(22675),l=c(69808),m=c(51062),i=c(93075),v=c(33678),T=c(56310),u=c(5e3);let w=(()=>{class a{}return a.\u0275fac=function(h){return new(h||a)},a.\u0275mod=u.oAB({type:a}),a.\u0275inj=u.cJS({imports:[[l.ez,i.u5,v.K,t.Pc,i.UX,n.R,m.aw.forChild(),T.su.forRoot({apiKey:"AIzaSyCzl3eVT5YfK9Mg1y7lVmBWm7FiRVxbZoU",libraries:["places"]})]]}),a})(),P=(()=>{class a{}return a.\u0275fac=function(h){return new(h||a)},a.\u0275mod=u.oAB({type:a}),a.\u0275inj=u.cJS({imports:[[l.ez,i.u5,t.Pc,i.UX,n.R,m.aw.forChild()]]}),a})();var M=c(98246);let F=(()=>{class a{}return a.\u0275fac=function(h){return new(h||a)},a.\u0275mod=u.oAB({type:a}),a.\u0275inj=u.cJS({imports:[[l.ez,i.u5,t.Pc,i.UX,n.R,M.F5,m.aw.forChild()]]}),a})(),S=(()=>{class a{}return a.\u0275fac=function(h){return new(h||a)},a.\u0275mod=u.oAB({type:a}),a.\u0275inj=u.cJS({imports:[[l.ez,i.u5,v.K,t.Pc,i.UX,n.R,m.aw.forChild()]]}),a})();var z=c(36351);let j=(()=>{class a{}return a.\u0275fac=function(h){return new(h||a)},a.\u0275mod=u.oAB({type:a}),a.\u0275inj=u.cJS({providers:[g.t,f.X],imports:[[t.Pc,y.Bz,l.ez,i.u5,i.UX,n.R,x.v,w,z.YL,S,M.F5,P,F,v.K,m.aw.forChild(),C.YZ]]}),a})()}}]);