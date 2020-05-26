var mongoose =require("mongoose");
    var ConveniocalusacSchema 		=	new  mongoose.Schema({
            
        idempresa	: { type : String, required : true },
        f1	: { type : Date, required : true},
        f2	: { type : Date, required : true},
        tipo	: { type : String, required : true},
        nombre	: { type : String, required : true },
        monto	: { type : Number, required : true },

        estado:{ type : String},
        noboletapago:{ type : String },
        fechasiif:{ type : String },
        llave:{ type : String },
        identificador:{ type : String},
    



        usuarionew	: { type : String },      usuarioup	: { type : String }
        }, {
        timestamps: true
        });

      

module.exports = mongoose.model('Conveniocalusac', ConveniocalusacSchema);


