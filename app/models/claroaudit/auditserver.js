var mongoose =require("mongoose");

    var AuditserverSchema 		=	new  mongoose.Schema({
        idempresa: {        type: String,        required: true    }, 
        nombre	: { type : String, required : true },
        tipoconexion	: { type : String, required : true },
        marca: {        type: String,        required: true ,ref:'Formcat'   },
        modelo: {        type: String,        required: true ,ref:'Formcat'   },
        pais: {        type: String,        required: true ,ref:'Formcat'   },
        nodo: {        type: String,        required: true ,ref:'Formcat'   },
        usuario: { type : String},
        clave: { type : String},
        ip: { type : String},
        sidetalle	: { type : String, required : true },
        estado	: { type : String, required : true },
        descripcion	: { type : String},
          comando	: { type : String},
        usuarionew	: { type : String },      usuarioup	: { type : String }

        }, {
        timestamps: true
        });

      

module.exports = mongoose.model('Auditserver', AuditserverSchema);


