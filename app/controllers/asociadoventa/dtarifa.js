var dtarifa = require('../../models/asociadoventa/dtarifa');
var Bitacora = require('../../models/bitacora');
var Image = require('../../models/image2');
var functool = require('../../controllers/funcionesnode');
exports.getdtarifa = function(req, res, next){
    if(req.params.id4)
    {   
            if(req.params.id2=='todos')
            { 
                dtarifa.find({idempresa:req.params.id3,idtarifa:req.params.id4}).sort({'_id': -1}).exec(function(err, todos) {
                    if (err){  res.send(err);  }
                     res.json(todos);
                 });
            }
            else
            {
                dtarifa.find({idempresa:req.params.id3,estado:req.params.id2,idtarifa:req.params.id4}).sort({'_id': -1}).exec(function(err, todos) {
                    if (err){  res.send(err);  }
                     res.json(todos);
                 });
            }
    }
    else
    {
        dtarifa.find({_id:req.params.id},function(err, todos) {
            if (err){ res.send(err); }
            if(todos.length>0)   {    res.json(todos);   }
            else
            {  res.status(500).send('NO EXISTE REGISTRO');      }
        });
    }
}
exports.deletedtarifa = function(req, res, next){
    Bitacora.create({email: req.params.userID ,permiso:'Elimina',accion:'Elimina dtarifa '});
    dtarifa.findByIdAndRemove({ _id: req.params.recordID  }, function(err, todo) {
        res.json(todo);
    });
}
exports.creadtarifa2s = function(req, res, next){
    Bitacora.create(req.body.bitacora);
if(req.params.recordID!=='crea')
{ 
    dtarifa.findById({ _id: req.params.recordID }, function (err, todo)  {
        if (err) {  res.send(err);  }
        else
        {   
 todo.idempresa       	=	req.body.idempresa        	||	todo.idempresa;   
 todo.idtarifa       	=	req.body.idtarifa        	||	todo.idtarifa;   
 todo.nombre       	=	req.body.nombre        	||	todo.nombre;   
 todo.horaini       	=	req.body.horaini        	||	todo.horaini;   
 todo.horafin       	=	req.body.horafin        	||	todo.horafin;   
 todo.monto       	=	req.body.monto        	||	todo.monto;   
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
    dtarifa.find({nombre        	: req.body.nombre  },function(err, todos) {
        if (err){ res.send(err); }
        if(todos.length>0)   {    res.status(500).send('Ya existe un dtarifa en plataforma'); }
        else
        {   
            dtarifa.create({ 
  idempresa     	: req.body.idempresa    	,
  idtarifa     	: req.body.idtarifa    	,
  nombre     	: req.body.nombre    	,
  horaini     	: req.body.horaini    	,
  horafin     	: req.body.horafin    	,
  monto     	: req.body.monto    	,
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
