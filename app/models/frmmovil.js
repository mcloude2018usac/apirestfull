var mongoose =require("mongoose");
    var FrmmovilSchema 		=	new  mongoose.Schema({
        idempresa		: { type : String, required : true },    
        categoria	: { type : String, required : true,ref:'Formcat' },
        nombre   		: { type : String, required : true },
        foto 	: { type : String},
        estado	: { type : String, required : true },
        usuarionew	: { type : String },      usuarioup	: { type : String }}, {
        timestamps: true
        });



module.exports = mongoose.model('Frmmovil', FrmmovilSchema);