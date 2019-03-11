
var Frmmovild = require('../models/frmmovild');
var Bitacora = require('../models/bitacora');

exports.getFrmmovild = function(req, res, next){
    if(req.params.id2)
    {
        
        switch(req.params.id2) {
            case 'estado':
                    Frmmovild.find({estado:req.params.id},function(err, todos) {
                        if (err){  res.send(err);  }
                        res.json(todos);
                        
                    });
              break;
              case 'tipoformulario':
              Frmmovild.find({idmovil:req.params.id}).populate('type').exec(function(err, todos) {
                if (err){ res.send(err); }
               
                if(todos.length>0)   {    res.json(todos);   }
               
                
            });
            break;
            case 'tipofrmorden':
            Frmmovild.find({idmovil:req.params.id}).sort([['createdAt', -1]]).exec(function(err, todos) {
              if (err){ res.send(err); }
             
              if(todos.length>0)   {    res.json({orden:todos[0].order});   }
             
              
          });
          break;
            default:
              // code block
          }


        
    }
    else
    { Frmmovild.find(function(err, todos) {
           if (err){  res.send(err);  }
            res.json(todos);
        });
    }
}
exports.deleteFrmmovild = function(req, res, next){
   
    Bitacora.create({email: req.params.userID ,permiso:'Elimina',accion:'Elimina formulario movil '});
    Frmmovild.findByIdAndRemove({ _id: req.params.id  }, function(err, todo) {
        res.json(todo);
    });
}


exports.creaFrmmovild2s = function(req, res, next){
   
 
    Bitacora.create(req.body.bitacora);
if(req.params.id!=='crea')
{ 
    Frmmovild.findById({ _id: req.params.id }, function (err, todo)  {
        if (err) {  res.send(err);  }
        else
        { 
                 
            todo.type   			=	req.body.type        	||	todo.type        	;
            todo.required		=	req.body.required        	||	todo.required        	;
            todo.placeholder		=	req.body.placeholder        	||	todo.placeholder        	;
            todo.display		=	    req.body.display        	||	todo.display        	;
            todo.selected		=	req.body.selected        	||	todo.selected        	;
            todo.disabled		=	req.body.disabled        	||	todo.disabled        	;
            todo.hidden		=	    req.body.hidden        	||	todo.hidden        	;
            todo.position		=	req.body.position        	||	todo.position        	;
            todo.labelsizefondt		=	req.body.labelsizefondt        	||	todo.labelsizefondt        	;
            todo.usuarioup=req.body.bitacora.email;
            
            
            todo.save(function (err, todo){
                if (err)     {  res.status(500).send(err.message)   }
                res.json(todo);
            });
        }
    });

}
else{
  

    Frmmovild.find({ idmovil	:req.body.idmovil 	,
       
        name   	:req.body.name 	    	
      
        
         },function(err, todos) {
        if (err){ res.send(err); }
      
        if(todos.length>0)   {    res.status(500).send('Ya existe un tipo campo con este nombre'); }
        else
        {   


                    Frmmovild.create({ 

                        idmovil	:req.body.idmovil 	,
                        type   	:req.body.type 	,
                        name   	:req.body.name 	,
                        nombre	:req.body.name 	,
                        order   :req.body.order 	,
                        title :req.body.title 	,
                        estado 	: req.body.estado 	,


                        required :'true' 	,
                        placeholder :'Ingrese un '+ req.body.title+'  Valido'	,
                        display :'true'	,
                        selected :true 	,
                        disabled :'false' 	,
                        hidden :'false' 	,
                        
                        position :'fixed' 	,
                        labelsizefondt :'14'	,
                    
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



