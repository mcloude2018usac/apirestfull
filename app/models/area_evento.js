var mongoose =require("mongoose");
var Area_eventoSchema = new mongoose.Schema({

   idtipoevento   		: {    id	: { type : String, required : true },   nombre	: { type : String, required : true }  ,   codigo	: { type : String, required : true }      },
  
    nombre: {
        type: String,
        required: true
    }
   
}, {
    timestamps: true
});
 

/* Export model for application usage */
module.exports = mongoose.model('Area_evento', Area_eventoSchema);
