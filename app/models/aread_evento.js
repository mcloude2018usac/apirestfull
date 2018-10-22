var mongoose =require("mongoose");
var Aread_eventoSchema = new mongoose.Schema({

   idtipoevento   		: {    id	: { type : String, required : true },   nombre	: { type : String, required : true }  ,   codigo	: { type : String, required : true }      },
   idarea   		: {    id	: { type : String, required : true },   nombre	: { type : String, required : true }   },

    nombre: {
        type: String,
        required: true
    },
    catedratico: {     type: String,      required: true  },
    dia: {     type: String,      required: true  },
    horario: {     type: String,      required: true  },
    edificio: {     type: String,      required: true  },
    salon: {     type: String,      required: true  }
   
}, {
    timestamps: true
});
 

/* Export model for application usage */
module.exports = mongoose.model('Aread_evento', Aread_eventoSchema);
