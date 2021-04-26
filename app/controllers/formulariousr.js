var formulariousr = require('../models/formulariousr');
var Bitacora = require('../models/bitacora');
var Image = require('../models/image2');
var functool = require('../controllers/funcionesnode');
exports.getformulariousr = function(req, res, next){
    if(req.params.id3)
    {   
            if(req.params.id2=='todos')
            { 
                formulariousr.find({idempresa:req.params.id3}).sort({'_id': -1}).exec(function(err, todos) {
                    if (err){  res.send(err);  }
                     res.json(todos);
                 });
            }
            else
            {
                formulariousr.find({idempresa:req.params.id3,estado:req.params.id2}).sort({'_id': -1}).exec(function(err, todos) {
                    if (err){  res.send(err);  }
                     res.json(todos);
                 });
            }
    }
    else
    {
        formulariousr.find({_id:req.params.id},function(err, todos) {
            if (err){ res.send(err); }
            if(todos.length>0)   {    res.json(todos);   }
            else
            {  res.status(500).send('NO EXISTE REGISTRO');      }
        });
    }
}
exports.deleteformulariousr = function(req, res, next){
    Bitacora.create({email: req.params.userID ,permiso:'Elimina',accion:'Elimina formulariousr '});
    formulariousr.findByIdAndRemove({ _id: req.params.recordID  }, function(err, todo) {
        res.json(todo);
    });
}
exports.creaformulariousr2s = function(req, res, next){
    Bitacora.create(req.body.bitacora);
if(req.params.recordID!=='crea')
{ 
    formulariousr.findById({ _id: req.params.recordID }, function (err, todo)  {
        if (err) {  res.send(err);  }
        else
        {   
 todo.idempresa       	=	req.body.idempresa        	||	todo.idempresa;   
 
 todo.nombre       	=	req.body.nombre        	||	todo.nombre;   
  todo.usuario     	= req.body.usuario    	   	||	todo.usuario;   
 todo.idusuario       	=	req.body.idusuario        	||	todo.idusuario;   
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
    formulariousr.find({  idempresa     	: req.body.idempresa    	, idusuario     	: req.body.idusuario    	 },function(err, todos) {
        if (err){ res.send(err); }
        if(todos.length>0)   {    res.status(500).send('Ya existe este usuario creado '); }
        else
        {   
            formulariousr.create({ 
  idempresa     	: req.body.idempresa    	,
 // idpapa     	: req.body.idpapa    	,
  nombre     	: req.body.nombre    	,
  idusuario     	: req.body.idusuario    	,
  usuario     	: req.body.usuario	,
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
