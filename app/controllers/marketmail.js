
var Marketemail = require('../models/marketemail');
var Bitacora = require('../models/bitacora');
var Usermsg = require('../models/usermsg');
var User = require('../models/user');

var datipo = function(str,vector) {
   var re='';
   for(var i = 0; i < vector.length;i++){
    if(vector[i]._id==str)
    {
    re=vector[i].nombre
        break;

    }
   }




    return re;
};


exports.getMarketemail = function(req, res, next){

    if(req.params.id4)
    { 
        if(req.params.id3=='categoria')
        {
            Marketemail.find({idempresa:req.params.id,idcategoria:req.params.id2,usuarionew:req.params.id4}).populate('grupo').exec(function(err, todos) {
                if (err){ res.send(err); }
               
                res.json(todos);   
                
            });

        }
    }
    else{
    if(req.params.id3)
    {  
        if(req.params.id3=='rptmsg')
        {
    
    
            var filtro='NA'
            filtro2={ accesoestado: 'foro',nombre:req.params.id};
            User.find(filtro2).exec(function(err, todos) {
                if (err){ res.send(err); }
    
               
    
                var usuariosx = [];
                var usuariosx2 = [];
                for(var i = 0; i < todos.length;i++){
                    usuariosx.push(''+ todos[i]._id + '');
                    usuariosx2.push({_id:todos[i]._id,nombre:todos[i].nombre});
                }
    
             //   "toUserId" : {"$in" :usuariosx }
    
                  
                    Usermsg.find({"toUserId" : {"$in" :usuariosx }}).populate('userId').sort([['_id', 1]]).exec(function(err, todos2) {
                    if (err){ res.send(err); }
                   
                   var tablax = [];
                    for(var i = 0; i < todos2.length;i++){
                        
                        tablax.push({createdAt:todos2[i].createdAt,usuario:todos2[i].userId.nombre, tipo:datipo(todos2[i].toUserId,todos),msg:todos2[i].message});
                    }
    
                  
                   
                    res.json( tablax);   
                    
                });
    
               
              
                
            });
    
          
    
    
        }
        else
        {    
    if(req.params.id3=='rptmsg2')
    {

        var datav=req.params.id2.split(",");
           
        var filtro='NA'
        for(var i = 0; i < datav.length;i++){
            if(datav[i]=='TODOS@gmail.com')
            {filtro='TODOS';
                break;
            }
        }
        var filtro2={};
        if(filtro=='TODOS')
        {
        filtro2={ accesoestado: 'foro'}

        }
        else{
        filtro2={email:{$in:datav}, accesoestado: 'foro'};
        }
     
        User.find(filtro2).exec(function(err, todos) {
            if (err){ res.send(err); }

           

            var usuariosx = [];
            var usuariosx2 = [];
            for(var i = 0; i < todos.length;i++){
                usuariosx.push(''+ todos[i]._id + '');
                usuariosx2.push({_id:todos[i]._id,nombre:todos[i].nombre});
            }

         //   "toUserId" : {"$in" :usuariosx }

              
                Usermsg.find({"toUserId" : {"$in" :usuariosx }}).populate('userId').sort([['toUserId', 1]]).exec(function(err, todos2) {
                if (err){ res.send(err); }
               
               var tablax = [];
                for(var i = 0; i < todos2.length;i++){
                    
                    tablax.push({createdAt:todos2[i].createdAt,usuario:todos2[i].userId.nombre, tipo:datipo(todos2[i].toUserId,todos),msg:todos2[i].message});
                }

                
               
                res.json( tablax);   
                
            });

           
          
            
        });

      


    }
    else
    {
        if(req.params.id3=='rptideas')
        {
  

            var datav=req.params.id2.split(",");
           
            var filtro='NA'
            for(var i = 0; i < datav.length;i++){
                if(datav[i]=='TODOS@gmail.com')
                {filtro='TODOS';
                    break;
                }
            }
            var filtro2={};
            if(filtro=='TODOS')
            {
            filtro2={ accesoestado: 'foro'}

            }
            else{
            filtro2={email:{$in:datav}, accesoestado: 'foro'};
            }
       
            User.find(filtro2).exec(function(err, todos) {
                if (err){ res.send(err); }

               

                var usuariosx = [];
                var usuariosx2 = [];
                for(var i = 0; i < todos.length;i++){
                    usuariosx.push(''+ todos[i]._id + '');
                    usuariosx2.push({_id:todos[i]._id,nombre:todos[i].nombre});
                }

              
                Usermsg.aggregate([  
                    { 
                        "$match" : {
                            "toUserId" : {"$in" :usuariosx }
                        }
                    },
                    {  
                        
                
                        "$group" : {
                            "_id" : {
                                "toUserId" : "$toUserId"
                            }, 
                            "COUNT(*)" : { "$sum": 1   }
                        }
                    }, 
                    { 
                        "$project" : {
                            "toUserId" : "$_id.toUserId", 
                            "cantidad" : "$COUNT(*)", 
                            "_id" : 0
                        }
                    },
                    { 
                        "$sort" : {
                            "cantidad" : -1
                        }
                    }
                ], function(err, todos2) {
                    if (err){ res.send(err); }
   
                   var tablax = [];
                    for(var i = 0; i < todos2.length;i++){
                        tablax.push({tipo:datipo(todos2[i].toUserId,todos),cantidad:todos2[i].cantidad});
                    }
    
                 
                    res.json( tablax);   
                    
                });

               
              
                
            });

          


        }
        else
        {
        if(req.params.id3=='plantillas')
        {
            if(req.params.id2) 
            {

                Marketemail.find({idempresa:req.params.id,_id:req.params.id2}).exec(function(err, todos) {
                    if (err){ res.send(err); }
                   
                    res.json(todos);   
                    
                });
            }
            else{
                res.status(500).send('Error link no valido') 
            }
          

        }
        else
        {

            if(req.params.id3=='categoria')
            {
                Marketemail.find({idempresa:req.params.id,idcategoria:req.params.id2}).populate('grupo').exec(function(err, todos) {
                    if (err){ res.send(err); }
                   
                    res.json(todos);   
                    
                });
    
            }
            else{
                if(req.params.id3=='help')
                {
                    Marketemail.find({idempresa:req.params.id,idcategoria:req.params.id2}).populate('grupo').exec(function(err, todos) {
                        if (err){ res.send(err); }
                       
                        res.json(todos);   
                        
                    });
        
                }


            }


        }}}}
    }
    else
    {
  
        if(req.params.id2=='plantillas')
        {
            Marketemail.find({idempresa:req.params.id,_id:req.params.id2}).exec(function(err, todos) {
                if (err){ res.send(err); }
               
                res.json(todos);   
                
            });

        }
        else
        {

            Marketemail.find({}).populate('grupo').exec(function(err, todos) {
                if (err){  res.send(err);  }
                 res.json(todos);
             });

        }
       
       

    }}
}
exports.deleteMarketemail = function(req, res, next){
   
    Bitacora.create({email: req.params.userID ,permiso:'Elimina',accion:'Elimina Marketemail '});
    Marketemail.findByIdAndRemove({ _id: req.params.id  }, function(err, todo) {
        res.json(todo);
    });
}


exports.creaMarketemail2s = function(req, res, next){
   
 
  if(req.params.id=='actualiza')
{ 
   

}
else{
    if(req.params.id!=='crea')
    { 
         Bitacora.create(req.body.bitacora);
        Marketemail.findById({ _id: req.params.id}, function (err, todo)  {
            if (err) {  res.send(err);  }
            else
            {  todo.nombre       	=	req.body.nombre        	||	todo.nombre        	;         
               todo.titulo       	=	req.body.titulo        	||	todo.titulo        	;         
               todo.texto        	=	req.body.texto        	||	todo.texto        	;
               todo.f1        	=	req.body.f1        	||	todo.f1       	;
               todo.f2        	=	req.body.f2        	||	todo.f2        	;
               todo.fecha        	=	req.body.fecha        	||	todo.fecha       	;
               todo.grupo        	=	req.body.grupo        	||	todo.grupo       	;
               todo.estado        	=	req.body.estado       	||	todo.estado        	;
               todo.ubicacion        	=	req.body.ubicacion       	||	todo.ubicacion        	;
               todo.autor        	=	req.body.autor       	||	todo.autor        	;
               todo.presenta        	=	req.body.presenta       	||	todo.presenta        	;
               todo.usuarioup=req.body.bitacora.email;

               todo.save(function (err, todo){
                    if (err)     {  res.status(500).send(err.message)   }
                    res.json(todo);
                });
            }
        });
    
    }
    else{


        console.log(req.body.idempresa)

                    Bitacora.create(req.body.bitacora);
                  
                Marketemail.create({  
                    idcategoria       	: req.body.idcategoria       	,
                    idempresa       	: req.body.idempresa       	,
                    nombre       	: req.body.nombre       	,
                    titulo       	: req.body.titulo       	,
                    texto    	: req.body.texto    	,
                    fecha 	: req.body.fecha 	,
                    grupo 	: req.body.grupo 	,
                    f1 	: req.body.f1 	,
                    f2 	: req.body.f2 	,
                    estado:req.body.estado,
                    ubicacion 	: req.body.ubicacion 	,
                    autor 	: req.body.autor 	,
                    presenta 	: req.body.presenta 	,
                    usuarionew:req.body.bitacora.email
                    

                }
                    , function(err, todo) {
                    if (err){   res.status(500).send(err.message)  
                    console.log(err.message)  }
                
                    res.json(todo);

                
                    

                });
      
}
}

}





