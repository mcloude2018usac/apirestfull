
var Dtarifa = require('../models/dtarifa');
var Bitacora = require('../models/bitacora');

exports.getDtarifa = function(req, res, next){
    if(req.params.id2)
    {   Dtarifa.find({idtarifa:req.params.id,_id:req.params.id2},function(err, todos) {
            if (err){ res.send(err); }
           
            if(todos.length>0)   {    res.json(todos);   }
            else
            {  res.status(500).send('NO EXISTE REGISTRO');      }
            
        });
    }
    else
    { Dtarifa.find({idtarifa:req.params.id},function(err, todos) {
           if (err){  res.send(err);  }
            res.json(todos);
        });
    }
}
exports.deleteDtarifa = function(req, res, next){
   
    Bitacora.create({email: req.params.userID ,permiso:'Elimina',accion:'Elimina Detalle tarifa '});
    Dtarifa.findByIdAndRemove({ _id: req.params.id  }, function(err, todo) {
        res.json(todo);
    });
}


exports.creaDtarifa2s = function(req, res, next){
   
 

    if(req.params.id!=='crea')
    {  Bitacora.create(req.body.bitacora);
        
        Dtarifa.findById({ _id: req.params.id}, function (err, todo)  {
            if (err) {  res.send(err);  }
            else
            {  
                
                todo.idtarifa        	=	req.body.idtarifa        	||	todo.idtarifa;        	;
                todo.nombre        	=	req.body.nombre        	||	todo.nombre        	;
                todo.horaini 	=	req.body.horaini	||	todo.horaini 	;
                todo.horafin 	=	req.body.horafin	||	todo.horafin 	;
                  todo.monto 	=	req.body.monto 	||	todo.monto 	;
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

        Dtarifa.find({nombre:req.body.nombre,horaini:req.body.horaini,horafin:req.body.horafin
        },function(err, todos) {
            if (err){ res.send(err); }
          
            if(todos.length>0)   {    res.status(500).send('Ya existe una tarifa en ese horario'); }
            else
            {
                Bitacora.create(req.body.bitacora);
                Dtarifa.create({  idtarifa       	: req.body.idtarifa       	,
                    nombre        	: req.body.nombre        	,
                    horaini 	: req.body.horaini 	,
                    horafin    	: req.body.horafin    	,
                    monto    	: req.body.monto   	,
                    estado 	: req.body.estado 	,
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





