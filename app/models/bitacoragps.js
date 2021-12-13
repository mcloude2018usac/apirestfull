var mongoose =require("mongoose");
var BitacoragpsSchema = new mongoose.Schema({
 
    nombreusuario: {
        type: String,
        lowercase: true
    },
    idformulario: {
        type: String,
        required: true
    },
    noticket: {
        type: String,
        required: true
    },
    idticket: {
        type: String,
        required: true
    },
    idusuario: {
        type: String,
        required: true
    },
    idempresa: {
        type: String
    },
    lat: {
        type: Number
    },
    lon: {
        type: Number
    },
    date 		: { type: Date, default: Date.now }
}, {
    timestamps: true
});
 

/* Export model for application usage */
module.exports = mongoose.model('Bitacoragps', BitacoragpsSchema);
