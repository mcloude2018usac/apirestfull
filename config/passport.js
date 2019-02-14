var passport = require('passport');
var User = require('../app/models/user');
var config = require('./auth');
var JwtStrategy = require('passport-jwt').Strategy;
var ExtractJwt = require('passport-jwt').ExtractJwt;
var LocalStrategy = require('passport-local').Strategy;
 
var localOptions = {
    usernameField: 'email'
};
 
var localLogin = new LocalStrategy(localOptions, function(email, password, done){
 
    User.findOne({
        email: email
    }, function(err, user){
 
        if(err){
          
            return done(err);
        }
 
        if(!user){
           
            return done(null,  {
                _id: '-1',
                email: '-1',
                role: 'Usuario (correo) Incorrecto.',
                password:'-1',
                estadoemail:'1'
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
                    role: 'Contraseña no valida. (si no se recuerda de su contraseña por favor de click en ¿SE TE OLVIDO TU CONTRASEÑA?)',
                    password:'-11',
                    estadoemail:'1'
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
 
    User.findById(payload._id, function(err, user){
 
        if(err){
          
            return done(err, {
                _id: '-1',
                email: '-1',
                role: 'Usuario (correo) Incorrecto2.',
                password:'-1',
                estadoemail:'1'
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
                estadoemail:'1'
            });
        }
 
    });
 
});
 
passport.use(jwtLogin);
passport.use(localLogin);
