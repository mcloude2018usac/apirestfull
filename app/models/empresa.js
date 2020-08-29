var mongoose =require("mongoose");
    var EmpresaSchema 		=	new  mongoose.Schema({
        idempresa0  		: { type : String, required : true },
        nombre   		: { type : String},
        nombrecorto   		: { type : String},
        direccion   		: { type : String},
        nit   		: { type : String, required : true },
        razon   		: { type : String},
        email   		: { type : String},
        pinicio   		: { type : String},
        telefonos   		: { type : String},
        moneda   		: { type : String},
        estado	: { type : String, required : true },
        titulo0	: { type : String, required : true },
        foto0	: { type : String },
        foto1	: { type : String },
        foto2	: { type : String },
        logo1	: { type : String },
        logo2	: { type : String },
        color1	: { type : String },
        color2:	 { type : String },
        color3:	 { type : String },
        color4:	 { type : String },
        horario	: { type : String },
        redsocial1	: { type : String },
        redsocial2	: { type : String },
        redsocial3	: { type : String },
        nombredominio	: { type : String },
        usuarionew	: { type : String },      usuarioup	: { type : String }
       
        }, {
        timestamps: true
        });



module.exports = mongoose.model('Empresa', EmpresaSchema);

