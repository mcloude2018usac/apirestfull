var mongoose =require("mongoose");

    var Unidadedificiosalon2Schema 		=	new  mongoose.Schema({
        idtipounidad   		: { type : String, required : true },
        idunidadacademica   		: { type : String, required : true },
        idedificio   		: { type : String, required : true },
        nombre	: { type : String, required : true },
        capacidad	: { type : Number, required : true },
        estado	: { type : String, required : true }
        ,usuarionew	: { type : String },      usuarioup	: { type : String }
        }, {
        timestamps: true
        });

      

module.exports = mongoose.model('Unidadedificiosalon2', Unidadedificiosalon2Schema);


