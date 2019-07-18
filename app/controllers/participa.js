
var Participa = require('../models/participa');
var Bitacora = require('../models/bitacora');
var Carne = require('../models/carne');
var Estudiantevt = require('../models/estudiantevt');
var Datadpi = require('../models/datadpis');
var User = require('../models/user');
var Asignapcb= require('../models/asignapcb');
var Evento = require('../models/eventos');

exports.getParticipa = function(req, res, next){
    if(req.params.id3)
    { 

        if(req.params.id3=='repetido')
        { 
            var duplicates = [];
            Participa.aggregate([          //,idevento:'5cec20c9e927930016d78a8b' 
                    { $match: {correo: {"$ne": ''} ,idevento:'5d237499ce6def00265704dc' }
                    },
                    {   $group: {
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
                ],function (err, result) {
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

                   
                //    res.json(duplicates); 
                    
                  /* User.find({_id: {$in: duplicates}},function(err, todos) {
                        if (err){ res.send(err); }
                        res.json(todos); 
                    });
                    */
                
                  Participa.remove({_id: {$in: duplicates}}, function (err, result) {
                        if (err) {
                            console.error(err);
                        }
         
                        res.json(duplicates); 
                       
                    });
                    
                    
                } ).allowDiskUse(true);


        }
        else
        {

            if(req.params.id3=='modcui')
            { 
                

                Datadpi.find({},function(err, todos) {
                    if (err){ res.send(err); }
                   
                   User.find({tiposuscriptor:'5be1b6699c9f2200e8311574'},function(err, todos2) {
                        if (err){ res.send(err); }
                        var myData = [];
                        for(var i = 0; i < todos2.length;i++){
                            for(var i2 = 0; i2 < todos.length;i2++){
                                        if(todos2[i].cui==todos[i2].cui)
                                        {
                                            var aa="db.users.update({_id:ObjectId('" + todos2[i]._id +"')},{$set: { nov:'"+todos[i2].nov+ "'}});"
                                        //    myData.push({id:todos2[i]._id,nov:todos[i2].nov,cui:todos[i2].cui} );
                                        myData.push({aa} );
                                            break;
                                        }

                            }



                        }

                       

/*
                        for(var i = 0; i < myData.length;i++){
                            var nn=myData[i].nov   
                            User.findById({ _id: myData[i].id}, function (err, todo)  {
                                if (err) {  res.send(err);  }
                                else
                                {  
                                    
                                    todo.nov        	=	nn    	;
                                    todo.save(function (err, todo){
                                        if (err)     {  res.status(500).send(err.message)   }
                                     //   res.json(todo);
                                    });
                                }
                            });
                        }
  */                      


                        res.json(myData);
                        
                    });
                    
                });
    
            }

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

    console.log('ACTUALIZA')
    console.log(req.body)


    Participa.findById({ _id: req.body._id}, function (err, todo)  {
        if (err) {  res.send(err);  }
        else
        { 
            var d = new Date();
       
            try {
                todo.estado 	=	'Ingreso'	;
                todo.otros 	=	req.body.otros 	||	todo.otros 	;
                todo.cuenta 	=	Number(req.body.cuenta)+1 	||	Number(todo.cuenta)+1 	;
                todo.fecha 	=	d.toISOString()	;
                todo.save(function (err, todo){
                    if (err)     {  res.status(500).send(err.message)   }
                    res.json(todo);
                });
    
              
              } catch(e) {
                res.json(todo);
               
              }




       


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

         Evento.find({ _id      	: req.body.idevento   }, function (err, todo)  {
            if (err) {  res.send(err);  }
            else
            {  
                     var nopp=todo[0].nomax;
                     Participa.find({  idevento       	: req.body.idevento   }, function (err, todo)  {
                        if (err) {  res.send(err);  }
                        else
                        {  

                            var cant=todo.length

                            if(cant<=nopp)
                            {

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
                            else
                            {

                                res.status(500).send('Lo sentimos ya no existe cupo para este evento , Evento lleno') 
                            }
            
            
                        }
                    });



            }
        });


      


     
}
}

}





