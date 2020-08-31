 var mongoose =require("mongoose");
 var SucursalSchema 		=	new  mongoose.Schema({
  idempresa		: { type : String, required : true },  
  idpapa		: { type : String, required : true,ref:'Asociado' },  
  nombre		: { type : String, required : true },  
  direccion		: { type : String, required : true },  
  ubicacion		: { type : String, required : true },  
  email		: { type : String, required : true },  
  telefonos		: { type : String, required : true },  
  horario		: { type : String, required : true },  
  nit		: { type : String, required : true },  
  razon		: { type : String, required : true },  
  foto0		: { type : String },  
  logo1		: { type : String, required : true },  
  estado		: { type : String, required : true },  
    }, {
    timestamps: true
    }); 
module.exports = mongoose.model('Sucursal', SucursalSchema);
