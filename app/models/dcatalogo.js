var mongoose =require("mongoose");
    var DcatalogoSchema 		=	new  mongoose.Schema({
        idcatalogo  		: { type : String, required : true },
        nombre   		: { type : String},
        fecha   		: { type : Date},
        foto 	: { type : String },
        estado	: { type : String, required : true }
       
        }, {
        timestamps: true
        });



module.exports = mongoose.model('Dcatalogo', DcatalogoSchema);

