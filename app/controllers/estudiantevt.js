
var Estudiantevt = require('../models/estudiantevt');
var Bitacora = require('../models/bitacora');

exports.getEstudiantevt = function(req, res, next){

    if(req.params.id2)
    { 
        res.status(404).send({estado:'nada'})  

    
    }
    else  
    {
    if(req.params.codigo)
    { 
       
        Estudiantevt.find({carnet:req.params.codigo},function(err, todos) {
            if (err){ res.send(err); }
        
            if(todos.length>0)   {    res.json(todos);   }
            else
            { res.status(404).send('NO EXISTE REGISTRO')       }
            
        });
  
    }
    else
    {

    }
}
    
 
}

function getNextSequenceValue2auser(id1,cuentaaa,res){



    Estudiantevt.findById({  _id:id1 }, function (err, todo)  {
     if (err) { console.log(err.message)  }
     else
     {  
         todo.nombre	=cuentaaa
         todo.save(function (err, todo333){
             if (err)     { console.log(err.message)  }
           
          
         });
     }
 });

 
 
}

exports.creaEstudiantevts = function(req, res, next){
   
 
    Bitacora.create(req.body.bitacora);
if(req.body.operacion=='act')
{

    Estudiantevt.find({carnet: req.params.recordID }, function (err, todo10)  {
      
        for(var j = 0; j < todo10.length;j++){
            getNextSequenceValue2auser(todo10[j]._id,req.body.nombre);
        }

        res.json(todo10);

    });


}
else
{

if(req.params.recordID!=='crea')
{ 
    Estudiantevt.findById({ _id: req.params.recordID }, function (err, todo)  {
        if (err) {  res.send(err);  }
        else
        {  
            todo.carnet        	=	req.body.carnet        	||	todo.carnet        	;
            todo.nombre        	=	req.body.nombre        	||	todo.nombre        	;
            
            todo.save(function (err, todo){
                if (err)     {  res.status(500).send(err.message)   }
                res.json(todo);
            });
        }
    });

}
else{

    Estudiantevt.find({carnet:req.body.carnet },function(err, todos) {
        if (err){ res.send(err); }
      
        if(todos.length>0)   {    res.status(500).send('Ya existe estudiante'); }
        else
        {   

            Estudiantevt.create({
                carnet        	: req.body.carnet        	,
                nombre        	: req.body.nombre        
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



   
 

 






