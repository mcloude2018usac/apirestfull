
var Unidadperiodo = require('../models/unidadperiodo');
var Bitacora = require('../models/bitacora');

exports.getUnidadperiodo = function(req, res, next){
       if(req.params.id)
        {  
           
                Unidadperiodo.find({_id :req.params.id},function(err, todos) {
                    if (err){ res.send(err); }
                   
                    if(todos.length>0)   {    res.json(todos);   }
                    else
                    {  res.status(500).send('NO EXISTE REGISTRO');      }
                    
                });
             
           
        }
        else
        { Unidadperiodo.find({idtipounidad :req.params.id2,idunidadacademica:req.params.id3},function(err, todos) {
               if (err){  res.send(err);  }
                res.json(todos);
            });
        }

 
}
exports.deleteUnidadperiodo = function(req, res, next){
   
    Bitacora.create({email: req.params.userID ,permiso:'Elimina',accion:'Elimina Edificio '});
    Unidadperiodo.findByIdAndRemove({ _id: req.params.recordID  }, function(err, todo) {
        res.json(todo);
    });
}


exports.creaUnidadperiodo2s = function(req, res, next){
   
 
    Bitacora.create(req.body.bitacora);
if(req.params.recordID!=='crea')
{
    Unidadperiodo.findById({ _id: req.params.recordID }, function (err, todo)  {
        if (err) {  res.send(err);  }
        else
        {  

   
            todo.idtipounidad        	=	req.body.idtipounidad        	||	todo.idtipounidad        	;
            todo.idunidadacademica        	=	req.body.idunidadacademica        	||	todo.idunidadacademica        	;
            todo.nombre        	=	req.body.nombre        	      	;
            todo.usuarioup=req.body.bitacora.email;
            
            todo.save(function (err, todo){
                if (err)     {  res.status(500).send(err.message)   }
                res.json(todo);
            });
        }
    });

}
else{

  
    
    
    Unidadperiodo.find({idtipounidad        	: req.body.idtipounidad        	,
        idunidadacademica: req.body.idunidadacademica, nombre: req.body.nombre
      
        
         },function(err, todos) {
        if (err){ res.send(err); }
      
        if(todos.length>0)   {    res.status(500).send('Ya existe un Edificio con este nombre'); }
        else
        {   

            Unidadperiodo.create({
            idtipounidad        	: req.body.idtipounidad        	,
            idunidadacademica: req.body.idunidadacademica,
            nombre: req.body.nombre,
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



