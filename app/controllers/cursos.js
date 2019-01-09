
var Curso = require('../models/cursos');
var Bitacora = require('../models/bitacora');

exports.getCurso = function(req, res, next){
    if(req.params.id)
    { 
        if(req.params.id=='activo')
        {
            Curso.find({estado:'Activo'},function(err, todos) {
                if (err){  res.send(err);  }
                 res.json(todos);
                
            });
        }
        else
        {

            if(req.params.id=='1' || req.params.id=='2')
        {
        }
        else
        {
            Curso.find({_id:req.params.id},function(err, todos) {
                if (err){ res.send(err); }
               
                if(todos.length>0)   {    res.json(todos);   }
                else
                {  res.status(500).send('NO EXISTE REGISTRO');      }
                
            });
        }

        }   
       
    }
    else
    { Curso.find(function(err, todos) {
           if (err){  res.send(err);  }
            res.json(todos);
        });
    }
}
exports.deleteCurso = function(req, res, next){
   
    Bitacora.create({email: req.params.userID ,permiso:'Elimina',accion:'Elimina curso '});
    Curso.findByIdAndRemove({ _id: req.params.recordID  }, function(err, todo) {
        res.json(todo);
    });
}


exports.creaCurso2s = function(req, res, next){
   
 
    Bitacora.create(req.body.bitacora);
if(req.params.recordID!=='crea')
{ 
    Curso.findById({ _id: req.params.recordID }, function (err, todo)  {
        if (err) {  res.send(err);  }
        else
        {   
            todo.nombre        	=	req.body.nombre        	||	todo.nombre        	;
            todo.descripcion        	=	req.body.descripcion        	||	todo.descripcion        	;
            todo.fechaini 	=	req.body.fechaini	||	todo.fechaini 	;
             todo.fechafin 	=	req.body.fechafin	||	todo.fechafin 	;
            todo.foto    	=	req.body.foto    	||	todo.foto    	;
            todo.ubicacion   	=	req.body.ubicacion    	||	todo.ubicacion   	;
            todo.costo 	=	req.body.costo 	||	todo.costo 	;
            todo.estado 	=	req.body.estado 	||	todo.estado 	;
            todo.nomax    	=	req.body.nomax    	||	todo.nomax    	;
            todo.categoria    	=	req.body.categoria    	||	todo.categoria    	;
            todo.usuarioup=req.body.bitacora.email;
            
            
            todo.save(function (err, todo){
                if (err)     {  res.status(500).send(err.message)   }
                res.json(todo);
            });
        }
    });

}
else{
   
    Curso.create({ nombre        	: req.body.nombre        	,
        descripcion        	: req.body.descripcion        	,
        fechaini 	: req.body.fechaini 	,
     
        fechafin    	: req.body.fechafin    	,
      
        foto    	: req.body.foto    	,
        ubicacion   	: req.body.ubicacion  	,
        costo    	: req.body.costo   	,
        estado 	: req.body.estado 	,
        nomax 	: req.body.nomax 	,
        categoria 	: req.body.categoria 	,
        usuarionew:req.body.bitacora.email,
        date 			: Date.now() }
        , function(err, todo) {
        if (err){ 
          
            res.status(500).send(err.message)    }
    
        res.json(todo);

     
        

    });
}

}



