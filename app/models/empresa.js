var mongoose =require("mongoose");
    var EmpresaSchema 		=	new  mongoose.Schema({
        idempresa0  		: { type : String, required : true },
        nit   		: { type : String, required : true },
        nombre   		: { type : String},
        razon   		: { type : String},
        direccion   		: { type : String},
        email   		: { type : String},
        telefonos   		: { type : String},
        estado	: { type : String, required : true }
        ,usuarionew	: { type : String },      usuarioup	: { type : String }
       
        }, {
        timestamps: true
        });



module.exports = mongoose.model('Empresa', EmpresaSchema);

