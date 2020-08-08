
var Permiso = require('../models/permiso');
var Bitacora = require('../models/bitacora');

exports.getPermiso = function(req, res, next){
    if(req.params.id3)
    { 
        
        if(req.params.id3=='todos')
        { 
            Permiso.find({idrol:req.params.id,idempresa:req.params.id2}).sort([['orden', 1]]).populate('nombre')
            .exec(function(err, todos) {
                   if (err){  res.send(err);  }
                   var myData = [];
                   for(var i = 0; i < todos.length;i++){
                    myData.push({_id:todos[i]._id,idrol:todos[i].idrol,ingreso:todos[i].ingreso
                        ,nombre:todos[i].nombre.nombre
                        ,idmodulo:{_id:todos[i].nombre._id,nombre:todos[i].nombre.nombre}
                        ,consulta:todos[i].consulta
                        ,eliminacion:todos[i].eliminacion
                        ,creacion:todos[i].creacion
                        ,actualizacion:todos[i].actualizacion
                        ,filtro:todos[i].filtro
                        ,reporte:todos[i].reporte
                        ,orden:todos[i].orden
                        });
                   }
                    res.json(myData);
                });
        }
        else
        {
  
            if(req.params.id3=='orden')
            { console.log({idrol:req.params.id,idempresa:req.params.id2})
                Permiso.find({idrol:req.params.id,idempresa:req.params.id2}).sort([['orden', -1]]).exec(function(err, todos) {
                    if (err){ res.send(err); }
                   
                    if(todos.length>0)   {    res.json({orden:todos[0].orden});   }
                    
                });
            }
            else
            {

                if(req.params.id2=='todos')
                { 
                    Permiso.find({idrol:req.params.id,idempresa:req.params.id3}).sort({'orden': -1}).populate('nombre').exec(function(err, todos) {
                        if (err){  res.send(err);  }
                        if (err){  res.send(err);  }
                   var myData = [];
                   for(var i = 0; i < todos.length;i++){
                    myData.push({_id:todos[i]._id,idrol:todos[i].idrol,ingreso:todos[i].ingreso
                        ,nombre:todos[i].nombre.nombre
                        ,idmodulo:{_id:todos[i].nombre._id,nombre:todos[i].nombre.nombre}
                        ,consulta:todos[i].consulta
                        ,eliminacion:todos[i].eliminacion
                        ,creacion:todos[i].creacion
                        ,actualizacion:todos[i].actualizacion
                        ,filtro:todos[i].filtro
                        ,estado:todos[i].estado
                        ,reporte:todos[i].reporte
                        ,orden:todos[i].orden
                        });
                   }
                    res.json(myData);
                     });
                }
                else
                {
                    Permiso.find({idrol:req.params.id,idempresa:req.params.id3,estado:req.params.id2}).populate('nombre').sort({'orden': -1}).exec(function(err, todos) {
                        if (err){  res.send(err);  }
                        if (err){  res.send(err);  }
                        var myData = [];
                        for(var i = 0; i < todos.length;i++){
                         myData.push({_id:todos[i]._id,idrol:todos[i].idrol,ingreso:todos[i].ingreso
                             ,nombre:todos[i].nombre.nombre
                             ,idmodulo:{_id:todos[i].nombre._id,nombre:todos[i].nombre.nombre}
                             ,consulta:todos[i].consulta
                             ,eliminacion:todos[i].eliminacion
                             ,creacion:todos[i].creacion
                             ,actualizacion:todos[i].actualizacion
                             ,filtro:todos[i].filtro
                             ,estado:todos[i].estado
                             ,reporte:todos[i].reporte
                             ,orden:todos[i].orden
                             });
                        }
                         res.json(myData);
                     });
                }


            }

        }
            
      
       
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
                todo.estado        	=	req.body.estado              	;
                todo.ingreso 	=	req.body.ingreso		;
                todo.consulta 	=	req.body.consulta		;
                todo.eliminacion 	=	req.body.eliminacion		;
                todo.creacion 	=	req.body.creacion		;
                todo.actualizacion    	=	req.body.actualizacion        	;
                todo.filtro 	=	req.body.filtro		;
                todo.reporte 	=	req.body.reporte		;
                todo.orden    	=	req.body.orden        	;
                todo.potros1    	=	req.body.potros1        	;
                todo.usuarioup=req.body.bitacora.email;
                
             
                todo.save(function (err, todo){
                    console.log(todo)
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
                                filtro    	: req.body.filtro   	,
                                reporte    	: req.body.reporte   	,
                                orden 	: req.body.orden 	,
                                estado	: req.body.estado	,
                                potros1: '',votros1:'',
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





