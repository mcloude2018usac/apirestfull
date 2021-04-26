var mongoose =require("mongoose");
    var SuscriptorsaldoSchema 		=	new  mongoose.Schema({
        idempresa   		: { type : String, required : true },
        idsuscriptor :  		{    id	: { type : String, required : true, ref: 'User' },   nombre	: { type : String, required : true } ,   dpi	: { type : String, required : true }       },

        saldoactual   		: { type : Number},
        codigo1: { type : String},
        codigo2: { type : String},
        codigo3: { type : String},
        codigo4: { type : String},
        codigo5: { type : String},
                  dispositivo1: { type : String},
                  dispositivo2: { type : String},
                  dispositivo3: { type : String},
                  dispositivo4: { type : String},
                  dispositivo5: { type : String}
        ,usuarionew	: { type : String },      usuarioup	: { type : String }
       
        }, {
        timestamps: true
        });



module.exports = mongoose.model('Suscriptorsaldo', SuscriptorsaldoSchema);

