
var Unidadacademica3 = require('../../models/calusac/unidadacademica3');
var Bitacora = require('../../models/bitacora');

exports.getUnidadacademica3 = function(req, res, next){
    if(req.params.id2)
    {   
        if(req.params.id2=='todosinactivo')
        {   
            Unidadacademica3.find({idtipounidad:req.params.id,estado:'Inactivo'}
        ,null, {sort: {codigo: 1}},function(err, todos) {
           if (err){  res.send(err);  }
           console.log(todos)
            res.json(todos);
        });
        }
        else
        {
        if(req.params.id2=='todos')
        {   
            Unidadacademica3.find({idtipounidad:req.params.id}
        ,null, {sort: {codigo: 1}},function(err, todos) {
           if (err){  res.send(err);  }
            res.json(todos);
        });
        }
        else
        {
            Unidadacademica3.find({idtipounidad:req.params.id,_id:req.params.id2}
                ,null, {sort: {codigo: 1}},function(err, todos) {
                    if (err){ res.send(err); }
                   
                    if(todos.length>0)   {    res.json(todos);   }
                    else
                    {  res.status(500).send('NO EXISTE REGISTRO');      }
                    
                });   
        }
    }
        
        
       
    }
    else
    { Unidadacademica3.find({idtipounidad:req.params.id,estado:'Activo'}
        ,null, {sort: {codigo: 1}},function(err, todos) {
           if (err){  res.send(err);  }
           
            res.json(todos);
        });
    }   
}
exports.deleteUnidadacademica3 = function(req, res, next){
   
    Bitacora.create({email: req.params.userID ,permiso:'Elimina',accion:'Elimina Unidadacademica3 '});
    Unidadacademica3.findByIdAndRemove({ _id: req.params.id  }, function(err, todo) {
        res.json(todo);
    });
}


exports.creaUnidadacademica32s = function(req, res, next){
   
 

    if(req.params.id!=='crea')
    {  Bitacora.create(req.body.bitacora);
        Unidadacademica3.findById({ _id: req.params.id}, function (err, todo)  {
            if (err) {  res.send(err);  }
            else
            {  
                
                todo.idtipounidad        	=	req.body.idtipounidad        	||	todo.idtipounidad;        	;
                todo.nombre        	=	req.body.nombre        	||	todo.nombre        	;
                todo.codigo        	=	req.body.codigo        	||	todo.codigo        	;
                todo.estado        	=	req.body.estado        	||	todo.estado        	;
                todo.usuarioup=req.body.bitacora.email;
               

                todo.save(function (err, todo){
                    if (err)     {  res.status(500).send(err.message)   }
                    res.json(todo);
                });
            }
        });
    
    }
    else{

        Unidadacademica3.find({ idtipounidad      	: req.body.idtipounidad  ,codigo:req.body.codigo  },function(err, todos) {
            if (err){ res.send(err); }
          
            if(todos.length>0)   {    res.status(500).send('Codigo ya existe'); }
            else
            {   

                
        Bitacora.create(req.body.bitacora);
            Unidadacademica3.create({  idtipounidad      	: req.body.idtipounidad     	,
                nombre        	: req.body.nombre        	,
                codigo        	: req.body.codigo        ,
                estado        	: req.body.estado        ,
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





