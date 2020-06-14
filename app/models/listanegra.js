var mongoose =require("mongoose");
/* Create a Mongoose Schema object for generating
 document rules as to what structure MUST be
 expected when requesting/sending data to and from
 the MongoDB database collection */
    Schema 				=	mongoose.Schema,

/* Define the schema rules (field names, types and rules) */
    ListanegraSchema 		=	new Schema({
        email   		: { type : String},
        tipo	: { type : String}
     
    });

/* Export model for application usage */
module.exports = mongoose.model('Listanegra', ListanegraSchema);
