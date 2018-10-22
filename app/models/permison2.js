var mongoose =require("mongoose");

    var Permison2Schema 		=	new  mongoose.Schema({
        idpermiso   		: { type : String, required : true },
        idrol   		: { type : String, required : true },
        nombre   		: { type : String, required : true },
        icon   		: { type : String },
        ingreso	: { type : Boolean },
        consulta	: { type : Boolean },
        eliminacion	: { type : Boolean },
        creacion	: { type : Boolean },
        actualizacion	: { type : Boolean },
      
        }, {
        timestamps: true
        });



module.exports = mongoose.model('Permison2', Permison2Schema);

