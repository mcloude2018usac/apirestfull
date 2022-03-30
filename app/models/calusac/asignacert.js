var mongoose =require("mongoose");
var AsignacertSchema = new mongoose.Schema({
      
   identificador: {
        type: String,
        required: true
    },
    identificador2: {
        type: String
      
    },
    ididioma: {
        type: String,
        required: true,ref:'Unidadidioma3'
    },
    idnivel:   [{ id:String, nombre:String,codigo:String,fecha:String,nota:String}   ],
    
    nombre: {      type: String,     required: true  },
    idestudiante: {
        type: String,
        required: true
    },
    correo: {      type: String,     required: true  },
    telefono: {      type: String,     required: true  },
    idinterno: {
        type: String,
        required: true
    },
    verificador:{        type: String},
    noorden:{        type: String},
    estadopago:{        type: String},
    monto:{        type: String},
    foto:{        type: String},
    fechasiif:{        type: String},
    rubro:{        type: String},
    ano:{        type: String},
    llave:{        type: String},
    estadooperador:{        type: String},
    userasignado:{        type: String},
    userasignadoemail:{        type: String},
    userejecutaemail:{        type: String},
    ultrechazo:{        type: String},
    date 		: { type: Date, default: Date.now }
    ,usuarionew	: { type : String },      usuarioup	: { type : String },tipoasignacion	: { type : String }
 
 
}, {
    timestamps: true
});
 

/* Export model for application usage */
module.exports = mongoose.model('Asignacert', AsignacertSchema);
