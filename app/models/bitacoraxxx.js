var mongoose =require("mongoose");
var BitacoraxxxSchema = new mongoose.Schema({
 

    accion: {
        type: String,
        required: true
    },
   
    texto: {
        type: String
    },
    doc: {
        type: String
    },
    conecta: {
        type: String
    },
  
}, {
    timestamps: true
});
 

/* Export model for application usage */
module.exports = mongoose.model('Bitacoraxxx', BitacoraxxxSchema);
