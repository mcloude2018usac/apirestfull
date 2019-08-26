
var Tipounidad3 = require('../../models/calusac/tipounidad3');
var Bitacora = require('../../models/bitacora');

exports.getTipounidad3 = function(req, res, next){
       if(req.params.id)
        {  
           
                Tipounidad3.find({_id:req.params.id}
                    ,null, {sort: {codigo: 1}},function(err, todos) {
                    if (err){ res.send(err); }
                   
                    if(todos.length>0)   {    res.json(todos);   }
                    else
                    {  res.status(500).send('NO EXISTE REGISTRO');      }
                    
                });
             
           
        }
        else
        { Tipounidad3.find({}, null, {sort: {codigo: 1}},function(err, todos) {
               if (err){  res.send(err);  }
                res.json(todos);
            });
        }

 
}
exports.deleteTipounidad3 = function(req, res, next){
   
    Bitacora.create({email: req.params.userID ,permiso:'Elimina',accion:'Elimina Tipounidad3 '});
    Tipounidad3.findByIdAndRemove({ _id: req.params.recordID  }, function(err, todo) {
        res.json(todo);
    });
}


exports.creaTipounidad32s = function(req, res, next){
   
 
    Bitacora.create(req.body.bitacora);
if(req.params.recordID!=='crea')
{  
    Tipounidad3.findById({ _id: req.params.recordID }, function (err, todo)  {
        if (err) {  res.send(err);  }
        else
        {  
            todo.nombre        	=	req.body.nombre        	||	todo.nombre        	;
            todo.codigo        	=	req.body.codigo        	||	todo.codigo        	;
            todo.iddepartamento        	=	{id:req.body.iddepartamento.id,nombre:req.body.iddepartamento.nombre   }   	;
            todo.abreviatura        	=	req.body.abreviatura        	||	todo.abreviatura    	;
            todo.estado        	=	req.body.estado        	||	todo.estado        	;
            todo.msg        	=	req.body.msg        	||	todo.msg        	;
            todo.usuarioup=req.body.bitacora.email;
            
          
            todo.save(function (err, todo){
                if (err)     {  res.status(500).send(err.message)   }
                res.json(todo);
            });
        }
    });

}
else{

    Tipounidad3.find({codigo:req.body.codigo  },function(err, todos) {
        if (err){ res.send(err); }
      
        if(todos.length>0)   {    res.status(500).send('Codigo ya existe'); }
        else
        {   

            Tipounidad3.create({
                nombre        	: req.body.nombre        	,
                codigo        	: req.body.codigo   ,
                iddepartamento        	: req.body.iddepartamento   ,
                abreviatura        	: req.body.abreviatura     ,
                estado        	: req.body.estado     ,
                msg        	: req.body.msg     ,
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



