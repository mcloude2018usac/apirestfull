
var Evento = require('../models/eventos');
var Bitacora = require('../models/bitacora');

exports.getEvento = function(req, res, next){
    if(req.params.id)
    { 
        if(req.params.id=='activo')
        {
            Evento.find({impresion:'Activo'},function(err, todos) {
                if (err){  res.send(err);  }
                 res.json(todos);
                
            });
        }
        else
        {

            if(req.params.id=='1' || req.params.id=='2')
        {
        }
        else
        {
            Evento.find({_id:req.params.id},function(err, todos) {
                if (err){ res.send(err); }
               
                if(todos.length>0)   {    res.json(todos);   }
                else
                {  res.status(500).send('NO EXISTE REGISTRO');      }
                
            });
        }

        }   
       
    }
    else
    { Evento.find(function(err, todos) {
           if (err){  res.send(err);  }
            res.json(todos);
        });
    }
}
exports.deleteEvento = function(req, res, next){
   
    Bitacora.create({email: req.params.userID ,permiso:'Elimina',accion:'Elimina evento '});
    Evento.findByIdAndRemove({ _id: req.params.recordID  }, function(err, todo) {
        res.json(todo);
    });
}


exports.creaEvento2s = function(req, res, next){
   
 
    Bitacora.create(req.body.bitacora);
if(req.params.recordID!=='crea')
{ 
    Evento.findById({ _id: req.params.recordID }, function (err, todo)  {
        if (err) {  res.send(err);  }
        else
        {   todo.nombre        	=	req.body.nombre        	||	todo.nombre        	;
            todo.fechaini 	=	req.body.fechaini	||	todo.fechaini 	;
             todo.fechafin 	=	req.body.fechafin	||	todo.fechafin 	;
            todo.foto    	=	req.body.foto    	||	todo.foto    	;
            todo.ubicacion   	=	req.body.ubicacion    	||	todo.ubicacion   	;
            todo.costo 	=	req.body.costo 	||	todo.costo 	;
            todo.impresion 	=	req.body.impresion 	||	todo.impresion 	;
            todo.nomax    	=	req.body.nomax    	||	todo.nomax    	;
            todo.fecha    	=	req.body.fecha    	||	todo.fecha    	;
            todo.usuarioup=req.body.bitacora.email;
            
            
            todo.save(function (err, todo){
                if (err)     {  res.status(500).send(err.message)   }
                res.json(todo);
            });
        }
    });

}
else{
   
    Evento.create({ nombre        	: req.body.nombre        	,
        fechaini 	: req.body.fechaini 	,
        fecha: req.body.fecha 	,
        fechafin    	: req.body.fechafin    	,
      
        foto    	: req.body.foto    	,
        ubicacion   	: req.body.ubicacion  	,
        costo    	: req.body.costo   	,
        impresion 	: req.body.impresion 	,
        nomax 	: req.body.nomax 	,
        usuarionew:req.body.bitacora.email,
        date 			: Date.now() }
        , function(err, todo) {
        if (err){ 
          
            res.status(500).send(err.message)    }
    
        res.json(todo);

     
        

    });
}

}



