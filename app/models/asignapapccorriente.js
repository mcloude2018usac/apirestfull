
var mongoose =require("mongoose");
var AsignapapccorrienteSchema = new mongoose.Schema({
    idperfil:{ type : String },
    idasigna:{ type : String },
    nov:{ type : String },
    carne:{ type : String },
    nombre:{ type : String },
    noboleta:{ type : String },
    monto:{ type : String },
    cui:{ type : String },
    idtipounidad:{ type : String },
    idunidadacademica:{ type : String },
    idperiodo:{ type : String },
    idedificio:{ type : String },
    idsalon:{ type : String },
    idjornada:{ type : String },
    idestudiante:{ type : String },
    idhorario:{ type : String },
    idmateria:{ type : String },
    usuarionew:{ type : String },
    deudaactual:{ type : Number },
    deposito1:{ type : Number },
    deporsito2:{ type : Number },
    deposito3:{ type : Number },
    deposito4:{ type : Number },
    deposito5:{ type : Number },
    saldoactual:{ type : Number },
    noboleta2:{ type : String },
    noboleta3:{ type : String },
    noboleta4:{ type : String },
    noboleta5:{ type : String }

}, {
    timestamps: true
});
 

/* Export model for application usage */
module.exports = mongoose.model('Asignapapccorriente', AsignapapccorrienteSchema);



 