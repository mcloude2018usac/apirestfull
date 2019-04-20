
var Plantillad = require('../models/plantillad');
var Bitacora = require('../models/bitacora');

exports.getPlantillad = function(req, res, next){
    if(req.params.id2)
    { 
        
        Plantillad.find({idplantilla:req.params.id,idempresa:req.params.id2},function(err, todos) {
            if (err){ res.send(err); }
           
            if(todos.length>0)   {    res.json(todos);   }
           
            
        });
    }
    else
    { Plantillad.find({_id:req.params.id},function(err, todos) {
           if (err){  res.send(err);  }
            res.json(todos);
        });
    }
}
exports.deletePlantillad = function(req, res, next){
   
    Bitacora.create({email: req.params.userID ,permiso:'Elimina',accion:'Elimina Plantillad '});
    Plantillad.findByIdAndRemove({ _id: req.params.id  }, function(err, todo) {
        res.json(todo);
    });
}


exports.creaPlantillad2s = function(req, res, next){
   

    if(req.params.id!=='crea')
    {  Bitacora.create(req.body.bitacora);
        Plantillad.findById({ _id: req.params.id}, function (err, todo)  {
            if (err) {  res.send(err);  }
            else
            {  
                
                todo.tipo        	=	req.body.tipo        	||	todo.tipo        	;
                todo.nombre        	=	req.body.nombre        	||	todo.nombre        	;
                todo.descripcion 	=	req.body.descripcion	||	todo.descripcion 	;
                todo.estado 	=	req.body.estado 	||	todo.estado 	;
                todo.usuarioup=req.body.bitacora.email;
                
              
                todo.save(function (err, todo){
                    if (err)     {  res.status(500).send(err.message)   }
                    res.json(todo);
                });
            }
        });
    
    }
    else{
        Bitacora.create(req.body.bitacora);
        var d = new Date();
    Plantillad.create({  idempresa       	: req.body.idempresa       	, idplantilla       	: req.body.idplantilla       	,
        tipo        	: req.body.tipo       	,
        nombre        	: req.body.nombre      	,
        descripcion    	: req.body.descripcion    	,
        estado 	: req.body.estado 	,
        usuarionew:req.body.bitacora.email
       }
        , function(err, todo) {
        if (err){   res.status(500).send(err.message)    }
    
        res.json(todo);

     
        

    });
}


}





