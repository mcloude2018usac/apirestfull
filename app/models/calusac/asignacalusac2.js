var mongoose =require("mongoose");
var Asignacalusac2Schema = new mongoose.Schema({
  
    idasigna: {        type: String,        required: true    },

    foto1:{        type: String},
 
    foto2:{        type: String},
    foto3:{        type: String},
    foto4:{        type: String},
     foto5:{        type: String},
    
 
}, {
    timestamps: true
});

/* Export model for application usage */
module.exports = mongoose.model('Asignacalusac2', Asignacalusac2Schema);
