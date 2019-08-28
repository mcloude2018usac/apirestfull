var mongoose =require("mongoose");
var AsignacalusacSchema = new mongoose.Schema({
    idtipounidad :  		{    id	: { type : String, required : true },   nombre	: { type : String, required : true }        },
    idunidadacademica   		: {    id	: { type : String, required : true },   nombre	: { type : String, required : true }     ,   codigo	: { type : String, required : true }       },
    idperiodo   		: {    id	: { type : String, required : true },   nombre	: { type : String, required : true }        },
      
    no_orientacion: {        type: String,        required: true    },
    tipopago: {        type: String,        required: true   ,ref:'Unidadpago3' },
    estadopago: {        type: String,        required: true    },
    noboletapago: {        type: String,        required: true    },
    fechanac:{ type : Date, required : true},
    cui:{        type: String},
    nopasaporte:{        type: String},
    direccion:{        type: String},
    telefono:{        type: String},
    correo:{        type: String},
    idedificio: {    id	: { type : String },   nombre	: { type : String }        },
    idsalon: {    id	: { type : String },   nombre	: { type : String }        },

    sexo:{        type: String},
    nivelacademico:{        type: String},
    codpersonal:{        type: String},
    dependencia:{        type: String},
    tipoa:{        type: String},
    jornada:{        type: String},
    nivel:{        type: String},
    horario:{        type: String},
    dia:{        type: String},
    profesor:{        type: String},

    carneusac:{        type: String},
     carnecalusac:{        type: String},
     cml:{        type: String},

     monto:{        type: String},
     rubro:{        type: String},
     identificador:{        type: String},
    nombre: {
        type: String,
        required: true
    },
    idestudiante: {
        type: String,
        required: true
    },
    idinterno: {
        type: String,
        required: true
    },
    foto1:{        type: String},
    foto2:{        type: String},
    foto3:{        type: String},
    foto4:{        type: String},
    date 		: { type: Date, default: Date.now }
    ,usuarionew	: { type : String },      usuarioup	: { type : String },tipoasignacion	: { type : String }
 
 
}, {
    timestamps: true
});
 

/* Export model for application usage */
module.exports = mongoose.model('Asignacalusac', AsignacalusacSchema);
