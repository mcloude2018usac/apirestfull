var mongoose =require("mongoose");

    var Unidadprofesor3Schema 		=	new  mongoose.Schema({
        idtipounidad   		: { type : String, required : true },
        idunidadacademica   		: { type : String, required : true },
        codigo	: { type : String, required : true },
        nombre	: { type : String, required : true },
        correo	: { type : String, required : true },
        cui	: { type : String, required : true }
        ,usuarionew	: { type : String },      usuarioup	: { type : String }
        }, {
        timestamps: true
        });

      

module.exports = mongoose.model('Unidadprofesor3', Unidadprofesor3Schema);


