
var Personal = require('../models/user');
var Bitacora = require('../models/bitacora');

exports.getPersonal = function(req, res, next){

    if(req.params.page)
    {

        var pagex=    Number(req.params.page);
        var limitx=    Number(req.params.limit);
        
        Personal.paginate({},{lean:     false,page:pagex, limit:  limitx}).then(function(err, todos) {
            if (err){  res.send(err);  }
                res.end(todos);
                res.end();
              //  next();
            });
    }
    else
    {
    if(req.params.id2)
    {
        if(req.params.id2=='persona')
        {

            Personal.find({cui:req.params.email},function(err, todos) {
                if (err){ res.send(err); }
            
                if(todos.length>0)   {    res.json(todos);    }
                else
                {  res.status(500).send('NO EXISTE REGISTRO');      }
                
            });

          
        }
        else
        {
      
        Personal.find({unidad:req.params.id2},function(err, todos) {
            if (err){  res.send(err);  }
                res.json(todos);
            });
        }
    }
    else
    {
        
            if(req.params.email)
            {   Personal.find({email:req.params.email},function(err, todos) {
                    if (err){ res.send(err); }
                
                    if(todos.length>0)   {    res.json(todos);   }
                    else
                    {  res.status(500).send('NO EXISTE REGISTRO');      }
                    
                });
            }
            else
            {

               

                        Personal.find(function(err, todos) {
                            if (err){  res.send(err);  }
                                res.json(todos);
                            });
                   
               
              
            }
}}
}
exports.deletePersonal = function(req, res, next){
    Bitacora.create({email: req.params.userID ,permiso:'Elimina',accion:'Elimina Usuario '});
    Personal.findByIdAndRemove({ _id: req.params.recordID  }, function(err, todo) {
        res.json(todo);
    });
}

exports.creaPersonal2s = function(req, res, next){
  
 
    Bitacora.create(req.body.bitacora);

if(req.params.recordID)
{
    Personal.findById({ _id: req.params.recordID }, function (err, todo)  {
        if (err) {  res.send(err);  }
        else
        {   todo.email        	=	req.body.email        	||	todo.email        	;
            todo.role        	=	req.body.role       	||	todo.role        	;
             todo.nombre        	=	req.body.nombre        	||	todo.nombre        	;
            todo.cui 	=	req.body.cui 	||	todo.cui 	;
            todo.direccion   	=	req.body.direccion   	||	todo.direccion   	;
            todo.telefono    	=	req.body.telefono    	||	todo.telefono    	;
            todo.foto    	=	req.body.foto    	||	todo.foto    	;
            todo.lenguaje    	=	req.body.lenguaje    	||	todo.lenguaje    	;
            todo.sexo    	=	req.body.sexo    	||	todo.sexo    	;
            todo.estado    	=	req.body.estado    	||	todo.estado    	;
            todo.nov    	=	req.body.nov    	||	todo.nov    	;
            todo.unidad    	=	req.body.unidad    	||	todo.unidad    	;
            todo.interno    	=	req.body.interno    	||	todo.interno    	;
            todo.estadoemail=req.body.estadoemail  || todo.estadoemail;
            todo.codpersonal    	=	req.body.codpersonal    	||	todo.codpersonal    	;
            todo.fechanac    	=	req.body.fechanac    	||	todo.fechanac    	;
            todo.usuarioup=req.body.bitacora.email;
            

            todo.save(function (err, todo){
                if (err)     {  res.status(500).send(err)  
                 }
             
                res.json({ records: todo });
            });
        }
    });

}





}





