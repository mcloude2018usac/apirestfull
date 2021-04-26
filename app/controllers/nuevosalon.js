
var Nuevosalon = require('../models/nuevosalon');
var Bitacora = require('../models/bitacora');

exports.getNuevosalon = function(req, res, next){
    if(req.params.id)
    {   Nuevosalon.find({_id:req.params.id},function(err, todos) {
            if (err){ res.send(err); }
        
            if(todos.length>0)   {    res.json(todos);   }
            else
            {  res.status(500).send('NO EXISTE REGISTRO');      }
            
        });
    }
    else
    { Nuevosalon.find(function(err, todos) {
           if (err){  res.send(err);  }
            res.json(todos);
        });
    }
}
exports.deleteNuevosalon = function(req, res, next){
   
    Bitacora.create({email: req.params.userID ,permiso:'Elimina',accion:'Elimina Modulo '});
    Nuevosalon.findByIdAndRemove({ _id: req.params.recordID  }, function(err, todo) {
        res.json(todo);
    });
}


exports.creaNuevosalon2s = function(req, res, next){
   
 
    Bitacora.create(req.body.bitacora);
if(req.params.recordID!=='crea')
{ 
    Nuevosalon.findById({ _id: req.params.recordID }, function (err, todo)  {
        if (err) {  res.send(err);  }
        else
        {   
            todo.nombre        	=	req.body.nombre        	||	todo.nombre        	;
                  	
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


            Nuevosalon.create({
                nombre        	: req.body.nombre        	,
                estado 	: req.body.estado 	,
                correo 	: req.body.correo 	,
                usuarionew:req.body.bitacora.email
              }
                , function(err, todo) {
                if (err){ 
                
                    res.status(500).send(err.message)    }
            
                res.json(todo);
        
             
                
        
            });

            
          
   
 
}

}



