var jwt = require('jsonwebtoken'); 
var User = require('../models/user');
var authConfig = require('../../config/auth');
var Bitacora = require('../models/bitacora');
var generator = require('generate-password');
var mongoose = require('mongoose');

function generateToken(user){
    return jwt.sign(user, authConfig.secret, {
        expiresIn: 10080
    });
}
 
function setUserInfo(request){

  //  if(mongoose.Types.ObjectId.isValid(request._id))    {
        return {
            _id: request._id,
            email: request.email,
            role: request.role,
            password:request.password,
            estadoemail:request.estadoemail
        };
 
    
   
}
 
exports.login = function(req, res, next){
 
 

        var userInfo = setUserInfo(req.user);
 
          if(userInfo.email=="-11")    {
              Bitacora.create({email: "api", permiso: "Ingreso", accion: "intento fallido"});
              
                        
              res.status(200).json({
                  token: 'null',
                  user: userInfo
              });
    
   
    
    }  else{     
        
        
        Bitacora.create(req.body.bitacora);
                        
              res.status(200).json({
                  token: 'JWT ' + generateToken(userInfo),
                  user: userInfo
              });              }
 
}
 
exports.register = function(req, res, next){
 
    var email = req.body.email;
    var password = req.body.password;
   


    var bitacora= req.body.bitacora;
 
    if(!email){
        return res.status(422).send({error: 'You must enter an email address'});
    }
 
    if(!password){
        return res.status(422).send({error: 'You must enter a password'});
    }
    Bitacora.create(bitacora);


//email: email

    User.findOne({  $or : [
        { $and : [ { email : req.body.email }] },
        { $and : [ { nov : req.body.nov }] },
        { $and : [ {cui : req.body.cui } ] }]
}, function(err, existingUser){
 
        if(err){
            return next(err);
        }
 
        if(existingUser){
            return res.status(500).send('Esta direccion de correo electronico , NOV o CUI ya esta en uso');
        }
 
        var user = new User({
            email: email,
            password: password,
            role: req.body.role,
            idempresa:req.body.idmepresa,
            nombre        	: req.body.nombre        	,
            cui 	: req.body.cui 	,
            foto 	: req.body.foto 	,
            direccion   	: req.body.direccion   	,
            telefono    	: req.body.telefono    	,
            lenguaje    	: req.body.lenguaje    	,
            sexo    	: req.body.sexo    	,
            estado    	: req.body.estado ,
            nov    	: req.body.nov   , 	
            unidad    	: req.body.unidad   ,
            codpersonal    	: req.body.codpersonal   ,
            interno    	: req.body.interno  , 
            estadoemail   	: req.body.estadoemail ,  
            tiposuscriptor   	: req.body.tiposuscriptor   ,
            APP : req.body.APP,
            accesoestado:  req.body.accesoestado,
            accesohora:  req.body.accesohora,
            controlacceso:''
            
         
        });
 
        user.save(function(err, user){
 
            if(err){
                return next(err);
            }
 
            var userInfo = setUserInfo(user);
 
            res.status(201).json({
                token: 'JWT ' + generateToken(userInfo),
                user: userInfo
            })
 
        });
 
    });
 
}


exports.register2 = function(req, res, next){
 
    var email = req.body.email;
    var empresa = req.body.idempresa;
    var password2 = req.body.password;
    var bitacora= req.body.bitacora;
 
    if(!email){
        return res.status(422).send({error: 'You must enter an email address'});
    }
 
    if(!password2){
        return res.status(422).send({error: 'You must enter a password'});
    }
    Bitacora.create(bitacora);


    User.findOne({email: email, idempresa:empresa}, function(err, user){
 
        if(err){
            return next(err);
        }

        
 
        user.password=password2
        user.save(function(err){
 
            if(err){
                return next(err);
            }
 
            
            res.json(setUserInfo(user));    
 
        });
 
    });
 
}


exports.register3 = function(req, res, next){
 
    var email = req.body.email;
    var bitacora= req.body.bitacora;
 
    if(!email){
        return res.status(422).send({error: 'You must enter an email address'});
    }
 

    Bitacora.create(bitacora);
    User.findOne({email: email}, function(err, user){
 
        if(err){
            return next(err);
        }
        var password2= generator.generate({
            length: 8,
            numbers: true
        });   


if(user)
{
  //  var password2= user._id;
        user.password='' + password2+'123@'
        user.save(function(err){
 
            if(err){
                return next(err);
            }
 
          
            res.json('' + password2+'123@');    
 
        });
 

}
else
{

    res.status(500).send('NO EXISTE REGISTRO'); 

}
    
    });
 
}


exports.register4 = function(req, res, next){
 
    var email = req.body.email;
    var empresa = req.body.idempresa;
    var cui= req.body.cui;
    var bitacora= req.body.bitacora;
 
    if(!email){
        return res.status(422).send({error: 'You must enter an email address'});
    }
 

    Bitacora.create(bitacora);
    User.findOne({email: email,cui:cui,idempresa:empresa}, function(err, user){
 
        if(err){
            return next(err);
        }
        var password2= generator.generate({
            length: 4,
            numbers: true
        });   


if(user)
{
  //  var password2= user._id;
        user.password='' + password2+'123@'
        user.save(function(err){
 
            if(err){
                return next(err);
            }
 
          
            res.json( password2+'123@');    
 
        });
 

}
else
{

    res.status(500).send('Usuario con este CUI y EMAIL no se encuentra registrado en el sistema, por favor valide su informacón'); 

}
    
    });
 
}
 
exports.roleAuthorization = function(roles){
 
    return function(req, res, next){
 
        var user = req.user;
 
        User.find({_id:user._id,estadoemail:'1'}, function(err, foundUser){

            if(err){
                res.status(500).json({error: 'Usuario no existe / no se autenticado via correo electronico'});
                return next(err);
            }
 
            if(roles.indexOf(foundUser.role) > -1){
                return next();
            }
 
            res.status(500).json({error: 'No estás autorizado para ver este contenido'});
            return next('Usuario no existe / Por favor revisa tu correo electrónico y valido tu ingreso');
 
        });
 
    }
 
}