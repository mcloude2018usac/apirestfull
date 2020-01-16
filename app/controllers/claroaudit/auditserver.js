
var Auditserver = require('../../models/claroaudit/auditserver');
var Bitacora = require('../../models/bitacora');


//db.getCollection('carnes').find({ correo: {  $ne: null }}).count()

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


exports.getAuditserver = function(req, res, next){

  
  

            Auditserver.find({idempresa:req.params.id}).populate('marca').exec(function(err, todos) {
                if (err){  res.send(err);  }
                 res.json(todos);
             });

        
       
       

    

}
exports.deleteAuditserver = function(req, res, next){
   
    Bitacora.create({email: req.params.userID ,permiso:'Elimina',accion:'Elimina Auditserver '});
    Auditserver.findByIdAndRemove({ _id: req.params.id  }, function(err, todo) {
        res.json(todo);
    });
}


exports.creaAuditserver2s = function(req, res, next){
   
 
  if(req.params.id=='actualiza')
{ 
   

}
else{
    if(req.params.id!=='crea')
    { 
      
         Bitacora.create(req.body.bitacora);
        Auditserver.findById({ _id: req.params.id}, function (err, todo)  {
        
            if (err) {  res.send(err);  }
            else
            {  todo.nombre       	=	req.body.nombre        	||	todo.nombre        	;         
               todo.marca      	=	req.body.marca        	||	todo.marca        	;         
               todo.modelo      	=	req.body.modelo        	||	todo.modelo        	;   
               todo.pais      	=	req.body.pais        	||	todo.pais        	;   
               todo.nodo      	=	req.body.nodo        	||	todo.nodo        	;   
               todo.usuario        	=	req.body.usuario             	;
               todo.clave        	=	req.body.clave        	      	;
               todo.ip        	=	req.body.ip              	;
               todo.sidetalle        	=	req.body.sidetalle        	||	todo.sidetalle        	; 
               todo.estado        	=	req.body.estado        	||	todo.estado        	;
               todo.descripcion        	=	req.body.descripcion        	||	todo.descripcion        	;
               todo.comando        	=	req.body.comando           	;
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
                  
                Auditserver.create({  
                    idempresa       	: req.body.idempresa       	,
                    nombre       	: req.body.nombre       	,
                    marca       	: req.body.marca       	,
                    modelo       	: req.body.modelo       	,
                    pais       	: req.body.pais       	,
                    nodo       	: req.body.nodo       	,
                    usuario   	: req.body.usuario    	,
                    clave 	: req.body.clave 	,
                  ip: req.body.ip 	,
                  sidetalle: req.body.sidetalle 	,
                  estado: req.body.estado 	,
                  descripcion: req.body.descripcion 	,
                  comando: req.body.comando 	,
                    usuarionew:req.body.bitacora.email
                    

                }
                    , function(err, todo) {
                    if (err){   res.status(500).send(err.message)  
                   }
                
                    res.json(todo);

                
                    

                });
      
}
}

}





