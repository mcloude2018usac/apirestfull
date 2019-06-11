var mongoose =require("mongoose");


    var UserpostSchema 		=	new  mongoose.Schema({
        name: String,
        user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
        }, {
        timestamps: true
        });

      

module.exports = mongoose.model('Userpost', UserpostSchema);


