var mongoose =require("mongoose");


    var Unidadplan2Schema 		=	new  mongoose.Schema({
        idtipounidad :  		{    id	: { type : String, required : true },   nombre	: { type : String, required : true }        },
        idunidadacademica   		: {    id	: { type : String, required : true },   nombre	: { type : String, required : true }  ,codigo	: { type : String, required : true }      },
        idperiodo   		: {    id	: { type : String, required : true },   nombre	: { type : String, required : true }        },
        idedificio: {    id	: { type : String, required : true },   nombre	: { type : String, required : true }        },
        idsalon: {    id	: { type : String, required : true },   nombre	: { type : String, required : true }        },
        nombre: {
            type: String,
            required: true
        },
        idjornada: {
            type: String,
            required: true
        },
        idhorario: {
            type: String,
            required: true
        },
        idmateria: {
            type: String,
            required: true
        },
        capacidad: {
            type: Number,
            required: true
        },
        asignados: {
            type: Number
        },
        codfac: {
            type: String
        },
        date 		: { type: Date, default: Date.now }
        ,usuarionew	: { type : String },      usuarioup	: { type : String }
        }, {
        timestamps: true
        });

      

module.exports = mongoose.model('Unidadplan2', Unidadplan2Schema);


