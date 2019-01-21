var mongoose =require("mongoose");
    var RepcarneSchema 		=	new  mongoose.Schema({
        idsuscriptor :  		{    id	: { type : String, required : true, ref: 'User' },   nombre	: { type : String, required : true }        },
        nombre	: { type : String, required : true },
        estado	: { type : String, required : true },
        nota   		: { type : String}
        ,usuarionew	: { type : String },      usuarioup	: { type : String }
        }, {
        timestamps: true
        });



module.exports = mongoose.model('Repcarne', RepcarneSchema);
