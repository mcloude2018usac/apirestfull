var mongoose =require("mongoose");

    var TipounidadSchema 		=	new  mongoose.Schema({
        nombre	: { type : String, required : true },
        codigo	: { type : Number, required : true },
        iddepartamento:	{ 
            id	: { type : String, required : true },
            nombre	: { type : String, required : true }
        },
        abreviatura: { type : String},
        estado	: { type : String, required : true },
        estado2	: { type : String, required : true },
        msg: { type : String},
        usuarionew	: { type : String },      usuarioup	: { type : String }

        }, {
        timestamps: true
        });

      

module.exports = mongoose.model('Tipounidad', TipounidadSchema);


