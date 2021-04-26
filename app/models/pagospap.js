var mongoose =require("mongoose");
    var PagospapSchema 		=	new  mongoose.Schema({
        ordenpago  		: { type : Number, required : true },
        carne  		: { type : String, required : true },
        nombre   		: { type : String},
        rubro  		: { type : String},
        valor  		: { type : Number},
        fecha		: { type : String},
        noboleta  		: { type : Number, required : true },
        ua		: { type : String},
        pagado  		: { type : Number, required : true },
        cui  		: { type : String},
        carne  		: { type : String},
        nov  		: { type : String},
        nombre  		: { type : String},
        saldo  		: { type : Number},
        debe  		: { type : Number},
        haber  		: { type : Number},
        saldo2  		: { type : Number},
        pago  		: { type : Number},
       
        lenguaje	: { type : Boolean },
        matematica	: { type : Boolean },
        fisica	: { type : Boolean },
        biologia	: { type : Boolean },
        quimica	: { type : Boolean },
        monto: {        type: Number,        required: true    },
        montodeuda: {        type: Number,        required: true    },
        cursosaplica: {        type: String,        required: true    },
        noboleta: {        type: String,        required: true    },
        idpap: {        type: String,        required: true , ref: 'Userperfil'   }
        }, {
        timestamps: true
        });



module.exports = mongoose.model('Pagospap', PagospapSchema);

