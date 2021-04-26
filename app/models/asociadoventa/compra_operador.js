var mongoose =require("mongoose");

    var CompraoperadorSchema 		=	new  mongoose.Schema({
        idempresa	: { type : String, required : true },
        idusuario	: { type : String, required : true },
        asignada	: { type : Number, required : true },
        ejecutada	: { type : Number, required : true },
        encola	: { type : Number, required : true }

        }, {
        timestamps: true
        });

      

module.exports = mongoose.model('Compraoperador', CompraoperadorSchema);


