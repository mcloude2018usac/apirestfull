
var Formcat = require('../models/formcat');
var Bitacora = require('../models/bitacora');

exports.getFormcat = function(req, res, next){
    if(req.params.id2)
    {  
        
        if(req.params.id=='grupo')    {  
            Formcat.find({idunidad:req.params.id2},function(err, todos) {
                if (err){ res.send(err); }
               
                if(todos.length>0)   {   

                    var myData = [];
                    var arre=['yellow','red','green','blue','purple','violet','turquoise']    
                    var j=0;
                    for(var i = 0; i < todos.length;i++){

                         if(j==6){j=0;} 
                            myData.push({"_id":"5c7d3c3131b6300e184bc270","nombre":todos[i].nombre,"colort":"box " + arre[j]});
                            j=j+1;
                    }
                                                            
                    
    
    
    
                     res.json(myData);


                  }
              
                
            });
    
        }
        else
        {

        
            Formcat.find({idunidad:req.params.id2},function(err, todos) {
                if (err){ res.send(err); }
               
                if(todos.length>0)   {    res.json(todos);   }
              
                
            });
    


        }      
        
    }
    else
    { Formcat.find({_id:req.params.id},function(err, todos) {
           if (err){  res.send(err);  }
            res.json(todos);
        });
    }
}
exports.deleteFormcat = function(req, res, next){
   
    Bitacora.create({email: req.params.userID ,permiso:'Elimina',accion:'Elimina categoria de formulario '});
    Formcat.findByIdAndRemove({ _id: req.params.recordID }, function(err, todo) {
        res.json(todo);
    });
}


exports.creaFormcat2s = function(req, res, next){
  
    if(req.params.recordID!=='crea')
    {  Bitacora.create(req.body.bitacora);

        console.log()
        Formcat.findById({ _id: req.params.recordID}, function (err, todo)  {
            if (err) {  res.send(err);  }
            else
            {  
                todo.idunidad        	=	req.body.idunidad        	||	todo.idunidad;        	;
                todo.nombre        	=	req.body.nombre        	||	todo.nombre        	;
                todo.usuarioup=req.body.bitacora.email;

                todo.save(function (err, todo){
                    if (err)     {  res.status(500).send(err.message)   }
                    res.json(todo);
                });
            }
        });
    
    }
    else{
  
        Formcat.find({idunidad: req.body.idunidad, nombre: req.body.nombre},function(err, todos) {
            if (err){ res.send(err); }
          
            if(todos.length>0)   {    res.status(500).send('Ya existe registro'); }
            else
            {   
                            Bitacora.create(req.body.bitacora);
                        Formcat.create({  idunidad      	: req.body.idunidad     	,
                            nombre        	: req.body.nombre        	,
                            usuarionew:req.body.bitacora.email 	
                            
                        }       , function(err, todo) {
                            if (err){ 
                            
                                res.status(500).send(err.message)    }
                        
                            res.json(todo);

                        
                            

                        });
            }
        });

}


}



