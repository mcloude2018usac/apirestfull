var mongoose =require("mongoose");
    var TiposuscriptorSchema 		=	new  mongoose.Schema({
        nombre   		: { type : String},
        cobroparqueos	: { type : Boolean }
        ,usuarionew	: { type : String },      usuarioup	: { type : String }
       
        }, {
        timestamps: true
        });



module.exports = mongoose.model('Tiposuscriptor', TiposuscriptorSchema);

