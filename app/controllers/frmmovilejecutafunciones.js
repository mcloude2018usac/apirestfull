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



          var datafinal=[]
          var ejecuta1=await  functool.ejecutaaccess("select * from declaraciones where agente_pol= 187707;")
            
          if(ejecuta1.datat.length>0)
          {
            resolve({estado:'exito',datat:'<br><strong>ADUANA</strong>: 1 <br>'}); 
          }
          else
          {
            resolve({estado:'exito',datat:'<br><strong>ADUANA</strong>: 1 <br>'}); 
          }
          

          
           

            
        })();
            break;
            case 'getdatospoliza': //REQUISICION

            (async () => {
              //trae todo el formulario

                    // create Request object   idtickt  req.params.id2   todos req.params.id4
                    var arrayxx= req.params.id5.split('°')
              
                    var ejecuta1=await  functool.ejecutasql('select * from ticket  where  noticket=' +Number(arrayxx[1]),functool.daconectasql(arrayxx[2]))
            
                    if(ejecuta1.datat.recordset.length>0)
                    {
                      resolve({estado:'exito',datat:'<br><strong>ADUANA</strong>: ' +  ejecuta1.datat.recordset[0].aduana  +' <br><strong>ADUANA</strong>: ' + ejecuta1.datat.recordset[0].dirinteresado});                     +'<br><strong>ADUANA</strong>:' + ejecuta1.datat.recordset[0].nombreinteresado +' <br>'
                      
                      
                     
                    }
                    else
                    {
      
                      //que lo grabe  simrpe deberia de existir
                  
      
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
