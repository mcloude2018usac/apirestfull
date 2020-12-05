 var mongoose =require("mongoose");
 var frmtareasprogramadasserviciosSchema 		=	new  mongoose.Schema({
  idempresa		: { type : String, required : true },  
  idpapa		: { type : String, required : true,ref:'5f81d95fc07d6532900465a4' },  
  tipo		: { type : String, required : true },  
  nombre		: { type : String, required : true },  
  descripcion		: { type : String, required : true },  
  tiempo		: { type : Number}, 
  idmulta		: { type : String}, 
  idempresita: { type : String}, 
  idcontrato: { type : String}, 
  fechamulta:{ type : String}, 
  periodomulta:{ type : String}, 
  proyectotxt		: { type : String}, 
  proyectotxttiempo		: { type : Number}, 
  idinspector		: { type : String},
  inspector		: { type : String},
  correotipo		: { type : String},
  idinspector2		: { type : String},
  idsupervisor		: { type : String},
  correos		: { type : String}, 
  empresatxt		: { type : String}, 
  foto		: { type : String, required : true },  
  estado		: { type : String, required : true }, 
  tipomulta		: { type : String, required : true },   
  empresatxttiempo:{ type : Number}, 
  monto		: { type : String, required : true },  
  geoposicion		: { type : String },  
    }, {
    timestamps: true
    }); 
module.exports = mongoose.model('frmtareasprogramadasservicios', frmtareasprogramadasserviciosSchema);
