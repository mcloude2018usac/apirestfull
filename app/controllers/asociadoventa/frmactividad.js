var frmactividad = require('../../models/asociadoventa/frmactividad');
var Bitacora = require('../../models/bitacora');
var Image = require('../../models/image2');
var functool = require('../../controllers/funcionesnode');
var frmactoractividad = require('../../models/asociadoventa/frmactorgrupo');

exports.getfrmactividad = function(req, res, next){
    if(req.params.id4)
    {       if(req.params.id2=='actividadprocesosmias')
    { 
        var arr=req.params.id4.split('°')
   
        frmactividad.find({idempresa:req.params.id3,idpapa:arr[0] }).sort({'orden': 1}).exec(function(err, todos) {
            if (err){  res.send(err);  }

           

            frmactoractividad.find({idempresa:req.params.id3,idpapa0:arr[0] }).sort({'orden': 1}).exec(function(err, todos10) {
                if (err){  res.send(err);  }

             

                var myData = [];
                for(var i = 0; i < todos.length;i++){

                    for(var ii = 0; ii < todos10.length;ii++){
                        if(todos[i].actor.id===todos10[ii].idpapa)
                        { if(todos10[ii])
                            {
                            var usuarios= todos10[ii].usuarios
                          
                            for(var k = 0; k < usuarios.length;k++){
                                if(usuarios[k].email===arr[1])
                                {
                                    myData.push(todos[i]._id)
                                }
                            }}

                        }

                    }
                }

             res.json(myData);
         });
        });
    }
    else
    {
        if(req.params.id2=='actividadprocesos')
        { 
            frmactividad.find({idempresa:req.params.id3,idpapa:req.params.id4 }).sort({'orden': 1}).exec(function(err, todos) {
                if (err){  res.send(err);  }
    
                 res.json(todos);
             });
        }
        else
        {
        if(req.params.id2=='actividadsiguiente')
    { 
        frmactividad.find({idempresa:req.params.id3,idpapa:req.params.id,_id : { $nin: [req.params.id4]  } }).sort({'orden': 1}).exec(function(err, todos) {
            if (err){  res.send(err);  }

            var dadat = [];
            for(var i = 0; i< todos.length; i++){    
                dadat.push({_id:todos[i]._id,nombre:todos[i].nombre })

            }
             res.json(dadat);
         });
    }
    else
    {
        if(req.params.id2==='orden')
        {
            frmactividad.find({idempresa:req.params.id3,idpapa:req.params.id4}).sort({'_id': -1}).exec(function(err, todos) {
                if (err){  res.send(err);  }
                if(todos.length>0)
                { res.json({orden:todos[0].orden +10});
                   
                }
                else
                {
                    res.json({orden:10});
                }

               
             });
        }
        else
        {
            if(req.params.id2=='todos')
            { 
                frmactividad.find({idempresa:req.params.id3,idpapa:req.params.id4}).sort({'_id': 1}).exec(function(err, todos) {
                    if (err){  res.send(err);  }
                     res.json(todos);
                 });
            }
            else
            {
                if(req.params.id2==='orden')
                {
                    frmactividad.find({idempresa:req.params.id3,idpapa:req.params.id4}).sort({'_id': -1}).exec(function(err, todos) {
                        if (err){  res.send(err);  }
                        if(todos.length>0)
                        { res.json({orden:todos[0].orden +10});
                           
                        }
                        else
                        {
                            res.json({orden:10});
                        }

                       
                     });
                }
                else
                {
                    frmactividad.find({idempresa:req.params.id3,estado:req.params.id2,idpapa:req.params.id4}).sort({'_id': -1}).exec(function(err, todos) {
                        if (err){  res.send(err);  }
                         res.json(todos);
                     });
                }
            }
            }}
        }}
    }
    else
    {
        frmactividad.find({_id:req.params.id},function(err, todos) {
            if (err){ res.send(err); }
            if(todos.length>0)   {    res.json(todos);   }
            else
            {  res.status(500).send('NO EXISTE REGISTRO');      }
        });
    }
}
exports.deletefrmactividad = function(req, res, next){
    Bitacora.create({email: req.params.userID ,permiso:'Elimina',accion:'Elimina frmactividad '});
    frmactividad.findByIdAndRemove({ _id: req.params.recordID  }, function(err, todo) {
        res.json(todo);
    });
}
exports.creafrmactividad2s = function(req, res, next){
    Bitacora.create(req.body.bitacora);
if(req.params.recordID!=='crea')
{ 
    frmactividad.findById({ _id: req.params.recordID }, function (err, todo)  {
        if (err) {  res.send(err);  }
        else
        {   
 todo.idempresa       	=	req.body.idempresa        	||	todo.idempresa;   
 
 todo.orden       	=	req.body.orden        	||	todo.orden;   
  todo.actor     	={id: req.body.actor.id, nombre: req.body.actor.nombre}    	,
  todo.clase     	= req.body.clase    	,
 todo.nombre       	=	req.body.nombre        	||	todo.nombre;   
 todo.tipo     	= req.body.tipo    	,
 todo.etapa     	= req.body.etapa    	,
 todo.conector     	= req.body.conector    	,
 todo.tiempomin       	=	req.body.tiempomin        	||	todo.tiempomin;   
 todo.tiempomax       	=	req.body.tiempomax        	||	todo.tiempomax;  
  
 todo.camposlectura		=	req.body.camposlectura        	||	todo.camposlectura;   
 todo.camposmodificables		=	req.body.camposmodificables        	||	todo.camposmodificables;   
 todo.camposimprime		=	req.body.camposimprime        	||	todo.camposimprime;   
 
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
    frmactividad.find({nombre        	: req.body.nombre  , idpapa     	: req.body.idpapa   },function(err, todos) {
        if (err){ res.send(err); }
        if(todos.length>0)   {    res.status(500).send('Ya existe un actividad con este nombre en la plataforma'); }
        else
        {   

            if(req.body.clase==='INICIO' || req.body.clase==='FINAL'   )
            {
                for(var i = 0; i < todos.length;i++){
                    if(todos[i].clase===req.body.clase)
                    {
                        res.status(500).send('No se puede crear dos actividades de tipo ' +req.body.clase ); 
                        return;
                    }
                }

            }
            
            console.log(req.body)
            frmactividad.create({ 
  idempresa     	: req.body.idempresa    	,
  idpapa     	: req.body.idpapa    	,
  orden     	: req.body.orden    	,
  actor     	: req.body.actor   	,
  clase     	: req.body.clase    	,
  nombre     	: req.body.nombre    	,
  tipo     	: req.body.tipo	,
  etapa     	: req.body.etapa    	,
  conector     	: req.body.conector    	,
  tiempomin     	: req.body.tiempomin    	,
  tiempomax     	: req.body.tiempomax    	,

  camposlectura		: req.body.camposlectura   	,
  camposmodificables	: req.body.camposmodificables   	,
  camposimprime	: req.body.camposimprime   	,
  
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
