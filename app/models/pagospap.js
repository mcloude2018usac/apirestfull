var mongoose =require("mongoose");
    var PagospapSchema 		=	new  mongoose.Schema({
        ordenpago  		: { type : Number, required : true },
 carne  		: { type : String, required : true },
        nombre   		: { type : String},
       
       rubro  		: { type : String},
valor  		: { type : Number},
        fecha		: { type : String},
        noboleta  		: { type : Number, required : true },
        ua		: { type : String},
        pagado  		: { type : Number, required : true }
        }, {
        timestamps: true
        });



module.exports = mongoose.model('Pagospap', PagospapSchema);

