
var Calusaccosto = require('../../models/calusac/calusaccosto');
var Bitacora = require('../../models/bitacora');

exports.getCalusaccosto = function(req, res, next){

    if(req.params.id2)
    {  

          if(req.params.id2=='tipo')
          {
            Calusaccosto.find({tipo:req.params.id}, null, {sort: {codigo: 1}},function(err, todos) {
                if (err){  res.send(err);  }
                 res.json(todos);
             });

          }
          else{
            Calusaccosto.find({}, null, {sort: {codigo: 1}},function(err, todos) {
                if (err){  res.send(err);  }
                 res.json(todos);
             });

          }
  

    }
    else
    {

        if(req.params.id)
        {  
           
                Calusaccosto.find({_id:req.params.id}
                    ,null, {sort: {tipo: 1}},function(err, todos) {
                    if (err){ res.send(err); }
                   
                    if(todos.length>0)   {    res.json(todos);   }
                    else
                    {  res.status(500).send('NO EXISTE REGISTRO');      }
                    
                });
             
           
        }
    }
      
       

 
}
exports.deleteCalusaccosto = function(req, res, next){
   
    Bitacora.create({email: req.params.userID ,permiso:'Elimina',accion:'Elimina Calusaccosto '});
    Calusaccosto.findByIdAndRemove({ _id: req.params.recordID  }, function(err, todo) {
        res.json(todo);
    });
}


exports.creaCalusaccosto2s = function(req, res, next){
   
 
    Bitacora.create(req.body.bitacora);
if(req.params.recordID!=='crea')
{  
    Calusaccosto.findById({ _id: req.params.recordID }, function (err, todo)  {
        if (err) {  res.send(err);  }
        else
        {  
            todo.nombre        	=	req.body.nombre        	||	todo.nombre        	;
            todo.tipo       	=	req.body.tipo        	||	todo.tipo        	;
            todo.codigo       	=	req.body.codigo        	||	todo.codigo        	;
      
            todo.estado        	=	req.body.estado        	||	todo.estado        	;
            todo.costo        	=	req.body.costo        	||	todo.costo        	;
            todo.usuarioup=req.body.bitacora.email;
            
          
            todo.save(function (err, todo){
                if (err)     {  res.status(500).send(err.message)   }
                res.json(todo);
            });
        }
    });

}
else{

    Calusaccosto.find({codigo:req.body.codigo  },function(err, todos) {
        if (err){ res.send(err); }
      
        if(todos.length>0)   {    res.status(500).send('Codigo ya existe'); }
        else
        {   

            Calusaccosto.create({
                tipo        	: req.body.tipo       	,
                nombre        	: req.body.nombre        	,
                codigo        	: req.body.codigo   ,
                estado        	: req.body.estado     ,
                costo        	: req.body.costo     ,
                usuarionew:req.body.bitacora.email   
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



