
var Estudiantepcb =  require('../models/estudiantepcb');


exports.getEstudiantepcb = function(req, res, next){
    if(req.params.codigo)
    { 

        Estudiantepcb.find({ORIENTACION:req.params.codigo}).then(todos => {
         
                res.json(todos);  
            
            
          
      })
      .catch(err => {
          res.status(500).send(err.message);  
      })
   


  
    }
    else
    {

    }
    
    
 
}




   
 

 






