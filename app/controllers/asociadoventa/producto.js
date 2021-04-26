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
         
            Producto.find({idempresa:req.params.id3,idpapa:arr[0], categoria:arr[1]}).sort({'_id': -1}).populate('categoria').populate('subcategoria').exec(function(err, todos) {
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
        { console.log('entraeee')
            Producto.find({idpapa:req.params.id4}).populate('categoria').populate('subcategoria').sort({'_id': -1}).exec(function(err, todos) {
                if (err){  res.send(err);  }
                 res.json(todos);
             });
        }
        else
        {
            Producto.find({idempresa:req.params.id3,estado:req.params.id2,idpapa:req.params.id4}).populate('categoria').populate('subcategoria').sort({'_id': -1}).exec(function(err, todos) {
                if (err){  res.send(err);  }
                 res.json(todos);
             });
        }}}
    }
    else
    {
    if(req.params.id3)
    {  
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
                    var myData3 = [];
                    for(var i = 0; i < todos.length;i++){
                        myData3.push({_id: todos[i]._id +'°'+todos[i].idpapa + '°' +todos[i].precio
                        ,nombre:todos[i].nombre +' '+todos[i].xunidad+' '+todos[i].unidad + '    °'+ todos[i].precio});
                    }
                     res.json(myData3);
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
    
    Bitacora.create({email: req.params.userID ,permiso:'Elimina',accion:'Elimina Producto '});
    Producto.findByIdAndRemove({ _id: req.params.recordID  }, function(err, todo) {
        var arra1 = functool.getImagesruta (todo.foto1);
        var arra2 = functool.getImagesruta (todo.foto2);
        var arra3 = functool.getImagesruta (todo.foto3);

      
        if(arra1!==''  &&   arra1!=='5f146aa48caa41db981e6830'){Image.findByIdAndRemove({_id:arra1 }, function(err, todo) {});}
        console.log(arra1)
        if(arra2!==''  &&   arra2!=='5f146aa48caa41db981e6830'){Image.findByIdAndRemove({_id:arra2}, function(err, todo) {});}
        console.log(arra2)
        if(arra2!==''  &&   arra2!=='5f146aa48caa41db981e6830'){Image.findByIdAndRemove({_id:arra3}, function(err, todo) {});}
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
 todo.compraminima	=	req.body.compraminima        	||	todo.compraminima;   
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
    Producto.find({idempresa     	: req.body.idempresa   ,   categoria     	: req.body.categoria    	,
        subcategoria     	: req.body.subcategoria    	,	
        idpapa	: req.body.idpapa    	,precio     	: req.body.precio    	,
        nombre     	: req.body.nombre    	
          },function(err, todos) {
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
  compraminima	: req.body.compraminima    	,
  preciooferta       : req.body.preciooferta    	,
  color        : req.body.color           	,
  talla         : req.body.talla           	,
  codigo        : req.body.codigo           	,
  foto2        : req.body.foto2           	,
  foto3        : req.body.foto3           	,
codigo: req.body.codigo,

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
