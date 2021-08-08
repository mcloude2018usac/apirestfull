
var Frmmovil = require('../models/frmmovil');
var Frmmovild = require('../models/frmmovild');
var Bitacora = require('../models/bitacora');
var Catusuario = require('../models/catusuario');
var Formcat2 = require('../models/frmcat2');
var formulariousrd = require('../models/formulariousrd');
var formulariousr = require('../models/formulariousr');
var functool = require('./funcionesnode');
var kardex = require('../models/asociadoventa/kardexcorreos');
var kardexproducto = require('../models/asociadoventa/kardexcorreosproducto');
                            




var ejecutacomandos=async  function(req, res, next){

  return new Promise(resolve => {
    var aa=req.body.ejecuta
  console.log('ejecuta operacion ' +  aa)
    switch(aa) {
 
      case '5f729c2487c9e33bd4ada798°608d6e228c872d219486c94c°Generación de archivo de pagos (csv)'://genera excel pagos
      (async () => {

      
  var markup;

  //buscar todos los contratos activos
  //buscar todas las enmiendas activas

  var contratos = await functool.dadatosformulariofinal('5f729c2487c9e33bd4ada798',{ estado:'Activo'},req.body.idempresa,'5f729c2487c9e33bd4ada798'); 



  var papasuper=[];
  var contratosd=[]

  
  for(var i = 0; i < contratos.length;i++){
    papasuper.push('' + contratos[i]._id + '')
    contratosd.push({_id: contratos[i]._id ,empresa:contratos[i].empresa.split('<br>')[1].split(':')[1]
    ,proyecto:  contratos[i].proyecto.split('<br>')[1].split(':')[1] + '(' +contratos[i].proyecto.split('<br>')[0].split(':')[1] + ')'})
}



  var enmiendas = await functool.dadatosformulariofinal('5f72a12587c9e33bd4ada7ab',{idpapa:{$in:papasuper},idempresa:req.body.idempresa, 
  estado:'Activo'},req.body.idempresa,'5f72a12587c9e33bd4ada7abs'); 
  
  
  papasuper=[];
var enmiendasd=[]
  for(var i = 0; i < enmiendas.length;i++){
      papasuper.push('' + enmiendas[i]._id + '')
      for(var ii = 0; ii < contratosd.length;ii++){
        if(String(contratosd[ii]._id)===String(enmiendas[i].idpapa))
        {
          enmiendasd.push({_id: enmiendas[i]._id ,empresa:contratosd[ii].empresa
      ,proyecto:contratosd[ii].proyecto})

        }
      }
  }

  
  var pagos = await functool.dadatosformulariofinal('5f595df92521cd38c8fe3126',{idpapa:{$in:papasuper},idempresa:req.body.idempresa, 
  estado:'Pendiente'},req.body.idempresa,'5f595df92521cd38c8fe3126')
  
  
    
  var todos20=[];
 var paparepetido=''
 
  for(var i = 0; i < pagos.length;i++){
    if( pagos[i].idpapa!==paparepetido)
    {

      for(var ii = 0; ii < enmiendasd.length;ii++){
        if(String(enmiendasd[ii]._id)===String(pagos[i].idpapa))
        {

          todos20.push({"_id" : pagos[i]._id,
          "empresa":enmiendasd[ii].empresa,
          "proyecto":enmiendasd[ii].proyecto,
          "tipodeaporte" : pagos[i].tipodeaporte,
          "nopago" : pagos[i].nopago,
          "fechainicial" : pagos[i].fechainicial,
          "fechapago" : pagos[i].fechapago,
          "periodopago" : pagos[i].periodopago,
          "nofactura" : pagos[i].nofactura,
          "descripcionpago" : pagos[i].descripcionpago,
          "montopago" :pagos[i].montopago,
          "montosanciones" : pagos[i].montosanciones,
          "montoemergencia" : pagos[i].montoemergencia,
          "montoapagar" :pagos[i].montoapagar,
          "bancotransferencia" : pagos[i].bancotransferencia,
          "nocuenta" : pagos[i].nocuenta,
          "observaciones" : pagos[i].observaciones,
        
          "idpapa" : pagos[i].idpapa,
          "estado" :pagos[i].estado,
          "idempresa" : pagos[i].idempresa})


        }
      }
    
      paparepetido=pagos[i].idpapa
    }
    {
      paparepetido=pagos[i].idpapa
    }
  }


  


  
     //   var todos20 = await functool.dadatosformulariofinal(req.body.idform,{ idpapa:req.body.idpapa},req.body.idempresa,req.body.idform); 
        markup=''
        markup=markup+'<table id="excel-table" border="1">'

        
        markup=markup+'<tr><td contenteditable="true" colspan="1">'+ '_id'+'</td> '
        markup=markup+'<td contenteditable="true" colspan="1">'+ 'EMPRESA'+'</td> '
        markup=markup+'<td contenteditable="true" colspan="1">'+ 'PROYECTO'+'</td> '
        markup=markup+'<td contenteditable="true" colspan="1">'+ 'TIPO APORTE'+'</td> '
        markup=markup+'<td contenteditable="true" colspan="1">'+'NO PAGO' +'</td> '
        markup=markup+'<td contenteditable="true" colspan="1">'+ 'FECHA INICIAL'+'</td> '
        markup=markup+'<td contenteditable="true" colspan="1">'+'FECHA PAGO' +'</td> '
        markup=markup+'<td contenteditable="true" colspan="1">'+'PERIODO PAGO' +'</td> '
        markup=markup+'<td contenteditable="true" colspan="1">'+'NO FACTURA' +'</td> '
        markup=markup+'<td contenteditable="true" colspan="1">'+'DESCRIPCION DE PAGO' +'</td> '
        markup=markup+'<td contenteditable="true" colspan="1">'+ 'MONTO DE PAGO'+'</td> '
        markup=markup+'<td contenteditable="true" colspan="1">'+ 'MONTO A PAGAR'+'</td> '
        markup=markup+'<td contenteditable="true" colspan="1">'+'BANCO TRANSFERENCIA' +'</td> '
        markup=markup+'<td contenteditable="true" colspan="1">'+ 'NO DE CUENTA'+'</td> '
        markup=markup+'<td contenteditable="true" colspan="1">'+ 'OBSERVACIONES'+'</td> '
        markup=markup+'<td contenteditable="true" colspan="1">'+ 'ESTADO'+'</td> '
        markup=markup+'<td contenteditable="true" colspan="1">'+'idempresa' +'</td> '
        markup=markup+'<td contenteditable="true" colspan="1">'+ 'idpapa'+'</td>    </tr>'
        for(var i = 0; i < todos20.length;i++){
          markup=markup+'<tr><td contenteditable="true" colspan="1">'+ todos20[i]._id+'</td> '
          markup=markup+'<td contenteditable="true" colspan="1">'+ todos20[i].empresa+'</td> '
          markup=markup+'<td contenteditable="true" colspan="1">'+ todos20[i].proyecto+'</td> '
          markup=markup+'<td contenteditable="true" colspan="1"></td> '
          markup=markup+'<td contenteditable="true" colspan="1">'+todos20[i].nopago +'</td> '
          markup=markup+'<td contenteditable="true" colspan="1">'+ todos20[i].fechainicial+'</td> '
          markup=markup+'<td contenteditable="true" colspan="1">'+todos20[i].fechapago +'</td> '
          markup=markup+'<td contenteditable="true" colspan="1">'+todos20[i].periodopago +'</td> '
          markup=markup+'<td contenteditable="true" colspan="1">'+todos20[i].nofactura +'</td> '
          markup=markup+'<td contenteditable="true" colspan="1">'+todos20[i].descripcionpago +'</td> '
          markup=markup+'<td contenteditable="true" colspan="1">'+ todos20[i].montopago+'</td> '
          markup=markup+'<td contenteditable="true" colspan="1">'+ todos20[i].montoapagar+'</td> '
          markup=markup+'<td contenteditable="true" colspan="1">'+todos20[i].bancotransferencia +'</td> '
          markup=markup+'<td contenteditable="true" colspan="1">'+ todos20[i].nocuenta+'</td> '
          markup=markup+'<td contenteditable="true" colspan="1">'+ todos20[i].observaciones+'</td> '
          markup=markup+'<td contenteditable="true" colspan="1">'+ todos20[i].estado+'</td> '
          markup=markup+'<td contenteditable="true" colspan="1">'+todos20[i].idempresa +'</td> '
          markup=markup+'<td contenteditable="true" colspan="1">'+ todos20[i].idpapa+'</td>  </tr>'


        }

      


        
        resolve({estado:'exito',data:markup,tipo:'csv'}); 

      })();
        break;
      case '5f595df92521cd38c8fe3126°606f8da8f0e7551a88ac449b°Genera emergencias': //genera emergencias
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
                  
                  
                  resolve({estado:'exito',data:{estado:'Operación realizada con exito'},tipo:''}); 
                }


           

             }
        
      })();
      break;
      case '5f595df92521cd38c8fe3126°606f8d8cf0e7551a88ac4499°Generación de pagos': //generapagos
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

                
                resolve({estado:'exito',data:{estado:'Operación realizada con exito'},tipo:''}); 

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
          var aa=req.body.ejecuta.split('°')

          if(aa[2])
          {

            switch(aa[2]) {
              case 'Rectificación':
                (async () => {
               
                  req.body.optionorden.estructura['grupoasignado']=   [      [        functool.darectiact(req.body.idform)            ]      ];
                  var creaorden = await functool.creafrmregistroproceso(req); 
                  var ordenvieja=req.body.acumulados[0].item.sequenciag
                  var idt=req.body.acumulados[0].item._id
                  var ordennueva =creaorden.sequenciag

                  tray = await functool.actualizatrayectoria(creaorden._id,idt,creaorden.createdAt,req.body.usuarioejecutor ); 

      


                  var ordenoriginal=''
                  if(req.body.itemsx.papaorigen)
                  {
                   ordenpapa = await functool.dadatosformularioidfinal( req.body.idform,{ _id:req.body.itemsx.papaorigen
                  }
                  ,req.body.idempresa, req.body.idform); 
                  ordenoriginal=ordenpapa.sequenciag
                  }
                  else
                  {
                    ordenoriginal=ordenvieja
                  }
        
        //CERRAR LA ORDEN VIEJA
                            
                  var ejecuta1=await  functool.ejecutasql("update ticket set pasaticketno='" + ordennueva +"' where noticket="+
                  Number(ordenvieja),functool.daconectasql(req.body.idform),null)
         
        
                  


                  var est=creaorden
                  var aduana=est.aduana.split('¬')[1]
                  var cliente=est.cliente.split('¬')[1]

         
        producto = await functool.actualizaformularioidfinal(req.body.optionorden.formulario,{ _id:idt},
          req.body.optionorden.bitacora.idempresa,req.body.optionorden.formulario,
          {"estadointerno":"Cerrardo","actividadclasexxx" : "FINAL",                  "estadoordenxxx" : "cerrada"}); 


          tary2= await functool.creatrayectoriatoid(idt,req.body.optionorden.formulario,req.body.optionorden.formulario,new Date(), 
          req.body.usuarioejecutor,req.body.nidform,req.body.actividadsigaccion,req.body.fecha);
          
             

       //creatrayectoriatoid(idt,req.body.optionorden.formulario,req.body.optionorden.formulario,new Date(), req.body.usuarioejecutor,req.body.nidform,req.body.actividadsigaccion)
       
        
                  aduanat = await functool.dadatosformularioidfinal('605a21c86886480f70f6ec2d',{ _id:aduana}
                  ,req.body.idempresa,'605a21c86886480f70f6ec2ds'); 
        
                  
                  clientet = await functool.dadatosformularioidfinal('605a1f506886480f70f6ec12',{ _id:cliente}
                  ,req.body.idempresa,'605a1f506886480f70f6ec12'); 
        
                  var cad="insert into ticket values("+ Number(ordennueva) +",'',"+ 
                  clientet.codigoa +",getdate(),1,'',0,"+  functool.daconectaorden(req.body.idform)+",'"+ est.referencia +"',0,"+  Number(ordenvieja) +",0,0,0,0,0,"+ aduanat.idcig +",0,'',0,'"+ 
                  aduanat.nombre +"',null,'"+ clientet.nombre +"','','',0,0,0,0,0,'',"+ Number(ordenoriginal) +",'','',1,'0','"+ est.master +"','"+ est.contenedor +"')"
        
                  var ejecuta1=await  functool.ejecutasql( cad,functool.daconectasql(req.body.idform))

        
        
                  resolve({estado:'exito',data:{estado:'No ticket creado segun rectificación: ' + ordennueva}}); 
                })();
                break;
                case 'Complementaria':
                  (async () => {
                    req.body.optionorden.estructura['grupoasignado']=   [      [      functool.darectiact(req.body.idform)            ]      ];
                    var creaorden = await functool.creafrmregistroproceso(req); 
                    var ordenvieja=req.body.acumulados[0].item.sequenciag
                    var idt=req.body.acumulados[0].item._id
                    var ordennueva =creaorden.sequenciag
  
                    tray = await functool.actualizatrayectoria(creaorden._id,idt,creaorden.createdAt,req.body.usuarioejecutor ); 
  
        
                    
                  var ordenoriginal=''
                  if(req.body.itemsx.papaorigen)
                  {
                   ordenpapa = await functool.dadatosformularioidfinal( req.body.idform,{ _id:req.body.itemsx.papaorigen
                  }
                  ,req.body.idempresa, req.body.idform); 
                  ordenoriginal=ordenpapa.sequenciag
                  }
                  else
                  {
                    ordenoriginal=ordenvieja
                  }
        
          //CERRAR LA ORDEN VIEJA
                              
                    var ejecuta1=await  functool.ejecutasql("update ticket set pasaticketno='" + ordennueva +"' where noticket="+
                    Number(ordenvieja),functool.daconectasql(req.body.idform),null)
           
          
                    var est=creaorden
                    var aduana=est.aduana.split('¬')[1]
                    var cliente=est.cliente.split('¬')[1]


                    producto = await functool.actualizaformularioidfinal(req.body.optionorden.formulario,{ _id:idt},
                      req.body.optionorden.bitacora.idempresa,req.body.optionorden.formulario,{"estadointerno":"Cerrardo","actividadclasexxx" : "FINAL",                  "estadoordenxxx" : "cerrada"}); 
                   
                      tary2= await functool.creatrayectoriatoid(idt,req.body.optionorden.formulario,req.body.optionorden.formulario,new Date(), 
                      req.body.usuarioejecutor,req.body.nidform,req.body.actividadsigaccion,req.body.fecha);
                      
                         
          
                    aduanat = await functool.dadatosformularioidfinal('605a21c86886480f70f6ec2d',{ _id:aduana}
                    ,req.body.idempresa,'605a21c86886480f70f6ec2ds'); 
          
                    
                    clientet = await functool.dadatosformularioidfinal('605a1f506886480f70f6ec12',{ _id:cliente}
                    ,req.body.idempresa,'605a1f506886480f70f6ec12'); 
          
                    var cad="insert into ticket values("+ Number(ordennueva) +",'',"+ 
                    clientet.codigoa +",getdate(),1,'',0,"+functool.daconectaorden(req.body.idform)+ ",'"+ est.referencia +"',0,"+  Number(ordenvieja) +",0,0,0,0,0,"+ aduanat.idcig +",0,'',0,'"+ 
                    aduanat.nombre +"',null,'"+ clientet.nombre +"','','',0,0,0,0,0,'',"+ Number(ordenoriginal) +",'','',1,'0','"+ est.master +"','"+ est.contenedor +"')"
          
                    var ejecuta1=await  functool.ejecutasql( cad,functool.daconectasql(req.body.idform))
          
          
                    resolve({estado:'exito',data:{estado:'No ticket creado segun complementaria: ' + ordennueva}}); 
                })();
                  break;
                
                  case 'Trasladar Datos a Campos':
                    (async () => {
                    //select ticket tabla segun orden segun noticket de la orden
                    //copia a camposdb
        
                    var ordenvieja=req.body.acumulados[0].item.sequenciag
        
                    var cad="   INSERT INTO [camposbd].[dbo].[ticket]([noticket],[Polizaaduana],[idcliente],[fechaticket],[estadoticket],[fechacerrado],[factura],[libre],[libretexto],[pasaticketno],[vieneticketno],[Cargos],[abonocliente],[montofacturar],[montofacturado],[dias],[filial],[abonosertobar],[regimen],[vuelto],[aduana],[nombreinteresado],[nitinteresado],[dirinteresado],[fob],[flete],[seguro],[otros],[cif],[numerodua],[ticketoriginal],[libretexto2],[libretexto3],[tasadecambio],[liqembarque],[embarquemaster],[contenedor])  select         [noticket],[Polizaaduana],[idcliente],[fechaticket],[estadoticket],[fechacerrado],[factura],[libre],[libretexto],[pasaticketno],[vieneticketno],[Cargos],[abonocliente],[montofacturar],[montofacturado],[dias],[filial],[abonosertobar],[regimen],[vuelto],[aduana],[nombreinteresado],[nitinteresado],[dirinteresado],[fob],[flete],[seguro],[otros],[cif],[numerodua],[ticketoriginal],[libretexto2],[libretexto3],[tasadecambio],[liqembarque],[embarquemaster],[contenedor]  from ticket where noticket=" +Number(ordenvieja) 
        
                    var ejecuta2=await  functool.ejecutasql(cad ,functool.daconectasql(req.body.idform))
        
        
        
         
        
        
                
        resolve({estado:'exito',data:{estado:'Operación realizada con exito'}}); 
                 
                  })();
                  break;
                  default:
                
                    resolve({estado:'exito',data:{estado:''}}); 

                }
            

          }
          else
          {
            resolve({estado:'exito',data:{estado:''}}); 
          }



          
      }
});




}


module.exports = {
    ejecutacomandos: ejecutacomandos,
 
  
      }
