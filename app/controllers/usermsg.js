var Usermsg = require('../models/usermsg');
var Bitacora = require('../models/bitacora');


function roundxx(value, decimals) {
    //parseFloat(Math.round(num3 * 100) / 100).toFixed(2);

    return Number(Math.round(value+'e'+decimals)+'e-'+decimals).toFixed(2);
  }

  
exports.getUsermsg = function(req, res, next){

        if(req.params.id2)
        {      
           
          if(req.params.id=='grupal')
          {
            Usermsg.find(  { toUserId:req.params.id2     }).sort([['createdAt', 1]]).populate('userId').exec(function(err, todos) {
                if (err){ res.send(err); }
                res.json(todos);
            });

          }
          else{

            Usermsg.find(  {  $or : [
                { $and : [ { userId:req.params.id,toUserId:req.params.id2}] },
                { $and : [ { toUserId:req.params.id,userId:req.params.id2 }] }]
        }).sort([['createdAt', 1]]).exec(function(err, todos) {
                if (err){ res.send(err); }
                res.json(todos);
            });
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

}



