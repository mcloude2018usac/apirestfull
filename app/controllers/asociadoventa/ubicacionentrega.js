 var mongoose =require("mongoose");
 var UbicacionentregaSchema 		=	new  mongoose.Schema({
  idempresa		: { type : String, required : true },  
  municipio		: { type : String, required : true },  
  departamento		: { type : String, required : true },  
  nombre		: { type : String, required : true },  
  descripcion		: { type : String },  
  costo		: { type : Number },  
  estado		: { type : String, required : true },  
  usuarionew		: { type : String },  
  usuarioup		: { type : String },  
    }, {
    timestamps: true
    }); 
module.exports = mongoose.model('Ubicacionentrega', UbicacionentregaSchema);
