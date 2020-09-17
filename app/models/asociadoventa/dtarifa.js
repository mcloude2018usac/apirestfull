 var mongoose =require("mongoose");
 var dtarifaSchema 		=	new  mongoose.Schema({
  idempresa		: { type : String, required : true },  
  idtarifa		: { type : String, required : true,ref:'' },  
  nombre		: { type : String, required : true },  
  horaini		: { type : Number, required : true },  
  horafin		: { type : Number, required : true },  
  monto		: { type : Number, required : true },  
  usuarionew		: { type : String },  
  usuarioup		: { type : String },  
  estado		: { type : String, required : true },  
    }, {
    timestamps: true
    }); 
module.exports = mongoose.model('dtarifa', dtarifaSchema);
