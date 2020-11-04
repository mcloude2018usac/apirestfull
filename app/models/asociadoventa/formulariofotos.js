 var mongoose =require("mongoose");
 var formulariofotosSchema 		=	new  mongoose.Schema({
  idempresa		: { type : String, required : true },  
  idpapa		: { type : String, required : true,ref:'' },  
  nombre		: { type : String, required : true },  
  foto		: { type : String, required : true },  
    }, {
    timestamps: true
    }); 
module.exports = mongoose.model('formulariofotos', formulariofotosSchema);
