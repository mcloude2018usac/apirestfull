
var Area_evento = require('../models/aread_evento');
var Bitacora = require('../models/bitacora');

exports.getArea_evento = function(req, res, next){
   
    if(req.params.id2)
    { 
        if(req.params.id2=='todos')
    { 
        Area_evento.find({idempresa:req.params.id},function(err, todos) {
            if (err){ res.send(err); }
           
           res.json(todos);   
          
            
        });
    }
    else
    {
        Area_evento.find({idempresa:req.params.id,estado:req.params.id2}).sort({idarea:-1}).exec(function(err, todos) {
            if (err){ res.send(err); }
           
           res.json(todos);   
          
            
        });
    }
     
    }
    else
    {
        Area_evento.find({_id:req.params.id},function(err, todos) {
            if (err){ res.send(err); }
            res.json(todos);  
           
           
            
        });
    }
}
exports.deleteArea_evento = function(req, res, next){
     Bitacora.create({idempresa:req.params.idempresa,idafiliado:req.params.idafiliado,email: req.params.userID ,permiso:'Elimina',accion:'Elimina catalogo '});
  
    Area_evento.findByIdAndRemove({ _id: req.params.recordID  }, function(err, todo) {
        res.json(todo);
    });
}


exports.creaArea_evento2s = function(req, res, next){
   
 
console.log(req.params)

    if(req.params. recordID!=='crea')
    {  Bitacora.create(req.body.bitacora);
        Area_evento.findById({ _id: req.params.recordID}, function (err, todo)  {
            if (err) {  res.send(err);  }
            else
            {  
                
                todo.idempresa        	=	req.body.idempresa        	||	todo.idempresa;        	;
                todo.idtipoevento        	=	req.body.idtipoevento        	||	todo.idtipoevento        	;
                todo.idarea        	=	req.body.idarea        	||	todo.idarea        	;
                todo.nombre        	=	req.body.nombre        	||	todo.nombre        	;
                todo.plataforma        	=	req.body.plataforma        	||	todo.plataforma        	;
                todo.url        	=	req.body.url        	||	todo.url        	;
                todo.capacidad        	=	req.body.capacidad        	||	todo.capacidad        	;
                todo.catedratico        	=	req.body.catedratico        	||	todo.catedratico        	;
                todo.movil        	=	req.body.movil        	||	todo.movil        	;
                todo.email        	=	req.body.email        	||	todo.email        	;
                todo.fecha        	=	req.body.fecha        	||	todo.fecha        	;
                todo.clave        	=	req.body.clave        	||	todo.clave        	;
                todo.estado        	=	req.body.estado        	||	todo.estado        	;
                todo.idevento        	=	req.body.idevento        	||	todo.idevento        	;
            

                todo.usuarioup=req.body.bitacora.email;

                todo.save(function (err, todo){
                    if (err)     {  res.status(500).send(err.message)   }
                    res.json(todo);
                });
            }
        });
    
    }
    else{


         console.log(req.body)

        Bitacora.create(req.body.bitacora);
    Area_evento.create({  
     
        idempresa      	: req.body.idempresa     	,
        idtipoevento	: req.body.idtipoevento	,
        idarea	: req.body.idarea	,
    
        nombre        	: req.body.nombre        	,
        plataforma        	: req.body.plataforma        	,
     
        url: req.body.url,
        capacidad: req.body.capacidad,
        catedratico: req.body.catedratico,
        movil: req.body.movil,
        email: req.body.email,
        fecha: req.body.fecha,
        clave: req.body.clave,
        estado: req.body.estado,
        idevento: req.body.idevento,


        usuarionew:req.body.bitacora.email 	
        
       }
        , function(err, todo) {
        if (err){ 
          
            res.status(500).send(err.message)    }
    
        res.json(todo);

     
        

    });
}


}


