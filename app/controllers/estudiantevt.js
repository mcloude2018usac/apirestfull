
var Estudiantevt = require('../models/estudiantevt');
var Bitacora = require('../models/bitacora');

exports.getEstudiantevt = function(req, res, next){

    if(req.params.id2)
    { 
        res.status(404).send({estado:'nada'})  

       /*

        Estudiantevt.find(
            { "carnet": { $regex:  req.params.id , $options: 'i' } ,
         //   "nombre": { $regex:  req.params.id2 , $options: 'i' } 
    
    },function(err, todos) {
            if (err){ res.send(err); }

            var myData ='';
            for(var i = 0; i < todos.length;i++){
             myData= myData+ i + "----> db.asignaestudiantes.update({no_orientacion:'"+ req.params.id +"'},{$set: { no_orientacion:'"+ todos[i].carnet +"',nombre:'"+ todos[i].nombre +"' }}, { multi: true });             db.asignapcbs.update({no_orientacion:'"+ req.params.id +"'},{$set: { no_orientacion:'"+ todos[i].carnet +"',nombre:'"+ todos[i].nombre +"'}}, { multi: true });db.users.update({nov:'"+ req.params.id +"'},{$set: { nov:'"+ todos[i].carnet +"',nombre:'"+ todos[i].nombre +"'}}, { multi: true });             "   + "\n"              
            }
             //res.json(myData);
             res.status(404).send(myData)  

        
            
        });
        */
    }
    else  
    {
    if(req.params.codigo)
    { 
        console.log({carnet:req.params.codigo})
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



   
 

 






