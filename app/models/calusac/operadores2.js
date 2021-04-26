var mongoose =require("mongoose");

    var Operadores2Schema 		=	new  mongoose.Schema({
        email	: { type : String, required : true },
        asignada	: { type : Number, required : true },
        ejecutada	: { type : Number, required : true },
        encola	: { type : Number, required : true }

        }, {
        timestamps: true
        });

      

module.exports = mongoose.model('Operadores2', Operadores2Schema);


