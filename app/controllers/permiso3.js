
var Permison3 = require('../models/permiso3');
var Bitacora = require('../models/bitacora');

exports.getPermison3 = function(req, res, next){
    if(req.params.id4)
    {  
        
        
           
        if(req.params.id4=='todos') 
        { 
            Permison3.find({idpermiso:req.params.id3,idrol:req.params.id2,idempresa:req.params.id}).sort([['orden', 1]]).populate('nombre')
            .exec(function(err, todos) {
                   if (err){  res.send(err);  }
                   var myData = [];
                   for(var i = 0; i < todos.length;i++){
                    myData.push({_id:todos[i]._id,idpermiso:todos[i].idpermiso,
                        idrol:todos[i].idrol,ingreso:todos[i].ingreso
                        ,nombre:todos[i].nombre.nombre
                        ,idmodulo:{_id:todos[i].nombre._id,nombre:todos[i].nombre.nombre}
                        ,consulta:todos[i].consulta
                        ,eliminacion:todos[i].eliminacion
                        ,filtro:todos[i].filtro
                        ,reporte:todos[i].reporte
                        ,creacion:todos[i].creacion
                        ,actualizacion:todos[i].actualizacion
                        ,orden:todos[i].orden
                        ,estado:todos[i].estado
                        ,potros1:todos[i].potros1
                        });
                   }
                    res.json(myData);
                });
        }
        else
        {
            if(req.params.id4=='orden')
            { 
                Permison3.find({idpermiso:req.params.id3,idrol:req.params.id2,idempresa:req.params.id}).sort([['orden', -1]]).exec(function(err, todos) {
                    if (err){ res.send(err); }
                   
                    if(todos.length>0)   {    res.json({orden:todos[0].orden});   }
                    
                });
            }
            else
            {


                
                if(req.params.id3=='todos')
                { 
                    Permison3.find({idpermiso:req.params.id2,idrol:req.params.id,idempresa:req.params.id4}).sort({'orden': -1}).populate('nombre').exec(function(err, todos) {
                        if (err){  res.send(err);  }
                        if (err){  res.send(err);  }
                   var myData = [];
                   for(var i = 0; i < todos.length;i++){
                    myData.push({_id:todos[i]._id,idpermiso:todos[i].idpermiso,
                        idrol:todos[i].idrol,ingreso:todos[i].ingreso
                        ,nombre:todos[i].nombre.nombre
                        ,idmodulo:{_id:todos[i].nombre._id,nombre:todos[i].nombre.nombre}
                        ,consulta:todos[i].consulta
                        ,eliminacion:todos[i].eliminacion
                        ,filtro:todos[i].filtro
                        ,reporte:todos[i].reporte
                        ,creacion:todos[i].creacion
                        ,actualizacion:todos[i].actualizacion
                        ,orden:todos[i].orden
                        ,estado:todos[i].estado
                        ,potros1:todos[i].potros1
                        });
                   }
                    res.json(myData);
                     });
                }
                else
                {
                    Permison3.find({idpermiso:req.params.id2,idrol:req.params.id,idempresa:req.params.id4,estado:req.params.id3}).populate('nombre').sort({'orden': -1}).exec(function(err, todos) {
                        if (err){  res.send(err);  }
                        if (err){  res.send(err);  }
                        var myData = [];
                        for(var i = 0; i < todos.length;i++){
                            myData.push({_id:todos[i]._id,idpermiso:todos[i].idpermiso,
                                idrol:todos[i].idrol,ingreso:todos[i].ingreso
                                ,nombre:todos[i].nombre.nombre
                                ,idmodulo:{_id:todos[i].nombre._id,nombre:todos[i].nombre.nombre}
                                ,consulta:todos[i].consulta
                                ,eliminacion:todos[i].eliminacion
                                ,filtro:todos[i].filtro
                                ,reporte:todos[i].reporte
                                ,creacion:todos[i].creacion
                                ,actualizacion:todos[i].actualizacion
                                ,orden:todos[i].orden
                                ,estado:todos[i].estado
                                ,potros1:todos[i].potros1
                                });
                        }
                         res.json(myData);
                     });
                }

            }

        }
            
        
      


        
    
    }
   
}
exports.deletePermison3 = function(req, res, next){
   
    Bitacora.create({email: req.params.userID ,permiso:'Elimina',accion:'Elimina Permison3 '});
    Permison3.findByIdAndRemove({ _id: req.params.id  }, function(err, todo) {
        res.json(todo);
    });
}


exports.creaPermison32s = function(req, res, next){
   

    if(req.params.id!=='crea')
    {  Bitacora.create(req.body.bitacora);
        
        Permison3.findById({ _id: req.params.id}, function (err, todo)  {
            if (err) {  res.send(err);  }
            else
            {  
                todo.idpermiso        	=	req.body.ididpermiso        	||	todo.idpermiso        	;
                todo.idrol        	=	req.body.idrol        	||	todo.idrol        	;
                todo.nombre        	=	req.body.nombre        	||	todo.nombre        	;
                todo.estado        	=	req.body.estado        	||	todo.estado        	;
                todo.ingreso 	=	req.body.ingreso		;
                todo.consulta 	=	req.body.consulta		;
                todo.eliminacion 	=	req.body.eliminacion		;
                todo.creacion 	=	req.body.creacion		;
                todo.filtro 	=	req.body.filtro		;
                todo.reporte 	=	req.body.reporte		;
                todo.actualizacion    	=	req.body.actualizacion        	;
                todo.orden    	=	req.body.orden        	;
                todo.potros1    	=	req.body.potros1        	;
                
                todo.usuarioup=req.body.bitacora.email;
                
             
                todo.save(function (err, todo){
                    if (err)     {  res.status(500).send(err.message)   }
                    res.json(todo);
                });
            }
        });
    
    }
    else{

                        Permison3.find({nombre:req.body.nombre, idrol:req.body.idrol, idpermiso:req.body.idpermiso },function(err, todos) {
                            if (err){ res.send(err); }
                        
                            if(todos.length>0)   {    res.status(500).send('Modulo ya existe');   }
                            else
                            { 
                                Bitacora.create(req.body.bitacora);
                                Permison3.create({  
                                    idempresa        	: req.body.idempresa        	,
                                idpermiso        	: req.body.idpermiso        	,
                                idrol        	: req.body.idrol        	,
                                nombre        	: req.body.nombre        	,
                                ingreso    	: req.body.ingreso    	,
                                consulta    	: req.body.consulta    	,
                                eliminacion   	: req.body.eliminacion 	,
                                filtro    	: req.body.filtro   	,
                                reporte    	: req.body.reporte   	,
                                creacion    	: req.body.creacion   	,
                                potros1: '',votros1:'',
                                actualizacion 	: req.body.actualizacion 	,
                                orden 	: req.body.orden 	,
                                estado	: req.body.estado	,
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





