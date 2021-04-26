var mongoose =require("mongoose");

    var Unidadacademica2Schema 		=	new  mongoose.Schema({
        idtipounidad   		: { type : String, required : true },
        nombre	: { type : String, required : true },
        codigo	: { type : Number, required : true }
        ,usuarionew	: { type : String },      usuarioup	: { type : String }
        }, {
        timestamps: true
        });

      

module.exports = mongoose.model('Unidadacademica2', Unidadacademica2Schema);


