var Userchat = require('../models/userchat');
var Bitacora = require('../models/bitacora');
var Usermsg = require('../models/usermsg');


function roundxx(value, decimals) {
    //parseFloat(Math.round(num3 * 100) / 100).toFixed(2);

    return Number(Math.round(value+'e'+decimals)+'e-'+decimals).toFixed(2);
  }

  
exports.getUserchat = function(req, res, next){
    
    if(req.params.id3)
    {  
        if(req.params.id2=='mios')
        {
            Userchat.find({usuarionew:req.params.id,idempresa:req.params.id3}).populate('idsuscriptor.id')
            .exec(function(err, todos) {
                if (err){ res.send(err); }
                var msguser=[]
                for(var i = 0; i < todos.length;i++){
                    var cadtt=String(todos[i].idsuscriptor.id._id)
msguser.push(cadtt)
                }

                Usermsg.aggregate( [
                    { $match: { "status" : "Pendiente",userId:{$in:msguser}}},
                    { 
                        "$group" : {
                            "_id" : {
                                "toUserId" : "$toUserId"
                            }, 
                            "COUNT(*)" : {
                                "$sum" : 1
                            }
                        }
                    }, 
                    { 
                        "$project" : {
                            "toUserId" : "$_id.toUserId", 
                            "cantidad" : "$COUNT(*)", 
                            "_id" :0
                        }
                    }
                ]).exec(function(err, todos2) {
     var datat=[]
                    for(var i = 0; i < todos.length;i++){
                        var encuentra=0
                        for(var ii = 0; ii < todos2.length;ii++){
                            var cadtt=String(todos[i].idsuscriptor.id._id)
                            if(cadtt===todos2[ii].toUserId)
                            {
                                datat.push({ "_id" : todos[i]._id,
                                "idsuscriptor" : {
                                    "id" : todos[i].idsuscriptor.id,
                                    "nombre" : todos[i].idsuscriptor.nombre
                                },
                                "nombre" : todos[i].nombre,
                                "idempresa" : todos[i].idempresa,
                                "usuarionew" : todos[i].usuarionew,
                                "estado" : todos[i].estado,
                                "nota" : todos[i].nota,
                                "cantidad":Number(todos2[ii].cantidad)})
                                encuentra=1;
                                break;
                            }

                        }
                        if(encuentra===0)
                        {
                            datat.push({ "_id" : todos[i]._id,
                            "idsuscriptor" : {
                                "id" : todos[i].idsuscriptor.id,
                                "nombre" : todos[i].idsuscriptor.nombre
                            },
                            "nombre" : todos[i].nombre,
                            "idempresa" : todos[i].idempresa,
                            "usuarionew" : todos[i].usuarionew,
                            "estado" : todos[i].estado,
                            "nota" : todos[i].nota,
                            "cantidad":0})

                        }

                     
                    }
                    res.json(datat);


                });
                



               
                
            });
      

        }
        else
        {

                 

        }
       
    }
    else
    {
    if(req.params.id2)
    {  
        if(req.params.id2=='mios')
        {
            Userchat.find({usuarionew:req.params.id}).populate('idsuscriptor.id')
            .exec(function(err, todos) {
                if (err){ res.send(err); }
                res.json(todos);
                
            });
      

        }
        else
        {

                 

        }
       
    }
    else
    {
        if(req.params.id)
        {  
           
                Userchat.find({'idsuscriptor.id':req.params.id}).populate('idsuscriptor.id').sort([['createdAt', -1]]).exec(function(err, todos) {
                    if (err){ res.send(err); }
                    res.json(todos);
                });
             
           
        }
        else
        {

            Userchat.find().populate('idsuscriptor.id')
            .exec(function(err, todos) {
               if (err){  res.send(err);  }
                res.json(todos);
            });
        }

    }}
 
}
exports.deleteUserchat = function(req, res, next){
   
    Bitacora.create({email: req.params.userID ,permiso:'Elimina',accion:'Elimina usuarios de chat'});
    Userchat.findByIdAndRemove({ _id: req.params.recordID  }, function(err, todo) {
        res.json(todo);
    });
}


exports.creaUserchat2s = function(req, res, next){
   
 
   
if(req.params.recordID!=='crea')
{ 
    Userchat.findById({ _id: req.params.recordID }, function (err, todo)  {
        if (err) {  res.send(err);  }
        else
        {           todo.idsuscriptor        	={id:req.body.idsuscriptor.id,nombre:req.body.idsuscriptor.nombre   }   	;
        todo.nombre    	=	req.body.nombre    	||	todo.nombre    	;
                   todo.estado    	=	req.body.estado    	||	todo.estado    	;
            todo.nota    	=	req.body.nota    	||	todo.nota    	;
            todo.usuarioup=req.body.bitacora.email;

            todo.save(function (err, todo){
                if (err)     {  res.status(500).send(err.message)   }
                res.json(todo);
            });
        }
    });

}
else{

console.log( req.body)

    Userchat.find({'idsuscriptor.id': req.body.idsuscriptor.id,usuarionew:req.body.bitacora.email},function(err, todos) {
        if (err){ res.send(err); }
      
        if(todos.length>0)   {    res.status(500).send('Suscriptor ya existe en lista de chats'); }
        else
        {   

            Userchat.create({
                idsuscriptor        	: req.body.idsuscriptor        	,
                nombre 	: req.body.nombre 	,  
                idempresa 	: req.body.idempresa 	,  
                usuarionew:req.body.bitacora.email,
                estado 	: req.body.estado 	,
                nota 	: req.body.nota 	
              
        
              }
                , function(err, todo) {
                if (err){ 
                   
                    res.status(500).send(err.message)    }
            
                //res.json(todo);
                console.log({'idsuscriptor.id': req.body.idsuscriptor2.id})

                Userchat.find({ idempresa 	: req.body.idempresa 	,  'idsuscriptor.id': req.body.idsuscriptor2.id,usuarionew:req.body.idsuscriptor2.email},function(err, todosb) {
                    if (err){ res.send(err); }
                  
                    if(todosb.length>0)   {   
console.log('ya existe')
                        res.json(todo);

                     }
                    else
                    {   
                        console.log('crea otro')
                    Userchat.create({
                            idsuscriptor        	: { id:req.body.idsuscriptor2.id  ,nombre: req.body.idsuscriptor2.nombre      	},
                            nombre 	: req.body.idsuscriptor2.nombre	,  
                            idempresa 	: req.body.idempresa 	,  
                            usuarionew:req.body.idsuscriptor2.email,
                            estado 	: req.body.estado 	,
                            nota 	: req.body.nota 	
                          
                    
                          }
                            , function(err, todoc) {
                            if (err){ 
                               
                                res.status(500).send(err.message)    }
                        
                            res.json(todo);
                    
                         
                            
                    
                        });
                
            
                        
                         }
                    
                });



        
             
                
        
            });

            
             }
        
    });

   
 
}

}



