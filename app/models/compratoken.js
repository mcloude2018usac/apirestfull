var mongoose =require("mongoose");
    var CompratokenSchema 		=	new  mongoose.Schema({
        idempresa   		: { type : String, required : true },
        trama   		: { type : String, required : true },
        estado   		: { type : Number},
        cobroservicio:{ type : String },
        tipo:{ type : String },
        usuarionew	: { type : String },      usuarioup	: { type : String }
       
        
        }, {
        timestamps: true
        });



module.exports = mongoose.model('Compratoken', CompratokenSchema);
