var mongoose =require("mongoose");
var AsignaubicacionSchema = new mongoose.Schema({
    idtipounidad :  		{    id	: { type : String, required : true },   nombre	: { type : String, required : true }        },
    
    idperiodo   		: {    id	: { type : String, required : true },   nombre	: { type : String, required : true }        },
      
   identificador: {
        type: String,
        required: true
    },
    nombre: {      type: String,     required: true  },
    ididioma: {
        type: String,
        required: true,ref:'Unidadidioma3'
    },
    idtipo: {
        type: String,
        required: true,ref:'Unidadtipogrupo3'
    },
    idestudiante: {
        type: String,
        required: true
    },
    idinterno: {
        type: String,
        required: true
    },
    noorden:{        type: String},
    estadopago:{        type: String},
    monto:{        type: String},
    rubro:{        type: String},
    idplanifica:{        type: String},
    ano:{        type: String},
    llave:{        type: String},
    idedificio: {    id	: { type : String },   nombre	: { type : String }        },
    idsalon: {    id	: { type : String },   nombre	: { type : String }        },
    idhora: {  type: String },
    iddia: {  type: Date  },
    idprofesor: {  type: String },
    idprofesornombre: {  type: String },
    date 		: { type: Date, default: Date.now }
    ,usuarionew	: { type : String },      usuarioup	: { type : String },tipoasignacion	: { type : String }
 
 
}, {
    timestamps: true
});
 

/* Export model for application usage */
module.exports = mongoose.model('Asignaubicacion', AsignaubicacionSchema);