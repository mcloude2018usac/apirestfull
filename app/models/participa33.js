var mongoose =require('mongoose');
var Participa33Schema = new mongoose.Schema({

    iddenuncia: {
        type: String,
        required: true
    }, 
    cui: {
        type: String,
        required: false
    }, 
    nombre: {
        type: String,
        required: false
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
    notafin: {       type: String   },
    xpos: {       type: Number   },
    ypos: {       type: Number   },
    idusuario	: { type : String , ref:'User'},
    motivo2	: { type : String },
    motivo3: {       type: String   },
    
}, {
    timestamps: true
});

module.exports = mongoose.model('Participa33', Participa33Schema);