var mongoose =require("mongoose");
    var PagospapSchema 		=	new  mongoose.Schema({
        ordenpago  		: { type : Number, required : true },
        dpi  		: { type : String, required : true },
        nombre   		: { type : String},
        apellido   		: { type : String},
        direccion   		: { type : String},
        email   		: { type : String},
        telefono   		: { type : String}
        ,usuarionew	: { type : String },      usuarioup	: { type : String }
       
        }, {
        timestamps: true
        });



module.exports = mongoose.model('Pagospap', PagospapSchema);

