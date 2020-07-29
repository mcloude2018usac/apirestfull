 var mongoose =require("mongoose");
 var ProductoSchema 		=	new  mongoose.Schema({
  idempresa		: { type : String, required : true },  
  idpapa		: { type : String, required : true, ref:'Asociado' },  
  nombre		: { type : String, required : true },  
  descripcion		: { type : String },  
  precio		: { type : Number, required : true },  
  unidad		: { type : String },  
  xunidad		: { type : String },  
  categoria		: { type : String, required : true,ref:'Categoria' },  
  subcategoria		: { type : String, required : true,ref:'Subcategoria' },  
  foto1		: { type : String },  
  estado		: { type : String, required : true },  
  usuarionew		: { type : String },  
  usuarioup		: { type : String },  
  preciooferta		: { type : Number },  
  color	: { type : String },  
  talla:	 { type : String },  
  codigo: { type : String },
  foto2		: { type : String },  
  foto3		: { type : String }

    }, {
    timestamps: true
    }); 
module.exports = mongoose.model('Producto', ProductoSchema);
