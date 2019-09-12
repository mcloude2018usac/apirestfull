
var Evento = require('../models/eventos');
var Bitacora = require('../models/bitacora');
var Participa = require('../models/participa');

exports.getEvento = function(req, res, next){
    if(req.params.id3)
    { 
        if(req.params.id3=='eventos' )
        {
            Evento.find({impresion:'Activo' ,idempresa:req.params.id3}).select({fecha:1,impresion:1,nombre:1,fechaini:1,fechafin:1,ubicacion: 1,no_max:1,foto:1,fecha:1}).lean().exec(function(err, todos) {
                if (err){  res.send(err);  }
                 res.json(todos);
                
            });

        }
        else
        {
            if(req.params.id3=='todos' )
            {
            Evento.find({idempresa:req.params.id,impresion:req.params.id2}).select({fecha:1,impresion:1,nombre:1,fechaini:1,fechafin:1,ubicacion: 1,no_max:1,foto:1,fecha:1}).exec(function(err, todos) {
                if (err){  res.send(err);  }
                 res.json(todos);
             });

            }
            else
            {

                if(req.params.id3=='todosbuscaactivo' )
                {
                Evento.find({_id:req.params.id,impresion:'Activo'}).select({nomax:1,fecha:1,impresion:1,nombre:1,fechaini:1,
                    fechafin:1,ubicacion: 1,no_max:1,foto:1,fecha:1}).exec(function(err, todos) {
                    if (err){  res.status(500).send('Hubo un error en el sistema , por favor intente mas tarde');  }
                   
                    if(todos.length==0     ) {  res.status(500).send('El evento ya no se encuentra activo');  }
                    else
                    { var aa=todos[0].nomax;


                        Participa.find({idevento:req.params.id},function(err, todos2) {
                            if (err){ res.send(err); }
                            var cuantos =todos2.length
                            console.log('capacidad:' + aa + '  incritos:' +cuantos)
                            if(cuantos<aa)
                            {
                                res.json(todos);
                                
                            }
                            else
                            {
                                res.status(500).send('El cupo del evento ya se encuentra lleno');
    
                            }
                          
                            
                        });


                        

                    }
                    
                  
                 });
    
                }

            }
        }
    }
    else{
    if(req.params.id2)
    { 
        if(req.params.id=='todos')
        {
            Evento.find({idempresa:req.params.id2,impresion:req.params.id3}).select({fecha:1,impresion:1,nombre:1,fechaini:1,fechafin:1,ubicacion: 1,no_max:1,foto:1,fecha:1}).exec(function(err, todos) {
                if (err){  res.send(err);  }
                 res.json(todos);
             });
        }
        else{
        if(req.params.id=='activo')
        {
            Evento.find({impresion:'Activo',idempresa:req.params.id2},function(err, todos) {
                if (err){  res.send(err);  }
                 res.json(todos);
                
            });
        }
        else
        {

            if(req.params.id=='1' || req.params.id=='2')
        {
        }
        else
        {
            Evento.find({_id:req.params.id,impresion:'Activo',idempresa:req.params.id2},function(err, todos) {
                if (err){ res.send(err); }
               
                if(todos.length>0)   {    res.json(todos);   }
                else
                {  res.status(500).send('Evento se encuentra Inactivo');      }
                
            });
        }
    }
        }   
    
       
    }
    else
    { 
    }
}
}
exports.deleteEvento = function(req, res, next){
   
    Bitacora.create({email: req.params.userID ,permiso:'Elimina',accion:'Elimina evento '});
    Evento.findByIdAndRemove({ _id: req.params.recordID  }, function(err, todo) {
        res.json(todo);
    });
}


exports.creaEvento2s = function(req, res, next){
   
 
    Bitacora.create(req.body.bitacora);
if(req.params.recordID!=='crea')
{ 
    Evento.findById({ _id: req.params.recordID }, function (err, todo)  {
        if (err) {  res.send(err);  }
        else
        {   
            todo.idempresa       	=	req.body.idempresa        	||	todo.idempresa;   
            todo.nombre        	=	req.body.nombre        	||	todo.nombre        	;
            todo.fechaini 	=	req.body.fechaini	||	todo.fechaini 	;
             todo.fechafin 	=	req.body.fechafin	||	todo.fechafin 	;
            todo.foto    	=	req.body.foto    	||	todo.foto    	;
            todo.ubicacion   	=	req.body.ubicacion    	||	todo.ubicacion   	;
            todo.costo 	=	req.body.costo 	||	todo.costo 	;
            todo.impresion 	=	req.body.impresion 	||	todo.impresion 	;
            todo.nomax    	=	req.body.nomax    	||	todo.nomax    	;
            todo.fecha    	=	req.body.fecha    	||	todo.fecha    	;
            todo.usuarioup=req.body.bitacora.email;
            
            
            todo.save(function (err, todo){
                if (err)     {  res.status(500).send(err.message)   }
                res.json(todo);
            });
        }
    });

}
else{
   
    Evento.create({
        idempresa      	: req.body.idempresa     	,
        nombre        	: req.body.nombre        	,
        fechaini 	: req.body.fechaini 	,
        fecha: req.body.fecha 	,
        fechafin    	: req.body.fechafin    	,
      
        foto    	: req.body.foto    	,
        ubicacion   	: req.body.ubicacion  	,
        costo    	: req.body.costo   	,
        impresion 	: req.body.impresion 	,
        nomax 	: req.body.nomax 	,
        usuarionew:req.body.bitacora.email,
        date 			: Date.now() }
        , function(err, todo) {
        if (err){ 
          
            res.status(500).send(err.message)    }
    
        res.json(todo);

     
        

    });
}

}



