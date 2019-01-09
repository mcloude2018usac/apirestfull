var Compratransferencia = require('../models/compratranferencia');
var Bitacora = require('../models/bitacora');
var Personalhis = require('../models/suscriptorhis');
var Personalsaldo = require('../models/suscriptorsaldo');

function roundxx(value, decimals) {
    //parseFloat(Math.round(num3 * 100) / 100).toFixed(2);

    return Number(Math.round(value+'e'+decimals)+'e-'+decimals).toFixed(2);
  }
exports.getCompratransferencia = function(req, res, next){
    if(req.params.id2)
    { 
        Compratransferencia.find({tipo:req.params.id2},function(err, todos) {
            if (err){ res.send(err); }
           
            if(todos.length>0)   {    res.json(todos);   }
            else
            {  res.status(500).send('NO EXISTE REGISTRO');      }
            
        });
  
    }
    else
    {
        if(req.params.id)
        {  
           
            Compratransferencia.find({'idsuscriptor.id':req.params.id}).sort([['createdAt', -1]]).populate('idsuscriptor2.id').exec(function(err, todos) {
                if (err){ res.send(err); }
                res.json(todos);
            });
         

           
        }
        else
        { Compratransferencia.find(function(err, todos) {
               if (err){  res.send(err);  }
                res.json(todos);
            });
        }

    }
 
}
exports.deleteCompratransferencia = function(req, res, next){
   
    Bitacora.create({email: req.params.userID ,permiso:'Elimina',accion:'Elimina compra saldo'});
    Compratransferencia.findByIdAndRemove({ _id: req.params.recordID  }, function(err, todo) {
        res.json(todo);
    });
}


exports.creaCompratransferencia2s = function(req, res, next){
   
 
    Bitacora.create(req.body.bitacora);
if(req.params.recordID!=='crea')
{ 
    Compratransferencia.findById({ _id: req.params.recordID }, function (err, todo)  {
        if (err) {  res.send(err);  }
        else
        {      todo.idsuscriptor        	={id:req.body.idsuscriptor.id,nombre:req.body.idsuscriptor.nombre   }   	;
        todo.idsuscriptor2        	={id:req.body.idsuscriptor.id,nombre:req.body.idsuscriptor.nombre   }   	;
            todo.monto        	=	req.body.monto        	||	todo.monto        	;
            todo.nombre        	=	req.body.nombre        	||	todo.nombre        	;
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

    Personalsaldo.find({'idsuscriptor.id':req.body.idsuscriptor.id})
                .populate('idsuscriptor.id').exec(function(err, todos) {
        if (err) {  res.send(err);  }
        else
        { 
           // console.log(todos[0]);
            Personalsaldo.findById({ _id:todos[0]._id }, function (err, todo3)  {
                if (err) {  res.send(err);  }
                else
                {   // console.log(Number(todo3.saldoactual)+Number(req.body.monto ));
                    if(Number(todo3.saldoactual)<Number(req.body.monto ))
                    {

                        res.status(500).send('Saldo insuficiente para poder transferir');
                    }
                    else
                    {
                       todo3.saldoactual        	=		Number(todo3.saldoactual)-Number(req.body.monto )    	;
                       todo3.save(function (err, todo){
                         if (err)     {  console.log(err.message)   }
                       //  console.log(todo);
                
                           

                            ///////////////////////////////////////////////////////////


                            Personalsaldo.find({'idsuscriptor.id':req.body.idsuscriptor2.id})
                                            .populate('idsuscriptor.id').exec(function(err, todos11) {
                                    if (err) {  res.send(err);  }
                                    else
                                    { 
                                    // console.log(todos[0]);
                                        Personalsaldo.findById({ _id:todos11[0]._id }, function (err, todo31)  {
                                            if (err) {  res.send(err);  }
                                            else
                                            {   
                                                todo31.saldoactual        	=		Number(todo31.saldoactual)+Number(req.body.monto )    	;
                                                todo31.save(function (err, todo){
                                                    if (err)     {  console.log(err.message)   }
                                                //  console.log(todo);
                                            
                                                      
                                                    
                                                        Compratransferencia.create({ idsuscriptor        	: req.body.idsuscriptor        	,
                                                            idsuscriptor2        	: req.body.idsuscriptor2        	,
                                                            monto        	: req.body.monto        	,
                                                            nombre        	: req.body.nombre        	,
                                                            usuarionew:req.body.bitacora.email,
                                                            estado 	: req.body.estado 	
                                                          }
                                                            , function(err, todo22) {
                                                            if (err){ res.status(500).send(err.message)    }


                                                            Personalhis.create({idsuscriptor :{    id	:todos[0].idsuscriptor.id._id, 
                                                                nombre	: todos[0].idsuscriptor.id.nombre       },
                                                                 tipo   		: 'Trasferencia de Saldo (-)',descripcion   		: 'Operación de Trasferencia de saldo (-)', 
                                                                 saldoanterior   		: roundxx(todos[0].saldoactual,2),
                                                                   monto   		: roundxx(Number(req.body.monto   ),2),                                  
                                                                    saldoactual   		: roundxx(Number(todos[0].saldoactual)-Number(req.body.monto   ) ,2),
                                                                    idtrans   		: todo22._id,
                                                                    nodispositivo 		: '0',
                                                                    noprov 		: '0',
                                                          codigo1: '', usuarionew	: req.body.bitacora.email,      usuarioup	: req.body.bitacora.email});
                                                       
                                                           
                                                            Personalhis.create({idsuscriptor :{    id	:todos11[0].idsuscriptor.id._id, 
                                                                nombre	: todos11[0].idsuscriptor.id.nombre       },
                                                                tipo   		: 'Trasferencia de Saldo (+)',descripcion   		: 'Operación de Trasferencia de saldo saldo (+)', 
                                                                saldoanterior   		: roundxx(todos11[0].saldoactual,2),
                                                                    monto   		: roundxx(Number(req.body.monto   ),2),                                  
                                                                    saldoactual   		: roundxx(Number(todos11[0].saldoactual)+Number(req.body.monto   ) ,2),
                                                                    idtrans   		: todo22._id,
                                                                    nodispositivo  		: '0',
                                                                    noprov 		: '0',
                                                            codigo1: '', usuarionew	: req.body.bitacora.email,      usuarioup	: req.body.bitacora.email});
                                                        
                                
                                                            res.json(todo22);
                                                    
                                                        });
                            
                            
                                                    
                                                });
                                                
                                            
                                        
                                            }
                                        });
                            
                            }
                            });
            
                            ////////////////////////////////////////////////////////////

                           



                        
                     });
                    }
                   
               
                }
            });
 
}
});

}

}

