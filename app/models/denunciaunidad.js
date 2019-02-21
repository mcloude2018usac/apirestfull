var mongoose =require("mongoose");
    var DenunciaunidadSchema 		=	new  mongoose.Schema({
        categoria	: { type : String, required : true },
        unidad	: { type : Number, required : true },
        usuarionew	: { type : String },      usuarioup	: { type : String }
        }, {
        timestamps: true
        });

      

module.exports = mongoose.model('Denunciaunidad', DenunciaunidadSchema);


