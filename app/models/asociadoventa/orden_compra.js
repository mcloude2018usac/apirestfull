var mongoose =require("mongoose");
var Orden_compraSchema 		=	new  mongoose.Schema({
 idempresa		: { type : String, required : true },  
 nombre		: { type : String, required : true },  
 direccion		: { type : String },  
 telefono		: { type : String }, 
 total		: { type : Number, required : true },  
 tipopago		: { type : String },  
 idusuario		: { type : String ,ref:'User' },  
 estado: { type : String },  
 deliveryasignado:{ type : String ,ref:'User'},  
 dproductos:[{
    id		: { type : String, required : true },
    idproveedor		: { type : String, required : true },
    name		: { type : String, required : true }, 
    price: { type : Number, required : true }, 
    amount: { type : Number, required : true }, 
    subtotal: { type : Number, required : true }

 }]


 

   }, {
   timestamps: true
   }); 
module.exports = mongoose.model('Orden_compra', Orden_compraSchema);
