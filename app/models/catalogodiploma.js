var mongoose =require("mongoose");
    var CatalogodiplomaSchema 		=	new  mongoose.Schema({
        idempresa   		: { type : String, required : true },
      
        nombre   		: { type : String},
       
        foto 	: { type : String },
        encabezado1   		: { type : String},
        encabezado2   		: { type : String},
        encabezado3   		: { type : String},
        encabezado4   		: { type : String},
        cuerpo1   		: { type : String},
        cuerpo2   		: { type : String},
        cuerpo3   		: { type : String},
        cuerpo4   		: { type : String},
        unidad   		: { type : String},
        estado	: { type : String, required : true }
        ,usuarionew	: { type : String },      usuarioup	: { type : String }
       
        }, {
        timestamps: true
        });



module.exports = mongoose.model('Catalogodiploma', CatalogodiplomaSchema);

