var mongoose =require('mongoose');
var Participa4Schema = new mongoose.Schema({

   
    nombre: {
        type: String,
        required: true
    },
    apellido: {
        type: String,
        required: false
    },
    genero: {
        type: String,
        required: false
    },
    edad: {
        type: String,
        required: false
    },
    correo: {
        type: String,
        required: false
    },
    telefono: {
        type: String,
        required: false
    },
    hlenguaje: {
        type: String,
        required: false
    } ,
    hbiologia: {
        type: String
    },
    hquimica: {
        type: String
    },
    hmate: {
        type: String
    },
    estado: {
        type: String,
        required: true
    }    
    ,usuarionew	: { type : String },      usuarioup	: { type : String }
}, {
    timestamps: true
});

module.exports = mongoose.model('Participa4', Participa4Schema);