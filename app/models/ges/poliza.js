var mongoose =require("mongoose");
    var PolizaSchema 		=	new  mongoose.Schema({
        idempresa  		: { type : String, required : true },
      
        
        codigo   		: { type : String},
        anyo   		: { type : String},
        estado   		: { type : String},
        noorden   		: { type : String},
        correlativo   		: { type : String}
       
       
        }, {
        timestamps: true
        });



module.exports = mongoose.model('Poliza', PolizaSchema);

