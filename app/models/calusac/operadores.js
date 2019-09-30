var mongoose =require("mongoose");

    var OperadoresSchema 		=	new  mongoose.Schema({
        email	: { type : String, required : true },
        asignada	: { type : Number, required : true },
        ejecutada	: { type : Number, required : true },
        encola	: { type : Number, required : true }

        }, {
        timestamps: true
        });

      

module.exports = mongoose.model('Operadores', OperadoresSchema);


