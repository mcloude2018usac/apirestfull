var mongoose =require("mongoose");
    var EntradacasaSchema 		=	new  mongoose.Schema({
        idempresa   		: { type : String, required : true },
        nombre   		: { type : String, required : true },
        cui   		: { type : String, required : true },
        telefono: { type : Number },
        horas: { type : Number },
        fotoe: { type : String },
        fotos: { type : String },
        dircasa: { type : String },
        contactocasa: { type : String },
        fechanac: {  type : String},
        idpersonal: { type : String},
        usuarionew	: { type : String },    
        usuarioup	: { type : String },
        tentrada		: { type: Date},
        tsalida		: { type: Date},
        estado: { type : String, required : true },
        nodispositivo 		: { type : String, required : true },
        noprov 		: { type : String, required : true },
        idempresa0   		: { type : String, required : true }
    }, {
        timestamps: true
        });



module.exports = mongoose.model('Entradacasa', EntradacasaSchema);
