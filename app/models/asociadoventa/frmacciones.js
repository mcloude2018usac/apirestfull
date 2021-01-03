 var mongoose =require("mongoose");
 var frmaccionesSchema 		=	new  mongoose.Schema({
  idempresa		: { type : String, required : true },  
  idpapa		: { type : String, required : true,ref:'' }, 
  idpapa0		: { type : String, required : true,ref:'' },  
  orden		: { type : Number, required : true },  
  tipo		: { type : String, required : true },  
  subtipo		: { type : String, required : true },  
  ejecuta		: { type : String },  
  ejecutainicio		: { type : String },  
  nombre		: { type : String, required : true },  
  estado		: { type : String, required : true },  
  actividadsiguiente		:  { id	: { type : String },   nombre	: { type : String }   },
  notificacionmsm		: { type : String, required : true },  
  notificacionemail		: { type : String, required : true },  
    }, {
    timestamps: true
    }); 
module.exports = mongoose.model('frmacciones', frmaccionesSchema);
