 var mongoose =require("mongoose");
 var formulariotareasdocSchema 		=	new  mongoose.Schema({
  idempresa		: { type : String, required : true },  
  idpapa		: { type : String, required : true,ref:'' },  
  orden		: { type : Number, required : true },  
  nombre		: { type : String, required : true },  
  fecha		: { type : Date, required : true },  
  foto		: { type : String, required : true },  
  estado		: { type : String, required : true },  
    }, {
    timestamps: true
    }); 
module.exports = mongoose.model('formulariotareasdoc', formulariotareasdocSchema);
