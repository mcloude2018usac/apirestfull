var mongoose =require("mongoose");

    var Permison3Schema 		=	new  mongoose.Schema({
        idempresa   		: { type : String, required : true },
        idpermiso   		: { type : String, required : true },
        idrol   		: { type : String, required : true },
        nombre   		: { type : String, required : true , ref: 'Modulo'},
        icon   		: { type : String },
        ingreso	: { type : Boolean },
        consulta	: { type : Boolean },
        eliminacion	: { type : Boolean },
        creacion	: { type : Boolean },
        actualizacion	: { type : Boolean },
        filtro	: { type : Boolean },
        reporte	: { type : Boolean },
        potros1   		: { type : String },
        votros1   		: { type : String },
        orden: { type : Number }
        ,usuarionew	: { type : String },      usuarioup	: { type : String }
      
        }, {
        timestamps: true
        });



module.exports = mongoose.model('Permison3', Permison3Schema);

