var Tiposuscriptor = require('../models/tipo_suscriptor');
var Bitacora = require('../models/bitacora');

exports.getTiposuscriptor = function(req, res, next){
    if(req.params.id3)
    {
      
        if(req.params.id3=='solo')
        {

            Tiposuscriptor.find({idempresa:req.params.id2 , _id:req.params.id},function(err, todos) {
                if (err){ res.send(err); }
               
                   res.json(todos);  
                
            });
        }
    


    }
    else{
    if(req.params.id2)
    { 
        if(req.params.id2=='todos')
        {

            Tiposuscriptor.find({idempresa:req.params.id},function(err, todos) {
                if (err){ res.send(err); }
               
                   res.json(todos);  
                
            });
        }
        else
        {
            Tiposuscriptor.find({tipo:req.params.id2},function(err, todos) {
                if (err){ res.send(err); }
               
                if(todos.length>0)   {    res.json(todos);   }
                else
                {  res.status(500).send('NO EXISTE REGISTRO');      }
                
            });
        }
    }
    else
    {
                    if(req.params.id)
                    {  
                    
                            Tiposuscriptor.find({_id:req.params.id},function(err, todos) {
                                if (err){ res.send(err); }
                            
                                if(todos.length>0)   {    res.json(todos);   }
                                else
                                {  res.status(500).send('NO EXISTE REGISTRO');      }
                                
                            });
                        
                    
                    }
                    else
                    { Tiposuscriptor.find(function(err, todos) {
                        if (err){  res.send(err);  }
                            res.json(todos);
                        });
                    }
    }

    }
 
}
exports.deleteTiposuscriptor = function(req, res, next){
   
    Bitacora.create({email: req.params.userID ,permiso:'Elimina',accion:'Elimina tipo suscriptor '});
    Tiposuscriptor.findByIdAndRemove({ _id: req.params.recordID  }, function(err, todo) {
        res.json(todo);
    });
}


exports.creaTiposuscriptor2s = function(req, res, next){
   
 
    Bitacora.create(req.body.bitacora);
if(req.params.recordID!=='crea')
{ 
    Tiposuscriptor.findById({ _id: req.params.recordID }, function (err, todo)  {
        if (err) {  res.send(err);  }
        else
        {  
            todo.nombre        	=	req.body.nombre        	||	todo.nombre        	;
            todo.cobroparqueos        	=	req.body.cobroparqueos        	||	todo.cobroparqueos        	;
            todo.usuarioup=req.body.bitacora.email;

            todo.save(function (err, todo){
                if (err)     {  res.status(500).send(err.message)   }
                res.json(todo);
            });
        }
    });

}
else{

    Tiposuscriptor.find({nombre        	: req.body.nombre,tipo        	: req.body.tipo  },function(err, todos) {
        if (err){ res.send(err); }
      
        if(todos.length>0)   {    res.status(500).send('Ya existe un catalogo con este nombre'); }
        else
        {   

            Tiposuscriptor.create({ 
                idempresa       	: req.body.idempresa       	,
                nombre        	: req.body.nombre        	,
                cobroparqueos        	: req.body.cobroparqueos        	,
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



