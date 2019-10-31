
var Conferencia = require('../models/conferencia');
var Bitacora = require('../models/bitacora');

exports.getConferencia = function(req, res, next){
    if(req.params.id3)
    {   Conferencia.find({idevento:req.params.id,_id:req.params.id2,idempresa :req.params.id3},function(err, todos) {
            if (err){ res.send(err); }
           
            if(todos.length>0)   {    res.json(todos);   }
            else
            {  res.status(500).send('NO EXISTE REGISTRO');      }
            
        });
    }
    else
    { Conferencia.find({idevento:req.params.id,idempresa :req.params.id2},function(err, todos) {
           if (err){  res.send(err);  }
            res.json(todos);
        });
    }
}
exports.deleteConferencia = function(req, res, next){
   
    Bitacora.create({idempresa:req.params.idempresa,idafiliado:req.params.idafiliado,email: req.params.userID ,permiso:'Elimina',accion:'Elimina Conferencia '});
    Conferencia.findByIdAndRemove({ _id: req.params.id  }, function(err, todo) {
        res.json(todo);
    });
}


exports.creaConferencia2s = function(req, res, next){
   
 

    if(req.params.id!=='crea')
    {  Bitacora.create(req.body.bitacora);
        Conferencia.findById({ _id: req.params.id}, function (err, todo)  {
            if (err) {  res.send(err);  }
            else
            {  
                
                todo.idevento        	=	req.body.idevento        	||	todo.idevento;        	;
                todo.nombre        	=	req.body.nombre        	||	todo.nombre        	;
                todo.conferencista 	=	req.body.conferencista	||	todo.conferencista 	;
                todo.fechaini 	=	req.body.fechaini	||	todo.fechaini 	;
                todo.fechafin 	=	req.body.fechafin	||	todo.fechafin 	;
                todo.nomax    	=	req.body.nomax    	||	todo.nomax    	;
            
                todo.costo 	=	req.body.costo 	||	todo.costo 	;
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
    Conferencia.create({ 
        idempresa        	: req.body.idempresa        	,
        idevento       	: req.body.idevento       	,
        nombre        	: req.body.nombre        	,
        conferencista    	: req.body.conferencista    	,
        fechaini 	: req.body.fechaini 	,
     
        fechafin    	: req.body.fechafin    	,
        nomax 	: req.body.nomax 	,
        costo    	: req.body.costo   	,
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





