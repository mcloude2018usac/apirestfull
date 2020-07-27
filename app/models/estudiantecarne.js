var mongoose =require("mongoose");


    var EstudiantecarneSchema 		=	new  mongoose.Schema({
        carne   		: { type : String},
        nombre   		: { type : String}
        
        }, {
        timestamps: true
        });



module.exports = mongoose.model('Estudiantecarnet', EstudiantecarneSchema);

