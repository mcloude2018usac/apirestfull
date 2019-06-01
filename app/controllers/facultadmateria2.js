
var Facultadmateria2 = require('../models/facultadmateria2');
var Bitacora = require('../models/bitacora');

exports.getFacultadmateria2 = function(req, res, next){
       if(req.params.id2)
        {  
           
                Facultadmateria2.find({idtipounidad :req.params.id,idunidadacademica:req.params.id2},function(err, todos) {
                    if (err){ res.send(err); }
                   
                    if(todos.length>0)   {    res.json(todos);   }
                    else
                    {  res.status(500).send('NO EXISTE REGISTRO');      }
                    
                });
             
           
        }
        else
        { Facultadmateria2.find(function(err, todos) {
               if (err){  res.send(err);  }
                res.json(todos);
            });
        }

 
}
exports.deleteFacultadmateria2 = function(req, res, next){
   
    Bitacora.create({email: req.params.userID ,permiso:'Elimina',accion:'Elimina Facultadmateria2 '});
    Facultadmateria2.findByIdAndRemove({ _id: req.params.recordID  }, function(err, todo) {
        res.json(todo);
    });
}


exports.creaFacultadmateria22s = function(req, res, next){
   
 
    Bitacora.create(req.body.bitacora);
if(req.params.recordID!=='crea')
{ 
 
    Facultadmateria2.findById({ _id: req.params.recordID }, function (err, todo)  {
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
            todo.usuarioup=req.body.bitacora.email;

       
            todo.save(function (err, todo){
                if (err)     {  res.status(500).send(err.message)   }
                res.json(todo);
            });
        }
    });

}
else{

  
    
    
    Facultadmateria2.find({idtipounidad        	: req.body.idtipounidad        	,
        idunidadacademica: req.body.idunidadacademica
      
        
         },function(err, todos) {
        if (err){ res.send(err); }
      
        if(todos.length>0)   {    res.status(500).send('Ya existe un Facultadmateria2 con este nombre'); }
        else
        {   

            Facultadmateria2.create({
                idtipounidad        	: req.body.idtipounidad        	,
        idunidadacademica: req.body.idunidadacademica,
        lenguaje: req.body.lenguaje,
        matematica: req.body.matematica,
        fisica: req.body.fisica,
        biologia: req.body.biologia,
        quimica: req.body.quimica,
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



