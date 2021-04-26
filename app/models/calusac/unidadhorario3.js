var mongoose =require("mongoose");

    var Unidadhorario3Schema 		=	new  mongoose.Schema({
        idtipounidad   		: { type : String, required : true },
        idunidadacademica   		: { type : String, required : true },
        idjornada   		: { type : String, required : true },
        codigo	: { type : String, required : true },
        nombre	: { type : String, required : true },
        nombre2	: { type : String, required : true },
        dia	: { type : String, required : true },
          usuarionew	: { type : String },      usuarioup	: { type : String }
        }, {
        timestamps: true
        });

      

module.exports = mongoose.model('Unidadhorario3', Unidadhorario3Schema);
