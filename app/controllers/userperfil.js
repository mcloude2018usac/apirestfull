var Userperfil = require('../models/userperfil2');
var Bitacora = require('../models/bitacora');


function roundxx(value, decimals) {
    //parseFloat(Math.round(num3 * 100) / 100).toFixed(2);

    return Number(Math.round(value+'e'+decimals)+'e-'+decimals).toFixed(2);
  }

  
exports.getUserperfil = function(req, res, next){

        if(req.params.id2)
        {      
                  Userperfil.find(  {  $or : [
                    { $and : [ { userId:req.params.id,toUserId:req.params.id2}] },
                    { $and : [ { toUserId:req.params.id,userId:req.params.id2 }] }]
            }).sort([['createdAt', 1]]).exec(function(err, todos) {
                    if (err){ res.send(err); }
                    res.json(todos);
                });
             
           
        }
        else
        {

            Userperfil.find(  { userId:req.params.id
        }).exec(function(err, todos) {
                if (err){ res.send(err); }

                if(todos.length==0)   {    res.status(500).send('No existe'); }
                else
                {   
                    res.json(todos);
                }
               
            });

        }
       

    
 
}
exports.deleteUserperfil = function(req, res, next){
   
    Bitacora.create({email: req.params.userID ,permiso:'Elimina',accion:'Elimina usuarios perfil'});
    Userperfil.findByIdAndRemove({ _id: req.params.recordID  }, function(err, todo) {
        res.json(todo);
    });
}


exports.creaUserperfil2s = function(req, res, next){
   
 
    Bitacora.create(req.body.bitacora);
if(req.params.recordID!=='crea')
{ 
    Userperfil.findById({ _id: req.params.recordID }, function (err, todo)  {
        if (err) {  res.send(err);  }
        else
        {         
            todo.userId =req.body.userId;
            todo.cui   		=req.body.cui;
            todo.nov   		=req.body.nov;
            todo.carne   		=req.body.carne;
            todo.nombre1   		=req.body.nombre1;
            todo.nombre2   		=req.body.nombre2;
            todo.nombre3   		=req.body.nombre3;  
            todo.nombre4  		=req.body.nombre4;
        
            todo.correo   		=req.body.correo;
    
          
        
            todo.lenguaje2        	=	req.body.lenguaje2        	      	;
            todo.matematica        	=	req.body.matematica            	;
            todo.fisica         	=	req.body.fisica            	;
            todo.biologia        	=	req.body.biologia        	      	;
            todo.quimica        	=	req.body.quimica             	;
            todo.idjornada=req.body.idjornada;

            todo.idjornada2=req.body.idjornada2;
            todo.idjornada3=req.body.idjornada3;
            todo.idjornada4=req.body.idjornada4;
            todo.idjornada5=req.body.idjornada5;
            todo.idhorario=req.body.idhorario;
            todo.idhorario2=req.body.idhorario2;
            todo.idhorario3=req.body.idhorario3;
            todo.idhorario4=req.body.idhorario4;
            todo.idhorario5=req.body.idhorario5;
            todo.noboleta=req.body.noboleta;
            todo.montoboleta=req.body.montoboleta;
        
        
            todo.idpago=req.body.idpago; 
                     todo.usuarioup=req.body.bitacora.email;

            todo.save(function (err, todo){
                if (err)     {  res.status(402).send(err.message)   }
                res.json(todo);
            });
        }
    });

}
else{



    Userperfil.find({userId: req.body.userId},function(err, todos) {
        if (err){ res.send(err); }
      
        if(todos.length>0)   {   res.json(todos);  }
        else
        {   
            
 
            Bitacora.create(req.body.bitacora);

           
            


            Userperfil.create({
                userId :req.body.userId,
                cui   		:req.body.cui,
                nov   		:req.body.nov,
                carne   		:req.body.carne,
                nombre1   		:req.body.nombre1,
                nombre2   		:req.body.nombre2,
                nombre3   		:req.body.nombre3,
                nombre4  		:req.body.nombre4,
              estadogeneral:req.body.estadogeneral,
                correo  		:req.body.correo,
                lenguaje2: req.body.lenguaje2,
                matematica: req.body.matematica,
                fisica: req.body.fisica,
                biologia: req.body.biologia,
                quimica: req.body.quimica,
                idjornada:req.body.idjornada,
                idjornada2:req.body.idjornada2,
                idjornada3:req.body.idjornada3,
                idjornada4:req.body.idjornada4,
                idjornada5:req.body.idjornada5,
                idhorario:req.body.idhorario,
                idhorario2:req.body.idhorario2,
                idhorario3:req.body.idhorario3,
                idhorario4:req.body.idhorario4,
                idhorario5:req.body.idhorario5,
                noboleta:req.body.noboleta,
                montoboleta:req.body.montoboleta,
        
            
       
                idpago:req.body.idpago ,
                usuarionew:req.body.bitacora.email
              
        
              }).then(todos => {
                   
                if(todos.length>0)   {    res.json(todos);   }
                else
                {  res.status(402).send('Error al grabar el registro');      }

                

            })
            .catch(err => {
                res.status(402).send(err.message);  
            })
               
            
           
             
           

            
             }
        
    });

   
 
}

}



