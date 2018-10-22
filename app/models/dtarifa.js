var mongoose =require("mongoose");
    var DtarifaSchema 		=	new  mongoose.Schema({
        idtarifa   		: { type : String, required : true },
        nombre   		: { type : String, required : true },
        horaini   		: { type : Number, required : true },
        horafin   		: { type : Number, required : true },
        monto   		: { type :  String, required : true },
        estado	: { type : String, required : true },
        }, {
        timestamps: true
        });

      

module.exports = mongoose.model('Dtarifa', DtarifaSchema);


