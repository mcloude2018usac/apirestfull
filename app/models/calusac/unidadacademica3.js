var mongoose =require("mongoose");

    var Unidadacademica3Schema 		=	new  mongoose.Schema({
        idtipounidad   		: { type : String, required : true },
        nombre	: { type : String, required : true },
        codigo	: { type : Number, required : true },
        ididioma	: { type :String, required : true, ref:'Unidadidioma3' },
        idtipocurso	: { type :String, required : true, ref:'Unidadtipocurso3' },
        idtipogrupo	: { type :String, required : true, ref:'Unidadtipogrupo3' },
        estado	: { type : String }
        ,usuarionew	: { type : String },      usuarioup	: { type : String }
        }, {
        timestamps: true
        });

      

module.exports = mongoose.model('Unidadacademica3', Unidadacademica3Schema);


