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

  imprimeorden		: { type : String },  
  finalizaorden   : { type : String },  
  eliminaorden    : { type : String },  
  trayectoriaorden    : { type : String },  
  documentacionorden    : { type : String },  
  pausarorden  : { type : String },  
  anularorden   : { type : String },  
  fotosorden: { type : String },  
  comentariosorden   : { type : String },  
  documentosorden   : { type : String },  
  tareasorden    : { type : String },  
  acciones    : { type : String },  

  activas    : { type : String },  
  cerradas    : { type : String },  
  ejecutadas    : { type : String },  
  filtrarorden    : { type : String },  

  estado		: { type : String, required : true },  
  verregistros	: { type : String },  
  usuarionew		: { type : String },  
  usuarioup		: { type : String },  
    }, {
    timestamps: true
    }); 
module.exports = mongoose.model('formulariousrd', formulariousrdSchema);
