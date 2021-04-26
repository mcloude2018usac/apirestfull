var mongoose =require("mongoose");

    var Unidadpago3Schema 		=	new  mongoose.Schema({
        idtipounidad   		: { type : String, required : true },
        idunidadacademica   		: { type : String, required : true },
        codigo	: { type : Number, required : true },
        tipo	: { type : String, required : true },
        nombre	: { type : String, required : true },
        nivel	: { type : String, required : true,ref:'Unidadnivel3' },
        jornada	: { type : String, required : true,ref:'Unidadjornada3' },
        tipogrupo	: { type : String, required : true,ref:'Unidadtipogrupo3' },
        tipocurso	: { type : String, required : true,ref:'Unidadtipocurso3' },
        estado	: { type : String, required : true },
       costo	: { type : String},
   usuarionew	: { type : String },      usuarioup	: { type : String }
        }, {
        timestamps: true
        });

      

module.exports = mongoose.model('Unidadpago3', Unidadpago3Schema);
