var mongoose =require("mongoose");


    var Unidadplan4aSchema 		=	new  mongoose.Schema({
        idtipounidad :  		{    id	: { type : String, required : true },   nombre	: { type : String, required : true }        },
        idunidadacademica   		: {    id	: { type : String, required : true },   nombre	: { type : String, required : true }  ,codigo	: { type : String, required : true }      },
        idperiodo   		: {    id	: { type : String, required : true },   nombre	: { type : String, required : true }        },
        idedificio: {    id	: { type : String, required : true },   nombre	: { type : String, required : true }        },
        idsalon: {    id	: { type : String, required : true },   nombre	: { type : String, required : true }        },
        nombre: {
            type: String,
            required: true
        },
        ididioma: {
            type: String,
            required: true,ref:'Unidadidioma3'
        },
        idtipo: {
            type: String,
            required: true,ref:'Unidadtipogrupo3'
        },
        idhora: {  type: String,   required: true   },
        iddia: {  type: Date,   required: true   },
        idprofesor: {
            type: String,
            required: true,ref:'User'
        },
        capacidad: {
            type: Number,
            required: true
        },
        asignados: {
            type: Number
        },
        comentario: {            type: String        },
        estado: {            type: String        },
        date 		: { type: Date, default: Date.now }
        ,usuarionew	: { type : String },      usuarioup	: { type : String }
        }, {
        timestamps: true
        });

      

module.exports = mongoose.model('Unidadplan4a', Unidadplan4aSchema);


