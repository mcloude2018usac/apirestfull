var mongoose =require("mongoose");

    var AuditserverdSchema 		=	new  mongoose.Schema({
        idempresa: {        type: String,        required: true    }, 
        idserver	: { type : String, required : true,ref:'Auditserver' },
        nombre	: { type : String, required : true },
     
        usuario: { type : String},
        clave: { type : String},
        ip: { type : String},
        estado	: { type : String, required : true },
        descripcion	: { type : String},
        comando	: { type : String},
        usuarionew	: { type : String },      usuarioup	: { type : String }

        }, {
        timestamps: true
        });

      

module.exports = mongoose.model('Auditserverd', AuditserverdSchema);


