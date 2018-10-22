
var Estudiantevt = require('../models/estudiantevt');
var Bitacora = require('../models/bitacora');

exports.getEstudiantevt = function(req, res, next){
    if(req.params.codigo)
    { 
        Estudiantevt.find({carnet:req.params.codigo},function(err, todos) {
            if (err){ res.send(err); }
        
            if(todos.length>0)   {    res.json(todos);   }
            else
            {  res.status(500).send('NO EXISTE REGISTRO');      }
            
        });
  
    }
    else
    {

    }
    
    
 
}



exports.creaEstudiantevts = function(req, res, next){
   
 
    Bitacora.create(req.body.bitacora);
if(req.params.recordID!=='crea')
{ 
    Estudiantevt.findById({ _id: req.params.recordID }, function (err, todo)  {
        if (err) {  res.send(err);  }
        else
        {  
            todo.carnet        	=	req.body.carnet        	||	todo.carnet        	;
            todo.nombre        	=	req.body.nombre        	||	todo.nombre        	;
            
            todo.save(function (err, todo){
                if (err)     {  res.status(500).send(err.message)   }
                res.json(todo);
            });
        }
    });

}
else{

    Estudiantevt.find({carnet:req.body.carnet },function(err, todos) {
        if (err){ res.send(err); }
      
        if(todos.length>0)   {    res.status(500).send('Ya existe estudiante'); }
        else
        {   

            Estudiantevt.create({
                carnet        	: req.body.carnet        	,
                nombre        	: req.body.nombre        
              }
                , function(err, todo) {
                if (err){ 
                   
                    res.status(500).send(err.message)    }
            
                res.json(todo);
        
             
                
        
            });

            
             }
        
    });
   
 
}}




   
 

 






