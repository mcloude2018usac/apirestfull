var mongoose =require("mongoose");
    var CarneSchema 		=	new  mongoose.Schema({
        carne	: { type : String },
        nombre	: { type : String },
        direccion	: { type : String },
        cui	: { type : String },
        nov	: { type : String },
        codfac	: { type : Number },
        facultad	: { type : String },
        codcarr	: { type : Number },
        carrera	: { type : String },
        fec_nac	: { type :Date },
        telefono	: { type : String    },
        sexo	: { type : Number },
        civil	: { type : Number },
        correo	: { type : String },
        activo	: { type : Number }
        });

      

module.exports = mongoose.model('Carne', CarneSchema);