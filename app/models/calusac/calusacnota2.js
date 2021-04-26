var mongoose =require("mongoose");
var Calusacnota2sSchema = new mongoose.Schema({
    cui:{        type: String},
    identificador:{        type: String},
    nombre: {     type: String    },
    ididioma:{        type: String,ref:'Unidadidioma4'},
    idasigna:{        type: String,ref:'Asignaubicacion'},
    n1	: 	 {    id	: { type : String },   nombre	: { type : String }        },
    n2	:	 {    id	: { type : String },   nombre	: { type : String }        },
    n3		: {    id	: { type : String},   nombre	: { type : String}        },
    estado: {     type: String    },
    usuarionew	: { type : String },      usuarioup	: { type : String },
    codigocurso:{        type: String},
    codigoidioma:{        type: String}
 
}, {
    timestamps: true
});

/* Export model for application usage */
module.exports = mongoose.model('Calusacnota2s', Calusacnota2sSchema);
