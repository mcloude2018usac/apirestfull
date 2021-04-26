
var Rol = require('../models/rol');
var Bitacora = require('../models/bitacora');

exports.getRol = function(req, res, next){
    if(req.params.id3)
    { 
     
        if(req.params.id3=='unidad')
        { 
            Rol.find({'unidad.id':req.params.id,idempresa:req.params.id2},function(err, todos) {
                if (err){  res.send(err);  }
                 res.json(todos);
             });
        }
        else{

            if(req.params.id3=='todos')
        { 
              
        Rol.find({idempresa:req.params.id2}).populate('unidad.id')
        .exec(function(err, todos) {
           if (err){  res.send(err);  }
            res.json(todos);
        });
        }
        else
        {

            if(req.params.id2=='todosope')
            { 
                Rol.find({idempresa:req.params.id3,estado:'Activo',nombre:{$nin:['Administrador','user']}}).sort({'_id': -1}).exec(function(err, todos) {
                    if (err){  res.send(err);  }
                     res.json(todos);
                 });
            }
            else
            {
            
            if(req.params.id2=='todos')
            { 
             
                Rol.find({idempresa:req.params.id3}).sort({'_id': -1}).exec(function(err, todos) {
                    if (err){  res.send(err);  }
                     res.json(todos);
                 });
            }
            else
            {
                Rol.find({idempresa:req.params.id3,estado:req.params.id2}).sort({'_id': -1}).exec(function(err, todos) {
                    if (err){  res.send(err);  }
                     res.json(todos);
                 });
            }}
        }


        }

      


    }
    else
    {
                if(req.params.id)
                {   Rol.find({_id:req.params.id},function(err, todos) {
                        if (err){ res.send(err); }
                    
                        if(todos.length>0)   {    res.json(todos);   }
                        else
                        {  res.status(500).send('NO EXISTE REGISTRO');      }
                        
                    });
                }
   
    }
}
exports.deleteRol = function(req, res, next){
   
    Bitacora.create({email: req.params.userID ,permiso:'Elimina',accion:'Elimina Rol '});
    Rol.findByIdAndRemove({ _id: req.params.recordID  }, function(err, todo) {
        res.json(todo);
    });
}


exports.creaRol2s = function(req, res, next){
   
 
    Bitacora.create(req.body.bitacora);
if(req.params.recordID!=='crea')
{ 
    Rol.findById({ _id: req.params.recordID }, function (err, todo)  {
        if (err) {  res.send(err);  }
        else
        {   
            todo.idempresa       	=	req.body.idempresa        	||	todo.idempresa;   
            todo.nombre        	=	req.body.nombre        	||	todo.nombre        	;
            todo.estado    	=	req.body.estado    	||	todo.estado    	;
            todo.unidad=	req.body.unidad	||	todo.unidad	;
            todo.usuarioup=req.body.bitacora.email;
            todo.save(function (err, todo){
                if (err)     {  res.status(500).send(err.message)   }
                res.json(todo);
            });
        }
    });

}
else{
   

    Rol.find({ nombre        	: req.body.nombre ,unidad        	: req.body.unidad        	 },function(err, todos) {
        if (err){ res.send(err); }
       
        if(todos.length>0)   {     res.status(500).send('Ya existe creado un Rol con este nombre');  }
        else
        {    

            Rol.create({ 
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



