
var Plantilla = require('../models/plantilla');
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

exports.getPlantilla = function(req, res, next){
    if(req.params.id2)
    { 
     
       if(req.params.id2=='todos')
       {
      
        Plantilla.find({idempresa:req.params.id}).populate('categoria').populate('unidad').exec(function(err, todos) {
            if (err){  res.send(err);  }
       
             res.json(todos);
         });
       }
       else
       {

      
         var diffDays = date_diff_indays('10/01/2019','');

   
         res.json({dias:diffDays});


       }      
  
      
       
    }
    else
    {
        
        if(req.params.id=='activo')
        {
            Plantilla.find({impresion:'Activo'},function(err, todos) {
                if (err){  res.send(err);  }
                 res.json(todos);
                
            });
        }
        else
        {

     
            Plantilla.find({_id:req.params.id},function(err, todos) {
                if (err){ res.send(err); }
               
                if(todos.length>0)   {    res.json(todos);   }
                else
                {  res.status(500).send('NO EXISTE REGISTRO');      }
                
            });
        

        }   

       
    }
}
exports.deletePlantilla = function(req, res, next){
   
    Bitacora.create({email: req.params.userID ,permiso:'Elimina',accion:'Elimina plantilla curso '});
    Plantilla.findByIdAndRemove({ _id: req.params.recordID  }, function(err, todo) {
        res.json(todo);
    });
}


exports.creaPlantilla2s = function(req, res, next){
   
 
    Bitacora.create(req.body.bitacora);
if(req.params.recordID!=='crea')
{ 


   
    Plantilla.findById({ _id: req.params.recordID }, function (err, todo)  {
        if (err) {  res.send(err);  }
        else
        {  
          
            var aa= date_diff_indays(req.body.fechaini,req.body.fechafin)
          


            todo.nombre        	=	req.body.nombre        	||	todo.nombre        	;
            todo.descripcion        	=	req.body.descripcion        	||	todo.descripcion        	;
            todo.fechaini 	=	req.body.fechaini	||	todo.fechaini 	;
            todo.fechafin 	=	req.body.fechafin	||	todo.fechafin 	;
            todo.ubicacion   	=	req.body.ubicacion    	||	todo.ubicacion   	;
            todo.foto    	=	req.body.foto    	||	todo.foto    	;

            todo.tiempodias    	=	 aa	;
            todo.categoria    	=	req.body.categoria    	||	todo.categoria    	;
            todo.unidad    	=	req.body.unidad   	||	todo.unidad   	;


            todo.costo 	=	req.body.costo 	||	todo.costo 	;
            todo.estado 	=	req.body.estado 	||	todo.estado 	;
            todo.nomax    	=	req.body.nomax    	||	todo.nomax    	;
            todo.usuarioup=req.body.bitacora.email;
            
           
            
            todo.save(function (err, todo){
              
                if (err)     {  res.status(500).send(err.message)   }
                res.json(todo);
            });
        }
    });

}
else{

 

    Plantilla.create({ idempresa        	: req.body.idempresa        	
        ,nombre        	: req.body.nombre        	,
        descripcion        	: req.body.descripcion        	,
        fechaini 	: req.body.fechaini 	,
     
        fechafin    	: req.body.fechafin    	,
        ubicacion   	: req.body.ubicacion  	,
        foto    	: req.body.foto    	,
        tiempodias    	:  date_diff_indays(req.body.fechaini,req.body.fechaini) 		,
        categoria    	: req.body.categoria    	,
        unidad   	: req.body.unidad  	,        
        costo    	: req.body.costo   	,
        estado 	: req.body.estado 	,
        nomax 	: req.body.nomax 	,
        usuarionew:req.body.bitacora.email
         }
        , function(err, todo) {
        if (err){ 
          
            res.status(500).send(err.message)    }
    
        res.json(todo);

     
        

    });
}

}



