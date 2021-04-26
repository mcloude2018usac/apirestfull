var mongoose =require("mongoose");
    var GaleriaimgSchema 		=	new  mongoose.Schema({
        idempresa   		: { type : String, required : true },
        categoria   		: { type : String, required : true },
        nombre  		: { type : String, required : true },
        imagen  		: { type : String },
        url	: { type : String },
        estado   		: { type : String, required : true }
          ,usuarionew	: { type : String },      usuarioup	: { type : String }
        }, {
        timestamps: true
        });

      

module.exports = mongoose.model('Galeriaimg', GaleriaimgSchema);