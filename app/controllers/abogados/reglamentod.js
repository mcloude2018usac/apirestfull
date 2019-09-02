
var Reglamentod = require('../../models/abogados/reglamentod');
var Bitacora = require('../../models/bitacora');


//db.getCollection('carnes').find({ correo: {  $ne: null }}).count()

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


exports.getReglamentod = function(req, res, next){

    if(req.params.id3)
    { 
        if(req.params.id3=='todos')
        {
            Reglamentod.find({idempresa:req.params.id,idreglamento:req.params.id2}).exec(function(err, todos) {
                if (err){ res.send(err); }
               
                res.json(todos);   
                
            });

        }
    }
   
       
       

    

}
exports.deleteReglamentod = function(req, res, next){
   
    Bitacora.create({email: req.params.userID ,permiso:'Elimina',accion:'Elimina Reglamentod '});
    Reglamentod.findByIdAndRemove({ _id: req.params.id  }, function(err, todo) {
        res.json(todo);
    });
}


exports.creaReglamentod2s = function(req, res, next){
   

    if(req.params.id!=='crea')
    { 
         Bitacora.create(req.body.bitacora);
        Reglamentod.findById({ _id: req.params.id}, function (err, todo)  {
            if (err) {  res.send(err);  }
            else
            {  
               todo.notitulo       	=	req.body.notitulo        	||	todo.notitulo        	;         
               todo.titulo       	=	req.body.titulo        	||	todo.titulo        	;         
             
               todo.nocapitulo       	=	req.body.nocapitulo        	||	todo.nocapitulo        	;         
               todo.capitulo       	=	req.body.capitulo        	||	todo.capitulo        	;         

               todo.noarticulo       	=	req.body.noarticulo        	||	todo.noarticulo        	;         
               todo.articulo       	=	req.body.articulo        	||	todo.articulo        	;         

               todo.usuarioup=req.body.bitacora.email;

               todo.save(function (err, todo){
                    if (err)     {  res.status(500).send(err.message)   }
                    res.json(todo);
                });
            }
        });
    
    }
    else{

     console.log(req.body)

                    Bitacora.create(req.body.bitacora);
                  
                Reglamentod.create({  
                    idreglamento      	: req.body.idreglamento       	,
                    idempresa       	: req.body.idempresa       	,
                    notitulo       	: req.body.notitulo       	,
                    titulo       	: req.body.titulo       	,
                    nocapitulo       	: req.body.nocapitulo       	,
                    capitulo       	: req.body.capitulo       	,

                    noarticulo       	: req.body.noarticulo       	,
                    articulo       	: req.body.articulo       	,

                    usuarionew:req.body.bitacora.email
                    

                }
                    , function(err, todo) {
                    if (err){   res.status(500).send(err.message)  
                    console.log(err.message)  }
                
                    res.json(todo);

                
                    

                });
      
}


}





