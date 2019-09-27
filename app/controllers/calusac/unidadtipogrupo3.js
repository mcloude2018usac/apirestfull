
var Unidadtipogrupo3 = require('../../models/calusac/unidadtipogrupo3');
var Bitacora = require('../../models/bitacora');

exports.getUnidadtipogrupo3 = function(req, res, next){
       if(req.params.id)
        {  
           
                Unidadtipogrupo3.find({_id :req.params.id},function(err, todos) {
                    if (err){ res.send(err); }
                   
                    if(todos.length>0)   {    res.json(todos);   }
                    else
                    {  res.status(500).send('NO EXISTE REGISTRO');      }
                    
                });
             
           
        }
        else
        { Unidadtipogrupo3.find({idtipounidad :req.params.id2,idunidadacademica:req.params.id3},function(err, todos) {
               if (err){  res.send(err);  }
                res.json(todos);
            });
        }

 
}
exports.deleteUnidadtipogrupo3 = function(req, res, next){
   
    Bitacora.create({email: req.params.userID ,permiso:'Elimina',accion:'Elimina tipo curso calusac '});
    Unidadtipogrupo3.findByIdAndRemove({ _id: req.params.recordID  }, function(err, todo) {
        res.json(todo);
    });
}


exports.creaUnidadtipogrupo32s = function(req, res, next){
   
 
    Bitacora.create(req.body.bitacora);
if(req.params.recordID!=='crea')
{
    Unidadtipogrupo3.findById({ _id: req.params.recordID }, function (err, todo)  {
        if (err) {  res.send(err);  }
        else
        {  

            todo.codigo        	=	req.body.codigo        	||	todo.codigo        	;   
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

  
    
    
    Unidadtipogrupo3.find({idtipounidad        	: req.body.idtipounidad        	,
        idunidadacademica: req.body.idunidadacademica, nombre: req.body.nombre
      
        
         },function(err, todos) {
        if (err){ res.send(err); }
      
        if(todos.length>0)   {    res.status(500).send('Ya existe un tipo grupo con esta configuración :' + req.body.nombre); }
        else
        {   

            Unidadtipogrupo3.create({
            idtipounidad        	: req.body.idtipounidad        	,
            idunidadacademica: req.body.idunidadacademica,
            codigo: req.body.codigo,
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



