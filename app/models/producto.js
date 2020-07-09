 var mongoose =require("mongoose");
 var ProductoSchema 		=	new  mongoose.Schema({
  idempresa		: { type : String, required : true },  
  idpapa		: { type : String, required : true, ref:'Asociado' },  
  nombre		: { type : String, required : true },  
  descripcion		: { type : String },  
  precio		: { type : Number, required : true },  
  unidad		: { type : String, required : true },  
  xunidad		: { type : String, required : true },  
  categoria		: { type : String, required : true },  
  aplicafoto		: { type : String },  
  estado		: { type : String, required : true },  
  usuarionew		: { type : String },  
  usuarioup		: { type : String },  
    }, {
    timestamps: true
    }); 
module.exports = mongoose.model('Producto', ProductoSchema);
