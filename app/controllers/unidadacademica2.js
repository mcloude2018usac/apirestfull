
var Unidadacademica2 = require('../models/unidadacademica2');
var Bitacora = require('../models/bitacora');

exports.getUnidadacademica2 = function(req, res, next){
    if(req.params.id2)
    {   Unidadacademica2.find({idtipounidad:req.params.id,_id:req.params.id2}
        ,null, {sort: {codigo: 1}},function(err, todos) {
            if (err){ res.send(err); }
           
            if(todos.length>0)   {    res.json(todos);   }
            else
            {  res.status(500).send('NO EXISTE REGISTRO');      }
            
        });
    }
    else
    { Unidadacademica2.find({idtipounidad:req.params.id}
        ,null, {sort: {codigo: 1}},function(err, todos) {
           if (err){  res.send(err);  }
            res.json(todos);
        });
    }
}
exports.deleteUnidadacademica2 = function(req, res, next){
   
    Bitacora.create({email: req.params.userID ,permiso:'Elimina',accion:'Elimina Unidadacademica2 '});
    Unidadacademica2.findByIdAndRemove({ _id: req.params.id  }, function(err, todo) {
        res.json(todo);
    });
}


exports.creaUnidadacademica22s = function(req, res, next){
   
 

    if(req.params.id!=='crea')
    {  Bitacora.create(req.body.bitacora);
        Unidadacademica2.findById({ _id: req.params.id}, function (err, todo)  {
            if (err) {  res.send(err);  }
            else
            {  
                
                todo.idtipounidad        	=	req.body.idtipounidad        	||	todo.idtipounidad;        	;
                todo.nombre        	=	req.body.nombre        	||	todo.nombre        	;
                todo.codigo        	=	req.body.codigo        	||	todo.codigo        	;
                todo.usuarioup=req.body.bitacora.email;
               

                todo.save(function (err, todo){
                    if (err)     {  res.status(500).send(err.message)   }
                    res.json(todo);
                });
            }
        });
    
    }
    else{

        Unidadacademica2.find({ idtipounidad      	: req.body.idtipounidad  ,codigo:req.body.codigo  },function(err, todos) {
            if (err){ res.send(err); }
          
            if(todos.length>0)   {    res.status(500).send('Codigo ya existe'); }
            else
            {   

                
        Bitacora.create(req.body.bitacora);
            Unidadacademica2.create({  idtipounidad      	: req.body.idtipounidad     	,
                nombre        	: req.body.nombre        	,
                codigo        	: req.body.codigo        ,
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





