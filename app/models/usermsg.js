var mongoose =require("mongoose");
    var UsermsgSchema 		=	new  mongoose.Schema({
        userId :  	{ type : String, required : true, ref: 'User' },
        toUserId:  	{ type : String, required : true, ref: 'User' },
        status	: { type : String, required : true },
        message  		: { type : String},
        messageimg  		: { type : String},
        message2  		: { type : String},
        userId2 :  	{ type : String },
        imagen2 :  	{ type : String }


        }, {
        timestamps: true
        });



module.exports = mongoose.model('Usermsg', UsermsgSchema);
