var mongoose =require("mongoose");
var frmactividadcamposdSchema 		=	new  mongoose.Schema({
 idempresa		: { type : String, required : true },  
 idpapa		: { type : String, required : true,ref:'' },  
 tipo		: { type : String, required : true },  
 orden		: { type : String},  

 nombre		: { type : String, required : true },  
  
 
 camposmodificables		:  { id	: { type : String },   nombre	: { type : String }   },
 
 camposimprime		:  { id	: { type : String },   nombre	: { type : String }   },
 estado		: { type : String, required : true },  
 usuarionew		: { type : String },  
 usuarioup		: { type : String },  
   }, {
   timestamps: true
   }); 
module.exports = mongoose.model('frmactividadcamposd', frmactividadcamposdSchema);
