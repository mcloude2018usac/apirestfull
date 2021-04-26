var mongoose =require("mongoose");
    var SolcarneSchema 		=	new  mongoose.Schema({
        idempresa   		: { type : String, required : true },
        idsuscriptor :  		{    id	: { type : String, required : true, ref: 'User' },   nombre	: { type : String, required : true }        },
        nombre	: { type : String, required : true },
        codigo	: { type : String, required : true },
        estado	: { type : String, required : true },
        nota   		: { type : String}
        ,usuarionew	: { type : String },      usuarioup	: { type : String }
        }, {
        timestamps: true
        });



module.exports = mongoose.model('Solcarne', SolcarneSchema);
