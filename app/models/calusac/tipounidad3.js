var mongoose =require("mongoose");

    var Tipounidad3Schema 		=	new  mongoose.Schema({
        nombre	: { type : String, required : true },
        codigo	: { type : Number, required : true },
        iddepartamento:	{ 
            id	: { type : String, required : true },
            nombre	: { type : String, required : true }
        },
        abreviatura: { type : String},
        estado	: { type : String, required : true },
        msg: { type : String},
        correlativocarne	: { type : String, required : true },
        usuarionew	: { type : String },      usuarioup	: { type : String }

        }, {
        timestamps: true
        });

      

module.exports = mongoose.model('Tipounidad3', Tipounidad3Schema);


