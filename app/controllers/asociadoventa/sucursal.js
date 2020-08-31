var Sucursal = require('../../models/asociadoventa/sucursal');
var Bitacora = require('../../models/bitacora');
var Image = require('../../models/image2');
var functool = require('../../controllers/funcionesnode');
exports.getSucursal = function(req, res, next){
    if(req.params.id4)
    {   
            if(req.params.id2=='todos')
            { 
                Sucursal.find({idempresa:req.params.id3,idpapa:req.params.id4}).sort({'_id': -1}).exec(function(err, todos) {
                    if (err){  res.send(err);  }
                     res.json(todos);
                 });
            }
            else
            {
                Sucursal.find({idempresa:req.params.id3,estado:req.params.id2,idpapa:req.params.id4}).sort({'_id': -1}).exec(function(err, todos) {
                    if (err){  res.send(err);  }
                     res.json(todos);
                 });
            }
    }
    else
    {
        Sucursal.find({_id:req.params.id},function(err, todos) {
            if (err){ res.send(err); }
            if(todos.length>0)   {    res.json(todos);   }
            else
            {  res.status(500).send('NO EXISTE REGISTRO');      }
        });
    }
}
exports.deleteSucursal = function(req, res, next){
    Bitacora.create({email: req.params.userID ,permiso:'Elimina',accion:'Elimina Sucursal '});
    Sucursal.findByIdAndRemove({ _id: req.params.recordID  }, function(err, todo) {
        res.json(todo);
    });
}
exports.creaSucursal2s = function(req, res, next){
    Bitacora.create(req.body.bitacora);
if(req.params.recordID!=='crea')
{ 
    Sucursal.findById({ _id: req.params.recordID }, function (err, todo)  {
        if (err) {  res.send(err);  }
        else
        {   

 todo.nombre       	=	req.body.nombre        	||	todo.nombre;   
 todo.direccion       	=	req.body.direccion        	||	todo.direccion;   
 todo.ubicacion       	=	req.body.ubicacion        	||	todo.ubicacion;   
 todo.email       	=	req.body.email        	||	todo.email;   
 todo.telefonos       	=	req.body.telefonos        	||	todo.telefonos;   
 todo.horario       	=	req.body.horario        	||	todo.horario;   
 todo.nit       	=	req.body.nit        	||	todo.nit;   
 todo.razon       	=	req.body.razon        	||	todo.razon;   
 todo.foto0       	=	req.body.foto0        	||	todo.foto0;   
 todo.logo1       	=	req.body.logo1        	||	todo.logo1;   
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
    Sucursal.find({nombre        	: req.body.nombre ,  idempresa     	: req.body.idempresa    	,
        idpapa     	: req.body.idpapa    	, },function(err, todos) {
        if (err){ res.send(err); }
        if(todos.length>0)   {    res.status(500).send('Ya existe un sucursal en plataforma'); }
        else
        {   
            Sucursal.create({ 
  idempresa     	: req.body.idempresa    	,
  idpapa     	: req.body.idpapa    	,
  nombre     	: req.body.nombre    	,
  direccion     	: req.body.direccion    	,
  ubicacion     	: req.body.ubicacion    	,
  email     	: req.body.email    	,
  telefonos     	: req.body.telefonos    	,
  horario     	: req.body.horario    	,
  nit     	: req.body.nit    	,
  razon     	: req.body.razon    	,
  foto0     	: req.body.foto0    	,
  logo1     	: req.body.logo1    	,
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
