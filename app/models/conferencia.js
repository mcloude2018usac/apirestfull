var mongoose =require("mongoose");
var ConferenciaSchema = new mongoose.Schema({
    idempresa   		: { type : String, required : true },
    idevento: {
        type: String,
        required: true
    },
    nombre: {
        type: String,
        required: true
    },
    conferencista: {
        type: String,
        required: true
    },
    fechaini   		: { type : Date, required : true},
    fechafin   		: { type : Date, required : true},
    costo	: { type : String, required : true },
    nomax: { type : Number },
    estado: {
        type: String,
        required: true
    }
    ,usuarionew	: { type : String },      usuarioup	: { type : String }
}, {
    timestamps: true
});

module.exports = mongoose.model('Conferencia', ConferenciaSchema);