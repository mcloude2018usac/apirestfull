var mongoose =require("mongoose");
    var PlantillaSchema 		=	new  mongoose.Schema({
      idempresa  		: { type : String, required : true },
        nombre   		: { type : String, required : true },
        descripcion   		: { type : String, required : true},
        fechaini   		: { type : Date, required : true},
        fechafin   		: { type : Date, required : true},
        ubicacion	: { type : String, required : true },
        tiempodias: { type : Number, required : true },
        categoria: { type : String, required : true,ref:'Formcat' },
        unidad: { type : String, required : true ,ref:'Formcat'},
        costo	: { type : Number, required : true },
        foto 	: { type : String, required : true },
        estado	: { type : String, required : true },
        nomax: { type : Number },
        usuarionew	: { type : String },      usuarioup	: { type : String }
      }, {
        timestamps: true
        });



module.exports = mongoose.model('Plantilla', PlantillaSchema);

