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

exports.getPivotm = function(req, res, next){

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




var getcursoslibresrpt = function(req, res, next) {

    cursoeve.find({},function(err, todos0) {
        if (err){  res.send(err);  }      
                Participa2.find({},function(err, todos) {
                        if (err){  res.send(err);  }
                        var resp=[]
                        var tevento=''
                        var ubica=''
                        for(var i = 0; i < todos.length;i++){
                                for(var ii = 0; ii < todos0.length;ii++){
                                        if(todos0[ii]._id==todos[i].idevento)
                                        {
                                           tevento=  todos0[ii].nombre   
                                           ubica= 'Edificio: '+todos0[ii].edificio + '  Salon: ' +  todos0[ii].salon     
                                           break;
                                        }
                                }        
                                //resp.push({tipocurso:todos[i].idtipoevento.nombre,area:todos[i].idarea.nombre,curso:tevento,nombre:todos[i].nombre + ' ' +todos[i].apellido,genero:todos[i].genero,correo:todos[i].correo,telefono:todos[i].telefono,edad:todos[i].edad});
                                resp.push({ubica:ubica,tipocurso:todos[i].idtipoevento.nombre,area:todos[i].idarea.nombre,nombre:tevento,cantidad:1});
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
