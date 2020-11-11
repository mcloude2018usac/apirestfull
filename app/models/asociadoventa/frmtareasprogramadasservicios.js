 var mongoose =require("mongoose");
 var frmtareasprogramadasserviciosSchema 		=	new  mongoose.Schema({
  idempresa		: { type : String, required : true },  
  idpapa		: { type : String, required : true,ref:'' },  
  tipo		: { type : String, required : true },  
  nombre		: { type : String, required : true },  
  descripcion		: { type : String, required : true },  
  tiempo		: { type : Number}, 
  idmulta		: { type : String}, 
  idempresita: { type : String}, 
  proyectotxt		: { type : String}, 
  proyectotxttiempo		: { type : Number}, 
  correos		: { type : String}, 
  empresatxt		: { type : String}, 
  foto		: { type : String, required : true },  
  estado		: { type : String, required : true }, 
  tipomulta		: { type : String, required : true },   
  monto		: { type : String, required : true },  
  geoposicion		: { type : String },  
    }, {
    timestamps: true
    }); 
module.exports = mongoose.model('frmtareasprogramadasservicios', frmtareasprogramadasserviciosSchema);
