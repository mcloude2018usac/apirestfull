 var mongoose =require("mongoose");
 var frmtareasprogramadasSchema 		=	new  mongoose.Schema({
  idempresa		: { type : String, required : true },  
 // idpapa		: { type : String, required : true,ref:'' },  
  orden		: { type : Number, required : true },  
  nombre		: { type : String, required : true },  
  estado		: { type : String, required : true },  
    }, {
    timestamps: true
    }); 
module.exports = mongoose.model('frmtareasprogramadas', frmtareasprogramadasSchema);
