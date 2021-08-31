var formulariofotos2 = require('../../models/asociadoventa/formulariofotos2');
var Bitacora = require('../../models/bitacora');
var Image = require('../../models/image2');
var functool = require('../../controllers/funcionesnode');
exports.getformulariofotos2 = function(req, res, next){
    if(req.params.id4)
    {   
            if(req.params.id2=='todos')
            { 
                formulariofotos2.find({idempresa:req.params.id3,idpapa:req.params.id4}).sort({'_id': -1}).exec(function(err, todos) {
                    if (err){  res.send(err);  }
                     res.json(todos);
                 });
            }
            else
            {
                formulariofotos2.find({idempresa:req.params.id3,estado:req.params.id2,idpapa:req.params.id4}).sort({'_id': -1}).exec(function(err, todos) {
                    if (err){  res.send(err);  }
                     res.json(todos);
                 });
            }
    }
    else
    {
        formulariofotos2.find({_id:req.params.id},function(err, todos) {
            if (err){ res.send(err); }
            if(todos.length>0)   {    res.json(todos);   }
            else
            {  res.status(500).send('NO EXISTE REGISTRO');      }
        });
    }
}
exports.deleteformulariofotos2 = function(req, res, next){
    Bitacora.create({email: req.params.userID ,permiso:'Elimina',accion:'Elimina formulariofotos2 '});
    formulariofotos2.findByIdAndRemove({ _id: req.params.recordID  }, function(err, todo) {
        res.json(todo);
    });
}
exports.creaformulariofotos22s = function(req, res, next){
    Bitacora.create(req.body.bitacora);
if(req.params.recordID!=='crea')
{ 
    formulariofotos2.findById({ _id: req.params.recordID }, function (err, todo)  {
        if (err) {  res.send(err);  }
        else
        {   
  
 todo.nombre       	=	req.body.nombre        	||	todo.nombre;   
 todo.foto       	=	req.body.foto        	||	todo.foto;   
 todo.actividad=req.body.actividad;
            todo.usuarioup=req.body.bitacora.email;
            todo.nombrealiasup=req.body.nombrealias;
            todo.save(function (err, todo){
                if (err)     {  res.status(500).send(err.message)   }
                res.json(todo);
            });
        }
    });
}
else{
    formulariofotos2.find(
        { idempresa     	: "9999"
        //    req.body.idempresa    	,
        // idpapa     	: req.body.idpapa    	, 
        },function(err, todos) {
        if (err){ res.send(err); }
        if(todos.length>0)   {    res.status(500).send('Ya existe un formulariofotos2 en plataforma'); }
        else
        {   
            formulariofotos2.create({ 
  idempresa     	: req.body.idempresa    	,
  idpapa     	: req.body.idpapa    	,
  nombre     	: req.body.nombre    	,
  nombrealiasnew	: req.body.nombrealias	,
  actividad	: req.body.actividad    	,
  foto     	: req.body.foto    	,
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
