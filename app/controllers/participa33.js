
var Participa33 = require('../models/participa33');
var Bitacora = require('../models/bitacora');
var Participa3 = require('../models/participa3');

exports.getParticipa33 = function(req, res, next){
    if(req.params.id3)
    {  
        if(req.params.id3=='todos')
        {
            Participa33.find({idusuario:req.params.id,estado:req.params.id2},function(err, todos) {
                if (err){ res.send(err); }
                res.json(todos)
            });
        }
        

    }
    else{
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
                else{

                    if(req.params.id2=='seguir')
                    { 
                       
                        Participa33.find({iddenuncia:req.params.id}).populate('idusuario').exec(function(err, todos) {
                            if (err){ res.send(err); }
                           
                        res.json(todos);
                              
                        });
                    }

                }

            }
        }
    }   
    else
    { 
        Participa33.find({idusuario:req.params.id},function(err, todos) {
            if (err){ res.send(err); }
            res.json(todos)
        });
    }}
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
            {   todo.motivo       	=	req.body.motivo        	||	todo.motivo        	;      
                todo.estado       	=	req.body.estado        	||	todo.estado        	;         
                todo.f1        	=	req.body.f1       	||	todo.f1        	;
                todo.f2        	=	req.body.f2       	||	todo.f2        	;
                todo.f3        	=	req.body.f3       	||	todo.f3        	;
               todo.xpos        	=	req.body.xpos       	||	todo.xpos       	;
               todo.ypos        	=	req.body.ypos       	||	todo.ypos       	;

               todo.save(function (err, todo){
                    if (err)     {  res.status(500).send(err.message)   }

                    Participa3.findById({ _id: req.body.iddenuncia   }, function (err, todo2)  {
                        if (err) {  res.send(err);  }
                        else
                        {  
                            todo2.estado       	=	req.body.estado      	;         
                         
            
                           todo2.save(function (err, todo2){
                                if (err)     {  res.status(500).send(err.message)   }
                                res.json(todo2);
                            });
                        }
                    });


                  
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
                    estado:'Asignado',
                    notamedio:'',
                    notafin:''     ,
                    xpos 	: req.body.xpos 	,
                    ypos 	: req.body.ypos	     , 
                    idusuario 	: req.body.idusuario,	   
                    motivo2 	: req.body.motivo2
                }
                    , function(err, todo) {
                    if (err){   res.status(500).send(err.message)  
                 }

                    Participa3.findById({ _id: req.body.iddenuncia   }, function (err, todo2)  {
                        if (err) {  res.send(err);  }
                        else
                        {  
                            todo2.estado       	=	'Asignado'       	;         
                            todo2.idusuario =req.body.idusuario;
            
                           todo2.save(function (err, todo2){
                                if (err)     {  res.status(500).send(err.message)   }
                                res.json(todo2);
                            });
                        }
                    });


                
                   

                
                    

                });
      
}
}

}





