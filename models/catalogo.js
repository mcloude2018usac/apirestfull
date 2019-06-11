var mongoose =require("mongoose");
    var CatalogoSchema 		=	new  mongoose.Schema({
        tipo   		: { type : String, required : true },
        nombre   		: { type : String},
        fecha   		: { type : Date},
        foto 	: { type : String },
        estado	: { type : String, required : true }
        ,usuarionew	: { type : String },      usuarioup	: { type : String }
       
        }, {
        timestamps: true
        });



module.exports = mongoose.model('Catalogo', CatalogoSchema);

