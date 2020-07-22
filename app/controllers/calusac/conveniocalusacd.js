
var Conveniocalusacd = require('../../models/calusac/conveniocalusacd');
var Bitacora = require('../../models/bitacora');

exports.getConveniocalusacd = function(req, res, next){
       if(req.params.id3)
        {  
           
            if(req.params.id3=='todos')
            {
                Conveniocalusacd.find({idempresa:req.params.id,idconvenio:req.params.id2}).
                populate('ididioma').populate('tipopago').populate('jornada').populate('profesor').
                populate('nivel').populate('horario').exec(function(err, todos) {
                    if (err){ res.send(err); }
                   
                      res.json(todos);   
                      
                    
                });

            }
            
              
             
           
        }
        else
        { Conveniocalusacd.find({},function(err, todos) {
               if (err){  res.send(err);  }
                res.json(todos);
            });
        }

 
}
exports.deleteConveniocalusacd = function(req, res, next){
   
    Bitacora.create({email: req.params.userID ,permiso:'Elimina',accion:'Elimina Conveniocalusacd '});
    Conveniocalusacd.findByIdAndRemove({ _id: req.params.recordID  }, function(err, todo) {
        res.json(todo);
    });
}


exports.creaConveniocalusacd2s = function(req, res, next){
   
 
    Bitacora.create(req.body.bitacora);

if(req.params.recordID!=='crea')
{ 

    if( req.body.operacion=='actualizarinfor')
    {

        Conveniocalusacd.findById({ _id: req.params.recordID }, function (err, todo100)  {
            if (err) {  res.send(err);  }
            else
            { 
              

                todo100.estado='asignado'
                todo100.idasigna=req.body.idasigna
    
                todo100.save(function (err, todo200){
                    if (err)     {  console.log(err.message)   }
            
                    res.json(todo200);
                    
                });
            }
        });


    }
    else
    {

    Conveniocalusacd.findById({ _id: req.params.recordID }, function (err, todo)  {
        if (err) {  res.send(err);  }
        else
        {  
            todo.idtipounidad        	=	req.body.idtipounidad       	||	todo.idtipounidad      	;
            todo.idunidadacademica        	=	req.body.idunidadacademica       	||	todo.idunidadacademica      	;

            todo.tipogrupo        	=	req.body.tipogrupo        	||	todo.tipogrupo        	;
            todo.tipocurso        	=	req.body.tipocurso        	||	todo.tipocurso        	;


            todo.idconvenio        	=	req.body.idconvenio        	||	todo.idconvenio        	;
            todo.nombre        	=	req.body.nombre        	||	todo.nombre        	;
            todo.carne        	=	req.body.carne        	||	todo.carne        	;
            todo.cui        	=	req.body.cui        	||	todo.cui        	;
            todo.correo        	=	req.body.correo        	||	todo.correo        	;


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

}}
else{

    Conveniocalusacd.find({correo:req.body.correo  , idconvenio        	: req.body.idconvenio      },function(err, todos) {
        if (err){ res.send(err); }
      
        if(todos.length>0)   {    res.status(500).send('Correo  ya existe'); }
        else
        {   

            Conveniocalusacd.create({
                idunidadacademica        	: req.body.idunidadacademica        	,
                idtipounidad:req.body.idtipounidad,
                idempresa        	: req.body.idempresa        	,
                idconvenio        	: req.body.idconvenio        	,
                cui        	: req.body.cui        	,
                carne        	: req.body.carne        	,
                nombre        	: req.body.nombre        	,
                correo        	: req.body.correo       ,
                estado:'creado',

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

            
             }
        
    });
   
 
}

}



