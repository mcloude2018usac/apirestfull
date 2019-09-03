
var Unidadplan3 = require('../../models/calusac/unidadplan3');
var Bitacora = require('../../models/bitacora');
var Facplan3 = require('../../models/calusac/unidadplan3');

exports.getUnidadplan3 = function(req, res, next){
    if(req.params.id5)
    {  

        
    switch(req.params.id4) {
        case 'jornadas':

            var projectDataForMatch = {
                
                $project : {
                    _id : 1, //list all fields needed here
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

            Facplan3.aggregate([ projectDataForMatch, match]  ).exec(function(err, todos10) {
                if (err){ res.send(err); }
             
                var duplicates = [];
                var asigno=0;
                todos10.forEach(function (doc) {duplicates.push(doc._id);  });

                console.log(todos10)
                console.log(duplicates)

                Unidadplan3.find({_id: {$in: duplicates},'idtipounidad.id' :req.params.id,'idunidadacademica.id':req.params.id2,'idperiodo.id':req.params.id3})
               .exec(function(err, todos) {
                       if (err){  res.send(err);  }
                 
                      
        
                        res.json(todos);
                    });



            });

     
            

        break
        case 'horarios':
        break
        case 'profesores':
        break
        default:
        break;

    }


    }
    else{
       if(req.params.id)
        {  
           
                Unidadplan3.find({_id:req.params.id},function(err, todos) {
                    if (err){ res.send(err); }
                   
                    if(todos.length>0)   {    res.json(todos);   }
                    else
                    {  res.status(500).send('NO EXISTE REGISTRO');      }
                    
                });
             
           
        }
        else
        {
            console.log
            Unidadplan3.find({'idtipounidad.id' :req.params.id2,'idunidadacademica.id':req.params.id3,'idperiodo.id':req.params.id4})
        .populate('idnivel').populate('idjornada').populate('idhorario').populate('idprofesor').exec(function(err, todos) {
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
exports.deleteUnidadplan3 = function(req, res, next){
   
    Bitacora.create({email: req.params.userID ,permiso:'Elimina',accion:'Elimina Plan '});
    Unidadplan3.findByIdAndRemove({ _id: req.params.recordID  }, function(err, todo) {
        res.json(todo);
    });
}


exports.creaUnidadplan32s = function(req, res, next){
   
 
    Bitacora.create(req.body.bitacora);
if(req.params.recordID!=='crea')
{ 

    Unidadplan3.findById({ _id: req.params.recordID }, function (err, todo)  {
        if (err) {  res.send(err);  }
        else
        {  

    
            todo.idtipounidad        	={id:req.body.idtipounidad.id,nombre:req.body.idtipounidad.nombre   }   	;
            todo.idunidadacademica        	={id:req.body.idunidadacademica.id,nombre:req.body.idunidadacademica.nombre, codigo:req.body.idunidadacademica.codigo  }   	;
            todo.idperiodo        	=	{id:req.body.idperiodo.id,nombre:req.body.idperiodo.nombre   }   	;
            todo.idedificio=	{id:req.body.idedificio.id,nombre:req.body.idedificio.nombre   }   	;
            todo.idsalon=	req.body.idsalon        	||	todo.idsalon        	;
            todo.nombre=	req.body.nombre        	||	todo.nombre        	;
            todo.idnivel=	req.body.idnivel        	||	todo.idnivel        	;
            todo.idjornada=	req.body.idjornada        	||	todo.idjornada        	;
            todo.idhorario=	req.body.idhorario        	||	todo.idhorario        	;
         
            todo.idprofesor=	req.body.idprofesor        	||	todo.idprofesor        	;
            
          
            todo.capacidad=	req.body.capacidad        	||	todo.capacidad        	;
            todo.asignados=	req.body.asignados        	||	todo.asignados        	;
         
            todo.codfac=	req.body.codfac        	||	todo.codfac        	;
            todo.usuarioup=req.body.bitacora.email;

            todo.save(function (err, todo){
                if (err)     {  res.status(500).send(err.message)   }
                res.json(todo);
            });
        }
    });

}
else{

  
    console.log({'idtipounidad.id'        	: req.body.idtipounidad.id       
     	,  'idunidadacademica.id': req.body.idunidadacademica.id,
     'idperiodo.id': req.body.idperiodo.id,    'idedificio.id': req.body.idedificio.id, 
       'idsalon': req.body.idsalon.id,   'idhorario.id': req.body.idhorario.id  })

    Unidadplan3.find({'idtipounidad.id'        	: req.body.idtipounidad.id       
         	,  'idunidadacademica.id': req.body.idunidadacademica.id,
         'idperiodo.id': req.body.idperiodo.id,    'idedificio.id': req.body.idedificio.id, 
           'idsalon.id': req.body.idsalon.id,   'idhorario': req.body.idhorario  },function(err, todos) {
        if (err){ res.send(err); }
      
        if(todos.length>0)   {    res.status(500).send('Ya existe una planificacion para este salon, jornada, y horario '); }
        else
        {   

            Unidadplan3.create({
            idtipounidad        	: req.body.idtipounidad        	,
            idunidadacademica: req.body.idunidadacademica,
            idperiodo: req.body.idperiodo,
             idedificio: req.body.idedificio,
            idsalon: req.body.idsalon,
            nombre: req.body.nombre,
            idnivel: req.body.idnivel,
            idjornada: req.body.idjornada,
            idhorario: req.body.idhorario,
         
            idprofesor: req.body.idprofesor,
            capacidad: req.body.capacidad,
            asignados: req.body.asignados,
        
            codfac: req.body.codfac,
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



