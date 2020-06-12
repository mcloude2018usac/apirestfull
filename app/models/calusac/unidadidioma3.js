var mongoose =require("mongoose");

    var Unidadidioma3Schema 		=	new  mongoose.Schema({
        idtipounidad   		: { type : String, required : true,ref:'Tipounidad3' },
        idunidadacademica   		: { type : String, required : true },
        codigo	: { type : String, required : true },
        nombre	: { type : String, required : true }
        ,usuarionew	: { type : String },      usuarioup	: { type : String }
        }, {
        timestamps: true
        });

      

module.exports = mongoose.model('Unidadidioma3', Unidadidioma3Schema);


