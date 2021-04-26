
var Carne = require('../models/carne');


exports.getCarne = function(req, res, next){

    
    if(req.params.id)
    { 
        Carne.find({cui:req.params.codigo},function(err, todos) {
            if (err){ res.send(err); }
        
            if(todos.length>0)   {    res.json(todos);   }
            else
            { res.status(404).send('NO EXISTE REGISTRO')     }
            
        });
  
    }
    else
    {

        if(req.params.codigo)
        { 
            Carne.find({carne:req.params.codigo},function(err, todos) {
                if (err){ res.send(err); }
            
                if(todos.length>0)   {    res.json(todos);   }
                else
                {  res.status(404).send('NO EXISTE REGISTRO');      }
                
            });
      
        }
        else
        {
    
        }
    

    }
    

    
    
 
}




   
 

 






