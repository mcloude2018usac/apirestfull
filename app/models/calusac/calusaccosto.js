

var mongoose =require("mongoose");
var CalusaccostoSchema 		=	new  mongoose.Schema({
    tipo  		: { type : String, required : true },
    nombre   		: { type : String},
    costo  		: { type : String},
    codigo  		: { type : String},
    estado	: { type : String, required : true }
    ,usuarionew	: { type : String },      usuarioup	: { type : String }
   
    }, {
    timestamps: true
    });



module.exports = mongoose.model('Calusaccosto', CalusaccostoSchema);