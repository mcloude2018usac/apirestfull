
var Estudiantepcb =  require('../models/estudiantepcb');


exports.getEstudiantepcb = function(req, res, next){
    if(req.params.codigo)
    { 
        Estudiantepcb.find({ORIENTACION:req.params.codigo},function(err, todos) {
            if (err){ res.send(err); }
        
               res.json(todos);   
         
            
        });
  
    }
    else
    {

    }
    
    
 
}




   
 

 






