var formulariousrd = require('../models/formulariousrd');
var Bitacora = require('../models/bitacora');
var Image = require('../models/image2');
var functool = require('../controllers/funcionesnode');
exports.getformulariousrd = function(req, res, next){
    if(req.params.id4)
    {   
        if(req.params.id2=='orden')
        { 

            formulariousrd.find({idempresa:req.params.id3,idpapa:req.params.id4}).sort([['orden', -1]]).exec(function(err, todos) {
                if (err){  res.send(err);  }
                if(todos.length>0)   {    res.json({orden:todos[0].orden});   }
             });

        
        }
        else
        {
            if(req.params.id2=='todos')
            { 
                formulariousrd.find({idempresa:req.params.id3,idpapa:req.params.id4}).sort({'_id': -1}).exec(function(err, todos) {
                    if (err){  res.send(err);  }
                     res.json(todos);
                 });
            }
            else
            {
                formulariousrd.find({idempresa:req.params.id3,estado:req.params.id2,idpapa:req.params.id4}).sort({'_id': -1}).exec(function(err, todos) {
                    if (err){  res.send(err);  }
                     res.json(todos);
                 });
            }}
    }
    else
    {
        formulariousrd.find({_id:req.params.id},function(err, todos) {
            if (err){ res.send(err); }
            if(todos.length>0)   {    res.json(todos);   }
            else
            {  res.status(500).send('NO EXISTE REGISTRO');      }
        });
    }
}
exports.deleteformulariousrd = function(req, res, next){
    Bitacora.create({email: req.params.userID ,permiso:'Elimina',accion:'Elimina formulariousrd '});
    formulariousrd.findByIdAndRemove({ _id: req.params.recordID  }, function(err, todo) {
        res.json(todo);
    });
}
exports.creaformulariousrd2s = function(req, res, next){
    Bitacora.create(req.body.bitacora);
if(req.params.recordID!=='crea')
{ 
    formulariousrd.findById({ _id: req.params.recordID }, function (err, todo)  {
        if (err) {  res.send(err);  }
        else
        {   
 todo.idempresa       	=	req.body.idempresa        	||	todo.idempresa;   
 todo.idpapa       	=	req.body.idpapa        	||	todo.idpapa;   
 todo.nombre       	=	 req.body.formulario         	||	todo.formulario;   
 todo.orden       	=	req.body.orden        	||	todo.orden;   
  todo.formulario     	= req.body.formulario    	||	todo.formulario;   
 todo.idformulario       	=	req.body.idformulario        	||	todo.idformulario;   
 todo.consulta       	=	req.body.consulta        	||	todo.consulta;   
 todo.eliminacion       	=	req.body.eliminacion        	||	todo.eliminacion;   
 todo.creacion       	=	req.body.creacion        	||	todo.creacion;   
 todo.actualizacion       	=	req.body.actualizacion        	||	todo.actualizacion;   
 todo.filtro       	=	req.body.filtro        	||	todo.filtro;   
 todo.reporte       	=	req.body.reporte        	||	todo.reporte;   
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
    formulariousrd.find({idempresa     	: req.body.idempresa  ,  idpapa     	: req.body.idpapa    	 ,idformulario     	: req.body.idformulario    },function(err, todos) {
        if (err){ res.send(err); }
        if(todos.length>0)   {    res.status(500).send('Ya existe formulario asoviado a usuario'); }
        else
        {   
            formulariousrd.create({ 
  idempresa     	: req.body.idempresa    	,
  idpapa     	: req.body.idpapa    	,
  nombre     	: req.body.nombre    	,
  orden     	: req.body.orden    	,
  idformulario     	: req.body.idformulario    	,
  formulario     	: req.body.formulario    	,
  consulta     	: req.body.consulta    	,
  eliminacion     	: req.body.eliminacion    	,
  creacion     	: req.body.creacion    	,
  actualizacion     	: req.body.actualizacion    	,
  filtro     	: req.body.filtro    	,
  reporte     	: req.body.reporte    	,
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
