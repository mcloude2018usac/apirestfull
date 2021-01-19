var mongoose =require("mongoose");

var KardexcorreosSchema 		=	new  mongoose.Schema({
 idempresa		: { type : String, required : true },  
 fecha		: { type : Date, required : true },  
 tipo		: { type : String, required : true },  
 accion		: { type : String, required : true },  
 
 proveedor		: { type : String },  
 nodoc		: { type : String},  
 iddocumento		: { type : String},  
 categoria		: { type : String },  
 producto		: { type : String },  
 idproducto		: { type : String },  
 producton		: { type : String },  
 obs		: { type : String },  
 tarjetasanuladas		: { type : String },  

 nodockardex		: { type : String},  
 estadoprint		: { type : String},  
 anulacion		: { type : String},  


 saldoanterior		: { type : Number},
 ingreso		: { type : Number},
 egreso		: { type : Number},
 saldoactual		: { type : Number},
 precio		: { type : Number},
 precioanterior	: { type : Number},
 total		: { type : Number},

   }, {
   timestamps: true
   }); 
module.exports = mongoose.model('Kardexcorreos', KardexcorreosSchema);
