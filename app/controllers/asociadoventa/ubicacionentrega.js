var Ubicacionentrega = require('../../models/asociadoventa/ubicacionentrega');
var Bitacora = require('../../models/bitacora');
var Image = require('../../models/image2');
var functool = require('../../controllers/funcionesnode');
exports.getUbicacionentrega = function(req, res, next){
    if(req.params.id4)
    {    if(req.params.id=='zona')
         {
            Ubicacionentrega.find({idempresa:req.params.id3,departamento:req.params.id2,municipio:req.params.id4}).sort({'_id': -1}).exec(function(err, todos) {
                if (err){  res.send(err);  }
                 res.json(todos);
             });
         }
         else
         { 
            if(req.params.id2=='todos')
            { 
                Ubicacionentrega.find({idempresa:req.params.id3}).sort({'_id': -1}).exec(function(err, todos) {
                    if (err){  res.send(err);  }
                     res.json(todos);
                 });
            }
            else
            {
                Ubicacionentrega.find({idempresa:req.params.id3,estado:req.params.id2}).sort({'_id': -1}).exec(function(err, todos) {
                    if (err){  res.send(err);  }
                     res.json(todos);
                 });
            }
        }
    }
    else
    {
        Ubicacionentrega.find({_id:req.params.id},function(err, todos) {
            if (err){ res.send(err); }
            if(todos.length>0)   {    res.json(todos);   }
            else
            {  res.status(500).send('NO EXISTE REGISTRO');      }
        });
    }
}
exports.deleteUbicacionentrega = function(req, res, next){
    Bitacora.create({email: req.params.userID ,permiso:'Elimina',accion:'Elimina Ubicacionentrega '});
    Ubicacionentrega.findByIdAndRemove({ _id: req.params.recordID  }, function(err, todo) {
        res.json(todo);
    });
}
exports.creaUbicacionentrega2s = function(req, res, next){
    Bitacora.create(req.body.bitacora);
if(req.params.recordID!=='crea')
{ 
    Ubicacionentrega.findById({ _id: req.params.recordID }, function (err, todo)  {
        if (err) {  res.send(err);  }
        else
        {   
 todo.idempresa       	=	req.body.idempresa        	||	todo.idempresa;   

  municipio     	= req.body.municipio     	||	todo.municipio	,
  departamento     	= req.body.departamento    	||	todo.departamento 	,
 todo.nombre       	=	req.body.nombre        	||	todo.nombre;   
 todo.descripcion       	=	req.body.descripcion        	||	todo.descripcion;   
 todo.costo       	=	req.body.costo        	||	todo.costo;   
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
    Ubicacionentrega.find({nombre        	: req.body.nombre, municipio     	: req.body.municipio    	,
        departamento     	: req.body.departamento    	 },function(err, todos) {
        if (err){ res.send(err); }
        if(todos.length>0)   {    res.status(500).send('Ya existe una ubicacion de entrega en plataforma'); }
        else
        {   
            Ubicacionentrega.create({ 
  idempresa     	: req.body.idempresa    	,

 municipio     	: req.body.municipio    	,
 departamento     	: req.body.departamento    	,
  nombre     	: req.body.nombre    	,
  descripcion     	: req.body.descripcion    	,
  costo     	: req.body.costo    	,
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
