
var Denunciaunidad = require('../models/denunciaunidad');
var Bitacora = require('../models/bitacora');

exports.getDenunciaunidad = function(req, res, next){
       if(req.params.id)
        {  
           
                Denunciaunidad.find({_id:req.params.id}
                    ,null, {sort: {unidad: 1}},function(err, todos) {
                    if (err){ res.send(err); }
                   
                    if(todos.length>0)   {    res.json(todos);   }
                    else
                    {  res.status(500).send('NO EXISTE REGISTRO');      }
                    
                });
             
           
        }
        else
        { Denunciaunidad.find({},function(err, todos) {
               if (err){  res.send(err);  }
                res.json(todos);
            });
        }

 
}
exports.deleteDenunciaunidad = function(req, res, next){
   
    Bitacora.create({email: req.params.userID ,permiso:'Elimina',accion:'Elimina Denunciaunidad '});
    Denunciaunidad.findByIdAndRemove({ _id: req.params.recordID  }, function(err, todo) {
        res.json(todo);
    });
}


exports.creaDenunciaunidad2s = function(req, res, next){
   
 
    Bitacora.create(req.body.bitacora);
if(req.params.recordID!=='crea')
{ 
    Denunciaunidad.findById({ _id: req.params.recordID }, function (err, todo)  {
        if (err) {  res.send(err);  }
        else
        {  
            todo.categoria        	=	req.body.categoria        	||	todo.categoria        	;
            todo.unidad        	=	req.body.unidad        	||	todo.unidad        	;
            todo.usuarioup=req.body.bitacora.email;
            
            
            todo.save(function (err, todo){
                if (err)     {  res.status(500).send(err.message)   }
                res.json(todo);
            });
        }
    });

}
else{

    Denunciaunidad.find({unidad:req.body.unidad  },function(err, todos) {
        if (err){ res.send(err); }
      
        if(todos.length>0)   {    res.status(500).send('Codigo ya existe'); }
        else
        {   

            Denunciaunidad.create({
                categoria        	: req.body.categoria        	,
                unidad        	: req.body.unidad       ,
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



