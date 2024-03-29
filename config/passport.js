var passport = require('passport');
var User = require('../app/models/user');
var config = require('./auth');
var JwtStrategy = require('passport-jwt').Strategy;
var ExtractJwt = require('passport-jwt').ExtractJwt;
var LocalStrategy = require('passport-local').Strategy;
var mongoose = require('mongoose');
 
var localOptions = {
    usernameField: 'email',
    passReqToCallback : true
};
 
var localLogin = new LocalStrategy(localOptions, function(req,email, password, done){



 var aa=req.body.idempresa;
 var correot='';
 var filtro;
 correot=req.body.email;
 if(correot.indexOf('@')>=0)
 {
filtro={
    email: email,
   idempresa:aa
    
}
 }
 else
 {
    filtro={
        nombrealias: email,
       idempresa:aa
        
    }

 }

 console.log(filtro)

    User.findOne(filtro, function(err, user){
 
        if(err){
          
            return done(err);
        }


if(user==null){
           
    return done(null,  {
        _id: '-1',
        email: '-1',
        role: 'Usuario (correo) Incorrecto.',
        password:'-1',
        estadoemail:'1',
        idempresa:'1'
    }, {error: 'Usuario (correo) incorrecto.'});
}

        if(!user){
           
            return done(null,  {
                _id: '-1',
                email: '-1',
                role: 'Usuario (correo) Incorrecto.',
                password:'-1',
                estadoemail:user.estadoemail,
                idempresa:user.idempresa,
            }, {error: 'Usuario (correo) incorrecto.'});
        }
 
        user.comparePassword(password, function(err, isMatch){
 
            if(err){
                return done(err);
            }
 
            if(!isMatch){
                
                return done(null, {
                    _id: '-11',
                    email: '-11',
                    role: 'Contraseña no valida, si no se recuerda de su contraseña por favor de click en reinicio de contraseña (Icono de la llave). ',
                    password:'-11',
                    estadoemail:'1',
                    estadoemail:user.estadoemail,
                    idempresa:user.idempresa,
                }, {error: 'Contraseña no valida.'});
            }
 
            return done(null, user);
 
        });
 
    });
 
});
  
var jwtOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme("jwt"),//ExtractJwt.fromAuthHeader(),
    secretOrKey: config.secret
};
 
var jwtLogin = new JwtStrategy(jwtOptions, function(payload, done){

    if(mongoose.Types.ObjectId.isValid(payload._id))
    {
    User.findById(payload._id, function(err, user){
 
        if(err){
          
            return done(err, {
                _id: '-1',
                email: '-1',
                role: 'Usuario (correo) Incorrecto2.',
                password:'-1',
                estadoemail:'1',
                idempresa:'1'
            });
        }
 
        if(user){
          
            done(null, user);
        } else {
           
            done(null, {
                _id: '-1',
                email: '-1',
                role: 'Usuario (correo) Incorrecto.',
                password:'-1',
                estadoemail:'1',
                idempresa:'1'
            });
        }
 
    });
}
else
{
   // res.status(500).send('error en autorización, por fabor borre cookis de su navegador'); 

    return done(null, {
        _id: '-1',
        email: '-1',
        role: 'Existe un problema en su navegador, por favor borre cookies.',
        password:'-1',
        estadoemail:'1',
        idempresa:'1'
    });

}
 
});
 
passport.use(jwtLogin);
passport.use(localLogin);