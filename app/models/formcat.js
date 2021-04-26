var mongoose =require("mongoose");
    var FormcatSchema 		=	new  mongoose.Schema({
        idempresa  		: { type : String, required : true },
        idunidad  		: { type : String, required : true },
        nombre   		: { type : String, required : true},
        idunidad2  		: { type : String},
        usuarionew	: { type : String },      usuarioup	: { type : String }
       
        }, {
        timestamps: true
        });



module.exports = mongoose.model('Formcat', FormcatSchema);

