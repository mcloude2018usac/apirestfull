
var Participa2 = require('../models/participa2');
var Bitacora = require('../models/bitacora');

exports.getParticipa2 = function(req, res, next){
    if(req.params.id2)
    {   Participa2.find({idevento:req.params.id,_id:req.params.id2},function(err, todos) {
            if (err){ res.send(err); }
           
            if(todos.length>0)   {    res.json(todos);   }
            else
            {  res.status(500).send('NO EXISTE REGISTRO');      }
            
        });
    }
    else
    { Participa2.find({idevento:req.params.id},function(err, todos) {
           if (err){  res.send(err);  }
            res.json(todos);
        });
    }
}
exports.deleteParticipa2 = function(req, res, next){
   
    Bitacora.create({email: req.params.userID ,permiso:'Elimina',accion:'Elimina Participa2 '});
    Participa2.findByIdAndRemove({ _id: req.params.id  }, function(err, todo) {
        res.json(todo);
    });
}


exports.creaParticipa22s = function(req, res, next){
   
 
  if(req.params.id=='actualiza')
{ 
    Participa2.findById({ _id: req.body._id}, function (err, todo)  {
        if (err) {  res.send(err);  }
        else
        {  
            var d = new Date();

            todo.idtipoevento=todo.idtipoevento || todo.idtipoevento;

            todo.idarea= todo.idarea || todo.idarea;
            todo.estado 	=	req.body.estado 	||	todo.estado 	;
            todo.otros 	=	req.body.otros 	||	todo.otros 	;
            todo.cuenta 	=	Number(req.body.cuenta)+1 	||	Number(todo.cuenta)+1 	;
            todo.fecha 	=	d.toISOString()	;
            todo.save(function (err, todo){
                if (err)     {  res.status(500).send(err.message)   }
                res.json(todo);
            });
        }
    });

}
else{
    if(req.params.id!=='crea')
    { 
         Bitacora.create(req.body.bitacora);
        Participa2.findById({ _id: req.params.id}, function (err, todo)  {
            if (err) {  res.send(err);  }
            else
            {  
                
            todo.idtipoevento=todo.idtipoevento || todo.idtipoevento;

            todo.idarea= todo.idarea || todo.idarea;
                todo.idevento        	=	req.body.idevento        	||	todo.idevento;        	;
                todo.nombre        	=	req.body.nombre        	||	todo.nombre        	;
                todo.apellido 	=	req.body.apellido	||	todo.apellido 	;
                todo.genero 	=	req.body.genero	||	todo.genero 	;
                todo.edad 	=	req.body.edad	||	todo.edad 	;
                todo.correo 	=	req.body.correo	||	todo.correo 	;
                todo.telefono    	=	req.body.telefono    	||	todo.telefono    	;
                todo.unidad   	=	req.body.unidad    	||	todo.unidad   	;
                todo.otros   	=	req.body.otros    	||	todo.otros   	;
                todo.estado 	=	req.body.estado 	||	todo.estado 	;
                todo.usuarioup=req.body.bitacora.email;
                
              
                todo.save(function (err, todo){
                    if (err)     {  res.status(500).send(err.message)   }
                    res.json(todo);
                });
            }
        });
    
    }
    else{


        Participa2.find({  idtipoevento	: req.body.idtipoevento       	,
            idarea	: req.body.idarea       	,
            idevento       	: req.body.idevento       	
         },function(err, todos100) {
            if (err){ res.send(err); }
       
            if(todos.length>100)   {    res.status(500).send('Ya no existe cupo para este curso'); }
            else
            {   


        Participa2.find({  idtipoevento	: req.body.idtipoevento       	,
            idarea	: req.body.idarea       	,
            idevento       	: req.body.idevento       	,
            correo    	: req.body.correo   	
         },function(err, todos) {
            if (err){ res.send(err); }
          
            if(todos.length>0)   {    res.status(500).send('Ya existes asignado este curso con este correo electronico'); }
            else
            {   

                    Bitacora.create(req.body.bitacora);
                    var d = new Date();
                    Participa2.create({  
                    idtipoevento	: req.body.idtipoevento       	,
                    idarea	: req.body.idarea       	,
                    idevento       	: req.body.idevento       	,
                    nombre        	: req.body.nombre        	,
                    apellido    	: req.body.apellido    	,
                    genero    	: req.body.genero    	,
                    edad   	: req.body.edad 	,
                    correo    	: req.body.correo   	,
                    telefono 	: req.body.telefono 	,
                    unidad 	: req.body.unidad 	,
                    otros 	: req.body.otros 	,
                    estado 	: req.body.estado 	,
                    usuarionew:req.body.bitacora.email,
                    cuenta 	: '1' 	,
                    fecha:d.toISOString()	
                }
                    , function(err, todo) {
                    if (err){   res.status(500).send(err.message)    }
                
                    res.json(todo);

                
                    

                });
            }
        });
    }

    });
}
}

}





