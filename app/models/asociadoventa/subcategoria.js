 var mongoose =require("mongoose");
 var SubcategoriaSchema 		=	new  mongoose.Schema({
  idempresa		: { type : String, required : true },  
  idpapa		: { type : String, required : true,ref:'' },  
  idllave0		: { type : String },  
  nombre		: { type : String, required : true },  
  descripcion		: { type : String },  
  estado		: { type : String, required : true },  
  usuarionew		: { type : String },  
  usuarioup		: { type : String },  
    }, {
    timestamps: true
    }); 
module.exports = mongoose.model('Subcategoria', SubcategoriaSchema);
