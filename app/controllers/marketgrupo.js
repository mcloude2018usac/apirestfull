
var Marketgrupo = require('../models/marketgrupo');
var Bitacora = require('../models/bitacora');

exports.getMarketgrupo = function(req, res, next){
       if(req.params.id2)
        {  

            if(req.params.id2=='todos')
            {
                Marketgrupo.find({idempresa:req.params.id}
                    ,null, {sort: {codigo: 1}},function(err, todos) {
                    if (err){ res.send(err); }
                   
                      res.json(todos);   
                      
                    
                });

            }
           
        
             
           
        }
        else
        { Marketgrupo.find({},function(err, todos) {
               if (err){  res.send(err);  }
                res.json(todos);
            });
        }

 
}
exports.deleteMarketgrupo = function(req, res, next){
   
    Bitacora.create({email: req.params.userID ,permiso:'Elimina',accion:'Elimina Marketgrupo '});
    Marketgrupo.findByIdAndRemove({ _id: req.params.recordID  }, function(err, todo) {
        res.json(todo);
    });
}


exports.creaMarketgrupo2s = function(req, res, next){
   
 
    Bitacora.create(req.body.bitacora);
if(req.params.recordID!=='crea')
{ 
    Marketgrupo.findById({ _id: req.params.recordID }, function (err, todo)  {
        if (err) {  res.send(err);  }
        else
        {  
            todo.nombre        	=	req.body.nombre        	||	todo.nombre        	;
            todo.codigo        	=	req.body.codigo        	||	todo.codigo        	;
            todo.usuarioup=req.body.bitacora.email;
            
            
            todo.save(function (err, todo){
                if (err)     {  res.status(500).send(err.message)   }
                res.json(todo);
            });
        }
    });

}
else{

    Marketgrupo.find({codigo:req.body.codigo  },function(err, todos) {
        if (err){ res.send(err); }
      
        if(todos.length>0)   {    res.status(500).send('Codigo ya existe'); }
        else
        {   

            Marketgrupo.create({
                idempresa        	: req.body.idempresa        	,
                nombre        	: req.body.nombre        	,
                codigo        	: req.body.codigo       ,
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



