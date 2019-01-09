var mongoose =require("mongoose");
    var ReversionsaldoSchema 		=	new  mongoose.Schema({
        idsuscriptor :  		{    id	: { type : String, required : true, ref: 'User' },   nombre	: { type : String, required : true }        },
        monto   		: { type : String},
        nombre   		: { type : String},
        url 	: { type : String },
        estado	: { type : String, required : true }
        ,usuarionew	: { type : String },      usuarioup	: { type : String },
        idsuscriptor2 :  		{    id	: { type : String, required : true, ref: 'User' },   nombre	: { type : String, required : true }        }
        }, {
        timestamps: true
        });



module.exports = mongoose.model('Reversionsaldo', ReversionsaldoSchema);
