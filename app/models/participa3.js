var mongoose =require('mongoose');
var Participa3Schema = new mongoose.Schema({

    cui: {
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
    telefono: {
        type: String,
        required: false
    },
    correo: {
        type: String,
        required: false
    },
    tipo: {
        type: String,
        required: false, ref:'Dcatalogo'
    } ,
   
    unidad: {
        type: String,
        required: false
    } ,
    motivo: {
        type: String,  required: false
    },
   
    f1: {       type: String   },
    f2: {       type: String   },
    f3: {       type: String   },
    estado: {       type: String   },
    notamedio: {       type: String   },
    notafin: {       type: String   }

    
}, {
    timestamps: true
});

module.exports = mongoose.model('Participa3', Participa3Schema);