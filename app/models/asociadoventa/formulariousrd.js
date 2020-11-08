 var mongoose =require("mongoose");
 var formulariousrdSchema 		=	new  mongoose.Schema({
  idempresa		: { type : String, required : true },  
 idpapa		: { type : String, required : true,ref:'formulariousr' },  
 idusuario		: { type : String },  
  nombre		: { type : String },  
  orden		: { type : Number, required : true },  
  formulario		: { type : String, required : true }, 
  tipo	: { type : String, required : true },  
  idformulario		: { type : String  , ref:'Frmmovil' },  
  consulta		: { type : String },  
  eliminacion		: { type : String },  
  creacion		: { type : String },  
  actualizacion		: { type : String },  
  filtro		: { type : String },  
  reporte		: { type : String },  
  estado		: { type : String, required : true },  
  verregistros	: { type : String },  
  usuarionew		: { type : String },  
  usuarioup		: { type : String },  
    }, {
    timestamps: true
    }); 
module.exports = mongoose.model('formulariousrd', formulariousrdSchema);
