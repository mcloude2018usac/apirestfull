
var Marketemail = require('../models/marketemail');
var Bitacora = require('../models/bitacora');

//db.getCollection('carnes').find({ correo: {  $ne: null }}).count()

exports.getMarketemail = function(req, res, next){
    if(req.params.id2)
    {  
       if(req.params.id2=='todo')
       {

        Marketemail.find({idempresa:req.params.id}).populate('grupo').exec(function(err, todos) {
            if (err){ res.send(err); }
           
            res.json(todos);   
            
        });
       }
       
    }
    else
    { 
       
       

        Marketemail.find({}).populate('grupo').exec(function(err, todos) {
           if (err){  res.send(err);  }
            res.json(todos);
        });
    }
}
exports.deleteMarketemail = function(req, res, next){
   
    Bitacora.create({email: req.params.userID ,permiso:'Elimina',accion:'Elimina Marketemail '});
    Marketemail.findByIdAndRemove({ _id: req.params.id  }, function(err, todo) {
        res.json(todo);
    });
}


exports.creaMarketemail2s = function(req, res, next){
   
 
  if(req.params.id=='actualiza')
{ 
   

}
else{
    if(req.params.id!=='crea')
    { 
         Bitacora.create(req.body.bitacora);
        Marketemail.findById({ _id: req.params.id}, function (err, todo)  {
            if (err) {  res.send(err);  }
            else
            {  todo.nombre       	=	req.body.nombre        	||	todo.nombre        	;         
               todo.titulo       	=	req.body.titulo        	||	todo.titulo        	;         
               todo.texto        	=	req.body.texto        	||	todo.texto        	;
               todo.f1        	=	req.body.f1        	||	todo.f1       	;
               todo.f2        	=	req.body.f2        	||	todo.f2        	;
               todo.fecha        	=	req.body.fecha        	||	todo.fecha       	;
               todo.grupo        	=	req.body.grupo        	||	todo.grupo       	;
               todo.estado        	=	req.body.estado       	||	todo.estado        	;

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
                  
                Marketemail.create({  
                    idempresa       	: req.body.idempresa       	,
                    nombre       	: req.body.nombre       	,
                    titulo       	: req.body.titulo       	,
                    texto    	: req.body.texto    	,
                    fecha 	: req.body.fecha 	,
                    grupo 	: req.body.grupo 	,
                    f1 	: req.body.f1 	,
                    f2 	: req.body.f2 	,
                    estado:req.body.estado

                }
                    , function(err, todo) {
                    if (err){   res.status(500).send(err.message)  
                    console.log(err.message)  }
                
                    res.json(todo);

                
                    

                });
      
}
}

}




