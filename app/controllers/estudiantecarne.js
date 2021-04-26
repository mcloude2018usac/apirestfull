
var Estudiantecarne = require('../models/estudiantecarne');
var Bitacora = require('../models/bitacora');

exports.getEstudiantecarne = function(req, res, next){

    if(req.params.id2)
    { 
        res.status(404).send({estado:'nada'})  

       /*

        Estudiantecarne.find(
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
        
        Estudiantecarne.find({carne:req.params.codigo},function(err, todos) {
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



exports.creaEstudiantecarnes = function(req, res, next){
   
 
    Bitacora.create(req.body.bitacora);
if(req.params.recordID!=='crea')
{ 
    Estudiantecarne.findById({ _id: req.params.recordID }, function (err, todo)  {
        if (err) {  res.send(err);  }
        else
        {  
            todo.carne        	=	req.body.carne        	||	todo.carne        	;
            todo.nombre        	=	req.body.nombre        	||	todo.nombre        	;
            
            todo.save(function (err, todo){
                if (err)     {  res.status(500).send(err.message)   }
                res.json(todo);
            });
        }
    });

}
else{

    Estudiantecarne.find({carne:req.body.carnet },function(err, todos) {
        if (err){ res.send(err); }
      
        if(todos.length>0)   {    res.status(500).send('Ya existe estudiante'); }
        else
        {   

            Estudiantecarne.create({
                carne        	: req.body.carnet        	,
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




   
 

 






