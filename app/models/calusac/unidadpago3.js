var mongoose =require("mongoose");

    var Unidadpago3Schema 		=	new  mongoose.Schema({
        idtipounidad   		: { type : String, required : true },
        idunidadacademica   		: { type : String, required : true },
        codigo	: { type : String, required : true },
        tipo	: { type : String, required : true },
        nombre	: { type : String, required : true },
        estado	: { type : String, required : true },
       costo	: { type : String},
   usuarionew	: { type : String },      usuarioup	: { type : String }
        }, {
        timestamps: true
        });

      

module.exports = mongoose.model('Unidadpago3', Unidadpago3Schema);
