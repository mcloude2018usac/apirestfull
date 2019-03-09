var mongoose =require("mongoose");
    var CatusuarioSchema 		=	new  mongoose.Schema({
        idcategoria	: { type : String, required : true , ref:'Formcat' },
        idusuario	: { type : String, required : true , ref:'User' },
        idformulario	: { type : String, required : true , ref:'Frmmovil' },
        nombre	: { type : String, required : true },
        usuarionew	: { type : String },      usuarioup	: { type : String }
        }, {
        timestamps: true
        });

      

module.exports = mongoose.model('Catusuario', CatusuarioSchema);


