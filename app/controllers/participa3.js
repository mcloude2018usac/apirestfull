
var Participa3 = require('../models/participa3');
var Bitacora = require('../models/bitacora');

exports.getParticipa3 = function(req, res, next){
    if(req.params.id2)
    {  
        if(req.params.id2=='video')
        { 

            Participa3.find({_id:req.params.id},function(err, todos) {
                if (err){ res.send(err); }
               
                if(todos.length>0)   {    res.json([{f3:todos[0].f3}]);   }
                else{

                    res.json([{f3:''}]);
                }
                
            });

            
        }
        else{
   
            if(req.params.id2=='fotos')
            { 
    
                Participa3.find({_id:req.params.id},function(err, todos) {
                    if (err){ res.send(err); }
                   
                    if(todos.length>0)   {    res.json([{f1:todos[0].f1,f2:todos[0].f2}]);   }
                    else{
    
                        res.json([{f1:'',f2:''}]);
                    }
                    
                });
    
                
            }
        }
        
        
    }
    else
    { 
       
        var aa=(req.params.id).split(',')

        Participa3.find({tipo:{$in:aa}}).populate('tipo').select({ "cui": 1,"nombre": 1,"tipo": 1,"correo": 1,"motivo": 1,
        "estado": 1,"notamedio": 1,"xpos": 1, "ypos": 1,        "_id": 1}).exec(function(err, todos) {
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
                todo.estado       	=	req.body.estado        	||	todo.estado        	;         
               todo.notamedio        	=	req.body.notamedio        	||	todo.notamedio        	;
               todo.notafin        	=	req.body.notafin        	||	todo.notafin        	;
               todo.tipo        	=	req.body.tipo        	||	todo.tipo        	;

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
                    f3 	: req.body.f3 	,
                    estado:'Solicitando requerimiento',
                    notamedio:'',
                    notafin:''     ,
                    xpos 	: req.body.xpos 	,
                    ypos 	: req.body.ypos	      

                }
                    , function(err, todo) {
                    if (err){   res.status(500).send(err.message)  
                    console.log(err.message)  }
                
                    res.json(todo);

                
                    

                });
      
}
}

}





