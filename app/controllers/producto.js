var Producto = require('../models/producto');var Bitacora = require('../models/bitacora');
exports.getProducto = function(req, res, next){
    if(req.params.id4)
    {   console.log(req.params)
        if(req.params.id2=='todos')
        { 
            Producto.find({idempresa:req.params.id3,idpapa:req.params.id4}).sort([['index', 1]]).exec(function(err, todos) {
                if (err){  res.send(err);  }
                 res.json(todos);
             });
        }
        else
        {
            Producto.find({idempresa:req.params.id3,estado:req.params.id2,idpapa:req.params.id4}).sort([['index', 1]]).exec(function(err, todos) {
                if (err){  res.send(err);  }
                 res.json(todos);
             });
        }
    }
    else
    {
    if(req.params.id3)
    {   console.log(req.params)
            if(req.params.id2=='todos')
            { 
                Producto.find({idempresa:req.params.id3}).sort([['index', 1]]).exec(function(err, todos) {
                    if (err){  res.send(err);  }
                     res.json(todos);
                 });
            }
            else
            {
                Producto.find({idempresa:req.params.id3,estado:req.params.id2}).sort([['index', 1]]).exec(function(err, todos) {
                    if (err){  res.send(err);  }
                     res.json(todos);
                 });
            }
    }
    else
    {
        Producto.find({_id:req.params.id},function(err, todos) {
            if (err){ res.send(err); }
            if(todos.length>0)   {    res.json(todos);   }
            else
            {  res.status(500).send('NO EXISTE REGISTRO');      }
        });
    }}
}
exports.deleteProducto = function(req, res, next){
    console.log(req.params)
    Bitacora.create({email: req.params.userID ,permiso:'Elimina',accion:'Elimina Producto '});
    Producto.findByIdAndRemove({ _id: req.params.recordID  }, function(err, todo) {
        res.json(todo);
    });
}
exports.creaProducto2s = function(req, res, next){
    Bitacora.create(req.body.bitacora);
if(req.params.recordID!=='crea')
{ 
    Producto.findById({ _id: req.params.recordID }, function (err, todo)  {
        if (err) {  res.send(err);  }
        else
        {   
 todo.idempresa       	=	req.body.idempresa        	||	todo.idempresa;   
 todo.idpapa	=	req.body.idpapa        	||	todo.idpapa;   
 todo.nombre       	=	req.body.nombre        	||	todo.nombre;   
 todo.descripcion       	=	req.body.descripcion        	||	todo.descripcion;   
 todo.precio       	=	req.body.precio        	||	todo.precio;   
 todo.unidad       	=	req.body.unidad        	||	todo.unidad;   
 todo.xunidad       	=	req.body.xunidad        	||	todo.xunidad;   
 todo.categoria       	=	req.body.categoria        	||	todo.categoria;   
 todo.aplicafoto       	=	req.body.aplicafoto        	||	todo.aplicafoto;   
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
    Producto.find({nombre        	: req.body.nombre  },function(err, todos) {
        if (err){ res.send(err); }
        if(todos.length>0)   {    res.status(500).send('Ya existe un producto en plataforma'); }
        else
        {   
            Producto.create({ 
  idempresa     	: req.body.idempresa    	,
  idpapa	: req.body.idpapa    	,
  nombre     	: req.body.nombre    	,
  descripcion     	: req.body.descripcion    	,
  precio     	: req.body.precio    	,
  unidad     	: req.body.unidad    	,
  xunidad     	: req.body.xunidad    	,
  categoria     	: req.body.categoria    	,
  aplicafoto     	: req.body.aplicafoto    	,
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
