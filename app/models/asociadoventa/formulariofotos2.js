var mongoose =require("mongoose");
var formulariofotos2Schema 		=	new  mongoose.Schema({
 idempresa		: { type : String, required : true },  
 idpapa		: { type : String, required : true,ref:'' },  
 nombre		: { type : String, required : true },  
 foto		: { type : String, required : true }
 ,usuarionew	: { type : String },      usuarioup	: { type : String },      actividad	: { type : String }
   }, {
   timestamps: true
   }); 
module.exports = mongoose.model('formulariofotos2', formulariofotos2Schema);
