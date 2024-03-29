
var Unidadplan4 = require('../../models/calusac/unidadplan4');
var Bitacora = require('../../models/bitacora');
var Facplan4 = require('../../models/calusac/unidadplan4');
var Unidadnivel3 = require('../../models/calusac/unidadnivel3');
var Unidadacademica3 = require('../../models/calusac/unidadacademica3');
var Unidadprofesor3 = require('../../models/user');
var Unidadpago3 = require('../../models/calusac/unidadpago3');
var Unidadidiomanivel3 = require('../../models/calusac/unidadidiomanivel3');

exports.getUnidadplan4 = function(req, res, next){
    if(req.params.id5)
    {  
       console.log(req.params)
    switch(req.params.id5) {
        case 'nivelubica22':
            console.log({idtipounidad:req.params.id,ididioma:req.params.id2 ,idtipogrupo:req.params.id3})
            Unidadidiomanivel3.find({idtipounidad:req.params.id,ididioma:req.params.id2 },function(err, todos) {
                    if (err){ res.send(err); }

                    res.json(todos);
                    
                });
             

        break;
   
        case 'nivelubica':
            console.log({idtipounidad:req.params.id,ididioma:req.params.id2 ,idtipogrupo:req.params.id3})
                Unidadacademica3.find({idtipounidad:req.params.id,ididioma:req.params.id2 ,idtipogrupo:req.params.id3},function(err, todos) {
                    if (err){ res.send(err); }

                   console.log(todos)
                   
                    if(todos.length>0)   {    
                        
                        
                     

                        Unidadnivel3.find({idunidadacademica:todos[0]._id},function(err, todos1) {
                            if (err){ res.send(err); }
                           
                                
                                res.json(todos1);   
                            
                            
                        });


                    
                    
                    }
                    else
                    {   res.json(todos);     }
                    
                });
             

        break;
   
        case 'dias':

        var id3v=req.params.id4.split('°')
       

            var projectDataForMatch = {
                $project : {
                idtipo:1,
                  idtipounidad:1,
                  ididioma:1,
                    idperiodo:1,
                  iddia:1,
                  capacidad:1,
               
                    filterThisDoc : {
                        $cond : {
                            if  : {
                                $lt : ["$asignados", "$capacidad"]
                            },
                        then : 1,
                        else  : 0
                    } //or use compare operator $cmp
                }
            }
            }
            var match = {
                $match : {
                    filterThisDoc : 1,
                    'idtipounidad.id' :req.params.id,'idperiodo.id':req.params.id3, ididioma:req.params.id2,idtipo:id3v[0]
                }
            }

            console.log( {'idtipounidad.id' :req.params.id,'idperiodo.id':req.params.id3,ididioma:req.params.id2})
            Facplan4.aggregate([ projectDataForMatch, match]  ).exec(function(err, todos10) {
                if (err){ res.send(err); }
               var diasn=[]
                for(var i = 0; i < todos10.length;i++){
                    if(todos10[i].capacidad!=='0')
                    {
                        diasn.push({iddia:todos10[i].iddia})
                    }
                }
                var duplicates = [];
                diasn.forEach(function (doc) {duplicates.push({nombre:doc.iddia});  });


                res.json(duplicates);
            });
        break
        case 'horas':

            var id3v=req.params.id4.split('°')
           
    
                var projectDataForMatch = {
                    $project : {
                    idtipo:1,
                      idtipounidad:1,
                     ididioma:1,
                        idperiodo:1,
                        idhora:1,
                      iddia:1,
                   
                        filterThisDoc : {
                            $cond : {
                                if  : {
                                    $lt : ["$asignados", "$capacidad"]
                                },
                            then : 1,
                            else  : 0
                        } //or use compare operator $cmp
                    }
                }
                }
                var match = {
                    $match : {
                        filterThisDoc : 1,iddia: {"$eq": new Date(req.params.id2)},
                        'idtipounidad.id' :req.params.id,'idperiodo.id':req.params.id3,
                        ididioma:id3v[0],idtipo:id3v[1]
                    }
                }
                console.log(match)
                Facplan4.aggregate([ projectDataForMatch, match]  ).exec(function(err, todos10) {
                    if (err){ res.send(err); }
                   
                    var duplicates = [];
                    todos10.forEach(function (doc) {duplicates.push({nombre:doc.idhora});  });
                    res.json(duplicates);
                });
            break
        default:
                var projectDataForMatch = {
                    $project : {
                    
                      idtipounidad:1,
                      idunidadacademica:1,
                      idperiodo:1,
                   
                        filterThisDoc : {
                            $cond : {
                                if  : {
                                    $lt : ["$asignados", "$capacidad"]
                                },
                            then : 1,
                            else  : 0
                        } //or use compare operator $cmp
                    }
                }
                }
                var match = {
                    $match : {  
                        filterThisDoc : 1,
                        'idtipounidad.id' :req.params.id,'idperiodo.id':req.params.id3
                    }
                }
                Facplan4.aggregate([ projectDataForMatch, match]  ).exec(function(err, todos10) {
                    if (err){ res.send(err); }
                    var duplicates = [];
                    todos10.forEach(function (doc) {duplicates.push(doc.idnivel);  });
                   Unidadpago3.find({nivel: {$in: duplicates},idtipounidad :req.params.id2,tipo:req.params.id4}).populate('nivel').populate('jornada').sort([['codigo', 1]]).exec(function(err, todos) {
                        if (err){  res.send(err);  }
                     
                         res.json(todos);
                     });
    
                     

                });
            break


    }


    }
    else{
       if(req.params.id)
        {  
           
                Unidadplan4.find({_id:req.params.id},function(err, todos) {
                    if (err){ res.send(err); }
                   
                    if(todos.length>0)   {    res.json(todos);   }
                    else
                    {  res.status(500).send('NO EXISTE REGISTRO');      }
                    
                });
             
           
        }
        else
        {
          console.log('entra')
            Unidadplan4.find({'idtipounidad.id' :req.params.id2,'idperiodo.id':req.params.id4})
        .populate('idprofesor').populate('ididioma').populate('idtipo').exec(function(err, todos) {
               if (err){  res.send(err);  }
               /*var myData = [];
              
               for(var i = 0; i < todos.length;i++){
                   myData.push({_id:todos[i]._id,idtipounidad:todos[i].idtipounidad
                    ,nombre:todos[i].nombre,idunidadacademica:todos[i].idunidadacademica
                    ,idperiodo:todos[i].idperiodo
                    ,idedificio:todos[i].idedificio
                    ,idsalon:todos[i].idsalon
                    ,idnivel:todos[i].idnivel
                    ,idjornada:todos[i].idjornada
                    ,idhorario:todos[i].idhorario
                    ,iddia:todos[i].iddia
                    ,idprofesor:todos[i].idprofesor
                    ,capacidad:todos[i].capacidad
                    ,asignados:todos[i].asignados
                    ,codfac:todos[i].codfac,
                    horario:todos[i].idhorario.nombre
                    
                
                
                });
               }
               */
              

                res.json(todos);
            });
        }
    }

 
}
exports.deleteUnidadplan4 = function(req, res, next){
   
    Bitacora.create({email: req.params.userID ,permiso:'Elimina',accion:'Elimina Plan '});
    Unidadplan4.findByIdAndRemove({ _id: req.params.recordID  }, function(err, todo) {
        res.json(todo);
    });
}


exports.creaUnidadplan42s = function(req, res, next){
   
 
    Bitacora.create(req.body.bitacora);
if(req.params.recordID!=='crea')
{ 

    Unidadplan4.findById({ _id: req.params.recordID }, function (err, todo)  {
        if (err) {  res.send(err);  }
        else
        {  

    
            todo.idtipounidad        	={id:req.body.idtipounidad.id,nombre:req.body.idtipounidad.nombre   }   	;
            todo.idperiodo        	=	{id:req.body.idperiodo.id,nombre:req.body.idperiodo.nombre   }   	;
            todo.idedificio=	{id:req.body.idedificio.id,nombre:req.body.idedificio.nombre   }   	;
            todo.idsalon=	req.body.idsalon        	||	todo.idsalon        	;
            todo.nombre=	req.body.nombre        	||	todo.nombre        	;
            todo.iddia=	req.body.iddia        	||	todo.iddia        	;
            todo.idhora=	req.body.idhora       	||	todo.idhora       	;
            todo.ididioma=	req.body.ididioma       	||	todo.ididioma       	;
            todo.idtipo=	req.body.idtipo       	||	todo.idtipo       	;
            todo.idprofesor=	req.body.idprofesor        	||	todo.idprofesor        	;
            todo.codigocurso=	req.body.codigocurso       	||	todo.codigocurso       	;
            todo.fechafin=	req.body.fechafin	||	todo.fechafin	;
            todo.capacidad=	req.body.capacidad        	||	todo.capacidad        	;
            todo.asignados=	req.body.asignados        	||	todo.asignados        	;
         
        
            todo.usuarioup=req.body.bitacora.email;

            todo.save(function (err, todo){
                if (err)     {  res.status(500).send(err.message)   }
                res.json(todo);
            });
        }
    });

}
else{



    Unidadplan4.find({'idtipounidad.id'        	: req.body.idtipounidad.id       ,
       idperiodo: req.body.idperiodo,
         'idperiodo.id': req.body.idperiodo.id,    'idedificio.id': req.body.idedificio.id, 
           'idsalon.id': req.body.idsalon.id,   'idhorario': req.body.idhorario ,
           nombre: req.body.nombre,
           idhora: req.body.idhora,
           ididioma: req.body.ididioma,
           codigocurso:req.body.codigocurso,
           idtipo: req.body.idtipo,
           iddia: req.body.iddia, idprofesor: req.body.idprofesor
           },function(err, todos) {
        if (err){ res.send(err); }
      
        if(todos.length>0)   {    res.status(500).send('Ya existe una planificacion para este salon, jornada, y horario '); }
        else
        {   

            Unidadplan4.create({
            idtipounidad        	: req.body.idtipounidad        	,
            idperiodo: req.body.idperiodo,
             idedificio: req.body.idedificio,
            idsalon: req.body.idsalon,
            nombre: req.body.nombre,
            idhora: req.body.idhora,
            ididioma: req.body.ididioma,
            fechafin: req.body.fechafin,
            iddia: req.body.iddia,
            idtipo: req.body.idtipo,
            idprofesor: req.body.idprofesor,
            capacidad: req.body.capacidad,
            asignados: req.body.asignados,
            codigocurso:req.body.codigocurso,
        
        
            usuarionew:req.body.bitacora.email
        
              }
                , function(err, todo) {
                if (err){ 
                   
                    res.status(500).send(err.message)    }
            
                res.json(todo);
        
             
                
        
            });

            
             }
        
    });
   
 
}

}



