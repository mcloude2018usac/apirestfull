var Categoria = require('../../models/asociadoventa/categoria');
var Bitacora = require('../../models/bitacora');
var Image = require('../../models/image2');
var functool = require('../../controllers/funcionesnode');

exports.getCategoria = function(req, res, next){
    if(req.params.id4)
    {   
            if(req.params.id=='todos')
            { 
              
                Categoria.find({idempresa:req.params.id3,idpapa:req.params.id4}).sort({'_id': 1}).exec(function(err, todos) {
                    if (err){  res.send(err);  }
                  
                     res.json(todos);
                 });
            }
            else
            {
                Categoria.find({idempresa:req.params.id3,estado:req.params.id2,idpapa:req.params.id4}).sort({'_id': 1}).exec(function(err, todos) {
                    if (err){  res.send(err);  }
                     res.json(todos);
                 });
            }
    }
    else
    {
        Categoria.find({_id:req.params.id},function(err, todos) {
            if (err){ res.send(err); }
            if(todos.length>0)   {    res.json(todos);   }
            else
            {  res.status(500).send('NO EXISTE REGISTRO');      }
        });
    }
}
exports.deleteCategoria = function(req, res, next){
    Bitacora.create({email: req.params.userID ,permiso:'Elimina',accion:'Elimina Categoria '});
    Categoria.findByIdAndRemove({ _id: req.params.recordID  }, function(err, todo) {
        var arra = functool.getImagesruta (todo.foto);
        if(arra == '' || arra=='5f146aa48caa41db981e6830')  { res.json(todo);    }      else       {
            Image.findByIdAndRemove(arra, function(err, todo10) {      res.json(todo);    });
        }  
       

       
    });
}
exports.creaCategoria2s = function(req, res, next){
    Bitacora.create(req.body.bitacora);
if(req.params.recordID!=='crea')
{ 
    Categoria.findById({ _id: req.params.recordID }, function (err, todo)  {
        if (err) {  res.send(err);  }
        else
        {   
 todo.idempresa       	=	req.body.idempresa        	||	todo.idempresa;   
 todo.idpapa       	=	req.body.idpapa        	||	todo.idpapa;   
 todo.nombre       	=	req.body.nombre        	||	todo.nombre;   
 todo.descripcion       	=	req.body.descripcion        	||	todo.descripcion;   
 todo.foto       	=	req.body.foto        	||	todo.foto;  
 todo.estado	=	req.body.estado        	||	todo.estado;    
            todo.usuarioup=req.body.bitacora.email;
            todo.save(function (err, todo){
                if (err)     {  res.status(500).send(err.message)   }
                res.json(todo);
            });
        }
    });
}
else{
    Categoria.find({nombre        	: req.body.nombre  },function(err, todos) {
        if (err){ res.send(err); }
        if(todos.length>0)   {    res.status(500).send('Ya existe un categoria en plataforma'); }
        else
        {   
            Categoria.create({ 
  idempresa     	: req.body.idempresa    	,
  idpapa     	: req.body.idpapa    	,
  nombre     	: req.body.nombre    	,
  descripcion     	: req.body.descripcion    	,
  foto     	: req.body.foto    	,
  estado	: req.body.estado	,
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
