
var Estudiantepcb =  require('../models/estudiantepcb');


exports.getEstudiantepcb = function(req, res, next){
    if(req.params.codigo)
    { 

        Estudiantepcb.find({ORIENTACION:req.params.codigo}).then(todos => {
                   
       
                res.json(todos);  
            
            
          
      })
      .catch(err => {
          res.status(422).send(err.message);  
      })
   


  
    }
    else
    {

    }
    
    
 
}
//para las impresiones
exports.getEstudiantepcb2 = function(req, res, next){
    if(req.params.codigo)
    { 
      

        console.log({ORIENTACION:req.params.codigo})
        Estudiantepcb.find({ORIENTACION:req.params.codigo}).then(todos => {
                   
            if(todos.length==0)
            {
                res.status(422).send('Resultados no existen');  
            }
            else{
                res.json(todos);  
            }
            
          
      })
      .catch(err => {
          res.status(422).send(err.message);  
      })
   


  
    }
    else
    {

    }
    
    
 
}

function getNextSequenceValue2auser(id1,cuentaaa,res){



            Estudiantepcb.findById({  _id:id1 }, function (err, todo)  {
             if (err) { console.log(err.message)  }
             else
             {  
                 todo.NOMBRES	=cuentaaa
                 todo.save(function (err, todo333){
                     if (err)     { console.log(err.message)  }
                   
                  
                 });
             }
         });

         
         
   }

exports.creaEstudiantepcb = function(req, res, next){
   
 
    Estudiantepcb.find({ORIENTACION: req.params.recordID }, function (err, todo10)  {
      
        for(var j = 0; j < todo10.length;j++){
            getNextSequenceValue2auser(todo10[j]._id,req.body.nombre);
        }

        res.json(todo10);

    });



}


   
 

 






