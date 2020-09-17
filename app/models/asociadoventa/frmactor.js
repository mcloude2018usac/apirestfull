 var mongoose =require("mongoose");
 var frmactorSchema 		=	new  mongoose.Schema({
  idempresa		: { type : String, required : true },  
 idpapa		: { type : String, required : true,ref:'Frmmovil' },  
  nombre		: { type : String, required : true },  

  estado		: { type : String, required : true },  
  usuarionew		: { type : String },  
  usuarioup		: { type : String },  
    }, {
    timestamps: true
    }); 
module.exports = mongoose.model('frmactor', frmactorSchema);
