
var Userpost = require('../models/user_post');
var Bitacora = require('../models/bitacora');

exports.getUserpost = function(req, res, next){
    if(req.params.id)
    {   Userpost.find({_id:req.params.id},function(err, todos) {
            if (err){ res.send(err); }
        
            if(todos.length>0)   {    res.json(todos);   }
            else
            {  res.status(500).send('NO EXISTE REGISTRO');      }
            
        });
    }
    else
    {
        Userpost.find({})
        .populate('user')
        .exec(function(err, todos) {
            if (err){  res.send(err);  }
            res.json(todos);
        })
        
      
    }
}


exports.creaUserpost2s = function(req, res, next){
   
 
    //Bitacora.create(req.body.bitacora);
if(req.params.recordID!=='crea')
{ 
    Userpost.findById({ _id: req.params.recordID }, function (err, todo)  {
        if (err) {  res.send(err);  }
        else
        {   
            todo.name        	=	req.body.name        	||	todo.name        	;
            todo.name    	=	req.body.user    	||	todo.user    	;
          
            todo.save(function (err, todo){
                if (err)     {  res.status(500).send(err.message)   }
                res.json(todo);
            });
        }
    });

}
else{

    Userpost.find({name        	: req.body.name},function(err, todos) {
        if (err){ res.send(err); }

        if(todos.length>0)   {    res.status(500).send('Ya existe una tarifa con este nombre'); }
        else
        {   

            Userpost.create({
                name       	: req.body.name        	,
                user 	: req.body.user 	
              
              }
                , function(err, todo) {
                if (err){ 
                
                    res.status(500).send(err.message)    }
            
                res.json(todo);
        
             
                
        
            });

            
             }
        
    });
   
 
}

}



