
var Plantilladm = require('../models/plantilladm');
var Bitacora = require('../models/bitacora');


var date_diff_indays = function(date1, date2) {

    var d =( date1 ).substr(0,10);  
    
    var n = d.split('-')  
  
    var d2 =( date2).substr(0,10);   
  
    var n2 = d2.split('-')  

    dt1 = new Date(n[1] + '/' + n[2] + '/' + n[0]);
    dt2 = new Date(n2[1] + '/' + n2[2] + '/' + n2[0]);
    return Math.floor((Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) - Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate()) ) /(1000 * 60 * 60 * 24));
    }

exports.getPlantilladm = function(req, res, next){
    if(req.params.id3)
    { 
        
        if(req.params.id3=='todos')
        { 
            Plantilladm.find({idplantilla:req.params.id,idempresa:req.params.id2}).sort([['orden', 1]]).exec(function(err, todos) {
                if (err){ res.send(err); }
               
                   res.json(todos);   
               
                
            });
        }
      
        if(req.params.id3=='orden')
        { 

            Plantilladm.find({idplantilla:req.params.id,idempresa:req.params.id2}).sort([['orden', -1]]).exec(function(err, todos) {
                if (err){ res.send(err); }
             
                if(todos.length>0)   {    res.json({orden:todos[0].orden});   }
            });

        }

       
    }
    else
    { Plantilladm.find({_id:req.params.id},function(err, todos) {
           if (err){  res.send(err);  }
            res.json(todos);
        });
    }
}
exports.deletePlantilladm = function(req, res, next){
   
    Bitacora.create({email: req.params.userID ,permiso:'Elimina',accion:'Elimina Plantilla modulo '});
    Plantilladm.findByIdAndRemove({ _id: req.params.id  }, function(err, todo) {
        res.json(todo);
    });
}


exports.creaPlantilladm2s = function(req, res, next){
   

    if(req.params.id!=='crea')
    {  Bitacora.create(req.body.bitacora);
        Plantilladm.findById({ _id: req.params.id}, function (err, todo)  {
            if (err) {  res.send(err);  }
            else
            {    todo.idempresa        	=	req.body.idempresa        	||	todo.idempresa;   
                 todo.idplantilla        	=	req.body.idplantilla        	||	todo.idplantilla;        	
                todo.nombre        	=	req.body.nombre        	||	todo.nombre        	;
                todo.descripcion        	=	req.body.descripcion        	||	todo.descripcion        	;
                todo.fechaini 	=	req.body.fechaini	||	todo.fechaini 	;
                todo.fechafin 	=	req.body.fechafin	||	todo.fechafin 	;
                todo.ubicacion   	=	req.body.ubicacion    	||	todo.ubicacion   	;
                todo.tiempodias    	=	date_diff_indays(req.body.fechaini,req.body.fechafin)   	;
                todo.foto    	=	req.body.foto    	||	todo.foto    	;
    
                todo.orden 	=	req.body.orden 	||	todo.orden 	;
        
                todo.estado 	=	req.body.estado 	||	todo.estado 	;
                todo.estado2 	=	req.body.estado2 	||	todo.estado2 	;
                todo.porc1 	=	req.body.porc1 	||	todo.porc1 	;
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
        var d = new Date();
    Plantilladm.create({  idempresa       	: req.body.idempresa       	,
         idplantilla       	: req.body.idplantilla       	,
        nombre        	: req.body.nombre        	,
        descripcion        	: req.body.descripcion        	,
        fechaini 	: req.body.fechaini 	,
        fechafin    	: req.body.fechafin    	,
        ubicacion   	: req.body.ubicacion  	,
        tiempodias    	: date_diff_indays(req.body.fechaini,req.body.fechafin)    	,
        foto    	: req.body.foto    	,
        orden    	: req.body.orden    	,        
        estado 	: req.body.estado 	,
        estado2:'Asignado',
        porc1:0,
        usuarionew:req.body.bitacora.email
       }
        , function(err, todo) {
        if (err){   res.status(500).send(err.message)    }
    
        res.json(todo);

     
        

    });
}


}





