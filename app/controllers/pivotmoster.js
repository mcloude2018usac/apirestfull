const compressor = require('flexmonster-compressor');
const MongoClient = require('mongodb').MongoClient;
var Denunciaunidad = require('../models/denunciaunidad');
var Participa3 = require('../models/participa3');
var fs = require('fs');
const path = require('path');
var Usermsg = require('../models/usermsg');
var User = require('../models/user');
var Marketemail = require('../models/marketemail');
var Asignaestudiante = require('../models/asignaestudiante');
var Asignacalusac = require('../models/calusac/asignacalusac');
var Plancalusac = require('../models/calusac/unidadplan3');
var cursoeve=require('../models/aread_evento');
var Participa2 = require('../models/participa2');
var Moduloxx = require('../models/moduloxx');
var Asignapcb = require('../models/asignapcb');
var oracledb = require('oracledb');

var connAttrs = {
    "user": "dbprocessges",
    "password": "S1t13n3$",
    "connectString": "181.174.122.180/xe"
}

function removeDups(names) {
    let unique = {};
    names.forEach(function(i) {
      if(!unique[i]) {
        unique[i] = true;
      }
    });
    return Object.keys(unique);
  }


exports.getPivotm = function(req, res, next){
console.log(req.params)
    switch(req.params.id) {
        case 'db1':

                switch(req.params.id2) {
                    case 'denuncias':         getdenunciasrpt(req, res, next);
                    break
                    case 'forochat':         getforochatrpt(req, res, next);
                    break
                     case 'asignasun':         getasignasunrpt(req, res, next);
                    break
                    case 'asignasun0':         getasignasun0rpt(req, res, next);
                    break
                    case 'asignacalusac':         getasignacalusacrpt(req, res, next);
                    break
                    case 'plancalusac':         getplancalusacrpt(req, res, next);
                  
                    break
                    case 'cursoslibres':         getcursoslibresrpt(req, res, next);
                    break
                    case 'catalogo':         getcatalogorpt(req, res, next);
                    break
                    case 'segeplan':         getsegeplanrpt(req, res, next);
                    break
                    default:
                    break;
            
                }


        break
        case 'json1':
        break
        case 'csv1':
        break
        default:
        break;

    }
        

}


var getsegeplanrpt = function(req, res, next) {

    "use strict";
    oracledb.getConnection(connAttrs, function (err, connection) {
      if (err) {
          // Error connecting to DB
          res.set('Content-Type', 'application/json');
          res.status(500).send(JSON.stringify({
              status: 500,
              message: "Error connecting to DB",
              detailed_message: err.message
          }));
          return;
      }
  
  var qry=''
  console.log(req.params)
      switch(req.params.id3) {
        
  case 'grafica':
      qry="SELECT   dato_serie.ETIQUETA_FECHA etiqueta,  dato_serie.VALOR,  TIPO_SERIE.NOMBRE || ' '  || AGRUPACION.NOMBRE tipo_serie,  NIVEL_TERRITORIAL.NOMBRE AS nivel_territorio,  TERRITORIO.NOMBRE        AS territorio,  TIPO_AGRUPACION.NOMBRE   AS tipo_agrupacion FROM SERIE,  TIPO_SERIE,  AGRUPACION,  dato_serie,  TERRITORIO,  TIPO_AGRUPACION,  NIVEL_TERRITORIAL WHERE SERIE.ID_TIPO_SERIE              = TIPO_SERIE.ID_TIPO_SERIE AND SERIE.ID_AGRUPACION                = AGRUPACION.ID_AGRUPACION AND dato_serie.ID_SERIE                = SERIE.ID_SERIE AND NIVEL_TERRITORIAL.ID_NIVEL_TER     = SERIE.ID_NIVEL_TER AND TERRITORIO.ID_TERRITORIO           = SERIE.ID_TERRITORIO AND TIPO_AGRUPACION.ID_TIPO_AGRUPACION = SERIE.ID_TIPO_AGRUPACION2 AND (SERIE.ID_MARCO                    = 0 OR SERIE.ID_MARCO                      = 4) AND SERIE.ID_INDICADOR                 =   "+req.params.id4
   
      break;

        
      }
  
        connection.execute(qry, {},  {
          outFormat: oracledb.OBJECT // Return the result as Object
      }, function (err, result) {
          if (err || result.rows.length < 1) {
              res.set('Content-Type', 'application/json');
              var status = err ? 500 : 404;
  
             res.status(500).send('No existe informacion')  
  
             
          } else {
  
  
              switch(req.params.id3) {
                  
                  case 'grafica':
                          var myData = [];
                          for(var i = 0; i < result.rows.length;i++){
                              myData.push({tipo:result.rows[i].ETIQUETA,cantidad:result.rows[i].VALOR,serie:result.rows[i].TIPO_SERIE,nivel_territorio:result.rows[i].NIVEL_TERRITORIO,territorio:result.rows[i].TERRITORIO,tipo_agrupacion:result.rows[i].TIPO_AGRUPACION})
                          }
                         

                          let stream = compressor.compressJson(myData);
                                      
                          stream.on('data', data => res.write(data));
                          stream.on('end', () => res.end()
                          //  res.redirect('pivot.html');
                          ); 
                          var rutat=path.join(__dirname+'/pivotm.html')


  
                              break;
                  
                              
  
    
              
                  
               
              }
         
          }
        
          connection.release(
              function (err) {
                  if (err) {
                      console.error(err.message);
                  } else {
                      console.log("GET /user_profiles/" + req.params.txt + " : Connection released");
                  }
              });
      });
  
  
     
  
     
  
  });






}

var getcatalogorpt = function(req, res, next) {
    switch(req.params.id3) {
        case 'modulos':

            Moduloxx.find({idempresa:req.params.id4}).exec(function(err, todos) {
                if (err){  res.send(err);  }
                        
                                        let stream = compressor.compressJson(todos);
                                      
                                        stream.on('data', data => res.write(data));
                                        stream.on('end', () => res.end()
                                        //  res.redirect('pivot.html');
                                        ); 
                                        var rutat=path.join(__dirname+'/pivotm.html')
                   
            });
           
        break
        default:
        break;

    }



}

var getasignasunrpt = function(req, res, next) {
    Asignaestudiante.find({}).exec(function(err, todos2) {
        if (err){  res.send(err);  }
                        var myData31 = [];
                        for(var i = 0; i <  todos2.length;i++){
                                    myData31.push({unidad:todos2[i].idtipounidad.nombre,cantidad:1,
                                         periodo:todos2[i].idperiodo.nombre,edificio:todos2[i].idedificio.nombre
                                        ,salon:todos2[i].idsalon.nombre
                                        ,materia:todos2[i].idmateria  ,horario:todos2[i].idhorario})
                                }
                           //    console.log(myData31)
                                let stream = compressor.compressJson(myData31);
                              
                                stream.on('data', data => res.write(data));
                                stream.on('end', () => res.end()
                                //  res.redirect('pivot.html');
                                ); 
                                var rutat=path.join(__dirname+'/pivotm.html')
           
    });

}

var getasignacalusacrpt = function(req, res, next) {
    Asignacalusac.find({}).exec(function(err, todos2) {
        if (err){  res.send(err);  }
                        var myData31 = [];
                        console.log(todos2)
                        for(var i = 0; i <  todos2.length;i++){
                                    myData31.push({tipounidad:todos2[i].idtipounidad.nombre,cantidad:1,
                                        unidad:todos2[i].idunidadacademica.nombre,periodo:todos2[i].idperiodo.nombre
                                       })
                                }
                           //    console.log(myData31)
                                let stream = compressor.compressJson(myData31);
                              
                                stream.on('data', data => res.write(data));
                                stream.on('end', () => res.end()
                                //  res.redirect('pivot.html');
                                ); 
                                var rutat=path.join(__dirname+'/pivotm.html')
           
    });

}


//http://127.0.0.1:9090/pivot.html?v1=/api/pivotem1/db1/cursoslibres/1/2/3&v2=classic

var getcursoslibresrpt = function(req, res, next) {

    cursoeve.find({'idtipoevento.codigo':'3'},function(err, todos0) {
        console.log(todos0)
        if (err){  res.send(err);  }      
                Participa2.find({'idtipoevento.id':'3'},function(err, todos) {
                    console.log(todos)
                        if (err){  res.send(err);  }
                        var resp=[]
                        var tevento=''
                        var ubica=''
                        for(var i = 0; i < todos.length;i++){
                            
                                for(var ii = 0; ii < todos0.length;ii++){
                                        if(todos0[ii]._id==todos[i].idevento)
                                        {
                                           tevento= todos0[ii].nombre   
                                   //        ubica= 'Edificio: '+todos0[ii].edificio + '  Salon: ' +  todos0[ii].salon     
                                           break;
                                        }
                                }        
                                
                           //   resp.push({ubica:ubica,tipocurso:todos[i].idtipoevento.nombre,area:todos[i].idarea.nombre,nombre:tevento,cantidad:1});
                                 resp.push({curso:tevento,tipocurso:todos[i].idtipoevento.nombre,area:todos[i].idarea.nombre,cantidad:1});
                        }

                        let stream = compressor.compressJson(resp);
                              
                        stream.on('data', data => res.write(data));
                        stream.on('end', () => res.end()
                        //  res.redirect('pivot.html');
                        ); 
                        var rutat=path.join(__dirname+'/pivotm.html')


                });
});



}




var getplancalusacrpt = function(req, res, next) {
    Plancalusac.find({}).populate('idjornada').populate('idnivel').populate('idhorario').populate('idprofesor').exec(function(err, todos2) {
        if (err){  res.send(err);  }
                        var myData31 = [];
                        console.log(todos2)
                        for(var i = 0; i <  todos2.length;i++){
                                    myData31.push({ubicacion:todos2[i].idtipounidad.nombre,
                                        curso:todos2[i].idunidadacademica.nombre,periodo:todos2[i].idperiodo.nombre,
                                        edificio:todos2[i].idedificio.nombre,salon:todos2[i].idsalon.nombre,
                                        nivel:todos2[i].idnivel.nombre,jornada:todos2[i].idjornada.nombre,horario:todos2[i].idhorario.nombre
                                        ,dias:todos2[i].idhorario.dia   ,profesor:todos2[i].idprofesor.nombre
                                        ,capacidad:todos2[i].capacidad
                                        ,asignados:todos2[i].asignados,cupo:todos2[i].capacidad-todos2[i].asignados     ,cantidad:1                              })
                                }
                           //    console.log(myData31)
                                let stream = compressor.compressJson(myData31);
                              
                                stream.on('data', data => res.write(data));
                                stream.on('end', () => res.end()
                                //  res.redirect('pivot.html');
                                ); 
                                var rutat=path.join(__dirname+'/pivotm.html')
           
    });

}
var getasignasun0rpt = function(req, res, next) {
    Asignapcb.find({}).exec(function(err, todos2) {
        if (err){  res.send(err);  }
                        var myData31 = [];
                        for(var i = 0; i <  todos2.length;i++){
                                    myData31.push({tipounidad:todos2[i].idtipounidad.nombre,cantidad:1,
                                        unidad:todos2[i].idunidadacademica.nombre,periodo:todos2[i].idperiodo.nombre
                                       })
                                }
                           //    console.log(myData31)
                                let stream = compressor.compressJson(myData31);
                              
                                stream.on('data', data => res.write(data));
                                stream.on('end', () => res.end()
                                //  res.redirect('pivot.html');
                                ); 
                                var rutat=path.join(__dirname+'/pivotm.html')
           
    });

}


var getdenunciasrpt = function(req, res, next) {
    Denunciaunidad.find({'jefeop':req.params.id3}).exec(function(err, todos) {
        if (err){  res.send(err);  }
        var myData3 = [];
        for(var i = 0; i <  todos.length;i++){
            var cat=todos[i].categoria
            for(var i2 = 0; i2 <  cat.length;i2++){
                myData3.push(cat[i2]._id)
            }

        
        }
   

     
        var f1=(req.params.id4).substr(0,10);  
        var f2=(req.params.id5).substr(0,10);  
        console.log(f1)
        console.log({tipo:{$in:myData3},"createdAt": {"$gte": new Date(f1 +'T00:00:00.000Z'),  
        "$lt": new Date(f2 +'T24:00:00.000Z')}})

        //"createdAt": {"$gte": new Date(f1 +'T00:00:00.000Z'),    "$lt": new Date(f2 +'T24:00:00.000Z')}
        Participa3.find({tipo:{$in:myData3},"createdAt": {"$gte": new Date(f1 +'T00:00:00.000Z'),  
          "$lt": new Date(f2 +'T24:00:00.000Z')}}).populate('tipo').
        select({ "createdAt":1,"cui": 1,"nombre": 1,"tipo": 1,"correo": 1,"motivo": 1,
        "motivo3":1,"f3":1,"estado": 1,"notamedio": 1}).sort([['createdAt', -1]]).exec(function(err, todos2) {
        if (err){  res.send(err);  }

                        var myData31 = [];
                        for(var i = 0; i <  todos2.length;i++){
                                    var mm=todos2[i].motivo;
                                    if(mm)   {    if(mm.length>250)   {mm=mm.substr(0,250)} }
                                    else                {mm=''}

                                    var mm2=todos2[i].motivo33;
                                    if(mm2)   {    if(mm2.length>250)   {mm2=mm2.substr(0,250)} }
                                    else                {mm2=''}
                                    myData31.push({tipo:todos2[i].tipo.nombre,cantidad:1, createdAt:todos2[i].createdAt,cui:todos2[i].cui,nombre:todos2[i].nombre
                                        ,correo:todos2[i].correo
                                        ,motivo:todos2[i].motivo  ,estado:todos2[i].estado})
                                }
                           //    console.log(myData31)
                                let stream = compressor.compressJson(myData31);
                              
                                stream.on('data', data => res.write(data));
                                stream.on('end', () => res.end()
                                //  res.redirect('pivot.html');
                                ); 
                                var rutat=path.join(__dirname+'/pivotm.html')
                             

                             //stream.on('readable', function() {      stream.pipe(res);           });

                                //console.log(path.join(__dirname+'/pivotm.html'))
                               // req.forward(path.join(__dirname+'/pivotm.html'));
                             //   res.sendFile('index.html');
        });
    });

}

var datipo = function(str,vector) {
    var re='';
    for(var i = 0; i < vector.length;i++){
     if(vector[i]._id==str)
     {
     re=vector[i].nombre
         break;
 
     }
    }
 
 
 
 
     return re;
 };

 
var getforochatrpt = function(req, res, next) {
//estado , datau
    
    var datav=req.params.id3.split(",");
           
    var filtro='NA'
    for(var i = 0; i < datav.length;i++){
        if(datav[i]=='TODOS@gmail.com')
        {filtro='TODOS';
            break;
        }
    }
    var filtro2={};
    if(filtro=='TODOS')
    {
    filtro2={ accesoestado: 'foro'}

    }
    else{
    filtro2={email:{$in:datav}, accesoestado: 'foro'};
    }
    console.log(filtro2)
    User.find(filtro2).exec(function(err, todos) {
        if (err){ res.send(err); }

       

        var usuariosx = [];
        var usuariosx2 = [];
        for(var i = 0; i < todos.length;i++){
            usuariosx.push(''+ todos[i]._id + '');
            usuariosx2.push({_id:todos[i]._id,nombre:todos[i].nombre});
        }

     //   "toUserId" : {"$in" :usuariosx }

          
            Usermsg.find({"toUserId" : {"$in" :usuariosx }}).populate('userId').sort([['toUserId', 1]]).exec(function(err, todos2) {
            if (err){ res.send(err); }
           
           var tablax = [];
            for(var i = 0; i < todos2.length;i++){
                
                tablax.push({ tipo:datipo(todos2[i].toUserId,todos),cantidad:1,createdAt:todos2[i].createdAt,usuario:todos2[i].userId.nombre,msg:todos2[i].message});
            }

            
         //   console.log(tablax)
            let stream = compressor.compressJson(tablax);
          
            stream.on('data', data => res.write(data));
            stream.on('end', () => res.end()
            //  res.redirect('pivot.html');
            ); 

          
            
        });

       
      
        
    });
}
