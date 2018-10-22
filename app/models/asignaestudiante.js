var mongoose =require("mongoose");
var AsignaestudianteSchema = new mongoose.Schema({
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
  
    idhorario: {
        type: String,
        required: true
    },
    idmateria: {
        type: String,
        required: true
    },
    fexamen: {
        type: String,
        required: true
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
}, {
    timestamps: true
});
 

/* Export model for application usage */
module.exports = mongoose.model('Asignaestudiante', AsignaestudianteSchema);
