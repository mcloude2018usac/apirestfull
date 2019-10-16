var mongoose =require("mongoose");
    var TiposuscriptorSchema 		=	new  mongoose.Schema({
        idempresa   		: { type : String},
        nombre   		: { type : String},
        cobroparqueos	: { type : String},
        usuarionew	: { type : String },      usuarioup	: { type : String }
       
        }, {
        timestamps: true
        });



module.exports = mongoose.model('Tiposuscriptor', TiposuscriptorSchema);

