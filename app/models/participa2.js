var mongoose =require('mongoose');
var Participa2Schema = new mongoose.Schema({

    idtipoevento : {
        id :  { type : String, required : true }, nombre : { type : String, required : true }, codigo :  { type : String, required : true }
    },
    idarea : {
        id :  { type : String, required : true },   nombre :  { type : String, required : true } },
    idevento: {
        type: String,
        required: true
    },
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
    unidad: {
        type: String,
        required: false
    } ,
    otros: {
        type: String
    },
    estado: {
        type: String,
        required: true
    },
    cuenta: {
        type: String
      
    },
    
    fecha: { type: String }
}, {
    timestamps: true
});

module.exports = mongoose.model('Participa2', Participa2Schema);