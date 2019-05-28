var mongoose =require("mongoose");
    var DenunciaunidadSchema 		=	new  mongoose.Schema({
        categoria	:  [{ _id:String, nombre:String}   ]
                 ,
        unidad	: { type : String, required : true , ref:'Catalogo' },
        nombre	: { type : String, required : true },
        estado	: { type : String },
        jefeop	: { type : String, required : true , ref:'User' },
        operadores	:  [{ _id:String, nombre:String}   ],
        usuarionew	: { type : String },      usuarioup	: { type : String }
        }, {
        timestamps: true
        });

      

module.exports = mongoose.model('Denunciaunidad', DenunciaunidadSchema);


