
var Unidadplan4a = require('../../models/calusac/unidadplan4a');
var Bitacora = require('../../models/bitacora');
var Facplan4 = require('../../models/calusac/unidadplan4a');
var Unidadnivel3 = require('../../models/calusac/unidadnivel3');
var Unidadacademica3 = require('../../models/calusac/unidadacademica3');
var Unidadprofesor3 = require('../../models/user');
var Unidadpago3 = require('../../models/calusac/unidadpago3');
var Tipounidad3 = require('../../models/calusac/tipounidad3');


exports.getUnidadplan4a = function(req, res, next){
    if(req.params.id5)
    {  
       
    switch(req.params.id5) {

        case 'nivelubica':
         
                Unidadacademica3.find({idtipounidad:req.params.id,ididioma:req.params.id2 ,idtipogrupo:req.params.id3},function(err, todos) {
                    if (err){ res.send(err); }

            
                   
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
        case 'unidadaca':

            var id3v=req.params.id4.split('°')
           
    
                var projectDataForMatch = {
                    $project : {
                    
                      idtipounidad:1,
                     
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
                        filterThisDoc : 1
                        
                    }
                }
                Facplan4.aggregate([ projectDataForMatch, match]  ).exec(function(err, todos10) {
                    if (err){ res.send(err); }
                 
                    var duplicates = [];
                    todos10.forEach(function (doc) {duplicates.push(doc.idtipounidad.id);  });
                  //  res.json(duplicates);
                  console.log(duplicates)
                    Tipounidad3.find({_id: {$in: duplicates}}
                        ,null, {sort: {codigo: 1}},function(err, todos) {
                        if (err){ res.send(err); }
                       
                        if(todos.length>0)   {    res.json(todos);   }
                        else
                        {  res.status(500).send('NO EXISTE REGISTRO');      }
                        
                    });

                });
            break
        case 'dias':

        var id3v=req.params.id4.split('°')
       

            var projectDataForMatch = {
                $project : {
                
                  idtipounidad:1,
                 
                    idperiodo:1,
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
                    filterThisDoc : 1,
                    'idtipounidad.id' :req.params.id,'idperiodo.id':req.params.id3
                }
            }
            Facplan4.aggregate([ projectDataForMatch, match]  ).exec(function(err, todos10) {
                if (err){ res.send(err); }
               
                var duplicates = [];
                todos10.forEach(function (doc) {duplicates.push({nombre:doc.iddia});  });
                res.json(duplicates);
            });
        break
        case 'horas':

            var id3v=req.params.id4.split('°')
           
    
                var projectDataForMatch = {
                    $project : {
                    
                      idtipounidad:1,
                     
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
                        'idtipounidad.id' :req.params.id,'idperiodo.id':req.params.id3
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
           
                Unidadplan4a.find({_id:req.params.id},function(err, todos) {
                    if (err){ res.send(err); }
                   
                    if(todos.length>0)   {    res.json(todos);   }
                    else
                    {  res.status(500).send('NO EXISTE REGISTRO');      }
                    
                });
             
           
        }
        else
        {
          console.log('entra')
            Unidadplan4a.find({'idtipounidad.id' :req.params.id2,'idperiodo.id':req.params.id4})
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
exports.deleteUnidadplan4a = function(req, res, next){
   
    Bitacora.create({email: req.params.userID ,permiso:'Elimina',accion:'Elimina Plan '});
    Unidadplan4a.findByIdAndRemove({ _id: req.params.recordID  }, function(err, todo) {
        res.json(todo);
    });
}


exports.creaUnidadplan4a2s = function(req, res, next){
   
 
    Bitacora.create(req.body.bitacora);
if(req.params.recordID!=='crea')
{ 

    Unidadplan4a.findById({ _id: req.params.recordID }, function (err, todo)  {
        if (err) {  res.send(err);  }
        else
        {  

            todo.idtipounidad        	={id:req.body.idtipounidad.id,nombre:req.body.idtipounidad.nombre   }   	;
            todo.idunidadacademica        	={id:req.body.idunidadacademica.id,nombre:req.body.idunidadacademica.nombre, codigo:req.body.idunidadacademica.codigo  }   	;
       
         
            todo.idperiodo        	=	{id:req.body.idperiodo.id,nombre:req.body.idperiodo.nombre   }   	;
            todo.idedificio=	{id:req.body.idedificio.id,nombre:req.body.idedificio.nombre   }   	;
            todo.idsalon=	req.body.idsalon        	||	todo.idsalon        	;
            todo.nombre=	req.body.nombre        	||	todo.nombre        	;
            todo.iddia=	req.body.iddia        	||	todo.iddia        	;
            todo.idhora=	req.body.idhora       	||	todo.idhora       	;
            todo.ididioma=	req.body.ididioma       	||	todo.ididioma       	;
            todo.idtipo=	req.body.idtipo       	||	todo.idtipo       	;
            todo.comentario=	req.body.comentario       	||	todo.comentario       	;
            todo.estado=	req.body.estado       	||	todo.estado       	;
            todo.idprofesor=	req.body.idprofesor        	||	todo.idprofesor        	;
            
          
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



    Unidadplan4a.find({'idtipounidad.id'        	: req.body.idtipounidad.id       ,
       idperiodo: req.body.idperiodo,
         'idperiodo.id': req.body.idperiodo.id,    'idedificio.id': req.body.idedificio.id, 
           'idsalon.id': req.body.idsalon.id,   'idhorario': req.body.idhorario ,
           nombre: req.body.nombre,
           idhora: req.body.idhora,
           ididioma: req.body.ididioma,
           idtipo: req.body.idtipo,
           iddia: req.body.iddia, idprofesor: req.body.idprofesor
           },function(err, todos) {
        if (err){ res.send(err); }
      
        if(todos.length>0)   {    res.status(500).send('Ya existe una planificacion para este salon, jornada, y horario '); }
        else
        {   

            Unidadplan4a.create({
            idtipounidad        	: req.body.idtipounidad        	,
            idunidadacademica: req.body.idunidadacademica,
            idperiodo: req.body.idperiodo,
             idedificio: req.body.idedificio,
            idsalon: req.body.idsalon,
            nombre: req.body.nombre,
            idhora: req.body.idhora,
            ididioma: req.body.ididioma,
            iddia: req.body.iddia,
            idtipo: req.body.idtipo,
            idprofesor: req.body.idprofesor,
            capacidad: req.body.capacidad,
            asignados: req.body.asignados,
            comentario: req.body.comentario,
            estado: req.body.estado,
        
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



