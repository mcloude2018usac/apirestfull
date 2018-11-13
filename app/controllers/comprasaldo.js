var Comprasaldo = require('../models/comprasaldo');
var Bitacora = require('../models/bitacora');

exports.getComprasaldo = function(req, res, next){
    if(req.params.id2)
    { 
        Comprasaldo.find({tipo:req.params.id2},function(err, todos) {
            if (err){ res.send(err); }
           
            if(todos.length>0)   {    res.json(todos);   }
            else
            {  res.status(500).send('NO EXISTE REGISTRO');      }
            
        });
  
    }
    else
    {
        if(req.params.id)
        {  
           
                Comprasaldo.find({_id:req.params.id},function(err, todos) {
                    if (err){ res.send(err); }
                   
                    if(todos.length>0)   {    res.json(todos);   }
                    else
                    {  res.status(500).send('NO EXISTE REGISTRO');      }
                    
                });
             
           
        }
        else
        { Comprasaldo.find(function(err, todos) {
               if (err){  res.send(err);  }
                res.json(todos);
            });
        }

    }
 
}
exports.deleteComprasaldo = function(req, res, next){
   
    Bitacora.create({email: req.params.userID ,permiso:'Elimina',accion:'Elimina compra saldo'});
    Comprasaldo.findByIdAndRemove({ _id: req.params.recordID  }, function(err, todo) {
        res.json(todo);
    });
}


exports.creaComprasaldo2s = function(req, res, next){
   
 
    Bitacora.create(req.body.bitacora);
if(req.params.recordID!=='crea')
{ 
    Comprasaldo.findById({ _id: req.params.recordID }, function (err, todo)  {
        if (err) {  res.send(err);  }
        else
        {           todo.idsuscriptor        	={id:req.body.idsuscriptor.id,nombre:req.body.idsuscriptor.nombre   }   	;
              todo.monto        	=	req.body.monto        	||	todo.monto        	;
            todo.nombre        	=	req.body.nombre        	||	todo.nombre        	;
            todo.url        	=	req.body.url        	||	todo.url        	;
            todo.estado    	=	req.body.estado    	||	todo.estado    	;
            todo.usuarioup=req.body.bitacora.email;

            todo.save(function (err, todo){
                if (err)     {  res.status(500).send(err.message)   }
                res.json(todo);
            });
        }
    });

}
else{

    Comprasaldo.find({nombre        	: req.body.nombre,tipo        	: req.body.tipo  },function(err, todos) {
        if (err){ res.send(err); }
      
        if(todos.length>0)   {    res.status(500).send('Ya existe un catalogo con este nombre'); }
        else
        {   

            Comprasaldo.create({ idsuscriptor        	: req.body.idsuscriptor        	,
                monto        	: req.body.monto        	,
                nombre        	: req.body.nombre        	,
                url        	: req.body.url        	,
                usuarionew:req.body.bitacora.email,
                estado 	: req.body.estado 	
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



