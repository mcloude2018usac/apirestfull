 var mongoose =require("mongoose");
 var frmtareasprogramadasfotosSchema 		=	new  mongoose.Schema({
  idempresa		: { type : String, required : true },  
  idpapa		: { type : String, required : true,ref:'' },  
  tipo		: { type : String, required : true },  
  nombre		: { type : String, required : true },  
  descripcion		: { type : String, required : true },  
  foto		: { type : String, required : true },  
  geoposicion		: { type : String },  
    }, {
    timestamps: true
    }); 
module.exports = mongoose.model('frmtareasprogramadasfotos', frmtareasprogramadasfotosSchema);
