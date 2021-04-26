var mongoose =require("mongoose");

var KardexcorreosproductoSchema 		=	new  mongoose.Schema({
 idempresa		: { type : String, required : true },  
 idproducto		: { type : String },  
 producto		: { type : String },  
 producton		: { type : String },  
 existencia		: { type : Number}


   }, {
   timestamps: true
   }); 
module.exports = mongoose.model('Kardexcorreosproducto', KardexcorreosproductoSchema);
