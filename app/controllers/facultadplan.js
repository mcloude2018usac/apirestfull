
var Facultadplan = require('../models/facultadplan');
var Bitacora = require('../models/bitacora');

exports.getFacultadplan = function(req, res, next){
       if(req.params.id)
        {  
           
                Facultadplan.find({_id:req.params.id},function(err, todos) {
                    if (err){ res.send(err); }
                   
                    if(todos.length>0)   {    res.json(todos);   }
                    else
                    {  res.status(500).send('NO EXISTE REGISTRO');      }
                    
                });
             
           
        }
        else
        { Facultadplan.find(function(err, todos) {
               if (err){  res.send(err);  }
                res.json(todos);
            });
        }

 
}
exports.deleteFacultadplan = function(req, res, next){
   
    Bitacora.create({email: req.params.userID ,permiso:'Elimina',accion:'Elimina Facultadplan '});
    Facultadplan.findByIdAndRemove({ _id: req.params.recordID  }, function(err, todo) {
        res.json(todo);
    });
}


exports.creaFacultadplan2s = function(req, res, next){
   
 
    Bitacora.create(req.body.bitacora);
if(req.params.recordID!=='crea')
{ 
    Facultadplan.findById({ _id: req.params.recordID }, function (err, todo)  {
        if (err) {  res.send(err);  }
        else
        {  
            
            todo.tipounidad        	=	req.body.tipounidad        	||	todo.tipounidad        	;
            todo.unidadacademica        	=	req.body.unidadacademica        	||	todo.unidadacademica        	;
            todo.periodo        	=	req.body.periodo        	||	todo.periodo        	;
            todo.idedificio        	=	req.body.idedificio        	||	todo.idedificio        	;
            todo.idsalon        	=	req.body.idsalon        	||	todo.idsalon        	;
            todo.idhorario        	=	req.body.idhorario        	||	todo.idhorario        	;
            todo.idmateria        	=	req.body.idmateria        	||	todo.idmateria        	;
            todo.capacidad        	=	req.body.capacidad        	||	todo.capacidad        	;
            todo.asignados        	=	req.body.asignados        	||	todo.asignados        	;
            todo.fexamen        	=	req.body.fexamen        	||	todo.fexamen        	;
            todo.usuarioup=req.body.bitacora.email;

            todo.save(function (err, todo){
                if (err)     {  res.status(500).send(err.message)   }
                res.json(todo);
            });
        }
    });

}
else{

    Facultadplan.find({tipounidad        	: req.body.tipounidad        	,
        unidadacademica: req.body.unidadacademica,
        periodo: req.body.periodo,
        idedificio: req.body.idedificio,
        idsalon: req.body.idsalon,
        idhorario: req.body.idhorario,
        idmateria: req.body.idmateria },function(err, todos) {
        if (err){ res.send(err); }
      
        if(todos.length>0)   {    res.status(500).send('Ya existe un Facultadplan con este nombre'); }
        else
        {   

            Facultadplan.create({
                tipounidad        	: req.body.tipounidad        	,
                unidadacademica: req.body.unidadacademica,
                periodo: req.body.periodo,
                idedificio: req.body.idedificio,
                idsalon: req.body.idsalon,
                idhorario: req.body.idhorario,
                idmateria: req.body.idmateria,
                capacidad: req.body.capacidad,
                asignados: req.body.asignados,
                usuarionew:req.body.bitacora.email,
                fexamen: req.body.fexamen
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



