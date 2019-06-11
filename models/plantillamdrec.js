var mongoose =require("mongoose");
var PlantillamdrecSchema = new mongoose.Schema({
    idempresa  		: { type : String, required : true },
    idplantilla: {
        type: String,
        required: true,ref:'Plantilla'
    },
   
    idplantilladm: {
        type: String,
        required: true,ref:'Plantilladm'
    },
    tipo	: { type : String, required : true },
    nombre   		: { type : String, required : true },
    descripcion   		: { type : String, required : true},
    orden	: { type : Number, required : true },
    url: { type : String },
    contenido: { type : String, required : true },
    estado: {
        type: String,
        required: true
    }
    ,usuarionew	: { type : String },      usuarioup	: { type : String }
}, {
    timestamps: true
});

module.exports = mongoose.model('Plantillamdrec', PlantillamdrecSchema);