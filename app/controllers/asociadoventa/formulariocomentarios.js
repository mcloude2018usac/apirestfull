var formulariocomentarios = require('../../models/asociadoventa/formulariocomentarios');
var Bitacora = require('../../models/bitacora');
var Image = require('../../models/image2');
var functool = require('../../controllers/funcionesnode');
exports.getformulariocomentarios = function(req, res, next){
    if(req.params.id4)
    {   
            if(req.params.id2=='todos')
            { 
                formulariocomentarios.find({idempresa:req.params.id3,idpapa:req.params.id4}).sort({'_id': -1}).exec(function(err, todos) {
                    if (err){  res.send(err);  }
                     res.json(todos);
                 });
            }
            else
            {
                formulariocomentarios.find({idempresa:req.params.id3,estado:req.params.id2,idpapa:req.params.id4}).sort({'_id': -1}).exec(function(err, todos) {
                    if (err){  res.send(err);  }
                     res.json(todos);
                 });
            }
    }
    else
    {
        formulariocomentarios.find({_id:req.params.id},function(err, todos) {
            if (err){ res.send(err); }
            if(todos.length>0)   {    res.json(todos);   }
            else
            {  res.status(500).send('NO EXISTE REGISTRO');      }
        });
    }
}
exports.deleteformulariocomentarios = function(req, res, next){
    Bitacora.create({email: req.params.userID ,permiso:'Elimina',accion:'Elimina formulariocomentarios '});
    formulariocomentarios.findByIdAndRemove({ _id: req.params.recordID  }, function(err, todo) {
        res.json(todo);
    });
}
exports.creaformulariocomentarios2s = function(req, res, next){
    Bitacora.create(req.body.bitacora);
if(req.params.recordID!=='crea')
{ 
    formulariocomentarios.findById({ _id: req.params.recordID }, function (err, todo)  {
        if (err) {  res.send(err);  }
        else
        {   
 
 todo.nombre       	=	req.body.nombre        	||	todo.nombre;   
            todo.usuarioup=req.body.bitacora.email;
            todo.actividad=req.body.actividad;
            todo.save(function (err, todo){
                if (err)     {  res.status(500).send(err.message)   }
                res.json(todo);
            });
        }
    });
}
else{
    formulariocomentarios.find({nombre        	: req.body.nombre , idempresa     	: req.body.idempresa    	,
        idpapa     	: req.body.idpapa    	,
        actividad	: req.body.actividad    	, },function(err, todos) {
        if (err){ res.send(err); }
        if(todos.length>0)   {    res.status(500).send('Ya existe un formulariocomentarios en plataforma'); }
        else
        {   
            formulariocomentarios.create({ 
  idempresa     	: req.body.idempresa    	,
  idpapa     	: req.body.idpapa    	,
  actividad	: req.body.actividad    	,
  nombre     	: req.body.nombre    	,
  
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
