var mongoose =require("mongoose");

    var TipopreuniSchema 		=	new  mongoose.Schema({
        materia	: { type : String, required : true },
        horario	: { type : String, required : true },
        salon	: { type : String, required : true },
        capacidad	: { type : Number, required : true },
        asignados	: { type : Number, required : true }

        }, {
        timestamps: true
        });

      

module.exports = mongoose.model('Tipopreuni', TipopreuniSchema);


