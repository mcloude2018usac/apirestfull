var mongoose =require("mongoose");
    var Unidadperiodo3Schema 		=	new  mongoose.Schema({
        idtipounidad   		: { type : String, required : true },
        idunidadacademica   		: { type : String, required : true },
        codigo	: { type : String, required : true }
        ,ano	: { type : String, required : true }
        ,nombre	: { type : String, required : true }
        ,estado	: { type : String, required : true }
        ,usuarionew	: { type : String },      usuarioup	: { type : String }
        }, {
        timestamps: true
        });

      

module.exports = mongoose.model('Unidadperiodo3', Unidadperiodo3Schema);
