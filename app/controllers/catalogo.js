var Catalogo = require('../models/catalogo');
var Bitacora = require('../models/bitacora');

exports.getCatalogo = function(req, res, next){
   
    if(req.params.id3)
    { //req.params.id=='UNIDADES' &&
  
    if(req.params.id=='GRUPOSEVENTOS')
    {

     
        Catalogo.find({tipo:req.params.id,nombre:req.params.id2,idempresa:req.params.id3},function(err, todos) {
            if (err){ res.send(err); }
           
               res.json(todos);  
           
            
        });
    }
    else
    {
    if(req.params.id==req.params.id2)
    {
        Catalogo.find({tipo:req.params.id2,idempresa:req.params.id3},function(err, todos) {
            if (err){ res.send(err); }
           
               res.json(todos);  
           
            
        });


    }
    else
    {
        if( req.params.id2!='UNIDADES')
        {

            if(req.params.id=='5bae3259ce90232ba82c1cec' )
            {//RETORNA TODOS
                Catalogo.find({tipo:'UNIDADES',idempresa:req.params.id3},function(err, todos) {
                    if (err){ res.send(err); }
                   
                    if(todos.length>0)   {    res.json(todos);   }
                    else
                    {  res.status(500).send('NO EXISTE REGISTRO');      }
                    
                });

            }
            else
            {
                Catalogo.find({_id:req.params.id},function(err, todos) {
                    if (err){ res.send(err); }
                   
                    if(todos.length>0)   {    res.json(todos);   }
                    else
                    {  res.status(500).send('NO EXISTE REGISTRO');      }
                    
                });


            }


        }
        else
        {

            Catalogo.find({tipo:req.params.id2,idempresa:req.params.id3},function(err, todos) {
                if (err){ res.send(err); }
               
                if(todos.length>0)   {    res.json(todos);   }
                else
                {  res.status(500).send('NO EXISTE REGISTRO');      }
                
            });

        }
   
    }
    }

    }
    else
    {
        if(req.params.id2=='todos')
        {  
            Catalogo.find({idempresa:req.params.id},function(err, todos) {
                if (err){ res.send(err); }
               
                 res.json(todos); 
                
            });
               
             
           
        }
        else
        { 
            Catalogo.find({_id:req.params.id},function(err, todos) {
                if (err){ res.send(err); }
               
                if(todos.length>0)   {    res.json(todos);   }
                else
                {  res.status(500).send('NO EXISTE REGISTRO');      }
                
            });
        }

    }
 
}
exports.deleteCatalogo = function(req, res, next){
   
    Bitacora.create({idempresa:req.params.idempresa,idafiliado:req.params.idafiliado,email: req.params.userID ,permiso:'Elimina',accion:'Elimina catalogo '});
    Catalogo.findByIdAndRemove({ _id: req.params.recordID  }, function(err, todo) {
        res.json(todo);
    });
}


exports.creaCatalogo2s = function(req, res, next){
   
 
    Bitacora.create(req.body.bitacora);
if(req.params.recordID!=='crea')
{ 
    Catalogo.findById({ _id: req.params.recordID }, function (err, todo)  {
        if (err) {  res.send(err);  }
        else
        {   todo.tipo        	=	req.body.tipo        	||	todo.tipo        	;
            todo.nombre        	=	req.body.nombre        	||	todo.nombre        	;
            todo.fecha        	=	req.body.fecha        	||	todo.fecha        	;
            todo.foto        	=	req.body.foto        	||	todo.foto        	;
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

    Catalogo.find({nombre        	: req.body.nombre,tipo        	: req.body.tipo  },function(err, todos) {
        if (err){ res.send(err); }

        if(todos.length>0)   {    res.status(500).send('Ya existe un catalogo con este nombre'); }
        else
        {

            Catalogo.create({
                idempresa 	: req.body.idempresa       	,
                tipo 	: req.body.tipo        	,
                nombre 	: req.body.nombre        	,
                fecha 	: req.body.fecha        	,
                foto 	: req.body.foto        	,
                usuarionew:req.body.bitacora.email,
                estado	: req.body.estado 	
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



