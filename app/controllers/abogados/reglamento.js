
var Reglamento = require('../../models/abogados/reglamneto');
var Bitacora = require('../../models/bitacora');



var datipo = function(str,vector) {
   var re='';
   for(var i = 0; i < vector.length;i++){
    if(vector[i]._id==str)
    {
    re=vector[i].nombre
        break;

    }
   }




    return re;
};


exports.getReglamento = function(req, res, next){

    if(req.params.id4)
    { 
        if(req.params.id3=='categoria')
        {
            if(req.params.id4=='Administrador')
            {
                Reglamento.find({idempresa:req.params.id,idcategoria:req.params.id2}).populate('grupo').populate('pais').populate('tipo').populate('sector').populate('area').exec(function(err, todos) {
                    if (err){ res.send(err); }
                   
                    res.json(todos);   
                    
                });
    
            }
            else{
                Reglamento.find({idempresa:req.params.id,idcategoria:req.params.id2,usuarionew:req.params.id4}).populate('grupo').populate('pais').populate('tipo').populate('sector').populate('area').exec(function(err, todos) {
                    if (err){ res.send(err); }
                   
                    res.json(todos);   
                    
                });
    
            }

        }
    }
    else{
  
  
        if(req.params.id2=='plantillas')
        {
            Reglamento.find({idempresa:req.params.id,_id:req.params.id2}).exec(function(err, todos) {
                if (err){ res.send(err); }
               
                res.json(todos);   
                
            });

        }
        else
        {

            Reglamento.find({}).populate('grupo').exec(function(err, todos) {
                if (err){  res.send(err);  }
                 res.json(todos);
             });

        }
       
       

    }

}
exports.deleteReglamento = function(req, res, next){
   
    Bitacora.create({email: req.params.userID ,permiso:'Elimina',accion:'Elimina Reglamento '});
    Reglamento.findByIdAndRemove({ _id: req.params.id  }, function(err, todo) {
        res.json(todo);
    });
}


exports.creaReglamento2s = function(req, res, next){
   
 
  if(req.params.id=='actualiza')
{ 
   

}
else{
    if(req.params.id!=='crea')
    { 
         Bitacora.create(req.body.bitacora);
        Reglamento.findById({ _id: req.params.id}, function (err, todo)  {
            if (err) {  res.send(err);  }
            else
            {  todo.nombre       	=	req.body.nombre        	||	todo.nombre        	;         
               todo.titulo       	=	req.body.titulo        	||	todo.titulo        	;         
               todo.texto        	=	req.body.texto        	||	todo.texto        	;
               todo.f1        	=	req.body.f1        	||	todo.f1       	;
               todo.f2        	=	req.body.f2        	||	todo.f2        	;
               
               todo.pais        	=	req.body.pais        	||	todo.pais        	;
               todo.tipo        	=	req.body.tipo        	||	todo.tipo        	;
               todo.sector        	=	req.body.sector        	||	todo.sector        	;
               todo.area        	=	req.body.area        	||	todo.area        	;

               todo.fecha        	=	req.body.fecha        	||	todo.fecha       	;
               todo.estado        	=	req.body.estado       	||	todo.estado        	;
               todo.ubicacion        	=	req.body.ubicacion       	||	todo.ubicacion        	;
               todo.autor        	=	req.body.autor       	||	todo.autor        	;
               todo.presenta        	=	req.body.presenta       	||	todo.presenta        	;
               todo.usuarioup=req.body.bitacora.email;

               todo.save(function (err, todo){
                    if (err)     {  res.status(500).send(err.message)   }
                    res.json(todo);
                });
            }
        });
    
    }
    else{

  

                    Bitacora.create(req.body.bitacora);
                  
                Reglamento.create({  
                    idcategoria       	: req.body.idcategoria       	,
                    idempresa       	: req.body.idempresa       	,
                    nombre       	: req.body.nombre       	,
                    titulo       	: req.body.titulo       	,
                    texto    	: req.body.texto    	,
                    fecha 	: req.body.fecha 	,
                  pais: req.body.pais 	,
                  tipo: req.body.tipo 	,
                  sector: req.body.sector 	,
                  area: req.body.area 	,
                    f1 	: req.body.f1 	,
                    f2 	: req.body.f2 	,
                    estado:req.body.estado,
                    ubicacion 	: req.body.ubicacion 	,
                    autor 	: req.body.autor 	,
                    presenta 	: req.body.presenta 	,
                    usuarionew:req.body.bitacora.email
                    

                }
                    , function(err, todo) {
                    if (err){   res.status(500).send(err.message)  
                   }
                
                    res.json(todo);

                
                    

                });
      
}
}

}





