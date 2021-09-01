

var mongoose =require("mongoose");
var CalusacestexoneraSchema 		=	new  mongoose.Schema({
    carnet  		: { type : String },
    cui   		: { type : String, required : true },
    nombre  		: { type : String },
    correo  		: { type : String }
});



module.exports = mongoose.model('Calusacestexonera', CalusacestexoneraSchema);