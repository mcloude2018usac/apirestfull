 var mongoose =require("mongoose");
 var frmactorgrupoSchema 		=	new  mongoose.Schema({
  idempresa		: { type : String, required : true },  
  idpapa		: { type : String, required : true,ref:'' },  
  idpapa0		: { type : String, required : true,ref:'' },  
  nombre		: { type : String, required : true },  
  
  usuarios:[{
    email	: { type : String, required : true },
    nombre		: { type : String, required : true },
    correo	: { type : String},
   

 }],
  correousuarios		: { type : String, required : true },  
  nombreusuarios		: { type : String, required : true },  
  usuarionew		: { type : String },  
  usuarioup		: { type : String },  
  estado		: { type : String, required : true },  
    }, {
    timestamps: true
    }); 
module.exports = mongoose.model('frmactorgrupo', frmactorgrupoSchema);
