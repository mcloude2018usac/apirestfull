var Userperfil = require('../models/userperfil2');
var Bitacora = require('../models/bitacora');


function roundxx(value, decimals) {
    //parseFloat(Math.round(num3 * 100) / 100).toFixed(2);

    return Number(Math.round(value+'e'+decimals)+'e-'+decimals).toFixed(2);
  }

  
exports.getUserperfil = function(req, res, next){

        if(req.params.id2)
        {      
                  Userperfil.find(  {  $or : [
                    { $and : [ { userId:req.params.id,toUserId:req.params.id2}] },
                    { $and : [ { toUserId:req.params.id,userId:req.params.id2 }] }]
            }).sort([['createdAt', 1]]).exec(function(err, todos) {
                    if (err){ res.send(err); }
                    res.json(todos);
                });
             
           
        }
        else
        {

            Userperfil.find(  { userId:req.params.id
        }).exec(function(err, todos) {
                if (err){ res.send(err); }

                if(todos.length==0)   {    res.status(500).send('No existe'); }
                else
                {   
                    res.json(todos);
                }
               
            });

        }
       

    
 
}
exports.deleteUserperfil = function(req, res, next){
   
    Bitacora.create({email: req.params.userID ,permiso:'Elimina',accion:'Elimina usuarios perfil'});
    Userperfil.findByIdAndRemove({ _id: req.params.recordID  }, function(err, todo) {
        res.json(todo);
    });
}


exports.creaUserperfil2s = function(req, res, next){
   
 
    Bitacora.create(req.body.bitacora);
if(req.params.recordID!=='crea')
{ 
    Userperfil.findById({ _id: req.params.recordID }, function (err, todo)  {
        if (err) {  res.send(err);  }
        else
        {         
            todo.userId =req.body.userId;
            todo.cui   		=req.body.cui;
            todo.nov   		=req.body.nov;
            todo.carne   		=req.body.carne;
            todo.nombre1   		=req.body.nombre1;
            todo.nombre2   		=req.body.nombre2;
            todo.nombre3   		=req.body.nombre3;  
            todo.nombre4  		=req.body.nombre4;
            todo.telefono   		=req.body.telefono;
            todo.fechanac   		=req.body.fechanac;
            todo.genero   		=req.body.genero;
            todo.correo   		=req.body.correo;
            todo.depto   		=req.body.depto;
            todo.muni   		=req.body.muni;
            todo.zona   		=req.body.zona;
            todo.colonia   		=req.body.colonia;
            todo.calle   		=req.body.calle;
            todo.nocasa   		=req.body.nocasa;
            todo.graduanmedio   		=req.body.graduanmedio;
            todo.carreranmedio  		=req.body.carreranmedio;
            todo.tipoestanmedio	=req.body.tipoestanmedio;
            todo.nombreestamedio	=req.body.nombreestamedio;
            todo.deptoestamedio	=req.body.deptoestamedio;
            todo.muniestamedio	=req.body.muniestamedio;
            todo.zonaestamedio	=req.body.zonaestamedio;
            todo.facultadins=req.body.facultadins;
            todo.codcarrera=req.body.codcarrera;
            todo.unidad   		=req.body.unidad;
            todo.codunidad   		=req.body.codunidad;
            todo.lenguaje2        	=	req.body.lenguaje2        	      	;
            todo.matematica        	=	req.body.matematica            	;
            todo.fisica         	=	req.body.fisica            	;
            todo.biologia        	=	req.body.biologia        	      	;
            todo.quimica        	=	req.body.quimica             	;
            todo.idjornada=req.body.idjornada;
            todo.noboleta=req.body.noboleta;
            todo.montoboleta=req.body.montoboleta;
            todo.emertipocontacto=req.body.emertipocontacto;
            todo.emernombrecontacto=req.body.emernombrecontacto;
            todo.emertelefono=req.body.emertelefono;
            todo.emerpadre=req.body.emermadre;
            todo.emerpadretel=req.body.emerpadretel;
            todo.emermadre=req.body.emermadre;
            todo.emermadretel=req.body.emermadretel;
            todo.vivecasa=req.body.vivecasa;
            todo.vehiculo=req.body.vehiculo;
            todo.tipovehiculo=req.body.tipovehiculo;
            todo.mediotransporte=req.body.mediotransporte;
            todo.mediososten=req.body.mediososten;
            todo.vivescon=req.body.vivescon;
            todo.trabaja=req.body.trabaja;
        
            todo.lenguaje=req.body.lenguaje; 
                     todo.usuarioup=req.body.bitacora.email;

            todo.save(function (err, todo){
                if (err)     {  res.status(500).send(err.message)   }
                res.json(todo);
            });
        }
    });

}
else{



    Userperfil.find({userId: req.body.userId},function(err, todos) {
        if (err){ res.send(err); }
      
        if(todos.length>0)   {    res.status(500).send('Usuario ya existe'); }
        else
        {   
            
 
            Bitacora.create(req.body.bitacora);
            Userperfil.create({
                userId :req.body.userId,
                cui   		:req.body.cui,
                nov   		:req.body.nov,
                carne   		:req.body.carne,
                nombre1   		:req.body.nombre1,
                nombre2   		:req.body.nombre2,
                nombre3   		:req.body.nombre3,
                nombre4  		:req.body.nombre4,
                telefono   		:req.body.telefono,
                fechanac   		:req.body.fechanac,
                genero   		:req.body.genero,
                correo   		:req.body.correo,
                depto   		:req.body.depto,
                muni   		:req.body.muni,
                zona   		:req.body.zona,
                colonia   		:req.body.colonia,
                calle   		:req.body.calle,
                nocasa   		:req.body.nocasa,
                graduanmedio   		:req.body.graduanmedio,
                carreranmedio  		:req.body.carreranmedio,
                tipoestanmedio	:req.body.tipoestanmedio,
                nombreestamedio	:req.body.nombreestamedio,
                deptoestamedio	:req.body.deptoestamedio,
                muniestamedio	:req.body.muniestamedio,
                zonaestamedio	:req.body.zonaestamedio,
                facultadins:req.body.facultadins,
                unidad   		:req.body.unidad,
                codunidad   		:req.body.codunidad,
    
                codcarrera:req.body.codcarrera,
                lenguaje2: req.body.lenguaje2,
                matematica: req.body.matematica,
                fisica: req.body.fisica,
                biologia: req.body.biologia,
                quimica: req.body.quimica,
                idjornada:req.body.idjornada,
                noboleta:req.body.noboleta,
                 montoboleta:req.body.montoboleta,
                emertipocontacto:req.body.emertipocontacto,
                emernombrecontacto:req.body.emernombrecontacto,
                emertelefono:req.body.emertelefono,
                emerpadre:req.body.emermadre,
                emerpadretel:req.body.emerpadretel,
                emermadre:req.body.emermadre,
                emermadretel:req.body.emermadretel,
                vivecasa:req.body.vivecasa,
                vehiculo:req.body.vehiculo,
                tipovehiculo:req.body.tipovehiculo,
                mediotransporte:req.body.mediotransporte,
                mediososten:req.body.mediososten,
                vivescon:req.body.vivescon,
                trabaja:req.body.trabaja,
            
                lenguaje:req.body.lenguaje ,
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



