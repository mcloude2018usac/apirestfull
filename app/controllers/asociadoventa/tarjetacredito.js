var tarjetacredito = require('../../models/asociadoventa/tarjetacredito');
var Bitacora = require('../../models/bitacora');
var Image = require('../../models/image2');
var functool = require('../../controllers/funcionesnode');
exports.gettarjetacredito = function(req, res, next){
    if(req.params.id4)
    {   
            if(req.params.id2=='todos')
            { 
                tarjetacredito.find({idempresa:req.params.id3,idpapa:req.params.id4}).sort({'_id': -1}).exec(function(err, todos) {
                    if (err){  res.send(err);  }
                     res.json(todos);
                 });
            }
            else
            {
                tarjetacredito.find({idempresa:req.params.id3,estado:req.params.id2,idpapa:req.params.id4}).sort({'_id': -1}).exec(function(err, todos) {
                    if (err){  res.send(err);  }
                     res.json(todos);
                 });
            }
    }
    else
    {
        tarjetacredito.find({_id:req.params.id},function(err, todos) {
            if (err){ res.send(err); }
            if(todos.length>0)   {    res.json(todos);   }
            else
            {  res.status(500).send('NO EXISTE REGISTRO');      }
        });
    }
}
exports.deletetarjetacredito = function(req, res, next){
    Bitacora.create({email: req.params.userID ,permiso:'Elimina',accion:'Elimina tarjetacredito '});
    tarjetacredito.findByIdAndRemove({ _id: req.params.recordID  }, function(err, todo) {
        res.json(todo);
    });
}
exports.creatarjetacredito2s = function(req, res, next){
    Bitacora.create(req.body.bitacora);
if(req.params.recordID!=='crea')
{ 
    tarjetacredito.findById({ _id: req.params.recordID }, function (err, todo)  {
        if (err) {  res.send(err);  }
        else
        {   
 todo.idempresa       	=	req.body.idempresa        	||	todo.idempresa;   
 todo.idpapa       	=	req.body.idpapa        	||	todo.idpapa;   
  todo.tipo     	= req.body.tipo    		||	todo.tipo;  
  todo.banco     	= req.body.banco    		||	todo.banco;   
 todo.nombre       	=	req.body.nombre        	||	todo.nombre;   
 todo.n1       	=	req.body.n1        	||	todo.n1;   
 todo.n2       	=	req.body.n2        	||	todo.n2;   
 todo.n3       	=	req.body.n3        	||	todo.n3;   
 todo.n4       	=	req.body.n4        	||	todo.n4;   
  todo.mes     	= req.body.mes    		||	todo.mes;   
  todo.ano     	= req.body.ano    		||	todo.ano;   
 todo.cvc       	=	req.body.cvc        	||	todo.cvc;   
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
    tarjetacredito.find({nombre        	: req.body.nombre  },function(err, todos) {
        if (err){ res.send(err); }
        if(todos.length>0)   {    res.status(500).send('Ya existe un tarjetacredito en plataforma'); }
        else
        {   
            tarjetacredito.create({ 
  idempresa     	: req.body.idempresa    	,
 idpapa     	: req.body.idpapa    	,
 tipo     	: req.body.tipo    	,
 banco     	: req.body.banco    	,
  nombre     	: req.body.nombre    	,
  n1     	: req.body.n1    	,
  n2     	: req.body.n2    	,
  n3     	: req.body.n3    	,
  n4     	: req.body.n4    	,
  mes     	: req.body.mes    	,
  ano     	: req.body.ano    	,
  cvc     	: req.body.cvc    	,
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
