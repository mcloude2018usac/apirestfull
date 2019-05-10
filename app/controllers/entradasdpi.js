var Entradasdpi = require('../models/entradasdpi');
var Bitacora = require('../models/bitacora');
var Personalhis = require('../models/suscriptorhis');


function roundxx(value, decimals) {
    //parseFloat(Math.round(num3 * 100) / 100).toFixed(2);

    return Number(Math.round(value+'e'+decimals)+'e-'+decimals).toFixed(2);
  }

  
exports.getEntradasdpi = function(req, res, next){
    if(req.params.id2)
    {    if(req.params.id2=='CUI')
        { console.log('entra')
            Entradasdpi.find({'cui':req.params.id}).sort([['createdAt', -1]]).exec(function(err, todos) {
                if (err){ res.send(err); }
               
                   res.json(todos);   
                
            });
      

        }
        else
        {
            Entradasdpi.find({},function(err, todos) {
                if (err){ res.send(err); }
               
                   res.json(todos);   
                
            });
                
        }
       
    }
    else
    {
        if(req.params.id)
        {  
                 Entradasdpi.find({'cui':req.params.id}).sort([['createdAt', -1]]).exec(function(err, todos) {
                    if (err){ res.send(err); }
                    res.json(todos);
                });
             
           
        }
        else
        { Entradasdpi.find(function(err, todos) {
               if (err){  res.send(err);  }
                res.json(todos);
            });
        }

    }
 
}
exports.deleteEntradasdpi = function(req, res, next){
   
    Bitacora.create({email: req.params.userID ,permiso:'Elimina',accion:'Elimina entradadpi'});
    Entradasdpi.findByIdAndRemove({ _id: req.params.recordID  }, function(err, todo) {
        res.json(todo);
    });
}


exports.creaEntradasdpi2s = function(req, res, next){
   
 
    Bitacora.create(req.body.bitacora);
if(req.params.recordID!=='crea')
{ 
    Entradasdpi.findById({ _id: req.params.recordID }, function (err, todo)  {
        if (err) {  res.send(err);  }
        else
        {  console.log(req.body)
            
            todo.nombrefactura=	req.body.nombrefactura        	||	todo.nombrefactura        	;
            todo.nitfactura=	req.body.nitfactura        	||	todo.nitfactura        	;
            todo.direccionfactura=	req.body.direccionfactura        	||	todo.direccionfactura        	;
            todo.monto=	req.body.monto        	||	todo.monto        	;
            todo.horasdescuento=	req.body.horasdescuento        	||	todo.horasdescuento        	;
            todo.montodescuento=	req.body.montodescuento        	||	todo.montodescuento        	;
            todo.estado=	req.body.estado        	||	todo.estado        	;
            todo.tsalida=	req.body.tsalida        	||	todo.tsalida        	;
            todo.horascobradas=	req.body.horascobradas        	||	todo.horascobradas        	;
      
            todo.usuarioup=req.body.bitacora.email;

            todo.save(function (err, todo){
                if (err)     {  res.status(500).send(err.message)   }
                res.json(todo);
            });
        }
    });

}
else{



    
   
 
}

}



