
var Moduloxx = require('../models/moduloxx');
var Bitacora = require('../models/bitacora');

exports.getModuloxx = function(req, res, next){
    if(req.params.id)
    {   Moduloxx.find({_id:req.params.id},function(err, todos) {
            if (err){ res.send(err); }
           
            if(todos.length>0)   {    res.json(todos);   }
            else
            {  res.status(500).send('NO EXISTE REGISTRO');      }
            
        });
    }
    else
    { Moduloxx.find().sort([['index', -1]]).exec(function(err, todos) {
           if (err){  res.send(err);  }
            res.json(todos);
        });
    }
}
exports.deleteModuloxx = function(req, res, next){
   
    Bitacora.create({email: req.params.userID ,permiso:'Elimina',accion:'Elimina Modulo '});
    Moduloxx.findByIdAndRemove({ _id: req.params.recordID  }, function(err, todo) {
        res.json(todo);
    });
}


exports.creaModuloxx2s = function(req, res, next){
   
 
    Bitacora.create(req.body.bitacora);
if(req.params.recordID!=='crea')
{ 
    Moduloxx.findById({ _id: req.params.recordID }, function (err, todo)  {
        if (err) {  res.send(err);  }
        else
        {   todo.grupo        	=	req.body.grupo        	||	todo.grupo        	;
            todo.nombre        	=	req.body.nombre        	||	todo.nombre        	;
            todo.titulo        	=	req.body.titulo        	||	todo.titulo        	;
            todo.componente        	=	req.body.componente        	||	todo.componente        	;
            todo.tabcomponente        	=	req.body.tabcomponente        	||	todo.tabcomponente ;
            todo.index        	=	req.body.index       	||	todo.index        	;       	
            todo.icono        	=	req.body.icono       	||	todo.icono        	;       	
            todo.nivel        	=	req.body.nivel       	||	todo.nivel        	;       	
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

    Moduloxx.find({nombre        	: req.body.nombre },function(err, todos) {
        if (err){ res.send(err); }
       
        if(todos.length>0)   {    res.status(500).send('Ya existe un modulo con este nombre'); }
        else
        {   

            Moduloxx.create({ grupo        	: req.body.grupo        	,
                nombre        	: req.body.nombre        	,
                titulo       	: req.body.titulo       	,
                componente       	: req.body.componente       	,
                tabcomponente       	: req.body.tabcomponente       	,
                index       	: req.body.index       	,
                 icono      	: req.body.icono       	,
                nivel      	: req.body.nivel       	,
                usuarionew:req.body.bitacora.email,
                estado 	: req.body.estado 	
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



