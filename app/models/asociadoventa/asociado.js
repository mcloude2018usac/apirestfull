 var mongoose =require("mongoose");
 var AsociadoSchema 		=	new  mongoose.Schema({
  idempresa		: { type : String, required : true },  
  nombre		: { type : String, required : true },  
  direccion		: { type : String, required : true },  
  telefono		: { type : String, required : true },  
  correo		: { type : String, required : true },  
  ubicacion		: { type : String, required : true },  
  horario		: { type : String, required : true },  
  nit		: { type : String, required : true },  
  nombrecomercial		: { type : String, required : true },  
  direccioncomercial		: { type : String, required : true },  
  estado		: { type : String, required : true },  
  usuarionew		: { type : String },  
  usuarioup		: { type : String},  
    }, {
    timestamps: true
    }); 
module.exports = mongoose.model('Asociado', AsociadoSchema);