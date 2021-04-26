var Orden_compra = require('../../models/asociadoventa/orden_compra');
var Bitacora = require('../../models/bitacora');
var Operadores = require('../../models/asociadoventa/compra_operador');
var Orden_venta = require('../../models/asociadoventa/orden_venta');
var functool = require('../../controllers/funcionesnode');

exports.getOrden_compra = function(req, res, next){
    if(req.params.id5)
    {   
        switch(req.params.id5) {
            case 'individual':
                
                Orden_compra.find({idempresa:req.params.id3,estado:req.params.id2,idusuario:req.params.id4}).sort({'_id': -1}).exec(function(err, todos) {
                    if (err){  res.send(err);  }
                     res.json(todos);
                 });
                break;

                case 'individualgraf':
              
                    Orden_compra.aggregate( [
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
                    Orden_compra.find({idempresa:req.params.id3,estado:req.params.id2}).sort({'_id': -1}).exec(function(err, todos) {
                        if (err){  res.send(err);  }
                         res.json(todos);
                     });
                break;
                case 'admingraf':
              
                    Orden_compra.aggregate( [
                        { "$match": {idempresa:req.params.id3,estado:req.params.id2}},
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

                case 'user':
                break;

                case 'operador':
               
              
                    Orden_compra.find({idempresa:req.params.id3,estado:req.params.id2,userasignado:req.params.id4}).sort({'_id': -1}).exec(function(err, todos) {
                        if (err){  res.send(err);  }
                         res.json(todos);
                     });
                     break;

                     case 'operadorgraf':
              
                        Orden_compra.aggregate( [
                            { "$match": {idempresa:req.params.id3,estado:req.params.id2,userasignado:req.params.id4}},
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

            
        }
   
          
    }
    else
    {
        Orden_compra.find({_id:req.params.id},function(err, todos) {
            if (err){ res.send(err); }
            if(todos.length>0)   {    res.json(todos);   }
            else
            {  res.status(500).send('NO EXISTE REGISTRO');      }
        });
    }



}
exports.deleteOrden_compra = function(req, res, next){
  
    Bitacora.create({email: req.params.userID ,permiso:'Elimina',accion:'Elimina Orden_compra '});
    Orden_compra.findByIdAndRemove({ _id: req.params.recordID  }, function(err, todo) {
   
        res.json(todo); 

   


        
    });
}
exports.creaOrden_compra2s = function(req, res, next){
    Bitacora.create(req.body.bitacora);
if(req.params.recordID!=='crea')
{ 
    
    switch(req.body.operacion) {
        case 'actualizafactura':
            Orden_compra.findById({ _id: req.params.recordID }, function (err, todo100)  {
                if (err) {  res.send(err);  }
                else  { 
                    todo100.comentario7        	=		req.body.comentario7	;
                    todo100.estado        	=		req.body.estado   	;
                    todo100.idventa	=		req.body.idventa   	;
                    todo100.save(function (err, todo200){
                        if (err)     {  console.log(err.message)   }
                        res.json(todo200);
                    });
                }
            });
            break;
        case 'actualiza1':
            Orden_compra.findById({ _id: req.params.recordID }, function (err, todo100)  {
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
            case 'actualiza2':
                Orden_compra.findById({ _id: req.params.recordID }, function (err, todo100)  {
                    if (err) {  res.send(err);  }
                    else  { 
                        todo100.comentario2        	=		req.body.comentario2	;
                        todo100.estado        	=		req.body.estado   	;
                        todo100.save(function (err, todo200){
                            if (err)     {  console.log(err.message)   }
                            res.json(todo200);
                        });
                    }
                });
                break;
                case 'actualiza3':
                    Orden_compra.findById({ _id: req.params.recordID }, function (err, todo100)  {
                        if (err) {  res.send(err);  }
                        else  { 
                            todo100.comentario3        	=		req.body.comentario3	;
                            todo100.estado        	=		req.body.estado   	;
                            todo100.save(function (err, todo200){
                                if (err)     {  console.log(err.message)   }
                                res.json(todo200);
                            });
                        }
                    });
                    break;
                    case 'actualiza4':
                        Orden_compra.findById({ _id: req.params.recordID }, function (err, todo100)  {
                            if (err) {  res.send(err);  }
                            else  { 
                                todo100.comentario4        	=		req.body.comentario4	;
                                todo100.estado        	=		req.body.estado   	;
                                todo100.save(function (err, todo200){
                                    if (err)     {  console.log(err.message)   }
                                    res.json(todo200);
                                });
                            }
                        });
                        break;
                        case 'actualiza5':
                            Orden_compra.findById({ _id: req.params.recordID }, function (err, todo100)  {
                                if (err) {  res.send(err);  }
                                else  { 
                                    todo100.comentario5        	=		req.body.comentario5	;
                                    todo100.estado        	=		req.body.estado   	;
                                    todo100.save(function (err, todo200){
                                        if (err)     {  console.log(err.message)   }
                                        res.json(todo200);
                                    });
                                }
                            });
                            break;
                            case 'actualiza6':
                                Orden_compra.findById({ _id: req.params.recordID }, function (err, todo100)  {
                                    if (err) {  res.send(err);  }
                                    else  { 
                                        todo100.comentario6        	=		req.body.comentario6	;
                                        todo100.estado        	=		req.body.estado   	;
                                        todo100.save(function (err, todo200){
                                            if (err)     {  console.log(err.message)   }
                                           
                                            if(req.body.idventa==='')
                                            {
                                                res.json(todo200);
                                            }
                                            else
                                            {
                                                    Orden_venta.findById({ _id: req.body.idventa}, function (err, todo1001)  {
                                                            if (err) {  res.send(err);  }
                                                            else  { 
                                                                todo1001.estado        	=		req.body.estado   	;
                                                                todo1001.save(function (err, todo2001){
                                                                    if (err)     {  console.log(err.message)   }
                                                                    res.json(todo200);
                                                                });
                                                            }
                                                    });

                                            }

                                        });
                                    }
                                });
                                break;       
                                case 'actualiza7':
                                    Orden_compra.findById({ _id: req.params.recordID }, function (err, todo100)  {
                                        if (err) {  res.send(err);  }
                                        else  { 
                                            todo100.comentario7        	=		req.body.comentario7	;
                                            todo100.estado        	=		req.body.estado   	;
                                            todo100.save(function (err, todo200){
                                                if (err)     {  console.log(err.message)   }
                                                res.json(todo200);
                                            });
                                        }
                                    });
                                    break;     
                                    case 'actualiza8':
                                        Orden_compra.findById({ _id: req.params.recordID }, function (err, todo100)  {
                                            if (err) {  res.send(err);  }
                                            else  { 
                                                todo100.comentario8        	=		req.body.comentario8	;
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

    Operadores.find({}).sort([['encola', 1]]).exec(function(err, todosb) {
console.log(todosb)
                                    
        if (err){  if(err) return next(err);// res.status(404).send(err); 
        return;}
     
    
        if(todosb.length>0)   {  
            var opexx=todosb[0].idusuario
            var opexxid=todosb[0]._id
     console.log(opexx)

            Orden_compra.create({ 
                idempresa     	: req.body.idempresa    	,
                nombre	: req.body.nombre	,
                nombre     	: req.body.nombre    	,
                direccion	: req.body.direccion	,
                telefono	: req.body.telefono	,
                total	: req.body.total	,
                tipopago	: req.body.tipopago	,
                idusuario	: req.body.idusuario	,
                estado     	: req.body.estado    	,

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
             

                userasignado:opexx,
                deliveryasignado: req.body.deliveryasignado	,
                dproductos: req.body.dproductos,
              
                              usuarionew:req.body.bitacora.email,
                            }
                              , function(err, todo) {

                                console.log(todo)
                              if (err){ 
                                  res.status(500).send(err.message)    }


                                  Operadores.findById({ _id: opexxid}, function (err, todo1000)  {
                                    if (err) {  res.send(err);  }
                                    else
                                    {
                                    
                                            todo1000.asignada      	=		todo1000.asignada+1    	;
                                            todo1000.encola      	=		(todo1000.asignada) - (todo1000.ejecutada)  	;
                                            
                                
                                            todo1000.save(function (err, todo200){
                                                if (err)     {  console.log(err.message)   }
                                        
                                                res.json(todo);
                                        
                                                
                                            });
        
                                        
                                    
        
        
                                    }
                                });
                            
                          });
 
                          


        }

    });
 
             
    
}
}
