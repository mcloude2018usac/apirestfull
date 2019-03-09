var mongoose =require("mongoose");
    var FormcatSchema 		=	new  mongoose.Schema({
        idunidad  		: { type : String, required : true },
        nombre   		: { type : String, required : true},
        usuarionew	: { type : String },      usuarioup	: { type : String }
       
        }, {
        timestamps: true
        });



module.exports = mongoose.model('Formcat', FormcatSchema);

