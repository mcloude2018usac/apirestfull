
var Conveniocalusac = require('../../models/calusac/conveniocalusac');
var Bitacora = require('../../models/bitacora');

exports.getConveniocalusac = function(req, res, next){
       if(req.params.id3)
        {  

            if(req.params.id3=='todos')
            {
                Conveniocalusac.find({idempresa:req.params.id},function(err, todos) {
                    if (err){ res.send(err); }
                   
                      res.json(todos);   
                      
                    
                });

            }
           
        
             
           
        }
        else
        { Conveniocalusac.find({},function(err, todos) {
               if (err){  res.send(err);  }
                res.json(todos);
            });
        }

 
}
exports.deleteConveniocalusac = function(req, res, next){
   
    Bitacora.create({email: req.params.userID ,permiso:'Elimina',accion:'Elimina Conveniocalusac '});
    Conveniocalusac.findByIdAndRemove({ _id: req.params.recordID  }, function(err, todo) {
        res.json(todo);
    });
}


exports.creaConveniocalusac2s = function(req, res, next){
    if( req.body.operacion=='actualizarinfor')
    {

        Conveniocalusac.findById({ _id: req.params.recordID }, function (err, todo100)  {
            if (err) {  res.send(err);  }
            else
            { 
              

                todo100.estado=req.body.estado
    
                todo100.save(function (err, todo200){
                    if (err)     {  console.log(err.message)   }
            
                    res.json(todo200);
                    
                });
            }
        });


    }
    else
    {
    if(req.body.operacion=='ordenpago')
    {
    
        console.log(req.body)
        Conveniocalusac.findById({ _id: req.params.recordID }, function (err, todo)  {
            if (err) {  res.send(err);  }
            else
            {  
                todo.estado       	=	'ordenpago';
             
             todo.noboletapago=req.body.noboletapago;
             todo.fechasiif=req.body.fechasiif;
             todo.llave=req.body.llave;
             todo.identificador=req.body.identificador;
                
                todo.save(function (err, todo){
                    if (err)     {  res.status(500).send(err.message)   }
                    res.json(todo);
                });
            }
        });
    
    }
    else
    {    
    Bitacora.create(req.body.bitacora);
if(req.params.recordID!=='crea')
{ 
    Conveniocalusac.findById({ _id: req.params.recordID }, function (err, todo)  {
        if (err) {  res.send(err);  }
        else
        {  
            todo.f1        	=	req.body.f1        	||	todo.f1        	;
            todo.f2        	=	req.body.f2        	||	todo.f2        	;
            todo.tipo        	=	req.body.tipo        	||	todo.tipo        	;

            todo.nombre        	=	req.body.nombre        	||	todo.nombre        	;
            todo.monto        	=	req.body.monto        	||	todo.monto        	;
            todo.usuarioup=req.body.bitacora.email;
            
            
            todo.save(function (err, todo){
                if (err)     {  res.status(500).send(err.message)   }
                res.json(todo);
            });
        }
    });

}
else{

    Conveniocalusac.find({nombre:req.bodynombre  },function(err, todos) {
        if (err){ res.send(err); }
      
        if(todos.length>0)   {    res.status(500).send('Convenio ya existe'); }
        else
        {   

            Conveniocalusac.create({
                
                idempresa        	: req.body.idempresa        	,
                f1        	: req.body.f1        	,
                f2        	: req.body.f2        	,
                tipo        	: req.body.tipo        	,
                nombre        	: req.body.nombre        	,
                monto        	: req.body.monto       ,
                estado:'creado',
                noboletapago:'',
                fechasiif:'',
                llave:'',
                identificador:'',

                usuarionew:req.body.bitacora.email, 
              }
                , function(err, todo) {
                if (err){ 
                   
                    res.status(500).send(err.message)    }
            
                res.json(todo);
        
             
                
        
            });

            
             }
        
    });
   
}
}}

}



