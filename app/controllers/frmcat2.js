
var Formcat2 = require('../models/frmcat2');
var Bitacora = require('../models/bitacora');

exports.getFormcat2 = function(req, res, next){

    if(req.params.id3)
    {
       
        Formcat2.find({idformulario:req.params.id,idunidad:req.params.id2,idempresa:req.params.id3},function(err, todos) {
            if (err){ res.send(err); }
           
            if(todos.length>0)   {    res.json(todos);   }
          
            
        });


    }
    else
    {

        Formcat2.find({idformulario:req.params.id},function(err, todos) {
            if (err){ res.send(err); }
           
            if(todos.length>0)   {    res.json(todos);   }
          
            
        });

    }
        

}
exports.deleteFormcat2 = function(req, res, next){
   
    Bitacora.create({email: req.params.userID ,permiso:'Elimina',accion:'Elimina categoria de formulario '});
    Formcat2.findByIdAndRemove({ _id: req.params.recordID }, function(err, todo) {
        res.json(todo);
    });
}


exports.creaFormcat22s = function(req, res, next){
  
    if(req.params.recordID!=='crea')
    {  Bitacora.create(req.body.bitacora);

        Formcat2.findById({ _id: req.params.recordID}, function (err, todo)  {
            if (err) {  res.send(err);  }
            else
            {   todo.idempresa       	=	req.body.idempresa        	||	todo.idempresa;        	
                todo.idformulario       	=	req.body.idformulario        	||	todo.idformulario;        	
                todo.idunidad        	=	req.body.idunidad        	||	todo.idunidad;        	
                todo.nombre        	=	req.body.nombre        	||	todo.nombre        	;
                todo.usuarioup=req.body.bitacora.email;

                todo.save(function (err, todo){
                    if (err)     {  res.status(500).send(err.message)   }
                    res.json(todo);
                });
            }
        });
    
    }
    else{
  
        Formcat2.find({idunidad: req.body.idunidad, nombre: req.body.nombre},function(err, todos) {
            if (err){ res.send(err); }
          
            if(todos.length>0)   {    res.status(500).send('Ya existe registro'); }
            else
            {   
                            Bitacora.create(req.body.bitacora);
                        Formcat2.create({ 
                            idempresa      	: req.body.idempresa     	,
                            idformulario      	: req.body.idformulario     	,
                            idunidad      	: req.body.idunidad     	,
                            nombre        	: req.body.nombre        	,
                            usuarionew:req.body.bitacora.email 	
                            
                        }       , function(err, todo) {
                            if (err){ 
                            
                                res.status(500).send(err.message)    }
                        
                            res.json(todo);

                        
                            

                        });
            }
        });

}


}



