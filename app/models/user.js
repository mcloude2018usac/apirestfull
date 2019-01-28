var mongoose =require("mongoose");
var bcrypt   = require('bcrypt-nodejs');
var  mongoosePaginate= require('mongoose-paginate'); 
 
var UserSchema = new mongoose.Schema({
 
    email: {
        type: String,
        lowercase: true,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    nombre   		: { type : String, required : true },
    cui	: { type : String, required : true },
    direccion	: { type : String},
    telefono	: { type : String},
    foto 	: { type : String },
    lenguaje	: { type : String, required : true },
    sexo 	: { type : String },
    estado 	: { type : String },
    nov 	: { type : String },
    unidad 	: { type : String , ref: 'Catalogo'},
    codpersonal 	: { type : String },
    estadoemail	: { type : String },
    interno 	: { type : String },
    usuarionew	: { type : String },      usuarioup	: { type : String },
    fechanac   		: { type : Date},
    saldo 	: { type : String },
    tiposuscriptor 	: { type : String , ref: 'Tiposuscriptor'} 
    
    
 
}, {
    timestamps: true
});
 




UserSchema.pre('save', function(next){
 
    var user = this;
    var SALT_FACTOR = 5;
 
    if(!user.isModified('password')){
        return next();
    }
 
    bcrypt.genSalt(SALT_FACTOR, function(err, salt){
 
        if(err){
            return next(err);
        }
 
        bcrypt.hash(user.password, salt, null, function(err, hash){
 
            if(err){
                return next(err);
            }
 
            user.password = hash;
            next();
 
        });
 
    });
 
});
 
UserSchema.methods.comparePassword = function(passwordAttempt, cb){
 
    bcrypt.compare(passwordAttempt, this.password, function(err, isMatch){
 
        if(err){
            return cb(err);
        } else {
            cb(null, isMatch);
        }
    });
 
}
 

UserSchema.plugin(mongoosePaginate);
module.exports = mongoose.model('User', UserSchema);