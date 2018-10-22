
var Facultadmateria = require('../models/facultadmateria');
var Bitacora = require('../models/bitacora');

exports.getFacultadmateria = function(req, res, next){
       if(req.params.id2)
        {  
           
                Facultadmateria.find({idtipounidad :req.params.id,idunidadacademica:req.params.id2},function(err, todos) {
                    if (err){ res.send(err); }
                   
                    if(todos.length>0)   {    res.json(todos);   }
                    else
                    {  res.status(500).send('NO EXISTE REGISTRO');      }
                    
                });
             
           
        }
        else
        { Facultadmateria.find(function(err, todos) {
               if (err){  res.send(err);  }
                res.json(todos);
            });
        }

 
}
exports.deleteFacultadmateria = function(req, res, next){
   
    Bitacora.create({email: req.params.userID ,permiso:'Elimina',accion:'Elimina Facultadmateria '});
    Facultadmateria.findByIdAndRemove({ _id: req.params.recordID  }, function(err, todo) {
        res.json(todo);
    });
}


exports.creaFacultadmateria2s = function(req, res, next){
   
 
    Bitacora.create(req.body.bitacora);
if(req.params.recordID!=='crea')
{ 
    console.log(req.body)
    Facultadmateria.findById({ _id: req.params.recordID }, function (err, todo)  {
        if (err) {  res.send(err);  }
        else
        {  

   
            todo.idtipounidad        	=	req.body.idtipounidad        	||	todo.idtipounidad        	;
            todo.idunidadacademica        	=	req.body.idunidadacademica        	||	todo.idunidadacademica        	;
            todo.lenguaje        	=	req.body.lenguaje        	      	;
            todo.matematica        	=	req.body.matematica            	;
            todo.fisica         	=	req.body.fisica            	;
            todo.biologia        	=	req.body.biologia        	      	;
            todo.quimica        	=	req.body.quimica             	;

            console.log(todo)
            todo.save(function (err, todo){
                if (err)     {  res.status(500).send(err.message)   }
                res.json(todo);
            });
        }
    });

}
else{

  
    
    
    Facultadmateria.find({idtipounidad        	: req.body.idtipounidad        	,
        idunidadacademica: req.body.idunidadacademica
      
        
         },function(err, todos) {
        if (err){ res.send(err); }
      
        if(todos.length>0)   {    res.status(500).send('Ya existe un Facultadmateria con este nombre'); }
        else
        {   

            Facultadmateria.create({
                idtipounidad        	: req.body.idtipounidad        	,
        idunidadacademica: req.body.idunidadacademica,
        lenguaje: req.body.lenguaje,
        matematica: req.body.matematica,
        fisica: req.body.fisica,
        biologia: req.body.biologia,
        quimica: req.body.quimica
        
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



