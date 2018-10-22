
var Dcatalogo = require('../models/dcatalogo');
var Bitacora = require('../models/bitacora');

exports.getDcatalogo = function(req, res, next){
    if(req.params.id2)
    {   Dcatalogo.find({idcatalogo:req.params.id,_id:req.params.id2},function(err, todos) {
            if (err){ res.send(err); }
           
            if(todos.length>0)   {    res.json(todos);   }
            else
            {  res.status(500).send('NO EXISTE REGISTRO');      }
            
        });
    }
    else
    { Dcatalogo.find({idcatalogo:req.params.id},function(err, todos) {
           if (err){  res.send(err);  }
            res.json(todos);
        });
    }
}
exports.deleteDcatalogo = function(req, res, next){
   
    Bitacora.create({email: req.params.userID ,permiso:'Elimina',accion:'Elimina Dcatalogo '});
    Dcatalogo.findByIdAndRemove({ _id: req.params.id  }, function(err, todo) {
        res.json(todo);
    });
}


exports.creaDcatalogo2s = function(req, res, next){
   
 

    if(req.params.id!=='crea')
    {  Bitacora.create(req.body.bitacora);
        Dcatalogo.findById({ _id: req.params.id}, function (err, todo)  {
            if (err) {  res.send(err);  }
            else
            {  
                
                todo.idcatalogo        	=	req.body.idcatalogo        	||	todo.idcatalogo;        	;
                todo.nombre        	=	req.body.nombre        	||	todo.nombre        	;
                todo.fecha        	=	req.body.fecha        	||	todo.fecha        	;
                todo.foto        	=	req.body.foto        	||	todo.foto        	;
                todo.estado    	=	req.body.estado    	||	todo.estado    	;

                todo.save(function (err, todo){
                    if (err)     {  res.status(500).send(err.message)   }
                    res.json(todo);
                });
            }
        });
    
    }
    else{
        Bitacora.create(req.body.bitacora);
    Dcatalogo.create({  idcatalogo      	: req.body.idcatalogo     	,
        nombre        	: req.body.nombre        	,
        fecha        	: req.body.fecha        	,
        foto        	: req.body.foto        	,
        estado 	: req.body.estado 	
       }
        , function(err, todo) {
        if (err){ 
          
            res.status(500).send(err.message)    }
    
        res.json(todo);

     
        

    });
}


}





