var mongoose =require("mongoose");
var Asignacalusac2sSchema = new mongoose.Schema({
   
    cui:{        type: String},
    identificador:{        type: String},
    carnecalusac:{        type: String},
    nombre: {     type: String    },
    ididioma:{        type: String,ref:'Unidadidioma3'},
    idasigna:{        type: String,ref:'Asignacalusac'},
    tipopago: {        type: String   ,ref:'Unidadpago3' },
    n1	: { type : Number},
    n2	: { type : Number},
    n3	: { type : Number},
    n4	: { type : Number},
    n5	: { type : Number},
    estado: {     type: String    },
    usuarionew	: { type : String },      usuarioup	: { type : String }
 
}, {
    timestamps: true
});

/* Export model for application usage */
module.exports = mongoose.model('Asignacalusac2s', Asignacalusac2sSchema);
