
var Unidadedificiosalon = require('../models/unidadedificiosalon');
var Bitacora = require('../models/bitacora');

exports.getUnidadedificiosalon = function(req, res, next){
       if(req.params.id)
        {  
           
                Unidadedificiosalon.find({_id:req.params.id},function(err, todos) {
                    if (err){ res.send(err); }
                   
                    if(todos.length>0)   {    res.json(todos);   }
                    else
                    {  res.status(500).send('NO EXISTE REGISTRO');      }
                    
                });
             
           
        }
        else
        { Unidadedificiosalon.find({idtipounidad :req.params.id2,idunidadacademica:req.params.id3,idedificio:req.params.id4},function(err, todos) {
               if (err){  res.send(err);  }
                res.json(todos);
            });
        }

 
}
exports.deleteUnidadedificiosalon = function(req, res, next){
   
    Bitacora.create({email: req.params.userID ,permiso:'Elimina',accion:'Elimina Salon '});
    Unidadedificiosalon.findByIdAndRemove({ _id: req.params.recordID  }, function(err, todo) {
        res.json(todo);
    });
}


exports.creaUnidadedificiosalon2s = function(req, res, next){
   
 
    Bitacora.create(req.body.bitacora);
if(req.params.recordID!=='crea')
{ 

    Unidadedificiosalon.findById({ _id: req.params.recordID }, function (err, todo)  {
        if (err) {  res.send(err);  }
        else
        {  

   
            todo.idtipounidad        	=	req.body.idtipounidad        	||	todo.idtipounidad        	;
            todo.idunidadacademica        	=	req.body.idunidadacademica        	||	todo.idunidadacademica        	;
            todo.idedificio        	=	req.body.idedificio        	||	todo.idedificio        	;
            todo.nombre        	=	req.body.nombre        	      	;
            todo.capacidad        	=	req.body.capacidad        	      	;
            todo.estado        	=	req.body.estado        	      	;
            todo.usuarioup=req.body.bitacora.email;
            
            todo.save(function (err, todo){
                if (err)     {  res.status(500).send(err.message)   }
                res.json(todo);
            });
        }
    });

}
else{


    
    Unidadedificiosalon.find({idtipounidad        	: req.body.idtipounidad        	,
        idunidadacademica: req.body.idunidadacademica,    idedificio: req.body.idedificio, nombre: req.body.nombre
      
        
         },function(err, todos) {
        if (err){ res.send(err); }
      
        if(todos.length>0)   {    res.status(500).send('Ya existe un salon con este nombre'); }
        else
        {   

            Unidadedificiosalon.create({
            idtipounidad        	: req.body.idtipounidad        	,
            idunidadacademica: req.body.idunidadacademica,
            idedificio: req.body.idedificio,
            nombre: req.body.nombre,
            capacidad: req.body.capacidad,
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



