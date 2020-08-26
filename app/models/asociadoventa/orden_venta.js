var mongoose =require("mongoose");
var Orden_ventaSchema 		=	new  mongoose.Schema({
 idempresa		: { type : String, required : true },  
 idcompra		: { type : String }, 
 nombre		: { type : String, required : true },  
 direccion		: { type : String },  
 telefono		: { type : String }, 
 
 total		: { type : Number, required : true },  
 tipopago		: { type : String },  
 idusuario		: { type : String ,ref:'User' },  
 estado: { type : String },  
 efectivo: { type : String }, 


 direccion2a		: { type : String }, 
 nombre2		: { type : String }, 
 direccion2		: { type : String }, 
 nit		: { type : String }, 
 totalenvio		: { type : Number }, 
 totalproductos		: { type : Number }, 
 departamento: { type : String },  
 municipio: { type : String },  
 zona: { type : String },  
 pagaracambio: { type : String }, 



 firma: { type : String }, 
 dproductos:[{
    id		: { type : String, required : true },
    idproveedor		: { type : String, required : true },
    name		: { type : String, required : true }, 
    price: { type : Number, required : true }, 
    amount: { type : Number, required : true }, 
    subtotal: { type : Number, required : true },
   

 }]


 

   }, {
   timestamps: true
   }); 
module.exports = mongoose.model('Orden_venta', Orden_ventaSchema);
