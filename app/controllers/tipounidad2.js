
var Tipounidad2 = require('../models/tipounidad2');
var Bitacora = require('../models/bitacora');
var Asignapap = require('../models/asignapap');

exports.getTipounidad2 = function(req, res, next){
       if(req.params.id)
        {  
           
                Tipounidad2.find({_id:req.params.id}
                    ,null, {sort: {codigo: 1}},function(err, todos) {
                    if (err){ res.send(err); }
                   
                    if(todos.length>0)   {    res.json(todos);   }
                    else
                    {  res.status(500).send('NO EXISTE REGISTRO');      }
                    
                });
             
           
        }
        else
        { 
            Tipounidad2.find({}, null, {sort: {codigo: 1}}).populate('iddepartamento.id')
        .exec(function(err, todos) {
               if (err){  res.send(err);  }
                res.json(todos);
            });
        }

 
}

function getNextSequenceValue2(noboleta,req, res){
console.log(noboleta)


                Asignapap.findById({ _id:noboleta}, function (err, todo)  {
                                if (err) {  res.send(err);  }
                                else
                                { 
                                    todo.estado        	=		'Pago autorizado.'     	;
                                    
                                    todo.save(function (err, todo){
                                        if (err)     {  console.log(err.message)   }
                                        //console.log(todo);
                                    });
                                }
                            });

            
               }
      
         

    
    
     
    

    
exports.deleteTipounidad2 = function(req, res, next){
   
    Bitacora.create({email: req.params.userID ,permiso:'Elimina',accion:'Elimina Tipounidad2 '});
    Tipounidad2.findByIdAndRemove({ _id: req.params.recordID  }, function(err, todo) {
        res.json(todo);
    });
}

function splitLines(t) { return t.split(/\r\n|\r|\n/); }


exports.creaTipounidad22s = function(req, res, next){
   
 
    Bitacora.create(req.body.bitacora);

    if(req.params.recordID=='upload')
    {  

        
        var a ;
        a =  splitLines(req.body.texto);

        if(a.length>1)
        {
            for (var i = 1; i < a.length; i++) {

                var myData3cc=a[i] 
                var bb=myData3cc.split(';')    
                
                Asignapap.find({noboleta:bb[0] }).exec( function (err, todoaaab)  {
        
                    if (err) {  res.send(err);  }
                    else
                    {  
                        if(todoaaab.length>0)   {
                console.log(todoaaab[0]._id)
                            getNextSequenceValue2(todoaaab[0]._id,req, res);
            
                        
                           }
                  
                     
            
                    }
                });

                                    
               
            }
            res.json({op:'ok'});
        }
        else
        {
            res.json({op:'ok'});
        }
        
    }
    else{    
if(req.params.recordID!=='crea')
{  
    Tipounidad2.findById({ _id: req.params.recordID }, function (err, todo)  {
        if (err) {  res.send(err);  }
        else
        {  
            todo.nombre        	=	req.body.nombre        	||	todo.nombre        	;
            todo.codigo        	=	req.body.codigo        	||	todo.codigo        	;
            todo.iddepartamento        	=	{id:req.body.iddepartamento.id,nombre:req.body.iddepartamento.nombre   }   	;
            todo.abreviatura        	=	req.body.abreviatura        	||	todo.abreviatura    	;
            todo.usuarioup=req.body.bitacora.email;
            
          
            todo.save(function (err, todo){
                if (err)     {  res.status(500).send(err.message)   }
                res.json(todo);
            });
        }
    });

}
else{

    Tipounidad2.find({codigo:req.body.codigo  },function(err, todos) {
        if (err){ res.send(err); }
      
        if(todos.length>0)   {    res.status(500).send('Codigo ya existe'); }
        else
        {   

            Tipounidad2.create({
                nombre        	: req.body.nombre        	,
                codigo        	: req.body.codigo   ,
                iddepartamento        	: req.body.iddepartamento   ,
                abreviatura        	: req.body.abreviatura     ,
                usuarionew:req.body.bitacora.email   
              }
                , function(err, todo) {
                if (err){ 
                   
                    res.status(500).send(err.message)    }
            
                res.json(todo);
        
             
                
        
            });

            
             }
        
    });
   
 
}}

}



