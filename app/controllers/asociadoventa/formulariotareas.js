var formulariotareas = require('../../models/asociadoventa/formulariotareas');
var Bitacora = require('../../models/bitacora');
var Image = require('../../models/image2');
var functool = require('../../controllers/funcionesnode');
exports.getformulariotareas = function(req, res, next){
    if(req.params.id4)
    {    if(req.params.id==='tareasusuario2')
    { 

        if(req.params.id4)
        {
            var arr=req.params.id4.split(',')
            var arr2=req.params.id2.split('°')
    
            formulariotareas.find({idempresa:req.params.id3,idusuario:arr2[0]
                ,estado:arr2[1], _id: {$in:arr}}).sort({'_id': -1}).exec(function(err, todos) {
                if (err){  res.send(err);  }
                 res.json(todos);
             });

        }
        else
        {
           
                 res.json([]);
            
        }
      
    }
    else
    {
        if(req.params.id==='tareasusuario')
        { 
            formulariotareas.find({idempresa:req.params.id3,idusuario:req.params.id2}).sort({'_id': -1}).exec(function(err, todos) {
                if (err){  res.send(err);  }
                 res.json(todos);
             });
        }
        else
        {
            if(req.params.id2=='todos')
            { 
                formulariotareas.find({idempresa:req.params.id3,idpapa:req.params.id4}).sort({'_id': -1}).exec(function(err, todos) {
                    if (err){  res.send(err);  }
                     res.json(todos);
                 });
            }
            else
            {
                formulariotareas.find({idempresa:req.params.id3,estado:req.params.id2,idpapa:req.params.id4}).sort({'_id': -1}).exec(function(err, todos) {
                    if (err){  res.send(err);  }
                     res.json(todos);
                 });
            }}
        }
    }
    else
    {
        formulariotareas.find({_id:req.params.id},function(err, todos) {
            if (err){ res.send(err); }
            if(todos.length>0)   {    res.json(todos);   }
            else
            {  res.status(500).send('NO EXISTE REGISTRO');      }
        });
    }
}
exports.deleteformulariotareas = function(req, res, next){
    Bitacora.create({email: req.params.userID ,permiso:'Elimina',accion:'Elimina formulariotareas '});
    formulariotareas.findByIdAndRemove({ _id: req.params.recordID  }, function(err, todo) {
        res.json(todo);
    });
}
exports.creaformulariotareas2s = function(req, res, next){
    Bitacora.create(req.body.bitacora);


    if(req.body.operacion=='cierra tarea')
    {


        formulariotareas.findById({ _id: req.params.recordID }, function (err, todo)  {
            if (err) {  res.send(err);  }
            else
            {   
    
    
     todo.estado       	=	req.body.estado        	||	todo.estado;   
                todo.usuarioup=req.body.bitacora.email;
                todo.save(function (err, todo){
                    if (err)     {  res.status(500).send(err.message)   }
                    res.json(todo);
                });
            }
        });
    }
    else
    {
if(req.params.recordID!=='crea')
{ 
    formulariotareas.findById({ _id: req.params.recordID }, function (err, todo)  {
        if (err) {  res.send(err);  }
        else
        {   

 todo.nombre       	=	req.body.nombre        	||	todo.nombre;   
 todo.fechainicio       	=	req.body.fechainicio        	||	todo.fechainicio;   
 todo.fechafinal       	=	req.body.fechafinal        	||	todo.fechafinal;   
 todo.cantidadhoras       	=	req.body.cantidadhoras        	||	todo.cantidadhoras;   
 todo.usuario       	=	req.body.usuario        	||	todo.usuario;   
 todo.idusuario       	=	req.body.idusuario        	||	todo.idusuario;  
 todo.actividad=req.body.actividad;
 todo.avance	=	req.body.avance        	||	todo.avance;   

 todo.horas	=	req.body.horas      	||	todo.horas;   


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
    formulariotareas.find({nombre        	: req.body.nombre ,  idempresa     	: req.body.idempresa    	,
        idpapa     	: req.body.idpapa    	 },function(err, todos) {
        if (err){ res.send(err); }
        if(todos.length>0)   {    res.status(500).send('Ya existe un formulariotareas en plataforma'); }
        else
        {   
            formulariotareas.create({ 
  idempresa     	: req.body.idempresa    	,
  idpapa     	: req.body.idpapa    	,
  nombre     	: req.body.nombre    	,
  fechainicio     	: req.body.fechainicio    	,
  fechafinal     	: req.body.fechafinal    	,
  actividad	: req.body.actividad    	,
  horas: req.body.horas,
  avance: req.body.avance,
  cantidadhoras     	: req.body.cantidadhoras    	,
  usuario     	: req.body.usuario    	,
  idusuario     	: req.body.idusuario    	,
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
}}
}
