var mongoose =require("mongoose");
/* Create a Mongoose Schema object for generating
 document rules as to what structure MUST be
 expected when requesting/sending data to and from
 the MongoDB database collection */
    Schema 				=	mongoose.Schema,

/* Define the schema rules (field names, types and rules) */
    GallerySchema 		=	new Schema({
        name   		: { type : String, required : true, max : 50 },
        description	: { type : String, required : true },
        thumbnail 	: { type : String, required : true },
        displayed    : Boolean,
        date 		: { type: Date, default: Date.now }
    });

/* Export model for application usage */
module.exports = mongoose.model('Gallery', GallerySchema);
