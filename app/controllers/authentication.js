var jwt = require('jsonwebtoken'); 
var User = require('../models/user');
var authConfig = require('../../config/auth');
var Bitacora = require('../models/bitacora');

function generateToken(user){
    return jwt.sign(user, authConfig.secret, {
        expiresIn: 10080
    });
}
 
function setUserInfo(request){
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

    if(userInfo.estadoemail=="1")
    {
        Bitacora.create(req.body.bitacora);
     //   console.log(req.user)
    
        res.status(200).json({
            token: 'JWT ' + generateToken(userInfo),
            user: userInfo
        });
    
    }
    else{
        res.status(500).json({error: 'Usuario no existe / No a confirmado su cuenta via correo electronico'});
            

    }
 
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
            estadoemail   	: req.body.estadoemail   
         
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
    var password2 = req.body.password;
    var bitacora= req.body.bitacora;
 
    if(!email){
        return res.status(422).send({error: 'You must enter an email address'});
    }
 
    if(!password2){
        return res.status(422).send({error: 'You must enter a password'});
    }
    Bitacora.create(bitacora);
    User.findOne({email: email}, function(err, user){
 
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