var mongoose =require("mongoose");
    var Unidadperiodo2Schema 		=	new  mongoose.Schema({
        idtipounidad   		: { type : String, required : true },
        idunidadacademica   		: { type : String, required : true },
        nombre	: { type : String, required : true }
        ,estado	: { type : String, required : true }
        ,usuarionew	: { type : String },      usuarioup	: { type : String }
        }, {
        timestamps: true
        });

      

module.exports = mongoose.model('Unidadperiodo2', Unidadperiodo2Schema);

