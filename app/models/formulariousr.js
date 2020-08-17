 var mongoose =require("mongoose");
 var formulariousrSchema 		=	new  mongoose.Schema({
  idempresa		: { type : String, required : true },  
 // idpapa		: { type : String, required : true,ref:'' },  
  nombre		: { type : String, required : true },  
  usuario		: { type : String, required : true },  
  idusuario		: { type : String, required : true  },  
  estado		: { type : String, required : true },  
  usuarionew		: { type : String },  
  usuarioup		: { type : String },  
    }, {
    timestamps: true
    }); 
module.exports = mongoose.model('formulariousr', formulariousrSchema);
