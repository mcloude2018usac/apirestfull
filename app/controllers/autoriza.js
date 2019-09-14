
var User = require('../models/user');
var mongoose = require('mongoose');


exports.getAutoriza = function(req, res, next){
   // res.type('txt').send('Not found');
    //res.send('echo');
  if(req.params.id)
  {
      if(mongoose.Types.ObjectId.isValid(req.params.id))
      {
        User.findById({_id: req.params.id}, function (err, todo)  {
            if (err) {  res.send(err);  }
            else
            {  
                
                todo.estadoemail       	=	'1'        	;
               
                todo.save(function (err, todo){
                    if (err)     {  res.status(500).send(err.message)   }
                    res.redirect('https://usac-enlinea.web.app/');
                });
            }
        });

      }
      else{
        res.send('incorrecto.......................'); 
      }
  

}
}

exports.creaAutorizar = function(req, res, next){
    if(mongoose.Types.ObjectId.isValid(req.params.id))
    {
        User.findById({_id: req.params.recordID}, function (err, todo)  {
            if (err) {  res.send(err);  }
            else
            {  
                
                todo.estadoemail       	=	'1'        	;
               
                todo.save(function (err, todo){
                    if (err)     {  res.status(500).send(err.message)   }
                    res.type('txt').send('Not found');
                    res.send({ content: 'Success'});
                });
            }
        });
    }
    else{
        res.send('incorrecto.......................'); 
      }
  


}





