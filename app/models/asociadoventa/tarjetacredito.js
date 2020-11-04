var mongoose =require("mongoose");
var tarjetacreditoSchema 		=	new  mongoose.Schema({
 idempresa		: { type : String, required : true },  
 idpapa		: { type : String, required : true,ref:'' },  
 tipo		: { type : String, required : true },  
 banco		: { type : String, required : true },  
 nombre		: { type : String, required : true },  
 n1		: { type : String, required : true },  
 n2		: { type : String, required : true },  
 n3		: { type : String, required : true },  
 n4		: { type : String, required : true },  
 mes		: { type : String, required : true },  
 ano		: { type : String, required : true },  
 cvc		: { type : String, required : true },  
 estado		: { type : String, required : true },  
 usuarionew		: { type : String },  
 usuarioup		: { type : String },  
   }, {
   timestamps: true
   }); 
module.exports = mongoose.model('tarjetacredito', tarjetacreditoSchema);
