var mongoose =require("mongoose");
var AsignaubicacionSchema = new mongoose.Schema({
    idtipounidad :  		{    id	: { type : String, required : true },   nombre	: { type : String, required : true }        },
    
    idperiodo   		: {    id	: { type : String, required : true },   nombre	: { type : String, required : true }        },
      
   identificador: {
        type: String,
        required: true
    },
    identificador2: {
        type: String
      
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
    estadoacta:{        type: String},
    noorden:{        type: String},
    n1: {    id	: { type : String },   nombre	: { type : String }        },
    n2: {    id	: { type : String },   nombre	: { type : String }        },
    n3: {    id	: { type : String },   nombre	: { type : String }        },
    estadopago:{        type: String},
    monto:{        type: String},
    foto:{        type: String},
    fechasiif:{        type: String},
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
    estadooperador:{        type: String},
    userasignado:{        type: String},
    userasignadoemail:{        type: String},
    userejecutaemail:{        type: String},
    ultrechazo:{        type: String},
    date 		: { type: Date, default: Date.now }
    ,usuarionew	: { type : String },      usuarioup	: { type : String },tipoasignacion	: { type : String }
 
 
}, {
    timestamps: true
});
 

/* Export model for application usage */
module.exports = mongoose.model('Asignaubicacion', AsignaubicacionSchema);
