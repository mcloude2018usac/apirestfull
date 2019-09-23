var mongoose =require("mongoose");


    var Unidadplan3Schema 		=	new  mongoose.Schema({
        idtipounidad :  		{    id	: { type : String, required : true },   nombre	: { type : String, required : true }        },
        idunidadacademica   		: {    id	: { type : String, required : true },   nombre	: { type : String, required : true }  ,codigo	: { type : String, required : true }      },
        idperiodo   		: {    id	: { type : String, required : true },   nombre	: { type : String, required : true }        },
        idedificio: {    id	: { type : String, required : true },   nombre	: { type : String, required : true }        },
        idsalon: {    id	: { type : String, required : true },   nombre	: { type : String, required : true }        },
        nombre: {
            type: String,
            required: true
        },
        idnivel: {
            type: String,
            required: true,ref:'Unidadnivel3'
        },
        idjornada: {
            type: String,
            required: true,ref:'Unidadjornada3'
        },
        idhorario: {
            type: String,
            required: true,ref:'Unidadhorario3'
        },
      
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
       
        codfac: {
            type: String
        },
        date 		: { type: Date, default: Date.now }
        ,usuarionew	: { type : String },      usuarioup	: { type : String }
        }, {
        timestamps: true
        });

      

module.exports = mongoose.model('Unidadplan3', Unidadplan3Schema);


