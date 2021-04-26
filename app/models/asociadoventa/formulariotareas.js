 var mongoose =require("mongoose");
 var formulariotareasSchema 		=	new  mongoose.Schema({
  idempresa		: { type : String, required : true },  
 idpapa		: { type : String, required : true,ref:'' },  
  nombre		: { type : String, required : true },  
  fechainicio		: { type : Date, required : true },  
  fechafinal		: { type : Date, required : true },  
  cantidadhoras		: { type : Number, required : true },  
  usuario		: { type : String, required : true },  
  idusuario		: { type : String, required : true },  
  avance		: { type : Number},  
horas:{lower:{ type : Number},upper:{ type : Number}} ,
  estado		: { type : String, required : true }
  ,usuarionew	: { type : String },      usuarioup	: { type : String },      actividad	: { type : String }
    }, {
    timestamps: true
    }); 
module.exports = mongoose.model('formulariotareas', formulariotareasSchema);
