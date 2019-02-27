
var Participa3 = require('../models/participa3');
var Bitacora = require('../models/bitacora');

exports.getParticipa3 = function(req, res, next){
    if(req.params.id2)
    {  
       
        Participa3.find({idevento:req.params.id,_id:req.params.id2},function(err, todos) {
            if (err){ res.send(err); }
           
            if(todos.length>0)   {    res.json(todos);   }
            else
            {  res.status(500).send('NO EXISTE REGISTRO');      }
            
        });
    }
    else
    { 
       
        var aa=(req.params.id).split(',')

        Participa3.find({tipo:{$in:aa}}).populate('tipo').exec(function(err, todos) {
           if (err){  res.send(err);  }
            res.json(todos);
        });
    }
}
exports.deleteParticipa3 = function(req, res, next){
   
    Bitacora.create({email: req.params.userID ,permiso:'Elimina',accion:'Elimina Participa3 '});
    Participa3.findByIdAndRemove({ _id: req.params.id  }, function(err, todo) {
        res.json(todo);
    });
}


exports.creaParticipa32s = function(req, res, next){
   
 
  if(req.params.id=='actualiza')
{ 
   

}
else{
    if(req.params.id!=='crea')
    { 
         Bitacora.create(req.body.bitacora);
        Participa3.findById({ _id: req.params.id}, function (err, todo)  {
            if (err) {  res.send(err);  }
            else
            {  
                todo.estado       	=	req.body.estado        	||	todo.estado        	;         
               todo.notamedio        	=	req.body.notamedio        	||	todo.notamedio        	;
               todo.notafin        	=	req.body.notafin        	||	todo.notafin        	;


               todo.save(function (err, todo){
                    if (err)     {  res.status(500).send(err.message)   }
                    res.json(todo);
                });
            }
        });
    
    }
    else{

     console.log(req.body)

                    Bitacora.create(req.body.bitacora);
                  
                Participa3.create({  
                   
                    cui       	: req.body.cui       	,
                    nombre        	: req.body.nombre        	,
                    apellido    	: req.body.apellido    	,
                    telefono 	: req.body.telefono 	,
                    correo    	: req.body.correo   	,
                    tipo 	: req.body.tipo 	, 
                   
                    unidad 	: req.body.unidad 	,
                    motivo 	: req.body.motivo	,
                    f1 	: req.body.f1 	,
                    f2 	: req.body.f2 	,
                    f3 	: req.body.f3 	,
                    estado:'Solicitando requerimiento',
                    notamedio:'',
                    notafin:''           

                }
                    , function(err, todo) {
                    if (err){   res.status(500).send(err.message)    }
                
                    res.json(todo);

                
                    

                });
      
}
}

}





