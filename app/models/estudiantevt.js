var mongoose =require("mongoose");


    var EstudiantevtSchema 		=	new  mongoose.Schema({
        carnet   		: { type : String},
        nombre   		: { type : String}
        
        }, {
        timestamps: true
        });



module.exports = mongoose.model('Estudiantevt', EstudiantevtSchema);

