var mongoose =require("mongoose");

    var Tipounidad2Schema 		=	new  mongoose.Schema({
        nombre	: { type : String, required : true },
        codigo	: { type : Number, required : true },
        iddepartamento:  {    id	: { type : String, required : true , ref: 'Departamento'},   nombre	: { type : String, required : true }        },
   
        abreviatura: { type : String}
        ,usuarionew	: { type : String },      usuarioup	: { type : String }

        }, {
        timestamps: true
        });

      

module.exports = mongoose.model('Tipounidad2', Tipounidad2Schema);


