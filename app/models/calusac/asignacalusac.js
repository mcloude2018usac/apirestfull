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
    ano:{        type: String},
    sexo:{        type: String},
    nivelacademico:{        type: String},
    codpersonal:{        type: String},
    dependencia:{        type: String},
    tipoa:{        type: String},
    jornada:{        type: String ,ref:'Unidadjornada3' },
    nivel:{        type: String ,ref:'Unidadnivel3' },
    horario:{        type: String ,ref:'Unidadhorario3' },

    profesor:{        type: String,ref:'Unidadprofesor3'},

    carneusac:{        type: String},
     carnecalusac:{        type: String},
     cml:{        type: String},

     monto:{        type: String},
     rubro:{        type: String},
     ididioma:{        type: String,ref:'Unidadidioma3'},
     idtipogrupo:{        type: String,ref:'Unidadtipogrupo3'},
     idtipocurso:{        type: String,ref:'Unidadtipocurso3'},
     idplanifica:{        type: String,ref:'Unidadplan3'},
     identificador:{        type: String},
     nidentificador:{        type: String},
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