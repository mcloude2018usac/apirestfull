
var Perfil = require('../models/perfil');
var Bitacora = require('../models/bitacora');

exports.getPerfil = function(req, res, next){
    if(req.params.id3)
    { 
     
        if(req.params.id3=='unidad')
        { 
            Perfil.find({'unidad.id':req.params.id,idempresa:req.params.id2},function(err, todos) {
                if (err){  res.send(err);  }
                 res.json(todos);
             });
        }
        else{

            if(req.params.id3=='todos')
        { 
              
        Perfil.find({idempresa:req.params.id2}).populate('unidad.id')
        .exec(function(err, todos) {
           if (err){  res.send(err);  }
            res.json(todos);
        });
        }
        else
        {

            
            if(req.params.id2=='todos')
            { 
                Perfil.find({idempresa:req.params.id3}).sort({'_id': -1}).exec(function(err, todos) {
                    if (err){  res.send(err);  }
                     res.json(todos);
                 });
            }
            else
            {
                Perfil.find({idempresa:req.params.id3,estado:req.params.id2}).sort({'_id': -1}).exec(function(err, todos) {
                    if (err){  res.send(err);  }
                     res.json(todos);
                 });
            }
        }


        }

      


    }
    else
    {
                if(req.params.id)
                {   Perfil.find({_id:req.params.id},function(err, todos) {
                        if (err){ res.send(err); }
                    
                        if(todos.length>0)   {    res.json(todos);   }
                        else
                        {  res.status(500).send('NO EXISTE REGISTRO');      }
                        
                    });
                }
   
    }
}
exports.deletePerfil = function(req, res, next){
   
    Bitacora.create({email: req.params.userID ,permiso:'Elimina',accion:'Elimina Perfil '});
    Perfil.findByIdAndRemove({ _id: req.params.recordID  }, function(err, todo) {
        res.json(todo);
    });
}


exports.creaPerfil2s = function(req, res, next){
   
 
    Bitacora.create(req.body.bitacora);
if(req.params.recordID!=='crea')
{ 
    Perfil.findById({ _id: req.params.recordID }, function (err, todo)  {
        if (err) {  res.send(err);  }
        else
        {   
            todo.idempresa       	=	req.body.idempresa        	||	todo.idempresa;   
            todo.nombre        	=	req.body.nombre        	||	todo.nombre        	;
            todo.estado    	=	req.body.estado    	||	todo.estado    	;
            todo.unidad=	{id:req.body.unidad.id,nombre:req.body.unidad.nombre   }   	;
            todo.usuarioup=req.body.bitacora.email;
            todo.save(function (err, todo){
                if (err)     {  res.status(500).send(err.message)   }
                res.json(todo);
            });
        }
    });

}
else{
   

    Perfil.find({ nombre        	: req.body.nombre ,unidad        	: req.body.unidad        	 },function(err, todos) {
        if (err){ res.send(err); }
       
        if(todos.length>0)   {     res.status(500).send('Ya existe creado un perfil con este nombre');  }
        else
        {    

            Perfil.create({ 
                idempresa      	: req.body.idempresa     	,
                nombre        	: req.body.nombre        	,
                unidad        	: req.body.unidad        	,
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



