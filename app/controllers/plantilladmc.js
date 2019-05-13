
var Plantilladmc = require('../models/plantilladmc');
var Bitacora = require('../models/bitacora');

exports.getPlantilladmc = function(req, res, next){
    if(req.params.id4)
    { 
        if(req.params.id4=='todos')
        {
          Plantilladmc.find({idplantilla:req.params.id, idempresa:req.params.id2,  idplantilladm:req.params.id3}).sort([['orden', 1]]).exec(function(err, todos) {
            if (err){ res.send(err); }
           
              res.json(todos); 
          
        });
    }

    
    if(req.params.id4=='orden')
    { 

        Plantilladmc.find({idplantilla:req.params.id, idempresa:req.params.id2,  idplantilladm:req.params.id3}).sort([['orden', -1]]).exec(function(err, todos) {
            if (err){ res.send(err); }
         
            if(todos.length>0)   {    res.json({orden:todos[0].orden});   }
        });

    }


    }
    else
    { Plantilladmc.find({idplantilla:req.params.id, idempresa:req.params.id2, idplantilladm:req.params.id3},function(err, todos) {
           if (err){  res.send(err);  }
            res.json(todos);
        });
    }
}
exports.deletePlantilladmc = function(req, res, next){
   
    Bitacora.create({email: req.params.userID ,permiso:'Elimina',accion:'Elimina Plantilladmc '});
    Plantilladmc.findByIdAndRemove({ _id: req.params.id  }, function(err, todo) {
        res.json(todo);
    });
}


exports.creaPlantilladmc2s = function(req, res, next){
   

    if(req.params.id!=='crea')
    {  Bitacora.create(req.body.bitacora);
        Plantilladmc.findById({ _id: req.params.id}, function (err, todo)  {
            if (err) {  res.send(err);  }
            else
            {   todo.idplantilla        	=	req.body.idplantilla        	||	todo.idplantilla;        	
                 todo.idplantilladm        	=	req.body.idplantilladm        	||	todo.idplantilladm;   
                todo.tiporecurso        	=	req.body.tiporecurso        	||	todo.tiporecurso        	;
                todo.nombre        	=	req.body.nombre        	||	todo.nombre        	;
                todo.descripcion        	=	req.body.descripcion        	||	todo.descripcion        	;
                todo.orden 	=	req.body.orden	||	todo.orden 	;
                todo.archivos 	=	req.body.archivos	||	todo.archivos 	;
                todo.marcas   	=	req.body.marcas    	||	todo.marcas   	;
                todo.url   	=	req.body.url    	||	todo.url    	;
                todo.contenido 	=	req.body.contenido 	||	todo.contenido 	;
                todo.estado 	=	req.body.estado 	||	todo.estado 	;
                todo.estado2 	=	req.body.estado2 	||	todo.estado2 	;
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
    Plantilladmc.create({  idempresa       	: req.body.idempresa      	,
         idplantilla       	: req.body.idplantilla       	,
        idplantilladm       	: req.body.idplantilladm       	,
        tiporecurso        	: req.body.tiporecurso        	, 
        nombre        	: req.body.nombre        	,
        descripcion        	: req.body.descripcion        	,
        orden 	: req.body.orden 	,
        archivos    	: req.body.archivos    	,
        marcas   	: req.body.marcas  	,
        url    	: req.body.url    	,
        contenido    	: req.body.contenido    	,
      
        estado 	: req.body.estado 	,
        estado2 	: 'Asignado' 	,
        usuarionew:req.body.bitacora.email
       }
        , function(err, todo) {
        if (err){   res.status(500).send(err.message)    }
    
        res.json(todo);

     
        

    });
}


}





