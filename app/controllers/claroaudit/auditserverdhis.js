
var Auditserverdhis = require('../../models/claroaudit/auditserverdhis');
var Auditserver = require('../../models/claroaudit/auditserver');
var Bitacora = require('../../models/bitacora');

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

  
exports.getAuditserverdhis = function(req, res, next){


        if(req.params.id4=='todos1')
        {
            Auditserverdhis.find({idempresa:req.params.id,idserver:req.params.id2,idserverd:req.params.id3}).exec(function(err, todos) {
                if (err){ res.send(err); }
              
                res.json(todos);   
                
            });

        }
        else
        {

            if(req.params.id4=='todos2')
        {
            Auditserverdhis.find({idempresa:req.params.id,idserver:req.params.id2}).exec(function(err, todos) {
                if (err){ res.send(err); }
              
                res.json(todos);   
                
            });

        }
        }


     
    
   
       
       

    

}
exports.deleteAuditserverdhis = function(req, res, next){
   
    Bitacora.create({email: req.params.userID ,permiso:'Elimina',accion:'Elimina Auditserverdhis '});
    Auditserverdhis.findByIdAndRemove({ _id: req.params.id  }, function(err, todo) {
        res.json(todo);
    });
}


exports.creaAuditserverdhis2s = function(req, res, next){
   

   

   

                    Bitacora.create(req.body.bitacora);
                  
                Auditserverdhis.create({  
                    idserver      	: req.body.idserver       	,
                    idserverd      	: req.body.idserverd       	,
                    idempresa       	: req.body.idempresa       	,
                  
                    resultado       	: req.body.nombre       	,
                 
                    usuarionew:req.body.bitacora.email

                }
                    , function(err, todo) {
                    if (err){   res.status(500).send(err.message)  
                     }
                
                    res.json(todo);

                
                    

                });
      



}





