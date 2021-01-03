 var mongoose =require("mongoose");
 var dispositivoSchema 		=	new  mongoose.Schema({
  idempresa		: { type : String, required : true },  
 idpapa		: { type : String, required : true,ref:'' },  
  idasociado		: { type : String },  
  nombre		: { type : String, required : true },  
  codigo		: { type : String, required : true },  
  identificador		: { type : String, required : true },  
  idtarifa		:  {    id	: { type : String, required : true , ref: 'Tarifa'},   nombre	: { type : String, required : true }        }, 
  ruta		: { type : String, required : true },  
  estado		: { type : String, required : true },  
    }, {
    timestamps: true
    }); 
module.exports = mongoose.model('dispositivo', dispositivoSchema);
