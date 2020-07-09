
var Conveniocalusacd2 = require('../../models/calusac/conveniocalusacd2');
var Bitacora = require('../../models/bitacora');

exports.getConveniocalusacd2 = function(req, res, next){
       if(req.params.id3)
        {  
           console.log(req.params)
            if(req.params.id3=='todos')
            {
                Conveniocalusacd2.find({idempresa:req.params.id}).
                populate('ididioma').populate('tipopago').populate('jornada').populate('profesor').
                populate('nivel').populate('horario').exec(function(err, todos) {
                    if (err){ res.send(err); }
                   console.log(todos)
                      res.json(todos);   
                      
                    
                });

            }
            
              
             
           
        }
        else
        { Conveniocalusacd2.find({},function(err, todos) {
               if (err){  res.send(err);  }
                res.json(todos);
            });
        }

 
}
exports.deleteConveniocalusacd2 = function(req, res, next){
   
    Bitacora.create({email: req.params.userID ,permiso:'Elimina',accion:'Elimina Conveniocalusacd2 '});
    Conveniocalusacd2.findByIdAndRemove({ _id: req.params.recordID  }, function(err, todo) {
        res.json(todo);
    });
}


exports.creaConveniocalusacd22s = function(req, res, next){
   
 
    Bitacora.create(req.body.bitacora);

if(req.params.recordID!=='crea')
{ 
    if( req.body.operacion=='actualizarinfor')
    {

        Conveniocalusacd2.findById({ _id: req.params.recordID }, function (err, todo100)  {
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
        Conveniocalusacd2.findById({ _id: req.params.recordID }, function (err, todo)  {
            if (err) {  res.send(err);  }
            else
            {  
                todo.estado       	=	'Generada';
             
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
    Conveniocalusacd2.findById({ _id: req.params.recordID }, function (err, todo)  {
        if (err) {  res.send(err);  }
        else
        {  
            todo.idtipounidad        	=	req.body.idtipounidad       	||	todo.idtipounidad      	;
            todo.idunidadacademica        	=	req.body.idunidadacademica       	||	todo.idunidadacademica      	;



         
            todo.estado        	=	req.body.estado        	||	todo.estado        	;
            todo.monto        	=	req.body.monto        	||	todo.monto        	;
      
            todo.comentario        	=	req.body.comentario        	||	todo.comentario        	;


            todo.ididioma        	=	req.body.ididioma        	||	todo.ididioma        	;

            todo.tipopago        	=	req.body.tipopago        	||	todo.tipopago        	;
            todo.jornada        	=	req.body.jornada        	||	todo.jornada        	;
            todo.profesor        	=	req.body.profesor        	||	todo.profesor        	;

            todo.nivel        	=	req.body.nivel        	||	todo.nivel        	;
            todo.horario        	=	req.body.horario        	||	todo.horario        	;
         

            todo.usuarioup=req.body.bitacora.email;
            
            
            todo.save(function (err, todo){
                if (err)     {  res.status(500).send(err.message)   }
                res.json(todo);
            });
        }
    });

}}}
else{



            Conveniocalusacd2.create({
                idunidadacademica        	: req.body.idunidadacademica        	,
                idtipounidad:req.body.idtipounidad,
                idempresa        	: req.body.idempresa        	,
             
            
                monto        	: req.body.monto        	,
         
                fechasiif        	: req.body.fechasiif        	,
                monto        	: req.body.monto        	,
            noboletapago:'',
            fechasiif:'',
            llave:'',
            identificador:'',
            nombre:req.body.comentario   + ' '+  req.body.monto    ,
                comentario        	: req.body.comentario       ,
                estado:req.body.estado,
                tipo        	: req.body.tipo       ,
                ididioma        	: req.body.ididioma       ,
                tipopago        	: req.body.tipopago        	,
                jornada        	: req.body.jornada        	,
                profesor        	: req.body.profesor        	,
                nivel        	: req.body.nivel        	,
                horario        	: req.body.horario        	,
                tipogrupo        	: req.body.tipogrupo       ,
                tipocurso        	: req.body.tipocurso       ,
                idperiodo        	: req.body.idperiodo       ,



                usuarionew:req.body.bitacora.email, 
              }
                , function(err, todo) {
                if (err){ 
                   
                    res.status(500).send(err.message)    }
            
                res.json(todo);
        
             
                
        
            });

            
             
        
    });
   
 
}

}



