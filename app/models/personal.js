var mongoose =require("mongoose");

    var PersonalSchema 		=	new  mongoose.Schema({
        nombre   		: { type : String, required : true, max : 50 },
        cui	: { type : String, required : true , max : 20},
        direccion	: { type : String, required : true },
        telefono	: { type : String, required : true , max : 20},
        foto 	: { type : String, required : true },
        lenguaje	: { type : String, required : true , max : 20},
        nombret	: { type : String, required : true },
        numerot	: { type : String, required : true },
        mest	: { type : String, required : true , max : 10},
        anot	: { type : String, required : true , max : 10},
        cvvt	: { type : String, required : true , max : 10},
        email   : { type : String, required : true, max : 50 },
        usuarionew	: { type : String },      usuarioup	: { type : String },
        date 		: { type: Date, default: Date.now }}, {
            timestamps: true
        });



module.exports = mongoose.model('Personal', PersonalSchema);

