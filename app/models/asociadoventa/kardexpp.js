var mongoose =require("mongoose");

var kardexxrrsSchema 		=	new  mongoose.Schema({
    correlativo		: { type : String, required : true },  
 fecha		: { type : Date, required : true },  
 forma		: { type : String, required : true },  
 no		: { type : String, required : true },  
 
 codigo		: { type : String },  
 categoria		: { type : String},  
 descripcion		: { type : String},  
 unidad		: { type : String },  
 cantidad		: { type : String },  
 existencia		: { type : String },  
 prov		: { type : String },  
 entregadoa		: { type : String },  
 
 elaboradopor		: { type : String },  
 precio		: { type : String },  
 obs: { type : String},  


   }); 
module.exports = mongoose.model('kardexxrrs', kardexxrrsSchema);
