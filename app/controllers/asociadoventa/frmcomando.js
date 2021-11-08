var frmcomando = require('../../models/asociadoventa/frmcomando');
var frmmovil = require('../../models/frmmovil');

var Bitacora = require('../../models/bitacora');
var Image = require('../../models/image2');

var functool = require('../../controllers/funcionesnode');



exports.getfrmcomando = function(req, res, next){
    if(req.params.id4)
    {   
            if(req.params.id2=='todos')
            { 
                frmcomando.find({idempresa:req.params.id3,idpapa:req.params.id4}).sort({'_id': 1}).exec(function(err, todos) {
                    if (err){  res.send(err);  }
                     res.json(todos);
                 });
            }
            else
            {

                if(req.params.id2=='todosgrupo')
            { 
                frmmovil.find({idempresa:req.params.id3, tipo:'proceso'}).sort({'_id': 1}).exec(function(err, todos10) {
                    if (err){  res.send(err);  }

                frmcomando.find({idempresa:req.params.id3, estado:'Activo'}).sort({'_id': 1}).exec(function(err, todos) {
                    if (err){  res.send(err);  }

                    var myData=[]
                    for(var i = 0; i < todos.length;i++){
                        for(var ii = 0; ii < todos10.length;ii++){
                         
                        if(String(todos10[ii]._id)===todos[i].idpapa)
                        {
                            myData.push({_id:todos[i]._id,nombre:todos[i].nombre + ' (' + todos10[ii].nombre + ')'})
                            break;
                        }    
                        
                    
                        }    
                    }

                     res.json(myData);
                 });
                });
            }
            else
            {
                frmcomando.find({idempresa:req.params.id3,estado:req.params.id2,idpapa:req.params.id4}).sort({'_id': 1}).exec(function(err, todos) {
                    if (err){  res.send(err);  }
                     res.json(todos);
                 });
            }}
    }
    else
    {
        frmcomando.find({_id:req.params.id},function(err, todos) {
            if (err){ res.send(err); }
            if(todos.length>0)   {    res.json(todos);   }
            else
            {  res.status(500).send('NO EXISTE REGISTRO');      }
        });
    }
}
exports.deletefrmcomando = function(req, res, next){
    Bitacora.create({email: req.params.userID ,permiso:'Elimina',accion:'Elimina frmcomando '});
    frmcomando.findByIdAndRemove({ _id: req.params.recordID  }, function(err, todo) {
        res.json(todo);
    });
}
exports.creafrmcomando2s = function(req, res, next){
    Bitacora.create(req.body.bitacora);
    if(req.body.operacion==='creacomandoes')
{ 
   var comandoees= req.body.comandoes.split(';')
   var vector1= [];
   for(var i = 0; i < comandoees.length;i++){    
     vector1.push(  comandoees[i])
   }

   vector1 = vector1.filter(function(e){return e});
            
   var mongoose = require("mongoose");
   let objectIdArray = vector1.map(s => mongoose.Types.ObjectId(s));


                             
   frmcomando.find({idempresa: req.body.idempresa  , _id:{ $in :objectIdArray}}).exec(function(err, todos) {
    if (err){  res.send(err);  }

   

   frmcomandogrupo.find({idempresa: req.body.idempresa  , idpapa:{ $in :vector1}}).exec(function(err, todos2) {
    if (err){  res.send(err);  }
console.log(vector1)

    if(todos.length>0)
    {

        for(var i = 0; i < todos.length;i++){

            crecomandoes(req, res,'' + todos[i]._id,todos2,todos[i].nombre);
           
        

                          

                     
    
        }
        res.json(todos);
    
    }
    else
    { res.json(todos);}

    

   

    });
});
 




}
else{
if(req.params.recordID!=='crea')
{ 
    frmcomando.findById({ _id: req.params.recordID }, function (err, todo)  {
        if (err) {  res.send(err);  }
        else
        {   
 todo.idempresa       	=	req.body.idempresa        	||	todo.idempresa;   
 todo.idpapa       	=	req.body.idpapa        	||	todo.idpapa;   
 todo.nombre       	=	req.body.nombre        	||	todo.nombre; 
 todo.nombre2       	=	req.body.nombre2       ; 
 todo.comando       	=	req.body.comando        	||	todo.comando;   
 
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
    frmcomando.find({nombre        	: req.body.nombre ,comando     	: req.body.comando    	 , idempresa     	: req.body.idempresa  , idpapa     	: req.body.idpapa    	  },function(err, todos) {
        if (err){ res.send(err); }
        if(todos.length>0)   {    res.status(500).send('Ya existe un comando en plataforma'); }
        else
        {   
            frmcomando.create({ 
  idempresa     	: req.body.idempresa    	,
  idpapa     	: req.body.idpapa    	,
  nombre     	: req.body.nombre    	,
  nombre2     	: req.body.nombre2    	,
  comando     	: req.body.comando    	,
  
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
