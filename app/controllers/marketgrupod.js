
var Marketgrupod = require('../models/marketgrupod');
var Bitacora = require('../models/bitacora');

exports.getMarketgrupod = function(req, res, next){
       if(req.params.id3)
        {  
           
            if(req.params.id3=='todos')
            {
                Marketgrupod.find({idempresa:req.params.id,idgrupo:req.params.id2}
                   ,function(err, todos) {
                    if (err){ res.send(err); }
                   
                      res.json(todos);   
                      
                    
                });

            }
            
              
             
           
        }
        else
        { Marketgrupod.find({},function(err, todos) {
               if (err){  res.send(err);  }
                res.json(todos);
            });
        }

 
}
exports.deleteMarketgrupod = function(req, res, next){
   
    Bitacora.create({email: req.params.userID ,permiso:'Elimina',accion:'Elimina Marketgrupod '});
    Marketgrupod.findByIdAndRemove({ _id: req.params.recordID  }, function(err, todo) {
        res.json(todo);
    });
}


exports.creaMarketgrupod2s = function(req, res, next){
   
 
    Bitacora.create(req.body.bitacora);
if(req.params.recordID!=='crea')
{ 
    Marketgrupod.findById({ _id: req.params.recordID }, function (err, todo)  {
        if (err) {  res.send(err);  }
        else
        {  todo.idgrupo        	=	req.body.idgrupo        	||	todo.idgrupo        	;
            todo.nombre        	=	req.body.nombre        	||	todo.nombre        	;
            todo.correo        	=	req.body.correo        	||	todo.correo        	;
            todo.estado        	=	req.body.estado        	||	todo.estado        	;
            todo.usuarioup=req.body.bitacora.email;
            
            
            todo.save(function (err, todo){
                if (err)     {  res.status(500).send(err.message)   }
                res.json(todo);
            });
        }
    });

}
else{

    Marketgrupod.find({correo:req.body.correo  },function(err, todos) {
        if (err){ res.send(err); }
      
        if(todos.length>0)   {    res.status(500).send('Correo  ya existe'); }
        else
        {   

            Marketgrupod.create({
                idempresa        	: req.body.idempresa        	,
                idgrupo        	: req.body.idgrupo        	,
                nombre        	: req.body.nombre        	,
                correo        	: req.body.correo       ,
                estado        	: req.body.estado       ,
                usuarionew:req.body.bitacora.email, 
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



