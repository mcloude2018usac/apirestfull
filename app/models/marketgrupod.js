var mongoose =require("mongoose");
    var MarketgrupodSchema 		=	new  mongoose.Schema({
        idempresa: { type : String, required : true },
        idgrupo	: { type : String, required : true },
        correo	: { type : String, required : true },
        nombre	: { type : String, required : true },
        estado	: { type : String, required : true },
        usuarionew	: { type : String },      usuarioup	: { type : String }
        }, {
        timestamps: true
        });

      

module.exports = mongoose.model('Marketgrupod', MarketgrupodSchema);


