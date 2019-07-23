
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
//para las impresiones
exports.getEstudiantepcb2 = function(req, res, next){
    if(req.params.codigo)
    { 
        console.log('el resultado')

        Estudiantepcb.find({ORIENTACION:req.params.codigo}).then(todos => {
                   
            if(todos.length==0)
            {
                res.status(500).send('Resultados no existen');  
            }
            else{
                res.json(todos);  
            }
            
          
      })
      .catch(err => {
          res.status(500).send(err.message);  
      })
   


  
    }
    else
    {

    }
    
    
 
}




   
 

 






