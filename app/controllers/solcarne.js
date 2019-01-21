var Solcarne = require('../models/solcarne');
var Bitacora = require('../models/bitacora');

function roundxx(value, decimals) {
    //parseFloat(Math.round(num3 * 100) / 100).toFixed(2);

    return Number(Math.round(value+'e'+decimals)+'e-'+decimals).toFixed(2);
  }

  
exports.getSolcarne = function(req, res, next){

        if(req.params.id)
        {  
           
                Solcarne.find({'idsuscriptor.id':req.params.id}).sort([['createdAt', -1]]).exec(function(err, todos) {
                    if (err){ res.send(err); }
                    res.json(todos);
                });
             
           
        }
        else
        { Solcarne.find(function(err, todos) {
               if (err){  res.send(err);  }
                res.json(todos);
            });
        }

    
 
}
exports.deleteSolcarne = function(req, res, next){
   
    Bitacora.create({email: req.params.userID ,permiso:'Elimina',accion:'Elimina solicitud de carne'});
    Solcarne.findByIdAndRemove({ _id: req.params.recordID  }, function(err, todo) {
        res.json(todo);
    });
}


exports.creaSolcarne2s = function(req, res, next){
   
 
    Bitacora.create(req.body.bitacora);
if(req.params.recordID!=='crea')
{ 
    Solcarne.findById({ _id: req.params.recordID }, function (err, todo)  {
        if (err) {  res.send(err);  }
        else
        {           todo.idsuscriptor        	={id:req.body.idsuscriptor.id,nombre:req.body.idsuscriptor.nombre   }   	;
              todo.nombre        	=	req.body.idsuscriptor.nombre       	||	todo.nombre        	;
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

                            Solcarne.create({ idsuscriptor        	: req.body.idsuscriptor        	,
                                nombre        	: req.body.nombre        	,
                                usuarionew:req.body.bitacora.email,
                                estado 	: req.body.estado 	,
                                nota 	: req.body.nota 	
                              }
                                , function(err, todo22) {
                                if (err){ res.status(500).send(err.message)    }

                                res.json(todo22);
                        
                            });
 
}

}



