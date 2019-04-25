var mongoose =require("mongoose");
    var MarketgrupoSchema 		=	new  mongoose.Schema({
        idempresa	: { type : String, required : true },
        nombre	: { type : String, required : true },
        codigo	: { type : Number, required : true },
        usuarionew	: { type : String },      usuarioup	: { type : String }
        }, {
        timestamps: true
        });

      

module.exports = mongoose.model('Marketgrupo', MarketgrupoSchema);


