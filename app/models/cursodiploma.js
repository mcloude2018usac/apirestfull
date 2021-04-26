var mongoose =require("mongoose");
var CursosdiplomaSchema = new mongoose.Schema({


    curso: {    type: String,     required: true   },

    correo: {    type: String,     required: true   },
    nombreestudiante: {    type: String,     required: true   }




    ,usuarionew	: { type : String },      usuarioup	: { type : String }
   
}, {
    timestamps: true
});
 

/* Export model for application usage */
module.exports = mongoose.model('Cursosdiploma', CursosdiplomaSchema);
