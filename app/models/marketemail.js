var mongoose =require('mongoose');
var MarketemailSchema = new mongoose.Schema({
    idempresa: {        type: String,        required: true    }, 
    idcategoria: {        type: String,        required: true    }, 
    nombre: {        type: String,        required: true    }, 
    titulo: {
        type: String,
        required: true
    }, 
    texto: {
        type: String,
        required: false
    },
    fecha   		: { type : Date, required : true},
    grupo: {       type: String , required : true ,ref:'Marketgrupo' },
    f1: {       type: String   },
    f2: {       type: String   },
    estado: {       type: String   },
    usuarionew	: { type : String },      usuarioup	: { type : String },
    ubicacion: {        type: String  },
    autor: {        type: String  },
    presenta: {        type: String  }
  
}, {
    timestamps: true
});

module.exports = mongoose.model('Marketemail', MarketemailSchema);