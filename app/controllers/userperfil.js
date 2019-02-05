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
            userId =req.body.userId;
            cui   		=req.body.cui;
            nov   		=req.body.nov;
            carne   		=req.body.carne;
            nombre1   		=req.body.nombre1;
            nombre2   		=req.body.nombre2;
            nombre3   		=req.body.nombre3;  
            nombre4  		=req.body.nombre4;
            telefono   		=req.body.telefono;
            fechanac   		=req.body.fechanac;
            genero   		=req.body.genero;
            correo   		=req.body.correo;
            depto   		=req.body.depto;
            muni   		=req.body.muni;
            zona   		=req.body.zona;
            colonia   		=req.body.colonia;
            calle   		=req.body.calle;
            nocasa   		=req.body.nocasa;
            graduanmedio   		=req.body.graduanmedio;
            carreranmedio  		=req.body.carreranmedio;
            tipoestanmedio	=req.body.tipoestanmedio;
            nombreestamedio	=req.body.nombreestamedio;
            deptoestamedio	=req.body.deptoestamedio;
            muniestamedio	=req.body.muniestamedio;
            zonaestamedio	=req.body.zonaestamedio;
            facultadins=req.body.facultadins;
            noboleta=req.body.noboleta;
            montoboleta=req.body.montoboleta;
            emertipocontacto=req.body.emertipocontacto;
            emernombrecontacto=req.body.emernombrecontacto;
            emertelefono=req.body.emertelefono;
            emerpadre=req.body.emermadre;
            emerpadretel=req.body.emerpadretel;
            emermadre=req.body.emermadre;
            emermadretel=req.body.emermadretel;
            vivecasa=req.body.vivecasa;
            vehiculo=req.body.vehiculo;
            tipovehiculo=req.body.tipovehiculo;
            mediotransporte=req.body.mediotransporte;
            mediososten=req.body.mediososten;
            vivescon=req.body.vivescon;
            trabaja=req.body.trabaja;
        
            lenguaje=req.body.lenguaje; 
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
            
                lenguaje:req.body.lenguaje 
              
        
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



