
var Dcurso = require('../models/dcurso');
var Bitacora = require('../models/bitacora');

exports.getDcurso = function(req, res, next){
    if(req.params.id2)
    {   Dcurso.find({idcurso:req.params.id,_id:req.params.id2},function(err, todos) {
            if (err){ res.send(err); }
           
            if(todos.length>0)   {    res.json(todos);   }
            else
            {  res.status(500).send('NO EXISTE REGISTRO');      }
            
        });
    }
    else
    { Dcurso.find({idcurso:req.params.id},function(err, todos) {
           if (err){  res.send(err);  }
            res.json(todos);
        });
    }
}
exports.deleteDcurso = function(req, res, next){
   
    Bitacora.create({email: req.params.userID ,permiso:'Elimina',accion:'Elimina detalle de curso '});
    Dcurso.findByIdAndRemove({ _id: req.params.id  }, function(err, todo) {
        res.json(todo);
    });
}


exports.creaDcurso2s = function(req, res, next){
   
 

    if(req.params.id!=='crea')
    {  Bitacora.create(req.body.bitacora);
        Dcurso.findById({ _id: req.params.id}, function (err, todo)  {
            if (err) {  res.send(err);  }
            else
            {  
                
                todo.idcurso        	=	req.body.idcurso        	||	todo.idcurso;        	
                todo.tipo        	=	req.body.tipo        	||	todo.tipo        	;
                todo.nombre        	=	req.body.nombre        	||	todo.nombre        	;
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
    Dcurso.create({  idcurso       	: req.body.idcurso       	,
        tipo        	: req.body.tipo        	,
        nombre        	: req.body.nombre        	,
        estado 	: req.body.estado 	,
        usuarionew:req.body.bitacora.email
       }
        , function(err, todo) {
        if (err){ 
          
            res.status(500).send(err.message)    }
    
        res.json(todo);

     
        

    });
}


}





