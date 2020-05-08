var mongoose =require("mongoose");
var Calusac_exoneradoSchema = new mongoose.Schema({
  
    ordenpago: {        type: String,        required: true    },

    descripcion:{        type: String},
 
    cui:{        type: String},
    correo:{        type: String}
}, {
    timestamps: true
});

/* Export model for application usage */
module.exports = mongoose.model('Calusac_exonerado', Calusac_exoneradoSchema);
