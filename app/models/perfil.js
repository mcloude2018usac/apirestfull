var mongoose =require("mongoose");

    var PerfilSchema 		=	new  mongoose.Schema({
        idempresa		: { type : String, required : true },  
        nombre   		: { type : String, required : true },
        estado	: { type : String, required : true },
        unidad:  {    id	: { type : String, required : true , ref: 'Catalogo'},   nombre	: { type : String, required : true }        }
        ,usuarionew	: { type : String },      usuarioup	: { type : String }
        }, {
        timestamps: true
        });



module.exports = mongoose.model('Perfil', PerfilSchema);

