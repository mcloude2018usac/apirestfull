var Subcategoria = require('../../models/asociadoventa/subcategoria');
var Bitacora = require('../../models/bitacora');
exports.getSubcategoria = function(req, res, next){
    if(req.params.id4)
    {   
            if(req.params.id2=='todos')
            { 
                Subcategoria.find({idempresa:req.params.id3,idpapa:req.params.id4}).sort({'_id': -1}).exec(function(err, todos) {
                    if (err){  res.send(err);  }
                     res.json(todos);
                 });
            }
            else
            {
                Subcategoria.find({idempresa:req.params.id3,estado:req.params.id2,idpapa:req.params.id4}).sort({'_id': -1}).exec(function(err, todos) {
                    if (err){  res.send(err);  }
                     res.json(todos);
                 });
            }
    }
    else
    {
        Subcategoria.find({_id:req.params.id},function(err, todos) {
            if (err){ res.send(err); }
            if(todos.length>0)   {    res.json(todos);   }
            else
            {  res.status(500).send('NO EXISTE REGISTRO');      }
        });
    }
}
exports.deleteSubcategoria = function(req, res, next){
    Bitacora.create({email: req.params.userID ,permiso:'Elimina',accion:'Elimina Subcategoria '});
    Subcategoria.findByIdAndRemove({ _id: req.params.recordID  }, function(err, todo) {
        res.json(todo);
    });
}
exports.creaSubcategoria2s = function(req, res, next){
    Bitacora.create(req.body.bitacora);
if(req.params.recordID!=='crea')
{ 
    Subcategoria.findById({ _id: req.params.recordID }, function (err, todo)  {
        if (err) {  res.send(err);  }
        else
        {   
 todo.idempresa       	=	req.body.idempresa        	||	todo.idempresa;   
 todo.idpapa       	=	req.body.idpapa        	||	todo.idpapa;   
 todo.idllave0       	=	req.body.idllave0        	||	todo.idllave0;   
 todo.nombre       	=	req.body.nombre        	||	todo.nombre;   
 todo.descripcion       	=	req.body.descripcion        	||	todo.descripcion;   
 todo.estado	=	req.body.estado        	||	todo.estado;    
            todo.usuarioup=req.body.bitacora.email;
            todo.save(function (err, todo){
                if (err)     {  res.status(500).send(err.message)   }
                res.json(todo);
            });
        }
    });
}
else{
    Subcategoria.find({nombre        	: req.body.nombre  ,idpapa     	: req.body.idpapa    	,
        idllave0     	: req.body.idllave0    	, },function(err, todos) {
        if (err){ res.send(err); }
        if(todos.length>0)   {    res.status(500).send('Ya existe un subcategoria en plataforma'); }
        else
        {   
            Subcategoria.create({ 
  idempresa     	: req.body.idempresa    	,
  idpapa     	: req.body.idpapa    	,
  idllave0     	: req.body.idllave0    	,
  nombre     	: req.body.nombre    	,
  descripcion     	: req.body.descripcion    	,
  estado	: req.body.estado	,
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
