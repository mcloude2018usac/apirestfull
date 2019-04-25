
var Plantillamdeva = require('../models/plantillamdeva');
var Bitacora = require('../models/bitacora');

exports.getPlantillamdeva = function(req, res, next){
    if(req.params.id4)
    {   Plantillamdeva.find({idplantilla:req.params.id, idplantillad:req.params.id2, idplantilladm:req.params.id3,_id:req.params.id4},function(err, todos) {
            if (err){ res.send(err); }
           
               res.json(todos);  
            
        });
    }
    else
    { Plantillamdeva.find({idplantilla:req.params.id, idplantillad:req.params.id2, idplantilladm:req.params.id3},function(err, todos) {
           if (err){  res.send(err);  }
            res.json(todos);
        });
    }
}
exports.deletePlantillamdeva = function(req, res, next){
   
    Bitacora.create({email: req.params.userID ,permiso:'Elimina',accion:'Elimina Plantillamdeva '});
    Plantillamdeva.findByIdAndRemove({ _id: req.params.id  }, function(err, todo) {
        res.json(todo);
    });
}


exports.creaPlantillamdeva2s = function(req, res, next){
   

    if(req.params.id!=='crea')
    {  Bitacora.create(req.body.bitacora);
        Plantillamdeva.findById({ _id: req.params.id}, function (err, todo)  {
            if (err) {  res.send(err);  }
            else
            {   todo.idplantilla        	=	req.body.idplantilla        	||	todo.idplantilla;        	
                todo.idplantillad        	=	req.body.idplantillad        	||	todo.idplantillad;        	
                todo.idplantilladm        	=	req.body.idplantilladm        	||	todo.idplantilladm;   
                todo.nombre        	=	req.body.nombre        	||	todo.nombre        	;
                todo.formulario 	=	req.body.formulario	||	todo.formulario 	;
                todo.punteo    	=	req.body.punteo    	||	todo.punteo    	;
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
    Plantillamdeva.create({  idplantilla       	: req.body.idplantilla       	,
        idplantillad       	: req.body.idplantillad       	,
        idplantilladm       	: req.body.idplantilladm       	,
        nombre        	: req.body.nombre        	,
        formulario        	: req.body.formulario        	,
        punteo 	: req.body.punteo 	,
        estado 	: req.body.estado 	,
        usuarionew:req.body.bitacora.email
       }
        , function(err, todo) {
        if (err){   res.status(500).send(err.message)    }
    
        res.json(todo);

     
        

    });
}


}





