var mongoose =require("mongoose");
    var FrmmovilSchema 		=	new  mongoose.Schema({
        idempresa		: { type : String, required : true },   
        tipo	: { type : String, required : true }, 
        tipo2	: { type : String, required : true }, 
        categoria	: { type : String, required : true },
        nombre   		: { type : String, required : true },
        nombre2   		: { type : String},
        foto 	: { type : String},
        estado	: { type : String, required : true },
        publico	: { type : String},
        geoposicion:  { type : String },
        ordenregistro:  { type : String },
        iniciocorrelativo:  { type : Number },
        ejecuta:  { type : String },
        ejecutainicio:  { type : String },
        descripciong		: { type : String },  
        ejecutaactualiza:  { type : String },
        ejecutaelimina:  { type : String },
      //  idformdetalle:  	{    id	: { type : String },   nombre	: { type : String }        },
        usuarionew	: { type : String },      usuarioup	: { type : String }}, {
        timestamps: true
        });



module.exports = mongoose.model('Frmmovil', FrmmovilSchema);