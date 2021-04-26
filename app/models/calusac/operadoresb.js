var mongoose =require("mongoose");

    var OperadorebsSchema 		=	new  mongoose.Schema({
        email	: { type : String, required : true },
        asignada	: { type : Number, required : true },
        ejecutada	: { type : Number, required : true },
        encola	: { type : Number, required : true }

        }, {
        timestamps: true
        });

      

module.exports = mongoose.model('Operadorebs', OperadorebsSchema);

