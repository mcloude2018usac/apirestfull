var mongoose =require("mongoose");
var frmactividadcamposdSchema 		=	new  mongoose.Schema({
 idempresa		: { type : String, required : true },  
 idpapa		: { type : String, required : true,ref:'' },  
 orden		: { type : Number, required : true },  
 campo		:{    id	: { type : String},   nombre	: { type : String}        },
 
 nombre		: { type : String, required : true },  
  
 camposvisible		: { id	: { type : String },   nombre	: { type : String }   },
 camposmodificables		:  { id	: { type : String },   nombre	: { type : String }   },
 camposlectura		: { id	: { type : String },   nombre	: { type : String }   },
 camposimprime		:  { id	: { type : String },   nombre	: { type : String }   },
 estado		: { type : String, required : true },  
 usuarionew		: { type : String },  
 usuarioup		: { type : String },  
   }, {
   timestamps: true
   }); 
module.exports = mongoose.model('frmactividadcamposd', frmactividadcamposdSchema);
