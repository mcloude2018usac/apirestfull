
var Participa3 = require('../models/participa3');
var Bitacora = require('../models/bitacora');

exports.getParticipa3 = function(req, res, next){
    if(req.params.id2)
    {  
       
        Participa3.find({idevento:req.params.id,_id:req.params.id2},function(err, todos) {
            if (err){ res.send(err); }
           
            if(todos.length>0)   {    res.json(todos);   }
            else
            {  res.status(500).send('NO EXISTE REGISTRO');      }
            
        });
    }
    else
    { Participa3.find({idevento:req.params.id},function(err, todos) {
           if (err){  res.send(err);  }
            res.json(todos);
        });
    }
}
exports.deleteParticipa3 = function(req, res, next){
   
    Bitacora.create({email: req.params.userID ,permiso:'Elimina',accion:'Elimina Participa3 '});
    Participa3.findByIdAndRemove({ _id: req.params.id  }, function(err, todo) {
        res.json(todo);
    });
}


exports.creaParticipa32s = function(req, res, next){
   
 
  if(req.params.id=='actualiza')
{ 
   

}
else{
    if(req.params.id!=='crea')
    { 
         Bitacora.create(req.body.bitacora);
        Participa3.findById({ _id: req.params.id}, function (err, todo)  {
            if (err) {  res.send(err);  }
            else
            {  
                todo.cui        	=	req.body.cui        	||	todo.cui        	;         
               todo.nombre        	=	req.body.nombre        	||	todo.nombre        	;
                todo.apellido 	=	req.body.apellido	||	todo.apellido 	;
                todo.telefono    	=	req.body.telefono    	||	todo.telefono    	;
                todo.correo 	=	req.body.correo	||	todo.correo 	;
                
                todo.tipo   	=	req.body.tipo    	||	todo.tipo   	; 
                todo.unidad   	=	req.body.unidad    	||	todo.unidad   	;
                todo.motivo   	=	req.body.motivo    	||	todo.motivo   	;
                todo.f1 	=	req.body.f1 	||	todo.f1 	;
                todo.f2 	=	req.body.f2 	||	todo.f2 	;
                todo.f3 	=	req.body.f3 	||	todo.f3 	;
               
              
                todo.save(function (err, todo){
                    if (err)     {  res.status(500).send(err.message)   }
                    res.json(todo);
                });
            }
        });
    
    }
    else{

     

                    Bitacora.create(req.body.bitacora);
                  
                Participa3.create({  
                   
                    cui       	: req.body.cui       	,
                    nombre        	: req.body.nombre        	,
                    apellido    	: req.body.apellido    	,
                    telefono 	: req.body.telefono 	,
                    correo    	: req.body.correo   	,
                    tipo 	: req.body.tipo 	, 
                    unidad 	: req.body.unidad 	,
                    motivo 	: req.body.motivo	,
                    f1 	: req.body.f1 	,
                    f2 	: req.body.f2 	,
                    f3 	: req.body.f3 	
                }
                    , function(err, todo) {
                    if (err){   res.status(500).send(err.message)    }
                
                    res.json(todo);

                
                    

                });
      
}
}

}





