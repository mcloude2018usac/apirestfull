
var Carne = require('../models/carne');


exports.getCarne = function(req, res, next){
    if(req.params.codigo)
    { console.log(req.params.codigo)
        Carne.find({carne:req.params.codigo},function(err, todos) {
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




   
 

 






