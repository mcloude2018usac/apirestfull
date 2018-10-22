
var User = require('../models/user');


exports.getAutoriza = function(req, res, next){
   // res.type('txt').send('Not found');
    //res.send('echo');
  if(req.params.id)
  {
    User.findById({_id: req.params.id}, function (err, todo)  {
        if (err) {  res.send(err);  }
        else
        {  
            
            todo.estadoemail       	=	'1'        	;
           
            todo.save(function (err, todo){
                if (err)     {  res.status(500).send(err.message)   }
                res.redirect('http://usacenlinea.net');
            });
        }
    });

}
}

exports.creaAutorizar = function(req, res, next){
    console.log( req.params.recordID)
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





