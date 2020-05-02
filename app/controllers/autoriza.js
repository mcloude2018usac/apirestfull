
var User = require('../models/user');
var mongoose = require('mongoose');


exports.getAutoriza = function(req, res, next){
   // res.type('txt').send('Not found');
    //res.send('echo');
  if(req.params.id)
  {
      if(mongoose.Types.ObjectId.isValid(req.params.id))
      {
        console.log( req.params)
        if(req.params.recordID)
        {
         User.findById({_id: req.params.recordID})
         .then(todo => {
         
             todo.estadoemail       	=	'1'        	;
                
             todo.save(function (err, todo){
                if (err)     {  res.status(500).send(err.message)   }
                res.redirect('https://usac-enlinea.web.app/');
            });
             
         })
         .catch(err => {
             res.status(500).send(err.message);  
         })
 
        }
        else
        {
            res.status(500).send('error en autorización, por favor borre cookies de su navegador');  
 
        } 



        

      }
      else{
        res.send('incorrecto.......................'); 
      }
  

}
}

exports.creaAutorizar = function(req, res, next){
    if(mongoose.Types.ObjectId.isValid(req.params.id))
    {
        console.log( req.params)
       if(req.params.recordID)
       {
        User.findById({_id: req.params.recordID})
        .then(todo => {
        
            todo.estadoemail       	=	'1'        	;
               
            todo.save(function (err, todo){
                if (err)     {  res.status(500).send(err.message)   }
                res.type('txt').send('Not found');
                res.send({ content: 'Success'});
            });
            
        })
        .catch(err => {
            res.status(500).send('error en autorización, por favor borre cookies de su navegador');  
        })

       }
       else
       {
        res.status(500).send(err.message);  

       } 
       



       
    }
    else{
        res.send('incorrecto.......................'); 
      }
  


}





