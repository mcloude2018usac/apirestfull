
var Unidadpago3 = require('../../models/calusac/unidadpago3');
var Bitacora = require('../../models/bitacora');

exports.getUnidadpago3 = function(req, res, next){
       if(req.params.id5)
        {  
           
            if(req.params.id5=='tipo')
            {
                Unidadpago3.find({idtipounidad :req.params.id2,idunidadacademica:req.params.id3,tipo:req.params.id4},function(err, todos) {
                    if (err){  res.send(err);  }
                     res.json(todos);
                 });
    

            }
            else
            {
                if(req.params.id5=='todos')
            {  console.log({idtipounidad :req.params.id2,idunidadacademica:req.params.id3})
                Unidadpago3.find({idtipounidad :req.params.id2,idunidadacademica:req.params.id3},function(err, todos) {
                    if (err){  res.send(err);  }
                     res.json(todos);
                 });
                    
            }
            }
           
        }
        else
        {
            
            
            Unidadpago3.find({_id :req.params.id},function(err, todos) {
                if (err){ res.send(err); }
               
                if(todos.length>0)   {    res.json(todos);   }
                else
                {  res.status(500).send('NO EXISTE REGISTRO');      }
                
            });
            
        }

 
}
exports.deleteUnidadpago3 = function(req, res, next){
   
    Bitacora.create({email: req.params.userID ,permiso:'Elimina',accion:'Elimina Edificio '});
    Unidadpago3.findByIdAndRemove({ _id: req.params.recordID  }, function(err, todo) {
        res.json(todo);
    });
}


exports.creaUnidadpago32s = function(req, res, next){
   
 
    Bitacora.create(req.body.bitacora);
if(req.params.recordID!=='crea')
{
    Unidadpago3.findById({ _id: req.params.recordID }, function (err, todo)  {
        if (err) {  res.send(err);  }
        else
        {  

            todo.codigo        	=	req.body.codigo        	||	todo.codigo        	;   
            todo.tipo       	=	req.body.tipo        	||	todo.tipo        	;   
            todo.idtipounidad        	=	req.body.idtipounidad        	||	todo.idtipounidad        	;
            todo.idunidadacademica        	=	req.body.idunidadacademica        	||	todo.idunidadacademica        	;
            todo.nombre        	=	req.body.nombre        	      	;
            todo.costo       	=	req.body.costo    
            todo.estado        	=	req.body.estado    
            todo.usuarioup=req.body.bitacora.email;
            
            
            todo.save(function (err, todo){
                if (err)     {  res.status(500).send(err.message)   }
                res.json(todo);
            });
        }
    });

}
else{

  
    
    
    Unidadpago3.find({idtipounidad        	: req.body.idtipounidad        	,tipo        	: req.body.tipo        	,
        idunidadacademica: req.body.idunidadacademica, nombre: req.body.nombre
      
        
         },function(err, todos) {
        if (err){ res.send(err); }
      
        if(todos.length>0)   {    res.status(500).send('Ya existe un costo de servicio con este nombre'); }
        else
        {   

            Unidadpago3.create({
            idtipounidad        	: req.body.idtipounidad        	,
            idunidadacademica: req.body.idunidadacademica,
            tipo: req.body.tipo,
            codigo: req.body.codigo,
            nombre: req.body.nombre,
            costo: req.body.costo,
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



