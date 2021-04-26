var mongoose =require("mongoose");
var AsignaubicacionaSchema = new mongoose.Schema({
    idtipounidad :  		{    id	: { type : String, required : true },   nombre	: { type : String, required : true }        },
    idunidadacademica   		: {    id	: { type : String, required : true },   nombre	: { type : String, required : true }         },
    ididioma: {        type: String,        required: true,ref:'Unidadidioma3'    },
    
    idtipo: {        type: String,        required: true,ref:'Unidadtipogrupo3'    },
    idperiodo   		: {    id	: { type : String, required : true },   nombre	: { type : String, required : true }        },
    foto1:{        type: String},
    foto2:{        type: String},
    foto3:{        type: String},
    foto4:{        type: String},
    notelefono:{        type: String},
    carneusac:{        type: String},
    idhora: {  type: String },
    iddia: {  type: Date  },
    idestudiante: {        type: String,        required: true    },
    idinterno: {        type: String,        required: true    },
   identificador: {        type: String,        required: true    },
    identificador2: {        type: String          },
    noorden:{        type: String},
    noorden2:{        type: String},
    rubro:{        type: String},
    ano:{        type: String},
    llave:{        type: String},
    llave2:{        type: String},
    monto2:{        type: String},
    estadopago:{        type: String},
    monto:{        type: String},
    fechasiif:{        type: String},
    fechasiif2:{        type: String},
    tipoasignacion:{        type: String},

    estadooperador:{        type: String},
    userasignado:{        type: String},
    userasignadoemail:{        type: String},
    userejecutaemail:{        type: String},
    ultrechazo:{        type: String},
    nombre: {      type: String,     required: true  },
    
    unidad:{        type: String},




    estadoacta:{        type: String},
   
    n1: {    id	: { type : String },   nombre	: { type : String }        },
    n2: {    id	: { type : String },   nombre	: { type : String }        },
    n3: {    id	: { type : String },   nombre	: { type : String }        },
    idplanifica:{        type: String},
    idedificio: {    id	: { type : String },   nombre	: { type : String }        },
    idsalon: {    id	: { type : String },   nombre	: { type : String }        },
    idprofesor: {  type: String },
    idprofesornombre: {  type: String },
    date 		: { type: Date, default: Date.now }
    ,usuarionew	: { type : String },      usuarioup	: { type : String },tipoasignacion	: { type : String }
 
 
}, {
    timestamps: true
});
 

/* Export model for application usage */
    module.exports = mongoose.model('Asignaubicaciona', AsignaubicacionaSchema);
