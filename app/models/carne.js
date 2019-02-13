var mongoose =require("mongoose");
    var CarneSchema 		=	new  mongoose.Schema({
        carne	: { type : String },
        nombre1	: { type : String },
        nombre2	: { type : String },
        nombre	: { type : String },
        primer_apellido	: { type : String },
        segundo_apellido	: { type : String },
        direccion	: { type : String },
        municipio	: { type : Number },
        depto	: { type : Number },
        fecha_nac	: { type :Date },
        sexo	: { type : Number },
        telefono	: { type : String    },
        ano	: { type : Number },
        correo	: { type : String },
        cui	: { type : String },
        facultad	: { type : Number },
        activo	: { type : Number }
        });

      

module.exports = mongoose.model('Carne', CarneSchema);