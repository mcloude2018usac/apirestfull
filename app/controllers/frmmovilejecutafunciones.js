'use strict';

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

var Poliza = require('../models/ges/poliza');


    

var daejecutafunciones= async function(req, res, next,dataanterior){
    console.log(req.params)
    return new Promise(resolve => {

        switch(req.params.id) {
             case 'getcombopagocontratos':
            (async () => {
            var jsonObject = functool.stringToObject( req.params.id2);

          
            var campost=req.params.id2
     
            var idempresa=req.params.id3
        
            var contrato=String(jsonObject.contrato).split('¬')[1]
            var filtro={estado:'Activo',idpapa:contrato}
            //enmiendas
            const ans = await functool.daidformreg('5f72a12587c9e33bd4ada7abs',filtro,{_id:-1},idempresa,'5f72a12587c9e33bd4ada7ab'); 

var papasx=[]
for(var i = 0; i <ans.length; i++) {
papasx.push('' + ans[i]._id)
}

             var arr=req.params.id3.split('°')
             const pagosf = await functool.daidformreg('5f595df92521cd38c8fe3126',{
                idpapa:{$in:papasx}
                ,estado:'Pendiente'},{_id:1},idempresa,'5f595df92521cd38c8fe3126'); 



                var enmiendax=[]
for(var i = 0; i <pagosf.length; i++) {
enmiendax.push('' + pagosf[i]._id)
}

const multas = await functool.daidformreg('5f74c0fff22ed14ea01c1cbes',{
idpapa:{$in:enmiendax}
,estado:'Activo'},{_id:1},idempresa,'5f74c0fff22ed14ea01c1cbe'); 

const emergencias = await functool.daidformreg('603715b7a59cf50610072759',{
    idpapa:{$in:enmiendax},estado:'No atendida'
    },{_id:1},idempresa,'603715b7a59cf50610072759'); 

var pagosxx=[]
//String(Supervisores[i2]._id)
    for(var i = 0; i <pagosf.length; i++) {
        var totalmulta=0
        var totalemergencias=0
        var totalpago=pagosf[i].montopago;
        var idpago=String(pagosf[i]._id);
       
        for(var i2 = 0; i2 <multas.length; i2++) {
            if(idpago===multas[i2].idpapa)
            {
                totalmulta=totalmulta+ multas[i2].monto

            }
       
        }


        for(var i3 = 0; i3 <emergencias.length; i3++) {

            if(idpago===emergencias[i3].idpapa)
            {
                totalemergencias=totalemergencias+ emergencias[i3].monto

            }
       
        }
        
        var montoapagar=totalpago-totalmulta-totalemergencias
        pagosxx.push({_id:pagosf[i]._id,nopago:Number(pagosf[i].nopago),item:pagosf[i],nombre:'<strong>No pago</strong>: '+ pagosf[i].nopago+'<br><strong>Perido pago</strong>: '+ pagosf[i].periodopago+'<br><strong>Monto Pago</strong>: '+totalpago+'<br><strong>Multas</strong>: '+ totalmulta+'<br><strong>Emergencias</strong>: '+ totalemergencias+'<br><strong>Monto a pagar</strong>: ' + montoapagar +'<br>'})
       
    }


    pagosxx.sort(function(a, b) {
        return parseFloat(a.nopago) - parseFloat(b.nopago);
    });


  

    //nombre:'<strong>Monto Pago</strong>: 307201.83<br><strong>No pago</strong>: 25<br><strong>Monto a pagar</strong>: 307201.83<br>'



      /*      planificaciones = await functool.dadatosformulariocombo('5f595df92521cd38c8fe3126',{
                idpapa:{$in:papasx}
                ,estado:'Cancelado'},arr[0],myDatavector); 
                */

                var pagos2=[]

            if(pagosxx.length===0)
            {
               
                resolve({estado:'exito',datat: pagosxx}); 
            }
            else
            {
                pagos2.push({_id:pagosxx[0]._id,nopago:pagosxx[0].nopago,item:pagosxx[0].item,nombre:pagosxx[0].nombre});
                resolve({estado:'exito',datat: pagos2}); 
                
            }

              })();
    break;
          case 'getcontactoempresa':
            (async () => {
              var jsonObject = functool.stringToObject( req.params.id2);
              console.log(jsonObject)
  
              /*
              var datat = await functool.dadatosformulariofinal('605a1ed86886480f70f6ec08',{idempresa:req.params.id3,anyo:anii},req.params.id3,'605a1ed86886480f70f6ec08'); 
  
  
              pagosxx.push({_id:pagosf[i]._id,nopago:Number(pagosf[i].nopago),item:pagosf[i],nombre:'<strong>No pago</strong>: '+ pagosf[i].nopago+'<br><strong>Perido pago</strong>: '+ pagosf[i].periodopago+'<br><strong>Monto Pago</strong>: '+totalpago+'<br><strong>Multas</strong>: '+ totalmulta+'<br><strong>Emergencias</strong>: '+ totalemergencias+'<br><strong>Monto a pagar</strong>: ' + montoapagar +'<br>'})
  */
  
  
  
              })();


            break;
          case 'getactividadesproceso':

            (async () => {
            var jsonObject = functool.stringToObject( functool.replaceAll( req.params.id2 ,'ë','/'));
            console.log(jsonObject)

            var arrr=jsonObject.eventorelacionadoa.split('¬')
            frmactividad.find({idempresa:req.params.id3,idpapa:arrr[1] }).sort({'orden': 1}).exec(function(err, todos) {
              if (err){  res.send(err);  }
              var datat=[]
              for(var i = 0; i < todos.length;i++){
                datat.push({_id:todos[i]._id,nombre:todos[i].nombre})
              }
              resolve({estado:'exito',datat: datat}); 

            });
          



            })();
            break;
           
            case 'generapoliza_2020': //REQUISICION

            (async () => {
              //trae todo el formulario
              console.log(req.params.id5)
              //obtener el correlativo general estado= Activo  605a1ed86886480f70f6ec08
              //actualizar correlativo en tabla
              //insertar en tabla   idempresa,codigo,ano,estado,noorden,correlativo
              //devolver correlativo
              var dt2 = new Date();
              var anii=dt2.getFullYear().toString()
              var arrr=req.params.id2.split('°')  //idorden   secuencia  tipoorden sequenciag
     

              var polizam = await functool.dadatosformulariofinal('605a1ed86886480f70f6ec08',{idempresa:req.params.id3,anyo:anii},req.params.id3,'605a1ed86886480f70f6ec08'); 

                if(polizam.length>0)
                {
                    var corr=Number(polizam[0].correlativo)

                    var estructura={
                        "correlativo" : functool.padLeadingZeros(corr+1,5)
                       
                       
                    }
                      var actualiza = await functool.actualizaformularioidfinal('605a1ed86886480f70f6ec08',{ _id:polizam[0]._id},req.params.id3,'605a1ed86886480f70f6ec08',estructura); 

                      var nopoliza=polizam[0].patente + polizam[0].codigoanyo + functool.padLeadingZeros(corr+1,5)
                 
                      Poliza.create({idempresa:req.params.id3,codigo:'' + polizam[0].patente,anyo:anii,estado:'Asignado',
                      noorden:Number(arrr[3]),correlativo: functool.padLeadingZeros(corr+1,5)});
                    //actualizar en el creaticket de cuando se crea una orden en sql server segun tipo de orden

                    
                    var ejecuta1=await  functool.ejecutasql("update ticket set polizaaduana='" + nopoliza +"' where noticket="+
                     Number(arrr[3]),functool.daconectasql(arrr[2]),null)
            
                      resolve({estado:'exito',datat: nopoliza}); 
                }
                else
                {
              
                    
                      resolve({estado:'No se encuentra configurada poliza, año para generar correlativo',datat:'11222222'}); 
                }

     

                
            })();
                break;
            case 'getselectivo': //REQUISICION

        (async () => {
          //trae todo el formulario
          console.log(req.params.id5)
            //ir a traer a sql server  si esta tambien traer de access y hacer la actualizacion de ese campo r_selectivo en sqlserver
            // y desplegar en processapps solo el campo de r_selectivo
            var arrayxx= req.params.id5.split('°')

            var orden = await functool.dadatosformularioidfinal(arrayxx[2],
            {_id:req.params.id2},req.params.id3,arrayxx[2]); 
          
            var nopoliza=orden.nopoliza

            if(nopoliza!=='0'  &&nopoliza!==''  && nopoliza!==undefined)
            {

              var patente=nopoliza.substr(0,3)
              var anio=nopoliza.substr(3,2)
              var corr=nopoliza.substr(4,6)
            var dt2 = new Date();
            var   anii=dt2.getFullYear().toString()
       

            var polizam = await functool.dadatosformulariofinal('605a1ed86886480f70f6ec08',{idempresa:req.params.id3,codigoanyo:'' + anio},req.params.id3,'605a1ed86886480f70f6ec08'); 

              if(polizam.length>0)
              {
              
                var cc=polizam[0].codigoanyosql + functool.padLeadingZeros(polizam[0].correlativo,5)

                var datafinal=[]
                var cad="select * from declaraciones  where anyo='" +polizam[0].anyo  +"' and  agente_pol= " + Number(corr) + ";"
                var ejecuta1=await  functool.ejecutaaccess(cad)
                  
                if(ejecuta1.datat.length>0)
                {

                  //actualizar al sqlserver del dua update  r_selectivo
                  var select= ejecuta1.datat[0].r_selectivo 
                
var cad="update  declaraciones set r_selectivo='" + ejecuta1.datat[0].r_selectivo  + "'  where  agente_pol=" +Number(cc) + " and anyo='"+ polizam[0].anyo+ "'"
var ejecuta1=await  functool.ejecutasql(cad ,'mssql://sa:$ertobar@192.168.34.5/DUA-SQL')

                  resolve({estado:'exito',datat:'<br><strong>Selectivo</strong>:  '  + select +' <br>'}); 
                }
                else
                {//
                  resolve({estado:'exito',datat:'<br><strong>Selectivo</strong>:  <br>'}); 
                }
                


              }



            }
            else
            {
              resolve({estado:'exito',datat:'<br><strong>na</strong><br>'});  
            }
          
     

          
           

            
        })();
            break;
            case 'getdatospoliza': //REQUISICION

            (async () => {
              //trae todo el formulario

                    // create Request object   idtickt  req.params.id2   todos req.params.id4
                    var arrayxx= req.params.id5.split('°')
                   


                    
                    var orden = await functool.dadatosformularioidfinal(arrayxx[2],
                    {_id:req.params.id2},req.params.id3,arrayxx[2]); 
                  
                    var nopoliza=orden.nopoliza

                    if(nopoliza!=='0' && nopoliza!==''  && nopoliza!==undefined)
                    {

                      var patente=nopoliza.substr(0,3)
                      var anio=nopoliza.substr(3,2)
                      var corr=nopoliza.substr(4,6)

                  var dt2 = new Date();
                    var   anii=dt2.getFullYear().toString()
               
      
                    var polizam = await functool.dadatosformulariofinal('605a1ed86886480f70f6ec08',{idempresa:req.params.id3,estado:'Activo',codigoanyo:'' + anio},req.params.id3,'605a1ed86886480f70f6ec08'); 
      
                      if(polizam.length>0)
                      {
                      //ver el campo nopoliza de la estructura viene vacio no hacer nada  3031700034°Inicial¬
                      // patente 303   año 17   agentepol 700034 agentepol 
                      // convertir el 17  codigoanyo:''

                        var cc=polizam[0].codigoanyosql + functool.padLeadingZeros(polizam[0].correlativo,5)
                        var cad="select * from  declaraciones  where  agente_pol=" +Number(corr) + 
                        " and anyo='"+ polizam[0].anyo+ "'"
                        console.log(cad + '    ****************************************************************************************************')
                        var ejecuta1=await  functool.ejecutasql(cad ,'mssql://sa:$ertobar@192.168.34.5/DUA-SQL')

                        if(ejecuta1.estado==='exito')
                        {

                          if(ejecuta1.datat.recordset.length>0)
                          {
                            resolve({estado:'exito',datat: '<br><strong>Año</strong>: ' +  ejecuta1.datat.recordset[0].anyo+' <br>'+
                            '<br><strong>Clase</strong>: ' +  ejecuta1.datat.recordset[0].clase_dec+' <br>'+
                             '<br><strong>Regimen</strong>: ' + ejecuta1.datat.recordset[0].cod_regimen+' <br>'+
                             '<br><strong>Aduana de Entrada</strong>: ' + ejecuta1.datat.recordset[0].adu_ent_sale_cod_sat+' <br>'+
                             '<br><strong>Alm / Zona Franca</strong>: ' + ejecuta1.datat.recordset[0].deposito_zona_franca_cod+' <br>'+
                            '<br><strong>Peso Bruto</strong>: ' +  ejecuta1.datat.recordset[0].peso_bruto_total +' <br>'+
                            '<br><strong>Peso Neto</strong>: ' +  ejecuta1.datat.recordset[0].peso_neto_total+' <br>'+
                            '<br><strong>Nit</strong>: ' +  ejecuta1.datat.recordset[0].nit_interesado+' <br>'+
                            '<br><strong>Cliente</strong>: ' +  ejecuta1.datat.recordset[0].nombre_interesado+' <br>'+
                             '<br><strong>Total FOB</strong>: ' + ejecuta1.datat.recordset[0].total_fob_usd+' <br>'+
                             '<br><strong>Total Flete</strong>: ' + ejecuta1.datat.recordset[0].total_flete_usd+' <br>'+
                             '<br><strong>Total Seguro</strong>: ' + ejecuta1.datat.recordset[0].total_seguro_usd+' <br>'+
                            '<br><strong>Total Otros</strong>: ' +  ejecuta1.datat.recordset[0].total_otros_usd+' <br>'+
                            '<br><strong>Total CIF</strong>: ' +  ejecuta1.datat.recordset[0].total_cif_usd+' <br>'+
                            '<br><strong>Total Bultos</strong>: ' +  ejecuta1.datat.recordset[0].total_bultos+' <br>'+
           '<br><strong>Contenedor</strong>: ' + ejecuta1.datat.recordset[0].equipo_numero});  
                            
  
                           
                          }
                          else
                          {
            
                         
                            //consulto en access y grabo en 
                            //access filtrar  agentepol  =cc   anopre=anyu
  
                            var cad="select * from declaraciones  where anyo='" +polizam[0].anyo  +"' and  agente_pol= " + Number(corr) + ";"
                            var ejecuta1=await  functool.ejecutaaccess(cad)
                              
                            if(ejecuta1.datat.length>0)
                            {
  //insertar en 
  console.log('INSERTA ************************** INSERTA INSERTA INSERTA INSERTA INSERTA INSERTA INSERTA INSERTA INSERTA INSERTA INSERTA INSERTA INSERTA INSERTA INSERTA INSERTA INSERTA INSERTA INSERTA INSERTA INSERTA INSERTA INSERTA INSERTA INSERTA INSERTA INSERTA INSERTA INSERTA INSERTA INSERTA INSERTA ')
  var cadii="INSERT INTO [dbo].[Declaraciones]([anyo],[agente_pat],[agente_pol],[clase_dec],[cod_regimen],[adu_ent_sale_cod_sat],[deposito_zona_franca_cod],[peso_bruto_total],[peso_neto_total],[nit_interesado],[nombre_interesado],[DIR1_INTERESADO],[total_fob_usd],[total_flete_usd],[total_seguro_usd],[total_otros_usd],[total_cif_usd],[selectivo],[r_selectivo],[total_bultos],[pagos_autoliquidado],[numero_dua],[equipo_numero],[adu_des_cod_sat],[FECHACREACION])VALUES " + "('" + ejecuta1.datat[0].anyo +"'," + "'" + ejecuta1.datat[0].agente_pat +"',"+ "" + ejecuta1.datat[0]. agente_pol + ","+ "'" + ejecuta1.datat[0].clase_dec+"',"
  + "'" + ejecuta1.datat[0].cod_regimen+"',"+ "'" + ejecuta1.datat[0].adu_ent_sale_cod_sat+"',"+ "'" + ejecuta1.datat[0].deposito_zona_franca_cod+"',"+ "" + ejecuta1.datat[0].peso_bruto_total+ ","
  + "" + ejecuta1.datat[0].peso_neto_total+ ","+ "'" + ejecuta1.datat[0].nit_interesado+"',"+ "'" + ejecuta1.datat[0].nombre_interesado+"',"+ "'" + ejecuta1.datat[0].DIR1_INTERESADO+"',"
  + "" + ejecuta1.datat[0].total_fob_usd+ ","+ "" + ejecuta1.datat[0].total_flete_usd+ ","+ "" + ejecuta1.datat[0].total_seguro_usd+ ","+ "" + ejecuta1.datat[0].total_otros_usd+ ","
  + "" + ejecuta1.datat[0].total_cif_usd+ ","+ "'" + ejecuta1.datat[0].selectivo+"',"+ "'" + ejecuta1.datat[0].r_selectivo+"',"+ "" + ejecuta1.datat[0].total_bultos+ ","
  + "" + ejecuta1.datat[0].pagos_autoliquidado+ ","+ "'" + ejecuta1.datat[0].numero_dua+"',"+ "'" + ejecuta1.datat[0].equipo_numero+"',"+ "'" + ejecuta1.datat[0].adu_des_cod_sat+"',"+ "getdate())"
  var ejecuta2=await  functool.ejecutasql(cadii ,'mssql://sa:$ertobar@192.168.34.5/DUA-SQL')
              
                      
  
                              resolve({estado:'exito',datat: '<br><strong>Año</strong>: ' +  ejecuta1.datat[0].anyo+' <br>'+
                              '<br><strong>Clase</strong>: ' +  ejecuta1.datat[0].clase_dec+' <br>'+
                               '<br><strong>Regimen</strong>: ' + ejecuta1.datat[0].cod_regimen+' <br>'+
                               '<br><strong>Aduana de Entrada</strong>: ' + ejecuta1.datat[0].adu_ent_sale_cod_sat+' <br>'+
                               '<br><strong>Alm / Zona Franca</strong>: ' + ejecuta1.datat[0].deposito_zona_franca_cod+' <br>'+
                              '<br><strong>Peso Bruto</strong>: ' +  ejecuta1.datat[0].peso_bruto_total +' <br>'+
                              '<br><strong>Peso Neto</strong>: ' +  ejecuta1.datat[0].peso_neto_total+' <br>'+
                              '<br><strong>Nit</strong>: ' +  ejecuta1.datat[0].nit_interesado+' <br>'+
                              '<br><strong>Cliente</strong>: ' +  ejecuta1.datat[0].nombre_interesado+' <br>'+
                               '<br><strong>Total FOB</strong>: ' + ejecuta1.datat[0].total_fob_usd+' <br>'+
                               '<br><strong>Total Flete</strong>: ' + ejecuta1.datat[0].total_flete_usd+' <br>'+
                               '<br><strong>Total Seguro</strong>: ' + ejecuta1.datat[0].total_seguro_usd+' <br>'+
                              '<br><strong>otal Otros</strong>: ' +  ejecuta1.datat[0].total_otros_usd+' <br>'+
                              '<br><strong>Total CIF</strong>: ' +  ejecuta1.datat[0].total_cif_usd+' <br>'+
                              '<br><strong>Total Bultos</strong>: ' +  ejecuta1.datat[0].total_bultos+' <br>'+
             '<br><strong>CLIENTE</strong>: ' + ejecuta1.datat[0].equipo_numero});  
                              
  
  
                            }
                            else
                            {
                              resolve({estado:'exito',datat:'<br><strong>na</strong><br>'});  
                            }
  
  
                            
                        
            
                          }
                        }
            
                     
                      
                      }
              
                    }
                    else
                    {
                      resolve({estado:'exito',datat:'<br><strong>na</strong><br>'});  
                    }
                  
                    



        
    

                
            })();
                break;
       
            default:
              // code block
              resolve({estado:'exito'}); 
          }
    });
}

module.exports = {

  

  daejecutafunciones: daejecutafunciones
   
      }
