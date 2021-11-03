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
        pmodulo   		: { type :Array},
        estado	: { type : String, required : true },
        titulo0	: { type : String, required : true },
        foto0	: { type : String },
        foto1	: { type : String },
        foto2	: { type : String },
        lenguaje	: { type : String },
        pagina0: { type : String },
        pagina10: { type : String },
        logo1	: { type : String },
        logo2	: { type : String },
        color1	: { type : String },
        color2:	 { type : String },
        color3:	 { type : String },
        color4:	 { type : String },
        horario	: { type : String },
        inicio	: { type : String },
        siregister: { type : String },

        simarca: { type : String },
        siexporta: { type : String },
        sicorrelativo2: { type : String },
        sicodigointerno: { type : String },
        

        siperfil: { type : String },
        siimagenes: { type : String },
        sicorrelativo: { type : String },
        subtitulo: { type : String },
        redsocial1	: { type : String },
        redsocial2	: { type : String },
        redsocial3	: { type : String },
        tipocorreo	: { type : String },
        segurocorreo	: { type : String },
        tlscorreo	: { type : String },
        origencorreo	: { type : String },
        clavecorreo	: { type : String },
        puertocorreo	: { type : String },
        tipofirma	: { type : String },
        nombredominio	: { type : String },
        usuarionew	: { type : String },      usuarioup	: { type : String }
       
        }, {
        timestamps: true
        });



module.exports = mongoose.model('Empresa', EmpresaSchema);

