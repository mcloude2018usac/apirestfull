var mongoose =require("mongoose");
    var BusSchema 		=	new  mongoose.Schema({
        idempresa   		: { type : String, required : true },
        idasociado  		: { type : String, required : true },
        idsucursal  		: { type : String, required : true },
        codigo	: { type : String },
        noplaca	: { type : String },
        estado	: { type : String },
        nombre	: { type : String },
        idtarifa: {    id	: { type : String, required : true , ref: 'Tarifa'},   nombre	: { type : String, required : true }        },
        idruta: {    id	: { type : String, required : true ,ref: 'Catalogo' },   nombre	: { type : String, required : true }        }
          ,usuarionew	: { type : String },      usuarioup	: { type : String }
        }, {
        timestamps: true
        });

      

module.exports = mongoose.model('Bus', BusSchema);