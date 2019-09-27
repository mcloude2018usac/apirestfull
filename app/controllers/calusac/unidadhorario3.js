
var Unidadhorario3 = require('../../models/calusac/unidadhorario3');
var Bitacora = require('../../models/bitacora');

exports.getUnidadhorario3 = function(req, res, next){
    Unidadhorario3.find({idtipounidad :req.params.id2,idunidadacademica:req.params.id3,idjornada:req.params.id},function(err, todos) {
               if (err){  res.send(err);  }
                res.json(todos);
            });
        

 
}
exports.deleteUnidadhorario3 = function(req, res, next){
   
    Bitacora.create({email: req.params.userID ,permiso:'Elimina',accion:'Elimina Edificio '});
    Unidadhorario3.findByIdAndRemove({ _id: req.params.recordID  }, function(err, todo) {
        res.json(todo);
    });
}


exports.creaUnidadhorario32s = function(req, res, next){
   
 
    Bitacora.create(req.body.bitacora);
if(req.params.recordID!=='crea')
{
    Unidadhorario3.findById({ _id: req.params.recordID }, function (err, todo)  {
        if (err) {  res.send(err);  }
        else
        {  

            todo.codigo        	=	req.body.codigo        	||	todo.codigo        	;   
            todo.correo        	=	req.body.correo        	||	todo.correo        	;   
            todo.idtipounidad        	=	req.body.idtipounidad        	||	todo.idtipounidad        	;
            todo.idunidadacademica        	=	req.body.idunidadacademica        	||	todo.idunidadacademica        	;
            todo.idjornada        	=	req.body.idjornada        	||	todo.idjornada        	;
            todo.nombre        	=	req.body.nombre        	      	;
            todo.nombre2        	=	req.body.nombre2        	      	;
            todo.dia        	=	req.body.dia        	      	;
            todo.usuarioup=req.body.bitacora.email;
            
            
            todo.save(function (err, todo){
                if (err)     {  res.status(500).send(err.message)   }
                res.json(todo);
            });
        }
    });

}
else{

  
    
    
    Unidadhorario3.find({idtipounidad        	: req.body.idtipounidad        	,idjornada        	: req.body.idjornada ,
        idunidadacademica: req.body.idunidadacademica, nombre: req.body.nombre, idunidadacademica: req.body.idunidadacademica,
        dia: req.body.dia, nombre2: req.body.nombre2
      
        
         },function(err, todos) {
        if (err){ res.send(err); }
      
        if(todos.length>0)   {    res.status(500).send('Horario ya un horariocon esta configuración :' + req.body.nombre); }
        else
        {   

            Unidadhorario3.create({
            idtipounidad        	: req.body.idtipounidad        	,
            idjornada        	: req.body.idjornada        	,
            idunidadacademica: req.body.idunidadacademica,
            correo: req.body.correo,
            codigo: req.body.codigo,
            nombre: req.body.nombre,
            nombre2: req.body.nombre2,
            dia: req.body.dia,
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



