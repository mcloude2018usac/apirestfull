
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
        if(req.params.id)
        {
            console.log({_id: req.params.id})
         User.findById({_id: req.params.id})
         .then(todo => {
         console.log('encuentra')
             todo.estadoemail       	=	'1'        	;
                
             todo.save(function (err, todo){
                if (err)     {console.log(err.message);  res.status(500).send(err.message)   }
                console.log('cambio')
                res.redirect('https://usac-enlinea.web.app/');
            });
             
         })
         .catch(err => {
            console.log(err.message);
             res.status(500).send(err.message);  
         })
 
        }
        else
        {
            console.log(err.message);
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
                if (err)     { console.log(err.message); res.status(500).send(err.message)   }
                res.type('txt').send('Not found');
                res.send({ content: 'Success'});
            });
            
        })
        .catch(err => {
            console.log(err.message);
            res.status(500).send('error en autorización, por favor borre cookies de su navegador');  
        })

       }
       else
       {
        console.log(err.message);
        res.status(500).send(err.message);  

       } 
       



       
    }
    else{
        res.send('incorrecto.......................'); 
      }
  


}





