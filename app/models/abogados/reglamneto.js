var mongoose =require('mongoose');
var ReglamentoSchema = new mongoose.Schema({
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
    f1: {       type: String   },
    f2: {       type: String   },
    estado: {       type: String   },
    pais: {        type: String,        required: true    },
    tipo: {        type: String,        required: true    },
    sector: {        type: String,        required: true    },
    area: {        type: String,        required: true    },

    usuarionew	: { type : String },      usuarioup	: { type : String },
    ubicacion: {        type: String  },
    autor: {        type: String  },
    presenta: {        type: String  }
  
}, {
    timestamps: true
});
 
module.exports = mongoose.model('Reglamento', ReglamentoSchema);