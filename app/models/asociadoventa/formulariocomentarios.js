 var mongoose =require("mongoose");
 var formulariocomentariosSchema 		=	new  mongoose.Schema({
  idempresa		: { type : String, required : true },  
  idpapa		: { type : String, required : true,ref:'' },  
  nombre		: { type : String, required : true },  
    }, {
    timestamps: true
    }); 
module.exports = mongoose.model('formulariocomentarios', formulariocomentariosSchema);
