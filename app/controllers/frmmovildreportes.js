
var Frmmovildreportes = require('../models/frmmovildreportes');
var Bitacora = require('../models/bitacora');
var Frmmovil = require('../models/frmmovil');
var Frmactividad = require('../models/asociadoventa/frmactividad');

exports.getFrmmovildreportes = function(req, res, next){

    if(req.params.id4)
    {
        if(req.params.id2==='orden')
        {
            Frmmovildreportes.find({idempresa:req.params.id3,idmovil:req.params.id4}).sort({'_id': -1}).exec(function(err, todos) {
                if (err){  res.send(err);  }
                if(todos.length>0)
                { res.json({orden:todos[0].orden +10});
                   
                }
                else
                {
                    res.json({orden:10});
                }

               
             });
        }
        else
        {
        if(req.params.id2=='todos')
        { 
            Frmmovildreportes.find({idempresa:req.params.id3,idmovil:req.params.id4}).sort({'order': 1}).exec(function(err, todos) {
                if (err){  res.send(err);  }
                 res.json(todos);
             });
        }
        else
        {
            Frmmovildreportes.find({idempresa:req.params.id3,estado:req.params.id2,idmovil:req.params.id4}).sort({'order': 1}).exec(function(err, todos) {
                if (err){  res.send(err);  }
                 res.json(todos);
             });
            }}
    }
    else
    {
    if(req.params.id2)
    {
        
        switch(req.params.id2) {
            case 'estado':
                    Frmmovildreportes.find({estado:req.params.id},function(err, todos) {
                        if (err){  res.send(err);  }
                        res.json(todos);
                        
                    });
              break;
              case 'tipoformulario':
              Frmmovildreportes.find({idmovil:req.params.id}).sort([['order', 1]]).exec(function(err, todos) {
                if (err){ res.send(err); }
               
                if(todos.length>0)   {    res.json(todos);   }
               
                
            });
            case 'camposformulario':
                
                Frmmovildreportes.find({idmovil:req.params.id}).sort([['order', 1]]).exec(function(err, todos) {
                  if (err){ res.send(err); }
              
                  var myData = [];
                  for(var i = 0; i < todos.length;i++){
                    myData.push({_id:todos[i]._id ,nombre:todos[i].name  })
                  }

                 res.json(myData);   
                 
                  
              });
            break;
            case 'tipofrmorden':
            Frmmovildreportes.find({idmovil:req.params.id}).sort([['order', -1]]).exec(function(err, todos) {
              if (err){ res.send(err); }
           
              if(todos.length>0)
              { res.json({orden:todos[0].order +10});
                 
              }
              else
              {
                  res.json({orden:10});
              }

            
             
              
          });
          break;
            default:
              // code block
          }


        
    }
    else
    { Frmmovildreportes.find(function(err, todos) {
           if (err){  res.send(err);  }
            res.json(todos);
        });
    }
}
}
exports.deleteFrmmovildreportes = function(req, res, next){
   
    Bitacora.create({email: req.params.userID ,permiso:'Elimina',accion:'Elimina formulario movil '});
    Frmmovildreportes.findByIdAndRemove({ _id: req.params.id  }, function(err, todo) {
        res.json(todo);
    });
}


exports.creaFrmmovildreportes2s = function(req, res, next){
   
 
    Bitacora.create(req.body.bitacora);
if(req.params.id!=='crea')
{ 

    Frmmovildreportes.findById({ _id: req.params.id }, function (err, todo)  {
        if (err) {  res.send(err);  }
        else
        { 

                   
       
        

            todo.type       	=	req.body.type        	||	todo.type;    

            todo.formulario     	= req.body.formulario    	||	todo.formulario;   
            todo.idformulario       	=	req.body.idformulario        	||	todo.idformulario;   

            todo.tipo	=	req.body.tipo        	||	todo.tipo;   
            todo.camposfiltro	=	req.body.camposfiltro        	||	todo.camposfiltro;   
            todo.funcionget	=	req.body.funcionget        	||	todo.funcionget;   
            todo.filtroextra	=	req.body.filtroextra        	||	todo.filtroextra;   
            todo.typegraf	=	req.body.typegraf        	||	todo.typegraf;   
            todo.camposreporte	=	req.body.camposreporte        	||	todo.camposreporte;   
            todo.campox	=	req.body.campox        	||	todo.campox;   
            todo.campoy	=	req.body.campoy        	||	todo.campoy;   
            todo.nombrex	=	req.body.nombrex        	||	todo.nombrex; 
            todo.nombrey	=	req.body.nombrey        	||	todo.nombrey; 
            todo.tipoconteo	=	req.body.tipoconteo        	||	todo.tipoconteo; 
            todo.esproceso	=	req.body.esproceso        	||	todo.esproceso;   
  

        



            todo.usuarioup=req.body.bitacora.email;
            
            todo.save(function (err, todo){
                if (err)     {  res.status(500).send(err.message)   }
                res.json(todo);
            });
        }
    });

}
else{
  
    var nombret=req.body.nombre	    
    

    Frmmovildreportes.find({ idmovil	:req.body.idmovil 	,
       
        name   	:nombret
      
        
         },function(err, todos) {
        if (err){ res.send(err); }
      
        if(todos.length>0)   {    res.status(500).send('Ya existe un reporte con este nombre : ' + nombret); }
        else
        {  

                    Frmmovildreportes.create({ 
                        idempresa      	: req.body.idempresa     	,
                        idmovil	:req.body.idmovil 	,
                        type   	:req.body.type 	,
                    
                        nombre:	 req.body.nombre ,
                        order   :req.body.order 	,
                        title :req.body.title 	,
                        estado 	: req.body.estado 	,
                    
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


exports.creaFrmmovildreportes3s = function(req, res, next){
   
 
    Bitacora.create(req.body.bitacora);
  
if(req.params.id!=='crea')
{ 
   
    Frmmovildreportes.findById({ _id: req.params.id }, function (err, todo)  {
        if (err) {  res.send(err);  }
        else
        { 
        
       
            todo.nombre       	=	req.body.nombre;    
            todo.order       	=	req.body.order        	||	todo.order;   
            todo.display	=	req.body.display        ;    
            todo.title       	=	req.body.title        	||	todo.title;    
            todo.estado       	=	req.body.estado        	||	todo.estado;    
            todo.type       	=	req.body.type        	||	todo.type;    
            todo.usuarioup=req.body.bitacora.email;
            
            
            todo.save(function (err, todo){
                if (err)     {  res.status(500).send(err.message)   }
                res.json(todo);
            });
        }
    });

}
else{
  
    var nombret=req.body.nombre	    

    Frmmovildreportes.find({ idmovil	:req.body.idmovil 	,
       
        name   	:nombret
      
        
         },function(err, todos) {
        if (err){ res.send(err); }
      
        if(todos.length>0)   {    res.status(500).send('Ya existe un reporte con este nombre : ' + nombret); }
        else
        {   

                    Frmmovildreportes.create({ 
                        idempresa      	: req.body.idempresa     	,
                        idmovil	:req.body.idmovil 	,
                        type   	:req.body.type 	,
                    
                        nombre:	 req.body.nombre ,
                        order   :req.body.order 	,
                        title :req.body.title 	,
                        estado 	: req.body.estado 	,
                    
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


