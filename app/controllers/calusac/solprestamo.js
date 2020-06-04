
var Solprestamos = require('../../models/calusac/solprestamo');
var Bitacora = require('../../models/bitacora');
var Operadores2 = require('../../models/calusac/operadores2');

exports.getSolprestamos = function(req, res, next){
       if(req.params.id2)
        {  
            if(req.params.id=='todos')
            {
                Solprestamos.find({idempresa:req.params.id2},function(err, todos) {
                    if (err){ res.send(err); }
                   
                    res.json(todos);   
            
                    
                });

            }
            else
            {
                Solprestamos.find({estado :req.params.id,idempresa:req.params.id2},function(err, todos) {
                    if (err){ res.send(err); }
                   
                  
                     res.status(500).send('NO EXISTE REGISTRO');      
                    
                });

            }
               
             
           
        }
         

    
}

exports.deleteSolprestamos = function(req, res, next){
   
    Bitacora.create({email: req.params.userID ,permiso:'Elimina',accion:'Elimina asignacion de notas calusac '});
    Solprestamos.findByIdAndRemove({ _id: req.params.recordID  }, function(err, todo) {
        res.json(todo);
    });
}


exports.creaSolprestamos2s = function(req, res, next){
   
 
    Bitacora.create(req.body.bitacora);
if(req.params.recordID!=='crea')
{
    Solprestamos.findById({ _id: req.params.recordID }, function (err, todo)  {
        if (err) {  res.send(err);  }
        else
        {  

            todo.tipo        	=	req.body.tipo        	||	todo.tipo        	;   
            todo.nombre        	=	req.body.nombre        	||	todo.nombre        	;   
            todo.cui        	=	req.body.cui        	||	todo.cui        	;
            todo.monto        	=	req.body.monto        	||	todo.monto        	;
            todo.codpersonal        	=	req.body.codpersonal        	||	todo.codpersonal        	;
            todo.plazo        	=	req.body.plazo        	||	todo.plazo       	;
            todo.interes        	=	req.body.interes        	||	todo.interes 	      	;
            todo.estado        	=	req.body.estado        	||	todo.estado	      	;
         
            todo.requisito1        	=	req.body.requisito1        	||	todo.requisito1        	;
            todo.requisito2        	=	req.body.requisito2        	||	todo.requisito2        	;
            todo.requisito3        	=	req.body.requisito3        	||	todo.requisito3        	;
            todo.requisito4        	=	req.body.requisito4        	||	todo.requisito4        	;
            todo.requisito5        	=	req.body.requisito5        	||	todo.requisito5        	;
            todo.requisito6        	=	req.body.requisito6        	||	todo.requisito6        	;
            todo.requisito7        	=	req.body.requisito7        	||	todo.requisito7        	;
            todo.requisito8        	=	req.body.requisito8        	||	todo.requisito8        	;
            todo.requisito9        	=	req.body.requisito9        	||	todo.requisito9        	;
            todo.requisito10        	=	req.body.requisito10        	||	todo.requisito10        	;

            todo.usuarioup=req.body.bitacora.email;
            
            
            todo.save(function (err, todo){
                if (err)     {  res.status(500).send(err.message)   }
                res.json(todo);
            });
        }
    });

}
else{

  
    Operadores2.find({}).sort([['encola', 1]]).exec(function(err, todosb) {

                                    
        if (err){  if(err) return next(err);// res.status(404).send(err); 
        return;}
     
    
        if(todosb.length>0)   {  
            var opexx=todosb[0]._id
            var opexx2=todosb[0].email

               
    Solprestamos.find({cui	: req.body.cui        	,
        tipo: req.body.tipo
      
        
         },function(err, todos) {
        if (err){ res.send(err); }
      
        if(todos.length>0)   {    res.status(500).send('Ya existe una solicitud de requisito'); }
        else
        {   

            Solprestamos.create({
                userasignado:opexx,
                userasignadoemail:opexx2,
                idempresa        	: req.body.idempresa        	,
            tipo        	: req.body.tipo        	,
            nombre: req.body.nombre,
            cui: req.body.cui,
            monto: req.body.monto,
            plazo: req.body.plazo,
            interes: req.body.interes,
            estado: req.body.estado,
            codpersonal: req.body.codpersonal,
        
            requisito1: req.body.requisito1,
            requisito2: req.body.requisito2,
            requisito3: req.body.requisito3,
            requisito4: req.body.requisito4,
            requisito5: req.body.requisito5,
            requisito6: req.body.requisito6,
            requisito7: req.body.requisito7,
            requisito8: req.body.requisito8,
            requisito9: req.body.requisito9,
            requisito10: req.body.requisito10,

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
    });
 
   
 
}

}



