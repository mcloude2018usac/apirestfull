var Compratoken = require('../models/compratoken');
var Bitacora = require('../models/bitacora');

exports.getCompratoken = function(req, res, next){
   
    if(req.params.id4)
    {               if(req.params.id2=='0' )
    { 
        Compratoken.find({idempresa:req.params.id3,estado:req.params.id2,tipo:req.params.id4,usertrasferencia:req.params.id }).sort({'_id': -1}).exec(function(err, todos) {
                if (err){  res.send(err);  }
                 res.json(todos);
             });
    }
    else
    {
            if(req.params.id2=='1')
            {
                Compratoken.find({idempresa:req.params.id3,estado:'20',tipo:req.params.id4,usertrasferencia:req.params.id }).sort({'_id': -1}).exec(function(err, todos) {
                        if (err){  res.send(err);  }
                         res.json(todos);
                     });
            }
            else
            {
                if(req.params.id2=='-1')
                { 
                    Compratoken.find({idempresa:req.params.id3,estado:req.params.id2,tipo:req.params.id4,usertrasferencia:req.params.id }).sort({'_id': -1}).exec(function(err, todos) {
                            if (err){  res.send(err);  }
                             res.json(todos);
                         });
                }
                else
                {
                Compratoken.find({idempresa:req.params.id3,tipo:req.params.id4,usuarionew:req.params.id
                , }).sort({'_id': -1}).exec(function(err, todos) {
                    if (err){  res.send(err);  }
                     res.json(todos);
                 });
            }}}
    }
    else
    {
    if(req.params.id2)
    {
        Compratoken.find({_id:req.params.id},function(err, todos) {
            if (err){ res.send(err); }

            res.json(todos);
        
            
        });
    }
    else
    {
    Compratoken.find({_id:req.params.id,estado:0},function(err, todos) {
        if (err){ res.send(err); }
       
        if(todos.length>0)   {    res.json(todos);   }
        else
        {  res.status(500).send('NO EXISTE REGISTRO');      }
        
    });
}}
}
exports.deleteCompratoken = function(req, res, next){
   
    Bitacora.create({idempresa:req.params.idempresa,idafiliado:req.params.idafiliado,email: req.params.userID ,permiso:'Elimina',accion:'Elimina Compratoken '});
    Compratoken.findByIdAndRemove({ _id: req.params.recordID  }, function(err, todo) {
        res.json(todo);
    });
}


exports.creaCompratoken2s = function(req, res, next){
   

    Bitacora.create(req.body.bitacora);
if(req.params.recordID!=='crea')
{ 
    Compratoken.findById({ _id: req.params.recordID }, function (err, todo)  {
        if (err) {  res.send(err);  }
        else
        { 
            todo.estado    	=	req.body.estado    	||	todo.estado    	;
            todo.cobroservicio	=	req.body.cobroservicio	||	todo.cobroservicio	;
            
            todo.usuarioup=req.body.bitacora.email;

            todo.save(function (err, todo){
                if (err)     {  res.status(500).send(err.message)   }
                res.json(todo);
            });
        }
    });

}
else{



            Compratoken.create({ 
                idempresa        	: req.body.idempresa       	,
                trama        	: req.body.trama        	,
                nombre        	: req.body.trama + '°' +  req.body.usertrasferencia +'°'+   req.body.bitacora.email     	,
                tipo        	: req.body.tipo        	,
                usuarionew:req.body.bitacora.email,
                cobroservicio:'',
                usertrasferencia:req.body.usertrasferencia,
                estado 	: req.body.estado 	
              }
                , function(err, todo) {
                if (err){ 
                  
                    res.status(500).send(err.message)  ;  }
            
                res.json(todo);
        
             
                
        
            });

            
             

   
 
}

}



