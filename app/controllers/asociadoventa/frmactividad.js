var frmactividad = require('../../models/asociadoventa/frmactividad');
var Bitacora = require('../../models/bitacora');
var Image = require('../../models/image2');
var functool = require('../../controllers/funcionesnode');
exports.getfrmactividad = function(req, res, next){
    if(req.params.id4)
    {   
            if(req.params.id2=='todos')
            { 
                frmactividad.find({idempresa:req.params.id3,idpapa:req.params.id4}).sort({'_id': -1}).exec(function(err, todos) {
                    if (err){  res.send(err);  }
                     res.json(todos);
                 });
            }
            else
            {
                frmactividad.find({idempresa:req.params.id3,estado:req.params.id2,idpapa:req.params.id4}).sort({'_id': -1}).exec(function(err, todos) {
                    if (err){  res.send(err);  }
                     res.json(todos);
                 });
            }
    }
    else
    {
        frmactividad.find({_id:req.params.id},function(err, todos) {
            if (err){ res.send(err); }
            if(todos.length>0)   {    res.json(todos);   }
            else
            {  res.status(500).send('NO EXISTE REGISTRO');      }
        });
    }
}
exports.deletefrmactividad = function(req, res, next){
    Bitacora.create({email: req.params.userID ,permiso:'Elimina',accion:'Elimina frmactividad '});
    frmactividad.findByIdAndRemove({ _id: req.params.recordID  }, function(err, todo) {
        res.json(todo);
    });
}
exports.creafrmactividad2s = function(req, res, next){
    Bitacora.create(req.body.bitacora);
if(req.params.recordID!=='crea')
{ 
    frmactividad.findById({ _id: req.params.recordID }, function (err, todo)  {
        if (err) {  res.send(err);  }
        else
        {   
 todo.idempresa       	=	req.body.idempresa        	||	todo.idempresa;   
 
 todo.orden       	=	req.body.orden        	||	todo.orden;   
  todo.actor     	={id: req.body.actor.id, nombre: req.body.actor.nombre}    	,
  todo.clase     	= req.body.clase    	,
 todo.nombre       	=	req.body.nombre        	||	todo.nombre;   
 todo.tipo     	= req.body.tipo    	,
 todo.etapa     	= req.body.etapa    	,
 todo.conector     	= req.body.conector    	,
 todo.tiempomin       	=	req.body.tiempomin        	||	todo.tiempomin;   
 todo.tiempomax       	=	req.body.tiempomax        	||	todo.tiempomax;   
 
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
    frmactividad.find({nombre        	: req.body.nombre  },function(err, todos) {
        if (err){ res.send(err); }
        if(todos.length>0)   {    res.status(500).send('Ya existe un frmactividad en plataforma'); }
        else
        {   
            frmactividad.create({ 
  idempresa     	: req.body.idempresa    	,
  idpapa     	: req.body.idpapa    	,
  orden     	: req.body.orden    	,
  actor     	: req.body.actor    	,
  clase     	: req.body.clase    	,
  nombre     	: req.body.nombre    	,
  tipo     	: req.body.tipo	,
  etapa     	: req.body.etapa    	,
  conector     	: req.body.conector    	,
  tiempomin     	: req.body.tiempomin    	,
  tiempomax     	: req.body.tiempomax    	,
  
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
