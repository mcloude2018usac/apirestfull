 var mongoose =require("mongoose");
 var frmactividadSchema 		=	new  mongoose.Schema({
  idempresa		: { type : String, required : true },  
  idpapa		: { type : String, required : true,ref:'' },  
  orden		: { type : Number, required : true },  
  actor		:{    id	: { type : String, required : true },   nombre	: { type : String, required : true }        },
  clase		: { type : String, required : true },  
  nombre		: { type : String, required : true },  
  tipo		: { type : String, required : true },  
  etapa		: { type : String, required : true },  
  conector		: { type : String, required : true },  
  tiempomin		: { type : String, required : true },  
  tiempomax		: { type : String, required : true },  
  camposlectura		: { type : String, required : true },  
  camposmodificables		: { type : String, required : true },  
  camposimprime		: { type : String, required : true },  
  estado		: { type : String, required : true },  
  usuarionew		: { type : String },  
  usuarioup		: { type : String },  
    }, {
    timestamps: true
    }); 
module.exports = mongoose.model('frmactividad', frmactividadSchema);
