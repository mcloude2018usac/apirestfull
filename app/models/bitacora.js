var mongoose =require("mongoose");
var BitacoraSchema = new mongoose.Schema({
 
    email: {
        type: String,
        lowercase: true
    },
    permiso: {
        type: String,
        required: true
    },
    accion: {
        type: String,
        required: true
    },
    idempresa: {
        type: String
    },
    date 		: { type: Date, default: Date.now }
}, {
    timestamps: true
});
 

/* Export model for application usage */
module.exports = mongoose.model('Bitacora', BitacoraSchema);
