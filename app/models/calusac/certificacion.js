var mongoose =require("mongoose");
var certficacioncalusacSchema = new mongoose.Schema({
    correlativo:{        type: String},
    cui_pasaporte:{        type: String},
    nombre_completo: {     type: String    },
    correo_electronico: {     type: String    },
    fecha_emision:{  type: Date  },

    verificador: {     type: String    },
    contador:{     type: Number    },
    limite:{     type: Number    },
    tipo: {     type: String    },
    estado: {     type: String    },
    usuarionew	: { type : String },      usuarioup	: { type : String }
   
 
}, {
    timestamps: true
});

/* Export model for application usage */
module.exports = mongoose.model('certficacioncalusacs', certficacioncalusacSchema);
