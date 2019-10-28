var mongoose =require("mongoose");
    var AfiliadoSchema 		=	new  mongoose.Schema({
        idempresa  		: { type : String, required : true },
        idempresa0  		: { type : String, required : true },
        dpi  		: { type : String, required : true },
        nombre   		: { type : String},
        apellido   		: { type : String},
        direccion   		: { type : String},
        email   		: { type : String},
        telefono   		: { type : String}
        ,usuarionew	: { type : String },      usuarioup	: { type : String }
       
        }, {
        timestamps: true
        });



module.exports = mongoose.model('Afiliado', AfiliadoSchema);

