var mongoose =require("mongoose");
    var ConveniocalusacdSchema 		=	new  mongoose.Schema({
        idtipounidad :  		{    id	: { type : String, required : true },   nombre	: { type : String, required : true }        },
        idunidadacademica   		: {    id	: { type : String, required : true },   nombre	: { type : String, required : true }     ,   codigo	: { type : String, required : true }       },
    
        idempresa: { type : String, required : true },
        idconvenio	: { type : String, required : true },
        cui	: { type : String, required : true },
        nombre	: { type : String, required : true },
        correo	: { type : String, required : true },  
        carne	: { type : String },


 
        ididioma:{        type: String,ref:'Unidadidioma3'},
         tipopago: {        type: String,        required: true   ,ref:'Unidadpago3' },
        jornada: { type : String, required : true ,ref:'Unidadjornada3' },
        nivel:{        type: String ,ref:'Unidadnivel3' },
        horario	: { type : String, required : true,ref:'Unidadhorario3'  },
        usuarionew	: { type : String },      usuarioup	: { type : String }
        }, {
        timestamps: true
        });

      

module.exports = mongoose.model('Conveniocalusacd', ConveniocalusacdSchema);

