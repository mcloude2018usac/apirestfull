
var Unidadplan2 = require('../models/unidadplan2');
var Bitacora = require('../models/bitacora');


function onlyUnique(value, index, self) { 
    return self.indexOf(value) === index;
}

exports.getUnidadplan2 = function(req, res, next){
       if(req.params.id5)
        {  
            console.log({'idtipounidad.nombre' :req.params.id,
            'idunidadacademica.nombre':req.params.id2,'idperiodo.id':req.params.id3
            ,idmateria:req.params.id5})
            
            Unidadplan2.find({'idtipounidad.nombre' :req.params.id,
            'idunidadacademica.nombre':req.params.id2,'idperiodo.id':req.params.id3
            ,idmateria:req.params.id5}
            ,function(err, todos) {
                if (err){  res.send(err);  }


                var myData = [];
                for(var i = 0; i < todos.length;i++){
                    if(todos[i].capacidad>todos[i].asignados)
                    {
                        
                        myData.push(todos[i].idhorario );

                    }
                        
                }
               
                var unique =   myData.filter( onlyUnique ); // r
               
                var myData2 = [];
                for(var i = 0; i < unique.length;i++){
                    myData2.push({nombre:unique[i] });
                }

                 res.json(myData2);
             });

             
             
           
        }
        else
        {

            if(req.params.id4)
            {              Unidadplan2.find({'idtipounidad.id' :req.params.id2,'idunidadacademica.id':req.params.id3,'idperiodo.id':req.params.id4},function(err, todos) {
                if (err){  res.send(err);  }
                 res.json(todos);
             });


                 
                 
               
            }
            else
            {

                Unidadplan2.find({_id:req.params.id},function(err, todos) {
                    if (err){ res.send(err); }
                   
                    if(todos.length>0)   {    res.json(todos);   }
                    else
                    {  res.status(500).send('NO EXISTE REGISTRO');      }
                    
                });
            }

            

        }


        
      
     
 
}
exports.deleteUnidadplan2 = function(req, res, next){
   
    Bitacora.create({email: req.params.userID ,permiso:'Elimina',accion:'Elimina Plan '});
    Unidadplan2.findByIdAndRemove({ _id: req.params.recordID  }, function(err, todo) {
        res.json(todo);
    });
}


exports.creaUnidadplan22s = function(req, res, next){
   
 
    Bitacora.create(req.body.bitacora);
 
if(req.params.recordID!=='crea')
{ 

    Unidadplan2.findById({ _id: req.params.recordID }, function (err, todo)  {
        if (err) {  res.send(err);  }
        else
        {  

    
            todo.idtipounidad        	={id:req.body.idtipounidad.id,nombre:req.body.idtipounidad.nombre   }   	;
            todo.idunidadacademica        	={id:req.body.idunidadacademica.id,nombre:req.body.idunidadacademica.nombre, codigo:req.body.idunidadacademica.codigo  }   	;
            todo.idperiodo        	=	{id:req.body.idperiodo.id,nombre:req.body.idperiodo.nombre   }   	;
            todo.idedificio=	{id:req.body.idedificio.id,nombre:req.body.idedificio.nombre   }   	;
            todo.idsalon=	req.body.idsalon        	||	todo.idsalon        	;
            todo.nombre=	req.body.nombre        	||	todo.nombre        	;
            todo.idjornada=	req.body.idjornada        	||	todo.idjornada        	;
            todo.idseccion=	req.body.idseccion        	||	todo.idseccion        	;
            todo.idhorario=	req.body.idhorario        	||	todo.idhorario        	;
            todo.idmateria=	req.body.idmateria        	||	todo.idmateria        	;
            todo.capacidad=	req.body.capacidad        	||	todo.capacidad        	;
            todo.asignados=	req.body.asignados        	||	todo.asignados        	;
         
            todo.codfac=	req.body.codfac        	||	todo.codfac        	;
            todo.usuarioup=req.body.bitacora.email;

            todo.save(function (err, todo){
                if (err)     {  res.status(500).send(err.message)   }
                res.json(todo);
            });
        }
    });

}
else{

  
    

    Unidadplan2.find({idtipounidad        	: req.body.idtipounidad       
         	,  idunidadacademica: req.body.idunidadacademica, 
         idperiodo: req.body.idperiodo,    idedificio: req.body.idedificio, 
           idsalon: req.body.idsalon,   idhorario: req.body.idhorario,codfac: req.body.codfac  },function(err, todos) {
        if (err){ res.send(err); }
      
        if(todos.length>0)   {    res.status(500).send('Ya existe una planificacion para este salon , horario y jornada'); }
        else
        {   

            Unidadplan2.create({
            idtipounidad        	: req.body.idtipounidad        	,
            idunidadacademica: req.body.idunidadacademica,
            idperiodo: req.body.idperiodo,
             idedificio: req.body.idedificio,
            idsalon: req.body.idsalon,
            nombre: req.body.nombre,
            idjornada: req.body.idjornada,
            idhorario: req.body.idhorario,
            idmateria: req.body.idmateria,
            idseccion: req.body.idseccion,
            capacidad: req.body.capacidad,
            asignados: req.body.asignados,
            codfac: req.body.codfac,
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



