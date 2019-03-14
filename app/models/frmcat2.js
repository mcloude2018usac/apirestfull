var mongoose =require("mongoose");
    var Formcat2Schema 		=	new  mongoose.Schema({
        idformulario  		: { type : String, required : true },
        idunidad  		: { type : String, required : true },
        nombre   		: { type : String, required : true},
        usuarionew	: { type : String },      usuarioup	: { type : String }
       
        }, {
        timestamps: true
        });



module.exports = mongoose.model('Formcat2', Formcat2Schema);

