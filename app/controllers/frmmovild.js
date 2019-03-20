
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
              Frmmovild.find({idmovil:req.params.id}).populate('type').sort([['order', 1]]).exec(function(err, todos) {
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
        { console.log(req.body)
            var rr= req.body.display 
            var rr2= req.body.required
            if(req.body.tipo=="Etiqueta")
            {rr='false';rr2='false'}

                 
            todo.required		=	rr2             	;
            todo.placeholder		=	req.body.placeholder        	||	todo.placeholder        	;
            todo.display		=	    rr        	       	;
            todo.selected		=	req.body.selected        	||	todo.selected        	;
            todo.disabled		=	req.body.disabled        	||	todo.disabled        	;
            todo.hidden		=	    req.body.hidden        	||	todo.hidden        	;
            todo.position		=	req.body.position        	||	todo.position        	;
            todo.labelsizefondt		=	req.body.labelsizefondt        	||	todo.labelsizefondt        	;

            todo.categoria   			=	req.body.categoria        	||	todo.categoria        	;
            todo.combofijo   			=	req.body.combofijo        	   	;

            todo.usuarioup=req.body.bitacora.email;
            
            
            todo.save(function (err, todo){
                if (err)     {  res.status(500).send(err.message)   }
                res.json(todo);
            });
        }
    });

}
else{
  
    var nombret=req.body.name 	    
    nombret=(nombret).toLowerCase().replace(' ','').replace(/[|&;$%@"<>()+,]/g,'');

    Frmmovild.find({ idmovil	:req.body.idmovil 	,
       
        name   	:nombret
      
        
         },function(err, todos) {
        if (err){ res.send(err); }
      
        if(todos.length>0)   {    res.status(500).send('Ya existe un tipo campo con este nombre : ' + nombret); }
        else
        {   var rr='true'
            if(req.body.type=="5c86c965eddda7022c5d3443")
            {rr='false'}

                    Frmmovild.create({ 

                        idmovil	:req.body.idmovil 	,
                        type   	:req.body.type 	,
                        name   	:nombret 	,
                        nombre:	nombret  + ' ' + req.body.title  + ' ' +req.body.type	,
                        order   :req.body.order 	,
                        title :req.body.title 	,
                        estado 	: req.body.estado 	,


                        required :rr	,
                        placeholder :'Ingrese un '+ req.body.title+'  Valido'	,
                        display :rr,
                        selected :true 	,
                        disabled :'false' 	,
                        hidden :'false' 	,
                        
                        position :'fixed' 	,
                        labelsizefondt :'14'	,
                        categoria:'' ,
                        combofijo:'true',
                    
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



