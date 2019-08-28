
var Asignanotas = require('../../models/calusac/asignanotas');
var Bitacora = require('../../models/bitacora');

exports.getAsignanotas = function(req, res, next){
       if(req.params.id)
        {  
           console.log({carne :req.params.id,nonivel:req.params.id2,nocurso:req.params.id3})
                Asignanotas.find({carne :req.params.id,nonivel:req.params.id2,nocurso:req.params.id3},function(err, todos) {
                    if (err){ res.send(err); }
                   
                    if(todos.length>0)   {  console.log(todos);  res.json(todos);   }
                    else
                    { console.log('no existe'); res.status(500).send('NO EXISTE REGISTRO');      }
                    
                });
             
           
        }
         

    
}

exports.deleteAsignanotas = function(req, res, next){
   
    Bitacora.create({email: req.params.userID ,permiso:'Elimina',accion:'Elimina asignacion de notas calusac '});
    Asignanotas.findByIdAndRemove({ _id: req.params.recordID  }, function(err, todo) {
        res.json(todo);
    });
}


exports.creaAsignanotas2s = function(req, res, next){
   
 
    Bitacora.create(req.body.bitacora);
if(req.params.recordID!=='crea')
{
    Asignanotas.findById({ _id: req.params.recordID }, function (err, todo)  {
        if (err) {  res.send(err);  }
        else
        {  

            todo.carne        	=	req.body.carne        	||	todo.carne        	;   
            todo.ano        	=	req.body.ano        	||	todo.ano        	;   
            todo.tipo        	=	req.body.tipo        	||	todo.tipo        	;
            todo.nota        	=	req.body.nota        	||	todo.nota        	;
            todo.nocurso        	=	req.body.nocurso        	||	todo.nocurso        	;
            todo.nonivel        	=	req.body.nonivel        	||	todo.nonivel 	      	;
            todo.fechag        	=	req.body.fechag        	||	todo.fechag 	      	;
         
            todo.estado        	=	req.body.estado        	||	todo.estado        	;
            

            todo.usuarioup=req.body.bitacora.email;
            
            
            todo.save(function (err, todo){
                if (err)     {  res.status(500).send(err.message)   }
                res.json(todo);
            });
        }
    });

}
else{

  
    
    
    Asignanotas.find({carne       	: req.body.carne        	,
        ano: req.body.ano, nocurso: req.body.nocurso
      
        
         },function(err, todos) {
        if (err){ res.send(err); }
      
        if(todos.length>0)   {    res.status(500).send('Ya existe nota'); }
        else
        {   

            Asignanotas.create({
            carne        	: req.body.carne        	,
            ano: req.body.ano,
            tipo: req.body.tipo,
            nota: req.body.nota,
            nocurso: req.body.nocurso,
            nonivel: req.body.nonivel,
            fechag: req.body.fechag,
        
            estado: req.body.estado,

            usuarionew:req.body.bitacora.email
        
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



