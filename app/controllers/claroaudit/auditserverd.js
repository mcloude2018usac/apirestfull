
var Auditserverd = require('../../models/claroaudit/auditserverd');
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

  
exports.getAuditserverd = function(req, res, next){


        if(req.params.id3=='todos')
        {
            Auditserverd.find({idempresa:req.params.id,idserver:req.params.id2}).exec(function(err, todos) {
                if (err){ res.send(err); }
              
                res.json(todos);   
                
            });

        }
        else
        {

            if(req.params.id3=='todosactivos')
        {
            Auditserverd.find({idempresa:req.params.id,estado:'Activo'}).populate('idserver').sort([['idserver._id', -1]]).exec(function(err, todos) {
                if (err){ res.send(err); }
              
                res.json(todos);   
                
            });

        }
        }


     
    
   
       
       

    

}
exports.deleteAuditserverd = function(req, res, next){
   
    Bitacora.create({email: req.params.userID ,permiso:'Elimina',accion:'Elimina Auditserverd '});
    Auditserverd.findByIdAndRemove({ _id: req.params.id  }, function(err, todo) {
        res.json(todo);
    });
}


exports.creaAuditserverd2s = function(req, res, next){
   

    if(req.params.id!=='crea')
    { 
         Bitacora.create(req.body.bitacora);
        Auditserverd.findById({ _id: req.params.id}, function (err, todo)  {
            if (err) {  res.send(err);  }
            else
            {  
                todo.nombre       	=	req.body.nombre        	||	todo.nombre        	;         
                todo.marca      	=	req.body.marca        	||	todo.marca        	;         
                todo.tipoconexion      	=	req.body.tipoconexion            	;         
                todo.usuario        	=	req.body.usuario              	;
                todo.clave        	=	req.body.clave        	    	;
                todo.ip        	=	req.body.ip             	;
                
                todo.estado        	=	req.body.estado            	;
                todo.descripcion        	=	req.body.descripcion           	;
                todo.comando        	=	req.body.comando               	;
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
                  
                Auditserverd.create({  
                    idserver      	: req.body.idserver       	,
                    idempresa       	: req.body.idempresa       	,
                    tipoconexion       	: req.body.tipoconexion       	,
                    nombre       	: req.body.nombre       	,
                    marca       	: req.body.marca       	,
                    usuario   	: req.body.usuario    	,
                    clave 	: req.body.clave 	,
                  ip: req.body.ip 	,
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





