
var Frmmovil = require('../models/frmmovil');
var Frmmovild = require('../models/frmmovild');
var Bitacora = require('../models/bitacora');
var Catusuario = require('../models/catusuario');
var Formcat2 = require('../models/frmcat2');
var formulariousrd = require('../models/formulariousrd');
var formulariousr = require('../models/formulariousr');
var functool = require('../controllers/funcionesnode');
var kardex = require('../models/asociadoventa/kardexcorreos');
var kardexproducto = require('../models/asociadoventa/kardexcorreosproducto');
var conecta1 = 'mssql://sa:$ertobar@192.168.34.5/stbd'
var conecta2 = 'mssql://sa:$ertobar@192.168.34.5/cielomarbd'
var conecta3 = 'mssql://sa:$ertobar@192.168.34.5/camposbd'


    


var visitas_programadas=async  function(req, res, next){

  return new Promise(resolve => {
    var aa=req.body.ejecuta
  console.log('ejecuta operacion ' +  aa)
    switch(aa) {

      case '2_generaemergencias': 
      (async () => {

        var   acum=req.body.acumulados;
        var enmiendatt;
        for(var i = 0; i < acum.length;i++){
          switch(acum[i].idtabla) {
              case '5f72a12587c9e33bd4ada7ab':  enmiendatt=  acum[i].item;break;
              default:
             }}

             console.log(enmiendatt)
             var nopagos= enmiendatt.montodeemergencias
            
             
             var todos20 = await functool.dadatosformulariofinal(req.body.idform,{ idpapa:req.body.idpapa},req.body.idempresa,req.body.idform); 
             if(todos20.length===0)
             {
               resolve({estado:'No existen pagos generados , ejecute la opción 1'}); 
             }


             if(nopagos===undefined  )
             {
              resolve({estado:'Ingrese en enmienda el monto de emergencias a aplicar'}); 
             }
             else
             {
            
              var pagosid=[]

              for(var j2 = 0; j2 < todos20.length;j2++){
                pagosid.push('' + todos20[j2]._id)
              }
              

                var todos20a = await functool.dadatosformulariofinal('603715b7a59cf50610072759',{ idpapa:{$in:pagosid}},
                req.body.idempresa,'603715b7a59cf50610072759'); 
                if(todos20a.length>0)
                {
                  resolve({estado:'Ya existen emergencias procesadas'}); 
                }
                else
                {
                  for(var j = 0; j < todos20.length;j++){
                    var encuentra=0;
                    for(var jj = 0; jj < todos20a.length;jj++){
                      if(String(todos20[j]._id)===todos20a[jj].idpapa)
                      {

                        encuentra=1;
                        break;
                      }
                    }
               
                    if(encuentra==0)
                    {
                              var names='603715b7a59cf50610072759'
                              var estructura= {

                                "descripciondelaemergencia" : "sss",
                                "monto" : nopagos,
                                "estado" : "No atendida",
                                  "usuarionew" :req.body.bitacora.email,
                                  "usuarioup" : req.body.bitacora.email,
                                  "idpapa" : todos20[j]._id,
                                
                                  "idempresa" : req.body.idempresa,

                                  "sequencia" : "3",
                                
                                  "comentarioanulado" : "",
                                  "comentariocerrado" : "",
                                  "estadointerno" : "activo"

                              
                              
                                
                            }

                            console.log(names + ' ' + req.body.idform + ' '+ req.body.idpapa + ' ' +req.body.idtipo)
                            functool.creafrmregistro(req, res, next,names,'603715b7a59cf50610072759',estructura,'noresponde',[],todos20[j]._id
                            ,req.body.tipo)

                    }
                                
  
                 
                   
  
  
                  }
  
                  
                  resolve({estado:'exito'}); 
                }


           

             }
        
      })();
      break;
      case '1_generapagos': 
      (async () => {

        var   acum=req.body.acumulados;
        var enmiendatt;
        for(var i = 0; i < acum.length;i++){
          switch(acum[i].idtabla) {
              case '5f72a12587c9e33bd4ada7ab':  enmiendatt=  acum[i].item;break;
              default:
             }}

             console.log(enmiendatt)
             var nopagos= enmiendatt.cantidaddemesesparagenerarpagos
             var mesinicio= enmiendatt.periodoinicialparagenerarpagos
             var montototal=enmiendatt.montototalenmienda

             if(nopagos===undefined  )
             {
              resolve({estado:'Ingrese en enmienda el no pagos'}); 
             }
             else
             {
              
              if( mesinicio===undefined )
              {
                resolve({estado:'Ingrese en periodo inicial del pago en enmiendas'}); 
              }
              else
              {
                
                if( montototal===undefined)
                {
                 resolve({estado:'Ingrese monto total de la enmienda'}); 
                }
                else
                {
                var aarr=[]
                var montito= montototal / Number(nopagos)
                var mesini=mesinicio.split('-')
                console.log(montito)
                console.log(mesini[0] + '    ' + mesini[1])
                var periodopagon=Number(mesini[0])
                var periodopago2n=Number(mesini[1])

                var todos20 = await functool.dadatosformulariofinal(req.body.idform,{ idpapa:req.body.idpapa},req.body.idempresa,req.body.idform); 
                if(todos20.length>0)
                {
                  resolve({estado:'Ya existen pagos procesados'}); 
                }


                for(var j = 0; j < nopagos;j++){

                  var  fechapago1=functool.dafechapago1(periodopagon,periodopago2n) // '2018-08'
                  var  fechapago2=functool.dafechapago2(periodopagon,periodopago2n)//'07-2018'


                  var names='5f595df92521cd38c8fe3126'
                  var estructura= {

                      "tipodeaporte" : "Tipo aporte",
                      "nopago" : '' + (j+1),
                      "fechainicial" : fechapago1+ "-01T00:19:17.765Z",
                      "fechapago" : fechapago1 + "-01T00:19:17.765Z",
                      "periodopago" : fechapago2,
                      "nofactura" : " ",
                      "descripcionpago" : "Pago "+'' + (j+1)+" - De " + fechapago2,
                      "montopago" : '' + montito,
                      "montosanciones" : "0",
                      "montoemergencia" : "0",
                      "montoapagar" : montito,
                      "bancotransferencia" : " ",
                      "nocuenta" : " ",
                      "observaciones" : "",
                      "usuarionew" :req.body.bitacora.email,
                      "usuarioup" : req.body.bitacora.email,
                      "idpapa" : req.body.idpapa,
                      "estado" : 'Pendiente',
                      "idempresa" : req.body.idempresa,
            
                      "sequencia" : "3",
                    
                      "comentarioanulado" : "",
                      "comentariocerrado" : "",
                      "estadointerno" : "activo"

                   
                  
                    
                }
  
  console.log(names + ' ' + req.body.idform + ' '+ req.body.idpapa + ' ' +req.body.tipo)
  functool.creafrmregistro(req, res, next,names,req.body.idform,estructura,'noresponde',[],req.body.idpapa,req.body.tipo)

                 periodopagon=periodopagon+1
                 if(periodopagon===13)
                 {periodopagon=1
                  periodopago2n=periodopago2n+1
                 }
                 


                }

                
                resolve({estado:'exito'}); 

             }}}
        
      })();
      break;
   

      
      case '2': 
      (async () => {

        var   acum=req.body.acumulados;
        var periodot;
        var supervidort;
        var inspectort;
        var planificat;
        for(var i = 0; i < acum.length;i++){
            switch(acum[i].tabla) {
                case 'Planificación':  periodot=  acum[i].item;break;
                case 'Planificación supervisores':  supervidort=  acum[i].item;break;
                case 'Planificación inspectores':  inspectort=  acum[i].item;break;
                case 'Planificar':  planificat=  acum[i].item;break;
                default:
               }}
      var frmmovil='5f7f5f7b85f18458404125fds'
      var todos20 = await functool.dadatosformulariofinal('5f7f5f7b85f18458404125fd',{ idpapa:inspectort._id},req.body.idempresa,'5f7f5f7b85f18458404125fds'); 
      var todos2=JSON.parse(JSON.stringify(todos20))
      var f1 =new Date( planificat.fechainicio);   
      var f2 =new Date( planificat.fechafinalizacion);//.toISOString().substr(0,10);   
      var visitas = planificat.novisitasdiarias

     var fechas=functool.getDaysArray(f1,f2)

     console.log('fechass ---' + fechas.length)
     console.log('visitas ---' + visitas)
     console.log('proyectos ---' + todos2.length)
     for(var j = 0; j < fechas.length;j++){ // todas las fechas
      for(var k = 0; k < visitas;k++){//no visitas
        for(var i = 0; i < todos2.length;i++){ // todos los proyectpos
       

          
            
            
         
        
              var aarr=todos2[i].proyecto.split('¬')
              console.log(aarr)

             
            contrato = await functool.dadatosformularioidfinal('5f729c2487c9e33bd4ada798',{ _id:aarr[1].split('°')[0]},req.body.idempresa,'5f729c2487c9e33bd4ada798'); 
              console.log(contrato)
         
            var proyectot=contrato.proyecto.split('¬')[1]
            var empresat=contrato.empresa.split('¬')[1]

            
                var names='5f81d95fc07d6532900465a4'
                var estructura= {
                  "novisita" :k+1,
                  "idperiodo" : periodot._id,
                  "periodo" : periodot.nombre,
                  "idsupervisor" : supervidort.usuario.split('¬')[1],
                  "supervisor" : supervidort.usuario.split('¬')[0],
                  "idinspector" : inspectort.usuario.split('¬')[1],
                  "inspector" : inspectort.usuario.split('¬')[0],
                  "idplanifica" : planificat._id,
                  "idinspector0" : inspectort._id,
                  "idsupervisor0" : supervidort._id,
                  "idproyecto0" : todos2[i]._id,
                  "idproyecto" :  proyectot,
                  "idempresa0" : empresat,
                  "idcontrato" : aarr[1].split('°')[0],
                  "fechaasignada" :""+ fechas[j] + "",
                  "verificapersonal":'',
                  "verificavehiculos":'',
                  "verificaherramienta":'',
                  "comentariopersonal":'',
                  "geoposicion":'',
                  "comentariovehiculos":'',
                  "comentarioherramienta":'',
                  "proyecto" :todos2[i].proyecto,
                  "usuarionew" :req.body.bitacora.email,
                  "usuarioup" : req.body.bitacora.email,
                  "idpapa" : req.body.idpapa,
                  "estado" : 'activa',
                  "idempresa" : req.body.idempresa,
                  "nombre":  "  <strong>No contrato:</strong> "+aarr[0].split('°')[0].trim().split(':')[1]+ " <br> "+
                  "<strong>Empresa:</strong>"+contrato.empresa.split('°')[2].split(':')[1]+ " <br> "+
                  "<strong>Nit Empresa:</strong>"+contrato.empresa.split('°')[1].split(':')[2]+ " <br> "+
                  "<strong>Codigo proyecto:</strong>"+ contrato.proyecto.split('°')[1].split(':')[2] + " <br> "+
                  "<strong>Nombre proyecto:</strong>"+  contrato.proyecto.split('°')[2].split(':')[1] +" <br> "+
                  " <strong>Supervisor:</strong> "+ supervidort.usuario.split('¬')[0] +" <br>"+
                  " <strong>Inspector:</strong> " + inspectort.usuario.split('¬')[0] +" <br>"
                  
              }


              functool.creafrmregistro(req, res, next,names,req.body.idform,estructura,'noresponde',[],req.body.idpapa,req.body.idtipo)

        
          
         
                  
              }

            }
          
       
      
    }

    
    resolve({estado:'exito'}); 
})();
        break;
        default:
          // code block
          resolve({estado:'exito'}); 
      }
});




}



    var procesoinicialcrea= async function(req, res, next,dataanterior){
        return new Promise(resolve => {
            switch(req.body.ejecutainicio) {
              
                case '1_actualizainventarioaj': 
                resolve({estado:'Existencia no valida'}); 
                break;
                default:
                  // code block
                  resolve({estado:'exito'}); 
              }
        });
    }

    var procesoinicialact= async function(req, res, next,dataanterior){
        return new Promise(resolve => {
            switch(req.body.ejecutainicio) {
               
                case '1_actualizainventarioaj': 
                resolve({estado:'Existencia no valida'}); 
                break;
                default:
                  // code block
                  resolve({estado:'exito'}); 
              }
        });
    }

    var procesoinicialdel= async function(req, res, next,dataanterior){
        return new Promise(resolve => {
            switch(req.body.ejecutainicio) {
              
                case '1_actualizainventarioaj': 
                resolve({estado:'Existencia no valida'}); 
                break;
                default:
                  // code block
                  resolve({estado:'exito'}); 
              }
        });

    }
        var procesofinalcrea= async function(req, res, next,dataanterior){
          return new Promise(resolve => {
              switch(req.body.ejecuta) {
                case '1_creaimportaciones':


                
                  resolve({estado:'exito'}); 

                  break;
                case '1_actualizapagocontrato':
                  (async () => {
                    var pagoid=req.body.estructura.pagosintermedios.split('¬')[1]
                    var nofactura=req.body.estructura.nofactura
  
                    var banco=req.body.estructura.bancotransferencia
                    var cuenta=req.body.estructura.nocuenta
                    var memo=req.body.estructura.memo
  
  
                 
  
                    var estructura={
                      "nofactura" : nofactura,
                      "bancotransferencia" : banco,
                      "nocuenta" :cuenta,
                      "observaciones":memo,
                      "estado":'Cancelado'
                     
                  }
                    producto = await functool.actualizaformularioidfinal('5f595df92521cd38c8fe3126',{ _id:pagoid}
                    ,req.body.estructura.idempresa,'5f595df92521cd38c8fe3126',estructura); 
  
  
  
                   
                    resolve({estado:'exito'}); 

                })();
                  break;
                case 'Crearmultasegunsancion': 
                (async () => {
                var contrato=req.body.estructura.contrato.split('¬')[1]
                var enmienda=req.body.estructura.enmienda.split('¬')[1]
                
                var f1 =new Date( dataanterior.createdAt).toISOString().substr(0,10);   
                                     
                fecha = ''+dataanterior.createdAt + ''
        
                let periodo =f1.split('-');
                let tipo = req.body.estructura.tiposancion.split('°');
        
        
                var idpagot=''
        
                pagos = await functool.dadatosformulario('5f595df92521cd38c8fe3126',{ periodopago: periodo[1] + '-' + periodo[0] ,idempresa:req.body.estructura.idempresa,idpapa:enmienda.trim()},req.body.estructura.idempresa); 
                   
                
                idpagot=pagos[0]._id
            var   options	     = {
                idcat: 'GESTION DE CONTRATOS',
                idform: '5f74c0fff22ed14ea01c1cbe',
                idpapa: idpagot,
                estructura: {
                  // descripcion: Barrido de  vías urbanas AREA TIPO A°monto: 3000°plazoenminutospararesolver: 120°"
                  'tiposancion' : tipo[0] + '°' + tipo[1] + '°', // "descripcion: Barrido de  vías urbanas AREA TIPO A°monto: 3000°       ¬5fa36ac7c4579d2250e8558a",
                  'fechasancion' : dataanterior.createdAt ,
                  'monto' : tipo[2].split(':')[1].trim(),
                  'imposicion' : 'imposición',
                  'observaciones' : 'Multa generada manualmente (sanciones automaticas), ' + req.body.estructura.tiposancion,
                  'estado' : 'Activo',
                  'usuarionew' : req.body.estructura.usuarionew,
                  'usuarioup' : req.body.estructura.usuarionew,
                  'idempresa' : req.body.estructura.idempresa,
                  'idpapa' :  '' + idpagot + '',
          
              },
                tipo: 'detalle',
                tipo2: 'Formulario',
                ejecuta: 'this.ejecuta',
                bitacora: { idempresa : req.body.estructura.idempresa , idafiliado: '' ,
             email: req.body.estructura.usuarionew , permiso : 'Crea', accion: 'Crea en formulario movil'}
               };
        
               
               console.log(options)
               functool.creafrmregistro(req, res, next,'5f74c0fff22ed14ea01c1cbes','5f74c0fff22ed14ea01c1cbe',{
                // descripcion: Barrido de  vías urbanas AREA TIPO A°monto: 3000°plazoenminutospararesolver: 120°"
                'tiposancion' : tipo[0] + '°' + tipo[1] + '°', // "descripcion: Barrido de  vías urbanas AREA TIPO A°monto: 3000°       ¬5fa36ac7c4579d2250e8558a",
                'fechasancion' : dataanterior.createdAt ,
                'monto' : tipo[2].split(':')[1].trim(),
                'imposicion' : 'imposición',
                'observaciones' : 'Multa generada manualmente (sanciones automaticas), ' + req.body.estructura.tiposancion,
                'estado' : 'Activo',
                'usuarionew' : req.body.estructura.usuarionew,
                'usuarioup' : req.body.estructura.usuarionew,
                'idempresa' : req.body.estructura.idempresa,
                'idpapa' :  idpagot,
        
            },'siresponde',dataanterior,idpagot,'Formulario')
                 
            resolve({estado:'exito'}); 
        })();
                  break;
                  default:
                    // code block
                    resolve({estado:'exito'}); 
                }
          });
      }

      var procesofinalact= async function(req, res, next,dataanterior){
          return new Promise(resolve => {
              switch(req.body.ejecuta) {
                 
                  case '1_actualizainventarioaj': 
                  resolve({estado:'Existencia no valida'}); 
                  break;
                  default:
                    // code block
                    resolve({estado:'exito'}); 
                }
          });
      }

      var procesofinaldel= async function(req, res, next,dataanterior){
          return new Promise(resolve => {
              switch(req.body.ejecuta) {
                
                  case '1_actualizainventarioaj': 
                  resolve({estado:'Existencia no valida'}); 
                  break;
                  default:
                    // code block
                    resolve({estado:'exito'}); 
                }
          });
      }
    

//para los formularios ---------------------------------------------------------------------------
//para los formularios ---------------------------------------------------------------------------
//para los formularios ---------------------------------------------------------------------------
//para los formularios ---------------------------------------------------------------------------
        
        var formularioinicialcrea= async function(req, res, next,dataanterior){
          return new Promise(resolve => {
              console.log('ejecuta al inicio crea:' + req.body.ejecutainicio)
             
              switch(req.body.ejecutainicio) {
                
                  case '1_actualizainventarioaj': 

                  (async () => {
                    var ingreso=0
                    var salida=0
                    var saldoactual=0
                    var total=0
                    var existenciaactual=0
                    var cantidadingreso=0
                    var idproducto=req.body.estructura.producto.split('¬')[1]

                   

                    producto = await functool.dadatosformularioidfinal('5fc01bbba8d0a14888774579',{ _id:idproducto},req.body.estructura.idempresa,'5fc01bbba8d0a14888774579'); 

              

                
                    if(producto.existenciaactual)
                    {existenciaactual=Number(producto.existenciaactual)}
                    else{existenciaactual=0}

                    if(req.body.estructura.cantidad)
                    {
                        cantidadingreso=Number(req.body.estructura.cantidad)
                    }
                    else
                    {
                        cantidadingreso=0;
                    }


                  if(req.body.estructura.tipoajuste==='Salida')
                  {
                      salida=cantidadingreso
                      saldoactual=existenciaactual-salida
                  }
                  else
                  {
                    ingreso=cantidadingreso
                    saldoactual=existenciaactual+ingreso
                  }

                  total=saldoactual*Number(producto.precioporunidad)
                  kardex.create({
                    idempresa		: req.body.estructura.idempresa,  
                    fecha		: req.body.estructura.fecha,  
                    tipo		: req.body.estructura.tipoajuste,  
                    accion		: 'Ajuste de inventario',  
                    proveedor		: '',  
                    
                    nodockardex		: '',  
                    nodockardexlinea		: '',  
                    tarjetasanuladas: '',
                    estadoprint:'No impreso',
                    anulacion:'',
                    nodoc		: '123',  
                    iddocumento		: '123',  
                    categoria		:producto.categoria,
                    producto		: producto.codigoarticulo,  
                    idproducto:producto._id,
                    producton		: producto.descripciondelarticulo,
                    unidad: producto.unidaddemedida,
                    saldoanterior		: existenciaactual,
                    ingreso		: ingreso,
                    egreso		: salida,
                    saldoactual		: saldoactual,
                    obs:req.body.estructura.observaciones,
                    precioanterior:Number(producto.precioporunidad),
                    precio		: Number(producto.precioporunidad),
                    total		: total,
                  });
                  var estructura={
                    "precioporunidad" : producto.precioporunidad.toString(),
                    "existenciaactual" : saldoactual.toString(),
                    "total" :( saldoactual*Number(producto.precioporunidad)).toString()
                   
                }
                  producto = await functool.actualizaformularioidfinal('5fc01bbba8d0a14888774579',{ _id:idproducto},req.body.estructura.idempresa,'5fc01bbba8d0a14888774579',estructura); 
                  resolve({estado:'exito'}); 
               })();


                  
/*
                
                  */
                 
                  break;
                  default:
                    // code block
                    resolve({estado:'exito'}); 
                }
          });
      }

      var formularioinicialact= async function(req, res, next,dataanterior){
          return new Promise(resolve => {
            console.log('ejecuta al inicio actualiza:' + req.body.ejecutainicio)
              switch(req.body.ejecutainicio) {
                 
                  case '1_actualizainventarioaj': 
                  resolve({estado:'Existencia no valida'}); 
                  break;
                  default:
                    // code block
                    resolve({estado:'exito'}); 
                }
          });
      }

      var formularioinicialdel=  function(req, res, next,dataanterior){
          return new Promise(resolve => {
//5f503bededa4710798a79b84°Formulario°1_actualizainventarioaj°'
//req.params.recordID
            var arrtt=req.params.idempresa.split('°')

            console.log('ejecuta al inicio elimina:' + arrtt[2])
              switch(arrtt[2]) {
                
                  case '1_actualizainventarioaj': 
                  resolve({estado:'Existencia no valida'}); 
                  break;
                  default:
                    // code block
                    resolve({estado:'exito'}); 
                }
          });
        }

          var formulariofinalcrea= async function(req, res, next,dataanterior){
              console.log('entrafinalllllllll  crea');
   console.log(req.body)
            return new Promise(resolve => {
                switch(req.body.ejecuta) {
                  case '1_creacliente':

                          //
               (async () => {   
                 
                var est=req.body.estructura

              

                var ejecuta1=await  functool.ejecutasql('select count(*)+1 as codigo  from clientes',conecta2)
               var codigoaa=ejecuta1.datat.recordset[0].codigo 
                   
                var cad1=''//codigoc  codigos
             cad1="insert into clientes values ("+ est.codigoa +",'"+ est.nit +"','"+ est.nombre +"','"+ est.direccion +"','0','','GUATEMALA','"+ est.telefono +"',0,0,999999,'120101',1,30,0,'#PRL#','"+ est.dpi +"','','','GUATEMALA','','#PRL#','"+ est.correo +"','',0,null)"
        
               var ejecuta1=await  functool.ejecutasql(cad1,conecta2)

               //actualizar codigos en el formulario

               
               var estructura={
                "codigos" : codigoaa,
             
            }

              detalle = await functool.actualizaformularioidfinal('605a1f506886480f70f6ec12',{ _id:dataanterior._id.toString()},
              req.body.estructura.idempresa,'605a1f506886480f70f6ec12',estructura); 
              





               resolve({estado:'exito'}); 
              })();



               
                  break;
                  case '1_actualizainvrequisicion':
                    (async () => {
                        var ingreso=0
                        var salida=0
                        var saldoactual=0
                        var total=0
                        var existenciaactual=0
                        var precioproducto=0
                        var cantidadingreso=0
                        var idproducto=req.body.estructura.articulo.split('¬')[1]
                        console.log(req.body.estructura)
         
                        producto = await functool.dadatosformularioidfinal('5fc01bbba8d0a14888774579',{ _id:idproducto},req.body.estructura.idempresa,'5fc01bbba8d0a14888774579'); 
                        if(producto.descripciondelarticulo==='VIENEN DE LA' || producto.descripciondelarticulo==='ULTIMA LINEA')
                        { resolve({estado:'exito'}); }
                        else
                        {
    
                        
                        if(producto.existenciaactual)
                        {existenciaactual=Number(producto.existenciaactual)}
                        else{existenciaactual=0}
    
                        if(req.body.estructura.cantidaddespachada)
                        {
                            cantidadingreso=Number(req.body.estructura.cantidaddespachada)
                        }
                        else
                        {
                            cantidadingreso=0;
                        }
    
                
                          ingreso=0
                      
                        salida=cantidadingreso
                        saldoactual=existenciaactual-salida
                     
                      total=saldoactual*Number(producto.precioporunidad)
                      precioproducto=Number(producto.precioporunidad)
                      kardex.create({
                        idempresa		: req.body.estructura.idempresa,  
                        fecha		: req.body.papaitem.fecha,  
                        tipo		: 'Salida',  
                        accion		: 'Salida requisición',  
                        
                    nodockardex		: '',  
                    nodockardexlinea		: '',  
                    tarjetasanuladas: '',
                    estadoprint:'No impreso',
                    anulacion:'',
                        proveedor		: req.body.papaitem.departamento,  
                        nodoc		: req.body.papaitem.nodocumento.toString(),  
                        iddocumento		: dataanterior._id.toString(),  
                        categoria		:producto.categoria,
                        producto		: producto.codigoarticulo,  
                        unidad: producto.unidaddemedida,
                        idproducto:producto._id,
                        producton		: producto.descripciondelarticulo,
                        saldoanterior		: existenciaactual,
                        ingreso		: ingreso,
                        obs:'',
                        egreso		: salida,
                        saldoactual		: saldoactual,
                        precioanterior:Number(producto.precioporunidad),
                        precio		: Number(producto.precioporunidad),
                        total		: total,
                      });
                      var estructura={
                        "precioporunidad" : producto.precioporunidad.toString(),
                        "existenciaactual" : saldoactual.toString(),
                        "total" :( saldoactual*Number(producto.precioporunidad)).toString()
                      
                    }
                      producto = await functool.actualizaformularioidfinal('5fc01bbba8d0a14888774579',{ _id:idproducto},req.body.estructura.idempresa,'5fc01bbba8d0a14888774579',estructura); 

                      var estructura={
                        "subtotal" : ( Number(  Number(req.body.estructura.cantidaddespachada)*precioproducto).toFixed(2)).toString(),
                     
                    }

                      detalle = await functool.actualizaformularioidfinal('5fc03c79ab0f6448b877eb5c',{ _id:dataanterior._id.toString()},req.body.estructura.idempresa,'5fc03c79ab0f6448b877eb5cs',estructura); 
                      

                      resolve({estado:'exito'}); 
                  }
                   })();
    
    
                  
                   
                 
                    break;
                    case '1_formulario1hpone': 
                    (async () => {
                        var ingreso=0
                        var salida=0
                        var saldoactual=0
                        var total=0
                        var existenciaactual=0
                        var cantidadingreso=0
                        var precioproducto=0
                        var precioingreso=0
                        var preciomedio=0
                        var idproducto=req.body.estructura.articulo.split('¬')[1]
    
                        precioingreso=Number(req.body.estructura.preciounitario)
         
                        producto = await functool.dadatosformularioidfinal('5fc01bbba8d0a14888774579',{ _id:idproducto},req.body.estructura.idempresa,'5fc01bbba8d0a14888774579'); 
                        
                        if(producto.descripciondelarticulo==='VIENEN DE LA' || producto.descripciondelarticulo==='ULTIMA LINEA')
                        { resolve({estado:'exito'}); }
                        else
                        {
    
                        

                        if(producto.existenciaactual)
                        {existenciaactual=Number(producto.existenciaactual)}
                        
                        else{existenciaactual=0}
    
                        if(req.body.estructura.cantidad)
                        {
                            cantidadingreso=Number(req.body.estructura.cantidad)
                        }
                        else
                        {
                            cantidadingreso=0;
                        }
    
                
                          salida=0
                      
                        ingreso=cantidadingreso
                        saldoactual=existenciaactual+ingreso
                        preciomedio=(precioingreso+Number(producto.precioporunidad))/2

                        precioproducto=Number(producto.precioporunidad)
    
                      total=saldoactual*Number(precioingreso)
                      kardex.create({
                        idempresa		: req.body.estructura.idempresa,  
                        fecha		: req.body.papaitem.fecha,  
                        tipo		: 'Entrada',  
                        accion		: 'Ingreso formulario 1-H',  
                        proveedor		: req.body.papaitem.proveedor,  
                        nodoc		: req.body.papaitem.codigo.toString(),  
                        iddocumento		: dataanterior._id.toString(),  
                        categoria		:producto.categoria,
                        
                    nodockardex		: '',  
                    nodockardexlinea		: '',  
                    tarjetasanuladas: '',
                    estadoprint:'No impreso',
                    anulacion:'',
                        producto		: producto.codigoarticulo,  
                        idproducto:producto._id,
                        producton		: producto.descripciondelarticulo,
                        unidad: producto.unidaddemedida,
                        saldoanterior		: existenciaactual,
                        ingreso		: ingreso,
                        obs:'',
                        egreso		: salida,
                        saldoactual		: saldoactual,
                        precioanterior:producto.precioporunidad,
                        precio		: preciomedio,//precioingreso,//preciomedio,
                        total		: total,
                      });
                      var estructura={
                        "precioporunidad" :  preciomedio.toString(),//producto.precioporunidad.toString(),//
                        "existenciaactual" : saldoactual.toString(),
                        "total" :( saldoactual*Number(producto.precioporunidad)).toString()

                      
                    }
                      producto = await functool.actualizaformularioidfinal('5fc01bbba8d0a14888774579',{ _id:idproducto},req.body.estructura.idempresa,'5fc01bbba8d0a14888774579',estructura); 
                      var estructura={
                        "subtotal" : ( Number(  Number(req.body.estructura.cantidad)*precioproducto).toFixed(2)).toString(),
                     
                    }

                      detalle = await functool.actualizaformularioidfinal('5fc0308c2fc3552d10147947',{ _id:dataanterior._id.toString()},req.body.estructura.idempresa,'5fc0308c2fc3552d10147947',estructura); 
                      resolve({estado:'exito'}); 
                  }
                   })();
    
    
                  
                   
                 
                    break;
                    default:
                      // code block
                      resolve({estado:'exito'}); 
                  }
            });
        }
 
 
      
        var formularioanula= async function(req, res, next,dataanterior){
            console.log(req.body)
            return new Promise(resolve => {
                switch(req.body.idformulario) {//REQUISICION
                    case '5ff67ee82977bb360c526f8a':
                        (async () => {

                            
                            detalle = await functool.dadatosformulario('5fc03c79ab0f6448b877eb5c',{ idpapa:req.body.idform},req.body.idempresa); 
                            (async () => {
                            for(var i = 0; i < detalle.length;i++){

                            //    (async () => {
                            var ingreso=0
                            var salida=0
                            var saldoactual=0
                            var total=0
                            var existenciaactual=0
                            var cantidadingreso=0
                            var idproducto=detalle[i].articulo.split('¬')[1]
        
             
                            producto = await functool.dadatosformularioidfinal('5fc01bbba8d0a14888774579',{ _id:idproducto},detalle[i].idempresa,'5fc01bbba8d0a14888774579'); 
                        
                            if(producto.existenciaactual)
                            {existenciaactual=Number(producto.existenciaactual)}
                            else{existenciaactual=0}
        
                            if(detalle[i].cantidaddespachada)
                            {
                                cantidadingreso=Number(detalle[i].cantidaddespachada)
                            }
                            else
                            {
                                cantidadingreso=0;
                            }
        
                    
                              salida=0
                          
                            ingreso=cantidadingreso
                            saldoactual=existenciaactual+ingreso

                        
                          total=saldoactual*Number(producto.precioporunidad)
                          kardex.create({
                            idempresa		: detalle[i].idempresa,  
                            fecha		: req.body.papaitem.fecha,  
                            tipo		: 'Entrada',  
                            accion		: 'Anula Salida requisición',  
                            proveedor		: req.body.papaitem.departamento,  
                            nodoc		: req.body.papaitem.nodocumento.toString(),  
                            iddocumento		: detalle[i]._id.toString(),  
                            categoria		:producto.categoria,
                            producto		: producto.codigoarticulo,  
                                    
                            nodockardex		: '',  
                            nodockardexlinea		: '',  
                            tarjetasanuladas: '',
                            estadoprint:'No impreso',
                            anulacion:'',
                            idproducto:producto._id,
                            producton		: producto.descripciondelarticulo,
                            unidad: producto.unidaddemedida,
                            saldoanterior		: existenciaactual,
                            ingreso		: ingreso,
                            obs:'',
                            egreso		: salida,
                            saldoactual		: saldoactual,
                            precioanterior:Number(producto.precioporunidad),
                            precio		: Number(producto.precioporunidad),
                            total		: total,
                          });
                          var estructura={
                            "precioporunidad" : producto.precioporunidad.toString(),
                            "existenciaactual" : saldoactual.toString(),
                            "total" :( saldoactual*Number(producto.precioporunidad)).toString()
                          
                        }
                          producto = await functool.actualizaformularioidfinal('5fc01bbba8d0a14888774579',{ _id:idproducto},detalle[i].idempresa,'5fc01bbba8d0a14888774579',estructura); 
                    //})();

                    }
                })();
                          resolve({estado:'exito'}); 
                       })();
        
        
                      
                       
                     
                        break;//H-1
                        case '5fc02f572fc3552d1014792f': 
                        (async () => {

                            detalle = await functool.dadatosformulario('5fc0308c2fc3552d10147947',{ idpapa:req.body.idform},req.body.idempresa); 
                            (async () => {
                            for(var i = 0; i < detalle.length;i++){

                            var ingreso=0
                            var salida=0
                            var saldoactual=0
                            var total=0
                            var existenciaactual=0
                            var cantidadingreso=0
                            var idproducto=detalle[i].articulo.split('¬')[1]
        
             
                            producto = await functool.dadatosformularioidfinal('5fc01bbba8d0a14888774579',{ _id:idproducto},detalle[i].idempresa,'5fc01bbba8d0a14888774579'); 
                        
                            if(producto.existenciaactual)
                            {existenciaactual=Number(producto.existenciaactual)}
                            else{existenciaactual=0}
        
                            if(detalle[i].cantidad)
                            {
                                cantidadingreso=Number(detalle[i].cantidad)
                            }
                            else
                            {
                                cantidadingreso=0;
                            }
        
                    
                              entrada=0
                          
                            salida=cantidadingreso
                            saldoactual=existenciaactual-salida
                          
        
                          total=saldoactual*Number(producto.precioporunidad)
                          kardex.create({
                            idempresa		: detalle[i].idempresa,  
                            fecha		: req.body.papaitem.fecha,  
                            tipo		: 'Salida',  
                            accion		: 'Anula Ingreso formulario 1-H',  
                            proveedor		: req.body.papaitem.proveedor,  
                            nodoc		: req.body.papaitem.codigo.toString(),  
                            iddocumento		: detalle[i]._id.toString(),  
                            categoria		:producto.categoria,
                            producto		: producto.codigoarticulo,  
                            unidad: producto.unidaddemedida,
                            
                    nodockardex		: '',  
                    nodockardexlinea		: '',  
                    tarjetasanuladas: '',
                    estadoprint:'No impreso',
                    anulacion:'',
                            idproducto:producto._id,
                            producton		: producto.descripciondelarticulo,
                            saldoanterior		: existenciaactual,
                            ingreso		: ingreso,
                            obs:'',
                            egreso		: salida,
                            saldoactual		: saldoactual,
                            precioanterior:Number(producto.precioporunidad),
                            precio		: Number(producto.precioporunidad),
                            total		: total,
                          });
                          var estructura={
                            "precioporunidad" : producto.precioporunidad.toString(),
                            "existenciaactual" : saldoactual.toString(),
                            "total" :( saldoactual*Number(producto.precioporunidad)).toString()
                          
                        }
                          producto = await functool.actualizaformularioidfinal('5fc01bbba8d0a14888774579',{ _id:idproducto},detalle[i].idempresa,'5fc01bbba8d0a14888774579',estructura); 
                        }
                    })();
                          resolve({estado:'exito'}); 
                       })();
        
        
                      
                       
                     
                        break;
                        default:
                          // code block
                          resolve({estado:'exito'}); 
                  
                  }
            });
        }


      
        var formularioejecutaactualiza= async function(req, res, next,dataanterior){
          return new Promise(resolve => {
            console.log('ejecuta al inicio actualiza:' + req.body.ejecutainicio)
              switch(req.body.ejecutaactualiza) {
                 
                  case '2_actualizacliente': 

               //insert into clientes values (#codigota#,'#PNIT#','#PNOMBRE#','#PDIRECCION#','0','','GUATEMALA','#PTELEFONO#',0,0,999999,'120101',1,30,0,'#PRL#','#PDPI#','','','GUATEMALA','','#PRL#','#PCORREO#','',0,null)
               (async () => {   
                 
                var est=req.body.estructura
                   
                var cad1=''//codigoc  codigos
             cad1="update clientes set nombre='" + est.nombre +"',nit='" + est.nit +"' ,direccion='" + est.direccion +"' ,telefono='" + est.telefono +"' ,correo='" + est.correo +"'   where codigo="+ est.codigoa
        
               var ejecuta1=await  functool.ejecutasql(cad1,conecta2)
               resolve({estado:'Existencia no valida'}); 
              })();



               
                  break;
                  default:
                    // code block
                    resolve({estado:'exito'}); 
                }
          });
      }

      var formularioejecutaelimina= async function(req, res, next,dataanterior){
        return new Promise(resolve => {
          console.log('ejecuta al inicio actualiza:' + req.body.ejecutainicio)
            switch(req.body.ejecutaelimina) {
               
                case '2_eliminacliente': 
                                        //
               (async () => {   
                 
                var est=req.body.estructura
                   
                var cad1=''//codigoc  codigos
             cad1="delete from  clientes where codigo="+ est.codigoa 
        
               var ejecuta1=await  functool.ejecutasql(cad1,conecta2)

               //actualizar codigos en el formulario

               resolve({estado:'exito'}); 
              })();


                break;
                case '1_actualizainvrequisicion':
                  (async () => {
                      var ingreso=0
                      var salida=0
                      var saldoactual=0
                      var total=0
                      var existenciaactual=0
                      var cantidadingreso=0
                      var idproducto=req.body.estructura.articulo.split('¬')[1]
  
       
                      producto = await functool.dadatosformularioidfinal('5fc01bbba8d0a14888774579',{ _id:idproducto},req.body.estructura.idempresa,'5fc01bbba8d0a14888774579'); 
                  
                      if(producto.existenciaactual)
                      {existenciaactual=Number(producto.existenciaactual)}
                      else{existenciaactual=0}
  
                      if(req.body.estructura.cantidaddespachada)
                      {
                          cantidadingreso=Number(req.body.estructura.cantidaddespachada)
                      }
                      else
                      {
                          cantidadingreso=0;
                      }
  
              
                        salida=0
                    
                      ingreso=cantidadingreso
                      saldoactual=existenciaactual+ingreso

                  
                    total=saldoactual*Number(producto.precioporunidad)
                    kardex.create({
                      idempresa		: req.body.estructura.idempresa,  
                      fecha		: req.body.papaitem.fecha,  
                      tipo		: 'Entrada',  
                      accion		: 'Elimina Salida requisición',  
                      proveedor		: req.body.papaitem.departamento,  
                      nodoc		: req.body.papaitem.nodocumento.toString(),  
                      iddocumento		: req.body.estructura._id.toString(),  
                      categoria		:producto.categoria,
                      producto		: producto.codigoarticulo,  
                      unidad: producto.unidaddemedida,
                      
              nodockardex		: '',  
              nodockardexlinea		: '',  
              tarjetasanuladas: '',
              estadoprint:'No impreso',
              anulacion:'',
                      idproducto:producto._id,
                      producton		: producto.descripciondelarticulo,
                      saldoanterior		: existenciaactual,
                      ingreso		: ingreso,
                      obs:'',
                      egreso		: salida,
                      saldoactual		: saldoactual,
                      precioanterior:Number(producto.precioporunidad),
                      precio		: Number(producto.precioporunidad),
                      total		: total,
                    });
                    var estructura={
                      "precioporunidad" : producto.precioporunidad.toString(),
                      "existenciaactual" : saldoactual.toString(),
                      "total" :( saldoactual*Number(producto.precioporunidad)).toString()
                    
                  }
                    producto = await functool.actualizaformularioidfinal('5fc01bbba8d0a14888774579',{ _id:idproducto},req.body.estructura.idempresa,'5fc01bbba8d0a14888774579',estructura); 
                    resolve({estado:'exito'}); 
                 })();
  
  
                
                 
               
                  break;
                  case '1_formulario1hpone': 
                  (async () => {
                      var ingreso=0
                      var salida=0
                      var saldoactual=0
                      var total=0
                      var existenciaactual=0
                      var cantidadingreso=0
                      var idproducto=req.body.estructura.articulo.split('¬')[1]
  
       
                      producto = await functool.dadatosformularioidfinal('5fc01bbba8d0a14888774579',{ _id:idproducto},req.body.estructura.idempresa,'5fc01bbba8d0a14888774579'); 
                  
                      if(producto.existenciaactual)
                      {existenciaactual=Number(producto.existenciaactual)}
                      else{existenciaactual=0}
  
                      if(req.body.estructura.cantidad)
                      {
                          cantidadingreso=Number(req.body.estructura.cantidad)
                      }
                      else
                      {
                          cantidadingreso=0;
                      }
  
              
                        entrada=0
                    
                      salida=cantidadingreso
                      saldoactual=existenciaactual-salida
                    
  
                    total=saldoactual*Number(producto.precioporunidad)
                    kardex.create({
                      idempresa		: req.body.estructura.idempresa,  
                      fecha		: req.body.papaitem.fecha,  
                      tipo		: 'Salida',  
                      accion		: 'Elimina Ingreso formulario 1-H',  
                      proveedor		: req.body.papaitem.proveedor,  
                      nodoc		: req.body.papaitem.codigo.toString(),  
                      iddocumento		: req.body.estructura._id.toString(),  
                      categoria		:producto.categoria,
                      producto		: producto.codigoarticulo,  
                      
              nodockardex		: '',  
              nodockardexlinea		: '',  
              tarjetasanuladas: '',
              estadoprint:'No impreso',
              anulacion:'',
                      idproducto:producto._id,
                      producton		: producto.descripciondelarticulo,
                      saldoanterior		: existenciaactual,
                      unidad: producto.unidaddemedida,
                      ingreso		: ingreso,
                      obs:'',
                      egreso		: salida,
                      saldoactual		: saldoactual,
                      precioanterior:Number(producto.precioporunidad),
                      precio		: Number(producto.precioporunidad),
                      total		: total,
                    });
                    var estructura={
                      "precioporunidad" : producto.precioporunidad.toString(),
                      "existenciaactual" : saldoactual.toString(),
                      "total" :( saldoactual*Number(producto.precioporunidad)).toString()
                    
                  }
                    producto = await functool.actualizaformularioidfinal('5fc01bbba8d0a14888774579',{ _id:idproducto},req.body.estructura.idempresa,'5fc01bbba8d0a14888774579',estructura); 
                    resolve({estado:'exito'}); 
                 })();
  
  
                
                 
               
                  break;
                  default:
                  // code block
                  resolve({estado:'exito'}); 
              }
        });
    }

module.exports = {
    visitas_programadas: visitas_programadas,
 
  
    formularioejecutaactualiza:formularioejecutaactualiza,
    formularioejecutaelimina:formularioejecutaelimina,
 
  
    procesoinicialcrea: procesoinicialcrea,
    procesoinicialact: procesoinicialact,
    procesoinicialdel: procesoinicialdel,


    procesofinalcrea: procesofinalcrea,
    procesofinalact: procesofinalact,
    procesofinaldel: procesofinaldel,



    formularioinicialcrea: formularioinicialcrea,
    formularioinicialact: formularioinicialact,
    formularioinicialdel: formularioinicialdel,


    formulariofinalcrea: formulariofinalcrea,
    
    
    formularioanula: formularioanula
      }
