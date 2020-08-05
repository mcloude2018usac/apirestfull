var mongoose =require("mongoose");
var Aread_eventoSchema = new mongoose.Schema({
    idempresa: {        type: String,      required: true     },
   idtipoevento   		: {     type: String,      required: true  },
   idarea   		: {     type: String,      required: true  },

    nombre: {        type: String,        required: true    },
    plataforma: {        type: String,        required: true    },
    url: {        type: String,        required: true    },
    capacidad: {        type: Number,        required: true    },
    catedratico: {     type: String,      required: true  },
    movil: {     type: String,      required: true  },
    email: {     type: String,      required: true  },
    fecha: {     type: String,      required: true  },

    clave: {     type: String,      required: true  },
 
    usuarionew	: { type : String },      usuarioup	: { type : String }
   
}, {
    timestamps: true
});
 

/* Export model for application usage */
module.exports = mongoose.model('Aread_evento', Aread_eventoSchema);
