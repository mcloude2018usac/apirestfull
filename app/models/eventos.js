var mongoose =require("mongoose");
    var EventoSchema 		=	new  mongoose.Schema({
        idempresa		: { type : String, required : true },   
        nombre   		: { type : String, required : true},
        fechaini   		: { type : Date, required : true},
        fechafin   		: { type : Date, required : true},
        ubicacion	: { type : String, required : true },
        costo	: { type : String, required : true },
        foto 	: { type : String, required : true },
        impresion	: { type : String, required : true },
        nomax: { type : Number },
        fecha: { type : String },
        unidad: { type : String },
        tipoevento: { type : String },
        usuarionew	: { type : String },      usuarioup	: { type : String },
        date 		: { type: Date, default: Date.now }}, {
        timestamps: true
        });



module.exports = mongoose.model('Evento', EventoSchema);

