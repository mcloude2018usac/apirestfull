var Compratoken = require('../models/compratoken');
var Bitacora = require('../models/bitacora');

exports.getCompratoken = function(req, res, next){
    Compratoken.find({_id:req.params.id,estado:0},function(err, todos) {
        if (err){ res.send(err); }
       
        if(todos.length>0)   {    res.json(todos);   }
        else
        {  res.status(500).send('NO EXISTE REGISTRO');      }
        
    });
}
exports.deleteCompratoken = function(req, res, next){
   
    Bitacora.create({idempresa:req.params.idempresa,idafiliado:req.params.idafiliado,email: req.params.userID ,permiso:'Elimina',accion:'Elimina Compratoken '});
    Compratoken.findByIdAndRemove({ _id: req.params.recordID  }, function(err, todo) {
        res.json(todo);
    });
}


exports.creaCompratoken2s = function(req, res, next){
   
 
    Bitacora.create(req.body.bitacora);
if(req.params.recordID!=='crea')
{ 
    Compratoken.findById({ _id: req.params.recordID }, function (err, todo)  {
        if (err) {  res.send(err);  }
        else
        { 
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

    Compratoken.find({},function(err, todos) {
        if (err){ res.send(err); }
 

            Compratoken.create({ 
                idempresa        	: req.body.idempresa       	,
                trama        	: req.body.trama        	,
             
                usuarionew:req.body.bitacora.email,
                estado 	: req.body.estado 	
              }
                , function(err, todo) {
                if (err){ 
                    console.log(err);
                    res.status(500).send(err.message)  ;  }
            
                res.json(todo);
        
             
                
        
            });

            
             
        
    });
   
 
}

}



