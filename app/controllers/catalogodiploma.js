var Catalogodiploma = require('../models/catalogodiploma');
var Bitacora = require('../models/bitacora');

exports.getCatalogodiploma = function(req, res, next){

    if(req.params.id3)
    { 
        if(req.params.id3==='todos')
    {

        if(req.params.id2==='ADMINISTRADOR')
        {
            Catalogodiploma.find({idempresa:req.params.id},function(err, todos) {
                if (err){ res.send(err); }
               
                 res.json(todos); 
                
            });
        }
        else
        {
            Catalogodiploma.find({idempresa:req.params.id,unidad:req.params.id2},function(err, todos) {
                if (err){ res.send(err); }
               
                 res.json(todos); 
                
            });

        }

    
    }
    else
    {
        Catalogodiploma.find({_id:req.params.id},function(err, todos) {
            if (err){ res.send(err); }
           
             res.json(todos); 
            
        });

    }
       }
    else
    {
    Catalogodiploma.find({idempresa:req.params.id,unidad:req.params.id2},function(err, todos) {
        if (err){ res.send(err); }
       
         res.json(todos); 
        
    });
}
 
}
exports.deleteCatalogodiploma = function(req, res, next){
   
    Bitacora.create({idempresa:req.params.idempresa,idafiliado:req.params.idafiliado,email: req.params.userID ,permiso:'Elimina',accion:'Elimina catalogodiploma '});
    Catalogodiploma.findByIdAndRemove({ _id: req.params.recordID  }, function(err, todo) {
        res.json(todo);
    });
}


exports.creaCatalogodiploma2s = function(req, res, next){
   
 
    Bitacora.create(req.body.bitacora);
if(req.params.recordID!=='crea')
{ 
    Catalogodiploma.findById({ _id: req.params.recordID }, function (err, todo)  {
        if (err) {  res.send(err);  }
        else
        {  
            todo.nombre        	=	req.body.nombre        	||	todo.nombre        	;
            todo.foto        	=	req.body.foto        	||	todo.foto        	;
          
            todo.encabezado1        	=	req.body.encabezado1        	||	todo.encabezado1        	;
            todo.encabezado2        	=	req.body.encabezado2        	||	todo.encabezado2        	;
            todo.encabezado3        	=	req.body.encabezado3        	||	todo.encabezado3        	;
            todo.encabezado4        	=	req.body.encabezado4        	||	todo.encabezado4        	;

            todo.cuerpo1        	=	req.body.cuerpo1        	||	todo.cuerpo1        	;
            todo.cuerpo2        	=	req.body.cuerpo2        	||	todo.cuerpo2        	;
            todo.cuerpo3        	=	req.body.cuerpo3        	||	todo.cuerpo3        	;
            todo.cuerpo4        	=	req.body.cuerpo4        	||	todo.cuerpo4        	;

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

    Catalogodiploma.find({nombre        	: req.body.nombre,tipo        	: req.body.tipo  },function(err, todos) {
        if (err){ res.send(err); }
      
        if(todos.length>0)   {    res.status(500).send('Ya existe un catalogodiploma con este nombre'); }
        else
        {   

            Catalogodiploma.create({ 
                idempresa        	: req.body.idempresa       	,
                nombre        	: req.body.nombre        	,
                foto        	: req.body.foto        	,
                encabezado1        	: req.body.encabezado1        	,
                encabezado2        	: req.body.encabezado2        	,
                encabezado3        	: req.body.encabezado3        	,
                encabezado4        	: req.body.encabezado4        	,

                cuerpo1        	: req.body.cuerpo1        	,
                cuerpo2        	: req.body.cuerpo2        	,
                cuerpo3        	: req.body.cuerpo3        	,
                cuerpo4        	: req.body.cuerpo4        	,
                unidad: req.body.unidad        	,

                usuarionew:req.body.bitacora.email,
                estado 	: req.body.estado 	
              }
                , function(err, todo) {
                if (err){ 
                   
                    res.status(500).send(err.message)    }
            
                res.json(todo);
        
             
                
        
            });

            
             }
        
    });
   
 
}

}



