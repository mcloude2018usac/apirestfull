var mongoose =require("mongoose");
    var ComprasaldoSchema 		=	new  mongoose.Schema({
        idempresa   		: { type : String, required : true },
        idsuscriptor :  		{    id	: { type : String, required : true, ref: 'User' },   nombre	: { type : String, required : true }        },
        monto   		: { type : Number},
        nombre   		: { type : String},
        descripcion   		: { type : String},
        url 	: { type : String },
        tpago 	: { type : String },
        estado	: { type : String, required : true }
        ,usuarionew	: { type : String },      usuarioup	: { type : String },
        idsuscriptor2 :  		{    id	: { type : String, required : true, ref: 'User' },   nombre	: { type : String, required : true }        },
        idempresa0   		: { type : String }
        }, {
        timestamps: true
        });



module.exports = mongoose.model('Comprasaldo', ComprasaldoSchema);
