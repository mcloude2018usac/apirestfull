var mongoose =require("mongoose");

    var AuditserverdhisSchema 		=	new  mongoose.Schema({
        idempresa: {        type: String,        required: true    }, 
        idserver	: { type : String, required : true,ref:'Auditserver' },
        idserverd	: { type : String, required : true,ref:'Auditserverd' },
        resultado	: { type : String, required : true },
     
        usuarionew	: { type : String },      usuarioup	: { type : String }

        }, {
        timestamps: true
        });

      

module.exports = mongoose.model('Auditserverdhis', AuditserverdhisSchema);


