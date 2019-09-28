
var Permiso = require('../models/permiso');
var Bitacora = require('../models/bitacora');

exports.getPermiso = function(req, res, next){
    if(req.params.id3)
    { 
        
        if(req.params.id3=='todos')
        { 
            Permiso.find({idrol:req.params.id2,_id:req.params.id},function(err, todos) {
                if (err){ res.send(err); }
               
                if(todos.length>0)   {    res.json(todos);   }
                else
                {  res.status(500).send('NO EXISTE REGISTRO');      }
                
            });
        }
            
        
        if(req.params.id3=='orden')
        { 
            Permiso.find({idrol:req.params.id2}).sort([['orden', -1]]).exec(function(err, todos) {
                if (err){ res.send(err); }
               
                if(todos.length>0)   {    res.json({orden:todos[0].orden});   }
                
            });
        }
       
    }
    else
    { 
    Permiso.find({idrol:req.params.id}).sort([['orden', 1]]).populate('nombre')
    .exec(function(err, todos) {
           if (err){  res.send(err);  }
           var myData = [];
           for(var i = 0; i < todos.length;i++){
            myData.push({_id:todos[i]._id,idrol:todos[i].idrol,ingreso:todos[i].ingreso
                ,nombre:todos[i].nombre.nombre
                ,idmodulo:todos[i].nombre._id
                ,consulta:todos[i].consulta
                ,eliminacion:todos[i].eliminacion
                ,creacion:todos[i].creacion
                ,actualizacion:todos[i].actualizacion
                ,orden:todos[i].orden
                });
           }
            res.json(myData);
        });
    }
}
exports.deletePermiso = function(req, res, next){
   
    Bitacora.create({email: req.params.userID ,permiso:'Elimina',accion:'Elimina Permiso '});
    Permiso.findByIdAndRemove({ _id: req.params.id  }, function(err, todo) {
        res.json(todo);
    });
}


exports.creaPermiso2s = function(req, res, next){
   

    if(req.params.id!=='crea')
    {  Bitacora.create(req.body.bitacora);
        Permiso.findById({ _id: req.params.id}, function (err, todo)  {
            if (err) {  res.send(err);  }
            else
            {  
                
                todo.idrol        	=	req.body.idrol        	||	todo.idrol        	;
                todo.nombre        	=	req.body.nombre        	||	todo.nombre        	;
                todo.ingreso 	=	req.body.ingreso		;
                todo.consulta 	=	req.body.consulta		;
                todo.eliminacion 	=	req.body.eliminacion		;
                todo.creacion 	=	req.body.creacion		;
                todo.actualizacion    	=	req.body.actualizacion        	;
                todo.orden    	=	req.body.orden        	;
                todo.usuarioup=req.body.bitacora.email;
                
             
                todo.save(function (err, todo){
                    if (err)     {  res.status(500).send(err.message)   }
                    res.json(todo);
                });
            }
        });
    
    }
    else{

                        Permiso.find({nombre:req.body.nombre, idrol:req.body.idrol },function(err, todos) {
                            if (err){ res.send(err); }
                        
                            if(todos.length>0)   {    res.status(500).send('Modulo ya existe');   }
                            else
                            { 
                                Bitacora.create(req.body.bitacora);
                                Permiso.create({  
                                    idempresa        	: req.body.idempresa        	,
                                idrol        	: req.body.idrol        	,
                                nombre        	: req.body.nombre        	,
                                ingreso    	: req.body.ingreso    	,
                                consulta    	: req.body.consulta    	,
                                eliminacion   	: req.body.eliminacion 	,
                                creacion    	: req.body.creacion   	,
                                actualizacion 	: req.body.actualizacion 	,
                                orden 	: req.body.orden 	,
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





