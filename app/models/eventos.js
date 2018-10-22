var mongoose =require("mongoose");
    var EventoSchema 		=	new  mongoose.Schema({
        nombre   		: { type : String, required : true, max : 50 },
        fechaini   		: { type : Date, required : true},
        fechafin   		: { type : Date, required : true},
        ubicacion	: { type : String, required : true },
        costo	: { type : String, required : true },
        foto 	: { type : String, required : true },
        impresion	: { type : String, required : true },
        nomax: { type : Number },
        date 		: { type: Date, default: Date.now }}, {
        timestamps: true
        });



module.exports = mongoose.model('Evento', EventoSchema);

