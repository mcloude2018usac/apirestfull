var mongoose =require("mongoose");
var PlantilladmSchema = new mongoose.Schema({
    idempresa  		: { type : String, required : true },
    idplantilla: {
        type: String,
        required: true,ref:'Plantilla'
    },
   
    nombre   		: { type : String, required : true },
    descripcion   		: { type : String, required : true},
    fechaini   		: { type : Date, required : true},
    fechafin   		: { type : Date, required : true},
    ubicacion	: { type : String, required : true },
    tiempodias: { type : Number, required : true },
    foto 	: { type : String, required : true },
    orden: { type : Number, required : true },
    estado: {     type: String,      required: true    },
    estado2: {     type: String,      required: true    },
    porc1: { type : Number, required : true }
    ,usuarionew	: { type : String },      usuarioup	: { type : String }
}, {
    timestamps: true
});

module.exports = mongoose.model('Plantilladm', PlantilladmSchema);