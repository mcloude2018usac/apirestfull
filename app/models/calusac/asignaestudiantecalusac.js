var mongoose =require("mongoose");
var AsignaestudiantecalusacSchema = new mongoose.Schema({
    idasigna: {
        type: String,
        required: true
    },
    idtipounidad :  		{    id	: { type : String, required : true },   nombre	: { type : String, required : true }        },
    idunidadacademica   		: {    id	: { type : String, required : true },   nombre	: { type : String, required : true }  ,   codigo	: { type : String, required : true }      },
    idperiodo   		: {    id	: { type : String, required : true },   nombre	: { type : String, required : true }        },
    idedificio: {    id	: { type : String, required : true },   nombre	: { type : String, required : true }        },
    idsalon: {    id	: { type : String, required : true },   nombre	: { type : String, required : true }        },

    no_orientacion: {
        type: String,
        required: true
    },
  
    nombre: {
        type: String,
        required: true
    },
    idestudiante: {
        type: String,
        required: true
    },
  
   
    idnivel: {
        type: String,
        required: true,ref:'Unidadnivel3'
    },
    idjornada: {
        type: String,
        required: true,ref:'Unidadjornada3'
    },
    idhorario: {
        type: String,
        required: true,ref:'Unidadhorario3'
    },
    iddia: {
        type: String,
        required: true,ref:'Unidaddia3'
    },
    idprofesor: {
        type: String,
        required: true,ref:'Unidadprofesor3'
    },
    aprobado: {
        type: String
    },
    ingreso: {
        type: String,
        required: true
    },
    nota: {
        type: String
      
    },
    noasignado: {
        type: Number
    },
    codfac: {
        type: String,
        required: true
    },
    date 		: { type: Date, default: Date.now }
    ,usuarionew	: { type : String },      usuarioup	: { type : String }
}, {
    timestamps: true
});
 

/* Export model for application usage */
module.exports = mongoose.model('Asignaestudiantecalusac', AsignaestudiantecalusacSchema);
