var mongoose =require("mongoose");
    var DenunciaunidadSchema 		=	new  mongoose.Schema({
        categoria	: { type : String, required : true , ref:'Dcatalogo' },
        unidad	: { type : String, required : true , ref:'Catalogo' },
        nombre	: { type : String, required : true },
        usuarionew	: { type : String },      usuarioup	: { type : String }
        }, {
        timestamps: true
        });

      

module.exports = mongoose.model('Denunciaunidad', DenunciaunidadSchema);


