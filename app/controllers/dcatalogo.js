
var Dcatalogo = require('../models/dcatalogo');

var catalogo = require('../models/catalogo');
var Bitacora = require('../models/bitacora');

exports.getDcatalogo = function(req, res, next){
    if(req.params.id4)
    {
console.log({tipo:req.params.id,idempresa:req.params.id2,nombre:req.params.id3})
   
        catalogo.find({tipo:req.params.id,idempresa:req.params.id2,nombre:req.params.id3},function(err, todos) {
            if (err){ res.send(err); }
           console.log(todos)
            if(todos.length>0)   {   
                
               // res.json(todos); 

                Dcatalogo.find({idcatalogo:todos[0]._id},function(err, todos) {
                    if (err){  res.send(err);  }
                    console.log(todos)
                     res.json(todos);
                 });
            
            
            }
            else
            { res.json(todos);      }
            
        });


    }
    else
    {
    if(req.params.id3)
    { 

        catalogo.find({tipo:req.params.id,idempresa:req.params.id2,estado:'Activo'},function(err, todos) {
            if (err){ res.send(err); }
           
            if(todos.length>0)   {   
                
               // res.json(todos); 

                Dcatalogo.find({idcatalogo:todos[0]._id,idempresa:req.params.id2},function(err, todos) {
                    if (err){  res.send(err);  }
                     res.json(todos);
                 });
            
            
            }
            else
            { res.json(todos);      }
            
        });

    }
    else{
        

     Dcatalogo.find({idcatalogo:req.params.id},function(err, todos) {
               if (err){  res.send(err);  }
                res.json(todos);
            });
        
    }}
  
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
    Dcatalogo.create({
        
        idcatalogo      	: req.body.idcatalogo     	,
        nombre        	: req.body.nombre        	,
        fecha        	: req.body.fecha        	,
        foto        	: req.body.foto        	,
        estado 	: req.body.estado,
        usuarionew:req.body.bitacora.email 	
        
       }
        , function(err, todo) {
        if (err){ 
          
            res.status(500).send(err.message)    }
    
        res.json(todo);

     
        

    });
}


}





