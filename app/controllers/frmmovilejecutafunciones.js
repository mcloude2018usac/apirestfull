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
              var arrr=req.params.id2.split('°')  //idorden   secuencia  tipoorden
     

              var polizam = await functool.dadatosformulariofinal('605a1ed86886480f70f6ec08',{idempresa:req.params.id3,estado:'Activo',anyo:anii},req.params.id3,'605a1ed86886480f70f6ec08'); 

                if(polizam.length>0)
                {
                    var corr=Number(polizam[0].correlativo)

                    var estructura={
                        "correlativo" : functool.padLeadingZeros(corr+1,5)
                       
                       
                    }
                      var actualiza = await functool.actualizaformularioidfinal('605a1ed86886480f70f6ec08',{ _id:polizam[0]._id},req.params.id3,'605a1ed86886480f70f6ec08',estructura); 

                      var nopoliza=polizam[0].patente + polizam[0].codigoanyo + functool.padLeadingZeros(corr+1,5)
                 
                      Poliza.create({idempresa:req.params.id3,codigo:'' + polizam[0].patente,anyo:anii,estado:'Asignado',noorden:Number(arrr[1]),correlativo: functool.padLeadingZeros(corr+1,5)});
                    //actualizar en el creaticket de cuando se crea una orden en sql server segun tipo de orden

                    
                    var ejecuta1=await  functool.ejecutasql("update ticket set polizaaduana='" + nopoliza +"' where noticket="+ Number(arrr[1]),functool.daconectasql(arrr[2]))
            
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



            var dt2 = new Date();
            var   anii=dt2.getFullYear().toString()
       

            var polizam = await functool.dadatosformulariofinal('605a1ed86886480f70f6ec08',{idempresa:req.params.id3,estado:'Activo',anyo:anii},req.params.id3,'605a1ed86886480f70f6ec08'); 

              if(polizam.length>0)
              {
              
                var cc=polizam[0].codigoanyosql + functool.padLeadingZeros(polizam[0].correlativo,5)

                var datafinal=[]
                var cad="select * from declaraciones  where anyo='" +polizam[0].anyo  +"' and  agente_pol= " + Number(cc) + ";"
                var ejecuta1=await  functool.ejecutaaccess(cad)
                  
                if(ejecuta1.datat.length>0)
                {

                  //actualizar al sqlserver del dua update  r_selectivo
                
var cad="update  declaraciones set r_selectivo='" + ejecuta1.datat[0].r_selectivo  + "'  where  agente_pol=" +Number(cc) + " and anyo='"+ polizam[0].anyo+ "'"
var ejecuta1=await  functool.ejecutasql(cad ,'mssql://sa:$ertobar@192.168.34.5/DUA-SQL')

                  resolve({estado:'exito',datat:'<br><strong>Selectivo</strong>:  '  + ejecuta1.datat[0].r_selectivo +' <br>'}); 
                }
                else
                {//
                  resolve({estado:'exito',datat:'<br><strong>Selectivo</strong>:  <br>'}); 
                }
                


              }



     

          
           

            
        })();
            break;
            case 'getdatospoliza': //REQUISICION

            (async () => {
              //trae todo el formulario

                    // create Request object   idtickt  req.params.id2   todos req.params.id4
                    var arrayxx= req.params.id5.split('°')

                  var dt2 = new Date();
                    var   anii=dt2.getFullYear().toString()
               
      
                    var polizam = await functool.dadatosformulariofinal('605a1ed86886480f70f6ec08',{idempresa:req.params.id3,estado:'Activo',anyo:anii},req.params.id3,'605a1ed86886480f70f6ec08'); 
      
                      if(polizam.length>0)
                      {
                      
                        var cc=polizam[0].codigoanyosql + functool.padLeadingZeros(polizam[0].correlativo,5)
                        var cad="select * from  declaraciones  where  agente_pol=" +Number(cc) + 
                        " and anyo='"+ polizam[0].anyo+ "'"
                        var ejecuta1=await  functool.ejecutasql(cad ,'mssql://sa:$ertobar@192.168.34.5/DUA-SQL')
            
                        if(ejecuta1.datat.recordset.length>0)
                        {
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
                          
                            /*
                  '<br><strong>Año</strong>: ' +  ejecuta1.datat[0].anyo+' <br>'+
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
                   '<br><strong>Total Seguro</strong>: ' + .datat[0].total_seguro_usd+' <br>'+
                  '<br><strong>otal Otros</strong>: ' +  ejecuta1.datat[0].total_otros_usd+' <br>'+
                  '<br><strong>Total CIF</strong>: ' +  ejecuta1.datat[0].total_cif_usd+' <br>'+
                  '<br><strong>Total Bultos</strong>: ' +  ejecuta1.datat[0].total_bultos+' <br>'+
 '<br><strong>CLIENTE</strong>: ' + ejecuta1.datat[0].equipo_numero+' <br>'+
           
*/

                         
                        }
                        else
                        {
          
                          //que lo grabe  simrpe deberia de existir  grabar en el accesss
                          //consulto en access y grabo en 
                          //access filtrar  agentepol  =cc   anopre=anyu

                          resolve({estado:'exito',datat:'<br><strong>CLIENTE</strong>:<br>'});  
                      
          
                        }
                      
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
