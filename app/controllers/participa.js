
var Participa = require('../models/participa');
var Bitacora = require('../models/bitacora');
var Carne = require('../models/carne');
var Estudiantevt = require('../models/estudiantevt');
var Datadpi = require('../models/datadpis');
var User = require('../models/user');
var Asignapcb= require('../models/asignapcb');
var Evento = require('../models/eventos');
var Listanegra = require('../models/listanegra');
exports.getParticipa = function(req, res, next){
    if(req.params.id4)
    { 

        if(req.params.id4=='repetido')
        { //http://127.0.0.1:9090/api/participas/1/2/repetido/2
            var duplicates = [];
            Estudiantevt.aggregate([          //,idevento:'5cec20c9e927930016d78a8b' 
                    { $match: {carnet: {"$ne": ''}  }
                    },
                    { $sort : { carnet : -1 } }, 
                    { $limit : 30000 },
                    {   $group: {
                            _id: {carnet: "$carnet"},
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
                
                   Estudiantevt.remove({_id: {$in: duplicates}}, function (err, result) {
                        if (err) {
                            console.error(err);
                        }
         
                        res.json(duplicates); 
                       
                    });
                    
                    
                } ).allowDiskUse(true);


        }
        /*
        else
        {   if(req.params.id3=='modcui')
            {   Datadpi.find({},function(err, todos) {
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
                        res.json(myData);
                    });
                });
            }
        }
        */

    }
    else{
    if(req.params.id3)
    {   Participa.find({idevento:req.params.id,_id:req.params.id2,idempresa:req.params.id3},function(err, todos) {
            if (err){ res.send(err); }
           
            if(todos.length>0)   {    res.json(todos);   }
            else
            {  res.status(500).send('NO EXISTE REGISTRO');      }
            
        });
    }
    else
    { Participa.find({idevento:req.params.id,idempresa:req.params.id2},function(err, todos) {
           if (err){  res.send(err);  }
            res.json(todos);
        });
    }
}
}
exports.deleteParticipa = function(req, res, next){
   
    Bitacora.create({idempresa:req.params.idempresa,idafiliado:req.params.idafiliado,email: req.params.userID ,permiso:'Elimina',accion:'Elimina Participa '});
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
                todo.cui 	=	req.body.cui	||	todo.cui 	;
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
   
        Listanegra.find({ email: req.body.correo , tipo    	: 'cursoslibres'}, function (err, todo20a)  {
           if (err) {  res.send(err);  }

           if(todo20a.length==0)
           {
            Participa.find({  idempresa       	: req.body.idempresa   ,idevento       	: req.body.idevento , 
                 correo : req.body.correo }, function (err, todo20)  {
                if (err) {  res.send(err);  }
                else
                {  
                    if(todo20.length>0)
                        {
                            res.status(500).send('Ya te encuentras registrado con este correo o no documento en este evento') 
                                     

                        }
                        else
                        {
                          
                                        var nopp=0
                                       nopp= req.body.cantidadmax;
console.log(nopp)
                                        Participa.aggregate(  [
                                            { 
                                                "$match" : { 
                                                    "idevento" : req.body.idevento
                                                }
                                            }, 
                                            { 
                                                "$group" : { 
                                                    "_id" : { 
                                    
                                                    }, 
                                                    "COUNT(*)" : { 
                                                        "$sum" : 1
                                                    }
                                                }
                                            }, 
                                            { 
                                                "$project" : { 
                                                    "cantidad" : "$COUNT(*)", 
                                                    "_id" : 0
                                                }
                                            }
                                        ]).exec(function(err, todo10) {


                                            var cuantos =0
                                            if(todo10.length>0)
                                            {
                                                cuantos =todo10[0].cantidad
                                            }
                          
                                            console.log(todo10)

                                                if(cuantos<=nopp)
                                                {

                                                    Bitacora.create(req.body.bitacora);
                                                    var d = new Date();
                                                Participa.create({  
                                                    idempresa       	: req.body.idempresa       	,
                                                    idevento       	: req.body.idevento       	,
                                                    nombre        	: req.body.nombre        	,
                                                    apellido    	: req.body.apellido    	,
                                                    genero    	: req.body.genero    	,
                                                    edad   	: req.body.edad 	,
                                                    correo    	: req.body.correo   	,
                                                    cui    	: req.body.cui   	,
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
                                
                                
                                            
                                        });




                        }

                                      
                }
                });
          
        }
        else
        {
            res.status(500).send('En estos momentos el servicio esta saturado, por favor intente mas tarde.') 
        }

    });


     
}
}

}





