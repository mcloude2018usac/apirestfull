var Comprasaldo = require('../models/comprasaldo');
var Bitacora = require('../models/bitacora');
var Personalhis = require('../models/suscriptorhis');
var Personalsaldo = require('../models/suscriptorsaldo');
var Entradasdpi = require('../models/entradasdpi');
var Compratoken = require('../models/compratoken');
function roundxx(value, decimals) {
    //parseFloat(Math.round(num3 * 100) / 100).toFixed(2);

    return Number(Math.round(value+'e'+decimals)+'e-'+decimals).toFixed(2);
  }

  //comprasaldos
exports.getComprasaldo = function(req, res, next){

    if(req.params.id7)
    {

        if(req.params.id2=='billing')
        {
            var f1=req.params.id3
            var f2=req.params.id4
            var arr1 = f1.split("-");
            var arr2 = f2.split("-");
            var filtro;
            if(req.params.id5=='TODOS' &&  req.params.id6=='TODOS')
            {
               
                filtro={"idempresa":req.params.id7,
                    "createdAt": {"$gte": new Date(f1 +'T00:00:00.000Z'),
                    "$lt": new Date(f2 +'T24:00:00.000Z')},"descripcion":'Cobro por servicio utilizado'
                };
    
            }
            else
            {
                if(req.params.id5!='TODOS' &&  req.params.id6=='TODOS')
                {
                   
                    filtro={"noprov":req.params.id5,"idempresa":req.params.id7,
                        "createdAt": {"$gte": new Date(f1 +'T00:00:00.000Z'),
                        "$lt": new Date(f2 +'T24:00:00.000Z')},"descripcion":'Cobro por servicio utilizado'
                    };
        
                }
                else
                {

                    if(req.params.id5!='TODOS' &&  req.params.id6!='TODOS')
                {
                   
                    filtro={"noprov":req.params.id5,"nodispositivo":req.params.id6,"idempresa":req.params.id7,
                        "createdAt": {"$gte": new Date(f1 +'T00:00:00.000Z'),
                        "$lt": new Date(f2 +'T24:00:00.000Z')},"descripcion":'Cobro por servicio utilizado'
                    };
        
                }
                else
                {
                    filtro={"nodispositivo":req.params.id6,"idempresa":req.params.id7,
                        "createdAt": {"$gte": new Date(f1 +'T00:00:00.000Z'),
                        "$lt": new Date(f2 +'T24:00:00.000Z')},"descripcion":'Cobro por servicio utilizado'
                    };


                }


                  


                }


            }
console.log(filtro)
            Personalhis.aggregate([
                { $match: filtro},
            
                { $group: {
                   _id:  { $dateToString: { format: "%d-%m-%Y", date: "$createdAt" } },
                    monto: { $sum: "$monto"  },
                    cantidad: { $sum:   1  }
                }}
            ], function (err, todos) {
                if (err){ res.send(err); }
                res.json(todos);
            });
          
        }
        else
        {

            if(req.params.id2=='billingparqueo')
            {
                var f1=req.params.id3
                var f2=req.params.id4
                var arr1 = f1.split("-");
                var arr2 = f2.split("-");
                var filtro;
                if(req.params.id5=='TODOS' &&  req.params.id6=='TODOS')
                {
                   
                    filtro={"idempresa":req.params.id7,
                        "createdAt": {"$gte": new Date(f1 +'T00:00:00.000Z'),
                        "$lt": new Date(f2 +'T24:00:00.000Z')}
                    };
        
                }
                else
                {
                    if(req.params.id5!='TODOS' &&  req.params.id6=='TODOS')
                    {
                       
                        filtro={"noprov":req.params.id5,"idempresa":req.params.id7,
                            "createdAt": {"$gte": new Date(f1 +'T00:00:00.000Z'),
                            "$lt": new Date(f2 +'T24:00:00.000Z')}
                        };
            
                    }
                    else
                    {

                        if(req.params.id5!='TODOS' &&  req.params.id6!='TODOS')
                    {
                       
                        filtro={"noprov":req.params.id5,"nodispositivo":req.params.id6,"idempresa":req.params.id7,
                            "createdAt": {"$gte": new Date(f1 +'T00:00:00.000Z'),
                            "$lt": new Date(f2 +'T24:00:00.000Z')}
                        };
            
                    }
                    else
                    {
                        filtro={"nodispositivo":req.params.id6,"idempresa":req.params.id7,
                            "createdAt": {"$gte": new Date(f1 +'T00:00:00.000Z'),
                            "$lt": new Date(f2 +'T24:00:00.000Z')}
                        };


                    }


                        filtro={"nodispositivo":req.params.id6,"idempresa":req.params.id7,
                            "createdAt": {"$gte": new Date(f1 +'T00:00:00.000Z'),
                            "$lt": new Date(f2 +'T24:00:00.000Z')}
                        };


                    }


                }

                Entradasdpi.aggregate([
                    { $match: filtro},
                
                    { $group: {
                       _id:  { $dateToString: { format: "%d-%m-%Y", date: "$createdAt" } },
                        monto: { $sum: "$monto"  },
                        cantidad: { $sum:   1  }
                    }}
                ], function (err, todos) {
                    if (err){ res.send(err); }
                    res.json(todos);
                });
              
            }
           
        }
    }
    else{
    if(req.params.id3)
    {    if(req.params.id2=='vende')
        {
            Comprasaldo.find({'idsuscriptor2.id':req.params.id,idempresa:req.params.id2},function(err, todos) {
                if (err){ res.send(err); }
               
                if(todos.length>0)   {    res.json(todos);   }
                else
                {  res.status(500).send('NO EXISTE REGISTRO');      }
                
            });
      

        }
        else
        {
                  if(req.params.id2=='historial')
                    {
                        Personalhis.find({'idsuscriptor.id':req.params.id}).sort([['createdAt', -1]]).exec(function(err, todos) {
                            if (err){ res.send(err); }
                            res.json(todos);
                        });
            
                    }
                    else
                    {
                           

                    }

        }
       
    }
    else
    {
        if(req.params.id2)
        {  
                 Comprasaldo.find({'idsuscriptor.id':req.params.id,"idempresa":req.params.id2}).sort([['createdAt', -1]]).exec(function(err, todos) {
                    if (err){ res.send(err); }
                    res.json(todos);
                });
             
           
        }
        else
        { Comprasaldo.find({"idempresa":req.params.id},function(err, todos) {
               if (err){  res.send(err);  }
                res.json(todos);
            });
        }

    }
}
}
exports.deleteComprasaldo = function(req, res, next){
   
    Bitacora.create({idempresa:req.params.idempresa,idafiliado:req.params.idafiliado,email: req.params.userID ,permiso:'Elimina',accion:'Elimina compra saldo'});
    Comprasaldo.findByIdAndRemove({ _id: req.params.recordID  }, function(err, todo) {
        res.json(todo);
    });
}


exports.creaComprasaldo2s = function(req, res, next){
   
 
    Bitacora.create(req.body.bitacora);

if(req.body.operacion=='pagaservicio')
{


    Personalsaldo.find({idempresa:req.body.idempresa,'idsuscriptor.id': req.body.idsuscriptor }).populate('idsuscriptor.id').exec(function(err, todos) {
        if (err){ res.send(err); }
        var myData = [];

        if(todos.length>0)   { 
      
            console.log('pasa1')
                   
            Personalsaldo.findById({ _id:todos[0]._id }, function (err, todo)  {
        if (err) {  res.send(err);  }
        else
        { 
            console.log('pasa2')
            
            if(Number(todos[0].saldoactual)>=Number(req.body.monto))
            {

                        
                todo.saldoactual        	=		Number(todos[0].saldoactual)-Number(req.body.monto)    	;
            
                todo.save(function (err, todo){
                    if (err)     {  console.log(err.message)   }
                    myData.push({tarifa:roundxx(Number(req.body.monto),2),
                    nombre:todos[0].idsuscriptor.id.nombre,cui:todos[0].idsuscriptor.id.cui
                    ,saldo:roundxx(todos[0].saldoactual,2),
                        id:todos[0]._id,saldoactual:roundxx(Number(todos[0].saldoactual)-Number(req.body.monto) ,2)});

                        Compratoken.findById({ _id: req.body.tokencompra }, function (err, todott)  {
                            if (err) {  res.send(err);  }
                            else
                            { 
                                todott.estado    	=	1  	;
                                todott.usuarioup=req.body.bitacora.email;
                    
                                todott.save(function (err, todott){
                                    if (err)     {  res.status(500).send(err.message)   }
                                   
                                    Personalhis.create({idempresa        	: req.body.idempresa        ,  
                                        idsuscriptor :{    id	:todos[0].idsuscriptor.id._id,    nombre	: todos[0].idsuscriptor.id.nombre       },
                                     tipo   		: 'Pago por '+req.body.tipocompra+' (+)',descripcion   		: 'Operación de pago por '+req.body.tipocompra+' (+)', 
                                     saldoanterior   		: roundxx(todos[0].saldoactual,2),
                                     grupo1:'PAGO',
                                       monto   		: roundxx(Number(req.body.monto   ),2),                                  
                                        saldoactual   		: roundxx(Number(todos[0].saldoactual)-Number(req.body.monto   ) ,2),
                                        idtrans   		:todo._id,
                                        nodispositivo 		: '0',
                                        noprov 		: '0',
                                        idempresa0:req.body.idempresa0        	,
                                        idsuscriptor2:req.body.idsuscriptor2 ,
                                        tipo2   		: 'Venta por '+req.body.tipocompra+' (+)',descripcion2   		: 'Operación de venta por '+req.body.tipocompra+' (+)', 
                                        grupo2:'COBRO',
                                        monto2:roundxx(Number(req.body.monto2   ),2),
                                        tokentrama:todott._id,
                              codigo1: '', usuarionew	: req.body.bitacora.email,      usuarioup	: req.body.bitacora.email});
                          
                
                
                                        res.json(myData);

                                });
                            }
                        });
                    
           

                
                });
                
            }
            else
            {
                    myData.push({nombre:'Saldo insuficiente para poder realizar operación',cui:'',saldo:todos[0].saldoactual,
                    id:99999,saldoactual:0});

                        res.json(myData);



            }
        
        }
    });
        }
        else
        {
            res.status(500).send('No existe suscriptor')  
        }

});
            
        
       
 


}
else
{    
if(req.params.recordID!=='crea')
{ 
    Comprasaldo.findById({ _id: req.params.recordID }, function (err, todo)  {
        if (err) {  res.send(err);  }
        else
        {           todo.idsuscriptor        	={id:req.body.idsuscriptor.id,nombre:req.body.idsuscriptor.nombre   }   	;
              todo.monto        	=	req.body.monto        	||	todo.monto        	;
            todo.nombre        	=	req.body.nombre        	||	todo.nombre        	;
            todo.url        	=	req.body.url        	||	todo.url        	;
            todo.tpago        	=	req.body.tpago        	||	todo.tpago        	;
            todo.estado    	=	req.body.estado    	||	todo.estado    	;
            todo.usuarioup=req.body.bitacora.email;

            todo.save(function (err, todo){
                if (err)     {  res.status(500).send(err.message)   }
                res.json(todo);
            });
        }
    });

}
else{

console.log({'idsuscriptor.id':req.body.idsuscriptor.id,    idempresa        	: req.body.idempresa        	})

    Personalsaldo.find({'idsuscriptor.id':req.body.idsuscriptor.id,    idempresa        	: req.body.idempresa        	})
                .populate('idsuscriptor.id').exec(function(err, todos) {
        if (err) {  res.send(err);  }
        else
        { 
          console.log(todos)
            Personalsaldo.findById({ _id:todos[0]._id }, function (err, todo3)  {
                if (err) {  res.send(err);  }
                else
                {  
                       todo3.saldoactual        	=		Number(todo3.saldoactual)+Number(req.body.monto )    	;
                       todo3.save(function (err, todo){
                         if (err)     {  console.log(err.message)   }
                            Comprasaldo.create({ 
                                idempresa        	: req.body.idempresa        	,
                                idsuscriptor        	: req.body.idsuscriptor        	,
                                monto        	: req.body.monto        	,
                                nombre        	: req.body.nombre        	,
                                descripcion        	: req.body.descripcion        	,
                                url        	: req.body.url        	,
                                tpago        	: req.body.tpago        	,
                                usuarionew:req.body.bitacora.email,
                                estado 	: req.body.estado 	,
                                idempresa0:req.body.idempresa0        	,
                                idsuscriptor2        	: req.body.idsuscriptor2   
                              }
                                , function(err, todo22) {
                                if (err){ res.status(500).send(err.message)    }


                                Compratoken.findById({ _id: req.body.tokencompra }, function (err, todott)  {
                                    if (err) {  res.send(err);  }
                                    else
                                    { 
                                        todott.estado    	=	1  	;
                                        todott.usuarioup=req.body.bitacora.email;
                            
                                        todott.save(function (err, todott){
                                            if (err)     {  res.status(500).send(err.message)   }
                                         

                                            Personalhis.create({idempresa        	: req.body.idempresa        ,  
                                                idsuscriptor :{    id	:todos[0].idsuscriptor.id._id,    nombre	: todos[0].idsuscriptor.id.nombre       },
                                             tipo   		: 'Compra '+req.body.tipocompra+' (+)',descripcion   		: 'Operación de compra '+req.body.tipocompra+' (+)', 
                                             saldoanterior   		: roundxx(todos[0].saldoactual,2),
                                             grupo1:'PAGO0',
                                               monto   		: roundxx(Number(req.body.monto   ),2),                                  
                                                saldoactual   		: roundxx(Number(todos[0].saldoactual)+Number(req.body.monto   ) ,2),
                                                idtrans   		: todo22._id,
                                                nodispositivo 		: '0',
                                                noprov 		: '0',
                                                idempresa0:req.body.idempresa0        	,
                                                idsuscriptor2:req.body.idsuscriptor2 ,
                                                grupo1:'COBRO',
                                                tipo2   		: 'Venta '+req.body.tipocompra+' (+)',descripcion2   		: 'Operación de venta '+req.body.tipocompra+' (+)', 
                                                monto2:roundxx(Number(req.body.monto2   ),2),
                                                
                                                 codigo1: '', usuarionew	: req.body.bitacora.email,      usuarioup	: req.body.bitacora.email});
                                  
                                        res.json(todo22);
                                

                                        });
                                    }
                                });



                            
                            });



                        
                     });
                        
                   
               
                }
            });


       

        }
    });


   
 
}}

}



