var mongoose =require("mongoose");
var PlantillamdevaSchema = new mongoose.Schema({
    idempresa  		: { type : String, required : true },
    idplantilla: {
        type: String,
        required: true,ref:'Plantilla'
    },
 
    idplantilladm: {
        type: String,
        required: true,ref:'Plantilladm'
    },
    nombre   		: { type : String, required : true },
    formulario   		: { type : String, required : true},
    punteo	: { type : Number, required : true },
    estado: {
        type: String,
        required: true
    }
    ,usuarionew	: { type : String },      usuarioup	: { type : String }
}, {
    timestamps: true
});

module.exports = mongoose.model('Plantillamdeva', PlantillamdevaSchema);