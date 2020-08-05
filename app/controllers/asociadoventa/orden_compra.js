var Orden_compra = require('../../models/asociadoventa/orden_compra');
var Bitacora = require('../../models/bitacora');

var functool = require('../../controllers/funcionesnode');

exports.getOrden_compra = function(req, res, next){
    if(req.params.id5)
    {   
        if(req.params.id5=='individual')
        {   
           
                Orden_compra.find({idempresa:req.params.id3,estado:req.params.id2,idusuario:req.params.id4}).sort({'_id': -1}).exec(function(err, todos) {
                    if (err){  res.send(err);  }
                     res.json(todos);
                 });
            
        }
        else
        {
            Orden_compra.find({idempresa:req.params.id3,estado:req.params.id2}).sort({'_id': -1}).exec(function(err, todos) {
                if (err){  res.send(err);  }
                 res.json(todos);
             });
        
        }    
          
    }
    else
    {
        Orden_compra.find({_id:req.params.id},function(err, todos) {
            if (err){ res.send(err); }
            if(todos.length>0)   {    res.json(todos);   }
            else
            {  res.status(500).send('NO EXISTE REGISTRO');      }
        });
    }



}
exports.deleteOrden_compra = function(req, res, next){
  
    Bitacora.create({email: req.params.userID ,permiso:'Elimina',accion:'Elimina Orden_compra '});
    Orden_compra.findByIdAndRemove({ _id: req.params.recordID  }, function(err, todo) {
   
        res.json(todo); 

   


        
    });
}
exports.creaOrden_compra2s = function(req, res, next){
    Bitacora.create(req.body.bitacora);
if(req.params.recordID!=='crea')
{ 
    Orden_compra.findById({ _id: req.params.recordID }, function (err, todo)  {
        if (err) {  res.send(err);  }
        else
        {   
 todo.idempresa       	=	req.body.idempresa        	||	todo.idempresa;   





 
            todo.usuarioup=req.body.bitacora.email;
            todo.save(function (err, todo){
                if (err)     {  res.status(500).send(err.message)   }
                res.json(todo);
            });
        }
    });
}
else{


 
            Orden_compra.create({ 
  idempresa     	: req.body.idempresa    	,
  nombre	: req.body.nombre	,
  nombre     	: req.body.nombre    	,
  direccion	: req.body.direccion	,
  telefono	: req.body.telefono	,
  total	: req.body.total	,
  tipopago	: req.body.tipopago	,
  idusuario	: req.body.idusuario	,
  estado     	: req.body.estado    	,

  deliveryasignado: req.body.deliveryasignado	,
  dproductos: req.body.dproductos,

                usuarionew:req.body.bitacora.email,
              }
                , function(err, todo) {
                if (err){ 
                    res.status(500).send(err.message)    }
                res.json(todo);
            });
             
    
}
}
