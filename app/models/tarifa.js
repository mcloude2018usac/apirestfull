var mongoose =require("mongoose");

    var TarifaSchema 		=	new  mongoose.Schema({
        nombre   		: { type : String, required : true },
        estado	: { type : String, required : true },
        }, {
        timestamps: true
        });

      

module.exports = mongoose.model('Tarifa', TarifaSchema);


