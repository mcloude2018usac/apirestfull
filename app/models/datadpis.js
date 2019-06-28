var mongoose =require("mongoose");
    var DatanovcarneSchema 		=	new  mongoose.Schema({
        
        nov   		: { type : String},
        nombre 	: { type : String },
        cui	: { type : String, required : true }
       
        }, {
        timestamps: true
        });



module.exports = mongoose.model('Datanovcarne', DatanovcarneSchema);

