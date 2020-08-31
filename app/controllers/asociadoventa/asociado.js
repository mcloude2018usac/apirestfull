
var Asociado = require('../../models/asociadoventa/asociado');
var Bitacora = require('../../models/bitacora');
var Image = require('../../models/image2');
var functool = require('../../controllers/funcionesnode');

exports.getAsociado = function(req, res, next){
    if(req.params.id4)
    { 
        
        if(req.params.id2=='todos')
        { 
            Asociado.find({idempresa:req.params.id3,usuarionew:req.params.id4}).sort({'_id': -1}).exec(function(err, todos) {
                if (err){  res.send(err);  }
                 res.json(todos);
             });
        }
        else
        {
            Asociado.find({idempresa:req.params.id3,estado:req.params.id2,usuarionew:req.params.id4}).sort({'_id': -1}).exec(function(err, todos) {
                if (err){  res.send(err);  }
                 res.json(todos);
             });
        }
    }
    else
    {
    if(req.params.id3)
    {   
            if(req.params.id2=='todos')
            { 
                Asociado.find({idempresa:req.params.id3}).sort({'_id': -1}).exec(function(err, todos) {
                    if (err){  res.send(err);  }
                     res.json(todos);
                 });
            }
            else
            {
                Asociado.find({idempresa:req.params.id3,estado:req.params.id2}).sort({'_id': -1}).exec(function(err, todos) {
                    if (err){  res.send(err);  }
                     res.json(todos);
                 });
            }
    }
    else
    {
        Asociado.find({_id:req.params.id},function(err, todos) {
            if (err){ res.send(err); }
            if(todos.length>0)   {    res.json(todos);   }
            else
            {  res.status(500).send('NO EXISTE REGISTRO');      }
        });
    }}
}
exports.deleteAsociado = function(req, res, next){
    Bitacora.create({email: req.params.userID ,permiso:'Elimina',accion:'Elimina Asociado '});
    Asociado.findByIdAndRemove({ _id: req.params.recordID  }, function(err, todo) {
        var arra = functool.getImagesruta (todo.foto);
        if(arra == '' || arra=='5f146aa48caa41db981e6830')  { res.json(todo);    }      else       {
            Image.findByIdAndRemove(arra, function(err, todo10) {      res.json(todo);    });
        }  
       
    });
}
exports.creaAsociado2s = function(req, res, next){
    Bitacora.create(req.body.bitacora);
if(req.params.recordID!=='crea')
{ 
    Asociado.findById({ _id: req.params.recordID }, function (err, todo)  {
        if (err) {  res.send(err);  }
        else
        {   
 todo.idempresa       	=	req.body.idempresa        	||	todo.idempresa;   
 todo.nombre       	=	req.body.nombre        	||	todo.nombre;   
 todo.foto	=	req.body.foto        	||	todo.foto;   
 todo.msmpublicidad	=	req.body.msmpublicidad        	||	todo.msmpublicidad;   
 
 todo.direccion       	=	req.body.direccion        	||	todo.direccion;   
 todo.telefono       	=	req.body.telefono        	||	todo.telefono;   
 todo.correo       	=	req.body.correo        	||	todo.correo;   
 todo.ubicacion       	=	req.body.ubicacion        	||	todo.ubicacion;   
 todo.horario       	=	req.body.horario        	||	todo.horario;   
 todo.nit       	=	req.body.nit        	||	todo.nit;   
 todo.nombrecomercial       	=	req.body.nombrecomercial        	||	todo.nombrecomercial;   
 todo.direccioncomercial       	=	req.body.direccioncomercial        	||	todo.direccioncomercial; 
 todo.moneda	=	req.body.moneda        	||	todo.moneda;     
 todo.tipovista	=	req.body.tipovista        	||	todo.tipovista;   
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
    Asociado.find({nombre        	: req.body.nombre  },function(err, todos) {
        if (err){ res.send(err); }
        if(todos.length>0)   {    res.status(500).send('Ya existe un afiliado con este nombre'); }
        else
        {   
            Asociado.create({ 
  idempresa     	: req.body.idempresa    	,
  nombre     	: req.body.nombre    	,
  
  msmpublicidad	: req.body.msmpublicidad,  
  foto	: req.body.foto,
  direccion     	: req.body.direccion    	,
  telefono     	: req.body.telefono    	,
  correo     	: req.body.correo    	,
  ubicacion     	: req.body.ubicacion    	,
  horario     	: req.body.horario    	,
  nit     	: req.body.nit    	,
  nombrecomercial     	: req.body.nombrecomercial    	,
  direccioncomercial     	: req.body.direccioncomercial    	,
  estado     	: req.body.estado   , 
  moneda	: req.body.moneda    	,	
  tipovista	: req.body.tipovista    	,
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
