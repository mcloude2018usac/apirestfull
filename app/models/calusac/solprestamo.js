

var mongoose =require("mongoose");
var SolprestamoSchema 		=	new  mongoose.Schema({
    idempresa  		: { type : String, required : true },
    tipo  		: { type : String, required : true },
    nombre   		: { type : String},
    cui  		: { type : String},
    monto  		: { type : String},
    plazo  		: { type : String},
    interes  		: { type : String},
    estado	: { type : String, required : true },
    requisito1  		: { type : String},
    requisito2  		: { type : String},
    requisito3  		: { type : String},
    requisito4  		: { type : String},
    requisito5  		: { type : String},
    requisito6  		: { type : String},
    requisito7  		: { type : String},
    requisito8  		: { type : String},
    requisito9  		: { type : String},
    requisito10  		: { type : String},
    usuarionew	: { type : String },      usuarioup	: { type : String }
   
    }, {
    timestamps: true
    });



module.exports = mongoose.model('Solprestamo', SolprestamoSchema);