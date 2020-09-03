
var Formcat = require('../models/formcat');
var Bitacora = require('../models/bitacora');

exports.getFormcat = function(req, res, next){
    if(req.params.id4)
    {  console.log({idunidad:req.params.id2,idempresa:req.params.id3,idunidad2:req.params.id4})
        Formcat.find({idunidad:req.params.id2,idempresa:req.params.id3,idunidad2:req.params.id4},function(err, todos) {
            if (err){ res.send(err); }
           
            if(todos.length>0)   {   

                var myData = [];
                var arre=['yellow','red','green','blue','purple','violet','turquoise']    
                var j=0;
                for(var i = 0; i < todos.length;i++){

                     if(j==6){j=0;} 
                        myData.push({"_id":todos[i]._id,"nombre":todos[i].nombre,"colort":"box " + arre[j]});
                        j=j+1;
                }
                                                        
                



                 res.json(myData);


              }
          
            
        });
    }
    else{
    if(req.params.id3)
    {  
        
        if(req.params.id=='grupo')    {  
            Formcat.find({idunidad:req.params.id2,idempresa:req.params.id3},function(err, todos) {
                if (err){ res.send(err); }
               
                if(todos.length>0)   {   

                    var myData = [];
                    var arre=['yellow','red','green','blue','purple','violet','turquoise']    
                    var j=0;
                    for(var i = 0; i < todos.length;i++){

                         if(j==6){j=0;} 
                            myData.push({"_id":todos[i]._id,"nombre":todos[i].nombre,"colort":"box " + arre[j]});
                            j=j+1;
                    }
                                                            
                    
    
    
    
                     res.json(myData);


                  }
              
                
            });
    
        }
        else
        {

            if(req.params.id=='movil')    {
                Formcat.find({idunidad:req.params.id2,idempresa:req.params.id3},function(err, todos) {
                    if (err){ res.send(err); }
                   
                    if(todos.length>0)   {  
                    
                        var myData2 = [];
                        for(var i = 0; i < todos.length;i++){
                           myData2.push({key:todos[i]._id,label:todos[i].nombre});
                       }
       
                        res.json(myData2);

                       
                    
                    }
                  
                    
                });
    
            }
            else
            {

                Formcat.find({idunidad:req.params.id2,idempresa:req.params.id3},function(err, todos) {


             
                var myData2 = [];
                    for(var i = 0; i < todos.length;i++){
                       myData2.push({id:todos[i]._id,nombre:todos[i].nombre});
                   }
   
                    res.json(myData2);

                  
                    
                });
    
            }  
        
    


        }      
        
    }
    else
    { Formcat.find({_id:req.params.id},function(err, todos) {
           if (err){  res.send(err);  }
            res.json(todos);
        });
    }}
}
exports.deleteFormcat = function(req, res, next){
   
    Bitacora.create({email: req.params.userID ,permiso:'Elimina',accion:'Elimina categoria de formulario '});
    Formcat.findByIdAndRemove({ _id: req.params.recordID }, function(err, todo) {
        res.json({_id:todo._id,nombre:todo.nombre});
    });
}


exports.creaFormcat2s = function(req, res, next){
  
    if(req.params.recordID!=='crea')
    {  Bitacora.create(req.body.bitacora);

      
        Formcat.findById({ _id: req.params.recordID}, function (err, todo)  {
            if (err) {  res.send(err);  }
            else
            {   todo.idempresa       	=	req.body.idempresa        	||	todo.idempresa;  
                todo.idunidad        	=	req.body.idunidad        	||	todo.idunidad;        
                todo.idunidad2        	=	req.body.idunidad2        	||	todo.idunidad2;        		
                todo.nombre        	=	req.body.nombre        	||	todo.nombre        	;
                todo.usuarioup=req.body.bitacora.email;

                todo.save(function (err, todo){
                    if (err)     {  res.status(500).send(err.message)   }
                    res.json({id:todo.id,nombre:todo.nombre});
                    
                });
            }
        });
    
    }
    else{
  
        Formcat.find({idunidad: req.body.idunidad, idunidad2      	: req.body.idunidad2     	, nombre: req.body.nombre},function(err, todos) {
            if (err){ res.send(err); }
          
            if(todos.length>0)   {    res.status(500).send('Ya existe registro'); }
            else
            {   
                            Bitacora.create(req.body.bitacora);
                        Formcat.create({  
                            idempresa      	: req.body.idempresa     	,
                            idunidad      	: req.body.idunidad     	,
                            idunidad2      	: req.body.idunidad2     	,
                            nombre        	: req.body.nombre        	,
                            usuarionew:req.body.bitacora.email 	
                            
                        }       , function(err, todo) {
                            if (err){ 
                            
                                res.status(500).send(err.message)    }
                        
                            res.json({id:todo.id,nombre:todo.nombre});

                        
                            

                        });
            }
        });

}


}



