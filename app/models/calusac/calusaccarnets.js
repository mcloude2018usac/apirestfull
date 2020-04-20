var mongoose =require("mongoose");

    var CalusaccarnetSchema 		=	new  mongoose.Schema({
       
        contador	: { type : Number, required : true },
       
        });

      

module.exports = mongoose.model('Calusaccarnets', CalusaccarnetSchema);


