var mongoose =require("mongoose");
var PlantilladSchema = new mongoose.Schema({
    idempresa  		: { type : String, required : true },
    idplantilla: {
        type: String,
        required: true,ref:'Plantilla'
    },
    nombre: {
        type: String,
        required: true
    },
    tipo: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: false
    },
    estado: {
        type: String,
        required: true
    }
    ,usuarionew	: { type : String },      usuarioup	: { type : String }
}, {
    timestamps: true
});

module.exports = mongoose.model('Plantillad', PlantilladSchema);