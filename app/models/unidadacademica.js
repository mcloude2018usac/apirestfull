var mongoose =require("mongoose");

    var UnidadacademicaSchema 		=	new  mongoose.Schema({
        idtipounidad   		: { type : String, required : true },
        nombre	: { type : String, required : true },
        codigo	: { type : Number, required : true },
        }, {
        timestamps: true
        });

      

module.exports = mongoose.model('Unidadacademica', UnidadacademicaSchema);


