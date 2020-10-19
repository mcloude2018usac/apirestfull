var Usermsg = require('../models/usermsg');
var Bitacora = require('../models/bitacora');
var Personal = require('../models/user');

function roundxx(value, decimals) {
    //parseFloat(Math.round(num3 * 100) / 100).toFixed(2);

    return Number(Math.round(value+'e'+decimals)+'e-'+decimals).toFixed(2);
  }

  
exports.getUsermsg = function(req, res, next){

        if(req.params.id2)
        {      
         
            if(req.params.id=='chatunouno')
            {

                Usermsg.aggregate( [
                    { 
                        "$match" : {
                            "toUserId" : req.params.id2 , 
                            "status" : "Pendiente"
                        }
                    }, 
                    { 
                        "$group" : {
                            "_id" : {
                                "userId" : "$userId"
                            }, 
                            "COUNT(*)" : {
                                "$sum" : 1
                            }
                        }
                    }, 
                    { 
                        "$project" : {
                            "userId" : "$_id.userId", 
                            "cant" : "$COUNT(*)", 
                            "_id" : 0
                        }
                    }
                ]).exec(function(err, todos) {


                                        Usermsg.aggregate( [
                                            { 
                                                "$match" : {
                                                    "toUserId" :  req.params.id2, 
                                                    "status" : "Procesado"
                                                }
                                            }, 
                                            { 
                                                "$group" : {
                                                    "_id" : {
                                                        "userId" : "$userId"
                                                    }
                                                }
                                            }, 
                                            { 
                                                "$project" : {
                                                    "userId" : "$_id.userId", 
                                                    "_id" : 0
                                                }
                                            }
                                        ]).exec(function(err, todos3) {
                        
                                            var aaa=[];
                                            var bbb=[];
                                            for(var ii = 0; ii < todos.length;ii++){
                                                    aaa.push(todos[ii].userId)
                                                    bbb.push({id:todos[ii].userId,cantidad:todos[ii].cant});
                                            }

                                            for(var ii = 0; ii < todos3.length;ii++){
                                                aaa.push(todos3[ii].userId)
                                              
                                        }
                                            

                                                Personal.find({ _id:{$in:aaa}}).lean().exec(function(err, todos10) {
                                                    if (err){  res.send(err);  }    
                                                   
                                                    var resp=[]

                                                    for(var ii = 0; ii < todos10.length;ii++){
                                                        var encuentra=0;
                                                        var cuantos=0
                                                        for(var i = 0; i < bbb.length;i++){
                                                                    if(bbb[i].id==todos10[ii]._id)
                                                                    {
                                                                            encuentra=1;
                                                                            cuantos=bbb[i].cantidad
                                                                            break;
                                                                    }

                                                        }                         

                                                                resp.push({_id:todos10[ii]._id ,email:todos10[ii].email,nombre:todos10[ii].nombre,
                                                                    foto:todos10[ii].foto,
                                                                    pendientes:cuantos});
                                                    }
                               


                                                    res.json(resp);
                                              
                                                
                                    
                                            });
                        
                                            
                            
                            
                                        });

       
       
                });




            }
            else
            {

                if(req.params.id=='grupal')
                {
                  Usermsg.find(  { toUserId:req.params.id2     }).sort([['createdAt', 1]]).populate('userId').exec(function(err, todos) {
                      if (err){ res.send(err); }
                      res.json(todos);
                  });
      
                }
                else{
      console.log('entra aquiii')
                  Usermsg.find(  {  $or : [
                      { $and : [ { userId:req.params.id,toUserId:req.params.id2}] },
                      { $and : [ { toUserId:req.params.id,userId:req.params.id2 }] }]
                              }).sort([['createdAt', 1]]).exec(function(err, todos) {
                      if (err){ res.send(err); }
                      res.json(todos);
                  });
                }


            }
    

       //     5b282afdb358171c14bd3f86/5b7047adf0953c001442954c
             
             
           
        }
       

    
 
}
exports.deleteUsermsg = function(req, res, next){
   
    Bitacora.create({email: req.params.userID ,permiso:'Elimina',accion:'Elimina usuarios de chat'});
    Usermsg.findByIdAndRemove({ _id: req.params.recordID  }, function(err, todo) {
        res.json(todo);
    });
}


exports.creaUsermsg2s = function(req, res, next){



    Usermsg.create({
        userId        	: req.body.userId        	,
        toUserId	: req.body.toUserId	,  
  
        status	: req.body.status	,
        message	: req.body.message	,
        messageimg	: req.body.messageimg	,
        message2	: req.body.message2	,
        userId2        	: req.body.userId2       	,
        imagen2 	: req.body.imagen2 	
      

      }
        , function(err, todo) {
        if (err){ 
           
            res.status(500).send(err.message)    }
    
        res.json(todo);

     
        

    });



   
 /*
    Bitacora.create(req.body.bitacora);
if(req.params.recordID!=='crea')
{ 
    Usermsg.findById({ _id: req.params.recordID }, function (err, todo)  {
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



    Usermsg.find({'idsuscriptor.id': req.body.idsuscriptor.id},function(err, todos) {
        if (err){ res.send(err); }
      
        if(todos.length>0)   {    res.status(500).send('Suscriptor ya existe en lista de chats'); }
        else
        {   

            Usermsg.create({
                idsuscriptor        	: req.body.idsuscriptor        	,
                nombre 	: req.body.nombre 	,  
                usuarionew:req.body.bitacora.email,
                estado 	: req.body.estado 	,
                nota 	: req.body.nota 	
              
        
              }
                , function(err, todo) {
                if (err){ 
                   
                    res.status(500).send(err.message)    }
            
                res.json(todo);
        
             
                
        
            });

            
             }
        
    });

   
 
}
*/

}



