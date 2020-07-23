var Producto = require('../../models/asociadoventa/producto');
var Bitacora = require('../../models/bitacora');
var Image = require('../../models/image2');
var functool = require('../../controllers/funcionesnode');

exports.getProducto = function(req, res, next){
    if(req.params.id4)
    {  
        if(req.params.id=='todosproductos')
        { 
            var arr=(req.params.id4).split('°')
         
            Producto.find({idempresa:req.params.id3,idpapa:arr[0], categoria:arr[1]}).sort({'_id': -1}).exec(function(err, todos) {
                if (err){  res.send(err);  }
                 res.json(todos);
             });
        }
        else
        {
        if(req.params.id2=='grupo')
        { 

            Producto.aggregate( [
                { 
                    "$group" : {
                        "_id" : {
                            "categoria" : "$categoria"
                        }
                       
                    }
                }, 
                { 
                    "$project" : {
                        "categoria" : "$_id.categoria", 
                        "_id" :0
                    }
                }
            ]).exec(function(err, todos) {
                console.log(todos)
                res.json(todos);

            });
           

        }
        else
        {
        if(req.params.id2=='todos')
        { 
            Producto.find({idempresa:req.params.id3,idpapa:req.params.id4}).sort({'_id': -1}).exec(function(err, todos) {
                if (err){  res.send(err);  }
                 res.json(todos);
             });
        }
        else
        {
            Producto.find({idempresa:req.params.id3,estado:req.params.id2,idpapa:req.params.id4}).sort({'_id': -1}).exec(function(err, todos) {
                if (err){  res.send(err);  }
                 res.json(todos);
             });
        }}}
    }
    else
    {
    if(req.params.id3)
    {   console.log(req.params)
            if(req.params.id2=='todos')
            { 
                Producto.find({idempresa:req.params.id3}).sort({'_id': -1}).exec(function(err, todos) {
                    if (err){  res.send(err);  }
                     res.json(todos);
                 });
            }
            else
            {
                Producto.find({idempresa:req.params.id3,estado:req.params.id2}).sort({'_id': -1}).exec(function(err, todos) {
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
        var arra1 = functool.getImagesruta (todo.foto1);
        var arra2 = functool.getImagesruta (todo.foto2);
        var arra3 = functool.getImagesruta (todo.foto3);

      
        Image.findByIdAndRemove({_id:arra1});
        console.log(arra1)
        Image.findByIdAndRemove({_id:arra2});
        console.log(arra2)
        Image.findByIdAndRemove({_id:arra3});
        console.log(arra3)

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
 todo.subcategoria       	=	req.body.subcategoria        	||	todo.subcategoria;   
 todo.foto1       	=	req.body.foto1        	||	todo.foto1;   
 todo.estado       	=	req.body.estado        	||	todo.estado;   

 todo.preciooferta       	=	req.body.preciooferta        	||	todo.preciooferta; 
 todo.color       	=	req.body.color        	||	todo.color; 
 todo.talla       	=	req.body.talla        	||	todo.talla; 
 todo.codigo       	=	req.body.codigo        	||	todo.codigo; 
 todo.foto2       	=	req.body.foto2        	||	todo.foto2; 
 todo.foto3       	=	req.body.foto3        	||	todo.foto3; 




 
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
  subcategoria     	: req.body.subcategoria    	,
  foto1     	: req.body.foto1    	,
  estado     	: req.body.estado    	,

  preciooferta       : req.body.preciooferta    	,
  color        : req.body.color           	,
  talla         : req.body.talla           	,
  codigo        : req.body.codigo           	,
  foto2        : req.body.foto2           	,
  foto3        : req.body.foto3           	,


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
