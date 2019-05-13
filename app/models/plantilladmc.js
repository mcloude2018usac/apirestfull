var mongoose =require("mongoose");
var PlantilladmcSchema = new mongoose.Schema({
    idempresa  		: { type : String, required : true },
    idplantilla: {
        type: String,
        required: true,ref:'Plantilla'
    },
  
    idplantilladm: {
        type: String,
        required: true,ref:'Plantilladm'
    },
    tiporecurso	: { type : String, required : true },
    nombre   		: { type : String, required : true },
    descripcion   		: { type : String, required : true},
    orden	: { type : Number, required : true },
    archivos: { type :String },
    marcas 	: { type : String },
    url: { type : String },
    contenido: { type : String, required : true },
    estado: {      type: String,    required: true  },
    estado2: {      type: String,    required: true  }
    ,usuarionew	: { type : String },      usuarioup	: { type : String }
}, {
    timestamps: true
});

module.exports = mongoose.model('Plantilladmc', PlantilladmcSchema);