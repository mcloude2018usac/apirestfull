var frmacciones = require('../../models/asociadoventa/frmacciones');
var Bitacora = require('../../models/bitacora');
var Image = require('../../models/image2');
var functool = require('../../controllers/funcionesnode');


var frmactividad = require('../../models/asociadoventa/frmactividad');

var frmactoractividad = require('../../models/asociadoventa/frmactorgrupo');

exports.getfrmacciones = function(req, res, next){
    if(req.params.id4)
    {   
        if(req.params.id2=='accionproceso')
        { 
          
            frmacciones.find({idempresa:req.params.id3,idpapa0:req.params.id4}).sort({'orden': 1}).exec(function(err, todos50) {
                if (err){  res.send(err);  }

                res.json(todos50);   


              
             });
        }
        else
        {
        if(req.params.id2=='accionproceso2')
        { 
          

        
                   
        
                    frmactoractividad.find({idempresa:req.params.id3,idpapa0:req.params.id4 }).sort({'orden': 1}).exec(function(err, todos10) {
                        if (err){  res.send(err);  }
        
                     
                        res.json(todos10);  
                   
                      
                    });
        
                   
        


        }
        else
        {

            if(req.params.id2=='todos')
            { 
                frmacciones.find({idempresa:req.params.id3,idpapa:req.params.id4}).sort({'_id': -1}).exec(function(err, todos) {
                    if (err){  res.send(err);  }
                     res.json(todos);
                 });
            }
            else
            {

                if(req.params.id2==='orden')
                {
                    frmacciones.find({idempresa:req.params.id3,idpapa:req.params.id4}).sort({'_id': -1}).exec(function(err, todos) {
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
                    frmacciones.find({idempresa:req.params.id3,idpapa:req.params.id4}).sort({'_id': -1}).exec(function(err, todos) {
                        if (err){  res.send(err);  }
                         res.json(todos);
                     });
                }


            }}}
    }
    else
    {
        frmacciones.find({_id:req.params.id},function(err, todos) {
            if (err){ res.send(err); }
            if(todos.length>0)   {    res.json(todos);   }
            else
            {  res.status(500).send('NO EXISTE REGISTRO');      }
        });
    }
}
exports.deletefrmacciones = function(req, res, next){
    Bitacora.create({email: req.params.userID ,permiso:'Elimina',accion:'Elimina frmacciones '});
    frmacciones.findByIdAndRemove({ _id: req.params.recordID  }, function(err, todo) {
        res.json(todo);
    });
}
exports.creafrmacciones2s = function(req, res, next){
    Bitacora.create(req.body.bitacora);
if(req.params.recordID!=='crea')
{ 
    frmacciones.findById({ _id: req.params.recordID }, function (err, todo)  {
        if (err) {  res.send(err);  }
        else
        {   
 
  
 todo.orden       	=	req.body.orden        	||	todo.orden;   
 todo.tipo       	=	req.body.tipo        	||	todo.tipo;
 todo.mandacorreo	=	req.body.mandacorreo  ;
 todo.ejecuta       	=	req.body.ejecuta        ;   
 todo.descripciong	= req.body.descripciong	,
 todo.ejecutainicio       	=	req.body.ejecutainicio      ;   
 todo.subtipo       	=	req.body.subtipo        	||	todo.subtipo;   
 todo.nombre       	=	req.body.nombre        	||	todo.nombre;   
 todo.estado       	=	req.body.estado        	||	todo.estado;   
 todo.actividadsiguiente       	=	req.body.actividadsiguiente        	||	todo.actividadsiguiente;   
 todo.notificacionmsm       	=	req.body.notificacionmsm        	||	todo.notificacionmsm;   
 todo.notificacionemail       	=	req.body.notificacionemail        	||	todo.notificacionemail;   
            todo.usuarioup=req.body.bitacora.email;
            todo.save(function (err, todo){
                if (err)     {  res.status(500).send(err.message)   }
                res.json(todo);
            });
        }
    });
}
else{
    frmacciones.find({nombre        	: req.body.nombre ,idpapa     	: req.body.idpapa ,   idpapa0     	: req.body.idpapa0    },function(err, todos) {
        if (err){ res.send(err); }
        if(todos.length>0)   {    res.status(500).send('Ya existe una accion en plataforma'); }
        else
        {   
            frmacciones.create({ 
  idempresa     	: req.body.idempresa    	,
  idpapa     	: req.body.idpapa    	,
  idpapa0     	: req.body.idpapa0    	,
  orden     	: req.body.orden    	,
  tipo     	: req.body.tipo    	,
  mandacorreo	: req.body.mandacorreo	,
  ejecuta     	: req.body.ejecuta    	,
  ejecutainicio     	: req.body.ejecutainicio    	,
  subtipo     	: req.body.subtipo    	,
  nombre     	: req.body.nombre    	,
  estado     	: req.body.estado    	,
  actividadsiguiente     	: req.body.actividadsiguiente    	,
  notificacionmsm     	: req.body.notificacionmsm    	,
  descripciong	: req.body.descripciong	,
  notificacionemail     	: req.body.notificacionemail    	,
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
