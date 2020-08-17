var Orden_compra = require('../../models/asociadoventa/orden_compra');
var Bitacora = require('../../models/bitacora');
var Operadores = require('../../models/asociadoventa/compra_operador');

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
    console.log(req.body)
    if( req.body.operacion=='actualizaestado1')
    {


        Orden_compra.findById({ _id: req.params.recordID }, function (err, todo100)  {
            if (err) {  res.send(err);  }
            else
            { 
              

                todo100.comentario1        	=		req.body.comentario1	;
                            todo100.estado        	=		req.body.estado   	;
                         
    
                todo100.save(function (err, todo200){
                    if (err)     {  console.log(err.message)   }
            
                    res.json(todo200);
                    
                });
            }
        });

   


    }
    else{
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
