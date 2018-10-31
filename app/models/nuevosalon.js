var mongoose =require("mongoose");

    var NuevosalonSchema 		=	new  mongoose.Schema({
        nombre   		: { type : String, required : true },
        estado	: { type : String, required : true },
        correo	: { type : String}
        ,usuarionew	: { type : String },      usuarioup	: { type : String }
        }, {
        timestamps: true
        });

      

module.exports = mongoose.model('Nuevosalon', NuevosalonSchema);


