var formulariotareasdoc = require('../../models/asociadoventa/formulariotareasdoc');
var Bitacora = require('../../models/bitacora');
var Image = require('../../models/image2');
var functool = require('../../controllers/funcionesnode');
exports.getformulariotareasdoc = function(req, res, next){
    console.log(req.params)
    if(req.params.id4)
    {     if(req.params.id2=='orden')
    { 

        formulariotareasdoc.find({idempresa:req.params.id3,idpapa:req.params.id4}).sort([['orden', -1]]).exec(function(err, todos) {
            if (err){  res.send(err);  }
            if(todos.length>0)   {    res.json({orden:todos[0].orden+10});   }
            else
            {
                res.json({orden:'10'});
            }
         });

    
    }
    else
    {
            if(req.params.id2=='todos')
            { 
                formulariotareasdoc.find({idempresa:req.params.id3,idpapa:req.params.id4}).sort({'_id': -1}).exec(function(err, todos) {
                    if (err){  res.send(err);  }
                     res.json(todos);
                 });
            }
            else
            {
                formulariotareasdoc.find({idempresa:req.params.id3,estado:req.params.id2,idpapa:req.params.id4}).sort({'_id': -1}).exec(function(err, todos) {
                    if (err){  res.send(err);  }
                     res.json(todos);
                 });
            }}
    }
    else
    {
        formulariotareasdoc.find({_id:req.params.id},function(err, todos) {
            if (err){ res.send(err); }
            if(todos.length>0)   {    res.json(todos);   }
            else
            {  res.status(500).send('NO EXISTE REGISTRO');      }
        });
    }
}
exports.deleteformulariotareasdoc = function(req, res, next){
    Bitacora.create({email: req.params.userID ,permiso:'Elimina',accion:'Elimina formulariotareasdoc '});
    formulariotareasdoc.findByIdAndRemove({ _id: req.params.recordID  }, function(err, todo) {
        res.json(todo);
    });
}
exports.creaformulariotareasdoc2s = function(req, res, next){
    Bitacora.create(req.body.bitacora);
if(req.params.recordID!=='crea')
{ 
    formulariotareasdoc.findById({ _id: req.params.recordID }, function (err, todo)  {
        if (err) {  res.send(err);  }
        else
        {   

 todo.orden       	=	req.body.orden        	||	todo.orden;   
 todo.nombre       	=	req.body.nombre        	||	todo.nombre;   
 todo.fecha       	=	req.body.fecha        	||	todo.fecha;   
 todo.foto       	=	req.body.foto        	||	todo.foto;   
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
    formulariotareasdoc.find({nombre        	: req.body.nombre  },function(err, todos) {
        if (err){ res.send(err); }
        if(todos.length>0)   {    res.status(500).send('Ya existe un formulariotareasdoc en plataforma'); }
        else
        {   
            formulariotareasdoc.create({ 
  idempresa     	: req.body.idempresa    	,
  idpapa     	: req.body.idpapa    	,
  orden     	: req.body.orden    	,
  nombre     	: req.body.nombre    	,
  fecha     	: req.body.fecha    	,
  foto     	: req.body.foto    	,
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
