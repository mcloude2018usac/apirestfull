
var Unidadperiodo3 = require('../../models/calusac/unidadperiodo3');
var Bitacora = require('../../models/bitacora');

exports.getUnidadperiodo3 = function(req, res, next){
    if(req.params.id4)
    { 

        if(req.params.id4=='todosver')
        { 
            Unidadperiodo3.find({idtipounidad :req.params.id2,idunidadacademica:req.params.id3},function(err, todos) {
                if (err){  res.send(err);  }
                 res.json(todos);
             });
        }
        else{

            Unidadperiodo3.find({},function(err, todos) {
                if (err){ res.send(err); }
               
                var unique =   todos.filter( onlyUnique );
                  
                var myData2 = [];
                              for(var i = 0; i < unique.length;i++){
                                 myData2.push({nombre:unique[i].nombre});
                             }
             
                              res.json(myData2);
              
    
                
            });
        }
      

    }
    else{

        if(req.params.id)
        {  
           
                Unidadperiodo3.find({_id :req.params.id},function(err, todos) {
                    if (err){ res.send(err); }
                   
                  res.json(todos);  
                   
                    
                });
             
           
        }
        else
        { Unidadperiodo3.find({idtipounidad :req.params.id2,idunidadacademica:req.params.id3,estado:'Activo'},function(err, todos) {
               if (err){  res.send(err);  }
                res.json(todos);
            });
        }

    }
      

 
}
exports.deleteUnidadperiodo3 = function(req, res, next){
   
    Bitacora.create({email: req.params.userID ,permiso:'Elimina',accion:'Elimina Edificio '});
    Unidadperiodo3.findByIdAndRemove({ _id: req.params.recordID  }, function(err, todo) {
        res.json(todo);
    });
}


exports.creaUnidadperiodo32s = function(req, res, next){
   
 
    Bitacora.create(req.body.bitacora);
if(req.params.recordID!=='crea')
{
    Unidadperiodo3.findById({ _id: req.params.recordID }, function (err, todo)  {
        if (err) {  res.send(err);  }
        else
        {  

   
            todo.idtipounidad        	=	req.body.idtipounidad        	||	todo.idtipounidad        	;
            todo.idunidadacademica        	=	req.body.idunidadacademica        	||	todo.idunidadacademica        	;
            todo.codigo        	=	req.body.codigo        	      	;
            todo.ano        	=	req.body.ano        	      	;
            todo.nombre        	=	req.body.nombre        	      	;
            todo.estado        	=	req.body.estado        	      	;
            todo.usuarioup=req.body.bitacora.email;
            
            todo.save(function (err, todo){
                if (err)     {  res.status(500).send(err.message)   }
                res.json(todo);
            });
        }
    });

}
else{

  
    console.log({req  })
    
    Unidadperiodo3.find({'idtipounidad.id'        	: req.body.idtipounidad       
     	,  'idunidadacademica.id': req.body.idunidadacademica, nombre: req.body.nombre, ano: req.body.ano
      
        
         },function(err, todos) {
        if (err){ res.send(err); }
      
        if(todos.length>0)   {    res.status(500).send('Ya existe un periodo con esta configuración :' + req.body.nombre); }
        else
        {   

            Unidadperiodo3.create({
            idtipounidad        	: req.body.idtipounidad        	,
            idunidadacademica: req.body.idunidadacademica,
            codigo: req.body.codigo,
            ano: req.body.ano,
            nombre: req.body.nombre,
            estado: req.body.estado,
            usuarionew:req.body.bitacora.email
        
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



