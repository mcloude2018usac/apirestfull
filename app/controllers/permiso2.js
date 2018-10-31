
var Permison2 = require('../models/permison2');
var Bitacora = require('../models/bitacora');

exports.getPermison2 = function(req, res, next){
    if(req.params.id3)
    {   Permison2.find({idpermiso:req.params.id3,idrol:req.params.id2,_id:req.params.id},function(err, todos) {
            if (err){ res.send(err); }
           
            if(todos.length>0)   {    res.json(todos);   }
            else
            {  res.status(500).send('NO EXISTE REGISTRO');      }
            
        });
    }
    else
    { Permison2.find({idrol:req.params.id,idpermiso:req.params.id2},function(err, todos) {
           if (err){  res.send(err);  }
            res.json(todos);
        });
    }
}
exports.deletePermison2 = function(req, res, next){
   
    Bitacora.create({email: req.params.userID ,permiso:'Elimina',accion:'Elimina Permison2 '});
    Permison2.findByIdAndRemove({ _id: req.params.id  }, function(err, todo) {
        res.json(todo);
    });
}


exports.creaPermison22s = function(req, res, next){
   

    if(req.params.id!=='crea')
    {  Bitacora.create(req.body.bitacora);
        Permison2.findById({ _id: req.params.id}, function (err, todo)  {
            if (err) {  res.send(err);  }
            else
            {  
                todo.idpermiso        	=	req.body.ididpermiso        	||	todo.idpermiso        	;
                todo.idrol        	=	req.body.idrol        	||	todo.idrol        	;
                todo.nombre        	=	req.body.nombre        	||	todo.nombre        	;
                todo.ingreso 	=	req.body.ingreso		;
                todo.consulta 	=	req.body.consulta		;
                todo.eliminacion 	=	req.body.eliminacion		;
                todo.creacion 	=	req.body.creacion		;
                todo.actualizacion    	=	req.body.actualizacion        	;
                todo.usuarioup=req.body.bitacora.email;
                
             
                todo.save(function (err, todo){
                    if (err)     {  res.status(500).send(err.message)   }
                    res.json(todo);
                });
            }
        });
    
    }
    else{

                        Permison2.find({nombre:req.body.nombre, idrol:req.body.idrol, idpermiso:req.body.idpermiso },function(err, todos) {
                            if (err){ res.send(err); }
                        
                            if(todos.length>0)   {    res.status(500).send('Modulo ya existe');   }
                            else
                            { 
                                Bitacora.create(req.body.bitacora);
                                Permison2.create({  
                                idpermiso        	: req.body.idpermiso        	,
                                idrol        	: req.body.idrol        	,
                                nombre        	: req.body.nombre        	,
                                ingreso    	: req.body.ingreso    	,
                                consulta    	: req.body.consulta    	,
                                eliminacion   	: req.body.eliminacion 	,
                                creacion    	: req.body.creacion   	,
                                actualizacion 	: req.body.actualizacion 	,
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





