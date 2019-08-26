var mongoose =require("mongoose");

    var Unidaddia3Schema 		=	new  mongoose.Schema({
        idtipounidad   		: { type : String, required : true },
        idunidadacademica   		: { type : String, required : true },
        codigo	: { type : String, required : true },
        nombre	: { type : String, required : true },
   usuarionew	: { type : String },      usuarioup	: { type : String }
        }, {
        timestamps: true
        });

      

module.exports = mongoose.model('Unidaddia3', Unidaddia3Schema);