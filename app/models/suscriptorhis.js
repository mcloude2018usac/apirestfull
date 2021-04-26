var mongoose =require("mongoose");
    var SuscriptorhisSchema 		=	new  mongoose.Schema({
        idempresa   		: { type : String, required : true },
        idsuscriptor :  		{    id	: { type : String, required : true, ref: 'User' },   nombre	: { type : String, required : true }        },
        tipo   		: { type : String},
        descripcion   		: { type : String},
        saldoanterior   		: { type : Number},
        monto   		: { type : Number},
        saldoactual   		: { type : Number},
        codigo1: { type : String},
        idtrans   		: { type : String},
        nodispositivo 		: { type : String},
        noprov 		: { type : String},
        idempresa0   		: { type : String},
        idasociado   		: { type : String},
        idsuscriptor2 :  		{    id	: { type : String, required : true, ref: 'User' },   nombre	: { type : String, required : true }        },
        tipo2   		: { type : String},
        tokentrama   		: { type : String},
        descripcion2   		: { type : String},
        grupo1   		: { type : String},
        grupo2   		: { type : String},
    usuarionew	: { type : String },      usuarioup	: { type : String }
       
        }, {
        timestamps: true
        });



module.exports = mongoose.model('Suscriptorhis', SuscriptorhisSchema);

