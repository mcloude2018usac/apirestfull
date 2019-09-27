
var Unidadpago3 = require('../../models/calusac/unidadpago3');
var Bitacora = require('../../models/bitacora');

exports.getUnidadpago3 = function(req, res, next){
       if(req.params.id5)
        {  
           
            if(req.params.id5=='tipo')
            {
                Unidadpago3.find({idtipounidad :req.params.id2,idunidadacademica:req.params.id3,tipo:req.params.id4}).populate('nivel').populate('jornada').exec(function(err, todos) {
                    if (err){  res.send(err);  }
                     res.json(todos);
                 });
    

            }
            else
            {
                if(req.params.id5=='todos')
            { 
                Unidadpago3.find({idtipounidad :req.params.id2,idunidadacademica:req.params.id3}).populate('nivel').populate('jornada').exec(function(err, todos) {
                    if (err){  res.send(err);  }
                   
                     res.json(todos);
                 });
                    
            }
            }
           
        }
        else
        {
            
            
            Unidadpago3.find({_id :req.params.id}).populate('nivel').populate('jornada').exec(function(err, todos) {
                if (err){ res.send(err); }
               
                if(todos.length>0)   {    res.json(todos);   }
                else
                {  res.status(500).send('NO EXISTE REGISTRO');      }
                
            });
            
        }

 
}
exports.deleteUnidadpago3 = function(req, res, next){
   
    Bitacora.create({email: req.params.userID ,permiso:'Elimina',accion:'Elimina Edificio '});
    Unidadpago3.findByIdAndRemove({ _id: req.params.recordID  }, function(err, todo) {
        res.json(todo);
    });
}


exports.creaUnidadpago32s = function(req, res, next){
   
 
    Bitacora.create(req.body.bitacora);

    if(req.body.operacion=='actualiza2')
{

var aa=req.body.niveles;

Unidadpago3.find({idtipounidad :req.body.idtipounidad,idunidadacademica:req.body.idunidadacademica}).populate('nivel').populate('jornada').exec(function(err, todos) {
    if (err){  res.send(err);  }



    
        for(var j = 0; j <aa.length;j++){
          
            var vec=(aa[j].split('°'))
            var encuentra=0;
            for(var i = 0; i < todos.length;i++){
                console.log(todos[i].nivel._id + '===' + vec[0] +'    '+  todos[i].tipo+ ' ===' + req.body.tipo + '     ' + todos[i].jornada._id + '==' + req.body.jornada )
                if((todos[i].nivel._id==vec[0]) && (todos[i].tipo==req.body.tipo)  && (todos[i].jornada._id==req.body.jornada) )        {      encuentra=1;  break;        }
            }

            if(encuentra==0)
            {
                //crea
                Unidadpago3.create({
                    idtipounidad        	: req.body.idtipounidad        	,
                    idunidadacademica: req.body.idunidadacademica,
                    tipo: req.body.tipo,
                    tipocurso: req.body.tipocurso,
                    tipogrupo: req.body.tipogrupo,
                    codigo: vec[1],
                    nivel: vec[0],
                    nombre: vec[2],
                    jornada: req.body.jornada,
                    costo: req.body.costo,
                    estado: req.body.estado,
                    usuarionew:req.body.bitacora.email
                
                      }          );


            }
        
    
        }
    
    
    


     res.json(todos);
 });






}
else
{

if(req.params.recordID!=='crea')
{
    Unidadpago3.findById({ _id: req.params.recordID }, function (err, todo)  {
        if (err) {  res.send(err);  }
        else
        {  

            todo.codigo        	=	req.body.codigo        	||	todo.codigo        	;   
            todo.tipo       	=	req.body.tipo        	||	todo.tipo        	;   
            todo.tipogrupo       	=	req.body.tipogrupo        	||	todo.tipogrupo        	;   
            todo.tipocurso       	=	req.body.tipocurso        	||	todo.tipocurso        	;   
            todo.idtipounidad        	=	req.body.idtipounidad        	||	todo.idtipounidad        	;
            todo.idunidadacademica        	=	req.body.idunidadacademica        	||	todo.idunidadacademica        	;
            todo.nivel        	=	req.body.nivel        	      	;
            todo.nombre        	=	req.body.nombre      
            todo.jornada        	=	req.body.jornada      
            todo.costo       	=	req.body.costo    
            todo.estado        	=	req.body.estado    
            todo.usuarioup=req.body.bitacora.email;
            
            
            todo.save(function (err, todo){
                if (err)     {  res.status(500).send(err.message)   }
                res.json(todo);
            });
        }
    });

}
else{

  
    
    
    Unidadpago3.find({   idtipounidad        	: req.body.idtipounidad        	,
        idunidadacademica: req.body.idunidadacademica,
        tipo: req.body.tipo,
        tipocurso: req.body.tipocurso,
        tipogrupo: req.body.tipogrupo,
        codigo: req.body.codigo,
        nivel: req.body.nivel,
        nombre: req.body.nombre,
        jornada: req.body.jornada
      
        
         },function(err, todos) {
        if (err){ res.send(err); }
      
        if(todos.length>0)   {    res.status(500).send('Ya existe un pago con esta configuración :' + req.body.nombre); }
        else
        {   

            Unidadpago3.create({
            idtipounidad        	: req.body.idtipounidad        	,
            idunidadacademica: req.body.idunidadacademica,
            tipo: req.body.tipo,
            tipocurso: req.body.tipocurso,
            tipogrupo: req.body.tipogrupo,
            codigo: req.body.codigo,
            nivel: req.body.nivel,
            nombre: req.body.nombre,
            jornada: req.body.jornada,
            costo: req.body.costo,
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
}



