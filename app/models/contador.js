var mongoose =require("mongoose");

    var ContadorSchema 		=	new  mongoose.Schema({
      
        tipo   		: { type : String},
      
        sequence_value: { type : Number , default:1 }
       
        
      
        }, {
        timestamps: true
        });



module.exports = mongoose.model('Contador', ContadorSchema);



// sequence instance
