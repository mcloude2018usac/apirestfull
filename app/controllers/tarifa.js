
var Tarifa = require('../models/tarifa');
var Bitacora = require('../models/bitacora');

exports.getTarifa = function(req, res, next){
    if(req.params.id)
    {   Tarifa.find({_id:req.params.id},function(err, todos) {
            if (err){ res.send(err); }
        
            if(todos.length>0)   {    res.json(todos);   }
            else
            {  res.status(500).send('NO EXISTE REGISTRO');      }
            
        });
    }
    else
    { Tarifa.find(function(err, todos) {
           if (err){  res.send(err);  }
            res.json(todos);
        });
    }
}
exports.deleteTarifa = function(req, res, next){
   
    Bitacora.create({email: req.params.userID ,permiso:'Elimina',accion:'Elimina Modulo '});
    Tarifa.findByIdAndRemove({ _id: req.params.recordID  }, function(err, todo) {
        res.json(todo);
    });
}


exports.creaTarifa2s = function(req, res, next){
   
 
    Bitacora.create(req.body.bitacora);
if(req.params.recordID!=='crea')
{ 
    Tarifa.findById({ _id: req.params.recordID }, function (err, todo)  {
        if (err) {  res.send(err);  }
        else
        {   
            todo.nombre        	=	req.body.nombre        	||	todo.nombre        	;
                  	
            todo.estado    	=	req.body.estado    	||	todo.estado    	;
            
            todo.save(function (err, todo){
                if (err)     {  res.status(500).send(err.message)   }
                res.json(todo);
            });
        }
    });

}
else{

    Tarifa.find({nombre        	: req.body.nombre },function(err, todos) {
        if (err){ res.send(err); }

        if(todos.length>0)   {    res.status(500).send('Ya existe una tarifa con este nombre'); }
        else
        {   

            Tarifa.create({
                nombre        	: req.body.nombre        	,
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



