 var mongoose =require("mongoose");
 var CategoriaSchema 		=	new  mongoose.Schema({
  idempresa		: { type : String, required : true },  
  idpapa		: { type : String, required : true,ref:'Asociado' },  
  nombre		: { type : String, required : true },  
  descripcion		: { type : String },  
  foto		: { type : String },  
  estado		: { type : String },  
  usuarionew		: { type : String },  
  usuarioup		: { type : String },  
    }, {
    timestamps: true
    }); 
module.exports = mongoose.model('Categoria', CategoriaSchema);
