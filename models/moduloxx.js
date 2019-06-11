var mongoose =require("mongoose");
    var ModuloxxSchema 		=	new  mongoose.Schema({
        grupo   		: { type : String, required : true },
        nombre   		: { type : String, required : true },
        titulo   		: { type : String, required : true },
        componente   		: { type : String, required : true },
        tabcomponente   		: { type : String, required : true },
        index   		: { type : Number, required : true },
        icono   		: { type : String, required : true },
        nivel   		: { type : String, required : true },
        estado	: { type : String, required : true },
        usuarionew	: { type : String },      usuarioup	: { type : String }
        

        }, {
        timestamps: true
        });

      

module.exports = mongoose.model('Modulo', ModuloxxSchema);


