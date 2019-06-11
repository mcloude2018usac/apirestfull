var mongoose =require("mongoose");

    var SuscriptorSchema 		=	new  mongoose.Schema({
        nombre   		: { type : String, required : true },
        apellido   		: { type : String, required : true },
        direccion   		: { type : String, required : true },
        nodpi   		: { type : String},
        email   : { type : String, required : true, max : 50 },
        usuarionew	: { type : String },      usuarioup	: { type : String },
        date 		: { type: Date, default: Date.now }}, {
            timestamps: true
        });



module.exports = mongoose.model('Suscriptor', SuscriptorSchema);

