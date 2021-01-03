var frmactividadcamposd = require('../../models/asociadoventa/frmactividadcamposd');
var Bitacora = require('../../models/bitacora');




exports.getfrmactividadcamposd = function(req, res, next){
    if(req.params.id2=='orden')
    {
        frmactividadcamposd.find({idempresa:req.params.id3,idpapa:req.params.id4}).sort({'_id': -1}).exec(function(err, todos) {
            if (err){  res.send(err);  }
            if(todos.length>0)
            { res.json({orden:todos[0].orden +10});
               
            }
            else
            {
                res.json({orden:10});
            }

           
         });
    }

    else
    {
        frmactividadcamposd.find({idempresa:req.params.id3,idpapa:req.params.id4},function(err, todos) {
          
            if (err){  res.send(err);  }
                     res.json(todos);
        });
    }
}
exports.deletefrmactividadcamposd = function(req, res, next){
    Bitacora.create({email: req.params.userID ,permiso:'Elimina',accion:'Elimina frmactividadcamposd '});
    frmactividadcamposd.findByIdAndRemove({ _id: req.params.recordID  }, function(err, todo) {
        res.json(todo);
    });
}
exports.creafrmactividadcamposd2s = function(req, res, next){
    Bitacora.create(req.body.bitacora);
if(req.params.recordID!=='crea')
{ 
    frmactividadcamposd.findById({ _id: req.params.recordID }, function (err, todo)  {
        if (err) {  res.send(err);  }
        else
        {   
 todo.idempresa       	=	req.body.idempresa        	||	todo.idempresa;   
 
 todo.orden       	=	req.body.orden        	||	todo.orden;   
  todo.campo	={id: req.body.campo.id, nombre: req.body.campo.nombre}    	,
  	
 todo.nombre       	=	req.body.nombre        	||	todo.nombre;   
  
 todo.camposlectura		=	req.body.camposlectura        	||	todo.camposlectura;   
 todo.camposmodificables		=	req.body.camposmodificables        	||	todo.camposmodificables;   
 todo.camposimprime		=	req.body.camposimprime        	||	todo.camposimprime;   
 
 todo.estado       	=	req.body.estado        	||	todo.estado;   
            todo.usuarioup=req.body.bitacora.email;
            todo.save(function (err, todo){
                if (err)     {  res.status(500).send(err.message)   }
                res.json(todo);
            });
        }
    });
}
else{
    frmactividadcamposd.find({ campo	: req.body.campo	,idpapa     	: req.body.idpapa   },function(err, todos) {
        if (err){ res.send(err); }
        if(todos.length>0)   {    res.status(500).send('Ya existe un campo detalle para esta actividad'); }
        else
        {   

        
            
            console.log(req.body)
            frmactividadcamposd.create({ 
  idempresa     	: req.body.idempresa    	,
  idpapa     	: req.body.idpapa    	,
  orden     	: req.body.orden    	,
  campo	: req.body.campo	,
  
  nombre     	: req.body.nombre    	,
  
  camposlectura		: req.body.camposlectura   	,
  camposmodificables	: req.body.camposmodificables   	,
  camposimprime	: req.body.camposimprime   	,
  
  estado     	: req.body.estado    	,
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
