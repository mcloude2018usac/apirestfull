
var Unidadnivel3 = require('../../models/calusac/unidadnivel3');
var Bitacora = require('../../models/bitacora');

exports.getUnidadnivel3 = function(req, res, next){
    if(req.params.id4)
    {  

        
        Unidadnivel3.find({idtipounidad :req.params.id2,idunidadacademica:req.params.id3,codigo:req.params.id4})
        .sort([['codigo', 1]]).collation({locale: "en_US", numericOrdering: true}).exec(function(err, todos) {
            if (err){ res.send(err); }
           
            if(todos.length>0)   {    res.json(todos);   }
            else
            {  res.status(500).send('NO EXISTE REGISTRO');      }
            
        });
    }
    else{
       if(req.params.id)
        {  
           
                Unidadnivel3.find({_id :req.params.id}).sort([['codigo', 1]]).collation({locale: "en_US", numericOrdering: true}).exec(function(err, todos) {
                    if (err){ res.send(err); }
                   
                    if(todos.length>0)   {    res.json(todos);   }
                    else
                    {  res.status(500).send('NO EXISTE REGISTRO');      }
                    
                });
             
           
        }
        else
        { Unidadnivel3.find({idtipounidad :req.params.id2,idunidadacademica:req.params.id3}).sort([['codigo', 1]])
        .collation({locale: "en_US", numericOrdering: true}).exec(function(err, todos) {
               if (err){  res.send(err);  }
                res.json(todos);
            });
        }
    }
 
}
exports.deleteUnidadnivel3 = function(req, res, next){
   
    Bitacora.create({email: req.params.userID ,permiso:'Elimina',accion:'Elimina Edificio '});
    Unidadnivel3.findByIdAndRemove({ _id: req.params.recordID  }, function(err, todo) {
        res.json(todo);
    });
}


exports.creaUnidadnivel32s = function(req, res, next){
   
 
    Bitacora.create(req.body.bitacora);
if(req.params.recordID!=='crea')
{
    Unidadnivel3.findById({ _id: req.params.recordID }, function (err, todo)  {
        if (err) {  res.send(err);  }
        else
        {  

            

            todo.codigo        	=	req.body.codigo        	||	todo.codigo        	;   
            todo.correo        	=	req.body.correo        	||	todo.correo        	;   
            todo.idtipounidad        	=	req.body.idtipounidad        	||	todo.idtipounidad        	;
            todo.idunidadacademica        	=	req.body.idunidadacademica        	||	todo.idunidadacademica        	;
            todo.nombre        	=	req.body.nombre        	      	;
            todo.abreviatura        	=	req.body.abreviatura        	      	;
            todo.usuarioup=req.body.bitacora.email;
            
            
            todo.save(function (err, todo){
                if (err)     {  res.status(500).send(err.message)   }
                res.json(todo);
            });
        }
    });

}
else{

  
    
    
    Unidadnivel3.find({idtipounidad        	: req.body.idtipounidad        	,
        idunidadacademica: req.body.idunidadacademica, nombre: req.body.nombre
      
        
         },function(err, todos) {
        if (err){ res.send(err); }
      
        if(todos.length>0)   {    res.status(500).send('Ya existe un nivelcon esta configuración :' + req.body.nombre); }
        else
        {   

            Unidadnivel3.create({
            idtipounidad        	: req.body.idtipounidad        	,
            idunidadacademica: req.body.idunidadacademica,
            correo: req.body.correo,
            codigo: req.body.codigo,
            nombre: req.body.nombre,
            abreviatura:req.body.abreviatura,
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



