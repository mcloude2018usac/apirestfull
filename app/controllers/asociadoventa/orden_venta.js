var Orden_venta = require('../../models/asociadoventa/orden_venta');
var Bitacora = require('../../models/bitacora');

var functool = require('../../controllers/funcionesnode');

exports.getOrden_venta = function(req, res, next){
    if(req.params.id5)
    {   
        switch(req.params.id5) {
            case 'individual':
                
                Orden_venta.find({idempresa:req.params.id3,estado:req.params.id2,idusuario:req.params.id4}).sort({'_id': -1}).exec(function(err, todos) {
                    if (err){  res.send(err);  }
                     res.json(todos);
                 });
                break;

                case 'individualgraf':
              
                    Orden_venta.aggregate( [
                        { "$match": {idempresa:req.params.id3,estado:req.params.id2,idusuario:req.params.id4}},
                        {   
                            "$group" : {
                                "_id" : {
                                    "estado" : "$estado"
                                }, 
                                "cantidad" : {
                                    "$sum" : 1
                                }
                            }
                        }, 
                        { 
                            "$project" : {
                                "estado" : "$_id.estado", 
                                "cantidad" : "$cantidad", 
                                "_id" :0
                            }
                        }
                    ]).exec(function(err, todos) {
                        if (err){  res.send(err);  }
                        var myData1 = [];
                        var myData2 = [];
                        for(var i = 0; i < todos.length;i++){
                            myData1.push(todos[i].estado)
                            myData2.push(todos[i].cantidad)
                        }


                        res.json({labels:myData1,data:myData2});

                    });
                  
              
                break;

                case 'admin':
                    Orden_venta.find({idempresa:req.params.id3,estado:req.params.id2}).sort({'_id': -1}).exec(function(err, todos) {
                        if (err){  res.send(err);  }
                         res.json(todos);
                     });
                break;
              
                case 'user':
                break;

     
        }
   
          
    }
    else
    {
        Orden_venta.find({_id:req.params.id},function(err, todos) {
            if (err){ res.send(err); }
            if(todos.length>0)   {    res.json(todos);   }
            else
            {  res.status(500).send('NO EXISTE REGISTRO');      }
        });
    }



}
exports.deleteOrden_venta = function(req, res, next){
  
    Bitacora.create({email: req.params.userID ,permiso:'Elimina',accion:'Elimina Orden_venta '});
    Orden_venta.findByIdAndRemove({ _id: req.params.recordID  }, function(err, todo) {
   
        res.json(todo); 

   


        
    });
}
exports.creaOrden_venta2s = function(req, res, next){
    Bitacora.create(req.body.bitacora);
if(req.params.recordID!=='crea')
{ 
    
    switch(req.body.operacion) {
        case 'actualiza1':
            Orden_venta.findById({ _id: req.params.recordID }, function (err, todo100)  {
                if (err) {  res.send(err);  }
                else  { 
                    todo100.comentario1        	=		req.body.comentario1	;
                    todo100.estado        	=		req.body.estado   	;
                    todo100.save(function (err, todo200){
                        if (err)     {  console.log(err.message)   }
                        res.json(todo200);
                    });
                }
            });
            break;
                                                                                                                                                                 
        }


}
else{


   
            Orden_venta.create({ 
                idempresa     	: req.body.idempresa    	,
                idcompra     	: req.body.idcompra    	,
                nombre	: req.body.nombre	,
                direccion	: req.body.direccion	,
                telefono	: req.body.telefono	,
                total	: req.body.total	,
                tipopago	: req.body.tipopago	,
                idusuario	: req.body.idusuario	,
                estado     	: req.body.estado    	,
                firma     	: req.body.firma    	,
                efectivo     	: req.body.efectivo    	,

                
                direccion2a		: req.body.direccion2a    	,
                nombre2		: req.body.nombre2    	,
                direccion2		: req.body.direccion2    	,
                nit				: req.body.nit    	,
                totalenvio			: req.body.totalenvio    	,
                totalproductos			: req.body.totalproductos    	,
                departamento		: req.body.departamento    	,
                municipio		: req.body.municipio    	,
                zona		: req.body.zona    	,
                pagaracambio		: req.body.pagaracambio    	,

                dproductos: req.body.dproductos,
                              usuarionew:req.body.bitacora.email,
                            }
                              , function(err, todo) {
                              if (err){ 
                                  res.status(500).send(err.message)    }
                                  res.json(todo);
                          });
 
                          


   
 
             
    
}
}
