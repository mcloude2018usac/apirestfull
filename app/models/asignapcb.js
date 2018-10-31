var mongoose =require("mongoose");
var AsignapcbSchema = new mongoose.Schema({
    idtipounidad :  		{    id	: { type : String, required : true },   nombre	: { type : String, required : true }        },
    idunidadacademica   		: {    id	: { type : String, required : true },   nombre	: { type : String, required : true }     ,   codigo	: { type : String, required : true }       },
    idperiodo   		: {    id	: { type : String, required : true },   nombre	: { type : String, required : true }        },
      
    no_orientacion: {
        type: String,
        required: true
    },
    nombre: {
        type: String,
        required: true
    },
    idestudiante: {
        type: String,
        required: true
    },
    idinterno: {
        type: String,
        required: true
    },
    date 		: { type: Date, default: Date.now }
    ,usuarionew	: { type : String },      usuarioup	: { type : String }
}, {
    timestamps: true
});
 

/* Export model for application usage */
module.exports = mongoose.model('Asignapcb', AsignapcbSchema);
