
var Evento = require('../models/eventos');
var Bitacora = require('../models/bitacora');
var Participa = require('../models/participa');

exports.getEvento = function(req, res, next){
    if(req.params.id4)
    { 
        if(req.params.id4=='ADMINISTRADOR')
        {
            Evento.find({idempresa:req.params.id,impresion:req.params.id2}).
            select({idempresa:1,unidad:1,costo:1,fecha:1,impresion:1,nombre:1,fechaini:1,fechafin:1,ubicacion: 1,nomax:1,foto:1,fecha:1}).sort([['createdAt', -1]]).exec(function(err, todos) {
                if (err){  res.send(err);  }
                 res.json(todos);
             });
        }
        else
        {
            Evento.find({idempresa:req.params.id,impresion:req.params.id2,unidad:req.params.id4}).
            select({idempresa:1,unidad:1,costo:1,fecha:1,impresion:1,nombre:1,fechaini:1,fechafin:1,ubicacion: 1,nomax:1,foto:1,fecha:1}).sort([['createdAt', -1]]).exec(function(err, todos) {
                if (err){  res.send(err);  }
                 res.json(todos);
             });
        }
     

    }
    else{
    if(req.params.id3)
    { 
        if(req.params.id3=='eventos' )
        {
            Evento.find({impresion:'Activo' ,idempresa:req.params.id3}).
            select({idempresa:1,unidad:1,costo:1,fecha:1,impresion:1,nombre:1,fechaini:1,fechafin:1,ubicacion: 1,nomax:1,foto:1,fecha:1}).lean().sort([['createdAt', -1]]).exec(function(err, todos) {
                if (err){  res.send(err);  }
                 res.json(todos);
                
            });

        }
        else
        {
            if(req.params.id3=='todos' )
            {
            Evento.find({idempresa:req.params.id,impresion:req.params.id2}).
            select({idempresa:1,unidad:1,costo:1,fecha:1,impresion:1,nombre:1,fechaini:1,fechafin:1,ubicacion: 1,nomax:1,foto:1,fecha:1}).sort([['createdAt', -1]]).exec(function(err, todos) {
                if (err){  res.send(err);  }
                 res.json(todos);
             });

            }
            else
            {
                //todosbuscaactivo 

                if(req.params.id3=='todosbuscaactivo' )
                {

if(req.params.id)
{
    if(req.params.id!='')
{
                Evento.findById({_id:req.params.id}).select({idempresa:1,unidad:1,nombre:1,foto:1,ubicacion:1,fecha:1,nomax:1,impresion:1,_id:1}).exec(function(err, todos) {
                 
                    if (err){  res.status(422).send({estado:'Hubo un error en el sistema , por favor intente mas tarde'});  }
                   
                    if(todos.length==0     ) {  res.status(422).send({estado:'No existe evento'});  }
                    else
                    { 
                        
                        if(todos.impresion=='Activo')
                        {
                           
                        var aa=todos.nomax;
              
                        Participa.aggregate(  [
                            { 
                                "$match" : { 
                                    "idevento" : req.params.id
                                }
                            }, 
                            { 
                                "$group" : { 
                                    "_id" : { 
                    
                                    }, 
                                    "COUNT(*)" : { 
                                        "$sum" : 1
                                    }
                                }
                            }, 
                            { 
                                "$project" : { 
                                    "cantidad" : "$COUNT(*)", 
                                    "_id" : 0
                                }
                            }
                        ]).exec(function(err, todos10) {
                          
                            var cuantos =0
                            if(todos10.length>0)
                            {
                                cuantos =todos10[0].cantidad
                            }
                          

                            if(cuantos<aa)
                            {
                                res.json(todos);
                                
                            }
                            else
                            {
                                res.status(422).send({estado:'Cupo de evento lleno'});
    
                            }

                        });


                    }
                    else
                    {
                        res.status(422).send({estado:'Evento Inactivo'});

                    }

                        

                    }
                    
                  
                 });
                }
                else
                {
                    res.status(422).send({estado:'Evento Inactivo'});

                }
    
                }
                else
                {
                    res.status(422).send({estado:'El evento ya no se encuentra activo'});

                }
            
            }

            }
        }
    }
    else{
    if(req.params.id2)
    { 
        if(req.params.id=='todos')
        {
            Evento.find({idempresa:req.params.id2,impresion:req.params.id3})
            .select({idempresa:1,unidad:1,fecha:1,impresion:1,nombre:1,fechaini:1,fechafin:1,ubicacion: 1,no_max:1,foto:1,fecha:1}).sort([['createdAt', -1]]).exec(function(err, todos) {
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
            todo.unidad	=	req.body.unidad	||	todo.unidad    	;
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
       tipoevento:'cursoslibres',
        foto    	: req.body.foto    	,
        ubicacion   	: req.body.ubicacion  	,
        costo    	: req.body.costo   	,
        impresion 	: req.body.impresion 	,
        nomax 	: req.body.nomax 	,
        unidad 	: req.body.unidad 	,
        usuarionew:req.body.bitacora.email,
        date 			: Date.now() }
        , function(err, todo) {
        if (err){ 
          
            res.status(500).send(err.message)    }
    
        res.json(todo);

     
        

    });
}

}



