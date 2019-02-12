
var Estudianteov = require('../models/estudianteov');


exports.getEstudianteov = function(req, res, next){
    if(req.params.codigo)
    { 
        Estudianteov.find({bo_orientacion:req.params.codigo},function(err, todos) {
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




   
 

 






