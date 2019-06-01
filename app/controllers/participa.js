
var Participa = require('../models/participa');
var Bitacora = require('../models/bitacora');

exports.getParticipa = function(req, res, next){
    if(req.params.id3)
    { 

        if(req.params.id3=='repetido')
        { 
            var duplicates = [];
            Participa.aggregate([
                     
                    {
                        $match: {
                            correo: {"$ne": ''} // correo es el campo por el que queremos borrar los duplicados
                            ,idevento:'5cec20c9e927930016d78a8b'
                        }
                    },
                    {
                        $group: {
                            _id: {correo: "$correo"},
                            dups: {"$addToSet": "$_id"},
                            count: {"$sum": 1}
                        }
                    },
                    {
                        $match: {
                            count: {"$gt": 1}
                        }
                    }
                ], function (err, result) {
                    if (err) {
                        console.error(err);
                      //  return db.close();
                    }
         
                    console.log(result)
                    result.forEach(function (doc) {
                        doc.dups.shift(); // Nos quedamos con el primer elemento
                        doc.dups.forEach(function (dupId) {
                            duplicates.push(dupId);
                        });
                    });

                //    console.log(duplicates)
                 //   res.json(duplicates); 
         
                    Participa.remove({_id: {$in: duplicates}}, function (err, result) {
                        if (err) {
                            console.error(err);
                        }
         
                        res.json(duplicates); 
                       
                    });
                    
                });


        }

    }
    else{
    if(req.params.id2)
    {   Participa.find({idevento:req.params.id,_id:req.params.id2},function(err, todos) {
            if (err){ res.send(err); }
           
            if(todos.length>0)   {    res.json(todos);   }
            else
            {  res.status(500).send('NO EXISTE REGISTRO');      }
            
        });
    }
    else
    { Participa.find({idevento:req.params.id},function(err, todos) {
           if (err){  res.send(err);  }
            res.json(todos);
        });
    }
}
}
exports.deleteParticipa = function(req, res, next){
   
    Bitacora.create({email: req.params.userID ,permiso:'Elimina',accion:'Elimina Participa '});
    Participa.findByIdAndRemove({ _id: req.params.id  }, function(err, todo) {
        res.json(todo);
    });
}


exports.creaParticipa2s = function(req, res, next){
   
 
  if(req.params.id=='actualiza')
{ 
    Participa.findById({ _id: req.body._id}, function (err, todo)  {
        if (err) {  res.send(err);  }
        else
        {  
            var d = new Date();


            todo.estado 	=	'Ingreso'	;
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
    {  Bitacora.create(req.body.bitacora);
        Participa.findById({ _id: req.params.id}, function (err, todo)  {
            if (err) {  res.send(err);  }
            else
            {  
                
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
        Bitacora.create(req.body.bitacora);
        var d = new Date();
    Participa.create({  idevento       	: req.body.idevento       	,
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
}

}





