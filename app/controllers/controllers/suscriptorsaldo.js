
var Suscriptorsaldo = require('../models/suscriptorsaldo');
var Bitacora = require('../models/bitacora');
var Solcarne = require('../models/solcarne');

exports.getSuscriptorsaldo = function(req, res, next){
    if(req.params.id2)
    {   Suscriptorsaldo.find({idsuscriptor:req.params.id,_id:req.params.id2},function(err, todos) {
            if (err){ res.send(err); }
           
            if(todos.length>0)   {    res.json(todos);   }
            else
            {  res.status(500).send('NO EXISTE REGISTRO');      }
            
        });
    }
    else
    { Suscriptorsaldo.find({'idsuscriptor.id':req.params.id},function(err, todos) {
           if (err){  res.send(err);  }
           if(todos.length>0)   {    res.json(todos);   }
           else
           {  res.status(500).send('NO EXISTE REGISTRO');      }
           
        });
    }
}
exports.deleteSuscriptorsaldo = function(req, res, next){
    Bitacora.create({email: req.params.userID ,permiso:'Elimina',accion:'Elimina Suscriptor saldo '});
    Suscriptorsaldo.findByIdAndRemove({ _id: req.params.id  }, function(err, todo) {
        res.json(todo);
    });
}


exports.creaSuscriptorsaldo2s = function(req, res, next){

    if(req.params.id!=='crea')
    {  Bitacora.create(req.body.bitacora);
      // console.log(req.body);

       
        Suscriptorsaldo.findById({ '_id': req.params.id}, function (err, todo)  {
            if (err) {  res.send(err);  }
            else
            {  
               todo.idsuscriptor        	=req.body.idsuscriptor   	;
               todo.saldoactual        	=	req.body.saldoactual        	     	;
                todo.codigo1        	=	req.body.codigo1        		;
                todo.codigo2        	=	req.body.codigo2        	       	;
                todo.codigo3        	=	req.body.codigo3        	       	;
                todo.codigo4        	=	req.body.codigo4        	        	;
                todo.codigo5        	=	req.body.codigo5        	       	;
                todo.dispositivo1        	=	req.body.dispositivo1               	;
                todo.dispositivo2        	=	req.body.dispositivo2        	     	;
                todo.dispositivo3        	=	req.body.dispositivo3        	     	;
                todo.dispositivo4        	=	req.body.dispositivo4             	;
                todo.dispositivo5        	=	req.body.dispositivo5              	;
                todo.usuarioup=req.body.bitacora.email;
                todo.save(function (err, todo){
                    if (err)     {  res.status(500).send(err.message)   }
                    
                    
                    Solcarne.find({'idsuscriptor.id':req.body.idsuscriptor.id,estado:'No entregado'}).exec(function(err, todos10) {
                        if (err){ res.send(err); }
                       
                          
                        
                            Solcarne.findById({ _id:todos10[0]._id }, function (err, todo15)  {
                                if (err) {  res.send(err);  }
                                else
                                {   
                                    var d =new Date().toISOString().substr(0,10);   
                 
                                    todo15.estado    	=	'Disponible'  	;
                                    todo15.nota    	=	'Tu carné ya esta disponible en kiosko ['+d+']'    	;
                                
                                    todo15.save(function (err, todo50){
                                        if (err)     {  res.status(500).send(err.message)   }
                                       
                                    });
                                }
                            });
                           

                    });
                    res.json(todo);
                    
                    
                    
                  
                });
            }
        });
    
    }
    else{
      
        Bitacora.create(req.body.bitacora);
    Suscriptorsaldo.create({  idsuscriptor      	: req.body.idsuscriptor     	,
        saldoactual        	: req.body.saldoactual        	,
        codigo1        	: req.body.codigo1        	,
        codigo2        	: req.body.codigo2        	,
        codigo3        	: req.body.codigo3        	,
        codigo4        	: req.body.codigo4        	,
        codigo5        	: req.body.codigo5        	,
        dispositivo1        	: req.body.dispositivo1        	,
        dispositivo2        	: req.body.dispositivo2        	,
        dispositivo3        	: req.body.dispositivo3        	,
        dispositivo4        	: req.body.dispositivo4        	,
        dispositivo5        	: req.body.dispositivo5        	,
        usuarionew:req.body.bitacora.email 	
       }
        , function(err, todo) {
        if (err){ 
          
            res.status(500).send(err.message)    }
    
             
            Solcarne.find({'idsuscriptor.id':req.body.idsuscriptor.id,estado:'No entregado'}).exec(function(err, todos10) {
                if (err){ res.send(err); }
               
                  
                
                    Solcarne.findById({ _id:todos10[0]._id }, function (err, todo15)  {
                        if (err) {  res.send(err);  }
                        else
                        {            
                            var d =new Date().toISOString().substr(0,10);   
                 
                                  
                            todo15.estado    	=	'Disponible'  	;
                        todo15.nota    	=	'Tu carné ya esta disponible en kiosko ['+d+']'    	;

                        
                            todo15.save(function (err, todo50){
                                if (err)     {  res.status(500).send(err.message)   }
                               
                            });
                        }
                    });
                   

            });
            res.json(todo);
     
        

    });
}


}





