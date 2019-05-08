var mongoose =require("mongoose");
    var EntradasdpiSchema 		=	new  mongoose.Schema({
        idempresa   		: { type : String, required : true },
        nombre   		: { type : String, required : true },
        cui   		: { type : String, required : true },
        tarifa: { type : Number, required : true },
        idpersonal: { type : String},
        usuarionew	: { type : String },    
        usuarioup	: { type : String },
        tentrada		: { type: Date},
        tsalida		: { type: Date},
        estado: { type : String, required : true },
        estado2: { type : String, required : true },
        nodispositivo 		: { type : String, required : true },
        noprov 		: { type : String, required : true },
        nombrefactura: { type : String },
        nitfactura: { type : String },
        direccionfactura: { type : String },
        monto: { type : Number },
        horasdescuento: { type : Number },
        montodescuento: { type : Number },
        horascobradas: { type : Number }
    }, {
        timestamps: true
        });



module.exports = mongoose.model('Entradasdpi', EntradasdpiSchema);
