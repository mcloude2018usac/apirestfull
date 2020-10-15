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
 idventa: { type : String },  

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

 p1: { type : Number, required : true }, 
 p2: { type : Number, required : true }, 
 p3: { type : Number, required : true }, 
 p4: { type : Number, required : true }, 
 p5: { type : Number, required : true }, 

 deliveryasignado:{ type : String ,ref:'User'},  
 userasignado:{        type: String},
 comentario1:{        type: String},
 comentario2:{        type: String},
 comentario3:{        type: String},
 comentario4:{        type: String},
 comentario5:{        type: String},
 comentario6:{        type: String},
 comentario7:{        type: String},
 comentario8:{        type: String},
 comentario9:{        type: String},
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
module.exports = mongoose.model('Orden_compra', Orden_compraSchema);
