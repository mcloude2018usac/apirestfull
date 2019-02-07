var mongoose =require("mongoose");
var AsignapapSchema = new mongoose.Schema({
    userId : {        type: String,        required: true    },
    idunidadacademica   		: {    id	: { type : String, required : true },   nombre	: { type : String, required : true }     ,   codigo	: { type : String, required : true }       },
    idperiodo   		: {type : String, required : true},
    noboleta: {        type: String,        required: true    },
    cui: {        type: String,        required: true    },
    nombre: {        type: String,        required: true    },
    monto: {        type: Number,        required: true    },
    montodeuda: {        type: Number,        required: true    },
    cursosaplica: {        type: String,        required: true    },
    idjornada: {        type: String,        required: true    },
    lenguaje	: { type : Boolean },
    matematica	: { type : Boolean },
    fisica	: { type : Boolean },
    biologia	: { type : Boolean },
    quimica	: { type : Boolean },
    nota: {        type: String,        required: true    },
    correo: {        type: String,        required: true    },
    estado: {        type: String,        required: true    },
    unidad: {        type: String,        required: true    },
    codunidad: {        type: String,        required: true    },
    codcarrera: {        type: String,        required: true    },
    usuarionew	: { type : String },      usuarioup	: { type : String }
}, {
    timestamps: true
});
 

/* Export model for application usage */
module.exports = mongoose.model('Asignapap', AsignapapSchema);
