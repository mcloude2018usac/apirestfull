
var Participa33 = require('../models/participa33');
var Bitacora = require('../models/bitacora');

exports.getParticipa33 = function(req, res, next){
    if(req.params.id2)
    {  
        if(req.params.id2=='video')
        { 
            Participa33.find({_id:req.params.id},function(err, todos) {
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
                Participa33.find({_id:req.params.id},function(err, todos) {
                    if (err){ res.send(err); }
                    if(todos.length>0)   {    res.json([{f1:todos[0].f1,f2:todos[0].f2}]);   }
                    else{
                        res.json([{f1:'',f2:''}]);
                    }
                });
            }
            else{

                if(req.params.id2=='denuncia')
                { 
                    Participa33.find({_id:req.params.id}).populate('tipo').exec(function(err, todos) {
                        if (err){ res.send(err); }
                    res.json(todos);
                          
                    });
                }

            }
        }
    }   
    else
    { 
        Participa33.find({_id:req.params.id},function(err, todos) {
            if (err){ res.send(err); }
            res.json(todos)
        });
    }
}
exports.deleteParticipa33 = function(req, res, next){
    Bitacora.create({email: req.params.userID ,permiso:'Elimina',accion:'Elimina Participa33 '});
    Participa33.findByIdAndRemove({ _id: req.params.id  }, function(err, todo) {
        res.json(todo);
    });
}


exports.creaParticipa332s = function(req, res, next){
  if(req.params.id=='actualiza')
{ 
}
else{
    if(req.params.id!=='crea')
    { 
         Bitacora.create(req.body.bitacora);
        Participa33.findById({ _id: req.params.id}, function (err, todo)  {
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
                  
                Participa33.create({  
                    iddenuncia       	: req.body.iddenuncia       	,
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
                    estado:'Realizando seguimiento',
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





