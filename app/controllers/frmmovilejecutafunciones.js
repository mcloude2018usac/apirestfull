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


var sql = require("mssql");

// config for your database  DRIVER={Microsoft Access Driver (*.mdb)}; DBQ=C:\BD_DUA\declaraciones_dua.d; Uid=admin; Pwd=$3rt084r202523;
var conecta1 = 'mssql://sa:$ertobar@192.168.34.5/stbd'
var conecta2 = 'mssql://sa:$ertobar@192.168.34.5/cielomarbd'
var conecta3 = 'mssql://sa:$ertobar@192.168.34.5/camposbd'
var connectionString= 'Provider=Microsoft.ACE.OLEDB.12.0;Data Source=C:\\BD_DUA\\declaraciones_dua.d;  Uid=admin; Pwd=$3rt084r202523;Persist Security Info=False;'
const connectionConfig = {
    connectionString: 'DSN=OTRO',
    connectionTimeout: 10,
    loginTimeout: 10,
}

 



    

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
     

              var polizam = await functool.dadatosformulariofinal('605a1ed86886480f70f6ec08',{idempresa:req.params.id3,estado:'Activo',anyo:anii},req.params.id3,'605a1ed86886480f70f6ec08'); 

                if(polizam.length>0)
                {
                    var corr=Number(polizam[0].correlativo)

                    var estructura={
                        "correlativo" : functool.padLeadingZeros(corr+1,5)
                       
                       
                    }
                      var actualiza = await functool.actualizaformularioidfinal('605a1ed86886480f70f6ec08',{ _id:polizam[0]._id},req.params.id3,'605a1ed86886480f70f6ec08',estructura); 


                      Poliza.create({idempresa:req.params.id3,codigo:'' + polizam[0].patente,anyo:anii,estado:'Asignado',noorden:req.params.id2,correlativo: functool.padLeadingZeros(corr+1,5)});
                    //actualizar en el creaticket de cuando se crea una orden en sql server
                    
                      resolve({estado:'exito',datat: polizam[0].patente + polizam[0].codigoanyo + functool.padLeadingZeros(corr+1,5)}); 
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
          datafinal.push({_id:'1223',nombre:'111111111111'})
          

          
            resolve({estado:'exito',datat:datafinal}); 

            
        })();
            break;
            case 'getdatospoliza': //REQUISICION

            (async () => {
              //trae todo el formulario

          
              sql.connect(conecta1, function (err) {

                if (err) console.log(err);
        
                // create Request object   idtickt  req.params.id2   todos req.params.id4
                var arrayxx= req.params.id5.split('°')

                var request = new sql.Request();
                   
                // query to the database and get the records
                console.log(req.params.id5)
                var idv1= Number(arrayxx[1]);
                request.query('select * from ticket  where  noticket=187707', function (err, recordset) {
                    
                    if (err) console.log(err)
        
                    // send records as a response                        res.send(recordset);   const connection = ADODB.open('Provider=Microsoft.Jet.OLEDB.4.0;Data Source=C:\BD_DUA\declaraciones_dua.d;');

              if(recordset.recordset.length>0)
              {
                resolve({estado:'exito',datat:'<br><strong>ADUANA</strong>: ' +  recordset.recordset[0].aduana  +' <br><strong>ADUANA</strong>: ' + recordset.recordset[0].dirinteresado});                     +'<br><strong>ADUANA</strong>:' + recordset.recordset[0].nombreinteresado +' <br>'
                
                
               
              }
              else
              {

                
                const connection = odbc.connect(connectionConfig, (error, connection) => {
                    connection.query("select * from declaraciones where agente_pol= 187707;", (error, result) => {
                        if (error) { console.error(error) }
                        console.log(result);

                        //insertar a sqlserver no esta

                        var datafinal=[]
                        datafinal.push({_id:'1223',nombre:'111111111111'})
                    
          
                        
                          resolve({estado:'exito',datat:datafinal}); 


                    });
                });

              }
                  
      
                  

            

             
            
                
              

                 



                    
                });
            });
       


        
    

                
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
